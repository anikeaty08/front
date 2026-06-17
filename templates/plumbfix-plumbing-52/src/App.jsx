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
      

<div className="relative w-full min-h-screen lg:min-h-[800px] bg-slate-900 overflow-hidden">

<div className="absolute inset-0">
<img alt="Plumber background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
</div>

<header className="relative z-20 w-full border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2 text-white">
<div className="bg-orange-500 p-1.5 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="wrench"></i>
</div>
<span className="text-xl font-semibold tracking-tight">PlumbFix</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white border-b-2 border-orange-500 pb-0.5" href="#">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Contact</a>
</nav>

<a className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2" href="#">
                    Contact Us
                    <i className="w-4 h-4" data-lucide="phone"></i>
</a>
</div>
</header>

<div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-medium text-sm tracking-wide uppercase">#Your Trusted Plumbing Service</span>
<h1 className="text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                    Mastering Home Flow, So You Can Live Boldly.
                </h1>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-3xl font-semibold text-white">4.8</span>
<div className="flex gap-0.5 text-orange-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-400 text-sm">4.9/5 rating from 210+ reviews</p>
</div>
</div>
</div>

<div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Request a service</h3>
<p className="text-slate-300 text-sm mb-8 leading-relaxed">Book a free appointment with our plumbing experts no fees, no pressure, just honest, professional advice.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">First name</label>
<input className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none transition-colors" placeholder="" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">Last name</label>
<input className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none transition-colors" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none transition-colors" placeholder="" type="email"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">Phone No</label>
<input className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none transition-colors" placeholder="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">Company Name</label>
<input className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none transition-colors" placeholder="" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">Choice Service</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none appearance-none cursor-pointer">
<option className="bg-slate-800 text-white">Repair</option>
<option className="bg-slate-800 text-white">Installation</option>
</select>
<i className="absolute right-0 bottom-3 w-4 h-4 text-slate-300 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="group">
<label className="block text-xs font-medium text-slate-300 mb-1">Write your message</label>
<input className="w-full bg-transparent border-b border-slate-500 focus:border-orange-500 text-white pb-2 outline-none transition-colors" placeholder="" type="text"/>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg shadow-lg hover:shadow-orange-500/20 transition-all">
                        Request a service
                    </button>
</form>
</div>
</div>
</div>

<div className="bg-sky-950 py-5 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-12 animate-marquee text-white text-lg font-medium tracking-wide">
<span className="flex items-center gap-3">Plumbing Inspection <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>
<span className="flex items-center gap-3">Faucet Installation <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>
<span className="flex items-center gap-3">Machine Repair <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>
<span className="flex items-center gap-3">Gas Line Install <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>

<span className="flex items-center gap-3 hidden md:flex">Plumbing Inspection <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>
<span className="flex items-center gap-3 hidden md:flex">Faucet Installation <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>
<span className="flex items-center gap-3 hidden lg:flex">Machine Repair <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50"></span></span>
</div>
</div>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-200">
<div className="text-center md:text-left md:px-6 first:pl-0">
<p className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight">98<span className="text-orange-500 text-4xl align-top">%</span></p>
<p className="mt-2 text-sm text-slate-500 font-medium">Customer satisfaction</p>
</div>
<div className="text-center md:text-left md:px-6">
<p className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight">20M<span className="text-orange-500 text-4xl align-top">+</span></p>
<p className="mt-2 text-sm text-slate-500 font-medium">Repairs Completed</p>
</div>
<div className="text-center md:text-left md:px-6">
<p className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight">55<span className="text-orange-500 text-4xl align-top">%</span></p>
<p className="mt-2 text-sm text-slate-500 font-medium">Growth year-over-year</p>
</div>
<div className="text-center md:text-left md:px-6">
<p className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight">100<span className="text-orange-500 text-4xl align-top">%</span></p>
<p className="mt-2 text-sm text-slate-500 font-medium">Monthly Jobs Completed</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">OUR VALUES</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-8">
                        What makes us the <br/> right choice for you
                    </h2>
<ul className="space-y-6">
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
<i className="w-4 h-4 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-slate-700">Reliable Expertise</span>
</li>
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
<i className="w-4 h-4 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-slate-700">Prompt &amp; Clean Service</span>
</li>
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
<i className="w-4 h-4 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-slate-700">Transparent Pricing</span>
</li>
<li className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
<i className="w-4 h-4 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-slate-700">Customer-First Approach</span>
</li>
</ul>
</div>

<div className="relative">
<img alt="Faucet water splash" className="rounded-2xl shadow-xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">OUR SERVICES</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                    One Plumbing Partner for Your Home and Your Office.
                </h2>
<p className="text-lg text-slate-500">Simplify your plumbing needs with one trusted provider that handles residential and commercial jobs with professionalism, speed, and care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<span className="text-sky-600 text-sm font-semibold mb-4 block">01.</span>
<div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Plumbing Repair</h3>
<p className="text-slate-500 leading-relaxed text-base">Fixing leaking pipes and restoring water flow with expert plumbing care.</p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<span className="text-sky-600 text-sm font-semibold mb-4 block">02.</span>
<div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Plumbing Inspection</h3>
<p className="text-slate-500 leading-relaxed text-base">Complete pipe and drain check to detect and prevent future issues.</p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<span className="text-sky-600 text-sm font-semibold mb-4 block">03.</span>
<div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Machine Repair</h3>
<p className="text-slate-500 leading-relaxed text-base">Repairing household machines to restore full and safe functionality.</p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<span className="text-sky-600 text-sm font-semibold mb-4 block">04.</span>
<div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="bath"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Toilet Installation</h3>
<p className="text-slate-500 leading-relaxed text-base">Installing new toilets with clean, secure, and water-efficient setup.</p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<span className="text-sky-600 text-sm font-semibold mb-4 block">05.</span>
<div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Faucet Installation</h3>
<p className="text-slate-500 leading-relaxed text-base">Precise faucet installation for smooth water flow and leak prevention.</p>
</div>

<div className="group bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
<span className="text-sky-600 text-sm font-semibold mb-4 block">06.</span>
<div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="waves"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Bathtub Installation</h3>
<p className="text-slate-500 leading-relaxed text-base">Installing bathtubs for a clean finish and maximum bathing comfort.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">FAQ</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Frequently asked questions</h2>
<p className="text-lg text-slate-500">Find clear answers to common questions about our services, pricing, and scheduling process.</p>
</div>
<div className="space-y-4">

<div className="rounded-lg bg-slate-100 overflow-hidden">
<div className="flex items-center justify-between p-6 cursor-pointer bg-slate-200/50">
<h4 className="text-lg font-semibold text-slate-900">What services do you offer?</h4>
<i className="w-5 h-5 text-slate-500" data-lucide="x"></i>
</div>
<div className="p-6 pt-2 text-slate-500 text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur molestie ullamcorper elit non diam at pharetra integer non fringilla non cras sapien rutrum Maecenas.
                    </div>
</div>

<div className="rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
<div className="flex items-center justify-between p-6 cursor-pointer">
<h4 className="text-lg font-semibold text-slate-900">Are your plumbers licensed?</h4>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>

<div className="rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
<div className="flex items-center justify-between p-6 cursor-pointer">
<h4 className="text-lg font-semibold text-slate-900">Do you handle emergencies?</h4>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>

<div className="rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
<div className="flex items-center justify-between p-6 cursor-pointer">
<h4 className="text-lg font-semibold text-slate-900">What services do you offer?</h4>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>

<div className="rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
<div className="flex items-center justify-between p-6 cursor-pointer">
<h4 className="text-lg font-semibold text-slate-900">Are your plumbers licensed?</h4>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>

<div className="rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
<div className="flex items-center justify-between p-6 cursor-pointer">
<h4 className="text-lg font-semibold text-slate-900">Do you handle emergencies?</h4>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-6">BLOG</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">Check Our Latest Blogs</h2>
<p className="text-lg text-slate-500">Explore expert tips, service updates, and helpful guides in our latest plumbing blog posts.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group rounded-2xl overflow-hidden h-96 cursor-pointer shadow-lg">
<img alt="Blog 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-slate-300 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> 18 Jan 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-square"></i> Comments</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Feedback title goes here</h3>
<span className="text-white/80 text-sm border-b border-white/30 pb-0.5 inline-block group-hover:text-orange-400 group-hover:border-orange-400 transition-colors">Read Full Article</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden h-96 cursor-pointer shadow-lg">
<img alt="Blog 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-slate-300 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> 18 Jan 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-square"></i> Comments</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Feedback title goes here</h3>
<span className="text-white/80 text-sm border-b border-white/30 pb-0.5 inline-block group-hover:text-orange-400 group-hover:border-orange-400 transition-colors">Read Full Article</span>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden h-96 cursor-pointer shadow-lg">
<img alt="Blog 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-slate-300 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> 18 Jan 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-square"></i> Comments</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Feedback title goes here</h3>
<span className="text-white/80 text-sm border-b border-white/30 pb-0.5 inline-block group-hover:text-orange-400 group-hover:border-orange-400 transition-colors">Read Full Article</span>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-12">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-sky-900"></div>
<div className="w-2.5 h-2.5 rounded-full bg-sky-900"></div>
</div>
</div>
</section>

<div className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-semibold text-slate-500 mb-8 uppercase tracking-wide">Trusted by 50,000+ businesses to scale outbound sales and drive new revenue</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl text-slate-800"><i className="fill-current" data-lucide="box"></i> Logoipsum</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800 tracking-widest">LOQO</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800 italic">///ipsum</div>
<div className="flex items-center gap-2 font-serif text-xl text-slate-800">Logoipsum</div>
<div className="flex items-center gap-2 font-bold text-xl text-slate-800">LOGO!</div>
</div>
</div>
</div>

<footer className="bg-sky-950 text-white pt-20 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<div className="bg-orange-500 p-1.5 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="wrench"></i>
</div>
<span className="text-xl font-semibold tracking-tight">PlumbFix</span>
</div>
<p className="text-slate-300 text-sm leading-relaxed">
                        We handle repairs &amp; maintenance for all appliances with expertise &amp; efficiency to ensure your appliances.
                    </p>
</div>

<div>
<h5 className="font-semibold mb-6 text-white">Quick Links</h5>
<ul className="space-y-3 text-sm text-slate-300">
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-white/50"></span> Home</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-white/50"></span> About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-white/50"></span> Services</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-white/50"></span> Pricing</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-white/50"></span> Blog</a></li>
<li><a className="hover:text-orange-500 transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-white/50"></span> Contact</a></li>
</ul>
</div>

<div>
<h5 className="font-semibold mb-6 text-white">Contact Us</h5>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-orange-500" data-lucide="phone"></i>
                            (07)45394507
                        </li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-orange-500" data-lucide="mail"></i>
                            emailaddress@email.com
                        </li>
</ul>
</div>

<div>
<h5 className="font-semibold mb-6 text-white">Office Location</h5>
<ul className="space-y-4 text-sm text-slate-300">
<li className="leading-relaxed">
                            775 Rolling Green Rd.<br/>
                            8080 Railroad St.
                        </li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">Copyright © 2025 Plumb Fix, All Rights Reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
