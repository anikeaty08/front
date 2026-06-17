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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="min-h-screen bg-white">
<nav className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
<div className="flex shrink-0 items-center">
<a className="text-xl font-semibold tracking-tight text-zinc-900" href="#">
            Radhe <span className="text-blue-600">Cars</span>
</a>
</div>
<div className="hidden flex-1 justify-center md:flex">
<div className="flex w-full max-w-2xl items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-200/50">
<iconify-icon data-strokeWidth="1.5" data-width="20" height="20" icon="solar:magnifer-linear" style={{color: '#71717a'}} width="20"></iconify-icon>
<input className="w-full bg-transparent text-sm font-normal text-zinc-800 outline-none placeholder:text-zinc-400" placeholder="Search for your dream car..." type="text"/>
</div>
</div>
<div className="hidden items-center gap-3 lg:flex">
<a className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-white shadow-sm" href="tel:+919999999999">
<iconify-icon data-strokeWidth="1.5" data-width="19" height="19" icon="solar:phone-linear" style={{color: 'white'}} width="19"></iconify-icon>
<span>Call us</span>
</a>
<a className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm shadow-blue-200" href="#sell">
            Sell Your Car
          </a>
<a className="inline-flex items-center rounded-xl border border-blue-200 px-5 py-3 text-sm font-medium text-blue-700" href="#inventory">
            Buy Car
          </a>
</div>
<button className="inline-flex items-center justify-center rounded-xl border border-zinc-200 p-3 text-zinc-700 lg:hidden">
<iconify-icon data-strokeWidth="1.5" data-width="20" height="20" icon="solar:hamburger-menu-linear" style={{color: '#3f3f46'}} width="20"></iconify-icon>
</button>
</div>
<div className="border-t border-zinc-200/80 px-4 py-4 md:hidden">
<div className="mx-auto flex max-w-7xl flex-col gap-3">
<div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-200/40">
<iconify-icon data-strokeWidth="1.5" data-width="20" height="20" icon="solar:magnifer-linear" style={{color: '#71717a'}} width="20"></iconify-icon>
<input className="w-full bg-transparent text-sm font-normal text-zinc-800 outline-none placeholder:text-zinc-400" placeholder="Search for your dream car..." type="text"/>
</div>
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-4 py-3 text-sm font-medium text-white" href="tel:+919999999999">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:phone-linear" style={{color: 'white'}} width="18"></iconify-icon>
<span>Call us</span>
</a>
<a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white" href="#sell">
              Sell Your Car
            </a>
<a className="inline-flex items-center justify-center rounded-xl border border-blue-200 px-4 py-3 text-sm font-medium text-blue-700" href="#inventory">
              Buy Car
            </a>
</div>
</div>
</div>
</nav>
<main>
<section className="relative overflow-hidden">
<div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
<div className="max-w-2xl">
<div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
              Trusted used car buying &amp; selling in Vijapur
            </div>
<h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
              Buy &amp; Sell Used Cars in Vijapur with Absolute Trust
            </h1>
<p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
              Experience a transparent, hassle-free process with instant payments and certified cars.
            </p>
<div className="mt-8 flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/40">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:wheel-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
                Sedan
              </button>
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/40">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:car-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
                Hatchback
              </button>
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-200/40">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:bus-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
                SUV
              </button>
</div>
<div className="mt-10 flex flex-wrap gap-4">
<a className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-200/70" href="#inventory">
                Explore Inventory
              </a>
<a className="inline-flex items-center rounded-xl border border-zinc-200 px-6 py-3.5 text-sm font-medium text-zinc-700" href="#sell">
                Sell Your Car
              </a>
</div>
</div>
<div className="relative">
<div className="rounded-[2rem] bg-gradient-to-br from-zinc-50 to-blue-50 p-4 shadow-xl shadow-zinc-200/60 ring-1 ring-zinc-100 sm:p-6">
<img alt="Premium used car" className="h-[22rem] w-full rounded-[1.5rem] object-cover sm:h-[26rem]" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" style={{objectPosition: 'center'}}/>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-100">
<p className="text-xs text-zinc-500">Certified</p>
<p className="mt-1 text-sm font-medium text-zinc-900">Quality Checked</p>
</div>
<div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-100">
<p className="text-xs text-zinc-500">Fast Payment</p>
<p className="mt-1 text-sm font-medium text-zinc-900">Instant Offer</p>
</div>
<div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-100">
<p className="text-xs text-zinc-500">Trusted</p>
<p className="mt-1 text-sm font-medium text-zinc-900">Local Experts</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-zinc-50 py-16 sm:py-20" id="inventory">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8 flex items-end justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600">Featured Inventory</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                Cars selected for you
              </h2>
</div>
<div className="hidden items-center gap-3 sm:flex">
<button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm">
<iconify-icon data-strokeWidth="1.5" data-width="20" height="20" icon="solar:alt-arrow-left-linear" style={{color: '#3f3f46'}} width="20"></iconify-icon>
</button>
<button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm">
<iconify-icon data-strokeWidth="1.5" data-width="20" height="20" icon="solar:alt-arrow-right-linear" style={{color: '#3f3f46'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
<div className="group rounded-3xl bg-white p-4 shadow-sm shadow-zinc-200/70 ring-1 ring-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/80">
<img alt="Honda City" className="h-52 w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-950">Honda City 2021</h3>
<div className="mt-4 grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:speedometer-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">KMs</p>
<p className="text-xs font-medium text-zinc-900">32,000</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:gas-station-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Fuel</p>
<p className="text-xs font-medium text-zinc-900">Petrol</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:settings-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Gear</p>
<p className="text-xs font-medium text-zinc-900">Manual</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xl font-semibold tracking-tight text-zinc-950">₹8.45 Lakh</p>
<a className="text-sm font-medium text-blue-600" href="#">View</a>
</div>
</div>
</div>
<div className="group rounded-3xl bg-white p-4 shadow-sm shadow-zinc-200/70 ring-1 ring-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/80">
<img alt="Maruti Baleno" className="h-52 w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-950">Maruti Baleno 2020</h3>
<div className="mt-4 grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:speedometer-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">KMs</p>
<p className="text-xs font-medium text-zinc-900">41,500</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:gas-station-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Fuel</p>
<p className="text-xs font-medium text-zinc-900">Petrol</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:settings-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Gear</p>
<p className="text-xs font-medium text-zinc-900">Automatic</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xl font-semibold tracking-tight text-zinc-950">₹6.20 Lakh</p>
<a className="text-sm font-medium text-blue-600" href="#">View</a>
</div>
</div>
</div>
<div className="group rounded-3xl bg-white p-4 shadow-sm shadow-zinc-200/70 ring-1 ring-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/80">
<img alt="Hyundai Creta" className="h-52 w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-950">Hyundai Creta 2022</h3>
<div className="mt-4 grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:speedometer-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">KMs</p>
<p className="text-xs font-medium text-zinc-900">18,900</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:gas-station-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Fuel</p>
<p className="text-xs font-medium text-zinc-900">Diesel</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:settings-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Gear</p>
<p className="text-xs font-medium text-zinc-900">Manual</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xl font-semibold tracking-tight text-zinc-950">₹11.80 Lakh</p>
<a className="text-sm font-medium text-blue-600" href="#">View</a>
</div>
</div>
</div>
<div className="group rounded-3xl bg-white p-4 shadow-sm shadow-zinc-200/70 ring-1 ring-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/80">
<img alt="Tata Nexon" className="h-52 w-full rounded-2xl object-cover" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-950">Tata Nexon 2021</h3>
<div className="mt-4 grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:speedometer-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">KMs</p>
<p className="text-xs font-medium text-zinc-900">27,400</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:gas-station-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Fuel</p>
<p className="text-xs font-medium text-zinc-900">Petrol</p>
</div>
<div className="rounded-2xl bg-zinc-50 p-3">
<iconify-icon data-strokeWidth="1.5" data-width="18" height="18" icon="solar:settings-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
<p className="mt-2 text-xs text-zinc-500">Gear</p>
<p className="text-xs font-medium text-zinc-900">Automatic</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<p className="text-xl font-semibold tracking-tight text-zinc-950">₹9.75 Lakh</p>
<a className="text-sm font-medium text-blue-600" href="#">View</a>
</div>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-medium text-blue-700 shadow-sm" href="#">
              View All Cars
            </a>
</div>
</div>
</section>
<section className="py-16 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600">Testimonials</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Stories from Happy Customers
            </h2>
</div>
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
<div className="group relative overflow-hidden rounded-3xl bg-zinc-100 shadow-sm shadow-zinc-200/60 ring-1 ring-zinc-100">
<img alt="Customer testimonial" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-900/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 shadow-lg backdrop-blur">
<iconify-icon data-strokeWidth="1.5" data-width="24" height="24" icon="solar:play-linear" style={{color: '#18181b'}} width="24"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 w-full p-5">
<p className="text-sm font-medium text-white">“Smooth process and genuine pricing.”</p>
<p className="mt-1 text-xs text-white/80">Amit Patel, Vijapur</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl bg-zinc-100 shadow-sm shadow-zinc-200/60 ring-1 ring-zinc-100">
<img alt="Customer testimonial" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-900/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 shadow-lg backdrop-blur">
<iconify-icon data-strokeWidth="1.5" data-width="24" height="24" icon="solar:play-linear" style={{color: '#18181b'}} width="24"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 w-full p-5">
<p className="text-sm font-medium text-white">“I sold my car in one visit.”</p>
<p className="mt-1 text-xs text-white/80">Nisha Shah, Vijapur</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl bg-zinc-100 shadow-sm shadow-zinc-200/60 ring-1 ring-zinc-100 md:col-span-2 xl:col-span-1">
<img alt="Customer testimonial" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/65 via-zinc-900/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<button className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85 shadow-lg backdrop-blur">
<iconify-icon data-strokeWidth="1.5" data-width="24" height="24" icon="solar:play-linear" style={{color: '#18181b'}} width="24"></iconify-icon>
</button>
</div>
<div className="absolute bottom-0 w-full p-5">
<p className="text-sm font-medium text-white">“Very transparent and trustworthy team.”</p>
<p className="mt-1 text-xs text-white/80">Rahul Mehta, Vijapur</p>
</div>
</div>
</div>
</div>
</section>
<section className="pb-16 sm:pb-20" id="sell">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-50 to-zinc-50 px-6 py-10 shadow-sm shadow-zinc-200/60 ring-1 ring-blue-100 sm:px-10 sm:py-14 lg:px-14">
<div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
<div className="max-w-2xl">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-600">Sell Your Car</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                  Curious what your car is worth?
                </h2>
<p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                  Skip the hassle. Send us your car details for a fast, free, and fair valuation from our experts.
                </p>
</div>
<div className="flex lg:justify-end">
<a className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-blue-200 sm:w-auto" href="#">
                  Get My Free Valuation
                </a>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-zinc-950 text-white">
<div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
<div>
<a className="text-2xl font-semibold tracking-tight text-white" href="#">
            Radhe <span className="text-blue-400">Cars</span>
</a>
<p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            Trusted destination in Vijapur for buying and selling used cars with confidence, clarity, and personal support.
          </p>
<div className="mt-6 flex items-center gap-3">
<a className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300" href="#">
<iconify-icon data-strokeWidth="1.5" data-width="19" height="19" icon="solar:instagram-linear" style={{color: '#d4d4d8'}} width="19"></iconify-icon>
</a>
<a className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-300" href="#">
<iconify-icon data-strokeWidth="1.5" data-width="19" height="19" icon="solar:facebook-linear" style={{color: '#d4d4d8'}} width="19"></iconify-icon>
</a>
</div>
<div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">Office Address</p>
<p className="mt-3 text-sm leading-7 text-zinc-300">
              Radhe Cars, Vijapur,<br/>
              Gujarat, India
            </p>
</div>
</div>
<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:justify-self-end">
<div>
<p className="text-sm font-medium text-white">Quick Links</p>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">SUV</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Sedan</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Hatchback</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white">Contact</p>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="tel:+919999999999">+91 99999 99999</a></li>
<li><a className="text-sm text-zinc-400 transition hover:text-white" href="mailto:hello@radhecars.in">hello@radhecars.in</a></li>
<li><span className="text-sm text-zinc-400">Mon - Sat, 10am - 7pm</span></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-900">
<div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-zinc-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
<p>© 2026 Radhe Cars. All rights reserved.</p>
<p>Built for trust, clarity, and a better car buying experience.</p>
</div>
</div>
</footer>
</div>

    </>
  );
}
