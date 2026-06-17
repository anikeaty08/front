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
      

<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-orange-500 rounded-lg flex items-center justify-center text-white rotate-3 group-hover:rotate-0 transition-transform duration-300">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="m12 2 10 18H2L12 2Z"></path><path d="m12 9 5 11"></path><path d="m12 9-5 11"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Samosa King</span>
</a>

<div className="hidden md:flex items-center gap-2 text-sm text-slate-500 bg-slate-100/50 py-1.5 px-3 rounded-full hover:bg-slate-100 transition-colors cursor-pointer">
<i className="w-3.5 h-3.5 text-orange-600" data-lucide="map-pin"></i>
<span className="font-medium text-slate-700">Downtown Cloud Kitchen</span>
<span className="text-slate-400">•</span>
<span>25 mins</span>
</div>
</div>

<div className="flex items-center gap-3 md:gap-4">
<div className="hidden md:flex items-center bg-slate-100 rounded-md px-3 py-2 w-64 border border-transparent focus-within:border-orange-200 focus-within:ring-2 focus-within:ring-orange-100 transition-all">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder:text-slate-400 text-slate-700 font-medium" placeholder="Search samosas..." type="text"/>
<span className="text-xs text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">⌘K</span>
</div>
<button className="relative p-2 text-slate-500 hover:text-slate-800 transition-colors">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-orange-500 ring-2 ring-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-200 cursor-pointer">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 bg-white p-6 gap-8 overflow-y-auto">
<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Categories</h3>
<nav className="flex flex-col gap-1">
<a className="flex items-center justify-between px-3 py-2 bg-orange-50 text-orange-700 rounded-md text-sm font-medium" href="#">
<span className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="flame"></i> Bestsellers</span>
<span className="text-xs bg-orange-200/50 px-1.5 py-0.5 rounded-full">4</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors" href="#">
<span className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="carrot"></i> Vegetarian</span>
<span className="text-xs text-slate-400">8</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors" href="#">
<span className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="drumstick"></i> Non-Veg</span>
<span className="text-xs text-slate-400">3</span>
</a>
<a className="flex items-center justify-between px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors" href="#">
<span className="flex items-center gap-3"><i className="w-4 h-4" data-lucide="ice-cream-2"></i> Sweet Tooth</span>
<span className="text-xs text-slate-400">2</span>
</a>
</nav>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Dietary</h3>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 border border-slate-300 rounded text-orange-500 focus:ring-offset-0 focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer appearance-none checked:bg-orange-500 checked:border-orange-500" type="checkbox"/>
<i className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Gluten Free</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-4 w-4 border border-slate-300 rounded text-orange-500 focus:ring-offset-0 focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer appearance-none checked:bg-orange-500 checked:border-orange-500" type="checkbox"/>
<i className="absolute top-0.5 left-0.5 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-600 group-hover:text-slate-900 font-medium">Jain Friendly</span>
</label>
</div>
</div>
<div className="mt-auto bg-slate-900 rounded-xl p-4 text-white relative overflow-hidden">
<div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-500 rounded-full blur-2xl opacity-20"></div>
<h4 className="font-medium text-sm mb-1 z-10 relative">Party Order?</h4>
<p className="text-xs text-slate-400 mb-3 z-10 relative leading-relaxed">Get 20% off on bulk orders above 50 samosas.</p>
<button className="w-full py-2 bg-white/10 hover:bg-white/20 text-xs font-medium rounded-lg border border-white/10 transition-colors">Contact Support</button>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<div className="px-4 lg:px-8 py-6">
<div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between border border-orange-100/50 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 max-w-lg">
<span className="inline-block px-2 py-1 bg-white/60 backdrop-blur-sm border border-orange-200 rounded text-xs font-semibold text-orange-700 mb-3 tracking-wide uppercase">New Arrival</span>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">The Butter Chicken Blast</h1>
<p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed max-w-sm">Authentic Makhani gravy encased in a golden, crispy shell. A fusion masterpiece waiting for you.</p>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2">
                            Order Now <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="relative z-10 mt-6 md:mt-0">

<div className="w-48 h-32 md:w-64 md:h-48 bg-orange-200 rounded-xl shadow-inner flex items-center justify-center overflow-hidden">
<img alt="Samosa Hero" className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="lg:hidden flex gap-2 px-4 overflow-x-auto hide-scroll pb-4">
<button className="whitespace-nowrap px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-full">All</button>
<button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Veg</button>
<button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Non-Veg</button>
<button className="whitespace-nowrap px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-full">Sweet</button>
</div>

<div className="px-4 lg:px-8 pb-24">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">Recommended for You</h2>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"><i className="w-4 h-4" data-lucide="grid"></i></button>
<button className="p-1.5 rounded-md hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"><i className="w-4 h-4" data-lucide="list"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 p-3 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col">
<div className="relative h-48 w-full bg-slate-100 rounded-lg overflow-hidden mb-3">
<img alt="Classic Aloo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-green-700 border border-green-100">Veg</div>
<div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold text-slate-900 shadow-sm flex items-center gap-1">
<i className="w-3 h-3 text-slate-400" data-lucide="clock"></i> 15m
                            </div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900 text-lg tracking-tight">Classic Aloo</h3>
<div className="flex items-center gap-0.5 text-orange-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs font-semibold text-slate-700">4.8</span>
</div>
</div>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Ideally spiced potato and pea filling in a crunchy pastry shell. Served with mint chutney.</p>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
<span className="font-semibold text-slate-900">$2.50</span>
<button className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-3 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col">
<div className="relative h-48 w-full bg-slate-100 rounded-lg overflow-hidden mb-3">
<img alt="Butter Chicken" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-red-700 border border-red-100">Non-Veg</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900 text-lg tracking-tight">Butter Chicken</h3>
<div className="flex items-center gap-0.5 text-orange-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs font-semibold text-slate-700">4.9</span>
</div>
</div>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Creamy tomato sauce, tender chicken chunks, and fenugreek. A royal treat.</p>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
<span className="font-semibold text-slate-900">$4.00</span>
<button className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-3 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col">
<div className="relative h-48 w-full bg-slate-100 rounded-lg overflow-hidden mb-3">
<img alt="Cheese Corn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-green-700 border border-green-100">Veg</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900 text-lg tracking-tight">Cheesy Corn</h3>
<div className="flex items-center gap-0.5 text-orange-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs font-semibold text-slate-700">4.7</span>
</div>
</div>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Molten mozzarella cheese with sweet corn kernels and italian herbs.</p>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
<span className="font-semibold text-slate-900">$3.50</span>
<div className="flex items-center gap-3">
<button className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-sm font-medium">1</span>
<button className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-3 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col">
<div className="relative h-48 w-full bg-slate-100 rounded-lg overflow-hidden mb-3">
<img alt="Choco Hazelnut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-purple-700 border border-purple-100">Sweet</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900 text-lg tracking-tight">Choco Hazelnut</h3>
<div className="flex items-center gap-0.5 text-slate-300">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="text-xs font-semibold text-slate-400">New</span>
</div>
</div>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Dessert samosa filled with rich chocolate ganache and roasted hazelnuts.</p>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
<span className="font-semibold text-slate-900">$3.00</span>
<button className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-3 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col opacity-75 grayscale hover:grayscale-0">
<div className="relative h-48 w-full bg-slate-100 rounded-lg overflow-hidden mb-3">
<img alt="Mutton Keema" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-white/50 flex items-center justify-center">
<span className="bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-semibold">Sold Out</span>
</div>
</div>
<div className="flex flex-col flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900 text-lg tracking-tight">Mutton Keema</h3>
</div>
<p className="text-sm text-slate-500 line-clamp-2 mb-4">Minced lamb slow-cooked with garden peas and aromatic spices.</p>
<div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
<span className="font-semibold text-slate-400">$4.50</span>
<button className="h-8 w-8 rounded-full bg-slate-100 text-slate-300 cursor-not-allowed flex items-center justify-center">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden xl:flex flex-col w-80 border-l border-slate-200 bg-white">
<div className="p-6 flex-1 flex flex-col">
<h2 className="text-lg font-medium text-slate-900 tracking-tight mb-6">Your Order</h2>

<div className="flex flex-col gap-6 flex-1 overflow-y-auto pr-2">

<div className="flex gap-3">
<img className="h-12 w-12 rounded-lg object-cover bg-slate-100" src="https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-slate-900">Classic Aloo</h4>
<span className="text-sm text-slate-500">$5.00</span>
</div>
<div className="flex items-center justify-between mt-2">
<p className="text-xs text-slate-400">Regular Spice</p>
<div className="flex items-center gap-2 border border-slate-200 rounded px-1">
<button className="text-slate-400 hover:text-slate-600"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-xs font-medium w-3 text-center">2</span>
<button className="text-slate-400 hover:text-slate-600"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
</div>
</div>
</div>

<div className="flex gap-3">
<img className="h-12 w-12 rounded-lg object-cover bg-slate-100" src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-medium text-slate-900">Cheesy Corn</h4>
<span className="text-sm text-slate-500">$3.50</span>
</div>
<div className="flex items-center justify-between mt-2">
<p className="text-xs text-slate-400">Extra Cheese</p>
<div className="flex items-center gap-2 border border-slate-200 rounded px-1">
<button className="text-slate-400 hover:text-slate-600"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="text-xs font-medium w-3 text-center">1</span>
<button className="text-slate-400 hover:text-slate-600"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
<div className="flex justify-between text-sm text-slate-500">
<span>Subtotal</span>
<span>$8.50</span>
</div>
<div className="flex justify-between text-sm text-slate-500">
<span>Delivery</span>
<span>$1.50</span>
</div>
<div className="flex justify-between text-base font-medium text-slate-900 pt-2">
<span>Total</span>
<span>$10.00</span>
</div>
</div>
<button className="w-full bg-slate-900 text-white rounded-lg py-3 mt-6 text-sm font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                    Checkout <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<p className="text-[10px] text-center text-slate-400 mt-3 flex items-center justify-center gap-1"><i className="w-3 h-3" data-lucide="lock"></i> Secure Transaction</p>
</div>
</aside>
</div>

<div className="fixed bottom-4 left-4 right-4 xl:hidden z-40">
<button className="w-full bg-slate-900 text-white rounded-xl shadow-xl shadow-slate-900/20 p-4 flex items-center justify-between group active:scale-95 transition-all">
<div className="flex items-center gap-3">
<div className="bg-white/20 px-2 py-1 rounded text-xs font-semibold">3 Items</div>
<div className="flex flex-col items-start">
<span className="text-sm font-medium">$10.00</span>
<span className="text-[10px] text-slate-300">Plus taxes</span>
</div>
</div>
<div className="flex items-center gap-1 font-medium text-sm">
                View Cart <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</div>
</button>
</div>


    </>
  );
}
