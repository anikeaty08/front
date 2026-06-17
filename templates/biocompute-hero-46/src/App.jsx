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



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
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
      

<div className="relative w-full max-w-[1400px] aspect-[16/9] bg-[#1e1333] rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col">

<div className="absolute inset-0 grid grid-cols-6 pointer-events-none z-0">
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
<div className="border-r border-white/5 h-full"></div>
</div>

<div className="absolute top-0 right-0 w-3/4 h-full z-10 pointer-events-none mix-blend-screen opacity-90">

<img alt="Abstract Organic Shape" className="w-full h-full object-cover object-center translate-x-1/4 scale-125 brightness-110 hue-rotate-[260deg] contrast-125 saturate-150" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-[#1e1333] via-[#1e1333]/80 to-transparent z-10 pointer-events-none"></div>

<nav className="relative z-50 flex justify-between items-center px-12 py-10 w-full">
<div className="text-2xl font-semibold tracking-tight text-white/90">IOCO</div>
<button className="text-white/80 hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</nav>

<main className="relative z-40 flex-1 flex flex-col justify-center px-12 pb-12">
<div className="grid grid-cols-12 gap-4 h-full items-center">

<div className="col-span-1 hidden lg:flex flex-row gap-4 items-center">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-white/50 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-[#ff2e63] flex items-center justify-center text-white hover:bg-[#ff2e63]/10 transition-all shadow-[0_0_15px_rgba(255,46,99,0.3)]">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>

<div className="col-span-12 lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-10">
<h2 className="text-xs font-medium tracking-[0.2em] text-white/70 mb-6 uppercase">
                        Hacking the cell
                    </h2>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-white mb-12">
                        Creating a <br/>
<span className="text-white">Biocomputer</span>
</h1>

<div className="flex items-center">
<button className="group relative flex items-center gap-6 px-8 py-4 border border-[#ff2e63] bg-transparent hover:bg-[#ff2e63]/5 transition-all duration-300">
<span className="text-xs font-medium tracking-widest uppercase text-white group-hover:text-[#ff2e63] transition-colors">Watch Video</span>
<div className="relative flex items-center justify-center">
<i className="w-3 h-3 text-white fill-current ml-1" data-lucide="play"></i>
</div>
</button>
</div>
</div>

<div className="col-span-4 hidden lg:block"></div>

<div className="col-span-1 hidden lg:flex flex-col items-center justify-center h-full pt-12">
<div className="flex items-baseline gap-2 relative">
<span className="text-3xl font-medium tracking-tight text-white border-b-2 border-white pb-2">01</span>
<span className="text-sm font-medium text-[#ff2e63]">/ 05</span>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
