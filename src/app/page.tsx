import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TickerRibbon from '@/components/TickerRibbon';
import ComplianceCalendar from '@/components/ComplianceCalendar';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
  description: 'Taxation, audit, accounting and advisory services for businesses, professionals, and individuals in Mumbai.',
};

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          HERO SECTION — BESPOKE SOVEREIGN 6-CARD SHOWCASE & IMAGES
          ========================================================================= */}
      <section className="section hero-rsc" id="home-hero">
        {/* Architectural Ambient Hero Background */}
        <div className="hero-backdrop-container" aria-hidden="true">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            quality={92}
            className="hero-backdrop-img"
            sizes="100vw"
          />
          <div className="hero-backdrop-scrim" />
          <div className="hero-backdrop-glow" />
        </div>

        <div className="container hero-content-relative">
          <div className="hero-header-wrap">
            <div className="hero-eyebrow-seal">
              <span className="seal-dot">✦</span>
              CHARTERED ACCOUNTANTS · MUMBAI · ICAI REGISTERED PRACTICE
            </div>
            <h1 className="hero-main-title">
              <span className="text-reveal-mask">
                <span className="text-reveal-line">Taxation, Audit,</span>
              </span>
              <span className="text-reveal-mask">
                <span className="text-reveal-line">
                  Accounting &amp; <span className="hero-serif-accent">Advisory</span>
                </span>
              </span>
            </h1>
            <p className="hero-sublede">
              We provide comprehensive counsel across direct tax litigation, GST compliance, statutory audit, and corporate governance for enterprises, family offices, and professionals across India and abroad.
            </p>
            <div className="hero-btn-group">
              <Link className="btn btn-primary btn-lg" href="/services">
                Explore Practice Scope <span className="btn-arrow-gold">→</span>
              </Link>
              <Link className="btn btn-outline btn-lg" href="/contact">
                Consult Practice Office
              </Link>
            </div>

            {/* TRUST CREDENTIAL BADGES */}
            <div className="hero-trust-badges">
              <span className="trust-badge-item">
                <span className="badge-bullet">✦</span>
                ICAI Registered Practice
              </span>
              <span className="trust-badge-item">
                <span className="badge-bullet">✦</span>
                Direct Partner-Led Counsel
              </span>
              <span className="trust-badge-item">
                <span className="badge-bullet">✦</span>
                18-Digit UDIN Verified Reports
              </span>
              <span className="trust-badge-item">
                <span className="badge-bullet">✦</span>
                Mumbai Headquartered · Pan-India Scope
              </span>
            </div>
          </div>

          {/* 6-CARD SOVEREIGN SERVICES & IMAGES SHOWCASE */}
          <div className="rsc-hero-grid">
            {/* Card 1: Direct & Indirect Tax Compliances (Navy Card) */}
            <div className="rsc-navy-card">
              <div className="rsc-num-pill">01</div>
              <h3 className="rsc-service-title">Tax &amp; Compliance</h3>
              <p className="rsc-service-desc">
                End-to-end statutory compliance across Companies Act, Income Tax Act, GST, and allied business laws — keeping you on the right side of every regulation.
              </p>
              <ul className="rsc-service-list">
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/gst" style={{ color: 'inherit' }}>Goods &amp; Services Tax (GST) Returns &amp; 2B Matching</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/income-tax" style={{ color: 'inherit' }}>Corporate &amp; Individual Income Tax Filings (ITR 1–7)</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/income-tax" style={{ color: 'inherit' }}>TDS / TCS Compliance (Form 24Q, 26Q &amp; 27Q)</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/income-tax" style={{ color: 'inherit' }}>Professional Tax (PTEC &amp; PTRC Registrations)</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/international-tax" style={{ color: 'inherit' }}>Form 15CA &amp; 15CB Foreign Remittance Certificates</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>ROC Compliances &amp; Annual MCA Filings</Link>
                  </span>
                </li>
              </ul>
              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">INCOME TAX</span>
                <span className="rsc-keyword-pill">GST</span>
                <span className="rsc-keyword-pill">TDS</span>
                <span className="rsc-keyword-pill">ROC</span>
              </div>
            </div>

            {/* Card 2: CA Consulting Photo */}
            <div className="rsc-image-card">
              <Image
                src="/images/ca-consulting.jpg"
                alt="Chartered Accountant reviewing financial audit documents in Mumbai"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rsc-card-img"
                priority
              />
              <div className="rsc-image-overlay">
                <span className="overlay-pill">
                  <span className="pill-dot">✦</span> Audit &amp; Statutory Review Chamber · Mumbai
                </span>
              </div>
            </div>

            {/* Card 3: Audit & Assurance (Navy Card) */}
            <div className="rsc-navy-card">
              <div className="rsc-num-pill">02</div>
              <h3 className="rsc-service-title">Audit &amp; Assurance</h3>
              <p className="rsc-service-desc">
                Comprehensive audit services conducted with rigour and independence — from statutory audits to stock verification and investment certification.
              </p>
              <ul className="rsc-service-list">
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/audit" style={{ color: 'inherit' }}>Statutory Audit under the Companies Act</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/audit" style={{ color: 'inherit' }}>Tax Audit under Income Tax Act Sec 44AB</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/audit" style={{ color: 'inherit' }}>GST Audit &amp; Reconciliation (GSTR-9C)</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/audit" style={{ color: 'inherit' }}>Internal Audit — Statutory &amp; Management</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/audit" style={{ color: 'inherit' }}>Stock Audit — physical verification &amp; inspection</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/audit" style={{ color: 'inherit' }}>Certification of Investments &amp; Debtors</Link>
                  </span>
                </li>
              </ul>
              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">STATUTORY</span>
                <span className="rsc-keyword-pill">TAX AUDIT</span>
                <span className="rsc-keyword-pill">GST AUDIT</span>
                <span className="rsc-keyword-pill">INTERNAL</span>
              </div>
            </div>

            {/* Card 4: Tax Law Bare Acts Photo */}
            <div className="rsc-image-card">
              <Image
                src="/images/tax-law-books.jpg"
                alt="Income Tax, GST, and Companies Act law volumes in office library"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rsc-card-img"
              />
              <div className="rsc-image-overlay">
                <span className="overlay-pill">
                  <span className="pill-dot">✦</span> Income Tax, FEMA &amp; Corporate Jurisprudence
                </span>
              </div>
            </div>

            {/* Card 5: Accounting & MIS / Advisory (Navy Card) */}
            <div className="rsc-navy-card">
              <div className="rsc-num-pill">03</div>
              <h3 className="rsc-service-title">Accounting &amp; MIS</h3>
              <p className="rsc-service-desc">
                Dedicated accounting teams manage your books end-to-end, paired with sharp MIS reporting that gives management real-time visibility into performance.
              </p>
              <ul className="rsc-service-list">
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/accounting" style={{ color: 'inherit' }}>MIS reporting — Sales, Expenses &amp; Budgeting</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/accounting" style={{ color: 'inherit' }}>Debtor analysis &amp; working capital review</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/accounting" style={{ color: 'inherit' }}>Full accounts department outsourcing</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/accounting" style={{ color: 'inherit' }}>Internal controls via Tally ERP Software</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/cfo-advisory" style={{ color: 'inherit' }}>Virtual CFO Support for Growing Enterprises</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/international-tax" style={{ color: 'inherit' }}>Cross-Border Remittances (Form 15CA &amp; Form 15CB)</Link>
                  </span>
                </li>
              </ul>
              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">MIS</span>
                <span className="rsc-keyword-pill">ACCOUNTING</span>
                <span className="rsc-keyword-pill">BUDGETING</span>
                <span className="rsc-keyword-pill">TALLY ERP</span>
              </div>
            </div>

            {/* Card 6: Modern Financial Workspace Photo */}
            <div className="rsc-image-card">
              <Image
                src="/images/finance-desk.jpg"
                alt="Modern corporate financial desk with audit sheets, laptop and calculator"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rsc-card-img"
              />
              <div className="rsc-image-overlay">
                <span className="overlay-pill">
                  <span className="pill-dot">✦</span> Quantitative Financial Analytics &amp; MIS Desk
                </span>
              </div>
            </div>
          </div>

          {/* FIRM PARTICULARS (ICAI Register Institutional Bar) */}
          <div className="register-bar-container">
            <div className="register-header">
              <div className="register-header-left">
                <div className="register-ca-badge">
                  <Image src="/images/ca-logo.svg" alt="CA Logo" width={32} height={32} />
                </div>
                <div>
                  <span className="register-title">Firm Particulars &amp; Statutory Identity</span>
                  <span className="register-subtitle">Governed under Chartered Accountants Act, 1949</span>
                </div>
              </div>
              <span className="icai-tag">ICAI Registered Practice</span>
            </div>
            <div className="register-grid">
              <div className="register-item">
                <span className="reg-label">Firm Name</span>
                <span className="reg-val">Daksh Desai &amp; Associates, Chartered Accountants</span>
              </div>
              <div className="register-item">
                <span className="reg-label">ICAI FRN</span>
                <span className="reg-val"><span className="fill">[FRN]</span></span>
              </div>
              <div className="register-item">
                <span className="reg-label">Established</span>
                <span className="reg-val"><span className="fill">[Year]</span></span>
              </div>
              <div className="register-item">
                <span className="reg-label">Head Office</span>
                <span className="reg-val">Mumbai, Maharashtra</span>
              </div>
              <div className="register-item">
                <span className="reg-label">Core Focus</span>
                <span className="reg-val">Direct Tax · GST · Statutory Audit · Advisory</span>
              </div>
              <div className="register-item">
                <span className="reg-label">Proprietor</span>
                <span className="reg-val">CA Daksh Desai, ACA (M. No. <span className="fill">[M. No.]</span>)</span>
              </div>
            </div>
            <div className="register-foot">
              <span>Particulars as registered with the Institute of Chartered Accountants of India. Verified via ICAI Empanelled Register.</span>
              <span className="udin-note">All formal attestations bear an 18-digit Unique Document Identification Number (UDIN).</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTINUOUS TICKER RIBBON */}
      <TickerRibbon />

      {/* ABOUT THE FIRM (WITH PAN-INDIA PHOTO & SOVEREIGN BADGE) */}
      <section className="section" id="about-snippet">
        <div className="container about-split-grid">
          <div className="about-visual-side">
            <div className="about-img-frame">
              <Image
                src="/images/india-map-advisory.jpg"
                alt="Pan-India Chartered Accountancy Advisory and Consultation"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-img-cover"
              />
              <div className="about-chamber-stamp">
                <Image src="/images/ca-logo.svg" alt="CA Logo" width={20} height={20} />
                <span>MUMBAI CHAMBERS · ESTABLISHED PRACTICE</span>
              </div>
              <div className="about-map-floating-card">
                <div className="floating-card-badge">✦ PAN-INDIA ADVISORY REACH</div>
                <p className="floating-card-text">Direct representation &amp; filings across Central &amp; State tax jurisdictions from Mumbai.</p>
              </div>
            </div>
          </div>
          <div className="about-content-side">
            <div className="about-eyebrow-wrap">
              <span className="about-eyebrow-tag">✦ ABOUT THE PRACTICE</span>
              <span className="about-eyebrow-code">ESTD. MUMBAI</span>
            </div>
            <h2 className="editorial-heading">
              Built on trust, <span className="hero-serif-accent">driven by precision</span>
            </h2>
            <p className="about-p">
              Established in Mumbai, Daksh Desai &amp; Associates is an institutional Chartered Accountancy practice providing partner-led counsel across corporate taxation, statutory audit, financial reporting, and regulatory compliance.
            </p>
            <p className="about-p">
              We work with corporate enterprises, growing businesses, professionals, family offices, and non-resident Indians (NRIs) across Mumbai, pan-India, and cross-border jurisdictions.
            </p>

            <div className="milestones-list">
              <div className="milestone-card">
                <div className="milestone-number-badge">01</div>
                <div className="milestone-text">
                  <div className="milestone-tag">ORIGIN &amp; ETHICS</div>
                  <strong>Founded upon Qualifying from ICAI</strong>
                  <p>Built the practice ground-up in Mumbai with an uncompromising dedication to professional ethics and statutory independence.</p>
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-number-badge">02</div>
                <div className="milestone-text">
                  <div className="milestone-tag">JURISDICTION</div>
                  <strong>Pan-India Compliance &amp; Cross-Border Remittances</strong>
                  <p>Advising corporate entities, growing businesses, and professionals across Mumbai and major Indian industrial centers.</p>
                </div>
              </div>
              <div className="milestone-card">
                <div className="milestone-number-badge">03</div>
                <div className="milestone-text">
                  <div className="milestone-tag">PRINCIPAL ACCESS</div>
                  <strong>Direct Oversight by CA Daksh Desai</strong>
                  <p>Every assignment is managed with personalized attention, strict adherence to statutory deadlines, and partner-level accountability.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2.25rem' }}>
              <Link href="/about" className="btn-executive-pill">
                <span>Explore Practice Profile &amp; Firm Particulars</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE COMPLIANCE CALENDAR FEATURE */}
      <section className="section" id="statutory-calendar">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-red">✦ STATUTORY DEADLINE TRACKER</span>
            <h2 className="editorial-heading">
              Indian Statutory <span className="hero-serif-accent">Compliance Calendar</span>
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
              Our <span className="hero-serif-accent">approach</span>
            </h2>
            <p className="section-head-lede">
              A disciplined, partner-led standard for finance, taxation, statutory audit, and corporate governance.
            </p>
          </div>

          <div className="approach-grid-rsc">
            <div className="approach-card-rsc">
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

            <div className="approach-card-rsc">
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

            <div className="approach-card-rsc">
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

            <div className="approach-card-rsc">
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

            <div className="approach-card-rsc">
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
              Industries we <span className="hero-serif-accent" style={{ color: 'var(--color-gold)' }}>serve</span>
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
              Schedule a Structured Practice <span className="hero-serif-accent">Consultation</span>
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
