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



        fetch("https://ipapi.co/json/")
          .then(res => res.json())
          .then(data => {
            if (data.country_code === "UA") {
              const banner = document.createElement("div");
              banner.innerHTML = "You are visiting from Ukraine 🇺🇦";
              banner.style.cssText =
                "padding:15px;background:#f0f8ff;border:1px solid #ccc;margin:10px 0;";
              document.body.prepend(banner);
            }
          });
    
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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-zinc-200/60">
<div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-95">
<span className="font-semibold text-sm tracking-tighter">HW</span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">Platform</span>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Documentation</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Changelog</a>
</div>
</div>
</nav>

<main className="flex-grow flex items-center justify-center p-6 sm:p-12">
<div className="w-full max-w-md animate-fade-in">

<div className="bg-white rounded-2xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/30">
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Operational</span>
</div>
<div className="flex items-center gap-1.5 text-zinc-400">
<iconify-icon icon="solar:wifi-router-linear" width="16"></iconify-icon>
<span className="text-xs font-mono">US-EAST-1</span>
</div>
</div>

<div className="p-8 pb-6">
<div className="mb-6 inline-flex items-center justify-center p-3 rounded-xl bg-zinc-100 text-zinc-900">
<iconify-icon icon="solar:programming-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h1 className="text-3xl font-medium text-zinc-900 tracking-tight mb-2">Hello, World.</h1>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Welcome to the beginning. This interface is designed for clarity, performance, and scalability. 
                        Your environment is ready for deployment.
                    </p>
</div>

<div className="px-8 pb-8 space-y-4">
<div className="group flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:shadow-sm bg-white transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-zinc-50 text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Deployment</span>
<span className="text-xs text-zinc-500">Instant static generation</span>
</div>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
<div className="group flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:border-zinc-300 hover:shadow-sm bg-white transition-all cursor-default">
<div className="flex items-center gap-3">
<div className="p-1.5 rounded-md bg-zinc-50 text-zinc-600 group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Security</span>
<span className="text-xs text-zinc-500">End-to-end encryption</span>
</div>
</div>

<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>

<div className="px-6 py-4 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:settings-linear" width="14"></iconify-icon>
                        Configure
                    </button>
<button className="text-xs font-medium bg-zinc-900 text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-zinc-800 hover:shadow transition-all flex items-center gap-1.5">
<span>Initialize</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
</div>
<p className="mt-6 text-center text-xs text-zinc-400">
                Press <kbd className="font-mono bg-white border border-zinc-200 rounded px-1 py-0.5 text-zinc-500">⌘K</kbd> for commands
            </p>
</div>
</main>



    </>
  );
}
