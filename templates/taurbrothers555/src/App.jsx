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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="flex group-hover:bg-orange-600 transition-colors duration-300 font-semibold text-stone-50 tracking-tighter bg-stone-900 w-8 h-8 rounded-lg items-center justify-center">
                    TB
                </div>
<span className="text-sm font-medium text-stone-800 tracking-tight">Taur Brothers</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#about">Our Story</a>
<a className="hover:text-stone-900 transition-colors" href="#locations">Locations</a>
</div>
<div className="flex items-center gap-4">
<button className="relative text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon height="24" icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full"></span>
</button>
<button className="md:hidden text-stone-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute inset-0 -z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-100/40 blur-[100px] rounded-full mix-blend-multiply"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-stone-200/30 blur-[80px] rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 text-xs font-medium text-stone-600 shadow-sm backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Now serving seasonal Mango Lassi
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-stone-900 leading-[1.1]">
                The purest form of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-500">refreshment.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
                Hand-churned lassi, fresh pressed juices, and rich milk badam. <br className="hidden md:block"/> Crafted daily by the Taur Brothers using traditional recipes.
            </p>
<div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-stone-900 text-white text-sm font-medium flex items-center gap-2 hover:bg-stone-800 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#menu">
                    View Menu
                    <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium flex items-center gap-2 hover:bg-stone-50 transition-all" href="#about">
                    Our Heritage
                </a>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<iconify-icon className="text-stone-400 mb-2" height="28" icon="solar:cup-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-stone-900">100%</div>
<div className="text-sm text-stone-500">Natural Ingredients</div>
</div>
<div className="space-y-1">
<iconify-icon className="text-stone-400 mb-2" height="28" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-stone-900">1985</div>
<div className="text-sm text-stone-500">Established</div>
</div>
<div className="space-y-1">
<iconify-icon className="text-stone-400 mb-2" height="28" icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-stone-900">Daily</div>
<div className="text-sm text-stone-500">Freshly Churned</div>
</div>
<div className="space-y-1">
<iconify-icon className="text-stone-400 mb-2" height="28" icon="solar:heart-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="text-2xl font-semibold tracking-tight text-stone-900">4.9/5</div>
<div className="text-sm text-stone-500">Customer Rating</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="menu">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">Curated Menu</h2>
<p className="text-stone-500">Select your refreshment. Prepared fresh on order.</p>
</div>
<div className="flex gap-2 p-1 bg-stone-200/50 rounded-lg">
<button className="px-4 py-1.5 bg-white rounded shadow-sm text-xs font-medium text-stone-900">All</button>
<button className="px-4 py-1.5 hover:bg-white/50 rounded text-xs font-medium text-stone-500 transition-colors">Lassi</button>
<button className="px-4 py-1.5 hover:bg-white/50 rounded text-xs font-medium text-stone-500 transition-colors">Juice</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
<iconify-icon height="24" icon="solar:cup-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-stone-900 mb-1">Sweet Lassi</h3>
<p className="text-sm text-stone-500 leading-relaxed">Traditional yogurt-based drink, sweetened with organic sugar and a hint of rose water.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
<span className="font-medium text-stone-900">$4.50</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
<iconify-icon height="24" icon="solar:water-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-stone-900 mb-1">Salt Lassi</h3>
<p className="text-sm text-stone-500 leading-relaxed">Savory yogurt drink spiced with roasted cumin seeds, black salt, and fresh coriander.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
<span className="font-medium text-stone-900">$4.00</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-green-50 group-hover:text-green-500 transition-colors">
<iconify-icon height="24" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-stone-900 mb-1">Pudina Lassi</h3>
<p className="text-sm text-stone-500 leading-relaxed">A refreshing blend infused with fresh mint leaves and a proprietary spice mix. Perfect for summer.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
<span className="font-medium text-stone-900">$5.00</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-yellow-50 group-hover:text-yellow-500 transition-colors">
<iconify-icon height="24" icon="solar:sun-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-stone-900 mb-1">Mango Lassi</h3>
<p className="text-sm text-stone-500 leading-relaxed">The crowd favorite. Rich, creamy yogurt blended with sweet Alphonso mango pulp.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
<span className="font-medium text-stone-900">$5.50</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
<iconify-icon height="24" icon="solar:bottle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-stone-900 mb-1">Seasonal Juice</h3>
<p className="text-sm text-stone-500 leading-relaxed">Cold-pressed daily. Choose from Orange, Pomegranate, or Mixed Fruit.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
<span className="font-medium text-stone-900">$6.00</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white border border-stone-200 rounded-xl p-6 hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-6 right-6 p-2 rounded-full bg-stone-50 text-stone-400 group-hover:bg-stone-100 group-hover:text-stone-600 transition-colors">
<iconify-icon height="24" icon="solar:snowflake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-stone-900 mb-1">Milk Badam</h3>
<p className="text-sm text-stone-500 leading-relaxed">Rich almond milk simmered with saffron and cardamom, served chilled. A royal treat.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
<span className="font-medium text-stone-900">$6.50</span>
<button className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon height="20" icon="solar:add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto rounded-2xl bg-stone-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 p-32 bg-orange-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10 px-8 py-16 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="space-y-4 max-w-lg">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Experience the taste of tradition.</h2>
<p className="text-stone-400 font-light">Join our loyalty program and get your 5th Lassi for free. Sign up at the counter.</p>
</div>
<div>
<button className="h-12 px-8 rounded-full bg-white text-stone-900 font-medium hover:bg-stone-100 transition-colors flex items-center gap-2">
                        Get Directions
                        <iconify-icon height="20" icon="solar:map-arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-stone-900 text-white flex items-center justify-center text-xs font-bold">TB</div>
<span className="font-semibold tracking-tight text-stone-900">Taur Brothers</span>
</div>
<p className="text-sm text-stone-500 max-w-xs">Serving the finest lassi and beverages with a commitment to quality and tradition since inception.</p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Products</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#">Sweet Lassi</a></li>
<li><a className="hover:text-stone-900" href="#">Salt Lassi</a></li>
<li><a className="hover:text-stone-900" href="#">Mango Lassi</a></li>
<li><a className="hover:text-stone-900" href="#">Milk Badam</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900" href="#">About Us</a></li>
<li><a className="hover:text-stone-900" href="#">Locations</a></li>
<li><a className="hover:text-stone-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-stone-100 pt-8 text-xs text-stone-400">
<p>© 2024 Taur Brothers. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-900" href="#">Privacy Policy</a>
<a className="hover:text-stone-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
