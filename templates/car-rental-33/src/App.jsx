import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Theme: prefer saved or default to light
(() => {
try {
const saved = localStorage.getItem('fleetlytics-theme');
if (saved === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
})();



      // Icon render
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons();
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Theme toggle
      const themeToggle = document.getElementById('themeToggle');
      const sunIcon = document.getElementById('sunIcon');
      const moonIcon = themeToggle ? themeToggle.querySelector('[data-lucide="moon-star"]') : null;
      const themeLabel = document.getElementById('themeLabel');

      function setTheme(isDark) {
        document.documentElement.classList.toggle('dark', isDark);
        try { localStorage.setItem('fleetlytics-theme', isDark ? 'dark' : 'light'); } catch (e) {}
        // Update UI
        if (sunIcon && moonIcon) {
          if (isDark) {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
            if (themeLabel) themeLabel.textContent = 'Dark Mode';
          } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
            if (themeLabel) themeLabel.textContent = 'Light Mode';
          }
        }
        // Re-render icons (for safe measure)
        if (window.lucide) window.lucide.createIcons();
        // Refresh charts palette
        buildCharts(true);
      }

      // Initialize theme UI based on current class
      setTimeout(() => {
        const isDarkInit = document.documentElement.classList.contains('dark');
        setTheme(isDarkInit);
      }, 0);

      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(!isDark);
        });
      }

      // Mobile menu
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Feature modal
      const featureButtons = document.querySelectorAll('[data-feature]');
      const featureModal = document.getElementById('featureModal');
      const featureTitle = document.getElementById('featureTitle');
      const featureDesc = document.getElementById('featureDesc');
      const featureClose = document.getElementById('featureClose');
      const featureDismiss = document.getElementById('featureDismiss');

      function openFeatureModal(title, desc) {
        if (!featureModal) return;
        featureTitle.textContent = title || 'Feature';
        featureDesc.textContent = desc || '';
        featureModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
      function closeFeatureModal() {
        if (!featureModal) return;
        featureModal.classList.add('hidden');
        document.body.style.overflow = '';
      }

      featureButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          openFeatureModal(btn.dataset.feature, btn.dataset.desc);
        });
      });
      [featureClose, featureDismiss].forEach(el => el && el.addEventListener('click', closeFeatureModal));
      if (featureModal) {
        featureModal.addEventListener('click', (e) => {
          if (e.target === featureModal || (e.target.classList && e.target.classList.contains('absolute'))) {
            closeFeatureModal();
          }
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeFeatureModal(); });
      }

      // Charts
      let revenueChart, utilChart;

      function makePalette() {
        const dark = document.documentElement.classList.contains('dark');
        return {
          text: dark ? 'rgba(226,232,240,0.8)' : 'rgba(71,85,105,0.9)',
          grid: dark ? 'rgba(148,163,184,0.15)' : 'rgba(148,163,184,0.25)',
          line: '#FF8A4C',
          fill: 'rgba(255,138,76,0.15)',
          rented: 'rgba(16,185,129,0.8)',
          available: 'rgba(0,123,255,0.8)',
          maintenance: 'rgba(249,115,22,0.85)',
          overdue: 'rgba(244,63,94,0.9)',
          border: dark ? 'rgba(255,255,255,0.08)' : 'rgba(2,6,23,0.08)'
        };
      }

      function buildRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;
        const p = makePalette();
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 170);
        gradient.addColorStop(0, p.fill);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        revenueChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [{
              label: 'Revenue (₱)',
              data: [420, 520, 480, 610, 750, 790],
              borderColor: p.line,
              backgroundColor: gradient,
              borderWidth: 2,
              tension: 0.35,
              fill: true,
              pointRadius: 2.5,
              pointHoverRadius: 4
            }]
          },
          options: {
            responsive: true,
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `₱${ctx.parsed.y}k`
                }
              }
            },
            scales: {
              x: {
                grid: { color: p.grid, drawBorder: false },
                ticks: { color: p.text }
              },
              y: {
                grid: { color: p.grid, drawBorder: false },
                ticks: {
                  color: p.text,
                  callback: (value) => `₱${value}k`
                }
              }
            }
          }
        });
      }

      function buildUtilChart() {
        const ctx = document.getElementById('utilChart');
        if (!ctx) return;
        const p = makePalette();
        utilChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Rented', 'Available', 'Maintenance', 'Overdue'],
            datasets: [{
              data: [68, 22, 7, 3],
              backgroundColor: [p.rented, p.available, p.maintenance, p.overdue],
              borderColor: 'transparent',
              hoverOffset: 4
            }]
          },
          options: {
            cutout: '65%',
            plugins: { legend: { display: false } }
          }
        });
      }

      function buildCharts(refresh = false) {
        if (refresh) {
          if (revenueChart) { revenueChart.destroy(); revenueChart = null; }
          if (utilChart) { utilChart.destroy(); utilChart = null; }
        }
        if (!revenueChart) buildRevenueChart();
        if (!utilChart) buildUtilChart();
      }

      document.addEventListener('DOMContentLoaded', () => buildCharts());

      // Calendar controls demo (just updates label)
      const calendarLabel = document.getElementById('calendarLabel');
      const prevMonth = document.getElementById('prevMonth');
      const nextMonth = document.getElementById('nextMonth');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let idx = 8; // Sep
      function updateCalLabel() {
        if (calendarLabel) calendarLabel.textContent = months[idx] + ' 2025 • Week';
      }
      prevMonth && prevMonth.addEventListener('click', () => { idx = (idx + 11) % 12; updateCalLabel(); });
      nextMonth && nextMonth.addEventListener('click', () => { idx = (idx + 1) % 12; updateCalLabel(); });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] inline-flex items-center gap-2 rounded-md bg-white dark:bg-neutral-900 border border-slate-200/70 dark:border-white/10 px-3 py-1.5 text-sm shadow" href="#main">Skip to content</a>

<div className="w-full bg-gradient-to-r from-[#007BFF]/10 via-emerald-500/5 to-orange-500/10 dark:from-[#007BFF]/15 dark:via-emerald-500/10 dark:to-orange-500/15 border-b border-slate-200/60 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 text-sm">
<span className="relative inline-flex items-center overflow-hidden rounded-md border border-slate-200/70 dark:border-white/10">
<span aria-hidden="true" className="flex">
<span className="w-3 h-3 bg-white relative">
<span className="absolute inset-0 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
</span>
</span>
<span className="w-3 h-3 bg-[#0038A8]"></span>
<span className="w-3 h-3 bg-[#CE1126]"></span>
</span>
</span>
<p className="text-slate-700 dark:text-slate-300">Built for Philippine rental fleets — motorcycles, sedans, SUVs, vans, and EVs.</p>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/60 border-b border-slate-200/60 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-lg bg-[#007BFF] shadow-lg shadow-[#007BFF]/30 flex items-center justify-center">
<span className="text-white font-semibold tracking-tight" style={{fontFamily: '\'Aileron\', \'Inter\', ui-sans-serif', letterSpacing: '-0.02em'}}>FL</span>
</div>
<span className="sr-only">Fleetlytics</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#product">Product</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#demo">Demo</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#customers">Customers</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#pricing">Pricing</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#faq">Resources</a>
<span className="hidden lg:inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400/90 bg-emerald-500/10">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
                Data Secure
              </span>
</nav>
</div>
<div className="flex items-center gap-2">
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300/70 dark:border-white/10 bg-white dark:bg-neutral-900 h-9 w-9 hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF]" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
<span className="sr-only">Open menu</span>
</button>
<button className="group relative inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" id="themeToggle">
<i className="w-4.5 h-4.5" data-lucide="moon-star"></i>
<i className="w-4.5 h-4.5 hidden" data-lucide="sun" id="sunIcon"></i>
<span className="hidden md:inline" id="themeLabel">Light Mode</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#demo">
<i className="w-4.5 h-4.5" data-lucide="play-circle"></i>
              See Live Demo
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
              Start Free Today
            </a>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200/60 dark:border-white/10 bg-white/90 dark:bg-neutral-950/70 backdrop-blur-xl" id="mobileMenu">
<div className="max-w-7xl mx-auto px-6 py-3 grid grid-cols-1 gap-2 text-sm">
<a className="inline-flex items-center gap-2 py-2 text-slate-700 dark:text-slate-300" href="#product"><i className="w-4 h-4 text-[#007BFF]" data-lucide="grid-2x2"></i> Product</a>
<a className="inline-flex items-center gap-2 py-2 text-slate-700 dark:text-slate-300" href="#demo"><i className="w-4 h-4 text-[#007BFF]" data-lucide="calendar"></i> Demo</a>
<a className="inline-flex items-center gap-2 py-2 text-slate-700 dark:text-slate-300" href="#customers"><i className="w-4 h-4 text-[#007BFF]" data-lucide="users"></i> Customers</a>
<a className="inline-flex items-center gap-2 py-2 text-slate-700 dark:text-slate-300" href="#pricing"><i className="w-4 h-4 text-[#007BFF]" data-lucide="badge-dollar-sign"></i> Pricing</a>
<a className="inline-flex items-center gap-2 py-2 text-slate-700 dark:text-slate-300" href="#faq"><i className="w-4 h-4 text-[#007BFF]" data-lucide="book-open"></i> Resources</a>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-[#007BFF]/10 via-transparent to-transparent dark:from-[#007BFF]/20"></div>
<div className="absolute -top-24 right-[-10%] w-[600px] h-[600px] rounded-full bg-[#007BFF]/10 blur-3xl"></div>
<div className="absolute -bottom-24 left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
<div className="relative">
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 text-slate-700 dark:text-slate-300">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
              Made in the Philippines
            </span>
<h1 className="mt-5 text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight" style={{fontFamily: '\'Aileron\', \'Inter\', ui-sans-serif', letterSpacing: '-0.03em'}}>
              The #1 Car Rental Fleet Management Platform in the Philippines
            </h1>
<p className="mt-5 text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
              Built for motorcycles, sedans, SUVs, vans, and EV rental operators.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-5 py-3 text-sm shadow-lg shadow-[#007BFF]/25 transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="sparkles"></i>
                Start Free Today
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-5 py-3 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#demo">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
                See Live Demo
              </a>
</div>

<div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
<span className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-2.5 py-1.5 text-slate-700 dark:text-slate-300">
<i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="life-buoy"></i> PH Support
              </span>
<span className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-2.5 py-1.5 text-slate-700 dark:text-slate-300">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="shield"></i> Secure Data
              </span>
<span className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-2.5 py-1.5 text-slate-700 dark:text-slate-300">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="receipt"></i> VAT‑Inclusive Billing
              </span>
</div>

<div className="mt-8 grid grid-cols-3 gap-3 max-w-lg">
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="text-[11px] text-slate-500 dark:text-slate-400">Active Rentals</div>
<div className="mt-1 text-xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>124</div>
</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="text-[11px] text-slate-500 dark:text-slate-400">Double-Bookings</div>
<div className="mt-1 text-xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>-90%</div>
</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="text-[11px] text-slate-500 dark:text-slate-400">VAT-ready Invoices</div>
<div className="mt-1 text-xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>100%</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-4 -left-4 z-10">
<div className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
<span aria-hidden="true" className="relative inline-flex overflow-hidden rounded-sm">
<span className="w-3 h-3 bg-white relative">
<span className="absolute inset-0 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
</span>
</span>
<span className="w-3 h-3 bg-[#0038A8]"></span>
<span className="w-3 h-3 bg-[#CE1126]"></span>
</span>
                PH Rental Fleets: MC • Sedans • SUVs • Vans • EVs
              </div>
</div>
<div className="relative grid grid-cols-12 gap-4">
<div className="col-span-7 sm:col-span-7 lg:col-span-7 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-3 shadow-xl">
<img alt="Car rentals" className="rounded-xl object-cover w-full h-56 md:h-64" loading="lazy" src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="car"></i> Metro Manila Rentals</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-emerald-500" data-lucide="activity"></i> 98.7% uptime</span>
</div>
</div>
<div className="col-span-5 sm:col-span-5 lg:col-span-5 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-3 shadow-xl translate-y-6">
<img alt="Motorcycle rentals" className="rounded-xl object-cover w-full h-40 md:h-44" loading="lazy" src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?q=80&amp;w=1080&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-orange-500" data-lucide="gauge"></i> High-turnover MCs</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-emerald-500" data-lucide="timer"></i> On-time 94%</span>
</div>
</div>
<div className="col-span-12 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-3 shadow-xl">
<img alt="SUV and vans" className="rounded-xl object-cover w-full h-40 md:h-48" loading="lazy" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="car-front"></i> SUVs &amp; Vans</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-orange-500" data-lucide="wallet"></i> +15% profit clarity</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<main id="main">

<section className="relative" id="product">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\', \'Inter\', ui-sans-serif', letterSpacing: '-0.02em'}}>Here’s how Fleetlytics solves the biggest pain points of PH rental owners</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">No more double-bookings, missed renewals, or messy financials—just one smart workflow.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
<i className="w-4 h-4 text-[#007BFF]" data-lucide="map"></i>
              NCR • Cebu • Davao • Nationwide
            </div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

<button className="group text-left rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 hover:shadow-lg hover:shadow-[#007BFF]/10 hover:-translate-y-0.5 transition-all cursor-pointer" data-desc="Prevent overlaps with conflict detection, drag-and-drop scheduling, and per-car availability across branches." data-feature="Smart Calendar">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Stop double-bookings</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Smart Calendar</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Conflict-free scheduling for cars, SUVs, vans, EVs, and motorcycles.</p>
</button>

<button className="group text-left rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 hover:shadow-lg hover:shadow-[#007BFF]/10 hover:-translate-y-0.5 transition-all cursor-pointer" data-desc="Never miss LTO registration, emission tests, insurance, or battery checks—automated reminders and bulk actions." data-feature="Renewal Radar">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
<i className="w-5 h-5" data-lucide="calendar-clock"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Stay compliant</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Renewal Radar</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">LTO, insurance, emission, EV checks—sorted.</p>
</button>

<button className="group text-left rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 hover:shadow-lg hover:shadow-[#007BFF]/10 hover:-translate-y-0.5 transition-all cursor-pointer" data-desc="Track revenue, costs, and profit per car, category, or branch. See utilization and break-even at a glance." data-feature="Profit Dashboard">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Know your margins</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Profit Dashboard</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Per-car profit clarity—no more guessing.</p>
</button>

<button className="group text-left rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 hover:shadow-lg hover:shadow-[#007BFF]/10 hover:-translate-y-0.5 transition-all cursor-pointer" data-desc="Collect valid IDs, selfies, and deposits. Log pre/post-rental photos with damage assessment and audit trail." data-feature="PH-friendly KYC + Damage Flow">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
<i className="w-5 h-5" data-lucide="id-card"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Reduce disputes</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>KYC + Damage Flow</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">ID checks and photo-based damage logging.</p>
</button>

<button className="group text-left rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 hover:shadow-lg hover:shadow-[#007BFF]/10 hover:-translate-y-0.5 transition-all cursor-pointer" data-desc="Issue VAT-inclusive invoices and official receipts in PHP. Automate reminders and reconcile payments faster." data-feature="Invoicing &amp; Receipts">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
<i className="w-5 h-5" data-lucide="receipt"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Faster collections</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Invoicing &amp; Receipts</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">PHP billing with VAT and withholdings.</p>
</button>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/60 dark:from-neutral-900/80 dark:to-neutral-900/60 backdrop-blur-xl p-6 md:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-2">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\', \'Inter\''}}>Built for Philippine routes and rental realities</h3>
<p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">Metro Manila, Cebu, Davao, and beyond—optimize turnover, track renewals, and manage branches with PH-ready billing.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10">
<i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="car"></i> Car Rental Operators
                  </span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="gauge"></i> Motorcycle Fleets
                  </span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="battery-charging"></i> EV Rentals
                  </span>
</div>
</div>
<div className="relative">
<div className="rounded-xl overflow-hidden border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
<img alt="Philippine map background" className="w-full h-56 object-cover opacity-80" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
<i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="map"></i>
                        PH coverage: Luzon, Visayas, Mindanao
                      </span>
<span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
<i className="w-3.5 h-3.5" data-lucide="check-circle"></i> Reliable
                      </span>
</div>
</div>
</div>
<div className="absolute -top-3 -right-3 rounded-md bg-white dark:bg-neutral-900 border border-slate-200/70 dark:border-white/10 px-2 py-1 text-xs shadow">
<span className="font-medium tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>PH-Ready</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="demo">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>From messy spreadsheets → one smart dashboard.</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">Drag trips on the calendar. Monitor revenue at a glance.</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10"><i className="w-3.5 h-3.5 text-emerald-500" data-lucide="lock"></i> Data Secure</span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10"><i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="server"></i> Multi-Tenant Ready</span>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#007BFF]" data-lucide="calendar"></i>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Booking Calendar</h3>

<button aria-label="Previous period" className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200/70 dark:border-white/10 hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF]" id="prevMonth">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<div className="text-sm font-medium tabular-nums" id="calendarLabel">Sep 2025 • Week</div>
<button aria-label="Next period" className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-slate-200/70 dark:border-white/10 hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF]" id="nextMonth">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="mt-4">
<div className="grid grid-cols-7 text-[11px] text-slate-500 dark:text-slate-400">
<div className="px-2 py-1">Mon</div>
<div className="px-2 py-1">Tue</div>
<div className="px-2 py-1">Wed</div>
<div className="px-2 py-1">Thu</div>
<div className="px-2 py-1">Fri</div>
<div className="px-2 py-1">Sat</div>
<div className="px-2 py-1">Sun</div>
</div>
<div className="grid grid-cols-7-2 mt-1">

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">9</span>
<span className="text-slate-400">12 cars</span>
</div>
<div className="mt-1.5">
<div className="group relative w-full rounded-md bg-[#007BFF]/15 text-[#0B5ED7] dark:text-[#7AB8FF] px-2 py-1 text-[11px] hover:bg-[#007BFF]/20 transition" title="Sedan | Makati → BGC">
                        Honda City • MK-BGC
                        <span aria-hidden="true" className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</div>
</div>
</div>

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">10</span>
<span className="text-slate-400">15 cars</span>
</div>
<div className="mt-1.5 space-y-1">
<div className="w-full rounded-md bg-orange-500/15 text-orange-600 px-2 py-1 text-[11px]" title="SUV | NAIA Pickup">
                        Fortuner • NAIA pickup
                      </div>
<div className="w-full rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-1 text-[11px]" title="MC | Cebu City">
                        Mio i125 • Cebu
                      </div>
</div>
</div>

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">11</span>
<span className="text-slate-400">17 cars</span>
</div>
<div className="mt-1.5">
<div className="w-full rounded-md bg-[#007BFF]/15 text-[#0B5ED7] dark:text-[#7AB8FF] px-2 py-1 text-[11px]" title="EV | BGC → Tagaytay">
                        BYD Dolphin • BGC→Tagaytay
                      </div>
</div>
</div>

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">12</span>
<span className="text-slate-400">14 cars</span>
</div>
<div className="mt-1.5 space-y-1">
<div className="w-full rounded-md bg-rose-500/15 text-rose-600 px-2 py-1 text-[11px]" title="Conflict detected">
                        Conflict • 2 overlaps
                      </div>
<div className="w-full rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-1 text-[11px]" title="MC | Davao">
                        Raider 150 • Davao
                      </div>
</div>
</div>

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">13</span>
<span className="text-slate-400">19 cars</span>
</div>
<div className="mt-1.5">
<div className="w-full rounded-md bg-orange-500/15 text-orange-600 px-2 py-1 text-[11px]" title="Van | Laguna Trip">
                        HiAce • Laguna trip
                      </div>
</div>
</div>

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">14</span>
<span className="text-slate-400">22 cars</span>
</div>
<div className="mt-1.5">
<div className="w-full rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 px-2 py-1 text-[11px]" title="MC | Quezon City">
                        NMAX • QC
                      </div>
</div>
</div>

<div className="rounded-md border border-slate-200/70 dark:border-white/10 bg-white/50 dark:bg-neutral-900/40 p-2 min-h-[88px]">
<div className="flex items-center justify-between text-[11px]">
<span className="font-medium">15</span>
<span className="text-slate-400">9 cars</span>
</div>
<div className="mt-1.5">
<div className="w-full rounded-md bg-[#007BFF]/15 text-[#0B5ED7] dark:text-[#7AB8FF] px-2 py-1 text-[11px]" title="Sedan | BGC return">
                        Vios • Return
                      </div>
</div>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-3 text-[11px] text-slate-500 dark:text-slate-400">
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-[#007BFF]/60"></span> Sedan/EV</span>
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-orange-500/60"></span> SUV/Van</span>
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-emerald-500/60"></span> Motorcycle</span>
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-rose-500/60"></span> Conflict</span>
</div>
</div>
</div>

<div className="space-y-6">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="line-chart"></i>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Revenue Overview</h3>
</div>
<span className="text-xs text-slate-500 dark:text-slate-400">Last 6 months</span>
</div>
<div className="mt-4">
<canvas aria-label="Revenue chart" height="170" id="revenueChart" role="img"></canvas>
</div>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="gauge"></i>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Utilization</h3>
</div>
<span className="text-xs text-slate-500 dark:text-slate-400">Fleet snapshot</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-4 items-center">
<div>
<canvas aria-label="Utilization chart" height="160" id="utilChart" role="img"></canvas>
</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-emerald-500/70"></span> Rented</span>
<span className="font-medium">68%</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-[#007BFF]/60"></span> Available</span>
<span className="font-medium">22%</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-orange-500/70"></span> Maintenance</span>
<span className="font-medium">7%</span>
</div>
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded bg-rose-500/70"></span> Overdue</span>
<span className="font-medium">3%</span>
</div>
<a className="mt-3 inline-flex items-center gap-1 text-xs text-[#007BFF] dark:text-[#7AB8FF] hover:underline" href="#pricing">
                      Improve utilization with Fleetlytics <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#007BFF]" data-lucide="calendar-clock"></i>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Renewal Radar</h3>
</div>
<span className="text-xs text-slate-500 dark:text-slate-400">Next 30 days</span>
</div>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center justify-between rounded-md border border-slate-200/70 dark:border-white/10 px-3 py-2">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="shield"></i> Insurance: 3 vehicles</span>
<span className="text-xs text-slate-500">Due in 7 days</span>
</li>
<li className="flex items-center justify-between rounded-md border border-slate-200/70 dark:border-white/10 px-3 py-2">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="file-check-2"></i> Emission: 6 vehicles</span>
<span className="text-xs text-slate-500">Due in 12 days</span>
</li>
<li className="flex items-center justify-between rounded-md border border-slate-200/70 dark:border-white/10 px-3 py-2">
<span className="inline-flex items-center gap-2"><i className="w-4 h-4 text-rose-500" data-lucide="badge-alert"></i> LTO Reg: 2 vehicles</span>
<span className="text-xs text-slate-500">Overdue</span>
</li>
</ul>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-[60]" id="featureModal">
<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
<div className="relative mx-auto my-10 max-w-lg w-[92%] rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 shadow-2xl">
<div className="flex items-start justify-between">
<div>
<h4 className="text-xl font-semibold tracking-tight" id="featureTitle" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Feature</h4>
<p className="mt-1 text-sm text-slate-600 dark:text-slate-400" id="featureDesc">Description</p>
</div>
<button aria-label="Close" className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200/70 dark:border-white/10 hover:text-[#007BFF]" id="featureClose">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div className="rounded-md border border-slate-200/70 dark:border-white/10 p-3">
<div className="text-[11px] text-slate-500">Impact</div>
<div className="mt-1 font-medium">Fewer errors</div>
</div>
<div className="rounded-md border border-slate-200/70 dark:border-white/10 p-3">
<div className="text-[11px] text-slate-500">Time saved</div>
<div className="mt-1 font-medium">3–5 hrs/wk</div>
</div>
<div className="rounded-md border border-slate-200/70 dark:border-white/10 p-3">
<div className="text-[11px] text-slate-500">Setup</div>
<div className="mt-1 font-medium">Under 1 hr</div>
</div>
</div>
<div className="mt-5 flex items-center justify-end gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm" href="#pricing">
<i className="w-4 h-4" data-lucide="sparkles"></i> Get Started
                </a>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50" id="featureDismiss">Dismiss</button>
</div>
</div>
</div>

</section>

<section className="relative" id="customers">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Trusted by growing PH rental fleets</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">From city sedans to provincial vans and EVs.</p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-4 text-center text-slate-600 dark:text-slate-300">MetroDrive</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-4 text-center text-slate-600 dark:text-slate-300">CebuCruise</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-4 text-center text-slate-600 dark:text-slate-300">DavaoRide</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-4 text-center text-slate-600 dark:text-slate-300">LuzonVans</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-4 text-center text-slate-600 dark:text-slate-300">EVGo PH</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-4 text-center text-slate-600 dark:text-slate-300">MotoRent</div>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="md:col-span-2 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/60 dark:from-neutral-900/80 dark:to-neutral-900/60 backdrop-blur-xl p-6">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-full bg-[#007BFF]/15 text-[#007BFF] flex items-center justify-center">
<i className="w-6 h-6" data-lucide="quote"></i>
</div>
<blockquote className="text-slate-700 dark:text-slate-300">
                  Fleetlytics helped us increase weekend utilization by 18% and cut double-bookings to almost zero. The Renewal Radar alone paid for the subscription in one month.
                </blockquote>
</div>
<div className="mt-4 text-sm text-slate-500 dark:text-slate-400">— Andrea, Operations Lead, MetroDrive</div>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-6">
<div className="text-sm text-slate-600 dark:text-slate-400">Average support rating</div>
<div className="mt-2 flex items-center gap-2">
<div className="inline-flex -space-x-1">
<i className="w-4 h-4 text-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400" data-lucide="star-half"></i>
</div>
<div className="font-semibold">4.8/5</div>
</div>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">PH-based support over chat, email, and phone.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Simple pricing for every fleet size</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">Start free. Upgrade when you grow. All prices in PHP, VAT-inclusive.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="relative rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl p-6">
<div className="text-sm text-slate-500 dark:text-slate-400">Starter</div>
<div ="font-family:'aileron','inter'"="" className="mt-2 text-3xl font-semibold tracking-tight">Free</div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Up to 10 vehicles</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Booking calendar</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Renewal reminders</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Basic invoicing</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF]" href="#demo">Try Free</a>
</div>

<div className="relative rounded-2xl border border-[#007BFF]/40 bg-gradient-to-b from-[#007BFF]/10 to-transparent dark:from-[#007BFF]/20 dark:to-transparent p-6 shadow-lg shadow-[#007BFF]/10">
<div className="absolute -top-3 right-4 inline-flex items-center gap-1.5 rounded-md bg-[#007BFF] text-white px-2 py-1 text-[11px]">Most Popular</div>
<div className="text-sm text-slate-600 dark:text-slate-300">Growth</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>₱2,990<span className="text-base font-normal text-slate-500">/mo</span></div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Up to 50 vehicles</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> All Starter features</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Profit dashboard</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> KYC &amp; damage flow</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Advanced invoicing (VAT/withholding)</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm" href="#demo">Start Growth</a>
</div>

<div className="relative rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 backdrop-blur-xl p-6">
<div className="text-sm text-slate-500 dark:text-slate-400">Pro</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>₱7,990<span className="text-base font-normal text-slate-500">/mo</span></div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Unlimited vehicles</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Multi-branch + roles</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> API &amp; webhooks</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Priority support</li>
</ul>
<a className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF]" href="#demo">Talk to Sales</a>
</div>
</div>
<p className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">Annual billing available upon request • Cancel anytime</p>
</div>
</section>

<section className="relative" id="faq">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Frequently asked questions</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">Everything you need to know about Fleetlytics.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
<details className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5 open:shadow">
<summary className="flex cursor-pointer items-center justify-between text-left">
<span className="font-medium">Is Fleetlytics compliant with PH invoicing and VAT?</span>
</summary>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Yes—issue VAT-inclusive invoices and official receipts with customizable series, plus withholding support.</p>
</details>
<details className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5">
<summary className="flex cursor-pointer items-center justify-between text-left">
<span className="font-medium">Can I manage cars, vans, motorcycles, and EVs together?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Absolutely. Create categories, rates, and maintenance schedules per vehicle type—track utilization across the entire fleet.</p>
</details>
<details className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5">
<summary className="flex cursor-pointer items-center justify-between text-left">
<span className="font-medium">How secure is my data?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Data is encrypted in transit and at rest, with role-based access, audit logs, and daily backups.</p>
</details>
<details className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5">
<summary className="flex cursor-pointer items-center justify-between text-left">
<span className="font-medium">Do you offer migration from spreadsheets?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Yes—concierge onboarding is included for Growth and Pro plans. We’ll import vehicles, rates, and active bookings.</p> 
</details>
<details className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5">
<summary className="flex cursor-pointer items-center justify-between text-left">
<span className="font-medium">Does Fleetlytics support branches and user roles?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Yes. Pro includes multi-branch management with granular roles and permissions for owners, managers, dispatchers, and accountants.</p>
</details>
<details className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-5">
<summary className="flex cursor-pointer items-center justify-between text-left">
<span className="font-medium">Is there a free trial?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Starter is free for up to 10 vehicles. You can upgrade or cancel anytime. We also offer a 14‑day Growth trial on request.</p>
</details>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
<a className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#007BFF]/10 transition" href="#demo">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-[#007BFF]" data-lucide="file-text"></i>
<span className="font-medium">Sample VAT Invoice</span>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-[#007BFF]" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">See a PH-ready invoice with VAT and withholding.</p>
</a>
<a className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/10 transition" href="#demo">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="lock"></i>
<span className="font-medium">Security Overview</span>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-500" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Encryption, access control, and backups.</p>
</a>
<a className="group rounded-xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-neutral-900/60 p-5 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/10 transition" href="#demo">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-orange-500" data-lucide="code-xml"></i>
<span className="font-medium">API &amp; Webhooks</span>
</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-orange-500" data-lucide="arrow-right"></i>
</div>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Integrate billing, CRM, and accounting systems.</p>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl mx-auto px-6 pb-14">
<div className="relative overflow-hidden rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-r from-[#007BFF]/10 via-white to-emerald-50 dark:from-[#007BFF]/20 dark:via-neutral-900 dark:to-neutral-900/60 p-6 md:p-10">
<div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#007BFF]/10 blur-2xl"></div>
<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
<div className="md:col-span-2">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight" style={{fontFamily: '\'Aileron\',\'Inter\''}}>Ready to modernize your rental operations?</h3>
<p className="mt-2 text-slate-600 dark:text-slate-400">Start free in minutes. Import vehicles, add rates, and go live today.</p>
</div>
<div className="flex md:justify-end gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25" href="#pricing">
<i className="w-4 h-4" data-lucide="sparkles"></i> Start Free
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF]" href="#demo">
<i className="w-4 h-4" data-lucide="play-circle"></i> Watch Demo
                </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="relative border-t border-slate-200/60 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6 py-10">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="col-span-2 sm:col-span-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-[#007BFF] flex items-center justify-center shadow-sm shadow-[#007BFF]/30">
<span className="text-white text-sm font-semibold" style={{fontFamily: '\'Aileron\',\'Inter\''}}>FL</span>
</div>
<span className="sr-only">Fleetlytics</span>
</div>
<p className="mt-3 text-sm text-slate-600 dark:text-slate-400">PH-first fleet management for rentals.</p>
<div className="mt-3 flex items-center gap-3 text-slate-500">
<a aria-label="Facebook" className="hover:text-[#007BFF]" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a aria-label="Twitter" className="hover:text-[#007BFF]" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a aria-label="LinkedIn" className="hover:text-[#007BFF]" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-slate-200">Product</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a className="hover:text-[#007BFF]" href="#product">Features</a></li>
<li><a className="hover:text-[#007BFF]" href="#demo">Demo</a></li>
<li><a className="hover:text-[#007BFF]" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-slate-200">Company</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a className="hover:text-[#007BFF]" href="#">About</a></li>
<li><a className="hover:text-[#007BFF]" href="#">Careers</a></li>
<li><a className="hover:text-[#007BFF]" href="#faq">Resources</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 dark:text-slate-200">Legal</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a className="hover:text-[#007BFF]" href="#">Privacy</a></li>
<li><a className="hover:text-[#007BFF]" href="#">Terms</a></li>
<li><a className="hover:text-[#007BFF]" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
<div>© <span id="year"></span> Fleetlytics. All rights reserved.</div>
<div className="inline-flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="mail"></i>
<a className="hover:text-[#007BFF]" href="mailto:support@fleetlytics.ph">support@fleetlytics.ph</a>
</div>
</div>
</div>
</footer>

<style>
      .grid-cols-7-2 { grid-template-columns: repeat(7, minmax(0, 1fr)); }
      .w-4.5 { width: 1.125rem; } .h-4.5 { height: 1.125rem; }
    </style>



    </>
  );
}
