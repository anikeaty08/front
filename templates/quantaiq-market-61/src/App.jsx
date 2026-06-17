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
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
        // Footer year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });

      // Chart
      window.addEventListener('load', () => {
        const el = document.getElementById('marketChart');
        if (!el) return;
        const ctx = el.getContext('2d');

        const gradient = ctx.createLinearGradient(0, 0, 0, el.height);
        gradient.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0.02)');

        const data = Array.from({ length: 60 }, (_, i) => {
          const base = 4200;
          const noise = Math.sin(i / 5) * 6 + Math.cos(i / 9) * 4;
          const drift = i * 0.6;
          return base + noise + drift + (Math.random() - 0.5) * 4;
        });

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.map((_, i) => i + 1),
            datasets: [{
              data,
              borderColor: 'rgb(56, 189, 248)',
              backgroundColor: gradient,
              pointRadius: 0,
              tension: 0.35,
              fill: 'start'
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                titleColor: '#e2e8f0',
                bodyColor: '#cbd5e1',
                displayColors: false,
                callbacks: {
                  label: (ctx) => ` ${ctx.parsed.y.toFixed(2)}`
                }
              }
            },
            scales: {
              x: {
                grid: { display: false, drawBorder: false },
                ticks: { display: false }
              },
              y: {
                grid: { color: 'rgba(148,163,184,0.08)', drawBorder: false },
                ticks: {
                  color: 'rgba(148,163,184,0.8)',
                  font: { size: 10 }
                }
              }
            }
          }
        });
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">

<svg className="absolute inset-0 h-full w-full opacity-20">
<defs>
<pattern height="48" id="gridPattern" patternunits="userSpaceOnUse" width="48" x="0" y="0">
<path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(148,163,184,0.10)" strokeWidth="1"></path>
<circle cx="48" cy="48" fill="rgba(148,163,184,0.18)" r="1"></circle>
<animate attributename="x" dur="60s" from="0" repeatcount="indefinite" to="48"></animate>
<animate attributename="y" dur="45s" from="0" repeatcount="indefinite" to="48"></animate>
</pattern>
</defs>
<rect fill="url(#gridPattern)" height="100%" width="100%"></rect>
</svg>
<div className="absolute left-1/2 top-[-200px] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),rgba(56,189,248,0)_60%)] blur-2xl"></div>
<div className="absolute right-0 top-[20%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.14),rgba(139,92,246,0)_60%)] blur-2xl"></div>

<div className="absolute left-[6%] top-[22%] h-[260px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),rgba(56,189,248,0)_65%)] blur-2xl motion-safe:animate-pulse motion-reduce:animate-none" style={{animationDuration: '5.5s', animationDelay: '0.8s'}}></div>
<div className="absolute right-[8%] bottom-[12%] h-[240px] w-[340px] rounded-full bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.10),rgba(147,197,253,0)_65%)] blur-2xl motion-safe:animate-pulse motion-reduce:animate-none" style={{animationDuration: '6.5s', animationDelay: '1.2s'}}></div>

<div className="absolute -left-40 -bottom-40 h-[720px] w-[720px] rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(56,189,248,0.06),rgba(139,92,246,0.08),rgba(56,189,248,0.06))] blur-3xl opacity-70 motion-safe:animate-spin motion-reduce:animate-none" style={{animationDuration: '36s', animationTimingFunction: 'linear'}}></div>

<div className="absolute left-[18%] top-[68%] h-2 w-2 rounded-full bg-sky-300/40 motion-safe:animate-ping motion-reduce:animate-none" style={{animationDuration: '7s'}}></div>
<div className="absolute right-[24%] top-[30%] h-2 w-2 rounded-full bg-violet-300/40 motion-safe:animate-ping motion-reduce:animate-none" style={{animationDuration: '9s', animationDelay: '1s'}}></div>

<div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 motion-safe:animate-spin motion-reduce:animate-none" style={{background: 'conic-gradient(from 0deg, transparent 0deg, rgba(56,189,248,0.06) 24deg, transparent 60deg, rgba(139,92,246,0.06) 90deg, transparent 120deg, rgba(14,165,233,0.05) 150deg, transparent 210deg)', animationDuration: '50s', animationTimingFunction: 'linear'}}></div>
<div className="absolute left-1/2 top-1/2 h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 motion-safe:animate-spin motion-reduce:animate-none" style={{background: 'conic-gradient(from 30deg, transparent 0deg, rgba(99,102,241,0.06) 18deg, transparent 48deg, rgba(56,189,248,0.05) 80deg, transparent 130deg)', animationDuration: '70s', animationTimingFunction: 'linear', animationDirection: 'reverse'}}></div>

<div className="absolute left-1/2 top-[46%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-300/10 motion-safe:animate-spin motion-reduce:animate-none" style={{animationDuration: '90s', animationTimingFunction: 'linear'}}>
<div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.5)]"></div>
<div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(139,92,246,0.45)]"></div>
<div className="absolute left-1/2 bottom-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.45)]"></div>
<div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.45)]"></div>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-white/10">
<span className="text-slate-100 text-sm font-semibold tracking-tight">QI</span>
</div>
<span className="text-slate-100 text-lg font-semibold tracking-tight">QuantaIQ</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-slate-300 hover:text-slate-100 transition-colors" href="#features">Product</a>
<a className="text-slate-300 hover:text-slate-100 transition-colors" href="#solutions">Solutions</a>
<a className="text-slate-300 hover:text-slate-100 transition-colors" href="#pricing">Pricing</a>
<a className="text-slate-300 hover:text-slate-100 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm text-slate-300 hover:text-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md bg-sky-500/90 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60" href="#cta">
<i className="size-4" data-lucide="sparkles"></i>
              Get started
            </a>
</div>
</div>
</div>
</header>

<section className="">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-24 sm:pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300">
<span className="inline-flex items-center gap-1">
<i className="size-3.5" data-lucide="line-chart"></i>
                Real-time analytics
              </span>
<span className="text-slate-600">•</span>
<span className="inline-flex items-center gap-1">
<i className="size-3.5" data-lucide="brain"></i>
                AI summaries
              </span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Track market insights with AI precision
            </h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300">
              Aggregate signals from news, social, and price action. Our models synthesize the noise into clear, actionable narratives—so you can decide faster with confidence.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-medium text-white hover:bg-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60" href="#cta">
<i className="size-4" data-lucide="sparkles"></i>
                Start free trial
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 hover:border-slate-400/30 hover:bg-slate-900/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40" href="#demo">
<i className="size-4" data-lucide="play"></i>
                Request a demo
              </a>
</div>
<div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1.5">
<i className="size-4 text-emerald-400" data-lucide="check"></i>
                14‑day free trial
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="size-4 text-emerald-400" data-lucide="check"></i>
                No credit card
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="size-4 text-emerald-400" data-lucide="check"></i>
                Cancel anytime
              </span>
</div>
<div className="mt-10">
<p className="text-xs uppercase tracking-wider text-slate-500">Trusted by teams at</p>
<div className="mt-3 flex items-center gap-4">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-white/10"><span className="text-[11px] font-semibold tracking-tight text-slate-200">AL</span></div>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-white/10"><span className="text-[11px] font-semibold tracking-tight text-slate-200">NT</span></div>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-white/10"><span className="text-[11px] font-semibold tracking-tight text-slate-200">VC</span></div>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 ring-1 ring-white/10"><span className="text-[11px] font-semibold tracking-tight text-slate-200">KP</span></div>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-black/40">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
<span className="text-sm font-medium text-slate-200">Market Pulse</span>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/10 bg-slate-950/60 p-1">
<button aria-pressed="true" className="px-2.5 py-1 text-xs rounded [--active:theme(colors.slate.200)] text-slate-400 hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40 ring-0 bg-transparent">1D</button>
<button className="px-2.5 py-1 text-xs rounded text-slate-400 hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40">1W</button>
<button className="px-2.5 py-1 text-xs rounded text-slate-400 hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40">1M</button>
<button className="px-2.5 py-1 text-xs rounded text-slate-400 hover:text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40">1Y</button>
</div>
</div>
<div className="mt-4">
<div className="rounded-lg border border-white/10 bg-slate-950/50 p-4">
<div className="flex items-baseline justify-between">
<div>
<div className="text-xs uppercase tracking-wider text-slate-500">Composite Index</div>
<div className="mt-1 text-2xl font-semibold tracking-tight text-white">4,215.83</div>
<div className="mt-0.5 text-xs text-emerald-400">+1.82% today</div>
</div>
<div className="inline-flex items-center gap-1 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-2 py-1">
<i className="size-3.5 text-emerald-400" data-lucide="arrow-up-right"></i>
<span className="text-[11px] font-medium text-emerald-300">Bullish</span>
</div>
</div>
<div className="mt-4">
<div className="relative h-56 w-full">
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
<canvas className="h-full w-full" id="marketChart"></canvas>
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

<div className="mt-4 rounded-md border border-amber-300/20 bg-amber-300/10 p-3">
<div className="flex items-start gap-2">
<i className="mt-0.5 size-4 text-amber-300" data-lucide="lightbulb"></i>
<p className="text-sm text-amber-100/90">
                            AI Insight: Momentum strengthened after earnings beats in semiconductors; watch resistance near 4,240.
                          </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></section>

<section className="py-16 sm:py-24" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Everything you need to read the market</h2>
<p className="mt-3 text-slate-300">From ingest to insight—automated, transparent, and fast.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5 hover:border-slate-400/30 transition-colors">
<div className="flex items-center gap-2">
<i className="size-5 text-sky-300" data-lucide="layers"></i>
<h3 className="font-medium text-slate-100 tracking-tight">Unified Signals</h3>
</div>
<p className="mt-2 text-sm text-slate-300">News, social, economic prints, and price feeds in one place—deduped and ranked by relevance.</p>
</div>
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5 hover:border-slate-400/30 transition-colors">
<div className="flex items-center gap-2">
<i className="size-5 text-violet-300" data-lucide="brain"></i>
<h3 className="font-medium text-slate-100 tracking-tight">AI Summaries</h3>
</div>
<p className="mt-2 text-sm text-slate-300">Concise narratives with sources and confidence scores you can audit.</p>
</div>
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5 hover:border-slate-400/30 transition-colors">
<div className="flex items-center gap-2">
<i className="size-5 text-emerald-300" data-lucide="bell"></i>
<h3 className="font-medium text-slate-100 tracking-tight">Smart Alerts</h3>
</div>
<p className="mt-2 text-sm text-slate-300">Thresholds, breakouts, sentiment shifts—delivered instantly where you work.</p>
</div>
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5 hover:border-slate-400/30 transition-colors">
<div className="flex items-center gap-2">
<i className="size-5 text-cyan-300" data-lucide="shield"></i>
<h3 className="font-medium text-slate-100 tracking-tight">Enterprise‑ready</h3>
</div>
<p className="mt-2 text-sm text-slate-300">SSO, audit logs, and fine‑grained permissions keep data safe and compliant.</p>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-10" id="solutions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-5">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">From signal to strategy</h3>
<p className="mt-3 text-slate-300">Surface what matters, understand why it matters, and coordinate action across your team.</p>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i><span>Scenario analysis with explainable drivers</span></li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i><span>Portfolio‑level heatmaps and sector flows</span></li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i><span>Shared notes, annotations, and approvals</span></li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-100 hover:border-slate-400/30 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40" href="#pricing">
                Explore pricing
                <i className="size-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-4">
<img alt="Dashboard preview" className="h-48 sm:h-60 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<img alt="Insights preview" className="h-48 sm:h-60 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<img alt="AI analysis" className="h-48 sm:h-60 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
<img alt="Market chart" className="h-48 sm:h-60 w-full rounded-lg object-cover border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl text-center mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple, transparent pricing</h2>
<p className="mt-3 text-slate-300">Choose the plan that fits your workflow today. Scale when you’re ready.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
<h3 className="text-lg font-medium tracking-tight text-white">Starter</h3>
<p className="mt-1 text-sm text-slate-300">For individuals and small teams exploring AI insights.</p>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight">$19<span className="text-sm text-slate-400 font-normal">/mo</span></div>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Real‑time feed</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Daily AI summaries</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Basic alerts</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-100 hover:border-slate-400/30 hover:bg-slate-900/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40" href="#cta">Get started</a>
</div>

<div className="rounded-xl border border-sky-400/40 bg-sky-400/5 p-6 ring-1 ring-inset ring-sky-400/20">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-2 py-1 text-[11px] text-sky-200">Most popular</div>
<h3 className="mt-2 text-lg font-medium tracking-tight text-white">Pro</h3>
<p className="mt-1 text-sm text-slate-300">For growing teams that need deeper context and collaboration.</p>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight">$49<span className="text-sm text-slate-400 font-normal">/mo</span></div>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Intraday AI summaries</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Advanced alerts &amp; routes</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Shared workspaces</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>API access</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60" href="#cta">Start Pro</a>
</div>

<div className="rounded-xl border border-white/10 bg-slate-900/50 p-6">
<h3 className="text-lg font-medium tracking-tight text-white">Enterprise</h3>
<p className="mt-1 text-sm text-slate-300">Security, scale, and support for mission‑critical workflows.</p>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight">Custom</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>SSO/SAML &amp; audit logs</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Dedicated support &amp; SLA</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Custom models &amp; deployment</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-100 hover:border-slate-400/30 hover:bg-slate-900/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/40" href="#demo">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100 tracking-tight">Ava Chen</div>
<div className="text-xs text-slate-400">Research Lead</div>
</div>
<div className="ml-auto flex items-center gap-0.5 text-amber-300">
<i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-slate-300">The summaries are spot on. We cut our morning prep time in half without losing depth.</p>
</div>
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100 tracking-tight">Liam Ortiz</div>
<div className="text-xs text-slate-400">PM, Macro</div>
</div>
<div className="ml-auto flex items-center gap-0.5 text-amber-300">
<i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-slate-300">Alerts are fast and relevant. It’s like an analyst pinging me before the tape moves.</p>
</div>
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center gap-3">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-100 tracking-tight">Noah Patel</div>
<div className="text-xs text-slate-400">Quant Strategist</div>
</div>
<div className="ml-auto flex items-center gap-0.5 text-amber-300">
<i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i><i className="size-4" data-lucide="star"></i>
</div>
</div>
<p className="mt-3 text-sm text-slate-300">The API made it simple to integrate signals into our models and dashboards.</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6">
<div className="text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white">Questions, answered</h2>
<p className="mt-3 text-slate-300">Can’t find what you’re looking for? Reach out and we’ll help.</p>
</div>
<div className="mt-8 space-y-3">
<details className="group rounded-lg border border-white/10 bg-slate-900/50 p-4 open:bg-slate-900/60">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">How accurate are the AI summaries?</span>
<i className="size-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Summaries combine multiple models with human‑curated evals. Each insight includes a confidence score and sources for verification.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-slate-900/50 p-4 open:bg-slate-900/60">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">Which markets and assets are covered?</span>
<i className="size-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Equities, indices, ETFs, FX, and crypto at launch—with futures and rates on the roadmap.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-slate-900/50 p-4 open:bg-slate-900/60">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium text-slate-100">Do you support enterprise deployments?</span>
<i className="size-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-300">Yes. Options include SSO/SAML, on‑prem or private cloud, and custom SLAs.</p>
</details>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-t border-white/10" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Ready to turn signals into strategy?</h3>
<p className="mt-2 text-slate-300">Start free and see how quickly your workflow improves.</p>
<form className="mt-6 flex flex-col sm:flex-row gap-3" onsubmit="event.preventDefault()">
<div className="relative flex-1">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" data-lucide="mail"></i>
<input className="w-full rounded-md border border-white/10 bg-slate-900/70 pl-10 pr-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50" placeholder="you@company.com" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-5 py-3 text-sm font-medium text-white hover:bg-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60" type="submit">
                Join the waitlist
                <i className="size-4" data-lucide="arrow-right"></i>
</button>
</form>
<p className="mt-3 text-xs text-slate-400">By signing up, you agree to our Terms and Privacy Policy.</p>
</div>
<div className="lg:col-span-6">
<div className="rounded-lg border border-white/10 bg-slate-900/50 p-5">
<div className="flex items-center gap-2">
<i className="size-4 text-sky-300" data-lucide="clock"></i>
<span className="text-sm text-slate-200">What to expect</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>No spam—just product updates</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Early access perks</li>
<li className="flex items-start gap-2"><i className="mt-0.5 size-4 text-emerald-400" data-lucide="check"></i>Priority support during trial</li>
</ul>
</div>
</div>
</div>
<footer className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
<div className="flex items-center gap-3">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-900 ring-1 ring-white/10">
<span className="text-[11px] font-semibold tracking-tight">QI</span>
</div>
<span className="text-sm text-slate-400">© <span id="year"></span> QuantaIQ. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Privacy</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Terms</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Status</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Contact</a>
</div>
</footer>
</div>
</section>





    </>
  );
}
