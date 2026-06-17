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
      

<aside className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex z-20">
<div className="h-14 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tighter">
                    R
                </div>
<span className="text-sm font-semibold tracking-tight text-gray-900">RST Portal</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-900" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Testing Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:file-text-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Reports
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Manufacturers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Inventory
            </a>
</div>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 border border-gray-200"></div>
<div>
<p className="text-xs font-medium text-gray-900">Lab Technician</p>
<p className="text-xs text-gray-500">admin@rst.gov</p>
</div>
<button className="ml-auto text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-14 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 md:px-8 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<nav className="flex items-center text-sm text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">Reports</span>
<iconify-icon className="mx-2 text-gray-400" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-gray-900 font-medium">January 2026</span>
</nav>
</div>
<div className="flex items-center gap-3">
<span className="hidden md:inline-block text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded border border-gray-200">Draft</span>
<button className="flex items-center gap-2 text-xs font-medium bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors shadow-sm">
<iconify-icon icon="solar:printer-linear" width="14"></iconify-icon>
                    Print Report
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 no-scrollbar">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">Random Sample Testing</h1>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                            For the Month of January-2026
                        </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between group hover:border-gray-300 transition-all">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Bulk Explosives</p>
<p className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">45 <span className="text-sm font-normal text-gray-400">MT</span></p>
</div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-600 group-hover:bg-gray-100 transition-colors">
<iconify-icon icon="solar:bomb-emoji-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between group hover:border-gray-300 transition-all">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Accessories</p>
<p className="text-2xl font-semibold text-gray-900 mt-1 tracking-tight">103 <span className="text-sm font-normal text-gray-400">Units</span></p>
</div>
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-600 group-hover:bg-gray-100 transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-tight">NPLD (Column)</h3>
</div>
<span className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm">Unit: MT</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium w-16 text-center" scope="col">#</th>
<th className="px-6 py-3 font-medium" scope="col">Manufacturer</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Allocation</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Samples</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">1</td>
<td className="px-6 py-3 font-medium text-gray-900">SBL ENERGY LTD</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">21.60</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">2</td>
<td className="px-6 py-3 font-medium text-gray-900">Ideal Industries Explosives Limited</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">16.00</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">3</td>
<td className="px-6 py-3 font-medium text-gray-900">Solar Industries India Ltd</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">11.20</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">4</td>
<td className="px-6 py-3 font-medium text-gray-900">NAVBHARAT FUSE COMPANY LTD.</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">5.60</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">5</td>
<td className="px-6 py-3 font-medium text-gray-900">BLACK DIAMOND EXPLOSIVES PVT LTD</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">5.60</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
</tbody>
<tfoot className="bg-gray-50/50 border-t border-gray-200">
<tr>
<td className="px-6 py-3"></td>
<td className="px-6 py-3 text-xs font-semibold uppercase text-gray-500 tracking-wider">Total</td>
<td className="px-6 py-3 text-right font-semibold text-gray-900 font-mono">60.00</td>
<td className="px-6 py-3 text-right font-semibold text-gray-900">5</td>
</tr>
</tfoot>
</table>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<div className="w-1 h-4 bg-orange-500 rounded-full"></div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-tight">NPLD (Booster)</h3>
</div>
<span className="text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded shadow-sm">Unit: MT</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium w-16 text-center" scope="col">#</th>
<th className="px-6 py-3 font-medium" scope="col">Manufacturer</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Allocation</th>
<th className="px-6 py-3 font-medium text-right" scope="col">Samples</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">1</td>
<td className="px-6 py-3 font-medium text-gray-900">SBL ENERGY LTD</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">5.40</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">2</td>
<td className="px-6 py-3 font-medium text-gray-900">Ideal Industries Explosives Limited</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">4.00</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">3</td>
<td className="px-6 py-3 font-medium text-gray-900">Solar Industries India Ltd</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">2.80</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">4</td>
<td className="px-6 py-3 font-medium text-gray-900">NAVBHARAT FUSE COMPANY LTD.</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">1.40</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
<tr className="bg-white hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-center text-gray-400">5</td>
<td className="px-6 py-3 font-medium text-gray-900">BLACK DIAMOND EXPLOSIVES PVT LTD</td>
<td className="px-6 py-3 text-right text-gray-600 font-mono">1.40</td>
<td className="px-6 py-3 text-right text-gray-600">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">1</span>
</td>
</tr>
</tbody>
<tfoot className="bg-gray-50/50 border-t border-gray-200">
<tr>
<td className="px-6 py-3"></td>
<td className="px-6 py-3 text-xs font-semibold uppercase text-gray-500 tracking-wider">Total</td>
<td className="px-6 py-3 text-right font-semibold text-gray-900 font-mono">15.00</td>
<td className="px-6 py-3 text-right font-semibold text-gray-900">5</td>
</tr>
</tfoot>
</table>
</div>
</div>

<div className="flex items-center justify-center pt-8 pb-12">
<p className="text-xs text-gray-400">Generated automatically by RST System • CONFIDENTIAL</p>
</div>
</div>
</div>
</main>

    </>
  );
}
