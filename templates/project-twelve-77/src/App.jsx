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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-medium tracking-tight text-white">
                Project <span className="text-red-500">Twelve</span>
</div>
<button className="text-neutral-400 hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="relative z-10 pt-24 px-6 max-w-md mx-auto">

<div className="bg-neutral-900/50 p-1.5 rounded-full flex items-center justify-between border border-white/5 mb-12 relative backdrop-blur-md">
<button className="flex-1 py-2.5 px-4 rounded-full bg-red-600 text-white text-sm font-medium shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] transition-all">
                Included
            </button>
<button className="flex-1 py-2.5 px-4 rounded-full text-neutral-500 text-sm font-medium flex items-center justify-center gap-2 hover:text-neutral-300 transition-colors group">
                Pro
                <i className="w-3 h-3 text-neutral-600 group-hover:text-neutral-500" data-lucide="lock"></i>
</button>
<button className="flex-1 py-2.5 px-4 rounded-full text-neutral-500 text-sm font-medium flex items-center justify-center gap-2 hover:text-neutral-300 transition-colors group">
                Mastery
                <i className="w-3 h-3 text-neutral-600 group-hover:text-neutral-500" data-lucide="lock"></i>
</button>
</div>

<div className="space-y-6 mb-16">
<div className="space-y-2">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase">Framework in Focus</p>
<h1 className="text-4xl font-semibold tracking-tight text-white leading-[1.1]">
                    The Upgrade <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Anything Process</span>
</h1>
</div>
<div className="space-y-6">
<p className="text-xs font-medium tracking-widest text-neutral-600 uppercase mb-4">Executive Summary</p>
<ul className="space-y-5">
<li className="flex items-start gap-4 group">
<div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
<p className="text-lg leading-relaxed text-neutral-300 group-hover:text-white transition-colors">
                            Learn how the Upgrade Process simplifies improvement.
                        </p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-red-500 flex-shrink-0 transition-colors duration-300"></div>
<p className="text-lg leading-relaxed text-neutral-300 group-hover:text-white transition-colors">
                            Understand the forces shaping your current patterns.
                        </p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-red-500 flex-shrink-0 transition-colors duration-300"></div>
<p className="text-lg leading-relaxed text-neutral-300 group-hover:text-white transition-colors">
                            Discover how small changes create compounding effects.
                        </p>
</li>
</ul>
<button className="group flex items-center gap-2 text-red-500 text-base font-medium hover:text-red-400 transition-colors pt-2">
                    Show More
                    <i className="w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<div className="relative w-full group">

<div className="absolute -inset-1 bg-red-600/40 blur-[40px] opacity-40 rounded-[2.5rem] group-hover:opacity-60 transition-opacity duration-700"></div>

<div className="relative bg-[#0A0A0A] border border-red-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] ring-1 ring-white/5 hover:border-red-500/50 transition-colors duration-500">

<div className="p-8 pb-12 relative min-h-[220px] flex flex-col justify-center">

<div className="absolute top-0 right-0 p-8 opacity-20">
<i className="w-24 h-24 text-red-500/30 stroke-1 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]" data-lucide="activity"></i>
</div>
<div className="flex items-center gap-4 mb-2">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 text-sm font-medium border border-neutral-700 group-hover:bg-red-900/30 group-hover:text-red-400 group-hover:border-red-900/50 transition-all duration-500 shadow-[0_0_15px_rgba(220,38,38,0.1)]">1</span>
<span className="text-xs font-medium tracking-widest text-neutral-500 uppercase">Current Step</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mt-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Baseline</h2>
</div>

<div className="grid grid-cols-2 divide-x divide-neutral-800 border-t border-neutral-800 bg-neutral-900/30">
<button className="flex items-center justify-center py-4 hover:bg-white/5 transition-colors group/btn">
<i className="w-5 h-5 text-neutral-500 group-hover/btn:text-white transition-colors" data-lucide="info"></i>
</button>
<button className="flex items-center justify-center py-4 hover:bg-red-600/10 transition-colors group/btn relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
<i className="w-5 h-5 text-red-500 fill-red-500/20 group-hover/btn:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(220,38,38,0.8)]" data-lucide="play"></i>
</button>
</div>
</div>

<button className="absolute -right-4 top-1/2 -translate-y-1/2 translate-x-full p-2 text-neutral-600 hover:text-white transition-colors hidden md:block">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</button>
</div>
</main>

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
<div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-1.5 shadow-2xl flex items-center gap-1">
<a className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-red-500 bg-red-500/10 transition-all shadow-[0_0_15px_-5px_rgba(220,38,38,0.3)]" href="#">
<i className="w-5 h-5" data-lucide="layers"></i>
<span className="text-[10px] font-medium">Reality</span>
</a>
<a className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-neutral-500 hover:text-neutral-200 hover:bg-white/5 transition-all" href="#">
<i className="w-5 h-5" data-lucide="disc"></i>
<span className="text-[10px] font-medium">Diagnose</span>
</a>
<a className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-neutral-500 hover:text-neutral-200 hover:bg-white/5 transition-all" href="#">
<i className="w-5 h-5" data-lucide="sparkles"></i>
<span className="text-[10px] font-medium">Remedy</span>
</a>
<a className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-neutral-500 hover:text-neutral-200 hover:bg-white/5 transition-all" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
<span className="text-[10px] font-medium">Metrics</span>
</a>
</div>
</nav>


    </>
  );
}
