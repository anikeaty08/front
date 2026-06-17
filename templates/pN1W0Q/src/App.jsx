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
      

<div className="relative w-[375px] h-[812px] bg-black rounded-[50px] p-4 shadow-2xl border border-zinc-700">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-zinc-900 rounded-[40px] overflow-hidden relative">

<div className="p-6 text-white h-full flex flex-col">

<div className="flex justify-between items-center mb-8 pt-5">
<div>
<h1 className="text-2xl font-bold text-white">FlightX</h1>
<p className="text-sm text-zinc-400">Monday, 16 Oct</p>
</div>
<div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<svg className="h-5 w-5 text-zinc-300" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" fill-rule="evenodd"></path>
</svg>
</div>
</div>

<div className="bg-zinc-800 rounded-xl p-4 mb-6 border border-zinc-700">
<div className="flex space-x-3 mb-4 border-b border-zinc-700 pb-3">
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Flight</button>
<button className="text-zinc-400 px-4 py-2 rounded-lg text-sm font-medium">Hotel</button>
<button className="text-zinc-400 px-4 py-2 rounded-lg text-sm font-medium">Car</button>
</div>

<div className="mb-3 flex items-center relative">
<div className="absolute left-4 top-1/2 -translate-y-1/2 h-full flex flex-col justify-between items-center">
<div className="w-3 h-3 rounded-full bg-indigo-500"></div>
<div className="w-[1px] h-8 bg-zinc-600"></div>
<div className="w-3 h-3 rounded-full bg-indigo-300"></div>
</div>
<div className="flex-1 ml-12">
<div className="mb-4">
<label className="block text-xs text-zinc-400 mb-1">FROM</label>
<input className="w-full bg-transparent text-white font-medium focus:outline-none text-lg" type="text" value="New York (JFK)"/>
</div>
<div>
<label className="block text-xs text-zinc-400 mb-1">TO</label>
<input className="w-full bg-transparent text-white font-medium focus:outline-none text-lg" type="text" value="San Francisco (SFO)"/>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-zinc-700/50 rounded-lg p-3 border border-zinc-600">
<label className="block text-xs text-zinc-400 mb-1">DEPARTURE</label>
<div className="text-white font-medium">Oct 20, 2023</div>
</div>
<div className="bg-zinc-700/50 rounded-lg p-3 border border-zinc-600">
<label className="block text-xs text-zinc-400 mb-1">RETURN</label>
<div className="text-white font-medium">Oct 27, 2023</div>
</div>
</div>

<div className="bg-zinc-700/50 rounded-lg p-3 mb-4 border border-zinc-600">
<label className="block text-xs text-zinc-400 mb-1">PASSENGERS &amp; CLASS</label>
<div className="text-white font-medium">2 Adults, Business</div>
</div>
<button className="w-full bg-indigo-600 text-white py-4 rounded-lg font-medium">
            Search Flights
          </button>
</div>

<h2 className="text-lg font-semibold mb-3 text-white">Featured Deals</h2>
<div className="space-y-3 overflow-auto flex-1">

<div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-sm text-zinc-400">United Airlines</div>
<div className="text-xs text-zinc-500">UA 1234 • Boeing 787</div>
</div>
</div>
<div className="text-xl font-bold text-white">$549</div>
</div>
<div className="flex justify-between items-center">
<div className="text-center">
<div className="text-lg font-bold text-white">JFK</div>
<div className="text-xs text-zinc-400">08:45 AM</div>
</div>
<div className="flex-1 mx-2">
<div className="relative flex items-center justify-center">
<div className="border-t border-dashed border-zinc-600 w-full"></div>
<div className="absolute">
<svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11.43a1 1 0 00-.725-.962l-5-1.429a1 1 0 01.725-1.962l5 1.429a1 1 0 00.725-.962V3.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v4.035a1 1 0 00.725.962l5 1.429a1 1 0 01-.725 1.962l-5-1.429A1 1 0 0011 11.43v4.141a1 1 0 00.725.962l5 1.429a1 1 0 001.17-1.409l-7-14z"></path>
</svg>
</div>
</div>
<div className="text-center text-xs text-zinc-400 mt-1">6h 15m</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-white">SFO</div>
<div className="text-xs text-zinc-400">03:00 PM</div>
</div>
</div>
</div>

<div className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center">
<svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<div className="text-sm text-zinc-400">Delta Airlines</div>
<div className="text-xs text-zinc-500">DL 4321 • Airbus A350</div>
</div>
</div>
<div className="text-xl font-bold text-white">$489</div>
</div>
<div className="flex justify-between items-center">
<div className="text-center">
<div className="text-lg font-bold text-white">JFK</div>
<div className="text-xs text-zinc-400">06:30 AM</div>
</div>
<div className="flex-1 mx-2">
<div className="relative flex items-center justify-center">
<div className="border-t border-dashed border-zinc-600 w-full"></div>
<div className="absolute">
<svg className="h-5 w-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11.43a1 1 0 00-.725-.962l-5-1.429a1 1 0 01.725-1.962l5 1.429a1 1 0 00.725-.962V3.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v4.035a1 1 0 00.725.962l5 1.429a1 1 0 01-.725 1.962l-5-1.429A1 1 0 0011 11.43v4.141a1 1 0 00.725.962l5 1.429a1 1 0 001.17-1.409l-7-14z"></path>
</svg>
</div>
</div>
<div className="text-center text-xs text-zinc-400 mt-1">6h 30m</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-white">SFO</div>
<div className="text-xs text-zinc-400">01:00 PM</div>
</div>
</div>
</div>
</div>

<div className="pt-3 border-t border-zinc-800 mt-auto">
<div className="flex justify-between">
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-indigo-500 mt-1">Home</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-zinc-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-zinc-500 mt-1">Search</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-zinc-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-zinc-500 mt-1">Bookings</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-zinc-500" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs text-zinc-500 mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
