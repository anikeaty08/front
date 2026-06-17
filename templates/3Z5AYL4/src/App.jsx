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
      
<main className="max-w-7xl mx-auto px-6 py-8 lg:py-12">

<nav className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div aria-hidden="true" className="rounded-md px-2 py-1 bg-emerald-600 text-white text-lg tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>C</div>
<div className="text-sm text-slate-600">CleanGod</div>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">About</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">Contact</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">Sign in</a>
</div>
</nav>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-7 order-2 lg:order-1 relative">
<div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-100 bg-white/60 backdrop-blur-sm relative" data-animate="true" style={{transform: 'translateY(24px) scale(.995)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms cubic-bezier(.2,.9,.25,1)'}}>
<img alt="CleanGod professionals tidying and sparkling a room" className="w-full h-72 sm:h-96 lg:h-[520px] object-cover" src="https://images.unsplash.com/photo-1581579180240-06d9f3e7cc14?q=80&amp;w=1600&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=b3b06d9f9a3f6f3b39e5ebecb6aa0d2a" style={{display: 'block'}}/>

<div className="absolute -bottom-4 left-6 flex gap-3">
<img alt="CleanGod bottle" className="w-20 h-28 object-cover rounded-lg shadow-lg ring-1 ring-slate-100 bg-white" src="https://images.unsplash.com/photo-1598511725927-9be35a6e2a2b?q=80&amp;w=400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=2f0a1f096b1c0f3a6a30fb33d1a9d2f0" />
<img alt="CleanGod spray" className="w-20 h-28 object-cover rounded-lg shadow-lg ring-1 ring-slate-100 bg-white" src="https://images.unsplash.com/photo-1585386959984-a4155229e1f9?q=80&amp;w=400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=8b6e7f1b04d4b9b9f2b6bdf0a6b6a06a"/>
</img></div>
</div>
<div className="mt-4 flex items-center gap-4">
<div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-sm text-emerald-700 ring-1 ring-emerald-100" data-animate="true" style={{transform: 'translateY(20px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 160ms cubic-bezier(.2,.9,.25,1)'}}>
<svg aria-hidden="true" className="w-4 h-4 mr-2 text-emerald-600" data-lucide="shield-check"></svg>
            100% satisfaction guarantee
          </div>
<div className="ml-3 inline-flex items-center rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-100" data-animate="true" style={{transform: 'translateY(20px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 240ms cubic-bezier(.2,.9,.25,1)'}}>
<svg aria-hidden="true" className="w-4 h-4 mr-2 text-slate-700" data-lucide="award"></svg>
            Trademarked Hygiene Experts
          </div>
<div className="ml-auto text-sm text-slate-500 hidden sm:inline" data-animate="true" style={{transform: 'translateY(20px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 320ms cubic-bezier(.2,.9,.25,1)'}}>
            Serving Homes &amp; Businesses
          </div>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
<div>
<h1 className="text-3xl sm:text-4xl md:text-4xl leading-tight tracking-tight font-semibold text-slate-900" data-animate="true" style={{transform: 'translateY(18px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 80ms cubic-bezier(.2,.9,.25,1)'}}>
            Complete Hygiene Solutions—Products &amp; Cleaning Services, All From CleanGod
          </h1>
<p className="mt-3 text-slate-600 text-lg max-w-xl" data-animate="true" style={{transform: 'translateY(18px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 160ms cubic-bezier(.2,.9,.25,1)'}}>
            Your trusted hygiene partner for homes and businesses. Book expert cleaning or order high-quality cleaners—delivered to your door.
          </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:gap-4" data-animate="true" style={{transform: 'translateY(18px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 240ms cubic-bezier(.2,.9,.25,1)'}}>
<button aria-label="Book a cleaning" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-600 text-white px-6 py-4 text-base font-semibold shadow-lg hover:bg-emerald-700 hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 transform transition" id="bookCleaning" style={{touchAction: 'manipulation'}}>
<svg aria-hidden="true" className="w-5 h-5" data-lucide="calendar"></svg>
            Book a Cleaning
          </button>
<button aria-label="Order products" className="mt-3 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-700 px-5 py-3 text-sm font-medium ring-1 ring-emerald-100 hover:shadow-sm focus:outline-none transform transition" id="orderProducts" style={{touchAction: 'manipulation'}}>
<svg aria-hidden="true" className="w-4 h-4 text-emerald-700" data-lucide="shopping-cart"></svg>
            Order Products
          </button>
</div>

<div className="mt-4 grid grid-cols-3 gap-2 sm:hidden">
<div className="text-xs text-center bg-slate-50 rounded-md p-2 ring-1 ring-slate-100">100% satisfaction</div>
<div className="text-xs text-center bg-slate-50 rounded-md p-2 ring-1 ring-slate-100">Trademarked Experts</div>
<div className="text-xs text-center bg-slate-50 rounded-md p-2 ring-1 ring-slate-100">Homes &amp; Businesses</div>
</div>

<div aria-label="Quick services" className="mt-6 grid grid-cols-3 sm:grid-cols-3 gap-3">
<a className="group col-span-1 flex flex-col items-center gap-2 p-3 rounded-2xl bg-white ring-1 ring-slate-100 hover:shadow-lg focus:outline-none transform transition hover:-translate-y-1" data-animate="true" href="#" style={{transform: 'translateY(18px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 320ms cubic-bezier(.2,.9,.25,1)'}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<svg aria-hidden="true" className="w-6 h-6" data-lucide="box"></svg>
</div>
<span className="text-xs font-medium text-slate-700 text-center">Buy Products</span>
</a>
<a className="group col-span-1 flex flex-col items-center gap-2 p-3 rounded-2xl bg-white ring-1 ring-slate-100 hover:shadow-lg focus:outline-none transform transition hover:-translate-y-1" data-animate="true" href="#" style={{transform: 'translateY(18px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 360ms cubic-bezier(.2,.9,.25,1)'}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<svg aria-hidden="true" className="w-6 h-6" data-lucide="spray"></svg>
</div>
<span className="text-xs font-medium text-slate-700 text-center">Book Cleaning</span>
</a>
<a className="group col-span-1 flex flex-col items-center gap-2 p-3 rounded-2xl bg-white ring-1 ring-slate-100 hover:shadow-lg focus:outline-none transform transition hover:-translate-y-1" data-animate="true" href="#" style={{transform: 'translateY(18px)', opacity: '0', filter: 'blur(8px)', transition: 'all 560ms 400ms cubic-bezier(.2,.9,.25,1)'}}>
<div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
<svg aria-hidden="true" className="w-6 h-6" data-lucide="info"></svg>
</div>
<span className="text-xs font-medium text-slate-700 text-center">Why CleanGod?</span>
</a>
</div>
</div>
</section>

<section className="mt-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">What we do</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm flex gap-4 items-start">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
<svg className="w-6 h-6" data-lucide="bottle"></svg>
</div>
<div>
<div className="text-sm text-slate-500">Buy Hygiene Products</div>
<div className="text-sm font-medium text-slate-900">High-quality CleanGod bottles made for professionals and homes.</div>
</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm flex gap-4 items-start">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
<svg className="w-6 h-6" data-lucide="home"></svg>
</div>
<div>
<div className="text-sm text-slate-500">Book Cleaning Services</div>
<div className="text-sm font-medium text-slate-900">Skilled teams for homes and offices with service guarantees.</div>
</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm flex gap-4 items-start">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
<svg className="w-6 h-6" data-lucide="users"></svg>
</div>
<div>
<div className="text-sm text-slate-500">Why CleanGod?</div>
<div className="text-sm font-medium text-slate-900">We produce products and deliver services—single quality standard and accountability.</div>
</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight">Featured Services</h3>
<a className="text-sm text-emerald-600 hover:underline" href="#">View all</a>
</div>
<div className="overflow-x-auto -mx-6 px-6 py-2">
<div className="flex gap-4 w-max" style={{minWidth: '100%'}}>

<div className="w-64 p-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-shrink-0">
<img alt="Home cleaning" className="h-36 w-full object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1581579180240-06d9f3e7cc14?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=b3b06d9f9a3f6f3b39e5ebecb6aa0d2a"/>
<div className="text-sm font-medium text-slate-900">Home Cleaning</div>
<div className="text-xs text-slate-500 mt-1">Routine &amp; deep cleaning options tailored to your home.</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-lg bg-emerald-600 text-white py-2 text-sm font-medium">Book Now</button>
<button className="w-10 rounded-lg bg-slate-50 ring-1 ring-slate-100 flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="share-2"></svg>
</button>
</div>
</div>
<div className="w-64 p-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-shrink-0">
<img alt="Office cleaning" className="h-36 w-full object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1581091870622-3a5d3f2d8a6f?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=8a7e0c2f8b1b2a2f9ef1f6f1c7c6f2d1"/>
<div className="text-sm font-medium text-slate-900">Office Cleaning</div>
<div className="text-xs text-slate-500 mt-1">Flexible schedules for businesses and shared spaces.</div>
<div className="mt-3">
<button className="w-full rounded-lg bg-emerald-600 text-white py-2 text-sm font-medium">Book Now</button>
</div>
</div>
<div className="w-64 p-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-shrink-0">
<img alt="Disinfection" className="h- w-full object-cover rounded-lg mb-3" src="https://images.unsplash.com/photo-1605902711622-cfb43c44367c?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=ef4b0d9adf7ed04f3a0a1f2d1d2c3b4"/>
<div className="text-sm font-medium text-slate-900">Dis</div>
<div className="text-xs text-slate-500 mt-1">Certified protocols for high-risk areas and surfaces.
            <div className="mt-3">
<button className="w-full rounded-lg bg-emerald-600 text-white-2 text-sm font-medium">Book Now</button>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight">Featured Products</h3>
<a className="text-sm text-emerald-600 hover:underline" href="#">Shop all</a>
</div>
<div className="overflow-x-auto -mx-6 px-6 py-2">
<div className="flex gap-4 w-max" style={{minWidth: '100%'}}>

<div className="w-48 p-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-shrink-0 text-center">
<img alt="Cleaner bottle" className="h-28 mx-auto object-contain mb-3" src="https://images.unsplash.com/photo-1598511725927-9be35a6e2a2b?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=2f0a1f096b1c0f3a6a30fb33d1a9d2f0"/>
<div className="text-sm font-medium text-slate-900">CleanGod All-Purpose</div>
<div className="text-xs text-slate-500 mt-1">Concentrated formula • 500ml</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-lg bg-emerald-600 text-white py-2 text-sm font-medium">Add to Cart</button>
<button className="w-10 rounded-lg bg-slate-50 ring-1 ring-slate-100 flex items-center justify-center">
<svg className="w-4 h-4" data-lucide="heart"></svg>
</button>
</div>
</div>
<div className="w-48 p-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-shrink-0 text-center">
<img alt="Spray bottle" className="h-28 mx-auto object-contain mb-3" src="https://images.unsplash.com/photo-1585386959984-a4155229e1f9?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=8b6e7f1b04d4b9b9f2b6bdf0a6b6a06a"/>
<div className="text-sm font-medium text-slate-900">CleanGod Spray</div>
<div className="text-xs text-slate-500 mt-1">Ready to use • 750ml</div>
<div className="mt-3">
<button className="w-full rounded-lg bg-emerald-600 text-white py-2 text-sm font-medium">Add to Cart</button>
</div>
</div>
<div className="w-48 p-4 rounded-2xl bg-white ring-1 ring-slate-100 shadow-sm flex-shrink-0 text-center">
<img alt="Refill pack" className="h-28 mx-auto object-contain mb-3" src="https://images.unsplash.com/photo-1526406915891-5f2a0b3b3b2d?q=80&amp;w=600&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=d7c6b8a2e7f5d8c6f2a3a9a7b9b4c1d2"/>
<div className="text-sm font-medium text-slate-900">Refill Pack</div>
<div className="text-xs text-slate-500 mt-1">Economy 2L refill</div>
<div className="mt-3">
<button className="w-full rounded-lg bg-emerald-600 text-white py-2 text-sm font-medium">Add to Cart</button>
</div>
</div>
</div>
</div>
</div></section>

<section className="mt-10">
<h3 className="text-lg font-semibold tracking-tight mb-4">How it works</h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm text-center">
<div className="w-12 h-12 mx-auto rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 mb-3">
<svg className="w-5 h-5" data-lucide="search"></svg>
</div>
<div className="text-sm font-medium text-slate-900">Browse &amp; choose</div>
<div className="text-xs text-slate-500 mt-2">Select a product or service and view benefits.</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm text-center">
<div className="w-12 h-12 mx-auto rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 mb-3">
<svg className="w-5 h-5" data-lucide="credit-card"></svg>
</div>
<div className="text-sm font-medium text-slate-900">Place order or booking</div>
<div className="text-xs text-slate-500 mt-2">Secure checkout or schedule an appointment.</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm text-center">
<div className="w-12 h-12 mx-auto rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 mb-3">
<svg className="w-5 h-5" data-lucide="truck"></svg>
</div>
<div className="text-sm font-medium text-slate-900">Delivery or service</div>
<div className="text-xs text-slate-500 mt-2">Products delivered fast or professionals arrive on time.</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight">Trusted by businesses and families</h3>
<a className="text-sm text-emerald-600 hover:underline" href="#">Read all testimonials</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=7c9b1ab52b3a5c3f4c9c8a6e5b0c2d1e"/>
<div>
<div className="text-sm font-medium text-slate-900">Samantha R.</div>
<div className="text-xs text-slate-500">Home Owner</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">"Quick booking, friendly team, and the products smell great. Highly recommend!"</p>
<div className="mt-3 flex gap-1 text-amber-400">
<svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg>
</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1545996124-6f8a0f8d8a3b?q=80&amp;w=200&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=3a2b1c4d5e6f7a8b9c0d"/>
<div>
<div className="text-sm font-medium text-slate-900">Greenleaf Office</div>
<div className="text-xs text-slate-500">Corporate</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">"Professional staff. Our office has never felt fresher. Great partnership."</p>
<div className="mt-3 flex gap-1 text-amber-400">
<svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg>
</div>
</div>
<div className="p-4 rounded-xl bg-white ring-1 ring-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1545996124-6f8a0f8d8a3b?q=80&amp;w=200&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;s=3a2b1c4d5e6f7a8b9c0d"/>
<div>
<div className="text-sm font-medium text-slate-900">Family House</div>
<div className="text-xs text-slate-500">Residential</div>
</div>
</div>
<p className="mt-3 text-sm text-slate-600">"Products are effective and safe. Booking service was fast and courteous."</p>
<div className="mt-3 flex gap-1 text-amber-400">
<svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg><svg className="w-4 h-4" data-lucide="star"></svg>
</div>
</div>
</div>
</section>

<footer className="mt-12 border-t border-slate-100 pt-8">
<div className="flex flex-col md:flex-row md:justify-between gap-6">
<div>
<div className="flex items-center gap-3">
<div aria-hidden="true" className="rounded-md px-2 py-1 bg-emerald-600 text-white text-lg tracking-tight font-semibold" style={{letterSpacing: '-0.02em'}}>C</div>
<div className="text-sm text-slate-600">CleanGod</div>
</div>
<p className="text-xs text-slate-500 mt-3 max-w-md">CleanGod is a brand by VINROOT MULTIBUSINESS PRIVATE LIMITED — Hygiene is our mission.</p>
</div>
<div className="flex gap-8">
<div>
<div className="text-sm font-medium text-slate-900">Company</div>
<ul className="mt-2 text-sm text-slate-600 space-y-2">
<li><a className="hover:underline" href="#">About</a></li>
<li><a className="hover:underline" href="#">Careers</a></li>
<li><a className="hover:underline" href="#">Partners</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Support</div>
<ul className="mt-2 text-sm text-slate-600 space-y-2">
<li><a className="hover:underline" href="#">Contact</a></li>
<li><a className="hover:underline" href="#">Help Center</a></li>
<li><a className="hover:underline" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-6 text-xs text-slate-400">© <span id="year"></span> VINROOT MULTIBUSINESS PRIVATE LIMITED. All rights reserved.</div>
</footer>
</main>

<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] sm:hidden z-40">
<div className="bg-white rounded-2xl px-4 py-3 shadow-lg ring-1 ring-slate-100 flex gap-3 items-center justify-between">
</div></div>
    </>
  );
}
