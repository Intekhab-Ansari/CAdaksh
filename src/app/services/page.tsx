import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Daksh Desai & Associates · Chartered Accountants',
  description: 'Comprehensive Chartered Accountancy practice areas: Audit & Assurance, Tax & Compliance, Accounting & MIS, Corporate Law, and Virtual CFO Advisory in Mumbai.',
};

export default function ServicesPage() {
  return (
    <>
      {/* SERVICES HERO HEADER */}
      <section className="section" id="services-intro" style={{ paddingBottom: '2.5rem' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <span className="eyebrow-red">✦ PRACTICE AREAS &amp; STATUTORY SCOPE</span>
          <h1 className="editorial-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', marginTop: '0.5rem' }}>
            Taxation, Audit, Accounting &amp; <span className="hero-serif-accent">Advisory</span>
          </h1>
          <p className="hero-sublede" style={{ marginTop: '1.25rem', fontSize: '1.15rem' }}>
            A comprehensive suite of integrated Chartered Accountancy services designed for corporate enterprises, family offices, startups, and professionals across India and abroad.
          </p>
        </div>
      </section>

      {/* CORE 3 SOVEREIGN PRACTICE CARDS (EXACT REFERENCE AESTHETIC) */}
      <section className="section" id="services-categories" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="rsc-cards-grid-3">
            {/* Card 1: Audit & Assurance */}
            <article className="rsc-sovereign-card">
              <div className="rsc-num-pill">01</div>
              <h2 className="rsc-service-title">Audit &amp; Assurance</h2>
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
                    <Link href="/services/audit" style={{ color: 'inherit' }}>Tax Audit under Income Tax Act</Link>
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
            </article>

            {/* Card 2: Tax & Compliance */}
            <article className="rsc-sovereign-card">
              <div className="rsc-num-pill">02</div>
              <h2 className="rsc-service-title">Tax &amp; Compliance</h2>
              <p className="rsc-service-desc">
                End-to-end statutory compliance across Companies Act, Income Tax Act, GST, and allied business laws — keeping you on the right side of every regulation.
              </p>

              <ul className="rsc-service-list">
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/income-tax" style={{ color: 'inherit' }}>Statutory compliance — Companies Act, IT Act &amp; GST</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/income-tax" style={{ color: 'inherit' }}>Tax planning for firms, companies &amp; individuals</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/income-tax" style={{ color: 'inherit' }}>TDS returns filing &amp; reconciliation</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>ROC related work &amp; filings</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/international-tax" style={{ color: 'inherit' }}>Form 15CA &amp; 15CB foreign remittance certificates</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/gst" style={{ color: 'inherit' }}>GSTR-1, 3B &amp; 2B Input Tax Credit reconciliation</Link>
                  </span>
                </li>
              </ul>

              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">INCOME TAX</span>
                <span className="rsc-keyword-pill">GST</span>
                <span className="rsc-keyword-pill">TDS</span>
                <span className="rsc-keyword-pill">ROC</span>
              </div>
            </article>

            {/* Card 3: Accounting & MIS */}
            <article className="rsc-sovereign-card">
              <div className="rsc-num-pill">03</div>
              <h2 className="rsc-service-title">Accounting &amp; MIS</h2>
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
                    <Link href="/services/accounting" style={{ color: 'inherit' }}>Bank, credit card &amp; vendor ledger reconciliations</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/accounting" style={{ color: 'inherit' }}>Periodic Balance Sheet, P&amp;L &amp; Trial Balance</Link>
                  </span>
                </li>
              </ul>

              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">MIS</span>
                <span className="rsc-keyword-pill">ACCOUNTING</span>
                <span className="rsc-keyword-pill">BUDGETING</span>
                <span className="rsc-keyword-pill">TALLY ERP</span>
              </div>
            </article>
          </div>

          {/* SECONDARY ROW: CORPORATE LAW & VIRTUAL CFO */}
          <div className="rsc-cards-grid-2">
            {/* Card 4: Corporate & Allied Laws */}
            <article className="rsc-sovereign-card">
              <div className="rsc-num-pill">04</div>
              <h2 className="rsc-service-title">Corporate &amp; Allied Laws</h2>
              <p className="rsc-service-desc">
                End-to-end Ministry of Corporate Affairs (MCA21) compliance, incorporation, and secretarial governance under the Companies Act, 2013.
              </p>

              <ul className="rsc-service-list">
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>Company &amp; LLP incorporation in Mumbai</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>Annual ROC filings — Form AOC-4 Financials &amp; MGT-7 Return</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>Annual Director KYC (DIR-3 KYC / Web) &amp; DIN validations</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>ESIC, EPFO, Professional Tax &amp; MSME Registrations</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/corporate-law" style={{ color: 'inherit' }}>Drafting Board resolutions, AGM/EGM notices &amp; statutory registers</Link>
                  </span>
                </li>
              </ul>

              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">COMPANY LAW</span>
                <span className="rsc-keyword-pill">ROC</span>
                <span className="rsc-keyword-pill">MCA21</span>
                <span className="rsc-keyword-pill">LABOUR LAW</span>
              </div>
            </article>

            {/* Card 5: Virtual CFO & Advisory */}
            <article className="rsc-sovereign-card">
              <div className="rsc-num-pill">05</div>
              <h2 className="rsc-service-title">Virtual CFO &amp; Advisory</h2>
              <p className="rsc-service-desc">
                Dedicated financial leadership supporting promoters and management with forward-looking capital allocation, cash-flow discipline, and transactional due diligence.
              </p>

              <ul className="rsc-service-list">
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/cfo-advisory" style={{ color: 'inherit' }}>Virtual CFO guidance for growing enterprises &amp; founders</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/cfo-advisory" style={{ color: 'inherit' }}>Rolling 13-week cash flow forecasting &amp; financial modeling</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/cfo-advisory" style={{ color: 'inherit' }}>Unit economics, gross margins &amp; break-even analysis</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-blue-bg" />
                  <span className="bullet-text">
                    <Link href="/services/cfo-advisory" style={{ color: 'inherit' }}>Investor due diligence preparation, data room &amp; cap table support</Link>
                  </span>
                </li>
                <li>
                  <span className="bullet-dot dot-red-bg" />
                  <span className="bullet-text">
                    <Link href="/services/international-tax" style={{ color: 'inherit' }}>Cross-border FEMA filings (RBI FIRMS / FLAIR / FLA Return)</Link>
                  </span>
                </li>
              </ul>

              <div className="rsc-pills-row">
                <span className="rsc-keyword-pill">VIRTUAL CFO</span>
                <span className="rsc-keyword-pill">CASH FLOW</span>
                <span className="rsc-keyword-pill">FEMA</span>
                <span className="rsc-keyword-pill">DUE DILIGENCE</span>
              </div>
            </article>
          </div>

          {/* DIGNIFIED CONSULTATION CTA BANNER */}
          <div className="section-cta-sovereign" style={{ borderRadius: '26px', padding: '4.5rem 2rem', marginTop: '1rem' }}>
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
