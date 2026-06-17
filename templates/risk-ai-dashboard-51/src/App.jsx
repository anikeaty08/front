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
      

<aside className="w-64 border-r border-white/5 flex flex-col bg-zinc-950 flex-shrink-0 hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-white">
<div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center text-black font-semibold tracking-tighter text-xs">R</div>
<span className="font-semibold tracking-tight text-base">RISK AI</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors group">
<iconify-icon className="group-hover:text-emerald-400 transition-colors" icon="solar:add-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">New Analysis</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900 text-white border border-white/5">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Market Volatility</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Q3 Compliance</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Vendor Risk</span>
</button>
</nav>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Risk Analyst</span>
<span className="text-[10px] text-zinc-500">Enterprise Plan</span>
</div>
<button className="ml-auto text-zinc-500 hover:text-white">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950/50 relative">

<header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-sm z-10">
<div className="flex items-center gap-3">
<h1 className="text-base font-medium text-white tracking-tight">Market Volatility Assessment</h1>
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium border border-emerald-500/20">Active</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white transition-colors md:hidden">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-8">

<div className="flex gap-4 max-w-3xl mx-auto">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="space-y-3">
<p className="text-zinc-300 leading-relaxed">
                        I've analyzed the recent market data and the documents you provided. Based on the Q3 volatility index and the attached PDF report, there is a moderate risk exposure in the tech sector holdings.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
<div className="p-2 rounded bg-rose-500/10 text-rose-400">
<iconify-icon icon="solar:graph-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500">Risk Score</div>
<div className="text-sm font-semibold text-white">High (8.4/10)</div>
</div>
</div>
<div className="p-3 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
<div className="p-2 rounded bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500">Compliance</div>
<div className="text-sm font-semibold text-white">Verified</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 max-w-3xl mx-auto justify-end">
<div className="space-y-2 max-w-lg">
<div className="bg-zinc-800 text-zinc-100 px-4 py-2.5 rounded-2xl rounded-tr-sm border border-white/5">
<p className="leading-relaxed">Can you verify the sources for the volatility claim? Specifically the reports from last week.</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="flex gap-4 max-w-3xl mx-auto">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="space-y-3 w-full">
<p className="text-zinc-300 leading-relaxed">
                        Certainly. I've cross-referenced the claims with 3 key sources identified in your workspace. You can view the specific citations in the source panel. The primary driver is the inflation report referenced in the XLS data.
                    </p>
</div>
</div>
</div>

<div className="p-6 pt-2 max-w-3xl mx-auto w-full">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950 pointer-events-none -top-12"></div>
<div className="bg-zinc-900 border border-white/10 rounded-xl p-2 flex items-end gap-2 shadow-xl shadow-black/20 focus-within:border-white/20 transition-colors">
<button className="p-2 text-zinc-500 hover:text-white transition-colors rounded-lg hover:bg-white/5">
<iconify-icon icon="solar:paperclip-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<textarea className="w-full bg-transparent border-0 focus:ring-0 p-2 min-h-[44px] max-h-32 text-sm resize-none placeholder-zinc-500 text-white" placeholder="Ask Risk AI regarding compliance, security or volatility..." rows="1"></textarea>
<button className="p-2 bg-white text-black rounded-lg hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="text-center mt-3">
<p className="text-[10px] text-zinc-600">AI can make mistakes. Please verify critical risk data.</p>
</div>
</div>
</div>
</main>

<aside className="w-80 bg-zinc-950 border-l border-white/5 flex flex-col flex-shrink-0 transition-all duration-300">

<div className="px-5 pt-5 pb-3">
<div className="bg-zinc-900/80 p-1 rounded-lg grid grid-cols-2 gap-1 border border-white/5">

<button className="relative flex items-center justify-center py-1.5 text-xs font-medium text-white bg-zinc-800 rounded-md shadow-sm border border-white/5 transition-all">
                    Sources
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-zinc-700 text-[9px] flex items-center justify-center rounded-full text-zinc-300 border border-zinc-950">3</span>
</button>

<button className="flex items-center justify-center py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors rounded-md hover:bg-white/5">
                    Report
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 pb-6 space-y-6">

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">References</h3>
<button className="text-zinc-500 hover:text-white">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>

<div className="group flex flex-col bg-zinc-900/30 border border-white/5 rounded-lg hover:bg-zinc-900 hover:border-white/10 transition-all duration-200 cursor-pointer">
<div className="p-3 flex items-start gap-3">
<div className="mt-0.5 p-2 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 flex-shrink-0 group-hover:bg-rose-500/20 transition-colors">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white">Global_Risk_Outlook.pdf</h4>
<p className="text-xs text-zinc-500 mt-0.5 truncate">Internal Audit • Page 42</p>
</div>
<div className="opacity-0 group-hover:opacity-100 text-zinc-400 transition-opacity">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="px-3 pb-3">
<div className="pl-3 border-l-2 border-zinc-800">
<p className="text-[11px] text-zinc-400 italic line-clamp-2">"...volatility index exceeded standard deviation by 12% in Q3..."</p>
</div>
</div>
</div>

<div className="group flex items-center gap-3 p-3 bg-zinc-900/30 border border-white/5 rounded-lg hover:bg-zinc-900 hover:border-white/10 transition-all duration-200 cursor-pointer">
<div className="p-2 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white">Bloomberg Market Data</h4>
<p className="text-xs text-zinc-500 mt-0.5 truncate">bloomberg.com/markets</p>
</div>
<div className="opacity-0 group-hover:opacity-100 text-zinc-400 transition-opacity">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>

<div className="group flex items-center gap-3 p-3 bg-zinc-900/30 border border-white/5 rounded-lg hover:bg-zinc-900 hover:border-white/10 transition-all duration-200 cursor-pointer">
<div className="p-2 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-zinc-200 truncate group-hover:text-white">Q3_Financials_Final.xls</h4>
<p className="text-xs text-zinc-500 mt-0.5 truncate">Data Sheet • Row 120-150</p>
</div>
<div className="opacity-0 group-hover:opacity-100 text-zinc-400 transition-opacity">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5 space-y-3">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Quick Stats</h3>
<div className="bg-zinc-900/50 rounded-lg p-3 border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-400">Confidence Score</span>
<span className="text-xs font-semibold text-white">94%</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-200 w-[94%] rounded-full"></div>
</div>
</div>
<div className="bg-zinc-900/50 rounded-lg p-3 border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-400">Source Verification</span>
<span className="text-xs font-semibold text-emerald-400">Passed</span>
</div>
<div className="flex gap-1">
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500/30 rounded-full"></div>
</div>
</div>
</div>

<div className="pt-2">
<button className="w-full py-2 rounded-lg border border-dashed border-zinc-700 text-zinc-500 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all text-xs flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Add Custom Source
                </button>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-zinc-950">
<div className="flex items-center justify-between text-xs text-zinc-500">
<span>Model: Risk-v4.0</span>
<span className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Online
                </span>
</div>
</div>
</aside>

    </>
  );
}
