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
      
<div className="relative w-full max-w-md mx-auto">

<div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
<svg className="w-full h-full" fill="none" height="100%" viewBox="0 0 460 260" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="grad" x1="0" x2="1" y1="0" y2="0">
<stop stop-color="#7f72ff"></stop>
<stop offset="1" stop-color="#6ee7b7"></stop>
</lineargradient>
</defs>
<g>
<g className="wave1">
<path className="wave-gradient" d="M0 60 Q 55 40 115 65 Q 175 90 230 55 Q 285 15 340 60 Q 395 105 460 62" fill="none" strokeWidth="3"></path>
<path className="wave-gradient" d="M-460 60 Q -405 40 -345 65 Q -285 90 -230 55 Q -175 15 -120 60 Q -65 105 0 62" fill="none" strokeWidth="3"></path>
</g>
<g className="wave2">
<path className="wave-gradient" d="M0 110 Q 60 90 120 115 Q 180 140 230 100 Q 280 60 340 100 Q 400 140 460 105" fill="none" strokeWidth="2"></path>
<path className="wave-gradient" d="M-460 110 Q -400 90 -340 115 Q -280 140 -230 100 Q -180 60 -120 100 Q -60 140 0 105" fill="none" strokeWidth="2"></path>
</g>
<g className="wave3">
<path className="wave-gradient" d="M0 170 Q 50 150 110 175 Q 170 200 230 160 Q 290 120 350 170 Q 410 220 460 172" fill="none" strokeWidth="1.5"></path>
<path className="wave-gradient" d="M-460 170 Q -410 150 -350 175 Q -290 200 -230 160 Q -170 120 -110 170 Q -50 220 0 172" fill="none" strokeWidth="1.5"></path>
</g>
</g>
</svg>
</div>

<div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-[#ebebef] px-8 pt-10 pb-8">
<div className="mb-6">
<span className="inline-block px-3 py-1 text-xs font-medium bg-[#e1e0f6] text-[#6a5cdf] rounded-full">Waves</span>
</div>
<h2 className="text-2xl font-bold text-[#282a31] mb-2 tracking-tight">
        Minimal Linear Card
      </h2>
<p className="text-[#717083] mb-6">
        A minimalistic card featuring animated line waves in a soft, modern style inspired by Linear. Built for clarity and simplicity.
      </p>
<button className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7f72ff] to-[#6ee7b7] text-white font-semibold shadow-sm transition hover:scale-105 focus:outline-none">
        Get Started
      </button>
</div>
</div>

    </>
  );
}
