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
      

<main className="w-full max-w-6xl mx-auto bg-white border border-zinc-200 shadow-sm rounded-xl overflow-hidden">

<header className="p-6 lg:p-8 border-b border-zinc-100 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div className="space-y-1.5 max-w-2xl">
<div className="flex items-center gap-2 mb-1">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-zinc-100 text-zinc-500">
<iconify-icon height="14" icon="lucide:shield-check" width="14"></iconify-icon>
</span>
<h2 className="text-xl font-semibold tracking-tight text-zinc-900">Controls: Design, Operation &amp; Evidence</h2>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                    Have the right controls been selected, and are they actually working? Review your Statement of Applicability (SoA) and evidence collection status.
                </p>
</div>

<div className="flex-shrink-0">
<div className="flex items-center gap-3 bg-zinc-50 border border-zinc-200 rounded-lg p-1 pr-4">
<div className="h-10 w-10 flex items-center justify-center rounded bg-white border border-zinc-100 shadow-sm">
<svg className="transform -rotate-90 w-6 h-6" viewbox="0 0 36 36">
<path className="text-zinc-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-amber-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="68, 100" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</span>
<div className="flex items-center gap-1.5">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
<span className="text-sm font-semibold text-zinc-900">Partial Ready</span>
<span className="text-xs text-zinc-400 ml-1">68%</span>
</div>
</div>
</div>
</div>
</header>

<div className="p-6 lg:p-8 space-y-8 bg-zinc-50/30">

<section className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-24">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="lucide:list"></iconify-icon>
                        Total Controls
                    </span>
<span className="text-2xl font-semibold text-zinc-900 tracking-tight">93</span>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-24">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="lucide:check-circle-2"></iconify-icon>
                        Applicable
                    </span>
<span className="text-2xl font-semibold text-zinc-900 tracking-tight">85</span>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-24">
<span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="lucide:ban"></iconify-icon>
                        Not Applicable
                    </span>
<span className="text-2xl font-semibold text-zinc-900 tracking-tight">8</span>
</div>

<div className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm flex flex-col justify-between h-24 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-emerald-500" height="40" icon="lucide:file-check" width="40"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
                        Justifications
                    </span>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-lg" icon="lucide:check"></iconify-icon>
<span className="text-sm font-semibold text-emerald-700">All Justified</span>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold text-zinc-900">Control Coverage by Category</h3>
<span className="text-xs text-zinc-500">ISO 27001:2022 Annex A</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<button className="group text-left bg-white border border-zinc-200 hover:border-zinc-300 rounded-lg p-4 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:building-2" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700">Organizational</span>
</div>
<span className="text-xs font-medium text-zinc-400">37 Controls</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500">
<span>Evidenced</span>
<span className="text-zinc-900 font-medium">37/37</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
</div>
</button>

<button className="group text-left bg-white border border-zinc-200 hover:border-zinc-300 rounded-lg p-4 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:users" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700">People</span>
</div>
<span className="text-xs font-medium text-zinc-400">8 Controls</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500">
<span>Evidenced</span>
<span className="text-zinc-900 font-medium">6/8</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-3/4 rounded-full"></div>
</div>
</div>
</button>

<button className="group text-left bg-white border border-zinc-200 hover:border-zinc-300 rounded-lg p-4 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-200">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:lock" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-700">Physical</span>
</div>
<span className="text-xs font-medium text-zinc-400">14 Controls</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500">
<span>Evidenced</span>
<span className="text-zinc-900 font-medium">10/14</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-400 w-2/3 rounded-full"></div>
</div>
</div>
</button>

<div className="relative group text-left bg-white border border-zinc-300 ring-1 ring-zinc-300 rounded-lg p-4 shadow-md transition-all">

<div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-zinc-300 transform rotate-45 z-10"></div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:server" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-900">Technological</span>
</div>
<span className="text-xs font-medium text-zinc-500">34 Controls</span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-zinc-500">
<span>Evidenced</span>
<span className="text-zinc-900 font-medium">20/34</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[58%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-fade-in">
<div className="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
<h4 className="text-sm font-semibold text-zinc-900">Technological Controls Details</h4>
<div className="flex gap-2">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-white border border-zinc-200 rounded px-2 py-1 shadow-sm">
                                Filter
                             </button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors bg-white border border-zinc-200 rounded px-2 py-1 shadow-sm">
                                Export
                             </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead>
<tr className="bg-zinc-50/50 border-b border-zinc-100">
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider w-24">ID</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Control Name</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider w-40">Applicability</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider w-40">Implementation</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider w-40">Evidence</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-6 py-3 text-zinc-500 font-mono text-xs">A.8.1</td>
<td className="px-6 py-3 font-medium text-zinc-900">User endpoint devices</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Applicable
                                        </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5 text-xs text-zinc-600">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                            Implemented
                                        </div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
<iconify-icon className="text-sm" icon="lucide:check"></iconify-icon> Present
                                        </span>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-6 py-3 text-zinc-500 font-mono text-xs">A.8.9</td>
<td className="px-6 py-3 font-medium text-zinc-900">Configuration management</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Applicable
                                        </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5 text-xs text-zinc-600">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                            Implemented
                                        </div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-xs text-rose-600 font-medium bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
<iconify-icon className="text-xs" icon="lucide:alert-circle"></iconify-icon> Missing
                                        </span>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-6 py-3 text-zinc-500 font-mono text-xs">A.8.12</td>
<td className="px-6 py-3 font-medium text-zinc-900">Data leakage prevention</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Applicable
                                        </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5 text-xs text-zinc-600">
<div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                                            Partial
                                        </div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-xs text-zinc-400 font-medium">
<iconify-icon className="text-xs" icon="lucide:minus"></iconify-icon> Pending
                                        </span>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group opacity-60">
<td className="px-6 py-3 text-zinc-500 font-mono text-xs">A.8.25</td>
<td className="px-6 py-3 font-medium text-zinc-900">Secure development lifecycle</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-500 border border-zinc-200">
                                            N/A
                                        </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                            —
                                        </div>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5 text-xs text-zinc-400">
                                            —
                                        </div>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-6 py-3 text-zinc-500 font-mono text-xs">A.8.32</td>
<td className="px-6 py-3 font-medium text-zinc-900">Change management</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Applicable
                                        </span>
</td>
<td className="px-6 py-3">
<div className="flex items-center gap-1.5 text-xs text-zinc-600">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                            Implemented
                                        </div>
</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-xs text-amber-600 font-medium">
<iconify-icon className="text-xs" icon="lucide:clock"></iconify-icon> Stale (90d+)
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-zinc-100 bg-zinc-50/30 text-center">
<button className="text-xs text-zinc-500 font-medium hover:text-zinc-900 transition-colors">Load more controls</button>
</div>
</div>
</section>
</div>

<footer className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between rounded-b-xl">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors group" href="#">
<iconify-icon className="group-hover:-translate-x-0.5 transition-transform" icon="lucide:arrow-left"></iconify-icon>
                View related tasks
            </a>
<a className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all hover:shadow-md" href="#">
<iconify-icon icon="lucide:download"></iconify-icon>
                Review &amp; download
            </a>
</footer>
</main>

    </>
  );
}
