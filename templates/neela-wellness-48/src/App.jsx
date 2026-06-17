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
      

<div className="bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-xs font-medium text-center py-2">
        Free delivery on first subscription order! Use code: <span className="font-bold tracking-wide">NEELA100</span>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E9D5FF] shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-4">

<div className="flex items-center gap-3">
<button className="md:hidden text-gray-600 hover:text-[#7C3AED]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="flex flex-col leading-none group" href="#">
<span className="text-2xl font-bold tracking-tighter text-[#7C3AED] group-hover:opacity-90 transition-opacity">Neela</span>
</a>
</div>

<div className="hidden md:flex flex-1 max-w-xl mx-auto">
<div className="relative w-full">
<input className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none text-sm transition-all placeholder-gray-400 text-gray-700" placeholder="Search for pads, wellness, intimate care..." type="text"/>
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center gap-3 sm:gap-5">
<button className="md:hidden text-gray-600">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="text-gray-600 hover:text-[#7C3AED] transition-colors relative" href="#">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-[#EC4899] rounded-full border-2 border-white"></span>
</a>
<a className="text-gray-600 hover:text-[#7C3AED] transition-colors relative group" href="#">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-[#7C3AED] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">3</span>
</a>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#7C3AED] pl-2 border-l border-gray-200" href="#">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span>Sign In</span>
</a>
</div>
</div>

<div className="md:hidden pb-3 px-1">
<div className="relative w-full">
<input className="w-full pl-9 pr-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#7C3AED] outline-none text-sm" placeholder="Search essentials..." type="text"/>
<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-10">

<section className="relative overflow-hidden rounded-2xl bg-[#FAF5FF]">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#E9D5FF]/30 to-transparent"></div>
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-3xl"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 gap-8">
<div className="max-w-lg space-y-6 text-center md:text-left">
<span className="inline-block px-3 py-1 bg-white text-[#7C3AED] text-xs font-semibold rounded-full border border-[#E9D5FF] shadow-sm">
                        ✨ Monthly Wellness Partner
                    </span>
<h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                        Never run out of your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]">Period Essentials</span>
</h1>
<p className="text-gray-500 text-base md:text-lg leading-relaxed">
                        Customizable monthly hygiene boxes delivered discreetly to your door. Save 10% on every subscription.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<button className="h-12 px-8 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold shadow-lg shadow-[#7C3AED]/20 transition-all flex items-center justify-center gap-2">
<span>Start Subscription</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-xl bg-white text-gray-700 border border-gray-200 hover:border-[#7C3AED] hover:text-[#7C3AED] font-medium transition-all">
                            View Bundles
                        </button>
</div>
</div>
<div className="relative w-full md:w-1/2 flex justify-center">

<div className="relative w-full max-w-sm aspect-[4/3]">
<img alt="Hygiene Products" className="w-full h-full object-cover rounded-2xl shadow-xl shadow-[#7C3AED]/10 z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 z-20 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-400 font-medium">Verified</p>
<p className="text-sm font-bold text-gray-800">100% Safe</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 md:gap-8 pb-2">

<a className="group flex flex-col items-center gap-3 min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FAF5FF] group-hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-300 border border-gray-100">
<iconify-icon className="text-[#7C3AED] group-hover:text-white transition-colors" icon="solar:medical-kit-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-[#7C3AED] text-center">Sanitary</span>
</a>
<a className="group flex flex-col items-center gap-3 min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FAF5FF] group-hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-300 border border-gray-100">
<iconify-icon className="text-[#7C3AED] group-hover:text-white transition-colors" icon="solar:bath-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-[#7C3AED] text-center">Intimate</span>
</a>
<a className="group flex flex-col items-center gap-3 min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FAF5FF] group-hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-300 border border-gray-100">
<iconify-icon className="text-[#7C3AED] group-hover:text-white transition-colors" icon="solar:heart-pulse-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-[#7C3AED] text-center">Maternity</span>
</a>
<a className="group flex flex-col items-center gap-3 min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FAF5FF] group-hover:bg-[#7C3AED] flex items-center justify-center transition-colors duration-300 border border-gray-100">
<iconify-icon className="text-[#7C3AED] group-hover:text-white transition-colors" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-[#7C3AED] text-center">Wellness</span>
</a>
<a className="group flex flex-col items-center gap-3 min-w-[80px] cursor-pointer" href="#">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-50 group-hover:bg-gray-800 flex items-center justify-center transition-colors duration-300 border border-gray-100">
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:widget-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-gray-600 group-hover:text-gray-800 text-center">View All</span>
</a>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Smart Bundles</h2>
<p className="text-sm text-gray-500 mt-1">Curated kits for your specific needs</p>
</div>
<a className="text-sm font-semibold text-[#EC4899] hover:text-[#DB2777] flex items-center gap-1" href="#">
                    See All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[320px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative snap-start">
<div className="absolute top-4 left-4 z-10 bg-[#EC4899] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">SAVE 15%</div>
<div className="h-40 bg-gray-50 rounded-xl mb-4 overflow-hidden relative group">
<img alt="Period Care Kit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Period Care Kit - Regular</h3>
<p className="text-xs text-gray-500 mb-3">Include 2 Packs Pads, 1 Intimate Wash</p>
<div className="flex items-end justify-between">
<div>
<span className="text-gray-400 text-xs line-through block">৳ 450</span>
<span className="text-[#7C3AED] font-bold text-lg">৳ 385</span>
</div>
<button className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:bag-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative snap-start">
<div className="absolute top-4 left-4 z-10 bg-[#EC4899] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">SAVE 20%</div>
<div className="h-40 bg-gray-50 rounded-xl mb-4 overflow-hidden relative group">
<img alt="Maternity Kit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">New Mom Maternity Kit</h3>
<p className="text-xs text-gray-500 mb-3">Maternity Pads, Breast Pads, Oil</p>
<div className="flex items-end justify-between">
<div>
<span className="text-gray-400 text-xs line-through block">৳ 1,200</span>
<span className="text-[#7C3AED] font-bold text-lg">৳ 960</span>
</div>
<button className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:bag-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow relative snap-start">
<div className="absolute top-4 left-4 z-10 bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">BESTSELLER</div>
<div className="h-40 bg-gray-50 rounded-xl mb-4 overflow-hidden relative group">
<img alt="Premium Hygiene Box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Premium Hygiene Box</h3>
<p className="text-xs text-gray-500 mb-3">Organic Pads, Razor, Soothing Gel</p>
<div className="flex items-end justify-between">
<div>
<span className="text-gray-400 text-xs line-through block">৳ 850</span>
<span className="text-[#7C3AED] font-bold text-lg">৳ 750</span>
</div>
<button className="w-8 h-8 rounded-full bg-[#FAF5FF] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white flex items-center justify-center transition-colors">
<iconify-icon icon="solar:bag-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#EC4899] p-6 md:p-10 text-white relative overflow-hidden shadow-lg shadow-purple-200">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/20">
<iconify-icon icon="solar:star-linear"></iconify-icon> Neela Club
                    </div>
<h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe &amp; Save 10% Extra</h2>
<p className="text-white/90 text-sm md:text-base max-w-md mb-6">
                        Automate your monthly essentials. No commitments, cancel or skip anytime. Get priority delivery.
                    </p>
<a className="inline-block bg-white text-[#7C3AED] hover:bg-gray-50 px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-colors" href="#">
                        Create Your Box
                    </a>
</div>

<div className="w-full md:w-auto flex justify-center">
<div className="relative w-48 h-32 md:w-64 md:h-40 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg transform rotate-[-5deg] flex items-center justify-center shadow-xl">
<div className="text-center">
<iconify-icon className="text-white mb-1" icon="solar:box-minimalistic-linear" width="48"></iconify-icon>
<p className="text-xs font-medium">Monthly Kit</p>
</div>

<div className="absolute -top-4 -right-4 bg-white text-[#EC4899] p-2 rounded-lg shadow-md transform rotate-[10deg]">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">Trending Now</h2>

<div className="hidden sm:flex items-center gap-1 text-xs font-mono bg-red-50 text-red-500 px-2 py-1 rounded border border-red-100">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>12:04:30</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">

<div className="group bg-white rounded-2xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative">
<button className="absolute top-3 right-3 z-10 text-gray-300 hover:text-[#EC4899] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="aspect-square bg-[#FAF5FF] rounded-xl mb-3 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold text-[#7C3AED] px-2 py-0.5 rounded border border-[#E9D5FF] flex items-center gap-1">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> Subscribable
                         </div>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-400 font-medium">Neela</p>
<h3 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2 leading-tight h-10">Ultra Soft Night Pads (XL) - 10 Count</h3>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-yellow-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-500">4.8 (120)</span>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<span className="text-xs text-gray-400 line-through">৳ 180</span>
<div className="flex items-center gap-2">
<span className="text-[#7C3AED] font-bold text-base md:text-lg">৳ 160</span>
<span className="text-[10px] text-red-500 bg-red-50 px-1 rounded">-11%</span>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center hover:bg-[#6D28D9] shadow-sm shadow-[#7C3AED]/30 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative">
<button className="absolute top-3 right-3 z-10 text-gray-300 hover:text-[#EC4899] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="aspect-square bg-[#FAF5FF] rounded-xl mb-3 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-400 font-medium">Venus</p>
<h3 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2 leading-tight h-10">Intimate Wash pH Balance - 100ml</h3>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-yellow-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-500">4.9 (85)</span>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<span className="text-xs text-gray-400 line-through">৳ 350</span>
<div className="flex items-center gap-2">
<span className="text-[#7C3AED] font-bold text-base md:text-lg">৳ 290</span>
<span className="text-[10px] text-red-500 bg-red-50 px-1 rounded">-17%</span>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center hover:bg-[#6D28D9] shadow-sm shadow-[#7C3AED]/30 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative">
<button className="absolute top-3 right-3 z-10 text-gray-300 hover:text-[#EC4899] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="aspect-square bg-[#FAF5FF] rounded-xl mb-3 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[10px] font-bold text-[#7C3AED] px-2 py-0.5 rounded border border-[#E9D5FF] flex items-center gap-1">
<iconify-icon icon="solar:refresh-circle-linear"></iconify-icon> Subscribable
                         </div>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-400 font-medium">Neela</p>
<h3 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2 leading-tight h-10">Pantyliners Daily Fresh - 20 Count</h3>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-yellow-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-500">4.5 (42)</span>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<span className="text-xs text-gray-400 line-through">৳ 120</span>
<div className="flex items-center gap-2">
<span className="text-[#7C3AED] font-bold text-base md:text-lg">৳ 100</span>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center hover:bg-[#6D28D9] shadow-sm shadow-[#7C3AED]/30 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-3 md:p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 relative">
<button className="absolute top-3 right-3 z-10 text-gray-300 hover:text-[#EC4899] transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
<div className="aspect-square bg-[#FAF5FF] rounded-xl mb-3 overflow-hidden relative">
<img alt="Product" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-1">
<p className="text-xs text-gray-400 font-medium">Venus</p>
<h3 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-2 leading-tight h-10">Menstrual Cup (Size M) - Reusable</h3>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-yellow-400 text-xs" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-gray-500">5.0 (15)</span>
</div>
<div className="flex items-end justify-between pt-1">
<div>
<span className="text-xs text-gray-400 line-through">৳ 800</span>
<div className="flex items-center gap-2">
<span className="text-[#7C3AED] font-bold text-base md:text-lg">৳ 650</span>
<span className="text-[10px] text-red-500 bg-red-50 px-1 rounded">-18%</span>
</div>
</div>
<button className="w-8 h-8 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center hover:bg-[#6D28D9] shadow-sm shadow-[#7C3AED]/30 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-t border-gray-100">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#7C3AED]">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900 text-sm">100% Authentic</h4>
<p className="text-xs text-gray-500">Directly from brands</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#7C3AED]">
<iconify-icon icon="solar:box-minimalistic-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900 text-sm">Discreet Packaging</h4>
<p className="text-xs text-gray-500">We respect your privacy</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#7C3AED]">
<iconify-icon icon="solar:truck-delivery-linear" width="28"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-gray-900 text-sm">Fast Delivery</h4>
<p className="text-xs text-gray-500">24-48 hours inside Dhaka</p>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#E9D5FF] pt-12 pb-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl font-bold tracking-tighter text-[#7C3AED] mb-4 block">Neela</span>
<p className="text-sm text-gray-500 leading-relaxed mb-6">
                        Empowering women with seamless hygiene solutions. Your wellness, delivered monthly.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:facebook-rect" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#FAF5FF] flex items-center justify-center text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram-filled" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4">Shop</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#7C3AED]" href="#">All Products</a></li>
<li><a className="hover:text-[#7C3AED]" href="#">Sanitary Pads</a></li>
<li><a className="hover:text-[#7C3AED]" href="#">Intimate Care</a></li>
<li><a className="hover:text-[#7C3AED]" href="#">Bundles</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#7C3AED]" href="#">Track Order</a></li>
<li><a className="hover:text-[#7C3AED]" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#7C3AED]" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#7C3AED]" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4">Get the App</h4>
<div className="space-y-3">
<button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity">
<iconify-icon icon="ic:baseline-apple" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] leading-none text-gray-300">Download on the</div>
<div className="text-sm font-bold">App Store</div>
</div>
</button>
<button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center gap-3 hover:opacity-80 transition-opacity">
<iconify-icon icon="ion:logo-google-playstore" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] leading-none text-gray-300">Get it on</div>
<div className="text-sm font-bold">Google Play</div>
</div>
</button>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2024 Neela Wellness. All rights reserved.</p>
<div className="flex gap-4">
<span>Dhaka, Bangladesh</span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 md:hidden pb-safe">
<div className="grid grid-cols-4 h-16">
<a className="flex flex-col items-center justify-center gap-1 text-[#7C3AED]" href="#">
<iconify-icon icon="solar:home-2-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#7C3AED]" href="#">
<iconify-icon icon="solar:widget-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Categories</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#7C3AED] relative" href="#">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
<span className="absolute top-2 right-6 w-2 h-2 bg-[#EC4899] rounded-full"></span>
<span className="text-[10px] font-medium">Cart</span>
</a>
<a className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#7C3AED]" href="#">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Account</span>
</a>
</div>
</div>

    </>
  );
}
