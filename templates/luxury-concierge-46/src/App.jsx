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
      

<header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-neutral-200 transition-all duration-300">
<div className="max-w-[1200px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-neutral-900 flex-shrink-0" href="#">INTJ</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-900 transition-colors" href="#">CARS</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">YACHTS</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">JETS</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">HOMES</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">ABOUT</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">CONTACT</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="tel:3103400929">
<iconify-icon className="text-lg" icon="lucide:phone" style={{strokeWidth: '1.5'}}></iconify-icon>
                    (310) 340-0929
                </a>
<a className="bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-inset ring-neutral-900/10" href="#">
                    BOOK NOW
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-24 md:pt-40 md:pb-28 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-50 -z-10"></div>
<div className="max-w-4xl mx-auto z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-600">Curated Collection</span>
</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-500 mb-2">Bespoke Luxury Concierge</h2>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-neutral-900 mb-2">Exotic Automobiles</h1>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-500 mb-8">Tailored to You</h2>
<p className="text-base md:text-lg text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Your dedicated concierge for exotic car rentals, private aviation, yacht charters, and luxury estates.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-neutral-900 text-sm font-medium px-6 py-3 rounded-xl border border-neutral-200 shadow-sm hover:bg-neutral-50 transition-colors" href="#">
                    Speak with a Concierge
                    <iconify-icon className="text-lg" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-neutral-900 text-white text-sm font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-neutral-800 transition-colors ring-1 ring-inset ring-neutral-900/10" href="#inventory">
                    View Exotic Cars
                </a>
</div>
</div>
</section>

<section className="relative w-full">

<div className="relative w-full h-[320px] bg-neutral-900 overflow-hidden flex flex-col justify-center">
<div className="absolute inset-0 z-0">
<img alt="Exotic Cars" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/80 to-neutral-50"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto w-full px-4 -mt-16">
<div className="relative flex items-center shadow-2xl shadow-black/20 rounded-xl">
<iconify-icon className="absolute left-5 text-neutral-400 text-xl" icon="lucide:search" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-14 pr-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-white/30 backdrop-blur-md" placeholder="Search by make, model, or keyword..." type="text"/>
</div>
</div>
</div>

<div className="max-w-[1000px] mx-auto px-4 relative -mt-24 z-20 mb-8">
<div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-neutral-100 p-8">
<div className="flex items-center justify-between mb-8">
<h3 className="text-xs font-semibold tracking-widest text-neutral-500 uppercase">Filter by Brand</h3>
<button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-colors">All Brands</button>
</div>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors flex-shrink-0">
<iconify-icon className="text-lg" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex-1 flex items-center justify-between gap-6 overflow-hidden px-2">
<div className="flex flex-col items-center gap-3 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity min-w-[70px]">
<iconify-icon className="text-4xl text-neutral-900" icon="simple-icons:bentley"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Bentley</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group hover:opacity-100 transition-opacity min-w-[70px]">
<iconify-icon className="text-4xl text-neutral-900" icon="simple-icons:lamborghini"></iconify-icon>
<span className="text-xs text-neutral-900 font-semibold">Lamborghini</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity min-w-[70px]">
<iconify-icon className="text-4xl text-neutral-900" icon="simple-icons:rollsroyce"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Rolls-Royce</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity min-w-[70px]">
<iconify-icon className="text-4xl text-neutral-900" icon="simple-icons:mercedes"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Mercedes-Benz</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity min-w-[70px]">
<iconify-icon className="text-4xl text-neutral-900" icon="simple-icons:mclaren"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">McLaren</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group opacity-50 hover:opacity-100 transition-opacity min-w-[70px]">
<iconify-icon className="text-4xl text-neutral-900" icon="simple-icons:porsche"></iconify-icon>
<span className="text-xs text-neutral-600 font-medium">Porsche</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors flex-shrink-0">
<iconify-icon className="text-lg" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 md:px-8 bg-neutral-50" id="inventory">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2">Available Now</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">Featured Inventory</h2>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-neutral-900 text-white shadow-sm">All</button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 shadow-sm transition-colors">Cars</button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 shadow-sm transition-colors">Yachts</button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 shadow-sm transition-colors">Jets</button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50 shadow-sm transition-colors">Homes</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="R8 Spyder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:car" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-orange-600 bg-orange-50 border border-orange-100/50">Audi</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">R8 Spyder White</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="Huracan Evo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:car" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-orange-600 bg-orange-50 border border-orange-100/50">Lamborghini</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">Huracan Evo White (2023)</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="115 Footer Rodman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:ship" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-sky-600 bg-sky-50 border border-sky-100/50 leading-relaxed">115 Footer Rodman Rental</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">115 Footer Rodman</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="Azimut Millennium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:ship" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-sky-600 bg-sky-50 border border-sky-100/50 leading-relaxed">Azimut Millennium II Yacht Rental in Beverly Hills, LA</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">Azimut Millennium</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="Gulfstream GIV" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-amber-400 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:plane" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-amber-600 bg-amber-50 border border-amber-100/50">Gulfstream</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">Gulfstream GIV (G450)</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="Boeing BBJ 787" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1565012574044-38b4d8ec3cfa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-amber-400 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:plane" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-amber-600 bg-amber-50 border border-amber-100/50">Boeing</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">BBJ 787</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="Martel #M" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-green-400 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-green-600 bg-green-50 border border-green-100/50 leading-relaxed">Martel #M - Luxury Rental Home in West Hollywood</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">Luxury Rental Home in West Hollywood</h3>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="relative h-48 bg-neutral-100 overflow-hidden">
<img alt="Rexford Mansion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-green-400 text-white flex items-center justify-center shadow-sm">
<iconify-icon className="text-lg" icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col items-start gap-3">
<span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide text-green-600 bg-green-50 border border-green-100/50 leading-relaxed">Rexford Mansion - Beverly Hills</span>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 leading-tight">Rexford Mansion - Beverly Hills</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 md:px-8 bg-neutral-50 pb-32 border-b border-neutral-200">
<div className="max-w-[1200px] mx-auto">
<div className="mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-2">All Vehicles</h2>
<p className="text-sm text-neutral-500">65 vehicles available</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative rounded-[20px] overflow-hidden aspect-[4/3] group cursor-pointer bg-neutral-200 shadow-sm border border-neutral-200">
<img alt="Porsche" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1503376713246-1f17544e3ae9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-5 left-5 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-sm">
                        PORSCHE
                    </div>
<div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 px-6">
<div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
</div>
</div>

<div className="relative rounded-[20px] overflow-hidden aspect-[4/3] group cursor-pointer bg-neutral-200 shadow-sm border border-neutral-200">
<img alt="BMW" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1555353540-64fd1b62382e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-5 left-5 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-sm">
                        BMW
                    </div>
<div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 px-6">
<div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
</div>
</div>

<div className="relative rounded-[20px] overflow-hidden aspect-[4/3] group cursor-pointer bg-neutral-200 shadow-sm border border-neutral-200">
<img alt="Audi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-5 left-5 bg-neutral-900/80 backdrop-blur-md text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-lg shadow-sm">
                        AUDI
                    </div>
<div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-2 px-6">
<div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/60 hover:bg-white transition-colors"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-neutral-950 text-white">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">The INTJ Difference</h2>
<p className="text-lg text-neutral-400">White-Glove Service, Every Time</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="lucide:route" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium tracking-widest text-neutral-500 mb-3">01</span>
<h3 className="text-lg font-semibold tracking-tight mb-3">Seamless Delivery</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Door-to-door delivery &amp; pickup scheduled around your itinerary, ensuring effortless transitions &amp; total convenience.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="lucide:clock" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium tracking-widest text-neutral-500 mb-3">02</span>
<h3 className="text-lg font-semibold tracking-tight mb-3">Available 24/7</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Our concierge team is always on call to assist with reservations, changes, or special requests.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium tracking-widest text-neutral-500 mb-3">03</span>
<h3 className="text-lg font-semibold tracking-tight mb-3">Vetted Collection</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Every vehicle, vessel, aircraft, and property is hand-selected and maintained to the highest standards.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-3xl text-neutral-300 mb-6" icon="lucide:user-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium tracking-widest text-neutral-500 mb-3">04</span>
<h3 className="text-lg font-semibold tracking-tight mb-3">Dedicated Service</h3>
<p className="text-sm text-neutral-400 leading-relaxed">A personal concierge assigned to your account ensures seamless coordination from start to finish.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-neutral-50 border-b border-neutral-200">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">Trusted by Discerning Clients</h2>
<div className="bg-white border border-neutral-200 rounded-[24px] p-8 md:p-12 shadow-sm relative">
<iconify-icon className="absolute text-5xl text-neutral-100 top-6 left-6 rotate-180" icon="lucide:quote" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-lg md:text-xl font-medium tracking-tight text-neutral-800 mb-8 relative z-10 leading-relaxed">
                    "The level of service exceeded our expectations. From vehicle selection to delivery coordination, every detail was handled with professionalism and discretion."
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
<div className="flex flex-col items-center md:items-end">
<span className="text-sm font-semibold text-neutral-900">Michael R.</span>
<span className="text-xs text-neutral-500">CEO, Tech Ventures</span>
</div>
<div className="hidden md:block w-px h-8 bg-neutral-200"></div>
<div className="inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-100 text-xs font-medium text-neutral-600">
                        Exotic Car Rental
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-white">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-50 border border-neutral-100 mb-8 shadow-sm">
<iconify-icon className="text-2xl text-neutral-900" icon="lucide:phone-call" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Let Us Arrange Your Next Experience</h2>
<p className="text-lg text-neutral-500 mb-10 leading-relaxed">
                Our concierge team is available around the clock to assist with reservations, special requests, and personalized recommendations.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-neutral-50 p-6 md:p-8 rounded-2xl border border-neutral-100 shadow-sm">
<div className="text-center sm:text-left">
<span className="block text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-1">Operational 24/7</span>
<a className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors" href="tel:3103400929">
                        (310) 340-0929
                    </a>
</div>
<div className="hidden sm:block w-px h-16 bg-neutral-200"></div>
<a className="w-full sm:w-auto bg-neutral-900 text-white text-sm font-medium px-8 py-4 rounded-xl shadow-sm hover:bg-neutral-800 transition-colors ring-1 ring-inset ring-neutral-900/10 whitespace-nowrap" href="#">
                    Speak with a Concierge
                </a>
</div>
</div>
</section>

<footer className="bg-neutral-50 pt-16 pb-8 px-4 md:px-8 border-t border-neutral-200 mt-auto">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tight text-neutral-900 block mb-4" href="#">INTJ</a>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Bespoke luxury concierge providing exclusive access to the world's finest vehicles, vessels, aircraft, and estates.
                    </p>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-900 mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Exotic Cars</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Yacht Charters</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Private Jets</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Luxury Homes</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Chauffeur Service</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-900 mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-xs font-semibold tracking-widest uppercase text-neutral-900 mb-6">Contact</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2" href="tel:3103400929">
<iconify-icon icon="lucide:phone" style={{strokeWidth: '1.5'}}></iconify-icon> (310) 340-0929
                            </a>
</li>
<li>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2" href="mailto:concierge@intj.com">
<iconify-icon icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon> concierge@intj.com
                            </a>
</li>
<li className="pt-4 flex items-center gap-5">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="lucide:instagram" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="lucide:twitter" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2024 INTJ The Architect. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<span>Los Angeles</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>Miami</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>Global</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
