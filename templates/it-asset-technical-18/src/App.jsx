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
      

<aside className="w-72 bg-[#0A0A0A] border-r border-[#222] flex flex-col h-full flex-shrink-0 z-10">

<div className="h-16 flex items-center px-6 border-b border-[#222]">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:database-linear"></iconify-icon>
</div>
<span className="text-lg tracking-tight font-medium text-white">TDMA</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">
<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Global Filters</h3>
<button className="text-xs text-gray-500 hover:text-white transition-colors">Reset</button>
</div>

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-[#111] border border-[#333] rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors" placeholder="Search assets, IDs..." type="text"/>
</div>
</div>

<div className="space-y-3">
<label className="text-sm text-gray-300">Asset Type</label>
<div className="relative">
<select className="w-full bg-[#111] border border-[#333] rounded-lg pl-3 pr-9 py-2 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors">
<option>All Types</option>
<option>Infrastructure</option>
<option>Application</option>
<option>Database</option>
<option>Network</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-3">
<label className="text-sm text-gray-300">Environment</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#222] text-white border border-[#333] hover:bg-[#333] transition-colors">PROD</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-transparent text-gray-400 border border-[#333] hover:text-white transition-colors">UAT</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-transparent text-gray-400 border border-[#333] hover:text-white transition-colors">DEV</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-transparent text-gray-400 border border-[#333] hover:text-white transition-colors">DR</button>
</div>
</div>

<div className="space-y-3">
<label className="text-sm text-gray-300">Priority</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] bg-[#111] group-hover:border-gray-400 flex items-center justify-center relative">
<div className="w-2 h-2 rounded-sm bg-red-500 absolute"></div>
</div>
<span className="text-sm text-gray-400 group-hover:text-gray-200">Critical</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] bg-[#111] group-hover:border-gray-400 flex items-center justify-center relative">
<div className="w-2 h-2 rounded-sm bg-orange-500 absolute"></div>
</div>
<span className="text-sm text-gray-400 group-hover:text-gray-200">High</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] bg-[#111] group-hover:border-gray-400 flex items-center justify-center relative">
</div>
<span className="text-sm text-gray-400 group-hover:text-gray-200">Medium</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded border border-[#444] bg-[#111] group-hover:border-gray-400 flex items-center justify-center relative">
</div>
<span className="text-sm text-gray-400 group-hover:text-gray-200">Low</span>
</label>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-sm text-gray-300">Min Debt Score</label>
<span className="text-xs text-orange-400 font-medium">65+</span>
</div>
<input max="100" min="0" type="range" value="65"/>
<div className="flex justify-between text-xs text-gray-500">
<span>0</span>
<span>100</span>
</div>
</div>

<div className="space-y-3">
<label className="text-sm text-gray-300">Action Required</label>
<div className="relative">
<select className="w-full bg-[#111] border border-[#333] rounded-lg pl-3 pr-9 py-2 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors">
<option>Decommission</option>
<option>Refactor</option>
<option>Upgrade</option>
<option>Migrate to Cloud</option>
<option>Accept Risk</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="p-6 border-t border-[#222]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#222] border border-[#333] flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-200">Gov Admin</div>
<div className="text-xs text-gray-500">IT Operations</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 px-8 flex items-center justify-between border-b border-[#222] flex-shrink-0 bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-20">
<div>
<h1 className="text-xl tracking-tight font-medium text-white">IT Asset &amp; Technical Debt</h1>
<p className="text-xs text-gray-400 mt-0.5">Enterprise portfolio monitoring and remediation tracking.</p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-[#111] border border-[#333] rounded-lg text-sm text-gray-300 cursor-pointer hover:border-gray-500 transition-colors">
<iconify-icon className="text-gray-500" icon="solar:calendar-linear"></iconify-icon>
<span>Last 30 Days</span>
<iconify-icon className="text-gray-500 ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-400 border-l border-[#333] pl-4">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    Synced just now
                    <button className="ml-2 hover:text-white transition-colors">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
<button className="bg-white text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Export Report
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -z-0"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-sm text-gray-400 font-medium">Total Assets</span>
<iconify-icon className="text-gray-500 text-lg" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between relative z-10">
<span className="text-2xl font-medium text-white tracking-tight">14,209</span>
<div className="flex items-center text-xs text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded-md border border-blue-500/20">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span className="ml-0.5">1.2%</span>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full -z-0"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-sm text-gray-400 font-medium">Assets at Risk</span>
<iconify-icon className="text-orange-500 text-lg" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between relative z-10">
<span className="text-2xl font-medium text-white tracking-tight">2,845</span>
<div className="flex items-center text-xs text-orange-400 bg-orange-500/10 px-1.5 py-0.5 rounded-md border border-orange-500/20">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span className="ml-0.5">4.3%</span>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full -z-0"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-sm text-gray-400 font-medium">Critical Debt Items</span>
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between relative z-10">
<span className="text-2xl font-medium text-white tracking-tight">412</span>
<div className="flex items-center text-xs text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md border border-emerald-500/20">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon>
<span className="ml-0.5">8.1%</span>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<span className="text-sm text-gray-400 font-medium">Avg Debt Score</span>
<iconify-icon className="text-gray-500 text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-medium text-white tracking-tight">68</span>
<span className="text-xs text-gray-500">/100</span>
</div>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
<div className="w-[68%] h-full bg-orange-500 rounded-full"></div>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors">
<div className="flex justify-between items-start">
<span className="text-sm text-gray-400 font-medium">Open Remediation Actions</span>
<iconify-icon className="text-blue-400 text-lg" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between">
<span className="text-xl font-medium text-white tracking-tight">1,154</span>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors">
<div className="flex justify-between items-start">
<span className="text-sm text-gray-400 font-medium">YTD Remediation</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between">
<span className="text-xl font-medium text-white tracking-tight">34%</span>
<div className="flex items-center text-xs text-gray-500">
                            Target: 50%
                        </div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors">
<div className="flex justify-between items-start">
<span className="text-sm text-gray-400 font-medium">High Priority Ratio</span>
<iconify-icon className="text-orange-400 text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between">
<span className="text-xl font-medium text-white tracking-tight">18.5%</span>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden flex">
<div className="w-[18.5%] h-full bg-orange-500"></div>
<div className="w-[81.5%] h-full bg-[#333]"></div>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-5 hover:border-[#333] transition-colors relative overflow-hidden">
<div className="absolute inset-0 border border-red-500/20 rounded-xl pointer-events-none"></div>
<div className="flex justify-between items-start">
<span className="text-sm text-gray-400 font-medium">SLA Breaches</span>
<iconify-icon className="text-red-500 text-lg" icon="solar:alarm-linear"></iconify-icon>
</div>
<div className="mt-4 flex items-end justify-between">
<span className="text-xl font-medium text-red-400 tracking-tight">27</span>
<div className="flex items-center text-xs text-red-400 bg-red-500/10 px-1.5 py-0.5 rounded-md">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
<span className="ml-0.5">12</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Technical Debt by Category</h3>
<button className="text-gray-500 hover:text-white"><iconify-icon icon="solar:menu-dots-linear"></iconify-icon></button>
</div>
<div className="space-y-4">

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-300">Legacy Infrastructure</span>
<span className="text-gray-400">4,200</span>
</div>
<div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
<div className="w-[75%] h-full bg-orange-500/80 rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-300">End-of-Life Software</span>
<span className="text-gray-400">3,150</span>
</div>
<div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
<div className="w-[55%] h-full bg-orange-400/80 rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-300">Architecture Flaws</span>
<span className="text-gray-400">1,890</span>
</div>
<div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
<div className="w-[35%] h-full bg-yellow-500/80 rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1.5">
<span className="text-gray-300">Security Vulnerabilities</span>
<span className="text-gray-400">1,200</span>
</div>
<div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
<div className="w-[20%] h-full bg-red-500/80 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Risk Exposure by Business Unit</h3>
<div className="text-xs text-gray-500 flex gap-3">
<span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500/80"></div> Critical</span>
<span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#222]"></div> Low</span>
</div>
</div>
<div className="flex-1 grid grid-cols-4 gap-2">

<div className="space-y-2 flex flex-col justify-end">
<div className="h-8 bg-red-500/80 rounded-md border border-red-500/20"></div>
<div className="h-12 bg-orange-500/60 rounded-md border border-orange-500/20"></div>
<div className="h-20 bg-[#222] rounded-md"></div>
<div className="text-center text-xs text-gray-500 mt-2">Retail</div>
</div>
<div className="space-y-2 flex flex-col justify-end">
<div className="h-16 bg-red-500/90 rounded-md border border-red-500/20"></div>
<div className="h-8 bg-orange-500/60 rounded-md border border-orange-500/20"></div>
<div className="h-12 bg-[#222] rounded-md"></div>
<div className="text-center text-xs text-gray-500 mt-2">Finance</div>
</div>
<div className="space-y-2 flex flex-col justify-end">
<div className="h-4 bg-red-500/40 rounded-md border border-red-500/20"></div>
<div className="h-10 bg-orange-500/40 rounded-md border border-orange-500/20"></div>
<div className="h-24 bg-[#222] rounded-md"></div>
<div className="text-center text-xs text-gray-500 mt-2">HR</div>
</div>
<div className="space-y-2 flex flex-col justify-end">
<div className="h-10 bg-red-500/70 rounded-md border border-red-500/20"></div>
<div className="h-16 bg-orange-500/70 rounded-md border border-orange-500/20"></div>
<div className="h-16 bg-[#222] rounded-md"></div>
<div className="text-center text-xs text-gray-500 mt-2">Ops</div>
</div>
</div>
</div>
</div>

<div className="bg-[#0A0A0A] border border-[#222] rounded-xl flex flex-col overflow-hidden">

<div className="p-4 border-b border-[#222] flex justify-between items-center bg-[#0d0d0d]">
<h3 className="text-sm font-medium text-white">Asset Inventory Details</h3>
<div className="flex gap-2">
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-[#222] rounded-md transition-colors">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
</button>
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-[#222] rounded-md transition-colors">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[1000px]">
<thead>
<tr className="bg-[#111] border-b border-[#222] text-xs text-gray-400 uppercase tracking-wider">
<th className="px-4 py-3 font-medium">Asset ID / Name</th>
<th className="px-4 py-3 font-medium">Category</th>
<th className="px-4 py-3 font-medium">Business Unit</th>
<th className="px-4 py-3 font-medium">Priority</th>
<th className="px-4 py-3 font-medium">Debt Score</th>
<th className="px-4 py-3 font-medium">Action Needed</th>
<th className="px-4 py-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-[#222]">

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-white">PRD-DB-CLUSTER-01</div>
<div className="text-xs text-gray-500 mt-0.5">Oracle 11g Core DB</div>
</td>
<td className="px-4 py-3 text-gray-300">Database</td>
<td className="px-4 py-3 text-gray-300">Finance</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Critical
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-white font-medium w-6">92</span>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
<div className="w-[92%] h-full bg-red-500"></div>
</div>
</div>
</td>
<td className="px-4 py-3">
<span className="text-gray-300">Upgrade (EOL)</span>
</td>
<td className="px-4 py-3 text-right">
<button className="text-xs text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-4">Plan Remediation</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-white">API-GATEWAY-V2</div>
<div className="text-xs text-gray-500 mt-0.5">Internal Routing Service</div>
</td>
<td className="px-4 py-3 text-gray-300">Application</td>
<td className="px-4 py-3 text-gray-300">Operations</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div> High
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-white font-medium w-6">78</span>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
<div className="w-[78%] h-full bg-orange-500"></div>
</div>
</div>
</td>
<td className="px-4 py-3">
<span className="text-gray-300">Refactor Codebase</span>
</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 text-xs text-orange-400">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> In Review
                                    </span>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-white">LEGACY-CRM-APP</div>
<div className="text-xs text-gray-500 mt-0.5">Monolithic Windows Server</div>
</td>
<td className="px-4 py-3 text-gray-300">Infrastructure</td>
<td className="px-4 py-3 text-gray-300">Retail</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div> Critical
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-white font-medium w-6">95</span>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
<div className="w-[95%] h-full bg-red-500"></div>
</div>
</div>
</td>
<td className="px-4 py-3">
<span className="text-gray-300">Decommission</span>
</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 text-xs text-blue-400">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon> Actioned
                                    </span>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-white">HR-PORTAL-WEB</div>
<div className="text-xs text-gray-500 mt-0.5">Frontend App React 16</div>
</td>
<td className="px-4 py-3 text-gray-300">Application</td>
<td className="px-4 py-3 text-gray-300">HR</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Medium
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-white font-medium w-6">45</span>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
<div className="w-[45%] h-full bg-yellow-500"></div>
</div>
</div>
</td>
<td className="px-4 py-3">
<span className="text-gray-300">Update Dependencies</span>
</td>
<td className="px-4 py-3 text-right">
<button className="text-xs text-gray-400 hover:text-white transition-colors">Ignore</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-white">AUTH-SERVICE-V4</div>
<div className="text-xs text-gray-500 mt-0.5">OAuth2 Microservice</div>
</td>
<td className="px-4 py-3 text-gray-300">Application</td>
<td className="px-4 py-3 text-gray-300">Security</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div> Low
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<span className="text-white font-medium w-6">12</span>
<div className="w-16 h-1.5 bg-[#222] rounded-full overflow-hidden">
<div className="w-[12%] h-full bg-emerald-500"></div>
</div>
</div>
</td>
<td className="px-4 py-3">
<span className="text-gray-500">Monitor</span>
</td>
<td className="px-4 py-3 text-right">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Compliant
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-[#222] flex justify-between items-center text-xs text-gray-500 bg-[#0d0d0d]">
<span>Showing 1 to 5 of 14,209 assets</span>
<div className="flex gap-1">
<button className="px-2 py-1 rounded bg-[#111] border border-[#333] hover:text-white disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 rounded bg-[#222] text-white border border-[#444]">1</button>
<button className="px-2 py-1 rounded bg-[#111] border border-[#333] hover:text-white">2</button>
<button className="px-2 py-1 rounded bg-[#111] border border-[#333] hover:text-white">3</button>
<span className="px-2 py-1">...</span>
<button className="px-2 py-1 rounded bg-[#111] border border-[#333] hover:text-white">Next</button>
</div>
</div>
</div>

<div className="h-4"></div>
</div>
</main>

    </>
  );
}
