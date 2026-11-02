# AGENTS.md — AI & Developer Architecture Guide
> **Firm**: Daksh Desai & Associates, Chartered Accountants (Mumbai)  
> **Repository**: `Intekhab-Ansari/CAdaksh_sociialmantraa`  
> **Primary Audience**: Antigravity AI, future AI assistants, and collaborating developers.

---

## 1. Executive Summary & Statutory Purpose
This is a production-grade, bespoke web application for **Daksh Desai & Associates**, a Chartered Accountancy practice in Mumbai, India.
The website serves as the firm's official institutional digital portal, built strictly compliant with:
1. **Institute of Chartered Accountants of India (ICAI) Code of Ethics & Website Guidelines**:
   - Zero prohibited promotional claims, superlatives, or advertising.
   - Mandatory entry disclaimer modal acknowledged before browsing.
   - Genuine institutional photography and CA India emblems only.
2. **Reserve Bank of India (RBI) Regulations & FEMA, 1999**:
   - Accurate compliance references (FLA Return, Form FC-GPR/FC-TRS, APR, 15CA/15CB).
   - Zero false claims of "RBI Agent" or "guaranteed RBI clearances".
3. **Digital Personal Data Protection Act, 2023 (DPDP Act)**:
   - Explicit consent checkbox on all enquiry forms.
   - Transparent privacy notice (`/privacy`).
   - Secure API handling with rate limiting and sanitization.

---

## 2. Inviolable Regulatory & Legal Commandments (ICAI, RBI & Government of India)

All AI models and developers editing this repository **MUST STRICTLY COMPLY** with the following legal rules (see detailed reference in `REGULATORY_COMPLIANCE.md`):

### 🚫 ABSOLUTE PROHIBITIONS (Must NEVER be violated):
1. **No Superlatives or Comparison**: Never use words like *"Best CA"*, *"Top Chartered Accountant"*, *"#1"*, *"Leading"*, *"Cheapest"*, *"Fastest"*, or *"Guaranteed"*. Never compare the firm to any other CA firm.
2. **No Commercial Solicitations**: Never use pushy sales CTAs like *"Hire Us"*, *"Book a Deal"*, or *"Free Filing"*. Only use dignified invitations such as *"Consult Practice Office"*, *"Schedule Practice Consultation"*, or *"Explore Practice Scope"*.
3. **No Fee Quotes or Packages**: Never publish pricing tiers, hourly fees, packages (e.g. Basic/Pro/Enterprise), discounts, or money-back guarantees on the public site.
4. **No Client Names or Logos**: Never display corporate logos, client brand names, ratings, or client reviews on the website (strictly prohibited by ICAI Clause 6 & 7).
5. **No False RBI Claims**: Never claim to be an *"RBI Authorized Agent"* or promise guaranteed remittance approvals. RBI does not certify agents.
6. **No Modeling / Glamour Photos**: Proprietor and partner photos must strictly adhere to the sober **35×45mm passport photo format**.

### ✅ MANDATORY INCLUSIONS (Must ALWAYS be preserved):
1. **Statutory ICAI Disclaimer**: Prominently displayed across all pages in the footer bar and on the dedicated `/disclaimer` page. (Intrusive entry pop-up modal removed per firm direction for seamless user experience).
2. **Firm Particulars**: Accurate representation of ICAI Firm Registration Number (FRN), Member No., Constitution, and Mumbai Office.
3. **Mandatory 18-Digit UDIN**: All references to audit reports and certifications must emphasize the mandatory ICAI Unique Document Identification Number.
4. **DPDP Act 2023 Consent Checkbox**: Every form must have an unticked, mandatory consent checkbox linked to `/privacy`.
5. **Official CA India Logo**: Authentic emblem strictly as issued by the ICAI.

---

## 3. Technology Stack & Design System

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15.5+ (App Router)** | Static Pre-rendering + Dynamic Serverless API routes |
| **Language** | **TypeScript (Strict mode)** | Full type safety across pages, components, and props |
| **Styling** | **Vanilla CSS (`src/styles/globals.css`)** | Custom design system; **no Tailwind CSS** (user requested pure CSS) |
| **Fonts** | **Google Fonts via CDN** | `Plus Jakarta Sans` (body/UI), `Cormorant Garamond` (editorial serif), `IBM Plex Mono` (institutional register) |
| **Database** | **Supabase (`@supabase/supabase-js`)** | Tables: `enquiries`, `subscribers`, `site_settings` (config & auth) |
| **Email Service** | **Gmail SMTP (`nodemailer`)** | Official dispatch for Security OTP & broadcasts via `dakshdesai0109@gmail.com` |
| **Deployment** | **Hostinger Node.js / Vercel** | Standalone production build (`npm run build`) |

### Design Aesthetics & Color Palette (Bespoke Sovereign Architectural Standard)
The visual identity is a bespoke, sovereign corporate standard tailored specifically for **Daksh Desai & Associates** in Mumbai:
- **Light Mode Permanent**: Pristine, high-authority architectural light palette with warm alabaster and crisp white surfaces.
- **Deep Obsidian Slate Navy (`#0B1528`) & Oxford Navy (`#112540`)**: Hero typography, primary buttons, structural framework, and footers.
- **Sovereign Champagne Gold & Burnished Brass (`#C5A059` / `#B89047`)**: Replaces any third-party ticker ribbons with an institutional, luxury hallmark of statutory precision.
- **Architectural Ribbon**: Sovereign deep obsidian navy ribbon with gold star markers (`✦`) highlighting core practice desks.
- **Interactive Statutory Features (100% ICAI & RBI Compliant)**:
  1. **Statutory Desk Console (`StatutoryDeskConsole.tsx`)**: Interactive multi-tabbed practice navigator in the hero section.
  2. **Indian Statutory Compliance Due-Date Tracker (`ComplianceCalendar.tsx`)**: Interactive live calendar for Income Tax, GST, MCA, and RBI/FEMA filing deadlines.
  3. **Statutory Audit & Tax Applicability Navigator (`AuditDiagnosticTool.tsx`)**: Diagnostic self-assessment tool under Income-tax Act Sec 44AB/44AD/44ADA and Companies Act 2013 Sec 139.
  4. **Executive Sector Advisory Matrix**: Bespoke 6-card sector focus (BFSI, Tech & SaaS, Manufacturing, Healthcare & Trusts, Real Estate & RERA, Family Offices & NRIs).
  5. **Regulatory & Statutory Gateway (`RegulatoryGateway.tsx`)**: Direct links to Income Tax e-Filing, GST Common Portal, MCA21 V3, RBI, TRACES, and ICAI UDIN.
  6. **Floating Quick Consultation Dock (`QuickContactDock.tsx`)**: Unobtrusive bottom-right consultation launcher.
  7. **Master Administration Console (`/admin`)**: Bespoke portal for firm credentials, live site configuration, media photo management, newsletter broadcasts, and multi-device session security.

---

## 4. Directory & File Structure

```
CA_website/
├── REGULATORY_COMPLIANCE.md         # Inviolable ICAI, RBI & Govt of India rulebook
├── AGENTS.md                        # AI architecture guide & developer commandments
├── README.md                        # Complete developer documentation & guide
├── scripts/
│   └── test-e2e-suite.mjs           # Automated 6-step E2E test suite (Multi-device, 2-option auth, OTP, sync)
├── public/
│   ├── images/
│   │   ├── ca-logo.svg              # Official CA India emblem
│   │   ├── ca-consulting.jpg        # Hero grid card 2 (CA consultation photo)
│   │   ├── tax-law-books.jpg        # Hero grid card 4 (Law bare acts library)
│   │   ├── finance-desk.jpg         # Hero grid card 6 (Financial workspace)
│   │   ├── india-map-advisory.jpg   # About section pan-India visual
│   │   ├── ca-daksh-desai-executive.jpg # Executive portrait photo
│   │   └── proprietor-passport.svg  # 35x45mm ICAI passport format photo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (Metadata, Header, Footer, Providers)
│   │   ├── page.tsx                 # Homepage (Hero 6-card grid, Ticker, About, Industries, CTA)
│   │   ├── about/page.tsx           # About Us & Firm Particulars
│   │   ├── team/page.tsx            # Proprietor bio & specialised practice desks
│   │   ├── services/
│   │   │   ├── page.tsx             # Services directory & scope breakdown
│   │   │   ├── income-tax/page.tsx  # Income Tax filing, AIS, scrutiny & appeals
│   │   │   ├── gst/page.tsx         # GST returns, 2B matching, refunds, litigation
│   │   │   ├── audit/page.tsx       # Statutory, tax, internal & stock audits
│   │   │   ├── accounting/page.tsx  # Bookkeeping, MIS & financial statements
│   │   │   ├── cfo-advisory/page.tsx# Virtual CFO, cash flow & financial planning
│   │   │   ├── international-tax/   # 15CA/CB, DTAA, foreign remittances & NRI
│   │   │   └── corporate-law/       # ROC compliances, company formation, MCA
│   │   ├── contact/page.tsx         # Contact info & consultation form
│   │   ├── faq/page.tsx             # Interactive FAQ with real-time search
│   │   ├── insights/page.tsx        # Tax updates & knowledge bulletin
│   │   ├── privacy/page.tsx         # DPDP Act 2023 privacy notice
│   │   ├── disclaimer/page.tsx      # ICAI compliance disclaimer
│   │   ├── review/page.tsx          # Developer pre-launch checklist & fill counters
│   │   ├── admin/
│   │   │   ├── page.tsx             # Master Administration Console (Config, Media, Security, Devices)
│   │   │   └── newsletter/page.tsx  # Practice Technical Bulletin & Circular Broadcaster
│   │   └── api/
│   │       ├── contact/route.ts     # Consultation enquiry submission
│   │       ├── settings/route.ts    # Live site configuration read/write (Supabase & fallback cache)
│   │       ├── newsletter/
│   │       │   ├── subscribe/route.ts   # Newsletter subscription endpoint
│   │       │   └── unsubscribe/route.ts # 1-click unsubscribe endpoint
│   │       └── admin/
│   │           ├── upload/route.ts              # Visual asset & photo upload with aspect ratio fit
│   │           ├── enquiries/route.ts           # Consultation enquiries data retrieval
│   │           ├── newsletter/
│   │           │   ├── broadcast/route.ts       # Email circular broadcast dispatcher
│   │           │   └── subscribers/route.ts     # Subscribers list & stats
│   │           └── auth/
│   │               ├── login/route.ts           # Device-aware admin authentication
│   │               ├── sessions/route.ts        # Multi-device session manager & termination
│   │               ├── change-passkey/route.ts  # 2-Option passkey changer (Keep vs Logout all)
│   │               ├── forgot-password/route.ts # Gmail SMTP 6-digit OTP dispatcher
│   │               └── verify-otp/route.ts      # OTP verification & lockout reset
│   ├── components/
│   │   ├── Header.tsx               # Sticky floating pill header + mobile slide drawer
│   │   ├── Footer.tsx               # Midnight navy 4-column footer + statutory legal bar
│   │   ├── TickerRibbon.tsx         # Continuous marquee sovereign ticker
│   │   ├── ContactForm.tsx          # Form with client validation & status alerts
│   │   ├── NewsletterSubscribe.tsx  # In-footer newsletter subscription component
│   │   ├── FaqSearch.tsx            # Live client-side FAQ search filter
│   │   └── ReviewBanner.tsx         # Pre-launch yellow blank tracker
│   ├── context/
│   │   └── SiteConfigContext.tsx    # Live configuration provider (re-fetches with no-store)
│   ├── lib/
│   │   ├── adminAuth.ts             # Multi-device session engine, OTP hashing, brute force guards
│   │   ├── siteConfig.ts            # SiteConfig schema, defaults, and type definitions
│   │   └── supabase.ts              # Supabase client singleton
│   └── styles/
│       └── globals.css              # Unified design system, responsive queries, admin console CSS
├── db.js                            # CommonJS Supabase helper (for Hostinger scripts)
├── next.config.mjs                  # Security headers (CSP, HSTS, X-Frame-Options)
├── package.json                     # Dependencies & build scripts
└── tsconfig.json                    # Strict TypeScript configuration
```

---

## 5. Security, Authentication & Multi-Device Session Engine

1. **Multi-Device Admin Session Management (`src/lib/adminAuth.ts`)**:
   - **Device Telemetry**: Uses `parseDeviceMetadata(userAgent)` to extract clean browser labels (Chrome, Safari, Firefox, Edge, Opera) and OS (Windows 10/11, macOS, iOS, Android, Linux).
   - **Encrypted Session Tokens**: Authentication generates 64-char cryptographically secure tokens (`dda_sess_<hex>`) with a 7-day TTL and sliding activity timestamps (`lastActiveAt`).
   - **Auto-Registration on Access**: When an authenticated user visits `/admin` using either a session token or the master passkey (`ADMIN_NEWSLETTER_KEY`), `GET /api/admin/auth/sessions` automatically registers the device session and upgrades the client's token.
   - **Header Counter & Tab Badge**: Top header displays live device status (`● X Devices Logged In`). The Security tab displays a live badge and full list of active sessions with `● Current Device (This Session)` highlighted.
   - **Session Termination**: Users can disconnect individual unrecognized devices or trigger bulk disconnect (`⚠️ Disconnect All Other Devices`).
   - **Two Password Change Options**:
     - **Option 1 (`logoutAllDevices: false`)**: Updates the passkey while preserving all active sessions across chambers and phones.
     - **Option 2 (`logoutAllDevices: true`)**: Updates the passkey and immediately purges all other active sessions from `state.sessions`. Any other computer or phone gets a `401 Unauthorized` on its next request and is forced to log in with the new passkey.

2. **Official Email OTP Service (`src/app/api/admin/auth/forgot-password/route.ts`)**:
   - **Transport**: Dispatched via verified Gmail SMTP (`nodemailer`) from `dakshdesai0109@gmail.com` using app passwords (`GMAIL_APP_PASSWORD`).
   - **Security Controls**: 6-digit cryptographic OTP, SHA-256 hashed storage, strict 10-minute validity, and max 5 retry attempts.
   - **Brute-Force Guard**: 5 consecutive failed passkey attempts automatically locks console access for 15 minutes unless unlocked via verified Email OTP.

3. **Dynamic Website Configuration Engine (`src/app/api/settings/route.ts` & `SiteConfigContext.tsx`)**:
   - Dual-persistence architecture: Saves directly to Supabase table `site_settings` (`id: 'current_config'`) with local filesystem fallback (`data/site-config.json`).
   - All public site pages consume configuration through `SiteConfigProvider` with `{ cache: 'no-store' }`.
   - Any edits saved in `/admin` (contact numbers, office addresses, Google Maps links, hero headlines, visual image URLs) reflect live across all visitors and separate browsers instantly without redeployment.

4. **HTTP Security Headers (`next.config.mjs`)**:
   - `Content-Security-Policy (CSP)`: Restricts script, style, font, image, and frame origins.
   - `Strict-Transport-Security (HSTS)`: `max-age=63072000; includeSubDomains; preload` enforces HTTPS everywhere.
   - `X-Frame-Options: DENY`: Blocks clickjacking attacks by forbidding iframe embeds.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing vulnerabilities.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects referrer leakage.
   - `Permissions-Policy`: Disables camera, microphone, and geolocation.
   - `poweredByHeader: false`: Strips the `X-Powered-By: Next.js` header to hide server fingerprints.

5. **Form & API Protection (`src/app/api/contact/route.ts`)**:
   - **Rate Limiting**: IP-based rate limiting (5 requests per 60 seconds) to prevent spam floods.
   - **Input Sanitization**: Strips HTML tags (`<`, `>`) and whitespace to prevent XSS.
   - **Length Constraints**: Enforces maximum character bounds (e.g., 80 chars for names, 120 for email, 3000 for message).
   - **Email Validation**: Strict regex verification (`EMAIL_REGEX`).
   - **Honeypot Protection**: Hidden trap field (`honeypot`) that immediately drops bot submissions silently.

6. **Secret Protection (`.gitignore`)**:
   - `.env`, `.env.local`, `.env.production`, and `/data/` are strictly git-ignored.
   - Sensitive keys and session caches are never committed into the repository.

---

## 6. Automated Verification & Safe Git Workflow

Follow these exact steps before committing or pushing code:

### Step 1: Run the Automated 6-Test E2E Verification Suite
Run the comprehensive automated test suite to verify multi-device login, the 2 passkey change options, live cross-browser updates, raw passkey auto-registration, and email OTP dispatch:
```bash
node scripts/test-e2e-suite.mjs
```
Expected output: `🎉 ALL 6 CRITICAL E2E TESTS PASSED WITH 100% SUCCESS!`

### Step 2: Run Production Build Locally
Verify that TypeScript types, routes, and styles compile with **zero errors**:
```bash
npm run build
```
> **CRITICAL RULE**: Do not run `npm run build` and `npm run dev` at the exact same second, as `build` clears the `.next` development chunk cache.

### Step 3: Check Git Status & Untracked Files
Ensure no unintended or temporary files (e.g. `.env`, local `.json` data) are staged:
```bash
git status -s
```

### Step 4: Stage Required Files
```bash
git add src/ public/ scripts/ next.config.mjs .gitignore README.md AGENTS.md REGULATORY_COMPLIANCE.md
```

### Step 5: Commit with Clear Semantic Message
```bash
git commit -m "feat: complete multi-device session tracking, 2-option passkey management, and OTP verification"
```

### Step 6: Push Safely to Main Branch
```bash
git push origin main
```

---

## 7. Pre-Launch Checklist for CA Daksh Desai
- [ ] Confirm firm name exactly as approved in ICAI records.
- [ ] Obtain and insert official Firm Registration Number (FRN).
- [ ] Fill in yellow placeholder fields (`.fill` items on `/review`).
- [ ] Provide high-resolution 35×45mm passport photograph for the proprietor bio.
- [ ] Connect Supabase keys in production host (`SUPABASE_URL`, `SUPABASE_ANON_KEY`).
