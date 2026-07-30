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



      // Init Lucide icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
        // Chart.js: campaign performance snapshot
        const el = document.getElementById('chart-campaign1');
        if (el && window.Chart) {
          const ctx = el.getContext('2d');
          new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Baseline', 'Campaign'],
              datasets: [{
                label: 'Engagement Index',
                data: [100, 136],
                backgroundColor: ['#cbd5e1', '#0f172a'],
                borderRadius: 6,
                borderSkipped: false
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: { enabled: true }
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: '#475569', font: { family: 'Inter', weight: '500' } }
                },
                y: {
                  beginAtZero: true,
                  grid: { color: '#e2e8f0' },
                  ticks: { color: '#64748b', stepSize: 20, font: { family: 'Inter' } }
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
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white grid place-content-center tracking-tight text-sm font-semibold">AK</div>
<div className="text-sm text-slate-500">Associate Designer Portfolio</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm text-slate-700 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors" href="#contact">
<i className="w-4 h-4" data-lucide="send" style={{strokeWidth: `1.5`}}></i> Get in touch
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm hover:bg-slate-800 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="download" style={{strokeWidth: `1.5`}}></i> Resume
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="briefcase" style={{strokeWidth: `1.5`}}></i>
              Associate Designer — KPMG Focus
            </div>
<h1 className="mt-4 text-4xl md:text-5xl tracking-tight font-semibold text-slate-900">
              Strategic design for national visibility, executive alignment, and brand excellence
            </h1>
<p className="mt-4 text-slate-600 text-base leading-relaxed">
              I develop and direct high-level marketing and communications in print and digital—partnering with executive leaders, guiding conceptual direction, and modernizing systems with AI‑enhanced workflows.
            </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="megaphone" style={{strokeWidth: `1.5`}}></i> National campaigns
              </span>
<span className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="file-text" style={{strokeWidth: `1.5`}}></i> Print & digital
              </span>
<span className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="gallery-vertical-end" style={{strokeWidth: `1.5`}}></i> Art direction
              </span>
<span className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="squares" style={{strokeWidth: `1.5`}}></i> Brand systems
              </span>
<span className="inline-flex items-center gap-2 rounded-md bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs text-slate-700">
<i className="w-4 h-4" data-lucide="bot" style={{strokeWidth: `1.5`}}></i> AI platforms
              </span>
</div>
<div className="mt-8 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm hover:bg-slate-800 transition-colors" href="#work">
<i className="w-4 h-4" data-lucide="layout-dashboard" style={{strokeWidth: `1.5`}}></i> View portfolio pieces
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors" href="#about">
<i className="w-4 h-4" data-lucide="user" style={{strokeWidth: `1.5`}}></i> About me
              </a>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
<div className="flex items-start gap-4">
<img alt="Designer portrait" className="w-14 h-14 rounded-lg object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" />
<div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900">Role alignment snapshot</h3>
<p className="text-sm text-slate-600 mt-1">How I match the responsibilities</p>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-start gap-2">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check-circle" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm text-slate-700">Lead concept → production across print & digital</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check-circle" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm text-slate-700">Partner with execs to set direction & delivery</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check-circle" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm text-slate-700">Art direct work that advances brand strategy</div>
</div>
<div className="flex items-start gap-2">
<i className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="check-circle" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm text-slate-700">Promote new software & AI to elevate outcomes</div>
</div>
</div>
<div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
<div className="text-xs uppercase tracking-wide text-slate-500">Capabilities</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Editorial design</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Deck systems</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Visual narratives</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Templates</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Automation</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Selected portfolio pieces</h2>
<p className="mt-2 text-slate-600 text-base">Designed for impact at national scale, with strong executive partnership and brand rigor.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<span className="text-xs text-slate-500">Filter:</span>
<div className="inline-flex rounded-md border border-slate-300 overflow-hidden">
<button className="px-3 py-1.5 text-xs text-slate-700 bg-white hover:bg-slate-50">All</button>
<button className="px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50">Print</button>
<button className="px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50">Digital</button>
<button className="px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50">Brand</button>
<button className="px-3 py-1.5 text-xs text-slate-700 hover:bg-slate-50">AI</button>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<article className="group relative rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden rounded-t-xl">
<img alt="Campaign creative" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">National thought leadership campaign</h3>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="file-text" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="monitor" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
<p className="mt-2 text-sm text-slate-600">
                End‑to‑end design across whitepaper, landing page, LinkedIn ads, and executive roadshow deck; art direction to harmonize print and digital.
              </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">National visibility</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Executive collaboration</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Art direction</span>
</div>

<input className="peer absolute inset-0 opacity-0 cursor-pointer" id="p1" type="checkbox" />
<label className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer" htmlFor="p1">
<i className="w-4 h-4" data-lucide="expand" style={{strokeWidth: `1.5`}}></i> View case study
              </label>
<div className="max-h-0 overflow-hidden peer-checked:max-h-[120rem] transition-all duration-700">
<div className="mt-5 grid gap-5">
<div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
<div className="text-xs uppercase tracking-wide text-slate-500">Role & scope</div>
<div className="mt-2 grid sm:grid-cols-3 gap-4 text-sm text-slate-700">
<div>
<div className="text-slate-500 text-xs">My role</div>
                        Lead designer & art director
                      </div>
<div>
<div className="text-slate-500 text-xs">Channels</div>
                        Print editorial, web, social, presentation
                      </div>
<div>
<div className="text-slate-500 text-xs">Team</div>
                        Partnered with CMO office, copy, dev
                      </div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Editorial layout" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">Editorial spreads with typographic hierarchy, data callouts, and accessible color.</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Landing page" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="p-4 text-sm text-slate-700">Responsive landing page and social variants aligned with visual brand system.</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-5">
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="kanban-square" style={{strokeWidth: `1.5`}}></i>
<div className="font-medium text-slate-900 text-sm">Design system tokens</div>
</div>
<ul className="mt-3 text-sm text-slate-700 space-y-2">
<li>Type scale for print vs. web</li>
<li>Grid + spacing for whitepapers</li>
<li>Component library for decks</li>
</ul>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="presentation" style={{strokeWidth: `1.5`}}></i>
<div className="font-medium text-slate-900 text-sm">Executive roadshow deck</div>
</div>
<p className="mt-3 text-sm text-slate-700">Built a narrative structure with dynamic concept boards and data visualizations for leadership briefings.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="bar-chart-3" style={{strokeWidth: `1.5`}}></i>
<div className="font-medium text-slate-900 text-sm">Performance snapshot</div>
</div>
<div className="mt-3">
<div className="rounded-md border border-slate-200 bg-white p-3">
<div>
<div className="text-xs text-slate-500">Topline lift</div>
<div className="text-sm text-slate-700">+36% engagement vs. benchmark</div>
</div>
<div className="mt-3">
<div className="w-full h-40 overflow-hidden rounded border border-slate-200">
<div className="h-full w-full p-2">
<div className="h-full w-full bg-white rounded">
<div className="h-full w-full flex">
<div className="w-full">
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
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full">
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
<div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full">
<div className="h-full w-full"><div className="h-full w-full">
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
<canvas className="w-full h-full" id="chart-campaign1"></canvas>
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
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>
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
</div></div>
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
<p className="mt-2 text-xs text-slate-500">Metrics indicative; methodology available upon request.</p>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="text-xs uppercase tracking-wide text-slate-500">Executive alignment</div>
<p className="mt-2 text-sm text-slate-700">Hosted weekly creative reviews with VP Marketing and sector leaders. Framed options as decision trees to influence direction and accelerate sign‑off.</p>
</div>
</div>
</div>
</div>
</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></article>

<article className="group relative rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden rounded-t-xl">
<img alt="Executive report" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Executive quarterly report redesign</h3>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="pie-chart" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="presentation" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
<p className="mt-2 text-sm text-slate-600">
                A modular reporting system spanning PDF, web summary, and leadership deck—driving consistency and faster turnarounds.
              </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Design ops</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Templates</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Brand governance</span>
</div>
<input className="peer absolute inset-0 opacity-0 cursor-pointer" id="p2" type="checkbox" />
<label className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer" htmlFor="p2">
<i className="w-4 h-4" data-lucide="expand" style={{strokeWidth: `1.5`}}></i> View case study
              </label>
<div className="max-h-0 overflow-hidden peer-checked:max-h-[80rem] transition-all duration-700">
<div className="mt-5 grid gap-5">
<div className="grid md:grid-cols-3 gap-5">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="PDF spreads" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">PDF spreads emphasize accessibility and comparability across quarters.</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Web summary" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">Web summary with executive highlights and interactive charts.</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Leadership deck" className="w-full h-52 object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">Leadership deck templates enforce hierarchy and data clarity.</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
<div className="text-xs uppercase tracking-wide text-slate-500">Outcomes</div>
<ul className="mt-2 text-sm text-slate-700 space-y-2">
<li>Cut production time by 30% with layout tokens and master components.</li>
<li>Improved readability and narrative with consistent story beats.</li>
<li>Centralized sign‑off flow with annotated review PDFs.</li>
</ul>
</div>
</div>
</div>
</div>
</article>

<article className="group relative rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden rounded-t-xl">
<img alt="Brand system" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Visual brand system + templates</h3>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="squares" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="pen-tool" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
<p className="mt-2 text-sm text-slate-600">
                Componentized brand kit spanning typography, color, grids, and multi‑format templates for marketing and internal comms.
              </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Brand strategy</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Systems thinking</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Governance</span>
</div>
<input className="peer absolute inset-0 opacity-0 cursor-pointer" id="p3" type="checkbox" />
<label className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer" htmlFor="p3">
<i className="w-4 h-4" data-lucide="expand" style={{strokeWidth: `1.5`}}></i> View case study
              </label>
<div className="max-h-0 overflow-hidden peer-checked:max-h-[80rem] transition-all duration-700">
<div className="mt-5 grid gap-5">
<div className="rounded-lg border border-slate-200 p-4">
<div className="grid sm:grid-cols-3 gap-5">
<div>
<div className="text-xs uppercase tracking-wide text-slate-500">Guidelines</div>
<p className="mt-2 text-sm text-slate-700">Built a concise brand playbook with use‑cases and anti‑patterns.</p>
</div>
<div>
<div className="text-xs uppercase tracking-wide text-slate-500">Components</div>
<p className="mt-2 text-sm text-slate-700">Library of cover systems, charts, tables, and callouts for rapid assembly.</p>
</div>
<div>
<div className="text-xs uppercase tracking-wide text-slate-500">Rollout</div>
<p className="mt-2 text-sm text-slate-700">Workshop series and help desk for marketers and designers.</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Template grid" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">Master slide templates with baked‑in spacing and accessible color pairs.</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Brand elements" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">Reusable editorial modules for consistent long‑form content.</div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden rounded-t-xl">
<img alt="AI workflow" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">AI‑enabled creative operations</h3>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="bot" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="wand-2" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
<p className="mt-2 text-sm text-slate-600">
                Explored and piloted AI platforms to accelerate concepting, content scaling, and quality assurance across campaigns.
              </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Prompt systems</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Creative QA</span>
<span className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700">Automation</span>
</div>
<input className="peer absolute inset-0 opacity-0 cursor-pointer" id="p4" type="checkbox" />
<label className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer" htmlFor="p4">
<i className="w-4 h-4" data-lucide="expand" style={{strokeWidth: `1.5`}}></i> View case study
              </label>
<div className="max-h-0 overflow-hidden peer-checked:max-h-[80rem] transition-all duration-700">
<div className="mt-5 grid gap-5">
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="grid md:grid-cols-3 gap-5">
<div>
<div className="text-xs uppercase tracking-wide text-slate-500">Concept exploration</div>
<p className="mt-2 text-sm text-slate-700">Structured prompts to quickly generate moodboards and compositions aligned to brand strategy.</p>
</div>
<div>
<div className="text-xs uppercase tracking-wide text-slate-500">Content scaling</div>
<p className="mt-2 text-sm text-slate-700">Automated ad resizes and copy variants via spreadsheet‑driven pipelines.</p>
</div>
<div>
<div className="text-xs uppercase tracking-wide text-slate-500">QA & governance</div>
<p className="mt-2 text-sm text-slate-700">Guidelines for bias checks, IP compliance, and accessibility before publish.</p>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Prompt moodboard" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">AI‑assisted moodboards to facilitate faster exec alignment during concept reviews.</div>
</div>
<div className="rounded-lg border border-slate-200 overflow-hidden">
<img alt="Automation" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop" />
<div className="p-4 text-sm text-slate-700">Automation to output consistent asset sets across channels with brand checks.</div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group relative rounded-xl border border-slate-200 bg-white hover:shadow-lg transition-shadow xl:col-span-3">
<div className="aspect-[16/6] overflow-hidden rounded-t-xl">
<img alt="Concept presentation" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold">Dynamic concept presentations</h3>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="sliders-horizontal" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="sparkles" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
<p className="mt-2 text-sm text-slate-600">
                A decision‑forward format to present creative concepts to internal clients, structure feedback, and influence direction.
              </p>
<input className="peer absolute inset-0 opacity-0 cursor-pointer" id="p5" type="checkbox" />
<label className="mt-4 inline-flex items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors cursor-pointer" htmlFor="p5">
<i className="w-4 h-4" data-lucide="expand" style={{strokeWidth: `1.5`}}></i> View case study
              </label>
<div className="max-h-0 overflow-hidden peer-checked:max-h-[100rem] transition-all duration-700">
<div className="mt-5 grid md:grid-cols-3 gap-5">
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs uppercase tracking-wide text-slate-500">Frame</div>
<p className="mt-2 text-sm text-slate-700">Each concept includes problem statement, success criteria, and decision prompts.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs uppercase tracking-wide text-slate-500">Explore</div>
<p className="mt-2 text-sm text-slate-700">Three distinct territories with rationale, risks, and brand alignment notes.</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<div className="text-xs uppercase tracking-wide text-slate-500">Decide</div>
<p className="mt-2 text-sm text-slate-700">Dot‑voting and prioritized next steps to secure decisive stakeholder buy‑in.</p>
</div>
</div>
<div className="mt-5 overflow-x-auto">
<div className="flex gap-4 min-w-max">
<div className="w-72 shrink-0 rounded-lg border border-slate-200 overflow-hidden bg-white">
<img alt="Concept A" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="p-3 text-sm text-slate-700">Territory A — Editorial, confident, institutional.</div>
</div>
<div className="w-72 shrink-0 rounded-lg border border-slate-200 overflow-hidden bg-white">
<img alt="Concept B" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1579546928686-286c9fbde1ec?q=80&w=1200&auto=format&fit=crop" />
<div className="p-3 text-sm text-slate-700">Territory B — Data‑driven, modular, precise.</div>
</div>
<div className="w-72 shrink-0 rounded-lg border border-slate-200 overflow-hidden bg-white">
<img alt="Concept C" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop" />
<div className="p-3 text-sm text-slate-700">Territory C — Human‑centric, approachable.</div>
</div>
</div>
</div>
<div className="mt-5 rounded-lg border border-slate-200 p-4 bg-slate-50">
<div className="text-xs uppercase tracking-wide text-slate-500">Result</div>
<p className="mt-2 text-sm text-slate-700">Reduced approval cycles from 3 rounds to 1–2 rounds by structuring decisions and showing trade‑offs upfront.</p>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">Process</h2>
<p className="mt-2 text-slate-600 text-base">From concept through production with clear checkpoints and stakeholder engagement.</p>
<div className="mt-8 grid md:grid-cols-4 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
<span className="text-sm">1</span>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Discover</h3>
<p className="mt-2 text-sm text-slate-700">Brief, audience, success metrics. Stakeholder map and constraints.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
<span className="text-sm">2</span>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Define</h3>
<p className="mt-2 text-sm text-slate-700">Concept territories, narrative, visual principles, decision prompts.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
<span className="text-sm">3</span>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Design</h3>
<p className="mt-2 text-sm text-slate-700">Iterate across print & digital. Build components and templates.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 text-white">
<span className="text-sm">4</span>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold">Deliver</h3>
<p className="mt-2 text-sm text-slate-700">QA, accessibility, prepress/dev handoff, post‑launch learnings.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="grid md:grid-cols-3 gap-10 items-start">
<div className="md:col-span-1">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900">About</h2>
<p className="mt-2 text-slate-600 text-base">Designer and art director focused on clarity, trust, and measurable impact.</p>
</div>
<div className="md:col-span-2">
<div className="grid sm:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="palette" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm font-medium text-slate-900">Craft</div>
</div>
<p className="mt-2 text-sm text-slate-700">Typography, layout systems, data visualization, and presentation design with precision.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="users" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm font-medium text-slate-900">Collaboration</div>
</div>
<p className="mt-2 text-sm text-slate-700">Comfortable with executive stakeholders; drive clarity and decisions in complex initiatives.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="cpu" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm font-medium text-slate-900">Tools</div>
</div>
<p className="mt-2 text-sm text-slate-700">Figma, Adobe CC, presentation suites; exploring AI for ideation, resizing, and QA.</p>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="shield-check" style={{strokeWidth: `1.5`}}></i>
<div className="text-sm font-medium text-slate-900">Standards</div>
</div>
<p className="mt-2 text-sm text-slate-700">Accessibility, brand governance, and compliance are embedded in my process.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-slate-900">Let’s talk</h3>
<p className="mt-2 text-sm text-slate-700">I’d love to share source files, templates, and live decks relevant to your teams.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm hover:bg-slate-800 transition-colors" href="mailto:alex@example.com">
<i className="w-4 h-4" data-lucide="mail" style={{strokeWidth: `1.5`}}></i> Email
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="calendar" style={{strokeWidth: `1.5`}}></i> Schedule
              </a>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-xs text-slate-500 flex items-center justify-between">
<div>© 2025 AK — Portfolio for KPMG Associate Designer</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="figma" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="twitter" style={{strokeWidth: `1.5`}}></i>
<i className="w-4 h-4" data-lucide="linkedin" style={{strokeWidth: `1.5`}}></i>
</div>
</div>
</footer>


    </>
  );
}
