import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Institutional Trust Banner */}
        <div className="footer-udin-banner">
          <div className="udin-banner-left">
            <div className="udin-crest">
              <Image src="/images/ca-logo.svg" alt="CA India" width={32} height={32} />
            </div>
            <div>
              <strong className="udin-title">Mandatory 18-Digit ICAI UDIN Authentication</strong>
              <p className="udin-text">
                In strict compliance with Council Guidelines of the Institute of Chartered Accountants of India, every certificate, tax audit report, and attestation issued by Daksh Desai &amp; Associates carries a verifiable 18-digit Unique Document Identification Number (UDIN).
              </p>
            </div>
          </div>
          <a
            href="https://udin.icai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="udin-verify-btn"
          >
            Verify a UDIN ↗
          </a>
        </div>

        {/* 4-Column Directory */}
        <div className="footer-top">
          <div className="footer-col footer-col-firm">
            <span className="brand-title">Daksh Desai &amp; Associates</span>
            <span className="brand-subtitle">CHARTERED ACCOUNTANTS · MUMBAI</span>
            <div className="footer-firm-meta">
              <p>
                <strong>Firm Registration No. (FRN):</strong> <span className="fill">[FRN]</span><br />
                <strong>Proprietor:</strong> CA Daksh Desai, M. No. <span className="fill">[M. No.]</span><br />
                <strong>Registered Office:</strong> <span className="fill">[Office address, Nariman Point / BKC / Fort]</span>, Mumbai, Maharashtra <span className="fill">[PIN]</span><br />
                <strong>Direct Tel:</strong> <span className="fill">[+91 Phone]</span><br />
                <strong>Statutory Email:</strong> <span className="fill">[info@cadakshdesaiassociates.com]</span><br />
                <strong>Office Hours:</strong> <span className="fill">[Mon–Sat: 10:00 AM – 7:00 PM IST]</span>
              </p>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Taxation &amp; GST</span>
            <Link href="/services/income-tax">Income Tax Returns &amp; AIS</Link>
            <Link href="/services/income-tax">Tax Scrutiny &amp; Appeals</Link>
            <Link href="/services/gst">GST Returns (GSTR-1 &amp; 3B)</Link>
            <Link href="/services/gst">GSTR-2B Input Tax Credit Matching</Link>
            <Link href="/services/gst">GST Refunds &amp; Departmental Audits</Link>
            <Link href="/services/international-tax">Form 15CA / 15CB Certification</Link>
            <Link href="/services/international-tax">NRI Property Tax &amp; Remittances</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Audit &amp; Corporate</span>
            <Link href="/services/audit">Statutory Audit (Companies Act 2013)</Link>
            <Link href="/services/audit">Tax Audit under Section 44AB</Link>
            <Link href="/services/audit">Internal Financial Controls (IFCoFR)</Link>
            <Link href="/services/audit">Stock &amp; Inventory Physical Audits</Link>
            <Link href="/services/cfo-advisory">Virtual CFO &amp; Cash Flow Modeling</Link>
            <Link href="/services/corporate-law">Company &amp; LLP Incorporation</Link>
            <Link href="/services/corporate-law">MCA21 Annual Filings (AOC-4 / MGT-7)</Link>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Practice &amp; Statutory</span>
            <Link href="/about">About the Firm</Link>
            <Link href="/team">Proprietor &amp; Practice Desks</Link>
            <Link href="/services">Services Directory</Link>
            <Link href="/insights">Knowledge &amp; Tax Bulletins</Link>
            <Link href="/faq">Client FAQ &amp; Guidance</Link>
            <Link href="/contact">Schedule Consultation</Link>
            <Link href="/disclaimer">ICAI Mandatory Disclaimer</Link>
            <Link href="/privacy">DPDP Act 2023 Privacy Notice</Link>
          </div>
        </div>

        {/* Legal Disclaimers & Ethics */}
        <div className="footer-legal-bar">
          <div className="footer-legal-left">
            <span>© {new Date().getFullYear()} Daksh Desai &amp; Associates, Chartered Accountants. All rights reserved.</span>
            <p className="footer-ethics-statement">
              This website is meant solely for the purpose of providing factual information regarding the firm and its professional services, in strict compliance with the Chartered Accountants Act, 1949 and Council Guidelines issued by the Institute of Chartered Accountants of India (ICAI). This portal does not constitute advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever.
            </p>
          </div>
          <div className="footer-legal-links">
            <Link href="/disclaimer">ICAI Disclaimer</Link>
            <span className="sep">•</span>
            <Link href="/privacy">Privacy Notice</Link>
            <span className="sep">•</span>
            <Link href="/contact">Office Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
