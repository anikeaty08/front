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
      

<main className="w-full max-w-[52rem] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.04)] border border-slate-200/80 overflow-hidden flex flex-col relative">

<header className="pt-10 px-10 pb-8 bg-white relative">
<div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
<div>
<div className="flex items-center gap-2.5 mb-2">
<iconify-icon className="text-slate-900 text-2xl" icon="solar:shield-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h1 className="text-xl font-semibold tracking-tight text-slate-900 uppercase">NMEX</h1>
</div>
<p className="text-sm font-medium text-slate-900 tracking-wide mb-0.5">Clearance Administration</p>
<p className="text-xs text-slate-500">Verification &amp; Authorization Services</p>
<p className="text-xs text-slate-400 mt-0.5">Administrative Access Division</p>
</div>
<div className="hidden sm:block text-right">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">Doc Type</p>
<p className="text-sm text-slate-900 font-medium bg-slate-100 px-3 py-1 rounded-md">Form REC-9A</p>
</div>
</div>

<div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-slate-400 to-slate-100 rounded-full mb-8 opacity-80"></div>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Payment Transaction Receipt</h2>
</div>
</header>

<section className="px-10 py-8 bg-[#F8FAFC] border-t border-b border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7">
<div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm h-full relative overflow-hidden">

<div className="absolute top-5 right-5">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-emerald-50/80 text-emerald-700 border border-emerald-200/50">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Transaction Processed
                        </span>
</div>
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon> 
                        Record Information
                    </h3>
<div className="space-y-4 text-sm">
<div className="flex justify-between items-center border-b border-slate-50 pb-3">
<span className="text-slate-500">Reference File</span>
<span className="font-mono font-medium text-slate-900 tracking-tight">Nmex-RA-72639-AX</span>
</div>
<div className="flex justify-between items-center border-b border-slate-50 pb-3">
<span className="text-slate-500">Record Date</span>
<span className="font-medium text-slate-900">March 5, 2026</span>
</div>
<div className="flex justify-between items-center border-b border-slate-50 pb-3">
<span className="text-slate-500">Issued Date</span>
<span className="font-medium text-slate-900">March 6, 2026</span>
</div>
<div className="flex justify-between items-start pt-1">
<span className="text-slate-500 mt-0.5">Facility Location</span>
<div className="text-right">
<span className="font-medium text-slate-900 block">Evertrack Auto Logistics Holding Facility</span>
<span className="text-xs text-slate-500 mt-1 block">Lot: 410901 — Zone 5</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex-1">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon> 
                        Client Profile
                    </h3>
<div className="space-y-2 text-sm">
<p className="font-medium text-slate-900 text-base">Sharday Charley Stacy</p>
<p className="text-slate-500 flex items-center gap-1.5">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                            Albuquerque, NM
                        </p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex-1">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon> 
                        Vehicle Details
                    </h3>
<div className="space-y-3 text-sm">
<p className="font-medium text-slate-900 leading-snug">2022 Chevrolet Silverado 1500 RST</p>
<div className="flex items-center gap-4 text-slate-500">
<span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-600 border border-slate-200"></div> Red</span>
<span className="w-px h-3 bg-slate-300"></span>
<span className="font-mono text-xs tracking-tight">3GCPYBEK0NG123456</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-10 py-10 bg-white">
<h3 className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-5">Ledger Breakdown</h3>
<div className="border border-slate-200 rounded-xl overflow-hidden">
<table className="w-full text-sm text-left">
<thead className="bg-slate-50/80 border-b border-slate-200 text-slate-500">
<tr>
<th className="py-3 px-6 font-medium text-xs uppercase tracking-wider">Description</th>
<th className="py-3 px-6 font-medium text-xs uppercase tracking-wider text-right w-32">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6 text-slate-700">Yard Occupancy – March 3</td>
<td className="py-4 px-6 text-right font-medium text-slate-900">$70.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6 text-slate-700">Yard Occupancy – March 4</td>
<td className="py-4 px-6 text-right font-medium text-slate-900">$70.00</td>
</tr>
<tr className="bg-slate-50/30">
<td className="py-3 px-6 text-slate-500 text-right font-medium text-xs uppercase tracking-widest">Subtotal</td>
<td className="py-3 px-6 text-right font-medium text-slate-900">$140.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6 text-slate-700">
<span className="block mb-0.5">Gate Authorization Re-Activation</span>
<span className="text-xs text-slate-400">Administrative Processing Fee</span>
</td>
<td className="py-4 px-6 text-right font-medium text-slate-900 align-top">$500.00</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-8 bg-slate-900 rounded-xl p-8 flex flex-col sm:flex-row justify-between items-center relative overflow-hidden shadow-lg border border-slate-800">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 mb-6 sm:mb-0 text-center sm:text-left">
<p className="text-slate-400 text-xs font-medium uppercase tracking-widest mb-2">Total Processed Amount</p>
<p className="text-4xl font-semibold tracking-tight text-white flex items-baseline gap-1 justify-center sm:justify-start">
<span className="text-2xl text-slate-500">$</span>640<span className="text-xl text-slate-400">.00</span>
</p>
</div>
<div className="relative z-10">
<div className="border border-emerald-500/30 text-emerald-400 rounded-lg px-5 py-2.5 transform rotate-[-4deg] flex items-center gap-2 bg-emerald-950/40 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-widest uppercase text-sm">Paid in Full</span>
</div>
</div>
</div>
</section>

<section className="px-10 py-8 bg-slate-50/50 border-t border-slate-200/80 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-5 w-full md:w-auto">

<div className="w-16 h-16 bg-white border border-slate-200 rounded-lg p-1.5 flex flex-wrap gap-[2px] justify-between content-between shadow-sm relative shrink-0">
<div className="w-4 h-4 bg-slate-800 rounded-[2px] border-[1.5px] border-white ring-1 ring-slate-800"></div>
<div className="w-4 h-4 bg-slate-200 rounded-[2px]"></div>
<div className="w-4 h-4 bg-slate-800 rounded-[2px] border-[1.5px] border-white ring-1 ring-slate-800"></div>
<div className="w-4 h-4 bg-slate-300 rounded-[2px]"></div>
<div className="w-4 h-4 bg-slate-800 rounded-[2px]"></div>
<div className="w-4 h-4 bg-slate-200 rounded-[2px]"></div>
<div className="w-4 h-4 bg-slate-800 rounded-[2px] border-[1.5px] border-white ring-1 ring-slate-800"></div>
<div className="w-4 h-4 bg-slate-400 rounded-[2px]"></div>
<div className="w-4 h-4 bg-slate-900 rounded-[2px]"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-sm">
<div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
</div>
</div>
</div>
<div>
<p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mb-1 flex items-center gap-1">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon> System Reference
                    </p>
<p className="text-lg font-mono font-medium tracking-tight text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block shadow-sm">NMEX-SYS-029X</p>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">

<div className="flex gap-[3px] h-8 items-end opacity-70 mix-blend-multiply">
<div className="w-1 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-2.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-0.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-1.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-1 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-3.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-0.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-2 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-1 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-1.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-0.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-2.5 h-full bg-slate-800 rounded-t-[1px]"></div>
<div className="w-1 h-full bg-slate-800 rounded-t-[1px]"></div>
</div>
<div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 uppercase tracking-widest bg-slate-200/50 px-2 py-1 rounded">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span>Digital Validation Active</span>
</div>
</div>
</section>

<footer className="px-10 py-6 bg-slate-900 text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-center md:text-left">
<p className="text-sm font-medium text-slate-200">NMEX Clearance Administration</p>
<p className="text-xs mt-0.5">Operations Processing Division</p>
</div>
<div className="max-w-md text-center md:text-right">
<p className="text-[11px] leading-relaxed opacity-60">
                    This document represents a system-generated transaction summary for internal logistics processing records. Unauthorized duplication is restricted.
                </p>
</div>
</footer>
</main>

    </>
  );
}
