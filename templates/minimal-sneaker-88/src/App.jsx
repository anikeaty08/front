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
      

<nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<div className="flex items-center gap-8">
<a className="text-2xl font-semibold tracking-tighter" href="#">NIKE</a>
<div className="hidden space-x-6 md:flex">
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#">New &amp; Featured</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#">Men</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#">Women</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#">Sale</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="h-9 w-64 rounded-full bg-neutral-100 pl-10 pr-4 text-sm outline-none transition-all focus:ring-1 focus:ring-neutral-300 placeholder:text-neutral-400" placeholder="Search" type="text"/>
</div>
<button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-neutral-100">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-neutral-100">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute right-0.5 top-0.5 flex h-2 w-2 rounded-full bg-neutral-900 ring-2 ring-white"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full border-b border-neutral-100 bg-neutral-50 px-6 py-24 md:py-32">
<div className="mx-auto max-w-7xl">
<div className="max-w-2xl">
<span className="mb-4 inline-block rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-600 shadow-sm">New Release</span>
<h1 className="mb-6 text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl">Air Max Dn.</h1>
<p className="mb-8 max-w-lg text-lg font-normal leading-relaxed text-neutral-500">
                    The next generation of Air technology is here. Unreal comfort meets dynamic motion for a sensation unlike anything you've felt before.
                </p>
<div className="flex gap-4">
<button className="group flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:pr-8">
                        Shop Now
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50">
                        Explore Film
                    </button>
</div>
</div>
</div>

<div className="absolute right-0 top-0 hidden h-full w-1/3 overflow-hidden md:block">
<img alt="Nike Shoe" className="h-full w-full object-cover opacity-90 mix-blend-multiply grayscale filter" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-50"></div>
</div>
</header>

<main className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-12 lg:grid-cols-4">

<aside className="col-span-1 hidden lg:block">
<div className="sticky top-24 space-y-8">

<div>
<h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-900">Categories</h3>
<ul className="space-y-2.5">
<li><a className="text-sm font-medium text-neutral-900" href="#">Lifestyle</a></li>
<li><a className="text-sm font-normal text-neutral-500 hover:text-neutral-900" href="#">Running</a></li>
<li><a className="text-sm font-normal text-neutral-500 hover:text-neutral-900" href="#">Basketball</a></li>
<li><a className="text-sm font-normal text-neutral-500 hover:text-neutral-900" href="#">Training &amp; Gym</a></li>
<li><a className="text-sm font-normal text-neutral-500 hover:text-neutral-900" href="#">Soccer</a></li>
</ul>
</div>
<div className="h-px w-full bg-neutral-100"></div>

<div>
<h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-900">Gender</h3>
<div className="space-y-3">
<label className="flex cursor-pointer items-center gap-3">
<input checked="" className="custom-checkbox hidden" type="checkbox"/>
<div className="flex h-4 w-4 items-center justify-center rounded border border-neutral-300 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-600">Men</span>
</label>
<label className="flex cursor-pointer items-center gap-3">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="flex h-4 w-4 items-center justify-center rounded border border-neutral-300 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-600">Women</span>
</label>
<label className="flex cursor-pointer items-center gap-3">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="flex h-4 w-4 items-center justify-center rounded border border-neutral-300 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="text-sm font-normal text-neutral-600">Unisex</span>
</label>
</div>
</div>
<div className="h-px w-full bg-neutral-100"></div>

<div>
<div className="mb-4 flex items-center justify-between">
<h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">Price</h3>
<span className="text-xs text-neutral-500">$50 - $250</span>
</div>
<div className="relative h-1 w-full rounded-full bg-neutral-200">
<div className="absolute left-1/4 right-1/4 h-full rounded-full bg-neutral-900"></div>
<div className="absolute left-1/4 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full border border-neutral-200 bg-white shadow-sm"></div>
<div className="absolute right-1/4 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 cursor-pointer rounded-full border border-neutral-200 bg-white shadow-sm"></div>
</div>
</div>
</div>
</aside>

<section className="col-span-1 lg:col-span-3">
<div className="mb-8 flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-neutral-900">New Arrivals (24)</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort by:</span>
<button className="flex items-center gap-1 text-sm font-medium text-neutral-900">
                        Featured
                        <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

<div className="group cursor-pointer">
<div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<span className="absolute left-3 top-3 z-10 rounded-sm bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-900 shadow-sm">Just In</span>
<img alt="Shoe" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-900 group-hover:underline group-hover:underline-offset-4">Nike Air Max Dn</h3>
<span className="text-sm font-medium text-neutral-900">$160</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Men's Shoes</p>
<p className="mt-0.5 text-xs text-neutral-400">6 Colors</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<img alt="Shoe" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-900 group-hover:underline group-hover:underline-offset-4">Nike Dunk Low Retro</h3>
<span className="text-sm font-medium text-neutral-900">$115</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Men's Shoes</p>
<p className="mt-0.5 text-xs text-neutral-400">2 Colors</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<span className="absolute left-3 top-3 z-10 rounded-sm bg-neutral-900 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">Best Seller</span>
<img alt="Shoe" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" src="https://images.unsplash.com/photo-1584735175315-9d5df23860e6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-900 group-hover:underline group-hover:underline-offset-4">Nike Zoom Vomero 5</h3>
<span className="text-sm font-medium text-neutral-900">$160</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Women's Shoes</p>
<p className="mt-0.5 text-xs text-neutral-400">4 Colors</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<img alt="Shoe" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-900 group-hover:underline group-hover:underline-offset-4">Nike Air Force 1 '07</h3>
<span className="text-sm font-medium text-neutral-900">$115</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Men's Shoes</p>
<p className="mt-0.5 text-xs text-neutral-400">White/Black</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<img alt="Shoe" className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-sm transition-all duration-300 hover:bg-neutral-900 hover:text-white group-hover:translate-y-0 group-hover:opacity-100">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-900 group-hover:underline group-hover:underline-offset-4">Nike Pegasus 41</h3>
<span className="text-sm font-medium text-neutral-900">$140</span>
</div>
<p className="mt-1 text-xs text-neutral-500">Running Shoes</p>
<p className="mt-0.5 text-xs text-neutral-400">Electric Blue</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
<span className="absolute left-3 top-3 z-10 rounded-sm bg-neutral-500/10 backdrop-blur-md px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-600 shadow-sm border border-white/20">Sold Out</span>
<img alt="Shoe" className="h-full w-full object-cover object-center grayscale transition-transform duration-500 group-hover:scale-105 mix-blend-multiply opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<div className="flex items-start justify-between">
<h3 className="text-sm font-medium text-neutral-500">Air Jordan 1 Low</h3>
<span className="text-sm font-medium text-neutral-500">$125</span>
</div>
<p className="mt-1 text-xs text-neutral-400">Men's Shoes</p>
<p className="mt-0.5 text-xs text-neutral-300">Unavailable</p>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="h-10 w-full rounded border border-neutral-200 bg-white text-xs font-medium uppercase tracking-widest text-neutral-900 transition-colors hover:bg-neutral-50 sm:w-64">
                    Load More
                </button>
</div>
</section>
</main>

<section className="border-y border-neutral-100 bg-neutral-50 py-20">
<div className="mx-auto flex max-w-4xl flex-col items-center text-center px-6">
<h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-900">Join the Club. Get Rewarded.</h2>
<p className="mb-8 text-neutral-500">Sign up for free and get exclusive access to new drops and special offers.</p>
<div className="flex w-full max-w-sm items-center gap-2">
<div className="relative w-full">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="h-10 w-full rounded border border-neutral-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-neutral-400 focus:ring-0" placeholder="Email address" type="email"/>
</div>
<button className="h-10 rounded bg-neutral-900 px-6 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
                    Join
                </button>
</div>
</div>
</section>

<footer className="bg-white pb-10 pt-16">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="mb-6 block text-xl font-semibold tracking-tighter text-neutral-900" href="#">NIKE</a>
<p className="max-w-xs text-xs leading-5 text-neutral-500">
                        Innovation and inspiration for every athlete in the world. Designed to help you perform your best.
                    </p>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-900">Get Help</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Order Status</a></li>
<li><a className="hover:text-neutral-900" href="#">Shipping &amp; Delivery</a></li>
<li><a className="hover:text-neutral-900" href="#">Returns</a></li>
<li><a className="hover:text-neutral-900" href="#">Payment Options</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-900">About Nike</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">News</a></li>
<li><a className="hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900" href="#">Investors</a></li>
<li><a className="hover:text-neutral-900" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-900">Social</h4>
<div className="flex gap-4 text-neutral-500">
<a className="hover:text-neutral-900" href="#"><iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="hover:text-neutral-900" href="#"><iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-between border-t border-neutral-100 pt-8 md:flex-row">
<div className="mb-4 flex gap-4 md:mb-0">
<a className="text-[10px] text-neutral-500 hover:text-neutral-900" href="#">Guides</a>
<a className="text-[10px] text-neutral-500 hover:text-neutral-900" href="#">Terms of Sale</a>
<a className="text-[10px] text-neutral-500 hover:text-neutral-900" href="#">Terms of Use</a>
<a className="text-[10px] text-neutral-500 hover:text-neutral-900" href="#">Privacy Policy</a>
</div>
<p className="text-[10px] text-neutral-400">© 2024 Nike, Inc. All Rights Reserved</p>
</div>
</div>
</footer>

    </>
  );
}
