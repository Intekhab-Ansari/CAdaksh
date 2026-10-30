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
              borderRadius: '24px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              boxShadow: '0 20px 50px rgba(11, 21, 40, 0.06)',
            }}
          >
            <div
              className="proprietor-flex-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(2.5rem, 5vw, 4.5rem)',
                alignItems: 'flex-start',
              }}
            >
              {/* Photo Card with Gold Trim & Prominent Dimensions */}
              <div
                className="proprietor-photo-card"
                style={{
                  flex: '0 0 340px',
                  width: '340px',
                  maxWidth: '100%',
                }}
              >
                <div
                  className="proprietor-photo-wrapper"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '440px',
                    overflow: 'hidden',
                    background: '#0B1528',
                    borderRadius: '16px 16px 0 0',
                  }}
                >
                  <Image
                    src="/images/ca-daksh-desai-executive.jpg"
                    alt="CA Daksh Desai, ACA, B.Com - Proprietor & Principal, Daksh Desai & Associates"
                    width={400}
                    height={520}
                    priority
                    className="proprietor-photo-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  className="proprietor-photo-badge"
                  style={{
                    background: '#0B1528',
                    color: '#F5D79E',
                    padding: '0.75rem 1rem',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(197, 160, 89, 0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                    borderRadius: '0 0 16px 16px',
                  }}
                >
                  <span
                    className="badge-name"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 750,
                      letterSpacing: '0.08em',
                      color: '#FFF0BA',
                    }}
                  >
                    CA DAKSH DESAI
                  </span>
                  <span
                    className="badge-meta"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: '#C5A059',
                    }}
                  >
                    ACA (ICAI) · M. NO. 648747 · FRN 165505W
                  </span>
                </div>
              </div>

              {/* Bio & Credentials Details */}
              <div
                className="proprietor-details-col"
                style={{
                  flex: '1 1 420px',
                  minWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-navy)', margin: '0 0 0.4rem 0', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                    CA Daksh Desai
                  </h3>
                  <p style={{ fontWeight: 650, color: 'var(--color-gold-deep)', margin: 0, fontSize: '1.08rem' }}>
                    Proprietor &amp; Principal · Associate Chartered Accountant (ACA) · B.Com
                  </p>
                </div>

                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-body)', margin: 0, fontWeight: 500, maxWidth: '640px' }}>
                  Direct partner-led counsel across corporate taxation, statutory audits, GST compliance, and cross-border FEMA advisory.
                </p>

                <div
                  className="register-card"
                  style={{
                    padding: '1.6rem 2rem',
                    boxShadow: '0 8px 24px rgba(11, 21, 40, 0.04)',
                    maxWidth: '640px',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                  }}
                >
                  <dl
                    className="register-dl"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(120px, 150px) 1fr',
                      gap: '0.9rem 1.6rem',
                    }}
                  >
                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Qualification</dt>
                    <dd className="register-dd" style={{ fontWeight: 600, color: 'var(--color-primary-navy)', margin: 0 }}>Associate Chartered Accountant (ACA, ICAI) · B.Com</dd>

                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Registration</dt>
                    <dd className="register-dd" style={{ fontWeight: 600, color: 'var(--color-primary-navy)', margin: 0 }}>ICAI M. No. 648747 · Firm FRN: 165505W</dd>

                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Chambers</dt>
                    <dd className="register-dd" style={{ margin: 0 }}>Borivali West &amp; Nariman Point, Mumbai</dd>

                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Direct Contact</dt>
                    <dd className="register-dd" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
                      <a href="tel:+919819647471" style={{ color: 'var(--color-primary-navy)', fontWeight: 650, textDecoration: 'none' }}>
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
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
            <div className="about-desk-card has-media desk-tax">
              <div className="about-desk-media">
                <Image
                  src="/images/tax-law-books.jpg"
                  alt="Taxation & GST Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">DIRECT TAX</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Taxation &amp; GST Desk</h3>
                  <p>
                    ITR filings, AIS reconciliation, GSTR-1 &amp; 3B compliance, 2B ITC matching, and notice defense.
                  </p>
                </div>
                <Link href="/services/income-tax" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-audit">
              <div className="about-desk-media">
                <Image
                  src="/images/audit-assurance.jpg"
                  alt="Audit & Assurance Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">ASSURANCE</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Audit &amp; Assurance Desk</h3>
                  <p>
                    Statutory audits under Companies Act, Section 44AB Tax Audits, IFCoFR controls, and stock audits.
                  </p>
                </div>
                <Link href="/services/audit" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-corp">
              <div className="about-desk-media">
                <Image
                  src="/images/corporate-law.jpg"
                  alt="Corporate Law & ROC Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">MCA21</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Corporate Law &amp; ROC Desk</h3>
                  <p>
                    Company &amp; LLP formation, annual ROC filings (AOC-4/MGT-7), Director KYC, and statutory registers.
                  </p>
                </div>
                <Link href="/services/corporate-law" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-fema">
              <div className="about-desk-media">
                <Image
                  src="/images/international-tax.jpg"
                  alt="International Tax & FEMA Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">CROSS-BORDER</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>International Tax &amp; FEMA Desk</h3>
                  <p>
                    Form 15CA/15CB remittance certificates, DTAA withholding relief, RBI FLA returns, and NRI tax advisory.
                  </p>
                </div>
                <Link href="/services/international-tax" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-cfo">
              <div className="about-desk-media">
                <Image
                  src="/images/ca-consulting.jpg"
                  alt="Virtual CFO & Advisory Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">ADVISORY</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Virtual CFO &amp; Advisory Desk</h3>
                  <p>
                    Strategic budgeting, cash flow forecasting, MIS dashboard modeling, and bank CMA data preparation.
                  </p>
                </div>
                <Link href="/services/cfo-advisory" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-accounts">
              <div className="about-desk-media">
                <Image
                  src="/images/accounting-mis.jpg"
                  alt="Accounting & MIS Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">REPORTING</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Accounting &amp; MIS Desk</h3>
                  <p>
                    Bookkeeping on Tally, Zoho &amp; SAP, monthly ledger reconciliation, and Ind-AS financial statements.
                  </p>
                </div>
                <Link href="/services/accounting" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
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
