import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
  description: 'Taxation, audit, accounting and advisory services for businesses, professionals, and individuals in Mumbai.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section" id="home-hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div>
              <span className="eyebrow">Chartered Accountants · Mumbai</span>
              <h1 className="hero-title">Taxation, audit, accounting and <em>advisory</em></h1>
            </div>
            <p className="hero-lede">We help businesses, professionals and individuals handle finance, taxation and compliance with clarity, from routine filings to tax notices and appeals.</p>
            <div className="btn-group">
              <Link className="btn btn-primary" href="/services">Our services</Link>
              <Link className="btn btn-ghost" href="/contact">Contact us</Link>
            </div>
          </div>

          {/* FIRM PARTICULARS (ICAI Register) */}
          <aside className="register-card" aria-label="Firm particulars">
            <div className="register-header">
              <span className="register-title">Firm particulars</span>
              <span className="icai-tag">ICAI Registered</span>
            </div>
            <dl className="register-dl">
              <dt className="register-dt">Firm name</dt>
              <dd className="register-dd">Daksh Desai &amp; Associates, Chartered Accountants <span className="fill">[confirm name exactly as approved by ICAI]</span></dd>
              
              <dt className="register-dt">ICAI FRN</dt>
              <dd className="register-dd"><span className="fill">[Firm Registration No. — awaiting ICAI]</span></dd>
              
              <dt className="register-dt">Established</dt>
              <dd className="register-dd"><span className="fill">[year as per ICAI records]</span></dd>
              
              <dt className="register-dt">Head office</dt>
              <dd className="register-dd">Mumbai</dd>
              
              <dt className="register-dt">Core focus</dt>
              <dd className="register-dd">Tax · Audit · Advisory</dd>
              
              <dt className="register-dt">Proprietor</dt>
              <dd className="register-dd">CA Daksh Desai, M. No. <span className="fill">[membership no.]</span></dd>
            </dl>
            <p className="register-foot">Particulars as registered with the Institute of Chartered Accountants of India.</p>
          </aside>
        </div>
      </section>

      {/* SERVICES AT A GLANCE */}
      <section className="section" id="services-glance">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Services</span>
            <h2>Our services at a glance</h2>
          </div>

          <div className="glance-grid">
            {/* Column 1: Tax compliance */}
            <div className="glance-col">
              <div className="glance-col-head">
                <h3 className="glance-col-title">Tax compliance</h3>
              </div>
              <ul className="glance-list">
                <li className="glance-item"><Link href="/services/income-tax">Income Tax</Link></li>
                <li className="glance-item"><Link href="/services/income-tax">TDS / TCS</Link></li>
                <li className="glance-item"><Link href="/services/gst">GST</Link></li>
                <li className="glance-item"><Link href="/services/income-tax">Professional Tax</Link></li>
                <li className="glance-item"><Link href="/services/gst">VAT</Link></li>
                <li className="glance-item"><Link href="/services/international-tax">NRI Taxation</Link></li>
                <li className="glance-item"><Link href="/services/corporate-law">ROC compliances</Link></li>
              </ul>
            </div>

            {/* Column 2: Audit & assurance */}
            <div className="glance-col">
              <div className="glance-col-head">
                <h3 className="glance-col-title">Audit &amp; assurance</h3>
              </div>
              <ul className="glance-list">
                <li className="glance-item"><Link href="/services/audit">Statutory Audit</Link></li>
                <li className="glance-item"><Link href="/services/audit">Tax Audit</Link></li>
                <li className="glance-item"><Link href="/services/audit">GST Audit</Link></li>
                <li className="glance-item"><Link href="/services/audit">Internal Audit</Link></li>
                <li className="glance-item"><Link href="/services/audit">Stock Audit</Link></li>
                <li className="glance-item"><Link href="/services/audit">Certification of Investments &amp; Debtors</Link></li>
              </ul>
            </div>

            {/* Column 3: Other services */}
            <div className="glance-col">
              <div className="glance-col-head">
                <h3 className="glance-col-title">Other services</h3>
              </div>
              <ul className="glance-list">
                <li className="glance-item"><Link href="/services/cfo-advisory">Tax &amp; Financial Planning</Link></li>
                <li className="glance-item"><Link href="/services/accounting">Accounting Services</Link></li>
                <li className="glance-item"><Link href="/services/accounting">MIS Reporting</Link></li>
                <li className="glance-item"><Link href="/services/cfo-advisory">Virtual CFO</Link></li>
                <li className="glance-item"><Link href="/services/international-tax">International Taxation</Link></li>
                <li className="glance-item"><Link href="/services/corporate-law">Company Formation</Link></li>
                <li className="glance-item"><Link href="/services/corporate-law">ESIC, PF &amp; Labour Law</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE FIRM */}
      <section className="section" id="about-snippet">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">About the firm</span>
            <h2>Daksh Desai &amp; Associates</h2>
          </div>
          <div className="split-body">
            <p>Established in <span className="fill">[year]</span>, Daksh Desai &amp; Associates is a Chartered Accountancy practice based in Mumbai. We aim to give every client the clarity and attention of an in-house team for taxation, accounts, audit and compliance.</p>
            <p>We work with <span className="fill">[client types, e.g. SMEs, startups, professionals, HNIs and NRIs]</span>.</p>
            <div style={{ marginTop: '0.5rem' }}>
              <Link href="/about" style={{ fontWeight: 600 }}>More about the firm →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section" id="industries">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="eyebrow">Industries</span>
            <h2>Industries we serve</h2>
            <p style={{ marginTop: '0.4rem' }}>We support businesses across sectors with taxation, compliance, audit and advisory services.</p>
          </div>

          <div className="chips-wrap">
            <span className="chip"><span className="fill">[Industry 1]</span></span>
            <span className="chip"><span className="fill">[Industry 2]</span></span>
            <span className="chip"><span className="fill">[Industry 3]</span></span>
            <span className="chip"><span className="fill">[Industry 4]</span></span>
            <span className="chip"><span className="fill">[Industry 5]</span></span>
            <span className="chip"><span className="fill">[Industry 6]</span></span>
          </div>

          <span className="devnote">Pick the industries you serve. Ritesh Shah &amp; Co. lists Manufacturing, Pharma &amp; Healthcare, Software &amp; IT, Service industries, Wholesalers and Retailers. Your own focus (banks, NBFCs, AIFs, FPIs, InvITs/REITs, GIFT City units) can go here instead.</span>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="section" id="approach">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Approach</span>
            <h2>Our approach</h2>
          </div>
          <div className="split-body">
            <ul className="ruled-list">
              <li>
                <strong>Direct access to a Chartered Accountant</strong>
                <span>You deal with the proprietor directly on your matters.</span>
              </li>
              <li>
                <strong>Personal attention to every client</strong>
                <span>Advice based on your facts, not a template.</span>
              </li>
              <li>
                <strong>Timely compliance</strong>
                <span>Structured workflows to meet income tax, GST and MCA deadlines.</span>
              </li>
              <li>
                <strong>Advice ahead of deadlines</strong>
                <span>Planning before the due date rather than reacting after it.</span>
              </li>
              <li>
                <strong>Confidentiality and ethics</strong>
                <span>Client data handled under the ICAI Code of Ethics.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="section" id="insights-preview">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Insights</span>
            <h2>Tax &amp; finance insights</h2>
            <div>
              <Link href="/insights" style={{ fontWeight: 600 }}>All articles →</Link>
            </div>
          </div>
          <div className="split-body">
            <div style={{ border: '1px dashed var(--rule-strong)', borderRadius: 'var(--radius-md)', padding: '1.5rem', backgroundColor: 'var(--bg-surface)' }}>
              <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', display: 'block', marginBottom: '0.35rem' }}><span className="fill">[Latest article title]</span></strong>
              <span style={{ fontSize: '0.92rem', color: 'var(--ink-secondary)' }}><span className="fill">[date]</span> · <span className="fill">[one-line summary]</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO CONNECT */}
      <section className="section section-deep" id="cta-connect">
        <div className="container split-layout" style={{ alignItems: 'center' }}>
          <div>
            <h2>Ready to connect?</h2>
          </div>
          <div className="split-body">
            <p>Whether you need help with returns, compliance, audit or tax planning, write to us and we will discuss what fits your needs.</p>
            <div style={{ marginTop: '0.75rem' }}>
              <Link className="btn btn-white" href="/contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
