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
      
<div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">

<header className="px-6 pt-6 pb-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold text-gray-900">Home</h1>
<div className="flex space-x-2">
<button className="p-2 rounded-full bg-gray-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
</button>
<button className="p-2 rounded-full bg-gray-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
</button>
</div>
</div>
</header>

<main className="flex-1 px-6 pb-20">

<div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-5 text-white mb-6">
<div className="flex justify-between">
<div>
<h3 className="font-medium">Current Weather</h3>
<p className="text-sm opacity-80">San Francisco, CA</p>
<div className="mt-6 flex items-center">
<svg className="mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18a5 5 0 0 0-10 0"></path>
<line x1="12" x2="12" y1="9" y2="2"></line>
<line x1="4.22" x2="5.64" y1="10.22" y2="11.64"></line>
<line x1="1" x2="3" y1="18" y2="18"></line>
<line x1="21" x2="23" y1="18" y2="18"></line>
<line x1="18.36" x2="19.78" y1="11.64" y2="10.22"></line>
<line x1="23" x2="1" y1="22" y2="22"></line>
</svg>
<span>Sunny</span>
</div>
</div>
<div className="text-right">
<p className="text-4xl font-light">76°</p>
<p className="text-sm opacity-80">H:82° L:68°</p>
</div>
</div>
</div>

<h2 className="text-xl font-semibold mb-4">Rooms</h2>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&amp'}}></div>
<div className="p-3">
<h3 className="font-medium text-gray-900">Living Room</h3>
<p className="text-xs text-gray-500 mb-2">4 devices</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-700">ON</span>
<div className="w-11 h-6 bg-green-500 rounded-full px-1 flex items-center">
<div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&amp'}}></div>
<div className="p-3">
<h3 className="font-medium text-gray-900">Bedroom</h3>
<p className="text-xs text-gray-500 mb-2">2 devices</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-700">OFF</span>
<div className="w-11 h-6 bg-gray-300 rounded-full px-1 flex items-center">
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1556911220-bda9f7f6b548?ixlib=rb-1.2.1&amp'}}></div>
<div className="p-3">
<h3 className="font-medium text-gray-900">Kitchen</h3>
<p className="text-xs text-gray-500 mb-2">6 devices</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-700">ON</span>
<div className="w-11 h-6 bg-green-500 rounded-full px-1 flex items-center">
<div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
<div className="h-24 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&amp'}}></div>
<div className="p-3">
<h3 className="font-medium text-gray-900">Bathroom</h3>
<p className="text-xs text-gray-500 mb-2">1 device</p>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-gray-700">OFF</span>
<div className="w-11 h-6 bg-gray-300 rounded-full px-1 flex items-center">
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<h2 className="text-xl font-semibold mb-4">Smart Devices</h2>
<div className="space-y-4">
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Air Purifier</h3>
<p className="text-xs text-gray-500">Living Room</p>
</div>
</div>
<div className="w-11 h-6 bg-green-500 rounded-full px-1 flex items-center">
<div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="5"></circle>
<line x1="12" x2="12" y1="1" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="23"></line>
<line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
<line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
<line x1="1" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="23" y1="12" y2="12"></line>
<line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
<line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
</svg>
</div>
<div>
<h3 className="font-medium text-gray-900">Smart Lights</h3>
<p className="text-xs text-gray-500">Bedroom</p>
</div>
</div>
<div className="w-11 h-6 bg-gray-300 rounded-full px-1 flex items-center">
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
<div className="flex justify-between max-w-md mx-auto">
<button className="flex flex-col items-center text-blue-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<span className="text-xs mt-1">Devices</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-xs mt-1">Security</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
<span className="text-xs mt-1">Settings</span>
</button>
</div>
</nav>
</div>

    </>
  );
}
