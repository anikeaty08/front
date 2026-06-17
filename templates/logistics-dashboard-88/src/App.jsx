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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<nav className="bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between sticky top-0 z-40">
<div className="flex items-center gap-8">
<div className="font-medium tracking-tight text-xl text-slate-900">KOLI</div>
<div className="h-5 w-px bg-slate-200"></div>

<button className="flex items-center gap-1.5 text-base font-normal text-slate-700 hover:text-slate-900 transition-colors">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i>
                Akwa Central Hub
                <i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-4 text-slate-500">
<button className="hover:text-slate-800 transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<img alt="Admin" className="w-9 h-9 rounded-full object-cover border border-slate-200 shadow-sm cursor-pointer" src="https://i.pravatar.cc/150?u=admin_koli"/>
</div>
</nav>

<main className="flex-1 w-full max-w-[1920px] mx-auto px-6 py-8 pb-32">

<div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900">Relay Inventory &amp; Global Log</h1>
<p className="text-base text-slate-500 mt-1">Manage and track all shipments arriving and departing from your assigned hub.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 text-base font-normal rounded-lg shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="printer" strokeWidth="1.5"></i> Print Manifest
                </button>
<button className="px-4 py-2 bg-slate-900 text-white text-base font-normal rounded-lg shadow-sm hover:bg-slate-800 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus-circle" strokeWidth="1.5"></i> Manual Entry
                </button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 mb-6">
<div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full xl:w-auto">

<div className="relative w-full md:w-80">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full pl-9 pr-4 py-2 text-base bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:bg-white transition-colors placeholder-slate-400" placeholder="Search Order ID, Customer, Tracking..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="text-sm text-slate-400 bg-white border border-slate-200 rounded px-1.5 py-0.5 shadow-sm">⌘</span>
<span className="text-sm text-slate-400 bg-white border border-slate-200 rounded px-1.5 py-0.5 shadow-sm">K</span>
</div>
</div>

<div className="flex bg-slate-100/80 p-1 rounded-lg border border-slate-200 overflow-x-auto w-full md:w-auto hide-scrollbar">
<button className="px-3.5 py-1.5 text-base font-normal bg-white text-slate-900 rounded-md shadow-sm border border-slate-200/50 whitespace-nowrap">All Stock</button>
<button className="px-3.5 py-1.5 text-base font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors whitespace-nowrap">In Stock</button>
<button className="px-3.5 py-1.5 text-base font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors whitespace-nowrap">Pending Collection</button>
<button className="px-3.5 py-1.5 text-base font-normal text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Overdue
                        </button>
<button className="px-3.5 py-1.5 text-base font-normal text-slate-600 hover:text-slate-900 hover:bg-slate-200/50 rounded-md transition-colors whitespace-nowrap">Withdrawn Today</button>
</div>
</div>

<div className="flex items-center gap-3 w-full xl:w-auto">
<button className="flex-1 xl:flex-none flex justify-between items-center gap-2 px-3.5 py-2 text-base bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 text-slate-700 transition-colors">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="store" strokeWidth="1.5"></i> All Merchants</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="flex-1 xl:flex-none flex justify-between items-center gap-2 px-3.5 py-2 text-base bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 text-slate-700 transition-colors">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="package" strokeWidth="1.5"></i> Cargo Type</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 text-slate-600 transition-colors" title="More Filters">
<i className="w-4 h-4" data-lucide="sliders-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-slate-50/80 border-b border-slate-200 text-sm font-medium text-slate-500 uppercase tracking-wider">
<th className="px-4 py-3 w-12 text-center">
<div className="w-4 h-4 border border-slate-300 rounded mx-auto bg-white flex items-center justify-center cursor-pointer hover:border-slate-400"></div>
</th>
<th className="px-4 py-3">Order ID</th>
<th className="px-4 py-3">Customer</th>
<th className="px-4 py-3">Cargo Ref</th>
<th className="px-4 py-3">Storage Location</th>
<th className="px-4 py-3">Stock Status</th>
<th className="px-4 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-base">

<tr className="hover:bg-slate-50/50 transition-colors group bg-purple-50/10">
<td className="px-4 py-4 text-center">
<div className="w-4 h-4 border border-purple-600 rounded mx-auto bg-purple-600 flex items-center justify-center cursor-pointer shadow-sm text-white">
<i className="w-3 h-3" data-lucide="check" strokeWidth="2"></i>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<div>
<div className="text-base font-medium text-slate-900 tracking-tight">#KOLI-8941</div>
<div className="text-sm text-slate-500 mt-0.5">Oct 23, 2023</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<img alt="Aisha Diallo" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 bg-slate-50" src="https://i.pravatar.cc/150?u=aisha_d"/>
<div>
<div className="font-normal text-slate-900 flex items-center gap-1.5">
                                            Aisha Diallo
                                            <i className="w-3.5 h-3.5 text-blue-500" data-lucide="check-circle" strokeWidth="2" title="Verified Customer"></i>
</div>
<div className="text-sm text-slate-500">+221 77 123 45 67</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-normal bg-slate-900 text-white shadow-sm">
                                    Cargo #12 - Air
                                </span>
</td>
<td className="px-4 py-4">
<div className="font-normal text-slate-800">Shelf A-4</div>
<div className="text-sm text-slate-500 mt-0.5">Bin 12</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-normal bg-purple-50 text-purple-700 border border-purple-200">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> In Stock
                                </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-normal px-3 py-1.5 rounded-md transition-colors shadow-sm">
                                        Mark Delivery
                                    </button>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="text-slate-400 hover:text-[#25D366] transition-colors p-1.5 rounded hover:bg-slate-50" title="Remind Customer">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</button>
<button className="text-slate-400 hover:text-slate-800 transition-colors p-1.5 rounded hover:bg-slate-50" title="Details">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group bg-purple-50/10">
<td className="px-4 py-4 text-center">
<div className="w-4 h-4 border border-purple-600 rounded mx-auto bg-purple-600 flex items-center justify-center cursor-pointer shadow-sm text-white">
<i className="w-3 h-3" data-lucide="check" strokeWidth="2"></i>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<div>
<div className="text-base font-medium text-slate-900 tracking-tight">#KOLI-8943</div>
<div className="text-sm text-slate-500 mt-0.5">Oct 24, 2023</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<img alt="Moussa Kane" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 bg-slate-50" src="https://i.pravatar.cc/150?u=moussa_k"/>
<div>
<div className="font-normal text-slate-900 flex items-center gap-1.5">
                                            Moussa Kane
                                        </div>
<div className="text-sm text-slate-500">+221 76 987 65 43</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-normal bg-slate-900 text-white shadow-sm">
                                    Cargo #12 - Air
                                </span>
</td>
<td className="px-4 py-4">
<div className="font-normal text-slate-800">Shelf B-1</div>
<div className="text-sm text-slate-500 mt-0.5">Bin 04</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-normal bg-amber-50 text-amber-700 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Pending Pickup
                                </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-normal px-3 py-1.5 rounded-md transition-colors shadow-sm">
                                        Scan QR
                                    </button>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="text-[#25D366] hover:text-[#1da851] transition-colors p-1.5 rounded hover:bg-slate-50" title="Resend Reminder">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</button>
<button className="text-slate-400 hover:text-slate-800 transition-colors p-1.5 rounded hover:bg-slate-50" title="Details">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>

<tr className="bg-red-50/40 hover:bg-red-50/80 transition-colors group">
<td className="px-4 py-4 text-center">
<div className="w-4 h-4 border border-slate-300 rounded mx-auto bg-white flex items-center justify-center cursor-pointer hover:border-slate-400"></div>
</td>
<td className="px-4 py-4">
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<div>
<div className="text-base font-medium text-slate-900 tracking-tight">#KOLI-8810</div>
<div className="text-sm text-slate-500 mt-0.5">Oct 02, 2023</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<img alt="Fatou Sow" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 bg-slate-50" src="https://i.pravatar.cc/150?u=fatou_s"/>
<div>
<div className="font-normal text-slate-900 flex items-center gap-1.5">
                                            Fatou Sow
                                        </div>
<div className="text-sm text-red-500 font-normal">Unreachable</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-normal bg-white border border-slate-200 text-slate-600 shadow-sm">
                                    Cargo #08 - Sea
                                </span>
</td>
<td className="px-4 py-4">
<div className="font-normal text-slate-800">Shelf D-9</div>
<div className="text-sm text-slate-500 mt-0.5">Bin 22</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-normal bg-red-100 text-red-700 border border-red-200">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span> Overdue
                                </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="bg-white border border-red-200 text-red-600 hover:bg-red-50 text-sm font-normal px-3 py-1.5 rounded-md transition-colors shadow-sm">
                                        Return to Sender
                                    </button>
<div className="w-px h-4 bg-red-200 mx-1"></div>
<button className="text-slate-400 hover:text-red-600 transition-colors p-1.5 rounded hover:bg-white" title="Final Warning">
<i className="w-4 h-4" data-lucide="alert-triangle" strokeWidth="1.5"></i>
</button>
<button className="text-slate-400 hover:text-slate-800 transition-colors p-1.5 rounded hover:bg-white" title="Details">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group opacity-75 hover:opacity-100">
<td className="px-4 py-4 text-center">
<div className="w-4 h-4 border border-slate-300 rounded mx-auto bg-white flex items-center justify-center cursor-pointer hover:border-slate-400"></div>
</td>
<td className="px-4 py-4">
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<div>
<div className="text-base font-medium text-slate-900 tracking-tight line-through decoration-slate-300">#KOLI-8912</div>
<div className="text-sm text-slate-500 mt-0.5">Oct 23, 2023</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<img alt="Ibrahima Ndiaye" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 bg-slate-50 grayscale opacity-80" src="https://i.pravatar.cc/150?u=ibrahima_n"/>
<div>
<div className="font-normal text-slate-900 flex items-center gap-1.5">
                                            Ibrahima Ndiaye
                                        </div>
<div className="text-sm text-slate-500">Picked up today</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-normal bg-white border border-slate-200 text-slate-500 shadow-sm">
                                    Cargo #11 - Air
                                </span>
</td>
<td className="px-4 py-4">
<div className="font-normal text-slate-400">-</div>
<div className="text-sm text-slate-400 mt-0.5">Cleared</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-normal bg-emerald-50 text-emerald-700 border border-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle" strokeWidth="1.5"></i> Withdrawn
                                </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="text-slate-400 hover:text-slate-800 transition-colors p-1.5 rounded hover:bg-slate-50 flex items-center gap-1.5 text-sm font-normal border border-transparent hover:border-slate-200 px-2.5">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i> Receipt
                                    </button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/50 transition-colors group bg-purple-50/10 border-b-0">
<td className="px-4 py-4 text-center">
<div className="w-4 h-4 border border-purple-600 rounded mx-auto bg-purple-600 flex items-center justify-center cursor-pointer shadow-sm text-white">
<i className="w-3 h-3" data-lucide="check" strokeWidth="2"></i>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-start gap-2.5">
<i className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<div>
<div className="text-base font-medium text-slate-900 tracking-tight">#KOLI-8948</div>
<div className="text-sm text-slate-500 mt-0.5">Oct 24, 2023</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-3">
<img alt="Coumba Diop" className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0 bg-slate-50" src="https://i.pravatar.cc/150?u=coumba_d"/>
<div>
<div className="font-normal text-slate-900 flex items-center gap-1.5">
                                            Coumba Diop
                                        </div>
<div className="text-sm text-slate-500">+221 70 555 12 34</div>
</div>
</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-normal bg-slate-900 text-white shadow-sm">
                                    Cargo #12 - Air
                                </span>
</td>
<td className="px-4 py-4">
<div className="font-normal text-slate-800">Shelf A-2</div>
<div className="text-sm text-slate-500 mt-0.5">Bin 08</div>
</td>
<td className="px-4 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-sm font-normal bg-purple-50 text-purple-700 border border-purple-200">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> In Stock
                                </span>
</td>
<td className="px-4 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-normal px-3 py-1.5 rounded-md transition-colors shadow-sm">
                                        Mark Delivery
                                    </button>
<div className="w-px h-4 bg-slate-200 mx-1"></div>
<button className="text-slate-400 hover:text-[#25D366] transition-colors p-1.5 rounded hover:bg-slate-50" title="Remind Customer">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</button>
<button className="text-slate-400 hover:text-slate-800 transition-colors p-1.5 rounded hover:bg-slate-50" title="Details">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white border-t border-slate-200 px-4 py-3 flex items-center justify-between">
<div className="text-base text-slate-500 font-normal">
                    Showing <span className="text-slate-900 font-medium">1</span> to <span className="text-slate-900 font-medium">5</span> of <span className="text-slate-900 font-medium">4,250</span> items
                </div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 border border-slate-200 rounded-md text-base font-normal text-slate-400 bg-slate-50 cursor-not-allowed" disabled="">
                        Previous
                    </button>
<div className="flex items-center gap-1 hidden sm:flex">
<button className="w-8 h-8 flex items-center justify-center border border-purple-600 bg-purple-50 text-purple-700 rounded-md text-base font-normal">1</button>
<button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-slate-100 text-slate-600 rounded-md text-base font-normal transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-slate-100 text-slate-600 rounded-md text-base font-normal transition-colors">3</button>
<span className="text-slate-400 px-1">...</span>
<button className="w-8 h-8 flex items-center justify-center border border-transparent hover:bg-slate-100 text-slate-600 rounded-md text-base font-normal transition-colors">85</button>
</div>
<button className="px-3 py-1.5 border border-slate-200 rounded-md text-base font-normal text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
                        Next
                    </button>
</div>
</div>
</div>
</main>

<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-sm text-white px-2 py-2 rounded-full shadow-2xl border border-slate-700/50 flex items-center gap-1 z-50 animate-fade-in-up transition-all duration-300">
<div className="flex items-center gap-2 pl-4 pr-3 text-base font-normal text-slate-200">
<div className="w-5 h-5 bg-purple-500 rounded-sm text-white flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="2"></i>
</div>
<span>3 Selected</span>
</div>
<div className="w-px h-6 bg-slate-700 mx-1"></div>
<button className="px-4 py-2 hover:bg-slate-800 rounded-full transition-colors flex items-center gap-2 text-base font-normal text-slate-100 group">
<i className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" data-lucide="package-check" strokeWidth="1.5"></i> 
            Bulk Delivered
        </button>
<button className="px-4 py-2 hover:bg-slate-800 rounded-full transition-colors flex items-center gap-2 text-base font-normal text-slate-100 group">
<i className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" data-lucide="qr-code" strokeWidth="1.5"></i> 
            Transfer QR
        </button>
<button className="px-4 py-2 hover:bg-slate-800 rounded-full transition-colors flex items-center gap-2 text-base font-normal text-slate-100 group">
<i className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" data-lucide="bell" strokeWidth="1.5"></i> 
            Bulk Reminder
        </button>
<button className="w-8 h-8 ml-1 flex items-center justify-center hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white" title="Clear Selection">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<style>
        /* Hide scrollbar for tabs */
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translate(-50%, 20px); }
            to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
    </style>

    </>
  );
}
