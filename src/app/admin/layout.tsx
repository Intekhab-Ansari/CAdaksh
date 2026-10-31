import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firm Administration & Practice Console · Daksh Desai & Associates',
  description: 'Administrative portal for Daksh Desai & Associates, Chartered Accountants.',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

