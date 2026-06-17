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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white hover:text-orange-500 transition-colors uppercase" href="#">
                SASPOLO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<a className="bg-white text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold tracking-tight hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2" href="#reserve">
                    Reserve Table
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" style={{maskImage: 'linear-gradient(240deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(240deg, transparent, black 0%, black 100%, transparent)'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
<div className="absolute top-20 left-10 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[100px]">
</div>
<div className="absolute top-40 right-10 w-72 h-72 bg-rose-600 rounded-full mix-blend-screen filter blur-[100px]">
</div>
</div>
<div className="z-10 grid md:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto relative gap-x-12 gap-y-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300 tracking-wide">New Seasonal Menu Available</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium tracking-tight">
                Flavor that 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-500 to-purple-500">ignites</span>
                the senses.
            </h1>
<p className="text-lg text-zinc-400 max-w-md leading-relaxed">
                Experience a culinary journey where vibrant aesthetics meet traditional techniques. Saspolo defines
                modern gastronomy.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2 gap-x-4 gap-y-4">
<button className="group h-12 px-6 rounded-full bg-orange-600 text-white font-medium text-sm hover:bg-orange-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(234,88,12,0.5)]">
                        Order Now
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="h-12 px-6 rounded-full border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-white transition-all bg-zinc-900/50 backdrop-blur-sm">
                        View Full Menu
                    </button>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700">
</div>
<img alt="Delicious Food" className="relative w-full rounded-2xl border border-white/10 shadow-2xl object-cover h-[500px] grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-zinc-900 p-4 rounded-xl border border-zinc-800 shadow-xl flex items-center gap-4">
<div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
<iconify-icon icon="lucide:star" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-white">Top Rated</div>
<div className="text-xs text-zinc-500">Michelin Guide '24</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-3xl font-medium tracking-tight text-white">15+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Years Experience</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-3xl font-medium tracking-tight text-white">24k</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Happy Customers</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-3xl font-medium tracking-tight text-white">100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Organic Sourced</span>
</div>
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-3xl font-medium tracking-tight text-white">4.9</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Average Rating</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Curated Delicacies</h2>
<p className="text-zinc-400 max-w-sm">Hand-picked ingredients prepared with passion and precision.</p>
</div>

<div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 p-1.5 rounded-lg">
<button className="px-4 py-1.5 rounded-md bg-zinc-800 text-white text-xs font-medium shadow-sm transition-all">All</button>
<button className="px-4 py-1.5 rounded-md hover:bg-zinc-800/50 text-zinc-400 hover:text-white text-xs font-medium transition-all">Breakfast</button>
<button className="px-4 py-1.5 rounded-md hover:bg-zinc-800/50 text-zinc-400 hover:text-white text-xs font-medium transition-all">Main</button>
<button className="px-4 py-1.5 rounded-md hover:bg-zinc-800/50 text-zinc-400 hover:text-white text-xs font-medium transition-all">Desserts</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Spicy Angus Supreme</h3>
<span className="text-orange-400 font-medium">$24</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Aged cheddar, caramelized onions, spicy relish, and our signature Saspolo sauce.</p>
<div className="flex items-center justify-between">
<div className="flex gap-1">
<iconify-icon className="text-orange-500" icon="lucide:flame" width="14"></iconify-icon>
<span className="text-xs text-zinc-400">Spicy</span>
</div>
<button className="h-8 w-8 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Pasta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Truffle Carbonara</h3>
<span className="text-orange-400 font-medium">$32</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Fresh handmade pasta, guanciale, pecorino romano, and shaved black truffles.</p>
<div className="flex items-center justify-between">
<div className="flex gap-1">
<iconify-icon className="text-yellow-500" icon="lucide:wheat" width="14"></iconify-icon>
<span className="text-xs text-zinc-400">Gluten opt.</span>
</div>
<button className="h-8 w-8 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Bowl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-white">Zen Poke Bowl</h3>
<span className="text-orange-400 font-medium">$18</span>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Sashimi grade salmon, avocado, edamame, mango salsa, and sesame dressing.</p>
<div className="flex items-center justify-between">
<div className="flex gap-1">
<iconify-icon className="text-green-500" icon="lucide:leaf" width="14"></iconify-icon>
<span className="text-xs text-zinc-400">Healthy</span>
</div>
<button className="h-8 w-8 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    View Full Menu PDF
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative border-t border-white/5" id="reserve">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid md:grid-cols-2">
<div className="p-8 md:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-medium tracking-tight mb-2">Book a Table</h2>
<p className="text-zinc-400 text-sm mb-8">Secure the best spot for your dining experience.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Date</label>
<input className="w-full bg-transparent border-b border-zinc-800 py-2 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-zinc-600" type="date"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Guests</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-zinc-800 py-2 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
<option className="bg-zinc-900">2 People</option>
<option className="bg-zinc-900">4 People</option>
<option className="bg-zinc-900">6+ People</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-zinc-500 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-transparent border-b border-zinc-800 py-2 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-zinc-700" placeholder="John Doe" type="text"/>
</div>

<div className="flex items-center justify-between pt-2">
<span className="text-sm text-zinc-300">Request Window Seat</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-800 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
<button className="w-full bg-white text-zinc-950 mt-4 py-3 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors">
                                Confirm Reservation
                            </button>
</form>
</div>
<div className="relative h-64 md:h-auto bg-zinc-800">
<img alt="Restaurant interior" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-zinc-950/80 backdrop-blur-md border border-white/5 p-4 rounded-xl">
<div className="flex items-center gap-3">
<div className="p-2 bg-orange-500/20 rounded-lg text-orange-500">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">128 Culinary Ave.</p>
<p className="text-xs text-zinc-500">Downtown District, NY</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-white uppercase">SASPOLO</span>
<span className="text-zinc-600">/</span>
<span className="text-xs text-zinc-500">EST. 2023</span>
</div>
<div className="flex gap-6 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
</div>
<p className="text-xs text-zinc-600">© 2024 Saspolo Food Group. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
