import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ProductGrid() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 border-b border-neutral-800/60 relative overflow-hidden">
      {/* Subtle Section Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen">
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/47879ed2-c82a-43b3-8063-89d824dc66b3/1600w.jpg" 
          alt="Lone Explorer Facing Giant Monolith in Storm" 
          className="w-full h-full object-cover blur-[2px]" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-neutral-800/60 border border-neutral-800/60 p-px relative z-10 backdrop-blur-sm">
        {/* Frame Details */}
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-neutral-950 border border-neutral-700 z-10"></div>

        {/* Large Block */}
        <div className="bg-neutral-950 relative overflow-hidden group flex flex-col justify-end p-12 min-h-[500px]">
          {/* Background Image */}
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/42b6391f-a6b5-4ce2-89de-dff62950d2f6/1600w.jpg" 
            alt="Glowing Green Data Cubes in Server Room" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/5 blur-3xl rounded-full transition-transform duration-700 group-hover:scale-150"></div>
          
          {/* Hover Reveal Floating Element */}
          <div className="absolute top-12 right-12 w-32 h-32 rounded-full overflow-hidden border border-neutral-700/30 opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-y-8 group-hover:translate-y-0 mix-blend-screen hidden md:block z-10 shadow-2xl shadow-purple-900/20">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0abc0c4-5faf-4b87-a15e-26d6439ac03e_800w.webp" 
              className="w-full h-full object-cover animate-[spin_40s_linear_infinite] opacity-80" 
              alt="Abstract Planet in Pastel Nebula" 
            />
          </div>

          <div className="relative z-10 reveal-el" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-3xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Quantum</h3>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Core Framework</p>
            <button className="px-6 py-3 border border-neutral-700 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors bg-neutral-950/50 backdrop-blur-md">
              Details
            </button>
          </div>
        </div>

        {/* Right Column (Stacked) */}
        <div className="grid grid-cols-1 grid-rows-2 gap-px bg-neutral-800/60">
          {/* Top Right */}
          <div className="bg-neutral-950 flex flex-col sm:flex-row h-full min-h-[250px] group relative overflow-hidden">
            <div className="p-10 flex-1 flex flex-col justify-center relative z-10 reveal-el bg-gradient-to-r from-neutral-950 to-neutral-950/80" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Vertex</h3>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6">Logic Module</p>
              <button className="px-5 py-2 border border-neutral-800 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors self-start bg-neutral-950/50 backdrop-blur-md">
                Details
              </button>
            </div>
            <div className="flex-1 bg-neutral-900/50 relative overflow-hidden border-l border-neutral-800/60">
              <img 
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7f23c88-e15f-4662-9bcd-428d0b52e7b7_800w.webp" 
                alt="Glowing Mountain Range Over Calm Water" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700 mix-blend-screen" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60 z-10">
                <iconify-icon icon="solar:code-square-linear" className="text-8xl text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"></iconify-icon>
              </div>
            </div>
          </div>
          
          {/* Bottom Right */}
          <div className="bg-neutral-950 flex flex-col sm:flex-row-reverse h-full min-h-[250px] group relative overflow-hidden">
            <div className="p-10 flex-1 flex flex-col justify-center items-end text-right relative z-10 reveal-el bg-gradient-to-l from-neutral-950 to-neutral-950/80" style={{ transitionDelay: '0.3s' }}>
              <h3 className="text-2xl text-white mb-2" style={{ fontFamily: 'var(--font-serif)' }}>Aura</h3>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-6">Render Engine</p>
              <button className="px-5 py-2 border border-neutral-800 text-[10px] uppercase tracking-widest text-red-500 hover:bg-red-500 hover:text-white transition-colors bg-neutral-950/50 backdrop-blur-md">
                Details
              </button>
            </div>
            <div className="flex-1 bg-neutral-900/50 relative overflow-hidden border-r border-neutral-800/60">
               <img 
                 src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/81fd7eac-5767-402b-b97b-1990b65dac46/800w.jpg" 
                 alt="Hands conjuring fiery spiral in cosmic space" 
                 className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700 mix-blend-screen" 
               />
               <div className="absolute inset-0 bg-gradient-to-l from-neutral-950 to-transparent"></div>
               <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60 z-10">
                  <iconify-icon icon="solar:layers-minimalistic-linear" className="text-8xl text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]"></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}