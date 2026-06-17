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
      

<header className="bg-[#003580] pb-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex items-center justify-between py-4">
<a className="text-white text-2xl font-bold tracking-tight hover:opacity-90 transition-opacity" href="#">
                    CHOLO.
                </a>
<div className="flex items-center gap-2 sm:gap-4">
<button className="text-white hover:bg-white/10 transition-colors p-2 rounded hidden sm:block font-medium text-sm">ZAR</button>
<button className="text-white hover:bg-white/10 transition-colors p-2 rounded hidden sm:block">
<iconify-icon icon="solar:question-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="text-white font-medium text-sm border border-transparent hover:bg-white/10 rounded py-1.5 px-3 transition-colors hidden md:block">
                        List your property
                    </button>
<div className="flex items-center gap-2">
<button className="bg-white text-[#003580] font-medium text-sm rounded py-1.5 px-4 hover:bg-blue-50 transition-colors shadow-sm">
                            Register
                        </button>
<button className="text-white hover:bg-white/10 font-medium text-sm rounded py-1.5 px-4 transition-colors">
                            Sign in
                        </button>
</div>
</div>
</div>

<nav className="flex items-center gap-2 overflow-x-auto hide-scroll pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 mt-2">
<button className="flex items-center gap-2 text-white bg-white/10 rounded-full py-2.5 px-4 border border-white font-medium transition-all whitespace-nowrap active:scale-95">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Stays</span>
</button>
<button className="flex items-center gap-2 text-white hover:bg-white/10 rounded-full py-2.5 px-4 transition-all whitespace-nowrap active:scale-95 group">
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:plane-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Flights</span>
</button>
<button className="flex items-center gap-2 text-white hover:bg-white/10 rounded-full py-2.5 px-4 transition-all whitespace-nowrap active:scale-95">
<iconify-icon icon="solar:car-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Car rentals</span>
</button>
<button className="flex items-center gap-2 text-white hover:bg-white/10 rounded-full py-2.5 px-4 transition-all whitespace-nowrap active:scale-95">
<iconify-icon icon="solar:ferris-wheel-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Attractions</span>
</button>
<button className="flex items-center gap-2 text-white hover:bg-white/10 rounded-full py-2.5 px-4 transition-all whitespace-nowrap active:scale-95">
<iconify-icon icon="solar:taxi-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">Airport taxis</span>
</button>
</nav>

<div className="mt-12 mb-6 text-white">
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Find your next stay</h1>
<p className="text-lg sm:text-xl text-white font-light">Search low prices on hotels, homes and much more...</p>
</div>
</div>
</header>

<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-20">

<div className="bg-[#febb02] p-1 rounded shadow-lg grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_1fr_auto] gap-1">

<div className="relative group bg-white rounded overflow-hidden">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<input className="w-full h-12 lg:h-14 pl-11 pr-4 bg-white border-2 border-transparent focus:border-[#006ce4] outline-none text-sm placeholder:text-gray-600 text-gray-900 font-medium transition-colors" placeholder="Where are you going?" type="text"/>
</div>

<div className="relative group bg-white rounded overflow-hidden">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-full h-12 lg:h-14 pl-11 pr-4 text-left bg-white border-2 border-transparent focus:border-[#006ce4] outline-none text-sm font-medium text-gray-600 transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    Check-in — Check-out
                </button>
</div>

<div className="relative group bg-white rounded overflow-hidden">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-full h-12 lg:h-14 pl-11 pr-4 text-left bg-white border-2 border-transparent focus:border-[#006ce4] outline-none text-sm font-medium text-gray-700 transition-colors flex items-center justify-between">
<span className="truncate">2 adults · 0 children · 1 room</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>

<button className="bg-[#006ce4] hover:bg-[#0057b8] text-white font-medium text-lg rounded px-8 h-12 lg:h-14 transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]">
                Search
            </button>
</div>

<div className="mt-4 flex items-center gap-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-[#006ce4] checked:border-[#006ce4] transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-light text-gray-700 group-hover:text-[#006ce4] transition-colors">I'm looking for flights</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group ml-4">
<div className="relative flex items-center">
<input className="peer appearance-none w-5 h-5 border border-gray-300 rounded bg-white checked:bg-[#006ce4] checked:border-[#006ce4] transition-colors cursor-pointer" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-light text-gray-700 group-hover:text-[#006ce4] transition-colors">I'm travelling for work</span>
</label>
</div>

<section className="mt-12">
<h2 className="text-xl font-bold tracking-tight text-gray-900 mb-4">Offers</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
<div className="flex-1 pr-4 z-10 relative">
<h3 className="font-bold text-gray-900 mb-1">Take your longest holiday yet</h3>
<p className="text-sm text-gray-600 font-light mb-4">Browse properties offering long-term stays, many at reduced monthly rates.</p>
<button className="bg-[#006ce4] text-white text-sm font-medium py-2 px-4 rounded hover:bg-[#0057b8] transition-colors active:scale-95">Find a stay</button>
</div>
<div className="w-28 h-28 relative z-10">
<img className="w-full h-full object-cover rounded shadow-sm" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center justify-between group cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-0"></div>
<div className="absolute right-0 top-0 bottom-0 w-48 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;q=80&amp;w=400')] bg-cover bg-center opacity-30"></div>
<div className="flex-1 pr-4 relative z-10">
<h3 className="font-bold text-gray-900 mb-1">Fly away to your dream holiday</h3>
<p className="text-sm text-gray-600 font-light mb-4">Get inspired, compare and book flights with more flexibility</p>
<button className="bg-[#006ce4] text-white text-sm font-medium py-2 px-4 rounded hover:bg-[#0057b8] transition-colors active:scale-95">Search for flights</button>
</div>
</div>
</div>
</section>

<section className="mt-12">
<h2 className="text-xl font-bold tracking-tight text-gray-900 mb-4">Browse by property type</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-gray-200 relative">
<img alt="Hotels" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-bold text-sm text-gray-900">Hotels</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-gray-200 relative">
<img alt="Apartments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-bold text-sm text-gray-900">Apartments</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-gray-200 relative">
<img alt="Resorts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="font-bold text-sm text-gray-900">Resorts</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-2 bg-gray-200 relative">
<img alt="Villas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="font-bold text-sm text-gray-900">Villas</h3>
</div>
</div>
</section>

<section className="mt-12">
<h2 className="text-xl font-bold tracking-tight text-gray-900 mb-1">Trending destinations</h2>
<p className="text-sm text-gray-600 mb-4 font-light">Most popular choices for travellers from your region</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1">
</div>
<div className="absolute bottom-4 left-4 text-white drop-shadow-md">
<h3 className="font-bold text-xl tracking-tight flex items-center gap-2">
                            Paris <img className="rounded-sm shadow-sm" src="https://flagcdn.com/fr.svg" width="20"/>
</h3>
</div>
</div>

<div className="relative rounded-lg overflow-hidden h-64 group cursor-pointer shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white drop-shadow-md">
<h3 className="font-bold text-xl tracking-tight flex items-center gap-2">
                            London <img className="rounded-sm shadow-sm" src="https://flagcdn.com/gb.svg" width="20"/>
</h3>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">

<div className="relative rounded-lg overflow-hidden h-48 group cursor-pointer shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1520106212299-d99c443e4568?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white drop-shadow-md">
<h3 className="font-bold text-lg tracking-tight">Istanbul</h3>
</div>
</div>

<div className="relative rounded-lg overflow-hidden h-48 group cursor-pointer shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white drop-shadow-md">
<h3 className="font-bold text-lg tracking-tight">Venice</h3>
</div>
</div>

<div className="relative rounded-lg overflow-hidden h-48 group cursor-pointer shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white drop-shadow-md">
<h3 className="font-bold text-lg tracking-tight">Sydney</h3>
</div>
</div>
</div>
</section>

<section className="mt-12">
<h2 className="text-xl font-bold tracking-tight text-gray-900 mb-4">Homes guests love</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="font-bold text-sm text-gray-900 leading-tight mb-1 group-hover:text-[#006ce4] transition-colors">Aparthotel Stare Miasto</h3>
<p className="text-xs text-gray-500 font-light mb-2">Old Town, Poland</p>
<div className="flex items-center gap-2 mb-2">
<span className="bg-[#003580] text-white text-xs font-bold px-1.5 py-1 rounded-t rounded-br rounded-bl-none">8.9</span>
<span className="text-xs text-gray-700">Fabulous</span>
<span className="text-xs text-gray-400 font-light">· 432 reviews</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-sm font-bold text-gray-900">ZAR 1,200</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute top-2 left-2 bg-[#febb02] text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                            Genius
                        </div>
</div>
<h3 className="font-bold text-sm text-gray-900 leading-tight mb-1 group-hover:text-[#006ce4] transition-colors">7Seasons Apartments</h3>
<p className="text-xs text-gray-500 font-light mb-2">Terézváros, Hungary</p>
<div className="flex items-center gap-2 mb-2">
<span className="bg-[#003580] text-white text-xs font-bold px-1.5 py-1 rounded-t rounded-br rounded-bl-none">9.3</span>
<span className="text-xs text-gray-700">Superb</span>
<span className="text-xs text-gray-400 font-light">· 1,029 reviews</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-sm font-bold text-gray-900">ZAR 950</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
<div className="absolute top-2 left-2 bg-[#febb02] text-black text-[10px] font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
                            Genius
                        </div>
</div>
<h3 className="font-bold text-sm text-gray-900 leading-tight mb-1 group-hover:text-[#006ce4] transition-colors">Oriente Palace Apartments</h3>
<p className="text-xs text-gray-500 font-light mb-2">Madrid, Spain</p>
<div className="flex items-center gap-2 mb-2">
<span className="bg-[#003580] text-white text-xs font-bold px-1.5 py-1 rounded-t rounded-br rounded-bl-none">8.5</span>
<span className="text-xs text-gray-700">Very good</span>
<span className="text-xs text-gray-400 font-light">· 350 reviews</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-sm font-bold text-gray-900">ZAR 2,100</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-gray-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<h3 className="font-bold text-sm text-gray-900 leading-tight mb-1 group-hover:text-[#006ce4] transition-colors">Cheval Three Quays</h3>
<p className="text-xs text-gray-500 font-light mb-2">London, UK</p>
<div className="flex items-center gap-2 mb-2">
<span className="bg-[#003580] text-white text-xs font-bold px-1.5 py-1 rounded-t rounded-br rounded-bl-none">9.6</span>
<span className="text-xs text-gray-700">Exceptional</span>
<span className="text-xs text-gray-400 font-light">· 88 reviews</span>
</div>
<div className="flex items-baseline gap-1 mt-1">
<span className="text-sm font-bold text-gray-900">ZAR 4,300</span>
</div>
</div>
</div>
</section>

<section className="mt-16 bg-[#00224f] rounded p-0 text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
<div className="w-full bg-[#003580] p-10 rounded">
<h2 className="text-2xl font-bold tracking-tight mb-2">Save time, save money!</h2>
<p className="text-white/70 font-light mb-8">Sign up and we'll send the best deals to you</p>
<div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
<input className="flex-1 h-12 px-4 rounded text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#006ce4]" placeholder="Your email address" type="email"/>
<button className="bg-[#006ce4] hover:bg-[#0057b8] text-white font-medium h-12 px-8 rounded transition-colors shadow-sm whitespace-nowrap active:scale-95">Subscribe</button>
</div>
</div>
</section>
</main>

<footer className="bg-[#003580] mt-12 py-10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-center mb-8">
<button className="border border-white text-white px-4 py-2 rounded text-sm hover:bg-white/10 transition-colors">
                    List your property
                </button>
</div>
<div className="border-t border-white/20 pt-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
<div>
<ul className="space-y-2 text-xs text-white font-medium">
<li><a className="hover:text-[#febb02] transition-colors" href="#">Countries</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Regions</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Cities</a></li>
</ul>
</div>
<div>
<ul className="space-y-2 text-xs text-white font-medium">
<li><a className="hover:text-[#febb02] transition-colors" href="#">Homes</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Apartments</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Resorts</a></li>
</ul>
</div>
<div>
<ul className="space-y-2 text-xs text-white font-medium">
<li><a className="hover:text-[#febb02] transition-colors" href="#">Villas</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Hostels</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Guest houses</a></li>
</ul>
</div>
<div>
<ul className="space-y-2 text-xs text-white font-medium">
<li><a className="hover:text-[#febb02] transition-colors" href="#">Unique places to stay</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">All destinations</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Reviews</a></li>
</ul>
</div>
<div>
<ul className="space-y-2 text-xs text-white font-medium">
<li><a className="hover:text-[#febb02] transition-colors" href="#">Car hire</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Flight finder</a></li>
<li><a className="hover:text-[#febb02] transition-colors" href="#">Restaurant reservations</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col items-center justify-between pt-8 gap-4">
<a className="text-white text-lg font-bold tracking-tighter" href="#">CHOLO.</a>
<p className="text-[10px] text-white/60 font-light text-center">Copyright © 1996–2024 CHOLO. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="text-white/80 hover:text-white cursor-pointer" icon="solar:camera-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/80 hover:text-white cursor-pointer" icon="solar:smart-home-angle-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
