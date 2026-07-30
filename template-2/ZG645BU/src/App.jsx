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
      
    const gradients = document.querySelectorAll('.gradient, .gradient-white');
    window.addEventListener('pointermove', e=>{
      const x = (e.clientX / innerWidth) * 100;
      const y = (e.clientY / innerHeight) * 100;
      gradients.forEach(g=>{
        g.style.setProperty('--x', `${x}%`);
        g.style.setProperty('--y', `${y}%`);
      });
    },{passive:true});
  
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
      
<div aria-hidden="true" className="gradient-wrap">
<div className="gradient"></div>
<div className="gradient-white"></div>
</div>
<h1 className="relative z-10 text-white text-[96px] leading-none font-thin tracking-tight font-['Manrope',_sans-serif]" tabindex="-1">
    Explore Possibilities
  </h1>
<div aria-label="Decorative glass card with dual gradients" className="card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400" tabindex="0"></div>


    </>
  );
}
