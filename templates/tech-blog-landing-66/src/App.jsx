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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex h-16 items-center justify-between gap-4">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer select-none mr-4">

<div className="flex items-center justify-center w-8 h-8 bg-zinc-900 rounded-lg text-white">
<span className="font-semibold text-lg leading-none">A</span>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">
                        Atekco
                    </span>
</div>


<div className="hidden lg:flex items-center gap-1">
<a className="px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200" href="#">
                        Home
                    </a>
<a className="px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200" href="#">
                        News
                    </a>
<a className="px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200" href="#">
                        Think
                    </a>
<a className="px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200" href="#">
                        Solution
                    </a>
<a className="px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200" href="#">
                        Community
                    </a>


<a className="group flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-900 rounded-md bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all duration-200 mx-1" href="#">
                        Back2Basics
                        <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
</a>
<a className="px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200" href="#">
                        Podcast
                    </a>

<div className="relative group ml-1">
<button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100/50 transition-all duration-200 outline-none">
                            About
                            <i className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="chevron-down"></i>
</button>


<div className="invisible opacity-0 translate-y-1 absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg ring-1 ring-zinc-900/5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
<div className="p-1">
<a className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#">
                                    Author
                                </a>
<a className="block px-3 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors" href="#">
                                    About Us
                                </a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-2 ml-auto lg:ml-0">

<div className="hidden md:flex relative group">
<div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
<i className="h-4 w-4 text-zinc-400 group-focus-within:text-zinc-600" data-lucide="search"></i>
</div>
<input className="h-9 w-48 bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm rounded-md pl-9 pr-8 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:bg-white transition-all placeholder:text-zinc-400" placeholder="Search..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
<kbd className="inline-flex items-center border border-zinc-200 rounded px-1.5 text-[10px] font-sans font-medium text-zinc-400">⌘K</kbd>
</div>
</div>

<button className="md:hidden p-2 text-zinc-500 hover:bg-zinc-100 rounded-md">
<i className="w-5 h-5" data-lucide="search"></i>
</button>

<button aria-label="Toggle theme" className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="sun"></i>
</button>

<button className="lg:hidden p-2 text-zinc-900 hover:bg-zinc-100 rounded-md">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<main className="max-w-4xl mx-auto px-6 py-16">
<div className="space-y-4 mb-12">
<span className="text-sm font-semibold text-indigo-600 tracking-tight">Engineering</span>
<h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                Building scalable architectures for the modern web
            </h1>
<p className="text-xl text-zinc-500 leading-relaxed text-balance">
                How we migrated our legacy monolith to a distributed system without downtime, improving latency by 300%.
            </p>
<div className="flex items-center gap-3 pt-4">
<div className="h-8 w-8 rounded-full bg-zinc-200"></div>
<div className="text-sm">
<span className="font-medium text-zinc-900">Alex Chen</span>
<span className="text-zinc-500">· Oct 24, 2023</span>
</div>
</div>
</div>

<div className="h-px w-full bg-zinc-200 my-12"></div>

<div className="space-y-6 text-zinc-700">
<div className="h-4 w-full bg-zinc-100 rounded"></div>
<div className="h-4 w-5/6 bg-zinc-100 rounded"></div>
<div className="h-4 w-11/12 bg-zinc-100 rounded"></div>
</div>
</main>


    </>
  );
}
