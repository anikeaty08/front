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
      

<div className="bg-white w-full max-w-[1400px] lg:aspect-video shadow-2xl shadow-zinc-200/50 rounded-3xl overflow-hidden flex flex-col relative border border-zinc-200/60">

<header className="flex justify-between items-start p-8 sm:p-10 border-b border-zinc-100">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 mb-1">
<div className="h-6 w-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:cloud" data-strokeWidth="1.5"></span>
</div>
<span className="text-sm font-semibold tracking-widest uppercase text-zinc-900">NEXUS</span>
</div>
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900">Q3 Infrastructure Spend</h1>
<p className="text-zinc-500 text-sm">Consolidated report for GCP, Linode, and DigitalOcean</p>
</div>
<div className="text-right">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Data
                </div>
<p className="mt-2 text-zinc-400 text-xs">Generated Oct 24, 2023</p>
</div>
</header>

<main className="flex-1 p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-50/30">

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm relative overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="iconify text-zinc-500" data-icon="lucide:dollar-sign" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full flex items-center gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                            4.2%
                        </span>
</div>
<div>
<p className="text-zinc-500 text-xs font-medium uppercase tracking-wide mb-1">Total Period Cost</p>
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900">$48,294<span className="text-zinc-400 text-2xl">.00</span></h2>
</div>

<div className="absolute -right-6 -bottom-6 text-zinc-50/80 group-hover:text-zinc-50 transition-colors">
<span className="iconify" data-icon="lucide:pie-chart" data-width="120"></span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm flex-1 flex flex-col justify-center">
<h3 className="text-sm font-medium text-zinc-900 mb-6">Provider Allocation</h3>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="flex items-center gap-2 text-zinc-600 font-medium">
<span className="iconify text-blue-500" data-icon="lucide:hexagon" data-width="14"></span>
                                    Google Cloud
                                </span>
<span className="text-zinc-900 font-medium">$28,976 (60%)</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="flex items-center gap-2 text-zinc-600 font-medium">
<span className="iconify text-emerald-500" data-icon="lucide:server" data-width="14"></span>
                                    Linode
                                </span>
<span className="text-zinc-900 font-medium">$12,073 (25%)</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="flex items-center gap-2 text-zinc-600 font-medium">
<span className="iconify text-indigo-500" data-icon="lucide:droplet" data-width="14"></span>
                                    DigitalOcean
                                </span>
<span className="text-zinc-900 font-medium">$7,245 (15%)</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-200/60 shadow-sm h-64 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-zinc-900">6-Month Trend Analysis</h3>
<div className="flex gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 border border-zinc-100 rounded-md">
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
<span className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Actual</span>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-50 border border-zinc-100 rounded-md">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wide">Projected</span>
</div>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-4 px-2 pb-2">

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 flex items-end rounded-t-sm overflow-hidden bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
<div className="w-full bg-zinc-800/80 group-hover:bg-zinc-800 transition-all h-[65%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400 font-medium">MAY</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 flex items-end rounded-t-sm overflow-hidden bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
<div className="w-full bg-zinc-800/80 group-hover:bg-zinc-800 transition-all h-[72%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400 font-medium">JUN</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 flex items-end rounded-t-sm overflow-hidden bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
<div className="w-full bg-zinc-800/80 group-hover:bg-zinc-800 transition-all h-[68%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400 font-medium">JUL</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 flex items-end rounded-t-sm overflow-hidden bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
<div className="w-full bg-zinc-800/80 group-hover:bg-zinc-800 transition-all h-[85%] rounded-t-sm"></div>
</div>
<span className="text-[10px] text-zinc-400 font-medium">AUG</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 flex items-end rounded-t-sm overflow-hidden bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
<div className="w-full bg-zinc-900 group-hover:bg-black transition-all h-[92%] rounded-t-sm relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">$48k</div>
</div>
</div>
<span className="text-[10px] text-zinc-900 font-semibold">SEP</span>
</div>

<div className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div className="relative w-full max-w-[40px] h-32 flex items-end rounded-t-sm overflow-hidden bg-zinc-50 group-hover:bg-zinc-100 transition-colors">
<div className="w-full border border-dashed border-zinc-300 bg-transparent h-[95%] rounded-t-sm relative">
<div className="absolute bottom-0 left-0 right-0 h-full bg-zinc-200/30"></div>
</div>
</div>
<span className="text-[10px] text-zinc-400 font-medium">OCT</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200/60 shadow-sm flex-1 overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-medium text-zinc-900">Top Service Drivers</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1">
                            Export CSV <span className="iconify" data-icon="lucide:download" data-width="12"></span>
</button>
</div>
<div className="overflow-x-auto no-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-zinc-50/50 border-b border-zinc-100">
<th className="py-3 px-6 text-[11px] uppercase tracking-wider font-medium text-zinc-400">Service</th>
<th className="py-3 px-6 text-[11px] uppercase tracking-wider font-medium text-zinc-400">Region</th>
<th className="py-3 px-6 text-[11px] uppercase tracking-wider font-medium text-zinc-400 text-right">Usage</th>
<th className="py-3 px-6 text-[11px] uppercase tracking-wider font-medium text-zinc-400 text-right">Cost</th>
<th className="py-3 px-6 text-[11px] uppercase tracking-wider font-medium text-zinc-400 text-right">Status</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group hover:bg-zinc-50 transition-colors border-b border-zinc-50">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:container" data-width="14"></span>
</div>
<div>
<p className="font-medium text-zinc-900">GKE Cluster-1</p>
<p className="text-[10px] text-zinc-400">Google Cloud</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-zinc-500 text-xs">us-central1</td>
<td className="py-3 px-6 text-right text-zinc-500 text-xs font-mono">744 hrs</td>
<td className="py-3 px-6 text-right font-medium text-zinc-900 text-xs">$14,203.44</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-medium text-zinc-600 border border-zinc-200">
                                            Stable
                                        </span>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors border-b border-zinc-50">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
</div>
<div>
<p className="font-medium text-zinc-900">Dedicated CPU 32GB</p>
<p className="text-[10px] text-zinc-400">Linode</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-zinc-500 text-xs">newark</td>
<td className="py-3 px-6 text-right text-zinc-500 text-xs font-mono">1,200 hrs</td>
<td className="py-3 px-6 text-right font-medium text-zinc-900 text-xs">$8,450.00</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-[10px] font-medium text-emerald-700 border border-emerald-100">
<span className="iconify" data-icon="lucide:arrow-down" data-width="10"></span> 2%
                                        </span>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors border-b border-zinc-50">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-indigo-50 text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:database" data-width="14"></span>
</div>
<div>
<p className="font-medium text-zinc-900">Managed DB (Postgres)</p>
<p className="text-[10px] text-zinc-400">DigitalOcean</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-zinc-500 text-xs">nyc3</td>
<td className="py-3 px-6 text-right text-zinc-500 text-xs font-mono">744 hrs</td>
<td className="py-3 px-6 text-right font-medium text-zinc-900 text-xs">$4,100.00</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-[10px] font-medium text-amber-700 border border-amber-100">
<span className="iconify" data-icon="lucide:arrow-up" data-width="10"></span> 5%
                                        </span>
</td>
</tr>

<tr className="group hover:bg-zinc-50 transition-colors">
<td className="py-3 px-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:hard-drive" data-width="14"></span>
</div>
<div>
<p className="font-medium text-zinc-900">Cloud Storage</p>
<p className="text-[10px] text-zinc-400">Google Cloud</p>
</div>
</div>
</td>
<td className="py-3 px-6 text-zinc-500 text-xs">multi-reg</td>
<td className="py-3 px-6 text-right text-zinc-500 text-xs font-mono">50 TB</td>
<td className="py-3 px-6 text-right font-medium text-zinc-900 text-xs">$1,200.00</td>
<td className="py-3 px-6 text-right">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-100 text-[10px] font-medium text-zinc-600 border border-zinc-200">
                                            Stable
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<footer className="p-6 bg-white border-t border-zinc-100 flex justify-between items-center text-[10px] text-zinc-400 uppercase tracking-widest">
<div>Confidential • Internal Use Only</div>
<div className="flex gap-4">
<span>Page 01/05</span>
<span>NEXUS CLOUD OPS</span>
</div>
</footer>
</div>

    </>
  );
}
