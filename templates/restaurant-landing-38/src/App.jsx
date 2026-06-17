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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
                BIG BERGER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#menu">Menu</a>
<a className="hover:text-white transition-colors duration-200" href="#locations">Locations</a>
<a className="hover:text-white transition-colors duration-200" href="#about">Our Story</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="hover:bg-neutral-200 transition-colors text-xs font-medium text-black bg-white max-w-none rounded-full pt-2 pr-4 pb-2 pl-4">
                    Order Now
                </button>
</div>
</div>
</nav>

<main className="overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neutral-900/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                Now open in Downtown
            </div>
<h1 className="md:text-7xl lg:text-8xl text-5xl font-medium text-white tracking-tight mb-6">
                Taste the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">unimaginable.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-neutral-500 max-w-2xl mr-auto mb-10 ml-auto">
                Experience gourmet burgers crafted with precision. Locally sourced ingredients, 
                architectural buns, and flavors that define modern dining.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black h-12 px-8 rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    View Full Menu
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-neutral-800 text-neutral-300 h-12 px-8 rounded-full font-medium text-sm hover:bg-neutral-900 transition-all">
                    Book a Table
                </button>
</div>
</div>

<div className="mt-24 border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="solar:flame-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium text-white tracking-tight">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Angus Beef</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium text-white tracking-tight">15min</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Avg Prep Time</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium text-white tracking-tight">Organic</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Fresh Produce</span>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-2xl font-medium text-white tracking-tight">4.9/5</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Customer Rating</span>
</div>
</div>
</div>
</main>

<section className="py-24 max-w-7xl mx-auto px-6" id="menu">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Curated Classics</h2>
<p className="text-neutral-500 text-sm max-w-md">Our menu is a collection of perfected recipes, refined over years of obsession.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-neutral-400 transition-colors" href="#">
                See all items <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-1 hover:bg-neutral-900 transition-colors duration-300">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 mb-4">
<img alt="Burger" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-white font-medium">
                        $14.00
                    </div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-medium text-white mb-1">The Original</h3>
<p className="text-sm text-neutral-500 mb-4">Double patty, aged cheddar, caramelized onions, house sauce.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                        Add to Order
                    </button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-1 hover:bg-neutral-900 transition-colors duration-300">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 mb-4">
<img alt="Burger" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-white font-medium">
                        $16.00
                    </div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-medium text-white mb-1">Truffle Mushroom</h3>
<p className="text-sm text-neutral-500 mb-4">Swiss cheese, sautéed wild mushrooms, truffle aioli, brioche.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                        Add to Order
                    </button>
</div>
</div>

<div className="group relative bg-neutral-900/50 border border-white/5 rounded-2xl p-1 hover:bg-neutral-900 transition-colors duration-300">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-800 mb-4">
<img alt="Burger" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs text-white font-medium">
                        $12.00
                    </div>
</div>
<div className="px-4 pb-4">
<h3 className="text-lg font-medium text-white mb-1">Spicy Crispy</h3>
<p className="text-sm text-neutral-500 mb-4">Fried chicken thigh, spicy slaw, pickles, jalapeño relish.</p>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                        Add to Order
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Built Your Way</h2>
<p className="text-neutral-400 mb-8 leading-relaxed font-light">
                    Every burger is a canvas. Customize your order with our precision tools to match your exact dietary preferences and taste profile.
                </p>
<div className="bg-neutral-950 border border-white/5 rounded-2xl p-6 max-w-md">
<div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
<span className="text-white font-medium">Ingredients Preference</span>
<span className="text-xs text-neutral-500">Custom selection</span>
</div>
<div className="space-y-4">

<label className="custom-checkbox flex items-center justify-between cursor-pointer group">
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Extra Truffle Sauce</span>
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-neutral-700 rounded bg-neutral-900 flex items-center justify-center transition-all duration-200">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
</label>

<label className="custom-checkbox flex items-center justify-between cursor-pointer group">
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Gluten Free Bun</span>
<div className="relative">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-neutral-700 rounded bg-neutral-900 flex items-center justify-center transition-all duration-200">
<svg className="w-3 h-3 hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</div>
</label>
<div className="h-px bg-white/5 my-4"></div>

<label className="custom-toggle flex items-center justify-between cursor-pointer group">
<div className="flex flex-col">
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Make it a Meal</span>
<span className="text-xs text-neutral-500">Includes Fries &amp; Drink</span>
</div>
<div className="relative">
<input className="sr-only" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-800 rounded-full transition-colors duration-200 p-1">
<span className="block w-4 h-4 bg-neutral-400 rounded-full shadow-sm transition-transform duration-200"></span>
</div>
</div>
</label>
</div>
</div>
</div>
<div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-white mb-4" icon="solar:chef-hat-linear" strokeWidth="1.2" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Artisan Chefs</h3>
<p className="text-sm text-neutral-500">Crafted by award-winning culinary experts focused on texture and balance.</p>
</div>
<div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-white mb-4" icon="solar:scooter-linear" strokeWidth="1.2" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Priority Delivery</h3>
<p className="text-sm text-neutral-500">Vacuum sealed heat-retaining packaging ensures studio-quality taste at home.</p>
</div>
<div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-white mb-4" icon="solar:users-group-rounded-linear" strokeWidth="1.2" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Community</h3>
<p className="text-sm text-neutral-500">Join our loyalty program for exclusive tastings and secret menu items.</p>
</div>
<div className="bg-neutral-900/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-white mb-4" icon="solar:verified-check-linear" strokeWidth="1.2" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Quality First</h3>
<p className="text-sm text-neutral-500">We never compromise. If it's not perfect, we don't serve it.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="locations">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Visit Us</h2>
<p className="text-neutral-500 mb-8">Three locations across the city. Open daily 11am - 11pm.</p>
<div className="space-y-6">
<div className="group flex gap-4 p-4 rounded-xl border border-transparent hover:border-white/5 hover:bg-neutral-900/50 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Downtown Flagship</h3>
<p className="text-sm text-neutral-500 mt-1">124 Market Street, District 1</p>
<span className="text-xs text-emerald-500 mt-2 block">Open Now</span>
</div>
</div>
<div className="group flex gap-4 p-4 rounded-xl border border-transparent hover:border-white/5 hover:bg-neutral-900/50 transition-all cursor-pointer">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">West End</h3>
<p className="text-sm text-neutral-500 mt-1">88 Sunset Blvd, Suite 400</p>
<span className="text-xs text-emerald-500 mt-2 block">Open Now</span>
</div>
</div>
</div>
<div className="mt-10 pt-10 border-t border-white/5">
<h3 className="text-white font-medium mb-4">Newsletter</h3>
<form className="flex gap-2 max-w-sm">
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="email@domain.com" type="email"/>
<button className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="relative h-[500px] w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/5">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-4 h-4 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.5)] z-10 relative"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full animate-ping"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-neutral-950/90 backdrop-blur-md border border-white/10 p-4 rounded-xl">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">Navigation</p>
<p className="text-white text-sm font-medium">15 mins to Downtown</p>
</div>
<button className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div>
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
                        BIG BERGER
                    </a>
<p className="text-neutral-500 text-sm max-w-xs">Redefining the burger experience through design, quality, and simplicity.</p>
</div>
<div className="flex gap-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">Menu</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Burgers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sides</a></li>
<li><a className="hover:text-white transition-colors" href="#">Drinks</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2023 Big Berger Cafe. All rights reserved.</p>
<div className="flex items-center gap-6">
<p className="text-xs text-neutral-600 hover:text-neutral-400 cursor-pointer">Privacy Policy</p>
<p className="text-xs text-neutral-600 hover:text-neutral-400 cursor-pointer">Terms of Service</p>
</div>
</div>
</div>
</footer>

    </>
  );
}
