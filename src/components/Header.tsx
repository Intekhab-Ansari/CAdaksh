'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const closeMenu = () => setMenuOpen(false);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track scroll position for dynamic glassmorphism header elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <Link className="brand-lockup" href="/" aria-label="Daksh Desai & Associates Home">
            <div className="brand-emblem-wrap">
              <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={38} height={38} priority />
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
            <a
              href="tel:+919819647471"
              className="header-chambers-badge"
              title="Direct Chambers Telephone: +91 98196 47471"
              aria-label="Direct Chambers Telephone: +91 98196 47471"
            >
              <span className="badge-pulse-dot" aria-hidden="true" />
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span className="badge-tel-num">+91 98196 47471</span>
            </a>

            <Link href="/contact" className="header-contact-btn">
              <span>Contact Us</span>
              <span className="contact-btn-arrow" aria-hidden="true">→</span>
            </Link>

            {/* Mobile / Tablet Toggle Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              id="mobileNavBtn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobileQuickMenu"
              aria-label="Toggle Quick Navigation Menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <span className="mobile-toggle-label">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Click-outside backdrop */}
      {menuOpen && (
        <div
          className="quick-menu-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Compact Floating Quick Menu Popover */}
      <div
        className={`quick-menu-card ${menuOpen ? 'open' : ''}`}
        id="mobileQuickMenu"
        role="dialog"
        aria-modal="true"
        aria-label="Quick Practice Menu"
      >
        {/* Card Header */}
        <div className="quick-menu-header">
          <span className="quick-menu-tag">QUICK MENU</span>
          <button
            type="button"
            className="quick-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Top Segmented Tabs (Guaranteed Single-Line) */}
        <div className="quick-menu-tabs">
          <Link href="/services" onClick={closeMenu} className={`quick-tab-pill ${isActive('/services') ? 'active' : ''}`}>
            <span className="tab-icon" aria-hidden="true">✦</span>
            <span style={{ whiteSpace: 'nowrap' }}>Practice Desks</span>
          </Link>
          <Link href="/contact" onClick={closeMenu} className={`quick-tab-pill ${isActive('/contact') ? 'active' : ''}`}>
            <span className="tab-icon" aria-hidden="true">🏛</span>
            <span style={{ whiteSpace: 'nowrap' }}>Chambers</span>
          </Link>
        </div>

        {/* Navigation Items List with Left Icons & Right Badges */}
        <nav className="quick-menu-nav" aria-label="Quick Navigation Links">
          <Link href="/" onClick={closeMenu} className={`quick-menu-item ${pathname === '/' ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-cyan" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </span>
              <span className="item-label">Home</span>
            </span>
            <span className="item-right-arrow" aria-hidden="true">›</span>
          </Link>

          <Link href="/about" onClick={closeMenu} className={`quick-menu-item ${isActive('/about') ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-gold" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
              </span>
              <span className="item-label">About Practice</span>
            </span>
            <span className="item-right-arrow" aria-hidden="true">›</span>
          </Link>

          <Link href="/team" onClick={closeMenu} className={`quick-menu-item ${isActive('/team') ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-blue" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </span>
              <span className="item-label">Proprietor &amp; Team</span>
            </span>
            <span className="item-right-arrow" aria-hidden="true">›</span>
          </Link>

          <Link href="/services" onClick={closeMenu} className={`quick-menu-item ${isActive('/services') ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-gold" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
              </span>
              <span className="item-label">Services Scope</span>
            </span>
            <span className="item-badge gold-badge">7 Desks</span>
          </Link>

          <Link href="/insights" onClick={closeMenu} className={`quick-menu-item ${isActive('/insights') ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-cyan" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </span>
              <span className="item-label">Tax Bulletins</span>
            </span>
            <span className="item-right-arrow" aria-hidden="true">›</span>
          </Link>

          <Link href="/faq" onClick={closeMenu} className={`quick-menu-item ${isActive('/faq') ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-blue" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              </span>
              <span className="item-label">Client FAQ</span>
            </span>
            <span className="item-right-arrow" aria-hidden="true">›</span>
          </Link>

          <Link href="/contact" onClick={closeMenu} className={`quick-menu-item ${isActive('/contact') ? 'active' : ''}`}>
            <span className="item-left">
              <span className="item-icon icon-gold" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <span className="item-label">Chambers Office</span>
            </span>
            <span className="item-badge blue-badge">Mumbai</span>
          </Link>
        </nav>

        {/* Card Footer Consultation CTA */}
        <div className="quick-menu-foot">
          <Link href="/contact" onClick={closeMenu} className="quick-menu-cta">
            <span>Schedule Consultation</span>
            <span className="cta-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
