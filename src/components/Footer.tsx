import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
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
                Every certificate, tax audit, and attestation issued by <strong>Daksh Desai &amp; Associates</strong> carries a mandatory, verifiable 18-digit Unique Document Identification Number (UDIN).
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
                <span className="footer-firm-name">Daksh Desai &amp; Associates</span>
                <span className="footer-firm-sub">CHARTERED ACCOUNTANTS · MUMBAI</span>
              </div>
            </div>

            <div className="footer-details-list">
              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </span>
                <span className="detail-label">FRN:</span>
                <span className="detail-val fill">[FRN]</span>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <span className="detail-label">Proprietor:</span>
                <span className="detail-val">CA Daksh Desai, ACA (M. No. <span className="fill">[M. No.]</span>)</span>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="detail-label">Chambers:</span>
                <span className="detail-val"><span className="fill">[Chambers Address]</span>, Mumbai, Maharashtra</span>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span className="detail-label">Direct Tel:</span>
                <span className="detail-val"><span className="fill">[+91 Phone]</span></span>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span className="detail-label">Statutory Email:</span>
                <span className="detail-val">
                  <a href="mailto:info@cadakshdesaiassociates.com" className="footer-link-subtle">
                    info@cadakshdesaiassociates.com
                  </a>
                </span>
              </div>

              <div className="footer-detail-item">
                <span className="detail-icon" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span className="detail-label">Office Hours:</span>
                <span className="detail-val">Mon–Sat: 10:00 AM – 7:00 PM IST</span>
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
                <li><Link href="/insights">Knowledge &amp; Tax Bulletins</Link></li>
                <li><Link href="/faq">Client FAQ &amp; Guidance</Link></li>
                <li><Link href="/disclaimer">ICAI Mandatory Disclaimer</Link></li>
                <li><Link href="/privacy">DPDP Act 2023 Privacy Notice</Link></li>
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

        {/* Regulatory Governance Bar */}
        <div className="footer-governance-bar">
          <div className="gov-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
            <span>ICAI Empanelled Practice</span>
          </div>
          <div className="gov-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Strict ICAI Code of Ethics (1949)</span>
          </div>
          <div className="gov-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span>DPDP Act 2023 Data Protected</span>
          </div>
          <div className="gov-item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
            <span>Mandatory 18-Digit UDIN Authentication</span>
          </div>
        </div>

        {/* Legal Disclaimers & Ethics */}
        <div className="footer-legal-bar">
          <div className="legal-left">
            <div className="copyright-line">
              © {new Date().getFullYear()} Daksh Desai &amp; Associates, Chartered Accountants. All rights reserved.
            </div>
          </div>
          <div className="legal-links">
            <Link href="/disclaimer">ICAI Disclaimer</Link>
            <span className="sep">•</span>
            <Link href="/privacy">Privacy Notice</Link>
            <span className="sep">•</span>
            <Link href="/contact">Chamber Office</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
