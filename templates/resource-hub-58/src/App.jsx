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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
sidebar: {
DEFAULT: '#2563eb', // Blue-600
hover: '#3b82f6',   // Blue-500
active: '#1d4ed8',  // Blue-700
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navigation Logic
        const listView = document.getElementById('listView');
        const detailView = document.getElementById('detailView');
        const breadcrumbDetail = document.getElementById('breadcrumb-detail');

        function showDetail() {
            listView.classList.add('hidden');
            detailView.classList.remove('hidden');
            breadcrumbDetail.classList.remove('hidden');
            // Scroll to top
            document.querySelector('.overflow-auto').scrollTo(0, 0);
        }

        function showList() {
            detailView.classList.add('hidden');
            listView.classList.remove('hidden');
            breadcrumbDetail.classList.add('hidden');
        }

        // Dark Mode Logic
        const toggleBtn = document.getElementById('theme-toggle');
        const themeIndicator = document.getElementById('theme-indicator');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            setDarkState(true);
        } else {
            html.classList.remove('dark');
            setDarkState(false);
        }

        function setDarkState(isDark) {
            if (isDark) {
                themeIndicator.classList.add('translate-x-7');
                themeIndicator.classList.remove('translate-x-1');
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeIcon.classList.remove('text-slate-400');
            } else {
                themeIndicator.classList.remove('translate-x-7');
                themeIndicator.classList.add('translate-x-1');
                themeIcon.setAttribute('icon', 'solar:sun-2-linear');
                themeIcon.classList.add('text-slate-400');
            }
        }

        toggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            const isDark = html.classList.contains('dark');
            localStorage.theme = isDark ? 'dark' : 'light';
            setDarkState(isDark);
        });

        // Sidebar Mobile Toggle
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('mobile-overlay');

        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        // Search Logic
        const searchInput = document.getElementById('searchInput');
        const grid = document.getElementById('resourceGrid');
        const cards = grid.getElementsByClassName('resource-card');

        if(searchInput) {
            searchInput.addEventListener('keyup', (e) => {
                const filter = e.target.value.toLowerCase();
                
                Array.from(cards).forEach(card => {
                    const title = card.querySelector('h3').innerText.toLowerCase();
                    const desc = card.querySelector('p').innerText.toLowerCase();
                    const tags = Array.from(card.querySelectorAll('span')).map(span => span.innerText.toLowerCase());
                    const content = `${title} ${desc} ${tags.join(' ')}`;
                    
                    if (content.includes(filter)) {
                        card.parentElement.style.display = ""; // Ensure parent is visible if needed
                        card.style.display = "";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
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
      
<div className="flex h-screen overflow-hidden">

<div className="fixed inset-0 z-20 bg-black/50 hidden lg:hidden transition-opacity" id="mobile-overlay" onclick="toggleSidebar()"></div>

<aside className="fixed inset-y-0 left-0 z-30 w-64 bg-sidebar text-white transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col h-full shadow-xl" id="sidebar">

<div className="flex items-center h-16 px-6 border-b border-blue-500/30">
<span className="text-xl font-semibold tracking-tighter">ADW</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8 no-scrollbar">

<div className="space-y-1">
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-hover transition-colors text-blue-100 hover:text-white" href="#" onclick="showList()">
<iconify-icon className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                        Overview
                    </a>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2">Platform</h3>
<div className="space-y-1">
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-hover transition-colors text-blue-100 hover:text-white" href="#">
<iconify-icon className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                            Projects Catalog
                        </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-hover transition-colors text-blue-100 hover:text-white" href="#">
<iconify-icon className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                            Team Vault
                        </a>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2">Knowledge</h3>
<div className="space-y-1">

<a className="group flex items-center px-3 py-2 text-sm font-semibold rounded-md bg-sidebar-active text-white shadow-inner ring-1 ring-blue-500/50" href="#" onclick="showList()">
<iconify-icon className="w-5 h-5 mr-3" icon="solar:library-linear" strokeWidth="1.5"></iconify-icon>
                            Resources
                        </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-sidebar-hover transition-colors text-blue-100 hover:text-white" href="#">
<iconify-icon className="w-5 h-5 mr-3 opacity-70 group-hover:opacity-100" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
                            Blog
                        </a>
</div>
</div>
</nav>

<div className="p-4 border-t border-blue-500/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold text-white ring-2 ring-blue-400">
                        JD
                    </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">John Doe</span>
<span className="text-xs text-blue-200">Admin</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden lg:ml-64 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-4">

<button className="lg:hidden p-1 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200" onclick="toggleSidebar()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden sm:flex items-center text-sm text-slate-500 dark:text-slate-500">
<span>Knowledge</span>
<iconify-icon className="mx-2 text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="cursor-pointer hover:text-slate-800 dark:hover:text-slate-200 transition-colors" onclick="showList()">Resources</span>
<span className="hidden flex items-center" id="breadcrumb-detail">
<iconify-icon className="mx-2 text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-800 dark:text-slate-200 font-medium">Design System 2.0</span>
</span>
</div>
</div>

<button className="relative inline-flex items-center h-8 w-14 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="theme-toggle">
<span className="sr-only">Toggle Dark Mode</span>
<span className="translate-x-1 inline-block w-6 h-6 transform bg-white dark:bg-slate-600 rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-200 flex items-center justify-center text-slate-400 dark:text-yellow-400" id="theme-indicator">
<iconify-icon icon="solar:sun-2-linear" id="theme-icon" width="14"></iconify-icon>
</span>
</button>
</header>

<div className="flex-1 overflow-auto">
<div className="max-w-7xl mx-auto p-6 md:p-8">

<div className="space-y-8 animate-fade-in" id="listView">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Resources</h1>
<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Manage and access team documentation and assets.</p>
</div>
<button className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-medium rounded-lg shadow-sm transition-all">
<iconify-icon className="mr-2 text-lg" icon="solar:add-circle-linear"></iconify-icon>
                                New Resource
                            </button>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-blue-500 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-slate-800 rounded-lg leading-5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm shadow-sm transition-all" id="searchInput" placeholder="Search resources..." type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="resourceGrid">

<div className="resource-card group relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between h-full" onclick="showDetail()">
<div>
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
<iconify-icon icon="solar:figma-file-linear" width="24"></iconify-icon>
</div>
<button className="text-slate-400 hover:text-blue-500 transition-colors z-10" onclick="event.stopPropagation()">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Design System 2.0</h3>
<p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">Comprehensive UI kit and guidelines for the Q3 refresh.</p>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Design</span>
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Figma</span>
</div>
</div>

<div className="resource-card group relative bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl p-5 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between h-full" onclick="showDetail()">
<div>
<div className="flex items-start justify-between mb-4">
<div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
<iconify-icon icon="solar:code-file-linear" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">API Documentation</h3>
<p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">REST API endpoints reference.</p>
</div>
<div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-800 flex flex-wrap gap-2">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Engineering</span>
</div>
</div>


<div className="group relative border border-dashed border-gray-300 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 min-h-[220px]">
<div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800 group-hover:bg-white dark:group-hover:bg-slate-700 flex items-center justify-center mb-3 transition-colors shadow-sm">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Create New Resource</h3>
</div>
</div>
</div>


<div className="hidden space-y-8 animate-fade-in" id="detailView">

<div className="border-b border-gray-200 dark:border-slate-800 pb-8">
<button className="group inline-flex items-center text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 mb-6 transition-colors" onclick="showList()">
<iconify-icon className="mr-1 group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
                                Back to resources
                            </button>
<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
<div className="space-y-4 max-w-3xl">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Design System 2.0</h1>
<p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Comprehensive UI kit and guidelines for the Q3 refresh. Includes component library, token definitions, and accessibility standards for the upcoming product overhaul.
                                    </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
<iconify-icon className="mr-1.5" icon="solar:figma-file-linear"></iconify-icon>
                                            Figma
                                        </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                                            Design
                                        </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
                                            Q3 Goals
                                        </span>
</div>
</div>
<div className="flex flex-row lg:flex-col gap-3 shrink-0">
<button className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 text-sm font-medium rounded-lg shadow-sm transition-all min-w-[140px]">
<iconify-icon className="mr-2" icon="solar:pen-new-square-linear"></iconify-icon>
                                        Edit Resource
                                    </button>
<button className="inline-flex items-center justify-center px-4 py-2 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-gray-200 dark:border-slate-700 text-sm font-medium rounded-lg shadow-sm transition-all min-w-[140px]">
<iconify-icon className="mr-2" icon="solar:share-linear"></iconify-icon>
                                        Share
                                    </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 group shadow-sm">
<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">

<iconify-icon className="text-blue-500 opacity-80 group-hover:scale-110 transition-transform duration-300" icon="solar:play-circle-linear" width="64"></iconify-icon>
</div>

<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-medium text-white">12:45 • Walkthrough</span>
</div>
</div>

<div className="prose prose-slate prose-sm max-w-none dark:prose-invert">
<h3 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight mb-4">About this resource</h3>
<p className="text-slate-600 dark:text-slate-400 mb-4">
                                        This design system establishes a shared language and set of components to be used across all product teams. The goal is to improve consistency and speed up development time by 30%.
                                    </p>
<h4 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight mb-2 mt-6">Key Updates</h4>
<ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
<li><strong>New Color Palette:</strong> Expanded neutral grays and higher contrast accessibility blue.</li>
<li><strong>Typography:</strong> Switched to Inter for better readability at small sizes.</li>
<li><strong>Components:</strong> Added 15 new complex organisms including data tables and calendars.</li>
</ul>
</div>

<div className="pt-8 border-t border-gray-200 dark:border-slate-800">
<h4 className="text-sm font-medium text-slate-900 dark:text-white uppercase tracking-wider mb-4">Discussion</h4>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div className="flex-1">
<input className="w-full px-4 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-lg text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none transition-shadow" placeholder="Add a comment..." type="text"/>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">
<div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-5 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
<iconify-icon className="mr-2 text-blue-500" icon="solar:bookmark-linear"></iconify-icon>
                                        Related Resources
                                    </h3>
<div className="space-y-4">

<a className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="mt-1 p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded text-blue-600 dark:text-blue-400">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Brand Guidelines</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Updated Logo usage</p>
</div>
</a>

<a className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="mt-1 p-1.5 bg-purple-50 dark:bg-purple-900/20 rounded text-purple-600 dark:text-purple-400">
<iconify-icon icon="solar:code-file-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">React Components</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Storybook link</p>
</div>
</a>

<a className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="mt-1 p-1.5 bg-emerald-50 dark:bg-emerald-900/20 rounded text-emerald-600 dark:text-emerald-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">UX Research Q2</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">User interview results</p>
</div>
</a>

<a className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="mt-1 p-1.5 bg-orange-50 dark:bg-orange-900/20 rounded text-orange-600 dark:text-orange-400">
<iconify-icon icon="solar:folder-path-connect-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Icon Library</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">SVG exports</p>
</div>
</a>

<a className="group flex items-start gap-3 hover:bg-gray-50 dark:hover:bg-slate-800/50 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="mt-1 p-1.5 bg-pink-50 dark:bg-pink-900/20 rounded text-pink-600 dark:text-pink-400">
<iconify-icon icon="solar:videocamera-record-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Design Handover</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Meeting Recording</p>
</div>
</a>
</div>
<div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800">
<a className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center justify-between" href="#">
                                            View all files
                                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-5 border border-gray-200 dark:border-slate-800">
<h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Metadata</h4>
<div className="space-y-3 text-sm">
<div className="flex justify-between">
<span className="text-slate-500">Created</span>
<span className="text-slate-800 dark:text-slate-300">Oct 24, 2023</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Author</span>
<span className="text-slate-800 dark:text-slate-300">Sarah Jenkins</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Size</span>
<span className="text-slate-800 dark:text-slate-300">24 MB</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Version</span>
<span className="text-slate-800 dark:text-slate-300">2.0.4</span>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</main>
</div>


    </>
  );
}
