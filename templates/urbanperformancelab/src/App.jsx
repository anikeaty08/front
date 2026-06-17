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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="uppercase text-lg font-semibold tracking-tighter" href="#">Urban Performance Lab</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#collections">Collections</a>
<a className="hover:text-black transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-black transition-colors" href="#guides">Guides</a>
<a className="hover:text-black transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-black transition-colors">
<iconify-icon className="" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="hidden sm:block bg-black text-white px-4 py-2 rounded text-xs font-medium hover:bg-neutral-800 transition-colors" href="#shop">
                    Top Picks
                </a>
<button className="md:hidden text-neutral-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 pt-32 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-end gap-12">
<div className="w-full md:w-1/2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4 block">Curated Performance</span>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-semibold text-neutral-950 tracking-tighter font-playfair mb-8">Performance <br/>Meets Everyday Style.</h1>
<p className="text-neutral-500 text-lg md:text-xl leading-relaxed max-w-md mb-10 font-normal">
                        Explore the finest selection of Nike footwear and apparel. Expert reviews, styling guides, and performance insights for the modern athlete.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="bg-neutral-950 text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2" href="#shop">
                            Shop Collection
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="bg-neutral-100 text-neutral-900 px-8 py-4 rounded-md text-sm font-medium hover:bg-neutral-200 transition-all" href="#reviews">
                            Read Reviews
                        </a>
</div>
<p className="text-xs text-neutral-400 max-w-xs mt-6">
                        *We independently review products. We may earn a commission from affiliate links.
                    </p>
</div>
<div className="w-full md:w-1/2 relative">
<div className="aspect-[4/5] md:aspect-square bg-neutral-100 rounded-xl overflow-hidden relative group">
<img alt="Nike Red Shoe" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs font-medium shadow-sm">
                            Featured: Air Max Series
                        </div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-neutral-100" id="collections">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Curated Collections</h2>
<a className="text-sm font-medium text-neutral-500 hover:text-black flex items-center gap-1" href="#">
                    View all <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100" href="#">
<img alt="Running" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-white text-2xl font-medium tracking-tight mb-2">Running</h3>
<p className="text-white/80 text-sm">Distance, speed, and trail.</p>
</div>
</a>

<a className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100" href="#">
<img alt="Lifestyle" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-white text-2xl font-medium tracking-tight mb-2">Lifestyle</h3>
<p className="text-white/80 text-sm">Everyday comfort &amp; style.</p>
</div>
</a>

<a className="group relative block aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100" href="#">
<img alt="Training" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="text-white text-2xl font-medium tracking-tight mb-2">Training</h3>
<p className="text-white/80 text-sm">Gym, HIIT, and Crossfit.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/50" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">This Week's Drops</span>
<h2 className="text-3xl font-semibold tracking-tight mt-3 mb-4">Latest Arrivals</h2>
<p className="text-neutral-500 text-sm">Hand-picked selections available at official retailers.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group">
<div className="relative aspect-square bg-white rounded-lg border border-neutral-200 overflow-hidden mb-4">
<div className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm">New</div>
<img alt="Shoe" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h3 className="font-medium text-neutral-900">Dunk Low Retro</h3>
<p className="text-neutral-500 text-xs mt-1">Men's Shoes</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$115.00</span>
<a className="text-xs font-medium border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 px-3 py-1.5 rounded transition-colors" href="#">
                                Buy at Nike
                            </a>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-white rounded-lg border border-neutral-200 overflow-hidden mb-4">
<img alt="Shoe" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h3 className="font-medium text-neutral-900">Air Zoom Pegasus 40</h3>
<p className="text-neutral-500 text-xs mt-1">Running Shoes</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$130.00</span>
<a className="text-xs font-medium border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 px-3 py-1.5 rounded transition-colors" href="#">
                                Buy at Nike
                            </a>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-white rounded-lg border border-neutral-200 overflow-hidden mb-4">
<img alt="Shoe" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1584735174965-48c48d7edfde?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h3 className="font-medium text-neutral-900">Metcon 9</h3>
<p className="text-neutral-500 text-xs mt-1">Training Shoes</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$150.00</span>
<a className="text-xs font-medium border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 px-3 py-1.5 rounded transition-colors" href="#">
                                Buy at Nike
                            </a>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-white rounded-lg border border-neutral-200 overflow-hidden mb-4">
<div className="absolute top-3 left-3 bg-neutral-100 text-neutral-600 text-[10px] uppercase font-bold px-2 py-1 rounded-sm">Trending</div>
<img alt="Shoe" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h3 className="font-medium text-neutral-900">Tech Fleece Hoodie</h3>
<p className="text-neutral-500 text-xs mt-1">Men's Apparel</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$125.00</span>
<a className="text-xs font-medium border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 px-3 py-1.5 rounded transition-colors" href="#">
                                Buy at Nike
                            </a>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors border-b border-neutral-200 pb-0.5 hover:border-black" href="#">
                    Browse full catalogue <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-neutral-950 rounded-2xl overflow-hidden text-white">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-96 lg:h-auto bg-neutral-800">
<img alt="Sneaker Review" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<img alt="Sneaker Detail" className="w-3/4 object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:p-16 flex flex-col pt-12 pr-12 pb-12 pl-12 justify-center">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="lucide:star-half" width="16"></iconify-icon>
<span className="text-xs font-medium text-neutral-400 ml-2">Editor's Choice</span>
</div>
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight mb-6">The Daily Driver: Air Zoom Pegasus 40 Review</h2>
<p className="text-neutral-400 leading-relaxed mb-8 font-light">
                            The workhorse with wings returns. We put 100 miles on the latest Pegasus to see if the upgrades to the midfoot strap and foam density make it the most versatile runner of the year.
                        </p>
<div className="space-y-4 mb-10">
<div className="">
<div className="flex justify-between text-xs uppercase tracking-wider text-neutral-500 mb-1">
<span>Comfort</span>
<span>9.5/10</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-[95%]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs uppercase tracking-wider text-neutral-500 mb-1">
<span>Durability</span>
<span>8.8/10</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-[88%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs uppercase tracking-wider text-neutral-500 mb-1">
<span>Responsiveness</span>
<span>8.2/10</span>
</div>
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-[82%]"></div>
</div>
</div>
</div>
<div className="flex gap-4">
<a className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                                Read Full Review
                            </a>
<a className="px-6 py-3 rounded-md text-sm font-medium text-neutral-300 hover:text-white transition-colors border border-neutral-700 hover:border-neutral-500" href="#">
                                View Product
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-neutral-100" id="guides">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Style &amp; Performance Guides</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-lg mb-4 aspect-video bg-neutral-100">
<img alt="Guide 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=2128&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
<span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-900 font-medium">Training</span>
<span>5 min read</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-neutral-600 transition-colors">Best Nike Shoes for HIIT Workouts in 2024</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Stability is key when jumping and lifting. We break down the top Metcon and SuperRep models for your gym routine.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-lg mb-4 aspect-video bg-neutral-100">
<img alt="Guide 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
<span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-900 font-medium">Running</span>
<span>8 min read</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-neutral-600 transition-colors">Beginner's Guide to Running Gear</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Starting your running journey? Here's exactly what you need (and what you don't) to hit the pavement comfortably.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="overflow-hidden rounded-lg mb-4 aspect-video bg-neutral-100">
<img alt="Guide 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500 mb-2">
<span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-900 font-medium">Style</span>
<span>4 min read</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 group-hover:text-neutral-600 transition-colors">How to Style Air Jordans for Everyday Wear</h3>
<p className="text-sm text-neutral-500 line-clamp-2">Elevate your street style. Tips on pairing chunky silhouettes with modern denim and cargo trousers.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-neutral-900 mb-6 mx-auto" icon="lucide:activity" width="32"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Built for the Obsessed</h2>
<p className="leading-loose text-neutral-500 mb-8">Urban Performance Lab is a digital destination dedicated to dissecting the engineering and design behind the world's leading athletic brand. We are not a retailer. We are enthusiasts, athletes, and curators committed to helping you find the perfect gear for your pursuit of excellence.</p>
<div className="flex justify-center gap-8 text-neutral-900">
<div className="flex flex-col items-center">
<span className="text-2xl font-bold tracking-tight">500+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Reviews</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold tracking-tight">100%</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Independent</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold tracking-tight">24/7</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Updates</span>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="uppercase block text-base font-semibold tracking-tighter mb-4" href="#">Urban Performance Lab</a>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Bridging the gap between performance technology and lifestyle aesthetics. Your ultimate guide to the swoosh.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><iconify-icon className="" icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><iconify-icon className="" icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><iconify-icon className="" icon="lucide:youtube" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-black transition-colors" href="#">Men's Shoes</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">Women's Shoes</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">Clothing</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4">Content</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-black transition-colors" href="#">Latest Reviews</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">Style Guides</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">Release Dates</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">News</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Terms of Use</a></li>
<li><a className="hover:text-black transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<p className="text-xs text-neutral-400">
                    © 2024 NK Archive. All rights reserved.
                </p>
<div className="text-xs text-neutral-400 max-w-xl text-right">
                     NK Archive is a participant in the Nike Affiliate Program. We earn a commission from qualifying purchases made through links on this site at no extra cost to you. This site is not officially affiliated with Nike Inc. All logos and trademarks property of their respective owners.
                </div>
</div>
</div>
</footer>

    </>
  );
}
