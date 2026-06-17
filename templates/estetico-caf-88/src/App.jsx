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



        lucide.createIcons();
    
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
      

<div className="max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6">

<header className="relative w-full h-[95vh] min-h-[700px] rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl">

<img alt="Cafe Interior and Food" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc54d896-37cc-467a-b91c-8aaee392ee33_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

<nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">

<div className="flex items-center gap-2">
<div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/10">
<svg className="lucide lucide-coffee w-6 h-6 text-white" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<span className="text-white text-lg font-medium tracking-tight">Estetico.</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-2">
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full" href="#about">About</a>
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full" href="#menu">Menu</a>
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full" href="#gallery">Gallery</a>
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full" href="#reservation">Reservations</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20" href="#location">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</a>
<a className="group flex items-center gap-3 bg-white pl-5 pr-1.5 py-1.5 rounded-full" href="#reservation">
<span className="text-sm font-medium text-stone-900">Book a Table</span>
<span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800">
<svg className="lucide lucide-calendar w-4 h-4 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
</a>
</div>
</nav>

<div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-10 flex flex-col items-center justify-center h-full pt-32 pb-12">
<div className="text-center max-w-3xl">
<span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                        Est. 2024
                    </span>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium tracking-tighter leading-[1.1] mb-6">
                        Fresh Food,Warm Moments.
                    </h1>
<p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed mb-10 max-w-xl mx-auto">
                        A place to enjoy great food and good company. Experience culinary craftsmanship in a serene atmosphere.
                    </p>
<a className="group inline-flex items-center gap-4 bg-white text-stone-900 pl-8 pr-2 py-2 rounded-full hover:shadow-xl hover:shadow-white/20" href="#menu">
<span className="text-base font-medium">View Menu</span>
<span className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700">
<svg className="lucide lucide-arrow-down w-5 h-5 text-white" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</span>
</a>
</div>
</div>
</header>

<section className="mt-24 px-4 sm:px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
<div className="lg:col-span-6">
<span className="text-stone-500 font-medium uppercase text-xs tracking-wider mb-4 block">Our Story</span>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-6">
                        Crafting Daily Delights
                    </h2>
<p className="text-stone-500 text-lg leading-relaxed mb-6 font-light">
                        We believe that the best meals are simple, fresh, and shared. Our kitchen prepares handcrafted dishes using locally sourced ingredients, ensuring every bite is a celebration of flavor.
                    </p>
<p className="text-stone-500 text-base leading-relaxed mb-8">
                        From our morning artisanal coffee blends to our dinner specialties, we are dedicated to providing a warm, welcoming space where memories are made over exceptional food.
                    </p>
<div className="flex gap-8 border-t border-stone-200 pt-8">
<div>
<span className="block text-2xl font-semibold text-stone-900">100%</span>
<span className="text-sm text-stone-500">Organic Coffee</span>
</div>
<div>
<span className="block text-2xl font-semibold text-stone-900">Daily</span>
<span className="text-sm text-stone-500">Fresh Bakery</span>
</div>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
<img alt="Coffee Pouring" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6586e163-951e-453e-abaa-5e04803575da_1600w.webp"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-white">
<svg className="lucide lucide-chef-hat w-5 h-5" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<div>
<span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">Head Chef</span>
<p className="text-stone-900 font-medium text-sm">Signature Creations</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6" id="menu">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-4">Menu Highlights</h2>
<p className="text-stone-500 font-light">Explore our most loved categories, curated for every time of day.</p>
</div>
<button className="hidden md:flex items-center gap-2 text-stone-900 font-medium hover:opacity-70 mt-4 md:mt-0">
                    Download Full Menu <svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Signature Dish" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&amp;w=2510&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Bestseller</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Signature Dishes</h3>
<p className="text-stone-500 text-sm mb-4">From Avocado Toast to Truffle Pasta, enjoy our chef's specials.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-sm font-medium text-stone-400">Main Course</span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-900 -rotate-45" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Coffee" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2671&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Coffee &amp; Beverages</h3>
<p className="text-stone-500 text-sm mb-4">Single-origin beans, handcrafted matcha, and refreshing mocktails.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-sm font-medium text-stone-400">Drinks</span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-900 -rotate-45" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl cursor-pointer">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Dessert" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe49f96-1c36-4800-8d69-bcddec308154_1600w.webp" style={{}}/>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Desserts</h3>
<p className="text-stone-500 text-sm mb-4">Sweet endings made in-house, from cheesecakes to artisanal pastries.</p>
<div className="flex items-center justify-between mt-4">
<span className="text-sm font-medium text-stone-400">Bakery</span>
<svg className="lucide lucide-arrow-right w-5 h-5 text-stone-900 -rotate-45" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 bg-stone-900 text-white rounded-[2rem] overflow-hidden relative py-20 px-6 sm:px-12">
<div className="absolute inset-0 opacity-20">
<img alt="Cafe Texture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbd5f95a-c6f8-4fdc-b784-5bc8291b4621_3840w.jpg" style={{}}/>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-6">Why Visit Us</h2>
<p className="text-stone-300 text-lg font-light">We don't just serve food; we curate an experience.</p>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/15">
<div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-leaf w-7 h-7" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Fresh Ingredients</h3>
<p className="text-stone-400 font-light text-sm">Farm-to-table produce delivered daily to ensure the highest quality taste.</p>
</div>

<div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/15">
<div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-armchair w-7 h-7" data-lucide="armchair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Cozy Atmosphere</h3>
<p className="text-stone-400 font-light text-sm">Minimalist design, warm lighting, and comfortable seating for relaxation.</p>
</div>

<div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/15">
<div className="w-16 h-16 rounded-full bg-white text-stone-900 flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-smile w-7 h-7" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Friendly Service</h3>
<p className="text-stone-400 font-light text-sm">Our staff treats you like family, ensuring a memorable dining experience.</p>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6" id="gallery">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-12 text-center">A Visual Taste</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
<div className="col-span-2 md:col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Cocktails" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0acbf0ca-a573-48bb-8153-e1d57e4604ce_1600w.webp"/>
</div>
<div className="col-span-1 rounded-3xl overflow-hidden relative group">
<img alt="Coffee Art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41a7086c-63e9-428d-975e-179c8863bfd5_800w.webp"/>
</div>
<div className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative group">
<img alt="Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_800w.jpg"/>
</div>
<div className="col-span-1 rounded-3xl overflow-hidden relative group">
<img alt="Breakfast" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f951c57b-e8fe-4421-8181-b1d3d87f210e_800w.webp"/>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6">
<div className="bg-stone-100 rounded-[2rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<svg className="lucide lucide-clock w-10 h-10 text-stone-900 mx-auto mb-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-8">Opening Hours</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
<div className="bg-white p-6 rounded-2xl shadow-sm">
<span className="block text-sm text-stone-500 font-medium uppercase tracking-wider mb-2">Mon - Fri</span>
<span className="text-2xl font-semibold text-stone-900">07:00 - 22:00</span>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
<span className="block text-sm text-stone-500 font-medium uppercase tracking-wider mb-2">Sat - Sun</span>
<span className="text-2xl font-semibold text-stone-900">08:00 - 23:00</span>
</div>
</div>
<p className="mt-8 text-stone-500 font-light">Happy Hour daily from 16:00 to 18:00</p>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6" id="location">
<div className="rounded-[2rem] overflow-hidden relative h-[400px] group">

<img alt="Map" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce305672-6da8-4c81-80b5-c3853afd35d1_3840w.jpg"/>
<div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-[90%]">
<div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-stone-900 mb-2">Find Us</h3>
<p className="text-stone-500 mb-6 font-light">123 Culinary Avenue, Downtown DistrictNew York, NY 10012</p>
<a className="text-sm font-semibold text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600" href="#">Get Directions</a>
</div>
</div>
</section>

<section className="mt-24 mb-12" id="reservation">
<div className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl border border-stone-100 flex flex-col lg:flex-row gap-12 lg:gap-24">
<div className="lg:w-1/2">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">Book a Table</h2>
<p className="text-stone-500 text-lg font-light mb-10 max-w-md">Reserve your spot in advance for the best experience. We look forward to hosting you.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<span className="block text-sm text-stone-400">Phone</span>
<a className="text-lg font-medium text-stone-900 hover:underline" href="tel:+1234567890">+1 (234) 567-890</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<span className="block text-sm text-stone-400">Email</span>
<a className="text-lg font-medium text-stone-900 hover:underline" href="mailto:hello@estetico.cafe">hello@estetico.cafe</a>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-stone-50 rounded-3xl p-8">
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Date</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 focus:ring-2 focus:ring-stone-900 focus:outline-none" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Guests</label>
<select className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 focus:ring-2 focus:ring-stone-900 focus:outline-none">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5+ People</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-4 hover:bg-stone-800 flex items-center justify-center gap-2 group" type="button">
                            Confirm Reservation
                            <svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
</form>
</div>
</div>
</section>

<footer className="py-10 px-6 flex flex-col md:flex-row items-start justify-between border-t border-stone-200 gap-8">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="bg-stone-900 p-1.5 rounded border border-stone-800">
<svg className="lucide lucide-coffee w-5 h-5 text-white" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<span className="text-stone-900 font-semibold tracking-tight">Estetico.</span>
</div>
<p className="text-sm text-stone-500 max-w-xs">Fresh food, warm moments, and unforgettable coffee. Come visit us today.</p>
</div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-16 text-sm">
<div>
<h4 className="font-semibold text-stone-900 mb-3">Explore</h4>
<ul className="space-y-2 text-stone-500">
<li><a className="hover:text-stone-900" href="#about">About Us</a></li>
<li><a className="hover:text-stone-900" href="#menu">Our Menu</a></li>
<li><a className="hover:text-stone-900" href="#gallery">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-3">Visit</h4>
<ul className="space-y-2 text-stone-500">
<li><a className="hover:text-stone-900" href="#location">Location</a></li>
<li><a className="hover:text-stone-900" href="#reservation">Reservations</a></li>
<li><a className="hover:text-stone-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 mb-3">Follow</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200" href="#"><svg className="lucide lucide-instagram w-4 h-4 text-stone-900" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200" href="#"><svg className="lucide lucide-facebook w-4 h-4 text-stone-900" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
</footer>
<div className="text-center pb-6 text-xs text-stone-400">
            © 2024 Estetico Café. All rights reserved.
        </div>
</div>



    </>
  );
}
