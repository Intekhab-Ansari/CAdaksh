import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Practice Broadcast Console · Daksh Desai & Associates',
  description: 'Administrative newsletter and technical bulletin broadcaster.',
  robots: { index: false, follow: false },
};

export default function AdminNewsletterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
