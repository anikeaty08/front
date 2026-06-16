import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#09090b',
surface: '#18181b',
border: '#27272a',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-border flex flex-col justify-between flex-shrink-0 bg-background h-screen">
<div>

<div className="h-14 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center font-bold text-xs tracking-tighter">
                        V
                    </div>
<span className="text-zinc-100 font-medium tracking-tight text-sm group-hover:text-white transition-colors">Vortex</span>
<span className="bg-zinc-800 text-zinc-400 text-[10px] px-1.5 py-0.5 rounded border border-zinc-700 ml-auto">PRO</span>
</div>
</div>

<nav className="p-3 space-y-0.5">
<div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-100 bg-zinc-900/50 rounded-md border border-zinc-800/50 transition-all" href="#">
<iconify-icon height="16" icon="lucide:layout-grid" strokeWidth="1.5" width="16"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
                    Deployments
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="lucide:box" strokeWidth="1.5" width="16"></iconify-icon>
                    Storage
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="lucide:bar-chart-3" strokeWidth="1.5" width="16"></iconify-icon>
                    Analytics
                </a>
<div className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mt-6 mb-1">Configuration</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
                    Team
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/30 rounded-md transition-all group" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300" height="16" icon="lucide:settings-2" strokeWidth="1.5" width="16"></iconify-icon>
                    Settings
                </a>
</nav>
</div>

<div className="p-4 border-t border-border/50">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-zinc-900/50 transition-colors text-left group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-white text-xs font-medium border border-white/10 shadow-sm">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate group-hover:text-white">John Doe</p>
<p className="text-xs text-zinc-500 truncate">john@vortex.dev</p>
</div>
<iconify-icon className="text-zinc-600" height="14" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto h-screen bg-background relative">

<header className="h-14 border-b border-border/50 flex items-center justify-between px-8 sticky top-0 bg-background/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">johndoe</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">dashboard-v2</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-200 transition-colors">
<iconify-icon height="18" icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<a className="text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 rounded-full hover:border-zinc-700" href="#">Feedback</a>
</div>
</header>
<div className="p-8 max-w-6xl mx-auto space-y-8">

<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight">Overview</h1>
<p className="text-zinc-500 text-sm mt-1">Manage your project statistics and deployment status.</p>
</div>
<div className="flex gap-3">
<button className="px-3 py-1.5 h-8 text-xs font-medium text-zinc-300 bg-transparent border border-zinc-700 rounded hover:bg-zinc-900 hover:border-zinc-600 transition-all flex items-center gap-2">
<span>Last 7 days</span>
<iconify-icon height="12" icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
<button className="px-3 py-1.5 h-8 text-xs font-medium text-black bg-white border border-transparent rounded hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon height="14" icon="lucide:plus" strokeWidth="2" width="14"></iconify-icon>
                        New Project
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 rounded-lg border border-border bg-surface/30 hover:bg-surface/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
<iconify-icon height="18" icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            +12.5%
                        </span>
</div>
<div className="space-y-1">
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Total Requests</h3>
<p className="text-2xl font-semibold text-white tracking-tight">2.4M</p>
</div>
</div>

<div className="p-5 rounded-lg border border-border bg-surface/30 hover:bg-surface/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
<iconify-icon height="18" icon="lucide:clock" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            -4ms
                        </span>
</div>
<div className="space-y-1">
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Avg. Latency</h3>
<p className="text-2xl font-semibold text-white tracking-tight">34ms</p>
</div>
</div>

<div className="p-5 rounded-lg border border-border bg-surface/30 hover:bg-surface/50 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-all">
<iconify-icon height="18" icon="lucide:hard-drive" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-zinc-500 bg-zinc-500/10 px-2 py-0.5 rounded-full border border-zinc-500/20">
                            0%
                        </span>
</div>
<div className="space-y-1">
<h3 className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Data Transfer</h3>
<p className="text-2xl font-semibold text-white tracking-tight">142 GB</p>
</div>
</div>
</div>

<div className="rounded-lg border border-border bg-surface/20 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-200">Traffic Activity</h3>
<div className="flex gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900 rounded border border-zinc-800">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-[10px] text-zinc-400">Visitor</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900 rounded border border-zinc-800">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-[10px] text-zinc-400">Registered</span>
</div>
</div>
</div>

<div className="h-64 flex items-end justify-between gap-2">

<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '45%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/2 rounded-t-sm"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded border border-zinc-700 transition-opacity">Mon</div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '65%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/3 rounded-t-sm"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '50%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/2 rounded-t-sm"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '85%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/4 rounded-t-sm"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '60%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/3 rounded-t-sm"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '75%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-2/3 rounded-t-sm"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '55%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/2 rounded-t-sm"></div>
</div>
<div className="w-full bg-zinc-800/30 rounded-t-sm relative group" style={{height: '90%'}}>
<div className="absolute bottom-0 w-full bg-zinc-700/30 h-1/2 rounded-t-sm"></div>
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded border border-zinc-700 transition-opacity">Today</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-200">Recent Deployments</h3>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">View all</a>
</div>
<div className="rounded-lg border border-border overflow-hidden">
<table className="w-full text-left text-sm text-zinc-400">
<thead className="bg-surface/50 text-xs uppercase font-medium text-zinc-500 border-b border-border">
<tr>
<th className="px-6 py-3 font-medium w-1/3">Project</th>
<th className="px-6 py-3 font-medium">Commit</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Duration</th>
</tr>
</thead>
<tbody className="divide-y divide-border bg-background/50">
<tr className="group hover:bg-surface/30 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:triangle" width="12"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors cursor-pointer">api-service-main</div>
<div className="text-xs text-zinc-500">production</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 font-mono text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:git-commit-horizontal" width="14"></iconify-icon>
                                        8a2f9c
                                    </div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-zinc-300 text-xs">Ready</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs">24s ago</td>
</tr>
<tr className="group hover:bg-surface/30 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:hexagon" width="12"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors cursor-pointer">web-client-v2</div>
<div className="text-xs text-zinc-500">staging</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 font-mono text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:git-commit-horizontal" width="14"></iconify-icon>
                                        b4e1d2
                                    </div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)] relative">
<div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></div>
</div>
<span className="text-zinc-300 text-xs">Building</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs">1m 12s</td>
</tr>
<tr className="group hover:bg-surface/30 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:database" width="12"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors cursor-pointer">db-migrations</div>
<div className="text-xs text-zinc-500">development</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 font-mono text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:git-commit-horizontal" width="14"></iconify-icon>
                                        c3f8a1
                                    </div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-zinc-500 text-xs">Queued</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs">--</td>
</tr>
<tr className="group hover:bg-surface/30 transition-colors">
<td className="px-6 py-3.5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:box" width="12"></iconify-icon>
</div>
<div>
<div className="font-medium text-zinc-200 group-hover:text-blue-400 transition-colors cursor-pointer">auth-worker</div>
<div className="text-xs text-zinc-500">production</div>
</div>
</div>
</td>
<td className="px-6 py-3.5 font-mono text-xs text-zinc-500">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:git-commit-horizontal" width="14"></iconify-icon>
                                        f9d2e1
                                    </div>
</td>
<td className="px-6 py-3.5">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
<span className="text-zinc-300 text-xs">Failed</span>
</div>
</td>
<td className="px-6 py-3.5 text-right text-zinc-500 text-xs">12m ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

    </>
  );
}
