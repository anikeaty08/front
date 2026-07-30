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
      

<nav className="container mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="text-2xl font-light gradient-text">Opal</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">Features</a>
</div>
<a className="px-4 py-2 border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors" href="#">Sign in</a>
</div>
</nav>

<div className="container mx-auto px-6 py-16 md:py-24">
<div className="flex flex-col items-center justify-center text-center">

<h1 className="text-5xl md:text-6xl font-light mb-6 max-w-4xl leading-tight">
<span className="gradient-text">Build beautiful</span> websites with Opal
      </h1>

<p className="text-gray-400 text-base max-w-2xl mb-10">
        Our platform helps designers and developers create stunning, responsive websites without writing code.
      </p>

<div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
<a className="px-8 py-2.5 bg-gradient-to-r from-[#D692EC] to-[#FDB782] rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg" href="#">
          Get started
        </a>
<a className="flex items-center text-gray-400 hover:text-white border border-gray-800 px-4 py-2.5 rounded-lg" href="#">
          Learn more <span className="ml-1">→</span>
</a>
</div>

<div className="max-w-5xl w-full overflow-hidden rounded-lg border border-gray-800 bg-[#0A0A0A]">

<div className="bg-[#0F0F0F] px-4 py-2 flex items-center border-b border-gray-800">
<div className="flex mr-4">
<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 bg-[#070707] rounded-md flex items-center px-3 py-1 text-sm text-gray-400">
<svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
<svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                Projects
              </a>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                Activity
              </a>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                Team
              </a>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                Files
              </a>
<div className="px-4 mt-6 mb-2 text-xs font-medium text-gray-500 uppercase">Settings</div>
<a className="flex items-center px-4 py-2 text-sm text-gray-400 hover:bg-[#111111]" href="#">
<svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                Preferences
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
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="bg-[#111111] hover:bg-[#191919] p-2 rounded-full">
<svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="bg-white text-black px-3 py-1.5 rounded-md text-sm font-medium">
<span className="flex items-center">
<svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
                    New
                  </span>
</button>
</div>
</div>

<div className="border-b border-gray-800 px-6">
<div className="flex -mb-px">
<button className="py-4 px-4 text-sm border-b-2 border-white text-white font-medium">All projects</button>
<button className="py-4 px-4 text-sm text-gray-500 hover:text-gray-300">Active</button>
<button className="py-4 px-4 text-sm text-gray-500 hover:text-gray-300">Archived</button>
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
<button className="text-gray-500 hover:text-gray-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-gray-800 hover:bg-[#0A0A0A] cursor-pointer group">
<div className="flex items-center space-x-3">
<div className="h-3 w-3 rounded-full bg-purple-500"></div>
<span className="text-sm">Mobile App Development</span>
</div>
<div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Planning</span>
<button className="text-gray-500 hover:text-gray-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-gray-800 hover:bg-[#0A0A0A] cursor-pointer group">
<div className="flex items-center space-x-3">
<div className="h-3 w-3 rounded-full bg-green-500"></div>
<span className="text-sm">E-commerce Platform</span>
</div>
<div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">Completed</span>
<button className="text-gray-500 hover:text-gray-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-gray-800 hover:bg-[#0A0A0A] cursor-pointer group">
<div className="flex items-center space-x-3">
<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
<span className="text-sm">Marketing Dashboard</span>
</div>
<div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-xs px-2 py-0.5 rounded-full bg-[#111111] text-gray-400">On hold</span>
<button className="text-gray-500 hover:text-gray-300">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-16">
<div className="flex flex-col items-center">
<div className="text-3xl md:text-4xl font-light text-white mb-1">95%</div>
<div className="text-gray-500 text-sm">User satisfaction</div>
</div>
<div className="flex flex-col items-center">
<div className="text-3xl md:text-4xl font-light text-white mb-1">15k+</div>
<div className="text-gray-500 text-sm">Active users</div>
</div>
<div className="flex flex-col items-center">
<div className="text-3xl md:text-4xl font-light text-white mb-1">24/7</div>
<div className="text-gray-500 text-sm">Support available</div>
</div>
<div className="flex flex-col items-center">
<div className="text-3xl md:text-4xl font-light text-white mb-1">100%</div>
<div className="text-gray-500 text-sm">Cloud-based</div>
</div>
</div>
</div>
</div>

    </>
  );
}
