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
      

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-2xl ring-8 overflow-hidden flex flex-col shrink-0 bg-white ring-gray-900">

<header className="flex items-center justify-between px-6 pt-12 pb-4 backdrop-blur-md z-10 sticky top-0 bg-white/90">
<div className="text-lg font-semibold text-green-700 tracking-tighter">VAPTVUPT</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-500 hover:bg-gray-100 transition-colors">
<iconify-icon className="" icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-6 flex flex-col gap-8">

<section className="">
<h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-400">Today's Suggestion</h2>
<div className="rounded-3xl border overflow-hidden shadow-sm border-gray-100 bg-white">

<div className="w-full h-48 bg-[url(https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&amp;q=80)] bg-cover bg-center relative">
<div className="absolute top-4 right-4 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm bg-white/90 text-gray-700">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> 20m
                        </div>
</div>
<div className="p-5">
<h3 className="text-xl font-semibold tracking-tight mb-1">Miso Glazed Salmon</h3>
<p className="text-sm text-gray-500 mb-5 line-clamp-2">A quick, protein-packed dinner using pantry staples. High in omega-3s.</p>
<button className="w-full rounded-xl py-3.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 shadow-sm shadow-green-600/20">
<iconify-icon icon="solar:chef-hat-linear" width="18"></iconify-icon>
                            Cook this tonight
                        </button>
</div>
</div>
</section>

<section className="grid grid-cols-2 gap-3">
<button className="border rounded-2xl p-4 flex flex-col items-start gap-3 transition-colors text-left bg-white border-gray-200 hover:border-green-600/30 hover:bg-green-50/50 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center shadow-sm bg-gray-50 border-gray-100 text-green-600 group-hover:bg-green-100 group-hover:border-green-200 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-semibold text-gray-800">Use my pantry</div>
<div className="text-xs text-gray-500 mt-0.5">Find recipes based on what you have</div>
</div>
</button>
<div className="flex flex-col gap-3">
<button className="flex-1 border rounded-2xl p-4 flex items-center gap-3 transition-colors bg-white border-gray-200 hover:border-green-600/30 hover:bg-green-50/50 group">
<iconify-icon className="text-green-600" icon="solar:calendar-add-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold text-gray-800">Plan week</span>
</button>
<button className="flex-1 border rounded-2xl p-4 flex items-center gap-3 transition-colors bg-white border-gray-200 hover:border-green-600/30 hover:bg-green-50/50 group">
<iconify-icon className="text-green-600" icon="solar:cart-large-2-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold text-gray-800">View list</span>
</button>
</div>
</section>

<section className="">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Up Next</h2>
<button className="text-xs font-semibold text-green-600 hover:text-green-700">View all</button>
</div>
<div className="flex flex-col gap-3">

<div className="flex items-center gap-4 p-3 rounded-2xl border border-gray-100 bg-white shadow-sm">
<div className="shrink-0 w-16 h-16 bg-[url(https://images.unsplash.com/photo-1719250726371-b4076d48ce6c?w=320&amp;q=80)] bg-cover bg-center rounded-xl"></div>
<div className="flex-1 min-w-0">
<div className="text-xs text-green-600 font-medium mb-0.5">Tomorrow</div>
<h4 className="text-sm font-semibold truncate text-gray-800">Chicken Pesto Pasta</h4>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-2xl border border-gray-100 bg-gray-50/50">
<div className="w-16 h-16 border border-dashed rounded-xl shrink-0 flex items-center justify-center border-gray-300 bg-white text-gray-400">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-gray-400 font-medium mb-0.5">Wednesday</div>
<h4 className="text-sm font-medium text-gray-500">Plan a meal</h4>
</div>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 w-full backdrop-blur-xl border-t pb-8 pt-4 px-8 flex justify-between items-center z-50 bg-white/95 border-gray-100">
<button className="flex flex-col items-center gap-1 text-green-600">
<iconify-icon icon="solar:home-smile-bold" width="24"></iconify-icon>
<span className="text-[10px] font-semibold">Home</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors relative text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
<span className="absolute top-0 right-1 w-2 h-2 rounded-full bg-green-500 border-2 border-white"></span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-2xl ring-8 overflow-hidden flex flex-col shrink-0 bg-white ring-gray-900">
<header className="px-6 pt-12 pb-4 z-10 sticky top-0 border-b bg-white/95 backdrop-blur-md border-gray-100">
<div className="flex items-center justify-between mb-4">
<h1 className="text-2xl font-semibold tracking-tight text-gray-800">Discover</h1>
<button className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors">
<iconify-icon icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-2 -mx-6 px-6 pb-2">
<button className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap bg-green-600 text-white shadow-sm shadow-green-600/20">For you</button>
<button className="px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap bg-white border-gray-200 text-gray-600 hover:bg-gray-50">Based on Pantry</button>
<button className="px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap bg-white border-gray-200 text-gray-600 hover:bg-gray-50">Under 30 mins</button>
</div>
</header>
<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-6 pt-4 flex flex-col gap-6">

<div className="flex flex-col gap-3 group">
<div className="h-40 w-full rounded-2xl relative overflow-hidden bg-gray-100">
<div className="bg-[url(https://images.unsplash.com/photo-1553621043-f607bfbf6640?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3 flex gap-1.5">
<span className="backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/30 text-white">Vegan</span>
<span className="backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/30 text-white">15 min</span>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div className="">
<h3 className="text-base font-semibold leading-tight mb-1 text-gray-800">Spicy Peanut Noodles</h3>
<p className="text-xs text-gray-500">Uses 4 ingredients you already have.</p>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors bg-green-50 text-green-700 hover:bg-green-100">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        List
                    </button>
</div>
</div>

<div className="flex flex-col gap-3 group">
<div className="h-40 w-full rounded-2xl relative overflow-hidden bg-gray-100">
<div className="bg-[url(https://images.unsplash.com/photo-1615750856719-9b7f225e9273?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-3 left-3 flex gap-1.5">
<span className="backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/30 text-white">High Protein</span>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div className="">
<h3 className="text-base font-semibold leading-tight mb-1 text-gray-800">Lemon Herb Chicken Bowl</h3>
<p className="text-xs text-gray-500">Perfect for meal prep. Missing 2 items.</p>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors bg-green-50 text-green-700 hover:bg-green-100">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        List
                    </button>
</div>
</div>

<div className="flex flex-col gap-3 group">
<div className="h-40 w-full rounded-2xl relative overflow-hidden bg-gray-100">
<div className="bg-[url(https://images.unsplash.com/photo-1705177114594-261331bcb0b6?w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-base font-semibold leading-tight mb-1 text-gray-800">Black Bean Tacos</h3>
<p className="text-xs text-gray-500">Quick family favorite.</p>
</div>
<button className="shrink-0 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors bg-green-50 text-green-700 hover:bg-green-100">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        List
                    </button>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full backdrop-blur-xl border-t pb-8 pt-4 px-8 flex justify-between items-center z-50 bg-white/95 border-gray-100">
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-green-600">
<iconify-icon className="" icon="solar:calendar-bold" width="24"></iconify-icon>
<span className="text-[10px] font-semibold">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors relative text-gray-400 hover:text-green-600">
<iconify-icon className="" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
<span className="absolute top-0 right-1 w-2 h-2 rounded-full bg-green-500 border-2 border-white"></span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-2xl ring-8 overflow-hidden flex flex-col shrink-0 bg-white ring-gray-900">
<header className="px-6 pt-12 pb-4 z-10 sticky top-0 border-b bg-white/95 backdrop-blur-md border-gray-100">
<h1 className="text-2xl font-semibold tracking-tight mb-4 text-gray-800">Shopping List</h1>

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:add-circle-linear" width="20"></iconify-icon>
<input className="w-full border rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-gray-50 border-gray-200 transition-all placeholder:text-gray-400 text-gray-800" placeholder="Add an item..." type="text"/>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-2 mt-4 -mx-6 px-6 pb-2">
<button className="px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap flex items-center gap-1 bg-white border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon> Milk
                </button>
<button className="px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap flex items-center gap-1 bg-white border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon> Eggs
                </button>
<button className="px-3 py-1.5 rounded-lg border text-xs font-medium whitespace-nowrap flex items-center gap-1 bg-white border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-colors">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon> Olive Oil
                </button>
</div>
</header>
<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 pt-2">

<section className="mb-6">
<div className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider sticky top-0 z-10 flex justify-between items-center bg-gray-50/90 backdrop-blur-sm">
<span className="">For Miso Salmon</span>
<span className="lowercase text-gray-400 font-medium">auto-added</span>
</div>
<div className="flex flex-col px-6">

<label className="flex items-center gap-4 py-3 border-b cursor-pointer group border-gray-100">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border peer-checked:bg-green-600 peer-checked:border-green-600 transition-colors flex items-center justify-center border-gray-300 group-hover:border-green-500">
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-gray-400 transition-all select-none text-gray-700">Salmon Fillets (2)</span>
</label>
<label className="flex items-center gap-4 py-3 border-b cursor-pointer group border-gray-100">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border peer-checked:bg-green-600 peer-checked:border-green-600 transition-colors flex items-center justify-center border-gray-300 group-hover:border-green-500">
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-gray-400 transition-all select-none text-gray-700">White Miso Paste</span>
</label>
</div>
</section>

<section className="mb-6">
<div className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider sticky top-0 z-10 bg-gray-50/90 backdrop-blur-sm">
                    Produce
                </div>
<div className="flex flex-col px-6">
<label className="flex items-center gap-4 py-3 border-b cursor-pointer group border-gray-100">
<div className="relative flex items-center justify-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border peer-checked:bg-green-600 peer-checked:border-green-600 transition-colors flex items-center justify-center border-gray-300 group-hover:border-green-500">
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-gray-400 transition-all select-none text-gray-700">Broccoli</span>
</label>
<label className="flex items-center gap-4 py-3 border-b cursor-pointer group border-gray-100">
<div className="relative flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border peer-checked:bg-green-600 peer-checked:border-green-600 transition-colors flex items-center justify-center border-gray-300 group-hover:border-green-500">
<iconify-icon className="opacity-0 peer-checked:opacity-100 transition-opacity text-white" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium peer-checked:line-through peer-checked:text-gray-400 transition-all select-none text-gray-700">Garlic</span>
</label>
</div>
</section>

<div className="px-6 mt-8">
<button className="w-full flex items-center justify-between py-4 border-t text-sm font-semibold border-gray-100 text-gray-500 hover:text-green-600 transition-colors">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
                        Items in Pantry (4)
                    </span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</main>

<nav className="absolute bottom-0 w-full backdrop-blur-xl border-t pb-8 pt-4 px-8 flex justify-between items-center z-50 bg-white/95 border-gray-100">
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 relative text-green-600">
<iconify-icon icon="solar:cart-large-2-bold" width="24"></iconify-icon>
<span className="text-[10px] font-semibold">List</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-2xl ring-8 overflow-hidden flex flex-col shrink-0 bg-white ring-gray-900">
<header className="px-6 pt-12 pb-6 z-10 sticky top-0 bg-white/95 backdrop-blur-md">
<h1 className="text-2xl font-semibold tracking-tight text-gray-800">Profile</h1>
</header>
<main className="flex-1 overflow-y-auto hide-scrollbar pb-28 px-6 flex flex-col gap-8">

<div className="flex items-center gap-4">
<div className="flex text-xl font-semibold text-green-700 tracking-tighter w-16 h-16 bg-[url(https://images.unsplash.com/photo-1603988089669-c041ac2fe196?w=320&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<h2 className="leading-tight text-lg font-semibold text-gray-800 tracking-tight">Carolina Garrett</h2>
<p className="text-sm text-gray-500 font-medium mt-0.5">Free Plan</p>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="">
<h3 className="text-xs font-semibold uppercase tracking-widest mb-2 pl-2 text-gray-400">Preferences</h3>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200">
<button className="w-full flex items-center justify-between p-4 border-b transition-colors border-gray-100 hover:bg-gray-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:forbidden-circle-linear" style={{color: 'rgb(253, 186, 116)'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Dietary Restrictions</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400 font-medium">None</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
<button className="w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:heart-broken-linear" style={{color: 'rgb(220, 38, 38)'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Disliked Ingredients</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-400 font-medium">2 items</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="">
<h3 className="text-xs font-semibold uppercase tracking-widest mb-2 pl-2 text-gray-400">App Settings</h3>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200">
<div className="w-full flex items-center justify-between p-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:bell-linear" style={{color: 'rgb(6, 182, 212)'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Daily Reminders</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600 bg-gray-200 border border-gray-200 peer-checked:border-green-600"></div>
</label>
</div>
<button className="w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400" height="20" icon="solar:cloud-check-linear" style={{color: 'rgb(192, 132, 252)'}} width="20"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Sync Devices</span>
</div>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<div className="rounded-2xl border overflow-hidden bg-white border-gray-200">
<button className="w-full flex items-center justify-between p-4 border-b transition-colors border-gray-100 hover:bg-gray-50">
<span className="text-sm font-medium text-gray-700">Help &amp; Support</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-4 transition-colors hover:bg-gray-50">
<span className="text-sm font-medium text-gray-700">About App</span>
<iconify-icon className="text-gray-300" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="text-center mt-4">
<button className="text-sm font-semibold transition-colors text-gray-400 hover:text-red-500">Log out</button>
</div>
</main>

<nav className="absolute bottom-0 w-full backdrop-blur-xl border-t pb-8 pt-4 px-8 flex justify-between items-center z-50 bg-white/95 border-gray-100">
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Plan</span>
</button>
<button className="flex flex-col items-center gap-1 transition-colors text-gray-400 hover:text-green-600">
<iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">List</span>
</button>
<button className="flex flex-col items-center gap-1 text-green-600">
<iconify-icon icon="solar:user-bold" width="24"></iconify-icon>
<span className="text-[10px] font-semibold">Profile</span>
</button>
</nav>
</div>

    </>
  );
}
