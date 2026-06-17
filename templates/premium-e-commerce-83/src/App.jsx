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
colors: {
congress: {
50: '#eff7ff',
100: '#deeeff',
200: '#b6deff',
300: '#76c5ff',
400: '#2da8ff',
500: '#028df5',
600: '#006ed2',
700: '#0058aa',
800: '#004b8d',
900: '#073e73',
950: '#04274d',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
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
      

<div className="w-full max-w-[414px] bg-white shadow-2xl relative min-h-screen pb-[88px]">

<div className="absolute top-0 w-full z-20 pt-12 px-5 flex justify-between items-center pointer-events-none">
<button className="pointer-events-auto h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-congress-100 flex items-center justify-center text-congress-900 shadow-sm hover:bg-white transition">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<div className="flex gap-3 pointer-events-auto">
<button className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-congress-100 flex items-center justify-center text-congress-900 shadow-sm hover:bg-white transition">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
<button className="h-10 w-10 rounded-full bg-white/80 backdrop-blur-md border border-congress-100 flex items-center justify-center text-congress-900 shadow-sm hover:bg-white transition">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
</button>
</div>
</div>

<div className="relative bg-congress-50 w-full h-[420px] flex items-center justify-center overflow-hidden rounded-b-[40px]">

<img alt="Nike Men's Running Shoes" className="w-full h-full object-cover mix-blend-multiply opacity-95 pt-10" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 flex gap-2">
<div className="w-6 h-1.5 bg-congress-600 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-congress-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-congress-300 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-congress-300 rounded-full"></div>
</div>
</div>

<div className="px-5 pt-6 flex flex-col gap-8">

<div>
<div className="flex justify-between items-start gap-4">
<h1 className="text-2xl font-bold text-congress-950 leading-tight tracking-tight">Nike Men's Running Shoes (Model Variant)</h1>
</div>
<div className="flex items-center gap-3 mt-3">
<span className="text-2xl font-bold text-congress-900">₹2,899</span>
<span className="text-sm text-congress-400 line-through font-medium">₹5,999</span>
<span className="px-2 py-1 bg-congress-100 text-congress-600 text-xs font-bold rounded-md border border-congress-200">52% OFF</span>
</div>
</div>

<div className="space-y-4">

<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-congress-500 uppercase tracking-wide">Choose Color</span>
<div className="flex gap-3">
<button className="h-10 w-10 rounded-full border-2 border-congress-500 p-0.5">
<div className="w-full h-full rounded-full bg-congress-900"></div>
</button>
<button className="h-10 w-10 rounded-full border border-congress-200 p-0.5">
<div className="w-full h-full rounded-full bg-congress-200"></div>
</button>
<button className="h-10 w-10 rounded-full border border-congress-200 p-0.5">
<div className="w-full h-full rounded-full bg-white border border-congress-100"></div>
</button>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="text-xs font-semibold text-congress-500 uppercase tracking-wide">Select Size (UK)</span>
<button className="text-xs font-semibold text-congress-600 underline decoration-congress-300 underline-offset-2">Size Chart</button>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="flex-shrink-0 w-12 h-12 rounded-xl border border-congress-200 text-congress-600 font-medium flex items-center justify-center hover:border-congress-400">6</button>
<button className="flex-shrink-0 w-12 h-12 rounded-xl border border-congress-200 text-congress-600 font-medium flex items-center justify-center hover:border-congress-400">7</button>
<button className="flex-shrink-0 w-12 h-12 rounded-xl bg-congress-500 text-white font-semibold flex items-center justify-center shadow-lg shadow-congress-500/30">8</button>
<button className="flex-shrink-0 w-12 h-12 rounded-xl border border-congress-200 text-congress-600 font-medium flex items-center justify-center hover:border-congress-400">9</button>
<button className="flex-shrink-0 w-12 h-12 rounded-xl border border-congress-200 text-congress-600 font-medium flex items-center justify-center hover:border-congress-400 opacity-50 cursor-not-allowed">10</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-congress-200 bg-white overflow-hidden shadow-lg shadow-congress-100">

<div className="bg-congress-50 px-4 py-3 border-b border-congress-100 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1 bg-congress-500 rounded text-white">
<i className="w-3.5 h-3.5" data-lucide="percent"></i>
</div>
<span className="text-sm font-bold text-congress-900">No-Cost EMI</span>
</div>
<span className="text-[10px] font-semibold text-congress-500 bg-white px-2 py-0.5 rounded border border-congress-100">Powered by Snapmint</span>
</div>
<div className="p-4 space-y-4">

<div className="flex justify-between items-center bg-white">
<div>
<p className="text-xs text-congress-500 font-medium uppercase mb-0.5">Pay Now</p>
<p className="text-lg font-bold text-congress-900">₹350 <span className="text-sm font-medium text-congress-400">Downpayment</span></p>
</div>
<div className="h-8 w-8 rounded-full bg-congress-50 flex items-center justify-center text-congress-500">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
</div>
<div className="h-px bg-congress-100 w-full"></div>

<div>
<p className="text-xs text-congress-500 font-medium uppercase mb-3">Choose EMI Tenure</p>
<p className="text-[10px] text-congress-400 mb-2">EMIs Starting from Today</p>
<div className="space-y-2">

<label className="relative block cursor-pointer group">
<input checked="" className="peer sr-only emi-radio" name="emi_plan" type="radio"/>
<div className="p-3 rounded-xl border border-congress-200 flex justify-between items-center transition-all group-hover:border-congress-300">
<div className="flex flex-col">
<span className="font-bold text-congress-900">₹1,050 × 2 months</span>
<span className="text-[10px] font-medium text-congress-400">(0.8% per month*)</span>
</div>
<div className="w-5 h-5 rounded-full border border-congress-300 radio-circle flex items-center justify-center"></div>
</div>
</label>

<label className="relative block cursor-pointer group">
<input className="peer sr-only emi-radio" name="emi_plan" type="radio"/>
<div className="p-3 rounded-xl border border-congress-200 flex justify-between items-center transition-all group-hover:border-congress-300">
<div className="flex flex-col">
<span className="font-bold text-congress-900">₹720 × 3 months</span>
<span className="text-[10px] font-medium text-congress-400">(1.1% per month*)</span>
</div>
<div className="w-5 h-5 rounded-full border border-congress-300 radio-circle flex items-center justify-center"></div>
</div>
</label>
</div>
<p className="text-[10px] text-congress-300 mt-2 text-right">*Total extra payment applies.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4">

<div className="flex gap-4 items-start p-4 rounded-xl bg-congress-50 border border-congress-100">
<div className="h-10 w-10 shrink-0 rounded-full bg-white flex items-center justify-center text-congress-600 shadow-sm">
<i className="w-5 h-5" data-lucide="store"></i>
</div>
<div>
<p className="text-xs font-semibold text-congress-500 uppercase mb-1">Sold By</p>
<p className="text-sm font-semibold text-congress-900">Nike Authorized Marketplace Seller</p>
<div className="flex items-center gap-1 mt-1">
<i className="w-3 h-3 text-congress-500" data-lucide="award"></i>
<span className="text-xs text-congress-600">Verified Partner</span>
</div>
</div>
</div>

<div className="flex gap-4 items-start p-4 rounded-xl bg-congress-50 border border-congress-100">
<div className="h-10 w-10 shrink-0 rounded-full bg-white flex items-center justify-center text-congress-600 shadow-sm">
<i className="w-5 h-5" data-lucide="truck"></i>
</div>
<div>
<p className="text-xs font-semibold text-congress-500 uppercase mb-1">Shipping Details</p>
<p className="text-sm font-bold text-congress-900 mb-1">Free Shipping</p>
<p className="text-xs text-congress-600 leading-relaxed">Dispatch within 24–48 hours.<br/>Delivery in 3–6 working days.</p>
</div>
</div>
</div>

<div>
<h3 className="text-lg font-bold text-congress-900 mb-4">Product Details</h3>
<div className="bg-white rounded-xl border border-congress-200 overflow-hidden">
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Brand</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Nike</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Ideal For</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Men</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Shoe Type</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Running / Sports</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Material</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Mesh + Synthetic</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Sole</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Rubber</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Closure</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Lace-Up</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Origin</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Vietnam / India</div>
</div>
<div className="grid grid-cols-3 border-b border-congress-100 last:border-0 text-sm">
<div className="p-3 bg-congress-50 text-congress-500 font-medium">Code</div>
<div className="p-3 col-span-2 text-congress-900 font-medium">Nike_Running_2025</div>
</div>
</div>
</div>

<div className="pb-6">
<h3 className="text-lg font-bold text-congress-900 mb-4">Returns &amp; Policy</h3>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 rounded-lg border border-congress-100 flex items-center gap-3">
<i className="w-5 h-5 text-congress-500" data-lucide="ruler"></i>
<span className="text-xs font-medium text-congress-800">Size Issues</span>
</div>
<div className="p-3 rounded-lg border border-congress-100 flex items-center gap-3">
<i className="w-5 h-5 text-congress-500" data-lucide="package-x"></i>
<span className="text-xs font-medium text-congress-800">Wrong Product</span>
</div>
<div className="p-3 rounded-lg border border-congress-100 flex items-center gap-3">
<i className="w-5 h-5 text-congress-500" data-lucide="alert-triangle"></i>
<span className="text-xs font-medium text-congress-800">Quality Defects</span>
</div>
<div className="p-3 rounded-lg border border-congress-100 flex items-center gap-3">
<i className="w-5 h-5 text-congress-500" data-lucide="thumbs-down"></i>
<span className="text-xs font-medium text-congress-800">Faulty Product</span>
</div>
</div>
<div className="mt-4 flex items-center justify-center gap-2 p-3 bg-congress-50 rounded-lg text-congress-600">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
<span className="text-xs font-bold">Return window: 3 days</span>
</div>
</div>
</div>

<div className="fixed bottom-0 w-full max-w-[414px] bg-white border-t border-congress-100 p-4 z-40 flex gap-3 shadow-[0_-4px_20px_rgb(2,141,245,0.05)]">
<button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl border border-congress-300 text-congress-700 font-bold text-sm bg-white active:bg-congress-50 transition">
<i className="w-4 h-4" data-lucide="heart"></i> Wishlist
            </button>
<button className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl bg-congress-500 text-white font-bold text-sm shadow-lg shadow-congress-500/30 active:scale-[0.98] transition hover:bg-congress-600">
                Buy on EMI
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>


    </>
  );
}
