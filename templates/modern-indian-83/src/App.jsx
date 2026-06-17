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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl tracking-tighter text-slate-100 font-semibold flex items-center gap-2" href="#">
<span className="iconify text-amber-500" data-height="20" data-icon="lucide:flame" data-width="20"></span>
                RASOI
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-slate-100 transition-colors" href="#menu">Menu</a>
<a className="hover:text-slate-100 transition-colors" href="#experience">Experience</a>
<a className="hover:text-slate-100 transition-colors" href="#private-dining">Private Dining</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="16"></span>
                    Order
                </button>
<button className="bg-slate-100 text-slate-950 px-4 py-2 rounded-full text-xs font-semibold hover:bg-white transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2">
                    Reserve Table
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 text-xs font-medium text-amber-500">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                    Michelin Guide 2024 Selection
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Heritage flavors, <br/>
<span className="text-slate-500">modern soul.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
                    Experience the nuance of Indian cuisine re-imagined. A culinary journey from the streets of Delhi to the coasts of Kerala, plated with precision.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="bg-amber-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-amber-500 transition-colors shadow-lg shadow-amber-900/20">
                        View Full Menu
                    </button>
<button className="px-6 py-3 rounded-lg text-sm font-medium text-slate-300 border border-slate-800 hover:bg-slate-900 transition-colors">
                        Watch the Film
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-slate-500 text-xs font-medium uppercase tracking-widest">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-width="16"></span>
                        Open 5PM - 11PM
                    </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                        SoHo, New York
                    </div>
</div>
</div>
<div className="relative lg:h-[600px] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 group">

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 z-10"></div>
<img alt="Fine Dining Indian Food" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 z-20 glass-panel p-6 rounded-xl border border-slate-700/50 backdrop-blur-md">
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium tracking-tight text-lg">Smoked Butter Chicken</h3>
<p className="text-slate-400 text-sm mt-1">Fenugreek, San Marzano tomatoes, charcoal smoked.</p>
</div>
<span className="text-amber-400 font-medium">$28</span>
</div>
<div className="mt-4 flex items-center gap-1 text-amber-500">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="text-slate-400 text-xs ml-2 text-white">(240+ Reviews)</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-900 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<div className="text-3xl font-medium text-white tracking-tight">15+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Signature Spices</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium text-white tracking-tight">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Farm to Table</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium text-white tracking-tight">4.9</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Average Rating</div>
</div>
<div className="space-y-1">
<div className="text-3xl font-medium text-white tracking-tight">2018</div>
<div className="text-xs text-slate-500 uppercase tracking-widest font-medium">Established</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative" id="menu">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Curated Selection</h2>
<p className="text-slate-400 text-sm font-light">A blend of traditional recipes and contemporary presentation.</p>
</div>

<div className="flex justify-center gap-2 mb-12">
<button className="px-4 py-2 rounded-lg bg-slate-800 text-white text-xs font-medium border border-slate-700">Starters</button>
<button className="px-4 py-2 rounded-lg hover:bg-slate-900 text-slate-400 text-xs font-medium border border-transparent hover:border-slate-800 transition-all">Mains</button>
<button className="px-4 py-2 rounded-lg hover:bg-slate-900 text-slate-400 text-xs font-medium border border-transparent hover:border-slate-800 transition-all">Breads</button>
<button className="px-4 py-2 rounded-lg hover:bg-slate-900 text-slate-400 text-xs font-medium border border-transparent hover:border-slate-800 transition-all">Cocktails</button>
</div>

<div className="space-y-4">

<div className="group relative p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-slate-200 font-medium text-base">Truffle Cheese Kulcha</h3>
<span className="text-slate-500 text-sm font-mono">$14</span>
</div>
<p className="text-slate-500 text-xs font-light max-w-lg">Wild mushroom truffle oil, aged cheddar, coriander chutney.</p>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-slate-800 p-2 rounded-md text-white hover:bg-amber-600 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>

<div className="group relative p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-slate-200 font-medium text-base">Lamb Rogan Josh</h3>
<span className="text-slate-500 text-sm font-mono">$26</span>
</div>
<p className="text-slate-500 text-xs font-light max-w-lg">Slow-cooked kashmiri lamb shank, ratanjot infused curry, saffron.</p>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-slate-800 p-2 rounded-md text-white hover:bg-amber-600 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>

<div className="group relative p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-slate-200 font-medium text-base">Black Dairy Dal</h3>
<span className="text-slate-500 text-sm font-mono">$18</span>
</div>
<p className="text-slate-500 text-xs font-light max-w-lg">Simmered for 24 hours, finished with cream and fenugreek.</p>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-slate-800 p-2 rounded-md text-white hover:bg-amber-600 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>

<div className="group relative p-4 rounded-xl hover:bg-slate-900/50 border border-transparent hover:border-slate-800 transition-all cursor-default">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-slate-200 font-medium text-base">Kerala Prawn Curry</h3>
<span className="text-slate-500 text-sm font-mono">$29</span>
</div>
<p className="text-slate-500 text-xs font-light max-w-lg">Tiger prawns, coconut milk, curry leaves, mustard seeds.</p>
<div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="bg-slate-800 p-2 rounded-md text-white hover:bg-amber-600 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-amber-500 hover:text-amber-400 font-medium transition-colors" href="#">
                    View Full Menu
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-slate-900" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
<img alt="Cocktails" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-10">
<div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center mb-4 text-amber-500 border border-slate-700">
<span className="iconify" data-icon="lucide:martini" data-width="18"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">The Spice Lab</h3>
<p className="text-slate-400 text-sm mt-2 max-w-xs">Artisanal cocktails infused with indian spices like cardamom, saffron, and star anise.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 flex flex-col justify-between p-6">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-500 border border-slate-700 z-10">
<span className="iconify" data-icon="lucide:vegan" data-width="18"></span>
</div>
<div className="z-10">
<h3 className="text-xl font-medium text-white tracking-tight">Plant Based</h3>
<p className="text-slate-400 text-sm mt-2">Over 40% of our menu is vegan or can be made vegan upon request.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 flex flex-col justify-between p-6">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-amber-500 border border-slate-700 z-10">
<span className="iconify" data-icon="lucide:chef-hat" data-width="18"></span>
</div>
<div className="z-10">
<h3 className="text-xl font-medium text-white tracking-tight">Chef's Table</h3>
<p className="text-slate-400 text-sm mt-2">An intimate 7-course tasting menu experience personally curated by Chef Arjun.</p>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
<img alt="Ambience" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 z-10">
<div className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur flex items-center justify-center mb-4 text-white border border-slate-700">
<span className="iconify" data-icon="lucide:armchair" data-width="18"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Atmosphere</h3>
<p className="text-slate-400 text-sm mt-2 max-w-sm">Minimalist interiors with warm lighting, designed for conversation and connection.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium text-white tracking-tight">Reserve a Table</h2>
<p className="text-slate-400 text-sm mt-2">Bookings open 30 days in advance.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Date</label>
<div className="relative">
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all placeholder-slate-600 appearance-none" type="date"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Guests</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition-all appearance-none cursor-pointer">
<option>2 People</option>
<option>3 People</option>
<option>4 People</option>
<option>5 People</option>
<option>6+ (Contact Us)</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Time</label>
<div className="grid grid-cols-4 md:grid-cols-6 gap-3">
<button className="py-2 rounded border border-slate-700 bg-slate-800 text-xs text-white hover:bg-amber-600 hover:border-amber-600 transition-all" type="button">5:00 PM</button>
<button className="py-2 rounded border border-slate-700 bg-slate-800 text-xs text-white hover:bg-amber-600 hover:border-amber-600 transition-all" type="button">5:30 PM</button>
<button className="py-2 rounded border border-slate-700 bg-slate-800 text-xs text-white hover:bg-amber-600 hover:border-amber-600 transition-all" type="button">6:00 PM</button>
<button className="py-2 rounded border border-slate-700 bg-slate-800 text-xs text-white hover:bg-amber-600 hover:border-amber-600 transition-all" type="button">6:30 PM</button>
<button className="py-2 rounded border border-slate-700 bg-slate-800 text-xs text-white hover:bg-amber-600 hover:border-amber-600 transition-all" type="button">7:00 PM</button>
<button className="py-2 rounded border border-slate-700 bg-slate-800 text-xs text-white hover:bg-amber-600 hover:border-amber-600 transition-all" type="button">7:30 PM</button>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-white text-slate-950 py-3 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/5" type="button">
                            Confirm Reservation
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<a className="text-lg tracking-tighter text-white font-semibold flex items-center gap-2" href="#">
<span className="iconify text-amber-500" data-icon="lucide:flame" data-width="18"></span>
                        RASOI
                    </a>
<p className="text-slate-500 text-sm leading-relaxed">
                        Modern Indian cuisine honoring tradition through innovation.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Visit Us</h4>
<p className="text-slate-500 text-sm mb-2">123 Prince Street</p>
<p className="text-slate-500 text-sm">New York, NY 10012</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Contact</h4>
<p className="text-slate-500 text-sm mb-2">+1 (212) 555-0199</p>
<p className="text-slate-500 text-sm">reservations@rasoi.com</p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Hours</h4>
<div className="flex justify-between text-sm text-slate-500 mb-2">
<span>Mon-Sun</span>
<span>5:00 PM - 11:00 PM</span>
</div>
<div className="flex justify-between text-sm text-slate-500">
<span>Happy Hour</span>
<span>5:00 PM - 7:00 PM</span>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© 2024 Rasoi Restaurant Group. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
