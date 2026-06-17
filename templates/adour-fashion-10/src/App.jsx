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
      

<div className="bg-zinc-900 text-white text-xs font-medium py-2 text-center tracking-wide">
        Free worldwide shipping on orders over $150
    </div>

<header className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-zinc-900 flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>

<nav className="hidden md:flex gap-8 items-center w-1/3">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#new">New Arrivals</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#collections">Collections</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
</nav>

<a className="text-xl font-semibold tracking-tighter text-zinc-900 w-1/3 text-center" href="#">
                ADOUR
            </a>

<div className="flex items-center justify-end gap-5 w-1/3">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:flex items-center">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center relative">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-zinc-900 text-white text-[10px] flex items-center justify-center rounded-full font-medium">2</span>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative h-[80vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden bg-zinc-100">

<div className="absolute inset-0 w-full h-full bg-zinc-200">
<img alt="Hero Fashion" className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center px-6 max-w-2xl">
<h2 className="text-xs font-medium text-zinc-900 mb-4 uppercase tracking-widest">Autumn / Winter 2024</h2>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">
                    Elevate your everyday wardrobe.
                </h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
<a className="w-full sm:w-auto text-sm font-medium bg-zinc-900 text-white px-8 py-3 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#shop">
                        Shop Collection
                    </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-7xl mx-auto px-6" id="collections">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<a className="group relative h-96 md:h-[32rem] overflow-hidden bg-zinc-100 flex items-center justify-center" href="#">
<img alt="Womens" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
<div className="relative z-10 bg-white/90 backdrop-blur-sm px-8 py-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Women</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center justify-center gap-1">
                            Explore <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</p>
</div>
</a>
<a className="group relative h-96 md:h-[32rem] overflow-hidden bg-zinc-100 flex items-center justify-center" href="#">
<img alt="Mens" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
<div className="relative z-10 bg-white/90 backdrop-blur-sm px-8 py-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-lg font-medium tracking-tight text-zinc-900">Men</h3>
<p className="text-xs text-zinc-500 mt-1 flex items-center justify-center gap-1">
                            Explore <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</p>
</div>
</a>
</div>
</section>

<section className="py-16 md:py-24 border-t border-zinc-100" id="new">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">New Arrivals</h2>
<p className="text-sm text-zinc-500 mt-2 font-light">Curated essentials for the modern silhouette.</p>
</div>
<a className="hidden sm:flex text-sm font-medium text-zinc-900 hover:text-zinc-500 transition-colors items-center gap-1 border-b border-zinc-900 hover:border-zinc-500 pb-0.5" href="#">
                        View All
                    </a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">

<a className="group block" href="#">
<div className="aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 relative">
<img alt="Product" className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Tailored Wool Coat</h3>
<p className="text-sm text-zinc-500 mt-1">$289.00</p>
</a>

<a className="group block" href="#">
<div className="aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 relative">
<img alt="Product" className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Oversized Cotton Shirt</h3>
<p className="text-sm text-zinc-500 mt-1">$85.00</p>
</a>

<a className="group block" href="#">
<div className="aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 relative">
<img alt="Product" className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550614000-4b95d415d185?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 bg-white px-2 py-1 text-[10px] font-medium text-zinc-900 uppercase tracking-wider">
                                Sold Out
                            </div>
</div>
<h3 className="text-sm font-medium text-zinc-500 truncate">Pleated Trousers</h3>
<p className="text-sm text-zinc-400 mt-1">$120.00</p>
</a>

<a className="group block" href="#">
<div className="aspect-[3/4] bg-zinc-100 overflow-hidden mb-4 relative">
<img alt="Product" className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm text-zinc-400 hover:text-zinc-900 hover:scale-110 transition-all">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 truncate">Minimalist Leather Tote</h3>
<p className="text-sm text-zinc-500 mt-1">$195.00</p>
</a>
</div>
<div className="mt-10 sm:hidden flex justify-center">
<a className="text-sm font-medium text-zinc-900 border border-zinc-200 px-6 py-3 w-full text-center hover:bg-zinc-50 transition-colors" href="#">
                        View All New Arrivals
                    </a>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
                    Join the Adour community.
                </h2>
<p className="text-sm text-zinc-500 mb-8 font-light max-w-md mx-auto">
                    Subscribe to receive updates, access to exclusive deals, and more.
                </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-grow bg-white border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-zinc-400 transition-colors placeholder:text-zinc-400" placeholder="Enter your email address" type="email"/>
<button className="bg-zinc-900 text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-white pt-16 pb-8 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 mb-6 block" href="#">
                        ADOUR
                    </a>
<p className="text-xs text-zinc-500 font-light leading-relaxed max-w-xs">
                        Defining modern elegance through minimalist design and premium materials. Created for the contemporary lifestyle.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-6">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Women</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Men</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-6">Social</h4>
<ul className="space-y-4">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Instagram</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">TikTok</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pinterest</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-100">
<div className="flex gap-4">

<div className="h-6 w-10 border border-zinc-200 rounded flex items-center justify-center text-[8px] font-medium text-zinc-400">VISA</div>
<div className="h-6 w-10 border border-zinc-200 rounded flex items-center justify-center text-[8px] font-medium text-zinc-400">MC</div>
<div className="h-6 w-10 border border-zinc-200 rounded flex items-center justify-center text-[8px] font-medium text-zinc-400">AMEX</div>
</div>
<p className="text-xs text-zinc-400">
                    © 2024 Adour Fashion. All rights reserved.
                </p>
<div className="flex gap-6 text-xs">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
