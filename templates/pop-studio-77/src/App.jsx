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



      // Initialize icons with specific stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Mobile menu
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        if (btn && nav) {
          btn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
          });
        }
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      

<div className="w-full bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 grid place-items-center rounded-md border border-white/15 bg-neutral-900 text-white/90 group-hover:text-white transition-colors tracking-tight">
<span className="text-sm font-semibold">PS</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">POP STUDIO</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3.5 py-2 text-sm font-medium tracking-tight hover:bg-neutral-200 active:bg-neutral-300 outline outline-1 outline-white/10 transition-colors" href="#contact">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Get a proposal
            </a>
<button aria-label="Toggle menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-white/25 hover:bg-white/5 transition-colors" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden md:hidden pb-4" id="mobileNav">
<div className="mt-2 grid gap-1 rounded-lg border border-white/10 bg-neutral-900/60 p-2">
<a className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5" href="#services">Services</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5" href="#work">Work</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5" href="#process">Process</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-200 hover:bg-white/5" href="#reviews">Reviews</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-900 bg-white hover:bg-neutral-200 font-medium tracking-tight" href="#contact">Get a proposal</a>
</div>
</div>
</header>
</div>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-fuchsia-400" data-lucide="zap"></i>
              Modern, pop-forward studio
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Web, Branding, UX/UI—and scroll-stopping SNS banners.
            </h1>
<p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed">
              We design bold interfaces and brand systems that convert across web, mobile, and social. Fast iterations, measurable impact, zero fluff.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-3 text-sm font-medium tracking-tight hover:bg-neutral-200 active:bg-neutral-300 outline outline-1 outline-white/10 transition" href="#contact">
<i className="h-4 w-4" data-lucide="rocket"></i>
                Start a project
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900/60 px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 transition" href="#work">
<i className="h-4 w-4" data-lucide="play"></i>
                See our work
              </a>
</div>

<div className="mt-10 border-t border-white/10 pt-6">
<p className="text-xs uppercase tracking-wider text-neutral-400">Trusted by teams at</p>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6">
<div className="h-10 rounded-md border border-white/10 bg-neutral-900/60 grid place-items-center text-white/80 hover:text-white hover:border-white/20 transition">
<span className="text-sm font-semibold tracking-tight">NOVA</span>
</div>
<div className="h-10 rounded-md border border-white/10 bg-neutral-900/60 grid place-items-center text-white/80 hover:text-white hover:border-white/20 transition">
<span className="text-sm font-semibold tracking-tight">PULSE</span>
</div>
<div className="h-10 rounded-md border border-white/10 bg-neutral-900/60 grid place-items-center text-white/80 hover:text-white hover:border-white/20 transition">
<span className="text-sm font-semibold tracking-tight">ATLAS</span>
</div>
<div className="h-10 rounded-md border border-white/10 bg-neutral-900/60 grid place-items-center text-white/80 hover:text-white hover:border-white/20 transition">
<span className="text-sm font-semibold tracking-tight">MOSS</span>
</div>
<div className="h-10 rounded-md border border-white/10 bg-neutral-900/60 grid place-items-center text-white/80 hover:text-white hover:border-white/20 transition">
<span className="text-sm font-semibold tracking-tight">KEPLER</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-2">
<div className="aspect-[4/3] overflow-hidden rounded-xl">
<img alt="Creative web &amp; branding" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -left-6 w-40 sm:w-56 rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-fuchsia-300" data-lucide="megaphone"></i>
<span className="text-xs text-neutral-300">SNS Banner Concept</span>
</div>
<p className="mt-2 text-sm font-medium tracking-tight">30% higher CTR</p>
</div>
<div className="absolute -top-6 -right-6 w-40 sm:w-56 rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-cyan-300" data-lucide="sparkles"></i>
<span className="text-xs text-neutral-300">UI Refresh</span>
</div>
<p className="mt-2 text-sm font-medium tracking-tight">Ship in 2 sprints</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Services that move the needle</h2>
<p className="mt-2 text-neutral-300">Strategy to shipping—built for speed, quality, and social impact.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-neutral-900/60 px-3.5 py-2 text-sm text-white/90 hover:bg-white/5 transition" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
            Book a call
          </a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Web Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Conversion-focused sites with crisp typography, motion-ready layouts, and seamless handoff.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Responsive layouts</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Design systems</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="layout"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">UI Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Interface libraries and pixel-perfect components engineered for speed and clarity.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Component libraries</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Design tokens</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="compass"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">UX Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Research, flows, and wireframes to validate fast and ship with confidence.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>User research</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Prototyping</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Branding</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Naming, identity, and guidelines that scale from avatar to billboard.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Logo &amp; palette</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Brand systems</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">SNS Banner Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Thumb-stopping social assets optimized for CTR and brand recall.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Platform-specific sizing</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>A/B creative variants</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/60 p-5 hover:border-white/20 hover:bg-white/[0.06] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="code-2"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Dev Handoff</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Clean specs, redlines, and assets for a smooth build with your stack.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Design QA</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Accessible patterns</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected work</h2>
<p className="mt-2 text-neutral-300">Brand campaigns, web, and product UI that convert.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-neutral-900/60 px-3.5 py-2 text-sm text-white/90 hover:bg-white/5 transition" href="#contact">
<i className="h-4 w-4" data-lucide="inbox"></i>
            Request case studies
          </a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<a className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Brand performance" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551292831-023188e78222?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="megaphone"></i>SNS Campaign
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Color-pop launch assets</h3>
<p className="text-sm text-neutral-300">+28% CTR • +3.1x shares</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Product UI" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="layout"></i>UI Design
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Fintech dashboard system</h3>
<p className="text-sm text-neutral-300">Design system • Accessibility AA</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Brand identity" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>Branding
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Playful identity system</h3>
<p className="text-sm text-neutral-300">Logo, palette, type, guidelines</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Web design" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="globe"></i>Web Design
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Marketing site refresh</h3>
<p className="text-sm text-neutral-300">+38% signups • 1.6x time-on-page</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Research" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="compass"></i>UX
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Flows &amp; validation</h3>
<p className="text-sm text-neutral-300">Research, testing, insights</p>
</div>
</a>
<a className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900/60" href="#">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Social creatives" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-neutral-900/70 backdrop-blur px-2.5 py-1 text-xs text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="aperture"></i>Art Direction
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Color pop series</h3>
<p className="text-sm text-neutral-300">Motion-ready, export kit</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">A fast, transparent process</h2>
<div className="mt-8 grid md:grid-cols-4 gap-4 sm:gap-6">

<div className="relative rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-full bg-white/5 text-sm font-medium">1</div>
<h3 className="text-lg font-semibold tracking-tight">Discover</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Goals, audience, and metrics. Quick audit and roadmap.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="search"></i>1–3 days
            </div>
</div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-full bg-white/5 text-sm font-medium">2</div>
<h3 className="text-lg font-semibold tracking-tight">Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Rapid concepts, variants, and component system foundations.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="pen-tool"></i>1–2 weeks
            </div>
</div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-full bg-white/5 text-sm font-medium">3</div>
<h3 className="text-lg font-semibold tracking-tight">Refine</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Testing, polish, and motion-ready handoff.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="sliders"></i>3–5 days
            </div>
</div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-full bg-white/5 text-sm font-medium">4</div>
<h3 className="text-lg font-semibold tracking-tight">Launch</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Assets, specs, and support to go live with confidence.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="rocket"></i>1–3 days
            </div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="reviews">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What clients say</h2>
<p className="mt-2 text-neutral-300">Real results across web and social.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-fuchsia-400" data-lucide="star"></i> 4.9/5 average
          </div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Client 1" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Ava Park</p>
<p className="text-xs text-neutral-400">Head of Growth, NOVA</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Their SNS banners doubled CTR in week one. The web refresh feels premium and fast.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Client 2" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Diego Kim</p>
<p className="text-xs text-neutral-400">Product Lead, ATLAS</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Clean UI system, great handoff. We shipped in two sprints without rewrites.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<img alt="Client 3" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Mina Cho</p>
<p className="text-xs text-neutral-400">Brand Director, PULSE</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-300">Identity is cohesive and playful. Social kits made our team 3x faster.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Flexible ways to work</h2>
<div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="zap"></i>
<h3 className="text-lg font-semibold tracking-tight">Sprint</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">1–2 weeks for focused deliverables. Perfect for SNS campaigns or landing pages.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Fast impact</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-400" data-lucide="check"></i>Clear scope</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 ring-1 ring-fuchsia-500/20">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-300" data-lucide="repeat"></i>
<h3 className="text-lg font-semibold tracking-tight">Monthly</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Flexible retainer for ongoing design across product, web, and social.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-cyan-300" data-lucide="check"></i>Priority queue</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-cyan-300" data-lucide="check"></i>Async updates</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="briefcase"></i>
<h3 className="text-lg font-semibold tracking-tight">Project</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">End-to-end engagements for brand and product initiatives.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>Dedicated team</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-300" data-lucide="check"></i>Milestone billing</li>
</ul>
</div>
</div>
</div>
</section>

<section className="-16 sm:py-20 border-t border-white/10" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Tell us about your project</h2>
<p className="mt-2 text-neutral-300">We’ll reply within 24 hours with next steps and a rough timeline.</p>
<div className="mt-6 rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-white/5">
<i className="h-5 w-5 text-white/90" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Prefer a quick call?</p>
<p className="text-xs text-neutral-400">Mon–Fri, 9am–6pm</p>
</div>
</div>
<a className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3.5 py-2 text-sm text-white/90 hover:bg-white/5 transition" href="tel:+1234567890">
<i className="h-4 w-4" data-lucide="calendar"></i> Schedule 15 min
              </a>
</div>
</div>
<form className="rounded-xl border border-white/10 bg-neutral-900/60 p-5 grid gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-1">Full name</label>
<input className="w-full rounded-md bg-neutral-900 border border-white/15 px-3 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1">Email</label>
<input className="w-full rounded-md bg-neutral-900 border border-white/15 px-3 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1">Company</label>
<input className="w-full rounded-md bg-neutral-900 border border-white/15 px-3 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10" placeholder="Your company" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1">What do you need?</label>
<div className="grid sm:grid-cols-2 gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 active:bg-white/10 transition" type="button">
<i className="h-4 w-4" data-lucide="globe"></i> Web Design
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 active:bg-white/10 transition" type="button">
<i className="h-4 w-4" data-lucide="layout"></i> UI Design
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 active:bg-white/10 transition" type="button">
<i className="h-4 w-4" data-lucide="compass"></i> UX Design
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 active:bg-white/10 transition" type="button">
<i className="h-4 w-4" data-lucide="sparkles"></i> Branding
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 active:bg-white/10 transition" type="button">
<i className="h-4 w-4" data-lucide="megaphone"></i> SNS Banners
                </button>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-neutral-900 px-3 py-2 text-sm text-white/90 hover:bg-white/5 hover:border-white/25 active:bg-white/10 transition" type="button">
<i className="h-4 w-4" data-lucide="code-2"></i> Dev Handoff
                </button>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1">Project details</label>
<textarea className="w-full rounded-md bg-neutral-900 border border-white/15 px-3 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10" placeholder="Timeline, goals, links…" rows="4"></textarea>
</div>
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-neutral-400">We reply in under 24 hours.</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium tracking-tight hover:bg-neutral-200 active:bg-neutral-300 outline outline-1 outline-white/10 transition" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                Send request
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-md border border-white/15 bg-neutral-900 text-white/90">
<span className="text-sm font-semibold tracking-tight">PS</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white/90">POP STUDIO</span>
</div>
<p className="mt-4 text-sm text-neutral-300 max-w-md">Design for ambitious teams. Web experiences, bold brands, and social creative that performs.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-white/25 hover:bg-white/5 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="twitter"></i>
</a>
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-white/25 hover:bg-white/5 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="instagram"></i>
</a>
<a aria-label="Dribbble" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 hover:border-white/25 hover:bg-white/5 transition" href="#">
<i className="h-4.5 w-4.5" data-lucide="dribbble"></i>
</a>
</div>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Services</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#services">Web Design</a></li>
<li><a className="hover:text-white" href="#services">UX / UI</a></li>
<li><a className="hover:text-white" href="#services">Branding</a></li>
<li><a className="hover:text-white" href="#services">SNS Banners</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Company</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#work">Work</a></li>
<li><a className="hover:text-white" href="#process">Process</a></li>
<li><a className="hover:text-white" href="#reviews">Reviews</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<p className="text-xs text-neutral-400">© <span id="year"></span> POP STUDIO. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400">
<a className="hover:text-white/80" href="#">Privacy</a>
<span className="opacity-30">•</span>
<a className="hover:text-white/80" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
