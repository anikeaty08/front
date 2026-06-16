import React from 'react';

export default function SystemCards() {
  return (
    <section className="relative -mt-24 px-4 z-20 flex justify-center pb-24 border-b border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        
        {/* Card 1 */}
        <div className="relative bg-[#050505] border border-white/10 p-6 flex flex-col items-center text-center mt-12 md:mt-16 group hover:border-white/20 transition-colors gsap-card">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40" />
          
          <div className="w-full h-40 bg-neutral-900/50 mb-6 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2cfcaf9-6b2e-419b-8821-364b9379ddf0_800w.webp" 
              alt="Glowing Green Cube Among Textured Blocks" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            <iconify-icon icon="solar:cpu-linear" class="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl text-white/90 z-10 drop-shadow-lg"></iconify-icon>
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Sector Alpha</span>
          <h2 className="text-3xl font-light tracking-tight text-white uppercase mb-4">Compute</h2>
          <p className="text-xs leading-relaxed text-neutral-400 mb-6">Distributed processing units scaling horizontally to meet complex cryptographic workloads.</p>
          
          <div className="w-full flex justify-between border-t border-white/10 pt-4 mt-auto">
            <div className="text-left">
              <span className="block text-[0.65rem] uppercase tracking-widest text-neutral-500">Latency</span>
              <span className="text-sm text-cyan-400 font-medium">12ms</span>
            </div>
            <div className="text-right">
              <span className="block text-[0.65rem] uppercase tracking-widest text-neutral-500">Uptime</span>
              <span className="text-sm text-white font-medium">99.9%</span>
            </div>
          </div>
        </div>

        {/* Card 2 (Center Highlight) */}
        <div className="relative bg-[#080808] p-[1px] mt-0 md:-mt-8 z-30 gsap-card" style={{ background: 'linear-gradient(180deg, rgba(0,240,255,0.3) 0%, rgba(255,255,255,0.05) 100%)' }}>
          <div className="bg-[#050505] h-full w-full p-8 flex flex-col items-center text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400/50" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400/50" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400/50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400/50" />
            
            <div className="w-full h-56 bg-neutral-900/80 mb-8 relative border border-white/10 flex items-center justify-center overflow-hidden">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efec8979-41c5-45c9-8925-91b67d753a6b_800w.webp" 
                alt="Minimalist glass panel with abstract shadows" 
                className="absolute inset-0 w-full h-full object-cover opacity-70 mix-blend-screen group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 via-transparent to-[#080808]" />
              <iconify-icon icon="solar:database-linear" class="text-6xl text-cyan-400 z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"></iconify-icon>
            </div>
            <span className="text-xs uppercase tracking-widest text-cyan-500 mb-2">Core Nexus</span>
            <h2 className="text-4xl font-normal tracking-tight text-white uppercase mb-6 text-shadow-sm">Storage</h2>
            
            <div className="w-full flex justify-between border-t border-white/10 pt-6 mt-auto">
              <div className="text-left">
                <span className="block text-[0.65rem] uppercase tracking-widest text-neutral-500">Capacity</span>
                <span className="text-sm text-cyan-400 font-medium">Petabyte</span>
              </div>
              <div className="text-right">
                <span className="block text-[0.65rem] uppercase tracking-widest text-neutral-500">Redundancy</span>
                <span className="text-sm text-white font-medium">RAID-Z3</span>
              </div>
            </div>
            <div className="mt-6 flex justify-center text-white/20">
              <iconify-icon icon="solar:alt-arrow-down-linear" class="text-2xl animate-bounce"></iconify-icon>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative bg-[#050505] border border-white/10 p-6 flex flex-col items-center text-center mt-12 md:mt-16 group hover:border-white/20 transition-colors gsap-card">
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/40" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/40" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40" />
          
          <div className="w-full h-40 bg-neutral-900/50 mb-6 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8aa0d98a-387e-492b-9bea-7172f4ea0c1a_800w.webp" 
              alt="Teal Glass Ring with Geometric Shadow" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 mix-blend-luminosity hover:mix-blend-normal group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            <iconify-icon icon="solar:global-linear" class="absolute bottom-4 left-1/2 -translate-x-1/2 text-4xl text-white/90 z-10 drop-shadow-lg"></iconify-icon>
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-500 mb-2">Outer Rim</span>
          <h2 className="text-3xl font-light tracking-tight text-white uppercase mb-4">Network</h2>
          <p className="text-xs leading-relaxed text-neutral-400 mb-6">High-throughput fiber backbone connecting disparate enclaves securely.</p>
          
          <div className="w-full flex justify-between border-t border-white/10 pt-4 mt-auto">
            <div className="text-left">
              <span className="block text-[0.65rem] uppercase tracking-widest text-neutral-500">Bandwidth</span>
              <span className="text-sm text-cyan-400 font-medium">100Gbps</span>
            </div>
            <div className="text-right">
              <span className="block text-[0.65rem] uppercase tracking-widest text-neutral-500">Nodes</span>
              <span className="text-sm text-white font-medium">4,096</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}