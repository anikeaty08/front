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
<h1 className="text-white text-2xl font-medium">Activity</h1>
<p className="text-gray-400 text-sm">Your recent rides and transactions</p>
</div>
<button className="bg-[#1c1c1c] p-2 rounded-full">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="flex space-x-2 mb-6 overflow-x-auto scrollbar-hide">
<button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">All Activity</button>
<button className="bg-[#1c1c1c] text-gray-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">Completed</button>
<button className="bg-[#1c1c1c] text-gray-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">Cancelled</button>
<button className="bg-[#1c1c1c] text-gray-300 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">Payments</button>
</div>

<div className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-green-600 mb-6">
<div className="bg-green-600 bg-opacity-20 px-4 py-2 border-b border-green-600">
<div className="flex items-center">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
<p className="text-green-500 text-sm font-medium">Current Ride</p>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Downtown Mall</p>
<p className="text-gray-500 text-xs mb-2">456 Market Ave</p>
<p className="text-white text-sm">Central Business District</p>
<p className="text-gray-500 text-xs">789 Office Tower</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$15.80</p>
<p className="text-gray-500 text-xs">Today, 12:45 PM</p>
<p className="text-green-500 text-xs mt-2">Arriving in 2 min</p>
</div>
</div>
<div className="flex justify-between items-center p-3 bg-[#252525] rounded-xl">
<div className="flex items-center">
<div className="w-10 h-10 bg-[#303030] rounded-full overflow-hidden mr-3">
<div className="w-full h-full bg-gradient-to-br from-blue-500 to-green-500 opacity-70"></div>
</div>
<div>
<p className="text-white text-sm">Michael Chen</p>
<div className="flex items-center">
<svg className="w-3 h-3 text-yellow-500 mr-1" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" fill-rule="evenodd"></path>
</svg>
<span className="text-gray-400 text-xs">4.9</span>
</div>
</div>
</div>
<button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm">Track</button>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-gray-300 font-medium mb-3">Today</h3>
<div className="space-y-3">
<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Home</p>
<p className="text-gray-500 text-xs mb-2">123 Main St</p>
<p className="text-white text-sm">Grocery Store</p>
<p className="text-gray-500 text-xs">Fresh Mart, 45 Food Ave</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$12.50</p>
<p className="text-gray-500 text-xs">9:30 AM</p>
<div className="mt-2 px-2 py-0.5 bg-green-900 bg-opacity-30 rounded text-green-500 text-xs inline-block">Completed</div>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center">
<svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-gray-400">RideNow Economy</span>
</div>
<button className="text-green-500">Receipt</button>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Grocery Store</p>
<p className="text-gray-500 text-xs mb-2">Fresh Mart, 45 Food Ave</p>
<p className="text-white text-sm">Home</p>
<p className="text-gray-500 text-xs">123 Main St</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$11.75</p>
<p className="text-gray-500 text-xs">11:15 AM</p>
<div className="mt-2 px-2 py-0.5 bg-green-900 bg-opacity-30 rounded text-green-500 text-xs inline-block">Completed</div>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center">
<svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-gray-400">RideNow Economy</span>
</div>
<button className="text-green-500">Receipt</button>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-gray-300 font-medium mb-3">Yesterday</h3>
<div className="space-y-3">
<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Office</p>
<p className="text-gray-500 text-xs mb-2">789 Business Blvd</p>
<p className="text-white text-sm">Downtown Mall</p>
<p className="text-gray-500 text-xs">456 Market Ave</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$18.50</p>
<p className="text-gray-500 text-xs">5:30 PM</p>
<div className="mt-2 px-2 py-0.5 bg-green-900 bg-opacity-30 rounded text-green-500 text-xs inline-block">Completed</div>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center">
<svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-gray-400">RideNow Comfort</span>
</div>
<button className="text-green-500">Receipt</button>
</div>
</div>
<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Home</p>
<p className="text-gray-500 text-xs mb-2">123 Main St</p>
<p className="text-white text-sm">Office</p>
<p className="text-gray-500 text-xs">789 Business Blvd</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$0.00</p>
<p className="text-gray-500 text-xs">8:15 AM</p>
<div className="mt-2 px-2 py-0.5 bg-red-900 bg-opacity-30 rounded text-red-500 text-xs inline-block">Cancelled</div>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center">
<svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-gray-400">RideNow Economy</span>
</div>
<button className="text-green-500">Details</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-[#252525] p-3 flex justify-around">
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="p-2 text-green-500 flex flex-col items-center">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Activity</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Offers</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Account</span>
</button>
</div>
<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[40%] h-1 bg-gray-700 rounded-full"></div>
</div>

    </>
  );
}
