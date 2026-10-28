import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TickerRibbon from '@/components/TickerRibbon';
import StatutoryDeskConsole from '@/components/StatutoryDeskConsole';
import ComplianceCalendar from '@/components/ComplianceCalendar';
import AuditDiagnosticTool from '@/components/AuditDiagnosticTool';
import RegulatoryGateway from '@/components/RegulatoryGateway';

export const metadata: Metadata = {
  title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
  description: 'Chartered Accountancy practice in Mumbai. Direct Tax litigation, GST compliance, Statutory Audits, Corporate Law, and FEMA advisory for enterprises, professionals, and global investors.',
};

export default function HomePage() {
  return (
    <>
      {/* =========================================================================
          HERO SECTION — ASYMMETRIC ARCHITECTURAL MASTERPIECE
          ========================================================================= */}
      <section className="section-hero-architectural" id="home-hero">
        <div className="container hero-architectural-grid">
          {/* Left Column: Authoritative Editorial */}
          <div className="hero-editorial-col">
            <div className="hero-crest-badge">
              <span className="crest-pulse-dot" aria-hidden="true" />
              <span className="crest-badge-text">ICAI REGISTERED PRACTICE · MUMBAI</span>
            </div>

            <h1 className="hero-sovereign-title">
              Statutory Rigor.
              <br />
              Strategic Precision.
              <br />
              <em className="hero-title-accent">Direct CA Leadership.</em>
            </h1>

            <p className="hero-editorial-lede">
              Daksh Desai &amp; Associates is an institutional Chartered Accountancy practice headquartered in Mumbai. We provide partner-led counsel across Direct Tax litigation, GST compliance, Statutory Audits, and cross-border FEMA advisory.
            </p>

            <div className="hero-cta-group">
              <Link className="btn btn-primary btn-lg" href="/contact">
                Consult Practice Office
              </Link>
              <Link className="btn btn-outline btn-lg" href="/services">
                Explore Practice Scope
              </Link>
            </div>

            {/* Factual Institutional Highlights (ICAI & Government Compliant) */}
            <div className="hero-credentials-dock">
              <div className="hero-credential-card">
                <span className="cred-val">100%</span>
                <span className="cred-label">Partner-Led Oversight</span>
                <p className="cred-sub">Every brief personally reviewed by CA Daksh Desai.</p>
              </div>

              <div className="hero-credential-card">
                <span className="cred-val">18-Digit</span>
                <span className="cred-label">ICAI UDIN Authenticated</span>
                <p className="cred-sub">Mandatory verification on every statutory certificate.</p>
              </div>

              <div className="hero-credential-card">
                <span className="cred-val">Mumbai</span>
                <span className="cred-label">Headquartered Practice</span>
                <p className="cred-sub">Pan-India statutory reach and cross-border NRI advisory.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Practice Console & Official Particulars */}
          <div className="hero-interactive-col">
            {/* Interactive Desk Console */}
            <StatutoryDeskConsole />

            {/* Official ICAI Register Particulars Bar */}
            <aside className="register-sovereign-card" aria-label="Firm particulars">
              <div className="register-sovereign-head">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <Image src="/images/ca-logo.svg" alt="CA Logo" width={26} height={26} />
                  <span className="reg-sov-title">Institutional Register Particulars</span>
                </div>
                <span className="reg-sov-tag">ICAI Registered</span>
              </div>

              <dl className="register-sov-grid">
                <div className="register-sov-item">
                  <dt>Firm Name</dt>
                  <dd>
                    Daksh Desai &amp; Associates <span className="fill">[confirm exact name as per ICAI]</span>
                  </dd>
                </div>
                <div className="register-sov-item">
                  <dt>ICAI FRN</dt>
                  <dd><span className="fill">[Firm Registration No. — awaiting ICAI]</span></dd>
                </div>
                <div className="register-sov-item">
                  <dt>Head Office</dt>
                  <dd>Mumbai, Maharashtra</dd>
                </div>
                <div className="register-sov-item">
                  <dt>Proprietor</dt>
                  <dd>CA Daksh Desai, M. No. <span className="fill">[membership no.]</span></dd>
                </div>
                <div className="register-sov-item">
                  <dt>Constitution</dt>
                  <dd>Sole Proprietorship Practice</dd>
                </div>
                <div className="register-sov-item">
                  <dt>Core Practice</dt>
                  <dd>Direct Tax · GST · Statutory Audit · FEMA</dd>
                </div>
              </dl>
              <div className="register-sov-foot">
                <span>Verified under the Chartered Accountants Act, 1949. Registered with ICAI Western India Regional Council (WIRC).</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SOVEREIGN GOLD & OBSIDIAN ARCHITECTURAL RIBBON (NO RED BANNER)
          ========================================================================= */}
      <TickerRibbon />

      {/* =========================================================================
          FEATURE 1: INTERACTIVE STATUTORY COMPLIANCE DUE-DATE TRACKER
          ========================================================================= */}
      <section className="section section-calendar-anchor" id="statutory-calendar">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-gold">STATUTORY INTELLIGENCE</span>
            <h2 className="editorial-heading">
              Indian Statutory <em>Compliance Calendar</em>
            </h2>
            <p className="section-head-lede">
              A real-time monitor for corporate officers, entrepreneurs, and finance teams to track statutory filing deadlines under Indian tax, corporate, and exchange control laws.
            </p>
          </div>

          <ComplianceCalendar />
        </div>
      </section>

      {/* =========================================================================
          THE FOUR PILLARS OF PRACTICE RIGOR
          ========================================================================= */}
      <section className="section section-pillars" id="practice-philosophy">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-gold">PRACTICE STANDARDS</span>
            <h2 className="editorial-heading">
              The Four Pillars of <em>Professional Rigor</em>
            </h2>
            <p className="section-head-lede">
              How Daksh Desai &amp; Associates executes every mandate with precision, integrity, and regulatory fidelity.
            </p>
          </div>

          <div className="pillars-architectural-grid">
            <div className="pillar-card">
              <div className="pillar-num">01</div>
              <h3 className="pillar-title">Partner-Led Execution</h3>
              <p className="pillar-desc">
                Your tax assessments, financial statements, and compliance workflows are managed directly by qualified Chartered Accountants. We eschew multi-layered junior handoffs to deliver authoritative advice with commercial speed.
              </p>
              <div className="pillar-footer">
                <span className="pillar-highlight">Direct Access to CA Daksh Desai</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">02</div>
              <h3 className="pillar-title">Uncompromising Ethical Standards</h3>
              <p className="pillar-desc">
                Rooted strictly in the ICAI Code of Ethics and applicable Standards on Auditing (SAs). Every audit report, certification, and representation is executed with institutional independence and documented evidence.
              </p>
              <div className="pillar-footer">
                <span className="pillar-highlight">Mandatory 18-Digit UDIN Authentication</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">03</div>
              <h3 className="pillar-title">Proactive Statutory Architecture</h3>
              <p className="pillar-desc">
                Compliance is managed proactively before deadlines, not retroactively under penalty duress. We continuously model Advance Tax installments, 2B ITC matches, and TDS deductions to protect against interest and statutory notices.
              </p>
              <div className="pillar-footer">
                <span className="pillar-highlight">Zero-Penalty Calendar Discipline</span>
              </div>
            </div>

            <div className="pillar-card">
              <div className="pillar-num">04</div>
              <h3 className="pillar-title">Confidentiality &amp; DPDP Stewardship</h3>
              <p className="pillar-desc">
                Client records, proprietary financial statements, and transactional data are guarded under professional privilege and strict technical controls aligned with the Digital Personal Data Protection Act, 2023.
              </p>
              <div className="pillar-footer">
                <span className="pillar-highlight">DPDP 2023 Compliant Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURE 2: STATUTORY TAX & AUDIT DIAGNOSTIC TOOL
          ========================================================================= */}
      <section className="section section-ice" id="diagnostic-tool">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-gold">DIAGNOSTIC ADVISORY AID</span>
            <h2 className="editorial-heading">
              Tax Audit &amp; <em>Applicability Navigator</em>
            </h2>
            <p className="section-head-lede">
              Determine statutory audit obligations, presumptive tax eligibility, and GST e-invoicing thresholds based on your entity&apos;s turnover and banking transaction mix.
            </p>
          </div>

          <AuditDiagnosticTool />
        </div>
      </section>

      {/* =========================================================================
          EXECUTIVE SECTOR MATRIX (BESPOKE REPLACEMENT FOR RSC NUMBERED PILLS)
          ========================================================================= */}
      <section className="section section-sectors" id="sectors-served">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-gold">INDUSTRY SPECIALIZATIONS</span>
            <h2 className="editorial-heading">
              Sectors of Practice &amp; <em>Regulatory Focus</em>
            </h2>
            <p className="section-head-lede">
              Providing sector-tailored statutory compliance, audit, and tax planning across established and emerging commercial industries.
            </p>
          </div>

          <div className="sectors-architectural-grid">
            {/* Sector 1: BFSI & Financial Services */}
            <div className="sector-matrix-card">
              <div className="sector-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z" />
                </svg>
              </div>
              <span className="sector-governing-badge">RBI &amp; Banking Regulations</span>
              <h3 className="sector-matrix-title">BFSI &amp; Financial Entities</h3>
              <p className="sector-matrix-desc">
                Advising on statutory concurrent branch audits, RBI Master Directions on NBFC prudential norms, digital lending compliances, and direct tax provisions for investment funds.
              </p>
              <ul className="sector-matrix-points">
                <li>Statutory Bank &amp; Branch Audits</li>
                <li>NBFC Annual Compliance &amp; Capital Adequacy</li>
                <li>15CA/15CB Foreign Remittance Attestation</li>
              </ul>
            </div>

            {/* Sector 2: Technology, SaaS & Cross-Border */}
            <div className="sector-matrix-card">
              <div className="sector-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <span className="sector-governing-badge">FEMA &amp; Software Exports</span>
              <h3 className="sector-matrix-title">Technology &amp; SaaS Enterprises</h3>
              <p className="sector-matrix-desc">
                Structuring cross-border software export revenues under Letter of Undertaking (LUT), Transfer Pricing documentation under Section 92E, and angel investment compliance.
              </p>
              <ul className="sector-matrix-points">
                <li>Zero-Rated Software Export GST Filings</li>
                <li>Transfer Pricing Form 3CEB Certification</li>
                <li>Virtual CFO &amp; Burn Rate Modeling</li>
              </ul>
            </div>

            {/* Sector 3: Manufacturing & Heavy Industry */}
            <div className="sector-matrix-card">
              <div className="sector-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16z" />
                </svg>
              </div>
              <span className="sector-governing-badge">AS-2 &amp; GST RCM Framework</span>
              <h3 className="sector-matrix-title">Manufacturing &amp; Engineering</h3>
              <p className="sector-matrix-desc">
                Rigorous cost-accounting alignment, inventory valuation under Accounting Standard 2 (AS-2), capital goods Input Tax Credit optimization, and factory compliance.
              </p>
              <ul className="sector-matrix-points">
                <li>Inventory Valuation &amp; Physical Stock Audits</li>
                <li>GST Reverse Charge Mechanism (RCM) Audits</li>
                <li>Internal Financial Controls over Operations</li>
              </ul>
            </div>

            {/* Sector 4: Healthcare, Hospitals & Trusts */}
            <div className="sector-matrix-card">
              <div className="sector-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <span className="sector-governing-badge">Section 12AB &amp; 80G Compliances</span>
              <h3 className="sector-matrix-title">Healthcare &amp; Charitable Trusts</h3>
              <p className="sector-matrix-desc">
                Specialized compliance for medical professionals, multispecialty clinics, and registered charitable institutions under Sections 12AB, 80G, and 10(23C) of the Income-tax Act.
              </p>
              <ul className="sector-matrix-points">
                <li>Trust Audit &amp; Form 10B/10BB Filings</li>
                <li>Medical Professional Presumptive Tax (44ADA)</li>
                <li>Exempt vs. Taxable Healthcare GST Segregation</li>
              </ul>
            </div>

            {/* Sector 5: Real Estate, EPC & Infrastructure */}
            <div className="sector-matrix-card">
              <div className="sector-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21h18M6 18V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12M10 8h4M10 12h4M10 16h4" />
                </svg>
              </div>
              <span className="sector-governing-badge">RERA &amp; Section 45(5A)</span>
              <h3 className="sector-matrix-title">Real Estate &amp; Construction</h3>
              <p className="sector-matrix-desc">
                Navigating complex Joint Development Agreements (JDA) under Section 45(5A), RERA project bank account certifications, and Section 194-IA property TDS compliance.
              </p>
              <ul className="sector-matrix-points">
                <li>Quarterly RERA Fund Withdrawal Certificates</li>
                <li>JDA Capital Gains &amp; Stamp Valuation Guidance</li>
                <li>ITC Restriction Audits on Immovable Works</li>
              </ul>
            </div>

            {/* Sector 6: Family Offices & Global NRIs */}
            <div className="sector-matrix-card">
              <div className="sector-card-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="sector-governing-badge">DTAA &amp; FEMA Remittances</span>
              <h3 className="sector-matrix-title">Global NRIs &amp; Family Offices</h3>
              <p className="sector-matrix-desc">
                Advising non-resident Indian families on capital repatriation (NRO to NRE), Lower TDS Certificates (Form 13), and Double Taxation Avoidance Agreement (DTAA) treaty benefits.
              </p>
              <ul className="sector-matrix-points">
                <li>Form 15CA &amp; CA Certificate 15CB Issuance</li>
                <li>Lower TDS Application under Section 197</li>
                <li>Indian Immovable Property Sale Taxation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURE 3: OFFICIAL REGULATORY & STATUTORY PORTALS GATEWAY
          ========================================================================= */}
      <RegulatoryGateway />

      {/* =========================================================================
          TAX & REGULATORY INSIGHTS BULLETIN
          ========================================================================= */}
      <section className="section" id="insights-bulletin">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow-gold">STATUTORY INSIGHTS</span>
            <h2 className="editorial-heading">Tax &amp; Regulatory Analysis</h2>
            <p style={{ marginTop: '0.75rem', color: 'var(--color-text-body)' }}>
              Analytical updates on CBDT notifications, CBIC circulars, judicial precedents from ITAT/High Courts, and MCA statutory amendments.
            </p>
            <div style={{ marginTop: '1.75rem' }}>
              <Link href="/insights" className="link-arrow">
                View All Bulletins <span>→</span>
              </Link>
            </div>
          </div>

          <div className="split-body">
            <div className="insight-architectural-card">
              <div className="insight-card-top-row">
                <span className="insight-badge">Knowledge Bulletin</span>
                <span className="insight-statutory-label">ICAI Compliant Publication</span>
              </div>
              <h3 className="insight-card-title"><span className="fill">[Latest Analysis Title: e.g. Critical Implications of Section 148 Re-assessment Notices]</span></h3>
              <p className="insight-card-meta">
                <span className="fill">[Publication Date]</span> · <span className="fill">[Concise summary of statutory impact, filing timelines, and risk mitigation strategies for assessees]</span>
              </p>
              <div style={{ marginTop: '1.25rem' }}>
                <Link href="/insights" className="desk-action-link">
                  Read Technical Breakdown →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXECUTIVE CLOSING CTA (SOVEREIGN ARCHITECTURAL STYLE)
          ========================================================================= */}
      <section className="section-closing-cta" id="cta-connect">
        <div className="container closing-cta-container">
          <div className="closing-cta-badge">
            <span className="inst-dot" />
            <span>CONFIDENTIAL ENGAGEMENT ENQUIRIES</span>
          </div>

          <h2 className="closing-cta-title">
            Discuss Your Practice Requirements
          </h2>

          <p className="closing-cta-desc">
            Whether preparing for statutory audits, responding to departmental notices, managing cross-border FEMA remittances, or streamlining annual corporate filings — connect with our Mumbai office to review your scope under strict professional privilege.
          </p>

          <div className="closing-cta-actions">
            <Link className="btn btn-gold btn-lg" href="/contact">
              Schedule Practice Consultation
            </Link>
            <Link className="btn btn-outline-light btn-lg" href="/about">
              Review Firm Credentials
            </Link>
          </div>

          <p className="closing-cta-legal-note">
            Consultations governed under the Code of Ethics of the Institute of Chartered Accountants of India (ICAI).
          </p>
        </div>
      </section>
    </>
  );
}
