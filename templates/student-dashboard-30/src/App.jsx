import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const dateEl = document.getElementById('current-date');
            const greetingEl = document.getElementById('greeting-time');
            
            // Set dynamic date
            if (dateEl) {
                const now = new Date();
                const options = { weekday: 'long', month: 'long', day: 'numeric' };
                dateEl.textContent = now.toLocaleDateString('en-US', options);
            }
            
            // Set dynamic greeting based on hour
            if (greetingEl) {
                const hour = new Date().getHours();
                let greeting = 'Good evening';
                if (hour < 12) greeting = 'Good morning';
                else if (hour < 18) greeting = 'Good afternoon';
                greetingEl.textContent = greeting;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-200/70 bg-zinc-50 flex-col hidden lg:flex relative z-10">

<div className="h-16 flex items-center px-6 border-b border-zinc-200/50">
<span className="text-lg font-semibold tracking-tighter">STDNTS.</span>
</div>

<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<p className="px-2 text-xs font-medium text-zinc-400 mb-2 uppercase tracking-widest">Main</p>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium bg-white shadow-sm border border-zinc-200/60 rounded-lg text-zinc-900 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/80 rounded-lg transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                Schedule
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/80 rounded-lg transition-all flex-1" href="#">
<iconify-icon className="text-lg" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Assignments
                <span className="ml-auto bg-zinc-900 text-white text-xs py-0.5 px-2 rounded-full">3</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/80 rounded-lg transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
                Courses
            </a>
<p className="px-2 text-xs font-medium text-zinc-400 mt-6 mb-2 uppercase tracking-widest">Workspace</p>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/80 rounded-lg transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                Notes &amp; Docs
            </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100/80 rounded-lg transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
                Resources
            </a>
</nav>

<div className="p-4 border-t border-zinc-200/70">
<div className="flex items-center gap-3 hover:bg-zinc-100/80 p-2 rounded-lg cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400 flex items-center justify-center text-white text-xs font-medium">
                    ST
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">Student Profile</p>
<p className="text-xs text-zinc-500 truncate">Computer Science</p>
</div>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="lg:hidden h-16 border-b border-zinc-200/70 flex items-center justify-between px-4 bg-white z-20">
<span className="text-lg font-semibold tracking-tighter">STDNTS.</span>
<button className="p-2 text-zinc-500 rounded-lg hover:bg-zinc-100">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<header className="pt-8 pb-4 px-6 lg:px-10 flex flex-col md:flex-row md:items-end justify-between gap-4 z-10 shrink-0">
<div>
<p className="text-sm font-medium text-zinc-500 mb-1" id="current-date">Loading date...</p>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900"><span id="greeting-time">Good morning</span>, Student</h1>
</div>
<div className="flex items-center gap-3">

<div className="relative group hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-hover:text-zinc-600 transition-colors" icon="solar:magic-stick-3-linear"></iconify-icon>
<input className="w-64 bg-white border border-zinc-200/80 text-sm rounded-full pl-9 pr-4 py-2 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="Ask your study materials..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="text-xs font-sans text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">⌘</kbd>
<kbd className="text-xs font-sans text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-200">K</kbd>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center bg-white border border-zinc-200/80 rounded-full text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors shadow-sm relative">
<iconify-icon className="text-lg" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2.5 h-2.5 bg-zinc-900 border-2 border-white rounded-full"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto px-6 lg:px-10 pb-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

<div className="xl:col-span-2 space-y-6 lg:space-y-8">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white p-4 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500">Current GPA</span>
<iconify-icon className="text-zinc-400" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">3.84</p>
<p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
                                    Top 5%
                                </p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500">Study Streak</span>
<iconify-icon className="text-orange-400" icon="solar:flame-linear"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">14 <span className="text-sm font-medium text-zinc-400 tracking-normal">days</span></p>
<div className="w-full bg-zinc-100 rounded-full h-1 mt-2">
<div className="bg-orange-400 h-1 rounded-full w-[80%]"></div>
</div>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500">Assignments</span>
<iconify-icon className="text-zinc-400" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">12 <span className="text-sm font-medium text-zinc-400 tracking-normal">left</span></p>
<p className="text-xs text-zinc-500 font-medium mt-1">3 due this week</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-zinc-200/60 shadow-sm flex flex-col justify-between hover:border-zinc-300 transition-colors">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500">Credits Earned</span>
<iconify-icon className="text-zinc-400" icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">86 <span className="text-sm font-medium text-zinc-400 tracking-normal">/ 120</span></p>
<div className="w-full bg-zinc-100 rounded-full h-1 mt-2">
<div className="bg-zinc-900 h-1 rounded-full w-[71%]"></div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Priority Tasks</h2>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                                View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="bg-white border border-zinc-200/60 rounded-2xl shadow-sm overflow-hidden">

<div className="p-4 border-b border-zinc-100 flex gap-4 items-start hover:bg-zinc-50/50 transition-colors group">
<div className="mt-0.5">

<div className="w-5 h-5 rounded-md border border-zinc-300 flex items-center justify-center cursor-pointer hover:border-zinc-500 transition-colors bg-white shadow-sm"></div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">Advanced Calculus: Problem Set 4</p>
<p className="text-xs text-zinc-500 mt-0.5">Complete integrations sections 3.1 to 3.4</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-red-50 text-red-600 rounded-md whitespace-nowrap border border-red-100">Due Today</span>
</div>
<div className="flex items-center gap-3 mt-3">
<span className="flex items-center gap-1 text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">
<iconify-icon icon="solar:book-linear"></iconify-icon> MATH 301
                                        </span>
<span className="flex items-center gap-1 text-xs font-medium text-zinc-500">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Est. 2h
                                        </span>
</div>
</div>
</div>

<div className="p-4 border-b border-zinc-100 flex gap-4 items-start hover:bg-zinc-50/50 transition-colors group">
<div className="mt-0.5">

<div className="w-5 h-5 rounded-md border border-zinc-300 flex items-center justify-center cursor-pointer hover:border-zinc-500 transition-colors bg-white shadow-sm"></div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-medium text-zinc-900 group-hover:text-zinc-700 transition-colors">Machine Learning: Final Project Proposal</p>
<p className="text-xs text-zinc-500 mt-0.5">Submit 2-page draft on predictive models</p>
</div>
<span className="text-xs font-medium px-2 py-1 bg-orange-50 text-orange-600 rounded-md whitespace-nowrap border border-orange-100">Tomorrow</span>
</div>
<div className="flex items-center gap-3 mt-3">
<span className="flex items-center gap-1 text-xs font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-md">
<iconify-icon icon="solar:cpu-linear"></iconify-icon> CS 450
                                        </span>
<span className="flex items-center gap-1 text-xs font-medium text-zinc-500">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Group Task
                                        </span>
</div>
</div>
</div>

<div className="p-4 flex gap-4 items-start bg-zinc-50/50 opacity-70 group">
<div className="mt-0.5">

<div className="w-5 h-5 rounded-md border border-zinc-900 bg-zinc-900 flex items-center justify-center cursor-pointer shadow-sm">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="flex-1">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm font-medium text-zinc-500 line-through">Physics Lab Report</p>
<p className="text-xs text-zinc-400 mt-0.5">Experiment #4 results analysis</p>
</div>
</div>
<div className="flex items-center gap-3 mt-3">
<span className="flex items-center gap-1 text-xs font-medium text-zinc-400 bg-zinc-100/80 px-2 py-0.5 rounded-md">
<iconify-icon icon="solar:test-tube-linear"></iconify-icon> PHYS 202
                                        </span>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-semibold tracking-tight mb-4">Recent Materials</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="bg-white border border-zinc-200/60 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:file-text-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900 truncate">ML_Notes_Ch3.pdf</p>
<p className="text-xs text-zinc-500 mt-1">Edited 2h ago</p>
</div>

<div className="bg-white border border-zinc-200/60 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
<div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:presentation-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900 truncate">Group_Project_Deck</p>
<p className="text-xs text-zinc-500 mt-1">Edited 5h ago</p>
</div>

<div className="bg-white border border-zinc-200/60 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
<div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:video-library-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-zinc-900 truncate">Calculus_Lecture_09.mp4</p>
<p className="text-xs text-zinc-500 mt-1">Watched yesterday</p>
</div>
</div>
</div>
</div>

<div className="space-y-6 lg:space-y-8">

<div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-800 rounded-full blur-3xl opacity-50 -mr-10 -mt-10 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-zinc-400">Focus Session</h3>
<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<div className="text-center mb-8">
<p className="text-5xl font-medium tracking-tighter tabular-nums text-white">25:00</p>
<p className="text-xs text-zinc-400 mt-2 font-medium">Deep Work • Block Distractions</p>
</div>
<div className="flex items-center justify-center gap-4">
<button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-zinc-700 hover:text-white transition-all">
<iconify-icon className="text-lg" icon="solar:restart-linear"></iconify-icon>
</button>
<button className="px-6 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-100 hover:scale-105 transition-all shadow-sm">
                                    Start Focus
                                </button>
<button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:bg-zinc-700 hover:text-white transition-all">
<iconify-icon className="text-lg" icon="solar:skip-next-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200/60 rounded-2xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold tracking-tight">Today's Schedule</h2>

<div className="flex items-center gap-2">
<span className="text-xs font-medium text-zinc-500">Auto-sync</span>
<div className="w-8 h-4 bg-zinc-900 rounded-full relative cursor-pointer shadow-inner">
<div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm"></div>
</div>
</div>
</div>

<div className="relative pl-3 border-l-2 border-zinc-100 space-y-6">

<div className="relative">

<div className="absolute -left-[17px] top-1 w-2.5 h-2.5 bg-zinc-300 rounded-full border-2 border-white"></div>
<div className="pl-4 opacity-60">
<p className="text-xs font-medium text-zinc-500 mb-1">09:00 AM - 10:30 AM</p>
<div className="bg-zinc-50 border border-zinc-100 rounded-xl p-3">
<p className="text-sm font-medium text-zinc-900">Advanced Calculus</p>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Room 302, Sci Building
                                        </p>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -left-[17px] top-1 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white ring-2 ring-blue-100"></div>
<div className="pl-4">
<p className="text-xs font-medium text-blue-600 mb-1">11:00 AM - 12:30 PM <span className="text-zinc-400 font-normal ml-1">· Starting in 10m</span></p>
<div className="bg-blue-50/50 border border-blue-100/50 rounded-xl p-3 shadow-sm">
<p className="text-sm font-medium text-zinc-900">Machine Learning</p>
<p className="text-xs text-zinc-600 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Lecture Hall A
                                        </p>

<div className="flex items-center gap-2 mt-3 pt-3 border-t border-blue-100/50">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-zinc-200 border border-white flex items-center justify-center text-[8px] font-medium text-zinc-600">JD</div>
<div className="w-5 h-5 rounded-full bg-zinc-300 border border-white flex items-center justify-center text-[8px] font-medium text-zinc-700">MR</div>
</div>
<span className="text-[10px] text-zinc-500 font-medium">Study group attending</span>
</div>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -left-[17px] top-1 w-2.5 h-2.5 bg-zinc-200 rounded-full border-2 border-white"></div>
<div className="pl-4">
<p className="text-xs font-medium text-zinc-500 mb-1">02:00 PM - 04:00 PM</p>
<div className="bg-white border border-zinc-200/60 hover:border-zinc-300 transition-colors cursor-pointer rounded-xl p-3 shadow-sm">
<p className="text-sm font-medium text-zinc-900">Physics Laboratory</p>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Lab 4B
                                        </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
