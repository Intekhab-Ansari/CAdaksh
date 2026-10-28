import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewBanner from '@/components/ReviewBanner';
import DisclaimerModal from '@/components/DisclaimerModal';
import QuickContactDock from '@/components/QuickContactDock';

export const metadata: Metadata = {
  title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
  description: 'Daksh Desai & Associates, Chartered Accountants, Mumbai. Taxation, statutory audit, corporate law, and FEMA advisory for businesses, enterprises, professionals, and individuals.',
  icons: {
    icon: '/images/ca-logo.svg',
  },
  openGraph: {
    title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
    description: 'Taxation, statutory audit, corporate law, and FEMA advisory for businesses, enterprises, professionals, and individuals in Mumbai.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReviewBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <QuickContactDock />
        <DisclaimerModal />
      </body>
    </html>
  );
}
