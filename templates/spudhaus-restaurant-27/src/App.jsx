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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-zinc-50 p-1.5 rounded-lg border border-zinc-200 text-orange-600">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-zinc-900">Spudhaus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-orange-600 transition-colors" href="#menu">Menu</a>
<a className="hover:text-orange-600 transition-colors" href="#visit">Location &amp; Hours</a>
</div>
<a className="bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-800 transition-colors" href="#visit">
                Visit Us
            </a>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-xs font-medium text-orange-700">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                    Open Daily 19:30 - 23:59
                </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                    Late night <br/>
<span className="text-zinc-400">cravings, sorted.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed font-light">
                    Premium loaded potatoes and signature fries. The perfect comfort food for your late-night hunger.
                </p>
<div className="pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border-b border-zinc-200 pb-0.5 hover:border-orange-500 transition-colors" href="#menu">
                        Check the Menu <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-100/50 to-transparent rounded-[2rem] transform rotate-3 scale-95 -z-10"></div>
<img alt="Loaded Fries" className="rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-zinc-100 object-cover h-[400px] w-full" src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50/50 border-t border-zinc-100" id="menu">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-2">The Menu</h2>
<p className="text-zinc-500 text-sm font-light">Freshly prepared. Generously topped.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs text-zinc-600">All Halal</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-full text-xs text-zinc-600">Fresh Ingredients</span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="group bg-white rounded-2xl p-2 border border-zinc-100 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 relative mb-4">
<img alt="Loaded Potato" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585109649139-3668018951a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900">The Loaded Potato</h3>
<span className="bg-zinc-100 text-zinc-900 text-xs font-semibold px-2 py-1 rounded-md">Rp30.000,00</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 font-light">
                            Our signature dish. Crispy fries topped with savory shredded beef, double-layered melted cheese, rich cheese sauce, and finished with melted butter.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded">Beef</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded">Cheese</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-zinc-100 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 relative mb-4">
<img alt="Mac and Cheese Fries" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900">Mac &amp; Cheese Fries</h3>
<span className="bg-zinc-100 text-zinc-900 text-xs font-semibold px-2 py-1 rounded-md">Rp20.000,00</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 font-light">
                            The ultimate comfort mashup. Golden crisp french fries topped with premium smoked beef and drowned in our house-made creamy mac &amp; cheese sauce.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded">Smoked</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded">Creamy</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-zinc-100 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 relative mb-4">
<img alt="Snack Pack" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628294895950-98052523e036?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900">Snack Pack</h3>
<span className="bg-zinc-100 text-zinc-900 text-xs font-semibold px-2 py-1 rounded-md">Rp20.000,00</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 font-light">
                            The crowd favorite. A hearty box of crunchy fries layered with generous meat toppings and drizzled with the holy trinity of sauces.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded">Classic</span>
<span className="text-[10px] uppercase tracking-wider text-zinc-400 border border-zinc-100 px-2 py-1 rounded">Saucy</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-zinc-100 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 relative mb-4">
<img alt="Spud Fizz" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900">Spud Fizz</h3>
<span className="bg-zinc-100 text-zinc-900 text-xs font-semibold px-2 py-1 rounded-md">Rp15.000,00</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-4 font-light">
                            Sparkling Sprite base infused with your choice of fruit syrup. Refreshing and sweet.
                        </p>
<div className="grid grid-cols-3 gap-1 mt-2">
<div className="text-center p-1 bg-orange-50 rounded text-[10px] font-medium text-orange-700">Mango</div>
<div className="text-center p-1 bg-rose-50 rounded text-[10px] font-medium text-rose-700">Lychee</div>
<div className="text-center p-1 bg-red-50 rounded text-[10px] font-medium text-red-700">Strawberry</div>
</div>
</div>
</div>
</div>

<div className="mt-12 bg-white rounded-2xl border border-zinc-100 p-6 md:p-8">
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-6">Extras &amp; Toppings</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex justify-between items-center border-b border-zinc-50 pb-2">
<span className="text-zinc-700 text-sm">Shredded Beef</span>
<span className="text-zinc-400 text-sm">+Rp5.000</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-50 pb-2">
<span className="text-zinc-700 text-sm">Cheese Sauce</span>
<span className="text-zinc-400 text-sm">+Rp3.000</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-50 pb-2">
<span className="text-zinc-700 text-sm">Fresh Veggies</span>
<span className="text-zinc-400 text-sm">+Rp2.000</span>
</div>
<div className="flex justify-between items-center border-b border-zinc-50 pb-2">
<span className="text-zinc-700 text-sm">Extra Sauce</span>
<span className="text-zinc-400 text-sm">+Rp2.000</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="visit">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-zinc-900 rounded-3xl overflow-hidden text-white shadow-2xl shadow-zinc-200">
<div className="grid lg:grid-cols-5 min-h-[500px]">

<div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 z-0"></div>
<div className="relative z-10 space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Visit Us</h2>
<p className="text-zinc-400 font-light text-sm">Come for the potatoes, stay for the vibe.</p>
</div>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="bg-zinc-800 p-2 rounded-lg text-orange-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg text-white mb-1">Opening Hours</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                                            Monday - Sunday<br/>
<span className="text-white font-medium">19:30 - 23:59</span>
</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="bg-zinc-800 p-2 rounded-lg text-orange-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg text-white mb-1">Location</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                            Find us at our spot.
                                        </p>
<a className="inline-flex items-center gap-2 text-sm bg-white text-zinc-950 px-4 py-2 rounded-lg hover:bg-zinc-200 transition-colors font-medium" href="https://maps.app.goo.gl/waGTuDRJiTS13Hwf7" target="_blank">
                                            Get Directions <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="relative z-10 pt-8 mt-8 border-t border-zinc-800">
<div className="flex items-center gap-2 text-zinc-500 text-sm">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>No reservations required. Just walk in.</span>
</div>
</div>
</div>

<div className="lg:col-span-3 bg-zinc-800 relative group h-full min-h-[300px]">
<a className="block w-full h-full relative cursor-pointer" href="https://maps.app.goo.gl/waGTuDRJiTS13Hwf7" target="_blank">

<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10 flex items-center justify-center">
<span className="bg-white/90 backdrop-blur text-zinc-900 px-4 py-2 rounded-full text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                    Open in Google Maps
                                </span>
</div>

<img alt="Map Location" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-zinc-100 mt-12">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-4">
<iconify-icon className="text-orange-500" icon="solar:crown-linear" width="16"></iconify-icon>
<span className="text-sm font-semibold text-zinc-900">Spudhaus</span>
</div>
<p className="text-zinc-400 text-xs">© 2024 Spudhaus. Served hot daily.</p>
</div>
</footer>

    </>
  );
}
