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
      
<div className="w-[300px] h-[600px] rounded-[2rem] overflow-hidden shadow-xl">
<div className="w-full h-full bg-white flex flex-col">
<div className="flex-1 p-3 overflow-y-auto">

<div className="bg-blue-50 p-3 rounded-xl mb-3">
<div className="flex justify-between items-center mb-2">
<h1 className="text-lg font-bold text-gray-800">San Francisco</h1>
<div className="bg-white/80 px-2 py-0.5 rounded-full text-xs text-blue-600 border border-blue-100">
              Updated
            </div>
</div>
<div className="text-xs text-gray-500">Monday, June 15 • 10:24 AM</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-3 shadow-sm">
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-5xl font-bold text-gray-800">68°</div>
<div className="text-gray-500 mt-1">Feels like 65°</div>
</div>
<div className="text-right">
<div className="text-4xl text-blue-500">
<i className="bi bi-cloud-sun text-5xl"></i>
</div>
<div className="font-medium text-gray-700">Partly Cloudy</div>
</div>
</div>
<div className="bg-gray-50 p-2 text-xs grid grid-cols-3 gap-2 border-t border-gray-200">
<div>
<span className="text-gray-500">Wind: </span>
<span className="font-medium text-gray-800">8 mph</span>
</div>
<div>
<span className="text-gray-500">Humidity: </span>
<span className="font-medium text-gray-800">65%</span>
</div>
<div>
<span className="text-gray-500">UV Index: </span>
<span className="font-medium text-gray-800">3</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-3 shadow-sm">
<div className="p-2 border-b border-gray-200 bg-gray-50">
<div className="text-sm text-gray-800 font-medium">Hourly Forecast</div>
</div>
<div className="p-2 overflow-x-auto">
<div className="flex space-x-4">
<div className="flex flex-col items-center">
<div className="text-xs text-gray-800">Now</div>
<div className="my-2 text-blue-500">
<i className="bi bi-cloud-sun"></i>
</div>
<div className="text-sm font-medium text-gray-800">68°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-gray-500">11AM</div>
<div className="my-2 text-amber-500">
<i className="bi bi-sun"></i>
</div>
<div className="text-sm font-medium text-gray-800">70°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-gray-500">12PM</div>
<div className="my-2 text-amber-500">
<i className="bi bi-sun"></i>
</div>
<div className="text-sm font-medium text-gray-800">73°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-gray-500">1PM</div>
<div className="my-2 text-amber-500">
<i className="bi bi-sun"></i>
</div>
<div className="text-sm font-medium text-gray-800">75°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-gray-500">2PM</div>
<div className="my-2 text-blue-500">
<i className="bi bi-cloud-sun"></i>
</div>
<div className="text-sm font-medium text-gray-800">72°</div>
</div>
<div className="flex flex-col items-center">
<div className="text-xs text-gray-500">3PM</div>
<div className="my-2 text-blue-500">
<i className="bi bi-cloud-sun"></i>
</div>
<div className="text-sm font-medium text-gray-800">70°</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-3 shadow-sm">
<div className="p-2 border-b border-gray-200 bg-gray-50">
<div className="text-sm text-gray-800 font-medium">5-Day Forecast</div>
</div>
<div className="divide-y divide-gray-200">
<div className="p-3 flex items-center justify-between">
<div className="text-sm text-gray-800 w-20">Today</div>
<div className="text-blue-500">
<i className="bi bi-cloud-sun"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
</div>
<div className="text-sm text-gray-500">58°</div>
<div className="text-sm text-gray-800 font-medium">75°</div>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-sm text-gray-800 w-20">Tuesday</div>
<div className="text-amber-500">
<i className="bi bi-sun"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full w-4/5 bg-blue-500 rounded-full"></div>
</div>
<div className="text-sm text-gray-500">62°</div>
<div className="text-sm text-gray-800 font-medium">78°</div>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-sm text-gray-800 w-20">Wednesday</div>
<div className="text-blue-500">
<i className="bi bi-cloud-sun"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
</div>
<div className="text-sm text-gray-500">60°</div>
<div className="text-sm text-gray-800 font-medium">72°</div>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-sm text-gray-800 w-20">Thursday</div>
<div className="text-gray-500">
<i className="bi bi-cloud"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-blue-500 rounded-full"></div>
</div>
<div className="text-sm text-gray-500">55°</div>
<div className="text-sm text-gray-800 font-medium">65°</div>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-sm text-gray-800 w-20">Friday</div>
<div className="text-blue-500">
<i className="bi bi-cloud-sun"></i>
</div>
<div className="flex items-center space-x-2">
<div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full w-3/5 bg-blue-500 rounded-full"></div>
</div>
<div className="text-sm text-gray-500">59°</div>
<div className="text-sm text-gray-800 font-medium">70°</div>
</div>
</div>
</div>
</div>
</div>
<div className="p-3 border-t border-gray-200">
<div className="flex gap-2">
<button className="flex-1 bg-blue-100 text-blue-600 py-2 rounded-lg text-sm font-medium border border-blue-200">
            Refresh
          </button>
<button className="flex-1 bg-white text-gray-700 py-2 rounded-lg text-sm font-medium border border-gray-200">
            Locations
          </button>
</div>
</div>
<div className="pb-1 flex justify-center">
<div className="w-[134px] h-[5px] bg-gray-300 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
