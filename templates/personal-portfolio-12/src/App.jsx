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



    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
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
      

<div className="min-h-screen flex flex-col">

<header className="border-b border-white/5 bg-[#050712]/80 backdrop-blur">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-7 w-7 flex items-center justify-center rounded-md bg-slate-100 text-slate-900 text-xs font-semibold tracking-tight">
<span>MP</span>
</div>
<span className="text-sm font-medium text-slate-200 tracking-tight">
              My Portfolio
            </span>
</div>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100 hover:bg-white/10 hover:border-white/20 transition-colors" href="#">
<i className="lucide-github text-[14px]"></i>
<span>GitHub</span>
</a>
</nav>

<button aria-label="Toggle navigation" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-colors" type="button">
<i className="lucide-menu text-[18px]"></i>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="border-b border-white/5 bg-gradient-to-b from-[#050712] via-[#050712] to-[#050712]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] gap-10 lg:gap-16 items-center">

<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-4">
                Portfolio / Projects
              </p>
<h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-slate-50 mb-4">
                Showcasing the work I’m most proud of.
              </h1>
<p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-6">
                I design and build digital products with a focus on clean experiences, performance, and thoughtful details.
                Below is a curated selection of my recent work across web apps, interfaces, and experiments.
              </p>

<div className="flex flex-wrap gap-4 mb-7">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Available for freelance</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="lucide-map-pin text-[14px]"></i>
<span>Remote • Your City</span>
</div>
</div>

<div className="flex flex-wrap gap-3 mb-8">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-50 text-slate-900 px-3.5 py-2 text-xs font-medium tracking-tight hover:bg-white transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300" href="#projects">
<span>View projects</span>
<i className="lucide-arrow-down-right text-[16px]"></i>
</a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/0 px-3.5 py-2 text-xs font-medium text-slate-100 hover:bg-white/5 hover:border-white/20 transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200/40" href="#contact">
<i className="lucide-mail text-[15px]"></i>
<span>Get in touch</span>
</a>
</div>

<div className="border border-white/5 rounded-xl bg-black/20 p-4 flex flex-wrap gap-4">
<div className="flex items-center gap-2 text-[11px] text-slate-300">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    Frontend
                  </span>
<span className="text-slate-400">React • TypeScript • Tailwind</span>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-300">
<span className="px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    Backend
                  </span>
<span className="text-slate-400">Node.js • APIs • Databases</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-0.5 bg-gradient-to-tr from-sky-500/20 via-violet-500/10 to-transparent rounded-2xl blur-2xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex flex-col h-full">
<div className="aspect-[4/3] w-full overflow-hidden border-b border-white/10">
<img alt="Featured project preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-1">
                        Featured project
                      </p>
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                        Project Name – Analytics Dashboard
                      </h2>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 text-[10px] font-medium">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                      Live
                    </span>
</div>
<p className="text-xs text-slate-300 leading-relaxed">
                    A real‑time analytics platform with interactive charts, custom reporting, and multi‑tenant support. Built with a modern stack and optimized for performance.
                  </p>
<div className="flex flex-wrap items-center justify-between gap-3 pt-1">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/30 text-[10px] text-slate-200">
                        React
                      </span>
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/30 text-[10px] text-slate-200">
                        TypeScript
                      </span>
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/30 text-[10px] text-slate-200">
                        Node.js
                      </span>
</div>
<div className="flex items-center gap-2 text-[11px]">
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/0 px-2 py-1 text-[11px] text-slate-100 hover:bg-white/10 hover:border-white/20 transition-colors" href="#">
<i className="lucide-globe-2 text-[14px]"></i>
<span>Preview</span>
</a>
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/0 px-2 py-1 text-[11px] text-slate-100 hover:bg-white/10 hover:border-white/20 transition-colors" href="#">
<i className="lucide-github text-[14px]"></i>
<span>Code</span>
</a>
</div>
</div>
</div>
</div>

<div className="hidden sm:flex absolute -bottom-4 -left-2">
<div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur-md px-3 py-2 flex items-center gap-2 shadow-lg shadow-black/40">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="lucide-badge-check text-[16px] text-emerald-300"></i>
</div>
<div className="text-[11px] leading-tight">
<p className="text-slate-200">10+ completed projects</p>
<p className="text-slate-400">From concept to deployment</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050712]" id="projects">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Selected work
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-2">
                Projects I’ve been working on.
              </h2>
<p className="text-sm text-slate-300 max-w-xl">
                A mix of client work, personal explorations, and experiments. Each piece represents a different problem space and set of constraints.
              </p>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/10 bg-white/0">
<i className="lucide-filter text-[13px]"></i>
                All
              </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/5 bg-white/0 hover:bg-white/5 cursor-default">
<span>Web</span>
</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/5 bg-white/0 hover:bg-white/5 cursor-default">
<span>UI</span>
</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-white/5 bg-white/0 hover:bg-white/5 cursor-default">
<span>Experiments</span>
</span>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors overflow-hidden">
<div className="relative overflow-hidden border-b border-white/10">
<img alt="Project screenshot" className="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-slate-100">
<span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 border border-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                    Live
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 border border-white/10">
<i className="lucide-monitor text-[13px]"></i>
                    Web app
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col p-4">
<div className="flex items-start justify-between gap-3 mb-2">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
                      Client Portal Platform
                    </h3>
<p className="text-[11px] text-slate-400">Dashboard • Authentication • Billing</p>
</div>
<a aria-label="View project details" className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-white/10 bg-black/40 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-colors" href="#">
<i className="lucide-arrow-up-right text-[14px]"></i>
</a>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-3">
                  A secure portal for managing subscriptions, invoices, and support tickets. Designed for clarity and quick actions.
                </p>
<div className="mt-auto flex items-center justify-between gap-2">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      React
                    </span>
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      Tailwind
                    </span>
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      API
                    </span>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-300">
<a className="hover:text-white" href="#">Preview</a>
<span className="h-0.5 w-0.5 rounded-full bg-slate-500"></span>
<a className="hover:text-white" href="#">Code</a>
</div>
</div>
</div>
</article>

<article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors overflow-hidden">
<div className="relative overflow-hidden border-b border-white/10">
<img alt="Project screenshot" className="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-slate-100">
<span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 border border-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                    Case Study
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 border border-white/10">
<i className="lucide-layout-dashboard text-[13px]"></i>
                    UI / UX
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col p-4">
<div className="flex items-start justify-between gap-3 mb-2">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
                      SaaS Billing Interface
                    </h3>
<p className="text-[11px] text-slate-400">Design system • Prototyping</p>
</div>
<a aria-label="View project details" className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-white/10 bg-black/40 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-colors" href="#">
<i className="lucide-arrow-up-right text-[14px]"></i>
</a>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-3">
                  A minimal billing experience with clear hierarchy, automated invoicing flows, and multi‑currency support.
                </p>
<div className="mt-auto flex items-center justify-between gap-2">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      Figma
                    </span>
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      Prototyping
                    </span>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-300">
<a className="hover:text-white" href="#">Case study</a>
</div>
</div>
</div>
</article>

<article className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors overflow-hidden">
<div className="relative overflow-hidden border-b border-white/10">
<img alt="Project screenshot" className="w-full h-44 object-cover group-hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] text-slate-100">
<span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 border border-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
                    In progress
                  </span>
<span className="inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 border border-white/10">
<i className="lucide-flask-conical text-[13px]"></i>
                    Experiment
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col p-4">
<div className="flex items-start justify-between gap-3 mb-2">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
                      Generative Visual Playground
                    </h3>
<p className="text-[11px] text-slate-400">Creative coding • WebGL</p>
</div>
<a aria-label="View project details" className="inline-flex items-center justify-center h-7 w-7 rounded-full border border-white/10 bg-black/40 text-slate-200 hover:bg-white/10 hover:border-white/20 transition-colors" href="#">
<i className="lucide-arrow-up-right text-[14px]"></i>
</a>
</div>
<p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Interactive generative visuals that react to audio and input, exploring motion, light, and randomness in the browser.
                </p>
<div className="mt-auto flex items-center justify-between gap-2">
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      Three.js
                    </span>
<span className="px-2 py-0.5 rounded-md border border-white/10 bg-black/40 text-[10px] text-slate-200">
                      GLSL
                    </span>
</div>
<div className="flex items-center gap-2 text-[11px] text-slate-300">
<span>Prototype</span>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050712]" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] gap-10 lg:gap-16">

<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                About
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
                I like building things that feel considered and efficient.
              </h2>
<p className="text-sm text-slate-300 leading-relaxed mb-4">
                I’m a developer/designer who enjoys working across the stack, from shaping product requirements to getting the details right in implementation.
                My work is driven by curiosity, clear communication, and an obsession with polish.
              </p>
<p className="text-sm text-slate-300 leading-relaxed mb-6">
                I’ve worked on dashboards, internal tools, marketing sites, and experiments. I’m comfortable taking a project from
                a rough idea to a shipped product, and collaborating with teams of any size.
              </p>

<div className="grid grid-cols-3 gap-3 max-w-md mb-6">
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
<p className="text-[11px] text-slate-400 mb-1">Experience</p>
<p className="text-lg font-semibold tracking-tight text-slate-50">X+ yrs</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
<p className="text-[11px] text-slate-400 mb-1">Projects</p>
<p className="text-lg font-semibold tracking-tight text-slate-50">10+</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
<p className="text-[11px] text-slate-400 mb-1">Focus</p>
<p className="text-sm font-medium tracking-tight text-slate-50">Web &amp; UI</p>
</div>
</div>

<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/0 text-[11px] text-slate-100">
                  Product thinking
                </span>
<span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/0 text-[11px] text-slate-100">
                  Frontend engineering
                </span>
<span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/0 text-[11px] text-slate-100">
                  UI/UX design
                </span>
<span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/0 text-[11px] text-slate-100">
                  Systems &amp; components
                </span>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex gap-4">
<div className="h-16 w-16 rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex-1">
<p className="text-sm font-medium tracking-tight text-slate-50 mb-1">
                    Your Name
                  </p>
<p className="text-[11px] text-slate-400 mb-2">
                    Developer &amp; Designer
                  </p>
<p className="text-xs text-slate-300 leading-relaxed">
                    Currently exploring better ways to build, ship, and iterate on digital products. Outside of work, I enjoy learning, tinkering, and documenting what I figure out.
                  </p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
                  Recent highlights
                </p>
<div className="space-y-3">
<div className="flex gap-3">
<div className="mt-0.5">
<span className="w-2 h-2 rounded-full bg-emerald-400 block"></span>
</div>
<div>
<p className="text-xs text-slate-200 mb-0.5">
                        Shipped a multi‑tenant analytics dashboard used daily by teams.
                      </p>
<p className="text-[11px] text-slate-400">2024 • Lead developer</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5">
<span className="w-2 h-2 rounded-full bg-sky-400 block"></span>
</div>
<div>
<p className="text-xs text-slate-200 mb-0.5">
                        Designed a component library to unify visual language across products.
                      </p>
<p className="text-[11px] text-slate-400">2023 • Design systems</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5">
<span className="w-2 h-2 rounded-full bg-violet-400 block"></span>
</div>
<div>
<p className="text-xs text-slate-200 mb-0.5">
                        Built internal tooling that reduced manual work and saved hours each week.
                      </p>
<p className="text-[11px] text-slate-400">2022 • Automation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050712]" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-[minmax(0,1.1fr),minmax(0,1fr)] gap-10 lg:gap-16 items-start">
<div>
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Contact
              </p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
                Let’s talk about your next project.
              </h2>
<p className="text-sm text-slate-300 leading-relaxed mb-5">
                Whether you have a specific idea in mind or just want to explore possibilities, feel free to reach out.
                I usually respond within a day or two.
              </p>

<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-200">
<div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
<i className="lucide-mail text-[15px]"></i>
</div>
<div>
<p className="text-[11px] text-slate-400">Email</p>
<a className="text-sm text-slate-100 hover:text-white" href="mailto:you@example.com">
                      you@example.com
                    </a>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-slate-200">
<div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
<i className="lucide-github text-[15px]"></i>
</div>
<div>
<p className="text-[11px] text-slate-400">GitHub</p>
<a className="text-sm text-slate-100 hover:text-white" href="#">
                      github.com/your-handle
                    </a>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-slate-200">
<div className="h-8 w-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
<i className="lucide-linkedin text-[15px]"></i>
</div>
<div>
<p className="text-[11px] text-slate-400">LinkedIn</p>
<a className="text-sm text-slate-100 hover:text-white" href="#">
                      linkedin.com/in/your-handle
                    </a>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400 mb-3">
                Send a message
              </p>
<form className="space-y-3">
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Name
                  </label>
<input className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/60 focus:border-transparent" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Email
                  </label>
<input className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/60 focus:border-transparent" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-300 mb-1">
                    Project details
                  </label>
<textarea className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300/60 focus:border-transparent" placeholder="Tell me about what you’d like to build, the timeline, and any context that’s helpful." rows="4"></textarea>
</div>
<div className="flex items-center justify-between gap-3 pt-1">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-50 text-slate-900 px-3.5 py-2 text-xs font-medium tracking-tight hover:bg-white transition-colors outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300" type="submit">
<span>Send message</span>
<i className="lucide-send text-[15px]"></i>
</button>
<p className="text-[10px] text-slate-500">
                    This form is a placeholder. Hook it up to your backend or form service.
                  </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-[11px] text-slate-500">
          © <span className="align-baseline" id="year"></span> Your Name. All rights reserved.
        </p>
<div className="flex items-center gap-3 text-[11px] text-slate-400">
<a className="hover:text-slate-200" href="#projects">Projects</a>
<span className="w-0.5 h-0.5 rounded-full bg-slate-500"></span>
<a className="hover:text-slate-200" href="#about">About</a>
<span className="w-0.5 h-0.5 rounded-full bg-slate-500"></span>
<a className="hover:text-slate-200" href="#contact">Contact</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
