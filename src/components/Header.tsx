'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      {/* Top Institutional Credential Ribbon */}
      <div className="header-top-bar">
        <div className="container header-top-inner">
          <div className="header-top-left">
            <span className="inst-dot" aria-hidden="true" />
            <span>Chartered Accountancy Practice · Mumbai, India</span>
            <span className="inst-sep">|</span>
            <span>FRN: <span className="fill">[FRN]</span></span>
          </div>
          <div className="header-top-right">
            <span>ICAI Empanelled Register</span>
            <span className="inst-sep">|</span>
            <Link href="/disclaimer" className="header-top-link">ICAI Disclaimer</Link>
            <span className="inst-sep">|</span>
            <Link href="/privacy" className="header-top-link">DPDP 2023 Notice</Link>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-lockup" href="/" aria-label="Daksh Desai & Associates Home">
            <div className="brand-emblem-wrap">
              <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={44} height={44} priority />
            </div>
            <div className="brand-text">
              <span className="brand-title">Daksh Desai &amp; Associates</span>
              <span className="brand-subtitle">CHARTERED ACCOUNTANTS</span>
            </div>
          </Link>

          <nav className="desktop-nav" aria-label="Main Navigation">
            <Link href="/" className={isActive('/') ? 'active' : ''} aria-current={isActive('/') ? 'page' : undefined}>
              Home
            </Link>
            <Link href="/about" className={isActive('/about') ? 'active' : ''} aria-current={isActive('/about') ? 'page' : undefined}>
              About Us
            </Link>
            <Link href="/team" className={isActive('/team') ? 'active' : ''} aria-current={isActive('/team') ? 'page' : undefined}>
              Our Team
            </Link>
            <Link href="/services" className={isActive('/services') ? 'active' : ''} aria-current={isActive('/services') ? 'page' : undefined}>
              Services
            </Link>
            <Link href="/insights" className={isActive('/insights') ? 'active' : ''} aria-current={isActive('/insights') ? 'page' : undefined}>
              Insights
            </Link>
            <Link href="/faq" className={isActive('/faq') ? 'active' : ''} aria-current={isActive('/faq') ? 'page' : undefined}>
              FAQ
            </Link>
          </nav>

          <div className="header-actions">
            <Link href="/contact" className="header-contact-btn">
              Consult Office
            </Link>
            <button
              type="button"
              className="mobile-toggle-btn"
              id="mobileNavBtn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-expanded={drawerOpen}
              aria-controls="mobileDrawer"
              aria-label="Toggle navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        id="mobileDrawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDrawer();
        }}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <Image src="/images/ca-logo.svg" alt="CA Logo" width={34} height={34} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-primary-navy)' }}>
                  Daksh Desai &amp; Associates
                </strong>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
                  Chartered Accountants
                </span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={closeDrawer}
              aria-label="Close navigation menu"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav-links" aria-label="Mobile Main Navigation">
            <Link href="/" onClick={closeDrawer} className={isActive('/') ? 'active' : ''}>
              Home
            </Link>
            <Link href="/about" onClick={closeDrawer} className={isActive('/about') ? 'active' : ''}>
              About Us
            </Link>
            <Link href="/team" onClick={closeDrawer} className={isActive('/team') ? 'active' : ''}>
              Our Team
            </Link>
            <Link href="/services" onClick={closeDrawer} className={isActive('/services') ? 'active' : ''}>
              Services Directory
            </Link>
            <Link href="/insights" onClick={closeDrawer} className={isActive('/insights') ? 'active' : ''}>
              Tax &amp; Finance Insights
            </Link>
            <Link href="/faq" onClick={closeDrawer} className={isActive('/faq') ? 'active' : ''}>
              FAQ &amp; Statutory Guidance
            </Link>
            <Link href="/contact" onClick={closeDrawer} className={isActive('/contact') ? 'active' : ''}>
              Contact &amp; Consultation
            </Link>
          </nav>

          <div className="mobile-drawer-footer">
            <Link href="/contact" onClick={closeDrawer} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Schedule Consultation
            </Link>
            <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--color-text-muted)', textAlign: 'center' }}>
              Mumbai Practice Office · ICAI Reg. FRN <span className="fill">[FRN]</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
