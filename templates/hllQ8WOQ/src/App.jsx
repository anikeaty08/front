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


document.documentElement.classList.add('dark');
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
<span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 text-xs font-medium text-white/90 tracking-wider uppercase font-body">
        Introducing
      </span>
<h1 className="mb-6 text-4xl md:text-6xl font-headline tracking-tight text-white drop-shadow-xl">
        Build Intelligent UI <span className="text-blue-400">Faster</span>
</h1>
<p className="mb-8 max-w-2xl text-lg md:text-xl text-gray-300 font-subtitle leading-snug">
        Empower your team with an all-in-one design, automation,<br/>
        and deployment suite. Modern tools. Seamless workflow. Secure infrastructure.
      </p>
<div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-900 font-body" href="#">
          Get Started
        </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-neutral-900 text-blue-300 hover:bg-neutral-800 border border-blue-800 transition font-body" href="#">
          View Docs
        </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">

<div className="group relative p-5 rounded-2xl border border-white/10 bg-black hover:shadow-2xl hover:-translate-y-1 dark:shadow-lg md:col-span-2 transition-all">
<div className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br transition-all">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 3v18h18M3 15l6-6 4 5 5-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-white/10 text-gray-200 group-hover:bg-white/20 transition-colors font-body">Live</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-100 tracking-tight text-lg font-headline">
                Smart UI Builder
                <span className="ml-2 text-xs text-gray-400 font-normal font-body">v3.1.0</span>
</h3>
<p className="text-base text-gray-300 leading-snug font-body">
                Instantly generate responsive layouts using AI-driven design logic.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-400 font-body">
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">NoCode</span>
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">AIUX</span>
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">Responsive</span>
</div>
<span className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-body">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-blue-800/20 to-transparent"></div>
</div>

<div className="group relative p-5 rounded-2xl border border-white/10 bg-black hover:shadow-2xl hover:-translate-y-1 dark:shadow-lg col-span-1 transition-all">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br transition-all">
<svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-white/10 text-gray-200 group-hover:bg-white/20 transition-colors font-body">Updated</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-100 tracking-tight text-lg font-headline">
                Flow Engine
                <span className="ml-2 text-xs text-gray-400 font-normal font-body">124 tasks automated</span>
</h3>
<p className="text-base text-gray-300 leading-snug font-body">
                Visual automation for recurring tasks and team coordination.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-400 font-body">
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">Automation</span>
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">TeamTools</span>
</div>
<span className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-body">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-emerald-800/20 to-transparent"></div>
</div>

<div className="group relative p-5 rounded-2xl border border-white/10 bg-black hover:shadow-2xl hover:-translate-y-1 dark:shadow-lg md:col-span-2 transition-all">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br transition-all">
<svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="15" rx="2" width="20" x="2" y="7"></rect><polygon points="10 12 15 15 10 18 10 12"></polygon></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-white/10 text-gray-200 group-hover:bg-white/20 transition-colors font-body">Active</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-100 tracking-tight text-lg font-headline">
                Vault Storage
                <span className="ml-2 text-xs text-gray-400 font-normal font-body">16GB used</span>
</h3>
<p className="text-base text-gray-300 leading-snug font-body">
                Manage files, brand assets, and version control in one secure place.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-400 font-body">
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">AssetHub</span>
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">SecureSync</span>
</div>
<span className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-body">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-purple-800/20 to-transparent"></div>
</div>

<div className="group relative p-5 rounded-2xl border border-white/10 bg-black hover:shadow-2xl hover:-translate-y-1 dark:shadow-lg col-span-1 transition-all">
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:5px_5px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br transition-all">
<svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 010 20"></path><path d="M12 2a15.3 15.3 0 000 20"></path></svg>
</div>
<span className="text-xs font-semibold px-3 py-1 rounded-xl backdrop-blur-sm bg-white/10 text-gray-200 group-hover:bg-white/20 transition-colors font-body">Beta</span>
</div>
<div className="space-y-2">
<h3 className="font-semibold text-gray-100 tracking-tight text-lg font-headline">
                Multi-Zone Hosting
                <span className="ml-2 text-xs text-gray-400 font-normal font-body">8 data centers</span>
</h3>
<p className="text-base text-gray-300 leading-snug font-body">
                High-speed deployment across regions with smart failover.
              </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-400 font-body">
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">DevOps</span>
<span className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20">EdgeCloud</span>
</div>
<span className="text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity font-body">Explore →</span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-2xl p-px bg-gradient-to-br from-transparent via-sky-800/20 to-transparent"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
