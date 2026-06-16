import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const tiers = [
  {
    name: "Node License",
    desc: "Local environment instantiation.",
    priceMonthly: 45,
    priceYearly: 39,
    features: [
      "1 Node Active", 
      "Standard Processing", 
      "Basic Data Models", 
      "Community Protocols"
    ]
  },
  {
    name: "Cluster License",
    desc: "Advanced multi-node processing.",
    priceMonthly: 120,
    priceYearly: 99,
    popular: true,
    features: [
      "16 Nodes Active", 
      "Quantum Core Access", 
      "Encrypted Store", 
      "Priority Rendering"
    ]
  },
  {
    name: "Network License",
    desc: "Unrestricted systemic control.",
    priceMonthly: 350,
    priceYearly: 299,
    features: [
      "Unlimited Nodes", 
      "Custom Topologies", 
      "Dedicated Vault Matrix", 
      "24/7 Architect Support"
    ]
  }
];

export default function Pricing() {
  const sectionRef = useScrollReveal();
  const [annual, setAnnual] = useState(false);

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 border-b border-neutral-800/60 flex flex-col items-center relative">
      {/* Structural Guidelines */}
      <div className="absolute top-0 left-1/4 w-px h-16 bg-gradient-to-b from-neutral-800/60 to-transparent hidden md:block"></div>
      <div className="absolute top-0 right-1/4 w-px h-16 bg-gradient-to-b from-neutral-800/60 to-transparent hidden md:block"></div>

      <h2 
        className="text-3xl md:text-4xl text-white tracking-tight mb-6 reveal-el text-center" 
        style={{ fontFamily: 'var(--font-serif)', transitionDelay: '0.1s' }}
      >
        Deployment Tiers
      </h2>
      <p 
        className="text-sm text-neutral-400 mb-12 reveal-el max-w-md text-center" 
        style={{ transitionDelay: '0.2s' }}
      >
        Select the optimal capacity for your system. Resource allocation scales dynamically based on structural demands.
      </p>

      {/* Cycle Toggle */}
      <div className="flex items-center gap-4 mb-20 reveal-el" style={{ transitionDelay: '0.3s' }}>
        <span className={`text-[10px] uppercase tracking-widest transition-colors ${!annual ? 'text-white' : 'text-neutral-600'}`}>
          Standard
        </span>
        <button 
          onClick={() => setAnnual(!annual)}
          className="w-12 h-6 border border-neutral-700 rounded-full flex items-center px-1 bg-neutral-900 transition-colors hover:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
          aria-label="Toggle billing cycle"
        >
          <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${annual ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </button>
        <span className={`text-[10px] uppercase tracking-widest transition-colors ${annual ? 'text-white' : 'text-neutral-600'}`}>
          Extended <span className="text-cyan-500 ml-1">-15%</span>
        </span>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {tiers.map((tier, idx) => (
          <div 
            key={tier.name}
            className={`reveal-el relative flex flex-col p-8 md:p-10 border bg-neutral-950 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
              tier.popular 
                ? 'border-red-500/50 shadow-[0_0_40px_rgba(220,38,38,0.05)] hover:shadow-[0_0_40px_rgba(220,38,38,0.1)]' 
                : 'border-neutral-800/60 hover:border-neutral-600 hover:shadow-cyan-900/10'
            }`}
            style={{ transitionDelay: `${0.4 + idx * 0.1}s` }}
          >
            {/* Geometric Corner Anchors */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700"></div>

            {tier.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 border border-red-500/50 px-4 py-1 text-[9px] uppercase tracking-widest text-red-500">
                Optimal Sequence
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>{tier.name}</h3>
              <p className="text-[11px] uppercase tracking-widest text-neutral-500">{tier.desc}</p>
            </div>

            <div className="mb-8 border-b border-neutral-800/60 pb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl text-white tracking-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                  ${annual ? tier.priceYearly : tier.priceMonthly}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-neutral-500">/ cycle</span>
              </div>
            </div>

            <ul className="flex-1 space-y-4 mb-10">
              {tier.features.map(feat => (
                <li key={feat} className="flex items-start gap-3 text-sm text-neutral-400">
                  <iconify-icon 
                    icon="solar:check-circle-linear" 
                    className={`mt-0.5 ${tier.popular ? "text-red-500" : "text-cyan-500"}`}
                  ></iconify-icon>
                  {feat}
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-4 text-[10px] uppercase tracking-widest transition-colors border ${
                tier.popular 
                  ? 'bg-red-600 border-red-500 text-white hover:bg-red-700 hover:border-red-600' 
                  : 'bg-neutral-950 border-neutral-700 text-white hover:bg-white hover:text-black hover:border-white'
              }`}
            >
              Allocate
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}