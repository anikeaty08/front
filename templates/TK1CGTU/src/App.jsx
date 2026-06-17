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
                    if (!window.Chart) return;
                    const lc = document.getElementById('lineChart');
                    if (!lc) return;
                    const ctx = lc.getContext('2d');
                    const h = lc.offsetHeight || 128;
                    const gradient = ctx.createLinearGradient(0, 0, 0, h);
                    gradient.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
                    gradient.addColorStop(1, 'rgba(56, 189, 248, 0.05)');
              
                    new Chart(ctx, {
                      type: 'line',
                      data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [{
                          data: [12, 19, 14, 22, 18, 24],
                          borderColor: 'rgba(56, 189, 248, 1)',
                          backgroundColor: gradient,
                          fill: true,
                          tension: 0.35,
                          pointRadius: 0
                        }]
                      },
                      options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: { display: false },
                          tooltip: {
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderWidth: 1,
                            padding: 10,
                            titleColor: '#fff',
                            bodyColor: 'rgba(255,255,255,0.9)'
                          }
                        },
                        scales: {
                          x: {
                            grid: { display: false, drawBorder: false },
                            ticks: { color: 'rgba(255,255,255,0.55)', font: { family: 'Inter', size: 11 } }
                          },
                          y: {
                            grid: { color: 'rgba(255,255,255,0.08)', drawBorder: false },
                            ticks: { color: 'rgba(255,255,255,0.55)', font: { family: 'Inter', size: 11 }, beginAtZero: true }
                          }
                        }
                      }
                    });
                  })();
                


    (function() {
      if (!window.Chart) return;
      const canvas = document.getElementById('salesCategoryChart');
      if (!canvas) return;

      const existing = Chart.getChart(canvas);
      if (existing) existing.destroy();

      const ctx = canvas.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Ecommerce', 'Brand Representative', 'Direct Purchase'],
          datasets: [{
            data: [4500, 3200, 2889],
            backgroundColor: [
              '#d946ef', // fuchsia-500
              '#6366f1', // indigo-500
              '#a78bfa'  // violet-400
            ],
            borderWidth: 0,
            hoverOffset: 8,
            spacing: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '65%',
          rotation: Math.PI,
          circumference: Math.PI,
          layout: { padding: 0 },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 12,
              titleColor: '#fff',
              bodyColor: 'rgba(255,255,255,0.9)',
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((context.raw / total) * 100);
                  return `${context.label}: ${context.raw.toLocaleString()} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    })();

    (function() {
      if (!window.Chart) return;
      const canvas = document.getElementById('salesCategoryPie');
      if (!canvas) return;

      const existing = Chart.getChart(canvas);
      if (existing) existing.destroy();

      const ctx = canvas.getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Ecommerce', 'Brand Representative', 'Direct Purchase'],
          datasets: [{
            data: [4500, 3200, 2889],
            backgroundColor: [
              '#d946ef', // fuchsia-500
              '#6366f1', // indigo-500
              '#a78bfa'  // violet-400
            ],
            borderWidth: 0,
            hoverOffset: 6,
            spacing: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 12,
              titleColor: '#fff',
              bodyColor: 'rgba(255,255,255,0.9)',
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((context.raw / total) * 100);
                  return `${context.label}: ${context.raw.toLocaleString()} (${percentage}%)`;
                }
              }
            }
          }
        }
      });
    })();
  


    (function () {
      if (!window.Chart) return;
      const canvas = document.getElementById('radarChart');
      if (!canvas) return;

      // Destroy existing chart on this canvas if any
      const existing = Chart.getChart(canvas);
      if (existing) existing.destroy();

      const ctx = canvas.getContext('2d');
      const container = canvas.parentElement;
      const height = (container && container.clientHeight) ? container.clientHeight : 256;

      // Local colors
      const gridColor = 'rgba(255,255,255,0.08)';
      const labelColor = 'rgba(255,255,255,0.7)';

      // Gradients that fit container height
      const gradientIncome = ctx.createLinearGradient(0, 0, 0, height);
      gradientIncome.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      gradientIncome.addColorStop(1, 'rgba(56, 189, 248, 0.05)');

      const gradientOutcome = ctx.createLinearGradient(0, 0, 0, height);
      gradientOutcome.addColorStop(0, 'rgba(232, 121, 249, 0.35)');
      gradientOutcome.addColorStop(1, 'rgba(232, 121, 249, 0.05)');

      new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Income',
              data: [65, 45, 60, 30, 40, 55],
              borderColor: 'rgba(56, 189, 248, 1)',
              backgroundColor: gradientIncome,
              pointBackgroundColor: 'rgba(56, 189, 248, 1)',
              pointBorderColor: '#0b1020',
              pointRadius: 3,
              tension: 0.3
            },
            {
              label: 'Outcome',
              data: [50, 55, 70, 20, 35, 65],
              borderColor: 'rgba(167, 139, 250, 1)',
              backgroundColor: gradientOutcome,
              pointBackgroundColor: 'rgba(167, 139, 250, 1)',
              pointBorderColor: '#0b1020',
              pointRadius: 3,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#fff',
              bodyColor: 'rgba(255,255,255,0.9)',
              titleFont: { family: 'Inter', size: 12, weight: '600' },
              bodyFont: { family: 'Inter', size: 12, weight: '500' }
            }
          },
          scales: {
            r: {
              angleLines: { color: gridColor },
              grid: { color: gridColor },
              pointLabels: { color: labelColor, font: { family: 'Inter', size: 11 } },
              ticks: { display: false, beginAtZero: true, max: 80 }
            }
          }
        }
      });
    })();
  


      // Activate lucide icons
      lucide.createIcons();

      // Shared chart styling
      const gridColor = 'rgba(255,255,255,0.08)';
      const tickColor = 'rgba(255,255,255,0.55)';
      const labelColor = 'rgba(255,255,255,0.7)';

      // Bar Chart - New User
      const barCtx = document.getElementById('barChart').getContext('2d');
      const gradientBar = barCtx.createLinearGradient(0, 0, 0, 240);
      gradientBar.addColorStop(0, 'rgba(167, 139, 250, 0.9)');
      gradientBar.addColorStop(1, 'rgba(167, 139, 250, 0.2)');

      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: ['App Install', 'App Open', 'Sign Up', 'Home page', 'Course Start', 'Tutorials Start'],
          datasets: [{
            data: [80, 70, 70, 30, 78, 78],
            backgroundColor: gradientBar,
            borderRadius: 10,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(0,0,0,0.7)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              padding: 10,
              titleColor: '#fff',
              bodyColor: 'rgba(255,255,255,0.9)'
            }
          },
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: { color: tickColor, font: { family: 'Inter', size: 11 } }
            },
            y: {
              beginAtZero: true,
              max: 100,
              grid: { color: gridColor, drawBorder: false },
              ticks: { color: tickColor, font: { family: 'Inter', size: 11 }, stepSize: 25 }
            }
          }
        }
      });

      // Semi Arc Chart - Sales Category
      const semiCtx = document.getElementById('semiArcChart').getContext('2d');
      const segments = 18;
      const values = Array.from({ length: segments }, () => 5);
      const colors = Array.from({ length: segments }, (_, i) => {
        const t = i / (segments - 1);
        const hue = 340 - t * 260; // red -> violet
        return `hsl(${hue}, 90%, ${40 + t * 15}%)`;
      });

      new Chart(semiCtx, {
        type: 'doughnut',
        data: {
          labels: Array.from({ length: segments }, (_, i) => `S${i + 1}`),
          datasets: [{
            data: values,
            backgroundColor: colors,
            borderWidth: 0,
            hoverOffset: 2,
            spacing: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: '60%',
          rotation: Math.PI,
          circumference: Math.PI,
          plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
          }
        }
      });

      // Radar Chart - Cashflow
      const radarCtx = document.getElementById('radarChart').getContext('2d');
      const gradientA = radarCtx.createLinearGradient(0, 0, 0, 200);
      gradientA.addColorStop(0, 'rgba(56, 189, 248, 0.35)');
      gradientA.addColorStop(1, 'rgba(56, 189, 248, 0.05)');
      const gradientB = radarCtx.createLinearGradient(0, , 0, 200);
      gradientB.addColorStop(0, 'rgba(232, 121, 249, .35)');
      gradientB.addColorStop(1, 'rgba(232, 121, 249, 0.05)');

      new Chart(radarCtx, {
        type: 'radar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Income',
              data: [65, 45, 60, 30, 40, 55],
              borderColor: 'rgba(56, 189, 248, 1)',
              backgroundColor: gradientA,
              pointBackgroundColor: 'rgba(56, 189, 248, 1)',
              pointBorderColor: '#0b1020',
              pointRadius: 3,
              tension: 0.3
            },
            {
              label: 'Outcome',
              data: [50, 55, 70, 20, 35, 65],
              borderColor: 'rgba(167, 139, 250, 1)',
              backgroundColor: gradientB,
              pointBackgroundColor: 'rgba(167, 139, 250, 1)',
              pointBorderColor: '#0b1020',
              pointRadius: 3,
              tension: 0.3
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            r: {
              angleLines: { color: gridColor },
              grid: { color: gridColor },
              pointLabels: { color: labelColor, font: { family: 'Inter', size: 11 } },
              ticks: { display: false, stepSize: 20, beginAtZero: true, max: 80 }
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
      
<div className="relative" id="aura-emecfk0p6">

<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]"></div>
<div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-[120px]"></div>
</div>

<header className="sticky top-0 inset-x-0 z-50 supports-[backdrop-filter]:bg-white/5 bg-white/10 border-white/5 border-b backdrop-blur-lg" id="aura-emecfjzjt"><div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-5 pl-5" id="aura-emecfjyy8">
<div className="flex h-16 items-center justify-between" id="aura-emecfjwzn">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 grid place-items-center shadow-lg shadow-fuchsia-500/20">
<svg className="w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v8"></path><path className="" d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 .41 0 0 0-3.41 0z"></path><path d="M812h8"></path></svg>
</div>
<span className="text-[17px] font-semibold tracking-tight text-white">Pulse</span>
<span className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/60 sm:flex">
<svg className="w-[14px] h-[14px]" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle className="" cx="12" cy="14" r="8"></circle></svg>
                Realtime
              </span>
</div>
<div className="hidden md:flex items-center gap-2 text-white/70">
<div className="relative">
<input className="w-64 rounded-lg border border-white/10 bg-white/5 px-9 py-2 text-[13px] outline-none placeholder:text-white/40 focus:ring-2 focus:ring-violet-500/40" placeholder="Search..."/>
<i className="absolute left-3 top-2.5 h-4 w-4 text-white/40" data-lucide="search"></i>
</div>
<img alt="avatar" className="ml-2 h-8 w-8 rounded-full ring-2 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a7755e23-9ea2-4faf-9c0f-afe3b66519d8_320w.jpg" style={{}}/>
</div>
</div>
</div></header>

<main className="relative z-10 max-w-7xl lg:px-8 mr-auto ml-auto pt-8 pr-5 pb-8 pl-5" id="aura-emecfjuvl">

<div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<h1 className="text-[28px] font-semibold text-white tracking-tight">Dashboard</h1>
<p className="text-sm text-white/60">Insights overview · Last 6 months</p>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10">
<svg className="w-[16px] h-[16px]" data-lucide="calendar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Last 6 months
            </button>
<button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-2 text-sm font-medium tracking-tight text-white shadow-lg shadow-violet-700/20">
<svg className="w-[16px] h-[16px]" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
              Export
            </button>
</div>
</div>

<div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

<section className="xl:col-span-2 shadow-black/20 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-slate-200/10 to-slate-800/0 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold text-white">New User</h2>
<p className="text-xs text-white/50">Last 6 months</p>
</div>
<div className="flex items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1.5 text-white/70">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
                  Overall - 80%
                </span>
</div>
</div>
<div className="mt-6">
<div className="h-64 flex flex-col gap-3">
<div className="h-16">
<canvas className="w-full h-full" id="barChart"></canvas>
</div>
<div className="min-h-0 flex-1">
<canvas className="w-full h-full" height="360" id="lineChart" style={{display: 'block', boxSizing: 'border-box', height: '180px', width: '760px'}} width="1521"></canvas>
</div>

</div>
</div>
<div className="mt-4 grid grid-cols-6 text-center text-[11px] text-white/50">
<span className="">App Install</span>
<span className="">App Open</span>
<span className="">Sign Up</span>
<span className="">Home page</span>
<span className="">Course Start</span>
<span className="">Tutorials Start</span>
</div>
</section>

<section className="shadow-black/20 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-slate-200/10 to-slate-800/0 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold text-white">Sales Category</h2>
<p className="mt-1 flex items-center gap-1 text-xs text-emerald-400">
<i className="h-3.5 w-3.5" data-lucide="trending-up"></i>
        8% You sold 897 more items than usual
      </p>
</div>
</div>
<div className="mt-6">
<div className="h-56 md:h-64">
<canvas className="w-full h-full" height="512" id="salesCategoryPie" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '347px'}} width="694"></canvas>
</div>
</div><div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-500"></span><span className="text-white/70">Ecommerce</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span><span className="text-white/70">Brand Representative</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-violet-400"></span><span className="text-white/70">Direct Purchase</span>
</div>
</div>

</section>

<section className="shadow-black/20 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-slate-200/10 to-slate-800/0 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold text-white">How much you’re earning</h2>
<p className="text-xs text-white/60">Last 6 months</p>
</div>
</div>
<div className="mt-3">
<div className="text-2xl font-semibold tracking-tight text-white">$6,295.29</div>
</div>
<div className="relative mt-6 grid place-items-center">
<div className="relative w-full max-w-xs">

<svg className="w-full h-auto" viewbox="0 0 300 300">
<defs>
</defs>
<circle cx="150" cy="150" fill="none" opacity="0.3" r="115" stroke="url(#glow)" strokeWidth="1"></circle>
<circle cx="150" cy="150" fill="none" opacity="0.2" r="95" stroke="url(#glow)" strokeWidth="1"></circle>
<circle cx="150" cy="150" fill="none" opacity="0.15" r="75" stroke="url(#glow)" strokeWidth="1"></circle>

<g className="" fill="none" strokeLinecap="round">
<circle cx="150" cy="150" opacity="0.9" r="120" stroke="#8b5cf6" stroke-dasharray="1 11" strokeWidth="3"></circle>
<circle cx="150" cy="150" opacity="0.9" r="104" stroke="#22d3ee" stroke-dasharray="1 10" strokeWidth="3"></circle>
<circle className="" cx="150" cy="150" opacity="0.9" r="88" stroke="#e879f9" stroke-dasharray="1 9" strokeWidth="3"></circle>
<circle cx="150" cy="150" opacity="0.9" r="72" stroke="#a78bfa" stroke-dasharray="1 8" strokeWidth="3"></circle>
<circle cx="150" cy="150" opacity="0.9" r="56" stroke="#22d3ee" stroke-dasharray="1 7" strokeWidth="3"></circle>
<circle cx="150" cy="150" opacity="0.9" r="40" stroke="#e879f9" stroke-dasharray="1 6" strokeWidth="3"></circle>
</g>

<circle className="" cx="150" cy="150" fill="#0f1224" opacity="0.8" r="22" stroke="#a78bfa" strokeWidth="2"></circle>
</svg>
<div className="pointer-events-none absolute inset-0 grid place-items-center">
<div className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1.5 text-sm font-medium tracking-tight text-white shadow-inner shadow-black/30 ring-1 ring-white/10">
                    89%
                  </div>
</div>
</div>
</div>
<div className="mt-6 flex items-center gap-4 text-xs">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-400"></span><span className="text-white/70">Figma</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span><span className="text-white/70">Sketch</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-violet-400"></span><span className="text-white/70">Framer</span>
</div>
</div>
</section>

<section className="shadow-black/20 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-slate-200/10 to-slate-800/0 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-xl">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold text-white">Cashflow</h2>
<p className="text-xs text-white/60">per month</p>
</div>
</div>
<div className="mt-3 text-2xl font-semibold tracking-tight text-white">$2,895.89</div>
<div className="mt-6">
<div className="h-56 md:h-64">
<canvas className="w-full h-full" height="512" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '347px'}} width="694"></canvas>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs text-white/70">
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-8 rounded-full bg-sky-400"></span> Income <span className="text-white/40">6:47 AM</span>
</span>
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-8 rounded-full bg-fuchsia-400"></span> Outcome <span className="text-white/40">6:51 PM</span>
</span>
</div>

</section>

<section className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/20">
<div className="flex items-start justify-between">
<div className="">
<h2 className="text-[18px] tracking-tight font-semibold text-white">Top Content</h2>
<p className="text-xs text-white/60">Last 14 days</p>
</div>
<button className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs hover:bg-white/10">
                More
                <i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-4">
<div className="text-sm text-white/60">Estimated revenue</div>
<div className="text-2xl font-semibold tracking-tight text-white">$6,295.29</div>
</div>
<div className="mt-5 space-y-5">

<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b80da09e-06de-4937-adad-b2f084d1e56e_320w.jpg" style={{}}/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="truncate text-[13px] font-medium tracking-tight text-white">Build an Interactive site with...</p>
<span className="text-xs text-white/60">$227.90</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b1724042-77ff-4e36-bb10-5ce0b9d24cf2_320w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="truncate text-[13px] font-medium tracking-tight text-white">Design and prototype</p>
<span className="text-xs text-white/60">$157.89</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[54%] rounded-full bg-gradient-to-r from-sky-400 to-violet-500"></div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/60fb3f64-51fc-4b08-883a-ce0554dfbf6b_800w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="truncate text-[13px] font-medium tracking-tight text-white">UI/UX web design</p>
<span className="text-xs text-white/60">$257.49</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[81%] rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500"></div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-lg object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7f714d78-f87b-4089-8885-b4f58693923c_800w.jpg"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="truncate text-[13px] font-medium tracking-tight text-white">Master no‑code web design</p>
<span className="text-xs text-white/60">$190.98</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-[64%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>


    </>
  );
}
