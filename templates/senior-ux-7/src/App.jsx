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



    // Initialize icons with 1.5 stroke width
    window.lucide && window.lucide.createIcons({
      attrs: { 'stroke-width': 1.5 }
    });

    // Mobile menu toggle
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    btn && btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', menu.classList.contains('hidden') ? 'false' : 'true');
      const iconName = btn.querySelector('i');
      if (iconName) {
        iconName.setAttribute('data-lucide', menu.classList.contains('hidden') ? 'menu' : 'x');
        window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Year
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  
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
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(600px 300px at 20% 0%, #6366f1 6%, rgba(99,102,241,0) 60%), radial-gradient(600px 300px at 80% 0%, #22d3ee 6%, rgba(34,211,238,0) 60%)'}}></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to bottom, rgba(10,10,11,0), rgba(10,10,11,1) 60%)'}}></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>

<header className="sticky top-0 z-50">
<div className="border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a aria-label="Home" className="group inline-flex items-center gap-3" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-neutral-900/70 text-neutral-200 transition-colors group-hover:border-white/25 group-hover:text-white">
<span className="text-[13px] font-semibold tracking-tight">AL</span>
</div>
<span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">Ava Lin</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#writing">Writing</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-neutral-200 backdrop-blur transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i>
              Get in touch
            </a>
<a aria-label="Download résumé" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-neutral-900/70 px-3.5 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
<i className="h-4 w-4" data-lucide="download"></i>
              Résumé
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-neutral-900/70 text-neutral-300 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<div className="mx-auto max-w-7xl px-6 py-4">
<nav className="grid gap-3">
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition" href="#work">Work</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition" href="#process">Process</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition" href="#about">About</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition" href="#writing">Writing</a>
<a className="rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 transition" href="#contact">Contact</a>
</nav>
</div>
</div>
</div>
</header>
<main>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-20 md:pb-28">
<div className="grid items-center gap-10 md:grid-cols-2">
<div>
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Available for select consulting (Q4)
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
              Senior UX Designer crafting data‑informed, human‑centered products.
            </h1>
<p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
              I help product teams ship experiences people love—balancing usability, business goals, and engineering realities. From 0→1 to scale, I lead with research, systems thinking, and crisp execution.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#work">
<i className="h-4 w-4" data-lucide="folder-open"></i>
                View case studies
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#contact">
<i className="h-4 w-4" data-lucide="message-square"></i>
                Start a project
              </a>
</div>
<div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
<div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">12+</div>
<div className="mt-1 text-xs text-neutral-400">Years experience</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">40M+</div>
<div className="mt-1 text-xs text-neutral-400">Users impacted</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">30+</div>
<div className="mt-1 text-xs text-neutral-400">Shipped products</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/40 p-4">
<div className="text-2xl font-semibold tracking-tight text-white">+42</div>
<div className="mt-1 text-xs text-neutral-400">Avg. NPS lift</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-2xl opacity-30 blur-2xl" style={{background: 'radial-gradient(60% 60% at 60% 40%, rgba(99,102,241,0.3), rgba(99,102,241,0))'}}></div>
<figure className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60 shadow-2xl">
<img alt="Product design boards and sketches" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</figure>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="Workshop" className="h-24 w-full rounded-lg border border-white/10 object-cover" src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Design system" className="h-24 w-full rounded-lg border border-white/10 object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Team collaboration" className="h-24 w-full rounded-lg border border-white/10 object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="work">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Selected work</h2>
<p className="mt-2 text-sm text-neutral-400">End‑to‑end case studies across fintech, SaaS, and platform UX.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
<i className="h-4 w-4" data-lucide="external-link"></i>
            All projects
          </a>
</div>

<a className="group mt-8 block overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
<div className="grid gap-0 md:grid-cols-2">
<div className="p-6 sm:p-8 lg:p-10">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i>
                Fintech · Growth &amp; Onboarding
              </div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-white">Reducing onboarding drop‑off by 27% for a payments platform</h3>
<p className="mt-3 text-sm leading-relaxed text-neutral-300">
                Led research, flows, and design system updates to streamline KYC, resulting in a measurable lift in conversion and faster time‑to‑value.
              </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">User research</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">IA</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">Design system</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">Experimentation</span>
</div>
<div className="mt-6 inline-flex items-center gap-2 text-sm text-indigo-300">
                Read the case study
                <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" style={{background: 'linear-gradient(180deg, rgba(99,102,241,1), rgba(99,102,241,0))'}}></div>
<img alt="Payments onboarding UI preview" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</a>

<div className="mt-8 grid gap-6 md:grid-cols-2">
<a className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
<div className="aspect-[16/10] overflow-hidden border-b border-white/10">
<img alt="Analytics platform UI" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-6">
<div className="inline-flex items-center gap-2 text-[11px] text-neutral-400">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-3"></i>
                SaaS · Analytics
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white">Designing a modular insights hub for enterprise analytics</h3>
<p className="mt-2 text-sm text-neutral-300">Increased weekly active use by 19% through personalization and Jobs‑to‑be‑Done mapping.</p>
</div>
</a>
<a className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
<div className="aspect-[16/10] overflow-hidden border-b border-white/10">
<img alt="Team collaboration and workshops" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="inline-flex items-center gap-2 text-[11px] text-neutral-400">
<i className="h-3.5 w-3.5" data-lucide="layout-dashboard"></i>
                Platform · IA &amp; Navigation
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white">Re‑architecting navigation for a platform of 20+ products</h3>
<p className="mt-2 text-sm text-neutral-300">Shipped a scalable IA and cross‑product wayfinding that reduced support tickets by 23%.</p>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="process">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Process</h2>
<p className="mt-2 text-sm text-neutral-400">A pragmatic, collaborative approach anchored in outcomes.</p>
</div>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="search"></i>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">Discover</h3>
<p className="mt-2 text-sm text-neutral-300">Contextual inquiry, stakeholder mapping, analytics review, and hypothesis framing.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="map"></i>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">Define</h3>
<p className="mt-2 text-sm text-neutral-300">JTBD, problem statements, North Star, success metrics, and scope.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="pen-tool"></i>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">Design</h3>
<p className="mt-2 text-sm text-neutral-300">Flows, wireframes, prototypes, and systems that scale across surfaces.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="check-circle-2"></i>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">Validate</h3>
<p className="mt-2 text-sm text-neutral-300">Usability testing, pilots, experiments, and partner with Eng to ship.</p>
</div>
</div>
<div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Design principles</p>
<p className="text-xs text-neutral-400">Clarity · Momentum · Trust · Accessibility first</p>
</div>
</div>
<div className="flex gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">WCAG 2.2 AA</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">Heuristics</span>
<span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">Design tokens</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="grid gap-8 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<h3 className="text-lg font-semibold tracking-tight text-white">Methods</h3>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">User interviews</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Surveys</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Journey mapping</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Service blueprints</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">A/B tests</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Usability testing</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Design audits</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Accessibility reviews</span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<h3 className="text-lg font-semibold tracking-tight text-white">Tools</h3>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Figma</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">FigJam</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Miro</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Storybook</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Amplitude</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Looker</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Maze</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">Notion</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Kind words</h2>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<figure className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="flex items-center gap-3">
<img alt="Portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-medium text-white">Jordan Park</figcaption>
<p className="text-xs text-neutral-400">VP Product, Atlas</p>
</div>
</div>
<blockquote className="mt-4 text-sm text-neutral-300">Ava blends strategic thinking with hands‑on craft. She elevated our product direction and shipped improvements that moved our metrics quickly.</blockquote>
</figure>
<figure className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="flex items-center gap-3">
<img alt="Portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-medium text-white">Rina K.</figcaption>
<p className="text-xs text-neutral-400">Director of Design, Nova</p>
</div>
</div>
<blockquote className="mt-4 text-sm text-neutral-300">Her systems work is exceptional—clean tokens, scalable components, and thorough documentation that our engineers loved.</blockquote>
</figure>
<figure className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<div className="flex items-center gap-3">
<img alt="Portrait" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<figcaption className="text-sm font-medium text-white">Miguel Santos</figcaption>
<p className="text-xs text-neutral-400">Eng Manager, Flux</p>
</div>
</div>
<blockquote className="mt-4 text-sm text-neutral-300">Ava is a rare partner who understands tradeoffs. She anticipates constraints and collaborates deeply to ship with quality.</blockquote>
</figure>
</div>
</div>
</section>

<section className="relative" id="writing">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Writing</h2>
<p className="mt-2 text-sm text-neutral-400">Notes on product thinking and design craft.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#">
<i className="h-4 w-4" data-lucide="rss"></i>
            Subscribe
          </a>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-3">
<a className="group rounded-2xl border border-white/10 bg-neutral-900/50 p-5 transition hover:border-white/20" href="#">
<div className="inline-flex items-center gap-2 text-[11px] text-neutral-400">
<i className="h-3.5 w-3.5" data-lucide="notebook-text"></i>
              Product Strategy
            </div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">North Star metrics that don’t lie</h3>
<p className="mt-2 text-sm text-neutral-300">A practical rubric to align teams and avoid vanity signals.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300">
              Read
              <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</a>
<a className="group rounded-2xl border border-white/10 bg-neutral-900/50 p-5 transition hover:border-white/20" href="#">
<div className="inline-flex items-center gap-2 text-[11px] text-neutral-400">
<i className="h-3.5 w-3.5" data-lucide="badge-check"></i>
              Accessibility
            </div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Designing default accessibility into your system</h3>
<p className="mt-2 text-sm text-neutral-300">Patterns, tokens, and checks to scale inclusive UX.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300">
              Read
              <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</a>
<a className="group rounded-2xl border border-white/10 bg-neutral-900/50 p-5 transition hover:border-white/20" href="#">
<div className="inline-flex items-center gap-2 text-[11px] text-neutral-400">
<i className="h-3.5 w-3.5" data-lucide="workflow"></i>
              Process
            </div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">From insights to action in 48 hours</h3>
<p className="mt-2 text-sm text-neutral-300">A lightweight loop to turn research into shipped improvements.</p>
<div className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300">
              Read
              <i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="grid gap-8 md:grid-cols-3">
<div className="md:col-span-1">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/60">
<img alt="Ava Lin portrait" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
<div className="md:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Hi, I’m Ava—designer, systems thinker, collaborator.</h2>
<p className="mt-4 text-sm leading-relaxed text-neutral-300">
              I’ve led UX across early‑stage startups and global platforms. I thrive in ambiguity, shaping strategy with research and transforming complexity into intuitive flows and resilient systems. I work closely with PMs and Engineers to ship, learn, and iterate.
            </p>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
<div className="text-sm font-medium text-white">Focus areas</div>
<p className="mt-1 text-xs text-neutral-300">Onboarding, navigation, design systems</p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
<div className="text-sm font-medium text-white">Industries</div>
<p className="mt-1 text-xs text-neutral-300">Fintech, B2B SaaS, platforms</p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/50 p-4">
<div className="text-sm font-medium text-white">Values</div>
<p className="mt-1 text-xs text-neutral-300">Clarity, kindness, rigor</p>
</div>
</div>
<div className="mt-6 inline-flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-neutral-200 transition hover:border-white/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
                Book a chat
              </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="link"></i>
                LinkedIn
              </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="dribbble"></i>
                Dribbble
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
<div className="grid gap-8 md:grid-cols-2">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Let’s build something great</h2>
<p className="mt-2 text-sm text-neutral-300">Tell me about your team, goals, and timeline. I typically respond within 24 hours.</p>
<div className="mt-6 grid gap-4">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="clock"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Typical engagement</p>
<p className="text-xs text-neutral-400">4–12 weeks, part‑time or full‑time</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Hands‑on + strategic</p>
<p className="text-xs text-neutral-400">From research to final specs and QA</p>
</div>
</div>
</div>
</div>
<form className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 backdrop-blur">
<div className="grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<label className="mb-1 block text-xs text-neutral-300" htmlFor="name">Name</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/30" id="name" name="name" placeholder="Your name" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs text-neutral-300" htmlFor="email">Email</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/30" id="email" name="email" placeholder="you@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs text-neutral-300" htmlFor="company">Company</label>
<input className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/30" id="company" name="company" placeholder="Acme, Inc." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs text-neutral-300" htmlFor="message">Project details</label>
<textarea className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-indigo-400/40 focus:ring-2 focus:ring-indigo-500/30" id="message" name="message" placeholder="What are you building? Goals, timeline, constraints." rows="4"></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="inline-flex items-center gap-3 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="lock"></i>
                Your info is kept private.
              </div>
<button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" type="submit">
<i className="h-4 w-4" data-lucide="send"></i>
                Send
              </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-neutral-900/70">
<span className="text-[12px] font-semibold tracking-tight">AL</span>
</div>
<p className="text-xs text-neutral-400">© <span id="year"></span> Ava Lin. All rights reserved.</p>
</div>
<div className="flex items-center gap-5">
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
<span className="sr-only">LinkedIn</span>
</a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="dribbble"></i>
<span className="sr-only">Dribbble</span>
</a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
<span className="sr-only">Twitter</span>
</a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="mailto:ava@example.com">
<i className="h-4 w-4" data-lucide="mail"></i>
<span className="sr-only">Email</span>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
