import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
base: {
950: '#07090F',
900: '#090C14',
800: '#0B0F1A',
700: '#0F1423'
},
ink: {
100: '#E6EAF5',
200: '#C6CCE2',
300: '#A4ADC8',
400: '#7F89A6',
500: '#626B87',
600: '#4B5268',
700: '#3A3F50',
800: '#2A2D3A'
},
accent: {
purple: '#7C5CFC',
blue: '#3B82F6',
teal: '#14F1D9',
sol1: '#14F195',
sol2: '#59F7E6',
sol3: '#9945FF'
}
},
boxShadow: {
glow: '0 0 0 1px rgba(124,92,252,.25), 0 10px 60px rgba(124,92,252,.35)',
soft: '0 4px 24px rgba(0,0,0,.35)'
},
dropShadow: {
glow: '0 0 40px rgba(153,69,255,.45)'
},
backdropBlur: {
xs: '2px'
}
}
}
}



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });

      // Charts
      const tpsCtx = document.getElementById('tpsChart');
      const allocCtx = document.getElementById('allocChart');
      const miniCtx = document.getElementById('miniChart');

      const gridColor = 'rgba(255,255,255,0.06)';
      const textColor = 'rgba(230,234,245,0.8)';

      if (tpsCtx) {
        new Chart(tpsCtx, {
          type: 'line',
          data: {
            labels: Array.from({length: 24}, (_, i) => i + ':00'),
            datasets: [
              {
                label: 'TPS',
                data: Array.from({length: 24}, () => Math.floor(3000 + Math.random() * 1500)),
                borderColor: '#14F195',
                pointRadius: 0,
                tension: 0.38,
                borderWidth: 2
              },
              {
                label: 'Peak',
                data: Array.from({length: 24}, () => Math.floor(3800 + Math.random() * 1200)),
                borderColor: '#9945FF',
                pointRadius: 0,
                tension: 0.38,
                borderDash: [4,4],
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                ticks: { color: textColor, maxTicksLimit: 8 },
                grid: { color: gridColor }
              },
              y: {
                ticks: { color: textColor, maxTicksLimit: 5 },
                grid: { color: gridColor }
              }
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(9,12,20,0.9)',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                titleColor: '#fff',
                bodyColor: '#E6EAF5'
              }
            }
          }
        });
      }

      if (allocCtx) {
        new Chart(allocCtx, {
          type: 'doughnut',
          data: {
            labels: ['SOL', 'USDC', 'mSOL', 'JitoSOL'],
            datasets: [{
              data: [42, 28, 18, 12],
              backgroundColor: ['#14F195', '#3B82F6', '#7C5CFC', '#9945FF'],
              borderWidth: 0
            }]
          },
          options: {
            cutout: '60%',
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: textColor, boxWidth: 10 }
              },
              tooltip: { backgroundColor: 'rgba(9,12,20,0.9)', bodyColor: '#E6EAF5' }
            }
          }
        });
      }

      if (miniCtx) {
        new Chart(miniCtx, {
          type: 'line',
          data: {
            labels: Array.from({length: 12}, (_, i) => `M${i+1}`),
            datasets: [{
              data: [12,15,14,18,16,20,22,21,24,27,25,30],
              borderColor: '#7C5CFC',
              backgroundColor: 'rgba(124,92,252,.15)',
              fill: true,
              pointRadius: 0,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            },
            plugins: { legend: { display: false }, tooltip: { enabled: false } }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative min-h-screen overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-[-10%] h-[80vh] w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-accent.sol3/15 via-accent.stone/10 to-accent.sol1/10 blur-[80px]" style={{}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-xs bg-base-900/70 border-b border-white/5">
<div className="max-w-6xl flex mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="relative grid place-items-center h-9 w-9 rounded-lg bg-base-800 ring-1 ring-white/10 overflow-hidden" style={{}}>
<span className="absolute inset-0 bg-gradient-to-br from-accent.sol3/70 via-accent.stone/40 to-accent.sol1/70 opacity-80" style={{}}></span>
<span className="relative text-white font-semibold font-poppins" style={{}}>B</span>
</span>
<span className="text-lg font-semibold tracking-tight font-poppins" style={{}}>BlackBall</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-ink-300 hover:text-white transition font-poppins" href="#features" style={{}}>Features</a>
<a className="text-ink-300 hover:text-white transition font-poppins" href="#benefits" style={{}}>Benefits</a>
<a className="text-ink-300 hover:text-white transition font-poppins" href="#pricing" style={{}}>Pricing</a>
<a className="text-ink-300 hover:text-white transition font-poppins" href="#testimonials" style={{}}>Testimonials</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90 hover:text-white ring-1 ring-white/10 hover:ring-white/20 transition font-poppins" style={{}}>
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
              Connect Wallet
            </button>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-base-900 bg-gradient-to-r from-accent.sol1 to-accent.sol3 hover:opacity-95 transition font-poppins" href="#cta" style={{}}>
              Get Started
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-12">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-4xl md:text-6xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>
              Manage Web3 Operations Easily and Smartly
            </h1>
<p className="text-ink-300 md:text-lg text-base font-poppins mt-4" style={{}}>
              BlackBall helps you orchestrate on-chain workflows, monitor Solana activity, and automate treasury operations with an intuitive, professional dashboard.
            </p>
<div className="mt-8 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 text-base-900 text-base font-medium tracking-tight font-poppins bg-gradient-to-r from-accent.sol1 to-accent.sol3 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-glow" href="#pricing" style={{}}>
                Try Free
                <svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base text-white/90 ring-1 ring-white/10 hover:ring-white/20 transition font-poppins" href="#features" style={{}}>
                Explore Features
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="relative mt-12 md:mt-16">

<div className="absolute -inset-6 md:-inset-10 -z-10 rounded-3xl bg-gradient-to-r from-accent.sol3/20 via-accent.stone/20 to-accent.sol1/20 blur-2xl" style={{}}></div>
<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 shadow-soft overflow-hidden" style={{}}>
<div className="px-4 md:px-6 py-3 flex items-center justify-between border-b border-white/5">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-orange-400" style={{}}></span>
<span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-pink-400"></span>
</div>
<div className="text-ink-300 text-sm font-poppins" style={{}}>mainnet-beta • Dashboard</div>
<div className="flex items-center gap-2 text-ink-300">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 p-4 md:p-6">

<aside className="md:col-span-1">
<div className="space-y-3">
<div className="flex items-center gap-3 rounded-xl bg-base-900/60 ring-1 ring-white/10 p-3" style={{}}>
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-accent.sol1" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-sm text-white font-poppins" style={{}}>Overview</span>
</div>
<div className="flex items-center gap-3 rounded-xl bg-base-900/30 ring-1 ring-white/10/0 p-3 hover:bg-base-900/50 transition">
<svg className="lucide lucide-activity w-4 h-4 text-ink-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-sm text-ink-300 font-poppins" style={{}}>Transactions</span>
</div>
<div className="flex items-center gap-3 rounded-xl bg-base-900/30 p-3 hover:bg-base-900/50 transition">
<svg className="lucide lucide-shield w-4 h-4 text-ink-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-ink-300 font-poppins" style={{}}>Security</span>
</div>
<div className="flex items-center gap-3 rounded-xl bg-base-900/30 p-3 hover:bg-base-900/50 transition">
<svg className="lucide lucide-cpu w-4 h-4 text-ink-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-sm text-ink-300 font-poppins" style={{}}>Automation</span>
</div>
<div className="flex items-center gap-3 rounded-xl bg-base-900/30 p-3 hover:bg-base-900/50 transition">
<svg className="lucide lucide-users w-4 h-4 text-ink-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-ink-300 font-poppins" style={{}}>Teams</span>
</div>
</div>
<div className="mt-6 rounded-xl bg-gradient-to-br from-accent.sol3/10 via-base-800 to-accent.sol1/10 ring-1 ring-white/10 p-4" style={{}}>
<div className="flex items-center justify-between">
<span className="text-ink-300 text-xs font-poppins" style={{}}>Treasury Balance</span>
<span className="text-ink-300 text-xs font-poppins" style={{}}>SOL</span>
</div>
<div className="mt-2 text-2xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>65,000.54</div>
<div className="mt-1 text-xs text-ink-400 font-poppins" style={{}}>+4.2% last 24h</div>
</div>
</aside>

<div className="md:col-span-2">
<div className="rounded-2xl bg-base-900/60 ring-1 ring-white/10 p-4" style={{}}>
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Network Throughput</h3>
<p className="text-ink-400 text-sm font-poppins" style={{}}>TPS over the last 24 hours</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs rounded-full bg-base-800 ring-1 ring-white/10 text-ink-300 font-poppins" style={{}}>24h</button>
<button className="px-3 py-1.5 text-xs rounded-full bg-base-800 ring-1 ring-white/10 text-ink-300 font-poppins" style={{}}>7d</button>
<button className="px-3 py-1.5 text-xs rounded-full bg-gradient-to-r from-accent.sol1 to-accent.sol3 text-base-900 font-poppins" style={{}}>30d</button>
</div>
</div>
<div className="mt-4">

<div className="relative">
<canvas className="" height="210" id="tpsChart" style={{display: 'block', boxSizing: 'border-box', height: '140px', width: '445px'}} width="668"></canvas>
</div>
</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-xl bg-base-900/60 ring-1 ring-white/10 p-4" style={{}}>
<div className="flex items-center justify-between">
<h4 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Automations</h4>
<svg className="lucide lucide-bot w-4 h-4 text-accent.sol1" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<p className="mt-1 text-ink-400 text-sm font-poppins" style={{}}>Scheduled swaps &amp; streaming payouts</p>
<div className="mt-3 flex items-center gap-4">
<div className="text-2xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>128</div>
<span className="text-xs text-ink-400 font-poppins" style={{}}>active workflows</span>
</div>
</div>
<div className="rounded-xl bg-base-900/60 ring-1 ring-white/10 p-4" style={{}}>
<div className="flex items-center justify-between">
<h4 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Allocation</h4>
<svg className="lucide lucide-pie-chart w-4 h-4 text-accent.sol3" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<p className="mt-1 text-ink-400 text-sm font-poppins" style={{}}>Treasury distribution</p>
<div className="mt-2">
<div className="relative">
<canvas className="" height="297" id="allocChart" style={{display: 'block', boxSizing: 'border-box', height: '198px', width: '198px'}} width="297"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="features">
<div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-white/5 to-transparent" style={{}}></div>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center">
<h2 className="text-3xl md:text-5xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>Powerful Features to Elevate Your On‑Chain Stack</h2>
<p className="mt-3 text-ink-300 max-w-3xl mx-auto font-poppins" style={{}}>
              All the tools you need to monitor, automate, and secure your Solana operations—from one polished dashboard.
            </p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">

<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-accent.sol3/20 to-accent.sol1/20 ring-1 ring-white/10" style={{}}>
<svg className="lucide lucide-activity w-5 h-5 text-accent.sol3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<h3 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Unified On‑Chain Overview</h3>
</div>
<span className="text-xs text-ink-400 font-poppins" style={{}}>Realtime</span>
</div>
<p className="mt-2 text-ink-300 font-poppins" style={{}}>View wallets, programs, balances, and activity across all your Solana addresses at once.</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-base-900/50 ring-1 ring-white/10 p-4" style={{}}>
<p className="text-xs text-ink-400 font-poppins" style={{}}>Total Value</p>
<p className="text-xl font-semibold tracking-tight text-white font-poppins" style={{}}>$6,600,000</p>
</div>
<div className="rounded-xl bg-base-900/50 ring-1 ring-white/10 p-4" style={{}}>
<p className="text-xs text-ink-400 font-poppins" style={{}}>Programs</p>
<p className="text-xl font-semibold tracking-tight text-white font-poppins" style={{}}>42</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-accent.sol3/20 to-accent.sol1/20 ring-1 ring-white/10" style={{}}>
<svg className="lucide lucide-settings-2 w-5 h-5 text-accent.sol1" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</span>
<h3 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Smart Automations</h3>
</div>
<span className="text-xs text-ink-400 font-poppins" style={{}}>No Code</span>
</div>
<p className="mt-2 text-ink-300 font-poppins" style={{}}>Create rules for swaps, payroll streams, rebalancing, and alerts. Execute transactions at precise conditions.</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-base-900/50 ring-1 ring-white/10 p-4" style={{}}>
<p className="text-xs text-ink-400 font-poppins" style={{}}>Active Flows</p>
<p className="text-xl font-semibold tracking-tight text-white font-poppins" style={{}}>128</p>
</div>
<div className="rounded-xl bg-base-900/50 ring-1 ring-white/10 p-4" style={{}}>
<p className="text-xs text-ink-400 font-poppins" style={{}}>Success Rate</p>
<p className="text-xl font-semibold tracking-tight text-white font-poppins" style={{}}>99.97%</p>
</div>
</div>
</div>

<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-accent.sol3/20 to-accent.sol1/20 ring-1 ring-white/10" style={{}}>
<svg className="lucide lucide-shield-check w-5 h-5 text-accent.sol3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<h3 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Enterprise‑Grade Security</h3>
</div>
<span className="text-xs text-ink-400 font-poppins" style={{}}>MPC</span>
</div>
<p className="mt-2 text-ink-300 font-poppins" style={{}}>Role‑based approvals, policy guards, and hardware‑backed signing to keep funds safe.</p>
<ul className="mt-3 space-y-2 text-sm text-ink-300">
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Multisig &amp; policy engine</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Spending limits &amp; time locks</li>
</ul>
</div>

<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-accent.sol3/20 to-accent.sol1/20 ring-1 ring-white/10" style={{}}>
<svg className="lucide lucide-line-chart w-5 h-5 text-accent.sol1" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</span>
<h3 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Expense &amp; Revenue Analytics</h3>
</div>
<span className="text-xs text-ink-400 font-poppins" style={{}}>Insights</span>
</div>
<p className="mt-2 text-ink-300 font-poppins" style={{}}>Track inflows, outflows, and program performance with live charts and exportable reports.</p>
<div className="mt-4 rounded-xl bg-base-900/60 ring-1 ring-white/10 p-4" style={{}}>
<div className="relative">
<canvas className="" height="135" id="miniChart" style={{display: 'block', boxSizing: 'border-box', height: '90px', width: '296px'}} width="444"></canvas>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="benefits">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-r from-accent.sol3/15 via-accent.stone/15 to-accent.sol1/15 blur-xl" style={{}}></div>
<div className="rounded-3xl overflow-hidden ring-1 ring-white/10 bg-base-800/70 shadow-soft" style={{}}>
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-nhVHji30IRoa5HBGe8yeDiTs" width="100%"></iframe></div>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-4xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>A Smarter Way to Operate On‑Chain</h3>
<p className="mt-3 text-ink-300 font-poppins" style={{}}>Built for teams and professionals. Streamline approvals, automate tasks, and gain crystal‑clear visibility across assets.</p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3 rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-4" style={{}}>
<svg className="lucide lucide-sparkle w-5 h-5 text-accent.sol3 mt-0.5" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
<div className="">
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Clear Financial Insights</p>
<p className="text-sm text-ink-300 font-poppins" style={{}}>Real‑time trends, anomaly detection, and performance KPIs.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-4" style={{}}>
<svg className="lucide lucide-split w-5 h-5 text-accent.sol1 mt-0.5" data-lucide="split" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>
<div className="">
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Expense Splitting &amp; Payroll</p>
<p className="text-sm text-ink-300 font-poppins" style={{}}>Stream payments to contributors in SOL or tokens—on schedule.</p>
</div>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-4" style={{}}>
<svg className="lucide lucide-shield-alert w-5 h-5 text-accent.sol3 mt-0.5" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
<div className="">
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Automated Guardrails</p>
<p className="text-sm text-ink-300 font-poppins" style={{}}>Policies that prevent risky transactions and enforce compliance.</p>
</div>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium tracking-tight text-base-900 bg-gradient-to-r from-accent.sol1 to-accent.sol3 font-poppins" href="#pricing" style={{}}>
                Start Now
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="pricing">
<div className="absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-white/5 to-transparent" style={{}}></div>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto">
<h3 className="text-3xl md:text-5xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>Flexible Plans for Every Team</h3>
<p className="mt-3 text-ink-300 font-poppins" style={{}}>Choose a plan that fits your on‑chain goals—whether you’re a solo builder or an enterprise.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6 flex flex-col" style={{}}>
<div className="flex items-center justify-between">
<h4 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Starter</h4>
<span className="text-xs text-ink-400 ring-1 ring-white/10 rounded-full px-2 py-0.5 font-poppins" style={{}}>For Individuals</span>
</div>
<div className="mt-3">
<div className="text-3xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>$0</div>
<div className="text-sm text-ink-400 font-poppins" style={{}}>per month</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-ink-300">
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1 wallet, basic analytics</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Community support</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>10 automation runs / mo</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-base-900 bg-gradient-to-r from-accent.sol1 to-accent.sol3 font-poppins" href="#cta" style={{}}>Get Started</a>
</div>

<div className="relative rounded-2xl bg-base-800/70 ring-2 ring-accent.sol3/60 p-6 shadow-glow flex flex-col">
<div className="absolute -top-3 left-6 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-accent.sol1 to-accent.sol3 text-base-900 font-poppins" style={{}}>Popular</div>
<div className="flex items-center justify-between">
<h4 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Pro</h4>
<span className="text-xs text-ink-900/90 bg-white/10 ring-1 ring-white/10 rounded-full px-2 py-0.5 font-poppins" style={{}}>For Teams</span>
</div>
<div className="mt-3">
<div className="text-3xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>$15</div>
<div className="text-sm text-ink-400 font-poppins" style={{}}>per month</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-ink-300">
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Up to 10 wallets</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>1,000 automation runs / mo</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Exports &amp; reporting</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-base-900 bg-gradient-to-r from-accent.sol1 to-accent.sol3 font-poppins" href="#cta" style={{}}>Choose Pro</a>
</div>

<div className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6 flex flex-col" style={{}}>
<div className="flex items-center justify-between">
<h4 className="text-white font-semibold tracking-tight font-poppins" style={{}}>Enterprise</h4>
<span className="text-xs text-ink-400 ring-1 ring-white/10 rounded-full px-2 py-0.5 font-poppins" style={{}}>For Businesses</span>
</div>
<div className="mt-3">
<div className="text-3xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>$35</div>
<div className="text-sm text-ink-400 font-poppins" style={{}}>per month</div>
</div>
<ul className="mt-4 space-y-2 text-sm text-ink-300">
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited wallets</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated success manager</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SLA &amp; custom policies</li>
<li className="flex items-center gap-2 font-poppins" style={{}}><svg className="lucide lucide-check w-4 h-4 text-accent.sol1" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Self‑hosted options</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-base-900 bg-gradient-to-r from-accent.sol1 to-accent.sol3 font-poppins" href="#cta" style={{}}>Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center">
<h3 className="text-3xl md:text-5xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>Real Stories, Real Results</h3>
<p className="mt-3 text-ink-300 font-poppins" style={{}}>See how BlackBall improves on‑chain management for teams of all sizes.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<article className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Operations Lead</p>
<p className="text-xs text-ink-400 font-poppins" style={{}}>@DeFiStudio</p>
</div>
</div>
<p className="mt-4 text-ink-200 font-poppins" style={{}}>BlackBall’s policy engine removed manual approvals and cut execution time by 60%.</p>
<div className="mt-4 flex items-center gap-2 text-ink-400 text-xs">
<svg className="lucide lucide-star w-4 h-4 text-accent.sol1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-poppins" style={{}}>5.0</span>
</div>
</article>
<article className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Founder</p>
<p className="text-xs text-ink-400 font-poppins" style={{}}>@NFTCollective</p>
</div>
</div>
<p className="mt-4 text-ink-200 font-poppins" style={{}}>The dashboard consolidates every wallet and program—finally a single source of truth.</p>
<div className="mt-4 flex items-center gap-2 text-ink-400 text-xs">
<svg className="lucide lucide-star w-4 h-4 text-accent.sol1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-poppins" style={{}}>5.0</span>
</div>
</article>
<article className="rounded-2xl bg-base-800/70 ring-1 ring-white/10 p-6" style={{}}>
<div className="flex items-center gap-3">
<img alt="User" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Finance Manager</p>
<p className="text-xs text-ink-400 font-poppins" style={{}}>@GameStudio</p>
</div>
</div>
<p className="mt-4 text-ink-200 font-poppins" style={{}}>Automations for payroll and swaps run flawlessly—zero failed transactions so far.</p>
<div className="mt-4 flex items-center gap-2 text-ink-400 text-xs">
<svg className="lucide lucide-star w-4 h-4 text-accent.sol1" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-poppins" style={{}}>4.9</span>
</div>
</article>
</div>
</div>
</section>

<section className="relative pb-20" id="cta">
<div className="max-w-6xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-base-800/70" style={{}}>
<div className="absolute inset-0 bg-[radial-gradient(1100px_400px_at_10%_10%,rgba(153,69,255,.25),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_90%_90%,rgba(20,241,149,.18),transparent)]"></div>
<div className="relative p-8 md:p-12 text-center">
<h4 className="text-3xl md:text-4xl tracking-tight text-white font-semibold font-space-grotesk" style={{}}>Take Charge of Your On‑Chain Operations Today</h4>
<p className="mt-3 text-ink-300 max-w-2xl mx-auto font-poppins" style={{}}>Join thousands of teams using BlackBall to automate tasks, reduce risk, and accelerate growth on Solana.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base font-medium tracking-tight text-base-900 bg-gradient-to-r from-accent.sol1 to-accent.sol3 font-poppins" href="#" style={{}}>
                  Get Started
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-base text-white/90 ring-1 ring-white/10 hover:ring-white/20 transition font-poppins" href="#features" style={{}}>
                  Learn More
                </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<a className="flex items-center gap-3" href="#">
<span className="relative grid place-items-center h-9 w-9 rounded-lg bg-base-800 ring-1 ring-white/10 overflow-hidden" style={{}}>
<span className="absolute inset-0 bg-gradient-to-br from-accent.sol3/70 via-accent.stone/40 to-accent.sol1/70 opacity-80" style={{}}></span>
<span className="relative text-white font-semibold font-poppins" style={{}}>B</span>
</span>
<span className="text-lg font-semibold tracking-tight font-poppins" style={{}}>BlackBall</span>
</a>
<p className="mt-4 text-ink-300 max-w-lg font-poppins" style={{}}>Start managing your on‑chain operations smarter and achieve your treasury goals with ease.</p>
<div className="mt-4 flex items-center gap-3 text-ink-400">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<div className="">
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Quick Links</p>
<ul className="mt-3 space-y-2 text-sm text-ink-300">
<li><a className="hover:text-white font-poppins" href="#features" style={{}}>Features</a></li>
<li><a className="hover:text-white font-poppins" href="#benefits" style={{}}>Benefits</a></li>
<li><a className="hover:text-white font-poppins" href="#pricing" style={{}}>Pricing</a></li>
<li><a className="hover:text-white font-poppins" href="#testimonials" style={{}}>Testimonials</a></li>
</ul>
</div>
<div>
<p className="text-white font-medium tracking-tight font-poppins" style={{}}>Support &amp; Resources</p>
<ul className="mt-3 space-y-2 text-sm text-ink-300">
<li><a className="hover:text-white font-poppins" href="#" style={{}}>Help Center</a></li>
<li><a className="hover:text-white font-poppins" href="#" style={{}}>Status</a></li>
<li><a className="hover:text-white font-poppins" href="#" style={{}}>Terms &amp; Conditions</a></li>
<li><a className="hover:text-white font-poppins" href="#" style={{}}>Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-ink-400">
<p className="font-poppins" style={{}}>© <span className="font-poppins" id="year" style={{}}>2025</span> BlackBall Inc. All rights reserved.</p>
<p className="font-poppins" style={{}}>Powered by Solana • Built with care</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
