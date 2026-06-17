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
      

<main className="w-full max-w-5xl bg-white shadow-xl shadow-slate-200/50 print-shadow-none border border-slate-200 relative overflow-hidden flex flex-col min-h-screen">

<div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none z-0">
<iconify-icon className="text-[40rem] text-slate-900" icon="solar:shield-bold"></iconify-icon>
</div>
<div className="relative z-10 p-12 md:p-16 flex-grow flex flex-col">

<header className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-8 mb-10">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-slate-900" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h1 className="text-2xl font-semibold tracking-tighter text-slate-900 uppercase">
                            N.MEX
                        </h1>
<span className="text-lg font-medium tracking-tight text-slate-400 uppercase border-l border-slate-300 pl-3 ml-1">
                            Clearance Authority
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                        Administrative Access &amp; Release Command Division
                    </p>
</div>
<div className="mt-6 md:mt-0 text-right">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 uppercase">
                        Official Invoice
                    </h2>
<p className="text-xs font-mono-custom text-slate-400 mt-1 uppercase tracking-wider">
                        Document Control Level 3
                    </p>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<div className="border border-slate-200 rounded-sm bg-slate-50/50">
<div className="px-5 py-3 border-b border-slate-200 bg-slate-100/50 flex justify-between items-center">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Clearance Record</h3>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 uppercase tracking-wide">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
                            Confirmed
                        </span>
</div>
<div className="p-5 grid grid-cols-1 gap-4">
<div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Invoice No</span>
<span className="text-sm font-medium font-mono-custom text-slate-900">NMEX-INV-2402-AX8829</span>
</div>
<div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Release File No</span>
<span className="text-sm font-medium font-mono-custom text-slate-900">REF-8829-AX</span>
</div>
<div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Audit Code</span>
<span className="text-sm font-medium font-mono-custom text-slate-900">APY-7X92KQ-39LMR8</span>
</div>
<div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Issue Date</span>
<span className="text-sm font-medium text-slate-900">February 24, 2026</span>
</div>
<div className="flex flex-col gap-1 pt-1">
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Processing Division</span>
<span className="text-sm font-medium text-slate-900">Gate Operations &amp; Base Identification Unit</span>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-sm">
<div className="px-5 py-3 border-b border-slate-200 bg-slate-100/50">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700">Client / Subject Information</h3>
</div>
<div className="p-5 flex flex-col h-[calc(100%-45px)] justify-center">
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">
                            Sharday Charley
                        </h4>
<div className="grid grid-cols-1 gap-4">
<div>
<span className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Clearance Category</span>
<span className="block text-sm font-medium text-slate-800 border-l-2 border-slate-300 pl-3 py-0.5">Base ID Issuance &amp; Gate Exit Authorization</span>
</div>
<div>
<span className="block text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Processing Type</span>
<span className="block text-sm font-medium text-slate-800 border-l-2 border-slate-300 pl-3 py-0.5">Internal Release Validation</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-12 overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b-2 border-slate-800">
<th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 w-2/5">Description</th>
<th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900">Reference Code</th>
<th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900">Processing Level</th>
<th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 text-center">Qty</th>
<th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 text-right">Unit Cost</th>
<th className="py-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-900 text-right">Line Total</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 border-b border-slate-800">
<tr className="group hover:bg-slate-50/50 transition-colors">
<td className="py-5 px-4 text-sm font-medium text-slate-900">Main Gate Processing &amp; Base Identification Activation</td>
<td className="py-5 px-4 text-sm font-mono-custom text-slate-600">GATE-BASE-04</td>
<td className="py-5 px-4 text-sm text-slate-600">Administrative Review<br/><span className="text-xs text-slate-400 mt-0.5 inline-block">(3-Hour Validation Cycle)</span></td>
<td className="py-5 px-4 text-sm font-medium text-slate-900 text-center">1</td>
<td className="py-5 px-4 text-sm font-medium text-slate-900 text-right">$500.00</td>
<td className="py-5 px-4 text-sm font-medium text-slate-900 text-right">$500.00</td>
</tr>
</tbody>
</table>
</section>

<section className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

<div className="w-full md:w-1/2 grid grid-cols-2 gap-x-8 gap-y-6 bg-slate-50 p-6 border border-slate-200 rounded-sm">
<div>
<p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Payment Status</p>
<p className="text-sm font-medium text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-base" icon="solar:wallet-check-linear"></iconify-icon>
                            CONFIRMED
                        </p>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Clearance Status</p>
<p className="text-sm font-medium text-emerald-700 flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-base" icon="solar:shield-check-linear"></iconify-icon>
                            APPROVED
                        </p>
</div>
<div className="col-span-2 border-t border-slate-200 pt-4">
<p className="text-xs font-medium uppercase tracking-wider text-slate-500 mb-1">Base ID Status</p>
<p className="text-sm font-mono-custom font-medium text-slate-900 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            ACTIVE
                        </p>
</div>
</div>

<div className="w-full md:w-5/12">
<div className="flex justify-between items-center py-2 border-b border-slate-200">
<span className="text-sm font-medium text-slate-600">Subtotal</span>
<span className="text-sm font-medium text-slate-900">$500.00</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-slate-200">
<span className="text-sm font-medium text-slate-600">Administrative Validation Fee</span>
<span className="text-sm font-medium text-slate-400 italic">Included</span>
</div>
<div className="flex justify-between items-center py-4 mt-2">
<span className="text-base font-semibold uppercase tracking-wider text-slate-900">Total Amount Paid</span>
<span className="text-xl font-semibold tracking-tight text-slate-900">$500.00</span>
</div>
</div>
</section>

<section className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-12 border-t border-slate-200">

<div className="flex flex-col w-full">
<div className="h-16 border-b border-slate-800 relative w-full">

<svg className="absolute bottom-1 left-2 w-48 h-12 stroke-slate-800 opacity-80" fill="none" viewbox="0 0 200 50">
<path d="M10 40 C 20 20, 30 10, 40 30 C 50 50, 60 40, 70 20 C 75 10, 80 5, 90 20 C 100 40, 110 30, 120 15 C 130 0, 140 10, 150 25 C 160 40, 170 35, 180 20 C 185 15, 190 20, 195 35" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs font-medium uppercase tracking-wider text-slate-500 mt-3">Authorized Clearance Officer</span>
</div>

<div className="flex justify-center md:justify-start pl-0 md:pl-8 border-l-0 md:border-l border-slate-200">
<div className="border-2 border-slate-300 rounded-sm p-3 inline-flex flex-col items-center justify-center opacity-80 rotate-[-2deg]">
<iconify-icon className="text-2xl text-slate-700 mb-1" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-widest font-semibold text-slate-700 text-center leading-tight">
                            Digital Validation<br/>Stamp
                        </span>
</div>
</div>

<div className="text-left md:text-right flex flex-col items-start md:items-end w-full">
<div className="flex flex-col items-start md:items-end gap-1">
<span className="text-xs font-medium uppercase tracking-wider text-slate-500">Internal System Verification Code</span>

<div className="flex h-8 w-full md:w-48 bg-slate-100 p-1 mb-1 opacity-70">
<div className="w-1 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-2 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-0.5 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-1.5 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-3 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-0.5 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-1 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-2 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-0.5 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-1 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-1 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-2 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-0.5 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-3 bg-slate-900 h-full mx-[1px]"></div>
<div className="w-1 bg-slate-900 h-full mx-[1px]"></div>
</div>
<span className="text-xs font-mono-custom font-medium text-slate-800 tracking-widest">NMEX-SECURE-VAL-029X</span>
</div>
</div>
</section>
</div>

<footer className="bg-slate-900 text-slate-400 py-6 px-12 text-center relative z-10 mt-auto">
<p className="text-xs font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
                This document serves as official confirmation of administrative processing and Base Identification activation within the N.MEX internal clearance system.
            </p>
</footer>
</main>

    </>
  );
}
