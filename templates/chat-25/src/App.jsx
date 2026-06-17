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



        lucide.createIcons();
    
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
      

<div className="bg-red-600 text-white py-2 text-center text-sm font-medium">
        Free nationwide delivery on all orders over $50. <a className="underline hover:text-red-100 transition-colors" href="#">Shop Now</a>
</div>

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20 gap-8">

<a className="flex-shrink-0 flex items-center gap-2" href="#">
<div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
<i className="text-white w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">Value<span className="text-red-600">City</span></span>
</a>

<div className="hidden md:flex flex-1 max-w-2xl">
<div className="relative w-full">
<input className="w-full bg-zinc-100 border-transparent focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-100 rounded-xl py-3 pl-12 pr-4 text-base transition-all duration-200 placeholder-zinc-400" placeholder="Search for products, brands, or categories..." type="text"/>
<i className="absolute left-4 top-3.5 text-zinc-400 w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:flex flex-col items-center gap-1 text-zinc-600 hover:text-red-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Account</span>
</a>
<a className="hidden sm:flex flex-col items-center gap-1 text-zinc-600 hover:text-red-600 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Wishlist</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-600 hover:text-red-600 transition-colors relative" href="#">
<div className="relative">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
</div>
<span className="text-xs font-medium hidden sm:block">Cart</span>
</a>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 py-4 border-t border-zinc-100 overflow-x-auto hide-scrollbar">
<a className="text-base font-medium text-red-600 whitespace-nowrap flex items-center gap-1" href="#">
<i className="w-4 h-4" data-lucide="tag" strokeWidth="1.5"></i> Sale
                </a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 whitespace-nowrap transition-colors" href="#">Home &amp; Living</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 whitespace-nowrap transition-colors" href="#">Appliances</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 whitespace-nowrap transition-colors" href="#">Electronics</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 whitespace-nowrap transition-colors" href="#">Toys &amp; Baby</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 whitespace-nowrap transition-colors" href="#">Health &amp; Beauty</a>
<a className="text-base font-medium text-zinc-600 hover:text-zinc-900 whitespace-nowrap transition-colors" href="#">Office &amp; School</a>
</nav>
</div>
</header>
<main className="flex-grow">

<section className="bg-zinc-50 border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm font-medium w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                            Spring Mega Sale Ends Soon
                        </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-900 leading-tight">
                            Everything you need. <br/>
<span className="text-zinc-500">Exceptional value.</span>
</h1>
<p className="text-lg text-zinc-600 leading-relaxed">
                            Discover thousands of everyday essentials, top brands, and massive savings across home, tech, and family. Quality shopping, simplified.
                        </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="bg-red-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-red-700 transition-colors shadow-sm flex items-center gap-2" href="#">
                                Shop the Sale <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-white text-zinc-900 px-8 py-4 rounded-xl text-base font-medium hover:bg-zinc-50 border border-zinc-200 transition-colors shadow-sm" href="#">
                                Browse Categories
                            </a>
</div>
</div>
<div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
<img alt="Home interior" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 inline-block">
<p className="text-sm font-medium text-red-600 mb-1">Featured Collection</p>
<p className="text-xl font-semibold tracking-tight text-zinc-900">Modern Home Refresh</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Shop by Category</h2>
<a className="hidden sm:flex items-center gap-1 text-base font-medium text-zinc-600 hover:text-red-600 transition-colors" href="#">
                        View All Categories <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">

<a className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100 hover:border-zinc-200 text-center" href="#">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-700" data-lucide="sofa" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900">Home &amp; Living</span>
</a>

<a className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100 hover:border-zinc-200 text-center" href="#">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-700" data-lucide="microwave" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900">Appliances</span>
</a>

<a className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100 hover:border-zinc-200 text-center" href="#">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-700" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900">Electronics</span>
</a>

<a className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100 hover:border-zinc-200 text-center" href="#">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-700" data-lucide="baby" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900">Toys &amp; Baby</span>
</a>

<a className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100 hover:border-zinc-200 text-center" href="#">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-700" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900">Health &amp; Beauty</span>
</a>

<a className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-zinc-100 transition-colors border border-zinc-100 hover:border-zinc-200 text-center" href="#">
<div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-700" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-zinc-900">Stationery</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Trending Now</h2>
<p className="text-lg text-zinc-600">Our most popular products this week.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 relative">
<div className="absolute top-4 left-4 z-10">
<span className="bg-red-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md">Save 20%</span>
</div>
<button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-red-600 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<a className="relative aspect-square bg-zinc-100 overflow-hidden block" href="#">
<img alt="Headphones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</a>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1 mb-2">
<i className="w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-zinc-700">4.8</span>
<span className="text-sm text-zinc-400">(124)</span>
</div>
<a className="text-base font-medium text-zinc-900 line-clamp-2 hover:text-red-600 transition-colors mb-4" href="#">Premium Wireless Noise-Cancelling Headphones</a>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="text-xl font-semibold tracking-tight text-zinc-900">$199.99</span>
<span className="text-sm text-zinc-400 line-through ml-2">$249.99</span>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 relative">
<button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-red-600 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<a className="relative aspect-square bg-zinc-100 overflow-hidden block" href="#">
<img alt="Sneakers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</a>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1 mb-2">
<i className="w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-zinc-700">4.9</span>
<span className="text-sm text-zinc-400">(89)</span>
</div>
<a className="text-base font-medium text-zinc-900 line-clamp-2 hover:text-red-600 transition-colors mb-4" href="#">Everyday Comfort Running Sneakers - Red Edition</a>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="text-xl font-semibold tracking-tight text-zinc-900">$85.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 relative">
<button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-red-600 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<a className="relative aspect-square bg-zinc-100 overflow-hidden block" href="#">
<img alt="Blender" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</a>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1 mb-2">
<i className="w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-zinc-700">4.6</span>
<span className="text-sm text-zinc-400">(42)</span>
</div>
<a className="text-base font-medium text-zinc-900 line-clamp-2 hover:text-red-600 transition-colors mb-4" href="#">Pro-Blend 1000W Countertop Blender</a>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="text-xl font-semibold tracking-tight text-zinc-900">$65.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-300 relative">
<div className="absolute top-4 left-4 z-10">
<span className="bg-zinc-900 text-white text-xs font-semibold px-2.5 py-1 rounded-md">New Arrival</span>
</div>
<button className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-red-600 hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
<i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<a className="relative aspect-square bg-zinc-100 overflow-hidden block" href="#">
<img alt="Headphones" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</a>
<div className="p-5 flex flex-col flex-grow">
<div className="flex items-center gap-1 mb-2">
<i className="w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-zinc-700">5.0</span>
<span className="text-sm text-zinc-400">(8)</span>
</div>
<a className="text-base font-medium text-zinc-900 line-clamp-2 hover:text-red-600 transition-colors mb-4" href="#">Studio Monitor On-Ear Headphones</a>
<div className="mt-auto flex items-center justify-between">
<div>
<span className="text-xl font-semibold tracking-tight text-zinc-900">$120.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative rounded-3xl overflow-hidden bg-zinc-900">
<div className="absolute inset-0">
<img alt="Office setup" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="relative px-8 py-24 sm:px-16 sm:py-32 lg:px-24 flex flex-col items-center text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">Back to Business Essentials</h2>
<p className="text-xl text-zinc-300 max-w-2xl mb-10">Equip your home office or workspace with our curated selection of high-quality stationery, tech, and organization tools.</p>
<a className="bg-white text-zinc-900 px-8 py-4 rounded-xl text-base font-medium hover:bg-zinc-100 transition-colors shadow-lg" href="#">
                            Shop the Collection
                        </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-10">Shop by Room</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative h-80 rounded-2xl overflow-hidden block" href="#">
<img alt="Kitchen" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">The Kitchen</h3>
<p className="text-base text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                                Shop appliances &amp; cookware <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</div>
</a>

<a className="group relative h-80 rounded-2xl overflow-hidden block" href="#">
<img alt="Bedroom" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">The Bedroom</h3>
<p className="text-base text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                                Shop bedding &amp; decor <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</div>
</a>

<a className="group relative h-80 rounded-2xl overflow-hidden block" href="#">
<img alt="Bathroom" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<h3 className="text-2xl font-semibold text-white mb-2">The Bathroom</h3>
<p className="text-base text-zinc-200 group-hover:text-white transition-colors flex items-center gap-2">
                                Shop essentials <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<i className="w-6 h-6" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">Fast Delivery</h4>
<p className="text-sm text-zinc-600">Nationwide shipping on all orders.</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">Secure Payments</h4>
<p className="text-sm text-zinc-600">100% safe &amp; encrypted checkout.</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<i className="w-6 h-6" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">Easy Returns</h4>
<p className="text-sm text-zinc-600">30-day hassle-free return policy.</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<i className="w-6 h-6" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-1">24/7 Support</h4>
<p className="text-sm text-zinc-600">Dedicated customer care team.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="inline-block mb-6" href="#">
<span className="text-2xl font-semibold tracking-tight">Value<span className="text-red-600">City</span></span>
</a>
<p className="text-base text-zinc-600 mb-6 max-w-sm">
                        Your trusted destination for everyday value and premium quality across thousands of products.
                    </p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-6">Shop</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">Best Sellers</a></li>
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">On Sale</a></li>
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-6">Support</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">Help Center</a></li>
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">Track Order</a></li>
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">Returns &amp; Refunds</a></li>
<li><a className="text-base text-zinc-600 hover:text-red-600 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-900 mb-6">Stay Updated</h4>
<p className="text-base text-zinc-600 mb-4">Subscribe to get special offers and updates.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-base focus:bg-white focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all outline-none" placeholder="Enter your email" type="email"/>
<button className="w-full bg-zinc-900 text-white rounded-xl py-3 text-base font-medium hover:bg-zinc-800 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-500">© 2024 Value City. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
