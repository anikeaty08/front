import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  


    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const openBtn = document.querySelector('button[aria-label="Open menu"]');
    const closeBtn = document.getElementById('closeMenu');
    const menu = document.getElementById('mobileMenu');

    function toggleMenu(show) {
      if (!menu) return;
      menu.classList.toggle('hidden', !show);
      document.body.style.overflow = show ? 'hidden' : '';
    }
    if (openBtn) openBtn.addEventListener('click', () => toggleMenu(true));
    if (closeBtn) closeBtn.addEventListener('click', () => toggleMenu(false));
    if (menu) menu.addEventListener('click', (e) => { if (e.target === menu) toggleMenu(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 -z-10 w-full h-screen absolute hue-rotate-90 saturate-200"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950"></div>

<header className="relative w-full">
<div className="w-full">
<div className="overflow-hidden sm:p-6 md:p-8 pt-4 pr-4 pb-4 pl-4 relative">

<div className="z-10 flex [animation:fadeSlideIn_1s_ease-out_0.1s_both] max-w-7xl mr-auto ml-auto relative items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[50px] h-[40px] bg-[url(https://cdn.midjourney.com/4a6974ae-2460-48db-ae36-ecb5b7fea7a9/0_1.png?w=800&amp;q=80)] bg-cover rounded invert" href="#"></a>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-medium font-geist" href="/docs">Docs</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="/examples">Examples</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="/api">API</a>
<a className="hover:text-white transition-colors font-medium font-geist" href="/community">Community</a>
<div className="relative inline-block group text-sm rounded-full">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white text-xs font-semibold text-white/70 tracking-tight rounded-full pt-[12px] pr-[17px] pb-[12px] pl-[17px] items-center justify-center" onclick="window.location.href='/docs/get-started'" role="button" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(55,55,55,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal rounded-full text-xs font-geist">Get Started</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 rounded-full text-xs" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-full text-sm" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</nav>
<div className="md:hidden">
<button aria-label="Open menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/20 bg-white/10 text-white hover:bg-white/15">
<svg fill="none" height="20" style={{stroke: 'currentColor', strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16"></path>
</svg>
</button>
</div>
</div>

<section className="z-10 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center max-w-7xl mt-12 mr-auto ml-auto pr-4 pl-4 relative space-y-8">
<style className="">
            @keyframes fadeInSlide {
              0% {
                opacity: 0;
                transform: translateY(20px);
                filter: blur(8px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0px);
              }
            }

            .animate-hero-element {
              opacity: 0;
              animation-fill-mode: forwards;
            }

            .animate-badge { animation: fadeInSlide 0.6s ease-out 0.2s forwards; }
            .animate-title-1 { animation: fadeInSlide 0.8s ease-out 0.4s forwards; }
            .animate-title-2 { animation: fadeInSlide 0.8s ease-out 0.6s forwards; }
            .animate-description { animation: fadeInSlide 0.8s ease-out 0.8s forwards; }
            .animate-install { animation: fadeInSlide 0.8s ease-out 1.0s forwards; }
            .animate-cta-1 { animation: fadeInSlide 0.7s ease-out 1.2s forwards; }
            .animate-cta-2 { animation: fadeInSlide 0.7s ease-out 1.4s forwards; }
          </style>
<div className="inline-flex animate-hero-element animate-badge [animation:fadeSlideIn_1s_ease-out_0.2s_both] mb-6 gap-x-2 gap-y-2 items-center">
<span className="inline-flex items-center gap-2 text-xs text-white/90 font-geist bg-white/5 ring-white/10 ring-1 rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
              v2.0 Released
            </span>
</div>
<h1 className="sm:text-6xl md:text-7xl lg:text-8xl text-5xl font-medium text-white tracking-tighter font-geist leading-[1.05]">
<span className="animate-hero-element animate-title-1 block [animation:fadeSlideIn_1s_ease-out_0.3s_both] font-light font-geist">Build CLI tools</span>
<span className="animate-hero-element animate-title-2 block bg-clip-text xl:bg-neutral-50 [animation:fadeSlideIn_1s_ease-out_0.4s_both] font-light text-transparent font-geist">at lightning speed</span>
</h1>
<p className="sm:text-lg md:text-xl sm:max-w-2xl md:max-w-3xl sm:mt-6 md:mt-8 animate-hero-element animate-description [animation:fadeSlideIn_1s_ease-out_0.5s_both] text-base text-neutral-300 font-geist max-w-xl mt-6 mr-auto ml-auto">A modern, type-safe CLI framework with zero config. Beautiful prompts, async commands, and built-in validation out of the box. </p>


<div className="sm:mt-10 animate-hero-element animate-install [animation:fadeSlideIn_1s_ease-out_0.6s_both] mt-10">
<div className="inline-flex items-center gap-3 bg-neutral-900/80 backdrop-blur ring-1 ring-white/10 rounded-xl px-5 py-4 text-left">
<svg className="text-emerald-400 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
<code className="text-sm sm:text-base font-geist-mono text-white">npm install vibecli</code>
<button aria-label="Copy to clipboard" className="ml-2 p-1.5 hover:bg-white/10 rounded transition">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect>
<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
</svg>
</button>
</div>
</div><section className="z-10 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 [animation:fadeSlideIn_1s_ease-out_0.8s_both] text-center max-w-7xl mt-12 mr-auto ml-auto pr-4 pl-4 relative space-y-8">
<div className="relative max-w-5xl mx-auto">

<div className="relative overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 bg-neutral-900/80 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400 font-geist">
<svg className="text-emerald-400" fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="4 17 10 11 4 5"></polyline>
<line x1="12" x2="20" y1="19" y2="19"></line>
</svg>
<span className="font-geist-mono">bash</span>
</div>
<div className="w-16"></div>
</div>

<div className="p-6 font-geist-mono text-sm bg-neutral-950 min-h-[400px]">

<div className="flex items-center gap-2 mb-4">
<span className="text-emerald-400">$</span>
<span className="text-white">vibecli create my-app</span>
<span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse"></span>
</div>

<div className="space-y-3 text-neutral-300">

<div className="flex items-start gap-2">
<svg className="text-indigo-400 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<div className="">
<p className="text-white">Welcome to VibeCLI!</p>
<p className="text-neutral-500 text-xs">Let's set up your new project</p>
</div>
</div>

<div className="ml-6 space-y-2 mt-4">
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-emerald-400">✓</span>
<span className="text-neutral-400">Project template selected</span>
</div>
<div className="flex items-center gap-2">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
<span className="text-emerald-400">✓</span>
<span className="text-neutral-400">Dependencies installed</span>
</div>
<div className="flex items-center gap-2">
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
</div>
<span className="text-blue-400">⟳</span>
<span className="text-blue-400">Configuring TypeScript...</span>
</div>
</div>

<div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
<p className="text-white mb-3">? What features would you like?</p>
<div className="space-y-2 ml-2">
<div className="flex items-center gap-2">
<span className="text-emerald-400">◉</span>
<span className="text-white">TypeScript Support</span>
</div>
<div className="flex items-center gap-2">
<span className="text-emerald-400">◉</span>
<span className="text-white">Auto Validation</span>
</div>
<div className="flex items-center gap-2">
<span className="text-neutral-500">◯</span>
<span className="text-neutral-400">Git Integration</span>
</div>
<div className="flex items-center gap-2">
<span className="text-emerald-400">◉</span>
<span className="text-white">Beautiful Prompts</span>
</div>
</div>
<p className="text-xs text-neutral-500 mt-3">Press space to select, enter to continue</p>
</div>

<div className="mt-4 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
<div className="flex items-start gap-2">
<svg className="text-emerald-400 mt-0.5 flex-shrink-0" fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<div>
<p className="text-emerald-400 font-semibold">✨ Project created successfully!</p>
<div className="mt-2 text-xs text-neutral-400 space-y-1">
<p>cd my-app</p>
<p>npm run dev</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-20 hidden lg:block">
<div className="w-48 p-4 rounded-xl bg-neutral-900 border border-white/10 shadow-xl backdrop-blur">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
<svg className="text-indigo-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<span className="text-xs text-white font-semibold font-geist">Type Safe</span>
</div>
<p className="text-xs text-neutral-400 font-geist">Full TypeScript</p>
</div>
</div>
<div className="absolute -left-6 bottom-20 hidden lg:block">
<div className="w-48 p-4 rounded-xl bg-neutral-900 border border-white/10 shadow-xl backdrop-blur">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
<span className="text-xs text-white font-semibold font-geist">Lightning Fast</span>
</div>
<p className="text-xs text-neutral-400 font-geist">Instant startup</p>
</div>
</div>
</div>

</section>
</section>
</div>
</div>
</header>

<section className="z-10 sm:mt-24 mt-24 mb-20 relative">
<div className="text-center mb-8 max-w-7xl mx-auto">
</div>
</section>


<section className="z-10 sm:px-6 lg:px-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 text-center max-w-7xl mt-12 mr-auto ml-auto pr-4 pl-4 relative space-y-8">
<div className="text-center mb-12">
<p className="uppercase [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-xs text-neutral-400 tracking-[0.18em] font-geist mb-4">See It In Action</p>
<h2 className="sm:text-5xl md:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight font-geist mb-4">
    Experience the power
  </h2>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-base text-neutral-300 font-geist max-w-2xl mr-auto ml-auto">
    Watch VibeCLI handle complex workflows with elegant prompts and instant feedback
  </p>
</div>
<div className="sm:p-5 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll pt-4 pr-4 pb-4 pl-4 space-y-4">

<div className="relative rounded-xl ring-1 ring-inset ring-white/5 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 overflow-hidden">

<div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-neutral-900/80">
<div className="flex items-center gap-1.5 text-neutral-300">
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="flex-1 px-3">
<div className="mx-auto max-w-xs sm:max-w-sm rounded-md bg-neutral-800/60 px-3 py-1 text-center text-[10px] sm:text-xs text-neutral-400 ring-1 ring-white/5 font-geist-mono">
          vibecli.ts</div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400">
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-[42px_1fr]">

<aside className="hidden sm:flex flex-col items-center gap-3 py-4 border-r border-white/10">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m5 12-3 3 3 3"></path><path d="m9 18 3-3-3-3"></path></svg>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle className="" cx="12" cy="12" r="3"></circle></svg>
</span>
</aside>

<div className="p-4 sm:p-5">
<div className="relative ring-inset sm:p-4 overflow-hidden bg-black/40 ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3" style={{height: '320px'}}>
<div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10">
</div>

<div className="overflow-hidden h-full relative">
<div className="font-geist-mono text-[12px] sm:text-[13px] leading-relaxed" style={{animation: 'smoothCodeScroll 20s linear infinite'}}>

<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">1</span>
<span className=""><span className="text-purple-400">import</span> <span className="text-white">{ cli }</span>
<span className="text-purple-400">from</span> <span className="text-emerald-400">'vibecli'</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">2</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">3</span>
<span className="whitespace-pre"><span className="text-blue-400">cli</span>.<span className="text-pink-400">command</span>(<span className="text-emerald-400">'init'</span>)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">4</span>
<span className="whitespace-pre">  .<span className="text-pink-400">description</span>(<span className="text-emerald-400">'Initialize project'</span>)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">5</span>
<span className="whitespace-pre">  .<span className="text-pink-400">action</span>(<span className="text-purple-400">async</span>
                () =&gt; {</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">6</span>
<span className="whitespace-pre"> <span className="text-blue-400">console</span>.<span className="text-pink-400">log</span>(<span className="text-emerald-400">'✨ Done!'</span>)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">7</span>
<span className="whitespace-pre">  })</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">8</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">9</span>
<span className=""><span className="text-purple-400">cli</span>.<span className="text-pink-400">parse</span>(<span className="text-blue-400">process</span>.argv)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">10</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">11</span>
<span className="whitespace-pre"><span className="text-neutral-500">// Full TypeScript support</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">12</span>
<span className="whitespace-pre"><span className="text-neutral-500">// Auto validation with Zod</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">13</span>
<span className="whitespace-pre"><span className="text-neutral-500">// Beautiful prompts built-in</span></span>
</div>

<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">14</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">15</span>
<span className="whitespace-pre"><span className="text-purple-400">const</span>
<span className="text-white">options</span> = <span className="text-purple-400">await</span>
<span className="text-blue-400">cli</span>.<span className="text-pink-400">prompt</span>({</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">16</span>
<span className="whitespace-pre">  name: { <span className="text-blue-400">type</span>:
                <span className="text-emerald-400">'text'</span> },</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">17</span>
<span className="whitespace-pre">  features: { <span className="text-blue-400">type</span>:
                <span className="text-emerald-400">'multiselect'</span> }</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">18</span>
<span className="whitespace-pre">})</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">19</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">20</span>
<span className="whitespace-pre"><span className="text-neutral-500">// Lightning fast CLI framework</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">21</span>
<span className="whitespace-pre"><span className="text-neutral-500">// Zero config, just works</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">22</span>
<span></span>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/5 to-transparent pointer-events-none z-10">
</div>
<style>
            @keyframes smoothCodeScroll {
              0% {
                transform: translateY(0);
              }

              100% {
                transform: translateY(-50%);
              }
            }

            /* Pause animation on hover */
            .relative:hover [style*="smoothCodeScroll"] {
              animation-play-state: paused;
            }
          </style>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll max-w-4xl mt-16 mr-auto ml-auto gap-x-6 gap-y-6">
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/30 flex items-center justify-center mx-auto mb-3">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M8 12h8"></path>
<path d="M12 8v8"></path>
</svg>
</div>
<p className="text-sm font-medium text-white mb-1 font-geist">Interactive Prompts</p>
<p className="text-xs text-neutral-400 font-geist">Beautiful CLI interfaces</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center mx-auto mb-3">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<p className="text-sm font-medium text-white mb-1 font-geist">Auto Validation</p>
<p className="text-xs text-neutral-400 font-geist">Built-in error handling</p>
</div>
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-pink-500/10 ring-1 ring-pink-500/30 flex items-center justify-center mx-auto mb-3">
<svg className="text-pink-400" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<p className="text-sm font-medium text-white mb-1 font-geist">Full Type Safety</p>
<p className="text-xs text-neutral-400 font-geist">TypeScript first</p>
</div>
</div>
</section><section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-20 mr-auto mb-20 ml-auto pt-20 pr-4 pb-20 pl-4 relative">
<div className="text-center mb-12">
<p className="uppercase [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-xs text-neutral-400 tracking-[0.18em] font-geist mb-4">How It Works</p>
<h2 className="sm:text-5xl md:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight font-geist mb-4">Built for developers</h2>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-base text-neutral-300 font-geist max-w-2xl mr-auto ml-auto">VibeCLI removes the pain of building command-line tools so you can focus on shipping features, not boilerplate.</p>
</div>
<section className="sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll max-w-7xl mt-24 mr-auto mb-24 ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-white/10">
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">

<div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.05] text-4xl text-white tracking-tight mt-6 font-geist font-light" style={{}}>
          Write CLI tools that feel native
        </h2>
<p className="sm:mt-6 sm:text-base text-sm text-neutral-300 max-w-[48ch] mt-6 font-geist">
          Intuitive API that gets out of your way. Focus on building features, not boilerplate.
        </p>
<div className="flex flex-col sm:flex-row sm:gap-4 sm:mt-10 md:mt-12 md:mb-12 mt-10 mb-12 gap-x-3 gap-y-3 items-center justify-center">
<a className="styled-button inline-flex items-center justify-center transition sm:text-base sm:w-auto animate-hero-element animate-cta-1 text-sm font-medium text-white w-full font-geist" href="/docs" style={{position: 'relative', padding: '0.75rem 1.5rem', fontSize: '0.875rem', fontWeight: '500', color: 'rgb(255, 255, 255)', background: 'linear-gradient(rgb(23, 23, 23), rgb(36, 36, 36))', borderRadius: '9999px', cursor: 'pointer', boxShadow: 'rgb(0, 0, 0) 0px 2px 4px, rgba(0, 0, 0, 0.4) 0px 10px 20px', border: '1px solid rgb(41, 41, 41)'}}>
<style>
                .styled-button::before {
                  content: "";
                  position: absolute;
                  top: -2px;
                  right: -1px;
                  bottom: -1px;
                  left: -1px;
                  background: linear-gradient(to bottom, #292929, #000000);
                  z-index: -1;
                  border-radius: 9999px;
                  transition: all 0.2s ease;
                  opacity: 1;
                }
                .styled-button:hover {
                  background: linear-gradient(to bottom, #1a1a1a, #2a2a2a);
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 1), 0 15px 30px rgba(0, 0, 0, 0.6);
                }
                .styled-button:hover::before {
                  background: linear-gradient(to bottom, #3a3a3a, #1a1a1a);
                }
              </style>
              Read the Docs
              <div className="ml-2">
<svg className="" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path>
</svg>
</div>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition sm:text-base sm:px-6 sm:py-3 sm:w-auto animate-hero-element animate-cta-2 text-sm font-medium text-white/70 bg-white/5 w-full h-14 ring-white/10 ring-1 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm backdrop-blur font-geist" href="/examples">
              View Examples
            </a>
</div>
</div>

<div className="overflow-hidden lg:border-t-0 lg:border-l order-1 lg:order-2 sm:p-10 lg:p-12 flex bg-neutral-950 border-white/10 border-t px-6 py-6 relative items-center justify-center">
<div className="relative w-full max-w-lg">

<div className="relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="overflow-hidden bg-neutral-900 ring-white/10 ring-1 rounded-2xl shadow-2xl">
<div className="flex bg-neutral-900/80 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
</div>
<span className="text-[10px] text-neutral-400 font-geist">cli.ts</span>
</div>
<div className="p-4">
<div className="font-geist-mono text-[11px] sm:text-[12px] leading-relaxed text-neutral-300 space-y-1">
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">1</span>
<span><span className="text-purple-400 font-geist">import</span> <span className="text-white font-geist">{ cli }</span> <span className="text-purple-400 font-geist">from</span> <span className="text-amber-400 font-geist">'vibecli'</span></span>
</div>
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">2</span>
<span></span>
</div>
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">3</span>
<span className=""><span className="text-blue-400 font-geist">cli</span><span className="text-white font-geist">.</span><span className="text-pink-400 font-geist">command</span><span className="text-white font-geist">(</span><span className="text-amber-400 font-geist">'init'</span><span className="text-white font-geist">)</span></span>
</div>
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">4</span>
<span className=""><span className="text-white font-geist">  .</span><span className="text-pink-400 font-geist">description</span><span className="text-white font-geist">(</span><span className="text-amber-400 font-geist">'Initialize project'</span><span className="text-white font-geist">)</span></span>
</div>
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">5</span>
<span className=""><span className="text-white font-geist">  .</span><span className="text-pink-400 font-geist">action</span><span className="text-white font-geist">(</span><span className="text-purple-400 font-geist">async</span> <span className="text-white font-geist">() =&gt; {</span></span>
</div>
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">6</span>
<span><span className="text-white">    </span><span className="text-blue-400 font-geist">console</span><span className="text-white font-geist">.</span><span className="text-pink-400 font-geist">log</span><span className="text-white font-geist">(</span><span className="text-amber-400 font-geist">'✨ Done!'</span><span className="text-white font-geist">)</span></span>
</div>
<div className="flex gap-3">
<span className="text-neutral-600 select-none w-4 text-right font-geist">7</span>
<span><span className="text-white font-geist">  })</span></span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-8 -right-8 z-20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="ring-inset overflow-hidden bg-neutral-900 border-white/10 border ring-white/5 ring-1 rounded-2xl shadow-2xl" style={{width: '280px'}}>
<div className="h-40 relative">
<img alt="" className="opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fcac6ae1-fb6e-4c48-b5a9-39c16f529be7_800w.jpg"/>
<div className="bg-gradient-to-tr from-indigo-600/30 to-pink-500/20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute right-3 top-3 w-32 rounded-xl bg-neutral-900/80 border border-white/10 backdrop-blur p-2.5 shadow-lg">
<div className="flex items-center gap-2 text-[10px] font-medium text-neutral-200">
<svg className="text-blue-400 flex-shrink-0" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="4 17 10 11 4 5"></polyline>
<line className="" x1="12" x2="20" y1="19" y2="19"></line>
</svg>
<span className="truncate font-geist">CLI Running</span>
</div>
<div className="mt-2 space-y-1">
<div className="h-1 w-full max-w-20 rounded bg-emerald-500/40"></div>
<div className="h-1 w-full max-w-16 rounded bg-white/20"></div>
<div className="h-1 w-full max-w-14 rounded bg-white/10"></div>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-1.5">
<div className="rounded-lg bg-neutral-900/80 border border-white/10 backdrop-blur px-2 py-1 flex items-center gap-1">
<span className="text-[9px] text-neutral-300 rounded bg-white/5 border border-white/10 px-1.5 py-0.5 font-geist">⌘</span>
<span className="text-[9px] text-neutral-400 font-geist">K</span>
</div>
<div className="rounded-lg bg-neutral-900/80 border border-white/10 backdrop-blur px-1.5 py-1 flex items-center gap-0.5">
<span className="text-[9px] text-neutral-300 rounded bg-white/5 border border-white/10 px-1.5 py-0.5 font-geist">↑</span>
<span className="text-[9px] text-neutral-300 rounded bg-white/5 border border-white/10 px-1.5 py-0.5 font-geist">↓</span>
</div>
</div>
</div>
<div className="flex gap-2 text-[10px] text-neutral-400 border-white/10 border-t pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline className="" points="20 6 9 17 4 12"></polyline>
</svg>
<span className="truncate font-geist">Interactive CLI interface</span>
</div>
</div>
</div>

<div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-2xl"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-orange-600/20 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</div>
</section><div className="grid grid-cols-2 sm:grid-cols-4 sm:ml-14 sm:mr-14 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll mt-14 mr-14 ml-14 gap-x-8 gap-y-8">
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>50k+</p>
<p className="text-sm text-neutral-200 font-geist">Weekly downloads</p>
<p className="text-xs text-neutral-400 font-geist">Growing fast on npm</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>3.2k</p>
<p className="text-sm text-neutral-200 font-geist">GitHub stars</p>
<p className="text-xs text-neutral-400 font-geist">Active community</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>100%</p>
<p className="text-sm text-neutral-200 font-geist">Type coverage</p>
<p className="text-xs text-neutral-400 font-geist">Full TypeScript support</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>&lt;5ms</p>
<p className="text-sm text-neutral-200 font-geist">Startup time</p>
<p className="text-xs text-neutral-400 font-geist">Lightning fast execution</p>
</div>
</div>

</section><section className="z-10 sm:px-6 lg:px-8 max-w-7xl mt-20 mr-auto mb-20 ml-auto pt-20 pr-4 pb-20 pl-4 relative">
<div className="text-center mb-12">
<p className="uppercase [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll text-xs text-neutral-400 tracking-[0.18em] font-geist mb-4">Developer-First</p>
<h2 className="sm:text-5xl md:text-6xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll text-4xl font-light text-white tracking-tight font-geist mb-4">Developer experience first</h2>
<p className="sm:text-lg [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll text-base text-neutral-300 font-geist max-w-2xl mr-auto ml-auto">Built by developers, for developers. VibeCLI removes the complexity of building command-line tools so you can focus on creating great user experiences.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll mb-10 gap-x-6 gap-y-6">
<div className="relative overflow-hidden ring-white/10 ring-1 rounded-xl bg-neutral-900/60 p-6">
<div className="mb-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/20 flex items-center justify-center ring-1 ring-indigo-500/30">
<svg className="text-indigo-400" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path><path className="" d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
</svg>
</div>
</div>
<p className="text-white text-base font-medium mb-2 font-geist">Type Safety</p>
<p className="text-white/70 text-sm font-geist">End-to-end TypeScript with full IntelliSense support</p>
</div>
<div className="relative overflow-hidden ring-white/10 ring-1 rounded-xl bg-neutral-900/60 p-6">
<div className="mb-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-600/20 flex items-center justify-center ring-1 ring-emerald-500/30">
<svg className="text-emerald-400" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
</div>
<p className="text-white text-base font-medium mb-2 font-geist">Auto Validation</p>
<p className="text-white/70 text-sm font-geist">Powered by Zod for runtime safety</p>
</div>
<div className="relative overflow-hidden ring-white/10 ring-1 rounded-xl bg-neutral-900/60 p-6">
<div className="mb-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center ring-1 ring-pink-500/30">
<svg className="text-pink-400" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
</div>
<p className="text-white text-base font-medium mb-2 font-geist">Zero Config</p>
<p className="text-white/70 text-sm font-geist">Works out of the box, customize when needed</p>
</div>
<div className="relative overflow-hidden ring-white/10 ring-1 rounded-xl bg-neutral-900/60 p-6">
<div className="mb-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/20 flex items-center justify-center ring-1 ring-amber-500/30">
<svg className="text-amber-400" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
</svg>
</div>
</div>
<p className="text-white text-base font-medium mb-2 font-geist">Blazing Fast</p>
<p className="text-white/70 text-sm font-geist">Minimal bundle, instant startup</p>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll mt-14 gap-x-8 gap-y-8">
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>50k+</p>
<p className="text-sm text-neutral-200 font-geist">Weekly downloads</p>
<p className="text-xs text-neutral-400 font-geist">Growing fast on npm</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>3.2k</p>
<p className="text-sm text-neutral-200 font-geist">GitHub stars</p>
<p className="text-xs text-neutral-400 font-geist">Active community</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>100%</p>
<p className="text-sm text-neutral-200 font-geist">Type coverage</p>
<p className="text-xs text-neutral-400 font-geist">Full TypeScript support</p>
</div>
<div className="space-y-1">
<p className="text-4xl sm:text-5xl text-white tracking-tight font-geist font-light" style={{}}>&lt;5ms</p>
<p className="text-sm text-neutral-200 font-geist">Startup time</p>
<p className="text-xs text-neutral-400 font-geist">Lightning fast execution</p>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:mt-24 lg:mt-32 sm:mb-24 lg:mb-32 sm:pt-12 lg:pt-16 sm:pr-6 sm:pb-12 lg:pb-16 sm:pl-6 mt-24 mr-auto mb-24 ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="overflow-hidden sm:p-8 lg:p-12 sm:rounded-3xl sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 ring-white/10 ring-1 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll bg-neutral-900 max-w-7xl rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
<div className="text-center">
<p className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-neutral-400 font-geist">Quick Start</p>
<h2 className="mt-2 sm:mt-3 text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight sm:tracking-tighter font-geist font-light" style={{}}>Up and running in 60 seconds</h2>
</div>
<p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-full sm:max-w-[42ch] text-center mx-auto font-geist">
          Three simple steps to create your first CLI tool with VibeCLI.
        </p>
</div>

<div className="mb-12 sm:mb-16">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
<div className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<div className="text-3xl sm:text-4xl text-indigo-400 mb-3 font-geist font-light" style={{}}>01</div>
<h3 className="text-lg sm:text-xl font-medium text-white mb-3 font-geist" style={{}}>Install</h3>
<div className="bg-neutral-950/80 rounded-lg p-3 mb-3">
<code className="text-xs sm:text-sm text-emerald-400 font-geist">npm install vibecli</code>
</div>
<p className="text-xs sm:text-sm text-neutral-400 font-geist">Add VibeCLI to your project</p>
</div>
<div className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<div className="text-3xl sm:text-4xl text-purple-400 mb-3 font-geist font-light" style={{}}>02</div>
<h3 className="text-lg sm:text-xl font-medium text-white mb-3 font-geist" style={{}}>Create</h3>
<div className="bg-neutral-950/80 rounded-lg p-3 mb-3">
<code className="text-xs sm:text-sm text-emerald-400 font-geist">vibecli init</code>
</div>
<p className="text-xs sm:text-sm text-neutral-400 font-geist">Generate your CLI scaffold</p>
</div>
<div className="relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<div className="text-3xl sm:text-4xl text-pink-400 mb-3 font-geist font-light" style={{}}>03</div>
<h3 className="text-lg sm:text-xl font-medium text-white mb-3 font-geist" style={{}}>Ship</h3>
<div className="bg-neutral-950/80 rounded-lg p-3 mb-3">
<code className="text-xs sm:text-sm text-emerald-400 font-geist">npm run build</code>
</div>
<p className="text-xs sm:text-sm text-neutral-400 font-geist">Build and publish to npm</p>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center">
<a className="inline-flex items-center gap-3 hover:bg-white/10 transition-colors text-sm text-white bg-white/5 h-12 ring-white/10 ring-1 rounded-full pr-2 pl-5 font-geist" href="/docs">
          Read Full Documentation
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white text-neutral-900">
<svg height="16" style={{stroke: 'currentColor', strokeWidth: '1.8', fill: 'none'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4 relative">
<div className="relative overflow-hidden rounded-3xl bg-neutral-900 ring-1 ring-white/10">
<div className="relative grid grid-cols-1 lg:grid-cols-2">
<div className="sm:p-10 lg:border-b-0 lg:border-r border-white/10 border-b pt-6 pr-6 pb-6 pl-6">
<p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 font-geist">Join the Community</p>
<h2 className="mt-2 text-3xl sm:text-4xl text-white tracking-tighter font-geist font-light" style={{}}>Build together</h2>
<p className="mt-3 text-sm text-neutral-300 font-geist">Get help, share your CLI tools, and contribute to making VibeCLI even better.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-neutral-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              Active Discord community
            </li>
<li className="flex items-center gap-3 text-neutral-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              Weekly office hours
            </li>
<li className="flex items-center gap-3 text-neutral-200 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              Open source contributors welcome
            </li>
</ul>
</div>
<div className="p-6 sm:p-10 space-y-6">
<div className="">
<a className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="https://github.com/vibecli">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
<svg className="text-white" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</div>
<div className="">
<p className="text-sm font-medium text-white font-geist">GitHub</p>
<p className="text-xs text-neutral-400 font-geist">Star us on GitHub</p>
</div>
</div>
<svg className="text-neutral-400 group-hover:text-white transition" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="">
<a className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="https://discord.gg/vibecli">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
<svg className="text-white" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium text-white font-geist">Discord</p>
<p className="text-xs text-neutral-400 font-geist">Join our community</p>
</div>
</div>
<svg className="text-neutral-400 group-hover:text-white transition" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="">
<a className="group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="https://twitter.com/vibecli">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center">
<svg className="text-white" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium text-white font-geist">Twitter</p>
<p className="text-xs text-neutral-400 font-geist">Follow for updates</p>
</div>
</div>
<svg className="text-neutral-400 group-hover:text-white transition" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="sm:p-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll bg-neutral-900/50 border-neutral-800 border rounded-3xl mt-4 mr-4 mb-10 ml-4 pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div>
<p className="text-lg font-medium text-white font-geist">VibeCLI</p>
<p className="text-xs text-neutral-500 font-geist">Build CLI tools at lightning speed</p>
</div>
</div>
<p className="text-sm text-neutral-400 mb-6 font-geist">
          The modern framework for building beautiful, type-safe command-line applications. Open source and free forever.
        </p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="https://github.com/vibecli">
<svg className="text-white" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="https://twitter.com/vibecli">
<svg className="text-white" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition" href="https://discord.gg/vibecli">
<svg className="text-white" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<p className="text-xs text-neutral-500 mb-3 font-geist">Product</p>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/docs">Documentation</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/examples">Examples</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/api">API Reference</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/changelog">Changelog</a></li>
</ul>
</div>
<div className="">
<p className="text-xs text-neutral-500 mb-3 font-geist">Community</p>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/discord">Discord</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/github">GitHub</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/contribute">Contributing</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/showcase">Showcase</a></li>
</ul>
</div>
<div>
<p className="text-xs text-neutral-500 mb-3 font-geist">Resources</p>
<ul className="space-y-2">
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/blog">Blog</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/guides">Guides</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/support">Support</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="/license">License</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-neutral-500 font-geist">© <span className="font-geist" id="year">2025</span> VibeCLI — MIT License</p>
<div className="flex items-center gap-4 text-xs text-neutral-500 font-geist">
<a className="hover:text-neutral-300 transition font-geist" href="/privacy">Privacy</a>
<a className="hover:text-neutral-300 transition font-geist" href="/terms">Terms</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative ml-auto h-full w-[85%] max-w-sm bg-neutral-950 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<span className="text-white font-semibold font-geist">VibeCLI</span>
<button aria-label="Close menu" className="inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15" id="closeMenu">
<svg height="20" style={{stroke: 'currentColor', strokeWidth: '1.5', fill: 'none'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<nav className="mt-6 flex flex-col gap-2 text-base">
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="/docs">Docs</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="/examples">Examples</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="/api">API</a>
<a className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10 font-geist" href="/community">Community</a>
</nav>
<div className="mt-6">
<a className="inline-flex items-center justify-center w-full text-sm text-white bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-600 rounded-full h-11 px-6 ring-1 ring-indigo-400/30 font-geist" href="/docs/get-started">
          Get Started
        </a>
</div>
</div>
</div>


    </>
  );
}
