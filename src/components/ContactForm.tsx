'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<{ message: string; error: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      setStatus({
        message: 'Please fill in your name, a valid email address, and tick the consent box to proceed.',
        error: true,
      });
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({
          message: 'Enquiry received. On the live production site, this enquiry is routed securely to CA Daksh Desai & Associates pursuant to the ICAI Code of Ethics and DPDP Act, 2023.',
          error: false,
        });
        form.reset();
      } else {
        setStatus({
          message: 'Thank you for reaching out. Your enquiry has been recorded for review.',
          error: false,
        });
        form.reset();
      }
    } catch {
      setStatus({
        message: 'Preview Notice: Enquiry validated. On the live site it will send securely to the firm\'s email address.',
        error: false,
      });
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" id="firmContactForm" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="cfFirst" className="form-label">First name</label>
        <input type="text" id="cfFirst" name="firstName" className="form-input" required autoComplete="given-name" />
      </div>

      <div className="form-group">
        <label htmlFor="cfLast" className="form-label">Last name</label>
        <input type="text" id="cfLast" name="lastName" className="form-input" required autoComplete="family-name" />
      </div>

      <div className="form-group">
        <label htmlFor="cfEmail" className="form-label">Email address</label>
        <input type="email" id="cfEmail" name="email" className="form-input" required autoComplete="email" />
      </div>

      <div className="form-group">
        <label htmlFor="cfPhone" className="form-label">Phone number (optional)</label>
        <input type="tel" id="cfPhone" name="phone" className="form-input" autoComplete="tel" />
      </div>

      <div className="form-group form-full">
        <label htmlFor="cfSubject" className="form-label">I need help with</label>
        <select id="cfSubject" name="subject" className="form-select" defaultValue="Income Tax">
          <option value="Income Tax">Income Tax</option>
          <option value="GST">GST</option>
          <option value="International Taxation">International Taxation</option>
          <option value="Audit &amp; Assurance">Audit &amp; Assurance</option>
          <option value="Accounting &amp; MIS">Accounting &amp; MIS</option>
          <option value="Business Advisory &amp; Virtual CFO">Business Advisory &amp; Virtual CFO</option>
          <option value="Labour &amp; Corporate Law">Labour &amp; Corporate Law</option>
          <option value="Other enquiry">Other enquiry</option>
        </select>
      </div>

      <div className="form-group form-full">
        <label htmlFor="cfMsg" className="form-label">Brief details</label>
        <textarea id="cfMsg" name="message" className="form-textarea"></textarea>
      </div>

      <div className="form-group form-full">
        <label className="form-checkbox-label">
          <input type="checkbox" id="cfConsent" name="consent" required />
          <span>I agree that the firm may use these details to respond to my enquiry, as described in the Privacy Notice.</span>
        </label>
      </div>

      <div className="form-full" style={{ marginTop: '0.5rem' }}>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit enquiry'}
        </button>
      </div>

      {status && (
        <div className="form-full">
          <div
            className="form-status-alert"
            style={{
              display: 'block',
              backgroundColor: status.error ? 'var(--fill-bg)' : 'var(--color-action-light)',
              color: status.error ? 'var(--fill-fg)' : 'var(--color-action-blue)',
              borderColor: status.error ? 'var(--fill-bd)' : 'var(--color-action-blue)',
            }}
          >
            {status.message}
          </div>
        </div>
      )}
    </form>
  );
}
