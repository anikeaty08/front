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
      
<div className="w-full max-w-5xl bg-gray-900/95 rounded-xl overflow-hidden flex flex-col md:flex-row shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(255,255,255,0.06),0px_3px_3px_-1.5px_rgba(255,255,255,0.06),_0px_6px_6px_-3px_rgba(255,255,255,0.06),0px_12px_12px_-6px_rgba(255,255,255,0.06),0px_24px_24px_-12px_rgba(255,255,255,0.06)] border border-gray-800">

<div className="w-full md:w-2/5 p-8 md:p-14 bg-gray-900/90">
<div className="mb-10">
<span className="text-rose-500 font-bold text-lg tracking-wide">Neon UI</span>
</div>
<div className="mb-10">
<h1 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Pro UI Kit</h1>
<p className="text-gray-400 leading-relaxed text-base">
          The most comprehensive, modern design system for your next project. 500+ components, 100+ layouts, Figma &amp; React files, and lifetime free updates. Perfect for crafting beautiful, consistent interfaces at lightning speed.
        </p>
</div>
<div className="border-t border-gray-800 my-8"></div>
<div className="space-y-7">
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Lifetime Free Updates</h3>
<p className="text-gray-400 text-sm mt-1">Get every new component, always free.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Money-back Guarantee</h3>
<p className="text-gray-400 text-sm mt-1">30 days, no questions asked.</p>
</div>
</div>
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-rose-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-white">Designer &amp; Dev Community</h3>
<p className="text-gray-400 text-sm mt-1">Join 5,000+ creators for support and feedback.</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-3/5 flex flex-col justify-center items-center p-8 md:p-14 bg-gray-800/80">
<div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl border border-gray-700 p-8 shadow-none">

<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-white tracking-tight">Checkout</h2>
<div className="flex items-end space-x-2">
<span className="text-4xl font-bold text-rose-500">$149</span>
<span className="text-base text-gray-400 font-medium mb-1">USD</span>
</div>
</div>
<div className="border-t border-gray-700 mb-6"></div>
<div className="space-y-3">
<div className="flex justify-between">
<span className="text-gray-400">Pro UI Kit</span>
<span className="text-gray-200 font-medium">$149</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400">All future updates</span>
<span className="text-green-500 font-medium">Free</span>
</div>
<div className="flex justify-between">
<span className="text-gray-400">Community Access</span>
<span className="text-green-500 font-medium">Free</span>
</div>
<div className="flex justify-between text-rose-500 font-medium">
<span>Launch Discount</span>
<span>-$50</span>
</div>
<div className="pt-4 mt-4 border-t border-gray-700 flex justify-between">
<span className="font-semibold text-gray-200">Total</span>
<span className="font-semibold text-white">$99.00</span>
</div>
</div>
<div className="border-t border-gray-700 my-8"></div>
<h2 className="text-xs font-semibold text-gray-400 mb-4 tracking-wide">PAYMENT METHOD</h2>
<div className="flex space-x-2 mb-7">
<button className="flex-1 py-2 px-3 border border-rose-500 rounded-md flex items-center justify-center bg-gray-800 text-rose-500 text-sm font-medium shadow-none transition-colors" type="button">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Card
            </button>
<button className="flex-1 py-2 px-3 border border-gray-700 rounded-md flex items-center justify-center bg-gray-800 text-gray-400 text-sm font-medium shadow-none transition-colors" type="button">
              PayPal
            </button>
<button className="flex-1 py-2 px-3 border border-gray-700 rounded-md flex items-center justify-center bg-gray-800 text-gray-400 text-sm font-medium shadow-none transition-colors" type="button">
              Apple Pay
            </button>
</div>
<form className="space-y-5">
<div>
<label className="block text-xs text-gray-400 mb-2 font-medium">Card number</label>
<input className="w-full p-3 border border-gray-700 rounded-md focus:ring-rose-500 bg-gray-900 text-gray-100 text-base transition-all shadow-none" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="flex space-x-3">
<div className="flex-1">
<label className="block text-xs text-gray-400 mb-2 font-medium">Expiry</label>
<input className="w-full p-3 border border-gray-700 rounded-md focus:ring-rose-500 bg-gray-900 text-gray-100 text-base transition-all shadow-none" placeholder="MM / YY" type="text"/>
</div>
<div className="flex-1">
<label className="block text-xs text-gray-400 mb-2 font-medium">CVC</label>
<input className="w-full p-3 border border-gray-700 rounded-md focus:ring-rose-500 bg-gray-900 text-gray-100 text-base transition-all shadow-none" placeholder="CVC" type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-gray-400 mb-2 font-medium">Name on card</label>
<input className="w-full p-3 border border-gray-700 rounded-md focus:ring-rose-500 bg-gray-900 text-gray-100 text-base transition-all shadow-none" placeholder="Jane Doe" type="text"/>
</div>
<button className="w-full py-3 mt-3 bg-rose-500 text-white font-semibold rounded-md hover:bg-rose-600 transition-colors shadow-none" type="submit">
              Pay $99
            </button>
<p className="text-xs text-gray-500 text-center mt-3">
              By completing your purchase, you agree to our Terms of Service
            </p>
</form>
</div>
</div>
</div>
</div>

    </>
  );
}
