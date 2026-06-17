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
      
      // Lucide icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      });

      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
          menuBtn.setAttribute('aria-expanded', String(!expanded));
          mobileNav.classList.toggle('hidden');
        });
      }

      // Waitlist form handler (demo)
      const form = document.getElementById('waitlistForm');
      const toast = document.getElementById('toast');
      const year = document.getElementById('year');
      if (year) year.textContent = new Date().getFullYear();
      if (form && toast) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          // Simulate success
          toast.classList.remove('hidden');
          setTimeout(() => toast.classList.add('hidden'), 2800);
          form.reset();
        });
      }

      // Theme toggle (light/dark via page invert, persists)
      const themeToggle = document.getElementById('themeToggle');
      const knob = document.getElementById('toggleKnob');
      const sun = document.getElementById('sunIcon');
      const moon = document.getElementById('moonIcon');
      const root = document.documentElement;

      function applyTheme(mode) {
        if (mode === 'light') {
          root.style.filter = 'invert(1) hue-rotate(180deg)';
          if (themeToggle) themeToggle.setAttribute('aria-checked', 'true');
          if (knob) knob.classList.add('translate-x-4');
          if (sun) { sun.classList.remove('opacity-50'); sun.classList.add('opacity-100'); }
          if (moon) { moon.classList.remove('opacity-100'); moon.classList.add('opacity-50'); }
        } else {
          root.style.filter = '';
          if (themeToggle) themeToggle.setAttribute('aria-checked', 'false');
          if (knob) knob.classList.remove('translate-x-4');
          if (sun) { sun.classList.remove('opacity-100'); sun.classList.add('opacity-50'); }
          if (moon) { moon.classList.remove('opacity-50'); moon.classList.add('opacity-100'); }
        }
      }

      let theme = localStorage.getItem('theme') || 'dark';
      applyTheme(theme);

      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          theme = theme === 'dark' ? 'light' : 'dark';
          localStorage.setItem('theme', theme);
          applyTheme(theme);
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
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

<div className="absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-3xl will-change-transform animate-spin" style={{background: 'conic-gradient(from 0deg, rgba(99, 102, 241, 0.65), rgba(236, 72, 153, 0.65), rgba(56, 189, 248, 0.65), rgba(99, 102, 241, 0.65))', animationDuration: '60s', animationTimingFunction: 'linear', animationIterationCount: 'infinite', maskImage: 'radial-gradient(circle at center, black 55%, transparent 70%)'}}></div>

<div className="absolute -top-24 -left-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25 animate-pulse" style={{background: 'radial-gradient(35rem 35rem at 30% 30%, rgba(99,102,241,0.7), transparent 60%)', animationDuration: '4.5s'}}></div>
<div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-25 animate-pulse" style={{background: 'radial-gradient(35rem 35rem at 70% 70%, rgba(236,72,153,0.6), transparent 60%)', animationDuration: '5.5s'}}></div>

<div className="absolute inset-0 opacity-[0.11]">
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at 50% 40%, black 50%, transparent 90%)'}}></div>
</div>

<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns='http: '//www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'&gt', backgroundSize: '220px 220px'}}></div>
</div>

<header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">

<a className="group flex items-center gap-3" href="#">
<div className="relative grid h-8 w-8 place-items-center rounded-md ring-1 ring-white/15 bg-neutral-900/70 outline outline-1 outline-black/20">
<span className="text-[13px] font-semibold tracking-tight text-white">AX</span>
<span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-indigo-400/30 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div>
<span className="text-white text-[15px] md:text-[16px] font-medium tracking-tight">Axion</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Product</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Docs</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Company</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#">Sign in</a>

<button aria-checked="false" aria-label="Toggle theme" className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 hover:ring-white/20 transition-colors" id="themeToggle" role="switch">
<span className="sr-only">Toggle theme</span>
<i className="h-4 w-4 opacity-100" data-lucide="moon" id="moonIcon"></i>
<div className="relative h-5 w-9 rounded-full bg-white/10 ring-1 ring-inset ring-white/10">
<span className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white translate-x-0 transition-transform will-change-transform" id="toggleKnob"></span>
</div>
<i className="h-4 w-4 opacity-50" data-lucide="sun" id="sunIcon"></i>
</button>
<a className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/15 hover:bg-white/15 hover:ring-white/25 transition-colors" href="#waitlist">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Join waitlist
            </a>
</div>

<button aria-controls="mobileNav" aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-white/15 bg-neutral-900/70 hover:bg-neutral-800/70 transition-colors" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden pb-4" id="mobileNav">
<div className="mt-2 grid gap-2">
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/15 transition-all" href="#">
              Product <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/15 transition-all" href="#">
              Pricing <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/15 transition-all" href="#">
              Docs <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/15 transition-all" href="#">
              Company <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-2 pt-2">
<a className="flex-1 text-center rounded-md px-3 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/15 transition-all" href="#">Sign in</a>
<a className="flex-1 text-center rounded-md px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 ring-1 ring-inset ring-white/15 hover:ring-white/25 transition-all" href="#waitlist">Join</a>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative">
<div className="mx-auto max-w-7xl px-6">
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-10 items-center pt-16 md:pt-24 lg:pt-28 pb-20">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/10 px-2.5 py-1.5 mb-6 text-[12px] leading-none text-neutral-300">
<i className="h-3.5 w-3.5" data-lucide="cpu"></i>
                Adaptive interfaces for your stack
              </div>
<h1 className="text-white tracking-tight text-4xl sm:text-5xl lg:text-6xl font-semibold">
                Build with adaptive AI interfaces
              </h1>
<p className="mt-4 text-[15px] sm:text-base text-neutral-300 max-w-2xl">
                Ship intelligent UIs that learn from every interaction. Orchestrate models, state, and actions with a single, composable interface layer.
              </p>

<div className="mt-8" id="waitlist">
<form className="group relative isolate w-full max-w-xl" id="waitlistForm">
<div className="flex items-stretch gap-2 rounded-lg ring-1 ring-inset ring-white/10 bg-neutral-900/60 p-1.5 backdrop-blur">
<div className="flex items-center px-3 text-neutral-400">
<i className="h-4.5 w-4.5" data-lucide="mail"></i>
</div>
<input autocomplete="email" className="flex-1 bg-transparent placeholder:text-neutral-500 text-neutral-100 focus:outline-none text-[15px] py-2" inputmode="email" name="email" placeholder="you@company.com" required="" type="email"/>
<button className="relative inline-flex items-center gap-2 rounded-md bg-indigo-500/90 px-3.5 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-0 transition-colors" type="submit">
                      Join waitlist
                      <i className="h-4 w-4" data-lucide="arrow-right"></i>
<span className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-white/10"></span>
</button>
</div>
<p className="mt-3 text-[13px] text-neutral-400">
                    No spam. Confirm in your inbox. Priority access for early teams.
                  </p>
</form>
</div>

<div className="mt-10 flex items-center gap-6">
<div className="h-px w-10 bg-white/10"></div>
<p className="text-[12px] uppercase tracking-wider text-neutral-400">Trusted by builders at</p>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 opacity-90">
<div className="text-neutral-400 text-sm font-medium tracking-tight">ALPHA</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">NOVA</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">QUANT</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">PIXEL</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">CORE</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">SCOPE</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40 backdrop-blur">

<div className="flex items-center gap-1 px-4 py-3 border-b border-white/10">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400/70"></span>
<div className="ml-3 text-[12px] text-neutral-400">/api/ai/session</div>
</div>
<div className="p-4 sm:p-6">
<div className="rounded-xl ring-1 ring-white/10 bg-black/40 p-4">
<div className="flex items-center gap-2 text-[12px] text-neutral-400 mb-3">
<i className="h-4 w-4" data-lucide="bot"></i>
                      AI Console
                    </div>
<pre className="text-[12px] leading-6 text-neutral-300 overflow-x-auto font-['JetBrains_Mono']">
curl https://api.axion.dev/v1/session \
  -H "Authorization: Bearer …" \
  -H "Content-Type: application/json" \
  -d '{
    "interface": "assist",
    "tools": ["search", "summarize", "compose"],
    "memory": true,
    "context": {
      "project": "alpha",
      "persona": "analyst"
    }
  }'</pre>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-[12px] text-neutral-400 mb-1">Latency</div>
<div className="text-lg font-semibold tracking-tight text-white">62 ms</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-[12px] text-neutral-400 mb-1">Cost / 1K</div>
<div className="text-lg font-semibold tracking-tight text-white">$0.001</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-[12px] text-neutral-400 mb-1">Uptime</div>
<div className="text-lg font-semibold tracking-tight text-white">99.99%</div>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-white/5 p-4">
<div className="text-[12px] text-neutral-400 mb-1">SDKs</div>
<div className="text-lg font-semibold tracking-tight text-white">JS · Python</div>
</div>
</div>
<div className="mt-4 rounded-lg ring-1 ring-white/10 bg-gradient-to-r from-indigo-500/10 via-sky-500/10 to-fuchsia-500/10 p-4">
<div className="flex items-center gap-2 text-[12px] text-neutral-300">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                      Autotune adapts prompts, tools, and UI in real time
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-[13px] text-neutral-400">© <span id="year"></span> Axion Labs</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/10 transition" href="#">
<i className="h-4 w-4" data-lucide="github"></i>
            GitHub
          </a>
<a className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/5 hover:ring-white/10 transition" href="#">
<i className="h-4 w-4" data-lucide="twitter"></i>
            X
          </a>
<a className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-neutral-100 bg-white/10 hover:bg-white/15 ring-1 ring-inset ring-white/15 hover:ring-white/25 transition" href="#waitlist">
<i className="h-4 w-4" data-lucide="mail"></i>
            Join waitlist
          </a>
</div>
</div>
</footer>

<div className="pointer-events-none fixed left-4 bottom-4 z-50 hidden" id="toast">
<div className="flex items-center gap-3 rounded-lg bg-neutral-900/95 ring-1 ring-white/10 px-4 py-3">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></div>
<div className="text-sm text-neutral-200">You’re on the list. We’ll email you soon.</div>
</div>
</div>


    </>
  );
}
