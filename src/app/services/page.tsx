import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chartered Accountancy Practice Desks & Services in Mumbai | Daksh Desai & Associates',
  description:
    'Comprehensive Chartered Accountancy practice areas: Audit & Assurance, Direct Taxation & Scrutiny Defense, GST Governance, Corporate Law (MCA21), International Tax (FEMA 15CA/15CB), and Virtual CFO Advisory in Mumbai.',
  keywords: [
    'Chartered Accountant Services Mumbai',
    'Taxation Audit Accounting Services CA',
    'Statutory Practice Desks Mumbai Borivali',
    'GST and Direct Tax Advisory India',
    'Corporate Law and Compliance CA Mumbai',
  ],
  alternates: {
    canonical: 'https://dakshdesaiassociates.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* SERVICES HERO HEADER */}
      <section className="about-page-hero" id="services-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>STATUTORY PRACTICE DIRECTORY · MUMBAI CHAMBERS</span>
          </div>

          <h1 className="about-hero-title">
            Taxation, audit, assurance &amp;{' '}
            <span className="hero-gold-accent">strategic counsel.</span>
          </h1>

          <p className="about-hero-lede">
            A comprehensive suite of integrated Chartered Accountancy services designed for corporate enterprises, family offices, growth ventures, and professionals across Mumbai and pan-India. Direct partner-led execution under strict ICAI Code of Ethics.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">Assurance</span>
              <span className="about-pillar-lbl">COMPANIES ACT &amp; 44AB AUDITS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Direct Tax</span>
              <span className="about-pillar-lbl">CORPORATE ITR &amp; SCRUTINY</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Indirect Tax</span>
              <span className="about-pillar-lbl">GSTR 1/3B &amp; 2B ITC MATCHING</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Corporate Law</span>
              <span className="about-pillar-lbl">MCA21, FEMA &amp; VIRTUAL CFO</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE 6 SPECIALISED STATUTORY PRACTICE DESKS (LIGHT SOVEREIGN SECTION) */}
      <section className="section" id="core-practice-desks">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">✦ Practice Scope</span>
            <h2>Integrated Statutory &amp; Advisory Capabilities</h2>
            <p style={{ maxWidth: '680px', color: 'var(--color-text-body)', marginTop: '0.5rem' }}>
              Structured into specialized functional practice desks, each delivering technical mastery, regulatory rigor, and direct partner-level accountability.
            </p>
          </div>

          <div className="about-desks-grid">
            {/* Card 1: Audit & Assurance */}
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
                    Statutory audits under Companies Act 2013, Section 44AB Tax Audits, Internal Financial Controls (IFCoFR), physical stock verifications, and mandatory 18-digit UDIN certifications.
                  </p>
                </div>
                <Link href="/services/audit" className="about-desk-link">
                  <span>Explore Audit Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Direct Tax & Scrutiny */}
            <div className="about-desk-card has-media desk-tax">
              <div className="about-desk-media">
                <Image
                  src="/images/tax-law-books.jpg"
                  alt="Direct Taxation & Scrutiny Defense Desk"
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
                  <h3>Direct Taxation &amp; Scrutiny</h3>
                  <p>
                    Corporate &amp; individual ITR filing, AIS variance reconciliation, advance tax computational modeling, Section 148 notice response, and CIT(Appeals) faceless representation.
                  </p>
                </div>
                <Link href="/services/income-tax" className="about-desk-link">
                  <span>Explore Direct Tax Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: GST & Indirect Tax */}
            <div className="about-desk-card has-media desk-tax">
              <div className="about-desk-media">
                <Image
                  src="/images/finance-desk.jpg"
                  alt="GST & Indirect Taxation Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">INDIRECT TAX</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>GST &amp; Indirect Taxation</h3>
                  <p>
                    Monthly GSTR-1 &amp; 3B filing, automated GSTR-2B purchase ledger matching, Input Tax Credit (ITC) optimization, export refund processing, and departmental audit defense.
                  </p>
                </div>
                <Link href="/services/gst" className="about-desk-link">
                  <span>Explore GST Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 4: Corporate Law & ROC */}
            <div className="about-desk-card has-media desk-corp">
              <div className="about-desk-media">
                <Image
                  src="/images/corporate-law.jpg"
                  alt="Corporate Law & ROC Governance Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">MCA21 V3</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Corporate Law &amp; ROC</h3>
                  <p>
                    Private Limited &amp; LLP formation, annual ROC filings (Form AOC-4 Financials &amp; MGT-7 Return), Director DIR-3 KYC, share transfers, and statutory register maintenance.
                  </p>
                </div>
                <Link href="/services/corporate-law" className="about-desk-link">
                  <span>Explore Corporate Law Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 5: International Tax & FEMA */}
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
                  <h3>International Tax &amp; FEMA</h3>
                  <p>
                    Form 15CA/15CB remittance certifications, DTAA withholding tax treaty relief, RBI Foreign Liabilities and Assets (FLA) Return reporting, and NRI repatriation counsel.
                  </p>
                </div>
                <Link href="/services/international-tax" className="about-desk-link">
                  <span>Explore FEMA Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 6: Virtual CFO & Accounting */}
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
                  <h3>Virtual CFO &amp; Advisory</h3>
                  <p>
                    Strategic budgeting, 13-week cash flow modeling, executive board MIS dashboards, working capital review, bank loan CMA data, and Ind-AS accounting supervision.
                  </p>
                </div>
                <Link href="/services/cfo-advisory" className="about-desk-link">
                  <span>Explore CFO Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINED ENGAGEMENT WORKFLOW (DEEP SOVEREIGN NAVY — ALTERNATING THEME) */}
      <section className="section section-navy" id="engagement-methodology">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: '#F5D79E' }}>✦ Quality Protocol</span>
            <h2 style={{ color: '#FFFFFF' }}>Disciplined Assignment Execution</h2>
            <p style={{ maxWidth: '640px', color: '#CBD5E1', marginTop: '0.5rem' }}>
              Every statutory engagement follows a verifiable quality assurance protocol, ensuring absolute technical accuracy, timely filings, and compliance with ICAI standards.
            </p>
          </div>

          <div className="about-steps-grid">
            <div className="about-step-card">
              <div className="about-step-num">01</div>
              <h4>Preliminary Discovery</h4>
              <p>
                Comprehensive review of entity constitution, past return history, active departmental notices, and immediate statutory timelines.
              </p>
            </div>

            <div className="about-step-card">
              <div className="about-step-num">02</div>
              <h4>Mandate &amp; Scope Formalization</h4>
              <p>
                Execution of formal engagement terms compliant with ICAI Council regulations with clearly specified deliverables and milestones.
              </p>
            </div>

            <div className="about-step-card">
              <div className="about-step-num">03</div>
              <h4>Dual-Layer Technical Verification</h4>
              <p>
                Computational reconciliation, statutory Bare Act cross-referencing, case law analysis, and direct partner verification.
              </p>
            </div>

            <div className="about-step-card">
              <div className="about-step-num">04</div>
              <h4>UDIN &amp; Portal Submission</h4>
              <p>
                Attestation with verifiable 18-digit ICAI UDIN, timely government portal filing, and delivery of archived statutory dossiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIGNIFIED CONSULTATION CTA BANNER */}
      <section className="section" id="services-cta" style={{ paddingTop: '2.5rem', paddingBottom: '4.5rem' }}>
        <div className="container">
          <div className="section-cta-sovereign" style={{ borderRadius: '26px', padding: '4.5rem 2rem' }}>
            <div className="cta-sovereign-inner">
              <div className="cta-sovereign-badge">
                <span>✦</span> PRACTICE CONSULTATION
              </div>
              <h2 className="cta-sovereign-title">
                Schedule a Consultation with CA Daksh Desai
              </h2>
              <p className="cta-sovereign-desc">
                Discuss your company&apos;s taxation, statutory audit, accounting outsourcing, or cross-border remittance requirements directly with the proprietor.
              </p>
              <div className="cta-sovereign-actions">
                <Link className="btn btn-gold btn-lg" href="/contact">
                  Consult Practice Office <span className="btn-arrow-gold">→</span>
                </Link>
              </div>
              <div className="cta-reassurance">
                <span>✦ Partner-Led Direct Counsel</span>
                <span className="reassurance-dot">•</span>
                <span>✦ 100% Confidential under ICAI Code of Ethics</span>
                <span className="reassurance-dot">•</span>
                <span>✦ Mumbai Head Office</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
