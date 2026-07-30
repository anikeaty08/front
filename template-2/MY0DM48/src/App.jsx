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
      {

      // Mobile menu
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Lucide icons
      lucide.createIcons();

      // Chart.js - Throughput vs Power
      const ctx = document.getElementById('throughputChart');
      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['5W', '8W', '10W', '12W', '15W'],
            datasets: [
              {
                label: 'NOVA',
                data: [45, 70, 95, 112, 130],
                borderColor: 'rgb(99, 102, 241)',
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                tension: 0.34,
                borderWidth: 2,
                pointRadius: 2.5,
              },
              {
                label: 'Baseline iGPU',
                data: [22, 33, 41, 47, 50],
                borderColor: 'rgb(163, 163, 163)',
                backgroundColor: 'rgba(163, 163, 163, 0.15)',
                tension: 0.34,
                borderWidth: 2,
                pointRadius: 2.5,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                intersect: false,
                mode: 'index',
                backgroundColor: 'rgba(23,23,23,.9)',
                borderColor: 'rgba(255,255,255,.08)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#e5e5e5',
                padding: 10,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: 'rgba(229,229,229,0.8)', font: { size: 11 } },
                title: { display: true, text: 'Tokens/sec', color: '#e5e5e5', font: { size: 12 } },
                suggestedMin: 0
              }
            },
            elements: {
              line: { fill: true }
            }
          }
        });
      }
    
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: `radial-gradient(circle at 20% 10%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.25), transparent 35%), radial-gradient(circle at 65% 80%, rgba(16,185,129,0.22), transparent 30%)`}}></div>
<div className="absolute inset-0" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: `24px 24px`}}></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-2xl border border-white/10 bg-neutral-900/40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40">
<div className="flex items-center justify-between px-4 py-3 sm:px-6">
<a aria-label="NOVA" className="flex items-center gap-3" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-neutral-800 text-white">
<span className="text-[10px] tracking-tight font-semibold">NV</span>
</div>
<span className="text-base font-medium tracking-tight text-white/90">NOVA</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#product">Product</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#tech">Technology</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#benchmarks">Benchmarks</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#docs">Docs</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#partners">Partners</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="rounded-lg px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-white/5 border border-white/10 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-[0_0_0_1px_rgba(99,102,241,.25)] transition-colors" href="#preorder">
<i className="h-4 w-4" data-lucide="cpu" strokeWidth="1.5"></i>
                Preorder
              </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-neutral-800/60 p-2 hover:bg-neutral-800 transition-colors" id="menuBtn">
<i className="h-5 w-5 text-white" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10 px-4 py-3 sm:px-6" id="mobileNav">
<div className="grid gap-2">
<a className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5" href="#product">Product</a>
<a className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5" href="#tech">Technology</a>
<a className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5" href="#benchmarks">Benchmarks</a>
<a className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5" href="#docs">Docs</a>
<a className="rounded-md px-2 py-2 text-sm text-neutral-300 hover:text-white hover:bg-white/5" href="#partners">Partners</a>
<div className="mt-2 flex items-center gap-2">
<a className="flex-1 rounded-lg px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-white/5 border border-white/10" href="#contact">Contact</a>
<a className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30" href="#preorder">
<i className="h-4 w-4" data-lucide="zap" strokeWidth="1.5"></i>
                  Preorder
                </a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 px-6 py-16 sm:py-24 sm:px-10 lg:px-16">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center relative">
<div className="space-y-6">
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Shipping Pilot Units Q4
              </p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                The AI chip engineered for MacBook
              </h1>
<p className="text-base sm:text-lg text-neutral-300/90">
                On‑device inference at desktop‑class throughput within laptop thermals. Designed for seamless macOS integration, ultra‑low latency, and private, secure compute.
              </p>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-[0_0_0_1px_rgba(99,102,241,.25)] transition-colors" href="#preorder">
<i className="h-5 w-5" data-lucide="rocket" strokeWidth="1.5"></i>
                  Reserve your unit
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 border border-white/10 transition-colors" href="#demo">
<i className="h-5 w-5" data-lucide="play-circle" strokeWidth="1.5"></i>
                  Watch demo
                </a>
</div>
<div className="flex items-center gap-6 pt-6">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-amber-300" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">15W sustained</span>
</div>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-sky-300" data-lucide="gauge" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">120 TOPS FP8</span>
</div>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Secure enclave</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800/60 to-neutral-900/60 p-4 backdrop-blur">
<img alt="NOVA chip render" className="aspect-[4/3] w-full rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-indigo-300" data-lucide="circuit-board" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-300">NPU v3</span>
</div>
<p className="mt-2 text-[11px] text-neutral-400">Next‑gen tensor fabric with FP8/INT4 mixed compute.</p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-sky-300" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-300">Unified IO</span>
</div>
<p className="mt-2 text-[11px] text-neutral-400">Coherency with macOS memory & fast paging.</p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-amber-300" data-lucide="thermometer-sun" strokeWidth="1.5"></i>
<span className="text-xs text-neutral-300">Thermals</span>
</div>
<p className="mt-2 text-[11px] text-neutral-400">Whisper‑quiet at sustained loads.</p>
</div>
</div>
</div>
<div className="pointer-events-none absolute -top-6 -right-4 hidden lg:block rounded-xl border border-white/10 bg-neutral-900/80 p-3 backdrop-blur">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-white" data-lucide="apple" strokeWidth="1.5"></i>
<span className="text-[11px] text-neutral-300">Optimized for macOS</span>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<div className="flex -space-x-3">
<img alt="Customer 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" />
<img alt="Customer 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1000&auto=format&fit=crop" />
<img alt="Customer 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<p className="text-sm text-neutral-400">Trusted by early teams building private, on‑device AI assistants.</p>
</div>
</div>
</div>
</section>

<section className="pt-16 sm:pt-24" id="product">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8 sm:mb-12 flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Built for creators and engineers</h2>
<p className="mt-2 text-neutral-400">Low‑latency inference, integrated tooling, and developer‑first APIs on macOS.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 hover:bg-white/10 transition-colors" href="#docs">
<i className="h-4 w-4" data-lucide="book-open" strokeWidth="1.5"></i>
            Read Docs
          </a>
</div>
<div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
<div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-neutral-800 p-2">
<i className="h-5 w-5 text-indigo-300" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Tensor Fabric</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">FP8/INT4 mixed‑precision cores with sparsity and low‑latency SRAM paths for real‑time decoding.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
              120 TOPS at 15W
            </div>
</div>
<div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-neutral-800 p-2">
<i className="h-5 w-5 text-sky-300" data-lucide="link" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Unified Memory IO</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Coherent access to system memory and intelligent paging keeps context windows in VRAM without stalls.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
              Swift & Metal bindings
            </div>
</div>
<div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-neutral-800 p-2">
<i className="h-5 w-5 text-emerald-300" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Secure by Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Encrypted model storage, signed kernels, and an isolated enclave for keys and prompts.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i className="h-3.5 w-3.5 text-emerald-400" data-lucide="check" strokeWidth="1.5"></i>
              On‑device privacy
            </div>
</div>
</div>
</div>
</section>

<section className="pt-16 sm:pt-24" id="tech">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-10">
<div className="grid lg:grid-cols-2 gap-10">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Optimized for macOS + Metal</h3>
<p className="mt-3 text-neutral-400">Zero‑copy buffers, fused attention kernels, and a scheduler tuned for interactive workloads—voice, vision, and code.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-fuchsia-300" data-lucide="mic" strokeWidth="1.5"></i>
                    Streaming ASR
                  </div>
<p className="mt-2 text-xs text-neutral-400">Sub‑100ms latency with beam search on‑chip.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-indigo-300" data-lucide="image" strokeWidth="1.5"></i>
                    Vision Models
                  </div>
<p className="mt-2 text-xs text-neutral-400">INT4 pipelines with learned quantization.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-sky-300" data-lucide="code-2" strokeWidth="1.5"></i>
                    Code Gen
                  </div>
<p className="mt-2 text-xs text-neutral-400">Speculative decoding kernel, KV cache compaction.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-emerald-300" data-lucide="brain-circuit" strokeWidth="1.5"></i>
                    Fine‑tuning
                  </div>
<p className="mt-2 text-xs text-neutral-400">LoRA adapters applied in hardware mixing paths.</p>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-white/10 bg-neutral-800/40 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-rose-400/80"></div>
<div className="h-3 w-3 rounded-full bg-amber-400/80"></div>
<div className="h-3 w-3 rounded-full bg-emerald-400/80"></div>
</div>
<span className="text-[11px] text-neutral-400">Metal + Swift</span>
</div>
<pre className="mt-3 overflow-x-auto rounded-lg border border-white/10 bg-neutral-900/60 p-4 text-[12px] leading-relaxed text-neutral-200"><code>// Load model to NOVA
let device = NOVA.default()
let model = try device.loadModel("llm.fp8.nv")

// Allocate context
let ctx = try device.makeContext(batch: 4, kvBytes: 512 {"<"}{"<"} 20)

// Run tokens
for token in prompt.tokens {"{"}
  let out = try model.decode(token, context: ctx)
  stream(out) // {"<"} 20ms/token avg
{"}"}</code></pre>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="download" strokeWidth="1.5"></i>
                    SDK for macOS
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="terminal" strokeWidth="1.5"></i>
                    CLI Tools
                  </a>
</div>
</div>
<p className="mt-3 text-[11px] text-neutral-500">APIs subject to change. Metal kernels are signed and verified on load.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 sm:pt-24" id="benchmarks">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8 sm:mb-12">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Performance, measured</h3>
<p className="mt-2 text-neutral-400">Throughput vs. power on common model sizes. Tested on MacBook Pro (thermal envelope capped at 15W).</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
<h4 className="text-base font-medium tracking-tight text-white">Throughput vs Power</h4>
<p className="text-xs text-neutral-400">Tokens/sec (FP8) across power draw</p>
<div className="mt-3 rounded-lg border border-white/10 bg-neutral-950/50 p-2">
<div className="relative h-72">
<div className="h-full w-full">
<div className="h-full w-full">
<canvas id="throughputChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-3">
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2 py-1 text-[11px] text-neutral-300">
<span className="h-2 w-2 rounded-full bg-indigo-400"></span>NOVA
              </span>
<span className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2 py-1 text-[11px] text-neutral-300">
<span className="h-2 w-2 rounded-full bg-neutral-400"></span>Baseline iGPU
              </span>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-5">
<h4 className="text-base font-medium tracking-tight text-white">Latency (tokens)</h4>
<p className="text-xs text-neutral-400">Median decoding latency at batch=4</p>
<ul className="mt-3 space-y-3">
<li className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-emerald-300" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">First token</span>
</div>
<span className="text-sm text-white">78 ms</span>
</li>
<li className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-sky-300" data-lucide="chevrons-right" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Steady state</span>
</div>
<span className="text-sm text-white">17 ms/token</span>
</li>
<li className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-indigo-300" data-lucide="activity" strokeWidth="1.5"></i>
<span className="text-sm text-neutral-300">Sustained</span>
</div>
<span className="text-sm text-white">15W cap</span>
</li>
</ul>
<p className="mt-3 text-[11px] text-neutral-500">Numbers based on internal labs; workloads vary.</p>
</div>
</div>
</div>
</section>

<section className="pt-16 sm:pt-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">Designed for MacBook</h3>
<p className="mt-2 text-neutral-400">Plug‑in module over Thunderbolt 4 with low‑overhead drivers for Apple Silicon laptops. No daisy chains; bus saturation protection included.</p>
<div className="mt-5 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-amber-300" data-lucide="plug" strokeWidth="1.5"></i>
                  Single‑cable setup
                </div>
<p className="mt-2 text-xs text-neutral-400">Power + data through one port.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="h-4 w-4 text-emerald-300" data-lucide="layout-grid" strokeWidth="1.5"></i>
                  macOS native
                </div>
<p className="mt-2 text-xs text-neutral-400">Menu bar controls & Activity Monitor stats.</p>
</div>
</div>
<div className="mt-5 rounded-xl border border-white/10 bg-neutral-950/40 p-4">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-300">Supported Macs</span>
<span className="text-neutral-400">M1 • M2 • M3 • M4</span>
</div>
<div className="mt-3 h-1.5 rounded-full bg-white/10">
<div className="h-full w-4/5 rounded-full bg-indigo-500"></div>
</div>
<p className="mt-2 text-[11px] text-neutral-500">Requires macOS 14.4 or later.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
<img alt="MacBook on desk" className="aspect-[16/10] w-full rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2069&auto=format&fit=crop" />
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3 text-center">
<span className="text-xs text-neutral-400">Weight</span>
<div className="mt-1 text-sm text-white">240 g</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3 text-center">
<span className="text-xs text-neutral-400">Noise</span>
<div className="mt-1 text-sm text-white">{"<"} 22 dBA</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3 text-center">
<span className="text-xs text-neutral-400">IO</span>
<div className="mt-1 text-sm text-white">TB4 + PD</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 sm:pt-24" id="preorder">
<div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 sm:p-10 text-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Be first to build on NOVA</h3>
<p className="mt-2 text-neutral-400">Join the pilot—limited developer kits ship this quarter.</p>
<form className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<input className="col-span-2 rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/40 transition-shadow" placeholder="you@studio.com" required type="email" />
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-3 text-sm font-medium text-white border border-indigo-400/30 transition-colors" type="submit">
<i className="h-5 w-5" data-lucide="inbox" strokeWidth="1.5"></i>
              Join waitlist
            </button>
</form>
<p className="mt-3 text-[11px] text-neutral-500">We’ll never share your email. Unsubscribe anytime.</p>
</div>
</div>
</section>

<section className="pt-16 sm:pt-24" id="partners">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8">
<p className="text-center text-sm text-neutral-400">Backed by engineers from</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="flex items-center justify-center rounded-lg border border-white/10 bg-neutral-950/40 p-4">
<span className="text-base font-semibold tracking-tight text-white/80">AX</span>
</div>
<div className="flex items-center justify-center rounded-lg border border-white/10 bg-neutral-950/40 p-4">
<span className="text-base font-semibold tracking-tight text-white/80">VR</span>
</div>
<div className="flex items-center justify-center rounded-lg border border-white/10 bg-neutral-950/40 p-4">
<span className="text-base font-semibold tracking-tight text-white/80">QP</span>
</div>
<div className="flex items-center justify-center rounded-lg border border-white/10 bg-neutral-950/40 p-4">
<span className="text-base font-semibold tracking-tight text-white/80">LM</span>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-16 sm:pt-24 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 sm:p-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-neutral-800 text-white">
<span className="text-[10px] tracking-tight font-semibold">NV</span>
</div>
<span className="text-base font-medium tracking-tight text-white/90">NOVA</span>
</div>
<p className="mt-3 text-sm text-neutral-400">Private, on‑device AI acceleration for MacBook.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="GitHub" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a aria-label="YouTube" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" href="#">
<i className="h-4 w-4" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-medium tracking-tight text-white">Product</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white" href="#product">Overview</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#tech">Technology</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#benchmarks">Benchmarks</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#preorder">Preorder</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium tracking-tight text-white">Developers</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white" href="#docs">Docs</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#">SDK</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#">CLI</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#">Examples</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium tracking-tight text-white">Company</h5>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white" href="#partners">Partners</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#contact">Contact</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#">Privacy</a></li>
<li><a className="text-neutral-300 hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-neutral-500">© 2025 Nova Computing, Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-neutral-400 hover:text-white" href="#">Status</a>
<a className="text-xs text-neutral-400 hover:text-white" href="#">Security</a>
<a className="text-xs text-neutral-400 hover:text-white" href="#">Changelog</a>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
