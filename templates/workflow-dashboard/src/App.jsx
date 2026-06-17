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



        lucide.createIcons();
    
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
      

<aside className="w-72 flex-shrink-0 flex flex-col justify-between py-8 px-6 h-full text-white/80">
<div>

<div className="flex items-center gap-2 mb-10 px-2">
<div className="w-8 h-8 bg-gradient-to-br from-lime-300 to-emerald-500 rounded-lg flex items-center justify-center text-black font-semibold">
                    W
                </div>
<span className="text-xl font-medium tracking-tight text-white">WorkFlow</span>
</div>

<div className="relative mb-8">
<search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"></search>
<input className="w-full bg-[#1A1A1E] border border-white/5 rounded-2xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-white/20 text-gray-300 placeholder-gray-600 transition-colors" placeholder="Search tasks..." type="text"/>
</div>

<div className="space-y-1">
<p className="text-xs font-medium text-gray-500 mb-3 px-3 uppercase tracking-wider">Main Menu</p>
<a className="flex items-center gap-3 bg-[#B6F09C] text-black px-4 py-3 rounded-2xl transition-all" href="#">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layout-grid"></i>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-2xl transition-all group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:text-[#B6F09C] transition-colors" data-lucide="kanban-square"></i>
<span className="font-medium text-sm">Projects</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-2xl transition-all group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:text-[#B6F09C] transition-colors" data-lucide="check-square"></i>
<span className="font-medium text-sm">My Tasks</span>
<span className="ml-auto bg-white/10 text-xs px-2 py-0.5 rounded-full text-white">4</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-2xl transition-all group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:text-[#B6F09C] transition-colors" data-lucide="inbox"></i>
<span className="font-medium text-sm">Inbox</span>
</a>
</div>
<div className="space-y-1 mt-8">
<p className="text-xs font-medium text-gray-500 mb-3 px-3 uppercase tracking-wider">Workspace</p>
<a className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-2xl transition-all group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:text-[#B6F09C] transition-colors" data-lucide="users"></i>
<span className="font-medium text-sm">Team Members</span>
</a>
<a className="flex items-center gap-3 hover:bg-white/5 hover:text-white px-4 py-3 rounded-2xl transition-all group" href="#">
<i className="w-5 h-5 stroke-[1.5] group-hover:text-[#B6F09C] transition-colors" data-lucide="settings"></i>
<span className="font-medium text-sm">Settings</span>
</a>
</div>
</div>

<div className="flex items-center gap-3 bg-[#1A1A1E] p-3 rounded-2xl border border-white/5 cursor-pointer hover:border-white/10 transition-colors">
<img alt="User" className="w-10 h-10 rounded-xl object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Alex Morgan</p>
<p className="text-xs text-gray-500 truncate">Product Designer</p>
</div>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-up"></i>
</div>
</aside>

<main className="flex-1 bg-[#FDFDFD] h-full rounded-l-[40px] overflow-y-auto relative shadow-2xl p-8 lg:p-10 flex flex-col">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<div>
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Overview</h1>
<p className="text-base text-gray-500 mt-1">Welcome back, here's what's happening today.</p>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors relative">
<i className="w-5 h-5 text-gray-600 stroke-[1.5]" data-lucide="bell"></i>
<span className="absolute top-3 right-3.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-full bg-white shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
<i className="w-4 h-4 text-gray-500 stroke-[1.5]" data-lucide="calendar"></i>
<span className="text-sm font-medium text-gray-700">Oct 24, 2023</span>
</div>
</div>
</header>
<div className="flex flex-col xl:flex-row gap-8 h-full">

<div className="flex-1 flex flex-col gap-8">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">Total Tasks</span>
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
<i className="w-4 h-4 text-blue-600 stroke-[1.5]" data-lucide="layers"></i>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">124</h3>
<p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12% this week
                        </p>
</div>

<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">In Review</span>
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
<i className="w-4 h-4 text-orange-600 stroke-[1.5]" data-lucide="eye"></i>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">08</h3>
<p className="text-xs text-gray-400 font-medium mt-2">Needs attention</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">In Progress</span>
<div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center">
<i className="w-4 h-4 text-purple-600 stroke-[1.5]" data-lucide="zap"></i>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">15</h3>
<p className="text-xs text-green-600 font-medium mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> On track
                        </p>
</div>

<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-gray-500">Completed</span>
<div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-600 stroke-[1.5]" data-lucide="check-circle-2"></i>
</div>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">42</h3>
<p className="text-xs text-gray-400 font-medium mt-2">+5 from yesterday</p>
</div>
</div>

<div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
<button className="bg-[#0D0D0F] text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-transform active:scale-95">All Projects</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Design System</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Development</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Marketing</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:border-gray-300 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors">Research</button>
</div>

<div className="flex items-center justify-between mt-2">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Active Sprints</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-indigo-600 stroke-[1.5]" data-lucide="figma"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-900 leading-tight">UI Redesign</h3>
<p className="text-xs text-gray-500 mt-0.5">Mobile App</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">High Priority</span>
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">Design</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                In Progress
                            </span>
<span className="text-xs text-gray-400 font-medium">Due in 2 days</span>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="github"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-900 leading-tight">API Integration</h3>
<p className="text-xs text-gray-500 mt-0.5">Backend</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">Development</span>
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">Sprint 4</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Review
                            </span>
<span className="text-xs text-gray-400 font-medium">Due today</span>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-rose-500 stroke-[1.5]" data-lucide="framer"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-900 leading-tight">Landing Page</h3>
<p className="text-xs text-gray-500 mt-0.5">Marketing</p>
</div>
</div>
<button className="text-gray-400 hover:text-gray-900">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">Copywriting</span>
<span className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-xs font-medium text-gray-600">SEO</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                Planning
                            </span>
<span className="text-xs text-gray-400 font-medium">Due in 5 days</span>
</div>
</div>
</div>

<div className="flex items-center justify-between mt-4">
<h2 className="text-lg font-medium tracking-tight text-gray-900">Priority Tasks</h2>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">See All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-6 h-6 text-gray-700 stroke-[1.5]" data-lucide="file-code-2"></i>
</div>
<div>
<span className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-bold text-gray-600 tracking-wide uppercase mb-1 inline-block">Urgent</span>
<h4 className="text-base font-medium text-gray-900">Fix Auth Bug</h4>
<p className="text-xs text-gray-500 mt-0.5">Reported 2 hours ago</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-900">High</p>
<button className="mt-2 text-xs font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors">View</button>
</div>
</div>
<div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
<i className="w-6 h-6 text-gray-700 stroke-[1.5]" data-lucide="pen-tool"></i>
</div>
<div>
<span className="px-2 py-0.5 rounded-md bg-blue-50 text-[10px] font-bold text-blue-600 tracking-wide uppercase mb-1 inline-block">Design</span>
<h4 className="text-base font-medium text-gray-900">Icon Set Update</h4>
<p className="text-xs text-gray-500 mt-0.5">Due Tomorrow</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-900">Medium</p>
<button className="mt-2 text-xs font-medium bg-white border border-gray-200 text-gray-900 px-4 py-2 rounded-full hover:bg-gray-50 transition-colors">View</button>
</div>
</div>
</div>
</div>

<div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">

<div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<h3 className="text-base font-medium text-gray-900">Sprint Progress</h3>
<button className="text-gray-400 hover:text-gray-900"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-medium tracking-tighter text-gray-900">78%</span>
<span className="px-2 py-0.5 rounded-md bg-orange-50 text-[10px] font-medium text-orange-600 border border-orange-100">On Track</span>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Great velocity this week. You've completed 14 out of 18 assigned tasks.
                    </p>
<div className="bg-gray-50 rounded-2xl p-4 mb-6">
<h4 className="text-sm font-medium text-gray-900 mb-2">Suggestion</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                            Consider blocking out 2 hours tomorrow for the deep-work session on the API refactor.
                        </p>
</div>
<button className="w-full py-3.5 bg-[#B6F09C] text-black font-medium text-sm rounded-xl hover:bg-[#a4e685] transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="pen-line"></i>
                        Update Status
                    </button>
</div>

<div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-base font-medium text-gray-900">Weekly Velocity</h3>
<p className="text-xs text-gray-400 mt-1">Story points completed</p>
</div>
<button className="text-gray-400 hover:text-gray-900"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-medium tracking-tighter text-gray-900">29</span>
<span className="text-sm text-gray-500">points</span>
</div>

<div className="relative h-32 w-full mt-auto">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px border-t border-dashed border-gray-100"></div>
<div className="w-full h-px border-t border-dashed border-gray-100"></div>
<div className="w-full h-px border-t border-dashed border-gray-100"></div>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#B6F09C', stopOpacity: '0.5'}}></stop>
<stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,50 L0,40 C10,40 15,35 25,35 C35,35 40,20 50,20 C60,20 65,5 75,5 C85,5 90,25 100,15 L100,50 Z" fill="url(#gradient)"></path>
<path d="M0,40 C10,40 15,35 25,35 C35,35 40,20 50,20 C60,20 65,5 75,5 C85,5 90,25 100,15" fill="none" stroke="#84CC16" strokeLinecap="round" strokeWidth="0.8"></path>

<circle cx="75" cy="5" fill="white" r="2" stroke="#84CC16" strokeWidth="0.8"></circle>
</svg>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
