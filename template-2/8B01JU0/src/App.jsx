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



  // Initialize Lucide icons
  lucide.createIcons();
  
  // Add subtle animations to enhance the presentation
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.hover-lift');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
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
      

<aside className="sidebar beautiful-shadow overflow-hidden bg-slate-900 border border-slate-800 rounded-2xl">

<div className="p-6 border-b border-slate-800">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h1 className="text-lg font-semibold text-white tracking-tight">FlowSync</h1>
<p className="text-xs text-slate-400">Integration Hub</p>
</div>
</div>
<div className="relative">
<img alt="User" className="w-10 h-10 object-cover border-slate-700 border-2 rounded-xl" src="https://images.unsplash.com/photo-1460904577954-8fadb262612c?w=1080&q=80" />
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-slate-900"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800/50 rounded-lg p-3 hover-lift hover:bg-slate-800/70 transition-all duration-300">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-zap w-3 h-3 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs text-slate-400">Active</span>
</div>
<div className="text-lg font-semibold text-white">12</div>
</div>
<div className="bg-slate-800/50 rounded-lg p-3 hover-lift hover:bg-slate-800/70 transition-all duration-300">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-clock w-3 h-3 text-emerald-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-xs text-slate-400">Saved</span>
</div>
<div className="text-lg font-semibold text-white">31h</div>
</div>
</div>
</div>

<nav className="p-4 space-y-2">
<div className="mb-4">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Workspace</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-medium" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span>Dashboard</span>
<span className="ml-auto text-xs bg-indigo-500 px-2 py-0.5 rounded-full">Live</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-all duration-200" href="#">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span>Integrations</span>
<span className="ml-auto text-xs text-slate-500">8</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-all duration-200" href="#">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span>Workflows</span>
<span className="ml-auto text-xs text-slate-500">24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-lg transition-all duration-200" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Team</span>
</a>
</div>
</div>

<div className="mb-4">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Connected Apps</h3>
<div className="space-y-2">
<div className="flex items-center gap-3 px-3 py-2 bg-slate-800/30 rounded-lg border border-slate-800">
<div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
<svg className="lucide lucide-hash w-3 h-3 text-white" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">Slack</p>
<p className="text-xs text-slate-400">3 channels</p>
</div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800/30 rounded-lg transition-all duration-200">
<div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
<svg className="lucide lucide-file-text w-3 h-3 text-white" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">Notion</p>
<p className="text-xs text-slate-400">12 pages</p>
</div>
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-800/30 rounded-lg transition-all duration-200">
<div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
<svg className="lucide lucide-git-branch w-3 h-3 text-white" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white">GitHub</p>
<p className="text-xs text-slate-400">5 repos</p>
</div>
<div className="w-2 h-2 bg-orange-400 rounded-full"></div>
</div>
</div>
</div>

<div>
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-lg px-4 py-3 font-medium transition-all duration-300 hover-lift">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add Integration</span>
</button>
</div>
</nav>

<div className="mt-auto p-4 border-t border-slate-800">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Status: All systems operational</span>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
<span>Online</span>
</div>
</div>
</div>
</aside>

<aside className="sidebar beautiful-shadow overflow-hidden bg-white border border-slate-200 rounded-2xl">

<div className="p-6 border-b border-slate-200">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h1 className="text-lg font-semibold text-slate-900 tracking-tight">FlowSync</h1>
<p className="text-xs text-slate-500">Integration Hub</p>
</div>
</div>
<div className="relative">
<img alt="User" className="w-10 h-10 object-cover border-slate-200 border-2 rounded-xl" src="https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=1080&q=80" />
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-50 rounded-lg p-3 hover-lift hover:bg-slate-100 transition-all duration-300 border border-slate-100" style={{transform: `translateY(0px)`}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-zap w-3 h-3 text-indigo-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs text-slate-600">Active</span>
</div>
<div className="text-lg font-semibold text-slate-900">12</div>
</div>
<div className="bg-slate-50 rounded-lg p-3 hover-lift hover:bg-slate-100 transition-all duration-300 border border-slate-100" style={{transform: `translateY(0px)`}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-clock w-3 h-3 text-emerald-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-xs text-slate-600">Saved</span>
</div>
<div className="text-lg font-semibold text-slate-900">31h</div>
</div>
</div>
</div>

<nav className="p-4 space-y-2">
<div className="mb-4">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Workspace</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg font-medium shadow-sm" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span>Dashboard</span>
<span className="ml-auto text-xs bg-slate-700 px-2 py-0.5 rounded-full">Live</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200" href="#">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span>Integrations</span>
<span className="ml-auto text-xs text-slate-500">8</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200" href="#">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span>Workflows</span>
<span className="ml-auto text-xs text-slate-500">24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-slate-700 hover:bg-slate-100 hover:text-slate-900 rounded-lg transition-all duration-200" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Team</span>
</a>
</div>
</div>

<div className="mb-4">
<h3 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">Connected Apps</h3>
<div className="space-y-2">
<div className="flex items-center gap-3 px-3 py-2 bg-green-50 rounded-lg border border-green-100">
<div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
<svg className="lucide lucide-hash w-3 h-3 text-white" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="9" y2="9"></line><line x1="4" x2="20" y1="15" y2="15"></line><line x1="10" x2="8" y1="3" y2="21"></line><line x1="16" x2="14" y1="3" y2="21"></line></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900">Slack</p>
<p className="text-xs text-slate-600">3 channels</p>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg transition-all duration-200">
<div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
<svg className="lucide lucide-file-text w-3 h-3 text-white" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900">Notion</p>
<p className="text-xs text-slate-600">12 pages</p>
</div>
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg transition-all duration-200">
<div className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
<svg className="lucide lucide-git-branch w-3 h-3 text-white" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900">GitHub</p>
<p className="text-xs text-slate-600">5 repos</p>
</div>
<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
</div>
</div>
</div>

<div>
<button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-lg px-4 py-3 font-medium transition-all duration-300 hover-lift shadow-sm">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add Integration</span>
</button>
</div>
</nav>

<div className="mt-auto p-4 border-t border-slate-200">
<div className="flex items-center justify-between text-xs text-slate-600">
<span>Status: All systems operational</span>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
<span>Online</span>
</div>
</div>
</div>
</aside>


    </>
  );
}
