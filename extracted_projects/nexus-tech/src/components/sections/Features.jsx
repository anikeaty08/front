import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const featureList = [
  {
    title: "Kinetic Topology",
    desc: "Auto-resolving structural nodes that adapt dynamically to real-time systemic load and stress variance.",
    icon: "solar:graph-up-linear"
  },
  {
    title: "Sub-Routine Automation",
    desc: "Delegated processing threads running autonomously in the background to ensure primary cycle efficiency.",
    icon: "solar:cpu-bolt-linear"
  },
  {
    title: "Zero-Latency Sync",
    desc: "Entanglement protocols ensuring instant state propagation across all instantiated geographic sectors.",
    icon: "solar:transfer-horizontal-linear"
  },
  {
    title: "Cryptographic Vault",
    desc: "Data storage layered with multi-dimensional encryption algorithms to prevent unauthorized sector breach.",
    icon: "solar:shield-keyhole-linear"
  },
  {
    title: "Dynamic Allocation",
    desc: "Intelligent, real-time distribution of compute resources across the cluster based on heuristic logic.",
    icon: "solar:server-square-linear"
  },
  {
    title: "Neural Heuristics",
    desc: "Predictive scaling models continuously trained on massive arrays of simulated operational cycle data.",
    icon: "solar:brain-linear"
  }
];

export default function Features() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-32 px-6 md:px-12 border-b border-neutral-800/60 flex flex-col items-center relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 reveal-el" style={{ transitionDelay: '0.1s' }}>
          <div className="flex gap-4 text-[10px] uppercase tracking-widest text-neutral-500 mb-6">
            <span className="w-8 h-px bg-neutral-700 self-center"></span>
            <span>Specifications</span>
            <span className="w-8 h-px bg-neutral-700 self-center"></span>
          </div>
          <h2 className="text-3xl md:text-5xl text-white tracking-tight mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
            Core Capabilities
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
            A comprehensive suite of embedded protocols designed to maintain absolute system integrity during high-velocity state changes. Zero compromise on precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800/60 border border-neutral-800/60 relative">
          {/* Frame Anchors */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>

          {featureList.map((feat, idx) => (
            <div 
              key={idx}
              className="bg-neutral-950 p-10 group hover:bg-neutral-900/50 transition-colors duration-500 relative overflow-hidden reveal-el"
              style={{ transitionDelay: `${0.2 + (idx * 0.1)}s` }}
            >
              {/* Feature Icon Container */}
              <div className="w-12 h-12 mb-8 bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-cyan-500 group-hover:text-red-500 group-hover:scale-110 transition-all duration-500 group-hover:border-red-500/30 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] relative">
                <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <iconify-icon icon={feat.icon} className="text-2xl"></iconify-icon>
              </div>
              
              {/* Feature Content */}
              <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-serif)' }}>{feat.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                {feat.desc}
              </p>

              {/* Decorative Hover Line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-red-500 via-red-500/50 to-transparent group-hover:w-full transition-all duration-700 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}