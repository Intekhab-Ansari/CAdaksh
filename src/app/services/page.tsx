import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Daksh Desai & Associates · Chartered Accountants',
  description: 'A wide range of integrated professional services: Audit & Assurance, Income Tax, GST, International Taxation, Accounting & MIS, Virtual CFO, and Corporate Law.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="section" id="services-intro">
        <div className="container-narrow">
          <span className="eyebrow">What we do</span>
          <h1>Our services</h1>
          <p className="hero-lede" style={{ marginTop: '1.25rem' }}>
            A wide range of integrated professional services, so you can get tax, audit, accounting and compliance support from one firm.
          </p>
        </div>
      </section>

      <section className="section" id="services-categories">
        <div className="container">
          {/* Category 1: Audit & Assurance */}
          <article className="service-cat-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2>Audit &amp; Assurance</h2>
              <p>Audits carried out independently, from statutory audits to stock verification and certification.</p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/services/audit" className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  Audit &amp; Assurance →
                </Link>
              </div>
            </div>
            <div>
              <ul className="service-scope-list">
                <li>Statutory audit under the Companies Act, including CARO</li>
                <li>Tax audit under the Income-tax Act</li>
                <li>GST audit</li>
                <li>Review of internal financial controls</li>
                <li>Internal audit, statutory and management</li>
                <li>Stock audit: physical verification and inspection</li>
                <li>Bank concurrent and branch audits</li>
                <li>Certification of investments and debtors</li>
              </ul>
            </div>
          </article>

          {/* Category 2: Tax & Compliance */}
          <article className="service-cat-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2>Tax &amp; Compliance</h2>
              <p>Statutory compliance under the Income-tax Act, GST and allied laws, and tax planning.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                <Link href="/services/income-tax" style={{ fontWeight: 600 }}>Income Tax →</Link>
                <Link href="/services/gst" style={{ fontWeight: 600 }}>GST →</Link>
                <Link href="/services/international-tax" style={{ fontWeight: 600 }}>International Taxation →</Link>
              </div>
            </div>
            <div>
              <ul className="service-scope-list">
                <li>Income tax returns for individuals, HUFs, firms, LLPs, companies and trusts</li>
                <li>Old vs new tax regime comparison before filing</li>
                <li>Reconciliation of your records with Form 26AS and the AIS</li>
                <li>Tax planning for individuals, firms and companies</li>
                <li>New GST registration and amendments</li>
                <li>GSTR-1 and GSTR-3B, monthly or quarterly</li>
                <li>Matching purchases with GSTR-2B to claim the right input tax credit</li>
                <li>Chartered Accountant&apos;s certificate (Form 15CB) for foreign remittances</li>
              </ul>
            </div>
          </article>

          {/* Category 3: Accounting & MIS */}
          <article className="service-cat-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2>Accounting &amp; MIS</h2>
              <p>Books managed end to end, with MIS that shows management how the business is doing.</p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/services/accounting" className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  Accounting &amp; MIS →
                </Link>
              </div>
            </div>
            <div>
              <ul className="service-scope-list">
                <li>Bookkeeping and chart of accounts set-up</li>
                <li>Full outsourcing of the accounts department</li>
                <li>Receivables and payables ageing, and debtor analysis</li>
                <li>Monthly bank and credit card reconciliations</li>
                <li>Monthly entries for TDS, GST, PF and ESI</li>
                <li>Payroll, payslips and statutory payments</li>
                <li>Periodic balance sheet, profit and loss and trial balance</li>
                <li>MIS on sales, expenses, budgets, margins and working capital</li>
              </ul>
            </div>
          </article>

          {/* Category 4: Labour & Corporate Law */}
          <article className="service-cat-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2>Labour &amp; Corporate Law</h2>
              <p>Compliance under company law, ESIC, PF and labour laws.</p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/services/corporate-law" className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  Labour &amp; Corporate Law →
                </Link>
              </div>
            </div>
            <div>
              <ul className="service-scope-list">
                <li>Company and LLP incorporation</li>
                <li>Annual ROC filings for companies (financial statements and annual return)</li>
                <li>LLP annual filings</li>
                <li>Director KYC every year</li>
                <li>Board resolutions, AGM / EGM notices, minutes and statutory registers</li>
                <li>Filings for changes: directors, share capital, registered office</li>
                <li>ESIC and PF registration and returns</li>
                <li>Labour law compliance advice</li>
              </ul>
            </div>
          </article>

          {/* Category 5: Business Advisory */}
          <article className="service-cat-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h2>Business Advisory</h2>
              <p>Advice across tax, finance and regulation, and Virtual CFO support.</p>
              <div style={{ marginTop: '0.5rem' }}>
                <Link href="/services/cfo-advisory" className="btn btn-ghost" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                  Business Advisory &amp; Virtual CFO →
                </Link>
              </div>
            </div>
            <div>
              <ul className="service-scope-list">
                <li>Virtual CFO support for management</li>
                <li>Financial models: profit and loss, balance sheet and cash flow</li>
                <li>Rolling 13-week cash flow forecasts</li>
                <li>Unit economics and contribution margins</li>
                <li>Annual budgets and monthly variance review</li>
                <li>Working capital and inventory review</li>
                <li>Investor due diligence preparation and cap table</li>
                <li>Direct and indirect tax advisory</li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
