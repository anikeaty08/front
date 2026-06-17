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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<header className="border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex-shrink-0">
<span className="text-xl font-semibold tracking-tight uppercase">Atelier</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">New Arrivals</a>
<a className="text-base font-medium text-gray-900 transition-colors" href="#">Collections</a>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">About</a>
</nav>
<div className="flex items-center gap-6">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-6 h-6" data-lucide="search"></i>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors relative">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs font-medium w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="lg:grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">

<div className="flex flex-col gap-6">

<div className="grid grid-cols-2 gap-2 sm:gap-4 bg-gray-50 p-2 sm:p-4 rounded-2xl">
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200">
<img alt="Model wearing classic washed denim mini skirt with a vintage t-shirt" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900 uppercase tracking-widest shadow-sm">
                            Denim
                        </div>
</div>
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gray-200">
<img alt="Model wearing sleek black faux leather mini skirt in a modern office setting" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900 uppercase tracking-widest shadow-sm">
                            Leather
                        </div>
</div>
</div>
<div className="flex items-center justify-center gap-2 text-gray-500">
<i className="w-5 h-5" data-lucide="zoom-in"></i>
<span className="text-base font-medium">Hover to inspect details</span>
</div>
</div>

<div className="mt-14 sm:mt-16 lg:mt-0 flex flex-col justify-center">

<nav aria-label="Breadcrumb" className="flex text-base font-medium text-gray-500 mb-6">
<ol className="flex items-center space-x-2" role="list">
<li><a className="hover:text-gray-900 transition-colors" href="#">Women</a></li>
<li><svg aria-hidden="true" className="h-5 w-4 text-gray-300" fill="currentColor" height="20" viewbox="0 0 16 20" width="16"><path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"></path></svg></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Skirts</a></li>
</ol>
</nav>

<div>
<h1 className="text-4xl tracking-tight font-semibold text-gray-900 sm:text-5xl">The Dual Mini Skirt</h1>
<p className="text-2xl tracking-tight font-medium text-gray-900 mt-4">$85.00</p>
</div>

<div className="mt-8">
<p className="text-lg text-gray-600 leading-relaxed">
                        A masterclass in versatility. This signature silhouette is offered in two distinct finishes: a classic, vintage-washed denim for effortless weekends, and a sleek, supple faux leather designed to transition seamlessly from desk to dinner. Featuring a flattering mid-rise waist and a subtle A-line cut.
                    </p>
</div>
<form className="mt-10 border-t border-gray-100 pt-10">

<div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Finish</h3>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

<label className="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm focus:outline-none hover:border-gray-300 hover:bg-gray-50 transition-all has-[:checked]:border-gray-900 has-[:checked]:ring-1 has-[:checked]:ring-gray-900">
<input checked="" className="sr-only" name="material" type="radio" value="denim"/>
<span className="flex flex-1 items-center">
<span className="flex flex-col">
<span className="block text-lg font-medium text-gray-900">Vintage Denim</span>
<span className="mt-1 flex items-center text-base text-gray-500">100% Cotton</span>
</span>
</span>
<i className="w-6 h-6 text-gray-900 hidden has-[:checked]:block opacity-0 group-has-[:checked]:opacity-100 transition-opacity absolute right-5 top-1/2 -translate-y-1/2" data-lucide="check-circle-2"></i>
</label>

<label className="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm focus:outline-none hover:border-gray-300 hover:bg-gray-50 transition-all has-[:checked]:border-gray-900 has-[:checked]:ring-1 has-[:checked]:ring-gray-900">
<input className="sr-only" name="material" type="radio" value="leather"/>
<span className="flex flex-1 items-center">
<span className="flex flex-col">
<span className="block text-lg font-medium text-gray-900">Faux Leather</span>
<span className="mt-1 flex items-center text-base text-gray-500">Polyurethane Blend</span>
</span>
</span>
</label>
</div>
</div>

<div className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium text-gray-900">Size</h3>
<a className="text-base font-medium text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors" href="#">Size guide</a>
</div>
<div className="mt-4 grid grid-cols-5 gap-3">
<label className="group relative flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-4 text-lg font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer transition-all has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
<input className="sr-only" name="size" type="radio" value="xs"/>
<span>XS</span>
</label>
<label className="group relative flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-4 text-lg font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer transition-all has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
<input checked="" className="sr-only" name="size" type="radio" value="s"/>
<span>S</span>
</label>
<label className="group relative flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-4 text-lg font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer transition-all has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
<input className="sr-only" name="size" type="radio" value="m"/>
<span>M</span>
</label>
<label className="group relative flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-4 text-lg font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer transition-all has-[:checked]:bg-gray-900 has-[:checked]:text-white has-[:checked]:border-gray-900">
<input className="sr-only" name="size" type="radio" value="l"/>
<span>L</span>
</label>

<label className="group relative flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-4 py-4 text-lg font-medium uppercase text-gray-300 focus:outline-none sm:flex-1 cursor-not-allowed">
<input className="sr-only" disabled="" name="size" type="radio" value="xl"/>
<span>XL</span>
<svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" preserveaspectratio="none" stroke="currentColor" viewbox="0 0 100 100">
<line vector-effect="non-scaling-stroke" x1="0" x2="100" y1="100" y2="0"></line>
</svg>
</label>
</div>
</div>
<button className="mt-10 flex w-full items-center justify-center rounded-xl bg-gray-900 px-8 py-5 text-lg font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors shadow-sm" type="submit">
<i className="w-5 h-5 mr-3" data-lucide="shopping-bag"></i>
                        Add to bag
                    </button>
</form>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-100">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-gray-400" data-lucide="globe"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">International Delivery</h4>
<p className="mt-1 text-base text-gray-500">Get your order in 3-5 business days worldwide.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-gray-400" data-lucide="refresh-ccw"></i>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Free Returns</h4>
<p className="mt-1 text-base text-gray-500">Not quite right? Return it within 30 days.</p>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
