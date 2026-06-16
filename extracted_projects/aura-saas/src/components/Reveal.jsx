import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Reveal({ 
  children, 
  delay = 0, 
  className, 
  direction = 'up', 
  width = 'w-full',
  text = null,
  as: Component = 'div'
}) {
  const elRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // GSAP Masked Staggered Word Reveal
  useEffect(() => {
    if (!text || !elRef.current) return;

    const words = elRef.current.querySelectorAll('.word-inner');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { 
          y: '120%', 
          opacity: 0, 
          filter: 'blur(10px)' 
        },
        {
          y: '0%',
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.04,
          scrollTrigger: {
            trigger: elRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, [text]);

  // Standard CSS Intersection Observer Reveal (Fade/Slide/Blur)
  useEffect(() => {
    if (text) return; // Skip if we are rendering the text variant

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (elRef.current) {
      observer.observe(elRef.current);
    }

    return () => {
      if (elRef.current) {
        observer.unobserve(elRef.current);
      }
    };
  }, [text]);

  if (text) {
    const words = text.split(' ');
    return (
      <Component ref={elRef} className={twMerge('inline-block', width, className)}>
        {words.map((word, i) => (
          <React.Fragment key={i}>
            <span className="inline-block overflow-hidden relative align-bottom pb-1">
              <span className="inline-block word-inner will-change-transform">{word}</span>
            </span>
            {i < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </Component>
    );
  }

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <Component
      ref={elRef}
      className={twMerge(
        'transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]',
        width,
        isVisible
          ? 'opacity-100 blur-none translate-y-0 translate-x-0'
          : `opacity-0 blur-md ${getTransform()}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}