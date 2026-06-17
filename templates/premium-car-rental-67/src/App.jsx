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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" id="navbar">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2.5 group" href="#" onclick="showPage('home');return false;">
<div className="w-9 h-9 rounded-xl flex items-center justify-center relative" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<span className="text-black font-black text-sm syne tracking-tighter">DR</span>
</div>
<span className="text-xl font-black syne tracking-tighter">DRVE</span>
</a>

<div className="hidden lg:flex items-center gap-1 p-1 rounded-2xl glass">
<button className="nav-btn nav-pill px-5 py-2 rounded-xl text-sm font-medium text-white/90 hover:text-white transition" data-page="home" onclick="showPage('home')">Home</button>
<button className="nav-btn nav-pill px-5 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white transition" data-page="fleet" onclick="showPage('fleet')">Fleet</button>
<button className="nav-btn nav-pill px-5 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white transition" data-page="deals" onclick="showPage('deals')">Deals</button>
<button className="nav-btn nav-pill px-5 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white transition" data-page="about" onclick="showPage('about')">About</button>
<button className="nav-btn nav-pill px-5 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white transition" data-page="contact" onclick="showPage('contact')">Contact</button>
</div>

<div className="hidden lg:flex items-center gap-3">
<button className="px-5 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white transition" onclick="showPage('login')">Sign in</button>
<button className="px-5 py-2.5 rounded-xl text-sm font-black syne tracking-tight text-black transition relative overflow-hidden group" onclick="showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<span className="relative z-10">Book Now</span>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(135deg,#f0ff40,#c8e000)'}}></div>
</button>
</div>

<button className="lg:hidden w-10 h-10 rounded-xl glass flex items-center justify-center" onclick="toggleMobile()">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden" id="mobileMenu" style={{background: 'rgba(8, 8, 8, 0.98)', backdropFilter: 'blur(30px)', borderBottom: '1px solid rgba(255,255,255,0.06)'}}>
<div className="px-4 py-5 space-y-1">
<button className="w-full text-left py-3 px-4 rounded-xl text-sm font-medium hover:bg-white/5 transition" onclick="showPage('home');toggleMobile()">Home</button>
<button className="w-full text-left py-3 px-4 rounded-xl text-sm font-medium hover:bg-white/5 transition" onclick="showPage('fleet');toggleMobile()">Fleet</button>
<button className="w-full text-left py-3 px-4 rounded-xl text-sm font-medium hover:bg-white/5 transition" onclick="showPage('deals');toggleMobile()">Deals</button>
<button className="w-full text-left py-3 px-4 rounded-xl text-sm font-medium hover:bg-white/5 transition" onclick="showPage('about');toggleMobile()">About</button>
<button className="w-full text-left py-3 px-4 rounded-xl text-sm font-medium hover:bg-white/5 transition" onclick="showPage('contact');toggleMobile()">Contact</button>
<div className="pt-3 grid grid-cols-2 gap-2">
<button className="py-3 rounded-xl text-sm font-medium glass text-center" onclick="showPage('login');toggleMobile()">Sign in</button>
<button className="py-3 rounded-xl text-sm font-black syne text-black text-center" onclick="showPage('booking');toggleMobile()" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Book Now</button>
</div>
</div>
</div>
</nav>

<div className="page active" id="page-home">

<section className="relative min-h-screen flex flex-col overflow-hidden" style={{background: '#080808'}}>

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px'}}></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(226,255,0,0.06) 0%,transparent 70%)'}}></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(120,80,255,0.08) 0%,transparent 70%)'}}></div>

<div className="relative flex-1 flex flex-col pt-20">

<div className="border-b border-white/5 py-3 ticker-wrap">
<div className="marquee-inner flex gap-10 whitespace-nowrap" style={{width: 'max-content'}}>
<span className="text-xs font-medium text-white/30 tracking-widest uppercase" v-htmlFor="i in 2">
                        ✦ BMW M Series   ✦ Porsche 911   ✦ Tesla Model S   ✦ Lamborghini Huracán   ✦ Mercedes AMG   ✦ Ferrari Roma   ✦ Audi RS7   ✦ Range Rover   ✦ McLaren 720S   ✦ BMW M Series   ✦ Porsche 911   ✦ Tesla Model S   ✦ Lamborghini Huracán   ✦ Mercedes AMG   ✦ Ferrari Roma   ✦ Audi RS7   ✦ Range Rover   ✦ McLaren 720S  
                    </span>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col">

<div className="grid lg:grid-cols-[1fr_520px] gap-8 items-center flex-1 py-12 lg:py-16">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{background: 'rgba(226, 255, 0, 0.08)', border: '1px solid rgba(226,255,0,0.15)'}}>
<span className="w-1.5 h-1.5 rounded-full relative pulse-ring" style={{background: '#e2ff00', color: '#e2ff00'}}></span>
<span className="text-xs font-medium" style={{color: '#e2ff00'}}>200+ Premium Vehicles Available</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black syne tracking-tight leading-[0.92] mb-6">
<span className="block text-white">Drive</span>
<span className="block" style={{background: 'linear-gradient(135deg,#e2ff00 0%,#80ff60 40%,#00ffcc 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Beyond</span>
<span className="block text-white/30">Ordinary.</span>
</h1>
<p className="text-base text-white/50 max-w-md leading-relaxed mb-8">From weekend getaways to business travel — rent the world's finest vehicles with zero hassle. Delivered to your door.</p>
<div className="flex flex-wrap items-center gap-4 mb-12">
<button className="group flex items-center gap-3 px-7 py-4 rounded-2xl text-black font-bold syne text-sm transition-all duration-300 hover:gap-5 relative overflow-hidden" onclick="showPage('fleet')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
                                Explore Fleet
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="flex items-center gap-3 px-7 py-4 rounded-2xl text-sm font-medium glass hover:bg-white/10 transition" onclick="showPage('deals')">
<iconify-icon className="text-yellow-400" icon="solar:tag-linear" width="18"></iconify-icon>
                                View Deals
                            </button>
</div>

<div className="flex flex-wrap gap-8">
<div>
<div className="text-2xl font-black syne" style={{color: '#e2ff00'}}>200<span className="text-white/40">+</span></div>
<div className="text-xs text-white/40 mt-0.5">Vehicles</div>
</div>
<div className="w-px bg-white/10"></div>
<div>
<div className="text-2xl font-black syne text-white">50<span className="text-white/40">+</span></div>
<div className="text-xs text-white/40 mt-0.5">Cities</div>
</div>
<div className="w-px bg-white/10"></div>
<div>
<div className="text-2xl font-black syne text-white">4.9<span className="text-white/40">★</span></div>
<div className="text-xs text-white/40 mt-0.5">Rating</div>
</div>
<div className="w-px bg-white/10"></div>
<div>
<div className="text-2xl font-black syne text-white">24<span className="text-white/40">/7</span></div>
<div className="text-xs text-white/40 mt-0.5">Support</div>
</div>
</div>
</div>

<div className="relative">

<div className="absolute -inset-8 rounded-full border border-white/5 spin-slow pointer-events-none hidden lg:block"></div>
<div className="absolute -inset-16 rounded-full border border-white/[0.03] spin-slow pointer-events-none hidden lg:block" style={{animationDirection: 'reverse', animationDuration: '30s'}}></div>
<div className="relative rounded-3xl overflow-hidden" style={{aspectRatio: '4/5', maxHeight: '580px'}}>

<div className="flex h-full transition-transform duration-700 ease-out" id="heroSlides" style={{willChange: 'transform'}}>
<div className="min-w-full h-full relative flex-shrink-0">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=700&amp;h=900&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,#080808 0%,rgba(8,8,8,0.3) 50%,transparent 100%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-xs text-white/50 mb-1">Featured</div>
<div className="text-xl font-black syne">BMW M5 Competition</div>
<div className="flex items-center justify-between mt-3">
<span className="text-white/50 text-sm">From <span className="text-white font-semibold">$189/day</span></span>
<button className="px-4 py-2 rounded-xl text-xs font-bold text-black syne" onclick="showPage('booking')" style={{background: '#e2ff00'}}>Book</button>
</div>
</div>
</div>
<div className="min-w-full h-full relative flex-shrink-0">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=700&amp;h=900&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,#080808 0%,rgba(8,8,8,0.3) 50%,transparent 100%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-xs text-white/50 mb-1">Sports</div>
<div className="text-xl font-black syne">Porsche 911 GT3</div>
<div className="flex items-center justify-between mt-3">
<span className="text-white/50 text-sm">From <span className="text-white font-semibold">$299/day</span></span>
<button className="px-4 py-2 rounded-xl text-xs font-bold text-black syne" onclick="showPage('booking')" style={{background: '#e2ff00'}}>Book</button>
</div>
</div>
</div>
<div className="min-w-full h-full relative flex-shrink-0">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=700&amp;h=900&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,#080808 0%,rgba(8,8,8,0.3) 50%,transparent 100%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-xs text-white/50 mb-1">Electric</div>
<div className="text-xl font-black syne">Tesla Model S Plaid</div>
<div className="flex items-center justify-between mt-3">
<span className="text-white/50 text-sm">From <span className="text-white font-semibold">$149/day</span></span>
<button className="px-4 py-2 rounded-xl text-xs font-bold text-black syne" onclick="showPage('booking')" style={{background: '#e2ff00'}}>Book</button>
</div>
</div>
</div>
<div className="min-w-full h-full relative flex-shrink-0">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=700&amp;h=900&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,#080808 0%,rgba(8,8,8,0.3) 50%,transparent 100%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="text-xs text-white/50 mb-1">Luxury</div>
<div className="text-xl font-black syne">Mercedes S-Class AMG</div>
<div className="flex items-center justify-between mt-3">
<span className="text-white/50 text-sm">From <span className="text-white font-semibold">$249/day</span></span>
<button className="px-4 py-2 rounded-xl text-xs font-bold text-black syne" onclick="showPage('booking')" style={{background: '#e2ff00'}}>Book</button>
</div>
</div>
</div>
</div>

<div className="absolute top-5 right-5 flex flex-col gap-2">
<button className="hero-dot w-1.5 h-6 rounded-full bg-white transition-all duration-300" data-i="0" onclick="goHero(0)"></button>
<button className="hero-dot w-1.5 h-1.5 rounded-full bg-white/30 transition-all duration-300" data-i="1" onclick="goHero(1)"></button>
<button className="hero-dot w-1.5 h-1.5 rounded-full bg-white/30 transition-all duration-300" data-i="2" onclick="goHero(2)"></button>
<button className="hero-dot w-1.5 h-1.5 rounded-full bg-white/30 transition-all duration-300" data-i="3" onclick="goHero(3)"></button>
</div>
</div>

<div className="absolute -left-4 top-1/3 float">
<div className="glass rounded-2xl p-3.5 shadow-2xl">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{background: 'rgba(226,255,0,0.15)'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: '#e2ff00'}} width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold">Fully Insured</div>
<div className="text-xs text-white/40">All vehicles</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-2 sm:-right-6 top-20 float" style={{animationDelay: '1.5s'}}>
<div className="glass rounded-2xl p-3.5 shadow-2xl">
<div className="flex items-center gap-1.5 mb-1">
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="12"></iconify-icon>
</div>
<div className="text-xs font-semibold">4.9 / 5.0</div>
<div className="text-xs text-white/40">50k+ reviews</div>
</div>
</div>
</div>
</div>

<div className="pb-12">
<div className="glass rounded-3xl p-5 sm:p-6 noise relative">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
<div className="lg:col-span-1">
<div className="text-xs text-white/40 mb-1.5 flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear" width="12"></iconify-icon> Location</div>
<input className="w-full bg-transparent text-sm text-white placeholder-white/30 outline-none font-medium" placeholder="City or Airport" type="text"/>
</div>
<div className="hidden lg:block w-px bg-white/10 self-stretch mx-1"></div>
<div>
<div className="text-xs text-white/40 mb-1.5 flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon> Pick-up</div>
<input className="w-full bg-transparent text-sm text-white outline-none font-medium" style={{colorScheme: 'dark'}} type="date"/>
</div>
<div>
<div className="text-xs text-white/40 mb-1.5 flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon> Return</div>
<input className="w-full bg-transparent text-sm text-white outline-none font-medium" style={{colorScheme: 'dark'}} type="date"/>
</div>
<div>
<div className="text-xs text-white/40 mb-1.5 flex items-center gap-1.5"><iconify-icon icon="solar:tag-linear" width="12"></iconify-icon> Category</div>
<select className="w-full bg-transparent text-sm text-white outline-none font-medium cursor-pointer" style={{colorScheme: 'dark'}}>
<option style={{background: '#1a1a1a'}} value="">All Types</option>
<option style={{background: '#1a1a1a'}}>Sedan</option>
<option style={{background: '#1a1a1a'}}>SUV</option>
<option style={{background: '#1a1a1a'}}>Sports</option>
<option style={{background: '#1a1a1a'}}>Electric</option>
<option style={{background: '#1a1a1a'}}>Luxury</option>
</select>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-4 flex-wrap">
<div className="flex gap-2 flex-wrap">
<span className="px-3 py-1 rounded-full text-xs glass text-white/60">🏆 No deposit</span>
<span className="px-3 py-1 rounded-full text-xs glass text-white/60">🔒 Free cancellation</span>
<span className="px-3 py-1 rounded-full text-xs glass text-white/60">⚡ Instant booking</span>
</div>
<button className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold syne text-black shrink-0" onclick="showPage('fleet')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon> Search
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" style={{background: '#0d0d0d'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative">
<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
<div>
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Explore</div>
<h2 className="text-4xl sm:text-5xl font-black syne tracking-tight text-white">Browse by<br/><span className="text-white/30">Category</span></h2>
</div>
<div className="flex gap-2">
<button className="w-11 h-11 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition" onclick="shiftCarousel('cat-track',-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-11 h-11 rounded-2xl flex items-center justify-center transition" onclick="shiftCarousel('cat-track',1)" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon className="text-black" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-hidden">
<div className="flex gap-4 transition-transform duration-500 ease-out" id="cat-track" style={{willChange: 'transform'}}>
<button className="cat-item flex-shrink-0 w-48 sm:w-52 group relative rounded-3xl overflow-hidden card-hover cursor-pointer" onclick="filterAndGo('all')" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=400&amp;h=550&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2))'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top,rgba(226,255,0,0.3),transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-black syne mb-0.5">All Cars</div>
<div className="text-xs text-white/50">200+ vehicles</div>
</div>
<div className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center glass">
<iconify-icon icon="solar:car-2-linear" width="16"></iconify-icon>
</div>
</button>
<button className="cat-item flex-shrink-0 w-48 sm:w-52 group relative rounded-3xl overflow-hidden card-hover cursor-pointer" onclick="filterAndGo('sedan')" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&amp;h=550&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2))'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top,rgba(59,130,246,0.3),transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-black syne mb-0.5">Sedan</div>
<div className="text-xs text-white/50">68 vehicles</div>
</div>
<div className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center glass">
<iconify-icon icon="solar:sedan-minimalistic-linear" width="16"></iconify-icon>
</div>
</button>
<button className="cat-item flex-shrink-0 w-48 sm:w-52 group relative rounded-3xl overflow-hidden card-hover cursor-pointer" onclick="filterAndGo('electric')" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&amp;h=550&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2))'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top,rgba(34,197,94,0.3),transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-black syne mb-0.5">Electric</div>
<div className="text-xs text-white/50">35 vehicles</div>
</div>
<div className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center glass">
<iconify-icon icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
</button>
<button className="cat-item flex-shrink-0 w-48 sm:w-52 group relative rounded-3xl overflow-hidden card-hover cursor-pointer" onclick="filterAndGo('sports')" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&amp;h=550&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2))'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top,rgba(249,115,22,0.3),transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-black syne mb-0.5">Sports</div>
<div className="text-xs text-white/50">42 vehicles</div>
</div>
<div className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center glass">
<iconify-icon icon="solar:fire-linear" width="16"></iconify-icon>
</div>
</button>
<button className="cat-item flex-shrink-0 w-48 sm:w-52 group relative rounded-3xl overflow-hidden card-hover cursor-pointer" onclick="filterAndGo('luxury')" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&amp;h=550&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2))'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top,rgba(168,85,247,0.3),transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-black syne mb-0.5">Luxury</div>
<div className="text-xs text-white/50">28 vehicles</div>
</div>
<div className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center glass">
<iconify-icon icon="solar:crown-linear" width="16"></iconify-icon>
</div>
</button>
<button className="cat-item flex-shrink-0 w-48 sm:w-52 group relative rounded-3xl overflow-hidden card-hover cursor-pointer" onclick="filterAndGo('suv')" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519245659620-e859806a8d3b?w=400&amp;h=550&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.9),rgba(0,0,0,0.2))'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(to top,rgba(239,68,68,0.3),transparent 60%)'}}></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="text-sm font-black syne mb-0.5">SUV</div>
<div className="text-xs text-white/50">55 vehicles</div>
</div>
<div className="absolute top-4 right-4 w-8 h-8 rounded-xl flex items-center justify-center glass">
<iconify-icon icon="solar:compass-big-linear" width="16"></iconify-icon>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative" style={{background: '#080808'}}>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
<div>
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Featured</div>
<h2 className="text-4xl sm:text-5xl font-black syne tracking-tight">Popular<br/><span className="text-white/30">Picks</span></h2>
</div>
<div className="flex items-center gap-4">
<button className="text-sm text-white/50 hover:text-white transition underline underline-offset-4" onclick="showPage('fleet')">View all</button>
<div className="flex gap-2">
<button className="w-11 h-11 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition" onclick="shiftCarousel('picks-track',-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-11 h-11 rounded-2xl flex items-center justify-center" onclick="shiftCarousel('picks-track',1)" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon className="text-black" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="overflow-hidden">
<div className="flex gap-5 transition-transform duration-500 ease-out" id="picks-track" style={{willChange: 'transform'}}>

<div className="flex-shrink-0 w-72 sm:w-80 glass rounded-3xl overflow-hidden card-hover group cursor-pointer" onclick="openCarModal(0)">
<div className="relative overflow-hidden" style={{height: '13rem'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.5),transparent)'}}></div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold text-black" style={{background: '#e2ff00'}}>Popular</div>
<div className="absolute top-4 right-4 flex gap-1">
<span className="px-2 py-1 rounded-lg glass text-xs">Auto</span>
<span className="px-2 py-1 rounded-lg glass text-xs">5 ★</span>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<div className="font-black syne text-base">BMW M5 Competition</div>
<div className="text-xs text-white/50 mt-0.5">Luxury Sports Sedan</div>
</div>
<div className="text-right">
<div className="text-lg font-black syne" style={{color: '#e2ff00'}}>$189</div>
<div className="text-xs text-white/40">/day</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-white/40 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" width="12"></iconify-icon> 5 seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:settings-linear" width="12"></iconify-icon> Auto</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wind-linear" width="12"></iconify-icon> A/C</span>
</div>
<button className="w-full py-3 rounded-2xl text-sm font-bold syne text-black transition-all duration-300 hover:opacity-90" onclick="event.stopPropagation();showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Book Now</button>
</div>
</div>
<div className="flex-shrink-0 w-72 sm:w-80 glass rounded-3xl overflow-hidden card-hover group cursor-pointer" onclick="openCarModal(1)">
<div className="relative overflow-hidden" style={{height: '13rem'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.5),transparent)'}}></div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold" style={{background: 'rgba(249,115,22,0.9)'}}>Sports</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<div className="font-black syne text-base">Porsche 911 GT3</div>
<div className="text-xs text-white/50 mt-0.5">Track-Ready Sports</div>
</div>
<div className="text-right">
<div className="text-lg font-black syne" style={{color: '#e2ff00'}}>$299</div>
<div className="text-xs text-white/40">/day</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-white/40 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" width="12"></iconify-icon> 2 seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:settings-linear" width="12"></iconify-icon> PDK</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wind-linear" width="12"></iconify-icon> A/C</span>
</div>
<button className="w-full py-3 rounded-2xl text-sm font-bold syne text-black transition-all duration-300 hover:opacity-90" onclick="event.stopPropagation();showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Book Now</button>
</div>
</div>
<div className="flex-shrink-0 w-72 sm:w-80 glass rounded-3xl overflow-hidden card-hover group cursor-pointer" onclick="openCarModal(2)">
<div className="relative overflow-hidden" style={{height: '13rem'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.5),transparent)'}}></div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold" style={{background: 'rgba(34,197,94,0.9)'}}>Electric</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<div className="font-black syne text-base">Tesla Model S Plaid</div>
<div className="text-xs text-white/50 mt-0.5">Electric Hypercar</div>
</div>
<div className="text-right">
<div className="text-lg font-black syne" style={{color: '#e2ff00'}}>$149</div>
<div className="text-xs text-white/40">/day</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-white/40 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" width="12"></iconify-icon> 5 seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon> Electric</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wind-linear" width="12"></iconify-icon> A/C</span>
</div>
<button className="w-full py-3 rounded-2xl text-sm font-bold syne text-black transition-all duration-300 hover:opacity-90" onclick="event.stopPropagation();showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Book Now</button>
</div>
</div>
<div className="flex-shrink-0 w-72 sm:w-80 glass rounded-3xl overflow-hidden card-hover group cursor-pointer" onclick="openCarModal(3)">
<div className="relative overflow-hidden" style={{height: '13rem'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.5),transparent)'}}></div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold" style={{background: 'rgba(168,85,247,0.9)'}}>Luxury</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<div className="font-black syne text-base">Mercedes S-Class AMG</div>
<div className="text-xs text-white/50 mt-0.5">Executive Luxury</div>
</div>
<div className="text-right">
<div className="text-lg font-black syne" style={{color: '#e2ff00'}}>$249</div>
<div className="text-xs text-white/40">/day</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-white/40 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" width="12"></iconify-icon> 5 seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:settings-linear" width="12"></iconify-icon> Auto</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wind-linear" width="12"></iconify-icon> A/C</span>
</div>
<button className="w-full py-3 rounded-2xl text-sm font-bold syne text-black transition-all duration-300 hover:opacity-90" onclick="event.stopPropagation();showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Book Now</button>
</div>
</div>
<div className="flex-shrink-0 w-72 sm:w-80 glass rounded-3xl overflow-hidden card-hover group cursor-pointer" onclick="openCarModal(4)">
<div className="relative overflow-hidden" style={{height: '13rem'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.5),transparent)'}}></div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-xs font-semibold" style={{background: 'rgba(239,68,68,0.9)'}}>Supercar</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<div className="font-black syne text-base">Lamborghini Huracán</div>
<div className="text-xs text-white/50 mt-0.5">Italian Supercar</div>
</div>
<div className="text-right">
<div className="text-lg font-black syne" style={{color: '#e2ff00'}}>$499</div>
<div className="text-xs text-white/40">/day</div>
</div>
</div>
<div className="flex items-center gap-3 text-xs text-white/40 mb-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:user-linear" width="12"></iconify-icon> 2 seats</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:settings-linear" width="12"></iconify-icon> DCT</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:wind-linear" width="12"></iconify-icon> A/C</span>
</div>
<button className="w-full py-3 rounded-2xl text-sm font-bold syne text-black transition-all duration-300 hover:opacity-90" onclick="event.stopPropagation();showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Book Now</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: '#0d0d0d'}}>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-14">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Why DRVE</div>
<h2 className="text-4xl sm:text-5xl font-black syne tracking-tight">Built different.<br/><span className="text-white/30">For drivers.</span></h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px] lg:auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group">
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg,rgba(8,8,8,0.85),rgba(8,8,8,0.3))'}}></div>
<div className="absolute inset-0 p-7 flex flex-col justify-between">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{background: 'rgba(226,255,0,0.15)'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: '#e2ff00'}} width="24"></iconify-icon>
</div>
<div>
<div className="text-2xl font-black syne mb-2">Fully Insured<br/>Every Ride</div>
<div className="text-sm text-white/50 max-w-xs">Comprehensive coverage on every vehicle. Drive with complete peace of mind, always.</div>
</div>
</div>
</div>

<div className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between">
<iconify-icon icon="solar:clock-circle-linear" style={{color: '#e2ff00'}} width="26"></iconify-icon>
<div>
<div className="text-3xl font-black syne">24/7</div>
<div className="text-xs text-white/50 mt-1">Expert Support</div>
</div>
</div>
<div className="col-span-1 rounded-3xl p-6 flex flex-col justify-between" style={{background: 'linear-gradient(135deg, rgba(226, 255, 0, 0.1), rgba(168, 204, 0, 0.05))', border: '1px solid rgba(226,255,0,0.15)'}}>
<iconify-icon icon="solar:star-linear" style={{color: '#e2ff00'}} width="26"></iconify-icon>
<div>
<div className="text-3xl font-black syne">4.9★</div>
<div className="text-xs text-white/50 mt-1">50k+ Reviews</div>
</div>
</div>
<div className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between">
<iconify-icon icon="solar:map-point-linear" style={{color: '#e2ff00'}} width="26"></iconify-icon>
<div>
<div className="text-3xl font-black syne">50+</div>
<div className="text-xs text-white/50 mt-1">Cities Nationwide</div>
</div>
</div>
<div className="col-span-1 glass rounded-3xl p-6 flex flex-col justify-between">
<iconify-icon icon="solar:bolt-linear" style={{color: '#e2ff00'}} width="26"></iconify-icon>
<div>
<div className="text-3xl font-black syne">2min</div>
<div className="text-xs text-white/50 mt-1">Instant Booking</div>
</div>
</div>

<div className="col-span-2 relative rounded-3xl overflow-hidden group" style={{background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="p-7 h-full flex flex-col justify-between">
<iconify-icon icon="solar:delivery-linear" style={{color: '#e2ff00'}} width="28"></iconify-icon>
<div>
<div className="text-xl font-black syne mb-1.5">Door-to-Door Delivery</div>
<div className="text-sm text-white/40">We bring your chosen vehicle directly to your location — hotel, office, or home.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: '#080808'}}>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
<div>
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Destinations</div>
<h2 className="text-4xl sm:text-5xl font-black syne tracking-tight">Top<br/><span className="text-white/30">Cities</span></h2>
</div>
<div className="flex gap-2">
<button className="w-11 h-11 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition" onclick="shiftCarousel('dest-track',-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-11 h-11 rounded-2xl flex items-center justify-center" onclick="shiftCarousel('dest-track',1)" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon className="text-black" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="overflow-hidden">
<div className="flex gap-5 transition-transform duration-500 ease-out" id="dest-track" style={{willChange: 'transform'}}>
<div className="dest-card flex-shrink-0 w-60 sm:w-72 group cursor-pointer" onclick="showPage('fleet')">
<div className="rounded-3xl overflow-hidden relative mb-3" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&amp;h=530&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.8),transparent 60%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="font-black syne text-lg">Los Angeles</div>
<div className="text-xs text-white/50">48 cars • From $59/day</div>
</div>
<div className="absolute top-4 right-4 glass rounded-xl px-2 py-1 text-xs">CA</div>
</div>
</div>
<div className="dest-card flex-shrink-0 w-60 sm:w-72 group cursor-pointer" onclick="showPage('fleet')">
<div className="rounded-3xl overflow-hidden relative mb-3" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&amp;h=530&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.8),transparent 60%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="font-black syne text-lg">New York</div>
<div className="text-xs text-white/50">62 cars • From $69/day</div>
</div>
<div className="absolute top-4 right-4 glass rounded-xl px-2 py-1 text-xs">NY</div>
</div>
</div>
<div className="dest-card flex-shrink-0 w-60 sm:w-72 group cursor-pointer" onclick="showPage('fleet')">
<div className="rounded-3xl overflow-hidden relative mb-3" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&amp;h=530&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.8),transparent 60%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="font-black syne text-lg">San Francisco</div>
<div className="text-xs text-white/50">35 cars • From $65/day</div>
</div>
<div className="absolute top-4 right-4 glass rounded-xl px-2 py-1 text-xs">SF</div>
</div>
</div>
<div className="dest-card flex-shrink-0 w-60 sm:w-72 group cursor-pointer" onclick="showPage('fleet')">
<div className="rounded-3xl overflow-hidden relative mb-3" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&amp;h=530&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.8),transparent 60%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="font-black syne text-lg">Chicago</div>
<div className="text-xs text-white/50">41 cars • From $55/day</div>
</div>
<div className="absolute top-4 right-4 glass rounded-xl px-2 py-1 text-xs">IL</div>
</div>
</div>
<div className="dest-card flex-shrink-0 w-60 sm:w-72 group cursor-pointer" onclick="showPage('fleet')">
<div className="rounded-3xl overflow-hidden relative mb-3" style={{aspectRatio: '3/4'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400&amp;h=530&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to top,rgba(0,0,0,0.8),transparent 60%)'}}></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="font-black syne text-lg">Miami</div>
<div className="text-xs text-white/50">38 cars • From $79/day</div>
</div>
<div className="absolute top-4 right-4 glass rounded-xl px-2 py-1 text-xs">FL</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" style={{background: '#0d0d0d'}}>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
<div className="text-center mb-14">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Reviews</div>
<h2 className="text-4xl sm:text-5xl font-black syne tracking-tight">What our<br/><span className="text-white/30">drivers say</span></h2>
</div>
<div className="overflow-hidden">
<div className="flex gap-5 transition-transform duration-500 ease-out" id="testi-track" style={{willChange: 'transform'}}>
<div className="flex-shrink-0 w-80 sm:w-96 glass rounded-3xl p-6">
<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-white/70 leading-relaxed mb-5">"Rented the Porsche 911 for a weekend trip. The car was immaculate and the booking process took under 2 minutes. Absolutely worth every dollar."</p>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div><div className="text-sm font-semibold">James Carter</div><div className="text-xs text-white/40">Los Angeles, CA</div></div>
</div>
</div>
<div className="flex-shrink-0 w-80 sm:w-96 rounded-3xl p-6" style={{background: 'linear-gradient(135deg, rgba(226, 255, 0, 0.08), rgba(168, 204, 0, 0.04))', border: '1px solid rgba(226,255,0,0.12)'}}>
<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-white/70 leading-relaxed mb-5">"The Tesla delivery to my hotel was seamless. Staff was incredibly professional. I've used DRVE four times now and won't go anywhere else."</p>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div><div className="text-sm font-semibold">Sarah Mitchell</div><div className="text-xs text-white/40">New York, NY</div></div>
</div>
</div>
<div className="flex-shrink-0 w-80 sm:w-96 glass rounded-3xl p-6">
<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-white/70 leading-relaxed mb-5">"Best car rental experience I've ever had. The BMW M5 was in perfect condition and the free cancellation policy gave me so much flexibility."</p>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div><div className="text-sm font-semibold">Alex Rivera</div><div className="text-xs text-white/40">San Francisco, CA</div></div>
</div>
</div>
<div className="flex-shrink-0 w-80 sm:w-96 glass rounded-3xl p-6">
<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#e2ff00'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-white/70 leading-relaxed mb-5">"The Lamborghini experience was unreal. DRVE made the whole process effortless — from booking to drop-off. Highly recommend to anyone."</p>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-2xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&amp;h=60&amp;fit=crop&amp;crop=face"/>
<div><div className="text-sm font-semibold">Nina Chen</div><div className="text-xs text-white/40">Miami, FL</div></div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<button className="w-11 h-11 rounded-2xl glass flex items-center justify-center hover:bg-white/10 transition" onclick="shiftCarousel('testi-track',-1)">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
<button className="w-11 h-11 rounded-2xl flex items-center justify-center" onclick="shiftCarousel('testi-track',1)" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon className="text-black" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-10">
<div className="max-w-[1400px] mx-auto">
<div className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center noise" style={{background: 'linear-gradient(135deg,#e2ff00 0%,#a8cc00 50%,#80ff60 100%)'}}>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.04) 1px,transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative">
<div className="text-xs font-bold tracking-widest uppercase text-black/50 mb-4">Limited Offer</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-black syne tracking-tight text-black mb-5">Your first rental.<br/>20% off.</h2>
<p className="text-black/60 text-base max-w-md mx-auto mb-8">New to DRVE? Use code <strong className="text-black">FIRSTDRVE</strong> and get 20% off your first booking.</p>
<div className="flex flex-wrap items-center justify-center gap-3">
<button className="px-8 py-4 rounded-2xl text-sm font-black syne text-white" onclick="showPage('booking')" style={{background: '#0a0a0a'}}>Claim Offer</button>
<button className="px-8 py-4 rounded-2xl text-sm font-bold text-black border-2 border-black/20 hover:border-black/40 transition" onclick="showPage('fleet')">Browse Fleet</button>
</div>
</div>
</div>
</div>
</section>

<footer style={{background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)'}}>
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
<div className="col-span-2">
<div className="flex items-center gap-2.5 mb-4">
<div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<span className="text-black font-black text-sm syne tracking-tighter">DR</span>
</div>
<span className="text-xl font-black syne tracking-tighter">DRVE</span>
</div>
<p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">Premium car rental for every journey. From city drives to open roads — we've got your perfect car.</p>
<div className="flex gap-3">
<a className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon></a>
<a className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:twitter-linear" width="16"></iconify-icon></a>
<a className="w-9 h-9 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:youtube-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Company</div>
<div className="space-y-3">
<button className="block text-sm text-white/50 hover:text-white transition" onclick="showPage('about')">About</button>
<button className="block text-sm text-white/50 hover:text-white transition" onclick="showPage('fleet')">Fleet</button>
<button className="block text-sm text-white/50 hover:text-white transition" onclick="showPage('deals')">Deals</button>
</div>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Support</div>
<div className="space-y-3">
<button className="block text-sm text-white/50 hover:text-white transition" onclick="showPage('contact')">Contact</button>
<a className="block text-sm text-white/50 hover:text-white transition" href="#">FAQ</a>
<a className="block text-sm text-white/50 hover:text-white transition" href="#">Insurance</a>
</div>
</div>
<div>
<div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">Newsletter</div>
<p className="text-xs text-white/40 mb-3">Get exclusive deals in your inbox.</p>
<div className="flex gap-2">
<input className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none text-white placeholder-white/30 focus:border-white/20 transition" placeholder="Email" type="email"/>
<button className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-black" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/30">© 2025 DRVE Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-white/30 hover:text-white/60 transition" href="#">Privacy</a>
<a className="text-xs text-white/30 hover:text-white/60 transition" href="#">Terms</a>
<a className="text-xs text-white/30 hover:text-white/60 transition" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</div>

<div className="page" id="page-fleet">
<div className="pt-20 min-h-screen" style={{background: '#080808'}}>

<div className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(226,255,0,0.05) 0%,transparent 70%)'}}></div>
<div className="max-w-[1400px] mx-auto relative">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Our Fleet</div>
<h1 className="text-5xl sm:text-6xl font-black syne tracking-tight mb-3">200+ Premium<br/><span className="text-white/30">Vehicles</span></h1>
<p className="text-white/50 text-base max-w-lg">Every make, every model, every occasion. Filter and find your perfect drive.</p>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-10 pb-6">
<div className="max-w-[1400px] mx-auto">
<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="flex flex-wrap gap-2">
<button className="fleet-filter px-4 py-2 rounded-2xl text-sm font-bold syne text-black" data-filter="all" onclick="setFleetFilter(this,'all')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>All</button>
<button className="fleet-filter px-4 py-2 rounded-2xl text-sm font-medium glass text-white/60 hover:text-white transition" data-filter="sedan" onclick="setFleetFilter(this,'sedan')">Sedan</button>
<button className="fleet-filter px-4 py-2 rounded-2xl text-sm font-medium glass text-white/60 hover:text-white transition" data-filter="suv" onclick="setFleetFilter(this,'suv')">SUV</button>
<button className="fleet-filter px-4 py-2 rounded-2xl text-sm font-medium glass text-white/60 hover:text-white transition" data-filter="sports" onclick="setFleetFilter(this,'sports')">Sports</button>
<button className="fleet-filter px-4 py-2 rounded-2xl text-sm font-medium glass text-white/60 hover:text-white transition" data-filter="electric" onclick="setFleetFilter(this,'electric')">Electric</button>
<button className="fleet-filter px-4 py-2 rounded-2xl text-sm font-medium glass text-white/60 hover:text-white transition" data-filter="luxury" onclick="setFleetFilter(this,'luxury')">Luxury</button>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-white/40" id="fleet-count">Showing 8 vehicles</span>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="fleet-grid"></div>
</div>
</div>
</div>
</div>

<div className="page" id="page-deals">
<div className="pt-20 min-h-screen" style={{background: '#080808'}}>
<div className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(249,115,22,0.06) 0%,transparent 70%)'}}></div>
<div className="max-w-[1400px] mx-auto relative">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#f97316'}}>Limited Time</div>
<h1 className="text-5xl sm:text-6xl font-black syne tracking-tight mb-3">Deals &amp;<br/><span className="text-white/30">Offers</span></h1>
<p className="text-white/50 text-base">Save big on your next rental — exclusive offers updated weekly.</p>
</div>
</div>
<div className="px-4 sm:px-6 lg:px-10 pb-16">
<div className="max-w-[1400px] mx-auto space-y-5">

<div className="rounded-3xl overflow-hidden relative group" style={{background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.06), rgba(239, 68, 68, 0.04))', border: '1px solid rgba(249,115,22,0.12)'}}>
<div className="grid md:grid-cols-5 gap-0">
<div className="md:col-span-2 relative overflow-hidden" style={{minHeight: '240px'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0" src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(to right,transparent,rgba(249,115,22,0.1))'}}></div>
</div>
<div className="md:col-span-3 p-7 sm:p-10 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{background: 'rgba(249, 115, 22, 0.15)', color: '#f97316', border: '1px solid rgba(249,115,22,0.2)'}}>
<iconify-icon icon="solar:fire-linear" width="12"></iconify-icon> Weekend Special
                                </div>
<h2 className="text-2xl sm:text-3xl font-black syne tracking-tight mb-3">Sports Car Weekend</h2>
<p className="text-white/50 text-sm leading-relaxed mb-4">Rent any sports car Fri–Mon and get 30% off. Includes Porsche, Ferrari, and Lamborghini. Add a helmet for free.</p>
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5 text-xs"><iconify-icon icon="solar:calendar-linear" width="13"></iconify-icon> Expires Dec 31</div>
<div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5 text-xs"><iconify-icon icon="solar:tag-linear" width="13"></iconify-icon> Code: WEEKEND30</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5 flex-wrap gap-4">
<div>
<span className="text-4xl font-black syne" style={{color: '#f97316'}}>30%</span>
<span className="text-white/40 ml-2 text-sm">OFF weekends</span>
</div>
<button className="px-6 py-3 rounded-2xl text-sm font-bold syne text-black" onclick="showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Claim Deal</button>
</div>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group" style={{background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.06), rgba(6, 182, 212, 0.04))', border: '1px solid rgba(34,197,94,0.12)'}}>
<div className="grid md:grid-cols-5 gap-0">
<div className="md:col-span-2 relative overflow-hidden" style={{minHeight: '240px'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="md:col-span-3 p-7 sm:p-10 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.2)'}}>
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon> Go Green
                                </div>
<h2 className="text-2xl sm:text-3xl font-black syne tracking-tight mb-3">Electric First Month</h2>
<p className="text-white/50 text-sm leading-relaxed mb-4">Switch to electric. First rental free with monthly subscription. Tesla, Rivian, Polestar available.</p>
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5 text-xs"><iconify-icon icon="solar:calendar-linear" width="13"></iconify-icon> Ongoing</div>
<div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5 text-xs"><iconify-icon icon="solar:tag-linear" width="13"></iconify-icon> Code: ELECTRIC</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5 flex-wrap gap-4">
<div>
<span className="text-4xl font-black syne" style={{color: '#22c55e'}}>FREE</span>
<span className="text-white/40 ml-2 text-sm">first day</span>
</div>
<button className="px-6 py-3 rounded-2xl text-sm font-bold syne text-black" onclick="showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Claim Deal</button>
</div>
</div>
</div>
</div>

<div className="rounded-3xl overflow-hidden relative group" style={{background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.06), rgba(99, 102, 241, 0.04))', border: '1px solid rgba(168,85,247,0.12)'}}>
<div className="grid md:grid-cols-5 gap-0">
<div className="md:col-span-2 relative overflow-hidden" style={{minHeight: '240px'}}>
<img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="md:col-span-3 p-7 sm:p-10 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', border: '1px solid rgba(168,85,247,0.2)'}}>
<iconify-icon icon="solar:crown-linear" width="12"></iconify-icon> VIP
                                </div>
<h2 className="text-2xl sm:text-3xl font-black syne tracking-tight mb-3">Luxury 7-Day Package</h2>
<p className="text-white/50 text-sm leading-relaxed mb-4">Book any luxury vehicle for 7 days, get day 7 free. Includes airport pick-up and chauffeur service.</p>
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5 text-xs"><iconify-icon icon="solar:calendar-linear" width="13"></iconify-icon> Expires Jan 15</div>
<div className="flex items-center gap-2 glass rounded-xl px-3 py-1.5 text-xs"><iconify-icon icon="solar:tag-linear" width="13"></iconify-icon> Code: VIP7</div>
</div>
</div>
<div className="flex items-center justify-between mt-6 pt-5 border-t border-white/5 flex-wrap gap-4">
<div>
<span className="text-4xl font-black syne" style={{color: '#a855f7'}}>7th</span>
<span className="text-white/40 ml-2 text-sm">day free</span>
</div>
<button className="px-6 py-3 rounded-2xl text-sm font-bold syne text-black" onclick="showPage('booking')" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>Claim Deal</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page" id="page-about">
<div className="pt-20 min-h-screen" style={{background: '#080808'}}>

<div className="relative py-20 px-4 sm:px-6 lg:px-10 text-center overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(226,255,0,0.05) 0%,transparent 70%)'}}></div>
<div className="relative max-w-3xl mx-auto">
<div className="text-xs font-medium tracking-widest uppercase mb-4" style={{color: '#e2ff00'}}>Our Story</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-black syne tracking-tight mb-6">Built for<br/>drivers,<br/><span className="text-white/30">by drivers.</span></h1>
<p className="text-white/50 text-base leading-relaxed">DRVE was born in 2019 with a single vision — make premium cars accessible to everyone. We believe every journey deserves the perfect vehicle.</p>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-10 pb-20">
<div className="max-w-[1400px] mx-auto">

<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
<div className="relative">
<img alt="" className="rounded-3xl w-full object-cover" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&amp;h=600&amp;fit=crop" style={{aspectRatio: '4/3'}}/>
<div className="absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(135deg,rgba(226,255,0,0.08),transparent)'}}></div>
<div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
<div className="flex items-center gap-4">
<div>
<div className="text-2xl font-black syne" style={{color: '#e2ff00'}}>2019</div>
<div className="text-xs text-white/50">Founded</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-2xl font-black syne text-white">$2M+</div>
<div className="text-xs text-white/50">Saved by customers</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="text-2xl font-black syne text-white">50k+</div>
<div className="text-xs text-white/50">Happy drivers</div>
</div>
</div>
</div>
</div>
<div>
<div className="text-xs font-medium tracking-widest uppercase mb-4" style={{color: '#e2ff00'}}>Why Choose DRVE</div>
<h2 className="text-4xl font-black syne tracking-tight mb-8">We obsess over<br/><span className="text-white/30">every detail.</span></h2>
<div className="space-y-5">
<div className="flex gap-4 p-5 glass rounded-2xl">
<div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(226,255,0,0.1)'}}>
<iconify-icon icon="solar:shield-check-linear" style={{color: '#e2ff00'}} width="22"></iconify-icon>
</div>
<div><div className="text-sm font-semibold mb-1">Fully Insured Every Vehicle</div><div className="text-sm text-white/40">Comprehensive coverage included. Drive worry-free.</div></div>
</div>
<div className="flex gap-4 p-5 glass rounded-2xl">
<div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(226,255,0,0.1)'}}>
<iconify-icon icon="solar:clock-circle-linear" style={{color: '#e2ff00'}} width="22"></iconify-icon>
</div>
<div><div className="text-sm font-semibold mb-1">24/7 Expert Support</div><div className="text-sm text-white/40">Real humans, always available for any assistance.</div></div>
</div>
<div className="flex gap-4 p-5 glass rounded-2xl">
<div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(226,255,0,0.1)'}}>
<iconify-icon icon="solar:delivery-linear" style={{color: '#e2ff00'}} width="22"></iconify-icon>
</div>
<div><div className="text-sm font-semibold mb-1">Door-to-Door Delivery</div><div className="text-sm text-white/40">We deliver your car wherever you need it.</div></div>
</div>
</div>
</div>
</div>

<div className="text-center mb-12">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>The Team</div>
<h2 className="text-4xl font-black syne tracking-tight">Meet<br/><span className="text-white/30">leadership</span></h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="glass rounded-3xl p-5 text-center card-hover">
<img alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;h=200&amp;fit=crop&amp;crop=face"/>
<div className="font-black syne text-base mb-0.5">James Carter</div>
<div className="text-xs text-white/40">Co-Founder &amp; CEO</div>
</div>
<div className="glass rounded-3xl p-5 text-center card-hover">
<img alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;h=200&amp;fit=crop&amp;crop=face"/>
<div className="font-black syne text-base mb-0.5">Sarah Mitchell</div>
<div className="text-xs text-white/40">Co-Founder &amp; COO</div>
</div>
<div className="glass rounded-3xl p-5 text-center card-hover">
<img alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;h=200&amp;fit=crop&amp;crop=face"/>
<div className="font-black syne text-base mb-0.5">Alex Rivera</div>
<div className="text-xs text-white/40">CTO</div>
</div>
<div className="glass rounded-3xl p-5 text-center card-hover">
<img alt="" className="w-20 h-20 rounded-2xl object-cover mx-auto mb-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;h=200&amp;fit=crop&amp;crop=face"/>
<div className="font-black syne text-base mb-0.5">Nina Chen</div>
<div className="text-xs text-white/40">CMO</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page" id="page-contact">
<div className="pt-20 min-h-screen" style={{background: '#080808'}}>
<div className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(226,255,0,0.05) 0%,transparent 70%)'}}></div>
<div className="max-w-[1400px] mx-auto relative">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Get in Touch</div>
<h1 className="text-5xl sm:text-6xl font-black syne tracking-tight mb-3">Say<br/><span className="text-white/30">Hello.</span></h1>
<p className="text-white/50 text-base">We'd love to hear from you. We respond within 24 hours.</p>
</div>
</div>
<div className="px-4 sm:px-6 lg:px-10 pb-16">
<div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="glass rounded-3xl p-6 flex gap-4 items-start">
<div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(226,255,0,0.1)'}}>
<iconify-icon icon="solar:map-point-linear" style={{color: '#e2ff00'}} width="20"></iconify-icon>
</div>
<div><div className="text-sm font-semibold mb-1">Headquarters</div><div className="text-sm text-white/40">1234 Sunset Blvd,<br/>Los Angeles, CA 90028</div></div>
</div>
<div className="glass rounded-3xl p-6 flex gap-4 items-start">
<div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(226,255,0,0.1)'}}>
<iconify-icon icon="solar:phone-linear" style={{color: '#e2ff00'}} width="20"></iconify-icon>
</div>
<div><div className="text-sm font-semibold mb-1">Phone</div><div className="text-sm text-white/40">+1 (800) 379-3873<br/>Mon–Fri, 8am–8pm PT</div></div>
</div>
<div className="glass rounded-3xl p-6 flex gap-4 items-start">
<div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'rgba(226,255,0,0.1)'}}>
<iconify-icon icon="solar:letter-linear" style={{color: '#e2ff00'}} width="20"></iconify-icon>
</div>
<div><div className="text-sm font-semibold mb-1">Email</div><div className="text-sm text-white/40">hello@drve.com<br/>support@drve.com</div></div>
</div>
<div className="rounded-3xl p-6" style={{background: 'linear-gradient(135deg, rgba(226, 255, 0, 0.08), rgba(168, 204, 0, 0.04))', border: '1px solid rgba(226,255,0,0.1)'}}>
<div className="text-sm font-semibold mb-3">Follow us</div>
<div className="flex gap-3">
<a className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon></a>
<a className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:twitter-linear" width="16"></iconify-icon></a>
<a className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="solar:youtube-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
<div className="lg:col-span-2 glass rounded-3xl p-7 sm:p-10">
<h2 className="text-xl font-black syne tracking-tight mb-7">Send a message</h2>
<div className="grid sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="text-xs font-medium text-white/40 mb-1.5 block">First Name</label>
<input className="w-full rounded-2xl px-4 py-3 text-sm outline-none text-white placeholder-white/20 transition" onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(226,255,0,0.3)'" placeholder="John" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}} type="text"/>
</div>
<div>
<label className="text-xs font-medium text-white/40 mb-1.5 block">Last Name</label>
<input className="w-full rounded-2xl px-4 py-3 text-sm outline-none text-white placeholder-white/20 transition" onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(226,255,0,0.3)'" placeholder="Doe" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}} type="text"/>
</div>
</div>
<div className="mb-4">
<label className="text-xs font-medium text-white/40 mb-1.5 block">Email</label>
<input className="w-full rounded-2xl px-4 py-3 text-sm outline-none text-white placeholder-white/20 transition" onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(226,255,0,0.3)'" placeholder="john@example.com" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}} type="email"/>
</div>
<div className="mb-4">
<label className="text-xs font-medium text-white/40 mb-1.5 block">Subject</label>
<input className="w-full rounded-2xl px-4 py-3 text-sm outline-none text-white placeholder-white/20 transition" onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(226,255,0,0.3)'" placeholder="How can we help?" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}} type="text"/>
</div>
<div className="mb-7">
<label className="text-xs font-medium text-white/40 mb-1.5 block">Message</label>
<textarea className="w-full rounded-2xl px-4 py-3 text-sm outline-none text-white placeholder-white/20 transition resize-none" onblur="this.style.borderColor='rgba(255,255,255,0.08)'" onfocus="this.style.borderColor='rgba(226,255,0,0.3)'" placeholder="Your message..." rows="5" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}></textarea>
</div>
<button className="w-full py-4 rounded-2xl text-sm font-black syne text-black flex items-center justify-center gap-2 transition hover:opacity-90" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon> Send Message
                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="page" id="page-booking">
<div className="pt-20 min-h-screen" style={{background: '#080808'}}>
<div className="relative py-16 px-4 sm:px-6 lg:px-10 overflow-hidden">
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)', backgroundSize: '80px 80px'}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none" style={{background: 'radial-gradient(ellipse,rgba(226,255,0,0.05) 0%,transparent 70%)'}}></div>
<div className="max-w-[1400px] mx-auto relative">
<div className="text-xs font-medium tracking-widest uppercase mb-3" style={{color: '#e2ff00'}}>Reserve</div>
<h1 className="text-5xl sm:text-6xl font-black syne tracking-tight mb-3">Book Your<br/><span className="text-white/30">Ride.</span></h1>
</div>
</div>
<div className="px-4 sm:px-6 lg:px-10 pb-16">
<div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-5">

<div className="glass rounded-3xl p-7">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black syne text-black" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>1</div>
<h2 className="text-base font-black syne">Rental Details</h2>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-xs font-medium text-white/40 mb-1.5 block">Pick-up Location</label>
<div className="flex items-center gap-2 rounded-2xl px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<iconify-icon className="text-white/30 flex-shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<input className="text-sm w-full outline-none bg-transparent text-white placeholder-white/20" placeholder="City or Airport" type="text"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-white/40 mb-1.5 block">Drop-off Location</label>
<div className="flex items-center gap-2 rounded-2xl px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<iconify-icon className="text-white/30 flex-shrink-0" icon="solar:map-point-linear" width="16"></iconify-icon>
<input className="text-sm w-full outline-none bg-transparent text-white placeholder-white/20" placeholder="City or Airport" type="text"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-white/40 mb-1.5 block">Pick-up Date</label>
<div className="flex items-center gap-2 rounded-2xl px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<iconify-icon className="text-white/30 flex-shrink-0" icon="solar:calendar-linear" width="16"></iconify-icon>
<input className="text-sm w-full outline-none bg-transparent text-white" style={{colorScheme: 'dark'}} type="date"/>
</div>
</div>
<div>
<label className="text-xs font-medium text-white/40 mb-1.5 block">Return Date</label>
<div className="flex items-center gap-2 rounded-2xl px-4 py-3" style={{background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<iconify-icon className="text-white/30 flex-shrink-0" icon="solar:calendar-linear" width="16"></iconify-icon>
<input className="text-sm w-full outline-none bg-transparent text-white" style={{colorScheme: 'dark'}} type="date"/>
</div>
</div>
</div>
</div>

<div className="glass rounded-3xl p-7">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black syne text-black" style={{background: 'linear-gradient(135deg,#e2ff00,#a8cc00)'}}>2</div>
<h2 className="text-base font-black syne">Driver Information</h2></div></div></div></div></div></div></div>
    </>
  );
}
