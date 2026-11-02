import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookkeeping & Accounting MIS Services in Mumbai | Daksh Desai & Associates',
  description:
    'Outsourced bookkeeping, Tally, Zoho Books, QuickBooks, bank reconciliations, payroll compliance, and monthly executive MIS reporting in Mumbai.',
  keywords: [
    'Accounting and Bookkeeping Services Mumbai',
    'Tally Zoho Books Accounting CA Borivali',
    'Preparation of Financial Statements Schedule III',
    'Monthly MIS Reporting and Bank Reconciliation',
    'Payroll Processing and Compliance Mumbai',
  ],
  alternates: {
    canonical: 'https://dakshdesaiassociates.com/services/accounting',
  },
};

export default function AccountingPage() {
  return (
    <>
      <section className="section" id="service-header">
        <div className="container-narrow">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span className="breadcrumb-separator">/</span>
            <span>Accounting &amp; MIS</span>
          </nav>
          <h1>Accounting &amp; MIS</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Bookkeeping, reconciliations, payroll and monthly MIS reports.
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
            <p>Up-to-date books are the base for compliance, audits, bank finance and management decisions. An in-house accounts team adds cost and risk.</p>
            <p>We maintain books for startups, proprietorships, firms and private companies, or run your accounts department end to end, and turn the numbers into monthly MIS reports.</p>
          </div>
          <div className="split-body">
            <span className="eyebrow">Scope of work</span>
            <ul className="ruled-list">
              <li><strong>Bookkeeping and chart of accounts set-up</strong></li>
              <li><strong>Full outsourcing of the accounts department</strong></li>
              <li><strong>Receivables and payables ageing, and debtor analysis</strong></li>
              <li><strong>Monthly bank and credit card reconciliations</strong></li>
              <li><strong>Monthly entries for TDS, GST, PF and ESI</strong></li>
              <li><strong>Payroll, payslips and statutory payments</strong></li>
              <li><strong>Periodic balance sheet, profit and loss and trial balance</strong></li>
              <li><strong>MIS on sales, expenses, budgets, margins and working capital</strong></li>
              <li><strong>Internal controls through Tally ERP</strong></li>
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
              <strong className="step-title">Set up</strong>
              <span className="step-desc">Chart of accounts and document workflow in your software.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Record</strong>
              <span className="step-desc">Sales, purchases and expenses posted regularly.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Close</strong>
              <span className="step-desc">Reconciliations, GST and TDS checks and month-end entries.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 4</span>
              <strong className="step-title">Report</strong>
              <span className="step-desc">Monthly financial statements and MIS delivered.</span>
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
              <li><strong>Bank and credit card statements</strong></li>
              <li><strong>Sales invoices and debit notes</strong></li>
              <li><strong>Purchase bills and expense vouchers</strong></li>
              <li><strong>Payment-gateway summaries</strong></li>
              <li><strong>Employee details and attendance</strong></li>
              <li><strong>Last audited balance sheet</strong></li>
            </ul>
          </div>

          <div className="split-body">
            <span className="eyebrow">FAQs</span>
            <h2>Frequently asked questions</h2>
            <div className="qa-accordion">
              <details className="qa-item">
                <summary>Why outsource bookkeeping to a CA firm?</summary>
                <div className="qa-content">
                  <p>Your books are kept by qualified professionals who follow tax and company-law requirements, without the cost of a full-time team, and stay ready for audit and filings.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>Which accounting software do you use?</summary>
                <div className="qa-content">
                  <p>Tally Prime, Zoho Books, QuickBooks, SAP Business One, Busy and other ERPs. We can work in your system or set one up.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>What is in a monthly MIS report?</summary>
                <div className="qa-content">
                  <p>Profit and loss and balance sheet, cash flow, receivables and payables ageing, key margins, and budget versus actual.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How do you handle payroll?</summary>
                <div className="qa-content">
                  <p>We compute salaries from attendance, deduct TDS, PF, ESI and professional tax, issue payslips and prepare payment files.</p>
                </div>
              </details>
              <details className="qa-item">
                <summary>How often are bank accounts reconciled?</summary>
                <div className="qa-content">
                  <p>Weekly or monthly, depending on the number of transactions.</p>
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
