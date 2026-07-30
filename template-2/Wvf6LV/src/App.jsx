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
      

<div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 pt-5 pointer-events-none select-none" style={{fontFamily: `'Inter', sans-serif`}}>
<span className="text-white text-sm font-semibold tracking-wide">9:41</span>
<div className="flex space-x-1 items-center">

<svg fill="none" height="20" width="20"><rect fill="#fff" height="5" rx="1" width="2" x="2" y="13"></rect><rect fill="#fff" height="8" rx="1" width="2" x="6" y="10"></rect><rect fill="#fff" height="11" rx="1" width="2" x="10" y="7"></rect><rect fill="#fff" height="13" rx="1" width="2" x="14" y="5"></rect></svg>

<svg fill="none" height="20" width="20"><path d="M3 10a9 9 0 0 1 14 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></path><path d="M6 13a6 6 0 0 1 8 0" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"></path><circle cx="10" cy="16" fill="#fff" r="1"></circle></svg>

<svg fill="none" height="14" width="28"><rect height="8" rx="2" stroke="#fff" strokeWidth="1.2" width="22" x="2" y="3"></rect><rect fill="#fff" height="2.5" rx="1" width="2" x="24" y="6"></rect></svg>
</div>
</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute left-20 top-0 w-72 h-72 bg-gradient-to-tr from-blue-700 via-purple-800 to-pink-400 opacity-40 rounded-full blur-3xl"></div>
<div className="absolute right-3 top-20 w-56 h-56 bg-gradient-to-br from-purple-700 via-purple-500 to-blue-700 opacity-30 rounded-full blur-2xl"></div>
<div className="absolute -left-10 bottom-10 w-40 h-40 bg-gradient-to-t from-pink-400 via-orange-400 to-yellow-300 opacity-20 rounded-full blur-2xl"></div>
</div>
<main className="w-full max-w-sm mx-auto px-4 pb-8 pt-20 flex flex-col items-center">

<div className="relative w-72 h-48 mb-9 mt-2">

<div className="absolute left-0 right-0 top-6 mx-auto w-72 h-40 rounded-3xl bg-gradient-to-tr from-blue-800 via-violet-900/90 to-purple-700/80 opacity-80 shadow-xl border border-white/5" style={{zIndex: `0`}}>

<div className="pt-5 pl-6 flex items-center space-x-3">
<span className="mastercard">
<span className="mc-circle1"></span>
<span className="mc-circle2"></span>
</span>
</div>

<div className="absolute right-8 top-6">
<span className="card-chip"></span>
</div>
<div className="absolute left-7 bottom-8 text-white/40 text-xs font-medium tracking-widest">EXP 10/12</div>
<div className="absolute left-7 bottom-5 text-white/30 text-base font-mono tracking-widest">**** 1234</div>
</div>

<div className="absolute left-0 right-0 top-3 mx-auto w-72 h-40 rounded-3xl bg-gradient-to-tr from-indigo-800 via-fuchsia-700/80 to-purple-400/60 opacity-90 shadow-2xl border border-white/10" style={{zIndex: `2`, filter: `blur(0.5px)`}}>
<div className="pt-5 pl-6 flex items-center space-x-3">
<span className="mastercard">
<span className="mc-circle1"></span>
<span className="mc-circle2"></span>
</span>
</div>
<div className="absolute right-8 top-6">
<span className="card-chip"></span>
</div>
<div className="absolute left-7 bottom-8 text-white/60 text-xs font-medium tracking-widest">EXP 10/12</div>
<div className="absolute left-7 bottom-5 text-white/50 text-base font-mono tracking-widest">**** 1234</div>
</div>

<div className="absolute left-0 right-0 top-0 mx-auto w-72 h-40 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-400/80 to-fuchsia-400/90 opacity-95 shadow-2xl border border-white/20" style={{zIndex: `4`}}>
<div className="pt-5 pl-6 flex items-center space-x-3">
<span className="mastercard">
<span className="mc-circle1"></span>
<span className="mc-circle2"></span>
</span>
</div>
<div className="absolute right-8 top-6">
<span className="card-chip"></span>
</div>
<div className="absolute left-7 bottom-8 text-white text-xs font-semibold tracking-widest">EXP 10/12</div>
<div className="absolute left-7 bottom-5 text-white text-lg font-mono font-bold tracking-widest">**** 1234</div>
</div>
</div>

<h1 className="mb-3 text-3xl sm:text-4xl font-black gradient-text text-center leading-tight tracking-tight">
      One place to stack all your cards.
    </h1>

<p className="mb-8 text-white/80 text-base text-center font-medium leading-relaxed max-w-xs">
      Save all your precious credit cards, tickets, logins in simple and swipable stacks. We even keep a history of your super secret transactions that only you can see.
    </p>

<div className="flex justify-center items-center space-x-3 mb-9">
<div className="h-2 w-2 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg"></div>
<div className="h-2 w-2 rounded-full bg-white/10"></div>
<div className="h-2 w-2 rounded-full bg-white/10"></div>
</div>

<button className="absolute bottom-7 right-7 hexagon group transition duration-150 active:scale-95">
<svg className="mx-auto" fill="none" height="30" viewBox="0 0 24 24" width="30">
<path d="M9 6l6 6-6 6" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
</svg>
</button>
</main>

    </>
  );
}
