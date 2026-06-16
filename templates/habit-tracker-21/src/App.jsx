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
      

<aside className="w-64 border-r border-zinc-800/60 flex flex-col justify-between hidden md:flex bg-zinc-950/50">
<div className="p-6">
<div className="flex items-center gap-3 mb-10">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-lg text-zinc-100">HABIT</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md bg-zinc-900/50 text-zinc-100 border border-zinc-800/50 shadow-sm transition-all group" href="#">
<iconify-icon className="text-indigo-400 group-hover:text-indigo-300" icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<iconify-icon icon="solar:notebook-linear" width="18"></iconify-icon>
                    Journal
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm rounded-md text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/30 transition-all" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Community
                </a>
</nav>
<div className="mt-8">
<p className="px-3 text-xs font-medium text-zinc-600 uppercase tracking-wider mb-2">Projects</p>
<div className="space-y-1">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-900/30 group">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                            Health
                        </div>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-900/30 group">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></span>
                            Learning
                        </div>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 rounded-md hover:bg-zinc-900/30 group">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-orange-500/80 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></span>
                            Creativity
                        </div>
</button>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-800/60">
<button className="flex items-center gap-3 w-full px-2 py-2 hover:bg-zinc-900/50 rounded-md transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-zinc-600 flex items-center justify-center text-xs font-medium text-white">MK</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-zinc-200">Mike K.</span>
<span className="text-[10px] text-zinc-500">Pro Plan</span>
</div>
<iconify-icon className="ml-auto text-zinc-500" icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-96 bg-indigo-900/5 blur-[120px] pointer-events-none"></div>

<header className="flex-none h-16 border-b border-zinc-800/60 flex items-center justify-between px-6 z-10 glass-panel">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex flex-col">
<h1 className="text-sm font-medium text-zinc-100">Today's Focus</h1>
<span className="text-xs text-zinc-500">Tuesday, October 24</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-1 bg-zinc-900/80 border border-zinc-800 rounded-full px-3 py-1.5">
<iconify-icon className="text-orange-500" icon="solar:flame-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">12 Day Streak</span>
</div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-zinc-950"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 z-0">
<div className="max-w-6xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100">85%</h3>
<p className="text-xs text-zinc-500">Weekly completion rate</p>
</div>
</div>

<div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-all group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100">42h</h3>
<p className="text-xs text-zinc-500">Deep work this month</p>
</div>
</div>

<div className="p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 transition-all group relative overflow-hidden">
<div className="absolute right-0 bottom-0 opacity-5">
<iconify-icon icon="solar:cup-star-linear" width="100"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-800/50 rounded-lg text-zinc-400 group-hover:text-orange-400 transition-colors">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<h3 className="text-2xl font-medium tracking-tight text-zinc-100">Level 4</h3>
<p className="text-xs text-zinc-500">2,450 XP to next level</p>
</div>
<div className="w-full h-1 bg-zinc-800 mt-4 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-500 to-amber-300 w-3/4"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-zinc-100">Habits</h2>
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors border border-zinc-800 px-3 py-1.5 rounded-full hover:bg-zinc-900">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon>
                                Filter
                            </button>
</div>
<div className="space-y-3">

<div className="group flex items-center justify-between p-4 bg-zinc-900/20 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/40 transition-all hover:border-zinc-700/50">
<div className="flex items-center gap-4">
<label className="relative flex items-center justify-center w-6 h-6 cursor-pointer group-hover:scale-105 transition-transform">
<input checked="" className="peer appearance-none w-6 h-6 border border-zinc-700 rounded-md bg-zinc-900/50 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</label>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-300 decoration-zinc-500 line-through decoration-1">Morning Meditation</span>
<span className="text-[10px] text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon> 07:00 AM
                                        </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex -space-x-1">
<div className="w-1.5 h-6 bg-emerald-500/80 rounded-full"></div>
<div className="w-1.5 h-6 bg-emerald-500/80 rounded-full"></div>
<div className="w-1.5 h-6 bg-emerald-500/80 rounded-full"></div>
<div className="w-1.5 h-6 bg-emerald-500/80 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
</div>
<button className="text-zinc-600 hover:text-zinc-300"><iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="group flex items-center justify-between p-4 bg-zinc-900/20 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/40 transition-all hover:border-zinc-700/50">
<div className="flex items-center gap-4">
<label className="relative flex items-center justify-center w-6 h-6 cursor-pointer group-hover:scale-105 transition-transform">
<input className="peer appearance-none w-6 h-6 border border-zinc-600 rounded-md bg-zinc-900/50 checked:bg-indigo-500 checked:border-indigo-500 hover:border-zinc-500 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</label>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-100">Read 30 Minutes</span>
<span className="text-[10px] text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:book-linear" width="10"></iconify-icon> Learning
                                        </span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex -space-x-1">
<div className="w-1.5 h-6 bg-blue-500/50 rounded-full"></div>
<div className="w-1.5 h-6 bg-blue-500/50 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
<div className="w-1.5 h-6 bg-zinc-800 rounded-full"></div>
</div>
<button className="text-zinc-600 hover:text-zinc-300"><iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="group flex items-center justify-between p-4 bg-zinc-900/20 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/40 transition-all hover:border-zinc-700/50">
<div className="flex items-center gap-4">
<label className="relative flex items-center justify-center w-6 h-6 cursor-pointer group-hover:scale-105 transition-transform">
<input className="peer appearance-none w-6 h-6 border border-zinc-600 rounded-md bg-zinc-900/50 checked:bg-indigo-500 checked:border-indigo-500 hover:border-zinc-500 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</label>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-100">Workout</span>
<span className="text-[10px] text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:dumbbell-linear" width="10"></iconify-icon> Health
                                        </span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">3 sets left</span>
<button className="text-zinc-600 hover:text-zinc-300"><iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="group flex flex-col gap-3 p-4 bg-zinc-900/20 border border-zinc-800/60 rounded-xl hover:bg-zinc-900/40 transition-all hover:border-zinc-700/50">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-4">
<label className="relative flex items-center justify-center w-6 h-6 cursor-pointer">
<input className="peer appearance-none w-6 h-6 border border-zinc-600 rounded-md bg-zinc-900/50 checked:bg-indigo-500 checked:border-indigo-500 hover:border-zinc-500 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</label>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-100">Water Intake</span>
<span className="text-[10px] text-zinc-500">Goal: 2500ml</span>
</div>
</div>
<span className="text-xs text-zinc-400 font-mono">1250 / 2500</span>
</div>
<div className="w-full px-1">
<input className="w-full" max="2500" min="0" type="range" value="1250"/>
</div>
</div>

<button className="w-full py-3 border border-dashed border-zinc-800 rounded-xl text-zinc-500 text-sm hover:text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                                Create new habit
                            </button>
</div>
</div>

<div className="space-y-6">

<div className="p-5 bg-zinc-900/20 border border-zinc-800/60 rounded-xl">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-200">Consistency</h3>
<button className="text-zinc-500 hover:text-zinc-300"><iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon></button>
</div>

<div className="grid grid-cols-7 gap-1.5">

<div className="text-[10px] text-zinc-600 text-center">M</div>
<div className="text-[10px] text-zinc-600 text-center">T</div>
<div className="text-[10px] text-zinc-600 text-center">W</div>
<div className="text-[10px] text-zinc-600 text-center">T</div>
<div className="text-[10px] text-zinc-600 text-center">F</div>
<div className="text-[10px] text-zinc-600 text-center">S</div>
<div className="text-[10px] text-zinc-600 text-center">S</div>

<div className="aspect-square rounded-sm bg-indigo-500/20 border border-indigo-500/10"></div>
<div className="aspect-square rounded-sm bg-indigo-500/40 border border-indigo-500/20"></div>
<div className="aspect-square rounded-sm bg-indigo-500/80 border border-indigo-500/40 shadow-[0_0_6px_rgba(99,102,241,0.4)]"></div>
<div className="aspect-square rounded-sm bg-zinc-800/50"></div>
<div className="aspect-square rounded-sm bg-indigo-500/60 border border-indigo-500/30"></div>
<div className="aspect-square rounded-sm bg-indigo-500/30 border border-indigo-500/10"></div>
<div className="aspect-square rounded-sm bg-zinc-800/50"></div>
<div className="aspect-square rounded-sm bg-zinc-800/50"></div>
<div className="aspect-square rounded-sm bg-indigo-500/90 border border-indigo-500/50 shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
<div className="aspect-square rounded-sm bg-indigo-500/50 border border-indigo-500/20"></div>
<div className="aspect-square rounded-sm bg-indigo-500/30 border border-indigo-500/10"></div>
<div className="aspect-square rounded-sm bg-zinc-800/50"></div>
<div className="aspect-square rounded-sm bg-indigo-500/20 border border-indigo-500/10"></div>
<div className="aspect-square rounded-sm bg-zinc-800/50 border border-zinc-700/50 relative">
<div className="absolute inset-0 border border-white/20 rounded-sm"></div>
</div> 
</div>
</div>

<div className="p-5 bg-gradient-to-br from-indigo-900/10 to-purple-900/10 border border-indigo-500/10 rounded-xl relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full"></div>
<div className="flex items-start gap-3 mb-2">
<iconify-icon className="text-amber-300" icon="solar:lightbulb-bolt-linear" width="20"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-200">Insight</h3>
</div>
<p className="text-xs text-zinc-400 leading-relaxed">
                                You are most productive between <span className="text-zinc-200 font-medium">9 AM</span> and <span className="text-zinc-200 font-medium">11 AM</span>. Try scheduling your "Deep Work" habit then.
                            </p>
</div>

<div className="p-5 bg-zinc-900/20 border border-zinc-800/60 rounded-xl flex items-center gap-4">
<div className="relative w-16 h-16">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-zinc-800" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-indigo-500" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" stroke-dasharray="175.9" stroke-dashoffset="44" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-semibold">75%</span>
</div>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Daily Goal</div>
<div className="text-xs text-zinc-500">6/8 habits completed</div>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-12 mb-6 border-t border-zinc-800/50 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-zinc-600">
<p>© 2023 Focus App Inc. All rights reserved.</p>
<div className="flex gap-4 mt-2 sm:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Help</a>
</div>
</footer>
</div>
</main>

<button className="md:hidden fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 rounded-full text-white shadow-lg shadow-indigo-500/30 flex items-center justify-center z-50">
<iconify-icon icon="solar:add-linear" width="24"></iconify-icon>
</button>

    </>
  );
}
