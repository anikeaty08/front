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
      
<div className="w-80 bg-zinc-900 rounded-lg shadow-xl overflow-hidden border border-zinc-800">

<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium">Select Location</h3>
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="p-4 border-b border-zinc-800">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="h-4 w-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<input className="block w-full bg-zinc-800 border border-zinc-700 rounded-md pl-10 pr-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Search for a city or location" type="text" />
</div>
</div>

<div className="p-4 border-b border-zinc-800">
<h4 className="text-xs text-zinc-400 mb-2">Recent Locations</h4>
<div className="space-y-2">
<div className="flex items-center justify-between hover:bg-zinc-800/50 p-2 rounded-md cursor-pointer">
<div className="flex items-center">
<div className="bg-zinc-800 rounded-md p-1.5 mr-3">
<svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium">New York City</p>
<p className="text-[10px] text-zinc-500">United States</p>
</div>
</div>
<div className="text-[10px] text-zinc-500">2d ago</div>
</div>
<div className="flex items-center justify-between hover:bg-zinc-800/50 p-2 rounded-md cursor-pointer">
<div className="flex items-center">
<div className="bg-zinc-800 rounded-md p-1.5 mr-3">
<svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium">London</p>
<p className="text-[10px] text-zinc-500">United Kingdom</p>
</div>
</div>
<div className="text-[10px] text-zinc-500">5d ago</div>
</div>
</div>
</div>

<div className="p-4">
<h4 className="text-xs text-zinc-400 mb-2">Popular Locations</h4>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-800/50 hover:bg-zinc-800 p-3 rounded-md cursor-pointer">
<p className="text-xs font-medium">San Francisco</p>
<p className="text-[10px] text-zinc-500">United States</p>
</div>
<div className="bg-zinc-800/50 hover:bg-zinc-800 p-3 rounded-md cursor-pointer">
<p className="text-xs font-medium">Tokyo</p>
<p className="text-[10px] text-zinc-500">Japan</p>
</div>
<div className="bg-zinc-800/50 hover:bg-zinc-800 p-3 rounded-md cursor-pointer">
<p className="text-xs font-medium">Paris</p>
<p className="text-[10px] text-zinc-500">France</p>
</div>
<div className="bg-zinc-800/50 hover:bg-zinc-800 p-3 rounded-md cursor-pointer">
<p className="text-xs font-medium">Sydney</p>
<p className="text-[10px] text-zinc-500">Australia</p>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-800 flex justify-between items-center">
<button className="text-xs text-zinc-400 hover:text-zinc-300">Use Current Location</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors">Apply</button>
</div>
</div>

    </>
  );
}
