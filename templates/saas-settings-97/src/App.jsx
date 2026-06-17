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
      
<main className="w-full max-w-md bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 shadow-2xl backdrop-blur-md">


<div className="space-y-1">

<div className="group flex items-center justify-between p-3 -mx-3 rounded-xl hover:bg-zinc-800/30 transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center overflow-hidden shrink-0">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-zinc-200">Account Profile</h2>
<p className="text-xs text-zinc-500 mt-0.5">
                Manage your personal information
              </p>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="h-px w-full bg-zinc-800/50 my-2"></div>

<div className="flex items-center justify-between p-3 -mx-3 rounded-xl transition-all duration-300 ease-out hover:bg-zinc-800/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-zinc-200">
                Push Notifications
              </h2>
<p className="text-xs text-zinc-500 mt-0.5">
                Receive alerts for activity
              </p>
</div>
</div>
<button aria-checked="true" className="toggle-active relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-all duration-300 ease-out hover:scale-[1.1] active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 border border-zinc-800/50" role="switch">
<span className="inline-block h-3.5 w-3.5 transform rounded-full transition duration-200 ease-in-out shadow-sm ml-0.5"></span>
</button>
</div>

<div className="flex items-center justify-between p-3 -mx-3 rounded-xl transition-all duration-300 ease-out hover:bg-zinc-800/10 hover:scale-[1.02] active:scale-[0.98] cursor-pointer group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-800 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:palette-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-zinc-200">Appearance</h2>
<p className="text-xs text-zinc-500 mt-0.5">Select interface theme</p>
</div>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-800/40 text-xs font-medium text-zinc-300 hover:bg-zinc-700/60 hover:text-zinc-100 transition-all duration-300 ease-out hover:scale-[1.05] active:scale-95 shadow-sm hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            Dark
            <iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</main>

    </>
  );
}
