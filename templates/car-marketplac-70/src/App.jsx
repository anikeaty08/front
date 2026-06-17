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



function switchTab(tabId) {
document.querySelectorAll('.tab-content').forEach(el => {
el.classList.remove('active');
setTimeout(() => {
if(!el.classList.contains('active')) el.style.display = 'none';
}, 400);
});
document.querySelectorAll('.nav-btn').forEach(btn => {
btn.classList.remove('text-[#D90429]', 'bg-[#ffebef]', 'text-zinc-900', 'bg-zinc-100');
if(btn.classList.contains('mobile-nav')) {
btn.classList.add('text-zinc-400');
btn.classList.remove('text-white', 'bg-[#D90429]'); // reset mobile active
} else {
btn.classList.add('text-zinc-500');
}
});
const target = document.getElementById(tabId);
target.style.display = 'block';
requestAnimationFrame(() => {
target.classList.add('active');
});
document.querySelectorAll(`[data-tab="${tabId}"]`).forEach(btn => {
if(btn.classList.contains('mobile-nav')) {
btn.classList.remove('text-zinc-400');
btn.classList.add('text-white', 'bg-[#D90429]'); // Mobile Active Red
} else {
btn.classList.remove('text-zinc-500');
btn.classList.add('text-[#D90429]', 'bg-[#ffebef]'); // Desktop Active Red tint
}
});
window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200/50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-[#D90429] rounded-lg flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-bold" width="20"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight text-zinc-900">AutoMarket</span>
</div>

<div className="hidden md:flex items-center p-1 rounded-full border border-zinc-200 bg-white shadow-sm">
<button className="nav-btn px-6 py-2 rounded-full text-sm font-bold transition-all bg-[#ffebef] text-[#D90429]" data-tab="view-buy" onclick="switchTab('view-buy')">Buy</button>
<button className="nav-btn px-6 py-2 rounded-full text-sm font-bold transition-all text-zinc-500 hover:text-[#D90429]" data-tab="view-sell" onclick="switchTab('view-sell')">Sell</button>
<button className="nav-btn px-6 py-2 rounded-full text-sm font-bold transition-all text-zinc-500 hover:text-[#D90429]" data-tab="view-verify" onclick="switchTab('view-verify')">Verify</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-[#D90429] transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
                    Log In
                </button>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="pt-24 md:pt-28 min-h-screen">

<div className="tab-content active" id="view-buy" style={{display: 'block'}}>
<div className="max-w-7xl mx-auto px-4 md:px-6">

<div className="relative bg-zinc-900 rounded-[2.5rem] p-8 md:p-14 mb-12 overflow-hidden text-white shadow-2xl shadow-zinc-900/20 group">

<div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=2800&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay transition-transform duration-[2s] ease-out group-hover:scale-105"></div>

<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#D90429] rounded-full blur-[120px] opacity-40 mix-blend-screen"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent"></div>
<div className="relative z-10 max-w-2xl">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 text-xs font-bold backdrop-blur-md mb-6 shadow-lg">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D90429] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D90429]"></span>
</span>
                            Live Market
                        </span>
<h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.05]">
                            Find a car that<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">moves you.</span>
</h1>

<div className="bg-white/95 backdrop-blur-xl p-3 rounded-2xl md:rounded-full flex flex-col md:flex-row gap-2 shadow-2xl shadow-black/20 border border-white/20">
<div className="flex-1 px-5 py-2 border-b md:border-b-0 md:border-r border-zinc-200">
<label className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1">Make</label>
<select className="w-full bg-transparent text-zinc-900 font-bold text-sm outline-none appearance-none cursor-pointer">
<option>Toyota</option>
<option>Honda</option>
<option>Nissan</option>
<option>Mercedes</option>
</select>
</div>
<div className="flex-1 px-5 py-2 border-b md:border-b-0 md:border-r border-zinc-200">
<label className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1">Model</label>
<select className="w-full bg-transparent text-zinc-900 font-bold text-sm outline-none appearance-none cursor-pointer">
<option>Corolla Cross</option>
<option>Premio</option>
<option>Civic</option>
</select>
</div>
<div className="flex-1 px-5 py-2">
<label className="block text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest mb-1">Max Price</label>
<select className="w-full bg-transparent text-zinc-900 font-bold text-sm outline-none appearance-none cursor-pointer">
<option>Any Price</option>
<option>20 Lakh</option>
<option>40 Lakh</option>
<option>80 Lakh</option>
</select>
</div>
<button className="btn-brand text-white rounded-xl md:rounded-full px-10 py-4 font-bold transition-all flex items-center justify-center gap-2 text-sm shadow-red-600/20">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="2.5" width="20"></iconify-icon>
                                Search
                            </button>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-12">

<aside className="hidden lg:block w-64 space-y-10 sticky top-32 h-fit">
<div>
<h3 className="font-extrabold text-sm text-zinc-900 uppercase tracking-wider mb-5">Condition</h3>
<div className="space-y-4">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-300 group-hover:border-[#D90429] flex items-center justify-center transition-all bg-white shadow-sm">
<iconify-icon className="text-white opacity-0 transition-all scale-75" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-600 group-hover:text-zinc-900">Reconditioned</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-300 group-hover:border-[#D90429] flex items-center justify-center transition-all bg-white shadow-sm">
<iconify-icon className="text-white opacity-0 transition-all scale-75" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold text-zinc-600 group-hover:text-zinc-900">Used</span>
</label>
</div>
</div>
<div>
<h3 className="font-extrabold text-sm text-zinc-900 uppercase tracking-wider mb-5">Price Range</h3>
<input className="w-full mb-3 accent-[#D90429]" type="range"/>
<div className="flex justify-between text-xs font-bold text-zinc-400">
<span>10L</span>
<span className="text-[#D90429]">1.5Cr</span>
</div>
</div>
<div>
<h3 className="font-extrabold text-sm text-zinc-900 uppercase tracking-wider mb-5">Body Type</h3>
<div className="grid grid-cols-2 gap-3">
<button className="border border-zinc-200 bg-white rounded-xl py-4 flex flex-col items-center gap-2 hover:border-[#D90429] hover:bg-[#ffebef] hover:text-[#D90429] transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-[#D90429] transition-colors" icon="solar:sedan-linear" width="28"></iconify-icon>
<span className="text-[11px] font-bold">Sedan</span>
</button>
<button className="border border-zinc-200 bg-white rounded-xl py-4 flex flex-col items-center gap-2 hover:border-[#D90429] hover:bg-[#ffebef] hover:text-[#D90429] transition-all group">
<iconify-icon className="text-zinc-400 group-hover:text-[#D90429] transition-colors" icon="solar:bus-linear" width="28"></iconify-icon>
<span className="text-[11px] font-bold">SUV</span>
</button>
</div>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-bold tracking-tight text-zinc-900">Trending Now</h2>
<div className="flex gap-2">
<button className="p-2.5 rounded-xl border border-zinc-200 hover:border-[#D90429] hover:text-[#D90429] transition-all bg-white"><iconify-icon icon="solar:sort-vertical-linear" width="20"></iconify-icon></button>
<button className="p-2.5 rounded-xl border border-zinc-200 hover:border-[#D90429] hover:text-[#D90429] transition-all bg-white lg:hidden"><iconify-icon icon="solar:filter-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-white rounded-[2rem] p-3 shadow-sm border border-zinc-100 hover:shadow-2xl hover:shadow-[#D90429]/10 hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[16/11] rounded-[1.5rem] overflow-hidden mb-4 bg-zinc-100">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider text-zinc-900 border border-white/50">
                                        Reconditioned
                                    </div>
<div className="absolute bottom-4 left-4 btn-brand text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                                        42.5 Lac
                                    </div>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg text-zinc-400 hover:text-[#D90429] hover:bg-white hover:scale-110 transition-all">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</button>
</div>
<div className="px-3 pb-2">
<div className="mb-3">
<h3 className="font-bold text-xl text-zinc-900 mb-0.5">Toyota Corolla Cross</h3>
<p className="text-sm font-medium text-zinc-500">Z Grade • Pearl White</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-dashed border-zinc-200">
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear"></iconify-icon> 2021
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:speedometer-linear"></iconify-icon> 12k km
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-[#D90429]" icon="solar:gas-station-linear"></iconify-icon> Hybrid
                                        </div>
</div>
</div>
</div>

<div className="group bg-white rounded-[2rem] p-3 shadow-sm border border-zinc-100 hover:shadow-2xl hover:shadow-[#D90429]/10 hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[16/11] rounded-[1.5rem] overflow-hidden mb-4 bg-zinc-100">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider text-white border border-white/10">
                                        Used
                                    </div>
<div className="absolute bottom-4 left-4 btn-brand text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                                        36.0 Lac
                                    </div>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg text-zinc-400 hover:text-[#D90429] hover:bg-white hover:scale-110 transition-all">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</button>
</div>
<div className="px-3 pb-2">
<div className="mb-3">
<h3 className="font-bold text-xl text-zinc-900 mb-0.5">Honda Civic RS</h3>
<p className="text-sm font-medium text-zinc-500">Turbo • Sunroof</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-dashed border-zinc-200">
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear"></iconify-icon> 2019
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:speedometer-linear"></iconify-icon> 45k km
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-[#D90429]" icon="solar:gas-station-linear"></iconify-icon> Octane
                                        </div>
</div>
</div>
</div>

<div className="group bg-white rounded-[2rem] p-3 shadow-sm border border-zinc-100 hover:shadow-2xl hover:shadow-[#D90429]/10 hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[16/11] rounded-[1.5rem] overflow-hidden mb-4 bg-zinc-100">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1623995874404-0679633e7323?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider text-zinc-900 border border-white/50">
                                        Reconditioned
                                    </div>
<div className="absolute bottom-4 left-4 btn-brand text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                                        22.5 Lac
                                    </div>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg text-zinc-400 hover:text-[#D90429] hover:bg-white hover:scale-110 transition-all">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</button>
</div>
<div className="px-3 pb-2">
<div className="mb-3">
<h3 className="font-bold text-xl text-zinc-900 mb-0.5">Toyota Axio X</h3>
<p className="text-sm font-medium text-zinc-500">Non-Hybrid • Fresh</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-dashed border-zinc-200">
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear"></iconify-icon> 2018
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:speedometer-linear"></iconify-icon> 0 km
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-[#D90429]" icon="solar:gas-station-linear"></iconify-icon> Petrol
                                        </div>
</div>
</div>
</div>

<div className="group bg-white rounded-[2rem] p-3 shadow-sm border border-zinc-100 hover:shadow-2xl hover:shadow-[#D90429]/10 hover:-translate-y-1 transition-all duration-300">
<div className="relative aspect-[16/11] rounded-[1.5rem] overflow-hidden mb-4 bg-zinc-100">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm uppercase tracking-wider text-zinc-900 border border-white/50">
                                        Reconditioned
                                    </div>
<div className="absolute bottom-4 left-4 btn-brand text-white px-4 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                                        38.5 Lac
                                    </div>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg text-zinc-400 hover:text-[#D90429] hover:bg-white hover:scale-110 transition-all">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</button>
</div>
<div className="px-3 pb-2">
<div className="mb-3">
<h3 className="font-bold text-xl text-zinc-900 mb-0.5">Toyota Premio F</h3>
<p className="text-sm font-medium text-zinc-500">Beige Interior • G Package</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-dashed border-zinc-200">
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:calendar-linear"></iconify-icon> 2019
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-zinc-400" icon="solar:speedometer-linear"></iconify-icon> 15k km
                                        </div>
<div className="flex items-center gap-2 text-xs font-bold text-zinc-700 bg-zinc-50 px-3 py-1.5 rounded-lg">
<iconify-icon className="text-[#D90429]" icon="solar:gas-station-linear"></iconify-icon> Octane
                                        </div>
</div>
</div>
</div>
</div>
<div className="mt-14 text-center">
<button className="bg-white border-2 border-zinc-100 text-zinc-900 hover:border-[#D90429] hover:text-[#D90429] font-bold px-10 py-4 rounded-full transition-all shadow-sm text-sm">
                                Load More Listings
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="view-sell" style={{display: 'none'}}>
<div className="max-w-2xl mx-auto px-6 pt-6">
<div className="text-center mb-10">
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-zinc-900">Sell it in <span className="text-[#D90429]">minutes.</span></h1>
<p className="text-zinc-500 text-lg font-medium">Instant valuation. Verified buyers. No hassle.</p>
</div>
<div className="bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D90429]/5 rounded-bl-[100px]"></div>
<form className="space-y-7 relative z-10">
<div>
<label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-2">Car Registration</label>
<div className="flex gap-3">
<div className="bg-zinc-50 rounded-2xl px-5 py-4 font-bold text-zinc-400 border border-zinc-200 text-sm flex items-center">DHAKA METRO</div>
<input className="flex-1 bg-white border border-zinc-200 rounded-2xl px-5 py-4 text-lg font-bold outline-none focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] transition-all uppercase text-zinc-900 placeholder:text-zinc-300" placeholder="GA-12-3456" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-2">Mileage</label>
<div className="relative">
<input className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 font-bold outline-none focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] transition-all text-zinc-900" placeholder="0" type="number"/>
<span className="absolute right-5 top-4 text-zinc-400 font-bold text-sm">km</span>
</div>
</div>
<div>
<label className="block text-xs font-extrabold uppercase tracking-widest text-zinc-400 mb-2">Phone</label>
<input className="w-full bg-white border border-zinc-200 rounded-2xl px-5 py-4 font-bold outline-none focus:border-[#D90429] focus:ring-1 focus:ring-[#D90429] transition-all text-zinc-900" placeholder="017..." type="tel"/>
</div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="w-5 h-5 rounded border border-zinc-300 group-hover:border-[#D90429] flex items-center justify-center transition-all mt-0.5 shrink-0 bg-white">
<iconify-icon className="text-white opacity-0 transition-all scale-75" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 leading-relaxed group-hover:text-zinc-800 transition-colors">I agree to schedule an inspection at my convenience.</span>
</label>
</div>
<button className="btn-brand w-full text-white rounded-2xl py-5 font-bold text-lg transition-all flex items-center justify-center gap-3" type="button">
                            Get Valuation <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="24"></iconify-icon>
</button>
</form>
</div>
<div className="grid grid-cols-3 gap-6 mt-10">
<div className="text-center group">
<div className="w-14 h-14 bg-white rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-center mx-auto mb-3 text-zinc-400 group-hover:text-[#D90429] group-hover:border-[#D90429] transition-all">
<iconify-icon icon="solar:camera-minimalistic-linear" width="28"></iconify-icon>
</div>
<p className="text-xs font-bold text-zinc-900">1. Upload Details</p>
</div>
<div className="text-center group">
<div className="w-14 h-14 bg-white rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-center mx-auto mb-3 text-zinc-400 group-hover:text-[#D90429] group-hover:border-[#D90429] transition-all">
<iconify-icon icon="solar:user-check-linear" width="28"></iconify-icon>
</div>
<p className="text-xs font-bold text-zinc-900">2. Inspection</p>
</div>
<div className="text-center group">
<div className="w-14 h-14 bg-white rounded-2xl border border-zinc-100 shadow-sm flex items-center justify-center mx-auto mb-3 text-zinc-400 group-hover:text-[#D90429] group-hover:border-[#D90429] transition-all">
<iconify-icon icon="solar:wad-of-money-linear" width="28"></iconify-icon>
</div>
<p className="text-xs font-bold text-zinc-900">3. Instant Cash</p>
</div>
</div>
</div>
</div>

<div className="tab-content" id="view-verify" style={{display: 'none'}}>
<div className="max-w-3xl mx-auto px-6 pt-6">
<div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-zinc-900/20">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-900 to-zinc-900 z-0"></div>
<div className="absolute -top-20 -right-20 w-80 h-80 bg-[#D90429] rounded-full blur-[100px] opacity-30"></div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/5 backdrop-blur-md mb-8 border border-white/10 shadow-xl">
<iconify-icon className="text-[#D90429]" icon="solar:shield-check-linear" width="40"></iconify-icon>
</div>
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">Don't buy blindly.</h1>
<p className="text-zinc-400 text-lg mb-12 max-w-lg mx-auto font-medium">Verify the authentic auction sheet and mileage before you make a purchase.</p>
<div className="bg-white p-2.5 rounded-2xl max-w-lg mx-auto shadow-2xl flex items-center gap-2">
<div className="pl-5 text-[#D90429]">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<input className="flex-1 py-4 text-zinc-900 font-bold bg-transparent outline-none placeholder:text-zinc-300 uppercase" placeholder="Enter Chassis No (e.g. NZE141...)" type="text"/>
<button className="btn-brand text-white px-8 py-4 rounded-xl font-bold text-sm shadow-md">Verify</button>
</div>
</div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm flex items-start gap-5 hover:shadow-xl transition-shadow">
<div className="p-3.5 rounded-2xl bg-[#ffebef] text-[#D90429]">
<iconify-icon icon="solar:danger-circle-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-lg text-zinc-900 mb-1">Mileage Tampering</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">Over 60% of cars in local markets have rolled-back odometers. We fetch data directly from Japan.</p>
</div>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-zinc-100 shadow-sm flex items-start gap-5 hover:shadow-xl transition-shadow">
<div className="p-3.5 rounded-2xl bg-[#ffebef] text-[#D90429]">
<iconify-icon icon="solar:file-check-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-lg text-zinc-900 mb-1">Accident History</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-medium">Check if the car was repaired (R-Grade) or had major structural damage before import.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-6 inset-x-4 z-50">
<div className="glass-dark rounded-[2rem] p-2 flex justify-between items-center shadow-2xl shadow-black/40 border border-white/10">
<button className="mobile-nav nav-btn flex-1 py-4 rounded-[1.5rem] flex flex-col items-center gap-1 transition-all text-white bg-[#D90429] shadow-lg shadow-red-900/20" data-tab="view-buy" onclick="switchTab('view-buy')">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
<span className="text-[10px] font-bold">Buy</span>
</button>
<button className="mobile-nav nav-btn flex-1 py-4 rounded-[1.5rem] flex flex-col items-center gap-1 transition-all text-zinc-400" data-tab="view-sell" onclick="switchTab('view-sell')">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
<span className="text-[10px] font-bold">Sell</span>
</button>
<button className="mobile-nav nav-btn flex-1 py-4 rounded-[1.5rem] flex flex-col items-center gap-1 transition-all text-zinc-400" data-tab="view-verify" onclick="switchTab('view-verify')">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="text-[10px] font-bold">Verify</span>
</button>
</div>
</nav>

    </>
  );
}
