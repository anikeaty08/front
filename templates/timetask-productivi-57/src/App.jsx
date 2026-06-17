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



        lucide.createIcons();

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const isCollapsed = sidebar.classList.contains('collapsed');
            
            if (isCollapsed) {
                // Expand
                sidebar.classList.remove('collapsed');
                sidebar.classList.remove('w-20');
                sidebar.classList.add('w-64');
            } else {
                // Collapse
                sidebar.classList.add('collapsed');
                sidebar.classList.remove('w-64');
                sidebar.classList.add('w-20');
            }
        }

        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            
            // Check if menu is currently hidden (translated off screen)
            const isHidden = sidebar.classList.contains('-translate-x-full');
            
            if (isHidden) {
                // Show menu
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10); // Fade in overlay
            } else {
                // Hide menu
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for fade out
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
      

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 hidden lg:hidden transition-opacity opacity-0" id="mobile-overlay" onclick="toggleMobileMenu()"></div>

<aside className="fixed inset-y-0 left-0 z-40 bg-white border-r border-slate-100 flex flex-col h-full w-64 -translate-x-full lg:translate-x-0 lg:static flex-shrink-0 group shadow-[4px_0_24px_-12px_rgba(0,0,0,0.02)]" id="sidebar">

<div className="flex lg:border-none logo-container transition-all h-20 border-slate-50 border-b pr-8 pl-8 items-center">
<div className="bg-indigo-600 shadow-lg shadow-indigo-200 p-1.5 rounded-lg flex-shrink-0">
<svg className="lucide lucide-zap text-white w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight text-slate-800 ml-2 logo-text whitespace-nowrap transition-opacity duration-200">TimeTask</span>

<button className="ml-auto lg:hidden text-slate-400 hover:text-slate-600" onclick="toggleMobileMenu()">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 overflow-y-auto px-4 py-4 space-y-8">
<nav className="space-y-1">
<a className="nav-item flex items-center gap-3 px-4 py-3 bg-indigo-600 shadow-md shadow-indigo-100 text-white rounded-xl text-sm font-medium transition-all group relative overflow-hidden" href="#">
<svg className="lucide lucide-layout-grid w-5 h-5 flex-shrink-0" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="nav-text whitespace-nowrap">Overview</span>
</a>
<a className="nav-item flex items-center gap-3 hover:bg-indigo-50 hover:text-indigo-700 transition-all group text-sm font-medium text-slate-500 rounded-xl pt-3 pr-4 pb-3 pl-4 relative" href="#">
<svg className="lucide lucide-calendar w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="nav-text whitespace-nowrap">Schedule</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-layers w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="nav-text whitespace-nowrap">Ongoing Recruitment</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span className="nav-text whitespace-nowrap">Analytics</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-file-text w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="nav-text whitespace-nowrap">Reports</span>
</a>
</nav>
<div>
<h3 className="section-header px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 transition-opacity">Recruitment</h3>
<nav className="space-y-1">
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-briefcase w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="nav-text whitespace-nowrap">Vacancies</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-users w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="nav-text whitespace-nowrap">Candidates</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-message-square w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="nav-text whitespace-nowrap">Interviews</span>
</a>
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-check-circle w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="nav-text whitespace-nowrap">Offers</span>
</a>
</nav>
</div>
</div>

<div className="px-4 py-4 border-t border-slate-50 mt-auto">
<nav className="space-y-1 mb-4">
<a className="nav-item flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-indigo-50 hover:text-indigo-700 rounded-xl text-sm font-medium transition-all group relative" href="#">
<svg className="lucide lucide-settings w-5 h-5 flex-shrink-0 group-hover:text-indigo-600 transition-colors" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="nav-text whitespace-nowrap">Setting</span>
</a>
</nav>

<button className="hidden lg:flex w-full items-center gap-3 px-4 py-3 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all nav-item justify-between group" onclick="toggleSidebar()">
<div className="flex items-center gap-3">
<svg className="lucide lucide-panel-left-close w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" data-lucide="panel-left-close" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="m16 15-3-3 3-3"></path></svg>
<span className="nav-text text-sm font-medium whitespace-nowrap">Collapse</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative w-full bg-slate-50">

<header className="h-20 bg-white/70 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-4 lg:px-8 z-10 sticky top-0">
<div className="flex items-center gap-4">

<button className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<h1 className="text-xl font-semibold text-slate-800 tracking-tight">Dashboard</h1>
</div>
<div className="flex-1 max-w-xl mx-6 hidden md:block">
<div className="relative group">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-slate-100 border-none rounded-full py-2.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all outline-none" placeholder="Search candidate, vacancy, etc" type="text"/>
</div>
</div>
<div className="flex items-center gap-3 lg:gap-6">
<div className="hidden xl:flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
<div className="bg-indigo-50 p-1 rounded-full">
<svg className="lucide lucide-award w-4 h-4 text-indigo-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<span className="text-sm font-medium text-slate-600">Expert Summary</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="relative text-slate-400 hover:text-indigo-600 transition-colors">
<svg className="lucide lucide-bell w-6 h-6" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm"></span>
</button>
<button className="text-slate-400 hover:text-indigo-600 transition-colors hidden sm:block">
<svg className="lucide lucide-message-square-plus w-6 h-6" data-lucide="message-square-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 8v6"></path><path d="M9 11h6"></path></svg>
</button>
<div className="flex items-center gap-3 pl-4 border-l border-slate-200">
<img alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-md object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="hidden xl:block">
<p className="text-sm font-bold text-slate-800 leading-tight">Alex Holland</p>
<p className="text-xs text-slate-400 leading-tight">Recruitment Specialist</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 ml-1 hidden xl:block" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-8">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-6 max-w-[1600px] mx-auto">

<div className="xl:col-span-9 flex flex-col gap-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-between hover:shadow-md transition-shadow">
<div className="w-full text-center">
<h3 className="text-base font-semibold text-slate-800">Color Palette Selection</h3>
<p className="text-xs text-slate-400 mt-1 uppercase tracking-wide font-medium">Over9k: Game App</p>
</div>
<div className="relative w-28 h-28 my-4 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle cx="56" cy="56" fill="transparent" r="50" stroke="#f1f5f9" strokeWidth="8"></circle>
<circle cx="56" cy="56" fill="transparent" r="50" stroke="#3b82f6" stroke-dasharray="314" stroke-dashoffset="100" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<button className="absolute inset-0 m-auto w-16 h-16 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200 transition-all text-white group">
<svg className="lucide lucide-pause w-7 h-7 fill-current" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
</button>
</div>
<div className="w-full flex justify-between px-4">
<div className="text-center">
<p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Today</p>
<p className="text-lg font-bold text-slate-800 tracking-tight">00:57:56</p>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Limits</p>
<p className="text-lg font-bold text-slate-800 tracking-tight">06:00:00</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<h3 className="text-base font-semibold text-slate-800">Today's tasks</h3>
<span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-md font-bold">3</span>
</div>
<button className="text-xs text-slate-400 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
                                    Manage <svg className="lucide lucide-arrow-right-circle w-3 h-3" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
</button>
</div>
<div className="space-y-5">
<div className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 w-8 h-8 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors">
<svg className="lucide lucide-pause w-4 h-4 text-sky-600 fill-current" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Color Palette Selection</p>
<p className="text-[10px] text-slate-400 mt-0.5 font-medium uppercase tracking-wide">OVER9K: GAMERS APP</p>
</div>
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
<svg className="lucide lucide-play w-4 h-4 text-rose-500 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Creating Landing Page</p>
<p className="text-[10px] text-slate-400 mt-0.5 font-medium uppercase tracking-wide">GUITAR TUNER</p>
</div>
<svg className="lucide lucide-star w-4 h-4 text-slate-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-start gap-3 group cursor-pointer">
<div className="mt-0.5 w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0 group-hover:bg-rose-100 transition-colors">
<svg className="lucide lucide-play w-4 h-4 text-rose-500 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">Competitive Analysis</p>
<p className="text-[10px] text-slate-400 mt-0.5 font-medium uppercase tracking-wide">DOCTOR APP</p>
</div>
<svg className="lucide lucide-star w-4 h-4 text-slate-200" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<h3 className="text-base font-semibold text-slate-800" style={{}}>Today's meetings</h3>
<span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-0.5 rounded-md font-bold">3</span>
</div>
<button className="text-xs text-slate-400 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
                                    View All <svg className="lucide lucide-arrow-right-circle w-3 h-3" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-3 h-full pb-2">

<div className="bg-sky-50/50 p-3 rounded-xl border border-sky-100 flex flex-col justify-between hover:bg-sky-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="">
<span className="text-[10px] text-sky-400 font-bold uppercase">AM</span>
<p className="text-sm font-bold text-slate-800 group-hover:text-sky-700 transition-colors">10:00</p>
</div>
<div className="bg-sky-500 shadow-sm shadow-sky-200 p-1 rounded-full">
<svg className="lucide lucide-video w-3 h-3 text-white" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
</div>
<p className="text-[10px] text-slate-500 leading-snug font-medium">Daily Sync: Project X</p>
</div>

<div className="bg-rose-50/50 p-3 rounded-xl border border-rose-100 flex flex-col justify-between hover:bg-rose-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-[10px] text-rose-400 font-bold uppercase">PM</span>
<p className="text-sm font-bold text-slate-800 group-hover:text-rose-700 transition-colors">01:00</p>
</div>
<div className="bg-rose-500 shadow-sm shadow-rose-200 p-1 rounded-full">
<svg className="lucide lucide-globe w-3 h-3 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<p className="text-[10px] text-slate-500 leading-snug font-medium">Remote Team Catch-up</p>
</div>

<div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100 flex flex-col justify-between hover:bg-purple-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<div className="">
<span className="text-[10px] text-purple-400 font-bold uppercase">PM</span>
<p className="text-sm font-bold text-slate-800 group-hover:text-purple-700 transition-colors">03:00</p>
</div>
<div className="bg-purple-500 shadow-sm shadow-purple-200 p-1 rounded-full">
<svg className="lucide lucide-instagram w-3 h-3 text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
<p className="text-[10px] text-slate-500 leading-snug font-medium">Social Media Strategy</p>
</div>

<div className="border-2 border-dashed border-slate-200 p-3 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all group">
<div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-plus w-4 h-4 text-slate-500 group-hover:text-indigo-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-[10px] font-semibold text-slate-400 group-hover:text-indigo-600">Schedule</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute right-0 top-0 w-32 h-32 bg-emerald-50 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-4 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<p className="text-sm font-medium text-slate-600">Total Project</p>
</div>
<p className="text-xs text-slate-400 font-medium">ALL TIME</p>
<p className="text-3xl font-bold text-slate-800 tracking-tight mt-2">375</p>
</div>
<div className="w-24 h-12">
<svg className="w-full h-full stroke-emerald-500 fill-none stroke-2 drop-shadow-sm" viewbox="0 0 100 40">
<path d="M0 35 Q10 35 20 25 T40 20 T60 28 T80 15 L100 25"></path>
<circle className="fill-white stroke-emerald-500" cx="80" cy="15" r="3"></circle>
</svg>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute right-0 top-0 w-32 h-32 bg-rose-50 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-4 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.4)]"></div>
<p className="text-sm font-medium text-slate-600">Total Task</p>
</div>
<p className="text-xs text-slate-400 font-medium">ALL TIME</p>
<p className="text-3xl font-bold text-slate-800 tracking-tight mt-2">256</p>
</div>
<div className="w-24 h-12">
<svg className="w-full h-full stroke-rose-500 fill-none stroke-2 drop-shadow-sm" viewbox="0 0 100 40">
<path d="M0 25 Q20 35 40 15 T60 25 T80 10 L100 20"></path>
<circle className="fill-white stroke-rose-500" cx="80" cy="10" r="3"></circle>
</svg>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-full filter blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start relative z-10">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="w-1 h-4 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"></div>
<p className="text-sm font-medium text-slate-600">Assigned Task</p>
</div>
<p className="text-xs text-slate-400 font-medium">ALL TIME</p>
<p className="text-3xl font-bold text-slate-800 tracking-tight mt-2">150</p>
</div>
<div className="w-24 h-12">
<svg className="w-full h-full stroke-indigo-500 fill-none stroke-2 drop-shadow-sm" viewbox="0 0 100 40">
<path d="M0 30 Q25 30 40 10 T70 20 T100 15"></path>
<circle className="fill-white stroke-indigo-500" cx="40" cy="10" r="3"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">

<div className="md:col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-semibold text-slate-800">Invoice Overview</h3>
<button className="text-slate-400 hover:text-indigo-600 transition-colors">
<svg className="lucide lucide-sliders-horizontal w-4 h-4 rotate-90" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
</div>
<div className="space-y-5">

<div className="">
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-600">Overdue</span>
<span className="font-bold text-slate-800">USD 182.00 $</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2.5 rounded-full shadow-[0_2px_4px_rgba(168,85,247,0.3)]" style={{width: '60%'}}></div>
</div>
</div>

<div className="">
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-600">Not Paid</span>
<span className="font-bold text-slate-800">USD 182.00 $</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gradient-to-r from-rose-500 to-rose-400 h-2.5 rounded-full shadow-[0_2px_4px_rgba(244,63,94,0.3)]" style={{width: '45%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-600">Partially Paid</span>
<span className="font-bold text-slate-800">USD 175.00 $</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gradient-to-r from-sky-400 to-sky-300 h-2.5 rounded-full shadow-[0_2px_4px_rgba(56,189,248,0.3)]" style={{width: '35%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-600">Fully Paid</span>
<span className="font-bold text-slate-800">USD 180.00 $</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-2.5 rounded-full shadow-[0_2px_4px_rgba(16,185,129,0.3)]" style={{width: '70%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="font-medium text-slate-600">Draft</span>
<span className="font-bold text-slate-800">USD 100.00 $</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-gradient-to-r from-amber-400 to-amber-300 h-2.5 rounded-full shadow-[0_2px_4px_rgba(251,191,36,0.3)]" style={{width: '25%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold text-slate-800">Schedule</h3>
<div className="flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
<svg className="lucide lucide-calendar w-3 h-3 mr-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Today 
                                    <svg className="lucide lucide-chevron-down w-3 h-3 ml-1" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="relative pl-4 border-l border-slate-100 space-y-6">

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-lime-400 rounded-full border-2 border-white shadow-sm ring-2 ring-lime-100"></div>
<div className="bg-gradient-to-br from-lime-50 to-white p-3 rounded-xl border border-lime-100 group-hover:shadow-sm transition-all">
<h4 className="text-xs font-bold text-slate-800">Resume Screening</h4>
<p className="text-[10px] text-slate-500 mt-1 font-medium">EVALUATION • May 27, 2024</p>
</div>
<span className="absolute top-0 right-0 text-[10px] text-slate-400 font-bold translate-x-[110%]">1:00 PM</span>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-slate-200 rounded-full border-2 border-white"></div>
<div className="bg-white p-3 rounded-xl border border-slate-100 opacity-70 group-hover:opacity-100 transition-opacity">
<h4 className="text-xs font-bold text-slate-800">Interview Scheduling</h4>
<p className="text-[10px] text-slate-500 mt-1 font-medium">ENGAGEMENT • May 20, 2024</p>
</div>
<span className="absolute top-0 right-0 text-[10px] text-slate-400 font-bold translate-x-[110%]">2:30 PM</span>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-indigo-400 rounded-full border-2 border-white ring-2 ring-indigo-100"></div>
<div className="bg-gradient-to-br from-indigo-50 to-white p-3 rounded-xl border border-indigo-100 group-hover:shadow-sm transition-all">
<h4 className="text-xs font-bold text-slate-800">Candidate Communication</h4>
<p className="text-[10px] text-slate-500 mt-1 font-medium">RELATIONSHIP • May 25, 2024</p>
</div>
<span className="absolute top-0 right-0 text-[10px] text-slate-400 font-bold translate-x-[110%]">3:00 PM</span>
</div>

<div className="relative group cursor-pointer">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-slate-200 rounded-full border-2 border-white"></div>
<div className="bg-white p-3 rounded-xl border border-slate-100 opacity-70 group-hover:opacity-100 transition-opacity">
<h4 className="text-xs font-bold text-slate-800">Offer Management</h4>
<p className="text-[10px] text-slate-500 mt-1 font-medium">SELECTION • May 26, 2024</p>
</div>
<span className="absolute top-0 right-0 text-[10px] text-slate-400 font-bold translate-x-[110%]">4:30 PM</span>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-3 flex flex-col gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-center mb-1">
<h3 className="text-base font-semibold text-slate-800">Activity</h3>
<div className="flex items-center gap-1 text-xs text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> 12.67%
                            </div>
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-300 ml-auto cursor-pointer hover:text-indigo-600" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-6">75%</h2>
<div className="flex items-end justify-between h-24 gap-2">
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[24px] bg-slate-200 rounded-t-lg h-16 group-hover:bg-indigo-400 transition-colors"></div>
<span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600">92%</span>
<span className="text-[9px] text-slate-400 uppercase font-medium">Mon</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[24px] bg-slate-100 rounded-t-lg h-10 group-hover:bg-indigo-300 transition-colors relative">
<div className="absolute bottom-0 left-0 right-0 bg-slate-800 h-full rounded-t-lg group-hover:bg-indigo-600 transition-colors opacity-90"></div>
</div>
<span className="text-[10px] font-bold text-slate-800 group-hover:text-indigo-600">41%</span>
<span className="text-[9px] text-slate-400 uppercase font-medium">Tue</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[24px] bg-indigo-600 rounded-t-lg h-20 shadow-[0_0_12px_rgba(79,70,229,0.3)] group-hover:scale-105 transition-transform origin-bottom"></div>
<span className="text-[10px] font-bold text-indigo-600">78%</span>
<span className="text-[9px] text-slate-800 uppercase font-bold">Wed</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[24px] bg-slate-50 repeating-lines rounded-t-lg h-24 group-hover:bg-indigo-50 transition-colors border border-dashed border-slate-200"></div>
<span className="text-[10px] font-bold text-slate-300">0%</span>
<span className="text-[9px] text-slate-400 uppercase font-medium">Thu</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[24px] bg-slate-50 repeating-lines rounded-t-lg h-24 group-hover:bg-indigo-50 transition-colors border border-dashed border-slate-200"></div>
<span className="text-[10px] font-bold text-slate-300">0%</span>
<span className="text-[9px] text-slate-400 uppercase font-medium">Fri</span>
</div>
<div className="flex flex-col items-center gap-2 group w-full">
<div className="w-full max-w-[24px] bg-slate-200 rounded-t-lg h-12 group-hover:bg-indigo-400 transition-colors"></div>
<span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-600">50%</span>
<span className="text-[9px] text-slate-400 uppercase font-medium">Sat</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex-1 flex flex-col hover:shadow-md transition-shadow">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold text-slate-800">Project Work</h3>
<div className="flex items-center gap-1 text-xs text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded font-bold">
<svg className="lucide lucide-trending-down w-3 h-3" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg> 5%
                            </div>
<svg className="lucide lucide-more-vertical w-4 h-4 text-slate-300 ml-auto cursor-pointer hover:text-indigo-600" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
<div className="relative w-48 h-48 mx-auto my-6">

<svg className="transform -rotate-90 w-full h-full drop-shadow-md" viewbox="0 0 100 100">

<circle className="hover:stroke-blue-400 transition-colors" cx="50" cy="50" fill="transparent" r="40" stroke="#3b82f6" stroke-dasharray="70 251" stroke-dashoffset="0" strokeWidth="16"></circle>

<circle className="hover:stroke-rose-400 transition-colors" cx="50" cy="50" fill="transparent" r="40" stroke="#f43f5e" stroke-dasharray="50 251" stroke-dashoffset="-70" strokeWidth="16"></circle>

<circle className="hover:stroke-amber-400 transition-colors" cx="50" cy="50" fill="transparent" r="40" stroke="#f59e0b" stroke-dasharray="90 251" stroke-dashoffset="-120" strokeWidth="16"></circle>

<circle className="hover:stroke-emerald-400 transition-colors" cx="50" cy="50" fill="transparent" r="40" stroke="#10b981" stroke-dasharray="41 251" stroke-dashoffset="-210" strokeWidth="16"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-full w-28 h-28 m-auto shadow-inner border border-slate-50">
<span className="text-3xl font-bold text-slate-800">4</span>
<span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Projects</span>
</div>
</div>
<div className="space-y-3 mt-auto">
<div className="flex items-center justify-between text-xs px-2 py-1 rounded-lg hover:bg-amber-50 transition-colors cursor-default">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-amber-500 rounded-sm shadow-sm"></div>
<span className="text-slate-600 font-medium">Over9k</span>
</div>
<span className="font-bold text-slate-800">44%</span>
</div>
<div className="flex items-center justify-between text-xs px-2 py-1 rounded-lg hover:bg-emerald-50 transition-colors cursor-default">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm shadow-sm"></div>
<span className="text-slate-600 font-medium">MagnumShop</span>
</div>
<span className="font-bold text-slate-800">24%</span>
</div>
<div className="flex items-center justify-between text-xs px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors cursor-default">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-rose-500 rounded-sm shadow-sm"></div>
<span className="text-slate-600 font-medium">Doctor</span>
</div>
<span className="font-bold text-slate-800">18%</span>
</div>
<div className="flex items-center justify-between text-xs px-2 py-1 rounded-lg hover:bg-blue-50 transition-colors cursor-default">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-blue-600 rounded-sm shadow-sm"></div>
<span className="text-slate-600 font-medium">AfterMidnight</span>
</div>
<span className="font-bold text-slate-800">14%</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold text-slate-800">Reminders</h3>
<button className="text-xs text-slate-400 hover:text-indigo-600 flex items-center gap-1 font-medium transition-colors">
                                Manage <svg className="lucide lucide-arrow-right-circle w-3 h-3" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
</button>
</div>
<div className="space-y-4">
<div className="bg-emerald-50/50 p-3 rounded-xl border border-emerald-100 hover:bg-emerald-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">09:30 AM</span>
<div className="flex items-center gap-1">
<span className="text-[10px] text-emerald-600 font-bold uppercase">High</span>
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-sm"></div>
</div>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium group-hover:text-emerald-600/70">Check Test Results</p>
</div>
<div className="bg-rose-50/50 p-3 rounded-xl border border-rose-100 hover:bg-rose-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-bold text-slate-800 group-hover:text-rose-700 transition-colors">02:00 PM</span>
<div className="flex items-center gap-1">
<span className="text-[10px] text-rose-500 font-bold uppercase">Low</span>
<div className="w-1.5 h-1.5 bg-rose-500 rounded-full shadow-sm"></div>
</div>
</div>
<p className="text-[10px] text-slate-400 uppercase tracking-wide font-medium group-hover:text-rose-600/70">Client Presentation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
