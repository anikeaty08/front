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
      

<header className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">

<div className="flex items-center gap-3 text-zinc-100">
<div className="w-8 h-8 rounded-md bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg text-zinc-300" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter">DM</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-100 relative after:absolute after:-bottom-5 after:left-0 after:h-[2px] after:w-full after:bg-zinc-100" href="#">Terminal</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200" href="#">Upgrades</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors duration-200" href="#">Network</a>
</nav>

<div className="flex items-center gap-5">

<div className="hidden sm:flex items-center gap-2.5">
<span className="text-xs text-zinc-500 font-medium">Cinematic</span>
<button aria-label="Toggle cinematic mode" className="w-9 h-5 bg-zinc-900 rounded-full relative cursor-pointer hover:bg-zinc-800 transition-colors duration-200 border border-zinc-800 focus:outline-none">
<div className="w-3.5 h-3.5 bg-zinc-500 rounded-full absolute top-[2px] left-[3px] shadow-sm"></div>
</button>
</div>
<div className="h-4 w-[1px] bg-zinc-800 hidden sm:block"></div>
<button className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200 flex items-center justify-center focus:outline-none" title="Fullscreen">
<iconify-icon className="text-xl" icon="solar:maximize-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 relative z-10">

<div className="flex items-end justify-between px-1 md:px-2">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">Operation Moon</h1>
<p className="text-sm text-zinc-500 mt-1 font-medium">Mining session actively running in isolated container.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800/80 px-3 py-1.5 rounded-full">
<span className="flex h-2 w-2 rounded-full bg-emerald-500/20 items-center justify-center relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-20 animate-ping"></span>
<span className="h-1 w-1 rounded-full bg-emerald-500"></span>
</span>
                    Connection Stable
                </div>
</div>

<div className="w-full aspect-[4/3] lg:aspect-[16/9] bg-[#111113] border border-zinc-800/80 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl relative group ring-1 ring-white/5">

<div className="absolute inset-0 flex flex-col items-center justify-center z-0 bg-zinc-950">
<iconify-icon className="text-4xl text-zinc-800 mb-3" icon="solar:planet-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-zinc-600 font-medium">Establishing link...</p>
</div>

<iframe allowfullscreen="" className="w-full h-full absolute inset-0 z-10 border-0 bg-transparent" src="https://dogeminer2.com" title="Mining Application">
</iframe>

<div className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none z-20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"></div>
</div>

<div className="flex items-center justify-between text-xs text-zinc-500 px-1 md:px-2 mt-2 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-base text-zinc-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span>Sandboxed Environment</span>
</div>
<a className="hover:text-zinc-200 transition-colors duration-200 flex items-center gap-1 group" href="https://dogeminer2.com" rel="noopener noreferrer" target="_blank">
                    External Launch
                    <iconify-icon className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</main>

    </>
  );
}
