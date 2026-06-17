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
      

<svg className="hidden" height="0" width="0">
<filter id="noise">
<feturbulence basefrequency="0.75" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
<fecolormatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.035 0"></fecolormatrix>
</filter>
</svg>

<main className="w-full max-w-[850px] mx-auto bg-[#faf9f6] relative overflow-hidden shadow-2xl" style={{minHeight: '1200px'}}>

<div className="absolute inset-0 pointer-events-none mix-blend-multiply" style={{filter: 'url(#noise)'}}></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-[1px] border-[#1e3a8a] opacity-[0.03] pointer-events-none flex items-center justify-center flex-col justify-center gap-4">
<div className="w-[580px] h-[580px] rounded-full border-[1px] border-dashed border-[#1e3a8a]"></div>
<div className="absolute font-serif text-[#1e3a8a] tracking-tight opacity-40 text-8xl" style={{fontSize: '140px'}}>N.MEX</div>
</div>

<div className="relative z-10 p-8 md:p-14 flex flex-col h-full">

<header className="flex flex-col md:flex-row justify-between items-start gap-8 mb-6">

<div>
<h1 className="font-serif text-2xl tracking-tight text-[#1e3a8a] font-medium mb-1 uppercase">N.MEX</h1>
<p className="text-sm font-medium tracking-wide uppercase text-slate-700">Processing Authority</p>
<p className="text-xs text-slate-500 mt-0.5">Compliance &amp; Asset Division</p>
</div>

<div className="bg-white border border-slate-200 p-4 rounded-sm shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] text-xs w-full md:w-[280px]">
<div className="space-y-2.5">
<div className="flex justify-between items-center border-b border-slate-100 pb-2">
<span className="text-slate-500 tracking-wide">Receipt No:</span>
<span className="font-medium text-slate-800">NMX-RCP-2026-84721</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 pb-2">
<span className="text-slate-500 tracking-wide">Registry Node ID:</span>
<span className="font-medium text-slate-800">RNX-84721-A66-204</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 pb-2">
<span className="text-slate-500 tracking-wide">Issue Date:</span>
<span className="font-medium text-slate-800">February 22, 2026</span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="text-slate-500 tracking-wide">Status:</span>
<span className="font-medium text-[#166534] tracking-wider uppercase flex items-center gap-1.5">
<iconify-icon className="text-sm" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                PAID
                            </span>
</div>
</div>
</div>
</header>

<div className="w-full h-px bg-[#c5a059] opacity-50 mb-8"></div>

<section className="bg-[#f1f3f5] border border-slate-200/80 p-5 rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.02)] mb-8">
<h2 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Registered Client Record
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-xs text-slate-400 tracking-wide uppercase mb-1">Client Name</p>
<p className="text-sm font-medium text-slate-800">Sharday Charley</p>
</div>
<div>
<p className="text-xs text-slate-400 tracking-wide uppercase mb-1">Compliance Cycle</p>
<p className="text-sm font-medium text-slate-800">2026</p>
</div>
<div>
<p className="text-xs text-slate-400 tracking-wide uppercase mb-1">Registry Status</p>
<p className="text-sm font-medium text-slate-800">Active</p>
</div>
<div>
<p className="text-xs text-slate-400 tracking-wide uppercase mb-1">Verification Status</p>
<p className="text-sm font-medium text-slate-800">Confirmed</p>
</div>
</div>
</section>

<section className="mb-10">
<h2 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4 border-b border-slate-200 pb-2 flex items-center gap-2">
<iconify-icon icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Registered Asset Record
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">

<div className="space-y-3">
<div className="flex justify-between items-end border-b border-slate-100 border-dashed pb-1">
<span className="text-xs text-slate-500 uppercase tracking-wide">Vehicle Make</span>
<span className="text-sm font-medium text-slate-800">Chevrolet</span>
</div>
<div className="flex justify-between items-end border-b border-slate-100 border-dashed pb-1">
<span className="text-xs text-slate-500 uppercase tracking-wide">Vehicle Model</span>
<span className="text-sm font-medium text-slate-800">Silverado 1500</span>
</div>
<div className="flex justify-between items-end border-b border-slate-100 border-dashed pb-1">
<span className="text-xs text-slate-500 uppercase tracking-wide">Vehicle Year</span>
<span className="text-sm font-medium text-slate-800">2022</span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end border-b border-slate-100 border-dashed pb-1">
<span className="text-xs text-slate-500 uppercase tracking-wide">Reference ID</span>
<span className="text-sm font-medium text-slate-800 font-mono">REG-8829-AX</span>
</div>
<div className="flex justify-between items-end border-b border-slate-100 border-dashed pb-1">
<span className="text-xs text-slate-500 uppercase tracking-wide">Authorization Category</span>
<span className="text-sm font-medium text-slate-800">Digital Compliance</span>
</div>
<div className="flex justify-between items-end border-b border-slate-100 border-dashed pb-1">
<span className="text-xs text-slate-500 uppercase tracking-wide">Record Status</span>
<span className="text-sm font-medium text-slate-800">Logged &amp; Validated</span>
</div>
</div>
</div>
</section>

<section className="mb-12 flex-grow">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b-2 border-slate-300">
<th className="py-3 text-xs font-medium uppercase tracking-widest text-slate-500">Item Code</th>
<th className="py-3 text-xs font-medium uppercase tracking-widest text-slate-500 w-[35%]">Description</th>
<th className="py-3 text-xs font-medium uppercase tracking-widest text-slate-500">Date Processed</th>
<th className="py-3 text-xs font-medium uppercase tracking-widest text-slate-500 text-center">Quantity</th>
<th className="py-3 text-xs font-medium uppercase tracking-widest text-slate-500 text-right">Unit Amount</th>
<th className="py-3 text-xs font-medium uppercase tracking-widest text-slate-500 text-right">Line Total</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200/60">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 text-xs font-mono text-slate-600">NM-001</td>
<td className="py-4 text-sm font-medium text-slate-800 pr-4">Node Registration Authorization</td>
<td className="py-4 text-xs text-slate-500">February 20, 2026</td>
<td className="py-4 text-sm text-slate-700 text-center">1</td>
<td className="py-4 text-sm text-slate-600 text-right">$500.00</td>
<td className="py-4 text-sm font-medium text-slate-800 text-right">$500.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 text-xs font-mono text-slate-600">NM-002</td>
<td className="py-4 text-sm font-medium text-slate-800 pr-4">Biometric Identity &amp; Facial Binding Validation</td>
<td className="py-4 text-xs text-slate-500">February 20, 2026</td>
<td className="py-4 text-sm text-slate-700 text-center">1</td>
<td className="py-4 text-sm text-slate-600 text-right">$500.00</td>
<td className="py-4 text-sm font-medium text-slate-800 text-right">$500.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 text-xs font-mono text-slate-600">NM-003</td>
<td className="py-4 text-sm font-medium text-slate-800 pr-4">Deadline Processing Adjustment Fee</td>
<td className="py-4 text-xs text-slate-500">February 21, 2026</td>
<td className="py-4 text-sm text-slate-700 text-center">1</td>
<td className="py-4 text-sm text-slate-600 text-right">$200.00</td>
<td className="py-4 text-sm font-medium text-slate-800 text-right">$200.00</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors border-b border-slate-300">
<td className="py-4 text-xs font-mono text-slate-600">NM-004</td>
<td className="py-4 text-sm font-medium text-slate-800 pr-4">24-Hour Extension Authorization</td>
<td className="py-4 text-xs text-slate-500">February 22, 2026</td>
<td className="py-4 text-sm text-slate-700 text-center">1</td>
<td className="py-4 text-sm text-slate-600 text-right">$85.00</td>
<td className="py-4 text-sm font-medium text-slate-800 text-right">$85.00</td>
</tr>
</tbody>
</table>
</section>

<section className="flex flex-col items-end mb-16">
<div className="w-full md:w-[320px]">
<div className="w-full h-px bg-[#c5a059] opacity-60 mb-4"></div>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 uppercase tracking-wide text-xs">Subtotal:</span>
<span className="font-medium text-slate-800">$1,285.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 uppercase tracking-wide text-xs">Administrative Tax:</span>
<span className="font-medium text-slate-800">$0.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 uppercase tracking-wide text-xs">Processing Adjustments:</span>
<span className="font-medium text-slate-800">Included</span>
</div>
<div className="border-t border-slate-800 mt-4 pt-4 flex justify-between items-center">
<span className="font-medium uppercase tracking-widest text-slate-800 text-xs">Grand Total Paid:</span>
<span className="font-semibold text-base text-slate-900">$1,285.00</span>
</div>
</div>
</div>
</section>

<footer className="mt-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-end gap-10">

<div className="relative flex items-center justify-center w-36 h-36 rounded-full border border-[#c5a059] bg-[#faf9f6]" style={{boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0,0,0,0.02)'}}>
<div className="absolute inset-1.5 rounded-full border border-dashed border-[#1e3a8a] opacity-40"></div>
<div className="absolute inset-0 rounded-full border-4 border-[#faf9f6] opacity-50 shadow-[inset_0_0_10px_rgba(30,58,138,0.1)] pointer-events-none"></div>
<div className="text-center px-4 flex flex-col items-center justify-center z-10">
<iconify-icon className="text-[#1e3a8a] text-lg mb-1 opacity-80" icon="solar:shield-check-linear"></iconify-icon>
<p className="text-xs font-serif uppercase tracking-widest text-[#1e3a8a] leading-none mb-1 text-center scale-75 transform origin-center">N.MEX DIGITAL<br/>AUTHENTICATION</p>
<div className="w-8 border-t border-[#c5a059] my-1 opacity-60"></div>
<p className="text-xs uppercase text-slate-600 tracking-widest scale-75 transform origin-center whitespace-nowrap">Verified &amp; Logged</p>
<p className="text-xs uppercase text-slate-600 tracking-widest scale-75 transform origin-center whitespace-nowrap -mt-1">2026 Compliance Cycle</p>
</div>
</div>

<div className="w-full md:w-[280px] text-right">
<div className="border-b border-slate-800 pb-2 mb-2 relative h-10 flex items-end justify-end">

<svg className="absolute bottom-2 right-2 w-32 h-12 opacity-80 text-slate-700" fill="none" viewbox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
<path d="M10 40C25 25 40 10 50 20C60 30 70 50 80 40C90 30 100 10 110 20C120 30 130 50 140 40C150 30 160 20 170 25C180 30 185 40 190 35" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<p className="text-xs font-medium text-slate-800 uppercase tracking-wide">Authorized Compliance Officer</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">Registry Control Division</p>
<div className="mt-6 flex justify-end">
<span className="bg-slate-100 text-slate-500 px-3 py-1.5 rounded-sm text-xs font-mono tracking-widest border border-slate-200">
                            AUDIT CODE: APY-7X92KQ-39LMR8
                        </span>
</div>
</div>
</footer>
</div>
</main>

    </>
  );
}
