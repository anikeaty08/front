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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

        // Initialize Lucide icons
        lucide.createIcons();

        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const navLinks = document.getElementById('navLinks');
        
        menuBtn?.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
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
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="krvLrHX3sj3cg8BHywDj"></div>
</div>


<header className="relative z-10">
<nav className="flex max-w-7xl md:px-6 mx-auto pt-4 px-4 pb-4 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="text-lg font-medium tracking-tight font-geist">Quantum</span>
</a>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="sr-only font-geist">Open menu</span>
</button>
<div className="hidden items-center gap-8 md:flex" id="navLinks">
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist" href="#">Builder</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist" href="#">Templates</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist" href="#">Documentation</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist" href="#">Gallery</a>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist" href="#">Pricing</a>
<div className="hidden h-6 w-px bg-white/10 md:block"></div>
<a className="text-sm font-medium text-slate-300 hover:text-white font-geist" href="#">Sign in</a>
<button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors font-geist">
                    Start Building
                </button>
</div>
</nav>
</header>

<section className="relative z-10">
<div className="max-w-7xl md:px-6 md:pt-16 mr-auto ml-auto pt-10 pr-4 pb-20 pl-4">
<div className="max-w-3xl text-center mr-auto ml-auto">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-zap h-4 w-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                    New: Physics-based animations
                </p>
<h1 className="relative mx-auto text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]" style={{textShadow: `0 10px 40px rgba(0,0,0,0.55)`}}>
<span className="block">
<span className="font-light text-white tracking-tighter font-geist text-left" style={{}}>Unlimited Animation</span>
<span aria-hidden="true" className="relative inline-flex -translate-y-1 ring-1 ring-white/10 border-white/10 border rounded-2xl ml-2 pt-2 pr-2 pb-2 pl-2 shadow-2xl">
<span className="h-10 w-10 sm:h-10 sm:w-20 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8f020ca8-590a-4326-97b8-ba36c7f5a06e_320w.jpg)] bg-cover rounded-lg pt-3 pr-3 pb-3 pl-3"></span>
</span>
</span>
<span className="block mt-1 sm:mt-2">
<span className="font-light text-neutral-50 tracking-tighter font-geist" style={{}}>for</span>
<span aria-hidden="true" className="relative inline-flex -translate-y-1 ring-1 ring-white/10 border-white/10 border rounded-2xl ml-2 pt-2 pr-2 pb-2 pl-2 shadow-2xl">
<span className="h-5 w-8 sm:h-10 sm:w-20 bg-white/5 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f3fe7f7b-8d36-4737-94ab-d5349e70e696_320w.jpg)] bg-cover rounded-md"></span>
</span>
<span className="text-white font-geist font-light tracking-tighter" style={{}}>No-Code Creators</span>
</span>
</h1>
<p className="md:text-lg text-base text-slate-300 mt-6 font-geist">Create stunning animations with our visual builder. From micro-interactions to complex sequences—no code required.</p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<button className="inline-flex hover:bg-blue-500 transition-colors text-sm font-medium text-white font-geist bg-blue-600 rounded-lg pt-3 pr-6 pb-3 pl-6 items-center justify-center">
                        Try Builder Free
                        <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-200 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors font-geist">
<svg className="lucide lucide-play mr-2 h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                        Watch Demo
                    </button>
</div>
</div>
</div>

<div className="max-w-7xl md:px-6 -mb-8 mr-auto ml-auto pr-4 pl-4">
<div className="relative w-full overflow-hidden bg-white/[0.04] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
<span className="h-3 w-3 rounded-full bg-green-500/80"></span>
<div className="ml-3 hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 sm:flex font-geist">
<svg className="lucide lucide-play-circle h-3.5 w-3.5 text-blue-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
                    Quantum Studio — Project: Motion Design
                </div>
</div>
<div className="flex items-center gap-2">
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex">
<svg className="lucide lucide-save h-4 w-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
<button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex">
<svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
</button>
<button className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500 font-geist">Export</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12">

<aside className="hidden md:block md:col-span-3 bg-black/30 border-r border-white/10 p-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-layers h-3.5 w-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                        Elements
                    </div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<div className="space-y-1 text-slate-300 h-[520px] flex flex-col">

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-blue-600 text-white rounded font-geist">Elements</button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-geist">Assets</button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-geist">Media</button>
</div>

<div className="bg-white/5 rounded-lg p-2 mb-3">
<div className="text-xs text-slate-400 mb-2 font-geist">Components</div>
<div className="grid grid-cols-3 gap-1">
<button className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="h-4 w-4 text-blue-400 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect></svg>
</button>
<button className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="h-4 w-4 text-cyan-400 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
</button>
<button className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="h-4 w-4 text-emerald-400 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
<button className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="h-4 w-4 text-pink-400 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18"></rect><circle cx="9" cy="9"></circle><path></path></svg>
</button>
<button className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="h-4 w-4 text-orange-400 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="p-2 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="h-4 w-4 text-purple-400 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</div>

<div className="bg-white/5 rounded-lg p-2 flex-1">
<div className="text-xs text-slate-400 mb-2 font-geist">Scene Elements</div>
<ul className="space-y-1 text-xs">
<li className="flex items-center gap-2 rounded-md bg-blue-500/20 px-2 py-1 font-geist">
<svg className="lucide lucide-square h-3.5 w-3.5 text-blue-400" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18"></rect></svg>
                                Hero Card
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-blue-400"></button>
<button className="w-3 h-3 rounded-sm border border-white/20">
<svg className="w-2 h-2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-geist">
<svg className="lucide lucide-circle h-3.5 w-3.5 text-cyan-400" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
                                Background Orb
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-orange-400"></button>
<button className="w-3 h-3 rounded-sm border border-white/20">
<svg className="w-2 h-2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-geist">
<svg className="lucide lucide-type h-3.5 w-3.5 text-emerald-400" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                                Title Text
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-emerald-400"></button>
<button className="w-3 h-3 rounded-sm border border-white/20">
<svg className="w-2 h-2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-geist">
<svg className="lucide lucide-image h-3.5 w-3.5 text-pink-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18"></rect><circle cx="9" cy="9"></circle><path></path></svg>
                                Feature Icons
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-purple-400"></button>
<button className="w-3 h-3 rounded-sm border border-white/20">
<svg className="w-2 h-2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</button>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-geist opacity-60">
<svg className="h-3.5 w-3.5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
                                Mobile View
                                <div className="ml-auto">
<span className="text-xs text-slate-500 font-geist">Hidden</span>
</div>
</li>
<li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5 font-geist">
<svg className="h-3.5 w-3.5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7"></rect><rect height="7" rx="1" width="7"></rect><rect height="7" rx="1" width="7"></rect><rect height="7" rx="1" width="7"></rect></svg>
                                Button Group
                                <div className="ml-auto flex items-center gap-1">
<button className="w-3 h-3 rounded-full bg-red-400"></button>
<button className="w-3 h-3 rounded-sm border border-white/20">
<svg className="w-2 h-2 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</button>
</div>
</li>
</ul>
</div>

<div className="bg-white/5 rounded-lg p-2 mt-3">
<div className="mb-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock h-4 w-4 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-xs font-medium font-geist">Timeline</span>
</div>
<div className="flex gap-1">
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 bg-blue-500 rounded-sm"></div>
<span className="text-slate-300 font-geist text-[10px]">Hero: 0s-1.2s</span>
<div className="ml-auto text-[10px] text-slate-500">Fade In</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-cyan-500 rounded-sm"></div>
<span className="text-slate-300 font-geist text-[10px]">Orb: 0.5s-2.1s</span>
<div className="ml-auto text-[10px] text-slate-500">Scale</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-5 h-2 bg-emerald-500 rounded-sm"></div>
<span className="text-slate-300 font-geist text-[10px]">Text: 1s-3s</span>
<div className="ml-auto text-[10px] text-slate-500">Slide Up</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-3 h-2 bg-purple-400 rounded-sm"></div>
<span className="text-slate-300 font-geist text-[10px]">Icons: 1.5s-2.8s</span>
<div className="ml-auto text-[10px] text-slate-500">Bounce</div>
</div>
<div className="flex items-center gap-2 text-xs hover:bg-white/5 p-1 rounded">
<div className="w-4 h-2 bg-red-400 rounded-sm"></div>
<span className="text-slate-300 font-geist text-[10px]">Buttons: 2s-3.2s</span>
<div className="ml-auto text-[10px] text-slate-500">Stagger</div>
</div>
</div>
</div>
</div>
</aside>

<main className="relative md:col-span-6 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
<svg className="lucide lucide-play h-4 w-4 text-blue-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-geist">Preview Mode</span>
<div className="text-slate-500">•</div>
<span className="font-geist text-slate-400">1920×1080</span>
<div className="ml-auto flex items-center gap-1">
<div className="text-xs text-slate-500 font-geist">2.3s /</div>
<div className="text-xs text-slate-400 font-geist">3.0s</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="lucide lucide-skip-back h-4 w-4" data-lucide="skip-back" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="rounded-md border border-white/10 bg-blue-600 p-1 hover:bg-blue-500">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10">
<svg className="lucide lucide-skip-forward h-4 w-4" data-lucide="skip-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>

<div className="flex items-center justify-between border-b border-white/10 px-3 py-2 bg-black/10">
<div className="flex items-center gap-2">
<button className="p-1 rounded border border-white/10 bg-blue-600 text-white hover:bg-blue-500">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><rect height="18" rx="2" width="18"></rect></svg>
</button>
<div className="h-4 w-px bg-white/10"></div>
<div className="flex items-center gap-1">
<span className="text-xs text-slate-400 font-geist">Zoom:</span>
<button className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-geist">75%</button>
</div>
</div>
<div className="flex items-center gap-2">
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-300 hover:bg-white/10 font-geist">Desktop</button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-geist">Tablet</button>
<button className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-slate-400 hover:bg-white/10 font-geist">Mobile</button>
</div>
</div>
<div className="p-4 sm:p-6">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 ring-1 ring-white/10 min-h-[400px] sm:min-h-[450px]">

<div className="absolute top-6 left-6 right-6">
<div className="max-w-xl rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur animate-pulse">
<h3 className="text-2xl sm:text-3xl font-geist font-light tracking-tighter" style={{}}>Interactive Animations</h3>
<p className="mt-1 text-sm text-slate-300 font-geist">Create engaging motion experiences with our visual timeline editor.</p>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white font-geist">
<svg className="lucide lucide-zap h-3 w-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                                        Auto-animate
                                    </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 font-geist">
<svg className="lucide lucide-settings h-3 w-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
                                        Customize
                                    </button>
</div>
</div>
</div>

<div className="absolute bottom-20 left-8 w-12 h-12 bg-cyan-500 rounded-lg opacity-40 animate-pulse"></div>
<div className="absolute bottom-32 right-20 w-8 h-8 bg-emerald-500 rounded-full opacity-70 animate-ping"></div>

<div className="absolute bottom-40 left-20 w-6 h-6 bg-purple-400 rounded opacity-50 animate-bounce" style={{animationDelay: `0.5s`}}></div>


<div className="absolute top-6 left-6 w-2 h-2 border-2 border-blue-400 bg-blue-400/20 rounded-full"></div>
<div className="absolute top-6 right-6 w-2 h-2 border-2 border-blue-400 bg-transparent rounded-full"></div>
<div className="absolute bottom-6 left-6 w-2 h-2 border-2 border-blue-400 bg-transparent rounded-full"></div>
<div className="absolute bottom-6 right-6 w-2 h-2 border-2 border-blue-400 bg-transparent rounded-full"></div>
</div>

<div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-lg">
<div className="flex items-center gap-3 mb-2">
<span className="text-xs text-slate-400 font-geist">0s</span>
<div className="flex-1 relative">
<div className="h-2 bg-white/10 rounded-full">
<div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-3/4"></div>
</div>

<div className="absolute top-0 left-0 w-1 h-2 bg-blue-500 rounded-full"></div>
<div className="absolute top-0 left-1/6 w-1 h-2 bg-cyan-500 rounded-full"></div>
<div className="absolute top-0 left-1/3 w-1 h-2 bg-emerald-500 rounded-full"></div>
<div className="absolute top-0 left-1/2 w-1 h-2 bg-purple-500 rounded-full"></div>
<div className="absolute top-0 left-2/3 w-1 h-2 bg-red-500 rounded-full"></div>

<div className="absolute top-0 left-3/4 w-4 h-4 bg-blue-500 rounded-full -mt-1 border-2 border-white shadow-lg"></div>
</div>
<span className="text-xs text-slate-400 font-geist">3s</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="font-geist">Current: 2.3s</span>
<div className="h-3 w-px bg-white/20"></div>
<span className="font-geist text-slate-500">FPS: 60</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-[10px] font-geist">Loop</button>
<button className="px-2 py-0.5 rounded bg-blue-600 text-white text-[10px] font-geist">Live</button>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-l pt-3 pr-3 pb-3 pl-3">
<div className="mb-3 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-sliders-horizontal h-3.5 w-3.5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line><line></line><line></line><line></line><line></line><line></line><line></line></svg>
                        Properties
                    </div>
<div className="flex gap-1">
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</button>
<button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
<svg className="lucide lucide-more-horizontal h-3 w-3" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</div>
</div>

<div className="flex gap-1 mb-3">
<button className="px-2 py-1 text-xs bg-blue-600 text-white rounded font-geist">Animation</button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-geist">Style</button>
<button className="px-2 py-1 text-xs bg-white/5 text-slate-400 hover:bg-white/10 rounded font-geist">Events</button>
</div>
<div className="space-y-3 h-[480px] overflow-y-auto">

<div className="bg-white/5 rounded-lg p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-geist">Selected Element</span>
<span className="text-xs text-blue-400 font-geist">Hero Card</span>
</div>
<div className="text-[10px] text-slate-500 space-y-1 font-geist">
<div className="flex justify-between">
<span>Position:</span>
<span>24, 24</span>
</div>
<div className="flex justify-between">
<span>Size:</span>
<span>400 × 160</span>
</div>
<div className="flex justify-between">
<span>Opacity:</span>
<span>100%</span>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Animation Type</span>
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-blue-400 font-geist">Fade In</span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px]">
<button className="rounded-md border border-white/10 bg-blue-600 px-2 py-1 text-white font-geist">
<svg className="lucide lucide-eye mr-1 inline h-3 w-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>Fade
                            </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10 font-geist">
<svg className="lucide lucide-move mr-1 inline h-3 w-3" data-lucide="move" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>Slide
                            </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10 font-geist">
<svg className="lucide lucide-rotate-cw mr-1 inline h-3 w-3" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>Rotate
                            </button>
<button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10 font-geist">
<svg className="lucide lucide-zoom-in mr-1 inline h-3 w-3" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11"></circle><line></line><line></line><line></line></svg>Scale
                            </button>
</div>

<div className="text-[10px]">
<div className="text-slate-400 mb-1 font-geist">Direction</div>
<div className="flex gap-1">
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button className="p-1 rounded border border-white/10 bg-white/5 hover:bg-white/10">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Timing</span>
<button className="text-[10px] text-blue-400 hover:text-blue-300 font-geist">Reset</button>
</div>
<div className="space-y-3">
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Duration</span>
<div className="flex items-center gap-1">
<input className="w-16 h-1 bg-white/10 rounded-full appearance-none slider" max="100" min="0" type="range" value="60" />
<span className="text-slate-400 font-geist w-8 text-[10px]">1.2s</span>
</div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Delay</span>
<div className="flex items-center gap-1">
<input className="w-16 h-1 bg-white/10 rounded-full appearance-none slider" max="100" min="0" type="range" value="15" />
<span className="text-slate-400 font-geist w-8 text-[10px]">0.3s</span>
</div>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Easing</span>
<select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-[10px] text-slate-400 font-geist">
<option>Ease Out</option>
<option>Ease In</option>
<option>Ease In Out</option>
<option>Linear</option>
<option>Bounce</option>
<option>Elastic</option>
</select>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Transform</span>
<button className="text-[10px] text-slate-500 hover:text-slate-400 font-geist">Lock</button>
</div>
<div className="space-y-2">
<div className="grid grid-cols-2 gap-2 text-[10px]">
<div>
<div className="text-slate-400 mb-1 font-geist">X Position</div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-geist" type="number" value="0" />
</div>
<div className="">
<div className="text-slate-400 mb-1 font-geist">Y Position</div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-geist" type="number" value="0" />
</div>
</div>
<div className="grid grid-cols-2 gap-2 text-[10px]">
<div>
<div className="text-slate-400 mb-1 font-geist">Scale X</div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-geist" step="0.1" type="number" value="1" />
</div>
<div className="">
<div className="text-slate-400 mb-1 font-geist">Scale Y</div>
<input className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-300 font-geist" step="0.1" type="number" value="1" />
</div>
</div>
<div className="text-[10px]">
<div className="text-slate-400 mb-1 font-geist">Rotation</div>
<div className="flex items-center gap-2">
<input className="flex-1 h-1 bg-white/10 rounded-full appearance-none slider" max="180" min="-180" type="range" value="0" />
<span className="text-slate-400 font-geist w-8">0°</span>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Triggers</span>
<div className="flex items-center gap-1">
<span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400 font-geist">2</span>
<button className="w-4 h-4 rounded border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center">
<svg className="w-2 h-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
<div className="space-y-2 text-[11px]">
<div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mouse-pointer w-3 h-3 text-blue-400" data-lucide="mouse-pointer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-slate-300 font-geist">On Scroll</span>
</div>
<div className="flex items-center gap-1">
<input className="w-8 bg-white/5 border border-white/10 rounded px-1 text-slate-400 text-[9px] font-geist" type="number" value="50" />
<span className="text-slate-500 text-[9px] font-geist">%</span>
<button className="w-3 h-3 rounded border border-red-500/50 bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center">
<svg className="w-2 h-2 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3 h-3 text-emerald-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span className="text-slate-300 font-geist">Auto Play</span>
</div>
<div className="flex items-center gap-1">
<select className="bg-white/5 border border-white/10 rounded px-1 text-[9px] text-slate-400 font-geist">
<option>On Load</option>
<option>After Delay</option>
<option>Manual</option>
</select>
<button className="w-3 h-3 rounded border border-red-500/50 bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center">
<svg className="w-2 h-2 d=" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white/5 rounded-lg p-3 space-y-3">
<div className="mb-2 flex items-center justify-between text-xs">
<span className="text-slate-300 font-geist">Advanced</span>
<button className="text-[10px] text-slate-500 hover:text-slate-400 font-geist">Collapse</button>
</div>
<div className="space-y-2 text-[10px]">
<div className="flex items-center justify-between">
<span className="text-slate-400 font-geist">Loop Animation</span>
<button className="w-8 h-4 bg-white/10 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-geist">Reverse on Complete</span>
<button className="w-8 h-4 bg-blue-600 rounded-full relative">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 transition-transform"></div>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400 font-geist">Fill Mode</span>
<select className="bg-white/5 border border-white/10 rounded px-2 py-1 text-slate-400 font-geist">
<option>Forwards</option>
<option>Backwards</option>
<option>Both
                                </option></select>
</div>
</div>
</div>
</div>

<div className="mt-4 flex gap-2">
<button className="flex-1 px-3 py-2 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-500 font-geist">Apply Changes</button>
<button className="px-3 py-2 bg-white/5 text-slate-300 rounded text-xs font-medium border border-white/10 hover:bg-white/10 font-geist">Preview</button>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-24">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="text-center mb-16">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-workflow h-4 w-4 text-blue-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8"></rect><path></path><rect height="8" rx="2" width="8"></rect></svg>
                    Simple 4-step process
                </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter" style={{}}>
                    How it works
                </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto font-geist">
                    Create stunning animations in minutes with our intuitive visual builder. No coding experience required.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03]">
<span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300 mb-4 font-geist">Step 1</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tighter" style={{}}>Choose Your Elements</h3>
<p className="text-sm text-slate-400 font-geist">Select from our library of elements or import your own designs to start building animations.</p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="relative rounded-lg border border-white/10 bg-black/30 p-4">
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/10">
<div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
<span className="text-xs text-slate-300 font-geist">Button</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/10">
<div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
<span className="text-xs text-slate-300 font-geist">Icon</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-md bg-white/5 border border-white/10">
<div className="w-6 h-6 bg-emerald-500 rounded"></div>
<span className="text-xs text-slate-300 font-geist">Card</span>
</div>
</div>
<p className="mt-3 text-[11px] text-slate-500 font-geist">Element Library</p>
</div>

<div className="rounded-lg border border-white/10 bg-black/30 p-4 space-y-3">
<div className="border-2 border-dashed border-white/20 rounded-lg p-4 text-center">
<svg className="lucide lucide-upload h-6 w-6 text-slate-400 mx-auto mb-2" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="text-xs text-slate-400 font-geist">Drop files here</span>
</div>
<p className="text-[11px] text-slate-500 font-geist">Or upload your own</p>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03]">
<span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300 mb-4 font-geist">Step 2</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tighter" style={{}}>Design Your Timeline</h3>
<p className="text-sm text-slate-400 font-geist">Use our visual timeline editor to create smooth animations with precise timing controls.</p>

<div className="mt-6 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="space-y-3">

<div className="flex items-center gap-3">
<div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
<div className="flex-1 h-2 bg-white/5 rounded-full relative">
<div className="absolute left-0 top-0 w-2/3 h-2 bg-blue-500/80 rounded-full"></div>
</div>
<span className="text-xs text-slate-400 font-geist">1.2s</span>
</div>

<div className="flex items-center gap-3">
<div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
<div className="flex-1 h-2 bg-white/5 rounded-full relative">
<div className="absolute left-1/4 top-0 w-1/2 h-2 bg-cyan-500/80 rounded-full"></div>
</div>
<span className="text-xs text-slate-400 font-geist">0.8s</span>
</div>

<div className="flex items-center gap-3">
<div className="w-4 h-4 bg-emerald-500 rounded"></div>
<div className="flex-1 h-2 bg-white/5 rounded-full relative">
<div className="absolute left-1/3 top-0 w-3/5 h-2 bg-emerald-500/80 rounded-full"></div>
</div>
<span className="text-xs text-slate-400 font-geist">1.5s</span>
</div>
</div>

<div className="mt-3 flex items-center gap-2">
<button className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
<svg className="lucide lucide-play h-3 w-3 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<span className="text-xs text-slate-400 font-geist">0:01.2 / 0:02.5</span>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03]">
<span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300 mb-4 font-geist">Step 3</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tighter" style={{}}>Preview & Refine</h3>
<p className="text-sm text-slate-400 font-geist">Test your animations across different devices and fine-tune every detail in real-time.</p>

<div className="mt-6 space-y-4">

<div className="relative rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-slate-300 font-geist">Live Preview</span>
<div className="flex items-center gap-2">
<button className="w-6 h-6 rounded border border-white/10 bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-monitor h-3 w-3 text-blue-400" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20"></rect><line></line><line></line></svg>
</button>
<button className="w-6 h-6 rounded border border-white/10 bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-tablet h-3 w-3 text-slate-400" data-lucide="tablet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16"></rect><line></line></svg>
</button>
<button className="w-6 h-6 rounded border border-white/10 bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-smartphone h-3 w-3 text-slate-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14"></rect><path></path></svg>
</button>
</div>
</div>

<div className="aspect-video bg-neutral-900/50 rounded border border-white/10 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-4 border-2 border-dashed border-white/20 rounded flex items-center justify-center">
<div className="text-center">
<div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-2 animate-pulse"></div>
<div className="w-16 h-1 bg-white/30 rounded mx-auto"></div>
</div>
</div>

<div className="absolute top-2 right-2 flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
<span className="text-[10px] text-slate-400 font-geist">Live</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-black/30 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-geist">Easing</span>
<span className="text-xs text-slate-400 font-geist">Ease Out</span>
</div>
<div className="h-1 bg-white/10 rounded-full relative">
<div className="absolute left-3/4 top-0 w-2 h-1 bg-blue-500 rounded-full"></div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-300 font-geist">Speed</span>
<span className="text-xs text-slate-400 font-geist">1.2x</span>
</div>
<div className="h-1 bg-white/10 rounded-full relative">
<div className="absolute left-2/3 top-0 w-2 h-1 bg-cyan-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.03]">
<span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300 mb-4 font-geist">Step 4</span>
<h3 className="text-2xl text-white mb-2 font-geist font-light tracking-tighter" style={{}}>Export & Deploy</h3>
<p className="text-sm text-slate-400 font-geist">Export clean, optimized code or deploy directly to your favorite platforms with one click.</p>

<div className="mt-6 space-y-3 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-code h-4 w-4 text-slate-300" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div>
<div className="text-xs text-slate-200 font-geist">CSS Animation</div>
<div className="text-[10px] text-slate-500 font-geist">Clean, optimized code</div>
</div>
</div>
<button className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 font-geist">Export</button>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-video h-4 w-4 text-slate-300" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
<div className="">
<div className="text-xs text-slate-200 font-geist">Video Export</div>
<div className="text-[10px] text-slate-500 font-geist">MP4, GIF, WebM formats</div>
</div>
</div>
<button className="px-3 py-1 bg-cyan-500 text-white text-xs rounded hover:bg-cyan-600 font-geist">Render</button>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-globe h-4 w-4 text-slate-300" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<div className="">
<div className="text-xs text-slate-200 font-geist">Deploy Live</div>
<div className="text-[10px] text-slate-500 font-geist">Instant hosting & sharing</div>
</div>
</div>
<button className="px-3 py-1 bg-emerald-500 text-white text-xs rounded hover:bg-emerald-600 font-geist">Deploy</button>
</div>

<div className="mt-4 pt-3 border-t border-white/10">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs text-slate-400 font-geist">Quick Integrations:</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
<span className="text-[10px] font-bold text-white font-geist">F</span>
</div>
<div className="w-6 h-6 bg-black rounded flex items-center justify-center">
<span className="text-[10px] font-bold text-white font-geist">▲</span>
</div>
<div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
<span className="text-[10px] font-bold text-white font-geist">N</span>
</div>
<div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
<span className="text-[10px] font-bold text-white font-geist">W</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-24">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="text-center mb-16">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-palette h-4 w-4 text-blue-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="13.5" cy="6.5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" fill="currentColor"></circle></svg>
                    Pre-built animation templates
                </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter" style={{}}>
                    Start with stunning templates
                </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto font-geist">
                    Choose from our library of professionally designed animation templates and customize them to match your vision.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<div className="aspect-video p-6 bg-neutral-900/50">
<div className="w-full h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="text-center space-y-2">
<div className="w-12 h-12 mx-auto bg-blue-500 rounded-lg opacity-80"></div>
<div className="w-24 h-2 bg-white/30 rounded mx-auto"></div>
<div className="w-16 h-2 bg-white/20 rounded mx-auto"></div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist">Hero Entrance</h3>
<p className="text-sm text-slate-400 mb-3 font-geist">Dynamic hero section animations with staggered reveals</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist">12 animations</span>
<button className="text-xs text-blue-400 hover:text-blue-300 font-geist">Use Template</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<div className="aspect-video p-6 bg-neutral-900/50">
<div className="w-full h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="grid grid-cols-3 gap-2">
<div className="w-6 h-6 bg-cyan-500 rounded opacity-80"></div>
<div className="w-6 h-6 bg-blue-500 rounded opacity-60"></div>
<div className="w-6 h-6 bg-indigo-500 rounded opacity-40"></div>
<div className="w-6 h-6 bg-purple-500 rounded opacity-60"></div>
<div className="w-6 h-6 bg-pink-500 rounded opacity-80"></div>
<div className="w-6 h-6 bg-rose-500 rounded opacity-40"></div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist">Grid Reveal</h3>
<p className="text-sm text-slate-400 mb-3 font-geist">Animated grid layouts with cascading item reveals</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist">8 animations</span>
<button className="text-xs text-blue-400 hover:text-blue-300 font-geist">Use Template</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<div className="aspect-video p-6 bg-neutral-900/50">
<div className="w-full h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="space-y-3">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
<div className="w-20 h-1 bg-white/30 rounded"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<div className="w-16 h-1 bg-white/30 rounded"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-teal-500 rounded-full"></div>
<div className="w-24 h-1 bg-white/30 rounded"></div>
</div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist">List Animation</h3>
<p className="text-sm text-slate-400 mb-3 font-geist">Smooth list item animations with timing controls</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist">6 animations</span>
<button className="text-xs text-blue-400 hover:text-blue-300 font-geist">Use Template</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<div className="aspect-video p-6 bg-neutral-900/50">
<div className="w-full h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="relative">
<div className="w-16 h-16 border-4 border-orange-500/40 rounded-full"></div>
<div className="absolute inset-2 w-12 h-12 bg-orange-500 rounded-full opacity-60"></div>
<div className="absolute inset-4 w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist">Loading States</h3>
<p className="text-sm text-slate-400 mb-3 font-geist">Engaging loading animations and progress indicators</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist">10 animations</span>
<button className="text-xs text-blue-400 hover:text-blue-300 font-geist">Use Template</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<div className="aspect-video p-6 bg-neutral-900/50">
<div className="w-full h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="space-y-2">
<div className="w-20 h-3 bg-purple-500 rounded opacity-80"></div>
<div className="w-16 h-2 bg-white/30 rounded"></div>
<div className="flex gap-2 mt-3">
<div className="w-6 h-6 bg-indigo-500 rounded opacity-60"></div>
<div className="w-6 h-6 bg-blue-500 rounded opacity-40"></div>
</div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist">Card Interactions</h3>
<p className="text-sm text-slate-400 mb-3 font-geist">Hover and click animations for card components</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist">15 animations</span>
<button className="text-xs text-blue-400 hover:text-blue-300 font-geist">Use Template</button>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<div className="aspect-video p-6 bg-neutral-900/50">
<div className="w-full h-full rounded-lg border border-white/10 bg-black/20 flex items-center justify-center">
<div className="flex items-center gap-1">
<div className="w-2 h-8 bg-pink-500 rounded opacity-80"></div>
<div className="w-2 h-12 bg-rose-500 rounded opacity-60"></div>
<div className="w-2 h-6 bg-red-500 rounded opacity-80"></div>
<div className="w-2 h-10 bg-orange-500 rounded opacity-40"></div>
<div className="w-2 h-14 bg-yellow-500 rounded opacity-60"></div>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-lg font-medium text-white mb-1 font-geist">Data Visualization</h3>
<p className="text-sm text-slate-400 mb-3 font-geist">Animated charts and data presentation effects</p>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-500 font-geist">9 animations</span>
<button className="text-xs text-blue-400 hover:text-blue-300 font-geist">Use Template</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors font-geist">
                    Browse All Templates
                    <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
</section>

<section className="relative z-10 pt-24">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="text-center mb-16">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-heart h-4 w-4 text-blue-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                    Loved by creators worldwide
                </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter" style={{}}>
                    What creators are saying
                </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto font-geist">
                    Join thousands of designers and developers who are creating amazing animations with Quantum.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] ring1 ring-white/10 shadow-lg">
<p className="text-2xl md:text-3xl text-white/90 leading-relaxed tracking-tight font-geist font-light">
      Quantum’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">motion-first</span> workflow helped us reach the right audience and 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">ship faster</span> with smarter interactions—streamlining our launch, improving engagement, and 
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">delivering results</span> we couldn’t achieve before.
    </p>
<div className="mt-6 text-slate-400 flex items-center gap-3">
<svg className="lucide lucide-quote h-5 w-5 text-slate-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div className="flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80&auto=format&fit=crop" />
<div>
<div className="text-sm text-white font-geist">Ava Patel</div>
<div className="text-[11px] text-slate-500 font-geist">Head of Product, MotionLab</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 shadow-lg p-3">
<div className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
<img alt="Quantum in the wild" className="h-56 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b25fa59c-b12e-4660-8831-9fb50a82a329_800w.jpg" />
</div>
<div className="flex items-center justify-between mt-3">
<span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-slate-300 font-geist">Built with Quantum</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 shadow-lg">
<div className="flex items-center gap-1 mb-3">
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400/70" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-4 font-geist">
      We needed intelligent motion—Quantum nailed it. Every step was collaborative and focused on outcomes that felt fast and polished in production.
    </p>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&q=80&auto=format&fit=crop" />
<div>
<div className="text-sm text-white font-geist">Brendan</div>
<div className="text-[11px] text-slate-500 font-geist">Marketing Director at StratIQ</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 shadow-lg">
<div className="flex items-center gap-1 mb-3">
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400/70" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-4 font-geist">
      Quantum identified key opportunities for motion, then built a system that boosted both our speed and accuracy. We’re already seeing results.
    </p>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005316-04ae1f3d3b3a?w=80&q=80&auto=format&fit=crop" />
<div>
<div className="text-sm text-white font-geist">Lena M</div>
<div className="text-[11px] text-slate-500 font-geist">Manager at NovaTech</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] ring-1 ring-white/10 shadow-lg">
<div className="flex items-center gap-1 mb-3">
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-star h-4 w-4 text-yellow-400/70" data-lucide="star" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-sm text-slate-300 leading-relaxed mb-4 font-geist">
      From ideation to final delivery, the team was incredibly proactive. Our new motion system reduced manual work and increased user satisfaction.
    </p>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&q=80&auto=format&fit=crop" />
<div className="">
<div className="text-sm text-white font-geist">Eli R</div>
<div className="text-[11px] text-slate-500 font-geist">COO at GridFrame</div>
</div>
</div>
</div>

<div className="lg:col-span-3 md:col-span-2 border-t border-white/10 pt-8">
<div className="grid grid-1 sm:grid-cols-3 gap-6">
<div className="text-center">
<div className="text-3xl text-white tracking-tight font-geist font-light">100+</div>
<div className="text-sm text-slate-400 mt-1 font-geist">Projects Completed</div>
</div>
<div className="text-center">
<div className="text-3xl text-white tracking-tight font-geist font-light">95%</div>
<div className="text-sm text-slate-400 mt-1 font-geist">Client Satisfaction</div>
</div>
<div className="text-center">
<div className="text-3xl text-white tracking-tight font-geist font-light">10+</div>
<div className="text-sm text-slate-400 mt-1 font-geist">Years of Experience</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-24">
<div className="max-w-7xl md:px-6 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 font-geist">
<svg className="lucide lucide-zap h-4 w-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                    Simple, transparent pricing
                </p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 font-geist font-light tracking-tighter" style={{}}>
                    Choose your plan
                </h2>
<p className="text-lg text-slate-300 max-w-2xl mx-auto font-geist">
                    Start free and upgrade as you grow. All plans include unlimited exports and premium support.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mr-auto ml-auto items-center justify-start">

<div className="p-6 md:p-7 rounded-xl border border-white/10 bg-white/[0.03] md:scale-95 md:transform md:opacity-90 hover:opacity-100 transition-transform duration-200">
<div className="text-left">
<h3 className="text-base md:text-lg font-medium text-white mb-2 font-geist">Starter</h3>
<div className="mb-4 flex items-end gap-2">
<span className="text-2xl md:text-3xl text-white font-geist font-light tracking-tighter" style={{}}>$0</span>
<span className="text-slate-400 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6 font-geist">Perfect for getting started with animations</p>
</div>
<button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-200 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors font-geist mb-6">
                        Get Started
                        <svg className="lucide lucide-arrow-up-right ml-2 h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="border-t border-white/10 border-dashed mb-6"></div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            5 animation projects
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Basic templates
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            CSS & JSON export
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Community support
                        </li>
</ul>
</div>

<div className="relative p-7 md:p-8 rounded-xl border border-blue-500/50 bg-blue-500/5 shadow-lg md:scale-100 md:transform hover:-translate-y-0.5 transition-transform duration-200">
<div className="absolute -top-3 left-4">
<span className="inline-flex items-center gap-1 ring-1 ring-white/15 text-[11px] font-medium text-white font-geist bg-white/10 rounded-full pt-1 pr-1 pb-1 pl-3 backdrop-blur">
                            Pro
                            <span className="inline-flex items-center gap-1 text-[10px] bg-blue-600/90 rounded-full pt-1 pr-2 pb-1 pl-2">
<svg className="lucide lucide-flame h-3 w-3" data-lucide="flame" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                                Popular
                            </span>
</span>
</div>
<div className="text-left">
<h3 className="text-base md:text-lg font-medium text-white mb-2 font-geist">Professional</h3>
<div className="mb-4 flex items-end gap-2">
<span className="text-3xl md:text-4xl text-white font-geist font-light tracking-tighter" style={{}}>$29</span>
<span className="text-slate-400 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6 font-geist">For professionals and growing teams</p>
</div>
<button className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors font-geist mb-6 shadow-2xl shadow-blue-900/20">
                        Get Started
                        <svg className="lucide lucide-arrow-up-right ml-2 h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="border-t border-white/10 border-dashed mb-6"></div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Unlimited projects
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Premium templates
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="lucide lucide-check h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Advanced animations
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox0="" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Team collaboration
                        </li>
</ul>
</div>

<div className="p-7 md:p-10 rounded-xl border border-white/10 bg-white/[0.03] md:scale-105 md:transform md:z-10 hover:-translate-y-1 transition-transform duration-200">
<div className="text-left">
<h3 className="text-base md:text-lg font-medium text-white mb-2 font-geist">Enterprise</h3>
<div className="mb-4 flex items-end gap-2">
<span className="text-4xl md:text-5xl text-white font-geist font-light tracking-tighter" style={{}}>$99</span>
<span className="text-slate-400 text-sm font-geist">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6 font-geist">For large teams and organizations</p>
</div>
<button className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-slate-200 border border-white/10 bg-white/5 rounded-lg hover:bg-white/10 transition-colors font-geist mb-6 shadow-lg">
                        Contact Sales
                        <svg className="ml-2 h-4 w-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="border-t border-white/10 border-dashed mb-6"></div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Everything in Pro
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Custom templates
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            SSO & advanced security
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            Dedicated support
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-geist">
<svg className="h-4 w-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                            On-premise deployment
                        </li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-slate-400 font-geist">
                    All plans include a 14-day free trial. No credit card required.
                </p>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-4 py-24 md:px-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
<div className="mx-auto max-w-2xl">
<h2 className="text-2xl md:text-3xl text-white font-geist font-light tracking-tighter" style={{}}>Ready to bring your ideas to life?</h2>
<p className="mt-2 text-sm text-slate-400 font-geist">Start creating stunning animations today. No credit card required.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-500 font-geist">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
                            Start Building
                        </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 font-geist">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                            View Examples
                        </button>
</div>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
<span className="font-geist">© 2024 Quantum Labs</span>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300 font-geist" href="#">Terms</a>
<a className="hover:text-slate-300 font-geist" href="#">Privacy</a>
<a className="hover:text-slate-300 font-geist" href="#">API</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
