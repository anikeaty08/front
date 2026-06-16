import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Icon init
      lucide.createIcons();

      // Sidebar open on mobile
      const openSidebar = document.getElementById('openSidebar');
      const sidebar = document.getElementById('sidebar');
      openSidebar?.addEventListener('click', () => {
        sidebar?.classList.toggle('hidden');
      });

      // Sort dropdown
      const sortBtn = document.getElementById('sortBtn');
      const sortMenu = document.getElementById('sortMenu');
      if (sortBtn && sortMenu) {
        sortBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const open = sortMenu.classList.contains('opacity-100');
          sortMenu.classList.toggle('opacity-100', !open);
          sortMenu.classList.toggle('visible', !open);
          sortMenu.classList.toggle('invisible', open);
          sortMenu.classList.toggle('opacity-0', open);
        });
        document.addEventListener('click', () => {
          sortMenu.classList.add('invisible', 'opacity-0');
          sortMenu.classList.remove('opacity-100', 'visible');
        });
        sortMenu.querySelectorAll('button').forEach((btn) => {
          btn.addEventListener('click', () => {
            sortBtn.innerHTML = '<i data-lucide="sort-desc" class="h-4 w-4"></i> ' + btn.textContent.trim();
            lucide.createIcons();
            sortMenu.classList.add('invisible', 'opacity-0');
            sortMenu.classList.remove('opacity-100', 'visible');
          });
        });
      }

      // Filter chips active state
      document.querySelectorAll('.filter-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active', 'bg-white/10', 'text-slate-200'));
          chip.classList.add('active', 'bg-white/10', 'text-slate-200');
        });
      });

      // Custom month pills
      document.querySelectorAll('.pill-month').forEach((pill) => {
        pill.addEventListener('click', () => {
          document.querySelectorAll('.pill-month').forEach(p => p.classList.remove('bg-white/10', 'text-slate-200'));
          pill.classList.add('bg-white/10', 'text-slate-200');
        });
      });

      // Custom slider (1-12 months)
      const slider = document.getElementById('slider');
      const sliderThumb = document.getElementById('sliderThumb');
      const sliderProgress = document.getElementById('sliderProgress');
      const periodLabel = document.getElementById('periodLabel');

      let dragging = false;
      let months = 4; // default

      function setFromPercent(p) {
        const bounded = Math.max(0, Math.min(1, p));
        const val = Math.round(1 + bounded * 11); // 1..12
        months = val;
        const percent = (val - 1) / 11;
        sliderThumb.style.left = (percent *
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full">

<div className="pointer-events-none fixed inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent"></div>

<div className="flex">

<aside className="hidden lg:flex lg:w-72 xl:w-80 flex-col border-r border-white/10 bg-[#0d121e]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0d121e]/80" id="sidebar">

<div className="flex items-center gap-3 px-5 py-4">
<div className="h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-900/30">
<i className="h-5 w-5 text-white" data-lucide="zap"></i>
</div>
<div className="flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">Stakern</span>
<span className="text-[12px] text-slate-400">Top Staking Assets</span>
</div>
</div>

<nav className="mt-2 flex-1 space-y-6 overflow-y-auto px-3 pb-6">
<div className="space-y-1">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium tracking-tight text-slate-300 ring-1 ring-transparent transition hover:bg-white/5" href="#">
<i className="h-4.5 w-4.5 text-slate-400 group-hover:text-slate-200" data-lucide="layout-dashboard"></i>
<span className="text-[14px]">Dashboard</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm tracking-tight text-slate-400 ring-1 ring-transparent transition hover:bg-white/5" href="#">
<i className="h-4.5 w-4.5" data-lucide="wallet"></i>
<span className="text-[14px]">Assets</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm tracking-tight text-slate-400 transition hover:bg-white/5" href="#">
<i className="h-4.5 w-4.5" data-lucide="server"></i>
<span className="text-[14px]">Staking Providers</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm tracking-tight text-slate-400 transition hover:bg-white/5" href="#">
<i className="h-4.5 w-4.5" data-lucide="calculator"></i>
<span className="text-[14px]">Staking Calculator</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm tracking-tight text-slate-400 transition hover:bg-white/5" href="#">
<i className="h-4.5 w-4.5" data-lucide="code-xml"></i>
<span className="text-[14px]">Data API</span>
<i className="ml-auto h-4 w-4 text-slate-500" data-lucide="arrow-up-right"></i>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm tracking-tight text-slate-400 transition hover:bg-white/5" href="#">
<i className="h-4.5 w-4.5" data-lucide="beaker"></i>
<span className="text-[14px]">Liquid Staking</span>
<span className="ml-2 rounded-full bg-fuchsia-500/10 px-2 py-0.5 text-[11px] font-medium text-fuchsia-300">Beta</span>
</a>
</div>

<div>
<div className="mb-2 px-3 text-xs uppercase tracking-wide text-slate-500">Active Staking</div>
<div className="space-y-2">
<a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/[0.08]" href="#">
<div className="h-8 w-8 grid place-items-center rounded-full bg-indigo-500/20 text-indigo-300">
<i className="h-4 w-4" data-lucide="coins"></i>
</div>
<div className="flex-1">
<div className="text-[13px] text-slate-300">Asset Ethereum</div>
<div className="text-[12px] text-slate-400">$7,699.00</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/[0.08]" href="#">
<div className="h-8 w-8 grid place-items-center rounded-full bg-rose-500/20 text-rose-300">
<i className="h-4 w-4" data-lucide="flame"></i>
</div>
<div className="flex-1">
<div className="text-[13px] text-slate-300">Asset Avalanche</div>
<div className="text-[12px] text-slate-400">$1,340.00</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/[0.08]" href="#">
<div className="h-8 w-8 grid place-items-center rounded-full bg-fuchsia-500/20 text-fuchsia-300">
<i className="h-4 w-4" data-lucide="hexagon"></i>
</div>
<div className="flex-1">
<div className="text-[13px] text-slate-300">Asset Polygon (Matic)</div>
<div className="text-[12px] text-slate-400">$540.00</div>
</div>
</a>
<a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:bg-white/[0.08]" href="#">
<div className="h-8 w-8 grid place-items-center rounded-full bg-amber-500/20 text-amber-300">
<i className="h-4 w-4" data-lucide="sun"></i>
</div>
<div className="flex-1">
<div className="text-[13px] text-slate-300">Asset Solana</div>
<div className="text-[12px] text-slate-400">$980.00</div>
</div>
</a>
</div>
</div>

<div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-900/30">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight">Activate Super</div>
<div className="text-[12px] text-slate-400">Unlock all features on Stakern</div>
</div>
</div>
<button className="mt-3 w-full rounded-xl bg-white/5 px-3 py-2 text-[13px] font-semibold tracking-tight text-slate-200 ring-1 ring-inset ring-white/10 transition hover:bg-white/10">
                Upgrade Now
              </button>
</div>
</nav>
</aside>

<main className="flex-1">

<div className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0f17]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0f17]/60">
<div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
<button className="lg:hidden rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-300 hover:bg-white/10" id="openSidebar">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1">
<button className="rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-medium tracking-tight text-slate-200">Staking</button>
<button className="rounded-full px-3 py-1.5 text-[13px] text-slate-400 hover:text-slate-200">Stablecoin</button>
</div>
<div className="ml-auto flex items-center gap-2 sm:gap-3">
<div className="hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
<i className="h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-48 bg-transparent text-[13px] text-slate-200 placeholder:text-slate-500 focus:outline-none" placeholder="Search..."/>
</div>
<button className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2 text-[13px] font-semibold tracking-tight text-white shadow-lg shadow-violet-900/30 hover:opacity-95">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="plus-circle"></i>
                    Deposit
                  </div>
</button>
<button className="hidden sm:grid place-items-center rounded-xl border border-white/10 bg-white/[0.04] p-2.5 text-slate-300 hover:bg-white/10">
<i className="h-4.5 w-4.5" data-lucide="settings"></i>
</button>
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-1.5">
<img alt="profile" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-[12px] text-slate-400">Pro</span>
<span className="text-[13px] font-medium tracking-tight text-slate-200">Ryan Crawford</span>
</div>
<i className="ml-1 h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">

<div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center">
<div className="flex-1">
<div className="text-[12px] text-slate-400">Recommended coins for 24 hours • 3 Assets</div>
<h1 className="mt-1 text-[22px] md:text-[26px] font-semibold tracking-tight text-slate-100">Top Staking Assets</h1>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="filter-chip active rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[13px] font-medium tracking-tight text-slate-200">
<div className="flex items-center gap-1.5"><i className="h-4 w-4" data-lucide="clock"></i>24H</div>
</button>
<button className="filter-chip rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-slate-300 hover:text-slate-100">
                  Proof of Stake
                </button>
<div className="relative">
<button className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-slate-300 hover:text-slate-100" id="sortBtn">
<i className="h-4 w-4" data-lucide="sort-desc"></i> Desc
                  </button>
<div className="invisible absolute right-0 z-10 mt-2 w-36 overflow-hidden rounded-xl border border-white/10 bg-[#0d121e] opacity-0 shadow-xl transition" id="sortMenu">
<button className="block w-full px-3 py-2 text-left text-[13px] text-slate-200 hover:bg-white/5" data-sort="desc">Desc</button>
<button className="block w-full px-3 py-2 text-left text-[13px] text-slate-200 hover:bg-white/5" data-sort="asc">Asc</button>
<button className="block w-full px-3 py-2 text-left text-[13px] text-slate-200 hover:bg-white/5" data-sort="apr">APR</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 lg:grid-cols-3"><div className="col-span-1 shadow-black/20 w-full border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 grid place-items-center rounded-full bg-indigo-500/20 text-indigo-300">
<i className="h-4.5 w-4.5" data-lucide="shield"></i>
</div>
<div className="">
<div className="text-[12px] text-slate-400">Proof of Stake</div>
<div className="text-[14px] font-medium tracking-tight text-slate-200">Ethereum (ETH)</div>
</div>
</div>
<button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="ellipsis"></i>
</button>
</div>
<div className="mt-4 flex items-end justify-between">
<div className="">
<div className="text-[28px] font-semibold tracking-tight text-slate-100">13.62%</div>
<div className="mt-1 flex items-center gap-1 text-emerald-400 text-[13px]">
<i className="h-4 w-4" data-lucide="trending-up"></i>
                      +6.28%
                    </div>
</div>
<div className="text-right">
<div className="text-[12px] text-slate-400">Last 24h</div>
<div className="text-[13px] text-indigo-300">+$2,956</div>
</div>
</div>
<div className="mt-4">
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/0 to-white/[0.03] p-2">
<div className="relative h-20">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas className="" id="chart-eth"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><div className="col-span-1 shadow-black/20 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-sm w-full">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 grid place-items-center rounded-full bg-emerald-500/20 text-emerald-300">
<i className="h-4.5 w-4.5" data-lucide="link"></i>
</div>
<div>
<div className="text-[12px] text-slate-400">Proof of Stake</div>
<div className="text-[14px] font-medium tracking-tight text-slate-200">BNB Chain</div>
</div>
</div>
<button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="ellipsis"></i>
</button>
</div>
<div className="mt-4 flex items-end justify-between">
<div className="">
<div className="text-[28px] font-semibold tracking-tight text-slate-100">12.72%</div>
<div className="mt-1 flex items-center gap-1 text-emerald-400 text-[13px]">
<i className="h-4 w-4" data-lucide="trending-up"></i>
                      +6.67%
                    </div>
</div>
<div className="text-right">
<div className="text-[12px] text-slate-400">Last 24h</div>
<div className="text-[13px] text-emerald-300">+$2,009</div>
</div>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/0 to-white/[0.03] p-2">
<div className="relative h-20">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="chart-bnb"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><div className="col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-sm shadow-black/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 grid place-items-center rounded-full bg-rose-500/20 text-rose-300">
<i className="h-4.5 w-4.5" data-lucide="triangle"></i>
</div>
<div>
<div className="text-[12px] text-slate-400">Proof of Stake</div>
<div className="text-[14px] font-medium tracking-tight text-slate-200">Polygon (MATIC)</div>
</div>
</div>
<button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5">
<i className="h-4 w-4" data-lucide="ellipsis"></i>
</button>
</div>
<div className="mt-4 flex items-end justify-between">
<div>
<div className="text-[28px] font-semibold tracking-tight text-slate-100">6.29%</div>
<div className="mt-1 flex items-center gap-1 text-rose-400 text-[13px]">
<i className="h-4 w-4" data-lucide="trending-down"></i>
                      -1.89%
                    </div>
</div>
<div className="text-right">
<div className="text-[12px] text-slate-400">Last 24h</div>
<div className="text-[13px] text-rose-300">-$987</div>
</div>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-gradient-to-b from-white/0 to-white/[0.03] p-2">
<div absolute="" className="relative h-20 &lt;div class=" inset-0"="">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="chart-matic"></canvas>
</div>
</div>
</div>
</div>
</div></div>

<div className="col-span-1 rounded-2xl border border-white/10 bg-gradient-to-b from-[#1a1231] to-[#101626] p-5 shadow-lg shadow-black/30">
<div className="flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-lg bg-white/10 text-white">
<i className="h-4.5 w-4.5" data-lucide="zap"></i>
</div>
<div className="text-[13px] text-slate-300">Stakern</div>
<span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">New</span>
</div>
<h3 className="mt-3 text-[18px] font-semibold tracking-tight text-slate-100">Liquid Staking Portfolio</h3>
<p className="mt-1 text-[13px] text-slate-400">An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking.</p>
<div className="mt-4 grid gap-2">
<button className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2.5 text-[13px] font-semibold tracking-tight text-white shadow-lg shadow-violet-900/30 hover:opacity-95">
<i className="h-4 w-4" data-lucide="wallet"></i>
                    Connect with Wallet
                  </button>
<div className="relative">
<input className="w-full rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 pr-10 text-[13px] text-slate-200 placeholder:text-slate-400 focus:outline-none" placeholder="Enter a Wallet Address"/>
<i className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="link-2"></i>
</div>
</div>
<div className="mt-4 h-24 overflow-hidden rounded-xl border border-white/10 bg-white/5" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
</div>
</section></main></div>

<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
<div className="flex items-center justify-between">
<div className="text-[12px] text-slate-400">Last Update • 45 minutes ago</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5"><i className="h-4 w-4" data-lucide="refresh-ccw"></i></button>
<button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5"><i className="h-4 w-4" data-lucide="download"></i></button>
<button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5"><i className="h-4 w-4" data-lucide="maximize-2"></i></button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-5">

<div className="lg:col-span-3 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex flex-wrap items-center gap-2">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-100">Stake Avalanche (AVAX)</h3>
<span className="rounded-full bg-rose-500/10 px-2 py-0.5 text-[11px] text-rose-300">High Yield</span>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">PoS</span>
</div>
<div className="mt-2 grid grid-cols-1 items-end gap-4 md:grid-cols-3">
<div className="md:col-span-2">
<div className="text-[12px] text-slate-400">Current Reward Balance, AVAX</div>
<div className="mt-1 text-[44px] font-semibold tracking-tight text-slate-100">31.39686</div>
</div>
<div className="flex gap-2 md:justify-end">
<button className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[13px] font-semibold tracking-tight text-slate-200 hover:bg-white/10">Unstake</button>
<button className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-2 text-[13px] font-semibold tracking-tight text-white shadow-lg shadow-violet-900/30 hover:opacity-95">Upgrade</button>
</div>
</div>
<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
<div className="rounded-lg border border-white/10 bg-white/0 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-400">Momentum</div>
<i className="h-4 w-4 text-slate-400" data-lucide="activity"></i>
</div>
<div className="mt-2">
<div className="h-20">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="chart-momentum"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-400">General</div>
<i className="h-4 w-4 text-slate-400" data-lucide="bar-chart-3"></i>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<div>
<div className="text-[11px] text-slate-500">APY</div>
<div className="text-[16px] font-semibold tracking-tight text-slate-100">8.4%</div>
</div>
<div>
<div className="text-[11px] text-slate-500">Lock</div>
<div className="text-[16px] font-semibold tracking-tight text-slate-100">4 mo</div>
</div>
<div>
<div className="text-[11px] text-slate-500">Delegators</div>
<div className="text-[16px] font-semibold tracking-tight text-slate-100">2.1k</div>
</div>
<div>
<div className="text-[11px] text-slate-500">Fees</div>
<div className="text-[16px] font-semibold tracking-tight text-slate-100">0.9%</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-[13px] text-slate-400">Reward</div>
<i className="h-4 w-4 text-slate-400" data-lucide="gift"></i>
</div>
<div className="mt-2">
<div className="flex items-center gap-2">
<div className="h-2 flex-1 rounded-full bg-white/10">
<div className="h-2 w-2/3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
</div>
<div className="text-[13px] text-slate-300">66%</div>
</div>
<div className="mt-2 text-[12px] text-slate-400">Est. next 30d: <span className="text-slate-200">+2.23%</span></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<h4 className="text-[16px] font-semibold tracking-tight text-slate-100">Investment Period</h4>
<div className="flex items-center gap-2 text-[12px] text-slate-400">
<button className="pill-month rounded-full border border-white/10 bg-white/[0.04] px-2 py-1">6 Month</button>
<button className="pill-month active rounded-full border border-white/10 bg-white/10 px-2 py-1 text-slate-200">4 Month</button>
</div>
</div>

<div className="mt-5">
<div className="mb-2 flex items-center justify-between text-[12px] text-slate-400">
<span>Contribution Period (Month)</span>
<span className="text-slate-200" id="periodLabel">4</span>
</div>
<div className="relative h-2 rounded-full bg-white/10" id="slider">
<div className="absolute left-0 top-0 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" id="sliderProgress" style={{width: '33.33%'}}></div>
<button className="absolute -top-1.5 h-5 w-5 -translate-x-1/2 rounded-full bg-white shadow-md ring-4 ring-violet-500/30" id="sliderThumb" style={{left: '33.33%'}}></button>
</div>
<div className="mt-2 flex justify-between text-[11px] text-slate-500">
<span>1</span><span>3</span><span>6</span><span>9</span><span>12</span>
</div>
</div>

<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-white/10 p-3">
<div className="text-[11px] text-slate-500">Risk</div>
<div className="mt-1 flex items-center gap-1">
<i className="h-4 w-4 text-emerald-400" data-lucide="shield-check"></i>
<span className="text-[15px] font-semibold tracking-tight text-slate-100">Low</span>
</div>
</div>
<div className="rounded-lg border border-white/10 p-3">
<div className="text-[11px] text-slate-500">Staking Ratio</div>
<div className="mt-1 text-[15px] font-semibold tracking-tight text-slate-100">60.6%</div>
</div>
<div className="rounded-lg border border-white/10 p-3 col-span-2">
<div className="flex items-center justify-between">
<div className="text-[11px] text-slate-500">Reward Rate</div>
<div className="text-[11px] text-slate-500">24h</div>
</div>
<div className="mt-2 h-20">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="chart-reward"></canvas>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-[12px] text-slate-400">
<span className="flex items-center gap-1 text-emerald-400"><i className="h-4 w-4" data-lucide="arrow-up-right"></i>2.23%</span>
<span className="flex items-center gap-1 text-slate-400"><i className="h-4 w-4" data-lucide="battery-medium"></i> 48h avg</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[12px] text-slate-400">Staked Tokens Trend</div>
<div className="mt-1 text-[18px] font-semibold tracking-tight text-slate-100">-0.82%</div>
</div>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">24H</span>
</div>
<div className="mt-3 h-16">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="chart-trend"></canvas>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[12px] text-slate-400">Price</div>
<div className="mt-1 text-[18px] font-semibold tracking-tight text-slate-100">$41.99</div>
</div>
<div className="flex items-center gap-1 text-[12px] text-rose-400">
<i className="h-4 w-4" data-lucide="chevron-down"></i>-1.09%
                    </div>
</div>
<div className="mt-3 h-16">
<div className="h-full w-full">

<div className="h-full w-full">
<canvas id="chart-price"></canvas>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[12px] text-slate-400">Network Health</div>
<div className="mt-1 text-[18px] font-semibold tracking-tight text-slate-100">Good</div>
</div>
<i className="h-5 w-5 text-emerald-400" data-lucide="heart-pulse"></i>
</div>
<div className="mt-3">
<div className="h-2 w-full rounded-full bg-white/10">
<div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-green-500"></div>
</div>
<div className="mt-1 text-[12px] text-slate-400">Validator uptime: 99.4%</div>
</div>
</div>
</div>
</div>
<footer className="mx-auto max-w-7xl px-4 py-8 md:px-6">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[12px] text-slate-400 md:px-6">
              © 2025 Stakern. All rights reserved.
            </div>
</footer>
</div>

    </>
  );
}
