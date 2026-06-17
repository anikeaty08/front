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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 text-zinc-600 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-2xl font-medium tracking-tight z-50" href="#">LUMIÈRE</a>

<div className="hidden lg:flex items-center space-x-10 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Ready to Wear</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Editorial</a>
</div>

<div className="flex items-center space-x-4">
<button className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors group relative">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:bag-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-2 right-1.5 h-2 w-2 bg-zinc-900 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-20 h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Fashion" className="w-full h-full object-cover brightness-[0.85]" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
<p className="text-xs uppercase tracking-[0.2em] mb-4 reveal font-medium text-zinc-200">Autumn / Winter 2024</p>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 reveal delay-100 leading-[1.1]">
                Effortless Elegance <br/> <span className="font-light italic text-zinc-200">Redefined.</span>
</h1>
<div className="flex justify-center gap-4 reveal delay-200">
<a className="px-8 py-4 bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                    Explore Collection
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="border-b border-zinc-100 py-6 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-xs font-medium text-zinc-500 uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:star-linear"></iconify-icon> Sustainable Materials</span>
<span className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:shield-check-linear"></iconify-icon> Lifetime Warranty</span>
<span className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:box-linear"></iconify-icon> Complimentary Shipping</span>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900">Curated Selection</h2>
<p className="mt-2 text-zinc-500 font-light">Handpicked essentials for the modern connoisseur.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors group" href="#">
                    View All <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4">
<img alt="The Classic Coat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=1769&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 p-3 shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="absolute top-4 left-4">
<span className="bg-zinc-900 text-white text-[10px] uppercase tracking-wider px-2 py-1">New</span>
</div>
</div>
<h3 className="text-base font-medium text-zinc-900">The Wool Overcoat</h3>
<p className="text-sm text-zinc-500 mt-1">$890.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4">
<img alt="Leather Tote" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 p-3 shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-base font-medium text-zinc-900">Structured Tote</h3>
<p className="text-sm text-zinc-500 mt-1">$450.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4">
<img alt="Sneakers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 p-3 shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-base font-medium text-zinc-900">Minimalist Runner</h3>
<p className="text-sm text-zinc-500 mt-1">$295.00</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-50 overflow-hidden mb-4">
<img alt="Silk Scarf" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617114919297-3c8ddb01f599?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 p-3 shadow-lg hover:bg-zinc-900 hover:text-white transition-colors">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur text-zinc-900 text-[10px] uppercase tracking-wider px-2 py-1">Best Seller</span>
</div>
</div>
<h3 className="text-base font-medium text-zinc-900">Silk Square Scarf</h3>
<p className="text-sm text-zinc-500 mt-1">$120.00</p>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-zinc-200 z-0"></div>
<img alt="Editorial" className="relative z-10 w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-6">
<div className="h-[1px] w-12 bg-zinc-300"></div>
<span className="text-xs uppercase tracking-widest text-zinc-500 font-medium">The Craft</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-6">
                        Designed for longevity,<br/>crafted for life.
                    </h2>
<p className="text-zinc-600 leading-relaxed mb-8 font-light">
                        We believe in fewer, better things. Our collection is built on the philosophy that true luxury lies in simplicity and utility. Every stitch is intentional, every material sourced with integrity to ensure your essentials stand the test of time.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-zinc-900 pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors" href="#">
                        Read Our Story <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-xl mx-auto px-6 text-center">
<iconify-icon className="mb-6 text-zinc-400" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight mb-3">Join the Inner Circle</h2>
<p className="text-zinc-400 font-light mb-8">Receive early access to collections and exclusive editorial content.</p>
<form className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<input className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors placeholder-zinc-500" placeholder="email@address.com" type="email"/>
</div>
<button className="bg-white text-zinc-900 px-6 py-3 text-sm font-medium hover:bg-zinc-200 transition-colors" type="button">
                    Subscribe
                </button>
</form>
<p className="mt-4 text-[10px] text-zinc-500">By subscribing you agree to our Terms &amp; Privacy Policy.</p>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tight block mb-6" href="#">LUMIÈRE</a>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon></a> 
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Bestsellers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Clothing</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-6">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-900 mb-6">Client Services</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-xs text-zinc-400">
<p>© 2024 Lumière Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
