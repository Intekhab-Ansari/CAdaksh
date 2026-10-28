export default function TickerRibbon() {
  const items = [
    'DIRECT TAX LITIGATION & SCUTINY DEFENSE',
    'STATUTORY AUDITS UNDER COMPANIES ACT (SEC 139)',
    'GST 2B ITC INVOICE MATCHING & REFUNDS',
    'FEMA & FORM 15CA / 15CB FOREIGN REMITTANCES',
    'INTERNAL FINANCIAL CONTROLS (IFCoFR)',
    'VIRTUAL CFO & EXECUTIVE CASH FLOW MODELING',
    'MCA21 V3 ANNUAL ROC COMPLIANCES',
    'TAX AUDIT UNDER SECTION 44AB (FORM 3CD)',
    'CROSS-BORDER TRANSFER PRICING DOCUMENTATION',
    'STOCK AUDITS & PHYSICAL INVENTORY VERIFICATION',
    'MANDATORY 18-DIGIT ICAI UDIN AUTHENTICATION',
  ];

  return (
    <div className="ticker-ribbon-architectural" aria-label="Practice areas ticker">
      <div className="ticker-architectural-track">
        {/* Render twice for seamless continuous infinite scroll */}
        <div className="ticker-architectural-content">
          {items.map((item, idx) => (
            <span key={`t1-${idx}`} className="ticker-architectural-item">
              <span className="ticker-gold-star" aria-hidden="true">✦</span>
              {item}
            </span>
          ))}
        </div>
        <div className="ticker-architectural-content" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`t2-${idx}`} className="ticker-architectural-item">
              <span className="ticker-gold-star" aria-hidden="true">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
