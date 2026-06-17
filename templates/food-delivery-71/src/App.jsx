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
      

<input aria-hidden="true" className="peer/cart hidden" id="cart-toggle" type="checkbox"/>
<input aria-hidden="true" className="peer/product hidden" id="product-toggle" type="checkbox"/>

<nav className="sticky top-0 z-40 w-full backdrop-blur-xl border-b bg-white/80 border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-neutral-900" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs tracking-tighter bg-neutral-900 text-white">
            FD
          </div>
          FEED.
        </a>

<div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-8">
<div className="flex items-center p-1 rounded-full w-full max-w-[150px] shrink-0 bg-neutral-100/80">
<button className="flex-1 text-xs font-medium py-1.5 rounded-full shadow-sm transition-all bg-white text-neutral-900">
              Delivery
            </button>
<button className="flex-1 text-xs font-medium py-1.5 rounded-full text-neutral-500 transition-all hover:text-neutral-900">
              Pickup
            </button>
</div>
<div className="flex-1 relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 group-focus-within:text-neutral-900 transition-colors text-neutral-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full border rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-4 focus:ring-neutral-100 focus:border-neutral-300 focus:bg-white transition-all outline-none placeholder:text-neutral-400 bg-neutral-50 border-neutral-200/50 text-neutral-900" placeholder="Search for dishes..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 border px-1.5 py-0.5 rounded text-xs font-medium tracking-tighter shadow-sm bg-white border-neutral-200 text-neutral-400">
              ⌘K
            </div>
</div>
</div>

<div className="flex items-center gap-3">
<label className="relative p-2 text-neutral-500 transition-colors hidden sm:block hover:text-neutral-900 cursor-pointer" htmlFor="cart-toggle">
<iconify-icon height="22" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute top-1.5 right-1 w-2 h-2 rounded-full border-2 box-content bg-neutral-900 border-white"></span>
</label>
<button className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors bg-neutral-50 border-neutral-200/80 hover:bg-neutral-100">
<iconify-icon className="text-neutral-600" height="18" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">

<header className="flex flex-col lg:flex-row gap-8 items-start lg:items-end justify-between mb-10">
<div className="max-w-xl">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3 leading-tight text-neutral-900">
            Exceptional food,
            <br/>
            delivered effortlessly.
          </h1>
<p className="text-base text-neutral-500 font-normal">
            Discover our culinary gems and have them at your door in under 30
            minutes.
          </p>
</div>

<div className="flex flex-col gap-1.5 w-full lg:w-auto">
<span className="text-xs font-medium uppercase tracking-widest pl-1 text-neutral-400">
            Delivering to
          </span>
<button className="flex items-center justify-between gap-4 border rounded-2xl px-4 py-3 cursor-pointer transition-all shadow-sm w-full lg:w-auto text-left group bg-white border-neutral-200 hover:border-neutral-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-colors bg-neutral-100 text-neutral-700">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Current Location</p>
<p className="text-xs font-medium text-neutral-500 truncate max-w-[150px]">100 Design Avenue, NY</p>
</div>
</div>
<iconify-icon className="group-hover:text-neutral-600 transition-colors text-neutral-400" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</header>

<section className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

<div className="flex gap-2 overflow-x-auto hide-scrollbar w-full sm:w-auto pb-2 sm:pb-0 relative">
<button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shrink-0 shadow-sm transition-transform active:scale-95 bg-neutral-900 text-white">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            All
          </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shrink-0 transition-colors active:scale-95 bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50">Burgers</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shrink-0 transition-colors active:scale-95 bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50">Pizza</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shrink-0 transition-colors active:scale-95 bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50">Healthy</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shrink-0 transition-colors active:scale-95 bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50">Sushi</button>
</div>

<div className="flex items-center gap-4 border-l pl-4 shrink-0 hidden md:flex border-neutral-200">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-4 h-4 rounded border group-hover:border-neutral-400 transition-colors flex items-center justify-center border-neutral-300 bg-white">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity absolute text-white" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<div className="absolute inset-0 rounded opacity-0 peer-checked:opacity-100 transition-opacity -z-10 bg-neutral-900"></div>
</div>
<span className="text-sm font-medium group-hover:text-neutral-900 transition-colors text-neutral-600">Vegetarian</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative w-4 h-4 rounded border group-hover:border-neutral-400 transition-colors flex items-center justify-center border-neutral-300 bg-white">
<input checked="" className="peer sr-only" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity absolute text-white" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
<div className="absolute inset-0 rounded opacity-0 peer-checked:opacity-100 transition-opacity -z-10 bg-neutral-900"></div>
</div>
<span className="text-sm font-medium text-neutral-900">Offers Deals</span>
</label>
</div>

<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border shrink-0 border-neutral-200 text-neutral-600">
<iconify-icon icon="solar:tuning-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</section>

<section>
<div className="mb-6 flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight text-neutral-900">Featured Dishes</h2>
<a className="text-sm font-medium text-neutral-500 transition-colors flex items-center gap-1 group hover:text-neutral-900" href="#">
            View all
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10">

<label className="group block cursor-pointer flex flex-col h-full" htmlFor="product-toggle">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border bg-neutral-100 border-neutral-100">
<img alt="Burger" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm text-xs font-medium flex items-center gap-1.5 border bg-white/90 text-neutral-900 border-white/20">
                Popular
              </div>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center hover:text-indigo-500 transition-colors shadow-sm border z-20 bg-white/90 text-neutral-400 border-white/20">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-semibold truncate pr-2 tracking-tight text-neutral-900">Classic Smashburger</h3>
<div className="text-base font-semibold shrink-0 text-neutral-900">$12.99</div>
</div>
<p className="text-sm text-neutral-500 truncate mb-3 px-1">Double beef patty, cheddar, house sauce</p>
<div className="mt-auto px-1 flex items-center justify-between gap-2 text-xs font-medium text-neutral-600">
<div className="flex items-center gap-1 text-neutral-500">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon> 4.9
              </div>
<div className="flex items-center justify-center px-4 py-1.5 rounded-full transition-colors font-semibold bg-neutral-100 group-hover:bg-neutral-200 text-neutral-900">
                Add
              </div>
</div>
</label>

<label className="group block cursor-pointer flex flex-col h-full" htmlFor="product-toggle">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border bg-neutral-100 border-neutral-100">
<img alt="Pizza" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center hover:text-indigo-500 transition-colors shadow-sm border z-20 bg-white/90 text-neutral-400 border-white/20">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-semibold truncate pr-2 tracking-tight text-neutral-900">Margherita Pizza</h3>
<div className="text-base font-semibold shrink-0 text-neutral-900">$16.99</div>
</div>
<p className="text-sm text-neutral-500 truncate mb-3 px-1">Fresh mozzarella, basil, tomato sauce</p>
<div className="mt-auto px-1 flex items-center justify-between gap-2 text-xs font-medium text-neutral-600">
<div className="flex items-center gap-1 text-neutral-500">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon> 4.7
              </div>
<div className="flex items-center justify-center px-4 py-1.5 rounded-full transition-colors font-semibold bg-neutral-100 group-hover:bg-neutral-200 text-neutral-900">
                Add
              </div>
</div>
</label>

<label className="group block cursor-pointer flex flex-col h-full" htmlFor="product-toggle">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border bg-neutral-100 border-neutral-100">
<img alt="Healthy Bowl" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm text-xs font-medium flex items-center gap-1.5 border bg-white/90 text-neutral-900 border-white/20">
                New
              </div>
<div className="absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center text-indigo-500 transition-colors shadow-sm border z-20 bg-white/90 border-white/20">
<iconify-icon icon="solar:heart-bold" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-start mb-1 px-1">
<h3 className="text-base font-semibold truncate pr-2 tracking-tight text-neutral-900">Green Market Bowl</h3>
<div className="text-base font-semibold shrink-0 text-neutral-900">$14.99</div>
</div>
<p className="text-sm text-neutral-500 truncate mb-3 px-1">Quinoa, avocado, roasted veggies</p>
<div className="mt-auto px-1 flex items-center justify-between gap-2 text-xs font-medium text-neutral-600">
<div className="flex items-center gap-1 text-neutral-500">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon> 4.9
              </div>
<div className="flex items-center justify-center px-4 py-1.5 rounded-full transition-colors font-semibold bg-neutral-100 group-hover:bg-neutral-200 text-neutral-900">
                Add
              </div>
</div>
</label>

<article className="group block cursor-pointer flex flex-col h-full">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 border bg-neutral-100 border-neutral-100">
<img alt="Sushi" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 backdrop-blur-[2px] flex items-center justify-center z-10 bg-white/40">
<span className="text-xs font-medium px-3 py-1.5 rounded-full shadow-lg bg-neutral-900 text-white">Sold Out</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center hover:text-indigo-500 transition-colors shadow-sm border z-20 bg-white/90 text-neutral-400 border-white/20">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start mb-1 px-1 opacity-70">
<h3 className="text-base font-semibold truncate pr-2 tracking-tight text-neutral-900">Spicy Tuna Roll</h3>
<div className="text-base font-semibold shrink-0 text-neutral-900">$11.99</div>
</div>
<p className="text-sm text-neutral-500 truncate mb-3 px-1 opacity-70">Fresh tuna, spicy mayo, cucumber</p>
<div className="mt-auto px-1 flex items-center justify-between gap-2 text-xs font-medium text-neutral-500 opacity-70">
<div className="flex items-center gap-1 text-neutral-500">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon> 4.6
              </div>
<button className="flex items-center justify-center px-4 py-1.5 rounded-full font-semibold cursor-not-allowed bg-neutral-100 text-neutral-400" disabled="">
                Add
              </button>
</div>
</article>
</div>
</section>
</main>

<div className="md:hidden fixed bottom-0 w-full border-t flex justify-around items-center h-16 px-4 z-40 pb-safe bg-white border-neutral-200">
<button className="flex flex-col items-center gap-1 text-neutral-900">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-medium scale-90">Home</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-neutral-400 hover:text-neutral-900">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-medium scale-90">Search</span>
</button>
<label className="flex flex-col items-center gap-1 transition-colors relative text-neutral-400 hover:text-neutral-900 cursor-pointer" htmlFor="cart-toggle">
<iconify-icon icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute top-0 right-1 w-2 h-2 rounded-full border-2 box-content bg-neutral-900 border-white"></span>
<span className="text-xs font-medium scale-90">Cart</span>
</label>
<button className="flex flex-col items-center gap-1 transition-colors text-neutral-400 hover:text-neutral-900">
<iconify-icon icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="text-xs font-medium scale-90">Profile</span>
</button>
</div>

<label className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 opacity-0 invisible peer-checked/cart:opacity-100 peer-checked/cart:visible transition-all duration-300 cursor-pointer" htmlFor="cart-toggle"></label>
<aside className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-[60] translate-x-full peer-checked/cart:translate-x-0 transition-transform duration-300 flex flex-col shadow-2xl">

<header className="flex items-center justify-between p-6 border-b border-neutral-100 shrink-0">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
          Your Cart <span className="bg-neutral-100 text-sm py-0.5 px-2.5 rounded-full text-neutral-600 font-medium">2</span>
</h2>
<label className="p-2 -mr-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-500" htmlFor="cart-toggle">
<iconify-icon icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</label>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar">

<div className="flex gap-4">
<div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border border-neutral-100 relative">
<img alt="Burger" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start gap-2">
<h3 className="text-sm font-semibold text-neutral-900 leading-tight">Classic Smashburger</h3>
<span className="text-sm font-semibold text-neutral-900 shrink-0">$12.99</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Medium Rare, Extra Bacon</p>
</div>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-3 border border-neutral-200 rounded-full px-3 py-1 bg-neutral-50">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-xs font-semibold w-3 text-center text-neutral-900">1</span>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<button className="text-xs font-medium text-neutral-400 hover:text-red-600 transition-colors underline underline-offset-2">Remove</button>
</div>
</div>
</div>

<div className="flex gap-4">
<div className="w-20 h-20 shrink-0 rounded-2xl overflow-hidden border border-neutral-100 relative">
<img alt="Bowl" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start gap-2">
<h3 className="text-sm font-semibold text-neutral-900 leading-tight">Green Market Bowl</h3>
<span className="text-sm font-semibold text-neutral-900 shrink-0">$14.99</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Add Grilled Chicken</p>
</div>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-3 border border-neutral-200 rounded-full px-3 py-1 bg-neutral-50">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:minus-linear"></iconify-icon></button>
<span className="text-xs font-semibold w-3 text-center text-neutral-900">1</span>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:add-linear"></iconify-icon></button>
</div>
<button className="text-xs font-medium text-neutral-400 hover:text-red-600 transition-colors underline underline-offset-2">Remove</button>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-neutral-100 bg-neutral-50/50 pb-safe shrink-0">
<div className="space-y-3 mb-6">
<div className="flex justify-between text-sm text-neutral-500">
<span>Subtotal</span>
<span className="font-medium text-neutral-900">$27.98</span>
</div>
<div className="flex justify-between text-sm text-neutral-500">
<span>Delivery Fee</span>
<span className="font-medium text-neutral-900">$2.99</span>
</div>
<div className="flex justify-between text-sm text-neutral-500">
<span>Taxes</span>
<span className="font-medium text-neutral-900">$2.40</span>
</div>
<div className="flex justify-between text-base font-semibold text-neutral-900 pt-3 border-t border-neutral-200">
<span>Total</span>
<span>$33.37</span>
</div>
</div>
<button className="w-full bg-neutral-900 text-white rounded-full py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/20 active:scale-[0.98]">
          Go to Checkout
          <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</aside>

<label className="fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-50 opacity-0 invisible peer-checked/product:opacity-100 peer-checked/product:visible transition-all duration-300 cursor-pointer" htmlFor="product-toggle"></label>
<div className="fixed inset-x-0 bottom-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[480px] bg-white rounded-t-3xl md:rounded-3xl z-[60] translate-y-full md:translate-y-4 md:scale-95 md:opacity-0 peer-checked/product:translate-y-0 peer-checked/product:md:scale-100 peer-checked/product:md:opacity-100 transition-all duration-300 flex flex-col md:max-h-[85vh] h-[90vh] md:h-auto shadow-2xl">

<label className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-neutral-600 hover:bg-white cursor-pointer z-10 shadow-sm border border-neutral-200 transition-colors" htmlFor="product-toggle">
<iconify-icon icon="solar:close-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</label>
<div className="overflow-y-auto hide-scrollbar flex-1 pb-safe md:pb-0">

<div className="w-full h-64 sm:h-72 relative shrink-0">
<img alt="Classic Smashburger" className="w-full h-full object-cover md:rounded-t-3xl" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="p-6">
<div className="flex justify-between items-start mb-2 gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 leading-tight">Classic Smashburger</h2>
<span className="text-xl font-semibold tracking-tight text-neutral-900 shrink-0">$12.99</span>
</div>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
            Double smashed beef patty, aged cheddar, caramelized onions, and our signature house sauce on a perfectly toasted brioche bun. Served with a side of homemade pickles.
          </p>
<hr className="border-neutral-100 mb-8"/>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold tracking-tight text-neutral-900">Meat Temperature</h3>
<span className="text-xs font-semibold tracking-wide text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded uppercase">Required</span>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="meat_temp" type="radio"/>
<div className="border border-neutral-200 rounded-xl p-3.5 text-center peer-checked:border-neutral-900 peer-checked:bg-neutral-50 peer-checked:shadow-sm transition-all group-hover:border-neutral-300">
<span className="text-sm font-semibold text-neutral-600 peer-checked:text-neutral-900">Medium Rare</span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="meat_temp" type="radio"/>
<div className="border border-neutral-200 rounded-xl p-3.5 text-center peer-checked:border-neutral-900 peer-checked:bg-neutral-50 peer-checked:shadow-sm transition-all group-hover:border-neutral-300">
<span className="text-sm font-semibold text-neutral-600 peer-checked:text-neutral-900">Medium</span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="meat_temp" type="radio"/>
<div className="border border-neutral-200 rounded-xl p-3.5 text-center peer-checked:border-neutral-900 peer-checked:bg-neutral-50 peer-checked:shadow-sm transition-all group-hover:border-neutral-300">
<span className="text-sm font-semibold text-neutral-600 peer-checked:text-neutral-900">Medium Well</span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="meat_temp" type="radio"/>
<div className="border border-neutral-200 rounded-xl p-3.5 text-center peer-checked:border-neutral-900 peer-checked:bg-neutral-50 peer-checked:shadow-sm transition-all group-hover:border-neutral-300">
<span className="text-sm font-semibold text-neutral-600 peer-checked:text-neutral-900">Well Done</span>
</div>
</label>
</div>
</div>

<div className="mb-2">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold tracking-tight text-neutral-900">Tasty Add-ons</h3>
<span className="text-xs font-semibold tracking-wide text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded uppercase">Optional</span>
</div>
<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer group p-3.5 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors bg-white">
<div className="flex items-center gap-3">
<div className="relative w-5 h-5 rounded border border-neutral-300 bg-white group-hover:border-neutral-400 transition-colors flex items-center justify-center shrink-0">
<input checked="" className="peer sr-only" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity absolute text-white z-10" icon="solar:check-read-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
<div className="absolute inset-0 rounded opacity-0 peer-checked:opacity-100 transition-opacity bg-neutral-900"></div>
</div>
<span className="text-sm font-medium text-neutral-700 peer-checked:text-neutral-900">Extra Bacon</span>
</div>
<span className="text-sm font-medium text-neutral-500">+$2.00</span>
</label>
<label className="flex items-center justify-between cursor-pointer group p-3.5 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors bg-white">
<div className="flex items-center gap-3">
<div className="relative w-5 h-5 rounded border border-neutral-300 bg-white group-hover:border-neutral-400 transition-colors flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity absolute text-white z-10" icon="solar:check-read-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
<div className="absolute inset-0 rounded opacity-0 peer-checked:opacity-100 transition-opacity bg-neutral-900"></div>
</div>
<span className="text-sm font-medium text-neutral-700 peer-checked:text-neutral-900">Extra Cheese</span>
</div>
<span className="text-sm font-medium text-neutral-500">+$1.50</span>
</label>
<label className="flex items-center justify-between cursor-pointer group p-3.5 border border-neutral-200 rounded-xl hover:border-neutral-300 transition-colors bg-white">
<div className="flex items-center gap-3">
<div className="relative w-5 h-5 rounded border border-neutral-300 bg-white group-hover:border-neutral-400 transition-colors flex items-center justify-center shrink-0">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity absolute text-white z-10" icon="solar:check-read-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
<div className="absolute inset-0 rounded opacity-0 peer-checked:opacity-100 transition-opacity bg-neutral-900"></div>
</div>
<span className="text-sm font-medium text-neutral-700 peer-checked:text-neutral-900">Gluten-Free Bun</span>
</div>
<span className="text-sm font-medium text-neutral-500">+$3.00</span>
</label>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-neutral-100 bg-white md:rounded-b-3xl flex items-center gap-4 shrink-0 z-20 pb-safe md:pb-4 shadow-[0_-10px_30px_rgba(0,0,0,0.03)]">

<div className="flex items-center gap-4 border border-neutral-200 rounded-full px-4 py-3 bg-neutral-50 shrink-0">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:minus-linear" width="18"></iconify-icon></button>
<span className="text-sm font-semibold w-4 text-center text-neutral-900">1</span>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors"><iconify-icon icon="solar:add-linear" width="18"></iconify-icon></button>
</div>

<label className="flex-1 bg-neutral-900 text-white rounded-full py-3.5 text-sm font-semibold hover:bg-neutral-800 transition-all flex items-center justify-between px-6 shadow-lg shadow-neutral-900/20 active:scale-[0.98] cursor-pointer" htmlFor="product-toggle">
<span>Add to Cart</span>
<span>$14.99</span>
</label>
</div>
</div>

    </>
  );
}
