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
      

<nav className="fixed w-full z-50 top-0 border-b border-gray-100/50 bg-white/80 backdrop-blur-xl">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="text-xl tracking-tighter font-bold text-black">
                    CarRental
                </div>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-500">
<a className="hover:text-black transition-colors" href="#fleet">Fleet</a>
<a className="hover:text-black transition-colors" href="#features">Features</a>
<a className="hover:text-black transition-colors" href="#services">Services</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-500 hover:text-black transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all active:scale-95 shadow-lg shadow-gray-200" href="#">
                    Sign up
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20">
<div className="lg:w-1/2 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 text-xs font-medium text-gray-900 mb-8 border border-gray-200">
<span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
                        Premium Fleet Available
                    </div>
<h1 className="text-6xl lg:text-8xl tracking-tighter font-semibold text-black leading-[1] mb-8">
                        The art of <br/>
<span className="text-gray-300">automotion.</span>
</h1>
<p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10">
                        Elevate your journey with our curated selection of high-performance vehicles. Designed for those who appreciate the details.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all text-sm md:text-base shadow-xl shadow-gray-200" href="#booking">
                            Start Booking
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white text-black border border-gray-200 px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all text-sm md:text-base" href="#fleet">
                            View Inventory
                        </a>
</div>
</div>

<div className="lg:w-1/2 w-full mt-10 lg:mt-0">
<div className="relative w-full aspect-[4/3] lg:aspect-square group rounded-3xl overflow-hidden shadow-2xl shadow-gray-200">
<img alt="Premium Sports Car" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1603584173870-7b2314086efb?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg hidden md:block">
<div className="flex items-center gap-4">
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Featured</p>
<p className="text-sm font-bold text-black">Mercedes-AMG GT</p>
</div>
<div className="h-8 w-px bg-gray-200"></div>
<div>
<p className="text-xs text-gray-500">0-60 mph</p>
<p className="text-sm font-bold text-black">3.1s</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 px-6 -mt-12 lg:-mt-24 mb-32" id="booking">
<div className="max-w-[1200px] mx-auto bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200 border border-gray-100">
<form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-end">

<div className="lg:col-span-4 space-y-2.5">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide ml-1">Pick-up Location</label>
<div className="relative group">
<iconify-icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl focus:ring-0 focus:border-black focus:bg-white block pl-14 p-4 transition-all outline-none" placeholder="City, Airport, or Address" required="" type="text"/>
</div>
</div>

<div className="lg:col-span-3 space-y-2.5">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide ml-1">Pick-up Date</label>
<div className="relative group">
<iconify-icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="22"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl focus:ring-0 focus:border-black focus:bg-white block pl-14 p-4 transition-all outline-none" required="" type="date"/>
</div>
</div>

<div className="lg:col-span-3 space-y-2.5">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide ml-1">Return Date</label>
<div className="relative group">
<iconify-icon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="22"></iconify-icon>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-base rounded-2xl focus:ring-0 focus:border-black focus:bg-white block pl-14 p-4 transition-all outline-none" required="" type="date"/>
</div>
</div>

<div className="lg:col-span-2">
<button className="w-full h-[58px] bg-black hover:bg-gray-900 text-white font-semibold rounded-2xl transition-all flex items-center justify-center gap-2 text-base shadow-lg hover:shadow-xl active:scale-95" type="button">
                        Search
                    </button>
</div>
</form>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32" id="features">
<div className="mb-16">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-black mb-6">Experience the difference</h2>
<div className="w-full h-px bg-gray-200"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-200 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-black mb-3 tracking-tight">Premium Insurance</h3>
<p className="text-sm text-gray-500 leading-relaxed">Full coverage for peace of mind. Drive without worry with our comprehensive protection plans.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-200 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-black mb-3 tracking-tight">24/7 Concierge</h3>
<p className="text-sm text-gray-500 leading-relaxed">Round-the-clock support for any roadside assistance or booking modifications you need.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-200 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-black mb-3 tracking-tight">Unlimited Mileage</h3>
<p className="text-sm text-gray-500 leading-relaxed">No boundaries on your adventure. Enjoy unlimited miles on selected premium vehicles.</p>
</div>

<div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-200 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-black mb-3 tracking-tight">Doorstep Delivery</h3>
<p className="text-sm text-gray-500 leading-relaxed">We bring the car to you. Select your location and we'll handle the logistics.</p>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-black">Our Fleet</h2>
<p className="text-lg text-gray-500 mt-4 max-w-xl">Meticulously maintained vehicles for every occasion. Choose from our wide range of luxury and sport models.</p>
</div>
<div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="px-6 py-3 rounded-xl bg-black text-white text-sm font-medium whitespace-nowrap shadow-lg shadow-black/20">All Models</button>
<button className="px-6 py-3 rounded-xl bg-white text-gray-600 hover:bg-gray-50 hover:text-black text-sm font-medium border border-gray-200 whitespace-nowrap transition-colors">Sport</button>
<button className="px-6 py-3 rounded-xl bg-white text-gray-600 hover:bg-gray-50 hover:text-black text-sm font-medium border border-gray-200 whitespace-nowrap transition-colors">SUV</button>
<button className="px-6 py-3 rounded-xl bg-white text-gray-600 hover:bg-gray-50 hover:text-black text-sm font-medium border border-gray-200 whitespace-nowrap transition-colors">Electric</button>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-6 mb-32" id="fleet">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group cursor-pointer">
<div className="w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 relative mb-6">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-white/50 shadow-sm">
                        PREMIUM
                    </div>
</div>
<div className="flex justify-between items-end">
<div className="space-y-2">
<h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">Porsche 911 Carrera</h3>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 2 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:transmission-circle-linear"></iconify-icon> Auto</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:speedometer-linear"></iconify-icon> 3.4s</span>
</div>
</div>
<div className="text-right">
<div className="flex items-baseline gap-1 justify-end">
<span className="text-2xl font-bold text-black">$350</span>
<span className="text-sm text-gray-400">/day</span>
</div>
<button className="mt-2 text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">View Details</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 relative mb-6">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-white/50 shadow-sm">
                        ELECTRIC
                    </div>
</div>
<div className="flex justify-between items-end">
<div className="space-y-2">
<h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">Tesla Model S Plaid</h3>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 5 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:transmission-circle-linear"></iconify-icon> Auto</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bolt-linear"></iconify-icon> Electric</span>
</div>
</div>
<div className="text-right">
<div className="flex items-baseline gap-1 justify-end">
<span className="text-2xl font-bold text-black">$280</span>
<span className="text-sm text-gray-400">/day</span>
</div>
<button className="mt-2 text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">View Details</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 relative mb-6">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1606618729906-8b2611d29321?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-white/50 shadow-sm">
                        SUV
                    </div>
</div>
<div className="flex justify-between items-end">
<div className="space-y-2">
<h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">Range Rover Autobiography</h3>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 5 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:transmission-circle-linear"></iconify-icon> Auto</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:suitcase-linear"></iconify-icon> Large</span>
</div>
</div>
<div className="text-right">
<div className="flex items-baseline gap-1 justify-end">
<span className="text-2xl font-bold text-black">$400</span>
<span className="text-sm text-gray-400">/day</span>
</div>
<button className="mt-2 text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">View Details</button>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[16/10] overflow-hidden rounded-3xl bg-gray-100 relative mb-6">
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold border border-white/50 shadow-sm">
                        LUXURY
                    </div>
</div>
<div className="flex justify-between items-end">
<div className="space-y-2">
<h3 className="text-2xl font-bold text-gray-900 tracking-tight group-hover:text-gray-600 transition-colors">Mercedes-Benz S-Class</h3>
<div className="flex items-center gap-4 text-sm text-gray-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 5 Seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:transmission-circle-linear"></iconify-icon> Auto</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:star-linear"></iconify-icon> Executive</span>
</div>
</div>
<div className="text-right">
<div className="flex items-baseline gap-1 justify-end">
<span className="text-2xl font-bold text-black">$320</span>
<span className="text-sm text-gray-400">/day</span>
</div>
<button className="mt-2 text-sm font-medium underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all">View Details</button>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all text-base hover:border-black" href="#">
                Explore Full Inventory
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 bg-gray-50 border-y border-gray-200" id="reviews">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl font-semibold tracking-tighter text-black mb-4">Client Experiences</h2>
<p className="text-lg text-gray-500">Rated 4.9/5 by over 10,000 satisfied customers worldwide.</p>
</div>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
<div className="flex text-black mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-gray-600 leading-relaxed mb-8">"The quality of the Porsche 911 I rented was immaculate. It felt brand new. The team ensured a seamless handover process."</p>
<div className="flex items-center gap-4 border-t border-gray-100 pt-6">
<div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">

<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
</div>
<div>
<div className="text-base font-semibold text-black">James M.</div>
<div className="text-xs text-gray-400">London, UK</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
<div className="flex text-black mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-gray-600 leading-relaxed mb-8">"I needed a reliable SUV for a family trip. The Range Rover was perfect, and the 24/7 support gave us great peace of mind."</p>
<div className="flex items-center gap-4 border-t border-gray-100 pt-6">
<div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
</div>
<div>
<div className="text-base font-semibold text-black">Sarah L.</div>
<div className="text-xs text-gray-400">New York, USA</div>
</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
<div className="flex text-black mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-base text-gray-600 leading-relaxed mb-8">"Exceptional service. The car was delivered to my hotel door within 2 hours of booking. Truly premium experience."</p>
<div className="flex items-center gap-4 border-t border-gray-100 pt-6">
<div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
</div>
<div>
<div className="text-base font-semibold text-black">David R.</div>
<div className="text-xs text-gray-400">Toronto, CA</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6">
<div className="bg-black rounded-[3rem] p-8 md:p-16 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-800 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="text-white space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white border border-white/10">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                            Secure Transactions
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">Seamless Payment. <br/><span className="text-gray-500">Total Security.</span></h2>
<p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            We use state-of-the-art encryption to ensure your data is always protected. Book your dream car with confidence.
                        </p>
<div className="flex gap-4 pt-4">
<div className="h-12 w-20 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<div className="h-12 w-20 bg-white/10 rounded-lg flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md ml-auto w-full">
<div className="flex justify-between items-center mb-8">
<h3 className="text-lg font-bold text-black">Payment Method</h3>
<iconify-icon className="text-gray-400" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="space-y-4">
<label className="flex items-center gap-4 p-4 border-2 border-black rounded-xl cursor-pointer bg-gray-50/50">
<div className="w-5 h-5 rounded-full border-[5px] border-black"></div>
<div className="flex-1">
<span className="block text-sm font-bold text-gray-900">Credit Card</span>
</div>
<iconify-icon icon="solar:card-recieved-linear" width="24"></iconify-icon>
</label>
<label className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-gray-300 transition-colors">
<div className="w-5 h-5 rounded-full border border-gray-300"></div>
<div className="flex-1">
<span className="block text-sm font-medium text-gray-900">Apple Pay</span>
</div>
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</label>
</div>
<button className="w-full bg-black text-white font-medium py-4 rounded-xl mt-8 hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
                            Confirm Payment
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-24 pb-12">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
<div className="lg:col-span-2 space-y-6">
<a className="text-2xl tracking-tighter font-bold text-black" href="#">
                        CarRental
                    </a>
<p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                        Redefining the rental experience with a curated fleet of premium vehicles and exceptional service standards.
                    </p>
</div>
<div>
<h4 className="font-semibold text-black mb-6 text-sm">Company</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Press</a></li>
<li><a className="hover:text-black transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-black mb-6 text-sm">Support</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-black transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-black transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-black mb-6 text-sm">Social</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-black transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-black transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2023 CarRental Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-gray-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
