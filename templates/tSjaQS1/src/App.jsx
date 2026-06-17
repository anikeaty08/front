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
      
<div className="w-[375px] h-[812px] bg-black rounded-[38px] overflow-hidden shadow-2xl relative border border-neutral-800">

<div className="absolute z-20 left-1/2 -translate-x-1/2 top-3 h-7 w-32 bg-neutral-900 rounded-full"></div>

<div className="pt-14 px-5 pb-8 h-full flex flex-col">

<div className="mt-6 mb-6">
<h1 className="text-xl font-medium text-white">Upcoming Flight</h1>
<p className="text-neutral-500 text-sm">Today, Oct 18</p>
</div>

<div className="bg-neutral-900 rounded-xl p-4 border border-neutral-800">
<div className="flex justify-between items-start">
<div>
<h2 className="text-lg font-medium text-white">SFO → JFK</h2>
<p className="text-neutral-500 text-xs">United • UA 2478</p>
</div>
<svg className="w-6 h-6 text-blue-400" fill="none" viewbox="0 0 24 24">
<path d="M21 12H3M17 8L21 12L17 16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex items-center justify-between mt-5 pb-4 border-b border-neutral-800">
<div>
<span className="text-xl font-light text-white">8:40</span>
<div className="text-xs text-neutral-500">SFO</div>
</div>
<div className="flex flex-col items-center px-4">
<div className="text-xs text-neutral-600 mb-1">5h 25m</div>
<div className="w-24 h-[1px] bg-neutral-700 relative">
<div className="absolute -top-1 left-0 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
<div className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-blue-400"></div>
</div>
<div className="text-xs text-neutral-600 mt-1">Direct</div>
</div>
<div className="text-right">
<span className="text-xl font-light text-white">2:05</span>
<div className="text-xs text-neutral-500">JFK</div>
</div>
</div>
<div className="pt-4 flex justify-between">
<div>
<div className="text-xs text-neutral-500">Boarding</div>
<div className="text-sm text-white">7:55 AM</div>
</div>
<div>
<div className="text-xs text-neutral-500">Gate</div>
<div className="text-sm text-white">C22</div>
</div>
<div>
<div className="text-xs text-neutral-500">Seat</div>
<div className="text-sm text-white">12A</div>
</div>
</div>
</div>

<div className="flex items-center bg-neutral-900 border border-green-900/40 rounded-xl p-3 my-4">
<div className="mr-3 text-green-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div>
<p className="text-green-400 text-sm font-medium">On time</p>
<p className="text-neutral-500 text-xs">Weather conditions are favorable</p>
</div>
</div>

<div className="space-y-3 mb-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center">
<div className="mr-3 text-blue-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<rect height="16" rx="2" stroke="currentColor" strokeWidth="1.5" width="18" x="3" y="4"></rect>
<path d="M8 11h8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M8 8h3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M8 14h5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Boarding Pass</h4>
<p className="text-neutral-500 text-xs">Added to Apple Wallet</p>
</div>
<svg className="w-4 h-4 text-neutral-500" fill="none" viewbox="0 0 16 16">
<path d="M6 12l4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center">
<div className="mr-3 text-purple-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 8v4l3 3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white text-sm font-medium">Terminal Info</h4>
<p className="text-neutral-500 text-xs">Terminal 3 • Security at 5:00 AM</p>
</div>
<svg className="w-4 h-4 text-neutral-500" fill="none" viewbox="0 0 16 16">
<path d="M6 12l4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex justify-between items-center mb-4">
<div>
<p className="text-white text-sm font-medium">New York (JFK)</p>
<p className="text-neutral-500 text-xs">Partly cloudy</p>
</div>
<div className="flex items-center">
<svg className="w-6 h-6 text-neutral-400 mr-2" fill="none" viewbox="0 0 24 24">
<path d="M12 3v1M5.6 5.6l.7.7M3 12h1M5.6 18.4l.7-.7M12 20v1M18.4 18.4l-.7-.7M20 12h1M18.4 5.6l-.7.7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-lg font-light text-white">63°</span>
</div>
</div>

<div className="mt-auto">
<button className="w-full bg-blue-500 text-white font-medium py-3 rounded-xl">
          Check In
        </button>
<div className="flex justify-between mt-6 px-6 text-neutral-500">
<div className="flex flex-col items-center">
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24">
<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.5"></path>
<path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</div>
<div className="flex flex-col items-center text-blue-400">
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24">
<path d="M22 12h-6M2 12h12M6 16l-4-4 4-4M18 8l4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs mt-1">Flights</span>
</div>
<div className="flex flex-col items-center">
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 8v4l4 2" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-xs mt-1">Trips</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-neutral-700 rounded-full"></div>
</div>

    </>
  );
}
