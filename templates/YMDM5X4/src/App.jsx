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
            theme: {
                extend: {
                    fontFamily: {
                        'inter': ['Inter', 'sans-serif'],
                    },
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
      
<div className="max-w-md mx-auto flex flex-col items-center text-center p-6 bg-black">

<div className="flex items-center gap-2 mb-4 text-neutral-300">
<svg className="text-neutral-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
</svg>
<h2 className="leading-tight text-xl font-semibold tracking-tight font-inter">
<span className="text-white font-semibold">ProSpeed</span> AI Analytics
            </h2>
</div>

<div className="flex items-center w-full mb-6 text-neutral-500 text-sm uppercase tracking-wider">
<hr className="flex-grow border-t border-neutral-700"/>
<span className="px-4">7 DAYS FREE TRIAL</span>
<hr className="flex-grow border-t border-neutral-700"/>
</div>

<button className="glow-button w-full max-w-sm cursor-pointer text-lg font-medium text-cyan-200 tracking-tight font-inter rounded-full pt-3 pr-10 pb-3 pl-10" type="button">
            Start Free Trial
        </button>

<p className="mt-3 text-neutral-500 text-sm">
<span className="font-semibold text-white">Risk-free</span> cancellation anytime
        </p>
</div>

    </>
  );
}
