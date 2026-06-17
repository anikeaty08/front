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
<h1 className="text-2xl font-bold text-gray-900">Thermostats</h1>
</div>
</header>

<main className="px-6">

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Living Room</h3>
<p className="text-xs text-gray-500">Nest Learning Thermostat</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>

<div className="thermostat-dial mb-6">
<div className="thermostat-track"></div>
<div className="thermostat-inner">
<span className="text-xs text-gray-500">CURRENT</span>
<div className="flex items-start">
<span className="text-5xl font-light text-gray-900">21</span>
<span className="text-xl text-gray-500">°C</span>
</div>
<span className="text-xs text-blue-500 mt-1">HEATING</span>
</div>
<div className="thermostat-knob"></div>
</div>

<div className="flex justify-between items-center">
<button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
<svg className="text-gray-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
<div className="text-center">
<div className="text-2xl font-medium text-gray-900">22°</div>
<div className="text-xs text-gray-500">TARGET</div>
</div>
<button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
<svg fill="none" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="5" y2="19"></line>
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<h3 className="text-sm font-medium text-gray-700 mb-4">Temperature History</h3>
<div className="temp-chart">
<div className="temp-chart-bg"></div>
<div className="temp-chart-line"></div>

<div className="temp-point" style={{left: '10%', bottom: '30px'}}></div>
<div className="temp-point" style={{left: '25%', bottom: '40px'}}></div>
<div className="temp-point" style={{left: '40%', bottom: '35px'}}></div>
<div className="temp-point" style={{left: '55%', bottom: '50px'}}></div>
<div className="temp-point" style={{left: '70%', bottom: '45px'}}></div>
<div className="temp-point" style={{left: '85%', bottom: '42px'}}></div>

<div className="temp-label" style={{left: '10%', bottom: '5px'}}>8AM</div>
<div className="temp-label" style={{left: '25%', bottom: '5px'}}>10AM</div>
<div className="temp-label" style={{left: '40%', bottom: '5px'}}>12PM</div>
<div className="temp-label" style={{left: '55%', bottom: '5px'}}>2PM</div>
<div className="temp-label" style={{left: '70%', bottom: '5px'}}>4PM</div>
<div className="temp-label" style={{left: '85%', bottom: '5px'}}>6PM</div>
</div>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span>Min: 19°</span>
<span>Avg: 21°</span>
<span>Max: 23°</span>
</div>
</div>

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<h3 className="text-sm font-medium text-gray-700 mb-4">Mode</h3>
<div className="grid grid-cols-3 gap-3">
<button className="py-3 bg-blue-500 text-white rounded-xl text-sm font-medium flex flex-col items-center">
<svg className="mb-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>
                Heat
              </button>
<button className="py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium flex flex-col items-center">
<svg className="mb-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>
                Cool
              </button>
<button className="py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium flex flex-col items-center">
<svg className="mb-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>
                Auto
              </button>
</div>
</div>

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center">
<div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-700" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H7.5a2.5 2.5 0 0 0 0 5H17"></path>
<path d="M17 14H7.5a2.5 2.5 0 0 1 0-5H17"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Fan</h4>
<p className="text-xs text-gray-500">Control fan speed</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="flex">
<button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-l-xl text-xs font-medium">Auto</button>
<button className="flex-1 py-2 bg-blue-500 text-white text-xs font-medium">Low</button>
<button className="flex-1 py-2 bg-gray-100 text-gray-700 text-xs font-medium">Med</button>
<button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-r-xl text-xs font-medium">High</button>
</div>
</div>

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Eco Mode</h4>
<p className="text-xs text-gray-500">Save energy when away</p>
</div>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="mt-4 bg-green-50 p-3 rounded-xl">
<div className="flex items-start">
<svg className="text-green-600 mr-2 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<div>
<p className="text-sm font-medium text-green-800">Eco mode active</p>
<p className="text-xs text-green-600">Saved 12% energy this week</p>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h3 className="text-sm font-medium text-gray-700">Schedules</h3>
<button className="text-xs font-medium text-blue-600">+ Add New</button>
</div>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Morning Comfort</h4>
<p className="text-xs text-gray-500">Weekdays • 6:30 AM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md">
<span className="text-xs text-gray-700">Heat to 22°C</span>
<span className="text-xs text-blue-600">Fan: Auto</span>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Day Energy Saver</h4>
<p className="text-xs text-gray-500">Weekdays • 9:00 AM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md">
<span className="text-xs text-gray-700">Heat to 19°C</span>
<span className="text-xs text-green-600">Eco Mode</span>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Evening Comfort</h4>
<p className="text-xs text-gray-500">Every day • 5:00 PM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md">
<span className="text-xs text-gray-700">Heat to 21°C</span>
<span className="text-xs text-blue-600">Fan: Low</span>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div>
<h4 className="font-medium text-gray-900">Night Setback</h4>
<p className="text-xs text-gray-500">Every day • 10:30 PM</p>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
<div className="flex justify-between items-center bg-gray-50 px-3 py-2 rounded-md">
<span className="text-xs text-gray-700">Heat to 18°C</span>
<span className="text-xs text-green-600">Eco Mode</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-gray-700 mb-3">Other Thermostats</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Bedroom</h4>
<p className="text-xs text-gray-500">Ecobee Smart • 20°C</p>
</div>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path 0="" 0-5="" 0v11.26a4.5="" 0z"="" 1="" 14.76v3.5a2.5="" 2.5="" 4.5="" 5="" d="
&lt;path d=" m14=""></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Kitchen</h4>
<p className="text-xs text-gray-500">Nest E • 19°C</p>
</div>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-gray-700 mb-3">Settings</h3>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Device Settings</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-purple-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 2 L12 6 8 2"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Home/Away Assist</span>
</div>
<label className="toggle-switch" style={{width: '40px', height: '24px'}}>
<input checked="" type="checkbox"/>
<span className="toggle-slider" style={{height: '24px'}}></span>
</label>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Energy History</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-red-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9"></path>
<path d="M13 2v7h7"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Thermostat History</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>
</main>
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
