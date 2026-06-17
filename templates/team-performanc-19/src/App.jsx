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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-8">

<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-gray-900">TPV.</span>
</div>

<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-gray-900" href="#">Dashboard</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">Projects</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">Reports</a>
</div>
</div>

<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-8 w-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs font-medium text-gray-700">
                        TL
                    </div>
</div>
</div>
</div>
</nav>

<main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
<span>Engineering</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span>Sprint 42</span>
</div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Team Performance</h1>
<p className="text-sm text-gray-500 mt-1">Metrics overview for Backend Squad Alpha</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-sm">
<iconify-icon className="text-gray-400 mr-2" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-xs font-medium text-gray-700">Oct 14 - Oct 28</span>
</div>
<button className="flex items-center px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg shadow-sm transition-colors text-xs font-medium">
<iconify-icon className="mr-2" icon="solar:export-linear" width="16"></iconify-icon>
                    Export Report
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600">
<iconify-icon icon="solar:bug-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        -2.1%
                        <iconify-icon className="ml-1" icon="solar:arrow-right-down-linear" width="12"></iconify-icon>
</span>
</div>
<h3 className="text-sm font-medium text-gray-500">Bug Rate</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">12.5%</span>
<span className="text-xs text-gray-400">of Total Work Packages</span>
</div>
</div>

<div className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-50 rounded-lg text-orange-600">
<iconify-icon icon="solar:stopwatch-play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                        +0.5 SP
                        <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<h3 className="text-sm font-medium text-gray-500">Avg Bug Effort</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">3.2</span>
<span className="text-xs text-gray-400">Story Points / Bug</span>
</div>
</div>

<div className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full">
                        0.0
                        <iconify-icon className="ml-1" icon="solar:minus-circle-linear" width="12"></iconify-icon>
</span>
</div>
<h3 className="text-sm font-medium text-gray-500">Avg Support Effort</h3>
<div className="flex items-baseline gap-2 mt-1">
<span className="text-2xl font-semibold text-gray-900 tracking-tight">1.8</span>
<span className="text-xs text-gray-400">Story Points / Ticket</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">Capacity &amp; Allocation</h2>
<p className="text-xs text-gray-500 mt-1">Workload distribution for current active sprint.</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors border border-transparent hover:border-gray-200">
<iconify-icon icon="solar:filter-linear" width="20"></iconify-icon>
</button>
<button className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors border border-transparent hover:border-gray-200">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100">
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-400 w-1/4">Team Member</th>
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-400 w-1/3">Capacity Usage</th>
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-400">Pts / Cap</th>
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-400">Active Bugs</th>
<th className="py-3 px-6 text-xs font-medium uppercase tracking-wider text-gray-400 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700">
                                        JD
                                    </div>
<div>
<p className="text-sm font-medium text-gray-900">John Doe</p>
<p className="text-xs text-gray-400">Team Lead</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="w-full max-w-xs">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-emerald-600">92%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="text-sm text-gray-700 font-medium">23 <span className="text-gray-400 font-normal">/ 25</span></span>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                                    2
                                </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Optimal
                                </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-xs font-semibold text-amber-700">
                                        AL
                                    </div>
<div>
<p className="text-sm font-medium text-gray-900">Anita Lee</p>
<p className="text-xs text-gray-400">Senior Engineer</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="w-full max-w-xs">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-amber-600">65%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="text-sm text-gray-700 font-medium">13 <span className="text-gray-400 font-normal">/ 20</span></span>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                                    0
                                </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Under
                                </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-cyan-100 flex items-center justify-center text-xs font-semibold text-cyan-700">
                                        MK
                                    </div>
<div>
<p className="text-sm font-medium text-gray-900">Marcus K.</p>
<p className="text-xs text-gray-400">Frontend Dev</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="w-full max-w-xs">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-rose-600">110%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="text-sm text-gray-700 font-medium">22 <span className="text-gray-400 font-normal">/ 20</span></span>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-rose-50 text-rose-600 border border-rose-100">
                                    5
                                </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-100">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                    Over
                                </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-semibold text-purple-700">
                                        SR
                                    </div>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Ross</p>
<p className="text-xs text-gray-400">QA Engineer</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="w-full max-w-xs">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-emerald-600">85%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="text-sm text-gray-700 font-medium">17 <span className="text-gray-400 font-normal">/ 20</span></span>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                                    1
                                </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Optimal
                                </span>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-xs font-semibold text-teal-700">
                                        DT
                                    </div>
<div>
<p className="text-sm font-medium text-gray-900">David Tran</p>
<p className="text-xs text-gray-400">Junior Dev</p>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="w-full max-w-xs">
<div className="flex justify-between text-xs mb-1.5">
<span className="font-medium text-amber-600">40%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</td>
<td className="py-4 px-6">
<span className="text-sm text-gray-700 font-medium">6 <span className="text-gray-400 font-normal">/ 15</span></span>
</td>
<td className="py-4 px-6">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600">
                                    1
                                </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                    Under
                                </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
<p className="text-xs text-gray-400">Showing 5 members</p>
<div className="flex gap-2">
<button className="px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-600 disabled:opacity-50" disabled="">Prev</button>
<button className="px-2 py-1 text-xs font-medium text-gray-600 hover:text-gray-900">Next</button>
</div>
</div>
</div>
</main>

    </>
  );
}
