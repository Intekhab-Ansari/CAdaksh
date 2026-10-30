import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Taxation | Daksh Desai & Associates · Chartered Accountants',
  description: 'Foreign remittances Form 15CA/15CB CA certification, DTAA tax treaty relief, transfer pricing benchmarking, and NRI taxation. Daksh Desai & Associates, Mumbai.',
};

export default function InternationalTaxPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>International Taxation</span>
          </nav>
          <h1>International Taxation</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Foreign remittances, tax treaties, transfer pricing and NRI tax.
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
            <p>Cross-border payments, foreign investments and NRI income need careful handling of withholding tax and tax treaty rules.</p>
            <p>We certify foreign remittances, advise on tax treaty relief, prepare transfer pricing documentation, and handle NRI returns and repatriation of funds.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>Chartered Accountant&apos;s certificate (Form 15CB) for foreign remittances</strong></li>
              <li><strong>Online filing of Form 15CA</strong></li>
              <li><strong>Tax treaty (DTAA) relief and Tax Residency Certificate review</strong></li>
              <li><strong>Withholding tax on royalty, technical fees and other payments to non-residents</strong></li>
              <li><strong>Transfer pricing documentation, benchmarking and accountant&apos;s report</strong></li>
              <li><strong>Advice on permanent establishment and place of effective management</strong></li>
              <li><strong>NRI tax returns and NRI taxation</strong></li>
              <li><strong>Repatriation of funds from NRO accounts</strong></li>
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
              <strong className="step-title">Review the payment</strong>
              <span className="step-desc">Agreement and nature of the income reviewed.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Check the rate</strong>
              <span className="step-desc">Indian law and tax treaty rates compared.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Certify</strong>
              <span className="step-desc">Certificate prepared and signed.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">File</strong>
              <span className="step-desc">Form 15CA filed and documents ready for your bank.</span>
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
              <li><strong>Agreement or invoice with the foreign party</strong></li>
              <li><strong>Tax Residency Certificate of the foreign party</strong></li>
              <li><strong>Form 10F filed online by the foreign party</strong></li>
              <li><strong>No permanent establishment declaration</strong></li>
              <li><strong>Remittance details from your bank</strong></li>
              <li><strong>PAN of the remitter</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>When does a foreign payment need a CA certificate?</summary>
                <div className="qa-content">
                  <p>When a payment to a non-resident is taxable in India and the total paid in the year is above ₹5 lakh, a Chartered Accountant&apos;s certificate is needed before your bank can send the money.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What does a foreign vendor need to give us to get a lower treaty rate?</summary>
                <div className="qa-content">
                  <p>Usually a Tax Residency Certificate from its home country, Form 10F filed online, and a declaration that it has no permanent establishment in India.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How are NRIs taxed in India?</summary>
                <div className="qa-content">
                  <p>Only on income earned or received in India, such as rent, capital gains on Indian property or shares, and interest on NRO deposits. Income earned abroad is not taxed in India.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How can an NRI move money from an NRO account abroad?</summary>
                <div className="qa-content">
                  <p>Up to USD 1 million can be repatriated in a financial year. The bank needs a CA certificate confirming that Indian taxes have been paid.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What is transfer pricing?</summary>
                <div className="qa-content">
                  <p>Transactions between an Indian business and related companies abroad must be priced as they would be between unrelated parties. Such businesses must keep documentation and file an accountant&apos;s report.</p>
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
