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
      
      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Intersection Observer for reveal (enhanced with optional 3D from-left rotate)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const has3D = el.hasAttribute('data-3d');
          if (has3D) {
            // Animate to settled state
            el.style.transform = 'perspective(1200px) translateX(0) rotateY(0deg)';
            el.style.opacity = '1';
            el.style.filter = 'blur(0px)';
            // Remove class-based offsets to avoid conflicts
            el.classList.add('opacity-100', 'translate-x-0', 'translate-y-0', 'blur-0');
            el.classList.remove('opacity-0', 'translate-x-8', '-translate-x-8', 'translate-y-6', '-translate-y-6', 'blur-sm');
            setTimeout(() => { el.style.willChange = 'auto'; }, 1000);
            observer.unobserve(el);
            return;
          }

          // Default fade/slide reveal
          el.classList.add('opacity-100', 'translate-x-0', 'translate-y-0', 'blur-0');
          el.classList.remove('opacity-0', 'translate-x-8', '-translate-x-8', 'translate-y-6', '-translate-y-6', 'blur-sm');
          observer.unobserve(el);
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

      // Initialize reveal elements
      document.querySelectorAll('.reveal').forEach((el) => {
        const dir = el.dataset.anim || 'up';
        // Set initial direction offsets (for default mode)
        if (dir === 'left') el.classList.add('translate-x-8');
        if (dir === 'right') el.classList.add('-translate-x-8');
        if (dir === 'up') el.classList.add('translate-y-6');
        if (dir === 'down') el.classList.add('-translate-y-6');

        // If 3D reveal is requested, set initial 3D transform and transitions
        if (el.hasAttribute('data-3d')) {
          el.style.transform = 'perspective(1200px) translateX(-28px) rotateY(12deg)';
          el.style.opacity = '0';
          el.style.filter = 'blur(6px)';
          el.style.willChange = 'transform, opacity, filter';
          // Preserve any existing transition-delay set inline on the element
          el.style.transitionProperty = 'transform, opacity, filter';
          el.style.transitionDuration = '900ms';
          el.style.transitionTimingFunction = 'cubic-bezier(0.22, 1, 0.36, 1)';
        }

        observer.observe(el);
      });

      // Nav scroll subtle scale/opacity
      const navWrap = document.getElementById('nav');
      let last = 0;
      window.addEventListener('scroll', () => {
        const y = window.scrollY || window.pageYOffset;
        if (y > 24 && last <= 24) {
          navWrap.classList.add('scale-[0.98]', 'opacity-90');
        } else if (y <= 24 && last > 24) {
          navWrap.classList.remove('scale-[0.98]', 'opacity-90');
        }
        last = y;
      }, { passive: true });
    
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
      

<header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out" id="nav">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl transition-all duration-500 ease-in-out md:px-6" style={{opacity: `0.95`}}>

<a className="group flex items-center gap-3" href="#home">
<div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-semibold tracking-tight text-white transition-colors duration-300 group-hover:border-[#FFD333]/40 group-hover:text-[#FFD333]">
              DB
            </div>
<span className="text-sm font-medium text-white/80 tracking-tight transition-colors duration-300 group-hover:text-white">Defibaker</span>
</a>

<div className="hidden items-center gap-1 md:flex">
<a className="group relative px-3 py-2 text-sm font-medium text-white/70 transition-all duration-500 ease-in-out hover:text-white" href="#about">
              About
              <span className="absolute -bottom-0.5 left-3 right-3 block h-[2px] origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
</a>
<a className="group relative px-3 py-2 text-sm font-medium text-white/70 transition-all duration-500 ease-in-out hover:text-white" href="#services">
              Services
              <span className="absolute -bottom-0.5 left-3 right-3 block h-[2px] origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
</a>
<a className="group relative px-3 py-2 text-sm font-medium text-white/70 transition-all duration-500 ease-in-out hover:text-white" href="#projects">
              Projects
              <span className="absolute -bottom-0.5 left-3 right-3 block h-[2px] origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
</a>
<a className="group relative px-3 py-2 text-sm font-medium text-white/70 transition-all duration-500 ease-in-out hover:text-white" href="#contact">
              Contact
              <span className="absolute -bottom-0.5 left-3 right-3 block h-[2px] origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
</a>
</div>

<a aria-label="Work with Defibaker" className="group inline-flex items-center gap-2 rounded-xl bg-[#FFD333] px-4 py-2 text-sm font-medium tracking-tight text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0_0_6px_rgba(255,211,51,0.25)] active:translate-y-0 active:scale-95" href="#contact">
<span>Let’s Collaborate</span>

<svg className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3l1.546 3.133L17 6.5l-2.5 2.367L15.5 12l-3.5-1.367L8.5 12l1-3.133L7 6.5l3.454-.367L12 3z"></path>
</svg>
</a>
</nav>
</div>
</header>
<main className="relative" id="home">

<div className="pointer-events-none absolute inset-0 -z-10 bg-black/90 bg-fixed" style={{backgroundImage: `radial-gradient(600px 600px at 80% 20%, rgba(255,211,51,0.06), transparent 60%),
        radial-gradient(500px 500px at 20% 80%, rgba(255,211,51,0.04), transparent 60%)`}}></div>

<div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" style={{background: `radial-gradient(circle at center, rgba(255,211,51,0.12), transparent 60%)`}}></div>
<div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full blur-3xl" style={{background: `radial-gradient(circle at center, rgba(255,211,51,0.10), transparent 60%)`}}></div>

<section className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 pt-28 sm:px-6 md:pt-36 lg:px-8">
<div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">

<div className="space-y-6">
<h1 className="opacity-0 translate-x-8 blur-sm transition-all duration-700 ease-in-out will-change-transform reveal" data-3d="left" data-anim="left" style={{transitionDelay: `0.05s`}}>
<span className="block text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Web3 Social that <span className="text-white/80">moves markets.</span>
</span>
</h1>
<p className="max-w-xl text-base font-medium leading-relaxed text-[#B3B3B3] opacity-0 translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-3d="left" data-anim="left" style={{transitionDelay: `0.25s`}}>
              From social media magic to shilling the next big thing — I make it happen. Premium strategy, relentless execution, measurable impact.
            </p>
<div className="flex flex-wrap items-center gap-4 opacity-0 -translate-y-3 blur-sm transition-all duration-700 ease-in-out reveal" data-3d="left" data-anim="up" style={{transitionDelay: `0.4s`}}>
<a className="group inline-flex items-center gap-2 rounded-xl bg-[#FFD333] px-5 py-3 text-sm font-medium tracking-tight text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0_0_8px_rgba(255,211,51,0.20)] active:translate-y-0 active:scale-95" href="#contact">
<span>Book a Campaign</span>

<svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11v2a4 4 0 0 0 4 4h1"></path>
<path d="M21 8v8"></path>
<path d="M18 8a6 6 0 0 1-6 6H7a4 4 0 0 1-4-4V8"></path>
<path d="M18 8V6a2 2 0 0 0-2-2H9"></path>
</svg>
</a>
<a className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition-all duration-300 ease-in-out hover:border-[#FFD333]/40 hover:text-white hover:shadow-[0_0_0_6px_rgba(255,211,51,0.08)]" href="#projects">
<span>See Results</span>

<svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>

<div className="mt-6 flex flex-wrap items-center gap-6 opacity-0 -translate-y-3 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.55s`}}>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-[#FFD333]"></div>
<span className="text-sm font-medium text-white/80">50M+ monthly reach</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-[#FFD333]"></div>
<span className="text-sm font-medium text-white/80">Top-tier Web3 communities</span>
</div>
</div>
</div>

<div className="relative">
<div className="pointer-events-none absolute -inset-6 -z-10 rounded-3xl border border-white/5 bg-white/[0.02] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"></div>
<div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 opacity-0 -translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="right" style={{transitionDelay: `0.25s`}}>
<img alt="Defibaker — Web3 personality" className="h-full w-full object-cover object-center opacity-95 transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.02)]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />

<div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full blur-3xl" style={{background: `radial-gradient(circle at center, rgba(255,211,51,0.10), transparent 60%)`}}></div>
</div>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="about">
<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

<div className="relative order-2 md:order-1">
<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 opacity-0 translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="right" style={{transitionDelay: `0.1s`}}>
<img alt="Creative studio mood — neon black" className="h-full w-full object-cover opacity-95 transition-transform duration-700 ease-in-out group-hover:[transform:rotateX(2deg)_rotateY(2deg)_scale(1.02)]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
</div>

<div className="order-1 space-y-5 md:order-2">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl opacity-0 -translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-3d="left" data-anim="left" style={{transitionDelay: `0.05s`}}>Want to know more about Defibaker?</h2>
<p className="max-w-2xl text-base font-medium leading-relaxed text-[#B3B3B3] opacity-0 -translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="left" style={{transitionDelay: `0.2s`}}>
              I help Web3 brands and founders cut through the noise. Strategy-first social, content with teeth, and community plays that actually move KPIs — not just vanity metrics.
            </p>
<div className="grid grid-cols-2 gap-4 opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.35s`}}>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">

<svg className="h-4 w-4 text-[#FFD333] hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="M8.59 13.51l6.83 3.98"></path>
<path d="M15.41 6.51L8.59 10.49"></path>
</svg>
<div>
<p className="text-sm font-medium text-white/90">200+ launches</p>
<p className="text-xs text-[#B3B3B3]">From stealth to mint to scale</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">

<svg className="h-4 w-4 text-[#FFD333] hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<div>
<p className="text-sm font-medium text-white/90">Community-first</p>
<p className="text-xs text-[#B3B3B3]">Grow loyal, active holders</p>
</div>
</div>
</div>
</div>
<a className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-300 ease-in-out hover:border-[#FFD333]/40 hover:text-white hover:shadow-[0_0_0_6px_rgba(255,211,51,0.08)] opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#services" style={{transitionDelay: `0.5s`}}>
              Explore Services
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="services">
<div className="mb-10 flex items-end justify-between">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl opacity-0 -translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-3d="left" data-anim="left" style={{transitionDelay: `0.05s`}}>Services — built for Web3 velocity</h2>
<p className="hidden text-sm text-[#B3B3B3] opacity-0 translate-x-8 blur-sm transition-all duration-700 ease-in-out md:block reveal" data-anim="right" style={{transitionDelay: `0.15s`}}>Minimal, tactical, effective.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">

<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-3d="left" data-anim="up" style={{transitionDelay: `0.1s`}}>
<div className="mb-4 inline-flex items-center gap-3">

<svg className="h-5 w-5 text-[#FFD333] transition-transform duration-300 group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="M8.59 13.51l6.83 3.98"></path>
<path d="M15.41 6.51L8.59 10.49"></path>
</svg>
<h3 className="text-lg font-semibold tracking-tight">Social Media Management</h3>
</div>
<p className="mb-6 text-sm text-[#B3B3B3]">End-to-end content, calendars, posting — optimized for crypto-native audiences across X, TG, and more.</p>
<span className="block h-[2px] w-10 origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 group-hover:scale-x-100"></span>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-3d="left" data-anim="up" style={{transitionDelay: `0.2s`}}>
<div className="mb-4 inline-flex items-center gap-3">

<svg className="h-5 w-5 text-[#FFD333] transition-transform duration-300 group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 11v2a4 4 0 0 0 4 4h1"></path>
<path d="M21 8v8"></path>
<path d="M18 8a6 6 0 0 1-6 6H7a4 4 0 0 1-4-4V8"></path>
<path d="M18 8V6a2 2 0 0 0-2-2H9"></path>
</svg>
<h3 className="text-lg font-semibold tracking-tight">Web3 Promotion (“Shilling”)</h3>
</div>
<p className="mb-6 text-sm text-[#B3B3B3]">Narratives that travel. KOL coordination, threads that trend, and attention that converts to holders.</p>
<span className="block h-[2px] w-10 origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 group-hover:scale-x-100"></span>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.8)] hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-3d="left" data-anim="up" style={{transitionDelay: `0.3s`}}>
<div className="mb-4 inline-flex items-center gap-3">

<svg className="h-5 w-5 text-[#FFD333] transition-transform duration-300 group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<h3 className="text-lg font-semibold tracking-tight">Community Building</h3>
</div>
<p className="mb-6 text-sm text-[#B3B3B3]">Discord/TG playbooks, mod ops, activations, and incentives that keep people talking — and sticking.</p>
<span className="block h-[2px] w-10 origin-left scale-x-0 bg-[#FFD333] transition-transform duration-500 group-hover:scale-x-100"></span>
</div>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="projects">
<div className="mb-8 flex items-end justify-between">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl opacity-0 -translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="left" style={{transitionDelay: `0.05s`}}>Projects & Community Wins</h2>
<p className="hidden text-sm text-[#B3B3B3] opacity-0 translate-x-8 blur-sm transition-all duration-700 ease-in-out md:block reveal" data-anim="right" style={{transitionDelay: `0.15s`}}>Highlights from campaigns and launches.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#" style={{transitionDelay: `0.1s`}}>
<div className="relative h-56 w-full">
<img alt="NFT drop hype" className="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.03)]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-[#FFD333]/50"></div>
</div>
<div className="p-5">
<div className="mb-1 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">NFT Drop — 24h Sellout</h3>

<svg className="h-4 w-4 text-[#FFD333]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"></path>
</svg>
</div>
<p className="text-sm text-[#B3B3B3]">Narrative, KOLs, space lineup. Sold out in 24 hours.</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#" style={{transitionDelay: `0.2s`}}>
<div className="relative h-56 w-full">
<img alt="DeFi campaign growth" className="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(-2deg)_rotateY(2deg)_scale(1.03)]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-[#FFD333]/50"></div>
</div>
<div className="p-5">
<div className="mb-1 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">DeFi Campaign — x4 MAU</h3>
<svg className="h-4 w-4 text-[#FFD333]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 14l4-4 4 4 5-5"></path>
</svg>
</div>
<p className="text-sm text-[#B3B3B3]">Thread series + spaces + partnerships. Growth compounding.</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#" style={{transitionDelay: `0.3s`}}>
<div className="relative h-56 w-full">
<img alt="Community growth" className="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.03)]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-[#FFD333]/50"></div>
</div>
<div className="p-5">
<div className="mb-1 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Community — 0 to 80k</h3>
<svg className="h-4 w-4 text-[#FFD333]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
</div>
<p className="text-sm text-[#B3B3B3]">Playbooks + mod ops + incentive loops that stick.</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#" style={{transitionDelay: `0.4s`}}>
<div className="relative h-56 w-full">
<img alt="Mint success" className="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(-2deg)_rotateY(2deg)_scale(1.03)]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-[#FFD333]/50"></div>
</div>
<div className="p-5">
<div className="mb-1 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Mint — 110% oversub</h3>
<svg className="h-4 w-4 text-[#FFD333]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</div>
<p className="text-sm text-[#B3B3B3]">WL moments, creator collabs, perfectly-timed reveal.</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#" style={{transitionDelay: `0.5s`}}>
<div className="relative h-56 w-full">
<img alt="Protocol announcement" className="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(2deg)_rotateY(-2deg)_scale(1.03)]" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-[#FFD333]/50"></div>
</div>
<div className="p-5">
<div className="mb-1 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Protocol — Top-of-mind</h3>
<svg className="h-4 w-4 text-[#FFD333]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h20"></path>
<path d="M7 4h10v12H7z"></path>
</svg>
</div>
<p className="text-sm text-[#B3B3B3]">Space roadshows + narrative arcs across cycles.</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:border-[#FFD333]/40 opacity-0 translate-y-6 blur-sm reveal" data-anim="up" href="#" style={{transitionDelay: `0.6s`}}>
<div className="relative h-56 w-full">
<img alt="Token momentum" className="h-full w-full object-cover transition-transform duration-700 ease-in-out will-change-transform group-hover:[transform:rotateX(-2deg)_rotateY(2deg)_scale(1.03)]" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 ring-0 transition-all duration-300 ease-in-out group-hover:ring-2 group-hover:ring-[#FFD333]/50"></div>
</div>
<div className="p-5">
<div className="mb-1 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Token — Momentum Engine</h3>
<svg className="h-4 w-4 text-[#FFD333]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<p className="text-sm text-[#B3B3B3]">Announcements into catalysts into liquidity.</p>
</div>
</a>
</div>
</section>

<section className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="contact">
<div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
<div className="mb-8">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl opacity-0 -translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="left" style={{transitionDelay: `0.05s`}}>Let’s Collaborate</h2>
<p className="mt-2 text-sm text-[#B3B3B3] opacity-0 translate-x-8 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="right" style={{transitionDelay: `0.15s`}}>
              Tell me a bit about your project — I’ll get back fast with next steps.
            </p>
</div>
<form className="grid grid-cols-1 gap-5">
<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
<div className="opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.2s`}}>
<label className="mb-2 block text-sm font-medium text-white/80">Your Name</label>
<input className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[#FFD333] focus:ring-4 focus:ring-[#FFD333]/20" placeholder="Satoshi" type="text" />
</div>
<div className="opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.25s`}}>
<label className="mb-2 block text-sm font-medium text-white/80">X / Telegram</label>
<input className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[#FFD333] focus:ring-4 focus:ring-[#FFD333]/20" placeholder="@defibaker" type="text" />
</div>
</div>
<div className="opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.3s`}}>
<label className="mb-2 block text-sm font-medium text-white/80">Email</label>
<input className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[#FFD333] focus:ring-4 focus:ring-[#FFD333]/20" placeholder="you@protocol.xyz" type="email" />
</div>
<div className="opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.35s`}}>
<label className="mb-2 block text-sm font-medium text-white/80">Project & Goals</label>
<textarea className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-[#FFD333] focus:ring-4 focus:ring-[#FFD333]/20" placeholder="What are you building? What does success look like?" rows="5"></textarea>
</div>
<div className="flex flex-wrap items-center justify-between gap-4 opacity-0 translate-y-6 blur-sm transition-all duration-700 ease-in-out reveal" data-anim="up" style={{transitionDelay: `0.45s`}}>
<p className="text-xs text-[#B3B3B3]">By sending, you agree to a quick follow-up and no spam.</p>
<button className="group inline-flex items-center gap-2 rounded-xl bg-[#FFD333] px-5 py-3 text-sm font-medium tracking-tight text-black transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_0_0_8px_rgba(255,211,51,0.20)] active:translate-y-0 active:scale-95" type="submit">
                Send Request
                
<svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
</svg>
</button>
</div>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black/60">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-semibold tracking-tight">DB</div>
<p className="text-xs text-[#B3B3B3]">© <span id="year"></span> Defibaker. All rights reserved.</p>
</div>
<div className="flex items-center gap-4">
<a className="group text-xs text-white/70 transition-colors duration-300 hover:text-white" href="#contact">
            Work with me
            <span className="block h-[1px] w-0 bg-[#FFD333] transition-all duration-500 group-hover:w-full"></span>
</a>
<a className="group text-xs text-white/70 transition-colors duration-300 hover:text-white" href="#projects">
            Case studies
            <span className="block h-[1px] w-0 bg-[#FFD333] transition-all duration-500 group-hover:w-full"></span>
</a>
</div>
</div>
</footer>



    </>
  );
}
