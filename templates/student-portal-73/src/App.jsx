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
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
extend: {
colors: {
teal: {
50: '#F0FDFA',
100: '#CCFBF1',
200: '#99F6E4',
300: '#5EEAD4',
400: '#2DD4BF',
500: '#14B8A6', // Muted Teal Main
600: '#0D9488', // Darker Teal
700: '#0F766E',
800: '#115E59',
900: '#134E4A',
},
slate: {
850: '#151F2E', // Custom dark
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 15px rgba(20, 184, 166, 0.3)',
}
}
}
}

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
      

<div className="flex h-full w-full gap-4 p-4 md:p-5">


<aside className="group relative flex flex-col rounded-3xl bg-slate-850 text-white shadow-soft transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] w-20 hover:w-72 shrink-0 z-50 overflow-hidden">

<div className="flex h-20 items-center px-6 shrink-0">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white shadow-glow">
<iconify-icon icon="lucide:hexagon" strokeWidth="2" width="22"></iconify-icon>
</div>

<div className="ml-4 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 group-hover:opacity-100">
<span className="text-xl font-bold tracking-tight text-white">APTIVO</span>
</div>
</div>

<nav className="flex-1 space-y-2 px-3 py-6 overflow-y-auto custom-scroll">
<a className="group/item flex items-center rounded-2xl bg-teal-500/10 px-3.5 py-3.5 text-teal-300 transition-all hover:bg-teal-500 hover:text-white" href="#">
<iconify-icon className="shrink-0" icon="lucide:layout-grid" strokeWidth="1.5" width="22"></iconify-icon>
<span className="ml-4 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Dashboard</span>
</a>
<a className="group/item flex items-center rounded-2xl px-3.5 py-3.5 text-slate-400 transition-all hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="shrink-0" icon="lucide:book-open-check" strokeWidth="1.5" width="22"></iconify-icon>
<span className="ml-4 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">My Courses</span>
</a>
<a className="group/item flex items-center rounded-2xl px-3.5 py-3.5 text-slate-400 transition-all hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="shrink-0" icon="lucide:bar-chart-big" strokeWidth="1.5" width="22"></iconify-icon>
<span className="ml-4 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Analytics</span>
</a>
<a className="group/item flex items-center rounded-2xl px-3.5 py-3.5 text-slate-400 transition-all hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="shrink-0" icon="lucide:calendar-days" strokeWidth="1.5" width="22"></iconify-icon>
<span className="ml-4 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Schedule</span>
</a>

<div className="my-4 h-px w-full bg-slate-700/50"></div>
<a className="group/item flex items-center rounded-2xl px-3.5 py-3.5 text-slate-400 transition-all hover:bg-white/10 hover:text-white" href="#">
<iconify-icon className="shrink-0" icon="lucide:message-square" strokeWidth="1.5" width="22"></iconify-icon>
<span className="ml-4 whitespace-nowrap text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">Messages</span>
<span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-[10px] font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">3</span>
</a>
</nav>

<div className="mt-auto p-3">
<button className="flex w-full items-center gap-3 rounded-2xl bg-slate-800 p-2 transition-colors hover:bg-slate-700">
<img alt="User" className="h-10 w-10 rounded-xl object-cover shrink-0" src="https://ui-avatars.com/api/?name=Alex+Chen&amp;background=14B8A6&amp;color=fff"/>
<div className="overflow-hidden text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
<p className="truncate text-xs font-semibold text-white">Alex Chen</p>
<p className="truncate text-[10px] text-slate-400">Pro Student</p>
</div>
</button>
</div>
</aside>

<main className="relative flex flex-1 flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate-200/60">

<header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-100 bg-white/80 px-8 backdrop-blur-xl">

<div className="flex items-center gap-4 flex-1">
<div className="relative group w-full max-w-md">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-teal-600" icon="lucide:search" width="18"></iconify-icon>
<input className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-teal-500 focus:bg-white focus:ring-4 focus:ring-teal-500/10" placeholder="Search for courses, topics, or mentors..." type="text"/>
</div>
</div>

<div className="flex items-center gap-3">
<button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600">
<iconify-icon icon="lucide:bell-ring" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-teal-200 hover:bg-teal-50 hover:text-teal-600">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scroll bg-slate-50/50">

<div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div>
<h1 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h1>
<p className="mt-2 text-sm text-slate-500">Welcome back, Alex. You have <span className="font-semibold text-teal-600">2 pending exams</span> this week.</p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-slate-50">
<iconify-icon icon="lucide:download" width="16"></iconify-icon> Report
                        </button>
<button className="inline-flex items-center gap-2 rounded-2xl bg-teal-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-teal-600/20 transition-transform hover:-translate-y-0.5 hover:bg-teal-700">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon> New Goal
                        </button>
</div>
</div>

<div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm transition-all hover:shadow-md ring-1 ring-slate-200/50">
<div className="relative z-10">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
<iconify-icon icon="lucide:target" width="20"></iconify-icon>
</div>
<span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Weekly</span>
</div>
<div className="mt-4">
<span className="text-4xl font-bold tracking-tight text-slate-900">86%</span>
<p className="mt-1 text-xs font-medium text-slate-500">Average Accuracy</p>
</div>
<div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600">
<iconify-icon icon="lucide:trending-up" width="14"></iconify-icon>
<span>+4.2% Increase</span>
</div>
</div>
<div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-teal-500/5 blur-3xl transition-all group-hover:bg-teal-500/10"></div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm transition-all hover:shadow-md ring-1 ring-slate-200/50">
<div className="relative z-10">
<div className="flex items-center justify-between">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">Daily</span>
</div>
<div className="mt-4">
<span className="text-4xl font-bold tracking-tight text-slate-900">4.5h</span>
<p className="mt-1 text-xs font-medium text-slate-500">Study Time</p>
</div>
<div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
<span>12h Goal</span>
<div className="h-1 w-16 overflow-hidden rounded-full bg-slate-100">
<div className="h-full w-1/3 rounded-full bg-indigo-500"></div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-[2rem] bg-teal-900 p-6 shadow-lg shadow-teal-900/20 text-white">
<div className="relative z-10">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-bold">Pro Plan</h3>
<p className="text-xs text-teal-200/80">Premium Access</p>
</div>
<iconify-icon className="text-teal-400" icon="lucide:crown" width="24"></iconify-icon>
</div>
<p className="mt-4 text-xs font-light text-teal-100 leading-relaxed">
                                You have access to unlimited mock tests and AI analysis.
                            </p>
<button className="mt-4 w-full rounded-xl bg-white/10 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 border border-white/10">
                                View Benefits
                            </button>
</div>
<div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-teal-500/30 blur-3xl"></div>
</div>
</div>

<div className="mb-6 flex items-center justify-between">
<h2 className="text-lg font-bold tracking-tight text-slate-900">University Tracks</h2>
<a className="text-xs font-semibold text-teal-600 hover:text-teal-700" href="#">View All</a>
</div>
<div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">

<div className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5">
<div className="mb-4 flex items-start justify-between">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-2xl font-bold text-rose-600">S</div>
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=User+1&amp;background=random" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=User+2&amp;background=random"/>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-[10px] font-medium text-slate-500 ring-2 ring-white">+24</div>
</img></div>
</div>
<h3 className="text-lg font-bold text-slate-900">Stanford University</h3>
<p className="mt-1 text-xs leading-relaxed text-slate-500">Logical Reasoning &amp; Advanced Quantitative Analysis for entrance exams.</p>
<div className="mt-6">
<div className="mb-2 flex items-center justify-between text-xs font-medium">
<span className="text-slate-700">Course Progress</span>
<span className="text-teal-600">65%</span>
</div>
<div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
<div className="h-full w-[65%] rounded-full bg-teal-500"></div>
</div>
</div>
</div>

<div className="group flex flex-col rounded-[2rem] border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5">
<div className="mb-4 flex items-start justify-between">
<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl font-bold text-slate-700">H</div>
<div className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">Not Started</div>
</div>
<h3 className="text-lg font-bold text-slate-900">Harvard University</h3>
<p className="mt-1 text-xs leading-relaxed text-slate-500">Verbal ability, Critical thinking and Essay writing modules.</p>
<div className="mt-auto pt-6">
<button className="w-full rounded-xl bg-slate-900 py-3 text-xs font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg group-hover:scale-[1.02]">
                                Start Learning
                            </button>
</div>
</div>

<div className="relative flex flex-col rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-6 opacity-80">
<div className="absolute inset-0 z-10 flex items-center justify-center rounded-[2rem] bg-white/60 backdrop-blur-[2px]">
<div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-slate-900/5">
<iconify-icon className="text-slate-400" icon="lucide:lock" width="16"></iconify-icon>
<span className="text-xs font-semibold text-slate-600">Locked</span>
</div>
</div>
<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-2xl font-bold text-slate-400">M</div>
<h3 className="text-lg font-bold text-slate-700">MIT</h3>
<p className="mt-1 text-xs leading-relaxed text-slate-400">Technical aptitude, Physics and Calculus integration.</p>
<div className="mt-6 h-2 w-full rounded-full bg-slate-200"></div>
</div>
</div>

<div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-2 shadow-sm">
<div className="flex items-center justify-between px-6 py-4">
<h3 className="text-sm font-bold text-slate-900">Recent Sessions</h3>
<button className="rounded-lg p-2 hover:bg-slate-50 text-slate-400 hover:text-slate-900">
<iconify-icon icon="lucide:more-horizontal" width="20"></iconify-icon>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
<tr>
<th className="px-6 py-3">Topic</th>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Score</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm text-slate-600">
<tr className="group transition-colors hover:bg-slate-50/80 border-b border-slate-50 last:border-0">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
<iconify-icon icon="lucide:calculator" width="20"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Quantitative Analysis</p>
<p className="text-xs text-slate-400">Chapter 4: Algebra</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Oct 24, 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 rounded-full bg-slate-100">
<div className="h-full w-[92%] rounded-full bg-emerald-500"></div>
</div>
<span className="text-xs font-bold text-slate-900">92%</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200 transition-hover hover:text-teal-600 hover:ring-teal-200">
                                            Review
                                        </button>
</td>
</tr>
<tr className="group transition-colors hover:bg-slate-50/80 rounded-b-[1.5rem]">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
<iconify-icon icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>
<div>
<p className="font-semibold text-slate-900">Logical Reasoning</p>
<p className="text-xs text-slate-400">Pattern Recognition</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-xs font-medium">Oct 22, 2023</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 rounded-full bg-slate-100">
<div className="h-full w-[78%] rounded-full bg-amber-500"></div>
</div>
<span className="text-xs font-bold text-slate-900">78%</span>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200 transition-hover hover:text-teal-600 hover:ring-teal-200">
                                            Review
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="h-20"></div> 
</div>
</main>
</div>

<div className="fixed bottom-8 right-8 z-50" x-data="{ open: false }">

<div className="mb-4 w-[350px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-teal-900/10" x-show="open" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0 scale-100" x-transition:enter-start="opacity-0 translate-y-4 scale-95" x-transition:leave="transition ease-in duration-200" x-transition:leave-end="opacity-0 translate-y-4 scale-95" x-transition:leave-start="opacity-100 translate-y-0 scale-100">
<div className="bg-slate-900 px-6 py-4 text-white">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="h-2 w-2 rounded-full bg-teal-400"></div>
<div className="absolute inset-0 animate-ping rounded-full bg-teal-400 opacity-50"></div>
</div>
<span className="text-sm font-semibold">Aptivo AI</span>
</div>
<button @click="open = false" className="text-slate-400 hover:text-white"><iconify-icon icon="lucide:x" width="18"></iconify-icon></button>
</div>
</div>
<div className="h-80 bg-slate-50 p-4 overflow-y-auto">
<div className="mb-4 flex gap-3">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 text-xs text-slate-600 shadow-sm">
                        Hi Alex! I noticed you spent 45 minutes on Algebra today. Ready for a quick quiz to lock in that knowledge?
                    </div>
</div>
<div className="flex flex-row-reverse gap-3">
<div className="max-w-[80%] rounded-2xl rounded-tr-none bg-teal-600 p-3 text-xs text-white shadow-sm">
                        Sure, let's do 5 questions.
                    </div>
</div>
</div>
<div className="border-t border-slate-100 bg-white p-3">
<div className="relative">
<input className="w-full rounded-full border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-xs font-medium outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-2 rounded-full bg-teal-600 p-1.5 text-white hover:bg-teal-700">
<iconify-icon icon="lucide:arrow-up" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<button @click="open = !open" className="group flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg shadow-slate-900/30 transition-all hover:scale-110 hover:bg-teal-600">
<iconify-icon className="transition-transform group-hover:rotate-12" icon="lucide:sparkles" width="24"></iconify-icon>
</button>
</div>

    </>
  );
}
