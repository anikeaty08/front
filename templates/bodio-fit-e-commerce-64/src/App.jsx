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
      

<div className="bg-zinc-900 text-white text-center py-3 px-4">
<p className="text-sm font-medium tracking-wide">10% OFF + Free Shipping on your 1st order</p>
</div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 py-5">
<div className="flex items-center justify-between">

<button aria-label="Menu" className="p-1 hover:bg-zinc-100 rounded-md transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>

<a className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-medium tracking-tight uppercase" href="#">
                    Bodio Fit
                </a>

<div className="flex items-center gap-4">
<button aria-label="Account" className="p-1 hover:bg-zinc-100 rounded-md transition-colors hidden sm:block">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
<button aria-label="Cart" className="p-1 hover:bg-zinc-100 rounded-md transition-colors relative">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-zinc-900 rounded-full"></span>
</button>
</div>
</div>
</div>
</header>

<nav className="border-b border-zinc-100 py-4 overflow-x-auto">
<ul className="flex justify-center min-w-max gap-8 px-6">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Tops</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Bottoms</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Long Sleeve</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
</ul>
</nav>
<main>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
<div className="relative bg-zinc-50 rounded-2xl overflow-hidden min-h-[600px] flex items-center">

<div className="absolute inset-0 bg-zinc-200">

<img alt="Athlete looking ready" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 w-full max-w-lg ml-auto mr-8 sm:mr-16 p-8 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight mb-4 text-zinc-900">
                        Fit for the fight.
                    </h1>
<p className="text-lg text-zinc-600 mb-8 font-light leading-relaxed">
                        Tailored to your body for ultimate athletic comfort and durability. Designed to move as you move.
                    </p>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white text-base font-medium px-8 py-3 rounded-lg hover:bg-zinc-800 transition-all shadow-sm group" href="#">
                            Shop Now
                            <i className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-medium tracking-tight">Best Sellers</h2>
<a className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center" href="#">
                    View all <i className="w-4 h-4 ml-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Performance Tee" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium uppercase tracking-wide rounded-sm">New</div>
</div>
<h3 className="text-lg font-medium text-zinc-900">Core Performance Tee</h3>
<p className="text-base text-zinc-500 mt-1">$48.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Training Shorts" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=2028&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-zinc-900">Agility Training Shorts</h3>
<p className="text-base text-zinc-500 mt-1">$65.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Compression Layer" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-zinc-900">Base Compression Layer</h3>
<p className="text-base text-zinc-500 mt-1">$55.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Tech Hoodie" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-zinc-900">Tech Fleece Hoodie</h3>
<p className="text-base text-zinc-500 mt-1">$95.00</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">

<a className="group relative rounded-xl overflow-hidden" href="#">
<img alt="Mens Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Mens</h2>
<span className="inline-flex items-center text-white text-base font-medium group-hover:underline decoration-1 underline-offset-4">
                            Shop Mens <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</a>

<a className="group relative rounded-xl overflow-hidden" href="#">
<img alt="Womens Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-8 left-8">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Womens</h2>
<span className="inline-flex items-center text-white text-base font-medium group-hover:underline decoration-1 underline-offset-4">
                            Shop Womens <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-8">The Lifestyle</h2>
<div className="relative w-full aspect-video bg-zinc-100 rounded-xl overflow-hidden group cursor-pointer shadow-sm">

<img alt="Workout Lifestyle" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
<div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
<i className="w-8 h-8 text-zinc-900 fill-zinc-900" data-lucide="play" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="mt-6 flex justify-between items-start">
<p className="text-xl text-zinc-900 font-medium">Engineered for the modern athlete.</p>
<a className="text-zinc-500 hover:text-zinc-900 text-base border-b border-transparent hover:border-zinc-900 transition-colors pb-0.5" href="#">Watch full story</a>
</div>
</section>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="font-medium text-zinc-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">All Products</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">New Arrivals</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">FAQ</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Size Guide</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">About Us</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Sustainability</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4">Stay Connected</h4>
<p className="text-base text-zinc-500 mb-4">Join our newsletter for exclusive offers.</p>
<form className="flex gap-2">
<input className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-md focus:outline-none focus:border-zinc-400 text-base" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-zinc-800">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200">
<p className="text-sm text-zinc-400">© 2024 Bodio Fit. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<i className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" data-lucide="instagram" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" data-lucide="twitter" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-zinc-400 hover:text-zinc-900 cursor-pointer" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
