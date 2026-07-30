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
      
<div className="relative w-[320px] h-[650px] bg-black rounded-[45px] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-black rounded-b-2xl z-10"></div>
<div className="bg-[#101010] h-full p-4 pt-10 overflow-y-auto">

<div className="flex items-center mb-6">
<button className="text-gray-400 mr-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<h1 className="text-white text-lg font-medium">Settings</h1>
</div>

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#232323]">
<h3 className="text-gray-200 font-medium text-sm">Units</h3>
</div>
<div className="p-4 space-y-4">
<div>
<label className="text-xs text-gray-500 block mb-2">Temperature</label>
<div className="flex bg-[#1a1a1a] rounded-lg p-1">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md bg-blue-500 text-white">Fahrenheit (°F)</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-400">Celsius (°C)</button>
</div>
</div>
<div>
<label className="text-xs text-gray-500 block mb-2">Wind Speed</label>
<div className="flex bg-[#1a1a1a] rounded-lg p-1">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md bg-blue-500 text-white">MPH</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-400">KM/H</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-400">Knots</button>
</div>
</div>
<div>
<label className="text-xs text-gray-500 block mb-2">Pressure</label>
<div className="flex bg-[#1a1a1a] rounded-lg p-1">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md bg-blue-500 text-white">hPa</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-400">inHg</button>
</div>
</div>
<div>
<label className="text-xs text-gray-500 block mb-2">Distance</label>
<div className="flex bg-[#1a1a1a] rounded-lg p-1">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md bg-blue-500 text-white">Miles</button>
<button className="flex-1 py-1.5 text-xs font-medium text-gray-400">Kilometers</button>
</div>
</div>
</div>
</div>

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#232323]">
<h3 className="text-gray-200 font-medium text-sm">Appearance</h3>
</div>
<div className="p-4 space-y-4">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">Dark Mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-[#232323] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blue-500 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
</label>
</div>
<div>
<label className="text-xs text-gray-500 block mb-2">Theme Color</label>
<div className="flex space-x-2">
<button className="w-6 h-6 rounded-full bg-blue-500 ring-2 ring-blue-500 ring-offset-1 ring-offset-[#151515]"></button>
<button className="w-6 h-6 rounded-full bg-purple-500"></button>
<button className="w-6 h-6 rounded-full bg-green-500"></button>
<button className="w-6 h-6 rounded-full bg-red-500"></button>
<button className="w-6 h-6 rounded-full bg-orange-500"></button>
</div>
</div>
</div>
</div>

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="px-4 pt-3 pb-2 border-b border-[#232323]">
<h3 className="text-gray-200 font-medium text-sm">Notifications</h3>
</div>
<div className="p-4 space-y-3">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">Weather Alerts</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-[#232323] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blue-500 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
</label>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">Daily Forecast</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-[#232323] rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-gray-400 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-full peer-checked:after:bg-blue-500"></div>
</label>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">Air Quality Alerts</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" />
<div className="w-9 h-5 bg-[#232323] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-blue-500 after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
</label>
</div>
</div>
</div>

<div className="w-full bg-[#151515] rounded-xl overflow-hidden shadow-lg border border-[#232323] mb-4">
<div className="p-4 space-y-3">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">App Version</span>
<span className="text-xs text-gray-500">1.2.3</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-gray-400">Data Source</span>
<span className="text-xs text-gray-500">OpenWeather API</span>
</div>
<button className="w-full mt-2 py-2 bg-[#1a1a1a] rounded-lg text-xs text-gray-300">
            Privacy Policy
          </button>
<button className="w-full py-2 bg-[#1a1a1a] rounded-lg text-xs text-gray-300">
            Terms of Service
          </button>
</div>
</div>
</div>
<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-gray-600 rounded-full"></div>
</div>

    </>
  );
}
