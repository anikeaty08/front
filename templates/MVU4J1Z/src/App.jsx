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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white/10 focus:px-3 focus:py-2 focus:ring-1 focus:ring-white/20 text-sm" href="#main">Skip to content</a>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-64 left-1/2 h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 via-fuchsia-500/20 to-pink-500/20 blur-3xl"></div>
<div className="absolute -bottom-56 -left-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tr from-fuchsia-600/20 via-pink-500/10 to-rose-500/10 blur-3xl"></div>
<div className="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-indigo-600/20 via-violet-500/10 to-fuchsia-500/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur-xl bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span className="text-fuchsia-300 text-sm font-semibold tracking-tight">EC</span>
</div>
<span className="text-sm text-white/70">EventConnect</span>
<div className="hidden md:flex items-center gap-2 pl-3">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/70 ring-1 ring-white/10">
<span aria-hidden="true" className="relative inline-flex h-2 w-2">
<span className="absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
<span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-emerald-400"></span>
</span>
                Live memories updating
              </span>
</div>
</div>
<nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
<a className="text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 focus-visible:rounded-md px-1" href="#discover">Discover</a>
<a className="text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 focus-visible:rounded-md px-1" href="#timeline">Timeline</a>
<a className="text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 focus-visible:rounded-md px-1" href="#vault">Vault</a>
<a className="text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 focus-visible:rounded-md px-1" href="#community">Community</a>
</nav>
<div className="flex items-center gap-2">
<button aria-label="Start free" className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Start free
            </button>
<button aria-label="Sign in" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-violet-600 to-fuchsia-600 px-3.5 py-2 text-sm text-white/95 ring-1 ring-white/10 hover:from-violet-500 hover:to-fuchsia-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="log-in"></i>
              Sign in
            </button>
<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileNav">
<nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="grid gap-1 text-sm">
<a className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" href="#discover">Discover</a>
<a className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" href="#timeline">Timeline</a>
<a className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" href="#vault">Vault</a>
<a className="block rounded-md px-3 py-2 text-white/80 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" href="#community">Community</a>
</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="sparkles"></i> Start free
            </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-tr from-violet-600 to-fuchsia-600 px-3 py-2 text-sm text-white/95 ring-1 ring-white/10 hover:from-violet-500 hover:to-fuchsia-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="log-in"></i> Sign in
            </button>
</div>
</nav>
</div>
</header>

<main id="main">
<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/70 ring-1 ring-white/10 mb-4">
<i className="h-3.5 w-3.5" data-lucide="ticket"></i>
                Track every show you’ve lived
              </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold leading-tight">
                Your live music, captured as a living timeline.
              </h1>
<p className="mt-4 text-white/70 text-base sm:text-lg">
                Upload photos and videos, organize them by event, and watch your musical journey unfold—while connecting with a community that lives for the stage.
              </p>
<form className="mt-6 flex flex-col sm:flex-row gap-3" novalidate="">
<div className="flex-1 min-w-0">
<div className="flex items-center rounded-md bg-white/5 ring-1 ring-white/10 focus-within:ring-white/20">
<div className="pl-3 text-white/50">
<i className="h-4 w-4" data-lucide="mail"></i>
</div>
<input aria-label="Email address" className="w-full bg-transparent px-3 py-2.5 text-sm text-white/90 placeholder:text-white/40 focus:outline-none" placeholder="Enter your email" type="email"/>
<button className="mx-1 rounded-md bg-gradient-to-tr from-violet-600 to-fuchsia-600 px-3 py-2 text-sm text-white/95 hover:from-violet-500 hover:to-fuchsia-500 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" type="submit">
                      Get early access
                    </button>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" type="button">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                  Watch demo
                </button>
</form>
<div className="mt-6 flex items-center gap-5">
<div className="flex -space-x-2">
<img alt="User avatar 1" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="User avatar 2" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="User avatar 3" className="h-8 w-8 rounded-full ring-2 ring-neutral-950 object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-white/60">
                  Loved by concert-goers, festival fans and live photo creators.
                </p>
</div>
</div>
<div className="lg:col-span-6">

<div className="relative rounded-xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur-xl overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-white/70 ring-1 ring-white/10">
<i className="h-3.5 w-3.5" data-lucide="clock"></i>
                    Auto-chronology
                  </div>
</div>
<div className="grid grid-cols-12 gap-4">

<div className="col-span-12 md:col-span-6 space-y-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="calendar"></i>
<span className="text-xs text-white/60">Recent Events</span>
</div>
<div className="space-y-3">

<div className="group flex items-center gap-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10 transition-colors">
<img alt="ODESZA at Red Rocks cover" className="h-12 w-12 rounded-md object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white/90 truncate">ODESZA: The Last Goodbye</p>
<p className="text-xs text-white/50">Aug 12, 2025 • Red Rocks</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-[10px] text-white/50">18 memories</span>
<i className="h-4 w-4 text-white/50 group-hover:text-white/70" data-lucide="chevron-right"></i>
</div>
</div>
<div className="group flex items-center gap-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10 transition-colors">
<img alt="Tame Impala at The Forum cover" className="h-12 w-12 rounded-md object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white/90 truncate">Tame Impala: Live</p>
<p className="text-xs text-white/50">Jul 01, 2025 • The Forum</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-[10px] text-white/50">26 memories</span>
<i className="h-4 w-4 text-white/50 group-hover:text-white/70" data-lucide="chevron-right"></i>
</div>
</div>
<div className="group flex items-center gap-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10 transition-colors">
<img alt="Porter Robinson Nurture cover" className="h-12 w-12 rounded-md object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white/90 truncate">Porter Robinson: Nurture</p>
<p className="text-xs text-white/50">May 18, 2025 • Lollapalooza</p>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-[10px] text-white/50">12 memories</span>
<i className="h-4 w-4 text-white/50 group-hover:text-white/70" data-lucide="chevron-right"></i>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 space-y-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="audio-lines"></i>
<span className="text-xs text-white/60">Waveform Preview</span>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-3">
<img alt="Track thumbnail" className="h-10 w-10 rounded-md object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm text-white/90 truncate">Sunset Set — Live at Red Rocks</p>
<p className="text-xs text-white/50">Captured Aug 12, 2025</p>
</div>
<button aria-label="Play" className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="play"></i>
</button>
</div>
<div aria-hidden="true" className="mt-3 h-20 rounded-md bg-gradient-to-b from-white/5 to-white/0 ring-1 ring-inset ring-white/5 p-2">

<div className="flex items-end gap-1 h-full">
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '25%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '40%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '60%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '35%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '80%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '50%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '30%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '45%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '75%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '55%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '35%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '25%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '65%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '85%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '30%'}}></div>
<div className="w-0.5 bg-white/10 h-full mx-1"></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '40%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '20%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '45%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '70%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '55%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '35%'}}></div>
<div className="w-0.5 bg-white/10 h-full mx-1"></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '30%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '45%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '65%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '28%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '90%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/70 to-violet-500/70 rounded-sm" style={{height: '60%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/60 to-violet-500/60 rounded-sm" style={{height: '22%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/60 to-violet-500/60 rounded-sm" style={{height: '33%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/60 to-violet-500/60 rounded-sm" style={{height: '52%'}}></div>
<div className="w-0.5 bg-gradient-to-t from-fuchsia-500/60 to-violet-500/60 rounded-sm" style={{height: '44%'}}></div>
</div>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="share-2"></i>
<span className="text-xs text-white/60">Real-time shares</span>
</div>
<div className="mt-2 flex items-center gap-3">
<div className="relative">
<img alt="Ava avatar" className="h-8 w-8 rounded-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="absolute -right-0 -bottom-0 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-950"></span>
</div>
<p className="text-sm text-white/80">
<span className="text-white/60">Ava shared</span> 3 clips from “Sunset Set”
                        </p>
<span className="ml-auto text-[11px] text-white/50">just now</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<section className="py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="image"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Memory Vault</h3>
</div>
<p className="mt-2 text-sm text-white/60">Upload and organize photos/videos into event-specific collections.</p>
</div>
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="calendar-clock"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Timeline Journey</h3>
</div>
<p className="mt-2 text-sm text-white/60">Events auto-ordered chronologically to reveal your music path.</p>
</div>
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="map-pin"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Event Discovery</h3>
</div>
<p className="mt-2 text-sm text-white/60">Find shows, follow artists, and see who’s going near you.</p>
</div>
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="users"></i>
</div>
<h3 className="text-base font-semibold tracking-tight">Music Community</h3>
</div>
<p className="mt-2 text-sm text-white/60">Share memories, follow friends, and relive the best sets together.</p>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10" id="discover">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Discover events</h2>
<p className="text-sm text-white/60 mt-1">Follow artists, venues and see who’s attending.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i>
              Filters
            </button>
</div>
<div className="mt-5 grid md:grid-cols-12 gap-6">

<div className="md:col-span-7 space-y-4">
<div className="flex items-center rounded-lg bg-white/5 ring-1 ring-white/10 focus-within:ring-white/20">
<span className="pl-3 text-white/50">
<i className="h-5 w-5" data-lucide="search"></i>
</span>
<input aria-label="Search" className="w-full bg-transparent px-3 py-2.5 text-sm text-white/90 placeholder:text-white/40 focus:outline-none" placeholder="Search artists, venues, cities…" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all">
<div className="relative">
<img alt="Justice event banner" className="h-40 w-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
<div>
<p className="text-sm font-medium">Justice</p>
<p className="text-xs text-white/70">Sep 16 • MSG</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 text-xs ring-1 ring-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="calendar-plus"></i>
                        I’m going
                      </button>
</div>
</div>
<div className="p-3 flex items-center justify-between text-xs text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="users"></i> 842 going
                    </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> New York, NY
                    </span>
</div>
</div>
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all">
<div className="relative">
<img alt="Fred again.. event banner" className="h-40 w-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
<div>
<p className="text-sm font-medium">Fred again..</p>
<p className="text-xs text-white/70">Oct 04 • LA Coliseum</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 text-xs ring-1 ring-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="calendar-plus"></i>
                        I’m going
                      </button>
</div>
</div>
<div className="p-3 flex items-center justify-between text-xs text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="users"></i> 1.4k going
                    </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Los Angeles, CA
                    </span>
</div>
</div>
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all">
<div className="relative">
<img alt="RÜFÜS DU SOL event banner" className="h-40 w-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
<div>
<p className="text-sm font-medium">RÜFÜS DU SOL</p>
<p className="text-xs text-white/70">Nov 20 • Red Rocks</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 text-xs ring-1 ring-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="calendar-plus"></i>
                        I’m going
                      </button>
</div>
</div>
<div className="p-3 flex items-center justify-between text-xs text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="users"></i> 2.1k going
                    </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Morrison, CO
                    </span>
</div>
</div>
<div className="group rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all">
<div className="relative">
<img alt="ODESZA event banner" className="h-40 w-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
<div>
<p className="text-sm font-medium">ODESZA</p>
<p className="text-xs text-white/70">Dec 02 • Seattle</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1.5 text-xs ring-1 ring-white/10 backdrop-blur hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="calendar-plus"></i>
                        I’m going
                      </button>
</div>
</div>
<div className="p-3 flex items-center justify-between text-xs text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="users"></i> 3.2k going
                    </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin"></i> Seattle, WA
                    </span>
</div>
</div>
</div>
</div>

<div className="md:col-span-5 space-y-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="activity"></i>
<h3 className="text-sm font-semibold tracking-tight">Weekly activity</h3>
</div>
<span className="text-xs text-white/50">Last 7 days</span>
</div>
<p className="text-xs text-white/60 mt-1">Memories uploaded vs events attended</p>
<div className="mt-3">
<div>
<div><canvas aria-label="Activity chart" height="100" id="activityChart" role="img"></canvas></div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4" id="community">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="messages-square"></i>
<h3 className="text-sm font-semibold tracking-tight">Community feed</h3>
</div>
<div className="mt-3 space-y-3">
<div className="flex gap-3">
<img alt="Kai avatar" className="h-9 w-9 rounded-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="text-sm text-white/90">Kai</p>
<span className="text-[11px] text-white/50">2m</span>
</div>
<p className="text-sm text-white/70">Uploaded 5 photos to “Tame Impala: Live”</p>
<div aria-hidden="true" className="mt-2 grid grid-cols-5 gap-2">
<img alt="" className="h-14 w-full rounded object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-14 w-full rounded object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-14 w-full rounded object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-14 w-full rounded object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="h-14 w-full rounded bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-xs text-white/60">+3</div>
</div>
<div className="mt-2 flex items-center gap-4 text-xs text-white/60">
<button className="inline-flex items-center gap-1 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 rounded"><i className="h-3.5 w-3.5" data-lucide="heart"></i> Like</button>
<button className="inline-flex items-center gap-1 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 rounded"><i className="h-3.5 w-3.5" data-lucide="message-circle"></i> Comment</button>
<button className="inline-flex items-center gap-1 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 rounded"><i className="h-3.5 w-3.5" data-lucide="share-2"></i> Share</button>
</div>
</div>
</div>
<div className="flex gap-3">
<img alt="Ava avatar" className="h-9 w-9 rounded-full object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2">
<p className="text-sm text-white/90">Ava</p>
<span className="text-[11px] text-white/50">12m</span>
</div>
<p className="text-sm text-white/70">Shared a clip from “Sunset Set — Live at Red Rocks”</p>
<div className="mt-2 rounded-md bg-white/5 ring-1 ring-white/10 p-2">
<div className="flex items-center gap-2">
<i className="h-3.5 w-3.5 text-white/60" data-lucide="audio-lines"></i>
<div aria-hidden="true" className="h-8 flex-1 flex items-end gap-0.5">
<span className="w-0.5 h-3 bg-white/20"></span>
<span className="w-0.5 h-6 bg-white/40"></span>
<span className="w-0.5 h-4 bg-white/30"></span>
<span className="w-0.5 h-7 bg-white/50"></span>
<span className="w-0.5 h-5 bg-white/30"></span>
<span className="w-0.5 h-8 bg-white/60"></span>
</div>
<button aria-label="Play" className="inline-flex h-7 w-7 items-center justify-center rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="play"></i>
</button>
</div>
</div>
<div className="mt-2 flex items-center gap-4 text-xs text-white/60">
<button className="inline-flex items-center gap-1 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 rounded"><i className="h-3.5 w-3.5" data-lucide="heart"></i> Like</button>
<button className="inline-flex items-center gap-1 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 rounded"><i className="h-3.5 w-3.5" data-lucide="message-circle"></i> Comment</button>
<button className="inline-flex items-center gap-1 hover:text-white/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50 rounded"><i className="h-3.5 w-3.5" data-lucide="share-2"></i> Share</button>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="zap"></i>
<h3 className="text-sm font-semibold tracking-tight">Connect accounts</h3>
</div>
<p className="text-sm text-white/60 mt-1">Sign in with a social account to personalize discovery.</p>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="mr-2 h-4 w-4 inline-block" data-lucide="github"></i> GitHub
                  </button>
<button className="flex-1 rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="mr-2 h-4 w-4 inline-block" data-lucide="mail"></i> Google
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10" id="timeline">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Your timeline</h2>
<p className="text-sm text-white/60 mt-1">A chronological journey of your concerts and festivals.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="download"></i> Export
              </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="calendar"></i> Year view
              </button>
</div>
</div>
<div className="mt-6">
<div className="relative">
<div className="overflow-x-auto">
<div className="flex gap-4 min-w-max">

<div aria-label="Open ODESZA: The Last Goodbye memories" className="w-72 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all cursor-pointer timeline-card focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" data-event-id="odesza-red-rocks" role="button" tabindex="0">
<img alt="ODESZA timeline cover" className="h-36 w-full object-cover timeline-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1444824775686-4185f172c44b?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50 timeline-date">Aug 12, 2025</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] ring-1 ring-white/10 timeline-venue">
<i className="h-3 w-3" data-lucide="map-pin"></i> Red Rocks
                        </span>
</div>
<h4 className="mt-1 text-sm font-semibold tracking-tight timeline-title">ODESZA: The Last Goodbye</h4>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center gap-1 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="image"></i> 18
                          <i className="h-3.5 w-3.5 ml-2" data-lucide="video"></i> 3
                        </div>
<button className="inline-flex items-center gap-1 text-xs rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="share-2"></i> Share
                        </button>
</div>
</div>
</div>
<div aria-label="Open Tame Impala: Live memories" className="w-72 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all cursor-pointer timeline-card focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" data-event-id="tame-impala-forum" role="button" tabindex="0">
<img alt="Tame Impala timeline cover" className="h-36 w-full object-cover timeline-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50 timeline-date">Jul 01, 2025</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] ring-1 ring-white/10 timeline-venue">
<i className="h-3 w-3" data-lucide="map-pin"></i> The Forum
                        </span>
</div>
<h4 className="mt-1 text-sm font-semibold tracking-tight timeline-title">Tame Impala: Live</h4>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center gap-1 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="image"></i> 26
                          <i className="h-3.5 w-3.5 ml-2" data-lucide="video"></i> 2
                        </div>
<button className="inline-flex items-center gap-1 text-xs rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="share-2"></i> Share
                        </button>
</div>
</div>
</div>
<div aria-label="Open Porter Robinson: Nurture memories" className="w-72 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all cursor-pointer timeline-card focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" data-event-id="porter-nurture-lolla" role="button" tabindex="0">
<img alt="Porter Robinson timeline cover" className="h-36 w-full object-cover timeline-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50 timeline-date">May 18, 2025</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] ring-1 ring-white/10 timeline-venue">
<i className="h-3 w-3" data-lucide="map-pin"></i> Lollapalooza
                        </span>
</div>
<h4 className="mt-1 text-sm font-semibold tracking-tight timeline-title">Porter Robinson: Nurture</h4>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center gap-1 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="image"></i> 12
                          <i className="h-3.5 w-3.5 ml-2" data-lucide="video"></i> 4
                        </div>
<button className="inline-flex items-center gap-1 text-xs rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="share-2"></i> Share
                        </button>
</div>
</div>
</div>
<div aria-label="Open Various Artists memories" className="w-72 shrink-0 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hover:ring-white/20 transition-all cursor-pointer timeline-card focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" data-event-id="coachella-2025" role="button" tabindex="0">
<img alt="Festival timeline cover" className="h-36 w-full object-cover timeline-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-white/50 timeline-date">Mar 02, 2025</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[10px] ring-1 ring-white/10 timeline-venue">
<i className="h-3 w-3" data-lucide="map-pin"></i> Coachella
                        </span>
</div>
<h4 className="mt-1 text-sm font-semibold tracking-tight timeline-title">Various Artists</h4>
<div className="mt-2 flex items-center justify-between">
<div className="inline-flex items-center gap-1 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="image"></i> 40
                          <i className="h-3.5 w-3.5 ml-2" data-lucide="video"></i> 7
                        </div>
<button className="inline-flex items-center gap-1 text-xs rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-3.5 w-3.5" data-lucide="share-2"></i> Share
                        </button>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10" id="vault">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Memory Vault</h2>
<p className="text-sm text-white/60 mt-1">Upload photos and videos to events or create new collections.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" id="newCollectionBtn">
<i className="h-4 w-4" data-lucide="folder-plus"></i>
                New collection
              </button>
</div>
</div>
<div className="mt-5 grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-5 space-y-4">

<div className="group relative rounded-xl bg-white/5 ring-1 ring-white/10 p-4 hover:bg-white/10 transition-colors" id="dropzone">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/70" data-lucide="upload"></i>
<h3 className="text-sm font-semibold tracking-tight">Upload to collection</h3>
</div>
<span className="text-[11px] text-white/50">Max 200MB per file</span>
</div>
<label className="mt-3 block rounded-lg border-2 border-dashed border-white/10 bg-white/5 p-5 text-center hover:border-white/20 cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-fuchsia-500/50" htmlFor="fileInput">
<div className="flex flex-col items-center gap-2">
<i className="h-6 w-6 text-white/70" data-lucide="cloud-upload"></i>
<p className="text-sm text-white/70">Drag &amp; drop files here or click to browse</p>
<p className="text-xs text-white/50">Photos and videos supported</p>
</div>
<input accept="image/*,video/*" className="sr-only" id="fileInput" multiple="" type="file"/>
</label>
<div className="mt-3 flex items-center gap-2">
<i className="h-3.5 w-3.5 text-white/50" data-lucide="info"></i>
<p className="text-xs text-white/50">Files are grouped by upload session for easy batch organization.</p>
</div>
</div>

<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="folders"></i>
<h3 className="text-sm font-semibold tracking-tight">Collections</h3>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-violet-400" data-lucide="folder"></i>
<div>
<p className="text-sm text-white/80">ODESZA — Red Rocks</p>
<p className="text-[11px] text-white/50">21 items • Aug 12, 2025</p>
</div>
</div>
<button aria-label="Open collection ODESZA — Red Rocks" className="inline-flex h-8 w-8 items-center justify-center rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="flex items-center justify-between rounded-lg bg-white/5 ring-1 ring-white/10 p-2 hover:bg-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-fuchsia-400" data-lucide="folder"></i>
<div>
<p className="text-sm text-white/80">Tame Impala — The Forum</p>
<p className="text-[11px] text-white/50">28 items • Jul 01, 2025</p>
</div>
</div>
<button aria-label="Open collection Tame Impala — The Forum" className="inline-flex h-8 w-8 items-center justify-center rounded bg-white/5 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="gallery-horizontal"></i>
<h3 className="text-sm font-semibold tracking-tight">Upload session</h3>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" id="clearUploads">
<i className="h-3.5 w-3.5" data-lucide="trash-2"></i> Clear
                  </button>
</div>
<div className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3" id="previewGrid">

<div className="col-span-full text-center py-10 text-sm text-white/50" id="emptyState">
<i className="h-5 w-5 mx-auto mb-2" data-lucide="images"></i>
<p>No files yet. Upload to see previews here.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10" id="handoff">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold">Design handoff</h2>
<p className="text-sm text-white/60 mt-1">Recreate this layout in a neatly organized design file and use the prompts below to generate front-end and back-end scaffolds.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500/50" data-copy-bundle="">
<i className="h-4 w-4" data-lucide="copy"></i> Copy all prompts
              </button>
</div>
</div>
<div className="mt-6 grid lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 space-y-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="file-box"></i>
<h3 className="text-sm font-semibold tracking-tight">Recommended file structure</h3>
</div>
<ul className="mt-3 text-sm text-white/70 space-y-2">
<li>
<span className="text-white/90">Pages</span>
<ul className="mt-1 pl-4 space-y-1 list-disc text-white/60">
<li>00 — Foundations (colors, text styles, spacing, radii, effects)</li>
<li>01 — Components (atoms, molecules, modules)</li>
<li>02 — Patterns (cards, lists, forms, navigation)</li>
<li>03 — Screens (Landing, Discover, Timeline, Vault)</li>
<li>04 — Prototypes (flows and interactions)</li>
</ul>
</li>
<li>
<span className="text-white/90">Text styles</span>
<ul className="mt-1 pl-4 space-y-1 list-disc text-white/60">
<li>Display/56, 48, 36 — weight Semibold, tracking-tight</li>
<li>Heading/28, 24 — weight Semibold, tracking-tight</li>
<li>Body/18, 16 — weight Medium/Regular</li>
<li>Subtext/14, 12 — weight Regular</li>
</ul>
</li>
<li>
<span className="text-white/90">Color styles</span>
<ul className="mt-1 pl-4 space-y-1 list-disc text-white/60">
<li>Background: #0A0A0A</li>
<li>Surface/Soft: rgba(255,255,255,0.05)</li>
<li>Surface/Strong: rgba(255,255,255,0.10)</li>
<li>Text/Primary: rgba(255,255,255,0.95)</li>
<li>Text/Secondary: rgba(255,255,255,0.70)</li>
<li>Text/Muted: rgba(255,255,255,0.60)</li>
<li>Accent/Violet 600: #7C3AED</li>
<li>Accent/Fuchsia 600: #C026D3</li>
<li>Success: #34D399</li>
<li>Danger: #F43F5E</li>
<li>Ring: rgba(255,255,255,0.10)</li>
</ul>
</li>
<li>
<span className="text-white/90">Layout grids</span>
<ul className="mt-1 pl-4 space-y-1 list-disc text-white/60">
<li>Desktop: 12 columns, content width 1280, gutter 24, margin 24</li>
<li>Tablet: 8 columns, gutter 20, margin 20</li>
<li>Mobile: 4 columns, gutter 16, margin 16</li>
</ul>
</li>
<li>
<span className="text-white/90">Effects</span>
<ul className="mt-1 pl-4 space-y-1 list-disc text-white/60">
<li>Focus ring: 2px, color fuchsia/50 over ring surface</li>
<li>Radii: md 8, lg 12, xl 16</li>
<li>Backdrop blur for glass surfaces where used</li>
</ul>
</li>
</ul>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="component"></i>
<h3 className="text-sm font-semibold tracking-tight">Component library</h3>
</div>
<ul className="mt-3 text-sm text-white/70 space-y-2">
<li>Button [variant: primary, secondary, subtle; size: sm, md; icon: left/right; state: default, hover, focus, disabled, loading]</li>
<li>Input/Textarea/Search [with left icon adornment, help text, error]</li>
<li>Navbar [desktop/mobile variants]</li>
<li>Badge [soft, outline; sizes xs/sm]</li>
<li>Card [base, media-top, interactive]</li>
<li>TimelineCard [props: date, venue, title, images, videos, cover]</li>
<li>EventCard [artist, date • venue, going count, city, CTA]</li>
<li>Dropzone [idle, drag-over, uploading]</li>
<li>CollectionItem [name, count, date, open]</li>
<li>FeedItem [avatar, meta, content, actions]</li>
<li>ChartModule [header, subtext, canvas holder]</li>
</ul>
</div>
</div>

<div className="lg:col-span-7 space-y-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white/60" data-lucide="braces"></i>
<h3 className="text-sm font-semibold tracking-tight">Design variables (copy-ready)</h3>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-white/70 ring-1 ring-white/10 hover:bg-white/10" data-copy-target="#varsJson">
<i className="h-3.5 w-3.5" data-lucide="copy"></i> Copy
                  </button>
</div>
<textarea className="mt-3 w-full h-52 bg-neutral-950/60 ring-1 ring-white/10 rounded-md p-3 text-xs text-white/80 font-mono leading-relaxed" id="varsJson" spellcheck="false">
{
  "font": {
    "family": "Inter",
    "weights": { "light": 300, "regular": 400, "medium": 500, "semibold": 600 },
    "sizes": { "xs": 12, "sm": 14, "base": 16, "lg": 18, "xl": 20, "2xl": 24, "3xl": 30, "4xl": 36, "5xl": 48 },
    "tracking": { "tight": -0.02, "tighter": -0.03 }
  },
  "color": {
    "background": "#0A0A0A",
    "surfaceSoft": "rgba(255,255,255,0.05)",
    "surfaceStrong": "rgba(255,255,255,0.10)",
    "textPrimary": "rgba(255,255,255,0.95)",
    "textSecondary": "rgba(255,255,255,0.70)",
    "textMuted": "rgba(255,255,255,0.60)",
    "violet600": "#7C3AED",
    "fuchsia600": "#C026D3",
    "emerald400": "#34D399",
    "rose500": "#F43F5E",
    "ring": "rgba(255,255,255,0.10)"
  },
  "radius": { "sm": 6, "md": 8, "lg": 12, "xl": 16 },
  "spacing": [0,2,4,6,8,10,12,16,20,24,32,40,48],
  "elevation": {
    "glass": { "backdropBlur": 20, "overlay": "rgba(255,255,255,0.04)" },
    "focus": { "width": 2, "color": "rgba(217, 70, 239, 0.5)" }
  },
  "grid": {
    "desktop": { "columns": 12, "contentWidth": 1280, "gutter": 24, "margin": 24 },
    "tablet": { "columns": 8, "gutter": 20, "margin": 20 },
    "mobile": { "columns": 4, "gutter": 16, "margin":</textarea></div></div></div></div></section></main>
    </>
  );
}
