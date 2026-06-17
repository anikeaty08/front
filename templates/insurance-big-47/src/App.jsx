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
      

<div className="fixed inset-0 pointer-events-none z-0 bg-[#020617]"></div>
<div className="fixed inset-0 stars pointer-events-none z-0"></div>
<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-900 rounded-full blur-[140px] opacity-[0.08] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[140px] opacity-[0.08] pointer-events-none z-0"></div>

<main className="z-10 flex flex-col text-slate-50 w-full max-w-[26rem] mr-auto ml-auto pt-[8.5rem] relative">

<header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[26rem] z-40 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">

<div className="relative z-20 px-6 pt-2 pb-2 flex justify-between items-center text-slate-400">
<span className="text-[0.7rem] font-medium tracking-tight font-mono opacity-80">09:41</span>
<div className="flex items-center gap-1.5 opacity-80">
<svg className="lucide lucide-signal w-3.5 h-3.5 stroke-[1.5]" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3.5 h-3.5 stroke-[1.5]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-3.5 h-3.5 stroke-[1.5]" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex mb-3 pr-6 pl-6 items-center justify-between">
<div className="flex flex-col">
<h3 className="text-[1.35rem] font-medium text-white tracking-tight font-serif italic">Your Coverage</h3>
</div>
<div className="flex gap-2">
<button className="flex hover:bg-white/[0.08] transition-colors text-slate-400 hover:text-white bg-white/[0.03] w-10 h-10 border-white/[0.06] border rounded-xl relative items-center justify-center group">
<svg className="lucide lucide-bell w-[1.1rem] h-[1.1rem] stroke-[1.5] transition-transform group-active:scale-95" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="w-1.5 h-1.5 bg-indigo-400 rounded-full absolute top-3 right-3 shadow-[0_0_8px_#FB923C]"></span>
</button>
<button className="flex hover:bg-white/[0.08] transition-colors text-slate-400 hover:text-white bg-white/[0.03] w-10 h-10 border-white/[0.06] border rounded-xl items-center justify-center group">
<svg className="lucide lucide-user w-[1.1rem] h-[1.1rem] stroke-[1.5] transition-transform group-active:scale-95" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</div>

<div className="px-6 flex gap-1 pb-4 overflow-x-auto no-scrollbar mask-linear-fade">
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#overview">Overview</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#estimator">Estimator</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#coverage">Details</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#medications">Meds</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.2)] bg-emerald-500/[0.1] text-emerald-300 border border-emerald-500/[0.2] whitespace-nowrap" href="#documents">Docs</a>
</div>
</header>


<section className="px-6 mb-8 animate-enter" id="estimator" style={{animationDelay: '0.35s'}}>
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 blur-[8px] rounded-full"></div>
<svg className="lucide lucide-calculator w-4 h-4 text-emerald-400 relative z-10" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<h3 className="text-[0.95rem] font-serif text-white tracking-wide italic font-medium">Journey Estimator</h3>
</div>
</div>
<div className="glass-panel rounded-[24px] overflow-hidden relative border border-white/10">

<div className="flex justify-between items-center p-3 border-b border-white/5 bg-white/[0.01]">
<div className="flex gap-2 overflow-x-auto no-scrollbar mask-linear-fade">
<button className="shrink-0 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-100 text-[0.7rem] font-medium shadow-[0_0_10px_rgba(16,185,129,0.1)] relative group flex items-center gap-2">
<span>Test Plan 1</span>
</button>
<button className="shrink-0 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 text-[0.7rem] font-medium hover:bg-white/[0.06] hover:text-slate-200 transition-all">
                            Test Plan 2
                        </button>
<button className="shrink-0 w-8 h-8 rounded-full border border-dashed border-white/20 text-slate-400 flex items-center justify-center hover:bg-white/5 hover:border-white/40 transition-all">
<svg className="lucide lucide-plus w-3 h-3 stroke-[3]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="flex gap-1 shrink-0 border-white/5 border-l ml-2 pl-2 gap-x-1 gap-y-1 items-center">
<button className="group hover:bg-white/5 hover:text-slate-200 transition-colors text-slate-500 rounded-lg pt-2 pr-2 pb-2 pl-2 relative" title="Download as PDF">
<svg className="lucide lucide-download transition-transform group-hover:-rotate-180 group-hover:opacity-100 opacity-70 w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="download" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(226, 232, 240)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="group hover:bg-white/5 hover:text-slate-200 transition-colors text-slate-500 rounded-lg pt-2 pr-2 pb-2 pl-2 relative" title="Reset Simulation">
<svg className="lucide lucide-rotate-ccw transition-transform group-hover:-rotate-180 group-hover:opacity-100 opacity-70 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(226, 232, 240)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</button>
</div>
</div>

<div className="px-5 pt-6 pb-6 relative z-10 bg-gradient-to-b from-[#0F172A] to-[#020617] border-b border-white/10">

<div className="flex justify-between items-end mb-6">
<div className="">
<span className="text-[0.65rem] text-slate-400 uppercase tracking-widest font-semibold block mb-1">You Pay (Estimated)</span>
<div className="text-[2rem] font-mono text-white leading-none tracking-tight font-medium">$4,650</div>
</div>
<div className="text-right flex flex-col items-end">
<div className="mb-1">
<span className="text-[0.6rem] text-emerald-500/80 uppercase tracking-wide">Insurance Pays</span>
<span className="text-[0.9rem] font-mono text-emerald-400 ml-1 font-medium">$24,100</span>
</div>
<div className="pt-1 border-t border-white/10">
<span className="text-[0.6rem] text-slate-500 uppercase tracking-wide">Total Care Cost</span>
<span className="text-[0.8rem] font-mono text-slate-300 ml-1">$28,750</span>
</div>
</div>
</div>
</div>

<div className="bg-black/20 h-[380px] overflow-y-auto no-scrollbar scroll-smooth">

<div className="sticky top-0 z-10 px-5 py-2.5 border-b border-white/[0.06] bg-[#0F172A]/95 backdrop-blur-sm">
<h4 className="text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest">Diagnostics &amp; Testing</h4>
</div>
<div className="divide-y divide-white/[0.04]">

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Initial Consultation</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered (Copay)
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $20</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $350</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Hormone Blood Work</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered (Ded. Met)
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $0</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $250</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Transvaginal Ultrasound</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $45</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $400</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Semen Analysis</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $15</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $150</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Infectious Disease Panel</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $0</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $600</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Genetic Carrier Screen</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                        PA Required
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $150</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $1,200</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Ovarian Reserve (AMH)</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $40</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $180</span>
</div>
</label>
</div>

<div className="sticky top-0 z-10 px-5 py-2.5 border-y border-white/[0.06] bg-[#0F172A]/95 backdrop-blur-sm mt-1">
<h4 className="text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest">Treatments</h4>
</div>
<div className="divide-y divide-white/[0.04]">

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group bg-emerald-500/[0.02]">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">IVF Cycle (Standard)</span>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Covered</span>
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20" title="Prior Authorization Required">
                                            PA Required
                                        </span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $1,200</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $14,000</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div className="">
<span className="text-[0.8rem] row-title font-medium block transition-colors">Mini-IVF Cycle</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $800</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $7,000</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">IUI Cycle</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $150</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $800</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Egg Freezing (Social)</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                        Excluded
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $7,500</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $0</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Fertility Preservation</span>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">Oncofertility</span>
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">PA Required</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $500</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $9,000</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Frozen Embryo Transfer</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $200</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $3,000</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">PGT-A (Genetics)</span>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Covered</span>
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">PA Required</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $500</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $4,500</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">PGT-M Testing</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                        Excluded
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $4,500</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $0</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Embryo Cryopreservation</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered (1 Year)
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $0</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $600</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">PRP Therapy</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                        Excluded (Experimental)
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $1,200</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $0</span>
</div>
</label>
</div>

<div className="sticky top-0 z-10 px-5 py-2.5 border-y border-white/[0.06] bg-[#0F172A]/95 backdrop-blur-sm mt-1">
<h4 className="text-[0.65rem] text-slate-400 font-bold uppercase tracking-widest">Meds &amp; Add-ons</h4>
</div>
<div className="divide-y divide-white/[0.04]">

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Stimulation Meds</span>
<div className="flex flex-wrap gap-1 mt-1">
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Covered</span>
<span className="px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">Specialty Pharmacy</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $150</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $3,500</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Anesthesia</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $30</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $500</span>
</div>
</label>

<label className="px-5 py-3.5 flex items-center justify-between cursor-pointer estimator-row transition-colors group">
<div className="flex items-start gap-3">
<input checked="" className="estimator-checkbox mt-1" type="checkbox"/>
<div>
<span className="text-[0.8rem] row-title font-medium block transition-colors">Facility &amp; Lab Fees</span>
<span className="inline-flex items-center gap-1 mt-1 px-1.5 py-0.5 rounded text-[0.6rem] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        Covered
                                    </span>
</div>
</div>
<div className="text-right">
<span className="block text-[0.8rem] text-white font-mono font-medium">You: $2,400</span>
<span className="block text-[0.6rem] text-slate-500 mt-0.5">Ins: $500</span>
</div>
</label>
</div>
</div>

<div className="bg-white/[0.02] border-t border-white/5 rounded-b-[24px]">
<div className="flex p-4 items-center justify-center w-full">
<button className="group w-full py-2.5 rounded-xl bg-emerald-500/[0.08] hover:bg-emerald-500/[0.12] border border-emerald-500/20 text-[0.8rem] font-medium text-emerald-100/90 hover:text-white hover:border-emerald-500/30 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_15px_-4px_rgba(16,185,129,0.15)]">
<svg className="lucide lucide-save w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
<span className="tracking-wide">Save Plan</span>
</button>
</div>

<div className="px-5 pb-5">
<p className="text-[0.6rem] text-slate-500/70 leading-relaxed text-center border-t border-white/[0.04] pt-3">
                            These are estimates based on your current coverage. Actual costs may vary based on services rendered, network status, and other factors.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-6 mb-8 animate-enter" id="coverage" style={{animationDelay: '0.4s'}}>
<div className="flex items-center gap-2 mb-4 px-1">
<svg className="lucide lucide-file-text w-4 h-4 text-emerald-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h3 className="text-[0.95rem] font-medium italic text-white tracking-wide font-serif">Coverage Rules</h3>
</div>
<p className="px-1 text-[0.7rem] text-slate-400 mb-5 leading-relaxed">
                Coverage is calculated differently depending on the service. Review these examples to understand your policy's limits and caps.
            </p>

<div className="space-y-5">

<div className="glass-panel glass-card-shine rounded-[24px] p-0 overflow-hidden border border-white/10 relative">

<div className="absolute top-4 right-4 z-10">
<span className="text-[0.6rem] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-2 py-1 rounded-md border border-white/5">Bundle</span>
</div>
<div className="p-5 border-b border-white/5">
<h4 className="text-[1rem] font-serif font-medium text-white tracking-wide mb-3">IVF Standard Cycle</h4>

<div className="grid grid-cols-2 gap-3 mb-1">
<div className="bg-white/[0.03] rounded-xl p-2.5 border border-white/[0.05] flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<svg className="lucide lucide-repeat w-4 h-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<div>
<span className="block text-[0.6rem] text-slate-500 uppercase">Benefit Limit</span>
<span className="block text-[0.7rem] text-slate-200 font-medium">3 Cycles / Lifetime</span>
</div>
</div>
<div className="bg-white/[0.03] rounded-xl p-2.5 border border-white/[0.05] flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
<svg className="lucide lucide-calendar-clock w-4 h-4" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<div>
<span className="block text-[0.6rem] text-slate-500 uppercase">Age Limit</span>
<span className="block text-[0.7rem] text-slate-200 font-medium">Under 42 Years</span>
</div>
</div>
</div>
</div>

<div className="p-5 bg-white/[0.01]">
<p className="text-[0.65rem] text-slate-400 mb-4 leading-relaxed">
                             Your plan pays a negotiated flat rate for the entire episode of care, regardless of the billed amount.
                        </p>

<div className="relative pl-3 border-l border-slate-700/30 space-y-4">

<div className="relative">
<div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-slate-700 border-2 border-[#020617]"></div>
<div className="flex justify-between items-center text-[0.7rem] text-slate-500 line-through decoration-slate-600">
<span>Provider Bills (Market Rate)</span>
<span>$25,000</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-[#020617]"></div>
<div className="flex justify-between items-center text-[0.75rem] text-white">
<span>Plan Allowance (Negotiated)</span>
<span>$15,000</span>
</div>
<div className="mt-1 text-[0.6rem] text-emerald-400/80">
                                    Plan covers 90% of this amount.
                                </div>
</div>

<div className="relative pt-2">
<div className="bg-white/[0.03] rounded-lg p-3 border border-white/10 flex justify-between items-center">
<span className="text-[0.75rem] font-medium text-white">Your Co-insurance (10%)</span>
<span className="text-[0.95rem] font-mono text-white">$1,500</span>
</div>
</div>
</div>
</div>

<div className="bg-black/20 border-t border-white/5">
<details className="group">
<summary className="flex justify-between items-center px-5 py-3 cursor-pointer text-slate-500 hover:text-slate-300 transition-colors">
<span className="text-[0.7rem] font-medium">Included in this bundle</span>
<svg className="lucide lucide-chevron-down w-3 h-3 transition-transform duration-300 group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 pt-0 text-[0.7rem] text-slate-400 grid grid-cols-2 gap-2">
<span>• Monitoring Visits</span>
<span>• Egg Retrieval</span>
<span>• Anesthesia</span>
<span>• Fertilization (ICSI)</span>
<span>• Fresh Transfer</span>
</div>
</details>
</div>
</div>

<div className="glass-panel glass-card-shine rounded-[24px] p-0 overflow-hidden border border-white/10 relative">

<div className="absolute top-4 right-4 z-10">
<span className="text-[0.6rem] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-2 py-1 rounded-md border border-white/5">Itemized Cap</span>
</div>
<div className="p-5 border-b border-white/5">
<h4 className="text-[1rem] font-serif font-medium text-white tracking-wide mb-3">Fertility Medications</h4>

<div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3">
<div className="flex justify-between items-end mb-2">
<span className="text-[0.65rem] text-slate-400 uppercase tracking-wide">Lifetime Limit</span>
<span className="text-[0.7rem] text-white font-medium">$8,500 used of $10,000</span>
</div>
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5 relative">
<div className="absolute inset-0 w-[85%] bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.3)]"></div>
</div>
<div className="flex items-start gap-2 mt-2.5">
<svg className="lucide lucide-alert-circle w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<p className="text-[0.65rem] text-slate-400 leading-tight">
                                    You are approaching your limit. Costs exceeding $10,000 are 100% your responsibility.
                                </p>
</div>
</div>
</div>

<div className="p-5 bg-white/[0.01]">
<p className="text-[0.65rem] text-slate-400 mb-4 leading-relaxed">
                              Each medication cost is added up. Once the total hits the limit, the plan stops paying.
                        </p>
<div className="space-y-3">

<div className="flex justify-between items-center text-[0.75rem]">
<span className="text-slate-300">Follistim AQ Cartridge</span>
<span className="text-white font-mono">$4,200</span>
</div>

<div className="flex justify-between items-center text-[0.75rem]">
<span className="text-slate-300">Menopur 75 IU</span>
<span className="text-white font-mono">$2,800</span>
</div>

<div className="flex justify-between items-center text-[0.75rem]">
<span className="text-slate-300">Ganirelix Acetate</span>
<span className="text-white font-mono">$1,500</span>
</div>
<div className="border-t border-white/10 pt-3 mt-1">
<div className="flex justify-between items-center">
<span className="text-[0.7rem] text-slate-400">Total Billed</span>
<span className="text-[0.8rem] text-slate-400 font-mono">$8,500</span>
</div>
<div className="flex justify-between items-center mt-1">
<span className="text-[0.75rem] text-white font-medium">Remaining Cap</span>
<span className="text-[0.8rem] text-emerald-400 font-mono font-medium">$1,500</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel glass-card-shine rounded-[24px] p-0 overflow-hidden border border-white/10 relative">

<div className="absolute top-4 right-4 z-10">
<span className="text-[0.6rem] uppercase tracking-widest text-slate-500 font-bold bg-white/5 px-2 py-1 rounded-md border border-white/5">Itemized</span>
</div>
<div className="p-5 border-b border-white/5">
<h4 className="text-[1rem] font-serif font-medium text-white tracking-wide">Diagnostic Workup</h4>
<p className="text-[0.7rem] text-slate-400 mt-2 leading-relaxed">
                            Unlike bundles, these services are billed individually. Different rules (Copay vs. Deductible) may apply to each line item in a single visit.
                        </p>
</div>
<div className="divide-y divide-white/[0.04]">

<div className="p-4 flex justify-between items-center hover:bg-white/[0.02]">
<div>
<span className="block text-[0.75rem] text-white font-medium">Office Visit</span>
<span className="text-[0.6rem] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10 mt-1 inline-block">Fixed Copay Rule</span>
</div>
<div className="text-right">
<span className="block text-[0.6rem] text-slate-500 line-through">$350</span>
<span className="block text-[0.8rem] text-white font-mono">$50</span>
</div>
</div>

<div className="p-4 flex justify-between items-center hover:bg-white/[0.02]">
<div>
<span className="block text-[0.75rem] text-white font-medium">Ultrasound</span>
<span className="text-[0.6rem] text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/10 mt-1 inline-block">Deductible Applies</span>
</div>
<div className="text-right">
<span className="block text-[0.6rem] text-slate-500">Plan Rate</span>
<span className="block text-[0.8rem] text-white font-mono">$250</span>
</div>
</div>
</div>
<div className="p-4 bg-white/[0.02] border-t border-white/5 flex justify-between items-center">
<span className="text-[0.75rem] text-slate-300 font-medium">Total Cost to You</span>
<span className="text-[0.95rem] text-white font-serif">$300</span>
</div>
</div>
</div>
</section>




</main>

<nav className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 animate-enter pointer-events-none" style={{animationDelay: '0.9s'}}>
<div className="flex pointer-events-auto border-white/[0.08] bg-[#020617]/80 w-full max-w-[23rem] border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-2xl backdrop-blur-2xl items-center justify-between">

<a className="group flex flex-col items-center gap-1.5 min-w-[3rem] text-slate-500 hover:text-[#4ADE80] transition-colors" href="#">
<svg className="lucide lucide-home w-5 h-5 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[0.65rem] font-medium tracking-wide">Home</span>
</a>

<a className="group flex flex-col items-center gap-1.5 min-w-[3rem] hover:text-[#4ADE80] transition-colors text-slate-500" href="#">
<svg className="lucide lucide-heart w-5 h-5 stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-[0.65rem] font-medium tracking-wide">Care</span>
</a>

<a className="group flex flex-col items-center gap-1.5 min-w-[3rem] text-[#4ADE80] transition-colors relative" href="#">
<svg className="lucide lucide-piggy-bank w-5 h-5 stroke-[1.5]" data-lucide="piggy-bank" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"></path><path d="M16 10h.01"></path><path d="M2 8v1a2 2 0 0 0 2 2h1"></path></svg>
<span className="text-[0.65rem] font-medium tracking-wide">Finance</span>
</a>

<a className="group flex flex-col items-center gap-1.5 min-w-[3rem] hover:text-[#4ADE80] transition-colors text-slate-500" href="#">
<svg className="lucide lucide-store w-5 h-5 stroke-[1.5]" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
<span className="text-[0.65rem] font-medium tracking-wide">Providers</span>
</a>

<a className="group flex flex-col items-center gap-1.5 min-w-[3rem] hover:text-[#4ADE80] transition-colors text-slate-500" href="#">
<svg className="lucide lucide-telescope w-5 h-5 stroke-[1.5]" data-lucide="telescope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path><path d="m13.56 11.747 4.332-.924"></path><path d="m16 21-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path><path d="m6.158 8.633 1.114 4.456"></path><path d="m8 21 3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></svg>
<span className="text-[0.65rem] font-medium tracking-wide">Explore</span>
</a>
</div>
</nav>


    </>
  );
}
