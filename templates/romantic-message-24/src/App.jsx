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
      

<div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="floating-heart left-[15%] text-2xl opacity-40" style={{animationDuration: '9s', animationDelay: '0s'}}>💖</div>
<div className="floating-heart left-[35%] text-base opacity-30" style={{animationDuration: '12s', animationDelay: '2s'}}>💖</div>
<div className="floating-heart left-[65%] text-3xl opacity-20" style={{animationDuration: '10s', animationDelay: '5s'}}>💖</div>
<div className="floating-heart left-[85%] text-lg opacity-50" style={{animationDuration: '8s', animationDelay: '1s'}}>💖</div>
<div className="floating-heart left-[50%] text-xl opacity-40" style={{animationDuration: '14s', animationDelay: '3s'}}>💖</div>
</div>

<main className="relative z-10 w-[90%] max-w-[400px] bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[32px] shadow-[0_24px_48px_-12px_rgba(90,75,94,0.15)] min-h-[380px] flex flex-col justify-center items-center text-center transition-all duration-500">
<div className="animate-slide-up flex flex-col items-center w-full gap-8">

<div className="flex flex-col items-center gap-5">
<div className="w-14 h-14 bg-white/70 rounded-2xl flex items-center justify-center shadow-sm text-[#d15c8a] ring-1 ring-white/80">
<iconify-icon height="28" icon="solar:letter-opened-linear" width="28"></iconify-icon>
</div>
<h1 className="text-2xl font-bold tracking-tight text-[#d15c8a] leading-snug max-w-[260px]">
                    Hey NAVI! I have something for you...
                </h1>
<p className="text-sm font-normal text-[#5a4b5e]/80 max-w-[220px]">
                    A special message awaits just a tap away.
                </p>
</div>

<div className="flex flex-col gap-3 w-full mt-2">
<button className="group relative w-full bg-white text-[#d15c8a] py-3.5 px-6 text-base font-semibold rounded-full shadow-[0_8px_20px_-6px_rgba(209,92,138,0.3)] hover:shadow-[0_12px_24px_-8px_rgba(209,92,138,0.4)] hover:bg-[#d15c8a] hover:text-white transition-all duration-300 active:scale-[0.97] flex items-center justify-center gap-2 overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                        Open message
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<button className="w-full bg-transparent border-2 border-white/50 text-[#5a4b5e] py-3 px-6 text-sm font-semibold rounded-full hover:bg-white/40 hover:border-white/80 transition-all duration-300 active:scale-[0.97]">
                    Maybe later
                </button>
</div>
</div>

<div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/20 pointer-events-none"></div>
</main>

    </>
  );
}
