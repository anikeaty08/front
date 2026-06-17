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
      
<div className="relative w-[320px] h-[650px] bg-black rounded-[45px] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-black rounded-b-2xl z-10"></div>
<div className="bg-[#101010] h-full p-4 pt-10 overflow-y-auto">

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="px-4 pt-4 pb-3 border-b border-[#232323]">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<h2 className="text-gray-200 font-medium text-sm">Current Project</h2>
</div>
<span className="text-xs text-gray-500">Last saved 2m ago</span>
</div>
</div>
<div className="px-4 py-6">
<div className="flex items-center justify-between">
<div>
<div className="flex items-baseline">
<span className="text-3xl font-light text-white">24.5</span>
<span className="ml-1 text-gray-400 text-sm">in</span>
</div>
<p className="text-gray-400 text-sm mt-1">Living Room Wall</p>
</div>
<div className="text-gray-300">
<svg className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>
<div className="px-2 py-3 bg-[#171717] grid grid-cols-3 gap-1 text-center">
<div className="px-1 py-2">
<p className="text-[10px] text-gray-500 uppercase tracking-wide">Width</p>
<p className="text-gray-300 text-sm font-medium mt-1">24.5 in</p>
</div>
<div className="px-1 py-2">
<p className="text-[10px] text-gray-500 uppercase tracking-wide">Height</p>
<p className="text-gray-300 text-sm font-medium mt-1">36.2 in</p>
</div>
<div className="px-1 py-2">
<p className="text-[10px] text-gray-500 uppercase tracking-wide">Area</p>
<p className="text-gray-300 text-sm font-medium mt-1">886.9 in²</p>
</div>
</div>
<div className="px-2 py-3 border-t border-[#232323]">
<div className="grid grid-cols-5 gap-1">
<div className="text-center">
<p className="text-[10px] text-gray-500">Wall</p>
<svg className="w-5 h-5 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-[10px] font-medium text-gray-300">24.5"</p>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-500">Door</p>
<svg className="w-5 h-5 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 9h16.5m-16.5 6.75h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-[10px] font-medium text-gray-300">32.0"</p>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-500">Window</p>
<svg className="w-5 h-5 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-[10px] font-medium text-gray-300">18.5"</p>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-500">Cabinet</p>
<svg className="w-5 h-5 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-[10px] font-medium text-gray-300">22.7"</p>
</div>
<div className="text-center">
<p className="text-[10px] text-gray-500">Shelf</p>
<svg className="w-5 h-5 mx-auto my-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 9h16.5m-16.5 6.75h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-[10px] font-medium text-gray-300">16.2"</p>
</div>
</div>
</div>
</div>

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#232323]">
<h3 className="text-gray-200 font-medium text-sm">Recent Measurements</h3>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Kitchen Counter</span>
<span className="text-xs text-gray-300">36.5 in</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Bathroom Tile</span>
<span className="text-xs text-gray-300">4.25 in</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Dining Table</span>
<span className="text-xs text-gray-300">72.0 in</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">TV Stand</span>
<span className="text-xs text-gray-300">58.75 in</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Bookshelf</span>
<span className="text-xs text-gray-300">30.0 in</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Doorway</span>
<span className="text-xs text-gray-300">32.5 in</span>
</div>
</div>
</div>

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#232323]">
<h3 className="text-gray-200 font-medium text-sm">Measurement Accuracy</h3>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-500">Confidence Level</span>
<span className="text-xs text-green-400 font-medium">98% - Excellent</span>
</div>
<div className="w-full bg-[#232323] rounded-full h-1.5 mb-4">
<div className="bg-green-400 h-1.5 rounded-full" style={{width: '98%'}}></div>
</div>
<div className="grid grid-cols-3 gap-2 text-center mt-3">
<div>
<p className="text-[10px] text-gray-500">Margin</p>
<p className="text-[10px] text-gray-300 mt-1">±0.02 in</p>
</div>
<div>
<p className="text-[10px] text-gray-500">Calibration</p>
<p className="text-[10px] text-gray-300 mt-1">2 days ago</p>
</div>
<div>
<p className="text-[10px] text-gray-500">Light</p>
<p className="text-[10px] text-gray-300 mt-1">Optimal</p>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-gray-600 rounded-full"></div>
</div>

    </>
  );
}
