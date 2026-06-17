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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-xl">
<div className="flex h-14 items-center justify-between px-4 lg:px-8">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="flex h-6 w-6 items-center justify-center rounded bg-white text-[#0A0A0A]">
<span className="iconify" data-icon="lucide:command" data-width="14"></span>
</div>
<span className="text-sm font-medium tracking-tight text-white group-hover:opacity-80 transition-opacity">NEXUS</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-white" href="#">Documentation</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Examples</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Release Notes</a>
</div>
</div>

<div className="flex items-center gap-4">

<button className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-3 pr-2 text-xs text-neutral-400 hover:border-white/20 hover:text-neutral-300 transition-all">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
<span>Search documentation...</span>
<span className="flex items-center gap-0.5 rounded bg-white/10 px-1.5 py-0.5 font-sans text-[10px] font-medium text-neutral-400">
<span className="iconify" data-icon="lucide:command" data-width="10"></span>K
                    </span>
</button>

<div className="flex items-center gap-3 pl-2 border-l border-white/5">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
</div>

<button className="lg:hidden text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>

<div className="flex max-w-[1440px] mx-auto pt-14">

<aside className="fixed hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto border-r border-white/5 bg-[#0A0A0A] pb-10 pt-8 lg:block scrollbar-hide">
<div className="px-6">
<div className="mb-8">
<h5 className="mb-3 text-xs font-semibold text-white tracking-wide uppercase opacity-90">Getting Started</h5>
<ul className="space-y-1.5">
<li>
<a className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm font-medium text-white border border-white/5 shadow-[0_1px_2px_rgba(0,0,0,0.2)]" href="#">
<span className="iconify text-sky-400" data-icon="lucide:sparkles" data-width="14"></span>
                                Introduction
                            </a>
</li>
<li>
<a className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">
                                Installation
                            </a>
</li>
<li>
<a className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">
                                Architecture
                            </a>
</li>
<li>
<a className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">
                                Upgrade Guide
                            </a>
</li>
</ul>
</div>
<div className="mb-8">
<h5 className="mb-3 text-xs font-semibold text-white tracking-wide uppercase opacity-90">Core Concepts</h5>
<ul className="space-y-1.5">
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Authentication</a></li>
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Database Access</a></li>
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Middleware</a></li>
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Routing</a></li>
</ul>
</div>
<div className="mb-8">
<h5 className="mb-3 text-xs font-semibold text-white tracking-wide uppercase opacity-90">Components</h5>
<ul className="space-y-1.5">
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Buttons</a></li>
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Cards</a></li>
<li><a className="block rounded-md px-3 py-1.5 text-sm text-neutral-400 hover:bg-white/5 hover:text-white transition-all" href="#">Inputs</a></li>
</ul>
</div>
</div>
</aside>

<main className="flex-1 min-w-0 lg:pl-64 xl:pr-64">
<div className="mx-auto max-w-3xl px-6 py-12 lg:px-12">

<div className="mb-6 flex items-center gap-2 text-xs text-neutral-500">
<span>Docs</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span>Getting Started</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-white">Introduction</span>
</div>

<h1 className="mb-4 text-3xl font-medium tracking-tight text-white lg:text-4xl">Introduction to Nexus</h1>
<p className="mb-10 text-lg leading-relaxed text-neutral-400">
                    Nexus is a high-performance framework designed for building modern applications with speed and precision. It combines the best practices of server-side rendering with the interactivity of client-side hydration.
                </p>

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-white flex items-center gap-2">
<span className="iconify text-sky-500" data-icon="lucide:zap" data-width="20"></span>
                        Quick Start
                    </h2>
<p className="text-sm leading-relaxed text-neutral-400">
                        To get started with Nexus, you can use our automatic CLI tool which scaffolds a new project with best practices pre-configured.
                    </p>

<div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0F0F0F] shadow-2xl">
<div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
<span className="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
<span className="h-2.5 w-2.5 rounded-full bg-neutral-700"></span>
</div>
<span className="text-xs font-medium text-neutral-500">Terminal</span>
</div>
<div className="p-4 overflow-x-auto">
<code className="font-mono text-sm">
<div className="flex gap-2">
<span className="text-emerald-400 select-none">$</span>
<span className="text-white">npm create</span>
<span className="text-sky-300">@nexus/app@latest</span>
<span className="text-neutral-400">my-app</span>
</div>
<div className="mt-2 text-neutral-500 select-none"># Follow the prompts to configure your installation</div>
</code>
</div>
<button className="absolute right-3 top-[50px] p-1.5 rounded-md text-neutral-500 hover:bg-white/10 hover:text-white transition-all opacity-0 hover:opacity-100 group-hover:opacity-100">
<span className="iconify" data-icon="lucide:copy" data-width="16"></span>
</button>
</div>

<div className="my-8 flex items-start gap-4 rounded-lg border border-sky-500/20 bg-sky-500/5 p-4">
<span className="iconify mt-0.5 shrink-0 text-sky-400" data-icon="lucide:info" data-width="18"></span>
<div className="space-y-1">
<h4 className="text-sm font-medium text-sky-200">Prerequisites</h4>
<p className="text-sm text-sky-200/70">
                                Ensure you have Node.js version 18.0.0 or higher installed on your machine before proceeding with the installation.
                            </p>
</div>
</div>
</div>
<hr className="my-12 border-white/5"/>

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-white">Framework Features</h2>
<p className="text-sm text-neutral-400">Explore the core capabilities that make Nexus unique.</p>
<div className="grid gap-4 md:grid-cols-2">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<div className="mb-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white group-hover:border-white/20 group-hover:bg-white/10 transition-colors">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="mb-2 text-base font-medium text-white">Edge Computing</h3>
<p className="text-sm text-neutral-400">Deploy your functions to the edge globally with zero configuration required.</p>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors">
<div className="mb-4 inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white group-hover:border-white/20 group-hover:bg-white/10 transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="mb-2 text-base font-medium text-white">Type Safety</h3>
<p className="text-sm text-neutral-400">End-to-end type safety from your database schema to your frontend components.</p>
</div>
</div>
</div>

<div className="mt-12 space-y-6">
<h2 className="text-xl font-medium tracking-tight text-white">Interactive Configuration</h2>
<p className="text-sm text-neutral-400">Customize your installation settings directly.</p>
<div className="rounded-xl border border-white/10 bg-[#0F0F0F] p-6">
<form className="space-y-6">

<div className="flex items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-neutral-600 bg-neutral-800 checked:border-sky-500 checked:bg-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:ring-offset-1 focus:ring-offset-[#0A0A0A] transition-all" id="ts" type="checkbox"/>
<span className="iconify pointer-events-none absolute left-0.5 top-0.5 hidden text-white peer-checked:block" data-icon="lucide:check" data-width="12"></span>
</div>
<label className="select-none text-sm text-neutral-300" htmlFor="ts">
<span className="block font-medium text-white">TypeScript</span>
<span className="block text-xs text-neutral-500 mt-0.5">Initialize the project with strict TypeScript configuration.</span>
</label>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Experimental Features</span>
<span className="text-xs text-neutral-500">Access beta APIs and unstable hooks.</span>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input checked="" className="peer sr-only" type="checkbox" value=""/>
<div className="h-5 w-9 rounded-full bg-neutral-800 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-neutral-400 after:transition-all after:content-[''] peer-checked:bg-sky-900 peer-checked:after:translate-x-full peer-checked:after:bg-sky-400 border border-neutral-700 peer-checked:border-sky-800"></div>
</label>
</div>

<div className="pt-2">
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-white">Timeout Duration</span>
<span className="text-xs font-mono text-sky-400">5000ms</span>
</div>
<div className="relative w-full h-1.5 bg-neutral-800 rounded-full">
<div className="absolute h-full bg-sky-500 rounded-full" style={{width: '60%'}}></div>
<div className="absolute h-4 w-4 bg-white rounded-full border border-neutral-300 shadow-md top-1/2 -translate-y-1/2 -ml-2 cursor-pointer hover:scale-110 transition-transform" style={{left: '60%'}}></div>
</div>
</div>
</form>
</div>
</div>

<div className="mt-16 flex items-center justify-between border-t border-white/5 pt-8">
<a className="group flex flex-col gap-1 pr-4" href="#">
<span className="text-xs text-neutral-500">Previous</span>
<div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-sky-400 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
                            Introduction
                        </div>
</a>
<a className="group flex flex-col items-end gap-1 pl-4 text-right" href="#">
<span className="text-xs text-neutral-500">Next</span>
<div className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-sky-400 transition-colors">
                            Installation
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</a>
</div>
</div>
</main>

<aside className="fixed right-0 hidden h-[calc(100vh-3.5rem)] w-64 overflow-y-auto pt-12 xl:block">
<div className="px-8 border-l border-white/5 h-full">
<h5 className="mb-4 text-xs font-semibold uppercase tracking-wide text-white">On this page</h5>
<ul className="space-y-3 text-xs">
<li>
<a className="block text-sky-400 transition-colors" href="#">Introduction to Nexus</a>
</li>
<li>
<a className="block text-neutral-500 hover:text-white transition-colors" href="#">Quick Start</a>
</li>
<li>
<a className="block pl-3 text-neutral-500 hover:text-white transition-colors border-l border-white/10" href="#">Prerequisites</a>
</li>
<li>
<a className="block text-neutral-500 hover:text-white transition-colors" href="#">Framework Features</a>
</li>
<li>
<a className="block text-neutral-500 hover:text-white transition-colors" href="#">Configuration</a>
</li>
</ul>

<div className="mt-10 rounded-lg border border-white/10 bg-white/[0.02] p-4">
<h6 className="text-xs font-medium text-white mb-2">Have questions?</h6>
<p className="text-[11px] text-neutral-400 mb-3 leading-relaxed">Join our community on Discord to get help from the team.</p>
<button className="w-full rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:message-circle" data-width="12"></span>
                        Join Discord
                    </button>
</div>
</div>
</aside>
</div>

    </>
  );
}
