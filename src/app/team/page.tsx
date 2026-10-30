import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team & Leadership | Daksh Desai & Associates · Chartered Accountants',
  description: 'Meet the leadership and professionals at Daksh Desai & Associates, Chartered Accountants in Mumbai. Proprietor CA Daksh Desai, ACA, B.Com (M. No. 648747, FRN: 165505W) and specialized practice desks.',
};

export default function TeamPage() {
  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="team-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>LEADERSHIP &amp; STATUTORY DESKS · MUMBAI CHAMBERS</span>
          </div>

          <h1 className="about-hero-title">
            Leadership &amp; specialised{' '}
            <span className="hero-serif-accent">practice desks.</span>
          </h1>

          <p className="about-hero-lede">
            Daksh Desai &amp; Associates operates under disciplined, partner-led stewardship. Every statutory audit, assessment proceeding, and corporate advisory is directly supervised and executed by qualified Chartered Accountants with unwavering statutory rigour.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">CA Daksh Desai</span>
              <span className="about-pillar-lbl">PROPRIETOR &amp; PRINCIPAL</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">ACA, B.Com</span>
              <span className="about-pillar-lbl">PROFESSIONAL QUALIFICATIONS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">M. No. 648747</span>
              <span className="about-pillar-lbl">ICAI MEMBERSHIP NUMBER</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">FRN 165505W</span>
              <span className="about-pillar-lbl">FIRM REGISTRATION NUMBER</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROPRIETOR & PRINCIPAL SECTION */}
      <section className="section" id="proprietor-section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Practice Leadership</span>
            <h2>Principal &amp; Managing Proprietor</h2>
          </div>

          <div
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: '0 15px 40px rgba(11, 21, 40, 0.05)',
            }}
          >
            <div className="proprietor-grid">
              {/* Photo Box with Gold Trim */}
              <div
                style={{
                  position: 'relative',
                  width: '260px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '2px solid rgba(197, 160, 89, 0.45)',
                  boxShadow: '0 16px 36px rgba(11, 21, 40, 0.16)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/images/ca-daksh-desai-executive.jpg"
                  alt="CA Daksh Desai, ACA, B.Com - Proprietor & Principal, Daksh Desai & Associates"
                  width={260}
                  height={330}
                  priority
                  style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }}
                />
                <div
                  style={{
                    background: '#0B1528',
                    color: '#F5D79E',
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    padding: '0.45rem 0.6rem',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(197, 160, 89, 0.4)',
                  }}
                >
                  CA DAKSH DESAI · ACA · M. NO. 648747
                </div>
              </div>

              {/* Bio & Credentials Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary-navy)', margin: 0, fontWeight: 800 }}>
                    CA Daksh Desai
                  </h3>
                  <p style={{ fontWeight: 600, color: 'var(--color-gold-deep)', margin: '0.25rem 0 0', fontSize: '1rem' }}>
                    Proprietor &amp; Principal · Associate Chartered Accountant (ACA) · B.Com
                  </p>
                </div>

                <div className="register-card" style={{ boxShadow: 'var(--shadow-subtle)', maxWidth: '520px' }}>
                  <dl className="register-dl">
                    <dt className="register-dt">Qualification</dt>
                    <dd className="register-dd">Associate Chartered Accountant (ACA, ICAI)</dd>

                    <dt className="register-dt">Degree</dt>
                    <dd className="register-dd">Bachelor of Commerce (B.Com)</dd>

                    <dt className="register-dt">ICAI M. No.</dt>
                    <dd className="register-dd">648747</dd>

                    <dt className="register-dt">Firm FRN</dt>
                    <dd className="register-dd">165505W</dd>

                    <dt className="register-dt">Chambers</dt>
                    <dd className="register-dd">Borivali West &amp; Nariman Point, Mumbai</dd>

                    <dt className="register-dt">Direct Contact</dt>
                    <dd className="register-dd" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <a href="tel:+919819647471" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                        +91 98196 47471
                      </a>
                      <a href="mailto:cadakshdesai@outlook.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                        cadakshdesai@outlook.com
                      </a>
                      <a href="mailto:dakshdesai0109@gmail.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                        dakshdesai0109@gmail.com
                      </a>
                    </dd>
                  </dl>
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--color-text-body)', margin: 0 }}>
                  CA Daksh Desai personally oversees all professional engagements at the practice. With extensive technical mastery across the Income-tax Act 1961, CGST Act 2017, and Companies Act 2013, he delivers authoritative guidance in corporate tax structuring, faceless scrutiny proceedings before the Income Tax Department, statutory audits, and FEMA cross-border certifications (Form 15CA/15CB).
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  <a
                    href="https://www.linkedin.com/in/daksh-desai-787199204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-small"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 0.95rem',
                      background: 'rgba(10, 102, 194, 0.08)',
                      borderColor: 'rgba(10, 102, 194, 0.3)',
                      color: '#0A66C2',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://wa.me/919819647471?text=Hello%20CA%20Daksh%20Desai%2C%20I%20would%20like%20to%20enquire%20regarding%20statutory%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-small"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 0.95rem',
                      background: 'rgba(37, 211, 102, 0.08)',
                      borderColor: 'rgba(37, 211, 102, 0.3)',
                      color: '#128C7E',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <span>Direct WhatsApp</span>
                    <span aria-hidden="true">↗</span>
                  </a>

                  <a
                    href="https://maps.app.goo.gl/DvLMyXd3KrBS66vo9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-small"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      padding: '0.45rem 0.95rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span>Chambers Location</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALISED PRACTICE DESKS (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="specialised-desks">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Institutional Organization</span>
            <h2>Specialised Practice Desks</h2>
            <p style={{ maxWidth: '640px', color: 'var(--color-text-body)', marginTop: '0.5rem' }}>
              Our firm is structured into specialized functional practice desks, each dedicated to statutory precision and regulatory excellence.
            </p>
          </div>

          <div className="about-desks-grid">
            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">DIRECT TAX</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Taxation &amp; GST Desk</h3>
              <p>
                Income tax return filings, AIS variance resolution, GSTR-1 &amp; 3B compliance, 2B ITC matching, and departmental notice representation.
              </p>
              <Link href="/services/income-tax" className="about-desk-link">
                <span>View Practice Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">ASSURANCE</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Audit &amp; Assurance Desk</h3>
              <p>
                Statutory audits under Companies Act 2013, Tax Audits under Section 44AB, Internal Financial Controls (IFCoFR), and physical inventory audits.
              </p>
              <Link href="/services/audit" className="about-desk-link">
                <span>View Practice Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">MCA21</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Corporate Law &amp; ROC Desk</h3>
              <p>
                Company &amp; LLP formation, annual ROC filings (AOC-4 &amp; MGT-7), Director KYC, share transfers, and statutory register maintenance.
              </p>
              <Link href="/services/corporate-law" className="about-desk-link">
                <span>View Practice Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CROSS-BORDER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>International Tax &amp; FEMA Desk</h3>
              <p>
                Form 15CA/15CB certifications for foreign outward remittances, DTAA withholding tax relief, RBI FLA Return reporting, and NRI tax advisory.
              </p>
              <Link href="/services/international-tax" className="about-desk-link">
                <span>View Practice Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">ADVISORY</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Virtual CFO &amp; Advisory Desk</h3>
              <p>
                Strategic budgeting, cash flow forecasting, MIS dashboard modeling, working capital planning, and bank CMA data preparation.
              </p>
              <Link href="/services/cfo-advisory" className="about-desk-link">
                <span>View Practice Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">REPORTING</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Accounting &amp; MIS Desk</h3>
              <p>
                Full-stack bookkeeping on Tally, Zoho Books, and SAP, monthly ledger reconciliation, and preparation of financial statements under Indian AS.
              </p>
              <Link href="/services/accounting" className="about-desk-link">
                <span>View Practice Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMBERS CONSULTATION BANNER */}
      <section className="section" id="team-cta" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="about-cta-card">
            <h2>Schedule a consultation with CA Daksh Desai</h2>
            <p>
              Direct partner counsel available at our Borivali West Head Office or South Mumbai Chambers at Nariman Point.
            </p>
            <div className="about-cta-btns">
              <Link href="/contact" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A68037 100%)', color: '#0B1528', fontWeight: 700 }}>
                <span>Schedule Practice Consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://wa.me/919819647471?text=Hello%20CA%20Daksh%20Desai%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(197, 160, 89, 0.5)', color: '#FFFFFF' }}
              >
                <span>Direct WhatsApp: +91 98196 47471</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
