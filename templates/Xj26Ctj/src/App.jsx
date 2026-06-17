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
      
<div className="relative w-full max-w-sm p-8 pb-7 rounded-2xl bg-gradient-to-tr from-neutral-900 via-slate-900 to-indigo-800 shadow-2xl overflow-hidden font-geist">

<h1 className="font-noto-mono font-thin text-[48px] md:text-[64px] leading-none tracking-tighter text-white mb-3 select-none">
      Payment
    </h1>

<div className="font-noto-mono text-[16px] md:text-[20px] font-thin tracking-tight text-indigo-100 mb-8 select-none">
      Card Details
    </div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-2">
<span className="w-11 h-7 bg-white rounded-md flex items-center justify-center">
<svg className="w-7 h-4" fill="none" viewbox="0 0 28 16"><rect fill="#334155" height="16" rx="4" width="28"></rect><rect fill="#a5b4fc" height="8" rx="2" width="18" x="5" y="4"></rect></svg>
</span>
<span className="font-noto-mono text-[12px] text-white uppercase font-thin tracking-tighter">Visa</span>
</div>
<span className="font-geist font-normal text-[12px] text-white/70 tracking-tighter">Debit</span>
</div>

<div className="mb-8">
<div className="font-noto-mono uppercase text-[12px] text-indigo-100 font-thin tracking-tighter mb-1 select-none">Card Number</div>
<div className="font-noto-mono text-[16px] text-white tracking-widest flex items-center gap-2 select-none">
        •••• •••• •••• <span className="font-semibold text-amber-200 tracking-normal">4687</span>
</div>
</div>

<div className="flex items-center justify-between mb-8 gap-2 text-[12px]">
<div>
<div className="font-noto-mono uppercase text-indigo-100 font-thin tracking-tighter mb-0.5 select-none">Holder</div>
<div className="font-geist text-white font-normal">Your Name</div>
</div>
<div>
<div className="font-noto-mono uppercase text-indigo-100 font-thin tracking-tighter mb-0.5 select-none">Expiry</div>
<div className="font-geist text-white font-normal">12/27</div>
</div>
<div>
<div className="font-noto-mono uppercase text-indigo-100 font-thin tracking-tighter mb-0.5 select-none">CVV</div>
<div className="font-geist text-white font-normal">•••</div>
</div>
</div>

<button className="w-full py-3 rounded-xl font-geist text-[14px] font-semibold bg-white/90 hover:bg-white text-zinc-900 transition-all mt-2 shadow">
      Pay $120.00
    </button>

<span className="absolute w-36 h-36 left-[-3.5rem] bottom-[-3.5rem] bg-white/10 rounded-full blur-2xl"></span>
<span className="absolute w-20 h-20 right-[-1.5rem] top-[-1.5rem] bg-indigo-300/10 rounded-full blur-2xl"></span>
</div>

    </>
  );
}
