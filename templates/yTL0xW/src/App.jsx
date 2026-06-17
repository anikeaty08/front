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
      
<div className="max-w-sm w-full bg-[#151515] rounded-xl overflow-hidden shadow-2xl border border-[#232323]">

<div className="px-6 pt-6 pb-4 border-b border-[#232323]">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<h2 className="text-gray-200 font-medium text-sm">San Francisco</h2>
</div>
<span className="text-xs text-gray-500">Updated just now</span>
</div>
</div>

<div className="px-6 py-8">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-4xl font-light text-white">68°</span>
<span className="ml-1 text-gray-400 text-sm">F</span>
</div>
<p className="text-gray-400 text-sm mt-1">Partly Cloudy</p>
</div>

<div className="text-gray-300">
<svg className="w-14 h-14" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="px-6 py-4 bg-[#171717] grid grid-cols-3 gap-2 text-center">
<div className="px-2 py-3">
<p className="text-xs text-gray-500 uppercase tracking-wide">Humidity</p>
<p className="text-gray-300 font-medium mt-1">72%</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-500 uppercase tracking-wide">Wind</p>
<p className="text-gray-300 font-medium mt-1">8 mph</p>
</div>
<div className="px-2 py-3">
<p className="text-xs text-gray-500 uppercase tracking-wide">Feels like</p>
<p className="text-gray-300 font-medium mt-1">70°</p>
</div>
</div>

<div className="px-6 py-4 border-t border-[#232323]">
<div className="grid grid-cols-5 gap-2">
<div className="text-center">
<p className="text-xs text-gray-500">Mon</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-300">72°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-500">Tue</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-300">68°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-500">Wed</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-300">65°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-500">Thu</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-300">74°</p>
</div>
<div className="text-center">
<p className="text-xs text-gray-500">Fri</p>
<svg className="w-6 h-6 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-xs font-medium text-gray-300">76°</p>
</div>
</div>
</div>
</div>

    </>
  );
}
