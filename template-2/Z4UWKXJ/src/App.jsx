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



// Trigger CSS transitions by toggling a data attribute
document.addEventListener('DOMContentLoaded', () => {
requestAnimationFrame(() => {
document.body.setAttribute('data-loaded', 'true');
});
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
      

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:22px_22px]"></div>
</div>

<main className="relative z-10 w-full">
<div className="mx-auto max-w-6xl px-6">

<header className="mb-10 md:mb-16">
<div className="mx-auto flex items-center justify-between rounded-xl border border-slate-800/80 bg-zinc-900/40 backdrop-blur-xl shadow-md px-4 py-3">

<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-zinc-800/80 border border-slate-800 flex items-center justify-center tracking-tight text-[13px] font-medium text-zinc-100">
<span style={{letterSpacing: `-0.02em`}}>GL</span>
</div>
<div className="hidden sm:block text-zinc-300 text-xs" style={{fontFamily: `'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`}}>
                Glass Interface
              </div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm" style={{fontFamily: `'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`}}>
<a className="text-zinc-300 hover:text-zinc-100 transition-colors">Products</a>
<a className="text-zinc-300 hover:text-zinc-100 transition-colors">Pricing</a>
<a className="text-zinc-300 hover:text-zinc-100 transition-colors">Docs</a>
<a className="text-zinc-300 hover:text-zinc-100 transition-colors">Contact</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-zinc-900/40 px-3 py-2 text-xs text-zinc-200 hover:text-zinc-100 hover:border-slate-700/80 hover:bg-zinc-900/60 transition-colors shadow-md">

<svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
                API
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-violet-500/90 px-3 py-2 text-xs text-zinc-50 hover:bg-violet-500 hover:border-violet-500/70 transition-colors shadow-md">
                Sign in
              </button>
</div>
</div>
</header>

<section className="relative mx-auto max-w-3xl">

<div className="rounded-2xl border border-slate-800 bg-zinc-900/40 backdrop-blur-2xl shadow-md px-6 py-8 sm:px-10 sm:py-12">

<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-zinc-900/40 px-3 py-1.5 shadow-md transition-all duration-1000 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0 opacity-0 translate-y-4 blur-sm">
<div className="h-1.5 w-1.5 rounded-full bg-violet-400 transition-colors duration-1000 data-[loaded=true]:bg-violet-500"></div>
<span className="text-[11px] tracking-wide text-zinc-300" style={{fontFamily: `'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`}}>Announcing v2.0</span>
</div>

<h1 className="text-[36px] leading-[1.15] sm:text-[40px] sm:leading-[1.1] tracking-wide text-zinc-100 mb-4 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0 opacity-0 translate-y-4 blur-sm" style={{fontFamily: `'PT Serif', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`, fontWeight: `500`}}>
              Design the future with a glass-first interface
            </h1>

<p className="text-xl sm:text-2xl leading-snug text-zinc-300 mb-5 transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0 opacity-0 translate-y-4 blur-sm" style={{fontFamily: `'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`, fontWeight: `500`}}>
              A refined, responsive foundation built for clarity, speed, and focus—wrapped in a modern glass aesthetic.
            </p>
<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-5"></div>

<p className="text-xs sm:text-sm leading-relaxed text-zinc-400 mb-7 max-w-2xl transition-all duration-1000 delay-400 ease-[cubic-bezier(0.16,1,0.3,1)] data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0 opacity-0 translate-y-4 blur-sm" style={{fontFamily: `'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`}}>
              Crafted for creators and teams who value precision. Built-in accessibility, sensible defaults, and a crisp dark theme make every interaction feel effortless.
            </p>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 transition-all duration-1000 delay-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0 data-[loaded=true]:blur-0 opacity-0 translate-y-4 blur-sm">
<button className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-violet-500/90 px-5 py-3 text-sm text-zinc-50 shadow-md hover:bg-violet-500 hover:border-violet-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 transition-all">
                Get started
                
<svg className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-zinc-900/50 px-5 py-3 text-sm text-zinc-200 hover:text-zinc-100 hover:border-slate-700/80 hover:bg-zinc-900/70 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500/30 transition-all">

<svg className="h-4.5 w-4.5 text-violet-400 transition-colors duration-1000 data-[loaded=true]:text-violet-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v2"></path>
<path d="M5.2 5.2l1.4 1.4"></path>
<path d="M3 12h2"></path>
<path d="M5.2 18.8l1.4-1.4"></path>
<path d="M12 19v2"></path>
<path d="M17.4 17.4l1.4 1.4"></path>
<path d="M19 12h2"></path>
<path d="M17.4 6.6l1.4-1.4"></path>
<path d="M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
</svg>
                Live demo
              </button>
</div>
</div>

<div className="pointer-events-none absolute -inset-x-6 -top-6 sm:-inset-x-10 sm:-top-8">
<div className="mx-auto h-16 w-[80%] rounded-full bg-gradient-to-b from-white/8 to-transparent blur-xl"></div>
</div>
</section>

<div className="mx-auto mt-10 flex items-center justify-center gap-3 text-[11px] text-zinc-500">
<span className="h-px w-6 bg-slate-800"></span>
<span style={{fontFamily: `'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'`}}>Built with a glass aesthetic, violet accents, and spring-like transitions</span>
<span className="h-px w-6 bg-slate-800"></span>
</div>
</div>
</main>

    </>
  );
}
