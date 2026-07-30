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
      
<div className="w-[350px] h-[650px] rounded-[2rem] overflow-hidden shadow-xl">
<div className="w-full h-full bg-gray-900 flex flex-col">

<div className="h-48 relative">
<img alt="New York" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<button className="absolute top-4 left-4 bg-black/40 p-2 rounded-full text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute top-4 right-4 bg-black/40 p-2 rounded-full text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute bottom-4 left-4">
<h1 className="text-2xl font-bold text-white mb-1">New York</h1>
<div className="flex items-center text-sm text-gray-200">
<svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            United States
          </div>
</div>
</div>

<div className="flex-1 p-4 overflow-y-auto -mt-6 rounded-t-3xl bg-gray-900 relative">

<div className="flex justify-between mb-4">
<div className="bg-gray-800 rounded-lg p-2 flex-1 mr-2 border border-gray-700">
<div className="text-xs text-gray-400">Average</div>
<div className="text-white font-bold">$120/night</div>
</div>
<div className="bg-gray-800 rounded-lg p-2 flex-1 mr-2 border border-gray-700">
<div className="text-xs text-gray-400">Rating</div>
<div className="flex items-center">
<span className="text-white font-bold mr-1">4.8</span>
<svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
</div>
<div className="bg-gray-800 rounded-lg p-2 flex-1 border border-gray-700">
<div className="text-xs text-gray-400">Time Zone</div>
<div className="text-white font-bold">EST</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-white font-bold mb-2">About</h2>
<p className="text-gray-400 text-sm">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that's among the world's major commercial, financial and cultural centers.</p>
</div>

<h2 className="text-white font-bold mb-2">Top Attractions</h2>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-20 relative">
<img alt="Statue of Liberty" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555109307-f7d9da25c244?w=400&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-1 left-2 text-white font-bold text-xs">Statue of Liberty</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-20 relative">
<img alt="Times Square" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-1 left-2 text-white font-bold text-xs">Times Square</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-20 relative">
<img alt="Central Park" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-1 left-2 text-white font-bold text-xs">Central Park</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-20 relative">
<img alt="Empire State" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546436836-07a91091f160?w=400&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-1 left-2 text-white font-bold text-xs">Empire State</div>
</div>
</div>
</div>

<h2 className="text-white font-bold mb-2">Recommended Stays</h2>
<div className="bg-gray-800 rounded-lg border border-gray-700 divide-y divide-gray-700 mb-4">
<div className="p-3 flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Luxury Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&auto=format&fit=crop" />
</div>
<div className="flex-1">
<h3 className="text-white font-medium">The Plaza Hotel</h3>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Midtown Manhattan
              </div>
<div className="flex justify-between items-center">
<div className="text-blue-400 font-bold">$399</div>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.8</span>
</div>
</div>
</div>
</div>
<div className="p-3 flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Modern Hotel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&auto=format&fit=crop" />
</div>
<div className="flex-1">
<h3 className="text-white font-medium">CitizenM New York</h3>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Times Square
              </div>
<div className="flex justify-between items-center">
<div className="text-blue-400 font-bold">$219</div>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.7</span>
</div>
</div>
</div>
</div>
</div>

<button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg">
          Explore Accommodations
        </button>
</div>
</div>
</div>

    </>
  );
}
