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
      

<aside className="w-64 border-r border-white/5 flex flex-col justify-between bg-[#080808] hidden md:flex h-screen sticky top-0">
<div>

<div className="p-6 flex items-center gap-3">
<div className="size-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="18"></span>
</div>
<h1 className="font-semibold text-white tracking-tight">SecondBrain</h1>
</div>

<nav className="px-3 space-y-1">
<a className="nav-item active flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-white/5 text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
                    Dashboard
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-white/5 text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:book-open" data-width="16"></span>
                    Classes
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-white/5 text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="16"></span>
                    Assignments
                    <span className="ml-auto bg-purple-500/20 text-purple-400 text-[10px] px-1.5 py-0.5 rounded-full font-mono">3</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-white/5 text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:target" data-width="16"></span>
                    Habits &amp; Goals
                </a>
<a className="nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-all hover:bg-white/5 text-neutral-400 hover:text-white" href="#">
<span className="iconify" data-icon="lucide:calculator" data-width="16"></span>
                    GPA Calculator
                </a>
</nav>
<div className="mt-8 px-6">
<p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider mb-2">My Playlists</p>
<div className="space-y-1">
<a className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors py-1" href="#">
<div className="size-2 rounded-full bg-red-500/50"></div> Lo-Fi Study
                    </a>
<a className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors py-1" href="#">
<div className="size-2 rounded-full bg-blue-500/50"></div> Deep Focus
                    </a>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5">
<div className="glass-card p-3 rounded-lg mb-4 bg-gradient-to-br from-purple-900/10 to-transparent border-purple-500/10">
<div className="flex items-start justify-between">
<div>
<p className="text-xs font-semibold text-white">Unlock Pro</p>
<p className="text-[10px] text-neutral-400 mt-1">Unlimited classes, file uploads &amp; Notion sync.</p>
</div>
<span className="iconify text-purple-400" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<button className="w-full mt-3 bg-white text-black text-xs font-semibold py-1.5 rounded hover:bg-neutral-200 transition-colors">Upgrade $5/mo</button>
</div>
<div className="flex items-center gap-3 px-1 cursor-pointer hover:opacity-80 transition-opacity">
<div className="size-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">Alex Student</p>
<p className="text-[10px] text-neutral-500 truncate">Computer Science</p>
</div>
<span className="iconify text-neutral-500" data-icon="lucide:settings-2" data-width="14"></span>
</div>
</div>
</aside>

<main className="flex-1 h-screen overflow-y-auto relative">

<header className="sticky top-0 z-20 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-400"><span className="iconify" data-icon="lucide:menu"></span></button>
<h2 className="text-sm font-medium text-white">Dashboard</h2>
<span className="text-neutral-700">/</span>
<span className="text-sm text-neutral-500">Fall Semester 2024</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="iconify absolute left-3 top-2 text-neutral-500 group-focus-within:text-purple-400" data-icon="lucide:search" data-width="16"></span>
<input className="bg-neutral-900/50 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-purple-500/50 w-64 transition-all" placeholder="Search assignments..." type="text"/>
<div className="absolute right-2 top-1.5 flex gap-1">
<span className="text-[10px] border border-white/10 rounded px-1.5 text-neutral-500 font-mono">⌘K</span>
</div>
</div>
<button className="size-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 transition-colors border border-white/5">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
</button>
<button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                    New Task
                </button>
</div>
</header>
<div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="glass-card rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div>
<p className="text-[10px] text-neutral-500 uppercase font-semibold tracking-wider">Current GPA</p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono">3.85</h3>
<p className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span> +0.12 last sem
                        </p>
</div>
<div className="size-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
</div>
<div className="glass-card rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
<div>
<p className="text-[10px] text-neutral-500 uppercase font-semibold tracking-wider">Assignments Due</p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono">3</h3>
<p className="text-[10px] text-red-400 mt-1">2 due tomorrow</p>
</div>
<div className="size-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
<span className="iconify" data-icon="lucide:clock-alert" data-width="20"></span>
</div>
</div>
<div className="glass-card rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
<div>
<p className="text-[10px] text-neutral-500 uppercase font-semibold tracking-wider">Focus Time</p>
<h3 className="text-2xl font-bold text-white mt-1 font-mono">12h 30m</h3>
<p className="text-[10px] text-neutral-400 mt-1">This week</p>
</div>
<div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<span className="iconify" data-icon="lucide:timer" data-width="20"></span>
</div>
</div>
<div className="glass-card rounded-xl p-4 flex flex-col justify-center relative overflow-hidden group border-dashed border-neutral-800 hover:border-neutral-700 bg-transparent cursor-pointer">
<div className="flex flex-col items-center gap-2 text-neutral-500 group-hover:text-neutral-300 transition-colors">
<span className="iconify" data-icon="lucide:plus-circle" data-width="24"></span>
<span className="text-xs font-medium">Add Widget</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-white">Today's Schedule</h3>
<button className="text-[10px] text-neutral-500 hover:text-white transition-colors">View Calendar</button>
</div>
<div className="space-y-3">

<div className="glass-card p-4 rounded-xl border-l-4 border-l-green-500 flex items-center justify-between relative overflow-hidden">
<div className="absolute right-4 top-4">
<span className="flex items-center gap-1.5 text-[10px] font-bold text-green-400 bg-green-900/20 px-2 py-0.5 rounded-full border border-green-500/20">
<span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span> NOW
                                    </span>
</div>
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center size-12 rounded bg-neutral-900 border border-white/5 text-neutral-400 font-mono text-xs">
<span className="font-bold text-white">10</span>
<span>AM</span>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Advanced Algorithms</h4>
<p className="text-xs text-neutral-500 flex items-center gap-2 mt-0.5">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Room 402 • CS-301
                                        </p>
</div>
</div>
<div className="hidden sm:block text-right">
<p className="text-xs text-neutral-400">Lecture 4: Dynamic Programming</p>
<div className="w-32 h-1 bg-neutral-800 rounded-full mt-2 ml-auto overflow-hidden">
<div className="h-full bg-green-500 w-[45%]"></div>
</div>
</div>
</div>

<div className="glass-card p-4 rounded-xl border-l-4 border-l-purple-500/50 flex items-center justify-between opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-4">
<div className="flex flex-col items-center justify-center size-12 rounded bg-neutral-900 border border-white/5 text-neutral-400 font-mono text-xs">
<span className="font-bold">02</span>
<span>PM</span>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-200">Database Systems</h4>
<p className="text-xs text-neutral-500 flex items-center gap-2 mt-0.5">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Lab 3 • CS-305
                                        </p>
</div>
</div>
<button className="p-2 hover:bg-white/5 rounded-lg text-neutral-400 transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-2">
<button className="text-sm font-medium text-white pb-2 border-b-2 border-purple-500">Upcoming Tasks</button>
<button className="text-sm font-medium text-neutral-500 hover:text-neutral-300 pb-2 border-b-2 border-transparent transition-colors">Exams</button>
</div>
<div className="bg-[#0A0A0A] border border-white/5 rounded-xl overflow-hidden">

<div className="p-4 border-b border-white/5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group">
<div className="relative flex items-center justify-center size-5">
<input className="peer appearance-none size-5 border border-neutral-600 rounded checked:bg-purple-600 checked:border-purple-600 transition-colors cursor-pointer" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm text-neutral-200 group-hover:text-white truncate">Database Design Project Phase 1</h4>
<p className="text-xs text-neutral-500">CS-305 • Prof. Smith</p>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-red-900/20 text-red-400 border border-red-500/20">High Priority</span>
<span className="text-xs font-mono text-neutral-400">Due Tomorrow</span>
</div>
</div>

<div className="p-4 border-b border-white/5 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group">
<div className="relative flex items-center justify-center size-5">
<input className="peer appearance-none size-5 border border-neutral-600 rounded checked:bg-purple-600 checked:border-purple-600 transition-colors cursor-pointer" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm text-neutral-200 group-hover:text-white truncate">Read Chapter 4: Greedy Algorithms</h4>
<p className="text-xs text-neutral-500">CS-301 • Textbook</p>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-blue-900/20 text-blue-400 border border-blue-500/20">Reading</span>
<span className="text-xs font-mono text-neutral-400">Fri, Oct 24</span>
</div>
</div>

<div className="p-4 flex items-center gap-4 hover:bg-white/[0.02] transition-colors group">
<div className="relative flex items-center justify-center size-5">
<input className="peer appearance-none size-5 border border-neutral-600 rounded checked:bg-purple-600 checked:border-purple-600 transition-colors cursor-pointer" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm text-neutral-200 group-hover:text-white truncate">Calculus Quiz Prep</h4>
<p className="text-xs text-neutral-500">MAT-201 • Quiz</p>
</div>
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800 text-neutral-400 border border-white/10">Medium</span>
<span className="text-xs font-mono text-neutral-400">Sat, Oct 25</span>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Daily Habits</h3>
<button className="text-neutral-500 hover:text-white"><span className="iconify" data-icon="lucide:more-horizontal"></span></button>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-blue-500/10 text-blue-400">
<span className="iconify" data-icon="lucide:droplets" data-width="14"></span>
</div>
<span className="text-sm text-neutral-300">Drink Water</span>
</div>
<div className="flex gap-1">
<div className="size-6 rounded bg-blue-500 flex items-center justify-center text-black text-[10px] font-bold">M</div>
<div className="size-6 rounded bg-blue-500 flex items-center justify-center text-black text-[10px] font-bold">T</div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-blue-500/50"></div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-blue-500/50"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-orange-500/10 text-orange-400">
<span className="iconify" data-icon="lucide:book" data-width="14"></span>
</div>
<span className="text-sm text-neutral-300">Read 30m</span>
</div>
<div className="flex gap-1">
<div className="size-6 rounded bg-orange-500 flex items-center justify-center text-black text-[10px] font-bold">M</div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-orange-500/50"></div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-orange-500/50"></div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-orange-500/50"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded bg-pink-500/10 text-pink-400">
<span className="iconify" data-icon="lucide:dumbbell" data-width="14"></span>
</div>
<span className="text-sm text-neutral-300">Gym</span>
</div>
<div className="flex gap-1">
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-pink-500/50"></div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-pink-500/50"></div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-pink-500/50"></div>
<div className="size-6 rounded bg-neutral-800 border border-white/5 cursor-pointer hover:border-pink-500/50"></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Grade Forecast</h3>
<span className="iconify text-neutral-500" data-icon="lucide:info" data-width="14"></span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">Algorithms</span>
<span className="text-green-400 font-mono">A (94%)</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[94%]"></div>
</div>
<div className="flex items-center justify-between text-xs pt-2">
<span className="text-neutral-300">Database Sys</span>
<span className="text-yellow-400 font-mono">B+ (88%)</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 w-[88%]"></div>
</div>
<div className="pt-2 text-center">
<button className="text-[10px] text-purple-400 hover:text-purple-300 font-medium border border-purple-500/30 px-3 py-1.5 rounded-full hover:bg-purple-500/10 transition-colors">
                                    Open Full Calculator
                                </button>
</div>
</div>
</div>

<div className="rounded-xl p-5 bg-gradient-to-b from-neutral-800 to-neutral-900 border border-white/5 text-center">
<div className="size-10 mx-auto rounded-lg bg-white text-black flex items-center justify-center mb-3">
<span className="iconify" data-icon="lucide:layout-template" data-width="20"></span>
</div>
<h4 className="text-sm font-semibold text-white mb-1">Student Template Pack</h4>
<p className="text-xs text-neutral-400 mb-4">Get pre-built setups for Engineering, Med, and Arts.</p>
<button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-medium py-2 rounded-lg transition-colors">
                            Browse Store ($10)
                        </button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
