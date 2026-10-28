export default function TickerRibbon() {
  const items = [
    'TAXATION',
    'STATUTORY AUDIT',
    'TAX AUDIT',
    'GST AUDIT',
    'INTERNAL AUDIT',
    'STOCK AUDITS',
    'CERTIFICATION OF INVESTMENTS & DEBTORS',
    'MIS REPORTING',
    'NRI TAXATION',
    'VIRTUAL CFO & ADVISORY',
    'ROC & MCA COMPLIANCES',
    'TRANSFER PRICING',
  ];

  return (
    <div className="ticker-ribbon" aria-label="Practice areas ticker">
      <div className="ticker-track">
        {/* Render twice for seamless continuous infinite scroll */}
        <div className="ticker-content">
          {items.map((item, idx) => (
            <span key={`t1-${idx}`} className="ticker-item">
              <span className="ticker-dot">•</span>
              {item}
            </span>
          ))}
        </div>
        <div className="ticker-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`t2-${idx}`} className="ticker-item">
              <span className="ticker-dot">•</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
