import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
sidebar: {
light: '#2563eb', // blue-600
dark: '#1e3a8a',  // blue-900
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            if (htmlElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-blue-600 dark:bg-blue-950 flex-col justify-between hidden md:flex transition-colors duration-300 border-r border-blue-500/30 dark:border-blue-900">
<div>

<div className="h-16 flex items-center px-6">
<span className="text-2xl font-semibold tracking-tighter text-white">ADW</span>
</div>

<nav className="px-3 py-4 space-y-8">

<div className="space-y-1">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                        Overview
                    </a>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2 opacity-80">Platform</h3>
<div className="space-y-1">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:folder-linear" strokeWidth="1.5"></iconify-icon>
                            Projects Catalog
                        </a>
<a className="sidebar-link active flex items-center gap-3 px-3 py-2 text-sm font-medium text-white rounded-md transition-all shadow-sm ring-1 ring-white/10" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                            Team Vault
                        </a>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2 opacity-80">Knowledge</h3>
<div className="space-y-1">
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:library-linear" strokeWidth="1.5"></iconify-icon>
                            Resources
                        </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
                            Blog
                        </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 rounded-md transition-all group" href="#">
<iconify-icon className="text-lg group-hover:scale-110 transition-transform" icon="solar:screencast-2-linear" strokeWidth="1.5"></iconify-icon>
                            Sharing Sessions
                        </a>
</div>
</div>
</nav>
</div>

<div className="p-4 border-t border-blue-500/30 dark:border-blue-900">
<button className="flex items-center gap-3 w-full p-2 rounded-md hover:bg-white/10 transition-colors text-left">
<div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-bold text-white shadow-inner">JD</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-white truncate">Jane Doe</p>
<p className="text-xs text-blue-200 truncate">Admin</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-500">
<span>Platform</span>
<iconify-icon className="text-xs opacity-50" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-gray-900 dark:text-zinc-200 font-medium">Team Vault</span>
</div>
</div>
<div className="flex items-center gap-4">

<button className="h-9 w-9 rounded-full flex items-center justify-center text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all border border-transparent hover:border-gray-200 dark:hover:border-zinc-700" id="theme-toggle">
<iconify-icon className="text-lg hidden dark:block" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="text-lg block dark:hidden" icon="solar:sun-2-linear"></iconify-icon>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-900 rounded-full border border-gray-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-800 transition-colors">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon>
<span className="pr-2">Search...</span>
<kbd className="hidden md:inline-block text-xs bg-white dark:bg-zinc-800 px-1.5 py-0.5 rounded border border-gray-200 dark:border-zinc-700">⌘K</kbd>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-10">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">Team Vault</h1>
<p className="text-sm text-slate-500 dark:text-zinc-400">Manage your organization's teams and members.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:shadow-md">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                        Create Team
                    </button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
<div className="relative w-full sm:w-72">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 text-sm bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400" placeholder="Search by team name..." type="text"/>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide mr-2">Sort by:</span>
<button className="px-3 py-1.5 text-xs font-medium bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-md hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">Name</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-white transition-colors">Members</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/10 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="h-12 w-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-base font-semibold border border-blue-100 dark:border-blue-900/50">
                            EN
                        </div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 transition-colors">
<iconify-icon className="text-lg rotate-90" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-1">Engineering</h3>
<p className="text-xs text-slate-500 dark:text-zinc-500 mb-6 line-clamp-1">Core platform infrastructure and frontend.</p>
<div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=2"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=3"/>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-gray-50 dark:bg-zinc-800 text-xs font-medium text-gray-500 flex items-center justify-center">+4</div>
</div>
<span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-1 rounded-md">24 Projects</span>
</div>
</div>

<div className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl hover:shadow-purple-900/5 dark:hover:shadow-purple-900/10 hover:border-purple-200 dark:hover:border-purple-800/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="h-12 w-12 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center text-base font-semibold border border-purple-100 dark:border-purple-900/50">
                            DS
                        </div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 transition-colors">
<iconify-icon className="text-lg rotate-90" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-1">Design System</h3>
<p className="text-xs text-slate-500 dark:text-zinc-500 mb-6 line-clamp-1">UI components and brand guidelines.</p>
<div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=4"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=5"/>
</div>
<span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-1 rounded-md">8 Projects</span>
</div>
</div>

<div className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl hover:shadow-emerald-900/5 dark:hover:shadow-emerald-900/10 hover:border-emerald-200 dark:hover:border-emerald-800/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-base font-semibold border border-emerald-100 dark:border-emerald-900/50">
                            MK
                        </div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 transition-colors">
<iconify-icon className="text-lg rotate-90" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-1">Marketing</h3>
<p className="text-xs text-slate-500 dark:text-zinc-500 mb-6 line-clamp-1">Growth, SEO, and content strategy.</p>
<div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=6"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=7"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=8"/>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 bg-gray-50 dark:bg-zinc-800 text-xs font-medium text-gray-500 flex items-center justify-center">+2</div>
</div>
<span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-1 rounded-md">12 Projects</span>
</div>
</div>

<div className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-900/5 dark:hover:shadow-orange-900/10 hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="h-12 w-12 rounded-xl bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center text-base font-semibold border border-orange-100 dark:border-orange-900/50">
                            QA
                        </div>
<button className="text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 transition-colors">
<iconify-icon className="text-lg rotate-90" icon="solar:menu-dots-bold"></iconify-icon>
</button>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-1">Quality Assurance</h3>
<p className="text-xs text-slate-500 dark:text-zinc-500 mb-6 line-clamp-1">Testing automation and manual review.</p>
<div className="flex items-center justify-between border-t border-gray-100 dark:border-zinc-800 pt-4">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=9"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-900 ring-1 ring-gray-100 dark:ring-zinc-800" src="https://i.pravatar.cc/150?u=10"/>
</div>
<span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-1 rounded-md">5 Projects</span>
</div>
</div>

<button className="group relative flex flex-col items-center justify-center p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-zinc-700 bg-transparent hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all duration-300 h-full min-h-[220px]">
<div className="h-14 w-14 rounded-full bg-gray-100 dark:bg-zinc-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 text-gray-500 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center justify-center transition-colors mb-4">
<iconify-icon className="text-3xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-600 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Create New Team</span>
<span className="text-xs text-gray-400 dark:text-zinc-500 mt-2 text-center max-w-[200px]">Add a new department or project group to the organization.</span>
</button>
</div>
<footer className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800 text-center sm:text-left">
<p className="text-xs text-gray-400 dark:text-zinc-600">© 2024 ADW Organization. All rights reserved.</p>
</footer>
</div>
</main>


    </>
  );
}
