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
      

<div className="fixed inset-0 pointer-events-none z-50 opacity-40 grain mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-stone-200/50 glass transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-stone-900 text-white flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform duration-300">
<span className="font-medium text-lg leading-none mt-0.5">V</span>
</div>
<span className="text-lg font-medium tracking-tight text-stone-900">VELOCE</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#story">Our Story</a>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden text-stone-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-4 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#">
                    Order Now
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-100/40 to-transparent rounded-full blur-[80px] -z-10"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="flex flex-col gap-6 max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 w-fit animate-fade-up">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Now open in SoHo</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] animate-fade-up delay-100">
                    Slow food,<br/> served <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 italic">fast.</span>
</h1>
<p className="text-lg text-stone-500 leading-relaxed max-w-md animate-fade-up delay-200">
                    Hand-rolled pasta. 12-hour simmered sauces. Ready in 5 minutes. Experience the new standard of fast casual dining.
                </p>
<div className="flex flex-wrap items-center gap-4 animate-fade-up delay-300">
<button className="bg-stone-900 text-stone-50 px-6 py-3 rounded-xl text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-900/20 active:scale-95 flex items-center gap-2 group">
                        View Menu
                        <iconify-icon className="group-hover:rotate-45 transition-transform" icon="lucide:utensils" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-xl text-sm font-medium text-stone-600 hover:bg-stone-100 transition-all border border-stone-200 hover:border-stone-300 flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                        How it works
                    </button>
</div>
</div>
<div className="relative animate-fade-up delay-300 md:h-[500px] flex items-center justify-center">

<div className="absolute inset-0 border border-stone-200/60 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-8 border border-stone-100 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

<div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl shadow-orange-900/10 animate-float z-10">
<img alt="Pasta Dish" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1626844131082-256783844137?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow-lg border border-stone-100 flex flex-col gap-1">
<span className="text-xs text-stone-400 font-medium uppercase tracking-wider">Bestseller</span>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-stone-900">Truffle Rigatoni</span>
<span className="text-xs font-medium bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded">$14</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-stone-900 py-4 overflow-hidden border-y border-stone-800">
<div className="ticker-wrap">
<div className="ticker-content flex items-center gap-12">
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Fresh Flour <iconify-icon className="text-stone-600" icon="lucide:wheat"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Organic Eggs <iconify-icon className="text-stone-600" icon="lucide:egg"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Imported Cheese <iconify-icon className="text-stone-600" icon="lucide:chef-hat"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Family Recipes <iconify-icon className="text-stone-600" icon="lucide:heart"></iconify-icon></span>

<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Fresh Flour <iconify-icon className="text-stone-600" icon="lucide:wheat"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Organic Eggs <iconify-icon className="text-stone-600" icon="lucide:egg"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Imported Cheese <iconify-icon className="text-stone-600" icon="lucide:chef-hat"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Family Recipes <iconify-icon className="text-stone-600" icon="lucide:heart"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Fresh Flour <iconify-icon className="text-stone-600" icon="lucide:wheat"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Organic Eggs <iconify-icon className="text-stone-600" icon="lucide:egg"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Imported Cheese <iconify-icon className="text-stone-600" icon="lucide:chef-hat"></iconify-icon></span>
<span className="text-stone-400 text-sm font-medium tracking-widest uppercase flex items-center gap-4">Family Recipes <iconify-icon className="text-stone-600" icon="lucide:heart"></iconify-icon></span>
</div>
</div>
</div>

<section className="py-24 max-w-6xl mx-auto px-6" id="story">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">The Veloce Standard</h2>
<p className="text-stone-500 max-w-2xl text-lg">We stripped away the waiters and the wait times, but kept the soul of Italian cooking. </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="group relative bg-white rounded-2xl border border-stone-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 md:col-span-2">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="lucide:timer" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-stone-900 mb-2">300 Seconds to Al Dente</h3>
<p className="text-stone-500">Our custom boilers maintain precise temperature zones, allowing us to cook fresh pasta perfectly in a fraction of the time.</p>
</div>
</div>
</div>

<div className="group relative bg-stone-900 rounded-2xl border border-stone-800 p-8 overflow-hidden hover:scale-[1.02] transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950/90 z-10"></div>
<img alt="Flour" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 h-full flex flex-col justify-end">
<h3 className="text-xl font-medium text-white mb-2">Semolina from Sicily</h3>
<p className="text-stone-400 text-sm">We import our flour directly from a 4th generation mill in Catania.</p>
</div>
</div>

<div className="group relative bg-white rounded-2xl border border-stone-200 p-8 overflow-hidden hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500">
<div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-auto">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mt-8">
<h3 className="text-xl font-medium text-stone-900 mb-2">100% Compostable</h3>
<p className="text-stone-500 text-sm">From the bowl to the fork, everything returns to the earth.</p>
</div>
</div>

<div className="group relative bg-orange-50 rounded-2xl border border-orange-100 p-8 overflow-hidden hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-500 md:col-span-2">
<div className="flex flex-col md:flex-row h-full items-center gap-8">
<div className="flex-1">
<h3 className="text-xl font-medium text-stone-900 mb-2">The App Experience</h3>
<p className="text-stone-600 mb-6">Skip the line completely. Customize your bowl, schedule pickup, and earn "Pasta Points" with every order.</p>
<button className="bg-white text-stone-900 px-4 py-2 rounded-lg text-xs font-medium shadow-sm border border-orange-100 hover:bg-orange-100 transition-colors">Download App</button>
</div>
<div className="flex-1 h-full flex items-center justify-center relative">

<div className="w-48 h-full bg-white border-4 border-stone-900 rounded-t-3xl shadow-xl transform translate-y-8 p-3">
<div className="w-full h-2 bg-stone-100 rounded-full mb-4 mx-auto w-1/3"></div>
<div className="space-y-3">
<div className="h-24 bg-stone-100 rounded-lg"></div>
<div className="h-24 bg-stone-100 rounded-lg"></div>
<div className="h-24 bg-stone-100 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="menu">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Curated Bowls</h2>
<p className="text-stone-500 text-lg">Simple ingredients, complex flavors.</p>
</div>

<div className="hidden md:flex bg-stone-100 p-1 rounded-lg border border-stone-200">
<button className="px-4 py-1.5 rounded-md bg-white text-stone-900 shadow-sm text-xs font-medium transition-all">Classics</button>
<button className="px-4 py-1.5 rounded-md text-stone-500 hover:text-stone-900 text-xs font-medium transition-all">Seasonal</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative aspect-square bg-stone-50 rounded-2xl overflow-hidden mb-4 border border-stone-100">
<img alt="Carbonara" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900">Classic Carbonara</h3>
<p className="text-xs text-stone-500 mt-1">Pancetta, Pecorino, Egg Yolk, Black Pepper</p>
</div>
<span className="font-medium text-stone-900 text-sm">$13</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-stone-50 rounded-2xl overflow-hidden mb-4 border border-stone-100">
<img alt="Pesto" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900">Genovese Pesto</h3>
<p className="text-xs text-stone-500 mt-1">Basil, Pine Nuts, Parmesan, Garlic</p>
</div>
<span className="font-medium text-stone-900 text-sm">$12</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-stone-50 rounded-2xl overflow-hidden mb-4 border border-stone-100">
<img alt="Arrabbiata" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">Spicy</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900">Spicy Arrabbiata</h3>
<p className="text-xs text-stone-500 mt-1">San Marzano Tomatoes, Chili, Parsley</p>
</div>
<span className="font-medium text-stone-900 text-sm">$11</span>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-stone-50 rounded-2xl overflow-hidden mb-4 border border-stone-100">
<img alt="Cacio e Pepe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-stone-900 shadow-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-stone-900 hover:text-white">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900">Cacio e Pepe</h3>
<p className="text-xs text-stone-500 mt-1">Pecorino Romano, Toasted Pepper</p>
</div>
<span className="font-medium text-stone-900 text-sm">$12</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden bg-stone-900 text-stone-50 p-12 md:p-24 text-center">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-800/50 to-stone-950/90 z-0"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Build your own masterpiece.</h2>
<p className="text-stone-400 text-lg mb-10 font-light">Choose your shape, pick your sauce, top it off. Over 1,000 combinations available at your fingertips.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-stone-900 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-stone-100 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10">
                        Start Building
                    </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-medium text-stone-300 border border-stone-700 hover:bg-stone-800 transition-all">
                        View Nutrition
                    </button>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-stone-500">
<div className="flex items-center gap-2 text-xs uppercase tracking-wider">
<iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> Vegan Options
                    </div>
<div className="flex items-center gap-2 text-xs uppercase tracking-wider">
<iconify-icon className="text-green-500" icon="lucide:check-circle"></iconify-icon> Gluten Free
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-stone-900 text-white flex items-center justify-center rounded-md text-xs">V</div>
<span className="text-lg font-medium tracking-tight text-stone-900">VELOCE</span>
</a>
<p className="text-stone-500 text-sm leading-relaxed mb-6 max-w-xs">
                        Redefining fast food with Italian tradition and modern speed. Freshly made, served instantly.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Company</h4>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">About</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Careers</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Press</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Sustainabilty</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Support</h4>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Contact</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">FAQs</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Allergens</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Gift Cards</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-stone-900 text-sm">Legal</h4>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Terms</a>
<a className="text-stone-500 text-sm hover:text-stone-900 transition-colors" href="#">Cookies</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 gap-4">
<span className="text-stone-400 text-xs">© 2024 Veloce Pasta Inc. All rights reserved.</span>
<div className="flex items-center gap-2 text-stone-400 text-xs">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
