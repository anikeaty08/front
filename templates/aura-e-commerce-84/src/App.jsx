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
      

<div className="bg-zinc-900 text-white text-xs text-center py-2 font-medium tracking-wide">
        COMPLIMENTARY SHIPPING ON ORDERS OVER $200
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-center justify-between h-16">

<button className="md:hidden text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a>
</div>

<a className="text-xl font-semibold tracking-tighter uppercase" href="#">Aura</a>

<div className="flex items-center gap-4 md:gap-6">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="hidden md:block text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="22" icon="solar:user-linear" width="22"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon height="22" icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-900"></span>
</span>
</button>
</div>
</div>
</div>
</nav>

<section className="px-4 md:px-6 py-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-8 relative group overflow-hidden rounded-2xl bg-zinc-100 h-[500px] md:h-full">
<img alt="Woman in coat" className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 img-reveal" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<span className="inline-block text-white text-xs font-medium tracking-widest uppercase mb-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Season 04</span>
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4 leading-tight">
                        Form meets<br/>functionality.
                    </h1>
<div className="flex items-center gap-4">
<a className="bg-white text-zinc-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors" href="#">
                            Explore Collection
                        </a>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4 h-full">

<div className="relative flex-1 group overflow-hidden rounded-2xl bg-zinc-100 h-[300px] md:h-auto">
<img alt="Denim detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 img-reveal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{animationDelay: '0.1s'}}/>
<div className="absolute bottom-6 left-6">
<h3 className="text-white text-xl font-medium tracking-tight">The Denim Edit</h3>
<p className="text-zinc-200 text-sm mt-1">Japanese Selvedge</p>
</div>
</div>

<div className="relative flex-1 group overflow-hidden rounded-2xl bg-zinc-100 h-[300px] md:h-auto flex items-center justify-center p-8 text-center border border-zinc-200">
<div className="absolute inset-0 bg-zinc-50 transition-colors group-hover:bg-zinc-100"></div>
<div className="relative z-10">
<iconify-icon className="text-zinc-400 mb-4 mx-auto" height="48" icon="solar:star-fall-linear" width="48"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-2">New Arrivals</h3>
<p className="text-zinc-500 text-sm mb-6 max-w-[200px] mx-auto">Updated weekly with essential pieces for your rotation.</p>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                            Shop Now 
                            <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-zinc-100 bg-zinc-50/50 overflow-hidden py-4">
<div className="flex items-center gap-12 whitespace-nowrap animate-marquee">

<div className="flex items-center gap-12 text-sm font-medium text-zinc-500 overflow-x-auto no-scrollbar px-6 w-full justify-between md:justify-center">
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Sustainable Materials</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:box-linear"></iconify-icon> Global Shipping</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> 30-Day Returns</span>
<span className="flex items-center gap-2 md:hidden"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure Checkout</span>
</div>
</div>
</div>

<section className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-6">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Core Essentials</h2>
<p className="text-zinc-500 text-sm">Timeless pieces designed for longevity.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors group" href="#">
                View All 
                <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="T-Shirt" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>

<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-zinc-900 py-2.5 rounded-md text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-zinc-200">
                        Quick Add
                    </button>

<span className="absolute top-3 left-3 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm">New</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Heavyweight Cotton Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Off-White</p>
</div>
<span className="text-sm font-medium text-zinc-900">$45</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Jacket" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-zinc-900 py-2.5 rounded-md text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-zinc-200">
                        Quick Add
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Technical Shell Jacket</h3>
<p className="text-xs text-zinc-500 mt-1">Slate Grey</p>
</div>
<span className="text-sm font-medium text-zinc-900">$210</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Pants" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-zinc-900 py-2.5 rounded-md text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-zinc-200">
                        Quick Add
                    </button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Pleated Wool Trousers</h3>
<p className="text-xs text-zinc-500 mt-1">Charcoal</p>
</div>
<span className="text-sm font-medium text-zinc-900">$145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-lg overflow-hidden mb-4">
<img alt="Sweater" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-zinc-900 py-2.5 rounded-md text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-zinc-200">
                        Quick Add
                    </button>

<span className="absolute top-3 left-3 bg-zinc-900 text-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm">Low Stock</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">Merino Crewneck</h3>
<p className="text-xs text-zinc-500 mt-1">Navy</p>
</div>
<span className="text-sm font-medium text-zinc-900">$120</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 h-[500px] border-t border-zinc-100">
<div className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-zinc-100">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
<h3 className="text-3xl font-semibold text-white tracking-tight drop-shadow-md mb-3">Accessories</h3>
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-white/90 backdrop-blur text-zinc-900 text-xs font-medium rounded-lg hover:bg-white transition-colors shadow-lg shadow-black/5" href="#">
                    Shop Now
                </a>
</div>
</div>
<div className="relative group overflow-hidden">
<img alt="Outerwear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
<h3 className="text-3xl font-semibold text-white tracking-tight drop-shadow-md mb-3">Outerwear</h3>
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-white/90 backdrop-blur text-zinc-900 text-xs font-medium rounded-lg hover:bg-white transition-colors shadow-lg shadow-black/5" href="#">
                    Shop Now
                </a>
</div>
</div>
</section>

<section className="py-16 max-w-7xl mx-auto px-4 md:px-6">
<div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-md">
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2">Refine your style</h3>
<p className="text-sm text-zinc-500">Use our curated filters to find exactly what you need for the coming season.</p>
</div>

<div className="flex items-center gap-4 flex-wrap">

<div className="relative group">
<button className="flex items-center gap-2 bg-white border border-zinc-200 px-4 py-2 rounded-lg text-sm font-medium text-zinc-700 hover:border-zinc-300 transition-colors shadow-sm">
<span>Size: Medium</span>
<iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full mt-2 w-full min-w-[140px] bg-white border border-zinc-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 p-1">
<div className="px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50 rounded-md cursor-pointer">Small</div>
<div className="px-3 py-2 text-sm text-zinc-900 bg-zinc-50 rounded-md cursor-pointer flex justify-between items-center">Medium <iconify-icon icon="solar:check-linear"></iconify-icon></div>
<div className="px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50 rounded-md cursor-pointer">Large</div>
</div>
</div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-zinc-900"></div>
</div>
<span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900">In Stock Only</span>
</label>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter uppercase mb-4 block" href="#">Aura</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Elevated basics for the modern individual. Designed in New York, crafted for the world.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Help Center</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping Info</a></li>
<li><a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-zinc-900 mb-4">Stay in the loop</h4>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all" placeholder="email@example.com" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-900 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-[10px] text-zinc-400">By subscribing you agree to our Terms &amp; Privacy Policy.</p>
</form>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-400">© 2023 Aura Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-400 hover:text-zinc-900" href="#">Privacy</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-900" href="#">Terms</a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
