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
      

<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.12),transparent)] pointer-events-none z-0"></div>

<aside className="w-64 border-r border-white/[0.08] bg-[#09090b]/80 backdrop-blur-xl flex-col justify-between hidden md:flex shrink-0 z-10">

<div>

<div className="h-16 px-6 flex items-center gap-3 border-b border-white/[0.08]">
<iconify-icon className="text-zinc-100" icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-zinc-100">Guarded Growth</span>
</div>

<nav className="p-4 flex flex-col gap-0.5">
<div className="text-xs font-medium text-zinc-500 px-3 py-2 mt-2 mb-1">Overview</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.06] text-zinc-100 font-normal text-sm transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]" href="#">
<iconify-icon className="text-zinc-300" icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] font-normal text-sm transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                    Portfolio
                </a>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] font-normal text-sm transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon>
                        Tasks
                    </div>
<span className="bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs px-1.5 py-0.5 rounded-md font-medium leading-none flex items-center">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] font-normal text-sm transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] font-normal text-sm transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
                    Inventors
                </a>
</nav>
</div>

<div className="p-4 border-t border-white/[0.08]">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.04] font-normal text-sm transition-all mb-2 group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:settings-linear" width="18"></iconify-icon>
                Settings
            </a>

<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-all text-left group">
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/[0.08] flex items-center justify-center overflow-hidden shrink-0 group-hover:border-zinc-500 transition-colors">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=transparent"/>
</div>
<div className="flex flex-col overflow-hidden">
<span className="text-sm font-medium text-zinc-200 truncate">Alex Chen</span>
</div>
<iconify-icon className="text-zinc-600 ml-auto group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 z-10 relative">

<header className="h-16 border-b border-white/[0.08] flex items-center justify-between px-6 shrink-0 bg-[#09090b]/60 backdrop-blur-xl sticky top-0 z-20">

<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-500 hover:text-zinc-100 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-sm font-medium text-zinc-100">Overview</h1>
</div>

<div className="flex items-center gap-5">

<div className="hidden sm:flex relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-white/[0.03] border border-white/[0.08] focus:bg-white/[0.05] rounded-full pl-9 pr-4 py-1.5 text-sm text-zinc-200 placeholder-zinc-500 outline-none w-56 transition-all focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 shadow-sm" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60">
<kbd className="hidden lg:inline-block text-[10px] font-medium text-zinc-400 font-sans tracking-widest">⌘K</kbd>
</div>
</div>
<button className="relative text-zinc-500 hover:text-zinc-100 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-indigo-500 rounded-full shadow-[0_0_0_2px_#09090b]"></span>
</button>
<div className="w-px h-4 bg-white/10 hidden sm:block"></div>
<button className="flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-4 py-1.5 rounded-full text-sm font-medium transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_4px_8px_rgba(0,0,0,0.2)]">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                    New Filing
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
<div className="max-w-7xl mx-auto flex flex-col gap-8">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between text-zinc-400 relative z-10">
<span className="text-sm font-medium">Active Portfolio</span>
<iconify-icon icon="solar:documents-linear" width="18"></iconify-icon>
</div>
<div className="flex items-baseline gap-3 relative z-10">
<span className="text-2xl font-medium tracking-tighter text-zinc-50">1,248</span>
<span className="text-xs text-emerald-400 flex items-center font-medium gap-0.5">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon> 12%
                            </span>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between text-zinc-400 relative z-10">
<span className="text-sm font-medium">Pending Actions</span>
<iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
<div className="flex items-baseline gap-3 relative z-10">
<span className="text-2xl font-medium tracking-tighter text-zinc-50">43</span>
<span className="text-xs text-amber-400/90 font-medium">
                                8 Critical
                            </span>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between text-zinc-400 relative z-10">
<span className="text-sm font-medium">YTD Spend</span>
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
</div>
<div className="flex items-baseline gap-3 relative z-10">
<span className="text-2xl font-medium tracking-tighter text-zinc-50">$142k</span>
<span className="text-xs text-zinc-500 font-medium">/ $200k</span>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-5 flex flex-col gap-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)] relative overflow-hidden group hover:-translate-y-0.5 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between text-zinc-400 relative z-10">
<span className="text-sm font-medium">Granted This Month</span>
<iconify-icon icon="solar:medal-ribbon-star-linear" width="18"></iconify-icon>
</div>
<div className="flex items-baseline gap-3 relative z-10">
<span className="text-2xl font-medium tracking-tighter text-zinc-50">14</span>
<span className="text-xs text-zinc-500 font-medium">Across 4 locales</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 flex flex-col gap-4">
<div className="flex items-center justify-between pb-2">
<h2 className="text-sm font-medium tracking-tight text-zinc-100">Priority Actions</h2>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1 group">
                                View All <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="flex flex-col gap-2">

<div className="bg-transparent border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.02] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default">
<div className="flex items-start gap-4">

<div className="mt-0.5 w-4 h-4 rounded-[5px] border border-white/[0.15] bg-white/[0.02] flex items-center justify-center cursor-pointer group-hover:border-zinc-500 transition-colors shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<iconify-icon className="opacity-0 text-zinc-100 w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-zinc-100">Respond to Office Action</span>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300">US 17/123,456</span>
<span>•</span>
<span className="truncate max-w-[200px] sm:max-w-xs">Machine Learning Data Pipeline</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-6 pl-8 sm:pl-0">

<div className="w-6 h-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-[10px] font-medium shrink-0">
                                        JS
                                    </div>

<div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 shrink-0 w-16 justify-end">
                                        Oct 12
                                    </div>
</div>
</div>

<div className="bg-transparent border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.02] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-4 h-4 rounded-[5px] border border-white/[0.15] bg-white/[0.02] flex items-center justify-center cursor-pointer group-hover:border-zinc-500 transition-colors shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<iconify-icon className="opacity-0 text-zinc-100 w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-zinc-100">EP Phase Entry Instructions</span>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300">PCT/US22/98765</span>
<span>•</span>
<span className="truncate max-w-[200px] sm:max-w-xs">Quantum Error Correction</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-6 pl-8 sm:pl-0">
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-zinc-800 border-2 border-[#09090b] flex items-center justify-center overflow-hidden z-10 shadow-sm">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Sam&amp;backgroundColor=transparent"/>
</div>
<div className="w-6 h-6 rounded-full bg-zinc-800 border-2 border-[#09090b] flex items-center justify-center overflow-hidden z-0 shadow-sm">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=transparent"/>
</div>
</div>
<div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 shrink-0 w-16 justify-end">
                                        Oct 18
                                    </div>
</div>
</div>

<div className="bg-transparent border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.02] transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-default">
<div className="flex items-start gap-4">
<div className="mt-0.5 w-4 h-4 rounded-[5px] border border-white/[0.15] bg-white/[0.02] flex items-center justify-center cursor-pointer group-hover:border-zinc-500 transition-colors shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
<iconify-icon className="opacity-0 text-zinc-100 w-3 h-3 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-sm font-medium text-zinc-100">Review Auto-Generated IDS</span>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="px-2 py-0.5 rounded-md bg-emerald-500/[0.08] border border-emerald-500/20 text-emerald-400/90 font-medium flex items-center gap-1">
<iconify-icon icon="solar:magic-stick-3-linear" width="12"></iconify-icon> AI Gen
                                            </span>
<span>•</span>
<span>5 references cited</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-6 pl-8 sm:pl-0">
<div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500/90 flex items-center justify-center text-[10px] font-medium shrink-0">
                                        AI
                                    </div>
<div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5 shrink-0 w-16 justify-end">
                                        Oct 22
                                    </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between pb-2">
<h2 className="text-sm font-medium tracking-tight text-zinc-100">Timeline</h2>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 relative shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]">

<div className="absolute left-[35px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
<div className="flex flex-col gap-8 relative z-10">

<div className="flex gap-5 group">
<div className="w-2.5 h-2.5 rounded-full bg-red-400 ring-4 ring-[#09090b] outline outline-1 outline-white/10 shrink-0 mt-1.5 z-10 transition-transform group-hover:scale-110"></div>
<div className="flex flex-col gap-1.5">
<span className="text-[10px] font-medium text-zinc-400 tracking-widest uppercase">Tomorrow</span>
<span className="text-sm font-medium text-zinc-100">Maintenance Fee Due</span>
<span className="text-xs text-zinc-500 leading-relaxed max-w-[220px]">US Trademark "Guarded Growth" - Reg. 6,123,456. $400 required.</span>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-2.5 h-2.5 rounded-full bg-amber-400/90 ring-4 ring-[#09090b] outline outline-1 outline-white/10 shrink-0 mt-1.5 z-10 transition-transform group-hover:scale-110"></div>
<div className="flex flex-col gap-1.5">
<span className="text-[10px] font-medium text-zinc-400 tracking-widest uppercase">This Friday</span>
<span className="text-sm font-medium text-zinc-100">Inventor Signatures</span>
<span className="text-xs text-zinc-500 leading-relaxed max-w-[220px]">Need remaining 2 signatures for Assignment document #24-001.</span>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-2.5 h-2.5 rounded-full bg-indigo-400 ring-4 ring-[#09090b] outline outline-1 outline-white/10 shrink-0 mt-1.5 z-10 transition-transform group-hover:scale-110"></div>
<div className="flex flex-col gap-1.5">
<span className="text-[10px] font-medium text-zinc-400 tracking-widest uppercase">Next Week</span>
<span className="text-sm font-medium text-zinc-100">EPO Oral Proceedings</span>
<span className="text-xs text-zinc-500 leading-relaxed max-w-[220px]">Preparatory meeting scheduled with EU counsel for App 19123456.7.</span>
</div>
</div>
</div>

<div className="mt-8 pt-5 border-t border-white/[0.08] text-center">
<a className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5" href="#">
                                    Open Calendar View <iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
