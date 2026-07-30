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
      
<div className="phone-frame w-[320px] h-[650px] bg-gradient-to-b from-indigo-50 to-white">
<div className="dynamic-island"></div>

<div className="pt-14 px-5 flex justify-between items-center text-xs text-gray-800">
<span>9:41</span>
<div className="flex space-x-1">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 7h8m-8 5h8m-8 5h8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18M3 12h18" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="px-6 pt-8">

<div className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-semibold text-gray-900">Serene</h1>
<p className="text-sm text-gray-500">Tuesday, October 10</p>
</div>
<div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
<span className="text-indigo-600 font-medium">YN</span>
</div>
</div>

<div className="bg-white rounded-2xl p-5 shadow-sm mb-6">
<div className="flex justify-between items-start mb-3">
<h2 className="text-lg font-medium text-gray-900">Daily Reflection</h2>
<svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<p className="text-gray-600 text-sm italic">"The present moment is filled with joy and happiness. If you are attentive, you will see it."</p>
<p className="text-gray-500 text-xs mt-2">— Thích Nhất Hạnh</p>
</div>

<div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-5 text-white mb-6">
<div className="flex justify-between items-start mb-4">
<h2 className="text-lg font-medium">Current Focus</h2>
<div className="bg-white bg-opacity-20 rounded-full px-2 py-1">
<span className="text-xs">20:00</span>
</div>
</div>
<p className="text-sm text-white text-opacity-90 mb-4">Morning Clarity</p>

<div className="flex justify-center items-center my-3">
<div className="relative h-44 w-44 flex items-center justify-center">
<svg className="progress-ring absolute" height="160" width="160">
<circle className="text-white text-opacity-20" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="8"></circle>
<circle className="progress-ring-circle" cx="80" cy="80" fill="transparent" r="70" stroke="white" strokeWidth="8"></circle>
</svg>
<div className="text-center">
<span className="text-4xl font-light">12:36</span>
<p className="text-xs text-white text-opacity-80 mt-1">remaining</p>
</div>
</div>
</div>

<div className="flex justify-center space-x-6 mt-2">
<button className="h-12 w-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="h-14 w-14 rounded-full bg-white flex items-center justify-center">
<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="h-12 w-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<h2 className="text-lg font-medium text-gray-900 mb-3">Today's Sessions</h2>
<div className="space-y-3">
<div className="bg-white rounded-xl p-4 flex items-center shadow-sm">
<div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Evening Wind Down</h3>
<p className="text-xs text-gray-500">10:00 PM • 15 minutes</p>
</div>
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="bg-white rounded-xl p-4 flex items-center shadow-sm">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-gray-900">Deep Sleep Prep</h3>
<p className="text-xs text-gray-500">11:30 PM • 20 minutes</p>
</div>
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
<svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-between">
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1 text-indigo-600 font-medium">Home</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1 text-gray-500">Sounds</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1 text-gray-500">Journal</span>
</button>
<button className="flex flex-col items-center">
<svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1 text-gray-500">Profile</span>
</button>
</div>
</div>

    </>
  );
}
