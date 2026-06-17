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
      

<nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight text-gray-900 uppercase font-sans" style={{}}>Geenius</span>
</div>

<button className="p-2 rounded-md text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-y-0 right-0 w-72 bg-white shadow-2xl border-l border-gray-200 transform translate-x-0 z-50 flex flex-col" style={{position: 'fixed', right: '0px', top: '0px', bottom: '0px', display: 'none'}}>

<div className="p-5 border-b border-gray-100 flex justify-between items-center">
<span className="text-sm font-medium text-gray-900 font-sans" style={{}}>Menu</span>
<button><svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="flex-1 py-4 px-2 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 font-sans" href="#" style={{}}>
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 font-sans" href="#" style={{}}>
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg> Settings
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-indigo-600 rounded-md hover:bg-indigo-50 font-sans" href="#" style={{}}>
<svg className="lucide lucide-key w-4 h-4" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg> Use Token
            </a>
</div>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 font-sans" href="#" style={{}}>
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Logout
            </a>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-16">

<section className="">
<div className="mb-6">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 font-sans" style={{}}>View 1</h2>
<h1 className="text-lg font-semibold text-gray-900 tracking-tight font-sans" style={{}}>Student Dashboard</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
<div className="flex flex-col h-full justify-between">
<div className="mb-4">
<div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mb-3 text-gray-500">
<svg className="lucide lucide-box w-4 h-4" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight font-sans" style={{}}>Chemistry 101</h3>
<p className="text-sm text-gray-500 mt-1 font-sans" style={{}}>Fall Semester 2025</p>
</div>
<button className="hover:bg-gray-800 transition-colors flex gap-2 text-xs font-medium text-white bg-gray-900 w-full rounded-lg pt-2 pb-2 gap-x-2 gap-y-2 items-center justify-center">
                            Go <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-gray-300 transition-all">
<div className="flex flex-col h-full justify-between">
<div className="mb-4">
<div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 text-indigo-600">
<svg className="lucide lucide-pen-tool w-4 h-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight font-sans" style={{}}>Creative Writing</h3>
<p className="text-sm text-gray-500 mt-1 font-sans" style={{}}>Workshop Group A</p>
</div>
<button className="w-full bg-white border border-gray-200 text-gray-900 text-xs font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors font-sans" style={{}}>
                            Go
                        </button>
</div>
</div>
</div>
</section>
<hr className="border-gray-200 border-dashed"/>

<section className="">
<div className="mb-6">
<h2 className="uppercase text-xs font-semibold text-gray-400 tracking-wider mb-1">View 2</h2>
<h1 className="text-lg font-semibold text-gray-900 tracking-tight font-sans" style={{}}>Learning Space: Chemistry 101</h1>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

<div className="border-b border-gray-100 px-2 pt-2">
<nav aria-label="Tabs" className="flex space-x-6">
<a className="border-b-2 border-gray-900 text-gray-900 whitespace-nowrap py-3 px-1 text-sm font-medium font-sans" href="#" style={{}}>
                            Stream
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 text-sm font-medium font-sans" href="#" style={{}}>
                            Learning
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 text-sm font-medium font-sans" href="#" style={{}}>
                            Members
                        </a>
<a className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-3 px-1 text-sm font-medium font-sans" href="#" style={{}}>
                            Documents
                        </a>
</nav>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gray-50/50 pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">

<div className="lg:col-span-4 space-y-6">

<div className="bg-white border-gray-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-gray-900 font-sans" style={{}}>Review Due</h3>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 font-sans" href="#" style={{}}>See All</a>
</div>
<div className="flex gap-2 mb-4">
<div className="flex-1 bg-red-50 rounded p-2 text-center">
<div className="text-xs font-medium text-red-600 font-sans" style={{}}>Short</div>
<div className="text-lg font-semibold text-red-700 tracking-tight font-sans" style={{}}>12</div>
</div>
<div className="flex-1 bg-amber-50 rounded p-2 text-center">
<div className="text-xs font-medium text-amber-600 font-sans" style={{}}>Med</div>
<div className="text-lg font-semibold text-amber-700 tracking-tight font-sans" style={{}}>5</div>
</div>
<div className="flex-1 bg-emerald-50 rounded p-2 text-center">
<div className="text-xs font-medium text-emerald-600 font-sans" style={{}}>Long</div>
<div className="text-lg font-semibold text-emerald-700 tracking-tight font-sans" style={{}}>24</div>
</div>
</div>
<button className="hover:bg-gray-800 transition-colors text-xs font-medium text-white bg-gray-900 w-full rounded-lg pt-2 pb-2">
                                Review All Key Points
                            </button>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans" style={{}}>To-Do</h3>
<ul className="space-y-3">

<li className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
<div className="mt-0.5 text-red-500">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-tight font-sans" style={{}}>Fix Lab Report Draft</p>
<span className="text-xs text-red-500 font-medium font-sans" style={{}}>Rework Required</span>
</div>
</li>

<li className="flex items-start gap-3">
<div className="mt-0.5 text-gray-400">
<svg className="lucide lucide-circle w-4 h-4" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="">
<p className="text-sm font-medium text-gray-900 leading-tight font-sans" style={{}}>Read Chapter 4</p>
<span className="text-xs text-gray-400 font-sans" style={{}}>Expectation</span>
</div>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-8 space-y-6">

<div className="flex gap-2 overflow-x-auto pb-2">
<div className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
<svg className="lucide lucide-file-text w-3.5 h-3.5 text-blue-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-xs font-medium text-gray-700 font-sans" style={{}}>Atomic Theory Blog</span>
</div>
<div className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
<svg className="lucide lucide-message-square w-3.5 h-3.5 text-purple-500" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-xs font-medium text-gray-700 font-sans" style={{}}>Project Discussion</span>
</div>
</div>

<div className="space-y-4">

<div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 bg-orange-50 rounded text-orange-600">
<svg className="lucide lucide-megaphone w-4 h-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div className="text-xs text-gray-500 font-medium font-sans" style={{}}>Announcement • 2h ago</div>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight mb-1 font-sans" style={{}}>Midterm Schedule Update</h3>
<p className="text-sm text-gray-600 leading-relaxed font-sans" style={{}}>The midterm exam has been moved to Friday. Please review the updated study guide attached below.</p>
</div>

<div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 bg-blue-50 rounded text-blue-600">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="text-xs text-gray-500 font-medium font-sans" style={{}}>Article • Yesterday</div>
</div>
<h3 className="text-base font-semibold text-gray-900 tracking-tight mb-1 font-sans" style={{}}>Understanding Covalent Bonds</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-3 font-sans" style={{}}>A deep dive into how electrons are shared between atoms...</p>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 font-sans" style={{}}>
                                    Read More <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 font-sans" style={{}}>Tab Preview: Learning (Adventures List)</h3>
<div className="grid gap-3">
<div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer flex items-center justify-between">
<div>
<h4 className="text-sm font-semibold text-gray-900 font-sans" style={{}}>The Periodic Table Adventure</h4>
<p className="text-xs text-gray-500 mt-0.5 font-sans" style={{}}>Starts: Jan 15 • Author: Dr. Smith</p>
</div>
<div className="p-2 text-gray-400">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer flex items-center justify-between">
<div>
<h4 className="text-sm font-semibold text-gray-900 font-sans" style={{}}>Chemical Reactions Lab</h4>
<p className="text-xs text-gray-500 mt-0.5 font-sans" style={{}}>Starts: Feb 02 • Author: Dr. Smith</p>
</div>
<div className="p-2 text-gray-400">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 font-sans" style={{}}>Tab Preview: Members</h3>
<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-200 bg-gray-50/50">
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider font-sans" style={{}}>Name</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider font-sans" style={{}}>Username</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider font-sans" style={{}}>Email</th>
<th className="py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider font-sans" style={{}}>Role</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-3 px-4 text-sm font-medium text-gray-900 font-sans" style={{}}>Alice Johnson</td>
<td className="py-3 px-4 text-sm text-gray-500 font-sans" style={{}}>ajohnson</td>
<td className="py-3 px-4 text-sm text-gray-500 font-sans" style={{}}>alice@school.edu</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 font-sans" style={{}}>Student</span></td>
</tr>
<tr className="hover:bg-gray-50 transition-colors">
<td className="py-3 px-4 text-sm font-medium text-gray-900 font-sans" style={{}}>Bob Smith</td>
<td className="py-3 px-4 text-sm text-gray-500 font-sans" style={{}}>bsmith</td>
<td className="py-3 px-4 text-sm text-gray-500 font-sans" style={{}}>bob@school.edu</td>
<td className="py-3 px-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 font-sans" style={{}}>Student</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<hr className="border-gray-200 border-dashed"/>

<section>
<div className="mb-6">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1 font-sans" style={{}}>View 3</h2>
<h1 className="text-lg font-semibold text-gray-900 tracking-tight font-sans" style={{}}>Adventure Detail: The Periodic Table</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="flex items-start justify-between mb-6">
<div>
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide font-sans" style={{}}>Itinerary</span>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight mt-1 font-sans" style={{}}>Understanding Elements</h2>
</div>
<div className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded font-sans" style={{}}>Target: Mar 15</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-1">
<p className="text-xs font-medium text-gray-400 uppercase font-sans" style={{}}>Big Idea</p>
<p className="text-sm text-gray-800 font-sans" style={{}}>Everything is made of atoms.</p>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-gray-400 uppercase font-sans" style={{}}>Driving Question</p>
<p className="text-sm text-gray-800 font-sans" style={{}}>How does structure determine property?</p>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-100">
<p className="text-xs font-medium text-gray-400 uppercase mb-1 font-sans" style={{}}>Scenario</p>
<p className="text-sm text-gray-600 leading-relaxed font-sans" style={{}}>You are a materials scientist tasked with creating a new alloy...</p>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans" style={{}}>Steps</h3>
<div className="space-y-3">

<div className="group flex items-center justify-between bg-white border border-gray-200 border-l-4 border-l-emerald-500 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-2 bg-gray-50 rounded-full text-gray-500">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 font-sans" style={{}}>Introductory Video</h4>
<span className="text-xs text-emerald-600 font-medium font-sans" style={{}}>Complete</span>
</div>
</div>
<svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>

<div className="group flex items-center justify-between bg-white border border-gray-200 border-l-4 border-l-red-500 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-2 bg-gray-50 rounded-full text-gray-500">
<svg className="lucide lucide-pen-tool w-4 h-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 font-sans" style={{}}>Draft Initial Hypothesis</h4>
<span className="text-xs text-red-500 font-medium font-sans" style={{}}>Rework Required</span>
</div>
</div>
<svg className="lucide lucide-target w-4 h-4 text-red-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>

<div className="group flex items-center justify-between bg-white border border-gray-200 border-l-4 border-l-amber-400 rounded-lg p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="p-2 bg-gray-50 rounded-full text-gray-500">
<svg className="lucide lucide-list-checks w-4 h-4" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 font-sans" style={{}}>Safety Checklist</h4>
<span className="text-xs text-amber-500 font-medium font-sans" style={{}}>Waiting for Approval</span>
</div>
</div>
<svg className="lucide lucide-clock w-4 h-4 text-amber-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-gray-900 font-sans" style={{}}>My Work</h3>
<button className="text-xs font-medium bg-gray-900 text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors font-sans" style={{}}>
                                + Work
                            </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 border border-gray-200 rounded-lg flex items-center gap-3 bg-gray-50/50">
<svg className="lucide lucide-file w-4 h-4 text-gray-400" data-lucide="file" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path></svg>
<span className="text-sm text-gray-700 truncate font-sans" style={{}}>Lab_Report_Draft_v2.pdf</span>
</div>
<div className="p-3 border border-gray-200 rounded-lg flex items-center gap-3 bg-gray-50/50">
<svg className="lucide lucide-image w-4 h-4 text-gray-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="text-sm text-gray-700 truncate font-sans" style={{}}>Diagram_Sketch.png</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans" style={{}}>Self Assessment</h3>
<div className="space-y-4">
<div>
<p className="text-xs text-gray-600 mb-2 font-sans" style={{}}>I can identify noble gases.</p>
<div className="flex gap-1">

<svg className="w-5 h-5 text-yellow-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-yellow-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-yellow-400 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-gray-200 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 text-gray-200 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
</div>
</div>

<div className="mt-4 pt-4 border-t border-gray-100">
<button className="w-full border border-gray-200 text-gray-600 text-xs font-medium py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-map w-3 h-3" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Open Learning Map
                            </button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans" style={{}}>Expectations</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 group">
<input checked="" className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<div className="flex-1">
<p className="text-sm text-gray-600 line-through decoration-gray-400 font-sans" style={{}}>Cite 3 sources</p>
<p className="text-xs text-green-600 font-medium mt-0.5 font-sans" style={{}}>Approved</p>
</div>
<button className="text-gray-400 hover:text-gray-600"><svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></button>
</li>
<li className="flex items-start gap-2 group">
<input className="mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<div className="flex-1">
<p className="text-sm text-gray-900 font-sans" style={{}}>Use correct formatting</p>
</div>
<button className="text-gray-400 hover:text-gray-600"><svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg></button>
</li>
</ul>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans" style={{}}>Key Points</h3>
<div className="space-y-2">
<div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span className="text-sm text-gray-700 font-sans" style={{}}>Valence Electrons</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
<input className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" type="checkbox"/>
<span className="text-sm text-gray-700 font-sans" style={{}}>Ionic vs Covalent</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 mb-3 font-sans" style={{}}>Resources</h3>
<ul className="space-y-2">
<li>
<a className="flex items-center gap-2 text-sm text-indigo-600 hover:underline font-sans" href="#" style={{}}>
<svg className="lucide lucide-link w-3 h-3" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> Periodic Table Interactive
                                </a>
</li>
<li>
<a className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 font-sans" href="#" style={{}}>
<svg className="lucide lucide-file-text w-3 h-3" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Lab Safety Guide
                                </a>
</li>
</ul>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
