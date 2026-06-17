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
      

<div className="relative">
<div className="pointer-events-none absolute inset-0 opacity-[0.35]" style={{background: 'radial-gradient(800px 400px at 20% -10%, rgba(168,85,247,0.18), transparent 60%), radial-gradient(600px 400px at 90% -20%, rgba(59,130,246,0.14), transparent 65%)'}}></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-[#0b0d10]/75 border-b border-white/10">
<div className="mx-auto max-w-[1400px] px-4">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">
<span className="text-sm tracking-tight font-semibold">AD</span>
</div>
<div className="hidden sm:flex flex-col leading-none">
<span className="text-[13px] font-medium tracking-tight text-white/90">AI Design Studio</span>
<span className="text-[11px] text-white/50">Merch. Graphics &amp; Mockups</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-1 rounded-lg bg-white/[0.04] border border-white/10 px-1 py-1">
<button className="px-3.5 py-1.5 text-sm rounded-md font-medium tracking-tight bg-white/[0.08] text-white border border-white/10 hover:bg-white/[0.12] hover:border-white/15">Generate</button>
<button className="px-3.5 py-1.5 text-sm rounded-md font-medium tracking-tight text-white/80 hover:text-white hover:bg-white/[0.06]">My Projects</button>
<button className="px-3.5 py-1.5 text-sm rounded-md font-medium tracking-tight text-white/80 hover:text-white hover:bg-white/[0.06]">Templates</button>
<button className="px-3.5 py-1.5 text-sm rounded-md font-medium tracking-tight text-white/70 hover:text-white hover:bg-white/[0.06]">Community</button>
</nav>

<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 pr-2">
<div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1.5">

<svg className="text-amber-300" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 5v6c0 1.7-4 3-9 3s-9-1.3-9-3V5"></path>
<path d="M3 11v6c0 1.7 4 3 9 3s9-1.3 9-3v-6"></path>
</svg>
<span className="text-xs font-medium tracking-tight text-white/90">120 credits</span>
</div>
<button className="p-2 rounded-md border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] hover:border-white/20 transition">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 1 1 12 0c0 7 3 5 3 9H3c0-4 3-2 3-9"></path>
<path d="M10.3 21a1.7 1.7 0 0 0 3.4 0"></path>
</svg>
</button>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-500/90 to-indigo-500/90 text-white px-3.5 py-1.5 text-sm font-medium tracking-tight shadow-lg shadow-purple-500/15 hover:from-purple-400 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 border border-white/10">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.65 3.35L17 8l-3.35 1.65L12 13l-1.65-3.35L7 8l3.35-1.65L12 3zM5 19l.8 1.6L7 21l-1.2.4L5 23l-.8-1.6L3 21l1.2-.4L5 19zm14-9l1.1 2.2L22 13l-1.9.8L19 16l-.8-1.9L16 13l1.9-.8L19 10z"></path>
</svg>
            Upgrade
          </button>
<button className="ml-1 rounded-full border border-white/10 bg-white/[0.06] hover:bg-white/[0.1] w-9 h-9 flex items-center justify-center">

<svg className="text-white/90" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21a8 8 0 1 0-16 0"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-[1400px] px-4 pt-6 pb-28">
<div className="grid grid-cols-12 gap-4 lg:gap-5">

<aside className="col-span-12 lg:col-span-3">
<div className="space-y-4">

<section className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
<div className="flex items-center justify-between px-4 pt-4">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">

<svg className="text-white/80" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.12 2.12 0 1 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
<h2 className="text-[15px] font-semibold tracking-tight">Prompt Area</h2>
</div>

<button className="group relative inline-flex items-center gap-2 text-xs text-white/70 hover:text-white">
<span className="hidden sm:inline">Co-create</span>
<span className="ml-2 relative inline-flex h-5 w-9 rounded-full border border-white/10 bg-white/[0.06] transition">
<span className="absolute left-0.5 top-0.5 size-4 rounded-full bg-white/80 group-aria-pressed:translate-x-4 transition-transform"></span>
</span>
</button>
</div>
<div className="px-4 pt-3">
<div className="relative">
<textarea className="w-full resize-none rounded-lg bg-white/[0.05] border border-white/10 focus:border-purple-400/40 focus:ring-4 focus:ring-purple-500/10 outline-none px-3.5 py-3 text-[13px] placeholder:text-white/40 text-white/90" placeholder="Describe your idea or upload an image/screenshot..." rows="5"></textarea>
<div className="pointer-events-none absolute right-3 bottom-3 text-white/30">

<svg fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM19 3l1.5 3L24 7.5 20.5 9 19 12l-1.5-3L14 7.5 17.5 6 19 3zM15 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z"></path>
</svg>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="18" x="3" y="5"></rect>
<path d="M3 15l5-5 4 4 2-2 4 4"></path>
<circle cx="8.5" cy="8.5" r="1.5"></circle>
</svg>
                  Upload Image
                </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="8" x="8" y="2"></rect>
<path d="M16 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1"></path>
</svg>
                  Paste Screenshot
                </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="18" x="3" y="14"></rect>
</svg>
                  Use Template
                </button>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-1">

<svg className="text-emerald-300" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 14V3"></path>
<path d="M7 12.5A6 6 0 1 1 17 12.5"></path>
</svg>
<span className="text-[11px] font-medium tracking-tight text-white/80">Credits: 120</span>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 text-sm font-medium tracking-tight shadow-lg shadow-purple-500/20 hover:from-purple-400 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 border border-white/10">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4V2"></path><path d="M15 8v-2"></path><path d="M20 15h2"></path><path d="M14 15h2"></path><path d="M6 19l8.5-8.5a1.5 1.5 0 1 1 2.1 2.1L8.1 21.1A2.5 2.5 0 0 1 6 19Z"></path>
</svg>
                  Generate
                </button>
</div>
</div>

<div className="mt-4 border-t border-white/10 px-4 py-4">
<div className="flex items-center gap-2 mb-3">

<svg className="text-white/70" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 4H14"></path><path d="M10 4H3"></path><path d="M8 8v-8"></path><path d="M21 20H14"></path><path d="M10 20H3"></path><path d="M16 24v-8"></path><path d="M21 12H8"></path><path d="M4 12H3"></path><path d="M12 16v-8"></path>
</svg>
<h3 className="text-[13px] font-semibold tracking-tight">AI Settings</h3>
</div>

<div className="mb-3">
<div className="text-[11px] text-white/60 mb-1.5">Style</div>
<div className="flex flex-wrap gap-1.5">
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] font-medium">Minimal</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white/80">Vintage</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white/80">Bold</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white/80">Playful</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] text-white/80">Retro Futurism</button>
</div>
</div>

<div className="mb-3">
<div className="text-[11px] text-white/60 mb-1.5">Output type</div>
<div className="grid grid-cols-3 gap-1.5">
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] font-medium">T‑shirt</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Mug</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Sticker</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Frame</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Vector</button>
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Poster</button>
</div>
</div>

<div className="mb-4">
<div className="text-[11px] text-white/60 mb-1.5">Size presets</div>
<div className="flex flex-wrap gap-1.5">
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.08] border border-white/10 hover:bg-white/[0.12] font-medium">A4</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Square</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Mug Wrap</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">11×14</button>
<button className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/10 hover:bg-white/[0.08]">Banner</button>
</div>
</div>

<div className="">
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/60">Creativity</span>
<span className="text-[11px] text-white/60">0.7</span>
</div>
<div className="mt-2 h-9 rounded-md bg-white/[0.04] border border-white/10 flex items-center px-3">
<input className="w-full accent-purple-500 bg-transparent [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-white/10 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-purple-400 [&amp;::-webkit-slider-thumb]:shadow [&amp;::-webkit-slider-thumb]:ring-2 [&amp;::-webkit-slider-thumb]:ring-white/30" max="1" min="0" step="0.01" type="range" value="0.7"/>
</div>
</div>
</div>
</section>

<section className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
<div className="flex items-center gap-2 px-4 pt-4">
<div className="h-6 w-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">

<svg className="text-white/80" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l7 4-7 4-7-4z"></path>
<path d="M19 8v8l-7 4-7-4V8"></path>
</svg>
</div>
<h2 className="text-[15px] font-semibold tracking-tight">Assets</h2>
<span className="ml-auto text-[11px] text-white/50">Drag into Canvas</span>
</div>
<div className="px-4 pt-3 pb-4">
<div className="grid grid-cols-3 gap-2">
<button className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
<img alt="Asset texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>
<button className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
<img alt="3D render" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
<img alt="Plant" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square rounded-lg border border-dashed border-white/15 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.04] flex items-center justify-center">

<svg className="text-white/60" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12h14"></path>
</svg>
</button>
<button className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]">
<img alt="Gradient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>
</section>
</div>
</aside>

<section className="col-span-12 lg:col-span-6">
<div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">

<div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-white/10">
<div className="flex items-center gap-1.5 sm:gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.1] border border-white/10 hover:bg-white/[0.15] text-xs font-medium">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3L12 7L16 3"></path><path d="M21 8L17 12L21 16"></path><path d="M8 21L12 17L16 21"></path><path d="M3 8L7 12L3 16"></path><path d="M7 12h10"></path><path d="M12 7v10"></path>
</svg>
                Move
              </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-xs">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2v14a2 2 0 0 0 2 2h14"></path>
<path d="M2 6h14a2 2 0 0 1 2 2v14"></path>
</svg>
                Crop
              </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-xs">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7V4h16v3"></path>
<path d="M9 20h6"></path>
<path d="M12 4v16"></path>
</svg>
                Text
              </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-xs">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<circle cx="17" cy="7" r="4"></circle>
<path d="M3 21h18l-9-9-9 9z"></path>
</svg>
                Shapes
              </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-xs">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3 10 7-10 7L2 10l10-7z"></path>
<path d="m2 17 10 7 10-7"></path>
</svg>
                Layers
              </button>
</div>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14L4 9l5-5"></path>
<path d="M20 20a9 9 0 0 0-9-9H4"></path>
</svg>
</button>
<button className="p-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14l5-5-5-5"></path>
<path d="M4 20a9 9 0 0 1 9-9h7"></path>
</svg>
</button>
</div>
</div>

<div className="relative p-3 sm:p-4">
<div className="rounded-lg bg-white shadow-2xl shadow-black/40 border border-black/10 overflow-hidden" style={{backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: '-1px -1px'}}>
<div className="flex items-center justify-between px-3 py-2 bg-slate-50 border-b border-black/10">
<div className="text-[12px] font-medium tracking-tight text-slate-700">Canvas</div>
<div className="text-[11px] text-slate-500">T‑shirt • 3000×3000</div>
</div>

<div className="relative aspect-[4/3] sm:aspect-[5/4] md:aspect-[1.2/1] bg-white">

<div className="absolute left-6 top-6">
<div className="rounded-xl px-3 py-1.5 border-2 border-black/80 bg-amber-300 shadow-[4px_4px_0_0_rgba(0,0,0,0.8)]">
<span className="text-[12px] font-medium tracking-tight text-black">EST. 1984</span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="group relative">
<div className="px-6 py-4 rounded-lg border border-black/10 bg-white/80 backdrop-blur-sm">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">SUNSET CO.</div>
<div className="mt-1 text-[12px] uppercase tracking-[0.2em] text-slate-500">Merch Studio</div>
</div>

<div className="absolute -inset-2 rounded-lg border-2 border-indigo-500/60 pointer-events-none"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 size-3 rounded-full bg-indigo-500 border border-white"></div>
</div>
</div>

<div className="absolute right-8 bottom-8">
<div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 opacity-80 shadow-lg shadow-purple-500/40 border border-white/40"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-3.5 py-2 text-sm font-medium tracking-tight shadow-lg border border-black/10 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/40">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2v6h6"></path>
<path d="M21 22v-6h-6"></path>
<path d="M3 10a9 9 0 0 1 14-7.5L21 8"></path>
<path d="M21 14a9 9 0 0 1-14 7.5L3 16"></path>
</svg>
                  Regenerate
                </button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3.5 py-2 text-sm font-medium tracking-tight shadow-lg shadow-purple-500/20 border border-white/10 hover:from-purple-400 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="11"></rect>
<circle cx="8" cy="16" r="1.5"></circle>
<circle cx="16" cy="16" r="1.5"></circle>
<path d="M12 2v5"></path>
<rect height="6" rx="2" width="10" x="7" y="5"></rect>
</svg>
                  Edit with AI
                </button>
</div>
</div>
</div>
</div>
</section>

<aside className="col-span-12 lg:col-span-3">
<div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">

<div className="flex items-center gap-1 p-1 border-b border-white/10 bg-white/[0.03]">
<button className="px-3 py-2 text-xs font-medium tracking-tight rounded-md bg-white/[0.08] border border-white/10 hover:bg-white/[0.12]">Properties</button>
<button className="px-3 py-2 text-xs rounded-md text-white/80 hover:bg-white/[0.06] border border-transparent hover:border-white/10">AI Suggestions</button>
<button className="px-3 py-2 text-xs rounded-md text-white/80 hover:bg-white/[0.06] border border-transparent hover:border-white/10">Mockup Preview</button>
</div>

<div className="p-4 space-y-4">

<div>
<div className="text-[11px] text-white/60 mb-1.5">Font</div>
<div className="flex gap-2">
<select className="w-full text-[13px] rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-2 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400/40">
<option>Inter (Semi)</option>
<option>Manrope</option>
<option>Archivo</option>
<option>Space Grotesk</option>
</select>
<select className="w-24 text-[13px] rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-2 focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:border-purple-400/40">
<option>18</option>
<option selected="">36</option>
<option>48</option>
<option>64</option>
</select>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<div className="text-[11px] text-white/60 mb-1.5">Color</div>
<div className="flex items-center gap-2">
<input className="h-9 w-9 rounded-md border border-white/10 bg-transparent p-1" type="color" value="#111827"/>
<input className="flex-1 text-[13px] rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-2" type="text" value="#111827"/>
</div>
</div>
<div>
<div className="text-[11px] text-white/60 mb-1.5">Alignment</div>
<div className="flex items-center gap-1.5">
<button className="p-2 rounded-md bg-white/[0.08] border border-white/10 hover:bg-white/[0.12]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16"></path><path d="M4 12h10"></path><path d="M4 18h14"></path>
</svg>
</button>
<button className="p-2 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6h8"></path><path d="M4 12h16"></path><path d="M8 18h8"></path>
</svg>
</button>
<button className="p-2 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16"></path><path d="M10 12h10"></path><path d="M6 18h14"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/60">Spacing</span>
<span className="text-[11px] text-white/60">1.2</span>
</div>
<div className="mt-2 h-9 rounded-md bg-white/[0.04] border border-white/10 flex items-center px-3">
<input className="w-full accent-purple-500 bg-transparent [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-white/10 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-purple-400 [&amp;::-webkit-slider-thumb]:ring-2 [&amp;::-webkit-slider-thumb]:ring-white/30" max="2" min="0.8" step="0.05" type="range" value="1.2"/>
</div>
</div>
<div>
<div className="flex items-center justify-between">
<span className="text-[11px] text-white/60">Opacity</span>
<span className="text-[11px] text-white/60">100%</span>
</div>
<div className="mt-2 h-9 rounded-md bg-white/[0.04] border border-white/10 flex items-center px-3">
<input className="w-full accent-purple-500 bg-transparent [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-white/10 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-purple-400 [&amp;::-webkit-slider-thumb]:ring-2 [&amp;::-webkit-slider-thumb]:ring-white/30" max="100" min="0" step="1" type="range" value="100"/>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<div className="text-[11px] text-white/60 mb-1.5">Layer order</div>
<div className="flex items-center gap-1.5">
<button className="flex-1 px-2.5 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-xs">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19V5"></path><path d="M5 12l7-7 7 7"></path>
</svg>
</button>
<button className="flex-1 px-2.5 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1] text-xs">

<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path><path d="M5 12l7 7 7-7"></path>
</svg>
</button>
</div>
</div>
<div>
<div className="text-[11px] text-white/60 mb-1.5">Shadow</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 text-xs rounded-md bg-white/[0.08] border border-white/10 hover:bg-white/[0.12]">On</button>
<div className="flex-1 h-9 rounded-md bg-white/[0.04] border border-white/10 flex items-center px-3">
<input className="w-full accent-purple-500 bg-transparent [&amp;::-webkit-slider-runnable-track]:h-1 [&amp;::-webkit-slider-runnable-track]:rounded-full [&amp;::-webkit-slider-runnable-track]:bg-white/10 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:-mt-1.5 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-purple-400 [&amp;::-webkit-slider-thumb]:ring-2 [&amp;::-webkit-slider-thumb]:ring-white/30" max="24" min="0" step="1" type="range" value="12"/>
</div>
</div>
</div>
</div>

<div>
<div className="text-[11px] text-white/60 mb-1.5">Export type</div>
<div className="grid grid-cols-3 gap-2">
<label className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white/[0.08] border border-white/10 px-2.5 py-2 text-xs hover:bg-white/[0.12] cursor-pointer">

<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="18" x="3" y="5"></rect>
<path d="M3 15l5-5 4 4 2-2 4 4"></path>
</svg>
                  PNG
                </label>
<label className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white/[0.04] border border-white/10 px-2.5 py-2 text-xs hover:bg-white/[0.08] cursor-pointer">SVG</label>
<label className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white/[0.04] border border-white/10 px-2.5 py-2 text-xs hover:bg-white/[0.08] cursor-pointer">PDF</label>
</div>
</div>
</div>
</div>
</aside>

<section className="col-span-12">
<div className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">

<svg className="text-white/80" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<path d="M8 21h8"></path>
<path d="M12 17v4"></path>
</svg>
</div>
<h2 className="text-[15px] font-semibold tracking-tight">Preview</h2>
<span className="text-[11px] text-white/50">AI Mockups</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3 py-1.5 text-xs font-medium tracking-tight border border-black/10 hover:bg-slate-50">

<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v12"></path><path d="M7 10l5 5 5-5"></path><path d="M5 19h14"></path>
</svg>
                Download
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/[0.06] text-white px-3 py-1.5 text-xs font-medium tracking-tight border border-white/10 hover:bg-white/[0.1]">

<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17h4V5H2v12h2"></path>
<path d="M14 7h5l3 3v7h-2"></path>
<circle cx="7.5" cy="17.5" r="1.5"></circle>
<circle cx="17.5" cy="17.5" r="1.5"></circle>
</svg>
                Export to Printify
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/[0.06] text-white px-3 py-1.5 text-xs font-medium tracking-tight border border-white/10 hover:bg-white/[0.1]">

<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"></path>
<path d="M17 21v-8H7v8"></path>
<path d="M7 3v5h8"></path>
</svg>
                Save Project
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1.5 text-xs font-medium tracking-tight border border-white/10 hover:from-purple-400 hover:to-indigo-400">

<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="M8.59 13.51l6.83 3.98"></path>
<path d="M15.41 6.51L8.59 10.49"></path>
</svg>
                Share to Community
              </button>
</div>
</div>

<div className="p-3 sm:p-4">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

<div className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20">
<div className="aspect-[4/3] bg-black/20 overflow-hidden">
<img alt="T-shirt mockup" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="px-3 py-2 flex items-center justify-between">
<div className="text-[12px] text-white/80">T‑shirt</div>
<button className="text-[11px] px-2 py-1 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">Apply</button>
</div>
</div>

<div className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20">
<div className="aspect-[4/3] bg-black/20 overflow-hidden">
<img alt="Mug mockup" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-3 py-2 flex items-center justify-between">
<div className="text-[12px] text-white/80">Mug</div>
<button className="text-[11px] px-2 py-1 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">Apply</button>
</div>
</div>

<div className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20">
<div className="aspect-[4/3] bg-black/20 overflow-hidden">
<img alt="Sticker mockup" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="px-3 py-2 flex items-center justify-between">
<div className="text-[12px] text-white/80">Sticker</div>
<button className="text-[11px] px-2 py-1 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">Apply</button>
</div>
</div>

<div className="group rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20">
<div className="aspect-[4/3] bg-black/20 overflow-hidden">
<img alt="Frame mockup" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="px-3 py-2 flex items-center justify-between">
<div className="text-[12px] text-white/80">Frame</div>
<button className="text-[11px] px-2 py-1 rounded-md bg-white/[0.06] border border-white/10 hover:bg-white/[0.1]">Apply</button>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-2 sm:hidden">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-slate-900 px-3 py-2 text-xs font-medium tracking-tight border border-black/10">Download</button>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-2 text-xs font-medium tracking-tight border border-white/10">Share</button>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white/[0.06] text-white px-3 py-2-xs font-medium tracking-tight border border-white/10 col-span-2">Export to Printify</button>
</div>
</div>
</div>
</section>
</div>
</main>

<aside className="hidden xl:flex fixed top-16 right-4 bottom-28 w-12 group">
<input className="peer hidden" id="community-toggle" type="checkbox"/>
<label className="h-12 w-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center cursor-pointer hover:bg-white/[0.1]" htmlFor="community-toggle">

<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</label>
<div className="peer-checked:w-80 w-0 overflow-hidden transition-all duration-300 ml-2 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="text-[13px] font-semibold tracking-tight">Community</div>
<label className="text-[11px] text-white/60 hover:text-white cursor-pointer" htmlFor="community-toggle">Close</label>
</div>
<div className="p-3 space-y-2">
<div className="rounded-lg border border-white/10 bg-white/[0.04] overflow-hidden">
<img alt="Trending design 1" className="h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="px-3 py-2">
<div className="text-[12px] text-white/80 truncate">Retro badge pack</div>
<div className="text-[11px] text-white/50">1.2k saves</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] overflow-hidden">
<img alt="Trending design 2" className="h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="px-3 py-2">
<div className="text-[12px] text-white/80 truncate">Playful mascot set</div>
<div className="text-[11px] text-white/50">860 saves</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] overflow-hidden">
<img alt="Trending design 3" className="h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="px-3 py-2">
<div className="text-[12px] text-white/80 truncate">Vector line icons</div>
<div className="text-[11px] text-white/50">530 saves</div>
</div>
</div>
</div>
</div>
</aside>

<div className="fixed inset-x-0 bottom-0 h-28 pointer-events-none" style={{background: 'linear-gradient(to top, rgba(11,13,16,1), rgba(11,13,16,0))'}}></div>

    </>
  );
}
