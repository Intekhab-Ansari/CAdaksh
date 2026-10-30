'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setMessage('Please check the consent box to confirm your request under the DPDP Act 2023.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent, honeypot }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to register subscription.');
      }

      setStatus('success');
      setMessage(data.message || 'Thank you for subscribing to statutory practice circulars.');
      setEmail('');
      setConsent(false);
    } catch (err: unknown) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'Unable to subscribe. Please try again.');
    }
  };

  return (
    <div className="newsletter-strip">
      <div className="newsletter-strip-inner">
        <div className="newsletter-strip-info">
          <div className="newsletter-badge">
            <span className="badge-star">✦</span>
            <span>STATUTORY COMPLIANCE &amp; TAX CIRCULARS</span>
          </div>
          <h3 className="newsletter-title">Subscribe to Official Practice Bulletins</h3>
          <p className="newsletter-desc">
            Receive technical notifications on Income Tax, GST, MCA21 annual filings, and RBI/FEMA filing due dates directly from our Mumbai practice chambers.
          </p>
        </div>

        <div className="newsletter-strip-form-wrap">
          {status === 'success' ? (
            <div className="newsletter-success-alert">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <div>
                <strong>Subscription Confirmed</strong>
                <p>{message}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
              {/* Hidden honeypot field for anti-bot protection */}
              <input
                type="text"
                name="organization_check"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="newsletter-input-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your professional email address"
                  className="newsletter-email-input"
                  aria-label="Email address for statutory bulletins"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="newsletter-submit-btn"
                >
                  {status === 'loading' ? (
                    'Subscribing...'
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <span className="btn-arrow" aria-hidden="true">→</span>
                    </>
                  )}
                </button>
              </div>

              {/* Mandatory DPDP Act 2023 Consent Checkbox */}
              <div className="newsletter-consent-wrap">
                <label className="newsletter-consent-label">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="newsletter-consent-checkbox"
                  />
                  <span>
                    I specifically request and consent to receive technical bulletins pursuant to ICAI Code of Ethics. View{' '}
                    <Link href="/privacy" className="newsletter-privacy-link">DPDP Privacy Notice</Link>.
                  </span>
                </label>
              </div>

              {status === 'error' && (
                <div className="newsletter-error-alert" role="alert">
                  {message}
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
