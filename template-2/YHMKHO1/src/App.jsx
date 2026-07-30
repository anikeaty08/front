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



    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        let open = false;
        menuBtn.addEventListener('click', () => {
          open = !open;
          mobileNav.classList.toggle('hidden', !open);
          menuBtn.innerHTML = open
            ? '<i data-lucide="x" class="h-5 w-5 text-white/90"></i>'
            : '<i data-lucide="menu" class="h-5 w-5 text-white/90"></i>';
          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }
        });
      }

      // FAQ accordion
      document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
        const open = item.hasAttribute('data-open');
        const btn = item.querySelector('[data-accordion="faq"]');
        const content = item.querySelector('[data-qa="a"]');
        const plus = item.querySelector('[data-icon="plus"]');
        const minus = item.querySelector('[data-icon="minus"]');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        content.classList.toggle('hidden', !open);
        if (plus && minus) {
          plus.classList.toggle('hidden', open);
          minus.classList.toggle('hidden', !open);
        }
      });

      document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('[data-accordion-item]');
          const content = item.querySelector('[data-qa="a"]');
          const plus = item.querySelector('[data-icon="plus"]');
          const minus = item.querySelector('[data-icon="minus"]');
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          content.classList.toggle('hidden');
          if (plus && minus) {
            plus.classList.toggle('hidden');
            minus.classList.toggle('hidden');
          }
          if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          }
        });
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
      

<header className="relative">
<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2400&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
</div>

<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="uppercase text-lg font-semibold tracking-tighter">BrandName</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/90 hover:bg-white/10 transition" href="#">Overview</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition" href="#">Features</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition" href="#">Pricing</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition" href="#">Resources</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#">
              Get started
            </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" id="menuBtn">
<i className="h-5 w-5 text-white/90" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90" href="#">Overview</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80" href="#">Features</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80" href="#">Pricing</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80" href="#">Resources</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition" href="#">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Get started
              </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10">
<div className="max-w-5xl sm:px-6 lg:px-8 sm:pt-24 lg:pt-28 lg:pb-40 text-center mx-auto pt-16 px-4 pb-24">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
<i className="h-4 w-4 text-white/80" data-lucide="sparkles"></i>
<span className="text-xs font-medium text-white/80">New template</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-light tracking-tight">
          Lorem ipsum, crafted for velocity.
        </h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Vestibulum ante ipsum primis in faucibus orci luctus.
        </p>
<div className="flex gap-3 mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition" href="#">
            Primary action
          </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 ring-white/15 transition text-sm font-medium text-white bg-white/10 rounded-full py-3 px-5 backdrop-blur" href="#">
            Secondary action
          </a>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="lock"></i>
<span className="uppercase tracking-wider">Private by design</span>
</div>
</div>
</section>
</header>

<section className="relative z-10 -mt-12 pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/90" data-lucide="palette"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Feature one</p>
<p className="text-xs text-white/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/90" data-lucide="trending-up"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Feature two</p>
<p className="text-xs text-white/70">Integer posuere erat a ante venenatis dapibus posuere velit.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/90" data-lucide="wallet"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Feature three</p>
<p className="text-xs text-white/70">Aenean lacinia bibendum nulla sed consectetur.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<i className="h-4 w-4 text-white/90" data-lucide="shield-check"></i>
</span>
<div>
<p className="text-sm font-semibold tracking-tight">Feature four</p>
<p className="text-xs text-white/70">Etiam porta sem malesuada magna mollis euismod.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mx-4 sm:mx-8 p-6 backdrop-blur">
<div className="flex items-center gap-2 text-sm text-white/70">
<span className="font-normal">Workflow</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.95] font-medium text-white tracking-tight">Build once, reuse everywhere.</h2>
<p className="mt-1 text-sm sm:text-base text-white/70">Start with a single idea—compose, iterate, and scale across surfaces.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

<article className="sm:p-6 flex flex-col min-h-[360px] ring-1 ring-white/15 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/[0.07] rounded-2xl p-5 backdrop-blur justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="h-4 w-4 text-white/80" data-lucide="pencil"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">01. Discover</h3>
<p className="uppercase text-xs text-white/60 tracking-wider">Lorem Ipsum</p>
</div>
</div>
<p className="text-sm text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio dapibus facilisis.</p>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<i className="h-3 w-3 text-white/70" data-lucide="clock"></i>
</div>
<span className="text-xs text-white/60">2–3 minutes</span>
</div>
</div>
<div className="h-1.5 overflow-hidden bg-white/10 rounded-full mt-4">
<div className="h-full bg-white/40 rounded-full" style={{width: `40%`}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[360px] ring-1 ring-white/15 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/[0.07] rounded-2xl p-5 backdrop-blur justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="h-4 w-4 text-white/80" data-lucide="sparkle"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">02. Curate</h3>
<p className="uppercase text-xs text-white/60 tracking-wider">Dolor Sit</p>
</div>
</div>
<p className="text-sm text-white/80">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna.</p>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
<i className="h-3 w-3 text-white/70" data-lucide="palette"></i>
</div>
<span className="text-xs text-white/60">Personalized suggestions</span>
</div>
</div>
<div className="h-1.5 overflow-hidden bg-white/10 rounded-full mt-4">
<div className="h-full bg-white/40 rounded-full" style={{width: `55%`}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[360px] ring-1 ring-white/15 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/[0.07] rounded-2xl p-5 backdrop-blur justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="h-4 w-4 text-white/80" data-lucide="wand-2"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">03. Compose</h3>
<p className="uppercase text-xs text-white/60 tracking-wider">Amet Consectetur</p>
</div>
</div>
<p className="text-sm text-white/80">Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-xs">Live previews</span>
</div>
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-xs">Drag & drop</span>
</div>
<div className="flex items-center gap-2 text-white/70">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-xs">One‑click export</span>
</div>
</div>
</div>
<div className="h-1.5 overflow-hidden bg-white/10 rounded-full mt-4">
<div className="h-full bg-white/40 rounded-full" style={{width: `80%`}}></div>
</div>
</article>

<article className="sm:p-6 flex flex-col min-h-[360px] ring-1 ring-white/15 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/[0.07] rounded-2xl p-5 backdrop-blur justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
<i className="h-4 w-4 text-white/80" data-lucide="repeat"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-white tracking-tight">04. Refine</h3>
<p className="uppercase text-xs text-white/60 tracking-wider">Adipiscing Elit</p>
</div>
</div>
<p className="text-sm text-white/80">Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum.</p>
<div className="inline-flex gap-2 bg-white/10 rounded-full py-1.5 px-3 backdrop-blur items-center">
<i className="h-3.5 w-3.5 text-white/70" data-lucide="star"></i>
<span className="text-xs text-white/70">Feedback‑aware</span>
</div>
</div>
<div className="h-1.5 overflow-hidden bg-white/10 rounded-full mt-4">
<div className="h-full bg-white/40 rounded-full" style={{width: `100%`}}></div>
</div>
</article>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
<i className="h-4 w-4" data-lucide="play"></i>
        Start building
      </button>
<p className="mt-2 text-xs text-white/60">Create something in under 60 seconds</p>
</div>
</section>

<section className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mt-8 mx-4 sm:mx-8 p-6 backdrop-blur">
<div className="flex gap-2 text-sm text-white/70 mb-2 items-center">
<span className="font-normal">Highlights</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.95] font-medium text-white tracking-tight">Essential blocks to ship.</h2>
<p className="mt-3 text-base text-white/70">Curated components that adapt across devices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className="mt-6 space-y-4">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-sm text-white/80">Accessible by default</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-blue-400"></div>
<span className="text-sm text-white/80">Responsive out of the box</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-purple-400"></div>
<span className="text-sm text-white/80">Composable primitives</span>
</div>
</div>
<div className="mt-8 flex items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">
<i className="h-4 w-4" data-lucide="shopping-cart"></i>
            Explore components
          </button>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition" href="#">
            View gallery
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="relative group overflow-hidden ring-1 ring-white/15 aspect-[3/4] bg-white/10 rounded-2xl backdrop-blur">
<img alt="Card one" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm">Item One</h3>
<p className="text-xs text-white/70">From $—</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur aspect-square">
<img alt="Card two" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm">Item Two</h3>
<p className="text-white/70 text-xs">From $—</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="relative group overflow-hidden ring-1 ring-white/15 aspect-square bg-white/10 rounded-2xl backdrop-blur">
<img alt="Card three" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm">Item Three</h3>
<p className="text-xs text-white/70">From $—</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur aspect-[3/4]">
<img alt="Card four" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1200&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<h3 className="text-white font-semibold text-sm">Item Four</h3>
<p className="text-white/70 text-xs">From $—</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex mt-8 items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=200&auto=format&fit=crop" />
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=200&auto=format&fit=crop" />
<img alt="User" className="h-8 w-8 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop" />
<div className="h-8 w-8 ring-2 ring-white/20 flex bg-white/20 rounded-full backdrop-blur items-center justify-center">
<span className="text-xs text-white/80 font-semibold">+2K</span>
</div>
</div>
<p className="text-sm text-white/70">Loved by teams worldwide</p>
</div>
<div className="flex items-center gap-1">
<i className="h-4 w-4 text-amber-400" data-lucide="star"></i>
<span className="text-sm text-white/80 font-semibold">4.9</span>
<span className="text-sm text-white/60">(2,847 reviews)</span>
</div>
</div>
</section>

<section className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mt-8 mx-4 sm:mx-8 p-6 backdrop-blur">
<div className="flex gap-2 text-sm text-white/70 items-center">
<span className="font-normal">Gallery</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.95] font-medium text-white tracking-tight">Curated visuals.</h2>
<p className="sm:text-base text-sm font-normal text-white/70 mt-1">Hover to pause, click to open. Lorem ipsum dolor sit amet, consectetur.</p>
</div>
<div className="mt-8 overflow-x-auto">
<div className="flex gap-4 snap-x snap-mandatory">

<a className="relative w-56 h-80 shrink-0 snap-start overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/10" href="#">
<img alt="Gallery item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-xs text-white/80">Lorem ipsum</p>
</div>
</a>
<a className="relative w-56 h-80 shrink-0 snap-start overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/10" href="#">
<img alt="Gallery item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-xs text-white/80">Dolor sit amet</p>
</div>
</a>
<a className="relative w-56 h-80 shrink-0 snap-start overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/10" href="#">
<img alt="Gallery item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-xs text-white/80">Consectetur</p>
</div>
</a>
<a className="relative w-56 h-80 shrink-0 snap-start overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/10" href="#">
<img alt="Gallery item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-xs text-white/80">Adipiscing elit</p>
</div>
</a>
<a className="relative w-56 h-80 shrink-0 snap-start overflow-hidden rounded-xl ring-1 ring-white/15 bg-white/10" href="#">
<img alt="Gallery item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<p className="text-xs text-white/80">Sed do eiusmod</p>
</div>
</a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
<div className="text-center">
<div className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">2K+</div>
<p className="text-sm text-white/70">Assets</p>
</div>
<div className="text-center">
<div className="sm:text-3xl text-2xl font-semibold text-white tracking-tight">50+</div>
<p className="text-sm text-white/70">Categories</p>
</div>
<div className="text-center">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">95%</div>
<p className="text-sm text-white/70">Satisfaction</p>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition" href="#">
<i className="h-4 w-4" data-lucide="eye"></i>
        Explore full gallery
      </a>
<p className="mt-2 text-xs text-white/60">Scroll to browse • Click to expand</p>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 mx-auto mb-24 px-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<div className="relative p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-white tracking-tight">Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-white/80">
              Everything you need to know. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur" href="#contact">
<span>Get in touch</span>
<i className="w-4 h-4" data-lucide="message-circle"></i>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">How does this work?</span>
<span className="shrink-0 flex items-center">
<i className="w-5 h-5 text-white/70 hidden" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70" data-qa="a">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat, nulla a ultricies gravida, nisl lacus tempor magna, at aliquet velit est sit amet libero.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">Can I customize components?</span>
<span className="shrink-0 flex items-center">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden" data-qa="a">
                  Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">Is there a free plan?</span>
<span className="shrink-0 flex items-center">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden" data-qa="a">
                  Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum.
                </div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-white">What about support?</span>
<span className="shrink-0 flex items-center">
<i className="w-5 h-5 text-white/70" data-icon="plus" data-lucide="plus"></i>
<i className="w-5 h-5 text-white/70 hidden" data-icon="minus" data-lucide="minus"></i>
</span>
</button>
<div className="px-5 pb-5 text-sm text-white/70 hidden" data-qa="a">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam. Etiam porta sem malesuada magna mollis euismod.
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full mx-auto mb-8">
<div className="max-w-7xl sm:px-6 lg:px-8 mx-auto px-4">
<div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur">
<div className="relative z-10 p-8 md:p-12 lg:p-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-6" id="contact">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] text-neutral-500 uppercase tracking-wider">Support</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                      Need a hand?
                    </h3>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
<i className="h-4 w-4" data-lucide="message-square"></i>
</div>
</div>
<form action="#" className="mt-6 space-y-4" method="POST">
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-name">Your name<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full px-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-name" name="name" placeholder="Jane Doe" required type="text" />
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-email">Email<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<i className="h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail"></i>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-email" name="email" placeholder="you@example.com" required type="email" />
</div>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-msg">Message</label>
<textarea className="mt-1 w-full resize-y px-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-msg" name="message" placeholder="Tell us what you’re looking for…" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors" type="submit">
                    Send message
                    <i className="h-4 w-4 ml-2" data-lucide="arrow-right"></i>
</button>
<p className="text-[11px] text-neutral-500">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight">Let’s collaborate.</h2>
<p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4">
                Partnerships, product questions, or custom work—tell us what you need. We typically reply within one business day.
              </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<i className="h-4 w-4" data-lucide="clock-3"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Quick response</p>
<p className="text-white/70 text-xs">Most messages receive a reply in under 24h.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-white font-semibold text-sm">Clear next steps</p>
<p className="text-white/70 text-xs">We’ll follow up with a concise plan and timeline.</p>
</div>
</div>
</div>

<div className="mt-8">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/20 shadow-lg p-3">
<img alt="Contact" className="h-12 w-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none uppercase tracking-wider">Point of Contact</p>
<p className="text-neutral-900 font-semibold tracking-tight truncate">Alex Doe</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors" href="mailto:hello@example.com">
                    Ask directly
                    <i className="h-3.5 w-3.5" data-lucide="message-circle"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 pb-12">
<div className="p-12 lg:p-16 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center mb-6">
<span className="ml-2 uppercase text-lg font-semibold tracking-tighter text-white">BrandName</span>
</div>
<p className="text-sm text-white/60 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
<div className="flex items-center gap-4">
<a aria-label="X" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 bg-white/[0.03]" href="#">
<i className="h-4 w-4 text-white" data-lucide="twitter"></i>
</a>
<a aria-label="LinkedIn" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 bg-white/[0.03]" href="#">
<i className="h-4 w-4 text-white" data-lucide="linkedin"></i>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-white/20 transition-all hover:bg-white/5 bg-white/[0.03]" href="#">
<i className="h-4 w-4 text-white" data-lucide="instagram"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Product</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Overview</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Features</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Integrations</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">About</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Help</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Docs</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Support</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Status</a></li>
<li><a className="text-sm text-white/60 hover:text-white transition" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-12 mb-12">
<div className="max-w-2xl mx-auto text-center">
<h4 className="text-lg font-medium text-white mb-4">Stay in the loop</h4>
<p className="text-sm text-white/60 mb-6">Get updates, tips, and resources delivered to your inbox.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="flex-1 max-w-md px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 border border-white/10 focus:border-blue-500/30 focus:outline-none transition bg-white/5" placeholder="Enter your email address" type="email" />
<button className="px-8 py-3 rounded-xl text-sm font-medium text-white border border-blue-500/30 hover:border-blue-500/50 transition bg-blue-500/15">Subscribe</button>
</div>
</div>
</div>
<div className="pt-2 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap items-center gap-6 text-xs text-white/40">
<span>© 2025 BrandName. All rights reserved.</span>
<a className="hover:text-white/60 transition" href="#">Privacy Policy</a>
<a className="hover:text-white/60 transition" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-4 text-xs text-white/40">
<span className="flex items-center gap-2">
<i className="h-3 w-3 text-white/70" data-lucide="lock"></i>
            Private by design
          </span>
<span className="flex items-center gap-2">
<i className="h-3 w-3 text-emerald-400" data-lucide="check-circle-2"></i>
            Built for speed
          </span>
</div>
</div>
</div>
</footer>




    </>
  );
}
