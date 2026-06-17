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
            taupe: {
              50: '#f8f7f6',
              100: '#e9e6e2',
              200: '#d8d2cc',
              300: '#bfb5ab',
              400: '#a69688',
              500: '#95846f',
              600: '#857361',
              700: '#6f5f51',
              800: '#5c5045',
              900: '#4d443b',
            }
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
<div className="w-full h-full bg-taupe-50 flex flex-col">

<div className="pt-14 pb-4 px-6">
<div className="flex items-center">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
<i className="bi bi-chevron-left text-taupe-700"></i>
</button>
<h1 className="text-xl font-medium text-taupe-800 ml-4">Settings</h1>
</div>
</div>

<div className="flex-1 px-6 overflow-y-auto">

<div className="mb-6">
<h2 className="text-sm font-medium text-taupe-500 mb-3">ACCOUNT</h2>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center">
<div className="w-12 h-12 rounded-full bg-taupe-300 flex items-center justify-center text-white">
<span className="text-lg font-medium">JD</span>
</div>
<div className="ml-3">
<p className="text-taupe-800 font-medium">Jane Doe</p>
<p className="text-taupe-500 text-sm">jane.doe@example.com</p>
</div>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-shield-lock text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Privacy &amp; Security</span>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-bell text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Notifications</span>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-taupe-500 mb-3">PREFERENCES</h2>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<i className="bi bi-thermometer-half text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Temperature Unit</span>
</div>
<select className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-lg px-3 py-2">
<option>Celsius (°C)</option>
<option>Fahrenheit (°F)</option>
</select>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<i className="bi bi-speedometer2 text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Wind Speed</span>
</div>
<select className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-lg px-3 py-2">
<option>km/h</option>
<option>mph</option>
<option>m/s</option>
</select>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<i className="bi bi-clock text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Time Format</span>
</div>
<select className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-lg px-3 py-2">
<option>24-hour</option>
<option>12-hour</option>
</select>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<i className="bi bi-calendar3 text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Date Format</span>
</div>
<select className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-lg px-3 py-2">
<option>DD/MM/YYYY</option>
<option>MM/DD/YYYY</option>
<option>YYYY-MM-DD</option>
</select>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-taupe-500 mb-3">APPEARANCE</h2>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<i className="bi bi-moon-stars text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Dark Mode</span>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-taupe-300 rounded-full peer peer-checked:bg-taupe-600 peer-focus:ring-2 peer-focus:ring-taupe-300"></div>
<div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
</div>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center">
<i className="bi bi-palette text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Theme</span>
</div>
<select className="bg-taupe-50 border border-taupe-200 text-taupe-800 text-sm rounded-lg px-3 py-2">
<option>Default</option>
<option>Sky</option>
<option>Desert</option>
<option>Forest</option>
</select>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-taupe-500 mb-3">OTHER</h2>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center">
<i className="bi bi-info-circle text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">About</span>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-question-circle text-taupe-500 text-lg"></i>
<span className="ml-3 text-taupe-800">Help &amp; Support</span>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4">
<button className="w-full text-left text-red-500 flex items-center">
<i className="bi bi-box-arrow-right text-lg"></i>
<span className="ml-3">Sign Out</span>
</button>
</div>
</div>
</div>
</div>

<div className="pb-2 flex justify-center">
<div className="w-[134px] h-[5px] bg-taupe-200 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
