import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with consistent stroke width
      window.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Mobile menu toggles
        const open = document.getElementById('mobile-open');
        const closeBtn = document.getElementById('mobile-close');
        const panel = document.getElementById('mobile-panel');
        const links = panel ? panel.querySelectorAll('a') : [];

        function togglePanel(show) {
          if (!panel) return;
          panel.classList.toggle('hidden', !show);
        }

        open && open.addEventListener('click', () => togglePanel(true));
        closeBtn && closeBtn.addEventListener('click', () => togglePanel(false));
        links && links.forEach((a) => a.addEventListener('click', () => togglePanel(false)));

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Forms (prevent navigation for demo)
        const heroForm = document.getElementById('hero-form');
        const contactForm = document.getElementById('contact-form');
        [heroForm, contactForm].forEach((f) => {
          if (!f) return;
          f.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks! We will get back to you shortly.');
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(87,70,234,0.08),rgba(0,0,0,0)_60%)]"></div>
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[880px] blur-3xl opacity-30 bg-indigo-300/30 rounded-full"></div>
<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"></div>

<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '22px 22px', maskImage: 'radial-gradient(60% 60% at 50% 20%, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(60% 60% at 50% 20%, black, transparent 70%)'}}></div>

<div className="absolute right-[-20%] top-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-25" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.25), rgba(56,189,248,0.15), rgba(99,102,241,0.25))'}}></div>
</div>

<div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2.5">
<p className="text-[13px] leading-5 text-neutral-700">
            Free website performance audit in 48h — limited slots
          </p>
<a className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-[13px] text-neutral-700 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" href="#contact">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
            Book now
          </a>
</div>
</div>
</div>

<header className="sticky top-[41px] z-40 border-b border-neutral-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="relative flex items-center gap-3 group" href="#" onclick="location.hash='';">
<div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200 group-hover:ring-neutral-300 transition">
<span className="text-[13px] font-semibold tracking-tight">WV</span>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-800">Webvooruit</span>
</a>

<nav className="hidden md:flex items-center gap-7">
<a className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1" href="#work">Work</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1" href="#services">Services</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1" href="#process">Process</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1" href="#about">About</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1" href="#contact">Contact</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-1.5 py-1" href="#page" id="nav-page">Sample page</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" href="#work">
<i className="h-4 w-4" data-lucide="eye"></i>
              View work
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i>
              Get a proposal
            </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 ring-1 ring-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" id="mobile-open">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-neutral-200" id="mobile-panel">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<nav className="grid gap-1.5">
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#work">
              Work <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#services">
              Services <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#process">
              Process <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#about">
              About <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#contact">
              Contact <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#page">
              Sample page <i className="h-4 w-4" data-lucide="chevron-right"></i>
</a>
<div className="mt-2 flex gap-2">
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:bg-neutral-50" href="#work">
<i className="h-4 w-4" data-lucide="eye"></i> View work
              </a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-500" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i> Proposal
              </a>
</div>
<button className="mt-2 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" id="mobile-close">
<i className="h-4 w-4" data-lucide="x"></i> Close
            </button>
</nav>
</div>
</div>
</header>

<main id="home">

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-[12px] text-neutral-700">
<i className="h-3.5 w-3.5 text-indigo-600" data-lucide="zap"></i>
                High-performance websites &amp; apps
              </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900">
                Build fast. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Grow forward</span>.
              </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-700 max-w-2xl">
                Webvooruit helps teams design, ship, and scale digital experiences that convert.
                From strategy to code, we optimize for speed, accessibility, and measurable growth.
              </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" href="#contact">
<i className="h-5 w-5" data-lucide="rocket"></i>
                  Start a project
                </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:ring-neutral-300 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" href="#work">
<i className="h-5 w-5" data-lucide="play"></i>
                  See our work
                </a>
</div>

<div className="mt-8 rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 sm:p-4">
<form className="flex flex-col sm:flex-row gap-2" id="hero-form">
<div className="grid sm:grid-cols-2 gap-2 w-full">
<label className="relative flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="mail"></i>
<input className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none" placeholder="Work email" required="" type="email"/>
</label>
<label className="relative flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="buildings"></i>
<input className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none" placeholder="Company" type="text"/>
</label>
</div>
<button className="sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" type="submit">
<i className="h-4.5 w-4.5" data-lucide="send"></i>
                    Get free audit
                  </button>
</form>
</div>

<div className="mt-8">
<p className="flex items-center gap-2 text-[12px] text-neutral-500">
<i className="h-3.5 w-3.5 text-emerald-600" data-lucide="shield-check"></i>
                  Trusted by growth-minded teams
                </p>
<div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-3">
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm font-medium tracking-tight text-neutral-700">AURA</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm font-medium tracking-tight text-neutral-700">KILO</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm font-medium tracking-tight text-neutral-700">NIMB</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm font-medium tracking-tight text-neutral-700">FERN</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm font-medium tracking-tight text-neutral-700">BOLT</span>
</div>
<div className="flex items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm font-medium tracking-tight text-neutral-700">MODO</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">

<div className="p-[1px] rounded-2xl" style={{background: 'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.35), rgba(59,130,246,0.25), rgba(99,102,241,0.35))'}}>
<div className="relative rounded-[14px] overflow-hidden ring-1 ring-neutral-200 bg-white">
<img alt="Hero preview — dashboards and web components" className="h-72 sm:h-[420px] w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/80 backdrop-blur ring-1 ring-neutral-200">
<i className="h-4.5 w-4.5 text-indigo-600" data-lucide="cpu"></i>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Core Web Vitals</p>
<p className="text-[12px] text-neutral-600">Optimized for speed and stability</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="gauge"></i>
<p className="text-sm text-neutral-700">TTFB under</p>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900">200 ms</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-indigo-600" data-lucide="trending-up"></i>
<p className="text-sm text-neutral-700">Avg conversion lift</p>
</div>
<p className="mt-1 text-2xl font-semibold tracking-tight text-neutral-900">+28%</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Capabilities</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">What we do</h2>
<p className="mt-2 text-neutral-700 max-w-2xl">Strategy, design, and engineering — aligned to business impact. Built for speed, clarity, and scale.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#contact">
<i className="h-4 w-4" data-lucide="calendar"></i>
              Book a call
            </a>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200">
<i className="h-5 w-5 text-indigo-600" data-lucide="layout"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Product websites</h3>
<p className="mt-2 text-sm text-neutral-700">High-converting marketing sites, landing pages, and design systems.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>CMS &amp; content models</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>A/B testing &amp; analytics</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200">
<i className="h-5 w-5 text-indigo-600" data-lucide="app-window"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Web apps &amp; SaaS</h3>
<p className="mt-2 text-sm text-neutral-700">From MVP to scale: secure, accessible, maintainable frontends.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Design systems</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>API integration</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200">
<i className="h-5 w-5 text-indigo-600" data-lucide="search"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">SEO &amp; performance</h3>
<p className="mt-2 text-sm text-neutral-700">Technical SEO, Core Web Vitals, site architecture, and content strategy.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Schema &amp; sitemaps</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Perf budgets</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-5 hover:border-neutral-300 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200">
<i className="h-5 w-5 text-indigo-600" data-lucide="repeat"></i>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Growth &amp; retainers</h3>
<p className="mt-2 text-sm text-neutral-700">Ongoing sprints, experiments, and proactive improvements.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Roadmap ownership</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Monthly reporting</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="flex items-end justify-between gap-6">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Case studies</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Selected work</h2>
<p className="mt-2 text-neutral-700 max-w-2xl">A snapshot of outcomes across products, marketing sites, and web apps.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#contact">
<i className="h-4 w-4" data-lucide="handshake"></i>
              Let’s collaborate
            </a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="SaaS dashboard" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/85"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 text-[12px] text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="app-window"></i> SaaS
                </div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Analytics platform redesign</h3>
<p className="text-sm text-neutral-700">+34% signups, CLS 0.01, LCP 1.4s</p>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="Marketing website" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/85"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 text-[12px] text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="layout"></i> Marketing
                </div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">B2B site rebuild</h3>
<p className="text-sm text-neutral-700">+41% demo requests in 60 days</p>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl ring-1 ring-neutral-200 bg-white">
<div className="aspect-[4/3] w-full overflow-hidden">
<img alt="E-commerce experience" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/85"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center gap-2 text-[12px] text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="shopping-bag"></i> E‑commerce
                </div>
<h3 className="mt-1 text-lg font-semibold tracking-tight">Checkout optimization</h3>
<p className="text-sm text-neutral-700">-22% drop‑off, +18% AOV</p>
</div>
</article>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-neutral-600">More case studies are available on request.</div>
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#contact">
<i className="h-4 w-4" data-lucide="file-text"></i>
              Request deck
            </a>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Method</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">How we work</h2>
<p className="mt-2 text-neutral-700">Outcome-driven, collaborative, and transparent.</p>
</div>
<div className="mt-8 grid lg:grid-cols-5 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200"><i className="h-4.5 w-4.5 text-indigo-600" data-lucide="message-square"></i></div>
<p className="text-sm font-medium">1. Discover</p>
</div>
<p className="mt-2 text-sm text-neutral-700">Goals, users, constraints. Audit and opportunity map.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200"><i className="h-4.5 w-4.5 text-indigo-600" data-lucide="pen-tool"></i></div>
<p className="text-sm font-medium">2. Design</p>
</div>
<p className="mt-2 text-sm text-neutral-700">Information architecture, flows, UI, and content.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200"><i className="h-4.5 w-4.5 text-indigo-600" data-lucide="code-2"></i></div>
<p className="text-sm font-medium">3. Build</p>
</div>
<p className="mt-2 text-sm text-neutral-700">Modern stacks, accessibility, performance budgets.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200"><i className="h-4.5 w-4.5 text-indigo-600" data-lucide="beaker"></i></div>
<p className="text-sm font-medium">4. Launch</p>
</div>
<p className="mt-2 text-sm text-neutral-700">QA, analytics, SEO, and rollout strategy.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200"><i className="h-4.5 w-4.5 text-indigo-600" data-lucide="repeat"></i></div>
<p className="text-sm font-medium">5. Grow</p>
</div>
<p className="mt-2 text-sm text-neutral-700">Experiments, content, and continuous improvement.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Formats</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Engagements</h2>
<p className="mt-2 text-neutral-700">Flexible models to match your stage and goals.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Launch</h3>
<span className="rounded-md bg-neutral-50 px-2 py-1 text-[12px] text-neutral-700 ring-1 ring-neutral-200">2–4 weeks</span>
</div>
<p className="mt-2 text-sm text-neutral-700">Quick start for MVPs and new pages.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Scope pack</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Design + build</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Analytics setup</li>
</ul>
<div className="mt-5 flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight text-neutral-900">From €6.5k</span>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i> Inquire
                </a>
</div>
</div>
<div className="relative rounded-2xl border border-indigo-500/30 bg-indigo-50 p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Scale</h3>
<span className="rounded-md bg-indigo-100 px-2 py-1 text-[12px] text-indigo-700 ring-1 ring-indigo-500/30">Popular</span>
</div>
<p className="mt-2 text-sm text-neutral-700">Sprints to grow acquisition and activation.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Design system</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Performance budgets</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Experiment cadence</li>
</ul>
<div className="mt-5 flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight text-neutral-900">From €12k</span>
<a className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white hover:bg-indigo-500" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i> Inquire
                </a>
</div>
</div>
<div className="relative rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Partner</h3>
<span className="rounded-md bg-neutral-50 px-2 py-1 text-[12px] text-neutral-700 ring-1 ring-neutral-200">Monthly</span>
</div>
<p className="mt-2 text-sm text-neutral-700">Ongoing roadmap and velocity.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-800">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Dedicated squad</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Priority support</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-indigo-600" data-lucide="check"></i>Monthly insights</li>
</ul>
<div className="mt-5 flex items-center justify-between">
<span className="text-xl font-semibold tracking-tight text-neutral-900">Custom</span>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#contact">
<i className="h-4 w-4" data-lucide="send"></i> Inquire
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Proof</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">What clients say</h2>
<p className="mt-2 text-neutral-700">Outcomes, not just output.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Sara Li</p>
<p className="text-[12px] text-neutral-500">Head of Growth</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-800">“Webvooruit lifted signups by 30% in a quarter. Clear strategy, fast execution, great communication.”</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Jonas Meijer</p>
<p className="text-[12px] text-neutral-500">Product Lead</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-800">“The new design system unlocked velocity across teams. Pages load instantly.”</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client avatar" className="h-10 w-10 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Amal Singh</p>
<p className="text-[12px] text-neutral-500">Founder</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-800">“From audit to launch, they handled everything. Our Core Web Vitals are now all green.”</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Team</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Small team, senior impact</h2>
<p className="mt-3 text-neutral-700">We’re designers and engineers shipping production-grade experiences. Fewer handoffs, faster output, higher quality.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">8+ yrs</div>
<div className="text-[12px] text-neutral-600">Average experience</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">120+</div>
<div className="text-[12px] text-neutral-600">Projects shipped</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">98</div>
<div className="text-[12px] text-neutral-600">Lighthouse perf</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="grid grid-cols-3 gap-3">
<img alt="Team member" className="h-28 sm:h-36 w-full object-cover rounded-xl ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Team member" className="h-28 sm:h-36 w-full object-cover rounded-xl ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Team member" className="h-28 sm:h-36 w-full object-cover rounded-xl ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Team member" className="h-28 sm:h-36 w-full object-cover rounded-xl ring-1 ring-neutral-200 col-span-2" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Team member" className="h-28 sm:h-36 w-full object-cover rounded-xl ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-2.5 py-1 ring-1 ring-neutral-200">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span className="text-[12px] text-neutral-700">Get in touch</span>
</div>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Tell us about your project</h2>
<p className="mt-2 text-neutral-700">We’ll reply within 48 hours with next steps.</p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6">
<form className="grid sm:grid-cols-2 gap-3" id="contact-form">
<label className="sm:col-span-1 flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="user"></i>
<input className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none" placeholder="Full name" required="" type="text"/>
</label>
<label className="sm:col-span-1 flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="mail"></i>
<input className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none" placeholder="Work email" required="" type="email"/>
</label>
<label className="sm:col-span-1 flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="buildings"></i>
<input className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none" placeholder="Company" type="text"/>
</label>
<label className="sm:col-span-1 flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="wallet"></i>
<select className="w-full bg-transparent text-sm text-neutral-900 focus:outline-none">
<option value="">Budget</option>
<option>€5k–€10k</option>
<option>€10k–€25k</option>
<option>€25k–€50k</option>
<option>€50k+</option>
</select>
</label>
<label className="sm:col-span-2 flex items-start gap-2 rounded-md border border-neutral-200 bg-white px-3 py-2.5 focus-within:border-indigo-500/60">
<i className="mt-0.5 h-4.5 w-4.5 text-neutral-400" data-lucide="message-square"></i>
<textarea className="w-full bg-transparent text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none" placeholder="Goals, timeline, and scope" rows="4"></textarea>
</label>
<div className="sm:col-span-2 flex items-center justify-between gap-3">
<div className="text-[12px] text-neutral-600 flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="lock"></i>
                    We’ll never share your info.
                  </div>
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition" type="submit">
<i className="h-4.5 w-4.5" data-lucide="send"></i>
                    Send request
                  </button>
</div>
</form>
</div>
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="clock"></i>
                Typical reply time: <span className="font-medium text-neutral-900">under 48 hours</span>
</div>
<div className="mt-4 grid gap-3 text-sm">
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="map-pin"></i>
                  Amsterdam, NL — Remote first
                </div>
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="languages"></i>
                  English, Dutch
                </div>
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4 text-indigo-600" data-lucide="calendar"></i>
                  Limited kickoff slots this month
                </div>
</div>
<div className="mt-5 rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check"></i>
<p className="text-sm font-medium text-neutral-900">Free audit available</p>
</div>
<p className="mt-1.5 text-[13px] text-neutral-600">We’ll review your site and share quick wins and a roadmap.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-200" id="page">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Sample page</h2>
<a className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-neutral-800 ring-1 ring-neutral-200 hover:bg-neutral-50 hover:ring-neutral-300" href="#home">
<i className="h-4 w-4" data-lucide="arrow-up"></i>
              Back to top
            </a>
</div>
<p className="mt-3 text-neutral-700">This is a placeholder section linked from the navigation. Replace with any content or subpage layout.</p>
<div className="mt-5 rounded-xl border border-dashed border-neutral-300 p-6 text-sm text-neutral-600">
            Add your sample components or a content preview here.
          </div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-50 ring-1 ring-neutral-200">
<span className="text-[13px] font-semibold tracking-tight">WV</span>
</div>
<div className="text-sm text-neutral-600">Build fast. Grow forward.</div>
</div>
<nav className="flex items-center gap-5 text-sm">
<a className="text-neutral-700 hover:text-neutral-900" href="#work">Work</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#services">Services</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#process">Process</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#about">About</a>
<a className="text-neutral-700 hover:text-neutral-900" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-6">
<p className="text-[12px] text-neutral-500">© <span id="year"></span> Webvooruit. All rights reserved.</p>
<div className="flex items-center gap-4 text-[12px] text-neutral-500">
<a className="hover:text-neutral-700" href="#">Privacy</a>
<a className="hover:text-neutral-700" href="#">Terms</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
