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
                        neugray: '#e6e7ee',
                        primary: '#5A67D8',
                        primaryhover: '#4c58bf',
                        textprimary: '#4A5568',
                        textsecondary: '#718096',
                        success: '#48BB78',
                        warning: '#ED8936',
                        danger: '#F56565'
                    },
                    boxShadow: {
                        'clay': '8px 8px 16px rgba(174, 174, 192, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                        'pressed': 'inset 5px 5px 10px rgba(174, 174, 192, 0.5), inset -5px -5px 10px rgba(255, 255, 255, 0.9)',
                        'hover': 'inset 3px 3px 6px rgba(174, 174, 192, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.8)'
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
      
<div className="device-frame bg-neugray shadow-2xl border-8 border-gray-700">

<div className="h-full flex flex-col">
<div className="flex-1 p-4 overflow-auto">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-bold">HomeHub</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="w-8 h-8 rounded-full bg-neugray shadow-clay overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/42.jpg" />
</div>
</div>
</header>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<div className="flex justify-between items-center mb-4">
<div>
<h2 className="text-lg font-bold">Good morning, Alex</h2>
<p className="text-textsecondary text-sm">Welcome back home</p>
</div>
<div className="temp-gradient text-2xl font-bold">22°</div>
</div>
<div className="flex gap-3 mb-2">
<div className="flex-1 p-3 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center justify-between">
<span className="text-xs text-textsecondary">Security</span>
<span className="text-xs font-semibold text-success">Active</span>
</div>
<div className="mt-2 flex items-center gap-2">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-bold">All Clear</span>
</div>
</div>
<div className="flex-1 p-3 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center justify-between">
<span className="text-xs text-textsecondary">Energy</span>
<span className="text-xs font-semibold text-success">-12%</span>
</div>
<div className="mt-2 flex items-center gap-2">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-bold">2.4 kWh</span>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="font-bold mb-4">Quick Access</h3>
<div className="grid grid-cols-4 gap-3">
<div className="flex flex-col items-center">
<button className="w-14 h-14 mb-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all flex items-center justify-center">
<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<span className="text-xs text-textsecondary">Lights</span>
</div>
<div className="flex flex-col items-center">
<button className="w-14 h-14 mb-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all flex items-center justify-center">
<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<span className="text-xs text-textsecondary">AC</span>
</div>
<div className="flex flex-col items-center">
<button className="w-14 h-14 mb-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all flex items-center justify-center">
<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<span className="text-xs text-textsecondary">Security</span>
</div>
<div className="flex flex-col items-center">
<button className="w-14 h-14 mb-2 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all flex items-center justify-center">
<svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<span className="text-xs text-textsecondary">More</span>
</div>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Active Devices</h3>
<button className="text-primary text-sm">See All</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-neugray shadow-hover">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Living Room Lights</h4>
<p className="text-xs text-textsecondary">On • 80% Brightness</p>
</div>
</div>
<div className="w-14 h-7 rounded-full bg-success flex items-center justify-end px-1">
<div className="w-5 h-5 rounded-full bg-white shadow"></div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-neugray shadow-hover">
<div className="flex items-center">
<div className="w-10 h-10 rounded-lg bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Living Room AC</h4>
<p className="text-xs text-textsecondary">On • 22°C</p>
</div>
</div>
<div className="w-14 h-7 rounded-full bg-success flex items-center justify-end px-1">
<div className="w-5 h-5 rounded-full bg-white shadow"></div>
</div>
</div>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-bold">Rooms</h3>
<button className="text-primary text-sm">Edit</button>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-semibold">Living Room</h4>
<p className="text-xs text-textsecondary">3 devices</p>
</div>
<div className="w-8 h-8 rounded-full bg-primary shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-textsecondary">21°</span>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-success"></span>
<span className="text-xs text-textsecondary">Lights on</span>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-semibold">Kitchen</h4>
<p className="text-xs text-textsecondary">5 devices</p>
</div>
<div className="w-8 h-8 rounded-full bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-textsecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-textsecondary">23°</span>
<div className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-danger"></span>
<span className="text-xs text-textsecondary">Lights off</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-20 px-2 pt-2 pb-6 bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] relative">
<div className="flex justify-around items-center h-full">
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-primary shadow-pressed flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-primary mt-1">Home</span>
<div className="tab-indicator"></div>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Devices</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Automation</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Settings</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
