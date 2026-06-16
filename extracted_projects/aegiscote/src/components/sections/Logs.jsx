import React from 'react';

export default function Logs() {
  return (
    <section className="py-24 relative border-b border-white/10 flex flex-col items-center overflow-hidden bg-[#030303]">
      {/* Immersive Background */}
      <img 
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/42b6391f-a6b5-4ce2-89de-dff62950d2f6/1600w.jpg"
        alt="Glowing Green Data Cubes in Server Room"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-screen"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="text-center mb-16 relative z-10 gsap-fade-up">
        <h2 className="text-4xl font-light tracking-tight text-white mb-4 drop-shadow-md">Deployment Logs</h2>
        <p className="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
          Automated rollout sequences and integrity checks across the distributed environment. Review recent state changes.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 px-4 relative z-10">
        
        {/* Left Nav Arrow (Visual only) */}
        <div className="hidden md:flex w-10 h-10 border border-white/10 items-center justify-center rounded-full text-neutral-500 hover:text-white hover:border-white/30 cursor-pointer transition-colors absolute left-8 bg-[#050505]/50 backdrop-blur-sm">
          <iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
        </div>

        {/* Card 1 */}
        <div className="w-full md:w-1/3 bg-[#050505]/80 backdrop-blur-sm border border-white/10 p-8 flex flex-col opacity-50 hover:opacity-100 transition-opacity gsap-carousel-item">
          <div className="text-[0.65rem] tracking-widest text-neutral-500 uppercase mb-2">T-MINUS 04:00</div>
          <h4 className="text-xl text-white font-light tracking-tight mb-4">Firmware Patch</h4>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6 flex-grow">Applied microcode update to core routing switches. Addressed minor memory leak in parsing module.</p>
          <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-widest">
            <iconify-icon icon="solar:check-circle-linear" class="text-green-500/70"></iconify-icon> Verified
          </div>
        </div>

        {/* Card 2 (Active/Center) */}
        <div className="w-full md:w-1/3 bg-[#080808] border border-cyan-500/30 p-8 flex flex-col relative scale-100 md:scale-105 z-20 shadow-[0_0_40px_rgba(0,240,255,0.08)] gsap-carousel-item">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1 drop-shadow-md">Executing</div>
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-400" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyan-400" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyan-400" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-400" />
          
          <div className="w-full h-32 bg-neutral-900/50 mb-6 flex items-center justify-center border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent w-[200%] animate-[translateX_2s_linear_infinite]" />
            <iconify-icon icon="solar:settings-linear" class="text-4xl text-cyan-400 animate-[spin_4s_linear_infinite] drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]"></iconify-icon>
          </div>

          <div className="text-[0.65rem] tracking-widest text-cyan-400 uppercase mb-2">CURRENT</div>
          <h4 className="text-2xl text-white font-light tracking-tight mb-4 uppercase">Database Migration</h4>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6">Transferring legacy records to high-availability cluster. Sharding protocol active to prevent IO bottleneck.</p>
          
          <button className="w-full py-2 bg-white/5 border border-white/10 text-xs text-white uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2 mt-auto hover:border-red-500/30 hover:text-red-400 group">
            <iconify-icon icon="solar:stop-circle-linear" class="text-red-400 group-hover:scale-110 transition-transform"></iconify-icon> Halt Process
          </button>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 bg-[#050505]/80 backdrop-blur-sm border border-white/10 p-8 flex flex-col opacity-50 hover:opacity-100 transition-opacity gsap-carousel-item">
          <div className="text-[0.65rem] tracking-widest text-neutral-500 uppercase mb-2">SCHEDULED</div>
          <h4 className="text-xl text-white font-light tracking-tight mb-4">Node Expansion</h4>
          <p className="text-xs text-neutral-400 leading-relaxed mb-6 flex-grow">Provisioning 500 new virtual instances in Region B to handle projected traffic spike.</p>
          <div className="flex items-center gap-2 text-xs text-neutral-500 uppercase tracking-widest">
            <iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Pending Queue
          </div>
        </div>

        {/* Right Nav Arrow */}
        <div className="hidden md:flex w-10 h-10 border border-white/10 items-center justify-center rounded-full text-neutral-500 hover:text-white hover:border-white/30 cursor-pointer transition-colors absolute right-8 bg-[#050505]/50 backdrop-blur-sm">
          <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
        </div>

      </div>
    </section>
  );
}