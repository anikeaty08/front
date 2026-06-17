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
      

<main className="w-full max-w-4xl animate-item">

<div className="flex justify-between items-center mb-6 animate-item delay-100">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-black text-white rounded-lg flex items-center justify-center shadow-sm">
<span className="font-manrope font-semibold tracking-tighter text-lg">Ac</span>
</div>
<div>
<h1 className="font-manrope font-medium text-lg tracking-tight text-black leading-none">Acme Corp.</h1>
<span className="text-xs text-stone-500 font-medium">Payroll ID: #PAY-2023-009</span>
</div>
</div>
<div className="flex gap-3">
<button className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-medium text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-neutral-50 hover:text-black transition-colors focus:ring-2 focus:ring-stone-200 outline-none">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Print
                </button>
<button className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-black border border-black rounded-lg hover:bg-stone-800 transition-colors shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 outline-none">
<iconify-icon icon="solar:download-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Download PDF
                </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.02)] border border-stone-200 overflow-hidden animate-item delay-200">

<div className="p-6 sm:p-8 border-b border-stone-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-6">
<div>
<p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Employee</p>
<h2 className="font-manrope font-medium text-xl text-black tracking-tight">Jordan Micheal</h2>
<p className="text-sm text-stone-500 mt-1">Senior Product Designer</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-stone-400 mb-1">Employee ID</p>
<p className="text-sm font-medium text-stone-700">EMP-8834</p>
</div>
<div>
<p className="text-xs text-stone-400 mb-1">Tax Code</p>
<p className="text-sm font-medium text-stone-700">1250L</p>
</div>
<div>
<p className="text-xs text-stone-400 mb-1">Pay Date</p>
<p className="text-sm font-medium text-stone-700">Oct 28, 2023</p>
</div>
<div>
<p className="text-xs text-stone-400 mb-1">Pay Period</p>
<p className="text-sm font-medium text-stone-700">Oct 01 - Oct 31</p>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-lg p-6 border border-stone-100 flex flex-col justify-center items-center text-center md:items-end md:text-right relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Net Pay Amount</p>
<h3 className="font-manrope font-medium text-4xl text-black tracking-tight mb-2">$4,285.50</h3>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-200/50 border border-stone-200">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium text-stone-600">Paid Direct Deposit</span>
</div>
</div>
</div>
</div>

<div className="animate-item delay-300">
<div className="px-6 sm:px-8 py-4 bg-neutral-50/50 border-b border-stone-200 flex items-center justify-between">
<h4 className="font-manrope font-medium text-sm text-black">Earnings</h4>
<span className="text-xs text-stone-400 font-medium">Standard &amp; Overtime</span>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone-200">
<th className="px-6 sm:px-8 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider w-1/3">Description</th>
<th className="px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">Rate</th>
<th className="px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">Hours</th>
<th className="px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">This Period</th>
<th className="px-6 sm:px-8 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">YTD</th>
</tr>
</thead>
<tbody className="text-sm text-stone-700">
<tr className="group hover:bg-neutral-50 transition-colors border-b border-stone-100">
<td className="px-6 sm:px-8 py-4 font-medium text-stone-900 group-hover:text-black">Base Salary</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">$62.50</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">80.00</td>
<td className="px-4 py-4 text-right font-medium text-stone-900 tabular-nums">$5,000.00</td>
<td className="px-6 sm:px-8 py-4 text-right text-stone-500 tabular-nums">$50,000.00</td>
</tr>
<tr className="group hover:bg-neutral-50 transition-colors border-b border-stone-100">
<td className="px-6 sm:px-8 py-4 font-medium text-stone-900 group-hover:text-black">Performance Bonus</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">-</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">-</td>
<td className="px-4 py-4 text-right font-medium text-stone-900 tabular-nums">$500.00</td>
<td className="px-6 sm:px-8 py-4 text-right text-stone-500 tabular-nums">$2,500.00</td>
</tr>
<tr className="bg-stone-50/50">
<td className="px-6 sm:px-8 py-3 text-xs font-medium text-stone-500 text-right uppercase tracking-wider" colspan="3">Gross Earnings</td>
<td className="px-4 py-3 text-right font-semibold text-stone-900 tabular-nums border-l border-stone-200/50">$5,500.00</td>
<td className="px-6 sm:px-8 py-3 text-right text-stone-500 tabular-nums">$52,500.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="animate-item delay-400">
<div className="px-6 sm:px-8 py-4 bg-neutral-50/50 border-b border-stone-200 border-t border-stone-200 flex items-center justify-between">
<h4 className="font-manrope font-medium text-sm text-black">Taxes &amp; Deductions</h4>
<span className="text-xs text-stone-400 font-medium">Statutory &amp; Voluntary</span>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone-200">
<th className="px-6 sm:px-8 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider w-1/2">Description</th>
<th className="px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">Current</th>
<th className="px-6 sm:px-8 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider text-right">YTD</th>
</tr>
</thead>
<tbody className="text-sm text-stone-700">
<tr className="group hover:bg-neutral-50 transition-colors border-b border-stone-100">
<td className="px-6 sm:px-8 py-4 font-medium text-stone-900">Federal Income Tax</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">-$824.50</td>
<td className="px-6 sm:px-8 py-4 text-right text-stone-500 tabular-nums">-$8,245.00</td>
</tr>
<tr className="group hover:bg-neutral-50 transition-colors border-b border-stone-100">
<td className="px-6 sm:px-8 py-4 font-medium text-stone-900">Social Security</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">-$310.00</td>
<td className="px-6 sm:px-8 py-4 text-right text-stone-500 tabular-nums">-$3,100.00</td>
</tr>
<tr className="group hover:bg-neutral-50 transition-colors border-b border-stone-100">
<td className="px-6 sm:px-8 py-4 font-medium text-stone-900">Health Insurance (Pre-tax)</td>
<td className="px-4 py-4 text-right text-stone-500 tabular-nums">-$80.00</td>
<td className="px-6 sm:px-8 py-4 text-right text-stone-500 tabular-nums">-$800.00</td>
</tr>
<tr className="bg-stone-50/50">
<td className="px-6 sm:px-8 py-3 text-xs font-medium text-stone-500 text-right uppercase tracking-wider">Total Deductions</td>
<td className="px-4 py-3 text-right font-semibold text-rose-600/90 tabular-nums border-l border-stone-200/50">-$1,214.50</td>
<td className="px-6 sm:px-8 py-3 text-right text-stone-500 tabular-nums">-$12,145.00</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="px-6 sm:px-8 py-8 bg-neutral-50 border-t border-stone-200 animate-item delay-500">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex items-start gap-3">
<div className="p-2 bg-white rounded-lg border border-stone-200 text-stone-400">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-stone-900">Chase Bank Checking</p>
<p className="text-xs text-stone-500 mt-0.5">**** **** **** 4589</p>
</div>
</div>
<div className="w-full md:w-auto">
<div className="flex justify-between items-center gap-8 mb-2">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Gross Pay</span>
<span className="text-sm font-medium text-stone-900 tabular-nums">$5,500.00</span>
</div>
<div className="flex justify-between items-center gap-8 mb-3">
<span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Deductions</span>
<span className="text-sm font-medium text-rose-600/90 tabular-nums">-$1,214.50</span>
</div>
<div className="h-px bg-stone-200 w-full mb-3"></div>
<div className="flex justify-between items-center gap-8">
<span className="text-sm font-semibold text-black tracking-tight">Net Pay</span>
<span className="font-manrope font-semibold text-xl text-black tabular-nums tracking-tight">$4,285.50</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-stone-200/50 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-400 font-medium">
                        Generated on Oct 28, 2023 09:30 AM EST
                    </p>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-stone-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">Confidential Document</span>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
