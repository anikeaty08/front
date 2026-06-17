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
      

<div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl ring-8 ring-neutral-900 overflow-hidden flex flex-col shrink-0">

<header className="flex items-center justify-between px-6 pt-12 pb-4 bg-white/80 backdrop-blur-md z-10 sticky top-0">
<div className="text-lg font-semibold tracking-tighter">LOGO</div>
<button className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<iconify-icon className="" icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-6 flex flex-col gap-8">

<section className="">
<h2 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">Today's Suggestion</h2>
<div className="rounded-3xl border border-neutral-200/80 bg-white overflow-hidden shadow-sm">

<div className="h-48 w-full bg-gradient-to-br from-neutral-100 to-neutral-200 relative">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 20m
                        </div>
</div>
<div className="p-5">
<h3 className="text-xl font-semibold tracking-tight mb-1">Miso Glazed Salmon</h3>
<p className="text-sm text-neutral-500 mb-5 line-clamp-2">A quick, protein-packed dinner using pantry staples. High in omega-3s.</p>
<button className="w-full bg-neutral-900 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon>
                            Cook this tonight
                        </button>
</div>
</div>
</section>

<section className="grid grid-cols-2 gap-3">
<button className="bg-neutral-50 border border-neutral-200/60 rounded-2xl p-4 flex flex-col items-start gap-3 hover:bg-neutral-100 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm text-neutral-700">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Use my pantry</div>
<div className="text-xs text-neutral-500 mt-0.5">Find recipes based on what you have</div>
</div>
</button>
<div className="flex flex-col gap-3">
<button className="flex-1 bg-neutral-50 border border-neutral-200/60 rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-neutral-500" icon="solar:calendar-add-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Plan week</span>
</button>
<button className="flex-1 bg-neutral-50 border border-neutral-200/60 rounded-2xl p-4 flex items-center gap-3 hover:bg-neutral-100 transition-colors">
<iconify-icon className="text-neutral-500" icon="solar:cart-large-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">View list</span>
</button>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Up Next</h2>
<button className="text-xs font-medium text-neutral-500">View all</button>
</div>
<div className="flex flex-col gap-3">

<div className="flex items-center gap-4 p-3 rounded-2xl border border-neutral-200/60 bg-white">
<div className="w-16 h-16 rounded-xl bg-neutral-100 shrink-0"></div>
<div className="flex-1 min-w-0">
<div className="text-xs text-neutral-500 mb-0.5">Tomorrow</div>
<h4 className="text-sm font-medium truncate">Chicken Pesto Pasta</h4>
</div>
<button className="w-8 h-8 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-600 shrink-0">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-2xl border border-neutral-200/60 bg-white opacity-60">
<div className="w-16 h-16 border border-dashed border-neutral-300 rounded-xl bg-neutral-50 shrink-0 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-neutral-500 mb-0.5">Wednesday</div>
<h4 className="text-sm font-medium text-neutral-400">Plan a meal</h4>
</div>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-neutral-200 pb-8 pt-4 px-8 flex justify-between items-center z-50">
<button className="flex flex-col items-center gap-1 text-neutral-900">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors relative">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
<span className="absolute top-0 right-1 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

<div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl ring-8 ring-neutral-900 overflow-hidden flex flex-col shrink-0">
<header className="px-6 pt-12 pb-4 bg-white z-10 sticky top-0 border-b border-neutral-100">
<div className="flex items-center justify-between mb-4">
<h1 className="text-2xl font-semibold tracking-tight">Discover</h1>
<button className="w-9 h-9 rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-700">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-2 -mx-6 px-6">
<button className="px-4 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium whitespace-nowrap">For you</button>
<button className="px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 text-sm font-medium whitespace-nowrap">Based on Pantry</button>
<button className="px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 text-neutral-600 text-sm font-medium whitespace-nowrap">Under 30 mins</button>
</div>
</header>
<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-6 pt-4 flex flex-col gap-6">

<div className="flex flex-col gap-3">
<div className="h-40 w-full bg-neutral-100 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1.5">
<span className="bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider">Vegan</span>
<span className="bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider">15 min</span>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold leading-tight mb-1">Spicy Peanut Noodles</h3>
<p className="text-xs text-neutral-500">Uses 4 ingredients you already have.</p>
</div>
<button className="shrink-0 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        List
                    </button>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="h-40 w-full bg-neutral-100 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-1.5">
<span className="bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider">High Protein</span>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold leading-tight mb-1">Lemon Herb Chicken Bowl</h3>
<p className="text-xs text-neutral-500">Perfect for meal prep. Missing 2 items.</p>
</div>
<button className="shrink-0 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        List
                    </button>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="h-40 w-full bg-neutral-100 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold leading-tight mb-1">Black Bean Tacos</h3>
<p className="text-xs text-neutral-500">Quick family favorite.</p>
</div>
<button className="shrink-0 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        List
                    </button>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-neutral-200 pb-8 pt-4 px-8 flex justify-between items-center z-50">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-900">
<iconify-icon icon="solar:calendar-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors relative">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
<span className="absolute top-0 right-1 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

<div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl ring-8 ring-neutral-900 overflow-hidden flex flex-col shrink-0">
<header className="px-6 pt-12 pb-4 bg-white z-10 sticky top-0 border-b border-neutral-100">
<h1 className="text-2xl font-semibold tracking-tight mb-4">Shopping List</h1>

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-neutral-400 focus:bg-white transition-colors placeholder:text-neutral-400" placeholder="Add an item..." type="text"/>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-2 mt-4 -mx-6 px-6">
<button className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs font-medium whitespace-nowrap flex items-center gap-1">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon> Milk
                </button>
<button className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs font-medium whitespace-nowrap flex items-center gap-1">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon> Eggs
                </button>
<button className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-600 text-xs font-medium whitespace-nowrap flex items-center gap-1">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon> Olive Oil
                </button>
</div>
</header>
<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 pt-2">

<section className="mb-6">
<div className="px-6 py-2 bg-neutral-50 text-xs font-medium text-neutral-500 uppercase tracking-wider sticky top-0 z-10 flex justify-between items-center">
<span>For Miso Salmon</span>
<span className="lowercase text-neutral-400">auto-added</span>
</div>
<div className="flex flex-col px-6">

<label className="flex items-center gap-4 py-3 border-b border-neutral-100 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-neutral-300 peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-neutral-400 transition-all select-none">Salmon Fillets (2)</span>
</label>
<label className="flex items-center gap-4 py-3 border-b border-neutral-100 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-neutral-300 peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-neutral-400 transition-all select-none">White Miso Paste</span>
</label>
</div>
</section>

<section className="mb-6">
<div className="px-6 py-2 bg-neutral-50 text-xs font-medium text-neutral-500 uppercase tracking-wider sticky top-0 z-10">
                    Produce
                </div>
<div className="flex flex-col px-6">
<label className="flex items-center gap-4 py-3 border-b border-neutral-100 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-neutral-300 peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-neutral-400 transition-all select-none">Broccoli</span>
</label>
<label className="flex items-center gap-4 py-3 border-b border-neutral-100 cursor-pointer group">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-neutral-300 peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-neutral-400 transition-all select-none">Garlic</span>
</label>
</div>
</section>

<div className="px-6 mt-8">
<button className="w-full flex items-center justify-between py-4 border-t border-neutral-100 text-sm font-medium text-neutral-600">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
                        Items in Pantry (4)
                    </span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-neutral-200 pb-8 pt-4 px-8 flex justify-between items-center z-50">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-900 relative">
<iconify-icon icon="solar:cart-large-2-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

<div className="relative w-full max-w-[375px] h-[812px] bg-white rounded-[40px] shadow-2xl ring-8 ring-neutral-900 overflow-hidden flex flex-col shrink-0">
<header className="px-6 pt-12 pb-6 bg-white z-10 sticky top-0">
<h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
</header>
<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-6 flex flex-col gap-8">

<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neutral-200 to-neutral-300 flex items-center justify-center text-xl font-medium text-neutral-600 tracking-tighter">
                    JD
                </div>
<div>
<h2 className="text-lg font-semibold tracking-tight leading-tight">Jane Doe</h2>
<p className="text-sm text-neutral-500">Free Plan</p>
</div>
</div>

<div className="flex flex-col gap-6">

<div>
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2 pl-2">Preferences</h3>
<div className="bg-neutral-50 rounded-2xl border border-neutral-200/60 overflow-hidden">
<button className="w-full flex items-center justify-between p-4 border-b border-neutral-200/60 hover:bg-neutral-100 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:forbidden-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Dietary Restrictions</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">None</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-neutral-100 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:heart-broken-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Disliked Ingredients</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">2 items</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2 pl-2">App Settings</h3>
<div className="bg-neutral-50 rounded-2xl border border-neutral-200/60 overflow-hidden">
<div className="w-full flex items-center justify-between p-4 border-b border-neutral-200/60">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Daily Reminders</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-neutral-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-900"></div>
</label>
</div>
<button className="w-full flex items-center justify-between p-4 hover:bg-neutral-100 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-500" icon="solar:cloud-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Sync Devices</span>
</div>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<div className="bg-neutral-50 rounded-2xl border border-neutral-200/60 overflow-hidden">
<button className="w-full flex items-center justify-between p-4 border-b border-neutral-200/60 hover:bg-neutral-100 transition-colors">
<span className="text-sm font-medium text-neutral-700">Help &amp; Support</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 hover:bg-neutral-100 transition-colors">
<span className="text-sm font-medium text-neutral-700">About MP App</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="text-center mt-4">
<button className="text-sm font-medium text-neutral-400 hover:text-neutral-900 transition-colors">Log out</button>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-neutral-200 pb-8 pt-4 px-8 flex justify-between items-center z-50">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-900">
<iconify-icon icon="solar:user-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

    </>
  );
}
