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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<header className="absolute top-0 left-0 right-0 z-50 border-b backdrop-blur-md border-white/10 bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl sm:text-3xl font-normal tracking-tight flex items-center gap-3 text-white" href="#">
<i className="w-6 h-6 text-neutral-500" data-lucide="flame" strokeWidth="1.5"></i>
                Laberinto de Humo
            </a>

<nav className="hidden md:flex items-center gap-10">
<a className="text-xl tracking-tight transition-colors duration-200 text-neutral-300 hover:text-white" href="#menu">Menu</a>
<a className="text-xl tracking-tight transition-colors duration-200 text-neutral-300 hover:text-white" href="#reviews">Reviews</a>
<a className="text-xl tracking-tight transition-colors duration-200 text-neutral-300 hover:text-white" href="#">Directions</a>
<a className="text-xl tracking-tight transition-colors duration-200 text-neutral-300 hover:text-white" href="#">Contact Us</a>
</nav>

<button className="md:hidden transition-colors text-neutral-300 hover:text-white">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Authentic Mexican Tacos" className="w-full h-full object-cover object-center transform scale-105" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-neutral-950 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 flex flex-col sm:mt-0 text-center w-full max-w-5xl mt-12 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 rounded-full border backdrop-blur-sm bg-white/5 border-white/10">
<div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
<span className="text-xl tracking-tight font-light text-neutral-200">Open 10:00 AM - 10:00 PM everyday</span>
</div>

<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-6 drop-shadow-sm leading-none text-white">
                    Laberinto <br className="hidden sm:block"/> de Humo
                </h1>
<p className="text-2xl sm:text-3xl md:text-4xl tracking-tight max-w-3xl mx-auto font-light mb-12 leading-relaxed text-neutral-300">
                    Authentic Mexican Flavors, <span className="font-normal text-white">Fresh Every Day.</span>
</p>

<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
<a className="w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex gap-2 text-xl tracking-tight font-normal rounded-full pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center hover:bg-neutral-200 text-neutral-950 bg-white" href="#menu">
                        View Menu
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="sm:w-auto transition-all duration-200 flex hover:bg-white/15 cursor-pointer text-xl font-normal text-white tracking-tight bg-white/10 w-full border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://www.google.com/maps/dir//Taqueria+Laberinto+de+Humo,+5885+Jarvis+Ave,+Newark,+CA+94560/@37.5191839,-122.0214784,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808fbf7abea41901:0x4a60c749c509b381!2m2!1d-122.0499782!2d37.5514303?entry=ttu&amp;g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D'" role="button">Get Directions</button>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce transition-colors cursor-pointer text-neutral-400 hover:text-white" href="#menu">
<i className="w-6 h-6" data-lucide="mouse" strokeWidth="1.5"></i>
</a>
</section>

<section className="sm:py-32 overflow-hidden bg-neutral-950 border-white/5 border-t pt-24 pb-24 relative" id="menu">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] blur-[120px] rounded-full pointer-events-none bg-neutral-100/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16 sm:mb-24">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-white">
                        Our Menu
                    </h2>
<p className="text-xl sm:text-2xl max-w-2xl mx-auto font-light tracking-tight text-neutral-400">
                        Handcrafted with traditional recipes and the freshest ingredients.
                    </p>
</div>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-8 gap-x-16 gap-y-16 items-center justify-between">

<div className="hidden lg:block w-64 shrink-0 relative">
<div className="grid grid-cols-2 gap-4 transform -rotate-6 hover:rotate-0 transition-transform duration-700">
<div className="flex shadow-neutral-500/5 text-neutral-500 bg-neutral-500/10 w-24 h-24 border-neutral-500/20 border rounded-2xl shadow-lg backdrop-blur-md items-center justify-center">
<i className="w-10 h-10" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<div className="flex shadow-blue-500/5 text-blue-500 bg-blue-500/10 w-24 h-24 border-blue-500/20 border rounded-2xl mt-10 shadow-lg backdrop-blur-md items-center justify-center">
<i className="w-10 h-10" data-lucide="moon" strokeWidth="1.5"></i>
</div>
<div className="flex shadow-cyan-500/5 text-cyan-500 bg-cyan-500/10 w-24 h-24 border-cyan-500/20 border rounded-2xl shadow-lg backdrop-blur-md items-center justify-center">
<i className="w-10 h-10" data-lucide="flower-2" strokeWidth="1.5"></i>
</div>
<div className="w-24 h-24 rounded-2xl border border-indigo-500/20 bg-indigo-500/10 flex items-center justify-center text-indigo-500 backdrop-blur-md mt-10 shadow-lg shadow-indigo-500/5">
<i className="w-10 h-10" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full max-w-2xl flex-grow bg-white/[0.02] border rounded-3xl p-8 sm:p-12 backdrop-blur-sm shadow-2xl relative border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent rounded-3xl pointer-events-none"></div>
<div className="flex flex-col gap-5 relative z-10">

<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Regular Tacos</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">12</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Super Tacos</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">16</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Taco Mexicali</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">15</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Burritos</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">18</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Protein Burritos</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">20</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Vegan Burritos</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">18</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Super Burrito</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">23</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Californian Burrito</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">22</span>
</div>

<div className="pt-10 pb-6 text-center">
<h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                                    Specialties
                                </h3>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Mulita Tijuana</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">20</span>
</div>
<div className="flex items-center justify-between group">
<span className="text-xl sm:text-2xl group-hover:text-white transition-colors tracking-tight font-normal text-neutral-300">Huarache Loco</span>
<div className="flex-grow mx-6 border-b border-dashed group-hover:border-white/30 transition-colors mt-2 border-white/10"></div>
<span className="text-xl sm:text-2xl font-normal text-neutral-400">16</span>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col gap-8 w-64 shrink-0 relative items-center">
<div className="w-56 h-56 rounded-full p-2 border shadow-2xl z-10 rotate-3 hover:rotate-0 transition-transform duration-700 bg-neutral-900 border-white/10">
<img alt="Loaded food" className="w-full h-full object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33b7dfbf-26d6-438e-b0c2-3f5f2f617277_800w.png?w=800&amp;q=80"/>
</div>
<div className="w-56 h-56 rounded-full p-2 border shadow-2xl z-0 -mt-16 -ml-16 -rotate-6 hover:rotate-0 transition-transform duration-700 bg-neutral-900 border-white/10">
<img alt="Taco" className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-32 bg-neutral-950 border-white/5 border-t pt-24 pb-24 relative" id="reviews">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-center mb-20 sm:mb-28 text-white">
                    What our customers have to say
                </h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-16 sm:gap-12">

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 group">
<div className="flex flex-col items-center gap-3 shrink-0">
<div className="flex gap-0.5 text-blue-500">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300 shadow-xl bg-neutral-800 border-white/10">
<i className="w-12 h-12 text-neutral-500" data-lucide="user" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-neutral-200">Brent poe</span>
</div>
<div className="backdrop-blur-md border rounded-2xl p-6 sm:p-8 w-full shadow-lg relative sm:mt-8 bg-white/5 border-white/10">
<div className="hidden sm:block absolute top-8 -left-3 w-6 h-6 border-l border-b transform rotate-45 z-0 bg-neutral-900 border-white/10"></div>
<p className="text-xl tracking-tight leading-relaxed relative z-10 font-normal text-neutral-300">
                                    "Not your normal street taco! One of my favorite taco spots in the area. Welcoming, and delicious."
                                </p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 group">
<div className="flex flex-col items-center gap-3 shrink-0">
<div className="flex gap-0.5 text-blue-500">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300 shadow-xl border-white/10 bg-indigo-900">
<img alt="DJ araq" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&amp;h=200&amp;fit=crop"/>
</div>
<span className="text-xl font-medium tracking-tight text-neutral-200">DJ araq</span>
</div>
<div className="backdrop-blur-md border rounded-2xl p-6 sm:p-8 w-full shadow-lg relative sm:mt-8 bg-white/5 border-white/10">
<div className="hidden sm:block absolute top-8 -left-3 w-6 h-6 border-l border-b transform rotate-45 z-0 bg-neutral-900 border-white/10"></div>
<p className="text-xl tracking-tight leading-relaxed relative z-10 font-normal text-neutral-300">
                                    "Excellent food and service. Al pastor, pollo, and shrimp tacos were incredible. Everything is handmade from tortillas to salsa to agua frescas."
                                </p>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 group">
<div className="flex flex-col items-center gap-3 shrink-0">
<div className="flex gap-0.5 text-blue-500">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="w-24 h-24 rounded-full border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300 shadow-xl bg-cyan-950/30">
<i className="w-12 h-12 text-cyan-500/70" data-lucide="user" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-neutral-200">jennefier smith</span>
</div>
<div className="backdrop-blur-md border rounded-2xl p-6 sm:p-8 w-full shadow-lg relative sm:mt-8 bg-white/5 border-white/10">
<div className="hidden sm:block absolute top-8 -left-3 w-6 h-6 border-l border-b transform rotate-45 z-0 bg-neutral-900 border-white/10"></div>
<p className="text-xl tracking-tight leading-relaxed relative z-10 font-normal text-neutral-300">
                                    "I had not tried such good food as in this highly recommended restaurant, it makes you handmade corn tortillas that are worth the price"
                                </p>
</div>
</div>
</div>

<div className="lg:col-span-7 bg-[#1c1c1e] border rounded-3xl overflow-hidden flex flex-col shadow-2xl border-white/10">

<div className="p-6 sm:p-8 border-b last:border-0 hover:bg-white/[0.02] transition-colors border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4 items-center">
<img alt="Jessica Seto" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;h=150&amp;fit=crop"/>
<div>
<div className="text-xl font-medium tracking-tight text-white">Jessica Seto</div>
<div className="text-lg text-neutral-400">Local Guide · 25 reviews · 34 photos</div>
</div>
</div>
<button className="text-neutral-500 transition-colors p-1 hover:text-white">
<i className="w-5 h-5" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="flex text-blue-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-neutral-400">2 months ago</span>
</div>
<p className="text-xl tracking-tight leading-relaxed mb-5 font-normal text-neutral-300">
                                I was initially turned off by the prices but the portions are huge. The tacos were $6.99 each but the diameter was 7 inches which is larger than typical tacos. The carne asada and al pastor were marinated well. The tortillas here are super ... <button className="font-normal ml-1 text-indigo-400 hover:text-indigo-300">More</button>
</p>
<div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 hide-scrollbar">
<img alt="Taco" className="h-28 sm:h-36 w-auto rounded-xl object-cover border shrink-0 border-white/10" src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300&amp;h=300&amp;fit=crop"/>
<img alt="Food plate" className="h-28 sm:h-36 w-auto rounded-xl object-cover border shrink-0 border-white/10" src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=300&amp;h=300&amp;fit=crop"/>
<img alt="Storefront" className="h-28 sm:h-36 w-auto rounded-xl object-cover border shrink-0 border-white/10" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=300&amp;h=300&amp;fit=crop"/>
</div>
<div className="flex items-center gap-6 mt-6 text-neutral-400">
<button className="flex items-center gap-2 transition-colors group hover:text-white">
<i className="w-5 h-5 group-hover:fill-current group-hover:text-indigo-500 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-lg font-normal">1</span>
</button>
<button className="transition-colors hover:text-white">
<i className="w-5 h-5" data-lucide="share-2" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="p-6 sm:p-8 border-b last:border-0 hover:bg-white/[0.02] transition-colors border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4 items-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center font-medium text-xl bg-cyan-600 text-white">
                                        Y
                                    </div>
<div>
<div className="text-xl font-medium tracking-tight text-white">Yvonne Mosby</div>
<div className="text-lg text-neutral-400">Local Guide · 29 reviews</div>
</div>
</div>
<button className="text-neutral-500 transition-colors p-1 hover:text-white">
<i className="w-5 h-5" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="flex text-blue-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-neutral-400">2 months ago</span>
</div>
<p className="text-xl tracking-tight leading-relaxed mb-6 font-normal text-neutral-300">
                                Imaculately clean. Small seating inside and outside. Nicely constructed wooden tables and bench seating. Nice modern open kitchen appliances.Good drink choices. Dined in and also bought takeout for family. Daniella welcomed me and helped me ... <button className="font-normal ml-1 text-indigo-400 hover:text-indigo-300">More</button>
</p>
<div className="flex items-center gap-6 mt-2 text-neutral-400">
<button className="flex items-center gap-2 transition-colors group hover:text-white">
<i className="w-5 h-5 group-hover:fill-current group-hover:text-indigo-500 transition-colors" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-lg font-normal opacity-0 group-hover:opacity-100 transition-opacity">React</span>
</button>
<button className="transition-colors hover:text-white">
<i className="w-5 h-5" data-lucide="share-2" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="p-6 sm:p-8 border-b last:border-0 hover:bg-white/[0.02] transition-colors border-white/5">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-4 items-center">
<img alt="Sean Dermont" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&amp;h=150&amp;fit=crop"/>
<div>
<div className="text-xl font-medium tracking-tight text-white">Sean Dermont</div>
<div className="text-lg text-neutral-400">Local Guide · 46 reviews · 33 photos</div>
</div>
</div>
<button className="text-neutral-500 transition-colors p-1 hover:text-white">
<i className="w-5 h-5" data-lucide="more-vertical" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="flex text-blue-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<span className="text-lg text-neutral-400">4 months ago</span>
</div>
<div className="text-lg text-neutral-500 mb-4 font-normal tracking-tight">
                                Take out | Dinner | $10–20
                            </div>
<p className="text-xl tracking-tight leading-relaxed mb-5 font-normal text-neutral-300">
                                I been waiting for them to finish construction for years and its finally open. Convinient location right next to safeway and the bank. I got the super asada burritio. I think they put the burrito itself onto the grill as well in the grease ... <button className="font-normal ml-1 text-indigo-400 hover:text-indigo-300">More</button>
</p>
<div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 sm:mx-0 sm:px-0 hide-scrollbar">
<img alt="Burrito" className="h-40 sm:h-48 w-auto rounded-xl object-cover border shrink-0 border-white/10" src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
