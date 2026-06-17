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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue
600: '#0284c7',
900: '#0c4a6e', // Deep Navy
950: '#082f49',
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}

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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between"> 
<div className="flex items-center gap-2.5 group cursor-pointer">

<img alt="Blue Dragon Plumbing" className="h-12 w-auto object-contain" src="https://nebula.wsimg.com/1188b2c49936baf8bdae45d415633f60?AccessKeyId=0AFBE8378C2E998DABFC&amp;disposition=0&amp;alloworigin=1"/>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#gallery">Work</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end mr-2">
<span className="text-[10px] uppercase font-semibold text-slate-400 tracking-wider">Emergency 24/7</span>
<a className="text-sm font-semibold text-slate-900 hover:text-brand-600 tracking-tight" href="tel:512-947-2491">512-947-2491</a>
</div>
<button className="bg-brand-950 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-900/10 flex items-center gap-2 hover:shadow-xl hover:-translate-y-0.5">
<span className="">Request Service</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<img alt="Modern Bathroom Plumbing" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/p/AF1QipPjV00AI04AkLvIgBdCLy1KGuWRORfRgvbbOpqY=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="grid lg:grid-cols-2 z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-white text-xs font-medium tracking-wide uppercase">Serving Austin, TX &amp; Surrounding Areas</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1]">
                    Professional plumbing done right.
                </h1>
<p className="text-lg text-slate-300 max-w-lg font-light leading-relaxed">
                    From emergency leaks to water heater installations, Blue Dragon Plumbing provides trusted, licensed service for your home and business.
                </p>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-brand-950 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-brand-950 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Customer" className="w-10 h-10 rounded-full border-2 border-brand-950 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-brand-950 bg-slate-800 flex items-center justify-center text-xs text-white font-medium">+2k</div>
</div>
<div>
<div className="flex items-center gap-1 text-yellow-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-300 text-xs mt-1 font-medium">Trusted by Austin Neighbors</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-cyan-400"></div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Schedule Service</h3>
<p className="text-slate-500 text-sm mb-6">Get a free estimate for your plumbing needs.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">First name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder-slate-400" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Last name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 placeholder-slate-400" placeholder="(512) 947-2491" type="tel"/>
</div>
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-slate-700">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-slate-900 appearance-none cursor-pointer">
<option>General Repair</option>
<option>Water Heater Service</option>
<option>Drain Cleaning</option>
<option>Fixture Replacement</option>
<option>Emergency Service</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-brand-950 hover:bg-slate-800 text-white font-medium py-3 rounded-lg mt-2 transition-all shadow-md flex items-center justify-center gap-2 group" type="button">
<span>Get Free Quote</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-400 mt-3">Licensed, Bonded &amp; Insured • Satisfaction Guaranteed</p>
</form>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-100 py-6 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 grayscale opacity-60">
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg">
<iconify-icon className="text-brand-900" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span>Licensed #M-39981</span>
</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg">
<iconify-icon className="text-brand-900" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span>24/7 Emergency</span>
</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg">
<iconify-icon className="text-brand-900" icon="solar:map-point-linear" width="24"></iconify-icon>
<span>Austin Owned</span>
</div>
<div className="flex items-center gap-2 font-semibold text-slate-900 text-lg">
<iconify-icon className="text-brand-900" icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
<span>30+ Years Exp.</span>
</div>
</div>
</div>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="about">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
<div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-semibold uppercase tracking-wider mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> About Blue Dragon Plumbing
                </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tighter leading-tight mb-6">
                    Austin's premier family-owned plumbing service.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8 font-light">
                    We understand that plumbing issues can be stressful. Whether you need a simple faucet installation or a complete water heater replacement, Blue Dragon Plumbing delivers reliable, high-quality service with a personal touch. Serving Austin, Georgetown, and San Marcos.
                </p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center text-brand-600 mb-2">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold text-sm">Reliable Expertise</h4>
<p className="text-slate-500 text-xs leading-relaxed">Experienced technicians who diagnose issues correctly the first time.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center text-brand-600 mb-2">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold text-sm">Transparent Pricing</h4>
<p className="text-slate-500 text-xs leading-relaxed">Upfront quotes with no hidden fees or surprise charges.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center text-brand-600 mb-2">
<iconify-icon icon="solar:broom-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold text-sm">Clean Service</h4>
<p className="text-slate-500 text-xs leading-relaxed">We treat your home with respect and leave it spotless.</p>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="bg-brand-50 w-10 h-10 rounded-lg flex items-center justify-center text-brand-600 mb-2">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h4 className="text-slate-900 font-semibold text-sm">Customer First</h4>
<p className="text-slate-500 text-xs leading-relaxed">Your satisfaction is our priority. We exceed expectations.</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 relative z-10 bg-slate-200">

<img alt="Plumbing Van" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/p/AF1QipNoFeOH55Ct_trT8djeewri_e6vuOtu4pQehhh3=s1360-w1360-h1020-rw"/>

<div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-xl flex items-center justify-between">
<div>
<p className="text-slate-900 font-semibold text-sm">Fleet Ready</p>
<p className="text-slate-500 text-xs">Arriving On Time, Every Time</p>
</div>
<div className="bg-brand-500 text-white p-2 rounded-lg">
<iconify-icon icon="solar:van-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-slate-200 rounded-2xl -z-0"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<span className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                    Comprehensive plumbing solutions for home &amp; office.
                </h2>
<p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl">
                    We offer a wide range of residential and commercial services to meet your needs, ensuring your water systems run smoothly.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group cursor-default">
<div className="mb-6 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Drain Cleaning</h3>
<p className="text-slate-500 text-sm leading-relaxed">Professional unclogging and cleaning to prevent backups and maintain healthy pipes.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group cursor-default">
<div className="mb-6 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Water Heater Repair</h3>
<p className="text-slate-500 text-sm leading-relaxed">Repair and installation of tankless and traditional water heaters for consistent hot water.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group cursor-default">
<div className="mb-6 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wrench-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Fixture Replacement</h3>
<p className="text-slate-500 text-sm leading-relaxed">Update your kitchen or bath with expert installation of faucets, sinks, and garbage disposals.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group cursor-default">
<div className="mb-6 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:water-drop-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Leak Detection</h3>
<p className="text-slate-500 text-sm leading-relaxed">Advanced detection and repair of water leaks and water line breaks to protect your property.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group cursor-default">
<div className="mb-6 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:flame-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Gas Line Services</h3>
<p className="text-slate-500 text-sm leading-relaxed">Certified repair and replacement of appliance gas lines and annual commercial inspections.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300 group cursor-default">
<div className="mb-6 bg-brand-50 w-12 h-12 rounded-lg flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">Commercial Maintenance</h3>
<p className="text-slate-500 text-sm leading-relaxed">Annual plumbing system maintenance plans to keep your business running without interruption.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<span className="text-brand-600 font-semibold text-sm tracking-wide uppercase mb-2 block">Recent Work</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                        Quality workmanship you can see.
                    </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors" href="#contact">
                    View More Projects <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-3 gap-6 auto-rows-[240px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Water Heater Installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/p/AF1QipPr_26JVracPdaQ9rsvn9KSGrIEuz3YDyORHSmD=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Installation &amp; Repair</span>
</div>
</div>

<div className="md:row-span-2 relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Complex Piping" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/p/AF1QipOiOllGkswMVT3erNO_ZRtLr8cS5yySuQOUaxzW=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Precision Piping</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Trench Line Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/p/AF1QipOJ_-5dSku8um-uQBEpT1YPJ_nKAczyRsASQ11Z=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Excavation Services</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Valve Manifold" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/p/AF1QipNDos_jWpvPaYuKmQ4bhiz69dskpODD-7QUcWPy=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">System Maintenance</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Rough In Plumbing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/p/AF1QipNKKGcEpZ-IwmsKoUQbjX4W2EDZdNZFtxrSsYBK=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Rough-In</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-slate-100">
<img alt="Water Heater" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/p/AF1QipMojR_gV-oJT85s6UUuCgPfZx3B5MGkcFWO4kR8=s1360-w1360-h1020-rw"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Replacement</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-950 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
<div className="px-4">
<p className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight">30<span className="text-brand-500 text-3xl align-top">+</span></p>
<p className="text-slate-400 text-sm font-medium">Years Experience</p>
</div>
<div className="px-4">
<p className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight">15k<span className="text-brand-500 text-3xl align-top">+</span></p>
<p className="text-slate-400 text-sm font-medium">Jobs Completed</p>
</div>
<div className="px-4">
<p className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight">24<span className="text-brand-500 text-3xl align-top">/7</span></p>
<p className="text-slate-400 text-sm font-medium">Emergency Support</p>
</div>
<div className="px-4">
<p className="text-4xl md:text-5xl font-semibold mb-2 tracking-tight">100<span className="text-brand-500 text-3xl align-top">%</span></p>
<p className="text-slate-400 text-sm font-medium">Satisfaction Guaranteed</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                Need immediate plumbing assistance?
            </h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">
                Don't let a leak become a flood. Contact Blue Dragon Plumbing for prompt, professional service in Austin and surrounding areas.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-700 text-white px-8 py-3.5 rounded-full font-medium transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call 512-947-2491
                </button>
<button className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-3.5 rounded-full font-medium transition-colors flex items-center justify-center gap-2">
                    Request Appointment
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="block">
<img alt="Blue Dragon Plumbing" className="h-14 w-auto object-contain" src="https://nebula.wsimg.com/1188b2c49936baf8bdae45d415633f60?AccessKeyId=0AFBE8378C2E998DABFC&amp;disposition=0&amp;alloworigin=1"/>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Your trusted partner for residential and commercial plumbing needs in Austin, TX. Licensed, Bonded &amp; Insured.
                    </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="bi:facebook" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="bi:instagram" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="bi:twitter-x" width="18"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm uppercase tracking-wide">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Water Heaters</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Leak Detection</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Fixture Installation</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Commercial Plumbing</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm uppercase tracking-wide">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm uppercase tracking-wide">Contact</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 shrink-0 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>Austin, TX<br/>Serving Greater Austin Area</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600 shrink-0" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="tel:512-947-2491">512-947-2491</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600 shrink-0" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="mailto:info@bluedragonplumbing.com">info@bluedragonplumbing.com</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-600 shrink-0" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>Mon-Fri: 8am - 6pm<br/>Sat-Sun: Emergency Only</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">Copyright © 2025 Blue Dragon Plumbing. All Rights Reserved. Lic #M-39981</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-500">System Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
