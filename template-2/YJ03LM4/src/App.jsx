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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Mobile nav toggle
      function toggleMobile() {
        const m = document.getElementById('mobileNav');
        m.classList.toggle('hidden');
      }

      // Modal controls
      function openModal(id) {
        document.getElementById(id).classList.remove('hidden');
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }
      function closeModal(id) {
        document.getElementById(id).classList.add('hidden');
      }

      // Custom checkbox toggle
      function toggleCheck(btn) {
        const isChecked = btn.getAttribute('data-checked') === 'true';
        if (isChecked) {
          btn.removeAttribute('data-checked');
          btn.innerHTML = '';
          btn.classList.remove('ring-neutral-400');
        } else {
          btn.setAttribute('data-checked', 'true');
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-neutral-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
          btn.classList.add('ring-neutral-400');
        }
        // enable/disable matching submit
        const id = btn.id || '';
        if (id.includes('prospectus')) {
          document.getElementById('prospectusSubmit').disabled = !btn.getAttribute('data-checked');
        }
        if (id.includes('call')) {
          document.getElementById('callSubmit').disabled = !btn.getAttribute('data-checked');
        }
        if (id.includes('contact')) {
          document.getElementById('contactSubmit').disabled = !btn.getAttribute('data-checked');
        }
      }

      // Initial disable submit buttons
      window.addEventListener('load', () => {
        const ids = ['prospectusSubmit','callSubmit','contactSubmit'];
        ids.forEach(i => {
          const el = document.getElementById(i);
          if (el) el.disabled = true;
        });
        // Build charts
        buildCharts();
      });

      function validateAccredited(type) {
        const checkId = type + 'Check';
        const btn = document.getElementById(checkId);
        return btn && btn.getAttribute('data-checked') === 'true';
      }

      // Charts
      function buildCharts() {
        // Growth of $1 chart (2013-2025)
        const ctx = document.getElementById('growthChart').getContext('2d');
        const years = ['2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];
        // Generate smooth curves approximating target endpoints
        const spx = [1.00, 1.13, 1.15, 1.25, 1.53, 1.42, 1.85, 2.20, 2.90, 2.00, 3.60, 3.95, 4.15];
        const snb = [1.00, 1.35, 1.60, 1.95, 2.70, 2.30, 3.60, 5.20, 8.00, 7.10, 12.50, 16.50, 19.52];
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: years,
            datasets: [
              {
                label: 'Snobol',
                data: snb,
                borderColor: '#0a0a0a',
                backgroundColor: 'rgba(10,10,10,0.04)',
                borderWidth: 2,
                tension: 0.28,
                pointRadius: 0,
                fill: false
              },
              {
                label: 'S&P 500',
                data: spx,
                borderColor: '#9ca3af',
                backgroundColor: 'rgba(156,163,175,0.12)',
                borderWidth: 2,
                borderDash: [4,4],
                tension: 0.28,
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
              legend: { display: true, labels: { usePointStyle: true, boxWidth: 6, boxHeight: 6, color: '#111827', font: { size: 11 } } },
              tooltip: { backgroundColor: '#111827', titleColor: '#ffffff', bodyColor: '#e5e7eb', padding: 10, borderColor: 'rgba(255,255,255,0.08)', borderWidth: 1 }
            },
            scales: {
              x: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#6b7280', maxRotation: 0 } },
              y: { grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#6b7280' } }
            }
          }
        });

        // VIX-like spikes chart
        const vixCtx = document.getElementById('vixChart').getContext('2d');
        const vixLabels = Array.from({ length: 48 }, (_, i) => i + 1);
        const vixData = vixLabels.map(i => {
          // Calm base + periodic spikes
          const base = 12 + Math.sin(i / 3) * 2;
          const spike = (i === 8 || i === 28 || i === 40) ? 25 + Math.random() * 10 : 0;
          return base + spike;
        });
        new Chart(vixCtx, {
          type: 'line',
          data: {
            labels: vixLabels,
            datasets: [{
              label: 'Volatility',
              data: vixData,
              borderColor: '#0a0a0a',
              backgroundColor: 'rgba(10,10,10,0.05)',
              borderWidth: 1.75,
              tension: 0.35,
              pointRadius: 0,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
              x: { display: false },
              y: { display: false }
            }
          }
        });
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
      

<div className="w-full bg-neutral-50 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 py-2.5 text-xs text-neutral-600 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
        For accredited/qualified investors only. Past or backtested performance is not indicative of future results.
      </div>
</div>

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="inline-flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold group-hover:ring-2 ring-neutral-900/10 transition-all">SN</div>
<span className="text-sm font-medium tracking-tight text-neutral-900">Snobol</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Home</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#strategy">Strategy</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#performance">Performance</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#about">About</a>
<button className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" onClick={(e) => { openModal('contactModal') }} type="button">Contact</button>
</nav>

<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-neutral-900/10" onClick={(e) => { openModal('prospectusModal') }} type="button">
<i className="w-4 h-4" data-lucide="file-text"></i>
              Request Prospectus
            </button>
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors ring-1 ring-neutral-200" onClick={(e) => { openModal('callModal') }} type="button">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Schedule Call
            </button>
</div>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-neutral-200 hover:bg-neutral-50" onClick={(e) => { toggleMobile() }}>
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-neutral-200" id="mobileNav">
<div className="px-6 py-4 flex flex-col gap-3">
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#">Home</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#strategy">Strategy</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#performance">Performance</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#about">About</a>
<button className="text-left text-sm text-neutral-700 hover:text-neutral-900 transition-colors" onClick={(e) => { openModal('contactModal') }} type="button">Contact</button>
<div className="flex gap-2 pt-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-neutral-900/10" onClick={(e) => { openModal('prospectusModal') }} type="button">
<i className="w-4 h-4" data-lucide="file-text"></i>
              Prospectus
            </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors ring-1 ring-neutral-200" onClick={(e) => { openModal('callModal') }} type="button">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Call
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="space-y-5">
<div className="inline-flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="activity"></i>
              AI + human oversight. Crisis-focused. Institutional discipline.
            </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900">Snobol Turns Market Panic into Performance.</h1>
<p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
              An AI-powered autonomous crisis fund for institutional allocators. Backtested 32.08% CAGR since 2013, outperforming the S&P 500 through real-time data and disciplined execution.
            </p>
<p className="text-sm text-neutral-700">
              Snobol exploits volatility where traditional funds retreat, analyzing billions of datapoints to buy high-quality assets at irrational discounts. This active strategy seeks compounding alpha, with human oversight for risk control.
            </p>
<div className="flex flex-col sm:flex-row gap-3 pt-1">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-neutral-900/10" onClick={(e) => { openModal('prospectusModal') }} type="button">
<i className="w-4 h-4" data-lucide="file-text"></i>
                Request Prospectus
              </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors ring-1 ring-neutral-200" onClick={(e) => { openModal('callModal') }} type="button">
<i className="w-4 h-4" data-lucide="phone"></i>
                Schedule Call
              </button>
</div>
<div className="text-xs text-neutral-500 flex items-start gap-2">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
<span>Backtested results are hypothetical; investing involves significant risk, including the possible loss of principal.</span>
</div>
<div className="pt-2 text-xs text-neutral-600">
              Sparring note: Backtests ignore live slippage; crises can strain liquidity. If pattern recognition holds, this improves decision quality versus emotions.
            </div>
</div>

<div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
<div className="p-4 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-800">
<i className="w-4 h-4" data-lucide="line-chart"></i>
                Backtested Growth of $1 (2013–2025)
              </div>
<div className="text-xs text-neutral-600">Indexed | Snobol: $19.52 | S&P 500: $4.15</div>
</div>
<div className="p-4">
<div className="relative">
<div className="relative h-64 sm:h-72">
<div className="absolute inset-0">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full relative">
<div className="absolute inset-0">
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<div className="h-full" style={{height: `100%`}}>
<canvas id="growthChart" style={{width: `100%`, height: `100%`}}></canvas>
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

<div className="pointer-events-none absolute inset-0">
<div className="absolute top-2 left-[55%] -translate-x-1/2 bg-neutral-900 text-white text-[11px] px-1.5 py-0.5 rounded">COVID-19</div>
<div className="absolute top-7 left-[70%] -translate-x-1/2 bg-neutral-800 text-white text-[11px] px-1.5 py-0.5 rounded">Rate Hikes</div>
<div className="absolute top-10 left-[35%] -translate-x-1/2 bg-neutral-800 text-white text-[11px] px-1.5 py-0.5 rounded">Oil Shock</div>
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

<div className="mt-12 border-t border-neutral-200"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-14" id="opportunity">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Exploiting Structural Market Flaws</h2>
<p className="text-sm text-neutral-600 mt-2">Behavioral inefficiencies and demographic shifts amplify episodic mispricings. We build for those moments.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-neutral-300 transition-colors">
<i className="w-5 h-5 text-neutral-800" data-lucide="brain"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Human Bias Drives Irrationality</div>
<div className="text-sm text-neutral-700">43% of U.S. adults say money negatively impacts mental health, fueling panic sell-offs.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-neutral-300 transition-colors">
<i className="w-5 h-5 text-neutral-800" data-lucide="trending-down"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Traditional Underperformance</div>
<div className="text-sm text-neutral-700">~90% of active funds underperform the S&P 500 over 10 years.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-neutral-300 transition-colors">
<i className="w-5 h-5 text-neutral-800" data-lucide="users"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Demographic Pressures</div>
<div className="text-sm text-neutral-700">Worker-to-retiree ratio projected to fall to 2.2 by 2050, amplifying volatility.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4 hover:border-neutral-300 transition-colors">
<i className="w-5 h-5 text-neutral-800" data-lucide="cpu"></i>
<div>
<div className="text-sm font-medium text-neutral-900">AI’s Emerging Edge</div>
<div className="text-sm text-neutral-700">AI-driven strategies increasingly outpace human-only approaches.</div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-neutral-600">
            Opinion: These dynamics create durable alpha windows—but black swans remain. The focus on disciplined crisis execution is the edge, provided the team is world-class early.
          </div>
</div>

<div className="rounded-lg border border-neutral-200 bg-white shadow-sm">
<div className="p-4 border-b border-neutral-200 flex items-center gap-2 text-sm text-neutral-800">
<i className="w-4 h-4" data-lucide="waveform"></i>
            Volatility Regimes (Illustrative)
          </div>
<div className="p-4">
<div className="relative">
<div className="h-40">
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<canvas id="vixChart" style={{width: `100%`, height: `100%`}}></canvas>
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
<p className="mt-3 text-xs text-neutral-600">Spikes signal panic-driven dislocations—our hunting ground.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-14 border-t border-neutral-200" id="strategy">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">The Snobol Crisis Engine</h2>
<p className="text-sm text-neutral-700 mt-2">Why crises yield alpha: fear detaches prices from fundamentals. Snobol acts without bias—then humans verify risk.</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">

<div className="relative rounded-lg border border-neutral-200 p-5 bg-white hover:border-neutral-300 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="radar"></i>
            Signal Detection
          </div>
<p className="text-sm text-neutral-700 mt-2">AI scans global markets in real time for triggers such as liquidity squeezes, cross-asset breaks, and policy shifts.</p>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block">
<i className="w-6 h-6 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</div>

<div className="relative rounded-lg border border-neutral-200 p-5 bg-white hover:border-neutral-300 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="sparkles"></i>
            Opportunity Identification
          </div>
<p className="text-sm text-neutral-700 mt-2">Millions of simulations across 30+ years of data project risk-adjusted entries and exits with probabilistic sizing.</p>
<div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block">
<i className="w-6 h-6 text-neutral-400" data-lucide="chevron-right"></i>
</div>
</div>

<div className="rounded-lg border border-neutral-200 p-5 bg-white hover:border-neutral-300 transition-colors">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="bot"></i>
            Execution
          </div>
<p className="text-sm text-neutral-700 mt-2">Deploy to liquid blue-chips and ETFs. Positions sized probabilistically with a human final check before and after orders.</p>
</div>
</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="p-4 border-b border-neutral-200 text-sm font-medium text-neutral-900">Snobol Edge</div>
<div className="p-4 text-sm text-neutral-700">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="target"></i>
                Purpose-built for panic; acts when humans hesitate.
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="clock"></i>
                Real-time ingestion of billions of signals; rapid recalibration.
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="lock"></i>
                Human risk layer and guardrails mitigate model drift.
              </li>
</ul>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white">
<div className="p-4 border-b border-neutral-200 text-sm font-medium text-neutral-900">AI Advantages</div>
<div className="p-4 text-sm text-neutral-700">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="scan-line"></i>
                Scale: monitor thousands of assets simultaneously.
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="line-chart"></i>
                Discipline: rules-based execution reduces emotion.
              </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-0.5 text-neutral-800" data-lucide="refresh-cw"></i>
                Adaptation: continuous learning across regimes.
              </li>
</ul>
</div>
</div>
</div>
<div className="mt-8">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors ring-1 ring-neutral-200" onClick={(e) => { openModal('prospectusModal') }} type="button">
<i className="w-4 h-4" data-lucide="download"></i>
          Download Strategy Overview
        </button>
<div className="mt-3 text-xs text-neutral-600">Pushback: Talent bottlenecks are real; hybrid oversight reduces pure-AI failure risk.</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-14 border-t border-neutral-200" id="performance">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Backtested Through Crises</h2>
<p className="text-sm text-neutral-700 mt-2">+32.08% CAGR since 2013, validated on historical data. Select case studies below. Full details available in the prospectus.</p>
</div>

<div className="mt-8 rounded-lg border border-neutral-200 overflow-hidden bg-white">
<div className="px-4 py-3 border-b border-neutral-200 text-sm font-medium text-neutral-900">Select Case Studies (Illustrative)</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-neutral-50 text-neutral-700">
<tr className="border-b border-neutral-200">
<th className="text-left font-medium px-4 py-3">Crisis Event</th>
<th className="text-left font-medium px-4 py-3">Event</th>
<th className="text-left font-medium px-4 py-3">Approach</th>
<th className="text-left font-medium px-4 py-3">Return</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr className="hover:bg-neutral-50">
<td className="px-4 py-3 text-neutral-900">2011 EU Debt</td>
<td className="px-4 py-3 text-neutral-700">Greece/Italy bond panic</td>
<td className="px-4 py-3 text-neutral-700">Buy EU bonds</td>
<td className="px-4 py-3 text-green-700 font-medium">+120% in 18m</td>
</tr>
<tr className="hover:bg-neutral-50">
<td className="px-4 py-3 text-neutral-900">2020 COVID</td>
<td className="px-4 py-3 text-neutral-700">Travel -50–80%</td>
<td className="px-4 py-3 text-neutral-700">Buy airlines/REITs</td>
<td className="px-4 py-3 text-green-700 font-medium">+195% in 18m</td>
</tr>
<tr className="hover:bg-neutral-50">
<td className="px-4 py-3 text-neutral-900">2022 Rate Hikes</td>
<td className="px-4 py-3 text-neutral-700">Nasdaq -33%</td>
<td className="px-4 py-3 text-neutral-700">Buy Apple/MSFT/Google</td>
<td className="px-4 py-3 text-green-700 font-medium">+85% in 12m</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 bg-neutral-50 text-xs text-neutral-600 flex items-start gap-2">
<i className="w-4 h-4" data-lucide="alert-circle"></i>
          Hypothetical and backtested results. No guarantee of future performance. Returns reflect illustrative entries and may not account for slippage, fees, or taxes.
        </div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-14 border-t border-neutral-200">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Our Competitive Advantage</h2>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4">
<i className="w-5 h-5 text-neutral-800" data-lucide="shield-check"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Purpose-Built for Panic</div>
<div className="text-sm text-neutral-700">Thrive where humans hesitate and flows distort prices.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4">
<i className="w-5 h-5 text-neutral-800" data-lucide="database"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Data Scale</div>
<div className="text-sm text-neutral-700">Process billions of datapoints in real time.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4">
<i className="w-5 h-5 text-neutral-800" data-lucide="focus"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Single Strategy</div>
<div className="text-sm text-neutral-700">Concentrated on volatility and dislocations for sustained alpha.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-neutral-200 p-4">
<i className="w-5 h-5 text-neutral-800" data-lucide="briefcase"></i>
<div>
<div className="text-sm font-medium text-neutral-900">Institutional Launch</div>
<div className="text-sm text-neutral-700">$100M target from 20–30 partners; $1M–$10M tickets.</div>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-neutral-200 bg-white">
<div className="p-4 border-b border-neutral-200 text-sm font-medium text-neutral-900">Edge vs. Human-Only</div>
<div className="p-4">
<div className="space-y-3 text-sm">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-800 mt-0.5" data-lucide="scan"></i>
<div>
<div className="font-medium text-neutral-900">Coverage</div>
<div className="text-neutral-700">Thousands of signals and assets vs. limited analyst bandwidth.</div>
</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-800 mt-0.5" data-lucide="percent"></i>
<div>
<div className="font-medium text-neutral-900">Sizing</div>
<div className="text-neutral-700">Probabilistic entries with downside constraints.</div>
</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-neutral-800 mt-0.5" data-lucide="book-lock"></i>
<div>
<div className="font-medium text-neutral-900">Governance</div>
<div className="text-neutral-700">Human oversight, audit trails, and kill-switch protocols.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-14 border-t border-neutral-200">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Key Risks and Mitigations</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-lg border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="triangle-alert"></i>
            Model Risk
          </div>
<p className="text-sm text-neutral-700 mt-2">AI may miss novel events; mitigated via human review, out-of-sample tests, and scenario analysis.</p>
</div>
<div className="rounded-lg border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="droplet"></i>
            Liquidity Risk
          </div>
<p className="text-sm text-neutral-700 mt-2">Crises can freeze markets; we focus on ultra-liquid assets and staged entries.</p>
</div>
<div className="rounded-lg border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="file-lock-2"></i>
            Regulatory Risk
          </div>
<p className="text-sm text-neutral-700 mt-2">Rules evolve; we build compliance-first processes and plan for RIA registration.</p>
</div>
</div>
<div className="mt-6 text-xs text-neutral-600">We respect fear of losses. Transparent risk discussion builds durable trust.</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-14 border-t border-neutral-200" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">About Snobol</h2>
<p className="text-sm text-neutral-700 mt-2">We are an institutional strategy focused on crisis dislocations. Our team blends AI researchers, data engineers, and portfolio managers with experience through multiple regimes.</p>
<div className="mt-4 text-sm text-neutral-700">
            - Single mandate focus<br />
            - Transparent governance and reporting<br />
            - Audit-ready infrastructure and controls
          </div>
</div>
<div className="rounded-lg border border-neutral-200 p-5 bg-white">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
            What to expect
          </div>
<ul className="mt-3 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-1" data-lucide="dot"></i>
              Quarterly letters with positioning and risk commentary.
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-1" data-lucide="dot"></i>
              Gated data room: methodology overview, backtests, risk checks.
            </li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 mt-1" data-lucide="dot"></i>
              Structured onboarding for family offices and institutions.
            </li>
</ul>
</div>
</div>
</section>

<section className="border-t border-neutral-200 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Allocate to Snobol for crisis-resilient growth.</h3>
<p className="text-sm text-neutral-700 mt-1">Accredited investors only.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-neutral-900/10" onClick={(e) => { openModal('callModal') }} type="button">
<i className="w-4 h-4" data-lucide="calendar-days"></i>
              Schedule Call
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-50 transition-colors ring-1 ring-neutral-200" onClick={(e) => { openModal('prospectusModal') }} type="button">
<i className="w-4 h-4" data-lucide="file-text"></i>
              Access Prospectus
            </button>
</div>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6 text-xs text-neutral-600">
          Investing involves risk, including the potential loss of principal. Backtested or hypothetical results have inherent limitations and may not reflect actual trading, liquidity constraints, fees, or market impact. No offer or solicitation is made herein. Any offering will be made only by formal documents to qualified investors.
          <div className="mt-4 flex items-center justify-between">
<span>© 2025 Snobol Corporation. All rights reserved.</span>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-900 transition-colors" href="#">Terms</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 hidden" id="prospectusModal">
<div className="absolute inset-0 bg-black/30" onClick={(e) => { closeModal('prospectusModal') }}></div>
<div className="relative max-w-lg mx-auto mt-24 bg-white rounded-lg border border-neutral-200 shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="file-text"></i>
            Request Prospectus
          </div>
<button className="h-8 w-8 rounded-md hover:bg-neutral-50 inline-flex items-center justify-center ring-1 ring-neutral-200" onClick={(e) => { closeModal('prospectusModal') }}>
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-4" onSubmit={(e) => { event.preventDefault(); if(validateAccredited('prospectus')) { alert('Access granted. A secure link will be emailed after verification.'); closeModal('prospectusModal'); } }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-700 mb-1">First name</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="Alex" required type="text" />
</div>
<div>
<label className="block text-xs text-neutral-700 mb-1">Last name</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="Morgan" required type="text" />
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-700 mb-1">Email (work)</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="name@firm.com" required type="email" />
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-700 mb-1">Firm</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="Family Office / RIA / Fund" required type="text" />
</div>
</div>

<div className="flex items-start gap-3">
<button className="h-5 w-5 rounded border border-neutral-300 bg-white ring-1 ring-inset ring-transparent hover:ring-neutral-300 flex items-center justify-center" id="prospectusCheck" onClick={(e) => { toggleCheck(e.currentTarget) }} type="button">

</button>
<label className="text-sm text-neutral-700">I confirm I am an accredited/qualified investor and agree to receive materials.</label>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-600">We will verify accreditation before providing access.</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" id="prospectusSubmit" type="submit">
<i className="w-4 h-4" data-lucide="unlock"></i>
              Access Prospectus
            </button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="callModal">
<div className="absolute inset-0 bg-black/30" onClick={(e) => { closeModal('callModal') }}></div>
<div className="relative max-w-lg mx-auto mt-24 bg-white rounded-lg border border-neutral-200 shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="calendar"></i>
            Schedule an Introductory Call
          </div>
<button className="h-8 w-8 rounded-md hover:bg-neutral-50 inline-flex items-center justify-center ring-1 ring-neutral-200" onClick={(e) => { closeModal('callModal') }}>
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-4" onSubmit={(e) => { event.preventDefault(); if(validateAccredited('call')) { alert('Thanks—our team will confirm a time shortly.'); closeModal('callModal'); } }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-700 mb-1">Name</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="Full name" required type="text" />
</div>
<div>
<label className="block text-xs text-neutral-700 mb-1">Email (work)</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="name@firm.com" required type="email" />
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-700 mb-1">Role</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="CIO / PM / Principal" required type="text" />
</div>
</div>

<div className="flex items-start gap-3">
<button className="h-5 w-5 rounded border border-neutral-300 bg-white ring-1 ring-inset ring-transparent hover:ring-neutral-300 flex items-center justify-center" id="callCheck" onClick={(e) => { toggleCheck(e.currentTarget) }} type="button">
</button>
<label className="text-sm text-neutral-700">I confirm I am an accredited/qualified investor.</label>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-600">We reserve calls for qualified allocators.</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" id="callSubmit" type="submit">
<i className="w-4 h-4" data-lucide="phone"></i>
              Request Call
            </button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="contactModal">
<div className="absolute inset-0 bg-black/30" onClick={(e) => { closeModal('contactModal') }}></div>
<div className="relative max-w-lg mx-auto mt-24 bg-white rounded-lg border border-neutral-200 shadow-xl">
<div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<i className="w-5 h-5" data-lucide="mail"></i>
            Contact (Qualified Investors)
          </div>
<button className="h-8 w-8 rounded-md hover:bg-neutral-50 inline-flex items-center justify-center ring-1 ring-neutral-200" onClick={(e) => { closeModal('contactModal') }}>
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<form className="p-5 space-y-4" onSubmit={(e) => { event.preventDefault(); if(validateAccredited('contact')) { alert('Thank you—our team will respond within one business day.'); closeModal('contactModal'); } }}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-700 mb-1">Name</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="Full name" required type="text" />
</div>
<div>
<label className="block text-xs text-neutral-700 mb-1">Email</label>
<input className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="name@firm.com" required type="email" />
</div>
<div className="sm:col-span-2">
<label className="block text-xs text-neutral-700 mb-1">Message</label>
<textarea className="w-full px-3 py-2 text-sm rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 focus:border-neutral-400" placeholder="Your inquiry" required rows="4"></textarea>
</div>
</div>
<div className="flex items-start gap-3">
<button className="h-5 w-5 rounded border border-neutral-300 bg-white ring-1 ring-inset ring-transparent hover:ring-neutral-300 flex items-center justify-center" id="contactCheck" onClick={(e) => { toggleCheck(e.currentTarget) }} type="button">
</button>
<label className="text-sm text-neutral-700">I confirm I am an accredited/qualified investor.</label>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-600">We respond to qualified inquiries only.</div>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" id="contactSubmit" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
              Send
            </button>
</div>
</form>
</div>
</div>



    </>
  );
}
