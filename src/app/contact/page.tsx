import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Daksh Desai & Associates · Chartered Accountants',
  description: 'Reach out to Daksh Desai & Associates, Chartered Accountants in Mumbai for income tax, GST, audits, accounting, and corporate compliance.',
};

export default function ContactPage() {
  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="contact-hero" style={{ marginBottom: '2.5rem' }}>
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>CHAMBERS CONSULTATION &amp; PRACTICE OFFICES · MUMBAI</span>
          </div>

          <h1 className="about-hero-title">
            Let&apos;s simplify your taxation &amp;{' '}
            <span className="hero-serif-accent">statutory compliance.</span>
          </h1>

          <p className="about-hero-lede">
            Reach out regarding income tax, GST, statutory audits, corporate law, international remittances (15CA/15CB), or virtual CFO advisory. Direct partner counsel with CA Daksh Desai.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">Borivali West</span>
              <span className="about-pillar-lbl">REGISTERED HEAD OFFICE</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Nariman Point</span>
              <span className="about-pillar-lbl">SOUTH MUMBAI CHAMBERS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">+91 98196 47471</span>
              <span className="about-pillar-lbl">DIRECT TEL &amp; WHATSAPP</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Mon–Sat 10–7</span>
              <span className="about-pillar-lbl">OFFICE CONSULTATION HOURS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact-channels">
        <div className="container contact-grid">
          {/* Ways to Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <aside className="register-card" aria-label="Ways to connect">
              <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary-navy)' }}>
                Official Practice Channels
              </h3>
              <dl className="register-dl">
                <dt className="register-dt">Statutory Email</dt>
                <dd className="register-dd">
                  <a href="mailto:cadakshdesai@outlook.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    cadakshdesai@outlook.com
                  </a>
                </dd>

                <dt className="register-dt">Direct Counsel</dt>
                <dd className="register-dd">
                  <a href="mailto:dakshdesai0109@gmail.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    dakshdesai0109@gmail.com
                  </a>
                </dd>
                
                <dt className="register-dt">Call / WhatsApp</dt>
                <dd className="register-dd" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href="tel:+919819647471" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                    +91 98196 47471
                  </a>
                  <a
                    href="https://wa.me/919819647471"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-small"
                    style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem', textDecoration: 'none' }}
                  >
                    WhatsApp ↗
                  </a>
                </dd>
                
                <dt className="register-dt">Office Hours</dt>
                <dd className="register-dd">Mon – Sat: 10:00 AM – 7:00 PM IST</dd>
                
                <dt className="register-dt">LinkedIn</dt>
                <dd className="register-dd">
                  <a
                    href="https://www.linkedin.com/in/daksh-desai-787199204"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0A66C2', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                  >
                    <span>CA Daksh Desai</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </dd>

                <dt className="register-dt">ICAI Register</dt>
                <dd className="register-dd">FRN: 165505W · M. No. 648747</dd>
              </dl>
            </aside>

            {/* Practice Chambers Locations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="register-card" style={{ borderLeft: '3px solid var(--color-gold)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-gold-deep)' }}>
                    HEAD OFFICE · BORIVALI WEST
                  </span>
                  <a
                    href="https://maps.app.goo.gl/DvLMyXd3KrBS66vo9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    Google Maps ↗
                  </a>
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--color-text-body)' }}>
                  <strong>501, Fly Edge Building</strong>,<br />
                  SV Road, Above Tirumala Showroom,<br />
                  Borivali West, Mumbai – 400092, Maharashtra
                </p>
              </div>

              <div className="register-card" style={{ borderLeft: '3px solid var(--color-primary-navy)' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-primary-navy)', display: 'block', marginBottom: '0.45rem' }}>
                  SOUTH MUMBAI CHAMBERS · NARIMAN POINT
                </span>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--color-text-body)' }}>
                  <strong>1004-05, Raheja Chambers</strong>,<br />
                  Free Press Marg, Nariman Point,<br />
                  Mumbai – 400021, Maharashtra
                </p>
              </div>
            </div>

            <ul className="ruled-list">
              <li><strong>Strictly confidential</strong></li>
              <li><strong>Direct consultation with a Chartered Accountant</strong></li>
              <li><strong>Clear engagement terms</strong></li>
            </ul>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* HOW WE WORK (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="how-we-work-steps">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">How we work</span>
            <h2>From enquiry to action</h2>
          </div>

          <ol className="steps-grid steps-grid-3">
            <li className="step-card">
              <span className="step-number">Step 1</span>
              <strong className="step-title">Share your requirement</strong>
              <span className="step-desc">Tell us what you need: tax planning, GST, a return, an audit, an NRI matter or company compliance.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Assessment call</strong>
              <span className="step-desc">We identify deadlines, risk areas and the right course for your matter.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Action plan</strong>
              <span className="step-desc">You receive a clear plan with timelines and responsibilities for each task.</span>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
