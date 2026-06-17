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



        lucide.createIcons();
        
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            const mainBody = document.getElementById('main-body');
            
            setTimeout(() => {
                preloader.classList.add('opacity-0');
                mainBody.classList.remove('overflow-hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 700);
            }, 1800);
        });
    
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
      

<div className="fixed inset-0 z-[100] bg-orange-600 flex flex-col items-center justify-center transition-opacity duration-700" id="preloader" style={{display: 'none'}}>
<div className="relative flex flex-col items-center">
<h1 className="text-6xl font-black italic text-white tracking-tighter mb-4 animate-bounce">Streetfi</h1>
<p className="text-white/80 text-lg font-medium tracking-wide">Foods &amp; Drinks</p>
<div className="mt-8">
<svg className="animate-spin h-8 w-8 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between gap-8">

<a className="flex-shrink-0" href="#">
<h1 className="text-3xl font-black italic text-black tracking-tighter">Streetfi</h1>
</a>

<div className="hidden md:flex flex-1 max-w-2xl bg-white border border-slate-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-lg h-12 items-center divide-x divide-slate-200">

<div className="flex items-center px-3 w-1/3 gap-2">
<svg className="lucide lucide-map-pin w-5 h-5 text-rose-400 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400" placeholder="New Delhi" type="text"/>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>

<div className="flex items-center px-3 flex-1 gap-2">
<svg className="lucide lucide-search w-5 h-5 text-slate-400 stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent outline-none text-sm text-slate-700 placeholder:text-slate-400" placeholder="Search for restaurant, cuisine or a dish" type="text"/>
</div>
</div>

<div className="flex items-center gap-6">
<a className="hidden lg:block text-lg text-slate-500 hover:text-slate-800 font-light transition-colors" href="#">Log in</a>
<a className="hidden lg:block text-lg text-slate-500 hover:text-slate-800 font-light transition-colors" href="#">Sign up</a>

<button className="md:hidden p-2">
<svg className="lucide lucide-menu w-6 h-6 text-slate-800 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<div className="border-b border-slate-100 bg-white pb-px">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="flex items-center gap-8 pt-6 pb-4 overflow-x-auto no-scrollbar">

<button className="flex items-center gap-3 pb-3 border-b-2 border-rose-500 transition-all group min-w-max">
<div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center transition-colors">
<img alt="Delivery" className="w-8 h-8 opacity-90 grayscale-0" src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"/>
</div>
<span className="text-xl font-medium text-rose-500 tracking-tight">Delivery</span>
</button>


<button className="flex items-center gap-3 pb-3 border-b-2 border-transparent hover:border-slate-300 transition-all group min-w-max">
<div className="w-14 h-14 rounded-full bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center transition-colors">
<img alt="Nightlife" className="w-8 h-8 opacity-60 grayscale group-hover:grayscale-0 transition-all" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"/>
</div>
<span className="text-xl font-normal text-slate-500 group-hover:text-slate-800 tracking-tight">Nightlife</span>
</button>
</div>
</div>
</div>

<main className="bg-slate-50/50 min-h-screen pb-20 pt-8">
<div className="max-w-7xl mx-auto px-4 lg:px-8">

<div className="flex items-center gap-3 overflow-x-auto no-scrollbar mb-8 sticky top-24 z-30 py-2 -mx-4 px-4 bg-slate-50/50 backdrop-blur-sm lg:static lg:bg-transparent lg:p-0">

<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow text-slate-600 text-sm font-normal min-w-max">
<svg className="lucide lucide-sliders-horizontal w-4 h-4 stroke-[1.5]" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                    Filters
                </button>

<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow text-slate-600 text-sm font-normal min-w-max">
                    Pure Veg
                </button>

<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow text-slate-600 text-sm font-normal min-w-max">
                    Cuisines
                    <svg className="lucide lucide-chevron-down w-3 h-3 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg shadow-sm hover:shadow text-slate-600 text-sm font-normal min-w-max">
                    Rating 4.0+
                </button>
</div>

<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-8">
                Delivery Restaurants in New Delhi
            </h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">

<div className="group relative bg-transparent rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white p-3 -m-3 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-100">

<div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-3">
<img alt="Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-0 bg-blue-600 px-2 py-0.5 rounded-r-md">
<span className="text-xs font-medium text-white tracking-wide uppercase">50% OFF up to $100</span>
</div>

<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-slate-800">25 min</span>
</div>

<div className="absolute top-0 left-0 bg-black/50 backdrop-blur-[2px] px-3 py-1 rounded-br-xl">
<span className="text-xs font-medium text-white tracking-wider">Promoted</span>
</div>

<button className="absolute top-3 right-3 p-2 bg-transparent hover:bg-white/20 rounded-full transition-colors">
<svg className="lucide lucide-heart w-6 h-6 text-white stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>

<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold text-slate-900 truncate pr-4">Burger King</h3>
<div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[6px]">
<span className="text-xs font-semibold">4.2</span>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span className="truncate w-2/3">Burger, American, Fast Food</span>
<span className="text-slate-500 font-medium">₹150 for one</span>
</div>
</div>

<div className="h-px bg-slate-200 my-3"></div>

<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-2.5 h-2.5 text-purple-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-xs text-slate-500 font-medium truncate">2400+ orders placed from here recently</p>
</div>
</div>

<div className="group relative bg-transparent rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white p-3 -m-3 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-100">
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-3">
<img alt="Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 bg-blue-600 px-2 py-0.5 rounded-r-md">
<span className="text-xs font-medium text-white tracking-wide uppercase">Flat ₹125 OFF</span>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-slate-800">42 min</span>
</div>
<button className="absolute top-3 right-3 p-2 bg-transparent hover:bg-white/20 rounded-full transition-colors">
<svg className="lucide lucide-heart w-6 h-6 text-white stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold text-slate-900 truncate pr-4">La Pino'z Pizza</h3>
<div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[6px]">
<span className="text-xs font-semibold">4.0</span>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span className="truncate w-2/3">Pizza, Pasta, Italian</span>
<span className="text-slate-500 font-medium">₹200 for one</span>
</div>
</div>
<div className="h-px bg-slate-200 my-3"></div>
<div className="flex items-center gap-2">
<img alt="safety" className="w-4 h-auto" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"/>
<p className="text-xs text-slate-500 font-medium truncate">Follows all Max Safety measures</p>
</div>
</div>

<div className="group relative bg-transparent rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white p-3 -m-3 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-100">
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-3">
<img alt="Indian" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-slate-800">30 min</span>
</div>
<button className="absolute top-3 right-3 p-2 bg-transparent hover:bg-white/20 rounded-full transition-colors">
<svg className="lucide lucide-heart w-6 h-6 text-white stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold text-slate-900 truncate pr-4">North Indian Delights</h3>
<div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[6px]">
<span className="text-xs font-semibold">4.4</span>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span className="truncate w-2/3">North Indian, Mughlai</span>
<span className="text-slate-500 font-medium">₹350 for one</span>
</div>
</div>
<div className="h-px bg-slate-200 my-3"></div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center">
<svg className="lucide lucide-award w-2.5 h-2.5 text-blue-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<p className="text-xs text-slate-500 font-medium truncate">Best in Hygienic protocols</p>
</div>
</div>

<div className="group relative bg-transparent rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white p-3 -m-3 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-100">
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-3">
<img alt="Burger" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 bg-blue-600 px-2 py-0.5 rounded-r-md">
<span className="text-xs font-medium text-white tracking-wide uppercase">10% OFF</span>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-slate-800">15 min</span>
</div>
<button className="absolute top-3 right-3 p-2 bg-transparent hover:bg-white/20 rounded-full transition-colors">
<svg className="lucide lucide-heart w-6 h-6 text-white stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold text-slate-900 truncate pr-4">Wow! Momo</h3>
<div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[6px]">
<span className="text-xs font-semibold">3.9</span>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span className="truncate w-2/3">Momos, Tibetan, Fast Food</span>
<span className="text-slate-500 font-medium">₹100 for one</span>
</div>
</div>
<div className="h-px bg-slate-200 my-3"></div>
<div className="flex items-center gap-2">
<img alt="safety" className="w-4 h-auto" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"/>
<p className="text-xs text-slate-500 font-medium truncate">Follows all Max Safety measures</p>
</div>
</div>

<div className="group relative bg-transparent rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white p-3 -m-3 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-100">
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-3">
<img alt="Biryani" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-slate-800">55 min</span>
</div>
<button className="absolute top-3 right-3 p-2 bg-transparent hover:bg-white/20 rounded-full transition-colors">
<svg className="lucide lucide-heart w-6 h-6 text-white stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold text-slate-900 truncate pr-4">Behrouz Biryani</h3>
<div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[6px]">
<span className="text-xs font-semibold">4.3</span>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span className="truncate w-2/3">Biryani, Mughlai, Kebab</span>
<span className="text-slate-500 font-medium">₹500 for one</span>
</div>
</div>
<div className="h-px bg-slate-200 my-3"></div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-purple-100 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-2.5 h-2.5 text-purple-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-xs text-slate-500 font-medium truncate">5000+ orders placed from here recently</p>
</div>
</div>

<div className="group relative bg-transparent rounded-2xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:bg-white p-3 -m-3 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-100">
<div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mb-3">
<img alt="Dessert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-0 bg-blue-600 px-2 py-0.5 rounded-r-md">
<span className="text-xs font-medium text-white tracking-wide uppercase">20% OFF</span>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
<span className="text-xs font-semibold text-slate-800">20 min</span>
</div>
<button className="absolute top-3 right-3 p-2 bg-transparent hover:bg-white/20 rounded-full transition-colors">
<svg className="lucide lucide-heart w-6 h-6 text-white stroke-[1.5]" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-lg font-semibold text-slate-900 truncate pr-4">Baskin Robbins</h3>
<div className="flex items-center gap-1 bg-green-700 text-white px-1.5 py-0.5 rounded-[6px]">
<span className="text-xs font-semibold">4.6</span>
<svg className="lucide lucide-star w-2.5 h-2.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span className="truncate w-2/3">Ice Cream, Desserts</span>
<span className="text-slate-500 font-medium">₹250 for one</span>
</div>
</div>
<div className="h-px bg-slate-200 my-3"></div>
<div className="flex items-center gap-2">
<img alt="safety" className="w-4 h-auto" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"/>
<p className="text-xs text-slate-500 font-medium truncate">Follows all Max Safety measures</p>
</div>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-lg text-slate-600 mb-6 font-normal">End of search results</p>
<button className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                     Show more restaurants
                 </button>
</div>
</div>
</main>

<footer className="bg-slate-100 border-t border-slate-200 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="flex justify-between items-center mb-8">
<h1 className="text-2xl font-black italic text-black tracking-tighter">Streetfi</h1>
<div className="flex gap-4">
<button className="flex gap-2 hover:bg-slate-200 transition-colors bg-transparent border-slate-300 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<img alt="India" className="w-5" src="https://flagcdn.com/w20/in.png"/>
<span className="text-sm font-medium text-slate-700">India</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button><button className="flex gap-2 hover:bg-slate-200 transition-colors bg-transparent border-slate-300 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-globe w-4 h-4 text-slate-700" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm font-medium text-slate-700">English</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="flex flex-col gap-2">
<h4 className="uppercase text-sm font-medium text-slate-900 tracking-wide mb-1">About Streetfi</h4>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Who We Are</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Blog</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Work With Us</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Investor Relations</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Report Fraud</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-sm font-medium text-slate-900 tracking-wide uppercase mb-1">For Restaurants</h4>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Partner With Us</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Apps For You</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-sm font-medium text-slate-900 tracking-wide uppercase mb-1">Learn More</h4>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Privacy</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Security</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Terms</a>
<a className="text-sm text-slate-500 hover:text-slate-700" href="#">Sitemap</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-slate-900 tracking-wide uppercase mb-1">Social Links</h4>
<div className="flex gap-2">
<a className="text-white bg-black rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="p-1.5 bg-black rounded-full text-white" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="p-1.5 bg-black rounded-full text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="p-1.5 bg-black rounded-full text-white" href="#"><svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="p-1.5 bg-black rounded-full text-white" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
</div>
<div className="border-t border-slate-300 pt-6">
<p className="text-xs text-slate-500 text-left">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Streetfi Ltd. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
