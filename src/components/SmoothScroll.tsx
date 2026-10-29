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

    // Respect accessibility reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1.15,
      touchMultiplier: 1.5,
      lerp: 0.08,
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

    // Scroll to top immediately on route change
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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
          rootMargin: '0px 0px -40px 0px',
          threshold: 0.05,
        }
      );

      // Target all structural sections and major cards
      const revealSelectors = [
        'section:not(#home-hero)',
        '.rsc-navy-card',
        '.rsc-image-card',
        '.approach-card',
        '.compliance-milestone-card',
        '.sector-matrix-card',
        '.diagnostic-card',
        '.faq-item',
        '.service-card',
        '.proprietor-card',
        '.team-desk-card',
        '.section-cta-light',
      ];

      const elements = document.querySelectorAll(revealSelectors.join(', '));
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Elements below viewport top threshold get attached to observer
        if (rect.top > window.innerHeight * 0.75) {
          el.classList.add('scroll-reveal-target');
          observer?.observe(el);
        }
      });
    };

    // Small delay to ensure Next.js DOM has fully rendered
    const timer = setTimeout(initObserver, 120);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
