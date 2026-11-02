import type { Metadata } from 'next';
import Link from 'next/link';
import FaqSearch from '@/components/FaqSearch';

export const metadata: Metadata = {
  title: 'Client FAQ & Tax Compliance Guidance | Daksh Desai & Associates · Chartered Accountants',
  description:
    'Clear statutory answers to common questions about Income Tax, GST, International Taxation (15CA/15CB), Audits, Accounting, Virtual CFO, and Corporate Law in India.',
  keywords: [
    'Tax FAQ Mumbai Chartered Accountant',
    'GST Filing Questions Answers CA',
    'Income Tax Regime Old vs New Guidance',
    'Form 15CA 15CB FAQ India',
    'Statutory Audit Questions Companies Act',
  ],
  alternates: {
    canonical: 'https://dakshdesaiassociates.com/faq',
  },
};

const FAQ_GROUPS = [
  {
    category: 'Income Tax',
    items: [
      {
        q: 'What happens if I miss the return due date?',
        a: 'You can still file a late return within the time allowed, but a late fee and interest apply, and some losses can no longer be carried forward.',
      },
      {
        q: 'Should I choose the old or the new tax regime?',
        a: 'The new regime has lower rates but allows few deductions. The old regime can work out better if you have large deductions such as home-loan interest, insurance or tuition fees. We compute both before filing.',
      },
      {
        q: "Why doesn't my tax computation match Form 26AS or the AIS?",
        a: 'Form 26AS shows only the tax deducted or collected on your behalf. The AIS also shows high-value transactions reported by banks, brokers and others. Any differences should be explained or reported in the return to avoid a mismatch notice.',
      },
      {
        q: 'What should I do if I receive an income tax notice?',
        a: "Don't ignore it. Notices have a fixed time to respond. We review what is being asked and prepare a reply with supporting documents.",
      },
      {
        q: 'Who has to pay advance tax?',
        a: 'Anyone whose tax for the year, after TDS, is ₹10,000 or more, in four instalments during the year. Late or short payment attracts interest.',
      },
      {
        q: 'Can I correct a return after filing it?',
        a: 'Yes. A revised return can be filed within the time allowed, or before the assessment is completed, whichever is earlier.',
      },
    ],
  },
  {
    category: 'GST',
    items: [
      {
        q: 'Who has to register under GST?',
        a: 'Businesses whose turnover crosses ₹40 lakh for goods or ₹20 lakh for services (lower limits in some states). Some businesses must register whatever their turnover, such as those making inter-state supplies, e-commerce sellers and those liable under reverse charge.',
      },
      {
        q: 'Why is monthly GSTR-2B reconciliation important?',
        a: 'Input tax credit depends on your supplier reporting the invoice. Matching your purchases with GSTR-2B every month shows missing invoices and mismatches before you file, and avoids later demands, interest and penalties.',
      },
      {
        q: 'What if GSTR-1 or GSTR-3B is filed late?',
        a: 'A late fee applies for each day of delay, and interest is charged on tax paid late.',
      },
      {
        q: 'Who files the GST annual return?',
        a: 'The annual return is required for regular taxpayers with turnover above ₹2 crore, and the reconciliation statement for those above ₹5 crore.',
      },
      {
        q: 'Can exporters get a refund of GST?',
        a: 'Yes. Exports can be made without paying GST under a Letter of Undertaking and unused credit refunded, or GST can be paid and then refunded, subject to conditions.',
      },
      {
        q: 'What should I do if I receive a GST notice?',
        a: 'Check the notice and the reply date, reconcile the figures it relates to, and file a reply with supporting records within the time given.',
      },
    ],
  },
  {
    category: 'International Taxation',
    items: [
      {
        q: 'When does a foreign payment need a CA certificate?',
        a: 'When a payment to a non-resident is taxable in India and the total paid in the year is above ₹5 lakh, a Chartered Accountant\'s certificate is needed before your bank can send the money.',
      },
      {
        q: 'What does a foreign vendor need to give us to get a lower treaty rate?',
        a: 'Usually a Tax Residency Certificate from its home country, Form 10F filed online, and a declaration that it has no permanent establishment in India.',
      },
      {
        q: 'How are NRIs taxed in India?',
        a: 'Only on income earned or received in India, such as rent, capital gains on Indian property or shares, and interest on NRO deposits. Income earned abroad is not taxed in India.',
      },
      {
        q: 'How can an NRI move money from an NRO account abroad?',
        a: 'Up to USD 1 million can be repatriated in a financial year. The bank needs a CA certificate confirming that Indian taxes have been paid.',
      },
      {
        q: 'What is transfer pricing?',
        a: 'Transactions between an Indian business and related companies abroad must be priced as they would be between unrelated parties. Such businesses must keep documentation and file an accountant\'s report.',
      },
    ],
  },
  {
    category: 'Audit & Assurance',
    items: [
      {
        q: 'When is a tax audit required?',
        a: 'When a business\'s turnover crosses ₹1 crore (₹10 crore if cash transactions are within 5%), or a professional\'s receipts cross ₹50 lakh (₹75 lakh in the same case).',
      },
      {
        q: 'What is the deadline for the tax audit report?',
        a: '30 September, or 31 October where transfer pricing applies.',
      },
      {
        q: 'Does every private limited company need a statutory audit?',
        a: 'Yes. Every company must have its annual accounts audited by an independent auditor, whatever its size.',
      },
      {
        q: 'How does an internal audit help?',
        a: 'It reviews operations through the year and finds gaps and leakages early, so the statutory audit goes smoothly without qualifications.',
      },
    ],
  },
  {
    category: 'Accounting & MIS',
    items: [
      {
        q: 'Why outsource bookkeeping to a CA firm?',
        a: 'Your books are kept by qualified professionals who follow tax and company-law requirements, without the cost of a full-time team, and stay ready for audit and filings.',
      },
      {
        q: 'Which accounting software do you use?',
        a: 'Tally Prime, Zoho Books, QuickBooks, SAP Business One, Busy and other ERPs. We can work in your system or set one up.',
      },
      {
        q: 'What is in a monthly MIS report?',
        a: 'Profit and loss and balance sheet, cash flow, receivables and payables ageing, key margins, and budget versus actual.',
      },
      {
        q: 'How do you handle payroll?',
        a: 'We compute salaries from attendance, deduct TDS, PF, ESI and professional tax, issue payslips and prepare payment files.',
      },
      {
        q: 'How often are bank accounts reconciled?',
        a: 'Weekly or monthly, depending on the number of transactions.',
      },
    ],
  },
  {
    category: 'Business Advisory & Virtual CFO',
    items: [
      {
        q: 'How is a Virtual CFO different from an accountant?',
        a: 'An accountant records past transactions and files returns. A Virtual CFO looks ahead: cash flow, budgets, margins and growth decisions.',
      },
      {
        q: 'When does a business need a Virtual CFO?',
        a: 'When cash flow is uneven despite good sales, margins are falling, the business is preparing for bank or investor funding, or founders spend too much time on finance.',
      },
      {
        q: 'How does a Virtual CFO help with cash flow?',
        a: 'With a rolling 13-week forecast that gives early warning of shortfalls and helps manage payments and collections.',
      },
      {
        q: 'Can you help with investor due diligence?',
        a: 'Yes. We prepare financial models, clean up the cap table, set up the data room and answer diligence queries.',
      },
      {
        q: 'How is the engagement structured?',
        a: 'Usually a monthly engagement covering management meetings, cash oversight and monthly reviews, with the scope agreed in advance.',
      },
    ],
  },
  {
    category: 'Labour & Corporate Law',
    items: [
      {
        q: 'What annual filings does a private limited company make?',
        a: 'Its audited financial statements and annual return after the AGM, director KYC for each director, and a return of deposits where applicable.',
      },
      {
        q: 'What does an LLP have to file every year?',
        a: 'An annual return and a statement of accounts and solvency. Accounts must be audited above certain turnover or contribution limits.',
      },
      {
        q: 'What if annual returns are filed late?',
        a: 'A late fee of ₹100 per day per form applies, with no upper limit. Long delays can lead to penalties on the company and directors.',
      },
      {
        q: 'What if a director misses KYC?',
        a: 'The director\'s DIN is deactivated. It can be reactivated by filing KYC with a fee of ₹5,000.',
      },
      {
        q: 'What if a company does not file for two years or more?',
        a: 'The Registrar can begin strike-off, and directors can be disqualified for five years.',
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="faq-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>CLIENT GUIDANCE &amp; STATUTORY REPOSITORY · FAQ</span>
          </div>

          <h1 className="about-hero-title">
            Statutory clarity &amp;{' '}
            <span className="hero-serif-accent">frequently asked questions.</span>
          </h1>

          <p className="about-hero-lede">
            Authoritative answers across Indian Income Tax, GST compliance, International Remittances (15CA/15CB), Statutory Audits, and MCA Corporate Governance curated by Daksh Desai &amp; Associates.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">Income Tax</span>
              <span className="about-pillar-lbl">AIS, NOTICES &amp; REGIMES</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">GST Compliance</span>
              <span className="about-pillar-lbl">2B MATCHING &amp; REFUNDS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Statutory Audit</span>
              <span className="about-pillar-lbl">SEC 44AB &amp; COMPANIES ACT</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Cross-Border</span>
              <span className="about-pillar-lbl">15CA/CB &amp; FEMA TREATIES</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & INTERACTIVE FAQ ACCORDION */}
      <section className="section" id="faq-content-section" style={{ background: '#F8FAFC', minHeight: '600px' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(1.5rem, 3.5vw, 3rem)',
              boxShadow: '0 10px 35px rgba(11, 21, 40, 0.04)',
            }}
          >
            <FaqSearch groups={FAQ_GROUPS} />
          </div>
        </div>
      </section>

      {/* OFFICIAL REGULATORY GATEWAY (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="statutory-portals">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Official Government Portals</span>
            <h2>Direct Statutory &amp; Regulatory Gateway</h2>
            <p style={{ maxWidth: '640px', marginTop: '0.5rem' }}>
              Direct access to official Indian tax, corporate, banking, and statutory attestation portals for taxpayer verification.
            </p>
          </div>

          <div className="about-desks-grid">
            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">DIRECT TAX</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Income Tax e-Filing 2.0</h3>
              <p>Official CBDT portal for AIS, TIS, e-filing ITRs, 26AS tax credits, and faceless scrutiny submissions.</p>
              <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="about-desk-link">
                <span>incometax.gov.in ↗</span>
              </a>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">INDIRECT TAX</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>GST Common Portal</h3>
              <p>CBIC portal for GSTR-1 &amp; GSTR-3B filings, auto-generated GSTR-2B ITC statements, and tax payments.</p>
              <a href="https://www.gst.gov.in" target="_blank" rel="noopener noreferrer" className="about-desk-link">
                <span>gst.gov.in ↗</span>
              </a>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CORPORATE LAW</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>MCA21 V3 Portal</h3>
              <p>Ministry of Corporate Affairs registry for company incorporation, annual AOC-4/MGT-7 filings, and DIN KYC.</p>
              <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="about-desk-link">
                <span>mca.gov.in ↗</span>
              </a>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">TDS / TCS</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>TRACES Portal</h3>
              <p>TDS Reconciliation Analysis and Correction Enabling System for Form 16, 16A, and 26AS verification.</p>
              <a href="https://www.tdscpc.gov.in" target="_blank" rel="noopener noreferrer" className="about-desk-link">
                <span>tdscpc.gov.in ↗</span>
              </a>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CROSS-BORDER</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>Reserve Bank of India (FEMA)</h3>
              <p>Central banking authority governing foreign remittances, FIRMS portal reporting, and FLA Returns.</p>
              <a href="https://www.rbi.org.in" target="_blank" rel="noopener noreferrer" className="about-desk-link">
                <span>rbi.org.in ↗</span>
              </a>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">ICAI UDIN</span>
                <span aria-hidden="true">✦</span>
              </div>
              <h3>ICAI UDIN Authentication</h3>
              <p>Mandatory 18-digit Unique Document Identification Number verification portal for all CA certificates and audit reports.</p>
              <a href="https://udin.icai.org" target="_blank" rel="noopener noreferrer" className="about-desk-link">
                <span>udin.icai.org ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMBERS CONSULTATION BANNER */}
      <section className="section" id="faq-cta" style={{ paddingTop: '1rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="about-cta-card">
            <h2>Have a specific statutory inquiry or notice to discuss?</h2>
            <p>
              Schedule a formal consultation with CA Daksh Desai at our Borivali or Nariman Point office, or connect on WhatsApp.
            </p>
            <div className="about-cta-btns">
              <Link href="/contact" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A68037 100%)', color: '#0B1528', fontWeight: 700 }}>
                <span>Schedule Practice Consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://wa.me/919819647471?text=Hello%20CA%20Daksh%20Desai%2C%20I%20have%20a%20tax%20query."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(197, 160, 89, 0.5)', color: '#FFFFFF' }}
              >
                <span>Direct WhatsApp: +91 98196 47471</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
