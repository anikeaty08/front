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
      

<aside className="w-64 bg-white border-r border-neutral-200 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div className="p-6">

<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 bg-neutral-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-height="14" data-icon="lucide:command" data-strokeWidth="1.5" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight">OPERA.AI</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-100 rounded-md" href="#">
<span className="iconify" data-height="18" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18"></span>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:calendar-clock" data-strokeWidth="1.5" data-width="18"></span>
                    Schedule
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
                    Team
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<span className="iconify" data-height="18" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="18"></span>
                    Tasks
                    <span className="ml-auto text-xs font-medium text-neutral-400">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<span className="text-indigo-500" data-height="18" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="18"></span>
                    AI Insights
                </a>
</nav>
</div>

<div className="p-4 border-t border-neutral-100">
<div className="flex items-center gap-3 px-2 py-2 cursor-pointer hover:bg-neutral-50 rounded-md">
<img alt="User" className="w-8 h-8 rounded-full border border-neutral-200" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">Alex Morgan</span>
<span className="text-xs text-neutral-500">Ops Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">

<header className="h-16 border-b border-neutral-200 bg-white flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-neutral-500">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
<h1 className="text-base font-semibold tracking-tight text-neutral-900">Dashboard</h1>
<span className="text-neutral-300 text-sm">/</span>
<span className="text-sm text-neutral-500">October 24, 2023</span>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<span className="iconify absolute left-2.5 top-2.5 text-neutral-400" data-height="16" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
<input className="pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:bg-white transition-all w-64 placeholder:text-neutral-400 text-neutral-700" placeholder="Search tasks or people..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
<span className="iconify" data-height="16" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8">

<div className="mb-8 p-1 rounded-lg bg-gradient-to-r from-indigo-50 via-white to-white border border-indigo-100">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 py-3 bg-white/60 rounded-md">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 text-indigo-600">
<span className="iconify" data-height="20" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900">Optimization Opportunity</h3>
<p className="text-sm text-neutral-500 mt-0.5">Workload imbalance detected in Engineering. AI suggests redistributing 3 tasks from Sarah to James.</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100 rounded-md transition-colors border border-transparent">Dismiss</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-md transition-colors shadow-sm flex items-center gap-2">
<span className="iconify" data-height="12" data-icon="lucide:sparkles" data-width="12"></span>
                            Auto-Optimize
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

<div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Efficiency</span>
<span className="iconify text-emerald-500" data-height="16" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">94%</span>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">+2.4%</span>
</div>
<p className="text-xs text-neutral-400 mt-1">vs last week</p>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Pending Tasks</span>
<span className="iconify text-neutral-400" data-height="16" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">23</span>
</div>
<p className="text-xs text-neutral-400 mt-1">4 high priority</p>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Team Capacity</span>
<span className="iconify text-amber-500" data-height="16" data-icon="lucide:alert-circle" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">88%</span>
</div>
<p className="text-xs text-neutral-400 mt-1">Near max load</p>
</div>

<div className="bg-white border border-neutral-200 rounded-lg p-5 shadow-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-transparent opacity-50"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">AI Actions</span>
<span className="iconify text-indigo-500" data-height="16" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="16"></span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">142</span>
</div>
<p className="text-xs text-neutral-400 mt-1">Auto-scheduled today</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">

<div className="lg:col-span-2 bg-white border border-neutral-200 rounded-lg shadow-sm flex flex-col h-full overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between bg-white shrink-0">
<h2 className="text-sm font-semibold text-neutral-900">Resource Allocation</h2>
<div className="flex items-center gap-2">
<div className="flex items-center border border-neutral-200 rounded-md p-0.5 bg-neutral-50">
<button className="px-2 py-1 text-xs font-medium text-neutral-900 bg-white rounded shadow-sm">Day</button>
<button className="px-2 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-900">Week</button>
</div>
<button className="text-neutral-400 hover:text-neutral-900">
<span className="iconify" data-height="16" data-icon="lucide:filter" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-0">

<div className="grid grid-cols-12 gap-4 px-5 py-3 bg-neutral-50/50 border-b border-neutral-100 text-xs font-medium text-neutral-500 uppercase tracking-wider sticky top-0 z-10 backdrop-blur-sm">
<div className="col-span-4">Team Member</div>
<div className="col-span-6">Current Load &amp; Tasks</div>
<div className="col-span-2 text-right">Status</div>
</div>

<div className="divide-y divide-neutral-100">

<div className="grid grid-cols-12 gap-4 px-5 py-4 items-center hover:bg-neutral-50/50 transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?u=1"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Sarah Chen</div>
<div className="text-xs text-neutral-500">Snr. Designer</div>
</div>
</div>
<div className="col-span-6">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-neutral-500">3 Tasks</span>
<span className="text-xs font-medium text-red-500">92% Load</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-red-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>

<div className="mt-2 flex gap-2">
<div className="px-2 py-1 rounded border border-neutral-200 bg-white text-xs text-neutral-600 truncate max-w-[120px]">Q4 Marketing Assets</div>
<div className="px-2 py-1 rounded border border-neutral-200 bg-white text-xs text-neutral-600 truncate max-w-[120px] opacity-60">Mobile UI Kit</div>
</div>
</div>
<div className="col-span-2 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        Online
                                    </span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-5 py-4 items-center hover:bg-neutral-50/50 transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?u=2"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">James Wilson</div>
<div className="text-xs text-neutral-500">Frontend Dev</div>
</div>
</div>
<div className="col-span-6">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-neutral-500">1 Task</span>
<span className="text-xs font-medium text-emerald-600">45% Load</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<div className="mt-2 flex gap-2">
<div className="px-2 py-1 rounded border border-neutral-200 bg-white text-xs text-neutral-600 truncate max-w-[120px]">Dashboard API Int</div>

<div className="px-2 py-1 rounded border border-dashed border-indigo-300 bg-indigo-50/50 text-xs text-indigo-600 flex items-center gap-1 cursor-pointer hover:bg-indigo-50 transition-colors">
<span className="iconify" data-height="10" data-icon="lucide:plus" data-width="10"></span>
                                            Assign: Review
                                        </div>
</div>
</div>
<div className="col-span-2 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        Online
                                    </span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-5 py-4 items-center hover:bg-neutral-50/50 transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?u=8"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-amber-500 border-2 border-white rounded-full"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">Product Manager</div>
</div>
</div>
<div className="col-span-6">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-neutral-500">In Meeting</span>
<span className="text-xs font-medium text-amber-600">Busy</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-neutral-300 h-1.5 rounded-full w-full stripe-pattern"></div>
</div>
</div>
<div className="col-span-2 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                        Busy
                                    </span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 px-5 py-4 items-center hover:bg-neutral-50/50 transition-colors group">
<div className="col-span-4 flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full bg-neutral-200 object-cover" src="https://i.pravatar.cc/150?u=4"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Marcus Johnson</div>
<div className="text-xs text-neutral-500">Backend Lead</div>
</div>
</div>
<div className="col-span-6">
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs text-neutral-500">2 Tasks</span>
<span className="text-xs font-medium text-neutral-900">60% Load</span>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-neutral-800 h-1.5 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
<div className="col-span-2 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        Online
                                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 flex flex-col gap-6 h-full">

<div className="bg-white border border-neutral-200 rounded-lg shadow-sm flex-1 flex flex-col overflow-hidden">
<div className="px-5 py-4 border-b border-neutral-200 flex items-center justify-between shrink-0">
<h2 className="text-sm font-semibold text-neutral-900">Unassigned</h2>
<span className="text-xs font-medium bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full">4</span>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-neutral-50/30">

<div className="bg-white p-3 rounded-md border border-neutral-200 shadow-sm cursor-move hover:border-neutral-300 transition-colors group relative">
<div className="flex justify-between items-start mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-orange-50 text-orange-700 border border-orange-100 uppercase tracking-wide">High Priority</span>
<button className="text-neutral-400 hover:text-neutral-900"><span className="iconify" data-height="14" data-icon="lucide:more-horizontal" data-width="14"></span></button>
</div>
<h4 className="text-sm font-medium text-neutral-900 mb-1">Server Migration Plan</h4>
<p className="text-xs text-neutral-500 mb-3 line-clamp-2">Outline the steps for moving the database to the new cluster without downtime.</p>
<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
<div className="flex items-center gap-1 text-neutral-400">
<span className="iconify" data-height="12" data-icon="lucide:clock" data-width="12"></span>
<span className="text-xs">4h est.</span>
</div>

<div className="flex items-center gap-1.5">
<span className="text-[10px] text-indigo-600 font-medium">Best: Marcus</span>
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-md border border-neutral-200 shadow-sm cursor-move hover:border-neutral-300 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200 uppercase tracking-wide">Medium</span>
</div>
<h4 className="text-sm font-medium text-neutral-900 mb-1">Update Documentation</h4>
<p className="text-xs text-neutral-500 mb-3">Reflect recent API changes in the developer portal.</p>
<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
<div className="flex items-center gap-1 text-neutral-400">
<span className="iconify" data-height="12" data-icon="lucide:clock" data-width="12"></span>
<span className="text-xs">2h est.</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-neutral-400">Best: James</span>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-md border border-neutral-200 shadow-sm cursor-move hover:border-neutral-300 transition-colors opacity-75">
<div className="flex justify-between items-start mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200 uppercase tracking-wide">Low</span>
</div>
<h4 className="text-sm font-medium text-neutral-900 mb-1">Weekly Report Gen</h4>
<p className="text-xs text-neutral-500 mb-3">Automated script check.</p>
<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
<div className="flex items-center gap-1 text-neutral-400">
<span className="iconify" data-height="12" data-icon="lucide:clock" data-width="12"></span>
<span className="text-xs">1h est.</span>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-neutral-200 bg-neutral-50 text-center">
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center justify-center gap-1 w-full">
<span className="iconify" data-height="12" data-icon="lucide:wand-2" data-width="12"></span>
                                Auto-assign all tasks
                            </button>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-500">
<div className="flex flex-col">
<span className="text-[10px] uppercase font-medium tracking-wider mb-1">System Status</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-neutral-900">Operational</span>
</div>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase font-medium tracking-wider mb-1">AI Model</span>
<span className="text-sm font-medium text-neutral-900">Opera-V4 (Scheduling)</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase font-medium tracking-wider mb-1">Next Sync</span>
<span className="text-sm font-medium text-neutral-900">14:00 PM</span>
</div>
<div className="flex flex-col items-start md:items-end">
<span className="text-[10px] uppercase font-medium tracking-wider mb-1">Support</span>
<span className="text-sm font-medium text-neutral-900 hover:underline cursor-pointer">Help Center</span>
</div>
</div>
</div>
</main>

    </>
  );
}
