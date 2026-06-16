import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
25: '#FCFCFC',
50: '#FAFAFA',
100: '#F4F4F5',
200: '#E4E4E7',
300: '#D4D4D8',
400: '#A1A1AA',
500: '#71717A',
600: '#52525B',
700: '#3F3F46',
800: '#27272A',
900: '#18181B',
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
      

<div className="flex h-full w-full" x-data="{ 
        currentView: 'today', 
        modalOpen: false,
        settingsOpen: false,
        activeCategory: 'all',
        categories: [
            {id: 'work', label: 'Work', color: 'bg-blue-500'},
            {id: 'personal', label: 'Personal', color: 'bg-zinc-500'},
            {id: 'learning', label: 'Learning', color: 'bg-orange-500'},
            {id: 'health', label: 'Health', color: 'bg-emerald-500'},
            {id: 'metime', label: 'Me-time', color: 'bg-purple-500'}
        ],
        tasks: [
            {id: 1, title: 'Morning Standup', time: '10:00 AM', category: 'work', completed: false, repeat: 'Weekdays'},
            {id: 2, title: 'Take Vitamin D', time: '08:00 AM', category: 'health', completed: true, repeat: 'Daily'},
            {id: 3, title: 'Read System Design', time: '09:00 PM', category: 'learning', completed: false, repeat: 'Mon, Wed, Fri'},
            {id: 4, title: 'Review PRs', time: '02:00 PM', category: 'work', completed: false, repeat: 'Weekdays'}
        ],
        upcoming: [
            {id: 5, title: 'Weekly Planning', time: 'Tomorrow', category: 'work', repeat: 'Weekly'},
            {id: 6, title: 'Gym Session', time: 'Tomorrow', category: 'health', repeat: 'Tue, Thu'}
        ]
    }">

<aside className="hidden md:flex flex-col w-64 border-r border-zinc-100 bg-zinc-25 h-full pt-8 pb-6 px-4 justify-between">
<div>
<div className="px-3 mb-8 flex items-center gap-2">
<div className="w-5 h-5 bg-zinc-900 rounded-md flex items-center justify-center text-white text-[10px] font-bold tracking-tighter">R</div>
<span className="font-semibold tracking-tight text-sm">Repeat.</span>
</div>
<nav className="space-y-0.5">
<button :className="currentView === 'today' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700'" @click="currentView = 'today'" className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:sun-2-linear" width="18"></iconify-icon>
                        Today
                    </button>
<button :className="currentView === 'upcoming' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700'" @click="currentView = 'upcoming'" className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                        Upcoming
                    </button>
<button :className="currentView === 'settings' ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-700'" @click="currentView = 'settings'" className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                        Settings
                    </button>
</nav>
<div className="mt-8 px-3">
<div className="text-xs font-medium text-zinc-400 mb-3 tracking-tight">LISTS</div>
<div className="space-y-1">
<template x-htmlFor="cat in categories">
<button className="w-full flex items-center gap-3 py-1.5 text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
<span :className="cat.color" className="w-1.5 h-1.5 rounded-full"></span>
<span x-text="cat.label"></span>
</button>
</template>
</div>
</div>
</div>
<div className="px-3">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:cloud-check-linear" width="14"></iconify-icon>
<span>Synced</span>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto relative bg-white">
<div className="max-w-2xl mx-auto w-full px-5 py-8 md:py-12 pb-24 md:pb-12">

<div x-show="currentView === 'today'" x-transition.opacity="">
<header className="mb-8">
<div className="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wide">Tuesday, Oct 24</div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Today's Focus</h1>
</header>

<div className="space-y-1 mb-8">
<template :key="task.id" x-htmlFor="task in tasks.filter(t =&gt; !t.completed)">
<div className="group flex items-start gap-3.5 py-3 border-b border-zinc-50 hover:bg-zinc-50 -mx-3 px-3 rounded-xl transition-all cursor-default">
<label className="custom-checkbox relative flex items-center justify-center mt-0.5 cursor-pointer">
<input @change="task.completed = !task.completed" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 rounded-[6px] transition-colors peer-hover:border-zinc-400 flex items-center justify-center bg-white">
<svg className="w-3 h-3 text-white opacity-0 transition-all duration-200 transform scale-50" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-900 truncate" x-text="task.title"></div>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-zinc-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span x-text="task.time"></span>
</span>
<span className="text-[10px] px-1.5 py-0.5 bg-zinc-100 text-zinc-500 rounded border border-zinc-200 font-medium" x-text="task.repeat"></span>

<template x-htmlFor="cat in categories">
<span :className="cat.color" className="w-1.5 h-1.5 rounded-full ml-1" x-show="cat.id === task.category"></span>
</template>
</div>
</div>
</div>
</template>
</div>

<div x-data="{ showCompleted: false }">
<button @click="showCompleted = !showCompleted" className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-600 transition-colors mb-4">
<span>Completed</span>
<iconify-icon :icon="showCompleted ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear'" width="12"></iconify-icon>
</button>
<div className="space-y-1 opacity-50" x-collapse="" x-show="showCompleted">
<template :key="task.id" x-htmlFor="task in tasks.filter(t =&gt; t.completed)">
<div className="flex items-start gap-3.5 py-3 border-b border-transparent -mx-3 px-3">
<label className="custom-checkbox relative flex items-center justify-center mt-0.5 cursor-pointer">
<input @change="task.completed = !task.completed" checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 rounded-[6px] transition-colors flex items-center justify-center bg-zinc-900 border-zinc-900">
<svg className="w-3 h-3 text-white opacity-100 transform scale-100" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-zinc-500 line-through truncate" x-text="task.title"></div>
</div>
</div>
</template>
</div>
</div>
</div>

<div style={{display: 'none'}} x-show="currentView === 'upcoming'">
<header className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Upcoming</h1>
</header>
<div className="mb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tomorrow</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden mb-6">
<template :key="task.id" x-htmlFor="(task, index) in upcoming">
<div :className="index !== upcoming.length - 1 ? 'border-b border-zinc-100' : ''" className="flex items-center gap-4 p-4">
<div className="w-1 h-8 rounded-full bg-zinc-100 shrink-0"></div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900" x-text="task.title"></div>
<div className="text-xs text-zinc-500 mt-0.5" x-text="task.repeat"></div>
</div>
<div className="text-xs bg-zinc-50 text-zinc-500 border border-zinc-200 px-2 py-1 rounded-md" x-text="task.category"></div>
</div>
</template>
</div>
<div className="mb-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">Later This Week</div>
<div className="text-sm text-zinc-500 italic p-4 text-center border border-dashed border-zinc-200 rounded-xl">
                        No tasks scheduled yet.
                    </div>
</div>

<div style={{display: 'none'}} x-show="currentView === 'settings'">
<header className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Settings</h1>
</header>
<div className="space-y-6">

<section>
<h3 className="text-sm font-medium text-zinc-900 mb-3">Working Days</h3>
<div className="flex gap-2 flex-wrap">
<template x-htmlFor="day in ['M','T','W','T','F','S','S']">
<button :className="day !== 'S' ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-400 border-zinc-200 hover:border-zinc-400'" className="w-9 h-9 rounded-full border text-xs font-medium transition-all">
<span x-text="day"></span>
</button>
</template>
</div>
<p className="text-xs text-zinc-500 mt-2">Reminders will be suppressed on non-working days unless overridden.</p>
</section>
<div className="h-px bg-zinc-100 w-full"></div>

<section className="space-y-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Push Notifications</h3>
<p className="text-xs text-zinc-500">Receive alerts on this device</p>
</div>
<button className="w-10 h-6 bg-zinc-900 rounded-full relative">
<span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-900">Offline Mode</h3>
<p className="text-xs text-zinc-500">Data persists locally via IndexedDB</p>
</div>
<div className="text-xs text-emerald-600 font-medium flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                    Active
                                </div>
</div>
</section>
<div className="h-px bg-zinc-100 w-full"></div>
<button className="text-sm text-red-600 font-medium hover:text-red-700">Export Data (JSON)</button>
</div>
</div>
</div>
</main>

<button @click="modalOpen = true" className="fixed bottom-20 md:bottom-10 right-5 md:right-10 w-12 h-12 md:w-14 md:h-14 bg-zinc-900 text-white rounded-full shadow-lg shadow-zinc-900/20 flex items-center justify-center hover:scale-105 transition-transform z-20">
<iconify-icon icon="solar:add-linear" width="24"></iconify-icon>
</button>

<nav className="md:hidden fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-zinc-200 pb-safe pt-2 px-6 flex justify-between items-center h-[60px] z-10">
<button :className="currentView === 'today' ? 'text-zinc-900' : 'text-zinc-400'" @click="currentView = 'today'" className="flex flex-col items-center gap-1">
<iconify-icon icon="solar:sun-2-linear" width="22"></iconify-icon>
</button>
<button :className="currentView === 'upcoming' ? 'text-zinc-900' : 'text-zinc-400'" @click="currentView = 'upcoming'" className="flex flex-col items-center gap-1">
<iconify-icon icon="solar:calendar-linear" width="22"></iconify-icon>
</button>
<button :className="currentView === 'settings' ? 'text-zinc-900' : 'text-zinc-400'" @click="currentView = 'settings'" className="flex flex-col items-center gap-1">
<iconify-icon icon="solar:settings-linear" width="22"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{display: 'none'}} x-show="modalOpen">

<div @click="modalOpen = false" className="absolute inset-0 bg-white/60 backdrop-blur-custom" x-show="modalOpen" x-transition.opacity=""></div>

<div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden" x-show="modalOpen" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-4 scale-95">
<div className="p-5">
<input className="w-full text-lg font-medium placeholder:text-zinc-300 border-none outline-none bg-transparent mb-4" placeholder="What needs to be done?" type="text"/>
<textarea className="w-full text-sm text-zinc-600 placeholder:text-zinc-300 border-none outline-none bg-transparent resize-none mb-4" placeholder="Notes (optional)" rows="2"></textarea>

<div className="space-y-4">

<div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
<template x-htmlFor="cat in categories">
<button :className="activeCategory === cat.id ? 'bg-zinc-900 text-white border-zinc-900' : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300'" @click="activeCategory = cat.id" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border whitespace-nowrap transition-colors">
<span :className="activeCategory === cat.id ? 'bg-white' : cat.color" className="w-1.5 h-1.5 rounded-full"></span>
<span x-text="cat.label"></span>
</button>
</template>
</div>
<div className="h-px bg-zinc-50 w-full"></div>

<div className="grid grid-cols-2 gap-4">

<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Repeat Pattern</label>
<div className="relative">
<select className="w-full appearance-none bg-zinc-50 border border-zinc-200 text-zinc-700 text-sm rounded-lg px-3 py-2 pr-8 focus:outline-none focus:border-zinc-400">
<option>Daily</option>
<option>Weekdays (Mon-Fri)</option>
<option>Weekly</option>
<option>Monthly</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="space-y-1">
<label className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">Reminder</label>
<div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2">
<iconify-icon className="text-zinc-400" icon="solar:alarm-linear" width="16"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-zinc-700 w-full p-0" type="time" value="09:00"/>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<span className="text-xs font-medium text-zinc-600">Skip non-working days</span>
<button className="w-8 h-4 bg-zinc-200 rounded-full relative transition-colors hover:bg-zinc-300">
<span className="absolute left-1 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></span>
</button>
</div>
</div>
</div>

<div className="bg-zinc-50 px-5 py-3 flex justify-end gap-3 border-t border-zinc-100">
<button @click="modalOpen = false" className="text-sm font-medium text-zinc-500 hover:text-zinc-800 px-3 py-2">Cancel</button>
<button @click="modalOpen = false; tasks.push({id: Date.now(), title: 'New Task', time: '09:00 AM', category: activeCategory, completed: false, repeat: 'Daily'})" className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors shadow-sm">Save Task</button>
</div>
</div>
</div>
</div>

    </>
  );
}
