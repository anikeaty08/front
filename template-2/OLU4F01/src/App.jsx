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
        // Current year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Initialize Lucide icons with 1.5 stroke width
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }

        // Modal helpers
        function getParts(modal) {
          const overlay = modal.querySelector('[data-modal-overlay]');
          // assume first direct child div is the container with opacity transitions
          const container = modal.querySelector(':scope > div');
          return { overlay, container };
        }

        function openModalById(id) {
          const modal = document.getElementById(id);
          if (!modal) return;
          const { overlay, container } = getParts(modal);
          modal.classList.remove('hidden');
          modal.setAttribute('aria-hidden', 'false');
          document.body.classList.add('overflow-hidden');

          // Animate in
          requestAnimationFrame(() => {
            if (overlay) overlay.classList.remove('opacity-0');
            if (overlay) overlay.classList.add('opacity-100');
            if (container) container.classList.remove('opacity-0');
            if (container) container.classList.add('opacity-100');
            if (container) {
              container.setAttribute('tabindex', '-1');
              container.focus({ preventScroll: true });
            }
          });
        }

        function closeModal(modal) {
          const { overlay, container } = getParts(modal);
          if (overlay) overlay.classList.add('opacity-0');
          if (overlay) overlay.classList.remove('opacity-100');
          if (container) container.classList.add('opacity-0');
          if (container) container.classList.remove('opacity-100');

          // Match transition duration in markup (300ms)
          setTimeout(() => {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');
          }, 300);
        }

        // Open modal triggers
        document.querySelectorAll('[data-open-modal]').forEach(trigger => {
          trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const id = trigger.getAttribute('data-open-modal');
            if (id) openModalById(id);
          });
        });

        // Close modal buttons
        document.querySelectorAll('[data-close-modal]').forEach(btn => {
          btn.addEventListener('click', () => {
            const modal = btn.closest('[role="dialog"]');
            if (modal) closeModal(modal);
          });
        });

        // Overlay click-to-close
        document.querySelectorAll('[data-modal-overlay]').forEach(overlay => {
          overlay.addEventListener('click', () => {
            const modal = overlay.closest('[role="dialog"]');
            if (modal) closeModal(modal);
          });
        });

        // Escape to close any open modal
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            document.querySelectorAll('[role="dialog"]:not(.hidden)').forEach(modal => closeModal(modal));
          }
        });

        // Nebula tabs
        document.querySelectorAll('.nebula-tab').forEach(tab => {
          tab.addEventListener('click', () => {
            const container = tab.closest('.rounded-xl.border');
            if (!container) return;

            const target = tab.getAttribute('data-tab');
            const tabs = container.querySelectorAll('.nebula-tab');
            const panes = container.querySelectorAll('[data-pane]');

            tabs.forEach(t => {
              t.classList.remove('bg-emerald-400/15', 'text-emerald-300', 'ring-emerald-400/30');
              t.classList.add('text-neutral-400', 'ring-transparent');
            });

            tab.classList.add('bg-emerald-400/15', 'text-emerald-300', 'ring-emerald-400/30');
            panes.forEach(p => p.classList.toggle('hidden', p.getAttribute('data-pane') !== target));
          });
        });

        // Smooth focus for in-page anchors (keeps native smooth scroll via CSS)
        document.querySelectorAll('a[href^="#"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const id = link.getAttribute('href');
            if (id && id.length > 1) {
              const target = document.querySelector(id);
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
                setTimeout(() => target.removeAttribute('tabindex'), 600);
              }
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
      

<div className="pointer-events-none fixed inset-0 z-0">
<div className="absolute inset-0 opacity-40" style={{background: `radial-gradient(80rem 40rem at 30% -10%, rgba(16,185,129,0.12), transparent 60%), radial-gradient(50rem 30rem at 80% 0%, rgba(16,185,129,0.08), transparent 60%)`}}></div>
<div className="absolute inset-0 mix-blend-overlay opacity-[0.07]" style={{backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`, backgroundSize: `28px 28px`, maskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`, webkitMaskImage: `radial-gradient(ellipse at center, black 40%, transparent 80%)`}}></div>
<div className="absolute -top-10 left-1/4 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl animate-pulse" style={{animationDuration: `4s`}}></div>
<div className="absolute bottom-10 right-1/3 h-16 w-16 rounded-full bg-emerald-400/10 blur-xl animate-pulse" style={{animationDuration: `5.5s`, animationDelay: `400ms`}}></div>
</div>

<header className="relative z-10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
<a aria-label="Go to top" className="group inline-flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/60 backdrop-blur-sm transition-colors duration-300 group-hover:border-emerald-400/50">
<span className="text-sm font-semibold tracking-tight text-white">OTM</span>
</div>
<span className="hidden text-sm font-medium text-neutral-400 sm:block">Olawale Timothy Morenikeji</span>
</a>
<nav aria-label="Primary Navigation" className="hidden items-center gap-2 sm:flex">
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#work">Work</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#services">Services</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#about">About</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#approach">Approach</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#testimonials">Testimonials</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#faq">FAQ</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/40" href="#contact">Contact</a>
<a aria-label="View Work" className="ml-2 inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#work">
<i className="h-4 w-4" data-lucide="sparkles"></i> View Work
          </a>
</nav>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto flex min-h-[78vh] max-w-7xl flex-col items-start justify-center gap-8 px-6 py-16 lg:min-h-[86vh] lg:px-8">
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-300 backdrop-blur-sm">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80 ring-4 ring-emerald-400/10"></span>
          Available for select collaborations
        </p>
<h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Hi, I’m Olawale Timothy Morenikeji — <span className="text-neutral-300">Senior UI/UX & Product Designer</span>.
        </h1>
<p className="max-w-2xl text-base text-neutral-400 sm:text-lg">
          Crafting functional, aesthetic, and scalable digital experiences across
          brand systems, product design, and modern web—powered by thoughtful strategy and clean execution.
        </p>
<div className="flex flex-wrap items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/30 transition-all hover:translate-y-[-1px] hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#work">
<i className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-down-right"></i>
            View My Work
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/10 transition-all hover:bg-white/7.5 hover:text-white hover:ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60" href="#contact">
<i className="h-4 w-4" data-lucide="mail"></i> Let’s Talk
          </a>
</div>
<div className="mt-8 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-400 backdrop-blur-sm">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="cpu"></i> AI Platforms
          </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-400 backdrop-blur-sm">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="shapes"></i> Brand Design & Strategy
          </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-400 backdrop-blur-sm">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="code-2"></i> Next.js • React • Low‑code
          </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-1.5 text-xs text-neutral-400 backdrop-blur-sm">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="layout-dashboard"></i> Product Design
          </span>
</div>
</div>
</section>

<section className="relative z-10" id="work">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Featured Work</h2>
<p className="mt-2 text-sm text-neutral-400">Select case studies across product, brand, and web. Hover to preview.</p>
</div>
<a className="hidden items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20 sm:inline-flex" href="mailto:hello@otm.design?subject=Book%20a%20call&body=Hi%20Olawale%2C%20I%27d%20like%20to%20schedule%20a%2030‑minute%20call%20to%20discuss%20my%20project.%20I%27m%20available%20on%20%5Bdates%5D.%0A%0AThanks!">
<i className="h-4 w-4" data-lucide="calendar"></i> Book a call
          </a>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<a aria-label="Open Project Nebula case study" className="group relative isolate flex min-h-[320px] transform-gpu flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-emerald-400/0 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:ring-1" data-open-modal="modal-nebula" href="#case-nebula">
<img alt="AI Platform Dashboard" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>
<div className="relative mt-auto p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="bot"></i> AI Platform
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white">Project Nebula — AI Design Platform</h3>
<p className="mt-1 text-sm text-neutral-300">Designing an AI-assisted workflow for teams to ideate faster.</p>
</div>
</a>

<a aria-label="Open Signal brand system case study" className="group relative isolate flex min-h-[320px] transform-gpu flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-emerald-400/0 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:ring-1" data-open-modal="modal-brand" href="#case-brand">
<img alt="Brand system on black background" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1493673272479-a20888bcee10?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>
<div className="relative mt-auto p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="badges"></i> Brand System
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white">Signal — Unified Brand & Design Language</h3>
<p className="mt-1 text-sm text-neutral-300">A scalable identity and UI kit for multi-product ecosystems.</p>
</div>
</a>

<a aria-label="Open Atlas analytics case study" className="group relative isolate flex min-h-[320px] transform-gpu flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-emerald-400/0 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:ring-1" data-open-modal="modal-saas" href="#case-saas">
<img alt="SaaS dashboard with charts" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>
<div className="relative mt-auto p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="layout-dashboard"></i> SaaS
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white">Atlas — Analytics for Product Teams</h3>
<p className="mt-1 text-sm text-neutral300">Simplifying complex data with a human-centered interface.</p>
</div>
</a>

<a aria-label="Open Arc Store e-commerce case study" className="group relative isolate flex min-h-[320px] transform-gpu flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-emerald-400/0 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:ring-1" data-open-modal="modal-commerce" href="#case-commerce">
<img alt="E‑commerce product grid" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>
<div className="relative mt-auto p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="shopping-bag"></i> E‑commerce
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white">Arc Store — Modular Shopping Experience</h3>
<p className="mt-1 text-sm text-neutral-300">Conversion-focused flows with brand consistency at scale.</p>
</div>
</a>

<a aria-label="Open Volt mobile banking case study" className="group relative isolate flex min-h-[320px] transform-gpu flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-emerald-400/0 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:ring-1" data-open-modal="modal-mobile" href="#case-mobile">
<img alt="Mobile app in hand" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>
<div className="relative mt-auto p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="smartphone"></i> Mobile
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white">Volt — Mobile Banking Simplified</h3>
<p className="mt-1 text-sm text-neutral-300">Trust, clarity, and speed for everyday finance.</p>
</div>
</a>

<a aria-label="Open Helix design system case study" className="group relative isolate flex min-h-[320px] transform-gpu flex-col overflow-hidden rounded-xl border border-white/10 bg-neutral-900/50 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] ring-emerald-400/0 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-2xl hover:ring-1" data-open-modal="modal-system" href="#case-system">
<img alt="Design system components" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"></div>
<div className="relative mt-auto p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="boxes"></i> Design System
              </div>
<h3 className="text-lg font-semibold tracking-tight text-white">Helix — Scalable UI System</h3>
<p className="mt-1 text-sm text-neutral-300">A11y-first, tokenized components with robust docs.</p>
</div>
</a>
</div>
</div>
</section>

<div className="mx-auto my-16 max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>


<div aria-labelledby="nebula-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-nebula" role="dialog">
<button aria-label="Close case study overlay" className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-modal-overlay=""></button>
<div className="relative mx-auto flex h-full max-w-7xl flex-col px-6 py-6 opacity-0 transition-opacity duration-300 lg:px-8">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 ring-1 ring-inset ring-white/10">
<i className="h-4 w-4" data-lucide="case-sensitive"></i> Case Study
          </div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i> Close
          </button>
</div>
<section className="relative z-10 mt-4 scroll-mt-24" id="case-nebula">
<div className="mx-auto max-w-7xl">
<div className="mb-8 flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl" id="nebula-title">Case Study — Project Nebula</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="arrow-left"></i> Back to work
              </button>
</div>
<div className="grid grid-cols-1 gap-10 lg:grid-cols-12">

<aside className="order-2 lg:order-1 lg:col-span-3">
<div className="sticky top-6 hidden lg:block">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 backdrop-blur-sm">
<p className="mb-4 text-xs font-medium uppercase tracking-wider text-neutral-400">Walkthrough</p>
<ol className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-emerald-400/80 ring-4 ring-emerald-400/10"></span>
<a className="text-neutral-300 hover:text-white" href="#nebula-overview">Overview</a>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-white/30"></span>
<a className="text-neutral-400 hover:text-white" href="#nebula-problem">Problem</a>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-white/30"></span>
<a className="text-neutral-400 hover:text-white" href="#nebula-solution">Solution</a>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-white/30"></span>
<a className="text-neutral-400 hover:text-white" href="#nebula-challenges">Challenges</a>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-white/30"></span>
<a className="text-neutral-400 hover:text-white" href="#nebula-outcome">Outcome</a>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-white/30"></span>
<a className="text-neutral-400 hover:text-white" href="#nebula-resources">Resources</a>
</li>
</ol>
</div>
</div>
</aside>

<article className="order-1 space-y-10 lg:order-2 lg:col-span-9">

<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
<div className="relative aspect-[16/9] overflow-hidden rounded-xl">
<img alt="Nebula dashboard mockup" className="h-full w-full transform-gpu rounded-xl object-cover transition duration-700 hover:scale-[1.02]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent"></div>
<div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-4 w-4" data-lucide="sparkles"></i> AI Design Assistant
                    </div>
</div>
</div>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6" id="nebula-overview">
<h3 className="text-xl font-semibold tracking-tight text-white">Overview</h3>
<p className="mt-3 text-neutral-300">
                    Nebula is an AI-assisted workspace that helps product teams go from brief to validated concepts faster.
                    I led product design, interaction patterns, and brand system—shipping an MVP in 12 weeks.
                  </p>
<div className="mt-4 grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Role</p>
<p className="text-sm text-neutral-200">Lead Product Designer</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Scope</p>
<p className="text-sm text-neutral-200">Research, UX, UI, Prototype, Brand</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Timeline</p>
<p className="text-sm text-neutral-200">12 weeks</p>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6" id="nebula-problem">
<h3 className="text-xl font-semibold tracking-tight text-white">Problem / Challenge</h3>
<p className="mt-3 text-neutral-300">
                    Product teams lose time aligning on direction and exploring divergent options. Knowledge is siloed across tools,
                    and handoff backtracks are common—slowing delivery and reducing quality.
                  </p>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6" id="nebula-solution">
<h3 className="text-xl font-semibold tracking-tight text-white">Solution (Process + Features)</h3>
<div className="mt-3 grid gap-6 lg:grid-cols-2">
<div className="space-y-3">
<p className="text-neutral-300">
                        We introduced an AI “copilot” that ingests brief + market signals to propose structured directions, flows, and content blocks.
                        The workspace allows quick synthesis, alignment rituals, and instant prototypes.
                      </p>
<ul className="list-inside list-disc text-neutral-300">
<li>Brief-to-Flows generation with guardrails</li>
<li>Design tokens + live styles for rapid theming</li>
<li>Comments, mentions, and async approvals</li>
<li>Export to Figma and code-ready components</li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-4">
<div className="flex items-center gap-2">
<div className="rounded-full bg-white/5 p-1 ring-1 ring-inset ring-white/10">
<div className="grid grid-cols-2 gap-1">
<button className="nebula-tab inline-flex items-center gap-1 rounded-md bg-emerald-400/15 px-2 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/30" data-tab="desktop" type="button">
<i className="h-3.5 w-3.5" data-lucide="monitor"></i> Desktop
                            </button>
<button className="nebula-tab inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-neutral-400 ring-1 ring-transparent" data-tab="mobile" type="button">
<i className="h-3.5 w-3.5" data-lucide="smartphone"></i> Mobile
                            </button>
</div>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="overflow-hidden rounded-lg border border-white/10 bg-black/40" data-pane="desktop">
<div className="flex items-center gap-1 border-b border-white/10 px-3 py-2">
<span className="h-2 w-2 rounded-full bg-red-400/60"></span>
<span className="h-2 w-2 rounded-full bg-yellow-400/60"></span>
<span className="h-2 w-2 rounded-full bg-green-400/60"></span>
<span className="ml-2 text-xs text-neutral-400">nebula.design — concept</span>
</div>
<img alt="Desktop frame" className="h-64 w-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" />
</div>
<div className="hidden overflow-hidden rounded-lg border border-white/10 bg-black/40" data-pane="mobile">
<div className="flex items-center gap-1 border-b border-white/10 px-3 py-2">
<span className="h-2 w-2 rounded-full bg-emerald-400/70"></span>
<span className="ml-2 text-xs text-neutral-400">Mobile preview</span>
</div>
<div className="grid grid-cols-2 gap-2 p-2">
<img alt="Mobile 1" className="h-44 w-full rounded-md object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<img alt="Mobile 2" className="h-44 w-full rounded-md object-cover" src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6" id="nebula-challenges">
<h3 className="text-xl font-semibold tracking-tight text-white">Challenges During Design</h3>
<ul className="mt-3 grid gap-3 sm:grid-cols-2">
<li className="rounded-lg border border-white/10 p-4">
<p className="text-sm font-medium text-neutral-200">AI trust and explainability</p>
<p className="mt-1 text-sm text-neutral-400">Added rationale previews, confidence markers, and human-in-the-loop checkpoints.</p>
</li>
<li className="rounded-lg border border-white/10 p-4">
<p className="text-sm font-medium text-neutral-200">Scope control</p>
<p className="mt-1 text-sm text-neutral-400">Narrowed MVP to 3 killer moments; backlog framed as extensions.</p>
</li>
</ul>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6" id="nebula-outcome">
<h3 className="text-xl font-semibold tracking-tight text-white">Outcome / Impact</h3>
<div className="mt-3 grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-4">
<p className="text-2xl font-semibold tracking-tight text-white">3×</p>
<p className="text-sm text-neutral-400">Faster concept iterations</p>
</div>
<div className="rounded-lg border border-white/10 p-4">
<p className="text-2xl font-semibold tracking-tight text-white">-42%</p>
<p className="text-sm text-neutral-400">Handoff backtracks</p>
</div>
<div className="rounded-lg border border-white/10 p-4">
<p className="text-2xl font-semibold tracking-tight text-white">+28%</p>
<p className="text-sm text-neutral-400">Team alignment score</p>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6" id="nebula-resources">
<h3 className="text-xl font-semibold tracking-tight text-white">Additional Resources</h3>
<div className="mt-4 flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50" href="#">
<i className="h-4 w-4" data-lucide="figma"></i> Figma File (view)
                    </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="#">
<i className="h-4 w-4" data-lucide="globe"></i> Live Prototype
                    </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="#">
<i className="h-4 w-4" data-lucide="file-text"></i> PRD
                    </a>
</div>
</section>
</article>
</div>
</div>
</section>
</div>
</div>

<div aria-labelledby="brand-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-brand" role="dialog">
<button aria-label="Close case study overlay" className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-modal-overlay=""></button>
<div className="relative mx-auto flex h-full max-w-4xl flex-col px-6 py-6 opacity-0 transition-opacity duration-300 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white" id="brand-title">Signal — Unified Brand & Design Language</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i> Close
          </button>
</div>
<div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
<img alt="Signal brand system" className="aspect-[16/9] w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1493673272479-a20888bcee10?q=80&w=1600&auto=format&fit=crop" />
<p className="text-neutral-300">A scalable identity and UI kit for multi-product ecosystems. Deliverables included visual identity, tokenized UI library, brand guidelines, and rollout playbook.</p>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Role</p>
<p className="text-sm text-neutral-200">Brand & Systems</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Timeline</p>
<p className="text-sm text-neutral-200">8 weeks</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Impact</p>
<p className="text-sm text-neutral-200">Faster design velocity</p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50" href="mailto:hello@otm.design?subject=Signal%20brand%20case%20study%20request">
<i className="h-4 w-4" data-lucide="mail"></i> Request full case study
            </a>
</div>
</div>
</div>
</div>

<div aria-labelledby="saas-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-saas" role="dialog">
<button aria-label="Close case study overlay" className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-modal-overlay=""></button>
<div className="relative mx-auto flex h-full max-w-4xl flex-col px-6 py-6 opacity-0 transition-opacity duration-300 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white" id="saas-title">Atlas — Analytics for Product Teams</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i> Close
          </button>
</div>
<div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
<img alt="Atlas SaaS dashboard" className="aspect-[16/9] w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<p className="text-neutral-300">Simplifying complex data with a human-centered interface. Introduced opinionated defaults, progressive disclosure, and metric annotations.</p>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Role</p>
<p className="text-sm text-neutral-200">Lead Product Designer</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Key Wins</p>
<p className="text-sm text-neutral-200">+18% feature adoption</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Timeline</p>
<p className="text-sm text-neutral-200">10 weeks</p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50" href="mailto:hello@otm.design?subject=Atlas%20case%20study%20request">
<i className="h-4 w-4" data-lucide="mail"></i> Request full case study
            </a>
</div>
</div>
</div>
</div>

<div aria-labelledby="commerce-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-commerce" role="dialog">
<button aria-label="Close case study overlay" className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-modal-overlay=""></button>
<div className="relative mx-auto flex h-full max-w-4xl flex-col px-6 py-6 opacity-0 transition-opacity duration-300 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white" id="commerce-title">Arc Store — Modular Shopping Experience</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i> Close
          </button>
</div>
<div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
<img alt="Arc Store ecommerce" className="aspect-[16/9] w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<p className="text-neutral-300">Conversion-focused flows with brand consistency at scale. Built modular PDP/PLP blocks, checkout optimizations, and merchandising guidelines.</p>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Role</p>
<p className="text-sm text-neutral-200">Product Designer</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Impact</p>
<p className="text-sm text-neutral-200">+9% CVR uplift</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Timeline</p>
<p className="text-sm text-neutral-200">6 weeks</p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50" href="mailto:hello@otm.design?subject=Arc%20Store%20case%20study%20request">
<i className="h-4 w-4" data-lucide="mail"></i> Request full case study
            </a>
</div>
</div>
</div>
</div>

<div aria-labelledby="mobile-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-mobile" role="dialog">
<button aria-label="Close case study overlay" className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-modal-overlay=""></button>
<div className="relative mx-auto flex h-full max-w-4xl flex-col px-6 py-6 opacity-0 transition-opacity duration-300 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white" id="mobile-title">Volt — Mobile Banking Simplified</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i> Close
          </button>
</div>
<div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
<img alt="Volt mobile app" className="aspect-[16/9] w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop" />
<p className="text-neutral-300">Trust, clarity, and speed for everyday finance. Reduced cognitive load with progressive onboarding and contextual nudges.</p>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Role</p>
<p className="text-sm text-neutral-200">Product Designer</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Outcome</p>
<p className="text-sm text-neutral-200">+12% activation</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Timeline</p>
<p className="text-sm text-neutral-200">7 weeks</p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50" href="mailto:hello@otm.design?subject=Volt%20case%20study%20request">
<i className="h-4 w-4" data-lucide="mail"></i> Request full case study
            </a>
</div>
</div>
</div>
</div>

<div aria-labelledby="system-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal-system" role="dialog">
<button aria-label="Close case study overlay" className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" data-modal-overlay=""></button>
<div className="relative mx-auto flex h-full max-w-4xl flex-col px-6 py-6 opacity-0 transition-opacity duration-300 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white" id="system-title">Helix — Scalable UI System</h2>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" data-close-modal="">
<i className="h-4 w-4" data-lucide="x"></i> Close
          </button>
</div>
<div className="mt-4 space-y-4 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
<img alt="Helix design system" className="aspect-[16/9] w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1600&auto=format&fit=crop" />
<p className="text-neutral-300">A11y-first, tokenized components with robust docs. Built a contribution model and CI checks for design tokens.</p>
<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Role</p>
<p className="text-sm text-neutral-200">Design Systems</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Outcome</p>
<p className="text-sm text-neutral-200">-35% UI drift</p>
</div>
<div className="rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Timeline</p>
<p className="text-sm text-neutral-200">9 weeks</p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50" href="mailto:hello@otm.design?subject=Helix%20case%20study%20request">
<i className="h-4 w-4" data-lucide="mail"></i> Request full case study
            </a>
</div>
</div>
</div>
</div>

<section className="relative z-10" id="about">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="mb-8 max-w-3xl">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">About</h2>
<p className="mt-3 text-neutral-300">
            I’m a Senior UI/UX & Product Designer focused on shaping systems that scale:
            brand languages, design systems, and product experiences. I work end‑to‑end—from research and
            strategy to pixel‑perfect execution—partnering with founders and teams to ship meaningful outcomes.
          </p>
</div>
<div className="grid gap-6 md:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<h3 className="text-sm font-semibold text-white">Core strengths</h3>
<ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-neutral-300 sm:grid-cols-3">
<li className="rounded-md border border-white/10 bg-black/30 px-3 py-2">Product Strategy</li>
<li className="rounded-md border border-white/10 bg-black/30 px-3 py-2">Interaction Design</li>
<li className="rounded-md border border-white/10 bg-black/30 px-3 py-2">Design Systems</li>
<li className="rounded-md border border-white/10 bg-black/30 px-3 py-2">AI Workflows</li>
<li className="rounded-md border border-white/10 bg-black/30 px-3 py-2">Prototyping</li>
<li className="rounded-md border border-white/10 bg-black/30 px-3 py-2">Brand Systems</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<h3 className="text-sm font-semibold text-white">Stack</h3>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="figma"></i> Figma</span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="code-2"></i> React</span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="square-stack"></i> Next.js</span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="cpu"></i> AI • LLMs</span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="shapes"></i> Tokens</span>
<span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10"><i className="h-3.5 w-3.5 text-emerald-300" data-lucide="sparkles"></i> Prototypes</span>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative z-10" id="approach">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Approach</h2>
<p className="mt-2 max-w-2xl text-sm text-neutral-400">Opinionated where it matters, flexible where it counts. I bias toward clarity, velocity, and measurable outcomes.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="compass"></i> Align
            </div>
<p className="text-sm text-neutral-300">Define goals, constraints, and success metrics. Map risks and dependencies.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="workflow"></i> Explore
            </div>
<p className="text-sm text-neutral-300">Diverge thoughtfully, test assumptions quickly, and narrow with evidence.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="beaker"></i> Validate
            </div>
<p className="text-sm text-neutral-300">Prototype with real data when possible. Iterate with qualitative + quantitative signals.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/20">
<i className="h-3.5 w-3.5" data-lucide="check-circle-2"></i> Ship
            </div>
<p className="text-sm text-neutral-300">Polish details, document decisions, and hand off cleanly with design tokens and specs.</p>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative z-10" id="services">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Services</h2>
<p className="mt-2 text-sm text-neutral-400">Focused, outcome-driven engagements tailored to your team's needs.</p>
</div>
<a className="hidden items-center gap-2 rounded-md bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50 sm:inline-flex" href="#contact">
<i className="h-4 w-4" data-lucide="handshake"></i> Start a project
          </a>
</div>
<div className="grid gap-6 md:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 ring-1 ring-inset ring-white/10">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="layout-dashboard"></i> Product Design
            </div>
<p className="text-sm text-neutral-300">End-to-end UX/UI for web and mobile products.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Research, flows, wireframes</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> High‑fidelity UI & prototypes</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Specs & handoff</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 ring-1 ring-inset ring-white/10">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="badges"></i> Brand Systems
            </div>
<p className="text-sm text-neutral-300">Identity, tokens, and UI kits that scale across products.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Visual identity & art direction</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Tokenized components</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Guidelines & rollout</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 ring-1 ring-inset ring-white/10">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="globe"></i> Web Experience
            </div>
<p className="text-sm text-neutral-300">Marketing sites and docs with modern stacks.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Content architecture</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Component libraries</li>
<li className="flex items-start gap-2"><i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="check"></i> Performance & a11y</li>
</ul>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative z-10" id="testimonials">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">What clients say</h2>
<p className="mt-2 text-sm text-neutral-400">A few words from partners and teams I’ve worked with.</p>
</div>
<div className="grid gap-6 md:grid-cols-2">
<figure className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" />
<figcaption>
<p className="text-sm font-medium text-white">Aisha Bello</p>
<p className="text-xs text-neutral-400">VP Product, Nimbus</p>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-neutral-300">
              “Olawale brings clarity to complex problems. We shipped faster with higher confidence. Our team still uses the system he set up.”
            </blockquote>
</figure>
<figure className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" />
<figcaption>
<p className="text-sm font-medium text-white">David Kim</p>
<p className="text-xs text-neutral-400">Founder, Volt</p>
</figcaption>
</div>
<blockquote className="mt-4 text-sm text-neutral-300">
              “He elevated our product and brand in weeks. The handoff was pristine—engineering had everything they needed.”
            </blockquote>
</figure>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative z-10" id="faq">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">FAQ</h2>
<p className="mt-2 text-sm text-neutral-400">Quick answers to common questions.</p>
</div>
<div className="grid gap-3 md:grid-cols-2">
<details className="group rounded-xl border border-white/10 bg-neutral-900/60 p-4 open:bg-neutral-900/70">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
              What’s your typical engagement model?
              <i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">6–12 week sprints with clear milestones and weekly syncs. I can embed with your team or lead as an external partner.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-neutral-900/60 p-4 open:bg-neutral-900/70">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
              Do you work with early-stage startups?
              <i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Yes—especially where velocity and clarity are critical. I help define scope, de‑risk assumptions, and ship quickly.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-neutral-900/60 p-4 open:bg-neutral-900/70">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
              What deliverables can we expect?
              <i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Research synthesis, UX flows, high‑fidelity UI, prototypes, tokenized components, and documentation for smooth handoff.</p>
</details>
<details className="group rounded-xl border border-white/10 bg-neutral-900/60 p-4 open:bg-neutral-900/70">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-white">
              How do we get started?
              <i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Send a brief via email or book a call. We’ll align on goals, scope, and timeline, then kick off with a short discovery.</p>
</details>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative z-10" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="grid items-center gap-8 md:grid-cols-3">
<div className="md:col-span-2">
<h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Let’s build something great</h2>
<p className="mt-3 max-w-xl text-neutral-300">Open to select collaborations and advisory. Tell me about your team, goals, and timelines—I'll respond within 1–2 business days.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/30 transition hover:bg-emerald-400/15 hover:text-emerald-200 hover:ring-emerald-400/50..." href="mailto:hello@otm.design?subject=Project%20inquiry%20from%20website&body=Hi%20Olawale%2C%0A%0AHere%27s%20a%20quick%20overview%20of%20our%20project%3A%0A-%20Goals%3A%0A-%20Scope%3A%0A-%20Timeline%3A%0A-%20Team%20contacts%3A%0A%0ALooking%20forward%20to%20your%20thoughts.">
<i className="h-4 w-4" data-lucide="mail"></i> Email me
              </a>
<a className="inline-flex items-center gap-2 rounded-md bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="mailto:hello@otm.design?subject=Book%20a%20call&body=Hi%20Olawale%2C%20I%27d%20like%20to%20schedule%20a%2030‑minute%20intro%20to%20discuss%20our%20project.%20I%27m%20available%20on%20%5Bdates%5D.%0A%0AThanks!">
<i className="h-4 w-4" data-lucide="calendar"></i> Book a 30‑min intro
              </a>
</div>
<div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-neutral-900/60 px-2.5 py-1">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="clock-4"></i> 1–2 business day response
              </span>
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-neutral-900/60 px-2.5 py-1">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="globe-2"></i> Remote • Global
              </span>
</div>
</div>
<aside className="md:col-span-1">
<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-6">
<h3 className="text-sm font-semibold text-white">Details</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="zap"></i>
                  Available for select collaborations
                </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="map-pin"></i>
                  Flexible time zones
                </li>
<li className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="message-square"></i>
                  Weekly syncs • Clear milestones
                </li>
</ul>
<div className="mt-5">
<p className="text-xs font-medium uppercase tracking-wider text-neutral-400">Elsewhere</p>
<div className="mt-2 flex flex-wrap gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="#">
<i className="h-3.5 w-3.5" data-lucide="linkedin"></i> LinkedIn
                  </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="#">
<i className="h-3.5 w-3.5" data-lucide="twitter"></i> Twitter
                  </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="#">
<i className="h-3.5 w-3.5" data-lucide="github"></i> GitHub
                  </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10 transition hover:bg-white/7.5 hover:text-white hover:ring-white/20" href="#">
<i className="h-3.5 w-3.5" data-lucide="figma"></i> Figma
                  </a>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<span className="sr-only opacity-100"></span>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-10 pt-10 lg:px-8">
<div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
<a aria-label="Go to top" className="group inline-flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/60 backdrop-blur-sm transition-colors duration-300 group-hover:border-emerald-400/50">
<span className="text-sm font-semibold tracking-tight text-white">OTM</span>
</div>
<span className="text-sm font-medium text-neutral-400">Olawale Timothy Morenikeji</span>
</a>
<nav aria-label="Footer navigation" className="flex flex-wrap items-center justify-center gap-2">
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#work">Work</a>
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#services">Services</a>
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#about">About</a>
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#approach">Approach</a>
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#testimonials">Testimonials</a>
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#faq">FAQ</a>
<a className="rounded-md px-3 py-1.5 text-xs text-neutral-400 transition hover:bg-white/5 hover:text-white" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<p className="mt-6 text-center text-xs text-neutral-500">© <span id="year"></span> OTM Design. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
