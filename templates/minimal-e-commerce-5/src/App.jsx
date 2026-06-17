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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
},
animation: {
'fade-in': 'fadeIn 0.3s ease-out',
'slide-in': 'slideIn 0.3s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideIn: {
'0%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(0)' },
}
}
}
}
}

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
      

<nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100 z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">

<button @click="mobileMenu = true" className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>

<a className="text-lg font-semibold tracking-tighter uppercase text-zinc-950 flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-zinc-900"></span>
                Lumina
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Electronics</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Workspace</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button @click="cartOpen = true" className="relative text-zinc-500 hover:text-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-900 text-[9px] font-medium text-white ring-2 ring-white" x-show="cartCount &gt; 0" x-text="cartCount"></span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">

<section className="mb-16">
<div className="relative overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100 p-8 md:p-16 text-center lg:text-left lg:flex lg:items-center lg:justify-between gap-12 group">
<div className="max-w-xl space-y-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-tight">Q4 Collection Live</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
                        Curated essentials for the <span className="text-zinc-400">modern workspace.</span>
</h1>
<p className="text-base text-zinc-500 max-w-md mx-auto lg:mx-0 leading-relaxed">
                        Elevate your daily carry with our premium selection of minimalist tech and lifestyle accessories. Designed for focus.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start pt-2">
<button className="w-full sm:w-auto px-6 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-md shadow-sm transition-all flex items-center justify-center gap-2">
                            Shop Collection
                            <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="w-full sm:w-auto px-6 py-2.5 bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 text-sm font-medium rounded-md transition-all">
                            View Lookbook
                        </button>
</div>
</div>

<div className="hidden lg:block relative flex-1 h-64 md:h-80 w-full max-w-md mx-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 rounded-lg transform rotate-3 transition-transform duration-700 group-hover:rotate-1"></div>
<div className="absolute inset-0 bg-white rounded-lg border border-zinc-100 shadow-sm flex items-center justify-center -rotate-2 transition-transform duration-700 group-hover:-rotate-1 overflow-hidden">
<img alt="Hero" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div>
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Categories</h3>
<ul className="space-y-2">
<template x-htmlFor="category in ['All', 'Tech', 'Home', 'Audio', 'Accessories']">
<li>
<button :className="activeCategory === category ? 'text-zinc-900 font-medium bg-zinc-100' : 'text-zinc-500 hover:text-zinc-900'" @click="activeCategory = category" className="w-full text-left text-sm py-1.5 px-2 rounded-md transition-colors" x-text="category"></button>
</li>
</template>
</ul>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Max Price</h3>
<span className="text-xs text-zinc-500 font-mono" x-text="'$' + price"></span>
</div>
<div className="relative h-6 flex items-center">
<input className="relative z-10" max="500" min="0" type="range" x-model="price"/>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Availability</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 select-none">In Stock (14)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all flex items-center justify-center">
<span className="iconify text-white opacity-0 peer-checked:opacity-100 transform scale-50 peer-checked:scale-100 transition-all" data-icon="lucide:check" data-strokeWidth="3" data-width="12"></span>
</div>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 select-none">Pre-order (3)</span>
</label>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Color</h3>
<div className="flex gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-6 h-6 rounded-full bg-zinc-900 ring-1 ring-zinc-200 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-6 h-6 rounded-full bg-zinc-400 ring-1 ring-zinc-200 peer-checked:ring-offset-2 peer-checked:ring-zinc-400 transition-all"></div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-6 h-6 rounded-full bg-white border border-zinc-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-zinc-300 transition-all"></div>
</label>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-6">
<p className="text-sm text-zinc-500">Showing <span className="font-medium text-zinc-900" x-text="products.filter(p =&gt; (activeCategory === 'All' || p.category === activeCategory) &amp;&amp; p.price &lt;= price).length"></span> results</p>
<div className="relative group">
<button className="flex items-center gap-2 text-sm text-zinc-900 font-medium">
                            Sort by: Featured
                            <span className="iconify text-zinc-400" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
<template x-htmlFor="product in products">
<div className="group cursor-pointer" x-show="(activeCategory === 'All' || product.category === activeCategory) &amp;&amp; product.price &lt;= price">
<div className="relative aspect-[4/5] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200/50 mb-3">
<img :alt="product.name" :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"/>

<div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide text-zinc-900 shadow-sm border border-zinc-100" x-show="product.new">
                                    New
                                </div>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button @click.stop="cartCount++" className="w-full bg-white/95 backdrop-blur shadow-sm border border-zinc-200 text-zinc-900 text-xs font-medium py-2 rounded flex items-center justify-center gap-2 hover:bg-zinc-50 active:scale-95 transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                        Quick Add
                                    </button>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900" x-text="product.name"></h3>
<div className="flex items-center justify-between mt-1">
<p className="text-sm text-zinc-500 font-light" x-text="'$' + product.price"></p>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-800"></div>
</div>
</div>
</div>
</div>
</template>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="text-sm font-bold tracking-tight uppercase text-zinc-900 mb-4 block" href="#">Lumina</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                        Designing the future of everyday essentials. Minimalist gear for maximalist creators.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Featured</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Returns</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Stay Updated</h4>
<form className="flex gap-2">
<input className="w-full bg-white border border-zinc-200 rounded px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white px-3 py-2 rounded hover:bg-zinc-800 transition-colors" type="submit">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2024 Lumina Supply. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

<div aria-labelledby="slide-over-title" aria-modal="true" className="relative z-50" role="dialog" style={{display: 'none'}} x-show="cartOpen">

<div @click="cartOpen = false" className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm transition-opacity" x-show="cartOpen" x-transition:enter="ease-out duration-300" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0" x-transition:leave="ease-in duration-200" x-transition:leave-end="opacity-0" x-transition:leave-start="opacity-100"></div>
<div className="fixed inset-0 overflow-hidden">
<div className="absolute inset-0 overflow-hidden">
<div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
<div className="pointer-events-auto w-screen max-w-md" x-show="cartOpen" x-transition:enter="transform transition ease-in-out duration-300 sm:duration-300" x-transition:enter-end="translate-x-0" x-transition:enter-start="translate-x-full" x-transition:leave="transform transition ease-in-out duration-300 sm:duration-300" x-transition:leave-end="translate-x-full" x-transition:leave-start="translate-x-0">
<div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
<div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
<div className="flex items-start justify-between border-b border-zinc-100 pb-4">
<h2 className="text-lg font-medium text-zinc-900" id="slide-over-title">Shopping Cart</h2>
<div className="ml-3 flex h-7 items-center">
<button @click="cartOpen = false" className="-m-2 p-2 text-zinc-400 hover:text-zinc-500" type="button">
<span className="sr-only">Close panel</span>
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
<div className="mt-8">
<div className="flow-root">
<ul className="-my-6 divide-y divide-zinc-100" role="list">
<li className="flex py-6">
<div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200">
<img className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="ml-4 flex flex-1 flex-col">
<div>
<div className="flex justify-between text-base font-medium text-zinc-900">
<h3><a href="#">Mechanical Keypad</a></h3>
<p className="ml-4">$149.00</p>
</div>
<p className="mt-1 text-sm text-zinc-500">Matte Black</p>
</div>
<div className="flex flex-1 items-end justify-between text-sm">
<p className="text-zinc-500">Qty 1</p>
<button className="font-medium text-zinc-500 hover:text-zinc-900" type="button">Remove</button>
</div>
</div>
</li>

<li className="flex py-6">
<div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-zinc-200">
<img className="h-full w-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="ml-4 flex flex-1 flex-col">
<div>
<div className="flex justify-between text-base font-medium text-zinc-900">
<h3><a href="#">Pour Over Set</a></h3>
<p className="ml-4">$65.00</p>
</div>
<p className="mt-1 text-sm text-zinc-500">Ceramic / Oak</p>
</div>
<div className="flex flex-1 items-end justify-between text-sm">
<p className="text-zinc-500">Qty 1</p>
<button className="font-medium text-zinc-500 hover:text-zinc-900" type="button">Remove</button>
</div>
</div>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-100 px-4 py-6 sm:px-6 bg-zinc-50/50">
<div className="flex justify-between text-base font-medium text-zinc-900">
<p>Subtotal</p>
<p>$214.00</p>
</div>
<p className="mt-0.5 text-sm text-zinc-500">Shipping and taxes calculated at checkout.</p>
<div className="mt-6">
<a className="flex items-center justify-center rounded-md border border-transparent bg-zinc-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-zinc-800 transition-all" href="#">Checkout</a>
</div>
<div className="mt-6 flex justify-center text-center text-sm text-zinc-500">
<p>
                                        or
                                        <button @click="cartOpen = false" className="font-medium text-zinc-900 hover:text-zinc-800" type="button">
                                            Continue Shopping
                                            <span aria-hidden="true"> →</span>
</button>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 md:hidden" style={{display: 'none'}} x-show="mobileMenu">
<div @click="mobileMenu = false" className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm"></div>
<div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl p-6 transform transition-transform duration-300" x-transition:enter-end="translate-x-0" x-transition:enter-start="-translate-x-full">
<div className="flex items-center justify-between mb-8">
<span className="text-lg font-bold tracking-tighter uppercase">Lumina</span>
<button @click="mobileMenu = false">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<nav className="space-y-4">
<a className="block text-zinc-900 font-medium" href="#">New Arrivals</a>
<a className="block text-zinc-500" href="#">Electronics</a>
<a className="block text-zinc-500" href="#">Workspace</a>
<a className="block text-zinc-500" href="#">Accessories</a>
</nav>
</div>
</div>

    </>
  );
}
