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
      

<nav className="w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="font-semibold tracking-tighter text-neutral-100 text-lg">NEXUS</div>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-neutral-100 transition-colors" href="#">Features</a>
<a className="hover:text-neutral-100 transition-colors" href="#">Method</a>
<a className="hover:text-neutral-100 transition-colors" href="#">Customers</a>
<a className="ml-2 text-neutral-100 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-white/5" href="#">Sign In</a>
</div>
</div>
</nav>

<main className="flex-grow flex items-center justify-center p-6 py-12 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl aspect-auto md:aspect-square">

<div className="group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase tracking-wider font-semibold mb-6">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                        v2.4 Released
                    </div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-100 tracking-tight leading-[1.1] mb-4">
                        Build faster, <br/>
<span className="text-neutral-500">break nothing.</span>
</h1>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-xs">
                        The rigorous standard for high-velocity engineering teams. Automate your workflow instantly.
                    </p>
</div>
<div className="relative z-10 mt-8 flex flex-col sm:flex-row gap-3">
<button className="bg-neutral-100 text-neutral-950 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                        Start Building
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-transparent text-neutral-300 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                        Read the docs
                        <span className="text-neutral-600 text-xs">⌘K</span>
</button>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute top-0 right-0 p-32 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 z-10">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800 border border-white/5 text-neutral-300">
<i className="w-5 h-5" data-lucide="sliders"></i>
</div>
<span className="text-sm font-medium text-neutral-200 tracking-tight">Configuration</span>
</div>
<div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>

<div className="space-y-6 relative z-10 mt-auto">

<div className="flex items-center justify-between group/item">
<div className="flex flex-col">
<span className="text-sm text-neutral-200 font-medium">Auto-Scale</span>
<span className="text-xs text-neutral-500">Dynamically adjust resources</span>
</div>

<div className="w-11 h-6 bg-emerald-500/20 border border-emerald-500/30 rounded-full relative cursor-pointer transition-colors">
<div className="absolute top-1 right-1 w-4 h-4 bg-emerald-400 rounded-full shadow-sm"></div>
</div>
</div>
<div className="h-px w-full bg-white/5"></div>

<div className="space-y-3">
<div className="flex justify-between text-xs font-medium">
<span className="text-neutral-200">Memory Allocation</span>
<span className="text-emerald-400 font-mono">16GB</span>
</div>

<div className="w-full h-1.5 bg-neutral-800 rounded-full relative cursor-pointer group/slider">
<div className="absolute left-0 top-0 h-full w-[65%] bg-neutral-100 rounded-full"></div>
<div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] border border-neutral-300 transform transition-transform group-hover/slider:scale-110"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 font-mono pt-1">
<span>2GB</span>
<span>32GB</span>
</div>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 flex flex-col justify-between overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent opacity-50"></div>
<div className="flex items-start justify-between z-10">
<div>
<h3 className="text-sm font-medium text-neutral-200">Latency</h3>
<p className="text-xs text-neutral-500 mt-1">Global edge response</p>
</div>
<div className="flex items-center gap-1 text-emerald-400 text-xs font-mono bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
<i className="w-3 h-3" data-lucide="arrow-down"></i>
                        12ms
                    </div>
</div>

<div className="relative h-32 w-full mt-6 flex items-end gap-1">

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#fb923c" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#fb923c" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C20,75 40,90 60,60 C80,30 100,50 120,40 C140,30 160,20 180,35 C200,50 220,40 240,20 C260,10 280,25 300,15 L300,100 L0,100 Z" fill="url(#chartGradient)"></path>
<path d="M0,80 C20,75 40,90 60,60 C80,30 100,50 120,40 C140,30 160,20 180,35 C200,50 220,40 240,20 C260,10 280,25 300,15" fill="none" stroke="#fb923c" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 w-full h-full pointer-events-none">
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-dashed border-white/5"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-dashed border-white/5"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-r border-white/5 border-dashed"></div>
<div className="border-b border-dashed border-white/5"></div>
</div>
</div>
</div>

<div className="group relative bg-neutral-900/40 border border-white/10 rounded-3xl p-8 flex flex-col overflow-hidden hover:border-white/20 transition-all duration-500">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-neutral-800/50 rounded-full blur-2xl"></div>
<div className="flex items-center gap-3 mb-6 z-10">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-neutral-400">
<i className="w-4 h-4" data-lucide="shield-check"></i>
</div>
<span className="text-sm font-medium text-neutral-200">Access Control</span>
</div>

<div className="flex flex-col gap-3 z-10 mt-auto">

<div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/30 border border-white/5 hover:bg-neutral-800/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
<span className="text-xs text-neutral-300">John Doe</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-500 uppercase tracking-wide">Admin</span>

<div className="w-4 h-4 bg-purple-500/20 border border-purple-500/50 rounded flex items-center justify-center">
<i className="w-2.5 h-2.5 text-purple-400" data-lucide="check"></i>
</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-neutral-800/30 border border-white/5 hover:bg-neutral-800/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-[10px] text-white font-bold">AS</div>
<span className="text-xs text-neutral-300">Alice Smith</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-neutral-500 uppercase tracking-wide">Viewer</span>

<div className="w-4 h-4 bg-transparent border border-neutral-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full border-t border-white/5 py-8 mt-auto">
<div className="max-w-5xl mx-auto px-6 flex justify-between items-center text-xs text-neutral-600">
<p>© 2024 Nexus Inc.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
