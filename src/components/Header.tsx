'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

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
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand-lockup" href="/" aria-label="Daksh Desai & Associates Home">
            <div className="brand-emblem-wrap">
              <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={44} height={44} priority />
            </div>
            <div className="brand-text">
              <span className="brand-title">Daksh Desai &amp; Associates</span>
              <span className="brand-subtitle">Chartered Accountants</span>
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
            <Link href="/contact" className={isActive('/contact') ? 'active' : ''} aria-current={isActive('/contact') ? 'page' : undefined}>
              Contact
            </Link>
          </nav>

          <div className="header-actions">
            <ThemeToggle />
            <button
              type="button"
              className="mobile-toggle-btn"
              id="mobileNavBtn"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-expanded={drawerOpen}
              aria-controls="mobileDrawer"
            >
              Menu
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="brand-title" style={{ fontSize: '1.1rem' }}>Navigation</span>
            <button
              type="button"
              className="btn-pill-small"
              onClick={closeDrawer}
              style={{ color: 'var(--ink-primary)', borderColor: 'var(--rule-hairline)' }}
            >
              Close ✕
            </button>
          </div>
          <div className="mobile-nav-links">
            <Link href="/" onClick={closeDrawer}>Home</Link>
            <Link href="/about" onClick={closeDrawer}>About Us</Link>
            <Link href="/team" onClick={closeDrawer}>Our Team</Link>
            <Link href="/services" onClick={closeDrawer}>Services Overview</Link>
            <Link href="/services/income-tax" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ Income Tax
            </Link>
            <Link href="/services/gst" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ GST
            </Link>
            <Link href="/services/international-tax" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ International Taxation
            </Link>
            <Link href="/services/audit" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ Audit &amp; Assurance
            </Link>
            <Link href="/services/accounting" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ Accounting &amp; MIS
            </Link>
            <Link href="/services/cfo-advisory" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ Virtual CFO &amp; Advisory
            </Link>
            <Link href="/services/corporate-law" onClick={closeDrawer} style={{ paddingLeft: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              ↳ Labour &amp; Corporate Law
            </Link>
            <Link href="/insights" onClick={closeDrawer}>Insights</Link>
            <Link href="/faq" onClick={closeDrawer}>FAQ</Link>
            <Link href="/contact" onClick={closeDrawer}>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
