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
      

<nav className="w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between z-10">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tighter text-zinc-100">NOVA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Home
            </a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Apps
            </a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Games
            </a>
<a className="hover:text-zinc-100 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Settings
            </a>
</div>
<button className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>

<main className="flex-grow flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto relative z-10 pb-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md aspect-square bg-zinc-800/20 rounded-full blur-3xl -z-10 pointer-events-none" style={{filter: 'blur(120px)'}}></div>

<div className="text-center mb-10 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/60 bg-zinc-900/30 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></span>
                System Operational
            </div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-100 mb-5">
                Explore without limits.
            </h1>
<p className="text-base text-zinc-400 max-w-md mx-auto font-normal">
                A minimal, secure gateway. Enter a search query or uniform resource locator to proceed.
            </p>
</div>

<div className="w-full max-w-2xl relative group">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-800/30 to-zinc-700/30 rounded-2xl blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 -z-10"></div>
<div className="relative flex items-center bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 hover:border-zinc-700/80 focus-within:border-zinc-600 focus-within:bg-zinc-900/80 rounded-2xl p-2 transition-all duration-300 shadow-2xl shadow-black/40">
<div className="pl-4 pr-3 text-zinc-500 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input autocomplete="off" className="flex-grow bg-transparent border-none outline-none text-base text-zinc-100 placeholder:text-zinc-600 py-3 px-1 font-normal w-full" placeholder="Search the web or enter destination..." spellcheck="false" type="text"/>
<button className="bg-zinc-100 hover:bg-white text-zinc-950 px-6 py-3 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ml-2 h-full">
                    Go
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="mt-20 w-full max-w-2xl">
<div className="flex items-center justify-between mb-6 px-2">
<h2 className="text-sm font-normal text-zinc-500">Quick Access</h2>
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1">
                    Edit
                    <iconify-icon icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/40 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:bg-zinc-700/40 transition-all duration-300 text-zinc-400 group-hover:text-zinc-100 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:monitor-camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">Media</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/40 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:bg-zinc-700/40 transition-all duration-300 text-zinc-400 group-hover:text-zinc-100 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">Social</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/40 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:bg-zinc-700/40 transition-all duration-300 text-zinc-400 group-hover:text-zinc-100 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:gamepad-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">Games</span>
</div>
<div className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/40 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-zinc-800/40 flex items-center justify-center mb-4 group-hover:-translate-y-1 group-hover:bg-zinc-700/40 transition-all duration-300 text-zinc-400 group-hover:text-zinc-100 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">Tools</span>
</div>
</div>
</div>
</main>

<footer className="w-full py-8 flex flex-col sm:flex-row items-center justify-between px-8 text-xs text-zinc-600 font-normal border-t border-zinc-900/50 mt-auto z-10">
<p>Nova Prxys © 2024</p>
<div className="flex items-center gap-4 mt-4 sm:mt-0">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Encrypted
            </a>
</div>
</footer>

    </>
  );
}
