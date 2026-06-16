import React from 'react';

export default function Details() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
      {/* Left Visual Frame */}
      <div className="md:col-span-5 border-r border-white/10 relative p-8 min-h-[500px] flex items-center justify-center overflow-hidden gsap-fade-right bg-[#050505] group">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/377a41af-f182-4243-a892-5a75af08a221_800w.webp"
          alt="Futuristic portrait with glowing light trails"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-transparent to-[#030303]/90" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        <div className="relative w-64 h-64 border border-cyan-500/30 rounded-full flex items-center justify-center animate-[spin_60s_linear_infinite] z-10 backdrop-blur-sm bg-black/10">
          <div className="absolute w-full h-px bg-cyan-500/20" />
          <div className="absolute h-full w-px bg-cyan-500/20" />
          <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse]">
            <iconify-icon icon="solar:radar-linear" class="text-6xl text-cyan-400/80 drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]"></iconify-icon>
          </div>
        </div>
        {/* Frame markers */}
        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50 z-10" />
        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50 z-10" />
      </div>

      {/* Right Content Frame */}
      <div className="md:col-span-7 p-12 lg:p-20 relative flex flex-col justify-center bg-[#030303]/80 backdrop-blur-sm gsap-fade-left">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px)' }} />
        
        <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white mb-8 max-w-md">Routing Protocol Optimization</h2>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest text-cyan-500">Status</span>
            <span className="text-sm font-medium text-white tracking-wide">ACTIVE</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Priority</span>
            <span className="text-sm font-medium text-white tracking-wide">HIGH</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Threads</span>
            <span className="text-sm font-medium text-white tracking-wide">128</span>
          </div>
          <div className="bg-white/5 border border-white/10 px-4 py-2 flex flex-col">
            <span className="text-[0.6rem] uppercase tracking-widest text-neutral-500">Cycle</span>
            <span className="text-sm font-medium text-white tracking-wide">0.5ms</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-neutral-400 mb-10 max-w-xl">
          Dynamic packet routing via quantum-resistant tunnels ensures minimal data degradation over long-haul connections. The system autonomously load-balances across regional clusters, circumventing localized outages.
        </p>

        {/* Gradient Border Button */}
        <div className="inline-block p-[1px] bg-gradient-to-r from-cyan-500/50 to-white/10 w-max cursor-pointer group">
          <div className="bg-[#050505] px-8 py-3 flex items-center gap-3 transition-colors group-hover:bg-neutral-900">
            <span className="text-cyan-400 text-sm font-medium tracking-wide">INITIALIZE SEQUENCE</span>
            <iconify-icon icon="solar:round-alt-arrow-right-linear" class="text-white text-lg group-hover:translate-x-1 transition-transform"></iconify-icon>
          </div>
        </div>
      </div>
    </section>
  );
}