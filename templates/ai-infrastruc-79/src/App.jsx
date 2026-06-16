import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide with 1.5 stroke width and default size
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        lucide.createIcons({
          attrs: {
            'stroke-width': 1.5
          }
        });
      }
      // Year
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Charts
      const heroCtx = document.getElementById('heroChart');
      if (heroCtx) {
        const grad = heroCtx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        grad.addColorStop(0, 'rgba(34, 211, 238, 0.35)');
        grad.addColorStop(1, 'rgba(34, 211, 238, 0.02)');

        new Chart(heroCtx, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [
              {
                label: 'With Neura',
                data: [520, 480, 470, 455, 448, 440, 432],
                tension: 0.35,
                borderColor: 'rgba(34, 211, 238, 0.9)',
                backgroundColor: grad,
                fill: true,
                borderWidth: 2,
                pointRadius: 0
              },
              {
                label: 'Baseline',
                data: [600, 590, 585, 580, 575, 570, 565],
                tension: 0.35,
                borderColor: 'rgba(148, 163, 184, 0.5)',
                backgroundColor: 'transparent',
                borderDash: [4,4],
                borderWidth: 2,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { color: '#a3a3a3', boxWidth: 10, usePointStyle: true, pointStyle: 'line' }
              },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(11, 15, 21, 0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                titleColor: '#e5e7eb',
                bodyColor: '#cbd5e1'
              }
            },
            scales: {
              x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.06)' } },
              y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.06)' } }
            }
          }
        });
      }

      const metricsCtx = document.getElementById('metricsChart');
      if (metricsCtx) {
        const grad2 = metricsCtx.getContext('2d').createLinearGradient(0, 0, 0, 260);
        grad2.addColorStop(0, 'rgba(244, 114, 182, 0.35)');
        grad2.addColorStop(1, 'rgba(244, 114, 182, 0.02)');

        new Chart(metricsCtx, {
          type: 'bar',
          data: {
            labels: ['Cost', 'Latency', 'Quality'],
            datasets: [
              {
                label: 'Baseline',
                data: [1.0, 1.0, 1.0],
                backgroundColor: 'rgba(148, 163, 184, 0.35)',
                borderColor: 'rgba(148, 163, 184, 0.6)',
                borderWidth: 1
              },
              {
                label: 'With Neura',
                data: [0.61, 0.68, 1.12],
                backgroundColor: grad2,
                borderColor: 'rgba(244, 114, 182, 0.9)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { color: '#a3a3a3', boxWidth: 10 }
              },
              tooltip: {
                backgroundColor: 'rgba(11, 15, 21, 0.9)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                titleColor: '#e5e7eb',
                bodyColor: '#cbd5e1',
                callbacks: {
                  label: function(ctx) {
                    const label = ctx.dataset.label || '';
                    return ' ' + label + ': ' + ctx.parsed.y.toFixed(2);
                  }
                }
              }
            },
            scales: {
              x: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.06)' } },
              y: { ticks: { color: '#9ca3af' }, grid: { color: 'rgba(255,255,255,0.06)' } }
            }
          }
        });
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute left-1/2 top-[-160px] h-[700px] w-[1100px] -translate-x-1/2 rounded-[999px] bg-cyan-500/20 blur-[140px]"></div>
<div className="absolute bottom-[-240px] right-[-120px] h-[540px] w-[540px] rounded-full bg-fuchsia-500/10 blur-[120px]"></div>
<div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #9ca3af 1px, transparent 0)', backgroundSize: '22px 22px'}}></div>
</div>

<div className="hidden md:block">
<div className="mx-auto max-w-7xl px-4">
<div className="mt-3 rounded-xl border border-white/10 bg-white/[0.01] px-4 py-2.5 text-sm text-neutral-300 backdrop-blur">
<div className="flex items-center justify-between">
<p className="tracking-tight">
            Introducing Neura Orchestrator v2 — multi-model routing with <span className="text-cyan-300">7.3% latency reduction</span>.
          </p>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-neutral-200 hover:border-cyan-400/30 hover:text-cyan-200 transition-colors" href="#changelog">
<i className="w-4 h-4" data-lucide="zap"></i>
<span className="text-xs font-medium">Read Changelog</span>
</a>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0d12]/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4">
<div className="flex h-16 items-center justify-between">

<a className="group inline-flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.02] text-cyan-300 tracking-tight font-semibold">N</div>
<span className="text-[15px] tracking-tight text-neutral-100 font-semibold">NEURA</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-200 hover:bg-white/[0.03] rounded-md transition-colors" href="#features">Features</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-200 hover:bg-white/[0.03] rounded-md transition-colors" href="#product">Product</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-200 hover:bg-white/[0.03] rounded-md transition-colors" href="#pricing">Pricing</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-200 hover:bg-white/[0.03] rounded-md transition-colors" href="#docs">Docs</a>
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-200 hover:bg-white/[0.03] rounded-md transition-colors" href="#blog">Blog</a>
</nav>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-2 text-sm text-neutral-300 hover:text-cyan-200 hover:bg-white/[0.03] rounded-md transition-colors" href="#signin">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-400/15 hover:border-cyan-300/40 transition-colors" href="#get-started">
<i className="w-4 h-4" data-lucide="rocket"></i>
            Launch App
          </a>
</div>

<div className="md:hidden">
<input className="peer sr-only" id="nav-toggle" type="checkbox"/>
<label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 hover:border-cyan-400/30 hover:text-cyan-200 transition-colors" htmlFor="nav-toggle">
<i className="w-5 h-5" data-lucide="menu"></i>
<span className="text-sm">Menu</span>
</label>
<div className="absolute left-0 top-16 hidden w-full border-b border-white/10 bg-[#0a0d12]/95 backdrop-blur peer-checked:block">
<div className="mx-auto max-w-7xl px-4 py-3">
<div className="grid gap-2">
<a className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-white/[0.03] hover:text-cyan-200" href="#features">Features</a>
<a className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-white/[0.03] hover:text-cyan-200" href="#product">Product</a>
<a className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-white/[0.03] hover:text-cyan-200" href="#pricing">Pricing</a>
<a className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-white/[0.03] hover:text-cyan-200" href="#docs">Docs</a>
<a className="block rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-white/[0.03] hover:text-cyan-200" href="#blog">Blog</a>
<div className="mt-1 flex gap-2">
<a className="flex-1 rounded-md border border-white/10 px-3 py-2 text-center text-sm text-neutral-300 hover:border-cyan-400/30 hover:text-cyan-200" href="#signin">Sign in</a>
<a className="flex-1 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-center text-sm text-cyan-100 hover:bg-cyan-400/15" href="#get-started">Launch App</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
<div className="grid items-center gap-10 md:grid-cols-2">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-neutral-300">
<i className="w-4 h-4 text-cyan-300" data-lucide="sparkles"></i>
<span className="tracking-tight">Model routing • Guardrails • Vector search</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-neutral-100">
            Build with intelligence.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-fuchsia-300">Ship at lightspeed.</span>
</h1>
<p className="mt-4 text-[15px] leading-relaxed text-neutral-300">
            Neura is your AI infrastructure layer—SDKs, observability, and orchestration that help you prototype faster and scale reliably across any model provider.
          </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-100 hover:bg-cyan-400/15 hover:border-cyan-300/40 transition-colors" href="#get-started">
<i className="w-5 h-5" data-lucide="play"></i>
              Start Free
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-neutral-200 hover:text-cyan-100 hover:border-cyan-400/30 hover:bg-white/[0.03] transition-colors" href="#demo">
<i className="w-5 h-5" data-lucide="video"></i>
              Watch Demo
            </a>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="text-sm text-neutral-400">
              Trusted by teams shipping in fintech, devtools, and commerce
            </div>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur">
<div className="grid gap-0 md:grid-cols-2">

<div className="p-4 md:p-5 border-b md:border-b-0 md:border-r border-white/10">
<div className="mb-3 flex items-center justify-between">
<div className="text-xs text-neutral-400">neura.ts</div>
<div className="flex items-center gap-2 text-neutral-400">
<i className="w-4 h-4 hover:text-cyan-200 cursor-pointer" data-lucide="copy"></i>
<i className="w-4 h-4 hover:text-cyan-200 cursor-pointer" data-lucide="maximize-2"></i>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0b0f15] p-3">
<pre className="text-[12px] leading-relaxed text-neutral-300 overflow-x-auto" style={{fontFamily: '\'IBM Plex Mono\', ui-monospace, SFMono-Regular, Menlo, Consolas, \'Liberation Mono\', monospace'}}>
import { Neura } from "@neura/sdk";
const neura = new Neura({
  apiKey: process.env.NEURA_KEY,
  route: ["gpt-4o", "claude-3.5", "llama-3.1"]
});

const result = await neura.chat({
  input: "Summarize this incident in 50 words.",
  guardrails: { pii: true, toxicity: "medium" },
  cache: true
});

console.log(result.text);
                  </pre>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4 text-emerald-300" data-lucide="shield-check"></i>
<span>Guardrails passed • 34ms saved via cache</span>
</div>
</div>

<div className="p-4 md:p-5">
<div className="mb-3 flex items-center justify-between">
<div className="text-xs text-neutral-400">Latency, p95 (ms)</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-emerald-300">-7.3%</span>
<i className="w-4 h-4 text-emerald-300" data-lucide="trending-down"></i>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-[#0b0f15] p-3">

<div className="relative h-[200px]">
<canvas className="absolute inset-0" id="heroChart"></canvas>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-xs">
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2">
<span className="text-neutral-400">Requests</span>
<span className="text-neutral-200">128k</span>
</div>
<div className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2">
<span className="text-neutral-400">Savings</span>
<span className="text-emerald-300">$12.3k</span>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -bottom-6 left-4 hidden md:block">
<div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-neutral-300 shadow-xl backdrop-blur">
<i className="w-4 h-4 text-cyan-300" data-lucide="cpu"></i>
              Dynamic multi-model routing active
            </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-10">
<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-80">
<span className="text-sm tracking-tight text-neutral-400">Used by teams at</span>
<div className="flex items-center gap-8">
<div className="text-neutral-400">ALFA</div>
<div className="text-neutral-400">KITE</div>
<div className="text-neutral-400">ARC</div>
<div className="text-neutral-400">NODELY</div>
<div className="text-neutral-400">LUMA</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="features">
<div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-100">Everything you need to go from idea to impact</h2>
<p className="mt-3 text-[15px] text-neutral-400">Orchestrate across providers, keep your data safe, and track performance in one place.</p>
</div>
<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-cyan-400/30 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
<i className="w-5 h-5 text-cyan-300" data-lucide="split"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-neutral-100">Smart routing</h3>
<p className="mt-2 text-sm text-neutral-400">Latency-aware routing with budget caps and auto-fallbacks for maximum uptime.</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-cyan-400/30 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
<i className="w-5 h-5 text-emerald-300" data-lucide="shield"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-neutral-100">Guardrails</h3>
<p className="mt-2 text-sm text-neutral-400">PII redaction, policy checks, and grounding—powered by fast, local filters.</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-cyan-400/30 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
<i className="w-5 h-5 text-fuchsia-300" data-lucide="database"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-neutral-100">Vectors &amp; memory</h3>
<p className="mt-2 text-sm text-neutral-400">Bring-your-own DB or use Neura Store for embeddings, chunking, and session memory.</p>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-cyan-400/30 transition-colors">
<div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03]">
<i className="w-5 h-5 text-cyan-300" data-lucide="activity"></i>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold text-neutral-100">Observability</h3>
<p className="mt-2 text-sm text-neutral-400">Traces, cost, and evals—measure what matters and ship with confidence.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="product">
<div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
<div className="grid gap-8 lg:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-neutral-100">Orchestrator Canvas</h3>
<div className="inline-flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="clock"></i> Live
            </div>
</div>
<p className="mt-2 text-[15px] text-neutral-400">Design flows visually with steps for retrieval, reasoning, and grounding. Export to code with one click.</p>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4 text-cyan-300" data-lucide="file-search"></i>
                Retrieve
              </div>
<p className="mt-1 text-xs text-neutral-400">Hybrid search across structured and unstructured sources.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4 text-fuchsia-300" data-lucide="brain"></i>
                Reason
              </div>
<p className="mt-1 text-xs text-neutral-400">Self-reflection and tool-use with budget caps.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4 text-emerald-300" data-lucide="layers"></i>
                Ground
              </div>
<p className="mt-1 text-xs text-neutral-400">Cite sources and avoid hallucinations with verification.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.02] p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="w-4 h-4 text-cyan-300" data-lucide="send"></i>
                Deploy
              </div>
<p className="mt-1 text-xs text-neutral-400">Ship to edge functions with built-in secrets and metrics.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-neutral-100">Live Metrics</h3>
<div className="inline-flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> Last 24h
            </div>
</div>
<p className="mt-2 text-[15px] text-neutral-400">Track cost, latency, and quality with automatic evals.</p>
<div className="mt-5 rounded-lg border border-white/10 bg-[#0b0f15] p-4">

<div className="relative h-[260px]">
<canvas className="absolute inset-0" id="metricsChart"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
<div className="text-xs text-neutral-400">Latency p95</div>
<div className="mt-1 text-neutral-100 font-semibold tracking-tight">412ms</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
<div className="text-xs text-neutral-400">Cost / 1k</div>
<div className="mt-1 text-neutral-100 font-semibold tracking-tight">$0.61</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.02] p-3">
<div className="text-xs text-neutral-400">Pass rate</div>
<div className="mt-1 text-emerald-300 font-semibold tracking-tight">98.4%</div>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.02] to-white/[0.01] p-6">
<div className="grid items-center gap-6 md:grid-cols-2">
<div>
<h3 className="text-xl tracking-tight font-semibold text-neutral-100">Start building with the Neura SDK</h3>
<p className="mt-2 text-sm text-neutral-400">Install the SDK, set your key, and ship your first agent in minutes.</p>
</div>
<div className="rounded-lg border border-white/10 bg-[#0b0f15] p-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4 text-cyan-300" data-lucide="terminal"></i> Terminal
            </div>
<pre className="mt-2 text-[12px] text-neutral-300 overflow-x-auto" style={{fontFamily: '\'IBM Plex Mono\', ui-monospace, SFMono-Regular, Menlo, Consolas, \'Liberation Mono\', monospace'}}>
npm i @neura/sdk
export NEURA_KEY="sk-****************"
neura dev --open
            </pre>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-100">Priced to scale with you</h2>
<p className="mt-3 text-[15px] text-neutral-400">Transparent usage-based pricing with generous free tier.</p>

<div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-2 py-1">
<span className="text-xs text-neutral-400">Monthly</span>
<button className="relative inline-flex h-7 w-14 items-center rounded-full border border-white/10 bg-[#0b0f15]">
<span className="absolute left-1 h-5 w-5 rounded-full bg-neutral-300 transition-all"></span>
</button>
<span className="text-xs text-neutral-400">Yearly <span className="text-emerald-300">-15%</span></span>
</div>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-400/30 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-neutral-100">Starter</h3>
<span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-xs text-neutral-400">Free</span>
</div>
<p className="mt-2 text-sm text-neutral-400">For prototypes and personal projects.</p>
<div className="mt-4 text-3xl tracking-tight font-semibold text-neutral-100">$0</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> 10k requests / month</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Basic routing &amp; logs</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Community support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-neutral-200 hover:border-cyan-400/30 hover:text-cyan-100" href="#signup">Get started</a>
</div>

<div className="relative rounded-xl border border-cyan-400/30 bg-cyan-400/5 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.15)]">
<div className="absolute -top-3 right-4 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] text-cyan-100">Popular</div>
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-neutral-100">Pro</h3>
<span className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-100">Scale</span>
</div>
<p className="mt-2 text-sm text-neutral-300">Everything you need for production workloads.</p>
<div className="mt-4 text-3xl tracking-tight font-semibold text-neutral-100">$59<span className="text-sm text-neutral-400">/mo</span></div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> 250k requests / month</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Advanced routing + caching</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Guardrails &amp; evals</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Priority support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-4 py-2.5 text-sm text-cyan-100 hover:bg-cyan-400/15" href="#upgrade">Upgrade</a>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-400/30 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-neutral-100">Enterprise</h3>
<span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-xs text-neutral-400">Custom</span>
</div>
<p className="mt-2 text-sm text-neutral-400">Security, SSO, SLAs, and custom deployments.</p>
<div className="mt-4 text-3xl tracking-tight font-semibold text-neutral-100">Talk to us</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> SSO/SAML, SOC2</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> VPC / on-prem</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-300" data-lucide="check"></i> Dedicated support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-neutral-200 hover:border-cyan-400/30 hover:text-cyan-100" href="#contact-sales">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-100">What builders say</h2>
<p className="mt-3 text-[15px] text-neutral-400">Loved by fast-moving teams worldwide.</p>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-3">

<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight text-neutral-100">Amira Chen</div>
<div className="text-xs text-neutral-400">CTO, Luma</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">We swapped our brittle pipeline with Neura in a day. Latency and cost dropped immediately.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight text-neutral-100">Jon Ruiz</div>
<div className="text-xs text-neutral-400">Founder, Arc</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">The SDK is minimal and thoughtful. Observability is a superpower.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight text-neutral-100">Sofia Patel</div>
<div className="text-xs text-neutral-400">Eng Lead, Nodely</div>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">Guardrails + evals let us ship confidently in regulated environments.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="blog">
<div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-neutral-100">Resources</h2>
<p className="mt-2 text-[15px] text-neutral-400">Deep dives, changelogs, and tutorials.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-neutral-200 hover:text-cyan-100 hover:border-cyan-400/30" href="#all-posts">View all</a>
</div>
<div className="mt-6 grid gap-6 md:grid-cols-3">
<a className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-400/30 transition-colors" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
<img alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="mt-4 text-xs text-neutral-400">Changelog • 6 min</div>
<h3 className="mt-1 text-lg tracking-tight font-semibold text-neutral-100">Orchestrator v2: smarter routing, lower cost</h3>
</a>
<a className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-400/30 transition-colors" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
<img alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 text-xs text-neutral-400">Tutorial • 8 min</div>
<h3 className="mt-1 text-lg tracking-tight font-semibold text-neutral-100">From CSV to RAG in 10 minutes</h3>
</a>
<a className="group rounded-xl border border-white/10 bg-white/[0.02] p-4 hover:border-cyan-400/30 transition-colors" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
<img alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 text-xs text-neutral-400">Guide • 5 min</div>
<h3 className="mt-1 text-lg tracking-tight font-semibold text-neutral-100">Ship agents with budgets and evals</h3>
</a>
</div>
</div>
</section>

<section className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-12">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
<div className="grid gap-6 md:grid-cols-2">
<div>
<h3 className="text-xl tracking-tight font-semibold text-neutral-100">Get updates</h3>
<p className="mt-2 text-sm text-neutral-400">No spam. Product updates and best practices, once a month.</p>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" data-lucide="mail"></i>
<input className="w-full rounded-md border border-white/10 bg-[#0b0f15] py-3 pl-10 pr-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 focus:border-cyan-400/40" placeholder="you@company.com" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100 hover:bg-cyan-400/15" type="submit">
<i className="w-4 h-4" data-lucide="rss"></i>
              Subscribe
            </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 py-10">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div>
<div className="inline-flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/[0.02] text-cyan-300 tracking-tight font-semibold">N</div>
<span className="text-[15px] tracking-tight text-neutral-100 font-semibold">NEURA</span>
</div>
<p className="mt-3 text-sm text-neutral-400">AI infrastructure to build, observe, and scale intelligent products.</p>
<div className="mt-4 flex items-center gap-3 text-neutral-400">
<a className="rounded-md border border-white/10 p-2 hover:border-cyan-400/30 hover:text-cyan-200" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="rounded-md border border-white/10 p-2 hover:border-cyan-400/30 hover:text-cyan-200" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="rounded-md border border-white/10 p-2 hover:border-cyan-400/30 hover:text-cyan-200" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-neutral-100">Product</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-cyan-200" href="#features">Features</a></li>
<li><a className="hover:text-cyan-200" href="#product">Orchestrator</a></li>
<li><a className="hover:text-cyan-200" href="#pricing">Pricing</a></li>
<li><a className="hover:text-cyan-200" href="#changelog">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-neutral-100">Developers</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-cyan-200" href="#docs">Docs</a></li>
<li><a className="hover:text-cyan-200" href="#sdk">SDKs</a></li>
<li><a className="hover:text-cyan-200" href="#status">Status</a></li>
<li><a className="hover:text-cyan-200" href="#security">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-neutral-100">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-cyan-200" href="#about">About</a></li>
<li><a className="hover:text-cyan-200" href="#careers">Careers</a></li>
<li><a className="hover:text-cyan-200" href="#contact">Contact</a></li>
<li><a className="hover:text-cyan-200" href="#terms">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-white/10 pt-6 text-xs text-neutral-500">
        © <span id="year"></span> Neura Technologies Inc. All rights reserved.
      </div>
</div>
</footer>


    </>
  );
}
