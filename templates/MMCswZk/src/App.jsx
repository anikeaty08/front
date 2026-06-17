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
      
<div className="min-h-screen flex items-center justify-center p-4">
<div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
<div className="md:flex">

<div className="md:w-3/5 p-8">
<div className="mb-8">
<h2 className="text-2xl font-bold text-gray-800">Complete your payment</h2>
<p className="text-gray-500 mt-2">Enter your card details to process your payment</p>
</div>

<div className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Card number</label>
<div className="relative">
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="1234 5678 9012 3456" type="text"/>
<div className="absolute right-3 top-3 flex space-x-2">
<i className="fa-brands fa-cc-visa text-blue-700 text-xl"></i>
<i className="fa-brands fa-cc-mastercard text-xl"></i>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Expiration date</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="MM / YY" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Security code</label>
<div className="relative">
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="CVC" type="text"/>
<div className="absolute right-3 top-3 text-gray-400">
<i className="fa-solid fa-circle-question"></i>
</div>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Name on card</label>
<input className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="Your name" type="text"/>
</div>
<div className="pt-4">
<button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition font-medium flex items-center justify-center">
<span>Pay $149.00</span>
<i className="fa-solid fa-lock ml-2 text-sm"></i>
</button>
<p className="text-xs text-center text-gray-500 mt-3 flex items-center justify-center">
<i className="fa-solid fa-shield-halved mr-1 text-gray-400"></i>
                Your payment information is encrypted and secure
              </p>
</div>
</div>
</div>

<div className="md:w-2/5 bg-gray-50 p-8 border-l border-gray-200">
<h3 className="text-lg font-semibold text-gray-800 mb-6">Order summary</h3>
<div className="space-y-4 mb-6">
<div className="flex justify-between items-start">
<div className="flex items-center">
<div className="h-12 w-12 rounded-md bg-indigo-100 flex items-center justify-center">
<i className="fa-solid fa-briefcase text-indigo-500"></i>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-800">Business Plan</p>
<p className="text-xs text-gray-500">Annual billing</p>
</div>
</div>
<p className="text-sm font-medium">$129.00</p>
</div>
<div className="flex justify-between items-start">
<div className="flex items-center">
<div className="h-12 w-12 rounded-md bg-green-100 flex items-center justify-center">
<i className="fa-solid fa-headset text-green-500"></i>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-800">Premium Support</p>
<p className="text-xs text-gray-500">24/7 customer service</p>
</div>
</div>
<p className="text-sm font-medium">$20.00</p>
</div>
</div>
<div className="border-t border-gray-200 pt-4 mb-6">
<div className="flex justify-between mb-2">
<p className="text-sm text-gray-600">Subtotal</p>
<p className="text-sm font-medium text-gray-800">$149.00</p>
</div>
<div className="flex justify-between">
<p className="text-sm text-gray-600">Tax</p>
<p className="text-sm font-medium text-gray-800">$0.00</p>
</div>
</div>
<div className="border-t border-gray-200 pt-4">
<div className="flex justify-between">
<p className="text-base font-medium text-gray-800">Total</p>
<p className="text-base font-bold text-gray-800">$149.00</p>
</div>
<p className="text-xs text-gray-500 mt-2">
              By completing this purchase you agree to our <a className="text-indigo-600 hover:text-indigo-500" href="#">terms and conditions</a>
</p>
</div>
<div className="mt-8">
<div className="flex items-center justify-center space-x-3">
<i className="fa-brands fa-cc-visa text-blue-700 text-2xl"></i>
<i className="fa-brands fa-cc-mastercard text-2xl"></i>
<i className="fa-brands fa-cc-amex text-blue-500 text-2xl"></i>
<i className="fa-brands fa-cc-paypal text-blue-800 text-2xl"></i>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
