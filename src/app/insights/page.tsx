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
          <span className="eyebrow">Published articles (<span className="fill">[n]</span>)</span>
          
          <div style={{ border: '1px dashed var(--rule-strong)', borderRadius: 'var(--radius-md)', padding: '2rem', backgroundColor: 'var(--bg-surface)', marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--brass)' }}>
              <span className="fill">[category]</span>
            </span>
            <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: 'var(--ink-primary)' }}>
              <span className="fill">[Article title]</span>
            </strong>
            <span style={{ color: 'var(--ink-secondary)', fontSize: '0.95rem' }}>
              <span className="fill">[date]</span> · <span className="fill">[summary]</span>
            </span>
          </div>

          <span className="devnote">
            Add articles as you write them. Keep the page hidden at launch if none are ready.
          </span>
        </div>
      </section>
    </>
  );
}
