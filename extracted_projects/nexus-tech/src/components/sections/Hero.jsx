import React, { useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Hero() {
  const sectionRef = useScrollReveal();

  // Handle initial load animation for hero specifically
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = sectionRef.current?.querySelectorAll('.reveal-el');
      elements?.forEach(el => el.classList.add('is-revealed'));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header ref={sectionRef} className="relative pt-24 pb-32 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden border-b border-neutral-800/60">
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neutral-500/30"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-500/30"></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl">
        <h1 
          className="text-4xl md:text-6xl text-white tracking-tight mb-8 reveal-el" 
          style={{ fontFamily: 'var(--font-serif)', transitionDelay: '0.1s' }}
        >
          Demand absolute <br/> structural precision.
        </h1>
        
        <div className="relative w-full flex justify-center items-center mt-12 mb-24 reveal-el" style={{ transitionDelay: '0.3s' }}>
          <div 
            className="text-[20vw] leading-none text-white tracking-tighter opacity-90 select-none mix-blend-overlay" 
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            NEXUS
          </div>
          
          {/* Abstract 3D Representation made with CSS */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 border border-red-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-4 border border-neutral-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48 bg-gradient-to-br from-red-600/20 to-transparent backdrop-blur-xl border border-red-500/30 rotate-45 transition-transform duration-1000 hover:rotate-90 hover:scale-110"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tr from-cyan-600/10 to-transparent backdrop-blur-md border border-cyan-500/20 rotate-12 transition-transform duration-1000 hover:-rotate-45 hover:scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}