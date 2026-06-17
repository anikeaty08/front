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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#05050A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 bg-gradient-to-tr from-violet-600 to-indigo-400 rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5 stroke-[1.5]" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold text-white tracking-tight">UGC Momentum</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Creators</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Brands</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Case Studies</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
                Book a Call
            </button>
</div>
</nav>

<main className="relative pt-32 pb-10 md:pt-44 md:pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-violet-600/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-xs font-semibold text-violet-300 uppercase tracking-wide">New: Hand-Vetted Creator Network</span>
</div>
<h1 className="animate-fade-up delay-100 text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                The Engine for <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">Viral Growth.</span>
</h1>
<p className="animate-fade-up delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Why rely on one voice when you can amplify hundreds? We orchestrate high-performing UGC campaigns with <span className="text-white font-medium">real human verification</span> delivering 5-10% engagement.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-[0_0_40px_-10px_rgba(124,58,237,0.5)] flex items-center justify-center gap-2">
                    Start Your Campaign
                    <i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto glass-card hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-medium transition-all flex items-center justify-center gap-2">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="play-circle"></i>
                    View Case Studies
                </button>
</div>
</div>

<div className="relative w-full py-8 mb-8 fade-mask-x">
<div className="flex gap-6 w-max animate-scroll pl-6">


<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@sarah.creates</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">The texture of this moisturizer is incredible! ✨ #skincare</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@tech_guru</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">Unboxing the new setup. This changes everything.</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@fashion_daily</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">Summer fit check! Link in bio for the dress. 👗</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@fit.life</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">Morning routine with my favorite supplement.</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598550487031-0898b4852123?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@travel_bug</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">You need this travel hack for your next trip!</p>
</div>
</div>

<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@sarah.creates</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">The texture of this moisturizer is incredible! ✨ #skincare</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@tech_guru</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">Unboxing the new setup. This changes everything.</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@fashion_daily</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">Summer fit check! Link in bio for the dress. 👗</p>
</div>
</div>
<div className="relative group w-[220px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-slate-800 shadow-2xl">
<img alt="Creator" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
<span className="text-xs font-medium text-white shadow-black drop-shadow-md">@fit.life</span>
</div>
<p className="text-xs text-slate-200 line-clamp-2">Morning routine with my favorite supplement.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden fade-mask-x mb-12">
<div className="flex gap-3 w-max animate-scroll-reverse">

<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">TikTok Shop Affiliates</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Amazon Shoppable</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Social Media Blasts</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Spark Ads</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Instagram Reels</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">YouTube Shorts</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">B-Rolls</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Product Launches</span>

<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">TikTok Shop Affiliates</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Amazon Shoppable</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Social Media Blasts</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Spark Ads</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Instagram Reels</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">YouTube Shorts</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">B-Rolls</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Product Launches</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">TikTok Shop Affiliates</span>
<span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-slate-300 font-medium whitespace-nowrap">Amazon Shoppable</span>
</div>
</div>
</main>

<section className="max-w-7xl mx-auto px-6 mb-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-violet-500/30 transition-colors">
<div className="mb-4 p-3 bg-white/5 rounded-xl group-hover:bg-violet-500/20 transition-colors">
<i className="text-violet-300 w-8 h-8 stroke-[1.5]" data-lucide="users"></i>
</div>
<span className="text-3xl font-semibold text-white mb-1 tracking-tight">50K+</span>
<span className="text-sm font-medium text-slate-400">Vetted Creators</span>
</div>
<div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-violet-500/30 transition-colors">
<div className="mb-4 p-3 bg-white/5 rounded-xl group-hover:bg-violet-500/20 transition-colors">
<i className="text-violet-300 w-8 h-8 stroke-[1.5]" data-lucide="trending-up"></i>
</div>
<span className="text-3xl font-semibold text-white mb-1 tracking-tight">8.5%</span>
<span className="text-sm font-medium text-slate-400">Avg. Engagement</span>
</div>
<div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-violet-500/30 transition-colors">
<div className="mb-4 p-3 bg-white/5 rounded-xl group-hover:bg-violet-500/20 transition-colors">
<i className="text-violet-300 w-8 h-8 stroke-[1.5]" data-lucide="bar-chart-2"></i>
</div>
<span className="text-3xl font-semibold text-white mb-1 tracking-tight">150+</span>
<span className="text-sm font-medium text-slate-400">Unicorn Clients</span>
</div>
<div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:border-violet-500/30 transition-colors">
<div className="mb-4 p-3 bg-white/5 rounded-xl group-hover:bg-violet-500/20 transition-colors">
<i className="text-violet-300 w-8 h-8 stroke-[1.5]" data-lucide="dollar-sign"></i>
</div>
<span className="text-3xl font-semibold text-white mb-1 tracking-tight">$0.12</span>
<span className="text-sm font-medium text-slate-400">Lowest CPI Record</span>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs text-slate-500 mb-8 uppercase tracking-widest font-semibold">Trusted by high-growth startups</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<i className="fill-white text-transparent w-6 h-6" data-lucide="hexagon"></i>
<span className="text-lg font-semibold text-white">Acme</span>
</div>
<div className="flex items-center gap-2">
<i className="fill-white text-transparent w-6 h-6" data-lucide="triangle"></i>
<span className="text-lg font-semibold text-white">Vortex</span>
</div>
<div className="flex items-center gap-2">
<i className="fill-white text-transparent w-6 h-6" data-lucide="circle"></i>
<span className="text-lg font-semibold text-white">Sphere</span>
</div>
<div className="flex items-center gap-2">
<i className="fill-white text-transparent w-6 h-6" data-lucide="square"></i>
<span className="text-lg font-semibold text-white">Block</span>
</div>
<div className="flex items-center gap-2">
<i className="fill-white text-transparent w-6 h-6" data-lucide="star"></i>
<span className="text-lg font-semibold text-white">Spark</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Built for scale, <br/>designed for performance.</h2>
<p className="text-lg text-slate-400">Traditional influencer marketing is manual and messy. We built the infrastructure to programmatically scale authenticity with human touch.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:bg-violet-600/30 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-900 to-slate-900 border border-white/10 flex items-center justify-center mb-6">
<i className="text-violet-300 w-6 h-6 stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Diverse Creator Network</h3>
<p className="text-base text-slate-400 leading-relaxed">Access a curated network of 50,000+ creators across 30+ niches. From Gen Z trendsetters to professional experts.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-600/20 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:bg-fuchsia-600/30 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-fuchsia-900 to-slate-900 border border-white/10 flex items-center justify-center mb-6">
<i className="text-fuchsia-300 w-6 h-6 stroke-[1.5]" data-lucide="video"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">High-Fidelity Production</h3>
<p className="text-base text-slate-400 leading-relaxed">We don't just send products. We provide creative briefs, script guidance, and quality assurance for every asset.</p>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl rounded-full transform translate-x-10 -translate-y-10 group-hover:bg-indigo-600/30 transition-all"></div>
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-900 to-slate-900 border border-white/10 flex items-center justify-center mb-6">
<i className="text-indigo-300 w-6 h-6 stroke-[1.5]" data-lucide="line-chart"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Performance-Driven Iteration</h3>
<p className="text-base text-slate-400 leading-relaxed">Our expert team analyzes video performance in real-time, helping us iterate hooks and CTAs for maximum ROAS.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080810]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">From Brief to Viral in 7 Days.</h2>
<div className="space-y-8 relative">

<div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-violet-500 to-transparent opacity-30"></div>
<div className="relative flex gap-6">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-violet-500 text-violet-400 flex items-center justify-center shrink-0 text-lg font-medium z-10">1</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Submit Your Campaign</h4>
<p className="text-base text-slate-400">Define your goals, target audience, and product details in our dashboard.</p>
</div>
</div>
<div className="relative flex gap-6">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-slate-400 flex items-center justify-center shrink-0 text-lg font-medium z-10">2</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Curated Casting</h4>
<p className="text-base text-slate-400">Our creative strategists manually pair your brand with the creators who best fit your niche.</p>
</div>
</div>
<div className="relative flex gap-6">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-slate-400 flex items-center justify-center shrink-0 text-lg font-medium z-10">3</div>
<div>
<h4 className="text-xl font-medium text-white mb-2">Go Live &amp; Scale</h4>
<p className="text-base text-slate-400">Receive fully edited, ad-ready assets. Launch them and watch the sales roll in.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="glass-card rounded-2xl p-2 border border-white/10 shadow-2xl shadow-violet-900/20 rotate-1">
<div className="bg-slate-950 rounded-xl overflow-hidden aspect-video relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-900/20 to-transparent"></div>

<div className="w-3/4 space-y-3">
<div className="flex items-center justify-between mb-4">
<div className="h-2 w-24 bg-slate-700 rounded"></div>
<div className="h-2 w-8 bg-green-500 rounded"></div>
</div>
<div className="flex gap-3">
<div className="h-24 w-1/3 bg-slate-800 rounded-lg border border-slate-700"></div>
<div className="h-24 w-1/3 bg-slate-800 rounded-lg border border-slate-700"></div>
<div className="h-24 w-1/3 bg-slate-800 rounded-lg border border-slate-700"></div>
</div>
<div className="h-2 w-full bg-slate-800 rounded mt-4"></div>
<div className="h-2 w-2/3 bg-slate-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-6">Ready to generate <br/>momentum?</h2>
<p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">Join the fastest growing brands utilizing our creator network to lower CAC and boost conversions.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black hover:bg-slate-200 px-8 py-4 rounded-full text-lg font-medium transition-colors">
                    Get Started Now
                </button>
<button className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
                    Talk to Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#020205] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="h-6 w-6 bg-violet-600 rounded flex items-center justify-center">
<i className="text-white w-4 h-4 stroke-[1.5]" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold text-white tracking-tight">UGC Momentum</span>
</div>
<p className="text-sm text-slate-500">The operating system for modern creator marketing.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Platform</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Creators</a></li>
<li><a className="hover:text-white transition-colors" href="#">Agencies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 UGC Momentum Inc. All rights reserved.</p>
<div className="flex gap-6">
<i className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
<i className="w-5 h-5 text-slate-600 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
