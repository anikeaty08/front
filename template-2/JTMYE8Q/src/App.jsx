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
      
    lucide.createIcons();

    // Toggle switches
    document.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dot = btn.querySelector('.dot');
        const isOn = btn.classList.contains('bg-indigo-600');
        if (isOn) {
          btn.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
          btn.classList.add('bg-gray-300', 'hover:bg-gray-400');
          dot.classList.remove('translate-x-5');
        } else {
          btn.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
          btn.classList.remove('bg-gray-300', 'hover:bg-gray-400');
          dot.classList.add('translate-x-5');
        }
      });
    });

    // Sort dropdown
    const sortButton = document.getElementById('sortButton');
    const sortMenu = document.getElementById('sortMenu');
    sortButton.addEventListener('click', e => {
      e.stopPropagation();
      sortMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => sortMenu.classList.add('hidden'));
  
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
      
<div className="flex h-full">

<aside className="hidden lg:flex flex-col w-60 border-r shadow-sm bg-white border-gray-200">
<div className="flex items-center h-16 px-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-9 h-9 logo-rocket flex items-center justify-center relative">
<svg className="relative z-10" fill="none" height="16" viewBox="0 0 16 16" width="16">
<path d="M8 1L10.5 5.5L15 6L11.5 9.5L12.5 15L8 12.5L3.5 15L4.5 9.5L1 6L5.5 5.5L8 1Z" fill="white" stroke="white" strokeLinejoin="round" strokeWidth="0.5"></path>
<circle cx="8" cy="8" fill="rgba(255,255,255,0.8)" r="1"></circle>
</svg>
<div className="rocket-trail"></div>
</div>
<span className="text-lg font-semibold tracking-tight">Launch Cheaply</span>
</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-1">
<div className="text-xs font-medium uppercase text-gray-500 px-3 mt-2 mb-3 tracking-wide">Main</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-1 hover:bg-gray-50 text-gray-700" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
          Dashboard
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium border animate-fade-in stagger-2 bg-indigo-50 text-indigo-700 border-indigo-100" href="#">
<i className="w-4 h-4" data-lucide="flag"></i>
          Feature Flags
          <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-3 hover:bg-gray-50 text-gray-700" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
          Segments
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-4 hover:bg-gray-50 text-gray-700" href="#">
<i className="w-4 h-4" data-lucide="layers"></i>
          Environments
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-5 hover:bg-gray-50 text-gray-700" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
          Audit Logs
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-6 hover:bg-gray-50 text-gray-700" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
          Team
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-200 animate-fade-in stagger-7 hover:bg-gray-50 text-gray-700" href="#">
<i className="w-4 h-4" data-lucide="key"></i>
          API Keys
        </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 mb-3">
<img alt="Profile" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-gray-900">Ryan Tomlinson</p>
<p className="text-xs text-gray-500 truncate">ryan@example.com</p>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 text-gray-700 hover:bg-gray-50">
<i className="w-4 h-4" data-lucide="log-out"></i>
          Sign out
        </button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-50">
<div className="px-6 py-6 lg:px-8">

<nav className="flex items-center text-sm text-gray-500 gap-2 mb-6 animate-fade-in">
<a className="transition-colors duration-200 hover:text-indigo-600" href="#">Dashboard</a>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="font-medium text-gray-900">Feature Flags</span>
</nav>

<div className="flex items-center justify-between mb-8 animate-slide-up stagger-1">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Feature Flags</h1>
<p className="mt-2 text-sm text-gray-600">Manage and monitor your feature flags across all environments.</p>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white">
<i className="w-4 h-4" data-lucide="plus"></i>
            Create Flag
          </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-2 bg-white border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Total Flags</p>
<p className="text-2xl font-semibold mt-1 text-gray-900">12</p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50">
<i className="w-5 h-5 text-blue-600" data-lucide="flag"></i>
</div>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-3 bg-white border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Active</p>
<p className="text-2xl font-semibold mt-1 text-gray-900">8</p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-green-50">
<i className="w-5 h-5 text-green-600" data-lucide="check-circle"></i>
</div>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-4 bg-white border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Evaluations</p>
<p className="text-2xl font-semibold mt-1 text-gray-900">2.4k</p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-purple-50">
<i className="w-5 h-5 text-purple-600" data-lucide="activity"></i>
</div>
</div>
</div>
<div className="p-6 rounded-xl border shadow-sm animate-fade-in stagger-5 bg-white border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Environments</p>
<p className="text-2xl font-semibold mt-1 text-gray-900">4</p>
</div>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-orange-50">
<i className="w-5 h-5 text-orange-600" data-lucide="layers"></i>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 animate-slide-up stagger-6">
<div className="flex-1">
<div className="relative">
<input className="w-full border rounded-lg py-2.5 pl-10 pr-4 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors duration-200 bg-white border-gray-300" placeholder="Search flags by name, description, or key..." type="text" />
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
</div>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 border rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 bg-white border-gray-300 text-gray-700 hover:bg-gray-50">
<i className="w-4 h-4" data-lucide="filter"></i>
              Filters
            </button>
<div className="relative">
<button className="inline-flex items-center gap-2 border rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 bg-white border-gray-300 text-gray-700 hover:bg-gray-50" id="sortButton">
                Newest First
                <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-48 border rounded-lg shadow-lg z-10 bg-white border-gray-200" id="sortMenu">
<a className="block px-4 py-2 text-sm transition-colors duration-200 text-gray-700 hover:bg-gray-50" href="#">Newest First</a>
<a className="block px-4 py-2 text-sm transition-colors duration-200 text-gray-700 hover:bg-gray-50" href="#">Oldest First</a>
<a className="block px-4 py-2 text-sm transition-colors duration-200 text-gray-700 hover:bg-gray-50" href="#">A → Z</a>
<a className="block px-4 py-2 text-sm transition-colors duration-200 text-gray-700 hover:bg-gray-50" href="#">Z → A</a>
</div>
</div>
</div>
</div>

<div className="border rounded-xl overflow-hidden shadow-sm animate-slide-up stagger-7 bg-white border-gray-200">
<div className="grid grid-cols-12 text-xs font-medium text-gray-500 px-6 py-4 border-b bg-gray-50 border-gray-200">
<div className="col-span-4">Flag</div>
<div className="col-span-3">Metadata</div>
<div className="col-span-1 text-center">Pre-prod</div>
<div className="col-span-1 text-center">Development</div>
<div className="col-span-1 text-center">Staging</div>
<div className="col-span-1 text-center">Production</div>
<div className="col-span-1"></div>
</div>

<div className="grid grid-cols-12 items-center px-6 py-4 transition-colors duration-200 border-b hover:bg-gray-50 border-gray-100">
<div className="col-span-4">
<div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                Mews BI Beta Flag
                <i className="w-3 h-3 text-gray-400" data-lucide="external-link"></i>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-700">mews-bi-beta-flag</span>
<span className="text-xs px-2 py-1 rounded font-medium bg-indigo-100 text-indigo-700">1/4</span>
</div>
<p className="text-xs text-gray-500 mt-2">Toggle for Mews BI Beta customers</p>
</div>
<div className="col-span-3">
<div className="flex items-center gap-3">
<img alt="Creator" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
<div>
<p className="text-sm font-medium text-gray-900">Ryan Tomlinson</p>
<p className="text-xs text-gray-500">Creator</p>
</div>
</div>
<div className="mt-2 space-y-1">
<p className="flex items-center gap-1 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="calendar"></i>
                  18 hours ago
                </p>
<p className="flex items-center gap-1 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="refresh-ccw"></i>
                  Updated 16 hours ago
                </p>
</div>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 translate-x-5 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-gray-300 hover:bg-gray-400" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-end">
<button className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100">
<i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>

<div className="grid grid-cols-12 items-center px-6 py-4 transition-colors duration-200 hover:bg-gray-50">
<div className="col-span-4">
<div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                Advanced Analytics
                <i className="w-3 h-3 text-gray-400" data-lucide="external-link"></i>
</div>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-700">advanced-analytics</span>
<span className="text-xs px-2 py-1 rounded font-medium bg-green-100 text-green-700">4/4</span>
</div>
<p className="text-xs text-gray-500 mt-2">Enable advanced analytics features</p>
</div>
<div className="col-span-3">
<div className="flex items-center gap-3">
<img alt="Creator" className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div>
<p className="text-sm font-medium text-gray-900">Sarah Chen</p>
<p className="text-xs text-gray-500">Creator</p>
</div>
</div>
<div className="mt-2 space-y-1">
<p className="flex items-center gap-1 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="calendar"></i>
                  2 days ago
                </p>
<p className="flex items-center gap-1 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="refresh-ccw"></i>
                  Updated 1 day ago
                </p>
</div>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 translate-x-5 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 translate-x-5 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 translate-x-5 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-center">
<button className="relative w-11 h-6 rounded-full transition-colors duration-200 bg-indigo-600 hover:bg-indigo-700" data-toggle="">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200 translate-x-5 shadow-sm bg-white"></span>
</button>
</div>
<div className="col-span-1 flex justify-end">
<button className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100">
<i className="w-4 h-4 text-gray-400" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
</div>
</main>
</div>




    </>
  );
}
