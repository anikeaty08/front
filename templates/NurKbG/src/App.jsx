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
      
<div className="w-[375px] h-[812px] bg-white rounded-[38px] overflow-hidden shadow-lg relative border border-gray-100">

<div className="absolute z-20 left-1/2 -translate-x-1/2 top-3 h-7 w-40 bg-black rounded-full flex items-center justify-center">
<div className="h-1 w-16 bg-[#F5F5F7] rounded-full"></div>
</div>

<div className="pt-14 px-6 pb-8 h-full flex flex-col">

<div className="mt-6 mb-8 animate-fade">
<h1 className="text-2xl font-semibold text-gray-900">Good morning,</h1>
<p className="text-gray-500 text-sm mt-1">Perfect weather for hiking today</p>
</div>

<div className="bg-gray-50 rounded-2xl p-5 mb-6 animate-fade" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start">
<div>
<h2 className="text-xl font-medium text-gray-900">Today's Weather</h2>
<p className="text-gray-500 text-sm">San Francisco, CA</p>
</div>
<svg className="w-10 h-10 text-blue-500" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" r="5"></circle>
<path d="M12 2V4" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M12 20V22" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M4 12H2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M22 12H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M19.778 4.222L17.657 6.343" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M6.343 17.657L4.222 19.778" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M19.778 19.778L17.657 17.657" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M6.343 6.343L4.222 4.222" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex items-end justify-between mt-4">
<div className="flex items-baseline">
<span className="text-5xl font-light text-gray-900">68°</span>
<div className="ml-2 text-sm text-gray-500">
<div>High: 72°</div>
<div>Low: 58°</div>
</div>
</div>
<div className="text-right text-sm text-gray-500">
<div className="font-medium text-gray-900">Clear</div>
<div>0% precipitation</div>
</div>
</div>
</div>

<h3 className="text-gray-900 font-medium mb-3 animate-fade" style={{animationDelay: '0.2s'}}>Recommended Trails</h3>
<div className="space-y-3 animate-fade" style={{animationDelay: '0.3s'}}>
<div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center">
<div className="bg-blue-50 rounded-lg p-2 mr-3">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M18 5l-6-2-6 2-6-2v14l6 2 6-2 6 2 6-2V3l-6 2zM6 3v14M18 3v14M12 3v14"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-gray-900 font-medium">Twin Peaks Trail</h4>
<p className="text-gray-500 text-xs">3.8 miles • Moderate • 67°</p>
</div>
<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center">
<div className="bg-green-50 rounded-lg p-2 mr-3">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M18 22V6a3 3 0 00-3-3H9a3 3 0 00-3 3v16"></path>
<path d="M2 22h20"></path>
<path d="M9 8v1M15 8v1M9 13v1M15 13v1M9 18v1M15 18v1"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-gray-900 font-medium">Redwood Creek Path</h4>
<p className="text-gray-500 text-xs">2.5 miles • Easy • 65°</p>
</div>
<svg className="w-5 h-5 text-gray-400" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</div>
</div>

<div className="grid grid-cols-3 gap-3 mt-6 animate-fade" style={{animationDelay: '0.4s'}}>
<div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center">
<svg className="w-6 h-6 text-gray-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 19V5M5 12l7-7 7 7"></path>
</svg>
<span className="text-sm font-medium text-gray-900">750 ft</span>
<span className="text-xs text-gray-500">Elevation</span>
</div>
<div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center">
<svg className="w-6 h-6 text-gray-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span className="text-sm font-medium text-gray-900">2.5 hrs</span>
<span className="text-xs text-gray-500">Duration</span>
</div>
<div className="bg-gray-50 rounded-xl p-3 flex flex-col items-center">
<svg className="w-6 h-6 text-gray-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"></path>
<line x1="6" x2="6" y1="1" y2="4"></line>
<line x1="10" x2="10" y1="1" y2="4"></line>
<line x1="14" x2="14" y1="1" y2="4"></line>
</svg>
<span className="text-sm font-medium text-gray-900">1.3 L</span>
<span className="text-xs text-gray-500">Water Needed</span>
</div>
</div>

<div className="mt-auto animate-fade" style={{animationDelay: '0.5s'}}>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3.5 rounded-xl shadow-sm transition-colors">
          Start Hiking
        </button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
</div>

    </>
  );
}
