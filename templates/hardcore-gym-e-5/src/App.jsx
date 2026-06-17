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
      

<div className="bg-noise"></div>

<div className="bg-red-900 text-white text-xs font-mech font-medium tracking-widest text-center py-2 uppercase">
        Free Shipping on Orders Over $75 — Bury the Weak
    </div>

<header className="sticky top-0 z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center md:hidden">
<button className="text-neutral-400 hover:text-white p-2">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
<a className="font-gothic text-3xl text-white tracking-wider hover:text-red-600 transition-colors duration-300" href="#">
                        DEADWEIGHT
                    </a>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-mech uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Men</a>
<a className="text-sm font-mech uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Women</a>
<a className="text-sm font-mech uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Gear</a>
<a className="text-sm font-mech uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#">Bundles</a>
<a className="text-sm font-mech uppercase tracking-widest text-red-500 hover:text-red-400 transition-colors" href="#">New Drops</a>
</nav>

<div className="flex items-center space-x-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="relative group cursor-pointer">
<button className="text-neutral-400 hover:text-white transition-colors flex items-center">
<iconify-icon height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="ml-1 text-xs font-mech hidden sm:block">0</span>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-neutral-800">

<div className="absolute inset-0 z-0">
<img alt="Hardcore Lifting" className="w-full h-full object-cover grayscale contrast-125 brightness-50" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-red-900/10 mix-blend-overlay"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<div className="inline-flex items-center space-x-2 border border-red-900/50 bg-black/50 backdrop-blur-sm px-3 py-1 mb-6">
<span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
<span className="text-xs font-mech uppercase tracking-[0.2em] text-red-500">New Collection Live</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-gothic text-white leading-none mb-4 tracking-tight drop-shadow-xl">
                RISE UNBROKEN
            </h1>
<p className="text-lg md:text-xl font-mech uppercase tracking-widest text-neutral-300 mb-10 max-w-2xl mx-auto">
                Forged in iron. Fueled by hate. Gear for the outlaw athlete who refuses to remain average.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-red-800 hover:bg-red-700 text-white font-mech font-bold uppercase tracking-widest text-sm clip-diagonal transition-all duration-300 transform hover:scale-105 border border-transparent" href="#">
                    Shop The Drop
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-500 hover:border-white text-white font-mech font-bold uppercase tracking-widest text-sm clip-diagonal transition-colors duration-300" href="#">
                    View Lookbook
                </a>
</div>
</div>
</section>

<section className="py-6 bg-neutral-900 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
<div className="flex flex-col items-center justify-center space-y-2">
<iconify-icon className="text-red-700" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-mech uppercase tracking-widest text-neutral-400">Lifetime Warranty</span>
</div>
<div className="flex flex-col items-center justify-center space-y-2">
<iconify-icon className="text-red-700" icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-mech uppercase tracking-widest text-neutral-400">Fast Shipping</span>
</div>
<div className="flex flex-col items-center justify-center space-y-2">
<iconify-icon className="text-red-700" icon="lucide:dumbbell" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-mech uppercase tracking-widest text-neutral-400">IPF Approved Gear</span>
</div>
<div className="flex flex-col items-center justify-center space-y-2">
<iconify-icon className="text-red-700" icon="lucide:refresh-cw" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-mech uppercase tracking-widest text-neutral-400">Hassle-Free Returns</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-4xl md:text-5xl font-gothic text-white">FORGE YOUR PATH</h2>
<a className="hidden md:flex items-center text-sm font-mech uppercase tracking-widest text-red-500 hover:text-white transition-colors" href="#">
                View All Categories <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group relative h-96 overflow-hidden block border border-neutral-800 bg-neutral-900" href="#">
<img alt="Men's Apparel" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-3xl font-mech font-bold text-white uppercase italic transform -skew-x-6">Men's Apparel</h3>
<p className="text-xs text-neutral-300 mt-2 font-mech tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">Tees, Hoodies, Tanks</p>
</div>
</a>

<a className="group relative h-96 overflow-hidden block border border-neutral-800 bg-neutral-900" href="#">
<img alt="Lifting Gear" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-3xl font-mech font-bold text-white uppercase italic transform -skew-x-6 text-outline group-hover:text-red-600 transition-colors">Lifting Gear</h3>
<p className="text-xs text-neutral-300 mt-2 font-mech tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">Belts, Straps, Sleeves</p>
</div>
</a>

<a className="group relative h-96 overflow-hidden block border border-neutral-800 bg-neutral-900" href="#">
<img alt="Women's Apparel" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-3xl font-mech font-bold text-white uppercase italic transform -skew-x-6">Women's Apparel</h3>
<p className="text-xs text-neutral-300 mt-2 font-mech tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">Cropped, Leggings, Sports Bras</p>
</div>
</a>
</div>
</section>

<section className="bg-neutral-900 py-16 md:py-24 border-y border-neutral-800 relative overflow-hidden">

<div className="absolute -top-20 -right-20 text-[20rem] font-mech font-bold text-white opacity-[0.02] pointer-events-none select-none">
            HEAVY
        </div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-gothic text-white mb-2">BURY THE WEAK</h2>
<p className="text-sm font-mech uppercase tracking-widest text-neutral-400">Best Sellers &amp; Essentials</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-800 mb-4 overflow-hidden border border-neutral-700">
<div className="absolute top-2 left-2 z-20 bg-red-900 text-white text-[10px] font-mech font-bold uppercase px-2 py-1 tracking-wider">Best Seller</div>
<img alt="Outlaw Tee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full bg-white text-black font-mech font-bold uppercase text-xs py-3 tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                                Add To Cart
                            </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-mech font-medium text-white group-hover:text-red-500 transition-colors uppercase">Outlaw Oversized Tee</h3>
<span className="text-sm font-mech font-bold text-neutral-300">$35.00</span>
</div>
<div className="flex items-center space-x-1">
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<span className="text-xs text-neutral-500 ml-1">(420)</span>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-800 mb-4 overflow-hidden border border-neutral-700">
<img alt="Belt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full bg-white text-black font-mech font-bold uppercase text-xs py-3 tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                                Add To Cart
                            </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-mech font-medium text-white group-hover:text-red-500 transition-colors uppercase">10MM Lever Belt</h3>
<span className="text-sm font-mech font-bold text-neutral-300">$110.00</span>
</div>
<div className="flex items-center space-x-1">
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<span className="text-xs text-neutral-500 ml-1">(850)</span>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-800 mb-4 overflow-hidden border border-neutral-700">
<div className="absolute top-2 left-2 z-20 bg-neutral-800 text-neutral-300 border border-neutral-600 text-[10px] font-mech font-bold uppercase px-2 py-1 tracking-wider">Restocked</div>
<img alt="Hoodie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1620188467120-5042ed1eb5da?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full bg-white text-black font-mech font-bold uppercase text-xs py-3 tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                                Add To Cart
                            </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-mech font-medium text-white group-hover:text-red-500 transition-colors uppercase">Iron Church Hoodie</h3>
<span className="text-sm font-mech font-bold text-neutral-300">$65.00</span>
</div>
<div className="flex items-center space-x-1">
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star-half"></iconify-icon>
<span className="text-xs text-neutral-500 ml-1">(120)</span>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-800 mb-4 overflow-hidden border border-neutral-700">
<img alt="Straps" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full bg-white text-black font-mech font-bold uppercase text-xs py-3 tracking-widest hover:bg-red-600 hover:text-white transition-colors">
                                Add To Cart
                            </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-mech font-medium text-white group-hover:text-red-500 transition-colors uppercase">Figure 8 Straps</h3>
<span className="text-sm font-mech font-bold text-neutral-300">$25.00</span>
</div>
<div className="flex items-center space-x-1">
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<iconify-icon className="text-red-600 w-3 h-3" icon="lucide:star"></iconify-icon>
<span className="text-xs text-neutral-500 ml-1">(310)</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-8 py-3 border border-neutral-600 text-neutral-300 hover:text-white hover:border-white font-mech font-bold uppercase tracking-widest text-xs transition-colors duration-300" href="#">
                    View All Products
                </a>
</div>
</div>
</section>

<section className="relative py-24 bg-black overflow-hidden border-b border-neutral-800">
<div className="absolute inset-0 z-0 opacity-20">
<img alt="Gym texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
<h2 className="text-5xl md:text-7xl font-gothic text-white mb-6 leading-tight">
                HEAVIER THAN <br/>
<span className="text-red-700">YOUR EXCUSES</span>
</h2>
<div className="w-24 h-1 bg-red-800 mx-auto mb-8"></div>
<p className="text-lg md:text-xl font-body text-neutral-400 leading-relaxed max-w-2xl mx-auto mb-10">
                We are the outlaws of the iron game. We don't lift for aesthetics, we lift for violence against gravity. Deadweight isn't just a brand—it's a refusal to accept weakness. Join the degenerate tribe.
            </p>
<button className="group inline-flex items-center space-x-2 text-white font-mech uppercase tracking-widest border-b border-red-800 pb-1 hover:text-red-500 transition-colors">
<span>Read The Manifesto</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2">
<div className="bg-neutral-900 p-12 md:p-24 flex flex-col justify-center border-r border-neutral-800">
<span className="text-red-600 font-mech font-bold uppercase tracking-widest mb-4">Limited Offer</span>
<h2 className="text-4xl md:text-6xl font-gothic text-white mb-6">THE DEADLIFT BUNDLE</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-neutral-300 font-mech tracking-wide">
<iconify-icon className="text-red-600 mr-3" icon="lucide:check"></iconify-icon> 13mm Lever Belt (Black)
                </li>
<li className="flex items-center text-neutral-300 font-mech tracking-wide">
<iconify-icon className="text-red-600 mr-3" icon="lucide:check"></iconify-icon> Figure 8 Straps
                </li>
<li className="flex items-center text-neutral-300 font-mech tracking-wide">
<iconify-icon className="text-red-600 mr-3" icon="lucide:check"></iconify-icon> Smelling Salts
                </li>
</ul>
<div className="flex items-center space-x-4">
<span className="text-3xl font-mech font-bold text-white">$145</span>
<span className="text-xl font-mech text-neutral-500 line-through">$180</span>
</div>
<button className="mt-8 w-full sm:w-auto bg-white text-black px-8 py-4 font-mech font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors clip-diagonal">
                Add Bundle To Cart
            </button>
</div>
<div className="h-96 lg:h-auto relative">
<img alt="Gym texture" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-red-900/10 mix-blend-multiply"></div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<a className="font-gothic text-2xl text-white tracking-wider" href="#">DEADWEIGHT</a>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Premium hardcore gear for lifters who chase numbers, not likes. Founded in the dungeon, built for the platform.
                    </p>
<div className="flex space-x-4 pt-2">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-mech font-bold uppercase tracking-widest mb-6">Shop</h4>
<ul className="space-y-3">
<li><a className="text-neutral-500 hover:text-red-500 text-sm transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-neutral-500 hover:text-red-500 text-sm transition-colors" href="#">Men's Apparel</a></li>
<li><a className="text-neutral-500 hover:text-red-500 text-sm transition-colors" href="#">Women's Apparel</a></li>
<li><a className="text-neutral-500 hover:text-red-500 text-sm transition-colors" href="#">Lifting Gear</a></li>
<li><a className="text-neutral-500 hover:text-red-500 text-sm transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-mech font-bold uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-3">
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Track Order</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Shipping Info</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">Contact Us</a></li>
<li><a className="text-neutral-500 hover:text-white text-sm transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-mech font-bold uppercase tracking-widest mb-6">Join The Tribe</h4>
<p className="text-neutral-500 text-sm mb-4">Subscribe for product drops and lifting tips. No fluff.</p>
<form className="space-y-2">
<input className="w-full bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-red-800 placeholder-neutral-600 font-mech tracking-wide" placeholder="Email Address" type="email"/>
<button className="w-full bg-red-900 hover:bg-red-800 text-white font-mech font-bold uppercase text-xs py-3 tracking-widest transition-colors" type="submit">
                            Sign Up
                        </button>
</form>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<p className="text-neutral-600 text-xs text-center md:text-left">
                    © 2024 Deadweight Fitness. All Rights Reserved. Designed for the obsessed.
                </p>
<div className="flex space-x-4 opacity-50 grayscale hover:grayscale-0 transition-all">
<iconify-icon icon="logos:visa" width="30"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="30"></iconify-icon>
<iconify-icon icon="logos:amex" width="30"></iconify-icon>
<iconify-icon icon="logos:paypal" width="30"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
