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
      

<div className="absolute top-8 left-8 sm:top-12 sm:left-12 flex items-center gap-2 text-slate-500 opacity-80">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase">ProLiant</span>
</div>


<div className="relative w-full max-w-[1000px] aspect-[1/1.3] sm:aspect-[2/1.05] mt-12 sm:mt-0 mx-auto group">



<div className="absolute inset-0 pointer-events-none z-0">

<div className="absolute top-0 sm:top-auto sm:left-0 w-[85%] sm:w-[58%] aspect-square rounded-full border border-sky-500/30 shadow-[inset_0_0_40px_rgba(14,165,233,0.05),0_0_30px_rgba(14,165,233,0.1)] venn-bg-left transition-all duration-700 group-has-[.left-content:hover]:border-sky-400/50 group-has-[.left-content:hover]:shadow-[inset_0_0_60px_rgba(14,165,233,0.1),0_0_50px_rgba(14,165,233,0.2)] group-has-[.right-content:hover]:opacity-30 group-has-[.right-content:hover]:scale-[0.98] group-has-[.center-content:hover]:border-sky-400/50 group-has-[.center-content:hover]:opacity-80">
</div>

<div className="absolute bottom-0 sm:bottom-auto sm:right-0 w-[85%] sm:w-[58%] aspect-square rounded-full border border-emerald-500/30 shadow-[inset_0_0_40px_rgba(16,185,129,0.05),0_0_30px_rgba(16,185,129,0.1)] venn-bg-right transition-all duration-700 group-has-[.right-content:hover]:border-emerald-400/50 group-has-[.right-content:hover]:shadow-[inset_0_0_60px_rgba(16,185,129,0.1),0_0_50px_rgba(16,185,129,0.2)] group-has-[.left-content:hover]:opacity-30 group-has-[.left-content:hover]:scale-[0.98] group-has-[.center-content:hover]:border-emerald-400/50 group-has-[.center-content:hover]:opacity-80">
</div>

<div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center mix-blend-screen transition-all duration-700">

<div className="w-[60%] sm:w-[40%] aspect-square rounded-full bg-sky-400/30 blur-[40px] absolute -translate-y-[20%] sm:-translate-y-0 sm:-translate-x-[15%] transition-opacity duration-700 group-has-[.right-content:hover]:opacity-20 group-has-[.center-content:hover]:opacity-100 group-has-[.center-content:hover]:bg-sky-400/40 opacity-70"></div>

<div className="w-[60%] sm:w-[40%] aspect-square rounded-full bg-emerald-400/30 blur-[40px] absolute translate-y-[20%] sm:translate-y-0 sm:translate-x-[15%] transition-opacity duration-700 group-has-[.left-content:hover]:opacity-20 group-has-[.center-content:hover]:opacity-100 group-has-[.center-content:hover]:bg-emerald-400/40 opacity-70"></div>

<div className="w-[40%] sm:w-[30%] aspect-square rounded-full bg-white/10 blur-[30px] absolute z-10 transition-all duration-700 group-has-[.center-content:hover]:bg-white/20 group-has-[.center-content:hover]:scale-125 opacity-100"></div>
</div>
</div>




<div className="left-content absolute top-0 sm:top-auto sm:left-0 w-[85%] sm:w-[58%] aspect-square z-10 flex flex-col justify-center items-center sm:items-start p-8 sm:pl-12 md:pl-20 sm:pr-[28%] text-center sm:text-left transition-opacity duration-500 cursor-default group-has-[.right-content:hover]:opacity-30 group-has-[.center-content:hover]:opacity-30">
<h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white mb-4 sm:mb-6">Nationals</h3>
<div className="space-y-4 sm:space-y-5 w-full max-w-[220px]">
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400/90 mb-2 sm:mb-3 flex items-center justify-center sm:justify-start gap-1.5">
<iconify-icon icon="solar:chart-up-linear" width="14"></iconify-icon>
                        Scale Advantages
                    </h4>
<ul className="space-y-1.5 text-xs text-slate-300 font-medium leading-snug opacity-90">
<li className="flex items-start justify-center sm:justify-start gap-2">
<span className="text-sky-500 mt-0.5">•</span> Massive Dev Budget
                        </li>
<li className="flex items-start justify-center sm:justify-start gap-2">
<span className="text-sky-500 mt-0.5">•</span> World Class Sales &amp; Mktg
                        </li>
</ul>
</div>
<div className="pt-2 sm:pt-4 border-t border-sky-500/10">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 sm:mb-3 flex items-center justify-center sm:justify-start gap-1.5">
<iconify-icon icon="solar:danger-triangle-linear" width="14"></iconify-icon>
                        Limitations
                    </h4>
<ul className="space-y-1.5 text-xs text-slate-400 font-medium leading-snug opacity-80">
<li className="flex items-start justify-center sm:justify-start gap-2">
<span className="text-slate-600 mt-0.5">•</span> Generalists by Nature
                        </li>
<li className="flex items-start justify-center sm:justify-start gap-2">
<span className="text-slate-600 mt-0.5">•</span> Service capped at scale
                        </li>
<li className="flex items-start justify-center sm:justify-start gap-2">
<span className="text-slate-600 mt-0.5">•</span> Beholden to investors
                        </li>
</ul>
</div>
</div>
</div>

<div className="right-content absolute bottom-0 sm:bottom-auto sm:right-0 w-[85%] sm:w-[58%] aspect-square z-10 flex flex-col justify-center items-center sm:items-end p-8 sm:pr-12 md:pr-20 sm:pl-[28%] text-center sm:text-right transition-opacity duration-500 cursor-default group-has-[.left-content:hover]:opacity-30 group-has-[.center-content:hover]:opacity-30">
<h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white mb-4 sm:mb-6">Regionals</h3>
<div className="space-y-4 sm:space-y-5 w-full max-w-[220px]">
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 mb-2 sm:mb-3 flex items-center justify-center sm:justify-end gap-1.5">
                        Service Strengths
                        <iconify-icon className="hidden sm:block" icon="solar:heart-angle-linear" width="14"></iconify-icon>
</h4>
<ul className="space-y-1.5 text-xs text-slate-300 font-medium leading-snug opacity-90">
<li className="flex items-start justify-center sm:justify-end gap-2">
<span className="text-emerald-500 mt-0.5 sm:hidden">•</span> High Service <span className="text-emerald-500 mt-0.5 hidden sm:inline">•</span>
</li>
<li className="flex items-start justify-center sm:justify-end gap-2">
<span className="text-emerald-500 mt-0.5 sm:hidden">•</span> Industry Specialists <span className="text-emerald-500 mt-0.5 hidden sm:inline">•</span>
</li>
</ul>
</div>
<div className="pt-2 sm:pt-4 border-t border-emerald-500/10">
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 sm:mb-3 flex items-center justify-center sm:justify-end gap-1.5">
                        Limitations
                        <iconify-icon className="hidden sm:block" icon="solar:danger-triangle-linear" width="14"></iconify-icon>
</h4>
<ul className="space-y-1.5 text-xs text-slate-400 font-medium leading-snug opacity-80">
<li className="flex items-start justify-center sm:justify-end gap-2">
<span className="text-slate-600 mt-0.5 sm:hidden">•</span> Limited Tech <span className="text-slate-600 mt-0.5 hidden sm:inline">•</span>
</li>
<li className="flex items-start justify-center sm:justify-end gap-2">
<span className="text-slate-600 mt-0.5 sm:hidden">•</span> No Control as Reseller <span className="text-slate-600 mt-0.5 hidden sm:inline">•</span>
</li>
<li className="flex items-start justify-center sm:justify-end gap-2">
<span className="text-slate-600 mt-0.5 sm:hidden">•</span> Gets Acquired <span className="text-slate-600 mt-0.5 hidden sm:inline">•</span>
</li>
</ul>
</div>
</div>
</div>

<div className="center-content absolute inset-0 m-auto w-[80%] max-w-[240px] aspect-square z-20 flex flex-col items-center justify-center text-center cursor-default transition-all duration-700 hover:scale-105 group-has-[.left-content:hover]:opacity-50 group-has-[.left-content:hover]:scale-95 group-has-[.right-content:hover]:opacity-50 group-has-[.right-content:hover]:scale-95">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(3,7,18,0.25)_0%,_transparent_60%)] pointer-events-none -z-10"></div>
<div className="text-white mb-2 sm:mb-3 icon-glow transition-transform duration-500 group-has-[.center-content:hover]:scale-110">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white text-glow mb-2 sm:mb-3">
                ProLiant
            </h2>

<p className="text-[10px] sm:text-xs font-medium uppercase tracking-widest leading-relaxed legibility-shadow text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-emerald-300">
                Proprietary Tech <br className="hidden sm:block"/> <span className="text-slate-400 px-1">+</span> Personal Service
            </p>
</div>
</div>



<div className="mt-8 sm:mt-12 md:mt-16 text-center z-20 flex flex-col items-center">
<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2 drop-shadow-sm">
            Served like a Boutique
        </h1>
<p className="text-sm sm:text-base md:text-lg text-slate-400 font-medium tracking-wide">
            Built like a National
        </p>
</div>

    </>
  );
}
