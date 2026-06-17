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
      
<div className="flex flex-col justify-start py-10 min-h-screen">
<div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">

<div className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5 dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)] md:col-span-2">
<div className="absolute inset-0 opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><path d="M3 3v18h18M3 15l6-6 4 5 5-7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Live</span>
</div>
<div className="space-y-2">
<h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
              Smart UI Builder
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">v3.1.0</span>
</h3>
<p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
              Instantly generate responsive layouts using AI-driven design logic.
            </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#NoCode</span>
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#Responsive</span>
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#AIUX</span>
</div>
<span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore →
            </span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform col-span-1">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><path d="M9 12l2 2l4 -4" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Updated</span>
</div>
<div className="space-y-2">
<h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
              Flow Engine
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">124 tasks automated</span>
</h3>
<p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
              Visual automation for recurring tasks and team coordination.
            </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#Automation</span>
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#TeamTools</span>
</div>
<span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore →
            </span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform md:col-span-2">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><rect height="15" rx="2" width="20" x="2" y="7"></rect><polygon points="10 12 15 15 10 18 10 12"></polygon></svg>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Active</span>
</div>
<div className="space-y-2">
<h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
              Vault Storage
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">16GB used</span>
</h3>
<p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
              Manage files, brand assets, and version control in one secure place.
            </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#AssetHub</span>
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#SecureSync</span>
</div>
<span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore →
            </span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>

<div className="group relative p-4 rounded-xl overflow-hidden transition-all duration-300 border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 will-change-transform col-span-1">
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]"></div>
</div>
<div className="relative flex flex-col space-y-3">
<div className="flex items-center justify-between">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
<svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 010 20"></path><path d="M12 2a15.3 15.3 0 000 20"></path></svg>
</div>
<span className="text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20">Beta</span>
</div>
<div className="space-y-2">
<h3 className="font-medium text-gray-900 dark:text-gray-100 tracking-tight text-[15px]">
              Multi-Zone Hosting
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">8 data centers</span>
</h3>
<p className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
              High-speed deployment across regions with smart failover.
            </p>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#DevOps</span>
<span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 backdrop-blur-sm transition-all duration-200 hover:bg-black/10 dark:hover:bg-white/20">#EdgeCloud</span>
</div>
<span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              Explore →
            </span>
</div>
</div>
<div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
</div>
</div>


    </>
  );
}
