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
<h1 className="text-xl font-medium text-blue-800 flex-1 text-center">Barometric Pressure</h1>
<button className="text-secondary hover:text-blue-800">
<i className="bi bi-three-dots-vertical text-xl"></i>
</button>
</div>
<div className="flex-1 px-4 pb-4 overflow-y-auto">

<div className="bg-white p-5 rounded-2xl mb-4 shadow-sm border border-secondary/20">
<div className="flex justify-between items-start mb-2">
<div>
<h2 className="text-xl font-medium text-blue-800">San Francisco</h2>
<div className="text-xs text-secondary mt-1">Today, May 15</div>
</div>
<div className="flex items-center">
<i className="bi bi-speedometer2 text-secondary mr-1"></i>
<span className="text-blue-800 font-medium">1014 hPa</span>
</div>
</div>
<div className="mt-6">
<div className="flex items-center justify-center">
<div className="relative w-48 h-48">

<svg className="w-full h-full" viewBox="0 0 100 100">
<path d="M10,50 A40,40 0 1,1 90,50" fill="none" stroke="#e0eefe" strokeLinecap="round" strokeWidth="8"></path>
<path d="M10,50 A40,40 0 0,1 65,15" fill="none" stroke="#1a91eb" strokeLinecap="round" strokeWidth="8"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="text-3xl font-light text-blue-800">1014</div>
<div className="text-sm text-secondary">hPa</div>
<div className="text-xs text-secondary mt-2">Normal</div>
</div>
</div>
</div>
<div className="flex justify-between text-xs text-secondary mt-3">
<span>980 hPa</span>
<span>1013 hPa</span>
<span>1040 hPa</span>
</div>
<div className="flex justify-between text-xs text-secondary mt-1">
<span>Low</span>
<span>Normal</span>
<span>High</span>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">Hourly Pressure</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 p-4">
<div className="h-40 relative mb-2">

<div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/20"></div>
<div className="absolute left-0 bottom-1/4 right-0 h-px bg-secondary/10"></div>
<div className="absolute left-0 bottom-2/4 right-0 h-px bg-secondary/10"></div>
<div className="absolute left-0 bottom-3/4 right-0 h-px bg-secondary/10"></div>

<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewBox="0 0 100 40">
<path d="M0,25 C10,24 20,20 30,22 C40,24 50,26 60,25 C70,24 80,20 90,18 C95,17 100,15 100,15" fill="none" stroke="#1a91eb" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-[62.5%] left-[0%] h-3 w-3 rounded-full bg-white border-2 border-blue-500"></div>
<div className="absolute bottom-[55%] left-[30%] h-3 w-3 rounded-full bg-white border-2 border-blue-500"></div>
<div className="absolute bottom-[62.5%] left-[60%] h-3 w-3 rounded-full bg-white border-2 border-blue-500"></div>
<div className="absolute bottom-[45%] left-[90%] h-3 w-3 rounded-full bg-blue-500"></div>
</div>
<div className="flex justify-between text-xs text-secondary">
<div className="text-center">
<div>Now</div>
<div className="font-medium text-blue-800 mt-1">1014</div>
</div>
<div className="text-center">
<div>3 PM</div>
<div className="font-medium text-blue-800 mt-1">1012</div>
</div>
<div className="text-center">
<div>6 PM</div>
<div className="font-medium text-blue-800 mt-1">1014</div>
</div>
<div className="text-center">
<div>9 PM</div>
<div className="font-medium text-blue-800 mt-1">1017</div>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h2 className="text-lg font-medium text-blue-800 mb-3">7-Day Pressure</h2>
<div className="bg-white rounded-2xl shadow-sm border border-secondary/20 divide-y divide-secondary/20">
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Today</div>
<div className="flex-1 h-8 bg-blue-50 rounded-lg relative">
<div className="absolute inset-y-0 left-[34%] w-1 bg-blue-500"></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs text-secondary">980</span>
<span className="text-xs font-medium text-blue-800">1014</span>
<span className="text-xs text-secondary">1040</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Mon, May 16</div>
<div className="flex-1 h-8 bg-blue-50 rounded-lg relative">
<div className="absolute inset-y-0 left-[40%] w-1 bg-blue-500"></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs text-secondary">980</span>
<span className="text-xs font-medium text-blue-800">1018</span>
<span className="text-xs text-secondary">1040</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Tue, May 17</div>
<div className="flex-1 h-8 bg-blue-50 rounded-lg relative">
<div className="absolute inset-y-0 left-[43%] w-1 bg-blue-500"></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs text-secondary">980</span>
<span className="text-xs font-medium text-blue-800">1020</span>
<span className="text-xs text-secondary">1040</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Wed, May 18</div>
<div className="flex-1 h-8 bg-blue-50 rounded-lg relative">
<div className="absolute inset-y-0 left-[38%] w-1 bg-blue-500"></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs text-secondary">980</span>
<span className="text-xs font-medium text-blue-800">1017</span>
<span className="text-xs text-secondary">1040</span>
</div>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="w-20 text-sm text-secondary">Thu, May 19</div>
<div className="flex-1 h-8 bg-blue-50 rounded-lg relative">
<div className="absolute inset-y-0 left-[30%] w-1 bg-blue-500"></div>
<div className="absolute inset-y-0 w-full flex items-center justify-between px-2">
<span className="text-xs text-secondary">980</span>
<span className="text-xs font-medium text-blue-800">1011</span>
<span className="text-xs text-secondary">1040</span>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-blue-800 mb-3">About Pressure</h2>
<div className="bg-white rounded-xl shadow-sm border border-secondary/20 p-4">
<p className="text-sm text-secondary leading-relaxed">
              Barometric pressure, also known as atmospheric pressure, is the pressure exerted by the weight of air in the atmosphere. Changes in pressure often indicate changing weather conditions. A falling pressure generally means deteriorating weather, while rising pressure indicates improving weather.
            </p>
<div className="mt-3 flex gap-2">
<div className="flex-1 text-center p-2 bg-blue-50 rounded-lg">
<div className="text-xs text-secondary mb-1">Rising</div>
<i className="bi bi-arrow-up text-blue-600"></i>
<div className="text-xs text-secondary mt-1">Fair Weather</div>
</div>
<div className="flex-1 text-center p-2 bg-blue-50 rounded-lg">
<div className="text-xs text-secondary mb-1">Steady</div>
<i className="bi bi-arrow-right text-blue-600"></i>
<div className="text-xs text-secondary mt-1">No Change</div>
</div>
<div className="flex-1 text-center p-2 bg-blue-50 rounded-lg">
<div className="text-xs text-secondary mb-1">Falling</div>
<i className="bi bi-arrow-down text-blue-600"></i>
<div className="text-xs text-secondary mt-1">Storms</div>
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
