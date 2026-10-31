import type { Metadata } from 'next';
import ContactChannelsClient from '@/components/ContactChannelsClient';

export const metadata: Metadata = {
  title: 'Contact Us | Daksh Desai & Associates · Chartered Accountants',
  description: 'Reach out to Daksh Desai & Associates, Chartered Accountants in Mumbai for income tax, GST, audits, accounting, and corporate compliance.',
};

export default function ContactPage() {
  return (
    <>
      <ContactChannelsClient />

      {/* HOW WE WORK (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="how-we-work-steps">
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
