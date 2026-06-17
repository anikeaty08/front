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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
glass: {
100: 'rgba(255, 255, 255, 0.05)',
200: 'rgba(255, 255, 255, 0.08)',
300: 'rgba(255, 255, 255, 0.12)',
}
},
boxShadow: {
'glow-primary': '0 0 20px -5px rgba(99, 102, 241, 0.4)',
'glow-risk': '0 0 20px -5px rgba(249, 115, 22, 0.4)',
}
}
}
}



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
      

<div className="ambient-glow-1"></div>
<div className="ambient-glow-2"></div>

<nav className="sticky top-0 z-50 w-full glass-panel border-b border-white/5">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 flex items-center justify-center shadow-glow-primary group-hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)] transition-all duration-300 to-indigo-600">
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-lg font-medium text-white tracking-tight">Zentro<span className="text-white/40"></span></span>
</div>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm rounded-full border transition-colors text-white bg-white/5 border-white/5" href="#">Dashboard</a>
<a className="px-4 py-2 text-sm transition-colors text-neutral-400 hover:text-white" href="#">Funds</a>
<a className="px-4 py-2 text-sm transition-colors text-neutral-400 hover:text-white" href="#">Compliance</a>
<a className="px-4 py-2 text-sm transition-colors text-neutral-400 hover:text-white" href="#">Reports</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-10 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 w-64 placeholder-neutral-600 bg-neutral-900/50 border-white/10 text-neutral-200" placeholder="Search ISIN or Fund..." type="text"/>
</div>
<button className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors relative bg-white/5 border-white/10 hover:bg-white/10">
<div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse"></div>
<svg className="lucide lucide-bell w-4 h-4 text-neutral-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="w-9 h-9 rounded-full bg-gradient-to-br border flex items-center justify-center overflow-hidden from-neutral-700 to-neutral-800 border-white/10">
<span className="text-xs font-medium text-white">JD</span>
</div>
</div>
</div>
</nav>

<main className="max-w-[1600px] mx-auto px-6 pt-8 space-y-6">

<header className="flex flex-col lg:flex-row lg:items-end gap-6 gap-x-6 gap-y-6 justify-between">
<div className="flex items-start gap-6">

<div className="w-20 h-20 rounded-2xl glass-card flex items-center justify-center shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="lucide lucide-asterisk w-10 h-10 group-hover:rotate-90 transition-transform duration-700 ease-in-out text-blue-400" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 mb-2">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-blue-500/10 border border-blue-500/20 text-blue-300">Actively Managed</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">FSCS Eligible</span>
<span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-rose-500/10 border border-rose-500/20 text-rose-300">
<svg className="lucide lucide-x-circle w-3 h-3" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> FOS Ineligible
                        </span>
</div>
<h1 className="text-3xl font-medium text-white tracking-tight">Strategic Sustainable Income</h1>
<div className="flex items-center gap-4 text-sm text-neutral-400">
<span className="flex items-center gap-1.5"><svg className="lucide lucide-hash w-3.5 h-3.5" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg> ISIN: <span className="text-neutral-200 font-mono">TLPV110</span></span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="flex items-center gap-1.5"><svg className="lucide lucide-building-2 w-3.5 h-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>Global Investors Ltd</span>
<span className="w-1 h-1 rounded-full bg-neutral-700"></span>
<span className="text-neutral-200">North America</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2.5 rounded-lg glass-card border text-sm font-medium flex items-center gap-2 transition-all hover:bg-white/5 border-white/10 text-neutral-300">
<svg className="lucide lucide-file-json w-4 h-4" data-lucide="file-json" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"></path><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"></path></svg> JSON
                </button>
<button className="px-4 py-2.5 rounded-lg glass-card border text-sm font-medium flex items-center gap-2 transition-all hover:bg-white/5 border-white/10 text-neutral-300">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export PDF
                </button>
<button className="px-4 py-2.5 rounded-lg hover:bg-blue-500 text-sm font-medium flex items-center gap-2 transition-all shadow-lg bg-blue-600 text-white shadow-blue-900/50">
<svg className="lucide lucide-edit-3 w-4 h-4" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg> Edit Fund
                </button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all"></div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Unit Type</p>
<p className="text-lg font-medium text-white">Accumulation</p>
<div className="mt-2 flex items-center gap-1 text-xs text-indigo-400">
<svg className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Verified
                    </div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Currency</p>
<p className="text-lg font-medium text-white">MAD (DH)</p>
<div className="mt-2 text-xs text-neutral-400">Base Currency</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Ongoing Charge</p>
<p className="text-2xl font-medium tracking-tight text-white">0.92%</p>
<div className="w-full h-1 rounded-full mt-3 overflow-hidden bg-neutral-800">
<div className="h-full w-[25%] shadow-[0_0_10px_rgba(34,211,238,0.5)] bg-cyan-400"></div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-rose-500/10 rounded-full blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">Exit Cost</p>
<p className="text-2xl font-medium tracking-tight text-white">2.09%</p>
<div className="w-full h-1 rounded-full mt-3 overflow-hidden bg-neutral-800">
<div className="h-full bg-rose-500 w-[60%] shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
</div>
</div>
</div>

<div className="lg:col-span-4 glass-panel rounded-xl p-6 relative overflow-hidden flex flex-col justify-between border-t-2 border-t-neutral-500/50">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-500/5 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-sm font-medium text-white">Risk Score (SRI)</h3>
<p className="text-xs mt-1 text-neutral-400">Synthetic Risk Indicator</p>
</div>
<span className="px-2 py-1 rounded bg-neutral-500/10 text-xs font-semibold border border-neutral-500/20 text-neutral-400">High Risk</span>
</div>

<div className="flex items-end gap-1.5 h-24 mb-2">

<div className="flex-1 rounded-t-sm h-[20%] opacity-50 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[30%] opacity-50 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[40%] opacity-50 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[50%] opacity-50 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[60%] opacity-50 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[70%] opacity-50 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[80%] opacity-70 bg-neutral-800"></div>

<div className="flex-1 relative h-[90%] group">
<div className="absolute bottom-0 w-full h-full bg-gradient-to-t rounded-t-sm shadow-[0_0_15px_rgba(249,115,22,0.6)] animate-pulse from-neutral-600 to-neutral-400"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-lg text-neutral-400">8</div>
</div>

<div className="flex-1 rounded-t-sm h-[100%] opacity-30 bg-neutral-800"></div>
<div className="flex-1 rounded-t-sm h-[100%] opacity-30 bg-neutral-800"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest font-semibold mt-2">
<span>Low</span>
<span>High</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium mb-6 flex items-center gap-2 text-white">
<svg className="lucide lucide-pie-chart w-4 h-4 text-blue-400" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg> Cost Breakdown
                </h3>
<div className="space-y-6">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-slate-800" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-indigo-500" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-dasharray="125" stroke-dashoffset="100" strokeWidth="4"></circle>
</svg>
<span className="absolute text-[10px] text-blue-200">En</span>
</div>
<div>
<div className="text-xs text-neutral-400">Entry Cost</div>
<div className="text-sm font-medium text-white">0.61%</div>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:text-white transition-colors text-neutral-700" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-slate-800" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-emerald-500" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" stroke-dasharray="125" stroke-dashoffset="115" strokeWidth="4"></circle>
</svg>
<span className="absolute text-[10px] text-indigo-200">Tx</span>
</div>
<div>
<div className="text-xs text-neutral-400">Transaction Costs</div>
<div className="text-sm font-medium text-white">0.35%</div>
</div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:text-white transition-colors text-neutral-700" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white">Asset Allocation</h3>
<div className="flex rounded-lg p-0.5 bg-neutral-900/50">
<button className="px-3 py-1 text-[10px] font-medium rounded-md shadow-sm bg-white/10 text-white">Category</button>
<button className="px-3 py-1 text-[10px] font-medium rounded-md text-neutral-500 hover:text-neutral-300">Individual</button>
</div>
</div>
<div className="flex flex-col items-center justify-center py-4">

<div className="relative w-40 h-40 rounded-full" style={{background: 'conic-gradient(#6366f1 0% 65%, #0ea5e9 65% 85%, #334155 85% 100%)'}}>
<div className="absolute inset-4 bg-[#0d1321] rounded-full flex flex-col items-center justify-center z-10">
<span className="text-3xl font-medium tracking-tight text-white">£8.5M</span>
<span className="text-[10px] uppercase tracking-wide text-neutral-400">Total Assets</span>
</div>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></span>
<span className="text-neutral-300">Equities</span>
</div>
<div className="text-right">
<span className="font-medium text-white">65%</span>
<span className="text-neutral-500 text-xs ml-2">£6.5M</span>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]"></span>
<span className="text-neutral-300">Fixed Income</span>
</div>
<div className="text-right">
<span className="font-medium text-white">20%</span>
<span className="text-neutral-500 text-xs ml-2">£2.0M</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-6">
<h3 className="text-sm font-medium mb-6 text-white">Market Exposure</h3>
<div className="space-y-6">

<div className="relative">
<div className="flex justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-lg">🇬🇧</span>
<span className="text-sm text-neutral-200">United Kingdom</span>
</div>
<span className="text-xs font-semibold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 text-indigo-400">High</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-neutral-800">
<div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-lg">🇺🇸</span>
<span className="text-sm text-neutral-200">United States</span>
</div>
<span className="text-xs font-semibold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 text-cyan-400">Medium</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-neutral-800">
<div className="h-full bg-gradient-to-r w-[55%] rounded-full from-cyan-600 to-cyan-400"></div>
</div>
</div>

<div className="relative">
<div className="flex justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-lg">🇪🇺</span>
<span className="text-sm text-neutral-200">Europe ex UK</span>
</div>
<span className="text-xs font-semibold bg-neutral-500/10 px-2 py-0.5 rounded border border-neutral-500/20 text-neutral-400">Low</span>
</div>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-neutral-800">
<div className="h-full w-[25%] rounded-full bg-neutral-600"></div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex flex-wrap gap-2 items-center">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider mr-2">Identified Risks:</span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 cursor-default transition-colors text-rose-300">
<svg className="lucide lucide-alert-triangle w-3 h-3" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg> No Capital Protection
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-500/10 border border-neutral-500/20 hover:bg-neutral-500/20 cursor-default transition-colors text-neutral-300">
                Credit Risk
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-500/10 border border-neutral-500/20 hover:bg-neutral-500/20 cursor-default transition-colors text-neutral-300">
                Counterparty Risk
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 cursor-default transition-colors text-cyan-300">
                Leverage Risk
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border cursor-default transition-colors bg-neutral-700/30 text-neutral-300 border-white/5 hover:bg-neutral-700/50">
                Sustainability Uncertainty
            </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium border cursor-default transition-colors bg-neutral-700/30 text-neutral-300 border-white/5 hover:bg-neutral-700/50">
                Operational Risk
            </span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-panel rounded-xl p-6">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-blue-500/20 rounded-md">
<svg className="lucide lucide-target w-4 h-4 text-blue-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-sm font-medium text-white">Investment Objectives</h3>
</div>
<p className="text-sm leading-relaxed text-neutral-400">
                    Dolorum ducimus est sit. Quod et saepe quo doloribus eos beatae a. Modi omnis corporis veniam quia recusandae voluptatem sit. Quos pessimus et voluptatibus commodi est.
                </p>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-cyan-500/20 rounded-md">
<svg className="lucide lucide-trending-up w-4 h-4 text-cyan-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-sm font-medium text-white">Investment Strategy</h3>
</div>
<p className="text-sm leading-relaxed text-neutral-400">
                        Blanditiis et tenetur porro vitae molestiae. Tempora id nam odio autem. Nostrum architecto praesentium odio et sit incidunt.
                    </p>
</div>
</div>

<div className="glass-panel rounded-xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-indigo-500/20 rounded-md">
<svg className="lucide lucide-leaf w-4 h-4 text-indigo-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-sm font-medium text-white">ESG &amp; SDR Information</h3>
</div>
<p className="text-sm leading-relaxed mb-6 text-neutral-400">
                    Sint reiciendis autem sapiente harum. Quisquam quae dolor iuga eius cupiditate quaerat distinctio. Consectetur illo quae id mollitia eos cum fugiat.
                </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 rounded-lg border bg-neutral-900/50 border-white/5">
<span className="text-xs text-neutral-500 block mb-1">Sustainability Score</span>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-indigo-400">A+</span>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-300">Top 10%</span>
</div>
</div>
<div className="p-3 rounded-lg border bg-neutral-900/50 border-white/5">
<span className="text-xs text-neutral-500 block mb-1">Carbon Intensity</span>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-white">Low</span>
<div className="w-12 h-1 rounded-full overflow-hidden bg-neutral-700">
<div className="h-full bg-indigo-500 w-[20%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
