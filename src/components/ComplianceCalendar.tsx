'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface DueDateItem {
  id: string;
  category: 'direct-tax' | 'gst' | 'mca' | 'rbi';
  categoryLabel: string;
  shortDay: string;
  shortMonth: string;
  governingSection: string;
  title: string;
  applicability: string;
  tag: string;
  urgency: 'critical' | 'standard';
}

const STATUTORY_DEADLINES: DueDateItem[] = [
  {
    id: 'gstr-1',
    category: 'gst',
    categoryLabel: 'GST',
    shortDay: '11th',
    shortMonth: 'Monthly',
    governingSection: 'Sec 37 · CGST Act',
    title: 'GSTR-1 Monthly Return',
    applicability: 'Outward supplies & sales invoice data for regular registrants.',
    tag: 'Turnover > ₹5Cr or Monthly Option',
    urgency: 'critical',
  },
  {
    id: 'gstr-3b',
    category: 'gst',
    categoryLabel: 'GST',
    shortDay: '20th',
    shortMonth: 'Monthly',
    governingSection: 'Sec 39 · CGST Act',
    title: 'GSTR-3B Return & Tax Payment',
    applicability: 'Monthly summary of outward supplies, ITC discharge & net tax payment.',
    tag: 'All Regular GST Registrants',
    urgency: 'critical',
  },
  {
    id: 'tds-deposit',
    category: 'direct-tax',
    categoryLabel: 'TDS / TCS',
    shortDay: '07th',
    shortMonth: 'Monthly',
    governingSection: 'Sec 200 · IT Act',
    title: 'Monthly TDS / TCS Tax Deposit',
    applicability: 'Challan ITNS 281 deposit of tax deducted in preceding month.',
    tag: 'Corporate & Individual Deductors',
    urgency: 'standard',
  },
  {
    id: 'advance-tax-q1',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    shortDay: '15th',
    shortMonth: 'JUNE',
    governingSection: 'Sec 208–211 · IT Act',
    title: 'Advance Tax — 1st Installment (15%)',
    applicability: 'First tranche for assessees with estimated net tax liability ≥ ₹10,000.',
    tag: 'Corporate & Non-Corporate Assessees',
    urgency: 'standard',
  },
  {
    id: 'advance-tax-q2',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    shortDay: '15th',
    shortMonth: 'SEPT',
    governingSection: 'Sec 208–211 · IT Act',
    title: 'Advance Tax — 2nd Installment (45%)',
    applicability: 'Second cumulative tranche to avoid mandatory interest under Sec 234C.',
    tag: 'All Taxable Assessees',
    urgency: 'critical',
  },
  {
    id: 'itr-non-audit',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    shortDay: '31st',
    shortMonth: 'JULY',
    governingSection: 'Sec 139(1) · IT Act',
    title: 'Non-Audit ITR Filing',
    applicability: 'Annual income tax returns for individuals, HUFs & non-audit partnerships.',
    tag: 'ITR-1, ITR-2 & ITR-4',
    urgency: 'critical',
  },
  {
    id: 'tax-audit-report',
    category: 'direct-tax',
    categoryLabel: 'Tax Audit',
    shortDay: '30th',
    shortMonth: 'SEPT',
    governingSection: 'Sec 44AB · IT Act',
    title: 'Tax Audit Report (Form 3CD)',
    applicability: 'Mandatory statutory audit for businesses exceeding turnover thresholds.',
    tag: 'Form 3CA/3CB & Form 3CD',
    urgency: 'critical',
  },
  {
    id: 'itr-audit',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    shortDay: '31st',
    shortMonth: 'OCT',
    governingSection: 'Sec 139(1) · IT Act',
    title: 'Audited Corporate & Firm ITR',
    applicability: 'Annual returns for companies, tax audit assessees & working partners.',
    tag: 'ITR-6 & ITR-5 Audit Cases',
    urgency: 'critical',
  },
  {
    id: 'dir-3-kyc',
    category: 'mca',
    categoryLabel: 'MCA',
    shortDay: '30th',
    shortMonth: 'SEPT',
    governingSection: 'Rule 12A · MCA Rules',
    title: 'Annual Director KYC (DIR-3)',
    applicability: 'Annual digital KYC verification for all active DIN holders on MCA portal.',
    tag: 'All Registered Directors',
    urgency: 'standard',
  },
  {
    id: 'aoc-4',
    category: 'mca',
    categoryLabel: 'MCA',
    shortDay: '29th',
    shortMonth: 'OCT',
    governingSection: 'Sec 137 · Companies Act',
    title: 'Filing Financial Statements (AOC-4)',
    applicability: 'Submission of audited Balance Sheet, P&L & Notes on MCA21 portal.',
    tag: 'Private & Public Companies',
    urgency: 'critical',
  },
  {
    id: 'mgt-7',
    category: 'mca',
    categoryLabel: 'MCA',
    shortDay: '29th',
    shortMonth: 'NOV',
    governingSection: 'Sec 92 · Companies Act',
    title: 'Annual Secretarial Return (MGT-7)',
    applicability: 'Annual corporate return covering shareholders, governance & directors.',
    tag: 'Form MGT-7 / MGT-7A',
    urgency: 'critical',
  },
  {
    id: 'rbi-fla',
    category: 'rbi',
    categoryLabel: 'RBI / FEMA',
    shortDay: '15th',
    shortMonth: 'JULY',
    governingSection: 'FEMA 1999 & RBI',
    title: 'Foreign Liabilities & Assets (FLA)',
    applicability: 'Annual filing on RBI FLAIR portal for entities with foreign investment.',
    tag: 'FDI & ODI Recipient Entities',
    urgency: 'critical',
  },
  {
    id: 'gstr-9',
    category: 'gst',
    categoryLabel: 'GST',
    shortDay: '31st',
    shortMonth: 'DEC',
    governingSection: 'Sec 44 · CGST Act',
    title: 'Annual GST Return & 9C',
    applicability: 'Consolidated annual return & self-certified 9C reconciliation.',
    tag: 'Regular Taxpayers (Turnover > ₹5Cr)',
    urgency: 'critical',
  },
];

export default function ComplianceCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredDeadlines =
    selectedCategory === 'all'
      ? STATUTORY_DEADLINES
      : STATUTORY_DEADLINES.filter((item) => item.category === selectedCategory);

  return (
    <div className="compliance-calendar-widget">
      {/* 4 STATUTORY AUTHORITY SUMMARY CARDS WITH RICH ICONS */}
      <div className="cal-authority-strip">
        {/* GST Pillar */}
        <div className="cal-authority-card gst-theme" onClick={() => setSelectedCategory('gst')}>
          <div className="cal-auth-icon-wrap gst-icon-bg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div className="cal-auth-details">
            <span className="cal-auth-label">GST Common Portal</span>
            <strong className="cal-auth-cycle">11th &amp; 20th Monthly</strong>
            <span className="cal-auth-chips">GSTR-1 · GSTR-3B · 9C</span>
          </div>
        </div>

        {/* Income Tax Pillar */}
        <div className="cal-authority-card tax-theme" onClick={() => setSelectedCategory('direct-tax')}>
          <div className="cal-auth-icon-wrap tax-icon-bg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <line x1="9" y1="10" x2="15" y2="10"></line>
              <line x1="9" y1="13" x2="13" y2="13"></line>
              <path d="M9 10h4.5a2 2 0 0 0 0-4H9v11"></path>
            </svg>
          </div>
          <div className="cal-auth-details">
            <span className="cal-auth-label">Income Tax e-Filing</span>
            <strong className="cal-auth-cycle">Quarterly &amp; July / Oct</strong>
            <span className="cal-auth-chips">Advance Tax · ITR 1-7 · 3CD</span>
          </div>
        </div>

        {/* MCA Corporate Pillar */}
        <div className="cal-authority-card mca-theme" onClick={() => setSelectedCategory('mca')}>
          <div className="cal-auth-icon-wrap mca-icon-bg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <line x1="6" y1="21" x2="6" y2="11"></line>
              <line x1="10" y1="21" x2="10" y2="11"></line>
              <line x1="14" y1="21" x2="14" y2="11"></line>
              <line x1="18" y1="21" x2="18" y2="11"></line>
              <polygon points="12 3 2 9 22 9 12 3"></polygon>
            </svg>
          </div>
          <div className="cal-auth-details">
            <span className="cal-auth-label">MCA21 V3 Portal</span>
            <strong className="cal-auth-cycle">Sept · Oct · Nov</strong>
            <span className="cal-auth-chips">DIR-3 KYC · AOC-4 · MGT-7</span>
          </div>
        </div>

        {/* RBI FEMA Pillar */}
        <div className="cal-authority-card rbi-theme" onClick={() => setSelectedCategory('rbi')}>
          <div className="cal-auth-icon-wrap rbi-icon-bg">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <div className="cal-auth-details">
            <span className="cal-auth-label">RBI FIRMS &amp; FLAIR</span>
            <strong className="cal-auth-cycle">15th July Annually</strong>
            <span className="cal-auth-chips">FLA Return · Form 15CA/CB</span>
          </div>
        </div>
      </div>

      {/* INTERACTIVE CATEGORY FILTER TABS WITH ICONS */}
      <div className="cal-control-strip">
        <div className="cal-filter-bar" role="tablist" aria-label="Compliance Category Filter">
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            All Milestones ({STATUTORY_DEADLINES.length})
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'gst' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('gst')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            </svg>
            GST Returns
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'direct-tax' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('direct-tax')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Direct Tax &amp; ITR
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'mca' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('mca')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="21" x2="21" y2="21"></line>
              <polygon points="12 3 2 9 22 9 12 3"></polygon>
            </svg>
            MCA Corporate
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'rbi' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('rbi')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
            </svg>
            RBI &amp; FEMA
          </button>
        </div>
      </div>

      {/* BEAUTIFUL VISUAL DEADLINES GRID */}
      <div className="cal-cards-grid">
        {filteredDeadlines.map((item) => (
          <div key={item.id} className={`cal-visual-card card-theme-${item.category}`}>
            {/* Visual Calendar Chip */}
            <div className="cal-card-top-row">
              <div className={`cal-date-chip date-theme-${item.category}`}>
                <span className="chip-day">{item.shortDay}</span>
                <span className="chip-month">{item.shortMonth}</span>
              </div>
              <div className="cal-meta-badges">
                <span className={`cal-cat-pill pill-${item.category}`}>{item.categoryLabel}</span>
                <span className="cal-section-tag">{item.governingSection}</span>
              </div>
            </div>

            {/* Title & Concise Summary */}
            <h4 className="cal-card-title">{item.title}</h4>
            <p className="cal-card-summary">{item.applicability}</p>

            {/* Target Entity Chip */}
            <div className="cal-tag-strip">
              <span className="cal-entity-tag">✦ {item.tag}</span>
            </div>

            {/* Action Footer */}
            <div className="cal-card-footer">
              <span className="cal-pulse-status">
                <span className={`status-dot ${item.urgency === 'critical' ? 'critical' : 'standard'}`} />
                Statutory Cut-Off
              </span>
              <Link href="/contact" className="cal-action-arrow">
                Consult Deadline <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* STATUTORY REGULATORY SEAL FOOTER */}
      <div className="cal-statutory-footer">
        <div className="cal-ca-seal">
          <Image src="/images/ca-logo.svg" alt="CA Logo" width={28} height={28} />
        </div>
        <p className="cal-footer-text">
          <strong>Statutory Compliance Verification:</strong> Due dates reflect mandatory schedules enacted by the Ministry of Finance and the Ministry of Corporate Affairs (MCA), Government of India. Official gazette extensions are incorporated upon notification. Write to our Mumbai office to synchronize your enterprise filing calendar.
        </p>
      </div>
    </div>
  );
}
