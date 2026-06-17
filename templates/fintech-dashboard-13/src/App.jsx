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
      

<aside className="w-64 bg-[#2b2244] flex flex-col h-full flex-shrink-0 relative z-20">

<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs font-medium text-purple-300/80 tracking-wider">CAMPUS CONNECT</div>
<div className="text-lg font-semibold text-white tracking-tight leading-none">StudPay</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<span className="font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
<span className="font-medium">Students</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="font-medium">Payments</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="shield-alert" strokeWidth="1.5"></i>
<span className="font-medium">Dispute Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<span className="font-medium">Reconciliation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="landmark" strokeWidth="1.5"></i>
<span className="font-medium">Smart Treasury</span>
</a>
<div className="my-2 border-t border-white/5"></div>

<a className="flex items-center gap-3 px-3 py-2 bg-[#423166] text-white rounded-lg transition-colors relative" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-purple-400 rounded-r-full"></div>
<i className="w-5 h-5" data-lucide="building-2" strokeWidth="1.5"></i>
<span className="font-medium">B2B Mass Invoicing</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="megaphone" strokeWidth="1.5"></i>
<span className="font-medium">Campaigns</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="font-medium">Reports</span>
</a>
</div>

<div className="p-4 border-t border-white/5 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="settings" strokeWidth="1.5"></i>
<span className="font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-purple-200/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">
<i className="w-5 h-5" data-lucide="log-out" strokeWidth="1.5"></i>
<span className="font-medium">Log Out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#f4f5f7]">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0 z-10">
<div className="flex items-center gap-2 text-base text-gray-500">
<i className="w-4 h-4" data-lucide="layout" strokeWidth="1.5"></i>
<a className="hover:text-gray-900 transition-colors" href="#">Dashboard</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<a className="hover:text-gray-900 transition-colors" href="#">B2B</a>
<i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-gray-900 font-medium">Mass Invoicing</span>
</div>
<div className="flex items-center gap-4">
<button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-100 rounded-full transition-colors relative">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
</button>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-semibold text-base cursor-pointer">
                    JD
                </div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative pb-32">
<div className="max-w-[1400px] mx-auto">

<div className="mb-6">
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight">Batch Invoicing</h1>
<p className="text-lg text-gray-500 mt-1">Select validated students to generate and sync invoices with OPCOs.</p>
</div>

<div className="bg-white/70 backdrop-blur-xl border border-white shadow-sm rounded-2xl p-4 mb-6 flex flex-wrap items-center gap-4 sticky top-0 z-20">

<div className="relative flex-1 min-w-[280px]">
<i className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm" placeholder="Search by Student Name or Contract ID..." type="text"/>
</div>

<div className="relative">
<select className="appearance-none bg-white border border-gray-200 rounded-xl pl-4 pr-10 py-2.5 text-base text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 cursor-pointer shadow-sm min-w-[160px]">
<option value="">All OPCOs</option>
<option selected="" value="atlas">OPCO Atlas</option>
<option value="akto">AKTO</option>
<option value="ep">Constructys</option>
</select>
<i className="w-4 h-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>

<div className="relative">
<div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-base text-gray-700 font-medium cursor-pointer hover:border-gray-300 transition-colors shadow-sm">
<i className="w-4 h-4 text-gray-500" data-lucide="calendar" strokeWidth="1.5"></i>
<span>Sep 2023 - Dec 2023</span>
</div>
</div>
<div className="w-px h-8 bg-gray-200 mx-2 hidden sm:block"></div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="block w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-100 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5 shadow-sm"></div>
</div>
<span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">100% Signed Docs Only</span>
</label>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-200 bg-gray-50/50">
<th className="py-4 px-6 w-14">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-purple-500 peer-checked:border-purple-500 flex items-center justify-center transition-colors shadow-sm">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
</label>
</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 tracking-wide uppercase">Apprentice</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 tracking-wide uppercase">B2B Entity</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 tracking-wide uppercase text-right">Certified Hours</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 tracking-wide uppercase text-right">Billable Amount</th>
<th className="py-4 px-6 text-sm font-medium text-gray-500 tracking-wide uppercase text-center">Docs Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-purple-500 peer-checked:border-purple-500 flex items-center justify-center transition-colors shadow-sm">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
</label>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<img alt="Lucas Martin" className="w-10 h-10 rounded-full border border-gray-200 shadow-sm object-cover" src="https://i.pravatar.cc/150?u=lucas"/>
<div>
<div className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Lucas Martin</div>
<div className="text-base text-gray-500">ID: STU-2023-0842</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-base font-medium border border-blue-100">
                                            OPCO Atlas
                                        </div>
</td>
<td className="py-4 px-6 text-right text-lg text-gray-600">450h</td>
<td className="py-4 px-6 text-right">
<span className="text-lg font-semibold text-gray-900">€ 6 750,00</span>
</td>
<td className="py-4 px-6 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-base font-medium border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            Ready
                                        </div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-purple-500 peer-checked:border-purple-500 flex items-center justify-center transition-colors shadow-sm">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
</label>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<img alt="Emma Wilson" className="w-10 h-10 rounded-full border border-gray-200 shadow-sm object-cover" src="https://i.pravatar.cc/150?u=emma"/>
<div>
<div className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Emma Wilson</div>
<div className="text-base text-gray-500">ID: STU-2023-0911</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-base font-medium border border-blue-100">
                                            OPCO Atlas
                                        </div>
</td>
<td className="py-4 px-6 text-right text-lg text-gray-600">320h</td>
<td className="py-4 px-6 text-right">
<span className="text-lg font-semibold text-gray-900">€ 4 800,00</span>
</td>
<td className="py-4 px-6 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-base font-medium border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            Ready
                                        </div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-purple-500 peer-checked:border-purple-500 flex items-center justify-center transition-colors shadow-sm">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
</label>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<img alt="Théo Bernard" className="w-10 h-10 rounded-full border border-gray-200 shadow-sm object-cover" src="https://i.pravatar.cc/150?u=theo"/>
<div>
<div className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Théo Bernard</div>
<div className="text-base text-gray-500">ID: STU-2023-1004</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-base font-medium border border-blue-100">
                                            OPCO Atlas
                                        </div>
</td>
<td className="py-4 px-6 text-right text-lg text-gray-600">400h</td>
<td className="py-4 px-6 text-right">
<span className="text-lg font-semibold text-gray-900">€ 6 000,00</span>
</td>
<td className="py-4 px-6 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-base font-medium border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            Ready
                                        </div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group">
<td className="py-4 px-6">
<label className="relative flex items-center cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-white border border-gray-300 rounded peer-checked:bg-purple-500 peer-checked:border-purple-500 flex items-center justify-center transition-colors shadow-sm">
<i className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" strokeWidth="2"></i>
</div>
</label>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 font-medium text-lg shadow-sm">
                                                LD
                                            </div>
<div>
<div className="text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors">Léa Dupont</div>
<div className="text-base text-gray-500">ID: STU-2023-1122</div>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="inline-flex items-center px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-base font-medium border border-blue-100">
                                            OPCO Atlas
                                        </div>
</td>
<td className="py-4 px-6 text-right text-lg text-gray-600">380h</td>
<td className="py-4 px-6 text-right">
<span className="text-lg font-semibold text-gray-900">€ 5 700,00</span>
</td>
<td className="py-4 px-6 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-base font-medium border border-emerald-100">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            Ready
                                        </div>
</td>
</tr>

<tr className="hover:bg-gray-50/50 transition-colors group opacity-60 pointer-events-none">
<td className="py-4 px-6 text-center text-gray-500 text-base italic border-t border-gray-100" colspan="6">
                                         + 41 more students matching criteria...
                                     </td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 ml-32 z-50 w-[calc(100%-24rem)] max-w-4xl">

<div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 rounded-2xl blur-lg opacity-70"></div>
<div className="relative bg-white/95 backdrop-blur-xl border border-purple-100 shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-6">
<div className="flex items-center gap-4 pl-2">
<div className="w-12 h-12 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
<i className="w-6 h-6" data-lucide="check-square" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-lg font-medium text-gray-600">
<span className="text-purple-600 font-semibold">45 Students</span> Selected
                        </div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight leading-none mt-1">
                            Total: € 124 000,00
                        </div>
</div>
</div>
<button className="bg-gradient-to-r from-[#b583f5] to-[#8d49e8] hover:from-[#a66cf0] hover:to-[#7a32d6] text-white px-8 py-4 rounded-xl font-medium text-lg shadow-md shadow-purple-500/20 transition-all active:scale-[0.98] flex items-center gap-3 border border-purple-400/30 group">
<i className="w-5 h-5 group-hover:animate-pulse" data-lucide="sparkles" strokeWidth="1.5"></i>
                    Generate 45 Invoices &amp; Export to Chorus Pro (Factur-X)
                </button>
</div>
</div>
</main>


    </>
  );
}
