import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Daksh Desai & Associates · Chartered Accountants',
  description: 'Daksh Desai & Associates is a Mumbai-based Chartered Accountancy firm supporting businesses, entrepreneurs, professionals and individuals with finance, taxation and compliance.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section" id="about-intro">
        <div className="container-narrow">
          <span className="eyebrow">About Us</span>
          <h1>Navigating finance and compliance with clarity and confidence</h1>
          <p className="hero-lede" style={{ marginTop: '1.25rem' }}>
            Daksh Desai &amp; Associates is a Chartered Accountancy firm established in <span className="fill">[year]</span> by CA Daksh Desai.
          </p>
        </div>
      </section>

      <section className="section" id="the-firm">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Who we are</span>
            <h2>The firm</h2>
          </div>
          <div className="split-body">
            <p>We are a Mumbai-based firm supporting businesses, entrepreneurs, professionals and individuals with finance, taxation and compliance.</p>
            <p>We go beyond routine compliance to give practical, technology-enabled advice suited to each client, so that financial information turns into sound business decisions.</p>
            
            <aside className="register-card" style={{ marginTop: '0.75rem', maxWidth: '440px' }} aria-label="Firm registration details">
              <dl className="register-dl">
                <dt className="register-dt">Established</dt>
                <dd className="register-dd"><span className="fill">[year]</span></dd>
                
                <dt className="register-dt">Head office</dt>
                <dd className="register-dd">Mumbai</dd>
                
                <dt className="register-dt">Core focus</dt>
                <dd className="register-dd">Tax · Audit · Advisory</dd>
                
                <dt className="register-dt">ICAI FRN</dt>
                <dd className="register-dd"><span className="fill">[FRN]</span></dd>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" id="vision">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Vision</span>
            <h2>Our vision</h2>
          </div>
          <div className="split-body">
            <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.25rem, 2.5vw, 1.55rem)', lineHeight: 1.5, color: 'var(--ink-primary)', borderLeft: '3px solid var(--brass)', paddingLeft: '1.5rem' }}>
              To be a dependable, long-term professional partner to our clients through complete, ethical and solution-focused services.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="section" id="what-we-do">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Services</span>
            <h2>What we do</h2>
            <p>Integrated services under one roof, so clients get consistent advice across tax, accounts and compliance.</p>
          </div>
          <div className="split-body">
            <ul className="ruled-list">
              <li><strong>Audit &amp; Assurance</strong></li>
              <li><strong>Income Tax &amp; GST</strong></li>
              <li><strong>Accounting &amp; Bookkeeping</strong></li>
              <li><strong>MIS &amp; Financial Reporting</strong></li>
              <li><strong>International Taxation &amp; Transfer Pricing</strong></li>
              <li><strong>Labour &amp; Corporate Law Compliance</strong></li>
              <li><strong>Business Advisory</strong></li>
              <li><strong>Virtual CFO Support</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="how-we-work">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Approach</span>
            <h2>How we work</h2>
          </div>
          <div className="split-body">
            <ul className="ruled-list">
              <li>
                <strong>Direct professional interaction</strong>
                <span>Your queries are handled by a qualified Chartered Accountant.</span>
              </li>
              <li>
                <strong>Clear engagement terms</strong>
                <span>Scope of work agreed before an assignment begins.</span>
              </li>
              <li>
                <strong>Technology integration</strong>
                <span>Work on Tally, Zoho Books, SAP and other standard accounting software.</span>
              </li>
              <li>
                <strong>Notice assistance</strong>
                <span>Factual responses and documentation for income tax and GST proceedings.</span>
              </li>
              <li>
                <strong>Timely compliance support</strong>
                <span>Workflows built around income tax, GST and MCA deadlines.</span>
              </li>
              <li>
                <strong>Professional ethics</strong>
                <span>Work carried out under the ICAI Code of Ethics and applicable quality standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
