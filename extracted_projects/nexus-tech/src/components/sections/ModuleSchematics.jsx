import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

// Reusable counter component for the product rows
const Quantifier = ({ value, onChange }) => {
  return (
    <div className="px-6 border-r border-neutral-800/60 flex items-center gap-4 text-white select-none">
      <span className="font-serif text-lg w-4 text-center">{value}</span>
      <div className="flex flex-col">
        <button onClick={() => onChange(value + 1)} className="hover:text-white text-neutral-500 transition-colors leading-none">
          <iconify-icon icon="solar:alt-arrow-up-linear" height="12"></iconify-icon>
        </button>
        <button onClick={() => onChange(Math.max(1, value - 1))} className="hover:text-white text-neutral-500 transition-colors leading-none">
          <iconify-icon icon="solar:alt-arrow-down-linear" height="12"></iconify-icon>
        </button>
      </div>
    </div>
  );
};

export default function ModuleSchematics() {
  const sectionRef = useScrollReveal();
  const [qty1, setQty1] = useState(1);
  const [qty2, setQty2] = useState(1);

  const price1 = 128;
  const price2 = 256;

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 border-b border-neutral-800/60 flex flex-col items-center">
      <h2 
        className="text-3xl text-white tracking-tight mb-24 reveal-el" 
        style={{ fontFamily: 'var(--font-serif)', transitionDelay: '0.1s' }}
      >
        Advanced Module Schematics:
      </h2>

      {/* Product 1 */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl border border-neutral-800/60 mb-24 relative bg-neutral-950 group">
        <div className="flex-1 bg-neutral-900/40 p-12 border-b md:border-b-0 md:border-r border-neutral-800/60 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative w-48 h-48 border border-neutral-700 flex items-center justify-center rotate-45 bg-neutral-950/50 backdrop-blur-sm shadow-2xl transition-transform duration-700 group-hover:rotate-90 group-hover:scale-105">
            <div className="w-32 h-32 border border-neutral-600 flex items-center justify-center transition-transform duration-700 group-hover:-rotate-45">
              <span className="text-neutral-500 text-xs tracking-widest uppercase -rotate-45 group-hover:rotate-0 transition-transform duration-700">Seq_01</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="p-12 flex-1 reveal-el" style={{ transitionDelay: '0.2s' }}>
            <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Core (Alpha Build)</h3>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-8">Processing Unit</p>
            <p className="text-sm leading-relaxed text-neutral-400 mb-6">
              A highly optimized central processing entity. Designed for minimal latency and maximum throughput. Instantiates environments instantly based on predefined geometric arrays.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              Equipped with fail-safe memory allocation.
            </p>
          </div>
          <div className="border-t border-neutral-800/60 flex items-center h-16 text-sm">
            <Quantifier value={qty1} onChange={setQty1} />
            <div className="px-6 border-r border-neutral-800/60 flex-1 flex items-center justify-center text-cyan-500 font-serif text-xl">
              ${price1 * qty1}
            </div>
            <button className="px-6 h-full text-[10px] uppercase tracking-widest text-red-500 hover:bg-neutral-900 transition-colors w-1/3">
              Initialize
            </button>
          </div>
        </div>
      </div>

      {/* Product 2 */}
      <div className="flex flex-col md:flex-row-reverse w-full max-w-4xl border border-neutral-800/60 relative bg-neutral-950 group">
        <div className="flex-1 bg-blue-950/20 p-12 border-b md:border-b-0 md:border-l border-neutral-800/60 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 border-[0.5px] border-blue-500/10 transition-opacity duration-500 group-hover:opacity-100 opacity-50" style={{ backgroundImage: 'linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white text-xs rotate-45 mb-8 border border-blue-400/50 shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-180">
              <span className="-rotate-45 group-hover:rotate-180 transition-transform duration-500">02</span>
            </div>
            <h4 className="text-4xl text-white tracking-tight text-center" style={{ fontFamily: 'var(--font-serif)' }}>Memory<br/>Bank</h4>
            <p className="text-[9px] uppercase tracking-widest text-blue-400 mt-4">Encrypted Store</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="p-12 flex-1 reveal-el" style={{ transitionDelay: '0.3s' }}>
            <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Vault Matrix</h3>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-8">Data Layer</p>
            <p className="text-sm leading-relaxed text-neutral-400 mb-6">
              Persistent storage component utilizing crystalline memory architecture. Ensures zero data degradation over extended simulation cycles.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400">
              Includes redundant backup protocols.
            </p>
          </div>
          <div className="border-t border-neutral-800/60 flex items-center h-16 text-sm">
            <Quantifier value={qty2} onChange={setQty2} />
            <div className="px-6 border-r border-neutral-800/60 flex-1 flex items-center justify-center text-cyan-500 font-serif text-xl">
              ${price2 * qty2}
            </div>
            <button className="px-6 h-full text-[10px] uppercase tracking-widest text-red-500 hover:bg-neutral-900 transition-colors w-1/3">
              Initialize
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}