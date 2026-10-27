# Daksh Desai & Associates — Chartered Accountants (Mumbai)
## Modern Next.js Website Architecture & Compliance Guide

A bespoke, dignified, and compliant web application built with **Next.js (App Router, TypeScript)** for **Daksh Desai & Associates, Chartered Accountants**.

Designed strictly adhering to the **Institute of Chartered Accountants of India (ICAI) Website and Advertisement Guidelines** and the **Digital Personal Data Protection Act, 2023 (DPDP Act)**.

---

### Key Features & Architectural Highlights

1. **Bespoke Editorial Aesthetics (Non-AI Generated Look)**:
   - High-contrast editorial typography: Cormorant Garamond serif headings, Inter body typography, JetBrains Mono register data.
   - Deep forest green (`#0C251F`), warm brass gold (`#C5A059`), and warm archival parchment surfaces (`#FBFBF9`).
   - Clean, dignified layouts reflecting trust, precision, and institutional authority.

2. **Strict ICAI Compliance**:
   - **Entry Disclaimer Modal**: Automatically presented on first visit. Stored via `localStorage`/`sessionStorage` once acknowledged. Accessible on demand from the top review bar and footer.
   - **Zero Advertising or Superlatives**: No prohibited marketing claims ("best CA", "zero turnaround", "trusted by thousands").
   - **Compliant Visuals**: Only official ICAI CA emblem and 35×45 passport-format photo box (no casual or decorative stock photography).
   - **No Prohibited Services**: Loan arrangements, commissions, and non-CA automated services are strictly excluded.

3. **DPDP Act 2023 Compliant Contact Form**:
   - Explicit user consent checkbox required prior to form submission.
   - API route (`/api/contact`) validating required fields, sanitizing payload, and handling submissions.
   - Dedicated Privacy Notice page (`/privacy`) detailing purpose limitation and data rights.

4. **Review & Pre-launch Mode**:
   - Top banner tracking and displaying yellow highlighted placeholders (`.fill` items) that require Daksh Desai's input (FRN, membership no., address, COP date, etc.).
   - "Highlight blanks: On/Off" toggle for reviewing the design with and without placeholder indicators.
   - Dedicated Developer Notes & Provenance page (`/review`) mapping reference sources, regulatory checklist, and launch blocker warnings.

5. **Theme Support**:
   - Seamless Light and Dark mode toggle with persistent user preference storage.

---

### Pages & Route Structure

| Route | Title | Description |
| :--- | :--- | :--- |
| `/` | Home | Hero section, firm particulars card, services glance, about snippet, industries served, and call to action |
| `/about` | About Us | Firm background, vision, practice areas, working principles |
| `/team` | Our Team | Proprietor profile (CA Daksh Desai), specialised desks, team block |
| `/services` | Services Overview | Comprehensive breakdown across 6 core practice categories |
| `/services/income-tax` | Income Tax | Return filing, AIS reconciliation, scrutiny & appeals up to ITAT |
| `/services/gst` | GST | Monthly compliance, 2B matching, refund claims, litigation & GSTAT |
| `/services/international-tax` | International Tax | Form 15CA/CB, DTAA benefits, 195 withholding, NRI repatriation |
| `/services/audit` | Audit & Assurance | Statutory audit (Companies Act / CARO), Tax audit, Internal & Stock audits |
| `/services/accounting` | Accounting & MIS | Monthly bookkeeping, Tally controls, periodic MIS reporting |
| `/services/cfo-advisory` | Virtual CFO | Cashflow forecasting, financial models, board presentations |
| `/services/corporate-law` | Corporate Law | ROC compliances, MCA filings, ESIC/PF/labour filings |
| `/insights` | Insights | Articles and technical updates (editable by firm) |
| `/faq` | FAQ | Frequently asked questions with live real-time search filtering |
| `/contact` | Contact Us | Office particulars, consultation steps, DPDP compliant enquiry form |
| `/disclaimer` | Disclaimer | ICAI regulatory disclaimer |
| `/privacy` | Privacy Notice | DPDP Act 2023 data collection, retention, and rights policy |
| `/review` | Developer Notes | Provenance table, checklist of data needed, and regulatory notes |

---

### Getting Started

#### 1. Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the live website.

#### 2. Production Build & Test
```bash
npm run build
npm run start
```

---

### Launch Checklist for Daksh Desai

Before pointing the public domain to this build, ensure the following items from `/review` are completed:
- [ ] Receive ICAI approval for firm name and issue of Firm Registration Number (FRN).
- [ ] Populate all yellow `.fill` fields on the website (address, contact numbers, email, membership number, COP date).
- [ ] Provide high-resolution 35×45mm passport-style portrait to replace `public/images/proprietor-passport.svg`.
- [ ] Remove or unpublish `/review` route and the top review banner before final public launch.
