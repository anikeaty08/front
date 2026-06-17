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
      

<div className="w-80 bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">

<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium">Payment Details</h3>
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-4 bg-zinc-800/50">
<div className="flex justify-between mb-2">
<span className="text-xs text-zinc-400">Subscription Plan</span>
<span className="text-xs">Premium Monthly</span>
</div>
<div className="flex justify-between mb-2">
<span className="text-xs text-zinc-400">Billing Cycle</span>
<span className="text-xs">Monthly</span>
</div>
<div className="flex justify-between font-medium">
<span className="text-xs">Total Due Today</span>
<span className="text-xs">$15.99</span>
</div>
</div>

<form className="p-4">

<div className="mb-3">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="cardNumber">Card Number</label>
<div className="relative">
<input className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="cardNumber" placeholder="1234 5678 9012 3456" type="text"/>
<div className="absolute right-3 top-2">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect height="14" rx="2" strokeWidth="2" width="20" x="2" y="5"></rect>
<line strokeWidth="2" x1="2" x2="22" y1="10" y2="10"></line>
</svg>
</div>
</div>
</div>

<div className="flex space-x-3 mb-3">
<div className="w-1/2">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="expiry">Expiry Date</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="expiry" placeholder="MM/YY" type="text"/>
</div>
<div className="w-1/2">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="cvc">CVC</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="cvc" placeholder="123" type="text"/>
</div>
</div>

<div className="mb-4">
<label className="block text-xs text-zinc-400 mb-1" htmlFor="nameOnCard">Name on Card</label>
<input className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500" id="nameOnCard" placeholder="John Doe" type="text"/>
</div>

<div className="flex items-center mb-4">
<input className="w-3 h-3 text-indigo-600 bg-zinc-800 border-zinc-700 rounded focus:ring-indigo-500" id="saveCard" type="checkbox"/>
<label className="ml-2 text-xs text-zinc-400" htmlFor="saveCard">Save card for future payments</label>
</div>

<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded text-xs font-medium transition-colors" type="submit">Pay $15.99</button>
</form>

<div className="p-3 border-t border-zinc-800 flex justify-center items-center">
<div className="text-[10px] text-zinc-500 flex items-center">
<svg className="w-3 h-3 mr-1" fill="none" viewbox="0 0 24 24">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"></path>
<path d="M12 6V12L16 14" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
        Secure payment processed by Stripe
      </div>
</div>
</div>

    </>
  );
}
