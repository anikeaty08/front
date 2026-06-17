import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
25: '#FDFDFD',
50: '#FAFAFA',
100: '#F5F5F5',
200: '#E5E5E5',
300: '#D4D4D4',
400: '#A3A3A3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'float': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
'glow': '0 0 15px rgba(0, 0, 0, 0.1)',
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // Iconify
        lucide.createIcons();

        // Simple Tab Switching Logic
        function switchTab(tabId) {
            // Hide all views
            document.querySelectorAll('.page-content').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected view
            const selectedView = document.getElementById('view-' + tabId);
            if(selectedView) {
                selectedView.classList.remove('hidden');
                // Re-trigger animation
                selectedView.style.animation = 'none';
                selectedView.offsetHeight; /* trigger reflow */
                selectedView.style.animation = 'slideUpFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            }

            // Update Sidebar State
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('text-neutral-900', 'bg-neutral-50', 'border-neutral-100/50');
                el.classList.add('text-neutral-500', 'border-transparent');
                
                // Reset icon colors
                const icon = el.querySelector('svg');
                if(icon) icon.classList.remove('text-neutral-900');
            });

            const activeNav = document.getElementById('nav-' + tabId);
            if(activeNav) {
                activeNav.classList.remove('text-neutral-500', 'border-transparent');
                activeNav.classList.add('text-neutral-900', 'bg-neutral-50', 'border-neutral-100/50', 'border');
                const icon = activeNav.querySelector('svg');
                if(icon) icon.classList.add('text-neutral-900');
            }
        }

        // Modal Logic
        function openShareModal() {
            document.getElementById('shareModal').classList.remove('hidden');
        }
        function closeShareModal() {
            document.getElementById('shareModal').classList.add('hidden');
        }

        // Initialize icons on load
        window.addEventListener('load', () => {
            lucide.createIcons();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-[260px] border-r border-neutral-200/60 bg-white h-full p-5 justify-between z-20">
<div>

<div className="mb-8 px-2 flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center shadow-subtle group cursor-pointer hover:rotate-3 transition-transform">
<i className="w-4 h-4 text-white" data-lucide="activity"></i>
</div>
<div className="flex flex-col">
<span className="font-semibold tracking-tight text-sm text-neutral-900">Focus.</span>
<span className="text-[10px] text-neutral-500 font-medium tracking-wide">WORKSPACE</span>
</div>
</div>

<nav className="space-y-0.5">
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-900 bg-neutral-50 border border-neutral-100/50 transition-all" id="nav-home" onclick="switchTab('home')">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                    Overview
                </button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-all" id="nav-timeline" onclick="switchTab('timeline')">
<i className="w-4 h-4 group-hover:text-neutral-900 transition-colors" data-lucide="git-commit"></i>
                    Timeline
                </button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-all" id="nav-challenges" onclick="switchTab('challenges')">
<i className="w-4 h-4 group-hover:text-neutral-900 transition-colors" data-lucide="trophy"></i>
                    Challenges
                </button>
<button className="nav-item group w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-all" id="nav-insights" onclick="switchTab('insights')">
<i className="w-4 h-4 group-hover:text-neutral-900 transition-colors" data-lucide="bar-chart-3"></i>
                    Insights
                </button>
</nav>
<div className="mt-8 px-2">
<div className="flex items-center justify-between mb-2">
<div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Coach</div>
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
<div className="bg-neutral-900 rounded-xl p-3 text-white shadow-glow">
<div className="flex items-start gap-2">
<i className="w-3.5 h-3.5 mt-0.5 text-yellow-300" data-lucide="sparkles"></i>
<p className="text-[11px] leading-relaxed font-medium text-neutral-200">
                            Great consistency on <span className="text-white font-semibold">Meditation</span>. Ready to increase to 15 mins?
                        </p>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<button className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-neutral-50 text-sm font-medium py-2.5 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-subtle ring-1 ring-neutral-900/10" onclick="switchTab('add')">
<i className="w-4 h-4" data-lucide="plus"></i>
                Create New
            </button>
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200/60">
<div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center overflow-hidden">
<span className="text-xs font-medium text-neutral-600">JD</span>
</div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-neutral-900">John Doe</span>
<span className="text-[10px] text-neutral-500">Pro Plan</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#F8F9FA]">

<div className="md:hidden flex items-center justify-between p-4 border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-2">
<div className="w-7 h-7 bg-neutral-900 rounded-lg flex items-center justify-center">
<i className="w-3.5 h-3.5 text-white" data-lucide="activity"></i>
</div>
<span className="font-semibold text-sm tracking-tight text-neutral-900">Focus.</span>
</div>
<button className="relative p-2 text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth" id="main-scroll">
<div className="max-w-5xl mx-auto p-4 md:p-12 pb-24 md:pb-12">

<div className="page-content" id="view-home">
<header className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900">Good morning, Alex.</h1>
<p className="text-sm text-neutral-500 mt-2 font-medium">You have 2 pending habits for today.</p>
</div>
<div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-neutral-200 shadow-sm">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-neutral-100 text-neutral-900">Daily</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-neutral-500 hover:bg-neutral-50 transition-colors">Weekly</button>
</div>
</header>

<div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-6 mb-10 shadow-float relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-white" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-white font-medium text-sm">Adaptive Insight</h3>
<p className="text-neutral-400 text-xs mt-1 max-w-md leading-relaxed">
                                        You've missed "Evening Run" 3 times this week. Let's try <span className="text-white font-medium">Habit Stacking</span>: Place your running shoes by the door right after work.
                                    </p>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg transition-colors border border-white/5">
                                    Reduce Goal
                                </button>
<button className="flex-1 md:flex-none px-4 py-2 bg-white text-neutral-900 text-xs font-medium rounded-lg hover:bg-neutral-200 transition-colors shadow-subtle">
                                    Accept Tip
                                </button>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-card flex flex-col justify-between h-32 group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-orange-50 text-orange-600">
<i className="w-4 h-4" data-lucide="flame"></i>
</div>
<span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:scale-105 transition-transform origin-left">12</div>
<div className="text-xs font-medium text-neutral-500 mt-1">Day Streak</div>
</div>
</div>
<div className="p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-card flex flex-col justify-between h-32 group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-blue-50 text-blue-600">
<i className="w-4 h-4" data-lucide="check-circle-2"></i>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:scale-105 transition-transform origin-left">84%</div>
<div className="text-xs font-medium text-neutral-500 mt-1">Completion Rate</div>
</div>
</div>
<div className="p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-card flex flex-col justify-between h-32 group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-violet-50 text-violet-600">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:scale-105 transition-transform origin-left">8</div>
<div className="text-xs font-medium text-neutral-500 mt-1">Active Habits</div>
</div>
</div>
<div className="p-5 rounded-2xl bg-white border border-neutral-200/60 shadow-card flex flex-col justify-between h-32 group hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start">
<div className="p-2 rounded-lg bg-neutral-100 text-neutral-600">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:scale-105 transition-transform origin-left">14h</div>
<div className="text-xs font-medium text-neutral-500 mt-1">Focus Time</div>
</div>
</div>
</div>

<section className="space-y-4">
<div className="flex items-center justify-between px-1">
<h2 className="text-sm font-semibold text-neutral-900 tracking-tight">Today's Focus</h2>
<div className="flex items-center gap-2">
<div className="h-1.5 w-24 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-2/3 rounded-full"></div>
</div>
<span className="text-xs font-medium text-neutral-500">4/6</span>
</div>
</div>
<div className="bg-white rounded-2xl border border-neutral-200/60 shadow-subtle divide-y divide-neutral-100">

<label className="group flex items-center justify-between p-4 hover:bg-neutral-50/50 transition-colors cursor-pointer checkbox-wrapper first:rounded-t-2xl">
<div className="flex items-center gap-4">
<div className="relative">
<input checked="" className="hidden peer" type="checkbox"/>
<div className="w-5 h-5 rounded-full border-2 border-neutral-300 flex items-center justify-center transition-all bg-white group-hover:border-neutral-400 peer-checked:border-neutral-900 peer-checked:bg-neutral-900">
<svg className="w-3 h-3 text-white opacity-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-900 peer-checked:text-neutral-400 peer-checked:line-through transition-all">Morning Meditation</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
<p className="text-[11px] font-medium text-neutral-400">7:00 AM • Mindfulness</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full flex items-center gap-1">
<i className="w-3 h-3" data-lucide="flame"></i> 5
                                    </span>
</div>
</label>

<label className="group flex items-center justify-between p-4 hover:bg-neutral-50/50 transition-colors cursor-pointer checkbox-wrapper">
<div className="flex items-center gap-4">
<div className="relative">
<input className="hidden peer" type="checkbox"/>
<div className="w-5 h-5 rounded-full border-2 border-neutral-300 flex items-center justify-center transition-all bg-white group-hover:border-neutral-400 peer-checked:border-neutral-900 peer-checked:bg-neutral-900">
<svg className="w-3 h-3 text-white opacity-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-neutral-900 transition-colors">Read 30 pages</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<p className="text-[11px] font-medium text-neutral-400">Learning</p>
</div>
</div>
</div>
</label>
</div>
</section>
</div>

<div className="page-content hidden max-w-2xl mx-auto" id="view-add">
<header className="mb-8">
<button className="text-xs font-medium text-neutral-400 hover:text-neutral-900 mb-6 flex items-center gap-1.5 transition-colors group" onclick="switchTab('home')">
<i className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i> Back
                        </button>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Create New Habit</h1>
<p className="text-sm text-neutral-500 mt-1 font-medium">Design your new routine.</p>
</header>
<form className="space-y-8" id="addHabitForm" onsubmit="event.preventDefault(); switchTab('home'); alert('Habit Created Successfully');">

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Habit Name *</label>
<input className="w-full text-sm p-3.5 rounded-xl bg-white border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 shadow-sm focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100 transition-all" placeholder="e.g., Read 10 pages" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Category</label>
<div className="relative">
<select className="w-full text-sm p-3.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 shadow-sm focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100 appearance-none cursor-pointer transition-all">
<option>Health &amp; Fitness</option>
<option>Learning &amp; Growth</option>
<option>Mindfulness</option>
<option>Creativity</option>
<option>Finance</option>
</select>
<i className="absolute right-3.5 top-4 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Frequency</label>
<div className="relative">
<select className="w-full text-sm p-3.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 shadow-sm focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100 appearance-none cursor-pointer transition-all">
<option>Every Day</option>
<option>Weekdays</option>
<option>Weekends</option>
<option>Specific Days</option>
</select>
<i className="absolute right-3.5 top-4 w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Reminder Time</label>
<div className="relative">
<input className="w-full text-sm p-3.5 rounded-xl bg-white border border-neutral-200 text-neutral-700 shadow-sm focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100 transition-all" type="time" value="09:00"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Difficulty</label>
<div className="flex bg-neutral-100 p-1 rounded-xl">
<label className="flex-1 text-center">
<input checked="" className="hidden peer" name="difficulty" type="radio" value="easy"/>
<div className="text-xs font-medium py-2.5 rounded-lg text-neutral-500 peer-checked:bg-white peer-checked:text-neutral-900 peer-checked:shadow-sm cursor-pointer transition-all">Easy</div>
</label>
<label className="flex-1 text-center">
<input className="hidden peer" name="difficulty" type="radio" value="medium"/>
<div className="text-xs font-medium py-2.5 rounded-lg text-neutral-500 peer-checked:bg-white peer-checked:text-neutral-900 peer-checked:shadow-sm cursor-pointer transition-all">Medium</div>
</label>
<label className="flex-1 text-center">
<input className="hidden peer" name="difficulty" type="radio" value="hard"/>
<div className="text-xs font-medium py-2.5 rounded-lg text-neutral-500 peer-checked:bg-white peer-checked:text-neutral-900 peer-checked:shadow-sm cursor-pointer transition-all">Hard</div>
</label>
</div>
</div>
</div>

<div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 flex gap-3 items-start">
<i className="w-5 h-5 text-blue-500 mt-0.5" data-lucide="lightbulb"></i>
<div>
<h4 className="text-sm font-semibold text-blue-900">Coach Tip: Habit Stacking</h4>
<p className="text-xs text-blue-700 mt-1">
                                    Link this new habit to an existing one. <br/>
                                    "After I <span className="font-medium underline decoration-dashed">pour my coffee</span>, I will <span className="font-medium">read 10 pages</span>."
                                </p>
</div>
</div>
<div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
<button className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" onclick="switchTab('home')" type="button">Cancel</button>
<button className="bg-neutral-900 text-white font-medium text-sm px-8 py-3.5 rounded-xl hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/10 active:scale-[0.99] flex items-center gap-2" type="submit">
<i className="w-4 h-4" data-lucide="check"></i> Create Routine
                            </button>
</div>
</form>
</div>

<div className="page-content hidden" id="view-timeline">
<header className="mb-10 flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Your Journey</h1>
<p className="text-sm text-neutral-500 mt-1 font-medium">Milestones and history</p>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg text-xs font-medium hover:bg-neutral-50 hover:text-neutral-900 transition-all shadow-sm" onclick="alert('Downloading Infographic...')">
<i className="w-4 h-4" data-lucide="download"></i> Export
                        </button>
</header>
<div className="relative timeline-line ml-4 pb-12">

<div className="relative pl-12 pb-12">
<div className="absolute left-0 w-8 h-8 rounded-full bg-neutral-900 border-4 border-[#F8F9FA] flex items-center justify-center z-10">
<i className="w-3.5 h-3.5 text-white" data-lucide="target"></i>
</div>
<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
<span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1 block">Current Status</span>
<h3 className="text-base font-semibold text-neutral-900">12 Day Streak!</h3>
<p className="text-xs text-neutral-500 mt-1">You are consistently hitting your meditation goals. The coach recommends increasing duration next week.</p>
</div>
</div>

<div className="relative pl-12 pb-12">
<div className="absolute left-0 w-8 h-8 rounded-full bg-amber-400 border-4 border-[#F8F9FA] flex items-center justify-center z-10">
<i className="w-3.5 h-3.5 text-white" data-lucide="trophy"></i>
</div>
<div className="bg-gradient-to-br from-amber-50 to-white p-5 rounded-xl border border-amber-100 shadow-sm">
<span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-1 block">Oct 24, 2023</span>
<div className="flex justify-between items-center">
<h3 className="text-base font-semibold text-neutral-900">Weekend Warrior</h3>
<i className="w-5 h-5 text-amber-500" data-lucide="medal"></i>
</div>
<p className="text-xs text-neutral-500 mt-1">Completed all habits on Saturday and Sunday.</p>
</div>
</div>

<div className="relative pl-12 pb-12">
<div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 border-4 border-[#F8F9FA] flex items-center justify-center z-10">
<i className="w-3.5 h-3.5 text-white" data-lucide="star"></i>
</div>
<div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 block">Oct 10, 2023</span>
<h3 className="text-base font-semibold text-neutral-900">First 100 Habits Completed</h3>
<p className="text-xs text-neutral-500 mt-1">Total lifetime habits completed reached 100.</p>
</div>
</div>

<div className="relative pl-12">
<div className="absolute left-0 w-8 h-8 rounded-full bg-neutral-200 border-4 border-[#F8F9FA] flex items-center justify-center z-10">
<i className="w-3.5 h-3.5 text-neutral-600" data-lucide="flag"></i>
</div>
<div className="p-2">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1 block">Sept 1, 2023</span>
<h3 className="text-sm font-medium text-neutral-500">Joined Focus Workspace</h3>
</div>
</div>
</div>
</div>

<div className="page-content hidden" id="view-challenges">
<header className="mb-10">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Challenges</h1>
<p className="text-sm text-neutral-500 mt-1 font-medium">Push your limits and earn badges.</p>
</header>
<div className="grid md:grid-cols-2 gap-4">

<div className="bg-neutral-900 rounded-2xl p-6 text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 p-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-white/10 transition-colors"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="px-2.5 py-1 bg-white/20 rounded-md text-[10px] font-semibold tracking-wide">ACTIVE</span>
<i className="w-5 h-5 text-orange-400" data-lucide="flame"></i>
</div>
<h3 className="text-lg font-semibold">7-Day Streak Master</h3>
<p className="text-xs text-neutral-400 mt-1 mb-6">Complete all daily habits for 7 consecutive days.</p>
<div className="mb-6">
<div className="flex justify-between text-[10px] font-medium text-neutral-300 mb-1.5">
<span>Progress</span>
<span>5/7 Days</span>
</div>
<div className="h-1.5 w-full bg-neutral-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-[71%] rounded-full"></div>
</div>
</div>
<button className="w-full py-2.5 bg-white text-neutral-900 text-xs font-bold rounded-lg hover:bg-neutral-200 transition-colors" onclick="openShareModal()">
                                    View Progress
                                </button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-card transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="px-2.5 py-1 bg-neutral-100 text-neutral-500 rounded-md text-[10px] font-semibold tracking-wide">UPCOMING</span>
<i className="w-5 h-5 text-neutral-400 group-hover:text-yellow-500 transition-colors" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold text-neutral-900">Weekend Intensive</h3>
<p className="text-xs text-neutral-500 mt-1 mb-6">Complete 5 "Learning" category habits over the weekend.</p>
<div className="mt-auto pt-6 border-t border-neutral-100">
<button className="w-full py-2.5 bg-white border border-neutral-200 text-neutral-900 text-xs font-bold rounded-lg hover:bg-neutral-50 transition-colors">
                                    Join Challenge
                                </button>
</div>
</div>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mt-10 mb-4">Earned Badges</h3>
<div className="flex gap-4 overflow-x-auto pb-4">
<div className="min-w-[100px] h-[100px] bg-white border border-neutral-200 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
<i className="w-6 h-6 text-yellow-500" data-lucide="award"></i>
<span className="text-[10px] font-medium text-neutral-600">Early Bird</span>
</div>
<div className="min-w-[100px] h-[100px] bg-white border border-neutral-200 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
<i className="w-6 h-6 text-blue-500" data-lucide="dumbbell"></i>
<span className="text-[10px] font-medium text-neutral-600">Fit Life</span>
</div>
<div className="min-w-[100px] h-[100px] bg-neutral-50 border border-neutral-100 rounded-xl flex flex-col items-center justify-center gap-2 opacity-50 grayscale">
<i className="w-6 h-6 text-neutral-400" data-lucide="crown"></i>
<span className="text-[10px] font-medium text-neutral-400">30 Day King</span>
</div>
</div>
</div>

<div className="page-content hidden" id="view-insights">
<header className="mb-10">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Analytics</h1>
<p className="text-sm text-neutral-500 mt-1 font-medium">Performance metrics &amp; trends</p>
</header>

<div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl mb-8 flex gap-3">
<div className="bg-emerald-100 p-2 rounded-lg h-fit text-emerald-700">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-emerald-900">Coach Feedback</h4>
<p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                                 Your completion rate is up 15% this week! This is the perfect time to add a "Difficult" rated habit.
                             </p>
</div>
</div>
<div className="space-y-6">

<div className="p-8 rounded-2xl border border-neutral-200 bg-white shadow-card">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-base font-semibold text-neutral-900">Weekly Performance</h3>
<p className="text-xs text-neutral-500 mt-0.5">Average completion rate of 78%</p>
</div>
<select className="text-xs font-medium bg-neutral-50 border border-neutral-200 rounded-lg px-2 py-1.5 text-neutral-600 focus:ring-2 focus:ring-neutral-100">
<option>Last 7 Days</option>
<option>Last Month</option>
</select>
</div>
<div className="flex items-end justify-between h-56 gap-4">
<div className="flex flex-col items-center gap-3 w-full group">
<div className="relative w-full bg-neutral-100 rounded-t-lg h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-neutral-900/90 rounded-t-lg transition-all duration-500 group-hover:bg-neutral-800" style={{height: '40%'}}></div>
</div>
<span className="text-[10px] font-medium text-neutral-400">Mon</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group">
<div className="relative w-full bg-neutral-100 rounded-t-lg h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-neutral-900/90 rounded-t-lg transition-all duration-500 group-hover:bg-neutral-800" style={{height: '65%'}}></div>
</div>
<span className="text-[10px] font-medium text-neutral-400">Tue</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group">
<div className="relative w-full bg-neutral-100 rounded-t-lg h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-neutral-900/90 rounded-t-lg transition-all duration-500 group-hover:bg-neutral-800" style={{height: '50%'}}></div>
</div>
<span className="text-[10px] font-medium text-neutral-400">Wed</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group">
<div className="relative w-full bg-neutral-100 rounded-t-lg h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-neutral-900/90 rounded-t-lg transition-all duration-500 group-hover:bg-neutral-800" style={{height: '85%'}}></div>
</div>
<span className="text-[10px] font-medium text-neutral-400">Thu</span>
</div>
<div className="flex flex-col items-center gap-3 w-full group">
<div className="relative w-full bg-neutral-100 rounded-t-lg h-full overflow-hidden">
<div className="absolute bottom-0 w-full bg-neutral-900/90 rounded-t-lg transition-all duration-500 group-hover:bg-neutral-800" style={{height: '30%'}}></div>
</div>
<span className="text-[10px] font-medium text-neutral-400">Fri</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4" id="shareModal">
<div className="bg-white rounded-2xl shadow-float max-w-sm w-full overflow-hidden animate-[scaleIn_0.2s_ease-out]">
<div className="p-6 bg-neutral-900 text-white text-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-24 bg-white/5 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none"></div>
<i className="w-12 h-12 text-yellow-400 mx-auto mb-4" data-lucide="trophy"></i>
<h3 className="text-xl font-bold tracking-tight">5 Day Streak!</h3>
<p className="text-neutral-400 text-xs mt-2">Challenge: 7-Day Streak Master</p>
<div className="mt-6 flex justify-center gap-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
<span className="w-2 h-2 rounded-full bg-neutral-700"></span>
</div>
</div>
<div className="p-4 flex gap-3">
<button className="flex-1 py-2.5 text-xs font-medium text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors" onclick="closeShareModal()">Close</button>
<button className="flex-1 py-2.5 text-xs font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors shadow-subtle" onclick="alert('Image Saved!'); closeShareModal()">Download PNG</button>
</div>
</div>
</div>


    </>
  );
}
