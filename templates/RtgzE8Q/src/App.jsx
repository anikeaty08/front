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
<div className="flex-1 p-4 overflow-y-auto">

<div className="bg-white p-4 rounded-2xl mb-4 shadow-sm border border-taupe-100">
<div className="flex justify-between items-center mb-1">
<h1 className="text-xl font-medium text-taupe-800">San Francisco</h1>
<div className="bg-taupe-50 px-2 py-0.5 rounded-full text-xs text-taupe-600 border border-taupe-100">
              Updated
            </div>
</div>
<div className="text-xs text-taupe-500">Monday, June 15 • 10:24 AM</div>
</div>

<div className="bg-white rounded-2xl border border-taupe-100 overflow-hidden mb-4 shadow-sm">
<div className="p-5 flex items-center justify-between">
<div>
<div className="text-6xl font-light text-taupe-800">68°</div>
<div className="text-taupe-500 mt-1">Feels like 65°</div>
</div>
<div className="text-right">
<div className="text-taupe-400">
<i className="bi bi-cloud-sun text-6xl"></i>
</div>
<div className="font-medium text-taupe-600">Partly Cloudy</div>
</div>
</div>
<div className="bg-taupe-50 p-3 text-xs grid grid-cols-3 gap-2 border-t border-taupe-100">
<div>
<span className="text-taupe-500">Wind: </span>
<span className="font-medium text-taupe-700">8 mph</span>
</div>
<div>
<span className="text-taupe-500">Humidity: </span>
<span className="font-medium text-taupe-700">65%</span>
</div>
<div>
<span className="text-taupe-500">UV Index: </span>
<span className="font-medium text-taupe-700">3</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-taupe-100 overflow-hidden mb-4 shadow-sm">
<div className="p-3 border-b border-taupe-100 bg-taupe-50/50">
<div className="text-sm text-taupe-700 font-medium">Hourly Forecast</div>
</div>
<div className="p-3 overflow-x-auto">
<div className="flex space-x-6">
<div className="flex flex-col items-center">
<div className="text-xs text-taupe-700 font-medium">Now</div>
<div className="my-3 text-taupe-400">
<i className="bi bi-cloud-sun text-2xl"></i>
</div>
<div className="text-sm font-medium text-taupe-800">68°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-taupe-500">11AM</div>
<div className="my-3 text-amber-400">
<i className="bi bi-sun text-2xl"></i>
</div>
<div className="text-sm font-medium text-taupe-700">70°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-taupe-500">12PM</div>
<div className="my-3 text-amber-400">
<i className="bi bi-sun text-2xl"></i>
</div>
<div className="text-sm font-medium text-taupe-700">73°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-taupe-500">1PM</div>
<div className="my-3 text-amber-400">
<i className="bi bi-sun text-2xl"></i>
</div>
<div className="text-sm font-medium text-taupe-700">75°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-taupe-500">2PM</div>
<div className="my-3 text-taupe-400">
<i className="bi bi-cloud-sun text-2xl"></i>
</div>
<div className="text-sm font-medium text-taupe-700">72°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-taupe-500">3PM</div>
<div className="my-3 text-taupe-400">
<i className="bi bi-cloud-sun text-2xl"></i>
</div>
<div className="text-sm font-medium text-taupe-700">70°</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-taupe-100 overflow-hidden mb-4 shadow-sm">
<div className="p-3 border-b border-taupe-100 bg-taupe-50/50">
<div className="text-sm text-taupe-700 font-medium">5-Day Forecast</div>
</div>
<div className="divide-y divide-taupe-100">
<div className="p-4 flex items-center justify-between">
<div className="text-sm text-taupe-800 w-20 font-medium">Today</div>
<div className="text-taupe-400">
<i className="bi bi-cloud-sun text-xl"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-24 h-1.5 bg-taupe-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-taupe-300 rounded-full"></div>
</div>
<div className="text-sm text-taupe-500">58°</div>
<div className="text-sm text-taupe-800 font-medium">75°</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="text-sm text-taupe-700 w-20">Tuesday</div>
<div className="text-amber-400">
<i className="bi bi-sun text-xl"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-24 h-1.5 bg-taupe-100 rounded-full overflow-hidden">
<div className="h-full w-4/5 bg-taupe-300 rounded-full"></div>
</div>
<div className="text-sm text-taupe-500">62°</div>
<div className="text-sm text-taupe-800 font-medium">78°</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="text-sm text-taupe-700 w-20">Wednesday</div>
<div className="text-taupe-400">
<i className="bi bi-cloud-sun text-xl"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-24 h-1.5 bg-taupe-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-taupe-300 rounded-full"></div>
</div>
<div className="text-sm text-taupe-500">60°</div>
<div className="text-sm text-taupe-800 font-medium">72°</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="text-sm text-taupe-700 w-20">Thursday</div>
<div className="text-taupe-500">
<i className="bi bi-cloud text-xl"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-24 h-1.5 bg-taupe-100 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-taupe-300 rounded-full"></div>
</div>
<div className="text-sm text-taupe-500">55°</div>
<div className="text-sm text-taupe-800 font-medium">65°</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="text-sm text-taupe-700 w-20">Friday</div>
<div className="text-taupe-400">
<i className="bi bi-cloud-sun text-xl"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-24 h-1.5 bg-taupe-100 rounded-full overflow-hidden">
<div className="h-full w-3/5 bg-taupe-300 rounded-full"></div>
</div>
<div className="text-sm text-taupe-500">59°</div>
<div className="text-sm text-taupe-800 font-medium">70°</div>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-taupe-100">
<div className="flex gap-3">
<button className="flex-1 bg-taupe-100 text-taupe-700 py-3 rounded-xl text-sm font-medium">
            Refresh
          </button>
<button className="flex-1 bg-white text-taupe-700 py-3 rounded-xl text-sm font-medium border border-taupe-200">
            Locations
          </button>
</div>
</div>
<div className="pb-2 flex justify-center">
<div className="w-[134px] h-[5px] bg-taupe-200 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
