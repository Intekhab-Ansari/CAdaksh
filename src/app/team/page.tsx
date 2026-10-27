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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <p style={{ fontWeight: 600, color: 'var(--ink-primary)' }}>
                  Proprietor · <span className="fill">[ACA]</span> · Membership No. <span className="fill">[M. No.]</span>
                </p>
                
                <div className="register-card" style={{ boxShadow: 'var(--shadow-subtle)' }}>
                  <dl className="register-dl">
                    <dt className="register-dt">Member of ICAI since</dt>
                    <dd className="register-dd"><span className="fill">[date of becoming ACA]</span></dd>
                    
                    <dt className="register-dt">Certificate of Practice</dt>
                    <dd className="register-dd">Held since <span className="fill">[COP date]</span></dd>
                    
                    <dt className="register-dt">Qualifications</dt>
                    <dd className="register-dd">Chartered Accountant; <span className="fill">[degree, college, university]</span></dd>
                    
                    <dt className="register-dt">Languages</dt>
                    <dd className="register-dd"><span className="fill">[languages known]</span></dd>
                  </dl>
                </div>

                <p>
                  <strong>Experience.</strong> Two years in the Global Business Tax practice of <span className="fill">[firm name — confirm whether to name it]</span>, working on direct tax for financial-services clients. <span className="fill">[add any other experience]</span>
                </p>

                <p>
                  <strong>Core practice expertise.</strong> <span className="fill">[e.g. income tax, assessments and appeals, international taxation and transfer pricing, financial-services taxation]</span>
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

      <section className="section" id="team-members">
        <div className="container split-layout">
          <div className="split-aside">
            <span className="eyebrow">Team</span>
            <h2>Team members</h2>
          </div>
          <div className="split-body">
            <ul className="ruled-list">
              <li>
                <strong><span className="fill">[Name]</span></strong>
                <span><span className="fill">[Designation, qualification]</span></span>
              </li>
              <li>
                <strong><span className="fill">[Name]</span></strong>
                <span><span className="fill">[Designation, qualification]</span></span>
              </li>
            </ul>

            <span className="devnote">
              Add team members as they join (name, designation, qualification; passport-style photo only). Hide this block at launch if there are none yet.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
