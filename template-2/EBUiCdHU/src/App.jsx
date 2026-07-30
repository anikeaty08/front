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
      

<div className="flex justify-between items-center mb-6 text-sm">
<span className="font-semibold">9:41</span>
<div className="flex space-x-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h8m-8 5h8m-8 5h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex justify-between items-center mb-6">
<button className="rounded-full p-2 bg-white shadow-md">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="text-center">
<h1 className="text-2xl font-bold">Emotional State</h1>
<p className="text-gray-500 text-sm">Track and manage your emotions</p>
</div>
<button className="rounded-full p-2 bg-white shadow-md">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="space-y-4">

<div className="bg-white rounded-2xl p-4 card-glow">
<div className="flex justify-between">
<div>
<div className="flex items-center space-x-2 mb-1">
<svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" fillRule="evenodd"></path>
</svg>
<h2 className="font-bold text-lg">Anxiety</h2>
</div>
<p className="text-gray-400 text-xs mb-2">May 2025</p>
<div className="flex items-center space-x-2">
<span className="text-3xl font-bold">70%</span>
<span className="bg-white rounded-lg p-1 shadow-sm">
<svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path>
</svg>
</span>
</div>
<p className="text-gray-400 text-xs">Change increase</p>
</div>
<div className="w-28 h-16 flex items-end">
<div className="h-[20%] w-3 bg-blue-300 rounded-t-sm mx-0.5"></div>
<div className="h-[35%] w-3 bg-blue-300 rounded-t-sm mx-0.5"></div>
<div className="h-[50%] w-3 bg-blue-300 rounded-t-sm mx-0.5"></div>
<div className="h-[40%] w-3 bg-blue-300 rounded-t-sm mx-0.5"></div>
<div className="h-[70%] w-3 bg-blue-300 rounded-t-sm mx-0.5"></div>
<div className="h-[60%] w-3 bg-blue-300 rounded-t-sm mx-0.5"></div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 card-glow">
<div className="flex items-center space-x-2 mb-3">
<svg className="h-5 w-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
</svg>
<h2 className="font-bold text-lg">Emotional Balance</h2>
</div>

<div className="relative h-32 mb-4 overflow-hidden rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50">
<div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
<svg className="h-16 w-16 text-indigo-300 animation-pulse" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="currentColor" fillOpacity="0.4" r="40"></circle>
<circle cx="50" cy="50" fill="currentColor" fillOpacity="0.6" r="30"></circle>
<circle cx="50" cy="50" fill="currentColor" fillOpacity="0.8" r="20"></circle>
</svg>
</div>
<div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2">
<svg className="h-16 w-16 text-blue-300 animation-float" viewBox="0 0 100 100">
<rect fill="currentColor" fillOpacity="0.6" height="50" rx="10" width="50" x="25" y="25"></rect>
<rect fill="currentColor" fillOpacity="0.8" height="30" rx="5" width="30" x="35" y="35"></rect>
</svg>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<svg className="h-20 w-20 text-purple-300 animation-pulse" viewBox="0 0 100 100">
<polygon fill="currentColor" fillOpacity="0.5" points="50,15 85,85 15,85"></polygon>
<polygon fill="currentColor" fillOpacity="0.7" points="50,30 75,70 25,70"></polygon>
</svg>
</div>
</div>

<div className="mb-5">
<div className="flex justify-between mb-2">
<span className="text-sm text-gray-500">Calm</span>
<span className="text-sm text-gray-500">Energetic</span>
</div>
<div className="relative">
<div className="slider-track w-full absolute"></div>
<div className="slider-track w-3/5 absolute bg-indigo-400"></div>
<div className="slider-thumb absolute left-[60%] bg-indigo-500 border-2 border-white"></div>
<input className="w-full h-4 opacity-0 cursor-pointer relative z-10" max="100" min="0" type="range" value="60" />
</div>
<div className="flex justify-between mt-1">
<span className="text-xs text-gray-400">0</span>
<span className="text-xs text-gray-400">25</span>
<span className="text-xs text-gray-400">50</span>
<span className="text-xs text-gray-400">75</span>
<span className="text-xs text-gray-400">100</span>
</div>
</div>

<button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition duration-200 flex items-center justify-center">
<span>Continue to Analysis</span>
<svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>

<div className="bg-white rounded-2xl p-4 card-glow">
<div className="flex justify-between">
<div>
<div className="flex items-center space-x-2 mb-1">
<svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" fillRule="evenodd"></path>
</svg>
<h2 className="font-bold text-lg">Panic attack</h2>
</div>
<p className="text-gray-400 text-xs mb-2">May 2025</p>
<div className="flex items-center space-x-2">
<span className="text-3xl font-bold">40%</span>
<span className="bg-white rounded-lg p-1 shadow-sm">
<svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" fillRule="evenodd"></path>
</svg>
</span>
</div>
<p className="text-gray-400 text-xs">Change increase</p>
</div>
<div className="w-28 h-16 flex items-end">
<div className="h-[15%] w-3 bg-red-300 rounded-t-sm mx-0.5"></div>
<div className="h-[25%] w-3 bg-red-300 rounded-t-sm mx-0.5"></div>
<div className="h-[40%] w-3 bg-red-300 rounded-t-sm mx-0.5"></div>
<div className="h-[30%] w-3 bg-red-300 rounded-t-sm mx-0.5"></div>
<div className="h-[20%] w-3 bg-red-300 rounded-t-sm mx-0.5"></div>
<div className="h-[35%] w-3 bg-red-300 rounded-t-sm mx-0.5"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
