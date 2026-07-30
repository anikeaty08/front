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
      
<div className="rounded-xl shadow-2xl bg-[#f6f9fc] p-2 w-[800px] h-[600px] flex flex-col justify-center" style={{boxShadow: `0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3),inset 0 -2px 6px 0 rgba(10,37,64,0.35)`}}>
<div className="rounded-lg bg-white h-full flex flex-col justify-between relative overflow-hidden">

<div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200">
<div className="flex items-center space-x-2">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<h1 className="text-gray-800 text-xs font-medium ml-4">Weather Forecast</h1>
</div>
<div className="flex items-center space-x-4">
<div className="text-gray-400 hover:text-gray-600">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.5v15m7.5-7.5h-15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div className="text-gray-400 hover:text-gray-600">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
<div className="flex items-center space-x-2 mb-6">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h2 className="text-gray-800 text-xs font-medium">Locations</h2>
</div>
<div className="space-y-1">
<div className="bg-blue-100 text-blue-800 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">New York</span>
<span className="text-xs">72°</span>
</div>
<div className="text-gray-600 hover:bg-gray-100 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">San Francisco</span>
<span className="text-xs">64°</span>
</div>
<div className="text-gray-600 hover:bg-gray-100 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Los Angeles</span>
<span className="text-xs">78°</span>
</div>
<div className="text-gray-600 hover:bg-gray-100 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Chicago</span>
<span className="text-xs">65°</span>
</div>
<div className="text-gray-600 hover:bg-gray-100 rounded-md p-2 flex items-center justify-between">
<span className="text-xs">Miami</span>
<span className="text-xs">86°</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-gray-200">
<div className="flex items-center justify-between text-gray-500 text-xs mb-2">
<span>Last updated</span>
<span>Just now</span>
</div>
<button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-md py-1.5 text-xs mt-4 flex items-center justify-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                            Refresh Data
                        </button>
</div>
</div>

<div className="flex-1 bg-gradient-to-b from-blue-50 to-indigo-50 overflow-y-auto">
<div className="p-6">

<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-gray-800 text-xl font-semibold">New York</h1>
<p className="text-gray-500 text-xs">Monday, June 5 • 3:45 PM</p>
</div>
<div className="flex space-x-2">
<button className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-md px-2 py-1 text-xs">°F</button>
<button className="bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-md px-2 py-1 text-xs">°C</button>
</div>
</div>

<div className="bg-white shadow-sm rounded-lg p-4 mb-4 flex items-center">
<div className="flex items-center">
<svg className="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<div className="ml-4">
<div className="flex items-baseline">
<span className="text-4xl font-light text-gray-800">72°</span>
<span className="ml-1 text-gray-500 text-sm">F</span>
</div>
<p className="text-gray-700 text-sm">Partly Cloudy</p>
<p className="text-gray-500 text-xs">Feels like 75°</p>
</div>
</div>
<div className="ml-auto grid grid-cols-2 gap-4">
<div className="flex items-center">
<div className="bg-blue-50 rounded-full p-2 mr-2">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-gray-500 text-xs">Wind</p>
<p className="text-gray-800 text-xs">8 mph</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-50 rounded-full p-2 mr-2">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-gray-500 text-xs">UV Index</p>
<p className="text-gray-800 text-xs">4 (Moderate)</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-50 rounded-full p-2 mr-2">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-gray-500 text-xs">Humidity</p>
<p className="text-gray-800 text-xs">72%</p>
</div>
</div>
<div className="flex items-center">
<div className="bg-blue-50 rounded-full p-2 mr-2">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<p className="text-gray-500 text-xs">Visibility</p>
<p className="text-gray-800 text-xs">10 mi</p>
</div>
</div>
</div>
</div>

<div className="bg-white shadow-sm rounded-lg p-4 mb-4">
<h3 className="text-gray-800 text-xs font-medium mb-3">5-Day Forecast</h3>
<div className="grid grid-cols-5 gap-3">
<div className="bg-gray-50 rounded-lg p-2 text-center">
<p className="text-gray-500 text-xs">Mon</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-gray-800 text-xs font-medium">72°</p>
<p className="text-gray-500 text-xs">63°</p>
</div>
<div className="bg-gray-50 rounded-lg p-2 text-center">
<p className="text-gray-500 text-xs">Tue</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-gray-800 text-xs font-medium">68°</p>
<p className="text-gray-500 text-xs">61°</p>
</div>
<div className="bg-gray-50 rounded-lg p-2 text-center">
<p className="text-gray-500 text-xs">Wed</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-gray-800 text-xs font-medium">65°</p>
<p className="text-gray-500 text-xs">58°</p>
</div>
<div className="bg-gray-50 rounded-lg p-2 text-center">
<p className="text-gray-500 text-xs">Thu</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-gray-800 text-xs font-medium">74°</p>
<p className="text-gray-500 text-xs">65°</p>
</div>
<div className="bg-gray-50 rounded-lg p-2 text-center">
<p className="text-gray-500 text-xs">Fri</p>
<svg className="w-6 h-6 mx-auto my-1 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-gray-800 text-xs font-medium">76°</p>
<p className="text-gray-500 text-xs">67°</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white shadow-sm rounded-lg p-4">
<div className="flex justify-between items-center mb-3">
<h3 className="text-gray-800 text-xs font-medium">Air Quality</h3>
<span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Good</span>
</div>
<div className="flex justify-between items-center mb-2">
<span className="text-gray-500 text-xs">Air Quality Index</span>
<span className="text-gray-800 text-xs font-medium">42</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-1 mb-3">
<div className="bg-green-500 h-1 rounded-full" style={{width: `42%`}}></div>
</div>
<div className="grid grid-cols-3 gap-2 text-center mt-2">
<div className="bg-gray-50 rounded-lg p-1.5">
<p className="text-gray-500 text-[10px]">PM2.5</p>
<p className="text-gray-800 text-xs font-medium mt-0.5">12 μg/m³</p>
</div>
<div className="bg-gray-50 rounded-lg p-1.5">
<p className="text-gray-500 text-[10px]">PM10</p>
<p className="text-gray-800 text-xs font-medium mt-0.5">25 μg/m³</p>
</div>
<div className="bg-gray-50 rounded-lg p-1.5">
<p className="text-gray-500 text-[10px]">O₃</p>
<p className="text-gray-800 text-xs font-medium mt-0.5">35 ppb</p>
</div>
</div>
</div>
<div className="bg-white shadow-sm rounded-lg p-4">
<h3 className="text-gray-800 text-xs font-medium mb-3">Weather Details</h3>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-gray-500 text-xs">Precipitation</span>
<span className="text-gray-800 text-xs">10%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-xs">Pressure</span>
<span className="text-gray-800 text-xs">1014 hPa</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-xs">Sunrise</span>
<span className="text-gray-800 text-xs">6:42 AM</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-xs">Sunset</span>
<span className="text-gray-800 text-xs">7:53 PM</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-xs">Moon Phase</span>
<span className="text-gray-800 text-xs">Waxing Crescent</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500 text-xs">Chance of Rain</span>
<span className="text-gray-800 text-xs">15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-100 border-t border-gray-200 px-4 py-1.5 flex justify-between items-center text-[10px] text-gray-500">
<div>Weather data provided by OpenWeather</div>
<div className="flex items-center">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mr-1"></span>
<span>Online</span>
</div>
</div>
</div>
</div>

    </>
  );
}
