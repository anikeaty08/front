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
<p className="text-gray-400 text-sm">Good morning, Alex!</p>
</div>
<button className="bg-[#1c1c1c] p-2 rounded-full">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#252525] mb-6 relative">
<div className="h-72 bg-gray-800 relative">

<div className="absolute inset-0 opacity-80" style={{backgroundImage: 'url(\'https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/103.8198,1.3521,11,0/600x400?access_token=pk.dummy\')', backgroundSize: 'cover'}}></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
<div className="w-12 h-12 bg-green-500 rounded-full opacity-20 absolute -top-4 -left-4"></div>
</div>

<div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%]">
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-3 shadow-lg">
<div className="flex items-center">
<svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<input className="bg-transparent border-none w-full text-gray-300 text-sm focus:outline-none" placeholder="Where to?" type="text"/>
</div>
</div>
</div>
</div>
</div>

<h3 className="text-gray-300 font-medium mb-3">Quick Actions</h3>
<div className="grid grid-cols-4 gap-3 mb-6">
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-3 flex flex-col items-center">
<div className="bg-[#252525] p-2 rounded-full mb-2">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-gray-300 text-xs text-center">Home</span>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-3 flex flex-col items-center">
<div className="bg-[#252525] p-2 rounded-full mb-2">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-gray-300 text-xs text-center">Work</span>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-3 flex flex-col items-center">
<div className="bg-[#252525] p-2 rounded-full mb-2">
<svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-gray-300 text-xs text-center">Friends</span>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-3 flex flex-col items-center">
<div className="bg-[#252525] p-2 rounded-full mb-2">
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-gray-300 text-xs text-center">Schedule</span>
</div>
</div>

<h3 className="text-gray-300 font-medium mb-3">Ride Options</h3>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-4">
<div className="flex items-center mb-3">
<div className="bg-[#252525] p-2 rounded-full mr-3">
<svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-white text-sm font-medium">Economy</span>
</div>
<p className="text-gray-500 text-xs mb-3">Affordable rides for everyday</p>
<p className="text-white text-sm font-medium">From $12.50</p>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-4">
<div className="flex items-center mb-3">
<div className="bg-[#252525] p-2 rounded-full mr-3">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-white text-sm font-medium">Comfort</span>
</div>
<p className="text-gray-500 text-xs mb-3">Extra legroom, top drivers</p>
<p className="text-white text-sm font-medium">From $15.80</p>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-4">
<div className="flex items-center mb-3">
<div className="bg-[#252525] p-2 rounded-full mr-3">
<svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-white text-sm font-medium">Premium</span>
</div>
<p className="text-gray-500 text-xs mb-3">Luxury vehicles, top service</p>
<p className="text-white text-sm font-medium">From $22.40</p>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-4">
<div className="flex items-center mb-3">
<div className="bg-[#252525] p-2 rounded-full mr-3">
<svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-white text-sm font-medium">XL</span>
</div>
<p className="text-gray-500 text-xs mb-3">Vehicles for groups up to 6</p>
<p className="text-white text-sm font-medium">From $18.90</p>
</div>
</div>

<div className="flex justify-between items-center mb-3">
<h3 className="text-gray-300 font-medium">Recent Trips</h3>
<a className="text-green-500 text-sm" href="#">View all</a>
</div>
<div className="space-y-3 mb-6">
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Home</p>
<p className="text-gray-500 text-xs mb-2">123 Main St</p>
<p className="text-white text-sm">Downtown Mall</p>
<p className="text-gray-500 text-xs">456 Market Ave</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$18.50</p>
<p className="text-gray-500 text-xs">Yesterday</p>
</div>
</div>
<button className="w-full bg-[#252525] text-white text-sm py-2 rounded-lg hover:bg-[#303030] transition duration-200">Book Again</button>
</div>
<div className="bg-[#1a1a1a] border border-[#252525] rounded-xl p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center">
<div className="mr-3">
<div className="w-2 h-2 bg-green-500 rounded-full mb-1"></div>
<div className="w-0.5 h-8 bg-gray-700 mx-auto"></div>
<div className="w-2 h-2 bg-red-500 rounded-full mt-1"></div>
</div>
<div>
<p className="text-white text-sm">Office</p>
<p className="text-gray-500 text-xs mb-2">789 Business Blvd</p>
<p className="text-white text-sm">Central Station</p>
<p className="text-gray-500 text-xs">100 Transit Way</p>
</div>
</div>
<div className="text-right">
<p className="text-white font-medium">$12.75</p>
<p className="text-gray-500 text-xs">Oct 15</p>
</div>
</div>
<button className="w-full bg-[#252525] text-white text-sm py-2 rounded-lg hover:bg-[#303030] transition duration-200">Book Again</button>
</div>
</div>

<button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 rounded-xl transition duration-200 mb-6">
        Book a Ride Now
      </button>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-[#252525] p-3 flex justify-around">
<button className="p-2 text-green-500 flex flex-col items-center">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
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
