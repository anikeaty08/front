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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
<span className="text-lg font-semibold tracking-tight text-white">AM</span>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 hidden sm:block">AsgarMart</span>
</div>

<div className="flex-1 max-w-2xl hidden md:flex relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-slate-100 hover:bg-slate-200/80 focus:bg-white border border-transparent focus:border-blue-500 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none transition-all duration-300" placeholder="Search for products, brands and more..." type="text"/>
</div>

<div className="flex items-center gap-5 sm:gap-6">
<button className="md:hidden text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-xs font-medium hidden lg:block">Login</span>
</button>
<button className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors relative group cursor-pointer">
<span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:right-auto sm:left-3 bg-emerald-500 text-white text-xs font-medium px-1.5 py-0.5 rounded-full z-10 border-2 border-white">3</span>
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium hidden lg:block">Cart</span>
</button>
</div>
</div>
</nav>

<main className="pb-24">

<section className="max-w-7xl mx-auto px-4 py-6">
<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-emerald-50 border border-slate-200/60 p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 min-h-[40vh] shadow-sm">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
<div className="flex-1 space-y-5 relative z-10">
<div className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Big Saving Days Live
                    </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
                        Premium Quality.<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Unbeatable Prices.</span>
</h1>
<p className="text-slate-500 text-base md:text-lg max-w-md font-normal leading-relaxed">
                        Shop the latest trends with guaranteed lowest prices. Enjoy Cash on Delivery and free shipping on your first order.
                    </p>
<div className="pt-2">
<button className="bg-slate-900 text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2 group">
                            Explore Offers
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-2">
<div className="flex gap-3 overflow-x-auto hide-scrollbar pb-4 snap-x">
<button className="snap-start whitespace-nowrap bg-slate-900 text-white border border-slate-900 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all shadow-sm">All Products</button>
<button className="snap-start whitespace-nowrap hover:border-slate-300 hover:text-slate-900 transition-all text-sm font-medium text-slate-600 bg-white border-slate-200 border rounded-2xl pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm">Men's Fashion</button>
<button className="snap-start whitespace-nowrap bg-white text-slate-600 border border-slate-200 px-5 py-2.5 rounded-2xl text-sm font-medium hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm">Women's Ethnic</button>
<button className="snap-start whitespace-nowrap bg-white text-slate-600 border border-slate-200 px-5 py-2.5 rounded-2xl text-sm font-medium hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm">Kids Clothing</button>
<button className="snap-start whitespace-nowrap bg-white text-slate-600 border border-slate-200 px-5 py-2.5 rounded-2xl text-sm font-medium hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm">Electronics</button>
<button className="snap-start whitespace-nowrap bg-white text-slate-600 border border-slate-200 px-5 py-2.5 rounded-2xl text-sm font-medium hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm">Islamic Products</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-8">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Trending Now</h2>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">View All <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">

<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col">
<div className="aspect-product bg-slate-100 relative overflow-hidden">
<img alt="Men's Kurta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-emerald-600 border border-emerald-100 flex items-center gap-1">
<iconify-icon icon="solar:tag-linear"></iconify-icon> 45% OFF
                        </div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="text-sm font-medium text-slate-900 truncate mb-1">Premium Cotton Kurta</h3>
<div className="flex items-center gap-1 mb-2">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon className="text-slate-300" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-normal">(124)</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-lg font-semibold text-slate-900">₹899</span>
<span className="text-xs text-slate-400 line-through mb-1 font-normal">₹1,699</span>
</div>
<div className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50/80 px-2 py-1 rounded w-fit mb-4 font-medium border border-blue-100/50">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> COD Available
                        </div>
<button className="mt-auto w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-2.5 text-sm font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">Add to Cart</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col">
<div className="aspect-product bg-slate-100 relative overflow-hidden">
<img alt="Women's Saree" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-emerald-600 border border-emerald-100 flex items-center gap-1">
<iconify-icon icon="solar:tag-linear"></iconify-icon> 60% OFF
                        </div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="text-sm font-medium text-slate-900 truncate mb-1">Embroidered Silk Saree</h3>
<div className="flex items-center gap-1 mb-2">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-normal">(856)</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-lg font-semibold text-slate-900">₹1,249</span>
<span className="text-xs text-slate-400 line-through mb-1 font-normal">₹3,199</span>
</div>
<div className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50/80 px-2 py-1 rounded w-fit mb-4 font-medium border border-blue-100/50">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> COD Available
                        </div>
<button className="mt-auto w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-2.5 text-sm font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">Add to Cart</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col">
<div className="aspect-product bg-slate-100 relative overflow-hidden flex items-center justify-center p-6">
<img alt="Smart Watch" className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-emerald-600 border border-emerald-100 flex items-center gap-1">
<iconify-icon icon="solar:tag-linear"></iconify-icon> 20% OFF
                        </div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="text-sm font-medium text-slate-900 truncate mb-1">Aero Smartwatch Series 7</h3>
<div className="flex items-center gap-1 mb-2">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-normal">(2.1k)</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-lg font-semibold text-slate-900">₹1,999</span>
<span className="text-xs text-slate-400 line-through mb-1 font-normal">₹2,499</span>
</div>
<div className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50/80 px-2 py-1 rounded w-fit mb-4 font-medium border border-blue-100/50">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> COD Available
                        </div>
<button className="hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all text-sm font-medium text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-xl mt-auto pt-2.5 pb-2.5">Add to Cart</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col">
<div className="aspect-product bg-slate-100 relative overflow-hidden">
<img alt="Islamic Prayer Mat" className="group-hover:scale-105 transition-transform duration-700 ease-in-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="text-sm font-medium text-slate-900 truncate mb-1">Premium Velvet Janamaz</h3>
<div className="flex items-center gap-1 mb-2">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon className="text-slate-300" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-normal">(42)</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-lg font-semibold text-slate-900">₹450</span>
<span className="text-xs text-slate-400 line-through mb-1 font-normal">₹699</span>
</div>
<div className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50/80 px-2 py-1 rounded w-fit mb-4 font-medium border border-blue-100/50">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> COD Available
                        </div>
<button className="mt-auto w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-2.5 text-sm font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">Add to Cart</button>
</div>
</div>

<div className="hidden xl:flex bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex-col">
<div className="aspect-product bg-slate-100 relative overflow-hidden p-6 flex items-center justify-center">
<img alt="Kids Shoes" className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-multiply" src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-emerald-600 border border-emerald-100 flex items-center gap-1">
<iconify-icon icon="solar:tag-linear"></iconify-icon> 30% OFF
                        </div>
</div>
<div className="p-4 flex flex-col flex-1">
<h3 className="text-sm font-medium text-slate-900 truncate mb-1">Kids Light-up Sneakers</h3>
<div className="flex items-center gap-1 mb-2">
<div className="flex text-amber-400 text-xs">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-normal">(310)</span>
</div>
<div className="flex items-end gap-2 mb-2">
<span className="text-lg font-semibold text-slate-900">₹699</span>
<span className="text-xs text-slate-400 line-through mb-1 font-normal">₹999</span>
</div>
<div className="inline-flex items-center gap-1 text-xs text-blue-600 bg-blue-50/80 px-2 py-1 rounded w-fit mb-4 font-medium border border-blue-100/50">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon> COD Available
                        </div>
<button className="mt-auto w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-2.5 text-sm font-medium hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">Add to Cart</button>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4"><div className="h-px bg-slate-200/80 w-full my-8"></div></div>

<section className="max-w-7xl mx-auto px-4 py-8">
<h2 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Product Detail Preview</h2>
<div className="bg-white rounded-3xl border border-slate-200/80 p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-10 shadow-sm">

<div className="w-full lg:w-1/2 flex flex-col gap-4">
<div className="aspect-[4/5] md:aspect-square bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex items-center justify-center p-8">
<img alt="Premium Cotton Kurta" className="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-3 overflow-x-auto hide-scrollbar">
<div className="w-20 h-20 rounded-xl border-2 border-slate-900 overflow-hidden cursor-pointer flex-shrink-0">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-20 h-20 rounded-xl border border-slate-200 opacity-60 hover:opacity-100 overflow-hidden cursor-pointer flex-shrink-0 transition-opacity">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-20 h-20 rounded-xl border border-slate-200 opacity-60 hover:opacity-100 overflow-hidden cursor-pointer flex-shrink-0 transition-opacity">
<img alt="Thumb" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col">
<div className="mb-6">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-2">Premium Cotton Kurta for Men</h1>
<div className="flex items-center gap-3 mb-4">
<div className="flex items-center gap-1 bg-amber-50 text-amber-600 px-2 py-1 rounded text-xs font-medium">
                                4.4 <iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">124 Ratings</span>
</div>
<div className="flex items-end gap-3 mb-1">
<span className="text-3xl font-semibold tracking-tight text-slate-900">₹899</span>
<span className="text-lg text-slate-400 line-through mb-1 font-normal">₹1,699</span>
<span className="text-sm font-medium text-emerald-600 mb-1.5 bg-emerald-50 px-2 py-0.5 rounded">45% OFF</span>
</div>
<p className="text-xs text-slate-500 font-normal">Inclusive of all taxes</p>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-slate-900">Select Size</h3>
<a className="text-xs font-medium text-blue-600" href="#">Size Chart</a>
</div>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="size" type="radio"/>
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-400 transition-all">S</div>
</label>
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-400 transition-all">M</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="size" type="radio"/>
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-400 transition-all">L</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="size" type="radio"/>
<div className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white hover:border-slate-400 transition-all">XL</div>
</label>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 mb-8">
<button className="flex-1 bg-slate-900 text-white rounded-xl py-4 text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10">
<iconify-icon className="text-lg" icon="solar:cart-large-minimalistic-linear"></iconify-icon> Add to Cart
                        </button>
<button className="flex-1 bg-blue-600 text-white rounded-xl py-4 text-sm font-medium hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
                            Buy Now
                        </button>
</div>

<div className="grid grid-cols-3 gap-2 border-t border-slate-200/80 pt-6">
<div className="flex flex-col items-center text-center gap-2">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Cash on<br/>Delivery</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">Free<br/>Shipping</span>
</div>
<div className="flex flex-col items-center text-center gap-2">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xl">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-700">7 Days<br/>Return</span>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4"><div className="h-px bg-slate-200/80 w-full my-8"></div></div>

<section className="max-w-7xl mx-auto px-4 py-8">
<h2 className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-6">Checkout Process Preview</h2>
<div className="flex flex-col lg:flex-row gap-8">

<div className="w-full lg:w-3/5 space-y-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Your Cart (2 items)</h3>
<div className="bg-white rounded-3xl border border-slate-200/80 p-4 sm:p-6 shadow-sm space-y-6">

<div className="flex gap-4">
<div className="w-20 h-24 sm:w-24 sm:h-28 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
<img alt="Item" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-slate-900">Premium Cotton Kurta</h4>
<button className="text-slate-400 hover:text-red-500 transition-colors"><iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<p className="text-xs text-slate-500 font-normal mb-2">Size: M</p>
<div className="flex items-center gap-2 mb-3 mt-auto">
<span className="text-sm font-semibold text-slate-900">₹899</span>
<span className="text-xs text-slate-400 line-through font-normal">₹1,699</span>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center border border-slate-200 rounded-lg overflow-hidden w-fit">
<button className="px-2.5 py-1 text-slate-600 hover:bg-slate-50 transition-colors">-</button>
<input className="w-8 text-center text-sm font-medium text-slate-900 bg-transparent outline-none border-x border-slate-200 py-1" readonly="" type="text" value="1"/>
<button className="px-2.5 py-1 text-slate-600 hover:bg-slate-50 transition-colors">+</button>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-slate-100"></div>

<div className="flex gap-4">
<div className="w-20 h-24 sm:w-24 sm:h-28 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0 p-2 flex items-center justify-center">
<img alt="Item" className="w-full h-auto object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-slate-900">Aero Smartwatch Series 7</h4>
<button className="text-slate-400 hover:text-red-500 transition-colors"><iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<p className="text-xs text-slate-500 font-normal mb-2">Color: Black</p>
<div className="flex items-center gap-2 mb-3 mt-auto">
<span className="text-sm font-semibold text-slate-900">₹1,999</span>
<span className="text-xs text-slate-400 line-through font-normal">₹2,499</span>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center border border-slate-200 rounded-lg overflow-hidden w-fit">
<button className="px-2.5 py-1 text-slate-600 hover:bg-slate-50 transition-colors">-</button>
<input className="w-8 text-center text-sm font-medium text-slate-900 bg-transparent outline-none border-x border-slate-200 py-1" readonly="" type="text" value="1"/>
<button className="px-2.5 py-1 text-slate-600 hover:bg-slate-50 transition-colors">+</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-2/5 space-y-6">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Delivery Details</h3>
<div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm flex flex-col gap-5">

<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<div className="flex relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500 font-medium">+91</span>
<input className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white rounded-xl pl-12 pr-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400" placeholder="98765 43210" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Delivery Address</label>
<textarea className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:bg-white rounded-xl px-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400 resize-none" placeholder="House/Flat No., Building Name, Street" rows="3"></textarea>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3">
<div className="flex justify-between text-sm text-slate-600 font-normal">
<span>Subtotal</span>
<span>₹2,898</span>
</div>
<div className="flex justify-between text-sm text-slate-600 font-normal">
<span>Delivery Fee</span>
<span className="text-emerald-600 font-medium">Free</span>
</div>
<div className="h-px bg-slate-200 w-full my-1"></div>
<div className="flex justify-between text-base font-semibold text-slate-900">
<span>Total Payable</span>
<span>₹2,898</span>
</div>
</div>

<div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-blue-50 transition-colors">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900 flex items-center gap-1.5"><iconify-icon className="text-blue-600 text-lg" icon="solar:wallet-money-linear"></iconify-icon> Cash on Delivery</span>
<span className="text-xs text-slate-500 font-normal mt-0.5">Pay when you receive</span>
</div>

<label className="flex items-center cursor-pointer relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<button className="w-full bg-slate-900 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 mt-2">
                            Place Order <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-4"><div className="h-px bg-slate-200/80 w-full my-8"></div></div>

<section className="max-w-7xl mx-auto px-4 py-8 mb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xs font-medium text-slate-500 uppercase tracking-widest">Backend Admin Dashboard Preview</h2>
<button className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Settings
                </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-3xl border border-slate-200/80 p-4 shadow-sm h-fit hidden lg:block">
<div className="flex items-center gap-2 px-3 py-2 mb-6">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-white">AM</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">Admin Panel</span>
</div>
<ul className="space-y-1">
<li><a className="flex items-center gap-3 px-3 py-2 bg-slate-50 text-blue-600 rounded-xl text-sm font-medium" href="#"><iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon> Overview</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-medium transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon> Products</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-medium transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:cart-large-linear"></iconify-icon> Orders</a></li>
<li><a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-xl text-sm font-medium transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Customers</a></li>
</ul>
</div>

<div className="lg:col-span-3 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><iconify-icon className="text-xl" icon="solar:wad-of-money-linear"></iconify-icon></div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">+12%</span>
</div>
<p className="text-xs text-slate-500 font-medium mb-1">Total Sales</p>
<h4 className="text-2xl font-semibold tracking-tight text-slate-900">₹45,231</h4>
</div>
<div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon></div>
</div>
<p className="text-xs text-slate-500 font-medium mb-1">Active Orders</p>
<h4 className="text-2xl font-semibold tracking-tight text-slate-900">142</h4>
</div>
<div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon></div>
</div>
<p className="text-xs text-slate-500 font-medium mb-1">Total Products</p>
<h4 className="text-2xl font-semibold tracking-tight text-slate-900">1,024</h4>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-sm overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold text-slate-900">Recent Orders</h3>
<button className="text-xs font-medium text-blue-600 hover:text-blue-700">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-slate-100">
<th className="pb-3 text-xs font-medium text-slate-500 uppercase">Order ID</th>
<th className="pb-3 text-xs font-medium text-slate-500 uppercase">Customer</th>
<th className="pb-3 text-xs font-medium text-slate-500 uppercase">Amount</th>
<th className="pb-3 text-xs font-medium text-slate-500 uppercase">Status</th>
<th className="pb-3 text-xs font-medium text-slate-500 uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-4 font-medium text-slate-900">#ORD-9821</td>
<td className="py-4 text-slate-600">Rahul Sharma</td>
<td className="py-4 text-slate-900 font-medium">₹1,249</td>
<td className="py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-600 border border-amber-100/50">Pending</span>
</td>
<td className="py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon></button>
</td>
</tr>
<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-4 font-medium text-slate-900">#ORD-9820</td>
<td className="py-4 text-slate-600">Aisha Khan</td>
<td className="py-4 text-slate-900 font-medium">₹899</td>
<td className="py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100/50">Shipped</span>
</td>
<td className="py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 font-medium text-slate-900">#ORD-9819</td>
<td className="py-4 text-slate-600">Vikram Singh</td>
<td className="py-4 text-slate-900 font-medium">₹2,450</td>
<td className="py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-100/50">Delivered</span>
</td>
<td className="py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon className="text-lg" icon="solar:menu-dots-circle-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/80 mt-auto py-8">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-slate-900">AsgarMart</span>
</div>
<p className="text-xs text-slate-500 font-normal">© 2023 AsgarMart UI Demo. Created for reference.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:help-linear"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
