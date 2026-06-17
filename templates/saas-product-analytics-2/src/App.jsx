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
      

<nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-normal tracking-widest text-base flex items-center gap-3" href="#">
<div className="w-4 h-4 rounded-sm bg-white flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-[1px]"></div>
</div>
                    COUNTLY
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Funkce</a>
<a className="hover:text-white transition-colors" href="#">Metodologie</a>
<a className="hover:text-white transition-colors" href="#">Zákazníci</a>
<a className="hover:text-white transition-colors" href="#">Ceník</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 text-xs font-light text-neutral-500 border border-white/10 rounded-md px-2 py-1 bg-white/5">
<iconify-icon height="14" icon="solar:magnifer-linear" width="14"></iconify-icon>
                    Hledat...
                    <span className="flex gap-0.5 ml-2">
<kbd className="kbd-key px-1 text-[10px]">⌘</kbd>
<kbd className="kbd-key px-1 text-[10px]">K</kbd>
</span>
</div>
<a className="hidden md:block text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#">Přihlásit se</a>
<a className="text-xs font-normal bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#">Začít zdarma</a>
</div>
</div>
</nav>
<main className="relative pt-32 pb-24">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none opacity-50"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full z-0 pointer-events-none"></div>

<section className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border-white/10 hover:bg-white/5 transition-colors cursor-pointer group">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
</span>
<span className="text-xs font-light text-neutral-300 tracking-tight">Countly 2.0 je nyní k dispozici</span>
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 transform duration-300" height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-gradient mb-6 max-w-4xl mx-auto leading-[1.05]">
                Analytika pro moderní <br className="hidden md:block"/>produktové týmy
            </h1>
<p className="text-base md:text-lg font-light text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Pochopte cesty uživatelů, sledujte pády aplikací a striktně respektujte soukromí. Kompletní platforma navržená pro absolutní rychlost a plnou kontrolu nad daty.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<a className="w-full sm:w-auto text-sm font-normal bg-white text-black px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#">
                    Začít analyzovat
                    <iconify-icon height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-sm font-normal glass-panel px-6 py-2.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-neutral-400" height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
                    Ukázka platformy
                </a>
</div>

<div className="relative mx-auto max-w-5xl group">

<div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[18px] blur-[2px] opacity-40 group-hover:opacity-70 transition duration-700"></div>
<div className="relative rounded-2xl glass-panel border border-white/10 overflow-hidden bg-[#0A0A0A] shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between bg-white/[0.01]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/5 hover:bg-red-500/80 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/5 hover:bg-yellow-500/80 transition-colors"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-white/5 hover:bg-green-500/80 transition-colors"></div>
</div>
<div className="text-[11px] font-normal text-neutral-500 tracking-tight flex items-center gap-2 bg-white/5 px-4 py-1 rounded-md border border-white/5">
<iconify-icon height="10" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                            app.countly.com
                        </div>
<div className="w-10"></div> 
</div>

<div className="flex h-[450px]">

<div className="hidden md:flex flex-col w-56 border-r border-white/5 bg-black/20 p-3">
<div className="flex items-center gap-2 px-2 py-1.5 mb-4 rounded-md hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-5 h-5 rounded-sm bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center text-[10px] text-white border border-white/10">A</div>
<span className="text-sm font-normal text-neutral-300">Acme Corp</span>
<iconify-icon className="text-neutral-500 ml-auto" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
<div className="text-[10px] font-medium text-neutral-600 uppercase tracking-widest px-2 mb-2">Analytika</div>
<div className="flex items-center gap-3 text-sm font-normal text-white bg-white/5 px-2 py-1.5 rounded-md border border-white/5 shadow-sm">
<iconify-icon className="text-white" height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
                                Přehledy
                            </div>
<div className="flex items-center gap-3 text-sm font-light text-neutral-400 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors">
<iconify-icon height="16" icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
                                Uživatelé
                            </div>
<div className="flex items-center gap-3 text-sm font-light text-neutral-400 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors">
<iconify-icon height="16" icon="solar:route-linear" width="16"></iconify-icon>
                                Trychtýře
                            </div>
<div className="text-[10px] font-medium text-neutral-600 uppercase tracking-widest px-2 mt-6 mb-2">Vývoj</div>
<div className="flex items-center justify-between text-sm font-light text-neutral-400 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors group">
<div className="flex items-center gap-3">
<iconify-icon height="16" icon="solar:bug-linear" width="16"></iconify-icon>
                                    Chyby a pády
                                </div>
<span className="text-[10px] bg-red-500/10 text-red-400 px-1.5 rounded border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity">3 nové</span>
</div>
<div className="flex items-center gap-3 text-sm font-light text-neutral-400 hover:text-white hover:bg-white/5 px-2 py-1.5 rounded-md transition-colors">
<iconify-icon height="16" icon="solar:server-linear" width="16"></iconify-icon>
                                Výkon
                            </div>
</div>

<div className="flex-1 p-6 md:p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-normal text-white tracking-tight">Aktivní uživatelé</h3>
<p className="text-xs font-light text-neutral-500 mt-1">Posledních 30 dní v porovnání s předchozím obdobím</p>
</div>
<div className="flex items-center gap-3">
<div className="flex border border-white/10 rounded-md overflow-hidden text-xs font-light bg-black">
<button className="px-3 py-1.5 bg-white/10 text-white">30D</button>
<button className="px-3 py-1.5 text-neutral-400 hover:text-white transition-colors border-l border-white/5">90D</button>
<button className="px-3 py-1.5 text-neutral-400 hover:text-white transition-colors border-l border-white/5">1R</button>
</div>
<button className="flex items-center justify-center w-7 h-7 rounded-md border border-white/10 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
<iconify-icon height="16" icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 w-full flex items-end justify-between gap-1.5 md:gap-3 mb-4 relative mt-auto">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none border-t border-b border-white/5 py-2">
<div className="w-full border-t border-white/5 border-dashed"></div>
<div className="w-full border-t border-white/5 border-dashed"></div>
<div className="w-full border-t border-white/5 border-dashed"></div>
</div>

<div className="w-full bg-white/5 hover:bg-white/20 transition-colors h-[25%] rounded-t-[2px] relative group z-10"></div>
<div className="w-full bg-white/5 hover:bg-white/20 transition-colors h-[40%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors h-[35%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/5 hover:bg-white/20 transition-colors h-[50%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/20 hover:bg-white/30 transition-colors h-[75%] rounded-t-[2px] border-t border-white/40 relative group cursor-crosshair z-10">
<div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-transparent to-white/10"></div>
</div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors h-[60%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/5 hover:bg-white/20 transition-colors h-[45%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors h-[55%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/40 hover:bg-white/50 transition-colors h-[90%] rounded-t-[2px] border-t border-white shadow-[0_0_15px_rgba(255,255,255,0.15)] relative group z-10">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 text-white whitespace-nowrap z-20">2,408 uživatelů</div>
</div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors h-[65%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/5 hover:bg-white/20 transition-colors h-[35%] rounded-t-[2px] z-10"></div>
<div className="w-full bg-white/10 hover:bg-white/20 transition-colors h-[70%] rounded-t-[2px] z-10"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 font-medium tracking-wide">
<span>1. Lis</span>
<span>8. Lis</span>
<span>15. Lis</span>
<span>22. Lis</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-40">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-4">Postaveno pro růst.<br className="hidden md:block"/> S důrazem na soukromí.</h2>
<p className="text-sm font-light text-neutral-400 max-w-xl mx-auto">Countly se bezchy</p></div></section></main>
    </>
  );
}
