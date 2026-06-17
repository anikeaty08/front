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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-stone-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold tracking-tighter text-emerald-900">BOTANIKA.</span>
</a>
<div className="flex items-center md:order-2 space-x-4 md:space-x-6">
<button className="text-stone-500 hover:text-emerald-700 transition-colors">
<iconify-icon height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative text-stone-500 hover:text-emerald-700 transition-colors">
<iconify-icon height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-600"></span>
</button>
<button className="hidden md:block text-sm font-medium text-emerald-900 border border-stone-200 bg-stone-50 hover:bg-stone-100 px-4 py-2 rounded-lg transition-all">
                    Sign in
                </button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
<li><a aria-current="page" className="block py-2 px-3 text-emerald-900 bg-emerald-50 md:bg-transparent md:text-emerald-700 md:p-0 rounded" href="#">Home</a></li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-emerald-700 md:p-0 transition-colors" href="#">Plants</a></li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-emerald-700 md:p-0 transition-colors" href="#">Care &amp; Soil</a></li>
<li><a className="block py-2 px-3 text-stone-600 hover:text-emerald-700 md:p-0 transition-colors" href="#">About</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        New Spring Collection
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-emerald-950 leading-[1.1]">
                        Bring nature <br/>
<span className="text-emerald-600/90">into your home.</span>
</h1>
<p className="text-lg text-stone-500 max-w-lg leading-relaxed">
                        Curated indoor plants and premium gardening essentials to transform your living space into a green sanctuary.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:ring-emerald-100 transition-all shadow-sm shadow-emerald-200" href="#plants">
                            Shop Plants
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-stone-700 bg-white border border-stone-200 rounded-lg hover:bg-stone-50 hover:border-stone-300 focus:ring-4 focus:ring-stone-100 transition-all" href="#parts">
                            View Accessories
                        </a>
</div>
</div>
<div className="relative lg:h-[600px] w-full bg-stone-100 rounded-3xl overflow-hidden shadow-2xl shadow-stone-200/50">
<img alt="Minimalist Plant" className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1491147334573-44cbb4602074?q=80&amp;w=1587&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="plants">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-3">Best Selling Plants</h2>
<p className="text-stone-500 text-sm max-w-md">Handpicked greenery perfect for indoor living and air purification.</p>
</div>
<a className="group inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800" href="#">
                    View all plants
                    <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">
<img alt="Monstera Deliciosa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-emerald-900 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider">Indoor</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Monstera Deliciosa</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Air Purifying • Low Maintenance</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-base font-semibold text-emerald-900">$45.00</span>
<button className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-600 hover:text-white transition-colors">
<iconify-icon height="18" icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">
<img alt="Fiddle Leaf Fig" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Fiddle Leaf Fig</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Bright Light • Statement Piece</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-base font-semibold text-emerald-900">$62.00</span>
<button className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-600 hover:text-white transition-colors">
<iconify-icon height="18" icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">
<img alt="Snake Plant" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-emerald-900 text-[10px] font-semibold px-2 py-1 rounded-md uppercase tracking-wider">Hardy</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Snake Plant</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Low Light • Beginner Friendly</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-base font-semibold text-emerald-900">$35.00</span>
<button className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-600 hover:text-white transition-colors">
<iconify-icon height="18" icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="relative aspect-[4/5] bg-stone-50 rounded-t-2xl overflow-hidden">
<img alt="Peace Lily" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-stone-900">Peace Lily</h3>
<p className="text-xs text-stone-500 mb-4 mt-1">Flowering • Air Cleaning</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-base font-semibold text-emerald-900">$28.00</span>
<button className="p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-emerald-600 hover:text-white transition-colors">
<iconify-icon height="18" icon="lucide:plus" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50 border-t border-stone-200" id="parts">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-emerald-950 mb-3">Plant Parts &amp; Essentials</h2>
<p className="text-stone-500 text-sm max-w-md">Quality soil, pots, and tools to help your garden thrive.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all" href="#">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-emerald-50 rounded-lg text-emerald-700">
<iconify-icon height="24" icon="lucide:box" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-amber-600 bg-amber-50 px-2 py-1 rounded">Popular</span>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Ceramic Pots</h3>
<p className="text-xs text-stone-500 line-clamp-2">Minimalist matte finish pots with drainage holes for healthy roots.</p>
<div className="mt-4 text-xs font-medium text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Collection <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>

<a className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all" href="#">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-stone-100 rounded-lg text-stone-700">
<iconify-icon height="24" icon="lucide:shovel" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Eco</span>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Organic Soil Mix</h3>
<p className="text-xs text-stone-500 line-clamp-2">Nutrient-rich potting mix perfect for all indoor plant varieties.</p>
<div className="mt-4 text-xs font-medium text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>

<a className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all" href="#">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-blue-50 rounded-lg text-blue-700">
<iconify-icon height="24" icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Plant Food</h3>
<p className="text-xs text-stone-500 line-clamp-2">Liquid fertilizer to boost growth and leaf shine.</p>
<div className="mt-4 text-xs font-medium text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>

<a className="group block bg-white rounded-xl p-6 border border-stone-200/60 hover:border-emerald-500/30 hover:shadow-md transition-all" href="#">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-orange-50 rounded-lg text-orange-700">
<iconify-icon height="24" icon="lucide:sprout" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-bold uppercase tracking-wide text-blue-600 bg-blue-50 px-2 py-1 rounded">New</span>
</div>
<h3 className="text-base font-medium text-stone-900 mb-1">Premium Seeds</h3>
<p className="text-xs text-stone-500 line-clamp-2">Grow your own herbs and flowers from our curated seed bank.</p>
<div className="mt-4 text-xs font-medium text-emerald-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Details <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-emerald-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Why People Love Our Plants</h2>
<p className="text-emerald-200/80 max-w-2xl mx-auto text-sm">We don't just sell plants; we deliver a complete botanical experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-emerald-800/50">

<div className="px-6 pt-8 md:pt-0">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-800 text-emerald-300 mb-6">
<iconify-icon height="24" icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Fresh &amp; Healthy</h3>
<p className="text-emerald-200/70 text-sm leading-relaxed">
                        Every plant is inspected by experts before shipping to ensure it arrives lush, vibrant, and pest-free.
                    </p>
</div>

<div className="px-6 pt-8 md:pt-0">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-800 text-emerald-300 mb-6">
<iconify-icon height="24" icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Safe Delivery</h3>
<p className="text-emerald-200/70 text-sm leading-relaxed">
                        Our specialized packaging keeps your plants secure and hydrated during transit. Guaranteed intact arrival.
                    </p>
</div>

<div className="px-6 pt-8 md:pt-0">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-emerald-800 text-emerald-300 mb-6">
<iconify-icon height="24" icon="lucide:recycle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Eco-Friendly</h3>
<p className="text-emerald-200/70 text-sm leading-relaxed">
                        We use sustainable pots, peat-free soil options, and biodegradable packaging materials.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-lg font-bold tracking-tight text-emerald-900">BOTANIKA.</span>
<p className="mt-4 text-xs text-stone-500 leading-relaxed">
                        Helping you grow your own indoor jungle, one leaf at a time.
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Pots &amp; Planters</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-xs text-stone-500">
<li><a className="hover:text-emerald-700 transition-colors" href="#">Plant Care Guide</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Stay Updated</h4>
<form className="flex gap-2">
<input className="w-full bg-white border border-stone-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="Email address" type="email"/>
<button className="bg-emerald-700 text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-emerald-800 transition-colors">
                            Join
                        </button>
</form>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">© 2024 Botanika Inc. All rights reserved.</p>
<div className="flex gap-6 text-stone-400">
<iconify-icon className="hover:text-emerald-700 cursor-pointer transition-colors" height="18" icon="lucide:instagram" width="18"></iconify-icon>
<iconify-icon className="hover:text-emerald-700 cursor-pointer transition-colors" height="18" icon="lucide:twitter" width="18"></iconify-icon>
<iconify-icon className="hover:text-emerald-700 cursor-pointer transition-colors" height="18" icon="lucide:facebook" width="18"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
