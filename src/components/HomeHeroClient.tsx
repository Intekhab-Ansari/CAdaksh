'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSiteConfig } from '@/context/SiteConfigContext';

export default function HomeHeroClient() {
  const { config } = useSiteConfig();

  return (
    <section className="section hero-rsc" id="home-hero">
      {/* Architectural Ambient Hero Background */}
      <div className="hero-backdrop-container" aria-hidden="true">
        <Image
          src={config.heroBackdropImage || '/images/hero-bg.jpg'}
          alt=""
          fill
          priority
          quality={92}
          className="hero-backdrop-img"
          sizes="100vw"
        />
        <div className="hero-backdrop-scrim" />
        <div className="hero-backdrop-glow" />
      </div>

      <div className="container hero-content-relative">
        <div className="hero-header-wrap">
          <div className="hero-eyebrow-seal">
            <span className="seal-dot">✦</span>
            {config.heroEyebrow || 'CHARTERED ACCOUNTANTS · MUMBAI · ICAI REGISTERED PRACTICE'}
          </div>
          <h1 className="hero-main-title">
            <span className="text-reveal-mask">
              <span className="text-reveal-line">{config.heroTitleLine1 || 'Taxation, Audit,'}</span>
            </span>
            <span className="text-reveal-mask">
              <span className="text-reveal-line">
                {config.heroTitleLine2 ? (
                  config.heroTitleLine2.includes('&') ? (
                    <>
                      {config.heroTitleLine2.split('&')[0]}&amp;{' '}
                      <span className="hero-gold-accent">{config.heroTitleLine2.split('&')[1]?.trim()}</span>
                    </>
                  ) : (
                    <span className="hero-gold-accent">{config.heroTitleLine2}</span>
                  )
                ) : (
                  <>
                    Accounting &amp; <span className="hero-gold-accent">Advisory</span>
                  </>
                )}
              </span>
            </span>
          </h1>
          <p className="hero-sublede">
            {config.heroSublede ||
              'We provide comprehensive counsel across direct tax litigation, GST compliance, statutory audit, and corporate governance for enterprises, family offices, and professionals across India and abroad.'}
          </p>
          <div className="hero-btn-group">
            <Link className="btn btn-primary btn-lg" href="/services">
              Explore Practice Scope <span className="btn-arrow-gold">→</span>
            </Link>
            <Link className="btn btn-outline btn-lg" href="/contact">
              Consult Practice Office
            </Link>
          </div>

          {/* TRUST CREDENTIAL BADGES */}
          <div className="hero-trust-badges">
            <span className="trust-badge-item">
              <span className="badge-bullet">✦</span>
              ICAI Registered Practice · FRN {config.frn}
            </span>
            <span className="trust-badge-item">
              <span className="badge-bullet">✦</span>
              Direct Partner-Led Counsel
            </span>
            <span className="trust-badge-item">
              <span className="badge-bullet">✦</span>
              18-Digit UDIN Verified Reports
            </span>
            <span className="trust-badge-item">
              <span className="badge-bullet">✦</span>
              Dual Chambers: Borivali West &amp; Nariman Point
            </span>
          </div>
        </div>

        {/* FIRM PARTICULARS (ICAI Register Institutional Bar) */}
        <div className="register-bar-container">
          <div className="register-header">
            <div className="register-header-left">
              <div className="register-ca-badge">
                <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={34} height={34} />
              </div>
              <div>
                <div className="register-title-row">
                  <span className="register-title">Firm Particulars &amp; Statutory Identity</span>
                  <span className="register-verified-badge">✓ ICAI Registered</span>
                </div>
                <span className="register-subtitle">
                  <span className="sub-star">✦</span> Governed under the Chartered Accountants Act, 1949 &amp; Code of Ethics
                </span>
              </div>
            </div>
            <div className="icai-tag-pill">
              <span className="badge-pulse-dot" aria-hidden="true" />
              <span>ICAI REGISTERED PRACTICE · WIRC</span>
            </div>
          </div>

          <div className="register-grid">
            {/* Card 1: Firm Name */}
            <div className="register-item-card">
              <div className="reg-card-top">
                <span className="reg-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
                </span>
                <span className="reg-label">PRACTICE NAME</span>
              </div>
              <div className="reg-val-main">{config.firmName}</div>
              <div className="reg-val-sub">Chartered Accountants · Sole Practice</div>
            </div>

            {/* Card 2: ICAI FRN */}
            <div className="register-item-card register-highlight-card">
              <div className="reg-card-top">
                <span className="reg-icon-box reg-icon-gold" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </span>
                <span className="reg-label">ICAI FIRM REGISTRATION NO.</span>
              </div>
              <div className="reg-val-main reg-val-mono">
                <span>{config.frn}</span>
                <span className="val-pill-verified">✓ Verified</span>
              </div>
              <div className="reg-val-sub">Western India Regional Council (WIRC)</div>
            </div>

            {/* Card 3: Established */}
            <div className="register-item-card">
              <div className="reg-card-top">
                <span className="reg-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span className="reg-label">ESTABLISHED IN MUMBAI</span>
              </div>
              <div className="reg-val-main reg-val-mono">{config.establishedYear || '2026'}</div>
              <div className="reg-val-sub">Active Institutional Standing</div>
            </div>

            {/* Card 4: Chambers */}
            <div className="register-item-card">
              <div className="reg-card-top">
                <span className="reg-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="reg-label">DUAL PRACTICE CHAMBERS</span>
              </div>
              <div className="reg-val-main">Borivali West &amp; Nariman Point</div>
              <div className="reg-val-sub">Suburban HQ &amp; South Mumbai Financial District</div>
            </div>

            {/* Card 5: Core Focus */}
            <div className="register-item-card">
              <div className="reg-card-top">
                <span className="reg-icon-box" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </span>
                <span className="reg-label">CORE STATUTORY SCOPE</span>
              </div>
              <div className="reg-val-pills">
                <span className="scope-pill">Direct Tax</span>
                <span className="scope-pill">GST</span>
                <span className="scope-pill">Statutory Audit</span>
                <span className="scope-pill">Advisory</span>
              </div>
              <div className="reg-val-sub">Corporate &amp; Individual Practice</div>
            </div>

            {/* Card 6: Proprietor */}
            <div className="register-item-card register-highlight-card">
              <div className="reg-card-top">
                <span className="reg-icon-box reg-icon-gold" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <span className="reg-label">PROPRIETOR &amp; PRINCIPAL</span>
              </div>
              <div className="reg-val-main">{config.proprietorName}</div>
              <div className="reg-val-sub reg-val-mono">ICAI Member No. <strong>{config.memberNo}</strong> · B.Com</div>
            </div>
          </div>

          <div className="register-foot">
            <div className="register-foot-statute">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span>Statutory particulars registered in the official ICAI Firm Register (FRN: {config.frn} · M. No. {config.memberNo}).</span>
            </div>
            <div className="register-udin-badge">
              <span className="udin-star">✦</span>
              <span>Mandatory 18-Digit UDIN Generated on All Attestations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

