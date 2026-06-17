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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-emerald-950/80 backdrop-blur-md text-white">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter uppercase text-white hover:text-lime-400 transition-colors" href="#">
                ACE<span className="text-lime-400">.</span>PERFORMANCE
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
<a className="hover:text-white transition-colors" href="#">Rackets</a>
<a className="hover:text-white transition-colors" href="#">Shoes</a>
<a className="hover:text-white transition-colors" href="#">Apparel</a>
<a className="hover:text-white transition-colors" href="#">Accessories</a>
<a className="hover:text-white transition-colors text-lime-400" href="#">Sale</a>
</div>

<div className="flex items-center gap-5">
<button className="text-neutral-300 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-neutral-300 hover:text-white transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-neutral-300 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-lime-400 text-[8px] font-bold text-black">2</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden bg-emerald-950">

<div className="absolute inset-0 z-0">
<img alt="Tennis Player Serving" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl">
<div className="flex items-center gap-2 mb-6">
<span className="px-3 py-1 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs font-medium uppercase tracking-wide">
                        Pro Series 2024
                    </span>
<span className="flex items-center gap-1 text-neutral-300 text-xs">
<iconify-icon className="text-lime-400" icon="solar:star-linear"></iconify-icon> Used by Top 50 Pros
                    </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6">
                    Play Faster.<br/>
                    Hit Harder.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Win Smarter.</span>
</h1>
<p className="text-lg text-neutral-300 mb-8 max-w-lg font-light">
                    Precision-engineered equipment for the modern game. Elevate your performance with professional-grade rackets and gear.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-lime-400 hover:bg-lime-500 text-emerald-950 font-medium rounded-full transition-all duration-300 group" href="#">
                        Shop Tennis Gear
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white font-medium rounded-full transition-all duration-300" href="#">
                        Explore Collections
                    </a>
</div>
<div className="mt-12 flex items-center gap-6 text-xs text-neutral-400 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="solar:verified-check-linear" width="18"></iconify-icon>
                        30-Day Returns
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="solar:globe-linear" width="18"></iconify-icon>
                        Worldwide Shipping
                    </div>
</div>
</div>
</div>
</header>

<section className="py-10 border-b border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-400 uppercase tracking-widest mb-6">Trusted Partners</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight">WILSON</span>
<span className="text-xl font-bold tracking-tight">BABOLAT</span>
<span className="text-xl font-bold tracking-tight italic">HEAD</span>
<span className="text-xl font-bold tracking-tight">YONEX</span>
<span className="text-xl font-bold tracking-tight">NIKECOURT</span>
<span className="text-xl font-bold tracking-tight">LACOSTE</span>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Gear Up</h2>
<a className="hidden md:flex items-center text-sm font-medium text-neutral-600 hover:text-emerald-900 transition-colors" href="#">
                    View All Categories <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group relative h-80 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-1 lg:col-span-1" href="#">
<img alt="Rackets" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold tracking-tight mb-1">Tennis Rackets</h3>
<div className="flex items-center text-sm font-medium text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Shop Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative h-80 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-1 lg:col-span-1" href="#">
<img alt="Apparel" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold tracking-tight mb-1">Performance Apparel</h3>
<div className="flex items-center text-sm font-medium text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Shop Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative h-80 overflow-hidden rounded-2xl bg-neutral-200 md:col-span-1 lg:col-span-1" href="#">
<img alt="Shoes" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-semibold tracking-tight mb-1">Court Shoes</h3>
<div className="flex items-center text-sm font-medium text-lime-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            Shop Now <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-3">
<a className="group relative h-48 overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="Balls" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<h3 className="text-lg font-medium tracking-tight">Tennis Balls</h3>
</div>
</a>
<a className="group relative h-48 overflow-hidden rounded-2xl bg-neutral-200" href="#">
<img alt="Bags" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<h3 className="text-lg font-medium tracking-tight">Bags &amp; Accessories</h3>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-12">Pro's Choice</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<div className="absolute top-3 left-3 bg-emerald-950 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">Best Seller</div>
<img alt="Racket" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 px-4">
<button className="flex-1 bg-white text-emerald-950 text-sm font-medium py-3 rounded-lg shadow-lg hover:bg-lime-400 transition-colors">Add to Cart</button>
<button className="p-3 bg-white text-emerald-950 rounded-lg shadow-lg hover:text-lime-600 transition-colors">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-neutral-900 leading-tight">Pro Staff RF97 v13</h3>
<div className="flex text-emerald-600 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                                4.9
                            </div>
</div>
<p className="text-sm text-neutral-500">Advanced Control</p>
<p className="text-base font-semibold text-neutral-900">$249.00</p>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<div className="absolute top-3 left-3 bg-lime-400 text-emerald-950 text-[10px] uppercase font-bold px-2 py-1 rounded-md tracking-wider">New</div>
<img alt="Shoe" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 px-4">
<button className="flex-1 bg-white text-emerald-950 text-sm font-medium py-3 rounded-lg shadow-lg hover:bg-lime-400 transition-colors">Add to Cart</button>
<button className="p-3 bg-white text-emerald-950 rounded-lg shadow-lg hover:text-lime-600 transition-colors">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-neutral-900 leading-tight">Court FF 3 Novak</h3>
<div className="flex text-emerald-600 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                                4.8
                            </div>
</div>
<p className="text-sm text-neutral-500">All-Court Stability</p>
<p className="text-base font-semibold text-neutral-900">$175.00</p>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<img alt="Bag" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 px-4">
<button className="flex-1 bg-white text-emerald-950 text-sm font-medium py-3 rounded-lg shadow-lg hover:bg-lime-400 transition-colors">Add to Cart</button>
<button className="p-3 bg-white text-emerald-950 rounded-lg shadow-lg hover:text-lime-600 transition-colors">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-neutral-900 leading-tight">Super Tour 15 Pack</h3>
<div className="flex text-emerald-600 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                                5.0
                            </div>
</div>
<p className="text-sm text-neutral-500">Blade Design</p>
<p className="text-base font-semibold text-neutral-900">$140.00</p>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-neutral-100 rounded-xl overflow-hidden mb-4">
<img alt="Dampeners" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 px-4">
<button className="flex-1 bg-white text-emerald-950 text-sm font-medium py-3 rounded-lg shadow-lg hover:bg-lime-400 transition-colors">Add to Cart</button>
<button className="p-3 bg-white text-emerald-950 rounded-lg shadow-lg hover:text-lime-600 transition-colors">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-base font-medium text-neutral-900 leading-tight">Pro Overgrip (12 Pk)</h3>
<div className="flex text-emerald-600 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
                                4.7
                            </div>
</div>
<p className="text-sm text-neutral-500">High Tack</p>
<p className="text-base font-semibold text-neutral-900">$25.00</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-emerald-950 text-white">
<div className="relative h-96 lg:h-auto overflow-hidden">
<img alt="Racket Technology" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-lime-400 animate-pulse border-2 border-white cursor-pointer group">
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-32 bg-black/80 backdrop-blur text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Carbon Mapping for Stability
                </div>
</div>

<div className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full bg-lime-400 animate-pulse border-2 border-white cursor-pointer group">
<div className="absolute right-6 top-1/2 -translate-y-1/2 w-32 bg-black/80 backdrop-blur text-xs p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Aerodynamic Beam Design
                </div>
</div>
</div>
<div className="flex items-center p-12 lg:p-24">
<div className="max-w-md">
<span className="text-lime-400 font-medium text-sm tracking-wider uppercase mb-2 block">Innovation</span>
<h2 className="text-4xl font-semibold tracking-tight mb-6">ISO-SPEED Technology</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                    Experience the future of spin. Our new frame geometry maximizes string movement for unparalleled snapback, giving you 20% more RPM on every stroke without sacrificing control.
                </p>
<a className="inline-flex items-center text-white border-b border-lime-400 pb-1 hover:text-lime-400 transition-colors" href="#">
                    Learn about our Tech <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-10 text-center">Shop by Skill Level</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group bg-white p-8 rounded-2xl border border-neutral-200 hover:border-lime-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-lime-600" icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Beginner</h3>
<p className="text-sm text-neutral-500 mb-4">Forgiving frames and comfortable gear to get you started.</p>
<span className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 group-hover:decoration-lime-500">View Gear</span>
</a>

<a className="group bg-white p-8 rounded-2xl border border-neutral-200 hover:border-lime-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-lime-600" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Intermediate</h3>
<p className="text-sm text-neutral-500 mb-4">Balance power and control as you refine your technique.</p>
<span className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 group-hover:decoration-lime-500">View Gear</span>
</a>

<a className="group bg-white p-8 rounded-2xl border border-neutral-200 hover:border-lime-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-lime-600" icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Advanced</h3>
<p className="text-sm text-neutral-500 mb-4">Precision instruments for competitive match play.</p>
<span className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 group-hover:decoration-lime-500">View Gear</span>
</a>

<a className="group bg-white p-8 rounded-2xl border border-neutral-200 hover:border-lime-500 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-lime-600" icon="solar:crown-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2">Professional</h3>
<p className="text-sm text-neutral-500 mb-4">Tour-spec equipment for maximum performance.</p>
<span className="text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 group-hover:decoration-lime-500">View Gear</span>
</a>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative bg-black text-white">
<div className="absolute inset-0 opacity-40">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 md:p-16 gap-8">
<div className="max-w-xl">
<span className="inline-block bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded mb-4">LIMITED OFFER</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Up to 30% Off<br/>Match-Day Essentials</h2>
<p className="text-neutral-300 mb-8">Stock up on strings, grips, and balls before the season starts. Offer ends soon.</p>
<div className="flex gap-4 text-center">
<div>
<span className="block text-2xl font-bold font-mono">02</span>
<span className="text-xs text-neutral-400 uppercase">Days</span>
</div>
<span className="text-2xl font-bold text-neutral-600">:</span>
<div>
<span className="block text-2xl font-bold font-mono">14</span>
<span className="text-xs text-neutral-400 uppercase">Hours</span>
</div>
<span className="text-2xl font-bold text-neutral-600">:</span>
<div>
<span className="block text-2xl font-bold font-mono">45</span>
<span className="text-xs text-neutral-400 uppercase">Mins</span>
</div>
</div>
</div>
<div>
<a className="bg-white text-black hover:bg-lime-400 hover:text-black transition-colors px-8 py-4 rounded-full font-medium inline-flex items-center" href="#">
                        Grab the Deal <iconify-icon className="ml-2" icon="solar:bag-3-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-100 rounded-full">
<iconify-icon className="text-emerald-900" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Pro-Tested Quality</h4>
<p className="text-sm text-neutral-500">Every item verified for performance.</p>
</div>
</div>
<div className="hidden md:block w-px bg-neutral-200 h-12 self-center"></div>
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-100 rounded-full">
<iconify-icon className="text-emerald-900" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Premium Materials</h4>
<p className="text-sm text-neutral-500">Sourced from top global manufacturers.</p>
</div>
</div>
<div className="hidden md:block w-px bg-neutral-200 h-12 self-center"></div>
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-100 rounded-full">
<iconify-icon className="text-emerald-900" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Fast Shipping</h4>
<p className="text-sm text-neutral-500">Free delivery on orders over $150.</p>
</div>
</div>
<div className="hidden md:block w-px bg-neutral-200 h-12 self-center"></div>
<div className="flex items-start gap-4">
<div className="p-3 bg-neutral-100 rounded-full">
<iconify-icon className="text-emerald-900" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Easy Returns</h4>
<p className="text-sm text-neutral-500">30-day hassle-free return policy.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<div>
<span className="text-lime-600 font-medium text-sm tracking-wider uppercase mb-1 block">Fresh Drops</span>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">New Arrivals</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto px-6 pb-8 no-scrollbar snap-x snap-mandatory max-w-7xl mx-auto">

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="bg-neutral-50 rounded-xl p-6 relative mb-4">
<img className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="font-medium text-neutral-900">Blade 98 v9 16x19</h3>
<p className="text-sm text-neutral-500">$269.00</p>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="bg-neutral-50 rounded-xl p-6 relative mb-4">
<img className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-medium text-neutral-900">Zoom Vapor Pro 2</h3>
<p className="text-sm text-neutral-500">$130.00</p>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="bg-neutral-50 rounded-xl p-6 relative mb-4">
<img className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h3 className="font-medium text-neutral-900">TechFit Performance Tee</h3>
<p className="text-sm text-neutral-500">$45.00</p>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="bg-neutral-50 rounded-xl p-6 relative mb-4">
<img className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="font-medium text-neutral-900">Shift 99 Pro</h3>
<p className="text-sm text-neutral-500">$259.00</p>
</div>
</div>
<div className="text-center mt-6">
<a className="inline-block border border-neutral-300 px-6 py-2 rounded-full text-sm font-medium hover:border-neutral-900 transition-colors" href="#">View All New Arrivals</a>
</div>
</section>

<section className="py-20 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex text-lime-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">"The customization service was incredible. The racket specs were exactly as requested, and my game has improved significantly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">David M.</p>
<p className="text-xs text-neutral-500">Club Player</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex text-lime-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">"Fast shipping and the new court shoes are a game changer. The stability on hard courts is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Sarah J.</p>
<p className="text-xs text-neutral-500">Advanced Junior</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm">
<div className="flex text-lime-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-700 mb-6 leading-relaxed">"ACE is the only place I trust for authentic pro stock gear. Their expertise is evident in every interaction."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Marc L.</p>
<p className="text-xs text-neutral-500">Tennis Coach</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Buying Guides</h2>
<a className="text-sm font-medium text-emerald-900 hover:text-lime-600 transition-colors" href="#">Read All Articles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<a className="group flex flex-col md:flex-row gap-6 items-center bg-neutral-50 p-6 rounded-2xl hover:shadow-md transition-shadow" href="#">
<div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-full md:w-2/3">
<span className="text-xs font-bold text-lime-600 uppercase tracking-wide mb-2 block">Equipment</span>
<h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-900 transition-colors">How to Choose the Perfect Racket Weight</h3>
<p className="text-sm text-neutral-500 mb-4">Understanding swing weight, balance, and static weight to prevent injury and optimize power.</p>
<span className="text-sm font-medium underline decoration-neutral-300 underline-offset-4">Read Guide</span>
</div>
</a>

<a className="group flex flex-col md:flex-row gap-6 items-center bg-neutral-50 p-6 rounded-2xl hover:shadow-md transition-shadow" href="#">
<div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-2/3">
<span className="text-xs font-bold text-lime-600 uppercase tracking-wide mb-2 block">Footwear</span>
<h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-900 transition-colors">Clay vs. Hard Court Shoes</h3>
<p className="text-sm text-neutral-500 mb-4">Why the sole pattern matters for sliding on clay versus traction on hard courts.</p>
<span className="text-sm font-medium underline decoration-neutral-300 underline-offset-4">Read Guide</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-white relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Join the Performance Club</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto">Get early access to limited drops, pro training tips, and 10% off your first order.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-neutral-400 px-6 py-4 rounded-full focus:outline-none focus:border-lime-400 focus:bg-white/20 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-lime-400 hover:bg-lime-500 text-emerald-950 font-medium px-8 py-4 rounded-full transition-colors whitespace-nowrap" type="button">
                    Subscribe
                </button>
</form>
<div className="flex justify-center gap-6 mt-12">
<a className="text-neutral-400 hover:text-lime-400 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-lime-400 transition-colors" href="#">
<iconify-icon icon="solar:videocamera-linear" width="24"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-lime-400 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter uppercase text-white mb-6 block" href="#">
                        ACE<span className="text-lime-400">.</span>PERFORMANCE
                    </a>
<p className="text-sm max-w-xs mb-6">Equipping athletes with the tools to dominate the court. Premium gear, expert advice, and worldwide service.</p>
<div className="flex gap-2">
<iconify-icon icon="solar:card-linear" width="28"></iconify-icon>
<iconify-icon icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Shop</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-lime-400 transition-colors" href="#">Rackets</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Shoes</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Bags</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-lime-400 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Shipping Info</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-lime-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Store Locator</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-sm">
<p>© 2024 ACE Performance Tennis. All rights reserved.</p>
<p className="mt-4 md:mt-0">Designed for Champions.</p>
</div>
</div>
</footer>

    </>
  );
}
