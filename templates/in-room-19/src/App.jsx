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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-md bg-[#913d43]/10 text-[#913d43] grid place-items-center font-semibold tracking-tight">
<span className="text-sm">IR</span>
</div>
<div>
<h1 className="text-[20px] sm:text-[22px] font-semibold tracking-tight">In‑Room Service</h1>
<p className="text-[12px] sm:text-[13px] text-slate-500">Tap a category, explore, and order instantly</p>
</div>
</div>
<div className="flex items-center gap-2">

<button className="hidden sm:flex items-center gap-2 px-3 h-9 rounded-md border border-slate-200/80 bg-white hover:bg-slate-50 hover:border-slate-300 transition-colors" id="filtersBtn">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"></path></svg>
<span className="text-sm font-medium">Filters</span>
</button>

<button className="hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-md border border-slate-200/80 bg-white hover:bg-slate-50 hover:border-slate-300 transition-colors" id="voiceBtn">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 1v11a3 3 0 0 0 6 0V6a6 6 0 1 0-12 0v6a9 9 0 0 0 9 9h3"></path></svg>
<span className="text-sm font-medium">Voice</span>
</button>

<button className="relative group h-10 w-10 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50 transition-all grid place-items-center" id="cartIcon">
<svg className="w-5.5 h-5.5 text-slate-700 group-hover:text-[#913d43] transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 12.39A2 2 0 0 0 9.62 15H19a2 2 0 0 0 2-1.65l1-5.35H6"></path></svg>
<span className="absolute -top-1 -right-1 text-[11px] leading-none px-1.5 py-1 rounded-full bg-[#913d43] text-white shadow-sm hidden" id="cartBadge">0</span>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-4 pb-28">

<div className="overflow-hidden h-0 flex items-center justify-center text-slate-500 text-sm transition-[height] duration-300" id="pullToRefresh">
<div className="flex items-center gap-2">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path><path d="M22 3 12 13"></path></svg>
<span>Refreshing menu...</span>
</div>
</div>

<section className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Quick Access</h2>
<button className="text-[13px] text-slate-500 hover:text-slate-700" id="recentClear">Clear</button>
</div>
<div className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1">
<button className="min-w-[160px] snap-start flex items-center gap-3 px-3 py-2 rounded-md border border-slate-200/80 bg-white hover:shadow-sm transition-all">
<img alt="" className="w-9 h-9 rounded object-cover" src="https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<div className="text-[14px] font-medium">Avocado Toast</div>
<div className="text-[12px] text-slate-500">$10.50 • Favorite</div>
</div>
</button>
<button className="min-w-[160px] snap-start flex items-center gap-3 px-3 py-2 rounded-md border border-slate-200/80 bg-white hover:shadow-sm transition-all">
<img alt="" className="w-9 h-9 rounded object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="text-left">
<div className="text-[14px] font-medium">Cappuccino</div>
<div className="text-[12px] text-slate-500">$4.20 • Recent</div>
</div>
</button>
<button className="min-w-[160px] snap-start flex items-center gap-3 px-3 py-2 rounded-md border border-slate-200/80 bg-white hover:shadow-sm transition-all">
<img alt="" className="w-9 h-9 rounded object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-left">
<div className="text-[14px] font-medium">Fruit Bowl</div>
<div className="text-[12px] text-slate-500">$8.00 • Recent</div>
</div>
</button>
</div>
</section>

<section className="mb-5">
<div className="flex items-center gap-2 flex-wrap">
<span className="text-[13px] text-slate-600">Dietary:</span>
<button className="diet-pill px-3 py-1.5 rounded-full border border-slate-200/80 bg-white text-[13px] hover:border-slate-300 hover:bg-slate-50 transition-colors" data-filter="veg">Vegetarian</button>
<button className="diet-pill px-3 py-1.5 rounded-full border border-slate-200/80 bg-white text-[13px] hover:border-slate-300 hover:bg-slate-50 transition-colors" data-filter="vegan">Vegan</button>
<button className="diet-pill px-3 py-1.5 rounded-full border border-slate-200/80 bg-white text-[13px] hover:border-slate-300 hover:bg-slate-50 transition-colors" data-filter="glutenfree">Gluten‑Free</button>
<button className="ml-1 text-[13px] text-slate-500 hover:text-slate-700" id="clearFilters">Reset</button>
</div>
</section>

<section className="mb-6">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Categories</h2>
<div className="text-[12px] text-slate-500">Swipe to browse</div>
</div>
<div className="relative" id="categories">
<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">

<button className="group snap-center min-w-[80%] sm:min-w-[360px] bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow transition-all active:scale-[0.99] overflow-hidden" data-cat="food">
<div className="relative h-36">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
<div className="absolute bottom-3 left-3 pr-3 flex items-center gap-2">
<div className="w-9 h-9 rounded-md bg-white/90 text-[#913d43] grid place-items-center shadow">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M7 7h10a5 5 0 0 1-10 0Z"></path></svg>
</div>
<div>
<div className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight">Food</div>
<div className="mt-0.5 inline-block border-b-2 border-[#913d43] w-10"></div>
</div>
</div>
</div>
</button>

<button className="group snap-center min-w-[80%] sm:min-w-[360px] bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow transition-all active:scale-[0.99] overflow-hidden" data-cat="beverages">
<div className="relative h-36">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
<div className="absolute bottom-3 left-3 pr-3 flex items-center gap-2">
<div className="w-9 h-9 rounded-md bg-white/90 text-[#913d43] grid place-items-center shadow">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18"></path><path d="M19 3 16 15a4 4 0 1 1-8 0L5 3"></path></svg>
</div>
<div>
<div className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight">Beverages</div>
<div className="mt-0.5 inline-block border-b-2 border-[#913d43] w-10"></div>
</div>
</div>
</div>
</button>

<button className="group snap-center min-w-[80%] sm:min-w-[360px] bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow transition-all active:scale-[0.99] overflow-hidden" data-cat="housekeeping">
<div className="relative h-36">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
<div className="absolute bottom-3 left-3 pr-3 flex items-center gap-2">
<div className="w-9 h-9 rounded-md bg-white/90 text-[#913d43] grid place-items-center shadow">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 6 6"></path><path d="M19 5 5 19"></path><path d="M5 15v4h4"></path></svg>
</div>
<div>
<div className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight">Housekeeping</div>
<div className="mt-0.5 inline-block border-b-2 border-[#913d43] w-10"></div>
</div>
</div>
</div>
</button>

<button className="group snap-center min-w-[80%] sm:min-w-[360px] bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow transition-all active:scale-[0.99] overflow-hidden" data-cat="spa">
<div className="relative h-36">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
<div className="absolute bottom-3 left-3 pr-3 flex items-center gap-2">
<div className="w-9 h-9 rounded-md bg-white/90 text-[#913d43] grid place-items-center shadow">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 21h10"></path><path d="M12 3s-6 7-6 11a6 6 0 1 0 12 0c0-4-6-11-6-11Z"></path></svg>
</div>
<div>
<div className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight">Spa</div>
<div className="mt-0.5 inline-block border-b-2 border-[#913d43] w-10"></div>
</div>
</div>
</div>
</button>

<button className="group snap-center min-w-[80%] sm:min-w-[360px] bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow transition-all active:scale-[0.99] overflow-hidden" data-cat="laundry">
<div className="relative h-36">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
<div className="absolute bottom-3 left-3 pr-3 flex items-center gap-2">
<div className="w-9 h-9 rounded-md bg-white/90 text-[#913d43] grid place-items-center shadow">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="18" x="3" y="2"></rect><circle cx="12" cy="13" r="5"></circle></svg>
</div>
<div>
<div className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight">Laundry</div>
<div className="mt-0.5 inline-block border-b-2 border-[#913d43] w-10"></div>
</div>
</div>
</div>
</button>

<button className="group snap-center min-w-[80%] sm:min-w-[360px] bg-white rounded-xl border border-slate-200/70 shadow-sm hover:shadow transition-all active:scale-[0.99] overflow-hidden" data-cat="extras">
<div className="relative h-36">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-black/0"></div>
<div className="absolute bottom-3 left-3 pr-3 flex items-center gap-2">
<div className="w-9 h-9 rounded-md bg-white/90 text-[#913d43] grid place-items-center shadow">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3 2 4 4 1-3 3 .5 4.5L12 13l-3.5 2.5.5-4.5-3-3 4-1 2-4Z"></path></svg>
</div>
<div>
<div className="text-white text-[18px] sm:text-[20px] font-semibold tracking-tight">Extras</div>
<div className="mt-0.5 inline-block border-b-2 border-[#913d43] w-10"></div>
</div>
</div>
</div>
</button>
</div>
</div>
</section>

<section className="mb-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[16px] sm:text-[18px] font-semibold tracking-tight">You might like</h3>
<span className="text-[12px] text-slate-500">Based on your preferences</span>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-1" id="recs">

<button className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50 transition-colors">
<span className="text-[13px]">Tomato Basil Soup</span>
<span className="text-[12px] text-slate-500">$6.00</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50 transition-colors">
<span className="text-[13px]">Iced Matcha</span>
<span className="text-[12px] text-slate-500">$4.80</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50 transition-colors">
<span className="text-[13px]">Greek Yogurt Parfait</span>
<span className="text-[12px] text-slate-500">$7.50</span>
</button>
</div>
</section>

<section className="space-y-6" id="itemsArea">

<div className="category-panel" data-items="food">
<div className="flex items-center justify-between">
<h3 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Popular Food</h3>
<span className="text-[12px] text-slate-500">Tap to expand</span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden" data-tags="veg">
<div className="relative">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Avocado Toast</div>
<div className="text-[12.5px] text-slate-500">Sourdough, smashed avocado, cherry tomato</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$10.50</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Prep time: 12–15 min • Contains: gluten</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">No Tomato</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Extra Lemon</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Side Salad</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Allergies? Add notes in cart</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add to Cart</span>
</button>
</div>
</div>
</button>
</div>
<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden" data-tags="veg glutenfree">
<div className="relative">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Quinoa Salad</div>
<div className="text-[12.5px] text-slate-500">Quinoa, cucumber, olive, feta, herbs</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$12.00</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Prep time: 10–12 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">No Feta</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Extra Olive</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Vegan on request</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add to Cart</span>
</button>
</div>
</div>
</button>
</div>
<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden" data-tags="vegan glutenfree">
<div className="relative">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Vegan Pasta</div>
<div className="text-[12.5px] text-slate-500">Gluten-free penne, roasted veggies</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$14.50</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Prep time: 18–22 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Extra Sauce</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Add Chili</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">100% plant-based</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add to Cart</span>
</button>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="category-panel hidden" data-items="beverages">
<div className="flex items-center justify-between">
<h3 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Popular Beverages</h3>
<span className="text-[12px] text-slate-500">Tap to expand</span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden" data-tags="">
<div className="relative">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Cappuccino</div>
<div className="text-[12.5px] text-slate-500">Rich espresso, microfoam</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$4.20</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Ready in 3–5 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Oat Milk</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Extra Shot</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Caffeine</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add to Cart</span>
</button>
</div>
</div>
</button>
</div>
<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden" data-tags="vegan glutenfree">
<div className="relative">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Iced Matcha</div>
<div className="text-[12.5px] text-slate-500">Ceremonial-grade matcha, lightly sweetened</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$4.80</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Ready in 2–3 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Oat Milk</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Less Ice</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Light caffeine</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add to Cart</span>
</button>
</div>
</div>
</button>
</div>
<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden" data-tags="">
<div className="relative">
<img alt="" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Fresh Orange Juice</div>
<div className="text-[12.5px] text-slate-500">Cold-pressed, no added sugar</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$5.50</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Ready in 3–4 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">No Pulp</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 hover:border-slate-300 bg-white text-[13px]">Less Ice</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Vitamin C boost</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add to Cart</span>
</button>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="category-panel hidden" data-items="housekeeping">
<div className="flex items-center justify-between">
<h3 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Housekeeping</h3>
<span className="text-[12px] text-slate-500">Tap to expand</span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden">
<div className="relative">
<img alt="Fresh towels" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1556227691-9601f47b4b4c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Fresh Towels</div>
<div className="text-[12.5px] text-slate-500">Bath, hand, and face towels</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$0.00</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Delivery in 10–15 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">2x Bath Towels</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Extra Hand Towels</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Complimentary</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add Request</span>
</button>
</div>
</div>
</button>
</div>

<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden">
<div className="relative">
<img alt="Room cleaning" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Room Cleaning</div>
<div className="text-[12.5px] text-slate-500">Light tidy or full service</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$0.00</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Schedule within the hour</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Light Tidy</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Full Clean</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Notes welcome in cart</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add Request</span>
</button>
</div>
</div>
</button>
</div>

<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden">
<div className="relative">
<img alt="Toiletries kit" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn" title="Favorite">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Toiletries Kit</div>
<div className="text-[12.5px] text-slate-500">Toothbrush, toothpaste, razor</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$0.00</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Delivery in ~10 min</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Extra Razor</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Mouthwash</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Complimentary</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Add Request</span>
</button>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="category-panel hidden" data-items="spa">
<div className="flex items-center justify-between">
<h3 className="text-[18px] sm:text-[20px] font-semibold tracking-tight">Spa &amp; Wellness</h3>
<span className="text-[12px] text-slate-500">Tap to expand</span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden">
<div className="relative">
<img alt="Swedish massage" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur grid place-items-center text-slate-700 hover:text-[#913d43] transition-colors fav-btn">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14 12 20 5 14"></path><path d="M19 10a7 7 0 1 0-14 0c0 7 7 10 7 10s7-3 7-10Z"></path></svg>
</button>
</div>
<button className="w-full text-left p-4 item-toggle">
<div className="flex items-start justify-between">
<div>
<div className="text-[16px] font-medium">Swedish Massage (60 min)</div>
<div className="text-[12.5px] text-slate-500">Full-body relaxation therapy</div>
</div>
<div className="text-[14px] font-medium text-[#913d43]">$95.00</div>
</div>
<div className="mt-3 hidden item-details text-[13px] text-slate-600">
<div className="flex items-center gap-2 text-slate-500">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
<span>Available 10am–8pm</span>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Aromatherapy Oil</button>
<button className="px-3 py-1.5 rounded-md border border-slate-200/80 bg-white hover:border-slate-300 text-[13px]">Deep Tissue (+$20)</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-slate-500 text-[12px]">Gratuity not included</div>
<button className="add-btn inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#913d43] text-white hover:opacity-95 transition-all">
<svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="text-[13px]">Book</span>
</button>
</div>
</div>
</button>
</div>

<div className="group bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden">
<div className="relative">
<img alt="Aromatherapy" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div></div></div></div></section></main></div>
    </>
  );
}
