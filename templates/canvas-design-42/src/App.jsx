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
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b', // Custom darker background
}
},
animation: {
'spin-slow': 'spin 3s linear infinite',
'bounce-subtle': 'bounce-subtle 2s infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'dash': 'dash 1.5s ease-in-out infinite',
},
keyframes: {
'bounce-subtle': {
'0%, 100%': { transform: 'translateY(-2%)' },
'50%': { transform: 'translateY(0)' },
},
dash: {
'0%': { strokeDasharray: '1, 150', strokeDashoffset: '0' },
'50%': { strokeDasharray: '90, 150', strokeDashoffset: '-35' },
'100%': { strokeDasharray: '90, 150', strokeDashoffset: '-124' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple Theme Toggle Simulation (click logo)
        document.querySelector('.w-6.h-6').addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
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
      

<div className="flex min-h-screen">

<aside className="w-64 fixed h-full border-r border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm hidden lg:flex flex-col z-20">
<div className="p-6">
<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 rounded-md bg-zinc-900 dark:bg-white flex items-center justify-center">
<span className="text-white dark:text-zinc-900 font-bold text-xs font-sans">C</span>
</div>
<span className="font-semibold tracking-tight text-sm font-sans">Canvas System</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors group font-sans" href="#icons">
<svg className="lucide lucide-grid w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
                        Iconography
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors group font-sans" href="#dataviz">
<svg className="lucide lucide-bar-chart-2 w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
                        Data Visualization
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors group font-sans" href="#interactions">
<svg className="lucide lucide-zap w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        Micro-interactions
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors group font-sans" href="#decorative">
<svg className="lucide lucide-shapes w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
                        Shapes &amp; Patterns
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md transition-colors group font-sans" href="#components">
<svg className="lucide lucide-layers w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                        UI Components
                    </a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-zinc-200 dark:border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-400 dark:from-zinc-700 dark:to-zinc-600"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900 dark:text-zinc-100 font-sans">Design Team</span>
<span className="text-xs text-zinc-500 font-sans" style={{}}>v2.4.0</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 relative">

<header className="sticky top-0 z-10 glass px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-zinc-500">
<span className="text-sm font-medium text-zinc-900 dark:text-white font-sans" style={{}}>Documentation</span>
<span className="text-zinc-300 dark:text-zinc-700 font-sans">/</span>
<span className="text-sm font-sans">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-zinc-100 dark:bg-zinc-900 border border-transparent focus:border-zinc-300 dark:focus:border-zinc-700 rounded-full py-1.5 pl-9 pr-4 text-sm outline-none w-64 transition-all placeholder:text-zinc-500 text-zinc-700 dark:text-zinc-300" placeholder="Search components..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-0.5">
<span className="text-[10px] font-medium text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 bg-white dark:bg-zinc-800 font-sans">⌘</span>
<span className="text-[10px] font-medium text-zinc-400 border border-zinc-200 dark:border-zinc-700 rounded px-1.5 bg-white dark:bg-zinc-800 font-sans">K</span>
</div>
</div>
<button className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors relative">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
</button>
</div>
</header>
<div className="max-w-6xl mr-auto ml-auto pt-8 pr-8 pb-32 pl-8 space-y-24">

<section className="space-y-8 scroll-mt-24" id="icons">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight text-zinc-900 dark:text-white font-instrument-serif font-normal" style={{}}>Icon System</h2>
<p className="dark:text-zinc-400 leading-relaxed text-zinc-500 max-w-2xl font-sans">
                            A comprehensive 24x24px grid system with consistent 1.5px stroke width. Designed for clarity at small sizes with rounded caps and joins.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-6 rounded-xl space-y-4 card-hover group">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Navigation</h3>
<div className="grid grid-cols-4 gap-4">
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-folder-kanban w-5 h-5" data-lucide="folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></svg>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl space-y-4 card-hover">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Actions</h3>
<div className="grid grid-cols-4 gap-4">
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex justify-center cursor-pointer transition-transform hover:scale-110">
<svg className="lucide lucide-plus-circle w-5 h-5 text-zinc-700 dark:text-zinc-300" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</div>
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex justify-center cursor-pointer transition-transform hover:scale-110">
<svg className="lucide lucide-edit-3 w-5 h-5 text-zinc-700 dark:text-zinc-300" data-lucide="edit-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
</div>
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex justify-center cursor-pointer transition-transform hover:scale-110">
<svg className="lucide lucide-trash-2 w-5 h-5 text-red-500" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<div className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 flex justify-center cursor-pointer transition-transform hover:scale-110">
<svg className="lucide lucide-share-2 w-5 h-5 text-zinc-700 dark:text-zinc-300" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl space-y-4 card-hover">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Status</h3>
<div className="flex justify-between px-2">
<div className="relative group/icon cursor-help">
<div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity font-sans">Success</span>
</div>
<div className="relative group/icon cursor-help">
<div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
<svg className="lucide lucide-alert-triangle w-4 h-4" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
</div>
<div className="relative group/icon cursor-help">
<div className="w-8 h-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 dark:text-rose-400">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</div>
<div className="relative group/icon cursor-help">
<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<svg className="lucide lucide-loader-2 w-4 h-4 animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl space-y-4 card-hover">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Content</h3>
<div className="grid grid-cols-4 gap-4">
<svg className="lucide lucide-file-text w-5 h-5 mx-auto text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<svg className="lucide lucide-image w-5 h-5 mx-auto text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<svg className="lucide lucide-video w-5 h-5 mx-auto text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<svg className="lucide lucide-link w-5 h-5 mx-auto text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
</div>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="dataviz">
<div className="flex justify-between items-end">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight text-zinc-900 dark:text-white font-instrument-serif font-normal" style={{}}>Data Visualization</h2>
<p className="text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-sans">
                                Pure SVG chart library with smooth bezier curves, gradient fills, and interactive data points using D3-inspired logic.
                            </p>
</div>
<div className="flex gap-2">
<button className="p-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-zinc-500 hover:text-zinc-900">
<svg className="lucide lucide-refresh-ccw w-4 h-4" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass rounded-xl p-6 col-span-2 relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="font-medium text-sm text-zinc-900 dark:text-white font-sans" style={{}}>Revenue Growth</h3>
<div className="flex items-center gap-2 text-xs font-medium text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-full font-sans">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                                    +12.5%
                                </div>
</div>

<div className="relative h-64 w-full">
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 200">

<g className="text-zinc-200 dark:text-zinc-800" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1">
<line x1="0" x2="400" y1="150" y2="150"></line>
<line x1="0" x2="400" y1="100" y2="100"></line>
<line x1="0" x2="400" y1="50" y2="50"></line>
</g>

<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="" d="M0,150 C50,140 80,100 120,90 C160,80 200,120 240,110 C280,100 320,40 400,20 L400,200 L0,200 Z" fill="url(#gradient)"></path>

<path className="chart-line" d="M0,150 C50,140 80,100 120,90 C160,80 200,120 240,110 C280,100 320,40 400,20" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3"></path>

<g>
<circle className="fill-white dark:fill-zinc-900 stroke-indigo-500 stroke-2 hover:r-6 hover:stroke-4 transition-all cursor-pointer" cx="120" cy="90" r="4">
<title className="font-sans">$9,240</title>
</circle>
<circle className="fill-white dark:fill-zinc-900 stroke-indigo-500 stroke-2 hover:r-6 hover:stroke-4 transition-all cursor-pointer" cx="240" cy="110" r="4">
<title className="font-sans">$11,050</title>
</circle>
<circle className="fill-white dark:fill-zinc-900 stroke-indigo-500 stroke-2 hover:r-6 hover:stroke-4 transition-all cursor-pointer" cx="360" cy="30" r="4">
<title className="font-sans">$15,400</title>
</circle>
</g>
</svg>

<div className="flex justify-between text-xs text-zinc-400 mt-2 px-2">
<span className="font-sans" style={{}}>Mon</span>
<span className="font-sans" style={{}}>Tue</span>
<span className="font-sans" style={{}}>Wed</span>
<span className="font-sans" style={{}}>Thu</span>
<span className="font-sans" style={{}}>Fri</span>
</div>
</div>
</div>

<div className="glass rounded-xl p-6 flex flex-col items-center justify-center relative">
<h3 className="absolute top-6 left-6 font-medium text-sm text-zinc-900 dark:text-white font-sans" style={{}}>Device Usage</h3>
<div className="relative w-48 h-48 mt-4">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">

<circle className="stroke-zinc-100 dark:stroke-zinc-800" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>

<circle className="hover:stroke-[10] transition-all duration-300 cursor-pointer opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#6366f1" stroke-dasharray="150 251" strokeLinecap="round" strokeWidth="8"></circle>
<circle className="hover:stroke-[10] transition-all duration-300 cursor-pointer opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#a855f7" stroke-dasharray="70 251" stroke-dashoffset="-160" strokeLinecap="round" strokeWidth="8"></circle>
<circle className="hover:stroke-[10] transition-all duration-300 cursor-pointer opacity-90" cx="50" cy="50" fill="transparent" r="40" stroke="#06b6d4" stroke-dasharray="20 251" stroke-dashoffset="-240" strokeLinecap="round" strokeWidth="8"></circle>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl text-zinc-900 dark:text-white tracking-tight font-instrument-serif font-normal" style={{}}>84%</span>
<span className="text-[10px] uppercase tracking-widest text-zinc-400 font-sans" style={{}}>Mobile</span>
</div>
</div>
<div className="flex gap-4 mt-6">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs text-zinc-500 font-sans" style={{}}>iOS</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
<span className="text-xs text-zinc-500 font-sans" style={{}}>Android</span>
</div>
</div>
</div>

<div className="glass rounded-xl p-6 lg:col-span-1">
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-6 font-sans" style={{}}>Traffic Sources</h3>
<div className="h-40 flex items-end justify-between gap-2">

<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm relative group h-full flex items-end">
<div className="w-full bg-zinc-300 dark:bg-zinc-600 rounded-t-sm bar-growth group-hover:bg-indigo-500 transition-colors" style={{height: '40%'}}></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-sans">40%</div>
</div>
<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm relative group h-full flex items-end">
<div className="w-full bg-zinc-300 dark:bg-zinc-600 rounded-t-sm bar-growth group-hover:bg-indigo-500 transition-colors" style={{height: '75%', animationDelay: '100ms'}}></div>
</div>
<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm relative group h-full flex items-end">
<div className="w-full bg-zinc-300 dark:bg-zinc-600 rounded-t-sm bar-growth group-hover:bg-indigo-500 transition-colors" style={{height: '55%', animationDelay: '200ms'}}></div>
</div>
<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm relative group h-full flex items-end">
<div className="w-full bg-zinc-300 dark:bg-zinc-600 rounded-t-sm bar-growth group-hover:bg-indigo-500 transition-colors" style={{height: '90%', animationDelay: '300ms'}}></div>
</div>
<div className="w-full bg-zinc-100 dark:bg-zinc-800 rounded-t-sm relative group h-full flex items-end">
<div className="w-full bg-zinc-300 dark:bg-zinc-600 rounded-t-sm bar-growth group-hover:bg-indigo-500 transition-colors" style={{height: '30%', animationDelay: '400ms'}}></div>
</div>
</div>
</div>

<div className="glass rounded-xl p-6 lg:col-span-2">
<h3 className="font-medium text-sm text-zinc-900 dark:text-white mb-4 font-sans" style={{}}>Skill Assessment</h3>
<div className="flex items-center justify-center h-48">
<svg className="h-full" viewbox="0 0 200 200">

<g className="stroke-zinc-200 dark:stroke-zinc-700" fill="none" strokeWidth="1">
<polygon points="100,20 176,64 176,152 100,196 24,152 24,64"></polygon>
<polygon opacity="0.5" points="100,50 148,78 148,134 100,162 52,134 52,78"></polygon>
<polygon opacity="0.3" points="100,80 120,92 120,116 100,128 80,116 80,92"></polygon>
</g>

<g className="stroke-zinc-100 dark:stroke-zinc-800" strokeWidth="1">
<line x1="100" x2="100" y1="108" y2="20"></line>
<line x1="100" x2="176" y1="108" y2="64"></line>
<line x1="100" x2="176" y1="108" y2="152"></line>
<line x1="100" x2="100" y1="108" y2="196"></line>
<line x1="100" x2="24" y1="108" y2="152"></line>
<line x1="100" x2="24" y1="108" y2="64"></line>
</g>

<polygon className="hover:stroke-indigo-400 transition-all duration-300" fill="rgba(99, 102, 241, 0.2)" points="100,30 160,70 140,140 100,170 40,140 50,80" stroke="#6366f1" strokeWidth="2"></polygon>
</svg>
</div>
</div>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="interactions">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight text-zinc-900 dark:text-white font-instrument-serif font-normal" style={{}}>Interactions &amp; Loading</h2>
<p className="text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-sans">
                            Subtle motion design states to communicate system status and enhance perceived performance.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-6 rounded-xl space-y-6">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Loading</h3>
<div className="flex flex-col gap-6 items-center">

<div className="flex items-center gap-3">
<svg className="animate-spin h-5 w-5 text-indigo-500" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
<span className="text-xs text-zinc-500 font-sans" style={{}}>Processing...</span>
</div>

<div className="flex space-x-1">
<div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
<div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
<div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></div>
</div>

<div className="relative flex h-8 w-8">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-8 w-8 bg-indigo-500 items-center justify-center">
<svg className="lucide lucide-cloud-upload w-4 h-4 text-white" data-lucide="cloud-upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</span>
</div>
</div>
</div>

<div className="glass p-6 rounded-xl space-y-6">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Interactive Buttons</h3>
<div className="flex flex-col gap-4">

<button className="group relative flex items-center justify-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg text-sm font-medium overflow-hidden transition-all hover:pr-6 hover:pl-2">
<span className="font-sans" style={{}}>Continue</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<button className="relative overflow-hidden px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium group">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
<span className="relative font-sans" style={{}}>Premium Export</span>
</button>

<button className="group flex items-center justify-center gap-2 px-4 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors font-sans" style={{}}>
<svg className="lucide lucide-bookmark w-4 h-4 transition-all group-hover:fill-current group-active:scale-90" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                                    Save Item
                                </button>
</div>
</div>

<div className="glass p-6 rounded-xl space-y-6">
<h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-sans" style={{}}>Form Controls</h3>
<div className="space-y-4">

<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 font-sans" style={{}}>Airplane Mode</span>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</div>
</label>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only appearance-none" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-300 dark:border-zinc-600 rounded bg-white dark:bg-zinc-800 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all"></div>
<svg className="absolute w-3.5 h-3.5 left-0.5 top-0.5 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" fill="none" viewbox="0 0 14 10">
<path className="animate-dash" d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeDasharray: '20', strokeDashoffset: '0'}}></path>
</svg>
</div>
<span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 font-sans">Notifications</span>
</label>
</div>
</div>

<div className="glass p-6 rounded-xl space-y-6 flex flex-col justify-center items-center">
<div className="relative group">
<button className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-info w-5 h-5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>

<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 text-white text-xs rounded-md whitespace-nowrap opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 pointer-events-none font-sans" style={{}}>
                                     View Information
                                     <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-zinc-900"></div>
</div>
</div>
<div className="relative">
<div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-inbox w-5 h-5 text-indigo-600 dark:text-indigo-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<div className="absolute -top-2 -right-2 h-5 w-5 bg-rose-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm animate-pulse-slow font-sans">3</div>
</div>
</div>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="decorative">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight text-zinc-900 dark:text-white font-instrument-serif font-normal" style={{}}>Decorative Elements</h2>
<p className="text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-sans">
                            A library of dividers, patterns, and accent shapes to break up content and add visual interest without clutter.
                        </p>
</div>
<div className="space-y-6">

<div className="glass rounded-xl overflow-hidden">
<div className="p-8 bg-gradient-to-br from-indigo-500 to-purple-600 relative h-32 flex items-center justify-center">
<span className="text-white font-medium tracking-wide font-sans" style={{}}>Section Hero</span>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
<svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="fill-zinc-50 dark:fill-zinc-950" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
</div>
<div className="p-8 text-center text-sm text-zinc-500 font-sans">Content continues seamlessly...</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="h-48 rounded-xl border border-zinc-200 dark:border-zinc-800 relative overflow-hidden bg-white dark:bg-zinc-900">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.5'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="glass px-4 py-2 rounded-full text-xs font-medium font-sans">Dot Grid Pattern</div>
</div>
</div>

<div className="dark:border-zinc-800 overflow-hidden dark:bg-zinc-900 flex bg-white h-48 border-zinc-200 border rounded-xl relative items-center justify-center">
<div className="dark:bg-purple-900/30 filter animate-blob bg-purple-200 opacity-70 mix-blend-multiply w-64 h-64 rounded-full absolute top-0 left-0 blur-2xl"></div><div className="absolute w-64 h-64 bg-yellow-200 dark:bg-yellow-900/30 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000 top-0 right-0"></div>
<div className="dark:bg-pink-900/30 filter animate-blob animation-delay-4000 bg-pink-200 opacity-70 mix-blend-multiply w-64 h-64 rounded-full absolute bottom-0 left-20 blur-2xl"></div>
<span className="relative z-10 font-medium text-zinc-800 dark:text-zinc-200 font-sans">Mesh Gradients</span>
</div>
</div>
</div>
</section>

<section className="space-y-8 scroll-mt-24" id="components">
<div className="space-y-2">
<h2 className="text-2xl tracking-tight text-zinc-900 dark:text-white font-instrument-serif font-normal" style={{}}>UI Components</h2>
<p className="text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed font-sans">
                            Production-ready components utilizing the icon and interaction systems.
                        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass p-0 rounded-xl overflow-hidden card-hover">
<div className="h-32 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 relative">
<div className="absolute top-4 right-4 bg-white/90 dark:bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide text-zinc-600 dark:text-zinc-300 font-sans" style={{}}>
                                    New
                                </div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h3 className="text-sm font-semibold text-zinc-900 dark:text-white font-sans">Integration Flow</h3>
<p className="text-xs text-zinc-500 font-sans" style={{}}>Updated 2h ago</p>
</div>
</div>
<p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-sans">Connect your data sources seamlessly with our new API integration tools.</p>
<div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-300 border-2 border-white dark:border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-400 border-2 border-white dark:border-zinc-900"></div>
</div>
<button className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline font-sans">View details</button>
</div>
</div>
</div>

<div className="glass p-8 rounded-xl">
<h3 className="text-sm font-semibold text-zinc-900 dark:text-white mb-6 font-sans">Account Settings</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 font-sans">Email Address</label>
<div className="relative group">
<svg className="lucide lucide-mail absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" type="email" value="alex@example.com"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 font-sans">Role</label>
<div className="relative">
<select className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg py-2 pl-4 pr-10 text-sm outline-none appearance-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer">
<option className="font-sans">Administrator</option>
<option className="font-sans">Editor</option>
<option className="font-sans">Viewer</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="pt-4 flex items-center justify-between">
<button className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors font-sans">Cancel</button>
<button className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-save w-3.5 h-3.5" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
                                        Save Changes
                                    </button>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 text-center text-sm text-zinc-500">
<p className="font-sans">© 2023 Canvas Design System. All rights reserved.</p>
</footer>
</main>
</div>


    </>
  );
}
