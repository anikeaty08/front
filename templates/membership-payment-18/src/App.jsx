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
      

<div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-slate-200 relative overflow-hidden my-4">

<button className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-50 p-1 z-10">
<iconify-icon height="24" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="p-8 md:p-10">

<h1 className="text-2xl font-semibold text-slate-900 tracking-tight text-center mb-8">Checkout</h1>
<div className="space-y-8">

<div className="bg-slate-50/50 rounded-xl border border-slate-100 p-5 space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-slate-100">
<div className="flex flex-col">
<span className="text-sm text-slate-500 font-medium">Organisation</span>
<span className="text-base font-medium text-slate-900">OrgOne</span>
</div>
<div className="flex flex-col text-right">
<span className="text-sm text-slate-500 font-medium">Plan</span>
<span className="text-base font-medium text-slate-900">Annual</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-slate-500 font-medium">Total due today</span>
<span className="text-lg font-semibold text-slate-900 tracking-tight">$50.00</span>
</div>
</div>

<div className="space-y-4">
<label className="text-sm font-medium text-slate-900 block">Payment Method</label>
<div className="grid grid-cols-2 gap-3 p-1 bg-slate-50 rounded-lg border border-slate-100">
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-md shadow-sm border border-slate-200 text-sm font-medium text-slate-900 transition-all">
<iconify-icon height="18" icon="solar:card-linear" width="18"></iconify-icon>
                            Card
                        </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 transition-all">
<iconify-icon height="18" icon="solar:wallet-linear" width="18"></iconify-icon>
                            PayPal
                        </button>
</div>
</div>

<div className="space-y-5">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Card Number</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900">
<iconify-icon height="20" icon="solar:card-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all bg-white text-slate-900 font-medium" placeholder="0000 0000 0000 0000" type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none gap-1 opacity-50">
<iconify-icon icon="solar:card-recieved-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-5">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Expiry</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900">
<iconify-icon height="20" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all bg-white text-slate-900 font-medium" placeholder="MM / YY" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">CVC</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-slate-900">
<iconify-icon height="20" icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all bg-white text-slate-900 font-medium" placeholder="123" type="text"/>
</div>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Cardholder Name</label>
<input className="block w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all bg-white text-slate-900 font-medium" placeholder="Full Name" type="text"/>
</div>
</div>

<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm h-12 rounded-lg shadow-sm transition-all focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 flex items-center justify-center gap-2 mt-2">
<iconify-icon height="18" icon="solar:card-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Pay $50.00</span>
</button>

<div className="flex items-center justify-center gap-2 text-xs text-slate-400">
<iconify-icon height="14" icon="solar:shield-check-linear" width="14"></iconify-icon>
<span>Payments are secure and encrypted</span>
</div>
</div>
</div>
</div>

    </>
  );
}
