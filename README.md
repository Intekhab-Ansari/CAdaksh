# Daksh Desai & Associates — Chartered Accountants (Mumbai)
## Modern Next.js Website Architecture, Security & Safe Git Guide

A production-grade, dignified, and compliant web application built with **Next.js 15 (App Router, TypeScript)** for **Daksh Desai & Associates, Chartered Accountants**.

Designed strictly adhering to the **Institute of Chartered Accountants of India (ICAI) Code of Ethics & Website Guidelines**, the **Reserve Bank of India (RBI) Regulations & Master Directions**, and the **Digital Personal Data Protection Act, 2023 (DPDP Act)**, featuring a bespoke Sovereign Architectural standard.

---

### Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15.5+ (App Router) |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Vanilla CSS (`src/styles/globals.css`) — Fully responsive, bespoke design system |
| **Fonts** | Plus Jakarta Sans, Cormorant Garamond, IBM Plex Mono |
| **Database** | Supabase (`@supabase/supabase-js`) for contact enquiries |
| **Security** | Strict CSP, HSTS, X-Frame-Options, anti-spam honeypot, rate limiting |
| **Deployment** | Hostinger Node.js / Vercel |

---

### Design System & Visual Identity (Bespoke Sovereign Architecture)

- **Pure Executive Light Palette**: Authoritative, clean architectural light palette with warm alabaster and crisp white surfaces.
- **Deep Obsidian Slate Navy (`#0B1528`) & Oxford Navy (`#112540`)**: Primary typography, buttons, header bar, and structural framework.
- **Sovereign Champagne Gold & Burnished Brass (`#C5A059` / `#B89047`)**: Premium hallmark of statutory precision replacing any third-party ticker ribbons.
- **Asymmetric Editorial Hero**: Authoritative editorial title, live credentials dock, and the interactive **Statutory Desk Console**.
- **Interactive Indian Compliance Calendar**: Live due-date tracker for Income Tax, GST, MCA, and RBI/FEMA filing deadlines.
- **Statutory Audit & Tax Applicability Navigator**: Educational diagnostic tool for Section 44AB/44AD/44ADA and Companies Act 2013 audit requirements.
- **Executive Sector Advisory Matrix**: 6-card sector focus (BFSI, Tech & SaaS, Manufacturing, Healthcare & Trusts, Real Estate & RERA, Family Offices & NRIs).
- **Official Regulatory Gateway**: Verified direct links to official Indian Government, RBI, and ICAI portals.
- **Mandatory 18-Digit ICAI UDIN Commitment**: Integrated in the footer and institutional register bars.

---

### Pages & Route Map

| Route | Title | Description |
| :--- | :--- | :--- |
| `/` | Home | Hero 6-card showcase, red ticker, ICAI bar, about section, industries, CTA |
| `/about` | About Us | Firm origin, vision, practice areas, working principles |
| `/team` | Our Team | Proprietor profile (CA Daksh Desai), specialised desks, team block |
| `/services` | Services | Comprehensive directory of all 7 practice areas |
| `/services/income-tax` | Income Tax | Return filing, AIS reconciliation, scrutiny & appeals up to ITAT |
| `/services/gst` | GST | Monthly compliance, 2B matching, refund claims, litigation & GSTAT |
| `/services/international-tax` | International Tax | Form 15CA/CB, DTAA benefits, 195 withholding, NRI repatriation |
| `/services/audit` | Audit & Assurance | Statutory audit (Companies Act / CARO), Tax audit, Internal & Stock audits |
| `/services/accounting` | Accounting & MIS | Monthly bookkeeping, Tally controls, periodic MIS reporting |
| `/services/cfo-advisory` | Virtual CFO | Cashflow forecasting, financial models, board presentations |
| `/services/corporate-law` | Corporate Law | ROC compliances, MCA filings, ESIC/PF/labour filings |
| `/insights` | Insights | Articles, regulatory updates, and technical bulletins |
| `/faq` | FAQ | Frequently asked questions with instant real-time search filtering |
| `/contact` | Contact Us | Office particulars, 3-step consultation workflow, DPDP-compliant enquiry form |
| `/disclaimer` | Disclaimer | ICAI regulatory disclaimer |
| `/privacy` | Privacy Notice | DPDP Act 2023 data collection, retention, and rights policy |
| `/review` | Developer Notes | Pre-launch blank tracker (`.fill` counters), provenance, and blocker notes |
| `/api/contact` | API Route | Secure POST endpoint with rate limiting, honeypot, and Supabase integration |

---

### Security Features & Hardening

1. **HTTP Security Headers (`next.config.mjs`)**:
   - `Content-Security-Policy (CSP)`: Enforces safe origins for scripts, fonts, stylesheets, images, and API connections.
   - `Strict-Transport-Security (HSTS)`: `max-age=63072000; includeSubDomains; preload` enforces HTTPS everywhere.
   - `X-Frame-Options: DENY`: Prevents clickjacking attacks.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-confusion attacks.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects sensitive referrer metadata.
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`: Disables unused client APIs.
   - `poweredByHeader: false`: Hides server technology fingerprints.

2. **Form & API Protection (`src/app/api/contact/route.ts`)**:
   - **Rate Limiting**: Protects against denial-of-service and automated form spam (5 requests / 60 seconds).
   - **Input Sanitization**: Strips HTML tags (`<`, `>`) to guard against XSS.
   - **Strict String Bounds**: Enforces maximum character limits on all inputs.
   - **Email Regex**: Validates email format before processing.
   - **Honeypot Trap**: Invisible field that catches spam bots silently without consuming database resources.

3. **Dependency Security**:
   - Verified with `npm audit` — **0 vulnerabilities**.

---

### Safe Git Workflow — How to Push Code Safely

To ensure smooth deployments and prevent build breakages or leaked secrets, follow these steps:

#### 1. Verify Production Build Locally
```bash
npm run build
```
Ensure it returns: `✓ Generating static pages (21/21)` with **0 errors**.

#### 2. Check Untracked & Modified Files
```bash
git status -s
```
Verify that no secret files (like `.env`, `.env.local`, or temporary debug logs) are included.

#### 3. Stage All Required Changes
```bash
git add .
```

#### 4. Commit with a Clear Descriptive Message
```bash
git commit -m "feat: complete RSC India redesign, mobile responsiveness, and security hardening"
```

#### 5. Push to Remote Main Branch
```bash
git push origin main
```

---

### Running the Project Locally

```bash
# Start development server
npm run dev

# Run production build
npm run build

# Start production server
npm run start
```
Visit **[http://localhost:3000](http://localhost:3000)** to view the live site.
