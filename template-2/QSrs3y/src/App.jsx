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

<div className="p-6 flex items-center">
<button className="text-secondary hover:text-blue-800 mr-4">
<i className="bi bi-chevron-left text-xl"></i>
</button>
<h1 className="text-xl font-medium text-blue-800 flex-1 text-center">Settings</h1>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="mb-5">
<h2 className="text-lg font-medium text-blue-800 mb-3 px-1">App Settings</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-palette text-blue-600"></i>
</div>
<span className="text-blue-800">App Theme</span>
</div>
<div className="flex items-center gap-2">
<span className="text-secondary text-sm">Light</span>
<button className="relative inline-flex items-center h-6 rounded-full w-11 bg-blue-600">
<span className="absolute h-4 w-4 transform translate-x-6 bg-white rounded-full"></span>
</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-translate text-blue-600"></i>
</div>
<span className="text-blue-800">Language</span>
</div>
<div className="flex items-center gap-2">
<span className="text-secondary">English</span>
<i className="bi bi-chevron-right text-secondary"></i>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-bell text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Notifications</div>
<div className="text-xs text-secondary">Manage all notifications</div>
</div>
</div>
<i className="bi bi-chevron-right text-secondary"></i>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-lock text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Privacy</div>
<div className="text-xs text-secondary">Location and data settings</div>
</div>
</div>
<i className="bi bi-chevron-right text-secondary"></i>
</div>
</div>
</div>

<div className="mb-5">
<h2 className="text-lg font-medium text-blue-800 mb-3 px-1">Units</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-thermometer-half text-blue-600"></i>
</div>
<span className="text-blue-800">Temperature</span>
</div>
<div className="flex bg-blue-50 rounded-lg p-0.5">
<button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">°F</button>
<button className="px-3 py-1 text-secondary text-sm">°C</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-wind text-blue-600"></i>
</div>
<span className="text-blue-800">Wind Speed</span>
</div>
<div className="flex bg-blue-50 rounded-lg p-0.5">
<button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">mph</button>
<button className="px-3 py-1 text-secondary text-sm">km/h</button>
<button className="px-3 py-1 text-secondary text-sm">m/s</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-droplet text-blue-600"></i>
</div>
<span className="text-blue-800">Precipitation</span>
</div>
<div className="flex bg-blue-50 rounded-lg p-0.5">
<button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">in</button>
<button className="px-3 py-1 text-secondary text-sm">mm</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-rulers text-blue-600"></i>
</div>
<span className="text-blue-800">Distance</span>
</div>
<div className="flex bg-blue-50 rounded-lg p-0.5">
<button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">mi</button>
<button className="px-3 py-1 text-secondary text-sm">km</button>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-speedometer2 text-blue-600"></i>
</div>
<span className="text-blue-800">Pressure</span>
</div>
<div className="flex bg-blue-50 rounded-lg p-0.5">
<button className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">inHg</button>
<button className="px-3 py-1 text-secondary text-sm">mb</button>
<button className="px-3 py-1 text-secondary text-sm">hPa</button>
</div>
</div>
</div>
</div>

<div className="mb-5">
<h2 className="text-lg font-medium text-blue-800 mb-3 px-1">Data Sources</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-cloud-download text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Weather Provider</div>
<div className="text-xs text-secondary">OpenWeatherMap</div>
</div>
</div>
<i className="bi bi-chevron-right text-secondary"></i>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-arrow-repeat text-blue-600"></i>
</div>
<div>
<div className="text-blue-800">Update Frequency</div>
<div className="text-xs text-secondary">Every 30 minutes</div>
</div>
</div>
<i className="bi bi-chevron-right text-secondary"></i>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3 px-1">About</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-info-circle text-blue-600"></i>
</div>
<span className="text-blue-800">App Version</span>
</div>
<span className="text-secondary">2.3.1</span>
</div>
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-star text-blue-600"></i>
</div>
<span className="text-blue-800">Rate the App</span>
<i className="bi bi-chevron-right text-secondary ml-auto"></i>
</button>
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-question-circle text-blue-600"></i>
</div>
<span className="text-blue-800">Help & Support</span>
<i className="bi bi-chevron-right text-secondary ml-auto"></i>
</button>
<button className="p-4 flex items-center w-full text-left">
<div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-full mr-3">
<i className="bi bi-file-earmark-text text-blue-600"></i>
</div>
<span className="text-blue-800">Terms & Privacy Policy</span>
<i className="bi bi-chevron-right text-secondary ml-auto"></i>
</button>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
