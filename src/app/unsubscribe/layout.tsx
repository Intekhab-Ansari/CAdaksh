import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Subscription Preferences · Daksh Desai & Associates',
  description: 'Manage statutory newsletter and practice circular preferences.',
  robots: { index: false, follow: false },
};

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

