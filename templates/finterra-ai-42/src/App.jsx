import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with consistent stroke width
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Demo: sample queries switcher
      const samples = {
        aapl: {
          q: "What changed for AAPL this morning?",
          a: "AAPL: Shares up 1.3% pre‑market. Drivers: 8‑K filed (Item 2.02: revenue guidance raised), two bullish sell‑side notes, and elevated positive social sentiment. Price reaction aligns with prior guidance‑raise windows."
        },
        nvda: {
          q: "Summarize this morning’s drivers for NVDA and show sources.",
          a: "NVDA: +2.1% on supply expansion chatter and upbeat channel checks; 10‑Q segment detail flagged higher DC mix. Social sentiment +0.55. Citations include 10‑Q, 2 analyst notes, and 3 high‑engagement posts."
        },
        tsla: {
          q: "Timeline TSLA’s M&A rumors, filings, and major social spikes with confidence.",
          a: "TSLA: Rumor cluster detected; no related EDGAR artifacts. Sentiment volatile (+/‑). Price reaction muted (<0.4%) absent filings. Confidence low; awaiting primary disclosures."
        }
      };
      const inputEl = document.getElementById('demo-input');
      const answerEl = document.getElementById('answer');
      const askBtn = document.getElementById('demo-ask');

      const setSample = (key) => {
        inputEl.value = samples[key].q;
        answerEl.textContent = samples[key].a;
      };

      document.getElementById('chip-aapl').addEventListener('click', () => setSample('aapl'));
      document.getElementById('chip-nvda').addEventListener('click', () => setSample('nvda'));
      document.getElementById('chip-tsla').addEventListener('click', () => setSample('tsla'));
      askBtn.addEventListener('click', () => {
        const v = inputEl.value.trim().toLowerCase();
        if (v.includes('nvda')) return setSample('nvda');
        if (v.includes('tsla')) return setSample('tsla');
        return setSample('aapl');
      });

      // Chart.js sparkline with color‑blind toggle
      const ctx = document.getElementById('priceChart').getContext('2d');
      const baseData = Array.from({ length: 24 }, (_, i) => 180 + Math.sin(i / 3) * 2 + (Math.random() - 0.5) * 1.2);
      let protanopia = false;

      const palettes = {
        normal: {
          line: '#059669',   // viridian
          fill: 'rgba(16,185,129,0.10)', // emerald tint
          grid: 'rgba(148,163,184,0.15)'
        },
        cbSafe: {
          line: '#F59E0B',  // amber
          fill: 'rgba(245,158,11,0.12)',
          grid: 'rgba(148,163,184,0.18)'
        }
      };

      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: 24 }, (_, i) => i),
          datasets: [{
            data: baseData,
            borderColor: palettes.normal.line,
            backgroundColor: palettes.normal.fill,
            fill: true,
            tension: 0.35,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: { display: false, grid: { display: false } },
            y: {
              display: false,
              grid: { display: true, color: palettes.normal.grid },
              ticks: { display: false }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              intersect: false,
              mode: 'index',
              callbacks: { label: (ctx) => ` $${ctx.parsed.y.toFixed(2)}` },
              backgroundColor: 'rgba(2,6,23,0.85)',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              titleColor: '#E2E8F0',
              bodyColor: '#E2E8F0',
              displayColors: false
            }
          },
          elements: { line: { borderWidth: 2 } }
        }
      });

      document.getElementById('paletteToggle').addEventListener('click', () => {
        protanopia = !protanopia;
        const p = protanopia ? palettes.cbSafe : palettes.normal;
        chart.data.datasets[0].borderColor = p.line;
        chart.data.datasets[0].backgroundColor = p.fill;
        chart.options.scales.y.grid.color = p.grid;
        chart.update();
      });

      // Code tabs
      const tsBtn = document.getElementById('tab-ts');
      const pyBtn = document.getElementById('tab-py');
      const codeTS = document.getElementById('code-ts');
      const codePY = document.getElementById('code-py');

      tsBtn.addEventListener('click', () => {
        codeTS.classList.remove('hidden');
        codePY.classList.add('hidden');
        tsBtn.classList.add('bg-white/5', 'text-slate-200');
        pyBtn.classList.remove('bg-white/5');
      });

      pyBtn.addEventListener('click', () => {
        codeTS.classList.add('hidden');
        codePY.classList.remove('hidden');
        pyBtn.classList.add('bg-white/5', 'text-slate-200');
        tsBtn.classList.remove('bg-white/5');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-xl border border-white/10 bg-[#0B1220]/60 backdrop-blur supports-[backdrop-filter]:bg-[#0B1220]/40">
<nav className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30">
<span className="text-[11px] font-semibold tracking-tight text-emerald-400">FIN</span>
</div>
<span className="text-base font-semibold tracking-tight text-slate-100">Finterra AI</span>
<span className="hidden md:inline text-xs text-slate-400">by FinancialContent</span>
</div>
<div className="hidden items-center gap-6 md:flex">
<a className="text-sm text-slate-300 hover:text-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220] rounded" href="#features">Product</a>
<a className="text-sm text-slate-300 hover:text-emerald-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#developers">Developers</a>
<a className="text-sm text-slate-300 hover:text-emerald-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#pricing">Pricing</a>
<a className="text-sm text-slate-300 hover:text-emerald-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#data">Data Catalog</a>
<a className="text-sm text-slate-300 hover:text-emerald-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#docs">Docs</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]">
<i className="h-4 w-4 text-slate-300" data-lucide="log-in"></i>
                Sign in
              </button>
<a className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium tracking-tight text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#cta" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
<i className="h-4 w-4 text-white" data-lucide="play-circle"></i>
                Start querying
              </a>
</div>
</nav>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-32 sm:pt-36">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.25), transparent 70%)'}}></div>
<div className="absolute top-1/3 left-1/4 h-[400px] w-[500px] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(14,165,164,0.18), transparent 70%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
<div className="mx-auto max-w-3xl text-center">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Ask the market anything. Get grounded, real‑time answers.
          </h1>
<p className="mt-5 text-base sm:text-lg text-slate-300">
            The AI‑ready knowledge base for U.S. capital markets—linking prices, filings, news, and social sentiment into a single, trusted source you can chat with, build on, and scale.
          </p>
<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium tracking-tight text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#cta" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
<i className="h-4 w-4 text-white" data-lucide="rocket"></i>
              Start querying
            </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#developers">
<i className="h-4 w-4 text-slate-200" data-lucide="book-open"></i>
              View API docs
            </a>
</div>
</div>

<div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4 sm:p-5 shadow-lg shadow-emerald-900/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-300">Live demo</span>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
<span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                  Near real‑time
                </span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" id="chip-aapl">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="apple"></i>
                  AAPL
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" id="chip-nvda">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="cpu"></i>
                  NVDA
                </button>
<button className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" id="chip-tsla">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="car"></i>
                  TSLA
                </button>
</div>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-black/20">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="message-circle"></i>
<input className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none" id="demo-input" placeholder="Ask: What changed for AAPL this morning?"/>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" id="demo-ask">
<i className="h-3.5 w-3.5" data-lucide="search"></i>
                  Ask
                </button>
</div>
<div className="p-3 sm:p-4" id="demo-output">

<div className="flex flex-col gap-3">
<div className="text-sm text-slate-200" id="answer">
                    AAPL: Shares up 1.3% pre‑market. Drivers: 8‑K filed (Item 2.02: revenue guidance raised), two bullish sell‑side notes, and elevated positive social sentiment. Price reaction aligns with prior guidance‑raise windows.
                  </div>
<div className="flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 hover:bg-white/10" href="#" rel="noreferrer" target="_blank">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="file-text"></i>
                      8‑K (2.02) · EDGAR
                    </a>
<a className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300 hover:bg-white/10" href="#" rel="noreferrer" target="_blank">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="newspaper"></i>
                      Coverage: 2 notes
                    </a>
<span className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-300">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="smile-plus"></i>
                      Sentiment +0.42
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4 shadow-lg shadow-emerald-900/10">
<div className="flex items-center justify-between">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-100">Price reaction</h3>
<p className="text-xs text-slate-400">AAPL · last 24h</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-[11px] text-slate-300 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70" id="paletteToggle">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="eye"></i>
                  Protanopia‑safe
                </button>
</div>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-black/20 p-3">
<div className="relative h-36">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas className="h-full w-full" id="priceChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-[11px] text-slate-400">Latency p95: 210ms</span>
<span className="inline-flex items-center gap-1 text-[11px] text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="trending-up"></i>
                  +1.3%
                </span>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="link"></i>
            Graph‑grounded answers
          </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="check-circle"></i>
            Public data, cited sources
          </span>
<span className="inline-flex items-center gap-1">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="cpu"></i>
            Agent‑ready APIs &amp; SDKs
          </span>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="features">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Why Finterra</h2>
<p className="mt-3 text-slate-300">Grounded answers, agent‑native APIs, and a unified financial knowledge graph.</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="shield-check"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Grounded by design</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Every answer cites filings, news, and data points linked through the graph.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#demo">
              See example <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="git-graph"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Unified knowledge graph</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Entities and relationships across filings, events, sentiment, and prices.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#developers">
              Explore graph APIs <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="terminal"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Natural‑language APIs</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Search, Retrieve, Entities, Events, Documents, Timeseries, and Graph endpoints.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#developers">
              Quickstart <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="timeline"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Timelines &amp; explainability</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Traverse disclosures → reactions → market moves with citations.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#timeline">
              View timeline <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="bell-ring"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Alerts &amp; webhooks</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Filing drops, sentiment spikes, abnormal volume—delivered in real time.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#developers">
              Webhook guide <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="group rounded-2xl border border-white/10 bg-[#0F172A]/60 p-5 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="h-4.5 w-4.5 text-emerald-300" data-lucide="download"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Data exports</h3>
</div>
<p className="mt-3 text-sm text-slate-300">Joined datasets for filings ↔ news ↔ sentiment ↔ prices, analysis‑ready.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-teal-300 hover:text-teal-200" href="#pricing">
              See plans <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="timeline">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight text-white">Data story: AAPL earnings → reaction</h3>
<span className="text-xs text-slate-400">Explainable: edges traversed + citations</span>
</div>
<div className="mt-4 overflow-x-auto">
<div className="flex min-w-max items-center gap-3">

<div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 text-sm text-emerald-200 shadow-inner">
<i className="h-4 w-4" data-lucide="file-text"></i>
              10‑Q posted
              <span className="ml-1 text-xs text-emerald-300">08:31</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
<i className="h-4 w-4 text-emerald-300" data-lucide="newspaper"></i>
              Coverage hits
              <span className="ml-1 text-xs text-slate-400">08:44</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
<i className="h-4 w-4 text-emerald-300" data-lucide="message-circle"></i>
              Social sentiment ↑
              <span className="ml-1 text-xs text-slate-400">09:02</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
<i className="h-4 w-4 text-emerald-300" data-lucide="bar-chart-3"></i>
              Price gap +1.3%
              <span className="ml-1 text-xs text-slate-400">09:30</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">
<i className="h-4 w-4 text-emerald-300" data-lucide="git-branch"></i>
              Event study window
              <span className="ml-1 text-xs text-slate-400">+3d</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="developers">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
<div>
<h3 className="text-3xl font-semibold tracking-tight text-white">Build with natural‑language APIs &amp; SDKs</h3>
<p className="mt-3 text-slate-300">Search, retrieve, and traverse graph relationships with concise endpoints and agent‑ready retrievers.</p>
<ul className="mt-5 space-y-2 text-sm text-slate-300">
<li className="inline-flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="search"></i>
<span><span className="text-slate-200">/search:nl</span> and <span className="text-slate-200">/retrieve</span> with citations</span>
</li>
<li className="inline-flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="git-merge"></i>
<span>Graph subgraphs, entities, events, timeseries</span>
</li>
<li className="inline-flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-emerald-300" data-lucide="key-round"></i>
<span>API keys, quotas, usage telemetry</span>
</li>
</ul>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium tracking-tight text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#cta" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
<i className="h-4 w-4" data-lucide="plug-zap"></i>
                Get API key
              </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#docs">
<i className="h-4 w-4" data-lucide="files"></i>
                Docs
              </a>
</div>
<div className="mt-8 rounded-xl border border-white/10 bg-[#0F172A]/60 p-4" id="data">
<h4 className="text-sm font-semibold tracking-tight text-white">Data Catalog</h4>
<div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-300 sm:grid-cols-3">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-slate-400">Market data</div>
<div className="mt-1 text-slate-200">Quotes, OHLCV, corp actions</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-slate-400">Documents</div>
<div className="mt-1 text-slate-200">10‑K/10‑Q/8‑K, PRs, news</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<div className="text-slate-400">Social</div>
<div className="mt-1 text-slate-200">Posts, entities, sentiment</div>
</div>
</div>
<div className="mt-3 text-[11px] text-slate-400">Public information only; attribution per artifact; retention policies.</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-white">Quickstart</span>
<span className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">TS / Python</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-200 hover:bg-white/10" id="tab-ts">TypeScript</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-transparent px-2 py-1 text-xs text-slate-300 hover:bg-white/5" id="tab-py">Python</button>
</div>
</div>
<div className="mt-3 rounded-lg border border-white/10 bg-black/40 p-3">
<pre className="overflow-x-auto text-[12.5px] leading-6 text-emerald-50" id="code-ts" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas'}}>
import { Finterra } from "@finterra/sdk";

const fin = new Finterra({ apiKey: process.env.FINTERRA_API_KEY });

const q = await fin.search.nl({
  query: "What changed for AAPL today?",
  citations: true
});

console.log(q.answer);
console.table(q.citations);

/* Graph hop example */
const g = await fin.graph.subgraph({
  seed: { type: "ticker", value: "AAPL" },
  maxHops: 2,
  filters: ["filing:8-K", "event:guidance"]
});
              </pre>
<pre className="hidden overflow-x-auto text-[12.5px] leading-6 text-emerald-50" id="code-py" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas'}}>
from finterra import Finterra

fin = Finterra(api_key=os.environ["FINTERRA_API_KEY"])

q = fin.search.nl(
    query="What changed for AAPL today?",
    citations=True
)

print(q.answer)
print(q.citations)

# Graph hop example
g = fin.graph.subgraph(
    seed={"type": "ticker", "value": "AAPL"},
    max_hops=2,
    filters=["filing:8-K", "event:guidance"]
)
              </pre>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-[11px] text-slate-400">Output: JSON with citations (uri, doc_id, ts) and optional graph hops.</div>
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200 hover:bg-white/10">
<i className="h-3.5 w-3.5 text-emerald-300" data-lucide="clipboard"></i>
                Copy
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h3 className="text-3xl font-semibold tracking-tight text-white">Pricing that scales with you</h3>
<p className="mt-3 text-slate-300">Start with pay‑per‑query. Add dataset packs and enterprise SLAs when you need more.</p>
</div>
<div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">

<div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-6 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-white">Individuals</h4>
<i className="h-5 w-5 text-emerald-300" data-lucide="user"></i>
</div>
<p className="mt-2 text-sm text-slate-300">Pay‑per‑query credits, rate‑limited, optional day‑pass.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-white">$0.02<span className="text-base text-slate-400"> / query</span></div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Chat answers with citations</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Basic SDKs</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Ticker‑centric retrieval</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-medium tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#cta" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
              Start
            </a>
</div>

<div className="relative rounded-2xl border border-emerald-400/50 bg-[#0F172A]/80 p-6 shadow-xl shadow-emerald-900/30 ring-1 ring-emerald-500/30">
<div className="absolute -top-3 right-4 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-200">Most popular</div>
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-white">Teams / SMB</h4>
<i className="h-5 w-5 text-emerald-300" data-lucide="users"></i>
</div>
<p className="mt-2 text-sm text-slate-300">Query bundles + basic datasets; webhook add‑on.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-white">$199<span className="text-base text-slate-400"> / mo</span></div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> NL Search + Retrieve APIs</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Webhooks (filings, sentiment, volume)</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Dataset joins (filings/news/sentiment)</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-medium tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#cta" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
              Start a trial
            </a>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0F172A]/60 p-6 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-900/20 transition">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-white">Enterprise / Quant</h4>
<i className="h-5 w-5 text-emerald-300" data-lucide="building-2"></i>
</div>
<p className="mt-2 text-sm text-slate-300">Per‑query + dataset licenses, private endpoints/VPC, SLOs.</p>
<div className="mt-4 text-3xl font-semibold tracking-tight text-white">Custom</div>
<ul className="mt-4 space-y-2 text-sm text-slate-200">
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Private networking &amp; SLAs</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Advanced correlation packs</li>
<li className="inline-flex items-start gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i> Dataset exports &amp; backtesting</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-medium tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1220]" href="#cta" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
              Talk to us
            </a>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="cta">
<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
<div className="rounded-2xl p-8 text-center shadow-lg" style={{background: 'linear-gradient(135deg,#10B981 0%, #0EA5A4 100%)'}}>
<h4 className="text-2xl font-semibold tracking-tight text-white">Build with Finterra today</h4>
<p className="mt-2 text-white/90">Plug in the SDK, ask your first question, and ship your next market insight.</p>
<div className="mx-auto mt-5 flex max-w-lg flex-col items-center gap-3 sm:flex-row">
<div className="flex w-full items-center gap-2 rounded-lg bg-white/15 px-3 py-2.5 ring-1 ring-white/30 focus-within:ring-2 focus-within:ring-white/80">
<i className="h-4 w-4 text-white/90" data-lucide="mail"></i>
<input className="w-full bg-transparent text-sm text-white placeholder:text-white/80 focus:outline-none" placeholder="you@company.com"/>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/95 px-4 py-2.5 text-sm font-medium tracking-tight text-emerald-700 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 sm:w-auto">
<i className="h-4 w-4" data-lucide="key-round"></i>
              Request API key
            </button>
</div>
<div className="mt-3 text-xs text-white/85">Public data only; not investment advice.</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
<div className="col-span-2 sm:col-span-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-400/30">
<span className="text-[11px] font-semibold tracking-tight text-emerald-400">FIN</span>
</div>
<span className="text-base font-semibold tracking-tight text-slate-100">Finterra AI</span>
</div>
<p className="mt-3 max-w-sm text-sm text-slate-400">Agent‑native, graph‑grounded answers for U.S. capital markets. Built on FinancialContent and CloudQuote ingestion pipelines.</p>
<div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-emerald-300">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="lock"></i>Auditability</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="scale"></i>Compliance</span>
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="globe"></i>Public data only</span>
</div>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-white">Product</h5>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-emerald-300" href="#features">Knowledge Graph</a></li>
<li><a className="hover:text-emerald-300" href="#timeline">Timelines</a></li>
<li><a className="hover:text-emerald-300" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-white">Developers</h5>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-emerald-300" href="#developers" id="docs">Docs</a></li>
<li><a className="hover:text-emerald-300" href="#developers">SDKs</a></li>
<li><a className="hover:text-emerald-300" href="#developers">API Playground</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-white">Company</h5>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-emerald-300" href="#">About</a></li>
<li><a className="hover:text-emerald-300" href="#">Security</a></li>
<li><a className="hover:text-emerald-300" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
<p className="text-sm text-slate-400">© <span id="year"></span> FinancialContent. All rights reserved. Not investment advice.</p>
<div className="flex items-center gap-4 text-sm text-slate-400">
<a className="hover:text-emerald-300" href="#">Terms</a>
<a className="hover:text-emerald-300" href="#">Privacy</a>
<a className="hover:text-emerald-300" href="#">Compliance</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
