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
      

<div className="fixed inset-0 pointer-events-none z-0 ambient-glow"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="group flex items-center gap-2" href="#">
<span className="text-white font-serif text-xl tracking-tighter group-hover:text-[#D4AF37] transition-colors duration-300">KHAN HOME</span>
</a>

<div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
<a className="text-xs font-medium tracking-wide text-gray-400 hover:text-white transition-colors duration-300" href="#categories">CATEGORIES</a>
<a className="text-xs font-medium tracking-wide text-gray-400 hover:text-white transition-colors duration-300" href="#about">ABOUT</a>
<a className="text-xs font-medium tracking-wide text-gray-400 hover:text-white transition-colors duration-300" href="#track">TRACK ORDER</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="btn-premium text-[#050505] font-semibold text-xs tracking-widest uppercase px-6 py-2.5 rounded text-center" href="#contact">
                    Contact Us
                </a>
</div>

<button className="md:hidden text-white hover:text-[#D4AF37] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Premium Bathroom Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10 md:mt-0">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
<span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase">Dragon Mart, Dubai</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 tracking-tight font-medium text-white">
                    Interiors, <br/>
<span className="italic font-light text-gold-gradient">Perfected.</span>
</h1>
<p className="text-lg md:text-xl font-light leading-relaxed max-w-lg mb-12 text-gray-300 border-l border-[#D4AF37]/50 pl-6">
                    Premier building materials and sanitary ware. From exquisite stone finishes to modern vanity cabinets, defining luxury in the UAE.
                </p>
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<a className="btn-premium text-[#050505] font-bold text-sm tracking-widest uppercase px-8 py-3.5 rounded inline-flex items-center gap-3 group" href="#categories">
                        View Products
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<button className="text-white flex items-center gap-3 group hover:text-[#D4AF37] transition-all duration-300 px-6 py-3.5 rounded border border-white/10 hover:border-[#D4AF37]/30 bg-white/5 hover:bg-[#D4AF37]/5 backdrop-blur-sm">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-medium">Showroom Tour</span>
</button>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-4 z-20 opacity-50">
<span className="text-[10px] uppercase tracking-widest writing-vertical-rl rotate-180">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="py-24 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-normal leading-[1.1] tracking-tight mb-8 text-gradient">
                        "Your home is a reflection of your ambition. We provide the <span className="text-gold-gradient italic">foundation</span> for excellence."
                    </h2>
<div className="w-20 h-[1px] bg-[#D4AF37] mb-8"></div>
<p className="text-base font-light leading-relaxed text-gray-400">
                        Khan Home Store UAE brings you a curated selection of stone items, sanitary ware, and cabinetry. Located in the heart of International City, we combine aesthetic beauty with functional durability.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-xl text-center">
<span className="block text-3xl font-serif text-white mb-1">24<span className="text-sm align-top text-[#D4AF37]">/7</span></span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Support</span>
</div>
<div className="glass-card p-6 rounded-xl text-center">
<span className="block text-3xl font-serif text-white mb-1">100<span className="text-sm align-top text-[#D4AF37]">%</span></span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Quality</span>
</div>
<div className="glass-card p-6 rounded-xl text-center">
<span className="block text-3xl font-serif text-white mb-1">UAE<span className="text-sm align-top text-[#D4AF37]"></span></span>
<span className="text-[10px] uppercase tracking-widest text-gray-500">Delivery</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]" id="categories">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">Our Catalog</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-white">Featured Collections</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37] pb-0.5" href="#">
                    View All Categories <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card rounded-2xl p-4 group cursor-pointer">
<div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#121212] mb-6 relative">
<img alt="Stone Items" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1618220252344-836e3e94f421?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full">
<span className="text-[#D4AF37] text-[10px] tracking-wider uppercase font-bold">Premium</span>
</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl font-normal tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">Stone Items <span className="text-gray-600 text-lg font-serif italic ml-2">Collection</span></h3>
<span className="text-sm font-medium text-white bg-white/5 px-2 py-1 rounded">150+</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-white/5 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:layers-linear" width="16"></iconify-icon> Marble &amp; Granite</span>
<span className="font-medium text-gray-300">View Range</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-4 group cursor-pointer md:mt-12">
<div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#121212] mb-6">
<img alt="WC &amp; Sanitary" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl font-normal tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">WC &amp; Sanitary <span className="text-gray-600 text-lg font-serif italic ml-2">Essentials</span></h3>
<span className="text-sm font-medium text-white bg-white/5 px-2 py-1 rounded">Smart</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-white/5 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> Modern Systems</span>
<span className="font-medium text-gray-300">View Range</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-4 group cursor-pointer">
<div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#121212] mb-6">
<img alt="Cabinets" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl font-normal tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">Cabinets <span className="text-gray-600 text-lg font-serif italic ml-2">Vanity</span></h3>
<span className="text-sm font-medium text-white bg-white/5 px-2 py-1 rounded">MDF/Wood</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-white/5 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:box-linear" width="16"></iconify-icon> Marble Top Options</span>
<span className="font-medium text-gray-300">View Range</span>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-4 group cursor-pointer md:mt-12 border-[#D4AF37]/20">
<div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#121212] mb-6 relative">
<img alt="Mirrors" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1618219944342-824e40a13285?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#050505]/40 flex items-center justify-center backdrop-blur-[1px]">
<span className="border border-white/30 backdrop-blur-md px-6 py-2 text-[10px] uppercase tracking-widest text-white rounded-full group-hover:bg-white group-hover:text-black transition-all">LED Collections</span>
</div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl font-normal tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">Mirrors <span className="text-gray-600 text-lg font-serif italic ml-2">LED &amp; Frame</span></h3>
<span className="text-sm font-medium text-white bg-white/5 px-2 py-1 rounded">Touch</span>
</div>
<div className="flex justify-between items-center pt-4 border-t border-white/5 text-sm text-gray-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:mirror-left-linear" width="16"></iconify-icon> Smart Features</span>
<span className="font-medium text-[#D4AF37]">Explore</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="specs">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-6 p-8 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/10 text-[#D4AF37]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-3">Premium Durability</h4>
<p className="text-sm text-gray-400 leading-relaxed">Sourced from the finest materials, our stone and ceramic products are built to withstand the test of time and trends.</p>
</div>
</div>
<div className="space-y-6 p-8 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/10 text-[#D4AF37]">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-3">Exquisite Finishes</h4>
<p className="text-sm text-gray-400 leading-relaxed">From matte black fixtures to gold-framed mirrors, find the perfect finish to elevate your interior design.</p>
</div>
</div>
<div className="space-y-6 p-8 rounded-2xl hover:bg-white/5 transition-colors duration-500 border border-transparent hover:border-white/5">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center border border-white/10 text-[#D4AF37]">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-3">Ready Stock</h4>
<p className="text-sm text-gray-400 leading-relaxed">Visit our massive showroom in Dragon Mart. Huge inventory available for immediate project requirements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#030303]" id="contact">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<span className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Get In Touch</span>
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 text-white">Project Inquiry</h2>
<p className="text-gray-400 font-light">Contact our team for bulk orders or specific requirements.</p>
</div>
<div className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="name">Full Name</label>
<input className="input-premium w-full px-4 py-3 rounded-lg text-white font-light placeholder-gray-600 focus:outline-none" id="name" placeholder="e.g. John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="phone">Phone Number</label>
<input className="input-premium w-full px-4 py-3 rounded-lg text-white font-light placeholder-gray-600 focus:outline-none" id="phone" placeholder="+971 50 000 0000" type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="interest">Product Interest</label>
<div className="relative">
<select className="input-premium w-full px-4 py-3 rounded-lg text-white font-light appearance-none cursor-pointer focus:outline-none" id="interest">
<option className="bg-[#121212] text-gray-300">Stone Items</option>
<option className="bg-[#121212] text-gray-300">WC &amp; Sanitary</option>
<option className="bg-[#121212] text-gray-300">Cabinets</option>
<option className="bg-[#121212] text-gray-300">Mirrors</option>
<option className="bg-[#121212] text-gray-300">General Inquiry</option>
</select>
<div className="absolute right-4 top-3.5 pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-semibold" htmlFor="message">Message</label>
<textarea className="input-premium w-full px-4 py-3 rounded-lg text-white font-light placeholder-gray-600 focus:outline-none resize-none" id="message" placeholder="How can we help you?" rows="3"></textarea>
</div>
<div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-xs text-gray-500 text-center md:text-left">Visit us at Dragon Mart -1, Dubai.<br/>Call us: +971 56 681 0392.</p>
<button className="btn-premium text-[#050505] font-bold text-sm tracking-widest uppercase px-10 py-4 rounded w-full md:w-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-shadow" type="button">
                            Submit Inquiry
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-white font-serif text-2xl tracking-tighter hover:text-[#D4AF37] transition-colors duration-300 block mb-4" href="#">
                        KHAN HOME
                    </a>
<p className="text-gray-500 text-xs leading-relaxed">
                        Dragon mart -1, 1st Floor, <br/>Shop# DHFF-11 18-19<br/>International City, Dubai, UAE
                    </p>
</div>
<div>
<h5 className="text-white text-sm font-serif mb-4">Explore</h5>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#categories">All Categories</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Clearance Products</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Main Products</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-serif mb-4">Connect</h5>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">YouTube</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">TikTok</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-serif mb-4">Service</h5>
<ul className="space-y-2 text-xs text-gray-500">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#track">Track Order</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Return Policy</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-gray-600 text-[10px] uppercase tracking-widest">
                    © 2023 Khan Home Building Materials. All rights reserved.
                </div>
<div className="flex items-center gap-4">
<a className="opacity-50 hover:opacity-100 transition-opacity" href="#"><img alt="App Store" className="h-8" src="https://www.khanhome.ae/app_store.png"/></a>
<a className="opacity-50 hover:opacity-100 transition-opacity" href="#"><img alt="Play Store" className="h-8" src="https://www.khanhome.ae/playstore.png"/></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
