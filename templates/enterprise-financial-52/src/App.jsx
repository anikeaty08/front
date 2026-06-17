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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="h-16 bg-white border-b border-zinc-200 flex items-center justify-between px-6 shrink-0 z-10">

<div className="flex items-center gap-4">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">AETHER</span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-100/50">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-emerald-700 tracking-wide">LIVE</span>
</div>
</div>

<div className="flex-1 max-w-xl mx-8">
<div className="relative flex items-center w-full">
<iconify-icon className="absolute left-3 text-zinc-400 text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-9 pr-4 py-1.5 text-sm text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:bg-white transition-colors" placeholder="Search transactions, clients, anomalies..." type="text"/>
<div className="absolute right-2 flex items-center gap-1">
<kbd className="text-xs font-medium text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200 hidden sm:inline-block">⌘</kbd>
<kbd className="text-xs font-medium text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200 hidden sm:inline-block">K</kbd>
</div>
</div>
</div>

<div className="flex items-center gap-5">
<div className="flex items-center gap-4 text-sm text-zinc-600 font-medium border-r border-zinc-200 pr-5">
<button className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear"></iconify-icon>
                    Last 24h
                    <iconify-icon className="text-xs text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors">
<span className="text-zinc-400">$</span>
                    USD Base
                    <iconify-icon className="text-xs text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<button className="relative text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-rose-500 border-2 border-white translate-x-0.5 -translate-y-0.5"></span>
</button>
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 text-white flex items-center justify-center text-xs font-medium shadow-sm">
                JS
            </div>
</div>
</header>

<main className="flex-1 overflow-y-auto p-4 lg:p-6 flex flex-col gap-4 lg:gap-6 min-h-0">

<section className="grid grid-cols-2 lg:grid-cols-8 gap-3 lg:gap-4 shrink-0">

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">Gross Proc. Vol</span>
<iconify-icon className="text-zinc-300 hover:text-zinc-500 cursor-help" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">$512.4M</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-emerald-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.4%
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 14L8 10L16 12L24 6L32 8L40 2L48 4" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">Net Revenue</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">$1.84M</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-emerald-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 1.1%
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 12L10 14L20 8L30 10L40 4L48 2" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">Settlement Float</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">$4.21B</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-500 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:minus-linear"></iconify-icon> 0.0%
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 8L12 8L24 7L36 8L48 8" stroke="#a1a1aa" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">FX Exposure</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">$840M</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-amber-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 4.2%
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 14L12 10L24 12L36 4L48 2" stroke="#d97706" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">Active Enterprise</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">1,248</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-emerald-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 14L16 14L24 8L32 8L48 2" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">Chargeback Ratio</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">0.014%</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-emerald-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 0.002
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 2L12 4L24 8L36 12L48 14" stroke="#10b981" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">Fraud Loss</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">0.008%</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-rose-600 font-medium flex items-center gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 0.001
                    </span>
<svg className="w-12 h-4" fill="none" viewbox="0 0 48 16"><path d="M0 14L12 12L24 14L36 8L48 2" stroke="#e11d48" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-3 flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500 font-medium">API Uptime</span>
</div>
<div className="flex items-end justify-between">
<span className="text-xl font-medium tracking-tight text-zinc-900">99.999%</span>
</div>
<div className="flex items-center justify-between mt-1">
<span className="text-xs text-zinc-400 font-medium flex items-center gap-0.5">
                        Target: 99.99%
                    </span>
<div className="flex gap-0.5">
<div className="w-1.5 h-3 bg-emerald-500 rounded-sm"></div>
<div className="w-1.5 h-3 bg-emerald-500 rounded-sm"></div>
<div className="w-1.5 h-3 bg-emerald-500 rounded-sm"></div>
<div className="w-1.5 h-3 bg-emerald-500 rounded-sm"></div>
<div className="w-1.5 h-3 bg-emerald-500 rounded-sm"></div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 flex-1 min-h-0">

<div className="col-span-1 lg:col-span-9 flex flex-col gap-4 lg:gap-6 min-h-0">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 shrink-0 h-72">

<div className="col-span-2 bg-white border border-zinc-200 rounded-lg p-4 flex flex-col">

<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Revenue &amp; Processing Volume</h3>
<p className="text-xs text-zinc-500 mt-0.5">Real-time settlement flow across all corridors</p>
</div>
<div className="flex items-center gap-2 bg-zinc-50 p-0.5 rounded-md border border-zinc-200">
<button className="px-2 py-1 text-xs font-medium bg-white shadow-sm border border-zinc-200 rounded text-zinc-900">Both</button>
<button className="px-2 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900">Vol</button>
<button className="px-2 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900">Rev</button>
</div>
</div>

<div className="flex-1 relative w-full h-full flex items-end justify-between px-2 pt-4">

<div className="absolute left-0 top-4 bottom-6 flex flex-col justify-between text-[0.65rem] text-zinc-400 font-medium">
<span>$40M</span>
<span>$30M</span>
<span>$20M</span>
<span>$10M</span>
</div>

<div className="absolute left-8 right-2 top-4 bottom-6 flex flex-col justify-between z-0">
<div className="w-full border-t border-zinc-100"></div>
<div className="w-full border-t border-zinc-100"></div>
<div className="w-full border-t border-zinc-100"></div>
<div className="w-full border-t border-zinc-100"></div>
</div>

<div className="relative z-10 w-full h-full ml-8 flex items-end justify-between pb-6 gap-1">

<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '40%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '55%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '45%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '60%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '50%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '65%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '70%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '55%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '80%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '75%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '85%'}}></div>
<div className="w-full bg-zinc-100 rounded-t-sm" style={{height: '95%'}}></div>

<svg className="absolute inset-0 w-full h-[calc(100%-1.5rem)] preserve-3d" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,70 L8,50 L16,60 L25,40 L33,50 L41,30 L50,25 L58,40 L66,15 L75,20 L83,10 L91,5 L100,20" fill="none" stroke="#18181b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>

<div className="absolute -bottom-1 left-0 right-0 flex justify-between text-[0.65rem] text-zinc-400 font-medium">
<span>00:00</span>
<span>04:00</span>
<span>08:00</span>
<span>12:00</span>
<span>16:00</span>
<span>20:00</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-white border border-zinc-200 rounded-lg p-4 flex flex-col">
<div className="flex justify-between items-center mb-5">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Global Liquidity</h3>
<button className="text-xs text-zinc-500 flex items-center gap-1 hover:text-zinc-900">
                                View Banks <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-4 flex-1 justify-center">

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-700">USD</span>
<span className="font-medium text-zinc-900">$2.41B</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 rounded-full" style={{width: '55%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-700">EUR</span>
<span className="font-medium text-zinc-900">€840M</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 rounded-full" style={{width: '25%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-700">GBP</span>
<span className="font-medium text-zinc-900">£420M</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 rounded-full" style={{width: '15%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-zinc-700">SGD</span>
<span className="font-medium text-zinc-900">S$180M</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-300 rounded-full" style={{width: '8%'}}></div>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-zinc-100">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">Total Available</span>
<span className="font-medium text-zinc-900">$4.08B</span>
</div>
<div className="relative w-full h-0.5 bg-transparent mt-2">
<div className="absolute top-0 bottom-0 left-[20%] w-[1px] h-3 -mt-1 bg-rose-500" title="Risk Threshold"></div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg shrink-0">
<div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Risk Intelligence Matrix</h3>
<span className="text-xs text-zinc-500">Live monitoring</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-100">

<div className="p-4">
<h4 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">High Risk Corridors</h4>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
<span className="text-xs font-medium text-zinc-800">MEX → COL</span>
</div>
<span className="text-[0.65rem] px-1.5 py-0.5 bg-rose-50 text-rose-600 border border-rose-100 rounded">94 Score</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-xs font-medium text-zinc-800">UAE → RUS</span>
</div>
<span className="text-[0.65rem] px-1.5 py-0.5 bg-amber-50 text-amber-600 border border-amber-100 rounded">82 Score</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-xs font-medium text-zinc-800">ZAF → NGA</span>
</div>
<span className="text-[0.65rem] px-1.5 py-0.5 bg-amber-50 text-amber-600 border border-amber-100 rounded">78 Score</span>
</div>
</div>
</div>

<div className="p-4">
<h4 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Flagged Accounts</h4>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-800">Apex Trading Group</span>
</div>
<span className="text-xs text-zinc-500 text-right">KYC Refresh</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-800">Quantum Pay Ltd</span>
</div>
<span className="text-xs text-rose-600 font-medium text-right">Velocity Block</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-800">Helios Capital</span>
</div>
<span className="text-xs text-zinc-500 text-right">UBO Review</span>
</div>
</div>
</div>

<div className="p-4">
<h4 className="text-xs font-medium text-zinc-500 mb-3 uppercase tracking-wider">Abnormal Spikes</h4>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-800">FX Margin - EUR/USD</span>
</div>
<span className="text-xs font-medium text-emerald-600">+450%</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:card-send-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-800">Payout Latency - LATAM</span>
</div>
<span className="text-xs font-medium text-rose-600">+1.2s</span>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-800">API Requests - Node A</span>
</div>
<span className="text-xs font-medium text-amber-600">+80%</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-lg flex-1 flex flex-col min-h-[300px] overflow-hidden">

<div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between bg-white shrink-0">
<div className="flex items-center gap-3">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Transaction Intelligence</h3>
<div className="px-2 py-0.5 rounded bg-zinc-100 text-[0.65rem] font-medium text-zinc-500">14,204 rows</div>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-zinc-400 hover:text-zinc-800 border border-transparent hover:border-zinc-200 rounded transition-colors"><iconify-icon icon="solar:filter-linear"></iconify-icon></button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-800 border border-transparent hover:border-zinc-200 rounded transition-colors"><iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon></button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-800 border border-transparent hover:border-zinc-200 rounded transition-colors"><iconify-icon icon="solar:maximize-linear"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-auto">
<table className="table-fixed-layout w-full text-left border-collapse min-w-[800px]">
<thead className="bg-zinc-50/80 sticky top-0 z-10 backdrop-blur-sm shadow-[0_1px_0_0_#e4e4e7]">
<tr>
<th className="py-2.5 pl-4 pr-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-24">Tx ID</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-24">Timestamp</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-40">Enterprise Client</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-24">Corridor</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-28 text-right">Amount</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-16 text-center">Cur</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-20 text-right">FX Margin</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-20 text-center">Risk</th>
<th className="py-2.5 px-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-24">Status</th>
<th className="py-2.5 pr-4 pl-2 text-[0.65rem] font-medium text-zinc-500 uppercase tracking-wider w-20 text-right">Latency</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 bg-white">

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-2 pl-4 pr-2 text-xs font-mono text-zinc-500">TRX-9A2B</td>
<td className="py-2 px-2 text-xs text-zinc-500">10:42:05</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 truncate">Global Logistics Inc.</td>
<td className="py-2 px-2 text-xs text-zinc-600">USA → GBR</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 text-right">1,250,000.00</td>
<td className="py-2 px-2 text-xs text-zinc-500 text-center">USD</td>
<td className="py-2 px-2 text-xs text-emerald-600 text-right">0.12%</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[0.65rem] font-medium bg-zinc-100 text-zinc-600">12</span>
</td>
<td className="py-2 px-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Cleared
                                        </div>
</td>
<td className="py-2 pr-4 pl-2 text-xs text-zinc-500 text-right">45ms</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-2 pl-4 pr-2 text-xs font-mono text-zinc-500">TRX-7C8F</td>
<td className="py-2 px-2 text-xs text-zinc-500">10:41:52</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 truncate">Quantum Pay Ltd</td>
<td className="py-2 px-2 text-xs text-zinc-600">UAE → RUS</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 text-right">450,000.00</td>
<td className="py-2 px-2 text-xs text-zinc-500 text-center">EUR</td>
<td className="py-2 px-2 text-xs text-emerald-600 text-right">0.85%</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[0.65rem] font-medium bg-rose-50 border border-rose-100 text-rose-600">82</span>
</td>
<td className="py-2 px-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Blocked
                                        </div>
</td>
<td className="py-2 pr-4 pl-2 text-xs text-zinc-500 text-right">12ms</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-2 pl-4 pr-2 text-xs font-mono text-zinc-500">TRX-3X1M</td>
<td className="py-2 px-2 text-xs text-zinc-500">10:41:15</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 truncate">Stripe Connect</td>
<td className="py-2 px-2 text-xs text-zinc-600">FRA → JPN</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 text-right">8,420,100.00</td>
<td className="py-2 px-2 text-xs text-zinc-500 text-center">JPY</td>
<td className="py-2 px-2 text-xs text-emerald-600 text-right">0.08%</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[0.65rem] font-medium bg-zinc-100 text-zinc-600">04</span>
</td>
<td className="py-2 px-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Cleared
                                        </div>
</td>
<td className="py-2 pr-4 pl-2 text-xs text-zinc-500 text-right">62ms</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-2 pl-4 pr-2 text-xs font-mono text-zinc-500">TRX-9V4N</td>
<td className="py-2 px-2 text-xs text-zinc-500">10:40:02</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 truncate">Mercado Libre</td>
<td className="py-2 px-2 text-xs text-zinc-600">BRA → MEX</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 text-right">245,000.00</td>
<td className="py-2 px-2 text-xs text-zinc-500 text-center">BRL</td>
<td className="py-2 px-2 text-xs text-emerald-600 text-right">0.45%</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[0.65rem] font-medium bg-amber-50 border border-amber-100 text-amber-600">54</span>
</td>
<td className="py-2 px-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div> Processing
                                        </div>
</td>
<td className="py-2 pr-4 pl-2 text-xs text-zinc-500 text-right">185ms</td>
</tr>

<tr className="hover:bg-zinc-50/50 transition-colors group">
<td className="py-2 pl-4 pr-2 text-xs font-mono text-zinc-500">TRX-1L2K</td>
<td className="py-2 px-2 text-xs text-zinc-500">10:39:45</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 truncate">Spotify AB</td>
<td className="py-2 px-2 text-xs text-zinc-600">SWE → USA</td>
<td className="py-2 px-2 text-xs font-medium text-zinc-900 text-right">1,200.00</td>
<td className="py-2 px-2 text-xs text-zinc-500 text-center">SEK</td>
<td className="py-2 px-2 text-xs text-emerald-600 text-right">0.05%</td>
<td className="py-2 px-2 text-center">
<span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[0.65rem] font-medium bg-zinc-100 text-zinc-600">01</span>
</td>
<td className="py-2 px-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-700">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Cleared
                                        </div>
</td>
<td className="py-2 pr-4 pl-2 text-xs text-zinc-500 text-right">38ms</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-3 flex flex-col gap-4 lg:gap-6 min-h-0">
<div className="bg-zinc-50/50 border border-zinc-200 rounded-lg p-5 flex flex-col h-full overflow-y-auto">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
<h2 className="text-sm font-semibold tracking-tight text-zinc-900">Strategic Intelligence</h2>
</div>
<div className="flex flex-col gap-5 flex-1">

<div className="pb-5 border-b border-zinc-200/60">
<div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 mb-2">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                                Anomaly Detected
                            </div>
<p className="text-sm text-zinc-800 font-medium leading-snug">Unusual routing volume from Quantum Pay Ltd to restricted RU corridors.</p>
<p className="text-xs text-zinc-500 mt-2 leading-relaxed">System automatically blocked 4 transactions totaling €1.2M. Velocity threshold exceeded by 400% in last 10 minutes.</p>

<div className="mt-3 flex items-center gap-2">
<button className="px-2.5 py-1 text-xs font-medium bg-white border border-zinc-200 rounded text-zinc-900 shadow-sm hover:bg-zinc-50 transition-colors">Review Entity</button>
<button className="px-2.5 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Dismiss</button>
</div>
</div>

<div className="pb-5 border-b border-zinc-200/60">
<div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 mb-2">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
                                72h Forecast Projection
                            </div>
<div className="flex items-end gap-3 mb-3">
<span className="text-2xl font-semibold tracking-tighter text-zinc-900">$1.6B</span>
<span className="text-xs text-zinc-500 mb-1">expected EOD</span>
</div>

<div className="h-12 w-full mt-2 relative flex items-end">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,35 L20,30 L40,32 L60,15 L80,20 L100,5" fill="none" stroke="#a1a1aa" stroke-dasharray="2 2" strokeLinecap="round" strokeWidth="1.5"></path>

<path d="M0,35 L20,30 L40,32" fill="none" stroke="#18181b" strokeLinecap="round" strokeWidth="1.5"></path>
<circle cx="40" cy="32" fill="#18181b" r="2"></circle>
</svg>
</div>
<p className="text-xs text-zinc-500 mt-2">GPV pacing +4.2% versus 30-day moving average, driven by Enterprise API integrations in APAC region.</p>
</div>

<div>
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 mb-2">
<iconify-icon icon="solar:checklist-minimalistic-linear"></iconify-icon>
                                Recommended Action
                            </div>
<p className="text-sm text-zinc-800 font-medium leading-snug">Rebalance SGD Liquidity Pool</p>
<p className="text-xs text-zinc-500 mt-1.5 mb-3">Singapore Dollar pool dropping near 8% threshold. Automated sweep recommended from USD reserve.</p>
<button className="w-full py-1.5 text-xs font-medium bg-zinc-900 text-white rounded-md shadow-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-1.5">
                                Execute Sweep <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
