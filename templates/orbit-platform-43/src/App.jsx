import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
fontSize: {
xxs: '0.625rem',
},
colors: {
border: 'rgba(255, 255, 255, 0.08)',
surface: '#09090b',
surfaceHover: '#18181b',
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
      

<aside className="w-64 flex-shrink-0 border-r border-border flex flex-col justify-between bg-surface hidden md:flex">
<div>

<div className="h-14 flex items-center px-5 border-b border-border">
<div className="flex items-center gap-2 text-zinc-100 font-medium tracking-tight">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">O</div>
<span>ORBIT</span>
</div>
</div>

<div className="px-3 py-4 space-y-0.5">
<div className="px-2 py-1 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Platform</div>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded-md text-zinc-200 bg-surfaceHover border border-border/50 transition-all" href="#">
<iconify-icon className="text-zinc-100" height="16" icon="lucide:layout-grid" width="16"></iconify-icon>
<span className="font-medium">Overview</span>
</a>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:activity" width="16"></iconify-icon>
<span>Deployments</span>
</a>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:layers" width="16"></iconify-icon>
<span>Integrations</span>
</a>
<a className="group flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors" href="#">
<iconify-icon className="group-hover:text-zinc-300" height="16" icon="lucide:settings" width="16"></iconify-icon>
<span>Settings</span>
</a>
</div>

<div className="px-3 py-2 space-y-0.5">
<div className="px-2 py-1 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Projects</div>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors group" href="#">
<div className="flex items-center gap-2.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>api-core-v2</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors group" href="#">
<div className="flex items-center gap-2.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span>web-frontend</span>
</div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-zinc-900 hover:text-zinc-200 transition-colors group" href="#">
<div className="flex items-center gap-2.5">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
<span>legacy-auth</span>
</div>
</a>
</div>
</div>

<div className="p-3 border-t border-border">
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-zinc-900 transition-colors text-left">
<div className="w-7 h-7 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600"></div>
<div className="flex-1 min-w-0">
<div className="text-zinc-200 font-medium text-xs">Alicia Sterling</div>
<div className="text-zinc-500 text-xxs truncate">alicia@orbit.dev</div>
</div>
<iconify-icon className="text-zinc-600" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#050505] relative">

<header className="h-14 flex items-center justify-between px-6 border-b border-border bg-[#050505]/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-3 text-zinc-500">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Orbit</span>
<iconify-icon className="opacity-30 -rotate-12" icon="lucide:slash" width="12"></iconify-icon>
<span className="text-zinc-200 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-surface border border-border rounded-md pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 focus:ring-1 focus:ring-zinc-700 transition-all w-48 lg:w-64" placeholder="Search..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden sm:inline-block border border-border bg-zinc-900/50 rounded px-1 text-[10px] text-zinc-500 font-sans">⌘K</kbd>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
<iconify-icon icon="lucide:bell" width="16"></iconify-icon>
<span className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-black"></span>
</button>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors md:hidden">
<iconify-icon icon="lucide:menu" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-medium text-zinc-100 tracking-tight mb-1">Project Overview</h1>
<p className="text-zinc-500 text-xs">Manage your deployments and monitor system health.</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500 flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
                        System Operational
                    </span>
<div className="h-4 w-[1px] bg-border mx-1"></div>
<button className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        New Project
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-4 rounded-lg border border-border bg-surfaceHover/30 hover:bg-surfaceHover/50 transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 rounded-md bg-zinc-900 border border-border text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-xs text-emerald-500 flex items-center gap-1">
                            +12% <iconify-icon icon="lucide:arrow-up-right" width="10"></iconify-icon>
</span>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Total Requests</div>
<div className="text-xl font-medium text-zinc-100 tracking-tight">2.4M</div>
</div>

<div className="p-4 rounded-lg border border-border bg-surfaceHover/30 hover:bg-surfaceHover/50 transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 rounded-md bg-zinc-900 border border-border text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:clock" width="14"></iconify-icon>
</div>
<span className="text-xs text-emerald-500 flex items-center gap-1">
                            -4ms <iconify-icon icon="lucide:arrow-down-right" width="10"></iconify-icon>
</span>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Avg. Latency</div>
<div className="text-xl font-medium text-zinc-100 tracking-tight">42ms</div>
</div>

<div className="p-4 rounded-lg border border-border bg-surfaceHover/30 hover:bg-surfaceHover/50 transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 rounded-md bg-zinc-900 border border-border text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:git-commit-horizontal" width="14"></iconify-icon>
</div>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Deployments</div>
<div className="text-xl font-medium text-zinc-100 tracking-tight">142</div>
</div>

<div className="p-4 rounded-lg border border-border bg-surfaceHover/30 hover:bg-surfaceHover/50 transition-colors group">
<div className="flex justify-between items-start mb-3">
<div className="p-1.5 rounded-md bg-zinc-900 border border-border text-zinc-400 group-hover:text-zinc-100 transition-colors">
<iconify-icon icon="lucide:alert-circle" width="14"></iconify-icon>
</div>
<span className="text-xs text-zinc-500">0 Active</span>
</div>
<div className="text-zinc-500 text-xs font-medium mb-1">Error Rate</div>
<div className="text-xl font-medium text-zinc-100 tracking-tight">0.02%</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-zinc-200">Recent Activity</h3>
<div className="flex gap-2">
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors">View All</button>
</div>
</div>
<div className="border border-border rounded-lg bg-surfaceHover/20 overflow-hidden">

<div className="flex items-center justify-between p-3 border-b border-border hover:bg-surfaceHover/40 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-border flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:git-pull-request" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-200 font-medium">Update auth middleware</div>
<div className="text-xs text-zinc-500 mt-0.5">master • commit <span className="font-mono text-xxs bg-zinc-800 px-1 rounded text-zinc-400">8a2f9c</span></div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="group-hover:text-zinc-300">2m ago</span>
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 border-b border-border hover:bg-surfaceHover/40 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-border flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:database" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-200 font-medium">Database backup completed</div>
<div className="text-xs text-zinc-500 mt-0.5">Automatic Scheduler</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="group-hover:text-zinc-300">1h ago</span>
<div className="w-2 h-2 rounded-full bg-blue-500/50"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 border-b border-border hover:bg-surfaceHover/40 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-border flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:globe" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-200 font-medium">DNS propagation finished</div>
<div className="text-xs text-zinc-500 mt-0.5">domain.com</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="group-hover:text-zinc-300">3h ago</span>
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 hover:bg-surfaceHover/40 transition-colors group cursor-default">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-border flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:user-plus" width="14"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-200 font-medium">New team member added</div>
<div className="text-xs text-zinc-500 mt-0.5">Invited by Alicia</div>
</div>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<span className="group-hover:text-zinc-300">5h ago</span>
<div className="w-2 h-2 rounded-full bg-zinc-500/50"></div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div>
<h3 className="text-sm font-medium text-zinc-200 mb-3">Quick Actions</h3>
<div className="grid grid-cols-2 gap-2">
<button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border bg-surfaceHover/20 hover:bg-surfaceHover hover:border-zinc-700 transition-all group">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-200" icon="lucide:terminal-square" width="18"></iconify-icon>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Console</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-border bg-surfaceHover/20 hover:bg-surfaceHover hover:border-zinc-700 transition-all group">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-200" icon="lucide:book" width="18"></iconify-icon>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">Docs</span>
</button>
</div>
</div>

<div className="border border-border rounded-lg p-4 bg-surfaceHover/10">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xs font-medium text-zinc-300">Bandwidth Usage</h3>
<span className="text-xs text-zinc-500">72%</span>
</div>
<div className="w-full bg-zinc-900 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-zinc-100 h-1.5 rounded-full" style={{width: '72%'}}></div>
</div>
<p className="text-xxs text-zinc-500">Reset in 14 days</p>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-200 mb-3">Online Team</h3>
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#050505]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#050505]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-[#050505]" src="https://i.pravatar.cc/100?img=12"/>
<div className="w-7 h-7 rounded-full border-2 border-[#050505] bg-zinc-800 flex items-center justify-center text-xs text-zinc-400 font-medium">+2</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
