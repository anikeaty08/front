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
      
<div className="max-w-[1600px] mx-auto space-y-6">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="p-3 bg-emerald-50 rounded-lg shrink-0">
<i className="w-6 h-6 text-emerald-600" data-lucide="percent"></i>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Earn 20% for 2 years</h2>
<p className="text-lg leading-relaxed text-gray-500">
                        Refer market managers to LocalStalls and earn 20% commission on each referred customer’s subscription payments for up to 24 months, as long as they remain active, paying subscribers.
                    </p>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Your Affiliate Link</h3>
<p className="text-base text-gray-400 mt-1">Share this link to earn commissions on referrals</p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
<span className="text-emerald-600 text-base font-medium truncate max-w-xs bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
                    https://localstalls.instaging.net/r/3RC5BV
                </span>
<div className="flex gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="copy"></i>
                        COPY
                    </button>
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="mail"></i>
                        SEND
                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start justify-between">
<div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">4</p>
<p className="text-sm text-gray-400 mt-1">Clicks</p>
</div>
<div className="bg-gray-50 p-2 rounded-lg">
<i className="w-5 h-5 text-gray-400" data-lucide="mouse-pointer-2"></i>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start justify-between">
<div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">3</p>
<p className="text-sm text-gray-400 mt-1">Signups (On Free Trial)</p>
</div>
<div className="bg-blue-50 p-2 rounded-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="clock"></i>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start justify-between">
<div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">1</p>
<p className="text-sm text-gray-400 mt-1">Signups</p>
</div>
<div className="bg-emerald-50 p-2 rounded-lg">
<i className="w-5 h-5 text-emerald-600" data-lucide="user-plus"></i>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start justify-between">
<div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">$0.00</p>
<p className="text-sm text-gray-400 mt-1">Pending Commission</p>
</div>
<div className="bg-orange-50 p-2 rounded-lg">
<i className="w-5 h-5 text-orange-500" data-lucide="dollar-sign"></i>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex items-start justify-between">
<div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">$120.50</p>
<p className="text-sm text-gray-400 mt-1">Paid Commission</p>
</div>
<div className="bg-green-50 p-2 rounded-lg">
<i className="w-5 h-5 text-green-600" data-lucide="wallet"></i>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

<div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Referred Organisations</h3>
<div className="relative w-full sm:w-72">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-shadow" placeholder="Search" type="text"/>
</div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-gray-50 border-b border-gray-100">
<tr>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Organisation Name</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Attributed Date</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Commission Earned</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-5 text-base font-medium text-gray-900">TES AF3</td>
<td className="px-6 py-5 text-base text-gray-500">15/01/2026</td>
<td className="px-6 py-5">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-50 text-orange-600 border border-orange-100">
                                    Pending
                                </span>
</td>
<td className="px-6 py-5 text-base text-gray-500 text-right font-medium font-mono">$0.00</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-gray-100 flex items-center justify-end gap-6 text-sm text-gray-500">
<div className="flex items-center gap-2">
<span>Items per page:</span>
<select className="border border-gray-200 rounded bg-white px-2 py-1 focus:outline-none focus:border-emerald-500">
<option>25</option>
<option>50</option>
<option>100</option>
</select>
</div>
<span className="text-gray-400">1-1 of 1</span>
<div className="flex items-center gap-1">
<button className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-50" disabled=""><i className="w-4 h-4" data-lucide="chevrons-left"></i></button>
<button className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-50" disabled=""><i className="w-4 h-4" data-lucide="chevron-left"></i></button>
<button className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-50" disabled=""><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
<button className="p-1 text-gray-300 hover:text-gray-500 disabled:opacity-50" disabled=""><i className="w-4 h-4" data-lucide="chevrons-right"></i></button>
</div>
</div>
</div>
</div>


    </>
  );
}
