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



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
  
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
      
<div className="flex min-h-screen w-full bg-slate-950">

<aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-slate-800 bg-slate-950/90 backdrop-blur">
<div className="flex items-center gap-2 px-6 py-5 border-b border-slate-800">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-teal-400 via-sky-400 to-indigo-500 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
          CL
        </div>
<div>
<div className="text-sm font-semibold tracking-tight">CoachLearn</div>
<div className="text-xs text-slate-400">Faculty LMS Portal</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1 px-3 py-4 text-sm">
<button className="flex items-center gap-3 rounded-md px-3 py-2 bg-slate-900 text-slate-50">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
<span>Dashboard</span>
</button>
<button className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span>Courses</span>
</button>
<button className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Batches</span>
</button>
<button className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Schedule</span>
</button>
<button className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
<span>Analytics</span>
</button>
<div className="mt-4 border-t border-slate-800 pt-3">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-1">Resources</div>
<button className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Study Material</span>
</button>
<button className="flex items-center gap-3 rounded-md px-3 py-2 text-slate-300 hover:bg-slate-900 hover:text-slate-50">
<i className="w-4 h-4" data-lucide="video"></i>
<span>Recorded Classes</span>
</button>
</div>
</nav>
<div className="border-t border-slate-800 p-4 text-xs text-slate-400 space-y-2">
<div className="flex items-center justify-between">
<span>Storage</span>
<span className="text-slate-300">68%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400"></div>
</div>
<div className="flex items-center justify-between">
<span>Faculty: <span className="text-slate-200">Ananya Rao</span></span>
<button className="rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-200 hover:bg-slate-800">
            Logout
          </button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-slate-950">

<header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
<div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-4">
<div className="flex items-center gap-3">
<button className="lg:hidden inline-flex items-center justify-center rounded-md border border-slate-800 p-2 text-slate-200">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>
<div>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-50">
                LMS Portal
              </h1>
<p className="text-sm text-slate-400">
                Class 11–12 | JEE / NEET / Foundation coaching center
              </p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="bg-transparent outline-none border-none placeholder:text-slate-500 text-slate-200 text-sm w-40 lg:w-56" placeholder="Search students, courses..." type="text"/>
</div>
<button className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-200">
<i className="w-4 h-4" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-teal-400 ring-2 ring-slate-950"></span>
</button>
<div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-2 py-1.5">
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 flex items-center justify-center text-xs font-semibold tracking-tight">
                AR
              </div>
<div className="flex flex-col leading-tight">
<span className="text-xs font-medium">Ananya Rao</span>
<span className="text-[0.7rem] text-slate-400">Physics Mentor</span>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto pb-8">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-5 space-y-6">

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950">
<div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_#22d3ee33,_transparent_55%),radial-gradient(circle_at_bottom,_#6366f133,_transparent_55%)]"></div>
<div className="relative p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-teal-300">Active Students</span>
<span className="rounded-full bg-slate-900/70 border border-slate-700 px-2 py-0.5 text-[0.7rem] text-slate-300">
                    Live
                  </span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight">186</div>
<div className="text-xs text-slate-300 mt-1">+12 joined this week</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-xs text-teal-300">+8.3%</span>
<svg className="h-10 w-20 text-teal-400" viewbox="0 0 120 40">
<polyline fill="none" points="0,30 20,26 40,32 60,18 80,14 100,8 120,6" stroke="currentColor" strokeWidth="2"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950">
<div className="p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-300">Today’s Classes</span>
<i className="w-4 h-4 text-slate-500" data-lucide="calendar-days"></i>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight">5</div>
<div className="text-xs text-slate-300 mt-1">Next: Physics | 02:30 PM</div>
</div>
<div className="text-[0.7rem] text-slate-400 text-right">
                    3 Online<br/>2 In-class
                  </div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950">
<div className="p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-300">Pending Submissions</span>
<i className="w-4 h-4 text-slate-500" data-lucide="clipboard-list"></i>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight">32</div>
<div className="text-xs text-slate-300 mt-1">Across 4 batches</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="h-1.5 w-16 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 bg-teal-400"></div>
</div>
<span className="text-[0.7rem] text-slate-400">68% completed</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950">
<div className="p-4 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-300">Overall Performance</span>
<i className="w-4 h-4 text-slate-500" data-lucide="trending-up"></i>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-2xl font-semibold tracking-tight">82%</div>
<div className="text-xs text-slate-300 mt-1">Avg. test score</div>
</div>
<div className="flex gap-1">
<div className="h-8 w-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-3/4 w-full bg-teal-400"></div>
</div>
<div className="h-8 w-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-4/5 w-full bg-sky-400"></div>
</div>
<div className="h-8 w-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-full bg-indigo-400"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight text-slate-50">
                    Active Courses
                  </h2>
<p className="text-sm text-slate-400">
                    Manage lessons, tests and resources for each course.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-teal-500/60 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-300 hover:bg-teal-500/20">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                  New Course
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<article className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950">
<div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_#38bdf833,_transparent_60%)]"></div>
<div className="relative p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<div>
<h3 className="text-sm font-semibold tracking-tight">JEE Physics</h3>
<p className="text-xs text-slate-300">Mechanics • Waves • Optics</p>
</div>
<span className="rounded-full bg-slate-900/70 border border-slate-700 px-2 py-0.5 text-[0.7rem] text-teal-300">
                        Grade 11
                      </span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<div className="flex flex-col">
<span>Students</span>
<span className="text-slate-50 font-medium">62</span>
</div>
<div className="flex flex-col">
<span>Completion</span>
<div className="flex items-center gap-1">
<span className="font-medium">74%</span>
<div className="h-1.5 w-16 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-teal-400"></div>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span>Next topic</span>
<span className="text-slate-50 font-medium">Work &amp; Energy</span>
</div>
</div>
<div className="flex justify-between items-center text-[0.7rem] text-slate-300">
<span>Last class: Mon • 01:00 PM</span>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-2 py-1 hover:bg-slate-900">
<i className="w-3.5 h-3.5" data-lucide="book-open"></i>
                        Lessons
                      </button>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950">
<div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_#fb718533,_transparent_60%)]"></div>
<div className="relative p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<div>
<h3 className="text-sm font-semibold tracking-tight">NEET Biology</h3>
<p className="text-xs text-slate-300">Cell • Genetics • Evolution</p>
</div>
<span className="rounded-full bg-slate-900/70 border border-slate-700 px-2 py-0.5 text-[0.7rem] text-rose-300">
                        Grade 12
                      </span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<div className="flex flex-col">
<span>Students</span>
<span className="text-slate-50 font-medium">54</span>
</div>
<div className="flex flex-col">
<span>Completion</span>
<div className="flex items-center gap-1">
<span className="font-medium">59%</span>
<div className="h-1.5 w-16 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-7/12 bg-amber-400"></div>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span>Next topic</span>
<span className="text-slate-50 font-medium">Mendelian Genetics</span>
</div>
</div>
<div className="flex justify-between items-center text-[0.7rem] text-slate-300">
<span>Last class: Tue • 11:30 AM</span>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-2 py-1 hover:bg-slate-900">
<i className="w-3.5 h-3.5" data-lucide="clipboard-check"></i>
                        Tests
                      </button>
</div>
</div>
</article>

<article className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950">
<div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_#22c55e33,_transparent_60%)]"></div>
<div className="relative p-4 space-y-3">
<div className="flex items-center justify-between gap-2">
<div>
<h3 className="text-sm font-semibold tracking-tight">Foundation Math</h3>
<p className="text-xs text-slate-300">Algebra • Geometry</p>
</div>
<span className="rounded-full bg-slate-900/70 border border-slate-700 px-2 py-0.5 text-[0.7rem] text-emerald-300">
                        Grade 9–10
                      </span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<div className="flex flex-col">
<span>Students</span>
<span className="text-slate-50 font-medium">70</span>
</div>
<div className="flex flex-col">
<span>Completion</span>
<div className="flex items-center gap-1">
<span className="font-medium">41%</span>
<div className="h-1.5 w-16 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/5 bg-emerald-400"></div>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span>Next topic</span>
<span className="text-slate-50 font-medium">Quadratic Equations</span>
</div>
</div>
<div className="flex justify-between items-center text-[0.7rem] text-slate-300">
<span>Last class: Wed • 04:00 PM</span>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-950/60 px-2 py-1 hover:bg-slate-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
                        Material
                      </button>
</div>
</div>
</article>
</div>
</div>

<div className="space-y-4">

<div className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/90 to-slate-950">
<div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_60%),radial-gradient(circle_at_bottom,_#6366f122,_transparent_60%)]"></div>
<div className="relative p-4 space-y-3">
<div className="flex items-center justify-between">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                        Today’s Schedule
                      </h2>
<p className="text-xs text-slate-300">Thu, 20 November</p>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-700 bg-slate-900/60 px-2 py-1 text-[0.7rem] text-slate-200 hover:bg-slate-900">
<i className="w-3.5 h-3.5" data-lucide="calendar-plus"></i>
                      Add Class
                    </button>
</div>
<div className="space-y-2 text-xs">

<div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="atom"></i>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-slate-50">Physics: JEE Batch A</span>
<span className="text-[0.7rem] text-teal-300">02:30–04:00 PM</span>
</div>
<div className="flex justify-between text-[0.7rem] text-slate-400">
<span>Online • Google Meet</span>
<span>62 students</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="dna"></i>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-slate-50">Biology: NEET Batch Elite</span>
<span className="text-[0.7rem] text-emerald-300">11:30–01:00 PM</span>
</div>
<div className="flex justify-between text-[0.7rem] text-slate-400">
<span>Classroom 203</span>
<span>54 students</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-2">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="square-root"></i>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-slate-50">Math: Foundation X</span>
<span className="text-[0.7rem] text-amber-300">05:00–06:15 PM</span>
</div>
<div className="flex justify-between text-[0.7rem] text-slate-400">
<span>Online • Zoom</span>
<span>70 students</span>
</div>
</div>
</div>
</div>

<div className="mt-2">
<div className="flex justify-between text-[0.7rem] text-slate-500 mb-1">
<span>09:00</span>
<span>12:00</span>
<span>15:00</span>
<span>18:00</span>
</div>
<div className="relative h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="absolute left-1/5 h-full w-1/5 bg-sky-500/80"></div>
<div className="absolute left-2/5 h-full w-1/5 bg-emerald-500/80"></div>
<div className="absolute left-3/5 h-full w-1/5 bg-amber-500/80"></div>
<div className="absolute left-1/3 -top-1.5 h-4 w-4 rounded-full border border-slate-900 bg-teal-400 shadow-md shadow-teal-500/40"></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight">Quick Actions</h2>
<i className="w-4 h-4 text-slate-500" data-lucide="zap"></i>
</div>
<div className="grid grid-cols-2 gap-2 text-xs">
<button className="flex flex-col items-start gap-1 rounded-lg border border-slate-800 bg-slate-950/60 p-2 hover:bg-slate-900">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="upload-cloud"></i>
<span className="font-medium text-slate-50">Upload Material</span>
</div>
<span className="text-[0.7rem] text-slate-400">PDF, notes, question banks</span>
</button>
<button className="flex flex-col items-start gap-1 rounded-lg border border-slate-800 bg-slate-950/60 p-2 hover:bg-slate-900">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-teal-400" data-lucide="file-pen-line"></i>
<span className="font-medium text-slate-50">Create Test</span>
</div>
<span className="text-[0.7rem] text-slate-400">MCQ, subjective, mixed</span>
</button>
<button className="flex flex-col items-start gap-1 rounded-lg border border-slate-800 bg-slate-950/60 p-2 hover:bg-slate-900">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="graduation-cap"></i>
<span className="font-medium text-slate-50">Mark Attendance</span>
</div>
<span className="text-[0.7rem] text-slate-400">For ongoing class</span>
</button>
<button className="flex flex-col items-start gap-1 rounded-lg border border-slate-800 bg-slate-950/60 p-2 hover:bg-slate-900">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-rose-400" data-lucide="message-circle"></i>
<span className="font-medium text-slate-50">Send Notice</span>
</div>
<span className="text-[0.7rem] text-slate-400">Notify all batches</span>
</button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-5 gap-6">

<div className="lg:col-span-3 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
<div className="flex items-center justify-between">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                    Announcements
                  </h2>
<p className="text-xs text-slate-400">
                    Important updates visible to all students.
                  </p>
</div>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-800">
<i className="w-3.5 h-3.5" data-lucide="megaphone"></i>
                  New
                </button>
</div>
<div className="space-y-2 text-xs">
<div className="flex gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
<div className="mt-0.5">
<span className="inline-flex items-center rounded-full bg-teal-500/10 border border-teal-500/40 px-2 py-0.5 text-[0.7rem] text-teal-300 gap-1">
<i className="w-3 h-3" data-lucide="clipboard-check"></i>
                      Test
                    </span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-medium text-slate-50">JEE Full Syllabus Mock Test - 02</p>
<span className="text-[0.7rem] text-slate-400">Tomorrow • 09:00 AM</span>
</div>
<p className="text-slate-300 mt-1">
                      Duration 3 hrs • Negative marking • OMR + Online options available.
                    </p>
<div className="mt-1 flex flex-wrap gap-2 text-[0.7rem] text-slate-400">
<span>Sections: Physics, Chemistry, Math</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>150 marks</span>
</div>
</div>
</div>
<div className="flex gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
<div className="mt-0.5">
<span className="inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-2 py-0.5 text-[0.7rem] text-sky-300 gap-1">
<i className="w-3 h-3" data-lucide="video"></i>
                      Recording
                    </span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-medium text-slate-50">New recordings uploaded: NEET Biology</p>
<span className="text-[0.7rem] text-slate-400">2 hrs ago</span>
</div>
<p className="text-slate-300 mt-1">
                      Cell structure modules and previous year question discussions are now available in LMS.
                    </p>
</div>
</div>
<div className="flex gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3">
<div className="mt-0.5">
<span className="inline-flex items-center rounded-full bg-amber-500/10 border border-amber-500/40 px-2 py-0.5 text-[0.7rem] text-amber-300 gap-1">
<i className="w-3 h-3" data-lucide="triangle-alert"></i>
                      Notice
                    </span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<p className="font-medium text-slate-50">Classroom change for Foundation Batch</p>
<span className="text-[0.7rem] text-slate-400">Today • 08:00 AM</span>
</div>
<p className="text-slate-300 mt-1">
                      All Foundation Math and Science classes will be held in Room 105 this week due to maintenance.
                    </p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-950 p-4 space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">
                  Batch Performance
                </h2>
<button className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2 py-1 text-[0.7rem] text-slate-200 hover:bg-slate-800">
<i className="w-3.5 h-3.5" data-lucide="sliders-horizontal"></i>
                  Filter
                </button>
</div>
<div className="space-y-3 text-xs">

<div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5">
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-slate-50">JEE Batch A • Grade 12</span>
<span className="text-teal-300 font-medium">84%</span>
</div>
<div className="mt-1 flex items-center gap-2">
<div className="h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-4/5 bg-teal-400"></div>
</div>
<span className="text-[0.7rem] text-slate-400">62 students</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5">
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-slate-50">NEET Batch Elite</span>
<span className="text-emerald-300 font-medium">79%</span>
</div>
<div className="mt-1 flex items-center gap-2">
<div className="h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-4/5 bg-emerald-400"></div>
</div>
<span className="text-[0.7rem] text-slate-400">54 students</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5">
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-slate-50">Foundation X • Grade 10</span>
<span className="text-amber-300 font-medium">68%</span>
</div>
<div className="mt-1 flex items-center gap-2">
<div className="h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 bg-amber-400"></div>
</div>
<span className="text-[0.7rem] text-slate-400">70 students</span>
</div>
</div>
</div>
</div>

<div className="mt-2 text-[0.7rem] text-slate-400">
<div className="flex items-center justify-between mb-1">
<span>Average score over last 5 tests</span>
<span>Last 30 days</span>
</div>
<svg className="w-full h-16 text-slate-500" viewbox="0 0 140 40">
<defs>
<lineargradient id="scoreArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 30 L 20 24 L 40 26 L 60 18 L 80 16 L 100 14 L 120 10 L 140 12 L 140 40 L 0 40 Z" fill="url(#scoreArea)"></path>
<polyline fill="none" points="0,30 20,24 40,26 60,18 80,16 100,14 120,10 140,12" stroke="#22d3ee" strokeWidth="2"></polyline>
</svg>
</div>
</div>
</section>
</div>
</div>
</main>
</div>


    </>
  );
}
