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
      

<aside className="w-16 lg:w-64 flex-shrink-0 flex flex-col justify-between z-20 bg-zinc-950 border-r border-zinc-800 text-zinc-400">
<div>

<div className="h-16 flex items-center px-4 lg:px-6 border-b border-zinc-800">
<div className="flex items-center gap-3">
<div className="h-8 w-8 flex items-center justify-center rounded bg-white text-zinc-950 font-bold text-sm tracking-tighter">
                        FA
                    </div>
<span className="font-medium tracking-tight text-sm text-zinc-100 hidden lg:block">FinanceOps</span>
</div>
</div>

<nav className="mt-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-zinc-800 text-white btn-hover group" href="#">
<iconify-icon className="text-white" icon="solar:home-2-linear" width="18"></iconify-icon>
<span className="hidden lg:block">Control Surface</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-900 hover:text-zinc-100 btn-hover group" href="#">
<iconify-icon className="group-hover:text-zinc-100" icon="solar:document-text-linear" width="18"></iconify-icon>
<span className="hidden lg:block">Invoices</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-900 hover:text-zinc-100 btn-hover group" href="#">
<iconify-icon className="group-hover:text-zinc-100" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="hidden lg:block">Contractors</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-900 hover:text-zinc-100 btn-hover group" href="#">
<iconify-icon className="group-hover:text-zinc-100" icon="solar:card-transfer-linear" width="18"></iconify-icon>
<span className="hidden lg:block">Payments</span>
</a>
</nav>
<div className="mt-8 px-3">
<div className="text-[10px] font-semibold uppercase tracking-wider px-3 mb-2 text-zinc-600 hidden lg:block">Reporting</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md hover:bg-zinc-900 hover:text-zinc-100 btn-hover group" href="#">
<iconify-icon className="group-hover:text-zinc-100" icon="solar:chart-square-linear" width="18"></iconify-icon>
<span className="hidden lg:block">Analytics</span>
</a>
</nav>
</div>
</div>

<div className="p-4 border-t border-zinc-800">
<button className="flex items-center gap-3 w-full group">
<div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-100 font-medium group-hover:bg-zinc-700 btn-hover">JD</div>
<div className="flex-1 min-w-0 text-left hidden lg:block">
<p className="text-sm font-medium text-zinc-200">Jane Doe</p>
<p className="text-xs text-zinc-500">Global Admin</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative bg-zinc-50/50">

<header className="bg-white border-b border-zinc-200 h-16 flex items-center justify-between px-8 flex-shrink-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-lg font-semibold text-zinc-900 tracking-tight">Operations Dashboard</h1>
<div className="h-4 w-px bg-zinc-200"></div>
<span className="text-sm text-zinc-500 font-normal">New York (EST)</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    System Operational
                </div>
<button className="relative text-zinc-500 hover:text-zinc-900 btn-hover p-1 rounded-md hover:bg-zinc-100">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-600 rounded-full ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-[1600px] mx-auto space-y-6">

<section className="bg-white rounded-lg border border-zinc-200 shadow-sm flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-zinc-100 overflow-hidden">
<div className="w-full md:w-64 p-5 bg-zinc-50 flex flex-col justify-center">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">Current Period</span>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">March 2026</div>
<div className="flex items-center gap-2 mt-2">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium text-zinc-700">Cycle Open</span>
</div>
</div>
<div className="flex-1 p-5 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-0">
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Time to Close</span>
<div className="text-lg font-semibold text-zinc-900 mt-1 tabular-nums">4 Days Remaining</div>
<span className="text-xs text-zinc-400">Cutoff: Mar 31, 23:59 EST</span>
</div>
<div className="h-10 w-px bg-zinc-100 hidden md:block"></div>
<div>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Projection</span>
<div className="text-lg font-semibold text-zinc-900 mt-1 tabular-nums">92% On Track</div>
<span className="text-xs text-zinc-400">Based on validation velocity</span>
</div>
<div className="h-10 w-px bg-zinc-100 hidden md:block"></div>
<div className="flex-1 max-w-xs">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-600 font-medium">Processing Volume</span>
<span className="font-mono text-zinc-500">142/180</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
<div className="bg-zinc-900 h-full rounded-full" style={{width: '78%'}}></div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="rounded-lg border border-red-100 bg-white p-5 shadow-sm hover:shadow-md hover:border-red-200 transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500 rounded-l-lg"></div>
<div className="flex items-center justify-between mb-4 pl-2">
<span className="text-xs font-semibold uppercase tracking-wide text-red-700">Action Required</span>
<div className="p-1.5 rounded-md bg-red-50 text-red-600">
<iconify-icon icon="solar:danger-triangle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="pl-2">
<div className="text-3xl font-semibold tracking-tight text-zinc-900">12</div>
<div className="text-sm text-zinc-500 mt-1">Validation errors</div>
</div>
</div>

<div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group pl-5">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold uppercase tracking-wide text-amber-700">Blocked by Mgr</span>
<div className="p-1.5 rounded-md bg-amber-50 text-amber-600">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">8</div>
<div className="text-sm text-zinc-500 mt-1">&gt; 48hrs pending</div>
</div>
</div>

<div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold uppercase tracking-wide text-blue-700">Ready for Bulk</span>
<div className="p-1.5 rounded-md bg-blue-50 text-blue-600">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">28</div>
<div className="text-sm text-zinc-500 mt-1">Validated &amp; Approved</div>
</div>
</div>

<div className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Processed</span>
<div className="p-1.5 rounded-md bg-emerald-50 text-emerald-600">
<iconify-icon icon="solar:bill-check-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<div className="text-3xl font-semibold tracking-tight text-zinc-900">94</div>
<div className="text-sm text-zinc-500 mt-1">Sent to ERP</div>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-8">

<div className="col-span-12 lg:col-span-8 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold text-zinc-900 tracking-tight flex items-center gap-2">
                            Exceptions Queue
                            <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-xs font-medium border border-zinc-200">24</span>
</h2>
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 flex items-center gap-1 transition-colors">
                            View All
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>

<div className="bg-white rounded-lg border border-zinc-200 shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead className="bg-zinc-50/50 border-b border-zinc-200">
<tr>
<th className="px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Invoice / Entity</th>
<th className="px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Blocking Issue</th>
<th className="px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Age</th>
<th className="px-4 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-4 py-4 align-top w-40">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100">
<iconify-icon icon="solar:danger-circle-bold" width="14"></iconify-icon>
                                            Payment Block
                                        </span>
</td>
<td className="px-4 py-4 align-top">
<div className="font-mono text-xs font-medium text-zinc-900">INV-2026-089</div>
<div className="text-sm text-zinc-600 mt-0.5">Alex Morgan (Consulting)</div>
</td>
<td className="px-4 py-4 align-top">
<div className="text-sm text-zinc-900 font-medium">Rate exceeds contract cap</div>
<div className="text-xs text-zinc-500 mt-1">Contract: $150/hr | Inv: $165/hr</div>
</td>
<td className="px-4 py-4 align-top">
<span className="text-sm font-medium text-red-600">3 Days</span>
</td>
<td className="px-4 py-4 text-right">
<button className="inline-flex items-center justify-center rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 h-8 px-3 text-zinc-700">
                                            Resolve
                                        </button>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-4 py-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<iconify-icon icon="solar:pause-circle-bold" width="14"></iconify-icon>
                                            Approval Block
                                        </span>
</td>
<td className="px-4 py-4 align-top">
<div className="font-mono text-xs font-medium text-zinc-900">INV-2026-092</div>
<div className="text-sm text-zinc-600 mt-0.5">TechSolutions Inc.</div>
</td>
<td className="px-4 py-4 align-top">
<div className="text-sm text-zinc-900 font-medium">Pending Manager (Sarah J.)</div>
<div className="text-xs text-zinc-500 mt-1">Last reminder: Yesterday</div>
</td>
<td className="px-4 py-4 align-top">
<span className="text-sm font-medium text-amber-600">5 Days</span>
</td>
<td className="px-4 py-4 text-right">
<button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 h-8 px-3 text-zinc-700">
                                            Nudge
                                        </button>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-4 py-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200">
<iconify-icon icon="solar:info-circle-bold" width="14"></iconify-icon>
                                            Data Missing
                                        </span>
</td>
<td className="px-4 py-4 align-top">
<div className="font-mono text-xs font-medium text-zinc-900">INV-2026-077</div>
<div className="text-sm text-zinc-600 mt-0.5">David Chen</div>
</td>
<td className="px-4 py-4 align-top">
<div className="text-sm text-zinc-900 font-medium">Missing expense receipts</div>
<div className="text-xs text-zinc-500 mt-1">Amount: $1,200.00</div>
</td>
<td className="px-4 py-4 align-top">
<span className="text-sm font-medium text-zinc-600">1 Day</span>
</td>
<td className="px-4 py-4 text-right">
<button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 h-8 px-3 text-zinc-700">
                                            Review
                                        </button>
</td>
</tr>

<tr className="hover:bg-zinc-50 transition-colors group">
<td className="px-4 py-4 align-top">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100">
<iconify-icon icon="solar:shield-warning-bold" width="14"></iconify-icon>
                                            Compliance
                                        </span>
</td>
<td className="px-4 py-4 align-top">
<div className="font-mono text-xs font-medium text-zinc-900">INV-2026-104</div>
<div className="text-sm text-zinc-600 mt-0.5">Michael Ross</div>
</td>
<td className="px-4 py-4 align-top">
<div className="text-sm text-zinc-900 font-medium">W-9 Form Expired</div>
<div className="text-xs text-zinc-500 mt-1">Cannot process payment</div>
</td>
<td className="px-4 py-4 align-top">
<span className="text-sm font-medium text-red-600">2 Days</span>
</td>
<td className="px-4 py-4 text-right">
<button className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 h-8 px-3 text-zinc-700">
                                            Request
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-8">

<div>
<h2 className="text-base font-semibold text-zinc-900 tracking-tight mb-4">Available Actions</h2>
<div className="space-y-3">

<button className="w-full text-left bg-zinc-900 text-white rounded-lg p-4 hover:bg-zinc-800 transition-all shadow-md group relative overflow-hidden">
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold">Approve Validated Batch</h3>
<p className="text-xs text-zinc-400 mt-1">28 invoices match 3-way criteria.</p>
<div className="flex gap-2 mt-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-700 text-zinc-100 font-mono tracking-wide">
                                                $142,500.00
                                            </span>
</div>
</div>
<div className="p-2 bg-zinc-800 rounded-md group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
</div>
</div>
</button>

<button className="w-full text-left bg-white border border-zinc-200 rounded-lg p-4 hover:border-zinc-300 hover:bg-zinc-50 transition-all group">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900">Send Manager Reminders</h3>
<p className="text-xs text-zinc-500 mt-1">8 approvals overdue by &gt; 48h.</p>
</div>
<div className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:bell-bing-linear" width="18"></iconify-icon>
</div>
</div>
</button>

<button className="w-full text-left bg-white border border-zinc-200 rounded-lg p-4 hover:border-zinc-300 hover:bg-zinc-50 transition-all group">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-semibold text-zinc-900">Export for ERP</h3>
<p className="text-xs text-zinc-500 mt-1">Generate CSV for Dynamics 365.</p>
</div>
<div className="text-zinc-400 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:export-linear" width="18"></iconify-icon>
</div>
</div>
</button>
</div>
</div>

<div>
<h2 className="text-base font-semibold text-zinc-900 tracking-tight mb-4">Audit Confidence</h2>
<div className="bg-white border border-zinc-200 rounded-lg p-5 shadow-sm">
<ul className="space-y-4">
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500">Last Reconciliation</span>
<span className="font-mono text-zinc-900 text-xs">14:02 EST</span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500">ERP Sync Status</span>
<span className="flex items-center gap-1.5 text-emerald-700 font-medium text-xs bg-emerald-50 px-2 py-0.5 rounded-full">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Connected
                                    </span>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-zinc-500">Unmatched POs</span>
<span className="font-mono text-red-600 font-bold text-xs bg-red-50 px-2 py-0.5 rounded-full">3</span>
</li>
</ul>
<div className="mt-5 pt-4 border-t border-zinc-100">
<button className="text-xs font-medium text-zinc-900 hover:text-blue-600 flex items-center gap-1 transition-colors">
                                    View Full Audit Log 
                                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
