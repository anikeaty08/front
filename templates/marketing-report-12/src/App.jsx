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
      

<main className="w-full max-w-5xl bg-white shadow-xl shadow-slate-200/60 border border-slate-200 rounded-2xl mx-auto overflow-hidden relative">

<div className="absolute inset-0 z-0 pattern-grid pointer-events-none"></div>
<div className="relative z-10 p-8 md:p-12">

<header className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-slate-100 pb-6">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md tracking-wider uppercase shadow-sm">Slide 03</span>
<span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">2025 Annual Report</span>
</div>
<h1 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tighter mb-2">
                        Budget Allocation 2025
                    </h1>
<p className="text-base text-slate-500 font-normal tracking-tight max-w-xl">
                        A visual breakdown of marketing capital distribution across digital and offline channels.
                    </p>
</div>
<div className="mt-6 md:mt-0 flex gap-6">
<div className="text-right">
<div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Participants</div>
<div className="text-lg font-semibold text-slate-900 tracking-tight">650+</div>
</div>
<div className="text-right">
<div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">Total Trend</div>
<div className="text-lg font-semibold text-emerald-600 tracking-tight flex items-center justify-end gap-1">
<i className="w-4 h-4" data-lucide="trending-up"></i> +12%
                        </div>
</div>
</div>
</header>

<div className="mb-10">
<div className="flex justify-between items-end mb-3">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Market Share Distribution</span>
<span className="text-xs font-mono text-slate-400">100% Total Volume</span>
</div>
<div className="h-4 w-full flex rounded-full overflow-hidden shadow-inner bg-slate-100">
<div className="h-full bg-slate-800" style={{width: '18%'}} title="Search"></div> 
<div className="h-full bg-blue-600" style={{width: '14%'}} title="LinkedIn"></div> 
<div className="h-full bg-sky-500" style={{width: '10%'}} title="Meta"></div> 
<div className="h-full bg-slate-400" style={{width: '10%'}} title="Programmatic"></div> 
<div className="h-full bg-red-500" style={{width: '9%'}} title="YouTube"></div> 
<div className="h-full bg-purple-500" style={{width: '9%'}} title="Events"></div> 
<div className="h-full bg-slate-300" style={{width: '9%'}} title="Email"></div> 
<div className="h-full bg-slate-200" style={{width: '21%'}}></div> 
</div>
<div className="flex gap-4 mt-2 text-[10px] text-slate-400 font-medium tracking-wide">
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-slate-800"></div>Search</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-600"></div>LinkedIn</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-sky-500"></div>Meta</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-red-500"></div>Video</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-slate-300 group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</div>
<span className="text-xs font-bold text-slate-300">#01</span>
</div>
<div className="mb-1">
<span className="text-3xl font-bold text-slate-900 tracking-tighter">18%</span>
</div>
<div className="text-xs font-semibold text-slate-700 mb-2">Paid Search</div>
<div className="text-[10px] text-slate-500 leading-snug">Intent-driven targeting continues to dominate ROI.</div>
</div>

<div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-200 group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</div>
<span className="text-xs font-bold text-slate-300">#02</span>
</div>
<div className="mb-1">
<span className="text-3xl font-bold text-slate-900 tracking-tighter">14%</span>
</div>
<div className="text-xs font-semibold text-slate-700 mb-2">LinkedIn Ads</div>
<div className="text-[10px] text-slate-500 leading-snug">Primary channel for B2B account-level engagement.</div>
</div>

<div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-sky-200 group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="facebook"></i>
</div>
<span className="text-xs font-bold text-slate-300">#03</span>
</div>
<div className="mb-1">
<span className="text-3xl font-bold text-slate-900 tracking-tighter">10%</span>
</div>
<div className="text-xs font-semibold text-slate-700 mb-2">Meta Ads</div>
<div className="text-[10px] text-slate-500 leading-snug">AI personalization driving efficiency at scale.</div>
</div>

<div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all hover:border-slate-300 group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="monitor"></i>
</div>
<span className="text-xs font-bold text-slate-300">#04</span>
</div>
<div className="mb-1">
<span className="text-3xl font-bold text-slate-900 tracking-tighter">10%</span>
</div>
<div className="text-xs font-semibold text-slate-700 mb-2">Programmatic</div>
<div className="text-[10px] text-slate-500 leading-snug">Automated display reaching specific ABX audiences.</div>
</div>
</div>

<div className="bg-slate-50/50 rounded-xl border border-slate-200/60 p-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">

<div className="space-y-6">

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-red-500" data-lucide="youtube"></i>
<span className="text-xs font-medium text-slate-700">YouTube / Video</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">+65% YoY</span>
<span className="text-xs font-bold text-slate-900">9%</span>
</div>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{width: '9%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-purple-500" data-lucide="ticket"></i>
<span className="text-xs font-medium text-slate-700">Events &amp; Experiential</span>
</div>
<span className="text-xs font-bold text-slate-900">9%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" style={{width: '9%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="mail"></i>
<span className="text-xs font-medium text-slate-700">Email Automation</span>
</div>
<span className="text-xs font-bold text-slate-900">9%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '9%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="tv"></i>
<span className="text-xs font-medium text-slate-700">Connected TV (CTV)</span>
</div>
<span className="text-xs font-bold text-slate-900">8%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '8%'}}></div>
</div>
</div>
</div>

<div className="space-y-6">

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-pink-500" data-lucide="music-2"></i>
<span className="text-xs font-medium text-slate-700">TikTok / Social</span>
</div>
<span className="text-xs font-bold text-slate-900">6%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-500 to-slate-900 rounded-full" style={{width: '6%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-rose-500" data-lucide="image"></i>
<span className="text-xs font-medium text-slate-700">Pinterest</span>
</div>
<span className="text-xs font-bold text-slate-900">4%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '4%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="message-circle"></i>
<span className="text-xs font-medium text-slate-700">Reddit / Quora / Medium</span>
</div>
<span className="text-xs font-bold text-slate-900">3%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '3%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-1.5">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-green-500" data-lucide="mic"></i>
<span className="text-xs font-medium text-slate-700">Spotify / Audio</span>
</div>
<span className="text-xs font-bold text-slate-900">2%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 rounded-full" style={{width: '2%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-slate-900 rounded-xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center justify-between text-white relative overflow-hidden group">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex gap-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/5">
<i className="w-5 h-5 text-yellow-300" data-lucide="lightbulb"></i>
</div>
<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">Strategic Insight</h3>
<p className="text-sm font-light text-slate-200 leading-relaxed max-w-2xl">
                            Marketers are effectively balancing <span className="text-white font-medium">high-tech digital channels</span> with <span className="text-white font-medium">experience-driven formats</span>. Offline channels are no longer silos but critical components of a full-funnel strategy.
                        </p>
</div>
</div>
<div className="relative z-10 hidden md:block border-l border-white/10 pl-6">
<div className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Dominant Strategy</div>
<div className="text-sm font-medium">Hybrid Funnel Integration</div>
</div>
</div>
<footer className="mt-12 flex justify-between items-end border-t border-slate-100 pt-6">
<div className="flex items-center gap-2 opacity-50 grayscale">

<div className="flex gap-0.5">
<div className="w-1.5 h-3 bg-slate-900 rounded-sm"></div>
<div className="w-1.5 h-4 bg-slate-900 rounded-sm"></div>
<div className="w-1.5 h-2 bg-slate-900 rounded-sm"></div>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-slate-900">The Digital Funnel</span>
</div>
<div className="text-[10px] text-slate-300 font-mono tracking-wide">
                    CONFIDENTIAL / INTERNAL USE ONLY
                </div>
</footer>
</div>
</main>


    </>
  );
}
