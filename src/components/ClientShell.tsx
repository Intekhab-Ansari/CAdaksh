'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerModal from '@/components/DisclaimerModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmoothScroll from '@/components/SmoothScroll';

export default function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="admin-app-root">
        {children}
      </div>
    );
  }

  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <DisclaimerModal />
      <WhatsAppButton />
    </>
  );
}

