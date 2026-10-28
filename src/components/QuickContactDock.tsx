'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function QuickContactDock() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="quick-contact-dock" aria-label="Quick Practice Inquiry">
      {isOpen && (
        <div className="dock-popover" role="dialog" aria-label="Contact Office">
          <div className="dock-popover-header">
            <div>
              <span className="dock-popover-badge">MUMBAI PRACTICE OFFICE</span>
              <h4 className="dock-popover-title">Direct Office Communication</h4>
            </div>
            <button
              type="button"
              className="dock-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close contact drawer"
            >
              ✕
            </button>
          </div>
          <div className="dock-popover-body">
            <p className="dock-popover-text">
              Consult with CA Daksh Desai regarding Income Tax, GST, Statutory Audit, or FEMA foreign remittances.
            </p>
            <div className="dock-action-btns">
              <Link
                href="/contact"
                className="btn btn-primary btn-sm"
                onClick={() => setIsOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Schedule Consultation
              </Link>
              <Link
                href="/contact#contact-channels"
                className="btn btn-outline btn-sm"
                onClick={() => setIsOpen(false)}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                View Office Particulars
              </Link>
            </div>
            <div className="dock-statutory-stamp">
              <span>ICAI Code of Ethics · Strictly Confidential</span>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        className={`dock-trigger-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Inquire with Practice Office"
      >
        <span className="dock-trigger-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span className="dock-trigger-text">Consult Office</span>
      </button>
    </aside>
  );
}

