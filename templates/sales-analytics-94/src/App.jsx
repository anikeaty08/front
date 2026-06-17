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
      
<div className="flex min-h-screen w-full">

<aside className="hidden w-64 flex-col border-r border-zinc-800 bg-zinc-950/50 backdrop-blur-xl lg:flex fixed h-full z-20">
<div className="flex h-16 items-center border-b border-zinc-800 px-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-zinc-950">
<span className="font-bold text-xs tracking-tight">S</span>
</div>
<span className="font-medium text-white tracking-tight">SYNTH</span>
</div>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-white bg-zinc-800/50 ring-1 ring-inset ring-zinc-700/50" href="#">
<iconify-icon className="text-white" height="18" icon="solar:chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Overview
                </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<iconify-icon className="group-hover:text-white" height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Sales Team
                </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<iconify-icon className="group-hover:text-white" height="18" icon="solar:document-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Quotes
                </a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<iconify-icon className="group-hover:text-white" height="18" icon="solar:danger-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Cancellations
                </a>
</nav>
<div className="border-t border-zinc-800 p-4">
<button className="group flex w-full items-center gap-3 rounded-md px-2 py-2 text-sm font-medium hover:bg-zinc-900 hover:text-white">
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
<div className="flex flex-col items-start">
<span className="text-xs text-white">Alex Morgan</span>
<span className="text-[10px] text-zinc-500">Admin</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 lg:pl-64">
<div className="flex flex-col min-h-screen">

<header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 backdrop-blur-md">
<div className="flex items-center gap-4">
<button className="lg:hidden text-zinc-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="flex items-center text-sm font-medium text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Dashboard</span>
<iconify-icon className="mx-2" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-zinc-200">Yearly Performance</span>
</nav>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-zinc-500">Jan 1, 2023 - Dec 31, 2023</span>
<button className="flex items-center gap-2 rounded border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-all">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span>Filter</span>
</button>
<button className="flex items-center gap-2 rounded bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-all">
<iconify-icon icon="solar:export-linear" width="14"></iconify-icon>
<span>Export</span>
</button>
</div>
</header>
<div className="p-6 space-y-6">

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total Revenue</span>
<iconify-icon className="text-emerald-500" icon="solar:dollar-minimalistic-linear" width="18"></iconify-icon>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">$2.4M</span>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5">
                                    +12.5%
                                    <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Active Quotes</span>
<iconify-icon className="text-blue-500" icon="solar:file-text-linear" width="18"></iconify-icon>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">1,842</span>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5">
                                    +8.2%
                                    <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Closed Sales</span>
<iconify-icon className="text-indigo-500" icon="solar:bag-check-linear" width="18"></iconify-icon>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">1,120</span>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5">
                                    +24.0%
                                    <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
</div>

<div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Cancellation Rate</span>
<iconify-icon className="text-rose-500" icon="solar:close-circle-linear" width="18"></iconify-icon>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-2xl font-medium text-white tracking-tight">4.2%</span>
<span className="text-xs font-medium text-rose-500 flex items-center gap-0.5">
                                    +1.2%
                                    <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
<div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
<div>
<h2 className="text-lg font-medium text-white tracking-tight">Performance Analytics</h2>
<p className="text-sm text-zinc-500">Comparative view of quotes, sales, and individual performance.</p>
</div>

<div className="flex flex-wrap items-center gap-4 text-xs font-medium">
<div className="flex items-center gap-2">
<span className="h-0.5 w-3 rounded-full bg-blue-500"></span>
<span className="text-zinc-300">Quotes</span>
</div>
<div className="flex items-center gap-2">
<span className="h-0.5 w-3 rounded-full bg-emerald-500"></span>
<span className="text-zinc-300">Sales</span>
</div>
<div className="flex items-center gap-2">
<span className="h-0.5 w-3 rounded-full bg-rose-500"></span>
<span className="text-zinc-300">Cancellations</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="flex gap-0.5">
<span className="h-0.5 w-1 rounded-full bg-indigo-400"></span>
<span className="h-0.5 w-1 rounded-full bg-indigo-400"></span>
</span>
<span className="text-zinc-500">Sarah K.</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="flex gap-0.5">
<span className="h-0.5 w-1 rounded-full bg-orange-400"></span>
<span className="h-0.5 w-1 rounded-full bg-orange-400"></span>
</span>
<span className="text-zinc-500">Mike R.</span>
</div>
</div>
</div>

<div className="relative h-80 w-full select-none">
<svg className="h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 300">
<defs>
<lineargradient id="gradQuotes" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#3b82f6" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="gradSales" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>

<g className="text-zinc-800" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1">
<line x1="0" x2="1000" y1="0" y2="0"></line>
<line x1="0" x2="1000" y1="75" y2="75"></line>
<line x1="0" x2="1000" y1="150" y2="150"></line>
<line x1="0" x2="1000" y1="225" y2="225"></line>
<line stroke-dasharray="0" x1="0" x2="1000" y1="300" y2="300"></line>
</g>

<path className="opacity-50" d="M0,250 C100,240 150,200 250,180 C350,160 450,190 550,140 C650,90 750,110 850,80 C900,65 950,50 1000,40" fill="none" stroke="#818cf8" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<path className="opacity-50" d="M0,260 C80,255 160,240 240,230 C320,220 400,200 480,190 C560,180 640,150 720,130 C800,110 900,100 1000,90" fill="none" stroke="#fb923c" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<path className="chart-line" d="M0,280 C100,285 200,270 300,275 C400,280 500,260 600,265 C700,270 800,250 900,255 C950,258 1000,260 1000,260" fill="none" stroke="#f43f5e" strokeWidth="2"></path>

<path className="chart-line" d="M0,200 C150,180 250,100 400,80 C550,60 650,120 800,40 C880,0 950,20 1000,10" fill="url(#gradQuotes)" stroke="#3b82f6" strokeWidth="2" style={{animationDelay: '0.1s'}}></path>

<path className="chart-line" d="M0,220 C120,210 220,180 350,160 C480,140 600,180 750,100 C850,50 920,80 1000,60" fill="url(#gradSales)" stroke="#10b981" strokeWidth="2" style={{animationDelay: '0.2s'}}></path>

<g className="chart-fade">

<circle cx="1000" cy="60" fill="#09090b" r="4" stroke="#10b981" strokeWidth="2"></circle>

<circle cx="1000" cy="10" fill="#09090b" r="4" stroke="#3b82f6" strokeWidth="2"></circle>

<circle cx="1000" cy="260" fill="#09090b" r="4" stroke="#f43f5e" strokeWidth="2"></circle>
</g>
</svg>

<div className="mt-4 flex justify-between text-[10px] font-medium text-zinc-600 uppercase tracking-wider">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
<span>Aug</span>
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="col-span-2 rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
<div className="mb-4 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Top Sales Performers</h3>
<button className="text-xs text-zinc-500 hover:text-white">View All</button>
</div>
<div className="space-y-4">

<div className="group flex items-center justify-between rounded-lg border border-transparent p-2 hover:border-zinc-800 hover:bg-zinc-900/50 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/10 text-xs font-semibold text-indigo-400">SK</div>
<div>
<p className="text-xs font-medium text-white">Sarah Kline</p>
<p className="text-[10px] text-zinc-500">Snr. Account Executive</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:block w-32">
<div className="flex justify-between text-[10px] mb-1">
<span>Target</span>
<span className="text-white">92%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-zinc-800">
<div className="h-1.5 rounded-full bg-indigo-500" style={{width: '92%'}}></div>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-white">$842,000</p>
<p className="text-[10px] text-emerald-500">+12%</p>
</div>
</div>
</div>

<div className="group flex items-center justify-between rounded-lg border border-transparent p-2 hover:border-zinc-800 hover:bg-zinc-900/50 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/10 text-xs font-semibold text-orange-400">MR</div>
<div>
<p className="text-xs font-medium text-white">Mike Ross</p>
<p className="text-[10px] text-zinc-500">Account Executive</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:block w-32">
<div className="flex justify-between text-[10px] mb-1">
<span>Target</span>
<span className="text-white">78%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-zinc-800">
<div className="h-1.5 rounded-full bg-orange-500" style={{width: '78%'}}></div>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-white">$620,000</p>
<p className="text-[10px] text-emerald-500">+5%</p>
</div>
</div>
</div>

<div className="group flex items-center justify-between rounded-lg border border-transparent p-2 hover:border-zinc-800 hover:bg-zinc-900/50 transition-all">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/10 text-xs font-semibold text-teal-400">JL</div>
<div>
<p className="text-xs font-medium text-white">Jessica Lee</p>
<p className="text-[10px] text-zinc-500">Sales Associate</p>
</div>
</div>
<div className="flex items-center gap-6">
<div className="hidden sm:block w-32">
<div className="flex justify-between text-[10px] mb-1">
<span>Target</span>
<span className="text-white">104%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-zinc-800">
<div className="h-1.5 rounded-full bg-teal-500" style={{width: '100%'}}></div>
</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-white">$590,000</p>
<p className="text-[10px] text-emerald-500">+18%</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-xl border border-zinc-800 bg-zinc-900/20 p-6">
<h3 className="text-sm font-medium text-white mb-4">Display Settings</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Show Predictions</span>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-600 checked:right-0 checked:border-emerald-500 right-4 top-0" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-zinc-400">Compare Years</span>
<div className="relative inline-block w-8 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-600 checked:right-0 checked:border-emerald-500 right-4 top-0" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-zinc-800">
<button className="w-full rounded-md bg-white py-2 text-xs font-medium text-black hover:bg-zinc-200 transition-colors">Generate Report</button>
</div>
</div>

<div className="rounded-xl border border-yellow-900/30 bg-yellow-900/10 p-4">
<div className="flex gap-3">
<iconify-icon className="text-yellow-500 mt-0.5" icon="solar:bell-linear" width="16"></iconify-icon>
<div>
<h4 className="text-xs font-medium text-yellow-500">Approaching Q4 Deadline</h4>
<p className="mt-1 text-[10px] text-yellow-500/70">14 pending quotes need approval before Friday to count towards this fiscal year.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
