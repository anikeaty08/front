import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<main className="relative min-h-screen w-full flex flex-col justify-between bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2d2a26] via-[#11100f] to-[#050505]">

<nav className="relative z-50 w-full px-6 py-8 md:px-12 flex items-center justify-between text-sm tracking-wide">

<div className="hidden md:flex space-x-12 text-neutral-400 font-medium">
<a className="hover:text-white transition-colors duration-300 font-geist" href="#">Men</a>
<a className="hover:text-white transition-colors duration-300 font-geist" href="#">Women</a>
<a className="hover:text-white transition-colors duration-300 font-geist" href="#">Accessories</a>
</div>

<button className="md:hidden text-white hover:text-neutral-300 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="text-xl md:text-2xl tracking-tighter uppercase text-white cursor-pointer absolute left-1/2 -translate-x-1/2 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                Atelier
            </div>

<div className="flex items-center space-x-6 md:space-x-8 text-neutral-300 font-medium">
<a className="hidden md:inline hover:text-white transition-colors duration-300 text-xs uppercase tracking-widest font-geist" href="#">Login</a>
<div className="flex items-center space-x-6">
<button className="hover:text-white transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-white transition-colors flex items-center justify-center relative">
<iconify-icon height="20" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
</button>
</div>
</div>
</nav>

<div className="flex-grow flex flex-col w-full h-full pt-10 pb-10 relative items-center justify-center">

<div className="absolute inset-0 flex items-center justify-between px-4 md:px-12 pointer-events-none select-none z-0 overflow-hidden">
<h1 className="text-[5rem] md:text-[11rem] xl:text-[14rem] tracking-tighter text-white/5 leading-none transform -translate-x-4 md:-translate-x-12 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                    BOLD
                </h1>
<h1 className="text-[5rem] md:text-[11rem] xl:text-[14rem] tracking-tighter text-white/5 leading-none transform translate-x-4 md:translate-x-12 text-right font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                    SOUL
                </h1>
</div>

<div className="absolute top-[15%] left-6 md:left-[15%] z-20 hidden md:block mix-blend-difference pointer-events-none">
<p className="text-lg text-neutral-400 font-medium tracking-widest uppercase mb-2 font-geist">Since 1984</p>
<h2 className="text-6xl tracking-tighter text-white leading-[0.9] font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                    TimelessEssence
                </h2>
</div>
<div className="absolute bottom-[20%] right-6 md:right-[15%] z-20 hidden md:block mix-blend-difference text-right pointer-events-none">
<h2 className="text-6xl tracking-tighter text-white leading-[0.9] mb-2 font-geist font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>
                    ModernArchive
                </h2>
<p className="text-lg text-neutral-400 font-medium tracking-widest uppercase font-geist">Fall / Winter</p>
</div>

<div className="relative z-10 group">

<div className="relative p-1.5 md:p-2 bg-gradient-to-b from-neutral-700/50 to-neutral-900/50 rounded-[50px] md:rounded-[100px] backdrop-blur-sm border border-white/5 shadow-2xl shadow-black/60">

<div className="relative w-[320px] h-[460px] md:w-[420px] md:h-[600px] rounded-[44px] md:rounded-[92px] overflow-hidden bg-neutral-900">

<img alt="Fashion Editorial" className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-1000 ease-out filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1020&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

<div className="absolute top-8 left-0 w-full text-center md:hidden z-10">
<span className="text-white/80 text-xs font-bold tracking-[0.3em] uppercase font-geist">New Collection</span>
</div>
</div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-30 w-max">
<button className="flex items-center justify-between gap-4 bg-white text-neutral-950 pl-8 pr-2 py-2 rounded-full shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_50px_-10px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-500 group">
<span className="text-base font-bold tracking-tight font-geist">Explore Collection</span>
<div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
</button>
</div>

<div className="absolute top-1/2 -left-16 -translate-y-1/2 hidden md:flex flex-col gap-6 text-neutral-600">
<iconify-icon height="24" icon="solar:star-fall-linear" strokeWidth="1" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:asteroid-linear" strokeWidth="1" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:atom-linear" strokeWidth="1" width="24"></iconify-icon>
</div>
</div>

<div className="absolute bottom-8 left-0 w-full px-6 md:px-12 flex justify-between items-end text-neutral-500 text-xs md:text-sm font-medium tracking-wide">
<div className="hidden md:block max-w-xs">
<p className="leading-relaxed font-geist">Defined by raw textures and monochromatic palettes. A tribute to modern minimalism.</p>
</div>
<div className="flex flex-col items-center mx-auto md:hidden animate-pulse">
<span className="uppercase tracking-widest text-[10px] mb-2 font-geist">Scroll</span>
<iconify-icon height="20" icon="solar:mouse-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="hidden md:flex items-center gap-2 cursor-pointer group">
<span className="group-hover:text-white transition-colors font-geist">Play Film</span>
<div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-white transition-colors">
<iconify-icon height="14" icon="solar:play-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
