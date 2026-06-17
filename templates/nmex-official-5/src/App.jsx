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
      

<main className="relative w-full max-w-3xl bg-white paper-texture shadow-xl print-shadow-none mx-auto overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
<div className="opacity-[0.02] transform -rotate-45 text-[#1A2433] text-9xl font-serif-header font-bold whitespace-nowrap tracking-widest">
                NMEX OFFICIAL
            </div>
</div>

<div className="relative z-10 p-12 md:p-16 h-full flex flex-col justify-between">

<div>

<header className="flex flex-col md:flex-row justify-between items-start border-b-[0.5px] border-gray-300 pb-8 mb-10">
<div className="mb-6 md:mb-0">
<h1 className="font-serif-header text-4xl text-[#1A2433] font-bold tracking-tighter mb-2">NMEX</h1>
<div className="text-[#1A2433] uppercase text-xs tracking-[0.15em] font-medium leading-relaxed">
                            Global Processing &amp;<br/>Clearance Authority
                        </div>
<div className="text-gray-500 text-xs tracking-wide mt-1">
                            Vehicle Exit &amp; Biometric Validation
                        </div>
</div>
<div className="bg-gray-50 border-[0.5px] border-gray-200 p-5 min-w-[240px]">
<table className="w-full text-xs">
<tbody>
<tr>
<td className="text-gray-500 font-medium pb-2 pr-4 uppercase tracking-wider text-[0.65rem]">Receipt No:</td>
<td className="font-mono-num font-medium text-[#1A2433] text-right pb-2">NMX-RC-0216-2026</td>
</tr>
<tr>
<td className="text-gray-500 font-medium pb-2 pr-4 uppercase tracking-wider text-[0.65rem]">Issue Date:</td>
<td className="font-mono-num font-medium text-[#1A2433] text-right pb-2">Feb 17, 2026</td>
</tr>
<tr>
<td className="text-gray-500 font-medium pb-2 pr-4 uppercase tracking-wider text-[0.65rem]">Type:</td>
<td className="font-medium text-[#1A2433] text-right pb-2">Payment Receipt</td>
</tr>
<tr>
<td className="text-gray-500 font-medium pr-4 uppercase tracking-wider text-[0.65rem]">Status:</td>
<td className="font-bold text-[#1A2433] text-right">CONFIRMED</td>
</tr>
</tbody>
</table>
</div>
</header>

<section className="mb-10">
<h2 className="text-[0.65rem] font-bold tracking-[0.2em] text-[#1A2433] uppercase mb-3 pl-1">Client Information</h2>
<div className="border-[0.5px] border-gray-300 p-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<div>
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Name</span>
<span className="block text-sm font-medium text-[#1A2433]">Sharday Charley SW</span>
</div>
<div>
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Client ID Ref</span>
<span className="block text-sm font-mono-num font-medium text-[#1A2433]">MMX-REG-8829</span>
</div>
<div>
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Location</span>
<span className="block text-sm text-[#2E3135]">Albuquerque, NM 87121</span>
</div>
<div>
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Contact</span>
<span className="block text-sm text-[#2E3135]">shardaycharley.sc@gmail.com</span>
<span className="block text-sm text-[#2E3135] font-mono-num mt-0.5">505-450-6156</span>
</div>
</div>
</section>

<section className="mb-10">
<h2 className="text-[0.65rem] font-bold tracking-[0.2em] text-[#1A2433] uppercase mb-3 pl-1 border-b border-gray-200 pb-2">Vehicle Details</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
<div className="col-span-1">
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Make</span>
<span className="block text-sm font-medium text-[#1A2433]">Chevrolet</span>
</div>
<div className="col-span-1">
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Model</span>
<span className="block text-sm font-medium text-[#1A2433]">Silverado 1500 RST</span>
</div>
<div className="col-span-1">
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Year</span>
<span className="block text-sm font-mono-num text-[#1A2433]">2022</span>
</div>
<div className="col-span-2">
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">VIN</span>
<span className="block text-sm font-mono-num text-[#1A2433]">3GCPYBEK0NG123456</span>
</div>
<div className="col-span-2 md:col-span-5">
<span className="block text-[0.65rem] uppercase tracking-wider text-gray-500 mb-1">Registered Sender</span>
<span className="block text-sm font-medium text-[#1A2433]">Marcus H. Reynolds</span>
</div>
</div>
</section>

<section className="mb-12">
<h2 className="text-[0.65rem] font-bold tracking-[0.2em] text-[#1A2433] uppercase mb-3 pl-1">Payment Confirmation Statement</h2>
<p className="text-sm font-serif-header leading-relaxed text-[#2E3135] text-justify">
                        This document confirms that the required clearance and biometric authentication payments have been successfully received and validated under MMX processing protocols. The referenced vehicle has now satisfied the financial authorization stage required for release processing and dispatch preparation.
                    </p>
</section>

<section className="mb-10">
<h2 className="text-[0.65rem] font-bold tracking-[0.2em] text-[#1A2433] uppercase mb-4 pl-1">Payment Breakdown</h2>
<table className="w-full">
<thead>
<tr className="border-b-[1.5px] border-[#1A2433]">
<th className="text-left py-2 text-[0.65rem] uppercase tracking-wider font-bold text-[#1A2433]">Description</th>
<th className="text-right py-2 text-[0.65rem] uppercase tracking-wider font-bold text-[#1A2433]">Paid Amount (USD)</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-gray-100">
<td className="py-4 pr-4 align-top">
<div className="font-medium text-[#1A2433]">Yard Exit Clearance Fee</div>
<div className="text-xs text-gray-500 mt-1 font-light">Secured yard removal authorization and exit code generation</div>
</td>
<td className="py-4 text-right font-mono-num text-[#1A2433] align-top">$500.00</td>
</tr>
<tr className="border-b-[0.5px] border-gray-300">
<td className="py-4 pr-4 align-top">
<div className="font-medium text-[#1A2433]">Biometric Processing Charge</div>
<div className="text-xs text-gray-500 mt-1 font-light">Identity authentication and release PIN validation</div>
</td>
<td className="py-4 text-right font-mono-num text-[#1A2433] align-top">$1,000.00</td>
</tr>
</tbody>
<tfoot>
<tr>
<td className="pt-4 text-right text-xs uppercase tracking-widest font-bold text-[#1A2433]">Total Paid:</td>
<td className="pt-4 text-right font-mono-num font-bold text-lg text-[#1A2433]">$1,500.00 USD</td>
</tr>
</tfoot>
</table>
</section>
<div className="flex flex-col md:flex-row justify-between items-end border-t-[0.5px] border-gray-300 pt-8 mt-12">

<div className="mb-8 md:mb-0">
<h3 className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Payment Method</h3>
<div className="flex items-center gap-2">

<div className="text-[#1A2433] font-serif-header text-lg italic">Apple Pay</div>
</div>
</div>

<div className="w-full md:w-1/2">
<div className="bg-gray-50 p-6 border-[0.5px] border-gray-200">
<div className="text-[0.6rem] font-bold tracking-[0.15em] text-gray-400 uppercase mb-4">Authorized By</div>
<div className="font-serif-header font-bold text-[#1A2433] text-sm uppercase tracking-wide border-b border-gray-300 pb-1 mb-1 inline-block">
                                NMEX Global Processing Unit
                            </div>
<div className="text-xs text-[#2E3135] mb-6">Clearance &amp; Release Department</div>
<div className="flex justify-between items-center border-t border-gray-200 pt-3">
<div>
<span className="block text-[0.55rem] uppercase tracking-wider text-gray-400">Processing Status</span>
<span className="block text-xs font-bold text-[#1A2433] tracking-wide mt-0.5">VERIFIED</span>
</div>
<div className="text-right">
<span className="block text-[0.55rem] uppercase tracking-wider text-gray-400">Release Stage</span>
<span className="block text-xs font-bold text-[#1A2433] tracking-wide mt-0.5">ACTIVATED</span>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-16 text-center border-t-[0.5px] border-gray-200 pt-6">
<p className="text-[0.65rem] text-gray-400 uppercase tracking-wide">
                    Payment confirmed and recorded within NMEX secured processing systems. Release preparation procedures are now active.
                </p>
</footer>
</div>
</main>

    </>
  );
}
