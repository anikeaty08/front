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



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            taupe: {
              50: '#f8f7f6',
              100: '#e9e6e2',
              200: '#d8d2cc',
              300: '#bfb5ab',
              400: '#a69688',
              500: '#95846f',
              600: '#857361',
              700: '#6f5f51',
              800: '#5c5045',
              900: '#4d443b',
            }
          }
        }
      }
    }
  
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
      
<div className="w-[390px] h-[852px] rounded-3xl overflow-hidden shadow-md">
<div className="w-full h-full bg-taupe-50 flex flex-col">

<div className="p-6 flex justify-between items-center">
<h1 className="text-2xl font-medium text-taupe-800">Weather</h1>
<button className="text-taupe-600 hover:text-taupe-800">
<i className="bi bi-gear text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="mb-4 relative">
<input className="w-full bg-white border border-taupe-100 rounded-xl py-3 px-4 text-sm text-taupe-700 placeholder-taupe-400 focus:outline-none focus:ring-2 focus:ring-taupe-300" placeholder="Search locations" type="text" />
<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-taupe-400">
<i className="bi bi-search"></i>
</button>
</div>

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-taupe-100">
<div className="flex justify-between items-start mb-3">
<div>
<div className="flex items-center gap-1 mb-1">
<i className="bi bi-geo-alt text-taupe-600"></i>
<span className="text-sm text-taupe-600">Current Location</span>
</div>
<h2 className="text-xl font-medium text-taupe-800">San Francisco</h2>
<div className="text-xs text-taupe-500 mt-1">California, USA</div>
</div>
<div className="text-right">
<div className="text-5xl font-light text-taupe-800">68°</div>
<div className="flex items-center justify-end gap-1 mt-1">
<i className="bi bi-cloud-sun text-taupe-400"></i>
<span className="text-sm text-taupe-600">Partly Cloudy</span>
</div>
</div>
</div>
<button className="w-full bg-taupe-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-taupe-700 transition-colors">
            View Details
          </button>
</div>

<div className="mb-4">
<div className="flex justify-between items-center mb-3">
<h2 className="text-lg font-medium text-taupe-800">Saved Locations</h2>
<button className="text-taupe-600 text-sm">See All</button>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-4 rounded-xl shadow-sm border border-taupe-100">
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-medium text-taupe-800">New York</h3>
<i className="bi bi-star-fill text-amber-400 text-sm"></i>
</div>
<div className="flex justify-between items-end">
<div className="text-2xl font-light text-taupe-800">72°</div>
<i className="bi bi-sun text-amber-400 text-xl"></i>
</div>
<div className="text-xs text-taupe-500 mt-1">Sunny</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-taupe-100">
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-medium text-taupe-800">London</h3>
<i className="bi bi-star-fill text-amber-400 text-sm"></i>
</div>
<div className="flex justify-between items-end">
<div className="text-2xl font-light text-taupe-800">59°</div>
<i className="bi bi-cloud-drizzle text-taupe-500 text-xl"></i>
</div>
<div className="text-xs text-taupe-500 mt-1">Light Rain</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-taupe-100">
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-medium text-taupe-800">Tokyo</h3>
<i className="bi bi-star text-taupe-300 text-sm"></i>
</div>
<div className="flex justify-between items-end">
<div className="text-2xl font-light text-taupe-800">81°</div>
<i className="bi bi-cloud text-taupe-400 text-xl"></i>
</div>
<div className="text-xs text-taupe-500 mt-1">Cloudy</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-taupe-100">
<div className="flex justify-between items-start mb-3">
<h3 className="text-base font-medium text-taupe-800">Paris</h3>
<i className="bi bi-star text-taupe-300 text-sm"></i>
</div>
<div className="flex justify-between items-end">
<div className="text-2xl font-light text-taupe-800">65°</div>
<i className="bi bi-cloud-sun text-taupe-400 text-xl"></i>
</div>
<div className="text-xs text-taupe-500 mt-1">Partly Cloudy</div>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-3">
<h2 className="text-lg font-medium text-taupe-800">Recent Searches</h2>
<button className="text-taupe-600 text-sm">Clear All</button>
</div>
<div className="bg-white rounded-xl shadow-sm border border-taupe-100 divide-y divide-taupe-100">
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-taupe-50 rounded-full">
<i className="bi bi-clock-history text-taupe-500"></i>
</div>
<div>
<div className="text-sm font-medium text-taupe-800">Seattle</div>
<div className="text-xs text-taupe-500">Washington, USA</div>
</div>
</div>
<div className="text-sm font-medium text-taupe-800">55°</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-taupe-50 rounded-full">
<i className="bi bi-clock-history text-taupe-500"></i>
</div>
<div>
<div className="text-sm font-medium text-taupe-800">Miami</div>
<div className="text-xs text-taupe-500">Florida, USA</div>
</div>
</div>
<div className="text-sm font-medium text-taupe-800">84°</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-taupe-50 rounded-full">
<i className="bi bi-clock-history text-taupe-500"></i>
</div>
<div>
<div className="text-sm font-medium text-taupe-800">Chicago</div>
<div className="text-xs text-taupe-500">Illinois, USA</div>
</div>
</div>
<div className="text-sm font-medium text-taupe-800">61°</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-taupe-100 bg-white">
<div className="flex justify-around">
<button className="flex flex-col items-center text-taupe-800">
<i className="bi bi-house-fill text-xl"></i>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-taupe-400">
<i className="bi bi-search text-xl"></i>
<span className="text-xs mt-1">Search</span>
</button>
<button className="flex flex-col items-center text-taupe-400">
<i className="bi bi-map text-xl"></i>
<span className="text-xs mt-1">Map</span>
</button>
<button className="flex flex-col items-center text-taupe-400">
<i className="bi bi-person text-xl"></i>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
