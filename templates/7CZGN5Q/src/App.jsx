import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(closest-side,#1f2937,transparent)] opacity-40 blur-3xl"></div>
<div className="absolute -bottom-24 right-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,#111827,transparent)] opacity-60 blur-2xl"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-neutral-900/60 bg-neutral-900/50 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500"></div>
<span className="text-lg tracking-tight font-semibold">Realm</span>
</div>
<div className="hidden md:flex items-center gap-2">
<nav className="flex items-center gap-1">
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">All</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">Gaming</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">Art</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">PFPs</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">Memberships</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">Music</button>
<button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-800">Photography</button>
</nav>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg px-3 h-10">
<i className="w-4 h-4 text-neutral-400" data-lucide="search"></i>
<input className="bg-transparent outline-none text-sm text-neutral-200 placeholder-neutral-500 w-56" placeholder="Search collections, users..."/>
</div>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<button className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-white/10 hover:bg-white/15 border border-neutral-700">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Create</span>
</button>
</div>
</div>
</header>
<main>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
<div className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800">

<div className="relative h-[320px] sm:h-[420px]" id="heroSlides">

<div className="hero-slide absolute inset-0 opacity-100 transition-opacity duration-700">
<img alt="Hero 1" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
<div className="flex items-center gap-2 mb-2">
<h1 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold">Voxel Portraits</h1>
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-sky-500/20 border border-sky-500/40">
<i className="w-3 h-3 text-sky-400" data-lucide="check"></i>
</span>
</div>
<p className="text-neutral-300 text-sm sm:text-base mb-4">By @gridstudio — Generative 3D avatars exploring color, shape, and light.</p>
<div className="flex flex-wrap gap-3">
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Floor</p>
<p className="text-sm font-medium">0.86 ETH</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Items</p>
<p className="text-sm font-medium">20,000</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Volume</p>
<p className="text-sm font-medium">187.2k ETH</p>
</div>
</div>
</div>
</div>

<div className="hero-slide absolute inset-0 opacity-0 transition-opacity duration-700">
<img alt="Hero 2" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
<div className="flex items-center gap-2 mb-2">
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold">True Crypto Emotions</h2>
<span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-sky-500/20 border border-sky-500/40">
<i className="w-3 h-3 text-sky-400" data-lucide="check"></i>
</span>
</div>
<p className="text-neutral-300 text-sm sm:text-base mb-4">A visual diary of market moods — gradients and glass.</p>
<div className="flex flex-wrap gap-3">
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Floor</p>
<p className="text-sm font-medium">0.19 APE</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Items</p>
<p className="text-sm font-medium">3,200</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Listed</p>
<p className="text-sm font-medium">1.8%</p>
</div>
</div>
</div>
</div>

<div className="hero-slide absolute inset-0 opacity-0 transition-opacity duration-700">
<img alt="Hero 3" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
<div className="flex items-center gap-2 mb-2">
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold">Polygonal Peaks</h2>
</div>
<p className="text-neutral-300 text-sm sm:text-base mb-4">High-altitude renders of minimalist mountain forms.</p>
<div className="flex flex-wrap gap-3">
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Floor</p>
<p className="text-sm font-medium">0.24 ETH</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Volume</p>
<p className="text-sm font-medium">12.7k ETH</p>
</div>
</div>
</div>
</div>

<div className="hero-slide absolute inset-0 opacity-0 transition-opacity duration-700">
<img alt="Hero 4" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
<div className="flex items-center gap-2 mb-2">
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold">Soft Geometry</h2>
</div>
<p className="text-neutral-300 text-sm sm:text-base mb-4">Spheres and glass surfaces with cinematic lighting.</p>
<div className="flex flex-wrap gap-3">
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Floor</p>
<p className="text-sm font-medium">0.19 APE</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg px-3 py-2">
<p className="text-[11px] uppercase text-neutral-400">Items</p>
<p className="text-sm font-medium">8,888</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
<button className="hero-dot h-2 w-2 rounded-full bg-white/80"></button>
<button className="hero-dot h-2 w-2 rounded-full bg-white/40"></button>
<button className="hero-dot h-2 w-2 rounded-full bg-white/40"></button>
<button className="hero-dot h-2 w-2 rounded-full bg-white/40"></button>
</div>
<button className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-neutral-900/70 backdrop-blur border border-neutral-800 hidden sm:flex items-center justify-center hover:bg-neutral-800/90" id="heroPrev">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-neutral-900/70 backdrop-blur border border-neutral-800 hidden sm:flex items-center justify-center hover:bg-neutral-800/90" id="heroNext">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Featured Collections</h3>
<p className="text-sm text-neutral-400">This week's curated collections</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="left" data-target="#featuredCollections">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="right" data-target="#featuredCollections">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative overflow-x-auto" id="featuredCollections">
<ul className="flex gap-4 pb-2 snap-x snap-mandatory">

<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40 w-full overflow-hidden">
<img alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">Alice Keys of Power</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-neutral-400 mt-1">Floor: 0.0368 ETH • -15.8%</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40 w-full overflow-hidden">
<img alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">Mallow Inc</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-neutral-400 mt-1">Floor: 0.0223 ETH • +17.1%</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40 w-full overflow-hidden">
<img alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">Multi Ball</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-neutral-400 mt-1">Floor: 0.191 APE • -4.5%</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40 w-full overflow-hidden">
<img alt="" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">Base Emoji</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-neutral-400 mt-1">Floor: 0.0021 ETH • 0%</p>
</div>
</a>
</li>
</ul>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Trending Tokens</h3>
<p className="text-sm text-neutral-400">Largest price change in the past day</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">

<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-500"></div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-sm">NEON</p>
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-xs text-neutral-400">$0.24 • +172.7%</p>
</div>
</div>
<div className="w-24">
<div className="h-10">
<canvas className="spark" data-color="rgb(16,185,129)" data-values="2,3,4,2,5,7,8,7,9,12"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-yellow-500 to-orange-500"></div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-sm">KARRAT</p>
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-xs text-neutral-400">$0.80 • +65.9%</p>
</div>
</div>
<div className="w-24">
<div className="h-10">
<canvas className="spark" data-color="rgb(234,179,8)" data-values="1,1.2,1.1,1.5,1.7,2,2.6,2.1,2.9,3.2"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-500"></div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-sm">CXT</p>
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-xs text-neutral-400">$0.04 • +46.2%</p>
</div>
</div>
<div className="w-24">
<div className="h-10">
<canvas className="spark" data-color="rgb(59,130,246)" data-values="1,1.1,1.2,1.15,1.4,1.45,1.5,1.7,1.9,2.2"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-rose-500"></div>
<div>
<div className="flex items-center gap-2">
<p className="font-medium text-sm">PROMPT</p>
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-xs text-neutral-400">$0.38 • +90.5%</p>
</div>
</div>
<div className="w-24">
<div className="h-10">
<canvas className="spark" data-color="rgb(244,63,94)" data-values="0.8,0.9,1.1,1.4,1.3,1.7,2.2,2.0,2.6,3.1"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Featured Drops</h3>
<p className="text-sm text-neutral-400">Live and upcoming releases</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="left" data-target="#featuredDrops">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="right" data-target="#featuredDrops">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative overflow-x-auto" id="featuredDrops">
<ul className="flex gap-4 pb-2 snap-x snap-mandatory">
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-36 sm:h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">The Vito Collective</h4>
<p className="text-xs text-emerald-400 mt-1 inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Minting now
                  </p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-36 sm:h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">Hatchi Travels</h4>
<p className="text-xs text-neutral-400 mt-1">Aug 25 • 7:45 AM PDT</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-36 sm:h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">Pixelbau</h4>
<p className="text-xs text-neutral-400 mt-1">Aug 26 • 9:00 AM PDT</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-36 sm:h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">Shapes</h4>
<p className="text-xs text-neutral-400 mt-1">Aug 26 • 12:00 PM PDT</p>
</div>
</a>
</li>
</ul>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
<div className="p-6 sm:p-8 lg:col-span-1">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="aperture"></i>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold">Multi Ball</h3>
<p className="text-neutral-400 text-sm">7d sales: 159,814</p>
</div>
</div>
<p className="text-sm text-neutral-300 mt-4">Play ApeChain Wheel of Fate. High-liquidity collectibles with consistent demand.</p>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-[11px] uppercase text-neutral-400">Top #</p>
<p className="text-sm font-medium">1</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-[11px] uppercase text-neutral-400">Floor</p>
<p className="text-sm font-medium">0.191 APE</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 p-3">
<p className="text-[11px] uppercase text-neutral-400">Listed</p>
<p className="text-sm font-medium">2.1%</p>
</div>
</div>
</div>
<div className="lg:col-span-2 p-4 sm:p-6">
<div className="relative overflow-x-auto" id="salesCarousel">
<ul className="flex gap-4 pb-2 snap-x snap-mandatory">
<li className="min-w-[220px] sm:min-w-[260px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
<div className="aspect-square bg-black/40">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-3">
<p className="text-sm font-medium">#2137411</p>
<p className="text-xs text-neutral-400">0.191 APE</p>
</div>
</div>
</li>
<li className="min-w-[220px] sm:min-w-[260px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
<div className="aspect-square bg-black/40">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<p className="text-sm font-medium">#2128885</p>
<p className="text-xs text-neutral-400">0.191 APE</p>
</div>
</div>
</li>
<li className="min-w-[220px] sm:min-w-[260px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
<div className="aspect-square bg-black/40">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<p className="text-sm font-medium">#1603796</p>
<p className="text-xs text-neutral-400">0.191 APE</p>
</div>
</div>
</li>
<li className="min-w-[220px] sm:min-w-[260px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800">
<div className="aspect-square bg-black/40">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-3">
<p className="text-sm font-medium">#1065733</p>
<p className="text-xs text-neutral-400">0.191 APE</p>
</div>
</div>
</li>
</ul>
</div>
<div className="flex items-center justify-end gap-2 mt-2">
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="left" data-target="#salesCarousel">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="right" data-target="#salesCarousel">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Top Movers Today</h3>
<p className="text-sm text-neutral-400">Largest floor price change in the past day</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="left" data-target="#topMovers">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="right" data-target="#topMovers">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative overflow-x-auto" id="topMovers">
<ul className="flex gap-4 pb-2 snap-x snap-mandatory">

<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">Cambria Cores</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-emerald-400 mt-1">+251.6%</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">bitGAN Collab</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-emerald-400 mt-1">+123%</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">EMPTY ROOMS</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-emerald-400 mt-1">+66.7%</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[300px] snap-start">
<a className="group block rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-700">
<div className="h-40">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2">
<h4 className="text-base tracking-tight font-semibold">HAPE PRIME</h4>
<i className="w-4 h-4 text-sky-400" data-lucide="check"></i>
</div>
<p className="text-sm text-emerald-400 mt-1">+51.1%</p>
</div>
</a>
</li>
</ul>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Featured Tokens</h3>
<p className="text-sm text-neutral-400">Curated selection</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="left" data-target="#featuredTokens">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="right" data-target="#featuredTokens">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative overflow-x-auto" id="featuredTokens">
<ul className="flex gap-4 pb-2 snap-x snap-mandatory">
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">N0T Employment Education</h4>
<p className="text-xs text-rose-400 mt-1">-11.5%</p>
</div>
</div>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">Nobody Sausage</h4>
<p className="text-xs text-emerald-400 mt-1">+43.4%</p>
</div>
</div>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">Memecoin MEME</h4>
<p className="text-xs text-emerald-400 mt-1">+11.8%</p>
</div>
</div>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<div className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">RIZE</h4>
<p className="text-xs text-rose-400 mt-1">-2.9%</p>
</div>
</div>
</li>
</ul>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">Trending Collections</h3>
<p className="text-sm text-neutral-400">Highest sales in the past hour</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">

<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-orange-500 to-rose-500"></div>
<div>
<p className="text-sm font-medium">Axie Item</p>
<p className="text-xs text-neutral-400">0.09 RON</p>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-violet-500"></div>
<div>
<p className="text-sm font-medium">Axie</p>
<p className="text-xs text-rose-400">-7.2%</p>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-purple-500"></div>
<div>
<p className="text-sm font-medium">Ragnarok</p>
<p className="text-xs text-rose-400">-4.4%</p>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-500"></div>
<div>
<p className="text-sm font-medium">Multi Ball</p>
<p className="text-xs text-emerald-400">+4.5%</p>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-yellow-500 to-amber-500"></div>
<div>
<p className="text-sm font-medium">NBA Top Shot</p>
<p className="text-xs text-rose-400">-0.1%</p>
</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-sky-500 to-teal-500"></div>
<div>
<p className="text-sm font-medium">Axie Material</p>
<p className="text-xs text-neutral-400">0.03 RON</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 mb-16">
<div className="flex items-end justify-between mb-4">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold">NFT 101</h3>
<p className="text-sm text-neutral-400">Learn about NFTs, Web3, and more</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="left" data-target="#nft101">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
</button>
<button className="scroller-btn h-9 w-9 rounded-lg border border-neutral-800 bg-neutral-900 hover:bg-neutral-800" data-dir="right" data-target="#nft101">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative overflow-x-auto" id="nft101">
<ul className="flex gap-4 pb-2 snap-x snap-mandatory">
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="block rounded-xl overflow-hidden bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">What is an NFT?</h4>
<p className="text-sm text-neutral-300 mt-1">A beginner-friendly guide</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="block rounded-xl overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-600/10 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">How to buy an NFT</h4>
<p className="text-sm text-neutral-300 mt-1">Safely and securely</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="block rounded-xl overflow-hidden bg-gradient-to-br from-fuchsia-500/20 to-rose-600/10 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">What is minting?</h4>
<p className="text-sm text-neutral-300 mt-1">From wallet to chain</p>
</div>
</a>
</li>
<li className="min-w-[260px] sm:min-w-[320px] snap-start">
<a className="block rounded-xl overflow-hidden bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-neutral-800">
<div className="h-36">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-base tracking-tight font-semibold">Safety in Web3</h4>
<p className="text-sm text-neutral-300 mt-1">Stay protected</p>
</div>
</a>
</li>
</ul>
</div>
</section>
</main>
<footer className="border-t border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500"></div>
<p className="text-sm text-neutral-400">© 2025 Realm. All rights reserved.</p>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Terms</a>
<a className="text-sm text-neutral-400 hover:text-neutral-200" href="#">Privacy</a>
</div></div></footer>
    </>
  );
}
