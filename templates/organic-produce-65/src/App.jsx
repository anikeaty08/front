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
emerald: {
50: '#ecfdf5',
100: '#d1fae5',
500: '#10b981',
600: '#059669',
700: '#047857',
900: '#064e3b',
950: '#022c22',
}
}
}
}
}



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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-slate-900 font-semibold tracking-tighter text-lg" href="#">O R G N C</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors" href="#products">Shop</a>
<a className="hover:text-slate-900 transition-colors" href="#story">Our Story</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-900 transition-colors p-2 hidden sm:block">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</button>
<button className="text-slate-500 hover:text-slate-900 transition-colors p-2 relative">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="absolute top-1 right-1 w-2 h-2 bg-emerald-600 rounded-full"></span>
</button>
<button className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
                    Start Order
                </button>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Harvesting daily in the valley
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Earth's finest,<br/> delivered fresh.
                    </h1>
<p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                        100% organic, chemical-free produce sourced directly from local regenerative farms. Experience food the way nature intended.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-all shadow-sm" href="#products">
                            Shop Fresh Produce
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm" href="#story">
                            Meet Our Farmers
                        </a>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none mx-auto">
<div className="absolute inset-0 bg-emerald-100/50 rounded-3xl transform rotate-3 scale-105"></div>
<img alt="Fresh organic vegetables" className="relative rounded-3xl shadow-sm object-cover aspect-[4/3] w-full border border-slate-200/50" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hidden sm:flex">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">100% Organic</p>
<p className="text-xs text-slate-500">Certified farms</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-600" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Certified Organic</span>
</div>
<div className="flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-600" icon="solar:tractor-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Direct from Farms</span>
</div>
<div className="flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-600" icon="solar:box-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Sustainable Packaging</span>
</div>
<div className="flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-emerald-600" icon="solar:routing-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Next-Day Delivery</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="products">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Fresh this week</h2>
<p className="text-sm text-slate-500">Seasonal harvests, picked at peak ripeness.</p>
</div>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1 group" href="#">
                View all produce
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-sm transition-all">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Heirloom Tomatoes" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded text-xs font-medium text-slate-900 shadow-sm">Seasonal</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900">Heirloom Tomatoes</h3>
<span className="text-sm font-medium text-slate-900">$6.99</span>
</div>
<p className="text-xs text-slate-500 mb-4">per lb • Locally grown</p>
<button className="w-full py-2 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
                        Add to Cart
                    </button>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-sm transition-all">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Organic Kale" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900">Tuscan Kale</h3>
<span className="text-sm font-medium text-slate-900">$3.49</span>
</div>
<p className="text-xs text-slate-500 mb-4">per bunch • Chemical-free</p>
<button className="w-full py-2 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
                        Add to Cart
                    </button>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-sm transition-all">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Farm Eggs" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-emerald-100/90 backdrop-blur-sm rounded text-xs font-medium text-emerald-800 shadow-sm">Best Seller</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900">Pasture-Raised Eggs</h3>
<span className="text-sm font-medium text-slate-900">$7.50</span>
</div>
<p className="text-xs text-slate-500 mb-4">1 Dozen • Free-range</p>
<button className="w-full py-2 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
                        Add to Cart
                    </button>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-slate-200/60 overflow-hidden hover:shadow-sm transition-all">
<div className="aspect-square bg-slate-100 relative overflow-hidden">
<img alt="Fruit Box" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-1">
<h3 className="font-medium text-slate-900">Mixed Fruit Box</h3>
<span className="text-sm font-medium text-slate-900">$24.00</span>
</div>
<p className="text-xs text-slate-500 mb-4">Medium box • Seasonal mix</p>
<button className="w-full py-2 px-4 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Beyond organic standards</h2>
<p className="text-sm text-slate-500">We don't just sell food; we support an ecosystem. Every purchase contributes to healthier soil and happier communities.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">100% Chemical-Free</h3>
<p className="text-sm text-slate-500">Grown without synthetic pesticides or fertilizers, relying entirely on natural farming methods.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Direct Sourcing</h3>
<p className="text-sm text-slate-500">We cut out the middleman to ensure farmers get paid fairly and you get food faster.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Freshness Guarantee</h3>
<p className="text-sm text-slate-500">Most of our produce is harvested less than 24 hours before it arrives at your doorstep.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-slate-900 mb-4">
<iconify-icon icon="solar:recycle-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Sustainable Practices</h3>
<p className="text-sm text-slate-500">From compostable packaging to zero-emission delivery options in select cities.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="story">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-square border border-slate-200/60">
<img alt="Farmer in a field" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<p className="text-sm font-medium tracking-wide uppercase opacity-90 mb-1">Our Mission</p>
<p className="text-lg font-medium leading-snug">Reconnecting communities with real, nourishing food straight from the soil.</p>
</div>
</div>
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Rooted in respect for nature.</h2>
<div className="space-y-4 text-sm text-slate-500 leading-relaxed mb-8">
<p>
                        ORGN started with a simple realization: the food system is broken. Mass production has prioritized shelf-life and appearance over nutrition, flavor, and planetary health.
                    </p>
<p>
                        We set out to build an alternative. By partnering exclusively with small-scale farmers practicing regenerative agriculture, we are creating a transparent supply chain. We know the people who grow your food, and we understand the care they put into their soil.
                    </p>
<p>
                        When you choose us, you aren't just buying groceries. You are voting for a food system that respects the earth, sustains local economies, and brings vibrant health to your table.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors" href="#">
                    Read our full philosophy
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Farm to door, simplified.</h2>
<p className="text-sm text-slate-400">A seamless process designed to minimize time between harvest and your plate.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-slate-800"></div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-900 relative z-10 mb-4 text-white">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-2">1. You Choose</h3>
<p className="text-xs text-slate-400">Browse our weekly selection of seasonal produce and pantry staples.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-900 relative z-10 mb-4 text-white">
<iconify-icon icon="solar:hand-stars-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-2">2. We Harvest</h3>
<p className="text-xs text-slate-400">Farmers pick your items precisely to order to guarantee peak freshness.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-900 relative z-10 mb-4 text-white">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-2">3. We Pack</h3>
<p className="text-xs text-slate-400">Orders are carefully packed in our facility using sustainable, minimal materials.</p>
</div>

<div className="relative text-center">
<div className="w-12 h-12 mx-auto bg-emerald-600 rounded-full flex items-center justify-center border-4 border-slate-900 relative z-10 mb-4 text-white shadow-[0_0_15px_rgba(5,150,105,0.4)]">
<iconify-icon icon="solar:routing-linear" width="20"></iconify-icon>
</div>
<h3 className="font-medium text-white mb-2">4. We Deliver</h3>
<p className="text-xs text-slate-400">Your fresh groceries arrive right at your door, ready to be enjoyed.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-12">The proof is in the tasting.</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-emerald-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        "The tomatoes actually taste like tomatoes! I forgot what real food tasted like until I started getting my weekly boxes from ORGN. The quality is unmatched."
                    </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Weekly Subscriber</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-emerald-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        "I love that I know exactly which farm my leafy greens came from. The packaging is minimal and fully compostable, which aligns perfectly with our family values."
                    </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">David Miller</p>
<p className="text-xs text-slate-500">Customer since 2023</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-emerald-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        "Convenience usually means compromising on quality, but not here. The produce is always crisp, vibrant, and stays fresh much longer than grocery store bought."
                    </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Emily Chen</p>
<p className="text-xs text-slate-500">Local Chef</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto bg-emerald-50 rounded-3xl border border-emerald-100 overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 relative z-10">
<div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-800 text-xs font-medium mb-4">
<iconify-icon icon="solar:box-linear" width="14"></iconify-icon>
                        Subscription
                    </div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">The Weekly Harvest Box</h2>
<p className="text-sm text-slate-600 mb-6 max-w-md">
                        Let us do the curating. Get a seasonal mix of farm-fresh fruits and vegetables delivered to your door every week. Cancel or pause anytime.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Save 15% compared to individual items
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Customize what goes in your box
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Free delivery on orders over $50
                        </li>
</ul>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto">
                        Build Your Box
                    </button>
</div>
<div className="relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-sm border border-slate-200/50">
<img alt="Vegetable Box" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-center px-4">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Start eating better today.
            </h2>
<p className="text-lg text-emerald-100/70 mb-10 max-w-xl mx-auto">
                Join thousands of households switching to cleaner, fresher, and more sustainable groceries.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-emerald-950 bg-white rounded-full hover:bg-slate-50 transition-colors shadow-sm">
                    Shop Fresh Now
                </button>
<button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white border border-emerald-800 rounded-full hover:bg-emerald-900 transition-colors">
                    View Subscription Plans
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-slate-900 font-semibold tracking-tighter text-xl mb-4 block" href="#">O R G N C</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Bringing the farm to your table with uncompromising quality and sustainable practices.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Produce</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Dairy &amp; Eggs</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Pantry</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Weekly Box</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Farms</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2023 ORGNC Food Co. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
