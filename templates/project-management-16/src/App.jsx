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
      

<aside className="w-64 border-r border-white/5 flex flex-col justify-between bg-[#09090b] hidden md:flex">
<div>

<div className="h-14 flex items-center px-5 border-b border-white/5">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-zinc-100 flex items-center justify-center">
<div className="w-2 h-2 bg-[#09090b] rounded-full"></div>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">PRISM</span>
</div>
</div>

<nav className="px-2 py-4 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-100 bg-white/5 rounded-md transition-colors border border-white/5" href="#">
<iconify-icon height="16" icon="lucide:layout-grid" strokeWidth="1.5" width="16"></iconify-icon>
<span>Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors" href="#">
<iconify-icon height="16" icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
<span>Projects</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors" href="#">
<iconify-icon height="16" icon="lucide:check-circle-2" strokeWidth="1.5" width="16"></iconify-icon>
<span>Tasks</span>
<span className="ml-auto text-[10px] font-medium text-zinc-600 border border-zinc-800 px-1.5 py-0.5 rounded-full">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors" href="#">
<iconify-icon height="16" icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
<span>Team</span>
</a>
<div className="pt-4 pb-2 px-3">
<p className="text-[10px] font-medium text-zinc-600 uppercase tracking-wider">Workspaces</p>
</div>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors" href="#">
<span className="w-4 h-4 flex items-center justify-center text-[10px] text-zinc-400 font-medium border border-zinc-800 rounded bg-zinc-900">E</span>
<span>Engineering</span>
</a>
<a className="flex items-center gap-3 px-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 hover:bg-white/[0.02] rounded-md transition-colors" href="#">
<span className="w-4 h-4 flex items-center justify-center text-[10px] text-zinc-400 font-medium border border-zinc-800 rounded bg-zinc-900">D</span>
<span>Design</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<button className="flex items-center gap-3 w-full group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10 relative">
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#09090b] rounded-full"></div>
</div>
<div className="text-left flex-1">
<p className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors">Alex Morgan</p>
<p className="text-[10px] text-zinc-500">alex@prism.com</p>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400" icon="lucide:chevron-up" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#09090b]/50 backdrop-blur-sm z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Prism</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="lucide:search" width="14"></iconify-icon>
<input className="bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-300 rounded-md pl-8 pr-3 py-1.5 focus:outline-none focus:border-zinc-700 focus:bg-zinc-900 w-48 transition-all placeholder:text-zinc-600" placeholder="Search..." type="text"/>
</div>
<button className="text-zinc-500 hover:text-zinc-200 transition-colors relative">
<iconify-icon icon="lucide:bell" width="16"></iconify-icon>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-[#09090b]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex items-end justify-between">
<div>
<h1 className="text-xl font-medium text-zinc-100 tracking-tight">Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your team's current velocity and progress.</p>
</div>
<div className="flex gap-3">
<button className="h-8 px-3 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded hover:bg-zinc-800 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:filter" width="12"></iconify-icon>
                            Filter
                        </button>
<button className="h-8 px-3 text-xs font-medium text-black bg-zinc-100 rounded hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
                            New Issue
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-4 rounded-lg bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400" icon="lucide:circle-dashed" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">+12%</span>
</div>
<p className="text-2xl font-medium text-zinc-100 tracking-tight">24</p>
<p className="text-xs text-zinc-500 mt-1">Active Issues</p>
</div>

<div className="p-4 rounded-lg bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400" icon="lucide:check-circle" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500 bg-zinc-800/50 px-1.5 py-0.5 rounded border border-zinc-800">0%</span>
</div>
<p className="text-2xl font-medium text-zinc-100 tracking-tight">142</p>
<p className="text-xs text-zinc-500 mt-1">Completed this week</p>
</div>

<div className="p-4 rounded-lg bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-md border border-zinc-800 group-hover:border-zinc-700 transition-colors">
<iconify-icon className="text-zinc-400" icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-amber-500 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">+4%</span>
</div>
<p className="text-2xl font-medium text-zinc-100 tracking-tight">89%</p>
<p className="text-xs text-zinc-500 mt-1">Velocity</p>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:list" width="14"></iconify-icon>
                        Recent Issues
                    </h2>
<div className="border border-white/5 rounded-lg overflow-hidden bg-zinc-900/20">

<div className="grid grid-cols-12 gap-4 p-3 border-b border-white/5 bg-white/[0.01] text-xs font-medium text-zinc-500">
<div className="col-span-5 md:col-span-4 pl-2">Issue</div>
<div className="col-span-3 md:col-span-2">Status</div>
<div className="col-span-4 md:col-span-2">Priority</div>
<div className="hidden md:block col-span-2">Assignee</div>
<div className="hidden md:block col-span-2 text-right pr-2">Created</div>
</div>

<div className="group grid grid-cols-12 gap-4 p-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center text-sm">
<div className="col-span-5 md:col-span-4 flex items-center gap-3 pl-2">
<input className="custom-checkbox appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 relative cursor-pointer checked:bg-zinc-200 transition-all" type="checkbox"/>
<span className="text-zinc-400 font-mono text-xs">PRM-1024</span>
<span className="text-zinc-200 font-medium truncate">Update navigation icons</span>
</div>
<div className="col-span-3 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-amber-500" icon="lucide:circle-dashed" width="12"></iconify-icon>
                                    In Progress
                                </div>
</div>
<div className="col-span-4 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-orange-500" icon="lucide:arrow-up" width="12"></iconify-icon>
                                    High
                                </div>
</div>
<div className="hidden md:flex col-span-2 items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[9px] text-white">AM</div>
<span className="text-xs text-zinc-500">Alex M.</span>
</div>
<div className="hidden md:block col-span-2 text-right text-xs text-zinc-600 pr-2">2h ago</div>
</div>

<div className="group grid grid-cols-12 gap-4 p-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center text-sm">
<div className="col-span-5 md:col-span-4 flex items-center gap-3 pl-2">
<input className="custom-checkbox appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 relative cursor-pointer checked:bg-zinc-200 transition-all" type="checkbox"/>
<span className="text-zinc-400 font-mono text-xs">PRM-1023</span>
<span className="text-zinc-200 font-medium truncate">Fix authentication bug</span>
</div>
<div className="col-span-3 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:circle" width="12"></iconify-icon>
                                    Backlog
                                </div>
</div>
<div className="col-span-4 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-red-500" icon="lucide:alert-circle" width="12"></iconify-icon>
                                    Urgent
                                </div>
</div>
<div className="hidden md:flex col-span-2 items-center gap-2">
<div className="w-5 h-5 rounded-full bg-indigo-900 flex items-center justify-center text-[9px] text-indigo-200">JD</div>
<span className="text-xs text-zinc-500">John D.</span>
</div>
<div className="hidden md:block col-span-2 text-right text-xs text-zinc-600 pr-2">5h ago</div>
</div>

<div className="group grid grid-cols-12 gap-4 p-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors items-center text-sm">
<div className="col-span-5 md:col-span-4 flex items-center gap-3 pl-2">
<input className="custom-checkbox appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 relative cursor-pointer checked:bg-zinc-200 transition-all" type="checkbox"/>
<span className="text-zinc-400 font-mono text-xs">PRM-1022</span>
<span className="text-zinc-200 font-medium truncate">Mobile responsive layout</span>
</div>
<div className="col-span-3 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="12"></iconify-icon>
                                    Done
                                </div>
</div>
<div className="col-span-4 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-zinc-500" icon="lucide:minus" width="12"></iconify-icon>
                                    Medium
                                </div>
</div>
<div className="hidden md:flex col-span-2 items-center gap-2">
<div className="w-5 h-5 rounded-full bg-emerald-900 flex items-center justify-center text-[9px] text-emerald-200">VS</div>
<span className="text-xs text-zinc-500">Sarah V.</span>
</div>
<div className="hidden md:block col-span-2 text-right text-xs text-zinc-600 pr-2">1d ago</div>
</div>

<div className="group grid grid-cols-12 gap-4 p-3 hover:bg-white/[0.02] transition-colors items-center text-sm">
<div className="col-span-5 md:col-span-4 flex items-center gap-3 pl-2">
<input className="custom-checkbox appearance-none w-3.5 h-3.5 border border-zinc-700 rounded bg-zinc-900 relative cursor-pointer checked:bg-zinc-200 transition-all" type="checkbox"/>
<span className="text-zinc-400 font-mono text-xs">PRM-1021</span>
<span className="text-zinc-200 font-medium truncate">API Documentation</span>
</div>
<div className="col-span-3 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-zinc-600" icon="lucide:circle" width="12"></iconify-icon>
                                    Backlog
                                </div>
</div>
<div className="col-span-4 md:col-span-2">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
<iconify-icon className="text-blue-500" icon="lucide:arrow-down" width="12"></iconify-icon>
                                    Low
                                </div>
</div>
<div className="hidden md:flex col-span-2 items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[9px] text-white">AM</div>
<span className="text-xs text-zinc-500">Alex M.</span>
</div>
<div className="hidden md:block col-span-2 text-right text-xs text-zinc-600 pr-2">2d ago</div>
</div>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>

    </>
  );
}
