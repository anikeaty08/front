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



    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            'apple-dark': '#16171a',
            'apple-card': '#232326'
          }
        }
      }
    }
  
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
      
<div className="relative w-[370px] h-[800px] flex flex-col bg-white dark:bg-apple-dark rounded-[40px] shadow-xl border-[7px] border-black/10 dark:border-black/30 overflow-hidden">

<div className="px-5 pt-4 pb-1 flex items-center text-[15px] font-semibold select-none text-gray-900 dark:text-gray-100">
<span>9:41</span>
<div className="relative flex-1 flex justify-center">
<div className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full h-[16px] w-[60px]"></div>
</div>
<div className="flex gap-1">
<svg className="w-4 h-3" fill="none" viewbox="0 0 16 10"><rect className="text-black dark:text-gray-300" fill="currentColor" height="3" rx="1" width="2" x="0" y="7"></rect><rect className="text-black dark:text-gray-300" fill="currentColor" height="6" rx="1" width="2" x="3" y="4"></rect><rect className="text-black dark:text-gray-300" fill="currentColor" height="8" rx="1" width="2" x="6" y="2"></rect><rect className="text-black dark:text-gray-300" fill="currentColor" height="10" rx="1" width="2" x="9" y="0"></rect></svg>
<svg className="w-4 h-3" fill="none" viewbox="0 0 16 10">
<path d="M2 8c2-2 6-2 8 0" stroke="#bbb" strokeLinecap="round" strokeWidth="1.3"></path>
<circle cx="6" cy="8" fill="#bbb" r="0.7"></circle>
</svg>
<svg className="w-7 h-3" fill="none" viewbox="0 0 26 10">
<rect className="text-black dark:text-gray-300" height="7" rx="3.5" stroke="currentColor" stroke-opacity="0.3" strokeWidth="1" width="18" x="1" y="1"></rect>
<rect className="text-black dark:text-gray-300" fill="currentColor" fillOpacity="0.4" height="4" rx="1" width="2" x="21" y="3"></rect>
<rect className="text-black dark:text-gray-300" fill="currentColor" height="5" rx="2" width="14" x="3" y="2"></rect>
</svg>
</div>
</div>

<div className="flex items-center px-5 mt-2 h-12">
<button className="w-9 h-9 flex items-center justify-center bg-gray-50 dark:bg-[#22232d] rounded-full border border-gray-200 dark:border-gray-800 shadow">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path className="dark:stroke-gray-100" d="M15 19l-7-7 7-7" stroke="#2a2a2a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="flex-1"></div>
</div>

<main className="flex-1 flex flex-col items-center mt-1 px-5 pb-5 overflow-y-auto">
<div className="w-full bg-white dark:bg-apple-card rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl px-5 py-8 flex flex-col items-center mb-3">
<div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 border-4 border-green-200 dark:border-green-700 mb-4 shadow-lg flex items-center justify-center">
<svg className="w-12 h-12" fill="none" viewbox="0 0 48 48">
<circle cx="24" cy="24" fill="none" r="22"></circle>
<path d="M15 26l7 7 13-15" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>
<div className="text-[22px] font-semibold mb-1 tracking-tight text-gray-900 dark:text-gray-100">Payment Successful</div>
<div className="text-base text-gray-600 dark:text-gray-400 mb-6">Successfully paid $134.89</div>
<div className="w-full">
<div className="text-[15px] font-semibold text-gray-800 dark:text-gray-100 mb-3">Payment Details</div>
<div className="flex justify-between text-sm mb-3">
<span className="font-semibold text-gray-700 dark:text-gray-300">Transaction Number</span>
<span className="text-gray-500 dark:text-gray-400 font-normal">000647248923</span>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-800 mb-3"></div>
<div className="flex justify-between text-sm mb-3">
<span className="font-semibold text-gray-700 dark:text-gray-300">Date</span>
<span className="text-gray-500 dark:text-gray-400 font-normal">22 April 2025</span>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-800 mb-3"></div>
<div className="flex justify-between text-sm mb-3">
<span className="font-semibold text-gray-700 dark:text-gray-300">Payment Method</span>
<span className="text-gray-500 dark:text-gray-400 font-normal">Visa</span>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-800 mb-3"></div>
<div className="flex justify-between text-sm mb-3">
<span className="font-semibold text-gray-700 dark:text-gray-300">Price</span>
<span className="text-gray-500 dark:text-gray-400 font-normal">$89.99</span>
</div>
<div className="h-px bg-gray-200 dark:bg-gray-800 mb-3"></div>
<div className="flex justify-between text-sm">
<span className="font-semibold text-gray-700 dark:text-gray-300">Status</span>
<span className="text-gray-500 dark:text-gray-400 font-normal">Completed</span>
</div>
</div>
</div>
<button className="mt-7 w-4/5 py-3 text-white font-semibold text-lg rounded-2xl shadow-lg bg-gradient-to-br from-blue-500 to-blue-800 dark:from-blue-800 dark:to-blue-900 focus:outline-none tracking-tight transition-all">Done</button>
</main>

<div className="flex justify-center items-center h-10">
<div className="bg-black/80 dark:bg-gray-400 rounded-full w-28 h-1.5 mb-2"></div>
</div>

<div className="pointer-events-none absolute left-0 top-0 w-full h-full rounded-[40px] border-4 border-black/10 dark:border-gray-800"></div>
</div>

    </>
  );
}
