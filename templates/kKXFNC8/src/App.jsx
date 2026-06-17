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
      
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-6 py-8">
<h2 className="text-center text-neutral-700 text-xl font-semibold mb-7 tracking-tight">Send e-Transfer</h2>

<div>
<div className="text-xs uppercase font-medium text-slate-400">Recipient</div>
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full">
<svg className="stroke-sky-500" fill="none" height="20" viewbox="0 0 24 24" width="20">
<circle cx="12" cy="10" r="4" strokeWidth="1.6"></circle>
<path d="M3.5 20c1.5-4 15.5-4 17 0" strokeWidth="1.2"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-700 truncate">William Chung</div>
<div className="text-xs text-slate-400 truncate">443-345-5462</div>
</div>
</div>
</div>

<div className="mt-5">
<div className="text-xs uppercase font-medium text-slate-400">Schedule</div>
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full">
<svg className="stroke-indigo-400" fill="none" height="20" viewbox="0 0 24 24" width="20">
<rect height="10" rx="3" strokeWidth="1.3" width="16" x="4" y="7"></rect>
<rect height="4" rx="1.4" strokeWidth="1" width="8" x="8" y="11.5"></rect>
<line strokeWidth="1" x1="12" x2="12" y1="3.7" y2="7"></line>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-700">Today, Apr 23, 2025</div>
</div>
</div>
</div>

<div className="mt-5">
<div className="text-xs uppercase font-medium text-slate-400">Source Account</div>
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="flex items-center justify-center w-10 h-10 bg-slate-100 rounded-full">
<svg className="stroke-indigo-500" fill="none" height="20" viewbox="0 0 24 24" width="20">
<rect height="8" rx="2.5" strokeWidth="1.2" width="16" x="4" y="8"></rect>
<rect fill="#6366f1" fillOpacity="0.25" height="2" rx="1" width="8" x="8" y="13"></rect>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-700">RBC - Savings</div>
<div className="text-xs text-slate-400 truncate">Daily interest regular savings</div>
</div>
</div>
</div>

<button className="mt-7 w-full py-3 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-105 shadow transition">
      Confirm Payment
    </button>
</div>

    </>
  );
}
