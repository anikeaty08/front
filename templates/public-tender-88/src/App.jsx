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
      

<aside className="w-16 border-r border-zinc-200 bg-zinc-50 flex flex-col items-center justify-between py-6 shrink-0 z-20">
<div className="flex flex-col items-center gap-8">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-semibold text-xs tracking-tighter shadow-sm">M</div>
<nav className="flex flex-col gap-4">
<a className="w-10 h-10 flex items-center justify-center text-zinc-900 bg-white shadow-sm border border-zinc-200 rounded-xl transition-all relative group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-xl transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:folder-with-files-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:bg-white hover:shadow-sm rounded-xl transition-all group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:chart-square-linear" width="20"></iconify-icon>
</a>
</nav>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center text-zinc-500 text-xs font-medium">JD</div>
</aside>

<section className="w-96 flex flex-col border-r border-zinc-200 bg-white z-10 shadow-[4px_0_24px_-12px_rgba(0,0,0,0.05)]">
<header className="flex shrink-0 bg-white h-14 border-zinc-100 border-b pr-5 pl-5 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<h2 className="text-sm font-medium tracking-tight">Strategy Agent</h2>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:restart-linear" width="18"></iconify-icon>
</button>
</header>
<div className="flex-1 overflow-y-auto scroller bg-zinc-50/30 pt-5 pr-5 pb-5 pl-5 space-y-6">

<div className="flex gap-3">
<div className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-zinc-600" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-tl-sm shadow-sm text-sm text-zinc-600 leading-relaxed">
                        I've detected a new pattern in DHS procurement forecasts. There is an increasing demand for . Should I create a search intent cluster for this?
                    </div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white text-[10px] shrink-0">JD</div>
<div className="flex flex-col gap-2 max-w-[85%] items-end">
<div className="bg-zinc-900 text-white p-3 rounded-2xl rounded-tr-sm shadow-sm text-sm leading-relaxed font-light">
                        Yes, create a cluster for "Implementation of Biometric Systems". Exclude hardware supply.
                    </div>
</div>
</div>

<div className="flex gap-3">
<div className="w-7 h-7 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-zinc-600" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<div className="flex flex-col gap-2 max-w-[95%]">
<div className="bg-white border border-zinc-200 p-3 rounded-2xl rounded-tl-sm shadow-sm text-sm text-zinc-600 leading-relaxed">
                        Done. New intent cluster drafted:
                        <div className="mt-3 p-2 bg-zinc-50 border border-zinc-100 rounded-lg">
<div className="text-xs font-medium text-zinc-900 mb-1">"Implementation of Biometric Systems"</div>
<div className="flex flex-wrap gap-1 mt-1">
<span className="text-[10px] bg-white border border-zinc-200 px-1.5 py-0.5 rounded text-zinc-500">+ Identity Management</span>
<span className="text-[10px] bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded text-rose-500">- Hardware</span>
</div>
</div>
</div>
<button className="flex items-center justify-center gap-2 w-full py-2 bg-zinc-50 hover:bg-white border border-dashed border-zinc-300 hover:border-zinc-400 text-zinc-600 text-xs font-medium rounded-xl transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:add-circle-linear"></iconify-icon>
                        Add to Board
                    </button>
</div>
</div>
</div>
<div className="p-4 bg-white border-t border-zinc-200 shrink-0">
<div className="relative">
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2.5 pr-10 text-sm text-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:bg-white transition-all resize-none placeholder-zinc-400" placeholder="Refine strategy..." rows="1"></textarea>
<button className="absolute right-2 bottom-2 w-7 h-7 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg flex items-center justify-center transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-50/50">

<section className="h-[50%] flex flex-col min-h-0 border-b border-zinc-200 relative">
<header className="h-14 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md border-b border-zinc-100 shrink-0 z-10 sticky top-0">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:filters-linear"></iconify-icon>
<h1 className="text-sm font-medium tracking-tight text-zinc-900">Intent Clusters</h1>
<span className="bg-zinc-100 text-zinc-500 text-[10px] font-medium px-2 py-0.5 rounded-full border border-zinc-200">3 Active</span>
</div>
<div className="flex items-center gap-2">
<button className="text-xs text-zinc-500 hover:text-zinc-900 flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-zinc-100 transition-colors">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon> Sort
                    </button>
</div>
</header>
<div className="flex-1 overflow-x-auto overflow-y-hidden flex gap-5 scroller bg-zinc-50/50 pt-6 pr-6 pb-6 pl-6 gap-x-5 gap-y-5 items-start">

<article className="w-80 shrink-0 bg-white rounded-xl border border-blue-500 ring-4 ring-blue-50 shadow-md flex flex-col h-full max-h-[280px] cursor-pointer relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-50 to-transparent pointer-events-none"></div>
<div className="p-4 border-b border-zinc-100 flex items-start justify-between">
<div className="pr-2">
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wide">Selected</span>
</div>
<h3 className="text-sm font-medium text-zinc-900 leading-snug">"Modernization of HR Information Systems"</h3>
</div>
<div className="relative inline-block w-8 align-middle select-none shrink-0">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border border-zinc-300 checked:border-zinc-900 left-0 transition-all duration-300 top-0.5" id="toggle1" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-200 cursor-pointer checked:bg-zinc-900 transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>
<div className="p-4 flex-1 overflow-y-auto scroller space-y-4">
<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
<iconify-icon icon="solar:tag-linear"></iconify-icon> Must Include
                            </div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs rounded-md">HCM Implementation</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs rounded-md">Workday / Oracle</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs rounded-md">Payroll Integration</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-rose-400 font-medium">
<iconify-icon icon="solar:forbidden-circle-linear"></iconify-icon> Exclude
                             </div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-md">Staff Augmentation</span>
<span className="px-2 py-1 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-md">Maintenance Only</span>
</div>
</div>
</div>
<div className="p-3 bg-zinc-50/80 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
<span>14 Matches found</span>
<iconify-icon className="text-blue-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</article>

<article className="w-80 shrink-0 bg-white rounded-xl border border-zinc-200 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all flex flex-col h-full max-h-[280px] cursor-pointer opacity-70 hover:opacity-100">
<div className="p-4 border-b border-zinc-100 flex items-start justify-between">
<div className="pr-2">
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300"></span>
</div>
<h3 className="text-sm font-medium text-zinc-900 leading-snug">"AI Governance &amp; Policy Frameworks"</h3>
</div>
<div className="relative inline-block w-8 align-middle select-none shrink-0">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border border-zinc-300 checked:border-zinc-900 left-0 transition-all duration-300 top-0.5" id="toggle2" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-200 cursor-pointer checked:bg-zinc-900 transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
<div className="p-4 flex-1 overflow-y-auto scroller space-y-4">
<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-400 font-medium">
<iconify-icon icon="solar:tag-linear"></iconify-icon> Must Include
                            </div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs rounded-md">NIST AI RMF</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 text-zinc-700 text-xs rounded-md">Algorithmic Bias</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-rose-400 font-medium">
<iconify-icon icon="solar:forbidden-circle-linear"></iconify-icon> Exclude
                             </div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-md">Software Licensing</span>
</div>
</div>
</div>
<div className="p-3 bg-zinc-50/80 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
<span>3 Matches found</span>
</div>
</article>

<article className="w-80 shrink-0 bg-white rounded-xl border border-dashed border-zinc-300 flex flex-col h-full max-h-[280px] items-center justify-center gap-3 text-center p-6 hover:bg-zinc-50 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:text-zinc-600 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
<div className="space-y-1">
<p className="text-sm font-medium text-zinc-900">Add Intent Cluster</p>
<p className="text-xs text-zinc-400">Draft with AI or manual entry</p>
</div>
</article>
</div>
</section>

<section className="flex-1 flex flex-col min-h-0 bg-white relative">
<header className="h-12 border-b border-zinc-100 flex items-center justify-between px-6 bg-white sticky top-0 z-20">
<div className="flex items-center gap-2">
<h2 className="text-sm font-medium tracking-tight text-zinc-900">Public Tender Matches</h2>
<span className="text-zinc-300 mx-1">/</span>
<span className="text-xs text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                         "Modernization of HR Information Systems"
                        <iconify-icon className="cursor-pointer hover:text-blue-800" icon="solar:close-circle-linear"></iconify-icon>
</span>
</div>
<div className="flex items-center gap-3">
<button className="text-xs text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:download-linear"></iconify-icon> Export
                    </button>
</div>
</header>
<div className="flex-1 overflow-y-auto scroller">
<table className="w-full text-left border-collapse">
<thead className="bg-zinc-50/50 sticky top-0 z-10 backdrop-blur-sm">
<tr>
<th className="pl-6 pr-4 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100 w-24">Relevance</th>
<th className="px-4 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100 w-1/3">Tender Opportunity</th>
<th className="px-4 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100">Agency</th>
<th className="px-4 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100">Value / Due</th>
<th className="px-4 py-3 text-[10px] font-medium text-zinc-500 uppercase tracking-wider border-b border-zinc-100">Matching Logic</th>
<th className="pl-4 pr-6 py-3 border-b border-zinc-100 w-10"></th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-50">

<tr className="group hover:bg-zinc-50 transition-colors cursor-pointer">
<td className="pl-6 pr-4 py-4 align-top">
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-emerald-600">96%</span>
<div className="w-12 h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[96%]"></div>
</div>
</div>
</td>
<td className="px-4 py-4 align-top">
<div className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Enterprise HCM Transformation Services</div>
<div className="text-xs text-zinc-500 mt-1 line-clamp-1">Solicitation for the replacement of legacy personnel systems with a modern cloud-based solution.</div>
<div className="mt-2 flex gap-1">
<span className="text-[10px] border border-zinc-200 text-zinc-500 px-1.5 py-0.5 rounded bg-white">Full &amp; Open</span>
<span className="text-[10px] border border-zinc-200 text-zinc-500 px-1.5 py-0.5 rounded bg-white">NAICS 541512</span>
</div>
</td>
<td className="px-4 py-4 align-top text-zinc-600">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[8px] font-bold">VA</div>
<span className="text-xs">Dept of Veterans Affairs</span>
</div>
</td>
<td className="px-4 py-4 align-top">
<div className="font-medium text-zinc-900 text-xs">$25M - $50M</div>
<div className="text-xs text-zinc-400 mt-1">Due in 14 days</div>
</td>
<td className="px-4 py-4 align-top">
<div className="flex flex-wrap gap-1">
<span className="text-[10px] text-emerald-700 bg-emerald-50/50 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear" width="10"></iconify-icon> "HCM"
                                    </span>
<span className="text-[10px] text-emerald-700 bg-emerald-50/50 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear" width="10"></iconify-icon> "Cloud"
                                    </span>
</div>
</td>
<td className="pl-4 pr-6 py-4 align-top text-right">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors cursor-pointer">
<td className="pl-6 pr-4 py-4 align-top">
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-emerald-600">88%</span>
<div className="w-12 h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[88%]"></div>
</div>
</div>
</td>
<td className="px-4 py-4 align-top">
<div className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Payroll System Modernization &amp; Support</div>
<div className="text-xs text-zinc-500 mt-1 line-clamp-1">Requirements analysis and implementation support for Oracle Federal Financials integration.</div>
<div className="mt-2 flex gap-1">
<span className="text-[10px] border border-zinc-200 text-zinc-500 px-1.5 py-0.5 rounded bg-white">Small Business Set-Aside</span>
</div>
</td>
<td className="px-4 py-4 align-top text-zinc-600">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-indigo-900 text-white flex items-center justify-center text-[8px] font-bold">ED</div>
<span className="text-xs">Dept of Education</span>
</div>
</td>
<td className="px-4 py-4 align-top">
<div className="font-medium text-zinc-900 text-xs">$12M</div>
<div className="text-xs text-rose-500 font-medium mt-1">Due in 2 days</div>
</td>
<td className="px-4 py-4 align-top">
<div className="flex flex-wrap gap-1">
<span className="text-[10px] text-emerald-700 bg-emerald-50/50 border border-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear" width="10"></iconify-icon> "Oracle"
                                    </span>
</div>
</td>
<td className="pl-4 pr-6 py-4 align-top text-right">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors cursor-pointer opacity-80 hover:opacity-100">
<td className="pl-6 pr-4 py-4 align-top">
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-amber-600">65%</span>
<div className="w-12 h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[65%]"></div>
</div>
</div>
</td>
<td className="px-4 py-4 align-top">
<div className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Talent Management Software Subscription</div>
<div className="text-xs text-zinc-500 mt-1 line-clamp-1">SaaS subscription renewal for existing talent acquisition platform.</div>
</td>
<td className="px-4 py-4 align-top text-zinc-600">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[8px] font-bold">DOI</div>
<span className="text-xs">Interior</span>
</div>
</td>
<td className="px-4 py-4 align-top">
<div className="font-medium text-zinc-900 text-xs">$2.5M</div>
<div className="text-xs text-zinc-400 mt-1">Forecast</div>
</td>
<td className="px-4 py-4 align-top">
<div className="flex flex-wrap gap-1">
<span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear" width="10"></iconify-icon> Partial: SaaS
                                    </span>
<span className="text-[10px] text-rose-700 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:shield-warning-linear" width="10"></iconify-icon> "Renewal"
                                    </span>
</div>
</td>
<td className="pl-4 pr-6 py-4 align-top text-right">
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>

    </>
  );
}
