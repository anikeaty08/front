import React, { useState } from 'react';

export default function Hero() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center bg-[#F4F1EB]">
      {/* Collage Images (Perimeter) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top Left: woman reddish brown hair pink setting */}
        <div className="absolute top-[15%] -left-[5%] md:left-[8%] w-40 md:w-56 aspect-[3/4] -rotate-6 rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white transition-transform duration-1000 hover:scale-105">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a41d3a65-8d6a-4d01-9658-ed45cbcdcce6_800w.webp" alt="Beauty Profile" className="w-full h-full object-cover" />
        </div>
        
        {/* Lower Left: cool blue landscape/water */}
        <div className="absolute bottom-[20%] -left-[8%] md:left-[5%] w-48 md:w-64 aspect-square rotate-3 rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white/90 bg-white transition-transform duration-1000 hover:scale-105 hover:rotate-6">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/67055a3d-e425-476f-9210-8e99a246e25b_800w.webp" alt="Pure Texture" className="w-full h-full object-cover" />
        </div>

        {/* Upper Right: skin tone/limb close up */}
        <div className="absolute top-[10%] -right-[8%] md:right-[5%] w-36 md:w-48 aspect-[4/5] rotate-12 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-white transition-transform duration-1000 hover:scale-105 hover:rotate-6">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f2eed77-2de0-467a-9015-ab362af23192_800w.webp" alt="Skin Care" className="w-full h-full object-cover" />
        </div>

        {/* Middle Right: purple fabric / abstract */}
        <div className="absolute top-[45%] -right-[12%] md:right-[2%] w-56 md:w-[18rem] aspect-square -rotate-3 rounded-[2.5rem] overflow-hidden shadow-xl border-[6px] border-white/80 bg-white transition-transform duration-1000 hover:scale-105">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/d4a0a5e1-e688-46fe-a389-daccafb0f356/800w.png" alt="Soft Fabric" className="w-full h-full object-cover" />
        </div>

        {/* Lower Right: brown hair closeup */}
        <div className="absolute bottom-[10%] right-[15%] md:right-[22%] w-28 md:w-44 aspect-[3/4] -rotate-12 rounded-[1.5rem] overflow-hidden shadow-lg border-[3px] border-white bg-white hidden md:block transition-transform duration-1000 hover:scale-105">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5e06e64-e12f-4afc-8da8-6e066dff92a7_800w.webp" alt="Hair Texture" className="w-full h-full object-cover" />
        </div>

        {/* White Blank Cards for depth */}
        <div className="absolute top-[30%] left-[25%] w-16 md:w-24 aspect-[4/3] rotate-12 rounded-[1rem] bg-white/90 backdrop-blur-md shadow-sm border border-white/60"></div>
        <div className="absolute bottom-[35%] right-[28%] w-20 md:w-32 aspect-square -rotate-6 rounded-[1.5rem] bg-white/80 backdrop-blur-md shadow-sm border border-white/60"></div>
      </div>

      {/* Center Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex flex-col items-center mt-[-8vh] animate-fade-in">
        {/* Top Micro Label */}
        <div className="mb-10 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-medium shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
          Lumina Beauty
        </div>

        <h1 className="text-5xl md:text-[6.5rem] font-medium leading-[1.05] tracking-tighter text-zinc-900 mb-6 text-center">
          Precision Beauty, <br className="hidden md:block"/>Fully Automated
        </h1>
        <p className="text-zinc-500 md:text-lg max-w-lg text-center leading-relaxed font-medium">
          The world's first intelligent formulation device that calibrates your daily aesthetic with microscopic accuracy.
        </p>
      </div>

      {/* Bottom Floating Dock / Form */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[92%] md:w-[65%] max-w-3xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_12px_48px_rgba(0,0,0,0.06)] rounded-[2.5rem] p-3 flex items-center justify-between z-20 transition-transform hover:scale-[1.01] duration-500">
        <div className="hidden md:flex items-center gap-3 px-5">
          <div className="w-2 h-2 rounded-full bg-zinc-800 animate-pulse shadow-[0_0_8px_rgba(39,39,42,0.3)]"></div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.15em]">System Ready</span>
        </div>
        
        <div className="flex-1 w-full">
          <form className={`flex items-center bg-zinc-50 rounded-full p-1.5 border border-zinc-200 shadow-sm ${isSubmitted ? 'is-submitted' : ''}`} onSubmit={handleSubmit}>
            <input 
              type="email" 
              required
              placeholder="Join our exclusive waitlist" 
              className="w-full px-5 py-2.5 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
            />
            <button type="submit" className="bg-zinc-900 text-black/50 rounded-full px-7 py-3 flex items-center justify-center hover:bg-zinc-800 transition-colors font-medium text-xs tracking-wide gap-2 whitespace-nowrap">
              Submit
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
            </button>
          </form>
          <div className="form-success text-xs font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 py-3 px-6 rounded-full flex items-center justify-center w-full shadow-sm">
            Thank you! You've been added to the list.
          </div>
        </div>
      </div>
    </section>
  );
}