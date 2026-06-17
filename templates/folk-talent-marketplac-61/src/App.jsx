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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-950 text-white flex items-center justify-center rounded-lg group-hover:scale-95 transition-transform duration-300">
<span className="font-display font-bold tracking-tighter text-sm">SF</span>
</div>
<span className="font-display font-medium text-lg tracking-tight hidden sm:block">smartfolk.</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Discover</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Stories</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a>
</nav>

<div className="flex items-center gap-3">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 px-3 py-2 transition-colors">Log in</button>
<button className="bg-zinc-950 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all duration-300 active:scale-95 shadow-lg shadow-zinc-200">
                    Join Network
                </button>
</div>
</div>
</header>

<main className="pt-16 min-h-screen">

<section className="relative bg-noise border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">Trust-First Platform</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-zinc-950 mb-6 max-w-4xl leading-[0.95] md:leading-[0.9]">
                    Discover authentic <br className="hidden md:block"/> <span className="text-zinc-400 italic font-serif font-light">folk talent</span>, anywhere.
                </h1>
<p className="text-lg text-zinc-500 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                    A curated marketplace for master craftsmen, musicians, and heritage service providers. Verified, transparent, and human.
                </p>

<div className="w-full max-w-2xl relative group z-10">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative bg-white border border-zinc-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300 p-1.5 flex items-center">
<div className="pl-4 pr-2 text-zinc-400">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-zinc-900 placeholder:text-zinc-400 text-sm h-10" placeholder="Try 'Violin restorer' or 'Ceramicist'..." type="text"/>
<div className="h-6 w-px bg-zinc-200 mx-2"></div>
<select className="bg-transparent border-none focus:ring-0 text-sm font-medium text-zinc-600 cursor-pointer hover:text-zinc-900 pr-8">
<option>Anywhere</option>
<option>Nearby</option>
<option>Online</option>
</select>
<button className="bg-zinc-950 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-zinc-800 transition-colors ml-1">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="hidden lg:block lg:col-span-3 space-y-8 sticky top-24 self-start h-fit">
<div className="flex items-center justify-between">
<h3 className="font-display font-medium text-zinc-900 tracking-tight">Filters</h3>
<button className="text-xs text-zinc-400 hover:text-zinc-900 underline decoration-zinc-300 underline-offset-2">Reset</button>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Availability</label>
<div className="flex items-center gap-3">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-900"></div>
<span className="ml-3 text-sm font-medium text-zinc-700">Available this week</span>
</label>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Discipline</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-zinc-300 rounded custom-checkbox transition-all" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Restoration</span>
<span className="ml-auto text-xs text-zinc-400">12</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="appearance-none w-4 h-4 border border-zinc-300 rounded custom-checkbox transition-all" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Music Performance</span>
<span className="ml-auto text-xs text-zinc-400">8</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-zinc-300 rounded custom-checkbox transition-all" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Weaving &amp; Textile</span>
<span className="ml-auto text-xs text-zinc-400">24</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="appearance-none w-4 h-4 border border-zinc-300 rounded custom-checkbox transition-all" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Ceramics</span>
<span className="ml-auto text-xs text-zinc-400">5</span>
</label>
</div>
</div>
<hr className="border-zinc-100"/>

<div className="space-y-4">
<div className="flex items-center justify-between">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Hourly Rate</label>
<span className="text-xs font-mono text-zinc-900">$50 - $250</span>
</div>
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer" max="1000" min="0" type="range"/>
<div className="flex justify-between text-[10px] text-zinc-400 font-mono">
<span>$0</span>
<span>$1k+</span>
</div>
</div>
</aside>

<div className="lg:col-span-9">

<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Recommended for you</h2>
<div className="flex items-center gap-2">
<span className="text-sm text-zinc-500 hidden sm:block">Sort by:</span>
<div className="relative">
<select className="appearance-none bg-white border border-zinc-200 text-zinc-900 text-sm rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer">
<option>Relevance</option>
<option>Top Rated</option>
<option>Price: Low to High</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col gap-3">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100">
<img alt="User" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase border border-white/20">Available Today</div>
<button className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 hover:bg-black/40 rounded-full p-1.5 backdrop-blur-md">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-display font-medium text-lg text-zinc-900 group-hover:underline decoration-1 underline-offset-4 decoration-zinc-300">Elara Vance</h3>
<div className="flex items-center gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm font-medium">4.9</span>
</div>
</div>
<p className="text-sm text-zinc-500 mb-2">Classical Violinist • London, UK</p>
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
                                        Verified
                                        <iconify-icon className="text-zinc-400" icon="solar:verified-check-bold" width="10"></iconify-icon>
</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-zinc-100">
<span className="text-sm font-medium text-zinc-900">$85<span className="text-zinc-400 font-normal">/hr</span></span>
<a className="text-xs font-semibold text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                        View Profile 
                                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100">
<img alt="User" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-display font-medium text-lg text-zinc-900 group-hover:underline decoration-1 underline-offset-4 decoration-zinc-300">Marcus Thorne</h3>
<div className="flex items-center gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm font-medium">5.0</span>
</div>
</div>
<p className="text-sm text-zinc-500 mb-2">Master Woodworker • Portland, OR</p>
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">
                                        Verified
                                        <iconify-icon className="text-zinc-400" icon="solar:verified-check-bold" width="10"></iconify-icon>
</span>
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">Restoration</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-zinc-100">
<span className="text-sm font-medium text-zinc-900">$120<span className="text-zinc-400 font-normal">/hr</span></span>
<a className="text-xs font-semibold text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                        View Profile 
                                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group flex flex-col gap-3">
<div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100">
<img alt="User" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-zinc-900/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold tracking-wide uppercase text-white border border-white/10">New Talent</div>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="font-display font-medium text-lg text-zinc-900 group-hover:underline decoration-1 underline-offset-4 decoration-zinc-300">Sofia Kovac</h3>
<div className="flex items-center gap-1">
<iconify-icon className="text-zinc-900" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-sm font-medium">4.8</span>
</div>
</div>
<p className="text-sm text-zinc-500 mb-2">Textile Artist • Berlin, DE</p>
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600">Weaving</span>
</div>
<div className="flex items-center justify-between pt-3 border-t border-zinc-100">
<span className="text-sm font-medium text-zinc-900">$65<span className="text-zinc-400 font-normal">/hr</span></span>
<a className="text-xs font-semibold text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                        View Profile 
                                        <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="mt-16 flex items-center justify-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<span className="text-sm font-mono text-zinc-500">Page 1 of 12</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="mt-20 border-t border-zinc-100 bg-zinc-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex flex-col md:flex-row gap-12 items-start">

<div className="flex-1">
<div className="inline-flex items-center gap-2 mb-6 text-zinc-400">
<iconify-icon icon="solar:user-id-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-widest font-semibold">Featured Professional</span>
</div>
<h2 className="text-3xl md:text-4xl font-display font-medium text-zinc-900 mb-6 tracking-tight">Elias Thorne</h2>
<div className="prose prose-zinc prose-p:font-light prose-p:text-zinc-600 prose-headings:font-display mb-8">
<p>
                                With over 15 years of experience in heritage woodworking, I specialize in the restoration of mid-century furniture and bespoke cabinetry. My process is deeply rooted in traditional joinery techniques, ensuring longevity and soul in every piece.
                            </p>
</div>

<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600">French Polishing</span>
<span className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600">Veneering</span>
<span className="px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs text-zinc-600">Joinery</span>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="aspect-square bg-zinc-200 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-200 rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-zinc-200 rounded-lg overflow-hidden flex items-center justify-center group cursor-pointer bg-white border border-zinc-200 hover:border-zinc-400 transition-colors">
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">View Portfolio</span>
</div>
</div>
</div>

<div className="w-full md:w-96 bg-white rounded-2xl p-6 shadow-xl shadow-zinc-200/50 border border-zinc-100 sticky top-24">
<div className="flex justify-between items-center mb-6">
<div>
<span className="text-2xl font-display font-medium text-zinc-900">$120</span>
<span className="text-sm text-zinc-500">/ session</span>
</div>
<div className="flex items-center gap-1 text-zinc-900">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-sm font-semibold">5.0</span>
<span className="text-zinc-300 mx-1">|</span>
<span className="text-sm text-zinc-500 underline">24 reviews</span>
</div>
</div>

<div className="mb-4">
<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Select Date</label>
<div className="grid grid-cols-4 gap-2 mb-2">
<button className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-900 bg-zinc-900 text-white text-xs">
<span className="font-medium">Mon</span>
<span className="font-bold text-lg">12</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-200 text-zinc-500 hover:border-zinc-400 text-xs transition-colors">
<span className="font-medium">Tue</span>
<span className="font-bold text-lg">13</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-200 text-zinc-500 hover:border-zinc-400 text-xs transition-colors">
<span className="font-medium">Wed</span>
<span className="font-bold text-lg">14</span>
</button>
<button className="flex flex-col items-center justify-center p-2 rounded-lg border border-zinc-100 text-zinc-300 cursor-not-allowed bg-zinc-50 text-xs opacity-50">
<span className="font-medium">Thu</span>
<span className="font-bold text-lg">15</span>
</button>
</div>
</div>

<div className="mb-6">
<label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Available Slots</label>
<div className="grid grid-cols-2 gap-2">
<button className="py-2 text-sm border border-zinc-200 rounded hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 transition-colors">09:00 AM</button>
<button className="py-2 text-sm border border-zinc-900 bg-zinc-50 text-zinc-900 font-medium rounded">01:00 PM</button>
<button className="py-2 text-sm border border-zinc-200 rounded hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 transition-colors">03:30 PM</button>
<button className="py-2 text-sm border border-zinc-200 rounded hover:border-zinc-900 text-zinc-600 hover:text-zinc-900 transition-colors">05:00 PM</button>
</div>
</div>

<button className="w-full bg-zinc-900 text-white font-medium py-3.5 rounded-xl hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-zinc-200">
                            Request Booking
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-zinc-400 mt-3">You won't be charged yet</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="font-display font-medium text-white text-xl tracking-tight mb-4 block">smartfolk.</span>
<p className="text-sm leading-relaxed max-w-xs">Connecting you with the world's most authentic talent. Preserving craft through community.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Platform</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Browse Professionals</a></li>
<li><a className="hover:text-white transition-colors" href="#">How it works</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Trust &amp; Safety</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Join</h4>
<p className="text-sm mb-4">Are you a skilled professional?</p>
<a className="inline-block border border-zinc-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition-all" href="#">Apply as Talent</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-xs">
<p>© 2024 Smart Folk Services. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white" href="#"><iconify-icon icon="brandico:twitter-bird" width="18"></iconify-icon></a> 
</div>
</div>
</div>
</footer>

    </>
  );
}
