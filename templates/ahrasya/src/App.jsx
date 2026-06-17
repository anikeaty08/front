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



// Slide-up sequence animation on view
document.addEventListener('DOMContentLoaded', () => {
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
const io = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
const el = entry.target;
const delay = el.dataset.delay || '0s';
el.style.animation = `slide-up .8s cubic-bezier(.22,1,.36,1) ${delay} both`;
io.unobserve(el);
}
});
}, { threshold: 0.18 });
document.querySelectorAll('[data-animate]').forEach((el) => {
el.style.opacity = '0';
el.style.transform = 'translateY(24px)';
io.observe(el);
});
}
// Icons
if (window.lucide) lucide.createIcons();
});



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    // Year
    document.getElementById('y').textContent = new Date().getFullYear();
  
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
      

<div className="aura-background-component fixed top-0 w-full -z-10 h-screen brightness-125"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div></div>

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'radial-gradient(transparent 1px, #0a0a0a 1px), radial-gradient(transparent 1px, #0a0a0a 1px)', backgroundPosition: '0 0, 24px 24px', backgroundSize: '48px 48px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
</div>

<header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-2">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br to-emerald-500 ring-1 ring-white/10 flex items-center justify-center from-blue-400">
<svg className="text-zinc-900" height="22" viewbox="0 0 24 24" width="22"><path d="M12 2l3.09 6.26L22 9.27l-5 4.74L18.18 22L12 18.77L5.82 22L7 14.01l-5-4.74l6.91-1.01L12 2z" fill="currentColor"></path></svg>
</div>
<span className="text-zinc-200 text-sm">Aurora</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-300 hover:text-white transition" href="#">Work</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#">Services</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#">About</a>
<a className="text-sm text-zinc-300 hover:text-white transition" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 h-10">
<svg className="lucide lucide-search w-4 h-4 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input aria-label="Search" className="bg-transparent outline-none text-xs text-zinc-200 placeholder-zinc-500 w-36" placeholder="Search"/>
</div>
<a className="inline-flex items-center gap-2 h-10 rounded-xl px-4 text-zinc-900 text-sm font-medium hover:brightness-95 transition bg-blue-400" href="#">
<span className="">Get Started</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<section className="relative py-16 sm:py-24">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-zinc-300" data-animate="" data-delay=".05s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s 1 normal both running slide-up'}}>
<span className="inline-flex items-center gap-1">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-blue-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Available for freelance
          </span>
</div>
<h1 className="mt-6 text-white font-medium tracking-tight leading-[1.05] text-[64px] md:text-[80px]" data-animate="" data-delay=".1s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s 1 normal both running slide-up'}}>
          I design and build high‑performing, beautiful web experiences.
        </h1>
<p className="mt-5 text-zinc-400 text-[16px] md:text-[20px] max-w-2xl" data-animate="" data-delay=".2s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s 1 normal both running slide-up'}}>
          Crafting clean interfaces, robust systems, and delightful motion for modern brands and startups.
        </p>
<div className="mt-8 flex flex-wrap items-center gap-3" data-animate="" data-delay=".3s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s 1 normal both running slide-up'}}>
<a className="inline-flex items-center gap-2 h-11 rounded-xl px-5 text-zinc-900 text-sm font-medium hover:brightness-95 transition bg-blue-400" href="#">
<span>Start a project</span>
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</a>
<a className="inline-flex items-center gap-2 h-11 rounded-xl px-5 border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/[0.08] transition" href="#">
<svg className="lucide lucide-play w-4 h-4 text-blue-300" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span>See work</span>
</a>
</div>
<div className="mt-10 flex items-center gap-6 grayscale opacity-80" data-animate="" data-delay=".4s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s 1 normal both running slide-up'}}>
<svg className="lucide lucide-github w-6 h-6 text-zinc-400" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-figma w-6 h-6 text-zinc-400" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-gitlab w-6 h-6 text-zinc-400" data-lucide="gitlab" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path></svg>
<svg className="lucide lucide-framer w-6 h-6 text-zinc-400" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>
<svg className="lucide lucide-codepen w-6 h-6 text-zinc-400" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg>
</div>
</div>

<div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6" data-animate="" data-delay=".45s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.45s 1 normal both running slide-up'}}>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="3D render" className="w-full h-[320px] md:h-[420px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6cb2add-ad9c-4365-a70f-99043c019094_800w.jpg"/>
</div>
<div className="grid grid-rows-2 gap-6">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Mountains" className="w-full h-[200px] md:h-[200px] object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
<img alt="Minimal" className="w-full h-[200px] md:h-[200px] object-cover" src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur" data-animate="" data-delay=".1s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s 1 normal both running slide-up'}}>
<div className="grid md:grid-cols-4 gap-6 items-center">
<div className="md:col-span-2">
<h2 className="text-white font-medium tracking-tight text-[28px] md:text-[32px]">Hello, I’m a product-focused designer/developer.</h2>
<p className="mt-3 text-zinc-400 text-[13px] max-w-xl">
              Blending strategy, design, and engineering to turn ideas into scalable products that look great and perform even better.
            </p>
</div>
<div className="grid grid-cols-3 md:col-span-2 gap-4">
<div className="rounded-xl border border-white/10 bg-black/20 p-4">
<div className="text-white text-[28px] font-medium tracking-tight">35+</div>
<div className="text-[12px] text-zinc-400">Projects shipped</div>
</div>
<div className="rounded-xl border border-white/10 bg-black/20 p-4">
<div className="text-white text-[28px] font-medium tracking-tight">10yr</div>
<div className="text-[12px] text-zinc-400">Experience</div>
</div>
<div className="rounded-xl border border-white/10 bg-black/20 p-4">
<div className="text-white text-[28px] font-medium tracking-tight">100%</div>
<div className="text-[12px] text-zinc-400">Remote ready</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14">
<h3 className="text-white font-medium tracking-tight text-[28px] md:text-[32px]" data-animate="" data-delay=".05s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s 1 normal both running slide-up'}}>My Skills &amp; Services</h3>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-animate="" data-delay=".15s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s 1 normal both running slide-up'}}>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-zinc-200 text-sm font-medium">
<svg className="lucide lucide-palette w-4 h-4 text-blue-300" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Brand Strategy
          </div>
<p className="mt-2 text-[13px] text-zinc-400">Identity, guidelines, and systems.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-zinc-200 text-sm font-medium">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-blue-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Product Design
          </div>
<p className="mt-2 text-[13px] text-zinc-400">UX flows, UI kits, prototypes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-zinc-200 text-sm font-medium">
<svg className="lucide lucide-code w-4 h-4 text-blue-300" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg> Frontend Engineering
          </div>
<p className="mt-2 text-[13px] text-zinc-400">React, performance, accessibility.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-zinc-200 text-sm font-medium">
<svg className="lucide lucide-rocket w-4 h-4 text-blue-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Launch &amp; Growth
          </div>
<p className="mt-2 text-[13px] text-zinc-400">Sites, experiments, analytics.</p>
</div>
</div>
</section>

<section className="py-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8" data-animate="" data-delay=".05s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s 1 normal both running slide-up'}}>
<h3 className="text-white font-medium tracking-tight text-[28px] md:text-[32px]">Cutting‑Edge Tools I Use</h3>
<p className="mt-2 text-[13px] text-zinc-400 max-w-2xl">
          A pragmatic stack that balances velocity with code excellence.
        </p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
<svg className="lucide lucide-figma w-4 h-4 text-blue-300" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg><span className="text-[13px]">Figma</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
<svg className="lucide lucide-framer w-4 h-4 text-blue-300" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg><span className="text-[13px]">Framer</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
<i className="w-4 h-4 text-blue-300" data-lucide="react"></i><span className="text-[13px]">React</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
<svg className="lucide lucide-github w-4 h-4 text-blue-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg><span className="text-[13px]">GitHub</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
<svg className="lucide lucide-notebook-text w-4 h-4 text-blue-300" data-lucide="notebook-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M9.5 8h5"></path><path d="M9.5 12H16"></path><path d="M9.5 16H14"></path></svg><span className="text-[13px]">Notion</span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
<svg className="lucide lucide-slack w-4 h-4 text-blue-300" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg><span className="text-[13px]">Slack</span>
</div>
</div>
</div>
</section>

<section className="py-14">
<div className="flex items-center justify-between">
<h3 className="text-white font-medium tracking-tight text-[28px] md:text-[32px]" data-animate="" data-delay=".05s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s 1 normal both running slide-up'}}>My Featured Projects</h3>
<span className="inline-flex items-center gap-1 text-[12px] rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-300" data-animate="" data-delay=".1s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s 1 normal both running slide-up'}}>
<svg className="lucide lucide-sparkle w-3.5 h-3.5 text-blue-300" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg> Updated
        </span>
</div>
<div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5" data-animate="" data-delay=".1s" href="#" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s 1 normal both running slide-up'}}>
<div className="relative">
<img alt="Finance Landing" className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-zinc-100 text-sm font-medium">Emission Finance Landing</div>
<p className="text-[12px] text-zinc-400">Conversion-focused redesign</p>
</div>
<div className="h-8 w-8 rounded-lg text-zinc-900 flex items-center justify-center bg-blue-400">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5" data-animate="" data-delay=".15s" href="#" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s 1 normal both running slide-up'}}>
<div className="relative">
<img alt="Ecommerce" className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-zinc-100 text-sm font-medium">Radiant Storefront</div>
<p className="text-[12px] text-zinc-400">Upsells with motion</p>
</div>
<div className="h-8 w-8 rounded-lg text-zinc-900 flex items-center justify-center bg-blue-400">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5" data-animate="" data-delay=".2s" href="#" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s 1 normal both running slide-up'}}>
<div className="relative">
<img alt="SaaS Dashboard" className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-zinc-100 text-sm font-medium">CloudFlow Dashboard</div>
<p className="text-[12px] text-zinc-400">Realtime analytics UI</p>
</div>
<div className="h-8 w-8 rounded-lg text-zinc-900 flex items-center justify-center bg-blue-400">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 md:col-span-2 lg:col-span-1" data-animate="" data-delay=".25s" href="#" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s 1 normal both running slide-up'}}>
<div className="relative">
<img alt="Agency site" className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-zinc-100 text-sm font-medium">North Studio</div>
<p className="text-[12px] text-zinc-400">Portfolio &amp; CMS</p>
</div>
<div className="h-8 w-8 rounded-lg text-zinc-900 flex items-center justify-center bg-blue-400">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5" data-animate="" data-delay=".3s" href="#" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s 1 normal both running slide-up'}}>
<div className="relative">
<img alt="Marketing" className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-zinc-100 text-sm font-medium">Tonic Marketing</div>
<p className="text-[12px] text-zinc-400">Lead-gen landing system</p>
</div>
<div className="h-8 w-8 rounded-lg text-zinc-900 flex items-center justify-center bg-blue-400">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>

<a className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5" data-animate="" data-delay=".35s" href="#" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.35s 1 normal both running slide-up'}}>
<div className="relative">
<img alt="Minimal Blog" className="w-full h-60 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="p-4 flex items-center justify-between">
<div>
<div className="text-zinc-100 text-sm font-medium">Minimal Knowledge Hub</div>
<p className="text-[12px] text-zinc-400">Fast content platform</p>
</div>
<div className="h-8 w-8 rounded-lg text-zinc-900 flex items-center justify-center bg-blue-400">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</a>
</div>
</section>

<div className="relative sm:p-12 flex pt-10 pr-10 pb-10 pl-30 items-center justify-center">
<div className="relative sm:h-96 w-full h-400 max-w-7xl max-h-full">
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>

<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s', borderRadius: '1rem', margin: '0 -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-10deg)', '--r': '-32'}}>
<div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
<div className="p-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4">
              "Working with Jeremi was a game‑changer. He translated our vision into a polished product and delivered beyond expectations — fast, reliable, and detail‑obsessed."
            </p>

<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Jordan Avery avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_3840w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900">Jordan Avery</div>
<div className="text-xs text-neutral-500">Head of Product, Acme Co.</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s', borderRadius: '1rem', margin: '0 -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-6deg)', '--r': '-6'}}>
<div className="absolute inset-4 rounded-xl bg-white/90 text-neutral-900 shadow-xl ring-1 ring-black/5 backdrop-blur overflow-hidden">
<div className="p-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4">
              "The platform's AI‑powered insights have completely transformed how I approach trading. The real‑time analytics and seamless interface make complex decisions feel effortless."
            </p>

<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Sarah Chen avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/149e33ce-f3dc-40ee-b985-cb0735411ff5_3840w.jpg"/>
<div className="">
<div className="text-xs font-medium text-neutral-900">Sarah Chen</div>
<div className="text-xs text-neutral-500">Senior Trader, FinTech Labs</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.06), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s', borderRadius: '1rem', margin: '0 -50px', backdropFilter: 'blur(10px)', transform: 'rotate(0deg)', '--r': '0'}}>
<div className="absolute inset-4 rounded-xl bg-white/80 text-neutral-900 shadow-lg ring-1 ring-black/5 backdrop-blur overflow-hidden">
<div className="p-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4">
              "Security was my biggest concern when choosing a crypto platform. Nebula's multi‑layer protection and transparent approach gave me the confidence to invest significantly."
            </p>

<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Marcus Rodriguez avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/890b16bf-eac1-46aa-b8b5-b74ae7a0d51a_3840w.jpg"/>
<div className="">
<div className="text-xs font-medium text-neutral-900">Marcus Rodriguez</div>
<div className="text-xs text-neutral-500">Portfolio Manager, InvestCorp</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<style>
        .container:hover .glass {
          transform: rotate(0deg) !important;
          margin: 0 -30px !important;
        }
      </style>
</div>
</div>
</div>

<section className="py-14">
<h3 className="text-white font-medium tracking-tight text-[28px] md:text-[32px]" data-animate="" data-delay=".05s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s 1 normal both running slide-up'}}>Got Any Questions? We’ve Got Answers.</h3>
<div className="mt-6 grid md:grid-cols-2 gap-4">
<details className="rounded-xl border border-white/10 bg-white/5 p-4 group" data-animate="" data-delay=".1s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s 1 normal both running slide-up'}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-zinc-200 font-medium">What’s your typical project scope?</span>
<svg className="lucide lucide-plus w-4 h-4 text-zinc-400 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 text-zinc-400 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-[13px] text-zinc-400">Usually 4–8 weeks covering discovery, design, implementation, and launch.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/5 p-4 group" data-animate="" data-delay=".15s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s 1 normal both running slide-up'}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-zinc-200 font-medium">Do you work with existing teams?</span>
<svg className="lucide lucide-plus w-4 h-4 text-zinc-400 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 text-zinc-400 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-[13px] text-zinc-400">Yes—happy to plug into your stack and workflows.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/5 p-4 group" data-animate="" data-delay=".2s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s 1 normal both running slide-up'}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-zinc-200 font-medium">How do we get started?</span>
<svg className="lucide lucide-plus w-4 h-4 text-zinc-400 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 text-zinc-400 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-[13px] text-zinc-400">Send a brief and we’ll schedule a 20‑minute call to align on goals and timeline.</p>
</details>
<details className="rounded-xl border border-white/10 bg-white/5 p-4 group" data-animate="" data-delay=".25s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.25s 1 normal both running slide-up'}}>
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm text-zinc-200 font-medium">What about ongoing support?</span>
<svg className="lucide lucide-plus w-4 h-4 text-zinc-400 group-open:hidden" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus w-4 h-4 text-zinc-400 hidden group-open:block" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</summary>
<p className="mt-3 text-[13px] text-zinc-400">Flexible retainers for iterations, A/B tests, and new features.</p>
</details>
</div>
</section>

<section className="py-16">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 md:p-10 relative overflow-hidden" data-animate="" data-delay=".05s" style={{opacity: '0', transform: 'translateY(24px)', animation: '0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.05s 1 normal both running slide-up'}}>
<div className="max-w-2xl">
<h3 className="text-white font-medium tracking-tight text-[32px] md:text-[40px]">Let’s Work Together</h3>
<p className="mt-3 text-[13px] text-zinc-400">Have an idea to bring to life? I’d love to hear about it.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 h-11 rounded-xl px-5 text-zinc-900 text-sm font-medium hover:brightness-95 transition bg-blue-400" href="#">
<span>Book a call</span>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex items-center gap-2 h-11 rounded-xl px-5 border border-white/10 bg-white/5 text-sm font-medium hover:bg-white/[0.08] transition" href="#">
<svg className="lucide lucide-mail w-4 h-4 text-blue-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Email me</span>
</a>
</div>
</div>
<div className="absolute -bottom-6 -right-4 text-[180px] md:text-[240px] font-medium tracking-tight text-white/5 select-none pointer-events-none">Aurora</div>
</div>
<footer className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-8 pb-10">
<p className="text-[12px] text-zinc-500">© <span id="y">2025</span> Aurora Studio. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-[12px] text-zinc-400 hover:text-zinc-200 transition" href="#">Privacy</a>
<a className="text-[12px] text-zinc-400 hover:text-zinc-200 transition" href="#">Terms</a>
<a className="text-[12px] text-zinc-400 hover:text-zinc-200 transition" href="#">Contact</a>
</div>
</footer>
</section>
</main>


    </>
  );
}
