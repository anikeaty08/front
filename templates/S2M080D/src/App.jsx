import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative isolate">
<div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
<div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(37,99,235,0.25),transparent)]"></div>
<div className="absolute -top-24 left-1/2 h-64 w-[60rem] -translate-x-1/2 blur-3xl bg-blue-500/10 rounded-full"></div>
</div>
<div className="border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between py-2 text-[13px]">
<p className="text-slate-300/80">Free 2‑day shipping on orders over $500</p>
<div className="flex items-center gap-4">
<button className="text-slate-300/80 hover:text-blue-300 transition-colors" id="supportBtn">Support</button>
<span className="hidden sm:inline text-slate-700">|</span>
<p className="hidden sm:inline text-slate-300/80">Secure checkout</p>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2" href="#">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 ring-1 ring-inset ring-slate-800">
<span className="text-blue-400 text-[15px] font-semibold tracking-tight">DG</span>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-[15px] font-semibold tracking-tight">Danny Gadgets</span>
<span className="text-[11px] text-slate-400 -mt-0.5">Phones • Laptops</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-1 ml-4">
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-transparent hover:ring-slate-800 transition-colors" data-category-btn="all">All</button>
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-transparent hover:ring-slate-800 transition-colors" data-category-btn="phone">Phones</button>
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-transparent hover:ring-slate-800 transition-colors" data-category-btn="laptop">Laptops</button>
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-transparent hover:ring-slate-800 transition-colors" id="dealsBtn">Deals</button>
</nav>
</div>

<div className="hidden md:flex flex-1 max-w-xl mx-6">
<div className="relative w-full group">
<i className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-500" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 rounded-md bg-slate-900/70 text-[13px] placeholder:text-slate-500 text-slate-200 ring-1 ring-inset ring-slate-800 focus:outline-none focus:ring-blue-500/40 focus:bg-slate-900/90 transition" id="searchInput" placeholder="Search phones, laptops…" type="text"/>
</div>
</div>

<div className="flex items-center gap-2">
<button className="relative inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-[13px] bg-slate-900/70 hover:bg-slate-900 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30 text-slate-200 transition group" id="openCart">
<i className="h-4.5 w-4.5 text-slate-300 group-hover:text-blue-300" data-lucide="shopping-cart"></i>
<span className="hidden sm:inline">Cart</span>
<span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded bg-blue-500/20 text-blue-300 text-[11px] px-1 ring-1 ring-inset ring-blue-500/30" id="cartCount">0</span>
</button>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" id="mobileSearchBtn">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="search"></i>
</button>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" id="menuBtn">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden pb-3" id="mobileSearch">
<div className="relative">
<i className="absolute left-3 top-2.5 h-4.5 w-4.5 text-slate-500" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 rounded-md bg-slate-900/70 text-[13px] placeholder:text-slate-500 text-slate-200 ring-1 ring-inset ring-slate-800 focus:outline-none focus:ring-blue-500/40 focus:bg-slate-900/90 transition" oninput="document.getElementById('searchInput').value=this.value; document.getElementById('searchInput').dispatchEvent(new Event('input'));" placeholder="Search phones, laptops…" type="text"/>
</div>
</div>

<div className="md:hidden hidden pb-3" id="mobileMenu">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-slate-800 transition-colors" data-category-btn="all">All</button>
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-slate-800 transition-colors" data-category-btn="phone">Phones</button>
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-slate-800 transition-colors" data-category-btn="laptop">Laptops</button>
<button className="px-3 py-2 text-[13px] rounded-md text-slate-300 hover:text-blue-300 hover:bg-slate-900/60 ring-1 ring-inset ring-slate-800 transition-colors" id="mobileDealsBtn">Deals</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden border-b border-slate-800/70">
<div className="sm:px-6 sm:py-20 max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex gap-2 text-[12px] text-slate-300 bg-slate-900/60 border-slate-800 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 items-center">
<i className="h-4 w-4 text-blue-300" data-lucide="sparkles"></i>
<span className="">Next‑gen hardware in stock</span>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-100">
                Power meets precision at Danny Gadgets
              </h1>
<p className="text-[15px] leading-relaxed text-slate-400 max-w-2xl">
                Explore a curated lineup of performance phones and laptops with sleek craft, premium materials, and pro‑level components. Designed for speed. Built for the future.
              </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-4 py-2.5 text-[13px] font-medium text-white ring-1 ring-inset ring-blue-400/30 hover:ring-blue-300/40 transition" href="#catalog">
<i className="h-4.5 w-4.5" data-lucide="smartphone"></i>
                  Shop Phones
                </a>
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900/70 hover:bg-slate-900 px-4 py-2.5 text-[13px] text-slate-200 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30 transition" href="#catalog">
<i className="h-4.5 w-4.5" data-lucide="laptop"></i>
                  Shop Laptops
                </a>
</div>
<div className="flex items-center gap-6 pt-1">
<div className="flex items-center gap-2 text-[13px] text-slate-400">
<i className="h-4.5 w-4.5 text-blue-300" data-lucide="shield-check"></i>
                  2‑year warranty
                </div>
<div className="hidden sm:flex items-center gap-2 text-[13px] text-slate-400">
<i className="h-4.5 w-4.5 text-blue-300" data-lucide="truck"></i>
                  Fast, tracked shipping
                </div>
<div className="hidden md:flex items-center gap-2 text-[13px] text-slate-400">
<i className="h-4.5 w-4.5 text-blue-300" data-lucide="headphones"></i>
                  24/7 support
                </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-2xl blur-xl"></div>
<div className="relative rounded-2xl border border-slate-800 bg-[linear-gradient(180deg,rgba(30,41,59,0.6),rgba(2,6,23,0.6))] p-3 sm:p-4">
<div className="rounded-xl overflow-hidden ring-1 ring-slate-800">
<img alt="Futuristic smartphone and laptop on a desk" className="w-full h-[320px] sm:h-[420px] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<img alt="Phone" className="h-28 w-full object-cover rounded-lg ring-1 ring-slate-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="Laptop" className="h-28 w-full object-cover rounded-lg ring-1 ring-slate-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="Workspace" className="h-28 w-full object-cover rounded-lg ring-1 ring-slate-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70" id="catalog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-10">
<div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
<div className="flex items-center gap-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100">Catalog</h2>
<span className="text-[12px] px-2 py-1 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 text-slate-400">Updated</span>
</div>
<div className="flex flex-col sm:flex-row gap-2 sm:items-center">

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900/70 hover:bg-slate-900 px-3.5 py-2.5 text-[13px] ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" id="sortBtn">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="sort-desc"></i>
                  Sort
                </button>
<div className="hidden absolute right-0 mt-2 min-w-[180px] rounded-md border border-slate-800 bg-slate-950/95 backdrop-blur p-1.5 shadow-lg" id="sortMenu">
<button className="w-full text-left px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-slate-900 hover:text-blue-300" data-sort="featured">Featured</button>
<button className="w-full text-left px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-slate-900 hover:text-blue-300" data-sort="price-asc">Price: Low to High</button>
<button className="w-full text-left px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-slate-900 hover:text-blue-300" data-sort="price-desc">Price: High to Low</button>
<button className="w-full text-left px-3 py-2 rounded-md text-[13px] text-slate-300 hover:bg-slate-900 hover:text-blue-300" data-sort="rating-desc">Top Rated</button>
</div>
</div>

<div className="flex items-center gap-3 rounded-md bg-slate-900/70 px-3.5 py-2.5 ring-1 ring-inset ring-slate-800">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="banknote"></i>
<div className="flex items-center gap-2">
<input className="w-40 appearance-none bg-transparent" id="priceRange" max="3200" min="200" type="range" value="3200"/>
<span className="text-[12px] text-slate-400">Max: $<span id="rangeValue">3200</span></span>
</div>
</div>

<div className="flex items-center gap-2">
<button className="px-3.5 py-2.5 text-[12px] rounded-md bg-slate-900/70 hover:bg-slate-900 text-slate-300 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-category-btn="phone">Phones</button>
<button className="px-3.5 py-2.5 text-[12px] rounded-md bg-slate-900/70 hover:bg-slate-900 text-slate-300 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-category-btn="laptop">Laptops</button>
<button className="px-3.5 py-2.5 text-[12px] rounded-md bg-slate-900/70 hover:bg-slate-900 text-slate-300 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-category-btn="all">All</button>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="productGrid">

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="phone" data-item="" data-name="Nova X Pro" data-price="999" data-rating="4.7">
<div className="relative">
<img alt="Nova X Pro Phone" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-blue-600/90 px-2 py-1 text-[11px] text-white ring-1 ring-inset ring-blue-400/40">New</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Nova X Pro</h3>
<p className="text-[12px] text-slate-400">128GB • 120Hz • 5G</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$999</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.7</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-700 ring-2 ring-offset-0 ring-slate-600"></button>
<button className="h-5 w-5 rounded-full bg-blue-600 ring-2 ring-offset-0 ring-blue-500"></button>
<button className="h-5 w-5 rounded-full bg-slate-300 ring-2 ring-offset-0 ring-slate-400"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="phone" data-item="" data-name="Orion Z Fold" data-price="1499" data-rating="4.8">
<div className="relative">
<img alt="Orion Z Fold Phone" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-2 py-1 text-[11px] text-blue-300 ring-1 ring-inset ring-slate-800">Pro</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Orion Z Fold</h3>
<p className="text-[12px] text-slate-400">256GB • Foldable • 120Hz</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$1,499</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.8</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-800 ring-2 ring-slate-700"></button>
<button className="h-5 w-5 rounded-full bg-blue-500 ring-2 ring-blue-400"></button>
<button className="h-5 w-5 rounded-full bg-emerald-500 ring-2 ring-emerald-400"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex gap-2 hover:bg-blue-500 text-[13px] ring-inset transition text-white bg-blue-600/90 ring-blue-400/30 ring-1 rounded-md pt-2.5 pr-3 pb-2.5 pl-3 items-center justify-center" data-add="">Add to cart<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i></button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="phone" data-item="" data-name="Pulse Mini" data-price="599" data-rating="4.4">
<div className="relative">
<img alt="Pulse Mini Phone" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div className="">
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Pulse Mini</h3>
<p className="text-[12px] text-slate-400">64GB • Compact • 90Hz</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$599</div>
</div>
<div className="flex mt-3 items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.4</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-600 ring-2 ring-slate-500"></button>
<button className="h-5 w-5 rounded-full bg-blue-700 ring-2 ring-blue-600"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="phone" data-item="" data-name="Aero Max" data-price="1299" data-rating="4.6">
<div className="relative">
<img alt="Aero Max Phone" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Aero Max</h3>
<p className="text-[12px] text-slate-400">512GB • 200MP • 120W</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$1,299</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.6</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-700 ring-2 ring-slate-600"></button>
<button className="h-5 w-5 rounded-full bg-blue-400 ring-2 ring-blue-300"></button>
<button className="h-5 w-5 rounded-full bg-rose-500 ring-2 ring-rose-400"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="laptop" data-item="" data-name="VectorBook 15" data-price="1999" data-rating="4.9">
<div className="relative">
<img alt="VectorBook 15 Laptop" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-blue-600/90 px-2 py-1 text-[11px] text-white ring-1 ring-inset ring-blue-400/40">Best Seller</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">VectorBook 15</h3>
<p className="text-[12px] text-slate-400">i9 • 32GB • RTX 4070</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$1,999</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.9</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-700 ring-2 ring-slate-600"></button>
<button className="h-5 w-5 rounded-full bg-blue-600 ring-2 ring-blue-500"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="laptop" data-item="" data-name="Nebula Air 13" data-price="1299" data-rating="4.5">
<div className="relative">
<img alt="Nebula Air 13 Laptop" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Nebula Air 13</h3>
<p className="text-[12px] text-slate-400">i5 • 16GB • Ultralight</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$1,299</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.5</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-600 ring-2 ring-slate-500"></button>
<button className="h-5 w-5 rounded-full bg-blue-500 ring-2 ring-blue-400"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="laptop" data-item="" data-name="Quasar 17 Studio" data-price="2799" data-rating="4.9">
<div className="relative">
<img alt="Quasar 17 Studio Laptop" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-2 py-1 text-[11px] text-blue-300 ring-1 ring-inset ring-slate-800">Studio</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Quasar 17 Studio</h3>
<p className="text-[12px] text-slate-400">Ryzen 9 • 64GB • RTX 4090</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$2,799</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.9</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-700 ring-2 ring-slate-600"></button>
<button className="h-5 w-5 rounded-full bg-blue-600 ring-2 ring-blue-500"></button>
<button className="h-5 w-5 rounded-full bg-sky-400 ring-2 ring-sky-300"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="group rounded-xl overflow-hidden border border-slate-800 bg-slate-950/40 hover:bg-slate-950 transition" data-category="laptop" data-item="" data-name="HaloBook 14" data-price="1599" data-rating="4.6">
<div className="relative">
<img alt="HaloBook 14 Laptop" className="h-52 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-9 w-9 rounded-md bg-slate-900/80 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" data-quickview="">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="eye"></i>
</button>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">HaloBook 14</h3>
<p className="text-[12px] text-slate-400">i7 • 16GB • Iris Xe</p>
</div>
<div className="text-[14px] font-medium text-slate-100">$1,599</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-[12px] text-slate-400">4.6</span>
</div>
<div className="flex items-center gap-1.5">
<button className="h-5 w-5 rounded-full bg-slate-700 ring-2 ring-slate-600"></button>
<button className="h-5 w-5 rounded-full bg-blue-500 ring-2 ring-blue-400"></button>
<button className="h-5 w-5 rounded-full bg-fuchsia-500 ring-2 ring-fuchsia-400"></button>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30 transition" data-add="">
<i className="h-4.5 w-4.5" data-lucide="shopping-bag"></i>
                    Add to cart
                  </button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="col-span-full rounded-xl border border-slate-800 bg-slate-950/40 p-4 sm:p-6">
<div className="flex flex-col md:flex-row items-center gap-6">
<div className="flex-1">
<h3 className="text-xl font-semibold tracking-tight text-slate-100">Bundle &amp; save</h3>
<p className="text-[13px] text-slate-400 mt-1">Add any laptop with a phone and get 10% off accessories at checkout.</p>
</div>
<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-slate-900/70 hover:bg-slate-900 px-3.5 py-2.5 text-[13px] text-slate-200 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30" href="#">
<i className="h-4.5 w-4.5" data-lucide="cpu"></i>
                    Explore accessories
                  </a>
<a className="inline-flex items-center gap-2 rounded-md bg-blue-600/90 hover:bg-blue-500 px-3.5 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30" href="#">
<i className="h-4.5 w-4.5" data-lucide="sparkles"></i>
                    View bundles
                  </a>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-6">
<p className="text-[12px] text-slate-400">Showing 8 of 8</p>
<div className="inline-flex items-center gap-2">
<button className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-blue-600/90 ring-1 ring-inset ring-blue-400/30 text-white">1</button>
<button className="h-9 w-9 inline-flex items-center justify-center rounded-md bg-slate-900/70 ring-1 ring-inset ring-slate-800 hover:ring-blue-500/30">
<i className="h-4.5 w-4.5 text-slate-300" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
<div className="grid md:grid-cols-3 gap-5">
<div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-300" data-lucide="stars"></i>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Ultra-fast delivery</h3>
</div>
<p className="mt-2 text-[13px] text-slate-400">My laptop arrived within 48 hours and was exactly as described. Fantastic experience.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Customer" className="h-8 w-8 rounded-full ring-1 ring-slate-800" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<p className="text-[13px] text-slate-300">Riley S.</p>
<p className="text-[11px] text-slate-500 -mt-0.5">Seattle, WA</p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-300" data-lucide="wand-2"></i>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Clean, premium builds</h3>
</div>
<p className="mt-2 text-[13px] text-slate-400">The finish and performance are top‑tier. Definitely shopping here again.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Customer" className="h-8 w-8 rounded-full ring-1 ring-slate-800" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<p className="text-[13px] text-slate-300">Jordan M.</p>
<p className="text-[11px] text-slate-500 -mt-0.5">Austin, TX</p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-300" data-lucide="life-buoy"></i>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Support that cares</h3>
</div>
<p className="mt-2 text-[13px] text-slate-400">Quick answers and helpful guidance for upgrades and accessories.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Customer" className="h-8 w-8 rounded-full ring-1 ring-slate-800" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-[13px] text-slate-300">Casey L.</p>
<p className="text-[11px] text-slate-500 -mt-0.5">Toronto, ON</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
<div className="rounded-xl border border-slate-800 bg-slate-950/40 p-6 sm:p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-100">Stay ahead with Danny</h3>
<p className="mt-1 text-[13px] text-slate-400">Get product drops, tips, and early access to exclusive bundles.</p>
</div>
<form className="w-full max-w-md" id="newsletterForm">
<div className="flex rounded-md ring-1 ring-inset ring-slate-800 bg-slate-900/70 focus-within:ring-blue-500/30">
<input className="flex-1 bg-transparent text-[13px] px-3 py-2.5 placeholder:text-slate-500 text-slate-200 focus:outline-none" placeholder="you@domain.com" required="" type="email"/>
<button className="inline-flex items-center gap-2 rounded-r-md bg-blue-600/90 hover:bg-blue-500 px-3.5 py-2.5 text-[13px] text-white ring-1 ring-inset ring-blue-400/30">
<i className="h-4.5 w-4.5" data-lucide="send"></i>
                    Subscribe
                  </button>
</div>
<p className="mt-2 text-[12px] text-slate-400" id="newsletterMsg"></p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-900 ring-1 ring-inset ring-slate-800">
<span className="text-blue-400 text-[15px] font-semibold tracking-tight">DG</span>
</div>
<div>
<p className="text-[13px] text-slate-300">Danny Gadgets</p>
<p className="text-[11px] text-slate-500 -mt-0.5">Future‑ready devices</p>
</div>
</div>
<div className="flex items-center gap-6">
<a className="text-[13px] text-slate-400 hover:text-blue-300" href="#">Privacy</a>
<a className="text-[13px] text-slate-400 hover:text-blue-300" href="#">Terms</a>
<a className="text-[13px] text-slate-400 hover:text-blue-300" href="#">Contact</a>
</div>
</div>
<div className="mt-6 border-t border-slate-800 pt-4 text-[12px] text-slate-500">
            © <span id="year"></span> Danny Gadgets. All rights reserved.
          </div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden bg-slate-900/60 backdrop-blur-sm" id="cartOverlay"></div>
<aside className="fixed right-0 top-0 z-[70] h-full w-full max-w-md translate-x-full transition-transform duration-300 ease-out border-l border-slate-800 bg-slate-950" id="cartDrawer">
<div className="flex h-16 items-center justify-between px-4 sm:px-6 border-b border-slate-800">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-300" data-lucide="shopping-cart"></i>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-100">Your Cart</h3></div></div></aside></div>
    </>
  );
}
