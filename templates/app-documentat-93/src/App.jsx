import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
}
}
}
}



// Theme Toggle Logic
function toggleTheme() {
if (document.documentElement.classList.contains('dark')) {
document.documentElement.classList.remove('dark');
localStorage.setItem('theme', 'light');
} else {
document.documentElement.classList.add('dark');
localStorage.setItem('theme', 'dark');
}
}
// Initialize Theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
// Mobile Menu Logic
function toggleMenu() {
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('menu-overlay');
menu.classList.toggle('translate-x-0');
menu.classList.toggle('-translate-x-full');
overlay.classList.toggle('hidden');
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b dark:border-zinc-800 glass h-14 border-slate-200">
<div className="max-w-[90rem] mx-auto px-4 h-full flex items-center justify-between">

<div className="flex items-center gap-4">
<button aria-label="Toggle menu" className="lg:hidden p-2 dark:hover:bg-zinc-800 rounded-md transition-colors hover:bg-slate-100" onclick="toggleMenu()">
<svg aria-hidden="true" className="iconify text-lg iconify--lucide" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded-md flex items-center justify-center font-semibold text-xs shadow-inner bg-indigo-600 text-white shadow-indigo-400">F</div>
<span className="text-sm font-semibold tracking-tight dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-slate-900">flux manual</span>
</a>
<span className="hidden sm:inline-block px-2 py-0.5 rounded-full dark:bg-zinc-900 border dark:border-zinc-800 text-[10px] uppercase tracking-wider font-medium text-slate-500 bg-slate-100 border-slate-200">v2.4.0</span>
</div>

<div className="flex items-center gap-3">

<button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:bg-zinc-900 dark:text-zinc-400 border dark:border-zinc-800 rounded-md dark:hover:border-zinc-700 transition-colors w-48 justify-between group bg-slate-100 border-slate-200 hover:border-slate-300">
<span className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
                        Search docs...
                    </span>
</button>

<div className="relative group">
<button className="p-2 dark:hover:bg-zinc-800 rounded-md dark:text-zinc-300 transition-colors flex items-center gap-1 hover:bg-slate-100 text-slate-700">
<span className="text-xs font-medium">EN</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="absolute right-0 top-full mt-1 w-32 dark:bg-zinc-900 border dark:border-zinc-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50 bg-white border-slate-200">
<div className="py-1">
<a className="block px-3 py-2 text-xs dark:text-indigo-400 dark:bg-zinc-800/50 text-indigo-600 bg-slate-50" href="#">English</a>
<a className="block px-3 py-2 text-xs dark:text-zinc-400 dark:hover:bg-zinc-800 text-slate-600 hover:bg-slate-50" href="#">Español</a>
<a className="block px-3 py-2 text-xs dark:text-zinc-400 dark:hover:bg-zinc-800 text-slate-600 hover:bg-slate-50" href="#">Français</a>
</div>
</div>
</div>

<button aria-label="Toggle theme" className="p-2 dark:hover:bg-zinc-800 rounded-md dark:text-zinc-300 transition-colors hover:bg-slate-100 text-slate-700" onclick="toggleTheme()">
<svg aria-hidden="true" className="iconify block dark:hidden iconify--lucide" data-icon="lucide:sun" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<svg aria-hidden="true" className="iconify hidden dark:block iconify--lucide" data-icon="lucide:moon" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<div className="max-w-[90rem] mx-auto flex pt-14 min-h-screen">

<aside className="hidden lg:block w-64 fixed inset-y-0 pt-14 h-screen border-r dark:border-zinc-800 overflow-y-auto dark:bg-zinc-950/50 border-slate-200 bg-white/50">
<nav className="p-6 space-y-8">
<div>
<h3 className="text-xs font-semibold dark:text-zinc-100 uppercase tracking-wider mb-3 text-slate-900">Getting Started</h3>
<ul className="space-y-1">
<li><a className="block px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors text-slate-600 hover:text-indigo-600" href="#">Introduction</a></li>
<li><a className="block px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors text-slate-600 hover:text-indigo-600" href="#">Installation</a></li>
<li><a className="block px-3 py-1.5 text-sm dark:text-indigo-400 dark:bg-indigo-900/10 rounded-md font-medium border-l-2 pl-2.5 text-indigo-600 bg-indigo-50/50 border-indigo-600" href="#">Quick Setup</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold dark:text-zinc-100 uppercase tracking-wider mb-3 text-slate-900">Core Features</h3>
<ul className="space-y-1">
<li>
<button className="w-full text-left flex items-center justify-between px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors group text-slate-600 hover:text-indigo-600">
<span>Projects</span>
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors text-slate-400 iconify--lucide" data-icon="lucide:chevron-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</li>
<li>
<button className="w-full text-left flex items-center justify-between px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors group text-slate-600 hover:text-indigo-600">
<span>Team Management</span>
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors text-slate-400 iconify--lucide" data-icon="lucide:chevron-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</li>
<li><a className="block px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors text-slate-600 hover:text-indigo-600" href="#">Analytics</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold dark:text-zinc-100 uppercase tracking-wider mb-3 text-slate-900">Reference</h3>
<ul className="space-y-1">
<li><a className="block px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors text-slate-600 hover:text-indigo-600" href="#">API Keys</a></li>
<li><a className="block px-3 py-1.5 text-sm dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors text-slate-600 hover:text-indigo-600" href="#">Shortcuts</a></li>
</ul>
</div>
</nav>
</aside>

<div className="fixed inset-0 dark:bg-black/50 backdrop-blur-sm z-40 hidden lg:hidden bg-black/20" id="menu-overlay" onclick="toggleMenu()"></div>

<aside className="fixed inset-y-0 left-0 w-64 dark:bg-zinc-950 border-r dark:border-zinc-800 z-50 transform -translate-x-full transition-transform duration-300 lg:hidden bg-white border-slate-200" id="mobile-menu">
<div className="p-6">
<div className="flex items-center justify-between mb-8">
<span className="text-sm font-semibold tracking-tight dark:text-zinc-100 text-slate-900">Menu</span>
<button className="p-1 text-slate-500 dark:hover:text-zinc-100 hover:text-slate-900" onclick="toggleMenu()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<nav className="space-y-8">
<div>
<h3 className="text-xs font-semibold dark:text-zinc-100 uppercase tracking-wider mb-3 text-slate-900">Getting Started</h3>
<ul className="space-y-2">
<li><a className="block text-sm dark:text-indigo-400 font-medium text-indigo-600" href="#">Quick Setup</a></li>
<li><a className="block text-sm dark:text-zinc-400 text-slate-600" href="#">Introduction</a></li>
</ul>
</div>
</nav>
</div>
</aside>

<main className="flex-1 lg:pl-64 w-full">
<div className="max-w-4xl mx-auto px-6 py-12 lg:px-12">

<div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-500 mb-6">
<span>Docs</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Getting Started</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="dark:text-zinc-200 font-medium text-slate-900">Quick Setup</span>
</div>

<div className="mb-12 border-b dark:border-zinc-800/50 pb-8 border-slate-100">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight dark:text-white mb-4 text-slate-900">Setting up your workspace</h1>
<p className="text-lg dark:text-zinc-400 leading-relaxed max-w-2xl text-slate-600">
                        Follow this step-by-step guide to configure your initial environment and start managing tasks efficiently within the Flux mobile app.
                    </p>
</div>

<div className="relative space-y-24">

<div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px dark:bg-zinc-800 -translate-x-1/2 hidden sm:block z-0 bg-slate-200"></div>

<div className="relative z-10 grid sm:grid-cols-2 gap-12 items-center group">

<div className="order-2 sm:order-1 sm:text-right pr-0 sm:pr-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-zinc-900 border dark:border-zinc-700 shadow-sm text-sm font-semibold dark:text-white mb-4 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0 z-20 bg-white border-slate-200 text-slate-900">1</div>
<h2 className="text-xl font-medium dark:text-white mb-2 tracking-tight text-slate-900">Create a New Workspace</h2>
<p className="text-sm dark:text-zinc-400 leading-relaxed mb-4 text-slate-600">
                                Tap the  located in the top right corner of the dashboard. This will open the workspace creation modal.
                            </p>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded dark:bg-indigo-900/20 dark:text-indigo-300 text-xs font-medium border dark:border-indigo-500/20 bg-indigo-50 text-indigo-700 border-indigo-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:info" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
                                Pro tip: You can swipe right to quick-add.
                            </div>
</div>

<div className="order-1 sm:order-2 pl-0 sm:pl-12 flex justify-center sm:justify-start">
<div className="relative w-[280px] h-[580px] rounded-[3rem] shadow-2xl border-[8px] overflow-hidden ring-1 dark:ring-white/10 transform transition-transform duration-500 hover:scale-[1.01] hover:-rotate-1 bg-slate-900 border-slate-900 ring-black/5">

<div className="absolute top-0 w-full h-6 z-20 flex justify-between px-6 items-center text-[10px] font-medium bg-black text-white">
<span className="">9:41</span>
<div className="flex gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:signal" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:battery" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 rounded-b-xl z-20 bg-black"></div>

<div className="w-full h-full dark:bg-zinc-900 pt-5 flex flex-col relative bg-slate-50">
<img className="w-full rounded-lg" src="https://ejanata.com.bd/static/app/image/add%20ben%20by%20routing%20no%202.jpg"/>






</div>
</div>
</div>
</div>

<div className="relative z-10 grid sm:grid-cols-2 gap-12 items-center group">

<div className="order-1 sm:order-1 pr-0 sm:pr-12 flex justify-center sm:justify-end">
<div className="relative w-[280px] h-[580px] rounded-[3rem] shadow-2xl border-[8px] overflow-hidden ring-1 dark:ring-white/10 transform transition-transform duration-500 hover:scale-[1.01] hover:rotate-1 bg-slate-900 border-slate-900 ring-black/5">

<div className="absolute top-0 w-full h-6 z-20 flex justify-between px-6 items-center text-[10px] font-medium bg-black text-white">
<span>9:42</span>
<div className="flex gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:signal" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:battery" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 rounded-b-xl z-20 bg-black"></div>

<div className="w-full h-full dark:bg-zinc-900 pt-5 flex flex-col bg-slate-50">
<img className="w-full rounded-lg" src="https://ejanata.com.bd/static/app/image/ben%20list.jpg"/>


</div>
</div>
</div>

<div className="order-2 sm:order-2 pl-0 sm:pl-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-zinc-900 border dark:border-zinc-700 shadow-sm text-sm font-semibold dark:text-white mb-4 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0 z-20 bg-white border-slate-200 text-slate-900">2</div>
<h2 className="text-xl font-medium dark:text-white mb-2 tracking-tight text-slate-900">Enter Workspace Details</h2>
<p className="text-sm dark:text-zinc-400 leading-relaxed mb-4 text-slate-600">
                                Fill in the workspace name. Choose a color code to easily distinguish it from other projects in your list.
                            </p>
<ul className="space-y-2 mb-4">
<li className="flex items-start gap-2 text-xs dark:text-zinc-400 text-slate-600">
<svg aria-hidden="true" className="iconify text-emerald-500 mt-0.5 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Names must be unique.</span>
</li>
<li className="flex items-start gap-2 text-xs dark:text-zinc-400 text-slate-600">
<svg aria-hidden="true" className="iconify text-emerald-500 mt-0.5 iconify--lucide" data-icon="lucide:check-circle-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Colors sync across devices.</span>
</li>
</ul>
</div>
</div>

<div className="relative z-10 grid sm:grid-cols-2 gap-12 items-center group">

<div className="order-2 sm:order-1 sm:text-right pr-0 sm:pr-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-zinc-900 border dark:border-zinc-700 shadow-sm text-sm font-semibold dark:text-white mb-4 sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-0 z-20 bg-white border-slate-200 text-slate-900">3</div>
<h2 className="text-xl font-medium dark:text-white mb-2 tracking-tight text-slate-900">Confirmation</h2>
<p className="text-sm dark:text-zinc-400 leading-relaxed mb-4 text-slate-600">
                                Once created, you will be redirected to the workspace view. You can now invite team members by tapping the 'Share' icon.
                            </p>
<a className="inline-flex items-center gap-1 text-sm font-medium dark:text-indigo-400 hover:underline text-indigo-600" href="#">
                                Learn about Team Invites
                                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="order-1 sm:order-2 pl-0 sm:pl-12 flex justify-center sm:justify-start">
<div className="relative w-[280px] h-[580px] rounded-[3rem] shadow-2xl border-[8px] overflow-hidden ring-1 dark:ring-white/10 transform transition-transform duration-500 hover:scale-[1.01] hover:-rotate-1 bg-slate-900 border-slate-900 ring-black/5">

<div className="absolute top-0 w-full h-6 z-20 flex justify-between px-6 items-center text-[10px] font-medium bg-black text-white">
<span>9:43</span>
<div className="flex gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:signal" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01M7 20v-4m5 4v-8m5 8V8m5-4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wifi" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:battery" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></g></svg>
</div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 rounded-b-xl z-20 bg-black"></div>

<div className="w-full h-full dark:bg-zinc-900 flex flex-col items-center justify-center bg-slate-50">
<img className="w-full rounded-lg" src="https://ejanata.com.bd/static/app/image/ben%20list%20inactive.jpg"/>


</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-8 border-t dark:border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-4 border-slate-200">
<a className="group block p-4 rounded-xl border dark:border-zinc-800 dark:hover:border-indigo-700 dark:hover:bg-zinc-900 transition-all border-slate-200 hover:border-indigo-300 hover:bg-slate-50" href="#">
<span className="block text-xs font-medium text-slate-500 mb-1">Previous</span>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors text-slate-400 iconify--lucide" data-icon="lucide:arrow-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-medium dark:text-white text-slate-900">Installation</span>
</div>
</a>
<a className="group block p-4 rounded-xl border dark:border-zinc-800 dark:hover:border-indigo-700 dark:hover:bg-zinc-900 text-right transition-all border-slate-200 hover:border-indigo-300 hover:bg-slate-50" href="#">
<span className="block text-xs font-medium text-slate-500 mb-1">Next</span>
<div className="flex items-center gap-2 justify-end">
<span className="text-sm font-medium dark:text-white text-slate-900">Inviting Team Members</span>
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors text-slate-400 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</a>
</div>

<footer className="mt-20 pt-8 text-center sm:text-left border-t dark:border-zinc-800/50 border-slate-100">
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs dark:text-zinc-600 text-slate-400">
                            © 2023 Flux Inc. Built with care.
                        </p>
<div className="flex gap-4">
<a className="dark:hover:text-zinc-400 transition-colors text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="dark:hover:text-zinc-400 transition-colors text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
</div>
</div>
</footer>
</div>
</main>

<aside className="hidden xl:block w-64 fixed right-0 inset-y-0 pt-32 pr-8 overflow-y-auto">
<h4 className="text-xs font-semibold dark:text-zinc-100 uppercase tracking-wider mb-4 text-slate-900">On this page</h4>
<ul className="space-y-3 border-l dark:border-zinc-800 pl-4 border-slate-200">
<li><a className="text-xs dark:text-indigo-400 font-medium block border-l -ml-[17px] pl-4 transition-all text-indigo-600 border-indigo-600" href="#">Create a New Workspace</a></li>
<li><a className="text-xs text-slate-500 dark:text-zinc-500 dark:hover:text-zinc-300 block transition-colors hover:text-slate-900" href="#">Enter Workspace Details</a></li>
<li><a className="text-xs text-slate-500 dark:text-zinc-500 dark:hover:text-zinc-300 block transition-colors hover:text-slate-900" href="#">Confirmation</a></li>
</ul>
</aside>
</div>

<style>
        @keyframes pop {
            0% { transform: scale(0); }
            80% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
