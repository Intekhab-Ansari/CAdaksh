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
  title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
  description: 'Daksh Desai & Associates, Chartered Accountants, Mumbai. Taxation, audit, accounting, and advisory services for businesses, professionals, and individuals.',
  icons: {
    icon: '/images/ca-logo.svg',
  },
  openGraph: {
    title: 'Daksh Desai & Associates | Chartered Accountants · Mumbai',
    description: 'Taxation, audit, accounting, and advisory services for businesses, professionals, and individuals in Mumbai.',
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
