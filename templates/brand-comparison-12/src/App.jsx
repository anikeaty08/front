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
      
<div className="noise-bg"></div>

<header className="absolute top-8 left-8 z-40">
<div className="flex items-center gap-3 text-slate-500 text-sm font-medium tracking-widest uppercase">
<iconify-icon className="text-lg opacity-70" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>PROLIANT</span>
</div>
</header>
<main className="w-full px-4 md:px-8 py-20 flex flex-col items-center justify-center flex-1 z-10 mt-12 md:mt-0">

<div className="venn-container">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute w-[85%] h-[85%] bg-purple-200/40 rounded-[100%] blur-[120px]"></div>

<div className="absolute w-[65%] h-[65%] bg-orange-100/60 rounded-[100%] blur-[90px] -translate-x-12 -translate-y-8"></div>

<div className="absolute w-[50%] h-[50%] bg-pink-200/50 rounded-[100%] blur-[70px] translate-x-12 translate-y-8"></div>
</div>

<div className="absolute w-[85%] md:w-[55%] aspect-square rounded-full border border-white shadow-[0_8px_40px_rgba(0,0,0,0.02)] right-1/2 translate-x-[35%] md:translate-x-[25%] flex flex-col justify-center transition-all duration-700 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] bg-white/40 backdrop-blur-md z-10">
<div className="w-full max-w-[280px] ml-12 md:ml-20 lg:ml-28">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-800 mb-10">Nationals</h2>
<div className="mb-8 relative">
<div className="flex items-center gap-2 mb-5">
<span className="text-xs text-pink-500 uppercase tracking-widest font-medium">SCALE ADVANTAGES</span>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-slate-600 leading-relaxed">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></span>
                                Massive Dev Budget
                            </li>
<li className="flex items-center gap-3 text-base text-slate-600 leading-relaxed">
<span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></span>
                                World Class Sales &amp; Mktg
                            </li>
</ul>
</div>
<div className="relative">
<div className="flex items-center gap-2 mb-5">
<iconify-icon className="text-base text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">LIMITATIONS</span>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-slate-500 leading-relaxed">
<span className="w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0"></span>
                                Generalists by Nature
                            </li>
<li className="flex items-center gap-3 text-base text-slate-500 leading-relaxed">
<span className="w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0"></span>
                                Service capped at scale
                            </li>
<li className="flex items-center gap-3 text-base text-slate-500 leading-relaxed">
<span className="w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0"></span>
                                Beholden to investors
                            </li>
</ul>
</div>
</div>
</div>

<div className="absolute w-[85%] md:w-[55%] aspect-square rounded-full border border-white shadow-[0_8px_40px_rgba(0,0,0,0.02)] left-1/2 -translate-x-[35%] md:-translate-x-[25%] flex flex-col justify-center items-end transition-all duration-700 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] bg-white/40 backdrop-blur-md z-10">
<div className="w-full max-w-[280px] mr-12 md:mr-20 lg:mr-28 text-right">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-800 mb-10">Regionals</h2>
<div className="mb-8 relative">
<div className="flex items-center justify-end gap-2 mb-5">
<span className="text-xs text-orange-400 uppercase tracking-widest font-medium">SERVICE STRENGTHS</span>
<iconify-icon className="text-base text-orange-400" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-end gap-3 text-base text-slate-600 leading-relaxed">
                                High Service
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-300 shrink-0"></span>
</li>
<li className="flex items-center justify-end gap-3 text-base text-slate-600 leading-relaxed">
                                Industry Specialists
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-300 shrink-0"></span>
</li>
</ul>
</div>
<div className="relative">
<div className="flex items-center justify-end gap-2 mb-5">
<span className="text-xs text-slate-400 uppercase tracking-widest font-medium">LIMITATIONS</span>
<iconify-icon className="text-base text-slate-400" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-end gap-3 text-base text-slate-500 leading-relaxed">
                                Limited Tech
                                <span className="w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0"></span>
</li>
<li className="flex items-center justify-end gap-3 text-base text-slate-500 leading-relaxed">
                                No Control as Reseller
                                <span className="w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0"></span>
</li>
<li className="flex items-center justify-end gap-3 text-base text-slate-500 leading-relaxed">
                                Gets Acquired
                                <span className="w-[3px] h-[3px] rounded-full bg-slate-300 shrink-0"></span>
</li>
</ul>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none">
<div className="flex flex-col items-center p-8">
<iconify-icon className="text-4xl text-slate-800 mb-4 opacity-90" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-800 mb-5">ProLiant</h1>
<div className="flex flex-col items-center gap-1.5 text-xs text-slate-500 uppercase tracking-widest font-medium text-center">
<span>PROPRIETARY TECH</span>
<div className="flex items-center gap-2">
<span className="text-slate-300">+</span>
<span>PERSONAL SERVICE</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 md:mt-12 text-center z-20 flex flex-col items-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-800 mb-3">Served like a Boutique</h2>
<p className="text-lg md:text-xl text-slate-500 font-normal tracking-wide">Built like a National</p>
</div>
</main>

<div className="fixed bottom-6 right-6 z-40">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 border border-black/[0.03] shadow-sm text-xs text-slate-500 font-medium tracking-wide backdrop-blur-md hover:bg-white/80 transition-colors cursor-default">
<span className="text-slate-300 font-serif italic text-sm leading-none">A</span>
            Made in Aura
        </div>
</div>

    </>
  );
}
