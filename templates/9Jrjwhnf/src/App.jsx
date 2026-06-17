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
      
<div className="relative w-[375px] h-[812px] bg-gray-900 rounded-[54px] overflow-hidden shadow-xl border-8 border-gray-800">

<div className="h-full overflow-y-auto bg-gray-900">

<header className="bg-gray-800 p-4 pt-12">
<div className="flex items-center justify-between">
<button className="p-2 bg-gray-700 rounded-full">
<svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-white font-bold text-lg">Make Payment</h1>
<div className="w-8"></div> 
</div>
</header>

<div className="p-4">

<div className="mb-6">
<label className="block text-gray-400 text-sm mb-2">Amount</label>
<div className="bg-gray-800 rounded-xl p-4 flex items-center">
<span className="text-white text-2xl font-bold mr-2">$</span>
<input className="bg-transparent text-white text-2xl font-bold flex-1 outline-none" type="text" value="120.00"/>
</div>
<div className="flex justify-between mt-2 text-sm">
<span className="text-gray-500">Available: $24,562.80</span>
<button className="text-indigo-400">Max</button>
</div>
</div>

<div className="mb-6">
<label className="block text-gray-400 text-sm mb-2">Pay to</label>
<div className="bg-gray-800 rounded-xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
<span className="text-blue-400 font-bold text-xl">J</span>
</div>
<div>
<div className="text-white font-medium">James Wilson</div>
<div className="text-gray-400 text-sm">@jwilson</div>
</div>
</div>
<button className="p-2 bg-gray-700 rounded-full">
<svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-6">
<label className="block text-gray-400 text-sm mb-2">Pay from</label>
<div className="bg-gray-800 rounded-xl p-4">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-white font-medium">Debit Card</div>
<div className="text-gray-400 text-sm">•••• 4582</div>
</div>
</div>
<button className="p-2 bg-gray-700 rounded-full">
<svg className="h-5 w-5 text-gray-300" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-8">
<label className="block text-gray-400 text-sm mb-2">Note (optional)</label>
<div className="bg-gray-800 rounded-xl p-4">
<input className="bg-transparent text-white w-full outline-none" placeholder="What's this payment for?" type="text"/>
</div>
</div>

<div className="mb-6">
<label className="block text-gray-400 text-sm mb-2">Recent</label>
<div className="flex space-x-4 overflow-x-auto py-2">
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-purple-900/50 flex items-center justify-center mb-1">
<span className="text-purple-400 font-bold text-xl">S</span>
</div>
<span className="text-xs text-gray-300">Sarah</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-green-900/50 flex items-center justify-center mb-1">
<span className="text-green-400 font-bold text-xl">M</span>
</div>
<span className="text-xs text-gray-300">Mike</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-pink-900/50 flex items-center justify-center mb-1">
<span className="text-pink-400 font-bold text-xl">L</span>
</div>
<span className="text-xs text-gray-300">Lisa</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-amber-900/50 flex items-center justify-center mb-1">
<span className="text-amber-400 font-bold text-xl">R</span>
</div>
<span className="text-xs text-gray-300">Ryan</span>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 rounded-full bg-blue-900/50 flex items-center justify-center mb-1">
<span className="text-blue-400 font-bold text-xl">T</span>
</div>
<span className="text-xs text-gray-300">Tom</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-16 left-0 right-0 p-4">
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-4 rounded-xl transition duration-200">
          Send Payment
        </button>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3 flex justify-around">
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-400 mt-1">Home</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-400 mt-1">Stats</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-400 mt-1">Payments</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-gray-400 mt-1">Profile</span>
</button>
</div>

<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>

    </>
  );
}
