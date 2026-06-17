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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="relative bg-gradient-to-b from-sky-100 via-sky-50 to-white pb-24 lg:pb-0 overflow-hidden">

<nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-20">
<div className="flex items-center gap-2">
<i className="text-blue-600 w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-gray-900">Apex<span className="font-normal">Roofing</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors" href="#">Services</a>
<a className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors" href="#">Materials</a>
<a className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors" href="#">About Us</a>
<a className="text-base font-medium text-gray-900 hover:text-blue-600 transition-colors" href="#">Contact</a>
</div>
<button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-6 py-2.5 rounded-full transition-colors">
                Get a Free Estimate
            </button>

<button className="md:hidden text-gray-900">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-16 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

<div className="max-w-xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                    Superior Roofing Solutions
                </h1>
<p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-normal">
                    Protect your most valuable investment with our premium roofing systems. Weather-resistant, energy-efficient, and backed by industry-leading warranties.
                </p>
<button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-8 py-3.5 rounded-full transition-colors shadow-sm">
                    Get a Free Estimate
                </button>
</div>

<div className="hidden lg:flex flex-col gap-6 absolute top-20 right-6 z-20">

<div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 w-64 translate-x-12">
<div className="w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-500 rounded-full flex items-center justify-center mb-3 shadow-inner">
<i className="text-white w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<p className="text-base font-medium text-gray-900 leading-snug">Lifetime Warranty Protection</p>
</div>

<div className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 w-64 -translate-x-8">
<div className="flex items-center gap-2 mb-3">
<div className="flex -space-x-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-gray-600 text-xs font-medium">
<i className="w-3 h-3" data-lucide="plus" strokeWidth="2"></i>
</div>
</div>
</div>
<div className="flex items-center gap-0.5 mb-2 text-amber-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base font-medium text-gray-900 leading-snug">Happy clients love our Roofing Services!</p>
</div>
</div>
</div>

<div className="relative w-full max-w-7xl mx-auto px-6 -mt-10 lg:-mt-32 pb-16 z-0">
<div className="relative rounded-3xl overflow-hidden shadow-2xl">

<img alt="Modern House Roof" className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover object-bottom" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>

<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900/90 to-transparent"></div>

<div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-center gap-8 shadow-xl">
<div>
<p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">2,800+</p>
<p className="text-base text-gray-400 mt-1">Roofs Installed</p>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div>
<div className="flex items-center gap-2">
<p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">4.9</p>
<i className="w-6 h-6 text-amber-400 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-base text-gray-400 mt-1">Customer Rating</p>
</div>
</div>
</div>
</div>
</div>

<section className="bg-slate-900 py-24 relative z-10 -mt-10 rounded-t-[3rem]">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-500 font-medium text-base mb-3 block">Our Services</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">Complete Roofing Solutions</h2>
<p className="text-base md:text-lg text-slate-400">From residential repairs to commercial installations, we deliver exceptional roofing services that protect what matters most to you.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-800/80 hover:bg-slate-800 transition-colors border border-white/5 rounded-3xl p-8 flex flex-col h-full group cursor-pointer">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
<i className="w-7 h-7" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">Residential<br/>Roofing</h3>
<p className="text-base text-slate-400 leading-relaxed mt-auto">Complete roof replacement, repair, and installation for your home.</p>
</div>

<div className="bg-slate-800/80 hover:bg-slate-800 transition-colors border border-white/5 rounded-3xl p-8 flex flex-col h-full group cursor-pointer">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
<i className="w-7 h-7" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">Commercial<br/>Roofing</h3>
<p className="text-base text-slate-400 leading-relaxed mt-auto">Durable and efficient roofing solutions for businesses and industrial properties.</p>
</div>

<div className="bg-slate-800/80 hover:bg-slate-800 transition-colors border border-white/5 rounded-3xl p-8 flex flex-col h-full group cursor-pointer">
<div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
<i className="w-7 h-7" data-lucide="cloud-lightning" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4">Storm Damage<br/>Repair</h3>
<p className="text-base text-slate-400 leading-relaxed mt-auto">Rapid response and repair for roofs damaged by wind, hail, or storms.</p>
</div>

<div className="bg-blue-600 hover:bg-blue-500 transition-colors rounded-3xl p-8 flex flex-col h-full cursor-pointer shadow-lg shadow-blue-900/50 group">
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="calendar-check-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-4 mt-auto">Schedule<br/>your roofing<br/>consultation</h3>
</div>
</div>
</div>
</section>


    </>
  );
}
