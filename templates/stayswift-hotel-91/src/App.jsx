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
blue: '#0B5ED7',
teal: '#20C997',
orange: '#FF8C42',
bg: '#F8F9FA',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'float': '0 10px 40px -10px rgba(11, 94, 215, 0.15)',
}
}
}
}



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
      

<nav className="fixed w-full z-50 glass-nav border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-xl bg-brand-blue flex items-center justify-center text-white">
<iconify-icon icon="solar:smart-home-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-slate-900 group-hover:text-brand-blue transition-colors">StaySwift</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-900 hover:text-brand-blue transition-colors" href="#">Hotels</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors" href="#">Deals</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors" href="#">Destinations</a>
<a className="text-sm font-medium text-slate-500 hover:text-brand-blue transition-colors" href="#">Support</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">
                        List Your Property
                    </button>
<button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-brand-blue transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Sign In
                    </button>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-brand-blue">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 z-0">

<div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-brand-teal/10 rounded-full blur-3xl"></div>
<div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-brand-blue/5 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-12">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-blue text-xs font-medium mb-6">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
                    The smarter way to travel
                </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Find your next stay, <span className="text-brand-blue">swiftly.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto leading-relaxed">
                    Discover luxury hotels and cozy stays across the US. Best prices guaranteed with world-class support.
                </p>
</div>

<div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-float p-2 border border-slate-100/50">
<div className="flex flex-col md:flex-row gap-2">

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 hover:bg-white focus:bg-white border-0 focus:ring-2 focus:ring-brand-blue/20 text-slate-900 placeholder-slate-400 text-sm transition-all outline-none h-full" placeholder="Where are you going?" type="text"/>
</div>

<div className="flex-1 flex gap-2">
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 hover:bg-white focus:bg-white border-0 focus:ring-2 focus:ring-brand-blue/20 text-slate-900 placeholder-slate-400 text-sm transition-all outline-none h-full" placeholder="Check-in" type="text"/>
</div>
<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
<iconify-icon icon="solar:calendar-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 hover:bg-white focus:bg-white border-0 focus:ring-2 focus:ring-brand-blue/20 text-slate-900 placeholder-slate-400 text-sm transition-all outline-none h-full" placeholder="Check-out" type="text"/>
</div>
</div>

<div className="flex gap-2">
<div className="w-full md:w-32 relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-brand-blue transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 hover:bg-white focus:bg-white border-0 focus:ring-2 focus:ring-brand-blue/20 text-slate-900 placeholder-slate-400 text-sm transition-all outline-none h-full" placeholder="2 Guests" type="number"/>
</div>
<button className="bg-brand-blue hover:bg-blue-700 text-white rounded-2xl px-8 py-4 font-medium text-sm transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 min-w-[120px]">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Search
                        </button>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-10 text-slate-400 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-teal" icon="solar:verified-check-linear" width="18"></iconify-icon>
                    Best Price Guarantee
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-blue" icon="solar:shield-check-linear" width="18"></iconify-icon>
                    Secure Booking
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-orange" icon="solar:headset-linear" width="18"></iconify-icon>
                    24/7 US Support
                </div>
</div>
</div>
</div>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Trending this week</h2>
<p className="text-slate-500 text-sm">Most popular hotels chosen by travelers.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-blue-700 transition-colors" href="#">
                    View all hotels
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-soft transition-all duration-300 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Hotel" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-semibold text-brand-blue shadow-sm">
                            Premium
                        </div>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white text-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="font-semibold text-slate-900 text-base mb-1">The Azure Resort</h3>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Miami Beach, FL
                                </div>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
<iconify-icon className="text-brand-orange" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs font-semibold text-slate-700">4.9</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400 line-through">$320</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-slate-900">$245</span>
<span className="text-xs text-slate-500">/night</span>
</div>
</div>
<button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-brand-blue transition-colors">
                                Book
                            </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-soft transition-all duration-300 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Hotel" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-brand-teal text-white px-2.5 py-1 rounded-lg text-xs font-semibold shadow-sm">
                            -20% Deal
                        </div>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white text-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="font-semibold text-slate-900 text-base mb-1">Skyline Loft</h3>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    New York, NY
                                </div>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
<iconify-icon className="text-brand-orange" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs font-semibold text-slate-700">4.7</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400 line-through">$450</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-slate-900">$360</span>
<span className="text-xs text-slate-500">/night</span>
</div>
</div>
<button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-brand-blue transition-colors">
                                Book
                            </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-soft transition-all duration-300 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Hotel" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white text-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="font-semibold text-slate-900 text-base mb-1">Desert Oasis</h3>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Scottsdale, AZ
                                </div>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
<iconify-icon className="text-brand-orange" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs font-semibold text-slate-700">4.8</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400">Standard Room</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-slate-900">$185</span>
<span className="text-xs text-slate-500">/night</span>
</div>
</div>
<button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-brand-blue transition-colors">
                                Book
                            </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-soft transition-all duration-300 cursor-pointer">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Hotel" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-semibold text-brand-orange shadow-sm">
                            Popular
                        </div>
<button className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur hover:bg-white text-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="font-semibold text-slate-900 text-base mb-1">Harbor View</h3>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    San Francisco, CA
                                </div>
</div>
<div className="flex items-center gap-1 bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
<iconify-icon className="text-brand-orange" icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-xs font-semibold text-slate-700">4.5</span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400">Bay View</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-slate-900">$299</span>
<span className="text-xs text-slate-500">/night</span>
</div>
</div>
<button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-brand-blue transition-colors">
                                Book
                            </button>
</div>
</div>
</div>
</div>
<div className="sm:hidden mt-8 text-center">
<a className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue hover:text-blue-700 transition-colors" href="#">
                    View all hotels
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 border-t border-slate-100 bg-brand-bg">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Find the perfect stay within your budget</h2>
<p className="text-slate-500 mb-8 leading-relaxed text-sm">Use our advanced filters to find hotels that match your specific needs, from price range to amenities.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Price transparency, no hidden fees</span>
</li>
<li className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-100 text-brand-teal flex items-center justify-center">
<iconify-icon icon="solar:calendar-date-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Flexible cancellation options</span>
</li>
</ul>
<button className="bg-white border border-slate-200 text-slate-900 hover:border-brand-blue hover:text-brand-blue px-6 py-3 rounded-xl text-sm font-medium transition-colors">
                        Explore filters
                    </button>
</div>

<div className="lg:col-span-7">
<div className="bg-white rounded-3xl shadow-soft p-8 border border-slate-100 max-w-md mx-auto lg:mx-0 lg:ml-auto">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-slate-900">Filters</h3>
<span className="text-xs text-brand-blue cursor-pointer">Reset all</span>
</div>

<div className="mb-8">
<div className="flex justify-between text-xs text-slate-500 mb-2 font-medium">
<span>Price Range</span>
<span>$50 - $500+</span>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="60"/>
</div>

<div className="space-y-3 mb-8">
<p className="text-xs font-medium text-slate-500 mb-2">Amenities</p>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-colors"></div>
<iconify-icon className="absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Free WiFi</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-slate-200 rounded-md peer-checked:bg-brand-blue peer-checked:border-brand-blue transition-colors"></div>
<iconify-icon className="absolute top-0.5 left-0.5 text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900">Pool</span>
</label>
</div>

<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-900">Show only available</span>
<div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 left-0 top-0 border-slate-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</input></div>
</div>
<button className="w-full mt-8 bg-brand-blue text-white rounded-xl py-3 text-sm font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                            Apply Filters
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8">Top Destinations</h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<img alt="NY" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue">New York</span>
</a>

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<img alt="LA" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1534050359320-02900022671e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue">Los Angeles</span>
</a>

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<img alt="Chicago" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&amp;w=1968&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue">Chicago</span>
</a>

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<img alt="Miami" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue">Miami</span>
</a>

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all">
<img alt="Austin" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue">Austin</span>
</a>

<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-full aspect-square rounded-full overflow-hidden border border-slate-100 shadow-sm group-hover:shadow-md transition-all flex items-center justify-center bg-slate-50 text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700 group-hover:text-brand-blue">View All</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-brand-bg border-t border-slate-200">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue mb-6">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Get exclusive deals</h2>
<p className="text-slate-500 mb-8">Join 50,000+ travelers and save up to 30% on your next stay.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-sm transition-all bg-white" placeholder="Enter your email" type="email"/>
<button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-brand-blue transition-all shadow-md">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-lg bg-brand-blue flex items-center justify-center text-white">
<iconify-icon icon="solar:smart-home-angle-linear" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">StaySwift</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                        Premium hotel booking experience. We make finding the perfect stay simple, transparent, and swift.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Press</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Partners</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">List Your Property</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Affiliates</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Advertise</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 StaySwift Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
