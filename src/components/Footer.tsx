import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-col">
            <span className="brand-title">Daksh Desai &amp; Associates</span>
            <span className="brand-subtitle">Chartered Accountants</span>
            <p style={{ marginTop: '0.35rem', fontSize: '0.88rem', lineHeight: 1.5 }}>
              FRN <span className="fill">[FRN]</span><br />
              <span className="fill">[office address]</span>, Mumbai<br />
              <span className="fill">[phone]</span> · <span className="fill">[email]</span><br />
              <span className="fill">[office hours]</span>
            </p>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Services</span>
            <Link href="/services/income-tax">Income Tax</Link>
            <Link href="/services/gst">GST</Link>
            <Link href="/services/international-tax">International Taxation</Link>
            <Link href="/services/audit">Audit &amp; Assurance</Link>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Advisory &amp; Corporate</span>
            <Link href="/services/accounting">Accounting &amp; MIS</Link>
            <Link href="/services/cfo-advisory">Business Advisory &amp; Virtual CFO</Link>
            <Link href="/services/corporate-law">Labour &amp; Corporate Law</Link>
          </div>
          <div className="footer-col">
            <span className="footer-col-title">Quick links</span>
            <Link href="/about">About Us</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/privacy">Privacy notice</Link>
          </div>
        </div>
        <div className="footer-legal-bar">
          <span>© <span className="fill">[year]</span> Daksh Desai &amp; Associates, Chartered Accountants.</span>
          <span>
            This website is for information only and is not solicitation or advertisement. <Link href="/disclaimer">Read the disclaimer</Link>.
          </span>
        </div>
      </div>
    </footer>
  );
}
