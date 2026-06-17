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
      
<div className="max-w-lg mx-auto">
<div className="relative rounded-2xl border border-cyan-400/30 overflow-hidden backdrop-blur-3xl gradient-bg radial-bg p-2">

<div className="p-8 flex justify-between items-start">
<div>
<h3 className="text-2xl font-bold text-white -tracking-tight">User Engagement</h3>
<p className="text-sm text-white/70 -tracking-tight mt-2">Weekly overview</p>
</div>
<div className="flex items-center">
<div className="bg-white/5 rounded-md px-3 py-1.5 backdrop-blur-3xl border border-white/50 border-opacity-50">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 rounded-full bg-cyan-400"></div>
<p className="text-base font-semibold text-white -tracking-tight">Weekly Report</p>
</div>
</div>
</div>
</div>

<div className="px-8 pt-4 pb-2">
<div className="flex space-x-6">

<div className="flex flex-col justify-between text-right text-sm text-white py-2">
<p>100</p>
<p>75</p>
<p>50</p>
<p>25</p>
<p>0</p>
</div>

<div className="flex-1 relative">

<div className="absolute inset-0 border border-white/50 border-dashed opacity-30">
<div className="absolute w-full h-px border-t border-white/50 border-dashed top-1/4"></div>
<div className="absolute w-full h-px border-t border-white/50 border-dashed top-2/4"></div>
<div className="absolute w-full h-px border-t border-white/50 border-dashed top-3/4"></div>
</div>

<div className="flex justify-between h-56 gap-6">

<div className="flex-1 flex flex-col justify-end relative">
<div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white/5 rounded-md px-3 py-2 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-sm font-semibold text-white/70">85%</p>
<p className="text-sm font-semibold text-white">12.4K</p>
</div>
<div className="w-full h-48 rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-6 w-full"></div>
<div className="h-42 w-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end relative">
<div className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/5 rounded-md px-3 py-2 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-sm font-semibold text-white/70">62%</p>
<p className="text-sm font-semibold text-white">8.9K</p>
</div>
<div className="w-full h-32 rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-5 w-full"></div>
<div className="h-27 w-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end relative">
<div className="absolute top-16 left-1/2 -translate-x-1/2 bg-white/5 rounded-md px-3 py-2 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-sm font-semibold text-white/70">68%</p>
<p className="text-sm font-semibold text-white">9.7K</p>
</div>
<div className="w-full h-38 rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-4 w-full"></div>
<div className="h-34 w-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end relative">
<div className="absolute top-24 left-1/2 -translate-x-1/2 bg-white/5 rounded-md px-3 py-2 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-sm font-semibold text-white/70">54%</p>
<p className="text-sm font-semibold text-white">7.8K</p>
</div>
<div className="w-full h-28 rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-5 w-full"></div>
<div className="h-23 w-full bar-gradient"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-between text-sm text-white/70 pt-4 pb-6 px-12 ml-6">
<p>Day 1</p>
<p>Day 3</p>
<p>Day 7</p>
<p>Day 14</p>
</div>
</div>

<div className="px-8 pb-8 pt-2">
<div className="card-grid">

<div className="bg-white/5 rounded-md p-4 backdrop-blur-3xl border border-white/20">
<p className="text-sm text-white/70">Session Duration</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold text-white">8m 42s</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-cyan-400 ml-1">+12%</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-md p-4 backdrop-blur-3xl border border-white/20">
<p className="text-sm text-white/70">Screens / Session</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold text-white">5.2</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-cyan-400 ml-1">+8%</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-md p-4 backdrop-blur-3xl border border-white/20">
<p className="text-sm text-white/70">DAU / MAU</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold text-white">34%</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-cyan-400 ml-1">+5%</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-md p-4 backdrop-blur-3xl border border-white/20">
<p className="text-sm text-white/70">User Stickiness</p>
<div className="flex items-center justify-between mt-2">
<p className="text-xl font-semibold text-white">42%</p>
<div className="flex items-center">
<svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-cyan-400 ml-1">+15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
