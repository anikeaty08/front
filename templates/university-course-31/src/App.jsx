import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
925: '#101012',
950: '#09090b',
}
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
      

<aside className="w-72 bg-zinc-950 border-r border-zinc-900 flex flex-col h-full shrink-0 hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-zinc-900/50">
<div className="flex items-center gap-3 text-zinc-100">
<div className="w-8 h-8 bg-zinc-100 text-zinc-950 rounded-lg flex items-center justify-center font-bold tracking-tighter text-sm">
                    HS
                </div>
<span className="font-medium tracking-tight text-sm">Husky Search</span>
</div>
</div>

<div className="flex-1 flex flex-col px-4 py-6 overflow-y-auto no-scrollbar gap-8">

<div className="group relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" height="16" icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-zinc-300 text-sm rounded-lg pl-9 pr-12 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 placeholder:text-zinc-600 transition-all shadow-sm" placeholder="Search courses..." type="text"/>
<div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5 border border-zinc-800 rounded px-1.5 py-0.5 bg-zinc-900">
<span className="text-[10px] text-zinc-500 font-medium">⌘K</span>
</div>
</div>

<nav className="flex flex-col gap-1">
<a className="flex items-center justify-between px-3 py-2 bg-zinc-900 text-zinc-100 rounded-lg text-sm font-medium border border-zinc-800/50 transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:book-open" strokeWidth="1.5" width="18"></iconify-icon>
                        Courses
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg text-sm font-medium transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" height="18" icon="lucide:graduation-cap" strokeWidth="1.5" width="18"></iconify-icon>
                        Majors
                    </div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg text-sm font-medium transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" height="18" icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
                        Schedule
                    </div>
<span className="bg-indigo-500/10 text-indigo-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-indigo-500/20">4</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 rounded-lg text-sm font-medium transition-all group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-400 transition-colors" height="18" icon="lucide:git-graph" strokeWidth="1.5" width="18"></iconify-icon>
                        Prereq Graph
                    </div>
</a>
</nav>

<div className="flex flex-col gap-3">
<div className="px-3 text-xs font-medium text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                    Pinned Majors
                    <iconify-icon height="12" icon="lucide:pin" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 rounded-lg text-sm font-medium transition-all group border border-transparent hover:border-zinc-800" href="#">
<span className="w-6 h-6 rounded bg-indigo-500/10 text-indigo-400 flex items-center justify-center text-[10px] font-semibold border border-indigo-500/20">CH</span>
                        CHEM
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 rounded-lg text-sm font-medium transition-all group border border-transparent hover:border-zinc-800" href="#">
<span className="w-6 h-6 rounded bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-[10px] font-semibold border border-emerald-500/20">CS</span>
                        CSE
                    </a>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-900 flex flex-col gap-1">
<div className="grid grid-cols-3 gap-1 mb-4">
<button className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 transition-all">
<iconify-icon height="16" icon="lucide:moon" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-[10px]">Theme</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 transition-all">
<iconify-icon height="16" icon="lucide:info" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-[10px]">About</span>
</button>
<button className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg hover:bg-zinc-900 text-zinc-500 hover:text-zinc-300 transition-all">
<iconify-icon height="16" icon="lucide:message-square" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-[10px]">Feedback</span>
</button>
</div>
<button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-900 text-left w-full transition-all group border border-transparent hover:border-zinc-800">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium border border-white/10">
                    JD
                </div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-200 truncate">John Doe</div>
<div className="text-xs text-zinc-500 truncate">Student</div>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" height="16" icon="lucide:chevron-up" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-zinc-950 relative overflow-hidden">

<header className="h-16 shrink-0 flex items-center justify-between px-8 border-b border-zinc-900/50 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex flex-col">
<span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Husky Search</span>
<h1 className="text-lg font-medium text-zinc-100 tracking-tight">Course Discovery</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all">
<iconify-icon height="18" icon="lucide:layout-grid" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-2 text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-all">
<iconify-icon height="18" icon="lucide:list" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth">
<div className="max-w-7xl mx-auto flex flex-col gap-12 pb-20">

<section className="flex flex-col gap-5">
<div className="flex flex-col gap-1">
<h2 className="text-xl font-medium text-zinc-100 tracking-tight">Recent Visited Majors</h2>
<p className="text-sm text-zinc-500">Majors you have visited recently</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative flex flex-col gap-1 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md" href="#">
<span className="text-2xl font-medium text-zinc-200 group-hover:text-indigo-400 tracking-tight transition-colors">MATH</span>
<span className="text-xs text-zinc-500 font-normal group-hover:text-zinc-400 transition-colors">Mathematics</span>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-zinc-500" height="16" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="group relative flex flex-col gap-1 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md" href="#">
<span className="text-2xl font-medium text-zinc-200 group-hover:text-emerald-400 tracking-tight transition-colors">CHEM</span>
<span className="text-xs text-zinc-500 font-normal group-hover:text-zinc-400 transition-colors">Chemistry</span>
</a>

<a className="group relative flex flex-col gap-1 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md" href="#">
<span className="text-2xl font-medium text-zinc-200 group-hover:text-amber-400 tracking-tight transition-colors">ARCH</span>
<span className="text-xs text-zinc-500 font-normal group-hover:text-zinc-400 transition-colors">Architecture</span>
</a>

<a className="group relative flex flex-col gap-1 p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all shadow-sm hover:shadow-md" href="#">
<span className="text-2xl font-medium text-zinc-200 group-hover:text-purple-400 tracking-tight transition-colors">INFO</span>
<span className="text-xs text-zinc-500 font-normal group-hover:text-zinc-400 transition-colors">Informatics</span>
</a>
</div>
</section>

<section className="flex flex-col gap-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="flex flex-col gap-1">
<h2 className="text-xl font-medium text-zinc-100 tracking-tight">Popular Courses</h2>
<p className="text-sm text-zinc-500">Most popular courses at UW by seat count</p>
</div>
</div>

<div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2">
<button className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-950 text-xs font-medium border border-zinc-100 shadow-sm shadow-zinc-900/20">
<span>All</span>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>MATH</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>CHEM</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>ARCH</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>INFO</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>CSE</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>ENTRE</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all text-xs font-medium">
<span>ECON</span>
<iconify-icon className="opacity-50 group-hover:opacity-100" height="10" icon="lucide:external-link" width="10"></iconify-icon>
</button>
<button className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-zinc-200 hover:border-zinc-600 hover:bg-zinc-850 transition-all">
<iconify-icon height="14" icon="lucide:more-horizontal" width="14"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">MATH 124</h3>
<span className="text-xs text-zinc-500">(5 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">NSc</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">RSN</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Calc Analytic Geom I</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-indigo-400" height="12" icon="lucide:link" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-indigo-400/80">1 Prereqs</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">960 avail of 960</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/80 w-full"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">CSE 142</h3>
<span className="text-xs text-zinc-500">(4 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">NSc</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">RSN</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Computer Programming I</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-zinc-600" height="12" icon="lucide:alert-circle" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-zinc-500">No Prereqs</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">12 avail of 450</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500/80 w-[5%]"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">INFO 200</h3>
<span className="text-xs text-zinc-500">(5 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">SSc</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Intellectual Foundations of Informatics</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-indigo-400" height="12" icon="lucide:link" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-indigo-400/80">2 Prereqs</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">0 avail of 210</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500/80 w-0"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">ARCH 150</h3>
<span className="text-xs text-zinc-500">(3 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">A&amp;H</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Appreciation of Architecture I</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-zinc-600" height="12" icon="lucide:alert-circle" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-zinc-500">No Prereqs</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">420 avail of 600</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/80 w-[70%]"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">CHEM 142</h3>
<span className="text-xs text-zinc-500">(5 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">NSc</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">RSN</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">General Chemistry</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-indigo-400" height="12" icon="lucide:link" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-indigo-400/80">Placement</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">45 avail of 850</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500/80 w-[8%]"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">ECON 200</h3>
<span className="text-xs text-zinc-500">(5 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">SSc</span>
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">RSN</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Introduction to Microeconomics</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-zinc-600" height="12" icon="lucide:alert-circle" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-zinc-500">No Prereqs</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">320 avail of 500</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/80 w-[60%]"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">PSYCH 101</h3>
<span className="text-xs text-zinc-500">(5 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">SSc</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Introduction to Psychology</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-zinc-600" height="12" icon="lucide:alert-circle" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-zinc-500">No Prereqs</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">150 avail of 700</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500/80 w-[20%]"></div>
</div>
</div>
</div>

<div className="group flex flex-col justify-between h-full bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-5 hover:bg-zinc-900/60 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300 cursor-pointer">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-baseline gap-2">
<h3 className="text-lg font-medium text-zinc-200 tracking-tight">BIO 180</h3>
<span className="text-xs text-zinc-500">(5 cr)</span>
</div>
<div className="flex gap-1.5">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">NSc</span>
</div>
</div>
<h4 className="text-sm text-zinc-400 leading-snug line-clamp-2 mb-3 group-hover:text-zinc-300 transition-colors">Introductory Biology</h4>
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon className="text-indigo-400" height="12" icon="lucide:link" width="12"></iconify-icon>
<span className="text-[11px] font-medium text-indigo-400/80">Chem Prereq</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-zinc-800/50 flex justify-between items-center text-xs">
<span className="text-zinc-500 font-medium">10 avail of 900</span>
<div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-rose-500/80 w-[1%]"></div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
