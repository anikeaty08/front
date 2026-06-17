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
colors: {
sky: { 50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 900: '#0c4a6e' }
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.perspective-1000': { perspective: '1000px' },
'.transform-style-preserve-3d': { transformStyle: 'preserve-3d' },
});
}
]
};

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
      

<main className="glass-panel overflow-hidden flex flex-col xl:max-w-[1300px] z-10 xl:border-white/50 border-none xl:border xl:rounded-[2.5rem] md:pt-10 md:pr-10 md:pb-10 md:pl-10 xl:pt-12 xl:pr-12 xl:pb-12 xl:pl-12 xl:shadow-2xl min-h-screen w-full rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none animate-fade-scale">

<div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
<div className="h-full w-[1px] bg-zinc-950/5"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden md:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden lg:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden xl:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5"></div>
</div>

<header className="flex md:mb-12 md:gap-0 z-10 mb-12 relative gap-x-6 gap-y-6 items-center justify-between animate-fade-up">

<a className="flex items-center gap-2 text-zinc-900 group cursor-pointer" href="#">
<div className="flex text-white bg-gradient-to-b from-zinc-900 to-zinc-700 w-8 h-8 rounded-lg items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12">
<iconify-icon height="18" icon="solar:plain-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">Wander<span className="text-zinc-400 font-normal ml-0.5">Lust</span></span>
</a>

<nav className="hidden md:flex uppercase text-[10px] font-semibold text-zinc-500 tracking-widest bg-white/50 border-white/60 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm backdrop-blur-sm gap-x-8 items-center transition-all hover:shadow-md hover:bg-white/80">
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#destinations">Destinations</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors duration-300 relative group" href="#reviews">Reviews</a>
</nav>

<a className="flex items-center gap-2 group hover:bg-zinc-50 text-xs font-medium text-zinc-700 tracking-wide bg-white border border-zinc-200 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 active:translate-y-0" href="#book">
<iconify-icon height="16" icon="solar:user-circle-linear" width="16"></iconify-icon>
<span className="uppercase tracking-wide text-[10px] font-semibold">Sign In</span>
</a>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10 mb-20">

<div className="lg:col-span-7 flex flex-col justify-center scroll-mt-32 pt-8">
<div className="animate-fade-up delay-100 inline-flex bg-sky-50/50 w-max rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-1.5 shadow-sm backdrop-blur-sm items-center border border-sky-100/50">
<span className="bg-sky-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mr-2">NEW</span>
<span className="text-xs font-medium text-sky-900 tracking-wide">Summer packages available</span>
</div>
<h1 className="animate-fade-up delay-200 leading-[0.95] lg:text-[4.5rem] text-5xl font-semibold text-zinc-900 tracking-tighter mb-6">
                Plan Your Next
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200 font-light block">Trip with Ease</span>
</h1>
<p className="animate-fade-up delay-300 text-lg text-zinc-500 font-normal max-w-lg mb-8 leading-relaxed tracking-tight">
                Book flights, hotels, and unique experiences in one place.
            </p>
<div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-3">
<a className="hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-900/20 transition-all duration-300 flex group text-sm font-medium text-white bg-zinc-900 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-xl items-center justify-center min-w-[160px]" href="#search">
<span className="tracking-tight mr-2">Start Booking</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-5 min-h-[400px] relative group perspective-1000 animate-fade-scale delay-300">
<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/10 transition-all duration-700 ease-out border border-white/60 bg-white group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]">
<img alt="Travel Landscape" className="transition-transform duration-[3s] ease-in-out group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-lg animate-float delay-500">
<div className="flex justify-between items-center mb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center">
<iconify-icon icon="solar:ticket-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900">Flight Confirmed</p>
<p className="text-[10px] text-zinc-500">YYZ → HND</p>
</div>
</div>
<span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">Active</span>
</div>
<div className="flex justify-between items-end border-t border-zinc-100 pt-3">
<div>
<p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Departure</p>
<p className="text-xs font-medium text-zinc-900">10:45 AM</p>
</div>
<div className="text-right">
<p className="text-[10px] text-zinc-400 uppercase tracking-wider mb-0.5">Gate</p>
<p className="text-xs font-medium text-zinc-900">A12</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-y border-zinc-200 py-12 mb-20 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-50/50"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-auto text-center md:text-left">
<div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Your Trusted Travel Companion</h3>
<p className="text-sm text-zinc-500 max-w-lg leading-relaxed">
                    We are a modern travel platform dedicated to helping users plan trips quickly, safely, and effortlessly. From solo adventures to family vacations, we curate the best options for you.
                </p>
</div>
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">+2k</div>
</div>
</div>
</div>

<div className="flex flex-col gap-10 z-10 w-full relative mb-24 scroll-mt-24" id="destinations">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="md:text-3xl text-2xl font-medium text-zinc-900 tracking-tighter mb-3">Trending Destinations</h2>
<p className="text-sm text-zinc-500 font-normal">Explore our most popular categories for your next getaway.</p>
</div>
<a className="group flex items-center gap-2 text-xs font-medium text-zinc-900 pb-1 hover:text-zinc-600 transition-colors" href="#">
                View all places
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Paris" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1449824913929-2b3a640fd856?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium mb-1">Popular Cities</h3>
<p className="text-white/70 text-xs mb-4">Paris, Tokyo, New York</p>
<span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white font-medium border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                        Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Beach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium mb-1">Beach Getaways</h3>
<p className="text-white/70 text-xs mb-4">Maldives, Bali, Hawaii</p>
<span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white font-medium border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                        Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group relative h-[360px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=2021&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-white text-xl font-medium mb-1">Nature Trips</h3>
<p className="text-white/70 text-xs mb-4">Swiss Alps, Patagonia, Banff</p>
<span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white font-medium border border-white/20 group-hover:bg-white group-hover:text-black transition-colors">
                        Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>

<div className="mb-24 scroll-mt-24" id="services">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tighter mb-8 text-center">Travel Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-100 flex items-center justify-center mb-6 shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:plane-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Flight Booking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Search thousands of airlines to find the best routes and prices for your journey.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-100 flex items-center justify-center mb-6 shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Hotel Booking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Luxury resorts to cozy hostels. We partner with top chains worldwide.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-zinc-50 border border-zinc-200 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-100 flex items-center justify-center mb-6 shadow-sm text-zinc-900 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Tour Packages</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Curated itineraries and guided tours to help you experience the culture fully.</p>
</div>
</div>
</div>

<div className="mb-24">
<div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
<div className="text-center md:text-left">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-4">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Best Prices</h4>
<p className="text-zinc-400 text-sm">We compare millions of options to guarantee the lowest rates.</p>
</div>
<div className="text-center md:text-left">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Trusted Partners</h4>
<p className="text-zinc-400 text-sm">Working only with verified airlines, hotels, and agencies.</p>
</div>
<div className="text-center md:text-left">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-4">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-semibold text-lg mb-2">Easy Booking</h4>
<p className="text-zinc-400 text-sm">Seamless interface designed to get you booked in minutes.</p>
</div>
</div>
</div>
</div>

<div className="mb-24 text-center">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tighter mb-12">How It Works</h2>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">

<div className="flex flex-col items-center gap-4 relative z-10 bg-white/50 backdrop-blur-sm p-4 rounded-2xl w-full md:w-1/4">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-md">
<iconify-icon icon="solar:magnifer-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-zinc-900">Search</h4>
<p className="text-xs text-zinc-500">Find your dream destination.</p>
</div>

<iconify-icon className="hidden md:block text-zinc-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="block md:hidden text-zinc-300" icon="solar:arrow-down-linear" width="24"></iconify-icon>

<div className="flex flex-col items-center gap-4 relative z-10 bg-white/50 backdrop-blur-sm p-4 rounded-2xl w-full md:w-1/4">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-md">
<iconify-icon icon="solar:calendar-add-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-zinc-900">Book</h4>
<p className="text-xs text-zinc-500">Secure your spot instantly.</p>
</div>

<iconify-icon className="hidden md:block text-zinc-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
<iconify-icon className="block md:hidden text-zinc-300" icon="solar:arrow-down-linear" width="24"></iconify-icon>

<div className="flex flex-col items-center gap-4 relative z-10 bg-white/50 backdrop-blur-sm p-4 rounded-2xl w-full md:w-1/4">
<div className="w-16 h-16 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 shadow-md">
<iconify-icon icon="solar:global-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-zinc-900">Travel</h4>
<p className="text-xs text-zinc-500">Enjoy your journey.</p>
</div>
</div>
</div>

<div className="mb-24 scroll-mt-24" id="reviews">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tighter mb-8 px-1">Traveler Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-zinc-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"Booking our honeymoon through Wanderlust was the best decision. Everything was seamless, from the flight to the private villa."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 text-xs font-bold flex items-center justify-center text-zinc-600">SJ</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Sarah Jenkins</p>
<p className="text-xs text-zinc-400">Traveled to Bali</p>
</div>
</div>
</div>

<div className="bg-white border border-zinc-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"I appreciate the transparency in pricing. No hidden fees, and the support team helped me change my flight last minute."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 text-xs font-bold flex items-center justify-center text-zinc-600">MR</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Mark Roberts</p>
<p className="text-xs text-zinc-400">Traveled to London</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-24">
<div className="bg-gradient-to-r from-zinc-100 to-zinc-50 rounded-[2rem] p-12 text-center border border-zinc-200">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-4">Ready to explore the world?</h2>
<p className="text-zinc-500 mb-8 max-w-lg mx-auto">Join thousands of travelers who are discovering new places every day.</p>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Book Your Trip
            </button>
</div>
</div>

<footer className="border-t border-zinc-200 pt-12 pb-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="flex items-center gap-2 text-zinc-900 mb-4" href="#">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:plain-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-bold uppercase tracking-wide">WanderLust</span>
</a>
<p className="text-xs text-zinc-500 leading-relaxed">
                    Making travel accessible and enjoyable for everyone.
                </p>
</div>
<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Help</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Support Center</a></li>
<li><a className="hover:text-zinc-900" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-zinc-900" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-zinc-900 text-sm mb-4">Contact</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li>support@wanderlust.com</li>
<li>+1 (555) 123-4567</li>
<li>88 Travel Way, New York, NY</li>
</ul>
</div>
</div>
<div className="text-center text-[10px] text-zinc-400">
            © 2024 Wanderlust Inc. All rights reserved.
        </div>
</footer>
</main>

    </>
  );
}
