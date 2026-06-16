import React from 'react';

export default function Manifesto() {
  return (
    <main className="flex-1 flex flex-col pt-40 pb-20 px-6 md:px-12 relative z-20">
      <div className="max-w-3xl mx-auto w-full skeuo-shell p-10 md:p-16 rounded-[2rem] border border-red-900/30 shadow-[0_0_50px_rgba(220,38,38,0.05)]">
        <span className="uppercase block text-[10px] font-medium text-red-400 tracking-widest mb-4">Core Directive</span>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-12">The Manifesto</h1>
        
        <div className="space-y-8 text-zinc-400 font-light leading-relaxed">
          <p className="text-xl text-zinc-200 font-medium">We believe in the absolute synthesis of logic and aesthetics.</p>
          <p>Motion is not merely decoration; it is the fundamental language of digital interaction. In a static world, elements exist. In a kinetic world, they live, breathe, and communicate intent before a single word is read.</p>
          <p>Our architecture demands precision. Every keyframe, every curve, and every dynamic shift is calculated to maximize cognitive resonance. We build systematic pipelines that ensure scalable rendering without sacrificing artistic integrity.</p>
          
          <div className="border-l-2 border-red-500/50 pl-6 my-10 py-2">
            <p className="text-lg text-zinc-300 italic">"Design without structure is chaos. Motion without logic is noise."</p>
          </div>
          
          <p>Nexara systems are designed to operate at the intersection of these conflicting domains, abstracting complex paradigms into intuitive visual architectures for enterprise-grade execution.</p>
        </div>
      </div>
    </main>
  );
}