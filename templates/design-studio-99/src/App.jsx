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



      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      let menuOpen = false;
      if (menuBtn) {
        menuBtn.addEventListener('click', () => {
          menuOpen = !menuOpen;
          mobileMenu.classList.toggle('hidden', !menuOpen);
          menuBtn.innerHTML = menuOpen
            ? '<iconify-icon icon="lucide:x" class="h-5 w-5" style="stroke-width:1.5"></iconify-icon>'
            : '<iconify-icon icon="lucide:menu" class="h-5 w-5" style="stroke-width:1.5"></iconify-icon>';
        });
      }

      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      const form = document.getElementById('contactForm');
      const statusEl = document.getElementById('formStatus');
      if (form) {
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          statusEl.textContent = 'Sending...';
          try {
            const data = Object.fromEntries(new FormData(form).entries());
            // Replace with your endpoint
            await new Promise((r) => setTimeout(r, 800));
            console.log('Form data', data);
            statusEl.textContent = 'Thanks! We’ll be in touch shortly.';
            form.reset();
          } catch (err) {
            statusEl.textContent = 'Something went wrong. Please try again or email us.';
          }
        });
      }
    
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
<div className="absolute inset-0 -z-10">
<div className="pointer-events-none mx-auto max-w-7xl">
<div className="h-40 sm:h-56 bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl"></div>
</div>
</div>
<nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
<a className="inline-flex items-center gap-2" href="#">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-inset ring-indigo-400/20">
<span className="text-sm font-semibold tracking-tight text-indigo-300">A</span>
</span>
<span className="text-lg font-semibold tracking-tight text-neutral-100">ATLR</span>
</div>
</a>
<div className="hidden items-center gap-8 sm:flex">
<a className="text-sm font-medium text-neutral-300 hover:text-neutral-100 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-300 hover:text-neutral-100 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-neutral-300 hover:text-neutral-100 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-neutral-300 hover:text-neutral-100 transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden sm:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" href="#work">
<iconify-icon className="h-4 w-4" icon="lucide:play" style={{strokeWidth: '1.5'}}></iconify-icon>
            View work
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 hover:from-indigo-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" href="#contact">
            Start a project
            <iconify-icon className="h-4 w-4" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<button aria-label="Open menu" className="sm:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-neutral-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="menuBtn">
<iconify-icon className="h-5 w-5" icon="lucide:menu" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</nav>
<div className="sm:hidden hidden border-t border-white/10 bg-neutral-950/80 backdrop-blur" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div className="grid gap-1">
<a className="rounded-md px-3 py-3 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-neutral-100" href="#services">Services</a>
<a className="rounded-md px-3 py-3 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-neutral-100" href="#work">Work</a>
<a className="rounded-md px-3 py-3 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-neutral-100" href="#process">Process</a>
<a className="rounded-md px-3 py-3 text-sm font-medium text-neutral-300 hover:bg-white/5 hover:text-neutral-100" href="#contact">Contact</a>
<a className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-600 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10" href="#contact">
              Start a project
              <iconify-icon className="h-4 w-4" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 sm:pt-16">
<div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
<iconify-icon className="h-3.5 w-3.5 text-indigo-300" icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
              Available for Q1 sprints
            </div>
<h1 className="mt-4 text-5xl sm:text-6xl font-semibold tracking-tight text-white">
              Design that moves the needle.
            </h1>
<p className="mt-4 text-base text-neutral-300 sm:text-lg">
              We partner with startups and small teams to ship brand, product, and web experiences that convert — fast.
            </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/10 hover:from-indigo-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" href="#contact">
                Get a quote
                <iconify-icon className="h-4 w-4" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" href="#work">
                See our work
                <iconify-icon className="h-4 w-4" icon="lucide:image" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8">
<p className="text-xs uppercase text-neutral-400">Trusted by small teams</p>
<div className="mt-3 grid grid-cols-3 items-center gap-3 sm:grid-cols-6">
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-200">ALFA</span>
</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-200">KITE</span>
</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-200">NOVA</span>
</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-200">MERA</span>
</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-200">QUAD</span>
</div>
<div className="rounded-md border border-white/10 bg-white/5 px-3 py-2">
<span className="text-sm font-semibold tracking-tight text-neutral-200">ORBT</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative">
<div className="absolute -inset-x-6 -inset-y-6 -z-10 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-3xl"></div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-2">
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400/80"></span>
<span className="text-xs text-neutral-300">Active sprint</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">4 tasks due</span>
<iconify-icon className="h-4 w-4 text-neutral-400" icon="lucide:clock" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="mt-4 grid gap-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:pen-tool" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-neutral-200">Homepage redesign</p>
</div>
<span className="rounded-md bg-indigo-500/15 px-2 py-1 text-xs text-indigo-300 ring-1 ring-inset ring-indigo-400/20">In progress</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:palette" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-neutral-200">Brand refresh</p>
</div>
<span className="rounded-md bg-fuchsia-500/15 px-2 py-1 text-xs text-fuchsia-300 ring-1 ring-inset ring-fuchsia-400/20">Review</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="h-4 w-4 text-teal-300" icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-neutral-200">Dashboard UX</p>
</div>
<span className="rounded-md bg-teal-500/15 px-2 py-1 text-xs text-teal-300 ring-1 ring-inset ring-teal-400/20">Next</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="h-4 w-4 text-amber-300" icon="lucide:wand-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-medium text-neutral-200">Micro-interactions</p>
</div>
<span className="rounded-md bg-amber-500/15 px-2 py-1 text-xs text-amber-300 ring-1 ring-inset ring-amber-400/20">Concept</span>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-7 w-7 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-200 hover:bg-white/10">
                      Share preview
                      <iconify-icon className="h-3.5 w-3.5" icon="lucide:share" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<p className="mt-3 text-xs text-neutral-400">We ship in focused sprints with transparent progress.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="services">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Services</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-indigo-300 hover:text-indigo-200" href="#contact">
          Get a custom scope
          <iconify-icon className="h-4 w-4" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<p className="mt-3 text-base text-neutral-300 sm:max-w-2xl">From zero-to-one products to brand refreshes, we bring strategy and craft to every engagement.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-inset ring-indigo-400/20">
<iconify-icon className="h-5 w-5 text-indigo-300" icon="lucide:palette" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-neutral-400">Brand</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white">Identity &amp; Strategy</h3>
<ul className="mt-3 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Naming, tone, visual language
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Logo, typography, art direction
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Brand systems &amp; guidelines
            </li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-500/15 ring-1 ring-inset ring-teal-400/20">
<iconify-icon className="h-5 w-5 text-teal-300" icon="lucide:layout-dashboard" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-neutral-400">Product</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white">UI/UX Design</h3>
<ul className="mt-3 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-teal-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Flows, wireframes, prototypes
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-teal-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Dashboard &amp; mobile apps
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-teal-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Usability reviews
            </li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-500/15 ring-1 ring-inset ring-amber-400/20">
<iconify-icon className="h-5 w-5 text-amber-300" icon="lucide:globe-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-neutral-400">Web</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white">Marketing Sites</h3>
<ul className="mt-3 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-amber-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Landing pages that convert
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-amber-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Web art direction
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-amber-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              SEO-first content structure
            </li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-fuchsia-500/15 ring-1 ring-inset ring-fuchsia-400/20">
<iconify-icon className="h-5 w-5 text-fuchsia-300" icon="lucide:component" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-neutral-400">Systems</span>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-white">Design Systems</h3>
<ul className="mt-3 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Tokens, components, docs
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Audit &amp; refactor
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-fuchsia-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Team onboarding
            </li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="process">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">How we work</h2>
<p className="hidden sm:block text-sm text-neutral-400">Typical sprint: 2–3 weeks</p>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">01</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Discover</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">We align on goals, success metrics, audience, and constraints.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">02</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Rapid cycles on structure, flows, and visual direction.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">03</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Refine</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Usability passes, content polish, and micro-interactions.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">04</span>
<h3 className="text-lg font-semibold tracking-tight text-white">Deliver</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Ready-to-ship files, specs, and async walkthroughs.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="work">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Selected work</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-neutral-100" href="#contact">
          Request full portfolio
          <iconify-icon className="h-4 w-4" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<article className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-indigo-400/20 via-fuchsia-400/10 to-teal-400/20"></div>
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Kite Analytics</h3>
<span className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">SaaS</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Dashboard UX and design system for a seed-stage analytics tool.</p>
<div className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-300">
              View case
              <iconify-icon className="h-4 w-4" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-amber-400/20 via-rose-400/10 to-indigo-400/20"></div>
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Mera Health</h3>
<span className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">Healthcare</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Brand refresh and marketing site with conversion-focused IA.</p>
<div className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-300">
              View case
              <iconify-icon className="h-4 w-4" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
<div className="relative">
<div className="aspect-[16/10] bg-gradient-to-br from-teal-400/20 via-indigo-400/10 to-fuchsia-400/20"></div>
<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-white">Quad Finance</h3>
<span className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">Fintech</span>
</div>
<p className="mt-2 text-sm text-neutral-300">End-to-end product design for personal finance automation.</p>
<div className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-300">
              View case
              <iconify-icon className="h-4 w-4" icon="lucide:arrow-up-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">What clients say</h2>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<figure className="rounded-xl border border-white/10 bg-white/5 p-5">
<blockquote className="text-base text-neutral-200">“They shipped in weeks what others scoped for months. Our demo-to-paid jumped 32%.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Lena Park</p>
<p className="text-xs text-neutral-400">Founder, Kite</p>
</div>
</figcaption>
</figure>
<figure className="rounded-xl border border-white/10 bg-white/5 p-5">
<blockquote className="text-base text-neutral-200">“Clear process, strong taste, and great communication. Couldn’t ask for more.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Samir Patel</p>
<p className="text-xs text-neutral-400">CEO, Mera</p>
</div>
</figcaption>
</figure>
<figure className="rounded-xl border border-white/10 bg-white/5 p-5">
<blockquote className="text-base text-neutral-200">“They built our design system and velocity hasn’t slowed since.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Alex Romero</p>
<p className="text-xs text-neutral-400">PM, Quad</p>
</div>
</figcaption>
</figure>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Engagement</h2>
<p className="mt-3 text-base text-neutral-300 sm:max-w-2xl">Flexible ways to work together. Every option includes async updates, source files, and handoff docs.</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Sprint</h3>
<span className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">2–3 weeks</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Tackle one focused objective with clear outcomes.</p>
<ul className="mt-4 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Fixed scope &amp; timeline
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-emerald-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              2–3 async reviews
            </li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-white/15" href="#contact">
            Get details
            <iconify-icon className="h-4 w-4" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="flex h-full flex-col rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 ring-1 ring-inset ring-white/10">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Monthly</h3>
<span className="rounded-md bg-indigo-500/15 px-2 py-1 text-xs text-indigo-300 ring-1 ring-inset ring-indigo-400/20">Popular</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Flexible design capacity embedded with your team.</p>
<ul className="mt-4 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Prioritized backlog
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Unlimited requests
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-indigo-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Next-day comms
            </li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10" href="#contact">
            Check availability
            <iconify-icon className="h-4 w-4" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-white">Project</h3>
<span className="rounded-md bg-white/5 px-2 py-1 text-xs text-neutral-300 ring-1 ring-inset ring-white/10">Fixed</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Clear milestones for a defined end-to-end deliverable.</p>
<ul className="mt-4 grid gap-2">
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-amber-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Scope &amp; milestones
            </li>
<li className="inline-flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="h-4 w-4 text-amber-300" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Fixed investment
            </li>
</ul>
<a className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-neutral-100 hover:bg-white/15" href="#contact">
            Share brief
            <iconify-icon className="h-4 w-4" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="contact">
<div className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Let’s build something great</h2>
<p className="mt-3 text-base text-neutral-300">Tell us about your goals. We’ll reply within one business day with next steps and a ballpark estimate.</p>
<div className="mt-6 grid gap-3">
<div className="inline-flex items-center gap-3">
<iconify-icon className="h-5 w-5 text-neutral-300" icon="lucide:clock" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-neutral-300">Typical start time: 1–2 weeks</span>
</div>
<div className="inline-flex items-center gap-3">
<iconify-icon className="h-5 w-5 text-neutral-300" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-neutral-300">NDA-friendly and async-first</span>
</div>
</div>
</div>
<div className="lg:col-span-7">
<form className="rounded-xl border border-white/10 bg-white/5 p-5" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<label className="block text-xs text-neutral-300" htmlFor="name">Name</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs text-neutral-300" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-300" htmlFor="company">Company</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="company" name="company" placeholder="Optional" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-300" htmlFor="about">What are you building?</label>
<textarea className="mt-1 w-full rounded-md border border-white/10 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="about" name="about" placeholder="Share goals, timeline, and links if helpful." rows="4"></textarea>
</div>
</div>
<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" type="submit">
                Send request
                <iconify-icon className="h-4 w-4" icon="lucide:send" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-neutral-100" href="mailto:hello@atlr.studio">
                or email hello@atlr.studio
                <iconify-icon className="h-4 w-4" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<p className="mt-3 text-xs text-neutral-400" id="formStatus"></p>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500/15 ring-1 ring-inset ring-indigo-400/20">
<span className="text-sm font-semibold tracking-tight text-indigo-300">A</span>
</span>
<div>
<p className="text-sm font-semibold tracking-tight text-white">ATLR</p>
<p className="text-xs text-neutral-400">Design that ships</p>
</div>
</div>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10" href="#">
<iconify-icon className="h-4 w-4" icon="lucide:twitter" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="Dribbble" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10" href="#">
<iconify-icon className="h-4 w-4" icon="lucide:dribbble" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="GitHub" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10" href="#">
<iconify-icon className="h-4 w-4" icon="lucide:github" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="mt-6 grid gap-3 sm:flex sm:items-center sm:justify-between">
<p className="text-xs text-neutral-500">© <span id="year"></span> ATLR Studio. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-neutral-400 hover:text-neutral-200" href="#services">Services</a>
<a className="text-xs text-neutral-400 hover:text-neutral-200" href="#work">Work</a>
<a className="text-xs text-neutral-400 hover:text-neutral-200" href="#process">Process</a>
<a className="text-xs text-neutral-400 hover:text-neutral-200" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
