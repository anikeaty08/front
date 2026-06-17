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
      

<header className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
<div className="flex gap-8 gap-x-8 gap-y-8 items-center">
<div className="text-xl font-semibold tracking-tighter text-zinc-100">NEXUS</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="text-zinc-100 transition-colors" href="#">Performance Overview</a>
<a className="hover:text-zinc-200 transition-colors" href="/campaign">Campaigns</a>
<a className="hover:text-zinc-200 transition-colors" href="/organic">Organic</a><a className="hover:text-zinc-200 transition-colors" href="/ads">Ads</a><a className="hover:text-zinc-200 transition-colors" href="/retarget">CRM</a>
</nav>
</div>
<div className="flex items-center gap-3">

<div className="relative group">
<button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Month to Date (Oct)</span>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<button className="flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-lg w-8 h-8 transition-colors">
<iconify-icon icon="solar:filter-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>

<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-semibold tracking-tight ml-2">
                    CX
                </div>
</div>
</div>
</header>
<main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div className="">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Digital Marketing Impact</h1>
<p className="text-sm text-zinc-400 mt-1">Connecting ad spend to business outcomes and revenue generation.</p>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-400">
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Live Data</span>
<span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-xs font-medium">USD</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

<div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-400">Total Ad Spend</span>
<iconify-icon className="text-zinc-500" icon="solar:wallet-money-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight">$245,000</div>
<div className="flex items-center gap-1 mt-1.5 text-xs text-rose-400">
<iconify-icon icon="solar:trend-up-linear" width="14"></iconify-icon>
<span className="font-medium">+12% vs last month</span>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-400">Attributed Revenue</span>
<iconify-icon className="text-zinc-500" icon="solar:dollar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight">$1,280,500</div>
<div className="flex items-center gap-1 mt-1.5 text-xs text-emerald-400">
<iconify-icon icon="solar:trend-up-linear" width="14"></iconify-icon>
<span className="font-medium">+24% vs last month</span>
</div>
</div>
</div>

<div className="bg-indigo-950/20 border border-indigo-500/30 rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 blur-2xl rounded-full"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<span className="text-xs font-medium text-indigo-300">Blended ROAS</span>
<iconify-icon className="text-indigo-400" icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="relative z-10">
<div className="text-3xl font-semibold tracking-tight text-indigo-100">5.2x</div>
<div className="flex items-center gap-1 mt-1 text-xs text-emerald-400">
<iconify-icon icon="solar:trend-up-linear" width="14"></iconify-icon>
<span className="font-medium">+0.4x vs target</span>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-400">Cost per Acquisition</span>
<iconify-icon className="text-zinc-500" icon="solar:user-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-2xl font-semibold tracking-tight">$142</div>
<div className="flex items-center gap-1 mt-1.5 text-xs text-emerald-400">
<iconify-icon icon="solar:trend-down-linear" width="14"></iconify-icon>
<span className="font-medium">-$12 vs last month</span>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-400">New Funded Accounts</span>
<iconify-icon className="text-zinc-500" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-2xl font-semibold tracking-tight">1,420</div>
<div className="flex items-center gap-1 mt-1.5 text-xs text-emerald-400">
<iconify-icon icon="solar:trend-up-linear" width="14"></iconify-icon>
<span className="font-medium">+15% vs last month</span>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/60 rounded-xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-zinc-400">Reactivated Traders</span>
<iconify-icon className="text-zinc-500" icon="solar:restart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="">
<div className="text-2xl font-semibold tracking-tight">305</div>
<div className="flex items-center gap-1 mt-1.5 text-xs text-emerald-400">
<iconify-icon icon="solar:trend-up-linear" width="14"></iconify-icon>
<span className="font-medium">+8% vs last month</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium tracking-tight">Acquisition Funnel</h2>
<iconify-icon className="text-zinc-500" icon="solar:funnel-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-between space-y-2 relative">

<div className="relative z-10">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-300">Impressions</span>
<span className="font-medium">1.2M</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 rounded-full w-full"></div>
</div>
</div>

<div className="flex justify-center -my-2 relative z-20">
<span className="bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 px-2 py-0.5 rounded-full font-medium">3.75% CTR</span>
</div>

<div className="relative z-10">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-300">Clicks</span>
<span className="font-medium">45,000</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 rounded-full" style={{width: '80%'}}></div>
</div>
</div>

<div className="flex justify-center -my-2 relative z-20">
<span className="bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 px-2 py-0.5 rounded-full font-medium">17.7% Conv.</span>
</div>

<div className="relative z-10">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-300">Leads (Signups)</span>
<span className="font-medium">8,000</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/40 rounded-full" style={{width: '50%'}}></div>
</div>
</div>

<div className="flex justify-center -my-2 relative z-20">
<span className="bg-zinc-800 border border-zinc-700 text-[10px] text-rose-400 px-2 py-0.5 rounded-full font-medium">50% Drop-off</span>
</div>

<div className="relative z-10">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-300">KYC Completed</span>
<span className="font-medium">4,000</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/60 rounded-full" style={{width: '35%'}}></div>
</div>
</div>

<div className="flex justify-center -my-2 relative z-20">
<span className="bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 px-2 py-0.5 rounded-full font-medium">35% Funded</span>
</div>

<div className="relative z-10">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-300">Funded Accounts</span>
<span className="font-medium">1,420</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500/80 rounded-full" style={{width: '20%'}}></div>
</div>
</div>

<div className="flex justify-center -my-2 relative z-20">
<span className="bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 px-2 py-0.5 rounded-full font-medium">63% Active</span>
</div>

<div className="relative z-10">
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-100 font-medium">Active Traders</span>
<span className="font-semibold text-emerald-400">900</span>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-6 flex flex-col gap-8">
<div className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight">Revenue Attribution Overview</h2>
<iconify-icon className="text-zinc-500" icon="solar:pie-chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>

<div className="">
<h3 className="text-sm font-medium text-zinc-400 mb-3">Revenue Origin</h3>

<div className="flex h-6 w-full rounded-md overflow-hidden mb-3">
<div className="bg-indigo-500" style={{width: '60%'}} title="New Customers: 60%"></div>
<div className="bg-violet-500" style={{width: '25%', borderLeft: '2px solid #18181b'}} title="Reactivated: 25%"></div>
<div className="bg-zinc-600" style={{width: '15%', borderLeft: '2px solid #18181b'}} title="Existing (Cross-sell): 15%"></div>
</div>

<div className="flex flex-wrap gap-4 text-xs">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-indigo-500"></span>
<span className="text-zinc-300">New (<span className="font-medium text-zinc-100">$768K</span>)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-violet-500"></span>
<span className="text-zinc-300">Reactivated (<span className="font-medium text-zinc-100">$320K</span>)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-zinc-600"></span>
<span className="text-zinc-300">Existing Cross-sell (<span className="font-medium text-zinc-100">$192K</span>)</span>
</div>
</div>
</div>
<div className="h-px w-full bg-zinc-800/60"></div>

<div>
<h3 className="text-sm font-medium text-zinc-400 mb-3">Product Conversion</h3>

<div className="flex h-6 w-full rounded-md overflow-hidden mb-3">
<div className="bg-emerald-500" style={{width: '45%'}} title="Equity Trading"></div>
<div className="bg-teal-600" style={{width: '30%', borderLeft: '2px solid #18181b'}} title="Mutual Funds"></div>
<div className="bg-cyan-700" style={{width: '15%', borderLeft: '2px solid #18181b'}} title="Derivatives"></div>
<div className="bg-zinc-600" style={{width: '10%', borderLeft: '2px solid #18181b'}} title="Structured Products"></div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span>
<span className="text-zinc-300">Equity</span>
</div>
<span className="font-medium text-zinc-100 pl-4">45%</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-teal-600"></span>
<span className="text-zinc-300">Mutual Funds</span>
</div>
<span className="font-medium text-zinc-100 pl-4">30%</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-cyan-700"></span>
<span className="text-zinc-300">Derivatives</span>
</div>
<span className="font-medium text-zinc-100 pl-4">15%</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-zinc-600"></span>
<span className="text-zinc-300">Structured</span>
</div>
<span className="font-medium text-zinc-100 pl-4">10%</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl overflow-hidden">
<div className="p-6 border-b border-zinc-800/60 flex items-center justify-between">
<div>
<h2 className="text-base font-medium tracking-tight">Channel Performance</h2>
<p className="text-xs text-zinc-400 mt-1">Detailed breakdown of acquisition metrics by channel.</p>
</div>
<button className="text-xs font-medium text-zinc-300 hover:text-zinc-100 flex items-center gap-1 transition-colors">
                    Export <iconify-icon icon="solar:download-linear" width="14"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-900/50 text-xs text-zinc-400 font-medium">
<th className="py-3 px-6 font-medium">Channel</th>
<th className="py-3 px-6 font-medium text-right">Spend</th>
<th className="py-3 px-6 font-medium text-right">Leads</th>
<th className="py-3 px-6 font-medium text-right">Funded Acc.</th>
<th className="py-3 px-6 font-medium text-right">Revenue</th>
<th className="py-3 px-6 font-medium text-right">CPA</th>
<th className="py-3 px-6 font-medium text-right">ROAS</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-800/60">
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#1877F2]/10 text-[#1877F2]">
<iconify-icon icon="solar:global-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Meta Ads</span>
</div>
</td>
<td className="py-3 px-6 text-right text-zinc-300">$85,000</td>
<td className="py-3 px-6 text-right text-zinc-300">4,200</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">650</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">$420,500</td>
<td className="py-3 px-6 text-right text-zinc-300">$130</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-xs font-medium">4.9x</span>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#EA4335]/10 text-[#EA4335]">
<iconify-icon icon="solar:magnifer-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Google Search</span>
</div>
</td>
<td className="py-3 px-6 text-right text-zinc-300">$110,000</td>
<td className="py-3 px-6 text-right text-zinc-300">2,100</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">580</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">$610,000</td>
<td className="py-3 px-6 text-right text-zinc-300">$189</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-xs font-medium">5.5x</span>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#00C300]/10 text-[#00C300]">
<iconify-icon icon="solar:chat-round-dots-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">LINE / CRM</span>
</div>
</td>
<td className="py-3 px-6 text-right text-zinc-300">$15,000</td>
<td className="py-3 px-6 text-right text-zinc-300">-</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">120</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">$180,000</td>
<td className="py-3 px-6 text-right text-zinc-300">$125</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center justify-center bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-xs font-medium">12.0x</span>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-purple-500/10 text-purple-400">
<iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Influencer/KOL</span>
</div>
</td>
<td className="py-3 px-6 text-right text-zinc-300">$35,000</td>
<td className="py-3 px-6 text-right text-zinc-300">1,500</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">70</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">$70,000</td>
<td className="py-3 px-6 text-right text-rose-400">$500</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center justify-center bg-rose-500/10 text-rose-400 border border-rose-500/20 px-2 py-0.5 rounded text-xs font-medium">2.0x</span>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors group">
<td className="py-3 px-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-zinc-700/50 text-zinc-300">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
</div>
<span className="font-medium text-zinc-200">Organic / SEO</span>
</div>
</td>
<td className="py-3 px-6 text-right text-zinc-300">$0</td>
<td className="py-3 px-6 text-right text-zinc-300">200</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">50</td>
<td className="py-3 px-6 text-right text-zinc-100 font-medium">$150,000</td>
<td className="py-3 px-6 text-right text-zinc-300">$0</td>
<td className="py-3 px-6 text-right text-zinc-400 font-medium">
                                N/A
                            </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-base font-medium tracking-tight">Revenue Retention by Cohort (Payback)</h2>
<p className="text-xs text-zinc-400 mt-1">Cumulative revenue as percentage of acquisition cost.</p>
</div>

<div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-100 shadow-sm">Payback %</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-zinc-400 hover:text-zinc-200">LTV ($)</button>
</div>
</div>
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-zinc-400 font-medium border-b border-zinc-800/60">
<th className="py-2 px-4 font-medium w-32">Cohort</th>
<th className="py-2 px-4 font-medium text-center">Month 1</th>
<th className="py-2 px-4 font-medium text-center">Month 2</th>
<th className="py-2 px-4 font-medium text-center">Month 3</th>
<th className="py-2 px-4 font-medium text-center">Month 4</th>
<th className="py-2 px-4 font-medium text-center">Month 5</th>
<th className="py-2 px-4 font-medium text-center">Month 6</th>
</tr>
</thead>
<tbody className="text-sm">

<tr>
<td className="py-2 px-4 font-medium text-zinc-300">May 2023</td>
<td className="p-1"><div className="bg-emerald-500/20 text-emerald-100/70 text-xs py-1.5 text-center rounded">45%</div></td>
<td className="p-1"><div className="bg-emerald-500/40 text-emerald-100/80 text-xs py-1.5 text-center rounded">72%</div></td>
<td className="p-1"><div className="bg-emerald-500/60 text-emerald-50 text-xs py-1.5 text-center rounded">95%</div></td>
<td className="p-1"><div className="bg-emerald-500/80 text-white text-xs py-1.5 text-center rounded font-medium">115%</div></td>
<td className="p-1"><div className="bg-emerald-500 text-white text-xs py-1.5 text-center rounded font-medium">130%</div></td>
<td className="p-1"><div className="bg-emerald-400 text-emerald-950 text-xs py-1.5 text-center rounded font-semibold">145%</div></td>
</tr>

<tr>
<td className="py-2 px-4 font-medium text-zinc-300">Jun 2023</td>
<td className="p-1"><div className="bg-emerald-500/20 text-emerald-100/70 text-xs py-1.5 text-center rounded">42%</div></td>
<td className="p-1"><div className="bg-emerald-500/40 text-emerald-100/80 text-xs py-1.5 text-center rounded">68%</div></td>
<td className="p-1"><div className="bg-emerald-500/50 text-emerald-50 text-xs py-1.5 text-center rounded">85%</div></td>
<td className="p-1"><div className="bg-emerald-500/70 text-white text-xs py-1.5 text-center rounded font-medium">102%</div></td>
<td className="p-1"><div className="bg-emerald-500/90 text-white text-xs py-1.5 text-center rounded font-medium">120%</div></td>
<td className="p-1"><div className="bg-zinc-800/30 text-zinc-500 text-xs py-1.5 text-center rounded border border-zinc-800 border-dashed">-</div></td>
</tr>

<tr>
<td className="py-2 px-4 font-medium text-zinc-300">Jul 2023</td>
<td className="p-1"><div className="bg-emerald-500/30 text-emerald-100/80 text-xs py-1.5 text-center rounded">50%</div></td>
<td className="p-1"><div className="bg-emerald-500/50 text-emerald-50 text-xs py-1.5 text-center rounded">80%</div></td>
<td className="p-1"><div className="bg-emerald-500/70 text-white text-xs py-1.5 text-center rounded font-medium">105%</div></td>
<td className="p-1"><div className="bg-emerald-500/80 text-white text-xs py-1.5 text-center rounded font-medium">118%</div></td>
<td className="p-1"><div className="bg-zinc-800/30 text-zinc-500 text-xs py-1.5 text-center rounded border border-zinc-800 border-dashed">-</div></td>
<td className="p-1"><div className="bg-zinc-800/30 text-zinc-500 text-xs py-1.5 text-center rounded border border-zinc-800 border-dashed">-</div></td>
</tr>

<tr>
<td className="py-2 px-4 font-medium text-zinc-300">Aug 2023</td>
<td className="p-1"><div className="bg-emerald-500/20 text-emerald-100/70 text-xs py-1.5 text-center rounded">38%</div></td>
<td className="p-1"><div className="bg-emerald-500/30 text-emerald-100/80 text-xs py-1.5 text-center rounded">55%</div></td>
<td className="p-1"><div className="bg-emerald-500/40 text-emerald-50 text-xs py-1.5 text-center rounded">75%</div></td>
<td className="p-1"><div className="bg-zinc-800/30 text-zinc-500 text-xs py-1.5 text-center rounded border border-zinc-800 border-dashed">-</div></td>
<td className="p-1"><div className="bg-zinc-800/30 text-zinc-500 text-xs py-1.5 text-center rounded border border-zinc-800 border-dashed">-</div></td>
<td className="p-1"><div className="bg-zinc-800/30 text-zinc-500 text-xs py-1.5 text-center rounded border border-zinc-800 border-dashed">-</div></td>
</tr>
</tbody>
</table>
</div>
<div className="mt-3 flex items-center justify-end gap-2 text-[10px] text-zinc-500">
<span>Legend:</span>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-emerald-500/20"></span> &lt; 50%</div>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-emerald-500/60"></span> 50-100%</div>
<div className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-emerald-500"></span> &gt; 100% (Profitable)</div>
</div>
</div>
</main>

    </>
  );
}
