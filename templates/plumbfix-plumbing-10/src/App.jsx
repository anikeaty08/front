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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="bg-orange-500 p-1.5 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="wrench"></i>
</div>
<span className="text-xl font-semibold tracking-tight">PlumbFix</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">Contact</a>
</div>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                Contact Us
                <i className="w-4 h-4" data-lucide="phone"></i>
</button>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Plumbing Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&amp;w=2673&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-900/80 to-sky-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-medium tracking-wide uppercase text-sm">#Your Trusted Plumbing Service</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">
                    Mastering Home Flow, So You Can Live Boldly.
                </h1>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-4">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-sky-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-3xl font-semibold text-white">4.8</span>
<div className="flex text-orange-500">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-slate-300 text-sm">4.9/5 rating from 210+ reviews</p>
</div>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Request a service</h3>
<p className="text-slate-300 text-sm mb-8">Book a free appointment with our plumbing experts no fees, no pressure, just honest, professional advice.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">First name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Last name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Phone No</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Company Name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-medium text-slate-300">Choice Service</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">Plumbing Repair</option>
<option className="text-slate-900">Installation</option>
</select>
<i className="w-4 h-4 absolute right-0 bottom-3 text-slate-300 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium text-slate-300">Write your message</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" rows="1"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-full mt-4 transition-colors" type="button">
                        Request a service
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-12 text-white font-semibold text-xl md:text-2xl tracking-tight animate-marquee justify-center">
<span>Plumbing Inspection</span>
<span className="text-orange-500">•</span>
<span>Faucet Installation</span>
<span className="text-orange-500">•</span>
<span>Machine Repair</span>
<span className="text-orange-500">•</span>
<span>Gas Line Installation</span>
<span className="text-orange-500">•</span>
<span>Drain Cleaning</span>
</div>
</div>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-semibold text-sky-900 mb-2">98<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-medium">Customer satisfaction</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-semibold text-sky-900 mb-2">20M<span className="text-orange-500 text-2xl align-top">+</span></p>
<p className="text-slate-500 text-sm font-medium">Repairs Completed</p>
</div>
<div className="text-center md:border-r border-slate-200">
<p className="text-4xl md:text-5xl font-semibold text-sky-900 mb-2">55<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-medium">Growth year-over-year</p>
</div>
<div className="text-center">
<p className="text-4xl md:text-5xl font-semibold text-sky-900 mb-2">100<span className="text-orange-500 text-2xl align-top">%</span></p>
<p className="text-slate-500 text-sm font-medium">Monthly Jobs Completed</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">OUR VALUES</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-sky-950 tracking-tight leading-tight mb-8">
                    What makes us the right choice for you
                </h2>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1">
<i className="w-3 h-3 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-sky-900 font-medium">Reliable Expertise</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1">
<i className="w-3 h-3 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-sky-900 font-medium">Prompt &amp; Clean Service</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1">
<i className="w-3 h-3 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-sky-900 font-medium">Transparent Pricing</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1">
<i className="w-3 h-3 text-white stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-xl text-sky-900 font-medium">Customer-First Approach</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Water flowing from faucet" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-semibold text-sky-950 tracking-tight mb-4">
                    One Plumbing Partner for Your Home and Your Office.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    Simplify your plumbing needs with one trusted provider that handles residential and commercial jobs with professionalism, speed, and care.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">01.</span>
<div className="mb-6">
<i className="w-10 h-10 text-sky-700 stroke-1" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Plumbing Repair</h3>
<p className="text-slate-500 leading-relaxed">Fixing leaking pipes and restoring water flow with expert plumbing care.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">02.</span>
<div className="mb-6">
<i className="w-10 h-10 text-sky-700 stroke-1" data-lucide="search"></i>
</div>
<h3 className="text-xl font-semibold text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Plumbing Inspection</h3>
<p className="text-slate-500 leading-relaxed">Complete pipe and drain check to detect and prevent future issues.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">03.</span>
<div className="mb-6">
<i className="w-10 h-10 text-sky-700 stroke-1" data-lucide="settings"></i>
</div>
<h3 className="text-xl font-semibold text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Machine Repair</h3>
<p className="text-slate-500 leading-relaxed">Repairing household machines to restore full and safe functionality.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">04.</span>
<div className="mb-6">
<i className="w-10 h-10 text-sky-700 stroke-1" data-lucide="bath"></i>
</div>
<h3 className="text-xl font-semibold text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Toilet Installation</h3>
<p className="text-slate-500 leading-relaxed">Installing new toilets with clean, secure, and water-efficient setup.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">05.</span>
<div className="mb-6">
<i className="w-10 h-10 text-sky-700 stroke-1" data-lucide="droplets"></i>
</div>
<h3 className="text-xl font-semibold text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Faucet Installation</h3>
<p className="text-slate-500 leading-relaxed">Precise faucet installation for smooth water flow and leak prevention.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-medium text-sm mb-4 block">06.</span>
<div className="mb-6">
<i className="w-10 h-10 text-sky-700 stroke-1" data-lucide="waves"></i>
</div>
<h3 className="text-xl font-semibold text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Bathtub Installation</h3>
<p className="text-slate-500 leading-relaxed">Installing bathtubs for a clean finish and maximum bathing comfort.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">FAQ</span>
<h2 className="text-3xl md:text-4xl font-semibold text-sky-950 tracking-tight">
                    Frequently asked questions
                </h2>
<p className="text-slate-500 mt-4 text-lg">Find clear answers to common questions about our services, pricing, and scheduling process.</p>
</div>
<div className="space-y-4">

<div className="bg-slate-100 rounded-lg p-6">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-semibold text-sky-950 text-lg">What services do you offer?</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="x"></i>
</div>
<p className="mt-3 text-slate-500 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur molestie ullamcorper elit non diam at pharetra integer non fringilla non cras sapien rutrum Maecenas.
                    </p>
</div>

<div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-sky-950 text-lg group-hover:text-sky-800">Are your plumbers licensed?</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-sky-950 text-lg group-hover:text-sky-800">Do you handle emergencies?</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-sky-950 text-lg group-hover:text-sky-800">What services do you offer?</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-sky-950 text-lg group-hover:text-sky-800">Are your plumbers licensed?</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-6 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-semibold text-sky-950 text-lg group-hover:text-sky-800">Do you handle emergencies?</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">BLOG</span>
<h2 className="text-3xl md:text-4xl font-semibold text-sky-950 tracking-tight mb-4">
                    Check Our Latest Blogs
                </h2>
<p className="text-lg text-slate-500">
                    Explore expert tips, service updates, and helpful guides in our latest plumbing blog posts.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Blog 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> 18 Jan 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-circle"></i> Comments</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Feedback title goes here</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Read Full Article</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Blog 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> 18 Jan 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-circle"></i> Comments</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Feedback title goes here</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Read Full Article</span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Blog 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-4 text-xs text-white/80 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> 18 Jan 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="message-circle"></i> Comments</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2 leading-tight">Feedback title goes here</h3>
<span className="inline-block text-white/90 text-sm border-b border-white/40 pb-0.5 group-hover:border-white transition-colors">Read Full Article</span>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<span className="w-2.5 h-2.5 rounded-full bg-sky-900"></span>
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Trusted by 50,000+ businesses to scale outbound sales and drive new revenue</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">

<div className="flex items-center gap-2 font-bold text-xl"><i className="fill-current" data-lucide="box"></i> Logoipsum</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="fill-current" data-lucide="circle"></i> LOOO</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="fill-current" data-lucide="triangle"></i> IIIIPW</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="fill-current" data-lucide="hexagon"></i> Logoipsum</div>
<div className="flex items-center gap-2 font-bold text-xl"><i className="fill-current" data-lucide="aperture"></i> LOGO</div>
</div>
</div>
</section>

<footer className="bg-sky-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="bg-orange-500 p-1.5 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="wrench"></i>
</div>
<span className="text-xl font-semibold tracking-tight">PlumbFix</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        We handle repairs &amp; maintenance for all appliances with expertise &amp; efficiency to ensure your appliances.
                    </p>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Home</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> About Us</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Services</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Pricing</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Blog</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="phone"></i>
                            (07)45394507
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="mail"></i>
                            emailaddress@email.com
                        </li>
</ul>
</div>

<div>
<h4 className="font-semibold text-white mb-6">Office Location</h4>
<p className="text-sm text-slate-400 leading-relaxed">
                        775 Rolling Green Rd.<br/>
                        8080 Railroad St.
                    </p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2025 Plumb Fix, All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="x"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
