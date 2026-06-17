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
      
<div className="w-full max-w-5xl bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">

<div className="w-full md:w-1/2 p-10 md:p-16 bg-white">
<div className="mb-12">
<span className="text-indigo-600 font-medium text-lg">Aura</span>
</div>
<div className="mb-16">
<h1 className="text-3xl font-semibold mb-6">Master UI/UX Design</h1>
<p className="text-gray-600 leading-relaxed">Comprehensive design course covering principles, tools, and workflows used by top designers. Learn to create beautiful, functional interfaces that users love.</p>
</div>
<div className="space-y-8">
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-indigo-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Lifetime Access</h3>
<p className="text-gray-500 text-sm mt-1">All course materials including future updates</p>
</div>
</div>
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-indigo-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">30-Day Guarantee</h3>
<p className="text-gray-500 text-sm mt-1">Full refund if you're not completely satisfied</p>
</div>
</div>
<div className="flex items-start">
<div className="w-6 h-6 mr-4 text-indigo-500 flex-shrink-0 mt-1">
<svg fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Community Access</h3>
<p className="text-gray-500 text-sm mt-1">Connect with peers and industry experts</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-10 md:p-16 bg-gray-50">
<div className="mb-12">
<h2 className="text-sm font-medium text-gray-500 mb-6">COURSE DETAILS</h2>
<div className="space-y-4">
<div className="flex justify-between">
<span className="text-gray-600">UI/UX Design Course</span>
<span className="text-gray-900">$399</span>
</div>
<div className="flex justify-between">
<span className="text-gray-600">Design Resources</span>
<span className="text-gray-900">$49</span>
</div>
<div className="flex justify-between text-indigo-600">
<span>Early Bird Discount</span>
<span>-$100</span>
</div>
<div className="pt-4 mt-4 border-t border-gray-200 flex justify-between">
<span className="font-medium">Total</span>
<span className="font-medium">$348.00</span>
</div>
</div>
</div>
<div>
<h2 className="text-sm font-medium text-gray-500 mb-6">PAYMENT METHOD</h2>
<div className="flex space-x-3 mb-8">
<button className="flex-1 py-2.5 px-3 border border-indigo-500 rounded-md flex items-center justify-center bg-white text-indigo-600 text-sm">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Card
          </button>
<button className="flex-1 py-2.5 px-3 border border-gray-200 rounded-md flex items-center justify-center bg-white text-gray-500 text-sm">
            PayPal
          </button>
<button className="flex-1 py-2.5 px-3 border border-gray-200 rounded-md flex items-center justify-center bg-white text-gray-500 text-sm">
            Apple Pay
          </button>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm text-gray-500 mb-2">Card number</label>
<input className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="flex space-x-4">
<div className="flex-1">
<label className="block text-sm text-gray-500 mb-2">Expiry</label>
<input className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white" placeholder="MM / YY" type="text"/>
</div>
<div className="flex-1">
<label className="block text-sm text-gray-500 mb-2">CVC</label>
<input className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white" placeholder="CVC" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-gray-500 mb-2">Name on card</label>
<input className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 bg-white" placeholder="John Smith" type="text"/>
</div>
<button className="w-full py-3.5 mt-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors" type="submit">
            Complete Purchase
          </button>
<p className="text-xs text-gray-400 text-center mt-4">
            By completing your purchase, you agree to our Terms of Service
          </p>
</form>
</div>
</div>
</div>

    </>
  );
}
