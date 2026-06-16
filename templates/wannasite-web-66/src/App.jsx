import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
}
}
}
}



    // Mobile nav toggle
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-open');
    const iconClose = document.getElementById('icon-close');

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden', !mobileMenu.classList.contains('hidden'));
        iconClose.classList.toggle('hidden', mobileMenu.classList.contains('hidden'));
      });
    }

    // Current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Chart.js: impact snapshot
    const ctx = document.getElementById('impactChart');
    if (ctx && window.Chart) {
      const impactChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Launch', 'Month 1', 'Month 2', 'Month 3', 'Month 4'],
          datasets: [
            {
              label: 'Web',
              data: [0, 12, 24, 33, 41],
              borderColor: 'rgba(56, 189, 248, 1)',
              backgroundColor: 'rgba(56, 189, 248, 0.18)',
              tension: 0.35,
              fill: true,
              borderWidth: 1.5,
              pointRadius: 0
            },
            {
              label: 'AI',
              data: [0, 18, 32, 47, 63],
              borderColor: 'rgba(244, 114, 182, 1)',
              backgroundColor: 'rgba(244, 114, 182, 0.2)',
              tension: 0.35,
              fill: true,
              borderWidth: 1.5,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15,23,42,0.95)',
              borderColor: 'rgba(148,163,184,0.5)',
              borderWidth: 1,
              titleColor: '#e5e7eb',
              bodyColor: '#cbd5f5',
              padding: 8,
              displayColors: false
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: {
                color: 'rgba(148,163,184,0.8)',
                font: { size: 10 }
              }
            },
            y: {
              grid: { color: 'rgba(30,64,175,0.3)' },
              ticks: {
                color: 'rgba(148,163,184,0.8)',
                font: { size: 10 },
                callback: value => value + '%'
              }
            }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-20 bg-gradient-to-b from-black via-[#05050A] to-[#050507]"></div>
<div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-64 opacity-60">
<div className="mx-auto h-full max-w-5xl bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_20%_80%,_rgba(244,114,182,0.18),_transparent_55%),_radial-gradient(circle_at_80%_30%,_rgba(251,146,60,0.15),_transparent_55%)] blur-3xl"></div>
</div>

<div className="min-h-screen">

<header className="sticky top-0 z-40 border-b border-white/5 bg-[#050507]/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
<a className="flex items-center gap-3" href="#top">
<div className="relative h-9 w-9">
<img alt="WANNASITE neon mark" className="h-9 w-9 rounded-lg object-cover opacity-0" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-orange-400 p-[1px]">
<div className="flex h-full w-full items-center justify-center rounded-[0.6rem] bg-black/90 text-xs font-medium tracking-tight text-slate-50">
                W
              </div>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">WANNASITE</span>
<span className="text-[11px] font-medium text-slate-400">Web &amp; AI Automation Studio</span>
</div>
</a>
<nav className="hidden items-center gap-8 text-xs font-medium text-slate-300 md:flex">
<a className="transition hover:text-slate-50" href="#services">Services</a>
<a className="transition hover:text-slate-50" href="#work">Work</a>
<a className="transition hover:text-slate-50" href="#about">About</a>
<a className="transition hover:text-slate-50" href="#contact">Contact</a>
</nav>
<div className="hidden items-center gap-3 md:flex">
<button className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/5">
            Download deck
          </button>
<a className="rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.35)] transition hover:brightness-110" href="#contact">
            Book strategy call
          </a>
</div>
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-200 md:hidden" id="mobile-menu-toggle">
<svg className="h-4 w-4" fill="none" id="icon-open" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"></path>
</svg>
<svg className="hidden h-4 w-4" fill="none" id="icon-close" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M6 18L18 6" strokeLinecap="round"></path>
</svg>
</button>
</div>
<div className="hidden border-t border-white/5 bg-[#050507]/95 px-4 pb-4 pt-2 text-sm text-slate-200 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-1">
<a className="rounded-md px-2 py-2 hover:bg-white/5" href="#services">Services</a>
<a className="rounded-md px-2 py-2 hover:bg-white/5" href="#work">Work</a>
<a className="rounded-md px-2 py-2 hover:bg-white/5" href="#about">About</a>
<a className="rounded-md px-2 py-2 hover:bg-white/5" href="#contact">Contact</a>
</nav>
<div className="mt-3 flex flex-col gap-2">
<button className="w-full rounded-full border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-200">
            Download deck
          </button>
<a className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-slate-950" href="#contact">
            Book strategy call
          </a>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 lg:px-8 lg:pt-16" id="top">

<section className="relative grid gap-10 pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-16 lg:pb-24" id="hero">
<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-medium text-slate-200 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]">
<span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 shadow-[0_0_15px_rgba(56,189,248,0.9)]"></span>
<span>Cross-Atlantic Web &amp; AI Studio • USA + EU</span>
</div>
<div>
<h1 className="text-3xl tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Web Design &amp; AI Automation for High-Growth Brands.
            </h1>
<p className="mt-4 max-w-xl text-sm font-normal leading-relaxed text-slate-300">
              Senior-led digital experiences and intelligent automation systems that compound.
              We ship premium product surfaces and AI-first systems that drive pipeline, conversion, and operational leverage.
            </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 px-5 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.5)] transition hover:brightness-110" href="#contact">
              Book strategy call
            </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-medium text-slate-100 transition hover:border-white/40 hover:bg-white/10" href="#services">
<span>Explore services</span>
</a>
<div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">
<div className="flex -space-x-1.5">
<img alt="" className="h-6 w-6 rounded-full border border-slate-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="" className="h-6 w-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="" className="h-6 w-6 rounded-full border border-slate-900 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
<span>Trusted partners to growth-stage teams.</span>
</div>
</div>
<div className="grid max-w-xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-gradient-to-tr from-white/[0.02] via-white/[0.01] to-transparent p-3 shadow-[0_18px_60px_rgba(15,23,42,0.9)] sm:grid-cols-4">
<div className="flex flex-col gap-0.5">
<span className="text-sm font-semibold tracking-tight text-slate-50">21+</span>
<span className="text-[11px] text-slate-400">Years in digital</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-semibold tracking-tight text-slate-50">350+</span>
<span className="text-[11px] text-slate-400">Projects shipped</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-semibold tracking-tight text-slate-50">USA + EU</span>
<span className="text-[11px] text-slate-400">Cross-Atlantic footprint</span>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-semibold tracking-tight text-slate-50">100%</span>
<span className="text-[11px] text-slate-400">AI-powered delivery</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_100%_0%,rgba(244,114,182,0.3),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(251,146,60,0.25),transparent_55%)] blur-3xl opacity-70"></div>
<div className="relative h-full">
<div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black/60 shadow-[0_25px_80px_rgba(15,23,42,1)]">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"></span>
<span className="text-[11px] font-medium text-slate-300">AI Control Surface</span>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<span>Live</span>
<span className="h-1 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 opacity-80"></span>
</div>
</div>
<div className="grid gap-4 p-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
<div className="space-y-3">
<h2 className="text-sm font-semibold tracking-tight text-slate-50">Revenue-grade surfaces.</h2>
<p className="text-[11px] leading-relaxed text-slate-300">
                    We blend product, brand, and AI to design high-conversion surfaces — from marketing sites to product UX to internal operator tools.
                  </p>
<div className="grid grid-cols-2 gap-3 text-[11px]">
<div className="rounded-xl border border-cyan-400/30 bg-cyan-500/5 p-3">
<div className="mb-1 flex items-center justify-between">
<span className="font-medium text-cyan-100">Web</span>
<span className="text-[10px] text-cyan-300">+41% CVR</span>
</div>
<p className="text-[11px] text-cyan-100/80">Full-funnel journeys tuned for high-intent traffic.</p>
</div>
<div className="rounded-xl border border-fuchsia-400/35 bg-fuchsia-500/5 p-3">
<div className="mb-1 flex items-center justify-between">
<span className="font-medium text-fuchsia-100">AI Ops</span>
<span className="text-[10px] text-fuchsia-300">-63% ops time</span>
</div>
<p className="text-[11px] text-fuchsia-100/80">Agents that orchestrate CRM, support, and reporting.</p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="rounded-xl border border-white/10 bg-black/40 p-3">
<div className="mb-2 flex items-center justify-between text-[11px] text-slate-300">
<span>Monthly performance</span>
<span>+118%</span>
</div>
<div className="h-28 rounded-lg bg-slate-950/80 p-2">
<div className="h-full w-full rounded-md bg-gradient-to-tr from-cyan-400/20 via-fuchsia-500/20 to-orange-400/20"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-[10px]">
<div className="rounded-lg border border-white/10 bg-white/5 p-2">
<div className="text-[9px] text-slate-400">Ops automated</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">72%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-2">
<div className="text-[9px] text-slate-400">Lead velocity</div>
<div className="text-xs font-semibold tracking-tight text-slate-50">+54%</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-2">
<div className="text-[9px] text-slate-400">Ticket volume</div>
<div className="text-xs font-semibold tracking-tight text-emerald-400">-38%</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -left-4 bottom-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 px-3 py-2 backdrop-blur">
<div className="relative h-8 w-8">
<div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-orange-400 opacity-80 blur"></div>
<div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black text-xs font-semibold tracking-tight text-slate-50">
                  W
                </div>
</div>
<div className="text-[10px] text-slate-300">
<div className="font-medium text-slate-100">AI-First Delivery Stack</div>
<div>Orchestrated by senior operators in the US &amp; EU.</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="services">
<div className="mb-8 flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">Web + AI, architected together.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              WANNASITE USA is a cross-Atlantic web design and AI automation agency for growth-stage brands that need both polish and performance.
            </p>
</div>
<div className="hidden text-[11px] text-slate-400 sm:block">
<div>We work directly with founders, CMOs, and product leaders.</div>
<div>One integrated team across strategy, product, and AI systems.</div>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-2">

<div className="flex flex-col gap-4 rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/[0.08] via-slate-900 to-slate-950 p-5 shadow-[0_18px_60px_rgba(8,47,73,0.65)]">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M8 15h.01M12 15h4" strokeLinecap="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Web Design &amp; Development</h3>
<p className="text-[11px] text-cyan-100/80">Premium surfaces, engineered for conversion and scale.</p>
</div>
</div>
<div className="grid gap-3 text-sm text-slate-200">
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400"></span>
<div>
<div className="font-medium text-slate-100">Custom websites</div>
<p className="text-[11px] text-slate-300">Narratives and systems tailored to your brand, product, and funnel.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400"></span>
<div>
<div className="font-medium text-slate-100">Conversion-optimized funnels</div>
<p className="text-[11px] text-slate-300">Landing systems, pricing flows, and onboarding tuned for revenue.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-sky-400 to-teal-300"></span>
<div>
<div className="font-medium text-slate-100">UX/UI design &amp; product surfaces</div>
<p className="text-[11px] text-slate-300">From marketing to product UI — one cohesive ecosystem.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"></span>
<div>
<div className="font-medium text-slate-100">Ecommerce &amp; performance</div>
<p className="text-[11px] text-slate-300">Fast, resilient storefronts with analytics baked in.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400"></span>
<div>
<div className="font-medium text-slate-100">SEO &amp; analytics-ready builds</div>
<p className="text-[11px] text-slate-300">Technical foundations that make traffic and insights compounding.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 rounded-2xl border border-fuchsia-400/35 bg-gradient-to-b from-fuchsia-500/[0.08] via-slate-900 to-slate-950 p-5 shadow-[0_18px_60px_rgba(88,28,135,0.75)]">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-200">

<svg className="h-4 w-4" fill="none" id="lucide-bot" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2M20 14h2"></path>
<path d="M9 13h.01M15 13h.01" strokeLinecap="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">AI Automation &amp; Workflows</h3>
<p className="text-[11px] text-fuchsia-100/80">AI systems that remove operational drag and surface real-time insight.</p>
</div>
</div>
<div className="grid gap-3 text-sm text-slate-200">
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-fuchsia-400 to-orange-400"></span>
<div>
<div className="font-medium text-slate-100">AI strategy &amp; audits</div>
<p className="text-[11px] text-slate-300">We map systems, data, and workflows to identify what to automate first.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400"></span>
<div>
<div className="font-medium text-slate-100">Automation workflows</div>
<p className="text-[11px] text-slate-300">Structured, observable flows across CRM, billing, support, and data.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-purple-400 to-rose-400"></span>
<div>
<div className="font-medium text-slate-100">AI agents &amp; internal tools</div>
<p className="text-[11px] text-slate-300">Ops, CRM, support, and reporting agents, wired into your stack.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-300"></span>
<div>
<div className="font-medium text-slate-100">Operations optimization</div>
<p className="text-[11px] text-slate-300">We design AI to augment operators, not replace them.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-1 h-1 w-4 rounded-full bg-gradient-to-r from-fuchsia-400 to-emerald-400"></span>
<div>
<div className="font-medium text-slate-100">End-to-end web + AI integration</div>
<p className="text-[11px] text-slate-300">From marketing site to CRM to internal dashboards — one connected system.</p>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-[11px] text-slate-300">
<div>
<div className="font-medium text-slate-100">Automation baseline in 6–10 weeks.</div>
<div>First agents orchestrating core workflows, not just experiments.</div>
</div>
<div className="hidden text-right text-[10px] text-emerald-300 sm:block">
<div className="font-semibold tracking-tight">-40–70%</div>
<div>time on repetitive ops.</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="work">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">Selected work.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              A sample of websites, product surfaces, and AI systems we’ve launched with growth-stage teams across the US and EU.
            </p>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-1.5 text-[11px] font-medium text-slate-100 hover:border-white/40 hover:bg-white/5" href="#contact">
<span>Request a relevant case study</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M8 7h9v9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<article className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-slate-950 to-black p-4 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
<div className="relative mb-3 overflow-hidden rounded-xl border border-white/10 bg-black/80">
<img alt="SaaS growth dashboard" className="h-36 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/40 via-fuchsia-500/40 to-transparent mix-blend-screen"></div>
<div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-slate-200 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>SaaS • Web + AI</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Growth OS for B2B SaaS</h3>
<p className="mt-1 text-[11px] text-slate-300">
                Revenue website, pricing flows, and AI attribution reporting for a Series B SaaS platform.
              </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-cyan-400"></span>
<span>+39% marketing-qualified opportunities in 90 days.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-fuchsia-400"></span>
<span>Self-serve demo flow lifted signups by 26%.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-emerald-400"></span>
<span>AI ops agent removed ~35 hours / week of manual reporting.</span>
</li>
</ul>
</div>
</article>

<article className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-slate-950 to-black p-4 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
<div className="relative mb-3 overflow-hidden rounded-xl border border-white/10 bg-black/80">
<img alt="Consumer brand product hero" className="h-36 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-400/40 via-fuchsia-500/40 to-transparent mix-blend-screen"></div>
<div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-slate-200 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span>DTC • Ecommerce</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">DTC Conversion System</h3>
<p className="mt-1 text-[11px] text-slate-300">
                High-velocity ecommerce rebuild for a US lifestyle brand expanding into the EU.
              </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-orange-400"></span>
<span>+51% uplift in checkout completion.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-cyan-400"></span>
<span>AI merchandising agent auto-optimizes product sort and bundles.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-emerald-400"></span>
<span>Return-handling automation cut manual tickets by 44%.</span>
</li>
</ul>
</div>
</article>

<article className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-slate-950 to-black p-4 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
<div className="relative mb-3 overflow-hidden rounded-xl border border-white/10 bg-black/80">
<img alt="Team operations screens" className="h-36 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/35 via-purple-500/40 to-transparent mix-blend-screen"></div>
<div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-slate-200 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
<span>Ops • Internal tools</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">AI Ops Console for a Fintech</h3>
<p className="mt-1 text-[11px] text-slate-300">
                Internal agent network and operator console orchestrating KYC, ticketing, and portfolio updates.
              </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-fuchsia-400"></span>
<span>Ops agent resolved 62% of tickets without human touch.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-cyan-400"></span>
<span>Internal UI reduced context-switching by 38%.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-emerald-400"></span>
<span>Compliance-ready logging built into every workflow.</span>
</li>
</ul>
</div>
</article>

<article className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-slate-950 to-black p-4 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
<div className="relative mb-3 overflow-hidden rounded-xl border border-white/10 bg-black/80">
<img alt="Mountain landscape and brand overlay" className="h-36 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/35 via-fuchsia-500/35 to-orange-400/30 mix-blend-screen"></div>
<div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-slate-200 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>B2B Services • Brand</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Cross-Atlantic Services Studio</h3>
<p className="mt-1 text-[11px] text-slate-300">
                Narrative-first website and AI proposal engine for a US/EU consulting outfit.
              </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-cyan-400"></span>
<span>+3.1x increase in qualified inbound inquiries.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-fuchsia-400"></span>
<span>Proposal generation dropped from 4 hours to 12 minutes.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-orange-400"></span>
<span>Localized experiences for US &amp; EU audiences from one system.</span>
</li>
</ul>
</div>
</article>

<article className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] via-slate-950 to-black p-4 shadow-[0_18px_55px_rgba(15,23,42,0.95)]">
<div className="relative mb-3 overflow-hidden rounded-xl border border-white/10 bg-black/80">
<img alt="Minimal 3D environment" className="h-36 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-300/30 via-fuchsia-400/40 to-orange-400/30 mix-blend-screen"></div>
<div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/70 px-2 py-1 text-[10px] text-slate-200 backdrop-blur">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Enterprise • Systems</span>
</div>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-50">AI Reporting Mesh</h3>
<p className="mt-1 text-[11px] text-slate-300">
                Unified reporting layer aggregating marketing, product, and ops data into AI-first insights.
              </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-emerald-400"></span>
<span>VP-level dashboards live in 5 weeks.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-cyan-400"></span>
<span>AI agent answers 80% of ad-hoc “how are we doing?” queries.</span>
</li>
<li className="flex items-center gap-2">
<span className="h-[3px] w-3 rounded-full bg-fuchsia-400"></span>
<span>Reduced weekly reporting cycle from 2 days to 2 hours.</span>
</li>
</ul>
</div>
</article>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="process">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">A process built for operators.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              We run lean, senior-led engagements. No handoffs between strategy and execution, no passive docs. One team from idea to live system.
            </p>
</div>
<div className="text-[11px] text-slate-400">
            Typical engagements: 8–16 weeks. <span className="text-slate-200">We ship value every sprint.</span>
</div>
</div>
<div className="relative">
<div className="absolute left-3 right-3 top-6 hidden h-px bg-gradient-to-r from-cyan-400/40 via-fuchsia-500/40 to-orange-400/40 md:block"></div>
<div className="grid gap-6 md:grid-cols-4">

<div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-3">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 opacity-70 blur"></div>
<div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] font-semibold tracking-tight text-cyan-100">
                    01
                  </div>
</div>
<div>
<h3 className="text-xs font-semibold tracking-tight text-slate-50">Discovery &amp; Alignment</h3>
<p className="text-[11px] text-slate-300">1–2 weeks</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
                Stakeholder interviews, stack review, analytics baseline, and funnel mapping. We align on KPIs, constraints, and velocity.
              </p>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-3">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 opacity-70 blur"></div>
<div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] font-semibold tracking-tight text-cyan-100">
                    02
                  </div>
</div>
<div>
<h3 className="text-xs font-semibold tracking-tight text-slate-50">Architecture &amp; Prototypes</h3>
<p className="text-[11px] text-slate-300">2–3 weeks</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
                We blueprint the system: information architecture, journeys, AI touchpoints, and low-friction prototypes to validate quickly.
              </p>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-3">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-fuchsia-500 to-orange-400 opacity-70 blur"></div>
<div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] font-semibold tracking-tight text-fuchsia-100">
                    03
                  </div>
</div>
<div>
<h3 className="text-xs font-semibold tracking-tight text-slate-50">Build, Integrate &amp; Automate</h3>
<p className="text-[11px] text-slate-300">4–8 weeks</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
                We build the website, UX, and AI agents in parallel. Integrations, data modeling, tracking, and guardrails all wired in.
              </p>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-3">
<div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-black">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-emerald-400 opacity-70 blur"></div>
<div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 text-[11px] font-semibold tracking-tight text-emerald-100">
                    04
                  </div>
</div>
<div>
<h3 className="text-xs font-semibold tracking-tight text-slate-50">Launch, Iterate &amp; Support</h3>
<p className="text-[11px] text-slate-300">Ongoing</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
                We launch quietly or loudly, depending on your go-to-market, then iterate on live data. Ongoing support available for teams that want a long-term partner.
              </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="testimonials">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">What operators say.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              We plug in alongside founders, CEOs, CMOs, and heads of operations. The mandate: move the numbers that matter.
            </p>
</div>
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"></span>
<span>References available on request.</span>
</div>
</div>
<div className="relative rounded-3xl border border-white/10 bg-gradient-to-r from-slate-950 via-slate-950 to-slate-950 px-4 py-5 sm:px-6 lg:px-8">
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-10">
<div className="space-y-4">

<figure className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<blockquote className="text-sm text-slate-100">
                  “WANNASITE felt like having a senior in-house product and growth team that just happened to be external. They rebuilt our site, pricing, and ops stack around one narrative and one set of KPIs.”
                </blockquote>
<figcaption className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
<div>
<div className="font-medium text-slate-100">Founder &amp; CEO</div>
<div>B2B SaaS, Series B, San Francisco</div>
</div>
<div className="text-right text-emerald-300">
<div className="text-[10px]">+41% pipeline</div>
<div className="text-[10px]">in 2 quarters</div>
</div>
</figcaption>
</figure>

<figure className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<blockquote className="text-sm text-slate-100">
                  “They understand how to design for CFOs and CMOs at the same time. Every surface looks premium, but under the hood it’s clean, observable, and hooked into our systems.”
                </blockquote>
<figcaption className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
<div>
<div className="font-medium text-slate-100">Chief Marketing Officer</div>
<div>Enterprise services, New York &amp; London</div>
</div>
<div className="text-right text-cyan-300">
<div className="text-[10px]">+27% win rate</div>
<div className="text-[10px]">on inbound deals</div>
</div>
</figcaption>
</figure>
</div>
<div className="space-y-4">

<figure className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<blockquote className="text-sm text-slate-100">
                  “The AI work wasn’t a lab project. In 7 weeks, our team stopped doing dozens of repetitive tasks. We now treat automations as teammates, not toys.”
                </blockquote>
<figcaption className="mt-3 flex items-center justify-between text-[11px] text-slate-300">
<div>
<div className="font-medium text-slate-100">Head of Operations</div>
<div>Fintech, EU HQ</div>
</div>
<div className="text-right text-emerald-300">
<div className="text-[10px]">-63% manual ops</div>
<div className="text-[10px]">hours per month</div>
</div>
</figcaption>
</figure>

<div className="flex items-center justify-center gap-2 pt-1">
<span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_12px_rgba(56,189,248,0.9)]"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/15"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/15"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/15"></span>
</div>

<div className="rounded-2xl border border-white/10 bg-black/60 p-3">
<div className="mb-2 flex items-center justify-between">
<div>
<div className="text-[11px] font-medium text-slate-200">Impact snapshot</div>
<div className="text-[10px] text-slate-400">Aggregate across last 12 launches</div>
</div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-400">
<span className="inline-flex items-center gap-1">
<span className="h-1 w-3 rounded-full bg-cyan-400"></span>Web
                    </span>
<span className="inline-flex items-center gap-1">
<span className="h-1 w-3 rounded-full bg-fuchsia-400"></span>AI
                    </span>
</div>
</div>
<div className="h-32">
<div className="h-full w-full">
<canvas className="h-full w-full" id="impactChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="about">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">Cross-Atlantic studio. Senior operators only.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              WANNASITE USA is built for leaders who want one partner across web, product surfaces, and AI systems — with direct access to senior talent.
            </p>
</div>
<div className="text-[11px] text-slate-400">
            US-based, serving clients across the United States and Europe.
          </div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
<div className="space-y-5">
<div className="grid gap-4 text-sm text-slate-200">
<p>
                We’ve been designing and shipping digital products for over 21 years. Our team has sat in-house at high-growth companies, led product and marketing orgs, and built internal tools that operators rely on daily.
              </p>
<p>
                Today, we bring that experience to a focused set of partners. No junior handoffs, no “slide-only” strategy. The people you meet are the ones designing, architecting, and deploying your systems.
              </p>
<p>
                Every engagement is web + AI-first: we treat your site, product UI, and operational systems as one connected surface — not separate projects.
              </p>
</div>
<div className="grid gap-4 text-[11px] text-slate-300 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
<div className="text-xs font-semibold tracking-tight text-slate-50">21 years</div>
<p className="mt-1 text-[11px] text-slate-300">Designing, shipping, and operating digital products and systems.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
<div className="text-xs font-semibold tracking-tight text-slate-50">Small, expert team</div>
<p className="mt-1 text-[11px] text-slate-300">Senior UX, engineering, and AI architecture, no layers of middle management.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
<div className="text-xs font-semibold tracking-tight text-slate-50">US + EU coverage</div>
<p className="mt-1 text-[11px] text-slate-300">US-based core with partners across key European hubs for global rollouts.</p>
</div>
</div>
<div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/[0.12] via-fuchsia-500/[0.08] to-transparent p-3 text-[11px] text-cyan-50 shadow-[0_18px_60px_rgba(8,47,73,0.8)]">
<div className="flex items-center justify-between gap-4">
<p>
                  We operate like an embedded special projects unit. Clear owners, direct access, and weekly working sessions with your leadership team.
                </p>
<div className="hidden text-right text-[10px] text-cyan-100 sm:block">
<div className="font-semibold tracking-tight">1–2 active clients</div>
<div>per core team at any time — by design.</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80">
<img alt="Team working in a dark studio" className="h-64 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.5),transparent_55%),radial-gradient(circle_at_90%_80%,rgba(236,72,153,0.5),transparent_55%)] mix-blend-screen"></div>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-4 pb-4 pt-10">
<div className="flex items-center justify-between">
<div className="text-[11px] text-slate-200">
<div className="font-medium text-slate-50">Senior-led, distributed team</div>
<div>Product, design, engineering, and AI across US &amp; EU time zones.</div>
</div>
<div className="hidden text-right text-[10px] text-slate-400 sm:block">
<div>HQ: United States</div>
<div>Clients: US • UK • EU</div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-[11px] text-slate-300">
<div className="mb-2 flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"></span>
<span className="text-xs font-semibold tracking-tight text-slate-50">How we engage</span>
</div>
<ul className="space-y-1.5">
<li>• Strategy + build retainers for growth teams that want ongoing leverage.</li>
<li>• Fixed-scope launches for new products, rebrands, or AI automation waves.</li>
<li>• Advisory for leadership teams designing internal AI roadmaps.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="services-detail">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">Service lines.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              Each engagement blends strategy, design, engineering, and AI systems — anchored to your operating model and growth targets.
            </p>
</div>
<div className="text-[11px] text-slate-400">
            Typical starting points: Website overhaul, AI automation wave, or combined Web + AI program.
          </div>
</div>
<div className="grid gap-6 lg:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Foundational Website</h3>
<p className="text-[11px] text-slate-300">Premium marketing + product narrative.</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
              For teams whose website no longer matches the quality of their product or clients.
            </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• New architecture, story, and high-impact visual direction.</li>
<li>• Conversion flows, pricing pages, and inbound-form UX.</li>
<li>• Technical SEO, analytics, and performance baked in.</li>
</ul>
<div className="mt-4 text-[10px] text-slate-400">
<span className="font-medium text-slate-200">Timeline:</span> 6–10 weeks
            </div>
</div>

<div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/15 text-fuchsia-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10h10"></path>
<path d="M7 14h4"></path>
<rect height="4" rx="1" width="4" x="3" y="8"></rect>
<rect height="4" rx="1" width="4" x="3" y="12"></rect>
<rect height="4" rx="1" width="4" x="17" y="8"></rect>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">AI Automation Wave</h3>
<p className="text-[11px] text-slate-300">Targeted automation for core workflows.</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
              For ops-heavy teams ready to turn repetitive work into reliable, observable agents.
            </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• Systems mapping, automation backlog, and prioritization.</li>
<li>• AI agents across CRM, support, reporting, and internal tooling.</li>
<li>• Monitoring, human-in-the-loop, and risk controls.</li>
</ul>
<div className="mt-4 text-[10px] text-slate-400">
<span className="font-medium text-slate-200">Timeline:</span> 6–12 weeks, depending on stack
            </div>
</div>

<div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 12.5A3.5 3.5 0 0 0 14 8.9L10 15.1A3.5 3.5 0 1 1 5.5 11.5"></path>
</svg>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50">Web + AI Partner</h3>
<p className="text-[11px] text-slate-300">Ongoing special projects unit.</p>
</div>
</div>
<p className="text-[11px] text-slate-300">
              For leadership teams that want a long-term, senior partner across surfaces and systems.
            </p>
<ul className="mt-3 space-y-1.5 text-[11px] text-slate-300">
<li>• Quarterly roadmap across web, UX, and AI automation.</li>
<li>• Dedicated core team with a defined hours and outcome model.</li>
<li>• Access to experimentation and R&amp;D beyond day-to-day delivery.</li>
</ul>
<div className="mt-4 text-[10px] text-slate-400">
<span className="font-medium text-slate-200">Engagement:</span> 6–12 month retainers
            </div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="case-study-template">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">Case study template.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              A structure we use to document impact clearly for leadership teams and boards.
            </p>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
<div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Overview</div>
<h3 className="mt-1 text-sm font-semibold tracking-tight text-slate-50">[Brand] — [Sector] — [Region]</h3>
</div>
<div className="text-right text-[11px] text-slate-400">
<div><span className="text-slate-200">Scope:</span> Web, Product, AI Systems</div>
<div><span className="text-slate-200">Duration:</span> 12 weeks</div>
</div>
</div>
<div className="grid gap-4 text-[11px] text-slate-300 lg:grid-cols-2">
<div>
<div className="text-xs font-medium text-slate-200">Context</div>
<p className="mt-1">Short on-ramp: where the brand was, what changed in the market, why now.</p>
</div>
<div>
<div className="text-xs font-medium text-slate-200">Mandate</div>
<p className="mt-1">The 2–3 metrics leadership cared about, and constraints around timing or risk.</p>
</div>
</div>
<div className="grid gap-4 text-[11px] text-slate-300 lg:grid-cols-3">
<div>
<div className="text-xs font-medium text-emerald-300">Conversion</div>
<p className="mt-1">Enter uplift in key funnel metrics with before/after baseline.</p>
</div>
<div>
<div className="text-xs font-medium text-cyan-300">Operations</div>
<p className="mt-1">Document time saved, cycle time reductions, or error reduction.</p>
</div>
<div>
<div className="text-xs font-medium text-fuchsia-300">Experience</div>
<p className="mt-1">Signal from customers, prospects, or internal teams.</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-[11px] text-slate-300">
<div className="text-xs font-semibold tracking-tight text-slate-50">Snapshot module</div>
<p className="mt-1">A short highlight that leadership can screenshot or drop into a board deck.</p>
<ul className="mt-2 space-y-1.5">
<li>• <span className="text-emerald-300">Primary metric:</span> e.g., +38% new ARR from inbound.</li>
<li>• <span className="text-cyan-300">Supporting metric:</span> e.g., -55% time-to-first-value.</li>
<li>• <span className="text-fuchsia-300">Ops metric:</span> e.g., 3 workflows fully automated.</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-[11px] text-slate-300">
<div className="text-xs font-semibold tracking-tight text-slate-50">System diagram</div>
<p className="mt-1">Visual of web, product surfaces, AI agents, and data flows — anchored to business outcomes.</p>
<p className="mt-2">
                We keep diagrams language-light and operator-friendly so they can be used across teams, not just in technical docs.
              </p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 pt-12 lg:pt-16" id="contact">
<div className="mb-8 flex flex-wrap items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight text-slate-50">Tell us what you’re building.</h2>
<p className="mt-2 max-w-xl text-sm text-slate-300">
              Share a bit about your brand, your systems, and what you need from web or AI. We’ll reply with a short perspective and a potential path forward.
            </p>
</div>
<div className="text-[11px] text-slate-400">
            Typical response time: <span className="text-slate-200">within 1 business day</span>.
          </div>
</div>
<div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
<form className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-black p-5 shadow-[0_18px_60px_rgba(15,23,42,1)]">
<div className="grid gap-4 md:grid-cols-2">
<div>
<label className="block text-[11px] font-medium text-slate-200">Name</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="First and last name" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-200">Work email</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="you@company.com" type="email"/>
</div>
</div>
</div>
<div className="grid gap-4 md:grid-cols-2">
<div>
<label className="block text-[11px] font-medium text-slate-200">Company</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Company name" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-200">Website</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="https://yourdomain.com" type="url"/>
</div>
</div>
</div>
<div className="grid gap-4 md:grid-cols-2">
<div>
<label className="block text-[11px] font-medium text-slate-200">Approximate budget (USD)</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<select className="w-full bg-transparent text-xs text-slate-100 focus:outline-none">
<option className="bg-slate-900 text-slate-100" value="">Select a range</option>
<option className="bg-slate-900 text-slate-100">$40k – $75k</option>
<option className="bg-slate-900 text-slate-100">$75k – $150k</option>
<option className="bg-slate-900 text-slate-100">$150k – $300k</option>
<option className="bg-slate-900 text-slate-100">$300k+</option>
</select>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-200">Timeline</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<select className="w-full bg-transparent text-xs text-slate-100 focus:outline-none">
<option className="bg-slate-900 text-slate-100" value="">When would you like to start?</option>
<option className="bg-slate-900 text-slate-100">ASAP (0–4 weeks)</option>
<option className="bg-slate-900 text-slate-100">This quarter</option>
<option className="bg-slate-900 text-slate-100">Next quarter</option>
<option className="bg-slate-900 text-slate-100">Exploratory</option>
</select>
</div>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-200">Primary need</label>
<div className="mt-2 grid gap-2 text-[11px] text-slate-100 sm:grid-cols-3">
<button className="flex items-center justify-center gap-2 rounded-xl border border-cyan-400/60 bg-cyan-500/15 px-2 py-2 text-[11px] font-medium text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.45)]" type="button">
<span className="h-1 w-3 rounded-full bg-cyan-400"></span>
<span>Website / Product surfaces</span>
</button>
<button className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/40 px-2 py-2 text-[11px] font-medium text-slate-100 hover:border-fuchsia-400/60 hover:bg-fuchsia-500/10" type="button">
<span className="h-1 w-3 rounded-full bg-fuchsia-400"></span>
<span>AI automation / Agents</span>
</button>
<button className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/40 px-2 py-2 text-[11px] font-medium text-slate-100 hover:border-orange-400/60 hover:bg-orange-500/10" type="button">
<span className="h-1 w-3 rounded-full bg-orange-400"></span>
<span>Combined Web + AI program</span>
</button>
</div>
</div>
<div>
<label className="block text-[11px] font-medium text-slate-200">What should we know?</label>
<div className="mt-1 rounded-xl border border-white/15 bg-black/60 px-3 py-2 text-sm text-slate-100 focus-within:border-cyan-400/70 focus-within:ring-1 focus-within:ring-cyan-400/70">
<textarea className="w-full resize-none bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Share context on your brand, systems, and what you’d like to move over the next 6–12 months." rows="4"></textarea>
</div>
</div>
<div className="flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-2 text-[10px] text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"></span>
<span>No spam. No junior SDRs. You’ll hear directly from the core team.</span>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-orange-400 px-5 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-[0_0_25px_rgba(56,189,248,0.6)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950" type="submit">
<span>Send message</span>
<svg className="ml-1.5 h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14" strokeLinecap="round"></path>
<path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</form>

<aside className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.02] p-5 text-[11px] text-slate-300">
<div>
<div className="mb-2 flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"></span>
<span className="text-xs font-semibold tracking-tight text-slate-50">Engagement fit</span>
</div>
<p>We’re a good fit if you:</p>
<ul className="mt-2 space-y-1.5">
<li>• Have clear ownership across marketing, product, or ops.</li>
<li>• Are ready to move quickly and ship in 6–16 weeks.</li>
<li>• Care about both narrative and systems-level performance.</li>
</ul>
</div>
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-black/60 p-3">
<div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Locations</div>
<div className="mt-1 text-xs font-medium text-slate-100">United States • Europe</div>
<p className="mt-1 text-[11px] text-slate-400">Working seamlessly across US and EU time zones.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-black/60 p-3">
<div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">Collaboration</div>
<div className="mt-1 text-xs font-medium text-slate-100">Remote, embedded</div>
<p className="mt-1 text-[11px] text-slate-400">Async-first, with standing weekly working sessions.</p>
</div>
</div>
<div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/[0.12] via-fuchsia-500/[0.1] to-transparent p-3 text-[11px] text-cyan-50">
<div className="mb-1 text-xs font-semibold tracking-tight text-slate-50">Want a quick gut-check first?</div>
<p>Send a short Loom or doc link. We’ll respond with a few concrete ideas — no strings attached.</p>
<div className="mt-2 text-[10px] text-cyan-100">Email: <span className="font-medium">hello@wannasite.studio</span></div>
</div>
</aside>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050507]/95">
<div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-[11px] text-slate-400 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="relative h-8 w-8">
<div className="absolute -inset-0.5 rounded-xl bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-orange-400 opacity-80 blur"></div>
<div className="relative flex h-full w-full items-center justify-center rounded-xl bg-black text-xs font-semibold tracking-tight text-slate-50">
              W
            </div>
</div>
<div>
<div className="text-[11px] font-semibold tracking-tight text-slate-100">WANNASITE</div>
<div className="text-[10px] text-slate-500">Web &amp; AI Automation Studio • USA + EU</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-3">
<a className="hover:text-slate-200" href="#services">Services</a>
<a className="hover:text-slate-200" href="#work">Work</a>
<a className="hover:text-slate-200" href="#about">About</a>
<a className="hover:text-slate-200" href="#contact">Contact</a>
</div>
<div className="h-3 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-2 text-[10px] text-slate-500">
<span>© <span id="year"></span> WANNASITE Studio.</span>
<span className="hidden sm:inline">All rights reserved.</span>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
