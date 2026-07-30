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



// Theme: prefer user saved setting or default to dark
(() => {
try {
const saved = localStorage.getItem('fleetlytics-theme') || 'dark';
if (saved === 'dark') document.documentElement.classList.add('dark');
} catch (e) {}
})();



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Theme Toggle
      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const root = document.documentElement;
          const isDark = root.classList.toggle('dark');
          try { localStorage.setItem('fleetlytics-theme', isDark ? 'dark' : 'light'); } catch(e){}
        });
      }

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Drag and Drop Demo
      const events = document.querySelectorAll('.draggable-event');
      const dropzones = document.querySelectorAll('.calendar-dropzone');
      let revenue = 0;
      let bookings = 0;

      function updateMetrics() {
        document.getElementById('revenueToday').textContent = revenue.toLocaleString('en-PH');
        document.getElementById('bookingsToday').textContent = bookings;
      }

      events.forEach(ev => {
        ev.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', ev.getAttribute('data-amount') || '0');
          e.dataTransfer.effectAllowed = 'copy';
        });
      });

      dropzones.forEach(zone => {
        zone.addEventListener('dragover', (e) => e.preventDefault());
        zone.addEventListener('drop', (e) => {
          e.preventDefault();
          const amount = parseInt(e.dataTransfer.getData('text/plain') || '0', 10);
          // clone event display
          const chip = document.createElement('div');
          chip.className = 'mt-1 inline-flex items-center gap-1 rounded px-2 py-1 text-[10px] border';
          // Random style by amount
          if (amount >= 5000) {
            chip.className += ' border-[#007BFF]/40 bg-[#007BFF]/10 text-[#007BFF]';
          } else if (amount >= 4000) {
            chip.className += ' border-emerald-500/40 bg-emerald-500/10 text-emerald-600';
          } else {
            chip.className += ' border-orange-500/40 bg-orange-500/10 text-orange-500';
          }
          chip.innerHTML = '<i data-lucide="badge-check" class="w-3 h-3"></i> Booked: PHP ' + amount.toLocaleString('en-PH');
          zone.appendChild(chip);
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          // Update metrics
          revenue += amount;
          bookings += 1;
          updateMetrics();
        });
      });

      // Chart.js Revenue Area
      const ctx = document.getElementById('revChart').getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(0, 123, 255, 0.35)');
      gradient.addColorStop(1, 'rgba(0, 123, 255, 0.02)');
      const revChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [{
            label: 'Revenue (PHP)',
            data: [850000, 910000, 980000, 1025000, 1110000, 1200000],
            fill: true,
            backgroundColor: gradient,
            borderColor: '#007BFF',
            borderWidth: 2,
            tension: 0.35,
            pointRadius: 2.5,
            pointBackgroundColor: '#007BFF'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(15,23,42,0.9)',
              padding: 10,
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#fff',
              callbacks: {
                label: (ctx) => ' PHP ' + ctx.parsed.y.toLocaleString('en-PH')
              }
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(148,163,184,0.15)' },
              ticks: { color: getComputedStyle(document.documentElement).classList.contains('dark') ? '#cbd5e1' : '#334155' }
            },
            y: {
              grid: { color: 'rgba(148,163,184,0.15)' },
              ticks: { color: getComputedStyle(document.documentElement).classList.contains('dark') ? '#cbd5e1' : '#334155', callback: (val) => (val/1000)+'k' }
            }
          }
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
      

<div className="w-full bg-gradient-to-r from-[#007BFF]/10 via-emerald-500/5 to-orange-500/10 dark:from-[#007BFF]/15 dark:via-emerald-500/10 dark:to-orange-500/15 border-b border-slate-200/60 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-2 text-sm">
<span className="relative inline-flex items-center overflow-hidden rounded-md border border-slate-200/70 dark:border-white/10">

<span className="flex">
<span className="w-3 h-3 bg-white relative">
<span className="absolute inset-0 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
</span>
</span>
<span className="w-3 h-3 bg-[#0038A8]"></span>
<span className="w-3 h-3 bg-[#CE1126]"></span>
</span>
</span>
<p className="text-slate-700 dark:text-slate-300">Built for Philippine fleets — trusted by logistics, transport, and corporate teams nationwide.</p>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-neutral-950/60 border-b border-slate-200/60 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="h-9 w-9 rounded-lg bg-[#007BFF] shadow-lg shadow-[#007BFF]/30 flex items-center justify-center">
<span className="text-white font-semibold tracking-tight" style={{fontFamily: `'Aileron', 'Inter', ui-sans-serif`, letterSpacing: `-0.02em`}}>FL</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#product">Product</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#pricing">Pricing</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#customers">Customers</a>
<a className="text-slate-700 hover:text-[#007BFF] dark:text-slate-300 dark:hover:text-[#7AB8FF] transition-colors" href="#faq">Resources</a>
<span className="hidden lg:inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border border-emerald-500/30 text-emerald-600 dark:text-emerald-400/90 bg-emerald-500/10">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
                Data Secure
              </span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="group relative inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" id="themeToggle">
<i className="w-4.5 h-4.5 group-[.light]:hidden" data-lucide="moon-star"></i>
<i className="w-4.5 h-4.5 hidden" data-lucide="sun"></i>
<span className="hidden md:inline">Dark Mode</span>
</button>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="play-circle"></i>
              Request a Demo
            </a>
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
              Get Started Free
            </a>
</div>
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
<h1 className="mt-5 text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight" style={{fontFamily: `'Aileron', 'Inter', ui-sans-serif`, letterSpacing: `-0.03em`}}>
              The #1 Fleet Management Platform in the Philippines
            </h1>
<p className="mt-5 text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
              Real-time booking, utilization analytics, and revenue tracking—built exclusively for PH businesses. Manage vans, jeepneys, trucks, and corporate cars in one modern, reliable platform.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-5 py-3 text-sm shadow-lg shadow-[#007BFF]/25 transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="sparkles"></i>
                Start Managing Your Fleet Today
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-5 py-3 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#demo">
<i className="w-4.5 h-4.5" data-lucide="calendar"></i>
                See Live Calendar Preview
              </a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="shield"></i>
                ISO-ready data security
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="building-2"></i>
                Multi-tenant for branches
              </span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="radio"></i>
                Real-time updates
              </span>
</div>
</div>

<div className="relative">
<div className="absolute -top-4 -left-4 z-10">
<div className="inline-flex items-center gap-2 rounded-md border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300 shadow-sm">
<span className="relative inline-flex overflow-hidden rounded-sm">
<span className="w-3 h-3 bg-white relative">
<span className="absolute inset-0 flex items-center justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
</span>
</span>
<span className="w-3 h-3 bg-[#0038A8]"></span>
<span className="w-3 h-3 bg-[#CE1126]"></span>
</span>
                PH Fleets: Vans • Jeepneys • Trucks • Cars
              </div>
</div>
<div className="relative grid grid-cols-12 gap-4">
<div className="col-span-7 sm:col-span-7 lg:col-span-7 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-3 shadow-xl">
<img alt="Logistics trucks in the Philippines" className="rounded-xl object-cover w-full h-56 md:h-64" src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1600&auto=format&fit=crop" />
<div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="truck"></i> Luzon Linehaul</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-emerald-500" data-lucide="activity"></i> 98.7% uptime</span>
</div>
</div>
<div className="col-span-5 sm:col-span-5 lg:col-span-5 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-3 shadow-xl translate-y-6">
<img alt="Jeepney in Manila" className="rounded-xl object-cover w-full h-40 md:h-44" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-orange-500" data-lucide="bus"></i> Jeepney Ops</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-emerald-500" data-lucide="timer"></i> On-time 94%</span>
</div>
</div>
<div className="col-span-12 rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-3 shadow-xl">
<img alt="Corporate car fleet" className="rounded-xl object-cover w-full h-40 md:h-48" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="car"></i> Corporate Cars</span>
<span className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5 text-orange-500" data-lucide="wallet"></i> +12% revenue</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="product">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron', 'Inter', ui-sans-serif`, letterSpacing: `-0.02em`}}>Everything you need to manage PH fleets with confidence</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">Simplicity, efficiency, and cost savings—designed around Philippine routes and operations.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
<i className="w-4 h-4 text-[#007BFF]" data-lucide="map"></i>
            NCR • Cebu • Davao • Nationwide
          </div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 transition-all hover:shadow-lg hover:shadow-[#007BFF]/10">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Save up to 20%</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Vehicle Management</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Track maintenance, compliance, and assignments for vans, jeepneys, trucks, and cars with effortless control.</p>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="clipboard-check"></i> LTO, LTFRB, emission reminders</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="wrench"></i> Maintenance schedules</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#007BFF]" data-lucide="id-card"></i> Driver pairing</li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 transition-all hover:shadow-lg hover:shadow-[#007BFF]/10">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
<i className="w-5 h-5" data-lucide="calendar-range"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">+30% utilization</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Smart Booking System</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Real-time calendar with drag-and-drop scheduling for routes in Metro Manila, Cebu, and beyond.</p>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#007BFF]" data-lucide="component"></i> Conflict detection</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="route"></i> Route templates</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="alarm-check"></i> Auto reminders</li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 transition-all hover:shadow-lg hover:shadow-[#007BFF]/10">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Cut idle time</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Utilization Analytics</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">See fleet usage by city, branch, or vehicle type, and optimize dispatch across Philippine regions.</p>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#007BFF]" data-lucide="pie-chart"></i> Utilization heatmaps</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="radar"></i> Bottleneck alerts</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="hourglass"></i> Idle tracking</li>
</ul>
</div>

<div className="group rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5 hover:border-[#007BFF]/40 transition-all hover:shadow-lg hover:shadow-[#007BFF]/10">
<div className="flex items-center justify-between">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#007BFF]/10 text-[#007BFF]">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<span className="text-xs text-emerald-600 dark:text-emerald-400">Grow margins</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Revenue Tracking</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Link bookings to revenue per route, client, or branch—priced in PHP with taxes and surcharges.</p>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1.5">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="line-chart"></i> Revenue dashboards</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="receipt"></i> Billing & invoices</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-[#007BFF]" data-lucide="wallet"></i> Client profitability</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/60 dark:from-neutral-900/80 dark:to-neutral-900/60 backdrop-blur-xl p-6 md:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
<div className="lg:col-span-2">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight" style={{fontFamily: `'Aileron', 'Inter'`}}>Built for Philippine routes and regulations</h3>
<p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">From Manila to Cebu to Davao—Fleetlytics adapts to the realities of local traffic, peak hours, and provincial routes. Ideal for delivery services, transport operators, and corporate fleets with multiple branches.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10">
<i className="w-3.5 h-3.5 text-[#007BFF]" data-lucide="building"></i> Corporate Fleets
                </span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10">
<i className="w-3.5 h-3.5 text-emerald-500" data-lucide="truck"></i> Delivery & Logistics
                </span>
<span className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-slate-200/70 dark:border-white/10">
<i className="w-3.5 h-3.5 text-orange-500" data-lucide="bus"></i> Transport Operators
                </span>
</div>
</div>
<div className="relative">

<div className="rounded-xl overflow-hidden border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60">
<img alt="Philippine map background" className="w-full h-56 object-cover opacity-80" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
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
<span className="font-medium tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>PH-Ready</span>
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
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>See it in action: Real-time booking and revenue dashboard</h2>
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
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Booking Calendar</h3>
</div>
<div className="flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Confirmed</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-orange-500/10 text-orange-500"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Pending</span>
</div>
</div>
<div className="mt-4 grid grid-cols-7 text-xs text-slate-500 dark:text-slate-400">
<div className="p-2">Mon</div><div className="p-2">Tue</div><div className="p-2">Wed</div><div className="p-2">Thu</div><div className="p-2">Fri</div><div className="p-2">Sat</div><div className="p-2">Sun</div>
</div>
<div className="grid grid-cols-7 gap-2">


<template id="calendar-cell-template"><div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div></template>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone" id="today-column"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
<div className="relative min-h-[86px] rounded-md border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 hover:border-[#007BFF]/40 transition-colors calendar-dropzone"></div>
</div>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="draggable-event cursor-move select-none rounded-md border border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-3 py-2 text-xs" data-amount="4500" draggable="true">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="move"></i> Cebu Delivery — PHP 4,500</div>
</div>
<div className="draggable-event cursor-move select-none rounded-md border border-orange-500/30 bg-orange-500/15 text-orange-500 px-3 py-2 text-xs" data-amount="3200" draggable="true">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="move"></i> BGC Shuttle — PHP 3,200</div>
</div>
<div className="draggable-event cursor-move select-none rounded-md border border-[#007BFF]/30 bg-[#007BFF]/15 text-[#007BFF] px-3 py-2 text-xs" data-amount="5800" draggable="true">
<div className="flex items-center gap-2"><i className="w-3.5 h-3.5" data-lucide="move"></i> Manila Linehaul — PHP 5,800</div>
</div>
</div>
<div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Tip: Drag an event to any calendar cell to simulate scheduling and watch revenue update.</div>
</div>

<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#007BFF]" data-lucide="line-chart"></i>
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Revenue Overview</h3>
</div>
<span className="text-xs text-slate-500 dark:text-slate-400">Last 6 months</span>
</div>
<div className="mt-4 rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="h-[200px] w-full rounded-md overflow-hidden">
<div className="relative h-full w-full">
<div className="h-full w-full">
<canvas id="revChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="text-xs text-slate-500 dark:text-slate-400">Bookings Today</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="bookingsToday" style={{fontFamily: `'Aileron','Inter'`}}>0</div>
</div>
<div className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="text-xs text-slate-500 dark:text-slate-400">Projected Revenue (PHP)</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="revenueToday" style={{fontFamily: `'Aileron','Inter'`}}>0</div>
</div>
<div className="col-span-2 rounded-lg border border-slate-200/70 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-500 dark:text-slate-400">Utilization (This Week)</div>
<div className="inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400"><i className="w-3.5 h-3.5" data-lucide="trending-up"></i> +8.2%</div>
</div>
<div className="mt-2 w-full bg-slate-200/60 dark:bg-white/10 h-2 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: `68%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="customers">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Trusted by forward-thinking Filipino businesses</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">From Manila logistics to Cebu transport operators and Davao corporate fleets.</p>
</div>
<div className="hidden sm:flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><i className="w-3.5 h-3.5" data-lucide="shield-check"></i> Data Secure</span>
<span className="inline-flex items-center gap-1.5 text-[#007BFF]"><i className="w-3.5 h-3.5" data-lucide="layers"></i> Multi-Tenant Ready</span>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-[#007BFF]/15 text-[#007BFF] flex items-center justify-center font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`, letterSpacing: `-0.02em`}}>ME</div>
<div>
<div className="font-medium">Manila Express Logistics</div>
<div className="text-xs text-slate-500 dark:text-slate-400">Manila, NCR</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 dark:text-slate-300">“Fleetlytics increased our truck utilization by 27% and cut scheduling time from hours to minutes. The PH-focused workflows just make sense.”</p>
<div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Fleet Size: 48 | Service Level: 99.1%</div>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`, letterSpacing: `-0.02em`}}>CT</div>
<div>
<div className="font-medium">Cebu City Transport Co.</div>
<div className="text-xs text-slate-500 dark:text-slate-400">Cebu, Visayas</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 dark:text-slate-300">“Drag-and-drop bookings are a game changer for our jeepney and shuttle operations. Real-time visibility across terminals keeps us on track.”</p>
<div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Fleet Size: 120 | On-time: 95%</div>
</div>
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-orange-500/15 text-orange-500 flex items-center justify-center font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`, letterSpacing: `-0.02em`}}>DM</div>
<div>
<div className="font-medium">Davao Mobility Group</div>
<div className="text-xs text-slate-500 dark:text-slate-400">Davao, Mindanao</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-700 dark:text-slate-300">“Revenue tracking in PHP by client and branch finally gives us clarity. Our margins improved within the first month.”</p>
<div className="mt-4 text-xs text-slate-500 dark:text-slate-400">Fleet Size: 35 | Margin: +12%</div>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Transparent pricing for PH businesses</h2>
<p className="mt-2 text-slate-600 dark:text-slate-400">Start free. Upgrade as your fleet grows.</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Small Fleet</h3>
<span className="text-xs text-slate-500 dark:text-slate-400">1–20 vehicles</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>PHP 4,990</div>
<div className="text-xs text-slate-500 dark:text-slate-400">per month</div>
</div>
<ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Real-time booking calendar</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Vehicle management & reminders</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Basic analytics & reports</li>
</ul>
<div className="mt-6 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#start">
<i className="w-4.5 h-4.5" data-lucide="rocket"></i>
                Get Started Free
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#contact">
<i className="w-4.5 h-4.5" data-lucide="message-square"></i>
                Request a Demo
              </a>
</div>
</div>

<div className="relative rounded-2xl border-2 border-[#007BFF] bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl p-6 flex flex-col shadow-xl shadow-[#007BFF]/10">
<div className="absolute -top-3 right-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#007BFF] text-white text-xs shadow">Most Popular</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Growing Fleet</h3>
<span className="text-xs text-slate-500 dark:text-slate-400">21–100 vehicles</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>PHP 14,990</div>
<div className="text-xs text-slate-500 dark:text-slate-400">per month</div>
</div>
<ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Everything in Small Fleet</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Advanced analytics & utilization heatmaps</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Branch & multi-tenant support</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> API & integrations</li>
</ul>
<div className="mt-6 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#start">
<i className="w-4.5 h-4.5" data-lucide="rocket"></i>
                Get Started Free
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#contact">
<i className="w-4.5 h-4.5" data-lucide="message-square"></i>
                Request a Demo
              </a>
</div>
</div>

<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Enterprise</h3>
<span className="text-xs text-slate-500 dark:text-slate-400">100+ vehicles</span>
</div>
<div className="mt-4">
<div className="text-3xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Custom</div>
<div className="text-xs text-slate-500 dark:text-slate-400">tailored to your ops</div>
</div>
<ul className="mt-4 text-sm text-slate-700 dark:text-slate-300 space-y-2">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Dedicated PH support & SLAs</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> SSO, audit logs, custom roles</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-emerald-500" data-lucide="check"></i> Private cloud or on-prem options</li>
</ul>
<div className="mt-6 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#contact">
<i className="w-4.5 h-4.5" data-lucide="headset"></i>
                Contact Sales
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300/70 dark:border-white/10 px-4 py-2 text-sm hover:border-[#007BFF]/50 hover:text-[#007BFF] dark:hover:text-[#7AB8FF] transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="file-text"></i>
                Request a Quote
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="faq">
<div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
<div className="rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 backdrop-blur-xl p-6 md:p-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-1">
<h3 className="text-xl font-semibold tracking-tight" style={{fontFamily: `'Aileron','Inter'`}}>Frequently asked</h3>
<p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Answers for Philippine fleets.</p>
</div>
<div className="md:col-span-2 space-y-5">
<div className="border-b border-slate-200/70 dark:border-white/10 pb-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#007BFF]" data-lucide="credit-card"></i>
<div>
<div className="font-medium">Do you support PHP billing and withholdings?</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Yes—billing is in PHP with VAT, surcharges, and withholding support. Export to your accounting tools.</p>
</div>
</div>
</div>
<div className="border-b border-slate-200/70 dark:border-white/10 pb-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-500" data-lucide="shield"></i>
<div>
<div className="font-medium">Is my data secure?</div>
<p className="text-sm text-slate-600 dark:text-slate-400">We follow best practices for encryption, access controls, and backups. Multi-tenant isolation keeps each branch secure.</p>
</div>
</div>
</div>
<div className="border-b border-slate-200/70 dark:border-white/10 pb-5">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-orange-500" data-lucide="clock-9"></i>
<div>
<div className="font-medium">How fast to onboard?</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Most teams go live in under a week with our PH-based onboarding specialists.</p>
</div>
</div>
</div>
<div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-[#007BFF]" data-lucide="headphones"></i>
<div>
<div className="font-medium">Where is support located?</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Dedicated support team in the Philippines. Reach us via chat, email, or phone Mon–Sat.</p>
</div>
</div>
</div>
<div className="pt-2">
<a className="inline-flex items-center gap-2 rounded-md bg-[#007BFF] hover:bg-[#0067d6] text-white px-4 py-2 text-sm shadow-md shadow-[#007BFF]/25 transition-colors" href="#pricing">
<i className="w-4.5 h-4.5" data-lucide="arrow-right"></i>
                  Start Free — No credit card
                </a>
</div>
</div>
</div>
</div>

<footer className="mt-10 border-t border-slate-200/70 dark:border-white/10 pt-8 pb-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-[#007BFF] shadow-lg shadow-[#007BFF]/30 flex items-center justify-center">
<span className="text-white font-semibold tracking-tight" style={{fontFamily: `'Aileron', 'Inter'`, letterSpacing: `-0.02em`}}>FL</span>
</div>
<div className="text-sm text-slate-600 dark:text-slate-400">Fleetlytics — PH-first fleet management</div>
</div>
<p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Bonifacio Global City, Taguig, Metro Manila, Philippines · +63 (02) 1234 5678 · support@fleetlytics.ph</p>
<div className="mt-3 flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400"><i className="w-3.5 h-3.5" data-lucide="shield-check"></i> Data Secure</span>
<span className="inline-flex items-center gap-1.5 text-[#007BFF]"><i className="w-3.5 h-3.5" data-lucide="layers"></i> Multi-Tenant Ready</span>
</div>
</div>
<div>
<div className="text-sm font-medium">Company</div>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li><a className="hover:text-[#007BFF]" href="#product">Product</a></li>
<li><a className="hover:text-[#007BFF]" href="#customers">Customers</a></li>
<li><a className="hover:text-[#007BFF]" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium">Legal</div>
<ul className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-2">
<li><a className="hover:text-[#007BFF]" href="#">Terms</a></li>
<li><a className="hover:text-[#007BFF]" href="#">Privacy</a></li>
<li><a className="hover:text-[#007BFF]" href="#">Service Status</a></li>
</ul>
</div>
</div>
<div className="mt-8 text-xs text-slate-500 dark:text-slate-400">© <span id="year"></span> Fleetlytics. All rights reserved.</div>
</footer>
</div>
</section>



    </>
  );
}
