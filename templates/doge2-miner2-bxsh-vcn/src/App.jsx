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
      

<header className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-zinc-800/60 bg-zinc-950 shrink-0 z-10">
<div className="flex items-center gap-4">

<div className="flex items-center justify-center w-8 h-8 rounded-md bg-zinc-50 text-zinc-950 shadow-sm">
<span className="text-xs font-medium tracking-tighter">DM</span>
</div>
<div className="h-4 w-px bg-zinc-800 hidden sm:block"></div>
<nav className="hidden sm:flex items-center gap-6 text-sm">
<a className="text-zinc-100 font-medium transition-colors" href="#">Overview</a>
<a className="text-zinc-500 hover:text-zinc-300 font-normal transition-colors" href="#">Documentation</a>
<a className="text-zinc-500 hover:text-zinc-300 font-normal transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-normal text-zinc-400 gap-2">
<span className="flex h-2 w-2 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                System Operational
            </div>
<button className="flex items-center justify-center w-8 h-8 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-all">
<iconify-icon height="20" icon="solar:bell-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-600/50"></div>
</div>
</header>

<main className="flex-1 flex flex-col overflow-hidden relative p-2 sm:p-4 lg:p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950">

<div className="mb-6 hidden sm:block px-2">
<h1 className="text-2xl font-medium tracking-tight text-zinc-100">Application Viewer</h1>
<p className="text-sm font-normal text-zinc-500 mt-1">Interacting with remote instance securely.</p>
</div>

<div className="flex-1 flex flex-col w-full max-w-7xl mx-auto rounded-xl border border-zinc-800/80 bg-zinc-900/30 shadow-2xl overflow-hidden backdrop-blur-sm relative z-0">

<div className="h-12 bg-zinc-900/90 border-b border-zinc-800/60 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-2.5 w-1/3">
<div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/30"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/30"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/50 border border-zinc-600/30"></div>
</div>

<div className="flex-1 max-w-md flex items-center justify-center">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-950/50 border border-zinc-800/80 text-xs font-normal text-zinc-400 w-full sm:w-auto shadow-inner">
<iconify-icon height="14" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
<span className="truncate">dogeminer2.com</span>
</div>
</div>
<div className="w-1/3 flex justify-end gap-2 text-zinc-500">
<button className="hover:text-zinc-200 transition-colors p-1" title="Refresh">
<iconify-icon height="18" icon="solar:refresh-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
<button className="hover:text-zinc-200 transition-colors p-1 hidden sm:block" title="Expand">
<iconify-icon height="18" icon="solar:maximize-square-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 relative bg-[#1c1c1c]">

<div className="absolute inset-0 flex items-center justify-center -z-10 bg-zinc-900">
<iconify-icon className="animate-spin text-zinc-700" height="24" icon="solar:spinner-linear" width="24"></iconify-icon>
</div>
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-none" src="https://dogeminer2.com" title="Embedded Application">
</iframe>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-zinc-800/10 blur-[100px] pointer-events-none -z-10"></div>
</main>

    </>
  );
}
