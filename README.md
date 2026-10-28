# Daksh Desai & Associates — Chartered Accountants (Mumbai)
## Modern Next.js Website Architecture, Security & Safe Git Guide

A production-grade, dignified, and compliant web application built with **Next.js 15 (App Router, TypeScript)** for **Daksh Desai & Associates, Chartered Accountants**.

Designed strictly adhering to the **Institute of Chartered Accountants of India (ICAI) Code of Ethics & Website Guidelines**, the **Digital Personal Data Protection Act, 2023 (DPDP Act)**, and an executive corporate design standard inspired by **Ritesh Shah & Co. (rscindia.com)**.

---

### Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15.5+ (App Router) |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Vanilla CSS (`src/styles/globals.css`) — Fully responsive, no Tailwind dependency |
| **Fonts** | Plus Jakarta Sans, Cormorant Garamond, IBM Plex Mono |
| **Database** | Supabase (`@supabase/supabase-js`) for contact enquiries |
| **Security** | Strict CSP, HSTS, X-Frame-Options, anti-spam honeypot, rate limiting |
| **Deployment** | Hostinger Node.js / Vercel |

---

### Design System & Visual Identity (RSC India Style)

- **Pure Executive Light Mode**: Dark mode has been completely removed in favor of an authoritative institutional corporate look.
- **Deep Royal Navy (`#0F2D5C`)**: Primary headings, buttons, and brand elements.
- **Midnight Navy (`#081B33`)**: High-contrast contrast sections (Industries We Serve, Footer).
- **Ice Blue (`#F0F5FA`)**: Alternating clean background contrast.
- **Continuous Red Ticker Ribbon (`#B8281F`)**: Highlighting firm specialties and practice areas.
- **6-Card Hero Grid**: Alternating navy service cards and high-resolution photography.
- **ICAI Institutional Particulars Bar**: Verified firm registration credentials and proprietor details.

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
