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



        // Initialize Lucide icons
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
      

<div className="absolute top-[-10%] left-[-5%] w-[600px] h-[400px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

<aside className="w-64 border-r border-white/[0.06] bg-[#121215]/80 backdrop-blur-2xl flex flex-col justify-between shrink-0 z-20 hidden md:flex">
<div>

<div className="h-20 flex items-center px-8 border-b border-white/[0.04]">
<span className="text-white font-medium text-lg tracking-tight uppercase tracking-wider">Logo</span>
</div>

<nav className="flex flex-col gap-1.5 px-4 py-6">

<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-[#FACC15] bg-[#FACC15]/10 border border-[#FACC15]/20 shadow-[inset_0_1px_0_rgba(250,204,21,0.1)] transition-all font-medium" href="#">
<i className="w-5 h-5 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group font-normal" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="layers" strokeWidth="1.5"></i>
                    Assets
                </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group font-normal" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="settings-2" strokeWidth="1.5"></i>
                    Parts
                </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group font-normal" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                    Shipping Cart
                </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group font-normal" href="#">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
                    Material Transfer
                </a>
</nav>
</div>

<div className="px-4 py-6 border-t border-white/[0.04] flex flex-col gap-2">
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 transition-all group font-medium">
<i className="w-5 h-5 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" data-lucide="qr-code" strokeWidth="1.5"></i>
                Scan QR
            </button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl text-base text-zinc-400 hover:text-white hover:bg-white/[0.04] transition-colors group font-normal">
<i className="w-5 h-5 group-hover:text-white transition-colors" data-lucide="settings" strokeWidth="1.5"></i>
                Settings
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative z-10">

<header className="flex justify-between items-center px-8 h-20 border-b border-white/[0.06] bg-[#121215]/80 backdrop-blur-xl sticky top-0 z-30 shrink-0">
<div className="flex flex-col justify-center">
<h1 className="text-xl md:text-2xl font-medium tracking-tight text-white leading-tight">Dashboard</h1>
<p className="text-sm text-zinc-400 font-normal">System Overview &amp; Monitoring</p>
</div>
<div className="flex items-center gap-5">

<div className="relative group hidden md:block">
<i className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" data-lucide="search" strokeWidth="1.5"></i>
<input className="bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.15] rounded-full pl-10 pr-4 py-2 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-500/50 focus:bg-[#1A1A1F]/80 transition-all w-64 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]" placeholder="Search resources..." type="text"/>
</div>

<button className="relative p-2.5 rounded-full border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50">
<i className="w-5 h-5 text-zinc-300" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 ring-2 ring-[#121215] shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
</button>

<button className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[1.5px] focus:outline-none focus:ring-2 focus:ring-white/20 transition-all hover:scale-105">
<div className="w-full h-full rounded-full bg-[#1A1A1F] flex items-center justify-center border border-[#1A1A1F]">
<img alt="User" className="w-full h-full rounded-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin&amp;backgroundColor=transparent"/>
</div>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 z-10">
<div className="max-w-[1440px] mx-auto flex flex-col gap-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-white/[0.12] transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
<i data-lucide="cpu" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-sm text-zinc-400 font-normal">Total Engines</p>
<h3 className="text-3xl font-medium tracking-tight text-white mt-1">42</h3>
</div>
</div>

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:border-white/[0.12] transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
<i data-lucide="activity" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-sm text-zinc-400 font-normal">Active Rigs</p>
<h3 className="text-3xl font-medium tracking-tight text-white mt-1">18</h3>
</div>
</div>

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-[#FACC15]/20 rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-[0_8px_30px_rgba(250,204,21,0.05)] hover:border-[#FACC15]/40 hover:shadow-[0_8px_30px_rgba(250,204,21,0.1)] transition-all group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/30 to-transparent"></div>
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-[#FACC15]/10 border border-[#FACC15]/30 text-[#FACC15] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(250,204,21,0.2)]">
<i data-lucide="wrench" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-sm text-zinc-400 font-normal">Maintenance Due</p>
<h3 className="text-3xl font-medium tracking-tight text-white mt-1">8</h3>
</div>
</div>

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-[0_8px_30px_rgba(239,68,68,0.05)] hover:border-red-500/40 hover:shadow-[0_8px_30px_rgba(239,68,68,0.1)] transition-all group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
<div className="flex justify-between items-start">
<div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-500 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<i data-lucide="alert-triangle" strokeWidth="1.5"></i>
</div>
</div>
<div>
<p className="text-sm text-zinc-400 font-normal">Alerts / Warnings</p>
<h3 className="text-3xl font-medium tracking-tight text-white mt-1">2</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 flex flex-col gap-6">

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl shadow-lg overflow-hidden flex flex-col">
<div className="px-6 py-5 border-b border-white/[0.04] flex justify-between items-center bg-white/[0.01]">
<h2 className="text-lg font-medium text-white tracking-tight">Recent Activity</h2>
<button className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap min-w-[700px]">
<thead className="bg-black/20 text-xs font-medium text-zinc-400 uppercase tracking-wider">
<tr>
<th className="px-6 py-4 border-b border-white/[0.04]">Engine ID</th>
<th className="px-6 py-4 border-b border-white/[0.04]">Date</th>
<th className="px-6 py-4 border-b border-white/[0.04]">Status</th>
<th className="px-6 py-4 border-b border-white/[0.04] text-right">Hours Run</th>
<th className="px-6 py-4 border-b border-white/[0.04] text-right">Oil Added</th>
</tr>
</thead>
<tbody className="text-base text-zinc-300 font-normal divide-y divide-white/[0.04]">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-white">ENG-Rig29-01</td>
<td className="px-6 py-4">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Completed
                                                </span>
</td>
<td className="px-6 py-4 text-right">12.5 hrs</td>
<td className="px-6 py-4 text-right text-zinc-400">0 Gals</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-white">ENG-Rig14-03</td>
<td className="px-6 py-4">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Critical
                                                </span>
</td>
<td className="px-6 py-4 text-right">24.0 hrs</td>
<td className="px-6 py-4 text-right text-zinc-400">2 Gals</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-white">ENG-Rig02-02</td>
<td className="px-6 py-4">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#FACC15]"></span> Pending
                                                </span>
</td>
<td className="px-6 py-4 text-right">8.0 hrs</td>
<td className="px-6 py-4 text-right text-zinc-400">0 Gals</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-4 font-medium text-white">ENG-Rig29-02</td>
<td className="px-6 py-4">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Completed
                                                </span>
</td>
<td className="px-6 py-4 text-right">16.5 hrs</td>
<td className="px-6 py-4 text-right text-zinc-400">0.5 Gals</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 shadow-lg relative overflow-hidden">
<h2 className="text-lg font-medium text-white tracking-tight mb-6">Maintenance Progress</h2>
<div className="flex flex-col gap-5">

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-zinc-300">Daily Tasks</span>
<span className="text-sm text-zinc-400">24 / 30</span>
</div>
<div className="w-full bg-black/40 rounded-full h-2 border border-white/[0.04]">
<div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)] transition-all duration-1000" style={{width: '80%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-zinc-300">Weekly Tasks</span>
<span className="text-sm text-zinc-400">12 / 20</span>
</div>
<div className="w-full bg-black/40 rounded-full h-2 border border-white/[0.04]">
<div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)] transition-all duration-1000" style={{width: '60%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-zinc-300">2-Week Tasks</span>
<span className="text-sm text-zinc-400">2 / 5</span>
</div>
<div className="w-full bg-black/40 rounded-full h-2 border border-white/[0.04]">
<div className="bg-gradient-to-r from-[#FACC15] to-yellow-400 h-full rounded-full shadow-[0_0_10px_rgba(250,204,21,0.3)] transition-all duration-1000" style={{width: '40%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 shadow-lg flex flex-col h-full">
<div className="flex justify-between items-center mb-5">
<h2 className="text-lg font-medium text-white tracking-tight">System Alerts</h2>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-white/[0.05] border border-white/10 text-zinc-400">3 New</span>
</div>
<div className="flex flex-col gap-3">

<div className="flex gap-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 transition-colors cursor-pointer group">
<div className="mt-0.5 shrink-0 text-red-500 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]">
<i className="w-5 h-5" data-lucide="x-circle" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-sm font-medium text-white group-hover:text-red-100 transition-colors">Overdue Maintenance</h4>
<p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">Rig 14 Generator #2 PM is 3 days past scheduled date.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-[#FACC15]/20 bg-[#FACC15]/5 hover:bg-[#FACC15]/10 transition-colors cursor-pointer group">
<div className="mt-0.5 shrink-0 text-[#FACC15] drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]">
<i className="w-5 h-5" data-lucide="gauge" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-sm font-medium text-white group-hover:text-yellow-100 transition-colors">High Pressure Warning</h4>
<p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">Mud pump A-22 showing abnormal pressure spikes.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 transition-colors cursor-pointer group">
<div className="mt-0.5 shrink-0 text-orange-500 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]">
<i className="w-5 h-5" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-sm font-medium text-white group-hover:text-orange-100 transition-colors">Oil Level Low</h4>
<p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">Engine Rig 29-01 oil level critically low based on latest log.</p>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-[#1C1C22] to-[#16161A] border border-white/[0.08] rounded-2xl p-6 shadow-xl relative overflow-hidden group">

<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
<h2 className="text-lg font-medium text-white tracking-tight mb-5">Quick Actions</h2>
<div className="flex flex-col gap-3">
<button className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-medium text-black bg-[#FACC15] hover:bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all transform hover:-translate-y-[1px]">
<span className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i> Add New Report
                                    </span>
<i className="w-4 h-4 opacity-50" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-medium text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all">
<span className="flex items-center gap-3">
<i className="w-4 h-4 text-purple-400" data-lucide="qr-code" strokeWidth="1.5"></i> Scan Asset QR
                                    </span>
</button>
<button className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-base font-medium text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all">
<span className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-400" data-lucide="file-text" strokeWidth="1.5"></i> View All Reports
                                    </span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 shadow-lg flex flex-col justify-between h-64">
<div>
<h3 className="text-sm font-medium text-zinc-300">Engine Hours Over Time</h3>
<p className="text-xs text-zinc-500 mt-1">Last 7 days performance</p>
</div>
<div className="w-full h-32 flex items-end justify-between gap-1 pt-4 border-b border-white/[0.04]">
<div className="w-full bg-purple-500/20 rounded-t-sm border-t border-purple-500 hover:bg-purple-500/40 transition-colors" style={{height: '40%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm border-t border-purple-500 hover:bg-purple-500/40 transition-colors" style={{height: '60%'}}></div>
<div className="w-full bg-purple-500/40 rounded-t-sm border-t-2 border-purple-400 hover:bg-purple-500/60 transition-colors shadow-[0_-5px_15px_rgba(168,85,247,0.2)]" style={{height: '85%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm border-t border-purple-500 hover:bg-purple-500/40 transition-colors" style={{height: '50%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm border-t border-purple-500 hover:bg-purple-500/40 transition-colors" style={{height: '70%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm border-t border-purple-500 hover:bg-purple-500/40 transition-colors" style={{height: '45%'}}></div>
<div className="w-full bg-purple-500/20 rounded-t-sm border-t border-purple-500 hover:bg-purple-500/40 transition-colors" style={{height: '65%'}}></div>
</div>
<div className="flex justify-between w-full mt-2 px-1 text-xs text-zinc-500">
<span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
</div>
</div>

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 shadow-lg flex flex-col justify-between h-64">
<div>
<h3 className="text-sm font-medium text-zinc-300">Oil Consumption</h3>
<p className="text-xs text-zinc-500 mt-1">Gallons per engine type</p>
</div>
<div className="w-full h-32 flex items-end justify-around gap-4 pt-4 border-b border-white/[0.04]">
<div className="w-10 bg-blue-500/40 rounded-t border-t border-blue-400 relative group" style={{height: '80%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">12g</div>
</div>
<div className="w-10 bg-blue-500/20 rounded-t border-t border-blue-500 relative group" style={{height: '40%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">6g</div>
</div>
<div className="w-10 bg-[#FACC15]/40 rounded-t border-t border-[#FACC15] relative group shadow-[0_-5px_15px_rgba(250,204,21,0.15)]" style={{height: '95%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">18g</div>
</div>
<div className="w-10 bg-blue-500/20 rounded-t border-t border-blue-500 relative group" style={{height: '30%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">4g</div>
</div>
</div>
<div className="flex justify-around w-full mt-2 text-xs text-zinc-500">
<span>Gen1</span><span>Gen2</span><span>Pump</span><span>Mud</span>
</div>
</div>

<div className="bg-[#18181C]/90 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 shadow-lg flex flex-row items-center justify-between h-64">
<div className="flex flex-col gap-1 w-1/2">
<h3 className="text-sm font-medium text-zinc-300">Status</h3>
<p className="text-xs text-zinc-500 mb-4">Overall health</p>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Healthy (70%)
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<span className="w-2.5 h-2.5 rounded-full bg-[#FACC15]"></span> Warning (20%)
                                </div>
<div className="flex items-center gap-2 text-xs text-zinc-300">
<span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Critical (10%)
                                </div>
</div>
</div>

<div className="w-32 h-32 relative flex items-center justify-center shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">

<path className="text-white/[0.05]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>

<path className="text-emerald-500 drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="70, 100" strokeWidth="4"></path>

<path className="text-[#FACC15]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="20, 100" stroke-dashoffset="-70" strokeWidth="4"></path>

<path className="text-red-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="10, 100" stroke-dashoffset="-90" strokeWidth="4"></path>
</svg>
<div className="absolute text-xl font-medium text-white tracking-tight">90%</div>
</div>
</div>
</div>

<footer className="mt-4 pt-6 border-t border-white/[0.04] text-center pb-8">
<p className="text-sm text-zinc-600 font-normal">© 2026 Industrial System Dashboard. All systems operational.</p>
</footer>
</div>
</div>
</main>

<style>
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
    </style>

    </>
  );
}
