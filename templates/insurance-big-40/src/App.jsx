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

<div className="flex gap-1 overflow-x-auto no-scrollbar mask-linear-fade pr-6 pb-4 pl-6 gap-x-1 gap-y-1">
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#overview">Overview</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#estimator">Estimator</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#coverage">Details</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] transition-all duration-300 border border-transparent whitespace-nowrap" href="#medications">Meds</a>
<a className="px-4 py-1.5 rounded-[10px] text-[0.8rem] font-medium transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.2)] bg-emerald-500/[0.1] text-emerald-300 border border-emerald-500/[0.2] whitespace-nowrap" href="#documents">Docs</a>
</div>
</header>

<section className="animate-enter mb-4 pr-6 pl-6 relative" id="overview" style={{animationDelay: '0.1s'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-blue-500/5 blur-2xl -z-10 rounded-full opacity-60 animate-breathe">
</div>
<div className="glass-panel glass-success rounded-[24px] p-0 relative overflow-hidden transition-all duration-500">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent w-full opacity-50">
</div>
<div className="p-6 relative z-10">

<div className="flex justify-between items-start mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/[0.1] border border-emerald-500/[0.2] flex items-center justify-center text-[#10B981] shrink-0">
<svg className="lucide lucide-check w-5 h-5 stroke-[2.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[0.6rem] font-bold uppercase tracking-widest text-[#34D399] mb-1">
                            Verified
                        </span>
<h2 className="text-[0.95rem] font-serif text-white font-medium block leading-none">Coverage Active</h2>
</div>
</div>
</div>
<p className="text-[0.8rem] text-slate-300 leading-relaxed font-light mb-6 border-b border-white/[0.06] pb-5">
        Great news! Your coverage has been verified for the current plan year.
      </p>

<div className="grid grid-cols-3 gap-2 mb-6">
<div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06] text-center">
<span className="block text-[0.6rem] text-slate-500 uppercase tracking-wide mb-1">Status</span>
<span className="block text-[0.75rem] text-white font-medium">Active</span>
</div>
<div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06] text-center">
<span className="block text-[0.6rem] text-slate-500 uppercase tracking-wide mb-1">Network</span>
<span className="block text-[0.75rem] text-emerald-400 font-medium">In-Network</span>
</div>
<div className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.06] text-center">
<span className="block text-[0.6rem] text-slate-500 uppercase tracking-wide mb-1">Benefits</span>
<span className="block text-[0.75rem] text-emerald-400 font-medium">Included</span>
</div>
</div>

<div className="space-y-5 mb-6">

<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-[0.75rem] text-slate-300 font-medium">Deductible</span>
<span className="text-[0.7rem] text-slate-400">$1000 of $1500 met</span>
</div>
<div className="h-1.5 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/[0.05]">
<div className="bg-emerald-500 w-[66%] h-full rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
</div>
<p className="text-[0.65rem] text-slate-500 mt-2">$500 remaining before insurance pays more</p>
</div>

<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-[0.75rem] text-slate-300 font-medium">Out-of-Pocket Max</span>
<span className="text-[0.7rem] text-slate-400">$1200 of $3000</span>
</div>
<div className="h-1.5 overflow-hidden border-white/[0.05] bg-slate-800/50 w-full border rounded-full">
<div className="bg-indigo-400 w-[40%] h-full rounded-full shadow-[0_0_8px_rgba(251,146,60,0.4)]"></div>
</div>
<p className="text-[0.65rem] text-slate-500 mt-2">Maximum you'll pay this year: $3000</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 mb-8 animate-enter" id="benefits-details" style={{animationDelay: '0.2s'}}>
<details className="group glass-panel rounded-[20px] overflow-hidden transition-all duration-500">
<summary className="relative cursor-pointer select-none list-none outline-none group bg-gradient-to-r from-white/[0.02] to-transparent hover:bg-white/[0.02] transition-colors">

<div className="px-5 py-3.5 flex items-center justify-between">
<div className="flex flex-col gap-2.5 w-full pr-4">

<div className="flex items-center gap-3 w-full">
<div className="w-7 h-7 rounded-lg bg-blue-500/[0.08] flex items-center justify-center text-blue-400/90 shrink-0 border border-blue-500/10">
<svg className="lucide lucide-shield w-3.5 h-3.5 stroke-[1.5]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="flex items-center gap-2 overflow-hidden w-full">
<span className="text-[0.75rem] font-medium text-slate-200 truncate">Aetna POS II</span>
<span className="text-[0.65rem] text-slate-500 font-mono tracking-wide whitespace-nowrap opacity-60 ml-auto">ID 8842</span>
</div>
</div>

<div className="flex items-center gap-3 w-full">
<div className="flex shrink-0 text-orange-400/90 w-7 h-7 border-orange-500/10 border rounded-lg items-center justify-center">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex items-center gap-2 overflow-hidden w-full">
<span className="text-[0.75rem] font-medium text-slate-200 truncate">Carrot Fertility</span>
<span className="text-[0.65rem] text-slate-500 font-mono tracking-wide whitespace-nowrap opacity-60 ml-auto">ID 9283</span>
</div>
</div>
</div>

<div className="text-slate-600 transition-transform duration-300 transform group-hover:text-slate-400">
<svg className="chevron w-4 h-4 stroke-[1.5] opacity-60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</summary>

<div className="px-5 pb-5 pt-1 border-t border-white/5 bg-slate-900/20">

<div className="pt-4 pb-5 border-b border-dashed border-white/10">
<div className="flex items-center justify-between mb-4">
<h4 className="text-[0.8rem] text-white font-medium flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.5)]"></span>
                        Insurance Information
                    </h4>
<button className="text-[0.65rem] text-slate-500 hover:text-white transition-colors flex items-center gap-1">
                                Edit details <svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div>
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Provider</p>
<p className="text-[0.75rem] text-slate-200">Aetna</p>
</div>
<div>
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Plan Type</p>
<p className="text-[0.75rem] text-slate-200">Choice POS II</p>
</div>
<div>
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Member ID</p>
<p className="text-[0.75rem] text-slate-200 font-mono">W1293848842</p>
</div>
<div>
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Group Number</p>
<p className="text-[0.75rem] text-slate-200 font-mono">88342-01</p>
</div>
<div className="col-span-2">
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Effective Date</p>
<p className="text-[0.75rem] text-slate-200">Jan 01, 2024</p>
</div>
</div>
</div>

<div className="pt-5">
<div className="flex items-center justify-between mb-4">
<h4 className="text-[0.8rem] text-white font-medium flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(251,146,60,0.5)]"></span>
                        Employer / Fertility Benefits
                    </h4>
<button className="text-[0.65rem] text-slate-500 hover:text-white transition-colors flex items-center gap-1">
                                Edit details <svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-y-4 gap-x-2">
<div className="col-span-2">
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Program Name</p>
<p className="text-[0.75rem] text-slate-200">Carrot Fertility (Plan A)</p>
</div>
<div>
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Member ID</p>
<p className="text-[0.75rem] text-slate-200 font-mono">C-99283-X</p>
</div>
<div>
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Relationship</p>
<p className="text-[0.75rem] text-slate-200">Primary Holder</p>
</div>
<div className="col-span-2 mt-1">
<p className="text-[0.6rem] uppercase tracking-wider text-slate-500 mb-1">Benefit Notes</p>
<p className="text-[0.75rem] text-slate-400 font-light leading-relaxed">
                            Annual allowance resets on Jan 1st. Includes 3 cycles of IVF and egg freezing coverage.
                        </p>
</div>
</div>
</div>
</div>
</details>
</section>

<section className="animate-enter mb-6 px-6" id="partner-coverage" style={{animationDelay: '0.3s'}}>
<div className="glass-panel relative rounded-[18px] overflow-hidden group border-white/5 transition-all duration-300 hover:border-indigo-500/20 hover:shadow-[0_0_15px_rgba(99,102,241,0.06)] hover:bg-white/[0.02] cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-l from-indigo-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex items-center justify-between p-4">

<div className="flex flex-col gap-1 max-w-[75%]">
<h3 className="text-[0.85rem] font-medium text-slate-200 tracking-tight flex items-center gap-2">
                    Sharing the journey?
                </h3>
<p className="text-[0.7rem] text-slate-400 leading-relaxed font-light pr-2">
                    Link a partner's plan to potentially unlock shared benefits and optimize costs.
                </p>
</div>

<div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.08] group-hover:border-indigo-500/30 group-hover:bg-indigo-500/[0.08] transition-all duration-300 shadow-sm">
<svg className="w-full h-full p-0.5" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">

<path className="text-slate-700 group-hover:text-indigo-500/40 transition-colors duration-300" d="M13 20H21" stroke="currentColor" strokeWidth="1.2"></path>

<circle className="text-slate-600 group-hover:text-indigo-400 transition-colors duration-300" cx="10.5" cy="20" fill="currentColor" r="2.5"></circle>

<g className="group-hover:translate-x-0.5 transition-transform duration-300 ease-out">
<circle className="text-slate-600 group-hover:text-indigo-400/80 transition-colors duration-300" cx="28.5" cy="20" r="7.5" stroke="currentColor" stroke-dasharray="2 2" strokeWidth="1"></circle>

<path className="text-slate-500 group-hover:text-indigo-200 transition-colors duration-300" d="M28.5 17V23M25.5 20H31.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2"></path>
</g>
</svg>
</div>
</div>
</div>
</section>






</main>

<nav className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 animate-enter pointer-events-none" style={{animationDelay: '0.9s'}}>
<div className="flex pointer-events-auto border-white/[0.08] bg-[#020617]/80 w-full max-w-[23rem] border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-2xl backdrop-blur-2xl items-center justify-between">

<a className="group flex flex-col items-center gap-1.5 min-w-[3rem] text-slate-500 hover:text-[#4ADE80] transition-colors" href="#">
<svg className="lucide lucide-home w-5 h-5 stroke-[1.5]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path className="" d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
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
