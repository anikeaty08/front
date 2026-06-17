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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-150" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="vi5SxDwDvEJMwkyTdyH8"></div>
</div>

<nav className="fixed z-50 top-0 right-0 left-0 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate" style={{}}>
<div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(100%-1rem,1100px)] pointer-events-none" style={{}}>
<div className="relative pointer-events-auto rounded-full pr-2 pl-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 border ring-white/15 border-white/15 bg-white/20 dark:bg-neutral-900/70 backdrop-blur-2xl supports-[backdrop-filter]:backdrop-blur-2xl backdrop-saturate-150 dark:backdrop-brightness-90">

<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full bg-white/25 dark:bg-neutral-900/75"></span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style="mask-image: radial-gradient(140% 140% at 50% -20%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 35%, transparent 65%);
               -webkit-mask-image: radial-gradient(140% 140% at 50% -20%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 35%, transparent 65%);"></span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-[0.06]" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22&gt', backgroundSize: '300px 300px'}}></span>

<span className="pointer-events-none absolute inset-0 rounded-full opacity-35" style="mask-image: radial-gradient(120% 120% at 50% -20%, rgba(255,255,255,0.9), transparent 58%);
               -webkit-mask-image: radial-gradient(120% 120% at 50% -20%, rgba(255,255,255,0.9), transparent 58%);"></span>

<div className="relative">
<div className="flex h-14 items-center justify-between">

<div className="flex items-center gap-8">

<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[60px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d1adc6d1-e4ea-4a81-81fe-345648b46b63_800w.png)] bg-cover rounded invert" href="#"></a>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-zinc-300 hover:text-white transition font-geist" href="#features">Features</a>
<a className="text-zinc-300 hover:text-white transition font-geist" href="#pricing">Pricing</a>
<a className="text-zinc-300 hover:text-white transition font-geist" href="#testimonials">Testimonials</a>
</nav>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex group relative items-center justify-center min-w-[120px] px-5 py-2.5 text-sm font-semibold tracking-tight cursor-pointer overflow-hidden rounded-full border border-white/15 bg-white/10 text-neutral-100 transition-all duration-[900ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] hover:text-white">
<span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0 font-geist">Sign In</span>
<span className="absolute inset-0 z-10 flex items-center justify-center font-medium opacity-0 transition-all duration-500 ease-out translate-y-full group-hover:translate-y-0 group-hover:opacity-100 font-geist">Sign In</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70 blur-[2px]"></span>
<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
</button>
<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 border border-white/20 text-zinc-100 hover:bg-white/20">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-24 pr-4 pb-0 pl-4 relative items-center justify-center">

<div className="w-full max-w-7xl z-10 mx-auto relative top-24" style={{}}>

<div className="text-center max-w-4xl mr-auto ml-auto" style={{}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] font-geist">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Ship 10x faster with AI-powered code generation
          </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-zinc-100 mb-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] font-geist font-light tracking-tighter" style={{}}>
            Transform designs into
            <br/>
            production-ready code
          </h1>
<p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] font-geist">
            Convert Figma, Sketch, and Adobe XD designs into clean, responsive
            code instantly. Built for developers who ship fast.
          </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 gap-x-4 gap-y-4 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both]">

<button aria-label="Generate My Code" className="group relative inline-flex min-w-[180px] h-[48px] cursor-pointer overflow-hidden rounded-full text-base font-medium text-white items-center justify-center pt-3 pb-3 px-6 transition-transform duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[inset_0_2px_8px_rgba(255,255,255,0.25),_inset_0_-3px_8px_rgba(0,0,0,0.35),_0_4px_10px_rgba(0,0,0,0.4)]" style={{background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #2563eb)', backfaceVisibility: 'hidden', transform: 'translateZ(0)'}} title="Generate My Code" type="button">

<span aria-hidden="true" className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-[20px]"></span>

<span className="sr-only font-geist">Generate My Code</span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-transform duration-500 ease-out group-hover:translate-y-8">
<span className="block font-geist">Generate My Code</span>
</span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-all duration-500 ease-out -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
<span className="block font-geist">Generate My Code</span>
</span>
</button>

<button className="group relative inline-flex min-w-[180px] h-[48px] cursor-pointer overflow-hidden rounded-full items-center justify-center px-6 py-3 text-base font-medium tracking-tight border border-white/15 bg-white/5 text-neutral-300 transition-transform duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white" style={{backfaceVisibility: 'hidden', transform: 'translateZ(0)'}}>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70 blur-[2px]"></span>

<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
<span className="sr-only font-geist">Watch Demo</span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-transform duration-500 ease-out group-hover:translate-y-8">
<span className="block font-geist">Watch Demo</span>
</span>

<span aria-hidden="true" className="pointer-events-none absolute inset-0 grid place-items-center will-change-transform transition-all duration-500 ease-out -translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
<span className="block font-geist">Watch Demo</span>
</span>
</button>
</div>
</div>

<div className="[animation:fadeSlideIn_0.9s_ease-out_0.5s_both] sm:px-6 lg:overflow-visible lg:pb-0 lg:pl-8 lg:pr-8 mt-24 mb-24 pr-8 pb-0 pl-8" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 30%, transparent)'}}>
<div className="sm:p-3 bg-neutral-950 border-neutral-800 border rounded-3xl ring-0 pt-2 pr-2 pb-2 pl-2 relative">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 relative gap-x-3 gap-y-3">

<aside className="lg:col-span-3 flex flex-col bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="text-white text-sm font-medium tracking-tight font-geist">
                      DesignFlow
                    </span>
</div>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-neutral-800 transition text-neutral-300 ring-1 ring-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 6h16"></path>
<path d="M4 18h16"></path>
</svg>
</button>
</div>
<div className="mt-4 flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 object-cover ring-neutral-700 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/57ff8f09-a1ef-4c2d-a129-c6e65a08af58_320w.jpg"/>
<div className="">
<p className="text-white text-sm font-medium tracking-tight font-geist">
              Alex Chen
            </p>
<p className="text-neutral-400 text-xs font-geist">Lead Developer</p>
</div>
</div>
<div className="mt-4">
<div className="flex items-center gap-2 bg-neutral-900 ring-1 ring-neutral-800 rounded-xl px-3 py-2">
<svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="w-full bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" placeholder="Search designs..." type="text"/>
</div>
</div>
<div className="mt-6">
<p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-geist">
            Navigation
          </p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition font-geist" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
              Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-100 bg-neutral-800 ring-1 ring-neutral-700 font-geist" href="#">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
              Code Generator
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition font-geist" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2 2 7l10 5 10-5z"></path>
<path d="m2 17 10 5 10-5"></path>
<path d="m2 12 10 5 10-5"></path>
</svg>
              Components
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-neutral-300 hover:bg-neutral-800 transition font-geist" href="#">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z">
</path>
</svg>
              Integrations
            </a>
</nav>
</div>
<div className="mt-6">
<p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-2 font-geist">
            Recent Projects
          </p>
<ul className="space-y-1 text-sm">
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
              E-commerce dashboard redesign
            </li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
              SaaS landing page template
            </li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
              Mobile app UI conversion
            </li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
              Design system components
            </li>
<li className="px-3 py-2 rounded-lg text-neutral-300 hover:bg-neutral-800 transition font-geist">
              React component library
            </li>
</ul>
</div>
<div className="mt-auto pt-4">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4">
<div className="absolute inset-x-0 -top-6 h-14 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
<p className="text-sm text-white font-medium tracking-tight font-geist">
              Upgrade to Pro
            </p>
<p className="text-xs text-neutral-400 mt-1 font-geist">
              Unlock advanced features and ship 10x faster
            </p>
<div className="flex items-center gap-2 mt-3">
<img alt="" className="w-6 h-6 object-cover ring-neutral-700 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fa45d691-5e28-4ddb-8f86-2fe1444c0306_320w.jpg"/>
<img alt="" className="w-6 h-6 object-cover ring-neutral-700 ring-1 rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/548251c7-a97a-4c25-8e2d-79f4498b49e0_320w.jpg"/>
<img alt="" className="ring-1 ring-neutral-700 w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1798060b-f297-4981-a4f3-745854800fb8_320w.jpg"/>
<button className="ml-auto inline-flex items-center gap-2 text-xs text-white bg-blue-500 hover:bg-blue-400 transition rounded-full px-3 py-1.5 ring-1 ring-blue-400 font-geist">
                        Upgrade now
                      </button>
</div>
</div>
</div>
</aside>

<main className="lg:col-span-6 bg-neutral-900/60 ring-1 ring-neutral-800 rounded-2xl p-4 sm:p-6 relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute left-10 top-8 w-1 h-1 rounded-full bg-white/20"></div>
<div className="absolute left-1/3 top-14 w-1 h-1 rounded-full bg-white/30"></div>
<div className="absolute right-16 top-10 w-1 h-1 rounded-full bg-white/20"></div>
<div className="absolute right-1/4 top-1/3 w-1 h-1 rounded-full bg-white/30"></div>
<div className="absolute left-1/4 bottom-12 w-1 h-1 rounded-full bg-white/20"></div>
</div>
<header className="flex items-start justify-between">
<div className="">
<h2 className="text-xl sm:text-2xl text-white font-geist font-light tracking-tighter" style={{}}>
              AI Code Generator
            </h2>
<p className="text-sm text-neutral-400 mt-1 font-geist">
              Transform your design files into production-ready code
              instantly
            </p>
</div>
<div className="inline-flex items-center gap-2">
<button className="w-8 h-8 rounded-lg ring-1 ring-neutral-800 hover:bg-neutral-800 text-neutral-300 inline-flex items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</header>
<div className="mt-4 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 ring-1 ring-neutral-800 p-4 sm:p-6 relative">
<div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 pointer-events-none"></div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-300 bg-neutral-800/70 rounded-full px-3 py-1 ring-1 ring-neutral-700 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Design Input
            </span>
<div className="inline-flex items-center gap-2">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-full ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-8 h-8 inline-flex items-center justify-center rounded-full ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

<div className="max-w-xl mt-4 mb-6 ml-auto">
<div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3 font-geist" style={{}}>
              Convert this Figma dashboard design into a responsive
              React component with Tailwind CSS. Include proper
              component structure, state management, and ensure it's
              mobile-first with clean, maintainable code.
            </div>
</div>

<div className="w-full mx-auto">
<div className="grid grid-cols-1 items-stretch justify-stretch">
<div className="relative z-10 group">

<div className="w-full h-full min-h-[280px] rounded-2xl overflow-hidden bg-zinc-900/60 backdrop-blur ring-1 ring-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">

<div className="p-5 h-full flex flex-col">

<div className="flex items-center justify-between mb-4">
<span className="text-sm text-white font-medium tracking-tight font-geist">
                                Dashboard.tsx
                              </span>
<span className="inline-flex items-center gap-1 text-[10px] text-blue-200 bg-blue-900/40 rounded-full px-2 py-0.5 ring-1 ring-blue-600 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      Active
                      </span>
</div>

<div className="flex-1 bg-zinc-950/80 rounded-xl p-4 font-mono text-xs space-y-1.5 overflow-auto ring-1 ring-white/5">
<div className="text-rose-300 font-geist">
                        export default function Dashboard() {'{'}
                      </div>
<div className="text-emerald-300 pl-4 font-geist">
                        const [data, setData] = useState([]);
                      </div>
<div className="text-sky-300 pl-4 font-geist">
                        useEffect(() =&gt; {'{'}
                      </div>
<div className="text-amber-200 pl-8 font-geist">
                        fetchData();
                      </div>
<div className="text-sky-300 pl-4 font-geist">{'}'}, []);</div>
<div className="text-violet-300 pl-4 font-geist">return (</div>
<div className="text-zinc-400 pl-8 font-geist">
                        &lt;Layout&gt;
                      </div>
<div className="text-zinc-400 pl-12 font-geist">
                        &lt;Grid data={data} /&gt;
                      </div>
<div className="text-zinc-400 pl-8 font-geist">
                        &lt;/Layout&gt;
                      </div>
<div className="text-violet-300 pl-4 font-geist">);</div>
<div className="text-rose-300 font-geist">{'}'}</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 max-w-xl">
<div className="rounded-2xl bg-neutral-800/80 ring-1 ring-neutral-700 text-sm text-neutral-200 px-4 py-3 font-geist">
              Perfect! I've generated production-ready React components
              with Tailwind CSS. The code includes responsive
              breakpoints, proper TypeScript types, and follows best
              practices. Ready to copy and use immediately.
            </div>
</div>

<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-2 text-xs text-blue-300 bg-blue-900/30 rounded-full px-3 py-1 ring-1 ring-blue-700 font-geist">
                      React + TypeScript
                      <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m20 6-11 11-5-5"></path>
</svg>
</span>
<span className="inline-flex items-center gap-2 text-xs text-blue-300 bg-blue-900/30 rounded-full px-3 py-1 ring-1 ring-blue-700 font-geist">
                      Tailwind CSS
                      <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="14" x="3" y="3"></rect>
<path d="M7 7h6"></path>
<path d="M7 11h6"></path>
</svg>
</span>
</div>
</div>

<div className="mt-4 flex items-end gap-3">
<div className="flex-1 rounded-2xl bg-neutral-900 ring-1 ring-neutral-800 px-3 py-2">
<div className="flex items-center gap-2">
<button className="inline-flex hover:text-blue-400 transition text-neutral-400 w-8 h-8 items-center justify-center">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
</button>
<input className="flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500" placeholder="Upload your design file or paste URL..." type="text"/>
</div>
</div>
<button className="w-12 h-12 rounded-2xl bg-blue-500 hover:bg-blue-400 transition ring-1 ring-blue-400 inline-flex items-center justify-center">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path>
</svg>
</button>
</div>
<p className="mt-2 text-[11px] text-neutral-500 font-geist">
          DesignFlow generates clean, production-ready code. Your
          designs are processed securely and never stored.
        </p>
</main>

<aside className="lg:col-span-3 flex flex-col bg-neutral-900/60 ring-neutral-800 ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-xs text-blue-200 bg-blue-900/40 rounded-full px-3 py-1 ring-1 ring-blue-700 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          DesignFlow Pro
          </span>
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg ring-1 ring-neutral-800 text-neutral-300 hover:bg-neutral-800">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="M3 12h18"></path>
</svg>
</button>
</div>
<div className="mt-4 flex items-center gap-6">
<button className="relative text-sm text-white">
<span className="font-geist">EXPORTS</span>
<span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white rounded-full"></span>
</button>
<button className="text-sm text-neutral-500 font-geist">SETTINGS</button>
</div>
<div className="mt-6">
<div className="flex items-center gap-2 mb-2">
<p className="text-sm text-neutral-300 font-medium tracking-tight font-geist">
              Active Conversions
            </p>
<span className="inline-flex items-center text-[11px] text-black bg-blue-400 rounded-full px-2 py-0.5 ring-1 ring-blue-300 font-geist">
                      Live
                    </span>
</div>
<div className="space-y-2">

<label className="flex items-start gap-3 p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer">
<span className="relative w-4 h-4 rounded-md ring-1 ring-neutral-700 bg-neutral-900"></span>
<div className="flex-1">
<p className="text-sm text-neutral-200 font-geist">
                          Landing page components
                        </p>
</div>
</label>

<div className="p-3 rounded-xl ring-1 ring-blue-700 bg-blue-900/20">
<label className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="relative w-4 h-4 rounded-md ring-1 ring-blue-600 bg-blue-500/20">
<span className="absolute inset-0.5 rounded-[3px] bg-blue-400"></span>
</span>
<p className="text-sm text-neutral-200 font-geist">
                            Dashboard UI Kit
                          </p>
</div>
<svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</label>
<ul className="mt-3 space-y-2 text-sm text-neutral-400 pl-7 list-disc">
<li className="font-geist">React components with hooks</li>
<li className="font-geist">Responsive Tailwind styles</li>
</ul>
</div>

<label className="flex items-start gap-3 p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer">
<span className="relative w-4 h-4 rounded-md ring-1 ring-neutral-700 bg-neutral-900"></span>
<div className="flex-1">
<p className="text-sm text-neutral-200 font-geist">
                          Mobile app screens
                        </p>
</div>
</label>
</div>
</div>
<div className="mt-6">
<p className="text-sm text-neutral-300 font-medium tracking-tight font-geist">
            Export Formats
          </p>
<div className="mt-3 space-y-3">

<div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
<div className="">
<p className="text-sm text-neutral-200 font-geist">
                    React + TypeScript
                  </p>
<p className="text-xs text-neutral-500 font-geist">
                    Modern component library
                  </p>
</div>
</div>
<div className="relative w-10 h-6 rounded-full bg-blue-900/30 ring-1 ring-blue-600">
<span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-blue-400"></span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="m12 1 2.35 2.35L17 1h5v5l-2.35 2.35L22 11v2l-2.35 2.35L22 18v5h-5l-2.35-2.35L12 23l-2.35-2.35L7 23H2v-5l2.35-2.35L2 13v-2l2.35-2.35L2 6V1h5l2.35 2.35z">
</path>
</svg>
<div className="">
<p className="text-sm text-neutral-200 font-geist">
                    Vue 3 Composition API
                  </p>
<p className="text-xs text-neutral-500 font-geist">
                    Script setup syntax
                  </p>
</div>
</div>
<div className="relative w-10 h-6 rounded-full bg-blue-900/30 ring-1 ring-blue-600">
<span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-blue-400"></span>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl ring-1 ring-neutral-800 bg-neutral-900">
<div className="flex items-center gap-3">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14,2 14,8 20,8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10,9 9,9 8,9"></polyline>
</svg>
<div className="">
<p className="text-sm text-neutral-200 font-geist">
                    HTML + Tailwind
                  </p>
<p className="text-xs text-neutral-500 font-geist">
                    Vanilla JavaScript included
                  </p>
</div>
</div>
<div className="relative w-10 h-6 rounded-full bg-neutral-800 ring-1 ring-neutral-700">
<span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-neutral-500"></span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 animate-on-scroll" id="features">
<div className="border-gradient sm:p-8 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-12 relative [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 gap-x-6 gap-y-6 items-start">

<div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/[0.03]">
<span className="text-[11px] font-medium tracking-widest text-zinc-300 font-geist">
                  01
                </span>
<span className="h-3 w-px bg-white/10"></span>
<span className="text-[11px] tracking-wide text-zinc-400 font-geist">
                  Features
                </span>
</span>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter" style={{}}>
                Powerful features,
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter" style={{}}>
                  simple workflow
                </span>
</h2>
<p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl font-geist">
                DesignFlow turns ideas into production-ready UI — generate,
                tweak, and ship with a clean developer experience that stays out
                of your way.
              </p>
</div>

<div className="lg:col-span-3 lg:justify-end flex flex-col sm:flex-row gap-2 sm:items-center">

<button className="group inline-flex min-w-[180px] cursor-pointer overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white text-base font-medium text-neutral-300 tracking-tight bg-white/5 h-[48px] border-white/15 border rounded-full pt-3 pr-6 pb-3 pl-6 relative items-center justify-center">

<span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                  Get Started
                </span>

<span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 absolute top-0 right-0 bottom-0 left-0 font-geist">
                  Try For Free
                </span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-[1000ms] opacity-70 blur-[2px]"></span>

<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
</button>

</div>
</div>

</div>
<section className="sm:px-6 lg:pl-0 lg:pr-0 max-w-7xl mx-auto pr-0 pl-0 relative">


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4" data-animate-children="true">

<div className="lg:col-span-2 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn bg-neutral-900/60 ring-white/10 ring-1 rounded-2xl relative backdrop-blur [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll" style={{}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl shimmer" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.06), 0 40px 120px rgba(37,99,235,0.18)'}}></div>
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-2">
<h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter" style={{}}>
                    Component Generator
                  </h3>
</div>
<p className="text-sm text-neutral-400 mt-1 font-geist">
                  Create production-ready UI components from prompts or designs.
                </p>

<div className="mt-4 relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-zinc-950/80 animate-fadeSlideIn" style={{animationDelay: '.08s'}}>

<div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
<span className="inline-flex items-center gap-2 text-[11px] text-blue-200 bg-blue-900/30 rounded-full px-3 py-0.5 ring-1 ring-blue-700 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-breathe"></span>
                      Active
                      <span className="typing-dots">
<i></i>
<i></i>
<i></i>
</span>
</span>
<span className="text-[11px] text-neutral-400 font-geist">DF-Gen v3</span>
</div>

<div className="px-4 py-3 space-y-2 max-h-48 overflow-auto">

<div className="flex items-start gap-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc36a88f-5106-416e-82ac-ea0cd24cf358_320w.webp)] bg-cover ring-white/10 ring-1 rounded-full animate-floatSlow" style={{animationDuration: '7s'}}></div>
<div className="max-w-[80%] rounded-xl bg-neutral-900 ring-1 ring-white/10 px-3 py-1.5 text-xs text-neutral-200 animate-fadeSlideIn font-geist" style={{animationDelay: '.12s'}}>
                        Describe a component + props. I’ll return typed code.
                      </div>
</div>

<div className="flex justify-end">
<div className="max-w-[80%] rounded-xl px-3 py-1.5 text-xs text-white ring-1 ring-blue-400 shadow-[0_6px_18px_rgba(59,130,246,0.35)] animate-glowPulse font-geist" style={{background: 'linear-gradient(45deg,#06b6d4,#3b82f6,#2563eb)'}}>
                        PricingCard with title, price, features[], CTA
                      </div>
</div>

<div className="flex items-start gap-2">
<div className="w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc36a88f-5106-416e-82ac-ea0cd24cf358_320w.webp)] bg-cover ring-white/10 ring-1 rounded-full animate-floatSlow" style={{animationDuration: '7s', animationDelay: '.1s'}}></div>
<div className="max-w-[80%] rounded-xl bg-neutral-900 ring-1 ring-white/10 overflow-hidden animate-fadeSlideIn" style={{animationDelay: '.16s'}}>
<div className="px-3 py-1.5 border-b border-white/5 text-[11px] text-neutral-400 caret font-geist">
                          Preview • PricingCard.tsx
                        </div>
<pre className="px-3 py-2 font-mono text-[11px] leading-5 text-neutral-300 whitespace-pre-wrap font-geist">&lt;PricingCard title="Pro" price="$29/mo" features={[...]} /&gt;</pre>
</div>
</div>
</div>

<div className="px-4 py-2.5 border-t border-white/5 flex items-center gap-2">
<div className="flex-1 flex items-center gap-2 bg-neutral-900 rounded-full ring-1 ring-white/10 px-3 py-1.5 text-xs text-neutral-400">
<svg className="w-3.5 h-3.5 animate-tilt" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
<input className="bg-transparent outline-none flex-1 placeholder-neutral-500 text-neutral-300" placeholder="Type your prompt…"/>
</div>
<button className="px-3 py-1.5 text-xs rounded-full text-white ring-1 ring-blue-400 shadow-[0_6px_18px_rgba(59,130,246,0.35)] animate-glowPulse font-geist" style={{background: 'linear-gradient(45deg,#06b6d4,#3b82f6,#2563eb)'}}>
                      Generate
                    </button>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll" style={{animationDelay: '.05s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl shimmer" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 24px 70px rgba(37,99,235,0.12)'}}></div>
<div className="p-4 sm:p-5">
<div className="flex items-center justify-between">
<h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter" style={{}}>
                    Code Optimizer
                  </h3>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full ring-1 ring-blue-500/40 bg-blue-500/10 text-blue-200 animate-breathe font-geist">
                    ⚡ +32%
                  </span>
</div>
<p className="text-sm text-neutral-400 mt-1 font-geist">
                  Refactor to cleaner, faster code.
                </p>
<div className="mt-4 rounded-xl overflow-hidden ring-1 ring-white/10 bg-zinc-950/80">
<div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-900/70">
<span className="w-2 h-2 rounded-full bg-rose-500/80 animate-breathe"></span>
<span className="w-2 h-2 rounded-full bg-amber-400/80 animate-breathe" style={{animationDelay: '.1s'}}></span>
<span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-breathe" style={{animationDelay: '.2s'}}></span>
<span className="ml-3 text-[11px] text-neutral-400 caret font-geist">
                      optimize.ts
                    </span>
</div>
<div className="p-3 font-mono text-[11px] leading-5">
<pre className="whitespace-pre-wrap"><span className="text-neutral-500 font-geist">04</span> <span className="text-neutral-400 font-geist">// Before</span>
<span className="text-neutral-500 font-geist">05</span> <span className="px-1 rounded bg-rose-500/10 text-rose-300 font-geist">- useEffect(() =&gt; fetchData(), [])</span>
<span className="text-neutral-500 font-geist">06</span> <span className="text-neutral-400 font-geist">// After</span>
<span className="text-neutral-500 font-geist">07</span> <span className="px-1 rounded bg-emerald-500/10 text-emerald-300 font-geist">+ const data = await api.get('/data')</span>
<span className="text-neutral-500 font-geist">08</span> <span className="px-1 rounded bg-emerald-500/10 text-emerald-300 font-geist">+ useMemo(() =&gt; renderList(data), [data])</span></pre>
</div>
<div className="px-3 py-2 border-t border-white/5 flex items-center justify-between text-[11px]">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
<span className="text-neutral-400 font-geist">Analyzed</span>
</div>
<div className="flex items-center gap-2">
<span className="text-emerald-300 font-geist">-190ms</span>
<div className="h-1 w-14 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-blue-500 animate-fadeSlideIn" style={{animationDuration: '1.2s'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 rounded-full px-3 py-1.5 text-xs text-white ring-1 ring-blue-400 shadow-[0_6px_16px_rgba(59,130,246,0.35)] animate-glowPulse font-geist" style={{background: 'linear-gradient(45deg,#06b6d4,#3b82f6,#2563eb)'}}>
                    Apply fix
                  </button>
<button className="flex-1 rounded-full px-3 py-1.5 text-xs text-neutral-200 ring-1 ring-white/10 bg-white/5 font-geist">
                    Copy patch
                  </button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll" style={{animationDelay: '.1s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl shimmer" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 30px 80px rgba(37,99,235,0.10)'}}></div>
<div className="p-4 sm:p-5">
<h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter" style={{}}>
                  Theme Control
                </h3>
<p className="text-sm text-neutral-400 mt-1 font-geist">
                  Adjust styles with one click.
                </p>
<div className="mt-4 rounded-xl bg-zinc-950/80 ring-1 ring-white/10 p-3">
<p className="text-[11px] uppercase tracking-wide text-blue-200 mb-2 font-geist">
                    Select Theme
                  </p>
<div className="grid grid-cols-[1fr_auto] gap-3 items-center">
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-breathe"></span>
<span className="text-sm text-white font-geist">Dark</span>
</div>
<div className="flex items-center gap-2 opacity-70">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<span className="text-sm text-neutral-300 font-geist">Light</span>
</div>
<div className="flex items-center gap-2 opacity-70">
<span className="w-2 h-2 rounded-full bg-white/20"></span>
<span className="text-sm text-neutral-300 font-geist">System</span>
</div>
</div>
<div className="h-20 w-8 rounded-lg bg-white/5 ring-1 ring-white/10 relative overflow-hidden">
<div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-1 h-[90%] bg-white/10 rounded-full"></div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-3 w-4 h-4 rounded-full bg-blue-400 ring-1 ring-blue-300 animate-floatSlow"></div>
</div>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="text-[11px] px-2 py-1 rounded-full ring-1 ring-white/10 bg-white/5 text-neutral-300 font-geist">
                      Rounded
                    </span>
<span className="text-[11px] px-2 py-1 rounded-full ring-1 ring-white/10 bg-white/5 text-neutral-300 font-geist">
                      Glass
                    </span>
<span className="text-[11px] px-2 py-1 rounded-full ring-1 ring-blue-400/50 bg-blue-500/10 text-blue-200 animate-breathe font-geist">
                      Accent: Blue
                    </span>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll" style={{animationDelay: '.15s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl shimmer" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 30px 80px rgba(37,99,235,0.10)'}}></div>
<div className="p-4 sm:p-5">
<h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter" style={{}}>
                  Team Collaboration
                </h3>
<p className="text-sm text-neutral-400 mt-1 font-geist">
                  Review and approve changes faster.
                </p>
<div className="mt-4 rounded-xl bg-zinc-950/80 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">
<img alt="" className="w-6 h-6 rounded-full ring-1 ring-white/10 object-cover animate-floatSlow" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="w-6 h-6 rounded-full ring-1 ring-white/10 object-cover -ml-2 animate-floatSlow" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop" style={{animationDelay: '.1s'}}/>
<span className="ml-1 text-xs text-neutral-400 font-geist">
                      Alex • Dana
                    </span>
<span className="ml-auto inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full ring-1 ring-emerald-500/40 bg-emerald-500/10 text-emerald-300 animate-breathe font-geist">
                      2 new
                    </span>
</div>
<div className="mt-3 rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3 text-sm text-neutral-200 animate-fadeSlideIn font-geist" style={{animationDelay: '.1s'}}>
                    Can we refactor this grid to a reusable
                    <span className="text-blue-300 font-geist">Card</span>
                    component?
                  </div>
<div className="mt-3 flex items-center gap-2">
<button className="flex-1 rounded-full px-3 py-1.5 text-xs text-neutral-200 ring-1 ring-white/10 bg-white/5 font-geist">
                      Reply
                    </button>
<button className="flex-1 rounded-full px-3 py-1.5 text-xs text-white ring-1 ring-blue-400 shadow-[0_10px_24px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 animate-glowPulse font-geist" style={{background: 'linear-gradient(45deg,#06b6d4,#3b82f6,#2563eb)'}}>
                      Approve
                    </button>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 animate-fadeSlideIn [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll" style={{animationDelay: '.2s'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl shimmer" style={{boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05), 0 30px 80px rgba(37,99,235,0.10)'}}></div>
<div className="p-4 sm:p-5">
<h3 className="sm:text-2xl text-xl text-white font-geist font-light tracking-tighter" style={{}}>
                  Template Library
                </h3>
<p className="text-sm text-neutral-400 mt-1 font-geist">
                  Start with curated, reusable patterns.
                </p>
<div className="mt-4 space-y-2">
<div className="rounded-xl bg-zinc-950/80 ring-1 ring-white/10 p-3 flex items-center gap-3">
<div className="flex-1">
<p className="text-sm text-neutral-200 font-geist">Pricing Section</p>
<p className="text-[11px] text-neutral-500 font-geist">
                        2 columns • CTA
                      </p>
</div>
<button className="inline-flex items-center gap-1 text-[11px] text-blue-200 bg-blue-900/30 rounded-full px-2 py-0.5 ring-1 ring-blue-700 animate-breathe font-geist">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14M5 12h14"></path>
</svg>
                      Add
                    </button>
</div>
<div className="rounded-xl bg-zinc-950/80 ring-1 ring-white/10 p-3 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg ring-1 ring-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 animate-floatSlow" style={{animationDelay: '.08s'}}></div>
<div className="flex-1">
<p className="text-sm text-neutral-200 font-geist">Feature Grid</p>
<p className="text-[11px] text-neutral-500 font-geist">3x3 cards</p>
</div>
<button className="inline-flex items-center gap-1 text-[11px] text-blue-200 bg-blue-900/30 rounded-full px-2 py-0.5 ring-1 ring-blue-700 font-geist">
                      Use
                    </button>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</section>


<section className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="pricing">
<div className="border-gradient sm:p-8 rounded-3xl px-6 py-6">
<div className="mb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll gap-x-6 gap-y-6 items-start">

<div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/[0.03]">
<span className="text-[11px] font-medium tracking-widest text-zinc-300 font-geist">
                  02
                </span>
<span className="h-3 w-px bg-white/10"></span>
<span className="text-[11px] tracking-wide text-zinc-400 font-geist">
                  Testimonials
                </span>
</span>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter" style={{}}>
                Loved by designers,
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter" style={{}}>
                  trusted by teams
                </span>
</h2>
<p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl font-geist">
                Real results from real teams — faster reviews, cleaner handoff,
                and a smoother path from idea to shipped UI.
              </p>
</div>

<div className="lg:col-span-3 lg:justify-end flex flex-col sm:flex-row gap-2 sm:items-center gap-x-2 gap-y-2">

<a className="group inline-flex min-w-[180px] cursor-pointer overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white text-base font-medium text-neutral-300 tracking-tight bg-white/5 h-[48px] border-white/15 border rounded-full pt-3 pr-6 pb-3 pl-6 relative items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40" href="#demo">

<span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                  See More
                </span>

<span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 absolute inset-0 font-geist">
                  See More
                </span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-[1000ms] opacity-70 blur-[2px]"></span>

<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
</a>

</div>
</div>

</div>
<div aria-labelledby="testimonials-heading" className="sm:mt-8 overflow-hidden sm:rounded-3xl bg-zinc-950 border-zinc-900 border rounded-2xl mt-8 relative">
<div className="sm:px-8 sm:pt-0 pt-8 pr-6 pl-6"></div>
<div className="sm:py-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll pt-6 pr-6 pb-6 pl-6" style={{maskImage: 'linear-gradient(270deg, transparent, black 25%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(270deg, transparent, black 25%, black 70%, transparent)'}}>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">

<article className="rounded-2xl ring-1 ring-zinc-900 bg-zinc-900/50 p-6 sm:p-8 flex flex-col justify-between">
<div className="flex items-start justify-between mb-6">
<span className="text-4xl sm:text-5xl text-zinc-700 leading-none font-geist font-light tracking-tighter" style={{}}>
                    ”
                  </span>
<div className="w-14 h-14 rounded-xl ring-1 ring-white/10 overflow-hidden bg-neutral-800">
<img alt="Client photo" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c92852bb-a510-405a-85ab-ffa0fde136a4_1600w.jpg"/>
</div>
</div>
<p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-geist">
                  “As a digital artist, showcasing my work beautifully is
                  everything. DesignFlow’s dark UI and subtle neon accents make
                  my portfolio pop.”
                </p>
<div className="mt-6">
<p className="text-xs text-neutral-500 font-geist">CEO of Capital Agency</p>
<p className="text-sm text-neutral-300 mt-1 font-geist">G. Alexander</p>
</div>
</article>

<article className="sm:p-8 flex flex-col justify-between rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950 hover:-translate-y-1 transition-all duration-500">
<div className="flex items-start justify-between mb-6">
<span className="text-4xl sm:text-5xl text-zinc-600 leading-none font-geist font-light tracking-tighter" style={{}}>
                    ”
                  </span>
<div className="w-14 h-14 rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-800">
<img alt="Client photo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a34e7279-3582-477a-8b2b-d9e9789eb63c_1600w.jpg"/>
</div>
</div>
<p className="text-neutral-100 text-lg sm:text-xl leading-relaxed font-geist">
                  “DesignFlow was exactly what our startup needed. We launched
                  our production website in days, not months — critical for
                  early market entry.”
                </p>
<div className="mt-6">
<p className="text-xs text-neutral-400 font-geist">CEO of Orix Agency</p>
<p className="text-sm text-neutral-200 mt-1 font-geist">J. Amander</p>
</div>
</article>

<article className="rounded-2xl ring-1 ring-zinc-900 bg-zinc-900/50 p-6 sm:p-8 flex flex-col justify-between">
<div className="flex items-start justify-between mb-6">
<span className="text-4xl sm:text-5xl text-zinc-700 leading-none font-geist font-light tracking-tighter" style={{}}>
                    ”
                  </span>
<div className="w-14 h-14 rounded-xl ring-1 ring-white/10 overflow-hidden bg-neutral-800">
<img alt="Client photo" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2dadd731-6120-4637-ada0-dcaa8dbc507e_1600w.jpg"/>
</div>
</div>
<p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-geist">
                  “The perfect balance of stunning aesthetics and real-world
                  functionality. If you want high‑impact results without the
                  custom build hassle, this is it.”
                </p>
<div className="mt-6">
<p className="text-xs text-neutral-500 font-geist">CEO of Creative Agency</p>
<p className="text-sm text-neutral-300 mt-1 font-geist">A. Levine</p>
</div>
</article>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4" id="pricing">
<div className="border-gradient sm:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="mb-12 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-6 items-start">

<div className="lg:col-span-2 flex items-center lg:justify-start justify-between">
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-white/10 bg-white/[0.03]">
<span className="text-[11px] font-medium tracking-widest text-zinc-300 font-geist">
                  03
                </span>
<span className="h-3 w-px bg-white/10"></span>
<span className="text-[11px] tracking-wide text-zinc-400 font-geist">
                  Pricing
                </span>
</span>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-zinc-100 font-geist font-light tracking-tighter" style={{}}>
                Simple plans,
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-400 font-geist font-light tracking-tighter" style={{}}>
                  built for growth
                </span>
</h2>
<p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl font-geist">
                Choose a plan that fits your workflow — from individual creators
                to growing teams, you get every tool you need to design, build,
                and ship without limits.
              </p>
</div>

<div className="lg:col-span-3 lg:justify-end flex flex-col sm:flex-row gap-2 sm:items-center">

<a className="group inline-flex min-w-[180px] cursor-pointer overflow-hidden transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white text-base font-medium text-neutral-300 tracking-tight bg-white/5 h-[48px] border-white/15 border rounded-full pt-3 pr-6 pb-3 pl-6 relative items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40" href="#plans">

<span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                  Start Free
                </span>

<span className="z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 absolute inset-0 font-geist">
                  Start Free
                </span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-[1000ms] opacity-70 blur-[2px]"></span>

<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
</a>

</div>
</div>

</div>
<div className="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll bg-zinc-800/50 rounded-3xl ring-white/10 ring-1 relative">
<div className="absolute -right-20 -top-24 h-72 w-72 bg-gradient-to-tr from-blue-500/20 to-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-4 rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 px-4 py-3">
<div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div className="">
<p className="text-white text-base font-medium tracking-tight font-geist">
                    Starter
                  </p>
<p className="text-neutral-400 text-sm font-geist">
                    Perfect for solo developers &amp; freelancers
                  </p>
</div>
</div>
<div className="flex items-center gap-4 rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 px-4 py-3">
<div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z"></path>
</svg>
</div>
<div className="">
<p className="text-white text-base font-medium tracking-tight font-geist">
                    Pro
                  </p>
<p className="text-neutral-400 text-sm font-geist">
                    Built for growing teams &amp; agencies
                  </p>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950 px-5 py-6 sm:px-8 sm:py-8 overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '18px 18px'}}></div>
<div className="relative">
<div className="flex items-end gap-3">
<p className="text-5xl sm:text-6xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-geist font-light tracking-tighter" style={{}}>
                      $49
                    </p>
<span className="text-[11px] uppercase text-neutral-400 mb-1 font-geist">
                      /month
                    </span>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-[40ch] font-geist">
                    Start transforming designs into code instantly with
                    AI-powered generation.
                  </p>
<p className="mt-6 text-xs uppercase tracking-wide text-neutral-400 font-geist">
                    Early Adopter Pricing
                  </p>
<div className="mt-3">
<button className="group relative inline-flex w-full h-12 sm:h-12 cursor-pointer overflow-hidden rounded-full items-center justify-center text-base font-medium text-white shadow-[inset_0_2px_8px_rgba(255,255,255,0.25),_inset_0_-3px_8px_rgba(0,0,0,0.35),_0_4px_10px_rgba(0,0,0,0.4)] transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px]" style={{background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #2563eb)'}} type="button">

<span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-full group-hover:opacity-0 font-geist">
                        Start Free Trial
                      </span>

<span className="absolute inset-0 flex items-center justify-center z-10 transition-all duration-500 ease-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 font-geist">
                        Start Free Trial
                      </span>

<span aria-hidden="true" className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100 blur-[20px]" style={{background: 'linear-gradient(45deg, #06b6d4, #3b82f6, #2563eb)', zIndex: '-1'}}></span>
</button>
</div>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-3 font-geist">
<span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                      50 design conversions per month
                    </li>
<li className="flex items-start gap-3 font-geist">
<span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                      React, Vue &amp; HTML output
                    </li>
</ul>
<div className="mt-6 h-px bg-white/10"></div>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                      Figma &amp; Adobe XD integration
                    </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                      Production-ready, clean code
                    </li>
</ul>
</div>
</div>

<div className="relative rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-zinc-900/70 to-zinc-950 px-5 py-6 sm:px-8 sm:py-8 overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-[0.18]" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)', backgroundSize: '18px 18px'}}></div>
<div className="relative">
<div className="flex items-end gap-3">
<p className="text-5xl sm:text-6xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-geist font-light tracking-tighter" style={{}}>
                      $149
                    </p>
<span className="text-[11px] uppercase text-neutral-400 mb-1 font-geist">
                      /month
                    </span>
</div>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-[44ch] font-geist">
                    Ship faster with unlimited conversions and advanced team
                    collaboration features.
                  </p>
<p className="mt-6 text-xs uppercase tracking-wide text-neutral-400 font-geist">
                    Most Popular Plan
                  </p>
<div className="mt-3">
<button className="group relative inline-flex items-center justify-center w-full h-12 sm:h-12 px-6 py-3 text-sm font-semibold tracking-tight cursor-pointer overflow-hidden rounded-full border border-white/15 bg-white/5 text-neutral-300 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white hover:bg-white/10">
<span className="relative z-10 transition-all duration-500 ease-out group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md font-geist">
                        Start Free Trial
                      </span>
<span className="absolute inset-0 z-10 flex items-center justify-center font-medium opacity-0 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-geist">
                        Start Free Trial
                      </span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent transition-all duration-[1000ms] opacity-70 blur-[2px]"></span>
<span aria-hidden="true" className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-t from-white/15 via-white/10 to-transparent"></span>
</button>
</div>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-3 font-geist">
<span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                      Unlimited design conversions
                    </li>
<li className="flex items-start gap-3 font-geist">
<span className="mt-1 w-2 h-2 rounded-full ring-1 ring-white/30"></span>
                      Advanced component library
                    </li>
</ul>
<div className="mt-6 h-px bg-white/10"></div>
<ul className="mt-6 space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle className="" cx="12" cy="12" r="10"></circle>
</svg>
                      Priority support &amp; code reviews
                    </li>
<li className="flex items-start gap-2 font-geist">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                      API access &amp; custom integrations
                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll z-10 border-zinc-800 mt-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<footer className="overflow-hidden bg-zinc-900/60 ring-1 ring-white/10 rounded-3xl relative backdrop-blur">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10 pointer-events-none"></div>
<div className="p-8 sm:p-12 lg:p-16 rounded-3xl relative space-y-12">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 space-y-4 max-w-md">
<h3 className="text-3xl text-white font-geist font-light tracking-tighter" style={{}}>
              DesignFlow
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-geist">
              Creative developer tools for designers who build.
            </p>
<p className="text-sm text-zinc-500 font-geist">
              548 Market St, San Francisco, CA 94104 — United States
            </p>
<a className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-white ring-1 ring-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 transition font-geist" href="mailto:hello@designflow.ai">
              Contact Us
              <svg className="w-4 h-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.6" viewbox="0 0 24 24">
<path d="M5 12h14M13 5l7 7-7 7"></path>
</svg>
</a>
</div>

<nav className="lg:col-span-4">
<div className="grid grid-cols-2 gap-8">
<ul className="space-y-2">
<li className="text-xs uppercase tracking-wide text-zinc-500 font-geist">
                  Product
                </li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#features">
                    Features
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#pricing">
                    Pricing
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#playground">
                    Playground
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#changelog">
                    Changelog
                  </a>
</li>
</ul>
<ul className="space-y-2">
<li className="text-xs uppercase tracking-wide text-zinc-500 font-geist">
                  Company
                </li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#about">
                    About
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#careers">
                    Careers
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#docs">
                    Docs
                  </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#contact">
                    Contact
                  </a>
</li>
</ul>
</div>
</nav>

<div className="lg:col-span-4 w-full max-w-md lg:justify-self-end">
<h4 className="text-zinc-100 font-semibold text-lg tracking-tight font-geist">
              Stay updated
            </h4>
<p className="text-sm text-zinc-500 mt-1 mb-5 font-geist">
              Monthly updates, templates, and tips. No spam.
            </p>
<form className="flex items-center gap-3">
<input className="flex-1 rounded-full bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none ring-1 ring-white/10 focus:ring-blue-400/60 transition" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 transition font-geist" type="submit">
                    Subscribe
                  </button>
</form>
</div>
</div>

<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<p className="text-xs text-zinc-500 font-geist">
            ©
            <span className="font-geist" id="df-year">2025</span>
            DesignFlow. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#">
              GitHub
            </a>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#">
              Twitter
            </a>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#">
              LinkedIn
            </a>
<a className="text-sm text-zinc-300 hover:text-white transition font-geist" href="#">
              Discord
            </a>
</div>
</div>
</div>
</footer>
</div>
</footer>

    </>
  );
}
