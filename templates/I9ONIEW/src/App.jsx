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
      
      // Icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart
      const ctx = document.getElementById('leadtimeChart').getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 150);
      gradient.addColorStop(0, 'rgba(52, 211, 153, 0.35)');
      gradient.addColorStop(1, 'rgba(52, 211, 153, 0.02)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
          datasets: [{
            label: 'Lead time (days)',
            data: [18, 16, 14, 12, 11, 10],
            tension: 0.35,
            fill: true,
            backgroundColor: gradient,
            borderColor: 'rgba(52, 211, 153, 0.8)',
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              intersect: false,
              mode: 'index',
              backgroundColor: 'rgba(17, 24, 39, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              borderWidth: 1,
              titleColor: '#e5e7eb',
              bodyColor: '#e5e7eb',
              padding: 10
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.06)', tickColor: 'transparent' },
              ticks: { color: 'rgba(229,231,235,0.7)', font: { size: 10 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.06)', tickColor: 'transparent' },
              ticks: { color: 'rgba(229,231,235,0.7)', font: { size: 10 } }
            }
          }
        }
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900"></div>
<div className="absolute -top-40 -left-40 h-[48rem] w-[48rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute top-32 -right-40 h-[36rem] w-[36rem] rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
</div>
</div>

<header className="relative z-20">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/70 backdrop-blur">
<span className="text-sm font-semibold tracking-tight">GC</span>
</div>
<div className="hidden md:block">
<p className="text-sm font-medium text-white/80 tracking-tight">Gallifrey Consulting</p>
<p className="text-[11px] text-white/50">Strategy • Platforms • Delivery</p>
</div>
</div>
<nav className="hidden gap-7 md:flex">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#approach">Approach</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#insights">Insights</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 shadow-sm ring-1 ring-white/10 backdrop-blur hover:bg-white/10 hover:ring-white/20 md:block" href="#contact">Book a call</a>
<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-white/80 ring-1 ring-white/10 backdrop-blur hover:text-white hover:ring-white/20 md:hidden">
<i className="h-5 w-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</header>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-14 lg:px-8 lg:pt-24 lg:pb-20">
<div className="max-w-3xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-200/90 ring-1 ring-emerald-500/20">
<i className="h-3.5 w-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Transform complexity into momentum</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Navigate complexity. Ship with certainty.
          </h1>
<p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            We design strategy, build resilient platforms, and accelerate delivery so your team moves from roadmap to results—weeks faster and with less risk.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50" href="#contact">
<i className="h-4 w-4" data-lucide="phone-call" strokeWidth="1.5"></i>
              Book a discovery call
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 hover:ring-white/20" href="#work">
<i className="h-4 w-4" data-lucide="case-sensitive" strokeWidth="1.5"></i>
              View case studies
            </a>
</div>
</div>

<div className="mt-14 rounded-xl border border-white/10 bg-neutral-900/30 p-4 ring-1 ring-white/10 backdrop-blur">
<p className="px-2 text-xs text-white/50">Trusted by teams shipping critical systems</p>
<div className="mt-3 grid grid-cols-2 items-center gap-4 sm:grid-cols-4 lg:grid-cols-6">
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-white/60 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-sm bg-white/10"></div>
<span className="text-xs font-medium tracking-tight">ARX Labs</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-white/60 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-sm bg-white/10"></div>
<span className="text-xs font-medium tracking-tight">Northbeam</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-white/60 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-sm bg-white/10"></div>
<span className="text-xs font-medium tracking-tight">Kepler</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-white/60 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-sm bg-white/10"></div>
<span className="text-xs font-medium tracking-tight">Orbis</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-white/60 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-sm bg-white/10"></div>
<span className="text-xs font-medium tracking-tight">Fluxcore</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-900/60 px-3 py-2 text-white/60 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-sm bg-white/10"></div>
<span className="text-xs font-medium tracking-tight">Novum</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="services">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What we do</h2>
<p className="mt-2 max-w-2xl text-sm text-white/70">
              From strategy to platform engineering, we embed with your team to unlock throughput and reliability.
            </p>
</div>
<a className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 md:inline-flex" href="#contact">
<i className="mr-2 h-4 w-4" data-lucide="calendar" strokeWidth="1.5"></i>
            Get a roadmap review
          </a>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="rounded-md border border-emerald-400/20 bg-emerald-400/10 p-2 ring-1 ring-emerald-400/20">
<i className="h-5 w-5 text-emerald-300" data-lucide="compass" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Strategy &amp; Architecture</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Target state blueprints, capability maps, and decision frameworks that de-risk bets and accelerate alignment.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>Architecture reviews &amp; ADRs</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>Roadmaps &amp; operating models</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>Security &amp; compliance baselines</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="rounded-md border border-cyan-400/20 bg-cyan-400/10 p-2 ring-1 ring-cyan-400/20">
<i className="h-5 w-5 text-cyan-300" data-lucide="server" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Platform Engineering</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Golden paths, IDPs, and paved roads that turn infrastructure into leverage and developer joy.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-cyan-300" data-lucide="check" strokeWidth="1.5"></i>IaC, GitOps, policy-as-code</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-cyan-300" data-lucide="check" strokeWidth="1.5"></i>Observability &amp; SRE practices</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-cyan-300" data-lucide="check" strokeWidth="1.5"></i>Kubernetes &amp; multi-cloud</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="rounded-md border border-fuchsia-400/20 bg-fuchsia-400/10 p-2 ring-1 ring-fuchsia-400/20">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Product Acceleration</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Lean product squads that ship features, validate bets, and build momentum without the overhead.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-300" data-lucide="check" strokeWidth="1.5"></i>Discovery to delivery</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-300" data-lucide="check" strokeWidth="1.5"></i>Design systems &amp; DX</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-fuchsia-300" data-lucide="check" strokeWidth="1.5"></i>Performance &amp; accessibility</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="rounded-md border border-amber-400/20 bg-amber-400/10 p-2 ring-1 ring-amber-400/20">
<i className="h-5 w-5 text-amber-300" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Data &amp; AI Enablement</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Practical analytics and AI integrations that elevate decisions and unlock new capabilities.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-amber-300" data-lucide="check" strokeWidth="1.5"></i>Modern data stacks</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-amber-300" data-lucide="check" strokeWidth="1.5"></i>LLM apps &amp; evaluation</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-amber-300" data-lucide="check" strokeWidth="1.5"></i>Governance &amp; lineage</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="rounded-md border border-sky-400/20 bg-sky-400/10 p-2 ring-1 ring-sky-400/20">
<i className="h-5 w-5 text-sky-300" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Security &amp; Compliance</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Practical controls, pipelines, and documentation to pass audits without slowing delivery.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-sky-300" data-lucide="check" strokeWidth="1.5"></i>SOC 2, ISO 27001, HIPAA</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-sky-300" data-lucide="check" strokeWidth="1.5"></i>Threat modeling &amp; SDL</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-sky-300" data-lucide="check" strokeWidth="1.5"></i>Secure SDLC automation</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10 transition hover:border-white/20 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="rounded-md border border-purple-400/20 bg-purple-400/10 p-2 ring-1 ring-purple-400/20">
<i className="h-5 w-5 text-purple-300" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Fractional Leadership</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Interim CTO, Head of Platform, or Product to steer outcomes and level-up teams.
            </p>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-purple-300" data-lucide="check" strokeWidth="1.5"></i>Operating cadence &amp; metrics</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-purple-300" data-lucide="check" strokeWidth="1.5"></i>Hiring &amp; capability building</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-purple-300" data-lucide="check" strokeWidth="1.5"></i>Vendor &amp; cost strategy</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-4 lg:px-8">
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">Lead time reduction</p>
<i className="h-4 w-4 text-white/60" data-lucide="timer" strokeWidth="1.5"></i>
</div>
<div className="mt-2 flex items-end gap-3">
<p className="text-3xl font-semibold tracking-tight">42%</p>
<span className="text-xs text-emerald-400">avg. across projects</span>
</div>
<div className="mt-4">
<div className="overflow-hidden rounded-lg border border-white/10 bg-neutral-900/60 p-2 ring-1 ring-white/10">
<div>

<div className="h-28">
<canvas height="120" id="leadtimeChart" width="400"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">Deployment frequency</p>
<i className="h-4 w-4 text-white/60" data-lucide="cloud-upload" strokeWidth="1.5"></i>
</div>
<div className="mt-2 flex items-end gap-3">
<p className="text-3xl font-semibold tracking-tight">3.5x</p>
<span className="text-xs text-emerald-400">median improvement</span>
</div>
<p className="mt-3 text-sm text-white/60">Paved roads and CI/CD blueprints unlock flow.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">Availability</p>
<i className="h-4 w-4 text-white/60" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="mt-2 flex items-end gap-3">
<p className="text-3xl font-semibold tracking-tight">99.95%</p>
<span className="text-xs text-emerald-400">SLO-backed</span>
</div>
<p className="mt-3 text-sm text-white/60">Observability-first patterns and SRE practices.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="work">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected work</h2>
<p className="mt-2 text-sm text-white/70">Outcomes we’ve helped teams deliver.</p>
</div>
<a className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 md:inline-flex" href="#contact">
<i className="mr-2 h-4 w-4" data-lucide="mail" strokeWidth="1.5"></i>
            Request full portfolio
          </a>
</div>
<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="group overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/10">
<div className="relative">
<img alt="Cloud platform" className="h-44 w-full object-cover opacity-90 transition group-hover:opacity-100" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="rounded-md bg-emerald-500/20 px-2 py-1 text-[11px] text-emerald-200 ring-1 ring-emerald-500/30">Platform</span>
<span className="rounded-md bg-white/10 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/20">Fintech</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Unified deployment platform</h3>
<p className="mt-2 text-sm text-white/70">
                Built an internal developer platform with golden paths, cutting lead time by 48% across 35 services.
              </p>
<ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="git-branch" strokeWidth="1.5"></i> GitOps
                </li>
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="box" strokeWidth="1.5"></i> k8s
                </li>
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="gauge" strokeWidth="1.5"></i> SLOs
                </li>
</ul>
</div>
</article>

<article className="group overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/10">
<div className="relative">
<img alt="Developer experience" className="h-44 w-full object-cover opacity-90 transition group-hover:opacity-100" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="rounded-md bg-fuchsia-500/20 px-2 py-1 text-[11px] text-fuchsia-200 ring-1 ring-fuchsia-500/30">Product</span>
<span className="rounded-md bg-white/10 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/20">SaaS</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Design system &amp; performance uplift</h3>
<p className="mt-2 text-sm text-white/70">
                Introduced a component library and performance budget, improving Core Web Vitals into the green.
              </p>
<ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="rocket" strokeWidth="1.5"></i> 0→1 system
                </li>
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="binary" strokeWidth="1.5"></i> CWV
                </li>
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="workflow" strokeWidth="1.5"></i> DX
                </li>
</ul>
</div>
</article>

<article className="group overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 ring-1 ring-white/10">
<div className="relative">
<img alt="Data &amp; AI" className="h-44 w-full object-cover opacity-90 transition group-hover:opacity-100" src="https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2">
<span className="rounded-md bg-amber-500/20 px-2 py-1 text-[11px] text-amber-200 ring-1 ring-amber-500/30">Data &amp; AI</span>
<span className="rounded-md bg-white/10 px-2 py-1 text-[11px] text-white/80 ring-1 ring-white/20">Marketplace</span>
</div>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Pricing intelligence</h3>
<p className="mt-2 text-sm text-white/70">
                Delivered a demand-forecasting model and pricing service that increased margin by 6–9%.
              </p>
<ul className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="line-chart" strokeWidth="1.5"></i> Forecasting
                </li>
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="cpu" strokeWidth="1.5"></i> MLOps
                </li>
<li className="inline-flex items-center gap-1.5">
<i className="h-3.5 w-3.5" data-lucide="lock" strokeWidth="1.5"></i> Governance
                </li>
</ul>
</div>
</article>
</div>
</div>
</section>

<section className="relative z-10" id="approach">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How we work</h2>
<div className="mt-8 grid gap-6 lg:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6 ring-1 ring-white/10">
<ol className="space-y-6">
<li className="flex gap-4">
<div className="mt-1">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-white/80" data-lucide="target" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">1. Align on outcomes</h3>
<p className="mt-1 text-sm text-white/70">Clarify business goals, constraints, and success metrics in a concise brief.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-white/80" data-lucide="map" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">2. Blueprint &amp; plan</h3>
<p className="mt-1 text-sm text-white/70">Architecture options, trade-offs, and a thin-slice plan to prove value quickly.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-white/80" data-lucide="ship" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">3. Build &amp; embed</h3>
<p className="mt-1 text-sm text-white/70">We ship alongside your team, transferring patterns and capability as we go.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-white/80" data-lucide="repeat" strokeWidth="1.5"></i>
</div>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight">4. Sustain &amp; handover</h3>
<p className="mt-1 text-sm text-white/70">Operate with clear SLOs, docs, and golden paths; we step back when ready.</p>
</div>
</li>
</ol>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6 ring-1 ring-white/10">
<h3 className="text-base font-semibold tracking-tight">Engagement models</h3>
<div className="mt-4 grid gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="zap" strokeWidth="1.5"></i>
<p className="text-sm font-medium">Accelerator</p>
</div>
<p className="mt-1 text-sm text-white/70">4–8 weeks, focused outcomes, dedicated squad.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-cyan-300" data-lucide="users" strokeWidth="1.5"></i>
<p className="text-sm font-medium">Embedded</p>
</div>
<p className="mt-1 text-sm text-white/70">1–3 quarters, co-delivery with enablement.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-fuchsia-300" data-lucide="brain" strokeWidth="1.5"></i>
<p className="text-sm font-medium">Advisory</p>
</div>
<p className="mt-1 text-sm text-white/70">Hands-on guidance, architecture reviews, office hours.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-purple-300" data-lucide="briefcase" strokeWidth="1.5"></i>
<p className="text-sm font-medium">Fractional</p>
</div>
<p className="mt-1 text-sm text-white/70">Interim leadership to steer outcomes.</p>
</div>
</div>
<div className="mt-5 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4 ring-1 ring-emerald-400/20">
<p className="text-sm text-emerald-200">New: Platform baseline in 21 days—CI/CD, IaC, observability, and security guardrails out-of-the-box.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What clients say</h2>
<div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
<figure className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-medium tracking-tight">CTO, Fintech</figcaption>
<p className="text-xs text-white/50">Unified platform initiative</p>
</div>
</div>
<blockquote className="mt-3 text-sm text-white/70">
              They turned a fragmented infrastructure into a coherent platform. The impact on delivery speed was immediate.
            </blockquote>
</figure>
<figure className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-medium tracking-tight">Head of Product, SaaS</figcaption>
<p className="text-xs text-white/50">Design system rollout</p>
</div>
</div>
<blockquote className="mt-3 text-sm text-white/70">
              A pragmatic partner who ships. The design system paid off in weeks with faster, more consistent releases.
            </blockquote>
</figure>
<figure className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<img alt="Client" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<figcaption className="text-sm font-medium tracking-tight">VP Data, Marketplace</figcaption>
<p className="text-xs text-white/50">Pricing intelligence</p>
</div>
</div>
<blockquote className="mt-3 text-sm text-white/70">
              Clear thinking, excellent execution, and a strong sense of ownership. We hit our margin targets ahead of plan.
            </blockquote>
</figure>
</div>
</div>
</section>

<section className="relative z-10" id="insights">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Insights</h2>
<p className="mt-2 text-sm text-white/70">Playbooks and deep dives from the field.</p>
</div>
<a className="hidden rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 hover:text-white hover:ring-white/20 md:inline-flex" href="#">
<i className="mr-2 h-4 w-4" data-lucide="library" strokeWidth="1.5"></i>
            All posts
          </a>
</div>
<div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
<article className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="calendar-days" strokeWidth="1.5"></i>
<span>Playbook</span>
</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Golden paths for rapid delivery</h3>
<p className="mt-1 text-sm text-white/70">How to design IDPs that unlock flow without overengineering.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200" href="#">
              Read
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</article>
<article className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="shield" strokeWidth="1.5"></i>
<span>Guide</span>
</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Security that speeds you up</h3>
<p className="mt-1 text-sm text-white/70">Bake controls into the path so audits stop blocking releases.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200" href="#">
              Read
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</article>
<article className="rounded-xl border border-white/10 bg-neutral-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="cpu" strokeWidth="1.5"></i>
<span>Deep dive</span>
</div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Evaluating LLM features responsibly</h3>
<p className="mt-1 text-sm text-white/70">Metrics, guardrails, and rollout patterns for production AI.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200" href="#">
              Read
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</article>
</div>
</div>
</section>

<section className="relative z-10" id="contact">
<div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
<div className="grid gap-6 lg:grid-cols-5">
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6 ring-1 ring-white/10 lg:col-span-3">
<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let's talk</h2>
<p className="mt-2 text-sm text-white/70">Tell us about your goals. We'll follow up within one business day.</p>
<form className="mt-6 space-y-4">
<div className="grid gap-4 sm:grid-cols-2">
<label className="block">
<span className="text-xs text-white/60">Name</span>
<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:border-emerald-400/30 focus:ring-emerald-400/30" placeholder="Your name" type="text"/>
</label>
<label className="block">
<span className="text-xs text-white/60">Work email</span>
<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:border-emerald-400/30 focus:ring-emerald-400/30" placeholder="you@company.com" type="email"/>
</label>
</div>
<label className="block">
<span className="text-xs text-white/60">Company</span>
<input className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:border-emerald-400/30 focus:ring-emerald-400/30" placeholder="Company" type="text"/>
</label>

<label className="block">
<span className="text-xs text-white/60">Project type</span>
<div className="relative mt-1">
<select className="w-full appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-9 text-sm text-white ring-1 ring-white/10 focus:border-emerald-400/30 focus:ring-emerald-400/30">
<option className="bg-neutral-900">Strategy &amp; Architecture</option>
<option className="bg-neutral-900">Platform Engineering</option>
<option className="bg-neutral-900">Product Acceleration</option>
<option className="bg-neutral-900">Data &amp; AI</option>
<option className="bg-neutral-900">Security &amp; Compliance</option>
<option className="bg-neutral-900">Fractional Leadership</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
<i className="h-4 w-4 text-white/60" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</label>

<fieldset>
<legend className="text-xs text-white/60">Budget</legend>
<div className="mt-1 grid grid-cols-2 gap-2 sm:grid-cols-4">
<label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10">
<input className="peer sr-only" name="budget" type="radio"/>
<span className="peer-checked:text-emerald-300">&lt;$50k</span>
</label>
<label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10">
<input className="peer sr-only" name="budget" type="radio"/>
<span className="peer-checked:text-emerald-300">$50–150k</span>
</label>
<label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10">
<input className="peer sr-only" name="budget" type="radio"/>
<span className="peer-checked:text-emerald-300">$150–500k</span>
</label>
<label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10">
<input className="peer sr-only" name="budget" type="radio"/>
<span className="peer-checked:text-emerald-300">$500k+</span>
</label>
</div>
</fieldset>
<label className="block">
<span className="text-xs text-white/60">What’s the outcome you need?</span>
<textarea className="mt-1 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:border-emerald-400/30 focus:ring-emerald-400/30" placeholder="A brief on goals, constraints, and timeline…" rows="4"></textarea>
</label>
<div className="flex items-center justify-between">
<p className="text-xs text-white/50">We’ll never share your information.</p>
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-sm hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50" type="submit">
<i className="h-4 w-4" data-lucide="send" strokeWidth="1.5"></i>
                  Send request
                </button>
</div>
</form>
</div>
<div className="space-y-4 lg:col-span-2">
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-white/80" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium">Availability</p>
<p className="text-xs text-white/60">Bookings open for next month. Two accelerator slots left.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<img alt="Founder" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Founder-led, senior hands-on</p>
<p className="text-xs text-white/60">No junior handoffs. We ship with you.</p>
</div>
</div>
<div className="mt-4 flex items-center gap-4 text-xs text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Remote-first
                </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="globe" strokeWidth="1.5"></i> US • EU timezones
                </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5" data-lucide="languages" strokeWidth="1.5"></i> English
                </span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/40 p-6 ring-1 ring-white/10">
<p className="text-sm font-medium">Prefer email?</p>
<a className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200" href="mailto:hello@gallifrey.consulting">
<i className="h-4 w-4" data-lucide="mail" strokeWidth="1.5"></i>
                hello@gallifrey.consulting
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pb-10 pt-12 lg:px-8">
<div className="grid gap-8 md:grid-cols-3">
<div>
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-neutral-900/70 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight">GC</span>
</div>
<p className="text-sm font-medium">Gallifrey Consulting</p>
</div>
<p className="mt-3 text-sm text-white/60">Navigate complexity. Ship with certainty.</p>
<div className="mt-4 flex items-center gap-3 text-white/60">
<a className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 ring-1 ring-white/10 hover:bg-white/10 hover:text-white" href="#">
<i className="h-4 w-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-4">
<div>
<p className="text-sm font-medium">Services</p>
<ul className="mt-3 space-y-2 text-sm text-white/60">
<li><a className="hover:text-white" href="#services">Strategy</a></li>
<li><a className="hover:text-white" href="#services">Platform</a></li>
<li><a className="hover:text-white" href="#services">Product</a></li>
<li><a className="hover:text-white" href="#services">Data &amp; AI</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium">Company</p>
<ul className="mt-3 space-y-2 text-sm text-white/60">
<li><a className="hover:text-white" href="#work">Work</a></li>
<li><a className="hover:text-white" href="#approach">Approach</a></li>
<li><a className="hover:text-white" href="#insights">Insights</a></li>
<li><a className="hover:text-white" href="#contact">Contact</a></li>
</ul>
</div>
<div className="md:col-span-2">
<p className="text-sm font-medium">Newsletter</p>
<p className="mt-2 text-sm text-white/60">Monthly insights on shipping with certainty.</p>
<form className="mt-3 flex gap-2">
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-white/40 ring-1 ring-white/10 focus:border-emerald-400/30 focus:ring-emerald-400/30" placeholder="you@company.com" type="email"/>
<button className="rounded-md bg-emerald-500 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-400">Subscribe</button>
</form>
</div>
</div>
</div>
<div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="mt-4 flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
<p>© <span id="year"></span> Gallifrey Consulting. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
