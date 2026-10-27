import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Daksh Desai & Associates · Chartered Accountants',
  description: 'Official regulatory disclaimer under the Institute of Chartered Accountants of India (ICAI) guidelines. Daksh Desai & Associates, Mumbai.',
};

export default function DisclaimerPage() {
  return (
    <section className="section" id="disclaimer-content">
      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <span className="eyebrow">Legal</span>
        <h1>Disclaimer</h1>
        
        <p>Under the regulations of the Institute of Chartered Accountants of India, Chartered Accountants are not permitted to solicit work or advertise. This website provides information about Daksh Desai &amp; Associates, its members and the services it offers, for persons who seek it on their own initiative.</p>
        
        <p>By using this website, you confirm that you are seeking information about the firm of your own accord and that there has been no advertisement, solicitation or inducement from the firm or its members.</p>
        
        <p>The content on this website is general information and does not constitute professional advice. Laws, rules and their interpretation change; please consult us on your specific facts before acting. Viewing this site or contacting us through it does not create a client relationship.</p>
        
        <p>The firm is not responsible for the content of external websites linked from this site.</p>
      </div>
    </section>
  );
}
