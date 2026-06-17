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
      

<div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">

<div className="absolute inset-0 ambient-glow"></div>

<div className="spark w-1 h-1 left-[10%] bottom-[-10px]" style={{animation: 'floatUp 8s linear infinite', animationDelay: '0s'}}></div>
<div className="spark w-0.5 h-0.5 left-[25%] bottom-[-10px]" style={{animation: 'floatUp 12s linear infinite', animationDelay: '2s'}}></div>
<div className="spark w-1 h-1 left-[40%] bottom-[-10px]" style={{animation: 'floatUp 10s linear infinite', animationDelay: '4s'}}></div>
<div className="spark w-0.5 h-0.5 left-[60%] bottom-[-10px]" style={{animation: 'floatUp 14s linear infinite', animationDelay: '1s'}}></div>
<div className="spark w-1 h-1 left-[80%] bottom-[-10px]" style={{animation: 'floatUp 9s linear infinite', animationDelay: '3s'}}></div>
<div className="spark w-0.5 h-0.5 left-[90%] bottom-[-10px]" style={{animation: 'floatUp 11s linear infinite', animationDelay: '5s'}}></div>
<div className="spark w-0.5 h-0.5 left-[15%] bottom-[-10px]" style={{animation: 'floatUp 13s linear infinite', animationDelay: '7s'}}></div>
<div className="spark w-1 h-1 left-[70%] bottom-[-10px]" style={{animation: 'floatUp 15s linear infinite', animationDelay: '6s'}}></div>
<div className="spark w-0.5 h-0.5 left-[33%] bottom-[-10px]" style={{animation: 'floatUp 10.5s linear infinite', animationDelay: '2.5s'}}></div>
<div className="spark w-0.5 h-0.5 left-[55%] bottom-[-10px]" style={{animation: 'floatUp 12.5s linear infinite', animationDelay: '0.5s'}}></div>
</div>

<main className="relative z-10 w-full max-w-2xl px-6 py-12 flex flex-col items-center text-center">

<header className="mb-10 w-full flex flex-col items-center space-y-4">

<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
                Professional Sneaker<br className="hidden md:block"/> Restoration
            </h1>

<p className="text-base md:text-lg text-zinc-400 font-normal tracking-normal max-w-md mx-auto">
                Drop off. Restore. Pick up clean.
            </p>
</header>

<div className="w-full flex justify-center">
<a className="group relative inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm font-medium tracking-wide transition-all duration-300 ease-out hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-black" href="https://buy.stripe.com/8x2aEW47Ncd617v6qQ7ok07" rel="noopener noreferrer" style={{minWidth: '240px'}} target="_blank">
<span>RESERVE MY SLOT ($75)</span>
<iconify-icon className="transition-transform duration-300 group-hover:translate-x-1 opacity-70" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="mt-8 flex items-center justify-center gap-2 text-zinc-600 text-xs tracking-wide uppercase opacity-60">
<iconify-icon height="14" icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
<span>Secure Checkout via Stripe</span>
</div>
</main>

    </>
  );
}
