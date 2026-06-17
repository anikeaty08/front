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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<div className="bg-white w-full max-w-[560px] rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] border border-slate-100 p-8 md:p-10">

<h1 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-10">Membership</h1>

<div className="bg-slate-50/80 rounded-2xl p-6 mb-8 border border-slate-100">
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-slate-200/60 pb-4">
<span className="text-slate-500 font-medium text-base">Organisation</span>
<span className="text-slate-900 font-semibold text-base">OrgOne</span>
</div>
<div className="flex justify-between items-center border-b border-slate-200/60 pb-4">
<span className="text-slate-500 font-medium text-base">Membership Plan</span>
<span className="text-slate-900 font-semibold text-base">Annual</span>
</div>
<div className="flex justify-between items-center pt-1">
<span className="text-slate-500 font-medium text-base">Total due</span>
<span className="text-slate-900 font-semibold text-base">$50.00</span>
</div>
</div>
</div>

<div className="mb-8">
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3 ml-1">
                Payment Method
            </label>

<div className="relative group cursor-pointer">
<div className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 flex justify-between items-center shadow-sm hover:border-slate-300 transition-all duration-200">
<span className="text-slate-900 font-medium text-base">Credit Card</span>
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl p-6 mb-8 shadow-sm">

<div className="mb-6">
<label className="block text-sm font-medium text-slate-600 mb-2.5 ml-1">Card number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400" data-lucide="credit-card"></i>
</div>
<input className="block w-full pl-11 pr-16 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 sm:text-base outline-none transition-all shadow-sm" placeholder="0000 0000 0000 0000" type="text"/>

<div className="absolute inset-y-0 right-0 pr-3.5 flex items-center gap-1 pointer-events-none opacity-50">
<div className="w-8 h-5 bg-slate-200 rounded flex overflow-hidden">
<div className="w-1/2 h-full bg-slate-300"></div>
<div className="w-1/2 h-full bg-slate-200"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-5">

<div>
<label className="block text-sm font-medium text-slate-600 mb-2.5 ml-1">Expiration</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400" data-lucide="calendar"></i>
</div>
<input className="block w-full pl-11 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 sm:text-base outline-none transition-all shadow-sm" placeholder="MM / YY" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-600 mb-2.5 ml-1">CVC</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400" data-lucide="lock"></i>
</div>
<input className="block w-full pl-11 py-3 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-slate-900 focus:border-slate-900 sm:text-base outline-none transition-all shadow-sm" placeholder="123" type="text"/>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 mb-8 flex items-start gap-3.5">
<div className="flex-shrink-0 mt-0.5">
<i className="w-5 h-5 text-slate-400" data-lucide="info"></i>
</div>
<p className="text-sm text-slate-600 leading-relaxed font-normal">
<span className="font-semibold text-slate-700">Note:</span> Membership requests for this plan require approval. Once your application is reviewed and approved, you will receive a confirmation email with an invoice to complete payment.
            </p>
</div>

<button className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-slate-900/10 active:scale-[0.99] group">
<span className="text-lg">Submit Payment</span>
<i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>

<div className="flex items-center justify-center gap-2 mt-8 text-slate-400">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Payments are secure and encrypted</span>
</div>
</div>


    </>
  );
}
