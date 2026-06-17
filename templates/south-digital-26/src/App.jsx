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
      
<main className="w-full max-w-5xl mx-auto">

<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="text-center md:text-left">
<h1 className="text-white font-heading font-semibold text-3xl md:text-4xl tracking-tight mb-3">Flexible hourly support.</h1>
<p className="text-zinc-500 text-base md:text-lg max-w-lg font-light leading-relaxed">
                    Expert development on your terms. <br className="hidden md:block"/>No retainers, no lock-ins. Just pay for what you use.
                </p>
</div>

<div className="self-center md:self-end bg-zinc-900/50 border border-white/5 p-1 rounded-full flex items-center">
<div className="flex items-center gap-2 px-4 py-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-medium text-white">Accepting New Clients</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 flex flex-col order-1 lg:order-1">
<div className="relative h-full bg-zinc-900/40 border border-white/10 rounded-2xl p-8 md:p-10 overflow-hidden group hover:border-white/20 transition-colors duration-500">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -mt-32 -mr-32"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-10">
<div>
<div className="flex items-center justify-between mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10">
<i className="w-3 h-3 text-indigo-400" data-lucide="clock"></i>
<span className="text-xs font-medium text-indigo-200 uppercase tracking-wide">Pay As You Go</span>
</div>
<span className="text-zinc-500 text-sm font-medium">Standard Rate</span>
</div>
<div className="flex items-baseline gap-3 text-white mb-2">
<span className="text-5xl sm:text-6xl font-heading font-semibold tracking-tighter">$100</span>
<div className="flex flex-col items-start leading-tight">
<span className="text-xl text-zinc-500 font-normal">/ hour</span>
<span className="text-sm text-zinc-600 font-medium">or £75 GBP</span>
</div>
</div>
<p className="text-zinc-400 text-sm font-light mb-8 max-w-sm">
                                Billed monthly based on detailed time-tracking. Strictly for time used.
                            </p>

<button className="w-full sm:w-auto px-6 py-3 bg-white text-black font-semibold text-sm rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                                Start a Project
                                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-8 border-t border-white/5">
<div className="space-y-4">
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-zinc-300">No minimum monthly spend</span>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-zinc-300">No ongoing retainer</span>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-zinc-300">No long-term contracts</span>
</div>
</div>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-zinc-300">Detailed time reporting</span>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-zinc-300">Priority support available</span>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" data-lucide="check"></i>
<span className="text-sm text-zinc-300">Direct developer access</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full order-2 lg:order-2">
<div className="relative h-full group p-6 md:p-8 bg-zinc-900/20 border border-white/10 rounded-2xl flex flex-col hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-white font-heading">Typical Monthly Spend</h3>
<i className="w-5 h-5 text-zinc-600" data-lucide="bar-chart-3"></i>
</div>
<div className="flex-1 space-y-4">

<div className="p-4 rounded-xl border border-white/5 bg-zinc-900/40">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-zinc-300">Small Maintenance</span>
<span className="text-sm font-semibold text-white">~$500<span className="text-zinc-600 text-xs font-normal">/mo</span></span>
</div>
<div className="flex items-center gap-2 mb-3">
<i className="w-3 h-3 text-zinc-500" data-lucide="clock"></i>
<span className="text-xs text-zinc-500">~5 hours</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-600 h-1.5 rounded-full" style={{width: '15%'}}></div>
</div>
</div>

<div className="relative p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/5 shadow-inner shadow-indigo-500/10">
<div className="absolute -top-2.5 right-4 px-2 py-0.5 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Recommended</div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-white">Active Support</span>
<span className="text-sm font-semibold text-white">~$1,500<span className="text-zinc-600 text-xs font-normal">/mo</span></span>
</div>
<div className="flex items-center gap-2 mb-3">
<i className="w-3 h-3 text-indigo-300" data-lucide="clock"></i>
<span className="text-xs text-indigo-300">~15 hours</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-zinc-900/40">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-zinc-300">Growth / Heavy Dev</span>
<span className="text-sm font-semibold text-white">~$4,000<span className="text-zinc-600 text-xs font-normal">/mo</span></span>
</div>
<div className="flex items-center gap-2 mb-3">
<i className="w-3 h-3 text-zinc-500" data-lucide="clock"></i>
<span className="text-xs text-zinc-500">~40+ hours</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-600 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 text-center">
<p className="text-xs text-zinc-500">Estimates based on typical client usage.</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center justify-center lg:justify-between gap-6 px-8 py-5 rounded-xl border border-white/5 bg-zinc-900/10">
<span className="text-xs font-medium text-zinc-600 uppercase tracking-widest">Supported Tech</span>
<div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-1.5">
<span className="text-sm font-bold text-white tracking-tight">React</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm font-bold text-white tracking-tight">Next.js</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm font-bold text-white tracking-tight">Tailwind</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-sm font-bold text-white tracking-tight">Node</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-3 ml-auto">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900 rounded border border-zinc-800">
<i className="w-3 h-3 text-zinc-400" data-lucide="file-text"></i>
<span className="text-[10px] text-zinc-400 font-medium">Monthly Reports</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900 rounded border border-zinc-800">
<i className="w-3 h-3 text-zinc-400" data-lucide="zap"></i>
<span className="text-[10px] text-zinc-400 font-medium">Fast Turnaround</span>
</div>
</div>
</div>
</main>


    </>
  );
}
