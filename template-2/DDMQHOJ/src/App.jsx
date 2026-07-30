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

    // Accordion functionality
    document.querySelectorAll('[data-accordion-btn]').forEach(btn => {
      btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const chevron = this.querySelector('[data-lucide="chevron-down"]');
        const isOpen = !content.classList.contains('hidden');
        
        content.classList.toggle('hidden', isOpen);
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });

    document.querySelectorAll('[data-accordion-btn-dark]').forEach(btn => {
      btn.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const chevron = this.querySelector('[data-lucide="chevron-down"]');
        const isOpen = !content.classList.contains('hidden');
        
        content.classList.toggle('hidden', isOpen);
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });

    // Search functionality
    document.getElementById('searchLight').addEventListener('focus', function() {
      this.parentElement.classList.add('ring-2', 'ring-indigo-500');
    });

    document.getElementById('searchLight').addEventListener('blur', function() {
      this.parentElement.classList.remove('ring-2', 'ring-indigo-500');
    });
  
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
      <iframe className="fixed top-0 w-full h-screen" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63" width="100%"></iframe>

<aside className="relative flex flex-col w-80 h-[800px] backdrop-blur-xl rounded-2xl shadow-xl border overflow-hidden animate-fade-in-left bg-black/80 border-black/20">

<div className="flex items-center justify-between h-20 px-6 border-b animate-fade-in-up delay-100 border-stone-900">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gradient-to-br from-indigo-500 rounded-lg flex items-center justify-center to-red-400">
<svg className="lucide lucide-zap h-4 w-4 stroke-2 text-black" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h1 className="text-lg font-semibold tracking-tight font-sans">Workspace</h1>
<p className="text-xs text-stone-500 font-sans">Premium Plan</p>
</div>
</div>
<div>
<div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
</div>
</div>

<div className="px-6 py-4 animate-fade-in-up delay-200">
<div className="relative">
<div className="absolute left-3 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-search h-4 w-4 text-stone-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="w-full h-10 pl-10 pr-16 border rounded-xl text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all bg-stone-950 border-stone-800" id="searchLight" placeholder="Search or jump to..." type="text" />
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
</div>
</div>
</div>

<nav className="flex-1 px-6 overflow-y-auto custom-scrollbar animate-fade-in-up delay-300">

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xs font-medium text-stone-500 uppercase tracking-wider font-sans">Quick Actions</h2>
<button className="h-5 w-5 rounded-md flex items-center justify-center hover:bg-stone-900">
<svg className="lucide lucide-plus h-3 w-3 text-stone-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="h-10 bg-gradient-to-r from-indigo-500 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02] to-red-400 text-black font-sans">
            New Project
          </button>
<button className="h-10 rounded-lg text-sm font-medium transition-colors bg-stone-900 hover:bg-stone-800 font-sans">
            Import
          </button>
</div>
</div>

<div className="space-y-1 mb-6">
<h2 className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3 font-sans">Navigation</h2>

<a className="group flex items-center gap-3 h-11 px-3 rounded-xl border transition-all duration-200 bg-indigo-950 text-indigo-300 border-indigo-900" href="#">
<div className="h-6 w-6 rounded-lg flex items-center justify-center bg-indigo-900">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<span className="text-sm font-medium font-sans">Dashboard</span>
<div className="ml-auto">
<span className="h-5 px-2 rounded-full text-xs font-medium bg-indigo-900 text-indigo-300 font-sans">4</span>
</div>
</a>

<div>
<button className="group w-full flex items-center gap-3 h-11 px-3 rounded-xl transition-all duration-200 hover:bg-stone-950" data-accordion-btn="">
<div className="h-6 w-6 rounded-lg flex items-center justify-center bg-stone-900">
<svg className="lucide lucide-folder h-4 w-4 text-stone-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<span className="flex-1 text-sm font-medium text-left font-sans">Projects</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform duration-200 text-stone-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="ml-9 mt-2 space-y-1 hidden" data-accordion-content="">
<a className="flex items-center gap-3 h-9 px-3 rounded-lg transition-colors hover:bg-stone-950" href="#">
<div className="h-2 w-2 bg-red-500 rounded-full"></div>
<span className="text-sm text-stone-300 font-sans">Website Redesign</span>
<span className="ml-auto text-xs text-stone-500 font-sans">Active</span>
</a>
<a className="flex items-center gap-3 h-9 px-3 rounded-lg transition-colors hover:bg-stone-950" href="#">
<div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
<span className="text-sm text-stone-300 font-sans">Mobile App</span>
<span className="ml-auto text-xs text-stone-500 font-sans">Review</span>
</a>
<a className="flex items-center gap-3 h-9 px-3 rounded-lg transition-colors hover:bg-stone-950" href="#">
<div className="h-2 w-2 bg-orange-500 rounded-full"></div>
<span className="text-sm text-stone-300 font-sans">API Integration</span>
<span className="ml-auto text-xs text-stone-500 font-sans">Planning</span>
</a>
</div>
</div>

<a className="group flex items-center gap-3 h-11 px-3 rounded-xl transition-all duration-200 hover:bg-stone-950" href="#">
<div className="h-6 w-6 rounded-lg flex items-center justify-center bg-stone-900">
<svg className="lucide lucide-users h-4 w-4 text-stone-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm font-medium font-sans">Team</span>
<div className="ml-auto flex -space-x-1">
<img alt="" className="h-5 w-5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80" />
<img alt="" className="h-5 w-5 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?w=800&q=80" />
<span className="h-5 w-5 rounded-full border-2 flex items-center justify-center text-xs font-medium bg-stone-800 border-black text-stone-400 font-sans">+2</span>
</div>
</a>
<a className="group flex items-center gap-3 h-11 px-3 rounded-xl transition-all duration-200 hover:bg-stone-950" href="#">
<div className="h-6 w-6 rounded-lg flex items-center justify-center bg-stone-900">
<svg className="lucide lucide-calendar h-4 w-4 text-stone-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<span className="text-sm font-medium font-sans">Calendar</span>
<span className="ml-auto h-5 px-2 rounded-full text-xs font-medium bg-red-900 text-red-300 font-sans">2 due</span>
</a>
</div>

<div className="mb-6">
<h2 className="text-xs font-medium text-stone-500 uppercase tracking-wider mb-3 font-sans">Recent Files</h2>
<div className="space-y-2">
<a className="flex items-center gap-3 h-10 px-3 rounded-lg transition-colors hover:bg-stone-950" href="#">
<div className="h-6 w-6 rounded-md flex items-center justify-center bg-orange-900">
<svg className="lucide lucide-file-text h-3.5 w-3.5 text-orange-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate font-sans">Design Specs.pdf</p>
<p className="text-xs text-stone-500 font-sans">2 minutes ago</p>
</div>
</a>
<a className="flex items-center gap-3 h-10 px-3 rounded-lg transition-colors hover:bg-stone-950" href="#">
<div className="h-6 w-6 rounded-md flex items-center justify-center bg-red-900">
<svg className="lucide lucide-table h-3.5 w-3.5 text-red-400" data-lucide="table" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate font-sans">Budget Q4.xlsx</p>
<p className="text-xs text-stone-500 font-sans">1 hour ago</p>
</div>
</a>
</div>
</div>
</nav>

<div className="p-6 border-t animate-fade-in-up delay-300 border-stone-900">
<div className="flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer bg-stone-950 hover:bg-stone-900">
<div className="relative">
<img alt="Sarah Chen" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80" />
<div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-red-500 border-2 rounded-full border-black"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-stone-100 font-sans">Sarah Chen</p>
<p className="text-xs text-stone-500 truncate font-sans">Product Designer</p>
</div>
<svg className="lucide lucide-more-horizontal h-4 w-4 text-stone-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>
</aside>

<aside className="relative flex flex-col w-80 h-[800px] backdrop-blur-xl rounded-2xl shadow-2xl border overflow-hidden animate-fade-in-right bg-orange-100/95 border-orange-300/50 text-stone-900">

<div className="flex items-center justify-between h-20 px-6 border-b animate-fade-in-up delay-100 border-orange-300/50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gradient-to-br from-pink-500 rounded-lg flex items-center justify-center to-orange-400">
<svg className="lucide lucide-shield h-4 w-4 stroke-2 text-black" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="">
<h1 className="text-lg font-semibold tracking-tight font-sans">Control Panel</h1>
<p className="text-xs text-stone-600 font-sans">Infrastructure</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full animate-pulse bg-red-600"></div>
<span className="text-xs text-stone-600 font-sans">Online</span>
</div>
</div>

<div className="px-6 py-4 animate-fade-in-up delay-200">
<div className="grid grid-cols-3 gap-3">
<div className="rounded-lg p-3 border bg-orange-200/50 border-orange-300/50">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-cpu h-3.5 w-3.5 text-pink-600" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-xs text-stone-600 font-sans">CPU</span>
</div>
<p className="text-lg font-semibold text-black font-sans">23%</p>
</div>
<div className="rounded-lg p-3 border bg-orange-200/50 border-orange-300/50">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-hard-drive h-3.5 w-3.5 text-red-600" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
<span className="text-xs text-stone-600 font-sans">Memory</span>
</div>
<p className="text-lg font-semibold text-black font-sans">67%</p>
</div>
<div className="rounded-lg p-3 border bg-orange-200/50 border-orange-300/50">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-activity h-3.5 w-3.5 text-red-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs text-stone-600 font-sans">Load</span>
</div>
<p className="text-lg font-semibold text-black font-sans">1.2</p>
</div>
</div>
</div>

<nav className="flex-1 px-6 overflow-y-auto custom-scrollbar custom-scrollbar-dark animate-fade-in-up delay-300">

<div className="space-y-1 mb-6">
<h2 className="text-xs font-medium uppercase tracking-wider mb-3 text-stone-600 font-sans">System</h2>
<a className="group flex items-center gap-3 h-11 px-3 rounded-xl bg-pink-500/10 border border-pink-500/20 transition-all duration-200 text-pink-600" href="#">
<div className="h-6 w-6 bg-pink-500/20 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-server h-4 w-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<span className="text-sm font-medium font-sans">Dashboard</span>
<div className="ml-auto">
<div className="h-2 w-2 rounded-full animate-pulse bg-pink-600"></div>
</div>
</a>

<div className="">
<button className="group w-full flex items-center gap-3 h-11 px-3 rounded-xl transition-all duration-200 hover:bg-orange-200/50" data-accordion-btn-dark="">
<div className="h-6 w-6 rounded-lg flex items-center justify-center bg-orange-300">
<svg className="lucide lucide-activity h-4 w-4 text-stone-700" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="flex-1 text-sm font-medium text-left font-sans">Monitoring</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform duration-200 text-stone-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="ml-9 mt-2 space-y-1 hidden" data-accordion-content-dark="">
<a className="flex items-center gap-3 h-9 px-3 rounded-lg transition-colors hover:bg-orange-200/50" href="#">
<svg className="lucide lucide-database h-3.5 w-3.5 text-red-600" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="text-sm text-stone-700 font-sans">Databases</span>
<span className="ml-auto text-xs text-red-600 font-sans">Healthy</span>
</a>
<a className="flex items-center gap-3 h-9 px-3 rounded-lg transition-colors hover:bg-orange-200/50" href="#">
<svg className="lucide lucide-globe h-3.5 w-3.5 text-orange-600" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm text-stone-700 font-sans">Network</span>
<span className="ml-auto text-xs text-yellow-600 font-sans">Warning</span>
</a>
<a className="flex items-center gap-3 h-9 px-3 rounded-lg transition-colors hover:bg-orange-200/50 bg-orange-200/30" href="#">
<svg className="lucide lucide-file-text h-3.5 w-3.5 text-pink-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-medium text-stone-800 font-sans">Logs</span>
<span className="ml-auto text-xs text-red-600 font-sans">3 Errors</span>
</a>
</div>
</div>
<a className="group flex items-center gap-3 h-11 px-3 rounded-xl transition-all duration-200 hover:bg-orange-200/50" href="#">
<div className="h-6 w-6 rounded-lg flex items-center justify-center bg-orange-300">
<svg className="lucide lucide-settings h-4 w-4 text-stone-700" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-sm font-medium font-sans">Configuration</span>
</a>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xs font-medium uppercase tracking-wider text-stone-600 font-sans">Active Alerts</h2>
<span className="h-5 px-2 bg-red-500/20 rounded-full text-xs font-medium text-red-600 font-sans">3</span>
</div>
<div className="space-y-2">
<div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-alert-triangle h-4 w-4 text-red-600" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="text-sm font-medium text-red-600 font-sans">Critical</span>
</div>
<p className="text-xs text-stone-700 font-sans">Database connection timeout</p>
<p className="text-xs text-stone-500 mt-1 font-sans">2 minutes ago</p>
</div>
<div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-alert-circle h-4 w-4 text-yellow-600" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="text-sm font-medium text-yellow-600 font-sans">Warning</span>
</div>
<p className="text-xs text-stone-700 font-sans">High memory usage detected</p>
<p className="text-xs text-stone-500 mt-1 font-sans">5 minutes ago</p>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-xs font-medium uppercase tracking-wider mb-3 text-stone-600 font-sans">Quick Actions</h2>
<div className="space-y-2">
<button className="w-full h-10 bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg from-pink-400 to-orange-400 font-sans">
            Deploy Latest
          </button>
<button className="w-full h-10 border rounded-lg text-sm font-medium transition-colors bg-orange-200 hover:bg-orange-300 border-orange-400 font-sans">
            Restart Services
          </button>
</div>
</div>
</nav>

<div className="p-6 border-t animate-fade-in-up delay-300 border-orange-300/50">
<div className="flex items-center gap-3 p-3 rounded-xl transition-colors cursor-pointer bg-orange-200/50 hover:bg-orange-200">
<div className="relative">
<img alt="Alex Rivera" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=800&q=80" />
<div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 border-2 rounded-full bg-pink-600 border-orange-100"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate text-black font-sans">Alex Rivera</p>
<p className="text-xs truncate text-stone-600 font-sans">System Administrator</p>
</div>
<svg className="lucide lucide-log-out h-4 w-4 text-stone-600 hover:text-stone-700" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</div>
</div>
</aside>




    </>
  );
}
