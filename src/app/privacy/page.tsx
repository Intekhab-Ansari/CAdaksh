import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice | Daksh Desai & Associates · Chartered Accountants',
  description: 'Privacy notice under the Digital Personal Data Protection Act, 2023 for Daksh Desai & Associates, Chartered Accountants.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="about-page-hero" id="privacy-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>DATA PROTECTION &amp; STATUTORY PRIVACY</span>
          </div>

          <h1 className="about-hero-title">
            Digital personal data{' '}
            <span className="hero-serif-accent">protection notice.</span>
          </h1>

          <p className="about-hero-lede">
            Privacy disclosure and governance standards under the Digital Personal Data Protection Act, 2023 (DPDP Act) for Daksh Desai &amp; Associates.
          </p>
        </div>
      </section>

      <section className="section" id="privacy-content" style={{ background: '#F8FAFC', paddingBottom: '4.5rem' }}>
        <div className="container" style={{ maxWidth: '880px' }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: '0 12px 35px rgba(11, 21, 40, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', fontWeight: 750, margin: 0 }}>
                1. What Information We Collect
              </h2>
              <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--color-text-body)' }}>
                When you initiate communication via our practice enquiry channels, we collect your full name, email address, direct telephone / WhatsApp number, subject area of interest, and the factual summary of your statutory inquiry.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', fontWeight: 750, margin: 0 }}>
                2. Specified Statutory Purpose
              </h2>
              <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--color-text-body)' }}>
                Your data is collected strictly to evaluate and respond to the specific professional assignment or inquiry initiated by you. In accordance with the ICAI Code of Ethics and the DPDP Act 2023, data is never shared, marketed, sold, or disclosed to third-party commercial vendors.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', fontWeight: 750, margin: 0 }}>
                3. Data Retention Protocol
              </h2>
              <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--color-text-body)' }}>
                Enquiries that do not culminate in a formal professional engagement are securely purged after 90 days. For ongoing client engagements, work papers and audit records are retained strictly in compliance with ICAI document retention mandates and statutory limitation periods.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', fontWeight: 750, margin: 0 }}>
                4. Cookies &amp; Tracking Policy
              </h2>
              <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--color-text-body)' }}>
                This website maintains strict digital privacy. We do not deploy cross-site tracking cookies, behavioral advertising trackers, or external analytical profiling scripts. Only strictly necessary technical session cookies are utilized to preserve platform security and prevent form spam.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <h2 style={{ fontSize: '1.35rem', color: 'var(--color-primary-navy)', fontWeight: 750, margin: 0 }}>
                5. Your Statutory Rights &amp; Grievance Redressal
              </h2>
              <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--color-text-body)' }}>
                Under the Digital Personal Data Protection Act, 2023, you retain the right to access, rectify, or request erasure of your personal data, as well as the right to withdraw consent. For any data protection inquiries, you may write directly to our designated Data Fiduciary &amp; Grievance Officer:
              </p>
              <div style={{ background: '#F8FAFC', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '0.85rem 1.15rem', marginTop: '0.5rem', fontSize: '0.92rem' }}>
                <strong>Data Fiduciary:</strong> CA Daksh Desai, Proprietor (ICAI M. No. 648747)<br />
                <strong>Statutory Email:</strong>{' '}
                <a href="mailto:cadakshdesai@outlook.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }}>
                  cadakshdesai@outlook.com
                </a>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0, borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
              Last Updated: October 2026 · Daksh Desai &amp; Associates, Chartered Accountants
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
