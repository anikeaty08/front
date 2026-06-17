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
      

<div className="fixed top-0 left-0 w-full h-[50vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-[#050505]/0 to-transparent pointer-events-none z-0"></div>

<main className="relative z-10 w-full max-w-md px-6 py-24 flex flex-col items-center">

<div className="flex flex-col items-center mb-10 text-center transition-all duration-700 opacity-100 translate-y-0">
<div className="relative group cursor-pointer mb-6">
<div className="absolute -inset-0.5 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full opacity-40 group-hover:opacity-70 blur-md transition duration-500"></div>
<img alt="Emily Drives POV Profile" className="relative w-24 h-24 rounded-full object-cover border border-zinc-800 bg-zinc-900 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-[#050505] rounded-full"></div>
</div>
<h1 className="text-2xl font-normal text-zinc-100 tracking-tight mb-2">Emily Drives POV</h1>
<p className="text-base text-zinc-400 max-w-xs leading-relaxed font-extralight">
                Immersive driving experiences. POV test drives, car reviews, and late-night city cruises.
            </p>

<div className="flex items-center gap-5 mt-6">
<a className="text-zinc-500 hover:text-zinc-200 transition-colors duration-300" href="#">
<iconify-icon height="22" icon="solar:videocamera-record-linear" width="22"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-200 transition-colors duration-300" href="#">
<iconify-icon height="22" icon="solar:camera-linear" width="22"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-200 transition-colors duration-300" href="#">
<iconify-icon height="22" icon="solar:smartphone-linear" width="22"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-200 transition-colors duration-300" href="#">
<iconify-icon height="22" icon="solar:letter-linear" width="22"></iconify-icon>
</a>
</div>
</div>

<div className="w-full flex flex-col gap-3">

<a className="group relative w-full p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-indigo-500/40 hover:bg-zinc-800/50 backdrop-blur-md transition-all duration-300 flex items-center justify-between overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
<div className="flex items-center gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-zinc-950 border border-zinc-800/80 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="22" icon="solar:play-linear" width="22"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-normal text-zinc-200 tracking-tight">Latest POV Drive</span>
<span className="text-sm text-zinc-500 font-extralight mt-0.5">Porsche 911 GT3 RS Nürburgring</span>
</div>
</div>
<div className="text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>

<a className="group w-full p-3.5 rounded-xl bg-transparent border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex items-center justify-between" href="https://www.tiktok.com/@emilydrivespov" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-zinc-900/50 border border-zinc-800/60 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon height="18" icon="solar:play-stream-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-normal text-zinc-300 group-hover:text-zinc-100 transition-colors">Follow on TikTok</span>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group w-full p-3.5 rounded-xl bg-transparent border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex items-center justify-between" href="https://patreon.com/emilydrivespov" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-zinc-900/50 border border-zinc-800/60 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon height="18" icon="solar:heart-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-normal text-zinc-300 group-hover:text-zinc-100 transition-colors">Support on Patreon</span>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group w-full p-3.5 rounded-xl bg-transparent border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex items-center justify-between" href="https://web.facebook.com/profile.php?id=61577487662365" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-zinc-900/50 border border-zinc-800/60 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon height="18" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-normal text-zinc-300 group-hover:text-zinc-100 transition-colors">Connect on Facebook</span>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group w-full p-3.5 rounded-xl bg-transparent border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300 flex items-center justify-between" href="#">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-zinc-900/50 border border-zinc-800/60 flex items-center justify-center text-zinc-400 group-hover:text-zinc-200 transition-colors">
<iconify-icon height="18" icon="solar:case-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-normal text-zinc-300 group-hover:text-zinc-100 transition-colors">Business &amp; Collabs</span>
</div>
<iconify-icon className="text-zinc-700 group-hover:text-zinc-400 transition-colors" height="18" icon="solar:alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="w-full mt-10 pt-8 border-t border-zinc-900">
<h3 className="text-sm font-normal text-zinc-500 uppercase tracking-widest mb-4 pl-1">Pit Stop Newsletter</h3>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-800 to-indigo-900 rounded-lg opacity-10 group-hover:opacity-20 transition duration-500 blur-sm"></div>
<div className="relative flex bg-zinc-950/80 rounded-lg border border-zinc-800/80 overflow-hidden focus-within:border-zinc-600 transition-all">
<div className="pl-3 py-3 text-zinc-500 flex items-center justify-center">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-base text-zinc-200 placeholder-zinc-600 focus:ring-0 p-3 outline-none" placeholder="email@domain.com" required="" type="email"/>
<button className="px-5 py-1.5 my-1.5 mr-1.5 bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-normal rounded shadow-sm transition-colors" type="submit">
                            Subscribe
                        </button>
</div>
</div>
<p className="text-sm text-zinc-600 pl-1 font-extralight">Get updates on new cars, builds, and exclusive videos.</p>
</form>
</div>
</main>

    </>
  );
}
