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
      
<div className="relative w-[41vmin] h-[56vmin] flex flex-col justify-between rounded-2xl bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition-shadow duration-300 ease-in-out hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.26),0px_0px_0px_1px_rgba(0,0,0,0.08)]">

<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" height="26vmin" viewbox="0 0 200 200" width="26vmin">

<circle cx="100" cy="100" r="94" stroke="#18181b" strokeWidth="2"></circle>

<ellipse cx="100" cy="100" fill="none" rx="94" ry="30" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="94" ry="55" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="94" ry="80" stroke="#18181b" strokeWidth="1"></ellipse>

<ellipse cx="100" cy="100" fill="none" rx="30" ry="94" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.7" rx="55" ry="94" stroke="#18181b" strokeWidth="1"></ellipse>
<ellipse cx="100" cy="100" fill="none" opacity="0.35" rx="80" ry="94" stroke="#18181b" strokeWidth="1"></ellipse>

<line opacity="0.5" stroke="#18181b" stroke-dasharray="7 3" strokeWidth="1" x1="100" x2="100" y1="6" y2="194"></line>

<line opacity="0.5" stroke="#18181b" stroke-dasharray="7 3" strokeWidth="1" x1="6" x2="194" y1="100" y2="100"></line>
</svg>

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none">
<div className="flex justify-between items-start px-5 pt-4 text-[1.05rem] text-neutral-800">
<div>
<div className="font-bold">Sphere</div>
<div className="text-xs opacity-75">Minimalistic Card</div>
</div>
<div className="font-bold text-base">0008</div>
</div>
<div className="flex justify-between items-end px-5 pb-4 text-[1.05rem] text-neutral-800">
<div className="text-xs">@mengto</div>
<div></div>
</div>
</div>
</div>

    </>
  );
}
