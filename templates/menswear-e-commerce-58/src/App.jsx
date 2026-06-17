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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl tracking-tighter font-semibold uppercase flex gap-1 items-center" href="#">
                Atlas
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Outerwear</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Denim</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Accessories</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="relative text-zinc-500 hover:text-zinc-900 transition-colors group">
<iconify-icon icon="solar:bag-5-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-900"></span>
</span>
</button>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-900"></span>
                Fall Collection '24
            </div>
<h1 className="text-5xl md:text-7xl tracking-tighter font-medium text-zinc-900 leading-[1.1]">
                Refined utility for the modern layout.
            </h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed font-light">
                Engineered fabrics meeting precise tailoring. A modular wardrobe system designed for versatility and longevity.
            </p>
<div className="flex items-center gap-4 pt-4">
<button className="group relative px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-200">
<span className="relative z-10 flex items-center gap-2">
                        Shop Collection
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</button>
<button className="px-8 py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    View Lookbook
                </button>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-tr from-zinc-100 to-zinc-50 rounded-[2rem] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<img alt="Menswear 1" className="w-full h-64 object-cover rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594938298603-c8148c47e356?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Menswear 2" className="w-full h-48 object-cover rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1516257984-b1b4d8c9230c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Menswear 3" className="w-full h-48 object-cover rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Menswear 4" className="w-full h-64 object-cover rounded-2xl shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-100 py-4 mb-12">
<div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar flex items-center gap-2">
<button className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium whitespace-nowrap">All Items</button>
<button className="px-4 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 text-xs font-medium whitespace-nowrap transition-colors bg-white">Coats &amp; Jackets</button>
<button className="px-4 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 text-xs font-medium whitespace-nowrap transition-colors bg-white">Heavy Knitwear</button>
<button className="px-4 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 text-xs font-medium whitespace-nowrap transition-colors bg-white">Tailoring</button>
<button className="px-4 py-1.5 rounded-full border border-zinc-200 hover:border-zinc-300 text-zinc-600 hover:text-zinc-900 text-xs font-medium whitespace-nowrap transition-colors bg-white">Accessories</button>
<div className="h-4 w-px bg-zinc-200 mx-2 hidden md:block"></div>
<button className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 ml-auto">
<iconify-icon icon="solar:sort-vertical-linear" width="14"></iconify-icon>
                Sort by
            </button>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 mb-4">
<img alt="Coat" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<div className="flex gap-1 bg-white/90 backdrop-blur rounded-lg p-1 shadow-sm">
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-100 text-xs font-medium">S</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-100 text-xs font-medium">M</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 text-white text-xs font-medium">L</button>
</div>
<button className="h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Merino Wool Topcoat</h3>
<p className="text-sm text-zinc-500">Charcoal Grey</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$420.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 mb-4">
<span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider font-semibold rounded-md border border-zinc-100 z-10">New</span>
<img alt="Knit" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550246140-5119980d0a8e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<button className="h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Heavyweight Cable Knit</h3>
<p className="text-sm text-zinc-500">Oatmeal</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$185.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 mb-4">
<img alt="Pants" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<div className="flex gap-1 bg-white/90 backdrop-blur rounded-lg p-1 shadow-sm">
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-100 text-xs font-medium">30</button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-zinc-900 text-white text-xs font-medium">32</button>
<button className="w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-100 text-xs font-medium">34</button>
</div>
<button className="h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Pleated Tech Trouser</h3>
<p className="text-sm text-zinc-500">Navy Blue</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$145.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 mb-4">
<img alt="Overshirt" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<button className="h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Cotton Twill Overshirt</h3>
<p className="text-sm text-zinc-500">Olive Green</p>
<p className="text-sm font-medium text-zinc-900 mt-2">$120.00</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<h2 className="text-xl tracking-tight font-medium mb-8">The Standard</h2>
<div className="grid md:grid-cols-3 gap-6 h-auto md:h-96">

<div className="md:col-span-2 relative rounded-2xl overflow-hidden bg-zinc-900 group">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="relative h-full flex flex-col justify-end p-8">
<div className="max-w-md">
<h3 className="text-2xl tracking-tight font-medium text-white mb-2">Sustainable Fabrication</h3>
<p className="text-zinc-300 text-sm leading-relaxed">
                            Every garment is crafted from 100% organic or recycled materials. We believe in minimizing impact without compromising on texture or durability.
                        </p>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 p-8 flex flex-col justify-between group">
<div>
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-4 text-zinc-900 shadow-sm">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Tailored Fit</h3>
<p className="text-zinc-500 text-sm">
                        3D modeled cuts designed for movement.
                    </p>
</div>
<div className="mt-8 space-y-3">
<div className="flex items-center gap-3 text-xs text-zinc-600">
<span className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center">
<span className="w-2 h-2 rounded-full bg-zinc-900"></span>
</span>
<span>Relaxed Taper</span>
</div>
<div className="flex items-center gap-3 text-xs text-zinc-600">
<span className="w-4 h-4 rounded-full border border-zinc-300"></span>
<span>Classic Straight</span>
</div>
<div className="w-full h-1 bg-zinc-200 rounded-full mt-4 overflow-hidden">
<div className="w-3/4 h-full bg-zinc-900 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
<div className="max-w-lg">
<h2 className="text-2xl tracking-tight font-medium mb-2">Join the inner circle</h2>
<p className="text-zinc-500 text-sm">Early access to collections and exclusive archive sales.</p>
</div>
<div className="w-full md:w-auto">
<form className="flex items-center gap-2">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" icon="solar:letter-linear" width="20"></iconify-icon>
<input className="pl-10 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm outline-none focus:border-zinc-400 focus:ring-0 w-full md:w-80 transition-all placeholder:text-zinc-400 text-zinc-900" placeholder="email@address.com" type="email"/>
</div>
<button className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-sm" type="button">
                        Subscribe
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-xl tracking-tighter font-semibold uppercase block mb-6" href="#">Atlas</a>
<p className="text-xs leading-relaxed max-w-xs">
                    Designed in California. <br/>
                    Engineered for the world.
                </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Shop</h4>
<a className="hover:text-white transition-colors" href="#">New Arrivals</a>
<a className="hover:text-white transition-colors" href="#">Best Sellers</a>
<a className="hover:text-white transition-colors" href="#">Collaborations</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Support</h4>
<a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a>
<a className="hover:text-white transition-colors" href="#">Size Guide</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Social</h4>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex justify-between items-center text-xs">
<span>© 2024 Atlas Menswear Inc.</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
