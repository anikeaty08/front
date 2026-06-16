import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-10">
<a className="text-xl font-semibold tracking-tighter text-zinc-100 transition-colors hover:text-white" href="#">ZGT</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="transition-colors hover:text-white" href="#">Store</a>
<a className="transition-colors hover:text-white" href="#">Workstations</a>
<a className="transition-colors hover:text-white" href="#">Peripherals</a>
<a className="transition-colors hover:text-white" href="#">Audio</a>
</nav>
</div>
<div className="flex items-center gap-5 text-zinc-400">
<button aria-label="Search" className="flex items-center transition-colors hover:text-white">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button aria-label="Cart" className="relative flex items-center transition-colors hover:text-white">
<iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon>
<span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[0.6rem] font-semibold text-zinc-900">2</span>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pt-40">

<div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-white/[0.04] blur-[100px] rounded-full"></div>
<div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-8">
<span className="flex h-2 w-2 rounded-full bg-zinc-300"></span>
<span className="text-xs font-medium text-zinc-300">Zona Gadget Tech OS 2.0 is now live</span>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 sm:text-7xl">
          Engineered for precision.
        </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg font-normal text-zinc-400 sm:text-xl">
          Discover a curated ecosystem of premium tech gadgets. Designed to integrate seamlessly, built to elevate your daily workflow.
        </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 w-full sm:w-auto" href="#store">
            Shop the collection
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/50 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/10 w-full sm:w-auto" href="#features">
            Explore features
            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 pb-32 sm:px-6 lg:px-8" id="store">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white">Latest Hardware</h2>
<p className="mt-2 text-sm text-zinc-400">Professional-grade tools for modern creators.</p>
</div>

<div className="relative inline-block text-left group">
<button className="inline-flex w-full items-center justify-between gap-x-2 rounded-lg border border-white/10 bg-zinc-900/30 px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white sm:w-auto">
<span>Sort by: Featured</span>
<iconify-icon className="text-base text-zinc-500 group-hover:text-zinc-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-colors hover:bg-zinc-900/50">
<div className="relative flex aspect-square items-center justify-center bg-zinc-900/40 p-8">
<div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-md">New</div>
<iconify-icon className="text-7xl text-zinc-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-300" icon="solar:headphones-round-sound-linear"></iconify-icon>
</div>
<div className="flex flex-1 flex-col justify-between p-5">
<div>
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-100">Aura Studio Pro</h3>
<span className="text-base font-medium text-zinc-100">$349</span>
</div>
<p className="mt-1 text-sm text-zinc-400">High-fidelity ANC headphones with spatial audio.</p>
</div>
<button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white">
              Add to cart
            </button>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-colors hover:bg-zinc-900/50">
<div className="relative flex aspect-square items-center justify-center bg-zinc-900/40 p-8">
<iconify-icon className="text-7xl text-zinc-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-300" icon="solar:keyboard-linear"></iconify-icon>
</div>
<div className="flex flex-1 flex-col justify-between p-5">
<div>
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-100">Tactile 65%</h3>
<span className="text-base font-medium text-zinc-100">$189</span>
</div>
<p className="mt-1 text-sm text-zinc-400">Wireless mechanical board with hot-swappable switches.</p>
</div>
<button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white">
              Add to cart
            </button>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/20 transition-colors hover:bg-zinc-900/50">
<div className="relative flex aspect-square items-center justify-center bg-zinc-900/40 p-8">
<iconify-icon className="text-7xl text-zinc-600 transition-transform duration-500 group-hover:scale-110 group-hover:text-zinc-300" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<div className="flex flex-1 flex-col justify-between p-5">
<div>
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-zinc-100">Precision V2</h3>
<span className="text-base font-medium text-zinc-100">$129</span>
</div>
<p className="mt-1 text-sm text-zinc-400">Ultralight symmetrical mouse with 4KHz polling.</p>
</div>
<button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-white/5 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white">
              Add to cart
            </button>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-zinc-900/10 py-24 sm:py-32" id="features">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Deep customization.
            </h2>
<p className="mt-4 text-base text-zinc-400 leading-relaxed">
              Take full control of your hardware through our integrated control center. Fine-tune acoustics, manage performance profiles, and customize illumination across your entire ecosystem.
            </p>
<div className="mt-10 space-y-8">

<div className="flex items-center justify-between border-b border-white/5 pb-6">
<div>
<p className="text-sm font-medium text-zinc-100">Adaptive Environment</p>
<p className="mt-1 text-xs text-zinc-500">Automatically adjust noise cancellation and display brightness.</p>
</div>

<div className="relative flex h-5 w-9 cursor-pointer items-center rounded-full bg-white/20 transition-colors hover:bg-white/30 ml-4 shrink-0">
<div className="absolute left-0.5 h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm transition-transform duration-200"></div>
</div>
</div>

<div className="flex flex-col border-b border-white/5 pb-6">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-sm font-medium text-zinc-100">Ambient Illumination</p>
<p className="mt-1 text-xs text-zinc-500">Adjust the intensity of your device's LED array.</p>
</div>
<span className="text-xs font-medium text-zinc-400">75%</span>
</div>

<div className="relative h-1.5 w-full rounded-full bg-zinc-800">
<div className="absolute left-0 top-0 h-full w-3/4 rounded-full bg-zinc-300"></div>
<div className="absolute left-3/4 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border-2 border-zinc-300 bg-zinc-950 shadow-sm transition-transform hover:scale-125"></div>
</div>
</div>

<div className="pt-2">
<a className="text-sm font-medium text-white hover:text-zinc-300 transition-colors flex items-center gap-1.5 inline-flex" href="#">
                  Download Control Center
                  <iconify-icon className="text-base" icon="solar:download-minimalistic-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative aspect-square w-full rounded-3xl border border-white/10 bg-zinc-900/40 p-6 sm:p-10 overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-700/20 via-transparent to-transparent"></div>
<div className="relative flex h-full w-full flex-col rounded-2xl border border-white/5 bg-zinc-950 shadow-2xl p-6">

<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
<div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
<div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="h-1.5 w-12 rounded-full bg-zinc-800"></div>
</div>

<div className="flex-1 space-y-5">
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-900/50 p-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800">
<iconify-icon className="text-zinc-400" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="h-2 w-16 rounded-full bg-zinc-600"></div>
<div className="h-1.5 w-10 rounded-full bg-zinc-700"></div>
</div>
</div>
<div className="text-xs font-medium text-emerald-400">Optimized</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl border border-white/5 bg-zinc-900/50 p-4 flex flex-col justify-between aspect-square">
<iconify-icon className="text-xl text-zinc-500" icon="solar:battery-charge-linear"></iconify-icon>
<div className="space-y-1">
<div className="text-lg font-medium text-white tracking-tight">84%</div>
<div className="text-xs text-zinc-500">Battery level</div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-zinc-900/50 p-4 flex flex-col justify-between aspect-square">
<iconify-icon className="text-xl text-zinc-500" icon="solar:bluetooth-linear"></iconify-icon>
<div className="space-y-1">
<div className="text-lg font-medium text-white tracking-tight">Sync</div>
<div className="text-xs text-zinc-500">Connected</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold tracking-tighter text-white">ZGT</span>
<span className="h-4 w-px bg-white/10"></span>
<span className="text-xs text-zinc-500">© 2024 Zona Gadget Tech.</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="transition-colors hover:text-white" href="#">Privacy</a>
<a className="transition-colors hover:text-white" href="#">Terms</a>
<a className="transition-colors hover:text-white" href="#">Support</a>
<a className="transition-colors hover:text-white" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
