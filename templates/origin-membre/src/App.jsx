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
      

<header className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
<div className="max-w-3xl flex flex-col items-center gap-8">
<h1 className="font-['Playfair_Display'] font-semibold tracking-tight text-[#f5f5f5] text-5xl md:text-7xl lg:text-8xl uppercase tracking-[-0.05em]">
                Origin
            </h1>
<p className="font-['Playfair_Display'] italic text-[#f5f5f5] text-xl md:text-3xl max-w-2xl">
                Ce qui est au point de départ sera à l'arrivée.
            </p>

<p className="font-['Inter'] font-medium text-[#b8860b] text-sm md:text-base uppercase tracking-widest mt-4">
                Les portes s'ouvrent le 05/05
            </p>
<div className="flex items-center gap-4 text-[#4a4a4a] text-xs md:text-sm font-normal uppercase tracking-widest mt-4">
<span>Un parcours philosophique</span>
<span>·</span>
<span>41 jours</span>
<span>·</span>
<span>100% autonome</span>
</div>
</div>
</header>

    </>
  );
}
