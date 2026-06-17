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



    if (window.lucide) {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
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
      

<aside className="hidden md:flex md:flex-col w-64 border-r border-slate-800 bg-slate-950/90 backdrop-blur">
<div className="px-5 pt-5 pb-4 border-b border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-xs font-semibold tracking-tight text-sky-100">
          EN
        </div>
<div>
<div className="text-sm font-semibold tracking-tight text-slate-50">EduNation</div>
<div className="text-[11px] text-slate-400">Country Student Console</div>
</div>
</div>
<button className="h-8 w-8 rounded-md border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-900/60 transition-colors">
<i className="h-4 w-4" data-lucide="command"></i>
</button>
</div>
<nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
<div>
<p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500 uppercase mb-2">Overview</p>
<div className="space-y-1">
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-100 bg-slate-900 border border-sky-500/60 shadow-sm shadow-sky-900/40">
<i className="h-4 w-4 text-sky-400" data-lucide="layout-dashboard"></i>
<span>National Dashboard</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-slate-500" data-lucide="map"></i>
<span>Regions &amp; Districts</span>
</button>
</div>
</div>
<div>
<p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500 uppercase mb-2">Institutions</p>
<div className="space-y-1">
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-emerald-400" data-lucide="school"></i>
<span>Schools</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-indigo-400" data-lucide="university"></i>
<span>Colleges</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-slate-400" data-lucide="layers"></i>
<span>Programs &amp; Streams</span>
</button>
</div>
</div>
<div>
<p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500 uppercase mb-2">Students</p>
<div className="space-y-1">
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-sky-400" data-lucide="users"></i>
<span>All Students</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-emerald-400" data-lucide="id-card"></i>
<span>ID Registry</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-amber-400" data-lucide="scan-line"></i>
<span>Attendance</span>
</button>
</div>
</div>
<div>
<p className="px-2 text-[11px] font-medium tracking-[0.16em] text-slate-500 uppercase mb-2">Admin</p>
<div className="space-y-1">
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-rose-400" data-lucide="shield-check"></i>
<span>Roles &amp; Permissions</span>
</button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md text-sm text-slate-300 hover:bg-slate-900 hover:text-slate-50 border border-transparent hover:border-slate-800 transition-colors">
<i className="h-4 w-4 text-slate-400" data-lucide="settings-2"></i>
<span>System Settings</span>
</button>
</div>
</div>
</nav>
<div className="border-t border-slate-800 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full overflow-hidden border border-slate-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">National Admin</div>
<div className="text-[11px] text-slate-400">Ministry of Education</div>
</div>
</div>
<button className="h-8 w-8 rounded-md border border-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-300 hover:border-rose-500/60 hover:bg-rose-950/40 transition-colors">
<i className="h-4 w-4" data-lucide="log-out"></i>
</button>
</div>
</aside>

<div className="flex-1 flex flex-col bg-slate-950">

<header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
<div className="px-4 md:px-6 py-3 flex items-center justify-between gap-3">
<div className="flex items-center gap-2 md:gap-3">
<button className="md:hidden h-8 w-8 rounded-md border border-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-900 hover:border-slate-700 transition-colors">
<i className="h-4 w-4" data-lucide="menu"></i>
</button>
<div>
<div className="flex items-center gap-2">
<h1 className="text-base md:text-lg font-semibold tracking-tight text-slate-50">National Student Management</h1>
<span className="px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[10px] font-medium text-emerald-200 tracking-tight">LIVE</span>
</div>
<p className="text-[11px] md:text-xs text-slate-400">Country-wide registry of all school &amp; college students with automatic National ID generation.</p>
</div>
</div>
<div className="flex items-center gap-2 md:gap-3">
<div className="hidden md:flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 text-[11px] text-slate-300 hover:border-slate-700 hover:bg-slate-900/70 transition-colors">
<i className="h-3.5 w-3.5" data-lucide="search"></i>
<span>Search students</span>
<span className="ml-1 px-1.5 py-0.5 rounded bg-slate-900 text-[10px] text-slate-500 border border-slate-800">Ctrl K</span>
</button>
</div>
<button className="h-8 w-8 rounded-md border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-300 hover:border-sky-500/50 hover:bg-sky-950/50 transition-colors">
<i className="h-4 w-4" data-lucide="bell"></i>
</button>
</div>
</div>
</header>

<main className="flex-1 px-4 md:px-6 py-4 md:py-6 space-y-6 overflow-y-auto">

<section className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
<div className="col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-4 md:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">National Snapshot</h2>
<p className="text-[11px] text-slate-400">All institutions registered in the country.</p>
</div>
<button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 text-[11px] text-slate-300 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<i className="h-3.5 w-3.5" data-lucide="download"></i>
<span>Export</span>
</button>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="border border-slate-800 rounded-lg p-3 bg-slate-950/60">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Total Students</span>
<i className="h-3.5 w-3.5 text-sky-400" data-lucide="users"></i>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-50">1,284,932</span>
<span className="text-[11px] text-emerald-400">+3.8% this year</span>
</div>
</div>
<div className="border border-slate-800 rounded-lg p-3 bg-slate-950/60">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">National IDs Issued</span>
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="id-card"></i>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-50">1,178,540</span>
<span className="text-[11px] text-slate-400">91.7% coverage</span>
</div>
</div>
<div className="border border-slate-800 rounded-lg p-3 bg-slate-950/60">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Schools</span>
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="school"></i>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-50">5,210</span>
<span className="text-[11px] text-emerald-400">+42 new</span>
</div>
</div>
<div className="border border-slate-800 rounded-lg p-3 bg-slate-950/60">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Colleges</span>
<i className="h-3.5 w-3.5 text-indigo-300" data-lucide="university"></i>
</div>
<div className="mt-1 flex items-baseline justify-between">
<span className="text-lg font-semibold tracking-tight text-slate-50">834</span>
<span className="text-[11px] text-slate-400">34 regions</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-slate-900/60 border border-slate-800 rounded-xl p-4 md:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-2">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Auto National ID</h2>
<p className="text-[11px] text-slate-400">Generate secure IDs for new students.</p>
</div>
<span className="px-2 py-0.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[10px] font-medium text-emerald-200 tracking-tight">ENABLED</span>
</div>
<div className="mt-1 space-y-2">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>Pattern</span>
<span className="font-mono text-[10px] text-slate-300 bg-slate-950/70 px-1.5 py-0.5 rounded border border-slate-800">
                CC-REG-SCH-YEAR-SEQ-CHECK
              </span>
</div>
<div className="border border-slate-800 rounded-lg bg-slate-950/70 p-3 space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-slate-400">Preview ID</span>
<button className="text-[11px] text-sky-300 hover:text-sky-200 hover:underline">Customize</button>
</div>
<div className="mt-1 font-mono text-xs text-slate-100 tracking-tight">
<span className="text-sky-300">01</span>-
                <span className="text-emerald-300">07</span>-
                <span className="text-amber-300">1245</span>-
                <span className="text-slate-200">2025</span>-
                <span className="text-rose-300">000392</span>-
                <span className="text-slate-400">8</span>
</div>
<p className="text-[10px] text-slate-500">Includes checksum to prevent duplicates and invalid IDs.</p>
</div>
</div>
<div className="mt-1 space-y-2">
<div className="flex items-center justify-between text-[11px] text-slate-400">
<span>Pending ID requests</span>
<span className="text-[11px] text-sky-300">219</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400"></div>
</div>
</div>
<div className="mt-2 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium tracking-tight border border-sky-500/60 bg-sky-500/10 text-sky-100 hover:bg-sky-500/20 hover:border-sky-400 transition-colors">
<i className="h-3.5 w-3.5" data-lucide="flashlight"></i>
<span>Generate for new student</span>
</button>
</div>
</div>

<div className="col-span-1 bg-slate-900/60 border border-slate-800 rounded-xl p-4 md:p-5 flex flex-col justify-between">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Quick Actions</h2>
<p className="text-[11px] text-slate-400 mb-3">Frequently used workflows for administrators.</p>
<div className="space-y-2">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-emerald-500/50 bg-emerald-500/10 text-[12px] text-emerald-100 hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors">
<span className="flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="user-plus"></i>
<span>Enroll new student</span>
</span>
<span className="text-[10px] text-emerald-200/90">Auto ID</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-slate-800 bg-slate-950/70 text-[12px] text-slate-200 hover:bg-slate-900 hover:border-slate-700 transition-colors">
<span className="flex items-center gap-2">
<i className="h-3.5 w-3.5 text-amber-300" data-lucide="school"></i>
<span>Register new school / college</span>
</span>
<span className="text-[10px] text-slate-400">3 min</span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-slate-800 bg-slate-950/70 text-[12px] text-slate-200 hover:bg-slate-900 hover:border-slate-700 transition-colors">
<span className="flex items-center gap-2">
<i className="h-3.5 w-3.5 text-sky-300" data-lucide="scan-search"></i>
<span>Find by National ID</span>
</span>
<span className="text-[10px] text-slate-400">Ctrl F</span>
</button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-start">

<div className="lg:col-span-1 bg-slate-900/60 border border-slate-800 rounded-xl p-4 md:p-5 space-y-3">
<div className="flex items-center justify-between">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Institutions</h2>
<p className="text-[11px] text-slate-400">Manage all schools and colleges in the country.</p>
</div>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 bg-slate-950/70 text-[11px] text-slate-200 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<i className="h-3.5 w-3.5" data-lucide="plus"></i>
<span>Add</span>
</button>
</div>
<div className="flex gap-1.5 text-[11px]">
<button className="flex-1 py-1.5 rounded-md bg-slate-950 text-slate-100 border border-sky-500/60">Schools</button>
<button className="flex-1 py-1.5 rounded-md bg-slate-950/40 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-colors">Colleges</button>
</div>
<div className="mt-2 border border-slate-800 rounded-lg bg-slate-950/60">
<div className="px-3 py-2 border-b border-slate-800 flex items-center gap-2">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="filter"></i>
<input className="flex-1 bg-transparent border-none outline-none text-[11px] text-slate-200 placeholder:text-slate-500" placeholder="Filter by district, region, code..." type="text"/>
</div>
<div className="max-h-64 overflow-y-auto divide-y divide-slate-900">

<button className="w-full px-3 py-2.5 flex items-start justify-between text-left hover:bg-slate-900/80 transition-colors">
<div className="flex items-start gap-2.5">
<div className="h-7 w-7 rounded-md bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-[11px] font-semibold tracking-tight text-sky-100">
                    R1
                  </div>
<div>
<div className="text-[12px] font-medium tracking-tight text-slate-50">Central City Public School</div>
<div className="text-[11px] text-slate-400">School • Region 01 • District 07</div>
<div className="mt-0.5 flex flex-wrap gap-1 text-[10px]">
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-200">Active</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">Code: 01-07-1245</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">Students: 1,238</span>
</div>
</div>
</div>
<i className="h-3.5 w-3.5 text-slate-500 mt-1" data-lucide="chevron-right"></i>
</button>
<button className="w-full px-3 py-2.5 flex items-start justify-between text-left hover:bg-slate-900/80 transition-colors">
<div className="flex items-start gap-2.5">
<div className="h-7 w-7 rounded-md bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-[11px] font-semibold tracking-tight text-emerald-100">
                    R2
                  </div>
<div>
<div className="text-[12px] font-medium tracking-tight text-slate-50">Green Valley High School</div>
<div className="text-[11px] text-slate-400">School • Region 02 • District 11</div>
<div className="mt-0.5 flex flex-wrap gap-1 text-[10px]">
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-emerald-500/40 text-emerald-200">Active</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">Code: 02-11-0891</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">Students: 864</span>
</div>
</div>
</div>
<i className="h-3.5 w-3.5 text-slate-500 mt-1" data-lucide="chevron-right"></i>
</button>
<button className="w-full px-3 py-2.5 flex items-start justify-between text-left hover:bg-slate-900/80 transition-colors">
<div className="flex items-start gap-2.5">
<div className="h-7 w-7 rounded-md bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center text-[11px] font-semibold tracking-tight text-indigo-100">
                    R3
                  </div>
<div>
<div className="text-[12px] font-medium tracking-tight text-slate-50">North Ridge College</div>
<div className="text-[11px] text-slate-400">College • Region 03 • District 04</div>
<div className="mt-0.5 flex flex-wrap gap-1 text-[10px]">
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-amber-500/40 text-amber-200">Pending audit</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">Code: 03-04-2213</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800 text-slate-400">Students: 1,942</span>
</div>
</div>
</div>
<i className="h-3.5 w-3.5 text-slate-500 mt-1" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-slate-900/60 border border-slate-800 rounded-xl p-4 md:p-5 space-y-4">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Enroll Student &amp; Generate National ID</h2>
<p className="text-[11px] text-slate-400">Create a student record linked to a school/college with automatic ID assignment.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-400">ID mode:</span>
<div className="flex items-center gap-1.5 text-[11px]">
<button className="px-2 py-1 rounded-md bg-slate-950 text-slate-100 border border-sky-500/60">Automatic</button>
<button className="px-2 py-1 rounded-md bg-slate-950/40 text-slate-400 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-colors">Manual override</button>
</div>
</div>
</div>
<form className="space-y-4">

<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="space-y-1">
<label className="text-[11px] text-slate-300">First Name</label>
<input className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40" placeholder="e.g. Amina" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Last Name</label>
<input className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40" placeholder="e.g. Ndlovu" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Date of Birth</label>
<input className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40" type="date"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Gender</label>
<select className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">Select gender</option>
<option className="bg-slate-900">Female</option>
<option className="bg-slate-900">Male</option>
<option className="bg-slate-900">Other / Prefer not to say</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Guardian Contact</label>
<input className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40" placeholder="+XXX ..." type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Nationality</label>
<input className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40" placeholder="Country name" type="text"/>
</div>
</div>
<div className="h-px bg-slate-800"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Institution</label>
<div className="flex gap-1.5">
<select className="flex-1 px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">Search or select institution...</option>
<option className="bg-slate-900">Central City Public School (01-07-1245)</option>
<option className="bg-slate-900">Green Valley High School (02-11-0891)</option>
<option className="bg-slate-900">North Ridge College (03-04-2213)</option>
</select>
<button className="h-8 w-8 rounded-md border border-slate-800 flex items-center justify-center text-slate-300 hover:border-sky-500/60 hover:bg-sky-950/40 hover:text-sky-200 transition-colors" type="button">
<i className="h-3.5 w-3.5" data-lucide="search"></i>
</button>
</div>
<p className="text-[10px] text-slate-500">Institution code will be embedded into the generated National ID.</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Academic Level</label>
<select className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">Primary</option>
<option className="bg-slate-900">Secondary</option>
<option className="bg-slate-900">College</option>
<option className="bg-slate-900">Vocational</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Grade / Year</label>
<input className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 placeholder:text-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40" placeholder="e.g. Grade 9" type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Enrollment Year</label>
<select className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">2025</option>
<option className="bg-slate-900">2024</option>
<option className="bg-slate-900">2023</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Funding Type</label>
<select className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">Public</option>
<option className="bg-slate-900">Private</option>
<option className="bg-slate-900">Scholarship</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[11px] text-slate-300">Status</label>
<select className="w-full px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[12px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">Active</option>
<option className="bg-slate-900">Transferred</option>
<option className="bg-slate-900">Graduated</option>
<option className="bg-slate-900">Suspended</option>
</select>
</div>
</div>
<div className="h-px bg-slate-800"></div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-start">
<div className="lg:col-span-2 border border-slate-800 rounded-lg bg-slate-950/80 p-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
<div className="flex items-start gap-2">
<div className="mt-0.5">
<i className="h-4 w-4 text-emerald-400" data-lucide="id-card"></i>
</div>
<div>
<div className="text-[11px] text-slate-400">Generated National ID (preview)</div>
<div className="mt-0.5 font-mono text-xs text-slate-50 tracking-tight">
                      01-07-1245-2025-000392-8
                    </div>
<div className="mt-1 flex flex-wrap gap-1 text-[10px]">
<span className="px-1.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">Country: 01</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">Region: 07</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">Institution: 1245</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">Year: 2025</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">Sequence: 000392</span>
<span className="px-1.5 py-0.5 rounded-full bg-slate-950 border border-emerald-500/50 text-emerald-200">Checksum: 8</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="text-[10px] text-emerald-300">No duplicates in registry.</span>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 bg-slate-900 text-[11px] text-slate-200 hover:border-sky-500/60 hover:bg-sky-950/40 hover:text-sky-50 transition-colors" type="button">
<i className="h-3.5 w-3.5" data-lucide="refresh-ccw"></i>
<span>Regenerate</span>
</button>
</div>
</div>
<div className="border border-slate-800 rounded-lg bg-slate-950/80 p-3 flex gap-2">
<div className="h-10 w-10 rounded-md overflow-hidden border border-slate-800">
<img alt="Student placeholder" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-1">
<div className="text-[11px] text-slate-400 mb-1">Student card preview</div>
<div className="text-[11px] text-slate-200">Amina Ndlovu</div>
<div className="text-[10px] text-slate-400">Central City Public School • Grade 9</div>
<div className="mt-0.5 text-[10px] text-slate-500">National ID will be printed on the physical card.</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-1">
<div className="text-[10px] text-slate-500">
                By enrolling the student, you confirm that all information is accurate and consent is obtained from guardians where required.
              </div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-800 bg-slate-950/80 text-[11px] text-slate-200 hover:border-slate-700 hover:bg-slate-900 transition-colors" type="button">
                  Save as draft
                </button>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-emerald-500/70 bg-emerald-500/10 text-[11px] font-medium tracking-tight text-emerald-50 hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors" type="submit">
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i>
<span>Enroll &amp; issue National ID</span>
</button>
</div>
</div>
</form>
</div>
</section>

<section className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 md:p-5 space-y-3">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Recent Students</h2>
<p className="text-[11px] text-slate-400">Latest students enrolled from schools and colleges across the country.</p>
</div>
<div className="flex items-center gap-2">
<select className="px-2.5 py-1.5 rounded-md bg-slate-950/80 border border-slate-800 text-[11px] text-slate-100 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/40">
<option className="bg-slate-900">All institutions</option>
<option className="bg-slate-900">Schools only</option>
<option className="bg-slate-900">Colleges only</option>
</select>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-800 bg-slate-950/80 text-[11px] text-slate-200 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<i className="h-3.5 w-3.5" data-lucide="columns-3"></i>
<span>Columns</span>
</button>
</div>
</div>
<div className="overflow-x-auto border border-slate-800 rounded-lg">
<table className="min-w-full text-[11px]">
<thead className="bg-slate-950/90 border-b border-slate-800">
<tr>
<th className="text-left px-3 py-2 text-slate-400 font-normal">Student</th>
<th className="text-left px-3 py-2 text-slate-400 font-normal">National ID</th>
<th className="text-left px-3 py-2 text-slate-400 font-normal">Institution</th>
<th className="text-left px-3 py-2 text-slate-400 font-normal">Level</th>
<th className="text-left px-3 py-2 text-slate-400 font-normal">Status</th>
<th className="text-right px-3 py-2 text-slate-400 font-normal">Enrolled</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-900">
<tr className="hover:bg-slate-900/70 transition-colors">
<td className="px-3 py-2 flex items-center gap-2">
<div className="h-7 w-7 rounded-full overflow-hidden border border-slate-700">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<div className="text-slate-100">Amina Ndlovu</div>
<div className="text-[10px] text-slate-400">Female • 14 yrs</div>
</div>
</td>
<td className="px-3 py-2 font-mono text-[11px] text-sky-100">01-07-1245-2025-000392-8</td>
<td className="px-3 py-2">
<div className="text-slate-100">Central City Public School</div>
<div className="text-[10px] text-slate-400">Region 01 • District 07</div>
</td>
<td className="px-3 py-2">
<div className="text-slate-100">Secondary</div>
<div className="text-[10px] text-slate-400">Grade 9</div>
</td>
<td className="px-3 py-2">
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/60 text-[10px] text-emerald-200">Active</span>
</td>
<td className="px-3 py-2 text-right text-slate-300">2025-02-11</td>
</tr>
<tr className="hover:bg-slate-900/70 transition-colors">
<td className="px-3 py-2 flex items-center gap-2">
<div className="h-7 w-7 rounded-full overflow-hidden border border-slate-700">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<div className="text-slate-100">Samuel Ortega</div>
<div className="text-[10px] text-slate-400">Male • 18 yrs</div>
</div>
</td>
<td className="px-3 py-2 font-mono text-[11px] text-sky-100">02-11-0891-2025-000147-3</td>
<td className="px-3 py-2">
<div className="text-slate-100">Green Valley High School</div>
<div className="text-[10px] text-slate-400">Region 02 • District 11</div>
</td>
<td className="px-3 py-2">
<div className="text-slate-100">Secondary</div>
<div className="text-[10px] text-slate-400">Grade 12</div>
</td>
<td className="px-3 py-2">
<span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/60 text-[10px] text-emerald-200">Active</span>
</td>
<td className="px-3 py-2 text-right text-slate-300">2025-02-10</td>
</tr>
<tr className="hover:bg-slate-900/70 transition-colors">
<td className="px-3 py-2 flex items-center gap-2">
<div className="h-7 w-7 rounded-full overflow-hidden border border-slate-700">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<div className="text-slate-100">Linh Tran</div>
<div className="text-[10px] text-slate-400">Female • 21 yrs</div>
</div>
</td>
<td className="px-3 py-2 font-mono text-[11px] text-sky-100">03-04-2213-2024-000972-1</td>
<td className="px-3 py-2">
<div className="text-slate-100">North Ridge College</div>
<div className="text-[10px] text-slate-400">Region 03 • District 04</div>
</td>
<td className="px-3 py-2">
<div className="text-slate-100">College</div>
<div className="text-[10px] text-slate-400">Computer Science</div>
</td>
<td className="px-3 py-2">
<span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/60 text-[10px] text-amber-200">Graduated</span>
</td>
<td className="px-3 py-2 text-right text-slate-300">2024-11-28</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-[10px] text-slate-500">
<div>Showing 3 of 1,284,932 students. Use filters and search to access the full registry.</div>
<div className="flex items-center gap-1.5">
<button className="px-2 py-1 rounded-md border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900 transition-colors">Previous</button>
<button className="px-2 py-1 rounded-md border border-sky-500/60 bg-sky-500/10 text-sky-100">1</button>
<button className="px-2 py-1 rounded-md border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900 transition-colors">2</button>
<button className="px-2 py-1 rounded-md border border-slate-800 bg-slate-950/80 text-slate-300 hover:border-slate-700 hover:bg-slate-900 transition-colors">Next</button>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
