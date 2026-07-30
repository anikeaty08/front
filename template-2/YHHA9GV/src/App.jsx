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
      
<div className="w-[800px] h-[600px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700 flex flex-col">

<div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
<div className="flex items-center space-x-2">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<h1 className="text-white text-sm font-medium ml-4">Weather Forecast</h1>
</div>
<div className="flex items-center space-x-4">
<div className="text-gray-400 hover:text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-gray-400 hover:text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-64 bg-gray-800 border-r border-gray-700 p-4">
<div className="flex items-center space-x-2 mb-6">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h2 className="text-white font-medium">Locations</h2>
</div>
<div className="space-y-2">
<div className="bg-blue-600 text-white rounded-md p-2 flex items-center justify-between">
<span>New York</span>
<span className="text-sm">72°</span>
</div>
<div className="text-gray-300 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span>San Francisco</span>
<span className="text-sm">64°</span>
</div>
<div className="text-gray-300 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span>Los Angeles</span>
<span className="text-sm">78°</span>
</div>
<div className="text-gray-300 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span>Chicago</span>
<span className="text-sm">65°</span>
</div>
<div className="text-gray-300 hover:bg-gray-700 rounded-md p-2 flex items-center justify-between">
<span>Miami</span>
<span className="text-sm">86°</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-700">
<div className="flex items-center justify-between text-gray-400 text-sm mb-2">
<span>Last updated</span>
<span>Just now</span>
</div>
<button className="w-full bg-gray-700 hover:bg-gray-600 text-white rounded-md py-2 text-sm mt-4 flex items-center justify-center">
<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                        Refresh Data
                    </button>
</div>
</div>

<div className="flex-1 bg-gradient-to-b from-blue-900 to-indigo-900 overflow-y-auto">
<div className="p-6">

<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-white text-2xl font-semibold">New York</h1>
<p className="text-blue-200 text-sm">Monday, June 5 • 3:45 PM</p>
</div>
<div className="flex space-x-2">
<button className="bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-1 text-sm">°F</button>
<button className="bg-white/10 hover:bg-white/20 text-white rounded-md px-3 py-1 text-sm">°C</button>
</div>
</div>

<div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 flex items-center">
<div className="flex items-center">
<svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="ml-4">
<div className="flex items-baseline">
<span className="text-5xl font-light text-white">72°</span>
<span className="ml-2 text-blue-200 text-lg">F</span>
</div>
<p className="text-blue-200 text-xl">Partly Cloudy</p>
<p className="text-blue-200/80 text-sm">Feels like 75°</p>
</div>
</div>
<div className="ml-auto grid grid-cols-2 gap-4">
<div className="flex items-center">
<div className="bg-blue-500/20 rounded-full p-2 mr-3">
<svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-blue-200 text-xs">Wind</p>
<p className="text-white text-sm">8 mph</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-500/20 rounded-full p-2 mr-3">
<svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-blue-200 text-xs">UV Index</p>
<p className="text-white text-sm">4 (Moderate)</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-500/20 rounded-full p-2 mr-3">
<svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-blue-200 text-xs">Humidity</p>
<p className="text-white text-sm">72%</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-500/20 rounded-full p-2 mr-3">
<svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-blue-200 text-xs">Visibility</p>
<p className="text-white text-sm">10 mi</p>
</div>
</div>
</div>
</div>

<div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4">
<h3 className="text-white text-md font-medium mb-4">5-Day Forecast</h3>
<div className="grid grid-cols-5 gap-3">
<div className="bg-white/10 rounded-lg p-3 text-center">
<p className="text-blue-200 text-sm">Mon</p>
<svg className="w-8 h-8 mx-auto my-2 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-white text-sm font-medium">72°</p>
<p className="text-blue-300 text-xs">63°</p>
</div>
<div className="bg-white/10 rounded-lg p-3 text-center">
<p className="text-blue-200 text-sm">Tue</p>
<svg className="w-8 h-8 mx-auto my-2 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-white text-sm font-medium">68°</p>
<p className="text-blue-300 text-xs">61°</p>
</div>
<div className="bg-white/10 rounded-lg p-3 text-center">
<p className="text-blue-200 text-sm">Wed</p>
<svg className="w-8 h-8 mx-auto my-2 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-white text-sm font-medium">65°</p>
<p className="text-blue-300 text-xs">58°</p>
</div>
<div className="bg-white/10 rounded-lg p-3 text-center">
<p className="text-blue-200 text-sm">Thu</p>
<svg className="w-8 h-8 mx-auto my-2 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-white text-sm font-medium">74°</p>
<p className="text-blue-300 text-xs">65°</p>
</div>
<div className="bg-white/10 rounded-lg p-3 text-center">
<p className="text-blue-200 text-sm">Fri</p>
<svg className="w-8 h-8 mx-auto my-2 text-white" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-white text-sm font-medium">76°</p>
<p className="text-blue-300 text-xs">67°</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-white text-md font-medium">Air Quality</h3>
<span className="text-xs text-green-300 bg-green-300/20 px-2 py-1 rounded-full">Good</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-blue-200 text-sm">Air Quality Index</span>
<span className="text-white text-sm font-medium">42</span>
</div>
<div className="w-full bg-blue-200/30 rounded-full h-1.5 mb-4">
<div className="bg-green-300 h-1.5 rounded-full" style={{width: `42%`}}></div>
</div>
<div className="grid grid-cols-3 gap-2 text-center mt-3">
<div className="bg-blue-900/30 rounded-lg p-2">
<p className="text-blue-200 text-xs">PM2.5</p>
<p className="text-white text-sm font-medium mt-1">12 μg/m³</p>
</div>
<div className="bg-blue-900/30 rounded-lg p-2">
<p className="text-blue-200 text-xs">PM10</p>
<p className="text-white text-sm font-medium mt-1">25 μg/m³</p>
</div>
<div className="bg-blue-900/30 rounded-lg p-2">
<p className="text-blue-200 text-xs">O₃</p>
<p className="text-white text-sm font-medium mt-1">35 ppb</p>
</div>
</div>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
<h3 className="text-white text-md font-medium mb-4">Weather Details</h3>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-blue-200 text-sm">Precipitation</span>
<span className="text-white text-sm">10%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-blue-200 text-sm">Pressure</span>
<span className="text-white text-sm">1014 hPa</span>
</div>
<div className="flex justify-between items-center">
<span className="text-blue-200 text-sm">Sunrise</span>
<span className="text-white text-sm">6:42 AM</span>
</div>
<div className="flex justify-between items-center">
<span className="text-blue-200 text-sm">Sunset</span>
<span className="text-white text-sm">7:53 PM</span>
</div>
<div className="flex justify-between items-center">
<span className="text-blue-200 text-sm">Moon Phase</span>
<span className="text-white text-sm">Waxing Crescent</span>
</div>
<div className="flex justify-between items-center">
<span className="text-blue-200 text-sm">Chance of Rain</span>
<span className="text-white text-sm">15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-800 border-t border-gray-700 px-4 py-2 flex justify-between items-center text-xs text-gray-400">
<div>Weather data provided by OpenWeather</div>
<div className="flex items-center">
<span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
<span>Online</span>
</div>
</div>
</div>

    </>
  );
}
