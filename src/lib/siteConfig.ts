export interface SiteConfig {
  // Practice Contact Details
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  emailPrimary: string;
  emailSecondary: string;
  addressBorivali: string;
  addressNarimanPoint: string;
  mapLinkBorivali: string;
  mapLinkNarimanPoint: string;
  officeHours: string;

  // Firm Statutory Particulars
  firmName: string;
  frn: string;
  memberNo: string;
  establishedYear: string;
  proprietorName: string;
  proprietorTitle: string;
  proprietorDegree: string;
  proprietorBio: string;
  linkedinUrl: string;

  // Hero & Homepage Text
  heroEyebrow: string;
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSublede: string;

  // Visual Assets & Images
  proprietorPhoto: string;
  heroConsultingImage: string;
  heroTaxBooksImage: string;
  heroFinanceDeskImage: string;
  heroBackdropImage: string;
  aboutPanIndiaImage: string;
}

export const defaultSiteConfig: SiteConfig = {
  phone: '+919819647471',
  phoneFormatted: '+91 98196 47471',
  whatsapp: '+919819647471',
  emailPrimary: 'cadakshdesai@outlook.com',
  emailSecondary: 'dakshdesai0109@gmail.com',
  addressBorivali: '501, Fly Edge, SV Rd, Borivali West, Mumbai – 400092',
  addressNarimanPoint: '1004-05, Raheja Chambers, Free Press Journal Marg, Nariman Point, Mumbai – 400021',
  mapLinkBorivali: 'https://maps.google.com/?q=Fly+Edge,+SV+Rd,+Above+Tirumala+Showroom,+Borivali+West,+Mumbai,+Maharashtra+400092',
  mapLinkNarimanPoint: 'https://maps.google.com/?q=Raheja+Chambers,+Free+Press+Journal+Marg,+Nariman+Point,+Mumbai,+Maharashtra+400021',
  officeHours: 'Mon–Sat: 10:00 AM – 7:00 PM IST',

  firmName: 'Daksh Desai & Associates',
  frn: '165505W',
  memberNo: '648747',
  establishedYear: '2026',
  proprietorName: 'CA Daksh Desai, ACA',
  proprietorTitle: 'Proprietor & Principal · Associate Chartered Accountant (ACA) · B.Com',
  proprietorDegree: 'Bachelor of Commerce (B.Com)',
  proprietorBio: 'Chartered Accountant registered with the Institute of Chartered Accountants of India (ICAI). Direct partner stewardship across direct taxation, GST litigation defense, statutory and tax audits under Companies Act 2013 and Section 44AB, cross-border remittance certifications (15CA/15CB), and corporate governance advisory.',
  linkedinUrl: 'https://www.linkedin.com/in/daksh-desai-787199204',

  heroEyebrow: 'CHARTERED ACCOUNTANTS · MUMBAI · ICAI REGISTERED PRACTICE',
  heroTitleLine1: 'Taxation, Audit,',
  heroTitleLine2: 'Accounting & Advisory',
  heroSublede: 'We provide comprehensive counsel across direct tax litigation, GST compliance, statutory audit, and corporate governance for enterprises, family offices, and professionals across India and abroad.',

  proprietorPhoto: '/images/ca-daksh-desai-executive.jpg',
  heroConsultingImage: '/images/ca-consulting.jpg',
  heroTaxBooksImage: '/images/tax-law-books.jpg',
  heroFinanceDeskImage: '/images/finance-desk.jpg',
  heroBackdropImage: '/images/hero-bg.jpg',
  aboutPanIndiaImage: '/images/india-map-advisory.jpg',
};
