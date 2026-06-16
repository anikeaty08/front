import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      const portfolioCtx = document.getElementById('portfolioChart')?.getContext('2d');
      if (portfolioCtx) {
        const gradient = portfolioCtx.createLinearGradient(0, 0, 0, portfolioCtx.canvas.height);
        gradient.addColorStop(0, 'rgba(56,189,248,0.35)');   // cyan-400
        gradient.addColorStop(1, 'rgba(168,85,247,0.05)');   // violet-500

        const dataPoints = [100, 102, 101, 105, 107, 110, 108, 111, 115, 113, 116, 118, 120, 119, 121, 124, 122, 126, 128, 127, 129, 132, 131, 134, 136, 138, 141, 143, 142, 145];

        new Chart(portfolioCtx, {
          type: 'line',
          data: {
            labels: Array(dataPoints.length).fill(''),
            datasets: [{
              data: dataPoints,
              borderColor: 'rgba(56,189,248,0.9)',
              backgroundColor: gradient,
              borderWidth: 2,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              pointHoverRadius: 3,
              pointHitRadius: 12
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: 'index' },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgba(15,17,21,0.9)',
                titleColor: '#fff',
                bodyColor: '#e5e7eb',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                  label: ctx => `$${(ctx.parsed.y * 2100).toLocaleString()}`
                }
              }
            },
            scales: {
              x: {
                grid: { display: false, drawBorder: false },
                ticks: { display: false }
              },
              y: {
                grid: { color: 'rgba(255,255,255,0.06)', drawBorder: false },
                ticks: {
                  color: 'rgba(255,255,255,0.6)',
                  callback: v => `$${v}`
                }
              }
            }
          }
        });
      }

      const sparkCtx = document.getElementById('miniSpark')?.getContext('2d');
      if (sparkCtx) {
        const sparkGradient = sparkCtx.createLinearGradient(0, 0, 0, sparkCtx.canvas.height);
        sparkGradient.addColorStop(0, 'rgba(34,197,94,0.35)');  // emerald-500
        sparkGradient.addColorStop(1, 'rgba(34,197,94,0.03)');

        const sparkData = [40, 41, 39, 42, 44, 46, 45, 47, 50, 49, 52, 55, 54, 58, 60];

        new Chart(sparkCtx, {
          type: 'line',
          data: {
            labels: Array(sparkData.length).fill(''),
            datasets: [{
              data: sparkData,
              borderColor: 'rgba(16,185,129,0.9)',
              backgroundColor: sparkGradient,
              tension: 0.35,
              borderWidth: 2,
              fill: true,
              pointRadius: 0,
              pointHitRadius: 10
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
              x: { display: false },
              y: { display: false }
            }
          }
        });
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/3dglassherobg-xhxFCKvVSQv5b7qPD9xIZ5yC" width="100%"></iframe></div>
<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(56,189,248,0.10),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(168,85,247,0.10),transparent)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0c0f]"></div>
</div>
<header className="py-6">
<div className="max-w-7xl flex mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 hover:opacity-90 transition-opacity" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-slate-100/10 to-slate-100/20 rounded-full flex items-center justify-center ring-1 ring-white/10">
<svg className="w-4 h-4 text-white" data-lucide="trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight">CryptoLearn</span>
</a>
<nav className="hidden md:flex gap-9 text-sm items-center"><a className="text-white/80 hover:text-white transition-colors" href="#">Overview</a><a className="text-white/80 hover:text-white transition-colors" href="#">Accounts</a><a className="text-white/80 hover:text-white transition-colors" href="#">Portfolio</a><a className="text-white/80 hover:text-white transition-colors" href="#">Insights</a></nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex items-center gap-2 text-sm bg-white/5 hover:bg-white/10 transition-colors rounded-full px-5 py-2 ring-1 ring-white/10">
<svg className="w-4 h-4 text-white/90" data-lucide="log-in" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" x2="3" y1="12" y2="12"></line></svg>
          Sign in
        </button>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10 ring-1 ring-white/10">
<svg className="w-6 h-6 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="">
<section className="mx-auto max-w-7xl px-6 pb-20">
<div className="rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl ring-1 ring-white/10">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-12 md:p-16 lg:p-20 pt-8 pr-8 pb-8 pl-8 items-center">
<div className="">
<div className="flex items-center bg-white/5 rounded-full px-3 py-2 w-max mb-8 ring-1 ring-white/10">
<div className="flex -space-x-3">
<img alt="User" className="w-8 h-8 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b88153f9-74dc-4723-9d7c-69666f95a502_320w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6f0e8e71-17a9-4cdf-b00b-551174970784_320w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f24601e3-cffe-448a-aed7-6b8b2844506d_320w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db93d327-6f7a-44ef-afb5-149848109b3c_320w.jpg"/>
<img alt="User" className="w-8 h-8 rounded-full border border-white/20 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2537eeed-34b6-4b3a-bd40-c51f4afe63cc_320w.jpg"/>
</div>
<span className="ml-4 text-sm text-white/80">
<span className="font-medium">12.5k</span> investors tracking crypto
              </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-medium">
              Command your digital wealth
            </h1>
<p className="sm:text-lg max-w-xl mt-6 text-white/70">
              Connect wallets and exchanges, visualize performance, and automate insights—all in one secure finance hub.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg bg-white text-[#0b0c0f] rounded-full px-8 py-4 ring-1 ring-white/20" href="#">
<svg className="w-5 h-5" data-lucide="link-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L10 4"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L14 20"></path></svg>
                Connect accounts
                <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 rounded-full px-8 py-4 ring-1 ring-white/10" href="#">
<svg className="w-4 h-4 text-white" data-lucide="pie-chart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 12 2v10z"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
                Explore insights
              </a>
</div>
<div className="mt-12 flex items-center gap-8">
<div className="flex items-center gap-2">
<div className="flex text-yellow-400">
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.8 5.7 21 7 14 2 9.3 9 8.5 12 2"></polygon></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.8 5.7 21 7 14 2 9.3 9 8.5 12 2"></polygon></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.8 5.7 21 7 14 2 9.3 9 8.5 12 2"></polygon></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.8 5.7 21 7 14 2 9.3 9 8.5 12 2"></polygon></svg>
<svg className="w-4 h-4 fill-current" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15 8.5 22 9.3 17 14 18.3 21 12 17.8 5.7 21 7 14 2 9.3 9 8.5 12 2"></polygon></svg>
</div>
<span className="text-sm text-white/80">4.9/5 user rating</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-white/80">Bank-grade security</span>
</div>
</div>
</div>
<div className="relative">
<div className="relative rounded-3xl overflow-hidden h-80 sm:h-[28rem] ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/0">
<div className="absolute inset-0">
<div className="p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-4 h-4 text-emerald-300" data-lucide="wallet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H5a2 2 0 0 0-2 2v9"></path><path d="M18 7V5a2 2 0 0 0-2-2H4"></path><path d="M20 11h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6"></path></svg>
</div>
<div>
<p className="text-xs text-white/60">Total balance</p>
<p className="text-sm font-medium tracking-tight">$254,920.12</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors ring-1 ring-white/10">
<svg className="w-4 h-4 text-white/90" data-lucide="download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</button>
<button className="rounded-full p-2 bg-white/5 hover:bg-white/10 transition-colors ring-1 ring-white/10">
<svg className="w-4 h-4 text-white/90" data-lucide="bookmark" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
</button>
</div>
</div>
<div className="mt-4 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<h2 className="text-sm font-medium tracking-tight">Portfolio performance</h2>
<p className="text-xs text-white/60 mt-1">Last 30 days</p>
<div className="mt-3 h-40 sm:h-48 md:h-52 rounded-lg bg-[#0b0c0f] ring-1 ring-white/10 overflow-hidden">
<div className="relative h-full">
<canvas className="" height="416" id="portfolioChart" style={{display: 'block', boxSizing: 'border-box', height: '208px', width: '432px'}} width="864"></canvas>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-white/70">
<span className="inline-flex items-center gap-1">
<svg className="w-3.5 h-3.5 text-emerald-300" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                        +14.2% MoM
                      </span>
<span className="inline-flex items-center gap-1 text-white/60">
<svg className="w-3.5 h-3.5" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Updated now
                      </span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4">
</div>
</div>
</div>
</div>
<div className="px-8 md:px-16 lg:px-20 pb-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex flex-col items-center bg-white/5 rounded-2xl px-6 py-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/10 ring-1 ring-white/10">
<svg className="w-6 h-6 text-white" data-lucide="wallet" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H5a2 2 0 0 0-2 2v9"></path><path d="M18 7V5a2 2 0 0 0-2-2H4"></path><path d="M20 11h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6"></path></svg>
</div>
<span className="text-sm text-white/60 mb-1">Assets tracked</span>
<span className="text-lg font-medium">132 wallets</span>
<span className="text-xs text-white/50 mt-1">Exchanges + chains</span>
</div>
<div className="flex flex-col items-center bg-white/5 rounded-2xl px-6 py-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/10 ring-1 ring-white/10">
<svg className="w-6 h-6 text-white" data-lucide="activity" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<span className="text-sm text-white/60 mb-1">Risk level</span>
<span className="text-lg font-medium">Balanced</span>
<span className="text-xs text-white/50 mt-1">Auto-managed</span>
</div>
<div className="flex flex-col items-center bg-white/5 rounded-2xl px-6 py-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/10 ring-1 ring-white/10">
<svg className="w-6 h-6 text-white" data-lucide="percent" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle></svg>
</div>
<span className="text-sm text-white/60 mb-1">APY earned</span>
<span className="text-lg font-medium">5.8% avg</span>
<span className="text-xs text-white/50 mt-1">Staking + DeFi</span>
</div>
<div className="flex flex-col items-center bg-white/5 rounded-2xl px-6 py-8 ring-1 ring-white/10 hover:bg-white/10 transition-colors">
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white/10 ring-1 ring-white/10">
<svg className="w-6 h-6 text-emerald-300" data-lucide="zap" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="text-sm text-white/60 mb-1">Smart alerts</span>
<span className="text-lg font-medium">Real-time signals</span>
<span className="text-xs text-white/50 mt-1">Custom thresholds</span>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-16">
<div className="grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 ring-1 ring-white/10 md:p-8 bg-white/5 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Connected accounts</h3>
<p className="text-sm text-white/60 mt-1">Wallets and exchanges linked to your dashboard</p>
</div>
<button aria-label="Connect a new account" className="inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition-colors">
<svg className="w-4 h-4" data-lucide="link" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L10 4"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L14 20"></path></svg>
              Connect
            </button>
</div>
<ul className="mt-6 divide-y divide-white/10">
<li className="py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-emerald-300 text-xs font-semibold">BTC</span>
</div>
<div>
<p className="text-sm font-medium">Ledger Wallet</p>
<p className="text-xs text-white/60">x8F2...a91C · Bitcoin</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">$96,420.32</p>
<p className="text-xs text-emerald-300">+2.4%</p>
</div>
</li>
<li className="py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-indigo-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-indigo-300 text-xs font-semibold">ETH</span>
</div>
<div className="">
<p className="text-sm font-medium">Metamask</p>
<p className="text-xs text-white/60">0x3a1...bD77 · Ethereum</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">$72,113.04</p>
<p className="text-xs text-emerald-300">+1.1%</p>
</div>
</li>
<li className="py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-yellow-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-yellow-300 text-xs font-semibold">BNB</span>
</div>
<div>
<p className="text-sm font-medium">Binance</p>
<p className="text-xs text-white/60">API · Spot + Earn</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">$38,882.76</p>
<p className="text-xs text-emerald-300">+0.7%</p>
</div>
</li>
<li className="py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-sky-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-sky-300 text-xs font-semibold">SOL</span>
</div>
<div>
<p className="text-sm font-medium">Phantom</p>
<p className="text-xs text-white/60">7YoF...9kQp · Solana</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">$15,504.00</p>
<p className="text-xs text-rose-300">-0.3%</p>
</div>
</li>
</ul>
<div className="mt-6 flex items-center justify-between text-xs text-white/60">
<span>4 of 10 sources connected</span>
<a className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors" href="#">
              Manage sources
              <svg className="w-3.5 h-3.5" data-lide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="space-y-8">
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<h3 className="text-sm font-medium tracking-tight">Allocation</h3>
<div className="mt-4 flex items-center gap-6">
<div className="relative w-28 h-28 rounded-full ring-1 ring-white/10" style={{background: 'conic-gradient(#22d3ee 0 55%, #a78bfa 55% 90%, #fbbf24 90% 100%)'}}>
<div className="absolute inset-3 rounded-full bg-[#0b0c0f] ring-1 ring-white/5"></div>
</div>
<div className="text-sm space-y-2">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 ring-1 ring-white/20"></span>
<span className="text-white/80">BTC</span>
<span className="ml-auto text-white/60">55%</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-violet-400 ring-1 ring-white/20"></span>
<span className="text-white/80">ETH</span>
<span className="ml-auto text-white/60">35%</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-1 ring-white/20"></span>
<span className="text-white/80">Others</span>
<span className="ml-auto text-white/60">10%</span>
</div>
</div>
</div>
<p className="mt-4 text-xs text-white/60">Balanced allocation optimized for risk-adjusted returns.</p>
</div>
<div className="ring-1 ring-white/10 bg-white/5 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-lg">
<h3 className="text-sm font-medium tracking-tight">Recent activity</h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-cyan-300 text-[10px] font-semibold">BTC</span>
</div>
<div>
<p className="text-sm">Buy BTC</p>
<p className="text-xs text-white/60">Coinbase · Filled</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">+$1,200</p>
<p className="text-xs text-white/60">1.5% fee</p>
</div>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-violet-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-violet-300 text-[10px] font-semibold">ETH</span>
</div>
<div>
<p className="text-sm">Stake ETH</p>
<p className="text-xs text-white/60">Lido · 3.8% APY</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">+0.8 ETH</p>
<p className="text-xs text-emerald-300">Rewards</p>
</div>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-500/15 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-amber-300 text-[10px] font-semibold">SOL</span>
</div>
<div>
<p className="text-sm">Swap SOL→USDC</p>
<p className="text-xs text-white/60">Jupiter · Confirmed</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium">-$420</p>
<p className="text-xs text-white/60">0.2% slippage</p>
</div>
</li>
</ul>
<a className="mt-4 inline-flex items-center gap-1 text-xs text-white/80 hover:text-white transition-colors" href="#">
              View all activity
              <svg className="w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 pb-20">
<div className="rounded-3xl overflow-hidden bg-white/5 ring-1 ring-white/10">
<div className="grid md:grid-cols-2 gap-0">
<div className="md:p-12 pt-8 pr-8 pb-8 pl-8 backdrop-blur-lg">
<h3 className="text-2xl font-medium tracking-tight">Insights that move with the market</h3>
<p className="mt-3 text-white/70">Receive curated, signal-based insights—volatility alerts, funding rate shifts, and on-chain flows—so you can adjust positions with confidence.</p>
<ul className="mt-6 space-y-3 text-sm">
<li className="flex items-center gap-3">
<span className="w-7 h-7 rounded-full bg-emerald-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-4 h-4 text-emerald-300" data-lucide="bell" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</span>
                Real-time volatility pings
              </li>
<li className="flex items-center gap-3">
<span className="w-7 h-7 rounded-full bg-sky-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-4 h-4 text-sky-300" data-lucide="radar" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M2 13h.01"></path><path d="M20 13h.01"></path><path d="M12 21v.01"></path></svg>
</span>
                On-chain large flow detection
              </li>
<li className="flex items-center gap-3">
<span className="w-7 h-7 rounded-full bg-violet-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-4 h-4 text-violet-300" data-lucide="target" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8"></circle><path d="M22 12h-4"></path><path d="M6 12H2"></path><path d="M12 2v4"></path><path d="M12 18v4"></path></svg>
</span>
                Auto-rebalancing targets
              </li>
</ul>
<div className="mt-8 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 bg-white text-[#0b0c0f] ring-1 ring-white/20 hover:scale-[1.01] transition">
<svg className="w-4 h-4" data-lucide="sliders" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="1" x2="7" y1="14" y2="14"></line><line x1="9" x2="15" y1="8" y2="8"></line><line x1="17" x2="23" y1="16" y2="16"></line></svg>
                Configure alerts
              </button>
<button className="inline-flex items-center gap-2 text-sm rounded-full px-4 py-2 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition">
<svg className="w-4 h-4" data-lucide="download-cloud" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="m8 17 4 4 4-4"></path><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path></svg>
                Export report
              </button>
</div>
</div>
<div className="md:p-12 bg-gradient-to-b from-white/5 to-transparent pt-8 pr-8 pb-8 pl-8 backdrop-blur-lg">
<div className="rounded-2xl bg-[#0b0c0f] ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-sky-500/15 ring-1 ring-white/10 flex items-center justify-center">
<svg className="w-4 h-4 text-sky-300" data-lucide="pie-chart" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 12 2v10z"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
</div>
<div>
<p className="text-xs text-white/60">P&amp;L (30d)</p>
<p className="text-sm font-medium">+$18,420</p>
</div>
</div>
<span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-white/10">+7.9%</span>
</div>
<div className="mt-4 h-32 rounded-lg bg-white/5 ring-1 ring-white/10 overflow-hidden">
<canvas className="" height="256" id="miniSpark" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '480px'}} width="960"></canvas>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-white/60">
<span>Sharpe 1.42</span>
<span className="">Max drawdown 6.3%</span>
</div>
</div>
<div className="mt-6 rounded-2xl bg-[#0b0c0f] ring-1 ring-white/10 p-5">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-teal-300" data-lucide="shield" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<p className="text-sm font-medium">Security posture</p>
</div>
<ul className="mt-3 text-xs text-white/70 space-y-2">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Hardware wallet for BTC
                </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  2FA on all exchanges
                </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Review permissions (2 dApps)
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section aria-labelledby="cta" className="mx-auto max-w-7xl px-6 pb-24">
<div className="ring-1 ring-white/10 md:p-12 flex flex-col md:flex-row gap-8 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-lg items-center justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight" id="cta">Ready to unify your crypto finance?</h2>
<p className="mt-2 text-white/70 max-w-xl">Start with a read-only connection. Add exchanges and wallets in minutes—no private keys or custody required.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-[#0b0c0f] ring-1 ring-white/20 hover:scale-[1.02] transition" href="#">
            Get started free
            <svg className="w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 transition" href="#">
            Book a demo
            <svg className="w-4 h-4" data-lucide="calendar" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</a>
</div>
</div>
</section>
</main>
<footer className="border-white/10 border-t backdrop-blur-lg">
<div className="mx-auto max-w-7xl px-6 py-12">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<a className="flex items-center gap-3 hover:opacity-90 transition-opacity" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-slate-100/10 to-slate-100/20 rounded-full flex items-center justify-center ring-1 ring-white/10">
<svg className="w-4 h-4 text-white" data-lucide="trending-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-lg font-medium tracking-tight">CryptoLearn</span>
</a>
<nav className="text-sm text-white/70 flex flex-wrap gap-x-6 gap-y-2">
<a className="hover:text-white transition-colors" href="#">Security</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</nav>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<p className="text-xs text-white/50">© 2025 CryptoLearn Finance. All rights reserved.</p>
<div className="flex items-center gap-6">
<nav className="text-xs text-white/60 flex items-center gap-5">
<a className="hover:text-white transition-colors" href="#">Status</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</nav>
<div className="hidden sm:flex items-center gap-2">
<a aria-label="Visit website" className="p-2 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="w-4 h-4 text-white/80" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path></svg>
</a>
<a aria-label="Subscribe via RSS" className="p-2 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="w-4 h-4 text-white/80" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
</a>
<a aria-label="Contact support" className="p-2 rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="w-4 h-4 text-white/80" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12a10 10 0 1 1-4.93-8.62"></path><path d="M22 4 12 14.01l-3-3"></path></svg>
</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
