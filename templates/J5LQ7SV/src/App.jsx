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



  (function () {
    const el = document.getElementById('expenseDonutChart');
    if (!el || !window.Chart) return;
    const ctx = el.getContext('2d');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Subscriptions', 'Ads', 'Tools', 'Misc'],
        datasets: [
          {
            data: [642, 544, 349, 407],
            backgroundColor: [
              'rgba(99,102,241,0.9)',   // indigo-500
              'rgba(244,114,182,0.9)', // fuchsia-400/rose-400 vibe
              'rgba(56,189,248,0.9)',  // cyan-400
              'rgba(52,211,153,0.9)'   // emerald-400
            ],
            borderColor: 'rgba(2,6,23,0.5)',
            borderWidth: 2,
            hoverOffset: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '62%',
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(2,6,23,0.9)',
            titleColor: '#E2E8F0',
            bodyColor: '#CBD5E1',
            padding: 10,
            borderColor: 'rgba(255,255,255,0.08)',
            borderWidth: 1,
            displayColors: false
          }
        }
      }
    });
  })();



    // Initialize Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
    });

    // Charts
    const radarEl = document.getElementById('radarChart');
    if (radarEl) {
      const radarCtx = radarEl.getContext('2d');
      new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Income',
              data: [65, 59, 50, 95, 40, 60],
              borderColor: 'rgba(236,72,153,1)',
              backgroundColor: 'rgba(236,72,153,0.15)',
              pointBackgroundColor: 'rgba(236,72,153,1)',
              borderWidth: 2
            },
            {
              label: 'Outcome',
              data: [40, 80, 60, 20, 45, 70],
              borderColor: 'rgba(56,189,248,1)',
              backgroundColor: 'rgba(56,189,248,0.12)',
              pointBackgroundColor: 'rgba(56,189,248,1)',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            r: {
              angleLines: { color: 'rgba(148,163,184,0.15)' },
              grid: { color: 'rgba(148,163,184,0.15)' },
              pointLabels: { color: 'rgba(203,213,225,0.9)', font: { size: 11, family: 'Inter' } },
              ticks: { display: false, backdropColor: 'transparent' }
            }
          }
        }
      });
    }

    const barEl = document.getElementById('barChart');
    if (barEl) {
      const barCtx = barEl.getContext('2d');
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['App Install', 'Open', 'Sign Up', 'Home page'],
          datasets: [
            {
              label: 'New Users',
              data: [46, 41, 30, 35],
              backgroundColor: [
                'rgba(99,102,241,0.85)',
                'rgba(129,140,248,0.85)',
                'rgba(167,139,250,0.85)',
                'rgba(244,114,182,0.85)'
              ],
              borderRadius: 10,
              maxBarThickness: 24
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 11, family: 'Inter' } }
            },
            y: {
              grid: { color: 'rgba(148,163,184,0.15)' },
              ticks: { color: 'rgba(203,213,225,0.9)', font: { size: 11, family: 'Inter' }, stepSize: 10, beginAtZero: true }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(2,6,23,0.9)',
              titleColor: '#E2E8F0',
              bodyColor: '#CBD5E1',
              padding: 10,
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e357e9e5-97fe-48d5-ae99-58b71d8233f0_3840w.jpg")'}}></div>

<div className="pointer-events-none fixed inset-0">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-1/3 h-72 w-72 translate-y-1/3 rounded-full bg-cyan-500/20 blur-3xl"></div>
</div>
<header className="relative z-10 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-4 pl-6">
<div className="flex items-center justify-between">
<div className="">
<h1 className="text-[28px] md:text-[32px] tracking-tight font-semibold text-white">StatsApp</h1>
<p className="text-sm text-slate-400 mt-1 font-normal">Insights, content, and revenue — at a glance</p>
</div>
<div className="hidden sm:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl px-3.5 py-2 bg-white/5 hover:bg-white/10 text-slate-200 transition">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium">New</span>
</button>
<button className="inline-flex items-center justify-center rounded-xl p-2.5 bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-settings w-5 h-5 text-slate-200" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
</header>
<main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-16">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="relative ring-1 ring-white/10 overflow-hidden bg-gradient-to-br from-slate-900/70 to-slate-900/30 rounded-[34px] shadow-2xl">
<div className="absolute inset-0 backdrop-blur-lg"></div>
<div className="relative p-4">

<div className="flex items-center justify-between pt-1 pb-3">
<span className="text-[13px] font-medium text-slate-300">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-wifi w-4 h-4 text-slate-300" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-signal w-4 h-4 text-slate-300" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-battery w-5 h-5 text-slate-300" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight">StatsApp</span>
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 ring-1 ring-white/20">
<svg className="lucide lucide-globe-2 w-[14px] h-[14px] text-white" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-bell w-4 h-4 text-slate-200" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-plus w-4 h-4 text-slate-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div className="">
<p className="text-[13px] text-slate-400 font-normal">Cashflow</p>
<p className="text-[26px] tracking-tight font-semibold text-white mt-1">$2,895.89</p>
<p className="text-xs text-slate-400 font-normal">per month</p>
</div>
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 ring-1 ring-white/30 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-5 h-5 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>

<div className="mt-5">
<div className="relative h-64">
<canvas className="" height="512" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '325px'}} width="650"></canvas>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400"></span>
<span className="text-slate-300 font-medium">Income</span>
<span className="text-slate-500 font-normal">6:47 AM</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
<span className="text-slate-300 font-medium">Outcome</span>
<span className="text-slate-500 font-normal">6:51 PM</span>
</div>
</div>
</div><div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-[13px] text-slate-400 font-normal">Expenses</p>
<p className="text-[22px] tracking-tight font-semibold text-white mt-1">$1,942.10</p>
<p className="text-xs text-slate-400 font-normal">this month</p>
</div>
<div className="h-10 w-10 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 ring-1 ring-white/30 flex items-center justify-center">
<svg className="lucide lucide-wallet w-5 h-5 text-white" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
</div>
<div className="mt-5">
<div className="relative h-40">
<canvas height="320" id="expenseDonutChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '325px'}} width="650"></canvas>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-indigo-400"></span>
<span className="text-slate-300 font-medium">Subscriptions</span>
<span className="ml-auto text-slate-400 font-medium">$642</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400"></span>
<span className="text-slate-300 font-medium">Ads</span>
<span className="ml-auto text-slate-400 font-medium">$544</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-cyan-400"></span>
<span className="text-slate-300 font-medium">Tools</span>
<span className="ml-auto text-slate-400 font-medium">$349</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-slate-300 font-medium">Misc</span>
<span className="ml-auto text-slate-400 font-medium">$407</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0">
<div className="ring-1 ring-white/10 bg-slate-900/60 rounded-2xl mr-3 mb-3 ml-3 backdrop-blur">
<nav className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">Dashboard</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-grid w-5 h-5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="font-medium">Content</span>
</button>
<button className="relative -mt-8 h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 ring-2 ring-slate-900 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
<svg className="lucide lucide-chart-pie w-[22px] h-[22px] text-white" data-lucide="chart-pie" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-indigo-300">
<svg className="lucide lucide-coins w-5 h-5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="font-medium">Revenue</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">Community</span>
</button>
</nav>
</div>
</div>
</div>

<div className="relative ring-1 ring-white/10 overflow-hidden bg-gradient-to-br from-slate-900/70 to-slate-900/30 rounded-[34px] shadow-2xl">
<div className="absolute inset-0 backdrop-blur-lg"></div>
<div className="relative p-4">

<div className="flex items-center justify-between pt-1 pb-3">
<span className="text-[13px] font-medium text-slate-300">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-wifi w-4 h-4 text-slate-300" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-signal w-4 h-4 text-slate-300" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-battery w-5 h-5 text-slate-300" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight">StatsApp</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-search w-4 h-4 text-slate-200" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-plus w-4 h-4 text-slate-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="mt-4 grid grid-cols-4 gap-2">
<button className="px-3 py-2 rounded-xl bg-white/10 ring-1 ring-white/15 text-slate-100 text-[13px] font-medium">Overview</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Content</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Audience</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Trends</button>
</div>

<div className="mt-4 rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold text-white">New User</h2>
<p className="text-xs text-slate-400 font-normal">Last 6 months</p>
</div>
<span className="text-xs text-slate-400 font-medium">Overall — 80%</span>
</div>
<div className="mt-4">
<div className="relative h-48">
<canvas className="" height="384" id="barChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '325px'}} width="650"></canvas>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 bg-white/5 rounded-2xl mt-4 pt-4 pr-4 pb-4 pl-4" id="aura-eme9kmdnf">
<h3 className="text-[18px] tracking-tight font-semibold text-white">Top Content</h3>
<p className="text-xs text-slate-400 font-normal mt-0.5">Last 14 days</p>
<div className="mt-3 flex items-baseline justify-between">
<div className="">
<p className="text-[22px] tracking-tight font-semibold text-white">$6,295.29</p>
<p className="text-xs text-slate-400 font-normal">Estimated revenue</p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-1.5 ring-1 ring-white/10 text-[12px] text-slate-200 font-medium transition">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Export
              </button>
</div>
<div className="mt-4 space-y-3">
<div className="">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-slate-300 font-medium">Build an Interactive site</span>
<span className="text-slate-400 font-medium">$157.49</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-fuchsia-500"></div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-slate-300 font-medium">Ship an Interactive site</span>
<span className="text-slate-400 font-medium">$157.49</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
</div>
</div>
</div>
</div><div className="ring-1 ring-white/10 bg-white/5 rounded-2xl mt-4 pt-4 pr-4 pb-4 pl-4" id="aura-eme9lfa1k">
<h3 className="text-[18px] tracking-tight font-semibold text-white">Trending Content</h3>
<p className="text-xs text-slate-400 font-normal mt-0.5">Last 30 days</p>
<div className="mt-3 flex items-baseline justify-between">
<div className="">
<p className="text-[22px] tracking-tight font-semibold text-white">$7,842.10</p>
<p className="text-xs text-slate-400 font-normal">Total revenue</p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-1.5 ring-1 ring-white/10 text-[12px] text-slate-200 font-medium transition">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
      Export
    </button>
</div>
<div className="mt-4 space-y-3">
<div className="">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-slate-300 font-medium">Design Systems: From Concept to Launch</span>
<span className="text-slate-400 font-medium">$482.20</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-fuchsia-500"></div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between text-xs mb-1">
<span className="text-slate-300 font-medium">Embracing Innovation: The Future of Art</span>
<span className="text-slate-400 font-medium">$376.05</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-indigo-500"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0">
<div className="ring-1 ring-white/10 bg-slate-900/60 rounded-2xl mr-3 mb-3 ml-3 backdrop-blur">
<nav className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<button className="flex flex-col items-center gap-1 text-[11px] text-indigo-300">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">Dashboard</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-grid w-5 h-5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="font-medium">Content</span>
</button>
<button className="relative -mt-8 h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 ring-2 ring-slate-900 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
<svg className="lucide lucide-chart-bar w-[22px] h-[22px] text-white" data-lucide="chart-bar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-coins w-5 h-5" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="font-medium">Revenue</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">Community</span>
</button>
</nav>
</div>
</div>
</div>

<div className="relative rounded-[34px] bg-gradient-to-br from-slate-900/70 to-slate-900/30 ring-1 ring-white/10 shadow-2xl overflow-hidden">
<div className="absolute inset-0 backdrop-blur-lg"></div>
<div className="relative p-4">

<div className="flex items-center justify-between pt-1 pb-3">
<span className="text-[13px] font-medium text-slate-300">9:41</span>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-wifi w-4 h-4 text-slate-300" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-signal w-4 h-4 text-slate-300" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-battery w-5 h-5 text-slate-300" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex items-center justify-between px-1">
<div className="flex items-center gap-2">
<span className="text-base font-semibold tracking-tight">StatsApp</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-search w-4 h-4 text-slate-200" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
<svg className="lucide lucide-plus w-4 h-4 text-slate-200" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>

<div className="mt-4 grid grid-cols-4 gap-2">
<button className="px-3 py-2 rounded-xl bg-white/10 ring-1 ring-white/15 text-slate-100 text-[13px] font-medium">Views</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Type</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">Visibility</button>
<button className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-300 text-[13px] font-medium">More</button>
</div>

<section className="mt-4">
<h2 className="text-[18px] tracking-tight font-semibold text-white">Courses</h2>
<div className="grid grid-cols-1 gap-3 mt-3">

<article className="rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
<div className="relative">
<img alt="3D render" className="h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc7dca88-7fde-4832-9e45-adfd70925fec_800w.jpg" style={{}}/>
<span className="absolute top-2 right-2 text-[11px] font-medium bg-slate-900/70 backdrop-blur px-2 py-1 rounded-md ring-1 ring-white/10">38:30</span>
</div>
<div className="p-3">
<h3 className="text-[15px] tracking-tight font-semibold text-white">Embracing Innovation: The Future of Art and Design</h3>
<p className="text-xs text-slate-400 font-normal mt-1">14k views • 1 month ago</p>
</div>
</article>

<article className="overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-2xl">
<div className="relative">
<img alt="Abstract 3D" className="h-32 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/551013be-61e3-49e3-9001-73a3a9fea0c0_800w.jpg" style={{}}/>
<span className="absolute top-2 right-2 text-[11px] font-medium bg-slate-900/70 backdrop-blur px-2 py-1 rounded-md ring-1 ring-white/10">12:45</span>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<h3 className="text-[15px] tracking-tight font-semibold text-white">Design Systems: From Concept to Launch</h3>
<p className="text-xs text-slate-400 font-normal mt-1">92k views • 2 weeks ago</p>
</div>
</article>
</div>
</section>

<section className="mt-5">
<h2 className="text-[18px] tracking-tight font-semibold text-white">Tutorials</h2>
<div className="mt-3 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
<div className="relative">
<img alt="Minimal render" className="h-28 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d25c2d1-8a41-471b-bac8-c69712d13bb1_800w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<span className="absolute bottom-2 right-2 text-[11px] font-medium bg-slate-900/70 backdrop-blur px-2 py-1 rounded-md ring-1 ring-white/10">5:50</span>
</div>
<div className="p-3">
<h3 className="text-[15px] tracking-tight font-semibold text-white">Design and Prototype</h3>
<p className="text-xs text-slate-400 font-normal mt-1">14k views • 1 month ago</p>
</div>
</div>
</section>
</div>

<div className="sticky bottom-0 mt-6">
<div className="mx-3 mb-3 rounded-2xl bg-slate-900/60 backdrop-blur ring-1 ring-white/10">
<nav className="flex items-center justify-between px-4 py-3">
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">Dashboard</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-indigo-300">
<svg className="lucide lucide-grid w-5 h-5" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="font-medium">Content</span>
</button>
<button className="relative -mt-8 h-12 w-12 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 ring-2 ring-slate-900 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
<svg className="lucide lucide-camera w-[22px] h-[22px] text-white" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-chart-line w-5 h-5" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="font-medium">Analytic</span>
</button>
<button className="flex flex-col items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">Community</span>
</button>
</nav>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
