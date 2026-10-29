'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ReviewBanner() {
  const [fillCount, setFillCount] = useState<number>(0);
  const [blanksHidden, setBlanksHidden] = useState<boolean>(false);

  useEffect(() => {
    // Count fills after mount
    const count = document.querySelectorAll('.fill').length;
    setFillCount(count);
  }, []);

  const toggleBlanks = () => {
    const isHidden = document.body.classList.toggle('hide-blanks');
    setBlanksHidden(isHidden);
  };

  const openDisclaimer = () => {
    window.dispatchEvent(new Event('open-icai-disclaimer'));
  };

  return (
    <div className="review-banner" role="region" aria-label="Review bar">
      <div className="container">
        <div>
          <span className="review-badge">Preview for review</span>
          <span style={{ marginLeft: '0.5rem' }}>
            Yellow fields need your input: <strong>{fillCount > 0 ? fillCount : '0 (All credentials configured)'}</strong> on the site.
          </span>
        </div>
        <div className="review-actions">
          <button
            type="button"
            className="btn-pill-small"
            onClick={toggleBlanks}
            aria-pressed={!blanksHidden}
          >
            Highlight blanks: {blanksHidden ? 'Off' : 'On'}
          </button>
          <button
            type="button"
            className="btn-pill-small open-disclaimer-btn"
            onClick={openDisclaimer}
          >
            Show entry disclaimer
          </button>
          <Link href="/review" className="btn-pill-small">
            Open items &amp; developer notes →
          </Link>
        </div>
      </div>
    </div>
  );
}
