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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Background Texture" className="w-full h-full object-cover opacity-40 grayscale-[20%]" src="https://i.hizliresim.com/1vbylbt.jpg"/>
<div className="absolute inset-0 bg-neutral-950/70 bg-overlay"></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-2 py-2 flex items-center justify-between gap-12 min-w-[300px] md:min-w-[500px] transition-all duration-500">

<div className="hidden md:flex items-center gap-6 pl-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Koleksiyon</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Hikaye</a>
</div>

<a className="text-lg font-medium tracking-[0.2em] text-white px-4 uppercase select-none" href="#">
            Aura
        </a>

<div className="flex items-center gap-4 pr-2">

<button className="md:hidden text-neutral-300 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-4">
<button className="text-neutral-300 hover:text-white transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative text-neutral-300 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full"></span>
</button>
</div>

<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors hidden md:block">
                Satın Al
            </button>
</div>
</nav>

<main className="relative z-10 w-full flex-grow flex flex-col items-center justify-center pt-24 pb-12">

<div className="text-center mb-4 md:mb-8 z-20">
<h2 className="text-[10px] font-semibold tracking-[0.3em] text-neutral-500 uppercase mb-3">Signature Series</h2>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-white/90">
                L'Obscur
            </h1>
</div>

<div className="relative w-full max-w-sm md:max-w-3xl flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-white/5 rounded-full blur-[90px] pointer-events-none"></div>


<img alt="Aura Perfume Bottle" className="relative z-20 h-[45vh] md:h-[60vh] object-contain product-shadow hover:scale-105 transition-transform duration-700 ease-out" src="https://i.hizliresim.com/jy9jzus.jpg"/>

<div className="absolute -bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 w-max">
<div className="glass-nav rounded-2xl px-6 py-4 flex flex-col items-center text-center backdrop-blur-xl border border-white/10 shadow-2xl">
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Yeni Sezon</span>
</div>
<span className="text-sm md:text-base font-medium text-white mb-0.5">Noir Élixir</span>
<span className="text-[10px] text-neutral-500 tracking-wide">Amber, Deri, Bergamot</span>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-3"></div>
<div className="flex items-center gap-6">
<span className="text-sm text-white font-medium">₺5.450</span>
<button className="group flex items-center gap-2 text-[10px] font-semibold bg-white text-black px-4 py-2 rounded-lg hover:bg-neutral-200 transition-all">
                            Sepete Ekle
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<div className="relative z-20 w-full flex justify-center pb-8 pt-12 md:pt-0">
<div className="animate-bounce flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<span className="text-[9px] tracking-[0.2em] uppercase text-neutral-500 font-medium">Keşfet</span>
<iconify-icon className="text-white" icon="solar:mouse-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

    </>
  );
}
