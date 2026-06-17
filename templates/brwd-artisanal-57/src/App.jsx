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
      

<nav className="sticky top-0 z-50 w-full border-b border-black/[0.04] bg-[#FAFAFA]/80 backdrop-blur-md">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex h-14 items-center justify-between">

<div className="flex-shrink-0">
<a className="text-lg font-semibold tracking-tighter text-neutral-900" href="#">
                        B R W D .
                    </a>
</div>

<div className="hidden md:block">
<div className="flex items-center space-x-8">
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#menu">Menu</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#roastery">Roastery</a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900" href="#locations">Locations</a>
</div>
</div>

<div className="flex items-center space-x-4">
<button className="flex items-center justify-center text-neutral-500 transition-colors hover:text-neutral-900">
<iconify-icon height="22" icon="solar:user-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative flex items-center justify-center text-neutral-500 transition-colors hover:text-neutral-900">
<iconify-icon height="22" icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-0 right-0 flex h-2 w-2 items-center justify-center rounded-full bg-neutral-900"></span>
</button>
<button className="md:hidden flex items-center justify-center text-neutral-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow">

<section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">

<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(100%_100%_at_50%_0%,rgba(0,0,0,0.03)_0%,transparent_100%)]"></div>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center rounded-full border border-black/[0.08] bg-white px-3 py-1 text-xs font-medium text-neutral-600 mb-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<span className="flex h-1.5 w-1.5 rounded-full bg-neutral-900 mr-2"></span>
                    Single Origin Ethiopia Guji now available
                </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tighter text-neutral-900 sm:text-6xl lg:text-7xl">
                    Precision in every pour.
                </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 leading-relaxed">
                    We source the finest beans globally and roast them locally. Experience coffee crafted with obsessive attention to detail.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-11 items-center justify-center rounded-md bg-neutral-900 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:shadow-md w-full sm:w-auto" href="#menu">
                        Order Ahead
                        <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex h-11 items-center justify-center rounded-md border border-black/[0.08] bg-white px-6 text-sm font-medium text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:bg-neutral-50 w-full sm:w-auto" href="#roastery">
                        Explore Roastery
                    </a>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12" id="roastery">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl border border-black/[0.04] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f5f5f5_1px,transparent_1px),linear-gradient(to_bottom,#f5f5f5_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
<div className="flex h-full flex-col justify-between">
<div>
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900">The Extraction</h3>
<p className="mt-2 text-sm text-neutral-500 max-w-md">Our custom-built espresso machines monitor pressure and temperature 100 times per second to ensure the perfect shot, every single time.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4" href="#">
                            Learn about our process
                            <iconify-icon className="ml-1 text-base text-neutral-400" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-black/[0.04] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<div>
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Direct Trade</h3>
<p className="mt-2 text-sm text-neutral-500">We work directly with farmers in Colombia and Ethiopia, paying above market rates.</p>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl border border-black/[0.04] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between bg-neutral-900 text-white md:col-span-1">
<div>
<iconify-icon className="text-3xl text-neutral-400 mb-4" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white">Subscribe</h3>
<p className="mt-2 text-sm text-neutral-400">Freshly roasted beans delivered to your door weekly or monthly.</p>
</div>
<button className="mt-6 w-full rounded-md bg-white text-neutral-900 py-2 text-sm font-medium transition-transform active:scale-[0.98]">
                        View Plans
                    </button>
</div>

<div className="md:col-span-2 relative overflow-hidden rounded-2xl border border-black/[0.04] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Fresh Pastries Daily</h3>
<p className="mt-1 text-sm text-neutral-500">Baked in-house every morning.</p>
</div>
<div className="h-20 w-20 rounded-full border border-black/[0.08] flex items-center justify-center bg-[#FAFAFA]">
<iconify-icon className="text-3xl text-neutral-800" icon="solar:pie-chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20" id="menu">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-black/[0.08] pb-6 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Menu Highlights</h2>
<p className="mt-1 text-sm text-neutral-500">Available for dine-in or pickup.</p>
</div>

<div className="flex items-center space-x-3 self-start sm:self-auto">
<span className="text-xs font-medium text-neutral-500">Dine-in</span>
<button aria-checked="false" className="group relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-2 focus:ring-offset-[#FAFAFA]" role="switch" type="button">
<span className="sr-only">Toggle order type</span>
<span aria-hidden="true" className="pointer-events-none absolute h-full w-full rounded-md bg-white"></span>
<span aria-hidden="true" className="pointer-events-none absolute mx-auto h-4 w-8 rounded-full bg-neutral-200 transition-colors duration-200 ease-in-out"></span>
<span aria-hidden="true" className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-black/[0.08] bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out translate-x-0"></span>
</button>
<span className="text-xs font-medium text-neutral-900">Pickup</span>
</div>
</div>
<div className="space-y-2">

<h4 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase pt-4 pb-2">Espresso</h4>

<div className="group flex items-center justify-between rounded-lg p-3 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all cursor-pointer">
<div className="flex-1">
<h5 className="text-sm font-medium text-neutral-900">Espresso</h5>
<p className="text-xs text-neutral-500 mt-0.5">Double shot, seasonal blend.</p>
</div>
<div className="text-sm font-medium text-neutral-900">$3.50</div>
</div>

<div className="group flex items-center justify-between rounded-lg p-3 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all cursor-pointer">
<div className="flex-1">
<h5 className="text-sm font-medium text-neutral-900">Cortado</h5>
<p className="text-xs text-neutral-500 mt-0.5">Equal parts espresso and steamed milk.</p>
</div>
<div className="text-sm font-medium text-neutral-900">$4.00</div>
</div>

<div className="group flex items-center justify-between rounded-lg p-3 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all cursor-pointer">
<div className="flex-1 flex items-center gap-2">
<h5 className="text-sm font-medium text-neutral-900">Flat White</h5>
<span className="inline-flex items-center rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-600">Popular</span>
</div>
<div className="text-sm font-medium text-neutral-900">$4.50</div>
</div>

<h4 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase pt-8 pb-2">Filter</h4>

<div className="group flex items-center justify-between rounded-lg p-3 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all cursor-pointer">
<div className="flex-1">
<h5 className="text-sm font-medium text-neutral-900">Pour Over</h5>
<p className="text-xs text-neutral-500 mt-0.5">Rotating single origin selection.</p>
</div>
<div className="text-sm font-medium text-neutral-900">$5.00</div>
</div>

<div className="group flex items-center justify-between rounded-lg p-3 hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all cursor-pointer">
<div className="flex-1">
<h5 className="text-sm font-medium text-neutral-900">Cold Brew</h5>
<p className="text-xs text-neutral-500 mt-0.5">Steeped 24 hours, smooth and crisp.</p>
</div>
<div className="text-sm font-medium text-neutral-900">$4.50</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
                    View Full Menu
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-black/[0.04] bg-white mt-auto" id="locations">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter text-neutral-900">B R W D .</span>
<p className="mt-4 text-xs text-neutral-500 max-w-xs">Elevating the daily ritual through precision roasting and mindful brewing.</p>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Location</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>124 Coffee Lane</li>
<li>Design District</li>
<li>City, ST 12345</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Hours</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>Mon-Fri: 7am - 5pm</li>
<li>Sat-Sun: 8am - 6pm</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Social</h4>
<div className="flex space-x-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2024 BRWD Roasters. All rights reserved.</p>
<div className="flex space-x-6 text-xs text-neutral-400">
<a className="hover:text-neutral-900" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
