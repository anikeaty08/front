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
      
<div className="max-w-6xl w-full">
<div className="rounded-lg bg-[#0A0A0A] border border-gray-800 overflow-hidden">
<div className="bg-[#0F0F0F] px-4 py-2 flex items-center border-b border-gray-800">
<div className="flex mr-4">
<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 bg-[#070707] rounded-md flex items-center px-3 py-1 text-sm text-gray-400">
<svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>https://app.opal.io/projects</span>
</div>
</div>
<div className="flex h-[500px]">
<div className="w-56 bg-[#0A0A0A] border-r border-gray-800 flex flex-col">
<div className="p-4 border-b border-gray-800">
<h1 className="text-lg font-medium">Workspace</h1>
<p className="text-xs text-gray-500">Your project hub</p>
</div>
<nav className="flex-1 py-4">
<div className="px-4 mb-2 text-xs font-medium text-gray-500 uppercase">Main</div>
<a className="flex items-center px-4 py-2 text-sm text-white bg-[#111111] border-l-2 border-white" href="#">
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Projects
            </a>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Activity
            </a>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Team
            </a>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Files
            </a>
</nav>
<div className="p-4 border-t border-gray-800 flex items-center">
<div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center">
<span className="text-sm font-medium">YN</span>
</div>
<div className="ml-3">
<p className="text-sm font-medium">Your Name</p>
<p className="text-xs text-gray-500">Pro Plan</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto bg-[#050505]">
<div className="sticky top-0 z-10 bg-[#050505] border-b border-gray-800 px-6 py-4 flex justify-between items-center">
<h2 className="text-lg font-medium">Projects</h2>
<div className="flex items-center space-x-3">
<button className="bg-[#111111] hover:bg-[#191919] p-2 rounded-full">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-medium">
<span className="flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                  New
                </span>
</button>
</div>
</div>
<div className="px-6 py-4 space-y-2">
<div className="flex items-center justify-between p-3 rounded-md border border-gray-800 hover:bg-[#0A0A0A] cursor-pointer group">
<div className="flex items-center space-x-3">
<div className="h-3 w-3 rounded-full bg-blue-500"></div>
<span className="text-sm">Website Redesign</span>
</div>
<div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">In progress</span>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-gray-800 hover:bg-[#0A0A0A] cursor-pointer group">
<div className="flex items-center space-x-3">
<div className="h-3 w-3 rounded-full bg-purple-500"></div>
<span className="text-sm">Mobile App Development</span>
</div>
<div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Planning</span>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-gray-800 hover:bg-[#0A0A0A] cursor-pointer group">
<div className="flex items-center space-x-3">
<div className="h-3 w-3 rounded-full bg-green-500"></div>
<span className="text-sm">E-commerce Platform</span>
</div>
<div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Completed</span>
</div>
</div>
</div>
<div className="px-6 pt-4 pb-6">
<div className="mb-6">
<h3 className="text-sm font-medium text-gray-400 mb-3">Project Activity</h3>
<div className="bg-[#0A0A0A] rounded-lg border border-gray-800 p-4">
<div className="flex items-start mb-4">
<div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
<span className="text-sm font-medium">JD</span>
</div>
<div>
<div className="flex items-center">
<p className="text-sm font-medium">Jane Doe</p>
<span className="mx-2 text-gray-600">•</span>
<p className="text-xs text-gray-500">2 hours ago</p>
</div>
<p className="text-sm text-gray-300 mt-1">Updated the design system for the Mobile App project</p>
</div>
</div>
<div className="flex items-start">
<div className="h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
<span className="text-sm font-medium">MS</span>
</div>
<div>
<div className="flex items-center">
<p className="text-sm font-medium">Mark Smith</p>
<span className="mx-2 text-gray-600">•</span>
<p className="text-xs text-gray-500">Yesterday</p>
</div>
<p className="text-sm text-gray-300 mt-1">Completed the checkout flow for the E-commerce Platform</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#0A0A0A] rounded-lg border border-gray-800 p-4">
<h3 className="text-sm font-medium text-gray-400 mb-3">Project Overview</h3>
<div className="space-y-3">
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-400">Website Redesign</span>
<span className="text-xs text-gray-500">65%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-400">Mobile App</span>
<span className="text-xs text-gray-500">32%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-purple-500 h-1.5 rounded-full" style={{width: '32%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-gray-400">E-commerce Platform</span>
<span className="text-xs text-gray-500">92%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
</div>
</div>
<div className="bg-[#0A0A0A] rounded-lg border border-gray-800 p-4">
<h3 className="text-sm font-medium text-gray-400 mb-3">Team Members</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
<span className="text-xs font-medium">YN</span>
</div>
<span className="text-sm">Your Name</span>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Owner</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="h-6 w-6 bg-purple-500 rounded-full flex items-center justify-center mr-2">
<span className="text-xs font-medium">JD</span>
</div>
<span className="text-sm">Jane Doe</span>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Designer</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
<span className="text-xs font-medium">MS</span>
</div>
<span className="text-sm">Mark Smith</span>
</div>
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Developer</span>
</div>
</div>
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
