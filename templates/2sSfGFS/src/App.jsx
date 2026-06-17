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
      
<div className="container mx-auto px-4 py-8">
<h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Weather Compare</h1>

<div className="flex flex-col md:flex-row gap-4 mb-8">
<div className="flex-1">
<div className="relative">
<input className="w-full p-3 rounded-lg border border-blue-200 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter first location" type="text" value="New York"/>
<button className="absolute right-2 top-2.5 text-blue-500 hover:text-blue-700">
<i className="fas fa-search"></i>
</button>
</div>
</div>
<div className="flex-1">
<div className="relative">
<input className="w-full p-3 rounded-lg border border-blue-200 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter second location" type="text" value="London"/>
<button className="absolute right-2 top-2.5 text-blue-500 hover:text-blue-700">
<i className="fas fa-search"></i>
</button>
</div>
</div>
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-200 ease-in-out transform hover:scale-105">
                Compare
            </button>
</div>

<div className="flex flex-col md:flex-row gap-6">

<div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
<h2 className="text-xl font-bold text-white">New York, US</h2>
<p className="text-blue-100">Monday, June 5</p>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div className="text-5xl font-bold text-gray-800">72°F</div>
<div className="text-5xl text-blue-500">
<i className="fas fa-cloud-sun"></i>
</div>
</div>
<p className="text-gray-600 mb-4">Partly Cloudy</p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center">
<i className="fas fa-temperature-high text-orange-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">Feels Like</p>
<p className="font-medium">75°F</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-wind text-blue-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">Wind</p>
<p className="font-medium">8 mph</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-tint text-blue-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">Humidity</p>
<p className="font-medium">65%</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-sun text-yellow-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">UV Index</p>
<p className="font-medium">5 of 10</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden">
<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4">
<h2 className="text-xl font-bold text-white">London, UK</h2>
<p className="text-indigo-100">Monday, June 5</p>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<div className="text-5xl font-bold text-gray-800">59°F</div>
<div className="text-5xl text-gray-500">
<i className="fas fa-cloud-rain"></i>
</div>
</div>
<p className="text-gray-600 mb-4">Light Rain</p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center">
<i className="fas fa-temperature-high text-orange-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">Feels Like</p>
<p className="font-medium">56°F</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-wind text-blue-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">Wind</p>
<p className="font-medium">12 mph</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-tint text-blue-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">Humidity</p>
<p className="font-medium">78%</p>
</div>
</div>
<div className="flex items-center">
<i className="fas fa-sun text-yellow-500 mr-2"></i>
<div>
<p className="text-xs text-gray-500">UV Index</p>
<p className="font-medium">2 of 10</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
