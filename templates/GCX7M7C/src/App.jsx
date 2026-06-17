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
<div className="absolute inset-0 opacity-[0.12]" style={{backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(168,85,247,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.25), transparent 35%), radial-gradient(circle at 65% 80%, rgba(16,185,129,0.22), transparent 30%)'}}></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
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
<svg className="lucide lucide-cpu h-4 w-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                Preorder
              </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-neutral-800/60 p-2 hover:bg-neutral-800 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
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
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
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
<h1 className="sm:text-5xl lg:text-6xl text-2xl font-light text-white tracking-wide font-merriweather">
                The AI chip engineered for MacBook
              </h1>
<p className="text-base sm:text-lg text-neutral-300/90">
                On‑device inference at desktop‑class throughput within laptop thermals. Designed for seamless macOS integration, ultra‑low latency, and private, secure compute.
              </p>
<div className="flex flex-col sm:flex-row gap-3 pt-2">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-[0_0_0_1px_rgba(99,102,241,.25)] transition-colors" href="#preorder">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  Reserve your unit
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-neutral-200 hover:text-white hover:bg-white/5 border border-white/10 transition-colors" href="#demo">
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Watch demo
                </a>
</div>
<div className="flex items-center gap-6 pt-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap h-5 w-5 text-amber-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm text-neutral-300">15W sustained</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-gauge h-5 w-5 text-sky-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
<span className="text-sm text-neutral-300">120 TOPS FP8</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check h-5 w-5 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-neutral-300">Secure enclave</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative mx-auto max-w-md rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-800/60 to-neutral-900/60 p-4 backdrop-blur">
<img alt="NOVA chip render" className="aspect-[4/3] w-full rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-circuit-board h-4 w-4 text-indigo-300" data-lucide="circuit-board" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M11 9h4a2 2 0 0 0 2-2V3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
<span className="text-xs text-neutral-300">NPU v3</span>
</div>
<p className="mt-2 text-[11px] text-neutral-400">Next‑gen tensor fabric with FP8/INT4 mixed compute.</p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-layers h-4 w-4 text-sky-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-xs text-neutral-300">Unified IO</span>
</div>
<p className="mt-2 text-[11px] text-neutral-400">Coherency with macOS memory &amp; fast paging.</p>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-thermometer-sun h-4 w-4 text-amber-300" data-lucide="thermometer-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9a4 4 0 0 0-2 7.5"></path><path d="M12 3v2"></path><path d="m6.6 18.4-1.4 1.4"></path><path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path><path d="M4 13H2"></path><path d="M6.34 7.34 4.93 5.93"></path></svg>
<span className="text-xs text-neutral-300">Thermals</span>
</div>
<p className="mt-2 text-[11px] text-neutral-400">Whisper‑quiet at sustained loads.</p>
</div>
</div>
</div>
<div className="pointer-events-none absolute -top-6 -right-4 hidden lg:block rounded-xl border border-white/10 bg-neutral-900/80 p-3 backdrop-blur">
<div className="flex items-center gap-2">
<svg className="lucide lucide-apple h-4 w-4 text-white" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
<span className="text-[11px] text-neutral-300">Optimized for macOS</span>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<div className="flex -space-x-3">
<img alt="Customer 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Customer 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Customer 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-neutral-900" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
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
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            Read Docs
          </a>
</div>
<div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
<div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-neutral-800 p-2">
<svg className="lucide lucide-cpu h-5 w-5 text-indigo-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Tensor Fabric</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">FP8/INT4 mixed‑precision cores with sparsity and low‑latency SRAM paths for real‑time decoding.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              120 TOPS at 15W
            </div>
</div>
<div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-neutral-800 p-2">
<svg className="lucide lucide-link h-5 w-5 text-sky-300" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Unified Memory IO</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Coherent access to system memory and intelligent paging keeps context windows in VRAM without stalls.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Swift &amp; Metal bindings
            </div>
</div>
<div className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3">
<div className="rounded-md border border-white/10 bg-neutral-800 p-2">
<svg className="lucide lucide-shield h-5 w-5 text-emerald-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Secure by Design</h3>
</div>
<p className="mt-3 text-sm text-neutral-400">Encrypted model storage, signed kernels, and an isolated enclave for keys and prompts.</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
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
<svg className="lucide lucide-mic h-4 w-4 text-fuchsia-300" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                    Streaming ASR
                  </div>
<p className="mt-2 text-xs text-neutral-400">Sub‑100ms latency with beam search on‑chip.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-image h-4 w-4 text-indigo-300" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                    Vision Models
                  </div>
<p className="mt-2 text-xs text-neutral-400">INT4 pipelines with learned quantization.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-code-2 h-4 w-4 text-sky-300" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                    Code Gen
                  </div>
<p className="mt-2 text-xs text-neutral-400">Speculative decoding kernel, KV cache compaction.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-brain-circuit h-4 w-4 text-emerald-300" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
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
let ctx = try device.makeContext(batch: 4, kvBytes: 512 &lt;&lt; 20)

// Run tokens
for token in prompt.tokens {
  let out = try model.decode(token, context: ctx)
  stream(out) // &lt; 20ms/token avg
}</code></pre>
<div className="mt-3 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                    SDK for macOS
                  </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/5 transition-colors" href="#">
<svg className="lucide lucide-terminal h-4 w-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
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
<canvas height="288" id="throughputChart" style={{display: 'block', boxSizing: 'border-box', height: '288px', width: '742px'}} width="742"></canvas>
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
<svg className="lucide lucide-clock h-4 w-4 text-emerald-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-neutral-300">First token</span>
</div>
<span className="text-sm text-white">78 ms</span>
</li>
<li className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-chevrons-right h-4 w-4 text-sky-300" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
<span className="text-sm text-neutral-300">Steady state</span>
</div>
<span className="text-sm text-white">17 ms/token</span>
</li>
<li className="flex items-center justify-between rounded-lg border border-white/10 bg-neutral-950/50 p-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-activity h-4 w-4 text-indigo-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
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
<svg className="lucide lucide-plug h-4 w-4 text-amber-300" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
                  Single‑cable setup
                </div>
<p className="mt-2 text-xs text-neutral-400">Power + data through one port.</p>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-800/50 p-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-layout-grid h-4 w-4 text-emerald-300" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                  macOS native
                </div>
<p className="mt-2 text-xs text-neutral-400">Menu bar controls &amp; Activity Monitor stats.</p>
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
<img alt="MacBook on desk" className="aspect-[16/10] w-full rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3 text-center">
<span className="text-xs text-neutral-400">Weight</span>
<div className="mt-1 text-sm text-white">240 g</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-950/40 p-3 text-center">
<span className="text-xs text-neutral-400">Noise</span>
<div className="mt-1 text-sm text-white">&lt; 22 dBA</div>
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
<input className="col-span-2 rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/40 transition-shadow" placeholder="you@studio.com" required="" type="email"/>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-3 text-sm font-medium text-white border border-indigo-400/30 transition-colors" type="submit">
<svg className="lucide lucide-inbox h-5 w-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
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
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="GitHub" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-github h-4 w-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a aria-label="YouTube" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-youtube h-4 w-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
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
