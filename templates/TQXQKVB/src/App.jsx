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
      
    lucide.createIcons({ strokeWidth: 1.5 });

    const hero  = document.getElementById('hero');
    const mask  = document.getElementById('mask');

    hero.addEventListener('pointermove', e => updateMask(e));
    hero.addEventListener('pointerdown',  e => updateMask(e));

    function updateMask(e) {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mask.style.background = `radial-gradient(circle 30vmax at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 90%)`;
    }

    hero.addEventListener('pointerleave', () => {
      mask.style.transition = 'background 0.6s ease';
      mask.style.background = 'radial-gradient(circle 30vmax at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 90%)';
      setTimeout(()=>mask.style.transition='', 600);
    });
  
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
      

<section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden" id="hero">

<img alt="Background" className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-80 animate-[fade-in_1s_ease-out]" src="https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&amp;fit=crop&amp;w=1950&amp;q=80"/>

<div className="pointer-events-none absolute inset-0 transition-opacity duration-300" id="mask" style={{background: 'radial-gradient(circle 30vmax at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.85) 90%)'}}>
</div>

<div className="relative z-10 flex flex-col items-center gap-6">
<div className="w-24 h-24 rounded-full bg-neutral-900/80 backdrop-blur-md flex items-center justify-center border border-neutral-700/60 animate-[slide-in_0.8s_0.2s_both]">
<i className="w-12 h-12 stroke-neutral-50" data-lucide="aperture"></i>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight animate-[slide-in_0.9s_0.3s_both]">
        Night Vision
      </h1>
<p className="max-w-lg text-center text-neutral-400 animate-[fade-in_1.2s_0.4s_both]">
        Explore how focused attention reveals hidden details. Move your cursor to illuminate the path.
      </p>
</div>
</section>

<style>
    @keyframes fade-in {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes slide-in {
      from { opacity: 0; transform: translateY(8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  </style>



    </>
  );
}
