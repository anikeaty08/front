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
      
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
    
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
      

<header className="fixed top-0 inset-x-0 z-50">
<div className="mx-auto max-w-6xl px-6">
<div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="grid h-8 w-8 place-items-center rounded-md bg-slate-900/60 text-slate-200 border border-white/10">
<span className="text-xs font-medium tracking-tight">KB</span>
</div>
<span className="text-sm font-medium text-slate-100 tracking-tight">Kali Bryan</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#work">Work</a>
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#contact">Contact</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:bg-white/10" href="#contact">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
            Let’s talk
          </a>
</div>
</div>
</header>

<section className="relative min-h-screen flex pt-28 items-center">

<div className="absolute inset-0 -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/backgroundrays-LJVaiOMTPU62AXgkENbGp15m/" width="100%"></iframe>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
</div>
<div className="mx-auto max-w-6xl w-full px-6">
<div className="grid md:grid-cols-12 gap-8 items-center">
<div className="md:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs text-slate-300">Product Designer</span>
</div>
<h1 className="text-4xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
              Designing clear, delightful experiences for complex products
            </h1>
<p className="max-w-xl text-base md:text-lg text-slate-300">
              I help teams craft systems, ship features with clarity, and bring ideas to life—from research and IA to high-fidelity prototypes and motion.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/20 hover:-translate-y-0.5" href="#work">
                View work
                <svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white" href="#contact">
                Book a call
                <svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>
<div className="flex items-center gap-4 pt-4 text-xs text-slate-400">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-star h-4 w-4 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>8+ yrs experience</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span>Design Systems</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Prototyping & Motion</span>
</div>
</div>
</div>
<div className="md:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
<div className="aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
<img alt="Workspace" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-figma h-4 w-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg> Figma
                  </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-codepen h-4 w-4" data-lucide="codepen" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg> Proto
                  </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300">
<svg className="lucide lucide-framer h-4 w-4" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg> Motion
                  </div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="mx-auto max-w-5xl px-6">
<div className="mb-8 flex items-center gap-3">
<svg className="lucide lucide-user h-5 w-5 text-violet-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">About</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<p className="text-slate-300 leading-relaxed">
              I’m a product designer specializing in complex tools, platforms, and design systems. I partner with PMs and engineers to reduce scope risk and ship with clarity—balancing usability, aesthetics, and business outcomes.
            </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Design Systems</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Interaction Design</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Prototyping</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">User Research</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Motion</span>
<span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">3D</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity h-5 w-5 text-violet-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h3 className="text-white font-medium">Availability</h3>
</div>
<label className="inline-flex items-center gap-3">
<span className="text-sm text-slate-300">Open to projects</span>
<input checked className="peer sr-only" type="checkbox" />
<div className="relative h-6 w-10 transition-colors peer-checked:bg-violet-500 bg-slate-700 rounded-full h-7 w-[48px] cursor-pointer bg-slate-900 peer-checked:bg-[#1976D2] transition [-webkit-tap-highlight-color:_transparent]">
<div className="absolute top-0 left-0 m-1 h-5 w-5 rounded-full bg-gray-300 ring-[5px] ring-inset ring-white transition-all peer-checked:translate-x-[20px] peer-checked:bg-white peer-checked:ring-transparent"></div>
</div>
</label>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300 text-sm">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  1–2 weeks lead time
                </div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-slate-300 text-sm">
<svg className="lucide lucide-globe-2 h-4 w-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Remote / EU–US friendly
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="work">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-10 flex items-center gap-3">
<svg className="lucide lucide-folder h-5 w-5 text-violet-300" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Case Studies</h2>
</div>
<div className="space-y-6">

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10">
<div className="grid md:grid-cols-12 gap-6 p-6">
<div className="md:col-span-7">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Analytics Workspace</h3>
<p className="mt-1 text-sm text-slate-400">End-to-end redesign of a data platform: IA, interactions, and design system foundations.</p>
</div>
<div className="flex items-center gap-2">
<a className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/10" href="#">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/10" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</a>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-violet-400/10 px-2 py-1 text-[11px] text-violet-300">Design System</span>
<span className="rounded-md bg-blue-400/10 px-2 py-1 text-[11px] text-blue-300">Prototyping</span>
<span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300">Research</span>
</div>
</div>
<div className="md:col-span-5">
<div className="overflow-hidden rounded-xl border border-white/10">
<div className="aspect-video w-full bg-slate-900/40">
<img alt="Analytics Workspace" className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10">
<div className="grid md:grid-cols-12 gap-6 p-6">
<div className="md:col-span-7">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Mobile Banking App</h3>
<p className="mt-1 text-sm text-slate-400">Streamlined onboarding, clear IA, and motion principles for high-trust flows.</p>
</div>
<div className="flex items-center gap-2">
<a className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/10" href="#">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/10" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</a>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-pink-400/10 px-2 py-1 text-[11px] text-pink-300">UX Strategy</span>
<span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[11px] text-cyan-300">Motion</span>
<span className="rounded-md bg-amber-400/10 px-2 py-1 text-[11px] text-amber-300">Accessibility</span>
</div>
</div>
<div className="md:col-span-5">
<div className="overflow-hidden rounded-xl border border-white/10">
<div className="aspect-video w-full bg-slate-900/40">
<img alt="Mobile Banking App" className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10">
<div className="grid md:grid-cols-12 gap-6 p-6">
<div className="md:col-span-7">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Brand & Web for AI Startup</h3>
<p className="mt-1 text-sm text-slate-400">Identity, system tokens, and responsive marketing site with CMS.</p>
</div>
<div className="flex items-center gap-2">
<a className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/10" href="#">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
<a className="rounded-lg border border-white/10 p-2 text-slate-300 transition-colors hover:bg-white/10" href="#">
<svg className="lucide lucide-globe h-4 w-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="rounded-md bg-indigo-400/10 px-2 py-1 text-[11px] text-indigo-300">Brand</span>
<span className="rounded-md bg-emerald-400/10 px-2 py-1 text-[11px] text-emerald-300">Web</span>
<span className="rounded-md bg-sky-400/10 px-2 py-1 text-[11px] text-sky-300">CMS</span>
</div>
</div>
<div className="md:col-span-5">
<div className="overflow-hidden rounded-xl border border-white/10">
<div className="aspect-video w-full bg-slate-900/40">
<img alt="AI Startup Web" className="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop" />
</div>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-10 flex items-center gap-3">
<svg className="lucide lucide-briefcase h-5 w-5 text-violet-300" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Services</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-layers h-5 w-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="font-medium">Design Systems</h3>
</div>
<p className="mt-3 text-sm text-slate-400">Foundations, tokens, components, documentation, and adoption strategy.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
<div className="flex items-center gap-2 text-slate-200">
<i className="h-5 w-5" data-lucide="cursor-click"></i>
<h3 className="font-medium">Product Design</h3>
</div>
<p className="mt-3 text-sm text-slate-400">From research to polished prototypes—flows, IA, interaction and motion.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<h3 className="font-medium">Brand & Web</h3>
</div>
<p className="mt-3 text-sm text-slate-400">Identity systems, marketing pages, and CMS-driven sites that convert.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="contact">
<div className="mx-auto max-w-lg px-6">
<div className="mb-8 flex items-center gap-3">
<svg className="lucide lucide-send h-5 w-5 text-violet-300" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Contact</h2>
</div>
<form className="space-y-6">
<div>
<label className="mb-2 block text-sm text-slate-300">Name</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none backdrop-blur transition ring-0 focus:border-violet-400/50" placeholder="Your name" type="text" />
</div>
<div>
<label className="mb-2 block text-sm text-slate-300">Email</label>
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none backdrop-blur transition ring-0 focus:border-violet-400/50" placeholder="you@email.com" type="email" />
</div>
<div>
<label className="mb-2 block text-sm text-slate-300">Message</label>
<textarea className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none backdrop-blur transition ring-0 focus:border-violet-400/50" placeholder="Tell me about your project" rows="4"></textarea>
</div>
<div className="flex items-center gap-3">
<input className="peer sr-only" id="copy" type="checkbox" />
<div className="h-5 w-9 cursor-pointer rounded-full bg-slate-700 peer-checked:bg-violet-500 relative">
<label className="absolute inset-0" htmlFor="copy"></label>
<div className="absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4"></div>
</div>
<label className="text-sm text-slate-400" htmlFor="copy">Send me a copy</label>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/10 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/20" type="submit">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
            Send message
          </button>
</form>
<div className="mt-12 flex justify-center gap-4">
<a className="rounded-lg border border-white/10 p-3 text-slate-300 transition-colors hover:bg-white/10" href="#"><svg className="lucide lucide-github h-5 w-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="rounded-lg border border-white/10 p-3 text-slate-300 transition-colors hover:bg-white/10" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="rounded-lg border border-white/10 p-3 text-slate-300 transition-colors hover:bg-white/10" href="#"><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</section>

<footer className="bg-black py-10">
<div className="mx-auto max-w-6xl px-6">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
<p>© 2024 Jane Doe</p>
<div className="flex items-center gap-6">
<a className="transition-colors hover:text-slate-300" href="#about">About</a>
<a className="transition-colors hover:text-slate-300" href="#work">Work</a>
<a className="transition-colors hover:text-slate-300" href="#services">Services</a>
<a className="transition-colors hover:text-slate-300" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
