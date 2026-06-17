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
      
<div className="relative w-[390px] h-[852px] bg-black rounded-[45px] border border-gray-800 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-black rounded-b-2xl z-10"></div>
<div className="bg-gradient-to-b from-[#101010] to-[#181818] h-full p-5 pt-12 overflow-y-auto">

<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-white text-2xl font-medium">Watch Faces</h1>
<p className="text-gray-400 text-sm">Customize your style</p>
</div>
<button className="bg-[#1c1c1c] p-2 rounded-full">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="w-full bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg border border-[#252525] mb-6">
<div className="p-5">
<div className="flex flex-col items-center">
<div className="relative w-56 h-56 rounded-full bg-black border-4 border-[#252525] mb-4 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-black">

<div className="absolute inset-4 rounded-full border-8 border-red-500 opacity-60"></div>
<div className="absolute inset-10 rounded-full border-8 border-green-500 opacity-60"></div>
<div className="absolute inset-16 rounded-full border-8 border-blue-500 opacity-60"></div>

<div className="absolute inset-0 flex items-center justify-center">
<p className="text-white text-3xl font-light">10:25</p>
</div>

<div className="absolute bottom-10 w-full flex justify-center space-x-6">
<div className="text-xs text-gray-300">WED 17</div>
<div className="text-xs text-gray-300">72°</div>
</div>
</div>
</div>
<div className="text-center mb-2">
<h2 className="text-white text-lg font-medium">Activity</h2>
<p className="text-gray-400 text-xs mt-1">Track your daily movement</p>
</div>
<button className="bg-indigo-600 text-white text-sm py-2 px-6 rounded-full mt-2">
              Select
            </button>
</div>
</div>
</div>

<h3 className="text-gray-300 font-medium mb-3">All Faces</h3>
<div className="grid grid-cols-2 gap-4 mb-6">

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="relative w-full aspect-square rounded-full bg-black border border-[#252525] mb-3 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-black p-2">
<div className="h-full flex flex-col">
<div className="text-center mb-1">
<p className="text-xs text-gray-400">WED 17</p>
<p className="text-2xl text-white font-light">10:25</p>
</div>
<div className="grid grid-cols-2 gap-1 flex-1">
<div className="bg-[#1a1a1a] rounded-md p-1 text-center">
<p className="text-[8px] text-gray-400">CALENDAR</p>
<p className="text-xs text-white">Meeting 2PM</p>
</div>
<div className="bg-[#1a1a1a] rounded-md p-1 text-center">
<p className="text-[8px] text-gray-400">WEATHER</p>
<p className="text-xs text-white">72° Sunny</p>
</div>
<div className="bg-[#1a1a1a] rounded-md p-1 text-center">
<p className="text-[8px] text-gray-400">ACTIVITY</p>
<p className="text-xs text-white">320 cal</p>
</div>
<div className="bg-[#1a1a1a] rounded-md p-1 text-center">
<p className="text-[8px] text-gray-400">HEART</p>
<p className="text-xs text-white">72 BPM</p>
</div>
</div>
</div>
</div>
</div>
<p className="text-xs text-gray-300 text-center">Modular</p>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="relative w-full aspect-square rounded-full bg-white mb-3 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-white">

<div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-black font-serif text-sm">XI</div>
<div className="absolute top-1/2 right-4 transform translate-y-[-50%] text-black font-serif text-sm">III</div>
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black font-serif text-sm">V</div>
<div className="absolute top-1/2 left-4 transform translate-y-[-50%] text-black font-serif text-sm">IX</div>

<div className="absolute top-1/2 left-1/2 w-1 h-10 bg-black transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[215deg]"></div>

<div className="absolute top-1/2 left-1/2 w-0.5 h-14 bg-black transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[35deg]"></div>

<div className="absolute top-1/2 left-1/2 w-0.5 h-14 bg-red-500 transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[180deg]"></div>

<div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
<p className="text-xs text-gray-300 text-center">California</p>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="relative w-full aspect-square rounded-full bg-black mb-3 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-black">

<div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-1.5 bg-white"></div>
<div className="absolute top-1/2 right-2 transform translate-y-[-50%] w-1.5 h-0.5 bg-white"></div>
<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-1.5 bg-white"></div>
<div className="absolute top-1/2 left-2 transform translate-y-[-50%] w-1.5 h-0.5 bg-white"></div>

<div className="absolute top-1/2 left-1/2 w-1 h-8 bg-white transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[215deg]"></div>

<div className="absolute top-1/2 left-1/2 w-0.5 h-12 bg-white transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[35deg]"></div>

<div className="absolute top-1/2 left-1/2 w-16 h-16 transform -translate-x-1/2 -translate-y-1/2">
<div className="absolute inset-0 flex items-center justify-center">
<p className="text-white text-xs">WED</p>
</div>
</div>

<div className="absolute top-4 left-4 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
<div className="text-[6px] text-white">72°</div>
</div>
<div className="absolute top-4 right-4 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
<div className="text-[6px] text-white">72</div>
</div>
<div className="absolute bottom-4 left-4 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
<div className="text-[6px] text-white">320</div>
</div>
<div className="absolute bottom-4 right-4 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center">
<div className="text-[6px] text-white">17</div>
</div>
</div>
</div>
<p className="text-xs text-gray-300 text-center">Infograph</p>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="relative w-full aspect-square rounded-full overflow-hidden mb-3">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500 via-blue-600 to-indigo-900">

<div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-300 rounded-full opacity-40 transform -translate-x-1/2 -translate-y-full"></div>

<div className="absolute bottom-6 w-full text-center">
<p className="text-white text-lg font-light">10:25</p>
<p className="text-white text-xs opacity-80">Sunrise 6:42 AM</p>
</div>
</div>
</div>
<p className="text-xs text-gray-300 text-center">Solar</p>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="relative w-full aspect-square rounded-full bg-black mb-3 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-black">

<div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-white"></div>
<div className="absolute top-1/2 right-3 transform translate-y-[-50%] w-1 h-0.5 bg-white"></div>
<div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-white"></div>
<div className="absolute top-1/2 left-3 transform translate-y-[-50%] w-1 h-0.5 bg-white"></div>

<div className="absolute inset-0 flex items-center justify-center">
<p className="text-white text-2xl font-light">10:25</p>
</div>

<div className="absolute bottom-10 w-full text-center">
<p className="text-gray-400 text-xs">WED JAN 17</p>
</div>
</div>
</div>
<p className="text-xs text-gray-300 text-center">Simple</p>
</div>

<div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#252525]">
<div className="relative w-full aspect-square rounded-full mb-3 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-indigo-600">

<div className="absolute inset-0 flex items-center justify-center">
<p className="text-white text-2xl font-light">10:25</p>
</div>

<div className="absolute bottom-8 w-full flex justify-center space-x-4">
<div className="text-xs text-white opacity-80">WED</div>
<div className="text-xs text-white opacity-80">17</div>
</div>
</div>
</div>
<p className="text-xs text-gray-300 text-center">Gradient</p>
</div>
</div>
</div>
<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[40%] h-1 bg-gray-700 rounded-full"></div>
</div>

    </>
  );
}
