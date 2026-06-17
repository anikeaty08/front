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
      

<div className="relative w-full max-w-4xl bg-[#fcfcf8] shadow-2xl overflow-hidden flex flex-col" style={{minHeight: '1414px', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E\')'}}>

<div className="p-12 sm:p-16 flex-grow flex flex-col relative z-10">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none flex flex-col items-center justify-center z-0">
<div className="w-[32rem] h-[32rem] rounded-full border-[8px] border-slate-900 flex flex-col items-center justify-center p-12 text-center relative">
<div className="absolute inset-4 border-2 border-dashed border-slate-900 rounded-full"></div>
<span className="text-4xl font-semibold tracking-tight uppercase text-slate-900 mb-6">N.MEX Authority</span>
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" style={{fontSize: '8rem'}}></iconify-icon>
<span className="text-2xl font-medium tracking-widest uppercase text-slate-900 mt-6">Verified</span>
</div>
</div>

<header className="flex flex-col sm:flex-row justify-between items-start gap-8 z-10 relative">

<div className="flex flex-col">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-2xl text-slate-800" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">N.MEX</h1>
</div>
<h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase">Processing Authority</h2>
<p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Compliance &amp; Asset Division</p>
</div>

<div className="bg-white border border-slate-300 shadow-sm p-5 min-w-[16rem]">
<div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
<span className="text-slate-500 font-medium">Invoice No:</span>
<span className="text-slate-900 font-semibold text-right font-mono">NMX-INV-2026-84721</span>
<span className="text-slate-500 font-medium">Issue Date:</span>
<span className="text-slate-900 text-right">Feb 21, 2026</span>
<span className="text-slate-500 font-medium mt-2">Status:</span>
<span className="text-emerald-700 font-semibold text-right mt-2 uppercase tracking-wide flex justify-end items-center gap-1">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
                            PAID
                        </span>
</div>
</div>
</header>

<div className="w-full h-[1px] bg-[#cda34f] opacity-70 my-8 shadow-sm"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 z-10 relative">

<section>
<h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:user-id-linear"></iconify-icon>
                        Registered Client Record
                    </h3>
<div className="bg-slate-50 border border-slate-200 shadow-sm p-6 h-full">
<div className="flex flex-col gap-2 text-sm">
<div className="flex justify-between border-b border-slate-200/60 pb-2">
<span className="text-slate-500">Entity Name:</span>
<span className="text-slate-900 font-medium text-right">Jane Doe Enterprises</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 py-2">
<span className="text-slate-500">Registry ID:</span>
<span className="text-slate-900 font-mono text-right">CLN-992-B4V</span>
</div>
<div className="flex justify-between border-b border-slate-200/60 py-2">
<span className="text-slate-500">Address line 1:</span>
<span className="text-slate-900 text-right">1400 Bureaucratic Blvd</span>
</div>
<div className="flex justify-between py-2">
<span className="text-slate-500">Address line 2:</span>
<span className="text-slate-900 text-right">District 4, N.MEX 88201</span>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-3 flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:box-minimalistic-linear"></iconify-icon>
                        Registered Asset Record
                    </h3>
<div className="bg-slate-50 border border-slate-200 shadow-sm p-6 h-full">
<div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
<div className="flex flex-col border-b border-slate-200/60 pb-2">
<span className="text-slate-500 text-xs mb-1">Make</span>
<span className="text-slate-900 font-medium">Sample Brand</span>
</div>
<div className="flex flex-col border-b border-slate-200/60 pb-2">
<span className="text-slate-500 text-xs mb-1">Model</span>
<span className="text-slate-900 font-medium">Sample Model</span>
</div>
<div className="flex flex-col">
<span className="text-slate-500 text-xs mb-1">Year</span>
<span className="text-slate-900 font-medium">2022</span>
</div>
<div className="flex flex-col">
<span className="text-slate-500 text-xs mb-1">Reference ID</span>
<span className="text-slate-900 font-mono font-medium">REG-8829-AX</span>
</div>
</div>
</div>
</section>
</div>

<section className="mb-10 z-10 relative flex-grow">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b-2 border-slate-300">
<th className="py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/6">Item Code</th>
<th className="py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/2">Description</th>
<th className="py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center w-1/12">Qty</th>
<th className="py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right w-1/6">Unit Amt</th>
<th className="py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right w-1/6">Line Total</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-2 font-mono text-slate-600">001-ADM</td>
<td className="py-4 px-2 text-slate-800">Administrative Processing Service</td>
<td className="py-4 px-2 text-center text-slate-600">1</td>
<td className="py-4 px-2 text-right text-slate-600">$150.00</td>
<td className="py-4 px-2 text-right font-medium text-slate-800">$150.00</td>
</tr>
<tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-2 font-mono text-slate-600">004-IDV</td>
<td className="py-4 px-2 text-slate-800">Identity Validation Review</td>
<td className="py-4 px-2 text-center text-slate-600">1</td>
<td className="py-4 px-2 text-right text-slate-600">$75.00</td>
<td className="py-4 px-2 text-right font-medium text-slate-800">$75.00</td>
</tr>
<tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-2 font-mono text-slate-600">012-CMP</td>
<td className="py-4 px-2 text-slate-800">Compliance Documentation Fee</td>
<td className="py-4 px-2 text-center text-slate-600">1</td>
<td className="py-4 px-2 text-right text-slate-600">$45.00</td>
<td className="py-4 px-2 text-right font-medium text-slate-800">$45.00</td>
</tr>
<tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors bg-slate-50/30">
<td className="py-4 px-2 font-mono text-slate-600">AST-204</td>
<td className="py-4 px-2 text-slate-800">Registered Property Item – Women’s Footwear <span className="text-slate-500 text-xs block mt-0.5">(Asset Ref. 204)</span></td>
<td className="py-4 px-2 text-center text-slate-600">1</td>
<td className="py-4 px-2 text-right text-slate-600">$0.00</td>
<td className="py-4 px-2 text-right font-medium text-slate-800">$0.00</td>
</tr>
</tbody>
</table>
</section>

<div className="mt-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-end z-10 relative">

<div className="flex flex-col order-2 md:order-1">
<div className="mb-8 relative w-max">

<div className="w-32 h-32 rounded-full border border-slate-300 shadow-inner bg-slate-50/80 flex flex-col items-center justify-center p-3 text-center absolute -top-16 -left-4 pointer-events-none opacity-90" style={{boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), 0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}>
<div className="absolute inset-1 border border-dashed border-[#cda34f] rounded-full opacity-60"></div>
<span className="text-xs font-semibold tracking-widest text-[#1e293b]">N.MEX</span>
<span className="text-xs leading-tight mt-1 text-[#1e293b] opacity-80 uppercase scale-90">Digital<br/>Auth</span>
<iconify-icon className="text-xl mt-1 text-[#cda34f]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
</div>
<div className="mt-16">
<div className="w-64 border-b border-slate-800 mb-2 h-8 relative">

<svg className="absolute bottom-1 left-2 w-48 h-12 opacity-80 text-slate-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 200 50">
<path d="M10,40 C20,10 40,20 50,40 C60,10 80,40 100,20 C120,40 140,10 160,30 C170,10 180,40 190,20"></path>
<path d="M45,25 L65,25"></path>
<path d="M110,45 C120,45 130,35 140,45"></path>
</svg>
</div>
<p className="text-sm font-semibold text-slate-900">Authorized Compliance Officer</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-0.5">Registry Control Division</p>
<p className="text-xs text-slate-400 font-mono mt-3">Audit Code: APY-7X92KQ-39LMR8</p>
</div>
</div>

<div className="flex flex-col order-1 md:order-2 md:items-end">
<div className="w-full sm:w-80 text-sm">
<div className="flex justify-between py-2 text-slate-600">
<span>Subtotal</span>
<span className="font-medium text-slate-800">$270.00</span>
</div>
<div className="flex justify-between py-2 text-slate-600">
<span>Administrative Fee (Fixed)</span>
<span className="font-medium text-slate-800">$0.00</span>
</div>
<div className="flex justify-between py-2 text-slate-600">
<span>Tax (0.00%)</span>
<span className="font-medium text-slate-800">$0.00</span>
</div>

<div className="w-full h-[1px] bg-[#cda34f] opacity-70 my-3"></div>
<div className="flex justify-between py-2 items-center">
<span className="text-base text-slate-800 font-medium">Grand Total</span>
<span className="text-xl font-semibold tracking-tight text-slate-900">$270.00</span>
</div>
<div className="flex justify-end mt-1">
<span className="text-xs text-slate-500 font-mono">USD CURRENCY</span>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center border-t border-slate-200 pt-6 z-10 relative">
<p className="text-xs text-slate-400 uppercase tracking-wider">
                    Fictional document created for portfolio and design demonstration purposes only.
                </p>
</div>
</div>
</div>

    </>
  );
}
