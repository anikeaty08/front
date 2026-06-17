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



        lucide.createIcons();
    
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
      

<div className="relative min-h-screen w-full flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Drone Background" className="w-full h-full object-cover opacity-40 scale-105" src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-950/80 to-purple-900/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
</div>

<nav className="relative z-20 w-full px-6 py-6 md:px-12 flex justify-between items-center">

<div className="flex flex-col items-center group cursor-pointer">
<div className="text-orange-500 mb-1 transition-transform group-hover:scale-110 duration-300">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32">
<path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10 10 10 10 0 0 0-10-10"></path>
<path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
<path d="M12 2v10"></path>
<path d="M12 12l4.3-4.3"></path>
</svg>
</div>
<span className="text-xs font-bold tracking-widest uppercase text-white">Dronetic</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200" href="#">Kdo jsme?</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200" href="#">Naše služby</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200" href="#">Jak to funguje?</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200" href="#">Reference</a>
</div>

<button className="hidden md:flex items-center gap-2 bg-black hover:bg-slate-900 text-white text-xs font-medium px-5 py-2.5 rounded-full border border-slate-800 transition-all duration-200 shadow-lg shadow-black/20 group">
<i className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" data-lucide="phone"></i>
<span>Kontaktujte nás</span>
</button>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<main className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 md:py-20 max-w-7xl mx-auto w-full">
<div className="max-w-4xl">

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-none tracking-tight md:tracking-tighter drop-shadow-2xl">
                    Bezpečné inspekce ze vzduchu. Bez odstávek, <br className="hidden lg:block"/>rizika a zbytečných nákladů.
                </h1>

<p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl font-light">
                    Zajistíme inspekci tam, kam by člověk musel s plošinou, žebříkem nebo vypnutou technologií. Šetříme čas, riziko i náklady.
                </p>

<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<button className="flex items-center gap-3 bg-black hover:bg-slate-900 text-white text-base font-medium px-8 py-4 rounded-full border border-slate-800 transition-all duration-300 shadow-xl shadow-black/30 group">
<i className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" data-lucide="phone"></i>
<span>Kontaktujte nás</span>
</button>
<button className="flex items-center gap-3 text-slate-300 hover:text-white text-base font-medium group transition-colors px-2 py-2">
<span>Jak to funguje?</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="play-circle"></i>
</button>
</div>
</div>

<div className="mt-20 md:mt-32 w-full border-t border-white/5 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
<div className="max-w-sm">
<p className="text-sm font-normal text-slate-400">
                        Jsme profíci a máme na to i certifikace :)
                    </p>
</div>
<div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-2 group cursor-default">
<div className="border border-slate-600 group-hover:border-slate-400 transition-colors rounded px-2 py-1 flex items-center">
<svg className="text-slate-400 group-hover:text-slate-200 transition-colors mr-2" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M3 12h18M3 6h18M3 18h18"></path>
</svg>
<span className="text-xs font-bold tracking-tighter text-slate-400 group-hover:text-slate-200 transition-colors leading-none block">
                                ATD<br/>CR
                            </span>
</div>
</div>

<div className="flex items-center gap-3 group cursor-default">
<div className="bg-red-800 group-hover:bg-red-700 transition-colors w-8 h-8 flex items-center justify-center rounded-sm text-white font-bold text-xs">
                            ctg
                        </div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition-colors">Centrum</span>
<span className="text-xs font-semibold uppercase text-slate-300 group-hover:text-slate-100 transition-colors tracking-wide">Termografie</span>
</div>
</div>

<div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-900/10 hover:bg-blue-900/20 hover:border-blue-500/50 transition-all cursor-default">
<svg className="text-blue-500/70 hover:text-blue-400 transition-colors" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
