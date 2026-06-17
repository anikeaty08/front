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



      // Initialize icons
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons();
        }
        // Current year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuBtn && mobileMenu) {
          let open = false;
          menuBtn.addEventListener('click', () => {
            open = !open;
            mobileMenu.classList.toggle('hidden', !open);
            menuBtn.setAttribute('aria-expanded', String(open));
            // Swap icon
            menuBtn.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
            if (window.lucide && lucide.createIcons) lucide.createIcons();
          });
          // Close on link click
          mobileMenu.querySelectorAll('a').forEach((a) => {
            a.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
              menuBtn.setAttribute('aria-expanded', 'false');
              menuBtn.innerHTML = '<i data-lucide="menu"></i>';
              if (window.lucide && lucide.createIcons) lucide.createIcons();
            });
          });
        }

        // Nav shadow on scroll
        const header = document.getElementById('site-nav');
        const updateShadow = () => {
          if (!header) return;
          if (window.scrollY > 2) {
            header.classList.add('shadow-sm');
          } else {
            header.classList.remove('shadow-sm');
          }
        };
        updateShadow();
        window.addEventListener('scroll', updateShadow, { passive: true });
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
      

<div className="fixed top-0 left-0 w-full h-1 bg-emerald-500 z-50 sm:hidden"></div>

<header className="sticky top-0 z-40 bg-white transition-shadow duration-300" id="site-nav">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">

<a className="flex items-center gap-2 group" href="#">
<div className="flex items-center">
<span className="text-emerald-500 font-semibold tracking-tight text-xl">devs</span>
<span className="text-sky-400 font-semibold tracking-tight text-xl">FromEast</span>
</div>
<span className="sr-only">devsFromEast</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 transition-colors" href="#">Home</a>
<a className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 transition-colors" href="#process">How we work</a>
<a className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 transition-colors" href="#case-studies">Case studies</a>
<a className="text-gray-700 hover:text-emerald-600 hover:underline underline-offset-8 decoration-2 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="hidden md:flex">
<a className="inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white px-8 py-[14px] text-sm font-medium transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-600 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" href="#contact" style={{boxShadow: '0 0 0 rgba(16,185,129,0)'}}>
              Get in touch
            </a>
</div>

<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" id="menu-btn">
<i data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-gray-200" id="mobile-menu">
<div className="relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1 bg-emerald-500"></div>
<nav className="px-4 py-4 space-y-2 bg-white">
<a className="block px-3 py-3 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-600" href="#">Home</a>
<a className="block px-3 py-3 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-600" href="#process">How we work</a>
<a className="block px-3 py-3 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-600" href="#case-studies">Case studies</a>
<a className="block px-3 py-3 rounded-md text-gray-700 hover:bg-emerald-50 hover:text-emerald-600" href="#pricing">Pricing</a>
<a className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 text-white px-8 py-[14px] text-sm font-medium transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-600" href="#contact">Get in touch</a>
</nav>
</div>
</div>
<div className="h-px bg-gray-100"></div>
</header>

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">

<div className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full blur-[100px] opacity-10" style={{background: 'radial-gradient(closest-side, #10B981 0%, rgba(16,185,129,0) 70%)'}}></div>

<div className="absolute -bottom-40 -right-24 w-[480px] h-[480px] rounded-full blur-[110px] opacity-10" style={{background: 'radial-gradient(closest-side, #38BDF8 0%, rgba(56,189,248,0) 70%)'}}></div>

<svg className="absolute top-10 right-10 opacity-10 text-emerald-500" height="160" width="160">
<defs>
<pattern height="32" id="dfe-dots" patternunits="userSpaceOnUse" width="32" x="0" y="0">
<circle cx="1.5" cy="1.5" fill="currentColor" r="1.5"></circle>
</pattern>
</defs>
<rect fill="url(#dfe-dots)" height="160" width="160"></rect>
</svg>

<div className="absolute left-6 top-24 text-sky-400/10 [font-family:'Fira_Code',monospace] text-7xl select-none">{ }</div>
<div className="absolute right-12 bottom-16 text-emerald-500/10 [font-family:'Fira_Code',monospace] text-7xl select-none">&lt;/&gt;</div>
</div>
<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

<div className="lg:col-span-7">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-800">
              We design, build and ship web products—fast.
            </h1>
<p className="mt-5 text-lg text-gray-500 max-w-2xl">
              A senior lean squad from Eastern Europe delivering reliable sprints, transparent process, and measurable outcomes. Green means go; blue means clarity.
            </p>

<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center rounded-lg bg-emerald-500 text-white px-8 py-[14px] text-sm font-medium transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-600 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500" href="#contact" style={{boxShadow: '0 4px 12px rgba(16,185,129,0.3)'}}>
                Start a project
              </a>
<a className="inline-flex items-center gap-2 text-sky-400 underline underline-offset-4 decoration-sky-300 hover:text-emerald-500 transition-colors" href="#case-studies">
                View case studies
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="mt-8 inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50/60 px-4 py-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-50 text-emerald-500 ring-1 ring-emerald-100">
<i className="w-4 h-4" data-lucide="rocket"></i>
</div>
<div className="text-sm text-gray-600">
                Average delivery: <span className="font-medium text-gray-800">4.8 weeks</span>. We ship on a schedule.
              </div>
</div>
<div className="mt-6 max-w-xl rounded-lg bg-sky-100 px-4 py-3 ring-1 ring-sky-200">
<div className="flex items-center gap-2 text-sky-600 text-sm [font-family:'Fira_Code',monospace]">
<i className="w-4 h-4" data-lucide="code-2"></i>
<span>npm i @devsfromeast/ship-fast</span>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative">
<div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
<img alt="Team shipping product" className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-4 bg-white border border-gray-200 rounded-xl shadow-md p-4 flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 ring-1 ring-emerald-100">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<div className="text-sm text-gray-500">Cycle time</div>
<div className="text-lg font-semibold text-emerald-600">-32%</div>
</div>
</div>

<div className="absolute -top-5 -right-4 bg-sky-100 text-sky-600 border border-sky-200 rounded-full px-3 py-1 text-xs font-medium">
                CI green since 40+ deploys
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-emerald-200">
<div className="py-6 sm:py-8 flex flex-col items-center">
<div className="text-4xl md:text-5xl font-semibold text-emerald-500 tracking-tight">23</div>
<div className="mt-1 text-[11px] tracking-widest uppercase text-gray-500">Projects shipped</div>
</div>
<div className="py-6 sm:py-8 flex flex-col items-center">
<div className="text-4xl md:text-5xl font-semibold text-emerald-500 tracking-tight">4.8<span className="text-2xl align-top">w</span></div>
<div className="mt-1 text-[11px] tracking-widest uppercase text-gray-500">Avg delivery</div>
</div>
<div className="py-6 sm:py-8 flex flex-col items-center">
<div className="text-4xl md:text-5xl font-semibold text-emerald-500 tracking-tight">$450k+</div>
<div className="mt-1 text-[11px] tracking-widest uppercase text-gray-500">Client revenue</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-20 bg-white" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-4xl font-semibold tracking-tight text-gray-800">Our process</h2>
<p className="mt-3 text-gray-500">Transparent milestones, steady velocity. You always know what’s next.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="relative">
<div className="absolute left-4 top-0 bottom-0 hidden lg:block w-px bg-sky-300/60"></div>
<div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center text-emerald-500">
<i className="w-5 h-5" data-lucide="search"></i>
</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<span className="text-sm font-medium text-gray-700">Week 1</span>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-800">Discover</h3>
<p className="mt-2 text-sm text-gray-500">Deep-dive on goals, constraints, and success metrics.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Scope &amp; alignment
                </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Architecture sketch
                </li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute left-4 top-0 bottom-0 hidden lg:block w-px bg-sky-300/60"></div>
<div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-sky-100 ring-1 ring-sky-200 flex items-center justify-center text-sky-500">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<span className="text-sm font-medium text-gray-700">Week 2</span>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-800">Design</h3>
<p className="mt-2 text-sm text-gray-500">Flows, wireframes, and UI foundations to move fast.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Systems-first approach
                </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Clickable prototype
                </li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute left-4 top-0 bottom-0 hidden lg:block w-px bg-sky-300/60"></div>
<div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center text-emerald-500">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
<span className="text-sm font-medium text-gray-700">Weeks 3–4</span>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-800">Develop</h3>
<p className="mt-2 text-sm text-gray-500">Implementation with automated testing and CI/CD.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  PR reviews &amp; previews
                </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Observability baked in
                </li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute left-4 top-0 bottom-0 hidden lg:block w-px bg-sky-300/60"></div>
<div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-emerald-500">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-sky-100 ring-1 ring-sky-200 flex items-center justify-center text-sky-500">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-sky-100 border border-sky-300"></span>
<span className="text-sm font-medium text-gray-700">Week 5+</span>
</div>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight text-gray-800">Deliver</h3>
<p className="mt-2 text-sm text-gray-500">Launch, measure, iterate. We stick around for impact.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Handover &amp; docs
                </li>
<li className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-emerald-500" data-lucide="check"></i>
                  Growth experiments
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-16 sm:py-20" id="case-studies">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-gray-800">Case studies</h2>
<p className="mt-3 text-gray-500">Impact-focused work across product, platform, and growth.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sky-400 underline underline-offset-4 decoration-sky-300 hover:text-emerald-500 transition-colors" href="#">
            See all
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500">
<div className="overflow-hidden rounded-lg">
<img alt="SaaS analytics dashboard" className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-1 text-xs font-medium ring-1 ring-emerald-200">B2B SaaS</span>
<span className="inline-flex items-center rounded-full bg-sky-100 text-sky-600 px-2.5 py-1 text-xs font-medium ring-1 ring-sky-200">Analytics</span>
</div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-800">Reduced churn with insight-driven dash</h3>
<p className="mt-2 text-sm text-gray-500">We rebuilt the insights layer and shipped in 5 weeks, unlocking sales enablement.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">React</span>
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">Node</span>
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">Postgres</span>
</div>
<a className="inline-flex items-center gap-1 text-sky-400 hover:text-emerald-500 underline underline-offset-4" href="#">
                  View project <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500">
<div className="overflow-hidden rounded-lg">
<img alt="Team collaboration app" className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-1 text-xs font-medium ring-1 ring-emerald-200">Collaboration</span>
<span className="inline-flex items-center rounded-full bg-sky-100 text-sky-600 px-2.5 py-1 text-xs font-medium ring-1 ring-sky-200">Mobile</span>
</div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-800">Async-first team workflows</h3>
<p className="mt-2 text-sm text-gray-500">Prototyped critical flows and shipped MVP, driving 28% faster approvals.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">Flutter</span>
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">Firebase</span>
</div>
<a className="inline-flex items-center gap-1 text-sky-400 hover:text-emerald-500 underline underline-offset-4" href="#">
                  View project <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-emerald-500">
<div className="overflow-hidden rounded-lg">
<img alt="Ecommerce storefront" className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-700 px-2.5 py-1 text-xs font-medium ring-1 ring-emerald-200">Ecommerce</span>
<span className="inline-flex items-center rounded-full bg-sky-100 text-sky-600 px-2.5 py-1 text-xs font-medium ring-1 ring-sky-200">Performance</span>
</div>
<h3 className="mt-3 text-xl font-semibold tracking-tight text-gray-800">Faster storefront, higher AOV</h3>
<p className="mt-2 text-sm text-gray-500">Edge-optimized pages lifted conversion 16% with better UX.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">Next.js</span>
<span className="rounded-full bg-sky-100 text-sky-600 px-2 py-0.5 text-[11px] font-medium ring-1 ring-sky-200">Cloudflare</span>
</div>
<a className="inline-flex items-center gap-1 text-sky-400 hover:text-emerald-500 underline underline-offset-4" href="#">
                  View project <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-4xl font-semibold tracking-tight text-gray-800">What clients say</h2>
<p className="mt-3 text-gray-500">Proof from teams shipping with us.</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

<blockquote className="rounded-xl bg-sky-100 border-l-4 border-sky-400 p-6">
<div className="flex items-center gap-2 text-emerald-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="mt-4 text-gray-700">They ship predictably and keep the bar high. Our dashboard finally tells the story we needed.</p>
<footer className="mt-4">
<div className="font-medium text-gray-800">Amelia Hart</div>
<div className="text-sm text-gray-500">VP Product, Northline</div>
</footer>
</blockquote>
<blockquote className="rounded-xl bg-sky-100 border-l-4 border-sky-400 p-6">
<div className="flex items-center gap-2 text-emerald-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="mt-4 text-gray-700">Our cycle time dropped immediately. Great communication and crisp delivery.</p>
<footer className="mt-4">
<div className="font-medium text-gray-800">Jonas Weber</div>
<div className="text-sm text-gray-500">CTO, Alto Commerce</div>
</footer>
</blockquote>
<blockquote className="rounded-xl bg-sky-100 border-l-4 border-sky-400 p-6">
<div className="flex items-center gap-2 text-emerald-500">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<p className="mt-4 text-gray-700">They feel like an internal team—sharp decisions and zero drama.</p>
<footer className="mt-4">
<div className="font-medium text-gray-800">Priya Nair</div>
<div className="text-sm text-gray-500">Head of Engineering, Kilo Labs</div>
</footer>
</blockquote>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-white" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-4xl font-semibold tracking-tight text-gray-800">Simple pricing</h2>
<p className="mt-3 text-gray-500">Choose a plan that meets your velocity—and scale as you go.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
<div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Starter</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-emerald-600">$6k<span className="text-base text-gray-500 font-normal">/sprint</span></div>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> 1 engineer</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Weekly demos</li>
<li className="flex items-center gap-2 opacity-60"><i className="w-4 h-4 text-gray-400" data-lucide="x"></i> Dedicated designer</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-sky-400 text-white px-8 py-[14px] text-sm font-medium transition-colors hover:bg-sky-500" href="#contact">Choose Starter</a>
</div>

<div className="rounded-2xl border-4 border-emerald-500 bg-emerald-100 p-6 shadow-md">
<div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">Most popular</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-emerald-600">$11k<span className="text-base text-gray-600 font-normal">/sprint</span></div>
<ul className="mt-4 space-y-2 text-sm text-gray-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 2 engineers + designer</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Daily standups</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Priority support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 text-white px-8 py-[14px] text-sm font-medium transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-600" href="#contact" style={{boxShadow: '0 4px 12px rgba(16,185,129,0.3)'}}>Choose Popular</a>
</div>

<div className="rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm">
<div className="text-sm font-medium text-gray-600 uppercase tracking-wider">Scale</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-emerald-600">$18k<span className="text-base text-gray-500 font-normal">/sprint</span></div>
<ul className="mt-4 space-y-2 text-sm text-gray-600">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Full squad</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> PM + QA</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Experiment budget</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-sky-400 text-white px-8 py-[14px] text-sm font-medium transition-colors hover:bg-sky-500" href="#contact">Choose Scale</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 bg-emerald-50" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-gray-800">Tell us about your next sprint</h3>
<p className="mt-3 text-gray-600">We’ll reply within one business day. No fluff, just practical steps.</p>
<div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
<div className="h-9 w-9 rounded-md bg-sky-100 ring-1 ring-sky-200 flex items-center justify-center text-sky-500">
<i className="w-5 h-5" data-lucide="clock-5"></i>
</div>
<span>Kickoffs available next week.</span>
</div>
</div>
<form className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-[11px] tracking-widest uppercase text-gray-700 mb-2">Name</label>
<input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-[11px] tracking-widest uppercase text-gray-700 mb-2">Email</label>
<input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400" placeholder="jane@company.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-[11px] tracking-widest uppercase text-gray-700 mb-2">Project details</label>
<textarea className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400" placeholder="Briefly describe your goals, timeline, and constraints." rows="4"></textarea>
</div>
<div>
<label className="block text-[11px] tracking-widest uppercase text-gray-700 mb-2">Budget</label>
<select className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
<option disabled="" selected="" value="">Select range</option>
<option>$5k–$10k</option>
<option>$10k–$25k</option>
<option>$25k–$50k</option>
<option>$50k+</option>
</select>
</div>
<div>
<label className="block text-[11px] tracking-widest uppercase text-gray-700 mb-2">Timeline</label>
<select className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400">
<option disabled="" selected="" value="">When to start</option>
<option>ASAP (this month)</option>
<option>Next month</option>
<option>In 2–3 months</option>
<option>Exploring options</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-[11px] tracking-widest uppercase text-gray-700 mb-2">Link (optional)</label>
<input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400" placeholder="Brief, deck, or repo URL" type="url"/>
</div>
<div className="sm:col-span-2 flex items-start gap-3">
<input className="mt-0.5 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" id="consent" type="checkbox"/>
<label className="text-sm text-gray-600" htmlFor="consent">You can contact me about my project. I agree to the <a className="text-sky-500 underline underline-offset-2 hover:text-emerald-600" href="#">privacy policy</a>.</label>
</div>
<div className="sm:col-span-2">
<button className="inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 text-white px-8 py-[14px] text-sm font-medium transition-transform duration-200 hover:scale-[1.01] hover:bg-emerald-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" type="submit">
                  Send message
                </button>
<p className="mt-3 text-xs text-gray-500">Response within 1 business day. We won’t share your info.</p>
</div>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
<div>
<a className="inline-flex items-center gap-2" href="#">
<span className="text-emerald-500 font-semibold tracking-tight text-xl">devs</span>
<span className="text-sky-400 font-semibold tracking-tight text-xl">FromEast</span>
</a>
<p className="mt-3 text-sm text-gray-600 max-w-xs">Senior lean squads that ship fast with clarity and care. Eastern European precision, global impact.</p>
<div className="mt-4 flex items-center gap-3 text-gray-400">
<a aria-label="Twitter" className="p-2 rounded-md hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a aria-label="GitHub" className="p-2 rounded-md hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a aria-label="LinkedIn" className="p-2 rounded-md hover:bg-emerald-50 hover:text-emerald-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<div className="text-xs font-semibold tracking-widest uppercase text-gray-700">Company</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-emerald-600" href="#process">Process</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#case-studies">Work</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#pricing">Pricing</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-xs font-semibold tracking-widest uppercase text-gray-700">Resources</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Playbook</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Blog</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Open-source</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Careers</a></li>
</ul>
</div>
<div>
<div className="text-xs font-semibold tracking-widest uppercase text-gray-700">Legal</div>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Privacy</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Terms</a></li>
<li><a className="text-gray-600 hover:text-emerald-600" href="#">Cookie policy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-sm text-gray-500">© <span id="year"></span> devsFromEast. All rights reserved.</p>
<p className="text-sm text-gray-500 inline-flex items-center gap-2">
            From Eastern Europe with
            <span className="text-emerald-500 inline-flex"><i className="w-4 h-4" data-lucide="heart"></i></span>
</p>
</div>
</div>
</footer>



    </>
  );
}
