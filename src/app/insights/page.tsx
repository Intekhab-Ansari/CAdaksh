import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tax & Finance Insights | Daksh Desai & Associates · Chartered Accountants',
  description: 'Articles and guides on income tax, GST and corporate compliance from Daksh Desai & Associates, Chartered Accountants, Mumbai.',
};

export default function InsightsPage() {
  return (
    <>
      <section className="section" id="insights-intro">
        <div className="container-narrow">
          <span className="eyebrow">Insights</span>
          <h1>Tax &amp; finance insights</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            Articles and guides on income tax, GST and corporate compliance.
          </p>
        </div>
      </section>

      <section className="section" id="insights-list">
        <div className="container-narrow">
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '2.5rem', backgroundColor: '#FFFFFF', marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold-deep)', fontWeight: 700 }}>
              ✦ Statutory Practice Bulletin
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary-navy)', margin: 0, fontWeight: 700 }}>
              Statutory Bulletins &amp; Regulatory Commentary
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.02rem', lineHeight: '1.65', margin: 0 }}>
              Daksh Desai &amp; Associates periodically issues analytical bulletins and statutory circulars covering Finance Act amendments, GST Council notifications, ITAT judicial precedents, and RBI cross-border compliance directions.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              For specific tax queries, statutory appeals defense, or practice advisory, please contact our Mumbai chambers directly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
