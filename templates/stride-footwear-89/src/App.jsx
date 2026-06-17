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
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-gray-200/60 bg-white/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-gray-900" href="#">STRIDE.</a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900" href="#">Men</a>
<a className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900" href="#">Women</a>
<a className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900" href="#">New Arrivals</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-gray-500 transition-colors hover:text-gray-900">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 text-gray-500 transition-colors relative hover:text-gray-900">
<iconify-icon className="" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-1.5 right-1 h-2 w-2 rounded-full border bg-gray-900 border-white"></span>
</button>
<button className="p-2 text-gray-500 transition-colors hidden sm:block hover:text-gray-900">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="sm:pt-32 sm:pb-24 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-12 pl-6">
<div className="grid lg:grid-cols-2 gap-x-12 gap-y-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm border-gray-200 bg-white">
<span className="w-2 h-2 rounded-full bg-pink-500"></span>
<span className="text-xs font-medium text-gray-600">New Collection Available</span>
</div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter leading-[1.1] text-gray-900">
                    Run beyond <br className="hidden sm:block"/> the limits.
                </h1>
<p className="text-lg text-gray-500 max-w-md leading-relaxed">
                    Engineered for precision, designed for speed. The new Velocity series combines adaptive cushioning with ultra-lightweight materials.
                </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="px-6 py-3 text-sm font-medium rounded-lg transition-all shadow-lg active:scale-95 bg-gray-900 text-white hover:bg-gray-800 shadow-gray-900/10 hover:shadow-gray-900/20">
                        Shop Collection
                    </button>
<button className="px-6 py-3 border text-sm font-medium rounded-lg transition-all active:scale-95 flex items-center gap-2 bg-white border-gray-200 text-gray-600 hover:bg-gray-50">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        Watch Film
                    </button>
</div>
<div className="pt-8 flex items-center gap-8 border-t border-gray-100">
<div>
<p className="text-2xl font-semibold tracking-tight">120g</p>
<p className="text-xs font-medium uppercase tracking-wide text-gray-400">Weight</p>
</div>
<div>
<p className="text-2xl font-semibold tracking-tight">40%</p>
<p className="text-xs font-medium uppercase tracking-wide text-gray-400">Energy Return</p>
</div>
</div>
</div>
<div className="relative group cursor-pointer">

<div className="absolute -top-10 -right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bg-blue-100"></div>
<div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse bg-purple-100" style={{animationDelay: '2s'}}></div>

<div className="relative rounded-2xl p-8 sm:p-12 shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] border transition-transform duration-500 hover:scale-[1.01] bg-white border-gray-100">
<img alt="Stride Velocity Shoe" className="w-full h-auto object-contain transform -rotate-12 hover:-rotate-6 transition-transform duration-500 drop-shadow-2xl" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-sm p-4 rounded-xl border shadow-sm flex items-center justify-between bg-white/90 border-gray-100">
<div>
<p className="text-sm font-semibold tracking-tight text-gray-900">Stride Velocity Air</p>
<p className="text-xs text-gray-500">Professional Running</p>
</div>
<span className="text-sm font-medium text-gray-900">$189.00</span>
</div>
</div>
</div>
</div>
</main>

<section className="border-y sticky top-16 z-40 border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between overflow-x-auto no-scrollbar">
<div className="flex gap-1">
<button className="px-3 py-1.5 rounded-md text-xs font-medium bg-gray-900 text-white">All Shoes</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100">Running</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100">Lifestyle</button>
<button className="px-3 py-1.5 rounded-md text-xs font-medium text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100">Training</button>
</div>
<div className="flex items-center gap-4 pl-4 border-l ml-4 flex-shrink-0 border-gray-200">
<div className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs font-medium group-hover:text-gray-900 text-gray-600">Sort by</span>
<iconify-icon className="group-hover:text-gray-900 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="flex items-center gap-2 cursor-pointer group">
<span className="text-xs font-medium group-hover:text-gray-900 text-gray-600">Filters</span>
<iconify-icon className="group-hover:text-gray-900 text-gray-400" icon="solar:tuning-2-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">

<div className="group flex flex-col gap-3">
<div className="relative rounded-xl overflow-hidden aspect-[4/5] isolate bg-gray-100">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="backdrop-blur w-8 h-8 flex items-center justify-center rounded-full hover:text-blue-500 transition-colors shadow-sm bg-white/90 text-gray-400">
<iconify-icon icon="solar:heart-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
<div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
<button className="w-full backdrop-blur py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 bg-white/95 text-gray-900 hover:bg-gray-900 hover:text-white">
                            Quick Add <iconify-icon icon="solar:bag-plus-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="font-medium tracking-tight text-gray-900">Nike Air Max Red</h3>
<span className="text-sm font-medium text-gray-900">$120</span>
</div>
<p className="text-xs text-gray-500 mt-1">Performance Running</p>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full bg-blue-500 border cursor-pointer ring-1 ring-offset-1 border-gray-200 ring-gray-300"></div>
<div className="w-4 h-4 rounded-full border cursor-pointer hover:ring-1 hover:ring-offset-1 transition-all bg-gray-800 border-gray-200 hover:ring-gray-300"></div>
<div className="w-4 h-4 rounded-full border cursor-pointer hover:ring-1 hover:ring-offset-1 transition-all bg-white border-gray-300 hover:ring-gray-300"></div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative rounded-xl overflow-hidden aspect-[4/5] isolate bg-gray-100">
<span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm z-10 bg-gray-900 text-white">New</span>
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 z-10">
<button className="backdrop-blur w-8 h-8 flex items-center justify-center rounded-full hover:text-blue-500 transition-colors shadow-sm bg-white/90 text-gray-400">
<iconify-icon icon="solar:heart-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
<div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
<button className="w-full backdrop-blur py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 bg-white/95 text-gray-900 hover:bg-gray-900 hover:text-white">
                            Quick Add <iconify-icon icon="solar:bag-plus-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="font-medium tracking-tight text-gray-900">Urban Trek Low</h3>
<span className="text-sm font-medium text-gray-900">$145</span>
</div>
<p className="text-xs text-gray-500 mt-1">Lifestyle Comfort</p>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full border cursor-pointer ring-1 ring-offset-1 bg-blue-200 border-gray-200 ring-gray-300"></div>
<div className="w-4 h-4 rounded-full bg-gray-500 border cursor-pointer hover:ring-1 hover:ring-offset-1 transition-all border-gray-200 hover:ring-gray-300"></div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative rounded-xl overflow-hidden aspect-[4/5] isolate bg-gray-100">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 z-10">
<button className="backdrop-blur w-8 h-8 flex items-center justify-center rounded-full hover:text-blue-500 transition-colors shadow-sm bg-white/90 text-gray-400">
<iconify-icon icon="solar:heart-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
<div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
<button className="w-full backdrop-blur py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 bg-white/95 text-gray-900 hover:bg-gray-900 hover:text-white">
                            Quick Add <iconify-icon icon="solar:bag-plus-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="font-medium tracking-tight text-gray-900">Retro Glide 90</h3>
<span className="text-sm font-medium text-gray-900">$95</span>
</div>
<p className="text-xs text-gray-500 mt-1">Classic Series</p>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full bg-purple-500 border cursor-pointer ring-1 ring-offset-1 border-gray-200 ring-gray-300"></div>
<div className="w-4 h-4 rounded-full border cursor-pointer hover:ring-1 hover:ring-offset-1 transition-all bg-gray-900 border-gray-200 hover:ring-gray-300"></div>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative rounded-xl overflow-hidden aspect-[4/5] isolate bg-gray-100">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 z-10">
<button className="backdrop-blur w-8 h-8 flex items-center justify-center rounded-full hover:text-blue-500 transition-colors shadow-sm bg-white/90 text-gray-400">
<iconify-icon icon="solar:heart-linear" strokeWidth="2" width="18"></iconify-icon>
</button>
</div>
<div className="absolute bottom-3 left-3 right-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
<button className="w-full backdrop-blur py-2.5 rounded-lg text-xs font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 bg-white/95 text-gray-900 hover:bg-gray-900 hover:text-white">
                            Quick Add <iconify-icon icon="solar:bag-plus-linear" width="14"></iconify-icon>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-start">
<h3 className="font-medium tracking-tight text-gray-900">Court Legacy</h3>
<span className="text-sm font-medium text-gray-900">$80</span>
</div>
<p className="text-xs text-gray-500 mt-1">Tennis</p>
<div className="flex gap-2 mt-3">
<div className="w-4 h-4 rounded-full border cursor-pointer ring-1 ring-offset-1 bg-gray-200 border-gray-200 ring-gray-300"></div>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="px-6 py-2.5 border rounded-lg text-sm font-medium transition-all flex items-center gap-2 border-gray-200 text-gray-600 hover:border-gray-400 hover:text-gray-900">
                Load More
                <iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="py-12 px-6 max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tighter mb-8">Technology behind the stride</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative rounded-2xl p-8 overflow-hidden group bg-gray-900">
<img alt="Running" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-gray-900"></div>
<div className="relative h-full flex flex-col justify-end">
<div className="backdrop-blur-md inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 border bg-white/10 border-white/10 text-white">
<iconify-icon icon="solar:wind-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white">Aerodynamic Flow</h3>
<p className="text-sm mt-2 max-w-md text-gray-300">Tested in wind tunnels to reduce drag coefficient by 15%, ensuring you expend less energy with every step.</p>
</div>
</div>

<div className="rounded-2xl p-8 relative overflow-hidden group bg-gray-100">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-gray-900" icon="solar:leaf-linear" width="120"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 shadow-sm border bg-white border-gray-200">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Sustainable Core</h3>
</div>
<p className="text-gray-500 text-sm">Made with 60% recycled materials without compromising structural integrity.</p>
</div>
</div>

<div className="border rounded-2xl p-8 flex flex-col justify-between group transition-colors bg-white border-gray-200 hover:border-gray-300">
<div>
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4 border bg-gray-50 border-gray-200">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900">Durability Guaranteed</h3>
<p className="text-gray-500 text-sm mt-2">Reinforced stitching and premium synthetic bonds.</p>
</div>
<div className="flex items-center gap-1 mt-4">
<span className="h-1 w-full rounded-full overflow-hidden bg-gray-100">
<span className="block h-full w-[80%] rounded-full bg-gray-900"></span>
</span>
<span className="text-xs font-medium ml-2 text-gray-900">800mi</span>
</div>
</div>

<div className="md:col-span-2 border rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 group bg-gray-50 border-gray-200">
<div className="flex-1 space-y-4">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg shadow-sm border bg-white border-gray-200">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">Custom Fit Technology</h3>
<p className="text-gray-500 text-sm">
                        Scan your foot using our app and get a sole molded exactly to your arch and pressure points. 3D printed precision.
                    </p>
<button className="text-sm font-medium border-b transition-colors pb-0.5 text-gray-900 border-gray-900 hover:text-gray-600 hover:border-gray-600">Learn about Custom Fit</button>
</div>
<div className="w-full md:w-1/2 aspect-video rounded-xl border shadow-sm flex items-center justify-center relative overflow-hidden bg-white border-gray-200">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<img alt="Sole" className="w-2/3 h-auto object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-t mt-12 border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-24 text-center">
<iconify-icon className="mb-4 text-gray-400" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tighter mb-2 text-gray-900">Join the movement</h2>
<p className="text-gray-500 mb-8 max-w-sm mx-auto">Get early access to new drops and exclusive running guides.</p>
<form className="max-w-sm mx-auto flex gap-2">
<input className="flex-1 border text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block w-full p-2.5 outline-none transition-all placeholder:text-gray-400 bg-gray-50 border-gray-200 text-gray-900" placeholder="email@example.com" type="email"/>
<button className="px-5 py-2.5 text-sm font-medium rounded-lg focus:ring-2 focus:ring-gray-300 transition-all text-white bg-gray-900 hover:bg-gray-800" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-gray-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-bold tracking-tighter text-gray-900" href="#">STRIDE.</a>
<p className="text-sm text-gray-500 mt-4 max-w-xs">
                    Redefining footwear through design, technology, and sustainable innovation.
                </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-gray-900">Shop</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition-colors hover:text-gray-900" href="#">New Arrivals</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Men</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Women</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-gray-900">Company</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition-colors hover:text-gray-900" href="#">About</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Sustainability</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-gray-900">Support</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="transition-colors hover:text-gray-900" href="#">Help Center</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Returns</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Sizing Guide</a></li>
<li><a className="transition-colors hover:text-gray-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-gray-100">
<p className="text-xs text-gray-400">© 2024 Stride Footwear Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="18"></iconify-icon></a>
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="18"></iconify-icon></a>
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#"><iconify-icon icon="solar:brand-youtube-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
