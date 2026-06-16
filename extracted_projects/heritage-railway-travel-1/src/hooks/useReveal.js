import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('[data-anim]').forEach((el) => {
          const d = parseFloat(el.getAttribute('data-anim-delay') || '0') * 1000;
          setTimeout(() => {
            el.classList.add('is-visible');
          }, d);
        });
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-animate-section]').forEach((s) => {
      io.observe(s);
    });

    return () => {
      io.disconnect();
    };
  }, []);
}