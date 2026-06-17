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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Mobile menu toggle
      (function () {
        const btn = document.querySelector('[data-menu-toggle]');
        const panel = document.querySelector('[data-menu-panel]');
        if (btn && panel) {
          btn.addEventListener('click', () => {
            panel.classList.toggle('hidden');
          });
        }
      })();

      // Letter reveal
      (function () {
        const nodes = document.querySelectorAll('[data-letter]');
        nodes.forEach((n, i) => {
          setTimeout(() => {
            n.style.transform = 'translateY(0)';
            n.style.opacity = '1';
          }, 120 + i * 120);
        });
      })();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Chart.js — Evals
      (function () {
        const el = document.getElementById('evalChart');
        if (!el) return;
        const ctx = el.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 180);
        gradient.addColorStop(0, 'rgba(255,255,255,0.5)');
        gradient.addColorStop(1, 'rgba(255,255,255,0.05)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6'],
            datasets: [
              {
                label: 'gpt‑4o‑mini',
                data: [64, 68, 71, 74, 78, 82],
                borderColor: '#ffffff',
                backgroundColor: gradient,
                fill: true,
                tension: 0.35,
                pointRadius: 2,
                borderWidth: 1.5
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0,0,0,0.8)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1
              }
            },
            scales: {
              x: {
                ticks: { color: 'rgba(255,255,255,0.7)', font: { size: 11 } },
                grid: { color: 'rgba(255,255,255,0.06)' }
              },
              y: {
                suggestedMin: 50,
                suggestedMax: 90,
                ticks: { color: 'rgba(255,255,255,0.7)', font: { size: 11 }, callback: v => v + '%' },
                grid: { color: 'rgba(255,255,255,0.06)' }
              }
            }
          }
        });
      })();
    
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
      <div className="aura-background-component top-0 w-full -z-10 absolute h-[815px]"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<header className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
<nav className="flex items-center justify-between border-b border-white/10 pb-4">

<a className="inline-flex items-center gap-2" href="#">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path d="M24 8 L40 36 H8 Z" fill="currentColor"></path>
</svg>
<span className="sm:text-base text-sm font-medium tracking-tight">Maya Chen</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#work">Work</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#stack">Stack</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#evals">Evals</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#about">About</a>
<a className="text-sm text-white/70 hover:text-white tracking-tight" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/15 border border-white/10 shadow-sm" href="#">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Resume</span>
</a>
<button className="md:hidden inline-flex items-center justify-center rounded-full p-2 border border-white/10 bg-white/5 hover:bg-white/10" data-menu-toggle="" type="button">
<svg className="lucide lucide-menu w-4 h-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
<span className="sr-only">Open menu</span>
</button>
</div>
</nav>

<div className="md:hidden hidden mt-3 rounded-2xl border border-white/10 bg-white/5 shadow-sm overflow-hidden" data-menu-panel="">
<div className="px-4 py-3 grid gap-2">
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#work">Work</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#stack">Stack</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#evals">Evals</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#about">About</a>
<a className="text-sm text-white/90 tracking-tight py-1.5" href="#contact">Contact</a>
</div>
<div className="border-t border-white/10 px-4 py-3">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10" href="#">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Download Resume</span>
</a>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<h1 className="leading-none text-white tracking-tight">
<span className="block text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-semibold">
<span className="tracking-tighter" data-letter="" style={{display: 'inline-block', transform: 'translateY(0px)', opacity: '1'}}>Maya</span>
<span className="block"></span>
<span className="tracking-tighter" data-letter="" style={{display: 'inline-block', transform: 'translateY(0px)', opacity: '1'}}>Chen</span>
</span>
</h1>
<p className="sm:mt-5 sm:text-3xl leading-relaxed max-w-2xl text-base text-white/70 tracking-tight mt-4">
            AI Engineer &amp; Frontend — shipping agentic systems, RAG pipelines, and developer UX. I blend product intuition with systems engineering to build fast, reliable LLM apps.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10" href="#work">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span>View Work</span>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/15 text-sm font-medium text-white tracking-tight bg-white/10 border-white/10 border rounded-full pt-3 pr-5 pb-3 pl-5 shadow-sm backdrop-blur" href="mailto:hello@mayachen.dev">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="">hello@mayachen.dev</span>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<svg className="lucide lucide-map-pin w-[18px] h-[18px] text-white/50 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<p className="text-sm font-medium tracking-tight">Based in San Francisco</p>
<p className="text-xs text-white/60 mt-0.5">Open to remote work</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<svg className="lucide lucide-cpu w-[18px] h-[18px] text-white/50 mt-0.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<div>
<p className="text-sm font-medium tracking-tight">AI Systems + Frontend</p>
<p className="text-xs text-white/60 mt-0.5">RAG, agents, benchmarks</p>
</div>
</div>
<div className="flex items-start gap-3 border-t border-white/10 pt-4">
<svg className="lucide lucide-check w-[18px] h-[18px] text-white/50 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<div>
<p className="text-sm font-medium tracking-tight">Currently available</p>
<p className="text-xs text-white/60 mt-0.5">Starting mid‑September</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative aspect-[4/5] sm:aspect-[5/6] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] bg-white/5 rounded-3xl border border-white/10">
<img alt="Maya at work" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b22c33a-b017-42bd-bab5-89be63576edd_800w.jpg" style={{filter: 'grayscale(100%) saturate(0.7) contrast(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="text-lg font-semibold tracking-tight text-white">82%</div>
</div>
<p className="text-[11px] text-white/70">pass@1 eval</p>
</div>
<div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="text-lg font-semibold tracking-tight text-white">780ms</div>
</div>
<p className="text-[11px] text-white/70">p95 latency</p>
</div>
<div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/15 p-3 shadow-lg">
<div className="flex items-center gap-2 mb-1">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="text-lg font-semibold tracking-tight text-white">1.2k</div>
</div>
<p className="text-[11px] text-white/70">tests</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 border-white/10 border-t mt-16 mr-auto ml-auto pt-10 pr-4 pl-4" id="work">
<div className="flex items-center justify-between">
<h2 className="text-xl sm:text-2xl tracking-tight">Recent Work</h2>
<a className="inline-flex items-center gap-2 text-sm tracking-tight text-white/70 hover:text-white" href="#">
<span className="">View all</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-6 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="RAG dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f16eab49-7c29-4933-aca8-f41b2c337f6f_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="">RAG Platform</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Vector‑backed Retrieval</h3>
<p className="text-sm text-white/70 mt-1">Hybrid search, chunking, schema‑aware re‑ranking, observability.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Agentic workflow" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41f44e91-a4d8-4042-8253-0c6a79be833b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span>Agents</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Agent Orchestrator</h3>
<p className="text-sm text-white/70 mt-1">Multi‑tool planning, retries, guardrails, tracing via OpenTelemetry.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Code copilot" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7fc6a2de-15db-4034-8a23-06b7a43997f6_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
<span className="">Developer UX</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Code Copilot</h3>
<p className="text-sm text-white/70 mt-1">Inline suggestions, context windows, evals, and latency budgets.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="Data pipeline" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a2cd53da-e321-41c2-9467-565b1a1b0b52_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span>Data Pipeline</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Real‑time Analytics</h3>
<p className="text-sm text-white/70 mt-1">Streaming data processing with Apache Kafka and real‑time dashboards.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[16/9]">
<img alt="ML model" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f826149d-7e8d-4b68-a4fd-cc16fb762142_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-brain w-4 h-4" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
<span className="">Machine Learning</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Custom Model Training</h3>
<p className="text-sm text-white/70 mt-1">Fine‑tuned transformers for domain‑specific tasks with custom datasets.</p>
</div>
</article>

<article className="group break-inside-avoid mb-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="API system" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/36460156-d7ce-43aa-89af-e013fb87ccfc_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-white/60">
<svg className="lucide lucide-server w-4 h-4" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span>API Architecture</span>
</div>
<h3 className="mt-2 text-base font-semibold tracking-tight">Scalable Backend</h3>
<p className="text-sm text-white/70 mt-1">Microservices architecture with GraphQL, Redis caching, and auto‑scaling.</p>
</div>
</article>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-16 mt-12 mr-auto ml-auto pr-4 pl-4">
<div className="relative overflow-hidden sm:p-8 text-white text-center bg-neutral-950 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12]"></div>
</div>
<div className="relative">
<h2 className="text-2xl sm:text-3xl tracking-tight">Trusted by product teams</h2>
<p className="text-white/70 mt-2">From seed‑stage startups to enterprise platform groups.</p>
<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4 mt-8 mb-8 items-center">
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex gap-3 hover:text-white transition-colors duration-300 text-zinc-400 items-center justify-center">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div></section>

<section className="max-w-7xl sm:px-6 sm:mt-20 border-t border-white/10 mt-16 mx-auto pt-10 px-4" id="stack">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-white/80" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 className="text-xl font-semibold tracking-tight">Tech Stack</h3>
</div>
<div className="mt-3 space-y-4">
<div>
<h4 className="text-sm font-medium text-white/80 mb-2">Frontend &amp; UI</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">TypeScript</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">Next.js 14</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">React 18</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">Tailwind CSS</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">Framer Motion</span>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-white/80 mb-2">AI &amp; Backend</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">Python 3.11+</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">FastAPI</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">LangChain</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">OpenAI API</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">Claude API</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">vLLM</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/10 border border-white/10">Ollama</span>
</div>
</div>
</div>
<div className="mt-4 p-3 bg-black/30 rounded-lg border border-white/10">
<p className="text-xs text-white/70 leading-relaxed">
<span className="font-medium text-white/80">Focus areas:</span> RAG optimization, agentic workflows, prompt engineering, model evaluation, and production-ready AI systems with sub-second latency.
    </p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-terminal w-4 h-4 text-white/80" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
<h3 className="text-xl font-semibold tracking-tight">RAG Pipeline</h3>
</div>
<span className="text-[11px] text-white/60">~42 lines</span>
</div>
<pre className="text-[12px] leading-relaxed overflow-auto text-white/90 bg-black/40 border-white/10 border rounded-xl mt-3 pt-3 pr-3 pb-3 pl-3" style={{fontFamily: '\'Geist Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas'}}><span style={{color: '#ff7b72'}}>from</span> <span style={{color: '#79c0ff'}}>fastapi</span> <span className="" style={{color: '#ff7b72'}}>import</span> <span style={{color: '#79c0ff'}}>FastAPI</span>
<span style={{color: '#ff7b72'}}>from</span> <span className="" style={{color: '#79c0ff'}}>rag</span> <span style={{color: '#ff7b72'}}>import</span> <span style={{color: '#79c0ff'}}>embed</span>, <span className="" style={{color: '#79c0ff'}}>search</span>, <span style={{color: '#79c0ff'}}>rerank</span>, <span style={{color: '#79c0ff'}}>answer</span>
<span style={{color: '#ff7b72'}}>from</span> <span style={{color: '#79c0ff'}}>tracers</span> <span className="" style={{color: '#ff7b72'}}>import</span> <span className="" style={{color: '#79c0ff'}}>trace</span>

<span style={{color: '#ffa657'}}>app</span> = <span style={{color: '#79c0ff'}}>FastAPI</span>()

<span style={{color: '#a5a5a5'}}>@</span><span className="" style={{color: '#ffa657'}}>app</span>.<span className="" style={{color: '#d2a8ff'}}>post</span>(<span className="" style={{color: '#a5d6ff'}}>"/ask"</span>)
<span style={{color: '#a5a5a5'}}>@</span><span style={{color: '#d2a8ff'}}>trace</span>(<span style={{color: '#a5d6ff'}}>"ask"</span>)
<span style={{color: '#ff7b72'}}>def</span> <span style={{color: '#d2a8ff'}}>ask</span>(<span style={{color: '#ffa657'}}>q</span>: <span style={{color: '#ff7b72'}}>str</span>, <span style={{color: '#ffa657'}}>user_id</span>: <span style={{color: '#ff7b72'}}>str</span>):
    <span className="" style={{color: '#ffa657'}}>q_vec</span> = <span className="" style={{color: '#d2a8ff'}}>embed</span>(<span className="" style={{color: '#ffa657'}}>q</span>)
    <span style={{color: '#ffa657'}}>chunks</span> = <span className="" style={{color: '#d2a8ff'}}>search</span>(<span className="" style={{color: '#ffa657'}}>q_vec</span>, <span style={{color: '#ffa657'}}>k</span>=<span className="" style={{color: '#a5d6ff'}}>20</span>, <span className="" style={{color: '#ffa657'}}>filters</span>={<span className="" style={{color: '#a5d6ff'}}>"user"</span>: <span style={{color: '#ffa657'}}>user_id</span>})
    <span className="" style={{color: '#ffa657'}}>ranked</span> = <span className="" style={{color: '#d2a8ff'}}>rerank</span>(<span className="" style={{color: '#ffa657'}}>q</span>, <span className="" style={{color: '#ffa657'}}>chunks</span>)[:<span style={{color: '#a5d6ff'}}>6</span>]
    <span style={{color: '#ff7b72'}}>return</span> <span style={{color: '#d2a8ff'}}>answer</span>(<span style={{color: '#ffa657'}}>q</span>, <span style={{color: '#ffa657'}}>ranked</span>, <span className="" style={{color: '#ffa657'}}>tools</span>=[<span className="" style={{color: '#a5d6ff'}}>"browser"</span>, <span className="" style={{color: '#a5d6ff'}}>"code"</span>], <span style={{color: '#ffa657'}}>guardrails</span>=<span style={{color: '#ff7b72'}}>True</span>)</pre>
</div>

<div className="bg-white/5 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-white/80" data-lucide="timeline"></svg>
<h3 className="text-xl font-semibold tracking-tight">Timeline</h3>
</div>
<ol className="mt-3">
<li className="relative pl-6 pb-4 border-l border-white/10">
<span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-white"></span>
<p className="text-xs text-white/60">2025</p>
<p className="text-sm font-medium tracking-tight">Independent — AI Engineer</p>
<p className="text-xs text-white/60 mt-1">Building production AI systems, RAG pipelines, and agentic workflows for startups and enterprise teams.</p>
</li>
<li className="relative pl-6 pb-4 border-l border-white/10">
<span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-white/80"></span>
<p className="text-xs text-white/60">2022 — 2024</p>
<p className="text-sm font-medium tracking-tight">Senior Product Designer — Analytics</p>
<p className="text-xs text-white/60 mt-1">Led design for data visualization platform, shipped ML-powered insights dashboard used by 10k+ analysts.</p>
</li>
<li className="relative pl-6 border-l border-white/10">
<span className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-white/60"></span>
<p className="text-xs text-white/60">2017 — 2021</p>
<p className="text-sm font-medium tracking-tight">Frontend Engineer — Commerce</p>
<p className="text-xs text-white/60 mt-1">Built responsive e-commerce platform with React/Node.js, optimized for mobile conversion and performance.</p>
</li>
</ol>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-20 border-t border-white/10 mt-16 mx-auto pt-10 px-4" id="evals">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<h2 className="text-2xl sm:text-3xl tracking-tight">Model Evals</h2>
<p className="text-white/70 mt-2">Continuous evaluation of prompts, tools, and retrieval quality across production workloads.</p>
<div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-line-chart w-4 h-4 text-white/80" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h3 className="text-base font-semibold tracking-tight">Pass@1 by model (weekly)</h3>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs text-white/60">Live data</span>
</div>
</div>
<div className="mt-3">
<div className="h-48">
<canvas className="" height="384" id="evalChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '671px'}} width="1342"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-lg border border-white/10 bg-black/30 p-3">
<div className="text-white/60">Current best</div>
<div className="text-lg font-semibold tracking-tight">82%</div>
<div className="text-xs text-green-400 mt-1">+4% this week</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-3">
<div className="text-white/60">Context win</div>
<div className="text-lg font-semibold tracking-tight">+10% RAG</div>
<div className="text-xs text-white/50 mt-1">vs baseline</div>
</div>
<div className="rounded-lg border border-white/10 bg-black/30 p-3">
<div className="text-white/60">Latency p95</div>
<div className="text-lg font-semibold tracking-tight">780ms</div>
<div className="text-xs text-yellow-400 mt-1">Within SLA</div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-target w-4 h-4 text-white/70" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<h4 className="text-sm font-medium tracking-tight">Eval Categories</h4>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-white/70">Code generation</span>
<span className="text-xs font-medium">87%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/70">Q&amp;A retrieval</span>
<span className="text-xs font-medium">82%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/70">Tool usage</span>
<span className="text-xs font-medium">76%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/70">Reasoning</span>
<span className="text-xs font-medium">73%</span>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-activity w-4 h-4 text-white/70" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h4 className="text-sm font-medium tracking-tight">Recent Tests</h4>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-white/90">GPT-4o prompt optimization</div>
<div className="text-[10px] text-white/60">2 hours ago</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-white/90">Claude-3.5 tool calling</div>
<div className="text-[10px] text-white/60">6 hours ago</div>
</div>
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-white/90">RAG chunk size A/B test</div>
<div className="text-[10px] text-white/60">12 hours ago</div>
</div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
</div>
</div>
</div>
</div>
<div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-chart-candlestick lucide-beaker w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chart-candlestick" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2"></path><path d="M17 3v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3"></path><path d="M3 3v16a2 2 0 0 0 2 2h16"></path></svg>
<h4 className="text-sm font-medium tracking-tight">Evaluation Framework</h4>
</div>
<span className="text-xs text-white/60">1,247 total tests</span>
</div>
<p className="text-xs text-white/70 leading-relaxed">
      Automated testing pipeline with custom metrics, human feedback loops, and A/B testing. 
      Tracks accuracy, hallucination rates, tool usage effectiveness, and user satisfaction scores across different model versions and prompt templates.
    </p>
</div>
</div>

<div className="lg:col-span-5" id="about">
<div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03]">
<div className="relative aspect-[4/3]">
<img alt="Workspace" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e636d5f8-9fec-44fe-b4dd-4ccb5a90c3da_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent"></div>
</div>
<div className="p-5">
<h3 className="text-xl font-semibold tracking-tight">About</h3>
<p className="mt-2 text-sm leading-relaxed text-white/70">
                I build AI products end‑to‑end: data ingestion, retrieval, prompt/tooling, evals, and production UI. Pragmatic about latency, cost, and safety — with strong attention to developer experience.
              </p>
<div className="mt-4 grid grid-cols-3 gap-4">
<div>
<div className="text-2xl tracking-tight">8+</div>
<p className="text-[11px] text-white/60 mt-0.5">Years</p>
</div>
<div>
<div className="text-2xl tracking-tight">120+</div>
<p className="text-[11px] text-white/60 mt-0.5">Projects</p>
</div>
<div className="">
<div className="text-2xl tracking-tight">50+</div>
<p className="text-[11px] text-white/60 mt-0.5">Clients</p>
</div>
</div>
<div className="mt-5 p-4 bg-black/30 rounded-xl border border-white/10">
<h4 className="text-sm font-medium tracking-tight text-white mb-2">Currently learning</h4>
<p className="text-sm text-white/70">Structured outputs, memory architectures, and low‑latency tool use with vLLM + GPU batching.</p>
</div>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10" href="#contact">
<svg className="lucide lucide-handshake w-4 h-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<span className="">Let’s collaborate</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 sm:mt-24 border-t border-white/10 mt-16 mx-auto mb-16 pt-10 px-4" id="contact">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white p-6 sm:p-8">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.07),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<h2 className="text-[14vw] sm:text-[10vw] lg:text-[7vw] leading-[0.9] font-semibold tracking-tight">
            Build with <span className="text-white/70">AI.</span>
</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:divide-x md:divide-white/10">
<div className="">
<p className="text-sm text-white/70">Email</p>
<a className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight" href="mailto:hello@mayachen.dev">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="break-all">hello@mayachen.dev</span>
</a>
</div>
<div className="md:pl-8">
<p className="text-sm text-white/70">Schedule</p>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-neutral-900 bg-white hover:bg-white/90 border border-white/10 mt-2" href="#">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Book a call</span>
</a>
</div>
<div className="md:pl-8">
<p className="text-sm text-white/70">Social</p>
<div className="flex flex-wrap gap-3 mt-2">
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 border border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 border border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 border border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</a>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-neutral-900 border border-white/10 hover:bg-white/90" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
<p className="text-[11px] text-white/60 text-center mt-6">©  Alex Chen — Available for freelance &amp; contracts<span id="year">2025</span></p>
</div>
</div>
</section>


    </>
  );
}
