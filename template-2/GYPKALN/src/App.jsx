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
      
<div className="min-h-screen">

<header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/50" style={{backgroundColor: `rgba(251,250,249,0.55)`, backdropFilter: `saturate(140%) blur(10px)`}}>
<div className="mx-auto max-w-3xl lg:max-w-4xl px-6">
<div className="flex items-center justify-between py-4">
<a className="inline-flex items-center space-x-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md" href="#" style={{textDecoration: `none`, color: `var(--ink)`, outlineColor: `var(--glacier-400)`}}>
<span className="inline-flex items-center justify-center rounded-md" style={{width: `24px`, height: `24px`, border: `1px solid var(--mist-100)`, backgroundColor: `#fff`}}>
<span className="text-[11px] leading-none tracking-tight" style={{fontWeight: `600`, color: `var(--glacier-700)`}}>MN</span>
</span>
<span className="sr-only">Minimalist Notion-Vibe Blog</span>
</a>
<nav aria-label="Primary" className="flex items-center gap-6">
<a className="text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors" href="#about" style={{color: `var(--ink)`, textDecorationColor: `rgba(16,20,24,0.25)`, outlineColor: `var(--glacier-400)`}}>About</a>
<a className="text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors" href="#posts" style={{color: `var(--ink)`, textDecorationColor: `rgba(16,20,24,0.25)`, outlineColor: `var(--glacier-400)`}}>Posts</a>
<a className="text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors" href="#photography" style={{color: `var(--ink)`, textDecorationColor: `rgba(16,20,24,0.25)`, outlineColor: `var(--glacier-400)`}}>Photography</a>
<a className="text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-sm transition-colors" href="#artwork" style={{color: `var(--ink)`, textDecorationColor: `rgba(16,20,24,0.25)`, outlineColor: `var(--glacier-400)`}}>Artwork</a>
</nav>
</div>
</div>
<div className="border-t" style={{borderColor: `var(--mist-100)`}}></div>
</header>
<main>

<section className="relative">

<div className="absolute inset-0 -z-10 overflow-hidden">
<div className="pointer-events-none absolute left-1/2 top-[-180px] h-[520px] w-[760px] -translate-x-1/2 rounded-full blur-3xl" style={{background: `radial-gradient(60% 60% at 50% 50%, rgba(126,185,240,0.10), transparent 65%),
              radial-gradient(40% 40% at 65% 35%, rgba(168,224,214,0.10), transparent 70%),
              radial-gradient(35% 35% at 30% 65%, rgba(214,207,242,0.10), transparent 70%),
              radial-gradient(55% 55% at 40% 20%, rgba(251,224,138,0.18), transparent 75%)`}}></div>
<div className="pointer-events-none absolute inset-0" style={{backgroundImage: `linear-gradient(to right, rgba(16,20,24,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,20,24,0.03) 1px, transparent 1px)`, backgroundSize: `28px 28px`}}></div>
</div>
<div className="mx-auto max-w-3xl lg:max-w-4xl px-6">
<div className="pt-16 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 relative">

<div className="hidden md:block absolute right-0 lg:right-2 top-2" style={{animation: `blurReveal .7s ease-out .05s both`}}>
<div className="rounded-lg border backdrop-blur" style={{borderColor: `var(--mist-100)`, backgroundColor: `rgba(255,255,255,0.6)`, boxShadow: `0 12px 50px rgba(16,20,24,0.06)`, backdropFilter: `blur(10px) saturate(120%)`}}>
<div className="px-3 py-2.5 flex items-center gap-2">
<svg fill="none" height="18" style={{stroke: `var(--glacier-700)`, strokeWidth: `1.5`}} viewBox="0 0 24 24" width="18">
<path d="M12 3v2"></path>
<path d="M5.22 5.22 6.64 6.64"></path>
<path d="M3 12h2"></path>
<path d="M5.22 18.78 6.64 17.36"></path>
<path d="M12 19v2"></path>
<path d="M18.78 18.78 17.36 17.36"></path>
<path d="M21 12h-2"></path>
<path d="M18.78 5.22 17.36 6.64"></path>
<path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
</svg>
<div className="flex items-center gap-2">
<span className="text-[11px] tracking-tight rounded px-1.5 py-0.5" style={{fontWeight: `600`, color: `#8a6b00`, backgroundColor: `rgba(255, 243, 196, 0.6)`, border: `1px solid rgba(255, 243, 196, 0.9)`}}>Now</span>
<span className="text-xs" style={{color: `var(--ink-70)`}}>Sketching a tiny tool</span>
</div>
</div>
</div>
</div>

<h1 className="tracking-tight reveal" style={{fontFamily: `'Playfair Display', Georgia, serif`, fontWeight: `700`, fontSize: `64px`, lineHeight: `1.05`, color: `var(--glacier-900)`, animation: `maskReveal 0.8s ease-out both`}}>
                Writing, notes, and ideas about building
                <span style={{backgroundImage: `linear-gradient(180deg, rgba(255,247,214,0) 62%, rgba(255,247,214,0.85) 62%)`, backgroundSize: `100% 100%`, backgroundRepeat: `no-repeat`, boxDecorationBreak: `clone`, padding: `0 6px`, borderRadius: `6px`}}>calm software</span>.
              </h1>

<p className="mt-5 max-w-3xl fade-up" style={{fontSize: `16px`, lineHeight: `26px`, color: `var(--ink-70)`, animation: `fadeUp .7s ease-out .15s both`}}>
                A minimalist space for thoughtful essays, book notes, and experiments in digital craftsmanship. No ads, no noise—just clear thinking and the occasional rabbit hole.
              </p>

<div className="mt-8 flex flex-wrap items-center gap-3 fade-up" style={{animation: `fadeUp .7s ease-out .25s both`}}>
<a className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:opacity-90" href="#posts" style={{backgroundColor: `var(--glacier-500)`, color: `var(--paper)`, outlineColor: `var(--glacier-400)`, boxShadow: `0 8px 26px rgba(76,160,234,0.28)`}}>
                  Read the posts
                </a>
<a className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm tracking-tight transition-colors border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white" href="#about" style={{borderColor: `var(--mist-100)`, color: `var(--ink)`, backgroundColor: `rgba(255,247,214,0.4)`, outlineColor: `var(--glacier-400)`}}>
                  About me
                </a>
</div>

<div className="mt-5 fade-up" style={{animation: `fadeUp .7s ease-out .35s both`}}>
<p className="inline-flex items-center gap-2 text-xs rounded-full px-2.5 py-1 border" style={{color: `var(--ink-60)`, borderColor: `var(--mist-100)`, backgroundColor: `rgba(255,255,255,0.6)`, backdropFilter: `blur(6px) saturate(120%)`}}>
<span className="inline-block h-1.5 w-1.5 rounded-full" style={{backgroundColor: `var(--sun-400)`}}></span>
                  Currently reading: The Design of Everyday Things
                </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl lg:max-w-4xl px-6">
<div className="border-t" style={{borderColor: `var(--mist-100)`}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 sm:py-14">
<div className="flex items-start gap-3 fade-up" style={{animation: `fadeUp .7s ease-out .10s both`}}>
<svg className="shrink-0" fill="none" height="24" style={{stroke: `var(--glacier-700)`, strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24">
<path d="M20.24 12.24a6 6 0 0 0-8.48-8.48L4 11.5V20h8.5l7.74-7.76Z"></path>
<path d="M16 8 2 22"></path>
</svg>
<div>
<h3 className="text-base tracking-tight" style={{fontFamily: `'Inter', system-ui, sans-serif`, fontWeight: `600`, color: `var(--ink)`}}>Essays, not hot takes</h3>
<p className="mt-1 text-sm" style={{color: `var(--ink-70)`, lineHeight: `1.7`}}>Long-form posts focused on clarity and timelessness over trends.</p>
</div>
</div>
<div className="flex items-start gap-3 fade-up" style={{animation: `fadeUp .7s ease-out .18s both`}}>
</div></div></section></main></div>
    </>
  );
}
