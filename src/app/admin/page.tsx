'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SiteConfig, defaultSiteConfig } from '@/lib/siteConfig';

interface Subscriber {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  consent: boolean;
  created_at: string;
}

interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  services?: string[];
  message?: string;
  created_at: string;
}

export interface SessionInfo {
  token: string;
  createdAt: number;
  lastActiveAt: number;
  expiresAt: number;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  deviceLabel: string;
  ip: string;
  isCurrent?: boolean;
}

type TabType = 'contact' | 'firm' | 'hero' | 'media' | 'newsletter' | 'enquiries' | 'security';

export default function AdminDashboardPage() {
  // Authentication State
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Sessions & Multi-Device State
  const [sessions, setSessions] = useState<SessionInfo[]>([]);
  const [totalDevices, setTotalDevices] = useState(1);
  const [loadingSessions, setLoadingSessions] = useState(false);
  const [sessionActionMsg, setSessionActionMsg] = useState('');
  const [sessionActionError, setSessionActionError] = useState('');

  // Password Change Multi-Device Logout Option
  const [logoutAllDevicesOption, setLogoutAllDevicesOption] = useState<boolean>(false);

  // Forgot Password / OTP Flow State
  const [loginMode, setLoginMode] = useState<'passkey' | 'forgot_request' | 'forgot_verify'>('passkey');
  const [otpInput, setOtpInput] = useState('');
  const [newPasskeyOnReset, setNewPasskeyOnReset] = useState('');
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpNoticeMsg, setOtpNoticeMsg] = useState('');
  const [resendCooldown, setResendCooldown] = useState(0);

  // In-Dashboard Passkey Change State
  const [currentPasskeyInDash, setCurrentPasskeyInDash] = useState('');
  const [newPasskeyInDash, setNewPasskeyInDash] = useState('');
  const [confirmPasskeyInDash, setConfirmPasskeyInDash] = useState('');
  const [isChangingPasskey, setIsChangingPasskey] = useState(false);
  const [passkeyChangeSuccess, setPasskeyChangeSuccess] = useState('');
  const [passkeyChangeError, setPasskeyChangeError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState<TabType>('contact');

  // Website Configuration
  const [config, setConfig] = useState<SiteConfig>(defaultSiteConfig);
  const [savingConfig, setSavingConfig] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');
  const [saveErrorMsg, setSaveErrorMsg] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  // Upload state
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [uploadFeedback, setUploadFeedback] = useState<{ [key: string]: string }>({});

  // Newsletter State
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [activeCount, setActiveCount] = useState(0);
  const [totalSubscribers, setTotalSubscribers] = useState(0);
  const [loadingSubscribers, setLoadingSubscribers] = useState(false);
  const [subscriberSearch, setSubscriberSearch] = useState('');

  // Newsletter Broadcast Composer
  const [broadcastSubject, setBroadcastSubject] = useState('Statutory Compliance Alert · Daksh Desai & Associates');
  const [broadcastHeading, setBroadcastHeading] = useState('Important Statutory & Tax Filing Deadlines');
  const [broadcastContent, setBroadcastContent] = useState(
`Dear Subscriber,

This technical circular provides timely notice of statutory compliance deadlines under the Income-tax Act, 1961, CGST Act, 2017, and the Companies Act, 2013.

1. GSTR-3B Monthly Return: Due on the 20th of this month for all regular registrants.
2. Advance Tax Installment: Applicable under Section 208/211 for corporate and non-corporate assessees.
3. TDS / TCS Tax Deposit: Due by the 7th for preceding month deductions.

Please review your ledger balances and statutory challans with your finance team to avoid late fees or interest under Section 234A/B/C.

For specific clarifications on statutory applicability, you may schedule a consultation with our Mumbai chambers.`
  );
  const [sendingState, setSendingState] = useState<'idle' | 'test_sending' | 'broadcasting' | 'done' | 'error'>('idle');
  const [broadcastStatusMsg, setBroadcastStatusMsg] = useState('');

  // Enquiries State
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(false);
  const [enquirySearch, setEnquirySearch] = useState('');

  // File Input References
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  // Cooldown countdown timer for OTP resend
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const formatTimeAgo = (timestamp: number): string => {
    const diffSec = Math.max(0, Math.floor((Date.now() - timestamp) / 1000));
    if (diffSec < 45) return 'Active just now';
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin}m ago`;
    const diffHour = Math.floor(diffMin / 60);
    if (diffHour < 24) return `${diffHour}h ago`;
    const diffDays = Math.floor(diffHour / 24);
    return `${diffDays}d ago`;
  };

  const loadSessions = async (token?: string) => {
    const key = token || passkey || (typeof window !== 'undefined' ? sessionStorage.getItem('dda_admin_key') : '') || '';
    if (!key) return;
    setLoadingSessions(true);
    try {
      const res = await fetch(`/api/admin/auth/sessions?token=${encodeURIComponent(key)}`);
      if (res.ok) {
        const data = await res.json();
        setSessions(data.sessions || []);
        setTotalDevices(data.totalDevices || (data.sessions ? data.sessions.length : 1));
      }
    } catch (err) {
      console.warn('Failed to load active sessions:', err);
    } finally {
      setLoadingSessions(false);
    }
  };

  const handleTerminateSession = async (targetToken: string) => {
    const key = passkey || sessionStorage.getItem('dda_admin_key') || '';
    setSessionActionMsg('');
    setSessionActionError('');
    try {
      const res = await fetch('/api/admin/auth/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: key,
          action: 'terminate',
          targetToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to disconnect device');
      }
      setSessionActionMsg(data.message || 'Device disconnected successfully.');
      if (data.sessions) setSessions(data.sessions);
      if (data.totalDevices !== undefined) setTotalDevices(data.totalDevices);
    } catch (err: unknown) {
      setSessionActionError(err instanceof Error ? err.message : 'Error disconnecting device');
    }
  };

  const handleTerminateAllOtherSessions = async () => {
    const key = passkey || sessionStorage.getItem('dda_admin_key') || '';
    setSessionActionMsg('');
    setSessionActionError('');
    try {
      const res = await fetch('/api/admin/auth/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: key,
          action: 'terminate_all_others',
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to disconnect other devices');
      }
      setSessionActionMsg(data.message || 'All other devices have been disconnected.');
      if (data.sessions) setSessions(data.sessions);
      if (data.totalDevices !== undefined) setTotalDevices(data.totalDevices);
    } catch (err: unknown) {
      setSessionActionError(err instanceof Error ? err.message : 'Error disconnecting devices');
    }
  };

  // Auto-login if key is saved in sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem('dda_admin_key');
    if (saved) {
      setPasskey(saved);
      verifyLogin(saved);
    }
  }, []);

  const loadSubscribers = async (key: string) => {
    try {
      const res = await fetch('/api/admin/newsletter/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey: key }),
      });
      if (res.ok) {
        const data = await res.json();
        setSubscribers(data.subscribers || []);
        setActiveCount(data.activeCount || 0);
        setTotalSubscribers(data.total || 0);
      }
    } catch (err) {
      console.warn('Failed to load subscribers:', err);
    }
  };

  const verifyLogin = async (keyToVerify: string) => {
    setAuthError('');
    try {
      const res = await fetch(`/api/admin/auth/sessions?token=${encodeURIComponent(keyToVerify)}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Session expired or invalid credentials');
      }

      setIsAuthenticated(true);
      sessionStorage.setItem('dda_admin_key', keyToVerify);
      setSessions(data.sessions || []);
      setTotalDevices(data.totalDevices || (data.sessions ? data.sessions.length : 1));

      // Load Settings, Enquiries & Subscribers
      loadSettings();
      loadEnquiries(keyToVerify);
      loadSubscribers(keyToVerify);
    } catch (err: unknown) {
      console.warn('Authentication check failed:', err);
      sessionStorage.removeItem('dda_admin_key');
      setIsAuthenticated(false);
      setAuthError(err instanceof Error ? err.message : 'Session expired. Please log in again.');
    }
  };

  const loadSettings = async () => {
    try {
      const res = await fetch('/api/settings', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        if (data.config) {
          setConfig({ ...defaultSiteConfig, ...data.config });
        }
      }
    } catch (err) {
      console.warn('Failed to load current settings:', err);
    }
  };

  const loadEnquiries = async (key: string) => {
    setLoadingEnquiries(true);
    try {
      const res = await fetch('/api/admin/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey: key }),
      });
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (err) {
      console.warn('Failed to load enquiries:', err);
    } finally {
      setLoadingEnquiries(false);
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkey.trim()) return;
    setAuthError('');
    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey: passkey.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Invalid Admin Passkey');
      }

      const sessionToken = data.sessionToken || passkey.trim();
      sessionStorage.setItem('dda_admin_key', sessionToken);
      setPasskey(sessionToken);
      setIsAuthenticated(true);
      setTotalDevices(data.totalDevices || 1);
      if (data.session) {
        setSessions([data.session]);
      }

      loadSessions(sessionToken);
      loadSettings();
      loadEnquiries(sessionToken);
      loadSubscribers(sessionToken);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Invalid Admin Passkey');
      setIsAuthenticated(false);
    }
  };

  // OTP Request Handler
  const handleRequestOtp = async () => {
    setIsSendingOtp(true);
    setAuthError('');
    setOtpNoticeMsg('');
    try {
      const res = await fetch('/api/admin/auth/forgot-password', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to send OTP');
      }
      setLoginMode('forgot_verify');
      setResendCooldown(60);
      setOtpNoticeMsg(data.message || 'Verification code dispatched to registered email.');
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Error sending verification code');
    } finally {
      setIsSendingOtp(false);
    }
  };

  // OTP Verification Handler
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpInput.trim()) {
      setAuthError('Please enter the 6-digit verification code.');
      return;
    }

    if (newPasskeyOnReset && newPasskeyOnReset.trim().length < 6) {
      setAuthError('New passkey must be at least 6 characters long.');
      return;
    }

    setIsVerifyingOtp(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          otp: otpInput.trim(),
          newPasskey: newPasskeyOnReset.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Verification failed');
      }

      // Successful OTP authentication!
      const authToken = data.sessionToken || (newPasskeyOnReset ? newPasskeyOnReset.trim() : 'daksh2026');
      sessionStorage.setItem('dda_admin_key', authToken);
      setPasskey(authToken);
      setIsAuthenticated(true);
      setSaveSuccessMsg(data.message || 'Authenticated successfully! Welcome back.');

      // Load data
      loadSessions(authToken);
      loadSettings();
      loadEnquiries(authToken);
      loadSubscribers(authToken);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Invalid verification code');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  // In-Dashboard Passkey Change Handler
  const handleChangePasskeyInDashboard = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasskeyChangeError('');
    setPasskeyChangeSuccess('');

    if (!newPasskeyInDash || newPasskeyInDash.length < 6) {
      setPasskeyChangeError('New passkey must be at least 6 characters long.');
      return;
    }

    if (newPasskeyInDash !== confirmPasskeyInDash) {
      setPasskeyChangeError('New passkeys do not match. Please verify.');
      return;
    }

    setIsChangingPasskey(true);
    try {
      const activeKey = passkey || sessionStorage.getItem('dda_admin_key') || '';
      const res = await fetch('/api/admin/auth/change-passkey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey: activeKey,
          newPasskey: newPasskeyInDash.trim(),
          logoutAllDevices: logoutAllDevicesOption,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to update passkey');
      }

      setPasskeyChangeSuccess(data.message || 'Passkey updated successfully!');
      if (data.sessions) setSessions(data.sessions);
      if (data.totalDevices !== undefined) setTotalDevices(data.totalDevices);

      // If activeKey was a raw passkey (not a session token), update sessionStorage
      if (!activeKey.startsWith('dda_sess_')) {
        sessionStorage.setItem('dda_admin_key', newPasskeyInDash.trim());
        setPasskey(newPasskeyInDash.trim());
      }

      setNewPasskeyInDash('');
      setConfirmPasskeyInDash('');
      setCurrentPasskeyInDash('');
    } catch (err: unknown) {
      setPasskeyChangeError(err instanceof Error ? err.message : 'Error changing passkey');
    } finally {
      setIsChangingPasskey(false);
    }
  };

  const handleSignOut = () => {
    const key = passkey || sessionStorage.getItem('dda_admin_key') || '';
    if (key && key.startsWith('dda_sess_')) {
      fetch('/api/admin/auth/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: key, action: 'terminate', targetToken: key }),
      }).catch(() => {});
    }
    sessionStorage.removeItem('dda_admin_key');
    setIsAuthenticated(false);
    setPasskey('');
    setLoginMode('passkey');
    setOtpInput('');
    setSessions([]);
    setTotalDevices(1);
  };

  const handleFieldChange = (key: keyof SiteConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setIsDirty(true);
  };

  const handleSaveSettings = async () => {
    setSavingConfig(true);
    setSaveSuccessMsg('');
    setSaveErrorMsg('');
    try {
      const res = await fetch('/api/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey: passkey || sessionStorage.getItem('dda_admin_key'),
          config,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to save configuration');
      }

      setSaveSuccessMsg('✓ All website changes saved and live immediately across all pages!');
      setIsDirty(false);
      setTimeout(() => setSaveSuccessMsg(''), 5000);
    } catch (err: unknown) {
      setSaveErrorMsg(err instanceof Error ? err.message : 'Error saving settings');
    } finally {
      setSavingConfig(false);
    }
  };

  const handleFileUpload = async (fieldKey: keyof SiteConfig, file: File) => {
    setUploadingField(fieldKey);
    try {
      // Detect image dimensions locally for user clarity
      if (typeof window !== 'undefined') {
        const imgObj = new window.Image();
        imgObj.onload = () => {
          setUploadFeedback((prev) => ({
            ...prev,
            [fieldKey]: `✓ Uploaded ${imgObj.width} × ${imgObj.height} px · Smart auto-fit enabled!`,
          }));
        };
        imgObj.src = URL.createObjectURL(file);
      }

      const formData = new FormData();
      formData.append('passkey', passkey || sessionStorage.getItem('dda_admin_key') || '');
      formData.append('file', file);

      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      // Update config with newly uploaded URL
      handleFieldChange(fieldKey, data.url);
      setSaveSuccessMsg(`✓ Photo uploaded! Click "Save All Changes" to publish across all pages.`);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Failed to upload photo');
    } finally {
      setUploadingField(null);
    }
  };

  // Newsletter Actions
  const handleSendTestEmail = async () => {
    setSendingState('test_sending');
    setBroadcastStatusMsg('');
    try {
      const res = await fetch('/api/admin/newsletter/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey: passkey || sessionStorage.getItem('dda_admin_key'),
          subject: broadcastSubject,
          heading: broadcastHeading,
          content: broadcastContent,
          testOnly: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send test email');
      setSendingState('done');
      setBroadcastStatusMsg(data.message || 'Test email dispatched successfully!');
    } catch (err: unknown) {
      setSendingState('error');
      setBroadcastStatusMsg(err instanceof Error ? err.message : 'Test sending error');
    }
  };

  const handleSendBroadcast = async () => {
    if (activeCount === 0) {
      alert('There are no active subscribers to broadcast to.');
      return;
    }
    const confirmed = window.confirm(
      `Are you sure you want to broadcast this statutory bulletin to all ${activeCount} active subscriber(s)? This will send official emails directly from Daksh Desai & Associates.`
    );
    if (!confirmed) return;

    setSendingState('broadcasting');
    setBroadcastStatusMsg('');
    try {
      const res = await fetch('/api/admin/newsletter/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey: passkey || sessionStorage.getItem('dda_admin_key'),
          subject: broadcastSubject,
          heading: broadcastHeading,
          content: broadcastContent,
          testOnly: false,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to broadcast');
      setSendingState('done');
      setBroadcastStatusMsg(data.message || 'Broadcast completed successfully!');
    } catch (err: unknown) {
      setSendingState('error');
      setBroadcastStatusMsg(err instanceof Error ? err.message : 'Broadcast error');
    }
  };

  const handleDownloadSubscribersCsv = () => {
    if (subscribers.length === 0) return;
    const headers = 'ID,Email,Status,Consent,Subscribed At\n';
    const rows = subscribers
      .map((s) => `"${s.id}","${s.email}","${s.status}","${s.consent}","${s.created_at}"`)
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `subscribers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadEnquiriesCsv = () => {
    if (enquiries.length === 0) return;
    const headers = 'Date,Name,Email,Phone,Services,Message\n';
    const rows = enquiries
      .map(
        (e) =>
          `"${e.created_at}","${e.name}","${e.email}","${e.phone}","${(e.services || []).join('; ')}","${(e.message || '').replace(/"/g, '""')}"`
      )
      .join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `client_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered subscribers and enquiries
  const filteredSubscribers = subscribers.filter((s) =>
    s.email.toLowerCase().includes(subscriberSearch.toLowerCase())
  );

  const filteredEnquiries = enquiries.filter(
    (e) =>
      e.name.toLowerCase().includes(enquirySearch.toLowerCase()) ||
      e.email.toLowerCase().includes(enquirySearch.toLowerCase()) ||
      e.phone.toLowerCase().includes(enquirySearch.toLowerCase()) ||
      (e.message && e.message.toLowerCase().includes(enquirySearch.toLowerCase()))
  );

  // If not authenticated, render Sovereign Login Screen with Passkey & Email OTP options
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrap">
        <div className="admin-login-card">
          <div className="admin-login-crest">
            <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={48} height={48} priority />
          </div>
          <span className="admin-login-badge">✦ OFFICIAL PRACTICE CONSOLE</span>
          <h1 className="admin-login-title">Daksh Desai &amp; Associates</h1>
          <p className="admin-login-sub">
            Chambers CMS &amp; Master Administration Dashboard. Direct partner control over practice contact, compliance details, visual media, and bulletins.
          </p>

          {/* Mode Switcher Tabs */}
          <div className="admin-login-tabs">
            <button
              type="button"
              className={`admin-login-tab-btn ${loginMode === 'passkey' ? 'active' : ''}`}
              onClick={() => {
                setLoginMode('passkey');
                setAuthError('');
                setOtpNoticeMsg('');
              }}
            >
              🔑 Master Passkey
            </button>
            <button
              type="button"
              className={`admin-login-tab-btn ${loginMode !== 'passkey' ? 'active' : ''}`}
              onClick={() => {
                setLoginMode('forgot_request');
                setAuthError('');
                setOtpNoticeMsg('');
              }}
            >
              ✉️ Email OTP Verification
            </button>
          </div>

          {/* Mode 1: Standard Passkey Access */}
          {loginMode === 'passkey' && (
            <form onSubmit={handleLoginSubmit} className="admin-login-form">
              <div className="admin-field-group">
                <label htmlFor="adminKeyInput" className="admin-label">
                  Security Passkey
                </label>
                <div className="admin-input-wrap">
                  <input
                    id="adminKeyInput"
                    type={showPassword ? 'text' : 'password'}
                    className="admin-input"
                    placeholder="Enter Passkey (e.g. daksh2026)"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    autoFocus
                  />
                  <button
                    type="button"
                    className="admin-toggle-pwd"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>

              {authError && <div className="admin-alert admin-alert-error">{authError}</div>}

              <button type="submit" className="admin-btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
                <span>Access Master Console</span>
                <span aria-hidden="true">→</span>
              </button>

              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <button
                  type="button"
                  className="admin-btn-link"
                  onClick={() => {
                    setLoginMode('forgot_request');
                    setAuthError('');
                  }}
                >
                  Forgot Passkey? Reset via Email OTP →
                </button>
              </div>
            </form>
          )}

          {/* Mode 2: Step 1 - Request OTP */}
          {loginMode === 'forgot_request' && (
            <div className="admin-login-form">
              <div style={{ marginBottom: '1.25rem', textAlign: 'left' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0B1528', marginBottom: '0.4rem' }}>
                  Registered Administrative Email:
                </div>
                <div className="admin-email-display">
                  <span>dakshdesai0109@gmail.com</span>
                  <span className="admin-email-badge">✓ Verified Principal</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.65rem', lineHeight: 1.5 }}>
                  Click below to dispatch a secure 6-digit one-time passcode (OTP) to this address. Valid for 10 minutes.
                </p>
              </div>

              {authError && <div className="admin-alert admin-alert-error">{authError}</div>}
              {otpNoticeMsg && <div className="admin-alert admin-alert-success">{otpNoticeMsg}</div>}

              <button
                type="button"
                onClick={handleRequestOtp}
                disabled={isSendingOtp}
                className="admin-btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                {isSendingOtp ? (
                  <span>Sending Security Code...</span>
                ) : (
                  <>
                    <span>📨 Send 6-Digit OTP to Email</span>
                    <span aria-hidden="true">→</span>
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <button
                  type="button"
                  className="admin-btn-link"
                  onClick={() => {
                    setLoginMode('passkey');
                    setAuthError('');
                  }}
                >
                  ← Return to Passkey Login
                </button>
              </div>
            </div>
          )}

          {/* Mode 2: Step 2 - Verify OTP & Set Passkey */}
          {loginMode === 'forgot_verify' && (
            <form onSubmit={handleVerifyOtp} className="admin-login-form">
              {otpNoticeMsg && <div className="admin-alert admin-alert-success">{otpNoticeMsg}</div>}

              <div className="admin-field-group">
                <label htmlFor="otpCodeInput" className="admin-label">
                  Enter 6-Digit OTP Code
                </label>
                <input
                  id="otpCodeInput"
                  type="text"
                  maxLength={6}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  className="admin-input admin-otp-input"
                  placeholder="••••••"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value.replace(/[^0-9]/g, ''))}
                  autoFocus
                />
                <div className="admin-otp-hint">
                  <span>Sent to dakshdesai0109@gmail.com</span>
                  {resendCooldown > 0 ? (
                    <span style={{ color: '#94A3B8' }}>Resend in {resendCooldown}s</span>
                  ) : (
                    <button
                      type="button"
                      className="admin-btn-link"
                      onClick={handleRequestOtp}
                      disabled={isSendingOtp}
                    >
                      Resend Code
                    </button>
                  )}
                </div>
              </div>

              <div className="admin-field-group">
                <label htmlFor="newPasskeyInput" className="admin-label">
                  Set New Passkey <span style={{ fontWeight: 400, color: '#64748B' }}>(Optional)</span>
                </label>
                <input
                  id="newPasskeyInput"
                  type="text"
                  className="admin-input"
                  placeholder="Leave blank to login, or type new passkey"
                  value={newPasskeyOnReset}
                  onChange={(e) => setNewPasskeyOnReset(e.target.value)}
                />
                <span className="admin-field-hint">
                  If set, this will be your new master passkey for all future logins.
                </span>
              </div>

              {authError && <div className="admin-alert admin-alert-error">{authError}</div>}

              <button
                type="submit"
                disabled={isVerifyingOtp}
                className="admin-btn-primary"
                style={{ width: '100%', marginTop: '0.75rem' }}
              >
                {isVerifyingOtp ? (
                  <span>Verifying Code...</span>
                ) : (
                  <>
                    <span>Verify Code &amp; Enter Console</span>
                    <span aria-hidden="true">✓</span>
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <button
                  type="button"
                  className="admin-btn-link"
                  onClick={() => {
                    setLoginMode('passkey');
                    setAuthError('');
                    setOtpInput('');
                  }}
                >
                  ← Return to Passkey Login
                </button>
              </div>
            </form>
          )}

          <div className="admin-login-foot">
            <span>Western India Regional Council (WIRC) · FRN: 165505W · M. No. 648747</span>
          </div>
        </div>
      </div>
    );
  }

  // Master Dashboard Screen
  return (
    <div className="admin-portal-wrap">
      {/* Sovereign Master Bar */}
      <header className="admin-topbar">
        <div className="admin-topbar-inner">
          <div className="admin-brand-lockup">
            <div className="admin-brand-emblem">
              <Image src="/images/ca-logo.svg" alt="CA India" width={32} height={32} />
            </div>
            <div>
              <div className="admin-brand-title">Daksh Desai &amp; Associates</div>
              <div className="admin-brand-meta">
                <span>MASTER PRACTICE CONSOLE</span>
                <span className="bullet">·</span>
                <span>FRN {config.frn}</span>
                <span className="bullet">·</span>
                <span className="status-live">● Live Sync</span>
              </div>
            </div>
          </div>

          <div className="admin-topbar-actions">
            <Link href="/" target="_blank" className="admin-btn-outline" title="View live website in new tab">
              <span>View Live Website</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <button
              type="button"
              onClick={() => setActiveTab('security')}
              className={`admin-btn-outline admin-device-btn ${activeTab === 'security' ? 'active' : ''}`}
              title="View and manage connected devices"
            >
              <span className="admin-device-dot">●</span>
              <span>{totalDevices} {totalDevices === 1 ? 'Device' : 'Devices'} Logged In</span>
            </button>

            <button
              type="button"
              onClick={handleSaveSettings}
              disabled={savingConfig}
              className={`admin-btn-save ${isDirty ? 'pulse-gold' : ''}`}
            >
              {savingConfig ? (
                <span>Saving...</span>
              ) : (
                <>
                  <span>✓ Save All Changes</span>
                  {isDirty && <span className="dirty-indicator" title="Unsaved changes pending">●</span>}
                </>
              )}
            </button>

            <button type="button" onClick={handleSignOut} className="admin-btn-signout" title="Sign out of admin session">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Save Success / Error Toasts */}
      {saveSuccessMsg && (
        <div className="admin-toast-banner admin-toast-success">
          <span>{saveSuccessMsg}</span>
          <button type="button" onClick={() => setSaveSuccessMsg('')}>✕</button>
        </div>
      )}
      {saveErrorMsg && (
        <div className="admin-toast-banner admin-toast-error">
          <span>{saveErrorMsg}</span>
          <button type="button" onClick={() => setSaveErrorMsg('')}>✕</button>
        </div>
      )}

      {/* Main Container */}
      <div className="admin-container">
        {/* Navigation Tabs */}
        <nav className="admin-tab-nav" aria-label="Admin Navigation Tabs">
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            <span className="tab-icon">📞</span>
            <span>Chambers &amp; Contact</span>
          </button>

          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'firm' ? 'active' : ''}`}
            onClick={() => setActiveTab('firm')}
          >
            <span className="tab-icon">🏛️</span>
            <span>Firm Particulars</span>
          </button>

          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'hero' ? 'active' : ''}`}
            onClick={() => setActiveTab('hero')}
          >
            <span className="tab-icon">✍️</span>
            <span>Hero &amp; Headlines</span>
          </button>

          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'media' ? 'active' : ''}`}
            onClick={() => setActiveTab('media')}
          >
            <span className="tab-icon">🖼️</span>
            <span>Media &amp; Photos</span>
          </button>

          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'newsletter' ? 'active' : ''}`}
            onClick={() => setActiveTab('newsletter')}
          >
            <span className="tab-icon">✉️</span>
            <span>Newsletter &amp; Broadcast</span>
            <span className="tab-count-badge">{activeCount}</span>
          </button>

          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >
            <span className="tab-icon">📋</span>
            <span>Consultation Enquiries</span>
            <span className="tab-count-badge">{enquiries.length}</span>
          </button>

          <button
            type="button"
            className={`admin-tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <span className="tab-icon">🔒</span>
            <span>Security &amp; Devices</span>
            <span className="tab-count-badge" style={{ background: totalDevices > 1 ? '#0B1528' : '#64748B' }}>
              {totalDevices}
            </span>
          </button>
        </nav>

        {/* =========================================================================
            TAB 1: CHAMBERS & CONTACT DETAILS
            ========================================================================= */}
        {activeTab === 'contact' && (
          <div className="admin-section-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">Chambers Contact Channels &amp; Locations</h2>
                <p className="admin-card-desc">
                  Update primary direct telephone, WhatsApp contact numbers, official statutory emails, office consultation hours, and Mumbai chamber addresses. These update across the Header, Footer, WhatsApp floating button, and Contact page immediately.
                </p>
              </div>
            </div>

            <div className="admin-form-grid">
              {/* Telephone & WhatsApp */}
              <div className="admin-field-box">
                <label className="admin-field-label">
                  Direct Telephone Number (Raw format for tel: links)
                  <span className="admin-field-hint">e.g. +919819647471</span>
                </label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.phone}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">
                  Formatted Telephone Number (Displayed to Clients)
                  <span className="admin-field-hint">e.g. +91 98196 47471</span>
                </label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.phoneFormatted}
                  onChange={(e) => handleFieldChange('phoneFormatted', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">
                  Direct WhatsApp Number (Without spaces or symbols)
                  <span className="admin-field-hint">e.g. +919819647471</span>
                </label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.whatsapp}
                  onChange={(e) => handleFieldChange('whatsapp', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">
                  Office Consultation Hours
                  <span className="admin-field-hint">e.g. Mon–Sat: 10:00 AM – 7:00 PM IST</span>
                </label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.officeHours}
                  onChange={(e) => handleFieldChange('officeHours', e.target.value)}
                />
              </div>

              {/* Practice Emails */}
              <div className="admin-field-box">
                <label className="admin-field-label">
                  Primary Statutory Practice Email
                  <span className="admin-field-hint">e.g. cadakshdesai@outlook.com</span>
                </label>
                <input
                  type="email"
                  className="admin-input"
                  value={config.emailPrimary}
                  onChange={(e) => handleFieldChange('emailPrimary', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">
                  Secondary / Direct Counsel Email
                  <span className="admin-field-hint">e.g. dakshdesai0109@gmail.com</span>
                </label>
                <input
                  type="email"
                  className="admin-input"
                  value={config.emailSecondary}
                  onChange={(e) => handleFieldChange('emailSecondary', e.target.value)}
                />
              </div>

              {/* Head Office Address */}
              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">
                  Registered Head Office Address · Borivali West
                  <span className="admin-field-hint">Full physical address for statutory notices and client visits</span>
                </label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.addressBorivali}
                  onChange={(e) => handleFieldChange('addressBorivali', e.target.value)}
                />
              </div>

              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">
                  Borivali West Google Maps Link
                </label>
                <input
                  type="url"
                  className="admin-input"
                  value={config.mapLinkBorivali}
                  onChange={(e) => handleFieldChange('mapLinkBorivali', e.target.value)}
                />
              </div>

              {/* South Mumbai Chambers */}
              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">
                  South Mumbai Chambers Address · Nariman Point
                  <span className="admin-field-hint">Financial district office address</span>
                </label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.addressNarimanPoint}
                  onChange={(e) => handleFieldChange('addressNarimanPoint', e.target.value)}
                />
              </div>

              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">
                  Nariman Point Google Maps Link
                </label>
                <input
                  type="url"
                  className="admin-input"
                  value={config.mapLinkNarimanPoint}
                  onChange={(e) => handleFieldChange('mapLinkNarimanPoint', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: FIRM PARTICULARS & LEADERSHIP
            ========================================================================= */}
        {activeTab === 'firm' && (
          <div className="admin-section-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">ICAI Statutory Particulars &amp; Proprietor Profile</h2>
                <p className="admin-card-desc">
                  Maintain the firm&apos;s statutory identity strictly compliant with the ICAI Code of Ethics. Includes Firm Registration Number (FRN), Member Number, and Proprietor background.
                </p>
              </div>
            </div>

            <div className="admin-form-grid">
              <div className="admin-field-box">
                <label className="admin-field-label">Firm Practice Name</label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.firmName}
                  onChange={(e) => handleFieldChange('firmName', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">ICAI Firm Registration Number (FRN)</label>
                <input
                  type="text"
                  className="admin-input font-mono"
                  value={config.frn}
                  onChange={(e) => handleFieldChange('frn', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Principal ICAI Membership Number</label>
                <input
                  type="text"
                  className="admin-input font-mono"
                  value={config.memberNo}
                  onChange={(e) => handleFieldChange('memberNo', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Established Year</label>
                <input
                  type="text"
                  className="admin-input font-mono"
                  value={config.establishedYear}
                  onChange={(e) => handleFieldChange('establishedYear', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Proprietor &amp; Principal Name</label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.proprietorName}
                  onChange={(e) => handleFieldChange('proprietorName', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Proprietor Official Designation &amp; Title</label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.proprietorTitle}
                  onChange={(e) => handleFieldChange('proprietorTitle', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Academic Degrees / Qualifications</label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.proprietorDegree}
                  onChange={(e) => handleFieldChange('proprietorDegree', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Proprietor LinkedIn Profile URL</label>
                <input
                  type="url"
                  className="admin-input"
                  value={config.linkedinUrl}
                  onChange={(e) => handleFieldChange('linkedinUrl', e.target.value)}
                />
              </div>

              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">
                  Proprietor Practice Bio &amp; Professional Summary
                  <span className="admin-field-hint">Displays on Our Team and About pages</span>
                </label>
                <textarea
                  rows={4}
                  className="admin-textarea"
                  value={config.proprietorBio}
                  onChange={(e) => handleFieldChange('proprietorBio', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: HERO & TEXT CONTENT
            ========================================================================= */}
        {activeTab === 'hero' && (
          <div className="admin-section-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">Homepage Hero &amp; Practice Scope Headline</h2>
                <p className="admin-card-desc">
                  Customize the core headline, eyebrow seal, and introduction statement on the homepage hero section.
                </p>
              </div>
            </div>

            <div className="admin-form-grid">
              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">Hero Eyebrow Seal</label>
                <input
                  type="text"
                  className="admin-input font-mono"
                  value={config.heroEyebrow}
                  onChange={(e) => handleFieldChange('heroEyebrow', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Headline Line 1</label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.heroTitleLine1}
                  onChange={(e) => handleFieldChange('heroTitleLine1', e.target.value)}
                />
              </div>

              <div className="admin-field-box">
                <label className="admin-field-label">Headline Line 2 (Highlighted Gold Accent)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={config.heroTitleLine2}
                  onChange={(e) => handleFieldChange('heroTitleLine2', e.target.value)}
                />
              </div>

              <div className="admin-field-box admin-col-span-2">
                <label className="admin-field-label">Hero Sublede Statement</label>
                <textarea
                  rows={4}
                  className="admin-textarea"
                  value={config.heroSublede}
                  onChange={(e) => handleFieldChange('heroSublede', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: MEDIA & IMAGERY MANAGER
            ========================================================================= */}
        {activeTab === 'media' && (
          <div className="admin-section-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">Website Visual Assets &amp; Photographs</h2>
                <p className="admin-card-desc">
                  Replace any image on the website instantly. Direct file uploads are auto-saved to the production server. Custom image URLs are also fully supported.
                </p>
              </div>
            </div>

            {/* Master Image Specifications & Smart Auto-Fit Guide */}
            <div className="admin-guide-banner">
              <div className="admin-guide-header">
                <h3 className="admin-guide-title">
                  <span>📐 Master Image Format &amp; Dimension Specifications</span>
                </h3>
                <span className="admin-guide-badge">
                  <span>🛡️</span>
                  <span>Smart Auto-Fit Engine Active</span>
                </span>
              </div>

              <div className="admin-guide-grid">
                {/* Spec 1: Portrait */}
                <div className="admin-guide-card">
                  <div className="admin-guide-card-type">01 · PROPRIETOR PORTRAIT</div>
                  <div className="admin-guide-card-dim">800 × 1066 px</div>
                  <div className="admin-guide-card-ratio">Aspect Ratio 3:4 or 4:5 · Vertical</div>
                  <p className="admin-guide-card-desc">
                    Used on Homepage Stewardship, About Us heritage frame, and Team bio. Sober executive studio or passport format. Subject&apos;s face should be centered in the upper 35% of the frame.
                  </p>
                </div>

                {/* Spec 2: Hero Backdrop */}
                <div className="admin-guide-card">
                  <div className="admin-guide-card-type">02 · HERO AMBIENT BACKDROP</div>
                  <div className="admin-guide-card-dim">1920 × 1080 px</div>
                  <div className="admin-guide-card-ratio">Aspect Ratio 16:9 · Full Widescreen</div>
                  <p className="admin-guide-card-desc">
                    Used behind the main hero section under the sovereign dark scrim. High-resolution ambient architectural light pattern, financial district, or subtle texture.
                  </p>
                </div>

                {/* Spec 3: Practice & Desk */}
                <div className="admin-guide-card">
                  <div className="admin-guide-card-type">03 · PRACTICE &amp; CHAMBERS DESK</div>
                  <div className="admin-guide-card-dim">1200 × 800 px</div>
                  <div className="admin-guide-card-ratio">Aspect Ratio 3:2 · Horizontal Landscape</div>
                  <p className="admin-guide-card-desc">
                    Used across Practice Consultation, Tax Bare Acts Library, Financial Advisory Desk, and Pan-India NRI Gateway. Professional workspace or library visuals.
                  </p>
                </div>
              </div>

              <div className="admin-autofit-note">
                <strong>✦ Smart Auto-Fit Guarantee:</strong> You never need graphic design software to manually crop images. If you upload an image with a non-standard size (such as a smartphone photo, 1:1 square, or ultra-wide panorama), our intelligent responsive CSS engine dynamically anchors the focal point and crops it cleanly with <code>object-fit: cover</code> — completely preventing distortion, stretching, or broken page layouts across all mobile, tablet, and desktop screens.
              </div>
            </div>

            <div className="admin-media-grid">
              {/* Image 1: Proprietor Portrait */}
              <div className="admin-media-card">
                <div className="admin-media-thumb thumb-portrait">
                  <Image
                    src={config.proprietorPhoto || '/images/ca-daksh-desai-executive.jpg'}
                    alt="Proprietor Portrait Preview"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                  {uploadingField === 'proprietorPhoto' && (
                    <div className="admin-media-overlay">Uploading...</div>
                  )}
                </div>
                <div className="admin-media-info">
                  <div className="admin-media-spec-row">
                    <span className="admin-spec-pill">📐 Ideal: 800 × 1066 px (3:4)</span>
                    <span className="admin-autofit-pill">🛡️ Auto-Fit Protected</span>
                  </div>
                  <h3 className="admin-media-title">Proprietor Executive Portrait</h3>
                  <p className="admin-media-sub">Displayed on Homepage Stewardship, About Us, and Team page.</p>

                  <div className="admin-media-actions">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      style={{ display: 'none' }}
                      ref={(el) => { fileInputRefs.current['proprietorPhoto'] = el; }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('proprietorPhoto', file);
                      }}
                    />
                    <button
                      type="button"
                      className="admin-btn-upload"
                      onClick={() => fileInputRefs.current['proprietorPhoto']?.click()}
                    >
                      📁 Upload Photo
                    </button>
                    <button
                      type="button"
                      className="admin-btn-tiny"
                      onClick={() => handleFieldChange('proprietorPhoto', '/images/ca-daksh-desai-executive.jpg')}
                      title="Reset to default executive portrait"
                    >
                      Reset Default
                    </button>
                  </div>

                  {uploadFeedback['proprietorPhoto'] && (
                    <div style={{ fontSize: '0.74rem', color: '#15803D', fontWeight: 600 }}>
                      {uploadFeedback['proprietorPhoto']}
                    </div>
                  )}

                  <input
                    type="text"
                    className="admin-input-url"
                    value={config.proprietorPhoto}
                    onChange={(e) => handleFieldChange('proprietorPhoto', e.target.value)}
                    placeholder="or paste custom Image URL"
                  />
                </div>
              </div>

              {/* Image 2: Hero Consulting */}
              <div className="admin-media-card">
                <div className="admin-media-thumb thumb-landscape">
                  <Image
                    src={config.heroConsultingImage || '/images/ca-consulting.jpg'}
                    alt="Hero Consultation Preview"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {uploadingField === 'heroConsultingImage' && (
                    <div className="admin-media-overlay">Uploading...</div>
                  )}
                </div>
                <div className="admin-media-info">
                  <div className="admin-media-spec-row">
                    <span className="admin-spec-pill">📐 Ideal: 1200 × 800 px (3:2)</span>
                    <span className="admin-autofit-pill">🛡️ Auto-Fit Protected</span>
                  </div>
                  <h3 className="admin-media-title">Practice Consultation Photo</h3>
                  <p className="admin-media-sub">Professional chartered accountancy workspace visual.</p>

                  <div className="admin-media-actions">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      style={{ display: 'none' }}
                      ref={(el) => { fileInputRefs.current['heroConsultingImage'] = el; }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('heroConsultingImage', file);
                      }}
                    />
                    <button
                      type="button"
                      className="admin-btn-upload"
                      onClick={() => fileInputRefs.current['heroConsultingImage']?.click()}
                    >
                      📁 Upload Photo
                    </button>
                    <button
                      type="button"
                      className="admin-btn-tiny"
                      onClick={() => handleFieldChange('heroConsultingImage', '/images/ca-consulting.jpg')}
                    >
                      Reset Default
                    </button>
                  </div>

                  {uploadFeedback['heroConsultingImage'] && (
                    <div style={{ fontSize: '0.74rem', color: '#15803D', fontWeight: 600 }}>
                      {uploadFeedback['heroConsultingImage']}
                    </div>
                  )}

                  <input
                    type="text"
                    className="admin-input-url"
                    value={config.heroConsultingImage}
                    onChange={(e) => handleFieldChange('heroConsultingImage', e.target.value)}
                    placeholder="or paste custom Image URL"
                  />
                </div>
              </div>

              {/* Image 3: Tax Books */}
              <div className="admin-media-card">
                <div className="admin-media-thumb thumb-landscape">
                  <Image
                    src={config.heroTaxBooksImage || '/images/tax-law-books.jpg'}
                    alt="Tax Books Preview"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {uploadingField === 'heroTaxBooksImage' && (
                    <div className="admin-media-overlay">Uploading...</div>
                  )}
                </div>
                <div className="admin-media-info">
                  <div className="admin-media-spec-row">
                    <span className="admin-spec-pill">📐 Ideal: 1200 × 800 px (3:2)</span>
                    <span className="admin-autofit-pill">🛡️ Auto-Fit Protected</span>
                  </div>
                  <h3 className="admin-media-title">Statutory Bare Acts &amp; Tax Law Library</h3>
                  <p className="admin-media-sub">Direct Tax Bare Acts and Indian jurisprudence library photo.</p>

                  <div className="admin-media-actions">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      style={{ display: 'none' }}
                      ref={(el) => { fileInputRefs.current['heroTaxBooksImage'] = el; }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('heroTaxBooksImage', file);
                      }}
                    />
                    <button
                      type="button"
                      className="admin-btn-upload"
                      onClick={() => fileInputRefs.current['heroTaxBooksImage']?.click()}
                    >
                      📁 Upload Photo
                    </button>
                    <button
                      type="button"
                      className="admin-btn-tiny"
                      onClick={() => handleFieldChange('heroTaxBooksImage', '/images/tax-law-books.jpg')}
                    >
                      Reset Default
                    </button>
                  </div>

                  {uploadFeedback['heroTaxBooksImage'] && (
                    <div style={{ fontSize: '0.74rem', color: '#15803D', fontWeight: 600 }}>
                      {uploadFeedback['heroTaxBooksImage']}
                    </div>
                  )}

                  <input
                    type="text"
                    className="admin-input-url"
                    value={config.heroTaxBooksImage}
                    onChange={(e) => handleFieldChange('heroTaxBooksImage', e.target.value)}
                    placeholder="or paste custom Image URL"
                  />
                </div>
              </div>

              {/* Image 4: Finance Desk */}
              <div className="admin-media-card">
                <div className="admin-media-thumb thumb-landscape">
                  <Image
                    src={config.heroFinanceDeskImage || '/images/finance-desk.jpg'}
                    alt="Finance Desk Preview"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {uploadingField === 'heroFinanceDeskImage' && (
                    <div className="admin-media-overlay">Uploading...</div>
                  )}
                </div>
                <div className="admin-media-info">
                  <div className="admin-media-spec-row">
                    <span className="admin-spec-pill">📐 Ideal: 1200 × 800 px (3:2)</span>
                    <span className="admin-autofit-pill">🛡️ Auto-Fit Protected</span>
                  </div>
                  <h3 className="admin-media-title">Financial Analysis &amp; Advisory Desk</h3>
                  <p className="admin-media-sub">Financial statements and accounting ledger desk photo.</p>

                  <div className="admin-media-actions">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      style={{ display: 'none' }}
                      ref={(el) => { fileInputRefs.current['heroFinanceDeskImage'] = el; }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('heroFinanceDeskImage', file);
                      }}
                    />
                    <button
                      type="button"
                      className="admin-btn-upload"
                      onClick={() => fileInputRefs.current['heroFinanceDeskImage']?.click()}
                    >
                      📁 Upload Photo
                    </button>
                    <button
                      type="button"
                      className="admin-btn-tiny"
                      onClick={() => handleFieldChange('heroFinanceDeskImage', '/images/finance-desk.jpg')}
                    >
                      Reset Default
                    </button>
                  </div>

                  {uploadFeedback['heroFinanceDeskImage'] && (
                    <div style={{ fontSize: '0.74rem', color: '#15803D', fontWeight: 600 }}>
                      {uploadFeedback['heroFinanceDeskImage']}
                    </div>
                  )}

                  <input
                    type="text"
                    className="admin-input-url"
                    value={config.heroFinanceDeskImage}
                    onChange={(e) => handleFieldChange('heroFinanceDeskImage', e.target.value)}
                    placeholder="or paste custom Image URL"
                  />
                </div>
              </div>

              {/* Image 5: Hero Backdrop */}
              <div className="admin-media-card">
                <div className="admin-media-thumb thumb-wide">
                  <Image
                    src={config.heroBackdropImage || '/images/hero-bg.jpg'}
                    alt="Hero Backdrop Preview"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {uploadingField === 'heroBackdropImage' && (
                    <div className="admin-media-overlay">Uploading...</div>
                  )}
                </div>
                <div className="admin-media-info">
                  <div className="admin-media-spec-row">
                    <span className="admin-spec-pill">📐 Ideal: 1920 × 1080 px (16:9)</span>
                    <span className="admin-autofit-pill">🛡️ Auto-Fit Protected</span>
                  </div>
                  <h3 className="admin-media-title">Architectural Ambient Hero Background</h3>
                  <p className="admin-media-sub">Ambient architectural light pattern for the main hero section.</p>

                  <div className="admin-media-actions">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      style={{ display: 'none' }}
                      ref={(el) => { fileInputRefs.current['heroBackdropImage'] = el; }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('heroBackdropImage', file);
                      }}
                    />
                    <button
                      type="button"
                      className="admin-btn-upload"
                      onClick={() => fileInputRefs.current['heroBackdropImage']?.click()}
                    >
                      📁 Upload Photo
                    </button>
                    <button
                      type="button"
                      className="admin-btn-tiny"
                      onClick={() => handleFieldChange('heroBackdropImage', '/images/hero-bg.jpg')}
                    >
                      Reset Default
                    </button>
                  </div>

                  {uploadFeedback['heroBackdropImage'] && (
                    <div style={{ fontSize: '0.74rem', color: '#15803D', fontWeight: 600 }}>
                      {uploadFeedback['heroBackdropImage']}
                    </div>
                  )}

                  <input
                    type="text"
                    className="admin-input-url"
                    value={config.heroBackdropImage}
                    onChange={(e) => handleFieldChange('heroBackdropImage', e.target.value)}
                    placeholder="or paste custom Image URL"
                  />
                </div>
              </div>

              {/* Image 6: Pan-India Advisory */}
              <div className="admin-media-card">
                <div className="admin-media-thumb thumb-landscape">
                  <Image
                    src={config.aboutPanIndiaImage || '/images/india-map-advisory.jpg'}
                    alt="Pan-India Advisory Preview"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  {uploadingField === 'aboutPanIndiaImage' && (
                    <div className="admin-media-overlay">Uploading...</div>
                  )}
                </div>
                <div className="admin-media-info">
                  <div className="admin-media-spec-row">
                    <span className="admin-spec-pill">📐 Ideal: 1200 × 800 px (3:2)</span>
                    <span className="admin-autofit-pill">🛡️ Auto-Fit Protected</span>
                  </div>
                  <h3 className="admin-media-title">Pan-India Regulatory Reach Visual</h3>
                  <p className="admin-media-sub">Advisory presence graphic across corporate corridors in India.</p>

                  <div className="admin-media-actions">
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      style={{ display: 'none' }}
                      ref={(el) => { fileInputRefs.current['aboutPanIndiaImage'] = el; }}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload('aboutPanIndiaImage', file);
                      }}
                    />
                    <button
                      type="button"
                      className="admin-btn-upload"
                      onClick={() => fileInputRefs.current['aboutPanIndiaImage']?.click()}
                    >
                      📁 Upload Photo
                    </button>
                    <button
                      type="button"
                      className="admin-btn-tiny"
                      onClick={() => handleFieldChange('aboutPanIndiaImage', '/images/india-map-advisory.jpg')}
                    >
                      Reset Default
                    </button>
                  </div>

                  {uploadFeedback['aboutPanIndiaImage'] && (
                    <div style={{ fontSize: '0.74rem', color: '#15803D', fontWeight: 600 }}>
                      {uploadFeedback['aboutPanIndiaImage']}
                    </div>
                  )}

                  <input
                    type="text"
                    className="admin-input-url"
                    value={config.aboutPanIndiaImage}
                    onChange={(e) => handleFieldChange('aboutPanIndiaImage', e.target.value)}
                    placeholder="or paste custom Image URL"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 5: NEWSLETTER & STATUTORY BROADCAST
            ========================================================================= */}
        {activeTab === 'newsletter' && (
          <div className="admin-section-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">Practice Technical Bulletin &amp; Circular Broadcaster</h2>
                <p className="admin-card-desc">
                  Compose and dispatch compliance alerts, Income Tax / GST due date reminders, and technical circulars to confirmed subscribers. Compliant with ICAI Code of Ethics and includes a 1-click unsubscribe protocol.
                </p>
              </div>
              <div className="admin-metrics-row">
                <div className="admin-metric-pill">
                  <span className="metric-val">{activeCount}</span>
                  <span className="metric-lbl">Active Subscribers</span>
                </div>
                <div className="admin-metric-pill">
                  <span className="metric-val">{totalSubscribers}</span>
                  <span className="metric-lbl">Total Enrolled</span>
                </div>
              </div>
            </div>

            {/* Broadcast Composer */}
            <div className="admin-broadcast-wrap">
              <h3 className="admin-subheading">Compose Technical Circular</h3>

              <div className="admin-form-grid">
                <div className="admin-field-box admin-col-span-2">
                  <label className="admin-field-label">Email Subject Line</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={broadcastSubject}
                    onChange={(e) => setBroadcastSubject(e.target.value)}
                  />
                </div>

                <div className="admin-field-box admin-col-span-2">
                  <label className="admin-field-label">Bulletin Heading (Displayed Inside the Email)</label>
                  <input
                    type="text"
                    className="admin-input"
                    value={broadcastHeading}
                    onChange={(e) => setBroadcastHeading(e.target.value)}
                  />
                </div>

                <div className="admin-field-box admin-col-span-2">
                  <label className="admin-field-label">Bulletin Content (Plain Text with Paragraph Breaks)</label>
                  <textarea
                    rows={8}
                    className="admin-textarea font-sans"
                    value={broadcastContent}
                    onChange={(e) => setBroadcastContent(e.target.value)}
                  />
                </div>
              </div>

              {broadcastStatusMsg && (
                <div
                  className={`admin-alert ${
                    sendingState === 'error' ? 'admin-alert-error' : 'admin-alert-success'
                  }`}
                  style={{ marginTop: '1rem' }}
                >
                  {broadcastStatusMsg}
                </div>
              )}

              <div className="admin-broadcast-actions">
                <button
                  type="button"
                  className="admin-btn-outline"
                  onClick={handleSendTestEmail}
                  disabled={sendingState === 'test_sending' || sendingState === 'broadcasting'}
                >
                  {sendingState === 'test_sending' ? 'Sending Preview...' : '📧 Send Test Email to Me'}
                </button>

                <button
                  type="button"
                  className="admin-btn-primary"
                  onClick={handleSendBroadcast}
                  disabled={sendingState === 'test_sending' || sendingState === 'broadcasting'}
                >
                  {sendingState === 'broadcasting' ? (
                    'Broadcasting Bulletin...'
                  ) : (
                    <>
                      <span>📢 Broadcast to All {activeCount} Subscribers</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Subscribers Table */}
            <div className="admin-subscribers-list-wrap">
              <div className="admin-table-header">
                <div>
                  <h3 className="admin-subheading" style={{ margin: 0 }}>
                    Confirmed Practice Subscribers ({filteredSubscribers.length})
                  </h3>
                </div>
                <div className="admin-table-controls">
                  <input
                    type="text"
                    placeholder="Search subscriber email..."
                    className="admin-search-input"
                    value={subscriberSearch}
                    onChange={(e) => setSubscriberSearch(e.target.value)}
                  />
                  <button type="button" onClick={handleDownloadSubscribersCsv} className="admin-btn-tiny-gold">
                    📥 Download CSV
                  </button>
                </div>
              </div>

              <div className="admin-table-frame">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Subscriber Email</th>
                      <th>Status</th>
                      <th>Consent Given</th>
                      <th>Subscribed Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubscribers.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="admin-table-empty">
                          No subscribers found matching your search.
                        </td>
                      </tr>
                    ) : (
                      filteredSubscribers.map((sub) => (
                        <tr key={sub.id}>
                          <td className="font-mono font-medium">{sub.email}</td>
                          <td>
                            <span
                              className={`status-pill ${
                                sub.status === 'active' ? 'status-active' : 'status-unsub'
                              }`}
                            >
                              {sub.status}
                            </span>
                          </td>
                          <td>
                            <span className="consent-badge">✓ DPDP Act 2023</span>
                          </td>
                          <td className="font-mono text-muted">
                            {new Date(sub.created_at).toLocaleDateString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 6: CONSULTATION ENQUIRIES
            ========================================================================= */}
        {activeTab === 'enquiries' && (
          <div className="admin-section-card">
            <div className="admin-card-header">
              <div>
                <h2 className="admin-card-title">Client Consultation Requests &amp; Enquiries</h2>
                <p className="admin-card-desc">
                  Incoming submissions directly from the website&apos;s /contact form. Real-time client records with DPDP Act consent and direct consultation reach-out actions.
                </p>
              </div>
              <div className="admin-table-controls">
                <input
                  type="text"
                  placeholder="Filter by name, email, phone..."
                  className="admin-search-input"
                  value={enquirySearch}
                  onChange={(e) => setEnquirySearch(e.target.value)}
                />
                <button type="button" onClick={handleDownloadEnquiriesCsv} className="admin-btn-tiny-gold">
                  📥 Export CSV
                </button>
              </div>
            </div>

            <div className="admin-table-frame">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date &amp; Time</th>
                    <th>Client Name</th>
                    <th>Contact Channels</th>
                    <th>Selected Scope</th>
                    <th>Client Brief / Message</th>
                    <th>Direct Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEnquiries.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="admin-table-empty">
                        {loadingEnquiries ? 'Loading client submissions...' : 'No consultation enquiries yet.'}
                      </td>
                    </tr>
                  ) : (
                    filteredEnquiries.map((enq) => {
                      const cleanPhone = (enq.phone || '').replace(/[^0-9]/g, '');
                      return (
                        <tr key={enq.id}>
                          <td className="font-mono text-muted" style={{ whiteSpace: 'nowrap' }}>
                            {new Date(enq.created_at).toLocaleString('en-IN', {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </td>
                          <td className="font-medium">{enq.name}</td>
                          <td>
                            <div className="table-contact-box">
                              <a href={`mailto:${enq.email}`} className="table-link">
                                {enq.email}
                              </a>
                              <a href={`tel:${enq.phone}`} className="table-link font-mono">
                                {enq.phone}
                              </a>
                            </div>
                          </td>
                          <td>
                            <div className="table-pills-wrap">
                              {enq.services && enq.services.length > 0 ? (
                                enq.services.map((srv, idx) => (
                                  <span key={idx} className="scope-pill-small">
                                    {srv}
                                  </span>
                                ))
                              ) : (
                                <span className="text-muted">—</span>
                              )}
                            </div>
                          </td>
                          <td>
                            <div className="table-message-box" title={enq.message || ''}>
                              {enq.message || 'No additional message provided.'}
                            </div>
                          </td>
                          <td>
                            <div className="table-actions-row">
                              <a
                                href={`https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
                                  enq.name
                                )}%2C%20thank%20you%20for%20reaching%20out%20to%20Daksh%20Desai%20%26%20Associates%2C%20Chartered%20Accountants.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="action-pill-whatsapp"
                                title="Chat on WhatsApp"
                              >
                                WhatsApp
                              </a>
                              <a
                                href={`mailto:${enq.email}?subject=Consultation%20Enquiry%20%C2%B7%20Daksh%20Desai%20%26%20Associates`}
                                className="action-pill-email"
                                title="Send Email"
                              >
                                Email
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 7: SECURITY & MASTER ACCESS
            ========================================================================= */}
        {activeTab === 'security' && (
          <div className="admin-section-card">
            <div className="admin-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h2 className="admin-card-title">Practice Security, Devices &amp; Access Control</h2>
                <p className="admin-card-desc">
                  Manage master administrative credentials, view authenticated devices logged into your console, and terminate unrecognized sessions.
                </p>
              </div>
              <div className="admin-devices-count-pill">
                <span className="admin-device-dot">●</span>
                <span>{totalDevices} {totalDevices === 1 ? 'Device Currently Active' : 'Devices Currently Active'}</span>
              </div>
            </div>

            {/* Connected Devices Manager */}
            <div className="admin-devices-manager">
              <div className="admin-devices-top">
                <div>
                  <h3 className="admin-subheading">Connected Devices &amp; Active Browser Sessions</h3>
                  <p className="admin-subdesc">
                    Every computer or mobile phone logged into the administrative portal is assigned an authenticated session token. Review active devices below or disconnect any unfamiliar session.
                  </p>
                </div>
                {sessions.filter((s) => !s.isCurrent).length > 0 && (
                  <button
                    type="button"
                    onClick={handleTerminateAllOtherSessions}
                    className="admin-btn-kill-all"
                  >
                    <span>⚠️ Disconnect All Other Devices ({sessions.filter((s) => !s.isCurrent).length})</span>
                  </button>
                )}
              </div>

              {sessionActionMsg && (
                <div className="admin-alert admin-alert-success" style={{ margin: '1rem 0' }}>
                  {sessionActionMsg}
                </div>
              )}
              {sessionActionError && (
                <div className="admin-alert admin-alert-error" style={{ margin: '1rem 0' }}>
                  {sessionActionError}
                </div>
              )}

              {loadingSessions ? (
                <div style={{ padding: '1.5rem', textAlign: 'center', color: '#64748B', fontSize: '0.85rem' }}>
                  Refreshing active devices...
                </div>
              ) : (
                <div className="admin-devices-grid">
                  {sessions.length === 0 ? (
                    <div className="admin-device-card current">
                      <div className="admin-device-icon-col">
                        <span className="admin-device-icon">💻</span>
                      </div>
                      <div className="admin-device-details-col">
                        <div className="admin-device-title-row">
                          <span className="admin-device-label">Current Web Browser Session</span>
                          <span className="admin-device-badge-current">● Current Device</span>
                        </div>
                        <div className="admin-device-meta-row">
                          <span className="admin-meta-item">🌐 IP: <strong>Authorized Network</strong></span>
                          <span className="admin-meta-sep">•</span>
                          <span className="admin-meta-item">⏱️ Active now</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    sessions.map((sess) => (
                      <div key={sess.token} className={`admin-device-card ${sess.isCurrent ? 'current' : ''}`}>
                        <div className="admin-device-icon-col">
                          <span className="admin-device-icon">
                            {sess.deviceType === 'mobile' ? '📱' : sess.deviceType === 'tablet' ? '📟' : '💻'}
                          </span>
                        </div>
                        <div className="admin-device-details-col">
                          <div className="admin-device-title-row">
                            <span className="admin-device-label">{sess.deviceLabel}</span>
                            {sess.isCurrent ? (
                              <span className="admin-device-badge-current">● Current Device</span>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleTerminateSession(sess.token)}
                                className="admin-device-btn-disconnect"
                                title="Terminate session on this device"
                              >
                                Disconnect
                              </button>
                            )}
                          </div>
                          <div className="admin-device-meta-row">
                            <span className="admin-meta-item">🌐 IP: <strong>{sess.ip}</strong></span>
                            <span className="admin-meta-sep">•</span>
                            <span className="admin-meta-item">⏱️ {formatTimeAgo(sess.lastActiveAt)}</span>
                            <span className="admin-meta-sep">•</span>
                            <span className="admin-meta-item">📅 {new Date(sess.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            <div className="admin-security-grid">
              {/* Box 1: Registered Administrative Mailbox */}
              <div className="admin-security-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>🛡️</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0B1528' }}>
                      Registered Practice Mailbox
                    </h3>
                    <span style={{ fontSize: '0.74rem', color: '#64748B' }}>Primary Security Dispatch Channel</span>
                  </div>
                </div>

                <div className="admin-security-field">
                  <label className="admin-label">Authorized Verification Email</label>
                  <div className="admin-email-display">
                    <span>dakshdesai0109@gmail.com</span>
                    <span className="admin-email-badge">✓ Active &amp; Verified</span>
                  </div>
                  <span className="admin-field-hint" style={{ marginTop: '0.5rem' }}>
                    All security verification OTP codes, passkey resets, and confidential circular confirmations are routed exclusively through this mailbox.
                  </span>
                </div>

                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1rem', marginTop: '1.25rem' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0B1528', marginBottom: '0.25rem' }}>
                    ✦ ICAI Statutory Registry Match
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', lineHeight: 1.5 }}>
                    Firm Registration: <strong>FRN {config.frn}</strong> · Principal Member: <strong>M. No. {config.memberNo}</strong><br />
                    Proprietor: <strong>{config.proprietorName}</strong>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem' }}>
                  <button
                    type="button"
                    onClick={handleRequestOtp}
                    disabled={isSendingOtp}
                    className="admin-btn-outline"
                    style={{ borderColor: '#0B1528', color: '#0B1528', width: '100%', justifyContent: 'center' }}
                  >
                    {isSendingOtp ? 'Dispatching Test OTP...' : '📨 Test Security OTP Dispatch to Mailbox'}
                  </button>
                  {otpNoticeMsg && (
                    <div style={{ fontSize: '0.76rem', color: '#15803D', fontWeight: 600, marginTop: '0.5rem', textAlign: 'center' }}>
                      {otpNoticeMsg}
                    </div>
                  )}
                </div>
              </div>

              {/* Box 2: Update Master Passkey */}
              <div className="admin-security-box highlight">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>🔑</span>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#0B1528' }}>
                      Update Master Passkey
                    </h3>
                    <span style={{ fontSize: '0.74rem', color: '#B45309', fontWeight: 600 }}>Set a custom password for your console</span>
                  </div>
                </div>

                <form onSubmit={handleChangePasskeyInDashboard}>
                  <div className="admin-security-field">
                    <label htmlFor="newPasskeyDash" className="admin-label">
                      New Security Passkey
                    </label>
                    <input
                      id="newPasskeyDash"
                      type="password"
                      className="admin-input"
                      placeholder="Enter new passkey (min 6 characters)"
                      value={newPasskeyInDash}
                      onChange={(e) => setNewPasskeyInDash(e.target.value)}
                    />
                  </div>

                  <div className="admin-security-field">
                    <label htmlFor="confirmPasskeyDash" className="admin-label">
                      Confirm New Passkey
                    </label>
                    <input
                      id="confirmPasskeyDash"
                      type="password"
                      className="admin-input"
                      placeholder="Re-type new passkey"
                      value={confirmPasskeyInDash}
                      onChange={(e) => setConfirmPasskeyInDash(e.target.value)}
                    />
                  </div>

                  {/* 2 Explicit Options Requested: Only change password vs Change & logout from all devices */}
                  <div className="admin-security-field">
                    <label className="admin-label">Device Session Security Option:</label>
                    <div className="admin-passkey-options-grid">
                      <label
                        className={`admin-passkey-radio-card ${!logoutAllDevicesOption ? 'selected' : ''}`}
                        onClick={() => setLogoutAllDevicesOption(false)}
                      >
                        <div className="radio-card-header">
                          <input
                            type="radio"
                            name="logoutDevicesOption"
                            checked={!logoutAllDevicesOption}
                            onChange={() => setLogoutAllDevicesOption(false)}
                          />
                          <span className="radio-card-title">Option 1: Only Change Passkey</span>
                        </div>
                        <p className="radio-card-desc">
                          Keep all currently logged-in computers and mobile phones signed in across your chambers.
                        </p>
                      </label>

                      <label
                        className={`admin-passkey-radio-card ${logoutAllDevicesOption ? 'selected' : ''}`}
                        onClick={() => setLogoutAllDevicesOption(true)}
                      >
                        <div className="radio-card-header">
                          <input
                            type="radio"
                            name="logoutDevicesOption"
                            checked={logoutAllDevicesOption}
                            onChange={() => setLogoutAllDevicesOption(true)}
                          />
                          <span className="radio-card-title">Option 2: Change Passkey &amp; Logout From All Devices</span>
                        </div>
                        <p className="radio-card-desc">
                          Immediately disconnect all other active devices. Only this current device will stay logged in.
                        </p>
                      </label>
                    </div>
                  </div>

                  {passkeyChangeError && (
                    <div className="admin-alert admin-alert-error" style={{ marginBottom: '1rem' }}>
                      {passkeyChangeError}
                    </div>
                  )}
                  {passkeyChangeSuccess && (
                    <div className="admin-alert admin-alert-success" style={{ marginBottom: '1rem' }}>
                      {passkeyChangeSuccess}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isChangingPasskey || !newPasskeyInDash}
                    className="admin-btn-primary"
                    style={{ width: '100%', marginTop: '0.75rem' }}
                  >
                    {isChangingPasskey
                      ? 'Updating Passkey...'
                      : logoutAllDevicesOption
                      ? '🔒 Change Passkey & Disconnect All Other Devices'
                      : '✓ Change Passkey (Keep Devices Logged In)'}
                  </button>
                </form>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(197, 160, 89, 0.3)' }}>
                  <div style={{ fontSize: '0.76rem', color: '#64748B', lineHeight: 1.5 }}>
                    <strong>Brute-Force Guard Active:</strong> 5 consecutive incorrect attempts will automatically freeze console access for 15 minutes unless unlocked via verified Email OTP.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Save Bar for Mobile / Scrolling convenience */}
      <div className={`admin-floating-save-bar ${isDirty ? 'visible' : ''}`}>
        <div className="save-bar-content">
          <span className="save-bar-alert">⚠️ You have unsaved changes.</span>
          <button
            type="button"
            onClick={handleSaveSettings}
            disabled={savingConfig}
            className="admin-btn-save"
          >
            {savingConfig ? 'Saving Changes...' : '✓ Save Website Changes Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

