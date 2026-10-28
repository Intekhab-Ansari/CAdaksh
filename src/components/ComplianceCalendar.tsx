'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DueDateItem {
  id: string;
  category: 'direct-tax' | 'gst' | 'mca' | 'rbi' | 'tds';
  categoryLabel: string;
  dueDate: string;
  governingSection: string;
  title: string;
  applicability: string;
  importance: 'critical' | 'standard';
}

const STATUTORY_DEADLINES: DueDateItem[] = [
  {
    id: 'gstr-1',
    category: 'gst',
    categoryLabel: 'GST',
    dueDate: '11th of every month',
    governingSection: 'Section 37, CGST Act, 2017',
    title: 'GSTR-1 Monthly Return',
    applicability: 'All regular registered taxpayers with turnover > ₹5 Crore or opting for monthly filing.',
    importance: 'critical',
  },
  {
    id: 'gstr-3b',
    category: 'gst',
    categoryLabel: 'GST',
    dueDate: '20th of every month',
    governingSection: 'Section 39, CGST Act, 2017',
    title: 'GSTR-3B Summary Return & Tax Payment',
    applicability: 'Mandatory for all regular GST registrants to discharge output tax liability and claim eligible ITC.',
    importance: 'critical',
  },
  {
    id: 'tds-deposit',
    category: 'tds',
    categoryLabel: 'TDS / TCS',
    dueDate: '7th of subsequent month',
    governingSection: 'Section 200, Income-tax Act, 1961',
    title: 'Monthly TDS / TCS Tax Deposit',
    applicability: 'All deductors who deducted TDS/TCS during the preceding month (Challan ITNS 281).',
    importance: 'standard',
  },
  {
    id: 'advance-tax-q1',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    dueDate: '15th June',
    governingSection: 'Section 208–211, Income-tax Act, 1961',
    title: 'Advance Tax — 1st Installment (15%)',
    applicability: 'All corporate and non-corporate assessees with estimated net tax liability ≥ ₹10,000.',
    importance: 'standard',
  },
  {
    id: 'advance-tax-q2',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    dueDate: '15th September',
    governingSection: 'Section 208–211, Income-tax Act, 1961',
    title: 'Advance Tax — 2nd Installment (45% cumulative)',
    applicability: 'Assessees subject to advance tax provisions to avoid Section 234C interest.',
    importance: 'critical',
  },
  {
    id: 'itr-non-audit',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    dueDate: '31st July',
    governingSection: 'Section 139(1), Income-tax Act, 1961',
    title: 'ITR Filing (Non-Audit Cases)',
    applicability: 'Individuals, HUFs, and non-audit partnership firms not subject to Tax Audit under Sec 44AB.',
    importance: 'critical',
  },
  {
    id: 'tax-audit-report',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    dueDate: '30th September',
    governingSection: 'Section 44AB, Income-tax Act, 1961',
    title: 'Tax Audit Report (Form 3CA/3CB & Form 3CD)',
    applicability: 'Assessees carrying on business or profession whose gross turnover exceeds the statutory threshold.',
    importance: 'critical',
  },
  {
    id: 'itr-audit',
    category: 'direct-tax',
    categoryLabel: 'Income Tax',
    dueDate: '31st October',
    governingSection: 'Section 139(1), Income-tax Act, 1961',
    title: 'Corporate & Tax Audit Assessee ITR Filing',
    applicability: 'Companies and taxpayers whose accounts are required to be audited under any Indian law.',
    importance: 'critical',
  },
  {
    id: 'dir-3-kyc',
    category: 'mca',
    categoryLabel: 'MCA & Corporate',
    dueDate: '30th September',
    governingSection: 'Rule 12A, Companies (Appointment & Qualification) Rules',
    title: 'Annual Director KYC (DIR-3 KYC / Web)',
    applicability: 'Every individual who holds a Director Identification Number (DIN) as of 31st March.',
    importance: 'standard',
  },
  {
    id: 'aoc-4',
    category: 'mca',
    categoryLabel: 'MCA & Corporate',
    dueDate: '30 days from AGM (Typically 29th Oct)',
    governingSection: 'Section 137, Companies Act, 2013',
    title: 'Filing Financial Statements (Form AOC-4)',
    applicability: 'Every Private Limited and Public Limited company registered under the Companies Act.',
    importance: 'critical',
  },
  {
    id: 'mgt-7',
    category: 'mca',
    categoryLabel: 'MCA & Corporate',
    dueDate: '60 days from AGM (Typically 29th Nov)',
    governingSection: 'Section 92, Companies Act, 2013',
    title: 'Annual Return (Form MGT-7 / MGT-7A)',
    applicability: 'Mandatory annual secretarial return for all companies registered with the Ministry of Corporate Affairs.',
    importance: 'critical',
  },
  {
    id: 'rbi-fla',
    category: 'rbi',
    categoryLabel: 'RBI & FEMA',
    dueDate: '15th July annually',
    governingSection: 'FEMA, 1999 & RBI Master Directions',
    title: 'Annual Return on Foreign Liabilities & Assets (FLA)',
    applicability: 'All Indian entities that have received Foreign Direct Investment (FDI) or made Overseas Investment (ODI).',
    importance: 'critical',
  },
  {
    id: 'gstr-9',
    category: 'gst',
    categoryLabel: 'GST',
    dueDate: '31st December annually',
    governingSection: 'Section 44, CGST Act, 2017',
    title: 'Annual GST Return (GSTR-9) & Reconciliation (GSTR-9C)',
    applicability: 'Regular taxpayers; GSTR-9C self-certified reconciliation for turnover > ₹5 Crore.',
    importance: 'critical',
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
      <div className="calendar-widget-top">
        <div>
          <span className="calendar-pill">STATUTORY DEADLINE MONITOR · INDIA</span>
          <h3 className="calendar-widget-title">Key Compliance Timelines &amp; Filing Calendar</h3>
          <p className="calendar-widget-subtitle">
            Essential statutory filing milestones across Direct Tax, GST, Ministry of Corporate Affairs (MCA), and RBI FEMA regulations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="calendar-filter-bar" role="tablist" aria-label="Compliance Category Filter">
          <button
            type="button"
            className={`calendar-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Deadlines ({STATUTORY_DEADLINES.length})
          </button>
          <button
            type="button"
            className={`calendar-filter-btn ${selectedCategory === 'direct-tax' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('direct-tax')}
          >
            Direct Tax
          </button>
          <button
            type="button"
            className={`calendar-filter-btn ${selectedCategory === 'gst' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('gst')}
          >
            GST
          </button>
          <button
            type="button"
            className={`calendar-filter-btn ${selectedCategory === 'mca' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('mca')}
          >
            MCA &amp; Corporate
          </button>
          <button
            type="button"
            className={`calendar-filter-btn ${selectedCategory === 'rbi' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('rbi')}
          >
            RBI &amp; FEMA
          </button>
        </div>
      </div>

      {/* Deadlines Grid */}
      <div className="calendar-cards-grid">
        {filteredDeadlines.map((item) => (
          <div key={item.id} className="calendar-deadline-card">
            <div className="deadline-card-header">
              <span className={`deadline-cat-badge cat-${item.category}`}>{item.categoryLabel}</span>
              <span className="deadline-date-badge">{item.dueDate}</span>
            </div>

            <h4 className="deadline-card-title">{item.title}</h4>
            <span className="deadline-governing-section">{item.governingSection}</span>
            <p className="deadline-card-app">{item.applicability}</p>

            <div className="deadline-card-footer">
              <span className="deadline-status-tag">
                <span className="status-indicator-dot" />
                Statutory Milestone
              </span>
              <Link href="/contact" className="deadline-plan-link">
                Plan Filing →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-statutory-notice">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span>
          <strong>Statutory Compliance Notice:</strong> Due dates reflect statutory timelines as enacted by the Ministry of Finance and the Ministry of Corporate Affairs, Government of India. Official extensions issued by CBDT, CBIC, or MCA are incorporated upon gazette notification. Consult our office to review your firm&apos;s exact statutory filing calendar.
        </span>
      </div>
    </div>
  );
}

