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
      
    // Theme: explicit dark/light apply and persist
    (function() {
      const root = document.documentElement;
      const btn = document.getElementById('themeToggle');
      const stored = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = stored || (prefersDark ? 'dark' : 'light');

      function applyTheme(mode) {
        root.classList.toggle('dark', mode === 'dark');
        localStorage.setItem('theme', mode);
        if (btn) btn.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        if (window.__threatChart) {
          updateChartColors(window.__threatChart);
          window.__threatChart.update();
        }
      }

      applyTheme(initial);

      btn?.addEventListener('click', () => {
        const next = root.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(next);
      });
    })();

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lucide icons
    window.lucide && lucide.createIcons && lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    // Kill Switch (Argus): persist and toggle UI
    (function() {
      const btn = document.getElementById('argusKillSwitch');
      if (!btn) return;
      const pill = btn.querySelector('.pill');
      const knob = btn.querySelector('.knob');

      function setState(active) {
        // active=false => kill switch engaged (Argus paused)
        const engaged = !active;
        btn.setAttribute('aria-checked', engaged ? 'true' : 'false');
        if (engaged) {
          pill.classList.remove('bg-neutral-200','dark:bg-white/10');
          pill.classList.add('bg-rose-500');
          knob.style.transform = 'translateX(16px)';
          btn.setAttribute('aria-label', 'Argus is paused. Click to resume');
        } else {
          pill.classList.add('bg-neutral-200','dark:bg-white/10');
          pill.classList.remove('bg-rose-500');
          knob.style.transform = 'translateX(0)';
          btn.setAttribute('aria-label', 'Argus is active. Click to engage kill switch');
        }
      }

      let argusActive = localStorage.getItem('argus-kill') === '1' ? false : true; // '1' means kill engaged
      setState(argusActive);

      btn.addEventListener('click', () => {
        argusActive = !argusActive;
        localStorage.setItem('argus-kill', argusActive ? '0' : '1');
        setState(argusActive);
      });
    })();

    // Chart.js - Threat Activity
    (function() {
      const el = document.getElementById('threatChart');
      if (!el) return;

      const labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
      const dataSets = {
        ALL: {
          req: labels.map((_, i) => 400 + Math.round(120 * Math.sin(i / 2) + Math.random() * 80)),
          blk: labels.map((_, i) => 90 + Math.round(40 * Math.cos(i / 3) + Math.random() * 30)),
          ano: labels.map((_, i) => 20 + Math.round(10 * Math.sin(i / 4) + Math.random() * 8))
        },
        ARGUS: {
          req: labels.map((_, i) => 520 + Math.round(140 * Math.sin(i / 2.2) + Math.random() * 60)),
          blk: labels.map((_, i) => 120 + Math.round(45 * Math.cos(i / 3.1) + Math.random() * 25)),
          ano: labels.map(() => 0)
        },
        ROCCO: {
          req: labels.map(() => 0),
          blk: labels.map(() => 0),
          ano: labels.map((_, i) => 25 + Math.round(16 * Math.sin(i / 2.5) + Math.random() * 10))
        }
      };

      function isDark() {
        return document.documentElement.classList.contains('dark');
      }

      function updateChartColors(chart) {
        const grid = isDark() ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
        const ticks = isDark() ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
        chart.options.scales.x.grid.color = grid;
        chart.options.scales.y.grid.color = grid;
        chart.options.scales.x.ticks.color = ticks;
        chart.options.scales.y.ticks.color = ticks;
        if (!chart.options.plugins) chart.options.plugins = {};
        chart.options.plugins.legend = chart.options.plugins.legend || {};
        chart.options.plugins.legend.labels = { color: ticks, usePointStyle: true, pointStyle: 'line', boxWidth: 10 };
        chart.options.plugins.tooltip = chart.options.plugins.tooltip || {};
        chart.options.plugins.tooltip.backgroundColor = isDark() ? 'rgba(17,24,39,0.9)' : 'rgba(255,255,255,0.95)';
        chart.options.plugins.tooltip.titleColor = isDark() ? '#ffffff' : '#0f172a';
        chart.options.plugins.tooltip.bodyColor = isDark() ? '#e5e7eb' : '#111827';
        chart.options.plugins.tooltip.borderColor = isDark() ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)';
        chart.options.plugins.tooltip.borderWidth = 1;
      }

      function getGradient(ctx, chartArea) {
        if (!chartArea) return 'rgba(79,70,229,0.15)';
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(79,70,229,0.35)');
        gradient.addColorStop(1, 'rgba(79,70,229,0.02)');
        return gradient;
      }

      const config = {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Requests',
              data: dataSets.ALL.req,
              borderColor: 'rgb(79,70,229)',
              backgroundColor: (ctx) => {
                const { chart } = ctx;
                const { ctx: c, chartArea } = chart;
                return getGradient(c, chartArea);
              },
              fill: true,
              borderWidth: 2,
              tension: 0.35,
              pointRadius: 0
            },
            {
              label: 'Blocked',
              data: dataSets.ALL.blk,
              borderColor: 'rgb(244,63,94)',
              backgroundColor: 'transparent',
              fill: false,
              borderWidth: 2,
              tension: 0.35,
              pointRadius: 0
            },
            {
              label: 'Anomalies',
              data: dataSets.ALL.ano,
              borderColor: 'rgb(245,158,11)',
              backgroundColor: 'transparent',
              fill: false,
              borderWidth: 2,
              tension: 0.35,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                usePointStyle: true,
                pointStyle: 'line',
                boxWidth: 10,
                color: 'rgba(0,0,0,0.6)'
              }
            },
            tooltip: {
              enabled: true
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(0,0,0,0.06)' },
              ticks: { color: 'rgba(0,0,0,0.6)' }
            },
            y: {
              grid: { color: 'rgba(0,0,0,0.06)' },
              ticks: { color: 'rgba(0,0,0,0.6)' }
            }
          }
        }
      };

      const chart = new Chart(el.getContext('2d'), config);
      window.__threatChart = chart;
      updateChartColors(chart);

      // Simple product switcher (if tabs exist)
      document.querySelectorAll('.product-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.product-tab').forEach(b => b.classList.remove('bg-white', 'dark:bg-neutral-900', 'text-neutral-900', 'dark:text-neutral-100', 'shadow-sm'));
          btn.classList.add('bg-white', 'dark:bg-neutral-900', 'text-neutral-900', 'dark:text-neutral-100', 'shadow-sm');
          const mode = btn.getAttribute('data-product') || 'ALL';
          chart.data.datasets[0].data = (mode === 'ALL' ? dataSets.ALL.req : mode === 'ARGUS' ? dataSets.ARGUS.req : dataSets.ROCCO.req);
          chart.data.datasets[1].data = (mode === 'ALL' ? dataSets.ALL.blk : mode === 'ARGUS' ? dataSets.ARGUS.blk : dataSets.ROCCO.blk);
          chart.data.datasets[2].data = (mode === 'ALL' ? dataSets.ALL.ano : mode === 'ARGUS' ? dataSets.ARGUS.ano : dataSets.ROCCO.ano);
          chart.update();
        });
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
      

<div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden select-none">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{width: `70rem`, height: `70rem`, background: `radial-gradient(ellipse at center, rgba(99,102,241,0.30) 0%, rgba(168,85,247,0.24) 30%, rgba(34,197,94,0.18) 55%, rgba(6,182,212,0.16) 75%, transparent 85%)`, filter: `blur(85px)`, opacity: `.60`}}></div>

<div className="absolute -top-40 left-1/2 -translate-x-1/2">
<svg className="w-[140rem] opacity-70 blur-3xl mix-blend-screen" viewBox="0 0 1920 320">
<defs>
<lineargradient gradienttransform="translate(0,0)" id="bg-wave-1" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#6366F1" stop-opacity="0.85"></stop>
<stop offset="45%" stop-color="#A855F7" stop-opacity="0.75"></stop>
<stop offset="75%" stop-color="#06B6D4" stop-opacity="0.70"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0.65"></stop>
<animatetransform attributename="gradientTransform" dur="26s" repeatcount="indefinite" type="translate" values="0 0; 0.02 0; 0 0"></animatetransform>
</lineargradient>
</defs>
<path d="M0,128 C320,256 640,0 960,128 C1280,256 1600,0 1920,128 L1920,0 L0,0 Z" fill="url(#bg-wave-1)">
<animatetransform attributename="transform" dur="32s" repeatcount="indefinite" type="translate" values="0 0; 28 0; 0 0"></animatetransform>
</path>
</svg>
</div>

<div className="absolute -bottom-44 left-1/2 -translate-x-1/2">
<svg className="w-[150rem] opacity-70 blur-3xl rotate-6 mix-blend-screen" viewBox="0 0 1920 320">
<defs>
<lineargradient gradienttransform="translate(0,0)" id="bg-wave-2" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#22D3EE" stop-opacity="0.75"></stop>
<stop offset="40%" stop-color="#818CF8" stop-opacity="0.75"></stop>
<stop offset="80%" stop-color="#F472B6" stop-opacity="0.70"></stop>
<stop offset="100%" stop-color="#A78BFA" stop-opacity="0.65"></stop>
<animatetransform attributename="gradientTransform" dur="30s" repeatcount="indefinite" type="translate" values="0 0; -0.02 0; 0 0"></animatetransform>
</lineargradient>
</defs>
<path d="M0,192 C240,96 480,288 720,192 C960,96 1200,288 1440,192 C1680,96 1800,224 1920,160 L1920,320 L0,320 Z" fill="url(#bg-wave-2)">
<animatetransform attributename="transform" dur="38s" repeatcount="indefinite" type="translate" values="0 0; -24 0; 0 0"></animatetransform>
</path>
</svg>
</div>
</div>
<div className="min-h-screen">

<aside className="hidden md:flex md:w-72 lg:w-80 fixed inset-y-0 left-0 flex-col gap-4 pt-4 pr-4 pb-4 pl-4">
<div className="relative rounded-2xl p-[1px] h-full">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-neutral-200/70 to-white/20 dark:from-white/10 dark:to-white/5"></div>
<div className="relative h-full rounded-2xl bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] ring-1 ring-black/5 dark:ring-white/5 flex flex-col">
<div className="p-4">
<div className="flex items-center gap-3">

<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white ring-1 ring-black/10 flex items-center justify-center">
<svg className="lucide w-4 h-4" data-lucide="shield" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight text-neutral-800 dark:text-neutral-200">Sentinel Suite</div>
<div className="dark:text-neutral-400 text-xs text-neutral-500">Unified Security Platform</div>
</div>
<button aria-label="Switch to dark mode" className="inline-flex items-center justify-center rounded-lg h-9 w-9 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition" id="themeToggle">
<svg className="lucide w-4 h-4 hidden dark:inline" data-lucide="moon" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<svg className="lucide w-4 h-4 dark:hidden" data-lucide="sun" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>

<div className="mt-4 inline-flex items-center rounded-2xl p-1 bg-neutral-100/80 dark:bg:white/10 ring-1 ring-black/5 dark:ring-white/10 shadow-sm w-full">
<button className="product-tab flex-1 px-3 py-1.5 text-sm rounded-xl font-medium bg-white dark:bg-neutral-900 shadow-sm text-neutral-900 dark:text-neutral-100" data-product="ALL">All</button>
<button className="product-tab flex-1 px-3 py-1.5 text-sm rounded-xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100" data-product="ARGUS">Argus</button>
<button className="product-tab flex-1 px-3 py-1.5 text-sm rounded-xl font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100" data-product="ROCCO">Rocco</button>
</div>
</div>

<nav className="pr-2 pb-3 pl-2 overflow-hidden">
<div className="mt-2 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 px-2">Overview</div>
<a className="group mt-2 flex items-center gap-3 px-3 py-2 rounded-xl bg-gradient-to-b from-neutral-100/80 to-white/40 hover:from-neutral-100 hover:to-white text-neutral-900 dark:text-neutral-100 dark:from-white/10 dark:to-white/5 dark:hover:from-white/15 dark:hover:to-white/10 transition shadow-sm" href="#">
<svg className="lucide w-4 h-4 text-indigo-500" data-lucide="layout-dashboard" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Dashboard</span>
<span className="ml-auto text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500">Live</span>
</a>

<a className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100/70 dark:hover:bg:white/5 transition" href="#">
<svg className="lucide w-4 h-4 text-neutral-500" data-lucide="flask-conical" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Sandbox Environment</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100/70 dark:hover:bg:white/5 transition" href="#">
<svg className="lucide w-4 h-4 text-emerald-500" data-lucide="shield" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Protection Console</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100/70 dark:hover:bg:white/5 transition" href="#">
<svg className="lucide w-4 h-4 text-rose-500" data-lucide="activity" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Incidents</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100/70 dark:hover:bg:white/5 transition" href="#">
<svg className="lucide w-4 h-4 text-cyan-500" data-lucide="globe-2" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">Threat Origins</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-neutral-100/70 dark:hover:bg:white/5 transition" href="#">
<svg className="lucide w-4 h-4 text-violet-500" data-lucide="sparkles" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-sm font-medium">AI Insights</span>
</a>
<div className="mt-4 text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 px-2">Shortcuts</div>
<div className="mt-2 grid grid-cols-2 gap-2 px-1">
<button className="rounded-xl p-3 bg-neutral-100/70 hover:bg-neutral-100 dark:bg:white/5 dark:hover:bg-white/10 transition text-left">
<div className="flex items-center gap-2">
<svg className="lucide w-4 h-4 text-amber-500" data-lucide="zap" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs font-medium">Scan</span>
</div>
<div className="text-[10px] mt-1 text-neutral-500 dark:text-neutral-400">Quick sweep</div>
</button>
<button className="rounded-xl p-3 bg-neutral-100/70 hover:bg-neutral-100 dark:bg:white/5 dark:hover:bg-white/10 transition text-left">
<div className="flex items-center gap-2">
<svg className="lucide w-4 h-4 text-emerald-500" data-lucide="lock" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs font-medium">Policies</span>
</div>
<div className="text-[10px] mt-1 text-neutral-500 dark:text-neutral-400">Update</div>
</button>
</div>
<div className="mt-4 mx-2 mb-3 rounded-xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent">
<div className="p-3 flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="flex-1">
<div className="text-sm font-medium tracking-tight">Premium Shield</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">Advanced telemetry</div>
</div>
<button className="h-8 px-3 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-500 transition">Upgrade</button>
</div>
</div>

<div className="mx-2 grid grid-cols-1 gap-2">
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-sm font-medium hover:bg-white/50 dark:hover:bg-white/15 transition flex items-center justify-center gap-2">
<svg className="lucide w-4 h-4" data-lucide="wrench" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                Self patching
              </button>
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-sm font-medium hover:bg-white/50 dark:hover:bg-white/15 transition flex items-center justify-center gap-2">
<svg className="lucide w-4 h-4" data-lucide="calendar-check-2" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                Update daily tasks
              </button>

<button aria-checked="false" aria-label="Argus is active. Click to engage kill switch" className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-sm font-medium hover:bg-white/50 dark:hover:bg-white/15 transition flex items-center justify-between gap-2" id="argusKillSwitch" role="switch">
<span className="inline-flex items-center gap-2">
<svg className="lucide w-4 h-4 text-rose-500" data-lucide="power" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                  Argus Kill Switch
                </span>
<span className="pill relative inline-flex items-center h-5 w-9 rounded-full bg-neutral-200 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10 transition-colors">
<span className="knob absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white dark:bg-neutral-300 shadow transition-transform"></span>
</span>
</button>
</div>
</nav>

<div className="mt-auto p-4 pt-3 border-t border-black/5 dark:border-white/10">
<div className="flex items-center gap-3 p-2 rounded-xl bg-neutral-100/70 dark:bg:white/5 ring-1 ring-black/5 dark:ring-white/10">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-600 text-white flex items-center justify-center">
<svg className="lucide w-4 h-4" data-lucide="user-round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium tracking-tight">Alex Rivera</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">alex@sentinel.io</div>
</div>
<button className="h-8 w-8 rounded-lg hover:bg-neutral-200/70 dark:hover:bg-white/10 flex items-center justify-center transition" title="Profile">
<svg className="lucide w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
</div>
</div>
</div>
</aside>

<main className="p-4 md:p-6 lg:p-8 space-y-6 md:ml-72 lg:ml-80">

<div className="sticky top-0 z-40">
<div className="rounded-2xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 px-3 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center gap-3">
<div className="relative flex-1 max-w-xl">
<svg className="lucide w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400" data-lucide="search" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<input className="w-full h-10 rounded-xl pl-9 pr-3 bg-white/40 dark:bg:white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-sm placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search incidents, rules, hosts..." type="search" />
</div>

<div className="hidden md:flex items-center gap-2 pl-2 pr-2 py-1 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10">
<svg className="lucide w-4 h-4 text-emerald-500" data-lucide="shield-check" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="text-xs text-neutral-700 dark:text-neutral-300">Rocco protection</span>
<div className="w-32 h-2 rounded-full bg-white/50 dark:bg-white/10 ring-1 ring-white/30 dark:ring-white/10 overflow-hidden">
<div className="h-full w-[95%] bg-gradient-to-r from-emerald-500 to-teal-500"></div>
</div>
<span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">95%</span>
</div>
<button className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition" title="Notifications">
<svg className="lucide w-4 h-4" data-lucide="bell" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="absolute top-1.5 right-1.5 inline-block w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-neutral-900"></span>
</button>

<button className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition" title="Need to fix">
<svg className="lucide w-4 h-4 text-amber-500" data-lucide="alert-triangle" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
<span className="absolute top-1.5 right-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] font-medium ring-2 ring-white dark:ring-neutral-900">!</span>
</button>
</div>
</div>
</div>

<details className="group rounded-3xl p-[1px]" open="">
<summary className="list-none cursor-pointer">
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden break-words">
<div className="flex items-center justify-between p-5">
<div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Protection Console</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Manage shields, rules, and automated responses</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg:white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-sm font-medium hover:bg-white/50 dark:hover:bg-white/15 transition">
<svg className="lucide w-4 h-4 mr-1.5 inline" data-lucide="plus" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg> New Rule
                </button>
<svg className="lucide w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>

<div className="px-5 pb-5">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Policies</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">Enforcement level</div>
<div className="mt-2 flex items-center gap-2">
<span className="px-2 py-1 text-xs rounded-lg bg-indigo-500/10 text-indigo-500">Strict</span>
<span className="text-xs text-neutral-500 dark:text-neutral-400">12 active</span>
</div>
<div className="mt-3 flex gap-2">
<button className="h-9 px-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition">Review</button>
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition">Simulate</button>
</div>
</div>

<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Realtime Shields</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<div className="rounded-lg p-2 bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-center">
<div className="text-xs text-neutral-500 dark:text-neutral-400">WAF</div>
<div className="text-sm font-medium text-emerald-500">On</div>
</div>
<div className="rounded-lg p-2 bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-center">
<div className="text-xs text-neutral-500 dark:text-neutral-400">DLP</div>
<div className="text-sm font-medium text-emerald-500">On</div>
</div>
<div className="rounded-lg p-2 bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-center">
<div className="text-xs text-neutral-500 dark:text-neutral-400">Bot</div>
<div className="text-sm font-medium text-amber-500">Adaptive</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition">Tune</button>
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition">Exceptions</button>
</div>
</div>

<div className="rounded-2xl p-4 bg-white/20 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Quick Actions</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="wand-2" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="rounded-xl h-10 px-3 bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition flex items-center justify-center gap-2">
<svg className="lucide w-4 h-4" data-lucide="shield-check" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg> Hardening
                    </button>
<button className="rounded-xl h-10 px-3 text-sm font-medium transition flex items-center justify-center gap-2 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white dark:from:white/90 dark:to:white/90 dark:text-neutral-900 hover:opacity-90">
<svg className="lucide w-4 h-4" data-lucide="scan-line" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg> Sweep
                    </button>
<button className="rounded-xl h-10 px-3 bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition flex items-center justify-center gap-2">
<svg className="lucide w-4 h-4" data-lucide="cpu" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg> Isolate
                    </button>
<button className="rounded-xl h-10 px-3 bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition flex items-center justify-center gap-2">
<svg className="lucide w-4 h-4" data-lucide="alert-octagon" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg> Quarantine
                    </button>
</div>
</div>

<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Response Playbooks</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<ul className="mt-2 space-y-2 text-sm">
<li className="flex items-center justify-between">
<span>Ransomware containment</span>
<span className="text-[10px] px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-500">Auto</span>
</li>
<li className="flex items-center justify-between">
<span>Phishing takedown</span>
<span className="text-[10px] px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500">Review</span>
</li>
<li className="flex items-center justify-between">
<span>DDoS surge control</span>
<span className="text-[10px] px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-500">Ready</span>
</li>
</ul>
<div className="mt-3">
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition">Edit Playbooks</button>
</div>
</div>

<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Integrations</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<div className="rounded-lg p-2 bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-center">
<div className="text-xs">SIEM</div>
<div className="text-[10px] text-emerald-500">Linked</div>
</div>
<div className="rounded-lg p-2 bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-center">
<div className="text-xs">SOAR</div>
<div className="text-[10px] text-emerald-500">Linked</div>
</div>
<div className="rounded-lg p-2 bg-white/40 dark:bg-white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-center">
<div className="text-xs">EDR</div>
<div className="text-[10px] text-amber-500">Sync</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="h-9 px-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition">Add</button>
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition">Manage</button>
</div>
</div>

<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Activity Log</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<ul className="mt-2 space-y-2 text-sm">
<li className="flex items-center gap-2">
<svg className="lucide w-4 h-4 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                      New WAF rule deployed
                      <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">2m ago</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide w-4 h-4 text-rose-500" data-lucide="shield-off" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                      Bot mitigation escalated
                      <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">18m ago</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide w-4 h-4 text-indigo-500" data-lucide="badge-check" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                      Policy review completed
                      <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">1h ago</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</summary>
</details>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<details className="group rounded-3xl p-[1px]" open="">
<summary className="list-none cursor-pointer">
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden break-words">
<div className="flex items-center justify-between p-5">
<div className="flex items-center gap-3">

<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white ring-1 ring-black/10 flex items-center justify-center">
<svg className="lucide w-4 h-4" data-lucide="fingerprint" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<h2 className="text-xl tracking-tight font-semibold">Rocco</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Endpoint & identity protection</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-lg text-xs bg-emerald-500/10 text-emerald-500">Healthy</span>
<svg className="lucide w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
<div className="px-5 pb-5">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Endpoints</div>
<svg className="lucide w-4 h-4 text-neutral-500" data-lucide="monitor" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">1,284</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">97% protected</div>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Identities</div>
<svg className="lucide w-4 h-4 text-neutral-500" data-lucide="user-round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">6,432</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">MFA enforced</div>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Anomalies</div>
<svg className="lucide w-4 h-4 text-amber-500" data-lucide="alert-triangle" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">23</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">Past 24h</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">EDR Status</div>
<span className="text-[10px] px-2 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-500">Stable</span>
</div>
<ul className="mt-2 text-sm space-y-2">
<li className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500/80"></span> Agent v5.2 deployed
                      </li>
<li className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500/80"></span> Behavioral rules updated
                      </li>
<li className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500/80"></span> 2 endpoints pending restart
                      </li>
</ul>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Identity Risks</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<ul className="mt-2 text-sm space-y-2">
<li className="flex items-center justify-between">
                        Impossible travel
                        <span className="text-[10px] px-2 py-0.5 rounded-lg bg-rose-500/10 text-rose-500">8</span>
</li>
<li className="flex items-center justify-between">
                        MFA fatigue
                        <span className="text-[10px] px-2 py-0.5 rounded-lg bg-amber-500/10 text-amber-500">5</span>
</li>
<li className="flex items-center justify-between">
                        Suspicious device
                        <span className="text-[10px] px-2 py-0.5 rounded-lg bg-cyan-500/10 text-cyan-500">10</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</summary>
</details>

<details className="group rounded-3xl p-[1px]" open="">
<summary className="list-none cursor-pointer">
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden break-words">
<div className="flex items-center justify-between p-5">
<div className="flex items-center gap-3">

<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white ring-1 ring-black/10 flex items-center justify-center">
<svg className="lucide w-4 h-4" data-lucide="radar" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div>
<h2 className="text-xl tracking-tight font-semibold">Argus</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Perimeter & application defense</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-lg text-xs bg-indigo-500/10 text-indigo-500">Active</span>
<svg className="lucide w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
</div>
<div className="px-5 pb-5">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Requests</div>
<svg className="lucide w-4 h-4 text-neutral-500" data-lucide="activity" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">18.2M</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">Last 24h</div>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Blocked</div>
<svg className="lucide w-4 h-4 text-rose-500" data-lucide="shield-x" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">1.3M</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">7.1% rate</div>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Latency</div>
<svg className="lucide w-4 h-4 text-cyan-500" data-lucide="timer" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">58 ms</div>
<div className="text-xs text-neutral-500 dark:text-neutral-400">p95</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Top Threat Origins</div>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="map" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<ul className="mt-2 text-sm space-y-2">
<li className="flex items-center justify-between">US-West <span className="text-neutral-500 dark:text-neutral-400">38%</span></li>
<li className="flex items-center justify-between">EU-Central <span className="text-neutral-500 dark:text-neutral-400">29%</span></li>
<li className="flex items-center justify-between">APAC-SG <span className="text-neutral-500 dark:text-neutral-400">18%</span></li>
</ul>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.35)]">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Rules Highlights</div>
<span className="text:[10px] px-2 py-0.5 rounded-lg bg-indigo-500/10 text-indigo-500">Updated</span>
</div>
<ul className="mt-2 text-sm space-y-2">
<li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500/80"></span> OWASP RCE signature refresh</li>
<li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500/80"></span> DOS burst detection improved</li>
<li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500/80"></span> Bot score threshold adjusted</li>
</ul>
</div>
</div>
</div>
</div>
</summary>
</details>
</div>

<div className="relative rounded-3xl p-[1px]">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-200/70 to-white/20 dark:from-white/10 dark:to-white/5"></div>
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden break-words">
<div className="p-5">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Threat Activity</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Requests, blocks, and anomalies (last 24h)</p>
</div>
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg:white/10 backdrop-blur-md ring-1 ring-white/30 dark:ring-white/10 text-sm font-medium hover:bg-white/50 dark:hover:bg-white/15 transition">
<svg className="lucide w-4 h-4 mr-1.5 inline" data-lucide="calendar" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
                  Last 24h
                </button>
</div>
</div>
<div className="mt-4">

<div className="relative rounded-2xl p-3 ring-1 ring-white/30 dark:ring-white/10 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)] overflow-hidden">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-900/[0.05] to-transparent dark:from-white/[0.06]"></div>
<div className="relative">
<div className="relative h-64 sm:h-72">
<div className="absolute inset-0">
<canvas id="threatChart"></canvas>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative rounded-3xl p-[1px]">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-200/70 to-white/20 dark:from-white/10 dark:to-white/5"></div>
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden break-words">
<div className="p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Open Incidents</h2>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="filter" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<ul className="mt-3 space-y-3 text-sm">
<li className="flex items-center gap-3 p-3 rounded-xl ring-1 ring-white/30 dark:ring-white/10 bg-white/30 dark:bg-white/10 backdrop-blur-xl">
<span className="px-2 py-0.5 rounded-lg text-[10px] bg-rose-500/10 text-rose-500">High</span>
                  Ransomware behavior detected on 3 hosts
                  <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">5m</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-xl ring-1 ring-white/30 dark:ring-white/10 bg-white/30 dark:bg-white/10 backdrop-blur-xl">
<span className="px-2 py-0.5 rounded-lg text-[10px] bg-amber-500/10 text-amber-500">Med</span>
                  Phishing domain attempting login spray
                  <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">22m</span>
</li>
<li className="flex items-center gap-3 p-3 rounded-xl ring-1 ring-white/30 dark:ring-white/10 bg-white/30 dark:bg-white/10 backdrop-blur-xl">
<span className="px-2 py-0.5 rounded-lg text-[10px] bg-indigo-500/10 text-indigo-500">Low</span>
                  Elevated bot traffic to /api/auth
                  <span className="ml-auto text-xs text-neutral-500 dark:text-neutral-400">1h</span>
</li>
</ul>
</div>
</div>
</div>
<div className="relative rounded-3xl p-[1px]">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-200/70 to-white/20 dark:from-white/10 dark:to-white/5"></div>
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden break-words">
<div className="p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Top Signals</h2>
<button className="h-8 w-8 rounded-lg hover:bg-white/40 dark:hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition ring-1 ring-transparent hover:ring-white/20">
<svg className="lucide w-4 h-4" data-lucide="list-tree" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-xs text-neutral-500 dark:text-neutral-400">SQLi</div>
<div className="text-lg font-semibold tracking-tight">14,203</div>
</div>
<div className="rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-xs text-neutral-500 dark:text-neutral-400">Credential Stuffing</div>
<div className="text-lg font-semibold tracking-tight">9,118</div>
</div>
<div className="rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-xs text-neutral-500 dark:text-neutral-400">XSS</div>
<div className="text-lg font-semibold tracking-tight">7,540</div>
</div>
<div className="rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-xs text-neutral-500 dark:text-neutral-400">Anomalous Bots</div>
<div className="text-lg font-semibold tracking-tight">5,412</div>
</div>
<div className="rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-xs text-neutral-500 dark:text-neutral-400">RCE</div>
<div className="text-lg font-semibold tracking-tight">3,089</div>
</div>
<div className="rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-xs text-neutral-500 dark:text-neutral-400">L7 DDoS</div>
<div className="text-lg font-semibold tracking-tight">2,347</div>
</div>
</div>
<div className="mt-4">
<button className="h-9 px-3 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-md text-sm font-medium ring-1 ring-white/30 dark:ring-white/10 hover:bg-white/50 dark:hover:bg-white/15 transition">View all signals</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-3xl p-[1px]">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-200/70 to-white/20 dark:from-white/10 dark:to-white/5"></div>
<div className="relative rounded-3xl bg-white/25 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.35)] overflow-hidden">
<div className="p-5">
<div className="flex items-center justify-between">
<h2 className="text-xl tracking-tight font-semibold">Security Posture</h2>
<button className="h-9 px-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition">Remediate</button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-sm font-medium">Argus</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/40 dark:bg-white/10 overflow-hidden ring-1 ring-white/20 dark:ring-white/10">
<div className="h-full w-[92%] bg-gradient-to-r from-indigo-500 to-cyan-500"></div>
</div>
<div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Coverage 92%</div>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-sm font-medium">Rocco</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/40 dark:bg-white/10 overflow-hidden ring-1 ring-white/20 dark:ring-white/10">
<div className="h-full w-[95%] bg-gradient-to-r from-emerald-500 to-teal-500"></div>
</div>
<div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Coverage 95%</div>
</div>
<div className="rounded-2xl p-4 bg-white/30 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/30 dark:ring-white/10">
<div className="text-sm font-medium">Exposure</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/40 dark:bg-white/10 overflow-hidden ring-1 ring-white/20 dark:ring-white/10">
<div className="h-full w-[18%] bg-gradient-to-r from-amber-500 to-rose-500"></div>
</div>
<div className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">Lower is better</div>
</div>
</div>
</div>
</div>
</div>

<footer className="pt-2 pb-8 text-center text-xs text-neutral-500 dark:text-neutral-400">
        © <span id="year"></span> Sentinel Suite — Security Dashboard
      </footer>
</main>
</div>



    </>
  );
}
