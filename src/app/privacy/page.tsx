import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Notice | Daksh Desai & Associates · Chartered Accountants',
  description: 'Privacy notice under the Digital Personal Data Protection Act, 2023 for Daksh Desai & Associates, Chartered Accountants.',
};

export default function PrivacyPage() {
  return (
    <section className="section" id="privacy-content">
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
        <span className="eyebrow">Legal</span>
        <h1>Privacy notice</h1>
        
        <span className="devnote">Draft notice for the contact form under the Digital Personal Data Protection Act, 2023. Have it reviewed before launch and match it to what the form and hosting actually do.</span>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>What we collect</h2>
          <p>When you use the contact form we collect your name, email address, phone number (if given) and your message.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>Why we use it</h2>
          <p>Only to respond to your enquiry and, if you engage us, to set up the engagement. We do not sell or share it for marketing.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>How long we keep it</h2>
          <p>Enquiries that do not lead to an engagement are deleted after 90 days.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>Cookies and analytics</h2>
          <p>This website does not deploy third-party analytics trackers, advertising pixels, or cross-site tracking cookies. Only strictly necessary technical session cookies are utilized to preserve security and form validation.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h2 style={{ fontSize: '1.4rem' }}>Your rights</h2>
          <p>
            Under the Digital Personal Data Protection Act, 2023 (DPDP Act), you may request access to, correction of, or erasure of your personal data, or withdraw consent at any time, by writing to{' '}
            <a href="mailto:cadakshdesai@outlook.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600 }}>cadakshdesai@outlook.com</a>. Grievance Officer: CA Daksh Desai, Proprietor.
          </p>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--ink-muted)', marginTop: '0.5rem' }}>Last updated: October 2026</p>
      </div>
    </section>
  );
}
