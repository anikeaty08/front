import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();
    });

    // Assistant bubble toggle
    const fab = document.getElementById('assistantFab');
    const card = document.getElementById('assistantCard');
    if (fab && card) {
      fab.addEventListener('click', () => {
        card.classList.toggle('hidden');
      });
    }

    // Custom checklist toggles
    document.querySelectorAll('[data-task]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.toggle('done');
        const box = btn.querySelector('div.h-5');
        if (box) {
          if (btn.classList.contains('done')) {
            box.style.background = 'linear-gradient(135deg,#FFCC66,#E86AFF)';
            box.style.border = '0';
            btn.querySelector('[data-lucide="check"]').style.color = '#0b0b0f';
          } else {
            box.style.background = 'transparent';
            box.style.border = '1px solid rgba(255,255,255,.2)';
            btn.querySelector('[data-lucide="check"]').style.color = 'transparent';
          }
        }
      });
    });

    // Chart helpers
    const textColor = 'rgba(255,255,255,0.7)';
    const gridColor = 'rgba(255,255,255,0.08)';

    // Main progress chart
    const ctx = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({length: 12}, (_,i) => `${i+8}h`),
        datasets: [
          {
            label: 'Sales',
            data: [12,9,14,18,22,17,24,28,26,30,32,29],
            borderColor: '#A68CFF',
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0,0,0,240);
              gradient.addColorStop(0,'rgba(166,140,255,0.35)');
              gradient.addColorStop(1,'rgba(166,140,255,0.02)');
              return gradient;
            },
            fill: true,
            borderWidth: 2,
            tension: 0.45,
            pointRadius: 3,
            pointBackgroundColor: '#A68CFF'
          },
          {
            label: 'Visitors',
            data: [180,160,210,280,260,300,320,360,340,380,400,420],
            borderColor: '#FFCC66',
            borderDash: [4,4],
            borderWidth: 2,
            tension: 0.35,
            pointRadius: 0
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: { color: textColor, maxRotation: 0 },
            grid: { color: gridColor }
          },
          y: {
            ticks: { color: textColor },
            grid: { color: gridColor }
          }
        },
        plugins: {
          legend: { labels: { color: textColor, boxWidth: 10 } },
          tooltip: {
            backgroundColor: 'rgba(15,15,21,0.95)',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            titleColor: '#fff',
            bodyColor: 'rgba(255,255,255,0.85)'
          }
        }
      }
    });

    // Mini sparkline generator
    function miniChart(id, color) {
      const el = document.getElementById(id);
      if (!el) return;
      return new Chart(el.getContext('2d'), {
        type: 'line',
        data: {
          labels: Array.from({length: 16}, (_,i) => i),
          datasets: [{
            data: Array.from({length: 16}, () => Math.floor(10 + Math.random()*20)),
            borderColor: color,
            borderWidth: 2,
            tension: 0.5,
            pointRadius: 0,
            fill: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: { x: { display:false }, y: { display:false } },
          plugins: { legend: { display:false }, tooltip: { enabled:false } }
        }
      });
    }
    miniChart('miniSales', '#A68CFF');
    miniChart('miniVisitors', '#FFCC66');
    miniChart('miniRoas', '#E86AFF');
    miniChart('miniConv', '#9FE88A');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-28 -left-24 h-96 w-96 rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, #A68CFF 0%, rgba(166,140,255,0.1) 70%, transparent 100%)'}}></div>
<div className="absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, #FFCC66 0%, #E86AFF 50%, rgba(232,106,255,0.1) 80%, transparent 100%)'}}></div>
</div>

<div className="flex">

<aside className="hidden lg:flex lg:flex-col lg:w-20 xl:w-24 h-screen sticky top-0 border-r border-white/5 bg-[#0b0b0f]/60 backdrop-blur-xl">
<div className="flex items-center justify-center h-20">
<div className="h-10 w-10 rounded-xl shadow-[0_0_24px_#a68cff77] flex items-center justify-center" style={{background: 'linear-gradient(135deg,#FFCC66, #E86AFF 80%)'}}>
<span className="sr-only">AuraBuild</span>
</div>
</div>
<nav className="flex-1 px-2 space-y-2">
<button className="w-full group rounded-2xl p-3 flex items-center justify-center hover:bg-white/5 transition">
<i className="h-6 w-6 text-white/80 group-hover:text-white" data-lucide="layout-dashboard"></i>
</button>
<button className="w-full group rounded-2xl p-3 flex items-center justify-center bg-white/5 ring-1 ring-white/10">
<i className="h-6 w-6 text-white" data-lucide="rocket"></i>
</button>
<button className="w-full group rounded-2xl p-3 flex items-center justify-center hover:bg-white/5 transition">
<i className="h-6 w-6 text-white/80 group-hover:text-white" data-lucide="shopping-bag"></i>
</button>
<button className="w-full group rounded-2xl p-3 flex items-center justify-center hover:bg-white/5 transition">
<i className="h-6 w-6 text-white/80 group-hover:text-white" data-lucide="wand-2"></i>
</button>
<button className="w-full group rounded-2xl p-3 flex items-center justify-center hover:bg-white/5 transition">
<i className="h-6 w-6 text-white/80 group-hover:text-white" data-lucide="area-chart"></i>
</button>
</nav>
<div className="p-3">
<button className="w-full group rounded-2xl p-3 flex items-center justify-center hover:bg-white/5 transition">
<i className="h-6 w-6 text-white/70 group-hover:text-white" data-lucide="settings"></i>
</button>
</div>
</aside>

<main className="flex-1">

<header className="sticky top-0 z-20 border-b border-white/5 bg-[#0b0b0f]/70 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-5 lg:px-8">
<div className="h-20 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="lg:hidden h-10 w-10 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg,#FFCC66, #E86AFF 80%)'}}></div>
<div className="flex flex-col">
<h1 className="text-2xl md:text-3xl tracking-tight text-white/90 font-semibold">AuraBuild</h1>
<p className="text-xs md:text-sm text-white/60">Build. Launch. Scale. Your AI e-commerce co-pilot.</p>
</div>
</div>
<div className="hidden md:flex items-center gap-3 flex-1 justify-center max-w-xl">
<div className="w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2.5 flex items-center gap-3">
<i className="h-5 w-5 text-white/60" data-lucide="search"></i>
<input className="bg-transparent w-full outline-none text-sm text-white placeholder-white/40" placeholder="Search products, shops, tasks…"/>
</div>
</div>
<div className="flex items-center gap-4">
<button className="rounded-xl px-3 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition">
<i className="h-5 w-5 text-white/80" data-lucide="bell"></i>
</button>
<div className="flex items-center gap-3">
<div className="text-right hidden sm:block">
<p className="text-sm font-medium text-white/80">Alex Morgan</p>
<p className="text-[11px] text-white/50">Founder</p>
</div>
<img alt="Profile" className="h-10 w-10 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</header>
<div className="mx-auto max-w-7xl px-5 lg:px-8 py-8 space-y-10">

<section className="grid md:grid-cols-3 gap-4">
<div className="rounded-3xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl">
<h2 className="text-xl md:text-2xl tracking-tight font-semibold text-white/90">Brand Colors</h2>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl h-16 flex items-center justify-center text-xs" style={{background: '#0b0b0f', border: '1px solid rgba(255,255,255,.06)'}}>#0B0B0F</div>
<div className="rounded-2xl h-16 flex items-center justify-center text-xs" style={{background: '#1a1a22', border: '1px solid rgba(255,255,255,.06)'}}>#1A1A22</div>
<div className="rounded-2xl h-16 flex items-center justify-center text-xs text-black" style={{background: '#FFCC66'}}>#FFCC66</div>
<div className="rounded-2xl h-16 flex items-center justify-center text-xs" style={{background: '#A68CFF'}}>#A68CFF</div>
<div className="rounded-2xl h-16 flex items-center justify-center text-xs" style={{background: '#E86AFF'}}>#E86AFF</div>
<div className="rounded-2xl h-16 flex items-center justify-center text-xs" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Gold→Magenta</div>
</div>
</div>
<div className="rounded-3xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl">
<h2 className="text-xl md:text-2xl tracking-tight font-semibold text-white/90">Logo Concepts</h2>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-2xl p-4 border border-white/10 bg-[#0f0f15] flex items-center justify-center">
<div className="h-12 w-12 rounded-xl shadow-[0_0_32px_#a68cff66] flex items-center justify-center" style={{background: 'conic-gradient(from 0deg, #FFCC66, #E86AFF, #A68CFF, #FFCC66)'}}>
<span className="text-xs font-medium text-black/80">AB</span>
</div>
</div>
<div className="rounded-2xl p-4 border border-white/10 bg-[#0f0f15] flex items-center justify-center">
<div className="text-lg font-semibold tracking-tight bg-clip-text text-transparent" style={{background: 'linear-gradient(90deg,#FFCC66,#E86AFF 60%,#A68CFF 100%)'}}>AuraBuild</div>
</div>
</div>
</div>
<div className="rounded-3xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl">
<h2 className="text-xl md:text-2xl tracking-tight font-semibold text-white/90">Identity</h2>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li>Futuristic, premium, empowering</li>
<li>Neon glow with glass cards</li>
<li>Minimal, elegant, AI-driven</li>
</ul>
<div className="mt-4 rounded-2xl p-3 text-center text-[13px] text-black font-medium" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Build. Launch. Scale.</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-3">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white/90">Dashboard Overview</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-xl text-sm bg-white/5 border border-white/10 hover:bg-white/10">Export 16:9</button>
<button className="px-3 py-1.5 rounded-xl text-sm text-black font-medium" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Share</button>
</div>
</div>

<div className="aspect-video w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e0e14] to-[#12121a] overflow-hidden relative">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, #A68CFF 0%, transparent 80%)'}}></div>
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, #FFCC66 0%, transparent 80%)'}}></div>
</div>

<div className="absolute inset-0 p-4 sm:p-6 lg:p-8 grid grid-rows-[auto_1fr_auto] gap-4">

<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="rounded-2xl bg-white/5 border border-white/10 p-3">
<p className="text-[11px] text-white/60">Sales (24h)</p>
<p className="text-xl md:text-2xl tracking-tight font-semibold text-white"> $12,840</p>
<p className="text-[11px] text-emerald-400/80 flex items-center gap-1 mt-1"><i className="h-3.5 w-3.5" data-lucide="trending-up"></i> +12.6%</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-3">
<p className="text-[11px] text-white/60">Visitors</p>
<p className="text-xl md:text-2xl tracking-tight font-semibold text-white"> 58,122</p>
<p className="text-[11px] text-emerald-400/80 flex items-center gap-1 mt-1"><i className="h-3.5 w-3.5" data-lucide="arrow-up-right"></i> +4.2%</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-3">
<p className="text-[11px] text-white/60">ROAS</p>
<p className="text-xl md:text-2xl tracking-tight font-semibold text-white"> 3.8x</p>
<p className="text-[11px] text-emerald-400/80 flex items-center gap-1 mt-1"><i className="h-3.5 w-3.5" data-lucide="sparkles"></i> +0.3</p>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-3">
<p className="text-[11px] text-white/60">Conversion</p>
<p className="text-xl md:text-2xl tracking-tight font-semibold text-white"> 2.4%</p>
<p className="text-[11px] text-rose-400/80 flex items-center gap-1 mt-1"><i className="h-3.5 w-3.5" data-lucide="arrow-down-right"></i> -0.2%</p>
</div>
</div>

<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 lg:col-span-8 rounded-3xl bg-white/5 border border-white/10 p-4 md:p-6 relative overflow-hidden">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg md:text-xl tracking-tight font-semibold text-white">E‑commerce Progress</h3>
<p className="text-xs text-white/60">Sales, Visitors, ROAS, Conversion</p>
</div>
<div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1">
<button className="px-2 py-1 text-xs rounded-lg bg-white/10">Daily</button>
<button className="px-2 py-1 text-xs rounded-lg hover:bg-white/10">Weekly</button>
<button className="px-2 py-1 text-xs rounded-lg hover:bg-white/10">Monthly</button>
</div>
</div>
<div className="mt-4">
<div className="rounded-2xl bg-[#0f0f15] border border-white/10">
<div className="p-2 sm:p-4">
<div className="relative">
<div className="h-64 sm:h-72">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="h-full w-full">

<div className="h-64 sm:h-72"><canvas id="progressChart"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: 'inset 0 0 120px rgba(166,140,255,.08)'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 space-y-4">
<div className="rounded-3xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-white">Active Shops</h3>
<button className="text-xs px-2 py-1 rounded-lg bg-white/10">View all</button>
</div>
<div className="mt-3 space-y-3">

<div className="flex items-center justify-between rounded-2xl p-3 bg-[#0f0f15] border border-white/10">
<div className="flex items-center gap-3">
<img alt="Shop 1" className="h-10 w-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">GlowFit</p>
<p className="text-xs text-white/60">Fitness gear</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-emerald-400">+$3,420</p>
<p className="text-[11px] text-white/50">24h</p>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl p-3 bg-[#0f0f15] border border-white/10">
<div className="flex items-center gap-3">
<img alt="Shop 2" className="h-10 w-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">LuxeDesk</p>
<p className="text-xs text-white/60">Work accessories</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-emerald-400">+$1,980</p>
<p className="text-[11px] text-white/50">24h</p>
</div>
</div>
<div className="flex items-center justify-between rounded-2xl p-3 bg-[#0f0f15] border border-white/10">
<div className="flex items-center gap-3">
<img alt="Shop 3" className="h-10 w-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium">SereneGlow</p>
<p className="text-xs text-white/60">Home zen</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-rose-400">-$120</p>
<p className="text-[11px] text-white/50">24h</p>
</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold text-white">Daily Tasks</h3>
<span className="text-xs text-white/60">Guided</span>
</div>
<div className="mt-3 space-y-2">
<button className="w-full group flex items-center justify-between rounded-2xl p-3 bg-[#0f0f15] border border-white/10 hover:border-white/20" data-task="">
<div className="flex items-center gap-3">
<div className="h-5 w-5 rounded-md border border-white/20 flex items-center justify-center">
<i className="h-3.5 w-3.5 text-white/0 group-[.done]:text-black" data-lucide="check" style={{}}></i>
</div>
<p className="text-sm">Create logo</p>
</div>
<span className="text-[11px] text-white/50">5 min</span>
</button>
<button className="w-full group flex items-center justify-between rounded-2xl p-3 bg-[#0f0f15] border border-white/10 hover:border-white/20" data-task="">
<div className="flex items-center gap-3">
<div className="h-5 w-5 rounded-md border border-white/20 flex items-center justify-center">
<i className="h-3.5 w-3.5 text-white/0 group-[.done]:text-black" data-lucide="check"></i>
</div>
<p className="text-sm">Connect Shopify</p>
</div>
<span className="text-[11px] text-white/50">8 min</span>
</button>
<button className="w-full group flex items-center justify-between rounded-2xl p-3 bg-[#0f0f15] border border-white/10 hover:border-white/20" data-task="">
<div className="flex items-center gap-3">
<div className="h-5 w-5 rounded-md border border-white/20 flex items-center justify-center">
<i className="h-3.5 w-3.5 text-white/0 group-[.done]:text-black" data-lucide="check"></i>
</div>
<p className="text-sm">Launch TikTok ad</p>
</div>
<span className="text-[11px] text-white/50">12 min</span>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-3xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">Sales</p>
<span className="text-[11px] text-emerald-400">+8%</span>
</div>
<div className="mt-2">
<div><canvas id="miniSales"></canvas></div>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">Visitors</p>
<span className="text-[11px] text-emerald-400">+3%</span>
</div>
<div className="mt-2">
<div><canvas id="miniVisitors"></canvas></div>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">ROAS</p>
<span className="text-[11px] text-emerald-400">+0.2</span>
</div>
<div className="mt-2">
<div><canvas id="miniRoas"></canvas></div>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-white/70">Conversion</p>
<span className="text-[11px] text-rose-400">-0.1%</span>
</div>
<div className="mt-2">
<div><canvas id="miniConv"></canvas></div>
</div>
</div>
</div>
</div>

<button className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-full h-14 w-14 shadow-[0_0_40px_#ffcc6677] flex items-center justify-center" id="assistantFab" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>
<i className="h-6 w-6 text-black" data-lucide="message-circle"></i>
</button>
<div className="hidden absolute bottom-24 right-4 md:right-6 w-[22rem] rounded-3xl bg-[#0f0f15]/95 border border-white/10 backdrop-blur-xl p-4" id="assistantCard">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-xl flex items-center justify-center ring-2 ring-white/10" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>
<i className="h-5 w-5 text-black" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white">Aura AI</p>
<p className="text-sm text-white/70 mt-1">I can set up your first ad set. Choose a product or ask for a winning trend.</p>
<div className="mt-3 flex flex-wrap gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">Find winning products</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">Generate TikTok script</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10">Optimize ROAS</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl md:text-2xl tracking-tight font-semibold text-white">Shop Launch Assistant</h3>
<span className="text-xs text-white/60">Step-by-step</span>
</div>
<div className="mt-4">

<div className="h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full" style={{width: '46%', background: 'linear-gradient(90deg,#FFCC66,#E86AFF)'}}></div>
</div>
<p className="mt-2 text-xs text-white/60">46% complete</p>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<button className="group rounded-2xl p-4 bg-[#0f0f15] border border-white/10 hover:border-white/20 text-left">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>
<i className="h-5 w-5 text-black" data-lucide="store"></i>
</div>
<p className="text-sm font-medium text-white">Create Shopify store</p>
<p className="mt-1 text-xs text-white/60">We’ll generate a starter theme and pages.</p>
</button>
<button className="group rounded-2xl p-4 bg-[#0f0f15] border border-white/10 hover:border-white/20 text-left">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{background: 'linear-gradient(135deg,#A68CFF,#E86AFF)'}}>
<i className="h-5 w-5 text-black" data-lucide="box"></i>
</div>
<p className="text-sm font-medium text-white">Choose product</p>
<p className="mt-1 text-xs text-white/60">Trend and margin analysis included.</p>
</button>
<button className="group rounded-2xl p-4 bg-[#0f0f15] border border-white/10 hover:border-white/20 text-left">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{background: 'linear-gradient(135deg,#FFCC66,#A68CFF)'}}>
<i className="h-5 w-5 text-black" data-lucide="palette"></i>
</div>
<p className="text-sm font-medium text-white">Branding</p>
<p className="mt-1 text-xs text-white/60">Logo, palette, typography presets.</p>
</button>
<button className="group rounded-2xl p-4 bg-[#0f0f15] border border-white/10 hover:border-white/20 text-left">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{background: 'linear-gradient(135deg,#E86AFF,#A68CFF)'}}>
<i className="h-5 w-5 text-black" data-lucide="file-text"></i>
</div>
<p className="text-sm font-medium text-white">Legal pages</p>
<p className="mt-1 text-xs text-white/60">Auto‑generated policies tailored to region.</p>
</button>
<button className="group rounded-2xl p-4 bg-[#0f0f15] border border-white/10 hover:border-white/20 text-left">
<div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>
<i className="h-5 w-5 text-black" data-lucide="credit-card"></i>
</div>
<p className="text-sm font-medium text-white">Payment setup</p>
<p className="mt-1 text-xs text-white/60">Stripe/PayPal with fraud checks.</p>
</button>
</div>
<div className="mt-6 flex items-center justify-end gap-3">
<button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Back</button>
<button className="px-4 py-2 rounded-xl text-black font-medium" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Continue</button>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-5">
<h4 className="text-lg tracking-tight font-semibold text-white">Assistant Suggestions</h4>
<ul className="mt-3 space-y-3">
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-amber-300" data-lucide="lightbulb"></i>
<div>
<p className="text-sm">Your ROAS is strongest on iOS 18–24. Shift +15% budget.</p>
<button className="mt-1 text-xs px-2 py-1 rounded-lg bg-white/10 border border-white/10">Apply</button>
</div>
</li>
<li className="flex items-start gap-3">
<i className="h-5 w-5 text-fuchsia-300" data-lucide="zap"></i>
<div>
<p className="text-sm">Generate 3 UGC hooks for “GlowFit” bundle.</p>
<button className="mt-1 text-xs px-2 py-1 rounded-lg bg-white/10 border border-white/10">Create</button>
</div>
</li>
</ul>
</div>
</section>

<section className="rounded-3xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between flex-wrap gap-3">
<h3 className="text-xl md:text-2xl tracking-tight font-semibold text-white">Winning Product Finder</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-xl text-sm bg-white/5 border border-white/10 hover:bg-white/10">Reset</button>
<button className="px-3 py-1.5 rounded-xl text-sm text-black font-medium" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Analyze</button>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Trend: 7d ↑</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Competition: Low</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Margin: 40%+</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Ship time &lt; 7d</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Platform: TikTok</button>
</div>

<div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f15]">
<img alt="Product 1" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="font-medium">HydroGlow Bottle</p>
<span className="text-[11px] px-2 py-1 rounded-md text-black" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Trending</span>
</div>
<div className="mt-2 text-xs text-white/70 grid grid-cols-3 gap-2">
<span>Trend +64%</span>
<span>Comp Low</span>
<span>Margin 48%</span>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Details</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl text-black font-medium" style={{background: 'linear-gradient(135deg,#A68CFF,#E86AFF)'}}>Select</button>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f15]">
<img alt="Product 2" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="font-medium">ErgoFlex Chair</p>
<span className="text-[11px] px-2 py-1 rounded-md text-black" style={{background: 'linear-gradient(135deg,#A68CFF,#E86AFF)'}}>Gold pick</span>
</div>
<div className="mt-2 text-xs text-white/70 grid grid-cols-3 gap-2">
<span>Trend +22%</span>
<span>Comp Med</span>
<span>Margin 41%</span>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Details</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl text-black font-medium" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Select</button>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f15]">
<img alt="Product 3" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<p className="font-medium">ZenAura Lamp</p>
<span className="text-[11px] px-2 py-1 rounded-md text-black" style={{background: 'linear-gradient(135deg,#FFCC66,#A68CFF)'}}>Low comp</span>
</div>
<div className="mt-2 text-xs text-white/70 grid grid-cols-3 gap-2">
<span>Trend +38%</span>
<span>Comp Low</span>
<span>Margin 52%</span>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-xs px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/10">Details</button>
<button className="text-xs px-2.5 py-1.5 rounded-xl text-black font-medium" style={{background: 'linear-gradient(135deg,#A68CFF,#FFCC66)'}}>Select</button>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-xl md:text-2xl tracking-tight font-semibold text-white">Creative Script Generator</h3>
<button className="px-3 py-1.5 rounded-xl text-sm bg-white/5 border border-white/10 hover:bg-white/10">New</button>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-4">
<div className="rounded-2xl p-4 bg-[#0f0f15] border border-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-white/80" data-lucide="clapperboard"></i>
<p className="font-medium">UGC Script Preview</p>
</div>
<div className="mt-3 space-y-2 text-sm text-white/80">
<p><span className="text-white/60">Hook:</span> “I stopped buying plastic bottles after this…”</p>
<p><span className="text-white/60">Problem:</span> Dehydration + eco waste.</p>
<p><span className="text-white/60">Solution:</span> HydroGlow tracks intake and purifies water.</p>
<p><span className="text-white/60">CTA:</span> “Claim 20% off today — link in bio.”</p>
</div>
</div>
<div className="rounded-2xl p-4 bg-[#0f0f15] border border-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-white/80" data-lucide="video"></i>
<p className="font-medium">Shot List</p>
</div>
<ol className="mt-3 space-y-2 text-sm text-white/80 list-decimal list-inside">
<li>POV unbox with glow highlight (1.5s)</li>
<li>Fill and tap to purify — neon spark (2s)</li>
<li>Gym cut: sip after set (2s)</li>
<li>Overlay: hydration stats (1s)</li>
<li>CTA with code AURA20 (1.5s)</li>
</ol>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10">Save</button>
<button className="px-3 py-2 rounded-xl text-black font-medium" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Export</button>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-5">
<h4 className="text-lg tracking-tight font-semibold text-white">Ad Variations</h4>
<div className="mt-4 space-y-3">
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="UGC" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="p-3 text-sm flex items-center justify-between">
<span>UGC — Lifestyle</span>
<span className="text-[11px] px-2 py-1 rounded-md text-black" style={{background: 'linear-gradient(135deg,#FFCC66,#E86AFF)'}}>Best ROAS</span>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10">
<img alt="Product Shot" className="h-32 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-3 text-sm flex items-center justify-between">
<span>Neon Product Spin</span>
<span className="text-[11px] px-2 py-1 rounded-md text-black" style={{background: 'linear-gradient(135deg,#A68CFF,#E86AFF)'}}>A/B v2</span>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-3 gap-6">
<div className="rounded-3xl bg-white/5 border border-white/10 p-5">
<h3 className="text-xl tracking-tight font-semibold text-white">Desktop Mock</h3>
<div className="mt-3 rounded-2xl overflow-hidden border border-white/10">
<img alt="Desktop mock" className="w-full h-48 object-cover opacity-90" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" />
</img></div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-5">
<h3 className="text-xl tracking-tight font-semibold text-white">Mobile Mock</h3>
<div className="mt-3 mx-auto w-56 rounded-[2rem] border border-white/10 bg-[#0f0f15] p-3">
<div className="rounded-xl overflow-hidden">
<img alt="Mobile mock" className="w-full h-96 object-cover opacity-90" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=800&amp;auto=format&amp;fit=crop" />
</img></div>
</div>
</div>
<div className="rounded-3xl bg-white/5 border border-white/10 p-5">
<h3 className="text-xl tracking-tight font-semibold text-white">Tone &amp; Mood</h3>
<p className="mt-2 text-sm text-white/70">Calm luxury, powerful guidance, friendly AI. Minimal surfaces with neon accents and soft blur glass.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl h-16" style={{background: 'radial-gradient(circle at 20% 20%, #FFCC66, transparent 60%), radial-gradient(circle at 80% 80%, #A68CFF, transparent 60%)'}}></div>
<div className="rounded-xl h-16" style={{background: 'linear-gradient(135deg,#0f0f15,#1a1a22)'}}></div>
<div className="rounded-xl h-16" style={{background: 'linear-gradient(135deg,#A68CFF,#E86AFF)'}}></div>
</div>
</div>
</section>
</div>
</main>
</div>


    </>
  );
}
