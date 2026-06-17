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



        // Initialize Icons
        lucide.createIcons();

        // Hero Slider Logic
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.nav-dot');
        const totalSlides = slides.length;

        function changeSlide(index) {
            // Remove active classes
            slides[currentSlide].classList.remove('slide-active');
            slides[currentSlide].classList.add('slide-hidden');
            dots[currentSlide].classList.remove('bg-cyan-500', 'opacity-100');
            dots[currentSlide].classList.add('bg-white/20');

            // Update Index
            currentSlide = index;
            if (currentSlide >= totalSlides) currentSlide = 0;
            if (currentSlide < 0) currentSlide = totalSlides - 1;

            // Add active classes
            slides[currentSlide].classList.remove('slide-hidden');
            slides[currentSlide].classList.add('slide-active');
            dots[currentSlide].classList.remove('bg-white/20');
            dots[currentSlide].classList.add('bg-cyan-500', 'opacity-100');
        }

        // Auto play
        setInterval(() => {
            let next = currentSlide + 1;
            if (next >= totalSlides) next = 0;
            changeSlide(next);
        }, 5000);

    
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
      

<div className="bg-cyan-500 text-slate-950 text-[10px] sm:text-xs font-bold uppercase tracking-wider py-2">
<div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="bg-black text-cyan-400 px-1.5 py-0.5 -skew-x-12 inline-block">
<span className="skew-x-12 block">LIVE</span>
</span>
<span>Flash Sale Ends in 04:22:15</span>
</div>
<div className="hidden sm:flex gap-4">
<a className="hover:underline" href="#">Store Locator</a>
<a className="hover:underline" href="#">Track Order</a>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20 gap-4 lg:gap-8">

<a className="flex-shrink-0 group relative z-50" href="#">

<div className="h-12 w-auto flex items-center">

<div className="flex flex-col items-center justify-center leading-none">
<div className="relative">
<i className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-16 text-cyan-500/20 -z-10 fill-current" data-lucide="shield"></i>
<span className="font-sport font-black italic text-4xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-cyan-400 to-blue-600 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]" style={{WebkitTextStroke: '1px rgba(255,255,255,0.1)'}}>PS</span>
</div>
<span className="font-sport font-black italic text-xl tracking-tight text-white skew-x-[-10deg]">POWER<span className="text-cyan-500">SUPPS</span></span>
</div>
</div>
</a>

<nav className="hidden lg:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-bold uppercase italic tracking-wide text-white hover:text-cyan-400 hover:bg-white/5 skew-x-[-12deg] transition-all" href="#"><span className="block skew-x-[12deg]">Proteins</span></a>
<a className="px-4 py-2 text-sm font-bold uppercase italic tracking-wide text-white hover:text-cyan-400 hover:bg-white/5 skew-x-[-12deg] transition-all" href="#"><span className="block skew-x-[12deg]">Pre-Workout</span></a>
<a className="px-4 py-2 text-sm font-bold uppercase italic tracking-wide text-white hover:text-cyan-400 hover:bg-white/5 skew-x-[-12deg] transition-all" href="#"><span className="block skew-x-[12deg]">Fat Loss</span></a>
<a className="px-4 py-2 text-sm font-bold uppercase italic tracking-wide text-red-500 hover:text-red-400 hover:bg-white/5 skew-x-[-12deg] transition-all" href="#"><span className="block skew-x-[12deg] flex items-center gap-1"><i className="w-4 h-4" data-lucide="flame"></i> Deals</span></a>
</nav>

<div className="hidden md:flex flex-1 max-w-md relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500 blur skew-x-[-12deg]"></div>
<div className="relative flex w-full bg-slate-900 skew-x-[-12deg] border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
<input className="w-full bg-transparent border-none py-2.5 pl-10 pr-4 text-sm font-bold italic placeholder:text-slate-500 text-white focus:ring-0 skew-x-[12deg] placeholder:italic uppercase tracking-wide" placeholder="SEARCH FOR PRODUCTS..." type="text"/>
<div className="skew-x-[12deg] absolute left-3 top-1/2 -translate-y-1/2">
<i className="w-4 h-4 text-slate-400" data-lucide="search"></i>
</div>
</div>
</div>

<div className="flex items-center gap-5">
<button className="relative group">
<i className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors stroke-[1.5]" data-lucide="user"></i>
</button>
<button className="relative group">
<i className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded bg-cyan-500 text-[10px] font-black text-black skew-x-[-12deg]">
<span className="skew-x-[12deg]">2</span>
</span>
</button>
<button className="lg:hidden text-white">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-[650px] sm:h-[750px] w-full bg-slate-900 overflow-hidden">

<div className="absolute inset-0 w-full h-full" id="hero-slider">

<div className="slide slide-active absolute inset-0 w-full h-full">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>

<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
<div className="max-w-2xl pt-10">
<div className="inline-flex items-center gap-2 mb-4 animate-[fadeInUp_0.5s_ease-out]">
<span className="bg-cyan-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider">
<span className="block skew-x-12">New Arrival</span>
</span>
<span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Series V.02</span>
</div>
<h1 className="font-sport font-black italic text-6xl sm:text-7xl lg:text-9xl leading-[0.9] text-white mb-6 uppercase tracking-tighter drop-shadow-lg animate-[fadeInUp_0.7s_ease-out_0.2s_both]">
                            Beast <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Mode</span> ON
                        </h1>
<p className="text-slate-300 text-lg sm:text-xl font-medium max-w-lg mb-8 leading-relaxed animate-[fadeInUp_0.9s_ease-out_0.4s_both]">
                            Clinically dosed ingredients to shatter your personal records. Unlock 33% more explosive power today.
                        </p>
<div className="flex flex-wrap gap-4 animate-[fadeInUp_1.1s_ease-out_0.6s_both]">
<a className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]" href="#">
<span className="block skew-x-[12deg] flex items-center gap-2">
                                    Shop Now <i className="w-5 h-5 stroke-[2.5]" data-lucide="arrow-right"></i>
</span>
</a>
<a className="group relative px-8 py-4 bg-transparent border-2 border-white/20 hover:border-cyan-400 hover:bg-white/5 text-white font-bold uppercase italic tracking-wider skew-x-[-12deg] transition-all" href="#">
<span className="block skew-x-[12deg]">View Stack</span>
</a>
</div>
</div>
</div>
</div>

<div className="slide slide-hidden absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-blue-900/20"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 mix-blend-overlay"></div>
<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
<div className="max-w-2xl pt-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="bg-red-600 text-white text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider">
<span className="block skew-x-12">Flash Deal</span>
</span>
<span className="text-red-500 font-bold uppercase tracking-widest text-xs">Limited Time</span>
</div>
<h1 className="font-sport font-black italic text-6xl sm:text-7xl lg:text-9xl leading-[0.9] text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
                            Pre <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Workout</span> Riot
                        </h1>
<p className="text-slate-300 text-lg sm:text-xl font-medium max-w-lg mb-8 leading-relaxed">
                            Buy any 2 high-stim pres and get a free shaker + creatine sample pack. Don't train without it.
                        </p>
<div className="flex flex-wrap gap-4">
<a className="group relative px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]" href="#">
<span className="block skew-x-[12deg] flex items-center gap-2">
                                    Grab Deal <i className="w-5 h-5 stroke-[2.5]" data-lucide="zap"></i>
</span>
</a>
</div>
</div>
</div>
</div>

<div className="slide slide-hidden absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/40"></div>
<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center z-20">
<div className="max-w-2xl pt-10">
<div className="inline-flex items-center gap-2 mb-4">
<span className="bg-green-500 text-black text-xs font-black px-3 py-1 -skew-x-12 uppercase tracking-wider">
<span className="block skew-x-12">Restock</span>
</span>
</div>
<h1 className="font-sport font-black italic text-6xl sm:text-7xl lg:text-9xl leading-[0.9] text-white mb-6 uppercase tracking-tighter drop-shadow-lg">
                            Pure <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Isolate</span>
</h1>
<p className="text-slate-300 text-lg sm:text-xl font-medium max-w-lg mb-8 leading-relaxed">
                            Maximum absorption, zero bloat. The cleanest whey isolate on the market is finally back in stock.
                        </p>
<div className="flex flex-wrap gap-4">
<a className="group relative px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-black uppercase italic tracking-wider skew-x-[-12deg] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]" href="#">
<span className="block skew-x-[12deg] flex items-center gap-2">
                                    Shop Protein <i className="w-5 h-5 stroke-[2.5]" data-lucide="shopping-bag"></i>
</span>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 right-0 left-0 z-30 flex justify-center gap-4">
<button className="nav-dot w-12 h-1.5 bg-cyan-500 skew-x-[-12deg] transition-all opacity-100" onclick="changeSlide(0)"></button>
<button className="nav-dot w-12 h-1.5 bg-white/20 hover:bg-white skew-x-[-12deg] transition-all" onclick="changeSlide(1)"></button>
<button className="nav-dot w-12 h-1.5 bg-white/20 hover:bg-white skew-x-[-12deg] transition-all" onclick="changeSlide(2)"></button>
</div>

<div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-20"></div>
<div className="hidden lg:block absolute right-10 bottom-10 z-20 animate-pulse">
<i className="w-32 h-32 text-cyan-500/10 stroke-1" data-lucide="activity"></i>
</div>
</section>

<div className="bg-slate-950 border-y border-white/5 relative z-20">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-8 h-8 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" data-lucide="truck"></i>
<span className="font-sport font-bold italic uppercase text-lg text-white leading-none">Free Shipping</span>
<span className="text-xs text-slate-500 font-medium mt-1">Orders Over $99</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-8 h-8 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" data-lucide="shield-check"></i>
<span className="font-sport font-bold italic uppercase text-lg text-white leading-none">100% Authentic</span>
<span className="text-xs text-slate-500 font-medium mt-1">Direct from Brands</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-8 h-8 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" data-lucide="zap"></i>
<span className="font-sport font-bold italic uppercase text-lg text-white leading-none">Fast Dispatch</span>
<span className="text-xs text-slate-500 font-medium mt-1">Same Day Shipping</span>
</div>
<div className="p-6 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-colors cursor-pointer">
<i className="w-8 h-8 text-cyan-500 mb-2 group-hover:scale-110 transition-transform" data-lucide="trophy"></i>
<span className="font-sport font-bold italic uppercase text-lg text-white leading-none">Best Price</span>
<span className="text-xs text-slate-500 font-medium mt-1">Price Match Guarantee</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-950 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-sport font-black italic text-4xl md:text-5xl uppercase tracking-tighter text-white mb-2">
                        Trending <span className="text-cyan-500">Stacks</span>
</h2>
<p className="text-slate-400 max-w-md">Top rated combinations used by elite athletes for maximum performance.</p>
</div>
<a className="group flex items-center gap-2 text-cyan-400 font-bold uppercase italic hover:text-white transition-colors" href="#">
                    View All Offers <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all duration-300">
<div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-black px-2 py-1 uppercase skew-x-[-12deg] -ml-2 mt-4 z-10 shadow-lg">
<span className="block skew-x-[12deg]">Save 20%</span>
</div>
<div className="aspect-square bg-slate-800/50 p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
<img className="w-full h-full object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Ghost Lifestyle</p>
<h3 className="font-sport font-black italic text-xl text-white uppercase leading-none mb-3 truncate">Legend V2 Pre</h3>
<div className="flex items-center justify-between mt-4">
<div>
<span className="text-slate-500 text-sm line-through">$69.95</span>
<div className="text-cyan-400 font-bold text-xl">$55.95</div>
</div>
<button className="w-10 h-10 bg-white text-black hover:bg-cyan-500 transition-colors flex items-center justify-center skew-x-[-12deg]">
<i className="w-5 h-5 skew-x-[12deg]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all duration-300">
<div className="aspect-square bg-slate-800/50 p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
<img className="w-full h-full object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">EHP Labs</p>
<h3 className="font-sport font-black italic text-xl text-white uppercase leading-none mb-3 truncate">OxyShred Hardcore</h3>
<div className="flex items-center justify-between mt-4">
<div>
<span className="text-slate-500 text-sm line-through">$79.95</span>
<div className="text-cyan-400 font-bold text-xl">$64.95</div>
</div>
<button className="w-10 h-10 bg-white text-black hover:bg-cyan-500 transition-colors flex items-center justify-center skew-x-[-12deg]">
<i className="w-5 h-5 skew-x-[12deg]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all duration-300">
<div className="absolute top-0 left-0 bg-cyan-500 text-black text-xs font-black px-2 py-1 uppercase skew-x-[-12deg] -ml-2 mt-4 z-10 shadow-lg">
<span className="block skew-x-[12deg]">New</span>
</div>
<div className="aspect-square bg-slate-800/50 p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
<img className="w-full h-full object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Optimum Nutrition</p>
<h3 className="font-sport font-black italic text-xl text-white uppercase leading-none mb-3 truncate">Gold Standard Whey</h3>
<div className="flex items-center justify-between mt-4">
<div>
<span className="text-slate-500 text-sm line-through">$89.95</span>
<div className="text-cyan-400 font-bold text-xl">$74.95</div>
</div>
<button className="w-10 h-10 bg-white text-black hover:bg-cyan-500 transition-colors flex items-center justify-center skew-x-[-12deg]">
<i className="w-5 h-5 skew-x-[12deg]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-slate-900 border border-slate-800 hover:border-cyan-500 transition-all duration-300">
<div className="aspect-square bg-slate-800/50 p-8 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
<img className="w-full h-full object-contain mix-blend-lighten group-hover:scale-110 transition-transform duration-500 filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" src="https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Redcon1</p>
<h3 className="font-sport font-black italic text-xl text-white uppercase leading-none mb-3 truncate">Total War</h3>
<div className="flex items-center justify-between mt-4">
<div>
<span className="text-slate-500 text-sm line-through">$59.95</span>
<div className="text-cyan-400 font-bold text-xl">$49.95</div>
</div>
<button className="w-10 h-10 bg-white text-black hover:bg-cyan-500 transition-colors flex items-center justify-center skew-x-[-12deg]">
<i className="w-5 h-5 skew-x-[12deg]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-sport font-black italic text-4xl uppercase tracking-tighter text-white mb-10 text-center"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Shop By</span> Category</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="md:col-span-2 relative h-80 group overflow-hidden border border-slate-800 skew-y-1 md:skew-y-0 transform transition-all hover:border-cyan-500" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">Protein</h3>
<p className="text-slate-300 font-medium">Build lean muscle with premium whey, casein &amp; plant proteins.</p>
</div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
<i className="text-cyan-400 w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</a>

<a className="relative h-80 group overflow-hidden border border-slate-800 skew-y-1 md:skew-y-0 transform transition-all hover:border-cyan-500" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">Pre-Workout</h3>
<p className="text-slate-300 font-medium">Ignite your training.</p>
</div>
</a>

<a className="relative h-80 group overflow-hidden border border-slate-800 skew-y-1 md:skew-y-0 transform transition-all hover:border-cyan-500" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">Fat Burners</h3>
<p className="text-slate-300 font-medium">Shred fast.</p>
</div>
</a>

<a className="md:col-span-2 relative h-80 group overflow-hidden border border-slate-800 skew-y-1 md:skew-y-0 transform transition-all hover:border-cyan-500" href="#">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552674605-46d5316f30f9?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-sport font-black italic text-4xl text-white uppercase tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">Apparel &amp; Gear</h3>
<p className="text-slate-300 font-medium">Lift in style with our latest collection.</p>
</div>
</a>
</div>
</div>
</section>

<div className="py-8 bg-cyan-500 skew-y-[-2deg] relative z-20 overflow-hidden">
<div className="flex items-center gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Ghost</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Optimum Nutrition</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Redcon1</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">EHP Labs</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Axe &amp; Sledge</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Muscle Nation</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Ghost</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Optimum Nutrition</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">Redcon1</span>
<span className="text-3xl font-black italic uppercase text-slate-900 opacity-70">EHP Labs</span>
</div>
</div>
<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

<section className="py-24 bg-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-sport font-black italic text-4xl md:text-5xl uppercase tracking-tighter text-white mb-12 text-center">The <span className="text-cyan-500">Locker Room</span></h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden aspect-video border-2 border-slate-800 group-hover:border-cyan-500 transition-colors rounded-lg">
<div className="absolute top-2 left-2 bg-black/80 backdrop-blur px-3 py-1 z-10 skew-x-[-12deg]">
<span className="text-cyan-400 text-xs font-bold uppercase skew-x-[12deg]">Training</span>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<span className="text-slate-500 text-xs font-bold uppercase tracking-wider">March 10, 2024</span>
<h3 className="font-sport font-bold italic text-2xl text-white mt-2 mb-3 leading-tight group-hover:text-cyan-400 transition-colors uppercase">High Volume vs High Intensity</h3>
<p className="text-slate-400 text-sm leading-relaxed">Which training style triggers more hypertrophy? We break down the latest science.</p>
<a className="inline-flex items-center text-cyan-500 font-bold uppercase italic text-sm mt-4 group-hover:underline" href="#">Read Article <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden aspect-video border-2 border-slate-800 group-hover:border-cyan-500 transition-colors rounded-lg">
<div className="absolute top-2 left-2 bg-black/80 backdrop-blur px-3 py-1 z-10 skew-x-[-12deg]">
<span className="text-cyan-400 text-xs font-bold uppercase skew-x-[12deg]">Nutrition</span>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<span className="text-slate-500 text-xs font-bold uppercase tracking-wider">March 08, 2024</span>
<h3 className="font-sport font-bold italic text-2xl text-white mt-2 mb-3 leading-tight group-hover:text-cyan-400 transition-colors uppercase">Creatine: Loading vs Daily</h3>
<p className="text-slate-400 text-sm leading-relaxed">Do you really need to load creatine for 7 days? The answer might surprise you.</p>
<a className="inline-flex items-center text-cyan-500 font-bold uppercase italic text-sm mt-4 group-hover:underline" href="#">Read Article <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden aspect-video border-2 border-slate-800 group-hover:border-cyan-500 transition-colors rounded-lg">
<div className="absolute top-2 left-2 bg-black/80 backdrop-blur px-3 py-1 z-10 skew-x-[-12deg]">
<span className="text-cyan-400 text-xs font-bold uppercase skew-x-[12deg]">Supplementation</span>
</div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<span className="text-slate-500 text-xs font-bold uppercase tracking-wider">March 05, 2024</span>
<h3 className="font-sport font-bold italic text-2xl text-white mt-2 mb-3 leading-tight group-hover:text-cyan-400 transition-colors uppercase">Stim vs Non-Stim Pre</h3>
<p className="text-slate-400 text-sm leading-relaxed">Cycling caffeine is crucial for adrenal health. Here is how to maintain intensity without the crash.</p>
<a className="inline-flex items-center text-cyan-500 font-bold uppercase italic text-sm mt-4 group-hover:underline" href="#">Read Article <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 relative bg-cyan-600 overflow-hidden">
<div className="absolute inset-0 bg-slate-950/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
<h2 className="font-sport font-black italic text-5xl sm:text-7xl uppercase tracking-tighter text-white mb-6 drop-shadow-xl">Join The <span className="text-cyan-400">Army</span></h2>
<p className="text-slate-300 text-lg mb-8 font-medium">Get exclusive early access to drops, secret sales, and workout plans.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 bg-black/50 border-2 border-white/20 px-6 py-4 text-white placeholder:text-slate-400 font-bold italic focus:outline-none focus:border-cyan-400 skew-x-[-12deg] transition-colors" placeholder="ENTER YOUR EMAIL" type="email"/>
<button className="bg-cyan-500 text-black font-black uppercase italic px-8 py-4 skew-x-[-12deg] hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)]">
<span className="block skew-x-[12deg]">Subscribe</span>
</button>
</form>
</div>
</section>

<footer className="bg-black text-slate-400 border-t border-slate-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<div className="flex items-center gap-1 font-sport font-black italic text-3xl tracking-tight text-white mb-6">
<span className="text-cyan-500">POWER</span><span>SUPPS</span>
</div>
<p className="text-sm leading-relaxed mb-6 font-medium">
                    Dominate your goals. We provide the fuel, you provide the work. Australia's #1 source for hardcore supplements.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-cyan-500 transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-cyan-500 transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-cyan-500 transition-colors" href="#"><i className="w-6 h-6" data-lucide="youtube"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-wider mb-6">Shop</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-cyan-400 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Proteins</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Pre-Workouts</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Stacks</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Clearance</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-wider mb-6">Help</h4>
<ul className="space-y-3 text-sm font-medium">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Returns Policy</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Shipping Info</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact Support</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-4 text-sm font-medium">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-cyan-500 shrink-0" data-lucide="map-pin"></i>
<span>135 Queen Street<br/>Cleveland, QLD 4163</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-500 shrink-0" data-lucide="phone"></i>
<span>(07) 3821 7778</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-cyan-500 shrink-0" data-lucide="mail"></i>
<span>team@powersupps.com.au</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-medium">© 2025 POWER SUPPS. ALL RIGHTS RESERVED.</p>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all">
<i className="w-6 h-6" data-lucide="credit-card"></i>
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
</div>
</footer>


    </>
  );
}
