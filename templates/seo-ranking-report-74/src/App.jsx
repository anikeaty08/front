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
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
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
      
<div className="max-w-7xl mx-auto space-y-8">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-900 pb-6">
<div className="space-y-2">
<div className="flex items-center gap-3 text-zinc-500 mb-1">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
<span className="text-sm font-medium uppercase tracking-wider">takeoffmedia.de</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-white">Search Performance</h1>
<p className="text-lg text-zinc-400 font-light">Organic ranking report for high-value keywords.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-base text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors border border-transparent hover:border-zinc-800">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
<span>Oct 2023</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 text-base bg-white text-black rounded-md hover:bg-zinc-200 transition-colors font-medium">
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
<span>Export CSV</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-base text-zinc-400">Total Keywords</span>
<i className="w-5 h-5 text-zinc-600" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-white">458</span>
<span className="text-sm text-green-500 flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
<i className="w-3 h-3" data-lucide="trending-up" strokeWidth="1.5"></i>
                        +12
                    </span>
</div>
</div>

<div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-base text-zinc-400">Top 3 Rankings</span>
<i className="w-5 h-5 text-zinc-600" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-white">42</span>
<span className="text-sm text-zinc-500 font-light">Positions 1-3</span>
</div>
</div>

<div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-base text-zinc-400">Est. Monthly Vol</span>
<i className="w-5 h-5 text-zinc-600" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-white">28.4k</span>
<span className="text-sm text-zinc-500 font-light">Global Search</span>
</div>
</div>

<div className="p-6 rounded-lg bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-base text-zinc-400">Avg Position</span>
<i className="w-5 h-5 text-zinc-600" data-lucide="target" strokeWidth="1.5"></i>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-white">6.8</span>
<span className="text-sm text-green-500 flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">
<i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="1.5"></i>
                        0.4
                    </span>
</div>
</div>
</div>

<div className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/20">

<div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/40">
<div className="flex items-center gap-2 bg-black border border-zinc-800 rounded-md px-3 py-2 w-full max-w-sm focus-within:ring-1 focus-within:ring-zinc-700 transition-all">
<i className="w-5 h-5 text-zinc-500" data-lucide="search" strokeWidth="1.5"></i>
<input className="bg-transparent border-none outline-none text-base text-zinc-200 placeholder-zinc-600 w-full font-light" placeholder="Filter keywords..." type="text"/>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="filter" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors">
<i className="w-5 h-5" data-lucide="columns" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800 bg-zinc-900/50">
<th className="py-4 px-6 text-sm font-medium text-zinc-500 uppercase tracking-wider w-1/3">Keyword</th>
<th className="py-4 px-6 text-sm font-medium text-zinc-500 uppercase tracking-wider cursor-pointer hover:text-zinc-300">
<div className="flex items-center gap-2">Position <i className="w-3 h-3" data-lucide="arrow-down" strokeWidth="1.5"></i></div>
</th>
<th className="py-4 px-6 text-sm font-medium text-zinc-500 uppercase tracking-wider text-right">Local Vol</th>
<th className="py-4 px-6 text-sm font-medium text-zinc-500 uppercase tracking-wider text-right">Global Vol</th>
<th className="py-4 px-6 text-sm font-medium text-zinc-500 uppercase tracking-wider text-center">SERP Feature</th>
<th className="py-4 px-6 text-sm font-medium text-zinc-500 uppercase tracking-wider text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/60">

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">arcam av40 test</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">1</span>
<span className="text-xs text-green-500">No Change</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">10</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">10</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-yellow-500 mx-auto fill-yellow-500/20" data-lucide="star" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Top 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">heimkino bau qualität</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">1</span>
<span className="text-xs text-green-500">New</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">-</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">-</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="image" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Top 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">trinnov</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">2</span>
<span className="text-xs text-zinc-500">Was 6</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">590</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">5,400</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Top 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">kaleidescape</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">2</span>
<span className="text-xs text-zinc-500">Stable</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">320</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">12,100</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="video" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Top 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">jvc nz7</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">2</span>
<span className="text-xs text-green-500">▲ 1</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">70</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">1,600</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="search" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Top 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">stormaudio</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">2</span>
<span className="text-xs text-zinc-500">Stable</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">480</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">2,900</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="cpu" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">Top 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">heimkinos</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">6</span>
<span className="text-xs text-green-500">▲ 2</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">8,100</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">9,900</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="map-pin" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Page 1</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">audio control</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">6</span>
<span className="text-xs text-zinc-500">Stable</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">260</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">22,200</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="sliders" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">Page 1</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">heimkino leinwand kaufen</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">12</span>
<span className="text-xs text-red-400">▼ 1</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">590</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">720</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="shopping-cart" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">Page 2</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">tool time</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">28</span>
<span className="text-xs text-zinc-500">Stable</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">8,100</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">33,100</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="clock" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">Page 3</span>
</td>
</tr>

<tr className="group hover:bg-zinc-900/80 transition-colors">
<td className="py-5 px-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-base font-medium text-white group-hover:text-blue-400 transition-colors">bower wilkins</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex flex-col">
<span className="text-xl font-semibold text-white">29</span>
<span className="text-xs text-green-500">New</span>
</div>
</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">40,500</td>
<td className="py-5 px-6 text-right text-base text-zinc-300 font-light">450,000</td>
<td className="py-5 px-6 text-center">
<i className="w-5 h-5 text-zinc-600 mx-auto" data-lucide="music" strokeWidth="1.5"></i>
</td>
<td className="py-5 px-6 text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">Page 3</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between p-4 border-t border-zinc-800 bg-zinc-900/40">
<span className="text-base text-zinc-500">Showing 1 to 11 of 458 results</span>
<div className="flex items-center gap-2">
<button className="px-4 py-2 border border-zinc-800 rounded text-base text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-50 transition-colors">Previous</button>
<button className="px-4 py-2 border border-zinc-800 rounded text-base text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">Next</button>
</div>
</div>
</div>
</div>


    </>
  );
}
