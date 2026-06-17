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
      
<div className="bg-white rounded-xl shadow-lg px-8 py-7 w-fit min-w-[300px]">
<div className="mb-6">
<h2 className="text-neutral-900 text-xl font-semibold">Course Revenue</h2>
<p className="text-neutral-400 text-xs mt-1">Last 6 months</p>
</div>

<div className="w-full max-w-xs">
<div className="flex items-center justify-between text-xs mb-2">
<span className="text-indigo-600 font-medium">Course Sales</span>
<span className="text-neutral-400 font-medium">$8,100</span>
</div>
<div className="flex h-8 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50 mb-2 w-full">
<div className="bar-segment bar-animate bg-indigo-500 flex items-center justify-center text-white text-sm font-semibold h-full" style={{width: '62.1%'}} title="Course Sales">
<span className="ml-2 text-xs font-semibold"></span>
</div>
<div className="bar-segment bar-animate bg-fuchsia-200 flex items-center justify-center text-indigo-800 text-sm font-semibold h-full" style={{width: '37.9%'}} title="Other Income">

</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-fuchsia-400 font-medium">Other Income</span>
<span className="text-neutral-400 font-medium">$4,950</span>
</div>
</div>

<div className="flex justify-center gap-8 mt-7">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-indigo-500 rounded"></span>
<span className="text-xs text-neutral-700">62% Course Sales</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-fuchsia-200 rounded"></span>
<span className="text-xs text-neutral-700">38% Other Income</span>
</div>
</div>

<div className="flex flex-col items-center mt-8">
<div className="text-neutral-700 text-sm">Total Revenue</div>
<div className="text-indigo-600 font-bold text-2xl">$13,050</div>
</div>
</div>

    </>
  );
}
