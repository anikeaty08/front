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
      

<header className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-between p-4 z-10">
<div className="flex items-center space-x-3">
<button className="text-gray-600 focus:outline-none">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-lg font-semibold">Inbox</h1>
</div>
<button className="text-gray-600 focus:outline-none">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</header>

<main className="pt-20 pb-16 overflow-y-auto">

<div className="bg-white border-b border-gray-200 p-4 flex items-start space-x-3">
<div className="flex-shrink-0">
<div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">J</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-1">
<h2 className="text-sm font-semibold truncate">John Doe</h2>
<span className="text-xs text-gray-500">10:30 AM</span>
</div>
<h3 className="text-sm font-medium truncate mb-1">Project Update - Week 3</h3>
<p className="text-xs text-gray-600 line-clamp-2">Hi Team, just wanted to give a quick update on our project progress this week. We've hit some milestones...</p>
</div>
</div>

<div className="bg-blue-50 border-b border-gray-200 p-4 flex items-start space-x-3">
<div className="flex-shrink-0">
<div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">M</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-1">
<h2 className="text-sm font-bold text-blue-700 truncate">Marketing Team</h2>
<span className="text-xs text-blue-700 font-bold">9:15 AM</span>
</div>
<h3 className="text-sm font-bold text-blue-700 truncate mb-1">New Campaign Launch!</h3>
<p className="text-xs text-gray-800 font-semibold line-clamp-2">Exciting news! Our new marketing campaign for the Q3 product line is officially live. Check out the details...</p>
</div>
</div>

<div className="bg-white border-b border-gray-200 p-4 flex items-start space-x-3">
<div className="flex-shrink-0">
<div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">S</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-1">
<h2 className="text-sm font-semibold truncate">Support Team</h2>
<span className="text-xs text-gray-500">Yesterday</span>
</div>
<h3 className="text-sm font-medium truncate mb-1">Your recent query has been resolved</h3>
<p className="text-xs text-gray-600 line-clamp-2">We're happy to inform you that your support ticket #12345 has been successfully resolved...</p>
</div>
</div>

<div className="bg-white border-b border-gray-200 p-4 flex items-start space-x-3">
<div className="flex-shrink-0">
<div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">N</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-1">
<h2 className="text-sm font-semibold truncate">Newsletter</h2>
<span className="text-xs text-gray-500">Dec 1</span>
</div>
<h3 className="text-sm font-medium truncate mb-1">Weekly Digest: Top Articles</h3>
<p className="text-xs text-gray-600 line-clamp-2">Catch up on the most popular articles and insights from the past week...</p>
</div>
</div>

<div className="bg-white border-b border-gray-200 p-4 flex items-start space-x-3">
<div className="flex-shrink-0">
<div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">A</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-1">
<h2 className="text-sm font-semibold truncate">Alice Wonderland</h2>
<span className="text-xs text-gray-500">Nov 28</span>
</div>
<h3 className="text-sm font-medium truncate mb-1">Meeting Reminder: Project Sync</h3>
<p className="text-xs text-gray-600 line-clamp-2">Just a friendly reminder about our project sync meeting scheduled for tomorrow at 2 PM...</p>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around items-center h-16 z-10">
<button className="flex flex-col items-center text-blue-600 focus:outline-none">
<svg className="h-6 w-6" fill="currentColor" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 
0-2-2-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Inbox</span>
</button>
<button className="flex flex-col items-center text-gray-500 focus:outline-none">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 14v6m-3-3h6M10 18H5a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v4M9 9h.01M15 9h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">Compose</span>
</button>
<button className="flex flex-col items-center text-gray-500 focus:outline-none">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs mt-1">More</span>
</button>
</nav>

<button className="fixed bottom-20 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none z-20">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>

    </>
  );
}
