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
      
<div className="w-full max-w-md mx-auto flex flex-col min-h-screen bg-white">

<header className="w-full bg-white border-b border-slate-200 pt-6 pb-3 px-5">
<div className="flex items-center justify-center">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Level 1
        </h1>
</div>

<div className="mt-4 w-full h-3 rounded-full bg-slate-200 overflow-hidden">

<div className="h-full bg-blue-600 w-1/5"></div>
</div>
</header>

<section className="w-full px-5 pt-6">
<p className="text-xl md:text-2xl font-medium tracking-tight text-slate-800 leading-snug">
        Tap the item that matches the body part.
      </p>
</section>

<main className="flex-1 w-full px-5 pt-6 pb-32">
<div className="flex flex-col gap-4">

<button aria-pressed="true" className="w-full bg-gray-50 border-2 border-blue-600 rounded-2xl py-4 px-4 flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-blue-300" type="button">
<div className="flex items-center gap-4">

<div className="flex items-center justify-center rounded-full bg-blue-50 border border-blue-100 w-16 h-16">
<svg aria-hidden="true" className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"></path>
<path d="M6 20a6 6 0 0 1 12 0"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                Head
              </span>
<span className="text-lg font-medium text-blue-700">
                Current focus
              </span>
</div>
</div>

<div className="flex items-center justify-center text-blue-600">
<svg aria-hidden="true" className="w-7 h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18l6-6-6-6"></path>
</svg>
</div>
</button>

<button aria-pressed="false" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-4 flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-blue-300" type="button">
<div className="flex items-center gap-4">

<div className="flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 w-16 h-16">
<svg aria-hidden="true" className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 4-2 5-3 6.5-.8.9-1 1.4-1 2.5a2 2 0 0 1-4 0"></path>
<path d="M8 8a2.5 2.5 0 0 1 5 0c0 1.5-.5 2-1 2.5"></path>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                Ear
              </span>
<span className="text-lg font-medium text-slate-700">
                Hearing
              </span>
</div>
</div>
</button>

<button aria-pressed="false" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-4 flex items-center justify-between focus:outline-none focus:ring-4 focus:ring-blue-300" type="button">
<div className="flex items-center gap-4">

<div className="flex items-center justify-center rounded-full bg-slate-50 border border-slate-200 w-16 h-16">
<svg aria-hidden="true" className="w-10 h-10 text-slate-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="flex flex-col items-start">
<span className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">
                Eye
              </span>
<span className="text-lg font-medium text-slate-700">
                Seeing
              </span>
</div>
</div>
</button>
</div>
</main>

<footer className="fixed inset-x-0 bottom-0">
<div className="w-full max-w-md mx-auto bg-white shadow-[0_-8_24_0_rgba(15,23,42,0.18)] border-t border-slate-200">
<div className="px-5 pt-3 pb-5 flex flex-col gap-3">
<p className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">
            Choose one item:
          </p>
<div className="flex items-stretch justify-between gap-3">

<button className="flex-1 bg-gradient-to-b from-red-500 to-red-700 rounded-2xl shadow-2xl shadow-red-700/40 py-4 px-2 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300" type="button">
<span aria-hidden="true" className="text-4xl">🎎</span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-white leading-snug">
                Russian Doll
              </span>
</button>

<button className="flex-1 bg-gradient-to-b from-amber-400 to-orange-600 rounded-2xl shadow-2xl shadow-orange-700/40 py-4 px-2 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300" type="button">
<span aria-hidden="true" className="text-4xl">🍁</span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-white leading-snug">
                Maple Leaves
              </span>
</button>

<button className="flex-1 bg-gradient-to-b from-emerald-400 to-emerald-700 rounded-2xl shadow-2xl shadow-emerald-800/40 py-4 px-2 flex flex-col items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300" type="button">
<span aria-hidden="true" className="text-4xl">🍔</span>
<span className="text-lg md:text-xl font-semibold tracking-tight text-white leading-snug">
                Hamburger
              </span>
</button>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
