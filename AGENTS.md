# AGENTS.md — AI & Developer Architecture Guide
> **Firm**: Daksh Desai & Associates, Chartered Accountants (Mumbai)  
> **Repository**: `Intekhab-Ansari/CAdaksh_sociialmantraa`  
> **Primary Audience**: Antigravity AI, future AI assistants, and collaborating developers.

---

## 1. Executive Summary & Purpose
This is a production-grade, bespoke web application for **Daksh Desai & Associates**, a Chartered Accountancy practice in Mumbai, India.
The website serves as the firm's official institutional digital portal, built strictly compliant with:
1. **Institute of Chartered Accountants of India (ICAI) Code of Ethics & Website Guidelines**:
   - Zero prohibited promotional claims, superlatives, or advertising.
   - Mandatory entry disclaimer modal acknowledged before browsing.
   - Genuine institutional photography and CA India emblems only.
2. **Digital Personal Data Protection Act, 2023 (DPDP Act)**:
   - Explicit consent checkbox on all enquiry forms.
   - Transparent privacy notice (`/privacy`).
   - Secure API handling with rate limiting and sanitization.

---

## 2. Technology Stack & Design System

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15.5+ (App Router)** | Static Pre-rendering + Dynamic Serverless API routes |
| **Language** | **TypeScript (Strict mode)** | Full type safety across pages, components, and props |
| **Styling** | **Vanilla CSS (`src/styles/globals.css`)** | Custom design system; **no Tailwind CSS** (user requested pure CSS) |
| **Fonts** | **Google Fonts via CDN** | `Plus Jakarta Sans` (body/UI), `Cormorant Garamond` (editorial serif), `IBM Plex Mono` (institutional register) |
| **Database** | **Supabase (`@supabase/supabase-js`)** | Stores `/contact` form enquiries directly into the `enquiries` table |
| **Deployment** | **Hostinger Node.js / Vercel** | Standalone production build (`npm run build`) |

### Design Aesthetics & Color Palette (RSC India-Inspired)
The visual identity follows an executive corporate standard inspired by **Ritesh Shah & Co. (rscindia.com)**:
- **Light Mode Only**: **Dark mode has been removed**. The site is permanently styled in a clean, high-authority light palette.
- **Deep Royal Navy (`#0F2D5C`)**: Hero titles, main buttons, active accents.
- **Midnight Navy (`#081B33`)**: High-contrast contrast sections (e.g. Industries We Serve, Site Footer).
- **Ice Blue (`#F0F5FA`)**: Alternating section backgrounds, card surfaces, table headers.
- **Continuous Red Ticker (`#B8281F`)**: Signature animated ribbon showcasing core practice areas.
- **Crisp White (`#FFFFFF`)**: Card surfaces, modals, floating header navigation.

---

## 3. Directory & File Structure

```
CA_website/
├── public/
│   ├── images/
│   │   ├── ca-logo.svg              # Official CA India emblem
│   │   ├── ca-consulting.jpg        # Hero grid card 2 (CA consultation photo)
│   │   ├── tax-law-books.jpg        # Hero grid card 4 (Law bare acts library)
│   │   ├── finance-desk.jpg         # Hero grid card 6 (Financial workspace)
│   │   ├── india-map-advisory.jpg   # About section pan-India visual
│   │   └── proprietor-passport.svg  # 35x45mm ICAI passport format photo
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout (Metadata, Header, Footer, Modals)
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
│   │   └── api/
│   │       └── contact/route.ts     # Secure enquiry endpoint with sanitization & rate limiting
│   ├── components/
│   │   ├── Header.tsx               # Sticky floating pill header + mobile slide drawer
│   │   ├── Footer.tsx               # Midnight navy 4-column footer + legal bar
│   │   ├── TickerRibbon.tsx         # Continuous marquee red ticker
│   │   ├── ContactForm.tsx          # Form with client validation & status alerts
│   │   ├── DisclaimerModal.tsx      # ICAI compliance entry modal
│   │   ├── FaqSearch.tsx            # Live client-side FAQ search filter
│   │   └── ReviewBanner.tsx         # Pre-launch yellow blank tracker
│   ├── lib/
│   │   └── supabase.ts              # Supabase client singleton
│   └── styles/
│       └── globals.css              # Unified design system & responsive media queries
├── db.js                            # CommonJS Supabase helper (for Hostinger scripts)
├── next.config.mjs                  # Security headers (CSP, HSTS, X-Frame-Options)
├── package.json                     # Dependencies & build scripts
└── tsconfig.json                    # Strict TypeScript configuration
```

---

## 4. Security Architecture & Hardening

1. **HTTP Security Headers (`next.config.mjs`)**:
   - `Content-Security-Policy (CSP)`: Restricts script, style, font, image, and frame origins.
   - `Strict-Transport-Security (HSTS)`: `max-age=63072000; includeSubDomains; preload` enforces HTTPS everywhere.
   - `X-Frame-Options: DENY`: Blocks clickjacking attacks by forbidding iframe embeds.
   - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing vulnerabilities.
   - `Referrer-Policy: strict-origin-when-cross-origin`: Protects referrer leakage.
   - `Permissions-Policy`: Disables camera, microphone, and geolocation.
   - `poweredByHeader: false`: Strips the `X-Powered-By: Next.js` header to hide server fingerprints.

2. **API Endpoint Security (`src/app/api/contact/route.ts`)**:
   - **Rate Limiting**: IP-based rate limiting (5 requests per 60 seconds) to prevent spam floods.
   - **Input Sanitization**: Strips HTML tags (`<`, `>`) and whitespace to prevent XSS.
   - **Length Constraints**: Enforces maximum character bounds (e.g., 80 chars for names, 120 for email, 3000 for message) to prevent memory exhaustion attacks.
   - **Email Validation**: Strict regex verification (`EMAIL_REGEX`).
   - **Honeypot Protection**: Hidden trap field (`honeypot`) that immediately drops bot submissions silently.
   - **Environment Variable Guard**: Safe fallback if Supabase credentials are missing or in configuration.

3. **Secret Protection (`.gitignore`)**:
   - `.env`, `.env.local`, `.env.production` are strictly git-ignored.
   - Sensitive keys are never committed into the repository.

---

## 5. Safe Git Workflow — How to Push Code Without Issues

Follow these exact steps before committing or pushing code:

### Step 1: Run Production Build Locally
Always verify that TypeScript types, routes, and styles compile with **zero errors**:
```bash
npm run build
```
> **CRITICAL RULE**: Do not run `npm run build` and `npm run dev` at the exact same second, as `build` clears the `.next` development chunk cache. If you tested with `build`, delete `.next` before restarting `npm run dev`.

### Step 2: Check Git Status & Untracked Files
Ensure no unintended or temporary files (e.g. `.env`, test scripts) are staged:
```bash
git status -s
```

### Step 3: Stage Required Files
```bash
git add src/ public/ next.config.mjs README.md AGENTS.md
```

### Step 4: Commit with Clear Semantic Message
```bash
git commit -m "feat: complete RSC India executive design, mobile responsiveness, and security hardening"
```

### Step 5: Push Safely to Main Branch
```bash
git push origin main
```

---

## 6. Pre-Launch Checklist for CA Daksh Desai
- [ ] Confirm firm name exactly as approved in ICAI records.
- [ ] Obtain and insert official Firm Registration Number (FRN).
- [ ] Fill in yellow placeholder fields (`.fill` items on `/review`).
- [ ] Provide high-resolution 35×45mm passport photograph for the proprietor bio.
- [ ] Connect Supabase keys in production host (`SUPABASE_URL`, `SUPABASE_ANON_KEY`).
