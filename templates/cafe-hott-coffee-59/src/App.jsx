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
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter uppercase flex items-center gap-1" href="#">
                Hott
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1"></span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-500">
<a className="hover:text-black transition-colors" href="#menu">Menu</a>
<a className="hover:text-black transition-colors" href="#origins">Origins</a>
<a className="hover:text-black transition-colors" href="#spaces">Spaces</a>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-black transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-black transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-600 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-neutral-50 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 tracking-wide uppercase">Now Roasting: Ethiopia Yirgacheffe</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-neutral-900">
                    Temperature <br/>
                    meets <span className="text-neutral-400">temperament.</span>
</h1>
<p className="text-lg text-neutral-500 font-light max-w-md leading-relaxed mb-10">
                    Precision coffee for the modern ritual. Sourced ethically, roasted locally, served at the perfect degree.
                </p>
<div className="flex items-center gap-4">
<button className="h-12 px-8 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors flex items-center gap-2">
                        Order Now
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 bg-transparent border border-neutral-200 text-neutral-900 text-sm font-medium rounded hover:bg-neutral-50 transition-colors">
                        Explore Blends
                    </button>
</div>
</div>

<div className="relative h-[400px] md:h-[600px] w-full bg-neutral-100 rounded-2xl overflow-hidden group">
<img alt="Pour over coffee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs font-medium tracking-widest uppercase mb-1 opacity-80">Featured Drink</p>
<p className="text-xl font-medium tracking-tight">V60 Pour Over</p>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:cup-hot-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium tracking-tighter">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Arabica Beans</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:globe-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium tracking-tighter">12</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Single Origins</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium tracking-tighter">4.9</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Customer Rating</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-neutral-400 mb-2" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium tracking-tighter">Zero</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide">Carbon Footprint</span>
</div>
</div>
</section>

<section className="py-24 px-6" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Curated Menu</h2>
<p className="text-neutral-500 font-light max-w-sm">Meticulously crafted beverages designed to highlight the unique notes of our roasts.</p>
</div>
<div className="flex gap-2 bg-neutral-100 p-1 rounded-lg self-start">
<button className="px-4 py-1.5 bg-white shadow-sm rounded-md text-sm font-medium text-neutral-900">Coffee</button>
<button className="px-4 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900">Tea</button>
<button className="px-4 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900">Pastry</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group border border-neutral-100 hover:border-neutral-200 bg-white hover:shadow-sm rounded-xl p-6 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium">$4.50</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Flat White</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Double shot espresso topped with silky, micro-foamed milk.</p>
<button className="w-full py-2 border border-neutral-200 rounded text-sm font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors flex items-center justify-center gap-2">
                        Add to Order
                        <iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<div className="group border border-neutral-100 hover:border-neutral-200 bg-white hover:shadow-sm rounded-xl p-6 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:water-drop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium">$5.00</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Cold Brew</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Steeped for 18 hours. Smooth, chocolatey notes with low acidity.</p>
<button className="w-full py-2 border border-neutral-200 rounded text-sm font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors flex items-center justify-center gap-2">
                        Add to Order
                        <iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<div className="group border border-neutral-100 hover:border-neutral-200 bg-white hover:shadow-sm rounded-xl p-6 transition-all duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-900 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium">$6.50</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Matcha Latte</h3>
<p className="text-sm text-neutral-500 font-light mb-6">Ceremonial grade matcha from Uji, Japan. Whisked to perfection.</p>
<button className="w-full py-2 border border-neutral-200 rounded text-sm font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors flex items-center justify-center gap-2">
                        Add to Order
                        <iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white px-6">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<span className="text-orange-500 text-xs font-medium tracking-widest uppercase mb-3 block">Customize</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Design your Daily Driver</h2>
</div>
<div className="bg-neutral-800/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">

<div className="mb-8">
<label className="block text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wide">Size</label>
<div className="grid grid-cols-3 gap-4">
<label className="cursor-pointer group">
<input className="hidden custom-radio" name="size" type="radio"/>
<div className="h-14 border border-white/10 rounded-lg flex items-center justify-center gap-3 transition-all group-hover:border-white/30 text-neutral-300">
<iconify-icon icon="solar:cup-linear" width="18"></iconify-icon>
<span className="text-sm">8oz</span>
</div>
</label>
<label className="cursor-pointer group">
<input checked="" className="hidden custom-radio" name="size" type="radio"/>
<div className="h-14 border border-white/10 bg-white/5 rounded-lg flex items-center justify-center gap-3 transition-all text-white border-white/50">
<iconify-icon icon="solar:cup-linear" width="22"></iconify-icon>
<span className="text-sm">12oz</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="hidden custom-radio" name="size" type="radio"/>
<div className="h-14 border border-white/10 rounded-lg flex items-center justify-center gap-3 transition-all group-hover:border-white/30 text-neutral-300">
<iconify-icon icon="solar:cup-linear" width="26"></iconify-icon>
<span className="text-sm">16oz</span>
</div>
</label>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wide">Milk Base</label>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group">
<div className="flex items-center gap-3">
<input className="hidden peer" name="milk" type="radio"/>
<div className="w-4 h-4 rounded-full border border-neutral-500 peer-checked:border-orange-500 peer-checked:bg-orange-500 flex items-center justify-center transition-colors"></div>
<span className="text-sm text-neutral-200">Whole Milk</span>
</div>
<span className="text-xs text-neutral-500">Standard</span>
</label>
<label className="flex items-center justify-between p-4 border border-orange-500/30 bg-orange-500/10 rounded-lg cursor-pointer transition-colors group">
<div className="flex items-center gap-3">
<input checked="" className="hidden peer" name="milk" type="radio"/>
<div className="w-4 h-4 rounded-full border border-orange-500 bg-orange-500 flex items-center justify-center transition-colors"></div>
<span className="text-sm text-white">Oat Milk</span>
</div>
<span className="text-xs text-orange-400">+ $0.75</span>
</label>
<label className="flex items-center justify-between p-4 border border-white/10 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group">
<div className="flex items-center gap-3">
<input className="hidden peer" name="milk" type="radio"/>
<div className="w-4 h-4 rounded-full border border-neutral-500 flex items-center justify-center transition-colors"></div>
<span className="text-sm text-neutral-200">Almond Milk</span>
</div>
<span className="text-xs text-neutral-500">+ $0.75</span>
</label>
</div>
</div>

<div className="mb-10">
<div className="flex justify-between items-center mb-4">
<label className="block text-sm font-medium text-neutral-400 uppercase tracking-wide">Sweetness</label>
<span className="text-xs text-orange-400">50%</span>
</div>
<div className="h-2 bg-neutral-700 rounded-full relative">
<div className="absolute top-0 left-0 h-full w-1/2 bg-orange-500 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="flex justify-between mt-2 text-xs text-neutral-600 font-medium">
<span>0%</span>
<span>100%</span>
</div>
</div>
<button className="w-full bg-white text-black h-12 rounded font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                    Add Custom Brew - $6.25
                </button>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<img alt="Interior" className="w-full h-[500px] object-cover rounded-xl mb-6 grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight mb-6">The Space</h2>
<p className="text-neutral-500 font-light leading-relaxed mb-8">
                    Our cafes are designed as sanctuaries of calm. Minimalist aesthetics meet warm textures, creating an environment where focus flows as freely as the coffee. 
                    <br/><br/>
                    Whether you are here to work, converse, or simply exist, we provide the backdrop for your best moments.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                        High-speed Fiber WiFi
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                        Abundant Power Outlets
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                        Sound-dampening Acoustics
                    </li>
</ul>
<a className="text-sm font-medium underline underline-offset-4 decoration-neutral-300 hover:decoration-black transition-all" href="#">Find a location near you</a>
</div>
</div>
</section>

<footer className="bg-neutral-50 border-t border-neutral-100 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-medium tracking-tighter uppercase flex items-center gap-1 mb-6" href="#">
                        Hott
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-1"></span>
</a>
<p className="text-neutral-500 font-light text-sm max-w-xs mb-8">
                        Redefining the coffee experience through minimalist design and maximalist flavor profiles.
                    </p>
<div className="flex gap-4 text-neutral-400">
<iconify-icon className="hover:text-black cursor-pointer transition-colors" icon="solar:brand-instagram-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-black cursor-pointer transition-colors" icon="solar:brand-twitter-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-black cursor-pointer transition-colors" icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-sm mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-neutral-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">Our Menu</a></li>
<li><a className="hover:text-black transition-colors" href="#">Wholesale</a></li>
<li><a className="hover:text-black transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-6">Stay in the loop</h4>
<form className="flex flex-col gap-3">
<input className="bg-white border border-neutral-200 rounded px-4 py-2 text-sm focus:outline-none focus:border-neutral-900 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-neutral-900 text-white text-sm font-medium py-2 rounded hover:bg-neutral-800 transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-light">
<p>© 2023 Hott Coffee Co. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-black transition-colors" href="#">Privacy</a>
<a className="hover:text-black transition-colors" href="#">Terms</a>
<a className="hover:text-black transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
