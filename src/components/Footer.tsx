'use client';

import Link from 'next/link';
import Image from 'next/image';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import { useSiteConfig } from '@/context/SiteConfigContext';

export default function Footer() {
  const { config } = useSiteConfig();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top: Sovereign UDIN Trust Strip */}
        <div className="footer-udin-bar">
          <div className="udin-bar-left">
            <div className="udin-emblem-ring">
              <Image src="/images/ca-logo.svg" alt="CA India" width={34} height={34} />
            </div>
            <div className="udin-bar-content">
              <div className="udin-bar-tag">ICAI STATUTORY PROTOCOL</div>
              <p className="udin-bar-text">
                Every certificate, tax audit, and attestation issued by <strong>{config.firmName}</strong> carries a mandatory, verifiable 18-digit Unique Document Identification Number (UDIN).
              </p>
            </div>
          </div>
          <a
            href="https://udin.icai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="udin-cta-pill"
          >
            <span>Verify a UDIN</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        {/* 4-Column Practice Directory */}
        <div className="footer-grid">
          {/* Column 1: Firm Identity & Chambers */}
          <div className="footer-col-main">
            <div className="footer-card-badge">
              <span className="badge-pulse-dot" aria-hidden="true"></span>
              <span>ICAI REGISTERED PRACTICE CHAMBERS</span>
            </div>

            <div className="footer-brand">
              <div className="footer-crest-box">
                <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={36} height={36} />
              </div>
              <div className="footer-brand-title-wrap">
                <span className="footer-firm-name">{config.firmName}</span>
                <span className="footer-firm-sub">CHARTERED ACCOUNTANTS · MUMBAI</span>
              </div>
            </div>

            <div className="footer-details-list">
              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">ICAI REGISTRATION</span>
                  <span className="detail-val">FRN: {config.frn}</span>
                </div>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">PROPRIETOR &amp; PRINCIPAL</span>
                  <span className="detail-val">{config.proprietorName} (M. No. {config.memberNo})</span>
                </div>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">HEAD OFFICE · BORIVALI WEST</span>
                  <span className="detail-val">
                    {config.addressBorivali}{' '}
                    {config.mapLinkBorivali && (
                      <a
                        href={config.mapLinkBorivali}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-map-badge"
                      >
                        Map ↗
                      </a>
                    )}
                  </span>
                </div>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">SOUTH MUMBAI CHAMBERS · NARIMAN POINT</span>
                  <span className="detail-val">
                    {config.addressNarimanPoint}{' '}
                    {config.mapLinkNarimanPoint && (
                      <a
                        href={config.mapLinkNarimanPoint}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-map-badge"
                      >
                        Map ↗
                      </a>
                    )}
                  </span>
                </div>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">DIRECT COUNSEL &amp; WHATSAPP</span>
                  <span className="detail-val">
                    <a href={`tel:${config.phone}`} className="footer-link-subtle">
                      {config.phoneFormatted}
                    </a>
                  </span>
                </div>
              </div>

              <div className="footer-detail-item footer-detail-emails">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">PRACTICE EMAIL (OFFICIAL &amp; DIRECT)</span>
                  <div className="detail-val footer-emails-col">
                    <a href={`mailto:${config.emailPrimary}`} className="footer-email-link">
                      <span className="email-dot">▪</span> {config.emailPrimary}
                    </a>
                    {config.emailSecondary && (
                      <a href={`mailto:${config.emailSecondary}`} className="footer-email-link">
                        <span className="email-dot">▪</span> {config.emailSecondary}
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div className="footer-detail-content">
                  <span className="detail-label">OFFICE HOURS</span>
                  <span className="detail-val">{config.officeHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Tax & Regulatory */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">
              <span className="title-dot" aria-hidden="true">✦</span> Taxation &amp; GST
            </h4>
            <ul className="footer-link-group">
              <li><Link href="/services/income-tax">Income Tax Returns &amp; AIS</Link></li>
              <li><Link href="/services/income-tax">Tax Scrutiny Defense &amp; Appeals</Link></li>
              <li><Link href="/services/gst">GST Returns (GSTR-1 &amp; 3B)</Link></li>
              <li><Link href="/services/gst">GSTR-2B Input Tax Credit Matching</Link></li>
              <li><Link href="/services/gst">GST Refunds &amp; Departmental Audits</Link></li>
              <li><Link href="/services/international-tax">Form 15CA / 15CB Certification</Link></li>
              <li><Link href="/services/international-tax">NRI Property Tax &amp; Remittances</Link></li>
            </ul>
          </div>

          {/* Column 3: Audit & Corporate Law */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">
              <span className="title-dot" aria-hidden="true">✦</span> Audit &amp; Assurance
            </h4>
            <ul className="footer-link-group">
              <li><Link href="/services/audit">Statutory Audit (Companies Act 2013)</Link></li>
              <li><Link href="/services/audit">Tax Audit under Section 44AB</Link></li>
              <li><Link href="/services/audit">Internal Financial Controls (IFCoFR)</Link></li>
              <li><Link href="/services/audit">Stock &amp; Inventory Physical Audits</Link></li>
              <li><Link href="/services/cfo-advisory">Virtual CFO &amp; Cash Flow Modeling</Link></li>
              <li><Link href="/services/corporate-law">Company &amp; LLP Incorporation</Link></li>
              <li><Link href="/services/corporate-law">MCA21 Annual Filings (AOC-4 / MGT-7)</Link></li>
            </ul>
          </div>

          {/* Column 4: Practice Gateway */}
          <div className="footer-nav-col footer-col-gateway">
            <div className="footer-gateway-links">
              <h4 className="footer-nav-title">
                <span className="title-dot" aria-hidden="true">✦</span> Practice Gateway
              </h4>
              <ul className="footer-link-group">
                <li><Link href="/about">About the Practice</Link></li>
                <li><Link href="/team">Proprietor &amp; Practice Desks</Link></li>
                <li><Link href="/services">Services Directory</Link></li>
                <li><Link href="/faq">Client FAQ &amp; Guidance</Link></li>
                <li><Link href="/contact">Chambers Office &amp; Location</Link></li>
                {config.linkedinUrl && (
                  <li>
                    <a href={config.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      Proprietor LinkedIn ↗
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="footer-counsel-box">
              <span className="counsel-label">CHAMBER CONSULTATION</span>
              <p className="counsel-sub">Schedule a formal statutory consultation with our partners.</p>
              <Link href="/contact" className="counsel-btn">
                <span>Schedule Consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Statutory Newsletter & Practice Circular Strip */}
        <NewsletterSubscribe />

        {/* Legal Attribution */}
        <div className="footer-legal-bar">
          <div className="legal-left">
            <div className="copyright-line">
              © {new Date().getFullYear()} {config.firmName}, Chartered Accountants. All rights reserved.
            </div>
            <div className="agency-credit-line">
              <span>Design and Developed by</span>{' '}
              <a
                href="https://sociialmantraa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="agency-credit-link"
              >
                Sociial Mantraa ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
