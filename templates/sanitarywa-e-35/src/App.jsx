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
      
<header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
<a className="inline-flex items-center text-2xl font-bold uppercase tracking-tight text-blue-700" href="#">GET WET</a>
<nav className="flex flex-wrap items-center gap-4 sm:gap-6">
<a className="text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition hover:text-blue-700" href="#">Sanitaryware</a>
<a className="text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition hover:text-blue-700" href="#">Faucets</a>
<a className="text-xs font-medium uppercase tracking-[0.12em] text-blue-700" href="#">Showers</a>
<a className="text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition hover:text-blue-700" href="#">Accessories</a>
<a className="text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition hover:text-blue-700" href="#">Contact Us</a>
</nav>
</div>
</div>
</header>
<main className="">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center gap-2 py-5 text-xs text-slate-500">
<a className="transition hover:text-blue-700" href="#">Home</a>
<span>/</span>
<a className="transition hover:text-blue-700" href="#">Showers</a>
<span>/</span>
<span className="text-slate-700">Exposed Shower Pipe For Wall Mixer</span>
</div>
<section className="grid gap-8 pb-16 pt-2 lg:grid-cols-2 lg:gap-14">
<div className="rounded-2xl border border-slate-200 bg-slate-50">
<div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-2xl p-6 sm:p-10">
<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_60%)]"></div>
<img alt="Exposed Shower Pipe" className="w-auto max-h-[26rem] object-contain z-10 relative" src="https://www.plumberbathware.com/images/359488283U-EXARM.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="flex flex-col justify-start">
<div className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">Showers</div>
<h1 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Exposed Shower Pipe for Wall Mixer
          </h1>
<div className="mt-4 border-b border-slate-200 pb-5 text-sm text-slate-500">
            PRODUCT CODE : <span className="font-medium text-slate-700">GW-EXARM</span>
</div>
<div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
<p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Product Detail</p>
<p className="">
              Premium Exposed Shower Pipe for Wall Mixer with Heavy-duty Wall Bracket. Built with precision engineering to guarantee a lifetime of performance. Dimensions: 1400mm x 390mm. Finish: Chrome.
            </p>
</div>
<div className="mt-8 flex flex-wrap items-end gap-3">
<div className="text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl">MRP ₹ 7,550.00</div>
<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-blue-700">Premium Finish</span>
</div>
<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition hover:bg-blue-800">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:chat-round-dots-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
              Enquire Now
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-700 bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-blue-700 transition hover:bg-blue-700 hover:text-white">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:map-point-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
              Store Locator
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-medium uppercase tracking-[0.12em] text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:heart-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
              Add to Favorites
            </button>
</div>
<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl bg-blue-100 p-2 text-blue-700">
<iconify-icon data-height="20" data-width="20" height="20" icon="solar:download-linear" style={{color: 'currentColor'}} width="20"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<h4 className="text-sm font-semibold text-slate-900">Download Details</h4>
<div className="mt-3 space-y-2">
<a className="flex items-center gap-2 text-sm font-medium text-blue-700 underline underline-offset-4" href="#">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:file-text-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
                    Download Brochure (PDF)
                  </a>
<a className="flex items-center gap-2 text-sm font-medium text-blue-700 underline underline-offset-4" href="#">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:book-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
                    Get Wet Brand Catalogue
                  </a>
</div>
</div>
</div>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-200 p-4">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:ruler-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-[0.12em]">Dimensions</span>
</div>
<p className="mt-2 text-sm font-medium text-slate-900">1400mm × 390mm</p>
</div>
<div className="rounded-2xl border border-slate-200 p-4">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:pallete-2-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-[0.12em]">Finish</span>
</div>
<p className="mt-2 text-sm font-medium text-slate-900">Chrome</p>
</div>
<div className="rounded-2xl border border-slate-200 p-4">
<div className="flex items-center gap-2 text-slate-500">
<iconify-icon data-height="18" data-width="18" height="18" icon="solar:shield-check-linear" style={{color: 'currentColor'}} width="18"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-[0.12em]">Warranty</span>
</div>
<p className="mt-2 text-sm font-medium text-slate-900">Performance Assured</p>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-200 py-16">
<div className="mb-8 flex items-end justify-between gap-4">
<h2 className="text-2xl font-semibold uppercase tracking-tight text-slate-900 sm:text-3xl">Related Products</h2>
<a className="hidden text-xs font-medium uppercase tracking-[0.12em] text-blue-700 sm:inline-flex" href="#">View All</a>
</div>
<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
<article className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
<div className="overflow-hidden rounded-xl bg-slate-50">
<img alt="Rain Shower" className="transition duration-300 group-hover:scale-[1.02] w-full h-52 object-cover" src="https://www.plumberbathware.com/images/1737428035ACR-3145.jpg?w=800&amp;q=80"/>
</div>
<div className="mt-4">
<h4 className="text-base font-semibold text-slate-900">Single Lever Basin Mixer High Neck</h4>
<p className="leading-6 text-sm text-slate-500 mt-2">Single Lever Basin Mixer High Neck with 265mm Extended Body &amp; 450mm Long Flexible Connectors</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-700 transition hover:bg-blue-700 hover:text-white" href="#">
                View Details
                <iconify-icon data-height="16" data-width="16" height="16" icon="solar:arrow-right-linear" style={{color: 'currentColor'}} width="16"></iconify-icon>
</a>
</div>
</article>
<article className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
<div className="overflow-hidden rounded-xl bg-slate-50">
<img alt="Hand Shower" className="transition duration-300 group-hover:scale-[1.02] w-full h-52 object-cover" src="https://www.plumberbathware.com/images/314354684CPO-4105.jpg?w=800&amp;q=80"/>
</div>
<div className="mt-4">
<h4 className="text-base font-semibold text-slate-900">Wall Spout</h4>
<p className="leading-6 text-sm text-slate-500 mt-2">Wall Spout with Wall Flange</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-700 transition hover:bg-blue-700 hover:text-white" href="#">
                View Details
                <iconify-icon data-height="16" data-width="16" height="16" icon="solar:arrow-right-linear" style={{color: 'currentColor'}} width="16"></iconify-icon>
</a>
</div>
</article>
<article className="group rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
<div className="overflow-hidden rounded-xl bg-slate-50">
<img alt="Slide Rail" className="transition duration-300 group-hover:scale-[1.02] w-full h-52 object-cover" src="https://www.plumberbathware.com/images/222752323PM-3145.jpg?w=800&amp;q=80"/>
</div>
<div className="mt-4">
<h4 className="text-base font-semibold text-slate-900">Single Lever Pillar Cock
PM-1101Purchase AssistantSingle Lever Pillar Cock: </h4>
<p className="leading-6 text-sm text-slate-500 mt-2">Neck: Single Lever Pillar Cock High Neck (Lifting Type ...</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-700 transition hover:bg-blue-700 hover:text-white" href="#">
                View Details
                <iconify-icon className="" data-height="16" data-width="16" height="16" icon="solar:arrow-right-linear" style={{color: 'currentColor'}} width="16"></iconify-icon>
</a>
</div>
</article>
<article className="group transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60 bg-white border-slate-200 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="overflow-hidden rounded-xl bg-slate-50">
<img alt="Shower Bracket" className="transition duration-300 group-hover:scale-[1.02] w-full h-52 object-cover" src="https://www.plumberbathware.com/images/1387089365DUN-UP17.png?w=800&amp;q=80"/>
</div>
<div className="mt-4">
<h4 className="text-base font-semibold text-slate-900">Exposed Set</h4>
<p className="leading-6 text-sm text-slate-500 mt-2">Exposed Set for Single Lever Concealed Basin Mixer (Suitable for U-3117)</p>
<a className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-700 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-700 transition hover:bg-blue-700 hover:text-white" href="#">
                View Details
                <iconify-icon data-height="16" data-width="16" height="16" icon="solar:arrow-right-linear" style={{color: 'currentColor'}} width="16"></iconify-icon>
</a>
</div>
</article>
</div>
</section>
</div>
</main>
<footer className="bg-slate-950 text-white">
<div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
<div className="grid gap-10 py-14 sm:grid-cols-2 xl:grid-cols-4">
<div className="">
<h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Get Wet Bathware</h4>
<p className="mt-4 text-sm leading-7 text-slate-400">
            HQ: Sector 65, Tech Park<br/>
            Mumbai - 400001, India
          </p>
<p className="mt-3 text-sm leading-7 text-slate-400">
            +91 98765 43210<br/>
            info@getwetbrand.com
          </p>
</div>
<div className="">
<h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Categories</h4>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-slate-400 transition hover:text-white" href="#">Sanitaryware</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Faucets</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Showers</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Customer Corner</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Store Locator</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Performance Warranty</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Dealership Enquiry</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Purchase Assistant</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">Quick Links</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">About Us</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Downloads</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Media &amp; PR</a></li>
<li><a className="text-sm text-slate-400 transition hover:text-white" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
        © 2026 Get Wet Bathware | All rights reserved.
      </div>
</div>
</footer>

    </>
  );
}
