import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Registration & ROC Annual Filings in Mumbai | Daksh Desai & Associates',
  description:
    'Private Limited Company & LLP incorporation via MCA SPICe+, annual ROC filings (AOC-4, MGT-7), DIR-3 KYC, and corporate legal compliance in Mumbai.',
  keywords: [
    'Company Incorporation Mumbai CA',
    'Private Limited Registration Borivali',
    'LLP Formation MCA SPICe+',
    'ROC Annual Filings AOC-4 MGT-7 Mumbai',
    'Director KYC DIR-3 Filing CA',
    'Startup Legal and Corporate Structuring India',
  ],
  alternates: {
    canonical: 'https://dakshdesaiassociates.com/services/corporate-law',
  },
};

export default function CorporateLawPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Labour &amp; Corporate Law</span>
          </nav>
          <h1>Labour &amp; Corporate Law</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Company and LLP compliance, ROC filings, and ESIC, PF and labour law.
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
            <p>Company and labour-law compliance affects your eligibility for contracts, bank loans and investment. Defaults lead to penalties, director disqualification and even strike-off.</p>
            <p>We handle incorporation, annual and event-based ROC filings, secretarial records, and ESIC, PF and labour law compliance.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>Company and LLP incorporation</strong></li>
              <li><strong>Annual ROC filings for companies (financial statements and annual return)</strong></li>
              <li><strong>LLP annual filings</strong></li>
              <li><strong>Director KYC every year</strong></li>
              <li><strong>Board resolutions, AGM / EGM notices, minutes and statutory registers</strong></li>
              <li><strong>Filings for changes: directors, share capital, registered office</strong></li>
              <li><strong>ESIC and PF registration and returns</strong></li>
              <li><strong>Labour law compliance advice</strong></li>
              <li><strong>Regulatory filings and documentation</strong></li>
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
              <strong className="step-title">Structure</strong>
              <span className="step-desc">Choose the entity type and reserve the name.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Prepare</strong>
              <span className="step-desc">Draft MOA / AOA and obtain digital signatures.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Incorporate</strong>
              <span className="step-desc">File for incorporation and complete PAN, TAN and bank account.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">Maintain</strong>
              <span className="step-desc">Annual ROC filings, meetings and director KYC each year.</span>
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
              <li><strong>PAN and ID proof of directors or partners</strong></li>
              <li><strong>Address proof of directors or partners</strong></li>
              <li><strong>Proof of registered office and owner&apos;s NOC</strong></li>
              <li><strong>Digital signature certificates</strong></li>
              <li><strong>MOA and AOA, or LLP agreement</strong></li>
              <li><strong>Audited financial statements (for annual filings)</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>What annual filings does a private limited company make?</summary>
                <div className="qa-content">
                  <p>Its audited financial statements and annual return after the AGM, director KYC for each director, and a return of deposits where applicable.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What does an LLP have to file every year?</summary>
                <div className="qa-content">
                  <p>An annual return and a statement of accounts and solvency. Accounts must be audited above certain turnover or contribution limits.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What if annual returns are filed late?</summary>
                <div className="qa-content">
                  <p>A late fee of ₹100 per day per form applies, with no upper limit. Long delays can lead to penalties on the company and directors.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What if a director misses KYC?</summary>
                <div className="qa-content">
                  <p>The director&apos;s DIN is deactivated. It can be reactivated by filing KYC with a fee of ₹5,000.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What if a company does not file for two years or more?</summary>
                <div className="qa-content">
                  <p>The Registrar can begin strike-off, and directors can be disqualified for five years.</p>
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
            <Link className="chip" href="/services/cfo-advisory">Business Advisory &amp; Virtual CFO</Link>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--ink-muted)' }}>
            The information on this page is general and is not professional advice.
          </p>
        </div>
      </section>
    </>
  );
}
