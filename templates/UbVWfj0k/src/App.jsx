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
      
<div className="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm z-10"></div>
<div className="relative z-20 w-full max-w-md mx-auto">
<div className="bg-white rounded-2xl shadow-xl p-8 pt-7 relative">

<div className="flex justify-between items-start mb-7">
<h2 className="text-lg font-semibold text-gray-900">Add New Card</h2>
<button className="p-1.5 rounded-full hover:bg-gray-100 focus:outline-none">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<form className="space-y-5">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 px-3 py-2 text-sm text-gray-900" type="text" value="Your Name"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
<div className="relative flex items-center">
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 px-3 py-2 text-sm text-gray-900 pr-16" type="text" value="1234 5678 9101 1121"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-1">

<span className="inline-flex w-8 h-6 items-center justify-center">
<svg className="w-8 h-6" viewbox="0 0 36 24">
<circle cx="14" cy="12" fill="#EA001B" r="8"></circle>
<circle cx="22" cy="12" fill="#FFA200" fillOpacity="0.85" r="8"></circle>
</svg>
</span>

<svg className="w-4 h-4 text-gray-400 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="flex space-x-4">
<div className="flex-1">
<label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 px-3 py-2 text-sm text-gray-900" maxlength="5" type="text" value="12/26"/>
</div>
<div className="flex-1">
<label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
<input className="block w-full rounded-lg border border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 px-3 py-2 text-sm text-gray-900" maxlength="4" type="text" value="123"/>
</div>
</div>

<div className="mt-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-4">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center">

<svg className="w-4 h-4 text-blue-500 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="11" fill="#3B82F6" r="2.5"></circle>
</svg>
<span className="text-sm text-gray-700 font-medium">Autofill verified address</span>
</div>
<a className="text-sm text-blue-600 hover:underline font-medium" href="#">Change</a>
</div>
<div>
<p className="text-sm text-gray-900 font-medium mb-1">456 Park Ave, Los Angeles, CA</p>
<div className="flex items-center space-x-2">
<span className="text-xs text-gray-500">Post code</span>
<span className="text-xs text-gray-900 bg-gray-200 px-2 py-0.5 rounded font-medium">90001</span>
</div>
</div>
</div>

<button className="w-full mt-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-2.5 text-base shadow-sm" type="submit">
          Confirm
        </button>
</form>
</div>
</div>

    </>
  );
}
