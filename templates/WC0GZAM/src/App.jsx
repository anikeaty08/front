import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<div className="h-6 w-6 rounded-md bg-neutral-900 text-white grid place-items-center text-[11px] tracking-tight font-medium">AC</div>
<span className="text-[15px] tracking-tight font-medium">ArtCalls</span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-[14px] text-neutral-600 hover:text-neutral-900 transition" href="#">Browse</a>
<a className="text-[14px] text-neutral-600 hover:text-neutral-900 transition" href="#">Saved</a>
<a className="text-[14px] text-neutral-600 hover:text-neutral-900 transition" href="#">For organizers</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3.5 py-2 text-[13px] font-medium text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 transition" href="#">
<i className="h-4 w-4" data-lucide="plus"></i>
              Submit a call
            </a>
<button aria-label="Open menu" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition md:hidden">
<i className="h-5 w-5 text-neutral-700" data-lucide="menu"></i>
</button>
<button aria-label="Account" className="hidden md:inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 transition">
<img alt="Avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</button>
</div>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 pt-8 md:pt-12">
<div className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h1 className="text-[28px] md:text-[32px] tracking-tight font-semibold text-neutral-900">Discover calls for art</h1>
<p className="text-[15px] text-neutral-600">Find residencies, open calls, exhibitions, and grants worldwide.</p>
</div>

<div className="w-full rounded-2xl border border-neutral-200 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
<div className="p-3 md:p-4">
<div className="flex flex-col md:flex-row gap-3 md:items-center">

<div className="relative flex-1">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" data-lucide="search"></i>
<input className="w-full rounded-xl border border-neutral-200 bg-white pl-10 pr-4 py-2.5 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300" placeholder="Search by title, medium, organizer..." type="text"/>
</div>

<div className="relative w-full md:w-[260px]">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" data-lucide="map-pin"></i>
<input className="w-full rounded-xl border border-neutral-200 bg-white pl-10 pr-10 py-2.5 text-[14px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300" placeholder="Anywhere" type="text"/>
<button className="absolute right-1.5 top-1.5 inline-flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-[12px] text-neutral-700 hover:bg-neutral-50 border border-neutral-200">
<i className="h-4 w-4" data-lucide="crosshair"></i>
                  Near me
                </button>
</div>

<details className="relative w-full md:w-[220px]">
<summary className="list-none cursor-pointer">
<div className="inline-flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white px-3 py-2.5 text-[14px] text-neutral-800 hover:bg-neutral-50">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4 text-neutral-500" data-lucide="arrow-up-down"></i>
                      Sort by: <span className="font-medium"> Deadline</span>
</div>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</div>
</summary>
<div className="absolute z-20 mt-2 w-full rounded-xl border border-neutral-200 bg-white shadow-lg">
<ul className="py-1.5 text-[14px]">
<li><a className="flex items-center justify-between px-3 py-2 hover:bg-neutral-50 text-neutral-800" href="#"><span>Deadline</span><i className="h-4 w-4 text-neutral-900" data-lucide="check"></i></a></li>
<li><a className="block px-3 py-2 hover:bg-neutral-50 text-neutral-700" href="#">Newest</a></li>
<li><a className="block px-3 py-2 hover:bg-neutral-50 text-neutral-700" href="#">Prize amount</a></li>
<li><a className="block px-3 py-2 hover:bg-neutral-50 text-neutral-700" href="#">Lowest fee</a></li>
<li><a className="block px-3 py-2 hover:bg-neutral-50 text-neutral-700" href="#">Most saved</a></li>
</ul>
</div>
</details>
</div>
</div>
<div className="border-t border-neutral-200 px-3 md:px-4 py-3">

<div className="flex items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]" style={{scrollbarWidth: 'none'}}>

<span className="hidden sm:inline text-[13px] text-neutral-600">Quick filters:</span>

<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="zap"></i>
                  Open now
                </span>
</label>
<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="wallet"></i>
                  No fee
                </span>
</label>
<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="globe"></i>
                  Online
                </span>
</label>
<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="building-2"></i>
                  Residency
                </span>
</label>
<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="palette"></i>
                  Painting
                </span>
</label>
<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="camera"></i>
                  Photography
                </span>
</label>
<label className="shrink-0">
<input className="peer hidden" type="checkbox"/>
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition">
<i className="h-4 w-4" data-lucide="award"></i>
                  Grants
                </span>
</label>
<button className="ml-auto inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-[13px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition shrink-0">
<i className="h-4 w-4" data-lucide="sliders"></i>
                More filters
              </button>
</div>
</div>
</div>
</div>
</section>

<main className="mx-auto max-w-7xl px-4 pt-8 pb-16">

<div className="mb-4 flex items-center justify-between">
<p className="text-[13px] text-neutral-600">Showing 128 results</p>
<div className="hidden sm:flex items-center gap-1 rounded-lg border border-neutral-200 p-1">
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] text-neutral-800 hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="layout-grid"></i>
            Grid
          </button>
<button className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[13px] text-neutral-600 hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="list"></i>
            List
          </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition">
<div className="relative">
<img alt="Open Call" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 top-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] text-neutral-800 border border-neutral-200">
<i className="h-4 w-4" data-lucide="clock"></i>
                5 days left
              </span>
<label className="inline-flex">
<input className="peer hidden" type="checkbox"/>
<span className="grid place-items-center h-8 w-8 rounded-full bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white transition">
<i className="h-4 w-4 text-neutral-700 peer-checked:text-rose-600" data-lucide="bookmark"></i>
</span>
</label>
</div>
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 line-clamp-1">International Contemporary Painting Prize 2025</h3>
<p className="mt-1 text-[13px] text-neutral-600">Musea Collective • Barcelona, ES</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<span className="text-[12px] text-neutral-800">Jun 30</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="wallet"></i>
<span className="text-[12px] text-neutral-800">€25 fee</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="award"></i>
<span className="text-[12px] text-neutral-800">€8,000</span>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Painting</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Exhibition</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Europe</span>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-900 hover:underline decoration-neutral-400">
                View details
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition">
<div className="relative">
<img alt="Residency" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-x-3 top-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] text-neutral-800 border border-neutral-200">
<i className="h-4 w-4" data-lucide="clock"></i>
                14 days left
              </span>
<label className="inline-flex">
<input className="peer hidden" type="checkbox"/>
<span className="grid place-items-center h-8 w-8 rounded-full bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white transition">
<i className="h-4 w-4 text-neutral-700 peer-checked:text-rose-600" data-lucide="bookmark"></i>
</span>
</label>
</div>
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 line-clamp-1">Mountain Light Artist Residency — Summer Session</h3>
<p className="mt-1 text-[13px] text-neutral-600">Summit Arts • Banff, CA</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<span className="text-[12px] text-neutral-800">Jul 12</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="wallet"></i>
<span className="text-[12px] text-neutral-800">No fee</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="home"></i>
<span className="text-[12px] text-neutral-800">Housing</span>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Residency</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Photography</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Nature</span>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-900 hover:underline decoration-neutral-400">
                View details
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition">
<div className="relative">
<img alt="Grant" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 top-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] text-neutral-800 border border-neutral-200">
<i className="h-4 w-4" data-lucide="clock"></i>
                23 days left
              </span>
<label className="inline-flex">
<input className="peer hidden" type="checkbox"/>
<span className="grid place-items-center h-8 w-8 rounded-full bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white transition">
<i className="h-4 w-4 text-neutral-700 peer-checked:text-rose-600" data-lucide="bookmark"></i>
</span>
</label>
</div>
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 line-clamp-1">Emerging Artists Grant — Digital &amp; New Media</h3>
<p className="mt-1 text-[13px] text-neutral-600">FutureLab • Remote</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<span className="text-[12px] text-neutral-800">Aug 3</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="wallet"></i>
<span className="text-[12px] text-neutral-800">$10 fee</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="award"></i>
<span className="text-[12px] text-neutral-800">$5,000</span>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Grant</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Digital</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Remote</span>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-900 hover:underline decoration-neutral-400">
                View details
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition">
<div className="relative">
<img alt="Sculpture" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 top-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] text-neutral-800 border border-neutral-200">
<i className="h-4 w-4" data-lucide="clock"></i>
                9 days left
              </span>
<label className="inline-flex">
<input className="peer hidden" type="checkbox"/>
<span className="grid place-items-center h-8 w-8 rounded-full bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white transition">
<i className="h-4 w-4 text-neutral-700 peer-checked:text-rose-600" data-lucide="bookmark"></i>
</span>
</label>
</div>
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 line-clamp-1">Urban Sculpture Biennial — Open Submission</h3>
<p className="mt-1 text-[13px] text-neutral-600">City Arts Fund • Chicago, US</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<span className="text-[12px] text-neutral-800">Jul 3</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="wallet"></i>
<span className="text-[12px] text-neutral-800">$30 fee</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="map-pin"></i>
<span className="text-[12px] text-neutral-800">On-site</span>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Sculpture</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Public Art</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">US</span>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-900 hover:underline decoration-neutral-400">
                View details
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition">
<div className="relative">
<img alt="Illustration" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-x-3 top-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] text-neutral-800 border border-neutral-200">
<i className="h-4 w-4" data-lucide="clock"></i>
                2 days left
              </span>
<label className="inline-flex">
<input className="peer hidden" type="checkbox"/>
<span className="grid place-items-center h-8 w-8 rounded-full bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white transition">
<i className="h-4 w-4 text-neutral-700 peer-checked:text-rose-600" data-lucide="bookmark"></i>
</span>
</label>
</div>
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 line-clamp-1">Editorial Illustration Open Call — Issue 07</h3>
<p className="mt-1 text-[13px] text-neutral-600">Linea Mag • Remote</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<span className="text-[12px] text-neutral-800">Jun 18</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="wallet"></i>
<span className="text-[12px] text-neutral-800">$5 fee</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="globe"></i>
<span className="text-[12px] text-neutral-800">Online</span>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Illustration</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Publication</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Remote</span>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-900 hover:underline decoration-neutral-400">
                View details
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition">
<div className="relative">
<img alt="Video art" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1515555230216-82228b88ea98?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-3 top-3 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[12px] text-neutral-800 border border-neutral-200">
<i className="h-4 w-4" data-lucide="clock"></i>
                31 days left
              </span>
<label className="inline-flex">
<input className="peer hidden" type="checkbox"/>
<span className="grid place-items-center h-8 w-8 rounded-full bg-white/90 backdrop-blur border border-neutral-200 hover:bg-white transition">
<i className="h-4 w-4 text-neutral-700 peer-checked:text-rose-600" data-lucide="bookmark"></i>
</span>
</label>
</div>
</div>
<div className="p-4">
<h3 className="text-[17px] font-semibold tracking-tight text-neutral-900 line-clamp-1">New Narratives: Video &amp; Performance Open Call</h3>
<p className="mt-1 text-[13px] text-neutral-600">Frame / Space • London, UK</p>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="calendar"></i>
<span className="text-[12px] text-neutral-800">Aug 12</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="wallet"></i>
<span className="text-[12px] text-neutral-800">£15 fee</span>
</div>
<div className="flex items-center gap-1.5 rounded-lg border border-neutral-200 px-2.5 py-1.5">
<i className="h-4 w-4 text-neutral-600" data-lucide="ticket"></i>
<span className="text-[12px] text-neutral-800">Festival</span>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Video</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">Performance</span>
<span className="inline-flex items-center rounded-full border border-neutral-200 px-2.5 py-1 text-[12px] text-neutral-700">UK</span>
</div>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-900 hover:underline decoration-neutral-400">
                View details
                <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<button className="inline-flex items-center gap-1.5 text-[13px] text-neutral-700 hover:text-neutral-900">
<i className="h-4 w-4" data-lucide="share-2"></i>
                Share
              </button>
</div>
</div>
</article>
</div>

<div className="mt-8 flex items-center justify-center">
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-[14px] text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 transition">
          Load more
          <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
</main>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-neutral-900 text-white grid place-items-center text-[11px] tracking-tight font-medium">AC</div>
<span className="text-[14px] text-neutral-700">ArtCalls</span>
</div>
<nav className="flex flex-wrap items-center gap-4 text-[13px] text-neutral-600">
<a className="hover:text-neutral-900" href="#">About</a>
<a className="hover:text-neutral-900" href="#">Guidelines</a>
<a className="hover:text-neutral-900" href="#">Pricing</a>
<a className="hover:text-neutral-900" href="#">Contact</a>
<a className="hover:text-neutral-900" href="#">Privacy</a>
</nav>
</div>
<div className="mt-6 text-[12px] text-neutral-500">© 2025 ArtCalls. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
