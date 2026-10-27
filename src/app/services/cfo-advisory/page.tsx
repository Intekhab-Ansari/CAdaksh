import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Advisory & Virtual CFO | Daksh Desai & Associates · Chartered Accountants',
  description: 'Part-time CFO support, dynamic 13-week cash flow forecasting, operating budgets, cap table clean-up, and board financial advisory in Mumbai.',
};

export default function CfoAdvisoryPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Business Advisory &amp; Virtual CFO</span>
          </nav>
          <h1>Business Advisory &amp; Virtual CFO</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Cash-flow forecasting, budgets, financial models and advisory.
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
            <p>Growing businesses face decisions on cash, pricing, funding and working capital, but a full-time CFO is expensive.</p>
            <p>We provide part-time CFO support, financial models and cash forecasts, budgets, and advice on direct and indirect tax, financial planning and regulatory matters.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>Virtual CFO support for management</strong></li>
              <li><strong>Financial models: profit and loss, balance sheet and cash flow</strong></li>
              <li><strong>Rolling 13-week cash flow forecasts</strong></li>
              <li><strong>Unit economics and contribution margins</strong></li>
              <li><strong>Annual budgets and monthly variance review</strong></li>
              <li><strong>Working capital and inventory review</strong></li>
              <li><strong>Investor due diligence preparation and cap table</strong></li>
              <li><strong>Direct and indirect tax advisory</strong></li>
              <li><strong>Strategic financial planning and capital structuring</strong></li>
              <li><strong>Business and regulatory consulting</strong></li>
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
              <strong className="step-title">Diagnose</strong>
              <span className="step-desc">Review revenue quality, cash cycle and costs.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Build</strong>
              <span className="step-desc">Set up the budget and projection model.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Control</strong>
              <span className="step-desc">Put cash tracking and approval limits in place.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">Review</strong>
              <span className="step-desc">Monthly review with management on results and decisions.</span>
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
              <li><strong>Financial statements for the last 2–3 years</strong></li>
              <li><strong>Monthly trial balances and MIS</strong></li>
              <li><strong>Sales and customer data</strong></li>
              <li><strong>Loan agreements and cap table</strong></li>
              <li><strong>Current budgets and headcount plans</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>How is a Virtual CFO different from an accountant?</summary>
                <div className="qa-content">
                  <p>An accountant records past transactions and files returns. A Virtual CFO looks ahead: cash flow, budgets, margins and growth decisions.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>When does a business need a Virtual CFO?</summary>
                <div className="qa-content">
                  <p>When cash flow is uneven despite good sales, margins are falling, the business is preparing for bank or investor funding, or founders spend too much time on finance.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How does a Virtual CFO help with cash flow?</summary>
                <div className="qa-content">
                  <p>With a rolling 13-week forecast that gives early warning of shortfalls and helps manage payments and collections.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Can you help with investor due diligence?</summary>
                <div className="qa-content">
                  <p>Yes. We prepare financial models, clean up the cap table, set up the data room and answer diligence queries.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How is the engagement structured?</summary>
                <div className="qa-content">
                  <p>Usually a monthly engagement covering management meetings, cash oversight and monthly reviews, with the scope agreed in advance.</p>
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
            <Link className="chip" href="/services/audit">Audit &amp; Assurance</Link>
            <Link className="chip" href="/services/accounting">Accounting &amp; MIS</Link>
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
