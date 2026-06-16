import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Banner() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 border-b border-neutral-800/60 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-950 opacity-80"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto border border-neutral-800/60 p-12 bg-neutral-950/50 backdrop-blur-sm hover:bg-neutral-900/60 transition-colors duration-500">
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neutral-500/50"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neutral-500/50"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neutral-500/50"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neutral-500/50"></div>

        <div className="flex-1 text-center md:text-left mb-12 md:mb-0 reveal-el" style={{ transitionDelay: '0.1s' }}>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest text-cyan-500 mb-6 justify-center md:justify-start">
            <span className="border border-cyan-900/50 px-2 py-1 bg-cyan-950/20">Protocols</span>
            <span className="border border-neutral-800 px-2 py-1">Systems</span>
          </div>
          <h2 className="text-4xl text-white tracking-tight mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Master the Interface</h2>
          <p className="text-sm text-neutral-400">Initialize sequence parameters.</p>
        </div>

        <div className="reveal-el" style={{ transitionDelay: '0.3s' }}>
          <button className="bg-white text-black px-8 py-4 text-xs font-medium tracking-widest uppercase hover:bg-neutral-200 transition-colors active:scale-95 transform">
            Execute Command
          </button>
        </div>
      </div>
    </section>
  );
}