import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audit & Assurance | Daksh Desai & Associates · Chartered Accountants',
  description: 'Statutory audits under Companies Act 2013, Tax Audits u/s 44AB, GST Audits, internal financial controls, and stock audits in Mumbai.',
};

export default function AuditPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Audit &amp; Assurance</span>
          </nav>
          <h1>Audit &amp; Assurance</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Statutory, tax, GST, internal and stock audits, and certifications.
          </p>
          <span className="devnote">
            Confirm this service page: the 2026–35 roadmap marked statutory audit as a line to avoid. Keep bank audits only if eligible for the bank audit panel.
          </span>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>

      <section className="section" id="service-scope">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Overview</span>
            <p>An audit builds credibility with banks, investors, tax authorities and shareholders, and strengthens your internal controls.</p>
            <p>We carry out audits following ICAI Standards on Auditing, from statutory and tax audits to stock verification and certification of investments and debtors.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>Statutory audit under the Companies Act, including CARO</strong></li>
              <li><strong>Tax audit under the Income-tax Act</strong></li>
              <li><strong>GST audit</strong></li>
              <li><strong>Review of internal financial controls</strong></li>
              <li><strong>Internal audit, statutory and management</strong></li>
              <li><strong>Stock audit: physical verification and inspection</strong></li>
              <li><strong>Bank concurrent and branch audits</strong></li>
              <li><strong>Certification of investments and debtors</strong></li>
              <li><strong>Financial due diligence for investors</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="service-process">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Process</span>
            <h2>How we work</h2>
          </div>

          <ol className="steps-grid">
            <li className="step-card">
              <span className="step-number">Step 1</span>
              <strong className="step-title">Plan</strong>
              <span className="step-desc">Understand the business, set materiality and assess risks.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Test</strong>
              <span className="step-desc">Check vouchers, payments and bank transactions on a sample basis.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Review controls</strong>
              <span className="step-desc">Assess internal controls and reconcile turnover with GST returns.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">Report</strong>
              <span className="step-desc">Issue the audit report and file it online.</span>
            </li>
          </ol>
        </div>
      </section>

      <section className="section" id="service-docs-faq">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Documents</span>
            <h2>Documents required</h2>
            <ul className="ruled-list">
              <li><strong>Books of accounts, trial balance, P&amp;L and balance sheet</strong></li>
              <li><strong>Bank statements and bank confirmations</strong></li>
              <li><strong>GST and TDS returns for the year</strong></li>
              <li><strong>Fixed asset register</strong></li>
              <li><strong>Previous year&apos;s audited accounts and tax audit report</strong></li>
              <li><strong>Stock valuation and physical verification sheets</strong></li>
              <li><strong>Board minutes and statutory registers (companies)</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>When is a tax audit required?</summary>
                <div className="qa-content">
                  <p>When a business&apos;s turnover crosses ₹1 crore (₹10 crore if cash transactions are within 5%), or a professional&apos;s receipts cross ₹50 lakh (₹75 lakh in the same case).</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What is the deadline for the tax audit report?</summary>
                <div className="qa-content">
                  <p>30 September, or 31 October where transfer pricing applies.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Does every private limited company need a statutory audit?</summary>
                <div className="qa-content">
                  <p>Yes. Every company must have its annual accounts audited by an independent auditor, whatever its size.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How does an internal audit help?</summary>
                <div className="qa-content">
                  <p>It reviews operations through the year and finds gaps and leakages early, so the statutory audit goes smoothly without qualifications.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="other-services">
        <div className="container">
          <span className="eyebrow">Other services</span>
          <div className="chips-wrap" style={{ marginTop: '0.75rem' }}>
            <Link className="chip" href="/services/income-tax">Income Tax</Link>
            <Link className="chip" href="/services/gst">GST</Link>
            <Link className="chip" href="/services/international-tax">International Taxation</Link>
            <Link className="chip" href="/services/accounting">Accounting &amp; MIS</Link>
            <Link className="chip" href="/services/cfo-advisory">Business Advisory &amp; Virtual CFO</Link>
            <Link className="chip" href="/services/corporate-law">Labour &amp; Corporate Law</Link>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
            The information on this page is general and is not professional advice.
          </p>
        </div>
      </section>
    </>
  );
}
