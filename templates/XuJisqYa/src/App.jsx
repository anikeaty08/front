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
      
<main className="bg-white w-full max-w-md mx-auto rounded-[20px] shadow-xl border border-black/10 px-6 py-8 flex flex-col items-center gap-8">

<div className="rounded-full bg-green-600/10 border border-green-600 w-20 h-20 flex items-center justify-center">
<svg className="h-10 w-10" fill="none" viewbox="0 0 40 40">
<path d="M12 22l6 6 10-14" stroke="#2fad51" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>

<div className="w-full flex flex-col gap-2 items-center">
<h2 className="font-bold text-center text-2xl text-black">Transfer Successful!</h2>
<p className="text-[15px] text-center text-black/70">Successfully paid $134.89</p>
</div>

<div className="w-full rounded-2xl border border-white/40 bg-white/80 px-4 py-6 shadow-sm flex flex-col gap-6">
<div className="flex justify-between items-center">
<span className="text-gray-500 text-base">Amount</span>
<span className="text-black font-semibold text-base">$150.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-base">Fee</span>
<span className="text-black font-semibold text-base">$1.50</span>
</div>
<div className="h-px bg-black/10 rounded-lg"></div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-base">Total</span>
<span className="text-black font-semibold text-base">$151.50</span>
</div>
</div>

<button className="w-full max-w-xs py-3 rounded-xl text-white font-semibold text-lg bg-gradient-to-br from-blue-700 to-blue-900 shadow-lg shadow-black/5 transition hover:from-blue-800 hover:to-blue-950 focus:outline-none">Done</button>
</main>

    </>
  );
}
