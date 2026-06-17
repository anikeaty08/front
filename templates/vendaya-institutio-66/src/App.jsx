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
      

<aside className="lg:w-64 flex flex-col lg:px-6 transition-all duration-300 bg-white w-20 z-20 border-gray-200 border-r pt-8 pr-4 pb-8 pl-4 justify-between">
<div className="flex flex-col gap-10">

<div className="flex items-center gap-3 pl-1">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white shrink-0">
<i className="w-4 h-4" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<span className="hidden lg:block font-serif text-lg tracking-tight font-medium">Vendaya</span>
</div>

<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-3 py-3 bg-gray-50 text-black rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="layout-grid" strokeWidth="1.5"></i>
<span className="hidden lg:block text-sm font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-500 hover:text-black hover:bg-gray-50 rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="scale" strokeWidth="1.5"></i>
<span className="hidden lg:block text-sm font-medium">Reserve</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-500 hover:text-black hover:bg-gray-50 rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
<span className="hidden lg:block text-sm font-medium">Ledger</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-500 hover:text-black hover:bg-gray-50 rounded-xl transition-colors" href="#">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="hidden lg:block text-sm font-medium">Reports</span>
</a>
</nav>
</div>

<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 border border-gray-100 flex items-center justify-center text-xs font-serif text-gray-600">
                VR
            </div>
<div className="hidden lg:flex flex-col">
<span className="text-xs font-medium text-gray-900">Member VR-992</span>
<span className="text-[10px] text-gray-500 uppercase tracking-wider">Institutional</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-y-auto bg-[#F8F9FA] relative">

<header className="w-full px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 className="text-2xl font-serif tracking-tight text-gray-900">Dashboard</h1>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    System Operational • Q3 2024 Period
                </p>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm text-gray-500">
<i className="w-4 h-4 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
<span>Search ledger...</span>
</div>
<button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-500 hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="bell" strokeWidth="1.5"></i>
</button>
</div>
</header>

<div className="flex-1 p-8 pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-[1600px]">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-48 h-48" data-lucide="bar-chart-2" strokeWidth="1"></i>
</div>
<div className="flex justify-between items-start mb-8 relative z-10">
<div className="">
<h2 className="text-xs uppercase tracking-widest text-gray-400 font-medium mb-2">Total Allocated Value</h2>
<div className="flex items-baseline gap-1">
<span className="font-serif text-5xl md:text-6xl tracking-tight text-gray-900">$84,290,000</span>
<span className="text-2xl text-gray-300 font-serif font-light">.00</span>
</div>
</div>
<div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-100 text-xs font-medium text-green-600 flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="trending-up" strokeWidth="1.5"></i>
                            +2.4% Yield
                        </div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Active Units</div>
<div className="text-lg font-medium text-gray-900">42,500 <span className="text-gray-400 text-xs font-normal">VU</span></div>
</div>
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Coverage</div>
<div className="text-lg font-medium text-gray-900">102.4%</div>
</div>
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Liquidity</div>
<div className="text-lg font-medium text-gray-900">High</div>
</div>
<div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
<div className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Last Audit</div>
<div className="text-lg font-medium text-gray-900">Oct 01</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex-1 flex flex-col overflow-hidden">
<div className="p-6 border-b border-gray-100 flex justify-between items-center">
<h3 className="font-serif text-xl tracking-tight text-gray-900">Capital Activity</h3>
<button className="text-xs text-gray-400 hover:text-black uppercase tracking-wider font-medium flex items-center gap-1 transition-colors">
                            View All <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-gray-50/50">
<tr className="">
<th className="py-4 pl-6 pr-4 font-medium text-[10px] uppercase tracking-wider text-gray-400">Date</th>
<th className="py-4 px-4 font-medium text-[10px] uppercase tracking-wider text-gray-400">Type</th>
<th className="py-4 px-4 font-medium text-[10px] uppercase tracking-wider text-gray-400 text-right">Amount</th>
<th className="py-4 pl-4 pr-6 font-medium text-[10px] uppercase tracking-wider text-gray-400 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50">
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-6 pr-4 text-sm text-gray-500 font-mono">Oct 12, 2024</td>
<td className="py-4 px-4 text-sm font-medium text-gray-900">Liquidity Injection</td>
<td className="py-4 px-4 text-sm text-gray-900 font-serif text-right">+ $2,450,000</td>
<td className="py-4 pl-4 pr-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] uppercase tracking-wide font-medium text-gray-600">
                                            Settled
                                        </span>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-6 pr-4 text-sm text-gray-500 font-mono">Oct 10, 2024</td>
<td className="py-4 px-4 text-sm font-medium text-gray-900">Allocation Transfer</td>
<td className="py-4 px-4 text-sm text-gray-900 font-serif text-right">- $850,000</td>
<td className="py-4 pl-4 pr-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] uppercase tracking-wide font-medium text-gray-600">
                                            Settled
                                        </span>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-6 pr-4 text-sm text-gray-500 font-mono">Oct 05, 2024</td>
<td className="py-4 px-4 text-sm font-medium text-gray-900">Institutional Deposit</td>
<td className="py-4 px-4 text-sm text-gray-900 font-serif text-right">+ $5,000,000</td>
<td className="py-4 pl-4 pr-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] uppercase tracking-wide font-medium text-blue-700">
                                            Audited
                                        </span>
</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="py-4 pl-6 pr-4 text-sm text-gray-500 font-mono">Oct 01, 2024</td>
<td className="py-4 px-4 text-sm font-medium text-gray-900">Quarterly Yield</td>
<td className="py-4 px-4 text-sm text-gray-900 font-serif text-right">+ $42,100</td>
<td className="py-4 pl-4 pr-6 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-100 border border-gray-200 text-[10px] uppercase tracking-wide font-medium text-gray-600">
                                            Settled
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-[#0A0A0A] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg flex flex-col justify-between min-h-[300px]">

<div className="absolute -right-10 -top-10 w-48 h-48 bg-gray-800/50 rounded-full blur-3xl"></div>
<div className="absolute left-10 bottom-10 w-32 h-32 bg-gray-800/30 rounded-full blur-2xl"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6 text-gray-400">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-[10px] uppercase tracking-[0.2em]">Reserve Anchor</span>
</div>
<div className="space-y-6">
<div>
<div className="text-3xl font-serif tracking-tight">24,500 <span className="text-sm text-gray-500 font-sans">oz</span></div>
<div className="text-xs text-gray-500 mt-1">System Gold Reserve</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-3xl font-serif tracking-tight">842,900</div>
<div className="text-xs text-gray-500 mt-1">Units Outstanding</div>
</div>
</div>
</div>
<div className="relative z-10 mt-8 pt-6 border-t border-white/10">
<div className="flex justify-between items-end">
<div className="text-xs text-gray-400 max-w-[80%] leading-relaxed">
                                Gold functions as a reserve anchor within the system. Members hold value units.
                            </div>
<i className="w-6 h-6 text-white" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex-1">
<h3 className="font-serif text-lg tracking-tight text-gray-900 mb-6">Institutional Reporting</h3>
<div className="flex flex-col gap-3">
<a className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="file-bar-chart" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Quarterly Statement</div>
<div className="text-[10px] text-gray-400 uppercase tracking-wide">Q3 2024 • PDF</div>
</div>
</div>
<i className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" data-lucide="arrow-down-to-line" strokeWidth="1.5"></i>
</a>
<a className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Reserve Policy</div>
<div className="text-[10px] text-gray-400 uppercase tracking-wide">Updated Oct 01</div>
</div>
</div>
<i className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" data-lucide="arrow-down-to-line" strokeWidth="1.5"></i>
</a>
<a className="group flex items-center justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200" href="#">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Audit Confirmation</div>
<div className="text-[10px] text-gray-400 uppercase tracking-wide">Verified</div>
</div>
</div>
<i className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" data-lucide="arrow-down-to-line" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
