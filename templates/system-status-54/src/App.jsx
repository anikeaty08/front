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
      

<nav className="fixed top-0 w-full z-50 border-b border-gray-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-lg shadow-sm">
<span className="font-semibold text-sm tracking-tighter">D</span>
</div>
<span className="font-medium text-sm tracking-tight text-gray-500">DOMINO <span className="text-gray-300">/</span> DRIFTWOOD</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-gray-600">All Systems Operational</span>
</div>
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200 flex items-center justify-center">
<span className="text-xs font-medium text-gray-600">JS</span>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-28 pb-12 px-6">
<div className="max-w-6xl mx-auto space-y-12">

<div className="text-center space-y-4 max-w-2xl mx-auto">
<h1 className="text-4xl font-medium tracking-tight text-gray-900">Unified Invoice Intelligence</h1>
<p className="text-gray-500 text-lg font-normal tracking-tight">
                    Seamlessly bridging construction data with financial management. 
                    Real-time synchronization between project sites and the ledger.
                </p>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10 transform -translate-y-1/2"></div>

<div className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
<div className="p-6 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-indigo-50 rounded-lg border border-indigo-100">
<i className="w-6 h-6 text-indigo-600" data-lucide="hard-hat"></i>
</div>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">Construction</span>
</div>
<h2 className="text-xl font-medium tracking-tight mb-1">NorthSpyre</h2>
<p className="text-sm text-gray-500 mb-6">Project budgets &amp; vendor invoices</p>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Pending Approval</span>
<span className="font-medium text-gray-900">12 Invoices</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-indigo-500 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="flex justify-between items-center text-xs text-gray-400 mt-1">
<span>Project A: 8</span>
<span>Project B: 4</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<button className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600 font-medium py-2.5 px-4 rounded-lg transition-all text-sm group-hover:shadow-sm">
                                Login to Portal
                                <i className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="relative bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200/60 shadow-sm flex flex-col items-center justify-center p-6 text-center z-10 lg:my-8 lg:scale-105">
<div className="mb-4 relative">
<div className="w-16 h-16 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center relative z-10">
<i className="w-6 h-6 text-gray-400" data-lucide="arrow-right-left"></i>
</div>

<div className="absolute top-0 left-0 w-16 h-16 rounded-full border border-emerald-500/30 animate-ping"></div>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1">Sync Active</h3>
<p className="text-xs text-gray-500 mb-4">Last sync: 2 mins ago</p>
<div className="w-full max-w-[200px] space-y-3">
<div className="flex items-center gap-3 text-xs text-gray-600 bg-white border border-gray-100 p-2 rounded shadow-sm">
<i className="w-3 h-3 text-emerald-500" data-lucide="check-circle"></i>
<span>Batch #8922 Processed</span>
</div>
<div className="flex items-center gap-3 text-xs text-gray-600 bg-white border border-gray-100 p-2 rounded shadow-sm opacity-60">
<i className="w-3 h-3 text-blue-500 animate-spin" data-lucide="loader"></i>
<span>Validating GL Codes...</span>
</div>
</div>
<button className="mt-6 text-xs font-medium text-gray-400 hover:text-gray-900 underline underline-offset-2 transition-colors">
                        View Integration Logs
                    </button>
</div>

<div className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
<div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
<div className="p-6 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
<i className="w-6 h-6 text-blue-600" data-lucide="landmark"></i>
</div>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">Finance</span>
</div>
<h2 className="text-xl font-medium tracking-tight mb-1">NetSuite</h2>
<p className="text-sm text-gray-500 mb-6">GL posting &amp; payment management</p>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-center text-sm">
<span className="text-gray-500">Ready to Pay</span>
<span className="font-medium text-gray-900">$1.2M</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-600 h-1.5 rounded-full" style={{width: '78%'}}></div>
</div>
<div className="flex justify-between items-center text-xs text-gray-400 mt-1">
<span>Vendors: 14</span>
<span>Due: Today</span>
</div>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<button className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 hover:border-blue-300 hover:text-blue-600 font-medium py-2.5 px-4 rounded-lg transition-all text-sm group-hover:shadow-sm">
                                Login to Portal
                                <i className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200 pt-10">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-gray-900">Recent Transactions</h3>
<div className="flex gap-2">

<div className="flex p-0.5 bg-gray-100 rounded-lg border border-gray-200">
<button className="px-3 py-1 text-xs font-medium text-gray-900 bg-white rounded-md shadow-sm">Live</button>
<button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900">Historic</button>
</div>
<button className="p-1.5 text-gray-400 hover:text-gray-900 border border-gray-200 rounded-md bg-white">
<i className="w-3.5 h-3.5" data-lucide="filter"></i>
</button>
</div>
</div>
<div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
<table className="w-full text-sm text-left">
<thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
<tr>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wide">Invoice ID</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wide">Source</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wide">Vendor</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wide">Amount</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wide">Status</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wide text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-gray-600">INV-2023-001</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                        NorthSpyre
                                    </div>
</td>
<td className="px-6 py-4 text-gray-900 font-medium">SteelWorks Inc.</td>
<td className="px-6 py-4 text-gray-600">$45,200.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100/50">
                                        Synced
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-gray-600">INV-2023-004</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                        NorthSpyre
                                    </div>
</td>
<td className="px-6 py-4 text-gray-900 font-medium">Alpha Concrete</td>
<td className="px-6 py-4 text-gray-600">$12,850.50</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100/50">
<i className="w-3 h-3 animate-spin" data-lucide="refresh-cw"></i> Processing
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-gray-600">NS-PAY-992</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                                        NetSuite
                                    </div>
</td>
<td className="px-6 py-4 text-gray-900 font-medium">Urban Glass</td>
<td className="px-6 py-4 text-gray-600">$8,200.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                        Queued
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-900"><i className="w-4 h-4" data-lucide="more-horizontal"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
<footer className="border-t border-gray-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-xs text-gray-500">
<div className="flex gap-6">
<a className="hover:text-gray-900" href="#">System Status</a>
<a className="hover:text-gray-900" href="#">API Documentation</a>
<a className="hover:text-gray-900" href="#">Support</a>
</div>
<div>
                © 2023 Driftwood Capital
            </div>
</div>
</footer>


    </>
  );
}
