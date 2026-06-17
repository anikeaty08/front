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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full border-b-2 border-[#0A2218] bg-[#F3F0E6] px-4 py-3 md:px-6">
<div className="mx-auto flex max-w-7xl items-center justify-between">
<button className="md:hidden"><i className="h-6 w-6 stroke-[1.5]" data-lucide="menu"></i></button>
<div className="flex items-center gap-1">
<span className="display-font text-2xl font-bold tracking-tighter italic">ARO<span className="text-[#8FB339]">VELL</span></span>
</div>
<div className="hidden items-center gap-8 md:flex">
<a className="text-xs font-semibold tracking-tight uppercase hover:underline underline-offset-4" href="#">Build Your Own</a>
<a className="text-xs font-semibold tracking-tight uppercase underline underline-offset-4 decoration-2 decoration-[#D4F02E]" href="#">Shop All</a>
<a className="text-xs font-semibold tracking-tight uppercase hover:underline underline-offset-4" href="#">Brands</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block"><i className="h-5 w-5 stroke-[1.5]" data-lucide="search"></i></button>
<button className="group flex items-center gap-2 rounded-full border border-[#0A2218] bg-[#0A2218] px-4 py-1.5 text-white transition-transform hover:scale-105">
<span className="text-xs font-semibold tracking-tight">CART (2)</span>
</button>
</div>
</div>
</nav>
<div className="mx-auto max-w-7xl px-4 py-8 md:px-6">

<header className="mb-8 flex flex-col justify-between gap-4 border-b-2 border-[#0A2218] pb-8 md:flex-row md:items-end">
<div>
<div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/60">
<a className="hover:text-[#0A2218]" href="#">Home</a>
<span>/</span>
<span className="text-[#0A2218]">Catalog</span>
</div>
<h1 className="display-font text-4xl font-bold uppercase tracking-tighter md:text-5xl">All Fragrances</h1>
<p className="mt-2 max-w-xl text-sm font-medium text-[#0A2218]/70">Explore our library of over 500+ niche and designer fragrances. Available in sample vials (2ml, 5ml) or curated bundles.</p>
</div>
<div className="flex gap-3">

<button className="flex items-center gap-2 rounded-lg border-2 border-[#0A2218] bg-white px-4 py-2 text-sm font-bold uppercase shadow-[4px_4px_0px_0px_rgba(10,34,24,1)] transition-transform hover:-translate-y-0.5 md:hidden">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i> Filters
                </button>
<div className="relative group">
<button className="flex w-[180px] items-center justify-between rounded-lg border-2 border-[#0A2218] bg-white px-4 py-2 text-sm font-bold uppercase transition-colors hover:bg-[#F3F0E6]">
<span>Sort: Recommended</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>

<div className="absolute right-0 top-full z-10 hidden w-full pt-2 group-hover:block">
<div className="rounded-lg border-2 border-[#0A2218] bg-white p-1 shadow-[4px_4px_0px_0px_rgba(10,34,24,1)]">
<a className="block rounded px-3 py-2 text-xs font-bold uppercase hover:bg-[#D4F02E]" href="#">Price: Low to High</a>
<a className="block rounded px-3 py-2 text-xs font-bold uppercase hover:bg-[#D4F02E]" href="#">Price: High to Low</a>
<a className="block rounded px-3 py-2 text-xs font-bold uppercase hover:bg-[#D4F02E]" href="#">Newest Arrivals</a>
</div>
</div>
</div>
</div>
</header>
<div className="flex gap-8">

<aside className="hidden w-64 flex-shrink-0 space-y-8 md:block">

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold uppercase tracking-wider text-[#0A2218]/50">Active Filters</h3>
<button className="text-[10px] font-bold underline decoration-dotted hover:text-red-600">Clear All</button>
</div>
<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-1 rounded border border-[#0A2218] bg-[#D4F02E] px-2 py-1 text-[10px] font-bold uppercase transition-colors hover:bg-red-100 hover:line-through">
                            Woody <i className="h-3 w-3" data-lucide="x"></i>
</button>
<button className="flex items-center gap-1 rounded border border-[#0A2218] bg-white px-2 py-1 text-[10px] font-bold uppercase transition-colors hover:bg-red-100 hover:line-through">
                            $20 - $50 <i className="h-3 w-3" data-lucide="x"></i>
</button>
</div>
</div>

<div className="border-t-2 border-[#0A2218] pt-6">
<h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Category</h3>
<div className="space-y-3">
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input checked="" className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Bundles (Sets)</span>
<span className="ml-auto text-xs text-gray-500">12</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Individual Samples</span>
<span className="ml-auto text-xs text-gray-500">142</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Full Bottles</span>
<span className="ml-auto text-xs text-gray-500">4</span>
</label>
</div>
</div>

<div className="border-t-2 border-[#0A2218] pt-6">
<h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Scent Profile</h3>
<div className="space-y-3">
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input checked="" className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Woody</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Fresh / Citrus</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Spicy / Oriental</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-5 w-5 items-center justify-center border-2 border-[#0A2218] bg-white transition-all group-hover:shadow-[2px_2px_0px_0px_rgba(10,34,24,1)]">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-sm font-medium">Gourmand (Sweet)</span>
</label>
</div>
</div>

<div className="border-t-2 border-[#0A2218] pt-6">
<h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Price Range</h3>
<div className="px-2">
<input className="w-full" max="100" min="0" type="range" value="40"/>
<div className="mt-4 flex items-center justify-between text-xs font-bold">
<div className="rounded border border-[#0A2218] bg-white px-2 py-1">$0</div>
<div className="h-[2px] w-4 bg-[#0A2218]"></div>
<div className="rounded border border-[#0A2218] bg-white px-2 py-1">$100+</div>
</div>
</div>
</div>

<div className="border-t-2 border-[#0A2218] pt-6">
<h3 className="mb-4 text-sm font-bold uppercase tracking-wide">Brands</h3>
<div className="relative mb-4">
<input className="w-full rounded border-2 border-[#0A2218] bg-white py-1.5 pl-2 pr-8 text-xs font-medium placeholder:text-[#0A2218]/40 focus:outline-none focus:ring-2 focus:ring-[#D4F02E]" placeholder="Search brands..." type="text"/>
<i className="absolute right-2 top-2 h-3.5 w-3.5 text-[#0A2218]/50" data-lucide="search"></i>
</div>
<div className="max-h-40 space-y-2 overflow-y-auto pr-2">
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-4 w-4 items-center justify-center border-2 border-[#0A2218] bg-white">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-xs font-medium">Acqua Di Parma</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-4 w-4 items-center justify-center border-2 border-[#0A2218] bg-white">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-xs font-medium">Creed</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-4 w-4 items-center justify-center border-2 border-[#0A2218] bg-white">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-xs font-medium">Dior</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-4 w-4 items-center justify-center border-2 border-[#0A2218] bg-white">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-xs font-medium">Maison Francis K.</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-4 w-4 items-center justify-center border-2 border-[#0A2218] bg-white">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-xs font-medium">Parfums de Marly</span>
</label>
<label className="group flex cursor-pointer items-center gap-3">
<div className="relative flex h-4 w-4 items-center justify-center border-2 border-[#0A2218] bg-white">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-3 w-3 opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
<span className="text-xs font-medium">Tom Ford</span>
</label>
</div>
</div>
</aside>

<div className="flex-1">

<div className="mb-6 flex items-center justify-between rounded-lg bg-[#0A2218]/5 p-3 md:hidden">
<span className="text-xs font-bold uppercase text-[#0A2218]">125 Results</span>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col justify-between rounded-xl border-2 border-[#0A2218] bg-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">

<div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
<label className="cursor-pointer">
<div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-[#0A2218] bg-white shadow-sm">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-4 w-4 text-[#0A2218] opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
</div>
<div className="relative aspect-square overflow-hidden border-b-2 border-[#0A2218] bg-gray-100 p-8">
<img alt="Tom Ford" className="h-full w-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1594035910387-fea4779426e9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<span className="rounded bg-[#F3F0E6] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0A2218]">Unisex</span>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0A2218]/50">Tom Ford</div>
<h3 className="display-font text-lg font-bold leading-tight">Oud Wood</h3>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/70">
<span>Woody</span>•<span>Warm</span>
</div>
<div className="mt-4 flex items-center justify-between border-t-2 border-[#0A2218]/10 pt-3">
<span className="text-sm font-bold">$12.00 <span className="text-[10px] font-medium text-gray-500">/ 2ml</span></span>
<button className="rounded-full bg-[#0A2218] p-1.5 text-white hover:bg-[#D4F02E] hover:text-[#0A2218]">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-xl border-2 border-[#0A2218] bg-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">
<div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
<label className="cursor-pointer">
<div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-[#0A2218] bg-white shadow-sm">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-4 w-4 text-[#0A2218] opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
</div>
<div className="absolute right-3 top-3 z-10">
<span className="rounded border border-[#0A2218] bg-[#D4F02E] px-2 py-0.5 text-[10px] font-bold uppercase">Best Value</span>
</div>
<div className="relative aspect-square overflow-hidden border-b-2 border-[#0A2218] bg-gray-100">
<img alt="Bundle" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595348020949-87cdfbb44174?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0A2218]/50">Curated Set</div>
<h3 className="display-font text-lg font-bold leading-tight">The "Clean Boy" Pack</h3>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/70">
<span>5 Samples</span>•<span>Fresh</span>
</div>
<div className="mt-4 flex items-center justify-between border-t-2 border-[#0A2218]/10 pt-3">
<span className="text-sm font-bold">$25.00</span>
<button className="rounded-full bg-[#0A2218] p-1.5 text-white hover:bg-[#D4F02E] hover:text-[#0A2218]">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-xl border-2 border-[#0A2218] bg-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">
<div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
<label className="cursor-pointer">
<div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-[#0A2218] bg-white shadow-sm">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-4 w-4 text-[#0A2218] opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
</div>
<div className="relative aspect-square overflow-hidden border-b-2 border-[#0A2218] bg-gray-100 p-8">
<img alt="Creed" className="h-full w-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<span className="rounded bg-[#F3F0E6] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0A2218]">Male</span>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0A2218]/50">Creed</div>
<h3 className="display-font text-lg font-bold leading-tight">Aventus</h3>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/70">
<span>Citrus</span>•<span>Smoky</span>
</div>
<div className="mt-4 flex items-center justify-between border-t-2 border-[#0A2218]/10 pt-3">
<span className="text-sm font-bold">$18.00 <span className="text-[10px] font-medium text-gray-500">/ 2ml</span></span>
<button className="rounded-full bg-[#0A2218] p-1.5 text-white hover:bg-[#D4F02E] hover:text-[#0A2218]">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-xl border-2 border-[#0A2218] bg-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">
<div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
<label className="cursor-pointer">
<div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-[#0A2218] bg-white shadow-sm">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-4 w-4 text-[#0A2218] opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
</div>
<div className="relative aspect-square overflow-hidden border-b-2 border-[#0A2218] bg-gray-100 p-8">
<img alt="Chanel" className="h-full w-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0A2218]/50">Chanel</div>
<h3 className="display-font text-lg font-bold leading-tight">Bleu de Chanel Parfum</h3>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/70">
<span>Fresh</span>•<span>Professional</span>
</div>
<div className="mt-4 flex items-center justify-between border-t-2 border-[#0A2218]/10 pt-3">
<span className="text-sm font-bold">$9.00 <span className="text-[10px] font-medium text-gray-500">/ 2ml</span></span>
<button className="rounded-full bg-[#0A2218] p-1.5 text-white hover:bg-[#D4F02E] hover:text-[#0A2218]">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-xl border-2 border-[#0A2218] bg-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">
<div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
<label className="cursor-pointer">
<div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-[#0A2218] bg-white shadow-sm">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-4 w-4 text-[#0A2218] opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
</div>
<div className="relative aspect-square overflow-hidden border-b-2 border-[#0A2218] bg-gray-100 p-8">
<img alt="Le Labo" className="h-full w-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1588405764129-d78dfa2488f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3">
<span className="rounded bg-[#F3F0E6] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0A2218]">Unisex</span>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0A2218]/50">Le Labo</div>
<h3 className="display-font text-lg font-bold leading-tight">Santal 33</h3>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/70">
<span>Sandalwood</span>•<span>Floral</span>
</div>
<div className="mt-4 flex items-center justify-between border-t-2 border-[#0A2218]/10 pt-3">
<span className="text-sm font-bold">$14.00 <span className="text-[10px] font-medium text-gray-500">/ 2ml</span></span>
<button className="rounded-full bg-[#0A2218] p-1.5 text-white hover:bg-[#D4F02E] hover:text-[#0A2218]">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-xl border-2 border-[#0A2218] bg-white transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">
<div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity group-hover:opacity-100">
<label className="cursor-pointer">
<div className="relative flex h-6 w-6 items-center justify-center rounded border-2 border-[#0A2218] bg-white shadow-sm">
<input className="peer absolute inset-0 opacity-0" type="checkbox"/>
<i className="h-4 w-4 text-[#0A2218] opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</div>
</label>
</div>
<div className="absolute right-3 top-3 z-10">
<span className="rounded border border-[#0A2218] bg-[#F3F0E6] px-2 py-0.5 text-[10px] font-bold uppercase">Sold Out</span>
</div>
<div className="relative aspect-square overflow-hidden border-b-2 border-[#0A2218] bg-gray-100 p-8 opacity-60">
<img alt="Kilian" className="h-full w-full object-contain mix-blend-multiply grayscale" src="https://images.unsplash.com/photo-1616949755610-8c9ad0e0600d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-1 flex-col p-4 opacity-70">
<div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[#0A2218]/50">Kilian</div>
<h3 className="display-font text-lg font-bold leading-tight">Angels' Share</h3>
<div className="mt-2 flex items-center gap-2 text-xs font-medium text-[#0A2218]/70">
<span>Cognac</span>•<span>Sweet</span>
</div>
<div className="mt-4 flex items-center justify-between border-t-2 border-[#0A2218]/10 pt-3">
<span className="text-sm font-bold">$16.00 <span className="text-[10px] font-medium text-gray-500">/ 2ml</span></span>
<button className="cursor-not-allowed rounded-full bg-gray-300 p-1.5 text-white" disabled="">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mt-12 flex flex-col items-center justify-center gap-4 border-t-2 border-[#0A2218] pt-8">
<span className="text-xs font-medium text-[#0A2218]/60">Showing 6 of 142 products</span>
<div className="h-1 w-48 overflow-hidden rounded-full bg-gray-200">
<div className="h-full w-12 bg-[#0A2218]"></div>
</div>
<button className="rounded-lg border-2 border-[#0A2218] bg-white px-8 py-3 text-sm font-bold uppercase shadow-[4px_4px_0px_0px_rgba(10,34,24,1)] transition-transform hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(10,34,24,1)]">
                        Load More
                    </button>
</div>
</div>
</div>
</div>

<footer className="mt-12 bg-[#0A2218] py-16 text-[#F3F0E6]">
<div className="mx-auto max-w-7xl px-4 md:px-6">
<div className="flex flex-col items-center justify-between md:flex-row">
<span className="display-font text-3xl font-bold tracking-tighter italic text-white">ARO<span className="text-[#8FB339]">VELL</span></span>
<p className="mt-4 text-xs text-gray-500 md:mt-0">© 2024 Arovell Scents. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
