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
      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
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
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div></div>
<section className="relative w-full min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden">


<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(60% 50% at 50% 10%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.00) 60%), linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.55))`}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-white/10"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-white/10"></div>

<div className="relative z-10 max-w-4xl sm:px-8 text-center mr-auto ml-auto pr-6 pl-6" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`}}>
<h1 className="sm:text-5xl md:text-7xl leading-[1.05] sm:leading-[1.08] md:leading-[1.05] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] text-4xl text-white tracking-tight font-medium font-jakarta" style={{}}>
          Build the future, starting today
        </h1>
<p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-neutral-300/95 max-w-2xl mx-auto font-geist" style={{}}>
          Create, launch, and scale with a platform designed for speed and clarity. Powerful tools, beautiful defaults, and effortless workflows.
        </p>
<div className="mt-8 sm:mt-10 flex items-center justify-center">
<a aria-label="Get started" className="inline-flex items-center gap-2 md:px-7 md:py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-black/10 hover:bg-neutral-100 hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40 transition-colors font-medium text-neutral-900 bg-white rounded-md pt-3 pr-6 pb-3 pl-6 font-geist" href="#" style={{letterSpacing: `0px`}}>
            Get started
            
<svg className="h-5 w-5 -mr-0.5" fill="none" stroke="currentColor" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 8.25L21 12m0 0-3.75 3.75M21 12H3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</div>

<div className="pointer-events-none absolute inset-0" style={{boxShadow: `inset 0 0 160px 60px rgba(0,0,0,0.55)`}}></div>
</section>

    </>
  );
}
