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
      
<div className="group perspective-900 w-[300px] h-[350px]">
<div className="flip-card-inner w-full h-full relative rounded-2xl">

<div className="flip-card-front absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-6 px-6 py-8 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-gray-100 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="flex flex-col items-center gap-4">
<span className="uppercase tracking-wider text-xs font-semibold text-gray-400">Quote of the Day</span>
<p className="text-lg font-medium text-center italic">"The only way to do great work is to love what you do."</p>
<span className="text-sm text-gray-300 mt-1">— Steve Jobs</span>
</div>
<div className="text-xs text-gray-400 mt-2">Hover to reveal another quote</div>
</div>

<div className="flip-card-back absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-6 px-6 py-8 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 text-gray-100 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="flex flex-col items-center gap-4">
<span className="uppercase tracking-wider text-xs font-semibold text-gray-400">Another Thought</span>
<p className="text-lg font-medium text-center italic">"Success is not final, failure is not fatal: it is the courage to continue that counts."</p>
<span className="text-sm text-gray-300 mt-1">— Winston Churchill</span>
</div>
<div className="text-xs text-gray-400 mt-2">Flip back for today's main quote</div>
</div>
</div>
</div>

    </>
  );
}
