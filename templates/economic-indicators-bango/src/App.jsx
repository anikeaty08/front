import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen w-full">

<aside className="w-64 flex-shrink-0 border-r border-white/5 bg-zinc-950/50 flex flex-col justify-between hidden md:flex">
<div className="flex flex-col h-full">

<div className="h-14 flex items-center px-5 border-b border-white/5">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-indigo-600 rounded-sm flex items-center justify-center shadow-lg shadow-indigo-500/20">
<div className="w-2.5 h-2.5 bg-white rounded-full"></div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">InvestOS</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-3 space-y-6">

<div>
<div className="px-2 text-[10px] font-semibold text-zinc-500 mb-2 uppercase tracking-wider">ISM Report Tabs</div>
<nav className="space-y-0.5">

<a className="flex items-center justify-between px-2 py-1.5 text-sm text-white bg-white/5 border border-white/5 rounded-md transition-all font-medium shadow-sm" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-400" data-lucide="activity"></i>
                                    ISM Manufacturing
                                </div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
</a>

<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="trending-up"></i>
                                New Orders
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="factory"></i>
                                Production
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="users"></i>
                                Employment
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="truck"></i>
                                Supplier Deliveries
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="package"></i>
                                Inventories
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="dollar-sign"></i>
                                Prices
                            </a>
</nav>
</div>

<div>
<div className="px-2 text-[10px] font-semibold text-zinc-500 mb-2 uppercase tracking-wider">Context</div>
<nav className="space-y-0.5">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="bar-chart-2"></i>
                                SPX Overlay
                            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors group" href="#">
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" data-lucide="scale"></i>
                                ISM vs GDP
                            </a>
</nav>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-zinc-950/30">
<div className="flex items-center gap-3 px-2 py-2">
<div className="relative">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 font-medium">System Status</span>
<span className="text-[10px] text-zinc-600">FRED API: Connected</span>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-black">

<header className="h-14 flex-shrink-0 border-b border-white/5 bg-zinc-900/40 backdrop-blur-md flex items-center justify-between px-6 z-20">
<div className="flex items-center gap-4">
<h1 className="text-white font-semibold tracking-tight text-sm">ISM Manufacturing PMI</h1>
<div className="h-4 w-px bg-white/10"></div>
<span className="text-xs text-zinc-500 font-mono">FRED ID: NAPM</span>
</div>
<div className="flex items-center gap-3">

<div className="bg-zinc-900 border border-white/10 rounded-lg p-0.5 flex">
<button className="px-3 py-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors">6M</button>
<button className="px-3 py-1 text-[11px] font-medium text-white bg-zinc-800 shadow-sm rounded-md border border-white/5">1Y</button>
<button className="px-3 py-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors">5Y</button>
<button className="px-3 py-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors">10Y</button>
<button className="px-3 py-1 text-[11px] font-medium text-zinc-400 hover:text-white transition-colors">20Y</button>
</div>
<button className="p-1.5 text-zinc-400 hover:text-white border border-transparent hover:border-white/10 rounded-md transition-all">
<i className="w-4 h-4" data-lucide="settings"></i>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
<div className="max-w-6xl mx-auto space-y-6">

<section className="glass-panel rounded-xl p-1 shadow-2xl shadow-black/50">
<div className="bg-zinc-900/50 rounded-lg p-5 border border-white/5">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">Historical Performance</h2>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold text-white tracking-tight">47.8</span>
<span className="text-sm font-medium text-rose-400 bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20">
                                            -1.3 (Month/Month)
                                        </span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
<span className="text-[10px] text-indigo-300 font-medium">Official FRED Data</span>
</div>
</div>
</div>

<div className="relative w-full h-64">
<svg className="w-full h-full overflow-visible" viewbox="0 0 1000 250">

<line stroke="#27272a" strokeWidth="1" x1="0" x2="1000" y1="200" y2="200"></line>
<line stroke="#27272a" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="150" y2="150"></line>
<line stroke="#27272a" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
<line stroke="#27272a" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="1000" y1="50" y2="50"></line>

<line stroke="#71717a" strokeWidth="1" x1="0" x2="1000" y1="100" y2="100"></line>
<text className="text-[10px] fill-zinc-400 font-mono" x="1005" y="103">50.0</text>

<path d="M0,130 Q100,120 200,90 T400,85 T600,110 T800,125 T1000,135" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="2"></path>
<defs>
<lineargradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,130 Q100,120 200,90 T400,85 T600,110 T800,125 T1000,135 V200 H0 Z" fill="url(#areaGradient)" stroke="none"></path>

<circle className="fill-black stroke-white stroke-2" cx="800" cy="125" r="4"></circle>

<g transform="translate(740, 70)">
<rect fill="#18181b" height="40" rx="4" stroke="#3f3f46" width="120"></rect>
<text className="text-[10px] fill-zinc-400" x="10" y="16">Feb 2024</text>
<text className="text-xs fill-white font-bold" x="10" y="30">47.8 (Contraction)</text>
</g>
</svg>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<section className="lg:col-span-2 relative group">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
<div className="relative bg-zinc-900 border border-white/10 rounded-xl p-6 h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-indigo-500/10 rounded-md border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="sparkles"></i>
</div>
<h3 className="text-sm font-semibold text-white">Current State Analysis</h3>
</div>
<span className="text-[10px] text-zinc-500 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                                            Updated via OpenAI: 2m ago
                                        </span>
</div>
<div className="space-y-3">
<p className="text-sm text-zinc-300 leading-relaxed font-light">
<span className="text-indigo-300 font-medium">Manufacturing activity is weakening.</span> 
                                            Based on the last 12 months of ISM values, the sector has remained below the 50.0 threshold for 16 consecutive months. The latest reading of 47.8 indicates a slight acceleration in contraction compared to the previous month.
                                        </p>
<p className="text-sm text-zinc-300 leading-relaxed font-light">
                                            Inventory levels remain low, suggesting companies are hesitant to restock amidst demand uncertainty. Supplier deliveries have quickened, a classic sign of reduced order volumes.
                                        </p>
</div>
</div>
<div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-500 uppercase tracking-wide font-medium">AI Model:</span>
<span className="text-[10px] text-zinc-400 bg-zinc-800 px-1.5 py-0.5 rounded">GPT-4-Turbo</span>
</div>
<button className="flex items-center gap-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw"></i>
                                        Regenerate Summary
                                    </button>
</div>
</div>
</section>

<section className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 h-full">
<h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-500" data-lucide="book-open"></i>
                                About Indicator
                            </h3>
<div className="space-y-4">
<p className="text-xs text-zinc-400 leading-relaxed">
                                    The ISM Manufacturing Index is based on a survey of 300 manufacturing firms by the Institute for Supply Management. It monitors employment, production, inventories, new orders, and supplier deliveries.
                                </p>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">Source</span>
<span className="text-zinc-300">Institute for Supply Management</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">Release Frequency</span>
<span className="text-zinc-300">Monthly</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">Importance</span>
<span className="text-yellow-500/80 font-medium">High Impact</span>
</div>
</div>
</div>
</section>
</div>

<section className="space-y-4">
<div className="flex items-center justify-between px-1">
<h3 className="text-sm font-medium text-white">Monthly Heatmap</h3>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<span className="text-[10px] text-zinc-500">&lt; 45 (Deep Contraction)</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-[10px] text-zinc-500">45-50 (Warning)</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-[10px] text-zinc-500">&gt; 50 (Expansion)</span>
</div>
</div>
</div>
<div className="border border-white/5 rounded-xl bg-zinc-900/30 overflow-hidden shadow-lg">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-[11px] uppercase tracking-wider text-zinc-500">
<th className="p-3 font-medium bg-zinc-900/80 sticky left-0 z-10 w-20">Year</th>
<th className="p-3 font-medium text-center w-1/12">Jan</th>
<th className="p-3 font-medium text-center w-1/12">Feb</th>
<th className="p-3 font-medium text-center w-1/12">Mar</th>
<th className="p-3 font-medium text-center w-1/12">Apr</th>
<th className="p-3 font-medium text-center w-1/12">May</th>
<th className="p-3 font-medium text-center w-1/12">Jun</th>
<th className="p-3 font-medium text-center w-1/12">Jul</th>
<th className="p-3 font-medium text-center w-1/12">Aug</th>
<th className="p-3 font-medium text-center w-1/12">Sep</th>
<th className="p-3 font-medium text-center w-1/12">Oct</th>
<th className="p-3 font-medium text-center w-1/12">Nov</th>
<th className="p-3 font-medium text-center w-1/12">Dec</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-xs font-medium font-mono">

<tr className="hover:bg-white/5 transition-colors">
<td className="p-3 text-zinc-400 bg-zinc-900/50 sticky left-0 border-r border-white/5">2024</td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">50.3</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">47.8</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-zinc-800/20 text-zinc-700">-</div></td>
</tr>

<tr className="hover:bg-white/5 transition-colors">
<td className="p-3 text-zinc-400 bg-zinc-900/50 sticky left-0 border-r border-white/5">2023</td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">47.4</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">47.7</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">46.3</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">47.1</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">46.9</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">46.0</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">46.4</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">47.6</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">49.0</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">46.7</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20">46.7</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">47.4</div></td>
</tr>

<tr className="hover:bg-white/5 transition-colors">
<td className="p-3 text-zinc-400 bg-zinc-900/50 sticky left-0 border-r border-white/5">2022</td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">57.6</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">58.6</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">57.1</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">55.4</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">56.1</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">53.0</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">52.8</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">52.8</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">50.9</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">50.2</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">49.0</div></td>
<td className="p-1"><div className="h-8 w-full rounded flex items-center justify-center bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">48.4</div></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 hidden" id="settingsModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="document.getElementById('settingsModal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-white/10 rounded-xl p-6 w-[400px] shadow-2xl">
<h3 className="text-white font-medium mb-4">Indicator Settings</h3>
<div className="space-y-4">
<div>
<label className="text-xs text-zinc-400 block mb-1">AI Prompt Customization</label>
<textarea className="w-full bg-black/50 border border-white/10 rounded-md p-2 text-xs text-white h-24" placeholder="Enter custom context for AI..."></textarea>
</div>
<div>
<label className="text-xs text-zinc-400 block mb-1">Thresholds (Heatmap)</label>
<div className="grid grid-cols-2 gap-2">
<input className="bg-black/50 border border-white/10 rounded p-2 text-xs text-white" placeholder="Low (&lt;45)" type="number"/>
<input className="bg-black/50 border border-white/10 rounded p-2 text-xs text-white" placeholder="High (&gt;50)" type="number"/>
</div>
</div>
<button className="w-full bg-white text-black text-xs font-bold py-2 rounded mt-2">Save Changes</button>
</div>
</div>
</div>


    </>
  );
}
