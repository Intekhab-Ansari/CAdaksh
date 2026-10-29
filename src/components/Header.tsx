'use client';

import { useState, useEffect } from 'react';
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

  // Lock body scroll and listen for Escape key when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-lockup" href="/" aria-label="Daksh Desai & Associates Home">
            <div className="brand-emblem-wrap">
              <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={40} height={40} priority />
            </div>
            <div className="brand-text">
              <span className="brand-title">Daksh Desai &amp; Associates</span>
              <span className="brand-subtitle">CHARTERED ACCOUNTANTS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
              Contact Us
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              id="mobileNavBtn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-expanded={drawerOpen}
              aria-controls="mobileDrawer"
              aria-label="Toggle navigation menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="mobile-toggle-label">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        id="mobileDrawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        data-lenis-prevent
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDrawer();
        }}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <Image src="/images/ca-logo.svg" alt="CA Logo" width={32} height={32} />
              <div>
                <strong style={{ display: 'block', fontSize: '0.98rem', color: 'var(--color-primary-navy)', lineHeight: 1.2 }}>
                  Daksh Desai &amp; Associates
                </strong>
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', fontWeight: 700 }}>
                  CHARTERED ACCOUNTANTS · MUMBAI
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

          <div className="mobile-nav-scroll">
            <div className="mobile-nav-section-title">PRACTICE DIRECTORY</div>
            <nav className="mobile-nav-links" aria-label="Mobile Main Navigation">
              <Link href="/" onClick={closeDrawer} className={pathname === '/' ? 'active' : ''}>
                <span>Home</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/about" onClick={closeDrawer} className={isActive('/about') ? 'active' : ''}>
                <span>About the Practice</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/team" onClick={closeDrawer} className={isActive('/team') ? 'active' : ''}>
                <span>Proprietor &amp; Practice Desks</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/services" onClick={closeDrawer} className={isActive('/services') && pathname === '/services' ? 'active' : ''}>
                <span>Services Directory</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>

              {/* Sub-Desk Links */}
              <div className="mobile-sub-nav">
                <Link href="/services/income-tax" onClick={closeDrawer}>Income Tax &amp; AIS Scrutiny</Link>
                <Link href="/services/gst" onClick={closeDrawer}>GST Returns &amp; 2B Matching</Link>
                <Link href="/services/audit" onClick={closeDrawer}>Statutory &amp; Tax Audit (44AB)</Link>
                <Link href="/services/accounting" onClick={closeDrawer}>Accounting &amp; MIS Bookkeeping</Link>
                <Link href="/services/cfo-advisory" onClick={closeDrawer}>Virtual CFO &amp; Financial Advisory</Link>
                <Link href="/services/international-tax" onClick={closeDrawer}>Form 15CA/15CB Foreign Remittance</Link>
                <Link href="/services/corporate-law" onClick={closeDrawer}>Corporate Law &amp; MCA21 Filings</Link>
              </div>

              <Link href="/insights" onClick={closeDrawer} className={isActive('/insights') ? 'active' : ''}>
                <span>Tax Updates &amp; Bulletins</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/faq" onClick={closeDrawer} className={isActive('/faq') ? 'active' : ''}>
                <span>Client Guidance &amp; FAQ</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" onClick={closeDrawer} className={isActive('/contact') ? 'active' : ''}>
                <span>Chamber Office &amp; Inquiries</span>
                <span className="nav-arrow" aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>

          <div className="mobile-drawer-footer">
            <Link href="/contact" onClick={closeDrawer} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Schedule Consultation →
            </Link>
            <p style={{ marginTop: '0.85rem', fontSize: '0.74rem', color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.4 }}>
              Mumbai Practice Office · ICAI Reg. FRN <span className="fill">[FRN]</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
