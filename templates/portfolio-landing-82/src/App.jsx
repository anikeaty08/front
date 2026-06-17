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
theme: {
extend: {
colors: {
stone: {
800: '#292524', /* Specific request */
900: '#1c1917',
950: '#0c0a09',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



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
      

<aside className="w-[80px] h-full border-r border-stone-800 flex flex-col items-center py-8 z-20 bg-[#0a0a0a] flex-shrink-0">

<div className="mb-12">
<div className="h-10 w-10 flex items-center justify-center border border-stone-800 rounded-lg bg-stone-900/50 text-stone-200 font-bold tracking-tighter text-lg">
                AS
            </div>
</div>

<nav className="flex-1 flex flex-col gap-8 w-full items-center">
<button className="p-3 rounded-lg text-stone-200 bg-stone-800/50 border border-stone-700/50 transition-all duration-300 group relative">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="absolute left-14 bg-stone-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-stone-700 whitespace-nowrap">Projects</span>
</button>
<button className="p-3 rounded-lg text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 group relative">
<i className="w-5 h-5" data-lucide="cpu"></i>
<span className="absolute left-14 bg-stone-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-stone-700 whitespace-nowrap">Stack</span>
</button>
<button className="p-3 rounded-lg text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 group relative">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
<span className="absolute left-14 bg-stone-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-stone-700 whitespace-nowrap">Writing</span>
</button>
<button className="p-3 rounded-lg text-stone-500 hover:text-stone-200 hover:bg-stone-900 transition-all duration-300 group relative">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="absolute left-14 bg-stone-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-stone-700 whitespace-nowrap">About</span>
</button>
</nav>

<div className="mt-auto flex flex-col gap-6 items-center">
<button className="p-2 text-stone-600 hover:text-stone-300 transition-colors">
<i className="w-5 h-5" data-lucide="github"></i>
</button>
<button className="p-2 text-stone-600 hover:text-stone-300 transition-colors">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</button>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto scroll-smooth no-scrollbar relative">
<div className="max-w-5xl mx-auto px-8 md:px-16 py-20 md:py-28 reveal-sequence">

<header className="mb-24 max-w-3xl">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-white mb-6">
                    Design Engineer crafting <span className="text-stone-500">digital interfaces</span> and systems.
                </h1>
<p className="text-xl md:text-2xl font-medium text-stone-500 leading-relaxed max-w-2xl">
                    Building at the intersection of design and engineering. Currently focused on developer tools and minimal aesthetics.
                </p>
</header>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-stone-800 py-8 mb-24">
<div>
<span className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Current Role</span>
<span className="text-base text-stone-200">Principal Designer</span>
</div>
<div>
<span className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Experience</span>
<span className="text-base text-stone-200">8+ Years</span>
</div>
<div>
<span className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Location</span>
<span className="text-base text-stone-200">San Francisco</span>
</div>
<div>
<span className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-2">Status</span>
<span className="flex items-center gap-2 text-base text-emerald-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Available
                    </span>
</div>
</div>

<section className="mb-24">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold text-stone-200 tracking-tight">Selected Work</h2>
<button className="text-xs text-stone-500 hover:text-stone-300 transition-colors flex items-center gap-1">
                        View All <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-stone-900/30 border border-stone-800 rounded-lg overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-stone-600">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-900 to-transparent opacity-60"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border border-stone-700/30 rounded-full flex items-center justify-center">
<div className="w-20 h-20 border border-stone-600/30 rounded-full"></div>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-1 group-hover:text-white">Vortex UI</h3>
<p className="text-base text-stone-500">A component library for data-heavy applications.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-stone-900/30 border border-stone-800 rounded-lg overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-stone-600">
<div className="absolute inset-0 bg-gradient-to-bl from-stone-900 via-transparent to-transparent opacity-60"></div>

<div className="absolute top-8 left-8 right-8 bottom-0 border-t border-l border-r border-stone-700/30 rounded-t-lg bg-stone-950/50"></div>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-1 group-hover:text-white">Chronos</h3>
<p className="text-base text-stone-500">Productivity software for remote teams.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-stone-900/30 border border-stone-800 rounded-lg overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-stone-600">
<div className="absolute inset-0 flex items-center justify-center gap-2">
<div className="h-12 w-2 bg-stone-800 rounded-full"></div>
<div className="h-16 w-2 bg-stone-700 rounded-full"></div>
<div className="h-10 w-2 bg-stone-800 rounded-full"></div>
</div>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-1 group-hover:text-white">Metric One</h3>
<p className="text-base text-stone-500">Financial dashboard analytics interface.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-stone-900/30 border border-stone-800 rounded-lg overflow-hidden relative mb-4 transition-all duration-300 group-hover:border-stone-600">
<div className="absolute bottom-4 right-4">
<i className="w-8 h-8 text-stone-700" data-lucide="code-2"></i>
</div>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-1 group-hover:text-white">DevKit</h3>
<p className="text-base text-stone-500">Open source developer utilities CLI.</p>
</div>
</div>
</section>

<section className="mb-20">
<h2 className="text-xl font-semibold text-stone-200 tracking-tight mb-8">Experience</h2>
<div className="space-y-0">
<div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-800/50 hover:bg-stone-900/30 transition-colors px-2 -mx-2 rounded">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded bg-stone-800 flex items-center justify-center text-white font-bold text-xs">S</div>
<div>
<h4 className="text-base font-medium text-stone-200">Stripe</h4>
<p className="text-xs text-stone-500">Senior Interface Designer</p>
</div>
</div>
<span className="text-sm text-stone-500 mt-2 md:mt-0">2021 — Present</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-800/50 hover:bg-stone-900/30 transition-colors px-2 -mx-2 rounded">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded bg-black border border-white/20 flex items-center justify-center text-white font-bold text-xs">V</div>
<div>
<h4 className="text-base font-medium text-stone-200">Vercel</h4>
<p className="text-xs text-stone-500">Product Designer</p>
</div>
</div>
<span className="text-sm text-stone-500 mt-2 md:mt-0">2019 — 2021</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-stone-800/50 hover:bg-stone-900/30 transition-colors px-2 -mx-2 rounded">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-xs">F</div>
<div>
<h4 className="text-base font-medium text-stone-200">Framer</h4>
<p className="text-xs text-stone-500">Frontend Developer</p>
</div>
</div>
<span className="text-sm text-stone-500 mt-2 md:mt-0">2017 — 2019</span>
</div>
</div>
</section>

<footer className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-stone-800 pt-8 pb-8 gap-4">
<p className="text-sm text-stone-600">© 2024 Alex Sterling. All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-stone-500 hover:text-stone-300 transition-colors" href="#">Twitter</a>
<a className="text-sm text-stone-500 hover:text-stone-300 transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-stone-500 hover:text-stone-300 transition-colors" href="#">Email</a>
</div>
</footer>
</div>
</main>


    </>
  );
}
