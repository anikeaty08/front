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
      

<aside className="w-64 border-r border-zinc-800/60 flex flex-col justify-between bg-[#09090b] z-20 hidden md:flex shrink-0">
<div className="p-4">

<div className="text-lg font-medium tracking-tighter text-zinc-100 mb-8 flex items-center gap-2 px-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-zinc-100 text-[#09090b] text-xs font-semibold">C</div>
                CHRS.
            </div>

<nav className="space-y-1">
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-zinc-100 bg-zinc-800/40 rounded-md group" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:checklist-minimalistic-linear"></iconify-icon>
                        Show Chores
                    </div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/20 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon icon="solar:history-linear"></iconify-icon>
                        History
                    </div>
</a>
<a className="flex items-center justify-between px-2 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/20 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-2.5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
                        News
                    </div>
</a>
</nav>
</div>

<div className="p-6 border-t border-zinc-800/60">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-zinc-100" icon="solar:cloud-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-100">Cloud Storage</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mb-2">
<div className="h-full bg-zinc-300 w-1/4 rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">24.5 GB used</span>
<span className="text-zinc-300 font-medium tracking-tight">Max. Unlimited</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#09090b] relative">

<header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-6 sticky top-0 bg-[#09090b]/80 backdrop-blur-md z-10 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-lg font-medium tracking-tight text-zinc-100">Active Tasks</h1>
</div>
<div className="flex items-center gap-3">

<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-100 transition-colors px-3 py-1.5 rounded-md border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear"></iconify-icon>
                    Filter A-Z
                </button>

<button className="flex items-center gap-2 text-xs font-medium text-[#09090b] bg-zinc-100 hover:bg-white transition-colors px-3 py-1.5 rounded-md shadow-sm">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                    Insert Chores
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6">
<div className="max-w-3xl mx-auto space-y-1">

<div className="group flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/30 border border-transparent hover:border-zinc-800/50 transition-all">
<div className="flex items-center gap-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded-[3px] bg-zinc-900 peer-checked:bg-zinc-100 peer-checked:border-zinc-100 flex items-center justify-center transition-all shadow-sm">
<iconify-icon className="text-[#09090b] opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<span className="text-sm font-medium text-zinc-200 select-none">Review server security logs</span>
</div>
<div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="p-1.5 text-zinc-500 hover:text-zinc-200 rounded-md hover:bg-zinc-700/50 transition-colors" title="Edit Chores">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-colors" title="Delete Chores Option">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/30 border border-transparent hover:border-zinc-800/50 transition-all">
<div className="flex items-center gap-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded-[3px] bg-zinc-900 peer-checked:bg-zinc-100 peer-checked:border-zinc-100 flex items-center justify-center transition-all shadow-sm">
<iconify-icon className="text-[#09090b] opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<span className="text-sm font-medium text-zinc-200 select-none">Update user documentation</span>
</div>
<div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="p-1.5 text-zinc-500 hover:text-zinc-200 rounded-md hover:bg-zinc-700/50 transition-colors">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/30 border border-transparent hover:border-zinc-800/50 transition-all">
<div className="flex items-center gap-4">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded-[3px] bg-zinc-900 peer-checked:bg-zinc-100 peer-checked:border-zinc-100 flex items-center justify-center transition-all shadow-sm">
<iconify-icon className="text-[#09090b] opacity-0 peer-checked:opacity-100 text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<span className="text-sm font-medium text-zinc-200 select-none">Optimize database indexing</span>
</div>
<div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-opacity">
<button className="p-1.5 text-zinc-500 hover:text-zinc-200 rounded-md hover:bg-zinc-700/50 transition-colors">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-500 hover:text-red-400 rounded-md hover:bg-red-400/10 transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>

<aside className="w-80 border-l border-zinc-800/60 bg-[#09090b]/80 p-6 overflow-y-auto hidden lg:block shrink-0 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.5)]">

<div className="mb-10">
<div className="flex items-center gap-2 mb-4 text-zinc-100">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
<h2 className="text-sm font-medium tracking-tight">Login / Signup</h2>
</div>
<form className="space-y-3">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full bg-[#09090b] border border-zinc-800 rounded-md pl-9 pr-3 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" placeholder="Email address" type="email"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
</div>
<input className="w-full bg-[#09090b] border border-zinc-800 rounded-md pl-9 pr-3 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all shadow-sm" placeholder="Password" type="password"/>
</div>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 text-xs font-medium py-2.5 rounded-md transition-colors border border-zinc-700 hover:border-zinc-600 shadow-sm" type="button">
                    Continue with Email
                </button>
</form>
</div>

<div>
<div className="flex items-center gap-2 mb-4 text-zinc-100 border-t border-zinc-800/60 pt-6">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon>
<h2 className="text-sm font-medium tracking-tight">System Configuration</h2>
</div>
<div className="space-y-5 mb-8">

<label className="flex items-center justify-between cursor-pointer group">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors select-none">Keep chores on this server</span>
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-8 h-4.5 bg-zinc-800 rounded-full peer-checked:bg-zinc-200 transition-colors border border-zinc-700 peer-checked:border-zinc-200"></div>
<div className="absolute left-[2px] top-[2px] w-3.5 h-3.5 bg-zinc-400 rounded-full peer-checked:translate-x-[14px] peer-checked:bg-[#09090b] transition-transform duration-200 ease-in-out shadow-sm"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer group">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors select-none">Don't confirm any emails</span>
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-8 h-4.5 bg-zinc-800 rounded-full peer-checked:bg-zinc-200 transition-colors border border-zinc-700 peer-checked:border-zinc-200"></div>
<div className="absolute left-[2px] top-[2px] w-3.5 h-3.5 bg-zinc-400 rounded-full peer-checked:translate-x-[14px] peer-checked:bg-[#09090b] transition-transform duration-200 ease-in-out shadow-sm"></div>
</div>
</label>

<label className="flex items-center justify-between cursor-pointer group">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300 transition-colors select-none">Don't import any samples</span>
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-8 h-4.5 bg-zinc-800 rounded-full peer-checked:bg-zinc-200 transition-colors border border-zinc-700 peer-checked:border-zinc-200"></div>
<div className="absolute left-[2px] top-[2px] w-3.5 h-3.5 bg-zinc-400 rounded-full peer-checked:translate-x-[14px] peer-checked:bg-[#09090b] transition-transform duration-200 ease-in-out shadow-sm"></div>
</div>
</label>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-transparent border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/30 text-zinc-300 text-xs font-medium py-2.5 rounded-md transition-all shadow-sm group">
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors" icon="solar:database-linear"></iconify-icon>
                Create Database
            </button>
</div>
</aside>

    </>
  );
}
