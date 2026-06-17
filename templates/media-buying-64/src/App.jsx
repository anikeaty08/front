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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col justify-between hidden md:flex shrink-0">
<div className="p-4 flex flex-col h-full">

<div className="flex items-center gap-3 px-2 mb-8 mt-2">
<div className="bg-black text-white h-7 w-7 rounded-[5px] flex items-center justify-center shadow-sm">
<span className="font-semibold tracking-tighter text-sm">MB</span>
</div>
<span className="font-semibold tracking-tight text-sm text-gray-900">MediaBuy</span>
</div>

<nav className="space-y-1 flex-1">
<div className="px-2 mb-2">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Platform</span>
</div>
<a className="flex items-center justify-between px-2 py-2 bg-gray-100 text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-lg text-gray-700" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-lg" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Campaigns</span>
</div>
<span className="bg-gray-100 text-gray-600 py-0.5 px-1.5 rounded text-xs font-medium">8</span>
</a>
<a className="flex items-center justify-between px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Markets</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-lg" icon="solar:clapperboard-play-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Assets</span>
</div>
</a>
<div className="px-2 mb-2 mt-6">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Analytics</span>
</div>
<a className="flex items-center justify-between px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-lg" icon="solar:document-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Post-Buy</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-2 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-lg" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Invoices</span>
</div>
</a>
</nav>

<div className="border-t border-gray-100 pt-4 mt-auto">
<a className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-md transition-colors" href="#">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center border border-gray-200 shadow-sm">
<span className="text-xs font-medium text-gray-600">JD</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Jane Doe</span>
<span className="text-xs text-gray-500">Acme Agency</span>
</div>
<iconify-icon className="ml-auto text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">

<header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 shrink-0 sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="text-lg font-semibold tracking-tight text-gray-900">Broadcast &amp; Print Overview</h1>
</div>
<div className="flex items-center gap-3">

<div className="hidden sm:flex items-center gap-2 border-r border-gray-200 pr-4 mr-1">
<span className="text-xs font-medium text-gray-500">Active Delivery</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4.5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all peer-checked:bg-black"></div>
</label>
</div>

<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors shadow-sm bg-white">
<iconify-icon className="text-gray-400" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                    Q3 2023
                </button>

<button className="bg-black text-white text-sm font-medium px-3.5 py-1.5 rounded-md hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                    New Schedule
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-gray-500">Total Committed</span>
<div className="p-1 bg-gray-50 rounded-md">
<iconify-icon className="text-gray-400" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between mt-auto">
<span className="text-2xl font-semibold tracking-tight text-gray-900">$845,000</span>
<span className="text-xs font-medium text-gray-600 flex items-center bg-gray-100 px-1.5 py-0.5 rounded">
                                42% Paced
                            </span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-gray-500">Est. Reach</span>
<div className="p-1 bg-gray-50 rounded-md">
<iconify-icon className="text-gray-400" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between mt-auto">
<span className="text-2xl font-semibold tracking-tight text-gray-900">14.2M</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                                5.1%
                            </span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-gray-500">Avg. Frequency</span>
<div className="p-1 bg-gray-50 rounded-md">
<iconify-icon className="text-gray-400" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between mt-auto">
<span className="text-2xl font-semibold tracking-tight text-gray-900">4.2x</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
                                0.3x
                            </span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col hover:border-gray-300 transition-colors cursor-default">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-gray-500">Cost per GRPs</span>
<div className="p-1 bg-gray-50 rounded-md">
<iconify-icon className="text-gray-400" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between mt-auto">
<span className="text-2xl font-semibold tracking-tight text-gray-900">$994</span>
<span className="text-xs font-medium text-green-600 flex items-center bg-green-50 px-1.5 py-0.5 rounded">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-down-linear" strokeWidth="1.5"></iconify-icon>
                                $12.50
                            </span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm flex flex-col hover:border-gray-300 transition-colors cursor-default col-span-2 md:col-span-1 xl:col-span-1">
<div className="flex justify-between items-start mb-3">
<span className="text-xs font-medium text-gray-500">Total GRPs</span>
<div className="p-1 bg-gray-50 rounded-md">
<iconify-icon className="text-gray-400" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex items-end justify-between mt-auto">
<span className="text-2xl font-semibold tracking-tight text-gray-900">850</span>
<span className="text-xs font-medium text-gray-600 flex items-center bg-gray-100 px-1.5 py-0.5 rounded">
                                Target: 1000
                            </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm lg:col-span-2 flex flex-col">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Spend vs Delivery</h2>
<p className="text-xs text-gray-500 mt-0.5">Weekly pacing comparison</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-[2px] bg-gray-200"></div>
<span className="text-xs text-gray-500 font-medium">Spend</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-[2px] bg-black"></div>
<span className="text-xs text-gray-500 font-medium">Reach</span>
</div>
</div>
</div>
<div className="flex-1 min-h-[200px] relative flex flex-col justify-end mt-4">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-t border-gray-100 w-full h-0"></div>
<div className="border-t border-gray-100 w-full h-0"></div>
<div className="border-t border-gray-100 w-full h-0"></div>
<div className="border-t border-gray-100 w-full h-0"></div>
</div>

<div className="relative z-10 w-full h-full flex justify-between items-end px-2 sm:px-6">

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '30%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '45%'}}></div>
</div>

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '40%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '55%'}}></div>
</div>

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '25%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '35%'}}></div>
</div>

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '65%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '85%'}}></div>
</div>

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '50%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '70%'}}></div>
</div>

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '75%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '90%'}}></div>
</div>

<div className="flex gap-0.5 sm:gap-1.5 items-end justify-center w-full h-full pb-1 group">
<div className="w-2 sm:w-4 bg-gray-200 rounded-t-[2px] group-hover:bg-gray-300 transition-colors" style={{height: '85%'}}></div>
<div className="w-2 sm:w-4 bg-black rounded-t-[2px] group-hover:bg-gray-800 transition-colors" style={{height: '100%'}}></div>
</div>
</div>
</div>
<div className="flex justify-between mt-3 text-[11px] text-gray-400 font-medium px-2 sm:px-6 uppercase tracking-wider">
<span className="w-full text-center">Wk 1</span>
<span className="w-full text-center">Wk 2</span>
<span className="w-full text-center">Wk 3</span>
<span className="w-full text-center">Wk 4</span>
<span className="w-full text-center">Wk 5</span>
<span className="w-full text-center">Wk 6</span>
<span className="w-full text-center">Wk 7</span>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Media Mix</h2>
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="space-y-5 flex-1 mt-2">

<div>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
<iconify-icon className="text-xs" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Television</span>
</div>
<div className="text-right">
<span className="text-sm font-semibold tracking-tight block">$520,000</span>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-black h-full rounded-full" style={{width: '61%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
<iconify-icon className="text-xs" icon="solar:radio-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Radio</span>
</div>
<div className="text-right">
<span className="text-sm font-semibold tracking-tight block">$210,000</span>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-gray-400 h-full rounded-full" style={{width: '25%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-2">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-200">
<iconify-icon className="text-xs" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900">Print</span>
</div>
<div className="text-right">
<span className="text-sm font-semibold tracking-tight block">$115,000</span>
</div>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-gray-300 h-full rounded-full" style={{width: '14%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">

<div className="p-4 sm:p-5 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
<div className="flex items-center gap-3">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Media Plan &amp; Booking Schedule</h2>
<span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-medium">5 Drafts</span>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="border border-gray-200 rounded-md p-1.5 hover:bg-gray-50 text-gray-600 flex items-center transition-colors">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="text-xs text-gray-500 font-medium bg-gray-50/80 border-b border-gray-200">
<tr>
<th className="px-5 py-3 font-medium w-10">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded-[3px] border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</th>
<th className="px-5 py-3 font-medium">Station / Publisher</th>
<th className="px-5 py-3 font-medium">Medium</th>
<th className="px-5 py-3 font-medium">Asset Duration</th>
<th className="px-5 py-3 font-medium">Air Time</th>
<th className="px-5 py-3 font-medium">Days</th>
<th className="px-5 py-3 font-medium">Camp. Duration</th>
<th className="px-5 py-3 font-medium text-right">Est. Cost</th>
<th className="px-5 py-3 font-medium text-right">GRPs</th>
<th className="px-5 py-3 font-medium text-right"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3.5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded-[3px] border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="px-5 py-3.5 font-medium text-gray-900">
                                        TV3
                                    </td>
<td className="px-5 py-3.5 text-gray-500 flex items-center gap-1.5 mt-[2px]">
<iconify-icon className="text-gray-400" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
                                        TV
                                    </td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>30s Spot</option>
<option>15s Spot</option>
<option>45s Spot</option>
<option>60s Spot</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-32">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Primetime</option>
<option>Morning Show</option>
<option>Mid-day</option>
<option>Late Night</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Mon - Sun</option>
<option>Weekdays</option>
<option>Weekends</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>4 Weeks</option>
<option>2 Weeks</option>
<option>8 Weeks</option>
<option>Ongoing</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-right tabular-nums text-gray-900 font-medium">$125,000</td>
<td className="px-5 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">
                                            210
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3.5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded-[3px] border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="px-5 py-3.5 font-medium text-gray-900">
                                        Adom TV
                                    </td>
<td className="px-5 py-3.5 text-gray-500 flex items-center gap-1.5 mt-[2px]">
<iconify-icon className="text-gray-400" icon="solar:tv-linear" strokeWidth="1.5"></iconify-icon>
                                        TV
                                    </td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>15s Spot</option>
<option>30s Spot</option>
<option>45s Spot</option>
<option>60s Spot</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-32">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Morning</option>
<option>Primetime</option>
<option>Mid-day</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Weekdays</option>
<option>Mon - Sun</option>
<option>Weekends</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>2 Weeks</option>
<option>4 Weeks</option>
<option>1 Week</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-right tabular-nums text-gray-900 font-medium">$85,200</td>
<td className="px-5 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">
                                            165
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3.5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded-[3px] border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="px-5 py-3.5 font-medium text-gray-900">
                                        Joy FM
                                    </td>
<td className="px-5 py-3.5 text-gray-500 flex items-center gap-1.5 mt-[2px]">
<iconify-icon className="text-gray-400" icon="solar:radio-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                                        Radio
                                    </td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>45s Spot</option>
<option>30s Spot</option>
<option>60s Spot</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-32">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Drive Time</option>
<option>Morning Show</option>
<option>Mid-day</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Weekdays</option>
<option>Weekends</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>4 Weeks</option>
<option>8 Weeks</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-right tabular-nums text-gray-900 font-medium">$42,500</td>
<td className="px-5 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">
                                            110
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3.5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded-[3px] border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="px-5 py-3.5 font-medium text-gray-900">
                                        Citi FM
                                    </td>
<td className="px-5 py-3.5 text-gray-500 flex items-center gap-1.5 mt-[2px]">
<iconify-icon className="text-gray-400" icon="solar:radio-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                                        Radio
                                    </td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>30s Spot</option>
<option>15s Spot</option>
<option>60s Spot</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-32">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Morning Show</option>
<option>Drive Time</option>
<option>Late Night</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Mon - Fri</option>
<option>Weekends</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>8 Weeks</option>
<option>4 Weeks</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-right tabular-nums text-gray-900 font-medium">$68,000</td>
<td className="px-5 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/50">
                                            135
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="px-5 py-3.5">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded-[3px] border border-gray-300 bg-white peer-checked:bg-black peer-checked:border-black transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
</label>
</td>
<td className="px-5 py-3.5 font-medium text-gray-900">
                                        Daily Graphic
                                    </td>
<td className="px-5 py-3.5 text-gray-500 flex items-center gap-1.5 mt-[2px]">
<iconify-icon className="text-gray-400" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                                        Print
                                    </td>
<td className="px-5 py-2.5">
<span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block">N/A (Print)</span>
</td>
<td className="px-5 py-2.5">
<span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded border border-gray-100 inline-block">Morning Dist.</span>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>Wednesdays</option>
<option>Fridays</option>
<option>Mondays</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-2.5">
<div className="relative w-28">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-xs rounded-md py-1.5 pl-2.5 pr-6 focus:outline-none focus:ring-1 focus:ring-black focus:border-black shadow-sm font-medium transition-colors cursor-pointer hover:bg-gray-50">
<option>4 Issues</option>
<option>1 Issue</option>
<option>12 Issues</option>
</select>
<iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</td>
<td className="px-5 py-3.5 text-right tabular-nums text-gray-900 font-medium">$12,000</td>
<td className="px-5 py-3.5 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-50 text-yellow-700 border border-yellow-200/50">
                                            45
                                        </span>
</td>
<td className="px-5 py-3.5 text-right">
<button className="text-gray-400 hover:text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-3 border-t border-gray-200 bg-white flex items-center justify-between">
<span className="text-xs text-gray-500 font-medium">Showing 1 to 5 of 5 drafts</span>
<div className="flex gap-1.5">
<button className="px-2.5 py-1.5 text-xs font-medium border border-gray-200 rounded text-gray-400 cursor-not-allowed transition-colors">Previous</button>
<button className="px-2.5 py-1.5 text-xs font-medium border border-gray-200 rounded text-gray-400 cursor-not-allowed transition-colors shadow-sm">Next</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
