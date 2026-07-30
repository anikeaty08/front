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
      
<div className="w-[350px] max-w-full bg-white/10 border border-white/20 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col overflow-hidden">

<div className="flex flex-col gap-2 border-b border-white/10 px-6 py-5 bg-white/5">
<div className="text-white font-semibold text-lg leading-tight tracking-tight">App Downloads</div>
<div className="text-white/60 text-xs">Last 30 days</div>
</div>

<div className="flex border-b border-white/10 bg-white/5">
<button className="flex-1 text-white border-b-2 border-sky-400 font-medium text-sm py-3">All</button>
<button className="flex-1 text-white/60 border-b-2 border-transparent font-medium text-sm py-3 hover:text-white">iOS</button>
<button className="flex-1 text-white/60 border-b-2 border-transparent font-medium text-sm py-3 hover:text-white">Android</button>
</div>

<div className="flex flex-col gap-1 px-6 py-6 border-b border-white/10 bg-white/5">
<div className="text-2xl sm:text-3xl text-white font-extrabold leading-tight tracking-tight">840,233</div>
<div className="text-white/70 text-xs font-medium">Total Downloads</div>
</div>

<div className="flex flex-col divide-y divide-white/10">

<div className="flex flex-col gap-1 px-6 py-5">
<div className="flex justify-between items-end mb-1">
<span className="text-white font-medium text-sm">Apple App Store</span>
<span className="text-white/80 text-sm font-semibold">296,000</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-blue-400 via-sky-400 to-white/30 h-full rounded-full" style={{width: `58%`}}></div>
</div>
</div>

<div className="flex flex-col gap-1 px-6 py-5">
<div className="flex justify-between items-end mb-1">
<span className="text-white font-medium text-sm">Google Play Store</span>
<span className="text-white/80 text-sm font-semibold">545,120</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-green-300 via-green-400 to-white/30 h-full rounded-full" style={{width: `68%`}}></div>
</div>
</div>

<div className="flex flex-col gap-1 px-6 py-5">
<div className="flex justify-between items-end mb-1">
<span className="text-white font-medium text-sm">Direct Download</span>
<span className="text-white/80 text-sm font-semibold">15,230</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full" style={{width: `18%`}}></div>
</div>
</div>

<div className="flex flex-col gap-1 px-6 py-5">
<div className="flex justify-between items-end mb-1">
<span className="text-white font-medium text-sm">Other</span>
<span className="text-white/80 text-sm font-semibold">2,883</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="bg-gradient-to-r from-pink-400 to-fuchsia-500 h-full rounded-full" style={{width: `7%`}}></div>
</div>
</div>
</div>
</div>

    </>
  );
}
