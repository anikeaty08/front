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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
      


    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      const ctx = document.getElementById('userChart');
      if (ctx) {
        const gradient1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        gradient1.addColorStop(0, 'rgba(99,102,241,0.35)');
        gradient1.addColorStop(1, 'rgba(99,102,241,0.02)');

        const gradient2 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        gradient2.addColorStop(0, 'rgba(212,212,216,0.35)');
        gradient2.addColorStop(1, 'rgba(212,212,216,0.02)');

        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [
              {
                label: 'This year',
                data: [9,12,11,15,18,22,28,26,30,33,35,38],
                borderColor: 'rgb(99,102,241)',
                backgroundColor: gradient1,
                pointRadius: 0,
                tension: 0.35,
                fill: true
              },
              {
                label: 'Last year',
                data: [7,8,10,12,15,17,20,19,22,24,26,27],
                borderColor: 'rgba(212,212,216,0.8)',
                backgroundColor: gradient2,
                pointRadius: 0,
                tension: 0.35,
                borderDash: [6,4],
                fill: true
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                intersect: false,
                mode: 'index',
                backgroundColor: 'rgba(24,24,27,0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fafafa',
                bodyColor: '#e5e7eb',
                padding: 10
              }
            },
            scales: {
              x: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#a1a1aa', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)' },
                ticks: { color: '#a1a1aa', font: { size: 11 } }
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
      
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<iframe frameborder="0" height="100%" src="https://my.spline.design/chips-Lpmy2Q4HrMAxwGztMvtaZdY0" width="100%"></iframe>
</div>
<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-x-0 top-0 h-[60vh] bg-gradient-to-b from-indigo-500/10 via-sky-400/5 to-transparent blur-3xl"></div>
<div className="absolute -top-48 right-[-10%] h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[120px]"></div>
<div className="absolute -top-32 left-[-10%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"></div>
</div>
<header className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/babab39e-e57f-463f-9da7-4e10855da029_3840w.webp)] bg-cover bg-center">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 ring-1 ring-white/10">
<svg className="h-4 w-4 text-white" viewbox="0 0 24 24"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</span>
<span className="text-lg tracking-tight font-semibold">AuroraQ</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#">Product</a>
<a className="hover:text-white transition" href="#">Solutions</a>
<a className="hover:text-white transition" href="#">Pricing</a>
<a className="hover:text-white transition" href="#">Customers</a>
<a className="hover:text-white transition" href="#">Docs</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
            Log in
          </button>
<button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Get started
          </button>
<button className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 p-2 hover:bg-white/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>
<section className="overflow-hidden relative">
<div className="aura-background-component absolute inset-0 -z-10">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

<div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://images.unsplash.com/photo-1618005198919-d3d4b5a92c83?q=80&amp;w=1470&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-10">
<div className="mx-auto max-w-3xl text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
<svg className="lucide lucide-bell h-3.5 w-3.5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</span>
          New: Context Memory v2 with live actions
        </div>
<h1 className="sm:text-6xl md:text-7xl text-5xl font-semibold text-white tracking-tight mt-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)'}}>
          Build smarter products with adaptive AI
        </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-300">
          AuroraQ turns behavioral data into real-time decisions. Plan, automate, and learn from every interaction with privacy-first infrastructure.
        </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition" href="#">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            Create account
          </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition" href="#">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
            See live demo
          </a>
</div>
<p className="mt-4 text-xs text-neutral-400">
          No credit card required. 14‑day trial included.
        </p>
</div>
</div>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-2xl ring-1 ring-black/50">
<div className="flex flex-col lg:flex-row">
<aside className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-white/10 p-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</span>
<span className="text-sm font-semibold tracking-tight">AurQ Workspace</span>
</div>
<nav className="mt-6 space-y-1 text-sm">
<a className="group flex items-center gap-2 rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5" href="#"><svg className="lucide lucide-layout-dashboard h-4 w-4 text-neutral-400 group-hover:text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Overview</a>
<a className="group flex items-center gap-2 rounded-md bg-white/5 px-2 py-2 text-neutral-100" href="#"><svg className="lucide lucide-activity h-4 w-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Analytics</a>
<a className="group flex items-center gap-2 rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5" href="#"><svg className="lucide lucide-bot h-4 w-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg> Assistants</a>
<a className="group flex items-center gap-2 rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5" href="#"><svg className="lucide lucide-workflow h-4 w-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg> Flows</a>
<a className="group flex items-center gap-2 rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5" href="#"><svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Compliance</a>
<a className="group flex items-center gap-2 rounded-md px-2 py-2 text-neutral-300 hover:bg-white/5" href="#"><svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg> Settings</a>
</nav>
<div className="mt-6 rounded-lg border border-white/10 p-3">
<p className="text-xs text-neutral-400">Usage</p>
<div className="mt-2 h-2 w-full rounded-full bg-white/5">
<div className="h-2 rounded-full bg-indigo-500" style={{width: '66%'}}></div>
</div>
<p className="mt-2 text-xs text-neutral-400">66% of monthly actions</p>
</div>
</aside>
<main className="flex-1 p-4 sm:p-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Realtime Metrics</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> This week
                </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-3 py-1.5 text-xs font-medium text-neutral-200 hover:bg-neutral-800">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Export
                </button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-sky-500/10 to-sky-500/0 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Sessions</p>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">721K</p>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-indigo-500/10 to-indigo-500/0 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Signups</p>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">36.7K</p>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-500/10 to-emerald-500/0 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">New Users</p>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">1,156</p>
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-fuchsia-500/10 to-fuchsia-500/0 p-4">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-400">Active</p>
</div>
<p className="mt-2 text-2xl font-semibold tracking-tight">239K</p>
</div>
</div>
<div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="col-span-1 lg:col-span-2 rounded-xl border border-white/10 p-4 bg-neutral-900">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Users over time</h3>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 text-xs text-neutral-400"><span className="h-2 w-2 rounded-full bg-indigo-400"></span> This year</span>
<span className="inline-flex items-center gap-1 text-xs text-neutral-400"><span className="h-2 w-2 rounded-full bg-neutral-400"></span> Last</span>
</div>
</div>
<div className="mt-3 relative h-56">
<canvas className="absolute inset-0" height="448" id="userChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '268px'}} width="537"></canvas>
</div>
</div>
<div className="rounded-xl border border-white/10 p-4 bg-neutral-900">
<h3 className="text-base font-semibold tracking-tight">Traffic sources</h3>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm text-neutral-300">Organic</span>
</div>
<span className="text-sm text-neutral-100">54%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<span className="text-sm text-neutral-300">Referrals</span>
</div>
<span className="text-sm text-neutral-100">28%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span>
<span className="text-sm text-neutral-300">Paid</span>
</div>
<span className="text-sm text-neutral-100">18%</span>
</div>
</div>
</div>
</div>
</main>
<aside className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-white/10 p-4 space-y-6">
<div className="">
<h3 className="text-base font-semibold tracking-tight">Notifications</h3>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center rounded-md bg-emerald-500/15 text-emerald-300 p-1.5">
<svg className="lucide lucide-check-circle-2 h-4 w-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</span>
<div className="">
<p className="text-sm">Policy “PII Redaction” enabled for workspace.</p>
<p className="text-xs text-neutral-400">Just now</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center rounded-md bg-sky-500/15 text-sky-300 p-1.5">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</span>
<div>
<p className="text-sm">Alana was added to Workspace “Nova”.</p>
<p className="text-xs text-neutral-400">23m ago</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex items-center justify-center rounded-md bg-fuchsia-500/15 text-fuchsia-300 p-1.5">
<svg className="lucide lucide-git-merge h-4 w-4" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
</span>
<div>
<p className="text-sm">Flow “Enrich Lead” published.</p>
<p className="text-xs text-neutral-400">2h ago</p>
</div>
</li>
</ul>
</div>
<div className="">
<h3 className="text-base font-semibold tracking-tight">Team</h3>
<ul className="mt-3 space-y-3">
<li className="flex items-center gap-3">
<img alt="avatar-a" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm">Mina Sol</p>
<p className="text-xs text-neutral-400">Product</p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-crown h-3.5 w-3.5" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg> Owner
                  </span>
</li>
<li className="flex items-center gap-3">
<img alt="avatar-b" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm">Leo Park</p>
<p className="text-xs text-neutral-400">Data</p>
</div>
<span className="text-xs text-neutral-400">Editor</span>
</li>
<li className="flex items-center gap-3">
<img alt="avatar-c" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm">Rhea K.</p>
<p className="text-xs text-neutral-400">Engineering</p>
</div>
<span className="text-xs text-neutral-400">Viewer</span>
</li>
</ul>
</div>
</aside>
</div>
</div>
</div>
</section>
<section className="py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Everything you need to ship adaptive experiences</h2>
<p className="mt-3 text-neutral-300">From data collection to inference and controls—built for security, speed, and scale.</p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300">
<svg className="lucide lucide-workflow h-5 w-5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Visual flows</h3>
<p className="mt-2 text-sm text-neutral-400">Drag-and-drop playbooks with type-safe steps and versioning.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 text-sky-300">
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Privacy-first</h3>
<p className="mt-2 text-sm text-neutral-400">Row-level encryption, regional routing, and audit trails by default.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-fuchsia-500/15 text-fuchsia-300">
<svg className="lucide lucide-cpu h-5 w-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Inference router</h3>
<p className="mt-2 text-sm text-neutral-400">Smartly selects models by latency, cost, and accuracy targets.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
<svg className="lucide lucide-line-chart h-5 w-5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Causal analytics</h3>
<p className="mt-2 text-sm text-neutral-400">Measure lift with on-device cohorts and robust A/B testing.</p>
</div>
</div>
</div>
</section>
<section className="py-16">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-8">
<div className="flex flex-col md:flex-row items-center md:items-start gap-6">
<img alt="customer-face" className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-lg font-medium tracking-tight">“We replaced three services with AuroraQ. Our onboarding flow adjusts itself in real time, and activation improved by 19% in the first month.”</p>
<p className="mt-2 text-sm text-neutral-400">Amaya T., Head of Growth at LumenCart</p>
</div>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-800" href="#">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Read case study
          </a>
</div>
</div>
</div>
</section>
<section className="py-20">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-900/60 p-10 sm:p-14">
<img alt="mountains-bg" className="absolute inset-0 h-full w-full object-cover opacity-[0.08]" src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="relative">
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold">Deploy your first AI workflow in minutes</h3>
<p className="mt-3 text-neutral-300">SDKs for JS, Python, and Swift. Start with 100K actions free.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-100" href="#">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              Start free
            </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800" href="#">
<svg className="lucide lucide-code-2 h-4 w-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
              View API docs
            </a>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/5 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 ring-1 ring-white/10">
<svg className="h-4 w-4 text-white" viewbox="0 0 24 24"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" fill="none" stroke="currentColor" strokeWidth="1.5"></path></svg>
</span>
<span className="text-sm font-semibold tracking-tight">AuroraQ</span>
</div>
<nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-400">
<a className="hover:text-white" href="#">Status</a>
<a className="hover:text-white" href="#">Security</a>
<a className="hover:text-white" href="#">Changelog</a>
<a className="hover:text-white" href="#">Careers</a>
<a className="hover:text-white" href="#">Contact</a>
</nav>
</div>
<p className="mt-6 text-xs text-neutral-500">© 2025 AuroraQ, Inc. All rights reserved.</p>
</div>
</footer>




    </>
  );
}
