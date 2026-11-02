import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerModal from '@/components/DisclaimerModal';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SiteConfigProvider } from '@/context/SiteConfigContext';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  metadataBase: new URL('https://dakshdesaiassociates.com'),
  title: {
    default: 'Daksh Desai & Associates | Chartered Accountants in Mumbai · Borivali & Nariman Point',
    template: '%s | Daksh Desai & Associates · Chartered Accountants',
  },
  description:
    'Daksh Desai & Associates is an ICAI-registered Chartered Accountancy firm in Mumbai (FRN: 165505W). Direct partner counsel across statutory audit, income tax return filing, GST compliance, Form 15CA/15CB remittance certifications, corporate law, and virtual CFO advisory across Borivali West and Nariman Point chambers.',
  keywords: [
    'Chartered Accountants in Mumbai',
    'Chartered Accountant Borivali West',
    'CA in Nariman Point Mumbai',
    'Tax Consultant in Mumbai',
    'Income Tax Return Filing Mumbai',
    'Income Tax Notice Scrutiny Appeal CA',
    'GST Consultant Mumbai',
    'GST Registration and Return Filing Mumbai',
    'Statutory Audit Companies Act 2013',
    'Tax Audit Section 44AB Mumbai',
    'Form 15CA 15CB Certificate CA Mumbai',
    'Foreign Remittance RBI FEMA Compliance',
    'NRI Property Tax Advisory India',
    'Company Incorporation MCA Mumbai',
    'ROC Annual Filings AOC-4 MGT-7',
    'Virtual CFO Services Mumbai',
    'Internal Audit IFCoFR Mumbai',
    'Accounting and MIS Reporting Mumbai',
    'CA Daksh Desai',
    'Chartered Accountant M. No. 648747',
    'ICAI Registered CA Firm FRN 165505W',
    'Daksh Desai & Associates',
  ],
  authors: [{ name: 'CA Daksh Desai', url: 'https://www.linkedin.com/in/daksh-desai-787199204' }],
  creator: 'Daksh Desai & Associates',
  publisher: 'Daksh Desai & Associates, Chartered Accountants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://dakshdesaiassociates.com',
  },
  icons: {
    icon: '/images/ca-logo.svg',
    shortcut: '/images/ca-logo.svg',
    apple: '/images/ca-logo.svg',
  },
  openGraph: {
    title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
    description:
      'ICAI-registered Chartered Accountancy practice in Mumbai (FRN: 165505W). Direct partner counsel across taxation, GST, statutory audits, 15CA/15CB, and corporate governance.',
    url: 'https://dakshdesaiassociates.com',
    siteName: 'Daksh Desai & Associates',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/ca-daksh-desai-executive.jpg',
        width: 1200,
        height: 630,
        alt: 'Daksh Desai & Associates - Chartered Accountants Mumbai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
    description:
      'ICAI-registered Chartered Accountancy practice in Mumbai (FRN: 165505W). Direct partner counsel across taxation, GST, statutory audits, and corporate governance.',
    images: ['/images/ca-daksh-desai-executive.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Finance & Legal Services',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['AccountingService', 'ProfessionalService'],
      '@id': 'https://dakshdesaiassociates.com/#organization',
      name: 'Daksh Desai & Associates',
      alternateName: 'CA Daksh Desai & Associates',
      legalName: 'Daksh Desai & Associates, Chartered Accountants',
      description:
        'ICAI-registered Chartered Accountancy practice in Mumbai (FRN: 165505W) delivering partner-led statutory counsel across direct taxation, GST governance, statutory audits, Form 15CA/15CB certifications, and corporate law.',
      url: 'https://dakshdesaiassociates.com',
      logo: 'https://dakshdesaiassociates.com/images/ca-logo.svg',
      image: 'https://dakshdesaiassociates.com/images/ca-daksh-desai-executive.jpg',
      telephone: '+91-98196-47471',
      email: 'cadakshdesai@outlook.com',
      vatID: 'ICAI FRN 165505W',
      taxID: 'FRN: 165505W',
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Bank Transfer, Cheque, NEFT, RTGS',
      founder: {
        '@type': 'Person',
        name: 'CA Daksh Desai',
        jobTitle: 'Proprietor & Principal Chartered Accountant',
        honorificPrefix: 'CA',
        sameAs: 'https://www.linkedin.com/in/daksh-desai-787199204',
      },
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: '501, Fly Edge, SV Rd, Above Tirumala Showroom, Borivali West',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400092',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: '1004-05, Raheja Chambers, Free Press Journal Marg, Nariman Point',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400021',
          addressCountry: 'IN',
        },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Mumbai' },
        { '@type': 'AdministrativeArea', name: 'Maharashtra' },
        { '@type': 'Country', name: 'India' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Chartered Accountancy & Statutory Practice Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Income Tax Return Filing & Scrutiny Appeals' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GST Returns & Input Tax Credit Matching' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Statutory Audit under Companies Act 2013' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tax Audit under Section 44AB' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Form 15CA & 15CB Foreign Remittance Certification' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Law & MCA Annual Filings' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virtual CFO & Financial Governance Advisory' } },
        ],
      },
      sameAs: [
        'https://www.linkedin.com/in/daksh-desai-787199204',
        'https://udin.icai.org',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>
        <SiteConfigProvider>
          <SmoothScroll />
          <Header />
          <main>{children}</main>
          <Footer />
          <DisclaimerModal />
          <WhatsAppButton />
        </SiteConfigProvider>
      </body>
    </html>
  );
}
