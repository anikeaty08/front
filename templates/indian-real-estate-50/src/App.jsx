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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">FLAT FINDER INDIA</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Buy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Rent</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Sell</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">New Projects</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">Log in</button>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition shadow-sm ring-1 ring-slate-900/5">
                        List Property
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Now live in Mumbai, Bangalore &amp; Delhi NCR
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 max-w-4xl mb-6">
                    Discover a home that <br className="hidden md:block"/> fits your life in India.
                </h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mb-12 font-light leading-relaxed">
                    Premium flats, apartments, and villas currated for the modern Indian lifestyle. Transparent pricing, verified listings, and seamless transactions.
                </p>

<div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-2 flex flex-col md:flex-row gap-2">
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border-none rounded-xl text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm bg-gray-50 group-hover:bg-white transition-colors" placeholder="City, Locality or Project" type="text"/>
</div>
<div className="w-px bg-slate-100 my-2 hidden md:block"></div>
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<select className="block w-full pl-10 pr-10 py-3 border-none rounded-xl text-slate-900 bg-gray-50 group-hover:bg-white focus:ring-0 sm:text-sm appearance-none cursor-pointer">
<option>Apartment</option>
<option>Villa / Bungalow</option>
<option>Plot / Land</option>
<option>Penthouse</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="w-px bg-slate-100 my-2 hidden md:block"></div>
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<select className="block w-full pl-10 pr-10 py-3 border-none rounded-xl text-slate-900 bg-gray-50 group-hover:bg-white focus:ring-0 sm:text-sm appearance-none cursor-pointer">
<option>Budget</option>
<option>₹50L - ₹1 Cr</option>
<option>₹1 Cr - ₹3 Cr</option>
<option>₹3 Cr - ₹5 Cr</option>
<option>₹5 Cr+</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl text-sm font-medium transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2">
<span>Search</span>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</section>

<section className="py-12 border-b border-dashed border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Popular Cities</p>
<div className="flex flex-wrap gap-3">
<a className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full hover:border-slate-400 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold">M</span>
</div>
<span className="text-sm font-medium text-slate-700">Mumbai</span>
</a>
<a className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full hover:border-slate-400 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold">B</span>
</div>
<span className="text-sm font-medium text-slate-700">Bangalore</span>
</a>
<a className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full hover:border-slate-400 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold">G</span>
</div>
<span className="text-sm font-medium text-slate-700">Gurgaon</span>
</a>
<a className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full hover:border-slate-400 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold">H</span>
</div>
<span className="text-sm font-medium text-slate-700">Hyderabad</span>
</a>
<a className="group flex items-center gap-2 pl-2 pr-4 py-1.5 bg-white border border-slate-200 rounded-full hover:border-slate-400 transition-colors" href="#">
<div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="text-[10px] font-bold">P</span>
</div>
<span className="text-sm font-medium text-slate-700">Pune</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Curated Listings</h2>
<p className="text-slate-500 font-light">Handpicked properties for the discerning buyer.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-900 hover:text-slate-600 transition" href="#">
                    View all properties
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4 aspect-[4/3]">
<img alt="Property" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-slate-900 border border-white/20">For Sale</span>
<span className="bg-indigo-500/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-white border border-white/20">New</span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">The Worli Skyline</h3>
<p className="text-lg font-semibold text-slate-900">₹4.5 Cr</p>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Worli, South Mumbai
                        </p>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                3 BHK
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                3 Bath
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                1,850 sq.ft
                            </div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4 aspect-[4/3]">
<img alt="Property" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-slate-900 border border-white/20">For Sale</span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">Indiranagar Green Villa</h3>
<p className="text-lg font-semibold text-slate-900">₹6.2 Cr</p>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Indiranagar, Bangalore
                        </p>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                4 BHK
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                4 Bath
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                3,200 sq.ft
                            </div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4 aspect-[4/3]">
<img alt="Property" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-slate-900 border border-white/20">Rent</span>
</div>
<button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">DLF Camellias</h3>
<p className="text-lg font-semibold text-slate-900">₹4.5 L<span className="text-sm font-normal text-slate-500">/mo</span></p>
</div>
<p className="text-sm text-slate-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Golf Course Rd, Gurgaon
                        </p>
<div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100">
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                3 BHK
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                3 Bath
                            </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
<iconify-icon icon="solar:ruler-angular-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                2,100 sq.ft
                            </div>
</div>
</div>
</div>
</div>
<div className="mt-12 flex justify-center md:hidden">
<button className="w-full bg-white border border-slate-200 text-slate-900 py-3 rounded-xl text-sm font-medium hover:bg-slate-50 transition">
                    View all properties
                </button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-slate-900">2.5k+</span>
<span className="text-sm text-slate-500">Properties Sold</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-slate-900">12+</span>
<span className="text-sm text-slate-500">Cities Covered</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-slate-900">150+</span>
<span className="text-sm text-slate-500">Verified Builders</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-medium tracking-tight text-slate-900">98%</span>
<span className="text-sm text-slate-500">Customer Satisfaction</span>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Streamlining your real estate journey</h2>
<p className="text-slate-500">We provide end-to-end services to make buying and selling properties in India seamless.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Buy a Home</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Find your dream home from our verified listings with 100% transparency.</p>
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors" href="#">
                        Start Search <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Rent a Home</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Explore thousands of rental properties in top neighborhoods across India.</p>
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors" href="#">
                        Find Rental <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>

<div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Sell Property</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">List your property and get the best market value with our expert agents.</p>
<a className="text-sm font-medium text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors" href="#">
                        List Now <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="bg-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative z-10">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Get the latest market insights</h2>
<p className="text-slate-300 mb-8 font-light">Join 50,000+ investors and homeowners getting weekly updates on Indian real estate trends.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm backdrop-blur-sm" placeholder="email@domain.com" type="email"/>
<button className="bg-white text-slate-900 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-slate-100 transition shadow-lg" type="button">Subscribe</button>
</form>
<p className="text-[10px] text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-xs font-bold tracking-tighter text-slate-900 uppercase">FLAT FINDER INDIA</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6 font-light">
                        India's most trusted platform for buying, selling, and renting premium properties.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition" href="#"><iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Platform</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">List Property</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Market Trends</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Home Loans</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">NRI Services</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Legal Help</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Locations</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Mumbai</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Bangalore</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Delhi NCR</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Hyderabad</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Flat Finder India Pvt Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
