'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const initialEmail = searchParams.get('email') || '';

  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to unsubscribe');
      }

      setStatus('success');
      setMessage(data.message || 'You have been successfully unsubscribed.');
    } catch (err: unknown) {
      setStatus('error');
      setMessage(err instanceof Error ? err.message : 'An error occurred.');
    }
  };

  return (
    <div className="unsubscribe-card">
      <div className="unsubscribe-crest">
        <span className="crest-dot">✦</span>
      </div>
      <h1 className="unsubscribe-title">Manage Subscription Preferences</h1>
      <p className="unsubscribe-sub">
        Daksh Desai &amp; Associates, Chartered Accountants respects your statutory data privacy under the Digital Personal Data Protection Act, 2023.
      </p>

      {status === 'success' ? (
        <div className="unsubscribe-success-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <h3>Unsubscribed Successfully</h3>
          <p>{message}</p>
          <div className="unsubscribe-nav-back">
            <Link href="/" className="btn-pill-small">Return to Practice Home</Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleUnsubscribe} className="unsubscribe-form">
          <label htmlFor="unsubEmail" className="unsub-label">Confirm Your Email Address</label>
          <input
            id="unsubEmail"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your-email@domain.com"
            className="unsub-input"
          />

          {status === 'error' && (
            <div className="unsub-error-alert">{message}</div>
          )}

          <div className="unsub-actions">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="unsub-submit-btn"
            >
              {status === 'loading' ? 'Processing...' : 'Unsubscribe from Updates'}
            </button>
            <Link href="/" className="unsub-cancel-link">Cancel &amp; Keep Subscribed</Link>
          </div>
        </form>
      )}

      <div className="unsubscribe-disclaimer">
        Pursuant to ICAI Code of Ethics, technical updates and statutory circulars are circulated only to opted-in recipients. Unsubscribing permanently removes your email from automatic bulletins.
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <main className="unsubscribe-main">
      <div className="container">
        <Suspense fallback={<div className="text-center p-8">Loading subscription preferences...</div>}>
          <UnsubscribeForm />
        </Suspense>
      </div>
    </main>
  );
}

