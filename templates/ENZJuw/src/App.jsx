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

<div className="pt-14 px-6 pb-4 flex justify-between items-center">
<h1 className="text-xl font-medium text-taupe-800">Clock</h1>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
<i className="bi bi-gear text-taupe-700"></i>
</button>
</div>

<div className="px-6 pb-4">
<div className="flex bg-taupe-100 p-1 rounded-xl">
<button className="flex-1 py-2.5 px-4 rounded-lg bg-white text-taupe-800 font-medium shadow-sm">
            World Clock
          </button>
<button className="flex-1 py-2.5 px-4 text-taupe-600">
            Alarm
          </button>
<button className="flex-1 py-2.5 px-4 text-taupe-600">
            Timer
          </button>
</div>
</div>

<div className="px-6 pb-6">
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h2 className="text-sm font-medium text-taupe-500">LOCAL TIME</h2>
<p className="text-taupe-800 text-3xl font-medium mt-1">10:42</p>
<p className="text-taupe-500 text-sm">Monday, October 16</p>
</div>
<div className="bg-taupe-50 rounded-full p-2">
<i className="bi bi-moon-stars text-taupe-400 text-xl"></i>
</div>
</div>
<div className="flex">
<div className="flex items-center text-taupe-500 text-sm">
<i className="bi bi-geo-alt mr-1"></i>
<span>San Francisco, USA</span>
</div>
</div>
</div>
</div>

<div className="px-6 pb-4 flex-1 overflow-y-auto">
<div className="flex justify-between items-center mb-2">
<h2 className="text-sm font-medium text-taupe-500">WORLD CLOCKS</h2>
<button className="text-taupe-700">
<i className="bi bi-plus-circle"></i>
</button>
</div>
<div className="space-y-4">

<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 p-4">
<div className="flex justify-between items-center">
<div>
<p className="text-taupe-800 text-xl font-medium">18:42</p>
<div className="flex items-center text-taupe-500 text-sm mt-1">
<span>London, UK</span>
<div className="w-1 h-1 rounded-full bg-taupe-300 mx-2"></div>
<span>+8h</span>
</div>
</div>
<div className="bg-taupe-50 rounded-full p-2">
<i className="bi bi-moon-stars text-taupe-400"></i>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 p-4">
<div className="flex justify-between items-center">
<div>
<p className="text-taupe-800 text-xl font-medium">02:42</p>
<div className="flex items-center text-taupe-500 text-sm mt-1">
<span>Tokyo, Japan</span>
<div className="w-1 h-1 rounded-full bg-taupe-300 mx-2"></div>
<span>+16h</span>
</div>
</div>
<div className="bg-taupe-50 rounded-full p-2">
<i className="bi bi-sun text-taupe-400"></i>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 p-4">
<div className="flex justify-between items-center">
<div>
<p className="text-taupe-800 text-xl font-medium">13:42</p>
<div className="flex items-center text-taupe-500 text-sm mt-1">
<span>New York, USA</span>
<div className="w-1 h-1 rounded-full bg-taupe-300 mx-2"></div>
<span>+3h</span>
</div>
</div>
<div className="bg-taupe-50 rounded-full p-2">
<i className="bi bi-sun text-taupe-400"></i>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 p-4">
<div className="flex justify-between items-center">
<div>
<p className="text-taupe-800 text-xl font-medium">04:42</p>
<div className="flex items-center text-taupe-500 text-sm mt-1">
<span>Sydney, Australia</span>
<div className="w-1 h-1 rounded-full bg-taupe-300 mx-2"></div>
<span>+18h</span>
</div>
</div>
<div className="bg-taupe-50 rounded-full p-2">
<i className="bi bi-sun text-taupe-400"></i>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-taupe-200">
<div className="flex justify-around">
<button className="flex flex-col items-center">
<i className="bi bi-clock text-taupe-700 text-xl"></i>
<span className="text-xs text-taupe-700 mt-1">Clock</span>
</button>
<button className="flex flex-col items-center">
<i className="bi bi-alarm text-taupe-400 text-xl"></i>
<span className="text-xs text-taupe-400 mt-1">Alarm</span>
</button>
<button className="flex flex-col items-center">
<i className="bi bi-stopwatch text-taupe-400 text-xl"></i>
<span className="text-xs text-taupe-400 mt-1">Timer</span>
</button>
<button className="flex flex-col items-center">
<i className="bi bi-hourglass-split text-taupe-400 text-xl"></i>
<span className="text-xs text-taupe-400 mt-1">Stopwatch</span>
</button>
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
