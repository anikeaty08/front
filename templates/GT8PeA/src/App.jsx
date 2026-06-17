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
<div className="flex items-center justify-between">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
<i className="bi bi-chevron-left text-taupe-700"></i>
</button>
<h1 className="text-xl font-medium text-taupe-800">Profile</h1>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
<i className="bi bi-gear text-taupe-700"></i>
</button>
</div>
</div>

<div className="flex-1 px-6 overflow-y-auto">

<div className="flex flex-col items-center mb-8">
<div className="relative mb-3">
<div className="w-24 h-24 rounded-full bg-taupe-300 flex items-center justify-center text-white text-3xl font-medium">
              JD
            </div>
<button className="absolute bottom-0 right-0 w-8 h-8 bg-taupe-600 rounded-full flex items-center justify-center border-2 border-taupe-50">
<i className="bi bi-pencil text-white text-xs"></i>
</button>
</div>
<h2 className="text-xl font-medium text-taupe-800">Jane Doe</h2>
<p className="text-taupe-500">San Francisco, CA</p>
<div className="flex items-center mt-1">
<i className="bi bi-geo-alt text-taupe-400 text-sm"></i>
<span className="text-taupe-400 text-sm ml-1">Default Location</span>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-taupe-500 mb-3">ACCOUNT DETAILS</h3>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4">
<p className="text-xs text-taupe-500 mb-1">Full Name</p>
<p className="text-taupe-800">Jane Doe</p>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4">
<p className="text-xs text-taupe-500 mb-1">Email</p>
<p className="text-taupe-800">jane.doe@example.com</p>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4">
<p className="text-xs text-taupe-500 mb-1">Phone</p>
<p className="text-taupe-800">+1 (555) 123-4567</p>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4">
<p className="text-xs text-taupe-500 mb-1">Date of Birth</p>
<p className="text-taupe-800">January 15, 1990</p>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-taupe-500">SAVED LOCATIONS</h3>
<button className="text-taupe-600 text-sm font-medium">Add New</button>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt-fill text-taupe-600 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">San Francisco, CA</p>
<p className="text-taupe-500 text-xs">Default Location</p>
</div>
<div className="ml-auto flex">
<button className="w-8 h-8 flex items-center justify-center text-taupe-500">
<i className="bi bi-star-fill text-yellow-400"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center text-taupe-500">
<i className="bi bi-three-dots-vertical"></i>
</button>
</div>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-500 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">New York, NY</p>
<p className="text-taupe-500 text-xs">Work Location</p>
</div>
<div className="ml-auto flex">
<button className="w-8 h-8 flex items-center justify-center text-taupe-500">
<i className="bi bi-star"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center text-taupe-500">
<i className="bi bi-three-dots-vertical"></i>
</button>
</div>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-500 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">Los Angeles, CA</p>
<p className="text-taupe-500 text-xs">Vacation Home</p>
</div>
<div className="ml-auto flex">
<button className="w-8 h-8 flex items-center justify-center text-taupe-500">
<i className="bi bi-star"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center text-taupe-500">
<i className="bi bi-three-dots-vertical"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-taupe-500 mb-3">WEATHER PREFERENCES</h3>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center justify-between">
<span className="text-taupe-800">Daily Forecast Notifications</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-taupe-300 rounded-full peer peer-checked:bg-taupe-600 peer-focus:ring-2 peer-focus:ring-taupe-300"></div>
<div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
</div>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center justify-between">
<span className="text-taupe-800">Severe Weather Alerts</span>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-taupe-300 rounded-full peer peer-checked:bg-taupe-600 peer-focus:ring-2 peer-focus:ring-taupe-300"></div>
<div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
</div>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center justify-between">
<span className="text-taupe-800">Rain Forecast Alerts</span>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-taupe-300 rounded-full peer peer-checked:bg-taupe-600 peer-focus:ring-2 peer-focus:ring-taupe-300"></div>
<div className="absolute left-[2px] top-[2px] bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-5"></div>
</div>
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
