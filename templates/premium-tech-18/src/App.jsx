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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<header className="bg-[#111] text-white">
<div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">

<div className="hidden md:flex items-center bg-[#222] rounded-lg px-3 py-2 w-64 border border-[#333]">
<i className="text-neutral-500 w-4 h-4 mr-3" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-neutral-500 text-neutral-300" placeholder="Search iVenus..." type="text"/>
</div>

<div className="flex items-center gap-2">
<span className="text-2xl font-medium tracking-tight text-white">Asia ios</span>
<span className="border border-neutral-600 rounded px-1.5 py-0.5 text-[10px] text-neutral-400">Premium Partner</span>
</div>

<div className="flex items-center gap-6">
<button className="hover:text-neutral-300"><i className="w-5 h-5" data-lucide="user"></i></button>
<button className="hover:text-neutral-300"><i className="w-5 h-5" data-lucide="shopping-bag"></i></button>
<button className="md:hidden"><i className="w-5 h-5" data-lucide="menu"></i></button>
</div>
</div>
</header>

<nav className="border-b border-neutral-100 py-6 overflow-x-auto hide-scrollbar">
<div className="max-w-[1600px] mx-auto px-4 lg:px-8 min-w-max flex justify-center gap-10 md:gap-16">
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="smartphone"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">iPhone</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="tablet"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">iPad</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="laptop"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">Macbook</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="watch"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">Watch</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="headphones"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">Audio</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="cable"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">Accessories</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="graduation-cap"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">Student Offers</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<i className="w-6 h-6 text-neutral-600 group-hover:text-black transition-colors" data-lucide="wrench"></i>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black">Care Centers</span>
</a>
</div>
</nav>

<main className="max-w-[1600px] mx-auto px-4 lg:px-8 py-8 space-y-16">

<section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative bg-black rounded-3xl overflow-hidden min-h-[345] flex flex-col justify-between group">

<div className="p-10 text-center relative z-10 pt-12">
<div className="flex items-center justify-center gap-2 mb-2 text-white">
<i className="fill-white w-6 h-6" data-lucide="apple"></i>
<span className="text-3xl font-semibold tracking-tight">iPad Pro</span>
</div>
<h2 className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium max-w-md mx-auto leading-relaxed">
                        Advanced AI performance and game-changing capabilities.
                    </h2>
</div>

<div className="absolute inset-0 top-32 flex items-center justify-center">
<img alt="iPad Pro" className="w-3/4 object-contain opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 bg-gradient-to-t from-black via-black/80 to-transparent pt-20 pb-8 px-8 text-center">
<p className="text-white text-lg font-medium mb-3">₹3,000* Instant cashback on credit cards of</p>
<div className="flex justify-center gap-4 opacity-90">
<span className="bg-white text-[#c00] text-xs font-bold px-2 py-1 rounded">ICICI Bank</span>
<span className="bg-white text-[#900] text-xs font-bold px-2 py-1 rounded">IDFC FIRST Bank</span>
<span className="bg-white text-[#008] text-xs font-bold px-2 py-1 rounded">SBI Card</span>
</div>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full p-2 backdrop-blur-sm transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white text-white hover:text-black rounded-full p-2 backdrop-blur-sm transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="flex flex-col gap-4">
<a className="bg-[#555] hover:bg-[#444] text-white p-6 rounded-2xl flex items-center justify-between transition-colors h-full max-h-[80px]" href="#">
<div className="flex items-center gap-4">
<div className="bg-white/10 p-2.5 rounded-full"><i className="w-6 h-6" data-lucide="map-pin"></i></div>
<span className="text-lg font-medium">Find your nearest store</span>
</div>
<i className="w-5 h-5 text-neutral-300" data-lucide="arrow-right"></i>
</a>
<a className="border border-neutral-200 hover:border-neutral-300 bg-white p-6 rounded-2xl flex items-center justify-between transition-colors h-full max-h-[80px]" href="#">
<div className="flex items-center gap-4">
<div className="bg-neutral-100 p-2.5 rounded-full"><i className="w-6 h-6 text-neutral-700" data-lucide="percent"></i></div>
<span className="text-lg font-medium text-neutral-800">Best deals</span>
</div>
<i className="w-5 h-5 text-neutral-400" data-lucide="arrow-right"></i>
</a>
<a className="border border-neutral-200 hover:border-neutral-300 bg-white p-6 rounded-2xl flex items-center justify-between transition-colors h-full max-h-[80px]" href="#">
<div className="flex items-center gap-4">
<div className="bg-neutral-100 p-2.5 rounded-full"><i className="w-6 h-6 text-neutral-700" data-lucide="package-open"></i></div>
<span className="text-lg font-medium text-neutral-800">Browse latest launches</span>
</div>
<i className="w-5 h-5 text-neutral-400" data-lucide="arrow-right"></i>
</a>
<a className="border border-neutral-200 hover:border-neutral-300 bg-white p-6 rounded-2xl flex items-center justify-between transition-colors h-full max-h-[80px]" href="#">
<div className="flex items-center gap-4">
<div className="bg-neutral-100 p-2.5 rounded-full"><i className="w-6 h-6 text-neutral-700" data-lucide="clock"></i></div>
<span className="text-lg font-medium text-neutral-800">Pre order</span>
</div>
<i className="w-5 h-5 text-neutral-400" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section>
<h2 className="text-2xl font-semibold tracking-tight mb-6">Just Launched</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-indigo-50/50 rounded-2xl p-6 h-[320px] flex flex-col relative overflow-hidden group hover:bg-indigo-50 transition-colors">
<h3 className="text-lg font-semibold z-10">iPhone 17</h3>
<div className="absolute inset-0 top-16 flex items-center justify-center">
<img alt="iPhone 17" className="w-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-orange-50/50 rounded-2xl p-6 h-[320px] flex flex-col relative overflow-hidden group hover:bg-orange-50 transition-colors">
<h3 className="text-lg font-semibold z-10">iPhone 17 PRO</h3>
<div className="absolute inset-0 top-16 flex items-center justify-center">
<img alt="iPhone 17 Pro" className="w-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 h-[320px] flex flex-col relative overflow-hidden group hover:bg-slate-100 transition-colors">
<h3 className="text-lg font-semibold z-10">iPhone Air</h3>
<div className="absolute inset-0 top-16 flex items-center justify-center">
<img alt="iPhone Air" className="w-56 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-stone-50 rounded-2xl p-6 h-[320px] flex flex-col relative overflow-hidden group hover:bg-stone-100 transition-colors">
<h3 className="text-lg font-semibold z-10">MacBook Air</h3>
<div className="absolute inset-0 top-16 flex items-center justify-center">
<img alt="MacBook Air" className="w-64 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-semibold tracking-tight mb-6">For Every Need</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-between">
<h3 className="text-white font-semibold text-lg drop-shadow-md">For Students</h3>
<div className="bg-white/90 text-black text-xs font-medium px-4 py-2 rounded-full w-max backdrop-blur hover:bg-white transition-colors">Explore</div>
</div>
</div>

<div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-between">
<h3 className="text-white font-semibold text-lg drop-shadow-md">For Professional</h3>
<div className="bg-white/90 text-black text-xs font-medium px-4 py-2 rounded-full w-max backdrop-blur hover:bg-white transition-colors">Explore</div>
</div>
</div>

<div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-between">
<h3 className="text-white font-semibold text-lg drop-shadow-md">For Creator</h3>
<div className="bg-white/90 text-black text-xs font-medium px-4 py-2 rounded-full w-max backdrop-blur hover:bg-white transition-colors">Explore</div>
</div>
</div>

<div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 p-6 flex flex-col justify-between">
<h3 className="text-white font-semibold text-lg drop-shadow-md">For Fitness</h3>
<div className="bg-white/90 text-black text-xs font-medium px-4 py-2 rounded-full w-max backdrop-blur hover:bg-white transition-colors">Explore</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight">Trusted Brands</h2>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4">
<div className="flex-1 space-y-3">
<h4 className="font-bold text-sm tracking-widest uppercase text-neutral-500">Tucano</h4>
<h3 className="font-semibold text-base leading-snug">Tucano Milano 1985</h3>
<p className="text-xs text-neutral-500 line-clamp-2">Protection with style everything you need to work freely wherever you are</p>
<button className="bg-neutral-600 text-white text-[10px] font-medium px-3 py-1.5 rounded-full mt-2 hover:bg-neutral-800 transition-colors">Explore</button>
</div>
<img className="w-24 h-24 object-cover rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4">
<div className="flex-1 space-y-3">
<h4 className="font-bold text-sm tracking-widest uppercase text-neutral-500 font-serif italic">Marshall</h4>
<h3 className="font-semibold text-base leading-snug">PARTY ANYWHERE WITH BROMLEY 750</h3>
<p className="text-xs text-neutral-500 line-clamp-2">Take your music on the road for 30+ hours with the latest member.</p>
<button className="bg-neutral-600 text-white text-[10px] font-medium px-3 py-1.5 rounded-full mt-2 hover:bg-neutral-800 transition-colors">Explore</button>
</div>
<img className="w-24 h-24 object-cover rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1544468266-6a8948003cd7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-neutral-50 rounded-2xl p-6 flex items-center gap-4">
<div className="flex-1 space-y-3">
<h4 className="font-bold text-sm tracking-widest uppercase text-neutral-800">D<span className="text-neutral-400">A</span></h4>
<h3 className="font-semibold text-base leading-snug">Daily Objects</h3>
<p className="text-xs text-neutral-500 line-clamp-2">Meet POP 100W Type-C Kevlar core magnetic Charging cables</p>
<button className="bg-neutral-600 text-white text-[10px] font-medium px-3 py-1.5 rounded-full mt-2 hover:bg-neutral-800 transition-colors">Explore</button>
</div>
<img className="w-24 h-24 object-cover rounded-lg shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</section>

<section>
<h2 className="text-2xl font-semibold tracking-tight mb-6">Why Choose iVenus</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<div className="border border-neutral-100 rounded-xl p-5 relative min-h-[140px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<p className="font-medium text-sm leading-tight">60+ Stores Nationwide</p>
<div className="flex justify-between items-end mt-4">
<i className="w-6 h-6 text-neutral-400 stroke-1" data-lucide="map"></i>
<span className="bg-neutral-100 text-neutral-600 text-[10px] font-medium px-2 py-1 rounded-full">Explore</span>
</div>
</div>

<div className="border border-neutral-100 rounded-xl p-5 relative min-h-[140px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<p className="font-medium text-sm leading-tight">Easy Finance &amp; EMI Options</p>
<div className="flex justify-between items-end mt-4">
<i className="w-6 h-6 text-neutral-400 stroke-1" data-lucide="calculator"></i>
<span className="bg-neutral-100 text-neutral-600 text-[10px] font-medium px-2 py-1 rounded-full">Explore</span>
</div>
</div>

<div className="border border-neutral-100 rounded-xl p-5 relative min-h-[140px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<p className="font-medium text-sm leading-tight">Smart Trade-In Program</p>
<div className="flex justify-between items-end mt-4">
<i className="w-6 h-6 text-neutral-400 stroke-1" data-lucide="smartphone-charging"></i>
<span className="bg-neutral-100 text-neutral-600 text-[10px] font-medium px-2 py-1 rounded-full">Explore</span>
</div>
</div>

<div className="border border-neutral-100 rounded-xl p-5 relative min-h-[140px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<p className="font-medium text-sm leading-tight">Certified Apple Expert Team</p>
<div className="flex justify-between items-end mt-4">
<i className="w-6 h-6 text-neutral-400 stroke-1" data-lucide="users"></i>
<span className="bg-neutral-100 text-neutral-600 text-[10px] font-medium px-2 py-1 rounded-full">Explore</span>
</div>
</div>

<div className="border border-neutral-100 rounded-xl p-5 relative min-h-[140px] flex flex-col justify-between hover:shadow-lg transition-shadow">
<p className="font-medium text-sm leading-tight">Apple Authorised Service Provider</p>
<div className="flex justify-between items-end mt-4">
<i className="w-6 h-6 text-neutral-400 stroke-1" data-lucide="settings"></i>
<span className="bg-neutral-100 text-neutral-600 text-[10px] font-medium px-2 py-1 rounded-full">Explore</span>
</div>
</div>
</div>
</section>

<section className="space-y-8">

<div className="flex flex-col md:flex-row h-auto md:h-[400px] rounded-3xl overflow-hidden">
<div className="w-full md:w-1/2 bg-gray-100">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 bg-neutral-100 p-10 md:p-16 flex flex-col justify-center items-start">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Find the accessories you're looking for.</h2>
<button className="flex items-center gap-2 bg-neutral-600 hover:bg-neutral-800 text-white pl-4 pr-3 py-2.5 rounded-lg transition-colors text-sm font-medium">
                        Explore <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="flex flex-col-reverse md:flex-row h-auto md:h-[400px] rounded-3xl overflow-hidden">
<div className="w-full md:w-1/2 bg-neutral-100 p-10 md:p-16 flex flex-col justify-center items-start">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">iVenus Apple Authorised Service Centers</h2>
<p className="text-neutral-500 mb-6 text-sm">Repairs, Tech support and much more all at one place.</p>
<button className="flex items-center gap-2 bg-neutral-600 hover:bg-neutral-800 text-white pl-4 pr-3 py-2.5 rounded-lg transition-colors text-sm font-medium">
                        Explore <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
<div className="w-full md:w-1/2 bg-gray-100 relative">
<img className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-6 py-3 rounded-xl shadow-sm">
<span className="font-bold text-neutral-800 tracking-tight">iVenus</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row h-auto md:h-[400px] rounded-3xl overflow-hidden">
<div className="w-full md:w-1/2 bg-gray-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 bg-neutral-100 p-10 md:p-16 flex flex-col justify-center items-start">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Certified Experts at Your Service</h2>
<button className="flex items-center gap-2 bg-neutral-600 hover:bg-neutral-800 text-white pl-4 pr-3 py-2.5 rounded-lg transition-colors text-sm font-medium">
                        Explore <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</section>
</main>

<footer className="bg-[#111] text-white pt-16 pb-8 border-t border-neutral-800 mt-20">
<div className="max-w-[1600px] mx-auto px-4 lg:px-8">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">

<div className="space-y-6 max-w-xs">
<div className="flex items-center gap-3">
<span className="text-4xl font-normal tracking-tighter">iVenus</span>
<div className="border border-neutral-600 rounded px-2 py-1 text-[10px] text-neutral-400 leading-none">
                            Premium<br/>Partner
                        </div>
</div>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
<a className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-neutral-700 hover:text-white transition" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h4 className="font-semibold mb-4 text-white">Useful Links</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition" href="#">About Us</a></li>
<li><a className="hover:text-white transition" href="#">Blogs</a></li>
<li><a className="hover:text-white transition" href="#">Service Centers</a></li>
<li><a className="hover:text-white transition" href="#">Care Plan Coverage</a></li>
<li><a className="hover:text-white transition" href="#">FAQs</a></li>
<li><a className="hover:text-white transition" href="#">Career Opportunity</a></li>
<li><a className="hover:text-white transition" href="#">Student Offer</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-4 text-white">Policies</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition" href="#">Disclaimer Policy</a></li>
<li><a className="hover:text-white transition" href="#">Terms and Conditions</a></li>
<li><a className="hover:text-white transition" href="#">Cancellation Returns and Refund</a></li>
<li><a className="hover:text-white transition" href="#">Shipping and Delivery Policy</a></li>
<li><a className="hover:text-white transition" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition" href="#">Prebooking Terms and Conditions</a></li>
<li><a className="hover:text-white transition" href="#">Security</a></li>
</ul>
</div>

<div>
<div className="space-y-6">
<div className="flex gap-3 items-start">
<i className="w-4 h-4 mt-1 text-neutral-500" data-lucide="phone"></i>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Sales Query</p>
<p className="text-sm font-medium">+91 97120 00979</p>
</div>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 mt-1 text-neutral-500" data-lucide="mail"></i>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">General Query:</p>
<p className="text-sm font-medium">customercare@ivenus.in</p>
</div>
</div>
<div className="flex gap-3 items-start">
<i className="w-4 h-4 mt-1 text-neutral-500" data-lucide="help-circle"></i>
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-1">Service Query</p>
<p className="text-sm font-medium">Click here for contact details</p>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
<p>Copyright©2025 iVenus. All Rights Reserved</p>
<div className="flex gap-6">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="smartphone"></i> iPhone</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="tablet"></i> iPad</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="laptop"></i> Mac</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="watch"></i> Watch</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="headphones"></i> Music</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="cable"></i> Accessories</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
