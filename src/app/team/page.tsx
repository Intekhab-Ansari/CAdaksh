import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TeamProprietorClient from '@/components/TeamProprietorClient';

export const metadata: Metadata = {
  title: 'Our Team & Leadership | Daksh Desai & Associates · Chartered Accountants',
  description: 'Meet the leadership and professionals at Daksh Desai & Associates, Chartered Accountants in Mumbai. Proprietor CA Daksh Desai, ACA, B.Com (M. No. 648747, FRN: 165505W) and specialized practice desks.',
};

export default function TeamPage() {
  return (
    <>
      <TeamProprietorClient />

      {/* SPECIALISED PRACTICE DESKS (DEEP SOVEREIGN NAVY) */}
      <section className="section section-navy" id="specialised-desks">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow" style={{ color: '#F5D79E' }}>✦ Institutional Organization</span>
            <h2 style={{ color: '#FFFFFF' }}>Specialised Practice Desks</h2>
            <p style={{ maxWidth: '640px', color: '#CBD5E1', marginTop: '0.5rem' }}>
              Our firm is structured into specialized functional practice desks, each dedicated to statutory precision and regulatory excellence.
            </p>
          </div>

          <div className="about-desks-grid">
            <div className="about-desk-card has-media desk-tax">
              <div className="about-desk-media">
                <Image
                  src="/images/tax-law-books.jpg"
                  alt="Taxation & GST Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">DIRECT TAX</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Taxation &amp; GST Desk</h3>
                  <p>
                    ITR filings, AIS reconciliation, GSTR-1 &amp; 3B compliance, 2B ITC matching, and notice defense.
                  </p>
                </div>
                <Link href="/services/income-tax" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-audit">
              <div className="about-desk-media">
                <Image
                  src="/images/audit-assurance.jpg"
                  alt="Audit & Assurance Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">ASSURANCE</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Audit &amp; Assurance Desk</h3>
                  <p>
                    Statutory audits under Companies Act, Section 44AB Tax Audits, IFCoFR controls, and stock audits.
                  </p>
                </div>
                <Link href="/services/audit" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-corp">
              <div className="about-desk-media">
                <Image
                  src="/images/corporate-law.jpg"
                  alt="Corporate Law & ROC Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">MCA21</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Corporate Law &amp; ROC Desk</h3>
                  <p>
                    Company &amp; LLP formation, annual ROC filings (AOC-4/MGT-7), Director KYC, and statutory registers.
                  </p>
                </div>
                <Link href="/services/corporate-law" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-fema">
              <div className="about-desk-media">
                <Image
                  src="/images/international-tax.jpg"
                  alt="International Tax & FEMA Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">CROSS-BORDER</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>International Tax &amp; FEMA Desk</h3>
                  <p>
                    Form 15CA/15CB remittance certificates, DTAA withholding relief, RBI FLA returns, and NRI tax advisory.
                  </p>
                </div>
                <Link href="/services/international-tax" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-cfo">
              <div className="about-desk-media">
                <Image
                  src="/images/ca-consulting.jpg"
                  alt="Virtual CFO & Advisory Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">ADVISORY</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Virtual CFO &amp; Advisory Desk</h3>
                  <p>
                    Strategic budgeting, cash flow forecasting, MIS dashboard modeling, and bank CMA data preparation.
                  </p>
                </div>
                <Link href="/services/cfo-advisory" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-desk-card has-media desk-accounts">
              <div className="about-desk-media">
                <Image
                  src="/images/accounting-mis.jpg"
                  alt="Accounting & MIS Desk"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="about-desk-img"
                />
                <div className="about-desk-scrim" />
                <div className="about-desk-pill-bar">
                  <span className="about-desk-tag">REPORTING</span>
                  <span className="about-desk-sparkle" aria-hidden="true">✦</span>
                </div>
              </div>
              <div className="about-desk-body">
                <div>
                  <h3>Accounting &amp; MIS Desk</h3>
                  <p>
                    Bookkeeping on Tally, Zoho &amp; SAP, monthly ledger reconciliation, and Ind-AS financial statements.
                  </p>
                </div>
                <Link href="/services/accounting" className="about-desk-link">
                  <span>View Practice Scope</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMBERS CONSULTATION BANNER */}
      <section className="section" id="team-cta" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div className="about-cta-card">
            <h2>Schedule a consultation with CA Daksh Desai</h2>
            <p>
              Direct partner counsel available at our Borivali West Head Office or South Mumbai Chambers at Nariman Point.
            </p>
            <div className="about-cta-btns">
              <Link href="/contact" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #C5A059 0%, #A68037 100%)', color: '#0B1528', fontWeight: 700 }}>
                <span>Schedule Practice Consultation</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="https://wa.me/919819647471?text=Hello%20CA%20Daksh%20Desai%2C%20I%20would%20like%20to%20schedule%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(197, 160, 89, 0.5)', color: '#FFFFFF' }}
              >
                <span>Direct WhatsApp: +91 98196 47471</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
