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
      

<div className="bg-zinc-900 text-white text-xs text-center py-2 font-medium tracking-wide">
        Free delivery within Nassau for orders over $100 ✨
    </div>

<header className="sticky top-0 z-50 w-full border-b border-zinc-100/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden p-2 text-zinc-600 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter uppercase text-zinc-900" href="#">
                Catwalk
            </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Dresses</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Tops</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Bottoms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a>
<a className="hover:text-zinc-900 transition-colors text-red-500" href="#">Sale</a>
</nav>

<div className="flex items-center gap-4">
<button className="p-1 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hidden md:block p-1 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative p-1 text-zinc-500 hover:text-zinc-900 transition-colors group">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-medium text-white group-hover:scale-110 transition-transform">2</span>
</button>
</div>
</div>
</header>

<main className="flex-grow">
<section className="relative w-full overflow-hidden bg-zinc-50">
<div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 fade-in-up">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4 block">Nassau's Finest</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 leading-[1.1] mb-6">
                        The Boutique that makes <span className="italic font-light text-zinc-500">Fashion Statements.</span>
</h1>
<p className="text-lg text-zinc-600 font-light max-w-md leading-relaxed mb-8">
                        Discover curated collections designed for the modern woman. Located in the heart of Robinson Road, we bring island elegance to your wardrobe.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-zinc-900 text-white text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#shop">
                            Shop Collection
                        </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-md border border-zinc-200 bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors" href="#location">
                            Visit Store
                        </a>
</div>
</div>
<div className="order-1 lg:order-2 relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden fade-in-up delay-100 group">
<img alt="Fashion Statement" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Curated Collections</h2>
<p className="text-zinc-500 mt-2 font-light">Explore our latest arrivals in Nassau.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                        View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100" href="#">
<img alt="Dresses" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Evening Dresses</h3>
<span className="text-xs font-light tracking-wide flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100" href="#">
<img alt="Casual Wear" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551488852-080175d0a927?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Island Casual</h3>
<span className="text-xs font-light tracking-wide flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-zinc-100" href="#">
<img alt="Accessories" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1509319117193-518da7277202?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Accessories</h3>
<span className="text-xs font-light tracking-wide flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-20" id="shop">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8 text-center">New This Week</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-md overflow-hidden mb-4">
<img alt="Velvet Midi Dress" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-zinc-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur shadow-sm text-zinc-900 text-xs font-medium uppercase tracking-wide rounded hover:bg-zinc-900 hover:text-white transition-colors">Add to Bag</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900">Velvet Midi Dress</h3>
<p className="text-sm text-zinc-500 font-light mt-1">$125.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-md overflow-hidden mb-4">
<img alt="Silk Blouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-zinc-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur shadow-sm text-zinc-900 text-xs font-medium uppercase tracking-wide rounded hover:bg-zinc-900 hover:text-white transition-colors">Add to Bag</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900">Ivory Silk Blouse</h3>
<p className="text-sm text-zinc-500 font-light mt-1">$89.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-md overflow-hidden mb-4">
<img alt="Linen Trousers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549833284-6a7df0b83320?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-zinc-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur shadow-sm text-zinc-900 text-xs font-medium uppercase tracking-wide rounded hover:bg-zinc-900 hover:text-white transition-colors">Add to Bag</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900">High-Waist Linen Trousers</h3>
<p className="text-sm text-zinc-500 font-light mt-1">$110.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-md overflow-hidden mb-4">
<img alt="Clutch Bag" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm">New</div>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur rounded-full text-zinc-500 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<button className="w-full h-10 bg-white/95 backdrop-blur shadow-sm text-zinc-900 text-xs font-medium uppercase tracking-wide rounded hover:bg-zinc-900 hover:text-white transition-colors">Add to Bag</button>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900">Statement Clutch</h3>
<p className="text-sm text-zinc-500 font-light mt-1">$65.00</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors pb-1 border-b border-transparent hover:border-zinc-900" href="#">
                        View All Products
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="location">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-zinc-400 mb-6" icon="solar:map-point-linear" width="32"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">Visit Our Boutique</h2>
<p className="text-zinc-600 font-light mb-8 max-w-xl mx-auto">
                    Experience our collections in person. Our stylists are ready to help you find the perfect look for any occasion.
                </p>
<div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
<div className="flex-1">
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 mb-2">Location</h4>
<p className="text-zinc-900 font-medium">Robinson Road East, HelRon Plaza</p>
<p className="text-zinc-600 text-sm mt-1">Nassau, New Providence 🇧🇸</p>
</div>
<div className="h-px w-full md:w-px md:h-12 bg-zinc-200"></div>
<div className="flex-1">
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 mb-2">Hours</h4>
<p className="text-zinc-900 font-medium">Mon - Sat: 10am - 7pm</p>
<p className="text-zinc-600 text-sm mt-1">Sunday: Closed</p>
</div>
<div className="h-px w-full md:w-px md:h-12 bg-zinc-200"></div>
<div className="flex-1">
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-400 mb-2">Contact</h4>
<a className="block text-zinc-900 font-medium hover:underline" href="tel:+12420000000">Call Us</a>
<a className="block text-zinc-600 text-sm mt-1 hover:text-zinc-900" href="mailto:hello@catwalkbahamas.com">Email Us</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-xl mx-auto px-6 text-center">
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">Join the List</h3>
<p className="text-sm text-zinc-500 font-light mb-6">Be the first to know about new arrivals and exclusive island events.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-10 px-4 rounded-md border border-zinc-200 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 bg-zinc-50/50" placeholder="Enter your email" type="email"/>
<button className="h-10 px-6 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-colors" type="button">Subscribe</button>
</form>
</div>
</section>
</main>

<footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<span className="text-white text-lg font-semibold tracking-tighter uppercase block mb-4">Catwalk</span>
<p className="text-xs leading-relaxed max-w-xs">
                    The Boutique that makes Fashion Statements ✨<br/>
                    Providing quality ladies clothing in beautiful Nassau, Bahamas.
                </p>
<div className="flex gap-4 mt-6">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Shop</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Apparel</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Customer Care</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
<div className="mt-8 text-[10px] text-zinc-600">
                    © 2023 Catwalk Basic and Boutique.<br/>All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
