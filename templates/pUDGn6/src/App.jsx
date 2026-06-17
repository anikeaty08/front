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
      
<div className="max-w-md w-full">
<div className="card w-full aspect-[16/10] rounded-2xl p-6 shadow-2xl relative">

<div className="wave-pattern"></div>

<div className="flex justify-between items-start relative z-10">
<div className="text-white text-xl font-bold tracking-tight">NEXUS</div>

<div className="w-8 h-8">
<svg className="w-full h-full text-white" viewbox="0 0 24 24">
<path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M8.46,14.45L7.1,13.83 c0.28-0.61,0.41-1.28,0.4-1.95c-0.01-0.67-0.17-1.33-0.46-1.92l1.38-0.59c0.36,0.74,0.56,1.54,0.57,2.37 C8.99,12.56,8.81,13.36,8.46,14.45z M11.53,16.01l-1.38,0.59c-0.53-1.04-0.79-2.19-0.77-3.35c0.02-1.16,0.32-2.3,0.88-3.31 l1.38,0.59c-0.46,0.82-0.7,1.73-0.71,2.66C11.01,14.12,11.19,15.05,11.53,16.01z M14.67,17.33l-1.38-0.59 c0.7-1.52,0.71-3.26,0.01-4.8l1.37-0.59c0.43,0.95,0.65,1.98,0.64,3.01C15.3,15.39,15.09,16.42,14.67,17.33z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="text-white text-xl font-medium tracking-widest mt-10 mb-6 relative z-10">
                4929 8256 7135 0428
            </div>

<div className="flex justify-between items-end relative z-10 mt-auto">
<div>

<div className="chip w-12 h-9 mb-4"></div>

<div className="text-white font-medium">
<div className="text-xs text-gray-300 mb-1 uppercase tracking-wider">Card Holder</div>
                        ALEX MORGAN
                    </div>
</div>
<div className="flex flex-col items-end">

<div className="text-white font-medium mb-4">
<div className="text-xs text-gray-300 mb-1 uppercase tracking-wider">Expires</div>
                        09/26
                    </div>

<div className="mastercard-logo">
<div className="mastercard-circle mastercard-red"></div>
<div className="mastercard-circle mastercard-yellow"></div>
<div className="mastercard-overlap"></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
