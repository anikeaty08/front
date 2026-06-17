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
      

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full px-2 py-2 shadow-sm flex items-center gap-1 text-xs font-medium">
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#sitemap">Flow</a>
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#home">Home</a>
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#category">Category</a>
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#product">Product</a>
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#builder">AI Builder</a>
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#checkout">Checkout</a>
<a className="px-3 py-1.5 rounded-full hover:bg-zinc-100 transition-colors" href="#services">Services</a>
</div>

<div className="w-full max-w-6xl mx-auto bg-white min-h-screen shadow-sm border-x border-zinc-200 flex flex-col mt-0 relative">

<header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-zinc-100">

<div className="bg-zinc-900 text-zinc-50 text-[0.65rem] uppercase tracking-widest py-1.5 px-6 flex justify-between items-center">
<div className="flex items-center gap-2 cursor-pointer hover:text-zinc-300 transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Delivering to: New York, 10001</span>
</div>
<div>Complimentary shipping on orders over $250</div>
<div className="flex gap-4">
<a className="hover:text-zinc-300" href="#">B2B</a>
<a className="hover:text-zinc-300" href="#">Events</a>
</div>
</div>

<nav className="px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-6 text-sm font-medium">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Curations</a>
<a className="text-zinc-900 flex items-center gap-1" href="#builder">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
                        AI Builder
                    </a>
</div>

<a className="text-xl font-medium tracking-tighter uppercase absolute left-1/2 -translate-x-1/2" href="#home">
                    L U X E
                </a>
<div className="flex items-center gap-5">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1.5 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Account</span>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1.5 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="w-5 h-5 bg-zinc-100 rounded-full flex items-center justify-center text-xs">2</span>
</button>
</div>
</nav>
</header>

<section className="view-section flex-1 p-12" id="sitemap">
<div className="max-w-4xl mx-auto">
<h1 className="text-2xl font-medium tracking-tight mb-2">Platform Architecture &amp; Flow</h1>
<p className="text-sm text-zinc-500 mb-12">High-level user journey and structural map.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="border border-zinc-200 rounded-lg p-4 bg-zinc-50">
<h3 className="text-sm font-medium tracking-tight mb-1">Discovery</h3>
<p className="text-xs text-zinc-500">Homepage, Location setup</p>
</div>
<div className="w-px h-6 bg-zinc-200 mx-auto"></div>
<div className="border border-zinc-200 rounded-lg p-4">
<h3 className="text-sm font-medium tracking-tight mb-1">Navigation</h3>
<p className="text-xs text-zinc-500">Categories, Search, Filtering</p>
</div>
<div className="w-px h-6 bg-zinc-200 mx-auto"></div>
<div className="border border-zinc-200 rounded-lg p-4 bg-zinc-50">
<h3 className="text-sm font-medium tracking-tight mb-1">Product Detail (PDP)</h3>
<p className="text-xs text-zinc-500">Specs, Stock by location, Add</p>
</div>
</div>

<div className="space-y-4 pt-12 md:pt-0">
<div className="border border-zinc-900 rounded-lg p-4 bg-white shadow-sm relative">
<div className="absolute -top-3 right-3 bg-zinc-900 text-white text-[0.6rem] px-2 py-0.5 rounded-full uppercase tracking-wider">Core Feature</div>
<h3 className="text-sm font-medium tracking-tight mb-1 flex items-center gap-1.5">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Builder
                            </h3>
<p className="text-xs text-zinc-500 mb-2">Interactive custom curation</p>
<div className="text-xs space-y-1 text-zinc-400 pl-4 border-l border-zinc-100">
<div>1. Input parameters</div>
<div>2. AI generation</div>
<div>3. Refinement</div>
<div>4. Add to cart</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="border border-zinc-200 rounded-lg p-4 bg-zinc-50">
<h3 className="text-sm font-medium tracking-tight mb-1">Checkout Flow</h3>
<div className="text-xs space-y-1 text-zinc-500">
<div>Cart review</div>
<div className="font-medium text-zinc-900">Multi-address allocation</div>
<div>Delivery scheduling</div>
<div>Payment</div>
</div>
</div>
<div className="w-px h-6 bg-zinc-200 mx-auto"></div>
<div className="border border-zinc-200 rounded-lg p-4">
<h3 className="text-sm font-medium tracking-tight mb-1">Services</h3>
<p className="text-xs text-zinc-500">B2B Portal, Event Booking, Consultations</p>
</div>
</div>
</div>
</div>
</section>

<section className="view-section flex-1" id="home">

<div className="h-[60vh] bg-zinc-100 relative flex items-center justify-center overflow-hidden border-b border-zinc-200">
<div className="absolute inset-0 flex items-center justify-center opacity-5">
<iconify-icon className="text-[20rem]" icon="solar:gallery-minimalistic-linear"></iconify-icon>
</div>
<div className="relative z-10 text-center space-y-4 max-w-xl px-6">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight">Elevated Essentials.</h1>
<p className="text-base text-zinc-500">Curated objects for modern living. Tailored to your location.</p>
<div className="pt-4 flex items-center justify-center gap-3">
<a className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded hover:bg-zinc-800 transition-colors" href="#category">Shop Collection</a>
<a className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded hover:bg-zinc-50 transition-colors flex items-center gap-2" href="#builder">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Build Custom Box
                        </a>
</div>
</div>
</div>

<div className="bg-zinc-50 border-b border-zinc-200 py-3 px-6 flex justify-center items-center gap-2 text-sm">
<iconify-icon className="text-zinc-400" icon="solar:routing-linear"></iconify-icon>
<span className="text-zinc-500">Showing items available for Same-Day Delivery in</span>
<button className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4">New York Area</button>
</div>

<div className="py-16 px-6 max-w-5xl mx-auto">
<div className="flex justify-between items-end mb-8">
<h2 className="text-xl font-medium tracking-tight">Curated Categories</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group block cursor-pointer" href="#category">
<div className="aspect-square bg-zinc-100 rounded-sm mb-3 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-3xl text-zinc-400" icon="solar:sofa-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium">Living</h3>
</a>
<a className="group block cursor-pointer" href="#category">
<div className="aspect-square bg-zinc-100 rounded-sm mb-3 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-3xl text-zinc-400" icon="solar:cup-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium">Dining</h3>
</a>
<a className="group block cursor-pointer" href="#category">
<div className="aspect-square bg-zinc-100 rounded-sm mb-3 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-3xl text-zinc-400" icon="solar:lamp-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium">Lighting</h3>
</a>
<a className="group block cursor-pointer" href="#category">
<div className="aspect-square bg-zinc-100 rounded-sm mb-3 flex items-center justify-center group-hover:bg-zinc-200 transition-colors">
<iconify-icon className="text-3xl text-zinc-400" icon="solar:gift-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium">Gifts</h3>
</a>
</div>
</div>
</section>

<section className="view-section flex-1 px-6 py-8" id="category">

<div className="mb-8">
<div className="text-xs text-zinc-400 flex items-center gap-2 mb-2">
<a className="hover:text-zinc-900" href="#home">Home</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-zinc-900">Living</span>
</div>
<h1 className="text-3xl font-medium tracking-tight">Living Collection</h1>
</div>
<div className="flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-56 flex-shrink-0 space-y-8">

<div>
<h3 className="text-sm font-medium mb-3">Category</h3>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-zinc-300 rounded-sm checked:bg-zinc-900 checked:border-zinc-900 transition-all cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Seating</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-zinc-300 rounded-sm checked:bg-zinc-900 checked:border-zinc-900 transition-all cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute text-white text-xs opacity-0 peer-checked:opacity-100 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Tables</span>
</label>
</div>
</div>

<div>
<h3 className="text-sm font-medium mb-3">Price</h3>
<div className="h-1 bg-zinc-200 rounded-full relative mb-4 mt-2">
<div className="absolute left-1/4 right-1/4 h-full bg-zinc-900 rounded-full"></div>
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-zinc-900 rounded-full shadow-sm cursor-pointer"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-zinc-900 rounded-full shadow-sm cursor-pointer"></div>
</div>
<div className="flex justify-between text-xs text-zinc-500">
<span>$100</span>
<span>$1,500</span>
</div>
</div>

<div>
<h3 className="text-sm font-medium mb-3">Availability</h3>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-sm text-zinc-600">Same Day Delivery</span>
<div className="relative inline-flex items-center">
<input className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
</label>
</div>
</aside>

<div className="flex-1">

<div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-100">
<span className="text-sm text-zinc-500">Showing 24 products</span>

<div className="relative group cursor-pointer">
<div className="flex items-center gap-2 text-sm border border-zinc-200 px-3 py-1.5 rounded bg-white">
                                Sort: Featured <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group block">
<a className="block aspect-[4/5] bg-zinc-100 rounded-sm mb-4 relative overflow-hidden" href="#product">
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[0.65rem] px-2 py-0.5 rounded uppercase tracking-wider font-medium">New</div>
</a>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium tracking-tight"><a className="hover:underline" href="#product">Minimalist Lounge Chair</a></h3>
<p className="text-xs text-zinc-500 mt-0.5">Boucle / Cream</p>
</div>
<span className="text-sm font-medium">$850</span>
</div>
<button className="w-full mt-3 py-2 border border-zinc-200 text-xs font-medium rounded hover:bg-zinc-50 transition-colors">Add to Cart</button>
</div>

<div className="group block">
<a className="block aspect-[4/5] bg-zinc-100 rounded-sm mb-4 relative overflow-hidden flex items-center justify-center" href="#product">
<iconify-icon className="text-4xl text-zinc-300" icon="solar:gallery-minimalistic-linear"></iconify-icon>
</a>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium tracking-tight"><a className="hover:underline" href="#product">Side Table</a></h3>
<p className="text-xs text-zinc-500 mt-0.5">Walnut</p>
</div>
<span className="text-sm font-medium">$320</span>
</div>
<button className="w-full mt-3 py-2 border border-zinc-200 text-xs font-medium rounded hover:bg-zinc-50 transition-colors">Add to Cart</button>
</div>

<div className="group block opacity-60">
<div className="aspect-[4/5] bg-zinc-100 rounded-sm mb-4 relative overflow-hidden"></div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium tracking-tight">Ceramic Vase</h3>
<p className="text-xs text-zinc-500 mt-0.5">Matte Black</p>
</div>
<span className="text-sm font-medium">$110</span>
</div>
<button className="w-full mt-3 py-2 border border-zinc-200 bg-zinc-50 text-zinc-400 text-xs font-medium rounded cursor-not-allowed">Out of Stock</button>
</div>
</div>
</div>
</div>
</section>

<section className="view-section flex-1 px-6 py-8" id="product">
<div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">

<div className="w-full md:w-1/2 space-y-4">
<div className="aspect-square bg-zinc-100 rounded-sm flex items-center justify-center relative">
<iconify-icon className="text-5xl text-zinc-300" icon="solar:gallery-minimalistic-linear"></iconify-icon>

<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur border border-zinc-200 text-xs px-3 py-1.5 rounded shadow-sm flex items-center gap-2">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<span>In Stock at NY Warehouse</span>
</div>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square bg-zinc-100 rounded-sm border-2 border-zinc-900 cursor-pointer"></div>
<div className="aspect-square bg-zinc-100 rounded-sm cursor-pointer opacity-70 hover:opacity-100"></div>
<div className="aspect-square bg-zinc-100 rounded-sm cursor-pointer opacity-70 hover:opacity-100"></div>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col pt-4">
<div className="text-xs text-zinc-500 mb-2 uppercase tracking-wider">Living Room</div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Minimalist Lounge Chair</h1>
<div className="text-xl font-medium mb-6">$850.00</div>
<p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                        A study in reduction. This lounge chair combines premium textural boucle with a structural internal frame, offering both striking aesthetics and unexpected comfort.
                    </p>

<div className="mb-8 space-y-6">
<div>
<div className="text-sm font-medium mb-3 flex justify-between">
<span>Color: <span className="text-zinc-500">Cream Boucle</span></span>
</div>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-[#F5F5F0]"></button>
<button className="w-8 h-8 rounded-full border border-zinc-200 bg-[#2A2A2A] hover:border-zinc-400"></button>
</div>
</div>

<div className="border border-zinc-200 rounded p-4 bg-zinc-50 space-y-3">
<h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">Delivery Options to 10001</h3>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="mt-0.5 relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-zinc-300 rounded-full checked:border-zinc-900 transition-all cursor-pointer" name="delivery" type="radio"/>
<div className="w-2 h-2 bg-zinc-900 rounded-full absolute opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium">Standard Shipping <span className="text-zinc-500 font-normal ml-2">Free</span></div>
<div className="text-xs text-zinc-500 mt-0.5">Arrives by Thu, Oct 26</div>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="mt-0.5 relative flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-zinc-300 rounded-full checked:border-zinc-900 transition-all cursor-pointer" name="delivery" type="radio"/>
<div className="w-2 h-2 bg-zinc-900 rounded-full absolute opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all"></div>
</div>
<div className="flex-1">
<div className="text-sm font-medium">Same-Day Courier <span className="text-zinc-500 font-normal ml-2">$25</span></div>
<div className="text-xs text-zinc-500 mt-0.5">Order within 2 hrs 14 mins</div>
</div>
</label>
</div>
</div>

<div className="flex gap-4 mt-auto">
<button className="flex-1 bg-zinc-900 text-white py-3.5 rounded text-sm font-medium hover:bg-zinc-800 transition-colors">Add to Cart</button>
<button className="w-12 h-[52px] border border-zinc-200 rounded flex items-center justify-center hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
</div>

<div className="mt-12 border-t border-zinc-200">
<button className="w-full py-4 flex justify-between items-center text-sm font-medium text-left">
                            Dimensions &amp; Specs
                            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="w-full py-4 flex justify-between items-center text-sm font-medium text-left border-t border-zinc-100">
                            Care Instructions
                            <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="view-section flex-1 bg-zinc-50" id="builder">
<div className="max-w-5xl mx-auto px-6 py-12">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-4 border border-zinc-100">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight mb-2">AI Curation Studio</h1>
<p className="text-sm text-zinc-500 max-w-md mx-auto">Tell us the occasion, recipient, and budget. Our AI will curate a bespoke gift box from our premium catalog.</p>
</div>
<div className="bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[500px]">

<div className="w-full md:w-5/12 p-8 border-r border-zinc-100 flex flex-col">

<div className="flex gap-2 mb-8">
<div className="h-1 flex-1 bg-zinc-900 rounded-full"></div>
<div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
<div className="h-1 flex-1 bg-zinc-200 rounded-full"></div>
</div>
<h2 className="text-lg font-medium tracking-tight mb-6">Step 1: The Recipient</h2>
<div className="space-y-6 flex-1">

<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Occasion</label>

<div className="border border-zinc-200 rounded px-3 py-2.5 flex justify-between items-center text-sm cursor-pointer hover:border-zinc-300">
<span>Housewarming</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Aesthetic Preference</label>
<div className="grid grid-cols-2 gap-3">
<button className="border border-zinc-900 bg-zinc-50 py-2 text-sm font-medium rounded">Minimalist</button>
<button className="border border-zinc-200 py-2 text-sm text-zinc-500 rounded hover:border-zinc-300">Warm &amp; Cozy</button>
<button className="border border-zinc-200 py-2 text-sm text-zinc-500 rounded hover:border-zinc-300">Industrial</button>
<button className="border border-zinc-200 py-2 text-sm text-zinc-500 rounded hover:border-zinc-300">Classic</button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Target Budget</label>
<div className="flex items-center gap-4">
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-900" max="1000" min="100" type="range" value="300"/>
<span className="text-sm font-medium w-12 text-right">$300</span>
</div>
</div>
</div>
<button className="w-full bg-zinc-900 text-white py-3 rounded text-sm font-medium hover:bg-zinc-800 transition-colors mt-8 flex items-center justify-center gap-2">
<iconify-icon icon="solar:stars-linear"></iconify-icon> Generate Concepts
                        </button>
</div>

<div className="w-full md:w-7/12 bg-zinc-50 p-8 flex flex-col items-center justify-center relative">

<div className="absolute inset-0 bg-zinc-50 flex flex-col items-center justify-center z-10 opacity-0 pointer-events-none transition-opacity">
<iconify-icon className="text-4xl text-zinc-300 animate-spin mb-4" icon="solar:refresh-circle-linear"></iconify-icon>
<p className="text-sm text-zinc-500 font-medium tracking-tight">Curating selections...</p>
</div>

<div className="text-center">
<div className="w-32 h-32 bg-white border border-dashed border-zinc-300 rounded-full mx-auto mb-6 flex items-center justify-center">
<iconify-icon className="text-3xl text-zinc-300" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<p className="text-sm text-zinc-400 max-w-xs mx-auto">Your personalized curation will appear here based on your parameters.</p>
</div>
</div>
</div>
</div>
</section>

<section className="view-section flex-1 bg-zinc-50" id="checkout">
<div className="max-w-5xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">

<div className="flex-1 space-y-8">
<div>
<h1 className="text-2xl font-medium tracking-tight mb-2">Review Cart</h1>
<p className="text-sm text-zinc-500">3 items in your order.</p>
</div>

<div className="bg-white border border-zinc-200 rounded p-5 flex items-start gap-4">
<div className="pt-0.5">
<iconify-icon className="text-xl text-zinc-400" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<h3 className="text-sm font-medium">Ship to Multiple Addresses</h3>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
</label>
</div>
<p className="text-xs text-zinc-500">Send items to different locations. Perfect for corporate gifting or families.</p>
</div>
</div>

<div className="space-y-6">

<div className="flex gap-4 p-4 bg-white border border-zinc-100 rounded shadow-sm">
<div className="w-20 h-24 bg-zinc-100 rounded-sm flex-shrink-0"></div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium">Minimalist Lounge Chair</h4>
<div className="text-xs text-zinc-500 mt-1">Cream Boucle</div>
</div>
<div className="text-sm font-medium">$850</div>
</div>
<div className="mt-auto flex justify-between items-end">
<div className="text-xs underline text-zinc-500 cursor-pointer hover:text-zinc-900">Remove</div>

<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 uppercase tracking-wider">Destination:</span>
<div className="border border-zinc-200 text-xs px-2 py-1 rounded bg-zinc-50 flex items-center gap-1 cursor-pointer">
<span>Office - NY</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white border border-zinc-100 rounded shadow-sm">
<div className="w-20 h-24 bg-zinc-100 rounded-sm flex-shrink-0"></div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium">Ceramic Vase</h4>
<div className="text-xs text-zinc-500 mt-1">Matte Black</div>
</div>
<div className="text-sm font-medium">$110</div>
</div>
<div className="mt-auto flex justify-between items-end">
<div className="text-xs underline text-zinc-500 cursor-pointer hover:text-zinc-900">Remove</div>

<div className="flex items-center gap-2">
<span className="text-xs text-zinc-500 uppercase tracking-wider">Destination:</span>
<div className="border border-zinc-200 text-xs px-2 py-1 rounded bg-zinc-50 flex items-center gap-1 cursor-pointer">
<span className="text-zinc-400">Select Address</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[380px]">
<div className="bg-white border border-zinc-200 rounded p-6 sticky top-24">
<h2 className="text-sm font-medium mb-4 uppercase tracking-wider">Order Summary</h2>
<div className="space-y-3 text-sm mb-6 pb-6 border-b border-zinc-100">
<div className="flex justify-between">
<span className="text-zinc-500">Subtotal</span>
<span>$960.00</span>
</div>

<div className="flex justify-between items-start">
<div className="flex flex-col">
<span className="text-zinc-500">Shipping (2 Destinations)</span>
<span className="text-[0.65rem] text-zinc-400 mt-0.5">NY (Free) + CA ($15)</span>
</div>
<span>$15.00</span>
</div>
<div className="flex justify-between">
<span className="text-zinc-500">Tax</span>
<span>$82.50</span>
</div>
</div>
<div className="flex justify-between items-end mb-8">
<span className="text-sm font-medium">Total</span>
<span className="text-xl font-medium tracking-tight">$1,057.50</span>
</div>
<button className="w-full bg-zinc-900 text-white py-3.5 rounded text-sm font-medium hover:bg-zinc-800 transition-colors mb-3">
                            Proceed to Payment
                        </button>
<p className="text-[0.65rem] text-zinc-400 text-center flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> Secure Encrypted Checkout
                        </p>
</div>
</div>
</div>
</section>

<section className="view-section flex-1" id="services">

<div className="bg-zinc-900 text-white px-6 py-20 text-center">
<h1 className="text-3xl font-medium tracking-tight mb-4">Dedicated Services</h1>
<p className="text-sm text-zinc-400 max-w-xl mx-auto mb-8">From corporate gifting at scale to bespoke event styling and one-on-one design consultations.</p>
</div>

<div className="border-b border-zinc-200 px-6 flex justify-center gap-8 text-sm font-medium">
<button className="py-4 border-b-2 border-zinc-900 text-zinc-900">Consultations</button>
<button className="py-4 border-b-2 border-transparent text-zinc-500 hover:text-zinc-900">B2B / Corporate</button>
<button className="py-4 border-b-2 border-transparent text-zinc-500 hover:text-zinc-900">Event Styling</button>
</div>

<div className="max-w-4xl mx-auto px-6 py-16">
<div className="flex flex-col md:flex-row gap-12 bg-white border border-zinc-200 rounded-lg shadow-sm p-8">

<div className="w-full md:w-1/3 border-r border-zinc-100 pr-8">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 border border-zinc-200">
<iconify-icon className="text-xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight mb-2">Design Consultation</h2>
<p className="text-sm text-zinc-500 mb-6">Book a 45-minute video call with our curatorial team to discuss your space or gifting needs.</p>
<div className="text-sm space-y-3">
<div className="flex items-center gap-2 text-zinc-600"><iconify-icon icon="solar:videocamera-linear"></iconify-icon> Video Call</div>
<div className="flex items-center gap-2 text-zinc-600"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 45 Minutes</div>
<div className="flex items-center gap-2 text-zinc-600"><iconify-icon icon="solar:wallet-linear"></iconify-icon> Complimentary</div>
</div>
</div>

<div className="w-full md:w-2/3 flex flex-col md:flex-row gap-8">

<div className="flex-1">
<h3 className="text-sm font-medium mb-4 flex items-center justify-between">
                                October 2023
                                <div className="flex gap-2">
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</h3>
<div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-zinc-400 font-medium">
<div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-sm">

<div className="py-2 text-zinc-300">1</div><div className="py-2 text-zinc-300">2</div><div className="py-2 text-zinc-300">3</div>

<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">4</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">5</div>
<div className="py-2 bg-zinc-900 text-white rounded font-medium shadow-sm">6</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">7</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">8</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">9</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">10</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">11</div>
<div className="py-2 hover:bg-zinc-100 rounded cursor-pointer">12</div>
</div>
</div>

<div className="w-40 border-l border-zinc-100 pl-8">
<h3 className="text-sm font-medium mb-4 text-zinc-500">Friday, Oct 6</h3>
<div className="space-y-2 max-h-[250px] overflow-y-auto custom-scrollbar pr-2">
<button className="w-full py-2 border border-zinc-200 rounded text-sm text-zinc-600 hover:border-zinc-400 transition-colors">09:00 AM</button>
<button className="w-full py-2 border border-zinc-200 rounded text-sm text-zinc-600 hover:border-zinc-400 transition-colors">10:30 AM</button>
<button className="w-full py-2 border-2 border-zinc-900 bg-zinc-50 rounded text-sm font-medium text-zinc-900 shadow-sm relative">
                                    11:00 AM
                                    <iconify-icon className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-900" icon="solar:check-circle-bold"></iconify-icon>
</button>
<button className="w-full py-2 border border-zinc-200 rounded text-sm text-zinc-600 hover:border-zinc-400 transition-colors">01:00 PM</button>
<button className="w-full py-2 border border-zinc-200 rounded text-sm text-zinc-600 hover:border-zinc-400 transition-colors">02:30 PM</button>
</div>
<button className="w-full mt-6 bg-zinc-900 text-white py-2.5 rounded text-sm font-medium hover:bg-zinc-800 transition-colors">Confirm</button>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-zinc-200 py-12 px-6 bg-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-medium tracking-tighter uppercase">L U X E</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900" href="#">About</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-400">© 2023 Wireframe Prototype.</div>
</div>
</footer>
</div>

    </>
  );
}
