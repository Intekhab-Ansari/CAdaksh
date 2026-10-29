import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Daksh Desai & Associates · Chartered Accountants',
  description: 'Meet the leadership and professionals at Daksh Desai & Associates, Chartered Accountants. Proprietor CA Daksh Desai and specialized practice desks.',
};

export default function TeamPage() {
  return (
    <>
      <section className="section" id="team-intro">
        <div className="container-narrow">
          <span className="eyebrow">Our Team</span>
          <h1>Our team</h1>
        </div>
      </section>

      <section className="section" id="proprietor">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Proprietor</span>
            <h2>CA Daksh Desai</h2>
          </div>
          <div className="split-body">
            <div className="proprietor-grid">
              <div className="passport-photo-box">
                <Image
                  src="/images/ca-daksh-desai.jpg"
                  alt="Passport-style photograph of CA Daksh Desai"
                  width={200}
                  height={257}
                  priority
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary-navy)', margin: 0, fontWeight: 800 }}>
                    CA Daksh Desai
                  </h3>
                  <p style={{ fontWeight: 600, color: 'var(--color-gold-deep)', margin: '0.25rem 0 0' }}>
                    Proprietor &amp; Principal · ACA · M. No. <span className="fill">[M. No.]</span>
                  </p>
                </div>
                
                <div className="register-card" style={{ boxShadow: 'var(--shadow-subtle)', maxWidth: '480px' }}>
                  <dl className="register-dl">
                    <dt className="register-dt">Professional Qualification</dt>
                    <dd className="register-dd">Chartered Accountant (ICAI)</dd>
                    
                    <dt className="register-dt">ICAI Membership No.</dt>
                    <dd className="register-dd"><span className="fill">[M. No.]</span></dd>
                    
                    <dt className="register-dt">Practice Jurisdiction</dt>
                    <dd className="register-dd">Mumbai, Maharashtra</dd>

                    <dt className="register-dt">Core Practice Desks</dt>
                    <dd className="register-dd">Direct Tax · GST · Statutory Audit · Corporate Advisory</dd>
                  </dl>
                </div>

                <p style={{ fontSize: '1rem', lineHeight: '1.65', color: 'var(--color-text-body)' }}>
                  CA Daksh Desai oversees all professional engagements at the firm, providing direct partner-level counsel across corporate tax planning, assessment proceedings, statutory audits under the Companies Act, and cross-border regulatory compliance under the ICAI Code of Ethics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="specialised-desks">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Practice desks</span>
            <h2>Specialised desks</h2>
          </div>

          <div className="practice-desks-grid">
            <div className="desk-card">
              <h3>Taxation &amp; GST desk</h3>
              <p>Income tax, GST returns and input tax credit, and representation in departmental notices.</p>
            </div>
            <div className="desk-card">
              <h3>Audit &amp; assurance desk</h3>
              <p>Statutory and tax audits, internal control reviews and inventory verification.</p>
            </div>
            <div className="desk-card">
              <h3>Corporate compliance desk</h3>
              <p>Company incorporation, annual ROC filings, statutory registers and Virtual CFO support.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
