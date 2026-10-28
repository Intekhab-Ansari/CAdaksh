'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DeskItem {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  actReference: string;
  description: string;
  deliverables: string[];
  link: string;
  linkText: string;
}

const DESK_ITEMS: DeskItem[] = [
  {
    id: 'direct-tax',
    tabLabel: 'Direct Tax & Scrutiny',
    badge: 'Direct Tax Desk',
    title: 'Income Tax Filings, AIS Reconciliation & Scrutiny Defense',
    actReference: 'Governed by Income-tax Act, 1961',
    description:
      'Rigorous preparation and representation across corporate, partnership, and individual tax matters. We proactively audit AIS, TIS, and Form 26AS data to eliminate statutory mismatches before filing.',
    deliverables: [
      'Corporate & Non-Corporate ITR Filing (ITR-1 through ITR-7)',
      'Scrutiny & Re-assessment defense under Sec 143(3), 147 & 148',
      'Old vs. New Tax Regime analytical modeling for maximum statutory benefit',
      'Advance Tax computation and quarterly cash-flow planning',
      'Appellate submissions and paper book preparation before CIT(Appeals)',
    ],
    link: '/services/income-tax',
    linkText: 'Explore Direct Tax Scope →',
  },
  {
    id: 'gst-compliance',
    tabLabel: 'GST & Indirect Taxes',
    badge: 'Indirect Tax Desk',
    title: 'Comprehensive GST Returns, 2B Reconciliation & Audit',
    actReference: 'Governed by CGST, SGST & IGST Acts, 2017',
    description:
      'Complete indirect tax management designed to safeguard Input Tax Credit (ITC). We perform granular invoice-level matching between your books and supplier-filed GSTR-2B to block tax leakages.',
    deliverables: [
      'Monthly/Quarterly GSTR-1, GSTR-3B filings with reconciliation',
      'Invoice-level GSTR-2B purchase matching under Section 16(2)(aa)',
      'Annual GST Returns (GSTR-9) and Reconciliation Statements (GSTR-9C)',
      'GST refund applications (LUT exports, inverted duty structure)',
      'Departmental notice representation and audit assistance',
    ],
    link: '/services/gst',
    linkText: 'Explore GST Scope →',
  },
  {
    id: 'audit-assurance',
    tabLabel: 'Audit & Assurance',
    badge: 'Statutory Audit Desk',
    title: 'Statutory Audits, Tax Audits & Internal Financial Controls',
    actReference: 'Governed by Companies Act, 2013 & ICAI Auditing Standards (SAs)',
    description:
      'Independent, objective assurance grounded in ICAI Standards on Auditing. We verify financial statements to give stakeholders and lending institutions authentic credibility.',
    deliverables: [
      'Statutory Audit under Section 139 of the Companies Act, 2013',
      'Tax Audit under Section 44AB with Form 3CA/3CB and Form 3CD',
      'Internal Financial Controls over Financial Reporting (IFCoFR) review',
      'Stock & Inventory physical audits with age-wise valuation (AS-2)',
      'Mandatory 18-digit ICAI UDIN authentication on all certificates',
    ],
    link: '/services/audit',
    linkText: 'Explore Audit Scope →',
  },
  {
    id: 'fema-international',
    tabLabel: 'FEMA & International Tax',
    badge: 'Cross-Border Desk',
    title: 'Form 15CA/15CB, Foreign Remittances & RBI FEMA Reporting',
    actReference: 'Governed by Foreign Exchange Management Act (FEMA), 1999 & RBI Regulations',
    description:
      'Specialized regulatory guidance for Indian enterprises expanding overseas and global investors remitting capital into India. Structured in strict compliance with RBI Master Directions.',
    deliverables: [
      'Chartered Accountant certification (Form 15CB) & online Form 15CA filing',
      'Double Taxation Avoidance Agreement (DTAA) Section 90/91 relief analysis',
      'FDI and ODI compliance under RBI Master Directions (FC-GPR / FC-TRS / APR)',
      'NRI taxation: Capital gains on Indian immovable property and repatriation',
      'Foreign Assets reporting (Schedule FA) in Indian Income Tax Returns',
    ],
    link: '/services/international-tax',
    linkText: 'Explore FEMA & Cross-Border Scope →',
  },
  {
    id: 'corporate-cfo',
    tabLabel: 'Corporate & Virtual CFO',
    badge: 'Advisory Desk',
    title: 'MCA Compliances, Company Formation & Strategic MIS',
    actReference: 'Governed by Companies Act, 2013 & MCA21 V3 Framework',
    description:
      'End-to-end statutory support for company formation and secretarial filings paired with executive financial management for growing enterprises seeking senior CA oversight.',
    deliverables: [
      'Company & LLP Incorporation (SPICe+, RUN, FiLLiP) with PAN/TAN/Bank opening',
      'Annual MCA filings: Financial Statements (AOC-4) and Annual Return (MGT-7)',
      'Director KYC (DIR-3 KYC) and statutory register maintenance',
      'Virtual CFO: Monthly MIS, burn rate management, and working capital cycles',
      'Labour Law registrations: EPFO, ESIC, and Profession Tax compliance',
    ],
    link: '/services/cfo-advisory',
    linkText: 'Explore Advisory & CFO Scope →',
  },
];

export default function StatutoryDeskConsole() {
  const [activeTab, setActiveTab] = useState(DESK_ITEMS[0].id);

  const currentDesk = DESK_ITEMS.find((item) => item.id === activeTab) || DESK_ITEMS[0];

  return (
    <div className="desk-console-card">
      <div className="desk-console-header">
        <div className="desk-console-status">
          <span className="live-pulse-dot" aria-hidden="true" />
          <span className="desk-console-label">PRACTICE DESK NAVIGATOR</span>
        </div>
        <span className="desk-console-act">{currentDesk.actReference}</span>
      </div>

      {/* Tabs */}
      <div className="desk-tabs-bar" role="tablist" aria-label="Practice Desks">
        {DESK_ITEMS.map((item) => {
          const isSelected = item.id === activeTab;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={isSelected}
              className={`desk-tab-btn ${isSelected ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.tabLabel}
            </button>
          );
        })}
      </div>

      {/* Active Content Panel */}
      <div className="desk-panel-body" role="tabpanel">
        <div className="desk-panel-meta">
          <span className="desk-badge">{currentDesk.badge}</span>
        </div>

        <h3 className="desk-panel-title">{currentDesk.title}</h3>
        <p className="desk-panel-desc">{currentDesk.description}</p>

        <div className="desk-deliverables-box">
          <span className="desk-deliv-header">Core Statutory Scope &amp; Deliverables:</span>
          <ul className="desk-deliv-list">
            {currentDesk.deliverables.map((deliv, idx) => (
              <li key={idx} className="desk-deliv-item">
                <svg className="desk-check-icon" width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{deliv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="desk-panel-footer">
          <Link href={currentDesk.link} className="desk-action-link">
            {currentDesk.linkText}
          </Link>
          <span className="desk-confidential-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Partner-led assignment
          </span>
        </div>
      </div>
    </div>
  );
}

