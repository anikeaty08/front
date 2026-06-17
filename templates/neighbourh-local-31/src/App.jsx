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
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb', // Primary Blue
900: '#1e3a8a',
},
eco: {
50: '#ecfdf5',
500: '#10b981', // Eco Green
600: '#059669',
}
},
boxShadow: {
'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:share-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">NeighbourHub</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-slate-900 hover:text-brand-600 transition-colors" href="#">Home</a>
<a className="hover:text-brand-600 transition-colors" href="#">Browse Resources</a>
<a className="hover:text-brand-600 transition-colors" href="#">My Listings</a>
<a className="hover:text-brand-600 transition-colors" href="#">Rentals</a>
<a className="hover:text-brand-600 transition-colors" href="#">Subscriptions</a>
<a className="text-red-600 flex items-center gap-1 hover:text-red-700 transition-colors" href="#">
<iconify-icon icon="solar:siren-rounded-linear" width="16"></iconify-icon>
                    Emergency Mode
                </a>
<a className="hover:text-brand-600 transition-colors" href="#">Admin</a>
</div>

<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white ring-offset-2 ring-offset-slate-50">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</div>
</nav>

<main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-8 space-y-8">

<header className="text-center space-y-6 max-w-4xl mx-auto py-4">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
                Lend. Borrow. <span className="text-brand-600">Share Locally.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Access nearby tools, books, medical aids, and community resources securely with AI-verified quality checks.
            </p>

<div className="flex flex-col md:flex-row items-center gap-3 bg-white p-2 rounded-2xl shadow-card max-w-2xl mx-auto border border-slate-200/60">
<div className="flex items-center gap-2 px-4 py-2 w-full md:w-auto border-b md:border-b-0 md:border-r border-slate-100">
<iconify-icon className="text-brand-600" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-900">Downtown, Zone 4</span>
<iconify-icon className="text-slate-400 ml-1" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 w-full flex items-center px-4">
<iconify-icon className="text-slate-400 mr-3" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm placeholder:text-slate-400 text-slate-900 h-10" placeholder="Search for drills, books, crutches..." type="text"/>
</div>
<div className="pr-2 w-full md:w-auto">
<button className="w-full md:w-auto px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium rounded-xl transition-all shadow-sm shadow-brand-200">
                        Find Resources
                    </button>
</div>
</div>

<div className="flex flex-wrap justify-center gap-2 pt-2">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium">All</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 transition-colors text-xs font-medium">Emergency</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 transition-colors text-xs font-medium">Tools</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 transition-colors text-xs font-medium">Books</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 transition-colors text-xs font-medium">Sports &amp; Fitness</button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-brand-200 hover:text-brand-600 transition-colors text-xs font-medium">Medical Aids</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

<aside className="lg:col-span-3 space-y-6">

<div className="bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden">
<div className="p-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Nearby</h3>
<span className="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-md font-medium">Live</span>
</div>
<div className="h-48 w-full map-pattern relative">

<div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-brand-600 border border-brand-100">
<iconify-icon icon="solar:drill-linear" width="16"></iconify-icon>
</div>
<div className="w-1 h-3 bg-brand-600"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-eco-600 border border-eco-100">
<iconify-icon icon="solar:book-linear" width="16"></iconify-icon>
</div>
<div className="w-1 h-3 bg-eco-600"></div>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-brand-500/20 rounded-full flex items-center justify-center bg-brand-500/5"></div>
</div>
<div className="p-4">
<label className="text-xs font-medium text-slate-500 mb-2 block">Search Radius</label>
<div className="flex gap-2">
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">500m</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-brand-50 text-brand-600 border border-brand-200">1km</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200">3km</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-card border border-slate-200 p-4">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight mb-3">Most Needed This Week</h3>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:wheelchair-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-700">Wheelchairs</span>
</div>
<span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">High</span>
</li>
<li className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:ladder-linear" width="14"></iconify-icon>
</div>
<span className="text-slate-700">Ladders</span>
</div>
<span className="text-xs font-medium text-slate-500">Med</span>
</li>
</ul>
</div>
</aside>

<section className="lg:col-span-6 space-y-6">

<div className="bg-white rounded-2xl shadow-card border border-slate-200 overflow-hidden">
<div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:scanner-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900">AI Damage Detection</h3>
</div>
<span className="text-xs font-mono text-slate-400">ID: #TR-4921</span>
</div>
<div className="p-5">
<div className="flex gap-4 mb-4">
<div className="flex-1 space-y-2">
<span className="text-xs font-medium text-slate-500">Pickup (Before)</span>
<div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 relative overflow-hidden group">
<div className="absolute inset-0 bg-black/5"></div>
<iconify-icon className="text-slate-300" icon="solar:camera-linear" width="32"></iconify-icon>

<div className="absolute top-0 left-0 w-full h-1 bg-brand-400/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="flex-1 space-y-2">
<span className="text-xs font-medium text-slate-500">Return (After)</span>
<div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
<iconify-icon className="text-slate-300" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center justify-between bg-eco-50 border border-eco-100 rounded-lg p-3">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-eco-100 text-eco-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-eco-700">No Damage Detected</span>
</div>
<button className="text-xs text-eco-700 underline decoration-eco-700/30">View Analysis</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-card border border-slate-200 p-5 flex flex-col sm:flex-row gap-5 hover:shadow-soft transition-shadow">
<div className="w-full sm:w-32 h-32 bg-slate-100 rounded-xl flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:drill-linear" width="40"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-base font-semibold text-slate-900">Bosch Cordless Drill 18V</h3>
<span className="text-sm font-semibold text-slate-900">$5<span className="text-xs font-normal text-slate-500">/day</span></span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 0.8km away</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-eco-600 font-medium">Available Now</span>
</div>
</div>
<div className="flex items-center gap-3 mt-2">
<button className="flex-1 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">Borrow Now</button>
<button className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Details</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-card border border-slate-200 p-5 flex flex-col sm:flex-row gap-5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
<div className="w-full sm:w-32 h-32 bg-red-50 rounded-xl flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-red-400" icon="solar:medical-kit-linear" width="40"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<h3 className="text-base font-semibold text-slate-900">Standard Wheelchair</h3>
<span className="bg-red-100 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">Emergency</span>
</div>
<span className="text-sm font-semibold text-eco-600">Free</span>
</div>
<div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
<span className="flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 0.3km away</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span className="text-slate-500">Owner: Sarah M.</span>
</div>
</div>
<div className="flex items-center gap-3 mt-2">
<button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg transition-colors shadow-sm shadow-red-200">Request Emergency Use</button>
<button className="px-4 py-2 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50">Details</button>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-3 space-y-6">

<div className="bg-red-50 rounded-2xl p-5 border border-red-100 shadow-sm relative overflow-hidden">
<div className="absolute top-[-10px] right-[-10px] w-20 h-20 bg-red-100 rounded-full opacity-50 blur-xl"></div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<h3 className="text-sm font-semibold text-red-700 tracking-tight">Disaster Mode Active</h3>
</div>
<div className="flex justify-between mb-6 px-2">
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">
<iconify-icon icon="solar:cylinder-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-red-800">Oxygen</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">
<iconify-icon icon="solar:wheelchair-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-red-800">Mobility</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm">
<iconify-icon icon="solar:medical-kit-linear" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-red-800">First Aid</span>
</div>
</div>
<div className="space-y-3">
<div className="bg-white/60 p-2 rounded-lg text-xs font-mono text-red-800 text-center">
                            Helpline: <span className="font-bold">1800-HELP-NOW</span>
</div>
<button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-semibold py-2.5 rounded-lg shadow-sm transition-colors">
                            Request Emergency Resource
                        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-200 hover:shadow-soft transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-brand-600 transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Post Item</span>
</button>
<button className="flex flex-col items-center justify-center gap-2 p-4 bg-white border border-slate-200 rounded-xl hover:border-brand-200 hover:shadow-soft transition-all group">
<iconify-icon className="text-slate-400 group-hover:text-brand-600 transition-colors" icon="solar:history-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600">Rentals</span>
</button>
<button className="col-span-2 flex items-center justify-center gap-2 p-4 bg-emerald-50 border border-emerald-100 rounded-xl hover:bg-emerald-100 transition-all group">
<iconify-icon className="text-emerald-600" icon="solar:leaf-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold text-emerald-700">Go Green – Eco Impact</span>
</button>
</div>
</aside>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

<div className="bg-white p-6 rounded-2xl shadow-card border border-slate-200">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Smart Demand Prediction</h3>
<p className="text-xs text-slate-500">Based on seasonal trends &amp; local events</p>
</div>
<button className="text-xs text-brand-600 font-medium">View Report</button>
</div>

<div className="flex items-end gap-4 h-32 w-full px-2">
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-100 rounded-t-sm h-[40%] group-hover:bg-brand-200 transition-all"></div>
<span className="text-[10px] text-slate-400 uppercase">Mon</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-100 rounded-t-sm h-[60%] group-hover:bg-brand-200 transition-all"></div>
<span className="text-[10px] text-slate-400 uppercase">Tue</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-brand-500 rounded-t-sm h-[85%] shadow-lg shadow-brand-200"></div>
<span className="text-[10px] font-bold text-brand-600 uppercase">Wed</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-100 rounded-t-sm h-[50%] group-hover:bg-brand-200 transition-all"></div>
<span className="text-[10px] text-slate-400 uppercase">Thu</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2 group">
<div className="w-full bg-slate-100 rounded-t-sm h-[75%] group-hover:bg-brand-200 transition-all"></div>
<span className="text-[10px] text-slate-400 uppercase">Fri</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-card border border-slate-200">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-slate-900">Community Impact</h3>
<iconify-icon className="text-slate-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Items Reused</span>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">1,240</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Money Saved</span>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">$14.5k</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:cloud-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">CO₂ Reduced</span>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">450kg</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 mt-12 py-8">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mb-1">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900">Secure Payments</span>
<span className="text-[10px] text-slate-500">Escrow protection</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mb-1">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900">Auto Invoices</span>
<span className="text-[10px] text-slate-500">Digital receipts</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mb-1">
<iconify-icon icon="solar:magic-stick-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900">AI Enabled</span>
<span className="text-[10px] text-slate-500">Damage verification</span>
</div>
<div className="flex flex-col items-center md:items-start gap-2">
<div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 mb-1">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-900">Trust &amp; Safety</span>
<span className="text-[10px] text-slate-500">Community verified</span>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 text-center">
<p className="text-xs text-slate-400">© 2023 NeighbourHub Platform. All rights reserved.</p>
</div>
</div>
</footer>

<style>
        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
    </style>

    </>
  );
}
