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



tailwind.config = {
theme: {
extend: {
colors: {
surface: 'rgba(24, 24, 27, 0.95)',
card: 'rgba(39, 39, 42, 0.8)',
accent: '#10b981'
},
fontFamily: {
'geist': ['Inter', 'system-ui', 'sans-serif']
}
}
}
}



      // Sidebar toggle for mobile
      const openSidebar = document.getElementById('openSidebar');
      const sidebar = document.getElementById('sidebar');
      const backdrop = document.getElementById('backdrop');
      
      if (openSidebar) {
        openSidebar.addEventListener('click', () => {
          sidebar.classList.remove('-translate-x-full');
          backdrop.classList.remove('hidden');
        });
      }
      
      if (backdrop) {
        backdrop.addEventListener('click', () => {
          sidebar.classList.add('-translate-x-full');
          backdrop.classList.add('hidden');
        });
      }

      // Theme toggle (visual only)
      const themeToggle = document.getElementById('themeToggle');
      if (themeToggle) {
        themeToggle.addEventListener('click', () => {
          const knob = themeToggle.querySelector('span.absolute');
          const isOn = knob.classList.contains('translate-x-5');
          if (isOn) {
            knob.classList.remove('translate-x-5');
          } else {
            knob.classList.add('translate-x-5');
          }
        });
      }

      // Charts with proper colors
      const grid = 'rgba(255,255,255,0.1)';
      const accent = '#10b981';
      const accentSoft = 'rgba(16,185,129,0.2)';
      const textColor = 'rgba(255,255,255,0.8)';
      const red = '#f87171';
      const redSoft = 'rgba(248,113,113,0.2)';

      // Cashflow Chart
      const cashCtx = document.getElementById('cashflowChart');
      if (cashCtx) {
        new Chart(cashCtx, {
          type: 'line',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov'],
            datasets: [
              {
                data: [180,195,210,225,240,235,248,265,280,275,285],
                borderColor: accent,
                backgroundColor: accentSoft,
                tension: 0.4,
                borderWidth: 2.5,
                pointRadius: 0,
                fill: true
              },
              {
                data: [160,170,185,200,215,220,228,240,250,260,270],
                borderColor: 'rgba(255,255,255,0.4)',
                borderDash: [5,5],
                tension: 0.4,
                borderWidth: 2,
                pointRadius: 0,
                fill: false
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: textColor, font: { size: 11, family: 'Inter', weight: '500' } }
              },
              y: {
                grid: { color: grid },
                ticks: { color: textColor, font: { size: 11, family: 'Inter', weight: '500' }, callback: v => '$' + v + 'k' }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(0,0,0,0.8)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 12,
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                titleFont: { family: 'Inter', weight: '600' },
                bodyFont: { family: 'Inter', weight: '500' }
              }
            }
          }
        });
      }

      // Mini charts
      function miniLine(id, series, color, fillColor) {
        const el = document.getElementById(id);
        if (!el) return;
        return new Chart(el, {
          type: 'line',
          data: {
            labels: Array(series.length).fill(''),
            datasets: [{
              data: series,
              borderColor: color,
              backgroundColor: fillColor,
              tension: 0.4,
              borderWidth: 2.5,
              pointRadius: 0,
              fill: true
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { x: { display: false }, y: { display: false } },
            plugins: { legend: { display: false }, tooltip: { enabled: false } }
          }
        });
      }
      
      miniLine('expendsChart', [45,48,52,47,49,44,46,42,40,43,41,47], red, redSoft);
      miniLine('incomesChart', [120,125,135,142,158,165,162,168,175,172,180,185], accent, accentSoft);
    
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
      
<div className="w-full min-h-screen flex items-center justify-center p-4">

<div className="lg:hidden fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-surface/90 border-b border-white/10 animate-[fadeInDown_0.6s_ease-out]">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors" id="openSidebar">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path>
</svg>
<span className="text-sm font-medium text-white">Menu</span>
</button>
<div className="flex items-center gap-3">
<span className="text-sm text-white/80 font-medium tracking-tight">Novara</span>
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-white/20" src="https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=80&auto=format&fit=crop" />
</div>
</div>
</div>
<div className="w-full max-w-[1400px] mt-16 lg:mt-0">
<div className="bg-surface backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
<div className="grid lg:grid-cols-[280px,1fr] bg-zinc-900">

<aside className="fixed lg:static z-50 lg:translate-x-0 -translate-x-full transition-transform duration-300 animate-[slideInLeft_0.8s_ease-out_0.4s_both]" id="sidebar">
<div className="h-full lg:h-auto w-[85vw] max-w-[320px] lg:w-auto bg-surface lg:bg-transparent">
<div className="p-5 lg:p-6 border-b border-white/10 lg:border-0">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-accent/20 backdrop-blur ring-1 ring-accent/30 flex items-center justify-center">
<svg className="w-5 h-5 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<div>
<div className="text-base font-semibold tracking-tight text-white">Novara</div>
<div className="text-xs text-white/60">Business plan</div>
</div>
</div>
</div>
<nav className="lg:p-6 pt-5 pr-5 pb-5 pl-5 space-y-6">
<div className="animate-[fadeIn_0.6s_ease-out_0.6s_both]">
<div className="text-xs uppercase tracking-wide text-white/50 mb-3 font-medium">Overview</div>
<ul className="space-y-2">
<li>
<a className="group flex items-center justify-between px-3 py-2 rounded-xl bg-card backdrop-blur ring-1 ring-white/10 text-white hover:bg-white/10 transition-all duration-200" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-lg bg-accent/20 ring-1 ring-accent/30">
<svg className="w-4 h-4 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
</span>
<span className="text-sm font-medium text-white">Analytics</span>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70 font-medium">Active</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path>
</svg>
<span className="text-sm font-medium text-white/70">Transactions</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<span className="text-sm font-medium text-white/70">Payment Methods</span>
</a>
</li>
</ul>
</div>
<div className="animate-[fadeIn_0.6s_ease-out_0.7s_both]">
<div className="text-xs uppercase tracking-wide text-white/50 mb-3 font-medium">Management</div>
<ul className="space-y-2">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 2v2"></path><path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"></path><path d="M8 2v2"></path><circle cx="12" cy="11" r="3"></circle><rect height="18" rx="2" width="18" x="3" y="4"></rect>
</svg>
<span className="text-sm font-medium text-white/70">Virtual Cards</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<span className="text-sm font-medium text-white/70">Security</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
<span className="text-sm font-medium text-white/70">Investments</span>
</a>
</li>
</ul>
</div>
<div className="animate-[fadeIn_0.6s_ease-out_0.8s_both]">
<div className="text-xs uppercase tracking-wide text-white/50 mb-3 font-medium">Reports</div>
<ul className="space-y-2">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path>
</svg>
<span className="text-sm font-medium text-white/70">Financial Reports</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
<span className="text-sm font-medium text-white/70">Performance</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="text-sm font-medium text-white/70">Activity Log</span>
</a>
</li>
</ul>
</div>
<div className="rounded-2xl p-4 bg-card backdrop-blur ring-1 ring-white/10 animate-[fadeInUp_0.6s_ease-out_0.9s_both]">
<div className="flex items-center gap-3">
<img alt="Upgrade illustration" className="w-12 h-12 rounded-xl object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1553456558-aff63285bdd1?q=80&w=600&auto=format&fit=crop" />
<div className="flex-1">
<div className="text-sm font-semibold text-white">Upgrade to Enterprise</div>
<div className="text-xs text-white/60">Advanced features included</div>
</div>
</div>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-accent/20 text-accent ring-1 ring-accent/30 hover:bg-accent/30 transition-all duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="text-sm font-semibold text-accent">Get Started</span>
</button>
</div>
<div className="flex items-center justify-between px-2 pt-1 animate-[fadeIn_0.6s_ease-out_1s_both]">
<span className="text-xs text-white/60 font-medium">Dark mode</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors ring-1 ring-white/20" id="themeToggle">
<span className="sr-only">Toggle theme</span>
<span className="absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-card backdrop-blur ring-1 ring-white/20 flex items-center justify-center transition-transform translate-x-5">
<svg className="w-3.5 h-3.5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>
</aside>

<main className="border-l border-white/10">

<header className="px-4 md:px-6 lg:px-8 py-5 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent animate-[fadeInDown_0.6s_ease-out_0.3s_both]">
<div className="flex items-center justify-between gap-4">
<div className="hidden lg:flex items-center gap-3 text-white/70">
<a className="text-sm font-medium hover:text-white transition-colors text-white/70" href="#">Finance</a>
<svg className="w-4 h-4 text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<span className="text-sm font-medium text-white">Business Dashboard</span>
</div>
<div className="flex-1 max-w-xl">
<div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl bg-card backdrop-blur ring-1 ring-white/10">
<svg className="w-4 h-4 text-white/50" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="w-full bg-transparent placeholder:text-white/50 text-sm outline-none text-white font-medium" placeholder="Search transactions, reports..." />
<span className="hidden sm:inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-white/10 text-white/60 font-medium">⌘K</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-accent/20 text-accent ring-1 ring-accent/30 hover:bg-accent/30 transition-all duration-200 font-semibold">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="M12 5v14"></path>
</svg>
<span className="text-sm text-accent">New Transaction</span>
</button>
<div className="hidden md:flex items-center gap-3">
<button className="relative p-2 rounded-xl hover:bg-white/10 transition-colors">
<svg className="w-5 h-5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-surface"></span>
</button>
<div className="flex items-center gap-3 pl-2">
<img alt="User avatar" className="w-9 h-9 rounded-full object-cover ring-2 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop" />
<div className="hidden sm:block">
<div className="text-sm font-semibold leading-5 text-white">Sarah Chen</div>
<div className="text-xs text-white/60 font-medium">@sarahc</div>
</div>
<button className="p-2 rounded-xl hover:bg-white/10 transition-colors">
<svg className="w-4 h-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="px-4 md:px-6 lg:px-8 py-6 lg:py-8 space-y-6">
<div className="animate-[fadeInUp_0.6s_ease-out_0.5s_both]">
<h1 className="text-2xl md:text-3xl tracking-tight text-white">Financial Overview</h1>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInUp_0.6s_ease-out_0.6s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">USD Balance</div>
<button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
<svg className="w-4 h-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="mt-3 flex items-end justify-between">
<div className="text-2xl md:text-3xl tracking-tight text-white">$127,840.50</div>
<div className="flex items-center gap-1 text-accent">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="text-sm font-semibold text-accent">4.2%</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInUp_0.6s_ease-out_0.7s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">EUR Balance</div>
<button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
<svg className="w-4 h-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="mt-3 flex items-end justify-between">
<div className="text-2xl md:text-3xl tracking-tight text-white">€89,234.75</div>
<div className="flex items-center gap-1 text-rose-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
<span className="text-sm font-semibold text-rose-400">1.8%</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInUp_0.6s_ease-out_0.8s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">GBP Balance</div>
<button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
<svg className="w-4 h-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="mt-3 flex items-end justify-between">
<div className="text-2xl md:text-3xl tracking-tight text-white">£63,420.90</div>
<div className="flex items-center gap-1 text-accent">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="text-sm font-semibold text-accent">3.1%</span>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInLeft_0.8s_ease-out_0.9s_both]">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-white/70 font-medium">Monthly Revenue</div>
<div className="mt-1 text-xl font-semibold tracking-tight text-white">$284,750</div>
</div>
<div className="text-accent text-sm font-semibold">+12.4%</div>
</div>
<div className="mt-4 relative h-60">
<div className="absolute inset-0">
<canvas id="cashflowChart"></canvas>
</div>
</div>
</div>

<div className="rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInRight_0.8s_ease-out_0.9s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">Recent Transactions</div>
<button className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/10 text-xs text-white/80 hover:bg-white/20 transition-colors font-medium">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path>
</svg>
                        Last 7 days
                      </button>
</div>
<ul className="mt-4 space-y-3">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
<svg className="w-4.5 h-4.5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-white">MetaCorp Ltd.</div>
<div className="text-xs text-white/60 font-medium">#TRX892341 • Nov 28, 2024</div>
</div>
</div>
<div className="text-sm font-semibold text-white">$12,450.00</div>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
<svg className="w-4.5 h-4.5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-white">GlobalPay Inc.</div>
<div className="text-xs text-white/60 font-medium">#TRX892288 • Nov 27, 2024</div>
</div>
</div>
<div className="text-sm font-semibold text-white">$8,920.00</div>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center">
<svg className="w-4.5 h-4.5 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</div>
<div>
<div className="text-sm font-semibold text-white">CloudTech Solutions</div>
<div className="text-xs text-white/60 font-medium">#TRX892154 • Nov 25, 2024</div>
</div>
</div>
<div className="text-sm font-semibold text-white">$5,200.00</div>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInUp_0.6s_ease-out_1s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">Monthly Expenses</div>
<button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
<svg className="w-4 h-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="text-2xl tracking-tight text-white">$47,290</div>
<div className="flex items-center gap-1 text-rose-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
<span className="text-sm font-semibold text-rose-400">5.2%</span>
</div>
</div>
<div className="mt-4 relative h-28">
<div className="absolute inset-0">
<canvas id="expendsChart"></canvas>
</div>
</div>
</div>

<div className="rounded-2xl bg-card backdrop-blur ring-1 ring-white/10 p-4 hover:ring-white/20 transition-all duration-200 animate-[fadeInUp_0.6s_ease-out_1.1s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">Monthly Revenue</div>
<button className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
<svg className="w-4 h-4 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="text-2xl tracking-tight text-white">$168,420</div>
<div className="flex items-center gap-1 text-accent">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
<span className="text-sm font-semibold text-accent">8.7%</span>
</div>
</div>
<div className="mt-4 relative h-28">
<div className="absolute inset-0">
<canvas id="incomesChart"></canvas>
</div>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-br from-accent/10 via-card to-card backdrop-blur ring-1 ring-white/10 hover:ring-accent/20 p-4 flex flex-col transition-all duration-200 animate-[fadeInUp_0.6s_ease-out_1.2s_both]">
<div className="flex items-center justify-between">
<div className="text-sm text-white/70 font-medium">Total Portfolio</div>
<div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/10 text-xs text-white/80 font-medium">
<img alt="US flag" className="w-3.5 h-3.5 rounded-sm" src="https://flagcdn.com/w20/us.png" />
                        Multi-currency
                      </div>
</div>
<div className="mt-3 text-3xl tracking-tight text-white">$892,640.85</div>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-accent/20 text-accent ring-1 ring-accent/30 hover:bg-accent/30 transition-all duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path>
</svg>
<span className="text-sm font-semibold text-accent">Transfer</span>
</button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/10 text-white/90 ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path>
</svg>
<span className="text-sm font-semibold text-white/90">History</span>
</button>
<button className="p-2 rounded-xl bg-white/10 text-white/80 ring-1 ring-white/20 hover:bg-white/20 transition-all duration-200">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line>
</svg>
</button>
</div>
</div>
</div>
</section>
</main>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden transition-opacity lg:hidden" id="backdrop"></div>




    </>
  );
}
