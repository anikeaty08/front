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



        // Iconify Logic
        lucide.createIcons();

        // Calculator Logic
        function formatCurrency(num) {
            return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(num);
        }

        function updateCalculator() {
            const price = parseInt(document.getElementById('price-slider').value);
            const mortgage = parseInt(document.getElementById('mortgage-slider').value);
            
            // Fee calculation (1.5%)
            const fee = price * 0.015;
            const total = price - fee - mortgage;

            document.getElementById('price-display').innerText = formatCurrency(price);
            document.getElementById('mortgage-display').innerText = formatCurrency(mortgage);
            
            document.getElementById('calc-price').innerText = formatCurrency(price);
            document.getElementById('calc-fee').innerText = "- " + formatCurrency(fee);
            document.getElementById('calc-mortgage').innerText = "- " + formatCurrency(mortgage);
            
            const totalEl = document.getElementById('calc-total');
            totalEl.innerText = formatCurrency(total > 0 ? total : 0);
        }

        // Initialize calculator on load
        document.addEventListener('DOMContentLoaded', updateCalculator);
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-slate opacity-[0.4]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-gradient-to-b from-white to-transparent"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-semibold transition-transform group-hover:scale-95 group-hover:rotate-3">
                    P
                </div>
<span className="font-bold text-lg tracking-tight text-slate-900">Propel</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Listings</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Concierge</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2">
                    Sign In
                </button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 active:scale-95">
                    Start Sale
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</header>
<main className="z-10 pt-32 pb-24 relative">

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col items-center text-center animate-reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
        AI-Driven Valuation Engine v2.0 Live
      </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl leading-[1.05]">
        Sell your property at <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500" style={{}}>maximum velocity.</span>
</h1>
<p className="text-lg text-slate-600 max-w-2xl mb-10 leading-relaxed">
        The traditional market is slow. We combine algorithmic pricing, virtual staging, and a global investor network
        to close deals 3x faster than local agents.
      </p>

<div className="w-full max-w-3xl mx-auto border-t border-b border-slate-100 py-8 mb-12">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Syndicating Listings To</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-[#006AFF]" height="24" icon="simple-icons:zillow" width="96"></iconify-icon>
<iconify-icon className="text-[#FF5A5F]" height="28" icon="simple-icons:airbnb" width="96"></iconify-icon>
<iconify-icon className="text-[#4DBC15]" height="24" icon="simple-icons:houzz" width="96"></iconify-icon>
<iconify-icon className="text-[#FF3008]" height="24" icon="simple-icons:door dash" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-2 row-span-2 rounded-[2rem] bg-white border border-slate-200/60 p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 animate-reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Predictive Valuation</h3>
<p className="mt-2 text-slate-600 max-w-md">Our model analyzes 50+ data points including sunlight exposure,
              neighborhood velocity, and renovation ROI to set the perfect strike price.</p>
</div>

<div className="mt-8 h-48 w-full flex items-end gap-2 sm:gap-4 pb-2 border-b border-slate-100">

<div className="w-full bg-slate-100 rounded-t-lg h-[40%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                Aug</div>
</div>
<div className="w-full bg-slate-100 rounded-t-lg h-[55%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                Sep</div>
</div>
<div className="w-full bg-slate-100 rounded-t-lg h-[45%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                Oct</div>
</div>
<div className="w-full bg-indigo-100 rounded-t-lg h-[65%] relative group/bar">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                Nov</div>
</div>
<div className="w-full bg-indigo-500 rounded-t-lg h-[85%] relative shadow-[0_0_20px_rgba(99,102,241,0.5)] group/bar transition-all hover:h-[90%]">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-full text-center">
<span className="text-[10px] font-bold text-white bg-indigo-600 px-1.5 py-0.5 rounded-full">+12%</span>
</div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-indigo-900 text-white text-xs py-1 px-2 rounded">
                Dec</div>
</div>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-slate-900 p-8 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 animate-reveal delay-200">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-zap w-32 h-32 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
<svg className="lucide lucide-timer w-5 h-5" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div>
<h3 className="text-xl font-semibold text-white tracking-tight">14 Days</h3>
<p className="mt-2 text-sm text-slate-400">Average time to offer. We eliminate open house fatigue.</p>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-white border border-slate-200/60 p-8 shadow-lg relative overflow-hidden group hover:border-indigo-200 transition-colors animate-reveal delay-300">
<div className="absolute inset-0">
<img alt="Interior" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"></div>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-4">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Virtual Staging</h3>
<p className="mt-2 text-sm text-slate-600">3D rendering that sells lifestyle, not empty rooms.</p>
</div>
</div>

<div className="md:col-span-3 md:p-10 shadow-slate-200/30 animate-reveal delay-200 bg-white border-slate-200/60 border rounded-[2rem] mt-6 pt-8 pr-8 pb-8 pl-8 shadow-lg">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Estimate your net proceeds</h3>
<p className="mt-2 text-slate-600">See exactly what you walk away with. No hidden fees, no "marketing costs".
            </p>
<div className="mt-8 space-y-6">
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-semibold uppercase text-slate-500">Target Sale Price</label>
<span className="text-sm font-bold text-slate-900" id="price-display">€450,000</span>
</div>
<input className="w-full" id="price-slider" max="1500000" min="200000" oninput="updateCalculator()" step="10000" type="range" value="450000"/>
</div>
<div className="">
<div className="flex justify-between mb-2">
<label className="uppercase text-xs font-semibold text-slate-500">Mortgage Balance</label>
<span className="text-sm font-bold text-slate-900" id="mortgage-display">€120,000</span>
</div>
<input className="w-full" id="mortgage-slider" max="1000000" min="0" oninput="updateCalculator()" step="5000" type="range" value="120000"/>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-2xl blur opacity-20">
</div>
<div className="relative bg-slate-50 rounded-xl p-8 border border-slate-200">
<div className="flex items-center justify-between pb-4 border-b border-slate-200 border-dashed">
<span className="text-slate-500 text-sm">Sale Price</span>
<span className="font-medium text-slate-900" id="calc-price">€450,000</span>
</div>
<div className="flex items-center justify-between py-4 border-b border-slate-200 border-dashed">
<span className="text-slate-500 text-sm">Propel Fee (1.5%)</span>
<span className="font-medium text-red-500" id="calc-fee">- €6,750</span>
</div>
<div className="flex items-center justify-between py-4 border-b border-slate-200 border-dashed">
<span className="text-slate-500 text-sm">Mortgage Payoff</span>
<span className="font-medium text-slate-500" id="calc-mortgage">- €120,000</span>
</div>
<div className="flex items-center justify-between pt-6">
<span className="font-bold text-slate-900">Estimated Cash</span>
<span className="text-2xl font-bold text-emerald-600 tracking-tight" id="calc-total">€323,250</span>
</div>
<button className="w-full mt-6 bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                                    Lock in Valuation
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-12 mb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-semibold uppercase text-slate-500 tracking-wider flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Live Market Activity
        </h3>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1" href="#">
          View All Activity <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex items-center gap-4 group cursor-pointer">
<img alt="House" className="group-hover:grayscale-0 transition-all duration-300 w-20 h-20 object-cover rounded-lg grayscale" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Sold</span>
<span className="text-xs text-slate-400">2 mins ago</span>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Beacon Hill Townhouse</h4>
<p className="text-xs text-slate-500">Sold for €845,000
              <span className="text-emerald-600 font-medium">(+4.2% Ask)</span>
</p>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<img alt="House" className="group-hover:grayscale-0 transition-all duration-300 w-20 h-20 object-cover rounded-lg grayscale" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] uppercase font-bold text-indigo-700 bg-indigo-100 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">Offer Accepted</span><span className="text-xs text-slate-400">14 mins ago</span>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Modern Loft, District 4</h4>
<p className="text-xs text-slate-500">Offer accepted in 48 hours</p>
</div>
</div>

<div className="flex items-center gap-4 group cursor-pointer">
<img alt="House" className="w-20 h-20 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">New Listing</span>
<span className="text-xs text-slate-400">1 hour ago</span>
</div>
<h4 className="font-semibold text-slate-900 text-sm">Seaside Villa, Howth</h4>
<p className="text-xs text-slate-500">Listed at €1,200,000</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="flex flex-col md:flex-row md:items-end gap-4 mb-10 gap-x-4 gap-y-4 justify-between">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Curated Listings</h2>
<p className="text-slate-500 mt-2">Properties currently in the Velocity phase.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-xs font-medium bg-slate-900 text-white rounded-lg">All</button>
<button className="px-4 py-2 text-xs font-medium bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50">Residential</button>
<button className="px-4 py-2 text-xs font-medium bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50">Commercial</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group block cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img alt="Listing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            VERIFIED
          </div>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            €650,000
          </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">The Glass House
        </h3>
<p className="text-sm text-slate-500 mb-2">Clontarf, Dublin 3</p>
<div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-2 mt-2">
<span className="flex items-center gap-1"><svg className="lucide lucide-bed w-3 h-3" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 3 Beds</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-bath w-3 h-3" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" x2="8" y1="5" y2="7"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="7" x2="7" y1="19" y2="21"></line><line x1="17" x2="17" y1="19" y2="21"></line></svg> 2 Baths</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-square w-3 h-3" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> 145m²</span>
</div>
</div>

<div className="group block cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img alt="Listing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            HOT
          </div>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            €820,000
          </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Mid-Century
          Modern</h3>
<p className="text-sm text-slate-500 mb-2">Ranelagh, Dublin 6</p>
<div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-2 mt-2">
<span className="flex items-center gap-1"><svg className="lucide lucide-bed w-3 h-3" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 4 Beds</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-bath w-3 h-3" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" x2="8" y1="5" y2="7"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="7" x2="7" y1="19" y2="21"></line><line x1="17" x2="17" y1="19" y2="21"></line></svg> 3 Baths</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-square w-3 h-3" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> 180m²</span>
</div>
</div>

<div className="group block cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 mb-4">
<img alt="Listing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">
            NEW
          </div>
<div className="absolute bottom-3 right-3 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            €1,150,000
          </div>
</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Penthouse
          Collection</h3>
<p className="text-sm text-slate-500 mb-2">Grand Canal Dock</p>
<div className="flex items-center gap-4 text-xs text-slate-500 border-t border-slate-100 pt-2 mt-2">
<span className="flex items-center gap-1"><svg className="lucide lucide-bed w-3 h-3" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 2 Beds</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-bath w-3 h-3" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path><line x1="10" x2="8" y1="5" y2="7"></line><line x1="2" x2="22" y1="12" y2="12"></line><line x1="7" x2="7" y1="19" y2="21"></line><line x1="17" x2="17" y1="19" y2="21"></line></svg> 2.5 Baths</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-square w-3 h-3" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> 130m²</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">
                    View 24 more listings <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none">
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-medium mb-6">
<svg className="lucide lucide-crown w-3 h-3" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
            Propel Private Client
          </div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Expert guidance from high-tier consultants.</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
            For portfolios over €2M, access our dedicated wealth management and property strategy team. Plan a secure,
            private video consultation to discuss your asset liquidation strategy.
          </p>
<div className="flex items-center gap-6 mb-10">
<div className="flex -space-x-3">
<img alt="Consultant" className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Consultant" className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Consultant" className="w-12 h-12 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-sm">
<p className="font-semibold text-white">Top 1% Agents</p>
<p className="text-slate-500">Available today</p>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<svg className="lucide lucide-check-circle w-5 h-5 text-indigo-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Off-market distribution strategy
            </li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="lucide lucide-check-circle w-5 h-5 text-indigo-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              Tax efficiency planning
            </li>
<li className="flex items-center gap-3 text-slate-300">
<svg className="lucide lucide-check-circle w-5 h-5 text-indigo-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              International buyer outreach
            </li>
</ul>
</div>

<div className="bg-white rounded-2xl p-6 text-slate-900 shadow-2xl">
<h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
<svg className="lucide lucide-calendar w-5 h-5 text-indigo-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Schedule Consultation
          </h3>
<div className="space-y-4">
<div className="">
<label className="text-xs font-semibold uppercase text-slate-500 mb-2 block">Select Date</label>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<div className="flex-shrink-0 w-16 h-20 rounded-lg border-2 border-slate-900 bg-slate-900 text-white flex flex-col items-center justify-center cursor-pointer">
<span className="text-xs font-medium opacity-70">Mon</span>
<span className="text-xl font-bold">14</span>
</div>
<div className="flex-shrink-0 w-16 h-20 rounded-lg border border-slate-200 hover:border-slate-300 flex flex-col items-center justify-center cursor-pointer transition-colors">
<span className="text-xs font-medium text-slate-500">Tue</span>
<span className="text-xl font-bold text-slate-900">15</span>
</div>
<div className="flex-shrink-0 w-16 h-20 rounded-lg border border-slate-200 hover:border-slate-300 flex flex-col items-center justify-center cursor-pointer transition-colors">
<span className="text-xs font-medium text-slate-500">Wed</span>
<span className="text-xl font-bold text-slate-900">16</span>
</div>
<div className="flex-shrink-0 w-16 h-20 rounded-lg border border-slate-200 hover:border-slate-300 flex flex-col items-center justify-center cursor-pointer transition-colors">
<span className="text-xs font-medium text-slate-500">Thu</span>
<span className="text-xl font-bold text-slate-900">17</span>
</div>
</div>
</div>
<div className="">
<label className="text-xs font-semibold uppercase text-slate-500 mb-2 block">Available Times</label>
<div className="grid grid-cols-2 gap-2">
<label className="time-slot cursor-pointer">
<input checked="" className="hidden" name="time" type="radio"/>
<div className="border border-slate-200 rounded-md py-2 px-3 text-center text-sm hover:border-slate-400 transition-colors">09:00 AM</div>
</label>
<label className="time-slot cursor-pointer">
<input className="hidden" name="time" type="radio"/>
<div className="hover:border-slate-400 transition-colors text-sm text-center border-slate-200 border rounded-md pt-2 pr-3 pb-2 pl-3">11:30 AM</div>
</label>
<label className="time-slot cursor-pointer">
<input className="hidden" name="time" type="radio"/>
<div className="border border-slate-200 rounded-md py-2 px-3 text-center text-sm hover:border-slate-400 transition-colors">02:00 PM</div>
</label>
<label className="time-slot cursor-pointer">
<input className="hidden" name="time" type="radio"/>
<div className="border border-slate-200 rounded-md py-2 px-3 text-center text-sm hover:border-slate-400 transition-colors">04:30 PM</div>
</label>
</div>
</div>
<button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors mt-2">
                                Confirm Booking
                            </button>
<p className="text-[10px] text-center text-slate-400">Timezone: Europe/London (GMT)</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-24 pb-24 border-b border-slate-200">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Get in touch</h2>
<p className="text-slate-600 mb-8 max-w-sm">Have questions about the valuation algorithm or our concierge tiers? Our
          team is ready.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<span className="text-slate-700 font-medium">hello@propel.io</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<span className="text-slate-700 font-medium">+1 (555) 000-0000</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-slate-700 font-medium">Dublin • London • New York</span>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">First Name</label>
<input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Last Name</label>
<input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Email</label>
<input className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500 uppercase">Message</label>
<textarea className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors h-24 resize-none" placeholder="I'm interested in selling..."></textarea>
</div>
<div className="flex items-center gap-2">
<input className="custom-checkbox h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 appearance-none border checked:bg-indigo-600 checked:border-transparent transition-all" id="terms" type="checkbox"/>
<label className="text-xs text-slate-500 select-none" htmlFor="terms">I agree to the privacy policy.</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-lg hover:bg-slate-800 transition-colors">Send Message</button>
</form>
</div>
</div>
</section>
</main>
<footer className="bg-white py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-bold">P</div>
<span className="font-bold text-slate-900 tracking-tight">Propel</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Twitter</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 Propel Real Estate.
            </div>
</div>
</footer>


    </>
  );
}
