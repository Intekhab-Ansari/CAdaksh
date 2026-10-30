import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Daksh Desai & Associates · Chartered Accountants',
  description: 'Daksh Desai & Associates is an ICAI-registered Chartered Accountancy practice in Mumbai (FRN: 165505W). Founded by CA Daksh Desai, ACA, delivering partner-led statutory counsel across direct tax, GST, audits, and corporate law.',
};

export default function AboutPage() {
  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="about-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>ICAI REGISTERED PRACTICE · FRN: 165505W</span>
          </div>

          <h1 className="about-hero-title">
            Navigating finance &amp; statutory compliance with{' '}
            <span className="hero-serif-accent">clarity &amp; confidence.</span>
          </h1>

          <p className="about-hero-lede">
            Daksh Desai &amp; Associates is an independent Chartered Accountancy practice established in 2026 in Mumbai. We provide disciplined, partner-led statutory counsel across corporate taxation, GST governance, statutory audits, and regulatory advisory for businesses, institutions, and individuals.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">165505W</span>
              <span className="about-pillar-lbl">ICAI FIRM REGISTRATION</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">648747</span>
              <span className="about-pillar-lbl">PROPRIETOR M. NO. · ACA</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Dual Chambers</span>
              <span className="about-pillar-lbl">BORIVALI &amp; NARIMAN POINT</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">18-Digit UDIN</span>
              <span className="about-pillar-lbl">STATUTORY ATTESTATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL FOUNDATION & HERITAGE */}
      <section className="section" id="the-firm">
        <div className="container about-heritage-grid">
          <div className="about-heritage-text">
            <span className="eyebrow">Founder &amp; Practice Leadership</span>
            <h2>Sovereign advisory led directly by CA Daksh Desai</h2>
            <p>
              Founded and led by <strong>CA Daksh Desai</strong>, <strong>Daksh Desai &amp; Associates</strong> was established in Mumbai with an uncompromising standard: to provide corporate enterprises, growth businesses, family offices, and professionals with disciplined, partner-led Chartered Accountancy counsel.
            </p>
            <p>
              In an environment of continuously evolving tax jurisprudence, faceless assessment frameworks, and stringent regulatory compliance, CA Daksh Desai ensures that every client engagement receives direct principal-level attention — completely eliminating proxy relays and junior delegation.
            </p>
            <p>
              Our practice is conducted in strict compliance with the Chartered Accountants Act, 1949, the ICAI Code of Ethics, and applicable quality control standards, ensuring our tax defense, audit attestations, and corporate filings carry undisputed statutory credibility.
            </p>

            <aside className="register-card" style={{ marginTop: '1.75rem', borderLeft: '3px solid var(--color-gold)' }} aria-label="Firm registration particulars">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.85rem' }}>
                Statutory Practice Registry
              </h3>
              <dl className="register-dl">
                <dt className="register-dt">Established</dt>
                <dd className="register-dd">2026</dd>
                
                <dt className="register-dt">ICAI FRN</dt>
                <dd className="register-dd">165505W</dd>

                <dt className="register-dt">Proprietor</dt>
                <dd className="register-dd">CA Daksh Desai, ACA, B.Com (M. No. 648747)</dd>

                <dt className="register-dt">Head Office</dt>
                <dd className="register-dd">501, Fly Edge, SV Road, Borivali West, Mumbai – 400092</dd>

                <dt className="register-dt">South Mumbai</dt>
                <dd className="register-dd">1004-05, Raheja Chambers, Nariman Point, Mumbai – 400021</dd>

                <dt className="register-dt">Direct Counsel</dt>
                <dd className="register-dd" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href="tel:+919819647471" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    +91 98196 47471
                  </a>
                  <a href="mailto:cadakshdesai@outlook.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    cadakshdesai@outlook.com
                  </a>
                  <a href="mailto:dakshdesai0109@gmail.com" style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    dakshdesai0109@gmail.com
                  </a>
                </dd>
              </dl>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                <a
                  href="https://www.linkedin.com/in/daksh-desai-787199204"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-small"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.8rem',
                    background: 'rgba(10, 102, 194, 0.08)',
                    borderColor: 'rgba(10, 102, 194, 0.3)',
                    color: '#0A66C2',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                    gap: '0.4rem',
                    padding: '0.35rem 0.8rem',
                    background: 'rgba(37, 211, 102, 0.08)',
                    borderColor: 'rgba(37, 211, 102, 0.3)',
                    color: '#128C7E',
                    fontSize: '0.74rem',
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
                    gap: '0.4rem',
                    padding: '0.35rem 0.8rem',
                    fontSize: '0.74rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>Chambers Location</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </aside>
          </div>

          <div className="about-heritage-visual">
            <div className="about-heritage-img-box">
              <Image
                src="/images/ca-daksh-desai-executive.jpg"
                alt="CA Daksh Desai, ACA, B.Com - Proprietor & Principal, Daksh Desai & Associates"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-heritage-img"
              />
              <div className="about-stamp-pill">
                <span aria-hidden="true">✦</span>
                <span>CA DAKSH DESAI · PROPRIETOR &amp; PRINCIPAL</span>
              </div>
              <div className="about-floating-caption">
                <strong>CA Daksh Desai, ACA, B.Com</strong>
                <span>Chartered Accountant · ICAI Membership No. 648747 · Direct Practice Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATIONAL ETHOS & VISION */}
      <section className="section about-vision-section" id="vision-ethos">
        <div className="container">
          <div className="about-quote-box">
            <blockquote>
              &ldquo;To be a dependable, long-term statutory partner to our clients through complete, ethical, and solution-focused professional counsel.&rdquo;
            </blockquote>
            <cite>— CA DAKSH DESAI · PROPRIETOR &amp; PRINCIPAL (ACA, B.COM)</cite>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Foundational Ethos</span>
            <h2>Core tenets governing our chambers</h2>
          </div>

          <div className="about-ethos-grid">
            <div className="about-ethos-card">
              <span className="about-ethos-num">01 / DIRECT ACCESS</span>
              <h3>Partner-Led Interaction</h3>
              <p>
                You deal directly with CA Daksh Desai on all engagements. We do not operate on proxy delegation or inexperienced intermediaries — ensuring immediate statutory clarity and rapid turnaround.
              </p>
            </div>

            <div className="about-ethos-card">
              <span className="about-ethos-num">02 / STATUTORY RIGOUR</span>
              <h3>Absolute Technical Precision</h3>
              <p>
                Every tax computation, audit observation, and departmental representation is strictly cross-referenced against Bare Acts, Supreme Court &amp; High Court precedents, and CBDT/CBIC notifications.
              </p>
            </div>

            <div className="about-ethos-card">
              <span className="about-ethos-num">03 / CONFIDENTIALITY</span>
              <h3>Professional Privilege &amp; DPDP</h3>
              <p>
                Proprietary financial statements, corporate cap tables, and personal wealth disclosures remain protected under statutory privilege and the Digital Personal Data Protection Act, 2023.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALISED STATUTORY PRACTICE DESKS */}
      <section className="section" id="practice-desks">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Practice Capabilities</span>
            <h2>Integrated statutory services under one roof</h2>
            <p style={{ maxWidth: '680px', color: 'var(--color-text-body)', marginTop: '0.5rem' }}>
              We provide multidisciplinary coverage across taxation, assurance, and corporate law, guaranteeing synchronized compliance across all regulatory authorities.
            </p>
          </div>

          <div className="about-desks-grid">
            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">DIRECT TAX</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Income Tax &amp; Scrutiny Defense</h3>
              <p>
                Filing complex ITRs, AIS/TIS variance reconciliation, Section 148 notice response, faceless assessment defense, and CIT(Appeals) submissions.
              </p>
              <Link href="/services/income-tax" className="about-desk-link">
                <span>Explore Tax Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">INDIRECT TAX</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Goods &amp; Services Tax (GST)</h3>
              <p>
                Monthly GSTR-1 &amp; 3B filing, automated GSTR-2B ITC matching, DRC-01 notice defense, inverted duty structure refunds, and departmental audit assistance.
              </p>
              <Link href="/services/gst" className="about-desk-link">
                <span>Explore GST Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">ASSURANCE</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Statutory &amp; Tax Audits</h3>
              <p>
                Audits under Section 139 of the Companies Act 2013, Tax Audits under Section 44AB, Internal Financial Controls (IFCoFR), and inventory physical audits.
              </p>
              <Link href="/services/audit" className="about-desk-link">
                <span>Explore Audit Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CORPORATE LAW</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>MCA21 &amp; Corporate Governance</h3>
              <p>
                Company &amp; LLP incorporation, annual ROC compliance (AOC-4 &amp; MGT-7), Director KYC, share allotments, and statutory register maintenance.
              </p>
              <Link href="/services/corporate-law" className="about-desk-link">
                <span>Explore Corporate Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CROSS-BORDER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>International Tax &amp; FEMA</h3>
              <p>
                Form 15CA and Form 15CB certifications, DTAA treaty relief, foreign outward remittances, RBI FLA return filing, and NRI property tax advisory.
              </p>
              <Link href="/services/international-tax" className="about-desk-link">
                <span>Explore FEMA Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">ADVISORY</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Virtual CFO &amp; MIS Modeling</h3>
              <p>
                Strategic budgeting, cash flow forecasting, financial statement preparation under AS/Ind-AS, bank loan syndication CMA data, and board MIS dashboards.
              </p>
              <Link href="/services/cfo-advisory" className="about-desk-link">
                <span>Explore CFO Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINED ENGAGEMENT WORKFLOW (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="how-we-work">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Disciplined Workflow</span>
            <h2>How we execute professional assignments</h2>
            <p style={{ maxWidth: '640px', color: 'var(--color-text-body)', marginTop: '0.5rem' }}>
              Every assignment follows a standardized, verifiable quality protocol designed to ensure 100% compliance with ICAI standards.
            </p>
          </div>

          <div className="about-steps-grid">
            <div className="about-step-card">
              <div className="about-step-num">01</div>
              <h4>Preliminary Discovery</h4>
              <p>
                Thorough analysis of entity constitution, past tax filings, ledger records, and active statutory obligations.
              </p>
            </div>

            <div className="about-step-card">
              <div className="about-step-num">02</div>
              <h4>Scope Definition</h4>
              <p>
                Formal engagement terms under ICAI Council guidelines with predefined statutory deliverables and transparent milestones.
              </p>
            </div>

            <div className="about-step-card">
              <div className="about-step-num">03</div>
              <h4>Dual-Layer Review</h4>
              <p>
                Rigorous reconciliation, computational modeling, legal precedent cross-referencing, and direct partner verification.
              </p>
            </div>

            <div className="about-step-card">
              <div className="about-step-num">04</div>
              <h4>UDIN &amp; Portal Filing</h4>
              <p>
                Authentication with a verifiable 18-digit UDIN, authoritative portal submission, and archived compliance dossier delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMBERS CONSULTATION CALL-TO-ACTION */}
      <section className="section" id="consult-chambers" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="about-cta-card">
            <h2>Schedule a consultation with our Mumbai practice</h2>
            <p>
              Visit our Head Office in Borivali West or South Mumbai Chambers at Nariman Point, or schedule a formal statutory consultation with CA Daksh Desai.
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
