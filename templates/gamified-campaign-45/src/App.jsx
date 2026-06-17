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
      

<header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<div className="font-semibold tracking-tight text-lg text-slate-900">NEXUS<span className="text-slate-400">/</span>CAMPAIGN</div>
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-slate-500 text-xs font-medium border border-gray-200">v2.4.0</span>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-slate-500 hover:text-slate-900 font-medium">Documentation</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 text-xs">
                JD
            </div>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-gray-200 bg-white hidden md:flex flex-col pt-6 pb-4">
<div className="px-4 mb-6">
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 px-2">Campaigns</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-2 px-2 py-1.5 bg-gray-50 text-slate-900 rounded-md text-sm font-medium" href="#">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Wheel Event Q3
                    </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Referral Rewards
                    </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors" href="#">
<iconify-icon icon="solar:ticket-sale-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Black Friday
                    </a>
</nav>
</div>
<div className="px-4 mt-auto">
<div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-slate-500">Budget Usage</span>
<span className="text-xs font-medium text-slate-900">74%</span>
</div>
<div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-slate-800 w-[74%] rounded-full"></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Wheel Event Q3</h1>
<p className="text-sm text-slate-500 mt-1">Configure campaign rules, probability weights, and reward tiers.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-3 py-2 text-sm font-medium text-slate-600 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-all">Discard Changes</button>
<button className="px-3 py-2 text-sm font-medium text-white bg-slate-900 rounded-md shadow-sm hover:bg-slate-800 transition-all flex items-center gap-2">
<iconify-icon icon="solar:diskette-linear" width="16"></iconify-icon>
                        Save Configuration
                    </button>
</div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-1 space-y-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-5">
<h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:settings-linear" width="18"></iconify-icon>
                                General Settings
                            </h2>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-200 appearance-none cursor-pointer transition-all duration-300 left-0 checked:left-5 checked:border-slate-900" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300 checked:bg-slate-900" htmlFor="toggle"></label>
</div>
</div>
<div className="space-y-4">
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500">Start Date</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-200 bg-gray-50 text-slate-900 text-sm py-2 px-3 focus:ring-2 focus:ring-slate-900 focus:bg-white focus:border-transparent transition-all outline-none border" type="date" value="2023-10-01"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500">End Date</label>
<div className="relative">
<input className="block w-full rounded-md border-gray-200 bg-gray-50 text-slate-900 text-sm py-2 px-3 focus:ring-2 focus:ring-slate-900 focus:bg-white focus:border-transparent transition-all outline-none border" type="date" value="2023-11-01"/>
</div>
</div>
</div>
<div className="pt-2">
<label className="text-xs font-medium text-slate-500 mb-2 block">Eligibility Rules</label>
<div className="space-y-2">
<label className="flex items-start gap-3 p-2.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group">
<div className="relative flex items-center h-5">
<input checked="" className="peer h-4 w-4 border-gray-300 text-slate-900 focus:ring-slate-900" name="eligibility" type="radio"/>
</div>
<div className="text-sm">
<span className="font-medium text-slate-900 block">Post-purchase only</span>
<span className="text-slate-500 text-xs">Triggered after completed checkout.</span>
</div>
</label>
<label className="flex items-start gap-3 p-2.5 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group">
<div className="relative flex items-center h-5">
<input className="peer h-4 w-4 border-gray-300 text-slate-900 focus:ring-slate-900" name="eligibility" type="radio"/>
</div>
<div className="text-sm">
<span className="font-medium text-slate-900 block">Daily Engagement</span>
<span className="text-slate-500 text-xs">Max 1 play per user per 24h window.</span>
</div>
</label>
</div>
</div>
<div className="pt-2">
<label className="text-xs font-medium text-slate-500 mb-1.5 block">Global Fallback</label>
<div className="flex gap-2">
<input className="flex-1 rounded-md border border-gray-200 bg-gray-50 py-2 px-3 text-sm text-slate-900 focus:ring-2 focus:ring-slate-900 focus:bg-white outline-none" placeholder="SKU or Reward ID" type="text" value="DISC_10_GENERIC"/>
<button className="px-3 py-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-slate-600">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-slate-400 mt-1.5 leading-tight">Triggered if the won reward is OOS or eligibility checks fail at redemption.</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-slate-900">Presentation</h2>
<button className="text-xs text-slate-500 hover:text-slate-900 underline">Edit Theme</button>
</div>
<div className="flex items-center justify-center py-4">
<div className="relative w-40 h-40 rounded-full border-4 border-slate-100 flex items-center justify-center overflow-hidden bg-slate-50 shadow-inner">

<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-slate-300" icon="solar:star-fall-linear" width="32"></iconify-icon>
</div>
<svg className="absolute inset-0 w-full h-full transform -rotate-90 text-slate-900 opacity-10" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="60 200" strokeWidth="20"></circle>
</svg>
<svg className="absolute inset-0 w-full h-full transform rotate-45 text-slate-500 opacity-20" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="40 211" strokeWidth="20"></circle>
</svg>
</div>
</div>
<div className="space-y-3 mt-2">
<div className="flex items-center justify-between p-2 rounded bg-gray-50 border border-gray-100">
<span className="text-xs text-slate-600 font-medium">Displayed Slices</span>
<input className="w-12 text-center text-xs bg-white border border-gray-200 rounded py-1 focus:ring-1 focus:ring-slate-500 outline-none" type="number" value="6"/>
</div>
<div className="flex items-center justify-between p-2 rounded bg-gray-50 border border-gray-100">
<span className="text-xs text-slate-600 font-medium">Spin Duration</span>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-400">ms</span>
<input className="w-16 text-center text-xs bg-white border border-gray-200 rounded py-1 focus:ring-1 focus:ring-slate-500 outline-none" type="number" value="3000"/>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-2 space-y-6">
<div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col h-full">
<div className="p-5 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<h2 className="text-sm font-semibold text-slate-900">Reward Pool</h2>
<span className="bg-emerald-50 text-emerald-700 text-[10px] px-2 py-0.5 rounded-full font-medium border border-emerald-100 tracking-wide">TOTAL WEIGHT: 100%</span>
</div>
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-900 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                Add Reward
                            </button>
</div>

<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="py-3 px-5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-1/4">Reward Details</th>
<th className="py-3 px-5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-1/6">Probability</th>
<th className="py-3 px-5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-1/5">Inventory &amp; Stock</th>
<th className="py-3 px-5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider w-1/4">Constraints</th>
<th className="py-3 px-5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="py-4 px-5 align-top">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Mystery Sample Kit</div>
<div className="text-[10px] text-slate-500 font-mono mt-0.5">SKU: SMPL_KIT_V2</div>
<span className="inline-flex mt-1.5 items-center rounded-sm bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-gray-500/10">FREE_PRODUCT</span>
</div>
</div>
</td>
<td className="py-4 px-5 align-top">
<div className="flex items-center gap-2">
<input className="w-14 px-2 py-1 text-sm text-right border border-gray-200 rounded focus:ring-1 focus:ring-slate-900 outline-none" type="number" value="5"/>
<span className="text-xs text-slate-400">%</span>
</div>
<div className="mt-2 text-[10px] text-slate-400">Very Rare</div>
</td>
<td className="py-4 px-5 align-top space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Cap</span>
<span className="font-mono text-slate-900">500 total</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Daily</span>
<span className="font-mono text-slate-900">10 / day</span>
</div>
<div className="flex gap-1.5 mt-1">
<span className="px-1.5 py-0.5 rounded text-[10px] border border-orange-200 bg-orange-50 text-orange-700 font-medium">Reserve Stock</span>
</div>
</td>
<td className="py-4 px-5 align-top">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full bg-white border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                                                    Min Cart: $50
                                                </span>
<span className="inline-flex items-center rounded-full bg-white border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                                                    1 per user
                                                </span>
</div>
</td>
<td className="py-4 px-5 align-top text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors p-1">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="py-4 px-5 align-top">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shrink-0">
<iconify-icon icon="solar:ticket-sale-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">20% Off Entire Order</div>
<div className="text-[10px] text-slate-500 font-mono mt-0.5">ID: DSC_20_WHEEL</div>
<span className="inline-flex mt-1.5 items-center rounded-sm bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-gray-500/10">DISCOUNTED_PRODUCT</span>
</div>
</div>
</td>
<td className="py-4 px-5 align-top">
<div className="flex items-center gap-2">
<input className="w-14 px-2 py-1 text-sm text-right border border-gray-200 rounded focus:ring-1 focus:ring-slate-900 outline-none" type="number" value="15"/>
<span className="text-xs text-slate-400">%</span>
</div>
</td>
<td className="py-4 px-5 align-top space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-500">Cap</span>
<span className="font-mono text-slate-900 text-slate-300">∞</span>
</div>
<div className="flex gap-1.5 mt-1">
<span className="px-1.5 py-0.5 rounded text-[10px] border border-gray-200 bg-gray-100 text-slate-600 font-medium">Digital Only</span>
</div>
</td>
<td className="py-4 px-5 align-top">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full bg-white border border-gray-200 px-2 py-0.5 text-[10px] font-medium text-slate-600">
<iconify-icon className="mr-1" icon="solar:clock-circle-linear" width="10"></iconify-icon>
                                                    Expires 10m
                                                </span>
<span className="inline-flex items-center rounded-full bg-red-50 border border-red-100 px-2 py-0.5 text-[10px] font-medium text-red-600">
                                                    Not Stackable
                                                </span>
</div>
</td>
<td className="py-4 px-5 align-top text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors p-1">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/80 transition-colors">
<td className="py-4 px-5 align-top">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded bg-gray-100 text-slate-600 flex items-center justify-center border border-gray-200 shrink-0">
<iconify-icon icon="solar:sticker-smile-circle-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Better Luck Next Time</div>
<div className="text-[10px] text-slate-500 font-mono mt-0.5">ID: NO_REWARD</div>
<span className="inline-flex mt-1.5 items-center rounded-sm bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-gray-500/10">NO_REWARD</span>
</div>
</div>
</td>
<td className="py-4 px-5 align-top">
<div className="flex items-center gap-2">
<input className="w-14 px-2 py-1 text-sm text-right border border-gray-200 rounded focus:ring-1 focus:ring-slate-900 outline-none" type="number" value="80"/>
<span className="text-xs text-slate-400">%</span>
</div>
<div className="mt-2 text-[10px] text-slate-400">Common</div>
</td>
<td className="py-4 px-5 align-top">
<div className="text-xs text-slate-400 italic">No inventory check required</div>
</td>
<td className="py-4 px-5 align-top">
<span className="text-xs text-slate-400">-</span>
</td>
<td className="py-4 px-5 align-top text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors p-1">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-xs text-slate-400">Showing 3 of 3 rewards</span>
<div className="flex gap-1">
<button className="p-1.5 rounded-md text-slate-400 hover:bg-gray-50 hover:text-slate-900 disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:bg-gray-50 hover:text-slate-900 disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-5">
<h2 className="text-sm font-semibold text-slate-900">Slice Configuration</h2>
<div className="flex items-center gap-2 text-xs text-slate-500">
<iconify-icon icon="solar:info-circle-linear" width="14"></iconify-icon>
<span>Visuals do not affect probability</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="border border-gray-200 rounded-lg p-3 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-blue-100 border-2 border-white shadow-sm"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">Slice 01</div>
</div>
<iconify-icon className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:pen-linear" width="14"></iconify-icon>
</div>
<div className="space-y-2">
<input className="w-full bg-white border border-gray-200 text-xs rounded px-2 py-1.5 focus:ring-1 focus:ring-slate-900 outline-none text-slate-700" type="text" value="Mystery Kit"/>
<div className="flex items-center gap-2">
<div className="flex-1 h-7 border border-gray-200 bg-white rounded flex items-center px-2 cursor-pointer">
<span className="text-[10px] text-slate-500">Icon:</span>
<iconify-icon className="ml-auto text-slate-900" icon="solar:box-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg p-3 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-purple-100 border-2 border-white shadow-sm"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">Slice 02</div>
</div>
<iconify-icon className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:pen-linear" width="14"></iconify-icon>
</div>
<div className="space-y-2">
<input className="w-full bg-white border border-gray-200 text-xs rounded px-2 py-1.5 focus:ring-1 focus:ring-slate-900 outline-none text-slate-700" type="text" value="20% OFF"/>
<div className="flex items-center gap-2">
<div className="flex-1 h-7 border border-gray-200 bg-white rounded flex items-center px-2 cursor-pointer">
<span className="text-[10px] text-slate-500">Icon:</span>
<iconify-icon className="ml-auto text-slate-900" icon="solar:ticket-sale-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-lg p-3 bg-gray-50/50 hover:bg-white hover:shadow-sm transition-all group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white shadow-sm"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-900">Slice 03</div>
</div>
<iconify-icon className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:pen-linear" width="14"></iconify-icon>
</div>
<div className="space-y-2">
<input className="w-full bg-white border border-gray-200 text-xs rounded px-2 py-1.5 focus:ring-1 focus:ring-slate-900 outline-none text-slate-700" type="text" value="Try Again"/>
<div className="flex items-center gap-2">
<div className="flex-1 h-7 border border-gray-200 bg-white rounded flex items-center px-2 cursor-pointer">
<span className="text-[10px] text-slate-500">Icon:</span>
<iconify-icon className="ml-auto text-slate-900" icon="solar:sad-circle-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="border border-dashed border-gray-300 rounded-lg p-3 flex flex-col items-center justify-center text-center cursor-pointer hover:border-slate-400 hover:bg-gray-50 transition-colors h-full min-h-[120px]">
<iconify-icon className="text-slate-400 mb-2" icon="solar:add-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-500">Add Visual Slice</span>
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
