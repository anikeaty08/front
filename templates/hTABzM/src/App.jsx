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
            'linear-dark': '#101118',
            'linear-card': '#1a1b25',
            'linear-border': '#2e2e3c',
            'linear-accent': '#5e6ad2',
            'linear-text': '#e2e2e6',
            'linear-text-dim': '#8a8b9c'
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
      
<div className="min-h-screen p-4 md:p-8">

<header className="flex items-center justify-between mb-8">
<div className="flex items-center space-x-4">
<h1 className="text-xl font-medium">Dashboard</h1>
<div className="bg-linear-card border border-linear-border rounded-md flex text-sm">
<button className="px-3 py-1.5 bg-linear-accent rounded-md text-white">Week</button>
<button className="px-3 py-1.5 text-linear-text-dim hover:text-linear-text">Month</button>
<button className="px-3 py-1.5 text-linear-text-dim hover:text-linear-text">Quarter</button>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 rounded-md border border-linear-border hover:bg-linear-card">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-linear-accent text-white">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>New</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-linear-card border border-linear-border rounded-lg p-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm text-linear-text-dim">Completed tasks</h3>
<span className="text-xs px-2 py-1 bg-green-900/30 text-green-400 rounded">+12.5%</span>
</div>
<p className="text-2xl font-medium">187</p>
<div className="mt-4 h-1 bg-linear-border rounded-full overflow-hidden">
<div className="h-full bg-linear-accent w-3/4 rounded-full"></div>
</div>
</div>
<div className="bg-linear-card border border-linear-border rounded-lg p-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm text-linear-text-dim">Active projects</h3>
<span className="text-xs px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded">+2.3%</span>
</div>
<p className="text-2xl font-medium">32</p>
<div className="mt-4 h-1 bg-linear-border rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 w-1/2 rounded-full"></div>
</div>
</div>
<div className="bg-linear-card border border-linear-border rounded-lg p-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm text-linear-text-dim">Team velocity</h3>
<span className="text-xs px-2 py-1 bg-red-900/30 text-red-400 rounded">-4.1%</span>
</div>
<p className="text-2xl font-medium">64</p>
<div className="mt-4 h-1 bg-linear-border rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-1/4 rounded-full"></div>
</div>
</div>

<div className="col-span-1 md:col-span-3 bg-linear-card border border-linear-border rounded-lg p-4">
<div className="flex justify-between items-center mb-6">
<h3 className="font-medium">Weekly performance</h3>
<div className="flex space-x-2 text-sm">
<span className="flex items-center">
<span className="h-2 w-2 rounded-full bg-linear-accent mr-2"></span>
<span className="text-linear-text-dim">Tasks</span>
</span>
<span className="flex items-center">
<span className="h-2 w-2 rounded-full bg-green-400 mr-2"></span>
<span className="text-linear-text-dim">Completed</span>
</span>
</div>
</div>

<div className="h-64 flex items-end space-x-6 border-b border-linear-border pt-4">
<div className="flex flex-col items-center space-y-2 flex-1">
<div className="w-full flex space-x-1">
<div className="h-32 bg-linear-accent/20 rounded-t-sm w-1/2"></div>
<div className="h-20 bg-green-400/20 rounded-t-sm w-1/2"></div>
</div>
<span className="text-xs text-linear-text-dim">Mon</span>
</div>
<div className="flex flex-col items-center space-y-2 flex-1">
<div className="w-full flex space-x-1">
<div className="h-48 bg-linear-accent/20 rounded-t-sm w-1/2"></div>
<div className="h-36 bg-green-400/20 rounded-t-sm w-1/2"></div>
</div>
<span className="text-xs text-linear-text-dim">Tue</span>
</div>
<div className="flex flex-col items-center space-y-2 flex-1">
<div className="w-full flex space-x-1">
<div className="h-40 bg-linear-accent/20 rounded-t-sm w-1/2"></div>
<div className="h-28 bg-green-400/20 rounded-t-sm w-1/2"></div>
</div>
<span className="text-xs text-linear-text-dim">Wed</span>
</div>
<div className="flex flex-col items-center space-y-2 flex-1">
<div className="w-full flex space-x-1">
<div className="h-52 bg-linear-accent/20 rounded-t-sm w-1/2"></div>
<div className="h-44 bg-green-400/20 rounded-t-sm w-1/2"></div>
</div>
<span className="text-xs text-linear-text-dim">Thu</span>
</div>
<div className="flex flex-col items-center space-y-2 flex-1">
<div className="w-full flex space-x-1">
<div className="h-36 bg-linear-accent/20 rounded-t-sm w-1/2"></div>
<div className="h-24 bg-green-400/20 rounded-t-sm w-1/2"></div>
</div>
<span className="text-xs text-linear-text-dim">Fri</span>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
