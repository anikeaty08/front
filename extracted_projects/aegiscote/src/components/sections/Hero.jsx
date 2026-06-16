import React from 'react';

export default function Hero() {
  return (
    <header className="relative pt-24 pb-32 border-b border-white/10 flex flex-col items-center justify-center overflow-hidden min-h-[60vh]">
      {/* Background Image */}
      <img 
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ed1a1eb-ca88-4c25-99b4-e9fdc9377e6d_1600w.webp" 
        alt="Abstract blockchain data network cubes" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/50 via-transparent to-[#030303]" />
      
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px)' }}
      />
      
      <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-white/90 z-10 uppercase mix-blend-screen gsap-scale relative drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        Initialize
      </h1>
      <p className="mt-8 text-sm tracking-widest uppercase text-cyan-400 z-10 gsap-fade font-medium bg-cyan-900/20 px-4 py-2 border border-cyan-500/20">Core systems online</p>
    </header>
  );
}