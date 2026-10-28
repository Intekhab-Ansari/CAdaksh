import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Items & Developer Notes | Daksh Desai & Associates · Chartered Accountants',
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReviewPage() {
  return (
    <>
      <section className="section" id="review-header">
        <div className="container-narrow">
          <span className="eyebrow">Not part of the website · remove before launch</span>
          <h1>Open items &amp; developer notes</h1>
          <p className="hero-lede" style={{ marginTop: '1.1rem' }}>
            What is needed from Daksh, where each section&apos;s content comes from, what was left out for ICAI compliance, and how the pages map to real URLs.
          </p>
          
          <div className="blocker-box" style={{ marginTop: '1.5rem' }}>
            <strong style={{ fontSize: '1.05rem' }}>Launch blocker: the site should not go live until ICAI issues the Firm Registration Number and approves the firm name.</strong>
            <span style={{ lineHeight: 1.5 }}>
              The site must state the FRN, and the firm&apos;s particulars on it must match ICAI records. The firm name in the header (and the domain) should follow the name ICAI approves. Build and test on a staging link until then.
            </span>
          </div>
        </div>
      </section>

      {/* WHERE THE CONTENT COMES FROM */}
      <section className="section" id="content-sources">
        <div className="container">
          <div style={{ marginBottom: '1.5rem' }}>
            <span className="eyebrow">Provenance</span>
            <h2>Where the content comes from</h2>
            <p>All page content is adapted from the two reference sites. The only additions are the ICAI and privacy items listed at the end of this table.</p>
          </div>

          <div className="table-responsive">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '45%' }}>Page / section</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Home: hero, services at a glance, about snippet, industries, approach, &quot;Ready to connect&quot;</td>
                  <td>Ritesh Shah &amp; Co. home page; hero line from KM Associates About</td>
                </tr>
                <tr>
                  <td>About Us: headline, who we are, vision, what we do, how we work</td>
                  <td>KM About + RSC About</td>
                </tr>
                <tr>
                  <td>Our Team: proprietor profile, specialised desks, team members</td>
                  <td>KM Team (profile layout, three desks) + RSC About (team list)</td>
                </tr>
                <tr>
                  <td>Services overview (six categories)</td>
                  <td>RSC Services page</td>
                </tr>
                <tr>
                  <td>Seven service pages: overview, scope, documents, steps, FAQs</td>
                  <td>KM service pages, with RSC service items merged in (TDS/TCS, Professional Tax, VAT, GST Audit, certification of investments &amp; debtors, debtor analysis, Tally controls, ESIC/PF/labour law, tax and financial planning)</td>
                </tr>
                <tr>
                  <td>FAQ page</td>
                  <td>KM FAQ page (same questions, in plain language, technical ones dropped)</td>
                </tr>
                <tr>
                  <td>Insights</td>
                  <td>KM Blog (structure only; no articles yet)</td>
                </tr>
                <tr>
                  <td>Contact: form fields, confidentiality points, three-step &quot;how we work&quot;</td>
                  <td>KM Contact (form) + RSC Contact (channels, hours, steps)</td>
                </tr>
                <tr>
                  <td>Firm particulars panel, entry disclaimer, Disclaimer page, Privacy notice, consent tick-box</td>
                  <td>Added for ICAI Website Guidelines and the DPDP Act, 2023</td>
                </tr>
                <tr>
                  <td>&quot;Income Tax Appellate Tribunal&quot; and &quot;GSTAT&quot; in the appeals lines</td>
                  <td>Added from your practice focus (KM mentions appeals up to the Commissioner). Remove if you want reference content only.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DATA NEEDED & CONFIRMATIONS */}
      <section className="section" id="checklist-section">
        <div className="container review-grid">
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Data needed from Daksh</h2>
            <ul className="checklist">
              <li><span>ICAI-approved firm name (exact spelling), FRN and year of establishment</span></li>
              <li><span>Office address, PIN, phone / WhatsApp, email on the domain, office hours, Maps link</span></li>
              <li><span>Client types for the home page and the six industries you serve</span></li>
              <li><span>Membership number, ACA date, COP date, degree, languages</span></li>
              <li><span>Passport-style photograph</span></li>
              <li><span>Experience text, and whether to name Deloitte</span></li>
              <li><span>Core practice expertise line for your profile</span></li>
              <li><span>Team members, or confirm the block is hidden at launch</span></li>
              <li><span>LinkedIn URL, or confirm removal</span></li>
              <li><span>First article(s) for Insights, or confirm the page is hidden at launch</span></li>
              <li><span>Privacy notice: retention period, analytics, grievance contact</span></li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Confirmations needed</h2>
            <ul className="checklist">
              <li><span>Keep all seven service pages? Audit and company-law work were marked &quot;say no&quot; in the 2026–35 roadmap.</span></li>
              <li><span>Bank concurrent / branch audits: keep only if eligible for the bank audit panel.</span></li>
              <li><span>Keep the ITAT and GSTAT mentions (see table above).</span></li>
              <li><span>Download the CA India logo from ICAI and follow its usage rules; no other logo or monogram for the firm name.</span></li>
              <li><span>Confirm the &quot;ca…&quot; domain is acceptable for the approved firm name; point the .in to the .com.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* LEFT OUT ON PURPOSE & DEVELOPER NOTES */}
      <section className="section" id="compliance-notes">
        <div className="container review-grid">
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Left out on purpose</h2>
            <p style={{ marginBottom: '1.25rem', fontSize: '0.92rem', color: 'var(--ink-secondary)' }}>
              Content on the reference sites that the ICAI Website and Advertisement Guidelines restrict.
            </p>
            <ul className="checklist x-list">
              <li><span>&quot;Why choose us&quot; sections (both sites), and claims such as &quot;zero missed deadlines&quot;, &quot;15+ years&quot;, &quot;24–48 hour turnaround&quot;, &quot;trusted by founders, SMEs and NRIs&quot; (RSC)</span></li>
              <li><span>SEO keywords such as &quot;Top CA firm in India&quot; and &quot;Best CA near me&quot; in KM&apos;s meta tags</span></li>
              <li><span>Slogans and taglines: &quot;Brains that lead…&quot; and the per-service taglines (RSC)</span></li>
              <li><span>Personal awards, ranks, scholarships and felicitations (KM team page)</span></li>
              <li><span>The ICAI AI certification in RSC&apos;s timeline</span></li>
              <li><span>RSC&apos;s &quot;AI Solutions&quot; service line (office automation is not a CA professional service)</span></li>
              <li><span>&quot;Financing assistance&quot; (RSC): ICAI bars &quot;arrangement of loans&quot;; capital structuring advice is kept</span></li>
              <li><span>Newsletter sign-up (KM): pushing information about exclusive CA services is not allowed</span></li>
              <li><span>Floating WhatsApp chat button (KM); the number is listed on Contact instead</span></li>
              <li><span>Stock photos of people; only passport-style photos are allowed</span></li>
              <li><span>Long statutory summaries, section numbers, form tables and penalty tables (KM), as asked</span></li>
              <li><span>Other occupations or associations (LLB studies, the CJS Legal retainer)</span></li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>Notes for the developer</h2>
            <ul className="checklist">
              <li><span>Build as real pages at the URLs below, not a one-page app.</span></li>
              <li><span>Show the entry disclaimer once per visit with an &quot;I agree&quot; button.</span></li>
              <li><span>Contact form sends to the firm email; keep submissions only as long as the privacy notice says; add spam protection.</span></li>
              <li><span>No ad scripts or tracking pixels. If analytics are used, add a consent banner.</span></li>
              <li><span>Page titles and meta descriptions must be factual (service + firm name + Mumbai), with no superlatives.</span></li>
              <li><span>.in redirects (301) to .com; HTTPS on both.</span></li>
              <li><span>Mobile first; executive light corporate theme; keyboard accessible.</span></li>
              <li><span>Insights editable by Daksh without code.</span></li>
              <li><span>Remove this page and the yellow review bar before launch.</span></li>
            </ul>

            <div className="table-responsive" style={{ marginTop: '1.5rem' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Page</th>
                    <th>Suggested URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Home</td><td><code>cadakshdesaiassociates.com/</code></td></tr>
                  <tr><td>About Us</td><td><code>cadakshdesaiassociates.com/about</code></td></tr>
                  <tr><td>Our Team</td><td><code>cadakshdesaiassociates.com/team</code></td></tr>
                  <tr><td>Services</td><td><code>cadakshdesaiassociates.com/services</code></td></tr>
                  <tr><td>Income Tax</td><td><code>cadakshdesaiassociates.com/services/income-tax</code></td></tr>
                  <tr><td>GST</td><td><code>cadakshdesaiassociates.com/services/gst</code></td></tr>
                  <tr><td>International Taxation</td><td><code>cadakshdesaiassociates.com/services/international-tax</code></td></tr>
                  <tr><td>Audit &amp; Assurance</td><td><code>cadakshdesaiassociates.com/services/audit</code></td></tr>
                  <tr><td>Accounting &amp; MIS</td><td><code>cadakshdesaiassociates.com/services/accounting</code></td></tr>
                  <tr><td>Business Advisory &amp; Virtual CFO</td><td><code>cadakshdesaiassociates.com/services/cfo-advisory</code></td></tr>
                  <tr><td>Labour &amp; Corporate Law</td><td><code>cadakshdesaiassociates.com/services/corporate-law</code></td></tr>
                  <tr><td>Insights</td><td><code>cadakshdesaiassociates.com/insights</code></td></tr>
                  <tr><td>FAQ</td><td><code>cadakshdesaiassociates.com/faq</code></td></tr>
                  <tr><td>Contact</td><td><code>cadakshdesaiassociates.com/contact</code></td></tr>
                  <tr><td>Disclaimer</td><td><code>cadakshdesaiassociates.com/disclaimer</code></td></tr>
                  <tr><td>Privacy notice</td><td><code>cadakshdesaiassociates.com/privacy</code></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="section" id="references-section">
        <div className="container">
          <span className="eyebrow">Regulatory Guidance</span>
          <h2>References</h2>
          <ul className="ruled-list" style={{ marginTop: '1rem' }}>
            <li><a href="https://kmassociatesca.com/about" target="_blank" rel="noopener noreferrer">Kedia Mayank &amp; Associates (kmassociatesca.com)</a></li>
            <li><a href="https://rscindia.com/" target="_blank" rel="noopener noreferrer">Ritesh Shah &amp; Co. (rscindia.com)</a></li>
            <li><a href="https://icai.org/post/advisory-website-guidelines-of-the-institute" target="_blank" rel="noopener noreferrer">ICAI advisory: Website Guidelines (prohibited contents and features)</a></li>
            <li><a href="https://www.icai.org/post/16461" target="_blank" rel="noopener noreferrer">ICAI advisory: no mention of fees</a></li>
            <li><a href="https://resource.cdn.icai.org/92475coe2026v1.pdf" target="_blank" rel="noopener noreferrer">ICAI Code of Ethics 2026, Volume I (PDF)</a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
