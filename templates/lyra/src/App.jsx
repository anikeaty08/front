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



    // Initialize icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();

      // Mobile menu logic
      const menuBtn = document.getElementById('menuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      const closeMenu = document.getElementById('closeMenu');
      const closeMenuBtn = document.getElementById('closeMenuBtn');

      function toggleMenu(show) {
        if (!mobileMenu) return;
        mobileMenu.classList.toggle('hidden', !show);
        document.body.classList.toggle('overflow-hidden', show);
      }

      menuBtn?.addEventListener('click', () => toggleMenu(true));
      closeMenu?.addEventListener('click', () => toggleMenu(false));
      closeMenuBtn?.addEventListener('click', () => toggleMenu(false));

      // Search overlay logic
      const openSearch = document.getElementById('openSearch');
      const searchOverlay = document.getElementById('searchOverlay');
      const closeSearch = document.getElementById('closeSearch');
      const closeSearchBtn = document.getElementById('closeSearchBtn');

      function toggleSearch(show) {
        if (!searchOverlay) return;
        searchOverlay.classList.toggle('hidden', !show);
        document.body.classList.toggle('overflow-hidden', show);
        if (show) {
          setTimeout(() => {
            const input = searchOverlay.querySelector('input');
            input?.focus();
          }, 50);
        }
      }

      openSearch?.addEventListener('click', () => toggleSearch(true));
      closeSearch?.addEventListener('click', () => toggleSearch(false));
      closeSearchBtn?.addEventListener('click', () => toggleSearch(false));
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          toggleMenu(false);
          toggleSearch(false);
        }
      });
    });
  
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
      

<div className="w-full bg-neutral-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-2 text-sm">
<p className="text-white/90">Complimentary shipping on orders over $150</p>
<a className="hidden sm:inline-flex items-center gap-2 text-white/80 hover:text-white transition" href="#">
<svg className="lucide lucide-map-pin inline-block" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>United States • EN</span>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 sm:hidden" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<a className="flex items-center gap-2" href="#">
<span className="text-2xl sm:text-3xl tracking-tight font-medium">LYRA</span>
<span className="hidden sm:inline text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600">Studio</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-neutral-700 hover:text-black transition font-medium" href="#">Women</a>
<a className="text-neutral-700 hover:text-black transition font-medium" href="#">Men</a>
</nav>

<div className="flex items-center gap-1 sm:gap-3">
<a className="hidden sm:inline text-neutral-700 hover:text-black transition text-sm" href="#">Sign in or create</a>
<button aria-label="Search" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-700" id="openSearch">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Account" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-700">
<svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Favorites" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-700 hidden sm:inline-flex">
<svg className="lucide lucide-heart h-5 w-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button aria-label="Cart" className="p-2 rounded-md hover:bg-neutral-100 text-neutral-700">
<svg className="lucide lucide-shopping-bag h-5 w-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</div>
</div>

<div className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="flex gap-6 overflow-x-auto py-3 text-sm">
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">New Arrivals</a>
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">Denim</a>
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">Apparel</a>
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">Bags</a>
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">Shoes</a>
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">Accessories</a>
<a className="text-neutral-700 hover:text-black whitespace-nowrap font-medium" href="#">E‑Gift</a>
</nav>
</div>
</div>
</header>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-black/50" id="closeMenu"></div>
<div className="ml-0 h-full w-80 max-w-[80%] bg-white shadow-xl">
<div className="flex items-center justify-between px-4 py-4 border-b">
<span className="text-xl tracking-tight font-medium">LYRA</span>
<button className="p-2 rounded-md hover:bg-neutral-100" id="closeMenuBtn">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="p-4 space-y-2">
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100 font-medium" href="#">Women</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100 font-medium" href="#">Men</a>
<div className="my-3 border-t"></div>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">New Arrivals</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">Denim</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">Apparel</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">Bags</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">Shoes</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">Accessories</a>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100" href="#">E‑Gift</a>
<div className="my-3 border-t"></div>
<a className="block px-3 py-2 rounded-md hover:bg-neutral-100 text-sm text-neutral-600" href="#">Sign in or create</a>
</nav>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="searchOverlay">
<div className="absolute inset-0 bg-black/50" id="closeSearch"></div>
<div className="relative mx-auto mt-24 w-full max-w-2xl px-4">
<div className="rounded-xl bg-white shadow-2xl border border-neutral-200">
<div className="flex items-center gap-3 px-4 py-3">
<svg className="lucide lucide-search h-5 w-5 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent focus:outline-none text-base placeholder-neutral-400" placeholder="Search LYRA" type="text"/>
<button className="p-2 rounded-md hover:bg-neutral-100" id="closeSearchBtn">
<svg className="lucide lucide-x h-5 w-5 text-neutral-600" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>

<section className="relative">
<div className="grid grid-cols-1 md:grid-cols-2">

<figure className="relative h-[58vh] md:h-[80vh]">
<img alt="Womenswear editorial" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a3ffcfc1-a587-46f5-9598-6877287b1197_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<a className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-neutral-900 backdrop-blur hover:bg-white transition font-medium" href="#">
<span>For Her</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</figure>

<figure className="relative h-[58vh] md:h-[80vh]">
<img alt="Menswear editorial" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d3da1789-0f7a-4fbc-b7b6-606f9b85b083_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<a className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-neutral-900 backdrop-blur hover:bg-white transition font-medium" href="#">
<span>For Him</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</figure>
</div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
<h1 className="text-white/95 text-5xl sm:text-6xl md:text-7xl tracking-tight font-light">LYRA</h1>
</div>
</section>

<section className="sm:px-6 lg:px-8 sm:py-16 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="text-center mb-10 sm:mb-12">
<p className="text-sm text-neutral-500">Denim Guide</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-light">What’s your favourite fit?</h2>
</div>
<div className="grid gap-4 sm:gap-6 md:grid-cols-2">

<a className="group relative overflow-hidden rounded-2xl border border-neutral-200" href="#">
<img alt="Women’s denim" className="h-56 sm:h-72 md:h-80 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d953ad7f-2dd7-42f7-8f74-593d55181036_1600w.jpg"/>
<div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<span className="text-white/90 text-sm">Women</span>
<div className="mt-2 h-[2px] w-10 mx-auto bg-white/80"></div>
</div>
</div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 text-neutral-900 backdrop-blur hover:bg-white transition font-medium">
<span className="">Explore</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative overflow-hidden rounded-2xl border border-neutral-200" href="#">
<img alt="Men’s denim" className="h-56 sm:h-72 md:h-80 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6b27b251-238a-455a-97d9-9d8a169f5d9e_1600w.jpg"/>
<div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<span className="text-white/90 text-sm">Men</span>
<div className="mt-2 h-[2px] w-10 mx-auto bg-white/80"></div>
</div>
</div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 text-neutral-900 backdrop-blur hover:bg-white transition font-medium">
<span className="">Explore</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>
</div>

<div className="overflow-hidden bg-white border-neutral-200 border rounded-xl mt-6 mb-10">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
<a className="flex items-center justify-center uppercase text-[13px] hover:bg-neutral-50 font-medium text-neutral-800 tracking-wide text-center pt-4 pr-6 pb-4 pl-6" href="#">
        Wide Leg
      </a>
<a className="flex items-center justify-center px-6 py-4 text-center uppercase tracking-wide text-[13px] text-neutral-800 hover:bg-neutral-50 font-medium" href="#">
        Relaxed
      </a>
<a className="flex items-center justify-center uppercase text-[13px] hover:bg-neutral-50 font-medium text-neutral-800 tracking-wide text-center pt-4 pr-6 pb-4 pl-6" href="#">
        Flared &amp; Bootcut
      </a>
<a className="flex items-center justify-center uppercase text-[13px] hover:bg-neutral-50 font-medium text-neutral-800 tracking-wide text-center pt-4 pr-6 pb-4 pl-6" href="#">
        Straight
      </a>
<a className="flex items-center justify-center px-6 py-4 text-center uppercase tracking-wide text-[13px] text-neutral-800 hover:bg-neutral-50 font-medium" href="#">
        Skinny
      </a>
</div>
</div>

<div className="grid gap-6 sm:grid-cols-3 gap-x-6 gap-y-6">
<a className="group relative overflow-hidden rounded-2xl border border-neutral-200" href="#">
<img alt="Footwear" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/0303a10a-62d6-4e39-8019-52df8861a315/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-lg font-medium text-white tracking-tight">Denim</p>
<p className="text-sm text-white/80">Flared &amp; Bootcut </p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-neutral-200" href="#">
<img alt="Bags" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/3050df97-36b9-4377-bc5d-cff34616f21f/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-lg font-medium text-white tracking-tight">Denim Dress</p>
<p className="text-sm text-white/80" style={{}}>Relaxed</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-2xl border border-neutral-200" href="#">
<img alt="Denim" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/2a372a15-23e3-40f4-80d1-0cfa474d8cdd/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<p className="text-white text-lg tracking-tight font-medium">Denim</p>
<p className="text-sm text-white/80">Wide Leg</p>
</div>
</a>
</div>
</section><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl tracking-tight font-medium mb-4">New Arrivals</h2>
<p className="text-neutral-600 max-w-2xl mx-auto">Essential pieces crafted with attention to detail. Contemporary silhouettes designed for the modern wardrobe.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group">
<div className="relative overflow-hidden rounded-xl bg-neutral-50 mb-4">
<img alt="Minimalist Blazer" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3c2511d-906f-428c-8556-5ca787aecab6_800w.jpg"/>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 text-neutral-900 backdrop-blur">New</span>
</div>
</div>
<div className="space-y-1">
<h3 className="font-medium text-neutral-900">Tailored Blazer</h3>
<p className="text-sm text-neutral-600">Wool blend • Structured</p>
<p className="font-medium">$298</p>
</div>
</div>
<div className="group">
<div className="relative overflow-hidden rounded-xl bg-neutral-50 mb-4">
<img alt="Cotton Tee" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6583f216-e37c-4884-a1e8-609113d5d851_800w.jpg"/>
</div>
<div className="space-y-1">
<h3 className="font-medium text-neutral-900">Essential Tee</h3>
<p className="text-sm text-neutral-600">Organic cotton • Relaxed fit</p>
<p className="font-medium">$68</p>
</div>
</div>
<div className="group">
<div className="relative overflow-hidden rounded-xl bg-neutral-50 mb-4">
<img alt="Wide Leg Trousers" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" src="https://cdn.midjourney.com/10f03a8b-e31f-4c33-9d4e-35fdae9a0e4a/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="space-y-1">
<h3 className="font-medium text-neutral-900">Wide Leg Trouser</h3>
<p className="text-sm text-neutral-600">Crepe fabric • High waisted</p>
<p className="font-medium">$168</p>
</div>
</div>
<div className="group">
<div className="relative overflow-hidden rounded-xl bg-neutral-50 mb-4">
<img alt="Knit Sweater" className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_800w.jpg" style={{}}/>
</div>
<div className="space-y-1">
<h3 className="font-medium text-neutral-900">Cashmere Pullover</h3>
<p className="text-sm text-neutral-600">Pure cashmere • Oversized</p>
<p className="font-medium">$228</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition font-medium" href="#">
<span>View All New Arrivals</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section><section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="space-y-6">
<div>
<p className="text-sm text-neutral-500 mb-2">Craftsmanship</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-light">Made to last, designed to love</h2>
</div>
<p className="text-lg text-neutral-600 leading-relaxed">Every piece is thoughtfully constructed using premium materials and time-honored techniques. We believe in creating fewer, better things that stand the test of time.</p>
<div className="grid grid-cols-2 gap-6 py-6">
<div>
<p className="text-2xl font-medium text-neutral-900 mb-1">100%</p>
<p className="text-sm text-neutral-600">Sustainable materials</p>
</div>
<div>
<p className="text-2xl font-medium text-neutral-900 mb-1">30+</p>
<p className="text-sm text-neutral-600">Years experience</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition font-medium" href="#">
<span>Our Story</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition font-medium" href="#">
<span>Sustainability</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<img alt="Artisan crafting garments" className="rounded-2xl w-full h-96 lg:h-[500px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1b56f8e-aa02-4cd2-8f19-6bfb1ccad521_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<p className="text-xl tracking-tight font-medium">LYRA</p>
<p className="text-sm text-neutral-600 mt-1">Minimal essentials designed for movement.</p>
</div>
<nav className="flex gap-6 text-sm">
<a className="text-neutral-700 hover:text-black font-medium" href="#">Help</a>
<a className="text-neutral-700 hover:text-black font-medium" href="#">Shipping</a>
<a className="text-neutral-700 hover:text-black font-medium" href="#">Returns</a>
<a className="text-neutral-700 hover:text-black font-medium" href="#">Contact</a>
</nav>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-neutral-500">
<p>© <span id="year">2025</span> LYRA Studio</p>
<div className="flex items-center gap-3">
<a className="hover:text-neutral-700" href="#">Privacy</a>
<span aria-hidden="true">•</span>
<a className="hover:text-neutral-700" href="#">Terms</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
