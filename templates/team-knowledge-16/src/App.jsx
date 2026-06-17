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
900: '#0f172a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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

<div @click="mobileMenu = false" className="fixed inset-0 z-20 bg-black/50 lg:hidden" x-show="mobileMenu" x-transition.opacity=""></div>

<aside :className="mobileMenu ? 'translate-x-0' : '-translate-x-full'" className="fixed inset-y-0 left-0 z-30 w-64 bg-[#142038] text-white/80 transition-transform duration-300 lg:static lg:translate-x-0 border-r border-white/5 flex flex-col justify-between">
<div>

<div className="h-16 flex items-center px-6 border-b border-white/5">
<span className="text-lg font-medium tracking-tighter text-white">ADW</span>
</div>

<nav className="p-3 space-y-8 mt-4">

<div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal rounded-md hover:bg-white/5 hover:text-white transition-colors group" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Overview
                        </a>
</div>

<div>
<div className="px-3 mb-2 text-[11px] uppercase tracking-widest text-white/40 font-medium">Platform</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal rounded-md hover:bg-white/5 hover:text-white transition-colors group" href="#">
<iconify-icon icon="solar:folder-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Projects Catalog
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-blue-600 text-white shadow-sm shadow-blue-900/20 rounded-md group" href="#">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Team Vault
                            </a>
</div>
</div>

<div>
<div className="px-3 mb-2 text-[11px] uppercase tracking-widest text-white/40 font-medium">Knowledge</div>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal rounded-md hover:bg-white/5 hover:text-white transition-colors group" href="#">
<iconify-icon icon="solar:library-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Resources
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal rounded-md hover:bg-white/5 hover:text-white transition-colors group" href="#">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Blog
                            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-normal rounded-md hover:bg-white/5 hover:text-white transition-colors group" href="#">
<iconify-icon icon="solar:videocamera-record-linear" strokeWidth="1.5" width="20"></iconify-icon>
                                Sharing Sessions
                            </a>
</div>
</div>
</nav>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-medium text-white ring-2 ring-white/10">JD</div>
<div className="text-xs">
<div className="text-white font-medium">John Doe</div>
<div className="text-white/50">Admin</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0B0C0E]/50 backdrop-blur-sm flex items-center justify-between px-6 lg:px-10 shrink-0 z-10">
<div className="flex items-center gap-4 lg:hidden">
<button @click="mobileMenu = true" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="text-sm font-medium text-slate-900 dark:text-white tracking-tight">ADW</span>
</div>
<div className="hidden lg:block">

<div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
<span>Platform</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-800 dark:text-slate-200">Team Vault</span>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/5 text-xs text-slate-400 w-48 shadow-sm">
<iconify-icon icon="solar:magnifer-linear" width="14"></iconify-icon>
<span>Search...</span>
<span className="ml-auto text-[10px] border border-gray-200 dark:border-gray-700 px-1 rounded bg-gray-50 dark:bg-gray-800">⌘K</span>
</div>

<button @click="toggleTheme()" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-slate-500 dark:text-slate-400">
<iconify-icon :icon="darkMode ? 'solar:sun-linear' : 'solar:moon-linear'" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-6xl mx-auto px-6 lg:px-10 py-10 space-y-12">

<section className="space-y-6">
<div className="space-y-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:atom-linear" width="24"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white">Reactors</h1>
</div>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                                The core engineering unit responsible for the platform's architectural integrity and high-performance computation modules.
                            </p>
</div>

<div className="p-1 rounded-xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-800/50 dark:to-gray-800">
<div className="bg-white dark:bg-[#111214] rounded-[10px] p-5 border border-transparent">
<div className="flex items-start gap-4">
<iconify-icon className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" icon="solar:flag-linear" width="20"></iconify-icon>
<div>
<h3 className="text-sm font-medium text-slate-900 dark:text-white mb-1">Our Mission</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                            To build scalable, resilient, and developer-friendly infrastructure that empowers every other team within ADW to ship faster and with greater confidence.
                                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-8" x-data="{ currentTab: 'projects' }">

<div className="lg:col-span-2 space-y-6">

<div className="flex items-center gap-6 border-b border-gray-200 dark:border-gray-800 pb-1px">
<button :className="currentTab === 'projects' ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-200'" @click="currentTab = 'projects'" className="pb-3 text-sm font-medium border-b-2 transition-colors duration-200 flex items-center gap-2">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
                                    Projects
                                    <span :className="currentTab === 'projects' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : ''" className="ml-0.5 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-[10px] text-slate-500 dark:text-slate-400 font-semibold">3</span>
</button>
<button :className="currentTab === 'resources' ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-200'" @click="currentTab = 'resources'" className="pb-3 text-sm font-medium border-b-2 transition-colors duration-200 flex items-center gap-2">
<iconify-icon icon="solar:book-bookmark-linear" width="16"></iconify-icon>
                                    Resources
                                    <span :className="currentTab === 'resources' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : ''" className="ml-0.5 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10 text-[10px] text-slate-500 dark:text-slate-400 font-semibold">3</span>
</button>
<button :className="currentTab === 'onboarding' ? 'text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-500' : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-700 dark:hover:text-slate-200'" @click="currentTab = 'onboarding'" className="pb-3 text-sm font-medium border-b-2 transition-colors duration-200 flex items-center gap-2">
<iconify-icon icon="solar:clipboard-check-linear" width="16"></iconify-icon>
                                    Onboarding
                                </button>
</div>

<div className="min-h-[300px]">

<div className="space-y-4" x-show="currentTab === 'projects'" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-2">

<div className="relative group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-full py-2.5 pl-9 pr-4 text-sm bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 dark:text-slate-200 placeholder-slate-400" placeholder="Filter projects..." type="text"/>
</div>

<div className="space-y-3">

<div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<h4 className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">UI-KIT</h4>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900/30">Active</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">The centralized design system for all ADW products.</p>
</div>
<div className="flex items-center justify-center px-2">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<a className="absolute inset-0 z-0" href="#"></a>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<h4 className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">OP Dashboard</h4>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">Beta</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">Operational metrics visualization for executive review.</p>
</div>
<div className="flex items-center justify-center px-2">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<a className="absolute inset-0 z-0" href="#"></a>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center text-pink-600 dark:text-pink-400 shrink-0">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-0.5">
<h4 className="text-sm font-medium text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">n8n Workflow Automation</h4>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Internal</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">Automating pipeline triggers and notifications.</p>
</div>
<div className="flex items-center justify-center px-2">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<a className="absolute inset-0 z-0" href="#"></a>
</div>
</div>
</div>

<div className="flex flex-col gap-4" x-cloak="" x-show="currentTab === 'resources'" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-2">

<div className="flex items-center gap-3 pb-1">
<div className="relative flex-1 group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-full py-2 pl-9 pr-4 text-xs font-medium bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-700 dark:text-slate-200" placeholder="Search resources..." type="text"/>
</div>
<button className="shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium shadow-sm shadow-blue-600/20 transition-all hover:shadow-blue-600/30">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                            New Resource
                                        </button>
</div>
<div className="space-y-3">

<div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-slate-900 dark:text-white mb-0.5">Team Rules &amp; Manifest</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">Code of conduct and engineering principles.</p>
</div>
<div className="flex items-center justify-center px-2">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<a className="absolute inset-0 z-0" href="#"></a>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
<iconify-icon icon="solar:code-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-slate-900 dark:text-white mb-0.5">Project Boilerplates</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">Next.js, Tailwind, and Python starter kits.</p>
</div>
<div className="flex items-center justify-center px-2">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<a className="absolute inset-0 z-0" href="#"></a>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#111214] border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors group relative cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
<iconify-icon icon="solar:chat-round-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-slate-900 dark:text-white mb-0.5">Remote Communication Guide</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">Async best practices and meeting etiquette.</p>
</div>
<div className="flex items-center justify-center px-2">
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</div>
<a className="absolute inset-0 z-0" href="#"></a>
</div>
</div>
</div>

<div x-cloak="" x-data="{
                                         tasks: [
                                             { id: 1, title: 'Configure VPN access', checked: true },
                                             { id: 2, title: 'Install dependencies (Node v18+)', checked: true },
                                             { id: 3, title: 'Read the Contribution Guide', checked: false },
                                             { id: 4, title: 'Join the daily standup', checked: false },
                                             { id: 5, title: 'Submit first PR', checked: false }
                                         ],
                                         get progress() {
                                             return Math.round((this.tasks.filter(t =&gt; t.checked).length / this.tasks.length) * 100);
                                         }
                                     }" x-show="currentTab === 'onboarding'" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-2">
<div className="bg-white dark:bg-[#111214] rounded-xl border border-gray-200 dark:border-gray-800 p-6">

<div className="mb-6">
<div className="flex justify-between text-xs mb-2 font-medium">
<span className="text-slate-900 dark:text-white">Newcomer Progress</span>
<span className="text-blue-600 dark:text-blue-400" x-text="progress + '%'"></span>
</div>
<div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
<div :style={{'width: '\' + progress + \'%\''}} className="h-full bg-blue-600 transition-all duration-500 ease-out"></div>
</div>
</div>

<div className="space-y-3">
<template :key="task.id" x-htmlFor="task in tasks">
<div @click="task.checked = !task.checked" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 cursor-pointer transition-colors group select-none">

<div :className="task.checked ? 'bg-blue-600 border-blue-600 text-white' : 'border-gray-300 dark:border-gray-600 bg-transparent group-hover:border-blue-400'" className="w-5 h-5 rounded border flex items-center justify-center transition-colors duration-200">
<iconify-icon icon="solar:check-read-linear" width="14" x-show="task.checked"></iconify-icon>
</div>
<span :className="task.checked ? 'text-green-600 dark:text-green-500 line-through decoration-green-600/30' : 'text-slate-700 dark:text-slate-300'" className="text-sm transition-colors duration-200" x-text="task.title"></span>
</div>
</template>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white dark:bg-[#111214] rounded-xl border border-gray-200 dark:border-gray-800 sticky top-6">
<div className="p-5 border-b border-gray-100 dark:border-gray-800/50 flex items-center justify-between">
<h3 className="text-sm font-medium text-slate-900 dark:text-white">Team Members</h3>
<span className="text-xs text-slate-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full">5</span>
</div>
<div className="p-2">
<div className="space-y-1">

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" src="https://i.pravatar.cc/150?u=a"/>
<div className="min-w-0">
<div className="text-xs font-medium text-slate-900 dark:text-white truncate">Sarah Jenkins</div>
<div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Tech Lead</div>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-green-500 ring-2 ring-white dark:ring-[#111214]"></div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" src="https://i.pravatar.cc/150?u=b"/>
<div className="min-w-0">
<div className="text-xs font-medium text-slate-900 dark:text-white truncate">Michael Chen</div>
<div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Frontend Engineer</div>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-green-500 ring-2 ring-white dark:ring-[#111214]"></div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" src="https://i.pravatar.cc/150?u=c"/>
<div className="min-w-0">
<div className="text-xs font-medium text-slate-900 dark:text-white truncate">Jessica Lee</div>
<div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Product Designer</div>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 ring-2 ring-white dark:ring-[#111214]"></div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default">
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700" src="https://i.pravatar.cc/150?u=d"/>
<div className="min-w-0">
<div className="text-xs font-medium text-slate-900 dark:text-white truncate">David Ross</div>
<div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Backend Engineer</div>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-green-500 ring-2 ring-white dark:ring-[#111214]"></div>
</div>
</div>

<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-default">
<div className="w-8 h-8 rounded-full border border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs text-gray-400">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs font-medium text-slate-400 truncate">Hire pending...</div>
</div>
</div>
</div>
<div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/50">
<button className="w-full py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-50 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
                                            Schedule Sync
                                        </button>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
</div>

    </>
  );
}
