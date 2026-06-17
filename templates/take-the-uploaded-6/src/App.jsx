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
      

<div className="bg-white border-b border-gray-100 py-2 hidden md:block">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-slate-600">
<div className="flex items-center space-x-6">
<span>Any Pool Questions? Call Now!</span>
<a className="font-semibold text-slate-900 flex items-center gap-1 hover:text-blue-600 transition" href="tel:+919900001133">
<i className="w-3 h-3" data-lucide="phone"></i> +91 99000 01133
                </a>
<a className="flex items-center gap-1 hover:text-blue-600 transition" href="mailto:info@mecolam.com">
<i className="w-3 h-3" data-lucide="mail"></i> info@mecolam.com
                </a>
</div>
<a className="hover:underline" href="#contact">Click Here to Download Our Brochure</a>
</div>
</div>

<div className="relative hero-bg h-[850px] md:h-[700px] flex items-center">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full relative pt-20">

<div className="max-w-3xl text-white pt-10">
<h1 className="text-4xl md:text-6xl font-serif-display font-medium tracking-tight leading-tight mb-4">
                    BINZ &amp; BORIS POOLS, <br/>
<span className="italic">ENGINEERED</span> FOR LEISURE
                </h1>
<p className="text-sm md:text-base font-medium tracking-wider text-slate-200 uppercase mb-6">
                    WHERE AEROSPACE PRECISION MEETS LUXURY LIVING
                </p>
<div className="flex items-center gap-4 mb-10">
<div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded flex items-center gap-2">
<div className="flex text-yellow-400">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-semibold">ISO 9001:2015 Certified</span>
</div>
<div className="bg-blue-600/80 px-3 py-1.5 rounded text-xs font-semibold">
                        A+ Rated Manufacturing
                    </div>
</div>
</div>

<div className="absolute bottom-0 left-4 right-4 md:left-6 md:right-6 transform translate-y-1/2 md:translate-y-1/2 z-20">
<div className="bg-white shadow-2xl rounded-sm p-6 max-w-6xl mx-auto border-t-4 border-blue-900">
<div className="text-center mb-6">
<h3 className="text-xl font-serif-display font-semibold text-slate-900">FREE POOL CONSULTATION</h3>
<p className="text-xs text-slate-500 mt-1">Get an estimate within 24 hours or less</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="relative">
<input className="w-full pl-3 pr-10 py-3 bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-900 transition" placeholder="Name" type="text"/>
<i className="absolute right-3 top-3.5 w-4 h-4 text-slate-400" data-lucide="user"></i>
</div>
<div className="relative">
<input className="w-full pl-3 pr-10 py-3 bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-900 transition" placeholder="Phone Number" type="tel"/>
<i className="absolute right-3 top-3.5 w-4 h-4 text-slate-400" data-lucide="phone"></i>
</div>
<div className="relative">
<input className="w-full pl-3 pr-10 py-3 bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-blue-900 transition" placeholder="Email Address" type="email"/>
<i className="absolute right-3 top-3.5 w-4 h-4 text-slate-400" data-lucide="mail"></i>
</div>
<button className="bg-slate-800 text-white font-medium text-sm py-3 px-6 hover:bg-blue-900 transition flex items-center justify-center gap-2" type="button">
                            GET MY ESTIMATE
                        </button>
</form>
</div>
</div>
</div>
</div>

<div className="bg-[#0B1221] pt-32 pb-12">
<div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex flex-col items-center text-white">
<i className="w-10 h-10 mb-2" data-lucide="award"></i>
<span className="text-xs font-bold tracking-widest">ISO 9001:2015</span>
</div>
<div className="flex flex-col items-center text-white">
<i className="w-10 h-10 mb-2" data-lucide="shield-check"></i>
<span className="text-xs font-bold tracking-widest">IATF 16949:2016</span>
</div>
<div className="flex flex-col items-center text-white">
<i className="w-10 h-10 mb-2" data-lucide="leaf"></i>
<span className="text-xs font-bold tracking-widest">ISO 14001:2015</span>
</div>
<div className="flex flex-col items-center text-white">
<i className="w-10 h-10 mb-2" data-lucide="droplets"></i>
<span className="text-xs font-bold tracking-widest">MECOLAM ENG.</span>
</div>
</div>
</div>

<div className="pattern-bg py-20 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white font-serif-display mb-3">
                    COMPLETE POOL SOLUTIONS, <br/>
                    ONE <span className="italic text-slate-400">TRUSTED BRAND</span>
</h2>
<p className="text-slate-400 text-sm tracking-wide uppercase">We've got your leisure covered from design to installation.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

<div className="space-y-8">
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 hover:border-blue-500 transition group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold text-lg">TERRACE POOLS</h3>
<i className="text-blue-400 w-6 h-6" data-lucide="waves"></i>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Specifically designed for rooftop installations on apartment buildings, engineered for load distribution.</p>
<a className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1 transition" href="#">LEARN MORE <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 hover:border-blue-500 transition group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold text-lg">SWIMJET TECH</h3>
<i className="text-blue-400 w-6 h-6" data-lucide="zap"></i>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Powerful river-like current technology enabling endless swimming in a compact space.</p>
<a className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1 transition" href="#">LEARN MORE <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
</div>

<div className="flex justify-center relative">

<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl transform scale-75"></div>
<img alt="Binz &amp; Boris Pool" className="relative z-10 shadow-2xl rounded-sm border-4 border-slate-700 object-cover h-[400px] w-full max-w-sm" src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="space-y-8">
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 hover:border-blue-500 transition group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold text-lg">HYDROTHERAPY</h3>
<i className="text-blue-400 w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Integrated Jacuzzi systems with hydro and air jets for relaxation, muscle recovery, and stress relief.</p>
<a className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1 transition" href="#">LEARN MORE <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
<div className="bg-slate-800/50 backdrop-blur border border-slate-700 p-6 hover:border-blue-500 transition group cursor-pointer">
<div className="flex justify-between items-start mb-4">
<h3 className="text-white font-semibold text-lg">GARDEN POOLS</h3>
<i className="text-blue-400 w-6 h-6" data-lucide="flower-2"></i>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Portable and in-ground options that blend seamlessly with your landscape design.</p>
<a className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1 transition" href="#">LEARN MORE <i className="w-3 h-3" data-lucide="chevron-right"></i></a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-100 py-4 border-y border-slate-200 overflow-hidden">
<div className="flex items-center gap-8 whitespace-nowrap animate-marquee text-xs font-bold tracking-widest text-slate-500 uppercase">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> Aerospace Precision</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> One Day Installation</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> 40+ Years Heritage</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> Seamless Fiberglass Shell</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> Aerospace Precision</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> One Day Installation</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> 40+ Years Heritage</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-blue-600" data-lucide="check-circle"></i> Seamless Fiberglass Shell</span>
</div>
</div>

<div className="bg-[#0B1221] py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl text-white font-serif-display mb-2">
                    DISCOVER OUR <span className="italic font-normal">PREMIUM</span><br/> POOL TYPES
                </h2>
<div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#151f32] border border-slate-800 group hover:border-blue-600 transition duration-300">
<div className="h-48 overflow-hidden">
<img alt="In-Ground Pool" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-3">IN-GROUND POOLS</h3>
<p className="text-slate-400 text-xs leading-relaxed mb-6">Classic luxury installed below ground level, perfect for yards and estates with a seamless finish.</p>
<a className="text-[10px] font-bold tracking-widest text-white border-b border-blue-600 pb-1" href="#">LEARN MORE</a>
</div>
</div>

<div className="bg-[#151f32] border border-slate-800 group hover:border-blue-600 transition duration-300">
<div className="h-48 overflow-hidden">
<img alt="Villa Pool" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1532446708303-34e8996b7d27?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-3">VILLA &amp; RESORT</h3>
<p className="text-slate-400 text-xs leading-relaxed mb-6">Premium installations designed for luxury properties, boutique hotels, and wellness centers.</p>
<a className="text-[10px] font-bold tracking-widest text-white border-b border-blue-600 pb-1" href="#">LEARN MORE</a>
</div>
</div>

<div className="bg-[#151f32] border border-slate-800 group hover:border-blue-600 transition duration-300">
<div className="h-48 overflow-hidden">
<img alt="Terrace Pool" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1600596542815-27b38d36e294?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-3">BALCONY &amp; TERRACE</h3>
<p className="text-slate-400 text-xs leading-relaxed mb-6">Compact marvels designed for high-rise living, bringing the pool experience to your skyline view.</p>
<a className="text-[10px] font-bold tracking-widest text-white border-b border-blue-600 pb-1" href="#">LEARN MORE</a>
</div>
</div>

<div className="bg-[#151f32] border border-slate-800 group hover:border-blue-600 transition duration-300">
<div className="h-48 overflow-hidden">
<img alt="Spa" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-6">
<h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-3">WELLNESS SPAS</h3>
<p className="text-slate-400 text-xs leading-relaxed mb-6">Hydrotherapy and physiotherapy pools equipped with specialized jets for health and healing.</p>
<a className="text-[10px] font-bold tracking-widest text-white border-b border-blue-600 pb-1" href="#">LEARN MORE</a>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-900 overflow-hidden">
<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="relative">
<img alt="Construction" className="rounded-sm shadow-2xl relative z-10 border border-slate-700" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-600 z-0"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-blue-600 z-0"></div>
</div>
</div>
<div className="w-full md:w-1/2 text-white">
<h2 className="text-3xl md:text-5xl font-serif-display leading-tight mb-6">
                    BUILDING <span className="italic text-blue-400">LEGACIES</span>,<br/> ONE POOL AT A TIME
                </h2>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
                    Binz &amp; Boris is the brand name for the readymade swimming pool division of <strong>Mecolam Engineering Private Limited</strong>, established in 1982. Founded by <strong>Mathews Paul</strong>, a retired Indian Air Force visionary, our roots lie in advanced materials and aerospace engineering.
                </p>
<p className="text-slate-300 text-sm leading-relaxed mb-8">
                    This aerospace-backed foundation ensures precision engineering in every fiberglass pool we manufacture. From dashboards for luxury buses to missile containers for the defense sector, our parent company's heritage of excellence is poured into every Binz &amp; Boris pool.
                </p>
<a className="inline-block bg-slate-200 text-slate-900 font-bold text-xs uppercase tracking-widest py-3 px-8 hover:bg-white transition" href="#about">
                    Our Heritage
                </a>
</div>
</div>
</div>

<div className="bg-white py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
<div className="max-w-lg">
<h2 className="text-4xl font-serif-display text-slate-900 mb-2">INDUSTRY-LEADING:</h2>
<h2 className="text-4xl font-serif-display italic text-slate-600">BEST-IN-CLASS <span className="not-italic text-slate-900">PROCESS</span></h2>
</div>
<div className="max-w-md md:text-right mt-6 md:mt-0">
<p className="text-xs text-slate-500 leading-relaxed">
                        We don't just sell pools; we deliver a lifestyle transformation. Our "One Day Installation" process redefines the industry standard, making luxury accessible without the months of construction chaos.
                    </p>
</div>
</div>

<div className="bg-slate-900 p-8 md:p-12 text-white grid grid-cols-1 md:grid-cols-5 gap-8">
<div className="border-l border-slate-700 pl-6 relative group">
<div className="text-6xl font-serif-display text-blue-600/50 absolute -left-4 -top-6 group-hover:text-blue-500 transition">P</div>
<h3 className="font-bold text-sm tracking-widest mb-2 relative z-10 pt-4">PREPARATION</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Consultation and site inspection. We provide sketches for pit excavation (in-ground) or ground leveling (above-ground).
                    </p>
</div>
<div className="border-l border-slate-700 pl-6 relative group">
<div className="text-6xl font-serif-display text-blue-600/50 absolute -left-4 -top-6 group-hover:text-blue-500 transition">O</div>
<h3 className="font-bold text-sm tracking-widest mb-2 relative z-10 pt-4">OFF-SITE BUILD</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Your pool is manufactured in our ISO-certified facility using marine-grade fiberglass composites.
                    </p>
</div>
<div className="border-l border-slate-700 pl-6 relative group">
<div className="text-6xl font-serif-display text-blue-600/50 absolute -left-4 -top-6 group-hover:text-blue-500 transition">O</div>
<h3 className="font-bold text-sm tracking-widest mb-2 relative z-10 pt-4">ONE DAY INSTALL</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        The pool arrives ready-made. Craned into position and installed in just one day, saving weeks of time.
                    </p>
</div>
<div className="border-l border-slate-700 pl-6 relative group">
<div className="text-6xl font-serif-display text-blue-600/50 absolute -left-4 -top-6 group-hover:text-blue-500 transition">L</div>
<h3 className="font-bold text-sm tracking-widest mb-2 relative z-10 pt-4">LONG LASTING</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Seamless finish, UV resistant, and durable. Water remains clean for 1+ year with our 3-stage filtration.
                    </p>
</div>
<div className="border-l border-slate-700 pl-6 relative group">
<div className="text-6xl font-serif-display text-blue-600/50 absolute -left-4 -top-6 group-hover:text-blue-500 transition">S</div>
<h3 className="font-bold text-sm tracking-widest mb-2 relative z-10 pt-4">SUPPORT</h3>
<p className="text-xs text-slate-400 leading-relaxed">
                        Comprehensive warranty, readily available spare parts, and low operating costs (~Rs. 3/hr).
                    </p>
</div>
</div>
</div>
</div>

<div className="bg-[#0B1221] py-20 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h3 className="text-white font-serif-display text-3xl">OUR IMPACT BY NUMBERS</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white mb-20 divide-y md:divide-y-0 md:divide-x divide-slate-800">
<div className="p-4">
<div className="text-5xl font-bold mb-2">100+</div>
<div className="text-xs tracking-widest uppercase text-slate-400">Pools Installed</div>
</div>
<div className="p-4">
<div className="text-5xl font-bold mb-2">40+</div>
<div className="text-xs tracking-widest uppercase text-slate-400">Years Engineering Heritage</div>
</div>
<div className="p-4">
<div className="text-5xl font-bold mb-2">160+</div>
<div className="text-xs tracking-widest uppercase text-slate-400">Expert Workforce</div>
</div>
</div>

<div className="bg-white p-8 max-w-4xl mx-auto relative rounded-sm shadow-xl">
<div className="absolute -top-4 -left-4 bg-blue-600 text-white p-2 rounded-full">
<i className="w-6 h-6 fill-current" data-lucide="quote"></i>
</div>
<div className="flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<div className="flex text-yellow-400 mb-3">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm italic mb-4">"Extremely happy with Binz and Boris team's project execution. Happy to have such an international level quality product made in India in my home. The pool is of great quality and its functions are amazing!"</p>
<div>
<h4 className="font-bold text-slate-900 text-sm">Residency Road Client</h4>
<span className="text-xs text-slate-500">Bangalore, India</span>
</div>
</div>
<div className="flex-shrink-0">
<div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 font-bold text-xl">RR</div>
</div>
</div>

<button className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-slate-800 p-2 rounded-full text-white hover:bg-blue-600 transition">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-slate-800 p-2 rounded-full text-white hover:bg-blue-600 transition">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="bg-slate-950 py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 relative z-10">
<div className="w-full md:w-1/2 text-white">
<h2 className="text-3xl font-serif-display mb-6">MEET THE <span className="italic font-normal">VISIONARIES</span></h2>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
                    The company is led by <strong>Mr. Paul Mathews</strong> and <strong>Mr. Boris Mathews</strong>. With a foundation built by Mathews Paul, a veteran of the Indian Air Force, the leadership combines military-grade discipline with modern engineering innovation.
                </p>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Our leaders oversee a 60,000 sq ft facility, ensuring that every "Binz &amp; Boris" pool meets the stringent standards that have earned our parent company ISO and IATF certifications.
                </p>
<div className="bg-slate-900 p-6 border-l-4 border-blue-600">
<div className="flex items-center gap-4 mb-2">
<i className="text-blue-500 w-5 h-5" data-lucide="target"></i>
<h3 className="font-bold text-sm tracking-wide">OUR MISSION</h3>
</div>
<p className="text-xs text-slate-500">To provide premium, maintenance-free swimming experiences through innovative fiberglass technology, making luxury wellness accessible to every Indian home.</p>
</div>
</div>
<div className="w-full md:w-1/2 relative">

<div className="absolute -right-10 -top-20 text-[300px] font-serif-display text-slate-800 leading-none select-none opacity-50 z-0">B</div>
<img alt="Leadership" className="relative z-10 rounded-sm shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-6 right-6 z-20 text-right">
<div className="text-white font-serif-display text-2xl">Paul &amp; Boris</div>
<div className="text-blue-400 text-xs font-bold tracking-widest uppercase">Business Heads</div>
</div>
</div>
</div>
</div>

<div className="bg-[#0f1623] py-24 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row-reverse items-center gap-16">
<div className="w-full md:w-1/2">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-serif-display mb-2"><span className="italic">EXCELLENCE</span> IN EVERY DETAIL</h2>
<h3 className="text-xl text-slate-500 font-light mb-8">WHAT SETS US APART</h3>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-white text-slate-900 font-serif-display text-2xl flex items-center justify-center font-bold">S</div>
<div>
<h4 className="font-bold text-sm tracking-wide mb-2">SWIMJET TECHNOLOGY</h4>
<p className="text-xs text-slate-400 leading-relaxed">Creates a powerful, river-like water current that enables endless swimming in a compact space, ideal for fitness enthusiasts.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-white text-slate-900 font-serif-display text-2xl flex items-center justify-center font-bold">J</div>
<div>
<h4 className="font-bold text-sm tracking-wide mb-2">INTEGRATED JACUZZI</h4>
<p className="text-xs text-slate-400 leading-relaxed">Equipped with hydro jets and 16 air jets, creating a luxurious hydrotherapy experience for muscle recovery.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 bg-white text-slate-900 font-serif-display text-2xl flex items-center justify-center font-bold">F</div>
<div>
<h4 className="font-bold text-sm tracking-wide mb-2">ADVANCED FILTRATION</h4>
<p className="text-xs text-slate-400 leading-relaxed">3-stage filtration system keeps water crystal clear for over a year without replacement. Auto-clean options available.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<img alt="Pool Detail" className="rounded-sm shadow-2xl border-4 border-slate-800" src="https://images.unsplash.com/photo-1572331165267-854da2b00ca1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="bg-black py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-white text-3xl font-serif-display">OUR <span className="italic font-normal">WORK SPEAKS</span> FOR ITSELF</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<img alt="Project 1" className="h-64 w-full object-cover hover:opacity-80 transition cursor-pointer" src="https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Project 2" className="h-64 w-full object-cover hover:opacity-80 transition cursor-pointer" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Project 3" className="h-64 w-full object-cover hover:opacity-80 transition cursor-pointer" src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Project 4" className="h-64 w-full object-cover hover:opacity-80 transition cursor-pointer" src="https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Project 5" className="h-64 w-full object-cover hover:opacity-80 transition cursor-pointer" src="https://images.unsplash.com/photo-1533261623197-28e4a9c37583?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Project 6" className="h-64 w-full object-cover hover:opacity-80 transition cursor-pointer" src="https://images.unsplash.com/photo-1560751998-058869f10906?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="flex justify-between mt-8 text-white">
<button className="p-2 border border-slate-700 rounded-full hover:bg-slate-800"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="p-2 border border-slate-700 rounded-full hover:bg-slate-800"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>

<div className="bg-slate-900 py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
<div className="w-full md:w-1/3 mb-12 md:mb-0">
<h2 className="text-5xl font-serif-display text-white mb-6">SEE US IN<br/><span className="italic text-blue-500">ACTION</span></h2>
<div className="flex items-start gap-4">
<div className="bg-white p-2 rounded-full mt-1">
<i className="w-6 h-6 text-pink-600" data-lucide="instagram"></i>
</div>
<div>
<p className="text-sm text-white font-bold">Follow us on Instagram</p>
<p className="text-xs text-slate-400 mt-1">For project updates, behind-the-scenes moments, and pool maintenance tips straight from the Binz &amp; Boris team.</p>
</div>
</div>
</div>
<div className="w-full md:w-2/3 flex gap-4 overflow-x-auto pb-4 md:pb-0">
<div className="flex-shrink-0 w-64 h-80 relative group cursor-pointer overflow-hidden rounded-sm">
<img alt="Video 1" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
<div className="bg-white/90 p-4 rounded-full">
<i className="w-6 h-6 fill-slate-900 text-slate-900 ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-shrink-0 w-64 h-80 relative group cursor-pointer overflow-hidden rounded-sm">
<img alt="Video 2" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1563299796-b729d0af54a5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
<div className="bg-white/90 p-4 rounded-full">
<i className="w-6 h-6 fill-slate-900 text-slate-900 ml-1" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-black text-white pt-24 pb-12 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<h2 className="text-2xl font-serif-display font-bold mb-6">BINZ &amp; BORIS</h2>
<p className="text-xs text-slate-400 leading-relaxed mb-6">
                        Under Mecolam Engineering Pvt Ltd.<br/>
                        India's leading manufacturer of premium, readymade fiberglass swimming pools.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h3 className="font-bold text-sm tracking-widest mb-6">COMPANY</h3>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white" href="#">Home</a></li>
<li><a className="hover:text-white" href="#">About Heritage</a></li>
<li><a className="hover:text-white" href="#">Past Work</a></li>
<li><a className="hover:text-white" href="#">Contact Us</a></li>
<li><a className="hover:text-white" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h3 className="font-bold text-sm tracking-widest mb-6">SERVICES</h3>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-white" href="#">Residential Pools</a></li>
<li><a className="hover:text-white" href="#">Commercial Projects</a></li>
<li><a className="hover:text-white" href="#">Terrace Installations</a></li>
<li><a className="hover:text-white" href="#">Pool Maintenance</a></li>
<li><a className="hover:text-white" href="#">Hydrotherapy</a></li>
</ul>
</div>

<div>
<h3 className="font-bold text-sm tracking-widest mb-6">CONTACT US</h3>
<ul className="space-y-4 text-xs text-slate-400">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="phone"></i>
<span>+91 99000 01133<br/>+91 70904 01133</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="mail"></i>
<span>info@mecolam.com</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="map-pin"></i>
<span>Sy No-210/2, S.Bingipura Village, Jigani Hobli, Anekal Taluk, Bengaluru, Karnataka, 580105</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-blue-500 mt-0.5" data-lucide="clock"></i>
<span>Mon-Sat: 9 AM - 7 PM</span>
</li>
</ul>
</div>
</div>

<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-xs text-slate-500">© 2023 Mecolam Engineering Pvt Ltd. All rights reserved.</p>
</div>
<button className="bg-slate-200 text-slate-900 px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition">
                    Get A Free Pool Estimate
                </button>
</div>
</div>
</footer>


    </>
  );
}
