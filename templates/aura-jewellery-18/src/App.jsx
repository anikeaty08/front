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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-lg font-medium tracking-tighter uppercase z-50" href="#">
                Aura
            </a>

<div className="hidden md:flex items-center gap-8 text-sm text-zinc-500 font-normal">
<a className="hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Atelier</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-4 text-zinc-500">
<button className="hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-zinc-900 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto border-b border-zinc-100">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-7 space-y-8 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                    New Collection 2024
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9]">
                    Defined by <br/> <span className="text-zinc-400">precision.</span>
</h1>
<p className="text-zinc-500 text-lg md:text-xl max-w-md font-light leading-relaxed">
                    Minimalist jewellery crafted with sustainable gold and ethically sourced conflict-free diamonds.
                </p>
<div className="flex items-center gap-4 pt-4">
<a className="bg-zinc-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors" href="#">
                        Explore Collection
                    </a>
<a className="px-6 py-3 rounded-md text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-2 group" href="#">
                        Watch Film
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-5 relative fade-in delay-200">
<div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-zinc-100 group">
<img alt="Hero Jewellery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded border border-zinc-100 shadow-sm hidden md:block">
<p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Featured</p>
<p className="text-sm font-medium">Eclipse Pendant</p>
<p className="text-xs text-zinc-500 mt-1">$1,290.00</p>
</div>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-white/90 backdrop-blur-sm border-b border-zinc-100 py-4">
<div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
<div className="flex gap-2 min-w-max">
<button className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-medium transition-colors">All</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 text-xs font-medium transition-colors">Rings</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 text-xs font-medium transition-colors">Earrings</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 text-xs font-medium transition-colors">Necklaces</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 text-xs font-medium transition-colors">Bracelets</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 text-xs font-medium transition-colors">Fine Gold</button>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer fade-in delay-100">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<img alt="Ring" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&amp;w=1929&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Solitaire Band</h3>
<p className="text-xs text-zinc-500 mt-1">18k Gold, Diamond</p>
</div>
<span className="text-sm font-normal text-zinc-900">$890</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-200">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-sm tracking-widest z-10">New</span>
<img alt="Earrings" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Lunar Drops</h3>
<p className="text-xs text-zinc-500 mt-1">Sterling Silver</p>
</div>
<span className="text-sm font-normal text-zinc-900">$240</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-300">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<img alt="Necklace" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Vermeil Chain</h3>
<p className="text-xs text-zinc-500 mt-1">Gold Vermeil</p>
</div>
<span className="text-sm font-normal text-zinc-900">$320</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-100">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<img alt="Bracelet" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1602752250015-409144d7f767?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Helix Cuff</h3>
<p className="text-xs text-zinc-500 mt-1">Rose Gold</p>
</div>
<span className="text-sm font-normal text-zinc-900">$550</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-200">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<img alt="Ring Stack" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598560977533-add4b9871b2f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Stacking Set</h3>
<p className="text-xs text-zinc-500 mt-1">Mixed Metals</p>
</div>
<span className="text-sm font-normal text-zinc-900">$420</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-300">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<img alt="Pearl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Akoya Pearl</h3>
<p className="text-xs text-zinc-500 mt-1">Freshwater Pearl</p>
</div>
<span className="text-sm font-normal text-zinc-900">$680</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-100">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-zinc-100 text-zinc-600 border border-zinc-200 text-[10px] uppercase font-semibold px-2 py-0.5 rounded-sm tracking-widest z-10">Low Stock</span>
<img alt="Anklet" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629224316810-9d8805b95076?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Sun Anklet</h3>
<p className="text-xs text-zinc-500 mt-1">14k Gold Chain</p>
</div>
<span className="text-sm font-normal text-zinc-900">$290</span>
</div>
</div>

<div className="group cursor-pointer fade-in delay-200">
<div className="relative aspect-[3/4] bg-zinc-50 rounded-md overflow-hidden mb-4">
<img alt="Brooch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-white text-zinc-900 h-10 w-10 flex items-center justify-center rounded-full shadow-sm hover:bg-zinc-50 border border-zinc-100">
<iconify-icon icon="solar:bag-plus-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Vintage Pin</h3>
<p className="text-xs text-zinc-500 mt-1">Restored Collection</p>
</div>
<span className="text-sm font-normal text-zinc-900">$1,050</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="text-sm text-zinc-500 hover:text-zinc-900 font-medium border-b border-transparent hover:border-zinc-900 pb-0.5 transition-all">
                View All Products
            </button>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="px-6 group">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200 mb-6 text-zinc-900">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Lifetime Warranty</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We stand by the quality of our craftsmanship. Every piece comes with a promise of durability.
                    </p>
</div>
<div className="px-6 group pt-12 md:pt-0">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200 mb-6 text-zinc-900">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Ethical Sourcing</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        100% recycled gold and conflict-free stones. Sustainability is at the core of our ethos.
                    </p>
</div>
<div className="px-6 group pt-12 md:pt-0">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-zinc-200 mb-6 text-zinc-900">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Secure Shipping</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Insured global delivery in discreet, eco-friendly packaging designed to keep your gift a surprise.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="bg-zinc-900 rounded-lg overflow-hidden text-white relative">
<div className="absolute inset-0 opacity-40">
<img alt="Workshop" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
<div className="relative z-10 p-12 md:p-24 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">The Art of the Atelier</h2>
<p className="text-zinc-300 text-lg mb-8 font-light leading-relaxed">
                    Every curve, setting, and polish is executed by hand in our London studio. Witness the journey from raw material to timeless heirloom.
                </p>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-100 transition-colors">
                    Read the Journal
                </button>
</div>
</div>
</section>

<footer className="border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-medium tracking-tighter uppercase mb-6 block" href="#">Aura</a>
<p className="text-sm text-zinc-500 mb-6">
                        Fine jewellery for the modern minimalist.
                    </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-sm font-medium text-zinc-900 mb-4">Shop</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Rings</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Earrings</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-zinc-900 mb-4">Support</h5>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Care Instructions</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium text-zinc-900 mb-4">Newsletter</h5>
<p className="text-sm text-zinc-500 mb-4">Subscribe for exclusive drops.</p>
<form className="flex gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors text-zinc-900 placeholder:text-zinc-400" placeholder="Email address" type="email"/>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors" type="button">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Aura Jewellery. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
