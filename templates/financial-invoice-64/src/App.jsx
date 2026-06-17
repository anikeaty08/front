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
      

<div className="paper-container paper-texture relative w-full max-w-[210mm] min-h-[297mm] p-12 md:p-16 flex flex-col justify-between">

<header className="w-full mb-8">

<div className="grid grid-cols-12 gap-6 items-start mb-6 border-b border-slate-300 pb-8">

<div className="col-span-3">
<div className="flex flex-col items-start">
<div className="text-4xl font-header tracking-tighter text-slate-900 font-bold leading-none">
                            NMEX
                        </div>
<div className="text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mt-1 ml-1">
                            Financial Group
                        </div>
</div>
</div>

<div className="col-span-5 text-center pt-1">
<h1 className="text-2xl font-serif-auth text-slate-900 tracking-tight font-bold mb-1">NMEX</h1>
<p className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium">Payment Processing &amp; Transaction Validation Network</p>
</div>

<div className="col-span-4">
<div className="bg-slate-50 border border-slate-200 p-4 shadow-sm">
<table className="w-full text-xs leading-relaxed">
<tbody>
<tr>
<td className="text-slate-500 font-medium pr-2">Invoice No:</td>
<td className="text-slate-800 font-mono text-right">NMEX-021-0126</td>
</tr>
<tr>
<td className="text-slate-500 font-medium pr-2">Issue Date:</td>
<td className="text-slate-800 text-right">February 03, 2026</td>
</tr>
<tr>
<td className="text-slate-500 font-medium pr-2">Document Type:</td>
<td className="text-slate-800 text-right">Processing Adj.</td>
</tr>
<tr>
<td className="text-slate-500 font-medium pr-2">Status:</td>
<td className="text-emerald-700 font-semibold text-right uppercase text-[0.65rem] tracking-wide">Active</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-slate-400 text-lg" icon="solar:user-circle-linear"></iconify-icon>
<h2 className="text-xs font-bold uppercase tracking-widest text-slate-700">Payer Information</h2>
</div>
<div className="bg-slate-50/80 border border-slate-200 p-6 grid grid-cols-2 gap-y-4 gap-x-12">

<div className="space-y-1">
<div className="flex justify-between border-b border-slate-200 border-dashed pb-1">
<span className="text-xs text-slate-500">Name</span>
<span className="text-sm font-semibold text-slate-900 ink-text">Sharday Charley SW</span>
</div>
<div className="flex justify-between border-b border-slate-200 border-dashed pb-1 pt-2">
<span className="text-xs text-slate-500">Role</span>
<span className="text-sm font-medium text-slate-800">Registered Vehicle Owner</span>
</div>
<div className="flex justify-between border-b border-slate-200 border-dashed pb-1 pt-2">
<span className="text-xs text-slate-500">Location</span>
<span className="text-sm font-medium text-slate-800">Albuquerque, NM 87121</span>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between border-b border-slate-200 border-dashed pb-1">
<span className="text-xs text-slate-500">Email</span>
<span className="text-sm font-medium text-slate-800">shardaycharley.sc@gmail.com</span>
</div>
<div className="flex justify-between border-b border-slate-200 border-dashed pb-1 pt-2">
<span className="text-xs text-slate-500">Phone</span>
<span className="text-sm font-medium text-slate-800">505-450-6156</span>
</div>
<div className="flex justify-between border-b border-slate-200 border-dashed pb-1 pt-2">
<span className="text-xs text-slate-500">ID Ref</span>
<span className="text-sm font-medium text-slate-800">NM-REG-8829</span>
</div>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-slate-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
<h2 className="text-xs font-bold uppercase tracking-widest text-slate-700">Transaction Reference</h2>
</div>
<div className="grid grid-cols-3 gap-6 border-t border-b border-slate-200 py-4">
<div>
<p className="text-[0.65rem] uppercase text-slate-500 mb-1">Transaction Ref</p>
<p className="text-xs font-semibold text-slate-900">Vehicle Transport Processing</p>
</div>
<div>
<p className="text-[0.65rem] uppercase text-slate-500 mb-1">Logistics Provider</p>
<p className="text-xs font-semibold text-slate-900">Evatrack Auto Logistics</p>
</div>
<div>
<p className="text-[0.65rem] uppercase text-slate-500 mb-1">Bill of Lading</p>
<p className="text-xs font-semibold text-slate-900">VICS Authorized</p>
</div>
<div>
<p className="text-[0.65rem] uppercase text-slate-500 mb-1">Verification Network</p>
<p className="text-xs font-semibold text-slate-900 flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:shield-check-linear"></iconify-icon> IMX
                        </p>
</div>
<div>
<p className="text-[0.65rem] uppercase text-slate-500 mb-1">Processing Network</p>
<p className="text-xs font-semibold text-slate-900">NMEX Global</p>
</div>
<div>
<p className="text-[0.65rem] uppercase text-slate-500 mb-1">Auth Level</p>
<p className="text-xs font-semibold text-slate-900">Tier 2</p>
</div>
</div>
</div>

<div className="mb-6 relative">

<div className="absolute -top-4 right-1/4 opacity-85 rotate-[-12deg] pointer-events-none z-10 mix-blend-multiply">
<div className="w-32 h-32 border-4 border-double border-blue-900/60 rounded-full flex flex-col items-center justify-center p-2 text-center stamp-circle">
<div className="text-[0.6rem] font-bold text-blue-900 uppercase tracking-widest mb-1">Officially</div>
<div className="text-lg font-black text-blue-900 uppercase tracking-tighter leading-none">IMX<br/>VERIFIED</div>
<div className="text-[0.5rem] font-bold text-blue-900 uppercase tracking-wide mt-1">Authentication<br/>Confirmed</div>
</div>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-100 border-y border-slate-300">
<th className="py-3 px-4 text-xs font-bold text-slate-600 uppercase tracking-wider w-1/2">Description</th>
<th className="py-3 px-4 text-xs font-bold text-slate-600 uppercase tracking-wider">Reference Code</th>
<th className="py-3 px-4 text-xs font-bold text-slate-600 uppercase tracking-wider text-center">Status</th>
<th className="py-3 px-4 text-xs font-bold text-slate-600 uppercase tracking-wider text-right">Amount</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-slate-200">
<td className="py-4 px-4 font-medium text-slate-800">Primary Processing &amp; Authorization</td>
<td className="py-4 px-4 font-mono text-xs text-slate-500">NMEX-PROC-BASE</td>
<td className="py-4 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-medium bg-slate-100 text-slate-600 uppercase tracking-wide border border-slate-200">
                                    Paid
                                </span>
</td>
<td className="py-4 px-4 text-right font-medium text-slate-500">$1,050.00</td>
</tr>
<tr className="border-b border-slate-300 bg-orange-50/30">
<td className="py-4 px-4 font-semibold text-slate-900 ink-text">Processing Re-Verification Charge</td>
<td className="py-4 px-4 font-mono text-xs text-slate-500">NMEX-PROC-RV</td>
<td className="py-4 px-4 text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[0.6rem] font-bold bg-white text-orange-700 uppercase tracking-wide border border-orange-200 shadow-sm">
                                    Pending
                                </span>
</td>
<td className="py-4 px-4 text-right font-bold text-slate-900">$500.00</td>
</tr>
</tbody>
</table>
</div>

<div className="flex justify-end mb-10">
<div className="w-1/3 space-y-2">
<div className="flex justify-between text-xs text-slate-500">
<span>Subtotal</span>
<span>$1,550.00</span>
</div>
<div className="flex justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
<span>Previously Paid</span>
<span>($1,050.00)</span>
</div>
<div className="flex justify-between items-baseline pt-1">
<span className="text-sm font-bold text-slate-800">Outstanding Balance</span>
<span className="text-xl font-serif-auth font-bold text-slate-900 ink-text">$500.00</span>
</div>
</div>
</div>

<div className="mb-12 border border-slate-300 bg-white p-5 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-300"></div>
<h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon> Processing Adjustment Explanation
                </h3>
<p className="text-sm text-slate-600 leading-relaxed text-justify">
                    Due to a delay in settlement of the original payment, the initial processing and authorization window expired prior to completion. To prevent cancellation of the transaction, NMEX conducted re-verification and re-authentication of transaction records, documentation approval, and authorization validation. The original payment remains valid and confirmed. This charge reflects the additional processing required to reinstate authorization and proceed without disruption.
                </p>
</div>
</header>

<footer className="mt-auto pt-6 relative">

<div className="absolute bottom-24 right-1/3 opacity-80 rotate-[4deg] mix-blend-multiply pointer-events-none">
<div className="border-2 border-slate-700 px-4 py-1.5 rounded-sm bg-transparent">
<div className="text-center">
<div className="text-lg font-header font-bold text-slate-800 tracking-tight leading-none">NMEX</div>
<div className="text-[0.5rem] uppercase text-slate-800 tracking-wider font-bold">Processing Validated</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-12 mb-8 items-end">

<div>
<div className="border-b border-slate-800 pb-2 mb-2 relative">

<div className="absolute -top-8 left-4 text-4xl text-blue-900 font-signature opacity-90 transform -rotate-2 mix-blend-multiply">
                            Daniel R. Hoffman
                        </div>
</div>
<div className="text-xs uppercase tracking-wider font-bold text-slate-700">Officer in Charge of Release</div>
<div className="text-sm font-serif-auth text-slate-900 mt-1">Daniel R. Hoffman</div>
<div className="text-xs text-slate-500">Processing &amp; Release Officer</div>
</div>

<div>
<div className="border-b border-slate-300 pb-2 mb-2 h-8"></div>
<div className="text-xs uppercase tracking-wider font-bold text-slate-700">Authorized by NMEX</div>
<div className="text-sm text-slate-600 mt-1">Processing Unit Approval</div>
<div className="text-xs text-slate-500">Authorization Date: <span className="font-mono text-slate-700">Feb 03, 2026</span></div>
</div>
</div>

<div className="border-t border-slate-200 pt-4 text-center">
<p className="text-[0.6rem] text-slate-400 uppercase tracking-widest">
                    This document is issued and validated through NMEX processing systems and IMX verification channels.
                </p>
</div>
</footer>
</div>

    </>
  );
}
