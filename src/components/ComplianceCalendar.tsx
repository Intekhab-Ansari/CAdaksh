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
    governingSection: 'Rule 12A · Companies Rules',
    title: 'DIR-3 KYC Web / e-Form',
    applicability: 'Mandatory annual KYC for every individual allotted Director Identification Number (DIN).',
    tag: 'All DIN Holders as on March 31',
    urgency: 'critical',
  },
  {
    id: 'aoc-4',
    category: 'mca',
    categoryLabel: 'MCA',
    shortDay: '30',
    shortMonth: 'DAYS OF AGM',
    governingSection: 'Sec 137 · Companies Act',
    title: 'Form AOC-4 Financial Statements',
    applicability: 'Filing adopted balance sheet, P&L, directors report & auditor report with ROC.',
    tag: 'Companies Act, 2013',
    urgency: 'standard',
  },
  {
    id: 'mgt-7',
    category: 'mca',
    categoryLabel: 'MCA',
    shortDay: '60',
    shortMonth: 'DAYS OF AGM',
    governingSection: 'Sec 92 · Companies Act',
    title: 'Form MGT-7 / 7A Annual Return',
    applicability: 'Filing annual return detailing shareholding, board meetings & compliance status.',
    tag: 'Companies Act, 2013',
    urgency: 'standard',
  },
  {
    id: 'fla-return',
    category: 'rbi',
    categoryLabel: 'RBI / FEMA',
    shortDay: '15th',
    shortMonth: 'JULY',
    governingSection: 'A.P. (DIR Series) · RBI',
    title: 'FLA Return (Foreign Assets & Liabilities)',
    applicability: 'Mandatory annual return on FLAIR portal for Indian entities with FDI or ODI.',
    tag: 'FEMA, 1999 & RBI Directions',
    urgency: 'critical',
  },
  {
    id: 'form-15ca-cb',
    category: 'rbi',
    categoryLabel: 'FEMA Remittance',
    shortDay: 'PRIOR',
    shortMonth: 'TO REMIT',
    governingSection: 'Sec 195(6) · IT Act & FEMA',
    title: 'Form 15CA & 15CB Attestation',
    applicability: 'Statutory CA certificate & electronic declaration prior to foreign foreign remittance.',
    tag: 'Cross-Border Bank Remittance',
    urgency: 'critical',
  },
];

export default function ComplianceCalendar() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const filteredDeadlines =
    selectedCategory === 'all'
      ? STATUTORY_DEADLINES
      : STATUTORY_DEADLINES.filter((item) => item.category === selectedCategory);

  // Show 4 items initially in grid format (2x2 on mobile, 4-col on desktop), unless expanded
  const displayedDeadlines = isExpanded
    ? filteredDeadlines
    : filteredDeadlines.slice(0, 4);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setIsExpanded(false);
  };

  return (
    <div className="compliance-calendar-widget">
      {/* INTERACTIVE CATEGORY FILTER TABS WITH ICONS */}
      <div className="cal-control-strip">
        <div className="cal-filter-bar" role="tablist" aria-label="Compliance Category Filter">
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('all')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            All Milestones ({STATUTORY_DEADLINES.length})
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'gst' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('gst')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            </svg>
            GST Returns
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'direct-tax' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('direct-tax')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Direct Tax &amp; ITR
          </button>
          <button
            type="button"
            className={`cal-tab-btn ${selectedCategory === 'mca' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('mca')}
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
            onClick={() => handleCategoryChange('rbi')}
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
        {displayedDeadlines.map((item) => (
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

      {/* EXPAND / COLLAPSE BUTTON (SHOW MORE) */}
      {filteredDeadlines.length > 4 && (
        <div className="cal-expand-wrap">
          <button
            type="button"
            className="cal-expand-btn"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            <span className="cal-btn-label">
              {isExpanded ? (
                'Show Fewer Milestones'
              ) : (
                <>
                  <span>View All {filteredDeadlines.length} Milestones</span>
                  <span className="cal-btn-counter">+{filteredDeadlines.length - 4}</span>
                </>
              )}
            </span>
            <svg
              className={`expand-chevron ${isExpanded ? 'rotated' : ''}`}
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      )}

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
