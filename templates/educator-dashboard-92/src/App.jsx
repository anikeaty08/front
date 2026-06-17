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
      
<div className="flex h-screen w-full overflow-hidden">

<aside className="hidden w-64 flex-col border-r border-slate-200 bg-white md:flex">

<div className="flex h-16 items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-indigo-600">
<iconify-icon icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">ACADEMIA</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
<p className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Overview</p>
<a className="group flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-600 transition-all" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:notebook-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Classes
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Students
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Schedule
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Analytics
                </a>
<p className="px-2 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2 mt-8">Tools</p>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Resources
                </a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Messages
                    <span className="ml-auto rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-semibold text-indigo-600">3</span>
</a>
</nav>

<div className="border-t border-slate-100 p-4">
<div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-2 hover:border-slate-200 transition-colors cursor-pointer">
<div className="h-9 w-9 overflow-hidden rounded-full bg-slate-200">
<img alt="User" className="h-full w-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+Miller&amp;background=random&amp;color=fff"/>
</div>
<div className="flex-1 overflow-hidden">
<p className="truncate text-sm font-medium text-slate-900">Sarah Miller</p>
<p className="truncate text-xs text-slate-500">Science Dept.</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</aside>

<main className="flex h-full flex-1 flex-col overflow-hidden">

<header className="flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-4 sm:px-8 z-10">
<div className="flex items-center gap-4">
<button className="flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden sm:flex flex-col">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Today</span>
<span className="text-sm font-medium text-slate-900">October 24, Thu</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="h-10 w-64 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="Search students, assignments..." type="text"/>
</div>
<button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
<button className="hidden sm:flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Create New
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-slate-50 p-4 sm:p-8">
<div className="mx-auto max-w-6xl space-y-8">

<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900">Good Morning, Sarah</h1>
<p className="text-sm text-slate-500">Here's what's happening in your classes today.</p>
</div>
</div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500">Total Students</p>
<p className="mt-1 text-2xl font-medium tracking-tight text-slate-900">142</p>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-xs text-green-600">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
<span className="font-medium">+4%</span>
<span className="text-slate-400">vs last month</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500">Upcoming Assignments</p>
<p className="mt-1 text-2xl font-medium tracking-tight text-slate-900">12</p>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="solar:document-add-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
<span className="font-medium text-slate-600">3 due today</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500">Average Grade</p>
<p className="mt-1 text-2xl font-medium tracking-tight text-slate-900">B+</p>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
<iconify-icon icon="solar:medal-ribbons-star-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-xs text-green-600">
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
<span className="font-medium">+2.1%</span>
<span className="text-slate-400">class average</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500">Hours Taught</p>
<p className="mt-1 text-2xl font-medium tracking-tight text-slate-900">24h</p>
</div>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
<span className="font-medium text-slate-600">This week</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-slate-900">Active Courses</h2>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700" href="#">View All</a>
</div>

<div className="space-y-4">

<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 md:flex-row md:items-center">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-medium text-slate-900">Advanced Physics 101</h3>
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</div>
<p className="text-sm text-slate-500">Mon, Wed, Fri • 09:00 AM - 10:30 AM</p>

<div className="mt-3 flex items-center gap-3">
<div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[75%] rounded-full bg-indigo-600"></div>
</div>
<span className="text-xs font-medium text-slate-600">75%</span>
</div>
</div>
<div className="flex -space-x-2 overflow-hidden md:pl-4">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=J+D&amp;background=random" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=A+S&amp;background=random"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=M+K&amp;background=random"/>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white text-xs font-medium text-slate-500">+24</div>
</img></div>
<button className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 md:ml-2">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300 md:flex-row md:items-center">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-pink-50 text-pink-600">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<h3 className="font-medium text-slate-900">Chemistry Lab 3B</h3>
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</div>
<p className="text-sm text-slate-500">Tue, Thu • 01:00 PM - 02:30 PM</p>

<div className="mt-3 flex items-center gap-3">
<div className="h-1.5 flex-1 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[45%] rounded-full bg-pink-500"></div>
</div>
<span className="text-xs font-medium text-slate-600">45%</span>
</div>
</div>
<div className="flex -space-x-2 overflow-hidden md:pl-4">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=R+T&amp;background=random"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=L+P&amp;background=random"/>
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 ring-2 ring-white text-xs font-medium text-slate-500">+18</div>
</div>
<button className="rounded-lg border border-slate-200 bg-white p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 md:ml-2">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="mt-8">
<h2 className="mb-4 text-lg font-medium text-slate-900">Pending Review</h2>
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<table className="w-full text-left text-sm text-slate-500">
<thead className="bg-slate-50 text-xs font-medium uppercase text-slate-500">
<tr>
<th className="px-6 py-3 tracking-wider">Student</th>
<th className="px-6 py-3 tracking-wider">Assignment</th>
<th className="px-6 py-3 tracking-wider">Submitted</th>
<th className="px-6 py-3 tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="group hover:bg-slate-50">
<td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">Alex Morgan</td>
<td className="whitespace-nowrap px-6 py-4">Thermodynamics Report</td>
<td className="whitespace-nowrap px-6 py-4 text-xs">2 hours ago</td>
<td className="whitespace-nowrap px-6 py-4 text-right">
<a className="text-indigo-600 hover:text-indigo-800 font-medium text-xs" href="#">Grade</a>
</td>
</tr>
<tr className="group hover:bg-slate-50">
<td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">Casey Stuart</td>
<td className="whitespace-nowrap px-6 py-4">Lab Safety Quiz</td>
<td className="whitespace-nowrap px-6 py-4 text-xs">5 hours ago</td>
<td className="whitespace-nowrap px-6 py-4 text-right">
<a className="text-indigo-600 hover:text-indigo-800 font-medium text-xs" href="#">Grade</a>
</td>
</tr>
<tr className="group hover:bg-slate-50">
<td className="whitespace-nowrap px-6 py-4 font-medium text-slate-900">Jamie Lin</td>
<td className="whitespace-nowrap px-6 py-4">Midterm Project</td>
<td className="whitespace-nowrap px-6 py-4 text-xs">Yesterday</td>
<td className="whitespace-nowrap px-6 py-4 text-right">
<a className="text-indigo-600 hover:text-indigo-800 font-medium text-xs" href="#">Grade</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="space-y-6">

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900">Today's Schedule</h2>
<iconify-icon className="text-slate-400" icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<div className="relative space-y-6 pl-4 before:absolute before:left-[19px] before:top-2 before:h-[85%] before:w-px before:bg-slate-200">

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-500 ring-1 ring-indigo-100"></div>
<p className="text-xs font-medium text-slate-400">09:00 AM - 10:30 AM</p>
<p className="font-medium text-slate-900">Advanced Physics 101</p>
<p className="text-xs text-slate-500">Room 304</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300"></div>
<p className="text-xs font-medium text-slate-400">11:00 AM - 12:00 PM</p>
<p className="font-medium text-slate-900">Faculty Meeting</p>
<p className="text-xs text-slate-500">Conference Hall A</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-pink-500 ring-1 ring-pink-100"></div>
<p className="text-xs font-medium text-slate-400">01:00 PM - 02:30 PM</p>
<p className="font-medium text-slate-900">Chemistry Lab 3B</p>
<p className="text-xs text-slate-500">Lab 2</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-300"></div>
<p className="text-xs font-medium text-slate-400">03:00 PM - 04:00 PM</p>
<p className="font-medium text-slate-900">Office Hours</p>
<p className="text-xs text-slate-500">Online</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-sm font-semibold text-slate-900">To-Do List</h2>
<button className="text-slate-400 hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</button>
</div>
<div className="space-y-3">

<label className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent p-2 hover:bg-slate-50 transition-colors">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:border-indigo-500 checked:bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/20" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-400 peer-checked:line-through selection:bg-transparent">Upload Week 4 syllabus</span>
</label>

<label className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent p-2 hover:bg-slate-50 transition-colors">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:border-indigo-500 checked:bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/20" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-400 peer-checked:line-through selection:bg-transparent">Email parents re: field trip</span>
</label>

<label className="flex cursor-pointer items-center gap-3 rounded-lg border border-transparent p-2 hover:bg-slate-50 transition-colors">
<div className="relative flex items-center">
<input checked="" className="peer h-4 w-4 appearance-none rounded border border-slate-300 bg-white checked:border-indigo-500 checked:bg-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/20" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-white peer-checked:block" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-600 peer-checked:text-slate-400 peer-checked:line-through selection:bg-transparent">Finalize quiz questions</span>
</label>
</div>
</div>

<div className="rounded-xl bg-slate-900 p-5 text-white shadow-lg">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium">Class Storage</h3>
<p className="text-xs text-slate-400 mt-1">Assignments &amp; Resources</p>
</div>
<iconify-icon className="text-indigo-400" icon="solar:cloud-storage-linear" width="24"></iconify-icon>
</div>
<div className="mt-4">
<div className="flex items-end justify-between text-xs mb-1">
<span className="text-slate-300">Used</span>
<span className="font-medium">8.2 GB / 15 GB</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-700">
<div className="h-1.5 rounded-full bg-indigo-500 w-[60%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
}
