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
      

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full"></div>
</div>

<nav className="w-full max-w-6xl mx-auto flex justify-between items-center mb-20">
<div className="text-zinc-100 font-semibold tracking-tighter text-lg">ASSET</div>
<div className="hidden md:flex gap-6 text-sm font-light">
<span className="hover:text-white cursor-pointer transition-colors">Product</span>
<span className="hover:text-white cursor-pointer transition-colors">Comparison</span>
<span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
</div>
<button className="bg-zinc-100 text-zinc-950 px-4 py-2 text-xs font-medium rounded-full hover:bg-zinc-200 transition-colors">
            Get Started
        </button>
</nav>

<main className="w-full max-w-6xl mx-auto">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
<span>The modern way to build</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6">
                Stop overpaying <br/>
<span className="text-zinc-500">traditional agencies.</span>
</h1>
<p className="text-lg text-zinc-500 font-light max-w-xl mx-auto tracking-tight">
                Design and deploy premium websites in seconds, not months. Cut costs by 90% without sacrificing quality.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">

<div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-col items-center justify-center">
<div className="bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-2xl">
<div className="bg-zinc-900 border border-zinc-700 rounded-full w-10 h-10 flex items-center justify-center text-zinc-400">
<span className="font-serif italic text-lg">vs</span>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-1 border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-900/60 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
<div className="relative h-full bg-zinc-950/80 rounded-[20px] overflow-hidden flex flex-col">

<div className="p-8 border-b border-zinc-800/50">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2 text-rose-400/80">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Traditional Agency</span>
</div>
</div>
<h3 className="text-2xl text-zinc-200 font-light tracking-tight">Manual &amp; Expensive</h3>
</div>

<div className="flex-1 p-8 flex flex-col gap-6 relative">

<div className="relative h-40 w-full mx-auto max-w-sm">

<div className="absolute top-0 left-4 right-4 h-32 bg-zinc-800 border border-zinc-700 rounded-lg transform rotate-6 opacity-40"></div>

<div className="absolute top-2 left-2 right-2 h-32 bg-zinc-800 border border-zinc-700 rounded-lg transform -rotate-3 opacity-70"></div>

<div className="absolute top-4 inset-x-0 bg-zinc-900 border border-zinc-700 rounded-lg p-4 shadow-xl flex flex-col gap-3">
<div className="flex justify-between items-center border-b border-zinc-800 pb-2">
<div className="h-2 w-16 bg-zinc-700 rounded"></div>
<div className="text-xs text-rose-400 font-medium">PENDING</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500">
<span>Design Phase</span>
<span>$5,000.00</span>
</div>
<div className="flex justify-between text-xs text-zinc-500">
<span>Development</span>
<span>$8,500.00</span>
</div>
<div className="flex justify-between text-xs text-zinc-500">
<span>Retainer (Mo)</span>
<span>$2,000.00</span>
</div>
</div>
<div className="mt-2 pt-2 border-t border-zinc-800 flex justify-between items-center">
<span className="text-xs text-zinc-400 font-medium">Total Due</span>
<span className="text-sm text-zinc-200 font-semibold tracking-tight">$15,500.00</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-zinc-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400">8-12 Weeks</span>
</div>
<div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-zinc-500" icon="solar:wallet-linear"></iconify-icon>
<span className="text-xs text-zinc-400">High Upfront Cost</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl p-1 border border-indigo-500/20 bg-zinc-900/40 ai-glow">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-100 rounded-3xl pointer-events-none"></div>
<div className="relative h-full bg-zinc-950/80 rounded-[20px] overflow-hidden flex flex-col">

<div className="absolute top-6 right-6 z-10">
<div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold tracking-wide">90% Cheaper</span>
</div>
</div>

<div className="p-8 border-b border-indigo-500/10">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2 text-indigo-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">AI Builder</span>
</div>
</div>
<h3 className="text-2xl text-white font-light tracking-tight">Smart &amp; Instant</h3>
</div>

<div className="flex-1 p-8 flex flex-col gap-6 relative">

<div className="relative w-full mx-auto max-w-sm bg-zinc-900 border border-indigo-500/20 rounded-lg p-1 shadow-2xl shadow-indigo-500/10">
<div className="bg-zinc-950 rounded border border-zinc-800 p-4 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-0.5 bg-indigo-500/50 shadow-[0_0_15px_#6366f1] animate-[scan_2s_ease-in-out_infinite]"></div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300">Generating site...</span>
<div className="w-24 h-1 bg-zinc-800 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4 rounded-full"></div>
</div>
</div>
</div>

<div className="space-y-2 opacity-50">
<div className="flex gap-2">
<div className="w-1/3 h-16 bg-zinc-800 rounded"></div>
<div className="w-2/3 space-y-2">
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-2/3 bg-zinc-800 rounded"></div>
<div className="h-8 w-24 bg-zinc-800 rounded mt-2"></div>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-dashed border-zinc-800 flex justify-between items-center">
<span className="text-xs text-zinc-400 font-medium">Monthly Cost</span>
<span className="text-lg text-white font-semibold tracking-tight">$29.00</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-auto">
<div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs text-indigo-200">Launch in Seconds</span>
</div>
<div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-xs text-indigo-200">Unlimited Edits</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">

<div className="absolute right-0 top-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-end justify-between gap-12">
<div className="w-full md:w-1/3">
<h4 className="text-zinc-100 text-lg font-medium tracking-tight mb-2">Cost Efficiency Scale</h4>
<p className="text-zinc-500 text-sm font-light">
                        Visualizing the massive difference in capital efficiency when switching to AI-driven development.
                    </p>
</div>
<div className="flex-1 w-full flex items-end gap-8 h-40 border-b border-zinc-800 pb-px">

<div className="flex-1 flex flex-col justify-end group">
<div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-400 text-center font-mono">$15k+</div>
<div className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-t-sm relative h-32">
<div className="absolute top-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxjaXJjbGUgY3k9IjIiIGN4PSIyIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiLz48L3N2Zz4=')] opacity-20"></div>
</div>
<div className="mt-3 text-center text-xs text-zinc-500 font-medium">Agency</div>
</div>

<div className="flex-1 flex flex-col justify-end group">
<div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-zinc-400 text-center font-mono">$5k</div>
<div className="w-full bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-t-sm h-12"></div>
<div className="mt-3 text-center text-xs text-zinc-500 font-medium">Freelancer</div>
</div>

<div className="flex-1 flex flex-col justify-end group">
<div className="mb-2 text-xs text-indigo-400 text-center font-mono font-semibold">$29</div>
<div className="w-full bg-indigo-500 rounded-t-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] h-1 relative">
<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
<div className="mt-3 text-center text-xs text-indigo-400 font-medium">AI Builder</div>
</div>
</div>
</div>
</div>
</main>

<style>
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
    </style>

    </>
  );
}
