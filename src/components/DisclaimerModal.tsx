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
  }, []);

  const handleAgree = () => {
    localStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
    sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
    setShow(false);
    const overlay = document.getElementById('icaiDisclaimerOverlay');
    if (overlay) overlay.classList.remove('show');
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
      setShow(false);
      e.currentTarget.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        sessionStorage.setItem(DISCLAIMER_STORAGE_KEY, 'true');
        setShow(false);
        const overlay = document.getElementById('icaiDisclaimerOverlay');
        if (overlay) overlay.classList.remove('show');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`disclaimer-overlay ${show ? 'show' : ''}`}
      id="icaiDisclaimerOverlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimerModalTitle"
      onClick={handleBackdropClick}
    >
      <div className="disclaimer-modal">
        <span className="eyebrow">Before you continue</span>
        <h2 id="disclaimerModalTitle">Disclaimer</h2>
        <p>The rules of the Institute of Chartered Accountants of India do not permit Chartered Accountants to solicit work or advertise. By clicking &quot;I agree&quot;, you confirm that:</p>
        <ul className="disclaimer-points">
          <li>you are seeking information about Daksh Desai &amp; Associates of your own accord, and there has been no advertisement, solicitation or inducement from the firm;</li>
          <li>the information on this site is general and is not professional advice;</li>
          <li>using this site does not create a client relationship.</li>
        </ul>
        <div className="btn-group" style={{ marginTop: '0.5rem' }}>
          <button type="button" className="btn btn-primary" id="icaiDisclaimerAgree" onClick={handleAgree}>
            I agree
          </button>
          <a className="btn btn-ghost" href="https://www.google.com" rel="noopener">
            Leave site
          </a>
        </div>
      </div>
    </div>
  );
}
