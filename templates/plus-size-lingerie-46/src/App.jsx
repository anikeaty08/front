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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-semibold text-lg tracking-tighter text-slate-900 group-hover:text-rose-900 transition-colors">INTIMO.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Collezioni</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Reggiseni</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Slip &amp; Body</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Guida Taglie</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative p-2 text-slate-500 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-100">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
</button>
<button className="md:hidden p-2 text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-slate-200/30 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 lg:pr-8 animate-fade-in-up">

<div className="flex items-start">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-rose-700 text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        Nuova Collezione
                    </span>
</div>

<div className="space-y-4">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                        L'eleganza che <br/>
<span className="serif italic text-slate-700">abbraccia</span> le forme.
                    </h1>
<p className="text-lg text-slate-500 max-w-md leading-relaxed font-light">
                        Intimo di lusso progettato per curve reali. Supporto senza compromessi e tessuti pregiati per farti sentire sicura, ogni giorno.
                    </p>
</div>

<div className="flex flex-wrap items-center gap-4">
<a className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-lg bg-slate-900 px-8 text-sm font-medium text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#">
<span>Acquista Ora</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-8 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" href="#">
                        Scopri di più
                    </a>
</div>

<div className="pt-4 flex items-center gap-6 border-t border-slate-200/60 mt-4">
<div className="flex -space-x-3">
<img alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<img alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<img alt="User" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center text-rose-500">
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500 mt-0.5">Amato da 10.000+ donne</span>
</div>
</div>
</div>

<div className="relative h-full w-full lg:min-h-[600px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-200 rounded-full opacity-40 animate-[spin_60s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-slate-200 rounded-full opacity-60"></div>

<div className="relative z-10 w-full max-w-md mx-auto">
<div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-slate-100 relative group">
<img alt="Plus size lingerie model" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1628253747716-0c4f5c90fdda?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-between transition-transform duration-300 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-medium">Best Seller</span>
<span className="text-sm font-semibold text-slate-900">Lace Bodysuit Noir</span>
<span className="text-xs text-slate-600 mt-0.5">Taglie: 42 - 60</span>
</div>
<div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-rose-600 transition-colors">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -right-8 top-12 hidden md:flex items-center gap-3 p-3 bg-white rounded-lg shadow-xl border border-slate-100 z-20 animate-[bounce_4s_infinite]">
<div className="p-2 bg-rose-50 rounded-md text-rose-600">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div className="flex flex-col pr-2">
<span className="text-xs font-semibold text-slate-900">Supporto Totale</span>
<span className="text-[10px] text-slate-500">Senza ferretto</span>
</div>
</div>

<div className="absolute -left-6 bottom-32 hidden md:flex items-center gap-3 p-3 bg-white rounded-lg shadow-xl border border-slate-100 z-20">
<div className="p-2 bg-slate-50 rounded-md text-slate-600">
<iconify-icon icon="lucide:ruler" width="20"></iconify-icon>
</div>
<div className="flex flex-col pr-2">
<span className="text-xs font-semibold text-slate-900">Fit Perfetto</span>
<span className="text-[10px] text-slate-500">Tecnologia adattiva</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
<div className="p-3 rounded-full bg-slate-50 text-slate-600 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Spedizione Gratuita</h3>
<p className="text-xs text-slate-500 mt-1">Per ordini superiori a €80</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
<div className="p-3 rounded-full bg-slate-50 text-slate-600 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
<iconify-icon icon="lucide:refresh-cw" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Reso Semplice</h3>
<p className="text-xs text-slate-500 mt-1">Entro 30 giorni</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
<div className="p-3 rounded-full bg-slate-50 text-slate-600 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Pagamenti Sicuri</h3>
<p className="text-xs text-slate-500 mt-1">Protezione al 100%</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-2 group cursor-pointer">
<div className="p-3 rounded-full bg-slate-50 text-slate-600 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Supporto H24</h3>
<p className="text-xs text-slate-500 mt-1">Siamo sempre qui per te</p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
