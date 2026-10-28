import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Daksh Desai & Associates · Chartered Accountants',
  description: 'Reach out to Daksh Desai & Associates, Chartered Accountants in Mumbai for income tax, GST, audits, accounting, and corporate compliance.',
};

export default function ContactPage() {
  return (
    <>
      <section className="section" id="contact-intro">
        <div className="container-narrow">
          <span className="eyebrow">Contact us</span>
          <h1>Let&apos;s simplify your taxation and compliance</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Reach out about income tax, GST, audit, accounting, international tax or corporate compliance.
          </p>
        </div>
      </section>

      <section className="section" id="contact-channels">
        <div className="container contact-grid">
          {/* Ways to Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <aside className="register-card" aria-label="Ways to connect">
              <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '1rem' }}>
                Ways to connect
              </h3>
              <dl className="register-dl">
                <dt className="register-dt">Email</dt>
                <dd className="register-dd"><span className="fill">[e.g. info@cadakshdesaiassociates.com]</span></dd>
                
                <dt className="register-dt">Call / WhatsApp</dt>
                <dd className="register-dd"><span className="fill">[+91 number]</span></dd>
                
                <dt className="register-dt">Office</dt>
                <dd className="register-dd"><span className="fill">[full office address, Mumbai PIN]</span></dd>
                
                <dt className="register-dt">Office hours</dt>
                <dd className="register-dd"><span className="fill">[e.g. Monday to Saturday, 10:00 AM – 7:00 PM IST]</span></dd>
                
                <dt className="register-dt">LinkedIn</dt>
                <dd className="register-dd"><span className="fill">[profile URL, or remove]</span></dd>
              </dl>
              <p className="register-foot">Find us: <span className="fill">[Google Maps link]</span></p>
            </aside>

            <ul className="ruled-list">
              <li><strong>Strictly confidential</strong></li>
              <li><strong>Direct consultation with a Chartered Accountant</strong></li>
              <li><strong>Clear engagement terms</strong></li>
            </ul>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section" id="how-we-work-steps">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">How we work</span>
            <h2>From enquiry to action</h2>
          </div>

          <ol className="steps-grid steps-grid-3">
            <li className="step-card">
              <span className="step-number">Step 1</span>
              <strong className="step-title">Share your requirement</strong>
              <span className="step-desc">Tell us what you need: tax planning, GST, a return, an audit, an NRI matter or company compliance.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 2</span>
              <strong className="step-title">Assessment call</strong>
              <span className="step-desc">We identify deadlines, risk areas and the right course for your matter.</span>
            </li>
            <li className="step-card">
              <span className="step-number">Step 3</span>
              <strong className="step-title">Action plan</strong>
              <span className="step-desc">You receive a clear plan with timelines and responsibilities for each task.</span>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
