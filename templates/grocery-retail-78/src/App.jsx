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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-600 rounded-md flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
<span className="font-bold text-xs">N</span>
</div>
<span className="font-semibold tracking-tight text-sm">NexMart</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="hover:text-slate-900 transition-colors" href="#">Retailers</a>
<a className="hover:text-slate-900 transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 hidden sm:block" href="#">Log in</a>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="pt-32 pb-20 overflow-hidden">

<div className="max-w-4xl mx-auto text-center px-6 mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50/50 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                v2.4: Family Lists &amp; Barcode Scanner
            </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                The Operating System<br/>
<span className="text-slate-400">for Modern Grocery.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
                Handle 50k+ SKUs with instant search. Deploy a native-grade PWA with smart substitutions, family sharing, and barcode scanning out of the box.
            </p>
<div className="flex items-center justify-center gap-4">
<button className="group flex items-center gap-2 bg-emerald-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20">
<span>Start Trial</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium px-6 py-3 rounded-full hover:bg-slate-50 transition-all">
<iconify-icon icon="solar:smartphone-linear" width="18"></iconify-icon>
<span>Retail Demo</span>
</button>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

<div className="lg:col-span-5 space-y-8 sticky top-32">
<div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Retail Configuration</h3>
<p className="text-sm text-slate-500">Enable advanced supermarket features instantly.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 mb-6 text-slate-900 font-medium text-sm">
<iconify-icon icon="solar:shop-linear" width="18"></iconify-icon>
                            Store Identity
                        </div>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Primary Color</label>
<div className="flex gap-3">
<button className="w-8 h-8 rounded-full bg-emerald-500 ring-2 ring-offset-2 ring-emerald-500 cursor-pointer"></button>
<button className="w-8 h-8 rounded-full bg-orange-500 hover:ring-2 ring-offset-2 ring-orange-500 transition-all cursor-pointer"></button>
<button className="w-8 h-8 rounded-full bg-blue-600 hover:ring-2 ring-offset-2 ring-blue-600 transition-all cursor-pointer"></button>
<button className="w-8 h-8 rounded-full bg-slate-900 hover:ring-2 ring-offset-2 ring-slate-900 transition-all cursor-pointer"></button>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-2">Catalog Layout</label>
<div className="w-full h-10 border border-slate-200 rounded-lg flex items-center px-3 justify-between bg-slate-50">
<span className="text-sm text-slate-700">Grid (Dense)</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center gap-2 mb-6 text-slate-900 font-medium text-sm">
<iconify-icon icon="solar:widget-5-linear" width="18"></iconify-icon>
                            Smart Retail Features
                        </div>
<div className="space-y-4">

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-slate-900 font-medium">Barcode Scanner</span>
<span className="text-xs text-slate-500">Scan &amp; Go in-store capability</span>
</div>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle1">
<input checked="" className="sr-only peer" id="toggle1" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-slate-900 font-medium">Smart Substitutes</span>
<span className="text-xs text-slate-500">AI suggestions for out-of-stock</span>
</div>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle2">
<input checked="" className="sr-only peer" id="toggle2" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm text-slate-900 font-medium">Family Shared Lists</span>
<span className="text-xs text-slate-500">Real-time sync for households</span>
</div>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle3">
<input checked="" className="sr-only peer" id="toggle3" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex justify-center lg:justify-end relative">

<div className="absolute top-20 right-20 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-10 left-20 w-72 h-72 bg-teal-300/20 rounded-full blur-3xl -z-10"></div>

<div className="relative w-[340px] h-[700px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-900/50">

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
</div>

<div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="bg-white/90 backdrop-blur-md sticky top-0 z-10 px-5 pt-12 pb-2 border-b border-slate-50">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:shop-bold" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-bold text-sm tracking-tight leading-none">FreshMart</span>
<span className="text-[10px] text-slate-400">Next Slot: 5:00 PM</span>
</div>
</div>
<div className="flex gap-3">
<iconify-icon className="text-slate-400" icon="solar:bell-linear" width="20"></iconify-icon>
<div className="relative">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 text-white text-[9px] flex items-center justify-center rounded-full font-bold">3</span>
</div>
</div>
</div>

<div className="relative">
<input className="w-full bg-slate-100 border-none rounded-xl py-2.5 pl-9 pr-10 text-xs font-medium focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-400" placeholder="Search 50k+ items..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="14"></iconify-icon>
<div className="absolute right-2 top-1.5 bg-white p-1 rounded-md shadow-sm border border-slate-100 cursor-pointer">
<iconify-icon className="text-emerald-600 block" icon="solar:scanner-linear" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar pb-20">

<div className="flex gap-3 px-5 py-4 overflow-x-auto no-scrollbar">
<div className="flex flex-col items-center gap-1.5 min-w-[56px]">
<div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
<img className="w-10 h-10 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-[10px] font-medium text-slate-600">Fruits</span>
</div>
<div className="flex flex-col items-center gap-1.5 min-w-[56px]">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
<img className="w-10 h-10 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-[10px] font-medium text-slate-600">Dairy</span>
</div>
<div className="flex flex-col items-center gap-1.5 min-w-[56px]">
<div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center">
<img className="w-10 h-10 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-[10px] font-medium text-slate-600">Bakery</span>
</div>
<div className="flex flex-col items-center gap-1.5 min-w-[56px]">
<div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
<img className="w-10 h-10 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-[10px] font-medium text-slate-600">Meat</span>
</div>
</div>

<div className="mx-5 mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 text-white flex justify-between items-center shadow-md shadow-emerald-200">
<div>
<span className="bg-white/20 text-[9px] font-bold px-1.5 py-0.5 rounded text-white mb-1 inline-block">TODAY</span>
<h3 className="font-bold text-sm">20% Off Organics</h3>
<p className="text-[10px] text-emerald-50 opacity-90">Code: FRESH20</p>
</div>
<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
<iconify-icon icon="solar:tag-price-bold" width="20"></iconify-icon>
</div>
</div>

<div className="px-5">
<div className="flex items-center justify-between mb-3">
<h4 className="font-semibold text-sm">Essentials</h4>
<span className="text-xs text-emerald-600 font-medium">Reorder</span>
</div>
<div className="space-y-3">

<div className="flex items-center gap-3 bg-white border border-slate-100 p-2 rounded-xl shadow-sm">
<div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0">
<img className="w-12 h-12 object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1">
<h5 className="text-xs font-semibold text-slate-900">Organic Avocados</h5>
<p className="text-[10px] text-slate-500">Pack of 3</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-bold">$4.99</span>
<span className="text-[9px] text-slate-400 line-through">$5.50</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="w-7 h-7 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-colors shadow-sm shadow-emerald-200">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-3 bg-white border border-slate-100 p-2 rounded-xl shadow-sm">
<div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 relative">
<img className="w-12 h-12 object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-1 left-1 w-2 h-2 bg-orange-400 rounded-full border border-white"></div>
</div>
<div className="flex-1">
<h5 className="text-xs font-semibold text-slate-900">Oat Milk Barista</h5>
<p className="text-[10px] text-slate-500">1 Liter • Low Stock</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs font-bold">$3.20</span>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<button className="w-7 h-7 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-colors shadow-sm shadow-emerald-200">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-3 bg-white border border-slate-100 p-2 rounded-xl shadow-sm opacity-60">
<div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center flex-shrink-0 grayscale">
<img className="w-12 h-12 object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-1">
<h5 className="text-xs font-semibold text-slate-900">Sourdough Bread</h5>
<p className="text-[10px] text-red-500 font-medium">Out of Stock</p>
<p className="text-[9px] text-emerald-600 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:magic-stick-3-linear" width="10"></iconify-icon>
                                                    Substitute available
                                                </p>
</div>
<div className="flex flex-col items-end gap-2">
<button className="w-7 h-7 bg-slate-200 text-slate-400 rounded-lg flex items-center justify-center cursor-not-allowed">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/95 backdrop-blur border-t border-slate-100 px-6 py-4 flex items-center justify-between z-10">
<div className="flex flex-col items-center gap-1">
<iconify-icon className="text-emerald-600" icon="solar:shop-bold" width="22"></iconify-icon>
<span className="text-[9px] font-medium text-emerald-600">Shop</span>
</div>
<div className="flex flex-col items-center gap-1">
<iconify-icon className="text-slate-400 hover:text-slate-600 transition-colors" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Family</span>
</div>
<div className="flex flex-col items-center gap-1">
<iconify-icon className="text-slate-400 hover:text-slate-600 transition-colors" icon="solar:heart-linear" width="22"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Saved</span>
</div>
<div className="flex flex-col items-center gap-1">
<iconify-icon className="text-slate-400 hover:text-slate-600 transition-colors" icon="solar:user-circle-linear" width="22"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Profile</span>
</div>
</div>

<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full z-20"></div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-32">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Retail features, reimagined.</h2>
<p className="text-slate-500">The tools you need to compete with the giants.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-hidden relative group hover:shadow-md transition-all">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:scanner-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Barcode Scanner &amp; Catalog</h3>
<p className="text-sm text-slate-500 mb-6">Customers can scan products in-store to check prices or add to their digital cart. Handles 50k+ hierarchical SKUs effortlessly.</p>

<div className="flex gap-2">
<div className="h-8 flex-1 bg-slate-100 rounded-lg flex items-center px-2 gap-2 border border-slate-200">
<div className="w-16 h-2 bg-slate-300 rounded-full"></div>
</div>
<div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-3xl p-8 shadow-lg relative overflow-hidden text-white group">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
<div className="relative z-10">
<div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white mb-4 backdrop-blur-sm">
<iconify-icon icon="solar:cloud-download-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2">Offline-First Browsing</h3>
<p className="text-sm text-slate-400 mb-6">Supermarket basements have bad reception. Our app caches the catalog so users can keep shopping without internet.</p>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-xl p-3 border border-white/5">
<span className="block text-2xl font-bold text-emerald-400">100<span className="text-sm text-emerald-400/60">ms</span></span>
<span className="text-[10px] uppercase tracking-wider text-slate-400">Search Speed</span>
</div>
<div className="bg-white/5 rounded-xl p-3 border border-white/5">
<div className="flex items-center gap-1 text-orange-300 mb-1">
<iconify-icon icon="solar:wifi-off-linear" width="16"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-wider text-slate-400">Full Catalog</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-all">
<div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Family Lists &amp; Substitutes</h3>
<p className="text-sm text-slate-500 mb-6">Shared lists that sync in real-time for couples. Smart AI suggestions when items are out of stock.</p>

<div className="space-y-2 mt-4">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">A</div>
<div className="text-[10px] text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">Added: Milk</div>
</div>
<div className="flex items-center gap-2 justify-end">
<div className="text-[10px] text-white bg-blue-500 px-2 py-1 rounded-md">Added: Eggs</div>
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] text-white font-bold">B</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center text-white text-[10px]">N</div>
<span className="font-medium text-sm text-slate-900">NexMart Retail Solutions © 2024</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-slate-900" href="#">Retail API</a>
<a className="hover:text-slate-900" href="#">Status</a>
<a className="hover:text-slate-900" href="#">Docs</a>
</div>
</div>
</footer>

    </>
  );
}
