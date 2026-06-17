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



        // Initialize Lucide Icons
        lucide.createIcons();

        function navigate(viewId) {
            // Hide all views
            const views = ['view-home', 'view-product', 'view-cart'];
            views.forEach(id => {
                const el = document.getElementById(id);
                if(el) {
                    el.classList.add('hidden');
                    el.classList.remove('block');
                }
            });
            
            // Show selected view
            const target = document.getElementById('view-' + viewId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<nav className="fixed w-full top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-medium tracking-tight text-stone-900 flex items-center gap-2" href="javascript:void(0)" onclick="navigate('home')">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
                C R U M B
            </a>

<div className="hidden md:flex items-center gap-8 text-base font-normal text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="javascript:void(0)" onclick="navigate('home')">Collection</a>
<a className="hover:text-stone-900 transition-colors" href="javascript:void(0)" onclick="navigate('home')">Our Process</a>
<a className="hover:text-stone-900 transition-colors" href="javascript:void(0)" onclick="navigate('home')">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="text-stone-500 hover:text-stone-900 transition-colors flex items-center justify-center relative" onclick="navigate('cart')">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-stone-900 text-white flex items-center justify-center text-[8px] font-normal border border-[#fafafa]">2</span>
</button>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-stone-900 px-4 text-xs font-normal text-white shadow transition-colors hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-950" href="javascript:void(0)" onclick="navigate('home')">
                    Order Now
                </a>
</div>
</div>
</nav>

<div className="flex-grow" id="app">

<main className="block" id="view-home">

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex text-xs font-normal text-stone-600 bg-white border-stone-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                            Accepting orders for this weekend
                        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-6">
                            Artisan cakes, <br className="hidden md:block"/> baked with intention.
                        </h1>
<p className="text-xl text-stone-500 mb-8 max-w-lg leading-relaxed font-normal">
                            Handcrafted in small batches using the finest local ingredients. Each cake is designed to elevate your simplest moments into lasting memories.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center transition-colors hover:bg-stone-800 text-base font-normal text-white bg-stone-900 h-11 rounded-md pr-8 pl-8 shadow" href="#collection">
                                View Collection
                            </a>
<a className="inline-flex h-11 items-center justify-center rounded-md border border-stone-200 bg-white px-8 text-base font-normal text-stone-900 shadow-sm transition-colors hover:bg-stone-50 hover:text-stone-900" href="#process">
                                Learn More
                            </a>
</div>
</div>

<div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden border border-stone-200/60 shadow-sm bg-stone-100">
<img alt="Beautiful layered cake with frosting" className="object-cover w-full h-full object-center hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-200/60" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-start">
<div className="h-10 w-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-4 text-stone-700">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight mb-2">Locally Sourced</h3>
<p className="text-base text-stone-500 leading-relaxed">We partner with local farms to bring you the freshest organic dairy, eggs, and seasonal fruits.</p>
</div>
<div className="flex flex-col items-start">
<div className="h-10 w-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-4 text-stone-700">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight mb-2">Made to Order</h3>
<p className="text-base text-stone-500 leading-relaxed">No display cases here. Every cake is baked fresh exactly when you order it, ensuring perfect texture and flavor.</p>
</div>
<div className="flex flex-col items-start">
<div className="h-10 w-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center mb-4 text-stone-700">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight mb-2">Pure Ingredients</h3>
<p className="text-base text-stone-500 leading-relaxed">Zero artificial preservatives or synthetic colors. We rely on the natural beauty and taste of real food.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-3">Signature Collection</h2>
<p className="text-stone-500 text-base md:text-lg max-w-lg">Our core range of thoughtfully developed flavor profiles, available in various sizes for your gatherings.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-stone-500 font-normal uppercase tracking-widest">Filter:</span>
<select className="text-base bg-transparent border-none text-stone-900 font-normal focus:ring-0 cursor-pointer outline-none appearance-none pr-4" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: '8px auto'}}>
<option>All Cakes</option>
<option>Gluten-Free</option>
<option>Vegan Options</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group flex flex-col bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-square overflow-hidden bg-stone-100">
<img alt="Custom Photo Cake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-white/90 backdrop-blur-sm border border-stone-200/50 rounded-md text-[10px] font-normal text-stone-700 tracking-wide uppercase">Personalized</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-normal tracking-tight text-stone-900">Custom Photo Cake</h3>
<span className="text-base font-normal text-stone-500">From Rs. 500</span>
</div>
<p className="text-base text-stone-500 mb-6 flex-grow">Make their day truly special with our decadent chocolate sponge, layered with rich cocoa frosting and topped with a high-quality, edible printed photograph of your choice.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-auto">
<div className="flex gap-2">
<span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">Chocolate Flavor</span>
</div>
<button className="text-base font-normal text-stone-900 hover:text-stone-500 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                                        Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-square overflow-hidden bg-stone-100">
<img alt="Classic Vanilla Bean" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-white/90 backdrop-blur-sm border border-stone-200/50 rounded-md text-[10px] font-normal text-stone-700 tracking-wide uppercase">Best Seller</span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-normal tracking-tight text-stone-900">Classic Vanilla Bean</h3>
<span className="text-base font-normal text-stone-500">From $45</span>
</div>
<p className="text-base text-stone-500 mb-6 flex-grow">Madagascar vanilla sponge, layered with whipped white chocolate ganache and seasonal berry compote.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-auto">
<div className="flex gap-2">
<span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">6" / 8" / 10"</span>
</div>
<button className="text-base font-normal text-stone-900 hover:text-stone-500 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                                        Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-square overflow-hidden bg-stone-100">
<img alt="Dark Chocolate Truffle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-normal tracking-tight text-stone-900">Dark Chocolate Truffle</h3>
<span className="text-base font-normal text-stone-500">From $50</span>
</div>
<p className="text-base text-stone-500 mb-6 flex-grow">Rich, dense Dutch cocoa cake layered with 70% dark chocolate silk buttercream and sea salt.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-auto">
<div className="flex gap-2">
<span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">6" / 8" / 10"</span>
<span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-md border border-amber-100">GF Option</span>
</div>
<button className="text-base font-normal text-stone-900 hover:text-stone-500 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                                        Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</article>

<article className="group flex flex-col bg-white rounded-2xl border border-stone-200/60 overflow-hidden hover:shadow-lg hover:border-stone-300 transition-all duration-300 cursor-pointer" onclick="navigate('product')">
<div className="relative aspect-square overflow-hidden bg-stone-100">
<img alt="Earl Grey Lavender" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-normal tracking-tight text-stone-900">Earl Grey &amp; Lavender</h3>
<span className="text-base font-normal text-stone-500">From $48</span>
</div>
<p className="text-base text-stone-500 mb-6 flex-grow">Delicate tea-infused sponge cake with a light lavender honey swiss meringue buttercream.</p>
<div className="flex items-center justify-between border-t border-stone-100 pt-4 mt-auto">
<div className="flex gap-2">
<span className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-md border border-stone-100">6" / 8"</span>
</div>
<button className="text-base font-normal text-stone-900 hover:text-stone-500 transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-300">
                                        Details <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">Ready for dessert?</h2>
<p className="text-stone-400 text-base md:text-lg mb-8 max-w-xl mx-auto">Please allow 48 hours notice for all standard orders. For custom cakes or large events, please reach out 2 weeks in advance.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex h-11 items-center justify-center rounded-md bg-white px-8 text-base font-normal text-stone-900 shadow transition-colors hover:bg-stone-100" onclick="navigate('product')">
                            Start an Order
                        </button>
<a className="inline-flex h-11 items-center justify-center rounded-md border border-stone-700 px-8 text-base font-normal text-white transition-colors hover:bg-stone-800" href="mailto:hello@crumbbakery.com">
                            Contact Us
                        </a>
</div>
</div>
</section>
</main>

<main className="hidden pt-28 pb-24" id="view-product">
<div className="max-w-7xl mx-auto px-6">

<nav className="flex items-center gap-2 text-base text-stone-500 mb-8">
<a className="hover:text-stone-900 transition-colors" href="javascript:void(0)" onclick="navigate('home')">Home</a>
<span className="text-stone-300">/</span>
<a className="hover:text-stone-900 transition-colors" href="javascript:void(0)" onclick="navigate('home')">Collection</a>
<span className="text-stone-300">/</span>
<span className="text-stone-900 font-normal">Custom Photo Cake</span>
</nav>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

<div className="space-y-4">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-sm">
<img alt="Custom Photo Cake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden border-2 border-stone-900 cursor-pointer">
<img alt="Thumbnail 1" className="w-full h-full object-cover opacity-100" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-stone-200/60 cursor-pointer hover:opacity-80 transition-opacity">
<img alt="Thumbnail 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-stone-200/60 cursor-pointer hover:opacity-80 transition-opacity bg-stone-50 flex items-center justify-center">
<i className="text-stone-400 w-6 h-6" data-lucide="image" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="mb-8">
<div className="inline-flex text-xs font-normal text-stone-600 bg-white border border-stone-200 rounded-md px-2 py-1 mb-4 uppercase tracking-widest">
                                Personalized
                            </div>
<h1 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-3">Custom Photo Cake</h1>
<p className="text-2xl text-stone-500 font-normal mb-6">Rs. 500</p>
<p className="text-lg text-stone-600 leading-relaxed">
                                Make their day truly special with our decadent chocolate sponge, layered with rich cocoa frosting and topped with a high-quality, edible printed photograph of your choice. Perfect for birthdays, milestones, and memorable celebrations.
                            </p>
</div>
<form className="border-t border-stone-200/60 pt-8 mt-auto" onsubmit="event.preventDefault(); navigate('cart');">

<div className="mb-8">
<div className="flex justify-between items-center mb-3">
<h3 className="text-base font-normal text-stone-900 uppercase tracking-widest">Select Size</h3>
<button className="text-xs text-stone-500 underline underline-offset-2 hover:text-stone-900 transition-colors" type="button">Size Guide</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="cake_size" type="radio" value="6"/>
<div className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 peer-checked:border-stone-900 peer-checked:bg-stone-50 peer-checked:shadow-sm transition-all duration-200">
<span className="block text-base font-normal text-stone-900 mb-1">6" Cake</span>
<span className="block text-sm text-stone-500">Serves 8-10</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="cake_size" type="radio" value="8"/>
<div className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 peer-checked:border-stone-900 peer-checked:bg-stone-50 peer-checked:shadow-sm transition-all duration-200">
<span className="block text-base font-normal text-stone-900 mb-1">8" Cake</span>
<span className="block text-sm text-stone-500">Serves 14-16</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="cake_size" type="radio" value="10"/>
<div className="rounded-xl border border-stone-200 p-4 text-center hover:bg-stone-50 peer-checked:border-stone-900 peer-checked:bg-stone-50 peer-checked:shadow-sm transition-all duration-200">
<span className="block text-base font-normal text-stone-900 mb-1">10" Cake</span>
<span className="block text-sm text-stone-500">Serves 20-24</span>
</div>
</label>
</div>
</div>

<div className="flex gap-4 mb-8">

<div className="flex items-center border border-stone-200 rounded-md h-12 bg-white">
<button className="px-4 text-stone-400 hover:text-stone-900 transition-colors" type="button"><i className="w-4 h-4" data-lucide="minus" strokeWidth="1.5"></i></button>
<span className="text-base font-normal text-stone-900 min-w-[20px] text-center">1</span>
<button className="px-4 text-stone-400 hover:text-stone-900 transition-colors" type="button"><i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>

<button className="flex-grow h-12 rounded-md bg-stone-900 px-8 text-base font-normal text-white shadow transition-colors hover:bg-stone-800 flex items-center justify-center gap-2" type="submit">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                                    Add to Cart - Rs. 500
                                </button>
</div>

<div className="border-t border-stone-200/60 divide-y divide-stone-200/60">
<div className="py-4 cursor-pointer group flex justify-between items-center">
<span className="text-base font-normal text-stone-900">Ingredients &amp; Allergens</span>
<i className="text-stone-400 group-hover:text-stone-900 transition-colors w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="py-4 cursor-pointer group flex justify-between items-center">
<span className="text-base font-normal text-stone-900">Care &amp; Storage</span>
<i className="text-stone-400 group-hover:text-stone-900 transition-colors w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</form>
</div>
</div>
</div>
</main>

<main className="hidden pt-28 pb-24" id="view-cart">
<div className="max-w-3xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h1 className="text-3xl font-normal tracking-tight text-stone-900">Your Cart</h1>
<span className="text-base text-stone-500 font-normal">2 Items</span>
</div>

<div className="border-t border-stone-200/60 divide-y divide-stone-200/60 mb-8">

<div className="py-6 flex gap-6">
<div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 flex-shrink-0">
<img alt="Custom Photo Cake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-normal tracking-tight text-stone-900">Custom Photo Cake</h3>
<p className="text-base font-normal text-stone-900">Rs. 500</p>
</div>
<p className="text-base text-stone-500 mb-2">Size: 6" Cake <br/> Flavor: Chocolate</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-stone-200 rounded-md h-8 bg-white">
<button className="px-2 text-stone-400 hover:text-stone-900 transition-colors" type="button"><i className="w-3.5 h-3.5" data-lucide="minus" strokeWidth="1.5"></i></button>
<span className="text-sm font-normal text-stone-900 min-w-[20px] text-center">1</span>
<button className="px-2 text-stone-400 hover:text-stone-900 transition-colors" type="button"><i className="w-3.5 h-3.5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
<button className="text-xs font-normal text-stone-400 hover:text-rose-600 transition-colors underline underline-offset-2">Remove</button>
</div>
</div>
</div>

<div className="py-6 flex gap-6">
<div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 flex-shrink-0">
<img alt="Dark Chocolate Truffle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-lg font-normal tracking-tight text-stone-900">Dark Chocolate Truffle</h3>
<p className="text-base font-normal text-stone-900">$50.00</p>
</div>
<p className="text-base text-stone-500 mb-2">Size: 6" Cake <br/> Option: Gluten-Free</p>
</div>
<div className="flex justify-between items-end">
<div className="flex items-center border border-stone-200 rounded-md h-8 bg-white">
<button className="px-2 text-stone-400 hover:text-stone-900 transition-colors" type="button"><i className="w-3.5 h-3.5" data-lucide="minus" strokeWidth="1.5"></i></button>
<span className="text-sm font-normal text-stone-900 min-w-[20px] text-center">1</span>
<button className="px-2 text-stone-400 hover:text-stone-900 transition-colors" type="button"><i className="w-3.5 h-3.5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
<button className="text-xs font-normal text-stone-400 hover:text-rose-600 transition-colors underline underline-offset-2">Remove</button>
</div>
</div>
</div>
</div>

<div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-200/60">
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-6">Order Summary</h3>
<div className="space-y-3 text-base text-stone-600 mb-6">
<div className="flex justify-between">
<span>Subtotal</span>
<span className="font-normal text-stone-900">Rs. 500 + $50.00</span>
</div>
<div className="flex justify-between">
<span>Local Pickup</span>
<span className="font-normal text-stone-900">Free</span>
</div>
<div className="flex justify-between pt-4 border-t border-stone-200/60 mt-4">
<span className="text-lg font-normal text-stone-900">Total</span>
<span className="text-lg font-normal text-stone-900">Calculated at checkout</span>
</div>
</div>
<button className="w-full h-12 rounded-md bg-stone-900 px-8 text-base font-normal text-white shadow transition-colors hover:bg-stone-800 flex items-center justify-center gap-2">
                        Proceed to Checkout <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-xs text-stone-400 text-center mt-4">Taxes and additional pickup details are calculated at checkout.</p>
</div>
</div>
</main>
</div>

<footer className="bg-white border-t border-stone-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<a className="text-xl font-normal tracking-tight text-stone-900 flex items-center gap-2" href="javascript:void(0)" onclick="navigate('home')">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
                    C R U M B
                </a>
</div>
<p className="text-sm text-stone-400">
                © 2024 Crumb Artisan Bakery. All rights reserved.
            </p>
<div className="flex items-center gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i>
</a>
<a className="hover:text-stone-900 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
