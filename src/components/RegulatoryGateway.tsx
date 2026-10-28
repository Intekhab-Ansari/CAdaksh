import Link from 'next/link';

interface PortalItem {
  name: string;
  authority: string;
  description: string;
  url: string;
  badge: string;
}

const REGULATORY_PORTALS: PortalItem[] = [
  {
    name: 'Income Tax e-Filing Portal',
    authority: 'Central Board of Direct Taxes (CBDT)',
    description: 'Statutory portal for filing ITR-1 to 7, viewing AIS/TIS, e-verifications, and responding to scrutiny notices under Sec 143(1)/148.',
    url: 'https://www.incometax.gov.in',
    badge: 'Direct Tax',
  },
  {
    name: 'GST Common Portal',
    authority: 'Goods & Services Tax Network (GSTN)',
    description: 'National platform for monthly/quarterly GSTR-1 & 3B, GSTR-9 annual returns, and GSTR-2B purchase reconciliation.',
    url: 'https://www.gst.gov.in',
    badge: 'Indirect Tax',
  },
  {
    name: 'MCA21 V3 Registry',
    authority: 'Ministry of Corporate Affairs (MCA)',
    description: 'Statutory company registrations (SPICe+), Director KYC (DIR-3), and mandatory annual filings (AOC-4 & MGT-7).',
    url: 'https://www.mca.gov.in',
    badge: 'Corporate Law',
  },
  {
    name: 'Reserve Bank of India',
    authority: 'Reserve Bank of India (RBI)',
    description: 'Master Directions on Foreign Exchange Management Act (FEMA), Overseas Direct Investment (ODI), Foreign Direct Investment (FDI), and NBFC regulations.',
    url: 'https://www.rbi.org.in',
    badge: 'Central Bank',
  },
  {
    name: 'TRACES TDS Central',
    authority: 'Income Tax Department (CPC-TDS)',
    description: 'TDS return processing, downloading Form 16/16A certificates, and clearing Section 200A tax default notices.',
    url: 'https://www.tdscpc.gov.in',
    badge: 'TDS / TCS',
  },
  {
    name: 'ICAI UDIN Verification Portal',
    authority: 'Institute of Chartered Accountants of India',
    description: 'Mandatory verification gateway to authenticate the 18-digit Unique Document Identification Number (UDIN) on all audit reports & certificates.',
    url: 'https://udin.icai.org',
    badge: 'Statutory Verification',
  },
];

export default function RegulatoryGateway() {
  return (
    <section className="section section-regulatory" id="regulatory-gateway">
      <div className="container">
        <div className="section-head-center">
          <span className="eyebrow-gold">STATUTORY DIRECTORY</span>
          <h2 className="editorial-heading">
            Indian Regulatory &amp; <em>Statutory Portals</em>
          </h2>
          <p className="section-head-lede">
            Direct access to official Government of India, Reserve Bank of India, and ICAI compliance gateways.
          </p>
        </div>

        <div className="portals-grid">
          {REGULATORY_PORTALS.map((portal, idx) => (
            <a
              key={idx}
              href={portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="portal-card"
              aria-label={`Visit ${portal.name} (opens in new tab)`}
            >
              <div className="portal-card-top">
                <span className="portal-badge">{portal.badge}</span>
                <span className="portal-arrow" aria-hidden="true">↗</span>
              </div>
              <h3 className="portal-title">{portal.name}</h3>
              <span className="portal-authority">{portal.authority}</span>
              <p className="portal-desc">{portal.description}</p>
              <span className="portal-link-text">Visit official portal</span>
            </a>
          ))}
        </div>

        <div className="regulatory-disclaimer-box">
          <p>
            <strong>Regulatory Integrity Note:</strong> The above external portals are official Government of India and statutory regulator platforms. Links are provided for taxpayer and client convenience under ICAI Council Guidelines. Daksh Desai &amp; Associates maintains strict compliance with all statutory reporting mandates across these platforms.
          </p>
        </div>
      </div>
    </section>
  );
}
