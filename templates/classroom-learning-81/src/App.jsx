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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200 glass-nav">
<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white shadow-lg shadow-slate-900/20">
<span className="font-semibold text-sm tracking-tighter">R3</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Room 302</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Curriculum</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Schedule</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-xs font-medium text-slate-500 hover:text-slate-900" href="#">Parent Login</a>
<button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-xs font-medium text-white shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-all">
                    Student Portal
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-20">

<div className="mx-auto max-w-6xl px-6 mb-24">
<div className="flex flex-col items-center text-center">
<div className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 mr-2"></span>
<span className="text-xs font-medium text-indigo-700">Term 3 has started</span>
</div>
<h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
                    Exploring the world,<br/> one lesson at a time.
                </h1>
<p className="max-w-xl text-lg text-slate-500 mb-10 leading-relaxed">
                    Welcome to Mrs. Sullivan's 4th Grade class. Find homework assignments, upcoming events, and learning resources all in one place.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md hover:bg-slate-800 transition-all">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5"></span>
                        View Assignments
                    </button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all">
<span className="iconify" data-icon="lucide:calendar" data-strokeWidth="1.5"></span>
                        Class Calendar
                    </button>
</div>
</div>
</div>

<div className="mx-auto max-w-6xl px-6">
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="col-span-1 lg:col-span-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Current Subjects</h2>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700" href="#">View Syllabus →</a>
</div>
<div className="grid gap-4 sm:grid-cols-2">

<div className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-indigo-100 hover:bg-indigo-50/30 hover:shadow-sm cursor-pointer">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:calculator" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-sm font-medium text-slate-900">Mathematics</h3>
<p className="mt-1 text-xs text-slate-500">Fractions &amp; Decimals</p>
</div>

<div className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-emerald-100 hover:bg-emerald-50/30 hover:shadow-sm cursor-pointer">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:flask-conical" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-sm font-medium text-slate-900">Science</h3>
<p className="mt-1 text-xs text-slate-500">Ecosystems &amp; Biology</p>
</div>

<div className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-orange-100 hover:bg-orange-50/30 hover:shadow-sm cursor-pointer">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:languages" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-sm font-medium text-slate-900">Language Arts</h3>
<p className="mt-1 text-xs text-slate-500">Creative Writing Workshop</p>
</div>

<div className="group relative overflow-hidden rounded-lg border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-sky-100 hover:bg-sky-50/30 hover:shadow-sm cursor-pointer">
<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-900/5 group-hover:bg-sky-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:globe-2" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-sm font-medium text-slate-900">History</h3>
<p className="mt-1 text-xs text-slate-500">Early American Colonies</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col h-full">
<div className="mb-6 flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Notice Board</h2>
<span className="iconify text-slate-400" data-icon="lucide:bell" data-strokeWidth="1.5"></span>
</div>
<div className="flex flex-col gap-6 flex-1">
<div className="relative pl-4 border-l-2 border-slate-100">
<span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-500"></span>
<p className="text-xs font-medium text-slate-400 mb-1">Today, 9:00 AM</p>
<p className="text-sm font-medium text-slate-900">Field Trip Slip Due</p>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">Please return signed permission slips for the science museum visit by Friday.</p>
</div>
<div className="relative pl-4 border-l-2 border-slate-100">
<span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300"></span>
<p className="text-xs font-medium text-slate-400 mb-1">Yesterday</p>
<p className="text-sm font-medium text-slate-900">Math Quiz Results</p>
<p className="mt-1 text-xs text-slate-500 leading-relaxed">Grades for the Chapter 4 assessment have been posted to the portal.</p>
</div>
<div className="relative pl-4 border-l-2 border-transparent">
<a className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
                                View all notices <span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="1.5"></span>
</a>
</div>
</div>
</div>
</div>

<div className="mt-6 grid gap-6 lg:grid-cols-3">
<div className="lg:col-span-1 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-4">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Homework Due</h2>
<p className="text-xs text-slate-500">Friday, Oct 24th</p>
</div>
<div className="space-y-3">

<label className="custom-checkbox flex cursor-pointer items-start gap-3 rounded-lg border border-slate-100 p-3 hover:bg-slate-50 transition-colors">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-slate-300 bg-white transition-all peer-focus:ring-2 peer-focus:ring-indigo-500 peer-focus:ring-offset-1 flex items-center justify-center">
<svg className="hidden h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-700 select-none">Math Worksheet 4.2</p>
<span className="inline-flex mt-1 items-center rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/10">Math</span>
</div>
</label>

<label className="custom-checkbox flex cursor-pointer items-start gap-3 rounded-lg border border-slate-100 p-3 hover:bg-slate-50 transition-colors">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-slate-300 bg-white transition-all peer-focus:ring-2 peer-focus:ring-indigo-500 peer-focus:ring-offset-1 flex items-center justify-center">
<svg className="hidden h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-700 select-none">Read Chapter 5</p>
<span className="inline-flex mt-1 items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/10">Reading</span>
</div>
</label>

<label className="custom-checkbox flex cursor-pointer items-start gap-3 rounded-lg border border-slate-100 p-3 hover:bg-slate-50 transition-colors">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="h-4 w-4 rounded border border-slate-300 bg-white transition-all peer-focus:ring-2 peer-focus:ring-indigo-500 peer-focus:ring-offset-1 flex items-center justify-center">
<svg className="hidden h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div>
<p className="text-sm font-medium text-slate-700 line-through text-slate-400 select-none">History Essay Outline</p>
<span className="inline-flex mt-1 items-center rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Done</span>
</div>
</label>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-slate-900 p-6 shadow-lg text-white relative overflow-hidden">

<div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-white">Digital Library</h2>
<p className="mt-2 text-sm text-slate-400 max-w-sm">Access over 500+ interactive books, research papers, and educational videos curated for our curriculum.</p>
<div className="mt-8 flex gap-3">
<button className="rounded-lg bg-white text-slate-900 px-4 py-2 text-xs font-medium hover:bg-slate-100 transition-colors">Launch Library</button>
<button className="rounded-lg border border-slate-700 bg-transparent text-white px-4 py-2 text-xs font-medium hover:bg-slate-800 transition-colors">Request Book</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3 w-full md:w-auto">
<div className="flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
<span className="iconify text-indigo-400 mb-2" data-icon="lucide:video" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium">Videos</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
<span className="iconify text-emerald-400 mb-2" data-icon="lucide:gamepad-2" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium">Games</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
<span className="iconify text-orange-400 mb-2" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium">Docs</span>
</div>
<div className="flex flex-col items-center justify-center rounded-lg bg-white/5 p-4 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
<span className="iconify text-sky-400 mb-2" data-icon="lucide:headphones" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-xs font-medium">Audio</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-6xl px-6 mt-20">
<div className="rounded-2xl bg-gradient-to-b from-indigo-50 to-white border border-indigo-100 p-8 md:p-12 text-center">
<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
<span className="iconify" data-icon="lucide:trophy" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Student of the Week</h2>
<p className="mx-auto mt-2 max-w-lg text-sm text-slate-500">
                    Congratulations to <strong>Sarah Jenkins</strong> for outstanding performance in the Science Fair project and helping others during Math.
                </p>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white py-12">
<div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm tracking-tighter text-slate-900">Room 302</span>
<span className="text-xs text-slate-400">© 2024 Washington Elementary</span>
</div>
<div className="flex gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Class Rules</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact Teacher</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="18"></span>
</a>
</div>
</div>
</footer>

    </>
  );
}
