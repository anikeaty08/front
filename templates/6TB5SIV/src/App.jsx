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
        extend: {
          fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] },
          borderRadius: { xl2: '1.25rem' },
          boxShadow: { 
            card: '0 4px 12px rgba(0,0,0,.06)',
            'card-dark': '0 4px 12px rgba(0,0,0,.25)'
          },
          colors: {
            primary: '#6366f1'
          }
        }
      }
    };
  


  lucide.createIcons();
  
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
  });
  
  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  }
  
  // Mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  const closeSidebar = document.getElementById('close-sidebar');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  
  mobileMenu.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  });
  
  [closeSidebar, overlay].forEach(el => {
    el.addEventListener('click', () => {
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
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
      
<div className="flex min-h-screen">

<div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden hidden" id="mobile-overlay"></div>

<aside className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-lg dark:shadow-card-dark px-6 py-8 flex flex-col space-y-8 fixed lg:static z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 border-r border-white/5" id="sidebar">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-12 h-12 ring-2 ring-indigo-100 dark:ring-indigo-900 object-cover rounded-full" src="https://images.unsplash.com/photo-1601576084861-5de423553c0f?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="font-semibold text-sm">Marcus Johnson</p>
<p className="text-xs text-gray-500 dark:text-gray-400">Senior Developer</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 dark:text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<button className="lg:hidden p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700" id="close-sidebar">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<button className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-sm border border-white/5" id="theme-toggle">
<svg className="lucide lucide-moon w-4 h-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
<span>Dark Mode</span>
<div className="ml-auto w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5 dark:translate-x-3.5 transition-transform"></div>
</div>
</button>
<nav className="space-y-8 text-sm flex-1">
<div className="">
<p className="uppercase text-xs text-gray-400 dark:text-gray-500 mb-3 font-medium">Workspace</p>
<ul className="space-y-1">
<li className=""><a className="flex items-center gap-3 font-medium text-primary bg-indigo-50 dark:bg-indigo-900/30 px-3 py-2 rounded-lg border border-white/5" href="#"><svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>Dashboard</a></li>
<li className=""><a className="flex items-center gap-3 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors" href="#"><svg className="lucide lucide-bar-chart-3 w-4 h-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>Analytics<span className="ml-auto text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full">12</span></a></li>
<li><a className="flex items-center gap-3 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors" href="#"><svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>AI Generator</a></li>
<li><a className="flex items-center gap-3 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors" href="#"><svg className="lucide lucide-cloud-upload w-4 h-4" data-lucide="cloud-upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>File Upload</a></li>
</ul>
</div>
<div className="">
<p className="uppercase text-xs text-gray-400 dark:text-gray-500 mb-3 font-medium">Recent Projects</p>
<ul className="space-y-4 pl-4 border-l border-gray-200 dark:border-gray-700">
<li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-emerald-500 rounded-full"></span><a className="hover:text-primary" href="#">TechCorp Proposal</a></li>
<li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-blue-500 rounded-full"></span><a className="hover:text-primary" href="#">Portfolio Website</a></li>
<li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-amber-500 rounded-full"></span><a className="hover:text-primary" href="#">Brand Guidelines</a></li>
<li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 bg-purple-500 rounded-full"></span><a className="hover:text-primary" href="#">API Documentation</a></li>
</ul>
</div>
<div className="">
<p className="uppercase text-xs text-gray-400 dark:text-gray-500 mb-3 font-medium">Resources</p>
<ul className="space-y-1">
<li><a className="flex items-center gap-3 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors" href="#"><svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>Templates</a></li>
<li><a className="flex items-center gap-3 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors" href="#"><svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>Documentation</a></li>
<li><a className="flex items-center gap-3 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors" href="#"><svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>Support</a></li>
</ul>
</div>
</nav>
<div className="border-t dark:border-gray-700 pt-4 space-y-2">
<button className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 w-full px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"><svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>Settings</button>
<button className="flex items-center gap-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 w-full px-3 py-2 rounded-lg transition-colors"><svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>Sign Out</button>
</div>
</aside>

<main className="flex-1 lg:p-12 pt-4 pr-4 pb-4 pl-4">

<div className="flex items-center justify-between mb-8 lg:mb-10">
<div className="">
<h1 className="lg:text-4xl text-2xl font-medium tracking-tighter mb-2">Document Workspace</h1>
<p className="text-sm text-gray-600 dark:text-gray-400">Manage and collaborate on your documents</p>
</div>
<button className="lg:hidden p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md" id="mobile-menu">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
<div className="grid gap-6 lg:gap-10 max-w-4xl">

<div className="bg-white dark:bg-gray-800 shadow-card dark:shadow-card-dark rounded-xl2 p-4 lg:p-6 border border-white/5">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-gray-400 dark:text-gray-500 text-sm mb-4">
<div className="flex gap-4">
<button className="hover:text-primary"><svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg></button>
<button className="hover:text-primary"><svg className="lucide lucide-zoom-in w-4 h-4" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg></button>
<button className="hover:text-primary"><svg className="lucide lucide-zoom-out w-4 h-4" data-lucide="zoom-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg></button>
<span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">85%</span>
</div>
<div className="flex gap-4">
<button className="hover:text-primary"><svg className="lucide lucide-rotate-cw w-4 h-4" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg></button>
<button className="hover:text-primary"><svg className="lucide lucide-share w-4 h-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg></button>
<button className="hover:text-primary"><svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg></button>
</div>
</div>
<div className="h-64 lg:h-80 dark:from-indigo-900/20 dark:to-blue-900/20 flex flex-col items-center justify-center dark:text-indigo-300 text-indigo-400 bg-gradient-to-br from-indigo-50 to-blue-50 bg-[url(https://images.unsplash.com/photo-1617397578305-53a7feadd726?w=2160&amp;q=80)] bg-cover rounded-lg border border-white/5">
<svg className="lucide lucide-file-text w-12 h-12 mb-3" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<p className="text-sm font-medium">Senior_Developer_Resume_2024.pdf</p>
<p className="text-xs opacity-75 mt-1">Page 1 of 2</p>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
<div className="dark:bg-gray-800 dark:shadow-card-dark lg:p-6 flex items-center gap-4 bg-white border-white/5 border rounded-xl2 pt-4 pr-4 pb-4 pl-4 shadow-card">
<div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-800 dark:to-indigo-700 text-indigo-600 dark:text-indigo-300 rounded-xl flex items-center justify-center border border-white/5">
<svg className="lucide lucide-file-text w-5 h-5 lg:w-6 lg:h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="lg:text-base truncate text-sm font-medium">Resume_Marcus_Johnson.pdf</p>
<p className="text-xs text-gray-500 dark:text-gray-400">Modified 2 hours ago • 247.8 KB</p>
</div>
<button className="flex items-center gap-1 text-primary text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 px-3 py-1.5 rounded-lg transition-colors border border-white/5">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
<span className="hidden sm:inline">Open</span>
</button>
</div>
<div className="dark:bg-gray-800 dark:shadow-card-dark lg:p-6 flex items-center gap-4 bg-white border-white/5 border rounded-xl2 pt-4 pr-4 pb-4 pl-4 shadow-card">
<div className="w-12 h-12 lg:w-14 lg:h-14 dark:from-emerald-800 dark:to-emerald-700 dark:text-emerald-300 flex items-center justify-center text-emerald-600 bg-gradient-to-br from-emerald-100 to-emerald-200 border-white/5 border rounded-xl">
<svg className="lucide lucide-file-image lucide-file-text lucide-folder w-5 h-5 lg:w-6 lg:h-6" data-lucide="file-image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="10" cy="12" r="2"></circle><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="lg:text-base truncate text-sm font-medium">Project Assets</p>
<p className="text-xs text-gray-500 dark:text-gray-400">18 files • 15.2 MB total</p>
</div>
<button className="flex items-center gap-1 text-primary text-sm font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/30 px-3 py-1.5 rounded-lg transition-colors border border-white/5">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="hidden sm:inline">Add</span>
</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
