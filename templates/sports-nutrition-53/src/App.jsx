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
      

<header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 bg-[#0e3b2f] rounded-xl flex items-center justify-center text-white font-semibold text-2xl tracking-tight shadow-sm">
<i className="w-6 h-6" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-[#0e3b2f] hidden sm:block">NUTRITION</span>
</div>

<nav className="hidden lg:flex space-x-8">
<a className="text-lg text-[#0e3b2f] font-semibold border-b-2 border-[#0e3b2f] pb-1" href="#">Bestsellers</a>
<a className="text-lg text-gray-600 hover:text-[#0e3b2f] font-medium transition-colors" href="#">Protein</a>
<a className="text-lg text-gray-600 hover:text-[#0e3b2f] font-medium transition-colors" href="#">Creatine</a>
<a className="text-lg text-gray-600 hover:text-[#0e3b2f] font-medium transition-colors" href="#">Vitamins</a>
<a className="text-lg text-gray-600 hover:text-[#0e3b2f] font-medium transition-colors" href="#">Bundles</a>
<a className="text-lg text-gray-600 hover:text-[#0e3b2f] font-medium transition-colors" href="#">Clearance</a>
<a className="text-lg text-gray-600 hover:text-[#0e3b2f] font-medium transition-colors" href="#">Track Order</a>
</nav>

<div className="flex items-center space-x-5">
<button className="p-2 text-gray-600 hover:text-[#0e3b2f] hover:bg-gray-50 rounded-xl transition-all">
<i className="w-6 h-6" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-gray-600 hover:text-[#0e3b2f] hover:bg-gray-50 rounded-xl transition-all">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
<button className="p-2 text-gray-600 hover:text-[#0e3b2f] hover:bg-gray-50 rounded-xl transition-all relative">
<i className="w-6 h-6" data-lucide="shopping-cart" strokeWidth="1.5"></i>
<span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#0e3b2f] rounded-full"></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-[#f8f6f3] overflow-hidden" style={{animation: 'subtleFadeIn 0.8s ease-out forwards'}}>

<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#0e3b2f]/5 to-transparent skew-x-12 translate-x-32 opacity-60"></div>
<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0e3b2f]/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col md:flex-row items-center">

<div className="md:w-1/2 md:pr-12 text-center md:text-left z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-8">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-base font-medium tracking-tight text-[#0e3b2f]">Live Sale</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-[80px] font-semibold tracking-tight text-[#0e3b2f] leading-[1.1] mb-6">
                    UP TO 45% <br/> OFF <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0e3b2f] to-[#1f785f]">BESTSELLERS</span>
</h1>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-800 mb-4">
                    + EXTRA ₹500 OFF ABOVE ₹5,000
                </h2>
<p className="text-lg text-gray-500 mb-10 flex items-center justify-center md:justify-start gap-2">
<i className="w-5 h-5" data-lucide="info" strokeWidth="1.5"></i>
                    Offer auto-applies at checkout
                </p>
<button className="group inline-flex items-center justify-center gap-3 bg-[#0e3b2f] text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-[#0a2921] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Shop Now
                    <i className="w-6 h-6 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="md:w-1/2 mt-16 md:mt-0 relative w-full flex justify-center">
<div className="relative w-full max-w-lg aspect-square">
<div className="absolute inset-0 bg-[#0e3b2f]/10 rounded-full blur-3xl transform translate-y-10"></div>
<div className="relative w-full h-full bg-white rounded-3xl shadow-2xl border border-white/50 overflow-hidden flex flex-col items-center justify-center p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"></div>
<i className="w-48 h-48 text-[#0e3b2f]/20 relative z-10 mb-6" data-lucide="package-open" strokeWidth="1"></i>
<h3 className="text-3xl font-semibold tracking-tight text-gray-800 relative z-10 text-center">Premium <br/> Nutrition Pack</h3>
</div>

<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center -rotate-12">
<i className="w-12 h-12 text-yellow-500" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="absolute top-12 -right-6 w-24 h-24 bg-[#0e3b2f] rounded-2xl shadow-xl flex flex-col items-center justify-center rotate-12 text-white">
<span className="text-2xl font-semibold tracking-tight">45%</span>
<span className="text-base">OFF</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0e3b2f] py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/20">
<div className="flex items-center justify-center pt-4 md:pt-0 pb-4 md:pb-0 px-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-white" data-lucide="gift" strokeWidth="1.5"></i>
</div>
<p className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-snug">
                            Free Protein Sample <br/>
<span className="text-lg font-normal text-white/80">When You Spend ₹3,000</span>
</p>
</div>
</div>
<div className="flex items-center justify-center pt-8 md:pt-0 px-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<p className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-snug">
                            Free Impact Bar <br/>
<span className="text-lg font-normal text-white/80">When You Spend ₹6,000</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center gap-4 md:gap-6">
<a className="px-8 py-4 bg-[#0e3b2f] text-white rounded-2xl text-lg font-semibold shadow-md shadow-[#0e3b2f]/20 hover:shadow-xl hover:shadow-[#0e3b2f]/30 hover:-translate-y-1 transition-all duration-300" href="#">PROTEIN</a>
<a className="px-8 py-4 bg-[#0e3b2f] text-white rounded-2xl text-lg font-semibold shadow-md shadow-[#0e3b2f]/20 hover:shadow-xl hover:shadow-[#0e3b2f]/30 hover:-translate-y-1 transition-all duration-300" href="#">CREATINE</a>
<a className="px-8 py-4 bg-[#0e3b2f] text-white rounded-2xl text-lg font-semibold shadow-md shadow-[#0e3b2f]/20 hover:shadow-xl hover:shadow-[#0e3b2f]/30 hover:-translate-y-1 transition-all duration-300" href="#">PROTEIN BAR</a>
<a className="px-8 py-4 bg-[#0e3b2f] text-white rounded-2xl text-lg font-semibold shadow-md shadow-[#0e3b2f]/20 hover:shadow-xl hover:shadow-[#0e3b2f]/30 hover:-translate-y-1 transition-all duration-300" href="#">VITAMINS</a>
<a className="px-8 py-4 bg-[#0e3b2f] text-white rounded-2xl text-lg font-semibold shadow-md shadow-[#0e3b2f]/20 hover:shadow-xl hover:shadow-[#0e3b2f]/30 hover:-translate-y-1 transition-all duration-300" href="#">HYDRATE</a>
<a className="px-8 py-4 bg-[#0e3b2f] text-white rounded-2xl text-lg font-semibold shadow-md shadow-[#0e3b2f]/20 hover:shadow-xl hover:shadow-[#0e3b2f]/30 hover:-translate-y-1 transition-all duration-300" href="#">AMINOS</a>
</div>
</div>
</section>

<section className="py-20 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 flex flex-col">
<div className="aspect-[4/5] relative bg-gradient-to-br from-blue-50 to-white p-8 flex flex-col items-center justify-between text-center overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-20"></div>
<div className="w-full h-48 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-blue-400" data-lucide="pill" strokeWidth="1.5"></i>
</div>
<div className="relative z-10 w-full mt-6">
<span className="text-base font-semibold text-[#0e3b2f] tracking-tight uppercase mb-2 block">Special Offer</span>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 leading-tight">Buy 2 Get 1 Free</h3>
<p className="text-lg text-gray-500 mb-6">On All Vitamins</p>
<button className="w-full bg-white border-2 border-[#0e3b2f] text-[#0e3b2f] py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0e3b2f] hover:text-white transition-colors">Shop Now</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 flex flex-col">
<div className="aspect-[4/5] relative bg-gradient-to-br from-orange-50 to-white p-8 flex flex-col items-center justify-between text-center overflow-hidden">
<div className="w-full h-48 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-orange-400" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<div className="relative z-10 w-full mt-6">
<span className="text-base font-semibold text-[#0e3b2f] tracking-tight uppercase mb-2 block">Combo Deals</span>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 leading-tight">BCAA + Pre-Workout</h3>
<p className="text-lg text-gray-500 mb-6">Any 2 for ₹1999</p>
<button className="w-full bg-white border-2 border-[#0e3b2f] text-[#0e3b2f] py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0e3b2f] hover:text-white transition-colors">Shop Now</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 flex flex-col">
<div className="aspect-[4/5] relative bg-gradient-to-br from-amber-50 to-white p-8 flex flex-col items-center justify-between text-center overflow-hidden">
<div className="w-full h-48 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-amber-500" data-lucide="cookie" strokeWidth="1.5"></i>
</div>
<div className="relative z-10 w-full mt-6">
<span className="text-base font-semibold text-[#0e3b2f] tracking-tight uppercase mb-2 block">Snacks</span>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 leading-tight">Impact Protein Bar</h3>
<p className="text-lg text-gray-500 mb-6">6 Bars for ₹1199</p>
<button className="w-full bg-white border-2 border-[#0e3b2f] text-[#0e3b2f] py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0e3b2f] hover:text-white transition-colors">Shop Now</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-400 border border-gray-100 flex flex-col">
<div className="aspect-[4/5] relative bg-gradient-to-br from-emerald-50 to-white p-8 flex flex-col items-center justify-between text-center overflow-hidden">
<div className="w-full h-48 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-emerald-500" data-lucide="glass-water" strokeWidth="1.5"></i>
</div>
<div className="relative z-10 w-full mt-6">
<span className="text-base font-semibold text-[#0e3b2f] tracking-tight uppercase mb-2 block">Refresh</span>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 leading-tight">Clear Whey Isolate</h3>
<p className="text-lg text-gray-500 mb-6">Refreshing Mocktails</p>
<button className="w-full bg-white border-2 border-[#0e3b2f] text-[#0e3b2f] py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0e3b2f] hover:text-white transition-colors">Shop Now</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-8 mb-12 border-b border-gray-100 pb-6">
<h2 className="text-4xl font-semibold tracking-tight text-[#0e3b2f]">Trending</h2>
<a className="text-xl font-medium text-gray-400 hover:text-[#0e3b2f] transition-colors relative after:absolute after:bottom-[-26px] after:left-0 after:w-full after:h-0.5 after:bg-transparent hover:after:bg-[#0e3b2f]" href="#">Vitamins</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group flex flex-col bg-white rounded-3xl p-5 border border-gray-100 hover:border-[#0e3b2f]/20 hover:shadow-2xl transition-all duration-300 relative">
<div className="absolute top-4 left-4 z-10 bg-red-50 text-red-600 px-3 py-1 rounded-lg text-base font-semibold tracking-tight">Best Seller</div>
<button className="absolute top-4 right-4 z-10 p-2.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:scale-110 transition-all border border-gray-50"><i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i></button>
<div className="relative aspect-square mb-6 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<i className="w-24 h-24 text-gray-300 drop-shadow-md transition-transform duration-500 group-hover:scale-110" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-[#0e3b2f] transition-colors line-clamp-2 min-h-[56px]">Impact Whey Protein Blend</h3>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current text-gray-300" data-lucide="star-half"></i>
</div>
<span className="text-base text-gray-500 ml-2 font-medium">(2705)</span>
</div>
<div className="flex flex-col gap-1 mb-6">
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-gray-900">₹1,399</span>
<span className="text-lg text-gray-400 line-through font-medium">₹1,899</span>
</div>
<span className="text-base text-green-600 font-medium">Extra ₹500 off above ₹5000</span>
</div>
<div className="mt-auto">
<button className="w-full bg-[#0e3b2f] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0a2a21] transition-colors shadow-md shadow-[#0e3b2f]/10">Quick Buy</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl p-5 border border-gray-100 hover:border-[#0e3b2f]/20 hover:shadow-2xl transition-all duration-300 relative">
<button className="absolute top-4 right-4 z-10 p-2.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:scale-110 transition-all border border-gray-50"><i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i></button>
<div className="relative aspect-square mb-6 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<i className="w-24 h-24 text-gray-300 drop-shadow-md transition-transform duration-500 group-hover:scale-110" data-lucide="beaker"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-[#0e3b2f] transition-colors line-clamp-2 min-h-[56px]">Creatine Monohydrate Powder</h3>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-base text-gray-500 ml-2 font-medium">(115)</span>
</div>
<div className="flex flex-col gap-1 mb-6">
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-gray-900">₹299</span>
<span className="text-lg text-gray-400 line-through font-medium">₹699</span>
</div>
<span className="text-base text-gray-500 font-medium">Inclusive of all taxes</span>
</div>
<div className="mt-auto">
<button className="w-full bg-[#0e3b2f] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0a2a21] transition-colors shadow-md shadow-[#0e3b2f]/10">Quick Buy</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl p-5 border border-gray-100 hover:border-[#0e3b2f]/20 hover:shadow-2xl transition-all duration-300 relative">
<button className="absolute top-4 right-4 z-10 p-2.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:scale-110 transition-all border border-gray-50"><i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i></button>
<div className="relative aspect-square mb-6 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<i className="w-24 h-24 text-gray-300 drop-shadow-md transition-transform duration-500 group-hover:scale-110" data-lucide="box"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-[#0e3b2f] transition-colors line-clamp-2 min-h-[56px]">Impact Whey Isolate</h3>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current text-gray-300" data-lucide="star"></i>
</div>
<span className="text-base text-gray-500 ml-2 font-medium">(1775)</span>
</div>
<div className="flex flex-col gap-1 mb-6">
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-gray-900">₹2,299</span>
<span className="text-lg text-gray-400 line-through font-medium">₹2,599</span>
</div>
<span className="text-base text-green-600 font-medium">Extra ₹500 off above ₹5000</span>
</div>
<div className="mt-auto">
<button className="w-full bg-[#0e3b2f] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0a2a21] transition-colors shadow-md shadow-[#0e3b2f]/10">Quick Buy</button>
</div>
</div>

<div className="group flex flex-col bg-white rounded-3xl p-5 border border-gray-100 hover:border-[#0e3b2f]/20 hover:shadow-2xl transition-all duration-300 relative">
<button className="absolute top-4 right-4 z-10 p-2.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-red-500 hover:scale-110 transition-all border border-gray-50"><i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i></button>
<div className="relative aspect-square mb-6 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center group-hover:bg-gray-100 transition-colors">
<i className="w-24 h-24 text-gray-300 drop-shadow-md transition-transform duration-500 group-hover:scale-110" data-lucide="coffee"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2 group-hover:text-[#0e3b2f] transition-colors line-clamp-2 min-h-[56px]">Impact Hot Protein</h3>
<div className="flex items-center gap-1 mb-4">
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current text-gray-300" data-lucide="star"></i>
<i className="w-4 h-4 fill-current text-gray-300" data-lucide="star"></i>
</div>
<span className="text-base text-gray-500 ml-2 font-medium">(12)</span>
</div>
<div className="flex flex-col gap-1 mb-6">
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-gray-900">₹2,999</span>
<span className="text-lg text-gray-400 line-through font-medium">₹4,499</span>
</div>
<span className="text-base text-gray-500 font-medium">Inclusive of all taxes</span>
</div>
<div className="mt-auto">
<button className="w-full bg-[#0e3b2f] text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-[#0a2a21] transition-colors shadow-md shadow-[#0e3b2f]/10">Quick Buy</button>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="px-10 py-4 border-2 border-[#0e3b2f] text-[#0e3b2f] rounded-2xl font-semibold text-lg hover:bg-[#0e3b2f] hover:text-white transition-colors">View All Products</button>
</div>
</div>
</section>

<section className="bg-[#f8f6f3] py-24 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col sm:flex-row items-start gap-8">
<div className="w-20 h-20 bg-blue-50/80 rounded-2xl flex items-center justify-center flex-shrink-0 border border-blue-100">
<i className="w-10 h-10 text-[#0e3b2f]" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-3xl font-semibold tracking-tight text-[#0e3b2f] mb-4 leading-tight">Proven by Science</h3>
<p className="text-lg text-gray-600 leading-relaxed">Backed by rigorous research and testing, our formulations deliver real results grounded in solid, verifiable data.</p>
</div>
</div>

<div className="bg-white p-10 md:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col sm:flex-row items-start gap-8">
<div className="w-20 h-20 bg-green-50/80 rounded-2xl flex items-center justify-center flex-shrink-0 border border-green-100">
<i className="w-10 h-10 text-[#0e3b2f]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-3xl font-semibold tracking-tight text-[#0e3b2f] mb-4 leading-tight">Crafted by Nutritionists</h3>
<p className="text-lg text-gray-600 leading-relaxed">Our products are born from the expertise of top nutritionists who obsess over every ingredient and detail.</p>
</div>
</div>
</div>
<p className="text-center text-base text-gray-400 mt-12">*Source: Euromonitor International Limited; Consumer Health 2023ed, Brand retail value sales, World 2023 data.</p>
</div>
</section>

<footer className="bg-[#0e3b2f] text-white pt-20 pb-12 border-t border-[#0a2a21]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

<div className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
<h4 className="text-2xl font-semibold tracking-tight text-white mb-3">Sign up to our newsletter</h4>
<p className="text-lg text-white/70 mb-8">Get exclusive offers, early access to new products, and expert fitness tips.</p>
<form className="flex flex-col gap-4">
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-lg" placeholder="Enter your email address" type="email"/>
<button className="w-full bg-white text-[#0e3b2f] px-6 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg" type="button">Sign Up Now</button>
</form>
</div>

<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">
<div>
<h5 className="text-lg font-semibold tracking-tight text-white mb-6 uppercase">Help &amp; Information</h5>
<ul className="space-y-4">
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Customer Services</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Help Centre</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Returns Policy</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Delivery Info</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Track My Order</a></li>
</ul>
</div>
<div>
<h5 className="text-lg font-semibold tracking-tight text-white mb-6 uppercase">Products</h5>
<ul className="space-y-4">
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Nutrition</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Clothing &amp; Accs</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Expert Advice</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Protein</a></li>
</ul>
</div>
<div>
<h5 className="text-lg font-semibold tracking-tight text-white mb-6 uppercase">Company Info</h5>
<ul className="space-y-4">
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Quality Assurance</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Modern Slavery</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
<div>
<h5 className="text-lg font-semibold tracking-tight text-white mb-6 uppercase">Investors</h5>
<ul className="space-y-4">
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Annual Report 21-22</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Annual Report 22-23</a></li>
<li><a className="text-lg text-white/70 hover:text-white transition-colors" href="#">Annual Report 23-24</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<span className="text-lg font-medium text-white/90">🇮🇳 IN | Change</span>
</div>
<div className="flex gap-8">
<a className="text-lg text-white/50 hover:text-white transition-colors" href="#">Cookie Settings</a>
<a className="text-lg text-white/50 hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
<p className="text-lg text-white/40">© 2024 NUTRITION Brand. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
