'use client';

import Image from 'next/image';
import { useSiteConfig } from '@/context/SiteConfigContext';

export default function AboutHeroClient() {
  const { config } = useSiteConfig();
  const cleanNumber = (config.whatsapp || config.phone || '919819647471').replace(/[^0-9]/g, '');

  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="about-hero">
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>ICAI REGISTERED PRACTICE · FRN: {config.frn}</span>
          </div>

          <h1 className="about-hero-title">
            Navigating finance &amp; statutory compliance with{' '}
            <span className="hero-gold-accent">clarity &amp; confidence.</span>
          </h1>

          <p className="about-hero-lede">
            {config.firmName} is an independent Chartered Accountancy practice established in {config.establishedYear || '2026'} in Mumbai. We provide disciplined, partner-led statutory counsel across corporate taxation, GST governance, statutory audits, and regulatory advisory for businesses, institutions, and individuals.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">{config.frn}</span>
              <span className="about-pillar-lbl">ICAI FIRM REGISTRATION</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">{config.memberNo}</span>
              <span className="about-pillar-lbl">PROPRIETOR M. NO. · ACA</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Dual Chambers</span>
              <span className="about-pillar-lbl">BORIVALI &amp; NARIMAN POINT</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">18-Digit UDIN</span>
              <span className="about-pillar-lbl">STATUTORY ATTESTATION</span>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL FOUNDATION & HERITAGE */}
      <section className="section" id="the-firm">
        <div className="container about-heritage-grid">
          <div className="about-heritage-text">
            <span className="eyebrow">Founder &amp; Practice Leadership</span>
            <h2>Sovereign advisory led directly by {config.proprietorName}</h2>
            <p>
              Founded and led by <strong>{config.proprietorName}</strong>, <strong>{config.firmName}</strong> was established in Mumbai with an uncompromising standard: to provide corporate enterprises, growth businesses, family offices, and professionals with disciplined, partner-led Chartered Accountancy counsel.
            </p>
            <p>
              In an environment of continuously evolving tax jurisprudence, faceless assessment frameworks, and stringent regulatory compliance, {config.proprietorName} ensures that every client engagement receives direct principal-level attention — completely eliminating proxy relays and junior delegation.
            </p>
            <p>
              Our practice is conducted in strict compliance with the Chartered Accountants Act, 1949, the ICAI Code of Ethics, and applicable quality control standards, ensuring our tax defense, audit attestations, and corporate filings carry undisputed statutory credibility.
            </p>

            <aside className="register-card" style={{ marginTop: '1.75rem', borderLeft: '3px solid var(--color-gold)' }} aria-label="Firm registration particulars">
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-primary-navy)', marginBottom: '0.85rem' }}>
                Statutory Practice Registry
              </h3>
              <dl className="register-dl">
                <dt className="register-dt">Established</dt>
                <dd className="register-dd">{config.establishedYear || '2026'}</dd>
                
                <dt className="register-dt">ICAI FRN</dt>
                <dd className="register-dd">{config.frn}</dd>

                <dt className="register-dt">Proprietor</dt>
                <dd className="register-dd">{config.proprietorName} (M. No. {config.memberNo})</dd>

                <dt className="register-dt">Head Office</dt>
                <dd className="register-dd">{config.addressBorivali}</dd>

                <dt className="register-dt">South Mumbai</dt>
                <dd className="register-dd">{config.addressNarimanPoint}</dd>

                <dt className="register-dt">Direct Counsel</dt>
                <dd className="register-dd" style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <a href={`tel:${config.phone}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 650, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    {config.phoneFormatted}
                  </a>
                  <a href={`mailto:${config.emailPrimary}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    {config.emailPrimary}
                  </a>
                  {config.emailSecondary && (
                    <a href={`mailto:${config.emailSecondary}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                      {config.emailSecondary}
                    </a>
                  )}
                </dd>
              </dl>

              <div className="profile-action-group" style={{ paddingTop: '1rem', borderTop: '1px solid var(--color-border)' }}>
                {config.linkedinUrl && (
                  <a
                    href={config.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-action-btn profile-btn-linkedin"
                    aria-label={`Connect with ${config.proprietorName} on LinkedIn`}
                  >
                    <span className="btn-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
                  aria-label={`Chat directly on WhatsApp with ${config.proprietorName}`}
                >
                  <span className="btn-icon">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
                    </svg>
                  </span>
                  <span>Direct WhatsApp</span>
                  <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>

                {config.mapLinkBorivali && (
                  <a
                    href={config.mapLinkBorivali}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-action-btn profile-btn-chambers"
                    aria-label="Open Borivali Chambers on Google Maps"
                  >
                    <span className="btn-icon">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
                      </svg>
                    </span>
                    <span>Chambers Map</span>
                    <span className="btn-arrow" aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </aside>
          </div>

          <div className="about-heritage-visual">
            <div className="about-heritage-img-box">
              <Image
                src={config.proprietorPhoto || '/images/ca-daksh-desai-executive.jpg'}
                alt={`${config.proprietorName} - Proprietor & Principal, ${config.firmName}`}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-heritage-img"
              />
              <div className="about-stamp-pill">
                <span aria-hidden="true">✦</span>
                <span>{config.proprietorName.toUpperCase()} · PROPRIETOR &amp; PRINCIPAL</span>
              </div>
              <div className="about-floating-caption">
                <strong>{config.proprietorName}</strong>
                <span>Chartered Accountant · ICAI Membership No. {config.memberNo} · Direct Practice Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
