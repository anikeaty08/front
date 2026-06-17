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
      

<nav className="w-full max-w-[600px] bg-[#111111] border border-white/10 rounded-full px-1.5 py-1.5 flex items-center justify-between shadow-2xl shadow-black/50 z-50 relative">

<div className="flex items-center gap-3 pl-3">

<a className="flex items-center gap-2 group" href="#">

<div className="relative w-6 h-6 flex items-center justify-center">
<svg className="w-[24px] h-[24px]" fill="none" height="24" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M12 5.5L17.5 8.5V14.5L12 17.5L6.5 14.5V8.5L12 5.5ZM12 8L14.5 9.5V12.5L12 14L9.5 12.5V9.5L12 8Z" fill="#111111" fill-rule="evenodd"></path>
</svg>
</div>

<span className="text-white font-semibold tracking-tight text-sm group-hover:opacity-80 transition-opacity">SKIPER-UI</span>
</a>
</div>

<div className="flex items-center gap-1 pr-1">

<div className="hidden sm:flex items-center gap-1 mr-1">
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 px-3 py-1.5 font-medium" href="#">Collection</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 px-3 py-1.5 font-medium" href="#">Pricing</a>
</div>

<button className="sm:hidden text-neutral-400 hover:text-white p-2">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<a className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-semibold text-black bg-[rgba(201,254,110,1)] rounded-full transition-all duration-200 shadow-[0_0_15px_rgba(201,254,110,0.15)] hover:shadow-[0_0_20px_rgba(201,254,110,0.3)] hover:opacity-90" href="#">
                Sign In
            </a>
</div>
</nav>

<div className="mt-20 text-center space-y-6 max-w-lg relative z-10">
<h1 className="text-4xl sm:text-5xl text-white font-medium tracking-tight">
            Build faster with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Skiper</span>
</h1>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
            Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.
        </p>

<div className="pt-2 flex justify-center">
<a className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-[rgba(201,254,110,1)] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(201,254,110,0.2)] hover:shadow-[0_0_10px_rgba(201,254,110,0.4)] hover:scale-[1.02]" href="#">
                Explore collection
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none z-0"></div>


    </>
  );
}
