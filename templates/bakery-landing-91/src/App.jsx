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
      

<div className="fixed inset-0 z-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(#e5e5e5 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.6'}}>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group mr-2" href="#">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-neutral-900/20">
<span className="font-semibold text-sm leading-none tracking-tight">T</span>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">Tinapayan</span>
</a>
<div className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-500">

<a className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full hover:bg-neutral-100/80 hover:text-neutral-900 transition-all group" href="#">
<div className="w-6 h-6 rounded-full overflow-hidden border border-neutral-200 group-hover:border-neutral-300 relative">
<img alt="Breads" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
</div>
<span>Breads</span>
</a>

<a className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full hover:bg-neutral-100/80 hover:text-neutral-900 transition-all group" href="#">
<div className="w-6 h-6 rounded-full overflow-hidden border border-neutral-200 group-hover:border-neutral-300 relative">
<img alt="Cakes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
</div>
<span>Cakes</span>
</a>
<div className="h-4 w-px bg-neutral-200 mx-2"></div>
<a className="px-2 hover:text-neutral-900 transition-colors" href="#">Locations</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full text-neutral-500 hover:bg-neutral-100 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-neutral-200 hidden md:block"></div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/20 active:scale-95">
<span>Order Online</span>
<span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/50 text-orange-700 mb-8 shadow-sm">
<iconify-icon icon="solar:fire-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">Fresh Batch • 8:00 AM</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.05]">
                    The softest bread <br/>
<span className="text-neutral-400 bg-clip-text text-transparent bg-gradient-to-br from-neutral-400 to-neutral-600">in the city.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-xl mb-10 font-light leading-relaxed">
                    Handcrafted daily using traditional fermentation methods. Experience the nostalgia of classic Filipino baking, refined.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto h-11 px-6 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-neutral-900/10">
                        Start Order
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-11 px-6 bg-white text-neutral-600 border border-neutral-200 rounded-lg text-sm font-medium hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
                        View Menu
                    </button>
</div>
</div>

<div className="mt-20 relative">

<div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-200/40 aspect-[21/9] group">
<img alt="Bakery Display" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/90 backdrop-blur border border-white/20 p-4 rounded-xl shadow-lg flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">Customer Choice</p>
<p className="text-sm font-medium text-neutral-900">Soft Rolls (12pc)</p>
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</header>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Curated Favorites</h2>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 hover:bg-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 hover:bg-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
<img alt="Croissants" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent p-8 flex flex-col justify-end">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded text-[10px] font-medium text-white mb-3">Best Seller</span>
<h3 className="text-2xl font-medium text-white mb-2">Classic Ensaymada</h3>
<p className="text-neutral-300 text-sm font-light mb-4 line-clamp-2">Our signature buttery brioche topped with finely grated queso de bola and sugar.</p>
<button className="flex items-center gap-2 text-sm text-white font-medium hover:text-orange-300 transition-colors opacity-0 group-hover:opacity-100 duration-500">
                                View Details <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 transition-colors p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-100/50">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center">
<iconify-icon className="text-neutral-600" icon="solar:loaf-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold">₱85</span>
</div>
<h3 className="text-lg font-medium text-neutral-900">Potato Bread</h3>
<p className="text-xs text-neutral-500 mt-1">Soft &amp; moist loaf.</p>
</div>
<div className="relative w-full h-24 rounded-lg overflow-hidden mt-4">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-2xl overflow-hidden bg-white border border-neutral-200 hover:border-neutral-300 transition-colors p-6 flex flex-col justify-between hover:shadow-lg hover:shadow-neutral-100/50">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center">
<iconify-icon className="text-neutral-600" icon="solar:donut-bitten-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold">₱45</span>
</div>
<h3 className="text-lg font-medium text-neutral-900">Cheese Roll</h3>
<p className="text-xs text-neutral-500 mt-1">Rich cream cheese.</p>
</div>
<div className="relative w-full h-24 rounded-lg overflow-hidden mt-4">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 group relative rounded-2xl overflow-hidden bg-neutral-900 text-white flex">
<div className="w-1/2 p-8 flex flex-col justify-center relative z-10">
<span className="text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">New Arrival</span>
<h3 className="text-xl font-medium mb-2">Ube Cheese Pandesal</h3>
<p className="text-neutral-400 text-xs leading-relaxed mb-6">Traditional purple yam jam meets creamy cheese in our softest bun yet.</p>
<button className="w-fit flex items-center gap-2 text-xs font-medium border border-neutral-700 px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors">
                            Order Now
                        </button>
</div>
<div className="w-1/2 relative h-full">
<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent z-10"></div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="space-y-2">
<h4 className="text-3xl font-semibold tracking-tight text-neutral-900">1985</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Year Established</p>
</div>
<div className="space-y-2">
<h4 className="text-3xl font-semibold tracking-tight text-neutral-900">5k+</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Daily Loaves</p>
</div>
<div className="space-y-2">
<h4 className="text-3xl font-semibold tracking-tight text-neutral-900">100%</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Preservative Free</p>
</div>
<div className="space-y-2">
<h4 className="text-3xl font-semibold tracking-tight text-neutral-900">12</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Metro Locations</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -left-10 -top-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 aspect-square rounded-full overflow-hidden border-8 border-neutral-50 shadow-2xl shadow-neutral-200/50 max-w-md mx-auto lg:mx-0">
<img alt="Baker" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-10 right-0 lg:-right-10 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-neutral-100 max-w-[200px] z-20 hidden md:block">
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-xs text-neutral-500 italic">"The softest bread I've tasted since childhood."</p>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Tradition in every bite.
                    </h2>
<p className="text-lg text-neutral-500 font-light leading-relaxed mb-8">
                        At Tinapayan Festival, we don't just bake bread; we craft memories. Using locally sourced flour and supporting Filipino farmers, every loaf tells a story of community and dedication.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Master Bakers</h4>
<p className="text-xs text-neutral-500">Decades of experience.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-50 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Natural Ingredients</h4>
<p className="text-xs text-neutral-500">No artificial flavors.</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors" href="#">
                        Read Our Full Story
                        <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="w-6 h-6 bg-white rounded text-neutral-900 flex items-center justify-center text-xs font-bold">T</div>
<span className="font-semibold tracking-tight">Tinapayan Festival</span>
</div>
<p className="text-sm font-light leading-relaxed mb-6">
                        Serving the heart of Manila with freshly baked goods since 1985.
                    </p>

<div className="relative">
<input className="w-full bg-neutral-800 border border-neutral-700 text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-neutral-500 transition-colors" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-2 p-1 text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-12 md:gap-24 flex-wrap">
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Breads</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cakes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pastries</a></li>
<li><a className="hover:text-white transition-colors" href="#">Seasonal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
<p>© 2023 Tinapayan Festival. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span>Manila, PH</span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
