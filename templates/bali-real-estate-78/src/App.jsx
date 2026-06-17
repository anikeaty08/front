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
stone: {
850: '#1c1917',
}
},
backgroundImage: {
'hero-gradient': 'linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(0,0,0,0.1))',
}
}
}
}



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
      

<div className="max-w-[1600px] mx-auto p-2 sm:p-4 lg:p-6">


<header className="relative w-full h-[95vh] min-h-[700px] rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl">

<img alt="Modern Villa in Bali" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[20s] hover:scale-105 ease-linear" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

<nav className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10">

<div className="flex items-center gap-2">
<div className="bg-white/20 backdrop-blur-md p-2 rounded-lg border border-white/10">
<i className="w-6 h-6 text-white" data-lucide="building-2"></i>
</div>
<span className="text-white text-lg font-medium tracking-tight">Estetico.</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full p-1.5 px-2">
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" href="#about">About the Project</a>
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" href="#units">Unit Types</a>
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" href="#video">Video</a>
<a className="px-5 py-2 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300" href="#contact">Contacts</a>
</div>

<button className="md:hidden p-2 bg-white/10 backdrop-blur-md rounded-full text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="hidden md:flex items-center gap-3">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all" href="#">
<i className="w-4 h-4" data-lucide="phone"></i>
</a>
<a className="group flex items-center gap-3 bg-white pl-5 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105" href="#contact">
<span className="text-sm font-medium text-stone-900">Get Presentation</span>
<span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right"></i>
</span>
</a>
</div>
</nav>

<div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-10 select-none">
<h1 className="text-[15vw] font-bold text-white tracking-tighter leading-none">BALI</h1>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 z-10 flex flex-col md:flex-row items-end justify-between gap-8 pb-12">

<div className="max-w-2xl fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-white uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
                        Bukit Peninsula
                    </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-[1.1] mb-6">
                        Apartments and Villas in Bali with Installment Plans.
                    </h1>
<p className="text-lg text-white/80 max-w-lg font-light leading-relaxed mb-8">
                        Investment real estate in an All-in-One Resort format, just minutes from Bali’s best beaches.
                    </p>
<a className="group inline-flex items-center gap-4 bg-white text-stone-900 pl-6 pr-2 py-2 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300" href="#contact">
<span className="text-base font-medium">Get the presentation</span>
<span className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
<i className="w-5 h-5 text-white" data-lucide="arrow-right"></i>
</span>
</a>
</div>

<div className="flex flex-col gap-4 w-full md:w-auto fade-in-up" style={{animationDelay: '0.3s'}}>

<div className="bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-full md:w-72 hover:bg-white/15 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-3xl font-semibold text-white tracking-tight">30%</span>
<i className="text-white/60 w-5 h-5" data-lucide="pie-chart"></i>
</div>
<p className="text-sm text-white/70">Down payment. Installment plan up to 30 months.</p>
</div>

<div className="bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl w-full md:w-72 hover:bg-white/15 transition-colors">
<div className="flex justify-between items-start mb-2">
<span className="text-3xl font-semibold text-white tracking-tight">12%</span>
<i className="text-white/60 w-5 h-5" data-lucide="trending-up"></i>
</div>
<p className="text-sm text-white/70">Projected ROI per year. Monthly income from $1,500.</p>
</div>
</div>
</div>
</header>

<section className="mt-24 px-4 sm:px-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-6">
                        Modern ALL-IN-ONE Aparthotel
                    </h2>
<p className="text-stone-500 text-lg leading-relaxed mb-8 font-light">
                        A thoughtfully designed investment concept where everything needed for living, leisure, and rental income is integrated into a single resort complex.
                    </p>
<p className="text-stone-500 text-base leading-relaxed mb-8">
                        The All-in-One format makes the project highly attractive to both tourists and long-term residents. This comprehensive resort format directly drives strong rental demand and consistently high occupancy rates.
                    </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="utensils"></i>
</span>
<span className="text-sm font-medium text-stone-800">4 Restaurants</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="wine"></i>
</span>
<span className="text-sm font-medium text-stone-800">2 Bars</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="waves"></i>
</span>
<span className="text-sm font-medium text-stone-800">Swimming Pools</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="dumbbell"></i>
</span>
<span className="text-sm font-medium text-stone-800">Fitness Area</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="laptop"></i>
</span>
<span className="text-sm font-medium text-stone-800">Coworking Space</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="smile"></i>
</span>
<span className="text-sm font-medium text-stone-800">Kids’ Center</span>
</div>
<div className="flex items-center gap-3 group">
<span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="flower"></i>
</span>
<span className="text-sm font-medium text-stone-800">SPA &amp; Wellness</span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
<img alt="Interior Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-block">
<span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">Interior Concept</span>
<p className="text-stone-900 font-medium">Modern aesthetics with natural materials</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24 bg-stone-900 text-white rounded-[2rem] overflow-hidden relative">
<div className="absolute inset-0 opacity-40">
<img alt="Bali Coast" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=2538&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
<div className="relative z-10 p-8 sm:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<span className="text-stone-400 font-medium tracking-wide uppercase text-sm mb-2 block">Pandawa Area</span>
<h2 className="text-4xl font-medium tracking-tight mb-6">Prime Location — South Bali</h2>
<p className="text-stone-300 text-lg font-light leading-relaxed mb-8">
                        The project is located in the Pandawa area — one of the fastest-growing destinations on the island, combining premium beaches, developed infrastructure, and strong investment potential.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<span className="text-sm font-bold">02</span>
</div>
<span className="text-stone-300">Minutes to Pandawa Beach</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<span className="text-sm font-bold">08</span>
</div>
<span className="text-stone-300">Minutes to Melasti Beach</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
<span className="text-sm font-bold">10</span>
</div>
<span className="text-stone-300">Minutes to Nusa Dua</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
<i className="w-6 h-6 text-emerald-400 mb-3" data-lucide="trending-up"></i>
<p className="text-sm text-stone-200">
                            Market Insight: The area is actively developing, driving property value growth and attracting strong interest from investors.
                        </p>
</div>
</div>
</div>
</section>

<section className="mt-24 px-4 sm:px-6" id="units">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-4">Unit Types</h2>
<p className="text-stone-500 font-light">The project combines several formats, allowing investors to choose the option that best fits different investment strategies.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-stone-900 font-medium hover:opacity-70 transition-opacity mt-4 md:mt-0" href="#contact">
                    Get full catalog <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">from 30 m²</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Smart Villas</h3>
<p className="text-stone-500 text-sm mb-4">Compact standalone units optimized for high rental yields and privacy.</p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                            Check Details <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Penthouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">from 35 m²</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Penthouses</h3>
<p className="text-stone-500 text-sm mb-4">Top-floor premium units offering panoramic views and exclusive amenities.</p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                            Check Details <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>

<div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
<img alt="Apartment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">from 47 m²</div>
</div>
<div className="px-4 pb-6">
<h3 className="text-xl font-semibold text-stone-900 mb-2">Apartments</h3>
<p className="text-stone-500 text-sm mb-4">Spacious layouts designed for long-term comfort and family living.</p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                            Check Details <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="mt-24">
<div className="bg-stone-100 rounded-[2rem] p-8 sm:p-12 lg:p-20 flex flex-col items-center text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10 max-w-2xl">
<span className="text-stone-500 font-medium uppercase text-xs tracking-wider mb-4 block">Exclusive Offer</span>
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">Get a Detailed Project Presentation</h2>
<p className="text-stone-600 text-lg mb-8 font-light">We’ve prepared a comprehensive presentation with up-to-date prices, flexible payment plans, and detailed ROI calculations for every unit type.</p>
<a className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-800 transition-all hover:scale-105 shadow-lg shadow-stone-900/10" href="#contact">
<span>Get Presentation with Prices &amp; ROI</span>
<i className="w-4 h-4" data-lucide="download"></i>
</a>
<p className="mt-6 text-sm text-stone-400">We’ll send the presentation to your messenger or email instantly.</p>
</div>
</div>
</section>

<section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6" id="video">

<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
<img alt="Video thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1">
<i className="w-6 h-6 text-stone-900 fill-stone-900" data-lucide="play"></i>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-6">Why Investors Choose Estetico Estate</h2>
<div className="prose prose-stone mb-8">
<p className="text-stone-500 text-lg leading-relaxed font-light">We work exclusively with carefully vetted and high-potential projects in Bali. Our goal is to help our clients make well-informed and strategic investment decisions.</p>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">Thorough due diligence of developers</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">Focus on liquidity &amp; high ROI potential</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">Full transparency &amp; legal safety</span>
</div>
<div className="flex items-start gap-3">
<i className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-stone-700">End-to-end support including resale assistance</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-stone-200">
<p className="text-xl font-medium text-stone-900 italic">"For us, reputation matters more than a quick deal."</p>
</div>
</div>
</section>

<section className="mt-24 mb-12" id="contact">
<div className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl border border-stone-100 flex flex-col lg:flex-row gap-12 lg:gap-24">
<div className="lg:w-1/2">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">Contact Us</h2>
<p className="text-stone-500 text-lg font-light mb-10 max-w-md">Let us help you find a property that will be not only a profitable asset, but also a place of energy, inspiration, and growth.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<span className="block text-sm text-stone-400">Email</span>
<a className="text-lg font-medium text-stone-900 hover:underline" href="mailto:office@estetico.estate">office@estetico.estate</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<span className="block text-sm text-stone-400">Phone</span>
<a className="text-lg font-medium text-stone-900 hover:underline" href="tel:+6281239838440">+62 812 3983 8440</a>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-stone-50 rounded-3xl p-8">
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">First Name</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Last Name</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</label>
<input className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-4 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group" type="button">
                            Get project presentation
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="py-8 px-6 flex flex-col md:flex-row items-center justify-between border-t border-stone-200 gap-6">
<div className="flex items-center gap-2">
<div className="bg-stone-900 p-1.5 rounded border border-stone-800">
<i className="w-5 h-5 text-white" data-lucide="building-2"></i>
</div>
<span className="text-stone-900 font-semibold tracking-tight">Estetico.</span>
</div>
<div className="flex gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#units">Unit Types</a>
<a className="hover:text-stone-900 transition-colors" href="#video">Video</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contacts</a>
</div>
<div className="text-xs text-stone-400">
                © 2024 Estetico Estate.
            </div>
</footer>
</div>



    </>
  );
}
