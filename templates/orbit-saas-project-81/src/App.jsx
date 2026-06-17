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
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden md:flex transition-all duration-300 z-20">

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
<span className="font-semibold text-lg tracking-tight">O</span>
</div>
<span className="font-semibold text-lg tracking-tight">Orbit</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Main</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-blue-50 text-blue-600 group transition-all duration-200" href="#">
<iconify-icon icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-all duration-200" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Projects</span>
<span className="ml-auto text-xs bg-slate-100 text-slate-500 py-0.5 px-2 rounded-full group-hover:bg-slate-200">8</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-all duration-200" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:clipboard-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Tasks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-all duration-200" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Team</span>
</a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Workspace</div>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-all duration-200" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:graph-new-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 group transition-all duration-200" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>

<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Raby Brighton</p>
<p className="text-xs text-slate-500 truncate">UX Engineer</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 glass-panel border-b-0 border-slate-200 z-10 flex items-center justify-between px-8 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="text-lg font-medium text-slate-800 tracking-tight">Overview</h2>
</div>
<div className="flex items-center gap-4">

<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-2 w-64 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Search..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-0.5">
<span className="text-[10px] text-slate-400 font-medium bg-white border border-slate-200 rounded px-1.5 py-0.5">⌘</span>
<span className="text-[10px] text-slate-400 font-medium bg-white border border-slate-200 rounded px-1.5 py-0.5">K</span>
</div>
</div>
<div className="h-6 w-px bg-slate-200 mx-2"></div>
<button className="relative p-2 text-slate-500 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 animate-fade-in-up">
<div>
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Good morning, Raby</h1>
<p className="text-slate-500">Here's what's happening with your projects today.</p>
</div>
<div className="flex gap-3">
<button className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
                        </button>
<button className="bg-blue-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 active:transform active:scale-95 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> New Project
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 hover-card animate-fade-in-up animate-delay-100">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
<iconify-icon icon="solar:folder-with-files-bold" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear"></iconify-icon> 12%
                            </span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Active Projects</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">24</h3>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover-card animate-fade-in-up animate-delay-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-violet-50 text-violet-600 rounded-lg">
<iconify-icon icon="solar:checklist-minimalistic-bold" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
<iconify-icon className="mr-1" icon="solar:arrow-right-up-linear"></iconify-icon> 8%
                            </span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Tasks Completed</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">186</h3>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover-card animate-fade-in-up animate-delay-300">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg">
<iconify-icon icon="solar:clock-circle-bold" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
<iconify-icon className="mr-1" icon="solar:arrow-right-down-linear"></iconify-icon> 2%
                            </span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Hours Tracked</p>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">1,240</h3>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 hover-card animate-fade-in-up animate-delay-400">
<div className="flex justify-between items-start mb-4">
<div className="p-2.5 bg-rose-50 text-rose-600 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-bold" width="24"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                                +2 new
                            </span>
</div>
<p className="text-sm font-medium text-slate-500 mb-1">Team Members</p>
<div className="flex items-center gap-2">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">12</h3>
<div className="flex -space-x-2 overflow-hidden ml-2">
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=3"/>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6 animate-fade-in-up animate-delay-200">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Sprint Board</h3>
<div className="flex bg-slate-100 p-1 rounded-lg">
<button className="px-3 py-1 bg-white text-slate-900 text-xs font-medium rounded shadow-sm">Board</button>
<button className="px-3 py-1 text-slate-500 hover:text-slate-700 text-xs font-medium rounded transition-colors">List</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between pb-2 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<span className="text-sm font-medium text-slate-700">To Do</span>
<span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">3</span>
</div>
<iconify-icon className="text-slate-400 cursor-pointer hover:text-blue-600 transition-colors" icon="solar:add-linear"></iconify-icon>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-move group">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold tracking-wide text-blue-600 bg-blue-50 px-2 py-0.5 rounded uppercase">Design</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 transition-colors" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-3 leading-snug">Update Design System typography scale</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:paperclip-linear" width="14"></iconify-icon>
<span className="text-xs">2</span>
<iconify-icon className="ml-1" icon="solar:chat-line-linear" width="14"></iconify-icon>
<span className="text-xs">4</span>
</div>
<img alt="Avatar" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=4"/>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-move group">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold tracking-wide text-violet-600 bg-violet-50 px-2 py-0.5 rounded uppercase">Research</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 transition-colors" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-3 leading-snug">Competitor analysis for Q3 features</h4>
<div className="flex items-center justify-between pt-3 border-t border-slate-50">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
<span className="text-xs">Tomorrow</span>
</div>
<img alt="Avatar" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=5"/>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between pb-2 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
<span className="text-sm font-medium text-slate-700">In Progress</span>
<span className="text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">2</span>
</div>
<iconify-icon className="text-slate-400 cursor-pointer hover:text-blue-600 transition-colors" icon="solar:add-linear"></iconify-icon>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-move group">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-semibold tracking-wide text-amber-600 bg-amber-50 px-2 py-0.5 rounded uppercase">Dev</span>
<iconify-icon className="text-slate-300 group-hover:text-slate-500 transition-colors" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900 mb-3 leading-snug">API Integration for Stripe payments</h4>
<div className="w-full bg-slate-100 h-1.5 rounded-full mb-3 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=6"/>
<img alt="Avatar" className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/150?u=1"/>
</div>
<span className="text-xs text-slate-500 font-medium">65%</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 animate-fade-in-up animate-delay-300">
<div className="bg-white rounded-xl border border-slate-200 p-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-4">Project Activity</h3>
<div className="space-y-6 relative">

<div className="absolute left-2.5 top-2 bottom-2 w-px bg-slate-100"></div>

<div className="relative pl-8">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
<p className="text-sm text-slate-800"><span className="font-medium">Sarah</span> completed <span className="text-slate-500">Homepage Redesign</span></p>
<p className="text-xs text-slate-400 mt-1">2 hours ago</p>
</div>

<div className="relative pl-8">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-white bg-violet-100 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-violet-500"></div>
</div>
<p className="text-sm text-slate-800"><span className="font-medium">Mike</span> attached file to <span className="text-slate-500">Q4 Report</span></p>
<div className="mt-2 flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-100 max-w-max">
<iconify-icon className="text-blue-500" icon="solar:file-text-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-600">report_final.pdf</span>
</div>
<p className="text-xs text-slate-400 mt-1">4 hours ago</p>
</div>

<div className="relative pl-8">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
</div>
<p className="text-sm text-slate-800"><span className="font-medium">Alex</span> created new project</p>
<p className="text-xs text-slate-400 mt-1">Yesterday</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-4">Quick Settings</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">Email Notifications</span>
<span className="text-xs text-slate-400">Receive daily digest</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-700">Dark Mode</span>
<span className="text-xs text-slate-400">Switch interface theme</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden animate-fade-in-up animate-delay-400">
<div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Recent Projects</h3>
<button className="text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100">
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Project Name</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Team</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Completion</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-50">
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:smartphone-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Mobile App Redesign</p>
<p className="text-xs text-slate-400">iOS &amp; Android</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Active
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=8"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=9"/>
<div className="w-7 h-7 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-medium text-slate-500">+3</div>
</div>
</td>
<td className="px-6 py-4">
<div className="w-32">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-slate-600">75%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-blue-600 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:figma-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Marketing Assets</p>
<p className="text-xs text-slate-400">Social Media Q3</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Review
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=10"/>
</div>
</td>
<td className="px-6 py-4">
<div className="w-32">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-slate-600">90%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:server-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Database Migration</p>
<p className="text-xs text-slate-400">Backend Ops</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Paused
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=12"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?u=13"/>
</div>
</td>
<td className="px-6 py-4">
<div className="w-32">
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-slate-600">30%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5">
<div className="bg-slate-400 h-1.5 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-600 p-1 rounded transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<footer className="text-center text-xs text-slate-400 py-6">
                    © 2024 Orbit SaaS. All rights reserved.
                </footer>
</div>
</div>
</main>

    </>
  );
}
