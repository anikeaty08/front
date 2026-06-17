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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold tracking-tighter text-slate-900">FALCON</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-200" href="#contact">
                    Get in touch
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-icon="lucide:menu"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 transition-colors" href="#products">Products</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 transition-colors" href="#services">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 transition-colors" href="#logistics">Logistics</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-amber-600 md:p-0 transition-colors" href="#about">Company</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 right-1/4 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-x-2 border border-slate-200 bg-white/50 backdrop-blur-sm px-3 py-1 rounded-full mb-8">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Serving Tanzania's Poultry Sector</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-6">
                Fueling Growth.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Nurturing Quality.</span>
</h1>
<p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                Falcon delivers premium broiler chicks, nutritionally balanced feed, and expert advisory services to empower farmers across the region.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all shadow-lg shadow-slate-900/10" href="#contact">
                    Partner with Falcon
                    <span className="iconify ml-2" data-icon="lucide:arrow-right"></span>
</a>
<a className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-slate-900 rounded-lg border border-slate-200 hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 transition-all bg-white" href="#products">
                    View Products
                </a>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">100%</span>
<span className="text-sm text-slate-500 mt-1">Quality Assurance</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">24/7</span>
<span className="text-sm text-slate-500 mt-1">Expert Support</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">TZ</span>
<span className="text-sm text-slate-500 mt-1">Nationwide Delivery</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-semibold tracking-tight text-slate-900">5+</span>
<span className="text-sm text-slate-500 mt-1">Core Feed Types</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Premium Feed Products</h2>
<p className="text-slate-500 text-lg font-light">Scientifically formulated feeds designed to maximize growth rates, health, and profitability at every stage of the bird's lifecycle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
<span className="iconify" data-icon="lucide:sprout"></span>
</div>
<span className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">Day 1-14</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Broiler Starter</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        High-protein crumbs designed to jumpstart chick growth and development. Rich in essential amino acids.
                    </p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Protein</span>
<span className="font-medium text-slate-700">22% Min</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Energy</span>
<span className="font-medium text-slate-700">3000 Kcal</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Form</span>
<span className="font-medium text-slate-700">Crumbs</span>
</div>
</div>
<a className="flex items-center justify-center w-full py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group-hover:border-slate-300" href="#contact">
                        Order Now
                    </a>
</div>

<div className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:arrow-up-right"></span>
</div>
<span className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">Day 15-28</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Broiler Grower</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Balanced nutrition to support rapid skeletal and muscle development. Optimized for feed conversion.
                    </p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Protein</span>
<span className="font-medium text-slate-700">20% Min</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Energy</span>
<span className="font-medium text-slate-700">3100 Kcal</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Form</span>
<span className="font-medium text-slate-700">Pellets</span>
</div>
</div>
<a className="flex items-center justify-center w-full py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group-hover:border-slate-300" href="#contact">
                        Order Now
                    </a>
</div>

<div className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
<span className="iconify" data-icon="lucide:scale"></span>
</div>
<span className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">Day 29+</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Broiler Finisher</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Energy-dense formula to maximize weight gain before harvest. Ensures quality meat texture.
                    </p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Protein</span>
<span className="font-medium text-slate-700">19% Min</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Energy</span>
<span className="font-medium text-slate-700">3200 Kcal</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Form</span>
<span className="font-medium text-slate-700">Pellets</span>
</div>
</div>
<a className="flex items-center justify-center w-full py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group-hover:border-slate-300" href="#contact">
                        Order Now
                    </a>
</div>

<div className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600">
<span className="iconify" data-icon="lucide:egg"></span>
</div>
<span className="bg-white border border-slate-200 text-slate-600 text-xs font-medium px-2.5 py-1 rounded-full">Laying Phase</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Layers Mash</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
                        Fortified with calcium and vitamins for consistent egg production and strong shell quality.
                    </p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Calcium</span>
<span className="font-medium text-slate-700">3.5% Min</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200/60 pb-2">
<span>Protein</span>
<span className="font-medium text-slate-700">16% Min</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span>Form</span>
<span className="font-medium text-slate-700">Mash</span>
</div>
</div>
<a className="flex items-center justify-center w-full py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors group-hover:border-slate-300" href="#contact">
                        Order Now
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Complete Farming Solutions</h2>
<p className="text-slate-500 text-lg font-light">Beyond feed, we provide the essential resources and knowledge required for a thriving poultry business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-slate-900 text-white border border-slate-800 p-8 shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<span className="iconify w-48 h-48 text-white" data-icon="lucide:bird"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-white mb-6">
<span className="iconify" data-icon="lucide:egg-fried"></span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Day-Old Broiler Chicks</h3>
<p className="text-slate-300 leading-relaxed max-w-md">
                            Production and distribution of vigorous, disease-resistant broiler chicks. We ensure high hatchability rates, vaccination compliance, and robust genetics for maximum yield.
                        </p>
<div className="mt-6 flex gap-4">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10">Fast Growth</span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/10">Low Mortality</span>
</div>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
<span className="iconify" data-icon="lucide:book-open"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Expert Advisory</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                            Professional guidance on best poultry farming practices. Our experts assist with farm management, disease control, and efficiency optimization.
                        </p>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<span className="iconify" data-icon="lucide:truck"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Logistics &amp; Delivery</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                            Reliable transportation services delivering products directly to your location. We ensure feed and chicks arrive in perfect condition.
                        </p>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 mb-6">
<span className="iconify" data-icon="lucide:heart-handshake"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Customer Care</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                            Prompt resolution of challenges. We receive feedback and resolve issues quickly to keep your operations running smoothly.
                        </p>
</div>
</div>

<div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-md transition-all duration-300">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6">
<span className="iconify" data-icon="lucide:settings-2"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3">Farm Equipment</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                            Access to essential poultry equipment including feeders, drinkers, and temperature control systems.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] border border-slate-200 flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200"></div>
<div className="relative z-10 text-center p-8">
<span className="iconify w-24 h-24 text-slate-300 mx-auto mb-4" data-icon="lucide:sprout"></span>
<div className="text-sm font-medium text-slate-400 uppercase tracking-widest">Growth Partners</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-6">
                        More than a supplier.<br/>
<span className="text-slate-400">We are your partner in agriculture.</span>
</h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
                        At Falcon, we understand the challenges of the Tanzanian poultry market. Our integrated approach combines top-tier products with on-the-ground expertise to ensure your investment yields maximum returns.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<span className="iconify w-4 h-4" data-icon="lucide:shield-check"></span>
</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Guaranteed Quality</h4>
<p className="text-sm text-slate-500 mt-1">Every bag of feed and every chick meets rigorous quality control standards before distribution.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<span className="iconify w-4 h-4" data-icon="lucide:clock"></span>
</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Prompt Resolution</h4>
<p className="text-sm text-slate-500 mt-1">Facing a challenge? Our support team is dedicated to receiving and resolving issues immediately.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
<div className="p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-3">Ready to scale your farm?</h2>
<p className="text-slate-500">Contact Falcon today for orders or advisory services.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 outline-none transition-all" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 outline-none transition-all" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="interest">I am interested in</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-600 hover:bg-slate-100 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-white transition-all flex items-center justify-center">
                                        Poultry Feed
                                    </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-600 hover:bg-slate-100 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-white transition-all flex items-center justify-center">
                                        Broiler Chicks
                                    </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-600 hover:bg-slate-100 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-white transition-all flex items-center justify-center">
                                        Advisory Services
                                    </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-medium text-slate-600 hover:bg-slate-100 peer-checked:border-slate-900 peer-checked:text-slate-900 peer-checked:bg-white transition-all flex items-center justify-center">
                                        Logistics
                                    </div>
</label>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 outline-none transition-all" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all shadow-md" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-xl font-semibold tracking-tighter text-slate-900 block mb-4">FALCON</span>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        Providing Tanzania with high-quality poultry feed, chicks, and professional advisory services for sustainable farming.
                    </p>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Services</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Feeds &amp; Nutrition</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Broiler Chicks</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Farmer Advisory</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Transportation</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Company</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-slate-400">© 2023 Falcon Tanzania. All rights reserved.</span>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram"></span>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter"></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
