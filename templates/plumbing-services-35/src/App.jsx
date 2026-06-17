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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 text-white group cursor-pointer overflow-hidden" href="#home">
<div className="bg-gradient-to-br from-orange-400 to-orange-600 p-1.5 rounded-lg shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300 shrink-0">
<iconify-icon className="text-white text-xl" icon="solar:wrench-linear"></iconify-icon>
</div>

<span className="text-sm md:text-base font-semibold tracking-tight whitespace-nowrap truncate">Tonka Plumbing Heating &amp; Cooling Inc</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-xs font-medium text-white hover:text-orange-400 transition-colors tracking-wide" href="#home">Home</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#about">About</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#services">Services</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#quote">Pricing</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors tracking-wide" href="#blog">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-white text-slate-950 hover:bg-slate-200 px-5 py-2.5 rounded-full text-xs font-semibold transition-all flex items-center gap-2 border border-transparent hover:border-slate-300 shrink-0" href="#contact">
<span>Contact Us</span>
<iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950" id="home">

<div className="absolute inset-0 z-0">
<img alt="Plumbing Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
</div>
<div className="grid lg:grid-cols-2 w-full max-w-7xl z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-20 gap-y-20 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-orange-400 font-medium tracking-wide uppercase text-xs">#1 Trusted Service</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
                    Mastering Home Flow, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Live Boldly.</span>
</h1>
<p className="text-slate-400 text-lg max-w-md leading-relaxed">
                    Premium plumbing solutions for the modern home. Fast, reliable, and impeccably clean service.
                </p>
<div className="flex items-center gap-6 pt-4 border-t border-white/10">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-slate-950 ring-2 ring-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-slate-950 ring-2 ring-white/10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-slate-950 ring-2 ring-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-medium text-white ring-2 ring-white/10">2k+</div>
</div>
<div>
<div className="flex items-center gap-1 text-orange-400 mb-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-white font-semibold ml-1 text-sm">4.9</span>
</div>
<p className="text-slate-500 text-xs">Trusted by homeowners worldwide</p>
</div>
</div>
</div>

<div className="glass p-8 rounded-3xl text-white shadow-2xl shadow-black/50 relative overflow-hidden group" id="quote">
<div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-xl font-semibold tracking-tight mb-2">Request Service</h3>
<p className="text-slate-400 text-xs mb-8 leading-relaxed">Book a free appointment with our experts. No fees, no pressure, just professional advice.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">First name</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm placeholder:text-slate-600" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Last name</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm placeholder:text-slate-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Email</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm placeholder:text-slate-600" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Phone</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm placeholder:text-slate-600" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-slate-400">Service Required</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm appearance-none text-white cursor-pointer">
<option className="text-slate-900">Plumbing Repair</option>
<option className="text-slate-900">Installation</option>
<option className="text-slate-900">Maintenance</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Message</label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-3 py-2.5 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all text-sm resize-none placeholder:text-slate-600" placeholder="Describe your issue..." rows="2"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-medium py-3 rounded-xl mt-2 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2" type="button">
<span>Submit Request</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</header>

<div className="bg-slate-950 border-y border-white/5 py-8 overflow-hidden whitespace-nowrap relative z-20">
<div className="flex items-center gap-16 text-slate-400/40 font-semibold text-2xl tracking-tight animate-marquee">
<span className="flex items-center gap-4">PLUMBING INSPECTION <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4">FAUCET INSTALLATION <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4">MACHINE REPAIR <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4">GAS LINE INSTALLATION <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4">DRAIN CLEANING <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4">PLUMBING INSPECTION <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
<span className="flex items-center gap-4">FAUCET INSTALLATION <iconify-icon className="text-orange-500" icon="solar:star-linear"></iconify-icon></span>
</div>
</div>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-slate-100">
<div className="text-center group">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tighter group-hover:text-orange-500 transition-colors">98<span className="text-orange-500 text-3xl align-top">%</span></p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Customer satisfaction</p>
</div>
<div className="text-center pl-12 group">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tighter group-hover:text-orange-500 transition-colors">20<span className="text-orange-500 text-3xl align-top">M+</span></p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Repairs Completed</p>
</div>
<div className="text-center pl-12 group">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tighter group-hover:text-orange-500 transition-colors">55<span className="text-orange-500 text-3xl align-top">%</span></p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">YoY Growth</p>
</div>
<div className="text-center pl-12 group">
<p className="text-5xl font-semibold text-slate-900 mb-2 tracking-tighter group-hover:text-orange-500 transition-colors">100<span className="text-orange-500 text-3xl align-top">%</span></p>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Success Rate</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50/50 py-32" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-slate-900"></span>
<span className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">Our Values</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Why we are the <br/> <span className="text-slate-400">logical choice.</span>
</h2>
<div className="space-y-6">
<div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100">
<div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-green-600 text-xl" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-green-600 transition-colors">Reliable Expertise</h4>
<p className="text-sm text-slate-500 leading-relaxed">Certified professionals with years of field experience.</p>
</div>
</div>
<div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-600 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">Prompt &amp; Clean</h4>
<p className="text-sm text-slate-500 leading-relaxed">We respect your time and your space, leaving no mess behind.</p>
</div>
</div>
<div className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 border border-transparent hover:border-slate-100">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-orange-600 text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">Transparent Pricing</h4>
<p className="text-sm text-slate-500 leading-relaxed">Upfront quotes with no hidden fees or surprises.</p>
</div>
</div>
</div>
</div>
<div className="relative order-1 lg:order-2 group">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-xl opacity-50"></div>
<div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-white">
<img alt="Water flowing from faucet" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto mb-20 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
<span className="text-orange-600 text-[10px] font-bold tracking-widest uppercase">Our Services</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                    Holistic Plumbing Solutions.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed font-light">
                    One trusted provider for residential and commercial needs. Professionalism, speed, and care in every job.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon className="text-slate-900 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-slate-300 font-mono text-xs mb-6 block">/01</span>
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Plumbing Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fixing leaking pipes and restoring water flow with expert care.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon className="text-slate-900 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-slate-300 font-mono text-xs mb-6 block">/02</span>
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Inspection</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complete pipe and drain check to detect and prevent future issues.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon className="text-slate-900 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-slate-300 font-mono text-xs mb-6 block">/03</span>
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Machine Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">Repairing household machines to restore full and safe functionality.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon className="text-slate-900 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-slate-300 font-mono text-xs mb-6 block">/04</span>
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Toilet Installation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Installing new toilets with clean, secure, and water-efficient setup.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon className="text-slate-900 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-slate-300 font-mono text-xs mb-6 block">/05</span>
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:drop-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Faucet Setup</h3>
<p className="text-sm text-slate-500 leading-relaxed">Precise faucet installation for smooth water flow and leak prevention.</p>
</div>
<div className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
<iconify-icon className="text-slate-900 text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-slate-300 font-mono text-xs mb-6 block">/06</span>
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:water-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Bathtub Install</h3>
<p className="text-sm text-slate-500 leading-relaxed">Installing bathtubs for a clean finish and maximum bathing comfort.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
<span className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">FAQ</span>
</div>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Common Questions</h2>
<p className="text-slate-500 mt-4 text-base font-light">Clear answers to your doubts about pricing and scheduling.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-orange-500/30" open="">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<h3 className="font-medium text-slate-900 text-base">What services do you offer?</h3>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-slate-400 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            We offer comprehensive plumbing services including leak detection, pipe repair, installation of fixtures (toilets, faucets, bathtubs), and emergency maintenance for both residential and commercial properties.
                        </p>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-orange-500/30">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<h3 className="font-medium text-slate-900 text-base">Are your plumbers licensed?</h3>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-slate-400 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            Yes, all our plumbers are fully licensed, insured, and undergo rigorous training to ensure the highest standards of safety and quality in every job.
                        </p>
</div>
</details>

<details className="group bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-orange-500/30">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none">
<h3 className="font-medium text-slate-900 text-base">Do you handle emergencies?</h3>
<span className="transform transition-transform duration-300 group-open:rotate-45">
<iconify-icon className="text-slate-400 text-xl" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                            Absolutely. We have a dedicated 24/7 emergency response team ready to tackle urgent plumbing issues to prevent water damage to your property.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
<span className="text-slate-600 text-[10px] font-bold tracking-widest uppercase">Insights</span>
</div>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Latest Updates</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-orange-500 transition-colors" href="#">
                    View all posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative h-64 rounded-2xl overflow-hidden mb-6">
<img alt="Blog 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 18 Jan 2025</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-line-linear"></iconify-icon> 4 Comments</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">Preventing Pipe Corrossion</h3>
<p className="text-sm text-slate-500 line-clamp-2">Learn the best maintenance practices to extend the life of your plumbing system and avoid costly repairs.</p>
</div>

<div className="group cursor-pointer">
<div className="relative h-64 rounded-2xl overflow-hidden mb-6">
<img alt="Blog 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 15 Jan 2025</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-line-linear"></iconify-icon> 2 Comments</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">Eco-Friendly Water Systems</h3>
<p className="text-sm text-slate-500 line-clamp-2">Discover modern solutions for reducing water waste and lowering your monthly utility bills effectively.</p>
</div>

<div className="group cursor-pointer">
<div className="relative h-64 rounded-2xl overflow-hidden mb-6">
<img alt="Blog 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 10 Jan 2025</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:chat-line-linear"></iconify-icon> 8 Comments</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors">Emergency Response Guide</h3>
<p className="text-sm text-slate-500 line-clamp-2">What to do immediately when a pipe bursts before the professionals arrive at your doorstep.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-400 mb-10 tracking-widest uppercase">Trusted by 50,000+ businesses</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> ACME.CO</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:layers-linear"></iconify-icon> STACK</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:infinite-linear"></iconify-icon> INFINITY</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:atom-linear"></iconify-icon> NUCLEUS</div>
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><iconify-icon icon="solar:planet-linear"></iconify-icon> GLOBE</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="bg-white/10 p-1.5 rounded-lg">
<iconify-icon className="text-white text-lg" icon="solar:wrench-linear"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight">Tonka Plumbing Heating &amp; Cooling Inc</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Expert repairs &amp; maintenance delivered with efficiency to ensure your home runs smoothly.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-6 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 tracking-tight">Resources</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#blog">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#quote">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6 tracking-tight">Contact</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
                            (952) 472-9200
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-slate-600">© 2025 Tonka Plumbing Heating &amp; Cooling Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:earth-linear"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:basketball-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
