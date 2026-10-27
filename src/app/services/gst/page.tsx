import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GST Services | Daksh Desai & Associates · Chartered Accountants',
  description: 'GST registration, monthly GSTR-1/3B filings, strict GSTR-2B ITC matching, annual returns (GSTR-9/9C), refunds, and departmental audit defense in Mumbai.',
};

export default function GstPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>GST</span>
          </nav>
          <h1>GST</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Registration, returns, input tax credit matching and notice support.
          </p>
          <div style={{ marginTop: '1.5rem' }}>
            <Link className="btn btn-primary" href="/contact">Contact us</Link>
          </div>
        </div>
      </section>

      <section className="section" id="service-scope">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Overview</span>
            <p>GST affects your cash flow, pricing and choice of vendors. Claiming input tax credit correctly depends on your suppliers&apos; filings, so monthly checks matter.</p>
            <p>We handle registration, monthly and quarterly returns, input tax credit reconciliation, annual returns, export refunds, and replies to notices and departmental audits.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>New GST registration and amendments</strong></li>
              <li><strong>GSTR-1 and GSTR-3B, monthly or quarterly</strong></li>
              <li><strong>Matching purchases with GSTR-2B to claim the right input tax credit</strong></li>
              <li><strong>Annual return and reconciliation (GSTR-9 / 9C)</strong></li>
              <li><strong>Letter of Undertaking (LUT) for exporters</strong></li>
              <li><strong>Refunds for exports and inverted duty structures</strong></li>
              <li><strong>Replies to notices, departmental audits and appeals, including before the GST Appellate Tribunal</strong></li>
              <li><strong>Pending VAT matters from the pre-GST period</strong></li>
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
              <strong className="step-title">Collect data</strong>
              <span className="step-desc">Sales and purchase registers from your accounting software.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Match credit</strong>
              <span className="step-desc">Purchases matched with GSTR-2B to confirm eligible credit.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Compute tax</strong>
              <span className="step-desc">Net tax worked out after credit and challans prepared.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">File</strong>
              <span className="step-desc">Returns filed and acknowledgements shared with you.</span>
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
              <li><strong>PAN and Aadhaar of proprietor, partners or directors</strong></li>
              <li><strong>Incorporation certificate or partnership deed</strong></li>
              <li><strong>Proof of business premises</strong></li>
              <li><strong>Cancelled cheque or bank statement</strong></li>
              <li><strong>Digital signature or Aadhaar for OTP</strong></li>
              <li><strong>Monthly sales and purchase registers</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>Who has to register under GST?</summary>
                <div className="qa-content">
                  <p>Businesses whose turnover crosses ₹40 lakh for goods or ₹20 lakh for services (lower limits in some states). Some businesses must register whatever their turnover, such as those making inter-state supplies, e-commerce sellers and those liable under reverse charge.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Why is monthly GSTR-2B reconciliation important?</summary>
                <div className="qa-content">
                  <p>Input tax credit depends on your supplier reporting the invoice. Matching your purchases with GSTR-2B every month shows missing invoices and mismatches before you file, and avoids later demands, interest and penalties.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What if GSTR-1 or GSTR-3B is filed late?</summary>
                <div className="qa-content">
                  <p>A late fee applies for each day of delay, and interest is charged on tax paid late.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Who files the GST annual return?</summary>
                <div className="qa-content">
                  <p>The annual return is required for regular taxpayers with turnover above ₹2 crore, and the reconciliation statement for those above ₹5 crore.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Can exporters get a refund of GST?</summary>
                <div className="qa-content">
                  <p>Yes. Exports can be made without paying GST under a Letter of Undertaking and unused credit refunded, or GST can be paid and then refunded, subject to conditions.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What should I do if I receive a GST notice?</summary>
                <div className="qa-content">
                  <p>Check the notice and the reply date, reconcile the figures it relates to, and file a reply with supporting records within the time given.</p>
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
            <Link className="chip" href="/services/international-tax">International Taxation</Link>
            <Link className="chip" href="/services/audit">Audit &amp; Assurance</Link>
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
