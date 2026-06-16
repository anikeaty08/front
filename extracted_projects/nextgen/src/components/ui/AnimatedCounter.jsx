import { useEffect, useState, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * target));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}</span>;
}