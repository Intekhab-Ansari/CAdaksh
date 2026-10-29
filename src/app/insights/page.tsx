import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tax & Regulatory Insights | Daksh Desai & Associates · Chartered Accountants',
  description: 'Statutory commentary, tax updates, and regulatory circulars on Income Tax, GST, FEMA, and corporate law by Daksh Desai & Associates, Chartered Accountants, Mumbai.',
};

export default function InsightsPage() {
  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="insights-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>KNOWLEDGE BULLETINS &amp; STATUTORY COMMENTARY</span>
          </div>

          <h1 className="about-hero-title">
            Tax &amp; regulatory{' '}
            <span className="hero-serif-accent">practice insights.</span>
          </h1>

          <p className="about-hero-lede">
            Technical bulletins, judicial analyses, and compliance guides published by Daksh Desai &amp; Associates to help corporate leaders, entrepreneurs, and finance teams navigate evolving Indian tax laws and statutory frameworks with confidence.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">Direct Tax</span>
              <span className="about-pillar-lbl">CBDT &amp; JUDICIAL RULINGS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">GST Updates</span>
              <span className="about-pillar-lbl">COUNCIL NOTIFICATIONS &amp; ITC</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">MCA21 V3</span>
              <span className="about-pillar-lbl">COMPANIES ACT AMENDMENTS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">FEMA &amp; RBI</span>
              <span className="about-pillar-lbl">CROSS-BORDER REMITTANCES</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STATUTORY COMMENTARY */}
      <section className="section" id="featured-insight">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Featured Practice Memorandum</span>
            <h2>Statutory Analysis &amp; Commentary</h2>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, #0B1528 0%, #112540 100%)',
              border: '1px solid rgba(197, 160, 89, 0.45)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2rem, 4vw, 3.25rem)',
              color: '#FFFFFF',
              boxShadow: '0 20px 45px rgba(11, 21, 40, 0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  background: 'rgba(197, 160, 89, 0.2)',
                  color: '#F5D79E',
                  border: '1px solid rgba(197, 160, 89, 0.4)',
                }}
              >
                DIRECT TAX PRACTICE DESK
              </span>
              <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontFamily: 'var(--font-mono)' }}>
                STATUTORY MEMORANDUM · OCT 2026
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', color: '#FFFFFF', fontWeight: 800, lineHeight: 1.25, marginBottom: '1rem', maxWidth: '820px' }}>
              Navigating Section 148 Reassessment Proceedings &amp; Faceless Scrutiny Defense
            </h3>

            <p style={{ color: '#CBD5E1', fontSize: '1.02rem', lineHeight: 1.65, maxWidth: '780px', marginBottom: '1.5rem' }}>
              A technical examination of reassessment jurisprudence under the amended Sections 147–151 of the Income-tax Act, 1961. We analyze time-limits under Section 149, requirements for information suggesting income escaping assessment, drafting definitive replies to Section 148A(b) show-cause notices, and judicial precedents from the Hon’ble Supreme Court and Bombay High Court.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '1.25rem' }}>
              <span style={{ fontSize: '0.84rem', color: '#F5D79E', fontFamily: 'var(--font-mono)' }}>
                Authored by: CA Daksh Desai, ACA (M. No. 648747)
              </span>
              <Link
                href="/contact"
                className="btn btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #C5A059 0%, #A68037 100%)',
                  color: '#0B1528',
                  fontWeight: 700,
                  fontSize: '0.84rem',
                  padding: '0.55rem 1.15rem',
                }}
              >
                <span>Consult on Scrutiny Defense</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED INSIGHTS DIRECTORY */}
      <section className="section" id="insights-grid-section" style={{ background: '#F8FAFC', borderTop: '1px solid rgba(197, 160, 89, 0.15)' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Practice Circulars</span>
            <h2>Statutory Bulletins &amp; Compliance Guides</h2>
            <p style={{ maxWidth: '640px', color: 'var(--color-text-body)', marginTop: '0.5rem' }}>
              Technical summaries covering Income Tax, Goods &amp; Services Tax, MCA governance, and cross-border regulatory compliance.
            </p>
          </div>

          <div className="about-desks-grid">
            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">GOODS &amp; SERVICES TAX</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>OCT 2026</span>
              </div>
              <h3>GSTR-2B vs Books Reconciliation: Mitigating Rule 36(4) Ineligible ITC Demands</h3>
              <p>
                Actionable audit reconciliation workflows to detect supplier filing mismatches before filing GSTR-3B, preventing automated Section 16(2)(aa) disallowed credits and DRC-01B recovery demands.
              </p>
              <Link href="/services/gst" className="about-desk-link">
                <span>View GST Advisory Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CORPORATE LAW</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>SEP 2026</span>
              </div>
              <h3>Annual Compliance Protocols for Companies under Companies Act 2013</h3>
              <p>
                Essential statutory roadmaps for private limited entities: Form AOC-4 financial statement filing, Form MGT-7 annual returns, mandatory statutory auditor appointment under Section 139, and Director KYC.
              </p>
              <Link href="/services/corporate-law" className="about-desk-link">
                <span>View Corporate Desk Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">CROSS-BORDER &amp; FEMA</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>AUG 2026</span>
              </div>
              <h3>Form 15CB Attestation: Section 195 Withholding Tax &amp; DTAA Relief</h3>
              <p>
                Procedural requirements for outward foreign remittances: Tax Residency Certificate (TRC) validation, Form 10F electronic verification, Section 195 withholding thresholds, and Authorised Dealer bank clearance.
              </p>
              <Link href="/services/international-tax" className="about-desk-link">
                <span>View FEMA Advisory Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="about-desk-card">
              <div className="about-desk-top">
                <span className="about-desk-tag">DIRECT TAX</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>JUL 2026</span>
              </div>
              <h3>Presumptive Tax (Sec 44AD/44ADA) vs Mandatory Tax Audit (Sec 44AB)</h3>
              <p>
                Comparative analysis of presumptive schemes vs mandatory statutory tax audits. Evaluating ₹10 Crore digital safe harbors, books of account mandates under Section 44AA, and the 5-year lock-in consequences.
              </p>
              <Link href="/services/audit" className="about-desk-link">
                <span>View Audit Advisory Scope</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMBERS CONSULTATION CTA */}
      <section className="section" id="insights-cta" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="about-cta-card">
            <h2>Need statutory counsel on a specific tax or compliance matter?</h2>
            <p>
              Connect directly with CA Daksh Desai for formal assessment defense, tax planning, statutory audits, or cross-border FEMA advisory.
            </p>
            <div className="about-cta-btns">
              <Link href="/contact" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A68037 100%)', color: '#0B1528', fontWeight: 700 }}>
                <span>Schedule Practice Consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://wa.me/919819647471?text=Hello%20CA%20Daksh%20Desai%2C%20I%20would%20like%20to%20enquire%20regarding%20statutory%20insights."
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
