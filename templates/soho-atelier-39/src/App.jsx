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
      

<div className="bg-neutral-900 text-white text-xs text-center py-2 font-medium tracking-wide">
        Complimentary shipping to Lower Manhattan on orders over $150
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-neutral-500 hover:text-neutral-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter uppercase" href="#">
                Soho<span className="text-neutral-400">.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#candles">Scent</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#carpets">Textiles</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Objects</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About</a>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="relative group cursor-pointer">
<iconify-icon className="text-neutral-500 group-hover:text-neutral-900 transition-colors" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-neutral-900 text-[8px] text-white">2</span>
</div>
</div>
</div>
</nav>

<header className="relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50">
<span className="flex h-2 w-2 rounded-full bg-orange-400"></span>
<span className="text-xs font-medium text-neutral-600 uppercase tracking-wide">New Collection: Autumn 24</span>
</div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900">
                    Scent &amp; Texture <br/>
<span className="text-neutral-400">Curated in Soho.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-md font-light">
                    Hand-poured soy blends and hand-knotted wool rugs. Bringing the quiet luxury of loft living to your sanctuary.
                </p>
<div className="flex gap-4 pt-2">
<button className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium rounded-md transition-all shadow-sm">
                        Shop Candles
                    </button>
<button className="px-6 py-3 bg-white border border-neutral-200 hover:border-neutral-300 text-neutral-900 text-sm font-medium rounded-md transition-all">
                        View Rugs
                    </button>
</div>
</div>
<div className="relative h-[500px] w-full bg-neutral-100 rounded-xl overflow-hidden shadow-sm">
<img alt="Abstract interior texture" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-white/20 shadow-lg flex items-center justify-between">
<div>
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Featured</p>
<p className="text-sm font-medium">Beni Ourain - Vintage 1982</p>
</div>
<span className="text-sm font-medium">$2,400</span>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<aside className="md:col-span-3 space-y-10 sticky top-24 h-fit">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Filters</h3>
<button className="text-xs text-neutral-400 hover:text-neutral-900">Reset</button>
</div>

<div className="space-y-4">
<p className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">Category</p>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 flex items-center justify-center transition-colors group-hover:border-neutral-400">
<iconify-icon className="text-white opacity-0 transition-opacity transform scale-75" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Scented Candles</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 flex items-center justify-center transition-colors group-hover:border-neutral-400">
<iconify-icon className="text-white opacity-0 transition-opacity transform scale-75" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Exotic Carpets</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 flex items-center justify-center transition-colors group-hover:border-neutral-400">
<iconify-icon className="text-white opacity-0 transition-opacity transform scale-75" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900">Incense &amp; Holders</span>
</label>
</div>

<div className="space-y-4">
<p className="text-xs font-semibold uppercase text-neutral-400 tracking-wider">Price Range</p>
<div className="relative h-1 bg-neutral-200 rounded-full w-full mt-2">
<div className="absolute left-0 top-0 h-full bg-neutral-900 w-1/2 rounded-full"></div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-neutral-300 shadow-sm rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between text-xs text-neutral-500 font-medium pt-2">
<span>$45</span>
<span>$5,000+</span>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">In Stock Only</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-neutral-900"></div>
</label>
</div>
</aside>

<div className="md:col-span-9">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium tracking-tight">All Products</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Sort by:</span>
<select className="text-xs font-medium bg-transparent border-none focus:ring-0 cursor-pointer text-neutral-900 pr-4">
<option>Featured</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4">
<img alt="Candle" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider text-neutral-900">Best Seller</div>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-neutral-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">No. 04 — Teakwood</h3>
<span className="text-sm font-medium text-neutral-900">$62</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Notes of leather, tobacco &amp; amber</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4">
<img alt="Rug" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-neutral-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Anatolian Kilim</h3>
<span className="text-sm font-medium text-neutral-900">$840</span>
</div>
<p className="text-xs text-neutral-500 mt-1">4' x 6', Hand-woven wool</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4">
<img alt="Candle 2" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-neutral-900 text-white px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">Low Stock</div>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-neutral-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">No. 09 — Fig Tree</h3>
<span className="text-sm font-medium text-neutral-900">$58</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Green foliage, cedar, coconut</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4">
<img alt="Rug" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-neutral-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Persian Runner</h3>
<span className="text-sm font-medium text-neutral-900">$1,250</span>
</div>
<p className="text-xs text-neutral-500 mt-1">2.5' x 9', Vintage wash</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4">
<img alt="Candle" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-neutral-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">No. 01 — Loft</h3>
<span className="text-sm font-medium text-neutral-900">$65</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Concrete, rain, white tea</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4">
<img alt="Home Decor" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 h-8 w-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-neutral-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Brass Wick Trimmer</h3>
<span className="text-sm font-medium text-neutral-900">$28</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Solid brushed brass</p>
</div>
</div>
</div>

<div className="mt-16 border-t border-neutral-100 pt-8 flex justify-between items-center">
<button className="text-sm text-neutral-400 hover:text-neutral-900 disabled:opacity-50 flex items-center gap-1">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Previous
                    </button>
<div className="text-sm font-medium text-neutral-900">Page 1 of 4</div>
<button className="text-sm text-neutral-900 hover:text-neutral-600 flex items-center gap-1">
                        Next <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

<section className="bg-neutral-50 border-t border-neutral-200 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-square bg-white p-2 shadow-sm rounded-xl rotate-1 max-w-md mx-auto">
<img alt="Soho Street" className="w-full h-full object-cover rounded-lg filter grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">Our Soho Origins</h2>
<p className="text-neutral-500 leading-relaxed font-light">
                        Founded in a cast-iron loft on Broome Street, our studio is dedicated to the interplay of sensory experiences. We believe that a home is defined by two things: the scent that greets you and the texture beneath your feet.
                    </p>
<p className="text-neutral-500 leading-relaxed font-light">
                        Every rug is sourced directly from artisan communities in Morocco and Turkey, while our candles are hand-poured in small batches right here in New York City.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-300 pb-0.5 hover:border-neutral-900 transition-colors mt-2" href="#">
                        Read our story <iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter uppercase block mb-6" href="#">Soho.</a>
<p className="text-sm text-neutral-400 font-light mb-4">
                    425 W Broadway<br/>New York, NY 10012
                </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-neutral-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Candles</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Rugs</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Gift Sets</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Newsletter</h4>
<p className="text-sm text-neutral-500 font-light mb-4">Join our list for early access to limited edition drops.</p>
<form className="flex gap-2">
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-400 font-light" placeholder="Email address" type="email"/>
<button className="bg-neutral-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors">
                        Join
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400 font-light">© 2024 Soho Atelier Goods, LLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-400 hover:text-neutral-600" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-400 hover:text-neutral-600" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
