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



      // Lucide Icons
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Chart.js
        const ctx = document.getElementById('performanceChart');
        if (ctx) {
          const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
          gradient.addColorStop(0, 'rgba(239, 68, 68, 0.35)');
          gradient.addColorStop(1, 'rgba(239, 68, 68, 0.00)');

          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['W1','W2','W3','W4','W5','W6','W7','W8'],
              datasets: [
                {
                  label: 'CPA ($)',
                  data: [92, 89, 86, 81, 78, 74, 70, 66],
                  borderColor: 'rgb(239,68,68)',
                  backgroundColor: gradient,
                  fill: true,
                  tension: 0.35,
                  pointRadius: 2.5,
                  pointHoverRadius: 4,
                },
                {
                  label: 'Creative Variations',
                  data: [6, 8, 10, 12, 12, 14, 16, 18],
                  yAxisID: 'y1',
                  borderColor: 'rgb(147,197,253)',
                  borderDash: [4,4],
                  tension: 0.35,
                  pointRadius: 0
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  labels: { color: 'rgba(255,255,255,0.7)', boxWidth: 12, usePointStyle: true, pointStyle: 'line' }
                },
                tooltip: {
                  backgroundColor: 'rgba(17,17,17,0.9)',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 1,
                  titleColor: '#fff',
                  bodyColor: 'rgba(255,255,255,0.9)',
                  padding: 10
                }
              },
              scales: {
                x: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(255,255,255,0.6)' }
                },
                y: {
                  grid: { color: 'rgba(255,255,255,0.06)' },
                  ticks: { color: 'rgba(255,255,255,0.6)' },
                  beginAtZero: false
                },
                y1: {
                  position: 'right',
                  grid: { display: false },
                  ticks: { color: 'rgba(255,255,255,0.6)' },
                  beginAtZero: true
                }
              }
            }
          });
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 opacity-[0.025]" style={{backgroundImage: 'radial-gradient(600px 300px at 20% -10%, rgba(255,0,0,0.25), transparent 60%), radial-gradient(600px 300px at 80% -10%, rgba(255,0,128,0.2), transparent 60%)'}}></div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-sm bg-red-500/90 ring-1 ring-white/10 grid place-items-center text-xs tracking-tight font-semibold">R</div>
<span className="text-sm tracking-[0.08em] text-white/80 group-hover:text-white transition">REDO <span className="text-white/60">PERFORMANCE</span></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="hover:text-white transition" href="#work">Work</a>
<a className="hover:text-white transition" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition" href="#approach">Approach</a>
<a className="hover:text-white transition" href="#results">Results</a>
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium tracking-tight bg-white text-neutral-950 hover:bg-white/90 outline outline-1 outline-white/10 transition" href="#contact">
<i data-lucide="sparkles"></i>
              Free creative audit
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-white/5 outline outline-1 outline-white/10 transition">
<i data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 -z-10" style="background:
        radial-gradient(1200px 600px at 50% -10%, rgba(244,63,94,0.12), transparent 60%),
        radial-gradient(900px 500px at 70% -20%, rgba(217,70,239,0.10), transparent 60%)"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-14 md:pb-24">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-7">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
              Performance Creative Agency
            </span>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold">
              Creative that performs.
            </h1>
<p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
              We blend data, design, and velocity to ship ads, UGC, and landing pages that lower CPA and scale revenue.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-tight bg-red-500 text-white hover:bg-red-400 outline outline-1 outline-white/10 transition" href="#contact">
<i data-lucide="zap"></i>
                Get a free audit
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium tracking-tight bg-white/5 hover:bg-white/10 text-white outline outline-1 outline-white/10 transition" href="#work">
<i data-lucide="play-circle"></i>
                See work
              </a>
</div>
<div className="mt-10 grid grid-cols-3 max-w-lg gap-4">
<div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">4.2x</div>
<div className="text-xs text-white/60">ROAS from creative</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">-27%</div>
<div className="text-xs text-white/60">Avg. CPA</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">+38%</div>
<div className="text-xs text-white/60">CTR lift</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative h-full">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 shadow-2xl shadow-red-500/5">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-white/80 text-sm">
<i data-lucide="film"></i>
                    Showreel
                  </div>
<div className="flex items-center gap-1 text-xs text-white/50">
<span className="h-1.5 w-1.5 rounded-full bg-green-400/80"></span>
                    Live
                  </div>
</div>
<div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
<img alt="Creative montage" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 outline outline-1 outline-white/10 transition">
<i data-lucide="play"></i>
</button>
<button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 outline outline-1 outline-white/10 transition">
<i data-lucide="skip-forward"></i>
</button>
</div>
<div className="text-xs text-white/60">00:45</div>
</div>
</div>
<div className="hidden md:block absolute -bottom-6 -left-6 w-40 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-white/70">Creative velocity</div>
<div className="mt-2 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-full w-3/4 bg-red-500"></div>
</div>
<div className="mt-2 flex items-center gap-2 text-[11px] text-white/60">
<i data-lucide="gauge"></i>
                  18 variations/week
                </div>
</div>
</div>
</div>
</div>

<div className="mt-14 border-t border-white/10 pt-8">
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 text-white/40">
<div className="text-sm tracking-tight">AURUM</div>
<div className="text-sm tracking-tight">NOVA</div>
<div className="text-sm tracking-tight">SCALA</div>
<div className="text-sm tracking-tight">EMBER</div>
<div className="text-sm tracking-tight">KYTE</div>
<div className="text-sm tracking-tight">MORROW</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="capabilities">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Performance creative, end‑to‑end.</h2>
<p className="mt-3 text-white/70 max-w-2xl">From concept to iteration, we design, produce, and test fast—closing the loop with analytics.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium tracking-tight bg-white/5 hover:bg-white/10 text-white outline outline-1 outline-white/10 transition" href="#contact">
<i data-lucide="message-square"></i>
          Talk to a strategist
        </a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 outline outline-1 outline-white/10">
<i data-lucide="target"></i>
</div>
<div className="text-sm font-medium tracking-tight">Performance Ad Creative</div>
</div>
<p className="mt-3 text-sm text-white/70">Static + motion for paid social and display, optimized for CTR and thumb‑stop.</p>
<ul className="mt-4 space-y-2 text-xs text-white/60">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Meta, TikTok, YouTube, Display</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Concept → Variations → Iterations</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 outline outline-1 outline-white/10">
<i data-lucide="users"></i>
</div>
<div className="text-sm font-medium tracking-tight">UGC + Creator Engine</div>
</div>
<p className="mt-3 text-sm text-white/70">Real voices, scripted for conversion. Casting, briefs, and edit packs ready to test.</p>
<ul className="mt-4 space-y-2 text-xs text-white/60">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Creator sourcing + management</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Hook, body, CTA frameworks</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 outline outline-1 outline-white/10">
<i data-lucide="clapperboard"></i>
</div>
<div className="text-sm font-medium tracking-tight">Motion + Edit Systems</div>
</div>
<p className="mt-3 text-sm text-white/70">Snappy pacing, subtitles, and packaging tuned for platform algorithms and attention.</p>
<ul className="mt-4 space-y-2 text-xs text-white/60">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Modular edit libraries</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Versioning at scale</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 outline outline-1 outline-white/10">
<i data-lucide="layout-dashboard"></i>
</div>
<div className="text-sm font-medium tracking-tight">Landing Pages + CRO</div>
</div>
<p className="mt-3 text-sm text-white/70">High-velocity landing pages and onsite experiments that convert clicks into customers.</p>
<ul className="mt-4 space-y-2 text-xs text-white/60">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>LPs, PDPs, quiz funnels</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>A/B tests with learnings</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 outline outline-1 outline-white/10">
<i data-lucide="beaker"></i>
</div>
<div className="text-sm font-medium tracking-tight">Creative Strategy + Testing</div>
</div>
<p className="mt-3 text-sm text-white/70">Hypothesis-led testing with tight feedback loops—win rates climb, CPAs drop.</p>
<ul className="mt-4 space-y-2 text-xs text-white/60">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Testing roadmaps</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Learning archives</li>
</ul>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 outline outline-1 outline-white/10">
<i data-lucide="line-chart"></i>
</div>
<div className="text-sm font-medium tracking-tight">Analytics + Insights</div>
</div>
<p className="mt-3 text-sm text-white/70">Clear dashboards and attribution that tell you what to scale and what to cut.</p>
<ul className="mt-4 space-y-2 text-xs text-white/60">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Channel + cohort views</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500/80"></span>Daily reporting</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="work">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Selected work</h2>
<p className="mt-3 text-white/70 max-w-2xl">A snapshot of tests, winners, and the lift they created—across formats and funnels.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium tracking-tight bg-white/5 hover:bg-white/10 text-white outline outline-1 outline-white/10 transition" href="#contact">
<i data-lucide="arrow-right"></i>
          Start a pilot
        </a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

<a className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition cursor-pointer">
<div className="aspect-[16/10] overflow-hidden">
<img alt="DTC Wellness" className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">DTC Wellness</div>
<span className="text-[11px] text-white/60">Paid Social</span>
</div>
<p className="mt-2 text-sm text-white/70">Iterative hooks and UGC v. product demos increased add‑to‑cart 31%.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-white/60">
<span className="inline-flex items-center gap-1"><i data-lucide="trending-up"></i> +31% ATC</span>
<span className="inline-flex items-center gap-1"><i data-lucide="percent"></i> -22% CPA</span>
</div>
</div>
</a>

<a className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition cursor-pointer">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Fintech" className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1542332213-9c118c3a91c3?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Fintech</div>
<span className="text-[11px] text-white/60">Motion</span>
</div>
<p className="mt-2 text-sm text-white/70">Speed‑run explainer variants cut CPC 29% while raising CVR 14%.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-white/60">
<span className="inline-flex items-center gap-1"><i data-lucide="mouse-pointer-click"></i> -29% CPC</span>
<span className="inline-flex items-center gap-1"><i data-lucide="arrow-up-right"></i> +14% CVR</span>
</div>
</div>
</a>

<a className="group rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:bg-white/[0.05] transition cursor-pointer">
<div className="aspect-[16/10] overflow-hidden">
<img alt="E‑Com" className="h-full w-full object-cover group-hover:scale-[1.02] transition duration-500" src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">E‑Com</div>
<span className="text-[11px] text-white/60">Landing Page</span>
</div>
<p className="mt-2 text-sm text-white/70">New PDP sections and social proof lifted revenue per session by 18%.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-white/60">
<span className="inline-flex items-center gap-1"><i data-lucide="shopping-bag"></i> +18% RPS</span>
<span className="inline-flex items-center gap-1"><i data-lucide="split"></i> A/B tested</span>
</div>
</div>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="approach">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">A loop designed to learn.</h2>
<p className="mt-3 text-white/70">Strategy → Production → Testing → Insights. Each cycle ships winners faster and compounds your learnings.</p>
</div>
<div className="mt-10 grid md:grid-cols-4 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i data-lucide="compass"></i> Discover
          </div>
<p className="mt-2 text-sm text-white/70">Audience maps, offer stack, and creative angles built from your data.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i data-lucide="palette"></i> Design
          </div>
<p className="mt-2 text-sm text-white/70">Rapid concepts and modular assets: hooks, frames, CTAs, subtitles.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i data-lucide="rocket"></i> Deploy
          </div>
<p className="mt-2 text-sm text-white/70">Batch testing with clean cells and budgets to validate fast.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i data-lucide="bar-chart-3"></i> Optimize
          </div>
<p className="mt-2 text-sm text-white/70">Roll winners, cut losers, and iterate into the next cycle.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="results">
<div className="grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Results that compound.</h2>
<p className="mt-3 text-white/70">Creative test velocity correlates with lower CPA. Ship more, learn more, spend smarter.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">+46%</div>
<div className="text-xs text-white/60">Creative win rate</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">-33%</div>
<div className="text-xs text-white/60">Blended CPA</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">3.8x</div>
<div className="text-xs text-white/60">Scaling ROAS</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
<div className="text-2xl font-semibold tracking-tight">+27%</div>
<div className="text-xs text-white/60">Paid social CVR</div>
</div>
</div>
</div>
<div className="lg:col-span-7 rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium tracking-tight flex items-center gap-2">
<i data-lucide="line-chart"></i>
              Test velocity vs CPA
            </div>
<div className="text-xs text-white/60">Last 8 weeks</div>
</div>
<p className="mt-1 text-xs text-white/60">Higher variation throughput lowered CPA by 28% while improving ROAS.</p>

<div className="mt-3 aspect-[16/9] rounded-lg border border-white/10 bg-neutral-950/60">
<div className="h-full w-full">
<canvas id="performanceChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="about">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">What partners say</h2>
<p className="mt-3 text-white/70">We integrate with your team, bringing strategy and production without the drag.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-5">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="Founder" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1543966888-7c1dc482a810?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight">Elena Park</div>
<div className="text-xs text-white/60">CMO, AURUM</div>
</div>
</div>
<p className="mt-3 text-sm text-white/70">They ship weekly winners. Our CPA fell 30% in the first month and we finally have a learning engine.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="Marketing Lead" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight">Jonas Meyer</div>
<div className="text-xs text-white/60">Growth Lead, NOVA</div>
</div>
</div>
<p className="mt-3 text-sm text-white/70">Their creative system plugged straight into our account structure—clean tests, fast callouts, clear next steps.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" id="contact">
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6 sm:p-8">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<i data-lucide="sparkles"></i>
              Free creative audit
            </span>
<h3 className="mt-4 text-2xl sm:text-3xl tracking-tight font-semibold">Get a fast, actionable tear‑down.</h3>
<p className="mt-2 text-white/70 text-sm">We’ll review your ads, landing pages, and testing cadence—then share a 30‑day plan to lower CPA.</p>
<ul className="mt-5 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2"><i className="text-green-400" data-lucide="check"></i> 10+ tailored concepts</li>
<li className="flex items-center gap-2"><i className="text-green-400" data-lucide="check"></i> Test roadmap + success metrics</li>
<li className="flex items-center gap-2"><i className="text-green-400" data-lucide="check"></i> Delivered in 72 hours</li>
</ul>
</div>
<form className="grid grid-cols-1 gap-4">
<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="text-xs text-white/60">Name</span>
<input className="mt-1 w-full rounded-md bg-white/5 text-sm placeholder-white/40 px-3 py-2 outline outline-1 outline-white/10 focus-visible:outline-2 focus-visible:outline-red-500 transition" placeholder="Alex Rivera" type="text"/>
</label>
<label className="block">
<span className="text-xs text-white/60">Email</span>
<input className="mt-1 w-full rounded-md bg-white/5 text-sm placeholder-white/40 px-3 py-2 outline outline-1 outline-white/10 focus-visible:outline-2 focus-visible:outline-red-500 transition" placeholder="alex@brand.com" type="email"/>
</label>
</div>
<label className="block">
<span className="text-xs text-white/60">Company</span>
<input className="mt-1 w-full rounded-md bg-white/5 text-sm placeholder-white/40 px-3 py-2 outline outline-1 outline-white/10 focus-visible:outline-2 focus-visible:outline-red-500 transition" placeholder="Brand / Store" type="text"/>
</label>
<label className="block">
<span className="text-xs text-white/60">What do you want to improve?</span>
<textarea className="mt-1 w-full rounded-md bg-white/5 text-sm placeholder-white/40 px-3 py-2 outline outline-1 outline-white/10 focus-visible:outline-2 focus-visible:outline-red-500 transition" placeholder="CPA, CTR, CVR, ROAS, AOV, retention…" rows="4"></textarea>
</label>
<div className="flex items-center justify-between">
<div className="text-[11px] text-white/50">No spam. We’ll reply within 1 business day.</div>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium tracking-tight bg-red-500 text-white hover:bg-red-400 outline outline-1 outline-white/10 transition" type="submit">
<i data-lucide="send"></i>
                Request audit
              </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-3 gap-6">
<div>
<a className="flex items-center gap-2" href="#">
<div className="h-7 w-7 rounded-sm bg-red-500/90 ring-1 ring-white/10 grid place-items-center text-xs tracking-tight font-semibold">R</div>
<span className="text-sm tracking-[0.08em] text-white/80">REDO <span className="text-white/60">PERFORMANCE</span></span>
</a>
<p className="mt-3 text-sm text-white/60 max-w-sm">Data‑driven creative for brands that want to scale with discipline.</p>
</div>
<div className="text-sm text-white/70">
<div className="font-medium tracking-tight">Company</div>
<ul className="mt-3 space-y-2 text-white/60">
<li><a className="hover:text-white transition" href="#work">Work</a></li>
<li><a className="hover:text-white transition" href="#capabilities">Capabilities</a></li>
<li><a className="hover:text-white transition" href="#approach">Approach</a></li>
<li><a className="hover:text-white transition" href="#results">Results</a></li>
</ul>
</div>
<div className="text-sm text-white/70">
<div className="font-medium tracking-tight">Contact</div>
<ul className="mt-3 space-y-2 text-white/60">
<li><a className="hover:text-white transition" href="mailto:hello@redoperformance.co">hello@redoperformance.co</a></li>
<li className="flex items-center gap-2"><i data-lucide="clock-3"></i> Mon–Fri, 9–6</li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-white/50">
<div>© <span id="year">2025</span> REDO Performance</div>
<div className="flex items-center gap-3">
<a className="hover:text-white transition" href="#">Privacy</a>
<span className="text-white/20">•</span>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
