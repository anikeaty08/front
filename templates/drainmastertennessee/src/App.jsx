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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/5 bg-slate-950/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-orange-500 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
<iconify-icon className="text-white text-xl" icon="solar:water-drops-bold"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-bold tracking-tight text-lg leading-none">DRAINMASTER</span>
<span className="text-slate-400 text-[10px] font-medium tracking-widest uppercase mt-0.5">Middle Tennessee</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-1">
<a className="px-5 py-2 text-sm font-medium text-white hover:text-orange-400 transition-colors" href="#">Home</a>
<a className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Services</a>
<a className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">About</a>
<a className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors" href="#">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:bg-orange-50 items-center gap-2 group shadow-xl shadow-white/5" href="tel:6153975300">
<iconify-icon className="text-lg text-orange-600 group-hover:rotate-12 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
                    615-397-5300
                </a>
<button className="lg:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-[900px] flex items-center pt-20 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">

<img alt="Plumbing Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-900/80"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-orange-400 font-medium tracking-wide uppercase text-[10px]">Available 24/7 in Middle TN</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]">
                    Mastering the flow of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">Tennessee</span> homes.
                </h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
                    From emergency leaks in Nashville to septic systems in Franklin. We are the licensed experts committed to keeping your plumbing running perfectly.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
<div className="bg-blue-500/20 p-2.5 rounded-lg text-blue-400">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-semibold">Fully Licensed</p>
<p className="text-slate-400 text-xs">TN State Certified</p>
</div>
</div>
<div className="flex items-center gap-3 border border-white/10 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
<div className="bg-green-500/20 p-2.5 rounded-lg text-green-400">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-white text-sm font-semibold">Fast Response</p>
<p className="text-slate-400 text-xs">Usually within 1 hr</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-300"></div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Get a Quick Quote</h3>
<p className="text-slate-400 text-sm mb-6">Describe your issue and we'll get back to you instantly.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-orange-500/50 focus:bg-white/10 focus:outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Phone</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-orange-500/50 focus:bg-white/10 focus:outline-none transition-all" placeholder="(615) ..." type="tel"/>
</div>
</div>
<div className="space-y-1.5 relative">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Issue Type</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-orange-500/50 focus:bg-white/10 focus:outline-none transition-all appearance-none cursor-pointer">
<option className="text-slate-900">Drain Clog / Cleaning</option>
<option className="text-slate-900">Leak Repair</option>
<option className="text-slate-900">Water Heater</option>
<option className="text-slate-900">Sewer Line</option>
<option className="text-slate-900">Emergency</option>
</select>
<iconify-icon className="absolute right-4 bottom-3.5 text-slate-400 pointer-events-none text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Details</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-orange-500/50 focus:bg-white/10 focus:outline-none transition-all resize-none" placeholder="Briefly describe what's happening..." rows="2"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-semibold py-4 rounded-xl mt-2 transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 group" type="button">
                            Request Priority Service
                            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<p className="text-center text-slate-500 text-[10px] mt-4">We respect your privacy. No spam.</p>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-orange-500 font-semibold tracking-wide uppercase text-xs">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">
                        Comprehensive solutions.
                    </h2>
<p className="text-lg text-slate-500 font-light">
                        We handle everything from minor residential repairs to major commercial plumbing infrastructure in Middle Tennessee.
                    </p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-orange-500 transition-colors" href="#">
                    View all services
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-9xl text-slate-900" icon="solar:water-drops-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-orange-500" icon="solar:water-drops-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Drain Cleaning</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Expert removal of blockages using snaking and advanced hydro-jetting technology to restore flow instantly.</p>
<ul className="space-y-2 mb-2">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Kitchen &amp; Bath Clogs
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Main Sewer Lines
                            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-9xl text-slate-900" icon="solar:bath-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-orange-500" icon="solar:bath-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Water Heaters</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Installation, repair, and maintenance of tankless and traditional water heating systems for endless hot water.</p>
<ul className="space-y-2 mb-2">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Tankless Upgrades
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Emergency Repair
                            </li>
</ul>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-9xl text-slate-900" icon="solar:wrench-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-100 flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-orange-500" icon="solar:wrench-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">General Plumbing</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">From leaky faucets to pipe replacements, we handle all general plumbing needs with precision and care.</p>
<ul className="space-y-2 mb-2">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Leak Detection
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Fixture Installation
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 left-1/2 w-full h-full bg-slate-950/50 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-20"></div>

<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
<img alt="Plumber Fixing Sink" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2662&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-3">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-700"></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-600"></div>
<div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-500 flex items-center justify-center text-xs font-medium">25</div>
</div>
<span className="text-xs font-medium text-slate-300">Verified Reviews</span>
</div>
<div className="flex items-center gap-1 text-orange-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white font-semibold mt-1">4.8 Star Rating</p>
</div>
</div>

<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8">
                        The plumber you can actually trust in your home.
                    </h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl text-orange-400" icon="solar:wallet-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2">Upfront Pricing</h4>
<p className="text-slate-400 font-light leading-relaxed">No surprises. We provide clear, flat-rate pricing before we start any work so you know exactly what to expect.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl text-orange-400" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2">Respect For Your Home</h4>
<p className="text-slate-400 font-light leading-relaxed">We wear shoe covers, use work mats, and clean up thoroughly. Your home is left cleaner than we found it.</p>
</div>
</div>
<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<iconify-icon className="text-xl text-orange-400" icon="solar:medal-star-circle-linear"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-2">100% Satisfaction Guarantee</h4>
<p className="text-slate-400 font-light leading-relaxed">If you aren't happy with our service, we'll do whatever it takes to make it right. That's the Drainmaster promise.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-orange-500 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 text-center md:text-left">
<div>
<p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Service Area</p>
<p className="text-white text-2xl font-bold tracking-tight">All Middle Tennessee</p>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div>
<p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Availability</p>
<p className="text-white text-2xl font-bold tracking-tight">24/7 Emergency</p>
</div>
<div className="w-px h-12 bg-white/20 hidden md:block"></div>
<div>
<p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Experience</p>
<p className="text-white text-2xl font-bold tracking-tight">15+ Years</p>
</div>
<div className="hidden lg:block">
<a className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2" href="tel:6153975300">
                    Call 615-397-5300
                </a>
</div>
</div>
</div>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">What our customers say</h2>
</div>

<div className="bg-slate-200/50 rounded-3xl p-8 lg:p-12 mb-10">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
<div className="flex items-center gap-4">
<div className="bg-white p-2 rounded-full shadow-sm">
<iconify-icon className="text-2xl block" icon="logos:google-icon"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<span className="text-slate-900 font-bold text-xl">Reviews</span>
</div>
<div className="flex items-center gap-2 text-sm mt-0.5">
<span className="font-semibold text-slate-900">4.8</span>
<div className="flex text-amber-400 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-slate-500">(25)</span>
</div>
</div>
</div>
<a className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-blue-600/20" href="#">
                        Review us on Google
                    </a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">T</div>
<div>
<div className="flex items-center gap-1">
<span className="font-semibold text-slate-900 text-sm">T GW (TNTGW)</span>
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon>
</div>
<span className="text-slate-400 text-xs">23 days ago</span>
</div>
<iconify-icon className="ml-auto text-sm opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
<div className="flex text-amber-400 text-xs mb-3 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Presented and explained options and communicated well. Work was done well. Recommended.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">J</div>
<div>
<div className="flex items-center gap-1">
<span className="font-semibold text-slate-900 text-sm">Jennifer Simone</span>
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon>
</div>
<span className="text-slate-400 text-xs">2 months ago</span>
</div>
<iconify-icon className="ml-auto text-sm opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
<div className="flex text-amber-400 text-xs mb-3 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-2">Excellent Experience with Chris at DrainMaster Plumbing Chris did an incredible job from start to finish. ...</p>
<a className="text-slate-400 text-xs font-medium hover:text-slate-600 mt-auto" href="#">Read more</a>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-3 mb-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1">
<span className="font-semibold text-slate-900 text-sm">Kenneth Hand</span>
<iconify-icon className="text-blue-500 text-xs" icon="solar:verified-check-bold"></iconify-icon>
</div>
<span className="text-slate-400 text-xs">2 months ago</span>
</div>
<iconify-icon className="ml-auto text-sm opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
<div className="flex text-amber-400 text-xs mb-3 gap-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-2">5/5 Stars – Outstanding Service from Chris at DrainMaster Plumbing I couldn't b...</p>
<a className="text-slate-400 text-xs font-medium hover:text-slate-600 mt-auto" href="#">Read more</a>
</div>
</div>
<div className="flex justify-center mt-8">
<div className="bg-slate-300 h-1 w-32 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-slate-500 rounded-full"></div>
</div>
</div>
</div>

<div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200">
<div className="p-4 flex justify-between items-start">
<div className="flex gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-slate-900 font-semibold text-sm">Gabby Wooten</p>
<p className="text-slate-400 text-xs">about 3 years ago</p>
</div>
</div>
<iconify-icon className="text-xl" icon="logos:facebook"></iconify-icon>
</div>
<div className="px-4 pb-4">
<p className="text-slate-900 text-sm">Could not ask for a better guy and plumber! Super reasonable and easy to work with! 100% recommend for anything you need.</p>
</div>
<div className="px-4 py-3 border-t border-slate-100 flex items-center gap-6 text-slate-500 text-xs font-semibold">
<button className="flex items-center gap-1.5 hover:text-slate-700">
<iconify-icon className="text-base" icon="solar:like-linear"></iconify-icon> Like
                    </button>
<button className="flex items-center gap-1.5 hover:text-slate-700">
<iconify-icon className="text-base" icon="solar:chat-line-linear"></iconify-icon> Comment
                    </button>
<button className="flex items-center gap-1.5 hover:text-slate-700">
<iconify-icon className="text-base" icon="solar:share-linear"></iconify-icon> Share
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-12">Common Questions</h2>
<div className="space-y-4">
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
<span>How quickly can you get to my house?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                            For emergencies in Middle Tennessee, we typically arrive within 60-90 minutes. For non-urgent repairs, we can usually schedule same-day or next-day service.
                        </p>
</details>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
<span>Do you offer free estimates?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                            Yes! We provide free, no-obligation estimates for most major jobs. For diagnostic work (finding a leak), there may be a service fee that is waived if we perform the repair.
                        </p>
</details>
</div>
<div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-slate-900">
<span>Are you licensed and insured?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-slate-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                            Absolutely. DRAINMASTER is fully licensed, bonded, and insured in the state of Tennessee. We carry full liability insurance for your protection.
                        </p>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 pt-20 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="bg-orange-500 w-8 h-8 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:water-drops-bold"></iconify-icon>
</div>
<span className="text-white font-bold tracking-tight text-xl">DRAINMASTER</span>
</div>
<p className="max-w-sm mb-6 font-light">
                        Middle Tennessee's premier plumbing service. We bring modern technology and old-school work ethic to every job.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white" href="#">
<iconify-icon icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-orange-400 transition-colors" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Water Heaters</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Leak Detection</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Commercial Plumbing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="text-white font-medium">615-397-5300</li>
<li>info@drainmastertn.com</li>
<li>Nashville &amp; Middle TN</li>
<li className="pt-2 text-orange-500 font-medium flex items-center gap-2">
<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            Available 24/7
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Drainmaster TN. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
