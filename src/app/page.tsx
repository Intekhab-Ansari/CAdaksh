import type { Metadata } from 'next';
import Link from 'next/link';
import TickerRibbon from '@/components/TickerRibbon';
import ComplianceCalendar from '@/components/ComplianceCalendar';
import HomeHeroClient from '@/components/HomeHeroClient';
import HomeStewardshipClient from '@/components/HomeStewardshipClient';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Chartered Accountants in Mumbai · Borivali West & Nariman Point | Daksh Desai & Associates',
  description:
    'Daksh Desai & Associates is an ICAI-registered Chartered Accountancy firm in Mumbai (FRN: 165505W). Direct partner-led counsel across Direct Tax, GST, Statutory Audit, Form 15CA/15CB, Company Formation, and Virtual CFO advisory.',
  keywords: [
    'Chartered Accountants in Mumbai',
    'Chartered Accountant Borivali West',
    'CA Nariman Point Mumbai',
    'Tax Consultant Mumbai',
    'Income Tax Return Filing Mumbai',
    'GST Consultant Mumbai',
    'Statutory Audit Firm Mumbai',
    'Tax Audit 44AB Mumbai',
    'Form 15CA 15CB CA Mumbai',
    'NRI Tax Advisory Mumbai',
    'Company Formation MCA Mumbai',
    'CA Daksh Desai',
    'FRN 165505W',
  ],
  alternates: {
    canonical: 'https://dakshdesaiassociates.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          HERO SECTION — BESPOKE SOVEREIGN 6-CARD SHOWCASE & IMAGES
          ========================================================================= */}
      <HomeHeroClient />

      {/* CONTINUOUS TICKER RIBBON */}
      <TickerRibbon />

      {/* BESPOKE SOVEREIGN PRACTICE STEWARDSHIP (EXCLUSIVE DAKSH DESAI & ASSOCIATES) */}
      <HomeStewardshipClient />

      {/* INTERACTIVE COMPLIANCE CALENDAR FEATURE */}
      <section className="section" id="statutory-calendar">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-red">✦ STATUTORY DEADLINE TRACKER</span>
            <h2 className="editorial-heading">
              Indian Statutory <span className="hero-gold-accent">Compliance Calendar</span>
            </h2>
            <p className="section-head-lede">
              A real-time monitor for businesses and professionals to track statutory filing deadlines under Income Tax, GST, MCA, and RBI/FEMA regulations.
            </p>
          </div>

          <ComplianceCalendar />
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section section-ice" id="approach">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-red">✦ PRACTICE PHILOSOPHY</span>
            <h2 className="editorial-heading">
              Our <span className="hero-gold-accent">approach</span>
            </h2>
            <p className="section-head-lede">
              A disciplined, partner-led standard for finance, taxation, statutory audit, and corporate governance.
            </p>
          </div>

          <div className="approach-grid">
            <div className="approach-card">
              <div className="approach-card-top-bar">
                <span className="approach-num">01</span>
                <div className="approach-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Direct CA Access</h3>
              <p className="approach-card-desc">
                You deal with CA Daksh Desai directly on your matters — no junior delegation or intermediate proxies. Rapid response with definitive statutory clarity.
              </p>
            </div>

            <div className="approach-card">
              <div className="approach-card-top-bar">
                <span className="approach-num">02</span>
                <div className="approach-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Absolute Confidentiality</h3>
              <p className="approach-card-desc">
                Your proprietary financial records, cap tables, and personal wealth disclosures remain protected under the stringent mandates of the ICAI Code of Ethics.
              </p>
            </div>

            <div className="approach-card">
              <div className="approach-card-top-bar">
                <span className="approach-num">03</span>
                <div className="approach-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Timely Compliance</h3>
              <p className="approach-card-desc">
                Structured statutory workflows to meet Income Tax, GST, MCA, and RBI deadlines comfortably in advance, eliminating last-minute rush and late interest.
              </p>
            </div>

            <div className="approach-card">
              <div className="approach-card-top-bar">
                <span className="approach-num">04</span>
                <div className="approach-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Proactive Advisory</h3>
              <p className="approach-card-desc">
                Pre-emptive tax and financial planning ahead of balance-sheet dates. Structuring transactions legally before year-end rather than reacting post-audit.
              </p>
            </div>

            <div className="approach-card">
              <div className="approach-card-top-bar">
                <span className="approach-num">05</span>
                <div className="approach-icon-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
              </div>
              <h3 className="approach-card-title">Fact-Specific Mechanics</h3>
              <p className="approach-card-desc">
                Counsel grounded in your exact commercial facts, operating contracts, and banking transaction mechanics, never boilerplate generic templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE (MIDNIGHT NAVY SECTION) */}
      <section className="section section-midnight" id="industries">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-accent">✦ PRACTICE SECTORS</span>
            <h2 className="editorial-heading-light">
              Industries we <span className="hero-gold-accent">serve</span>
            </h2>
            <p className="section-head-lede-light">
              We support businesses across sectors with taxation, compliance, audit and advisory services.
            </p>
          </div>

          <div className="sectors-matrix-grid">
            <div className="sector-matrix-card">
              <div className="sector-card-top">
                <span className="sector-code">01</span>
                <span className="sector-tag">INDUSTRIAL SECTOR</span>
              </div>
              <h3 className="sector-card-title">Manufacturing &amp; EPC</h3>
              <p className="sector-card-desc">Supply chain GST reconciliation, capital goods depreciation, inventory valuation under AS-2, and statutory stock audits for banking consortia.</p>
              <div className="sector-card-chips">
                <span>GST 2B Matching</span>
                <span>Section 44AB</span>
                <span>E-Way Bills</span>
              </div>
            </div>

            <div className="sector-matrix-card">
              <div className="sector-card-top">
                <span className="sector-code">02</span>
                <span className="sector-tag">REGULATED HEALTH</span>
              </div>
              <h3 className="sector-card-title">Pharma &amp; Healthcare</h3>
              <p className="sector-card-desc">R&amp;D expenditure deductions, GST inverted duty structure refund claims, doctor TDS under Section 194J, and clinical laboratory accounting.</p>
              <div className="sector-card-chips">
                <span>Inverted Duty Refunds</span>
                <span>194J TDS</span>
                <span>Batch Costing</span>
              </div>
            </div>

            <div className="sector-matrix-card">
              <div className="sector-card-top">
                <span className="sector-code">03</span>
                <span className="sector-tag">TECH &amp; DIGITAL</span>
              </div>
              <h3 className="sector-card-title">Software, SaaS &amp; IT Services</h3>
              <p className="sector-card-desc">Cross-border software export remittances, Form 15CA/15CB withholding attestations, Transfer Pricing documentation, and Letter of Undertaking (LUT) GST filing.</p>
              <div className="sector-card-chips">
                <span>15CA / 15CB</span>
                <span>Export LUT</span>
                <span>Transfer Pricing</span>
              </div>
            </div>

            <div className="sector-matrix-card">
              <div className="sector-card-top">
                <span className="sector-code">04</span>
                <span className="sector-tag">COMMERCIAL COMMERCE</span>
              </div>
              <h3 className="sector-card-title">Trading, Retail &amp; Distribution</h3>
              <p className="sector-card-desc">Turnover reconciliation between POS and GSTN, e-invoicing threshold compliance, Section 194Q purchase TDS, and multi-state inventory branch transfers.</p>
              <div className="sector-card-chips">
                <span>E-Invoicing</span>
                <span>Section 194Q</span>
                <span>Multi-State GST</span>
              </div>
            </div>

            <div className="sector-matrix-card">
              <div className="sector-card-top">
                <span className="sector-code">05</span>
                <span className="sector-tag">PROPERTY &amp; ASSETS</span>
              </div>
              <h3 className="sector-card-title">Real Estate, RERA &amp; Construction</h3>
              <p className="sector-card-desc">Joint Development Agreement (JDA) tax implications, percentage completion revenue recognition (AS-7 / Ind AS 115), and statutory RERA project audit certificates.</p>
              <div className="sector-card-chips">
                <span>RERA Audit</span>
                <span>JDA Tax Structuring</span>
                <span>Ind AS 115</span>
              </div>
            </div>

            <div className="sector-matrix-card">
              <div className="sector-card-top">
                <span className="sector-code">06</span>
                <span className="sector-tag">PRIVATE WEALTH</span>
              </div>
              <h3 className="sector-card-title">Family Offices, HNIs &amp; NRIs</h3>
              <p className="sector-card-desc">Capital gains computation on equity and property, repatriation under RBI LRS scheme, foreign asset reporting (Schedule FA), and private discretionary family trust taxation.</p>
              <div className="sector-card-chips">
                <span>FEMA Repatriation</span>
                <span>Schedule FA</span>
                <span>Family Trusts</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <span className="devnote devnote-dark">
              Sector competencies reflect our statutory practice scope. Industry references are illustrative of regulatory domains handled under ICAI guidelines.
            </span>
          </div>
        </div>
      </section>

      {/* READY TO CONNECT (LIGHT ARCHITECTURAL CONSULTATION SUITE) */}
      <section className="section section-cta-light" id="cta-connect">
        <div className="container">
          <div className="cta-light-card">
            <div className="cta-light-badge">
              <span>✦</span> PRACTICE CONSULTATION
            </div>
            <h2 className="cta-light-title">
              Schedule a Structured Practice <span className="hero-gold-accent">Consultation</span>
            </h2>
            <p className="cta-light-desc">
              Whether you require guidance on corporate tax filings, statutory audits under the Companies Act, cross-border remittances under FEMA, or routine compliance management, write to our Mumbai office.
            </p>
            <div className="cta-light-actions">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Consult Practice Office <span className="btn-arrow-gold">→</span>
              </Link>
              <Link className="btn btn-outline btn-lg" href="/services">
                Explore Practice Scope
              </Link>
            </div>
            <div className="cta-reassurance-light">
              <span>✦ Direct Consultation with CA Daksh Desai</span>
              <span className="reassurance-dot">•</span>
              <span>✦ 100% Confidential under ICAI Code of Ethics</span>
              <span className="reassurance-dot">•</span>
              <span>✦ Strict Adherence to Indian Statutory Guidelines</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
