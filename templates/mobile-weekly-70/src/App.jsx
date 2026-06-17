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
      

<div className="flex justify-between items-center px-6 pt-3 pb-2">
<span className="text-sm font-semibold text-neutral-900">15:35</span>
<div className="flex items-center gap-1">
<div className="flex gap-0.5">
<div className="w-1 h-2 bg-neutral-900 rounded-sm"></div>
<div className="w-1 h-2.5 bg-neutral-900 rounded-sm"></div>
<div className="w-1 h-3 bg-neutral-900 rounded-sm"></div>
<div className="w-1 h-3.5 bg-neutral-300 rounded-sm"></div>
</div>
<span className="text-xs font-medium text-neutral-900 ml-1">LTE</span>
<div className="w-6 h-3 bg-neutral-900 rounded-sm ml-1 relative">
<div className="absolute right-0.5 top-0.5 bottom-0.5 w-3 bg-neutral-50 rounded-sm"></div>
</div>
</div>
</div>

<div className="px-6 pt-6">

<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-2">
<h1 className="text-5xl font-bold tracking-tight text-neutral-900">Mon</h1>
<div className="w-4 h-4 bg-red-500 rounded-full mt-2"></div>
</div>
<div className="text-right">
<p className="text-xl font-medium text-neutral-400">January 05</p>
<p className="text-xl font-medium text-neutral-300">2026</p>
</div>
</div>

<div className="flex justify-between items-center mb-6 pb-6 dotted-border">
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-neutral-300">4</span>
<span className="text-xs font-medium text-neutral-400 uppercase">Sun</span>
</div>
<div className="flex flex-col items-center bg-white rounded-2xl px-4 py-2 shadow-sm">
<span className="text-2xl font-semibold text-neutral-900">5</span>
<span className="text-xs font-semibold text-red-500 uppercase">Mon</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-neutral-300">6</span>
<span className="text-xs font-medium text-neutral-400 uppercase">Tue</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-neutral-300">7</span>
<span className="text-xs font-medium text-neutral-400 uppercase">Wed</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-neutral-300">8</span>
<span className="text-xs font-medium text-neutral-400 uppercase">Thu</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-neutral-300">9</span>
<span className="text-xs font-medium text-neutral-400 uppercase">Fri</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-medium text-neutral-300">10</span>
<span className="text-xs font-medium text-neutral-400 uppercase">Sat</span>
</div>
</div>

<div className="space-y-0">

<div className="flex items-center justify-between py-4 dotted-border">
<div className="flex items-center gap-4">
<span className="text-2xl">☀️</span>
<span className="text-lg font-medium text-neutral-400 line-through">Wake Up</span>
</div>
<span className="text-base font-normal text-neutral-400">09:00</span>
</div>

<div className="flex dotted-border pt-4 pb-4 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full border-2 border-dashed border-neutral-300"></div>
<span className="text-lg font-medium text-neutral-900">Exercise</span>
</div>
</div>

<div className="flex dotted-border pt-4 pb-4 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full border-2 border-dashed border-neutral-300"></div>
<span className="text-lg font-medium text-neutral-900">Drink water</span>
</div>
</div>

<div className="flex dotted-border pt-4 pb-4 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full border-2 border-dashed border-neutral-300"></div>
<span className="text-lg font-medium text-neutral-900">Meeting notes</span>
</div>
</div>

<div className="flex items-center justify-between py-4 dotted-border">
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full border-2 border-dashed border-neutral-300"></div>
<span className="text-lg font-medium text-neutral-900">Read book</span>
</div>
</div>

<div className="flex items-center justify-between py-4 dotted-border">
<div className="flex items-center gap-4">
<span className="text-2xl">🌙</span>
<span className="text-lg font-medium text-neutral-900">Wind Down</span>
</div>
<span className="text-base font-normal text-neutral-400">22:00</span>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto px-6 pb-8 pt-4 bg-gradient-to-t from-neutral-50 via-neutral-50 to-transparent">
<div className="flex justify-between items-center">
<button className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-sun w-5 h-5 text-neutral-500" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<button className="w-14 h-14 rounded-full bg-neutral-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-plus w-6 h-6 text-neutral-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center">
<svg className="lucide lucide-grid-2x2 w-5 h-5 text-neutral-500" data-lucide="grid-2x2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="M3 12h18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
</div>
</div>


    </>
  );
}
