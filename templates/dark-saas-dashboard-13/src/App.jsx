import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-white/5 flex flex-col justify-between bg-[#08090A] flex-shrink-0 transition-all duration-300 hidden md:flex">
<div>

<div className="h-14 flex items-center px-5 border-b border-white/5">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-zinc-100 rounded-[4px] flex items-center justify-center text-black">
<iconify-icon icon="lucide:box" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-zinc-100 text-sm tracking-tight font-medium group-hover:opacity-80 transition-opacity">ACME INC</span>
<iconify-icon className="text-zinc-600 ml-auto" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>

<div className="px-3 py-4 space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Platform</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-zinc-100 bg-white/5 rounded-md border border-white/5 shadow-sm shadow-black/20" href="#">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-tight">Overview</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-white/5 hover:text-zinc-200 rounded-md transition-colors group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-tight">Projects</span>
<span className="ml-auto text-[10px] bg-zinc-900 border border-white/10 px-1.5 py-0.5 rounded text-zinc-500 font-medium">12</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-white/5 hover:text-zinc-200 rounded-md transition-colors group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="lucide:check-circle-2" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-tight">Tasks</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-white/5 hover:text-zinc-200 rounded-md transition-colors group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-tight">Team</span>
</a>
</div>
<div className="px-3 py-2 space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Insights</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-white/5 hover:text-zinc-200 rounded-md transition-colors group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="lucide:bar-chart-2" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-tight">Analytics</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 text-sm hover:bg-white/5 hover:text-zinc-200 rounded-md transition-colors group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
<span className="tracking-tight">Reports</span>
</a>
</div>
</div>

<div className="p-3 border-t border-white/5">
<button className="flex items-center gap-3 w-full px-2 py-2 hover:bg-white/5 rounded-md transition-colors text-left group">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-[10px] text-white font-medium ring-1 ring-white/10">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200 tracking-tight">John Doe</span>
<span className="text-[10px] text-zinc-500">Engineering</span>
</div>
<iconify-icon className="ml-auto text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="lucide:settings-2" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#08090A]">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 sticky top-0 bg-[#08090A]/80 backdrop-blur-md z-10">

<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">Acme Inc</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Overview</span>
</div>

<div className="flex items-center gap-3">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-zinc-900/50 border border-white/10 rounded-full py-1.5 pl-8 pr-10 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 w-48 transition-all hover:bg-zinc-900" placeholder="Search..." type="text"/>
<div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex gap-0.5">
<span className="text-[10px] text-zinc-600 border border-zinc-800 rounded px-1 bg-zinc-900">⌘</span>
<span className="text-[10px] text-zinc-600 border border-zinc-800 rounded px-1 bg-zinc-900">K</span>
</div>
</div>
<div className="h-4 w-[1px] bg-zinc-800 mx-1"></div>
<button className="relative p-1.5 hover:bg-white/5 rounded-md transition-colors text-zinc-500 hover:text-zinc-300">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="16"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#08090A]"></span>
</button>
<button className="flex items-center gap-1.5 bg-zinc-100 hover:bg-white text-black px-3 py-1.5 rounded-md text-xs font-medium transition-all shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)]">
<iconify-icon icon="lucide:plus" strokeWidth="2" width="14"></iconify-icon>
<span>New Issue</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6">
<div className="max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Total Revenue</span>
<iconify-icon className="text-emerald-500/80" icon="lucide:trending-up" width="14"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-zinc-100 tracking-tight">$45,231</span>
<span className="text-[10px] text-emerald-500">+2.5%</span>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Active Users</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="lucide:users" width="14"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-zinc-100 tracking-tight">12,304</span>
<span className="text-[10px] text-zinc-500">last 30d</span>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-500">Bounce Rate</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="lucide:activity" width="14"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-medium text-zinc-100 tracking-tight">42.3%</span>
<span className="text-[10px] text-red-400/80">-1.2%</span>
</div>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center justify-between mb-2 relative z-10">
<span className="text-xs font-medium text-indigo-300">Open Issues</span>
<iconify-icon className="text-indigo-400" icon="lucide:alert-circle" width="14"></iconify-icon>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-xl font-medium text-zinc-100 tracking-tight">24</span>
<span className="text-[10px] text-indigo-400">Needs attention</span>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium text-zinc-200 tracking-tight">Recent Issues</h2>

<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:filter" width="12"></iconify-icon>
<span>Filter</span>
</button>
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-xs text-zinc-400 hover:text-zinc-200 transition-colors">
<iconify-icon icon="lucide:sliders-horizontal" width="12"></iconify-icon>
<span>View</span>
</button>
</div>
</div>

<div className="w-full border border-white/5 rounded-lg bg-[#0A0A0B] overflow-hidden">
<div className="grid grid-cols-12 gap-4 px-4 py-2.5 border-b border-white/5 bg-white/[0.01] text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
<div className="col-span-1 flex items-center">ID</div>
<div className="col-span-6">Title</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Priority</div>
<div className="col-span-1 text-right">Time</div>
</div>

<div className="group grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors cursor-pointer text-xs">
<div className="col-span-1 text-zinc-500 font-mono">#2491</div>
<div className="col-span-6 flex items-center gap-3">
<label className="custom-checkbox relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-700 rounded-[3px] bg-transparent flex items-center justify-center transition-all peer-checked:bg-zinc-200 peer-checked:border-zinc-200">
<iconify-icon className="text-black hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
<span className="text-zinc-200 font-medium tracking-tight group-hover:text-indigo-300 transition-colors">Update authentication flow logic</span>
</div>
<div className="col-span-2 flex items-center">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-500 text-[10px] font-medium">
<div className="w-1 h-1 rounded-full bg-yellow-500"></div>
<span>In Progress</span>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5 text-zinc-400">
<iconify-icon className="text-orange-500" icon="lucide:arrow-up" width="12"></iconify-icon>
<span>High</span>
</div>
<div className="col-span-1 text-right text-zinc-600 font-mono text-[10px]">2m</div>
</div>

<div className="group grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors cursor-pointer text-xs">
<div className="col-span-1 text-zinc-500 font-mono">#2490</div>
<div className="col-span-6 flex items-center gap-3">
<label className="custom-checkbox relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-700 rounded-[3px] bg-transparent flex items-center justify-center transition-all peer-checked:bg-zinc-200 peer-checked:border-zinc-200">
<iconify-icon className="text-black hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
<span className="text-zinc-200 font-medium tracking-tight group-hover:text-indigo-300 transition-colors">Fix memory leak in dashboard graph</span>
</div>
<div className="col-span-2 flex items-center">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400 text-[10px] font-medium">
<div className="w-1 h-1 rounded-full bg-zinc-400"></div>
<span>Backlog</span>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5 text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:minus" width="12"></iconify-icon>
<span>Medium</span>
</div>
<div className="col-span-1 text-right text-zinc-600 font-mono text-[10px]">1h</div>
</div>

<div className="group grid grid-cols-12 gap-4 px-4 py-3 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors cursor-pointer text-xs">
<div className="col-span-1 text-zinc-500 font-mono">#2489</div>
<div className="col-span-6 flex items-center gap-3">
<label className="custom-checkbox relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-700 rounded-[3px] bg-transparent flex items-center justify-center transition-all peer-checked:bg-zinc-200 peer-checked:border-zinc-200">
<iconify-icon className="text-black hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
<span className="text-zinc-200 font-medium tracking-tight group-hover:text-indigo-300 transition-colors">Implement new billing UI</span>
</div>
<div className="col-span-2 flex items-center">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-[10px] font-medium">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
<span>Done</span>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5 text-zinc-400">
<iconify-icon className="text-blue-400" icon="lucide:arrow-down" width="12"></iconify-icon>
<span>Low</span>
</div>
<div className="col-span-1 text-right text-zinc-600 font-mono text-[10px]">3h</div>
</div>

<div className="group grid grid-cols-12 gap-4 px-4 py-3 items-center hover:bg-white/[0.02] transition-colors cursor-pointer text-xs">
<div className="col-span-1 text-zinc-500 font-mono">#2488</div>
<div className="col-span-6 flex items-center gap-3">
<label className="custom-checkbox relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-3.5 h-3.5 border border-zinc-700 rounded-[3px] bg-transparent flex items-center justify-center transition-all peer-checked:bg-zinc-200 peer-checked:border-zinc-200">
<iconify-icon className="text-black hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
</label>
<span className="text-zinc-200 font-medium tracking-tight group-hover:text-indigo-300 transition-colors">API Rate limiting updates</span>
</div>
<div className="col-span-2 flex items-center">
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-[10px] font-medium">
<iconify-icon icon="lucide:git-pull-request" width="10"></iconify-icon>
<span>Review</span>
</div>
</div>
<div className="col-span-2 flex items-center gap-1.5 text-zinc-400">
<iconify-icon className="text-orange-500" icon="lucide:arrow-up" width="12"></iconify-icon>
<span>High</span>
</div>
<div className="col-span-1 text-right text-zinc-600 font-mono text-[10px]">5h</div>
</div>
</div>

<div className="flex items-center justify-between mt-3 px-1">
<span className="text-[10px] text-zinc-500">Showing 4 of 24 issues</span>
<div className="flex gap-1">
<button className="w-6 h-6 flex items-center justify-center rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-400 transition-colors">
<iconify-icon icon="lucide:chevron-left" width="12"></iconify-icon>
</button>
<button className="w-6 h-6 flex items-center justify-center rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-400 transition-colors">
<iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5 grid grid-cols-4 gap-8">
<div className="col-span-1">
<h4 className="text-xs font-semibold text-zinc-100 mb-3">Resources</h4>
<ul className="space-y-2 text-[11px] text-zinc-500">
<li className="hover:text-zinc-300 cursor-pointer transition-colors">Documentation</li>
<li className="hover:text-zinc-300 cursor-pointer transition-colors">API Reference</li>
<li className="hover:text-zinc-300 cursor-pointer transition-colors">Status</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold text-zinc-100 mb-3">Company</h4>
<ul className="space-y-2 text-[11px] text-zinc-500">
<li className="hover:text-zinc-300 cursor-pointer transition-colors">About</li>
<li className="hover:text-zinc-300 cursor-pointer transition-colors">Blog</li>
<li className="hover:text-zinc-300 cursor-pointer transition-colors">Careers</li>
</ul>
</div>
<div className="col-span-2">
<div className="bg-gradient-to-br from-indigo-900/20 to-zinc-900 border border-white/5 rounded-lg p-4">
<h4 className="text-xs font-medium text-indigo-200 mb-1">Upgrade to Pro</h4>
<p className="text-[10px] text-zinc-400 mb-3">Unlock advanced analytics and unlimited projects.</p>
<button className="text-[10px] bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-1.5 rounded transition-colors font-medium">Upgrade Plan</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
