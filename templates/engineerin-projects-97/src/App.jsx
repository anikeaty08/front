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
brand: {
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
800: '#1e40af',
900: '#1e3a8a',
950: '#172554',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Dark Mode Logic
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
            themeIcon.setAttribute('icon', 'solar:sun-linear');
        } else {
            htmlElement.classList.remove('dark');
            themeIcon.setAttribute('icon', 'solar:moon-linear');
        }

        themeToggle.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
                themeIcon.setAttribute('icon', 'solar:sun-linear');
            }
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
      

<div className="lg:hidden flex items-center justify-between p-4 bg-brand-600 text-white">
<div className="font-semibold tracking-tight text-lg">ADW.</div>
<button className="p-1" onclick="document.getElementById('sidebar').classList.toggle('-translate-x-full')">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="flex h-screen overflow-hidden">

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-brand-600 text-white transform -translate-x-full lg:translate-x-0 lg:static lg:flex-shrink-0 transition-transform duration-300 flex flex-col shadow-xl lg:shadow-none border-r border-brand-700 dark:border-gray-800/50" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-white/10">
<span className="text-xl font-semibold tracking-tight">ADW.</span>
</div>
<nav className="flex-1 overflow-y-auto sidebar-scroll py-6 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Overview
                </a>
<div className="pt-6 pb-2 px-3 text-xs font-medium text-blue-200 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/20 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Projects Catalog
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" icon="solar:shield-user-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Team Vault
                </a>
<div className="pt-6 pb-2 px-3 text-xs font-medium text-blue-200 uppercase tracking-wider">Knowledge</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" icon="solar:library-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Resources
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" icon="solar:document-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Blog
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" icon="solar:videocamera-record-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Sharing Sessions
                </a>
</nav>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-medium text-white ring-2 ring-brand-400">
                        JD
                    </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Jane Doe</p>
<p className="text-xs text-blue-200 truncate">Senior Engineer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors z-10">
<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
<span>Platform</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="font-medium text-slate-900 dark:text-white">Projects Catalog</span>
</div>
<button className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors" id="theme-toggle">
<iconify-icon icon="solar:moon-linear" id="theme-icon" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth">

<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Projects Catalog</h1>
<p className="text-slate-500 dark:text-gray-400 text-sm max-w-2xl">
                        Browse all engineering services, libraries, and applications. Access metadata, deployment environments, and documentation links.
                    </p>
</div>

<div className="flex flex-col md:flex-row gap-4 mb-8">

<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-400 group-focus-within:text-brand-600 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-sm" placeholder="Search projects..." type="text"/>
</div>

<div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">

<div className="relative">
<select className="appearance-none pl-3 pr-10 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm text-slate-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-500 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors cursor-pointer shadow-sm min-w-[140px]">
<option>All Teams</option>
<option>Payments</option>
<option>Core Infrastructure</option>
<option>Growth</option>
<option>Data Science</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<div className="relative">
<select className="appearance-none pl-3 pr-10 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm text-slate-700 dark:text-gray-300 focus:outline-none focus:ring-1 focus:ring-brand-500 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors cursor-pointer shadow-sm min-w-[140px]">
<option>All Status</option>
<option>Active</option>
<option>Inactive</option>
<option>Archived</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>

<button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-medium hover:bg-slate-800 dark:hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            New Project
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-900/50 transition-all duration-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-100 dark:border-indigo-800/30">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Checkout API</h3>
<span className="text-xs text-gray-500 dark:text-gray-500">Service</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                                Active
                            </span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2 flex-grow">
                            Handles payment processing, currency conversion, and fraud detection logic for the main e-commerce flow.
                        </p>
<div className="space-y-4">

<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Developed by <span className="font-medium text-slate-800 dark:text-gray-200">Payments Team</span></span>
</div>

<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs font-medium">
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Repository</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Docs</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Dev</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Staging</a>
</div>
</div>
</div>

<div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-900/50 transition-all duration-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 flex items-center justify-center border border-pink-100 dark:border-pink-800/30">
<iconify-icon icon="solar:shield-keyhole-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Identity Provider</h3>
<span className="text-xs text-gray-500 dark:text-gray-500">Service</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                                Active
                            </span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2 flex-grow">
                            Centralized authentication and authorization service supporting OAuth2 and OIDC.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Developed by <span className="font-medium text-slate-800 dark:text-gray-200">Core Infra</span></span>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs font-medium">
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Repository</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Docs</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Prod</a>
</div>
</div>
</div>

<div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-900/50 transition-all duration-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center border border-orange-100 dark:border-orange-800/30">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Legacy Inventory</h3>
<span className="text-xs text-gray-500 dark:text-gray-500">Monolith</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50">
                                Inactive
                            </span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2 flex-grow">
                            Deprecated inventory system. Read-only mode. Migration to Inventory v2 is 90% complete.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Developed by <span className="font-medium text-slate-800 dark:text-gray-200">Supply Chain</span></span>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs font-medium">
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Repository</a>
<span className="text-gray-400 cursor-default">Archived</span>
</div>
</div>
</div>

<div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-900/50 transition-all duration-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-100 dark:border-teal-800/30">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Data Pipeline v2</h3>
<span className="text-xs text-gray-500 dark:text-gray-500">Infrastructure</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                                Active
                            </span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2 flex-grow">
                            Streaming data processing pipeline using Kafka and Flink for real-time analytics.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Developed by <span className="font-medium text-slate-800 dark:text-gray-200">Data Science</span></span>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs font-medium">
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Repository</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Docs</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Dev</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Stage</a>
</div>
</div>
</div>

<div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-900/50 transition-all duration-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center border border-purple-100 dark:border-purple-800/30">
<iconify-icon icon="solar:notification-lines-remove-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Notification Service</h3>
<span className="text-xs text-gray-500 dark:text-gray-500">Service</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
                                Active
                            </span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2 flex-grow">
                            Omni-channel notification delivery system handling Push, Email, and SMS via multiple providers.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Developed by <span className="font-medium text-slate-800 dark:text-gray-200">Growth Team</span></span>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs font-medium">
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Repository</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Dev</a>
</div>
</div>
</div>

<div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-900/50 transition-all duration-300 flex flex-col h-full">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-800/30">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-base leading-tight group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">Web Client</h3>
<span className="text-xs text-gray-500 dark:text-gray-500">Frontend</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-100 dark:border-amber-900/50">
                                Maint.
                            </span>
</div>
<p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-2 flex-grow">
                            Primary customer facing dashboard. Currently undergoing major refactor to React 18.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
<span>Developed by <span className="font-medium text-slate-800 dark:text-gray-200">Frontline</span></span>
</div>
<div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-4 text-xs font-medium">
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Repository</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Design</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors" href="#">Vercel</a>
</div>
</div>
</div>

<button className="group border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500 dark:hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-900/10 transition-all min-h-[240px]">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1" width="40"></iconify-icon>
<span className="mt-3 text-sm font-medium">Create New Project</span>
</button>
</div>
</div>
</main>
</div>


    </>
  );
}
