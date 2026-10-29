import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Daksh Desai & Associates · Chartered Accountants',
  description: 'Official regulatory disclaimer under the Institute of Chartered Accountants of India (ICAI) guidelines. Daksh Desai & Associates, Mumbai.',
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="about-page-hero" id="disclaimer-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>STATUTORY COMPLIANCE &amp; ETHICS</span>
          </div>

          <h1 className="about-hero-title">
            Mandatory ICAI{' '}
            <span className="hero-serif-accent">regulatory disclaimer.</span>
          </h1>

          <p className="about-hero-lede">
            Prescribed notice pursuant to the Chartered Accountants Act, 1949 and Council Guidelines governing professional websites.
          </p>
        </div>
      </section>

      <section className="section" id="disclaimer-content" style={{ background: '#F8FAFC', paddingBottom: '4.5rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: '0 12px 35px rgba(11, 21, 40, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              lineHeight: 1.7,
              color: 'var(--color-text-body)',
            }}
          >
            <p>
              Under the regulations of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are strictly prohibited from soliciting professional work or advertising their services. This digital portal is maintained solely for the purpose of disseminating factual institutional information regarding <strong>Daksh Desai &amp; Associates</strong>, its constitution, and its professional practice scope, for individuals and entities who request such information of their own volition.
            </p>
            
            <p>
              By accessing and browsing this website, the user explicitly acknowledges that they are seeking information concerning the firm of their own independent accord and that there has been no commercial solicitation, advertisement, personal communication, invitation, or inducement of any sort whatsoever from the firm or its proprietor.
            </p>
            
            <p>
              The content published on this website constitutes general statutory information and does not constitute formal legal, accounting, tax, or audit counsel. Indian tax jurisprudence and regulatory filing procedures are subject to frequent statutory amendments; visitors should consult our practice office for specific legal evaluation of their circumstances. Viewing this website or transmitting an enquiry through its communication channels does not constitute or create a Chartered Accountant–client relationship.
            </p>
            
            <p style={{ margin: 0 }}>
              Daksh Desai &amp; Associates disclaims any liability for content hosted on third-party government portals or external websites hyperlinked from this platform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
