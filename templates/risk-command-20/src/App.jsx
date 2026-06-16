import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 bg-slate-900/50 border-r border-slate-800 flex flex-col h-full z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-800">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl text-indigo-400" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium tracking-tight">RCC</span>
</div>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">
<div className="flex items-center justify-between text-white mb-2">
<span className="text-base font-medium tracking-tight">Filters</span>
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">AUM Segment</label>
<div className="space-y-1">
<label className="flex items-center gap-2 cursor-pointer hover:text-slate-200 transition-colors">
<input checked="" className="accent-indigo-500 w-3.5 h-3.5 rounded border-slate-700 bg-slate-800" type="checkbox"/>
<span>High (&gt;50M)</span>
</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-slate-200 transition-colors">
<input checked="" className="accent-indigo-500 w-3.5 h-3.5 rounded border-slate-700 bg-slate-800" type="checkbox"/>
<span>Medium (10M-50M)</span>
</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-slate-200 transition-colors">
<input className="accent-indigo-500 w-3.5 h-3.5 rounded border-slate-700 bg-slate-800" type="checkbox"/>
<span>Low (&lt;10M)</span>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Product Focus</label>
<select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-slate-300 outline-none focus:border-indigo-500/50 appearance-none cursor-pointer">
<option>All Products</option>
<option>Equities Only</option>
<option>TFEX Only</option>
</select>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Risk Level</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 rounded-md bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-medium hover:bg-red-500/20 transition-colors">High</button>
<button className="px-3 py-1 rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-medium hover:bg-orange-500/20 transition-colors">Medium</button>
<button className="px-3 py-1 rounded-md bg-slate-800 text-slate-400 border border-slate-700 text-xs font-medium hover:bg-slate-700 transition-colors">Low</button>
</div>
</div>

<div className="space-y-4 pt-2 border-t border-slate-800/50">
<div className="space-y-2">
<div className="flex justify-between items-center text-xs">
<label className="font-medium text-slate-500 uppercase tracking-wider">EE % Threshold</label>
<span className="text-white font-medium">&gt; 20%</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value="20"/>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-xs">
<label className="font-medium text-slate-500 uppercase tracking-wider">Margin Util Limit</label>
<span className="text-white font-medium">&gt; 70%</span>
</div>
<input className="w-full appearance-none bg-transparent" max="100" min="0" type="range" value="70"/>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-medium tracking-tight text-xs border border-indigo-500/30">
                    RM
                </div>
<div>
<div className="text-white font-medium text-xs">Risk Manager</div>
<div className="text-xs text-slate-500">Active Session</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-20 flex-shrink-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-10 px-6 flex items-center">
<div className="grid grid-cols-6 gap-6 w-full divide-x divide-slate-800/50">

<div className="flex flex-col justify-center px-4 first:pl-0">
<div className="text-xs text-slate-500 font-medium mb-1">Total AUM</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-white tracking-tight">฿42.8B</span>
<span className="flex items-center text-emerald-400 text-xs">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon> 1.2%
                        </span>
</div>
</div>

<div className="flex flex-col justify-center px-4">
<div className="text-xs text-slate-500 font-medium mb-1">Total EE (THB)</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-white tracking-tight">฿8.4B</span>
</div>
</div>

<div className="flex flex-col justify-center px-4">
<div className="text-xs text-slate-500 font-medium mb-1">Average EE (%)</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-white tracking-tight">19.6%</span>
<span className="flex items-center text-red-400 text-xs">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2"></iconify-icon> 2.1%
                        </span>
</div>
</div>

<div className="flex flex-col justify-center px-4">
<div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
                        High-Risk Clients <iconify-icon className="text-slate-600" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-red-400 tracking-tight">142</span>
</div>
</div>

<div className="flex flex-col justify-center px-4">
<div className="text-xs text-slate-500 font-medium mb-1">TFEX Margin Call Risk</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-orange-400 tracking-tight">38</span>
<span className="text-xs text-slate-500 ml-1">accounts</span>
</div>
</div>

<div className="flex flex-col justify-center px-4">
<div className="text-xs text-slate-500 font-medium mb-1">High Margin Util (&gt;70%)</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-white tracking-tight">85</span>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="grid grid-cols-12 gap-6 max-w-[1600px] mx-auto">

<div className="col-span-9 flex flex-col gap-6">

<section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-sm">
<div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
<h2 className="text-base font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:graph-up-linear"></iconify-icon> Equity Risk Exposure
                            </h2>
<button className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                                View Full Report <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex h-64">

<div className="w-1/3 p-5 border-r border-slate-800/50 flex flex-col">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">EE % Distribution</h3>
<div className="flex-1 flex items-end gap-2 pb-2">

<div className="w-full flex flex-col items-center gap-1 group">
<div className="w-full bg-emerald-500/20 rounded-t-md h-[40%] group-hover:bg-emerald-500/30 transition-colors relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">840</div>
</div>
<span className="text-xs text-slate-500 text-[10px]">0-10</span>
</div>
<div className="w-full flex flex-col items-center gap-1 group">
<div className="w-full bg-indigo-500/20 rounded-t-md h-[70%] group-hover:bg-indigo-500/30 transition-colors relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">1.2k</div>
</div>
<span className="text-xs text-slate-500 text-[10px]">10-20</span>
</div>
<div className="w-full flex flex-col items-center gap-1 group">
<div className="w-full bg-orange-500/40 border-t border-orange-500/50 rounded-t-md h-[35%] group-hover:bg-orange-500/50 transition-colors relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">450</div>
</div>
<span className="text-xs text-slate-500 text-[10px]">20-30</span>
</div>
<div className="w-full flex flex-col items-center gap-1 group">
<div className="w-full bg-red-500/60 border-t border-red-500 rounded-t-md h-[15%] group-hover:bg-red-500/80 transition-colors relative shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">142</div>
</div>
<span className="text-xs text-slate-500 text-[10px]">&gt;30%</span>
</div>
</div>
</div>

<div className="w-2/3 overflow-auto">
<table className="w-full text-left whitespace-nowrap">
<thead className="sticky top-0 bg-slate-900 border-b border-slate-800 z-10">
<tr>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Client</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">AUM (M)</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">EE %</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Margin Util</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Top 3 Conc.</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Flag</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
<td className="px-4 py-2.5">
<div className="text-white font-medium">Siriwong C.</div>
<div className="text-[10px] text-slate-500">IC: A092</div>
</td>
<td className="px-4 py-2.5">145.2</td>
<td className="px-4 py-2.5"><span className="text-red-400 font-medium bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20">34.2%</span></td>
<td className="px-4 py-2.5"><span className="text-red-400 font-medium">82.1%</span></td>
<td className="px-4 py-2.5">65% (AOT, PTT)</td>
<td className="px-4 py-2.5"><iconify-icon className="text-red-500 text-lg" icon="solar:danger-triangle-bold"></iconify-icon></td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
<td className="px-4 py-2.5">
<div className="text-white font-medium">Nattapong T.</div>
<div className="text-[10px] text-slate-500">IC: B114</div>
</td>
<td className="px-4 py-2.5">82.5</td>
<td className="px-4 py-2.5"><span className="text-red-400 font-medium bg-red-400/10 px-2 py-0.5 rounded border border-red-400/20">28.5%</span></td>
<td className="px-4 py-2.5">64.0%</td>
<td className="px-4 py-2.5">40% (DELTA)</td>
<td className="px-4 py-2.5"><iconify-icon className="text-orange-500 text-lg" icon="solar:danger-triangle-bold"></iconify-icon></td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
<td className="px-4 py-2.5">
<div className="text-white font-medium">Corporate Fund Alpha</div>
<div className="text-[10px] text-slate-500">IC: C001</div>
</td>
<td className="px-4 py-2.5">1,200.0</td>
<td className="px-4 py-2.5"><span className="text-orange-400 font-medium">21.0%</span></td>
<td className="px-4 py-2.5"><span className="text-red-400 font-medium">75.5%</span></td>
<td className="px-4 py-2.5">80% (GULF, ADVANC)</td>
<td className="px-4 py-2.5"><iconify-icon className="text-orange-500 text-lg" icon="solar:danger-triangle-bold"></iconify-icon></td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
<td className="px-4 py-2.5">
<div className="text-slate-300 font-medium">Vichai K.</div>
<div className="text-[10px] text-slate-500">IC: A092</div>
</td>
<td className="px-4 py-2.5">45.0</td>
<td className="px-4 py-2.5">14.2%</td>
<td className="px-4 py-2.5">45.0%</td>
<td className="px-4 py-2.5">25% (CPALL)</td>
<td className="px-4 py-2.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block ml-2"></span></td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group cursor-pointer">
<td className="px-4 py-2.5">
<div className="text-slate-300 font-medium">Pattara P.</div>
<div className="text-[10px] text-slate-500">IC: D442</div>
</td>
<td className="px-4 py-2.5">12.4</td>
<td className="px-4 py-2.5">18.5%</td>
<td className="px-4 py-2.5">68.2%</td>
<td className="px-4 py-2.5">30% (SCB)</td>
<td className="px-4 py-2.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block ml-2"></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-sm">
<div className="px-5 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
<h2 className="text-base font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:chart-square-linear"></iconify-icon> TFEX Derivatives Risk
                            </h2>
</div>
<div className="flex h-72">

<div className="w-1/3 p-5 border-r border-slate-800/50 flex flex-col gap-6">
<div>
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Buffer Distribution</h3>
<div className="space-y-2.5">
<div className="flex items-center gap-2">
<span className="text-xs w-10 text-slate-400">&lt; 10%</span>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" style={{width: '15%'}}></div>
</div>
<span className="text-xs text-white font-medium">38</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs w-10 text-slate-400">10-20%</span>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-400" style={{width: '35%'}}></div>
</div>
<span className="text-xs text-slate-300">142</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs w-10 text-slate-400">&gt; 20%</span>
<div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50" style={{width: '70%'}}></div>
</div>
<span className="text-xs text-slate-300">850</span>
</div>
</div>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Exposure by Underlying</h3>
<div className="flex items-center gap-4 flex-1">

<div className="w-16 h-16 rounded-full relative flex-shrink-0" style={{background: 'conic-gradient(#4f46e5 0% 45%, #eab308 45% 75%, #06b6d4 75% 90%, #64748b 90% 100%)'}}>
<div className="absolute inset-[4px] bg-slate-900 rounded-full"></div>
</div>
<div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px]">
<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500 block"></span>SET50</div>
<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 block"></span>Gold</div>
<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500 block"></span>USD</div>
<div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-slate-500 block"></span>Nasdaq</div>
</div>
</div>
</div>
</div>

<div className="w-2/3 overflow-auto">
<table className="w-full text-left whitespace-nowrap">
<thead className="sticky top-0 bg-slate-900 border-b border-slate-800 z-10">
<tr>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Client</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Notional (M)</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Buffer %</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Position</th>
<th className="px-4 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Underlying</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="hover:bg-slate-800/30 transition-colors bg-red-500/5 group">
<td className="px-4 py-2.5">
<div className="text-white font-medium">Krit M.</div>
<div className="text-[10px] text-slate-500">IC: T021</div>
</td>
<td className="px-4 py-2.5">45.0</td>
<td className="px-4 py-2.5"><span className="text-red-400 font-bold tracking-tight">4.2%</span> <span className="text-[10px] text-red-500 ml-1">CRITICAL</span></td>
<td className="px-4 py-2.5"><span className="text-red-400">Short</span> (120 ctrs)</td>
<td className="px-4 py-2.5">S50Z24</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group">
<td className="px-4 py-2.5">
<div className="text-white font-medium">Siriwong C.</div>
<div className="text-[10px] text-slate-500">IC: A092</div>
</td>
<td className="px-4 py-2.5">18.5</td>
<td className="px-4 py-2.5"><span className="text-red-400 font-medium">8.5%</span></td>
<td className="px-4 py-2.5"><span className="text-emerald-400">Long</span> (50 ctrs)</td>
<td className="px-4 py-2.5">GOZ24</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group">
<td className="px-4 py-2.5">
<div className="text-white font-medium">Wanna S.</div>
<div className="text-[10px] text-slate-500">IC: T105</div>
</td>
<td className="px-4 py-2.5">62.0</td>
<td className="px-4 py-2.5"><span className="text-orange-400 font-medium">12.1%</span></td>
<td className="px-4 py-2.5"><span className="text-emerald-400">Long</span> (300 ctrs)</td>
<td className="px-4 py-2.5">S50H25</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group">
<td className="px-4 py-2.5">
<div className="text-slate-300 font-medium">Global Macro Fund</div>
<div className="text-[10px] text-slate-500">IC: C002</div>
</td>
<td className="px-4 py-2.5">450.0</td>
<td className="px-4 py-2.5"><span className="text-orange-400 font-medium">18.4%</span></td>
<td className="px-4 py-2.5"><span className="text-red-400">Short</span> (2k ctrs)</td>
<td className="px-4 py-2.5">USDZ24</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors group">
<td className="px-4 py-2.5">
<div className="text-slate-300 font-medium">Danai P.</div>
<div className="text-[10px] text-slate-500">IC: T021</div>
</td>
<td className="px-4 py-2.5">8.2</td>
<td className="px-4 py-2.5">34.5%</td>
<td className="px-4 py-2.5"><span className="text-emerald-400">Long</span> (20 ctrs)</td>
<td className="px-4 py-2.5">S50Z24</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div className="px-5 py-3 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 to-red-950/20">
<h2 className="text-base font-medium text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:target-linear"></iconify-icon> Action Heatmap (Cross-Asset)
                            </h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left whitespace-nowrap">
<thead className="bg-slate-900/80 border-b border-slate-800">
<tr>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Client Name</th>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">IC Code</th>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Total AUM</th>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">EQ EE %</th>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">TFEX Buffer</th>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider">Risk Score</th>
<th className="px-5 py-3 text-[11px] font-medium text-slate-400 uppercase tracking-wider text-right">Action Required</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800/50">
<tr className="bg-red-500/5 hover:bg-red-500/10 transition-colors">
<td className="px-5 py-3 text-white font-medium">Siriwong C.</td>
<td className="px-5 py-3 text-slate-400 text-xs">A092</td>
<td className="px-5 py-3 text-white">฿163.7M</td>
<td className="px-5 py-3"><span className="text-red-400 font-medium">34.2%</span></td>
<td className="px-5 py-3"><span className="text-red-400 font-medium">8.5%</span></td>
<td className="px-5 py-3">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500" style={{width: '95%'}}></div>
</div>
<span className="text-xs text-red-400 font-bold">95</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-red-500 text-white shadow-[0_0_10px_rgba(239,68,68,0.3)] hover:bg-red-600 transition-colors inline-flex items-center gap-1.5">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Force Call Now
                                            </button>
</td>
</tr>
<tr className="bg-orange-500/5 hover:bg-orange-500/10 transition-colors">
<td className="px-5 py-3 text-white font-medium">Corporate Fund Alpha</td>
<td className="px-5 py-3 text-slate-400 text-xs">C001</td>
<td className="px-5 py-3 text-white">฿1,200.0M</td>
<td className="px-5 py-3"><span className="text-orange-400 font-medium">21.0%</span></td>
<td className="px-5 py-3 text-slate-500">-</td>
<td className="px-5 py-3">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500" style={{width: '78%'}}></div>
</div>
<span className="text-xs text-orange-400 font-medium">78</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                                                Close Monitor
                                            </button>
</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
<td className="px-5 py-3 text-slate-300 font-medium">Nattapong T.</td>
<td className="px-5 py-3 text-slate-400 text-xs">B114</td>
<td className="px-5 py-3 text-slate-300">฿82.5M</td>
<td className="px-5 py-3"><span className="text-red-400 font-medium">28.5%</span></td>
<td className="px-5 py-3"><span className="text-emerald-400">32.0%</span></td>
<td className="px-5 py-3">
<div className="flex items-center gap-2">
<div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500" style={{width: '65%'}}></div>
</div>
<span className="text-xs text-yellow-400 font-medium">65</span>
</div>
</td>
<td className="px-5 py-3 text-right">
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 transition-colors">
                                                Review EQ
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>

<div className="col-span-3 flex flex-col gap-6">

<section className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col h-[400px]">
<div className="px-4 py-3 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 sticky top-0">
<h2 className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                                Real-Time Alerts
                            </h2>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">

<div className="p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors border border-transparent hover:border-slate-700 flex gap-3">
<div className="mt-0.5 text-red-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-medium mb-1">Margin Call Triggered</div>
<div className="text-[11px] text-slate-400 leading-relaxed">Krit M. (T021) TFEX buffer dropped to <span className="text-red-400 font-medium">4.2%</span> on S50Z24 short positions.</div>
<div className="text-[9px] text-slate-500 mt-1.5 uppercase tracking-wider">Just now</div>
</div>
</div>

<div className="p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors border border-transparent hover:border-slate-700 flex gap-3">
<div className="mt-0.5 text-orange-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-medium mb-1">High Utilization</div>
<div className="text-[11px] text-slate-400 leading-relaxed">Siriwong C. (A092) margin utilization reached <span className="text-orange-400 font-medium">82.1%</span>. Concentrated in AOT.</div>
<div className="text-[9px] text-slate-500 mt-1.5 uppercase tracking-wider">12 mins ago</div>
</div>
</div>

<div className="p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors border border-transparent hover:border-slate-700 flex gap-3 opacity-75">
<div className="mt-0.5 text-orange-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-medium mb-1">Liquidity Warning</div>
<div className="text-[11px] text-slate-400 leading-relaxed">Corporate Fund Alpha holds &gt;10% of ADVA average daily volume.</div>
<div className="text-[9px] text-slate-500 mt-1.5 uppercase tracking-wider">45 mins ago</div>
</div>
</div>

<div className="p-3 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors border border-transparent hover:border-slate-700 flex gap-3 opacity-60">
<div className="mt-0.5 text-slate-500 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-slate-300 text-xs font-medium mb-1">System Update</div>
<div className="text-[11px] text-slate-400 leading-relaxed">End of day risk batch processing started.</div>
<div className="text-[9px] text-slate-500 mt-1.5 uppercase tracking-wider">2 hrs ago</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex-1 shadow-sm flex flex-col gap-4">
<h2 className="text-sm font-medium text-white tracking-tight">Market Stress Trends</h2>
<div className="flex-1 flex flex-col justify-around gap-4">

<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs text-slate-400">Avg EE % (7D)</span>
<span className="text-sm text-red-400 font-medium flex items-center"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Rising</span>
</div>

<div className="h-8 w-full border-b border-l border-slate-800 relative">
<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 L20,70 L40,85 L60,40 L80,50 L100,10" fill="none" stroke="#f87171" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs text-slate-400">High Risk Count</span>
<span className="text-sm text-white font-medium">142</span>
</div>

<div className="h-8 w-full flex items-end gap-1">
<div className="bg-slate-700 w-full h-[30%] rounded-t-sm"></div>
<div className="bg-slate-700 w-full h-[40%] rounded-t-sm"></div>
<div className="bg-slate-700 w-full h-[35%] rounded-t-sm"></div>
<div className="bg-orange-500/50 w-full h-[60%] rounded-t-sm"></div>
<div className="bg-red-500/80 w-full h-[85%] rounded-t-sm"></div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>

    </>
  );
}
