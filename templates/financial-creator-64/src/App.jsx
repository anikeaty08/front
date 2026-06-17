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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none z-0"></div>

<main className="relative z-10 max-w-3xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-8">

<header className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4 animate-fade-in-up">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full opacity-30 group-hover:opacity-75 blur transition duration-500"></div>
<div className="relative w-20 h-20 rounded-full bg-zinc-900 border border-zinc-700 overflow-hidden flex items-center justify-center">

<span className="text-2xl font-semibold text-zinc-500">JD</span>
</div>
</div>
<div className="flex-1 space-y-2">
<div className="flex flex-col">
<h1 className="text-3xl font-medium text-white tracking-tight">John Doe</h1>
<p className="text-sm font-medium text-emerald-400/90 tracking-wide uppercase mt-1">Value Oriented Capital</p>
</div>
<p className="text-sm text-zinc-500 max-w-md leading-relaxed">
                    Uncovering asymmetric opportunities in global markets. Fundamentals first, charts second.
                </p>
</div>
<a className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-colors text-xs font-semibold tracking-wide" href="#">
<span>Contact</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">

<a className="glass-card card-hover rounded-2xl p-6 md:col-span-2 md:row-span-2 flex flex-col justify-between group overflow-hidden relative" href="#">
<div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="space-y-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<h2 className="group-hover:text-orange-200 transition-colors text-xl font-medium text-white tracking-tight">The Value Letter</h2>
<p className="text-xs text-zinc-500 mt-1">Substack • Weekly</p>
</div>
</div>
<div className="relative z-10">
<p className="text-sm text-zinc-400 line-clamp-2 mb-4 group-hover:text-zinc-300 transition-colors">
                        Deep dive analysis into micro-cap valuation discrepancies and macro-economic headwinds. Join 15k+ subscribers.
                    </p>
<div className="inline-flex items-center gap-2 text-xs font-medium text-orange-400 bg-orange-500/5 px-2 py-1 rounded border border-orange-500/10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                        Latest: "The Semiconductor Reversal"
                    </div>
</div>

<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 blur-[60px] rounded-full group-hover:bg-orange-500/20 transition-all duration-500"></div>
</a>

<a className="glass-card card-hover rounded-2xl p-5 md:col-span-2 flex flex-col justify-between group relative overflow-hidden" href="#">
<div className="flex justify-between items-start">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full border border-zinc-700">@Handle</span>
</div>
<div className="relative z-10 mt-2">
<h3 className="text-base font-medium text-white tracking-tight mb-1">Market Pulse</h3>
<p className="text-xs text-zinc-500">Real-time commentary &amp; charts.</p>
</div>

<div className="absolute right-4 bottom-4 w-16 h-8 opacity-20 grayscale group-hover:grayscale-0 transition-all">
<svg className="w-full h-full stroke-blue-400" fill="none" strokeWidth="2" viewbox="0 0 100 40">
<path d="M0 20 L 20 20 L 30 10 L 40 30 L 60 15 L 80 25 L 100 5"></path>
</svg>
</div>
</a>

<a className="glass-card card-hover rounded-2xl p-5 md:col-span-1 md:row-span-1 flex flex-col justify-between group relative overflow-hidden bg-zinc-900" href="#">
<div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start z-10">
<div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
<iconify-icon icon="lucide:youtube" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-white tracking-tight">Video Essays</h3>
<div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500">
<iconify-icon icon="lucide:play-circle" width="12"></iconify-icon>
<span className="">Educational</span>
</div>
</div>
</a>

<a className="glass-card card-hover rounded-2xl p-5 md:col-span-1 md:row-span-1 flex flex-col justify-between group relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex justify-between items-start z-10">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-white tracking-tight">Infographics</h3>
<div className="flex items-center gap-1.5 mt-1 text-xs text-zinc-500">
<iconify-icon icon="lucide:image" width="12"></iconify-icon>
<span>Visual Data</span>
</div>
</div>
</a>

<div className="glass-card rounded-2xl p-6 md:col-span-4 flex flex-col md:flex-row items-center justify-between gap-6 border-zinc-800">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-400" icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white">Latest Analysis</h3>
<p className="text-xs text-zinc-500 mt-0.5">Updated 4 hours ago</p>
</div>
</div>
<div className="flex-1 w-full md:w-auto bg-black/20 rounded-lg p-3 border border-white/5">
<div className="flex text-xs mb-2 items-center justify-between">
<span className="text-zinc-400">Top Position</span>
<span className="text-emerald-400 font-medium">+12.4%</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<button className="w-full md:w-auto px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold transition-colors flex items-center justify-center gap-2">
<span className="">Read Report</span>
</button>
</div>
</div>

<footer className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<span className="text-xs text-zinc-600">© 2024 John Doe Capital. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:mail" width="16"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:share-2" width="16"></iconify-icon>
</a>
</div>
</footer>
</main>

    </>
  );
}
