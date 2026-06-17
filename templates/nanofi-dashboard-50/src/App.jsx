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



    document.addEventListener("DOMContentLoaded", function () {
      lucide.createIcons();
      const ctx = document.getElementById("yieldChart");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Day 1", "Day 6", "Day 12", "Day 18", "Day 24", "Day 30"],
            datasets: [
              {
                label: "Carbon Nanofilter",
                data: [26, 27, 28, 29, 30, 31],
                borderColor: "#06b6d4",
                backgroundColor: "rgba(6,182,212,0.15)",
                borderWidth: 2,
                tension: 0.35,
                fill: true,
              },
              {
                label: "Nanofilter",
                data: [19, 20, 22, 23, 23, 24],
                borderColor: "#8b5cf6",
                backgroundColor: "rgba(139,92,246,0.1)",
                borderWidth: 2,
                tension: 0.35,
                fill: true,
              },
              {
                label: "Food Waste",
                data: [21, 22, 23, 24, 26, 27],
                borderColor: "#facc15",
                backgroundColor: "rgba(250,204,21,0.1)",
                borderWidth: 2,
                tension: 0.35,
                fill: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "#0f172a",
                borderColor: "#e2e8f0",
                borderWidth: 1,
                titleColor: "#e2e8f0",
                bodyColor: "#e2e8f0",
                padding: 8,
                displayColors: false,
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: {
                  color: "#94a3b8",
                  font: { size: 10 },
                },
              },
              y: {
                grid: { color: "rgba(148,163,184,0.35)" },
                ticks: {
                  color: "#94a3b8",
                  font: { size: 10 },
                  callback: (value) => value + "%",
                },
                suggestedMin: 18,
                suggestedMax: 32,
              },
            },
          },
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
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex lg:flex-col w-72 bg-white border-r border-slate-200">
<div className="flex items-center gap-3 px-6 pt-6 pb-4">
<div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-semibold tracking-tight text-white">
          NF
        </div>
<div>
<div className="text-base font-semibold tracking-tight text-slate-900">NanoFi</div>
<p className="text-xs text-slate-500">IP-NFT liquidity network</p>
</div>
</div>
<nav className="flex-1 px-3 mt-4 space-y-1">
<div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400 px-3 mb-2">Navigation</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-slate-100 text-slate-900 shadow-sm shadow-cyan-500/10">
<i className="w-4 h-4 text-cyan-500" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium">Overview</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="vault"></i>
<span className="text-sm font-medium">Vault</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Governance</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="shopping-bag"></i>
<span className="text-sm font-medium">Marketplace</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="layers"></i>
<span className="text-sm font-medium">Staking</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 transition">
<i className="w-4 h-4 text-slate-400" data-lucide="pie-chart"></i>
<span className="text-sm font-medium">Portfolio</span>
</button>
</nav>
<div className="px-5 pb-6 pt-4 border-t border-slate-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-500 p-[2px]">
<div className="h-full w-full rounded-full bg-white flex items-center justify-center text-xs font-medium text-slate-900">
              GF
            </div>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-slate-900">George Form</div>
<div className="flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-emerald-500">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Patent verified
            </div>
</div>
<button className="rounded-full bg-slate-100 p-1.5 hover:bg-slate-200">
<i className="w-4 h-4 text-slate-500" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<div className="flex items-center gap-3 lg:hidden">
<div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xs font-semibold tracking-tight text-white">
              NF
            </div>
<span className="text-base font-semibold tracking-tight text-slate-900">NanoFi</span>
</div>
<div className="hidden md:flex items-center gap-3">
<h1 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">Protocol Overview</h1>
<span className="rounded-full border border-emerald-500/40 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 uppercase tracking-[0.16em]">
              Live
            </span>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center text-xs text-slate-500 gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span>TVL synced · 10s ago</span>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-slate-50 text-xs font-medium px-3 py-1.5 hover:bg-black">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
              New vault
            </button>
<button className="ml-1 rounded-full border border-slate-200 bg-white p-2 hover:bg-slate-50">
<i className="w-4 h-4 text-slate-500" data-lucide="bell"></i>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">

<section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50">
<div className="absolute inset-0 opacity-70">
<img alt="3D gradient landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/95"></div>
<div className="relative px-5 sm:px-8 pt-6 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="space-y-3 max-w-xl">
<p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600">Protocol health</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Real‑time IP‑backed liquidity, at a glance.
                </h2>
<p className="text-sm text-slate-600 max-w-md">
                  Track vault performance, governance momentum and staking yield across the NanoFi ecosystem in one unified surface.
                </p>
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white text-xs font-medium px-3 py-1.5 hover:bg-black">
<i className="w-3.5 h-3.5" data-lucide="rocket"></i>
                    Launch vault
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white text-xs font-medium text-slate-900 px-3 py-1.5 hover:border-slate-400">
<i className="w-3.5 h-3.5" data-lucide="code"></i>
                    View API
                  </button>
</div>
</div>
<div className="flex gap-4">
<div className="rounded-2xl bg-white/80 border border-slate-200 px-4 py-3 min-w-[140px] shadow-sm">
<div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
<span>Network TVL</span>
<span className="text-emerald-600 font-medium">+5.2%</span>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-900">$12.8M</div>
<div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[72%] bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
</div>
</div>
<div className="hidden sm:flex flex-col justify-between rounded-2xl bg-white/70 border border-slate-200 px-4 py-3 min-w-[140px] shadow-sm">
<div className="flex items-center justify-between text-[11px] text-slate-500 mb-1.5">
<span>30d Funding</span>
<span className="text-cyan-600 font-medium">+$540K</span>
</div>
<div className="text-lg font-semibold tracking-tight text-slate-900">$4.2M</div>
<p className="mt-1 text-[11px] text-slate-500">Across 18 active proposals</p>
</div>
</div>
</div>
<div className="relative border-t border-slate-200 px-4 sm:px-6 bg-white/70">
<div className="flex overflow-x-auto scrollbar-none">
<div className="flex gap-1 py-2">
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white text-xs font-medium px-3 py-1.5 whitespace-nowrap">
                    Overview
                  </button>
<button className="inline-flex items-center gap-1 rounded-full text-xs font-medium text-slate-700 px-3 py-1.5 hover:bg-slate-100 whitespace-nowrap">
                    Patent value
                  </button>
<button className="inline-flex items-center gap-1 rounded-full text-xs font-medium text-slate-700 px-3 py-1.5 hover:bg-slate-100 whitespace-nowrap">
                    Funding proposals
                  </button>
<button className="inline-flex items-center gap-1 rounded-full text-xs font-medium text-slate-700 px-3 py-1.5 hover:bg-slate-100 whitespace-nowrap">
                    Staking &amp; yield
                  </button>
<button className="inline-flex items-center gap-1 rounded-full text-xs font-medium text-slate-700 px-3 py-1.5 hover:bg-slate-100 whitespace-nowrap">
                    Risk &amp; runway
                  </button>
</div>
</div>
</div>
</section>

<section className="grid gap-4 md:grid-cols-4">
<div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between mb-3">
<div className="space-y-1">
<p className="text-xs text-slate-500">IP‑NFTs onboarded</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">147</p>
</div>
<div className="rounded-full bg-slate-50 px-2 py-1 text-[10px] text-slate-600 flex items-center gap-1 border border-slate-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  +12 (7d)
                </div>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
<span>Across 9 verticals</span>
<span>Energy · Medtech · AI</span>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between mb-3">
<div className="space-y-1">
<p className="text-xs text-slate-500">Total funded</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">$4.2M</p>
</div>
<span className="rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 text-[10px] font-medium">
                  +$540K · 30d
                </span>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
<span>Average raise</span>
<span>$235K / vault</span>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between mb-3">
<div className="space-y-1">
<p className="text-xs text-slate-500">Treasury balance</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">$8.5M</p>
</div>
<span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600 border border-slate-200">
                  23 months runway
                </span>
</div>
<div className="mt-2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[64%] bg-gradient-to-r from-violet-500 to-cyan-500"></div>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
<span>Deployed</span>
<span>36% in active strategies</span>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between mb-3">
<div className="space-y-1">
<p className="text-xs text-slate-500">Active users</p>
<p className="text-xl font-semibold tracking-tight text-slate-900">2,847</p>
</div>
<span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600 border border-slate-200">
                  1,823 investors
                </span>
</div>
<div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
<span>Retention</span>
<span>92% 90‑day</span>
</div>
</div>
</section>

<section className="grid gap-6 lg:grid-cols-3">

<div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-5 space-y-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Top vault</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Carbon Nanofilter</h3>
<p className="text-xs text-slate-500 mt-1">Total vault value <span className="text-cyan-600 font-medium">$3.9M</span></p>
</div>
<button className="text-xs font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                  View all
                  <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid gap-4 md:grid-cols-3">

<article className="md:col-span-1 rounded-2xl border border-slate-200 bg-white p-4 flex flex-col shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-xs text-slate-500 mb-1">Energy · Filtration</p>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Carbon Nanofilter</h4>
</div>
<span className="rounded-full border border-cyan-400 bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700">
                      PROP‑45
                    </span>
</div>
<dl className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">For</dt>
<dd className="font-semibold tracking-tight text-slate-900">3,289</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Against</dt>
<dd className="font-semibold tracking-tight text-slate-900">439</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">APY</dt>
<dd className="font-semibold tracking-tight text-emerald-600">30%</dd>
</div>
</dl>
<dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">Category</dt>
<dd className="font-medium text-slate-900">Technology</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Cliff / Lock</dt>
<dd className="font-medium text-slate-900">6m / 18m</dd>
</div>
</dl>
<div className="mt-5">
<div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
<span>Funded</span>
<span className="font-medium text-slate-900">80%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[80%] bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
</div>
<p className="mt-1.5 text-[11px] text-slate-500">Target raise: $4.9M · Closes in 7d</p>
</div>
<button className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white text-xs font-medium py-2 hover:bg-black">
                    View vault
                  </button>
</article>

<div className="md:col-span-2 grid gap-4 sm:grid-cols-2">

<article className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[11px] text-slate-500 mb-1">Biotech</p>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Nanofilter</h4>
</div>
<span className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                        PROP‑32
                      </span>
</div>
<dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">TVL</dt>
<dd className="font-semibold tracking-tight text-slate-900">$1.2M</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Yield</dt>
<dd className="font-semibold tracking-tight text-emerald-600">23%</dd>
</div>
</dl>
<div className="mt-4 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[64%] bg-gradient-to-r from-violet-500 to-cyan-500"></div>
</div>
<p className="mt-1.5 text-[11px] text-slate-500">64% funded · 3 days left</p>
<button className="mt-4 inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 py-2 hover:border-slate-400">
                      View details
                    </button>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[11px] text-slate-500 mb-1">Waste → Energy</p>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Food Waste</h4>
</div>
<span className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                        PROP‑19
                      </span>
</div>
<dl className="mt-4 grid grid-cols-2 gap-3 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">TVL</dt>
<dd className="font-semibold tracking-tight text-slate-900">$980K</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Yield</dt>
<dd className="font-semibold tracking-tight text-emerald-600">27%</dd>
</div>
</dl>
<div className="mt-4 h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[52%] bg-gradient-to-r from-amber-400 to-cyan-500"></div>
</div>
<p className="mt-1.5 text-[11px] text-slate-500">52% funded · 10 days left</p>
<button className="mt-4 inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 py-2 hover:border-slate-400">
                      View details
                    </button>
</article>
</div>
</div>
</div>

<aside className="rounded-3xl border border-slate-200 bg-white p-5 flex flex-col gap-4 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Top governance proposals</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Voting window</h3>
</div>
<button className="text-xs font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                  View all
                  <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="space-y-3">

<article className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[11px] text-slate-500 mb-0.5">Treasury strategy</p>
<h4 className="text-sm font-medium tracking-tight text-slate-900">Increase Carbon Nanofilter allocation</h4>
</div>
<span className="rounded-full border border-cyan-400 bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700">
                      PROP‑45
                    </span>
</div>
<dl className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">For</dt>
<dd className="font-semibold tracking-tight text-slate-900">3,289</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Against</dt>
<dd className="font-semibold tracking-tight text-slate-900">439</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Quorum</dt>
<dd className="font-semibold tracking-tight text-emerald-600">82%</dd>
</div>
</dl>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-slate-600">
<div className="h-1.5 w-16 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[80%] bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
</div>
<span>80% funded</span>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-900 text-white text-[11px] font-medium px-3 py-1 hover:bg-black">
                      Vote now
                      <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[11px] text-slate-500 mb-0.5">Protocol params</p>
<h4 className="text-sm font-medium tracking-tight text-slate-900">Adjust staking reward curve</h4>
</div>
<span className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                      PROP‑52
                    </span>
</div>
<dl className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">For</dt>
<dd className="font-semibold tracking-tight text-slate-900">1,923</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Against</dt>
<dd className="font-semibold tracking-tight text-slate-900">211</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Ends in</dt>
<dd className="font-semibold tracking-tight text-amber-600">4h 12m</dd>
</div>
</dl>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-3.5 shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[11px] text-slate-500 mb-0.5">Listing</p>
<h4 className="text-sm font-medium tracking-tight text-slate-900">Add Tech Brain to mainboard</h4>
</div>
<span className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-700">
                      PROP‑61
                    </span>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[11px] text-slate-600">
<div className="h-1.5 w-16 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-[48%] bg-gradient-to-r from-slate-400 to-cyan-500"></div>
</div>
<span>48% quorum</span>
</div>
<span className="text-[11px] text-slate-500">1d 3h left</span>
</div>
</article>
</div>
</aside>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Top IP‑NFTs</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Marketplace spotlight</h3>
<p className="text-xs text-slate-500 mt-1">Total vault value <span className="text-cyan-600 font-medium">$6.2M</span></p>
</div>
<button className="text-xs font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                View marketplace
                <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

<article className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm">
<div className="h-32 bg-slate-100">
<img alt="Technology render" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Carbon Nanofilter</h4>
<span className="rounded-full bg-slate-100 text-[10px] px-2 py-0.5 text-slate-700 border border-slate-200">Energy</span>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">Price</dt>
<dd className="font-medium text-slate-900">$440K</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Floor</dt>
<dd className="font-medium text-slate-900">$15K</dd>
</div>
</dl>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 py-1.5 hover:border-slate-400">
                      Trade
                    </button>
<button className="flex-1 rounded-xl bg-slate-900 text-white text-xs font-medium py-1.5 hover:bg-black">
                      Buy
                    </button>
</div>
</div>
</article>

<article className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm">
<div className="h-32 bg-slate-100">
<img alt="3D render" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Tech Brain</h4>
<span className="rounded-full bg-slate-100 text-[10px] px-2 py-0.5 text-slate-700 border border-slate-200">AI</span>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">Price</dt>
<dd className="font-medium text-slate-900">$320K</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Floor</dt>
<dd className="font-medium text-slate-900">$9K</dd>
</div>
</dl>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 py-1.5 hover:border-slate-400">
                      Trade
                    </button>
<button className="flex-1 rounded-xl bg-slate-900 text-white text-xs font-medium py-1.5 hover:bg-black">
                      Buy
                    </button>
</div>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm">
<div className="h-32 bg-slate-100">
<img alt="Mountain abstract" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Food Waste</h4>
<span className="rounded-full bg-slate-100 text-[10px] px-2 py-0.5 text-slate-700 border border-slate-200">Sustainability</span>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">Price</dt>
<dd className="font-medium text-slate-900">$220K</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Floor</dt>
<dd className="font-medium text-slate-900">$6K</dd>
</div>
</dl>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 py-1.5 hover:border-slate-400">
                      Trade
                    </button>
<button className="flex-1 rounded-xl bg-slate-900 text-white text-xs font-medium py-1.5 hover:bg-black">
                      Buy
                    </button>
</div>
</div>
</article>
<article className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col shadow-sm">
<div className="h-32 bg-slate-100">
<img alt="Minimal blue texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Graphene Cooling</h4>
<span className="rounded-full bg-slate-100 text-[10px] px-2 py-0.5 text-slate-700 border border-slate-200">Hardware</span>
</div>
<dl className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-600">
<div>
<dt className="text-slate-500 mb-0.5">Price</dt>
<dd className="font-medium text-slate-900">$510K</dd>
</div>
<div>
<dt className="text-slate-500 mb-0.5">Floor</dt>
<dd className="font-medium text-slate-900">$18K</dd>
</div>
</dl>
<div className="mt-4 flex gap-2">
<button className="flex-1 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 py-1.5 hover:border-slate-400">
                      Trade
                    </button>
<button className="flex-1 rounded-xl bg-slate-900 text-white text-xs font-medium py-1.5 hover:bg-black">
                      Buy
                    </button>
</div>
</div>
</article>
</div>
</section>

<section className="grid gap-6 lg:grid-cols-3">

<div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-slate-500">Top staking pools</p>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Yield opportunities</h3>
<p className="text-xs text-slate-500 mt-1">Total staked <span className="text-cyan-600 font-medium">$6.2M</span></p>
</div>
<button className="text-xs font-medium text-slate-700 hover:text-slate-900 inline-flex items-center gap-1">
                  View all pools
                  <i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
<div className="space-y-3">

<article className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<div className="flex-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500"></div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Carbon Nanofilter</h4>
<p className="text-[11px] text-slate-500">Technology · Locked 90 days</p>
</div>
</div>
</div>
<div className="flex flex-1 justify-between gap-4 text-[11px] text-slate-600">
<div>
<p className="text-slate-500 mb-0.5">APY</p>
<p className="font-semibold tracking-tight text-emerald-600">30%</p>
</div>
<div>
<p className="text-slate-500 mb-0.5">Staked</p>
<p className="font-semibold tracking-tight text-slate-900">$2.1M</p>
</div>
<div>
<p className="text-slate-500 mb-0.5">Utilization</p>
<p className="font-semibold tracking-tight text-slate-900">80%</p>
</div>
</div>
<button className="shrink-0 rounded-xl bg-slate-900 text-white text-xs font-medium px-3 py-1.5 hover:bg-black">
                    Stake
                  </button>
</article>
<article className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<div className="flex-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-500"></div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Nanofilter</h4>
<p className="text-[11px] text-slate-500">Biotech · Flexible</p>
</div>
</div>
</div>
<div className="flex flex-1 justify-between gap-4 text-[11px] text-slate-600">
<div>
<p className="text-slate-500 mb-0.5">APY</p>
<p className="font-semibold tracking-tight text-emerald-600">23%</p>
</div>
<div>
<p className="text-slate-500 mb-0.5">Staked</p>
<p className="font-semibold tracking-tight text-slate-900">$1.4M</p>
</div>
<div>
<p className="text-slate-500 mb-0.5">Utilization</p>
<p className="font-semibold tracking-tight text-slate-900">64%</p>
</div>
</div>
<button className="shrink-0 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 px-3 py-1.5 hover:border-slate-400">
                    Stake
                  </button>
</article>
<article className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<div className="flex-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-amber-400 to-pink-500"></div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-900">Food Waste</h4>
<p className="text-[11px] text-slate-500">Sustainability · Locked 30 days</p>
</div>
</div>
</div>
<div className="flex flex-1 justify-between gap-4 text-[11px] text-slate-600">
<div>
<p className="text-slate-500 mb-0.5">APY</p>
<p className="font-semibold tracking-tight text-emerald-600">27%</p>
</div>
<div>
<p className="text-slate-500 mb-0.5">Staked</p>
<p className="font-semibold tracking-tight text-slate-900">$980K</p>
</div>
<div>
<p className="text-slate-500 mb-0.5">Utilization</p>
<p className="font-semibold tracking-tight text-slate-900">52%</p>
</div>
</div>
<button className="shrink-0 rounded-xl border border-slate-300 bg-white text-xs font-medium text-slate-900 px-3 py-1.5 hover:border-slate-400">
                    Stake
                  </button>
</article>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-5 flex flex-col shadow-sm">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs text-slate-500">30‑day yield</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Performance by vault</h3>
</div>
<select className="text-xs bg-white border border-slate-300 rounded-lg px-2 py-1 text-slate-900">
<option>USD</option>
<option>ETH</option>
</select>
</div>
<p className="text-[11px] text-slate-500 mb-2">Smoothed APY across top 3 pools</p>
<div className="flex-1 flex flex-col">
<div className="flex-1">
<div className="w-full h-full flex items-center justify-center">
<div className="w-full">
<div className="w-full">
<div>
<canvas className="w-full h-40" id="yieldChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-cyan-500"></span>
<span>Carbon Nanofilter</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-violet-500"></span>
<span>Nanofilter</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span>Food Waste</span>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-6">
<div className="rounded-3xl overflow-hidden border border-slate-200 bg-gradient-to-r from-cyan-400 via-blue-500 to-sky-500">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-6 sm:px-10 py-8">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-950">NanoFi</h3>
<p className="mt-2 text-xs text-slate-900/80 max-w-xs">
                    Transforming intellectual property into liquid, tradeable assets through decentralized finance.
                  </p>
<div className="mt-4 flex gap-2">
<button className="h-7 w-7 rounded-full bg-slate-950/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-slate-950/80" data-lucide="github"></i>
</button>
<button className="h-7 w-7 rounded-full bg-slate-950/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-slate-950/80" data-lucide="twitter"></i>
</button>
<button className="h-7 w-7 rounded-full bg-slate-950/10 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-slate-950/80" data-lucide="discord"></i>
</button>
</div>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-900/70">Products</p>
<ul className="mt-3 space-y-1.5 text-xs text-slate-950/80">
<li>Vault</li>
<li>Lending</li>
<li>Marketplace</li>
<li>Governance</li>
<li>Treasury</li>
</ul>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-900/70">Resources</p>
<ul className="mt-3 space-y-1.5 text-xs text-slate-950/80">
<li>Whitepaper</li>
<li>Docs</li>
<li>Press</li>
<li>FAQ</li>
</ul>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-900/70">Company</p>
<ul className="mt-3 space-y-1.5 text-xs text-slate-950/80">
<li>About</li>
<li>Careers</li>
<li>Contact</li>
<li>Privacy</li>
<li>Terms</li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between border-t border-sky-300/60 px-6 sm:px-10 py-3 text-[11px] text-slate-950/80 bg-white/30">
<p>© 2025 NanoFi. All rights reserved.</p>
<div className="flex gap-3 mt-2 sm:mt-0">
<span>Terms &amp; Conditions</span>
<span>Privacy Policy</span>
</div>
</div>
</div>
</footer>
</div>
</main>
</div>
</div>



    </>
  );
}
