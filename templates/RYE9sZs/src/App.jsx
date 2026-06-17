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
      
<div className="iphone-frame">
<div className="iphone-screen">
<div className="notch"></div>
<div className="screen-content bg-gray-50">

<div className="pt-8 px-5 flex justify-between text-xs font-semibold">
<span>9:41</span>
<div className="flex space-x-1">
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L6 22"></path><path d="M10 6L10 22"></path><path d="M14 12L14 22"></path><path d="M18 16L18 22"></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10L21 10"></path><path d="M18 14L21 14"></path><path d="M18 18L21 18"></path><path d="M18 6L21 6"></path><path d="M3 18L7 18 10 6 17 6"></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H3.77778C2.79594 7 2 7.74619 2 8.66667V15.3333C2 16.2538 2.79594 17 3.77778 17H7"></path>
<path d="M17 7H20.2222C21.2041 7 22 7.74619 22 8.66667V15.3333C22 16.2538 21.2041 17 20.2222 17H17"></path>
<path d="M7 7L7 17"></path>
<path d="M17 7L17 17"></path>
<path d="M7 12L17 12"></path>
</svg>
</span>
</div>
</div>

<header className="px-6 pt-3 pb-4">
<div className="flex items-center">
<button className="mr-3 p-2 rounded-full bg-gray-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="M12 19l-7-7 7-7"></path>
</svg>
</button>
<h1 className="text-2xl font-bold text-gray-900">Kitchen</h1>
</div>
</header>

<main className="px-6">

<div className="rounded-3xl overflow-hidden mb-6 relative">
<img alt="Kitchen" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
<div className="text-white">
<h2 className="text-xl font-bold">Kitchen</h2>
<p className="text-sm opacity-80">6 devices</p>
</div>
</div>
</div>

<h3 className="text-lg font-semibold text-gray-800 mb-4">Devices</h3>

<div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-orange-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<line x1="6" x2="6" y1="8" y2="8.01"></line>
<line x1="10" x2="10" y1="8" y2="8.01"></line>
<line x1="14" x2="14" y1="8" y2="8.01"></line>
<line x1="18" x2="18" y1="8" y2="8.01"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
<line x1="8" x2="16" y1="16" y2="16"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart Oven</h4>
<p className="text-xs text-gray-500">Samsung Chef Collection</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="mt-4">
<div className="flex justify-between text-xs text-gray-500 mb-2">
<span>Current Temperature</span>
<span>175°C</span>
</div>
<div className="temp-gauge">
<div className="temp-indicator"></div>
</div>
<div className="flex justify-between text-xs text-gray-400 mt-1">
<span>50°C</span>
<span>250°C</span>
</div>
</div>

<div className="mt-4">
<div className="flex justify-between items-center">
<p className="text-xs text-gray-500">Timer</p>
<p className="text-xs text-green-600 font-medium">Running</p>
</div>
<div className="timer-display text-center my-2">
                12:45
              </div>
<div className="flex justify-between">
<button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Reset</button>
<button className="px-4 py-2 bg-red-500 text-white rounded-xl text-xs font-medium">Stop</button>
</div>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Mode</p>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 bg-blue-500 text-white rounded-xl text-xs font-medium">Bake</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Broil</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Roast</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Convection</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Warm</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Proof</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="4" x2="20" y1="10" y2="10"></line>
<line x1="12" x2="12" y1="10" y2="22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart Refrigerator</h4>
<p className="text-xs text-gray-500">LG InstaView</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="mt-4 flex space-x-4">
<div className="flex-1 bg-gray-50 p-3 rounded-xl">
<p className="text-xs text-gray-500 mb-1">Fridge</p>
<div className="flex items-center justify-between">
<p className="font-medium text-lg">3°C</p>
<div className="flex">
<button className="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
<button className="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="5" y2="19"></line>
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
</div>
</div>
</div>
<div className="flex-1 bg-gray-50 p-3 rounded-xl">
<p className="text-xs text-gray-500 mb-1">Freezer</p>
<div className="flex items-center justify-between">
<p className="font-medium text-lg">-18°C</p>
<div className="flex">
<button className="w-8 h-8 bg-gray-200 rounded-l-lg flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
<button className="w-8 h-8 bg-gray-200 rounded-r-lg flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="5" y2="19"></line>
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-4 bg-blue-50 p-3 rounded-xl">
<div className="flex items-start">
<svg className="text-blue-600 mr-2 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="16" y2="12"></line>
<line x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
<div>
<p className="text-sm font-medium text-blue-800">Water filter needs replacement</p>
<p className="text-xs text-blue-600">Estimated 2 weeks remaining</p>
</div>
</div>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Quick Settings</p>
<div className="flex space-x-2 overflow-x-auto py-1">
<button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium whitespace-nowrap">Ice Maker</button>
<button className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs font-medium whitespace-nowrap">Energy Saver</button>
<button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium whitespace-nowrap">Quick Cool</button>
<button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium whitespace-nowrap">Vacation Mode</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center mr-3" style={{backgroundColor: '#f5e0d7'}}>
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#9a6348'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M17 8h1a4 4 0 1 1 0 8h-1"></path>
<path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"></path>
<line x1="6" x2="6" y1="2" y2="4"></line>
<line x1="10" x2="10" y1="2" y2="4"></line>
<line x1="14" x2="14" y1="2" y2="4"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Coffee Maker</h4>
<p className="text-xs text-gray-500">Philips Smart Brew</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Brew Presets</p>
<div className="grid grid-cols-2 gap-2">
<button className="py-2 px-3 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium flex items-center justify-center">
<span className="mr-2">☕</span> Espresso
                </button>
<button className="py-2 px-3 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium flex items-center justify-center">
<span className="mr-2">☕</span> Americano
                </button>
<button className="py-2 px-3 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium flex items-center justify-center">
<span className="mr-2">☕</span> Cappuccino
                </button>
<button className="py-2 px-3 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium flex items-center justify-center">
<span className="mr-2">☕</span> Latte
                </button>
</div>
</div>

<div className="mt-4">
<div className="flex justify-between items-center mb-2">
<p className="text-xs text-gray-500">Morning Schedule</p>
<label className="toggle-switch" style={{width: '40px', height: '22px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '22px'}}></span>
</label>
</div>
<div className="bg-gray-50 p-3 rounded-xl flex justify-between items-center">
<div>
<p className="text-sm font-medium">Weekdays</p>
<p className="text-xs text-gray-500">Americano, Medium Strength</p>
</div>
<p className="text-sm font-medium">6:30 AM</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Kitchen Lights</h4>
<p className="text-xs text-gray-500">Phillips Hue (3 bulbs)</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="mt-4 px-2">
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Brightness</span>
<span>75%</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" max="100" min="0" type="range" value="75"/>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Lighting Scenes</p>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 bg-blue-500 text-white rounded-xl text-xs font-medium">Cooking</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Dining</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Evening</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-purple-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Kitchen Speaker</h4>
<p className="text-xs text-gray-500">Sonos One</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="mt-4 px-2">
<div className="flex justify-between text-xs text-gray-500 mb-1">
<span>Volume</span>
<span>40%</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" max="100" min="0" type="range" value="40"/>
</div>

<div className="mt-4 bg-gray-50 p-3 rounded-xl">
<p className="text-xs text-gray-500 mb-1">Now Playing</p>
<div className="flex items-center">
<div className="w-12 h-12 bg-gray-300 rounded-md mr-3 flex-shrink-0 overflow-hidden">
<img alt="Album cover" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<p className="font-medium text-sm">Kitchen Jazz Playlist</p>
<p className="text-xs text-gray-500">Spotify</p>
</div>
<button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
</div>
</div>
</div>

<div --="" 
<div className="mt-4 bg-gray-50 p-3 rounded-xl">
<div className="flex justify-between items-center">
<div>
<p className="text-sm font-medium">Last Cycle</p>
<p className="text-xs text-gray-500">Normal, Completed 3h ago</p>
</div>
<span className="text-xs bg-green-100 text-green-800 py-1 px-2 rounded-full">Eco Mode</span>
</div>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Wash Cycles</p>
<div className="grid grid-cols-2 gap-2">
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Auto</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Heavy</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Normal</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Quick</button>
</div>
</div>

<div className="mt-4">
<div className="flex justify-between items-center mb-2">
<p className="text-xs text-gray-500">Delayed Start</p>
<label className="toggle-switch" style={{width: '40px', height: '22px'}}>
<input type="checkbox"/>
<span className="toggle-slider" style={{height: '22px'}}></span>
</label>
</div>
<div className="flex">
<button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-l-xl text-xs font-medium">2h</button>
<button className="flex-1 py-2 bg-gray-200 text-gray-700 text-xs font-medium">4h</button>
<button className="flex-1 py-2 bg-gray-200 text-gray-700 text-xs font-medium">6h</button>
<button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-r-xl text-xs font-medium">8h</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-indigo-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<rect height="8" rx="1" width="12" x="6" y="8"></rect>
<line x1="17" x2="17" y1="6" y2="6.01"></line>
<line x1="17" x2="17" y1="10" y2="10.01"></line>
<line x1="17" x2="17" y1="14" y2="14.01"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Microwave</h4>
<p className="text-xs text-gray-500">GE Profile Smart</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Quick Presets</p>
<div className="grid grid-cols-3 gap-2">
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Popcorn</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Beverage</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Defrost</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Reheat</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Potato</button>
<button className="py-2 bg-gray-200 text-gray-700 rounded-xl text-xs font-medium">Custom</button>
</div>
</div>

<div className="mt-4">
<p className="text-xs text-gray-500 mb-2">Power Level</p>
<div className="flex">
<button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-l-xl text-xs font-medium">Low</button>
<button className="flex-1 py-2 bg-gray-200 text-gray-700 text-xs font-medium">Med</button>
<button className="flex-1 py-2 bg-blue-500 text-white text-xs font-medium">High</button>
<button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-r-xl text-xs font-medium">Max</button>
</div>
</div>
</div>
</div></main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 rounded-b-[40px]">
<div className="flex justify-between max-w-md mx-auto">
<button className="flex flex-col items-center text-blue-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<span className="text-xs mt-1">Devices</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-xs mt-1">Security</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
<span className="text-xs mt-1">Settings</span>
</button>
</div>
</nav>
<div className="home-indicator"></div>
</div>
</div>

    </>
  );
}
