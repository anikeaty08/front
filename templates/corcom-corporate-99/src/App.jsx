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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<aside className="w-64 bg-[#f8f9fb] flex flex-col flex-shrink-0 h-full border-r border-zinc-200 overflow-y-auto">
<div className="p-6 pb-2">
<h1 className="text-2xl font-semibold tracking-tight">CORCOM</h1>
<p className="text-base text-zinc-500">Corp Community</p>
</div>
<nav className="flex-1 px-4 py-4 space-y-8">

<div>
<h2 className="px-2 text-sm font-medium text-zinc-400 mb-2">Community</h2>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
                            Dashboard
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base bg-zinc-900 text-white shadow-sm" href="#">
<i className="w-5 h-5 text-zinc-300" data-lucide="users" strokeWidth="1.5"></i>
                            Users
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="help-circle" strokeWidth="1.5"></i>
                            Surveys
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="calendar" strokeWidth="1.5"></i>
                            Events
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="guitar" strokeWidth="1.5"></i>
                            Clubs
                        </a>
</li>
</ul>
</div>

<div>
<h2 className="px-2 text-sm font-medium text-zinc-400 mb-2">Settings</h2>
<ul className="space-y-1">
<li>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-zinc-500" data-lucide="component" strokeWidth="1.5"></i>
                                System Elements
                            </div>
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="user-cog" strokeWidth="1.5"></i>
                            User Roles
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="tag" strokeWidth="1.5"></i>
                            Requests and Resources
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="folder-video" strokeWidth="1.5"></i>
                            Media Files
                        </a>
</li>
<li>
<a className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-zinc-500" data-lucide="database" strokeWidth="1.5"></i>
                                Storage
                            </div>
<i className="w-4 h-4 text-zinc-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
</li>
</ul>
</div>

<div>
<h2 className="px-2 text-sm font-medium text-zinc-400 mb-2">Help</h2>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="headphones" strokeWidth="1.5"></i>
                            Technical Support
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="flag" strokeWidth="1.5"></i>
                            Inquiries
                        </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="file-text" strokeWidth="1.5"></i>
                            Documentation
                        </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#f4f5f7]">

<header className="h-20 bg-white/50 backdrop-blur-sm border-b border-zinc-200/50 flex items-center justify-between px-8 flex-shrink-0">

<div className="relative w-96">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm" placeholder="Search" type="text"/>
</div>

<div className="flex items-center gap-4">
<button className="flex items-center bg-zinc-900 text-white rounded-full pl-4 pr-2 py-2 gap-2 hover:bg-zinc-800 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="plus" strokeWidth="2"></i>
<span className="text-base font-medium pr-2 border-r border-zinc-700">Add</span>
<i className="w-4 h-4 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-2 border-r border-zinc-200 pr-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors relative">
<i className="w-5 h-5 text-zinc-600" data-lucide="bell" strokeWidth="1.5"></i>
<span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 transition-colors">
<i className="w-5 h-5 text-zinc-600" data-lucide="settings" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-3 cursor-pointer pl-2">
<img alt="Admin" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=11"/>
<div className="flex flex-col">
<span className="text-base font-medium text-zinc-900">Derek Dalton</span>
<span className="text-sm text-zinc-500">Superadmin</span>
</div>
<i className="w-4 h-4 text-zinc-400 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="bg-white rounded-2xl p-4 flex items-center gap-2 text-base text-zinc-500 border border-zinc-200/60 shadow-sm">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
<span>Users</span>
<span className="text-zinc-300">/</span>
<span className="text-zinc-900 font-medium tracking-tight">Smith John</span>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-4 flex flex-col gap-6">

<div className="bg-white rounded-[1.5rem] border border-zinc-200/60 shadow-sm p-6 flex flex-col">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50">
<i className="w-5 h-5 text-zinc-600" data-lucide="user" strokeWidth="1.5"></i>
</div>
<h2 className="text-lg font-medium text-zinc-900">Profile</h2>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500">
<i className="w-4 h-4" data-lucide="pencil" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900">Smith John</h3>
<div className="flex items-center gap-2 text-base text-zinc-500 bg-zinc-50 px-2.5 py-1 rounded-full border border-zinc-200/60">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    Online
                                </div>
</div>

<div className="mb-6 rounded-2xl overflow-hidden bg-zinc-100 aspect-[4/3] relative shadow-sm border border-zinc-200/50">
<img alt="Smith John" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="space-y-5">

<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
<span className="text-zinc-500">Lives in:</span> France 🇫🇷
                                    </div>
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
                                        Paris
                                    </div>
</div>

<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
<span className="text-zinc-500">Age:</span> 28
                                    </div>
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
<span className="text-zinc-500">Marital status</span> Married 💍
                                    </div>
</div>

<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
<span className="text-zinc-500">Gender:</span> Male ♂️
                                    </div>
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
<span className="text-zinc-500">Hometown:</span> Budva
                                    </div>
</div>

<div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Children</h4>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
                                            👶 Alex, 8 years old
                                        </div>
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
                                            👧 Lily, 12 years old
                                        </div>
</div>
</div>

<div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Hobbies</h4>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
                                            🏄‍♂️ Surfing
                                        </div>
<div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700">
                                            ⛵ Sailing
                                        </div>
</div>
</div>

<div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Social Networks</h4>
<div className="flex flex-wrap gap-2">
<a className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-pink-500" data-lucide="instagram" strokeWidth="2"></i>
                                            Instagram
                                        </a>
<a className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200 bg-zinc-50 text-base text-zinc-700 hover:bg-zinc-100 transition-colors" href="#">
<i className="w-4 h-4 text-blue-600" data-lucide="facebook" strokeWidth="2"></i>
                                            Facebook
                                        </a>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[1.5rem] border border-zinc-200/60 shadow-sm p-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50">
<i className="w-5 h-5 text-zinc-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h2 className="text-lg font-medium text-zinc-900">Tags</h2>
</div>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500">
<i className="w-4 h-4" data-lucide="pencil" strokeWidth="1.5"></i>
</button>
<button className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="xl:col-span-8 flex flex-col gap-6">

<div className="bg-white rounded-[1.5rem] border border-zinc-200/60 shadow-sm p-8">

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50 shadow-sm">
<i className="w-5 h-5 text-zinc-600" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div>
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Main Information</h2>
<div className="flex items-center gap-1.5 text-base text-zinc-500 mt-0.5">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle-2" strokeWidth="2"></i>
                                            Status in the System: Active
                                        </div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500 shadow-sm">
<i className="w-4 h-4" data-lucide="pencil" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500 shadow-sm">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="space-y-6">

<div className="flex gap-4 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Primary role</h3>
<div className="flex items-center gap-1.5 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="briefcase" strokeWidth="1.5"></i>
                                            Employee
                                        </div>
</div>
</div>

<div className="flex gap-4 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="users-2" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Employee group</h3>
<p className="text-base text-zinc-500">Main Corporate Departments | Active</p>
</div>
</div>

<div className="flex gap-4 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Clubs</h3>
<p className="text-base text-zinc-500">
                                            Oratory <span className="text-zinc-300 px-1">/</span> Paddle UAE <span className="text-zinc-300 px-1">/</span> Martial arts
                                        </p>
</div>
</div>

<div className="flex gap-4 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div className="flex-1 flex items-start justify-between">
<div>
<h3 className="text-base font-medium text-zinc-900 mb-2">Club's achieves</h3>
<div className="flex items-center gap-4 text-base text-zinc-500">
<span className="flex items-center gap-1.5"><span className="text-yellow-500">⭐</span> Leader - Oratory</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-zinc-400" data-lucide="sparkles" strokeWidth="1.5"></i> Organizer - Paddle UAE</span>
</div>
</div>
<a className="text-base text-zinc-500 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 transition-colors" href="#">Show statistics</a>
</div>
</div>

<div className="flex gap-4 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="contact-2" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Curator</h3>
<div className="flex items-center gap-1.5 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
                                            Victor Kim
                                        </div>
</div>
</div>

<div className="flex gap-4 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="user-cog" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Administrator</h3>
<div className="flex items-center gap-1.5 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
                                            Petr Jansky
                                        </div>
</div>
</div>

<div className="grid grid-cols-2 gap-6 pb-6 border-b border-zinc-100">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Visibility in the system</h3>
<div className="flex items-center gap-1.5 text-base text-zinc-500">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle-2" strokeWidth="2"></i>
                                                Visible to all
                                            </div>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Filled by user</h3>
<div className="flex items-center gap-1.5 text-base text-zinc-500">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle-2" strokeWidth="2"></i>
                                                Yes
                                            </div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="calendar-plus" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Date of joining the club</h3>
<p className="text-base text-zinc-500">03/11/2025 18:51</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white flex-shrink-0 text-zinc-500 shadow-sm">
<i className="w-5 h-5" data-lucide="calendar-x" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Deactivation date</h3>
<p className="text-base text-zinc-400">None</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[1.5rem] border border-zinc-200/60 shadow-sm p-8">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center bg-zinc-50 shadow-sm">
<i className="w-5 h-5 text-zinc-600" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Department Info</h2>
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500 shadow-sm">
<i className="w-4 h-4" data-lucide="pencil" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors text-zinc-500 shadow-sm">
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex items-start justify-between">
<div className="space-y-2">
<h3 className="text-base font-medium text-zinc-900">Advisor at Umbrella Corp.</h3>
<div className="flex items-center gap-2 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
                                        2000 - Present
                                    </div>
<div className="flex items-center gap-2 text-base text-zinc-500">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                                        Geography: Worldwide
                                    </div>
</div>
<a className="text-base text-blue-600 hover:text-blue-700 underline decoration-blue-200 underline-offset-4 transition-colors" href="#">umbrellacorp.com</a>
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
