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
      

<aside className="lg:w-64 flex flex-col shrink-0 overflow-y-auto no-scrollbar bg-white w-16 z-20 border-slate-200 border-r justify-between">
<div className="">
<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="hidden lg:block font-medium tracking-tight text-sm">Tracker</span>
</div>
</div>
<nav className="p-2 space-y-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2 bg-slate-50 text-slate-900 rounded-md group" href="#">
<iconify-icon icon="lucide:kanban-square" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Board</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon icon="lucide:calendar-days" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Calendar</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="" icon="lucide:archive" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Archived</span>
</a>
</nav>

<div className="px-2 mt-3">
<div className="px-3 py-2 hidden lg:block">
<h4 className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Settings</h4>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="" height="18" icon="lucide:palette" strokeWidth="1.5" style={{color: 'rgb(15, 23, 42)'}} width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Theme</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="" height="18" icon="lucide:credit-card" strokeWidth="1.5" style={{color: 'rgb(15, 23, 42)'}} width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Subscription</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Domains</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Team</span>
</a>
</nav>
</div>
</div>
<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium ring-2 ring-white shadow-sm">
                    JD
                </div>
<div className="hidden lg:block">
<p className="text-sm font-medium text-slate-900">Jane Doe</p>
<p className="text-xs text-slate-400">Product Designer</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#F8F9FB]">

<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-sm px-6 flex items-center justify-between sticky top-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-base font-semibold text-slate-900 tracking-tight">Applications</h1>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex bg-slate-100 p-1 rounded-md">
<button className="px-3 py-1 bg-white shadow-sm rounded text-xs font-medium text-slate-900">Board</button>
<button className="px-3 py-1 text-slate-500 hover:text-slate-700 text-xs font-medium transition-colors">Calendar</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center bg-white border border-slate-200 rounded-md px-3 py-1.5 focus-within:ring-2 focus-within:ring-slate-100 focus-within:border-slate-300 transition-all shadow-sm">
<iconify-icon className="text-slate-400 mr-2" icon="lucide:search" width="14"></iconify-icon>
<input className="text-sm bg-transparent outline-none placeholder:text-slate-400 w-48 text-slate-700" placeholder="Search jobs..." type="text"/>
<span className="text-xs text-slate-300 border border-slate-200 rounded px-1.5 py-0.5 ml-2">/</span>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-3 py-1.5 rounded-md shadow-sm flex items-center gap-2 transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                    New Application
                </button>
</div>
</header>

<div className="flex-1 overflow-x-auto overflow-y-hidden kanban-scroll p-6">
<div className="flex gap-6 min-w-max h-full gap-x-6 gap-y-6">

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-slate-300"></span>
<h3 className="text-sm font-medium text-slate-700">Wishlist</h3>
<span className="text-xs text-slate-400 font-medium">2</span>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:plus" width="16"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pr-2 pb-10 space-y-3">

<div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-700 font-bold text-xs">
                                    A
                                </div>
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600 transition-opacity">
<iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon>
</button>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-0.5 tracking-tight">Product Designer</h4>
<p className="text-xs text-slate-500 mb-3">Airbnb</p>
<div className="flex items-center justify-between mt-2">
<div className="flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Remote</span>
</div>
<span className="text-[10px] text-slate-400">Added 2d ago</span>
</div>
</div>

<div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded border border-slate-100 bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-xs">
                                    L
                                </div>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-0.5 tracking-tight">Frontend Eng</h4>
<p className="text-xs text-slate-500 mb-3">Linear</p>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">$140k-180k</span>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
<h3 className="text-sm font-medium text-slate-700">Applied</h3>
<span className="text-xs text-slate-400 font-medium">3</span>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon className="" icon="lucide:plus" width="16"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar pr-2 pb-10 space-y-3">

<div className="bg-white p-4 rounded-lg border border-slate-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded border border-slate-100 bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                                    S
                                </div>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-0.5 tracking-tight">Design Engineer</h4>
<p className="text-xs text-slate-500 mb-3">Stripe</p>
<div className="w-full bg-slate-100 rounded-full h-1 mb-2">
<div className="bg-blue-500 h-1 rounded-full" style={{width: '25%'}}></div>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-slate-500">Application Sent</span>
<span className="text-[10px] text-slate-400">Oct 24</span>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
<h3 className="text-sm font-medium text-slate-700">Interview</h3>
<span className="text-xs text-slate-400 font-medium">1</span>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:plus" width="16"></iconify-icon></button>
</div>
<div className="flex-1 space-y-3 overflow-y-auto pr-2 pb-10 no-scrollbar">

<div className="bg-white p-4 rounded-lg border-2 border-slate-900 shadow-sm transition-all cursor-pointer relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-slate-50 to-transparent -mr-4 -mt-4 rounded-bl-3xl"></div>
<div className="flex justify-between items-start mb-3 relative z-10">
<div className="w-8 h-8 rounded border border-slate-100 bg-black flex items-center justify-center text-white font-bold text-xs">
                                    V
                                </div>
<span className="flex h-2 w-2 rounded-full bg-amber-400 ring-2 ring-white"></span>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-0.5 tracking-tight">Senior Product Designer</h4>
<p className="text-xs text-slate-500 mb-3">Vercel</p>
<div className="w-full bg-slate-100 rounded-full h-1 mb-3">
<div className="bg-amber-400 h-1 rounded-full" style={{width: '60%'}}></div>
</div>
<div className="flex items-center gap-2 mb-2">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-pink-100 border border-white flex items-center justify-center text-[8px] text-pink-600">S</div>
<div className="w-5 h-5 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[8px] text-blue-600">M</div>
</div>
<span className="text-[10px] text-slate-400">+2 interviewers</span>
</div>
<div className="flex items-center justify-between border-t border-slate-50 pt-2 mt-2">
<span className="flex items-center gap-1.5 text-[10px] font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
<iconify-icon icon="lucide:calendar" width="10"></iconify-icon>
                                    Technical: Tomorrow, 2 PM
                                </span>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<h3 className="text-sm font-medium text-slate-700">Offer</h3>
<span className="text-xs text-slate-400 font-medium">1</span>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:plus" width="16"></iconify-icon></button>
</div>
<div className="flex-1 space-y-3 overflow-y-auto pr-2 pb-10 no-scrollbar">

<div className="bg-white p-4 rounded-lg border border-emerald-100 shadow-[0_2px_8px_rgba(16,185,129,0.05)] hover:shadow-[0_4px_12px_rgba(16,185,129,0.1)] transition-all cursor-pointer">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded border border-emerald-50 bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-xs">
                                    R
                                </div>
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-0.5 tracking-tight">UX Engineer</h4>
<p className="text-xs text-slate-500 mb-3">Raycast</p>
<div className="p-2 bg-emerald-50/50 rounded border border-emerald-100 mb-1">
<p className="text-[10px] font-medium text-emerald-700">Offer Received</p>
<p className="text-[10px] text-emerald-600/80 mt-0.5">Expires in 3 days</p>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity">
<div className="flex items-center justify-between mb-3 px-1">
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-slate-300"></span>
<h3 className="text-sm font-medium text-slate-700">Rejected</h3>
<span className="text-xs text-slate-400 font-medium">5</span>
</div>
</div>
<div className="flex-1 space-y-3 overflow-y-auto pr-2 pb-10 no-scrollbar">
<div className="bg-slate-50 p-4 rounded-lg border border-slate-200 shadow-none">
<h4 className="text-sm font-medium text-slate-500 mb-0.5">Software Engineer</h4>
<p className="text-xs text-slate-400">Netflix</p>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="w-96 bg-white border-l border-slate-200 shadow-xl z-30 flex flex-col hidden lg:flex">

<div className="p-6 border-b border-slate-100">
<div className="flex items-start justify-between mb-4">
<div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center font-bold text-lg shadow-md">V</div>
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded transition-colors">
<iconify-icon icon="lucide:external-link" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors">
<iconify-icon icon="lucide:trash-2" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded transition-colors">
<iconify-icon icon="lucide:x" width="18"></iconify-icon>
</button>
</div>
</div>
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Senior Product Designer</h2>
<div className="flex items-center gap-2 mt-1">
<p className="text-sm text-slate-500 font-medium">Vercel</p>
<span className="text-slate-300">•</span>
<a className="text-xs text-blue-600 hover:underline truncate max-w-[120px]" href="#">vercel.com/careers/jobs/123</a>
</div>
<div className="mt-5">
<div className="flex justify-between items-center mb-1.5">
<span className="text-xs font-medium text-slate-500">Pipeline Status</span>
<span className="text-xs font-medium text-slate-900">Technical Interview</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-amber-400 h-1.5 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]" style={{width: '60%'}}></div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6">

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-slate-900">Interview Stages</h3>
<button className="text-xs text-slate-500 hover:text-slate-900 font-medium flex items-center gap-1">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon> Add Stage
                    </button>
</div>
<div className="relative pl-2 space-y-6 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-slate-200">

<div className="relative flex items-start group">
<div className="absolute left-0 top-0.5 flex items-center justify-center w-8 h-8 -ml-2">
<div className="w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:check" width="10"></iconify-icon>
</div>
</div>
<div className="ml-8 w-full">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-900 line-through decoration-slate-300 decoration-1">Recruiter Screen</span>
<span className="text-[10px] text-slate-400">Oct 20</span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Passed. Notes: Good culture fit.</p>
</div>
</div>

<div className="relative flex items-start group">
<div className="absolute left-0 top-0.5 flex items-center justify-center w-8 h-8 -ml-2">
<div className="w-4 h-4 rounded-full bg-white border-2 border-amber-400 shadow-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
</div>
</div>
<div className="ml-8 w-full p-3 bg-amber-50/50 rounded-md border border-amber-100/50">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-slate-900">Technical Deep Dive</span>
<span className="text-[10px] font-medium text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">Upcoming</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-600 mt-2">
<iconify-icon className="text-slate-400" icon="lucide:calendar" width="14"></iconify-icon>
                                Tomorrow, 2:00 PM
                            </div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium py-1.5 rounded shadow-sm hover:bg-slate-50">Reschedule</button>
<button className="flex-1 bg-slate-900 text-white text-xs font-medium py-1.5 rounded shadow-sm hover:bg-slate-800">Mark Done</button>
</div>
</div>
</div>

<div className="relative flex items-start group opacity-60">
<div className="absolute left-0 top-0.5 flex items-center justify-center w-8 h-8 -ml-2">
<div className="w-4 h-4 rounded-full bg-slate-100 border-2 border-slate-300"></div>
</div>
<div className="ml-8 w-full">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-900">Onsite / Culture</span>
<span className="text-[10px] text-slate-400">TBD</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-6 border-t border-slate-100">
<h3 className="text-sm font-medium text-slate-900 mb-2">Application Details</h3>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-400 mb-1 tracking-wider">Salary</label>
<div className="relative">
<span className="absolute left-2 top-1.5 text-slate-400 text-xs">$</span>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-2 pl-5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" type="text" value="160,000"/>
</div>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-400 mb-1 tracking-wider">Location</label>
<div className="relative">
<iconify-icon className="absolute left-2 top-1.5 text-slate-400" icon="lucide:map-pin" width="12"></iconify-icon>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-2 pl-6 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow" type="text" value="San Francisco"/>
</div>
</div>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-400 mb-1 tracking-wider">Resume</label>
<div className="border border-dashed border-slate-300 rounded-lg p-3 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white border border-slate-200 rounded flex items-center justify-center text-rose-500 shadow-sm">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">Resume_V3_Final.pdf</p>
<p className="text-[10px] text-slate-400">2.4 MB • Uploaded 2d ago</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="lucide:eye" width="16"></iconify-icon></button>
</div>
</div>
<div>
<label className="block text-[10px] uppercase font-semibold text-slate-400 mb-1 tracking-wider">Notes</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded p-2 text-xs text-slate-700 min-h-[80px] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 resize-none placeholder:text-slate-400">Met with Sarah from Engineering. Discussed design systems and React Server Components.</textarea>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end">
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded shadow-sm transition-all">Save Changes</button>
</div>
</aside>

    </>
  );
}
