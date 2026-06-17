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
      
<div className="relative w-[390px] h-[852px] bg-black rounded-[45px] border border-gray-800 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-black rounded-b-2xl z-10"></div>
<div className="bg-[#101010] h-full p-5 pt-12 overflow-y-auto">

<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-white text-2xl font-medium">RideNow</h1>
<p className="text-gray-400 text-sm">Hello, Alex!</p>
</div>
<button className="bg-[#1c1c1c] p-2 rounded-full">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#252525] mb-6 relative">
<div className="h-48 bg-gray-800 relative">

<div className="absolute inset-0 opacity-80" style={{backgroundImage: 'url(\'https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/103.8198,1.3521,11,0/600x300?access_token=pk.dummy\')', backgroundSize: 'cover'}}></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
<div className="w-12 h-12 bg-green-500 rounded-full opacity-20 absolute -top-4 -left-4"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-center space-x-3 mb-3">
<div className="bg-[#252525] p-2 rounded-full">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-gray-300 text-sm">Current Location</p>
<p className="text-gray-500 text-xs">123 Main Street, Downtown</p>
</div>
</div>
<div className="relative">
<input className="w-full bg-[#252525] border border-[#333333] rounded-xl px-4 py-3 text-gray-300 text-sm focus:outline-none focus:ring-1 focus:ring-green-500" placeholder="Where to?" type="text"/>
<button className="absolute right-3 top-1/2 transform -translate-y-1/2">
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-gray-300 font-medium mb-3">Choose your ride</h3>
<div className="space-y-3">

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="bg-[#252525] p-2 rounded-full">
<svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-white text-sm font-medium">RideNow Economy</p>
<p className="text-gray-500 text-xs">4 mins away • 4 seats</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$12.50</p>
<p className="text-gray-500 text-xs">15 min</p>
</div>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-green-500 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="bg-green-900 p-2 rounded-full">
<svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-white text-sm font-medium">RideNow Comfort</p>
<p className="text-gray-500 text-xs">2 mins away • 4 seats</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$15.80</p>
<p className="text-gray-500 text-xs">12 min</p>
</div>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525] flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="bg-[#252525] p-2 rounded-full">
<svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-white text-sm font-medium">RideNow Premium</p>
<p className="text-gray-500 text-xs">5 mins away • 4 seats</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$22.40</p>
<p className="text-gray-500 text-xs">12 min</p>
</div>
</div>
</div>
</div>

<div className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#252525] mb-6">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="bg-[#252525] p-2 rounded-full">
<svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-gray-300 text-sm">Payment Method</p>
<p className="text-gray-500 text-xs">Visa •••• 4242</p>
</div>
</div>
<svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 rounded-xl transition duration-200 mb-6">
        Book RideNow Comfort
      </button>

<div className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#252525] mb-6">
<div className="px-5 pt-4 pb-3 border-b border-[#252525]">
<h3 className="text-gray-200 font-medium">Recent Rides</h3>
</div>
<div className="p-4 space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center space-x-3">
<div className="bg-[#252525] p-2 rounded-full">
<svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-sm text-gray-300">Downtown Mall</p>
<p className="text-xs text-gray-500">Yesterday, 3:45 PM</p>
</div>
</div>
<span className="text-sm text-gray-300">$18.50</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center space-x-3">
<div className="bg-[#252525] p-2 rounded-full">
<svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-sm text-gray-300">Central Station</p>
<p className="text-xs text-gray-500">Oct 15, 8:30 AM</p>
</div>
</div>
<span className="text-sm text-gray-300">$12.75</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[40%] h-1 bg-gray-700 rounded-full"></div>
</div>

    </>
  );
}
