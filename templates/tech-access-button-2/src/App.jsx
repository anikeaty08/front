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
      
<button className="relative z-10 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none bg-[#82ff7a] text-[#051f05] font-medium text-lg overflow-hidden transition-all duration-300 ease-out group hover:scale-[1.02] hover:shadow-[0_0_35px_-10px_rgba(130,255,122,0.6)] active:scale-[0.98] ring-1 ring-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.1)]">

<div className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-[#008f11]/40 to-transparent pointer-events-none" style={{animation: 'scan-sweep 2.5s linear infinite'}}></div>

<div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-[#051f05]/30 group-hover:border-[#051f05]/80 transition-colors duration-300 pointer-events-none"></div>
<div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-[#051f05]/30 group-hover:border-[#051f05]/80 transition-colors duration-300 pointer-events-none"></div>
<div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-[#051f05]/30 group-hover:border-[#051f05]/80 transition-colors duration-300 pointer-events-none"></div>
<div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-[#051f05]/30 group-hover:border-[#051f05]/80 transition-colors duration-300 pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none mix-blend-darken bg-[repeating-linear-gradient(90deg,transparent,transparent_1px,#00000015_1px,#00000015_2px)]" style={{animation: 'scan-texture 1.5s linear infinite'}}></div>

<div className="absolute inset-0 pointer-events-none -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-[linear-gradient(90deg,transparent,#ffffff70,transparent)]"></div>

<span className="relative z-10 flex items-center gap-2.5 drop-shadow-[0_1px_0_rgba(255,255,255,0.4)] tracking-tight">
<iconify-icon className="text-xl" icon="solar:key-minimalistic-linear"></iconify-icon>
            Continue with Access Code
            <iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</button>

    </>
  );
}
