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
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
}
}
}
}

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
      

<div className="fixed inset-0 bg-zinc-900/20 z-40 hidden lg:hidden backdrop-blur-sm" id="mobile-menu"></div>

<aside className="w-72 bg-zinc-50 border-r border-zinc-200 flex-col justify-between hidden lg:flex h-full z-50 shrink-0">
<div>

<div className="h-16 flex items-center px-5 border-b border-zinc-200/50">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="2" data-width="16"></span>
</div>
<div>
<span className="text-sm font-semibold tracking-tight text-zinc-900 block leading-none">AUTOSPEC</span>
<span className="text-[10px] text-zinc-500 font-medium tracking-wide">GLOBAL DATABASE</span>
</div>
</div>
</div>

<div className="p-4 space-y-8 overflow-y-auto max-h-[calc(100vh-9rem)]">

<div className="space-y-1">
<div className="text-[10px] font-bold text-zinc-400 mb-2 px-2 tracking-widest uppercase">Marketplace</div>
<a className="flex items-center gap-2.5 px-2 py-2 text-sm text-zinc-900 bg-white border border-zinc-200 shadow-sm rounded-md font-medium group" href="#">
<span className="iconify text-zinc-900" data-icon="lucide:car-front" data-strokeWidth="1.5" data-width="16"></span>
                        Browse Vehicles
                    </a>
<a className="flex items-center gap-2.5 px-2 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-zinc-900 transition-colors" data-icon="lucide:star" data-strokeWidth="1.5" data-width="16"></span>
                        Featured Drops
                    </a>
<a className="flex items-center gap-2.5 px-2 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm hover:border-zinc-200 border border-transparent rounded-md transition-all group" href="#">
<span className="iconify group-hover:text-zinc-900 transition-colors" data-icon="lucide:arrow-left-right" data-strokeWidth="1.5" data-width="16"></span>
                        Compare Specs
                    </a>
</div>

<div>
<div className="flex items-center justify-between px-2 mb-3">
<div className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">Refine Search</div>
<button className="text-[10px] text-zinc-500 hover:text-zinc-900 underline">Reset</button>
</div>

<div className="px-2 mb-6">
<div className="flex items-center justify-between text-xs mb-3">
<span className="text-zinc-500 font-medium">Year</span>
<span className="text-zinc-900 font-semibold font-mono">1990 - 2025</span>
</div>
<input className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer" max="2025" min="1990" type="range" value="2024"/>
</div>

<div className="space-y-3 px-2">
<span className="text-xs font-medium text-zinc-900 block">Popular Brands</span>
<div className="space-y-2">
<label className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<input checked="" className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 bg-white accent-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Toyota</span>
</div>
<span className="text-[10px] text-zinc-400">342</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 bg-white accent-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Honda</span>
</div>
<span className="text-[10px] text-zinc-400">215</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 bg-white accent-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Suzuki</span>
</div>
<span className="text-[10px] text-zinc-400">189</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 bg-white accent-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Haval / BYD</span>
</div>
<span className="text-[10px] text-zinc-400">86</span>
</label>
<label className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900 focus:ring-offset-0 bg-white accent-zinc-900" type="checkbox"/>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900">Hyundai / Kia</span>
</div>
<span className="text-[10px] text-zinc-400">120</span>
</label>
</div>
</div>

<div className="space-y-3 px-2 mt-6">
<span className="text-xs font-medium text-zinc-900 block">Origin</span>
<div className="grid grid-cols-2 gap-2">
<button className="px-2 py-1.5 text-xs border border-zinc-200 bg-white rounded text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-center">
                                Japanese
                            </button>
<button className="px-2 py-1.5 text-xs border border-zinc-200 bg-white rounded text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-center">
                                Chinese
                            </button>
<button className="px-2 py-1.5 text-xs border border-zinc-200 bg-white rounded text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-center">
                                German
                            </button>
<button className="px-2 py-1.5 text-xs border border-zinc-200 bg-white rounded text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-center">
                                American
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-200 bg-white">
<div className="bg-zinc-50 rounded-lg p-3 border border-zinc-100 mb-3">
<p className="text-[10px] text-zinc-500 mb-2">Unlock price history &amp; saved garage.</p>
<button className="w-full py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 transition-colors shadow-sm">
                    Create Free Account
                </button>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
<span>Already a member?</span>
<span className="underline">Sign In</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">

<header className="h-16 bg-white/90 backdrop-blur-md border-b border-zinc-200 flex items-center justify-between px-4 lg:px-8 shrink-0 z-30 sticky top-0">

<div className="flex items-center gap-4 flex-1">
<button className="lg:hidden text-zinc-500">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="relative w-full max-w-md hidden sm:block group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-600 transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="15"></span>
</span>
<input className="h-10 w-full pl-10 pr-4 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:bg-white placeholder:text-zinc-400 text-zinc-900 transition-all shadow-sm" placeholder="Search by Make, Model, or Chassis Code (e.g. FK8, Revo)..." type="text"/>
</div>
</div>

<div className="flex items-center gap-3">

<div className="relative hidden sm:flex items-center">
<span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
<span className="iconify" data-icon="lucide:globe" data-width="14"></span>
</span>
<select className="h-9 pl-8 pr-8 text-xs font-medium bg-white border border-zinc-200 rounded-md focus:outline-none focus:ring-1 focus:ring-zinc-900 cursor-pointer appearance-none hover:border-zinc-300 transition-colors">
<option selected="" value="PKR">PKR (Rs)</option>
<option value="USD">USD ($)</option>
<option value="AED">AED (Dh)</option>
<option value="GBP">GBP (£)</option>
</select>
<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="12"></span>
</span>
</div>
<div className="h-6 w-px bg-zinc-200 hidden sm:block"></div>
<button className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 rounded-md transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
                    Saved
                </button>
<button className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm ring-2 ring-zinc-100">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-[1600px] mx-auto p-4 lg:p-8">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">

<div className="lg:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group shadow-sm bg-zinc-900">
<img alt="Featured Car" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/90 backdrop-blur text-[10px] font-semibold text-white mb-4 uppercase tracking-wide">
<span className="iconify" data-icon="lucide:zap" data-width="12"></span>
                                Electric • Future
                            </div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-2">2024 BYD Seal Performance</h2>
<p className="text-zinc-300 text-sm max-w-lg mb-6 leading-relaxed">The new contender from China challenging the global EV market. Features dual-motor AWD, 523 HP, and a blade battery with 650km range.</p>
<div className="flex items-center gap-3">
<button className="px-5 py-2.5 bg-white text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors">Check Price</button>
<button className="px-5 py-2.5 bg-white/10 backdrop-blur text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10">Full Specs</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-6">
<div className="relative h-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 group flex flex-col justify-end p-6">
<img alt="Toyota" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1623067715783-c2162621c4dc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Top Seller</div>
<h3 className="text-xl font-semibold text-zinc-900">Toyota Land Cruiser 300</h3>
<div className="mt-2 text-sm font-medium text-zinc-700">PKR 12.5Cr - 15.0Cr</div>
</div>
</div>
<div className="relative h-full rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 group flex flex-col justify-end p-6">
<img alt="Honda" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1609520505218-742184325851?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Local Favorite</div>
<h3 className="text-xl font-semibold text-zinc-900">Honda Civic RS</h3>
<div className="mt-2 text-sm font-medium text-zinc-700">PKR 98.0 Lacs</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-zinc-100 pb-6">
<div>
<h1 className="text-xl font-semibold text-zinc-900">Latest Arrivals</h1>
<p className="text-xs text-zinc-500 mt-1">Showing 1,240 vehicles • Updated today</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-zinc-50 border border-zinc-200 rounded-lg p-1">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-white rounded shadow-sm">All</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900">New</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900">Used</button>
</div>
<select className="h-9 pl-3 pr-8 text-xs bg-white border border-zinc-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 cursor-pointer">
<option>Sort: Newest First</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8">

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-zinc-900 shadow-sm">2023</div>
<img alt="Fortuner" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626847037657-fd3622613ce3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white text-zinc-400 hover:text-red-500 flex items-center justify-center transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
<span className="iconify" data-icon="lucide:heart" data-width="14"></span>
</button>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Toyota</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">SUV</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Fortuner Legender 2.8 Diesel</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:fuel" data-width="12"></span> Diesel</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> Auto</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users" data-width="12"></span> 7</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 1.9 Cr</span>
<span className="text-[10px] text-zinc-400">~ $68k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-red-500/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-white shadow-sm">Hot</div>
<div className="absolute top-3 right-3 z-10 px-2 py-1 bg-black/50 backdrop-blur text-[10px] font-medium rounded text-white">HEV</div>
<img alt="Haval" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1634842523924-c5a45c363f82?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Haval</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">Chinese</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">H6 Hybrid Electric</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:zap" data-width="12"></span> Hybrid</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> DHT</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users" data-width="12"></span> 5</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 1.2 Cr</span>
<span className="text-[10px] text-zinc-400">~ $42k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-zinc-900 shadow-sm">2024</div>
<img alt="Swift" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Suzuki</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">Hatchback</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Swift GLX CVT</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:fuel" data-width="12"></span> Petrol</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> CVT</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:users" data-width="12"></span> 5</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 54.5 Lacs</span>
<span className="text-[10px] text-zinc-400">~ $19k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-blue-600/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-white shadow-sm">Import</div>
<img alt="Civic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605816988069-b11382b4c91d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Honda</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">Performance</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Civic Type R (FL5)</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:fuel" data-width="12"></span> 2.0T</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> Manual</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:timer" data-width="12"></span> 315HP</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 2.8 Cr</span>
<span className="text-[10px] text-zinc-400">~ $95k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-zinc-900 shadow-sm">2023</div>
<img alt="Changan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Changan</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">Chinese</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Alsvin Lumiere</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:fuel" data-width="12"></span> 1.5L</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> DCT</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:sun" data-width="12"></span> Sunroof</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 45.0 Lacs</span>
<span className="text-[10px] text-zinc-400">~ $16k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-zinc-900/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-white shadow-sm">2005</div>
<img alt="Corolla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Toyota</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">Used</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Corolla Altis 1.8</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:fuel" data-width="12"></span> Petrol</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> Auto</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> LHR</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 22.5 Lacs</span>
<span className="text-[10px] text-zinc-400">~ $8k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-zinc-900 shadow-sm">EV</div>
<img alt="Tesla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Tesla</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">US Import</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Model 3 Long Range</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:zap" data-width="12"></span> 500km</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> 4.2s</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:battery" data-width="12"></span> 82kWh</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 1.8 Cr</span>
<span className="text-[10px] text-zinc-400">~ $64k USD</span>
</div>
</div>
</div>

<div className="group flex flex-col">
<div className="relative aspect-[16/10] bg-zinc-100 rounded-xl overflow-hidden mb-3 border border-zinc-200">
<div className="absolute top-3 left-3 z-10 px-2 py-1 bg-yellow-400/90 backdrop-blur text-[10px] font-semibold tracking-wide rounded text-zinc-900 shadow-sm">1998</div>
<img alt="Supra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606222405809-56d691079370?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Toyota</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span className="text-[10px] text-zinc-400">JDM Classic</span>
</div>
<h3 className="text-sm font-semibold text-zinc-900 truncate">Supra MK4 Twin Turbo</h3>
<div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:fuel" data-width="12"></span> 3.0L</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:gauge" data-width="12"></span> 2JZ</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:timer" data-width="12"></span> Legendary</span>
</div>
<div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-sm font-bold text-zinc-900">PKR 3.5 Cr+</span>
<span className="text-[10px] text-zinc-400">~ $120k USD</span>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-xs text-zinc-400 mb-4">You've viewed 8 of 1,240 vehicles</p>
<div className="inline-flex rounded-md shadow-sm">
<button className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors shadow-sm ring-1 ring-zinc-900 ring-offset-2">
                            Load More
                        </button>
</div>
</div>

<div className="mt-20 pt-10 border-t border-zinc-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Explore</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">New Cars</a></li>
<li><a className="hover:text-zinc-900" href="#">Used Cars</a></li>
<li><a className="hover:text-zinc-900" href="#">Imported Cars</a></li>
<li><a className="hover:text-zinc-900" href="#">Car Inspection</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Account</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">My Garage</a></li>
<li><a className="hover:text-zinc-900" href="#">Saved Searches</a></li>
<li><a className="hover:text-zinc-900" href="#">Post an Ad</a></li>
<li><a className="hover:text-zinc-900" href="#">Membership</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Data</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Price Calculator</a></li>
<li><a className="hover:text-zinc-900" href="#">Trend Analysis</a></li>
<li><a className="hover:text-zinc-900" href="#">Car Comparisons</a></li>
<li><a className="hover:text-zinc-900" href="#">API Access</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">AutoSpec</h4>
<p className="text-xs text-zinc-500 leading-relaxed">The next-generation platform for automotive enthusiasts. Real-time prices, global specs, and modern tools.</p>
<div className="flex gap-4 mt-4">
<span className="iconify text-zinc-400 hover:text-zinc-900 cursor-pointer" data-icon="lucide:instagram" data-width="16"></span>
<span className="iconify text-zinc-400 hover:text-zinc-900 cursor-pointer" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-zinc-400 hover:text-zinc-900 cursor-pointer" data-icon="lucide:youtube" data-width="16"></span>
</div>
</div>
</div>
<div className="mt-10 flex justify-between items-center text-[10px] text-zinc-400">
<p>© 2024 AutoSpec Inc.</p>
<div className="flex gap-4">
<span>Privacy</span>
<span>Terms</span>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
