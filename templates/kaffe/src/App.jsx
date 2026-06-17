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
      

<div className="sm:p-4 lg:p-6 max-w-[1600px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2">

<header className="relative w-full h-[85vh] md:h-[95vh] min-h-[600px] md:min-h-[700px] rounded-3xl md:rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl">

<img alt="Dark Aesthetic Coffee Shop" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-[20s] hover:scale-105 ease-linear" src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?w=3840&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

<nav className="relative z-20 flex items-center justify-between px-6 pt-6 md:px-10">

<div className="flex gap-2 items-center">
<span className="text-lg font-medium text-white tracking-tight">kaffe.co</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/10 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
<a className="hover:bg-white/10 hover:text-white transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#about">Our Story</a>
<a className="hover:bg-white/10 hover:text-white transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5" href="#features">Features</a>
<a className="text-sm text-white/90 px-5 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300" href="#menu">Menu</a>
<a className="text-sm text-white/90 px-5 py-2 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300" href="#contact">Visit</a>
</div>

<button className="md:hidden flex items-center justify-center p-2 text-white bg-white/10 backdrop-blur-md rounded-full border border-white/10 active:scale-95 transition-transform">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-3">
<a className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all" href="#">
<iconify-icon className="" height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all" href="#">
<iconify-icon height="20" icon="solar:cart-large-linear" width="20"></iconify-icon>
</a>
<a className="group flex items-center gap-3 py-1.5 pl-5 pr-1.5 bg-white rounded-full transition-transform hover:scale-105" href="#contact">
<span className="text-sm font-medium text-stone-900">Order Online</span>
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-900 group-hover:bg-stone-800 transition-colors">
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</a>
</div>
</nav>

<div className="absolute bottom-0 left-0 z-10 w-full p-6 pb-10 md:p-10 flex flex-col md:flex-row items-end justify-between gap-8">

<div className="max-w-2xl fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-white uppercase rounded-full bg-white/20 border border-white/10 backdrop-blur-md">Artisan Coffee Roasters</span>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">Experience the Art of Precision Brewing.</h1>
<p className="mb-8 text-base sm:text-lg font-light leading-relaxed text-white/80 max-w-lg">We source the top 1% of Arabica beans, roasted in small batches for distinct flavor profiles. Welcome to your daily ritual.</p>
<a className="group inline-flex items-center gap-4 py-2 pl-6 pr-2 bg-white rounded-full text-stone-900 hover:shadow-lg hover:shadow-white/20 transition-all duration-300" href="#menu">
<span className="text-base font-medium">Explore the Menu</span>
<span className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-900 group-hover:bg-stone-700 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
</a>
</div>

<div className="w-full md:w-auto fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 min-w-[240px]">
<div className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-white/20">
<iconify-icon height="20" icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<div className="">
<span className="block text-xl md:text-2xl font-medium text-white">25+</span>
<span className="text-xs tracking-wide uppercase text-white/70">Single Origins</span>
</div>
</div>
</div>
</div>
</header>

<section className="px-2 sm:px-6 mt-16 md:mt-24" id="about">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="mb-6 text-3xl sm:text-4xl font-medium tracking-tight text-stone-900">More Than Just Caffeine. It's About Connection.</h2>
<p className="mb-8 text-base sm:text-lg font-light leading-relaxed text-stone-500">The modern coffee shop is a sanctuary. It’s where ideas are born, friendships are forged, and the day truly begins. At Kaffe.co, we believe the environment is just as important as the extraction.</p>
<p className="mb-8 text-base leading-relaxed text-stone-500">We partner directly with farmers in Ethiopia, Colombia, and Brazil to ensure ethical sourcing and sustainable practices. Our roasting profile is designed to highlight the natural notes of the bean.</p>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Barista" className="w-10 h-10 border-2 border-white rounded-full object-cover" src="https://images.unsplash.com/photo-1520998116484-6eeb2f72b5b9?w=320&amp;q=80"/>
<img alt="Roaster" className="w-10 h-10 border-2 border-white rounded-full object-cover" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=320&amp;q=80" style={{}}/>
<img alt="Customer" className="w-10 h-10 border-2 border-white rounded-full object-cover" src="https://images.unsplash.com/photo-1524159730786-4e74a1b78d7d?w=320&amp;q=80" style={{}}/>
</div>
<span className="text-sm font-medium text-stone-900">Join 2,000+ Daily Regulars</span>
</div>
</div>

<div className="relative lg:col-span-7">
<div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden rounded-3xl md:rounded-[2rem] group shadow-xl">
<img alt="Pour over coffee" className="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=2560&amp;q=80" style={{}}/>
<div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6">
<div className="inline-flex items-center gap-3 px-5 py-3 border bg-white/90 backdrop-blur-md rounded-xl border-white/20">
<iconify-icon className="text-stone-900" height="20" icon="solar:medal-ribbon-star-linear" width="20"></iconify-icon>
<p className="text-sm font-medium text-stone-900">Award-winning V60 Pour Over</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-16 md:mt-24 overflow-hidden text-white bg-stone-900 rounded-3xl md:rounded-[2rem]" id="features">
<div className="absolute inset-0 opacity-30">
<img alt="Coffee Texture" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1521168277767-fe733d1f7689?w=3840&amp;q=80" style={{}}/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/90 to-transparent"></div>
<div className="relative z-10 grid grid-cols-1 gap-12 p-8 sm:p-16 lg:p-24 lg:grid-cols-2">
<div>
<span className="block mb-2 text-sm font-medium tracking-wide uppercase text-stone-400">The Difference</span>
<h2 className="mb-6 text-3xl sm:text-4xl font-medium tracking-tight">Why Kaffe.co?</h2>
<p className="mb-8 text-base sm:text-lg font-light leading-relaxed text-stone-300">We've engineered the perfect coffee experience. From the water filtration system to the ergonomics of our seating.</p>
<div className="mb-8 space-y-6">
<div className="flex items-start gap-4">
<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-full border-white/20 bg-white/5 text-emerald-400">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="mb-1 font-medium text-white">Sustainable Sourcing</h4>
<span className="text-sm font-light text-stone-400">100% Fair Trade certified beans. We pay above market rates to support farming communities.</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-full border-white/20 bg-white/5 text-amber-400">
<iconify-icon height="24" icon="solar:wifi-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="mb-1 font-medium text-white">Gigabit Workspace</h4>
<span className="text-sm font-light text-stone-400">Dedicated quiet zones with high-speed fiber internet and ample power outlets.</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-full border-white/20 bg-white/5 text-blue-400">
<iconify-icon height="24" icon="solar:water-drop-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="mb-1 font-medium text-white">Triple-Filtered Water</h4>
<span className="text-sm font-light text-stone-400">Coffee is 98% water. Our reverse osmosis system ensures consistent extraction and pure taste.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-2 sm:px-6 mt-16 md:mt-24" id="menu">
<div className="flex flex-col items-start justify-between mb-12 md:flex-row md:items-end gap-6">
<div className="max-w-xl">
<h2 className="mb-4 text-3xl sm:text-4xl font-medium tracking-tight text-stone-900">Curated Blends &amp; Pastries.</h2>
<p className="font-light text-stone-500">Rotate through our seasonal selection of single-origin beans and freshly baked artisanal goods.</p>
</div>
<a className="flex items-center gap-1 font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#">
                    Full Menu <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="relative p-2 transition-all duration-300 bg-white border shadow-sm group hover:shadow-xl rounded-3xl border-stone-100">
<div className="relative mb-4 overflow-hidden h-64 rounded-2xl">
<img alt="Latte Art" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full shadow-sm bg-white/90 backdrop-blur">Bestseller</div>
</div>
<div className="px-4 pb-6">
<div className="flex items-start justify-between mb-2">
<h3 className="text-xl font-semibold text-stone-900">Signature Flat White</h3>
<span className="font-medium text-stone-900">$4.50</span>
</div>
<p className="mb-4 text-sm text-stone-500">Double ristretto shot with micro-foam milk. Smooth, velvety, and perfectly balanced.</p>
<button className="flex items-center justify-center w-full gap-2 py-3 font-medium transition-colors border rounded-xl border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white">
                            Add to Order <iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative p-2 transition-all duration-300 bg-white border shadow-sm group hover:shadow-xl rounded-3xl border-stone-100">
<div className="relative mb-4 overflow-hidden h-64 rounded-2xl">
<img alt="Cold Brew" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1432107294469-414527cb5c65?w=1600&amp;q=80" style={{}}/>
<div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full shadow-sm bg-white/90 backdrop-blur">Seasonal</div>
</div>
<div className="px-4 pb-6">
<div className="flex items-start justify-between mb-2">
<h3 className="text-xl font-semibold text-stone-900">Kyoto Cold Brew</h3>
<span className="font-medium text-stone-900">$5.50</span>
</div>
<p className="mb-4 text-sm text-stone-500">Slow-drip extraction over 12 hours. Zero acidity, rich chocolate notes, served over ice.</p>
<button className="flex items-center justify-center w-full gap-2 py-3 font-medium transition-colors border rounded-xl border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white">
                            Add to Order <iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="relative p-2 transition-all duration-300 bg-white border shadow-sm group hover:shadow-xl rounded-3xl border-stone-100">
<div className="relative mb-4 overflow-hidden h-64 rounded-2xl">
<img alt="Croissant" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1623334044303-241021148842?w=1600&amp;q=80"/>
<div className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full shadow-sm bg-white/90 backdrop-blur">Fresh Baked</div>
</div>
<div className="px-4 pb-6">
<div className="flex items-start justify-between mb-2">
<h3 className="text-xl font-semibold text-stone-900">Almond Croissant</h3>
<span className="font-medium text-stone-900">$3.80</span>
</div>
<p className="mb-4 text-sm text-stone-500">Buttery layers filled with frangipane cream and topped with toasted almond flakes.</p>
<button className="flex items-center justify-center w-full gap-2 py-3 font-medium transition-colors border rounded-xl border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white">
                            Add to Order <iconify-icon height="18" icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="mt-16 md:mt-24">
<div className="relative flex flex-col items-center p-8 overflow-hidden text-center sm:p-12 lg:p-20 bg-stone-100 rounded-3xl md:rounded-[2rem]">

<div className="absolute top-0 left-0 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 rounded-full sm:w-64 sm:h-64 bg-amber-200 mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="absolute bottom-0 right-0 w-40 h-40 transform translate-x-1/2 translate-y-1/2 rounded-full sm:w-64 sm:h-64 bg-stone-300 mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="relative z-10 max-w-2xl">
<span className="block mb-4 text-xs font-medium tracking-wider uppercase text-stone-500">Loyalty Program</span>
<h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-5xl text-stone-900">Join the Coffee Club</h2>
<p className="mb-8 text-base sm:text-lg font-light text-stone-600">Get your first coffee free, access to secret menu items, and 10% off all bean purchases.</p>
<form className="flex flex-col w-full max-w-md gap-3 mx-auto sm:flex-row">
<input className="flex-1 px-6 py-3 bg-white border rounded-full border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900" placeholder="Enter your email" type="email"/>
<button className="px-8 py-3 font-medium text-white transition-all shadow-lg rounded-full bg-stone-900 hover:bg-stone-800 hover:scale-105 shadow-stone-900/10 whitespace-nowrap" type="submit">
                            Join Free
                        </button>
</form>
</div>
</div>
</section>

<section className="grid grid-cols-1 gap-8 px-2 mt-16 sm:px-6 md:mt-24 lg:grid-cols-2 lg:gap-16 items-center" id="team">

<div className="relative w-full overflow-hidden shadow-2xl bg-black aspect-video rounded-3xl group cursor-pointer">
<img alt="Latte Art Video" className="object-cover w-full h-full transition-opacity opacity-80 group-hover:opacity-60" src="https://images.unsplash.com/photo-1599579089328-852ca6423ef0?w=1600&amp;q=80"/>
<div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0">
<div className="flex items-center justify-center w-16 h-16 transition-transform border rounded-full sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md border-white/30 group-hover:scale-110">
<div className="flex items-center justify-center w-12 h-12 pl-1 bg-white rounded-full sm:w-14 sm:h-14 text-stone-900">
<iconify-icon height="24" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="">
<h2 className="mb-6 text-3xl sm:text-4xl font-medium tracking-tight text-stone-900">Master Baristas at Work</h2>
<div className="mb-8 prose prose-stone">
<p className="text-base sm:text-lg font-light leading-relaxed text-stone-500">Coffee making is a craft that requires patience, precision, and passion. Our team of certified baristas undergoes rigorous training to master the variables of extraction.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="flex-shrink-0 mt-1 text-stone-900" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-stone-700">Q-Grader Certified Head Roasters</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="flex-shrink-0 mt-1 text-stone-900" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-stone-700">Weekly cupping sessions open to public</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="flex-shrink-0 mt-1 text-stone-900" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-stone-700">Latte Art champions on staff</span>
</div>
</div>
<div className="pt-8 mt-8 border-t border-stone-200">
<p className="text-lg sm:text-xl font-medium italic text-stone-900">"We don't serve coffee. We serve a wake-up call to your senses."</p>
</div>
</div>
</section>

<section className="mt-16 mb-12 md:mt-24" id="contact">
<div className="flex flex-col gap-12 p-8 shadow-xl bg-white rounded-3xl md:rounded-[2rem] sm:p-12 lg:p-16 border border-stone-100 lg:flex-row lg:gap-24">
<div className="lg:w-1/2">
<h2 className="mb-6 text-3xl sm:text-5xl font-medium tracking-tight text-stone-900">Visit Us</h2>
<p className="max-w-md mb-10 text-base sm:text-lg font-light text-stone-500">Located in the heart of the design district. Come for the coffee, stay for the vibe.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-stone-50 group-hover:bg-stone-900 group-hover:text-white text-stone-900">
<iconify-icon height="22" icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<div>
<span className="block text-sm text-stone-400">Address</span>
<span className="text-lg font-medium text-stone-900">124 Artisan Ave, Design District</span>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-stone-50 group-hover:bg-stone-900 group-hover:text-white text-stone-900">
<iconify-icon height="22" icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<div>
<span className="block text-sm text-stone-400">Hours</span>
<span className="text-lg font-medium text-stone-900">Mon-Sun: 7:00 AM - 8:00 PM</span>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="flex items-center justify-center w-12 h-12 transition-colors rounded-full bg-stone-50 group-hover:bg-stone-900 group-hover:text-white text-stone-900">
<iconify-icon height="22" icon="solar:phone-linear" width="22"></iconify-icon>
</div>
<div>
<span className="block text-sm text-stone-400">Contact</span>
<a className="text-lg font-medium text-stone-900 hover:underline" href="tel:+15550000000">+1 (555) 000-0000</a>
</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8 lg:w-1/2 bg-stone-50 rounded-3xl">
<form action="#" className="space-y-5">
<h3 className="mb-2 text-xl font-medium text-stone-900">Book a Table / Event</h3>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div className="space-y-1">
<label className="text-xs font-semibold tracking-wide uppercase text-stone-500">Name</label>
<input className="w-full px-4 py-3 transition-shadow bg-white border-0 rounded-xl text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold tracking-wide uppercase text-stone-500">Guests</label>
<select className="w-full px-4 py-3 transition-shadow bg-white border-0 rounded-xl text-stone-900 focus:ring-2 focus:ring-stone-900 focus:outline-none">
<option>1 Person</option>
<option>2 People</option>
<option>3-5 People</option>
<option>Large Group</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold tracking-wide uppercase text-stone-500">Date &amp; Time</label>
<input className="w-full px-4 py-3 transition-shadow bg-white border-0 rounded-xl text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" type="datetime-local"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold tracking-wide uppercase text-stone-500">Special Requests</label>
<textarea className="w-full h-24 px-4 py-3 transition-shadow bg-white border-0 rounded-xl text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" placeholder="Allergies, seating preference..."></textarea>
</div>
<button className="flex items-center justify-center w-full gap-2 py-4 mt-4 font-medium text-white transition-colors bg-stone-900 rounded-xl hover:bg-stone-800 group" type="button">
                            Reserve Table
                            <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="flex flex-col items-center justify-between gap-6 px-6 pt-8 pb-8 border-t md:flex-row border-stone-200">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-stone-900">kaffe.co</span>
</div>
<div className="flex flex-wrap justify-center gap-4 text-sm font-medium sm:gap-8 text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">Our Story</a>
<a className="hover:text-stone-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-stone-900 transition-colors" href="#team">Team</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Locations</a>
</div>
<div className="text-xs text-stone-400">© 2024 Kaffe.co Inc.</div>
</footer>
</div>

    </>
  );
}
