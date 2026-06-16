import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init Lucide icons
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Chart.js minimal sparkline
        const ctx = document.getElementById('heroChart');
        if (ctx) {
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: Array.from({ length: 12 }, (_, i) => i + 1),
              datasets: [{
                data: [2, 3, 2.6, 3.2, 3.8, 4.1, 4.8, 4.2, 5.1, 6.2, 7.1, 7.6],
                borderColor: '#818CF8',
                backgroundColor: 'rgba(129,140,248,0.15)',
                fill: true,
                tension: 0.35,
                pointRadius: 0
              }]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              scales: {
                x: { display: false, grid: { display: false } },
                y: { display: false, grid: { display: false } }
              },
              plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
              },
              elements: { line: { borderWidth: 2 } }
            }
          });
        }

        // Carousel controls (scroll snap)
        const carousel = document.getElementById('carousel');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        if (carousel && prev && next) {
          const step = 420;
          prev.addEventListener('click', () => carousel.scrollBy({ left: -step, behavior: 'smooth' }));
          next.addEventListener('click', () => carousel.scrollBy({ left: step, behavior: 'smooth' }));
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-800/70">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<span className="text-xs font-semibold tracking-tight">M</span>
</div>
<span className="text-sm font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors">MVP Express</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#what">What</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-neutral-200 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors" href="#pricing">See Pricing</a>
<a className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-500/20" href="#contact">Book a Free Discovery Call</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors">
<i className="h-4.5 w-4.5" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-12 items-center">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-neutral-300">
<i className="h-3.5 w-3.5 text-yellow-400" data-lucide="zap"></i>
<span>2–4 week delivery</span>
</div>
<h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            From Idea to MVP in 30 Days
          </h1>
<p className="mt-4 text-neutral-300 text-base md:text-lg leading-relaxed">
            We design, build, and launch your MVP in 2–4 weeks using Webflow, Framer &amp; AI.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-500/20" href="#contact">
              Book a Free Discovery Call
              <i className="ml-2 h-4.5 w-4.5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-neutral-200 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors" href="#pricing">
              See Pricing
              <i className="ml-2 h-4.5 w-4.5" data-lucide="panel-right"></i>
</a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="text-xs text-neutral-400">Trusted by founders and product teams</div>
<div className="flex items-center gap-3">
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">ALPHA</div>
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">BETA</div>
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">GAMMA</div>
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">DELTA</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-indigo-500/20 blur-2xl"></div>
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-2xl shadow-black/40">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-neutral-600"></div>
<div className="h-2.5 w-2.5 rounded-full bg-neutral-600"></div>
<div className="h-2.5 w-2.5 rounded-full bg-neutral-600"></div>
</div>
<div className="text-xs text-neutral-400">Preview · MVP Express</div>
<div className="flex items-center gap-2">
<button className="h-7 w-7 grid place-items-center rounded-md border border-white/10 hover:bg-white/5">
<i className="h-4 w-4 text-indigo-400" data-lucide="sparkles"></i>
</button>
</div>
</div>

<div className="mt-4 grid grid-cols-5 gap-4">

<div className="col-span-3 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-300">Launch velocity</div>
<div className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
<i className="h-3.5 w-3.5" data-lucide="trending-up"></i> +38%
                  </div>
</div>
<div className="mt-3">
<div className="relative h-32">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas className="!h-full !w-full" id="heroChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-300">MVP readiness</div>
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="shield-check"></i>
</div>
<div className="mt-3 flex items-end gap-2">
<div className="text-3xl font-semibold tracking-tight text-white">92%</div>
<div className="text-[11px] text-neutral-400">confidence</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-neutral-400">Prototype</div>
<div className="text-sm font-medium mt-1">Figma</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-[11px] text-neutral-400">Build</div>
<div className="text-sm font-medium mt-1">No/Low-code</div>
</div>
</div>
</div>

<div className="col-span-5 rounded-xl border border-white/10 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1470&amp;auto=format&amp;fit=crop')] bg-cover bg-center min-h-[120px] relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-950/60"></div>
<div className="relative p-4 flex items-center justify-between">
<div>
<div className="text-xs text-neutral-300">Tech snapshot</div>
<div className="mt-1 text-sm font-medium">Auth • DB • Integrations • AI</div>
</div>
<div className="inline-flex items-center gap-1 rounded px-2 py-1 text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20">
<i className="h-3.5 w-3.5" data-lucide="cpu"></i> Ready to scale
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800/70" id="what">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="grid md:grid-cols-5 gap-10 items-start">
<div className="md:col-span-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">What’s MVP Express?</h2>
<p className="mt-3 text-neutral-300">
              A packaged service to take your concept to a functional product—fast, scalable, and investor-ready.
            </p>
</div>
<div className="md:col-span-3 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-yellow-400" data-lucide="zap"></i>
<div className="text-sm font-medium">Speed</div>
</div>
<p className="mt-2 text-sm text-neutral-300">2–4 weeks from idea to launch.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-cyan-300" data-lucide="layers"></i>
<div className="text-sm font-medium">Scalability</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Modern stack with clean, modular build.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="wallet"></i>
<div className="text-sm font-medium">Cost-clarity</div>
</div>
<p className="mt-2 text-sm text-neutral-300">Fixed pricing. No surprises.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800/70" id="process">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">How It Works</h2>
<p className="mt-3 text-neutral-300">Three focused sprints. Clear deliverables. No fluff.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="relative rounded-xl border border-white/10 bg-white/[0.04] p-6">
<div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-[11px]">
<span className="text-neutral-300">Step 1</span>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-white/10 grid place-items-center bg-white/5">
<i className="h-4.5 w-4.5 text-blue-300" data-lucide="search"></i>
</div>
<div className="text-sm font-medium">Discovery</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Week 1: briefing, user flows, and a clickable Figma prototype.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/[0.04] p-6">
<div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-[11px]">
<span className="text-neutral-300">Step 2</span>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-white/10 grid place-items-center bg-white/5">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="hammer"></i>
</div>
<div className="text-sm font-medium">Build</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Weeks 2–3: no-code/low-code development, core features, integrations.</p>
</div>

<div className="relative rounded-xl border border-white/10 bg-white/[0.04] p-6">
<div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-[11px]">
<span className="text-neutral-300">Step 3</span>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-white/10 grid place-items-center bg-white/5">
<i className="h-4.5 w-4.5 text-indigo-300" data-lucide="rocket"></i>
</div>
<div className="text-sm font-medium">Launch</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Week 4: testing, polish, and delivery. Go live with confidence.</p>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-500/20" href="#contact">
            Start Your MVP Now
            <i className="ml-2 h-4.5 w-4.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="border-t border-neutral-800/70" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Pricing Plans</h2>
<p className="mt-3 text-neutral-300">Transparent, fixed pricing. Choose a plan that fits your scope.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="text-sm font-medium">Starter MVP</div>
<div className="mt-2 text-neutral-400 text-sm">Landing + dashboard (5–6 screens)</div>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$1,500</span>
<span className="text-neutral-400 text-sm">– $2,000</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> UX/UI in Figma
              </li>
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Responsive landing
              </li>
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Basic dashboard
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 transition-colors" href="#contact">Choose Starter</a>
</div>

<div className="relative rounded-2xl border border-indigo-500/30 bg-white/[0.06] p-6 ring-1 ring-inset ring-indigo-500/10 shadow-[0_0_0_1px_rgba(99,102,241,0.15)]">
<div className="absolute -top-3 right-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-1 text-[11px] text-indigo-300">
              Recommended
            </div>
<div className="text-sm font-medium">Growth MVP</div>
<div className="mt-2 text-neutral-300 text-sm">App with auth + DB + dashboard</div>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">$3,000</span>
<span className="text-neutral-400 text-sm">– $4,000</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Auth, roles, sessions
              </li>
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Database + CMS
              </li>
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Components library
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors" href="#contact">Choose Growth</a>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="text-sm font-medium">Custom MVP</div>
<div className="mt-2 text-neutral-400 text-sm">Integrations, AI, multi‑role</div>
<div className="mt-4">
<span className="text-3xl font-semibold tracking-tight">From $5,000</span>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Complex workflows
              </li>
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> AI features &amp; agents
              </li>
<li className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-emerald-400" data-lucide="check"></i> Third‑party integrations
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium text-white bg-neutral-800 hover:bg-neutral-700 border border-white/10 transition-colors" href="#contact">Discuss Custom</a>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800/70" id="results">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Results that Matter</h2>
<p className="mt-3 text-neutral-300 max-w-xl">Launch with traction. Validate faster. Impress investors.</p>
</div>
<div className="grid grid-cols-3 gap-4 w-full lg:w-auto">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-2xl font-semibold tracking-tight text-white">+200%</div>
<div className="text-xs text-neutral-400 mt-1">user acquisition</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-2xl font-semibold tracking-tight text-white">3x</div>
<div className="text-xs text-neutral-400 mt-1">conversion rate</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
<div className="text-2xl font-semibold tracking-tight text-white">45%</div>
<div className="text-xs text-neutral-400 mt-1">efficiency boost</div>
</div>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">What clients say</div>
<div className="flex items-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" id="prev">
<i className="h-4.5 w-4.5" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" id="next">
<i className="h-4.5 w-4.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="mt-4 overflow-x-auto scroll-smooth snap-x snap-mandatory flex gap-4 no-scrollbar" id="carousel" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="min-w-[300px] md:min-w-[420px] snap-start rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">NOVA</div>
<span className="text-xs text-neutral-400">Seed SaaS</span>
</div>
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="quote"></i>
</div>
<p className="mt-4 text-sm text-neutral-200">
                They shipped a live MVP in 3 weeks that we used for our demo day. Clear process. Zero fluff.
              </p>
<div className="mt-4 text-xs text-neutral-400">— Alex R., Founder</div>
</div>

<div className="min-w-[300px] md:min-w-[420px] snap-start rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">ARC</div>
<span className="text-xs text-neutral-400">AI Tooling</span>
</div>
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="quote"></i>
</div>
<p className="mt-4 text-sm text-neutral-200">
                The MVP doubled our waitlist conversion and validated our core thesis quickly.
              </p>
<div className="mt-4 text-xs text-neutral-400">— Priya S., PM</div>
</div>

<div className="min-w-[300px] md:min-w-[420px] snap-start rounded-2xl border border-white/10 bg-white/[0.04] p-6">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<div className="h-7 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">VANTA</div>
<span className="text-xs text-neutral-400">Agency</span>
</div>
<i className="h-4.5 w-4.5 text-neutral-400" data-lucide="quote"></i>
</div>
<p className="mt-4 text-sm text-neutral-200">
                Fast, organized, and scalable delivery. Exactly what we needed to pitch enterprise.
              </p>
<div className="mt-4 text-xs text-neutral-400">— Jordan K., Director</div>
</div>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">ORBIT</div>
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">NORTH</div>
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">ATLAS</div>
<div className="h-6 px-2 rounded bg-white/5 border border-white/10 text-[10px] tracking-tight grid place-items-center">HEX</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800/70">
<div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-12">
<div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl"></div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Validate Your Idea in 30 Days</h3>
<p className="mt-2 text-neutral-300">No fluff. Just a functional MVP ready for market.</p>
<div className="mt-6">
<a className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors shadow-sm shadow-indigo-500/20" href="#contact">
              Book Your Free Call Today
              <i className="ml-2 h-4.5 w-4.5" data-lucide="calendar"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800/70" id="contact">
<div className="mx-auto max-w-7xl px-6 py-14">
<div className="grid lg:grid-cols-4 gap-10">

<div className="lg:col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<span className="text-xs font-semibold tracking-tight">M</span>
</div>
<span className="text-sm font-medium text-neutral-200">MVP Express</span>
</div>
<p className="mt-3 text-sm text-neutral-300 max-w-md">
              Build fast. Learn faster. We help founders validate ideas with production-grade MVPs.
            </p>
<form className="mt-6 grid sm:grid-cols-[1fr_auto] gap-3 max-w-lg">
<input className="w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-white/20" placeholder="Your email" required="" type="email"/>
<button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-400 transition-colors" type="submit">
                Request Call
                <i className="ml-2 h-4.5 w-4.5" data-lucide="send"></i>
</button>
</form>
<div className="mt-6 flex items-center gap-4">
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" href="#">
<i className="h-4.5 w-4.5" data-lucide="linkedin"></i> LinkedIn
              </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" href="#">
<i className="h-4.5 w-4.5" data-lucide="dribbble"></i> Dribbble
              </a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors" href="#">
<i className="h-4.5 w-4.5" data-lucide="case-upper"></i> Behance
              </a>
</div>
</div>

<div>
<div className="text-sm font-medium">Quick Links</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#what">What’s included</a></li>
<li><a className="hover:text-white transition-colors" href="#process">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#results">Case studies</a></li>
</ul>
</div>

<div>
<div className="text-sm font-medium">FAQ</div>
<div className="mt-3 space-y-3">
<details className="group rounded-md border border-white/10 bg-white/5 p-3 open:bg-white/7">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-200">
                  What’s included?
                  <i className="h-4.5 w-4.5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-neutral-300">
                  Scope includes UX/UI, implementation, basic analytics, QA, and launch support. Add‑ons: auth, DB, integrations, AI features depending on plan.
                </p>
</details>
<details className="group rounded-md border border-white/10 bg-white/5 p-3 open:bg-white/7">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm text-neutral-200">
                  How fast can we start?
                  <i className="h-4.5 w-4.5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-2 text-sm text-neutral-300">
                  We can typically kick off within 3–5 business days. Discovery begins immediately after the call and deposit.
                </p>
</details>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 text-xs text-neutral-500 flex items-center justify-between">
<span>© <span id="year"></span> MVP Express. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300" href="#">Privacy</a>
<a className="hover:text-neutral-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
