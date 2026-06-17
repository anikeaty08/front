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
      

<div className="relative flex items-center justify-center">

<div className="absolute inset-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '50px 50px'}}>
</div>

<div className="globe-container">

<div className="earth-texture"></div>

<div className="sphere-shading"></div>

<div className="atmosphere-glow"></div>

<div className="absolute inset-0 z-30">
<svg className="overflow-visible opacity-60 mix-blend-screen" height="100%" viewbox="0 0 350 350" width="100%">

<path className="opacity-40" d="M 60 220 Q 150 240 250 160 T 400 120" fill="none" stroke="white" stroke-dasharray="3 4" strokeLinecap="round" strokeWidth="1.5"></path>

<circle className="animate-pulse" cx="60" cy="220" fill="white" r="3"></circle>
<circle className="animate-ping opacity-50" cx="60" cy="220" fill="none" r="8" stroke="white" strokeWidth="0.5"></circle>
</svg>

<div className="van-wrapper">
<div className="driving-van">

<div className="relative -translate-x-1/2 -translate-y-1/2">
<div className="bg-slate-100 text-slate-900 p-1.5 rounded shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-slate-300 transform -rotate-12 hover:scale-110 transition-transform">
<iconify-icon className="block" height="20" icon="lucide:truck" width="20"></iconify-icon>
</div>

<div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-4 bg-white/20 blur-md rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
