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
      

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/60 h-12 flex items-center justify-between px-4 sm:px-6">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-black text-white rounded-[4px] flex items-center justify-center">
<i className="w-3.5 h-3.5" data-lucide="command"></i>
</div>
<span className="text-sm font-semibold tracking-tight">LinearHire</span>
<span className="text-gray-300 text-sm font-light">/</span>
<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md hover:bg-gray-100 transition-colors cursor-pointer">
<span className="text-sm font-medium text-gray-600">Engineering</span>
<i className="w-3.5 h-3.5 text-gray-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-gray-500">
<a className="text-black" href="#">Overview</a>
<a className="hover:text-black transition-colors" href="#">Candidates</a>
<a className="hover:text-black transition-colors" href="#">Settings</a>
</div>
<div className="h-4 w-px bg-gray-200 hidden md:block"></div>
<div className="flex items-center gap-2">
<button className="h-7 w-7 flex items-center justify-center rounded hover:bg-gray-100 text-gray-500 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<div className="h-6 w-6 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 ring-1 ring-white shadow-sm"></div>
</div>
</div>
</nav>

<main className="flex-1 max-w-[1400px] w-full mx-auto p-4 sm:p-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Active Roles</h1>
<p className="text-[13px] text-gray-500 mt-1">Manage open positions and track candidate pipelines.</p>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-[6px] text-[13px] font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all subtle-shadow">
<i className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600" data-lucide="sliders-horizontal"></i>
<span>Filter</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-1.5 bg-black text-white rounded-[6px] text-[13px] font-medium hover:bg-gray-800 transition-all subtle-shadow">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
<span>New Position</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="p-4 bg-white rounded-lg border border-gray-200/60 subtle-shadow flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div className="text-[13px] font-medium text-gray-500">Total Candidates</div>
<i className="w-4 h-4 text-gray-400" data-lucide="users"></i>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">1,248</div>
<div className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> 12% vs last month
                    </div>
</div>
</div>

<div className="p-4 bg-white rounded-lg border border-gray-200/60 subtle-shadow flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div className="text-[13px] font-medium text-gray-500">Active Jobs</div>
<i className="w-4 h-4 text-gray-400" data-lucide="briefcase"></i>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">14</div>
<div className="text-[11px] text-gray-400 font-medium mt-1">2 closing this week</div>
</div>
</div>

<div className="p-4 bg-white rounded-lg border border-gray-200/60 subtle-shadow flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div className="text-[13px] font-medium text-gray-500">Interviews</div>
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">32</div>
<div className="text-[11px] text-gray-400 font-medium mt-1">Scheduled for today</div>
</div>
</div>

<div className="p-4 bg-white rounded-lg border border-gray-200/60 subtle-shadow flex flex-col justify-between h-28">
<div className="flex justify-between items-start">
<div className="text-[13px] font-medium text-gray-500">Time to Hire</div>
<i className="w-4 h-4 text-gray-400" data-lucide="clock"></i>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">18d</div>
<div className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-down-right"></i> 2d faster avg
                    </div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl subtle-shadow overflow-hidden">

<div className="px-4 py-3 border-b border-gray-100 flex items-center gap-4 bg-white">
<div className="relative flex-1 max-w-sm">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-8 pr-4 py-1.5 bg-gray-50 border-0 rounded-md text-[13px] placeholder-gray-400 text-gray-900 focus:ring-1 focus:ring-gray-200 transition-all" placeholder="Search roles..." type="text"/>
</div>
<div className="flex items-center gap-2 ml-auto">
<span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Sort by:</span>
<button className="text-[13px] font-medium text-gray-700 flex items-center gap-1 hover:text-black">
                        Priority <i className="w-3 h-3 text-gray-400" data-lucide="arrow-down"></i>
</button>
</div>
</div>

<div className="hidden md:grid grid-cols-12 gap-4 px-5 py-3 bg-gray-50/50 border-b border-gray-200 text-[11px] font-medium text-gray-500 uppercase tracking-wide">
<div className="col-span-5">Role</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Applicants</div>
<div className="col-span-2">Team</div>
<div className="col-span-1 text-right"></div>
</div>

<div className="divide-y divide-gray-100">

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-3 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm">
<i className="w-4 h-4" data-lucide="pen-tool"></i>
</div>
<div>
<div className="text-[13px] font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Senior Product Designer</div>
<div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
<span>Design</span>
<span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
<span>Remote</span>
</div>
</div>
</div>
<div className="col-span-2">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-200 bg-white text-[11px] font-medium text-gray-700 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Active
                        </div>
</div>
<div className="col-span-2 flex items-center gap-3">
<div className="text-[13px] font-medium text-gray-900 tabular-nums">142</div>
<div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
<div className="h-full bg-gray-900 w-[60%] rounded-full"></div>
</div>
</div>
<div className="col-span-2 flex items-center -space-x-1.5">
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jude"/>
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Nala"/>
<div className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-50 text-[9px] font-medium text-gray-500 flex items-center justify-center">+2</div>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-3 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm">
<i className="w-4 h-4" data-lucide="code-2"></i>
</div>
<div>
<div className="text-[13px] font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Frontend Engineer</div>
<div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
<span>Engineering</span>
<span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
<span>Hybrid</span>
</div>
</div>
</div>
<div className="col-span-2">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-200 bg-white text-[11px] font-medium text-gray-700 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Urgent
                        </div>
</div>
<div className="col-span-2 flex items-center gap-3">
<div className="text-[13px] font-medium text-gray-900 tabular-nums">38</div>
<div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
<div className="h-full bg-gray-900 w-[20%] rounded-full"></div>
</div>
</div>
<div className="col-span-2 flex items-center -space-x-1.5">
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"/>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-3 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm">
<i className="w-4 h-4" data-lucide="boxes"></i>
</div>
<div>
<div className="text-[13px] font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Technical Product Manager</div>
<div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
<span>Product</span>
<span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
<span>SF</span>
</div>
</div>
</div>
<div className="col-span-2">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-200 bg-white text-[11px] font-medium text-gray-700 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Active
                        </div>
</div>
<div className="col-span-2 flex items-center gap-3">
<div className="text-[13px] font-medium text-gray-900 tabular-nums">215</div>
<div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
<div className="h-full bg-gray-900 w-[85%] rounded-full"></div>
</div>
</div>
<div className="col-span-2 flex items-center -space-x-1.5">
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"/>
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike"/>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-3 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm">
<i className="w-4 h-4" data-lucide="line-chart"></i>
</div>
<div>
<div className="text-[13px] font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Head of Growth</div>
<div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
<span>Marketing</span>
<span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
<span>London</span>
</div>
</div>
</div>
<div className="col-span-2">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-200 bg-white text-[11px] font-medium text-gray-400 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                            Paused
                        </div>
</div>
<div className="col-span-2 flex items-center gap-3">
<div className="text-[13px] font-medium text-gray-500 tabular-nums">89</div>
<div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
<div className="h-full bg-gray-300 w-[30%] rounded-full"></div>
</div>
</div>
<div className="col-span-2 flex items-center -space-x-1.5">
<div className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100 text-[9px] font-medium text-gray-500 flex items-center justify-center">UN</div>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="group grid grid-cols-1 md:grid-cols-12 gap-4 px-5 py-3 items-center hover:bg-gray-50 transition-colors cursor-pointer">
<div className="col-span-5 flex items-center gap-3">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-sm">
<i className="w-4 h-4" data-lucide="database"></i>
</div>
<div>
<div className="text-[13px] font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">Backend Engineer (Go)</div>
<div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-0.5">
<span>Engineering</span>
<span className="w-0.5 h-0.5 rounded-full bg-gray-300"></span>
<span>Remote</span>
</div>
</div>
</div>
<div className="col-span-2">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-200 bg-white text-[11px] font-medium text-gray-700 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Active
                        </div>
</div>
<div className="col-span-2 flex items-center gap-3">
<div className="text-[13px] font-medium text-gray-900 tabular-nums">64</div>
<div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden max-w-[60px]">
<div className="h-full bg-gray-900 w-[45%] rounded-full"></div>
</div>
</div>
<div className="col-span-2 flex items-center -space-x-1.5">
<img alt="" className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Leo"/>
<div className="w-6 h-6 rounded-full ring-2 ring-white bg-gray-50 text-[9px] font-medium text-gray-500 flex items-center justify-center">+1</div>
</div>
<div className="col-span-1 flex justify-end">
<button className="text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>

<div className="bg-gray-50 px-5 py-2.5 border-t border-gray-200 flex items-center justify-between">
<span className="text-[11px] text-gray-500 font-medium">Showing 5 of 14 active jobs</span>
<div className="flex items-center gap-1">
<button className="p-1 text-gray-400 hover:text-gray-900 disabled:opacity-50">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="p-1 text-gray-400 hover:text-gray-900">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</main>


    </>
  );
}
