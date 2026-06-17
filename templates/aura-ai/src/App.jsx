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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
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
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Initialize lucide icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
        }
      });
    


  if (window.lucide && lucide.createIcons) lucide.createIcons();



  if (window.lucide && lucide.createIcons) lucide.createIcons();

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
      

<div className="aura-background-component -z-10 w-full h-screen absolute top-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="5UmJmFVVxnDOIkdUYRnh"></div>

</div>


<header className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between py-6">

<a className="inline-flex items-center justify-center bg-center w-[72px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/da880e71-c683-45cd-bf4c-2e2eb25318f4_1600w.png)] bg-cover rounded-full [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll animate" href="#" style={{}}></a>

<nav className="hidden items-center gap-8 text-sm text-white/80 md:flex [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<a className="transition-colors hover:text-white font-sans" href="#">
              Explore
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Features
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Pricing
            </a>
<a className="transition-colors hover:text-white font-sans" href="#">
              Changelog
            </a>
</nav>

<div className="hidden md:block [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<a className="inline-flex items-center gap-2 transition hover:bg-white/10 border-gradient before:rounded-full text-sm font-medium text-white bg-white/5 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm backdrop-blur" href="#">
<span className="font-sans">Sign Up</span>
</a>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 border-gradient before:rounded-lg">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="sr-only font-sans">Open menu</span>
</button>
</div>
</div>
</header>

<section className="relative">
<div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:pt-10 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-16 pl-6 gap-x-10 gap-y-10 items-center">

<div className="relative z-10">
<h1 className="text-4xl font-semibold tracking-tight leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate">
<span className="block text-white tracking-tighter font-manrope font-semibold" style={{}}>
              Build stunning websites
            </span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-amber-200 tracking-tighter font-manrope font-semibold" style={{}}>
              in minutes
            </span>
</h1>
<p className="leading-relaxed md:text-lg [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll text-base text-white/70 max-w-xl mt-6 animate font-sans">
            Create, customize, and publish a high‑performance site using AI—no
            code required. Pick a style, generate pages, and go live in minutes.
          </p>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll mt-10 relative animate">

<div className="-inset-0.5 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-400 opacity-40 w-64 rounded-full absolute blur-xl"></div>
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(129,140,248,0.25)]" href="#" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<img alt="Advisor headshot" className="ring-2 ring-white/10 z-10 w-8 h-8 object-cover rounded-full relative" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg" style={{}}/>
<span className="whitespace-nowrap relative z-10 font-sans">
                  Generate My Site
                </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative">
<svg className="lucide lucide-wand-sparkles lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="wand-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</span>
<style>
                  @keyframes borderBeamRotation {
                    0% {
                      transform: translate(-50%, -50%) rotate(0deg);
                    }
                    100% {
                      transform: translate(-50%, -50%) rotate(360deg);
                    }
                  }
                </style>
</div>
</a>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.6s_both] animate-on-scroll text-sm text-white/60 mt-10 animate">
<p className="font-sans">"Launched a polished site in under an hour"</p>
<p className="not-italic text-xs text-white/50 mt-1 font-sans">
              Jamie R. — Founder, SaaS
            </p>
</div>
</div>

<div className="relative">

<div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 blur-3xl"></div>
<div className="overflow-hidden shadow-indigo-900/30 [animation:fadeSlideIn_0.7s_ease-out_0.4s_both] animate-on-scroll border-gradient before:rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] w-full max-w-xl rounded-3xl mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 relative shadow-2xl backdrop-blur animate">
<div className="rounded-2xl bg-black/40 p-2">
<img alt="Abstract 3D ring render" className="object-center md:h-[520px] w-full h-[420px] object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8b907ece-2dd2-4009-9170-a82e3e3e5910_1600w.webp" style={{}}/>
</div>

<div className="mt-3 flex items-center justify-between px-1">
<div className="flex items-center gap-2 text-xs text-white/50">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-sans">Design • Generate • Publish</span>
</div>
<div className="text-xs text-white/40 font-sans">Live Preview</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 my-20 relative">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid gap-12 lg:grid-cols-2">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll border-gradient before:rounded-[36px] bg-gradient-to-br from-indigo-500/5 via-fuchsia-500/5 to-amber-400/5 rounded-[36px] pt-5 pr-5 pb-5 pl-5 relative">
<article className="group relative overflow-hidden transition-shadow hover:shadow-md bg-neutral-900/70 border border-neutral-700 rounded-3xl shadow-xl backdrop-blur-xl border-gradient before:rounded-3xl" style={{background: 'rgba(17, 17, 17, 0.7)', backdropFilter: 'blur(20px)', border: '1px solid rgba(64, 64, 64, 0.35)'}}>
<div className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<h3 className="text-2xl tracking-tight text-white font-manrope font-semibold" style={{}}>GPT-5 HTML Generation</h3>
<span className="inline-flex items-center gap-2 text-[10px] sm:text-xs text-neutral-300 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 border-gradient before:rounded-full font-sans">
<svg className="lucide lucide-wand-sparkles text-fuchsia-400 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="wand-sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(232, 121, 249)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                    AI-Powered
                  </span>
</div>

<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-800 ring-1 ring-inset ring-white/5 mb-8 border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">

<div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm border-gradient before:rounded-2xl">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">index.html</span>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-green-400"></span>
<span className="text-xs text-green-400 font-sans">Live</span>
</div>
</div>
<div className="p-2 font-mono text-[8px] sm:text-[10px] leading-relaxed">
<div className="text-purple-400 font-sans">&lt;<span className="text-blue-400 font-sans">section</span> <span className="text-green-400 font-sans">class</span>=<span className="text-amber-300 font-sans">"hero"</span>&gt;</div>
<div className="text-neutral-500 pl-3 font-sans">&lt;<span className="text-blue-400 font-sans">div</span> <span className="text-green-400 font-sans">class</span>=<span className="text-amber-300 font-sans">"container"</span>&gt;</div>
<div className="text-white pl-6 font-sans">&lt;<span className="text-blue-400 font-sans">h1</span>&gt;Welcome&lt;/<span className="text-blue-400 font-sans">h1</span>&gt;</div>
<div className="text-neutral-500 pl-3 font-sans">&lt;/<span className="text-blue-400 font-sans">div</span>&gt;</div>
<div className="text-purple-400 font-sans">&lt;/<span className="text-blue-400 font-sans">section</span>&gt;</div>
</div>
</div>

<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-neutral-900/90 backdrop-blur border border-neutral-800 shadow-sm border-gradient before:rounded-2xl">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">TAILWIND</span>
</div>
<div className="p-2 space-y-1 font-mono text-[9px] sm:text-[10px]">
<div className="flex items-center justify-between">
<span className="text-blue-400 font-sans">flex items-center</span>
<span className="text-green-400 font-sans">✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-blue-400 font-sans">rounded-xl p-6</span>
<span className="text-green-400 font-sans">✓</span>
</div>
<div className="flex items-center justify-between">
<span className="text-blue-400 font-sans">bg-gradient-to-r</span>
<span className="text-green-400 font-sans">✓</span>
</div>
</div>
</div>

<div className="sm:left-6 h-[44%] border-neutral-800 border rounded-2xl absolute top-6 left-3 shadow-sm backdrop-blur border-gradient before:rounded-2xl bg-neutral-900/90">
<div className="flex items-center justify-between px-3 py-2 border-b border-neutral-800/70">
<span className="text-[10px] sm:text-xs tracking-widest text-neutral-400 font-sans">PROCESS</span>
</div>
<div className="text-[9px] sm:text-[10px] pt-2 pr-2 pb-2 pl-2 space-y-1.5">
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
<span className="text-neutral-300 font-sans">Parse request</span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
<span className="text-neutral-300 font-sans">Generate HTML</span>
</div>
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse"></div>
<span className="text-neutral-300 font-sans">Apply Tailwind</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll">
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white font-sans">Intelligent Styling</h4>
<p className="mt-2 text-sm text-neutral-400 font-sans">GPT-5 understands design intent and generates pixel-perfect Tailwind classes automatically.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold tracking-tight text-white font-sans">Real-time Preview</h4>
<p className="mt-2 text-sm text-neutral-400 font-sans">See your changes instantly as GPT-5 generates and updates your HTML components.</p>
</div>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll">
<a className="inline-flex items-center gap-2 text-xs font-medium text-neutral-100 hover:text-neutral-300 border-gradient before:rounded-lg font-sans" href="#">
                    Try GPT-5 Editor
                    <svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</article>
</div>

<div className="">
<div className="tech-content [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll" id="technology">
<h3 className="text-4xl sm:text-5xl text-white tracking-tight font-manrope font-semibold" style={{}}>
                Next-generation AI web builder powered by GPT-5
              </h3>

<div className="mt-8 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="border-white/10 border-t pt-6">
<h4 className="text-lg font-semibold text-white mb-4 font-sans">Core AI Capabilities</h4>
<div className="space-y-4">
<div className="flex items-start gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mt-0.5 border-gradient before:rounded-full">
<svg className="lucide lucide-eye text-indigo-400 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="eye" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(129, 140, 248)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h5 className="font-medium text-white font-sans">Context-Aware Generation</h5>
<p className="text-sm text-neutral-400 mt-1 font-sans">GPT-5 analyzes your site structure and maintains consistent design patterns throughout.</p>
</div>
</div>
<div className="flex items-start gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-500/20 flex items-center justify-center mt-0.5 border-gradient before:rounded-full">
<svg className="text-fuchsia-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m7.5 4.27 9 5.15"></path>
<path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>
<div className="">
<h5 className="font-medium text-white font-sans">Tailwind Optimization</h5>
<p className="text-sm text-neutral-400 mt-1 font-sans">Automatically selects optimal utility classes for responsive, accessible, and performant designs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-white/10 border-t mt-8 pt-6 [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll">
<div className="grid gap-6 sm:grid-cols-2">
<div className="flex gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer items-center">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight text-white font-manrope font-semibold" data-target="99" style={{}}>99.9%</span>
<span className="text-sm text-neutral-400"></span>
</div>
<p className="text-xs text-neutral-400 font-sans">Code accuracy rate</p>
</div>
</div>
<div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
<div className="">
<div className="flex items-baseline gap-2">
<span className="text-2xl tracking-tight text-white font-manrope font-semibold" data-target="10" style={{}}>10x</span>
</div>
<p className="text-xs text-neutral-400 font-sans">Faster than manual coding</p>
</div>
</div>
</div>
</div>
<div className="border-white/10 border-t mt-8 pt-6 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll">
<a className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient before:rounded-full text-sm font-medium text-black bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(129,140,248,0.25)]" href="#">Start Building With GPT-5<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span></a>
</div>
</div>
</div>
</div>
</section>
<div className="xl:mt-20 xl:mb-20 border-gradient before:rounded-3xl [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll bg-neutral-900/40 max-w-7xl rounded-3xl mt-20 mr-auto mb-20 ml-auto pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="overflow-hidden bg-center border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6fa84c43-2fad-44f7-93e0-fca897a6e819_800w.webp)] bg-cover ring-white/10 ring-1 rounded-2xl relative" style={{}}>
<div className="sm:h-[520px] sm:p-8 flex flex-col h-[440px] pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-3">
<div className="">
<p className="text-sm text-neutral-300 font-sans">Our Edge</p>
<p className="text-xs sm:text-sm mt-1 text-neutral-400 font-sans">Strategic Design Thinking</p>
</div>
</div>
<div className="mt-auto">
<div className="sm:text-4xl text-2xl text-white tracking-tight mb-4 font-manrope font-semibold" style={{}}>Design
                with<span className="inline xl:text-emerald-200 text-blue-500 ml-2 font-manrope font-semibold" style={{}}>Purpose</span></div>
<div className="flex items-center gap-2 text-neutral-200 mb-6">
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-blue-500"></div>
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<div className="h-2 w-2 rounded-full bg-blue-600"></div>
</div>
<p className="text-sm font-sans">Every pixel has intention</p>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
                Discover our approach
                <svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="sm:p-8 overflow-hidden border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll bg-white/5 border-white/10 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="pointer-events-none absolute inset-0">
</div>
<div className="relative">
<p className="text-sm text-neutral-400 font-sans">Proven Results:</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight text-neutral-100 font-manrope font-semibold" style={{}}>
<span className="text-blue-500 font-manrope font-semibold" style={{}}>3x</span> faster project delivery,
              <span className="text-blue-400 font-manrope font-semibold" style={{}}>2x</span> higher engagement
            </h3>
<p className="mt-8 text-sm text-neutral-400 font-sans">Our Methodology:</p>
<div className="mt-4 space-y-3">
<div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                Strategic Discovery &amp; Research
              </div>
<div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                Collaborative Design Process
              </div>
<div className="flex items-center gap-3 text-sm text-neutral-200 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                Data-Driven Optimization
              </div>
</div>
<div className="mt-8 rounded-xl border p-5 border-white/10 bg-black/30 border-gradient before:rounded-xl">
<div className="flex items-center gap-1 text-amber-300 mb-3">
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-neutral-300 mt-3 font-sans">"Aura doesn't just create designs—they craft
                experiences. Their strategic thinking elevated our entire brand presence."</p>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096dab35-ecaf-418f-a932-5b514543b035_320w.jpg" style={{}}/>
<div className="text-sm">
<p className="text-neutral-200 font-sans">Michael Torres</p>
<p className="text-xs text-neutral-500 font-sans">CEO, Innovation Labs</p>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-rows-2 gap-6">

<div className="sm:p-8 border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll bg-white/5 border-white/10 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center sm:block">
<div className="relative h-28 w-28 sm:mx-auto">
<div className="absolute inset-0 rounded-full bg-blue-500"></div>
<div className="absolute inset-[10px] rounded-full bg-black/40 flex items-center justify-center">
<svg className="lucide lucide-shield-check text-blue-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="ml-5 sm:ml-0 sm:mt-6 text-center">
<h4 className="text-lg font-light tracking-tight text-white font-sans">100% Satisfaction</h4>
<p className="mt-2 text-sm text-neutral-400 font-sans">Guaranteed results or we'll make it right. Your
                  success is our mission.</p>
</div>
</div>
</div>

<div className="sm:p-8 border-gradient before:rounded-2xl [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll bg-white/5 border-white/10 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="">
<div className="text-2xl tracking-tight text-white font-manrope font-semibold" style={{}}>150+</div>
<p className="text-xs mt-1 text-neutral-400 font-sans">Projects delivered</p>
</div>
<div className="">
<div className="text-2xl tracking-tight text-white font-manrope font-semibold" style={{}}>48h</div>
<p className="text-xs mt-1 text-neutral-400 font-sans">Average start time</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm font-sans">
<span className="text-neutral-300 font-sans">Brand Strategy</span>
<span className="text-blue-500 font-sans">Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-sans">
<span className="text-neutral-300 font-sans">Visual Design</span>
<span className="text-blue-400 font-sans">Expert</span>
</div>
<div className="flex items-center justify-between text-sm font-sans">
<span className="text-neutral-300 font-sans">Digital Marketing</span>
<span className="text-blue-600 font-sans">Expert</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-sans">
<svg className="lucide lucide-check text-green-400" data-lucide="check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Lumina Certified Team
              </div>
</div>
</div>
</div>
</div>
</div>

<section className="mt-24 mb-24 relative">

<div className="pointer-events-none absolute -z-10 inset-0">
<div className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll border-gradient before:rounded-[28px] bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-blue-300/10 rounded-[28px] p-2">
<div className="overflow-hidden rounded-[22px] bg-black/30 ring-1 ring-white/10">
<img alt="AI-powered design workspace" className="md:h-[520px] w-full h-[320px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4209685f-125d-4dc8-b4b6-9a811d4f6e19_1600w.webp"/>
</div>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 text-sm text-indigo-200/80">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="font-sans">About Aura</span>
</div>
<h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-manrope font-semibold" style={{}}>
          Intelligent design, beautiful results.
        </h2>
<p className="mt-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl font-sans">
          Aura combines cutting-edge AI technology with thoughtful design principles to help you create stunning websites in minutes. Our platform empowers creators of all skill levels to bring their vision to life.
        </p>
<div className="mt-8">
<a className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient before:rounded-full text-sm font-medium text-black bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(129,140,248,0.25)]" href="#">
            Discover Our Story
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black">
<svg className="lucide lucide-arrow-up-right" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</a>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient before:rounded-2xl">
<div className="flex items-center gap-3">
<h3 className="text-base tracking-tight text-white font-semibold leading-none font-sans">Lightning Fast</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-sans">Create professional sites in minutes, not days.</p>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient before:rounded-2xl">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<h3 className="text-base tracking-tight text-white font-semibold leading-none font-sans">AI-Powered</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-sans">GPT-5 intelligence handles the complex code for you.</p>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient before:rounded-2xl">
<div className="flex items-center gap-3">
<h3 className="text-base tracking-tight text-white font-semibold leading-none font-sans">Fully Customizable</h3>
</div>
<p className="mt-3 text-sm text-neutral-400 font-sans">Complete control over every design element and style.</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="mt-32 mb-32 relative">
<div className="pointer-events-none absolute -z-10 inset-0">
<div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-fuchsia-400/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 [animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2 text-sm text-indigo-200/80 mb-4">
<span className="font-sans">Pricing Plans</span>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-manrope font-semibold">
        Choose your plan
      </h2>
<p className="mt-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl mx-auto font-sans">
        Start free and scale as you grow. All plans include GPT-5 AI generation and unlimited edits.
      </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll border-gradient before:rounded-3xl bg-white/5 ring-1 ring-white/10 rounded-3xl p-8">
<div className="mb-6">
<h3 className="text-xl tracking-tight text-white font-manrope font-semibold">Starter</h3>
<p className="mt-2 text-sm text-white/60 font-sans">Perfect for personal projects</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-5xl tracking-tight text-white font-manrope font-semibold">$0</span>
<span className="text-white/50 font-sans">/month</span>
</div>
</div>
<a className="block w-full text-center border-gradient before:rounded-full text-sm font-medium text-white bg-white/5 rounded-full py-3 px-4 hover:bg-white/10 transition font-sans" href="#">
          Get Started Free
        </a>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-indigo-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">1 website</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-indigo-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">GPT-5 AI generation</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-indigo-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Basic templates</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-indigo-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Community support</span>
</li>
</ul>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll border-gradient before:rounded-3xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 ring-2 ring-indigo-400/50 rounded-3xl p-8 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center gap-1 text-xs font-medium text-black bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 rounded-full px-3 py-1 font-sans">
<svg className="w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="star" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            Most Popular
          </span>
</div>
<div className="mb-6">
<h3 className="text-xl tracking-tight text-white font-manrope font-semibold">Pro</h3>
<p className="mt-2 text-sm text-white/60 font-sans">For professionals &amp; teams</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-5xl tracking-tight text-white font-manrope font-semibold">$29</span>
<span className="text-white/50 font-sans">/month</span>
</div>
</div>
<a className="block w-full text-center text-sm font-medium text-black bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-400 rounded-full py-3 px-4 hover:opacity-90 transition shadow-[0_8px_30px_rgba(129,140,248,0.25)] font-sans" href="#">
          Start Pro Trial
        </a>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-fuchsia-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Unlimited websites</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-fuchsia-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Advanced GPT-5 features</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-fuchsia-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Premium templates</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-fuchsia-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Priority support</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-fuchsia-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Advanced analytics</span>
</li>
</ul>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll border-gradient before:rounded-3xl bg-white/5 ring-1 ring-white/10 rounded-3xl p-8">
<div className="mb-6">
<h3 className="text-xl tracking-tight text-white font-manrope font-semibold">Enterprise</h3>
<p className="mt-2 text-sm text-white/60 font-sans">For large organizations</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-2">
<span className="text-5xl tracking-tight text-white font-manrope font-semibold">Custom</span>
</div>
</div>
<a className="block w-full text-center border-gradient before:rounded-full text-sm font-medium text-white bg-white/5 rounded-full py-3 px-4 hover:bg-white/10 transition font-sans" href="#">
          Contact Sales
        </a>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-amber-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Everything in Pro</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-amber-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Dedicated account manager</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-amber-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Custom AI training</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-amber-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">SSO &amp; advanced security</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-amber-400 flex-shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">SLA guarantee</span>
</li>
</ul>
</div>
</div>

<div className="mt-16 text-center [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll">
<p className="text-sm text-white/60 font-sans">
        Have questions? 
        <a className="text-indigo-400 hover:text-indigo-300 transition font-sans" href="#">View our FAQ</a>
        or
        <a className="text-indigo-400 hover:text-indigo-300 transition font-sans" href="#">chat with us</a>
</p>
</div>
</div>
</section><footer className="relative border-t border-white/10 mt-32">
<div className="pointer">
<div className="absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

<div className="lg:col-span-2">
<a className="inline-flex items-center justify-center bg-center w-[72px] h-[36px] bg-[irqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/da880e71-c683-45cd-bf4c-2e2eb25318f4_1600w.png)] bg-cover rounded-full mb-4" href="#"></a>
<p className="text-sm text-white/60 max-w-xs leading-relaxed font-sans">
          Build stunning websites with AI-powered design. Create, customize, and publish in minutes.
        </p>
<div className="flex items-center gap-4 mt-6">
<a className="text-white/60 hover:text-white transition" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/60 hover:text-white transition" href="#">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-white/60 hover:text-white transition" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path 18c-4.51="" 2-5-2-7-2"="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23 d=" m9=""></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight font-sans">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Features</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Pricing</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Templates</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Changelog</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Roadmap</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text- font-sans">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">About</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Blog</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Careers</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Contact</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Brand</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight font-sans">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Documentation</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Help Center</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Community</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">API Status</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition font-sans" href="#">Partners</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/50 font-sans">
        © 2024 Aura. All rights reserved.
      </p>
<div className="flex items-center gap-6">
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">Privacy Policy</a>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">Terms of Service</a>
<a className="text-sm text-white/50 hover:text-white transition font-sans" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
