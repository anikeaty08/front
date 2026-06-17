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
      

<nav className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">

<a className="text-xl font-semibold tracking-tighter text-slate-900 select-none" href="#">
                    NEXUS
                </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-slate-900" href="#">Overview</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">People</a>
<a className="text-slate-500 hover:text-slate-900 transition-colors" href="#">Settings</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-100 to-indigo-200 border border-indigo-100 flex items-center justify-center text-indigo-600 font-medium text-xs">
                    JD
                </div>
</div>
</div>
</nav>

<main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-2">
<span>Organization</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-indigo-500">Team Members</span>
</div>

<h1 className="text-3xl font-medium tracking-tight text-slate-900">
                    Team Members
                </h1>
<p className="text-base text-slate-500 mt-2 max-w-xl">
                    Manage access, monitor performance metrics, and configure roles for your organization's workspace.
                </p>
</div>
<div className="flex items-center gap-3">
<button className="group flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-md text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:filter-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Filter
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-sm font-medium transition-all shadow-sm shadow-indigo-200">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Add Member
                </button>
</div>
</div>

<div className="animate-target w-full bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">

<div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
<div className="relative w-full max-w-sm">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" placeholder="Search by name or email..." type="text"/>
</div>
<div className="flex items-center gap-4">
<span className="text-sm text-slate-500 font-medium">Showing 5 of 42</span>
<div className="flex gap-1">
<button className="p-1 text-slate-400 hover:text-slate-600 disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-1 text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-200">
<th className="py-3 px-5 w-12">
<label className="custom-checkbox cursor-pointer relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all hover:border-indigo-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Access Level</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Activity</th>
<th className="py-3 px-5 text-xs font-semibold text-slate-500 uppercase tracking-wider w-12"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="py-4 px-5">
<label className="custom-checkbox cursor-pointer relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-indigo-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden shrink-0">
<img alt="Avatar" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Eleanor Pena</span>
<span className="text-xs text-slate-500">eleanor@nexus.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-1.5 text-sm text-slate-700">
<iconify-icon className="text-indigo-500" icon="solar:shield-user-linear" width="16"></iconify-icon>
                                    Administrator
                                </div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
</td>
<td className="py-4 px-5 text-right">
<div className="w-full max-w-[100px] ml-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[92%] rounded-full"></div>
</div>
<span className="text-xs text-slate-400 mt-1 block">92% Usage</span>
</td>
<td className="py-4 px-5 text-right">
<span className="text-sm text-slate-600 font-medium tabular-nums">2m ago</span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-slate-900 p-1 rounded-md transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="py-4 px-5">
<label className="custom-checkbox cursor-pointer relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-indigo-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden shrink-0">
<img alt="Avatar" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Ralph Edwards</span>
<span className="text-xs text-slate-500">ralph@nexus.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-1.5 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:code-linear" width="16"></iconify-icon>
                                    Developer
                                </div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
</td>
<td className="py-4 px-5 text-right">
<div className="w-full max-w-[100px] ml-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[65%] rounded-full"></div>
</div>
<span className="text-xs text-slate-400 mt-1 block">65% Usage</span>
</td>
<td className="py-4 px-5 text-right">
<span className="text-sm text-slate-600 font-medium tabular-nums">4h ago</span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-slate-900 p-1 rounded-md transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="py-4 px-5">
<label className="custom-checkbox cursor-pointer relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-indigo-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 border border-pink-200 flex items-center justify-center text-rose-600 font-semibold text-xs shrink-0">
                                        CM
                                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Courtney Miller</span>
<span className="text-xs text-slate-500">courtney@nexus.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-1.5 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:palette-linear" width="16"></iconify-icon>
                                    Designer
                                </div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                                    Offline
                                </span>
</td>
<td className="py-4 px-5 text-right">
<div className="w-full max-w-[100px] ml-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[40%] rounded-full"></div>
</div>
<span className="text-xs text-slate-400 mt-1 block">40% Usage</span>
</td>
<td className="py-4 px-5 text-right">
<span className="text-sm text-slate-600 font-medium tabular-nums">1d ago</span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-slate-900 p-1 rounded-md transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="py-4 px-5">
<label className="custom-checkbox cursor-pointer relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-indigo-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-slate-200 overflow-hidden shrink-0">
<img alt="Avatar" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024e"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Arlene McCoy</span>
<span className="text-xs text-slate-500">arlene@nexus.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-1.5 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:chart-square-linear" width="16"></iconify-icon>
                                    Analyst
                                </div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                    Pending
                                </span>
</td>
<td className="py-4 px-5 text-right">
<div className="w-full max-w-[100px] ml-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[10%] rounded-full"></div>
</div>
<span className="text-xs text-slate-400 mt-1 block">10% Usage</span>
</td>
<td className="py-4 px-5 text-right">
<span className="text-sm text-slate-600 font-medium tabular-nums">2d ago</span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-slate-900 p-1 rounded-md transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>

<tr className="group hover:bg-slate-50/80 transition-colors">
<td className="py-4 px-5">
<label className="custom-checkbox cursor-pointer relative flex items-center">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-indigo-400">
<svg className="hidden w-3 h-3 text-white pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</label>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 border border-indigo-200 flex items-center justify-center text-indigo-600 font-semibold text-xs shrink-0">
                                        JW
                                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Jerome Williamson</span>
<span className="text-xs text-slate-500">jerome@nexus.com</span>
</div>
</div>
</td>
<td className="py-4 px-5">
<div className="flex items-center gap-1.5 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:box-linear" width="16"></iconify-icon>
                                    Product
                                </div>
</td>
<td className="py-4 px-5">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                                    Active
                                </span>
</td>
<td className="py-4 px-5 text-right">
<div className="w-full max-w-[100px] ml-auto h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[78%] rounded-full"></div>
</div>
<span className="text-xs text-slate-400 mt-1 block">78% Usage</span>
</td>
<td className="py-4 px-5 text-right">
<span className="text-sm text-slate-600 font-medium tabular-nums">5d ago</span>
</td>
<td className="py-4 px-5 text-right">
<button className="text-slate-400 hover:text-slate-900 p-1 rounded-md transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-4 border-t border-slate-100 bg-slate-50/30 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 transition-all duration-300 ease-in-out" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer" htmlFor="toggle"></label>
</input></div>
<span className="text-xs text-slate-500 font-medium">Compact View</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white border border-slate-200 rounded-md hover:border-slate-300 hover:text-slate-700 transition-colors shadow-sm">
                        Previous
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-500 border border-indigo-500 rounded-md hover:bg-indigo-600 transition-colors shadow-sm">
                        Next
                    </button>
</div>
</div>
</div>
</main>

    </>
  );
}
