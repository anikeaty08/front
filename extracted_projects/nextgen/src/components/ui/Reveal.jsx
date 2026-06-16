import { useRef } from 'react';
import clsx from 'clsx';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Reveal({ children, type = 'up', delay = 0, className }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15, triggerOnce: true });

  const baseClass = type === 'up' ? 'reveal-up' : 'reveal-scale';

  return (
    <div
      ref={ref}
      className={clsx(baseClass, isVisible && 'is-revealed', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}