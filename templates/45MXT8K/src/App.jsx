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
      

<aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r border-gray-200 fixed top-0 left-0 z-30">
<div className="h-20 flex items-center px-6 border-b border-gray-100">
<span className="text-xl font-semibold tracking-tight text-gray-900">MedQ Bank</span>
</div>
<nav className="flex-1 pt-6">
<ul className="space-y-2">
<li>
<a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<svg className="lucide lucide-home w-5 h-5 mr-3 stroke-gray-500"></svg>
            Dashboard
          </a>
</li>
<li>
<a className="flex items-center px-6 py-2 text-gray-900 bg-gray-100 rounded-lg font-semibold" href="#">
<svg className="lucide lucide-book-open w-5 h-5 mr-3 stroke-gray-700"></svg>
            Question Banks
          </a>
</li>
<li>
<a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<svg className="lucide lucide-bar-chart w-5 h-5 mr-3 stroke-gray-500"></svg>
            Analytics
          </a>
</li>
<li>
<a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-50 rounded-lg" href="#">
<svg className="lucide lucide-user w-5 h-5 mr-3 stroke-gray-500"></svg>
            Profile
          </a>
</li>
</ul>
</nav>
<div className="px-6 py-6 border-t border-gray-100">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
<svg className="lucide lucide-play-circle w-5 h-5 stroke-white"></svg>
        Start New Quiz
      </button>
</div>
</aside>

<div className="md:pl64 flex flex-col min-h-screen">

<header className="flex items-center justify-between px-6 py-6 border-b border-gray-200 bg-white">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Question Bank</h1>
<p className="mt-1 text-gray-500 text-sm">Browse, search, and filter medical MCQ sets.</p>
</div>
<div className="flex items-center gap-4">
<button className="relative">
<svg className="lucide lucide-bell w-6 h-6 stroke-gray-500"></svg>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white"></span>
</button>
<img alt="Profile" className="w-9 h-9 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
</div>
</header>

<section className="px-4 md:px-8 py-6">
<div className="flex flex-col md:flex-row md:items-center gap-4">

<div className="relative flex-1">
<input className="w-full px-4 py-2.5 pl-10 bg-white border border-gray-200 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-medium transition" placeholder="Search question banks..." type="text"/>
<svg className="lucide lucide-search w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none"></svg>
</div>

<div className="flex gap-2">
<div className="relative">
</div></div></div></section></div>
    </>
  );
}
