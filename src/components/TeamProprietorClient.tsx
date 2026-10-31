'use client';

import Image from 'next/image';
import { useSiteConfig } from '@/context/SiteConfigContext';

export default function TeamProprietorClient() {
  const { config } = useSiteConfig();
  const cleanNumber = (config.whatsapp || config.phone || '919819647471').replace(/[^0-9]/g, '');

  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="team-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>LEADERSHIP &amp; STATUTORY DESKS · MUMBAI CHAMBERS</span>
          </div>

          <h1 className="about-hero-title">
            Leadership &amp; specialised{' '}
            <span className="hero-gold-accent">practice desks.</span>
          </h1>

          <p className="about-hero-lede">
            {config.firmName} operates under disciplined, partner-led stewardship. Every statutory audit, assessment proceeding, and corporate advisory is directly supervised and executed by qualified Chartered Accountants with unwavering statutory rigour.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">{config.proprietorName}</span>
              <span className="about-pillar-lbl">PROPRIETOR &amp; PRINCIPAL</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">ACA, B.Com</span>
              <span className="about-pillar-lbl">PROFESSIONAL QUALIFICATIONS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">M. No. {config.memberNo}</span>
              <span className="about-pillar-lbl">ICAI MEMBERSHIP NUMBER</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">FRN {config.frn}</span>
              <span className="about-pillar-lbl">FIRM REGISTRATION NUMBER</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROPRIETOR & PRINCIPAL SECTION */}
      <section className="section" id="proprietor-section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Practice Leadership</span>
            <h2>Principal &amp; Managing Proprietor</h2>
          </div>

          <div
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              borderRadius: '24px',
              padding: 'clamp(2.5rem, 5vw, 4rem)',
              boxShadow: '0 20px 50px rgba(11, 21, 40, 0.06)',
            }}
          >
            <div
              className="proprietor-flex-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'clamp(2.5rem, 5vw, 4.5rem)',
                alignItems: 'flex-start',
              }}
            >
              {/* Photo Card with Gold Trim & Prominent Dimensions */}
              <div
                className="proprietor-photo-card"
                style={{
                  flex: '0 0 340px',
                  width: '340px',
                  maxWidth: '100%',
                }}
              >
                <div
                  className="proprietor-photo-wrapper"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '440px',
                    overflow: 'hidden',
                    background: '#0B1528',
                    borderRadius: '16px 16px 0 0',
                  }}
                >
                  <Image
                    src={config.proprietorPhoto || '/images/ca-daksh-desai-executive.jpg'}
                    alt={`${config.proprietorName} - Proprietor & Principal, ${config.firmName}`}
                    width={400}
                    height={520}
                    priority
                    className="proprietor-photo-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                  />
                </div>
                <div
                  className="proprietor-photo-badge"
                  style={{
                    background: '#0B1528',
                    color: '#F5D79E',
                    padding: '0.75rem 1rem',
                    textAlign: 'center',
                    borderTop: '1px solid rgba(197, 160, 89, 0.4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.2rem',
                    borderRadius: '0 0 16px 16px',
                  }}
                >
                  <span
                    className="badge-name"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 750,
                      letterSpacing: '0.08em',
                      color: '#FFF0BA',
                    }}
                  >
                    {config.proprietorName.toUpperCase()}
                  </span>
                  <span
                    className="badge-meta"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      color: '#C5A059',
                    }}
                  >
                    ACA (ICAI) · M. NO. {config.memberNo} · FRN {config.frn}
                  </span>
                </div>
              </div>

              {/* Bio & Credentials Details */}
              <div
                className="proprietor-details-col"
                style={{
                  flex: '1 1 420px',
                  minWidth: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-primary-navy)', margin: '0 0 0.4rem 0', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                    {config.proprietorName}
                  </h3>
                  <p style={{ fontWeight: 650, color: 'var(--color-gold-deep)', margin: 0, fontSize: '1.08rem' }}>
                    {config.proprietorTitle || 'Proprietor & Principal · Associate Chartered Accountant (ACA) · B.Com'}
                  </p>
                </div>

                <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--color-text-body)', margin: 0, fontWeight: 500, maxWidth: '640px' }}>
                  {config.proprietorBio ||
                    'Direct partner-led counsel across corporate taxation, statutory audits, GST compliance, and cross-border FEMA advisory.'}
                </p>

                <div
                  className="register-card"
                  style={{
                    padding: '1.6rem 2rem',
                    boxShadow: '0 8px 24px rgba(11, 21, 40, 0.04)',
                    maxWidth: '640px',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    borderRadius: '12px',
                    background: '#FFFFFF',
                  }}
                >
                  <dl
                    className="register-dl"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(120px, 150px) 1fr',
                      gap: '0.9rem 1.6rem',
                    }}
                  >
                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Qualification</dt>
                    <dd className="register-dd" style={{ fontWeight: 600, color: 'var(--color-primary-navy)', margin: 0 }}>
                      {config.proprietorDegree ? `Associate Chartered Accountant (ACA, ICAI) · ${config.proprietorDegree}` : 'Associate Chartered Accountant (ACA, ICAI) · B.Com'}
                    </dd>

                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Registration</dt>
                    <dd className="register-dd" style={{ fontWeight: 600, color: 'var(--color-primary-navy)', margin: 0 }}>
                      ICAI M. No. {config.memberNo} · Firm FRN: {config.frn}
                    </dd>

                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Chambers</dt>
                    <dd className="register-dd" style={{ margin: 0 }}>Borivali West &amp; Nariman Point, Mumbai</dd>

                    <dt className="register-dt" style={{ fontWeight: 650, color: 'var(--color-text-muted)' }}>Direct Contact</dt>
                    <dd className="register-dd" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0 }}>
                      <a href={`tel:${config.phone}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 650, textDecoration: 'none' }}>
                        {config.phoneFormatted}
                      </a>
                      <a href={`mailto:${config.emailPrimary}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                        {config.emailPrimary}
                      </a>
                      {config.emailSecondary && (
                        <a href={`mailto:${config.emailSecondary}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                          {config.emailSecondary}
                        </a>
                      )}
                    </dd>
                  </dl>
                </div>

                <div className="profile-action-group">
                  {config.linkedinUrl && (
                    <a
                      href={config.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="profile-action-btn profile-btn-linkedin"
                      aria-label={`Connect with ${config.proprietorName} on LinkedIn`}
                    >
                      <span className="btn-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                        </svg>
                      </span>
                      <span>Connect on LinkedIn</span>
                      <span className="btn-arrow" aria-hidden="true">↗</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/${cleanNumber}?text=Hello%20${encodeURIComponent(config.proprietorName)}%2C%20I%20would%20like%20to%20enquire%20regarding%20statutory%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-action-btn profile-btn-whatsapp"
                    aria-label={`Direct WhatsApp with ${config.proprietorName}`}
                  >
                    <span className="btn-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
                      </svg>
                    </span>
                    <span>Direct WhatsApp</span>
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

