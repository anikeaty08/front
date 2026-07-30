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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { stroke: 'currentColor', 'stroke-width': 1.5, 'aria-hidden': 'true' }
          });
        }
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart.js - demo balance line
      const ctx = document.getElementById('balanceChart');
      if (ctx && window.Chart) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 160);
        gradient.addColorStop(0, 'rgba(82,237,199,0.35)');
        gradient.addColorStop(1, 'rgba(82,237,199,0.05)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => i),
            datasets: [{
              data: [42.1, 42.2, 41.9, 42.8, 42.4, 42.9, 43.3, 43.0, 43.5, 43.2, 43.7, 43.6, 43.8, 43.5, 43.9, 44.2, 44.0, 44.4, 44.1, 44.6, 44.9, 44.5, 44.8, 45.2],
              borderColor: '#52EDC7',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false } }
            }
          }
        });
      }

      // Testimonials slider controls
      function wireCarousel(prevId, nextId) {
        const track = document.getElementById('testimonialTrack');
        const prev = document.getElementById(prevId);
        const next = document.getElementById(nextId);
        if (!track || !prev || !next) return;
        const scrollByAmount = () => track.clientWidth * 0.9;
        prev.addEventListener('click', () => track.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' }));
        next.addEventListener('click', () => track.scrollBy({ left: scrollByAmount(), behavior: 'smooth' }));
      }
      wireCarousel('prevBtn', 'nextBtn');
      wireCarousel('prevBtnMobile', 'nextBtnMobile');
    
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
      

<div className="relative">

<div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen" style={{backgroundImage: `radial-gradient(rgba(120,140,200,0.15) 1px, transparent 1px)`, backgroundSize: `22px 22px`}}>
</div>

<div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 blur-3xl" style={{width: `720px`, height: `480px`, background: `radial-gradient(closest-side, rgba(82,237,199,0.14), transparent 70%)`}}></div>
<div className="pointer-events-none absolute top-1/3 -left-24 blur-3xl" style={{width: `420px`, height: `420px`, background: `radial-gradient(closest-side, rgba(0,255,224,0.12), transparent 70%)`}}></div>
<div className="pointer-events-none absolute -bottom-24 right-0 blur-3xl" style={{width: `520px`, height: `520px`, background: `radial-gradient(closest-side, rgba(160,32,240,0.12), transparent 70%)`}}></div>

<header className="sticky top-0 z-40 backdrop-blur-xl">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
<a className="flex items-center gap-3 group" href="#">
<span className="flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-white/10 bg-white/5 text-emerald-300 group-hover:ring-emerald-400/30 transition-all">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="hexagon"></svg>
</span>
<span className="text-xl tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`, letterSpacing: `-0.02em`}}>NEURAX</span>
</a>
<nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
<a className="hover:text-white transition-colors" href="#why">Why NEURAX?</a>
<a className="hover:text-white transition-colors" href="#crypto">Crypto</a>
<a className="hover:text-white transition-colors" href="#how">How it Works</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition-all">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="log-in"></svg>
              Login
            </button>
<button className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-900 shadow-[0_0_0_2px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(82,237,199,0.6)] transition-all hover:shadow-[0_0_0_3px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(82,237,199,0.8)]" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="wallet"></svg>
              Connect Wallet
            </button>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="menu"></svg>
<span className="sr-only">Open menu</span>
</button>
</div>
</header>

<section className="relative">
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-8 pt-10 md:grid-cols-2 md:pt-16 lg:gap-14 lg:px-8">
<div className="flex flex-col justify-center">
<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight text-white" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`, letterSpacing: `-0.02em`}}>
              Take Control of Your Digital Assets
            </h1>
<p className="mt-5 max-w-xl text-slate-300">
              NEURAX offers a seamless, secure experience to manage your crypto assets. Instant transactions, optimized fees, and premium design.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-slate-900 text-sm font-semibold transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_20px_60px_-20px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_24px_80px_-24px_rgba(0,255,224,0.8)]" href="#" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="plug"></svg>
                Connect Wallet
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm text-slate-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition-all" href="#why">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="play-circle"></svg>
                Learn More
              </a>
</div>
<div className="mt-6 flex items-center gap-4 text-sm text-slate-300">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="user" className="h-6 w-6 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=80&auto=format&fit=crop" />
<img alt="user" className="h-6 w-6 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=80&auto=format&fit=crop" />
<img alt="user" className="h-6 w-6 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<span>Trusted by <span className="text-white font-medium">128,942+</span> users</span>
</div>
<div className="hidden sm:flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<span className="ml-1 text-slate-300">4.9 rating</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 -z-10 rounded-3xl opacity-70 blur-2xl" style={{background: `radial-gradient(closest-side, rgba(82,237,199,0.25), transparent 60%)`}}></div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-2xl">
<div className="flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-widest text-slate-400">Total Balance</p>
<p className="mt-1 text-2xl text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>$43,212.87</p>
</div>
<div className="flex items-center gap-2 rounded-xl bg-emerald-400/10 px-3 py-1.5 text-emerald-300 ring-1 ring-emerald-300/30">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="trending-up"></svg>
<span className="text-xs">+4.2%</span>
</div>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-gradient-to-b from-emerald-300 to-cyan-300/90"></div>
<div>
<p className="text-sm text-slate-300">NEURAX Wallet</p>
<p className="text-xs text-slate-400">0x9f...2A8b</p>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-slate-900 transition-all shadow-[0_0_0_2px_rgba(82,237,199,0.35),0_10px_24px_-12px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_3px_rgba(82,237,199,0.45),0_12px_32px_-12px_rgba(0,255,224,0.8)]" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
<svg aria-hidden="true" className="h-3.5 w-3.5" data-lucide="copy"></svg> Copy
                  </button>
</div>
<div className="mt-4">
<div className="relative h-40">
<div className="absolute inset-0">
<canvas id="balanceChart"></canvas>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-xs text-slate-400">Assets</p>
<p className="mt-1 text-lg text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>12.45 ETH</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<p className="text-xs text-slate-400">Network</p>
<p className="mt-1 text-lg text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Multi-Chain</p>
</div>
</div>
<div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-slate-400">From</label>
<div className="mt-2 flex items-center gap-2 rounded-xl bg-black/30 px-3 py-2 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300"></div>
<span className="text-sm text-slate-200">ETH</span>
<span className="ml-auto text-slate-400 text-xs">0.80</span>
</div>
</div>
<div>
<label className="text-xs text-slate-400">To</label>
<div className="mt-2 flex items-center gap-2 rounded-xl bg-black/30 px-3 py-2 ring-1 ring-white/10">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-400 to-violet-500"></div>
<span className="text-sm text-slate-200">SOL</span>
<span className="ml-auto text-slate-400 text-xs">≈ 21.1</span>
</div>
</div>
</div>
<button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(0,255,224,0.8)]" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="swap-horizontal"></svg>
                    Quick Swap
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="why">
<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Why Choose NEURAX?</h2>
</div>
<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-400/10">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/30">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="shield-check"></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Maximum Security</h3>
<p className="mt-2 text-sm text-slate-300">Your assets are protected with cutting-edge blockchain security protocols.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-400/10">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 ring-1 ring-cyan-300/30">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="zap"></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Instant Transactions</h3>
<p className="mt-2 text-sm text-slate-300">Execute swaps and transfers in real time—without delays.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-400/10">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-fuchsia-400/15 text-fuchsia-300 ring-1 ring-fuchsia-300/30">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="percent"></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Optimized Fees</h3>
<p className="mt-2 text-sm text-slate-300">Save with some of the lowest fees in the industry.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl hover:shadow-emerald-400/10">
<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/15 text-violet-300 ring-1 ring-violet-300/30">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="layout-dashboard"></svg>
</div>
<h3 className="mt-4 text-lg text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Premium Interface</h3>
<p className="mt-2 text-sm text-slate-300">An intuitive, elegant design that’s easy for everyone.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="crypto">
<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>All Crypto, One Wallet</h2>
<p className="mt-2 max-w-2xl text-slate-300">Buy, sell, and manage all major cryptocurrencies on a single multi-chain platform.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(0,255,224,0.8)]" href="#" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
              Buy Crypto Now
              <svg aria-hidden="true" className="h-4 w-4" data-lucide="arrow-right"></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-slate-300 to-slate-500 text-slate-900 font-semibold">B</div>
<div>
<p className="text-sm text-white">Bitcoin</p>
<p className="text-xs text-slate-400">BTC</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-indigo-300 to-indigo-500 text-slate-900 font-semibold">E</div>
<div>
<p className="text-sm text-white">Ethereum</p>
<p className="text-xs text-slate-400">ETH</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-violet-300 to-fuchsia-500 text-slate-900 font-semibold">S</div>
<div>
<p className="text-sm text-white">Solana</p>
<p className="text-xs text-slate-400">SOL</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-purple-300 to-purple-500 text-slate-900 font-semibold">M</div>
<div>
<p className="text-sm text-white">Polygon</p>
<p className="text-xs text-slate-400">MATIC</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-yellow-300 to-amber-500 text-slate-900 font-semibold">B</div>
<div>
<p className="text-sm text-white">BNB Chain</p>
<p className="text-xs text-slate-400">BNB</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-red-300 to-rose-500 text-slate-900 font-semibold">A</div>
<div>
<p className="text-sm text-white">Avalanche</p>
<p className="text-xs text-slate-400">AVAX</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-cyan-300 to-cyan-500 text-slate-900 font-semibold">X</div>
<div>
<p className="text-sm text-white">XRP</p>
<p className="text-xs text-slate-400">XRP</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-emerald-300 to-teal-500 text-slate-900 font-semibold">D</div>
<div>
<p className="text-sm text-white">Dogecoin</p>
<p className="text-xs text-slate-400">DOGE</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-sky-300 to-blue-500 text-slate-900 font-semibold">P</div>
<div>
<p className="text-sm text-white">Polkadot</p>
<p className="text-xs text-slate-400">DOT</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-lime-300 to-green-500 text-slate-900 font-semibold">C</div>
<div>
<p className="text-sm text-white">Cardano</p>
<p className="text-xs text-slate-400">ADA</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-rose-300 to-rose-500 text-slate-900 font-semibold">L</div>
<div>
<p className="text-sm text-white">Litecoin</p>
<p className="text-xs text-slate-400">LTC</p>
</div>
</div>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:bg-white/10 transition">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-stone-300 to-stone-500 text-slate-900 font-semibold">T</div>
<div>
<p className="text-sm text-white">Tron</p>
<p className="text-xs text-slate-400">TRX</p>
</div>
</div>
</div>
<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(0,255,224,0.8)]" href="#" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
              Buy Crypto Now
              <svg aria-hidden="true" className="h-4 w-4" data-lucide="arrow-right"></svg>
</a>
</div>
</div>
</section>

<section className="relative" id="how">
<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>How It Works</h2>
<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 ring-1 ring-white/10">1</span>
<p className="text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Create Your Account</p>
</div>
<p className="mt-3 text-sm text-slate-300">Sign up easily and secure your profile.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 ring-1 ring-white/10">2</span>
<p className="text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Fund Your Wallet</p>
</div>
<p className="mt-3 text-sm text-slate-300">Deposit or transfer your assets.</p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-300 ring-1 ring-white/10">3</span>
<p className="text-white tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Swap & Manage</p>
</div>
<p className="mt-3 text-sm text-slate-300">Buy, sell, or convert instantly across chains.</p>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(0,255,224,0.8)]" href="#" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
              Create Account Now
              <svg aria-hidden="true" className="h-4 w-4" data-lucide="arrow-right"></svg>
</a>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Trusted by Crypto Enthusiasts Worldwide</h2>
<div className="hidden sm:flex items-center gap-2">
<button aria-label="Previous" className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" id="prevBtn">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="chevron-left"></svg>
</button>
<button aria-label="Next" className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" id="nextBtn">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="chevron-right"></svg>
</button>
</div>
</div>
<div className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2" id="testimonialTrack">

<article className="min-w-[280px] max-w-md snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Alex" className="h-10 w-10 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm text-white">Alex M.</p>
<p className="text-xs text-slate-400">Blockchain Analyst</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“NEURAX makes crypto management effortless. Fast, secure, and beautifully designed.”</p>
<div className="mt-4 flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
</div>
</article>

<article className="min-w-[280px] max-w-md snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Sara" className="h-10 w-10 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm text-white">Sara K.</p>
<p className="text-xs text-slate-400">DeFi Researcher</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“Multi-chain swaps are instantaneous, and the UX is top-tier.”</p>
<div className="mt-4 flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star-half"></svg>
</div>
</article>

<article className="min-w-[280px] max-w-md snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Noah" className="h-10 w-10 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm text-white">Noah R.</p>
<p className="text-xs text-slate-400">Quant Trader</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“Security and speed without compromise. Exactly what I needed.”</p>
<div className="mt-4 flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
</div>
</article>

<article className="min-w-[280px] max-w-md snap-start rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<div className="flex items-center gap-3">
<img alt="Maya" className="h-10 w-10 rounded-full ring-2 ring-[#0B0D13]" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" />
<div>
<p className="text-sm text-white">Maya L.</p>
<p className="text-xs text-slate-400">Product Designer</p>
</div>
</div>
<p className="mt-4 text-sm text-slate-300">“The interface is so clean. Managing portfolios feels effortless.”</p>
<div className="mt-4 flex items-center gap-1 text-emerald-300">
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
<svg aria-hidden="true" className="h-4 w-4" data-lucide="star"></svg>
</div>
</article>
</div>
<div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
<button aria-label="Previous" className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" id="prevBtnMobile">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="chevron-left"></svg>
</button>
<button aria-label="Next" className="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" id="nextBtnMobile">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="chevron-right"></svg>
</button>
</div>
</div>
</section>

<section className="relative" id="faq">
<div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`}}>Your Questions, Answered</h2>
<div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-left">
<span className="text-white">Is NEURAX secure?</span>
<svg aria-hidden="true" className="h-5 w-5 transition group-open:rotate-45" data-lucide="plus"></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">
                Yes. We employ advanced encryption, hardware isolation, and audited smart contracts to protect your assets end-to-end.
              </p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-left">
<span className="text-white">Which cryptocurrencies are supported?</span>
<svg aria-hidden="true" className="h-5 w-5 transition group-open:rotate-45" data-lucide="plus"></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">
                All major assets across top chains including BTC, ETH, SOL, MATIC, BNB, AVAX, XRP, and more—on one wallet.
              </p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-left">
<span className="text-white">Do I need KYC verification?</span>
<svg aria-hidden="true" className="h-5 w-5 transition group-open:rotate-45" data-lucide="plus"></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">
                Basic wallet features do not require KYC. Certain on-ramp/off-ramp and compliance regions may require verification.
              </p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer list-none items-center justify-between text-left">
<span className="text-white">Can I use NEURAX on mobile?</span>
<svg aria-hidden="true" className="h-5 w-5 transition group-open:rotate-45" data-lucide="plus"></svg>
</summary>
<p className="mt-3 text-sm text-slate-300">
                Absolutely. NEURAX is responsive and works across devices. Native apps are in development.
              </p>
</details>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-slate-900 transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(0,255,224,0.8)]" href="#" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}}>
              Create Account Now
              <svg aria-hidden="true" className="h-4 w-4" data-lucide="arrow-right"></svg>
</a>
</div>
</div>
</section>

<footer className="relative">
<div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-8">
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
<div>
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-white/10 bg-white/5 text-emerald-300">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="hexagon"></svg>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: `'Poppins', Inter, sans-serif`, fontWeight: `600`, letterSpacing: `-0.02em`}}>NEURAX</span>
</div>
<p className="mt-3 max-w-xs text-sm text-slate-400">A seamless, secure multi-chain wallet for modern crypto users.</p>
<div className="mt-4 flex items-center gap-2">
<a aria-label="Discord" className="inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" href="#">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="message-square"></svg>
</a>
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" href="#">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="twitter"></svg>
</a>
<a aria-label="Telegram" className="inline-flex h-9 w-9 items-center justify-center rounded-xl ring-1 ring-white/10 hover:bg-white/5 hover:ring-white/20 transition" href="#">
<svg aria-hidden="true" className="h-5 w-5" data-lucide="send"></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-4">
<div>
<h4 className="text-sm text-white">Resources</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-sm text-white">Newsletter</h4>
<p className="mt-2 text-sm text-slate-400">Get updates on new chains and features.</p>
<form className="mt-3 flex gap-2">
<input className="w-full rounded-xl bg-white/5 px-4 py-2 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-emerald-300/40" placeholder="you@domain.com" required type="email" />
<button className="rounded-xl px-4 py-2 text-sm text-slate-900 transition-all shadow-[0_0_0_3px_rgba(82,237,199,0.35),0_10px_30px_-10px_rgba(0,255,224,0.6)] hover:shadow-[0_0_0_4px_rgba(82,237,199,0.45),0_12px_40px_-12px_rgba(0,255,224,0.8)]" style={{background: `linear-gradient(180deg, #52EDC7 0%, #00FFE0 100%)`}} type="submit">
                    Subscribe
                  </button>
</form>
</div>
</div>
</div>
<div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-500">
<p>© <span id="year"></span> NEURAX. All rights reserved.</p>
<p>Made for the multi-chain era.</p>
</div>
</div>
</footer>
</div>



    </>
  );
}
