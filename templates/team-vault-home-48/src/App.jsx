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
600: '#2563eb', // Primary Blue
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



        // Theme Toggle Logic
        const themeBtn = document.getElementById('theme-toggle');
        const themeDot = document.getElementById('theme-dot');
        const themeIcon = document.getElementById('theme-icon');
        const themeText = document.getElementById('theme-text');
        const html = document.documentElement;

        function updateThemeUI(isDark) {
            if (isDark) {
                themeDot.classList.add('translate-x-4');
                themeIcon.setAttribute('icon', 'solar:sun-2-linear');
                themeText.textContent = 'Light Mode';
            } else {
                themeDot.classList.remove('translate-x-4');
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeText.textContent = 'Dark Mode';
            }
        }

        // Check system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            updateThemeUI(true);
        } else {
            html.classList.remove('dark');
            updateThemeUI(false);
        }

        themeBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.theme = 'dark';
                updateThemeUI(true);
            } else {
                localStorage.theme = 'light';
                updateThemeUI(false);
            }
        });

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');

        function toggleSidebar() {
            const isClosed = sidebar.classList.contains('-translate-x-full');
            if (isClosed) {
                sidebar.classList.remove('-translate-x-full');
                sidebarOverlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                sidebarOverlay.classList.add('hidden');
            }
        }

        mobileMenuBtn.addEventListener('click', toggleSidebar);
        sidebarOverlay.addEventListener('click', toggleSidebar);
    
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
<div className="font-bold text-xl tracking-tighter">ADW</div>
<button className="p-1 rounded hover:bg-white/10 transition" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex h-screen overflow-hidden">

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-brand-600 dark:bg-brand-950 text-white transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col justify-between border-r border-brand-500 dark:border-brand-900 shadow-xl lg:shadow-none lg:static" id="sidebar">

<div className="p-6">
<div className="flex items-center gap-3 mb-10">
<div className="w-8 h-8 rounded bg-white text-brand-600 flex items-center justify-center font-bold text-lg tracking-tighter shadow-lg shadow-brand-700/20">
                        A
                    </div>
<span className="font-bold text-xl tracking-tighter text-white">ADW</span>
</div>
<nav className="space-y-1">

<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-brand-100 hover:bg-white/10 hover:text-white transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" height="20" icon="solar:home-smile-linear" width="20"></iconify-icon>
                        Overview
                    </a>

<div className="pt-6 pb-2">
<p className="px-3 text-xs font-medium text-brand-200 uppercase tracking-widest opacity-60">Platform</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-brand-100 hover:bg-white/10 hover:text-white transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" height="20" icon="solar:folder-with-files-linear" width="20"></iconify-icon>
                        Projects Catalog
                    </a>

<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-white/15 text-white shadow-inner shadow-white/5 transition-colors" href="#">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                        Team Vault
                    </a>

<div className="pt-6 pb-2">
<p className="px-3 text-xs font-medium text-brand-200 uppercase tracking-widest opacity-60">Knowledge</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-brand-100 hover:bg-white/10 hover:text-white transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" height="20" icon="solar:library-linear" width="20"></iconify-icon>
                        Resources
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-brand-100 hover:bg-white/10 hover:text-white transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
                        Blog
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-brand-100 hover:bg-white/10 hover:text-white transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100" height="20" icon="solar:videocamera-record-linear" width="20"></iconify-icon>
                        Sharing Sessions
                    </a>
</nav>
</div>

<div className="p-6 border-t border-brand-500/30">
<button className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm font-medium text-brand-100 hover:bg-white/10 transition-colors" id="theme-toggle">
<div className="flex items-center gap-3">
<iconify-icon height="20" icon="solar:moon-linear" id="theme-icon" width="20"></iconify-icon>
<span id="theme-text">Dark Mode</span>
</div>
<div className="w-8 h-4 bg-brand-800 rounded-full relative border border-brand-400/30">
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full transition-all duration-300" id="theme-dot"></div>
</div>
</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto w-full relative">

<div className="fixed inset-0 bg-slate-900/50 z-40 hidden lg:hidden backdrop-blur-sm transition-opacity" id="sidebar-overlay"></div>
<div className="max-w-7xl mx-auto px-6 py-8 md:px-10 md:py-10">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
<div>
<h1 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight mb-2">Team Vault</h1>
<p className="text-sm text-slate-500 dark:text-slate-400">Manage your organization's teams and members access.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg shadow-brand-600/20 active:scale-95">
<iconify-icon height="18" icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Create Team
                    </button>
</div>

<div className="mb-8 relative group">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 group-focus-within:text-brand-500 transition-colors" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm placeholder-slate-400 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all shadow-sm" placeholder="Search team by name..." type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-brand-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-brand-600 transition-colors">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border border-orange-100 dark:border-orange-900/30 flex items-center justify-center font-semibold text-lg tracking-tight">
                                DE
                            </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-1">Design Engineering</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Responsible for maintaining the design system and frontend UI components.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=1"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=2"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=3"/>
<div className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 text-[10px] flex items-center justify-center text-slate-500 font-medium">+4</div>
</div>
<span className="text-xs font-medium text-slate-400">8 Members</span>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-brand-500/30 transition-all duration-300 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-brand-600 transition-colors">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center font-semibold text-lg tracking-tight">
                                CP
                            </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-1">Core Platform</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Backend infrastructure, API gateways, and database management teams.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=4"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=5"/>
</div>
<span className="text-xs font-medium text-slate-400">12 Members</span>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-brand-500/30 transition-all duration-300 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-brand-600 transition-colors">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center font-semibold text-lg tracking-tight">
                                GM
                            </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-1">Growth Marketing</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">User acquisition, SEO optimization, and outreach campaigns.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=8"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=9"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=10"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=11"/>
</div>
<span className="text-xs font-medium text-slate-400">6 Members</span>
</div>
</div>

<div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/20 hover:border-brand-500/30 transition-all duration-300 relative">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-slate-400 hover:text-brand-600 transition-colors">
<iconify-icon height="20" icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-lg bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 border border-sky-100 dark:border-sky-900/30 flex items-center justify-center font-semibold text-lg tracking-tight">
                                QA
                            </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight mb-1">Quality Assurance</h3>
<p className="text-xs text-slate-500 mb-6 line-clamp-2">Manual testing, automation scripts, and release verification.</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border-2 border-white dark:border-slate-900 object-cover" src="https://i.pravatar.cc/150?u=12"/>
</div>
<span className="text-xs font-medium text-slate-400">4 Members</span>
</div>
</div>

<button className="group flex flex-col items-center justify-center h-full min-h-[220px] rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 cursor-pointer text-slate-400 hover:text-brand-600">
<div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon className="group-hover:text-brand-500 transition-colors" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium">Create New Team</span>
</button>
</div>
</div>
</main>
</div>


    </>
  );
}
