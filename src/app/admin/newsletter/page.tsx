'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Subscriber {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  consent: boolean;
  created_at: string;
}

export default function AdminNewsletterPage() {
  const [passkey, setPasskey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');

  // Dashboard Data
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [activeCount, setActiveCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [loadingData, setLoadingData] = useState(false);

  // Broadcast Form
  const [subject, setSubject] = useState('Statutory Compliance Alert · Daksh Desai & Associates');
  const [heading, setHeading] = useState('Important Statutory & Tax Filing Deadlines');
  const [content, setContent] = useState(
`Dear Subscriber,

This technical circular provides timely notice of statutory compliance deadlines under the Income-tax Act, 1961, CGST Act, 2017, and the Companies Act, 2013.

1. GSTR-3B Monthly Return: Due on the 20th of this month for all regular registrants.
2. Advance Tax Installment: Applicable under Section 208/211 for corporate and non-corporate assessees.
3. TDS / TCS Tax Deposit: Due by the 7th for preceding month deductions.

Please review your ledger balances and statutory challans with your finance team to avoid late fees or interest under Section 234A/B/C.

For specific clarifications on statutory applicability, you may schedule a consultation with our Mumbai chambers.`
  );

  const [sendingState, setSendingState] = useState<'idle' | 'test_sending' | 'broadcasting' | 'done' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Load passkey from sessionStorage if previously entered
  useEffect(() => {
    const saved = sessionStorage.getItem('dda_admin_key');
    if (saved) {
      setPasskey(saved);
      verifyAndLoad(saved);
    }
  }, []);

  const verifyAndLoad = async (keyToVerify: string) => {
    setLoadingData(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin/newsletter/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passkey: keyToVerify }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      setIsAuthenticated(true);
      sessionStorage.setItem('dda_admin_key', keyToVerify);
      setSubscribers(data.subscribers || []);
      setActiveCount(data.activeCount || 0);
      setTotalCount(data.total || 0);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : 'Invalid Admin Passkey');
      setIsAuthenticated(false);
    } finally {
      setLoadingData(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkey.trim()) return;
    verifyAndLoad(passkey.trim());
  };

  const handleDownloadCsv = () => {
    if (subscribers.length === 0) return;
    const headers = 'ID,Email,Status,Consent,Subscribed At\n';
    const rows = subscribers
      .map(s => `"${s.id}","${s.email}","${s.status}","${s.consent}","${s.created_at}"`)
      .join('\n');

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `daksh_desai_subscribers_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSend = async (testOnly: boolean) => {
    if (!subject.trim() || !content.trim()) {
      alert('Please provide both Subject and Content.');
      return;
    }

    if (!testOnly) {
      const confirmBroadcast = window.confirm(
        `Are you sure you want to broadcast this statutory bulletin to all ${activeCount} active subscriber(s)?`
      );
      if (!confirmBroadcast) return;
    }

    setSendingState(testOnly ? 'test_sending' : 'broadcasting');
    setStatusMessage('');

    try {
      const res = await fetch('/api/admin/newsletter/broadcast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          passkey,
          subject,
          heading,
          content,
          testOnly,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Broadcast failed.');
      }

      setSendingState('done');
      setStatusMessage(data.message || (testOnly ? 'Test email delivered!' : 'Broadcast dispatched!'));
    } catch (err: unknown) {
      setSendingState('error');
      setStatusMessage(err instanceof Error ? err.message : 'Broadcast failed.');
    }
  };

  const filteredSubscribers = subscribers.filter(s =>
    s.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return (
      <main className="admin-login-screen">
        <div className="admin-login-card">
          <div className="login-crest">
            <span>✦</span>
          </div>
          <h1 className="login-title">Practice Broadcast Console</h1>
          <p className="login-sub">
            Daksh Desai &amp; Associates, Chartered Accountants · Restrictive Administrative Access
          </p>

          <form onSubmit={handleLogin} className="login-form">
            <label htmlFor="adminKey" className="login-label">Enter Admin Passkey</label>
            <input
              id="adminKey"
              type="password"
              value={passkey}
              onChange={(e) => setPasskey(e.target.value)}
              placeholder="Enter passkey (default: daksh2026)"
              className="login-input"
              autoFocus
            />

            {authError && <div className="login-error-alert">{authError}</div>}

            <button type="submit" disabled={loadingData} className="login-btn">
              {loadingData ? 'Verifying...' : 'Unlock Broadcast Console →'}
            </button>
          </form>

          <div className="login-note">
            Configured via <code>ADMIN_NEWSLETTER_KEY</code> in environment settings.
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-console-main">
      <div className="container">
        {/* Top Header */}
        <header className="console-header">
          <div>
            <div className="console-tag">✦ STATUTORY BROADCAST CONSOLE</div>
            <h1 className="console-title">Practice Newsletter &amp; Circular Manager</h1>
            <p className="console-sub">
              Daksh Desai &amp; Associates · Dispatching via <strong>dakshdesai0109@gmail.com</strong>
            </p>
          </div>
          <div className="console-top-actions">
            <button
              onClick={() => {
                sessionStorage.removeItem('dda_admin_key');
                setIsAuthenticated(false);
              }}
              className="btn-console-secondary"
            >
              Lock Console
            </button>
            <Link href="/" className="btn-console-home">
              View Website ↗
            </Link>
          </div>
        </header>

        {/* Metrics Row */}
        <section className="metrics-grid">
          <div className="metric-box">
            <span className="metric-label">ACTIVE SUBSCRIBERS</span>
            <div className="metric-number-highlight">{activeCount}</div>
            <span className="metric-caption">Opted-in pursuant to DPDP Act 2023</span>
          </div>

          <div className="metric-box">
            <span className="metric-label">TOTAL ALL-TIME REGISTRATIONS</span>
            <div className="metric-number">{totalCount}</div>
            <span className="metric-caption">Includes unsubscribed records</span>
          </div>

          <div className="metric-box">
            <span className="metric-label">AUTHORIZED PRACTICE SENDER</span>
            <div className="metric-email">dakshdesai0109@gmail.com</div>
            <span className="metric-caption">Google SMTP Transporter</span>
          </div>

          <div className="metric-box metric-box-cta">
            <span className="metric-label">DATA BACKUP</span>
            <button
              onClick={handleDownloadCsv}
              disabled={subscribers.length === 0}
              className="btn-download-csv"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Export CSV ({subscribers.length})</span>
            </button>
            <span className="metric-caption">Download full audit list</span>
          </div>
        </section>

        {/* Composer Section */}
        <div className="composer-card">
          <div className="composer-header">
            <div>
              <h2 className="composer-heading">Draft Statutory Circular / Update</h2>
              <p className="composer-sub">
                Circulate compliance alerts to subscribers. Every email includes practice credentials, FRN, and 1-click unsubscribe.
              </p>
            </div>
            <div className="composer-badge">
              <span>✦ ICAI Code Compliant</span>
            </div>
          </div>

          <div className="composer-form">
            <div className="composer-field">
              <label htmlFor="circSubject" className="field-label">Email Subject Line</label>
              <input
                id="circSubject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Statutory Due-Date Alert: Q3 Advance Tax & GSTR-3B Reminder"
                className="field-input"
              />
            </div>

            <div className="composer-field">
              <label htmlFor="circHeading" className="field-label">Bulletin Heading (Inside Email)</label>
              <input
                id="circHeading"
                type="text"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="e.g. Important Statutory & Tax Filing Deadlines"
                className="field-input"
              />
            </div>

            <div className="composer-field">
              <label htmlFor="circContent" className="field-label">Bulletin Content</label>
              <textarea
                id="circContent"
                rows={9}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="field-textarea"
                placeholder="Write your statutory update here..."
              />
            </div>

            {/* Status Alert */}
            {statusMessage && (
              <div className={`composer-alert ${sendingState === 'error' ? 'alert-error' : 'alert-success'}`}>
                {statusMessage}
              </div>
            )}

            {/* Actions Bar */}
            <div className="composer-actions-bar">
              <div className="actions-left">
                <button
                  type="button"
                  disabled={sendingState === 'test_sending' || sendingState === 'broadcasting'}
                  onClick={() => handleSend(true)}
                  className="btn-send-test"
                  title="Sends a test preview email only to dakshdesai0109@gmail.com"
                >
                  {sendingState === 'test_sending' ? (
                    'Sending Preview...'
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <span>Send Test Preview (to dakshdesai0109@gmail.com)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="actions-right">
                <button
                  type="button"
                  disabled={sendingState === 'test_sending' || sendingState === 'broadcasting' || activeCount === 0}
                  onClick={() => handleSend(false)}
                  className="btn-send-broadcast"
                >
                  {sendingState === 'broadcasting' ? (
                    'Broadcasting to Subscribers...'
                  ) : (
                    <>
                      <span>Broadcast to All {activeCount} Subscriber(s)</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribers Table */}
        <section className="subscribers-table-card">
          <div className="table-header-row">
            <div>
              <h3 className="table-heading">Active Subscribers Directory</h3>
              <p className="table-sub">Registered emails who consented to receive statutory practice circulars.</p>
            </div>
            <div className="table-search-box">
              <input
                type="text"
                placeholder="Search email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="table-search-input"
              />
            </div>
          </div>

          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Recipient Email</th>
                  <th>Status</th>
                  <th>Consent</th>
                  <th>Subscription Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscribers.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-6 text-slate-500">
                      {subscribers.length === 0
                        ? 'No subscribers registered yet. They will appear here when visitors subscribe on the site.'
                        : 'No subscribers match your search filter.'}
                    </td>
                  </tr>
                ) : (
                  filteredSubscribers.map((sub) => (
                    <tr key={sub.id}>
                      <td className="font-semibold text-slate-900">{sub.email}</td>
                      <td>
                        <span className={`status-pill ${sub.status === 'active' ? 'status-active' : 'status-unsub'}`}>
                          {sub.status === 'active' ? '● Active' : '○ Unsubscribed'}
                        </span>
                      </td>
                      <td>
                        <span className="consent-tag">✓ DPDP Consent</span>
                      </td>
                      <td className="text-slate-500 text-sm">
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
        </section>

        {/* Setup Guide Card */}
        <div className="admin-setup-guide">
          <h4>✦ Gmail SMTP Setup Instructions for CA Daksh:</h4>
          <p>
            To enable automated sending from <strong>dakshdesai0109@gmail.com</strong>, add these keys in your Hostinger Environment Variables (or <code>.env.local</code>):
          </p>
          <pre>
            {`GMAIL_USER=dakshdesai0109@gmail.com
GMAIL_APP_PASSWORD=your_16_digit_google_app_password
ADMIN_NEWSLETTER_KEY=daksh2026`}
          </pre>
          <p className="text-xs text-slate-500 mt-2">
            Generate your 16-character Google App Password: Go to <strong>Google Account → Security → 2-Step Verification → App passwords</strong> → Name it &quot;CA Website&quot; and paste the 16 characters.
          </p>
        </div>
      </div>
    </main>
  );
}
