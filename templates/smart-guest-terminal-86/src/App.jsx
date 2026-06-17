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
      

<div className="fixed inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'}}></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
<div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></div>
<span className="text-sm font-semibold tracking-tight text-white uppercase font-mono">SYS.LOFT.402</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block text-[10px] font-mono text-zinc-500">v2.4.0 (STABLE)</div>
<button className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors">
<svg className="lucide lucide-menu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>
</nav>

<main className="z-10 max-w-3xl mr-auto ml-auto pt-28 pr-4 pl-4 relative space-y-12">

<header className="animate-enter space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 w-fit">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
<span className="text-[10px] font-mono font-medium tracking-wider uppercase">Access Granted</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
                Welcome to <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Control Center</span>
</h1>
<p className="leading-relaxed sm:text-base text-sm text-zinc-500 max-w-lg">
                System initialized. Access your credentials, view tutorials, and manage apartment utilities below.
            </p>
</header>

<section className="animate-enter grid grid-cols-1 sm:grid-cols-2 gap-4" style={{animationDelay: '100ms'}}>

<div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 tech-border p-6 hover:bg-zinc-900 transition-all duration-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="flex justify-between items-start mb-8">
<div className="p-2.5 rounded-lg bg-zinc-800/50 border border-white/5 text-indigo-400">
<svg className="lucide lucide-wifi" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded uppercase">5.0 GHz</span>
</div>
<div className="space-y-1">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Network ID</div>
<div className="text-xl font-medium text-white tracking-tight">Loft402_Ultra</div>
<div className="flex items-center gap-2 pt-2">
<code className="text-xs bg-black/40 border border-white/10 px-2 py-1 rounded text-zinc-400 font-mono">Pass: serene_stay_24</code>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">Copy</button>
</div>
</div>
</div>

<div className="group overflow-hidden tech-border hover:bg-zinc-900 transition-all duration-300 bg-zinc-900/50 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex mb-8 items-start justify-between">
<div className="p-2.5 rounded-lg bg-zinc-800/50 border border-white/5 text-white">
<svg className="lucide lucide-map-pin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<svg className="lucide lucide-arrow-up-right text-zinc-600 group-hover:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="space-y-1">
<div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Location Data</div>
<div className="text-xl font-medium text-white tracking-tight">142 Highland Ave</div>
<div className="text-xs text-zinc-500 font-mono">SEATTLE, WA • APT 402</div>
</div>
</div>
</section>

<section className="animate-enter space-y-6" style={{animationDelay: '200ms'}}>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<h2 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
<svg className="lucide lucide-play-circle text-indigo-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    SYSTEM TUTORIALS
                </h2>
<span className="text-[10px] font-mono text-zinc-600">3 FILES FOUND</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group relative bg-zinc-900 rounded-xl overflow-hidden tech-border cursor-pointer">

<div className="relative aspect-video w-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="text-white ml-1" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white">0:45</div>
</div>

<div className="p-4">
<h3 className="text-sm font-medium text-zinc-200">Smart Lock Access</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">How to operate the Yale entry system keypad.</p>
</div>
</div>

<div className="group relative bg-zinc-900 rounded-xl overflow-hidden tech-border cursor-pointer">
<div className="relative aspect-video w-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white">1:12</div><div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="w-[20px] h-[20px] ml-1" data-icon-replaced="true" fill="currentColor" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
<div className="p-4">
<h3 className="text-sm font-medium text-zinc-200">Nespresso Machine</h3>
<p className="text-xs text-zinc-500 mt-1 line-clamp-1">Brewing the perfect cup &amp; refilling water.</p>
</div>
</div>
</div>
</section>

<section className="animate-enter space-y-6" style={{animationDelay: '300ms'}}>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<h2 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
<svg className="lucide lucide-image text-indigo-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                    VISUAL DATABASE
                </h2>
<div className="flex gap-1">
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

<div className="group relative aspect-square bg-zinc-900 rounded-lg overflow-hidden tech-border">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
<span className="text-[10px] font-mono text-indigo-300">LOC: BATHROOM</span>
<span className="text-xs font-medium text-white">Towels &amp; Amenities</span>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 rounded-lg overflow-hidden tech-border">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
<span className="text-[10px] font-mono text-indigo-300">LOC: BEDROOM</span>
<span className="text-xs font-medium text-white">Extra Pillows</span>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 rounded-lg overflow-hidden tech-border">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
<span className="text-[10px] font-mono text-indigo-300">LOC: ENTRY</span>
<span className="text-xs font-medium text-white">Emergency Kit</span>
</div>
</div>
</div>
</section>

<section className="animate-enter rounded-xl tech-border bg-zinc-900/40 p-1 overflow-hidden" style={{animationDelay: '400ms'}}>
<div className="relative bg-zinc-950/50 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6 scanline">
<div className="space-y-2 text-center sm:text-left">
<div className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">Entry Protocol</div>
<h3 className="text-lg font-medium text-white">Main Building Access</h3>
<p className="text-sm text-zinc-500">Input code on intercom panel. Wait for buzzer.</p>
</div>
<div className="flex items-center gap-1">
<div className="w-10 h-12 flex items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-xl font-mono text-white shadow-lg shadow-indigo-500/10">8</div>
<div className="w-10 h-12 flex items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-xl font-mono text-white shadow-lg shadow-indigo-500/10">8</div>
<div className="w-10 h-12 flex items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-xl font-mono text-white shadow-lg shadow-indigo-500/10">4</div>
<div className="w-10 h-12 flex items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-xl font-mono text-white shadow-lg shadow-indigo-500/10">2</div>
</div>
</div>
</section>

<section className="animate-enter space-y-3" style={{animationDelay: '500ms'}}>
<h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-1">Control Modules</h2>
<details className="group bg-zinc-900/30 tech-border rounded-lg overflow-hidden open:bg-zinc-900 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer select-none">
<div className="flex items-center gap-3">
<svg className="lucide lucide-thermometer text-zinc-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0"></path></svg>
<span className="text-sm font-medium text-zinc-200">Climate Control</span>
</div>
<svg className="lucide lucide-chevron-right text-zinc-600 group-open:rotate-90 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</summary>
<div className="px-4 pb-4 pt-0 pl-[3.25rem]">
<p className="text-sm text-zinc-500 leading-relaxed border-l border-zinc-800 pl-4">
                        Nest thermostat located in hallway. Rotate dial to adjust. 
                        <span className="text-xs text-indigo-400 mt-2 block">RECOMMENDED: 72°F</span>
</p>
</div>
</details>
<details className="group bg-zinc-900/30 tech-border rounded-lg overflow-hidden open:bg-zinc-900 transition-colors">
<summary className="flex items-center justify-between p-4 cursor-pointer select-none">
<div className="flex items-center gap-3">
<svg className="lucide lucide-trash-2 text-zinc-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
<span className="text-sm font-medium text-zinc-200">Refuse Disposal</span>
</div>
<svg className="lucide lucide-chevron-right text-zinc-600 group-open:rotate-90 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</summary>
<div className="px-4 pb-4 pt-0 pl-[3.25rem]">
<p className="text-sm text-zinc-500 leading-relaxed border-l border-zinc-800 pl-4">
                        Trash chute is at the end of the hall. Recycling bins are located in the basement garage (B1).
                    </p>
</div>
</details>
</section>

<footer className="border-t border-white/5 pt-8 text-center">
<div className="inline-flex items-center gap-2 mb-4 opacity-50">
<svg className="lucide lucide-power text-indigo-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span className="text-[10px] font-mono text-zinc-400">SYSTEM STATUS: ONLINE</span>
</div>
<p className="text-xs text-zinc-600">
                © 2024 Loft 402 Guest Terminal. <br/>
                For urgent assistance, dial <span className="text-zinc-400">911</span> or Support.
            </p>
</footer>
</main>

    </>
  );
}
