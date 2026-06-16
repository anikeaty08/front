import React, { useState } from 'react';
import clsx from 'clsx';

const slides = [
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb9b4b89-2c58-4cec-9d29-6de9fa699dbb_1600w.jpg", id: "01" },
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg", id: "02" },
  { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/223529a8-3655-4526-9daa-40b68dff304a_1600w.jpg", id: "03" }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeSlide = (direction) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIdx((prev) => (prev + direction + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section className="pt-20 pb-20 border-t border-red-900/20 z-20 relative">
      <div className="container md:px-12 mx-auto px-6">
        <div className="skeuo-shell md:p-16 overflow-hidden rounded-[2rem] p-10 relative border border-red-900/30">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px]"></div>

          <div className="flex mb-12 items-center justify-between">
            <span className="uppercase block text-[10px] font-medium text-red-400 tracking-widest mb-3">
              Sector Feedback
            </span>
            <div className="flex gap-2 text-xs font-mono text-zinc-500">
              <span 
                className={clsx("text-zinc-200 transition-all duration-300", isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0")}
              >
                {slides[currentIdx].id}
              </span>
              / 03
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight mb-10 text-white">
                Our structural protocols have synthesized over{' '}
                <span className="text-gradient-main">
                  500 million
                </span>{' '}
                successful visual outputs.
              </h3>
              <button className="btn-gradient px-8 py-3 rounded-xl text-xs font-medium tracking-wide text-white flex items-center gap-2">
                Init Project
                <iconify-icon icon="solar:alt-arrow-right-linear" class="text-sm"></iconify-icon>
              </button>
            </div>

            <div className="flex flex-col gap-8 w-full lg:max-w-lg ml-auto">
              <div className="relative w-full h-[400px] skeuo-card-inner rounded-xl p-2 group">
                <img 
                  src={slides[currentIdx].img} 
                  alt="Project Visual" 
                  className={clsx("w-full h-full object-cover rounded-lg aura-img transition-all duration-500", isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100")} 
                />
                <div className="absolute inset-0 aura-overlay rounded-xl opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="absolute bottom-6 right-6 z-20 bg-black border border-red-500/30 px-3 py-1.5 rounded-sm flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></div>
                   <span className="text-[9px] font-medium uppercase tracking-widest text-red-300">Verified</span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-red-900/30 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center text-xs font-bold border border-red-500/30 bg-black text-red-400">
                    NX
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Renne Franchi</p>
                    <p className="text-[10px] font-light tracking-widest uppercase text-zinc-500">
                      Core Administrator
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => changeSlide(-1)} className="flex btn-outline-glow w-10 h-10 rounded-lg items-center justify-center text-zinc-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"></path></svg>
                  </button>
                  <button onClick={() => changeSlide(1)} className="flex btn-gradient w-10 h-10 rounded-lg items-center justify-center text-white transition-transform hover:-translate-y-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}