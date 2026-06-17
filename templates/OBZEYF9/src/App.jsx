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
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { width: 20, height: 20, 'stroke-width': 1.5 } });
      });

      // Mini chart
      const miniCtx = document.getElementById('miniChart')?.getContext('2d');
      if (miniCtx) {
        new Chart(miniCtx, {
          type: 'line',
          data: {
            labels: Array.from({length: 24}, (_, i) => i + 1),
            datasets: [{
              data: [3,4,3.5,5,4.2,6,7,6.2,7.4,7.1,8,7.8,8.4,8.1,8.9,9.3,9.1,9.7,10.2,10.5,10.1,10.9,11.2,11.5],
              borderColor: 'rgba(34,211,238,0.9)',
              borderWidth: 1.5,
              tension: 0.35,
              pointRadius: 0,
              fill: true,
              backgroundColor: (ctx) => {
                const {chart} = ctx;
                const {ctx: c, chartArea} = chart;
                if (!chartArea) return 'rgba(34,211,238,0.08)';
                const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                gradient.addColorStop(0, 'rgba(34,211,238,0.18)');
                gradient.addColorStop(1, 'rgba(34,211,238,0.02)');
                return gradient;
              }
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            },
            elements: { line: { borderJoinStyle: 'round' } }
          }
        });
      }

      // Impact chart
      const impactCtx = document.getElementById('impactChart')?.getContext('2d');
      if (impactCtx) {
        new Chart(impactCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 8 }, (_, i) => `W${i+1}`),
            datasets: [
              {
                label: 'Assets',
                data: [300, 410, 520, 480, 650, 720, 760, 820],
                borderColor: 'rgba(99,102,241,1)',
                backgroundColor: 'rgba(99,102,241,0.15)',
                pointRadius: 0,
                tension: 0.35,
                fill: true,
                borderWidth: 1.5
              },
              {
                label: 'Approval time',
                data: [12, 11, 10, 9.5, 8.5, 7.2, 7.0, 6.8],
                borderColor: 'rgba(16,185,129,1)',
                backgroundColor: 'rgba(16,185,129,0.12)',
                pointRadius: 0,
                tension: 0.35,
                yAxisID: 'y1',
                borderWidth: 1.5
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 10 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                ticks: { display: false }
              },
              y1: {
                position: 'right',
                grid: { display: false },
                ticks: { display: false }
              }
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
      <div className="aura-background-component top-0 w-full -z-10 h-screen fixed"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div></div>

<div className="pointer-events-none fixed inset-0 -z-10">

<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.7) 1px, transparent 1px), radial-gradient(1px 1px at 90px 70px, rgba(255,255,255,0.5) 1px, transparent 1px), radial-gradient(1px 1px at 140px 120px, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '120px 120px, 140px 140px, 160px 160px'}}></div>

<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 50% -10%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(900px 500px at -10% 10%, rgba(147,51,234,0.10), transparent 60%), radial-gradient(900px 600px at 110% 0%, rgba(20,184,166,0.08), transparent 60%)'}}></div>

<div className="absolute inset-x-0 top-0 h-px bg-white/5"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-white/5"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d12]/60">
<div className="mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between border-b border-white/10">
<div className="flex items-center gap-3">
<div className="relative grid size-9 place-items-center rounded-md ring-1 ring-white/15 bg-white/5">
<span className="text-xs font-semibold tracking-tight">AF</span>
<div className="pointer-events-none absolute -inset-px rounded-md ring-1 ring-white/10"></div>
</div>
<span className="text-sm md:text-base font-medium text-white/90 tracking-tight">Artiflow</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-zinc-300">
<a className="hover:text-white hover:underline underline-offset-4" href="#features">Features</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#automation">Automation</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#pricing">Pricing</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#cases">Customers</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#docs">Docs</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 px-3.5 py-2 text-sm text-white/90 hover:border-white/20 hover:bg-white/5 transition-colors">
<svg className="lucide lucide-log-in size-4" data-lucide="log-in" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Sign in
            </button>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-3.5 py-2 text-sm font-medium hover:bg-white/90 transition-colors">
<svg className="lucide lucide-rocket size-4" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Start for free
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24 md:pb-12">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
<span className="inline-flex size-1.5 rounded-full bg-emerald-400"></span>
              AI-assisted assets at scale
              <span className="text-zinc-500">·</span>
<span className="text-white/80">New</span>
</div>
<h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Design, version and ship assets with precision
            </h1>
<p className="mt-4 text-base md:text-lg text-zinc-300/90">
              Artiflow is the creative operations layer for modern teams—generate, review, and deliver on-brand assets across channels with automated checks, variants, and approvals.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors" href="#demo">
<svg className="lucide lucide-play-circle size-4" data-lucide="play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch demo
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 hover:border-white/20 hover:bg-white/10 transition-colors" href="#get-started">
<svg className="lucide lucide-wand-2 size-4" data-lucide="wand-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                Generate sample
              </a>
</div>
<div className="mt-6 flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="user" className="size-8 rounded-full ring-2 ring-[#0b0d12]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="user" className="size-8 rounded-full ring-2 ring-[#0b0d12]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="user" className="size-8 rounded-full ring-2 ring-[#0b0d12]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="size-8 grid place-items-center rounded-full ring-2 ring-[#0b0d12] bg-white/10 text-[10px]">1k+</div>
</div>
<span className="text-xs text-zinc-400">Trusted by product, brand and growth teams</span>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2">
<div className="absolute inset-0 pointer-events-none" style={{maskImage: 'radial-gradient(80% 80% at 50% 20%, black 40%, transparent 90%)', WebkitMaskImage: 'radial-gradient(80% 80% at 50% 20%, black 40%, transparent 90%)'}}>

<div className="absolute -top-24 -left-24 size-[28rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(147,51,234,0.8), transparent), radial-gradient(closest-side, rgba(59,130,246,0.6), transparent)', animation: 'spin 28s linear infinite'}}></div>
<div className="absolute -bottom-24 -right-24 size-[26rem] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(20,184,166,0.75), transparent), radial-gradient(closest-side, rgba(236,72,153,0.5), transparent)', animation: 'spin 32s linear infinite reverse'}}></div>
<div className="absolute top-24 left-1/2 -translate-x-1/2 size-72 rounded-full blur-2xl opacity-25" style={{background: 'radial-gradient(closest-side, rgba(250,204,21,0.25), transparent 60%)', animation: 'spin 40s linear infinite'}}></div>

<div className="absolute inset-0 grid place-items-center">
<div className="relative size-[23rem] rounded-full border border-white/10">
<div className="absolute inset-0 rounded-full opacity-30" style={{background: 'conic-gradient(from 0deg, rgba(255,255,255,0.12), rgba(255,255,255,0) 50%, rgba(255,255,255,0.12))', animation: 'spin 18s linear infinite'}}></div>
<div className="absolute inset-8 rounded-full border border-white/[0.06]"></div>
<div className="absolute inset-16 rounded-full border border-white/[0.04]"></div>

<div className="absolute inset-0" style={{animation: 'spin 22s linear infinite'}}>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]"></div>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-fuchsia-300 shadow-[0_0_16px_rgba(217,70,239,0.7)]"></div>
<div className="absolute top-1/2 -left-1 -translate-y-1/2 size-2 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(139,92,246,0.7)]"></div>
<div className="absolute top-1/2 -right-1 -translate-y-1/2 size-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.7)]"></div>
</div>
</div>
</div>
</div>

<div className="relative rounded-xl border border-white/10 bg-[#0d1117]">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<span className="size-2.5 rounded-full bg-red-500/80"></span>
<span className="size-2.5 rounded-full bg-yellow-400/80"></span>
<span className="size-2.5 rounded-full bg-emerald-400/80"></span>
</div>
<span className="text-xs text-zinc-400">Artiflow • Project Atlas</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-users size-4" data-lucide="users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    12 collaborators
                  </div>
</div>
<div className="grid md:grid-cols-12 gap-0">

<aside className="md:col-span-4 border-r border-white/10 p-3">
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
<svg className="lucide lucide-search size-4" data-lucide="search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                      Search
                    </div>
<div className="space-y-2">
<button className="w-full flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.08] transition">
<span className="flex items-center gap-2">
<svg className="lucide lucide-folder size-4" data-lucide="folder" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> Campaign • Q3
                        </span>
<span className="text-xs text-zinc-400">8</span>
</button>
<button className="w-full flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.08] transition">
<span className="flex items-center gap-2">
<svg className="lucide lucide-layers size-4" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Variants
                        </span>
<span className="text-xs text-zinc-400">32</span>
</button>
<button className="w-full flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/[0.08] transition">
<span className="flex items-center gap-2">
<svg className="lucide lucide-sparkles size-4" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> AI Recipes
                        </span>
<span className="text-xs text-zinc-400">5</span>
</button>
</div>
<div className="mt-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<svg className="lucide lucide-line-chart size-4" data-lucide="line-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                          Throughput
                        </div>
<span className="text-xs text-emerald-400">+18%</span>
</div>
<div>
<div className="h-28">
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

<div className="h-full">
<canvas height="112" id="miniChart" style={{display: 'block', boxSizing: 'border-box', height: '112px', width: '141px'}} width="141"></canvas>
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
</aside>

<div className="md:col-span-8 p-3">
<div className="grid sm:grid-cols-2 gap-3">
<div className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Creative grid" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-3 text-sm text-zinc-300 flex items-center justify-between">
<span className="truncate">Landing visuals • v12</span>
<span className="inline-flex items-center gap-1 text-emerald-400">
<svg className="lucide lucide-check-circle size-4" data-lucide="check-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                            Passed
                          </span>
</div>
</div>
<div className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Render" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-3 text-sm text-zinc-300 flex items-center justify-between">
<span className="truncate">Ad set • social • A/B</span>
<span className="inline-flex items-center gap-1 text-yellow-300">
<svg className="lucide lucide-alert-triangle size-4" data-lucide="alert-triangle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                            Review
                          </span>
</div>
</div>
<div className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Brand layout" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-3 text-sm text-zinc-300 flex items-center justify-between">
<span className="truncate">Shop banners • 6 locales</span>
<span className="inline-flex items-center gap-1 text-cyan-300">
<svg className="lucide lucide-sparkles size-4" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                            Auto-gen
                          </span>
</div>
</div>
<div className="rounded-lg overflow-hidden border border-white/10 bg-white/[0.03]">
<img alt="Poster" className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-3 text-sm text-zinc-300 flex items-center justify-between">
<span className="truncate">Poster • event • v3</span>
<span className="inline-flex items-center gap-1 text-zinc-300">
<svg className="lucide lucide-history size-4" data-lucide="history" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
                            v3
                          </span>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-xs text-zinc-300">
<svg className="lucide lucide-cpu size-4" data-lucide="cpu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                        Updated 2m ago • 4 tasks running
                      </div>
<button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs hover:bg-white/10">
<svg className="lucide lucide-zap size-4" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        Optimize
                      </button>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-zinc-400 tracking-tight">AXL</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-zinc-400 tracking-tight">NOVA</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-zinc-400 tracking-tight">ORBIT</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-zinc-400 tracking-tight">METR</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-zinc-400 tracking-tight">KITE</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm text-zinc-400 tracking-tight">ARC</div>
</div>
</div>
</section>

<section className="relative" id="features">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Everything you need to run creative ops</h2>
<p className="mt-3 text-zinc-300/90">Automate repetitive work, enforce brand rules, and collaborate in real time—without losing craft.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-sparkles size-5" data-lucide="sparkles" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm">AI Recipes</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Reusable generation pipelines</h3>
<p className="mt-1.5 text-sm text-zinc-400">Prompt once, templatize, and scale to channels with safe parameters and approvals.</p>
<div className="h-28 bg-gradient-to-br from-fuchsia-500/10 via-cyan-500/10 to-indigo-500/10 bg-[url(https://images.unsplash.com/photo-1643780668909-580822430155?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mt-4"></div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-layers size-5" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-sm">Variants</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Multi-locale &amp; size variants</h3>
<p className="mt-1.5 text-sm text-zinc-400">Autofit layouts and adapt copy across languages with rules and fallback styles.</p>
<div className="h-28 bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-cyan-500/10 bg-[url(https://images.unsplash.com/photo-1601315488950-3b5047998b38?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mt-4"></div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-shield-check size-5" data-lucide="shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Brand Guard</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Automated checks &amp; scoring</h3>
<p className="mt-1.5 text-sm text-zinc-400">Color, contrast, logo clearspace, and legal copy—checked before it ships.</p>
<div className="h-28 bg-gradient-to-tl from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 bg-[url(https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mt-4"></div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-workflow size-5" data-lucide="workflow" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-sm">Approvals</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Fast reviews with context</h3>
<p className="mt-1.5 text-sm text-zinc-400">Versioned threads, roles, and policy-aware routing to the right approver.</p>
<div className="h-28 bg-gradient-to-br from-blue-500/10 via-sky-500/10 to-cyan-500/10 bg-[url(https://images.unsplash.com/photo-1643228995868-bf698f67d053?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mt-4"></div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-git-branch size-5" data-lucide="git-branch" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="text-sm">Versioning</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Asset history &amp; diffs</h3>
<p className="mt-1.5 text-sm text-zinc-400">Compare renders, roll back safely, and audit who changed what.</p>
<div className="h-28 bg-gradient-to-br from-zinc-500/10 via-slate-500/10 to-white/5 bg-[url(https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mt-4"></div>
</div>
<div className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-plug size-5" data-lucide="plug" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
<span className="text-sm">Integrations</span>
</div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Connect to your stack</h3>
<p className="mt-1.5 text-sm text-zinc-400">Figma, storage, ad managers, CDNs, and webhooks—no fragile glue.</p>
<div className="h-28 bg-gradient-to-tr from-rose-500/10 via-orange-500/10 to-amber-500/10 bg-[url(https://images.unsplash.com/photo-1680539208269-e7c8898c0713?w=800&amp;q=80)] bg-cover border-white/10 border rounded-lg mt-4"></div>
</div>
</div>
</div>
</section>

<section className="relative" id="automation">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-2 gap-6 items-start">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-bot size-5" data-lucide="bot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-sm">Automation</span>
</div>
<h3 className="mt-2 text-2xl font-semibold tracking-tight">Guardrails and quality, automated</h3>
<p className="mt-2 text-sm text-zinc-400">
              Set rules once—Artiflow runs checks and fixes while generation happens. Define fallback fonts, contrast bounds, logo safe-zones, and content rules.
            </p>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2">
<svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Auto-crop and adaptive layout for every size
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Multi-locale translation with tone controls
              </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Policy-aware routing for approvals
              </li>
</ul>
<div className="mt-5 rounded-lg border border-white/10 bg-[#0d1117] p-4">
<div className="text-xs text-zinc-400 flex items-center gap-2">
<svg className="lucide lucide-code-2 size-4" data-lucide="code-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                Example recipe
              </div>
<pre className="mt-2 overflow-x-auto text-[11px] leading-relaxed text-zinc-200"><code>{
  "recipe": "social_ad_multi_locale",
  "input": {
    "brand": "Artiflow",
    "headline": "Create assets at scale",
    "image": "hero.jpg",
    "locales": ["en-US","de-DE","ja-JP"]
  },
  "constraints": {
    "contrast": "AA",
    "logoClearspace": 12,
    "ctaTone": "positive"
  },
  "outputs": ["1080x1080","1200x628","1080x1920"]
}</code></pre>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-zinc-300">
<svg className="lucide lucide-bar-chart-3 size-5" data-lucide="bar-chart-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-sm">Impact</span>
</div>
<span className="text-xs text-emerald-400">+31% faster time-to-publish</span>
</div>
<div className="mt-4 h-[280px] rounded-lg border border-white/10 bg-[#0d1117] p-3">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">
<div className="h-full">

<div className="h-full">
<canvas height="254" id="impactChart" style={{display: 'block', boxSizing: 'border-box', height: '254px', width: '528px'}} width="528"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-center">
<div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-zinc-400">Assets/mo</div>
<div className="text-xl font-semibold tracking-tight">12k</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-zinc-400">Review time</div>
<div className="text-xl font-semibold tracking-tight">-43%</div>
</div>
<div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
<div className="text-xs text-zinc-400">Brand score</div>
<div className="text-xl font-semibold tracking-tight">96</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="cases">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<img alt="case" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="text-lg font-semibold tracking-tight">Fintech • 5 regions</h4>
<p className="mt-1 text-sm text-zinc-400">Scaled compliance-friendly ads across languages in 2 weeks.</p>
<div className="mt-2 text-xs text-emerald-400">+22% CTR</div>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<img alt="case" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="text-lg font-semibold tracking-tight">E‑commerce • Global</h4>
<p className="mt-1 text-sm text-zinc-400">Automated 3,500 PDP banners with brand guardrails.</p>
<div className="mt-2 text-xs text-emerald-400">-48% time to live</div>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<img alt="case" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<h4 className="text-lg font-semibold tracking-tight">SaaS • PLG</h4>
<p className="mt-1 text-sm text-zinc-400">Iterated brand refresh and shipped everywhere in a week.</p>
<div className="mt-2 text-xs text-emerald-400">96 brand score</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-10 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="font-medium tracking-tight">Sofia Nguyen</div>
<div className="text-xs text-zinc-400">Head of Brand, Orbit</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-300">We replaced six tools and cut our review cycles in half. The brand scores keep everything consistent without slowing us down.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-10 rounded-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<div className="font-medium tracking-tight">Ethan Park</div>
<div className="text-xs text-zinc-400">Growth Lead, Nova</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-300">We generate every variant automatically and still meet legal and brand constraints. It’s the ops layer we were missing.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-10 rounded-full" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<div className="font-medium tracking-tight">Priya Shah</div>
<div className="text-xs text-zinc-400">Product Design, AXL</div>
</div>
</div>
<p className="mt-3 text-sm text-zinc-300">The approvals are context-aware and fast. We ship in hours, not days.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple, scalable pricing</h2>
<p className="mt-2 text-zinc-300/90">Start free, add seats and usage as you grow.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="text-sm text-zinc-300 flex items-center gap-2">
<i className="size-5" data-lucide="seedling"></i>
              Starter
            </div>
<div className="mt-3 text-3xl font-semibold tracking-tight">$0</div>
<div className="text-xs text-zinc-400">Forever free</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>3 projects</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basic checks</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Community support</li>
</ul>
<button className="mt-5 w-full rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-white/90">Get started</button>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/[0.05] p-6 ring-1 ring-white/10">
<div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] text-white/90">Popular</div>
<div className="text-sm text-zinc-300 flex items-center gap-2">
<svg className="lucide lucide-stars size-5" data-lucide="stars" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Team
            </div>
<div className="mt-3 text-3xl font-semibold tracking-tight">$29</div>
<div className="text-xs text-zinc-400">per user / mo</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited projects</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>AI Recipes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Brand guard</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Approvals</li>
</ul>
<button className="mt-5 w-full rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-white/90">Start Team</button>
</div>
<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="text-sm text-zinc-300 flex items-center gap-2">
<svg className="lucide lucide-building-2 size-5" data-lucide="building-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
              Enterprise
            </div>
<div className="mt-3 text-3xl font-semibold tracking-tight">Custom</div>
<div className="text-xs text-zinc-400">custom pricing</div>
<ul className="mt-4 space-y-2 text-sm text-zinc-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SOC2, SSO, SCIM</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Regions &amp; SLAs</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check size-4 text-emerald-400" data-lucide="check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Advanced guardrails</li>
</ul>
<button className="mt-5 w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10">Contact sales</button>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-16">
<div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Ship on-brand creative 10x faster</h3>
<p className="mt-2 text-sm text-zinc-300">Start free and invite your team. No credit card required.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 justify-end">
<button className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-4 py-2.5 text-sm font-medium hover:bg-white/90">
<svg className="lucide lucide-rocket size-4" data-lucide="rocket" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Create workspace
              </button>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/90 hover:bg-white/10">
<svg className="lucide lucide-book-open size-4" data-lucide="book-open" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                Read docs
              </button>
</div>
</div>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 pb-10">
<div className="grid md:grid-cols-4 gap-6 border-t border-white/10 pt-8">
<div>
<div className="inline-flex items-center gap-2">
<div className="grid size-8 place-items-center rounded-md ring-1 ring-white/15 bg-white/5">
<span className="text-[10px] font-semibold tracking-tight">AF</span>
</div>
<span className="text-sm font-medium text-white/90">Artiflow</span>
</div>
<p className="mt-3 text-sm text-zinc-400">Creative ops, automated.</p>
</div>
<div>
<div className="text-xs uppercase text-zinc-400">Product</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li><a className="hover:text-white" href="#features">Features</a></li>
<li><a className="hover:text-white" href="#automation">Automation</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-xs uppercase text-zinc-400">Company</div>
<ul className="mt-3 space-y-2 text-sm text-zinc-300">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-xs uppercase text-zinc-400">Subscribe</div>
<div className="mt-3 flex gap-2">
<input className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" type="email"/>
<button className="rounded-md bg-white text-slate-900 px-3 py-2 text-sm font-medium hover:bg-white/90">Join</button>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
<span>© 2025 Artiflow, Inc.</span>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Privacy</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
