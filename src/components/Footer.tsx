import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Institutional Statutory Trust & UDIN Verification Banner */}
        <div className="footer-udin-banner">
          <div className="udin-banner-left">
            <div className="udin-crest">
              <Image src="/images/ca-logo.svg" alt="CA India Emblem" width={38} height={38} />
            </div>
            <div className="udin-content">
              <div className="udin-pill-label">
                <span className="udin-pill-dot">✦</span> MANDATORY ICAI STATUTORY PROTOCOL
              </div>
              <strong className="udin-title">Mandatory 18-Digit ICAI UDIN Authentication</strong>
              <p className="udin-text">
                In strict compliance with Council Guidelines of the Institute of Chartered Accountants of India, every audit report, tax certification, and attestation issued by Daksh Desai &amp; Associates carries a verifiable 18-digit Unique Document Identification Number (UDIN).
              </p>
            </div>
          </div>
          <div className="udin-banner-right">
            <a
              href="https://udin.icai.org"
              target="_blank"
              rel="noopener noreferrer"
              className="udin-verify-btn"
            >
              <span>Verify a UDIN</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
            </a>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="footer-top">
          {/* Column 1: Firm Particulars */}
          <div className="footer-col footer-col-firm">
            <div className="footer-brand-wrap">
              <div className="footer-brand-crest">
                <Image src="/images/ca-logo.svg" alt="CA Emblem" width={32} height={32} />
              </div>
              <div className="footer-brand-text">
                <span className="brand-title">Daksh Desai &amp; Associates</span>
                <span className="brand-subtitle">CHARTERED ACCOUNTANTS · MUMBAI</span>
              </div>
            </div>

            <div className="footer-firm-meta-box">
              <div className="footer-meta-row">
                <span className="meta-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Firm Registration No. (FRN)</span>
                  <span className="meta-val"><span className="fill">[FRN]</span></span>
                </div>
              </div>

              <div className="footer-meta-row">
                <span className="meta-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Proprietor &amp; Member No.</span>
                  <span className="meta-val">CA Daksh Desai, M. No. <span className="fill">[M. No.]</span></span>
                </div>
              </div>

              <div className="footer-meta-row">
                <span className="meta-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Chambers &amp; Registered Office</span>
                  <span className="meta-val"><span className="fill">[Office address, Nariman Point / BKC / Fort]</span>, Mumbai, Maharashtra <span className="fill">[PIN]</span></span>
                </div>
              </div>

              <div className="footer-meta-row">
                <span className="meta-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Practice Direct Line</span>
                  <span className="meta-val"><span className="fill">[+91 Phone]</span></span>
                </div>
              </div>

              <div className="footer-meta-row">
                <span className="meta-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Statutory Inquiries</span>
                  <span className="meta-val"><span className="fill">[info@cadakshdesaiassociates.com]</span></span>
                </div>
              </div>

              <div className="footer-meta-row">
                <span className="meta-icon" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <div className="meta-text">
                  <span className="meta-label">Chamber Hours</span>
                  <span className="meta-val"><span className="fill">[Mon–Sat: 10:00 AM – 7:00 PM IST]</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Tax & Indirect Taxes */}
          <div className="footer-col">
            <div className="footer-col-header">
              <span className="footer-col-code">DESK 01</span>
              <span className="footer-col-title">Taxation &amp; GST</span>
            </div>
            <div className="footer-links-list">
              <Link href="/services/income-tax">Income Tax Returns &amp; AIS</Link>
              <Link href="/services/income-tax">Tax Scrutiny Defense &amp; Appeals</Link>
              <Link href="/services/gst">GST Returns (GSTR-1 &amp; 3B)</Link>
              <Link href="/services/gst">GSTR-2B Input Tax Credit Matching</Link>
              <Link href="/services/gst">GST Refunds &amp; Departmental Audits</Link>
              <Link href="/services/international-tax">Form 15CA / 15CB Certification</Link>
              <Link href="/services/international-tax">NRI Property Tax &amp; Remittances</Link>
            </div>
          </div>

          {/* Column 3: Audit & Corporate Law */}
          <div className="footer-col">
            <div className="footer-col-header">
              <span className="footer-col-code">DESK 02</span>
              <span className="footer-col-title">Audit &amp; Corporate</span>
            </div>
            <div className="footer-links-list">
              <Link href="/services/audit">Statutory Audit (Companies Act 2013)</Link>
              <Link href="/services/audit">Tax Audit under Section 44AB</Link>
              <Link href="/services/audit">Internal Financial Controls (IFCoFR)</Link>
              <Link href="/services/audit">Stock &amp; Inventory Physical Audits</Link>
              <Link href="/services/cfo-advisory">Virtual CFO &amp; Cash Flow Modeling</Link>
              <Link href="/services/corporate-law">Company &amp; LLP Incorporation</Link>
              <Link href="/services/corporate-law">MCA21 Annual Filings (AOC-4 / MGT-7)</Link>
            </div>
          </div>

          {/* Column 4: Practice Gateway */}
          <div className="footer-col">
            <div className="footer-col-header">
              <span className="footer-col-code">PORTAL</span>
              <span className="footer-col-title">Practice Gateway</span>
            </div>
            <div className="footer-links-list">
              <Link href="/about">About the Practice</Link>
              <Link href="/team">Proprietor &amp; Practice Desks</Link>
              <Link href="/services">Services Directory</Link>
              <Link href="/insights">Knowledge &amp; Tax Bulletins</Link>
              <Link href="/faq">Client FAQ &amp; Guidance</Link>
              <Link href="/disclaimer">ICAI Mandatory Disclaimer</Link>
              <Link href="/privacy">DPDP Act 2023 Privacy Notice</Link>
            </div>
            <div className="footer-cta-card">
              <span className="footer-cta-heading">Chamber Counsel</span>
              <p className="footer-cta-desc">Schedule a formal statutory consultation at our Mumbai practice chambers.</p>
              <Link href="/contact" className="footer-consult-btn">
                <span>Consult Office</span>
                <span className="arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Trust Seal Strip */}
        <div className="footer-trust-strip">
          <div className="trust-strip-pill">
            <span className="trust-pill-icon" aria-hidden="true">🏛️</span>
            <span>ICAI Empanelled Register</span>
          </div>
          <div className="trust-strip-pill">
            <span className="trust-pill-icon" aria-hidden="true">⚖️</span>
            <span>Strict ICAI Code of Ethics (1949)</span>
          </div>
          <div className="trust-strip-pill">
            <span className="trust-pill-icon" aria-hidden="true">🔒</span>
            <span>DPDP Act 2023 Privacy Governed</span>
          </div>
          <div className="trust-strip-pill">
            <span className="trust-pill-icon" aria-hidden="true">📜</span>
            <span>Mandatory 18-Digit UDIN</span>
          </div>
        </div>

        {/* Legal Disclaimers & Ethics Bar */}
        <div className="footer-legal-bar">
          <div className="footer-legal-left">
            <div className="footer-copyright">
              © {new Date().getFullYear()} Daksh Desai &amp; Associates, Chartered Accountants. All rights reserved.
            </div>
            <p className="footer-ethics-statement">
              This website is meant solely for the purpose of providing factual information regarding the firm and its professional services, in strict compliance with the Chartered Accountants Act, 1949 and Council Guidelines issued by the Institute of Chartered Accountants of India (ICAI). This portal does not constitute advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever.
            </p>
          </div>
          <div className="footer-legal-links">
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
