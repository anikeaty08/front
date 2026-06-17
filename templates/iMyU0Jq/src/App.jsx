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

<div className="p-4 border-b border-gray-800">
<div className="flex justify-between items-center mb-3">
<h1 className="text-xl font-bold text-white">Explore</h1>
<div className="flex gap-2">
<button className="p-2 text-gray-400 hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="p-2 text-gray-400 hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
<div className="bg-gray-800 rounded-lg p-3 flex items-center">
<svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input className="bg-transparent text-white w-full outline-none text-sm" placeholder="Search destinations, hotels..." type="text"/>
</div>
</div>

<div className="flex-1 p-3 overflow-y-auto">

<div className="flex gap-2 mb-4 pb-2 overflow-x-auto">
<button className="px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs whitespace-nowrap">All</button>
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">Popular</button>
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">Trending</button>
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">Recommended</button>
<button className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs whitespace-nowrap">Deals</button>
</div>

<h2 className="text-white font-medium mb-2">Featured Destinations</h2>
<div className="mb-5">
<div className="relative rounded-lg overflow-hidden h-40 mb-2 border border-gray-700">
<img alt="Santorini" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-3 text-white">
<h3 className="font-bold text-lg">Santorini, Greece</h3>
<div className="flex items-center text-xs">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Best time to visit: May-October
              </div>
</div>
<div className="absolute top-2 right-2 bg-blue-600/80 px-2 py-1 rounded text-xs text-white">
              20% OFF
            </div>
</div>
</div>

<h2 className="text-white font-medium mb-2">Popular Cities</h2>
<div className="grid grid-cols-2 gap-3 mb-5">
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-24 relative">
<img alt="New York" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-2 left-2 text-white font-bold text-sm">New York</div>
</div>
<div className="p-2">
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                United States
              </div>
<div className="text-white font-bold">$120/night</div>
</div>
</div>
<div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
<div className="h-24 relative">
<img alt="Paris" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-2 left-2 text-white font-bold text-sm">Paris</div>
</div>
<div className="p-2">
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                France
              </div>
<div className="text-white font-bold">$150/night</div>
</div>
</div>
</div>

<h2 className="text-white font-medium mb-2">Trending Experiences</h2>
<div className="bg-gray-800 rounded-lg border border-gray-700 divide-y divide-gray-700 mb-3">
<div className="p-3 flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Scuba" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-white font-medium">Scuba Diving Experience</h3>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Maldives
              </div>
<div className="flex justify-between items-center">
<div className="text-blue-400 font-bold">$89</div>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.8</span>
</div>
</div>
</div>
</div>
<div className="p-3 flex gap-3">
<div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
<img alt="Safari" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-white font-medium">Safari Adventure</h3>
<div className="flex items-center text-xs text-gray-400 mb-1">
<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Kenya
              </div>
<div className="flex justify-between items-center">
<div className="text-blue-400 font-bold">$199</div>
<div className="flex items-center text-xs text-yellow-400">
<svg className="h-3 w-3" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<span className="ml-1">4.9</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-2 border-t border-gray-800 bg-gray-900">
<div className="flex justify-around">
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="p-2 text-blue-400 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Explore</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
