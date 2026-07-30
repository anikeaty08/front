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
<h1 className="text-xl font-medium text-blue-800 flex-1 text-center">San Francisco</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-three-dots-vertical text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-secondary/20">
<div className="flex flex-col items-center mb-4">
<div className="text-xs text-secondary mb-1">Today, May 15</div>
<div className="text-6xl font-light text-blue-800 mb-1">68°</div>
<div className="flex items-center gap-1">
<i className="bi bi-cloud-sun text-secondary"></i>
<span className="text-secondary">Partly Cloudy</span>
</div>
<div className="text-xs text-secondary mt-2">Feels like 66°</div>
</div>
<div className="flex justify-between text-center border-t border-secondary/20 pt-4">
<div>
<div className="text-xs text-secondary mb-1">Wind</div>
<div className="text-sm font-medium text-blue-800">8 mph</div>
</div>
<div>
<div className="text-xs text-secondary mb-1">Humidity</div>
<div className="text-sm font-medium text-blue-800">65%</div>
</div>
<div>
<div className="text-xs text-secondary mb-1">UV Index</div>
<div className="text-sm font-medium text-blue-800">5 of 10</div>
</div>
<div>
<div className="text-xs text-secondary mb-1">Visibility</div>
<div className="text-sm font-medium text-blue-800">10 mi</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Hourly Forecast</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 p-4">
<div className="flex overflow-x-auto pb-2 gap-4">
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">Now</div>
<div className="text-xl text-blue-800 font-medium mb-2">68°</div>
<i className="bi bi-cloud-sun text-secondary text-xl mb-2"></i>
<div className="text-xs text-secondary">8 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">1 PM</div>
<div className="text-xl text-blue-800 font-medium mb-2">70°</div>
<i className="bi bi-cloud-sun text-secondary text-xl mb-2"></i>
<div className="text-xs text-secondary">7 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">2 PM</div>
<div className="text-xl text-blue-800 font-medium mb-2">71°</div>
<i className="bi bi-sun text-amber-400 text-xl mb-2"></i>
<div className="text-xs text-secondary">6 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">3 PM</div>
<div className="text-xl text-blue-800 font-medium mb-2">72°</div>
<i className="bi bi-sun text-amber-400 text-xl mb-2"></i>
<div className="text-xs text-secondary">5 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">4 PM</div>
<div className="text-xl text-blue-800 font-medium mb-2">71°</div>
<i className="bi bi-sun text-amber-400 text-xl mb-2"></i>
<div className="text-xs text-secondary">5 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">5 PM</div>
<div className="text-xl text-blue-800 font-medium mb-2">69°</div>
<i className="bi bi-cloud-sun text-secondary text-xl mb-2"></i>
<div className="text-xs text-secondary">6 mph</div>
</div>
<div className="flex flex-col items-center min-w-[60px]">
<div className="text-sm text-secondary mb-2">6 PM</div>
<div className="text-xl text-blue-800 font-medium mb-2">67°</div>
<i className="bi bi-cloud text-secondary text-xl mb-2"></i>
<div className="text-xs text-secondary">7 mph</div>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">7-Day Forecast</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Today</div>
<div className="flex items-center flex-1">
<i className="bi bi-cloud-sun text-secondary text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-amber-400 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">72°</span>
<span className="text-sm text-secondary">61°</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Mon, May 16</div>
<div className="flex items-center flex-1">
<i className="bi bi-sun text-amber-400 text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-amber-400 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">75°</span>
<span className="text-sm text-secondary">62°</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Tue, May 17</div>
<div className="flex items-center flex-1">
<i className="bi bi-sun text-amber-400 text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-amber-400 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">77°</span>
<span className="text-sm text-secondary">64°</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Wed, May 18</div>
<div className="flex items-center flex-1">
<i className="bi bi-cloud text-secondary text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-blue-500 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">71°</span>
<span className="text-sm text-secondary">60°</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Thu, May 19</div>
<div className="flex items-center flex-1">
<i className="bi bi-cloud-drizzle text-secondary text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">68°</span>
<span className="text-sm text-secondary">59°</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Fri, May 20</div>
<div className="flex items-center flex-1">
<i className="bi bi-cloud-rain text-secondary text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">65°</span>
<span className="text-sm text-secondary">57°</span>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-24 text-sm text-secondary">Sat, May 21</div>
<div className="flex items-center flex-1">
<i className="bi bi-cloud-sun text-secondary text-xl mr-3"></i>
<div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-amber-300 rounded-full"></div>
</div>
<div className="w-24 text-right">
<span className="text-sm font-medium text-blue-800 mr-2">69°</span>
<span className="text-sm text-secondary">58°</span>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3">Additional Information</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Sunrise</div>
<div className="flex items-center">
<i className="bi bi-sunrise text-amber-400 text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">6:15 AM</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Sunset</div>
<div className="flex items-center">
<i className="bi bi-sunset text-amber-400 text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">8:23 PM</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Precipitation</div>
<div className="flex items-center">
<i className="bi bi-droplet text-blue-500 text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">15%</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-secondary/20">
<div className="text-xs text-secondary mb-1">Pressure</div>
<div className="flex items-center">
<i className="bi bi-speedometer2 text-secondary text-xl mr-2"></i>
<span className="text-base font-medium text-blue-800">1014 hPa</span>
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
