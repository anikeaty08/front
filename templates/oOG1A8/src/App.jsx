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
            offwhite: '#f8f8f8'
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

<div className="p-6 flex justify-between items-center">
<h1 className="text-2xl font-medium text-blue-800">Profile</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-gear text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-secondary/20 flex items-center">
<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-medium mr-4">
            JD
          </div>
<div>
<h2 className="text-xl font-medium text-blue-800">John Doe</h2>
<div className="text-sm text-secondary">john.doe@example.com</div>
<div className="flex items-center mt-1">
<i className="bi bi-geo-alt text-secondary text-sm mr-1"></i>
<span className="text-xs text-secondary">San Francisco, CA</span>
</div>
</div>
<button className="ml-auto text-secondary">
<i className="bi bi-pencil text-lg"></i>
</button>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Preferences</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-thermometer-half text-blue-600"></i>
</div>
<span className="text-blue-800">Temperature Unit</span>
</div>
<div className="flex items-center gap-3">
<span className="text-secondary">°F</span>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-blue-600">
<span className="absolute h-4 w-4 transform translate-x-6 bg-white rounded-full"></span>
</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-wind text-blue-600"></i>
</div>
<span className="text-blue-800">Wind Speed</span>
</div>
<div className="flex items-center gap-3">
<span className="text-secondary">mph</span>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-secondary/30">
<span className="absolute h-4 w-4 transform translate-x-1 bg-white rounded-full"></span>
</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-droplet text-blue-600"></i>
</div>
<span className="text-blue-800">Precipitation</span>
</div>
<div className="flex items-center gap-3">
<span className="text-secondary">in</span>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-blue-600">
<span className="absolute h-4 w-4 transform translate-x-6 bg-white rounded-full"></span>
</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-rulers text-blue-600"></i>
</div>
<span className="text-blue-800">Distance</span>
</div>
<div className="flex items-center gap-3">
<span className="text-secondary">miles</span>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-blue-600">
<span className="absolute h-4 w-4 transform translate-x-6 bg-white rounded-full"></span>
</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-speedometer2 text-blue-600"></i>
</div>
<span className="text-blue-800">Pressure</span>
</div>
<div className="flex items-center gap-3">
<span className="text-secondary">inHg</span>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-secondary/30">
<span className="absolute h-4 w-4 transform translate-x-1 bg-white rounded-full"></span>
</button>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Notifications</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-bell text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Weather Alerts</div>
<div className="text-xs text-secondary">Severe weather warnings</div>
</div>
</div>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-blue-600">
<span className="absolute h-4 w-4 transform translate-x-6 bg-white rounded-full"></span>
</button>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-umbrella text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Rain Alerts</div>
<div className="text-xs text-secondary">Notifications before rain</div>
</div>
</div>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-blue-600">
<span className="absolute h-4 w-4 transform translate-x-6 bg-white rounded-full"></span>
</button>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-sun text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Daily Forecast</div>
<div className="text-xs text-secondary">Morning weather summary</div>
</div>
</div>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-secondary/30">
<span className="absolute h-4 w-4 transform translate-x-1 bg-white rounded-full"></span>
</button>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3">Account</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-shield-check text-blue-600"></i>
</div>
<span className="text-blue-800">Privacy Settings</span>
<i className="bi bi-chevron-right text-secondary ml-auto"></i>
</button>
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-question-circle text-blue-600"></i>
</div>
<span className="text-blue-800">Help &amp; Support</span>
<i className="bi bi-chevron-right text-secondary ml-auto"></i>
</button>
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-info-circle text-blue-600"></i>
</div>
<span className="text-blue-800">About</span>
<i className="bi bi-chevron-right text-secondary ml-auto"></i>
</button>
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-red-50 rounded-full mr-3">
<i className="bi bi-box-arrow-right text-red-600"></i>
</div>
<span className="text-red-600">Sign Out</span>
</button>
</div>
</div>
</div>

<div className="p-4 border-t border-secondary/20 bg-white">
<div className="flex justify-around">
<button className="flex flex-col items-center text-secondary">
<i className="bi bi-house text-xl"></i>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-secondary">
<i className="bi bi-search text-xl"></i>
<span className="text-xs mt-1">Search</span>
</button>
<button className="flex flex-col items-center text-secondary">
<i className="bi bi-map text-xl"></i>
<span className="text-xs mt-1">Map</span>
</button>
<button className="flex flex-col items-center text-blue-800">
<i className="bi bi-person-fill text-xl"></i>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
