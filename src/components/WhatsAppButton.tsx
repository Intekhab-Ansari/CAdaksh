'use client';

import React from 'react';
import { useSiteConfig } from '@/context/SiteConfigContext';

export default function WhatsAppButton() {
  const { config } = useSiteConfig();
  const cleanNumber = (config.whatsapp || config.phone || '919819647471').replace(/[^0-9]/g, '');
  const firmOrProprietor = config.proprietorName || config.firmName || 'CA Daksh Desai';
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=Hello%20${encodeURIComponent(firmOrProprietor)}%2C%20I%20would%20like%20to%20enquire%20regarding%20statutory%20practice%20services.`;

  return (
    <aside aria-label="Direct WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label={`Direct WhatsApp consultation with ${firmOrProprietor} (${config.phoneFormatted})`}
        title={`Chat on WhatsApp (${config.phoneFormatted})`}
      >
        <span className="floating-whatsapp-tooltip">
          <strong>Direct WhatsApp</strong>
          <span>{config.phoneFormatted}</span>
        </span>
        <span className="floating-whatsapp-icon" aria-hidden="true">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z"/>
          </svg>
        </span>
        <span className="floating-whatsapp-ring" aria-hidden="true" />
      </a>
    </aside>
  );
}
