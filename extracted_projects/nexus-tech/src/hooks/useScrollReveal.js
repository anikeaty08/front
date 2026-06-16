import { useEffect, useRef } from 'react';

/**
 * Custom hook to handle scroll reveal animations natively using IntersectionObserver
 * Replaces the need for external libraries like GSAP for simple enter animations.
 */
export function useScrollReveal(options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Optional: unobserve after revealing if you only want it to happen once
          // observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = containerRef.current?.querySelectorAll('.reveal-el');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return containerRef;
}