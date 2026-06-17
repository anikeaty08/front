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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-medium tracking-tighter uppercase" href="#">Aura</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Living</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Dining</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Bedroom</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Workspace</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="relative text-zinc-500 hover:text-zinc-900 transition-colors group">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity">2</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">Summer Collection 2024</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] text-zinc-900">
                    Sculpted for <br/> <span className="text-zinc-400">serenity.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md font-normal leading-relaxed">
                    Minimalist furniture designed to create space for clarity. Sustainable materials, timeless forms, and unparalleled comfort.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2" href="#shop">
                        Shop Collection
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-zinc-200 bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#">
                        Explore Gallery
                    </a>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 relative group">
<img alt="Modern Chair" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg flex items-center justify-between">
<div>
<p className="text-sm font-medium text-zinc-900">The Oslo Chair</p>
<p className="text-xs text-zinc-500">Natural Oak / Linen</p>
</div>
<span className="text-sm font-medium text-zinc-900">$890</span>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-zinc-200 bg-white" id="shop">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex items-end justify-between">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Curated Categories</h2>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<a className="group relative md:col-span-2 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100" href="#">
<img alt="Seating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/40 to-transparent">
<h3 className="text-2xl font-medium text-white tracking-tight">Seating</h3>
<p className="text-zinc-200 text-sm mt-1">Sofas, armchairs, and benches</p>
</div>
</a>

<a className="group relative rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100" href="#">
<img alt="Lighting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/40 to-transparent">
<h3 className="text-2xl font-medium text-white tracking-tight">Lighting</h3>
<p className="text-zinc-200 text-sm mt-1">Ambient &amp; Task</p>
</div>
</a>

<a className="group relative rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100" href="#">
<img alt="Tables" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/40 to-transparent">
<h3 className="text-2xl font-medium text-white tracking-tight">Tables</h3>
<p className="text-zinc-200 text-sm mt-1">Dining &amp; Coffee</p>
</div>
</a>

<a className="group relative md:col-span-2 rounded-xl overflow-hidden bg-zinc-100 border border-zinc-100" href="#">
<img alt="Decor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/40 to-transparent">
<h3 className="text-2xl font-medium text-white tracking-tight">Objects</h3>
<p className="text-zinc-200 text-sm mt-1">Vases, rugs, and storage</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="space-y-4">
<div className="aspect-square bg-white rounded-2xl border border-zinc-200 p-8 flex items-center justify-center relative overflow-hidden group">
<img alt="Chair Detail" className="object-contain w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center px-2 py-1 rounded border border-zinc-200 bg-white text-[10px] font-medium uppercase tracking-wide text-zinc-500">Best Seller</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4">
<button className="aspect-square bg-white rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors p-2">
<img alt="Thumb" className="w-full h-full object-contain mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square bg-white rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors p-2">
<img alt="Thumb" className="w-full h-full object-contain mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</button>
<button className="aspect-square bg-white rounded-lg border border-zinc-200 hover:border-zinc-400 transition-colors p-2 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-8">
<div className="space-y-2">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">Kyoto Lounge Chair</h2>
<div className="flex items-center gap-4">
<span className="text-2xl font-light text-zinc-900">$1,295</span>
<div className="h-4 w-px bg-zinc-300"></div>
<div className="flex items-center text-amber-500 gap-1 text-sm">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<span className="font-medium text-zinc-700">4.9</span>
<span className="text-zinc-400 font-normal">(128 reviews)</span>
</div>
</div>
</div>
<p className="text-zinc-500 leading-relaxed font-light">
                        A perfect balance of Japanese minimalism and Scandinavian functionality. The Kyoto Lounge Chair features a solid ash frame with mortise and tenon joinery, finished with a breathable matte lacquer.
                    </p>

<div className="space-y-6 pt-4 border-t border-zinc-200">

<div className="space-y-3">
<span className="text-sm font-medium text-zinc-900">Finish</span>
<div className="flex gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#E5DCC5] ring-1 ring-zinc-200 ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#5D4037] ring-1 ring-zinc-200 ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="color" type="radio"/>
<div className="w-8 h-8 rounded-full bg-[#263238] ring-1 ring-zinc-200 ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
</div>
</div>

<div className="flex gap-4 pt-4">
<div className="flex items-center border border-zinc-200 rounded-lg bg-white h-12 w-32">
<button className="flex-1 flex items-center justify-center text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<span className="flex-1 text-center text-sm font-medium text-zinc-900">1</span>
<button className="flex-1 flex items-center justify-center text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
<button className="flex-1 h-12 bg-zinc-900 text-white rounded-lg font-medium text-sm hover:bg-zinc-800 transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:bag-3-linear" width="18"></iconify-icon>
                                Add to Cart
                            </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 text-xs text-zinc-500 pt-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:box-linear" width="16"></iconify-icon>
<span>Free shipping worldwide</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>10-year frame warranty</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto space-y-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Popular this week</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-zinc-100 rounded-lg mb-4 overflow-hidden relative">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-zinc-50">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Luna Pendant</h3>
<p className="text-xs text-zinc-500 mt-1">Matte Black</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$240</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-zinc-100 rounded-lg mb-4 overflow-hidden relative">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-zinc-900 text-white text-[10px] uppercase font-bold tracking-wide rounded">New</div>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Terra Planter</h3>
<p className="text-xs text-zinc-500 mt-1">Ceramic</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$85</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-zinc-100 rounded-lg mb-4 overflow-hidden relative">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Echo Side Table</h3>
<p className="text-xs text-zinc-500 mt-1">Walnut</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$320</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-zinc-100 rounded-lg mb-4 overflow-hidden relative">
<img alt="Item" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Vesper Sofa</h3>
<p className="text-xs text-zinc-500 mt-1">Grey Wool</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$2,100</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900 text-zinc-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto md:mx-0 text-white">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Consciously Crafted</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                        We use 100% FSC-certified wood and recycled fabrics for our upholstery.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto md:mx-0 text-white">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Artisan Quality</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                        Hand-finished by master joiners with decades of experience in furniture making.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mx-auto md:mx-0 text-white">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">White Glove Service</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                        Delivery to your room of choice, assembly, and packaging removal included.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-200 bg-zinc-50">
<div className="max-w-md mx-auto text-center space-y-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Join the inner circle</h2>
<p className="text-sm text-zinc-500">Subscribe for early access to new drops and interior inspiration.</p>
<form className="flex gap-2" onsubmit="event.preventDefault()">
<input className="flex-1 h-10 px-4 rounded-md border border-zinc-200 bg-white text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-shadow" placeholder="email@example.com" type="email"/>
<button className="h-10 px-6 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 space-y-4">
<a className="text-lg font-medium tracking-tighter uppercase text-zinc-900" href="#">Aura</a>
<p className="text-sm text-zinc-500 max-w-xs">
                        Defining modern living through form, function, and sustainable craftsmanship.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:mention-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-zinc-900">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Living Room</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Bedroom</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-zinc-900">Support</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Warranty</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-sm font-medium text-zinc-900">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Aura Furniture. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
