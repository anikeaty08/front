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
      
<div className="max-w-3xl mx-auto">
<div className="stats-card rounded-xl shadow-lg p-6 space-y-6">

<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold text-slate-200">Monthly Performance</h2>
<div className="px-3 py-1 bg-indigo-900/50 rounded-md border border-indigo-700/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-indigo-400"></div>
<span className="text-sm font-medium text-indigo-300">Q3 2023</span>
</div>
</div>
</div>

<div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
<div className="flex gap-4 h-64">

<div className="flex flex-col justify-between text-right text-xs text-slate-400 py-1">
<span>100</span>
<span>75</span>
<span>50</span>
<span>25</span>
<span>0</span>
</div>

<div className="flex-1 grid grid-cols-4 gap-8">

<div className="flex flex-col justify-end relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded-md shadow-md border border-slate-700 text-center">
<p className="text-xs font-medium text-slate-200">$86K</p>
</div>
<div className="h-[70%] w-full bg-indigo-500 rounded-t-md chart-bar border-t border-x border-indigo-600"></div>
<div className="text-center mt-2 text-xs font-medium text-slate-400">Revenue</div>
</div>

<div className="flex flex-col justify-end relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded-md shadow-md border border-slate-700 text-center">
<p className="text-xs font-medium text-slate-200">5.4K</p>
</div>
<div className="h-[55%] w-full bg-cyan-500 rounded-t-md chart-bar border-t border-x border-cyan-600"></div>
<div className="text-center mt-2 text-xs font-medium text-slate-400">Users</div>
</div>

<div className="flex flex-col justify-end relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded-md shadow-md border border-slate-700 text-center">
<p className="text-xs font-medium text-slate-200">42K</p>
</div>
<div className="h-[65%] w-full bg-emerald-500 rounded-t-md chart-bar border-t border-x border-emerald-600"></div>
<div className="text-center mt-2 text-xs font-medium text-slate-400">Sessions</div>
</div>

<div className="flex flex-col justify-end relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 px-2 py-1 rounded-md shadow-md border border-slate-700 text-center">
<p className="text-xs font-medium text-slate-200">3.8</p>
</div>
<div className="h-[80%] w-full bg-amber-500 rounded-t-md chart-bar border-t border-x border-amber-600"></div>
<div className="text-center mt-2 text-xs font-medium text-slate-400">Conversion</div>
</div>
</div>
</div>

<div className="relative h-0.5 bg-slate-700/30 mt-2">
<div className="absolute w-full h-px bg-slate-700/30 -top-[64px]"></div>
<div className="absolute w-full h-px bg-slate-700/30 -top-[128px]"></div>
<div className="absolute w-full h-px bg-slate-700/30 -top-[192px]"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
<div className="text-sm font-medium text-slate-400">Growth</div>
<div className="text-xl font-semibold text-slate-200 mt-1">+18.6%</div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
<div className="text-sm font-medium text-slate-400">Avg. Session</div>
<div className="text-xl font-semibold text-slate-200 mt-1">4m 32s</div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
<div className="text-sm font-medium text-slate-400">Return Rate</div>
<div className="text-xl font-semibold text-slate-200 mt-1">42.8%</div>
</div>
</div>
</div>
</div>

    </>
  );
}
