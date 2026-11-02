import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AboutHeroClient from '@/components/AboutHeroClient';

export const metadata: Metadata = {
  title: 'About the Practice & Firm Registry | Daksh Desai & Associates · Chartered Accountants',
  description:
    'Daksh Desai & Associates is an ICAI-registered Chartered Accountancy practice in Mumbai (FRN: 165505W). Founded by CA Daksh Desai, ACA, delivering partner-led statutory counsel across direct tax, GST, audits, and corporate law.',
  keywords: [
    'About Daksh Desai Associates',
    'ICAI Registered Firm 165505W',
    'Chartered Accountancy Firm Mumbai',
    'CA Daksh Desai Profile ACA BCom',
    'Sole Proprietorship CA Firm WIRC Mumbai',
  ],
  alternates: {
    canonical: 'https://dakshdesaiassociates.com/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroClient />




      {/* FOUNDATIONAL ETHOS & VISION (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy about-vision-section" id="vision-ethos">
        <div className="container">
          <div className="about-quote-box">
            <blockquote>
              &ldquo;To be a dependable, long-term statutory partner to our clients through complete, ethical, and solution-focused professional counsel.&rdquo;
            </blockquote>
            <cite>— CA DAKSH DESAI · PROPRIETOR &amp; PRINCIPAL (ACA, B.COM)</cite>
          </div>

          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: '#F5D79E' }}>✦ Foundational Ethos</span>
            <h2 style={{ color: '#FFFFFF' }}>Core tenets governing our chambers</h2>
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
            <div className="about-desk-card has-media desk-tax">
              <div className="about-desk-media">
                <Image
                  src="/images/tax-law-books.jpg"
                  alt="Income Tax & Scrutiny Defense Desk"
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
                  <h3>Income Tax &amp; Scrutiny Defense</h3>
                  <p>
                    ITR filing, AIS reconciliation, Section 148 notice response, and CIT(Appeals) defense.
                  </p>
                </div>
                <Link href="/services/income-tax" className="about-desk-link">
                  <span>Explore Tax Desk</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-tax">
              <div className="about-desk-media">
                <Image
                  src="/images/tax-law-books.jpg"
                  alt="Goods & Services Tax Desk"
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
                  <h3>Goods &amp; Services Tax (GST)</h3>
                  <p>
                    Monthly GSTR-1 &amp; 3B filing, 2B ITC matching, DRC-01 defense, and refund assistance.
                  </p>
                </div>
                <Link href="/services/gst" className="about-desk-link">
                  <span>Explore GST Desk</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-audit">
              <div className="about-desk-media">
                <Image
                  src="/images/audit-assurance.jpg"
                  alt="Statutory & Tax Audits Desk"
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
                  <h3>Statutory &amp; Tax Audits</h3>
                  <p>
                    Audits under Section 139 of Companies Act, Section 44AB Tax Audits, and IFCoFR controls.
                  </p>
                </div>
                <Link href="/services/audit" className="about-desk-link">
                  <span>Explore Audit Desk</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-corp">
              <div className="about-desk-media">
                <Image
                  src="/images/corporate-law.jpg"
                  alt="MCA21 & Corporate Governance Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">CORPORATE LAW</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>MCA21 &amp; Corporate Governance</h3>
                  <p>
                    Company &amp; LLP formation, annual ROC compliance (AOC-4/MGT-7), and Director KYC.
                  </p>
                </div>
                <Link href="/services/corporate-law" className="about-desk-link">
                  <span>Explore Corporate Desk</span>
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
                  <h3>International Tax &amp; FEMA</h3>
                  <p>
                    Form 15CA/15CB remittance certifications, DTAA treaty relief, and RBI FLA return filing.
                  </p>
                </div>
                <Link href="/services/international-tax" className="about-desk-link">
                  <span>Explore FEMA Desk</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-cfo">
              <div className="about-desk-media">
                <Image
                  src="/images/ca-consulting.jpg"
                  alt="Virtual CFO & MIS Modeling Desk"
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
                  <h3>Virtual CFO &amp; MIS Modeling</h3>
                  <p>
                    Cash flow forecasting, budgeting, board MIS dashboards, and bank loan CMA data.
                  </p>
                </div>
                <Link href="/services/cfo-advisory" className="about-desk-link">
                  <span>Explore CFO Desk</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINED ENGAGEMENT WORKFLOW (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="how-we-work">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: '#F5D79E' }}>✦ Disciplined Workflow</span>
            <h2 style={{ color: '#FFFFFF' }}>How we execute professional assignments</h2>
            <p style={{ maxWidth: '640px', color: '#CBD5E1', marginTop: '0.5rem' }}>
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
