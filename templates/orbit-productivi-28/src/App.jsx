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
mono: ['JetBrains Mono', 'monospace'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
sidebar: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
highlight: '#27272a', // Zinc 800
primary: '#6366f1', // Indigo 500
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
      

<aside className="w-64 border-r border-white/5 bg-sidebar/80 backdrop-blur-xl flex flex-col justify-between z-20 hidden md:flex">
<div>

<div className="h-14 flex items-center px-5 border-b border-white/5">
<div className="font-semibold tracking-tighter text-white text-lg flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-white font-bold text-xs">O</div>
                    ORBIT
                </div>
</div>

<div className="p-3 space-y-1">
<div className="px-2 py-1.5 text-xs font-medium text-zinc-500 uppercase tracking-wider">Workspace</div>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md bg-white/5 text-white text-sm font-medium" href="#">
<span className="iconify text-zinc-400" data-icon="lucide:layout-dashboard" data-width="18"></span>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
                    Tasks &amp; Habits
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
                    Journal &amp; Notes
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm font-medium" href="#">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="18"></span>
                    Timeline
                </a>
<div className="px-2 py-1.5 mt-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Gamification</div>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm font-medium group" href="#">
<span className="iconify group-hover:text-yellow-400 transition-colors" data-icon="lucide:trophy" data-width="18"></span>
                    Achievements
                </a>
<a className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-white/5 text-zinc-400 hover:text-white transition-colors text-sm font-medium group" href="#">
<span className="iconify group-hover:text-purple-400 transition-colors" data-icon="lucide:shopping-bag" data-width="18"></span>
                    Shop &amp; Avatars
                </a>
</div>

<div className="p-3 mt-2">
<div className="flex items-center justify-between px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">
<span>Projects</span>
<span className="iconify hover:text-white cursor-pointer" data-icon="lucide:plus" data-width="14"></span>
</div>
<div className="space-y-0.5">
<div className="flex items-center gap-2 px-2 py-1 text-sm text-zinc-400 hover:text-white cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Q3 Goals
                    </div>
<div className="flex items-center gap-2 px-2 py-1 text-sm text-zinc-400 hover:text-white cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Website Redesign
                    </div>
<div className="flex items-center gap-2 px-2 py-1 text-sm text-zinc-400 hover:text-white cursor-pointer">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Fitness Arc
                    </div>
</div>
</div>
</div>

<div className="p-3 border-t border-white/5">
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 cursor-pointer">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?img=11"/>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-black rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate">Alex Designer</div>
<div className="text-xs text-zinc-500 truncate">Lvl 12 • 2,400 XP</div>
</div>
<span className="iconify text-zinc-500" data-icon="lucide:settings-2" data-width="16"></span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-14 border-b border-white/5 bg-sidebar/50 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">

<div className="flex items-center gap-2 text-sm">
<span className="text-zinc-500">Dashboard</span>
<span className="text-zinc-700">/</span>
<span className="text-white font-medium">Overview</span>
</div>

<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-medium">
<span className="iconify" data-icon="lucide:coins" data-width="14"></span>
                    450
                </div>

<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-md border border-white/5 text-zinc-500 w-64 group focus-within:ring-1 focus-within:ring-indigo-500/50">
<span className="iconify group-hover:text-zinc-300" data-icon="lucide:search" data-width="16"></span>
<input className="bg-transparent border-none outline-none text-sm w-full text-zinc-300 placeholder-zinc-600" placeholder="Search tasks, habits..." type="text"/>
<kbd className="hidden lg:inline-block text-[10px] font-mono border border-white/10 rounded px-1 text-zinc-600">⌘K</kbd>
</div>

<button className="relative text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
<span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full border border-black"></span>
</button>

<button className="md:hidden text-zinc-400">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 flex flex-col justify-between p-6 rounded-xl bg-surface border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[100px] rounded-full"></div>
<div>
<h1 className="text-2xl font-semibold text-white tracking-tight mb-1">Good evening, Alex.</h1>
<p className="text-zinc-400 text-sm">You have 4 tasks due today and your reading habit is at risk.</p>
</div>
<div className="mt-8 flex gap-6">
<div className="flex-1">
<div className="flex justify-between text-xs font-medium uppercase tracking-wide text-zinc-500 mb-2">
<span>Daily XP Goal</span>
<span>85%</span>
</div>
<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[85%]"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-center">
<div className="text-xl font-bold text-white tracking-tight">12</div>
<div className="text-[10px] uppercase text-zinc-500 font-medium">Streak</div>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="text-center">
<div className="text-xl font-bold text-white tracking-tight">4.2h</div>
<div className="text-[10px] uppercase text-zinc-500 font-medium">Focus</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 p-6 rounded-xl bg-surface border border-white/5 flex flex-col items-center justify-center relative">
<div className="absolute top-4 right-4 text-zinc-500 cursor-pointer hover:text-white">
<span className="iconify" data-icon="lucide:maximize-2" data-width="16"></span>
</div>
<div className="w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center relative mb-4">
<svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
<circle className="text-indigo-500" cx="60" cy="60" fill="transparent" r="58" stroke="currentColor" stroke-dasharray="365" stroke-dashoffset="90" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="text-center">
<div className="text-3xl font-mono font-bold text-white">25:00</div>
<div className="text-xs text-zinc-500 mt-1">Focus Mode</div>
</div>
</div>
<div className="flex gap-3">
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors">Start</button>
<button className="bg-white/5 hover:bg-white/10 text-zinc-300 px-4 py-1.5 rounded text-sm font-medium transition-colors">Reset</button>
</div>
</div>
</div>

<div className="w-full">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold text-white tracking-tight">Productivity Velocity</h2>
<select className="bg-transparent text-xs text-zinc-500 border-none outline-none cursor-pointer hover:text-white">
<option>Last 7 Days</option>
<option>Last Month</option>
</select>
</div>
<div className="h-64 w-full bg-surface/50 border border-white/5 rounded-xl p-4 relative">

<svg className="w-full h-full overflow-visible" viewbox="0 0 1000 250">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#3f3f46" stroke-dasharray="4" strokeWidth="0.5" x1="0" x2="1000" y1="200" y2="200"></line>
<line stroke="#3f3f46" stroke-dasharray="4" strokeWidth="0.5" x1="0" x2="1000" y1="100" y2="100"></line>

<path d="M0,220 C100,210 150,230 200,180 S300,120 400,140 S500,200 600,100 S750,120 850,50 S950,20 1000,10" fill="url(#chartGradient)" stroke="none"></path>
<path d="M0,220 C100,210 150,230 200,180 S300,120 400,140 S500,200 600,100 S750,120 850,50 S950,20 1000,10" fill="none" stroke="#818cf8" strokeWidth="2"></path>

<circle className="animate-pulse-slow" cx="850" cy="50" fill="#18181b" r="4" stroke="#fff" strokeWidth="2"></circle>
</svg>

<div className="absolute top-10 right-20 bg-zinc-900 border border-indigo-500/30 text-indigo-300 text-xs px-2 py-1 rounded shadow-lg">
                        +12% Efficiency
                    </div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">

<div className="flex flex-col h-full bg-surface border border-white/5 rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
<div className="flex items-center gap-3">
<h3 className="font-medium text-white text-sm">Active Sprints</h3>
<div className="flex gap-1 bg-white/5 rounded p-0.5">
<button className="p-1 rounded bg-white/10 text-white"><span className="iconify" data-icon="lucide:kanban" data-width="14"></span></button>
<button className="p-1 rounded hover:bg-white/5 text-zinc-500"><span className="iconify" data-icon="lucide:list" data-width="14"></span></button>
</div>
</div>
<button className="text-xs flex items-center gap-1 text-indigo-400 hover:text-indigo-300">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span> AI Auto-Sort
                        </button>
</div>
<div className="flex-1 overflow-x-auto p-4 flex gap-4">

<div className="w-60 flex-shrink-0 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 uppercase tracking-wide px-1">
<span>To Do</span>
<span>3</span>
</div>

<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg hover:border-zinc-700 transition-colors cursor-grab active:cursor-grabbing group">
<div className="flex justify-between items-start mb-2">
<span className="text-xs bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/10">High</span>
<button className="opacity-0 group-hover:opacity-100 text-zinc-500"><span className="iconify" data-icon="lucide:more-horizontal" data-width="14"></span></button>
</div>
<p className="text-sm text-zinc-200 mb-3">Refactor authentication flow with OAuth</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img className="w-5 h-5 rounded-full border border-zinc-900" src="https://i.pravatar.cc/150?img=12"/>
</div>
<div className="flex items-center gap-1 text-zinc-500 text-xs">
<span className="iconify" data-icon="lucide:paperclip" data-width="12"></span> 2
                                    </div>
</div>
</div>

<div className="bg-zinc-900 border border-white/5 p-3 rounded-lg hover:border-zinc-700 transition-colors cursor-grab">
<div className="flex justify-between items-start mb-2">
<span className="text-xs bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">Med</span>
</div>
<p className="text-sm text-zinc-200 mb-3">Update color palette for dark mode</p>
<div className="flex items-center justify-between">
<span className="text-[10px] text-zinc-600">Due Tomorrow</span>
</div>
</div>
</div>

<div className="w-60 flex-shrink-0 flex flex-col gap-3">
<div className="flex items-center justify-between text-xs font-medium text-indigo-400 uppercase tracking-wide px-1">
<span>In Progress</span>
<span>1</span>
</div>
<div className="bg-zinc-900 border border-indigo-500/20 p-3 rounded-lg shadow-lg shadow-indigo-500/5">
<div className="w-full h-24 bg-zinc-800 rounded-md mb-2 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-purple-900/40"></div>
<div className="absolute bottom-1 right-1 bg-black/50 px-1 rounded text-[10px]">Cover</div>
</div>
<p className="text-sm text-zinc-200 mb-2">Design System Documentation</p>
<div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mb-2">
<div className="bg-indigo-500 w-2/3 h-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col h-full bg-surface border border-white/5 rounded-xl overflow-hidden relative">
<div className="p-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
<div className="flex items-center gap-2 text-zinc-500">
<span className="iconify" data-icon="lucide:book" data-width="14"></span>
<span className="text-xs">Journal / Oct 24</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500">Saved just now</span>
<button className="text-zinc-400 hover:text-white"><span className="iconify" data-icon="lucide:more-vertical" data-width="16"></span></button>
</div>
</div>

<div className="flex-1 p-8 overflow-y-auto cursor-text font-serif" contenteditable="true">

<div className="w-full h-32 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-lg mb-6 group relative">
<button className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Change Cover</button>
</div>

<h1 className="text-3xl font-bold text-white mb-6 outline-none tracking-tight font-sans">Daily Reflection</h1>

<div className="space-y-4 text-zinc-300 text-lg leading-relaxed outline-none">
<p>Today was incredibly productive. I managed to close the gap on the <span className="bg-indigo-500/20 text-indigo-300 px-1 rounded text-base mx-1 font-sans">@Project Alpha</span> milestones.</p>

<div className="flex gap-3 p-4 bg-zinc-800/50 rounded-md border-l-4 border-yellow-500 my-4 font-sans text-base">
<span className="iconify text-yellow-500 mt-0.5" data-icon="lucide:lightbulb" data-width="20"></span>
<div>
<strong className="text-white block text-sm mb-1">Idea for tomorrow</strong>
<span className="text-zinc-400 text-sm">Implement the AI feedback loop for the habit tracker. It needs to be subtler.</span>
</div>
</div>
<h2 className="text-xl font-semibold text-white mt-6 font-sans tracking-tight">Mood Check</h2>
<div className="flex gap-2 my-2">
<button className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm border border-zinc-700">🚀 Energetic</button>
<button className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-sm">🧠 Focused</button>
</div>
<p className="editor-placeholder" data-placeholder="Type '/' for commands"></p>
</div>
</div>

<div className="absolute bottom-6 right-6">
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full shadow-lg shadow-indigo-500/20 text-sm font-medium transition-all hover:scale-105">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                            AI Summary
                        </button>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8">
<h2 className="text-lg font-semibold text-white mb-4">Admin Controls</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-zinc-600 transition-colors cursor-pointer">
<span className="iconify text-indigo-400 mb-2" data-icon="lucide:users" data-width="24"></span>
<div className="font-medium text-white text-sm">User Management</div>
<div className="text-xs text-zinc-500 mt-1">Manage 12 active users</div>
</div>
<div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-zinc-600 transition-colors cursor-pointer">
<span className="iconify text-purple-400 mb-2" data-icon="lucide:palette" data-width="24"></span>
<div className="font-medium text-white text-sm">Theme Builder</div>
<div className="text-xs text-zinc-500 mt-1">Edit Neon/Galaxy presets</div>
</div>
<div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-zinc-600 transition-colors cursor-pointer">
<span className="iconify text-emerald-400 mb-2" data-icon="lucide:database" data-width="24"></span>
<div className="font-medium text-white text-sm">Database</div>
<div className="text-xs text-zinc-500 mt-1">View schemas &amp; backups</div>
</div>
<div className="bg-surface p-4 rounded-lg border border-white/5 hover:border-zinc-600 transition-colors cursor-pointer">
<span className="iconify text-orange-400 mb-2" data-icon="lucide:gamepad-2" data-width="24"></span>
<div className="font-medium text-white text-sm">Gamification Engine</div>
<div className="text-xs text-zinc-500 mt-1">Adjust XP &amp; Drop rates</div>
</div>
</div>
</div>

<div className="h-12"></div>
</div>
</main>

<button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/40 z-50">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</button>

    </>
  );
}
