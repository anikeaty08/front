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



      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    
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
      

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4">
<div className="h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-8 w-8 rounded-md bg-slate-900 text-white text-[13px] font-semibold tracking-tight">TG</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Dashboard</a>
<span className="text-slate-300">/</span>
<span className="text-slate-900">Orders</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-2 h-9 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-sm transition-colors">
<i className="h-4 w-4" data-lucide="search"></i>
              Quick Find
            </button>
<button className="relative flex items-center justify-center h-9 w-9 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors">
<i className="h-4 w-4 text-slate-700" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-4 min-w-[16px] px-1 rounded-full bg-emerald-600 text-white text-[10px] leading-4 text-center">3</span>
</button>
<div className="h-9 w-[1px] bg-slate-200 mx-1"></div>
<button className="flex items-center gap-2 h-9 px-2 rounded-md hover:bg-slate-100 transition-colors">
<img alt="User" className="h-7 w-7 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="hidden sm:inline text-sm text-slate-700">Clinician</span>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 py-6 space-y-6">

<section className="bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="p-5 md:p-6 flex flex-col md:flex-row gap-5 md:gap-6">
<div className="flex items-center gap-4 flex-1">
<div className="h-12 w-12 rounded-lg bg-slate-900 text-white flex items-center justify-center ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="shopping-bag"></i>
</div>
<div className="min-w-0">
<div className="flex items-center gap-2">
<h1 className="text-2xl tracking-tight font-semibold text-slate-900 truncate">Lab Orders</h1>
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 text-[12px]">All Patients</span>
</div>
<div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-500" data-lucide="calendar"></i>
                  Period: Last 30 days
                </div>
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-500" data-lucide="hash"></i>
                  Orders: <span className="font-medium text-slate-900">124</span>
</div>
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-500" data-lucide="file-check-2"></i>
                  Ready: <span className="font-medium text-slate-900">68</span>
</div>
</div>
</div>
</div>
<div className="md:w-[1px] bg-slate-200"></div>
<div className="flex md:flex-col gap-2 md:min-w-[320px]">
<button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800 transition-colors">
<i className="h-4 w-4" data-lucide="plus"></i>
              New Order
            </button>
<button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-sm transition-colors">
<i className="h-4 w-4" data-lucide="download"></i>
              Export
            </button>
<button className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-sm transition-colors">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i>
              Filters
            </button>
</div>
</div>
<div className="px-5 md:px-6 pb-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/60">
<div className="text-xs text-slate-500">Turnaround (median)</div>
<div className="mt-0.5 text-slate-900 font-medium">22h 10m</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/60">
<div className="text-xs text-slate-500">Processing</div>
<div className="mt-0.5 text-slate-900 font-medium">18</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/60">
<div className="text-xs text-slate-500">In Transit</div>
<div className="mt-0.5 flex items-center gap-1.5 text-slate-900 font-medium">
<i className="h-4 w-4 text-slate-600" data-lucide="truck"></i> 7
            </div>
</div>
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50/60">
<div className="text-xs text-slate-500">Issues</div>
<div className="mt-0.5 text-slate-900 font-medium">3 holds</div>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="p-5 md:p-6">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight">Status Highlights</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-sm transition-colors">
<i className="h-4 w-4" data-lucide="filter"></i>
                Filters
              </button>
<button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-sm transition-colors">
<i className="h-4 w-4" data-lucide="refresh-ccw"></i>
                Refresh
              </button>
</div>
</div>
<div className="mt-4 overflow-x-auto">
<div className="min-w-[720px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">

<div className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-500">Report Ready</div>
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px]">68</span>
</div>
<div className="mt-2 flex items-baseline gap-1">
<div className="text-2xl tracking-tight font-semibold text-slate-900">55%</div>
<div className="text-slate-500 text-sm">of all</div>
</div>
<div className="mt-3">
<div className="h-2 w-full rounded-full bg-slate-100 relative overflow-hidden">
<div className="absolute left-0 w-[55%] h-full bg-emerald-200"></div>
</div>
<div className="mt-1 flex justify-between text-[11px] text-slate-500">
<span>0%</span><span>Goal 70%</span><span>100%</span>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-500">Processing</div>
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 text-[11px]">18</span>
</div>
<div className="mt-2 flex items-baseline gap-1">
<div className="text-2xl tracking-tight font-semibold text-slate-900">14%</div>
<div className="text-slate-500 text-sm">of all</div>
</div>
<div className="mt-3">
<div className="h-2 w-full rounded-full bg-slate-100 relative overflow-hidden">
<div className="absolute left-0 w-[14%] h-full bg-sky-200"></div>
</div>
<div className="mt-1 flex justify-between text-[11px] text-slate-500">
<span>0%</span><span>On track</span><span>100%</span>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-500">In Transit</div>
<span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 text-[11px]">7</span>
</div>
<div className="mt-2 flex items-baseline gap-1">
<div className="text-2xl tracking-tight font-semibold text-slate-900">6%</div>
<div className="text-slate-500 text-sm">of all</div>
</div>
<div className="mt-3">
<div className="h-2 w-full rounded-full bg-slate-100 relative overflow-hidden">
<div className="absolute left-0 w-[6%] h-full bg-indigo-200"></div>
</div>
<div className="mt-1 flex justify-between text-[11px] text-slate-500">
<span>0%</span><span>ETA 2h</span><span>100%</span>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-500">On Hold</div>
<span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-[11px]">3</span>
</div>
<div className="mt-2 flex items-baseline gap-1">
<div className="text-2xl tracking-tight font-semibold text-slate-900">2%</div>
<div className="text-slate-500 text-sm">of all</div>
</div>
<div className="mt-3">
<div className="h-2 w-full rounded-full bg-slate-100 relative overflow-hidden">
<div className="absolute left-0 w-[2%] h-full bg-amber-200"></div>
</div>
<div className="mt-1 flex justify-between text-[11px] text-slate-500">
<span>0%</span><span>Resolve</span><span>100%</span>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 p-4 hover:shadow-sm transition-shadow">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-500">Canceled</div>
<span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-[11px]">2</span>
</div>
<div className="mt-2 flex items-baseline gap-1">
<div className="text-2xl tracking-tight font-semibold text-slate-900">2%</div>
<div className="text-slate-500 text-sm">of all</div>
</div>
<div className="mt-3">
<div className="h-2 w-full rounded-full bg-slate-100 relative overflow-hidden">
<div className="absolute left-0 w-[2%] h-full bg-rose-200"></div>
</div>
<div className="mt-1 flex justify-between text-[11px] text-slate-500">
<span>0%</span><span>Low</span><span>100%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-8 space-y-6">

<div className="bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div>
<h3 className="text-xl font-semibold tracking-tight">All Orders</h3>
<p className="mt-0.5 text-sm text-slate-500">Showing orders across all patients. Use search or export as needed.</p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<i className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="h-9 pl-8 pr-3 rounded-md bg-white border border-slate-200 hover:border-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-100 text-sm" placeholder="Search by patient, order, accession"/>
</div>
<button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-sm">
<i className="h-4 w-4" data-lucide="file-down"></i>
                  CSV
                </button>
<button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-sm">
<i className="h-4 w-4" data-lucide="file-text"></i>
                  PDF
                </button>
</div>
</div>
<div className="border-t border-slate-200">
<div className="overflow-x-auto">
<table className="min-w-[920px] w-full">
<thead className="bg-slate-50/60">
<tr className="text-left text-xs text-slate-500">
<th className="px-5 py-3 font-medium">Patient</th>
<th className="px-5 py-3 font-medium">Order ID</th>
<th className="px-5 py-3 font-medium">Panels</th>
<th className="px-5 py-3 font-medium">Status</th>
<th className="px-5 py-3 font-medium">Collected</th>
<th className="px-5 py-3 font-medium">Accession</th>
<th className="px-5 py-3 font-medium">Physician</th>
<th className="px-5 py-3 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Alicia Park</div>
<div className="text-xs text-slate-500">TG-009245</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10231</td>
<td className="px-5 py-3 text-sm text-slate-600">CMP, Lipid, Vitamin D</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="file-check-2"></i> Ready
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">12 Oct 08:14</td>
<td className="px-5 py-3 text-sm text-slate-600">ACN-44291</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Chen</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Marcus Lee</div>
<div className="text-xs text-slate-500">TG-004182</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10229</td>
<td className="px-5 py-3 text-sm text-slate-600">CBC, A1c</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="flask-conical"></i> Processing
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">12 Oct 09:02</td>
<td className="px-5 py-3 text-sm text-slate-600">ACN-44287</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Alvarez</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Priya Singh</div>
<div className="text-xs text-slate-500">TG-002901</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10227</td>
<td className="px-5 py-3 text-sm text-slate-600">CMP</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="truck"></i> In Transit
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">12 Oct 08:41</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Chen</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Ethan Walker</div>
<div className="text-xs text-slate-500">TG-003517</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10226</td>
<td className="px-5 py-3 text-sm text-slate-600">Lipid, A1c</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="alert-circle"></i> On Hold
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">11 Oct 17:58</td>
<td className="px-5 py-3 text-sm text-slate-600">ACN-44281</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Patel</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium text-slate-900">Sophia Gomez</div>
<div className="text-xs text-slate-500">TG-001144</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10224</td>
<td className="px-5 py-3 text-sm text-slate-600">CMP, CRP</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="clipboard-list"></i> Created
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Chen</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Noah Kim</div>
<div className="text-xs text-slate-500">TG-006702</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10222</td>
<td className="px-5 py-3 text-sm text-slate-600">CBC</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="droplet"></i> Collected
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">11 Oct 09:45</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Rossi</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Emily Carter</div>
<div className="text-xs text-slate-500">TG-008811</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10220</td>
<td className="px-5 py-3 text-sm text-slate-600">A1c</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="file-check-2"></i> Ready
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">10 Oct 16:21</td>
<td className="px-5 py-3 text-sm text-slate-600">ACN-44250</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Patel</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Liam Brown</div>
<div className="text-xs text-slate-500">TG-007301</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10219</td>
<td className="px-5 py-3 text-sm text-slate-600">Lipid</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 border border-rose-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="x-circle"></i> Canceled
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">10 Oct 14:10</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Nguyen</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Olivia Martin</div>
<div className="text-xs text-slate-500">TG-005501</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10218</td>
<td className="px-5 py-3 text-sm text-slate-600">CBC, CMP</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="truck"></i> In Transit
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">10 Oct 11:02</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Rossi</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>

<tr className="hover:bg-slate-50/60">
<td className="px-5 py-3">
<div className="flex items-center gap-3">
<img alt="Patient" className="h-8 w-8 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium text-slate-900">Jackson Hill</div>
<div className="text-xs text-slate-500">TG-009932</div>
</div>
</div>
</td>
<td className="px-5 py-3 text-sm text-slate-900 font-medium">ORD-10215</td>
<td className="px-5 py-3 text-sm text-slate-600">CRP</td>
<td className="px-5 py-3">
<span className="px-2 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 text-xs inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="droplet"></i> Collected
                        </span>
</td>
<td className="px-5 py-3 text-sm text-slate-600">09 Oct 15:45</td>
<td className="px-5 py-3 text-sm text-slate-600">—</td>
<td className="px-5 py-3 text-sm text-slate-600">Dr. Alvarez</td>
<td className="px-5 py-3">
<button className="h-8 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-xs inline-flex items-center gap-1.5">
<i className="h-4 w-4" data-lucide="eye"></i>
                          Open
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="px-5 md:px-6 py-4 bg-slate-50/60 border-t border-slate-200 text-xs text-slate-500">
              Note: Status reflects latest step per order. Accession appears once received at lab.
            </div>
</div>
</div>

<div className="xl:col-span-4 space-y-6">

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 md:p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Selected Order</h3>
<span className="inline-flex items-center gap-1.5 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="hash"></i> ORD-10231
              </span>
</div>
<div className="mt-3 rounded-lg border border-slate-200 p-3 bg-slate-50/60">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Patient" className="h-7 w-7 rounded-full object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="text-sm font-medium text-slate-900">Alicia Park</div>
</div>
<span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="file-check-2"></i> Ready
                </span>
</div>
<div className="mt-1 text-xs text-slate-500">CMP, Lipid, Vitamin D • ACN-44291</div>
</div>
<div className="mt-4 space-y-4">
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-3.5 w-3.5" data-lucide="clipboard-list"></i>
</div>
<div className="w-px flex-1 bg-slate-200 my-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Order Created</div>
<div className="text-xs text-slate-500">11 Oct 17:18</div>
</div>
<div className="text-sm text-slate-600">CMP + Lipid, Vitamin D</div>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-3.5 w-3.5" data-lucide="droplet"></i>
</div>
<div className="w-px flex-1 bg-slate-200 my-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Sample Collected</div>
<div className="text-xs text-slate-500">12 Oct 08:14</div>
</div>
<div className="text-sm text-slate-600">Serum, SST; Phlebotomist: M. Rivera</div>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-3.5 w-3.5" data-lucide="truck"></i>
</div>
<div className="w-px flex-1 bg-slate-200 my-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">In Transit</div>
<div className="text-xs text-slate-500">12 Oct 08:41</div>
</div>
<div className="text-sm text-slate-600">Courier: CX-12; Temp: 5.0°C</div>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-3.5 w-3.5" data-lucide="building-2"></i>
</div>
<div className="w-px flex-1 bg-slate-200 my-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Received at Lab</div>
<div className="text-xs text-slate-500">12 Oct 09:01</div>
</div>
<div className="text-sm text-slate-600">Accession: ACN-44291</div>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-6 w-6 rounded-full bg-slate-900 text-white flex items-center justify-center">
<i className="h-3.5 w-3.5" data-lucide="flask-conical"></i>
</div>
<div className="w-px flex-1 bg-slate-200 my-1"></div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Processing</div>
<div className="text-xs text-slate-500">12 Oct 09:12</div>
</div>
<div className="text-sm text-slate-600">Analyzers: AU680, DXC700</div>
</div>
</div>
<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-6 w-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
<i className="h-3.5 w-3.5" data-lucide="file-check-2"></i>
</div>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Report Ready</div>
<div className="text-xs text-slate-500">12 Oct 10:55</div>
</div>
<div className="text-sm text-slate-600">Delivered to portal and provider</div>
</div>
</div>
</div>
<div className="mt-4 rounded-lg border border-slate-200 p-3 bg-slate-50/60">
<div className="text-xs text-slate-500">Next action</div>
<div className="text-sm text-slate-900">Notify patient and archive the order.</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm">
<div className="p-5 md:p-6 flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Exports</h3>
<a className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800" download="" href="#">
<i className="h-4 w-4" data-lucide="archive-down"></i>
                Download All
              </a>
</div>
<div className="divide-y divide-slate-200">
<a className="flex items-center justify-between px-5 md:px-6 py-4 hover:bg-slate-50/60 transition-colors" download="" href="#">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5 text-slate-700" data-lucide="file-spreadsheet"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Orders (Last 30 Days)</div>
<div className="text-xs text-slate-500">CSV • 124 rows • 98 KB</div>
</div>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="download"></i>
</a>
<a className="flex items-center justify-between px-5 md:px-6 py-4 hover:bg-slate-50/60 transition-colors" download="" href="#">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5 text-slate-700" data-lucide="file-text"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Courier Manifests</div>
<div className="text-xs text-slate-500">PDF • Batch • 1.1 MB</div>
</div>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="download"></i>
</a>
<a className="flex items-center justify-between px-5 md:px-6 py-4 hover:bg-slate-50/60 transition-colors" download="" href="#">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5 text-slate-700" data-lucide="qr-code"></i>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Sample Labels</div>
<div className="text-xs text-slate-500">PDF • 2-up • 420 KB</div>
</div>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="download"></i>
</a>
</div>
<div className="px-5 md:px-6 py-4 bg-slate-50/60 border-t border-slate-200 text-xs text-slate-500">
              Exports are watermarked and logged per policy.
            </div>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl shadow-sm p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center">
<i className="h-4 w-4 text-slate-700" data-lucide="plus"></i>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-sm">
<i className="h-4 w-4" data-lucide="download"></i>
            Bulk Export
          </button>
<button className="inline-flex items-center gap-1.5 h-9 px-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 text-sm">
<i className="h-4 w-4" data-lucide="plus"></i>
            Create New Order
          </button>
</div>
</section>
</main>
<footer className="max-w-7xl mx-auto px-4 pb-10">
<div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
<div>© 2025 TestGo Diagnostics</div>
<div className="flex items-center gap-3">
<a className="hover:text-slate-700" href="#">Terms</a>
<span className="text-slate-300">•</span>
<a className="hover:text-slate-700" href="#">Privacy</a>
<span className="text-slate-300">•</span>
<a className="hover:text-slate-700" href="#">Security</a>
</div>
</div>
</footer>



    </>
  );
}
