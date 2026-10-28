'use client';

import { useEffect, useState } from 'react';

const DISCLAIMER_STORAGE_KEY = 'dda_icai_disclaimer_agreed';

export default function DisclaimerModal() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const hasAgreed = sessionStorage.getItem(DISCLAIMER_STORAGE_KEY) || localStorage.getItem(DISCLAIMER_STORAGE_KEY);
    if (!hasAgreed) {
      setShow(true);
    }

    const handleOpen = () => setShow(true);
    window.addEventListener('open-icai-disclaimer', handleOpen);
    return () => window.removeEventListener('open-icai-disclaimer', handleOpen);
  }, []);

  const handleAgree = () => {
    localStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
    sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
    setShow(false);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
      setShow(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
        setShow(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!show) return null;

  return (
    <div
      className="disclaimer-overlay"
      id="icaiDisclaimerOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimerModalTitle"
      onClick={handleBackdropClick}
    >
      <div className="disclaimer-modal">
        <span className="eyebrow-gold">ICAI COMPLIANCE NOTICE</span>
        <h2 id="disclaimerModalTitle" className="disclaimer-title">
          Mandatory Regulatory Disclaimer
        </h2>
        <p style={{ fontSize: '0.94rem', color: 'var(--color-text-body)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
          The rules of the Institute of Chartered Accountants of India do not permit Chartered Accountants to solicit work or advertise. By clicking &quot;I Agree &amp; Enter&quot;, you confirm that:
        </p>
        <ul style={{ paddingLeft: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-text-body)', fontSize: '0.92rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <li>You are seeking information about Daksh Desai &amp; Associates of your own accord, and there has been no advertisement, solicitation or inducement from the firm;</li>
          <li>The information on this site is general and is not professional advice;</li>
          <li>Using this site does not create a client relationship.</li>
        </ul>
        <div className="disclaimer-actions">
          <button type="button" className="btn btn-primary" id="icaiDisclaimerAgree" onClick={handleAgree}>
            I Agree &amp; Enter
          </button>
          <a className="btn btn-outline" href="https://www.google.com" rel="noopener">
            Leave Site
          </a>
        </div>
      </div>
    </div>
  );
}
