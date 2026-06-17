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
      

<div className="bg-neutral-900 text-white text-xs py-2 text-center tracking-wide">
        🇮🇳 India's Favorite Shopping Destination · Order via WhatsApp
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-14">

<button className="sm:hidden p-2 -ml-2 text-neutral-500">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="flex-shrink-0 flex items-center gap-2">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">
                        Cartivo
                    </a>
</div>

<div className="hidden sm:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#fashion">Fashion</a>
<a className="hover:text-neutral-900 transition-colors" href="#beauty">Beauty</a>
<a className="hover:text-neutral-900 transition-colors" href="#gadgets">Gadgets</a>
</div>

<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors bg-green-50 px-3 py-1.5 rounded-full" href="https://wa.me/918307009435" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden sm:inline">WhatsApp Us</span>
</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Easy Ordering via WhatsApp</span>
</div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 max-w-4xl mx-auto">
                Cartivo – All Products <br className="hidden sm:block"/> at One Place
            </h1>
<p className="text-lg text-neutral-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Fashion | Beauty | Gadgets
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-green-500/20" href="https://wa.me/918307009435" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Order on WhatsApp
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-neutral-200 text-neutral-700 rounded-lg font-medium hover:bg-neutral-50 transition-all flex items-center justify-center gap-2" href="#products">
                    View Products
                    <iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[800px] h-[800px] bg-gradient-to-tr from-green-50 to-transparent rounded-full blur-3xl opacity-60"></div>
</section>

<section className="border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-4 py-10">
<div className="flex sm:grid sm:grid-cols-4 gap-8 overflow-x-auto scrollbar-hide snap-x">

<div className="snap-start flex-shrink-0 flex items-center gap-4 min-w-[240px]">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#F5A623]">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Affordable Prices</h3>
<p className="text-xs text-neutral-500 mt-0.5">Best deals every day</p>
</div>
</div>

<div className="snap-start flex-shrink-0 flex items-center gap-4 min-w-[240px]">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#F5A623]">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Cash on Delivery</h3>
<p className="text-xs text-neutral-500 mt-0.5">Pay when it arrives</p>
</div>
</div>

<div className="snap-start flex-shrink-0 flex items-center gap-4 min-w-[240px]">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#F5A623]">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">India Only</h3>
<p className="text-xs text-neutral-500 mt-0.5">Fast delivery across India</p>
</div>
</div>

<div className="snap-start flex-shrink-0 flex items-center gap-4 min-w-[240px]">
<div className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#F5A623]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Trusted Products</h3>
<p className="text-xs text-neutral-500 mt-0.5">Quality you can rely on</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">Shop by Category</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100" id="fashion">
<img alt="Fashion" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white pr-4">
<h3 className="text-xl font-medium tracking-tight">Fashion</h3>
<p className="text-sm text-neutral-300 mt-1 mb-4">Trendy clothing and accessories for daily use</p>
<span className="inline-flex items-center text-sm font-medium border-b border-white pb-0.5">Explore <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100" id="beauty">
<img alt="Beauty" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white pr-4">
<h3 className="text-xl font-medium tracking-tight">Beauty</h3>
<p className="text-sm text-neutral-300 mt-1 mb-4">Makeup tools, organizers and beauty accessories</p>
<span className="inline-flex items-center text-sm font-medium border-b border-white pb-0.5">Explore <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100" id="gadgets">
<img alt="Gadgets" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white pr-4">
<h3 className="text-xl font-medium tracking-tight">Gadgets</h3>
<p className="text-sm text-neutral-300 mt-1 mb-4">Useful daily gadgets and mobile accessories</p>
<span className="inline-flex items-center text-sm font-medium border-b border-white pb-0.5">Explore <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50/50" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Featured Drops</h2>
<p className="text-neutral-500 text-sm mt-1">Best selling items curated for you</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 lg:gap-8">

<div className="group flex flex-col">
<div className="relative aspect-square overflow-hidden rounded-xl bg-white border border-neutral-100 mb-4">
<span className="absolute top-2 left-2 bg-neutral-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded z-10">Best Seller</span>
<img alt="Product" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900 truncate">Premium Smart Watch</h3>
<div className="flex items-center gap-2 mt-1 mb-3">
<span className="text-sm font-semibold text-neutral-900">₹1,999</span>
<span className="text-xs text-neutral-400 line-through">₹4,999</span>
<span className="text-xs text-[#F5A623] font-medium">60% OFF</span>
</div>
<a className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#25D366] text-white text-xs font-medium rounded-lg hover:bg-[#20bd5a] transition-colors" href="https://wa.me/918307009435?text=Hi, I want to order Premium Smart Watch" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
                            Order on WhatsApp
                        </a>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-square overflow-hidden rounded-xl bg-white border border-neutral-100 mb-4">
<img alt="Product" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900 truncate">Vitamin C Face Serum</h3>
<div className="flex items-center gap-2 mt-1 mb-3">
<span className="text-sm font-semibold text-neutral-900">₹499</span>
<span className="text-xs text-neutral-400 line-through">₹999</span>
<span className="text-xs text-[#F5A623] font-medium">50% OFF</span>
</div>
<a className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#25D366] text-white text-xs font-medium rounded-lg hover:bg-[#20bd5a] transition-colors" href="https://wa.me/918307009435?text=Hi, I want to order Vitamin C Serum" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
                            Order on WhatsApp
                        </a>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-square overflow-hidden rounded-xl bg-white border border-neutral-100 mb-4">
<span className="absolute top-2 left-2 bg-[#F5A623] text-white text-[10px] uppercase font-bold px-2 py-1 rounded z-10">New</span>
<img alt="Product" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900 truncate">Wireless Headphones</h3>
<div className="flex items-center gap-2 mt-1 mb-3">
<span className="text-sm font-semibold text-neutral-900">₹1,499</span>
<span className="text-xs text-neutral-400 line-through">₹3,499</span>
<span className="text-xs text-[#F5A623] font-medium">55% OFF</span>
</div>
<a className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#25D366] text-white text-xs font-medium rounded-lg hover:bg-[#20bd5a] transition-colors" href="https://wa.me/918307009435?text=Hi, I want to order Wireless Headphones" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
                            Order on WhatsApp
                        </a>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-square overflow-hidden rounded-xl bg-white border border-neutral-100 mb-4">
<img alt="Product" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div>
<h3 className="text-sm font-medium text-neutral-900 truncate">Urban Sneakers</h3>
<div className="flex items-center gap-2 mt-1 mb-3">
<span className="text-sm font-semibold text-neutral-900">₹2,299</span>
<span className="text-xs text-neutral-400 line-through">₹4,599</span>
<span className="text-xs text-[#F5A623] font-medium">50% OFF</span>
</div>
<a className="flex items-center justify-center gap-1.5 w-full py-2.5 bg-[#25D366] text-white text-xs font-medium rounded-lg hover:bg-[#20bd5a] transition-colors" href="https://wa.me/918307009435?text=Hi, I want to order Urban Sneakers" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
                            Order on WhatsApp
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">How to Order</h2>
<p className="text-neutral-500 text-sm mt-2">Simple 4-step process to get your products</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:border-[#F5A623] group-hover:text-[#F5A623] transition-colors">
<iconify-icon icon="solar:bag-heart-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="bg-neutral-100 text-neutral-500 text-[10px] font-bold px-2 py-1 rounded mb-3">STEP 01</div>
<h3 className="font-medium text-neutral-900 mb-1">Choose Product</h3>
<p className="text-xs text-neutral-500 max-w-[200px]">Select your favorite items from our categories</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:border-[#25D366] group-hover:text-[#25D366] transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="bg-neutral-100 text-neutral-500 text-[10px] font-bold px-2 py-1 rounded mb-3">STEP 02</div>
<h3 className="font-medium text-neutral-900 mb-1">Click WhatsApp</h3>
<p className="text-xs text-neutral-500 max-w-[200px]">Click the order button to chat with us directly</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:border-[#F5A623] group-hover:text-[#F5A623] transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="bg-neutral-100 text-neutral-500 text-[10px] font-bold px-2 py-1 rounded mb-3">STEP 03</div>
<h3 className="font-medium text-neutral-900 mb-1">Confirm Details</h3>
<p className="text-xs text-neutral-500 max-w-[200px]">Provide your address &amp; pincode for shipping</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:border-[#F5A623] group-hover:text-[#F5A623] transition-colors">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="bg-neutral-100 text-neutral-500 text-[10px] font-bold px-2 py-1 rounded mb-3">STEP 04</div>
<h3 className="font-medium text-neutral-900 mb-1">Get Delivery</h3>
<p className="text-xs text-neutral-500 max-w-[200px]">Receive your order at home with COD</p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-neutral-800 pb-12">
<div>
<a className="text-2xl font-semibold tracking-tighter text-white block mb-6" href="#">
                        Cartivo
                    </a>
<p className="text-sm leading-relaxed mb-6">
                        Your one-stop destination for trending fashion, beauty and gadgets. All orders are processed securely via WhatsApp for your convenience.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-[#F5A623] hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="md:pl-10">
<h4 className="font-medium text-white mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#fashion">Fashion Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#beauty">Beauty Essentials</a></li>
<li><a className="hover:text-white transition-colors" href="#gadgets">Smart Gadgets</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#F5A623]" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>
<span className="block text-xs uppercase tracking-wide opacity-70 mb-1">WhatsApp Order</span>
<a className="text-white hover:text-[#25D366] text-lg font-medium" href="https://wa.me/918307009435">+91 8307009435</a>
</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#F5A623]" icon="solar:letter-linear" width="20"></iconify-icon>
<span>
<span className="block text-xs uppercase tracking-wide opacity-70 mb-1">Email Support</span>
<span className="text-white">support@cartivo.in</span>
</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs">© 2024 Cartivo Store. All rights reserved.</p>
<div className="flex items-center gap-2 text-neutral-500">
<span className="text-xs mr-2">Payment Modes:</span>
<span className="px-2 py-1 bg-neutral-800 rounded text-[10px] text-white">UPI</span>
<span className="px-2 py-1 bg-neutral-800 rounded text-[10px] text-white">Cash on Delivery</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
