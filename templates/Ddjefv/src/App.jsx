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
<h1 className="text-2xl font-bold text-gray-900">Settings</h1>
</header>

<main className="px-6">

<div className="bg-white rounded-2xl p-5 mb-6 shadow-sm">
<div className="flex items-center">
<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mr-4">
                JD
              </div>
<div>
<h2 className="text-lg font-semibold text-gray-900">John Doe</h2>
<p className="text-sm text-gray-500">john.doe@example.com</p>
<button className="mt-1 text-sm text-blue-600 font-medium">Edit Profile</button>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-gray-500 uppercase mb-3 px-1">Home Settings</h2>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<span className="text-sm text-gray-800">Home Information</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-indigo-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Family Members</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-purple-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Access &amp; Security</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Locations &amp; Zones</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-gray-500 uppercase mb-3 px-1">System Settings</h2>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-amber-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
</div>
<span className="text-sm text-gray-800">General Settings</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-red-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
</div>
<span className="text-sm text-gray-800">Notifications</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-cyan-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Automations &amp; Schedules</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-teal-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<span className="text-sm text-gray-800">Device Management</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-orange-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Energy Management</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-gray-500 uppercase mb-3 px-1">Preferences</h2>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<span className="text-sm text-gray-800">Appearance</span>
</div>
<div className="flex items-center">
<span className="text-sm text-gray-500 mr-2">Light</span>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M11 5h4"></path>
<path d="M11 9h7"></path>
<path d="M11 13h10"></path>
<path d="M3 17h18"></path>
<path d="M3 21h18"></path>
<path d="M4 4h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Language</span>
</div>
<div className="flex items-center">
<span className="text-sm text-gray-500 mr-2">English</span>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="4" y1="21" y2="14"></line>
<line x1="4" x2="4" y1="10" y2="3"></line>
<line x1="12" x2="12" y1="21" y2="12"></line>
<line x1="12" x2="12" y1="8" y2="3"></line>
<line x1="20" x2="20" y1="21" y2="16"></line>
<line x1="20" x2="20" y1="12" y2="3"></line>
<line x1="1" x2="7" y1="14" y2="14"></line>
<line x1="9" x2="15" y1="8" y2="8"></line>
<line x1="17" x2="23" y1="16" y2="16"></line>
</svg>
</div>
<span className="text-sm text-gray-800">Temperature Unit</span>
</div>
<div className="flex items-center">
<span className="text-sm text-gray-500 mr-2">Celsius</span>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-pink-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Privacy Preferences</span>
</div>
<svg box="0 0 24 24" className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" view="" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-gray-500 uppercase mb-3 px-1">Quick Settings</h2>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Notifications</span>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<span className="text-sm text-gray-800">Energy Saving Mode</span>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-purple-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Automatic Updates</span>
</div>
<label className="toggle-switch">
<input checked="" type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-orange-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18a5 5 0 0 0-10 0"></path>
<line x1="12" x2="12" y1="2" y2="9"></line>
<line x1="4.22" x2="5.64" y1="10.22" y2="11.64"></line>
<line x1="1" x2="3" y1="18" y2="18"></line>
<line x1="21" x2="23" y1="18" y2="18"></line>
<line x1="18.36" x2="19.78" y1="11.64" y2="10.22"></line>
<line x1="23" x2="1" y1="22" y2="22"></line>
<polyline points="8 6 12 2 16 6"></polyline>
</svg>
</div>
<span className="text-sm text-gray-800">Sunset/Sunrise Automations</span>
</div>
<label className="toggle-switch">
<input type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-red-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Away Mode</span>
</div>
<label className="toggle-switch">
<input type="checkbox"/>
<span className="toggle-slider"></span>
</label>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-sm font-medium text-gray-500 uppercase mb-3 px-1">Account &amp; Support</h2>
<div className="bg-white rounded-2xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-sm text-gray-800">Account Settings</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
</div>
<span className="text-sm text-gray-800">Help &amp; Support</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4 border-b border-gray-100">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<span className="text-sm text-gray-800">Terms &amp; Privacy Policy</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<span className="text-sm text-gray-800">Log Out</span>
</div>
<svg className="text-gray-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 18 15 12 9 6"></polyline>
</svg>
</div>
</div>
</div>
</div>

<div className="mb-10">
<div className="text-center">
<p className="text-xs text-gray-500">Smart Home App v2.1.4</p>
<p className="text-xs text-gray-400 mt-1">© 2023 Smart Home Inc.</p>
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
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-xs mt-1">Security</span>
</button>
<button className="flex flex-col items-center text-blue-600">
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
