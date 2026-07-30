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
      
<div className="w-full max-w-md mx-auto">
<div className="relative rounded-2xl border border-cyan-400/30 overflow-hidden backdrop-blur-3xl gradient-bg radial-bg">

<div className="p-4 sm:p-6 flex justify-between items-start stats-header">
<div>
<h3 className="text-xl font-bold text-white -tracking-tight">New User</h3>
<p className="text-xs text-white/70 -tracking-tight mt-1">Last 6 months</p>
</div>
<div className="flex items-center">
<div className="bg-white/5 rounded-md px-2.5 py-1 backdrop-blur-3xl border border-white/50 border-opacity-50">
<div className="flex items-center space-x-2">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
<p className="text-sm sm:text-base font-semibold text-white -tracking-tight">Overall - 80%</p>
</div>
</div>
</div>
</div>

<div className="px-3 sm:px-5 pt-2 pb-4">
<div className="flex space-x-2 sm:space-x-3">

<div className="flex flex-col justify-between text-right text-xs text-white/70 py-1">
<p>100</p>
<p className="py-1">75</p>
<p className="py-1">50</p>
<p className="py-1">25</p>
<p>0</p>
</div>

<div className="flex-1 relative">

<div className="absolute inset-0 border border-white/20 border-dashed rounded-md">
<div className="absolute w-full h-px border-t border-white/20 border-dashed top-1/4"></div>
<div className="absolute w-full h-px border-t border-white/20 border-dashed top-2/4"></div>
<div className="absolute w-full h-px border-t border-white/20 border-dashed top-3/4"></div>
</div>

<div className="flex justify-between h-40 sm:h-48 gap-4 sm:gap-6 py-2">

<div className="flex-1 flex flex-col justify-end relative chart-column group">
<div className="absolute top-8 sm:top-10 left-1/2 chart-tooltip bg-white/5 rounded-md px-2 py-1 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-xs sm:text-sm font-semibold text-white/70 text-center">80%</p>
<p className="text-xs sm:text-sm font-semibold text-white text-center">46K</p>
</div>
<div className="w-full h-[75%] rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-[10%] w-full"></div>
<div className="h-[90%] w-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end relative chart-column group">
<div className="absolute top-14 sm:top-16 left-1/2 chart-tooltip bg-white/5 rounded-md px-2 py-1 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-xs sm:text-sm font-semibold text-white/70 text-center">70%</p>
<p className="text-xs sm:text-sm font-semibold text-white text-center">41K</p>
</div>
<div className="w-full h-[65%] rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-[8%] w-full"></div>
<div className="h-[92%] w-full bar-gradient"></div>
</div>
</div>

<div className="flex-1 flex flex-col justify-end relative chart-column group">
<div className="absolute top-10 sm:top-12 left-1/2 chart-tooltip bg-white/5 rounded-md px-2 py-1 backdrop-blur-3xl border border-white/50 border-opacity-50 z-10">
<p className="text-xs sm:text-sm font-semibold text-white/70 text-center">78%</p>
<p className="text-xs sm:text-sm font-semibold text-white text-center">30K</p>
</div>
<div className="w-full h-[72%] rounded-t-md border border-cyan-400/30 inner-shadow overflow-hidden">
<div className="h-[9%] w-full"></div>
<div className="h-[91%] w-full bar-gradient"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-between text-xs text-white/70 pt-2 mt-1">
<div className="flex-1 text-center">App Install</div>
<div className="flex-1 text-center">App Open</div>
<div className="flex-1 text-center">Sign Up</div>
</div>
</div>
</div>
</div>

    </>
  );
}
