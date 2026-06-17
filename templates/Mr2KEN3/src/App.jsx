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
      
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            blue: {
              50: '#f0f7ff',
              100: '#e0eefe',
              200: '#bae0fd',
              300: '#7dcbfc',
              400: '#39acf7',
              500: '#1a91eb',
              600: '#0c73ca',
              700: '#0e5ca4',
              800: '#144e87',
              900: '#164270',
            },
            secondary: '#7C94B5',
            offwhite: '#f8f8f8',
            sunrise: '#FF9E40',
            sunset: '#FF5E62'
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
<div className="w-full h-full bg-offwhite flex flex-col">

<div className="p-6 flex items-center">
<button className="text-secondary hover:text-blue-800 mr-4">
<i className="bi bi-chevron-left text-xl"></i>
</button>
<h1 className="text-xl font-medium text-blue-800 flex-1 text-center">Sunrise &amp; Sunset</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-share text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-secondary/20">
<div className="flex justify-between items-start mb-4">
<div>
<h2 className="text-xl font-medium text-blue-800">San Francisco</h2>
<div className="text-xs text-secondary mt-1">Today, May 15</div>
</div>
</div>

<div className="relative h-40 mb-4">

<div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/30"></div>

<div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
<div className="w-full h-64 rounded-full bg-gradient-to-b from-blue-50/0 to-blue-50 relative">
<div className="absolute top-0 left-1/2 w-1 h-full bg-secondary/10"></div>

<div className="absolute top-[30%] left-[60%] h-6 w-6 rounded-full bg-sunrise shadow-lg shadow-sunrise/30 flex items-center justify-center">
<i className="bi bi-sun-fill text-white text-xs"></i>
</div>
</div>
</div>

<div className="absolute bottom-2 left-0 text-xs text-secondary">6:15 AM</div>
<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-secondary">1:19 PM</div>
<div className="absolute bottom-2 right-0 text-xs text-secondary">8:23 PM</div>

<div className="absolute bottom-6 left-0 text-xs font-medium text-sunrise">Sunrise</div>
<div className="absolute bottom-6 right-0 text-xs font-medium text-sunset">Sunset</div>
</div>

<div className="flex justify-between mb-2">
<div className="text-center">
<div className="text-xs text-secondary mb-1">Current Position</div>
<div className="text-sm font-medium text-blue-800">60° above horizon</div>
</div>
<div className="text-center">
<div className="text-xs text-secondary mb-1">Current Time</div>
<div className="text-sm font-medium text-blue-800">1:45 PM</div>
</div>
<div className="text-center">
<div className="text-xs text-secondary mb-1">Daylight</div>
<div className="text-sm font-medium text-blue-800">14h 8m</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Today's Sun Events</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Sunrise</div>
<div className="flex items-center">
<i className="bi bi-sunrise text-sunrise text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">6:15 AM</span>
</div>
<div className="text-xs text-secondary mt-2">First Light: 5:45 AM</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Sunset</div>
<div className="flex items-center">
<i className="bi bi-sunset text-sunset text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">8:23 PM</span>
</div>
<div className="text-xs text-secondary mt-2">Last Light: 8:53 PM</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Golden Hour</div>
<div className="flex items-center">
<i className="bi bi-sun text-amber-400 text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">7:25 PM</span>
</div>
<div className="text-xs text-secondary mt-2">Duration: 58 minutes</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Solar Noon</div>
<div className="flex items-center">
<i className="bi bi-brightness-high text-amber-500 text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">1:19 PM</span>
</div>
<div className="text-xs text-secondary mt-2">Max Height: 73°</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Weekly Sun Times</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4">
<div className="flex justify-between items-center mb-3">
<div className="text-sm text-secondary">Today</div>
<div className="text-sm font-medium text-blue-800">14h 8m of daylight</div>
</div>
<div className="relative h-6 bg-blue-50 rounded-full flex items-center">
<div className="absolute inset-y-0 left-[26%] right-[35%] bg-gradient-to-r from-sunrise to-sunset rounded-full"></div>
<div className="absolute left-[26%] -bottom-4 text-xs text-sunrise">6:15 AM</div>
<div className="absolute right-[35%] -bottom-4 text-xs text-sunset">8:23 PM</div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-3">
<div className="text-sm text-secondary">Mon, May 16</div>
<div className="text-sm font-medium text-blue-800">14h 10m of daylight</div>
</div>
<div className="relative h-6 bg-blue-50 rounded-full flex items-center">
<div className="absolute inset-y-0 left-[26%] right-[34.8%] bg-gradient-to-r from-sunrise to-sunset rounded-full"></div>
<div className="absolute left-[26%] -bottom-4 text-xs text-sunrise">6:14 AM</div>
<div className="absolute right-[34.8%] -bottom-4 text-xs text-sunset">8:24 PM</div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-3">
<div className="text-sm text-secondary">Tue, May 17</div>
<div className="text-sm font-medium text-blue-800">14h 12m of daylight</div>
</div>
<div className="relative h-6 bg-blue-50 rounded-full flex items-center">
<div className="absolute inset-y-0 left-[25.9%] right-[34.5%] bg-gradient-to-r from-sunrise to-sunset rounded-full"></div>
<div className="absolute left-[25.9%] -bottom-4 text-xs text-sunrise">6:13 AM</div>
<div className="absolute right-[34.5%] -bottom-4 text-xs text-sunset">8:25 PM</div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center mb-3">
<div className="text-sm text-secondary">Wed, May 18</div>
<div className="text-sm font-medium text-blue-800">14h 14m of daylight</div>
</div>
<div className="relative h-6 bg-blue-50 rounded-full flex items-center">
<div className="absolute inset-y-0 left-[25.8%] right-[34.2%] bg-gradient-to-r from-sunrise to-sunset rounded-full"></div>
<div className="absolute left-[25.8%] -bottom-4 text-xs text-sunrise">6:12 AM</div>
<div className="absolute right-[34.2%] -bottom-4 text-xs text-sunset">8:26 PM</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3">Sun Position Today</h2>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="aspect-square relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-full rounded-full border border-secondary/20 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-full border border-secondary/20 flex items-center justify-center">
<div className="w-1/2 h-1/2 rounded-full border border-secondary/20"></div>
</div>
</div>

<div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-800">N</div>
<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-medium text-blue-800">S</div>
<div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs font-medium text-blue-800">W</div>
<div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs font-medium text-blue-800">E</div>

<div className="absolute inset-[15%] border-t border-dashed border-secondary/30 rounded-full transform -rotate-12"></div>

<div className="absolute top-[30%] right-[30%] h-6 w-6 rounded-full bg-amber-400 shadow-lg shadow-amber-300/30 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
<i className="bi bi-sun-fill text-white text-xs"></i>
</div>

<div className="absolute bottom-[15%] left-[15%] h-3 w-3 rounded-full bg-sunrise flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
</div>
<div className="absolute bottom-[15%] right-[15%] h-3 w-3 rounded-full bg-sunset flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
</div>
</div>
</div>
<div className="flex justify-between mt-2 text-xs">
<div className="text-secondary">Azimuth: 235°</div>
<div className="text-secondary">Elevation: 60°</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
