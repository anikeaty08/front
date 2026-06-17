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
      

<nav className="absolute top-0 w-full z-50 px-6 py-6 transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-2xl" icon="solar:earth-linear"></iconify-icon>
<span>VOYAGE.</span>
</a>

<div className="hidden md:flex items-center gap-8 bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
<a className="text-sm font-medium text-white hover:text-white/70 transition-colors" href="#">Stays</a>
<a className="text-sm font-medium text-white hover:text-white/70 transition-colors" href="#">Flights</a>
<a className="text-sm font-medium text-white hover:text-white/70 transition-colors" href="#">Experiences</a>
</div>

<div className="hidden md:flex items-center gap-5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">

<button className="relative text-white hover:text-white/70 transition-colors flex items-center justify-center p-1">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-400 rounded-full border border-black/20"></span>
</button>

<button className="text-white hover:text-white/70 transition-colors flex items-center justify-center p-1">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>

<button className="flex items-center gap-2 text-white hover:text-white/70 transition-colors pl-2 border-l border-white/20">
<div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</button>
</div>

<button className="md:hidden text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-24 md:pt-48 md:pb-40 min-h-[60vh] flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Serene lake and mountains" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80" />
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-gray-50"></div>
</img></div>
<div className="relative z-10 w-full px-6 flex flex-col items-center mt-12">

<div className="w-full max-w-4xl bg-white rounded-3xl p-2 shadow-2xl shadow-black/10 border border-gray-100/50 backdrop-blur-xl flex flex-col md:flex-row gap-2">

<div className="flex-1 flex items-center gap-4 px-5 py-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-text group relative border border-transparent hover:border-gray-100">
<iconify-icon className="text-gray-400 text-xl group-hover:text-gray-900 transition-colors" icon="solar:map-point-linear"></iconify-icon>
<div className="flex flex-col flex-1">
<span className="text-xs font-medium text-gray-500 mb-0.5">Where to?</span>
<input className="bg-transparent text-sm font-medium text-gray-900 placeholder-gray-300 focus:outline-none w-full truncate" placeholder="Search destinations" type="text"/>
</div>
</div>
<div className="hidden md:block w-px bg-gray-100 my-3"></div>
<div className="md:hidden h-px bg-gray-100 mx-5"></div>

<div className="flex-[0.8] flex items-center gap-4 px-5 py-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group relative border border-transparent hover:border-gray-100">
<iconify-icon className="text-gray-400 text-xl group-hover:text-gray-900 transition-colors" icon="solar:calendar-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-500 mb-0.5">Dates</span>
<span className="text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">Add when</span>
</div>
</div>
<div className="hidden md:block w-px bg-gray-100 my-3"></div>
<div className="md:hidden h-px bg-gray-100 mx-5"></div>

<div className="flex-[0.8] flex items-center gap-4 px-5 py-4 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer group relative border border-transparent hover:border-gray-100">
<iconify-icon className="text-gray-400 text-xl group-hover:text-gray-900 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-500 mb-0.5">Travelers</span>
<span className="text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">Add guests</span>
</div>
</div>

<button className="bg-gray-900 hover:bg-gray-800 text-white mt-2 md:mt-0 p-4 md:px-8 rounded-2xl flex items-center justify-center gap-2 transition-all font-medium text-sm w-full md:w-auto hover:shadow-lg hover:shadow-gray-900/20 active:scale-[0.98]">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
<span>Search</span>
</button>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">

<div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 rounded-2xl p-4 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">

<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
<button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
                    Price
                    <iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
                    Rating
                    <iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
                    Amenities
                    <iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="w-px h-6 bg-gray-200 hidden md:block mx-1"></div>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-colors whitespace-nowrap">
<iconify-icon icon="solar:tuning-linear"></iconify-icon>
                    More filters
                </button>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-6">

<div className="flex items-center gap-2 text-sm">
<span className="text-gray-500 font-medium hidden sm:inline">Sort by:</span>
<button className="flex items-center gap-1.5 font-medium text-gray-900 hover:text-gray-600 transition-colors">
                        Recommended
                        <iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-3 pl-6 border-l border-gray-200">
<span className="text-sm font-medium text-gray-700">Map view</span>
<div className="relative inline-block w-10 align-middle select-none">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 opacity-0" id="mapToggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-200" htmlFor="mapToggle"></label>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-6">Explore destinations</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-gray-100 isolate">
<img alt="Kyoto, Japan" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl z-10 pointer-events-none"></div>

<button className="absolute top-3 right-3 p-2 bg-white/70 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center z-20 text-gray-500 hover:text-red-500 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>

<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
<button className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                View details
                            </button>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex flex-col">
<h3 className="font-semibold text-gray-900 text-base mb-0.5 tracking-tight truncate">Machiya Townhouse</h3>
<p className="text-gray-500 text-sm font-normal truncate">Kyoto, Japan</p>
</div>
<div className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md">
<iconify-icon className="text-[10px] text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">4.9</span>
</div>
</div>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-base text-gray-900">$240</span>
<span className="text-sm text-gray-500 font-normal">night</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-gray-100 isolate">
<img alt="Cinque Terre, Italy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl z-10 pointer-events-none"></div>

<button className="absolute top-3 right-3 p-2 bg-white rounded-full flex items-center justify-center z-20 text-red-500 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:heart-bold"></iconify-icon>
</button>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
<button className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                View details
                            </button>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex flex-col">
<h3 className="font-semibold text-gray-900 text-base mb-0.5 tracking-tight truncate">Cliffside Villa</h3>
<p className="text-gray-500 text-sm font-normal truncate">Amalfi, Italy</p>
</div>
<div className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md">
<iconify-icon className="text-[10px] text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">4.8</span>
</div>
</div>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-base text-gray-900">$850</span>
<span className="text-sm text-gray-500 font-normal">night</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-gray-100 isolate">
<img alt="Bali, Indonesia" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl z-10 pointer-events-none"></div>
<button className="absolute top-3 right-3 p-2 bg-white/70 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center z-20 text-gray-500 hover:text-red-500 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
<button className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                View details
                            </button>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex flex-col">
<h3 className="font-semibold text-gray-900 text-base mb-0.5 tracking-tight truncate">Tropical Treehouse</h3>
<p className="text-gray-500 text-sm font-normal truncate">Bali, Indonesia</p>
</div>
<div className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md">
<iconify-icon className="text-[10px] text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">4.9</span>
</div>
</div>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-base text-gray-900">$180</span>
<span className="text-sm text-gray-500 font-normal">night</span>
</div>
</div>

<div className="group flex flex-col">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 bg-gray-100 isolate">
<img alt="Venice, Italy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 border border-black/5 rounded-2xl z-10 pointer-events-none"></div>
<button className="absolute top-3 right-3 p-2 bg-white/70 backdrop-blur-md hover:bg-white rounded-full flex items-center justify-center z-20 text-gray-500 hover:text-red-500 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
<button className="bg-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                View details
                            </button>
</div>
</div>
<div className="flex justify-between items-start gap-2">
<div className="flex flex-col">
<h3 className="font-semibold text-gray-900 text-base mb-0.5 tracking-tight truncate">Grand Canal Suite</h3>
<p className="text-gray-500 text-sm font-normal truncate">Venice, Italy</p>
</div>
<div className="flex items-center gap-1 bg-gray-100 px-1.5 py-0.5 rounded-md">
<iconify-icon className="text-[10px] text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-semibold text-gray-900">4.7</span>
</div>
</div>
<div className="mt-2 flex items-baseline gap-1">
<span className="font-semibold text-base text-gray-900">$420</span>
<span className="text-sm text-gray-500 font-normal">night</span>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-full transition-colors">
                    Load more
                </button>
</div>
</div>
</main>

<footer className="border-t border-gray-200 bg-white pt-16 pb-8 px-6 mt-16">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-gray-900 font-semibold tracking-tighter text-lg">
<iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon>
<span>VOYAGE.</span>
</div>
<div className="flex gap-6 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 transition-colors" href="#">Support</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="hover:text-gray-900 transition-colors" href="#">Privacy</a>
</div>
<div className="text-xs text-gray-400 font-normal">
                © 2023 Voyage Inc. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
