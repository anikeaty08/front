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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-stone-900/0 hover:bg-stone-900/80 hover:backdrop-blur-md group">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="flex items-center gap-12">

<a className="relative z-10 block" href="#">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 flex items-center justify-center">
<span className="text-white font-playfair serif text-xl tracking-wide">Toby's Resort</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-stone-300">
<a className="hover:text-white transition-colors" href="#rooms">Rooms</a>
<a className="hover:text-white transition-colors" href="#discover">Discover Jamaica</a>
<a className="hover:text-white transition-colors" href="#dining">Dining</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:flex items-center gap-2 text-xs tracking-wide text-white hover:text-stone-300 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>+1 (876) 952-6636</span>
</button>
<button className="bg-white text-stone-900 px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-stone-200 transition-colors font-medium">
                    Book Now
                </button>
</div>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0">

<img alt="Toby's Resort Pool" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-[20s] hover:scale-100" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
</div>

<div className="relative z-10 h-full max-w-7xl mx-auto px-6 pt-32 pb-12 flex flex-col justify-between">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">

<div className="lg:col-span-8 flex flex-col justify-center h-full">
<div className="relative">
<span className="block text-stone-300 text-xs tracking-[0.3em] uppercase mb-6 pl-1 animate-[fadeIn_1s_ease-out]">Montego Bay, Jamaica</span>
<h1 className="text-[5rem] md:text-[7rem] lg:text-[8.5rem] leading-[0.85] text-stone-100 tracking-tighter mix-blend-overlay">
<span className="block font-medium">JAMAICAN</span>
<span className="block serif ml-12 md:ml-24 text-white opacity-90 font-medium">ESCAPE</span>
</h1>
</div>
</div>

<div className="hidden lg:flex lg:col-span-4 flex-col justify-end h-full pb-32 items-end text-right">
<div className="glass-panel p-6 rounded-2xl max-w-xs">
<div className="flex items-center justify-end gap-3 mb-4 text-stone-300 border-b border-white/10 pb-4">
<iconify-icon icon="solar:sun-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">29°C</span>
<span className="text-xs uppercase tracking-wider text-stone-500">Sunny</span>
</div>
<p className="text-stone-400 text-sm font-light leading-relaxed">
                            A family owned and operated sanctuary. Immerse yourself in an atmosphere of relaxation, freedom, and entertainment.
                        </p>
</div>
</div>
</div>

<div className="w-full flex justify-center pb-8">
<div className="glass-panel p-1.5 rounded-full flex flex-col md:flex-row items-center gap-1 shadow-2xl shadow-black/20 w-full max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">

<div className="relative group px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer flex-1 w-full md:w-auto border-b md:border-b-0 border-white/5 md:border-r">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">
<iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon> Check-In
                        </label>
<div className="text-sm text-stone-100 font-medium whitespace-nowrap">Select Date</div>
</div>

<div className="relative group px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer flex-1 w-full md:w-auto border-b md:border-b-0 border-white/5 md:border-r">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">
<iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon> Check-Out
                        </label>
<div className="text-sm text-stone-100 font-medium whitespace-nowrap">Select Date</div>
</div>

<div className="relative group px-6 py-3 rounded-full hover:bg-white/5 transition-colors cursor-pointer flex-1 w-full md:w-auto">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-stone-400 mb-0.5">
<iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon> Guests
                        </label>
<div className="text-sm text-stone-100 font-medium whitespace-nowrap">2 Adults</div>
</div>

<button className="w-full md:w-auto bg-stone-100 text-stone-900 rounded-full pl-6 pr-6 py-4 md:py-3 flex items-center justify-center gap-2 hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="text-xs tracking-widest uppercase font-semibold">Search</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 animate-bounce">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Explore</span>
<div className="h-12 w-[1px] bg-gradient-to-b from-stone-500 to-transparent"></div>
</div>
</header>

<section className="bg-white pt-24 pb-32 overflow-hidden" id="discover">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-stone-900 animate-pulse"></div>
<span className="text-stone-500 text-xs tracking-widest uppercase">The Experience</span>
</div>
<h2 className="text-5xl md:text-6xl text-stone-900 tracking-tighter leading-[0.9] font-medium">
                        Discover <span className="serif text-stone-400">Jamaica</span>
</h2>
</div>
<div className="flex items-center gap-4">
<p className="text-stone-500 text-xs max-w-xs text-right hidden md:block leading-relaxed">
                        From the famous Doctor's Cave Beach to adventurous Chukka tours, experience the best of Montego Bay.
                    </p>
<a className="group flex items-center justify-center w-12 h-12 rounded-full border border-stone-200 hover:bg-stone-900 hover:border-stone-900 transition-all duration-300" href="#">
<iconify-icon className="text-stone-900 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 transform duration-300" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[600px]">

<div className="lg:col-span-1 relative group rounded-2xl overflow-hidden cursor-pointer h-[500px] lg:h-full">
<img alt="Doctor's Cave Beach" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=1700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

<div className="absolute top-6 left-6 glass-badge px-3 py-1.5 rounded-full flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:water-drops-linear" width="12"></iconify-icon>
<span className="text-[10px] font-medium tracking-widest uppercase text-white">Nearby Attraction</span>
</div>

<div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-3xl text-white mb-2 leading-tight font-medium">Doctor's Cave <span className="serif">Beach</span></h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-stone-300 text-sm font-light leading-relaxed mb-6 pt-2 border-t border-white/20">
                                Crystal clear turquoise waters and white sands, located just moments from the resort.
                            </p>
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white border-b border-white pb-0.5 hover:opacity-70 transition-opacity">
                                View Location <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="lg:col-span-2 grid grid-rows-2 gap-4 h-[500px] lg:h-full">

<div className="relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Chukka Tours" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/50 transition-colors"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-center items-start">
<span className="text-[10px] tracking-[0.2em] uppercase text-white/80 border border-white/20 px-2 py-1 mb-4 rounded backdrop-blur-md">Adventure</span>
<h3 className="text-3xl md:text-4xl text-white tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-500 font-medium">Chukka <span className="serif">Expeditions</span></h3>
<p className="text-stone-200 text-sm font-light max-w-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                Experience the thrill of Jamaica with world-class tours, from ziplining to river tubing.
                            </p>
</div>

<div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative group rounded-2xl overflow-hidden bg-stone-100 cursor-pointer">
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="text-5xl text-stone-200 serif group-hover:text-stone-300 transition-colors">03</span>
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:tag-price-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-xl text-stone-900 font-medium mb-1">Special Offers</h4>
<p className="text-xs text-stone-500 leading-relaxed mb-4">Unlock exclusive rates for direct bookings.</p>
<span className="text-[10px] uppercase tracking-wider text-stone-900 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Check Rates <iconify-icon icon="solar:alt-arrow-right-linear" width="10"></iconify-icon>
</span>
</div>
</div>
<div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl from-stone-200 to-transparent rounded-tl-full opacity-50"></div>
</div>

<div className="relative group rounded-2xl overflow-hidden cursor-pointer">
<img alt="Spa Services" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="glass-badge p-3 rounded-xl flex items-center justify-between group-hover:bg-white group-hover:text-stone-900 transition-colors duration-300">
<span className="text-xs font-medium text-white group-hover:text-stone-900">Spa &amp; Wellness</span>
<iconify-icon className="text-white group-hover:text-stone-900" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-4 overflow-hidden py-2 border-t border-stone-100">
<div className="flex gap-8 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
<span className="w-1 h-1 rounded-full bg-stone-300"></span> Family Owned &amp; Operated Since 1972
                    </span>
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
<span className="w-1 h-1 rounded-full bg-stone-300"></span> Located on the "Hip Strip"
                    </span>
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
<span className="w-1 h-1 rounded-full bg-stone-300"></span> Authentic Jamaican Hospitality
                    </span>
<span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 flex items-center gap-4">
<span className="w-1 h-1 rounded-full bg-stone-300"></span> Free Wi-Fi Throughout the Property
                    </span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="rooms">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-stone-500 text-xs tracking-widest uppercase block mb-3">Accommodations</span>
<h2 className="text-4xl md:text-5xl text-stone-900 tracking-tight mb-6 font-medium">Tropical <span className="serif text-stone-500">Serenity</span></h2>
<p className="text-stone-500 text-sm font-light leading-relaxed">Cozy hotel rooms designed for comfort. A perfect location to immerse into an atmosphere of relaxation and freedom.</p>
</div>

<div className="space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
<img alt="Standard Room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:pl-10">
<div className="flex items-center gap-4 mb-4">
<span className="text-stone-900 text-2xl serif">01</span>
<div className="h-[1px] w-12 bg-stone-300"></div>
</div>
<h3 className="text-3xl text-stone-900 mb-4 font-medium">Standard Room</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
                            Our standard rooms offer a cozy retreat with all the essentials. Enjoy a comfortable king or twin bed configuration and views of our lush gardens.
                        </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:wi-fi-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Free Wifi</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:snowflake-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Air Conditioned</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:tv-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Cable TV</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Private Bath</span>
</div>
</div>
<button className="text-xs tracking-widest uppercase text-stone-900 border border-stone-200 px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors">
                            View Details
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="lg:order-2 relative aspect-[4/3] overflow-hidden rounded-lg">
<img alt="Deluxe Suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:order-1 lg:pr-10">
<div className="flex items-center gap-4 mb-4">
<span className="text-stone-900 text-2xl serif">02</span>
<div className="h-[1px] w-12 bg-stone-300"></div>
</div>
<h3 className="text-3xl text-stone-900 mb-4 font-medium">Pool View Deluxe</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
                            Upgrade your stay with direct views of our sparkling pools. These spacious rooms feature a private balcony, perfect for enjoying the Jamaican breeze.
                        </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:balcony-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Private Balcony</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Up to 4 Guests</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:safe-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">In-Room Safe</span>
</div>
<div className="flex items-center gap-3 text-stone-600">
<iconify-icon icon="solar:fridge-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs tracking-wide uppercase">Mini Fridge</span>
</div>
</div>
<button className="text-xs tracking-widest uppercase text-stone-900 border border-stone-200 px-6 py-3 hover:bg-stone-900 hover:text-white transition-colors">
                            View Details
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-stone-900" id="dining">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center justify-center mb-16">
<span className="text-stone-400 text-xs tracking-widest uppercase mb-3">Gastronomy</span>
<h2 className="text-4xl text-center tracking-tight mb-4 font-medium">Authentic Flavors</h2>
<div className="w-12 h-[1px] bg-stone-200"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[3/4] mb-6 relative rounded-lg">
<img alt="Local Cuisine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="text-center">
<h3 className="text-xl font-medium serif tracking-tight mb-1 group-hover:text-amber-700 transition-colors">Toby's Restaurant</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Local &amp; International</p>
</div>
</div>

<div className="group cursor-pointer mt-0 md:-mt-12">
<div className="overflow-hidden aspect-[3/4] mb-6 relative rounded-lg">
<img alt="Cocktails" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="text-xl font-medium serif tracking-tight mb-1 group-hover:text-amber-700 transition-colors">The Pool Bar</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Tropical Cocktails</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden aspect-[3/4] mb-6 relative rounded-lg">
<img alt="Dining Experience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544025162-d76690b67f11?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="text-xl font-medium serif tracking-tight mb-1 group-hover:text-amber-700 transition-colors">Private Dining</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Special Occasions</p>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#">
                    Explore Menus
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-100 relative overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-stone-700 mb-8 mx-auto" icon="solar:quote-up-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-5xl serif leading-snug tracking-tight mb-8 font-medium">
                "It's not just a place to sleep while you are on vacation - it's the perfect location to immerse into an atmosphere of relaxation."
            </h2>
<div className="flex flex-col items-center">
<div className="w-12 h-[1px] bg-stone-700 mb-4"></div>
<span className="text-sm font-medium tracking-wide">Family Owned &amp; Operated</span>
<span className="text-xs text-stone-500 mt-1 uppercase tracking-widest">Since 1972</span>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-3xl text-stone-900 tracking-tight font-medium">Visual Journey</h2>
<div className="flex gap-2">
<button className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96 md:h-[500px]">
<div className="col-span-2 row-span-2 relative overflow-hidden group rounded-lg">
<img alt="Resort Pool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
</div>
<div className="col-span-1 row-span-1 relative overflow-hidden group rounded-lg">
<img alt="Drinks" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512101176959-c5538927597a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-2 relative overflow-hidden group rounded-lg">
<img alt="Hallway" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 row-span-1 relative overflow-hidden group rounded-lg">
<img alt="Balcony View" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544980995-1f63056e438b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-t border-stone-200">
<div className="max-w-xl mx-auto px-6 text-center">
<span className="text-xs text-stone-500 uppercase tracking-widest mb-3 block">Stay Connected</span>
<h2 className="text-3xl serif mb-6 text-stone-900 font-medium">Unlock Exclusive Privileges</h2>
<p className="text-sm text-stone-500 font-light mb-8">Subscribe to receive seasonal offers and news from Toby's Resort directly to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-0 sm:border-b border-stone-300 pb-1">
<input className="bg-transparent py-3 px-2 w-full outline-none text-stone-900 placeholder-stone-400 text-sm border-b sm:border-0 border-stone-300 mb-4 sm:mb-0" placeholder="Email Address" type="email"/>
<button className="whitespace-nowrap py-3 px-6 text-xs uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 text-sm font-light" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="mb-6">
<span className="text-white font-playfair serif text-xl tracking-wide">Toby's Resort</span>
</div>
<p className="leading-relaxed mb-6">
                        1 Kent Avenue, Po Box 467<br/>
                        Montego Bay, Jamaica
                    </p>
<div className="flex flex-col gap-1">
<a className="hover:text-stone-200 transition-colors" href="tel:18769526636">+1 (876) 952-6636</a>
<a className="hover:text-stone-200 transition-colors" href="tel:13052903744">+1 (305) 290-3744</a>
</div>
</div>

<div>
<h4 className="text-stone-100 uppercase text-[10px] tracking-widest mb-6">Resort</h4>
<ul className="space-y-3">
<li><a className="hover:text-stone-200 transition-colors" href="#">Rooms &amp; Suites</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Dining</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Special Offers</a></li>
</ul>
</div>

<div>
<h4 className="text-stone-100 uppercase text-[10px] tracking-widest mb-6">Discover Jamaica</h4>
<ul className="space-y-3">
<li><a className="hover:text-stone-200 transition-colors" href="#">Doctors Cave Beach</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Chukka Tours</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Catamaran Tour</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">News</a></li>
</ul>
</div>

<div>
<h4 className="text-stone-100 uppercase text-[10px] tracking-widest mb-6">Follow Us</h4>
<div className="flex gap-4 mb-8">
<a className="hover:text-stone-200 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-stone-200 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2026 Toby's Resort. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-200 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-200 transition-colors" href="#">User Agreement</a>
<a className="hover:text-stone-200 transition-colors" href="#">Terms and Conditions</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
