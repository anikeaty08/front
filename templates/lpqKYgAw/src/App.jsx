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
      
<header className="px-4 py-3 border-b border-[#2e2e2e]">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<div className="flex items-center">
<svg className="w-8 h-8 text-[#5e6ad2]" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="ml-2 font-semibold text-lg">Platform</span>
</div>

<nav className="hidden md:flex items-center space-x-6">
<a className="hover:text-[#5e6ad2] transition-colors" href="#">Dashboard</a>
<a className="hover:text-[#5e6ad2] transition-colors" href="#">Projects</a>
<a className="hover:text-[#5e6ad2] transition-colors" href="#">Tasks</a>
<a className="hover:text-[#5e6ad2] transition-colors" href="#">Reports</a>
</nav>

<div className="flex items-center space-x-4">
<span className="tertiary-text hidden md:inline">v2.0.4</span>
<div className="relative">
<button className="p-1.5 rounded-full hover:bg-[#2e2e2e] transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
</svg>
</button>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
</div>
<div className="w-8 h-8 rounded-full bg-[#5e6ad2] flex items-center justify-center">
<span className="text-sm font-medium">YN</span>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto p-4">
<div className="flex items-center justify-between mb-6 mt-4">
<h1 className="text-2xl font-bold">Welcome back</h1>
<button className="bg-[#5e6ad2] hover:bg-[#4a55c7] px-4 py-2 rounded-md transition-colors">
                New Project
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-[#1e1e1e] p-4 rounded-lg border border-[#2e2e2e]">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium">Active Tasks</h3>
<span className="tertiary-text">12</span>
</div>
<div className="w-full bg-[#2e2e2e] h-2 rounded-full overflow-hidden">
<div className="bg-[#5e6ad2] h-full rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div className="bg-[#1e1e1e] p-4 rounded-lg border border-[#2e2e2e]">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium">Completed</h3>
<span className="tertiary-text">47</span>
</div>
<div className="w-full bg-[#2e2e2e] h-2 rounded-full overflow-hidden">
<div className="bg-green-500 h-full rounded-full" style={{width: '80%'}}></div>
</div>
</div>
<div className="bg-[#1e1e1e] p-4 rounded-lg border border-[#2e2e2e]">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium">Pending Review</h3>
<span className="tertiary-text">5</span>
</div>
<div className="w-full bg-[#2e2e2e] h-2 rounded-full overflow-hidden">
<div className="bg-yellow-500 h-full rounded-full" style={{width: '25%'}}></div>
</div>
</div>
</div>
</main>

    </>
  );
}
