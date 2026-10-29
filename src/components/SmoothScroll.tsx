'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis smooth inertia scrolling
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
      lerp: 0.065,
      respectReducedMotion: false,
    });

    lenisRef.current = lenis;
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  // Handle route navigation & scroll-driven reveal animation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    let observer: IntersectionObserver | null = null;

    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-animated');
              obs.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -50px 0px',
          threshold: 0.06,
        }
      );

      // Target all structural sections and major cards
      const revealSelectors = [
        'section:not(#home-hero)',
        '.section-head-center',
        '.rsc-navy-card',
        '.rsc-image-card',
        '.approach-card',
        '.compliance-milestone-card',
        '.sector-matrix-card',
        '.audit-diagnostic-card',
        '.diagnostic-card',
        '.cta-light-card',
        '.section-cta-light',
        '.footer-udin-bar',
        '.faq-item',
        '.service-card',
        '.proprietor-card',
        '.team-desk-card',
      ];

      const elements = document.querySelectorAll(revealSelectors.join(', '));
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Elements below viewport top get prepared for reveal; elements already visible are activated immediately
        if (rect.top > window.innerHeight * 0.8) {
          el.classList.add('scroll-reveal-target');
          observer?.observe(el);
        } else {
          el.classList.add('scroll-animated');
        }
      });
    };

    const timer = setTimeout(initObserver, 80);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
