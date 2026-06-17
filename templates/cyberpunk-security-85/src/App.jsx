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



    lucide.createIcons();
  
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
      

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] pointer-events-none z-0"></div>

<div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)] z-0"></div>

<button className="relative flex items-center justify-center w-full max-w-[640px] px-8 py-5 sm:py-6 bg-[#0a180a] group cursor-pointer border border-green-900/30 hover:bg-[#0d210d] transition-colors duration-300 z-10 active:scale-[0.99]">

<div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(0,0,0,0.5)_1px,rgba(0,0,0,0.5)_2px)] mix-blend-overlay"></div>


<div className="absolute top-0 left-0 w-5 h-5 sm:w-6 sm:h-6 border-t-[3px] border-l-[3px] border-[#50ff50] [filter:drop-shadow(0_0_6px_rgba(80,255,80,0.6))]"></div>

<div className="absolute top-0 right-0 w-5 h-5 sm:w-6 sm:h-6 border-t-[3px] border-r-[3px] border-[#50ff50] [filter:drop-shadow(0_0_6px_rgba(80,255,80,0.6))]"></div>

<div className="absolute bottom-0 left-0 w-5 h-5 sm:w-6 sm:h-6 border-b-[3px] border-l-[3px] border-[#50ff50] [filter:drop-shadow(0_0_6px_rgba(80,255,80,0.6))]"></div>

<div className="absolute bottom-0 right-0 w-5 h-5 sm:w-6 sm:h-6 border-b-[3px] border-r-[3px] border-[#50ff50] [filter:drop-shadow(0_0_6px_rgba(80,255,80,0.6))]"></div>

<span className="relative z-10 text-xl sm:text-2xl font-medium tracking-tight text-[#50ff50] [text-shadow:0_0_12px_rgba(80,255,80,0.8)] before:content-[attr(data-text)] before:absolute before:-left-[1px] before:top-0 before:w-full before:h-full before:text-[#50ff50] before:[text-shadow:0_0_12px_rgba(80,255,80,0.6)] before:animate-[glitch-anim-1_5s_infinite_linear_alternate-reverse] after:content-[attr(data-text)] after:absolute after:left-[1px] after:top-0 after:w-full after:h-full after:text-[#50ff50] after:[text-shadow:0_0_12px_rgba(80,255,80,0.6)] after:animate-[glitch-anim-2_6s_infinite_linear_alternate-reverse]" data-text="CONTINUE WITH ACCESS CODE">
      CONTINUE WITH ACCESS CODE
    </span>
</button>


    </>
  );
}
