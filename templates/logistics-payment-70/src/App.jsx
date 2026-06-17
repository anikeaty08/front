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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-purple-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-orange-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
</div>

<main className="relative z-10 w-full max-w-sm bg-white/70 backdrop-blur-xl border border-white/80 rounded-[1.5rem] p-6 sm:p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)]">

<div className="flex flex-col items-center text-center">

<div className="text-xs font-semibold tracking-tighter text-neutral-400 mb-4 uppercase">
                KOLI
            </div>

<div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 border border-orange-400 shadow-[0_0_24px_rgba(249,115,22,0.25)] mb-6 before:absolute before:inset-0 before:rounded-2xl before:border before:border-orange-200/50 before:m-[1px]">
<iconify-icon className="text-2xl text-orange-500" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
</div>

<h1 className="text-lg font-medium tracking-tight text-neutral-900 mb-3">
                ⚖️ Weight Adjustment
            </h1>

<p className="text-sm text-neutral-500 leading-relaxed max-w-[16rem]">
                Your package is heavier than estimated (Actual: <span className="font-medium text-neutral-800">1.2kg</span>). Please pay the balance of <span className="font-medium text-neutral-800">1,500 FCFA</span> to generate your pickup QR Code.
            </p>

<button className="mt-8 w-full group relative flex items-center justify-center gap-2 py-3 px-4 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white text-sm font-medium rounded-xl shadow-[0_4px_16px_rgba(147,51,234,0.25)] transition-all overflow-hidden ring-1 ring-purple-600/50">
                Proceed to Payment
                <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</main>

    </>
  );
}
