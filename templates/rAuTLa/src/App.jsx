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
      
<div className="w-[350px] h-[650px] rounded-[2rem] overflow-hidden shadow-xl">
<div className="w-full h-full bg-gray-900 flex flex-col">

<div className="p-4 border-b border-gray-800 flex justify-between items-center">
<h1 className="text-xl font-bold text-white">Profile</h1>
<button className="p-2 text-gray-400 hover:text-white">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex-1 p-3 overflow-y-auto">

<div className="flex flex-col items-center mb-6 pt-2">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 border-2 border-blue-400">
<span className="text-white text-2xl font-bold">JD</span>
</div>
<h2 className="text-white text-lg font-bold">John Doe</h2>
<p className="text-gray-400 text-sm">john.doe@example.com</p>
<div className="mt-2 bg-gray-800/60 px-3 py-1 rounded-full text-xs text-blue-400 border border-gray-700">
            Premium Member
          </div>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">
<div className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex flex-col items-center">
<div className="text-blue-400 font-bold text-xl">12</div>
<div className="text-gray-400 text-xs">Trips</div>
</div>
<div className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex flex-col items-center">
<div className="text-blue-400 font-bold text-xl">4</div>
<div className="text-gray-400 text-xs">Countries</div>
</div>
<div className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex flex-col items-center">
<div className="text-blue-400 font-bold text-xl">2,450</div>
<div className="text-gray-400 text-xs">Points</div>
</div>
</div>

<div className="bg-gray-800 rounded-lg border border-gray-700 divide-y divide-gray-700 mb-4">
<div className="p-3 flex items-center">
<div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-white">Personal Information</div>
<svg className="h-4 w-4 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-3 flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-white">Payment Methods</div>
<svg className="h-4 w-4 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-3 flex items-center">
<div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-white">Security</div>
<svg className="h-4 w-4 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="p-3 flex items-center">
<div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-white">Help Center</div>
<svg className="h-4 w-4 text-gray-500 ml-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<h2 className="text-white font-medium mb-2">Preferences</h2>
<div className="bg-gray-800 rounded-lg border border-gray-700 divide-y divide-gray-700 mb-4">
<div className="p-3 flex items-center justify-between">
<div className="text-white">Dark Mode</div>
<div className="relative">
<div className="w-10 h-5 bg-blue-600 rounded-full"></div>
<div className="absolute right-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-white">Notifications</div>
<div className="relative">
<div className="w-10 h-5 bg-blue-600 rounded-full"></div>
<div className="absolute right-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-white">Location Services</div>
<div className="relative">
<div className="w-10 h-5 bg-gray-700 rounded-full"></div>
<div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full"></div>
</div>
</div>
</div>
<button className="w-full py-2.5 bg-gray-800 text-red-400 rounded-lg border border-gray-700 mb-2">
          Log Out
        </button>
</div>

<div className="p-2 border-t border-gray-800 bg-gray-900">
<div className="flex justify-around">
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="p-2 text-gray-500 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Explore</span>
</button>
<button className="p-2 text-blue-400 flex flex-col items-center">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Profile</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
