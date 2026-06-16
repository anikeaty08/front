import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-[1400px] px-6 h-16 flex items-center justify-between gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 bg-zinc-900 text-white rounded-lg group-hover:bg-rose-600 transition-colors duration-300">
<span className="font-semibold text-lg">P</span>
</div>
<span className="text-lg font-semibold tracking-tight">PARFUMERIE.NL</span>
</a>

<div className="flex-1 max-w-2xl relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<input className="block w-full rounded-full border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-4 text-sm text-zinc-900 placeholder-zinc-400 focus:border-rose-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-rose-500 transition-all shadow-sm" placeholder="Search for scents, brands, or categories..." type="text"/>
</div>

<div className="flex items-center gap-6">
<a className="flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="hidden lg:inline">Account</span>
</a>
<a className="text-zinc-500 hover:text-rose-600 transition-colors relative" href="#">
<i className="w-5 h-5" data-lucide="heart"></i>
</a>
<a className="group relative flex items-center justify-center w-10 h-10 bg-zinc-900 rounded-full text-white hover:bg-rose-600 transition-all shadow-md hover:shadow-lg" href="#">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-white">2</span>
</a>
</div>
</div>
</nav>
<main className="mx-auto max-w-[1400px] px-6 py-12">

<header className="mb-12 max-w-4xl">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl mb-4">Women's Collection</h1>
<p className="text-lg text-zinc-500 leading-relaxed font-light">
                Welcome to our extensive collection of women's perfumes, where every woman finds a scent that mirrors her personality. From timeless classics to the latest fragrance trends, curated just for you. Filter effortlessly by brand or scent family to find your signature essence.
            </p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="lg:col-span-3 space-y-10">

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Price Range</h3>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">€</span>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 pl-6 text-sm text-zinc-900 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500" type="number" value="0.00"/>
</div>
<span className="text-zinc-300">-</span>
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400">€</span>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 pl-6 text-sm text-zinc-900 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500" type="number" value="490.99"/>
</div>
</div>
<div className="relative h-6 flex items-center">
<div className="absolute w-full h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-400 w-full"></div>
</div>
<input className="absolute w-full z-20 opacity-0 cursor-pointer" max="500" min="0" type="range"/>

<div className="absolute left-0 right-0 h-1 bg-zinc-200 rounded-full">
<div className="absolute left-0 right-0 h-full bg-rose-500 rounded-full"></div>
</div>

<div className="absolute left-0 h-4 w-4 bg-white border-2 border-rose-500 rounded-full shadow cursor-pointer transform -translate-x-1/2"></div>
<div className="absolute right-0 h-4 w-4 bg-white border-2 border-rose-500 rounded-full shadow cursor-pointer transform translate-x-1/2"></div>
</div>
<div className="mt-4 text-xs text-zinc-400 font-medium">1,432 Products found</div>
</div>
<hr className="border-zinc-100"/>

<div>
<h3 className="text-sm font-semibold tracking-tight text-zinc-900 mb-4">Brands</h3>
<div className="relative mb-4">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" data-lucide="search"></i>
<input className="w-full rounded-lg border border-zinc-200 bg-zinc-50 py-2 pl-9 pr-3 text-sm focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 placeholder-zinc-400" placeholder="Search brands" type="text"/>
</div>
<div className="space-y-2.5 max-h-80 overflow-y-auto scrollbar-hide">

<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Amouage</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(25)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Armani</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(47)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Aveda</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(1)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Balr</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(2)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Boucheron</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(2)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Burberry</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(35)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Bvlgari</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(20)</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-300 bg-white transition-all checked:border-rose-500 checked:bg-rose-500 hover:border-rose-400" type="checkbox"/>
<i className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Cacharel</span>
<span className="ml-auto text-xs text-zinc-400 tabular-nums">(12)</span>
</label>
</div>
<button className="mt-4 text-xs font-medium text-rose-600 hover:text-rose-700 transition-colors">Show more</button>
</div>
</aside>

<section className="lg:col-span-9">

<div className="rounded-xl overflow-hidden bg-gradient-to-r from-emerald-900 to-emerald-800 text-white p-6 mb-10 flex items-center justify-between shadow-lg ring-1 ring-white/10">
<div className="flex items-center gap-4">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-yellow-500/20 text-yellow-400">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<h4 className="font-semibold text-sm">Discover our Sample Sets</h4>
<p className="text-xs text-emerald-200 mt-0.5">Find your perfect scent before committing to a full bottle.</p>
</div>
</div>
<a className="group flex items-center gap-1 text-sm font-medium hover:text-emerald-200 transition-colors" href="#">
                        Explore
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-12">

<div className="group flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<div className="absolute top-3 right-3 z-10">
<button className="p-2 rounded-full bg-white/80 hover:bg-white text-zinc-400 hover:text-rose-500 backdrop-blur-sm transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<img alt="Black Opium" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=500"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-zinc-900 text-white text-xs font-semibold py-3 rounded-lg hover:bg-zinc-800 shadow-lg">Quick Add</button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-semibold text-sm text-zinc-900">Yves Saint Laurent</h3>
<p className="text-sm text-zinc-500 font-light">Black Opium</p>
<p className="text-xs text-zinc-400">Eau De Parfum</p>
<div className="flex items-center gap-1 pt-1">
<div className="flex text-yellow-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star-half"></i>
</div>
<span className="text-xs text-zinc-400">(135 reviews)</span>
</div>
<div className="pt-2 font-medium text-sm text-zinc-900">€85.00</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<div className="absolute top-3 right-3 z-10">
<button className="p-2 rounded-full bg-white/80 hover:bg-white text-zinc-400 hover:text-rose-500 backdrop-blur-sm transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<img alt="Libre" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=500"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-zinc-900 text-white text-xs font-semibold py-3 rounded-lg hover:bg-zinc-800 shadow-lg">Quick Add</button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-semibold text-sm text-zinc-900">Yves Saint Laurent</h3>
<p className="text-sm text-zinc-500 font-light">Libre</p>
<p className="text-xs text-zinc-400">Eau De Parfum</p>
<div className="flex items-center gap-1 pt-1">
<div className="flex text-yellow-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs text-zinc-400">(49 reviews)</span>
</div>
<div className="pt-2 font-medium text-sm text-zinc-900">€92.00</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<div className="absolute top-3 right-3 z-10">
<button className="p-2 rounded-full bg-white/80 hover:bg-white text-zinc-400 hover:text-rose-500 backdrop-blur-sm transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<img alt="Miss Dior" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=500"/>
<div className="absolute top-3 left-3 z-10">
<span className="bg-rose-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md tracking-wider">BESTSELLER</span>
</div>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-zinc-900 text-white text-xs font-semibold py-3 rounded-lg hover:bg-zinc-800 shadow-lg">Quick Add</button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-semibold text-sm text-zinc-900">Dior</h3>
<p className="text-sm text-zinc-500 font-light">Miss Dior</p>
<p className="text-xs text-zinc-400">Eau De Parfum</p>
<div className="flex items-center gap-1 pt-1">
<div className="flex text-yellow-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 text-zinc-200 fill-zinc-200" data-lucide="star"></i>
</div>
<span className="text-xs text-zinc-400">(20 reviews)</span>
</div>
<div className="pt-2 font-medium text-sm text-zinc-900">€78.50</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[4/5] bg-zinc-50 rounded-xl overflow-hidden mb-4 border border-zinc-100">
<div className="absolute top-3 right-3 z-10">
<button className="p-2 rounded-full bg-white/80 hover:bg-white text-zinc-400 hover:text-rose-500 backdrop-blur-sm transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="heart"></i>
</button>
</div>
<img alt="J'adore" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=500"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-zinc-900 text-white text-xs font-semibold py-3 rounded-lg hover:bg-zinc-800 shadow-lg">Quick Add</button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-semibold text-sm text-zinc-900">Dior</h3>
<p className="text-sm text-zinc-500 font-light">J'adore</p>
<p className="text-xs text-zinc-400">Eau De Parfum</p>
<div className="flex items-center gap-1 pt-1">
<div className="flex text-yellow-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs text-zinc-400">(23 reviews)</span>
</div>
<div className="pt-2 font-medium text-sm text-zinc-900">€112.00</div>
</div>
</div>
</div>

<div className="mt-16 flex flex-col items-center gap-4">
<p className="text-xs text-zinc-400">Showing 4 of 1,432 products</p>
<div className="w-64 h-1 bg-zinc-100 rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-zinc-900"></div>
</div>
<button className="mt-2 px-8 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-full hover:bg-zinc-50 transition-colors">
                        Load More Products
                    </button>
</div>
</section>
</div>
</main>

<footer className="border-t border-zinc-100 mt-20 py-12 bg-zinc-50">
<div className="mx-auto max-w-[1400px] px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-zinc-400 text-xs">
                © 2023 Parfumerie. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 text-xs hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="text-zinc-500 text-xs hover:text-zinc-900" href="#">Terms of Service</a>
<a className="text-zinc-500 text-xs hover:text-zinc-900" href="#">Cookie Settings</a>
</div>
</div>
</footer>


    </>
  );
}
