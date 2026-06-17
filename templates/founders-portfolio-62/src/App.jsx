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



      // Capital Over Time (Line)
      const ctx1 = document.getElementById('capitalChart').getContext('2d');
      const gradientBlue = ctx1.createLinearGradient(0, 0, 0, 220);
      gradientBlue.addColorStop(0, 'rgba(59,130,246,0.35)');
      gradientBlue.addColorStop(1, 'rgba(59,130,246,0)');
      const gradientGray = ctx1.createLinearGradient(0, 0, 0, 220);
      gradientGray.addColorStop(0, 'rgba(255,255,255,0.18)');
      gradientGray.addColorStop(1, 'rgba(255,255,255,0)');
      new Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [
            {
              label: 'Cohort 2023',
              data: [3.2, 6.4, 9.1, 15.6, 22.0, 38.2, 56.9, 74.2, 96.1, 121.4, 139.0, 151.3],
              borderColor: '#60A5FA',
              backgroundColor: gradientBlue,
              borderWidth: 2.5,
              pointRadius: 0,
              fill: true,
              tension: 0.35
            },
            {
              label: 'Cohort 2024',
              data: [2.4, 4.1, 7.3, 12.0, 18.1, 26.3, 40.8, 55.6, 72.9, 88.4, 100.1, 112.7],
              borderColor: 'rgba(255,255,255,0.35)',
              backgroundColor: gradientGray,
              borderWidth: 2,
              pointRadius: 0,
              fill: true,
              borderDash: [5,5],
              tension: 0.35
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: {
            backgroundColor: 'rgba(17,24,39,0.9)',
            borderColor: 'rgba(255,255,255,0.12)',
            borderWidth: 1,
            titleColor: '#fff',
            bodyColor: '#fff',
            cornerRadius: 10,
            displayColors: false,
            padding: 10,
            callbacks: { label: (ctx) => `$${ctx.parsed.y.toFixed(1)}M` }
          }},
          scales: {
            x: {
              grid: { display: false, drawBorder: false },
              ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.08)', drawBorder: false },
              ticks: {
                color: 'rgba(255,255,255,0.6)',
                font: { size: 11 },
                callback: (v) => `$${v}M`
              }
            }
          },
          interaction: { mode: 'index', intersect: false }
        }
      });

      // Deals by Sector (Horizontal Bar)
      const ctx2 = document.getElementById('sectorChart').getContext('2d');
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Healthtech','Proptech','Agritech','EV','Space'],
          datasets: [{
            label: 'Deals',
            data: [34, 22, 19, 15, 12],
            backgroundColor: ['#F472B6','#FBBF24','#34D399','#22D3EE','#A78BFA'],
            borderColor: 'rgba(255,255,255,0.15)',
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: {
            backgroundColor: 'rgba(17,24,39,0.9)',
            borderColor: 'rgba(255,255,255,0.12)',
            borderWidth: 1,
            titleColor: '#fff',
            bodyColor: '#fff',
            cornerRadius: 10,
            displayColors: false,
            padding: 10
          }},
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.06)' },
              ticks: { color: 'rgba(255,255,255,0.6)', font: { size: 11 } }
            },
            y: {
              grid: { display: false },
              ticks: { color: 'rgba(255,255,255,0.7)', font: { size: 11 } }
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
      

<div className="fixed inset-0 -z-10">
<img alt="futuristic abstract hero" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(168,85,247,0.15),transparent)]"></div>
<div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/10 blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-violet-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-neutral-950/60 to-neutral-950"></div>
</div>

<div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-6">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center shadow-sm">
<span className="text-white/90 text-lg font-semibold tracking-tight">
              IV
            </span>
</div>
<div>
<h1 className="text-xl md:text-2xl font-semibold tracking-tight">
              Investors View
            </h1>
<p className="text-xs text-white/60">
              Cohort outcomes and traction at a glance
            </p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative hidden lg:flex">
<input className="w-72 bg-white/5 backdrop-blur placeholder-white/40 text-white text-sm px-10 py-2.5 rounded-xl border border-white/10 outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition" placeholder="Search founders, sectors, rounds..." type="text"/>
<svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<button className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm flex items-center gap-2">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
            Export
          </button>
<button className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm flex items-center gap-2">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
</svg>
            Share
          </button>
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</header>

<div className="mt-8 mb-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Founders Portfolio
            </h2>
<p className="text-white/60 text-sm mt-1">
              Performance after graduation — capital raised, connections, and
              sector coverage
            </p>
</div>
<div className="flex items-center gap-2">
<button className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm">
              Last 12 months
            </button>
<button className="px-3.5 py-2 rounded-lg bg-blue-500/15 border border-blue-400/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400/40 transition text-sm flex items-center gap-2">
<svg className="text-blue-300" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 12h10"></path>
<path d="M12 7v10"></path>
</svg>
              Add Update
            </button>
</div>
</div>
</div>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-wide text-white/60">
              Total Raised
            </p>
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h8"></path>
</svg>
</div>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$184.6M</div>
<div className="text-xs text-emerald-400/90 mt-1 flex items-center gap-1">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17l6-6 4 4 8-8"></path>
</svg>
              +18% YoY
            </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-wide text-white/60">
              Founder×Investor Connections
            </p>
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 13a3 3 0 1 0-6 0"></path>
<circle cx="12" cy="7" r="3"></circle>
<path d="M2 21a8 8 0 0 1 20 0"></path>
</svg>
</div>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">1,273</div>
<div className="text-xs text-white/60 mt-1">
              Introductions facilitated
            </div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-wide text-white/60">
              Graduated Founders
            </p>
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">86</div>
<div className="text-xs text-white/60 mt-1">Across 3 cohorts</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-wide text-white/60">
              Avg Round Size
            </p>
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 13l3 3 7-7"></path>
</svg>
</div>
</div>
<div className="mt-4">
<div className="text-2xl font-semibold tracking-tight">$2.4M</div>
<div className="text-xs text-white/60 mt-1">
              Median pre‑money $18.2M
            </div>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 lg:col-span-1 hover:border-white/20 transition">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">
              Sector Coverage
            </h3>
<span className="text-xs text-white/60">by founder count</span>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20h10"></path>
<path d="M12 4v16"></path>
<path d="M5 9c2 0 3-2 5-2s3 2 5 2 3-2 5-2"></path>
</svg>
</div>
<span className="text-sm">Agritech</span>
</div>
<div className="text-sm font-medium">18</div>
</div>
<div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-emerald-400/70" style={{width: '36%'}}></div>
</div>

<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v4"></path>
<path d="M14 2v4"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<path d="M9 14h6"></path>
<path d="M12 11v6"></path>
</svg>
</div>
<span className="text-sm">Healthtech</span>
</div>
<div className="text-sm font-medium">26</div>
</div>
<div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-rose-400/80" style={{width: '52%'}}></div>
</div>

<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6h11a2 2 0 0 1 2 2v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2Z"></path>
<path d="M6 10h12"></path>
<path d="M8 16h.01M16 16h.01"></path>
</svg>
</div>
<span className="text-sm">EV</span>
</div>
<div className="text-sm font-medium">12</div>
</div>
<div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-cyan-400/80" style={{width: '24%'}}></div>
</div>

<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21V8l9-6 9 6v13"></path>
<path d="M9 21V9h6v12"></path>
</svg>
</div>
<span className="text-sm">Proptech</span>
</div>
<div className="text-sm font-medium">19</div>
</div>
<div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-amber-400/80" style={{width: '38%'}}></div>
</div>

<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m5 22 5-10 5 10"></path>
<path d="M6 12h12"></path>
<path d="M2 7l10-5 10 5-10 5z"></path>
</svg>
</div>
<span className="text-sm">Space</span>
</div>
<div className="text-sm font-medium">11</div>
</div>
<div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-violet-400/80" style={{width: '22%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-xs">
<span className="text-white/60">Total Coverage</span>
<span className="text-white/90 font-medium">86 founders</span>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:border-white/20 transition lg:col-span-1">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">
              Capital Raised Over Time
            </h3>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                Cohorts
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs hover:bg-blue-500/20 hover:border-blue-400/40 transition">
                Months
              </button>
</div>
</div>
<div className="h-52">
<canvas id="capitalChart"></canvas>
</div>
<div className="mt-3 flex items-center gap-6 text-xs">
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-blue-400"></span>
<span className="text-white/70">Cohort 2023</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-white/40"></span>
<span className="text-white/70">Cohort 2024</span>
</div>
</div>
</div>
</section>

<section className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:border-white/20 transition lg:col-span-1">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">
              Deals by Sector
            </h3>
<span className="text-xs text-white/60">last 12 months</span>
</div>
<div className="h-56">
<canvas id="sectorChart"></canvas>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:border-white/20 transition">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">
              Recent Funding &amp; Updates
            </h3>
<button className="text-xs px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition">
              View all
            </button>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/7 transition">
<img alt="company" className="h-9 w-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">TerraSense</p>
<span className="text-xs text-emerald-400">Seed</span>
</div>
<p className="text-xs text-white/70 mt-0.5">
                  Raised $2.1M led by GreenCap. New pilots in Kenya.
                </p>
<div className="text-[11px] text-white/50 mt-1">
                  Agritech • 2d ago
                </div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/7 transition">
<img alt="company" className="h-9 w-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">PulseAI</p>
<span className="text-xs text-sky-400">Series A</span>
</div>
<p className="text-xs text-white/70 mt-0.5">
                  $15.0M to scale remote diagnostics across EU.
                </p>
<div className="text-[11px] text-white/50 mt-1">
                  Healthtech • 5d ago
                </div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/7 transition">
<img alt="company" className="h-9 w-9 rounded-md object-cover" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Voltline</p>
<span className="text-xs text-amber-300">Grant</span>
</div>
<p className="text-xs text-white/70 mt-0.5">
                  Awarded $800k infrastructure grant for fast‑charging.
                </p>
<div className="text-[11px] text-white/50 mt-1">EV • 1w ago</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight">Companies</h3>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-1">
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                All
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                Agritech
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                Healthtech
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                EV
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                Proptech
              </button>
<button className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs hover:bg-white/10 hover:border-white/20 transition">
                Space
              </button>
</div>
<button className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-sm flex items-center gap-2">
<svg className="text-white/80" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M7 12h10"></path>
<path d="M10 18h4"></path>
</svg>
              Filters
            </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">TS</span>
</div>
<div>
<p className="text-sm font-medium">TerraSense</p>
<div className="text-[11px] text-white/60">
                    Agritech • Nairobi
                  </div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-lg bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                Active
              </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">Raised</div>
<div className="font-medium mt-0.5">$3.4M</div>
</div>
<div>
<div className="text-white/60">Stage</div>
<div className="font-medium mt-0.5">Seed</div>
</div>
<div>
<div className="text-white/60">Intros</div>
<div className="font-medium mt-0.5">42</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-emerald-400/80" style={{width: '64%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 text-[11px] text-white/60">
<span>Traction Index</span>
<span>64</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-xs flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
                Profile
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">PA</span>
</div>
<div>
<p className="text-sm font-medium">PulseAI</p>
<div className="text-[11px] text-white/60">
                    Healthtech • Berlin
                  </div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-lg bg-sky-400/10 text-sky-300 border border-sky-400/20">
                Hiring
              </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">Raised</div>
<div className="font-medium mt-0.5">$18.7M</div>
</div>
<div>
<div className="text-white/60">Stage</div>
<div className="font-medium mt-0.5">Series A</div>
</div>
<div>
<div className="text-white/60">Intros</div>
<div className="font-medium mt-0.5">73</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-sky-400/80" style={{width: '81%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 text-[11px] text-white/60">
<span>Traction Index</span>
<span>81</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-xs flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
                Profile
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">VL</span>
</div>
<div>
<p className="text-sm font-medium">Voltline</p>
<div className="text-[11px] text-white/60">EV • Austin</div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-lg bg-amber-400/10 text-amber-300 border border-amber-400/20">
                Pilot
              </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">Raised</div>
<div className="font-medium mt-0.5">$5.9M</div>
</div>
<div>
<div className="text-white/60">Stage</div>
<div className="font-medium mt-0.5">Seed</div>
</div>
<div>
<div className="text-white/60">Intros</div>
<div className="font-medium mt-0.5">28</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-amber-300/90" style={{width: '48%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 text-[11px] text-white/60">
<span>Traction Index</span>
<span>48</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-xs flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
                Profile
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">NX</span>
</div>
<div>
<p className="text-sm font-medium">NovaX</p>
<div className="text-[11px] text-white/60">Space • Seattle</div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-lg bg-violet-400/10 text-violet-300 border border-violet-400/20">
                R&amp;D
              </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">Raised</div>
<div className="font-medium mt-0.5">$11.2M</div>
</div>
<div>
<div className="text-white/60">Stage</div>
<div className="font-medium mt-0.5">Seed</div>
</div>
<div>
<div className="text-white/60">Intros</div>
<div className="font-medium mt-0.5">37</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-violet-400/90" style={{width: '58%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 text-[11px] text-white/60">
<span>Traction Index</span>
<span>58</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-xs flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
                Profile
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">HB</span>
</div>
<div>
<p className="text-sm font-medium">Habita</p>
<div className="text-[11px] text-white/60">Proptech • Madrid</div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-lg bg-amber-300/10 text-amber-200 border border-amber-300/20">
                Scaling
              </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">Raised</div>
<div className="font-medium mt-0.5">$9.4M</div>
</div>
<div>
<div className="text-white/60">Stage</div>
<div className="font-medium mt-0.5">Seed</div>
</div>
<div>
<div className="text-white/60">Intros</div>
<div className="font-medium mt-0.5">31</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-amber-200/90" style={{width: '55%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 text-[11px] text-white/60">
<span>Traction Index</span>
<span>55</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-xs flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
                Profile
              </button>
</div>
</div>

<div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-5 hover:bg-white/7 hover:border-white/20 transition">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">ST</span>
</div>
<div>
<p className="text-sm font-medium">SurgiTech</p>
<div className="text-[11px] text-white/60">
                    Healthtech • Boston
                  </div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded-lg bg-rose-400/10 text-rose-300 border border-rose-400/20">
                Clinical
              </span>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs">
<div>
<div className="text-white/60">Raised</div>
<div className="font-medium mt-0.5">$27.5M</div>
</div>
<div>
<div className="text-white/60">Stage</div>
<div className="font-medium mt-0.5">Series A</div>
</div>
<div>
<div className="text-white/60">Intros</div>
<div className="font-medium mt-0.5">89</div>
</div>
</div>
<div className="mt-4">
<div className="w-full h-1.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
<div className="h-full bg-rose-400/90" style={{width: '88%'}}></div>
</div>
<div className="flex items-center justify-between mt-2 text-[11px] text-white/60">
<span>Traction Index</span>
<span>88</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<img alt="founder" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/20" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition text-xs flex items-center gap-1.5">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M12 3v18"></path>
</svg>
                Profile
              </button>
</div>
</div>
</div>
</section>

<div className="mt-10 border-t border-white/10 pt-4 text-[11px] text-white/50">
        Data updates daily from portfolio CRM and founder submissions.
      </div>
</div>


    </>
  );
}
