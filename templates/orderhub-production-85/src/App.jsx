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
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0b]/90 backdrop-blur-md">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="flex items-center gap-3 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-pink-600 to-purple-600 shadow-lg shadow-pink-900/20 group-hover:scale-105 transition-transform duration-300">
<i className="text-white w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
                        Order<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Hub</span>
</span>
</a>

<div className="hidden lg:flex items-center gap-6">
<a className="relative py-5 text-sm font-medium text-white transition-colors" href="#">
                        Orders
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
</a>
<a className="relative py-5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                        Overview
                    </a>
<a className="relative py-5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                        Clients
                    </a>
<a className="relative py-5 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                        Files
                    </a>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-3 text-xs text-zinc-500 border-r border-white/5 pr-4">
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div> System Operational</span>
</div>

<div className="relative group">
<button className="flex items-center gap-3 pl-2 focus:outline-none">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors">Operator Alex</p>
<p className="text-[10px] text-zinc-500">Admin</p>
</div>
<img alt="User" className="w-8 h-8 rounded-full ring-2 ring-white/5 group-hover:ring-pink-500/50 transition-all" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=b6e3f4"/>
<i className="w-3 h-3 text-zinc-500 group-hover:text-white transition-colors" data-lucide="chevron-down"></i>
</button>

<div className="absolute right-0 top-full mt-2 w-48 bg-[#141414] border border-white/10 rounded-xl shadow-xl shadow-black/50 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 transform origin-top-right z-50">
<div className="p-1">
<a className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="user"></i> Profile
                            </a>
<a className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="settings"></i> Settings
                            </a>
<div className="h-px bg-white/5 my-1"></div>
<a className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="log-out"></i> Log out
                            </a>
</div>
</div>
</div>
</div>
</div>
</nav>

<main className="flex-1 w-full max-w-[1600px] mx-auto px-6 py-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-[#141414] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-colors">
<div>
<p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Orders Today</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-white tracking-tight">24</span>
<span className="text-xs font-medium text-emerald-500 flex items-center gap-0.5"><i className="w-3 h-3" data-lucide="trending-up"></i> +12%</span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/10">
<i className="w-5 h-5 text-blue-400" data-lucide="shopping-cart"></i>
</div>
</div>
<div className="bg-[#141414] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-colors">
<div>
<p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Pending Action</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-white tracking-tight">7</span>
<span className="text-xs font-medium text-amber-500">Requires attention</span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/10">
<i className="w-5 h-5 text-amber-400" data-lucide="clock"></i>
</div>
</div>
<div className="bg-[#141414] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-colors">
<div>
<p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Completed</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-white tracking-tight">142</span>
<span className="text-xs font-medium text-zinc-500">This week</span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle"></i>
</div>
</div>
<div className="bg-[#141414] border border-white/5 p-4 rounded-xl flex items-center justify-between group hover:border-white/10 transition-colors">
<div>
<p className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Plate Area</p>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-white tracking-tight">42.8<span className="text-sm font-normal text-zinc-500">m²</span></span>
</div>
</div>
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/10">
<i className="w-5 h-5 text-purple-400" data-lucide="scaling"></i>
</div>
</div>
</div>

<div className="flex flex-col space-y-4 mb-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Production Orders</h1>
<p className="text-sm text-zinc-400 mt-1">Manage processing queue and specifications.</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#141414] border border-white/10 text-zinc-300 text-xs font-medium hover:bg-white/5 transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
                        Export
                    </button>
<button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white text-xs font-medium shadow-lg shadow-pink-900/20 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
                        New Job
                    </button>
</div>
</div>

<div className="flex flex-wrap items-center gap-3 bg-[#141414] border border-white/5 p-2 rounded-xl">
<div className="relative w-[240px]">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-black/20 border border-white/5 rounded-lg py-1.5 pl-9 pr-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-pink-500/50 transition-all" placeholder="Search orders..." type="text"/>
</div>
<div className="h-6 w-px bg-white/5 mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="filter"></i> Status
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="user"></i> Client
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-dashed border-white/10 text-xs font-medium text-zinc-400 hover:text-white hover:border-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="tag"></i> Service
                </button>
<div className="ml-auto flex items-center gap-3">
<button className="text-zinc-500 hover:text-white transition-colors" title="Grid View">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
<button className="text-pink-500" title="List View">
<i className="w-4 h-4" data-lucide="list"></i>
</button>
</div>
</div>
</div>

<div className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden shadow-2xl shadow-black/40">
<div className="overflow-x-auto min-h-[400px]">
<table className="w-full text-left border-collapse">
<thead className="sticky top-0 z-10 bg-[#141414]">
<tr className="border-b border-white/5">
<th className="py-3 pl-6 pr-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 w-[120px]">Status</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 w-[120px]">Added</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">ID</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Client</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Service</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">Dim. (WxH)</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 text-right w-[100px]">Actions</th>
<th className="py-3 px-4 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 text-center w-[60px]">Info</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-xs">

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
<span className="text-[10px] font-medium text-blue-400">Processing</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">-2h</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 24, 10:45</span></p>
<p className="text-[10px] text-zinc-400">Updated: <span className="text-white">10 mins ago</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8921</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-indigo-500 to-blue-500 text-[9px] flex items-center justify-center text-white font-bold">A</div>
                                Acme Corp
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">FLEXCEL</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">450 x 320</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Width:</span> <span className="text-white font-mono">450 mm</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Height:</span> <span className="text-white font-mono">320 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Area:</span> <span className="text-emerald-400 font-mono">0.144 m²</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Thick:</span> <span className="text-zinc-300 font-mono">1.14 mm</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">High priority label printing. Ensure strict registration on CMYK layers. Matte finish required.</p>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-emerald-400">Ready</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">-4h</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 24, 08:12</span></p>
<p className="text-[10px] text-zinc-400">Updated: <span className="text-white">1h ago</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8920</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-green-500 to-teal-500 text-[9px] flex items-center justify-center text-white font-bold">G</div>
                                Global Bev
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">CTP</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">1020 x 880</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Width:</span> <span className="text-white font-mono">1020 mm</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Height:</span> <span className="text-white font-mono">880 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Area:</span> <span className="text-emerald-400 font-mono">0.897 m²</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Thick:</span> <span className="text-zinc-300 font-mono">1.70 mm</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">Standard production run. Check overprint settings on black text layer.</p>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-[10px] font-medium text-amber-400">Pending</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">-5h</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 24, 07:30</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8919</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-orange-500 to-red-500 text-[9px] flex items-center justify-center text-white font-bold">P</div>
                                PrintFast Inc
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">PROOF</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">A3</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Format:</span> <span className="text-white font-mono">ISO A3</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Dim:</span> <span className="text-white font-mono">297 x 420 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Type:</span> <span className="text-amber-400 font-mono">Digital Proof</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">Digital proof only. Do not plate. Client approval needed before proceeding.</p>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-500/10 border border-zinc-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-500"></span>
<span className="text-[10px] font-medium text-zinc-400">Shipped</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">Oct 23</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 23, 14:20</span></p>
<p className="text-[10px] text-zinc-400">Completed: <span className="text-white">Oct 23, 18:00</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8918</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-pink-500 to-rose-500 text-[9px] flex items-center justify-center text-white font-bold">S</div>
                                Studio 54
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">FLEXCEL</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">600 x 400</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Width:</span> <span className="text-white font-mono">600 mm</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Height:</span> <span className="text-white font-mono">400 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Area:</span> <span className="text-emerald-400 font-mono">0.240 m²</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Thick:</span> <span className="text-zinc-300 font-mono">1.14 mm</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">Repeat order. Same specs as #ORD-7721.</p>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-emerald-400">Ready</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">Oct 23</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 23, 09:15</span></p>
<p className="text-[10px] text-zinc-400">Completed: <span className="text-white">Oct 23, 11:30</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8917</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-green-600 to-lime-600 text-[9px] flex items-center justify-center text-white font-bold">F</div>
                                Fresh Foods
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">FLEXCEL</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">300 x 200</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Width:</span> <span className="text-white font-mono">300 mm</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Height:</span> <span className="text-white font-mono">200 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Area:</span> <span className="text-emerald-400 font-mono">0.060 m²</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Thick:</span> <span className="text-zinc-300 font-mono">1.14 mm</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">Urgent request. Must be shipped by EOD.</p>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
<span className="text-[10px] font-medium text-blue-400">Processing</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">Oct 23</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 23, 08:30</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8916</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-cyan-500 to-blue-500 text-[9px] flex items-center justify-center text-white font-bold">T</div>
                                TechPack
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">CTP</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">950 x 700</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Width:</span> <span className="text-white font-mono">950 mm</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Height:</span> <span className="text-white font-mono">700 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Area:</span> <span className="text-emerald-400 font-mono">0.665 m²</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Thick:</span> <span className="text-zinc-300 font-mono">1.70 mm</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">Box manual with small font text. High resolution required.</p>
</div>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-3 pl-6 pr-4">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="text-[10px] font-medium text-red-400">Error</span>
</div>
</td>
<td className="py-3 px-4 relative tooltip-trigger cursor-default">
<span className="text-white font-medium">Oct 21</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-2 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl min-w-[140px]">
<p className="text-[10px] text-zinc-400">Created: <span className="text-white">Oct 21, 11:20</span></p>
<p className="text-[10px] text-zinc-400">Failed: <span className="text-white">Oct 21, 11:45</span></p>
</div>
</td>
<td className="py-3 px-4 font-mono text-zinc-400">#ORD-8913</td>
<td className="py-3 px-4 font-medium text-white flex items-center gap-2">
<div className="w-5 h-5 rounded bg-gradient-to-br from-blue-700 to-indigo-700 text-[9px] flex items-center justify-center text-white font-bold">W</div>
                                WestCoast
                            </td>
<td className="py-3 px-4"><span className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">CTP</span></td>
<td className="py-3 px-4 relative tooltip-trigger cursor-help">
<span className="text-zinc-300">1200 x 900</span>
<div className="tooltip-content absolute z-50 left-0 top-full mt-1 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl w-[180px]">
<div className="space-y-1">
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Width:</span> <span className="text-white font-mono">1200 mm</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Height:</span> <span className="text-white font-mono">900 mm</span></div>
<div className="h-px bg-white/10 my-1"></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Area:</span> <span className="text-emerald-400 font-mono">1.080 m²</span></div>
<div className="flex justify-between text-[10px]"><span className="text-zinc-500">Thick:</span> <span className="text-zinc-300 font-mono">1.14 mm</span></div>
</div>
</div>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Edit"><i className="w-3.5 h-3.5" data-lucide="pencil"></i></button>
<button className="p-1.5 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-all" title="Files"><i className="w-3.5 h-3.5" data-lucide="folder"></i></button>
</div>
</td>
<td className="py-3 px-4 text-center relative tooltip-trigger">
<i className="w-4 h-4 text-zinc-600 hover:text-pink-500 cursor-help mx-auto transition-colors" data-lucide="info"></i>
<div className="tooltip-content absolute z-50 right-full top-1/2 -translate-y-1/2 mr-3 w-64 p-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-xl text-left">
<p className="text-[10px] uppercase text-zinc-500 font-semibold mb-1">Order Description</p>
<p className="text-zinc-300 leading-relaxed">RIP Error: File corrupted. Client notified to resend.</p>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-white/5 flex items-center justify-between">
<p className="text-xs text-zinc-500">Showing <span className="font-medium text-zinc-300">1-7</span> of <span className="font-medium text-zinc-300">142</span> orders</p>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-white/5 text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">Next</button>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-white/5 py-6">
<div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center">
<i className="text-white w-2.5 h-2.5" data-lucide="layers"></i>
</div>
<span className="text-xs text-zinc-500">OrderHub v2.4.0</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Status Page</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Documentation</a>
<a className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Support</a>
<span className="text-xs text-zinc-700">© 2023 OrderHub Inc.</span>
</div>
</div>
</footer>


    </>
  );
}
