'use client';

import { useState } from 'react';
import Link from 'next/link';

type EntityType = 'individual' | 'llp' | 'pvt-ltd';
type TurnoverRange = 'under-50l' | '50l-to-2cr' | '2cr-to-10cr' | 'above-10cr';
type DigitalRatio = 'high' | 'standard';

export default function AuditDiagnosticTool() {
  const [entityType, setEntityType] = useState<EntityType>('pvt-ltd');
  const [turnover, setTurnover] = useState<TurnoverRange>('50l-to-2cr');
  const [digitalRatio, setDigitalRatio] = useState<DigitalRatio>('high');

  // Diagnostic calculations based on Income-tax Act 1961 & Companies Act 2013
  const isCompany = entityType === 'pvt-ltd';
  const isOver10Cr = turnover === 'above-10cr';
  const isOver2Cr = turnover === '2cr-to-10cr' || isOver10Cr;
  const isOver50L = turnover !== 'under-50l';

  // Tax Audit under Section 44AB
  let taxAuditRequired = false;
  let taxAuditReason = '';

  if (isOver10Cr) {
    taxAuditRequired = true;
    taxAuditReason = 'Mandatory under Section 44AB — gross business turnover exceeds ₹10 Crore.';
  } else if (isOver2Cr) {
    if (digitalRatio === 'high') {
      taxAuditRequired = false;
      taxAuditReason = 'Exempt from Section 44AB if cash receipts and payments do not exceed 5% (turnover within ₹10 Crore digital safe-harbor threshold).';
    } else {
      taxAuditRequired = true;
      taxAuditReason = 'Applicable under Section 44AB — cash transactions exceed 5% and turnover exceeds ₹1 Crore.';
    }
  } else {
    taxAuditReason = 'Exempt under general thresholds unless profit declared is lower than presumptive norms under Sec 44AD/44ADA.';
  }

  // Statutory Audit under Companies Act 2013
  const statutoryAuditMandatory = isCompany;
  const statutoryAuditReason = isCompany
    ? 'Mandatory under Section 139 of the Companies Act, 2013 for every incorporated company regardless of capital or turnover.'
    : 'Not mandatory under Companies Act. Applicable only if specific regulatory or partnership agreement conditions apply.';

  // GST E-Invoicing (Threshold is ₹5 Crore turnover in any preceding FY)
  const gstEInvoicingApplicable = isOver10Cr || turnover === '2cr-to-10cr';

  return (
    <div className="audit-diagnostic-card">
      <div className="diagnostic-header">
        <span className="diagnostic-pill">STATUTORY DIAGNOSTIC TOOL</span>
        <h3 className="diagnostic-title">Audit Applicability &amp; Statutory Compliance Navigator</h3>
        <p className="diagnostic-desc">
          Evaluate statutory audit applicability, presumptive taxation options, and GST requirements under the Income-tax Act, 1961 and Companies Act, 2013.
        </p>
      </div>

      <div className="diagnostic-selectors-grid">
        {/* Selector 1: Entity Structure */}
        <div className="diagnostic-select-group">
          <label className="diagnostic-label">1. Entity Legal Structure</label>
          <div className="diagnostic-btn-pill-group">
            <button
              type="button"
              className={`diag-pill-btn ${entityType === 'pvt-ltd' ? 'active' : ''}`}
              onClick={() => setEntityType('pvt-ltd')}
            >
              Private Limited / Company
            </button>
            <button
              type="button"
              className={`diag-pill-btn ${entityType === 'llp' ? 'active' : ''}`}
              onClick={() => setEntityType('llp')}
            >
              LLP / Partnership Firm
            </button>
            <button
              type="button"
              className={`diag-pill-btn ${entityType === 'individual' ? 'active' : ''}`}
              onClick={() => setEntityType('individual')}
            >
              Proprietor / Professional
            </button>
          </div>
        </div>

        {/* Selector 2: Annual Turnover */}
        <div className="diagnostic-select-group">
          <label className="diagnostic-label">2. Annual Gross Turnover / Receipts</label>
          <div className="diagnostic-btn-pill-group">
            <button
              type="button"
              className={`diag-pill-btn ${turnover === 'under-50l' ? 'active' : ''}`}
              onClick={() => setTurnover('under-50l')}
            >
              &lt; ₹50 Lakhs
            </button>
            <button
              type="button"
              className={`diag-pill-btn ${turnover === '50l-to-2cr' ? 'active' : ''}`}
              onClick={() => setTurnover('50l-to-2cr')}
            >
              ₹50 Lakhs – ₹2 Crore
            </button>
            <button
              type="button"
              className={`diag-pill-btn ${turnover === '2cr-to-10cr' ? 'active' : ''}`}
              onClick={() => setTurnover('2cr-to-10cr')}
            >
              ₹2 Crore – ₹10 Crore
            </button>
            <button
              type="button"
              className={`diag-pill-btn ${turnover === 'above-10cr' ? 'active' : ''}`}
              onClick={() => setTurnover('above-10cr')}
            >
              &gt; ₹10 Crore
            </button>
          </div>
        </div>

        {/* Selector 3: Banking / Digital Transactions */}
        <div className="diagnostic-select-group">
          <label className="diagnostic-label">3. Digital / Banking Channel Ratio</label>
          <div className="diagnostic-btn-pill-group">
            <button
              type="button"
              className={`diag-pill-btn ${digitalRatio === 'high' ? 'active' : ''}`}
              onClick={() => setDigitalRatio('high')}
            >
              ≥ 95% via Banking / Digital Channels
            </button>
            <button
              type="button"
              className={`diag-pill-btn ${digitalRatio === 'standard' ? 'active' : ''}`}
              onClick={() => setDigitalRatio('standard')}
            >
              &lt; 95% (Cash transactions exceed 5%)
            </button>
          </div>
        </div>
      </div>

      {/* Results Display */}
      <div className="diagnostic-results-box">
        <h4 className="results-box-title">Statutory Diagnostic Summary</h4>

        <div className="results-grid">
          {/* Statutory Audit */}
          <div className="result-metric-card">
            <div className="result-metric-head">
              <span className="result-metric-name">Statutory Company Audit</span>
              <span className={`result-tag ${statutoryAuditMandatory ? 'tag-mandatory' : 'tag-conditional'}`}>
                {statutoryAuditMandatory ? 'MANDATORY' : 'CONDITIONAL'}
              </span>
            </div>
            <p className="result-metric-text">{statutoryAuditReason}</p>
            <span className="result-metric-law">Governed by Companies Act, 2013 · Sec 139</span>
          </div>

          {/* Tax Audit Sec 44AB */}
          <div className="result-metric-card">
            <div className="result-metric-head">
              <span className="result-metric-name">Tax Audit (Form 3CD)</span>
              <span className={`result-tag ${taxAuditRequired ? 'tag-mandatory' : 'tag-exempt'}`}>
                {taxAuditRequired ? 'AUDIT APPLICABLE' : 'AUDIT EXEMPT'}
              </span>
            </div>
            <p className="result-metric-text">{taxAuditReason}</p>
            <span className="result-metric-law">Governed by Income-tax Act, 1961 · Sec 44AB</span>
          </div>

          {/* GST E-Invoicing */}
          <div className="result-metric-card">
            <div className="result-metric-head">
              <span className="result-metric-name">GST E-Invoicing (IRN)</span>
              <span className={`result-tag ${gstEInvoicingApplicable ? 'tag-mandatory' : 'tag-exempt'}`}>
                {gstEInvoicingApplicable ? 'MANDATORY' : 'NOT TRIGGERED'}
              </span>
            </div>
            <p className="result-metric-text">
              {gstEInvoicingApplicable
                ? 'Mandatory under Rule 48(4) of CGST Rules — gross turnover exceeds ₹5 Crore in any financial year.'
                : 'Turnover within the ₹5 Crore threshold. Standard GST invoicing permitted.'}
            </p>
            <span className="result-metric-law">Governed by CGST Rules, 2017 · Rule 48(4)</span>
          </div>

          {/* Presumptive Taxation */}
          <div className="result-metric-card">
            <div className="result-metric-head">
              <span className="result-metric-name">Presumptive Taxation (44AD / 44ADA)</span>
              <span className={`result-tag ${!isCompany && !isOver10Cr ? 'tag-eligible' : 'tag-ineligible'}`}>
                {!isCompany && !isOver10Cr ? 'ELIGIBLE' : 'NOT APPLICABLE'}
              </span>
            </div>
            <p className="result-metric-text">
              {isCompany
                ? 'Incorporated companies are not eligible for presumptive taxation under Section 44AD/44ADA.'
                : !isOver2Cr
                ? 'Eligible assessees can declare profits at prescribed presumptive rates (6% / 8% or 50% for professionals) without maintaining detailed books of account.'
                : 'Turnover exceeds presumptive eligibility ceilings.'}
            </p>
            <span className="result-metric-law">Governed by Income-tax Act, 1961 · Sec 44AD / 44ADA</span>
          </div>
        </div>

        <div className="diagnostic-foot-action">
          <p className="diagnostic-disclaimer">
            <strong>Statutory Disclaimer:</strong> This diagnostic tool is an educational aid prepared strictly in accordance with ICAI website guidelines and current Indian taxation statutes. It does not substitute individualized professional consultation. A qualified Chartered Accountant must examine individual transaction records, partnership deeds, and books of account.
          </p>
          <Link href="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
            Schedule Diagnostic Review
          </Link>
        </div>
      </div>
    </div>
  );
}

