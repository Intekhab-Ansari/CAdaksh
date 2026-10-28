import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import TickerRibbon from '@/components/TickerRibbon';

export const metadata: Metadata = {
  title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
  description: 'Taxation, audit, accounting and advisory services for businesses, professionals, and individuals in Mumbai.',
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section hero-rsc" id="home-hero">
        <div className="container">
          <div className="hero-header-wrap">
            <span className="eyebrow-pill">CHARTERED ACCOUNTANTS · MUMBAI</span>
            <h1 className="hero-main-title">
              Taxation, audit, accounting and <em>advisory</em>
            </h1>
            <p className="hero-sublede">
              We help businesses, professionals and individuals handle finance, taxation and compliance with clarity, from routine filings to tax notices and appeals.
            </p>
            <div className="hero-btn-group">
              <Link className="btn btn-primary" href="/services">
                Our services
              </Link>
              <Link className="btn btn-outline" href="/contact">
                Contact us
              </Link>
            </div>
          </div>

          {/* 6-CARD SERVICES & IMAGES SHOWCASE (RSC INDIA STYLE) */}
          <div className="rsc-hero-grid">
            {/* Card 1: Tax Compliances (Navy Card) */}
            <div className="rsc-navy-card">
              <h3 className="rsc-card-title">Tax Compliances</h3>
              <ul className="rsc-card-list">
                <li><Link href="/services/gst">GST</Link></li>
                <li><Link href="/services/income-tax">Income Tax</Link></li>
                <li><Link href="/services/income-tax">TDS / TCS</Link></li>
                <li><Link href="/services/income-tax">Professional Tax</Link></li>
                <li><Link href="/services/gst">VAT</Link></li>
                <li><Link href="/services/corporate-law">ROC compliances</Link></li>
                <li><Link href="/services/international-tax">NRI Taxation</Link></li>
              </ul>
            </div>

            {/* Card 2: CA Consulting Photo */}
            <div className="rsc-image-card">
              <Image
                src="/images/ca-consulting.jpg"
                alt="Chartered Accountant reviewing financial audit documents in Mumbai"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rsc-card-img"
                priority
              />
            </div>

            {/* Card 3: Audit & Assurance (Navy Card) */}
            <div className="rsc-navy-card">
              <h3 className="rsc-card-title">Audit &amp; Assurance</h3>
              <ul className="rsc-card-list">
                <li><Link href="/services/audit">Statutory Audit</Link></li>
                <li><Link href="/services/audit">Tax Audit</Link></li>
                <li><Link href="/services/audit">GST Audit</Link></li>
                <li><Link href="/services/audit">Internal Audit</Link></li>
                <li><Link href="/services/audit">Stock Audits</Link></li>
                <li><Link href="/services/audit">Certification of Investments &amp; Debtors</Link></li>
              </ul>
            </div>

            {/* Card 4: Tax Law Bare Acts Photo */}
            <div className="rsc-image-card">
              <Image
                src="/images/tax-law-books.jpg"
                alt="Income Tax, GST, and Companies Act law volumes in office library"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rsc-card-img"
              />
            </div>

            {/* Card 5: Other Services (Navy Card) */}
            <div className="rsc-navy-card">
              <h3 className="rsc-card-title">Other Services</h3>
              <ul className="rsc-card-list">
                <li><Link href="/services/cfo-advisory">Tax &amp; Financial Planning</Link></li>
                <li><Link href="/services/accounting">Accounting Services</Link></li>
                <li><Link href="/services/accounting">MIS Reporting</Link></li>
                <li><Link href="/services/cfo-advisory">Virtual CFO</Link></li>
                <li><Link href="/services/international-tax">International Taxation</Link></li>
                <li><Link href="/services/corporate-law">Company Formation</Link></li>
                <li><Link href="/services/corporate-law">ESIC, PF &amp; Labour Law</Link></li>
              </ul>
            </div>

            {/* Card 6: Modern Financial Workspace Photo */}
            <div className="rsc-image-card">
              <Image
                src="/images/finance-desk.jpg"
                alt="Modern corporate financial desk with audit sheets, laptop and calculator"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="rsc-card-img"
              />
            </div>
          </div>

          {/* FIRM PARTICULARS (ICAI Register Institutional Bar) */}
          <div className="register-bar-container">
            <div className="register-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Image src="/images/ca-logo.svg" alt="CA Logo" width={28} height={28} />
                <span className="register-title">Firm Particulars</span>
              </div>
              <span className="icai-tag">ICAI Registered</span>
            </div>
            <div className="register-grid">
              <div className="register-item">
                <span className="reg-label">Firm name</span>
                <span className="reg-val">Daksh Desai &amp; Associates, Chartered Accountants <span className="fill">[confirm name exactly as approved by ICAI]</span></span>
              </div>
              <div className="register-item">
                <span className="reg-label">ICAI FRN</span>
                <span className="reg-val"><span className="fill">[Firm Registration No. — awaiting ICAI]</span></span>
              </div>
              <div className="register-item">
                <span className="reg-label">Established</span>
                <span className="reg-val"><span className="fill">[year as per ICAI records]</span></span>
              </div>
              <div className="register-item">
                <span className="reg-label">Head office</span>
                <span className="reg-val">Mumbai</span>
              </div>
              <div className="register-item">
                <span className="reg-label">Core focus</span>
                <span className="reg-val">Tax · Audit · Advisory</span>
              </div>
              <div className="register-item">
                <span className="reg-label">Proprietor</span>
                <span className="reg-val">CA Daksh Desai, M. No. <span className="fill">[membership no.]</span></span>
              </div>
            </div>
            <p className="register-foot">Particulars as registered with the Institute of Chartered Accountants of India.</p>
          </div>
        </div>
      </section>

      {/* RSC CONTINUOUS RED TICKER RIBBON */}
      <TickerRibbon />

      {/* ABOUT THE FIRM */}
      <section className="section" id="about-snippet">
        <div className="container about-split-grid">
          <div className="about-visual-side">
            <div className="about-img-frame">
              <Image
                src="/images/india-map-advisory.jpg"
                alt="Pan-India Chartered Accountancy Advisory and Consultation"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-img-cover"
              />
            </div>
          </div>
          <div className="about-content-side">
            <span className="eyebrow-red">ABOUT THE FIRM</span>
            <h2 className="editorial-heading">
              Built on trust, <em>driven by precision</em>
            </h2>
            <p className="about-p">
              Established in <span className="fill">[year]</span>, Daksh Desai &amp; Associates is a Chartered Accountancy practice based in Mumbai. We aim to give every client the clarity and attention of an in-house team for taxation, accounts, audit and compliance.
            </p>
            <p className="about-p">
              We work with <span className="fill">[client types, e.g. SMEs, startups, professionals, HNIs and NRIs]</span>.
            </p>

            <div className="milestones-list">
              <div className="milestone-row">
                <span className="milestone-badge">Origin</span>
                <div className="milestone-text">
                  <strong>Founded upon qualifying from ICAI</strong>
                  <p>Built the practice ground-up in Mumbai with an uncompromising dedication to professional ethics.</p>
                </div>
              </div>
              <div className="milestone-row">
                <span className="milestone-badge">Reach</span>
                <div className="milestone-text">
                  <strong>Pan-India Compliance &amp; Advisory</strong>
                  <p>Advising growing businesses, emerging startups, and individuals across Mumbai and nationwide.</p>
                </div>
              </div>
              <div className="milestone-row">
                <span className="milestone-badge">Focus</span>
                <div className="milestone-text">
                  <strong>Direct access to the Chartered Accountant</strong>
                  <p>Every assignment is overseen with personalized attention, proactive deadlines, and end-to-end responsibility.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.75rem' }}>
              <Link href="/about" className="link-arrow">
                More about the firm <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US / OUR APPROACH (ICE BLUE SECTION) */}
      <section className="section section-ice" id="approach">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-red">WHY CHOOSE US</span>
            <h2 className="editorial-heading">
              The Daksh Desai &amp; Associates <em>difference</em>
            </h2>
            <p className="section-head-lede">
              A disciplined, partner-led approach to finance, taxation and statutory compliance.
            </p>
          </div>

          <div className="approach-grid-rsc">
            <div className="approach-card-rsc">
              <div className="approach-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="approach-card-title">Direct CA Access</h3>
              <p className="approach-card-desc">
                You deal with the proprietor directly on your matters — not junior teams. Fast responses with actionable clarity.
              </p>
            </div>

            <div className="approach-card-rsc">
              <div className="approach-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="approach-card-title">Absolute Confidentiality</h3>
              <p className="approach-card-desc">
                Your financial records and business data remain protected under the stringent confidentiality mandates of the ICAI Code of Ethics.
              </p>
            </div>

            <div className="approach-card-rsc">
              <div className="approach-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="approach-card-title">Timely Compliance</h3>
              <p className="approach-card-desc">
                Structured workflows to meet income tax, GST and MCA deadlines seamlessly without last-minute haste.
              </p>
            </div>

            <div className="approach-card-rsc">
              <div className="approach-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </div>
              <h3 className="approach-card-title">Proactive Advisory</h3>
              <p className="approach-card-desc">
                Advice ahead of deadlines. Planning before the due date rather than reacting after it to optimize compliance and deductions.
              </p>
            </div>

            <div className="approach-card-rsc">
              <div className="approach-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="approach-card-title">Personal Attention</h3>
              <p className="approach-card-desc">
                Advice grounded in your specific commercial facts and transaction mechanics, never generalized boilerplate templates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE (MIDNIGHT NAVY SECTION) */}
      <section className="section section-midnight" id="industries">
        <div className="container">
          <div className="section-head-center">
            <span className="eyebrow-accent">INDUSTRIES WE SERVE</span>
            <h2 className="editorial-heading-light">
              Trusted by businesses across India
            </h2>
            <p className="section-head-lede-light">
              From core operations to fast-growing ventures, we support diverse sectors with tailored taxation, compliance, audit, and advisory expertise.
            </p>
          </div>

          <div className="industries-pill-grid">
            <div className="industry-pill-item">
              <span className="industry-num">01</span>
              <span className="industry-name">Manufacturing <span className="fill">[or Industry 1]</span></span>
            </div>
            <div className="industry-pill-item">
              <span className="industry-num">02</span>
              <span className="industry-name">Pharma &amp; Healthcare <span className="fill">[or Industry 2]</span></span>
            </div>
            <div className="industry-pill-item">
              <span className="industry-num">03</span>
              <span className="industry-name">Software &amp; IT <span className="fill">[or Industry 3]</span></span>
            </div>
            <div className="industry-pill-item">
              <span className="industry-num">04</span>
              <span className="industry-name">Service Industries <span className="fill">[or Industry 4]</span></span>
            </div>
            <div className="industry-pill-item">
              <span className="industry-num">05</span>
              <span className="industry-name">Wholesalers <span className="fill">[or Industry 5]</span></span>
            </div>
            <div className="industry-pill-item">
              <span className="industry-num">06</span>
              <span className="industry-name">Retailers <span className="fill">[or Industry 6]</span></span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <span className="devnote devnote-dark">
              Pick the industries you serve. Ritesh Shah &amp; Co. lists Manufacturing, Pharma &amp; Healthcare, Software &amp; IT, Service industries, Wholesalers and Retailers. Your own focus (banks, NBFCs, AIFs, FPIs, InvITs/REITs, GIFT City units) can go here instead.
            </span>
          </div>
        </div>
      </section>

      {/* INSIGHTS PREVIEW */}
      <section className="section" id="insights-preview">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow-red">INSIGHTS</span>
            <h2 className="editorial-heading">Tax &amp; finance insights</h2>
            <p style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
              Analysis of tax amendments, regulatory notifications, and judicial rulings.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/insights" className="link-arrow">All articles <span>→</span></Link>
            </div>
          </div>
          <div className="split-body">
            <div className="insight-preview-card">
              <span className="insight-badge">Knowledge Bulletin</span>
              <h3 className="insight-card-title"><span className="fill">[Latest article title]</span></h3>
              <p className="insight-card-meta"><span className="fill">[date]</span> · <span className="fill">[one-line summary of key takeaways and statutory implications]</span></p>
              <div style={{ marginTop: '1rem' }}>
                <Link href="/insights" style={{ fontWeight: 600, color: 'var(--color-action-blue)' }}>Read analysis →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* READY TO CONNECT (CLEAN WHITE CTA SECTION) */}
      <section className="section section-cta-rsc" id="cta-connect">
        <div className="container" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto' }}>
          <h2 className="editorial-heading" style={{ fontSize: '2.4rem', color: 'var(--color-primary-navy)' }}>
            Ready to Connect?
          </h2>
          <p className="cta-rsc-desc">
            Whether you need help with returns, compliance, audit or tax strategy, write to us and we will discuss what fits your needs.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn-primary btn-lg" href="/contact">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
