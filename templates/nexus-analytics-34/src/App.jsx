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
      
<div className="flex h-screen w-full">

<aside className="w-64 h-full border-r border-white/5 flex flex-col justify-between bg-[#09090b] hidden md:flex z-50">
<div>

<div className="h-14 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tight">NEXUS</span>
</div>
</div>

<nav className="p-3 space-y-0.5">
<div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-white/5 rounded-md transition-all-200 group" href="#">
<iconify-icon height="16" icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
<span className="font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all-200 group" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:bar-chart-3" strokeWidth="1.5" width="16"></iconify-icon>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all-200 group" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
<span>Customers</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all-200 group" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:wallet" strokeWidth="1.5" width="16"></iconify-icon>
<span>Finance</span>
</a>
<div className="mt-6 px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Settings</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all-200 group" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:shield-check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Security</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-all-200 group" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:settings-2" strokeWidth="1.5" width="16"></iconify-icon>
<span>Preferences</span>
</a>
</nav>
</div>

<div className="p-3 border-t border-white/5">
<button className="flex items-center gap-3 w-full px-3 py-2 rounded-md hover:bg-white/5 transition-all-200 text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">alex@nexus.com</p>
</div>
<iconify-icon className="text-zinc-500" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#09090b] relative">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 z-10 bg-[#09090b]/80 backdrop-blur-md">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</button>
<nav className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Dashboard</span>
<iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="text-zinc-200 font-medium">Overview</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-white/5 border border-white/5 rounded-full pl-9 pr-4 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-white/20 focus:bg-white/10 w-48 transition-all placeholder:text-zinc-600" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-[10px] text-zinc-600 border border-white/10 rounded px-1">⌘K</span>
</div>
</div>
<button className="relative text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#09090b]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto z-10 p-6 sm:p-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-xl font-medium text-zinc-100 tracking-tight">Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Real-time insights into your platform's performance.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-white/5 rounded-md border border-white/5 p-1">
<button className="px-3 py-1 text-xs font-medium text-zinc-100 bg-white/10 rounded-sm shadow-sm">7d</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">30d</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">90d</button>
</div>
<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-md text-xs font-medium hover:bg-zinc-200 transition-colors">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                            Export
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-4 rounded-xl border border-white/5 bg-[#0e0e11] hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:dollar-sign" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                +12.5%
                                <iconify-icon className="ml-0.5" icon="lucide:arrow-up-right" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500">Total Revenue</p>
<h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">$45,231.89</h3>
</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-[#0e0e11] hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                +2.1%
                                <iconify-icon className="ml-0.5" icon="lucide:arrow-up-right" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500">Active Users</p>
<h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">12,345</h3>
</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-[#0e0e11] hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-rose-500 bg-rose-500/10 px-1.5 py-0.5 rounded">
                                -0.4%
                                <iconify-icon className="ml-0.5" icon="lucide:arrow-down-right" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500">Bounce Rate</p>
<h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">42.3%</h3>
</div>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-[#0e0e11] hover:border-white/10 transition-colors group">
<div className="flex items-start justify-between mb-4">
<div className="p-2 rounded-lg bg-white/5 text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                                +8.2%
                                <iconify-icon className="ml-0.5" icon="lucide:arrow-up-right" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500">Subscriptions</p>
<h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">+573</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 p-6 rounded-xl border border-white/5 bg-[#0e0e11]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-200">Revenue Over Time</h3>
<button className="text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</div>

<div className="h-64 flex items-end justify-between gap-2 mt-4 px-2">

<div className="w-full bg-zinc-800/30 rounded-sm h-[30%] hover:bg-indigo-500/80 transition-all duration-500 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$12k</div>
</div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[45%] hover:bg-indigo-500/80 transition-all duration-500 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$18k</div>
</div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[35%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[60%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[50%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[75%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[65%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[85%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[70%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[90%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[60%] hover:bg-indigo-500/80 transition-all duration-500 relative group"></div>
<div className="w-full bg-zinc-800/30 rounded-sm h-[95%] hover:bg-indigo-500/80 transition-all duration-500 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$42k</div>
</div>
</div>
<div className="flex justify-between text-[10px] text-zinc-600 mt-2 px-1 font-medium uppercase tracking-wider">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
<span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-[#0e0e11] flex flex-col">
<h3 className="text-sm font-medium text-zinc-200 mb-4">Storage Usage</h3>
<div className="flex-1 flex flex-col items-center justify-center relative">

<div className="w-40 h-40 rounded-full border-[6px] border-zinc-800 flex items-center justify-center relative">
<svg className="absolute inset-0 rotate-[-90deg]" height="100%" viewbox="0 0 160 160" width="100%">
<circle cx="80" cy="80" fill="none" r="70" stroke="#4f46e5" stroke-dasharray="440" stroke-dashoffset="110" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="text-center">
<span className="block text-2xl font-semibold text-white tracking-tight">75%</span>
<span className="text-xs text-zinc-500">Used</span>
</div>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<span className="text-zinc-400">Documents</span>
</div>
<span className="text-zinc-200 font-medium">124 GB</span>
</div>
<div className="flex justify-between items-center text-xs">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-zinc-700"></div>
<span className="text-zinc-400">Media</span>
</div>
<span className="text-zinc-200 font-medium">45 GB</span>
</div>
<div className="pt-4 border-t border-white/5 mt-2">
<button className="w-full py-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors text-center border border-indigo-500/20 bg-indigo-500/5 rounded-lg">Upgrade Plan</button>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-[#0e0e11] overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">Recent Transactions</h3>
<div className="flex items-center gap-2">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" icon="lucide:filter" width="12"></iconify-icon>
<select className="appearance-none bg-zinc-900 border border-white/10 text-xs text-zinc-400 rounded-md pl-7 pr-8 py-1.5 focus:outline-none focus:border-zinc-700 cursor-pointer">
<option>All Status</option>
<option>Completed</option>
<option>Pending</option>
</select>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 text-xs text-zinc-500">
<th className="px-6 py-3 font-medium font-normal">Transaction ID</th>
<th className="px-6 py-3 font-medium font-normal">Customer</th>
<th className="px-6 py-3 font-medium font-normal">Date</th>
<th className="px-6 py-3 font-medium font-normal">Amount</th>
<th className="px-6 py-3 font-medium font-normal">Status</th>
<th className="px-6 py-3 font-medium font-normal text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-white/5">
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3 text-zinc-300 font-mono text-xs">#TRX-9821</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center text-[10px] font-bold">JD</div>
<span className="text-zinc-300 text-xs">John Doe</span>
</div>
</td>
<td className="px-6 py-3 text-zinc-500 text-xs">Oct 24, 2023</td>
<td className="px-6 py-3 text-zinc-300 text-xs font-medium">$1,299.00</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3 text-zinc-300 font-mono text-xs">#TRX-9822</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-[10px] font-bold">AS</div>
<span className="text-zinc-300 text-xs">Sarah Smith</span>
</div>
</td>
<td className="px-6 py-3 text-zinc-500 text-xs">Oct 24, 2023</td>
<td className="px-6 py-3 text-zinc-300 text-xs font-medium">$849.50</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
<div className="w-1 h-1 rounded-full bg-amber-500 animate-pulse"></div>
                                            Processing
                                        </span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="group hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-3 text-zinc-300 font-mono text-xs">#TRX-9823</td>
<td className="px-6 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center text-[10px] font-bold">MK</div>
<span className="text-zinc-300 text-xs">Mike Kite</span>
</div>
</td>
<td className="px-6 py-3 text-zinc-500 text-xs">Oct 23, 2023</td>
<td className="px-6 py-3 text-zinc-300 text-xs font-medium">$2,450.00</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                            Completed
                                        </span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
