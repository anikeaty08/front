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



    if ('fonts' in document) {
      document.fonts.load('1em Inter');
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
      
<div className="bg-gradient-to-tr from-indigo-700/90 to-indigo-400/80 rounded-2xl shadow-2xl p-8 max-w-sm w-full relative overflow-hidden font-sans">

<div className="mb-6">
<h1 className="text-white text-[32px] md:text-[40px] leading-tight font-light tracking-tighter mb-1" style={{fontFamily: '\'Inter\', sans-serif'}}>Payment Method</h1>
<div className="text-indigo-100 text-[16px] md:text-[20px] font-light tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Card Details</div>
</div>

<div className="flex items-center justify-between mb-7">
<div className="flex items-center gap-3">
<span className="w-12 h-8 rounded-md bg-white flex items-center justify-center">
<svg className="w-8 h-5" fill="none" viewbox="0 0 32 20"><rect fill="#2563EB" height="16" rx="4" width="28" x="2" y="2"></rect><rect fill="#A5B4FC" height="6" rx="2" width="18" x="7" y="7"></rect></svg>
</span>
<span className="uppercase text-white font-semibold text-[14px]" style={{fontFamily: '\'Inter\', sans-serif'}}>Visa</span>
</div>
<span className="text-white/70 text-[14px]" style={{fontFamily: '\'Inter\', sans-serif'}}>Debit</span>
</div>

<div className="mb-7">
<div className="text-indigo-200 text-xs font-semibold uppercase mb-1 tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Card Number</div>
<div className="text-white font-medium font-mono text-lg md:text-xl tracking-widest flex items-center gap-2 select-none">
        •••• •••• •••• <span className="font-bold text-amber-100 tracking-normal">4687</span>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div>
<div className="uppercase text-xs text-indigo-100 tracking-tight font-semibold mb-0.5" style={{fontFamily: '\'Inter\', sans-serif'}}>Card Holder</div>
<div className="text-white text-[16px] font-medium leading-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Your Name</div>
</div>
<div>
<div className="uppercase text-xs text-indigo-100 tracking-tight font-semibold mb-0.5" style={{fontFamily: '\'Inter\', sans-serif'}}>Expiry</div>
<div className="text-white text-[16px] font-medium leading-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>12/27</div>
</div>
<div>
<div className="uppercase text-xs text-indigo-100 tracking-tight font-semibold mb-0.5" style={{fontFamily: '\'Inter\', sans-serif'}}>CVV</div>
<div className="text-white text-[16px] font-medium leading-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>•••</div>
</div>
</div>

<button className="w-full py-3 rounded-xl font-semibold bg-white/90 hover:bg-white text-indigo-800 hover:shadow-lg transition-all text-[16px] mt-2 shadow" style={{fontFamily: '\'Inter\', sans-serif'}}>
      Pay $120.00
    </button>

<span className="absolute w-36 h-36 left-[-3.5rem] bottom-[-3.5rem] bg-white/10 rounded-full blur-2xl"></span>
<span className="absolute w-20 h-20 right-[-1.5rem] top-[-1.5rem] bg-blue-200/10 rounded-full blur-2xl"></span>
</div>

    </>
  );
}
