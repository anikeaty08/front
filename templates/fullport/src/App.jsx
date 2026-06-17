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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full blur-[120px] opacity-[0.12]" style={{background: 'radial-gradient(closest-side, #7c3aed, transparent 70%)'}}></div>
<div className="absolute top-1/3 -right-24 w-[40vw] h-[40vw] rounded-full blur-[100px] opacity-[0.08]" style={{background: 'radial-gradient(closest-side, #22d3ee, transparent 70%)'}}></div>
</div>

<nav className="relative z-10 px-6 py-3 md:py-5">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<span className="group-hover:text-white transition-colors text-base font-medium tracking-tight font-geist-mono bg-gradient-to-br from-white/50 via-white/100 to-white/50 bg-clip-text text-transparent">fullport</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm" style={{display: 'flex', visibility: 'hidden'}}>
<a className="text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#features">Product</a>
<a className="text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#integrations">Integrations</a>
<a className="text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#security">Security</a>
<a className="text-zinc-400 hover:text-white transition-colors font-geist-mono" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-3" style={{display: 'none'}}>
<a className="text-sm px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors font-geist-mono" href="#waitlist">Join waitlist</a>
</div>
<button aria-label="Open menu" className="md:hidden p-2 rounded-md hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-white/10 transition">
<svg className="lucide lucide-menu text-white/80" data-lucide="menu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="z-10 px-6 relative">
<div className="-z-10 w-full h-full absolute top-0 left-0" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>

<div className="max-w-7xl mx-auto">

<div className="grid min-h-[68vh] md:min-h-[76vh] lg:min-h-[calc(100vh-96px)] md:pt-8 lg:py-6 pt-9 pb-10 items-start justify-center">
<div className="flex flex-col text-center items-center">
<h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.06] animate-in font-semibold tracking-tight opacity-95 max-w-5xl text-green-300 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]" style={{animationDelay: '0.06s', maskImage: 'linear-gradient(transparent, black 70%, black 95%, transparent)'}}>
            click less
          </h1>
<h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.06] animate-in font-semibold tracking-tight max-w-5xl text-red-300" style={{animationDelay: '0.06s', maskImage: 'linear-gradient(transparent, black 25%, black 60%, transparent)'}}>
            think more
          </h2>
<p className="animate-in bg-clip-text text-base italic text-transparent tracking-wide font-geist-mono bg-[conic-gradient(from_225deg,var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-slate-400 mix-blend-normal max-w-2xl mt-6" style={{animationDelay: '0.12s'}}>trade with intention</p>
<p className="animate-in bg-clip-text text-base italic text-transparent tracking-wide font-geist-mono bg-[conic-gradient(from_225deg,var(--tw-gradient-stops))] from-slate-400 via-slate-600 to-slate-400 mix-blend-normal max-w-2xl my-1" style={{animationDelay: '0.12s'}}>find your edge</p>

<form className="animate-in w-full max-w-2xl mt-4" id="waitlist" style={{animationDelay: '0.18s'}}>
<div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
<div className="relative flex-1 w-full">
<input className="placeholder-zinc-500 focus:ring-2 focus:ring-white/20 outline-none transition text-white bg-zinc-950/70 w-full h-12 border-green-100 border-2 ring-white/10 ring-1 rounded-md pr-4 pl-4 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]" placeholder="you@domain.com" required="" style={{WebkitMaskImage: 'linear-gradient(190deg, transparent, black 15%, black 80%, transparent)', maskImage: 'linear-gradient(190deg, transparent, black 15%, black 80%, transparent)'}} type="email"/>
<div className="pointer-events-none absolute inset-0 rounded-xl" style={{'--border-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.0), rgba(255,255,255,0.08), rgba(255,255,255,0.0))', '--border-radius-before': '12px'}}></div>
</div>
<button aria-label="Join waitlist" className="shiny-cta inline-flex gap-2 focus:outline-none group text-sm font-medium tracking-tight h-12 pr-5 pl-5 items-center" title="Join waitlist" type="submit">
<svg aria-hidden="true" className="lucide lucide-chart-line transition group-hover:text-white animate-pulse w-[20px] h-[20px]" data-lucide="chart-line" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<div className="flex min-w-[6.4em] h-5 relative items-center font-geist-mono">join waitlist</div>
</button>
</div>
<div className="text-xs text-zinc-500 mt-3 font-geist-mono">Early access opens soon.</div>
</form>

<div className="hidden w-full max-w-5xl mx-auto mt-16 relative animate-in" style={{animationDelay: '0.26s'}}>
<div className="overflow-hidden bg-zinc-900 rounded-2xl ring-1 ring-white/10 shadow-2xl"></div>
</div>
</div>
</div>
</div>
</header>

    </>
  );
}
