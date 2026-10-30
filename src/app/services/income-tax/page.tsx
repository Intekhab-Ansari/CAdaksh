import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Income Tax Services | Daksh Desai & Associates · Chartered Accountants',
  description: 'Income tax return filing, tax planning, advance tax, TDS/TCS, scrutiny notices, and appeals before CIT(A) and ITAT. Daksh Desai & Associates, Mumbai.',
};

export default function IncomeTaxPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Income Tax</span>
          </nav>
          <h1>Income Tax</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Return filing, tax planning, and notice and assessment support.
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
            <p>Income tax needs close attention to changing rules, the information the department already holds about you in the AIS, and the choice between the old and new tax regimes.</p>
            <p>We handle returns for salaried individuals, professionals, HNIs and NRIs, and for firms, LLPs and companies. We also prepare replies to notices, handle assessments and reassessments, and file appeals.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>Income tax returns for individuals, HUFs, firms, LLPs, companies and trusts</strong></li>
              <li><strong>Old vs new tax regime comparison before filing</strong></li>
              <li><strong>Reconciliation of your records with Form 26AS and the AIS</strong></li>
              <li><strong>Tax planning for individuals, firms and companies</strong></li>
              <li><strong>Advance tax computation and quarterly instalments</strong></li>
              <li><strong>TDS / TCS returns, reconciliation and Form 16 / 16A</strong></li>
              <li><strong>Professional tax registration and returns</strong></li>
              <li><strong>Capital gains on property, shares and mutual funds</strong></li>
              <li><strong>Replies to notices, assessments and reassessments</strong></li>
              <li><strong>Appeals before the Commissioner (Appeals) and the Income Tax Appellate Tribunal</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-navy" id="service-process">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Process</span>
            <h2>How we work</h2>
          </div>

          <ol className="steps-grid">
            <li className="step-card">
              <span className="step-number">Step 1</span>
              <strong className="step-title">Collect and reconcile</strong>
              <span className="step-desc">Your documents are matched against Form 26AS and the AIS.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Compute</strong>
              <span className="step-desc">Tax is worked out under both regimes to find the right option.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Your approval</strong>
              <span className="step-desc">You review the computation before anything is filed.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">File</strong>
              <span className="step-desc">The return is filed and we help you e-verify it.</span>
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
              <li><strong>PAN and Aadhaar</strong></li>
              <li><strong>Form 16 / 16A</strong></li>
              <li><strong>Form 26AS and AIS</strong></li>
              <li><strong>Bank statements for all accounts</strong></li>
              <li><strong>Capital gains statements from brokers or mutual funds</strong></li>
              <li><strong>Financial statements (for businesses)</strong></li>
              <li><strong>Proofs of deductions claimed</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>What happens if I miss the return due date?</summary>
                <div className="qa-content">
                  <p>You can still file a late return within the time allowed, but a late fee and interest apply, and some losses can no longer be carried forward.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Should I choose the old or the new tax regime?</summary>
                <div className="qa-content">
                  <p>The new regime has lower rates but allows few deductions. The old regime can work out better if you have large deductions such as home-loan interest, insurance or tuition fees. We compute both before filing.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Why doesn&apos;t my tax computation match Form 26AS or the AIS?</summary>
                <div className="qa-content">
                  <p>Form 26AS shows only the tax deducted or collected on your behalf. The AIS also shows high-value transactions reported by banks, brokers and others. Any differences should be explained or reported in the return to avoid a mismatch notice.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What should I do if I receive an income tax notice?</summary>
                <div className="qa-content">
                  <p>Don&apos;t ignore it. Notices have a fixed time to respond. We review what is being asked and prepare a reply with supporting documents.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Who has to pay advance tax?</summary>
                <div className="qa-content">
                  <p>Anyone whose tax for the year, after TDS, is ₹10,000 or more, in four instalments during the year. Late or short payment attracts interest.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Can I correct a return after filing it?</summary>
                <div className="qa-content">
                  <p>Yes. A revised return can be filed within the time allowed, or before the assessment is completed, whichever is earlier.</p>
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
            <Link className="chip" href="/services/gst">GST</Link>
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
