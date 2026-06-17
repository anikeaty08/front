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
      

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-200/50">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-medium text-xs tracking-tighter">I</span>
</div>
<span className="text-sm font-medium tracking-tight">INTRADE DB</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:home-smile-linear" width="18"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-900 bg-slate-100 font-medium rounded-md transition-colors group" href="#">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
                Master Database
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                Vendors
                <span className="ml-auto text-xs bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:bag-check-linear" width="18"></iconify-icon>
                Transactions
            </a>
<div className="pt-6 pb-2 px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Configuration</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:shield-check-linear" width="18"></iconify-icon>
                Verification Rules
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900" icon="solar:settings-linear" width="18"></iconify-icon>
                System Settings
            </a>
</nav>
<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs">
                    AD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Admin Console</p>
<p className="text-xs text-slate-500 truncate">admin@intrade.in</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-slate-200 bg-white/80 backdrop-blur z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="flex text-sm text-slate-500">
<span className="hover:text-slate-900 cursor-pointer transition-colors">Workspace</span>
<span className="mx-2 text-slate-300">/</span>
<span className="text-slate-900 font-medium">Database</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm border border-slate-200 rounded-md focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 w-64 placeholder:text-slate-400 bg-slate-50" placeholder="Search GST, PAN or Name..." type="text"/>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-1.5 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-6 scroll-smooth">
<div className="max-w-[1400px] mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Total Entities</p>
<h3 className="text-2xl font-medium text-slate-900 mt-1 tracking-tight">12,408</h3>
</div>
<div className="p-2 bg-slate-50 rounded-lg text-slate-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Pending Verification</p>
<h3 className="text-2xl font-medium text-slate-900 mt-1 tracking-tight">48</h3>
</div>
<div className="p-2 bg-amber-50 rounded-lg text-amber-600 border border-amber-100">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Trades</p>
<h3 className="text-2xl font-medium text-slate-900 mt-1 tracking-tight">156</h3>
</div>
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600 border border-emerald-100">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Flagged</p>
<h3 className="text-2xl font-medium text-slate-900 mt-1 tracking-tight">3</h3>
</div>
<div className="p-2 bg-red-50 rounded-lg text-red-600 border border-red-100">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm">

<div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-4">
<h2 className="text-sm font-medium text-slate-900">Registered Entities</h2>
<div className="h-4 w-px bg-slate-200"></div>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium bg-slate-900 text-white rounded-full shadow-sm">All</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50 rounded-full transition-colors">Sellers</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50 rounded-full transition-colors">Buyers</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon>
                                Filter
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:export-linear" width="14"></iconify-icon>
                                Export
                            </button>
<button className="ml-2 flex items-center justify-center w-8 h-8 bg-slate-900 text-white rounded-md hover:bg-slate-800 transition-colors shadow-sm">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-200 bg-slate-50/50">
<th className="py-3 px-5 w-12">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Entity Name</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">GSTIN / Type</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Region</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Status</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide">Volume</th>
<th className="py-3 px-5 text-xs font-medium text-slate-500 uppercase tracking-wide text-right">Actions</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="table-row-hover border-b border-slate-100 transition-colors">
<td className="py-3 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200 flex items-center justify-center text-blue-700 font-medium text-xs">
                                                RT
                                            </div>
<div>
<div className="font-medium text-slate-900">Raj Tex Corp Pvt Ltd</div>
<div className="text-xs text-slate-400">raj.m@rajtex.in</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="font-mono text-xs text-slate-600">27ABCDE1234F1Z5</div>
<div className="text-[10px] text-slate-400 mt-0.5">Seller • Textiles</div>
</td>
<td className="py-3 px-5 text-slate-600">Mumbai, MH</td>
<td className="py-3 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Verified
                                        </div>
</td>
<td className="py-3 px-5 text-slate-600 font-medium">₹2.4Cr</td>
<td className="py-3 px-5 text-right">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover border-b border-slate-100 transition-colors">
<td className="py-3 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-200 flex items-center justify-center text-amber-700 font-medium text-xs">
                                                KE
                                            </div>
<div>
<div className="font-medium text-slate-900">Krishna Enterprises</div>
<div className="text-xs text-slate-400">purchase@krishna.com</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="font-mono text-xs text-slate-600">07GHIJK5678L2Z9</div>
<div className="text-[10px] text-slate-400 mt-0.5">Buyer • Electronics</div>
</td>
<td className="py-3 px-5 text-slate-600">Delhi, DL</td>
<td className="py-3 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-amber-100 bg-amber-50 text-amber-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                            Pending
                                        </div>
</td>
<td className="py-3 px-5 text-slate-600 font-medium">-</td>
<td className="py-3 px-5 text-right">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover border-b border-slate-100 transition-colors">
<td className="py-3 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 font-medium text-xs">
                                                VS
                                            </div>
<div>
<div className="font-medium text-slate-900">Vardan Steel Works</div>
<div className="text-xs text-slate-400">admin@vardansteel.com</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="font-mono text-xs text-slate-600">33MNOPQ9012R3Z7</div>
<div className="text-[10px] text-slate-400 mt-0.5">Seller • Construction</div>
</td>
<td className="py-3 px-5 text-slate-600">Chennai, TN</td>
<td className="py-3 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Verified
                                        </div>
</td>
<td className="py-3 px-5 text-slate-600 font-medium">₹12.8Cr</td>
<td className="py-3 px-5 text-right">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover border-b border-slate-100 transition-colors">
<td className="py-3 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-xs">
<iconify-icon icon="solar:user-block-linear" width="16"></iconify-icon>
</div>
<div>
<div className="font-medium text-slate-400 line-through">Rapid Logistics</div>
<div className="text-xs text-slate-400">contact@rapidlog.in</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="font-mono text-xs text-slate-400">19STUVW3456X4Z1</div>
<div className="text-[10px] text-slate-400 mt-0.5">Service • Logistics</div>
</td>
<td className="py-3 px-5 text-slate-400">Kolkata, WB</td>
<td className="py-3 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-red-100 bg-red-50 text-red-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            Rejected
                                        </div>
</td>
<td className="py-3 px-5 text-slate-400 font-medium">₹0</td>
<td className="py-3 px-5 text-right">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>

<tr className="table-row-hover transition-colors">
<td className="py-3 px-5">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center bg-white transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
</td>
<td className="py-3 px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-purple-100 to-pink-100 border border-purple-200 flex items-center justify-center text-purple-700 font-medium text-xs">
                                                AD
                                            </div>
<div>
<div className="font-medium text-slate-900">Aditya Distributors</div>
<div className="text-xs text-slate-400">sales@aditya.com</div>
</div>
</div>
</td>
<td className="py-3 px-5">
<div className="font-mono text-xs text-slate-600">29XYZAB7890C5Z2</div>
<div className="text-[10px] text-slate-400 mt-0.5">Seller • FMCG</div>
</td>
<td className="py-3 px-5 text-slate-600">Bangalore, KA</td>
<td className="py-3 px-5">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-700 text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Verified
                                        </div>
</td>
<td className="py-3 px-5 text-slate-600 font-medium">₹5.6Cr</td>
<td className="py-3 px-5 text-right">
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-5 py-3 border-t border-slate-200 flex items-center justify-between">
<div className="text-xs text-slate-500">
                            Showing <span className="font-medium text-slate-900">1-5</span> of <span className="font-medium text-slate-900">12,408</span>
</div>
<div className="flex items-center gap-2">
<button className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-7 h-7 flex items-center justify-center rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium">1</button>
<button className="w-7 h-7 flex items-center justify-center rounded border border-transparent text-slate-500 hover:text-slate-900 text-xs font-medium">2</button>
<button className="w-7 h-7 flex items-center justify-center rounded border border-transparent text-slate-500 hover:text-slate-900 text-xs font-medium">3</button>
<span className="text-xs text-slate-400">...</span>
<button className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="mt-8 mb-4 flex items-center justify-between text-[10px] text-slate-400">
<div>INTRADE DB v2.4.1</div>
<div className="flex gap-4">
<a className="hover:text-slate-500" href="#">Support</a>
<a className="hover:text-slate-500" href="#">API</a>
<a className="hover:text-slate-500" href="#">Status</a>
</div>
</div>
</div>
</main>

    </>
  );
}
