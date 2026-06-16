import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Philosophy() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 border-b border-neutral-800/60 flex flex-col items-center text-center relative">
      <h2 
        className="text-4xl md:text-5xl text-white tracking-tight mb-8 reveal-el" 
        style={{ fontFamily: 'var(--font-serif)', transitionDelay: '0.1s' }}
      >
        Logic. Structure. Form.
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 text-[10px] uppercase tracking-widest text-neutral-500 mb-12 reveal-el" style={{ transitionDelay: '0.2s' }}>
        <span className="text-red-500">Architecture</span>
        <span className="w-1 h-px bg-neutral-800 self-center"></span>
        <span>Data Models</span>
        <span className="w-1 h-px bg-neutral-800 self-center"></span>
        <span>Interface</span>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-neutral-400 mb-24 reveal-el" style={{ transitionDelay: '0.3s' }}>
        Constructing digital environments requires a strict adherence to underlying grids. We eliminate the superfluous, focusing entirely on performance, geometric balance, and procedural generation. The result is a framework that scales infinitely without losing structural integrity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-4xl border-y border-neutral-800/60 divide-y md:divide-y-0 md:divide-x divide-neutral-800/60 relative">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>

        <div className="py-12 flex flex-col items-center reveal-el" style={{ transitionDelay: '0.4s' }}>
          <span className="text-6xl text-white mb-4" style={{ fontFamily: 'var(--font-serif)' }}>14</span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500">Modules Deployed</span>
        </div>
        <div className="py-12 flex flex-col items-center reveal-el" style={{ transitionDelay: '0.5s' }}>
          <span className="text-6xl text-cyan-500 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>8,192</span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500">Nodes Active</span>
        </div>
        <div className="py-12 flex flex-col items-center reveal-el" style={{ transitionDelay: '0.6s' }}>
          <span className="text-6xl text-red-600 mb-4" style={{ fontFamily: 'var(--font-serif)' }}>24</span>
          <span className="text-[10px] uppercase tracking-widest text-neutral-500">Cycles Completed</span>
        </div>
      </div>
    </section>
  );
}