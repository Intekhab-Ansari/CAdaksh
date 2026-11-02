# REGULATORY_COMPLIANCE.md — Official Statutory & Ethical Rulebook
> **Practice**: Daksh Desai & Associates, Chartered Accountants (Mumbai)  
> **Applicable Laws**: Chartered Accountants Act 1949, RBI Master Directions, FEMA 1999, Companies Act 2013, Income-tax Act 1961, CGST Act 2017, DPDP Act 2023, IT Act 2000.  
> **Mandate**: This document is an **inviolable regulatory guide**. Antigravity AI, any future AI assistant, and any collaborating developer **MUST NEVER VIOLATE** any of these rules when modifying copy, design, features, forms, or code on this website.

---

## 1. ICAI Code of Ethics & Website Guidelines (Chartered Accountants Act, 1949)

Under the **Chartered Accountants Act, 1949 (First Schedule, Part I, Clauses 6 and 7)** and Council Guidelines No. 1-CA(7)/06/2004 (and subsequent amendments in the ICAI Code of Ethics 2020):

### 🚫 STRICT PROHIBITIONS (Zero Tolerance)
1. **Zero Advertisements & Superlatives**:
   - **Never** use promotional claims, adjectives, or superlatives: e.g., *"Best CA in Mumbai"*, *"Top Chartered Accountant"*, *"#1 Tax Consultant"*, *"Leading CA Firm"*, *"Fastest Returns"*, *"Cheapest Fees"*, *"Guaranteed Tax Refund"*, or *"100% Success Rate"*.
   - **Never** make comparative claims against other Chartered Accountants or professional firms.
2. **Zero Commercial Solicitations & Aggressive Canvassing**:
   - **Never** use aggressive commercial call-to-actions (CTAs) such as *"Hire Us Now"*, *"Claim Your Discount"*, *"Book a Deal"*, or *"Free Filing"*.
   - **Permitted CTAs**: Dignified, factual phrases such as *"Consult Practice Office"*, *"Schedule Practice Consultation"*, *"Explore Practice Scope"*, or *"Enquire with Office"*.
3. **Zero Fee Tariffs, Discounts, or Quotations**:
   - **Never** publish price lists, service packages (e.g. "Basic / Pro / Enterprise"), hourly rates, fee discounts, or money-back guarantees on the public website.
4. **Zero Client Names or Logos**:
   - **Never** publish a list of clients, corporate logos of clients, testimonials, reviews, or star ratings on the public website, unless explicitly mandated by a statutory regulator or approved in writing by the ICAI Council.
5. **No Stylized / Modeling Photography**:
   - Partner and proprietor photographs must strictly follow the **passport-style photograph format** (35×45mm ratio, sober attire, neutral background). Glamour, modeling, or advertising-style photo shoots are strictly prohibited.

### ✅ MANDATORY INCLUSIONS (Must Always Be Present)
1. **Statutory ICAI Disclaimer**:
   - The website must clearly display the disclaimer confirming that the firm does not solicit or advertise, that information is provided on a voluntary pull basis, and that visiting the site does not constitute formal legal/audit opinion. Housed permanently in the universal footer bar and on `/disclaimer`. (Intrusive entry pop-up modal removed per firm direction).
2. **Firm Registration Particulars**:
   - Must clearly state: Firm Name (as approved by ICAI), ICAI Firm Registration Number (FRN), Constitution (Sole Proprietorship / Partnership), Head Office address in Mumbai, and Proprietor Membership Number.
3. **Mandatory 18-Digit ICAI UDIN Authentication**:
   - Every mention of audit reports, attestations, certifications, and Form 15CB must reference the mandatory 18-digit **Unique Document Identification Number (UDIN)** verified on `udin.icai.org`.
4. **Authentic CA India Emblem**:
   - The CA logo must follow the official ICAI branding standard (blue tick mark, 'CA' lettering, green 'India') with proper padding and no distortion.

---

## 2. Reserve Bank of India (RBI) & Foreign Exchange Management (FEMA) Guidelines

Chartered Accountants act as statutory auditors, concurrent auditors, and cross-border certification authorities under RBI Master Directions and FEMA, 1999:

### 🚫 STRICT PROHIBITIONS
1. **No False "RBI Empanelled / Certified Agent" Claims**:
   - A CA firm **must never** claim to be an *"RBI Authorized Agent"*, *"RBI Approval Guarantee Center"*, or *"Certified by RBI"*. The Reserve Bank of India does not certify or license private consultancy agents.
   - While firms may be listed on the RBI Multipurpose Empanelment Form (MEF) panel for bank audits, **advertising or using RBI empanelment as a commercial marketing badge is prohibited**.
2. **No Guaranteed Foreign Remittance Approvals**:
   - Never claim guaranteed repatriation or outward remittance clearances. Form 15CB is a statutory attestation of tax withholding under Section 195; Authorised Dealer (AD) Category-I banks make the final transfer decision.

### ✅ PERMITTED & MANDATED STATUTORY REFERENCES
1. **Foreign Exchange Management Act (FEMA), 1999 & Foreign Investment Framework**:
   - Foreign Direct Investment (FDI) reporting on the **RBI FIRMS Portal** (Form FC-GPR for shares allotment, Form FC-TRS for transfer of shares).
   - Overseas Direct Investment (ODI) compliance under RBI Foreign Exchange Management (Overseas Investment) Rules, 2022 and Annual Performance Report (APR).
   - Foreign Liabilities and Assets (**FLA Return**) filed annually on the **RBI FLAIR Portal** by 15th July.
2. **Form 15CA & Form 15CB Certification**:
   - Accurate certification under Section 195 of the Income-tax Act, 1961 and relevant Double Taxation Avoidance Agreements (DTAA) for outward foreign remittances.
3. **Banking & NBFC Statutory Audits**:
   - Statutory Central Audits (SCAs) and Statutory Branch Audits (SBAs) conducted in strict adherence to RBI Master Directions on Prudential Norms on Income Recognition, Asset Classification (IRAC), and Provisioning.
   - Non-Banking Financial Company (NBFC) prudential compliance under RBI Master Directions on capital adequacy (CRAR) and Scale Based Regulation (SBR).

---

## 3. Digital Personal Data Protection Act, 2023 (DPDP Act) & Privacy Standards

All enquiry forms, consultation workflows, and user data capture must comply with the DPDP Act, 2023:

1. **Explicit, Granular Consent**:
   - All contact forms (`ContactForm.tsx`) must feature an unticked, mandatory consent checkbox before data submission.
   - Purpose specification: The data must only be collected to respond to the specific professional enquiry initiated by the user.
2. **Transparent Privacy Notice (`/privacy`)**:
   - Clear disclosure of data fiduciary particulars, retention periods, grievance officer contact, and user rights (Right to Access, Right to Correction, Right to Erasure, and Right to Withdraw Consent).
3. **Technical Safeguards**:
   - IP-based rate limiting (5 submissions per 60 seconds) to prevent brute-force or denial-of-service spam floods.
   - Server-side input sanitization stripping HTML tags (`<`, `>`) to prevent Cross-Site Scripting (XSS).
   - Anti-spam honeypot traps to prevent automated harvesting.
   - Strict Content Security Policy (CSP), HSTS, and X-Frame-Options headers.

---

## 4. Companies Act, 2013 & Ministry of Corporate Affairs (MCA) Regulations

When citing corporate law services, company formation, or audit mandates:

1. **Section 139 (Statutory Auditor Appointment)**:
   - Accurately state that statutory audit is mandatory for all companies incorporated under the Companies Act, 2013, regardless of turnover or paid-up share capital.
2. **Section 141 & Section 144 (Independence & Prohibited Non-Audit Services)**:
   - Adhere to the statutory prohibition: a statutory auditor of a company cannot provide internal audit, accounting/bookkeeping, or investment advisory services to the same audit client.
3. **Section 143(3)(i) & CARO 2020**:
   - Factual references to Internal Financial Controls over Financial Reporting (IFCoFR) and the Companies (Auditor's Report) Order, 2020.
4. **MCA21 V3 Filing Compliance**:
   - Annual filings: Form AOC-4 (Financial Statements), Form MGT-7/7A (Annual Return), and Rule 12A annual Director KYC (DIR-3 KYC).

---

## 5. Income-tax Act, 1961 & Goods and Services Tax (GST) Regulations

1. **Section 44AB Tax Audit Thresholds**:
   - General business turnover threshold: ₹1 Crore.
   - Digital transaction safe harbor: ₹10 Crore (applicable only when cash receipts and cash payments do not exceed 5% of aggregate transactions).
   - Professional gross receipts threshold: ₹50 Lakhs (or ₹75 Lakhs under Section 44ADA where digital receipts are ≥ 95%).
2. **Presumptive Taxation (Section 44AD / 44ADA)**:
   - Section 44AD applies to eligible businesses up to ₹2 Crore (or ₹3 Crore where digital receipts ≥ 95%).
   - Section 44ADA applies to specified professionals up to ₹50 Lakhs (or ₹75 Lakhs where digital receipts ≥ 95%).
   - Presumptive taxation is **not** available to companies or LLPs.
3. **GST E-Invoicing (Rule 48(4) of CGST Rules)**:
   - Mandatory for registered taxpayers whose aggregate annual turnover exceeds ₹5 Crore in any preceding financial year from 2017–18 onwards.
4. **Input Tax Credit Matching (Section 16(2)(aa) & Rule 36(4))**:
   - ITC can only be claimed if the invoice details have been uploaded by the supplier in their GSTR-1/IFF and reflected in the buyer's auto-populated Form GSTR-2B.

---

## 6. Developer & AI Implementation Verification Checklist

Before deploying any feature or code change, run through this verification checklist:

| Item | Requirement | Verified? |
| :--- | :--- | :--- |
| **Superlatives** | Are words like "best", "top", "leader", "#1", "cheapest", "guaranteed" 100% absent? | [ ] |
| **Pricing / Tariffs** | Are fee amounts, price tags, discounts, and packages 100% absent? | [ ] |
| **Client Privacy** | Are private client names and client company logos 100% absent? | [ ] |
| **Disclaimer Modal** | Does the ICAI entry disclaimer modal display and require acknowledgment? | [ ] |
| **UDIN Reference** | Does every statutory certificate/audit reference mention the mandatory 18-digit UDIN? | [ ] |
| **RBI Accuracy** | Are FEMA and remittance references factual without claiming "RBI agent" or "guarantees"? | [ ] |
| **DPDP Consent** | Do all forms contain a mandatory consent checkbox and link to `/privacy`? | [ ] |
| **Passport Photo** | Does the proprietor profile retain the 35×45mm sober passport format? | [ ] |
| **Build Integrity** | Does `npm run build` succeed with zero TypeScript or bundling errors? | [ ] |
