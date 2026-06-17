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



        document.querySelector('[data-collapse-toggle]').addEventListener('click', function() {
            const target = document.getElementById(this.getAttribute('aria-controls'));
            target.classList.toggle('hidden');
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/90 backdrop-blur-md transition-all">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:star-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="self-center text-lg font-semibold tracking-tighter text-slate-900">STAR MEDICAL</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="tel:0800400875">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                    0800 400 875
                </a>
<button className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all shadow-sm hover:shadow-md" type="button">
                    Portal Login
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a aria-current="page" className="block py-2 px-3 text-slate-900 rounded md:bg-transparent md:p-0 hover:text-blue-600" href="#">Home</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors" href="#products">Products</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors" href="#catalogue">Catalogue</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-36 overflow-hidden">

<div className="absolute inset-0 z-0">

<img alt="Hospital Hallway" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1666214280391-c9ef08d09da8?w=2560&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-slate-50"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/80 via-white/40 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md text-xs font-medium text-slate-600 mb-8 shadow-sm hover:border-slate-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Proudly New Zealand Owned &amp; Operated
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Reliable Medical Supplies <br className="hidden md:block"/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">New Zealand Healthcare</span>
</h1>
<p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-10 font-normal leading-relaxed drop-shadow-sm bg-white/30 backdrop-blur-[2px] rounded-lg p-2">
                Competitive pricing and expert service for hospitals, clinics, care homes, and medical centres nationwide. Quality you can trust.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 flex items-center justify-center gap-2" href="#products">
                    View Products
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white/90 backdrop-blur-md text-slate-700 border border-slate-200 text-sm font-medium rounded-xl hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center gap-2" href="#contact">
                    Contact Us
                </a>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100 relative z-20" id="stats">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Why competitive supply pricing matters for NZ healthcare.</h2>
<p className="text-slate-500 leading-relaxed mb-8">
                        With rising operational costs across New Zealand, medical facilities are under pressure. Star Medical bridges the gap by offering premium consumables without the premium markup, allowing budget to be redirected where it counts: patient care.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<p className="text-3xl font-bold text-blue-600 tracking-tight mb-1">15%</p>
<p className="text-xs font-medium text-slate-900 uppercase tracking-wide">Avg. Cost Savings</p>
<p className="text-xs text-slate-400 mt-1">Compared to major suppliers</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<p className="text-3xl font-bold text-blue-600 tracking-tight mb-1">200+</p>
<p className="text-xs font-medium text-slate-900 uppercase tracking-wide">Facilities Served</p>
<p className="text-xs text-slate-400 mt-1">Across North &amp; South Island</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<p className="text-3xl font-bold text-blue-600 tracking-tight mb-1">24h</p>
<p className="text-xs font-medium text-slate-900 uppercase tracking-wide">Dispatch Target</p>
<p className="text-xs text-slate-400 mt-1">For in-stock items</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<p className="text-3xl font-bold text-blue-600 tracking-tight mb-1">100%</p>
<p className="text-xs font-medium text-slate-900 uppercase tracking-wide">NZ Owned</p>
<p className="text-xs text-slate-400 mt-1">Local support team</p>
</div>
</div>
</div>
<div className="md:w-1/2 w-full">
<div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Medical Inventory" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
<div className="text-white">
<p className="font-medium text-lg">Optimized Supply Chain</p>
<p className="text-sm text-slate-200 mt-1">Direct from manufacturer to your clinic door.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="products">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Product Categories</h2>
<p className="text-slate-500 mt-2 text-sm md:text-base">Quality consumables for every department.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1609840533741-62c180d0be79?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Woundcare</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Dressings, Bandages</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:plaster-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Diagnostics</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Tests, Instruments</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:stethoscope-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Monitoring</h3>
<p className="text-xs font-medium text-slate-500 mt-1">BP, Oximetry</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:heart-pulse-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Equipment</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Furniture, Lighting</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:bed-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Gloves &amp; PPE</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Nitrile, Latex, Masks</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:hand-stars-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1619708034522-7d1ddb943599?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Infection Control</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Sterilization, Hygiene</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1609113160023-4e31f3765fd7?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Rehabilitation</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Mobility, Physio</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:wheelchair-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative flex flex-col justify-between p-6 rounded-xl border border-slate-200 overflow-hidden h-48 hover:shadow-lg transition-all duration-300 bg-white" href="#">
<div className="absolute inset-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60 group-hover:via-white/80 transition-all"></div>
</div>
<div className="z-10 relative">
<h3 className="font-semibold text-slate-900 text-lg group-hover:text-blue-700 transition-colors">Respiratory</h3>
<p className="text-xs font-medium text-slate-500 mt-1">Anaesthesia, Oxygen</p>
</div>
<div className="z-10 relative mt-auto flex justify-between items-end">
<iconify-icon className="text-slate-400 group-hover:text-blue-500 transition-colors" icon="solar:wind-linear" width="32"></iconify-icon>
<div className="h-8 w-8 rounded-full bg-white/50 backdrop-blur border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
</div>

<div className="flex justify-center">
<a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-slate-900 text-sm font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm transition-all" href="#">
                    Shop All Categories
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:scanner-linear" width="28"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Introducing StarScan</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                        Streamline your inventory management with our proprietary scanning technology. StarScan allows facilities to reorder supplies instantly, reducing administrative time and eliminating stock-out errors.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Instant reordering with barcode scanning
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time stock level tracking
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear"></iconify-icon>
                            Detailed reporting and usage analytics
                        </li>
</ul>
<button className="px-6 py-2.5 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors">
                        Learn more about StarScan
                    </button>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-video flex items-center justify-center border border-slate-200">
<div className="text-center">
<iconify-icon className="text-slate-300" icon="solar:smartphone-2-linear" width="64"></iconify-icon>
<p className="text-sm text-slate-400 mt-2">StarScan Interface Preview</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="logos:google-icon" width="24"></iconify-icon>
<span className="text-base font-semibold text-slate-900">Reviews</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Trusted by Kiwi Healthcare Professionals.</h2>
</div>
<div className="flex items-center gap-2">
<div className="flex text-amber-400 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-slate-600 font-medium">5.0 Average Rating</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-slate-200 transition-colors">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">JS</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Julie Simmons</h4>
<p className="text-xs text-slate-500">Facility Manager, Oakwood Rest Home</p>
</div>
</div>
<div className="flex text-amber-400 text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                            "We switched to Star Medical six months ago for our incontinence supplies and gloves. The savings have been significant for our facility budget, but honestly, it's the reliability that keeps us. Orders arrive in Hamilton the next day without fail."
                        </p>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center gap-2 opacity-50">
<iconify-icon className="grayscale" icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs text-slate-400">Posted on Google</span>
</div>
</div>

<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-slate-200 transition-colors">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">DM</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Dr. Mark Patel</h4>
<p className="text-xs text-slate-500">Partner, City Central GP</p>
</div>
</div>
<div className="flex text-amber-400 text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                            "Excellent service. Unlike the big multinational suppliers, the team at Star actually answers the phone when you call. They sourced a specific diagnostic set for us that was on backorder everywhere else. Highly recommended."
                        </p>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center gap-2 opacity-50">
<iconify-icon className="grayscale" icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs text-slate-400">Posted on Google</span>
</div>
</div>

<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-slate-200 transition-colors">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-sm">SL</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Sarah Lewis</h4>
<p className="text-xs text-slate-500">School Nurse, St Peter's College</p>
</div>
</div>
<div className="flex text-amber-400 text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                            "Managing the sick bay supplies used to be a headache. The website is super easy to use for reordering basics like plasters and ice packs. Delivery is fast, which is crucial during sports season."
                        </p>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center gap-2 opacity-50">
<iconify-icon className="grayscale" icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs text-slate-400">Posted on Google</span>
</div>
</div>

<div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl flex flex-col justify-between hover:border-slate-200 transition-colors">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm">EC</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">East Coast Medical</h4>
<p className="text-xs text-slate-500">Admin Team</p>
</div>
</div>
<div className="flex text-amber-400 text-sm mb-3">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                            "We appreciate the transparent pricing. No hidden fees or sudden price hikes. The StarScan tool they helped us set up has cut our inventory management time in half. Great NZ company to deal with."
                        </p>
</div>
<div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center gap-2 opacity-50">
<iconify-icon className="grayscale" icon="logos:google-icon" width="16"></iconify-icon>
<span className="text-xs text-slate-400">Posted on Google</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-10 text-center">Featured Medical Supplies</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg hover:border-slate-200 transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-lg mb-4 overflow-hidden relative">
<img alt="Nitrile Gloves" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1627495395453-eb6afb14c411?w=800&amp;q=80"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-semibold text-slate-600 border border-slate-100">BEST SELLER</div>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Nitrile Examination Gloves</h3>
<p className="text-xs text-slate-500 mb-3">Box of 100 - Powder Free</p>
<div className="flex items-center justify-between border-t border-slate-50 pt-3">
<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Log in for price</span>
<button className="text-slate-400 hover:text-slate-900">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg hover:border-slate-200 transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-lg mb-4 overflow-hidden">
<img alt="Surgical Mask" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1627368021159-b315481e51bb?w=800&amp;q=80"/>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Surgical Face Masks</h3>
<p className="text-xs text-slate-500 mb-3">Level 2 - Pack of 50</p>
<div className="flex items-center justify-between border-t border-slate-50 pt-3">
<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Log in for price</span>
<button className="text-slate-400 hover:text-slate-900">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg hover:border-slate-200 transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-lg mb-4 overflow-hidden">
<img alt="Syringe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1635091237832-8580df369f41?w=800&amp;q=80"/>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Luer Slip Syringes</h3>
<p className="text-xs text-slate-500 mb-3">3ml - Sterile - Box 100</p>
<div className="flex items-center justify-between border-t border-slate-50 pt-3">
<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Log in for price</span>
<button className="text-slate-400 hover:text-slate-900">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg hover:border-slate-200 transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-lg mb-4 overflow-hidden">
<img alt="Bandage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1762347920674-13d8bca6cbb4?w=800&amp;q=80"/>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-1">Conforming Bandage</h3>
<p className="text-xs text-slate-500 mb-3">7.5cm x 4m - Heavy Weight</p>
<div className="flex items-center justify-between border-t border-slate-50 pt-3">
<span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">Log in for price</span>
<button className="text-slate-400 hover:text-slate-900">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex justify-center">
<a className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 transition-all" href="#">
                    View All Products
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-blue-50/50 border-y border-blue-100">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-xs font-medium text-blue-700 mb-4">
<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon>
                        Personalised Service
                    </div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Discuss your facility's needs with an expert.</h2>
<p className="text-slate-600 leading-relaxed mb-8">
                        Every healthcare provider has unique requirements. Whether you are setting up a new clinic, looking to bulk order for a rest home, or need specific surgical equipment, our team is ready to provide a tailored solution.
                    </p>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                        Schedule a Consultation
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
</div>
<div className="md:w-1/2 flex justify-center md:justify-end">
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 w-full max-w-md relative">
<div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
<div className="h-12 w-12 rounded-full bg-slate-100 overflow-hidden">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">David Chen</p>
<p className="text-xs text-slate-500">Senior Account Manager</p>
</div>
<div className="ml-auto">
<iconify-icon className="text-blue-500" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 cursor-pointer hover:border-blue-300 transition-colors">
<div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-xs">Mon</div>
<div>
<p className="text-sm font-medium text-slate-700">10:00 AM - 10:30 AM</p>
<p className="text-xs text-slate-400">Available</p>
</div>
<iconify-icon className="ml-auto text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 cursor-pointer hover:border-blue-300 transition-colors">
<div className="h-8 w-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-400 font-medium text-xs">Tue</div>
<div>
<p className="text-sm font-medium text-slate-700">2:00 PM - 2:30 PM</p>
<p className="text-xs text-slate-400">Available</p>
</div>
<iconify-icon className="ml-auto text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden relative" id="catalogue">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="md:w-1/2">
<div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm border border-white/10 mb-6">
<iconify-icon icon="solar:book-bookmark-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Prefer to browse offline?</h2>
<p className="text-slate-400 mb-8 text-lg leading-relaxed">
                        Download our comprehensive 2024 Product Catalogue. Over 200 pages featuring our full range of medical consumables, equipment specifications, and bulk pricing tiers.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3.5 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:download-minimalistic-linear" width="20"></iconify-icon>
                            Download PDF (15MB)
                        </button>
<button className="px-6 py-3.5 bg-transparent border border-slate-700 text-white font-medium rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-colors flex items-center justify-center gap-2">
                            Request Physical Copy
                        </button>
</div>
</div>
<div className="md:w-1/2 flex justify-center">

<div className="relative group cursor-pointer">
<div className="absolute inset-0 bg-blue-600 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative w-64 aspect-[1/1.414] bg-white rounded-r-xl rounded-l-sm shadow-2xl flex flex-col overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500 border-l-4 border-slate-200">

<div className="h-2/3 bg-slate-900 p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:star-bold" width="120"></iconify-icon>
</div>
<div className="mt-auto z-10">
<div className="flex items-center gap-2 mb-2 text-white">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span className="font-bold tracking-tighter">STAR MEDICAL</span>
</div>
<h3 className="text-white text-2xl font-bold leading-tight">ProductCatalogue</h3>
<p className="text-blue-400 font-medium mt-1">2024 Edition</p>
</div>
</div>
<div className="h-1/3 bg-white p-6 flex items-end justify-between">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Contains</p>
<p className="text-xs text-slate-600 font-medium mt-1">Woundcare, PPE,Diagnostics &amp; More</p>
</div>
<iconify-icon className="text-slate-900" icon="solar:qr-code-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-slate-900">Get in touch</h2>
<p className="text-slate-500 mb-10 text-lg">Have a question about a product or need to set up a facility account? Our NZ-based team is here to help.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-500 font-medium">Call Us (Toll Free)</p>
<a className="text-xl font-medium text-slate-900 hover:text-blue-600 transition-colors" href="tel:0800400875">0800 400 875</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-500 font-medium">Email Support</p>
<a className="text-xl font-medium text-slate-900 hover:text-blue-600 transition-colors" href="mailto:sales@starmedical.co.nz">sales@starmedical.co.nz</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-500 font-medium">Business Hours</p>
<p className="text-base text-slate-900">Mon - Fri: 8:00 AM - 5:00 PM</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 text-slate-900">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
<input className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" rows="4"></textarea>
</div>
<button className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors flex justify-center items-center gap-2 shadow-lg shadow-slate-900/10" type="button">
                            Send Message
                            <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center space-x-2 mb-4">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter text-slate-900">STAR MEDICAL</span>
</div>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
                        Delivering cost-savings and quality medical supplies to New Zealand healthcare providers.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Specials</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">My Account</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Trade</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Returns</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Star Medical New Zealand. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
