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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      });

      // Mobile menu
      const mobileToggle = document.getElementById('mobileToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
          const isOpen = mobileMenu.classList.toggle('hidden') === false;
          mobileToggle.setAttribute('aria-expanded', String(isOpen));
          // Swap icon
          const icon = mobileToggle.querySelector('svg');
          if (icon) {
            const newName = isOpen ? 'x' : 'menu';
            const i = document.createElement('i');
            i.setAttribute('data-lucide', newName);
            i.className = 'h-5 w-5';
            icon.replaceWith(i);
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
          }
        });
      }

      // Year
      const yearEl = document.getElementById('year');
      if (yearEl) yearEl.textContent = new Date().getFullYear();

      // Pricing toggle: mimic peer-checked effect by syncing visibility
      const billingToggle = document.getElementById('billingToggle');
      function setBilling(isYearly) {
        const pairs = [
          ['starter-monthly','starter-yearly'],
          ['growth-monthly','growth-yearly'],
        ];
        pairs.forEach(([m,y]) => {
          const mEl = document.getElementById(m);
          const yEl = document.getElementById(y);
          if (!mEl || !yEl) return;
          if (isYearly) {
            mEl.classList.add('hidden');
            yEl.classList.remove('hidden');
          } else {
            yEl.classList.add('hidden');
            mEl.classList.remove('hidden');
          }
        });
      }
      if (billingToggle) {
        setBilling(billingToggle.checked);
        billingToggle.addEventListener('change', (e) => setBilling(e.target.checked));
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
      

<div className="relative min-h-screen overflow-hidden">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
<div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_10%,rgba(99,102,241,0.18),transparent),radial-gradient(800px_300px_at_80%_10%,rgba(16,185,129,0.12),transparent)]"></div>
<div className="h-full w-full [background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(1000px_500px_at_50%_-10%,#000,transparent)]"></div>
</div>

<header className="sticky z-50 supports-[backdrop-filter]:bg-neutral-900/50 top-0 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-neutral-900 text-neutral-100 ring-1 ring-white/5 transition-colors group-hover:bg-neutral-800" style={{}}>
<span className="text-[10px] font-semibold tracking-[0.18em]">CY</span>
</div>
<span className="text-xl font-semibold tracking-tight text-neutral-100">CYBR</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#research">Research</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#resources">Resources</a>
<a className="text-neutral-300 hover:text-white transition-colors" href="#company">Company</a>
</nav>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 ring-1 ring-white/5 transition hover:text-white hover:border-white/20 hover:bg-neutral-800" style={{}}>
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                Search
              </button>
<a className="text-sm text-neutral-300 hover:text-white transition-colors px-3 py-2" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center rounded-md bg-blue-500/90 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-sm ring-1 ring-inset ring-blue-400/40 transition hover:bg-blue-500 hover:ring-blue-300" href="#demo" style={{}}>
                Get a demo
              </a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm text-neutral-300 ring-1 ring-white/5 transition hover:text-white hover:border-white/20 hover:bg-neutral-800" id="mobileToggle" style={{}}>
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10" id="mobileMenu" style={{}}>
<div className="flex flex-col gap-1 py-3">
<a className="px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition" href="#solutions">Solutions</a>
<a className="px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition" href="#services">Services</a>
<a className="px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition" href="#research">Research</a>
<a className="px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition" href="#pricing">Pricing</a>
<a className="px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition" href="#resources">Resources</a>
<a className="px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-md transition" href="#company">Company</a>
<div className="flex items-center gap-2 px-2 pt-2">
<a className="flex-1 inline-flex items-center justify-center rounded-md bg-blue-500/90 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-sm ring-1 ring-inset ring-blue-400/40 transition hover:bg-blue-500 hover:ring-blue-300" href="#demo" style={{}}>Get a demo</a>
<a className="flex-1 inline-flex items-center justify-center rounded-md border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 ring-1 ring-white/5 transition hover:text-white hover:border-white/20 hover:bg-neutral-800" href="#contact" style={{}}>Contact</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 lg:pb-24 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300 ring-1 ring-white/10" style={{}}>
<svg className="lucide lucide-shield-check h-3.5 w-3.5 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Trusted by security teams worldwide</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-5">
                Prevent, detect, and respond—faster than threats evolve.
              </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl">
                A unified platform for attack surface management, managed detection and response, and zero trust access. Deploy in minutes, secure continuously.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500/90 px-5 py-3 text-sm font-medium tracking-tight text-white ring-1 ring-inset ring-blue-400/40 shadow-sm transition hover:bg-blue-500 hover:ring-blue-300" href="#assessment" style={{}}>
<svg className="lucide lucide-scan-line h-4.5 w-4.5" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
                  Start free assessment
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-neutral-900 px-5 py-3 text-sm text-neutral-300 ring-1 ring-white/5 transition hover:text-white hover:border-white/20 hover:bg-neutral-800" href="#platform" style={{}}>
<svg className="lucide lucide-play-circle h-4.5 w-4.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  View platform
                </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
<div className="rounded-md border border-white/10 bg-white/5 p-4 ring-1 ring-white/10" style={{}}>
<div className="text-2xl font-semibold tracking-tight text-white">99.99%</div>
<div className="text-xs text-neutral-400">Uptime</div>
</div>
<div className="rounded-md border border-white/10 bg-white/5 p-4 ring-1 ring-white/10" style={{}}>
<div className="text-2xl font-semibold tracking-tight text-white">24/7</div>
<div className="text-xs text-neutral-400">Global SOC</div>
</div>
<div className="bg-white/5 border-white/10 border ring-white/10 ring-1 rounded-md pt-4 pr-4 pb-4 pl-4" style={{}}>
<div className="text-2xl font-semibold tracking-tight text-white">400+</div>
<div className="text-xs text-neutral-400">Integrations</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative">
<div className="absolute -inset-2 rounded-xl bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent blur-xl" style={{}}></div>
<div className="relative rounded-xl border border-white/10 bg-neutral-950/60 p-4 ring-1 ring-white/10 shadow-2xl" style={{}}>
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-indigo-400/90" style={{}}></span>
<span className="text-xs text-neutral-400">Live telemetry</span>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<svg className="lucide lucide-signal h-4 w-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi h-4 w-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900 p-3 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between text-[11px] text-neutral-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity h-3.5 w-3.5 text-indigo-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span>Threat stream</span>
</div>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-neutral-300" style={{}}>realtime</span>
</div>
<div className="mt-3 space-y-2 font-['JetBrains_Mono',monospace] text-xs leading-relaxed">
<div className="flex items-center justify-between rounded border border-white/5 bg-black/30 px-2 py-1.5">
<span className="text-indigo-300" style={{}}>[OK]</span>
<span className="text-neutral-300">MFA enforcement across org</span>
<span className="text-neutral-500" style={{}}>14ms</span>
</div>
<div className="flex items-center justify-between rounded border border-white/5 bg-black/30 px-2 py-1.5">
<span className="text-blue-300" style={{}}>[WARN]</span>
<span className="text-neutral-300">New public S3 bucket created</span>
<span className="text-neutral-500" style={{}}>72ms</span>
</div>
<div className="flex items-center justify-between rounded border border-white/5 bg-black/30 px-2 py-1.5">
<span className="text-cyan-400" style={{}}>[ALERT]</span>
<span className="text-neutral-300">Suspicious lateral movement</span>
<span className="text-neutral-500" style={{}}>103ms</span>
</div>
<div className="flex items-center justify-between rounded border border-white/5 bg-black/30 px-2 py-1.5">
<span className="text-indigo-300" style={{}}>[OK]</span>
<span className="text-neutral-300">Endpoint patch baseline</span>
<span className="text-neutral-500" style={{}}>18ms</span>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-neutral-900 p-3 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between text-[11px] text-neutral-400">
<span>Coverage</span>
<svg className="lucide lucide-pie-chart h-3.5 w-3.5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded bg-white/5" style={{}}>
<div className="h-full w-[86%] rounded bg-indigo-400/80" style={{}}></div>
</div>
<div className="mt-1 text-[11px] text-neutral-400">86% protected</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900 p-3 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between text-[11px] text-neutral-400">
<span className="">MTTD</span>
<svg className="lucide lucide-timer h-3.5 w-3.5" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">3.9m</div>
<div className="text-[11px] text-neutral-400">Avg mean time to detect</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-8 -bottom-6 h-20 rounded-xl bg-gradient-to-t from-black/50 to-transparent" style={{}}></div>
</div>
</div>
</div>

<div className="mt-16 border-t border-white/10 pt-8" style={{}}>
<p className="text-center text-xs text-neutral-500" style={{}}>Securing teams at</p>
<div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center">
<div className="mx-auto flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/5 text-[11px] font-medium tracking-[0.18em]" style={{}}>AL</div>
<span className="text-sm text-neutral-400 tracking-tight">AlphaLabs</span>
</div>
<div className="mx-auto flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/5 text-[11px] font-medium tracking-[0.18em]" style={{}}>NX</div>
<span className="text-sm text-neutral-400 tracking-tight">Nexium</span>
</div>
<div className="mx-auto flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/5 text-[11px] font-medium tracking-[0.18em]" style={{}}>PR</div>
<span className="text-sm text-neutral-400 tracking-tight">Prysm</span>
</div>
<div className="mx-auto flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/5 text-[11px] font-medium tracking-[0.18em]" style={{}}>QV</div>
<span className="text-sm text-neutral-400 tracking-tight">Quiver</span>
</div>
<div className="mx-auto flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/5 text-[11px] font-medium tracking-[0.18em]" style={{}}>ST</div>
<span className="text-sm text-neutral-400 tracking-tight">Synthetix</span>
</div>
<div className="mx-auto flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded border border-white/10 bg-white/5 text-[11px] font-medium tracking-[0.18em]" style={{}}>VT</div>
<span className="text-sm text-neutral-400 tracking-tight">Vortex</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="solutions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Unified security, modular by design</h2>
<p className="mt-2 text-neutral-400 max-w-2xl">Adopt what you need today and expand without re-architecting your stack.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#platform">
              Explore platform
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-2" style={{}}>
<svg className="lucide lucide-radar h-5 w-5 text-indigo-400" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Attack Surface Management</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Continuously discover and classify internet-facing assets and risky exposures.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Asset inventory</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Shadow IT detection</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Risk scoring</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-2" style={{}}>
<svg className="lucide lucide-shield h-5 w-5 text-blue-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Managed Detection &amp; Response</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">24/7 SOC with proactive threat hunting and automated containment.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Endpoint &amp; cloud telemetry</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Playbook automation</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>IR in minutes</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-2" style={{}}>
<svg className="lucide lucide-cloud h-5 w-5 text-blue-400" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Cloud Security Posture</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Continuously validate configs across AWS, Azure, and GCP with guardrails.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Misconfig detection</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Drift control</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>KMS &amp; IAM checks</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-2" style={{}}>
<svg className="lucide lucide-key-square h-5 w-5 text-cyan-400" data-lucide="key-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"></path><path d="m14 7 3 3"></path><path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Zero Trust Access</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Identity-aware policies to secure users, devices, and workloads.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Device posture</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Context-based access</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Just-in-time creds</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-2" style={{}}>
<svg className="lucide lucide-circuit-board h-5 w-5 text-cyan-400" data-lucide="circuit-board" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M11 9h4a2 2 0 0 0 2-2V3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Threat Intelligence Graph</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Correlate IOCs, behavior, and telemetry to reduce noise and act fast.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>TTP mapping</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Auto enrichment</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Noise suppression</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-white/5 p-2" style={{}}>
<svg className="lucide lucide-file-check h-5 w-5 text-teal-400" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Compliance &amp; Audit</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Ready-to-ship controls and reports for SOC2, ISO, HIPAA, and more.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Continuous evidence</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Control mapping</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>One-click reports</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative" id="platform">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
<div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white">Unified Console</h3>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-400">env: prod</span>
<span className="h-2 w-2 rounded-full bg-indigo-400" style={{}}></span>
</div>
</div>
<div className="mt-5 grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-neutral-900 p-4 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between text-sm text-neutral-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-list-filter h-4 w-4" data-lucide="list-filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 5h20"></path><path d="M6 12h12"></path><path d="M9 19h6"></path></svg>
                    Alerts
                  </div>
<div className="flex items-center gap-2">
<button className="rounded-md border border-white/10 bg-neutral-950 px-2 py-1 text-xs text-neutral-300 ring-1 ring-white/5 transition hover:text-white hover:border-white/20 hover:bg-neutral-800" style={{}}>Acknowledge</button>
<button className="rounded-md border border-white/10 bg-neutral-950 px-2 py-1 text-xs text-neutral-300 ring-1 ring-white/5 transition hover:text-white hover:border-white/20 hover:bg-neutral-800" style={{}}>Suppress</button>
</div>
</div>
<div className="mt-3 divide-y divide-white/5">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-alert-triangle h-4.5 w-4.5 text-cyan-400" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<div>
<div className="text-sm text-white">Privileged escalation attempt</div>
<div className="text-xs text-neutral-400">user=svc-sync node=prod-core-19</div>
</div>
</div>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-neutral-300" style={{}}>medium</span>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-flame h-4.5 w-4.5 text-cyan-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<div>
<div className="text-sm text-white">Ransomware behavior detected</div>
<div className="text-xs text-neutral-400">host=win-build-07</div>
</div>
</div>
<span className="rounded bg-cyan-500/10 px-1.5 py-0.5 text-[10px] text-cyan-300" style={{}}>critical</span>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-globe-lock h-4.5 w-4.5 text-blue-400" data-lucide="globe-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"></path><path d="M2 12h8.5"></path><path d="M20 6V4a2 2 0 1 0-4 0v2"></path><rect height="5" rx="1" width="8" x="14" y="6"></rect></svg>
<div>
<div className="text-sm text-white">Public S3 bucket exposed</div>
<div className="text-xs text-neutral-400">bucket=media-archive</div>
</div>
</div>
<span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] text-neutral-300" style={{}}>high</span>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900 p-4 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between text-sm text-neutral-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-terminal h-4 w-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
                    Automated Response
                  </div>
<span className="text-xs text-neutral-400">playbook: isolate-host</span>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-black/40 p-3 font-['JetBrains_Mono',monospace] text-[12px] leading-relaxed text-neutral-200" style={{}}>
                  $ isolate host win-build-07
                  <div className="mt-2 text-indigo-300" style={{}}>✓ network interfaces disabled</div>
<div className="text-indigo-300" style={{}}>✓ EDR policy escalated to lockdown</div>
<div className="text-indigo-300" style={{}}>✓ snapshot stored in forensics vault</div>
<div className="mt-3 text-neutral-400">elapsed: 12.4s</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-md border border-white/10 bg-neutral-950 p-3 text-center" style={{}}>
<div className="text-2xl font-semibold tracking-tight text-white">-84%</div>
<div className="text-[11px] text-neutral-400">alert fatigue</div>
</div>
<div className="rounded-md border border-white/10 bg-neutral-950 p-3 text-center" style={{}}>
<div className="text-2xl font-semibold tracking-tight text-white">6x</div>
<div className="text-[11px] text-neutral-400">faster response</div>
</div>
<div className="rounded-md border border-white/10 bg-neutral-950 p-3 text-center" style={{}}>
<div className="text-2xl font-semibold tracking-tight text-white">41%</div>
<div className="text-[11px] text-neutral-400">fewer incidents</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold tracking-tight text-white">Expert services, on demand</h2>
<p className="mt-2 text-neutral-400">Extend your team with seasoned practitioners and specialized capabilities.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#contact">
                Talk to an expert
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-search-code h-5 w-5 text-blue-400" data-lucide="search-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 13.5 2-2.5-2-2.5"></path><path d="m21 21-4.3-4.3"></path><path d="M9 8.5 7 11l2 2.5"></path><circle cx="11" cy="11" r="8"></circle></svg>
<h3 className="text-lg font-medium tracking-tight text-white">Penetration Testing</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Network, web, mobile, and cloud testing mapped to industry frameworks.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-bug h-5 w-5 text-cyan-400" data-lucide="bug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v-9"></path><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"></path><path d="M14.12 3.88 16 2"></path><path d="M21 21a4 4 0 0 0-3.81-4"></path><path d="M21 5a4 4 0 0 1-3.55 3.97"></path><path d="M22 13h-4"></path><path d="M3 21a4 4 0 0 1 3.81-4"></path><path d="M3 5a4 4 0 0 0 3.55 3.97"></path><path d="M6 13H2"></path><path d="m8 2 1.88 1.88"></path><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"></path></svg>
<h3 className="text-lg font-medium tracking-tight text-white">Incident Response</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Retainers and emergency response with forensics and containment.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-id-card h-5 w-5 text-indigo-400" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<h3 className="text-lg font-medium tracking-tight text-white">vCISO &amp; Advisory</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Strategy, policies, risk, and board-ready reporting without the overhead.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-layers h-5 w-5 text-cyan-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-lg font-medium tracking-tight text-white">Security Engineering</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Architecture, automation, and integrations to accelerate your roadmap.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="research">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-8 items-stretch">
<div className="relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/10" style={{}}>
<img alt="Security operations room" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" style={{}}></div>
<div className="absolute bottom-0 p-6">
<span className="rounded bg-white/10 px-2 py-1 text-xs text-neutral-200" style={{}}>Case study</span>
<h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">Reducing MTTD by 82% at AlphaLabs</h3>
<p className="mt-2 text-sm text-neutral-300 max-w-xl">How a distributed team used playbooks and managed detection to compress response times and stop ransomware early.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white transition" href="#" style={{}}>
                  Read the story
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-6 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white">Latest research</h3>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#">All reports</a>
</div>
<div className="mt-4 divide-y divide-white/10" style={{}}>
<a className="group flex items-center gap-4 py-4" href="#">
<img alt="Report cover" className="h-16 w-24 rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight text-white group-hover:underline">2025 Threat Landscape: Initial Access Brokers</div>
<div className="text-xs text-neutral-400">Trends, TTPs, and mitigations to harden against IABs.</div>
</div>
</a>
<a className="group flex items-center gap-4 py-4" href="#">
<img alt="Report cover" className="h-16 w-24 rounded-md object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<div className="text-sm font-medium tracking-tight text-white group-hover:underline">Cloud Misconfigs: The Hidden Breach Vector</div>
<div className="text-xs text-neutral-400">Misconfig patterns across 5,000 audited accounts.</div>
</div>
</a>
<a className="group flex items-center gap-4 py-4" href="#">
<img alt="Report cover" className="h-16 w-24 rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1557844352-761f2565b576?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight text-white group-hover:underline">From MFA to Phishing-Resistant Auth</div>
<div className="text-xs text-neutral-400">Upgrading auth without slowing down the business.</div>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-center justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple, scalable pricing</h2>
<p className="mt-2 text-neutral-400">Transparent plans that grow with your attack surface.</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<span className="text-xs text-neutral-400">Monthly</span>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" id="billingToggle" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-white/10 ring-1 ring-inset ring-white/10 after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all peer-checked:bg-blue-500/60 peer-checked:after:translate-x-4" style={{}}></span>
</label>
<span className="text-xs text-neutral-400">Yearly <span className="ml-1 rounded bg-indigo-500/10 px-1.5 py-0.5 text-[10px] text-indigo-300" style={{}}>save 20%</span></span>
</div>
</div>
<div className="mt-10 grid gap-4 lg:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-white/10 bg-neutral-950/60 p-6 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white">Starter</h3>
<svg className="lucide lucide-leaf h-5 w-5 text-indigo-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-white">
<span className="peer-checked:hidden" id="starter-monthly">$49</span>
<span className="hidden peer-checked:inline" id="starter-yearly">$39</span>
<span className="ml-1 text-sm text-neutral-400">/agent</span>
</div>
<div className="text-xs text-neutral-400">Billed monthly or yearly</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>ASM + CSPM</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Email support</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Up to 100 assets</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-inset ring-white/10 transition hover:bg-white/15" href="#checkout" style={{}}>Get started</a>
</div>

<div className="relative flex flex-col rounded-2xl border border-blue-500/30 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),transparent)] p-6 ring-1 ring-blue-400/20" style={{}}>
<div className="absolute -top-3 right-6 rounded-full bg-blue-500/90 px-2 py-0.5 text-[10px] font-medium tracking-tight text-white ring-1 ring-inset ring-blue-300/60" style={{}}>Most popular</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white">Growth</h3>
<svg className="lucide lucide-rocket h-5 w-5 text-blue-400" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-white">
<span className="peer-checked:hidden" id="growth-monthly">$99</span>
<span className="hidden peer-checked:inline" id="growth-yearly">$79</span>
<span className="ml-1 text-sm text-neutral-400">/agent</span>
</div>
<div className="text-xs text-neutral-400">Billed monthly or yearly</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Everything in Starter</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>MDR 24/7</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited assets</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-500/90 px-4 py-2 text-sm font-medium tracking-tight text-white ring-1 ring-inset ring-blue-400/40 transition hover:bg-blue-500 hover:ring-blue-300" href="#checkout" style={{}}>Start trial</a>
</div>

<div className="flex flex-col rounded-2xl border border-white/10 bg-neutral-950/60 p-6 ring-1 ring-white/10" style={{}}>
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-white">Enterprise</h3>
<svg className="lucide lucide-building-2 h-5 w-5 text-cyan-400" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-white">Custom</div>
<div className="text-xs text-neutral-400">Tailored to your environment</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated SOC</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Private deployment</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-indigo-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Custom SLAs</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-inset ring-white/10 transition hover:bg-white/15" href="#contact" style={{}}>Contact sales</a>
</div>
</div>

<div className="mt-4 text-center text-xs text-neutral-500" style={{}}>Prices shown in USD. Taxes may apply.</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Built for trust</h2>
<p className="mt-2 text-neutral-400">Security begins at home. Our platform and operations follow rigorous controls and audits.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-badge-check h-4 w-4 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>SOC 2 Type II</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-badge-check h-4 w-4 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>ISO 27001</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-badge-check h-4 w-4 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>HIPAA &amp; GDPR</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 text-center" style={{}}>
<svg className="lucide lucide-server mx-auto h-6 w-6 text-blue-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<div className="mt-2 text-sm text-neutral-300">Regional data residency</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 text-center" style={{}}>
<svg className="lucide lucide-lock mx-auto h-6 w-6 text-indigo-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="mt-2 text-sm text-neutral-300">End-to-end encryption</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 text-center" style={{}}>
<svg className="lucide lucide-key-round mx-auto h-6 w-6 text-cyan-400" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<div className="mt-2 text-sm text-neutral-300">Customer-managed keys</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10 text-center" style={{}}>
<svg className="lucide lucide-user-cog mx-auto h-6 w-6 text-cyan-400" data-lucide="user-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg>
<div className="mt-2 text-sm text-neutral-300">Granular RBAC</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold tracking-tight text-white">What teams say</h2>
<p className="mt-2 text-neutral-400">Outcomes that matter, validated by security leaders across industries.</p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{}}/>
<div>
<div className="text-sm font-medium tracking-tight text-white">María Chen</div>
<div className="text-xs text-neutral-400">CISO, AlphaLabs</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">We compressed response from hours to minutes without hiring an army. The automation is pragmatic and safe.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-950/60 p-5 ring-1 ring-white/10" style={{}}>
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{}}/>
<div>
<div className="text-sm font-medium tracking-tight text-white">David Romero</div>
<div className="text-xs text-neutral-400">Head of SecOps, Nexium</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">The graph gives us signal, not noise. We finally focus on the right incidents.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="resources">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Resources</h2>
<p className="mt-2 text-neutral-400">Guides, playbooks, and product updates.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition" href="#">All resources<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<a className="group rounded-xl border border-white/10 bg-neutral-950/60 ring-1 ring-white/10 overflow-hidden transition hover:border-white/20 hover:bg-neutral-900/60" href="#" style={{}}>
<img alt="Guide" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm font-medium tracking-tight text-white group-hover:underline">Playbook: Handling Ransomware in 30 Minutes</div>
<div className="mt-1 text-xs text-neutral-400">Checklist and automation tips for faster containment.</div>
</div>
</a>
<a className="group rounded-xl border border-white/10 bg-neutral-950/60 ring-1 ring-white/10 overflow-hidden transition hover:border-white/20 hover:bg-neutral-900/60" href="#" style={{}}>
<img alt="Blog" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm font-medium tracking-tight text-white group-hover:underline">Hardening Identities Against MFA Fatigue</div>
<div className="mt-1 text-xs text-neutral-400">Stop push-bombing and modernize auth flows.</div>
</div>
</a>
<a className="group rounded-xl border border-white/10 bg-neutral-950/60 ring-1 ring-white/10 overflow-hidden transition hover:border-white/20 hover:bg-neutral-900/60" href="#" style={{}}>
<img alt="Webinar" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm font-medium tracking-tight text-white group-hover:underline">Live Webinar: Building a Threat Intel Program</div>
<div className="mt-1 text-xs text-neutral-400">Lessons from 10,000+ incidents.</div>
</div>
</a>
</div>
</div>
</section>

<section className="relative" id="demo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(16,185,129,0.08),transparent)] p-6 ring-1 ring-white/10" style={{}}>
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Book a security workshop</h3>
<p className="mt-2 text-neutral-300">Bring your team, bring your questions. We’ll map controls to your risk and ship a roadmap in 48 hours.</p>
<ul className="mt-3 space-y-1 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-clock-3 h-4 w-4 text-indigo-400" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>90-minute session</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-users h-4 w-4 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Up to 10 attendees</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-download-cloud h-4 w-4 text-indigo-400" data-lucide="download-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg>Actionable deliverables</li>
</ul>
</div>
<form className="rounded-xl border border-white/10 bg-neutral-950/60 p-4 ring-1 ring-white/10" id="contact" style={{}}>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-neutral-400">First name</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 ring-1 ring-white/5 outline-none transition focus:border-white/20 focus:ring-blue-400/30" placeholder="Alex" style={{}} type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">Last name</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 ring-1 ring-white/5 outline-none transition focus:border-white/20 focus:ring-blue-400/30" placeholder="Rivera" style={{}} type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Work email</label>
<input className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 ring-1 ring-white/5 outline-none transition focus:border-white/20 focus:ring-blue-400/30" placeholder="alex@company.com" style={{}} type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Message</label>
<textarea className="mt-1 w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 ring-1 ring-white/5 outline-none transition focus:border-white/20 focus:ring-blue-400/30" placeholder="Tell us about your environment..." rows="3" style={{}}></textarea>
</div>
</div>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-500/90 px-4 py-2 text-sm font-medium tracking-tight text-white ring-1 ring-inset ring-blue-400/40 transition hover:bg-blue-500 hover:ring-blue-300" style={{}} type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  Request workshop
                </button>
<p className="mt-2 text-[11px] text-neutral-500" style={{}}>By submitting, you agree to our <a className="underline decoration-dotted hover:text-neutral-300" href="#">Privacy Policy</a>.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10" id="company" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-5 gap-8">
<div className="lg:col-span-2">
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded-md border border-white/10 bg-neutral-900 text-neutral-100 ring-1 ring-white/5" style={{}}>
<span className="text-[10px] font-semibold tracking-[0.18em]">CY</span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">CYBR</span>
</div>
<p className="mt-3 text-sm text-neutral-400 max-w-sm">Modern security for modern companies. We help you stay resilient as your environment evolves.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="rounded-md border border-white/10 bg-white/5 p-2 text-neutral-300 ring-1 ring-white/10 transition hover:text-white hover:bg-white/10" href="#" style={{}}>
<svg className="lucide lucide-twitter h-4.5 w-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="GitHub" className="rounded-md border border-white/10 bg-white/5 p-2 text-neutral-300 ring-1 ring-white/10 transition hover:text-white hover:bg-white/10" href="#" style={{}}>
<svg className="lucide lucide-github h-4.5 w-4.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="LinkedIn" className="rounded-md border border-white/10 bg-white/5 p-2 text-neutral-300 ring-1 ring-white/10 transition hover:text-white hover:bg-white/10" href="#" style={{}}>
<svg className="lucide lucide-linkedin h-4.5 w-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-white">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#solutions">Features</a></li>
<li><a className="hover:text-white transition" href="#platform">Platform</a></li>
<li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-white">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white transition" href="#company">About</a></li>
<li><a className="hover:text-white transition" href="#resources">Blog</a></li>
<li><a className="hover:text-white transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-white">Subscribe</h4>
<p className="mt-2 text-sm text-neutral-400">Security news and research, monthly.</p>
<form className="mt-3 flex items-center gap-2">
<input className="w-full rounded-md border border-white/10 bg-neutral-950 px-3 py-2 text-sm text-white placeholder-neutral-500 ring-1 ring-white/5 outline-none transition focus:border-white/20 focus:ring-blue-400/30" placeholder="you@company.com" style={{}} type="email"/>
<button className="inline-flex items-center justify-center rounded-md bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-inset ring-white/10 transition hover:bg-white/15" style={{}}>Join</button>
</form>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-6" style={{}}>
<p className="text-xs text-neutral-500" style={{}}>© <span id="year">2025</span> CYBR Security, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400">
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Status</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
