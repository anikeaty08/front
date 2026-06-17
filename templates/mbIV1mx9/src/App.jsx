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
      
<div className="iphone-frame">
<div className="iphone-screen">
<div className="notch"></div>
<div className="screen-content bg-gray-50">

<div className="pt-8 px-5 flex justify-between text-xs font-semibold">
<span>9:41</span>
<div className="flex space-x-1">
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L6 22"></path><path d="M10 6L10 22"></path><path d="M14 12L14 22"></path><path d="M18 16L18 22"></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M18 10L21 10"></path><path d="M18 14L21 14"></path><path d="M18 18L21 18"></path><path d="M18 6L21 6"></path><path d="M3 18L7 18 10 6 17 6"></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H3.77778C2.79594 7 2 7.74619 2 8.66667V15.3333C2 16.2538 2.79594 17 3.77778 17H7"></path>
<path d="M17 7H20.2222C21.2041 7 22 7.74619 22 8.66667V15.3333C22 16.2538 21.2041 17 20.2222 17H17"></path>
<path d="M7 7L7 17"></path>
<path d="M17 7L17 17"></path>
<path d="M7 12L17 12"></path>
</svg>
</span>
</div>
</div>

<header className="px-6 pt-3 pb-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold text-gray-900">Security</h1>
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

<main className="px-6">

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div>
<h2 className="text-lg font-semibold text-gray-900">System Status</h2>
<div className="flex items-center mt-1">
<div className="status-indicator status-active"></div>
<p className="text-sm text-green-600 font-medium">Armed • Home</p>
</div>
</div>
</div>
<button className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-xl transition duration-200">
                Disarm
              </button>
</div>
<div className="flex space-x-3 mb-4">
<button className="flex-1 py-3 bg-blue-500 text-white rounded-xl text-sm font-medium">Home</button>
<button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">Away</button>
<button className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">Night</button>
</div>
<div className="text-xs text-gray-500">
              Last updated: Today, 09:41 AM
            </div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h2 className="text-lg font-semibold text-gray-800">Camera Feeds</h2>
<button className="text-sm font-medium text-blue-600">View All</button>
</div>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
<div className="relative">
<img alt="Front Door Camera" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<div>
<h3 className="text-white font-medium">Front Door</h3>
<p className="text-white/80 text-xs">Live</p>
</div>
</div>
<div className="absolute top-3 right-3 bg-black/50 text-white text-xs py-1 px-2 rounded-full">
                  HD
                </div>
</div>
<div className="p-4 flex justify-between">
<button className="p-2 bg-gray-100 rounded-full">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="23 7 16 12 23 17 23 7"></polygon>
<rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect>
</svg>
</button>
<button className="p-2 bg-gray-100 rounded-full">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
<circle cx="12" cy="13" r="4"></circle>
</svg>
</button>
<button className="p-2 bg-gray-100 rounded-full">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5h6a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5"></path>
<path d="M13 17l5-5-5-5"></path>
<path d="M18 12H3"></path>
</svg>
</button>
<button className="p-2 bg-gray-100 rounded-full">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="5" y2="19"></line>
<line x1="5" x2="19" y1="12" y2="12"></line>
</svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="Backyard Camera" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<div>
<h3 className="text-white text-sm font-medium">Backyard</h3>
<p className="text-white/80 text-xs">Live</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="relative">
<img alt="Bathroom Camera" className="w-full h-28 object-cover" src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<div>
<h3 className="text-white text-sm font-medium">Garage</h3>
<p className="text-white/80 text-xs">Live</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-semibold text-gray-800 mb-3">Security Devices</h2>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Front Door Lock</h4>
<p className="text-xs text-gray-500">Locked • Last used 2h ago</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Back Door Lock</h4>
<p className="text-xs text-gray-500">Locked • Last used 5h ago</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-red-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Motion Sensors</h4>
<p className="text-xs text-gray-500">Active • No motion detected</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-amber-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Alarm System</h4>
<p className="text-xs text-gray-500">Armed • Home mode</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-indigo-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Doorbell Camera</h4>
<p className="text-xs text-gray-500">Active • Last event 30m ago</p>
</div>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
<button className="text-sm font-medium text-blue-600">View All</button>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
<div className="flex items-start">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div>
<div className="flex justify-between">
<h4 className="font-medium text-gray-900">Front Door Unlocked</h4>
<span className="text-xs text-gray-500">2h ago</span>
</div>
<p className="text-xs text-gray-500">Unlocked by John Doe using PIN code</p>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
<svg className="text-green-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div>
<div className="flex justify-between">
<h4 className="font-medium text-gray-900">System Armed</h4>
<span className="text-xs text-gray-500">3h ago</span>
</div>
<p className="text-xs text-gray-500">System armed in Home mode by John Doe</p>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
<svg className="text-indigo-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5
" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</div>
<div>
<div className="flex justify-between">
<h4 className="font-medium text-gray-900">Doorbell Motion Detected</h4>
<span className="text-xs text-gray-500">30m ago</span>
</div>
<p className="text-xs text-gray-500">Package delivery detected at front door</p>
</div>
</div>
<div className="flex items-start">
<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
<svg className="text-red-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
</div>
<div>
<div className="flex justify-between">
<h4 className="font-medium text-gray-900">Motion Detected</h4>
<span className="text-xs text-gray-500">45m ago</span>
</div>
<p className="text-xs text-gray-500">Motion detected in the living room</p>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-semibold text-gray-800 mb-3">Emergency Contacts</h2>
<div className="bg-white rounded-2xl p-4 shadow-sm space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-red-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Emergency Services</h4>
<p className="text-xs text-gray-500">911</p>
</div>
</div>
<button className="p-2 bg-red-500 rounded-full">
<svg fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</button>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Security Company</h4>
<p className="text-xs text-gray-500">+1 (555) 123-4567</p>
</div>
</div>
<button className="p-2 bg-blue-500 rounded-full">
<svg fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</button>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Neighbor - Sarah</h4>
<p className="text-xs text-gray-500">+1 (555) 987-6543</p>
</div>
</div>
<button className="p-2 bg-green-500 rounded-full">
<svg fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-10">
<h2 className="text-lg font-semibold text-gray-800 mb-3">Emergency Actions</h2>
<div className="grid grid-cols-2 gap-3">
<button className="bg-red-500 text-white rounded-2xl p-4 shadow-sm flex flex-col items-center">
<svg className="mb-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
<path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
<line x1="6" x2="6" y1="1" y2="4"></line>
<line x1="10" x2="10" y1="1" y2="4"></line>
<line x1="14" x2="14" y1="1" y2="4"></line>
</svg>
<span className="font-medium">Panic Alarm</span>
</button>
<button className="bg-amber-500 text-white rounded-2xl p-4 shadow-sm flex flex-col items-center">
<svg className="mb-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className="font-medium">Call Help</span>
</button>
<button className="bg-green-500 text-white rounded-2xl p-4 shadow-sm flex flex-col items-center">
<svg className="mb-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="font-medium">Lock All</span>
</button>
<button className="bg-blue-500 text-white rounded-2xl p-4 shadow-sm flex flex-col items-center">
<svg className="mb-2" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="font-medium">Favorites</span>
</button>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 rounded-b-[40px]">
<div className="flex justify-between max-w-md mx-auto">
<button className="flex flex-col items-center text-gray-500">
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
<button className="flex flex-col items-center text-blue-600">
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
<div className="home-indicator"></div>
</div>
</div>

    </>
  );
}
