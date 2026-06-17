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
      

<main className="min-h-screen flex flex-col items-center justify-center px-8 relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(39,39,42,0.15),transparent_70%)] pointer-events-none"></div>

<div className="mb-16 flex items-center gap-3 py-1 px-3 border border-zinc-800/50 bg-zinc-900/30 rounded-full">
<span className="flex h-1.5 w-1.5 rounded-full bg-zinc-600"></span>
<span className="text-[10px] font-medium tracking-[0.25em] text-zinc-500 uppercase">Private Beta Access</span>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8 text-center max-w-3xl leading-[1.05]">
            Strategic leadership, autonomously executed.
        </h1>

<p className="text-base md:text-lg text-zinc-500 max-w-md mb-16 text-center leading-relaxed font-light">
            Private intelligence for rapid scale.
        </p>

<div className="w-full max-w-lg">
<form className="group flex flex-col sm:flex-row gap-0 p-1 bg-zinc-900/40 border border-zinc-800 rounded-lg focus-within:border-zinc-700 focus-within:ring-1 focus-within:ring-zinc-800 transition-all duration-500">
<input className="flex-grow bg-transparent px-6 py-5 text-sm focus:outline-none placeholder:text-zinc-700 font-light" placeholder="Enter your professional email" required="" type="email"/>
<button className="bg-white text-zinc-950 font-semibold text-sm px-10 py-5 rounded-md hover:bg-zinc-200 transition-colors whitespace-nowrap m-1" type="submit">
                    Request Access
                </button>
</form>

<div className="mt-8 flex flex-col items-center gap-4">
<div className="flex items-center gap-2 opacity-40">
<iconify-icon icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Strictly by invitation only</span>
</div>
</div>
</div>
</main>

<nav className="fixed top-12 left-0 w-full px-12 flex justify-between items-center pointer-events-none opacity-20">
<span className="text-[10px] font-medium tracking-[0.4em] uppercase">AIVAIO</span>
<span className="text-[10px] font-medium tracking-[0.4em] uppercase">MMXXIV</span>
</nav>

<footer className="fixed bottom-12 w-full text-center pointer-events-none">
<p className="text-[9px] text-zinc-800 uppercase tracking-[0.5em]">For high-level founders</p>
</footer>

    </>
  );
}
