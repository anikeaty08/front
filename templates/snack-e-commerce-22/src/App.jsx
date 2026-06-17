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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-4">

<div className="flex items-center gap-2">
<a className="text-xl font-semibold tracking-tighter text-zinc-900" href="#">
                        c&amp;c
                    </a>
<div className="hidden h-6 w-px bg-zinc-200 sm:block"></div>
<div className="hidden flex-col sm:flex">
<span className="text-xs font-semibold tracking-tight text-zinc-900">12 mins</span>
<span className="text-xs text-zinc-500">to Home</span>
</div>
</div>

<div className="hidden max-w-lg flex-1 md:block">
<div className="relative group">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400 group-focus-within:text-emerald-600 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2.5 pl-10 pr-3 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all" placeholder="Search for chips, chocolates..." type="text"/>
</div>
</div>

<div className="flex items-center gap-4">
<button className="hidden text-sm font-medium text-zinc-600 hover:text-zinc-900 sm:block">Log in</button>
<button className="group flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-800">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden text-sm font-medium sm:block">My Cart</span>
<div className="flex h-5 items-center justify-center rounded bg-emerald-500 px-1.5 text-xs font-bold text-white">
                            2
                        </div>
</button>
</div>
</div>

<div className="pb-3 md:hidden">
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-400">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full rounded-xl border border-zinc-200 bg-zinc-50 py-2 pl-10 pr-3 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none" placeholder="Search..." type="text"/>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-12 shadow-sm sm:px-12 sm:py-16 md:p-20">

<div className="absolute right-0 top-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>
<div className="relative z-10 max-w-2xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/50 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-sm">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>Superfast Delivery</span>
</div>
<h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
                    Craving crunch <br/>
<span className="text-zinc-400">or sweetness?</span>
</h1>
<p className="mt-6 max-w-lg text-lg text-zinc-400">
                    From spicy potato chips to artisanal dark chocolate, get your snack fix delivered to your door in minutes.
                </p>
</div>
</div>

<div className="mt-12">
<div className="flex items-center justify-between">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Explore by craving</h2>
<a className="flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
                    See all
                    <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="no-scrollbar mt-6 flex gap-4 overflow-x-auto pb-4">

<a className="group flex min-w-[100px] flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:ring-emerald-500 hover:shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-500 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Spicy</span>
</a>
<a className="group flex min-w-[100px] flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:ring-emerald-500 hover:shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Potato</span>
</a>
<a className="group flex min-w-[100px] flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:ring-emerald-500 hover:shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 group-hover:bg-zinc-200 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:donut-bitten-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Sweets</span>
</a>
<a className="group flex min-w-[100px] flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:ring-emerald-500 hover:shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 group-hover:bg-yellow-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Nachos</span>
</a>
<a className="group flex min-w-[100px] flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:ring-emerald-500 hover:shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Healthy</span>
</a>
<a className="group flex min-w-[100px] flex-col items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-200 transition hover:ring-emerald-500 hover:shadow-md" href="#">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-500 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:cup-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900">Drinks</span>
</a>
</div>
</div>

<div className="mt-16">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Munchies in Minutes</h2>
<p className="mt-1 text-sm text-zinc-500">Salty, crunchy goodness.</p>
<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 text-orange-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">50g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Classic Salted Potato Chips</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$1.20</span>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-50 active:bg-emerald-100">
                                Add
                            </button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="absolute right-2 top-2 z-10 rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                        Best Seller
                    </div>
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-red-400/20 to-orange-500/20 text-red-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:flame-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">120g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Spicy Jalapeño Nachos</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$2.50</span>

<div className="flex h-8 items-center overflow-hidden rounded-lg bg-emerald-600 shadow-sm">
<button className="flex h-full w-8 items-center justify-center text-white hover:bg-emerald-700">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<span className="px-1 text-xs font-semibold text-white">1</span>
<button className="flex h-full w-8 items-center justify-center text-white hover:bg-emerald-700">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-purple-400/20 to-blue-400/20 text-purple-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:cloud-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">80g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Sour Cream &amp; Onion Rings</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 line-through">$1.80</span>
<span className="text-sm font-semibold text-zinc-900">$1.50</span>
</div>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-50 active:bg-emerald-100">
                                Add
                            </button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-green-400/20 to-teal-400/20 text-green-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">150g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Veggie Sticks Sea Salt</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$3.20</span>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-50 active:bg-emerald-100">
                                Add
                            </button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-red-600/20 to-rose-400/20 text-rose-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:fire-square-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">60g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Flaming Hot Corn Puffs</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$1.10</span>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-50 active:bg-emerald-100">
                                Add
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Sweet Tooth Satisfaction</h2>
<p className="mt-1 text-sm text-zinc-500">Premium chocolates and treats.</p>
<div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-amber-800/20 to-yellow-900/20 text-amber-900 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:sticker-smile-circle-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">100g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Dark Chocolate 70% Cocoa</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$4.50</span>
<div className="flex h-8 items-center overflow-hidden rounded-lg bg-emerald-600 shadow-sm">
<button className="flex h-full w-8 items-center justify-center text-white hover:bg-emerald-700">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<span className="px-1 text-xs font-semibold text-white">1</span>
<button className="flex h-full w-8 items-center justify-center text-white hover:bg-emerald-700">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-blue-200/50 to-indigo-200/50 text-indigo-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">45g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Milk Chocolate Bar</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$1.00</span>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-50 active:bg-emerald-100">
                                Add
                            </button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                        New
                    </div>
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-pink-300/30 to-purple-300/30 text-pink-500 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:gift-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">200g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Assorted Truffles Box</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$8.99</span>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-emerald-600 bg-white px-4 text-xs font-semibold uppercase tracking-wide text-emerald-600 transition hover:bg-emerald-50 active:bg-emerald-100">
                                Add
                            </button>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 transition hover:shadow-md">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-50 p-6">
<div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-tr from-stone-400/20 to-zinc-400/20 text-stone-600 transition-transform duration-500 group-hover:scale-105">
<iconify-icon icon="solar:cookie-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex flex-1 flex-col p-4">
<div className="mb-1 text-xs font-medium text-zinc-400">120g</div>
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Choco Chip Cookies</h3>
<div className="mt-auto flex items-end justify-between pt-4">
<span className="text-sm font-semibold text-zinc-900">$2.20</span>
<button className="relative flex h-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 px-4 text-xs font-semibold uppercase tracking-wide text-zinc-400 cursor-not-allowed">
                                Out
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
<div className="flex items-center justify-between rounded-xl bg-zinc-900 p-4 shadow-xl shadow-zinc-900/20">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400">2 items</span>
<span className="text-sm font-semibold text-white">$7.00</span>
</div>
<button className="flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
                View Cart
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<footer className="mt-20 border-t border-zinc-200 bg-white">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
<div className="flex flex-col gap-2">
<a className="text-lg font-semibold tracking-tighter text-zinc-900" href="#">c&amp;c</a>
<p className="text-sm text-zinc-500">Delivering happiness in 10-15 minutes.</p>
</div>
<div className="flex flex-wrap gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900" href="#">About</a>
<a className="hover:text-zinc-900" href="#">Careers</a>
<a className="hover:text-zinc-900" href="#">Partner with us</a>
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
</div>
</div>
<div className="mt-8 flex items-center justify-between pt-8 border-t border-zinc-100">
<p className="text-xs text-zinc-400">© 2023 Chipis &amp; Chocolate Inc.</p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-600" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-600" href="#"><iconify-icon icon="solar:brand-x-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
