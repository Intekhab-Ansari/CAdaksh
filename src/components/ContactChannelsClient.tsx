'use client';

import { useSiteConfig } from '@/context/SiteConfigContext';
import ContactForm from '@/components/ContactForm';

export default function ContactChannelsClient() {
  const { config } = useSiteConfig();
  const cleanNumber = (config.whatsapp || config.phone || '919819647471').replace(/[^0-9]/g, '');

  return (
    <>
      {/* SOVEREIGN HERO SECTION */}
      <section className="about-page-hero" id="contact-hero" style={{ marginBottom: '2.5rem' }}>
        <div className="container">
          <div className="about-hero-badge">
            <span aria-hidden="true">✦</span>
            <span>CHAMBERS CONSULTATION &amp; PRACTICE OFFICES · MUMBAI</span>
          </div>

          <h1 className="about-hero-title">
            Let&apos;s simplify your taxation &amp;{' '}
            <span className="hero-serif-accent">statutory compliance.</span>
          </h1>

          <p className="about-hero-lede">
            Reach out regarding income tax, GST, statutory audits, corporate law, international remittances (15CA/15CB), or virtual CFO advisory. Direct partner counsel with {config.proprietorName}.
          </p>

          <div className="about-hero-pillars">
            <div className="about-pillar-card">
              <span className="about-pillar-val">Borivali West</span>
              <span className="about-pillar-lbl">REGISTERED HEAD OFFICE</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">Nariman Point</span>
              <span className="about-pillar-lbl">SOUTH MUMBAI CHAMBERS</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">{config.phoneFormatted}</span>
              <span className="about-pillar-lbl">DIRECT TEL &amp; WHATSAPP</span>
            </div>
            <div className="about-pillar-card">
              <span className="about-pillar-val">{config.officeHours.split(':')[0] || 'Mon–Sat'}</span>
              <span className="about-pillar-lbl">OFFICE CONSULTATION HOURS</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact-channels">
        <div className="container contact-grid">
          {/* Ways to Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <aside className="register-card" aria-label="Ways to connect">
              <h3 style={{ fontSize: '1.15rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary-navy)' }}>
                Official Practice Channels
              </h3>
              <dl className="register-dl">
                <dt className="register-dt">Statutory Email</dt>
                <dd className="register-dd">
                  <a href={`mailto:${config.emailPrimary}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    {config.emailPrimary}
                  </a>
                </dd>

                {config.emailSecondary && (
                  <>
                    <dt className="register-dt">Direct Counsel</dt>
                    <dd className="register-dd">
                      <a href={`mailto:${config.emailSecondary}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                        {config.emailSecondary}
                      </a>
                    </dd>
                  </>
                )}
                
                <dt className="register-dt">Call / WhatsApp</dt>
                <dd className="register-dd" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <a href={`tel:${config.phone}`} style={{ color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'none' }}>
                    {config.phoneFormatted}
                  </a>
                  <a
                    href={`https://wa.me/${cleanNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill-small"
                    style={{ padding: '0.15rem 0.5rem', fontSize: '0.72rem', textDecoration: 'none' }}
                  >
                    WhatsApp ↗
                  </a>
                </dd>
                
                <dt className="register-dt">Office Hours</dt>
                <dd className="register-dd">{config.officeHours}</dd>
                
                {config.linkedinUrl && (
                  <>
                    <dt className="register-dt">LinkedIn</dt>
                    <dd className="register-dd">
                      <a
                        href={config.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0A66C2', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        <span>{config.proprietorName}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </dd>
                  </>
                )}

                <dt className="register-dt">ICAI Register</dt>
                <dd className="register-dd">FRN: {config.frn} · M. No. {config.memberNo}</dd>
              </dl>
            </aside>

            {/* Practice Chambers Locations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="register-card" style={{ borderLeft: '3px solid var(--color-gold)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-gold-deep)' }}>
                    HEAD OFFICE · BORIVALI WEST
                  </span>
                  {config.mapLinkBorivali && (
                    <a
                      href={config.mapLinkBorivali}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.75rem', color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'underline' }}
                    >
                      Google Maps ↗
                    </a>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--color-text-body)' }}>
                  {config.addressBorivali}
                </p>
              </div>

              <div className="register-card" style={{ borderLeft: '3px solid var(--color-primary-navy)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.45rem', flexWrap: 'wrap', gap: '0.35rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.06em', color: 'var(--color-primary-navy)' }}>
                    SOUTH MUMBAI CHAMBERS · NARIMAN POINT
                  </span>
                  {config.mapLinkNarimanPoint && (
                    <a
                      href={config.mapLinkNarimanPoint}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.75rem', color: 'var(--color-primary-navy)', fontWeight: 600, textDecoration: 'underline' }}
                    >
                      Google Maps ↗
                    </a>
                  )}
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: '1.5', color: 'var(--color-text-body)' }}>
                  {config.addressNarimanPoint}
                </p>
              </div>
            </div>

            <ul className="ruled-list">
              <li><strong>Strictly confidential</strong></li>
              <li><strong>Direct consultation with a Chartered Accountant</strong></li>
              <li><strong>Clear engagement terms</strong></li>
            </ul>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

