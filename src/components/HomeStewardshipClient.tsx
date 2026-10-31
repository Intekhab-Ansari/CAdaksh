'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSiteConfig } from '@/context/SiteConfigContext';

export default function HomeStewardshipClient() {
  const { config } = useSiteConfig();

  return (
    <section className="home-stewardship-section" id="about-snippet">
      <div className="container">
        <div className="stewardship-grid">
          {/* Left: Executive Portrait & Statutory Verification Frame */}
          <div className="stewardship-photo-col">
            <div className="stewardship-photo-frame">
              <Image
                src={config.proprietorPhoto || '/images/ca-daksh-desai-executive.jpg'}
                alt={`${config.proprietorName} - Proprietor & Principal, ${config.firmName}`}
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
                className="stewardship-photo-img"
                priority
              />
              <div className="stewardship-floating-badge">
                <div className="stewardship-ca-crest">
                  <Image src="/images/ca-logo.svg" alt="ICAI Emblem" width={26} height={26} />
                </div>
                <div className="stewardship-badge-meta">
                  <span className="stewardship-badge-title">{config.proprietorName.toUpperCase()}</span>
                  <span className="stewardship-badge-sub">M. NO. {config.memberNo} · FRN: {config.frn} · MUMBAI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Authoritative Practice Scope & Dual Chambers Matrix */}
          <div className="stewardship-content-col">
            <div className="stewardship-eyebrow">
              <span className="stewardship-eyebrow-sparkle" aria-hidden="true">✦</span>
              <span>INSTITUTIONAL STEWARDSHIP · MUMBAI CHAMBERS</span>
            </div>

            <h2 className="stewardship-title">
              Statutory Rigour.{' '}
              <span className="hero-gold-accent">Strategic Clarity.</span>
            </h2>

            <p className="stewardship-lede">
              {config.firmName} is an independent Chartered Accountancy practice established in Mumbai. We provide corporate enterprises, growth ventures, family offices, and professionals with disciplined, partner-led statutory counsel across direct taxation, GST governance, statutory audits, and regulatory advisory.
            </p>

            <div className="stewardship-cards-stack">
              <div className="stewardship-feature-card">
                <div className="stewardship-card-icon" aria-hidden="true">01</div>
                <div className="stewardship-card-text">
                  <strong>Direct Partner-Led Accountability</strong>
                  <p>Every audit attestation, tax computation, and departmental representation is personally supervised by {config.proprietorName} — eliminating proxy relays and junior delegation.</p>
                </div>
              </div>

              <div className="stewardship-feature-card">
                <div className="stewardship-card-icon" aria-hidden="true">02</div>
                <div className="stewardship-card-text">
                  <strong>Dual Strategic Mumbai Chambers</strong>
                  <p>Operating from corporate chambers at <strong>Borivali West</strong> (Suburban Head Office) and <strong>Nariman Point</strong> (South Mumbai Financial District).</p>
                </div>
              </div>

              <div className="stewardship-feature-card">
                <div className="stewardship-card-icon" aria-hidden="true">03</div>
                <div className="stewardship-card-text">
                  <strong>18-Digit UDIN Statutory Guarantee</strong>
                  <p>Every audit report, foreign remittance certificate (15CB), and net worth certificate carries a verified ICAI Unique Document Identification Number for undisputed legal standing.</p>
                </div>
              </div>
            </div>

            <div className="stewardship-actions">
              <Link href="/about" className="btn-stewardship-gold">
                <span>Explore Practice Profile &amp; Ethics</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn-stewardship-outline">
                <span>Consult Mumbai Chambers</span>
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

