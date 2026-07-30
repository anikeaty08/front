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



    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
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
      
<div className="relative overflow-hidden pt-16 pb-12 min-h-screen flex flex-col justify-between">

<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<span className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-emerald-100 to-purple-100 dark:from-blue-900 dark:via-emerald-900 dark:to-purple-900 text-xs font-semibold text-blue-700 dark:text-blue-300 tracking-wider uppercase">
        Introducing
      </span>
<h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white drop-shadow-xl">
        Build Intelligent UI <span className="text-blue-600 dark:text-blue-400">Faster</span>
</h1>
<p className="mb-8 max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-300 font-inter font-normal">
        Empower your team with an all-in-one design, automation,<br />
        and deployment suite. Modern tools. Seamless workflow. Secure infrastructure.
      </p>
<div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-100 dark:shadow-blue-900" href="#">
          Get Started
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white dark:bg-neutral-900 text-blue-700 dark:text-blue-300 hover:bg-gray-100 dark:hover:bg-neutral-800 border border-blue-200 dark:border-blue-800 transition" href="#">
          View Docs
        </a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="group relative p-5 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg md:col-span-2">
<div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 3v18h18M3 15l6-6 4 5 5-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Live</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                Smart UI Builder
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal font-inter">v3.1.0</span>
</h3>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
                Instantly generate responsive layouts using AI-driven design logic.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">NoCode</span>
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">AIUX</span>
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">Responsive</span>
</div>
<span className="text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-inter">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-blue-100/40 to-transparent dark:via-blue-800/20 opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-5 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg col-span-1">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Updated</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                Flow Engine
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal font-inter">124 tasks automated</span>
</h3>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
                Visual automation for recurring tasks and team coordination.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">Automation</span>
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">TeamTools</span>
</div>
<span className="text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-inter">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-emerald-100/40 to-transparent dark:via-emerald-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-5 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg md:col-span-2">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect height="15" rx="2" width="20" x="2" y="7"></rect><polygon points="10 12 15 15 10 18 10 12"></polygon></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Active</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                Vault Storage
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal font-inter">16GB used</span>
</h3>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
                Manage files, brand assets, and version control in one secure place.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">AssetHub</span>
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">SecureSync</span>
</div>
<span className="text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-inter">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-purple-100/40 to-transparent dark:via-purple-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-5 rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-2xl hover:-translate-y-1 will-change-transform shadow dark:shadow-lg col-span-1">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 010 20"></path><path d="M12 2a15.3 15.3 0 000 20"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Beta</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-900 dark:text-gray-100 tracking-tight text-lg">
                Multi-Zone Hosting
                <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal font-inter">8 data centers</span>
</h3>
<p className="text-base text-gray-600 dark:text-gray-300 leading-snug font-inter">
                High-speed deployment across regions with smart failover.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">DevOps</span>
<span className="px-2 py-1 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/20 transition font-inter">EdgeCloud</span>
</div>
<span className="text-sm text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-inter">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-sky-100/40 to-transparent dark:via-sky-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>
</div>

    </>
  );
}
